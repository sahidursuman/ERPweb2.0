/**
 * Description：财务收款
 * Author：roger.wei
 * Date: 2015-12-8
 * 
 */
define(function(require, exports) {
    var menuKey = 'financial_income',
        listTemplate = require('./view/list'),
        listHeaderTemplate = require('./view/listHeader'),
        listTableTemplate = require('./view/listTable');

    var FinIncome = {
        currentType: 0,
        accountStatus:2,
        moduleKeys: ['financial_Client', 'financial_innerTransfer_in', 'financial_shop', 'financial_replace', 'financial_Other_accounts']
    };

    /**
     * 初始化页面
     * @return {[type]} [description]
     */
    FinIncome.initModule = function() {
        FinIncome.$tab = false;
        var data = FinancialService.getInitDate();
        data.accountStatus = FinIncome.accountStatus;
        if (Tools.addTab(menuKey, '财务收款', listTemplate(data))) {
            FinIncome.initEvent();
        }

        FinIncome.currentType = 0;
        FinIncome.getList(0);
    };

    /**
     * [getList description]
     * @return {[type]} [description]
     */
    FinIncome.getList = function(pageNo) {
        if (FinIncome.$tab) {
            var args = {
                    startTime: FinIncome.$tab.find('.T-start').val(),
                    endTime: FinIncome.$tab.find('.T-end').val(),
                    accountStatus : FinIncome.$tab.find(".T-finance-status").find("button").attr("data-value")
                },
                org = FinIncome.$tab.find('.T-org-name').val();

            if (!!org && org != '全部') {
                args.name = org;
            }
        }

        args.pageNo = pageNo || 0;
        $.ajax(FinIncome.covertArgs(args))
            .done(function(data) {
                if (showDialog(data)) {
                    data = FinIncome.covertResponse(data);

                    FinIncome.$tab.find('.T-list').html(listTableTemplate(data));
                    //获取合计数据
                    var type = FinIncome.$tab.find('select[name=T-business-type]').val(),
                        path = '';
                    if (type != 1) {
                        FinIncome.$tab.find('.T-sum-area').html(listHeaderTemplate());

                        if (type == 0) {
                            path = 'financial/customerAccount';
                        } else if (type == 2) {
                            path = 'financial/shopAccount';
                        } else if (type == 3) {
                            path = 'financial/bookingAccount';
                        };
                        FinIncome.getSumMoney(FinIncome.$tab, args, path);
                    } else {
                        FinIncome.getSumMoney(FinIncome.$tab, args, path, data.sumInnerTransferIncome);
                    }
                    FinIncome.$tab.find('.T-sumItem').html('共计 ' + data.totalCount + ' 条记录');
                    // 绑定翻页组件
                    laypage({
                        cont: FinIncome.$tab.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                FinIncome.getList(obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };
    //获取合计数据
    FinIncome.getSumMoney = function(tabid, args, path, finData) {
        if (!!finData) {
            tabid.find('.T-sumNeedInMoney').text(finData.sumSettlementMoney);
            tabid.find('.T-sumReceiveMoney').text(finData.sumAlreadyIncomeMoney);
            tabid.find('.T-sumUnReceivedMoney').text(finData.sumUnIncomeMoney);
            tabid.find(".T-finance-status").find("button").data("value");
        } else {
            var params = {
                pageNo: args.pageNo,
                startDate: args.startTime,
                accountStatus: args.accountStatus,
                endDate: args.endTime,
            }; //
            $.ajax({
                    url: KingServices.build_url(path, 'listPagerTotal'),
                    type: 'POST',
                    data: params,
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        tabid.find('.T-sumNeedInMoney').text(data.sumSettlementMoney);
                        tabid.find('.T-sumReceiveMoney').text(data.sumReceiveMoney);
                        tabid.find('.T-sumUnReceivedMoney').text(data.sumUnReceivedMoney);
                    }
                });
        }

    };
    /**
     * 处理查询参数，适应不同接口的需要
     * @param  {object} args 页面参数
     * @return {[type]}      [description]
     */
    FinIncome.covertArgs = function(args) {
        var options = {
                method: 'post'
            },
            resArgs = {};

        resArgs.pageNo = args.pageNo;
        resArgs.accountStatus = args.accountStatus;
        FinIncome.accountStatus = args.accountStatus

        switch (FinIncome.currentType) {
            case 0: //客户账务
                options.url = KingServices.build_url('financial/customerAccount', 'listPager');
                resArgs.startDate = args.startTime;
                resArgs.endDate = args.endTime;
                resArgs.fromPartnerAgencyName = args.name;
                break;
            case 1: //内转转入
                options.url = KingServices.build_url('account/innerTransferIn', 'listInnerTransferIncome');
                resArgs.startAccountTime = args.startTime;
                resArgs.endAccountTime = args.endTime;
                resArgs.businessGroupName = args.name;
                break;
            case 2: //购物账务
                options.url = KingServices.build_url('financial/shopAccount', 'listPager');
                resArgs.startDate = args.startTime;
                resArgs.endDate = args.endTime;
                resArgs.shopName = args.name;
                break;
            default: //代订账务
                options.url = KingServices.build_url('financial/bookingAccount', 'listPager');
                resArgs.startDate = args.startTime;
                resArgs.endDate = args.endTime;
                resArgs.travelAgencyName = args.name;
                break;
        }

        options.data = resArgs;
        return options;
    };

    /**
     * 将不同的接口数据统一处理
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    FinIncome.covertResponse = function(data) {
        var list = [];
        if (!!data) {
            switch (FinIncome.currentType) {
                case 0: //客户账务
                    var src = data.customerAccountList;
                    for (var i = 0, len = src.length, tmp; i < len; i++) {
                        tmp = src[i];

                        list.push({
                            orgName: tmp.fromPartnerAgencyName,
                            needPayMoney: tmp.settlementMoney,
                            payedMoney: tmp.receiveMoney,
                            unPayedMoney: tmp.unReceivedMoney,
                            id: tmp.fromPartnerAgencyId
                        })
                    }

                    data.totalPage = data.searchParam.totalPage;
                    data.totalCount = data.searchParam.recordSize;
                    break;
                case 1: //内转转入
                    var src = data.innerTransferIncomeList;
                    for (var i = 0, len = src.length, tmp; i < len; i++) {
                        tmp = src[i];

                        list.push({
                            orgName: tmp.businessGroupName,
                            needPayMoney: tmp.settlementMoney,
                            payedMoney: tmp.alreadyIncomeMoney,
                            unPayedMoney: tmp.unIncomeMoney,
                            id: tmp.businessGroupId
                        })
                    }
                    data.sumInnerTransferIncome = data.sumInnerTransferIncomeList[0];
                    data.totalPage = data.totalPage;
                    data.totalCount = data.recordSize;
                    break;
                case 2: //购物账务
                    var src = data.shopAccountList;
                    for (var i = 0, len = src.length, tmp; i < len; i++) {
                        tmp = src[i];

                        list.push({
                            orgName: tmp.shopName,
                            needPayMoney: tmp.settlementMoney,
                            payedMoney: tmp.reciveMoney,
                            unPayedMoney: tmp.unReciveMoney,
                            id: tmp.shopId
                        })
                    }

                    data.totalPage = data.searchParam.totalPage;
                    data.totalCount = data.searchParam.recordSize;
                    break;
                default: //代订账务
                    var src = data.bookingAccountList;
                    for (var i = 0, len = src.length, tmp; i < len; i++) {
                        tmp = src[i];

                        list.push({
                            orgName: tmp.fromPartnerAgencyName,
                            needPayMoney: tmp.settlementMoney,
                            payedMoney: tmp.receiveMoney,
                            unPayedMoney: tmp.unReceivedMoney,
                            id: tmp.partnerAgencyId
                        })
                    }

                    data.totalPage = data.searchParam.totalPage;
                    data.totalCount = data.searchParam.recordSize;
                    break;
            }
        }

        data.list = list;
        return data;
    };

    /**
     * list事件绑定
     * @return {[type]} [description]
     */
    FinIncome.initEvent = function() {
        var $tab = $('#tab-' + menuKey + '-content');
        //状态框选择事件
        $tab.find(".T-finance-status").on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
            FinIncome.getList();
        });

        // 搜索区域
        $tab.find('.T-business-type').on('change', function(event) {
            event.preventDefault();
            FinIncome.currentType = $(this).val() * 1;
            FinIncome.$tab.find('.T-org-name').val('');
            FinIncome.getList();
        });

        Tools.setDatePicker($tab.find('.T-datepicker'), true);

        $tab.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinIncome.getList();
        });

        // 收款
        $tab.find('.T-list').on('click', '.T-income-task', function(event) {
            event.preventDefault();
            var $tr = $(this).closest('tr'),
                options = {
                    id: $tr.data('id'),
                    name: $tr.children('td').eq(0).text(),
                    startDate: $tab.find('.T-start').val(),
                    endDate: $tab.find('.T-end').val(),
                    accountStatus : FinIncome.accountStatus
                }
            FinIncome.doIncomeTask(options);
        });

        FinIncome.$tab = $tab;
    };

    /**
     * 执行收款
     * @param  {int} id 收款记录
     * @return {[type]}    [description]
     */
    FinIncome.doIncomeTask = function(options) {
        if (!!options) {
            var moduleKey = FinIncome.moduleKeys[FinIncome.currentType];

            seajs.use(ASSETS_ROOT + modalScripts[moduleKey], function(module) {
                module.initIncome(options);
            });
        }
    };

    // 暴露方法
    exports.init = FinIncome.initModule;
});