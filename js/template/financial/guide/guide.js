/**
 * 财务管理--导游账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var menuKey = "financial_guide",
        listTemplate = require("./view/list"),
        // 对账模板
        guideCheckingTemplate = require("./view/guideChecking"),
        checkingTableTemplate = require('./view/guideCheckingTable'),
        operationDetailTemplate = require('./view/operationDetail'),
        // 付款模板
        guidePayTemplate = require("./view/guidePaying"),
        payingTableTemplate = require('./view/guidePayingTable'),
        // 费用明细
        costDetailTemplate = require("./view/costDetail"),
        paymentTemplate = require("./view/payment"),
        paymentDetailTemplate = require("./view/paymentDetail"),
        payResultTemplate = require("./view/payResult"),

        checkMenuKey = menuKey + "_checking",
        payMenuKey = menuKey + "-paying";

    var FinGuide = {
        mock: true,
        $tab: false,
        $checkingTab: false,
        checkingId: null,
        $clearTab: false,
        clearId: null
    };
    /**
     * 初始化模块
     */
    FinGuide.initModule = function() {
        FinGuide.$tab = null;
        FinGuide.getList(0);
    };
    /**
     * 获取购物账务列表，初始化列表页面
     * @param  {int} page 页码
     */
    FinGuide.getList = function(page) {
        var args = FinancialService.getInitDate();

        args.pageNo = page || 0;
        args.accountStatus = 2;
        args.sortType = "desc";
        if (!!FinGuide.$tab) {
            args = {
                pageNo: (page || 0),
                guideId: FinGuide.$tab.find('.T-search-name').data('id'),
                startDate: FinGuide.$tab.find('.T-search-start-date').val(),
                endDate: FinGuide.$tab.find('.T-search-end-date').val(),
                accountStatus : FinGuide.$tab.find(".T-finance-status").find("button").data("value"),
                sortType : FinGuide.$tab.find("select[name=orderBy]").val()
            }

            var guideName = FinGuide.$tab.find('.T-search-name').val();
            if (guideName === '全部') {
                guideName = '';
            }else{
                args.guideId = FinGuide.$tab.find('.T-search-name').data('id');
            }

            args.guideName = guideName;
        }

        $.ajax({
            url: KingServices.build_url('account/guideFinancial', 'listSumFinancialGuide'),
            type: 'POST',
            data: args,
        }).done(function(data) {
            if (showDialog(data)) {
                data.guideName = data.guideName || '全部';
                data.accountStatus = args.accountStatus;
                data.sortType = args.sortType;
                Tools.addTab(menuKey, "导游账务", listTemplate(data));
                FinGuide.$tab = $('#tab-' + menuKey + '-content');
                // 绑定事件
                FinGuide.init_event();
                // 缓存页面
                FinGuide.listPageNo = args.pageNo;
                //获取合计数据
                var sumMoneyData = {
                    carryingOutSum:data.carryingOutSum,
                    settlementMoneySum:data.settlementMoneySum,
                    payedMoneySum:data.payedMoneySum,
                    unPayedMoneySum:data.unPayedMoneySum
                };
                FinGuide.getSumMoney(sumMoneyData,FinGuide.$tab);
                // 绑定翻页组件
                laypage({
                    cont: FinGuide.$tab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            FinGuide.getList(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };
    //获取合计金额
    FinGuide.getSumMoney = function(data,tabId){
        tabId.find('.T-carryingOutSum').text(data.carryingOutSum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
    /**
     * 初始化列表页面的事件绑定
     */
    FinGuide.init_event = function() {
        
        //搜索顶部的事件绑定
        var $searchArea = FinGuide.$tab.find('.T-search-area'),
            $datepicker = $searchArea.find('.datepicker');

        // 导游绑定
        FinGuide.getGuideNameList($searchArea.find('.T-search-name'), [$datepicker.eq(0).val(), $datepicker.eq(1).val()])
        // 绑定时间控件
        Tools.setDatePicker($datepicker, true);


        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinGuide.getList();
        });
        
        //状态框选择事件
        $searchArea.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            FinGuide.getList();
        });
        
        // 报表内的操作
        FinGuide.$tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this), $tr = $that.closest('tr'),
                args = {
                    pageNo : 0,
                    guideId: $tr.data('id'),
                    guideName: $tr.children('td').first().text(),
                    startDate: $datepicker.eq(0).val(),
                    endDate: $datepicker.eq(1).val(),
                    accountStatus: $tr.data('accountstatus'),
                };

            if ($that.hasClass('T-check')) {
                // 对账
                FinGuide.initOperationModule(args, 0);
            } else if ($that.hasClass('T-pay')) {
                // 结算
                FinGuide.initOperationModule(args, 1);
            }
        });
    };

    FinGuide.getGuideNameList = function($obj, valArray) {
        var args = {};

        if (!!valArray && valArray.length === 2) {
            args.startDate = valArray[0];
            args.endDate = valArray[1];
        }
        $.ajax({
            url: KingServices.build_url('account/guideFinancial', 'listFinancialGuideQuery'),
            type: "POST",
            showLoading: false,
            data: args
        }).done(function(data) {
            for (var i = 0; i < data.guideList.length; i++) {
                data.guideList[i].value = data.guideList[i].realname;
                data.guideList[i].id = data.guideList[i].guideId;
            }
            var all = {
                id: '',
                value: '全部'
            };
            FinGuide.guideList = data.guideList.slice(all);
            if($obj){
                data.guideList.unshift(all);
                $obj.autocomplete({
                    minLength: 0,
                    source : data.guideList,
                    change: function(event, ui) {
                        if (!ui.item) {
                            $(this).data('id', '');
                        }
                    },
                    select: function(event, ui) {
                        $(this).blur().data('id', ui.item.id);
                    }
                }).on("click", function() {
                    $obj.autocomplete('search', '');
                });
            }
        });
    };

    /**
     * 初始化对账页面
     * @param  {int}  id         导游ID
     * @param  {string}  id      导游的姓名
     * @param  {Boolean} isSearchIn true: 来自搜索，false: 来自初始化
     * @return {[type]}             [description]
     */
    FinGuide.initOperationModule = function(args, type, $tab) {
        if (!!$tab) {
            var $line = $tab.find('.T-lineProductName');
            args.guideId = $tab.find('.T-saveClear').data('id');
            args.startDate = $tab.find('.T-search-start-date').val();
            args.endDate = $tab.find('.T-search-end-date').val();
            args.tripPlanNumber = $tab.find('.T-tripPlanNumber').val();
            args.lineProductId = $line.data('id');
            args.lineProductName = $line.val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }
            if($tab.find('.T-saveClear').data('borrow') == "borrow"){
                args.borrow = true;
            }

            name = $tab.find('.T-guideName').text();
            args.isOuter = FinGuide.isOuter;
        }
        if(args.borrow){
            args.isOuter = true;
        }

        if(type == 1){
            args.actionType = "pay";
        }
        $.ajax({
                url: KingServices.build_url('account/guideFinancial', 'financialGuideSumStaticsByGuideId'),
                type: 'post',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.id = args.guideId;
                    data.type = type;
                    data.lineProductName = data.lineProductName || '全部';
                    data.accountStatus = args.accountStatus;

                    // 临时缓存
                    FinGuide.checkingTabLineProduct = data.lineProductList;

                    var key = checkMenuKey,
                        title = '导游对账',
                        html;
                    if (type) {
                        if(data.success == 2){
                            args.orderId = data.orderId;
                            args.type = 1;
                            FinancialService.unfinishedBill(args,function(){
                                FinGuide.initOperationModule(args, 1,$tab);
                            });
                            return false;
                        }
                        if(args.borrow){
                            data.borrow = args.borrow;
                        }
                        data.isOuter = FinGuide.isOuter = args.isOuter;
                        key = payMenuKey, title = args.borrow ? '导游借款' : '导游付款';
                        html = guidePayTemplate(data);
                    } else {
                        html = guideCheckingTemplate(data);
                    }
                    if (Tools.addTab(key, title, html)) {
                        var $tab = $('#tab-' + key + '-content');
                        FinGuide.initOperationEvent($tab,args,type);
                        $tab.data('current',args);
                    } else {
                        var $tab = $('#tab-' + key + '-content');
                        $tab.data('next',args);
                    }
                }
            });

    };

    /**
     * 对账页面事件初始化及列表初始化
     * @return {[type]} [description]
     */
    FinGuide.initOperationEvent = function($tab,args,type) {
        // 绑定搜索
        var $searchArea = $tab.find('.T-search-area');

        FinGuide.getGuideList($tab,type);

        FinGuide.getLineProduct($searchArea.find('.T-lineProductName'), FinGuide.checkingTabLineProduct);

        var $datePicker = $searchArea.find('.datepicker');
        Tools.setDatePicker($searchArea.find(".T-time"), true);
        Tools.setDatePicker($searchArea.find(".T-checkTime"), true);

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            var $btn = $tab.find('.T-saveClear');
            var args = {
                guideId: $btn.data('id'), 
                guideName:$btn.data('name'),
                startDate: $datePicker.eq(0).val(),
                endDate: $datePicker.eq(1).val(),
                accountStatus : $tab.find('input[name=accountStatus]').val(),
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
            };
            if(type){
                args.isOuter = FinGuide.isOuter;
            }
            FinGuide.initOperationModule(args, type, $tab);
        });
        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            var $btn = $tab.find('.T-saveClear');
            var args = {
                guideId: $btn.data('id'), 
                guideName:$btn.data('name'),
                startDate: $datePicker.eq(0).val(),
                endDate: $datePicker.eq(1).val(),
                accountStatus : $tab.find('input[name=accountStatus]').val()
            };
            if(type){
                args.isOuter = FinGuide.isOuter;
            }
            FinGuide.initOperationModule(args, type, $tab);
        });


        var validator = new FinRule(type ? (FinGuide.isOuter ? 3 : 1) : 3),
            autoValidator = new FinRule(2);
        var validatorCheck = validator.check($tab),
            autoValidatorCheck = autoValidator.check($tab.find('.T-auto-fill-area'));
        // 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
            .on('change', '.T-checkList input', function() {
                $(this).closest('tr').data('change', 'true');
                $tab.data('isEdited', true);
            })
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                if (!validatorCheck.form())return;
                if(type){
                    FinGuide.savePayingData($tab,false,$tab.data('next'),[tab_id, title, html]);
                } else {
                    FinGuide.saveCheckingData($tab,$tab.data('next'),[tab_id, title, html]);
                }
            })
            .on(SWITCH_TAB_BIND_EVENT, function() {
                if(!type){
                    FinGuide.checkTemp = false;
                } else {
                    FinGuide.payingJson = false;
                }
                FinGuide.initOperationModule($tab.data('next'),type,$tab);
            })
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                if (!validatorCheck.form())return;
                if(type){
                    FinGuide.savePayingData($tab,false);
                } else {
                    FinGuide.saveCheckingData($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                if(!type){
                    FinGuide.checkTemp = false;
                } else {
                    FinGuide.payingJson = false;
                }
            });

        // 计算
        if (type) {
            FinancialService.updateSumPayMoney($tab, validator);
            FinancialService.initPayEvent($tab.find('.T-summary'));
        } else {
            FinancialService.updateUnpayMoney($tab, new FinRule(6));
            $searchArea.find('.T-btn-export').on('click', function(event) {
                event.preventDefault();
                var $btn = $tab.find('.T-saveClear'),
                    argsData = {
                        guideId: $btn.data('id'), 
                        startDate: $datePicker.eq(0).val(),
                        endDate: $datePicker.eq(1).val(),
                        accountStatus: $searchArea.find('input[name=accountStatus]').val(),
                        tripPlanNumber: $searchArea.find('.T-tripPlanNumber').val(),
                        lineProductName: $searchArea.find('.T-lineProductName').val(),
                        lineProductId: $searchArea.find('.T-lineProductName').data('id'),
                        isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                        startCheck : $tab.find('.T-checkStartTime').val(),
                        endCheck : $tab.find('.T-checkEndTime').val()
                    };
                console.log(argsData);
                argsData.lineProductName = argsData.lineProductName === "全部" ? "" : argsData.lineProductName;
                FinancialService.exportReport(argsData,"exportArrangeGuideFinancial");
            });
        }

        // 绑定表格内容元素的事件
        $tab.find('.T-checkList').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');

            if ($that.hasClass('T-view')) {
                // 查看应付明细
                FinGuide.viewOperationDetail(id, 0)
            } else if ($that.hasClass('T-viewPayedMoney')) {
                // 查看已付
                FinGuide.viewOperationDetail(id, 1);
            } else if ($that.hasClass('T-gid')) {
                // 查看费用明细、并加载打印插件
                var pluginKey = 'plugin_print';
                Tools.loadPluginScript(pluginKey);
                FinGuide.viewFeeDetail($that.data('id'), $that.data('guidearrangeid'));
            } else if($that.hasClass('T-borrow-detail')){
                FinGuide.viewOperationDetail(id, 2);
            }
        });

        //确认按钮事件
        $tab.find(".T-saveClear").click(function() {
            if (!validatorCheck.form())return;
            if($tab.data('isBorrowSave')){
                $tab.find('input[name="payMoney"]').each(function() {
                    var $that = $(this);
                    if (!!$that.val())  {
                        $that.trigger('change');
                    }
                });
            }
            if (type) {
                FinGuide.savePayingData($tab,false,$tab.data('next'));
            } else {
                FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
                    FinGuide.saveCheckingData($tab,$tab.data('next'));
                });
            }
        });

        //关闭页面事件
        FinancialService.closeTab(Tools.getTabKey($tab.prop('id')));

        // 付款时，自动下账
        if (type) {
            $tab.find('.T-btn-autofill').on('click', function(event) {
                event.preventDefault();
                if ($(this).hasClass('btn-primary')) {
                    if (autoValidatorCheck.form()) {
                        FinGuide.autoFillMoney($tab);
                    }
                } else {
                    FinGuide.payingJson = [];
                    FinGuide.setAutoFillEdit($tab, false);
                }
            });

            // 清空数据
            FinGuide.payingJson = [];
        }

        // 后续业务
        FinGuide.getOperationList(args.pageNo, $tab);
    }

    /**
     * 保存对账数据
     * @param  {object} $tab    对账页面的Jquery对象
     * @param  {array} tabArgs 翻页提示所需的切换参数
     * @return {[type]}         [description]
     */
    FinGuide.saveCheckingData = function($tab,args,tabArgs) {
        var validator = new FinRule(3),
            argsLen = arguments.length;
        var json = FinancialService.checkSaveJson($tab,FinGuide.checkTemp,validator,true);

        if (json) { // 有值
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'operateCheckAccount'),
                    type: 'post',
                    data: {
                        checkJson: json
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                            $tab.data('isEdited', false);
                            FinGuide.checkTemp = false;
                            if (argsLen === 1) {
                                FinGuide.getList(FinGuide.listPageNo);
                            } else {
                                FinGuide.initOperationModule(args,0);
                            }
                        })
                    }
                });
        }
    }

    /**
     * 保存付款
     * @param  {object} $tab    对账页面的Jquery对象
     * @param  {array} tabArgs 翻页提示所需的切换参数
     * @return {[type]}         [description]
     */
    FinGuide.savePayingData = function($tab,Dsave,argsData,tabArgs) {
        var validator = new FinRule((FinGuide.isOuter || $tab.find('.T-saveClear').data('borrow') == "borrow") ? 3 : 1),
            argsLen = arguments.length;
        var json = FinancialService.clearSaveJson($tab, FinGuide.payingJson, validator,true);
        if(!json){ return false; }
        var payType = $tab.find('select[name=sumPayType]').val();
		var bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
        var voucher = $tab.find('input[name=credentials-number]').val();
        var billTime = $tab.find('input[name=tally-date]').val(),
            borrow = $tab.find('.T-saveClear').data('borrow'),
            method = borrow == "borrow" ? "operateGuidePreAccount" : "operatePayAccount";
        var args = {
            payJson: json,
            guideId: $tab.find('.T-saveClear').data('id'),
            payType: payType,
            remark: $tab.find('.T-remark').val(),
            bankId:bankId,
            payMoney: $tab.find('.T-sumPayMoney').val(),
            voucher:voucher,
            billTime:billTime
        }
        if(payType == 1 && IndexData.userInfo.onlinePay == 1 && $tab.find('.T-saveClear').data('borrow') != "borrow"){
            if(!Dsave){
                args.resourceId = $tab.find('.T-saveClear').data('id');
                args.resourceName = $tab.find(".T-guideName").text();
                args.businessType = "guide";
                args.payRemark = $tab.find('.T-remark').val();
                args.type = 0;
                FinGuide.payment(args,function(){
                    FinGuide.initOperationModule(args, 1,$tab);
                });
                return false;
            }
        }

        if (json.length) {
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', method),
                    type: 'post',
                    data: args,
                })
                .done(function(data) {
                    $tab.data('isEdited', false);
                    FinGuide.payingJson = false;
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (argsLen === 2) {
                            FinGuide.getList(FinGuide.listPageNo);
                        } else {
                            FinGuide.initOperationModule(argsData,1);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
    };

    /**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    FinGuide.autoFillMoney = function($tab) {
        if (!!$tab && $tab.length) {
            var id = $tab.find('.T-saveClear').data('id'),
                args = FinancialService.autoPayJson(id, $tab, new FinRule(2), 0),
                $line = $tab.find('.T-lineProductName'),
                $autoPayMoney = $tab.find('.T-sumPayMoney');
            if(!args)return;
            args = {
                guideId: id,
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
                lineProductId: $line.data('id'),
                lineProductName: $line.val(),
                autoPayMoney: $autoPayMoney.val(),
                payType: $tab.find('select[name=sumPayType]').val(),
                accountStatus : $tab.find('input[name=accountStatus]').val(),
                startCheck : $tab.find('.T-checkStartTime').val(),
                endCheck : $tab.find('.T-checkEndTime').val()
            };

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }

            FinancialService.autoPayConfirm(args.startDate, args.endDate, function() {
                $.ajax({
                        url: KingServices.build_url('account/guideFinancial', 'autoPay'),
                        type: 'post',
                        data: args,
                        showLoading: false
                    })
                    .done(function(data) {
                        if (showDialog(data)) {
                            FinGuide.payingJson = data.autoPayList;
                            $tab.data('isEdited', true).find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
                            FinGuide.setAutoFillEdit($tab, true);
                        }
                    });
            })
        }
    };

    FinGuide.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        FinGuide.getOperationList(0, $tab);

    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    FinGuide.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var $line = $tab.find('.T-lineProductName'),
                accountStatus = $tab.find('[name=accountStatus]').val();

            var args = {
                pageNo: pageNo || 0,
                guideId: $tab.find('.T-saveClear').data('id'),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
                lineProductId: $line.data('id'),
                lineProductName: $line.val(),
                accountStatus : accountStatus,
                borrow : $tab.find('.T-saveClear').data('borrow') == "borrow" ? true : false,
                isOuter : FinGuide.isOuter,
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                startCheck : $tab.find('.T-checkStartTime').val(),
                endCheck : $tab.find('.T-checkEndTime').val()
            };

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }

            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'listFinancialGuideByGuideId'),
                    type: 'post',
                    data: args,
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var html,
                            type = $tab.find('.T-saveClear').data('type');
                        if (!!type) {
                            data.list = FinancialService.getTempDate(data.list, FinGuide.payingJson,true);
                            data.isOuter = FinGuide.isOuter;
                            data.isConfirmAccount = args.isConfirmAccount;
                            if($tab.find('.T-saveClear').data('borrow') == "borrow"){
                                data.isPayMoney = true;
                                var sumPayMoney = 0;
                                for(var i = 0; i < data.list.length; i++){
                                    if(data.list[i].payMoney && data.list[i].payMoney != 0){
                                        sumPayMoney = sumPayMoney + data.list[i].payMoney*1;
                                    }
                                }
                                $tab.find('.T-sumPayMoney').val(sumPayMoney);
                            }
                            html = filterUnAuth(payingTableTemplate(data));
                            if(FinGuide.payingJson && FinGuide.payingJson.length > 0){
                                $tab.data('isEdited',true);
                            }
                        } else {
                            data.list = FinancialService.getCheckTempData(data.list,FinGuide.checkTemp);
                            html = filterUnAuth(checkingTableTemplate(data));
                            if(FinGuide.checkTemp && FinGuide.checkTemp.length > 0){
                                $tab.find('.T-stMoney').text(FinGuide.checkTemp.sumSttlementMoney);
                                $tab.find('.T-unpayMoney').text(FinGuide.checkTemp.sumUnPayedMoney);
                                $tab.data('isEdited',true);
                            }
                        }
                        var $tbody = $tab.find('.T-checkList').html(html);
                        $tab.data("next",args);

                        if (!type) {
                            //给全选按钮绑定事件: 未去重
                            FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
                        }
                        var validator = new FinRule(type ? (FinGuide.isOuter ? 3 : 1) : 3);
                        FinancialService.updateSumPayMoney($tab, validator);
                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                        $tab.find('.T-saveClear').data('pageNo', args.pageNo);
                        // 绑定翻页组件
                        laypage({
                            cont: $tab.find('.T-pagenation'),
                            pages: data.totalPage, //总页数
                            curr: (data.pageNo + 1),
                            jump: function(obj, first) {
                                if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                    $tab.data('isEdited',false);
                                    if(!type){
                                        var temp = FinancialService.checkSaveJson($tab,FinGuide.checkTemp,new FinRule(6));
                                        if(!temp){
                                            return false;
                                        } else {
                                            FinGuide.checkTemp = temp;
                                            FinGuide.getOperationList(obj.curr - 1, $tab);
                                        }
                                    } else {
                                        FinGuide.payingJson = FinancialService.clearSaveJson($tab,FinGuide.payingJson,validator);
                                        FinGuide.getOperationList(obj.curr - 1, $tab);
                                    }
                                }
                            }
                        });

                        // 当存在预支款时，触发change，以便可直接保存
                        if ($tab.find('.T-saveClear').data('borrow') === 'borrow') {
                            $tab.data('isBorrowSave', true);
                        }
                    }
                });

        }
    }

    /**
     * 绑定线路产品的下拉选择
     * @param  {object} $obj 绑定对象
     * @param  {array} list 线路产品的选项
     * @return {[type]}      [description]
     */
    FinGuide.getLineProduct = function($obj, list) {
        for (var i = 0; i < list.length; i++) {
            list[i].value = list[i].name;
            list[i].id = list[i].id;
        }
        list.unshift({
            id: '',
            value: '全部'
        });

        $obj.autocomplete({
                minLength: 0,
                change: function(event, ui) {
                    if (!ui.item) {
                        $(this).data('id', '');
                    }
                },
                select: function(event, ui) {
                    $(this).blur().data('id', ui.item.id);
                }
            }).on("click", function() {
                $obj.autocomplete('search', '');
            })
            .autocomplete('option', 'source', list);
    }

    /**
     * 查看操作记录
     * @param  {int} id   账务id
     * @param  {int} type 0：应付明细，1：已付明细
     * @return {[type]}      [description]
     */
    FinGuide.viewOperationDetail = function(id, type) {
        if (!!id) {
            var method = 'viewCheckRecordList',
                title = '应付金额明细';
            if (type == 1) {
                method = 'viewPayedRecordList';
                title = '已付金额明细';
            } else if(type == 2){
                method = 'viewGuidePreRecordList';
                title = '预支款金额明细';
            }
            $.ajax({
                url: KingServices.build_url('account/guideFinancial', method),
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
                        content: operationDetailTemplate(data),
                        scrollbar: false
                    });
                }
            });
        }
    }

    /**
     * 查看--导游对账费用明细 
     * @param  {int} tripId 发团计划ID
     * @return {[type]}        [description]
     */
    FinGuide.viewFeeDetail = function(tripId, guideArrangeId) {
        if (!!tripId) {
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'viewTripPlanFeeDetail'),
                    type: 'post',
                    data: {
                        tripPlanId: tripId,
                        guideArrangeId: guideArrangeId
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	data.touristGroupList = JSON.parse(data.touristGroupList || false) || [];
                        Tools.addTab(menuKey + "-costDetail", "导游报账表", costDetailTemplate(data));
                        var $tab = $("#tab-" + menuKey + "-costDetail-content");
                        //查看图片事件
                        $tab.find(".T-view-bill").on('click',function(){
                            FinancialService.viewBillImage(this);
                        })
                        //打印事件
                        $tab.find('.T-export').on('click',function(){
                            $tab.print({
                                globalStyles:true
                            });
                        });

                        //计算导游报账表单项合计费
                        var $tbody = $tab.find('.T-nowHotelMoney');//找到对应的tbody,如果找到同样的tbody多个，说明有多个导游，现付房费;
                        var $tbodyGroup = $tab.find('.T-nowGroupMoney');//现收团款
                        var $tbodyPayShop = $tab.find('.T-nowPayShopMoney');//现收购物
                        var $tbodyGuide = $tab.find('.T-nowGuideMoney');//现收自费
                        var $tbodyOther = $tab.find('.T-nowOtherMoney');//其它收入
                        var $tbodyBus = $tab.find('.T-nowBusMoney');//现付车费
                        var $tbodyRest = $tab.find('.T-nowRestMoney');//现付餐费
                        var $tbodyScenic = $tab.find('.T-nowScenicMoney');//现付景区费用
                        var $tbodyTicket = $tab.find('.T-nowTicketMoney');//现付票务费
                        var $tbodySelf = $tab.find('.T-nowSelfMoney');//现付自费
                        var $tbodyPayOth = $tab.find('.T-nowPayOthMoney');//现付其他费用
                        var $tbodySelfReba = $tab.find('.T-nowSelfRebaMoney');//自费导佣

                        var $costObj = $tab.find('.T-NowpayHoteltMoney');//找到对应的合计对象//现付房费;
                        var $costObjGroup = $tab.find('.T-NowpayGroupMoney');//现收团款
                        var $costObjShop = $tab.find('.T-NowpayShopMoney');//现收购物
                        var $costObjpaySelf = $tab.find('.T-NowpaySelfMoney');//现收自费
                        var $costObjOther = $tab.find('.T-NowpayOtherMoney');//其它收入
                        var $costObjBus = $tab.find('.T-NowpayBusMoney');//现付车费
                        var $costObjRest = $tab.find('.T-NowpayRestMoney');//现付餐费
                        var $costObjScenic = $tab.find('.T-NowpayScenicMoney');//现付景区
                        var $costObjTickrt = $tab.find('.T-NowpayTickrtMoney');//现付票务
                        var $costObjSelf = $tab.find('.T-NowpaySelfpayMoney');//现付自费
                        var $costObjOthpay = $tab.find('.T-NowpayOthpayMoney');//现付其它费用
                        var $costObjSelfRebate = $tab.find('.T-NowpaySelfRebateMoney');//自费导佣

                        FinGuide.findTbody($tbody,$costObj);
                        FinGuide.findTbody($tbodyGroup,$costObjGroup);
                        FinGuide.findTbody($tbodyPayShop,$costObjShop);
                        FinGuide.findTbody($tbodyGuide,$costObjpaySelf);
                        FinGuide.findTbody($tbodyOther,$costObjOther);
                        FinGuide.findTbody($tbodyBus,$costObjBus);
                        FinGuide.findTbody($tbodyRest,$costObjRest);
                        FinGuide.findTbody($tbodyScenic,$costObjScenic);
                        FinGuide.findTbody($tbodyTicket,$costObjTickrt);
                        FinGuide.findTbody($tbodySelf,$costObjSelf);
                        FinGuide.findTbody($tbodyPayOth,$costObjOthpay);
                        FinGuide.findTbody($tbodySelfReba,$costObjSelfRebate);

                    }
                });
        }
    }

    //导游报账表合计计算事件
    FinGuide.findTbody= function($tbody,$costObj){
        
        if($tbody.length>1){
            $tbody.each(function(index, val) {
                var thisIndex = $(this).attr('index'),
                cost = FinGuide.sumCost($(this));
                $costObj.each(function(index, el) {
                    var costIndex = $(this).attr('index');
                    if(thisIndex == costIndex){
                        $(this).text(cost);
                    }
                });
            });
        }else{
            var cost = 0;
            cost = FinGuide.sumCost($tbody);
            $costObj.text(cost);
        }; 

    };
    FinGuide.sumCost = function($tbody){
        var sum = 0;
        var $td = $tbody.find('.totalPayedMoney');//
        $td.each(function(index, el) {
            sum += FinGuide.changeTwoDecimal($(this).text());
        });
       return sum;
     };
     //规范输入的数字数据
    FinGuide.changeTwoDecimal = function($val){
        var newVal = parseFloat($val);

        if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
            return 0;
        }
        var newVal = Math.round($val*100)/100;
        return newVal;
    };

    //选择支付方式
    FinGuide.payment = function(args,listFn){//listFn列表刷新函数
        var type = args.type;
        if(type == 0){
            var data = [];
            data.type = type;
            data.args = args;
            FinGuide.initPayment(data,listFn);
        } else {
            $.ajax({
                url: KingServices.build_url('onlinePay/payOrder', 'findPayOrderById'),
                type: 'POST',
                data: args,
            })
            .done(function(data) {
                data.type = type;
                data.args = args;
                FinGuide.initPayment(data,listFn);
            });
        }
    };

    FinGuide.initPayment = function(data,listFn){
        var args = data.args,
            type = data.type;
        args.type = type;
        data.imgUrl = imgUrl;
        var html = paymentTemplate(data);

        var payTypeLayer = layer.open({
            type: 1,
            title: "选择支付方式",
            skin: 'layui-layer-rim', // 加上边框
            area: '900px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success : function(){
                var $container = $(".T-payment-container"),
                    $layer = $container.closest(".layui-layer");
                $layer.find(".layui-layer-close").off().on('click', function() {
                    layer.close(payTypeLayer);
                    if(type == 0){
                        $('#tab-financial_guide-paying-content').data("isEdited",false);
                        listFn();
                    }
                });
                if(type == 0){
                    FinGuide.getGuideInfo($container,args.resourceId);
                }
                $container.off().on("click",".T-option",function(){
                    var $this = $(this);
                    if($this.hasClass('T-hideGuide')){
                        $container.find(".T-guideInfo").addClass('hide');
                    }else if($this.hasClass('T-detail')){//新建时无明细
                        if(type == 1 || type == 2){
                            FinGuide.paymentDetail(args.orderId);
                        }
                    } else if($this.hasClass('T-toPay')){
                        var payValue = $container.find('.T-pay-item.pay-action').data("value");
                        if(payValue == "2"){
                            FinGuide.payResult($layer,args,listFn);
                        } else if(payValue == "1"){
                            $container.find('.T-toPay').attr('href', 'javascript:;').removeAttr('target');
                            var orderId = $container.data("orderId");
                            layer.close(payTypeLayer);
                            if(type == 0 && !orderId){
                                FinGuide.savePayingData($("#tab-financial_guide-paying-content"),true);
                            } else{
                                if(orderId){
                                    args.orderId = orderId;
                                }
                                $.ajax({
                                    url: KingServices.build_url('onlinePay/payOrder', 'offlinePayByOrderId'),
                                    type: 'POST',
                                    data: args,
                                })
                                .done(function(data) {
                                    showMessageDialog($("#confirm-dialog-message"),data.message);
                                    if(type == 0){
                                        $('#tab-financial_guide-paying-content').data("isEdited",false);
                                        listFn();
                                    }
                                    if(type == 2){//刷新在线支付列表
                                        listFn();
                                    }
                                });
                                
                            }
                        }
                        
                    }else if($this.hasClass("T-pay-item")){
                        event.preventDefault();
                        $container.find(".T-pay-item").removeClass('pay-action');
                        $this.addClass('pay-action');
                        if($this.hasClass("T-showGuide")){
                            $container.find(".T-guideInfo").removeClass('hide');
                        }else{
                            $container.find(".T-guideInfo").addClass('hide');
                        }
                        if($this.data("value") == "2"){
                            var pay = $container.data("pay");
                            if(type == 0 && !pay){
                                FinGuide.createPayOrder($layer,args,listFn);
                            } else {
                                FinGuide.openPayWindow(type == 0 ? $container.data("orderNumber") : data.orderNumber, $container);
                            }
                        }
                    }
                });
            }
        });
    };

    //创建订单
    FinGuide.createPayOrder = function($layer,args,listFn){
        $.ajax({
            url: KingServices.build_url('onlinePay/payOrder', 'createPayOrder'),
            type: 'POST',
            data: args
        })
        .done(function(data) {
            if(showDialog(data)){
                $layer.find(".T-payment-container").data("pay",true);
                $layer.find(".T-payment-container").data("orderNumber",data.orderNumber);
                FinGuide.openPayWindow(data.orderNumber, $layer);
                $layer.find(".T-payment-container").data("orderId",data.orderId);
            }
        });
    };

    /**
     * 支付调整
     * @param  {sring} orderNum 订单号
     * @return {[type]}          [description]
     */
    FinGuide.openPayWindow = function(orderNum, $layer) {
        $layer.find(".T-toPay").attr({
            'href' : APP_ROOT + "back/onlinePay/alipay.do?method=pay&orderNumber=" + orderNum +"&token=" +$.cookie('token'),
            'target' : '_blank'
        });
        /*var win = window.open('about:blank', '_blank');

        setTimeout(function() {
            win.location.href = APP_ROOT + "back/onlinePay/alipay.do?method=pay&orderNumber=" + orderNum +"&token=" +$.cookie('token') + "&_"+(+new Date());
        });*/
    }

    //支付明细
    FinGuide.paymentDetail = function(orderId){
        $.ajax({
            url: KingServices.build_url('onlinePay/payOrder', 'findPayItemListByOrderId'),
            type: 'POST',
            data: {orderId: orderId},
        })
        .done(function(data) {
            var html = paymentDetailTemplate(data);
            layer.open({
                type: 1,
                title: "明细",
                skin: 'layui-layer-rim', // 加上边框
                area: '700px', // 宽高
                zIndex: 1038,
                content: html,
                scrollbar: false
            });
        });
    };

    FinGuide.payResult = function($layer,args,listFn){
        var type = args.type;
        $layer.hide();
        var html = payResultTemplate();
        var rstLayer = layer.open({
            type: 1,
            title: "支付",
            skin: 'layui-layer-rim', // 加上边框
            area: '400px', // 宽高
            zIndex: 1038,
            content: html,
            scrollbar: false,
            success : function(){
                var $container = $(".T-payResult-container"),
                    $close = $container.closest(".layui-layer").find(".layui-layer-close");
                $close.off().on('click', function() {
                    $layer.prev(".layui-layer-shade").remove();
                    $layer.remove();
                    if(type == 0){
                        $('#tab-financial_guide-paying-content').data("isEdited",false);
                        listFn();
                    } else if(type == 2){
                        listFn();
                    }
                });

                $container.off().on('click', '.T-option', function(event) {
                    event.preventDefault();
                    var $this = $(this);
                    if($this.hasClass('T-success')){
                        $close.trigger('click');
                        if(type == 0 ||　type == 1){
                            var $tab = $('#tab-financial_guide-paying-content');
                            if($tab.length == 0){
                                $tab = false;
                            } else {
                                $tab.data("isEdited",false);
                            }
                            listFn();
                        }
                    } else if($this.hasClass('T-problem')){
                        var o = window.open();
                        setTimeout(function(){
                            o.location.href = "https://help.alipay.com/lab/help_detail.htm?help_id=258086";
                        }, 0);
                    } else if($this.hasClass('T-return')){
                        $layer.show();
                        layer.close(rstLayer);
                    }
                });
            }
        });
    };

    FinGuide.getGuideInfo = function($container,guideId){
        $container.find(".T-showGuide").one("click",function(){
            $.ajax({
                url: KingServices.build_url('account/guideFinancial', 'checkGuideIsUseApp'),
                type: 'POST',
                data: {guideId : guideId},
            })
            .done(function(data) {
                if(data.success == 0){
                    showMessageDialog($("#confirm-dialog-message"),data.message);
                    $container.find(".T-guideInfo").addClass('hide');
                    $container.find(".T-payType").eq(0).prop("checked",true);
                    $container.find(".T-payType").prop("disabled",true);
                    return false;
                }
                var photo = data.guideInfo.photo;
                $container.find(".T-guideImg").attr("src",!!photo ? imgUrl + photo : "/images/logo_24x24.png");
                $container.find(".T-guideName").text(data.guideInfo.name);
                $container.find(".T-guideNumber").text(data.guideInfo.guideCardNumber || '');
                $container.find(".T-guideMobile").text(data.guideInfo.mobileNumber);
            });
            
        });
    };

    FinGuide.getGuideList = function($tab,type){
        var $obj = $tab.find('.T-guideName'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : FinGuide.guideList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    guideId : ui.item.id,
                    guideName : ui.item.value,
                    startDate : $tab.find('.T-search-start-date').val(),
                    endDate : $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val(),
                    borrow : $tab.find('.T-saveClear').data('borrow') == "borrow" ? true : false
                };
                if($tab.find('.T-btn-autofill').length == 0){
                    args.isOuter = FinGuide.isOuter = true;
                }
                FinGuide.initOperationModule(args,type);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    FinGuide.initPayModule = function(options) {
        options.guideId = options.id;
        delete(options.id);
        options.isOuter = FinGuide.isOuter = true;
        FinGuide.getGuideNameList(false,[options.startDate,options.endDate]);
        FinGuide.initOperationModule(options, 1)
    };

    // 暴露方法
    exports.init = FinGuide.initModule;
    exports.initPay = FinGuide.initPayModule;
	exports.viewFeeDetail = FinGuide.viewFeeDetail;
    exports.payment = FinGuide.payment;
    exports.paymentDetail = FinGuide.paymentDetail;
});
