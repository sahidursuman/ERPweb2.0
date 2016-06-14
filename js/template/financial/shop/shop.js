/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var listTemplate = require("./view/list"),
        shopCheckingTemplate = require("./view/shopChecking"),
        shopClearingTemplate = require("./view/shopClearing"),
        viewReceivedTemplate = require("./view/viewReceived"),
        viewAccountTemplate = require('./view/viewAccount'),
        payingTableTemplate = require('./view/shopPayingTable'),
        menuKey = "financial_shop",
        checkMenuKey = menuKey + "_checking",
        settMenuKey = menuKey + "_clearing";

    var FinShop = {
        $tab: false,
        $checkingTab: false,
        checkingId: null
    }

    /**
     * 初始化模块
     */
    FinShop.initModule = function() {
        FinShop.$tab = null;
        FinShop.getList();
    };

    /**
     * 获取购物账务列表，初始化列表页面
     * @param  {int} page 页码
     */
    FinShop.getList = function(page, $tab) {
        var args = FinancialService.getInitDate();
        args.accountStatus = 2;
        args.sortType = "desc";
        args.pageNo = page || 0;
        if (!!$tab) {
            args = {
                pageNo: (page || 0),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                accountStatus : $tab.find(".T-finance-status").find("button").data("value"),
                sortType : $tab.find("select[name=orderBy]").val()
            }
            var shopName = $tab.find('.T-search-name').val().trim();
            args.shopName = shopName === '全部' ? '' : shopName;
        }
        args = FinancialService.getChangeArgs(args,FinShop.$tab);
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'listPager'),
            type: 'post',
            data: args //{searchParam : JSON.stringify()},
        }).done(function(data) {
            if (showDialog(data)) {
                Tools.addTab(menuKey, "购物账务", listTemplate(data));
                // 绑定事件
                FinShop.$tab = $tab = $('#tab-' + menuKey + '-content');
                FinShop.init_event($tab);
                //获取合计金额
                FinShop.getSumMoney(args, $tab);
                // 缓存页面
                FinShop.listPageNo = args.pageNo;
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            FinShop.getList(obj.curr - 1, $tab);
                        }
                    }
                });
            }
        });
    };
    //获取合计金额
    FinShop.getSumMoney = function(args, tabId) {
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'listPagerTotal'),
            data: args,
            type: "POST",
            success: function(data) {
                if (showDialog(data)) {
                    tabId.find('.T-sumCount').text(data.sumCount);
                    tabId.find('.T-sumOrderMoney').text(data.sumContractMoney);
                    tabId.find('.T-sumContractMoney').text(data.sumRebateMoney);
                    tabId.find('.T-sumStMoney').text(data.sumSettlementMoney);
                    tabId.find('.T-sumReceiveMoney').text(data.sumReceiveMoney);
                    tabId.find('.T-sumUnReceivedMoney').text(data.sumUnReceivedMoney);
                }
            }
        });
    };
    /**
     * 初始化列表页面的事件绑定
     */
    FinShop.init_event = function($tab) {

        /**
         * 搜索顶部的事件绑定
         */
        var $searchArea = $tab.find('.T-search-area');
        //搜索下拉事件
        $searchArea.find('.T-finance-status').on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            FinShop.getList(0,$tab);
        });
        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinShop.getList(0, $tab);
        });
        Tools.setDatePicker($searchArea.find('.datepicker'), true);
        FinShop.getShopName($searchArea.find('.T-search-name'));
        FinancialService.searchChange($tab);
        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                name = $that.closest('tr').data('name'),
                argsData = {
                    shopId: id,
                    shopName: name,
                    source: true,
                    startDate: $tab.find('.T-search-start-date').val(),
                    endDate: $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find(".T-finance-status").find("button").data("value")
                };
            if ($that.hasClass('T-checking')) {
                // 对账
                FinShop.accountChecking(argsData);
            } else if ($that.hasClass('T-settlement')) {
                // 结算

                FinShop.settlement(argsData);
            }
        });
    };

    FinShop.getShopName = function($obj) {
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'selectShopName'),
            type: "POST",
            showLoading: false
        }).done(function(data) {
            if (showDialog(data)) {
                for (var i = 0; i < data.shopList.length; i++) {
                    data.shopList[i].value = data.shopList[i].shopName;
                    data.shopList[i].id = data.shopList[i].shopId;
                }
                var all = { id: '', value: '全部' };
                FinShop.shopList = data.shopList.slice(all);
                if(!!$obj){
                    data.shopList.unshift(all);
                    $obj.autocomplete({
                        minLength: 0,
                        source : data.shopList,
                        change: function(event, ui) {
                            if (!ui.item) {
                                $(this).data('id', '');
                            }
                        },
                        select: function(event, ui) {
                            $(this).trigger('change');
                            $(this).blur().data('id', ui.item.id);
                        }
                    }).on('click', function() {
                        $obj.autocomplete('search','');
                    });
                }
            }
        });
    };

    /**
     * 初始化对账模块
     * @param  {[int]} id 购物账务ID
     */
    FinShop.accountChecking = function(args) {
        FinShop.checkingId = args.shopId;
        FinShop.checkingName = args.shopName;
        args.page = 0;
        FinShop.initOperationList(args, false,false);
    };
    /**
     * 初始化付款模块
     * @param  {[type]} args 
     */
    FinShop.settlement = function(args) {
        FinShop.settlementId = args.shopId;
        FinShop.settlementName = args.shopName;
        FinShop.isBalanceSource = !args.source;
        args.page = 0;
        FinShop.initOperationList(args, true,false);
    };
    FinShop.initPay = function(args){
        FinShop.getShopName();
        args.shopId = args.id;
        args.shopName = args.name;
        FinShop.settlement(args);
    };
    /**
     * 对账和收款列表
     * @param  {Object} args 请求参数
     * @param  {Boole}  type 是否未收款界面
     * @param  {Object} $tab tab
     */
    FinShop.initOperationList = function(args, type, $tab) {
        if (!!$tab) {
            args.pageNo = (args.page || 0);
            args.startDate = $tab.find('.T-search-start-date').val();
            args.endDate = $tab.find('.T-search-end-date').val();
            args.tripMessage = $tab.find('.T-search-trip').val();
            args.accountStatus = $tab.find('[name=accountStatus]').val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
        }
        args.sortType = 'accountTime';
        args.order = 'asc';
        
        if (args.shopId) {
            FinShop.settlementId = args.shopId;
        }

        $.ajax({
            url: KingServices.build_url('financial/shopAccount', "listShopAcccount"),
            type: "POST",
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                var template = shopClearingTemplate,
                    title = '购物收款',
                    key = settMenuKey;
                if (type) {
                    data.id = args.shopId;
                    data.name = args.shopName;
                    data.source = FinShop.isBalanceSource;
                    data.shopAccountList = FinancialService.getTempDate(data.shopAccountList,FinShop.payingJson);
                } else {
                    if(FinShop.checkTemp && FinShop.checkTemp.length > 0){
                        data.shopAccountList = FinancialService.getCheckTempData(data.shopAccountList,FinShop.checkTemp);
                    };
                    
                    data.name = args.shopName;
                    template = shopCheckingTemplate;
                    title = '购物对账';
                    key = checkMenuKey;
                }
                var $theTab = null;
                if (Tools.addTab(key, title, template(data))) {
                    if (type) {
                        $theTab = $tab || $('#tab-' + key + '-content');
                        FinShop.$settlementTab = $theTab;
                        if(FinShop.payingJson){
                            FinShop.$settlementTab.data('isEdited',true);
                        }
                        FinShop.sumShopMoney(FinShop.$settlementTab);
                    } else {
                        $theTab = $tab || $('#tab-' + key + '-content');
                        FinShop.$checkingTab = $theTab;
                        if(FinShop.checkTemp && FinShop.checkTemp.length > 0){
                            FinShop.$checkingTab.data('isEdited',true);
                            var total = $theTab.data('total');
                            total.sumUnReceiveMoney = FinShop.checkTemp.sumUnPayedMoney;
                            $theTab.data('total',total);
                        };
                        //取消对账权限过滤
                        checkDisabled(data.shopAccountList,$theTab.find(".T-checkTr"),$theTab.find(".T-checkList").data("right"));
                        FinShop.sumShopMoney(FinShop.$checkingTab);
                    }
                    /**
                     * 修复当在购物对账页面中改变结算金额，收款页面的数据统计没有同步
                     */
                    FinShop.getCheckSumData(args,$theTab);
                    /*if($theTab.data("total")){
                        FinShop.loadSumData($theTab);
                    } else {
                        FinShop.getCheckSumData(args,$theTab);
                    }*/
                    FinShop.initOperationEvent($theTab,args,type);
                    $theTab.data('id', args.shopId);
                } else {
                    var $tab = type ? FinShop.$settlementTab : FinShop.$checkingTab;
                    $tab.data('next', args);
                }

                var $tab = type ? FinShop.$settlementTab : FinShop.$checkingTab;
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            if(type){
                                FinShop.payingJson = FinancialService.clearSaveJson(FinShop.$settlementTab,FinShop.payingJson,new FinRule(FinShop.isBalanceSource ? 3 : 1));
                                FinShop.$settlementTab.data("isEdited",false);
                                FinShop.getOperationList(obj.curr - 1,FinShop.$settlementTab);
                            } else {
                                var temp = FinancialService.checkSaveJson(FinShop.$checkingTab,FinShop.checkTemp,new FinRule(0));
                                if(!temp){
                                    console.log("cndsfrvbhgsehrbg");
                                    return false;
                                } else {
                                    FinShop.checkTemp = temp;
                                    FinShop.$checkingTab.data('isEdited',false);
                                    args.pageNo = obj.curr-1;
                                    FinShop.initOperationList(args, type);
                                }
                            }
                        }
                    }
                });
            }
        });
    };
    /**
     * 对账和收款绑定事件
     * @param  {[type]} $tab [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    FinShop.initOperationEvent = function($tab,args,type) {
        var validator = (new FinRule(!type ? 0 : (FinShop.isBalanceSource ? 3 : 1))).check($tab);
        FinShop.getShopList($tab,type);

        //搜索顶部的事件绑定
        var $searchArea = $tab.find('.T-search-area');
        //搜索下拉事件
        $searchArea.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            $tab.data("total","");
            args.pageNo = 0;
            FinShop.initOperationList(args, type, $tab);
        });
        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            $tab.data("total","");
            args.pageNo = 0;
            FinShop.initOperationList(args, type, $tab);
        });
        Tools.setDatePicker($searchArea.find(".T-time"), true);
        Tools.setDatePicker($searchArea.find(".T-checkTime"), true);
        var operationMenuKey = settMenuKey,
            saveData = type ? FinShop.saveSettlement : FinShop.saveChecking;

        // 监听修改
        var $list = type ? $tab.find(".T-clearList") : $tab.find(".T-checkList");
        $list.off('change').on('change', "input", function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change", true);
            $tab.data('isEdited', true);
        });

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            if(type){
                FinShop.payingJson = false;
            } else {
                FinShop.checkTemp = false;
            }
            $tab.data("total","");
            FinShop.initOperationList($tab.data("next"), type,false);
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            saveData($tab,$tab.data("next"),[tab_id, title, html]);
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            saveData($tab);
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(type){
                FinShop.payingJson = false;
            } else {
                FinShop.checkTemp = false;
            }
            $tab.data("total","");
        });

        if (type) {
            var autoValidator = (new FinRule(2)).check($tab);
            FinancialService.updateSumPayMoney($tab, new FinRule(FinShop.isBalanceSource ? 3 : 1));
            $tab.find(".T-btn-autofill").on('click', function(event) {
                event.preventDefault();
                if ($(this).hasClass('btn-primary')) {
                    if (autoValidator.form()) {
                        var argsData = FinancialService.autoPayJson(args.shopId, $tab, new FinRule(2), 1);
                        if (!argsData) return;
                        FinancialService.autoPayConfirm($searchArea.find(".T-time").eq(0).val(), $searchArea.find(".T-time").eq(1).val(), function() {
                            FinShop.autoFillMoney($tab,argsData);
                        });
                    }
                } else {
                    FinShop.payingJson = false;
                    FinShop.setAutoFillEdit($tab, false);
                }
            });

            FinancialService.initPayEvent($searchArea);
        } else {
            operationMenuKey = checkMenuKey;
            FinancialService.updateUnpayMoney($tab, new FinRule(0));
            //给全选按钮绑定事件
            FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

            //导出报表事件 btn-hotelExport
            $tab.find(".T-btn-export").click(function() {
                var argsData = {
                    shopId: $tab.find('input[name=shopId]').val(),
                    shopName: $tab.find('input[name=shopName]').val(),
                    tripMessage: $tab.find('.T-search-trip').val(),
                    startDate: $tab.find('.T-search-start-date').val(),
                    endDate: $tab.find('.T-search-end-date').val(),
                    accountStatus : args.accountStatus,
                    isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                    startCheck : $tab.find('.T-checkStartTime').val(),
                    endCheck : $tab.find('.T-checkEndTime').val()
                };
                FinancialService.exportReport(argsData, "exportArrangeShopFinancial");
            });
        }

        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-see-group')) {
                FinShop.unfold($that);
            } else if ($that.hasClass('T-view-receipts')) {
                // 查看单据
                FinancialService.viewBillImage(this);
            } else if ($that.hasClass('T-payDetails')) {
                FinShop.viewOperationDetail(id, 0);
            } else if ($that.hasClass('T-view-details')) {
                FinShop.viewOperationDetail(id, 1);
            }
        });


        //绑定确定事件
        $tab.find('.T-saveClear').on('click', function(event) {
            var check = new FinRule(5).check($tab);
            if (!check.form()) {
                return false;
            }
            event.preventDefault();
            if (!type) {
                FinancialService.changeUncheck($tab.find('.T-checkTr'), function() {
                    saveData($tab,args);
                });
            } else {
                saveData($tab,args);
            }
        });
        //绑定取消事件
        FinancialService.closeTab(operationMenuKey);
    };

    FinShop.viewOperationDetail = function(id, type) {
        if (!!id) {
            var method = 'findCheckAccountDetail',
                title = '应收金额明细',
                html = viewAccountTemplate;
            if (!type) {
                method = 'findReciveAccountDetail';
                title = '已收金额明细';
                html = viewReceivedTemplate;
            }
            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', method),
                    type: 'post',
                    data: {
                        id: id
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        data.type = type;
                        layer.open({
                            type: 1,
                            title: title,
                            skin: 'layui-layer-rim',
                            area: '1024px',
                            zIndex: 1028,
                            content: html(data),
                            scrollbar: false
                        });
                    }
                });
        }
    };

    FinShop.unfold = function($that) {
        if ($that.data('is-show')) {
            $that.html('展开');
            $that.data('is-show', '');
            $that.closest('tr').next().addClass('hide');
        } else {
            $that.html('收起');
            $that.data('is-show', 'true');
            $that.closest('tr').next().removeClass('hide');
        }
    };

    FinShop.saveChecking = function($tab,args,tabArgs) {
        console.log("saveChecking");
        // 表单校验
        var argLen = arguments.length,
            json = FinancialService.checkSaveJson($tab,FinShop.checkTemp,new FinRule(0),true);
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'checkShopAccount'),
            type: "POST",
            data: { checkAccountList: json }
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    FinShop.checkTemp = false;
                    $tab.data('isEdited', false);
                    $tab.data("total","");
                    if (argLen === 1) {
                        Tools.closeTab(checkMenuKey);
                        FinShop.getList(FinShop.listPageNo);
                    } else {
                        FinShop.initOperationList(args, false, false);
                    }
                });
            }
        });
    };

    /**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    FinShop.autoFillMoney = function($tab,args) {
        if (!!$tab && $tab.length) {
            args = JSON.parse(args);
            args.shopId = args.id;
            args.sumTemporaryIncomeMoney = args.sumCurrentPayMoney
            args.tripMessage = $tab.find('.T-search-trip').val();
            args.accountStatus = $tab.find('input[name=accountStatus]').val();
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
            delete args.id;
            delete args.sumCurrentPayMoney;

            $.ajax({
                url: KingServices.build_url('financial/shopAccount', 'autoShopAccount'),
                type: 'post',
                data: args,
                showLoading: false
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var payType = $tab.find('select[name=sumPayType]').val(),
                        bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
                    var voucher = $tab.find('input[name=credentials-number]').val();
                    var billTime = $tab.find('input[name=tally-date]').val();
                    var bankNumber = (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
                    FinShop.payingJson = data.autoAccountList;
                    FinShop.payingJson.bankId = bankId;
                    FinShop.payingJson.voucher = voucher;
                    FinShop.payingJson.billTime = billTime;
                    FinShop.payingJson.bankNumber = bankNumber;
                    FinShop.setAutoFillEdit($tab, true);
                }
            });
        }
    };

    FinShop.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        FinShop.getOperationList(0, $tab);
        $tab.data('isEdited', false);
        FinancialService.updateSumPayMoney($tab, new FinRule(FinShop.isBalanceSource ? 3 : 1));
    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    FinShop.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var args = {
                pageNo: pageNo || 0,
                shopId: $tab.find('input[name=shopName]').data('id'),
                shopName : $tab.find('input[name=shopName]').val(),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripMessage: $tab.find('.T-search-trip').val(),
                accountStatus : $tab.find('input[name=accountStatus]').val(),
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                sortType : "accountTime",
                order : "asc",
                startCheck : $tab.find('.T-checkStartTime').val(),
                endCheck : $tab.find('.T-checkEndTime').val()
            };

            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'listShopAcccount'),
                    type: "POST",
                    data: args
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        data.shopAccountList = FinancialService.getTempDate(data.shopAccountList, FinShop.payingJson);
                        var html = payingTableTemplate(data);
                        FinShop.$settlementTab.find('.T-checkList').html(html);

                        if(FinShop.payingJson){
                            FinShop.$settlementTab.data("isEdited",true);
                        }
                        $tab.find('.T-checkTr').on('change', function() {
                            $(this).data('change', 'true');
                        });
                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.searchParam.recordSize + '条记录');
                        $tab.find('.T-saveClear').data('pageNo', args.pageNo);
                        // 绑定翻页组件
                        laypage({
                            cont: $tab.find('.T-pagenation'),
                            pages: data.searchParam.totalPage, //总页数
                            curr: (data.searchParam.pageNo + 1),
                            jump: function(obj, first) {
                                if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                    FinShop.payingJson = FinancialService.clearSaveJson($tab,FinShop.payingJson,new FinRule(FinShop.isBalanceSource ? 3 : 1));
                                    $tab.data('isEdited',false);
                                    FinShop.getOperationList(obj.curr - 1, $tab);
                                }
                            }
                        });
                    }
                });

        }
    }

    FinShop.saveSettlement = function($tab,args,tabArgs) {
        var check = new FinRule(5).check($tab);
        if (!check.form()) { return false;}
        var argLen = arguments.length,
            payType = $tab.find('select[name=sumPayType]').val(),
            bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
        var voucher = $tab.find('input[name=credentials-number]').val();
        var billTime = $tab.find('input[name=tally-date]').val();
        var json = FinancialService.clearSaveJson($tab, FinShop.payingJson, new FinRule(FinShop.isBalanceSource ? 3 : 1),true);
        if (!json) { return false; }
        var saveArgs = {
            shopId: FinShop.settlementId,
            payType: payType,
            bankId: bankId,
            voucher: voucher,
            billTime: billTime,
            remark: $tab.find('.T-sumRemark').val(),
            reciveAccountList: json
        }
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'receiveShopAccount'),
            type: 'post',
            data: saveArgs,
        })
        .done(function(data) {
            showMessageDialog(data.message, function() {
                $tab.data('isEdited', false);
                FinShop.payingJson = false;
                $tab.data("total","");
                if (argLen === 1) {
                    Tools.closeTab(settMenuKey);
                    FinShop.getList(FinShop.listPageNo);
                } else {
                    FinShop.initOperationList(args, true,false);
                }
            })
        });
    };

    FinShop.getShopList = function($tab,type){
        var $obj = $tab.find('input[name=shopName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : FinShop.shopList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    shopId : ui.item.id,
                    shopName : ui.item.value,
                    startDate : $tab.find('.T-search-start-date').val(),
                    endDate : $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                FinShop.initOperationList(args, type,false);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };
    //购物账务金额合计
    FinShop.sumShopMoney = function($listObj){
        var $trArr = $listObj.find('.T-hideTr');
        for(var i = 0;i<$trArr.length;i++){
            var $shopItemList = $trArr.eq(i).find('.T-shopItemList');
            var $itemTr = $shopItemList.find('tr');
            var sumShopMoney = 0,
                sumTravelMoney = 0,
                sumGuideMoney = 0;
                sumQuanpeiMoney = 0;
                sumScenondMoney = 0;
                
            for(var j = 2;j<$itemTr.length;j++){
                var $thisTr = $itemTr.eq(j);
                sumShopMoney += formatVal($thisTr.find('.T-consumeMoney').text());
                sumTravelMoney += formatVal($thisTr.find('.T-travelAgencyRebateMoney').text());
                sumGuideMoney += formatVal($thisTr.find('.T-guideRebateMoney').text());
                sumQuanpeiMoney += formatVal($thisTr.find('.T-quanpeiRebateMoney').text());
                sumScenondMoney = formatVal($trArr.find('.T-twoRebateMoney').text());
                if($thisTr.hasClass('T-sumMoney')){
                    $thisTr.find('.T-shopMoney').text(sumShopMoney);
                    $thisTr.find('.T-travelMoney').text(sumTravelMoney);
                    $thisTr.find('.T-guideMoney').text(sumGuideMoney);
                    $thisTr.find('.T-quanpeiMoney').text(sumQuanpeiMoney);
                    $thisTr.find('.T-twoMoney').text(sumScenondMoney);
                    break;
                }
            }
        }
        function formatVal (val){
            var newVal = parseFloat(val);
            if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
                return 0;
            }
            var newVal = Math.round(val*100)/100;
            return newVal;
            }
    };
    /* 获取合计数据 */
    FinShop.getCheckSumData = function(args,$tab){
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', "listShopAcccountTotal"),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.data("total",data);
                FinShop.loadSumData($tab);
            }
        });
    };
    FinShop.loadSumData = function($tab){
        var total = $tab.data("total");
        $tab.find(".T-sumCount").text(total.sumCount);
        $tab.find(".T-sumConsumeMoney").text(total.sumConsumeMoney);
        $tab.find(".T-sumTravelAgencyRebateMoney").text(total.sumTravelAgencyRebateMoney);
        $tab.find(".T-sumGuideRebateMoney").text(total.sumGuideRebateMoney);
        $tab.find(".T-quanpeiRebatMoney").text(total.sumQuanpeiRebateMoney);
        $tab.find(".T-twoRebateMoney").text(total.sumTwoRebateMoney);
        var sumBackMoney = total.sumBackMoney+total.sumQuanpeiRebateMoney+total.sumTwoRebateMoney;
        $tab.find(".T-sumBackMoney").text(sumBackMoney);
        $tab.find(".T-sumReceiveMoney").text(total.sumReceiveMoney);
        $tab.find(".T-sumUnReceiveMoney").text(total.sumUnReceiveMoney);
        $tab.find(".T-unpayMoney").text(total.checkedUnPayedMoney);

        if($tab.find('.T-checkedUnPayedMoney').length > 0){
            $tab.find(".T-unpayMoney").text(total.sumUnReceiveMoney);
            $tab.find(".T-checkedUnPayedMoney").text(total.checkedUnPayedMoney);
        } else {
            $tab.find(".T-unpayMoney").text(total.checkedUnPayedMoney);
            $tab.find(".T-sumUnReceiveMoney").text(total.sumUnReceiveMoney);
            $tab.find('.T-sumSettlementMoney').text(total.sumSettlementMoney);
        }
    };

    // 暴露方法
    exports.init = FinShop.initModule;
    exports.initIncome = FinShop.initPay;
});
