define(function(require, exports) {
    var menuKey = "financial_Other_accounts",
        listTemplate = require("./view/list"),
        AccountsCheckingTemplate = require("./view/AccountsChecking"),
        AccountsPaymentTemplate = require("./view/AccountsPayment"),
        lookDetailTemplate = require("./view/lookDetail"),
        viewhandleTemplate = require("./view/viewhandle"),
        ViewAmountPaidTemplate = require("./view/ViewAmountPaid"),
        viewOrderDetailTemplate = require("./view/viewOrderDetail"),
        viewImgCheckingTemplate = require("./view/viewImgChecking"),
        tabId = "tab-" + menuKey + "-content";
    var OtherAccounts = {
        $searchArea: false,
        saveJson: {},
        showBtnFlag: false,
        clearTempData : false,
        clearTempSumDate : false
    };
    OtherAccounts.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        OtherAccounts.listFinancialOtherAccounts(0, "", dateJson.startDate, dateJson.endDate);
    };
    OtherAccounts.listFinancialOtherAccounts = function(pageNo, name, startAccountTime, endAccountTime, accountStatus) {
        if (OtherAccounts.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            var itemName = OtherAccounts.$searchArea.find("input[name=otherId]").val();
            name = itemName == "全部" ? "" : itemName;
            startAccountTime = OtherAccounts.$searchArea.find("input[name=startTime]").val();
            endAccountTime = OtherAccounts.$searchArea.find("input[name=endTime]").val();
            accountStatus = OtherAccounts.$searchArea.find(".T-finance-status").find('button').data('value');
        }
        
        //重置搜索条件
        OtherAccounts.searchData = {
            pageNo: pageNo,
            name: name,
            startAccountTime: startAccountTime,
            endAccountTime: endAccountTime,
            accountStatus : accountStatus == undefined ? "2" : accountStatus,
            sortType: 'auto'
        }
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOther"),
            type: "POST",
            data: OtherAccounts.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.startAccountTime = startAccountTime
                    data.endAccountTime = endAccountTime
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "其它账务", html);
                    OtherAccounts.$tab = $('#' + tabId);
                    OtherAccounts.$searchArea = OtherAccounts.$tab.find('.T-search-area');
                    OtherAccounts.initList(pageNo, name, startAccountTime, endAccountTime, OtherAccounts.searchData.accountStatus);
                    OtherAccounts.getSumMoney(data.totalFinancialOtherData[0],OtherAccounts.$tab);
                    //翻页
                    laypage({
                        cont: OtherAccounts.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                OtherAccounts.listFinancialOtherAccounts(obj.curr - 1);
                            }
                        }
                    });
                    //时间控件
                    var $container = $(".T-other");
                    Tools.setDatePicker($container.find(".T-time"),true);
                }
            }
        })
    };
    //获取合计金额
    OtherAccounts.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.sumNeedPayMoney);
        tabId.find('.T-sumStMoney').text(data.sumSettlementMoney);
        tabId.find('.T-sumPaiedMoney').text(data.sumPayedMoney);
        tabId.find('.T-sumUnPaiedMoney').text(data.sumUnPayedMoney);
    };
    OtherAccounts.initList = function(pageNo, name, startAccountTime, endAccountTime, accountStatus) {
        // 初始化jQuery 对象
        var $container = $(".T-other");
        var $obj = OtherAccounts.$tab.find('.T-search-head-office');
        OtherAccounts.getTravelAgencyList($obj);
        //搜索按钮事件
        OtherAccounts.$tab.find('.T-search').click(function(event) {
            event.preventDefault();
            OtherAccounts.listFinancialOtherAccounts(0);
        });

        //状态框选择事件
        OtherAccounts.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            OtherAccounts.listFinancialOtherAccounts(0);
        });
        
        // 报表内的操作
        OtherAccounts.$tab.find('.T-other').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0 ,
                    name : $that.closest('tr').data('name'),
                    startAccountTime : startAccountTime,
                    endAccountTime : endAccountTime,
                    accountStatus : accountStatus
                };
            if ($that.hasClass('T-checking')) {
                //对账
                OtherAccounts.AccountsChecking(args);
            } else if ($that.hasClass('T-payment')) {
                // 付款
                OtherAccounts.showBtnFlag = false;
                OtherAccounts.AccountsPayment(args);
            }
        });
        var status = OtherAccounts.$tab.find(".T-finance-status");
        status.on('click', '.dropdown-menu a', function(event){
            event.preventDefault();
            var $that = $(this);
            status.find('button').data('value', $that.data('value')).find("span").text($that.text());
        });
    };

    // 对账
    OtherAccounts.AccountsChecking = function(args,$tab) {
        if (!!$tab) {
            args.startAccountTime = $tab.find(".T-startTime").val();
            args.endAccountTime = $tab.find(".T-endTime").val();
            args.name = $tab.find("input[name=itemName]").val();
            args.info = $tab.find('.T-creatorUserChoose').val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.pageNo = args.pageNo || 0;
        args.sortType = "auto";
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOtherDetails"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    var dataTable = data;
                    dataTable.searchParam = args;
                    // 对账 
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: args,
                        success: function(data) {
                            dataTable.statistics = data.statistics;
                            dataTable.financialOtherDetailsList = FinancialService.isGuidePay(dataTable.financialOtherDetailsList);

                            if(OtherAccounts.checkTemp && OtherAccounts.checkTemp.length > 0){
                                dataTable.financialOtherListData = FinancialService.getCheckTempData(dataTable.financialOtherDetailsList,OtherAccounts.checkTemp);
                                dataTable.statistics.sumSettlementMoney = OtherAccounts.checkTemp.sumSttlementMoney;
                                dataTable.statistics.sumUnPayedMoney = OtherAccounts.checkTemp.sumUnPayedMoney;
                            }
                            
                            if (showDialog(data)) {
                                if (Tools.addTab(menuKey + "-checking", "其它对账", AccountsCheckingTemplate(dataTable))) {
                                    OtherAccounts.$checkTab = $("#tab-" + menuKey + "-checking-content");
                                    if(OtherAccounts.checkTemp && OtherAccounts.checkTemp.length > 0){
                                        OtherAccounts.$checkTab.data('isEdited',true);
                                    }
                                    //取消对账权限过滤
                                    checkDisabled(dataTable.financialOtherDetailsList,OtherAccounts.$checkTab.find(".T-checkTr"),OtherAccounts.$checkTab.find(".T-checkList").data("right"));
                                    OtherAccounts.initCheckEvent(args,OtherAccounts.$checkTab);
                                } else{
                                    OtherAccounts.$checkTab.data('next',args);
                                }

                                //翻页
                                laypage({
                                    cont: OtherAccounts.$checkTab.find('.T-pagenation'),
                                    pages: dataTable.totalPage,
                                    curr: (args.pageNo + 1),
                                    jump: function(obj, first) {
                                        if (!first) {
                                            var temp = FinancialService.checkSaveJson(OtherAccounts.$checkTab,OtherAccounts.checkTemp,new FinRule(0));
                                            if(!temp){
                                                return false
                                            } else{
                                                OtherAccounts.checkTemp = temp;
                                                OtherAccounts.$checkTab.data('isEdited',false);
                                                args.pageNo = obj.curr - 1;
                                                OtherAccounts.AccountsChecking(args);
                                            }
                                            
                                        }
                                    }
                                });
                            }
                        }
                    })
                }
            }
        })
    };

    /**
     * 对账页面数据初始化，事件绑定
     * @param  {object} data 页面响应数据
     * @return {[type]}      [description]
     */
    OtherAccounts.initCheckEvent = function(args,$tab) {
        var checkRule = new FinRule(0);
        FinancialService.updateUnpayMoney($tab, checkRule);

        //绑定项目
        OtherAccounts.getTravelAgencyList($tab.find('.T-item-name'));
        // 表格内操作
        $tab.find('.T-checkListNum').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');

            if ($that.hasClass('T-lookDetail')) {
                // 查看已付明细
                OtherAccounts.lookDetail(id);
            } else if ($that.hasClass('T-viewInsuanceImg')) {
                // 查看单据
                FinancialService.viewBillImage(this);
            } else if ($that.hasClass('T-viewhandle')) {
                // 查看对账明细
                OtherAccounts.viewOrderDetail(id);
            } else if($that.hasClass('T-payRequest')){
                KingServices.getPayment($(this).data("preid"));
            }
        });
        //时间控件
        Tools.setDatePicker($tab.find('.datepicker'), true);

        //关闭页面事
        FinancialService.closeTab(menuKey + "-checking");
        // 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
            .on('change', '.T-checkList input, .T-checkAll', function() {
                $tab.data('isEdited', true);
                $(this).closest('tr').data('change', true);
            })
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                OtherAccounts.CheckConfirm($tab,$tab.data('next'),[tab_id, title, html]);
            })
            .on(SWITCH_TAB_BIND_EVENT, function() {
                OtherAccounts.checkTemp = false;
                OtherAccounts.AccountsChecking($tab.data('next'),$tab);
            })
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                OtherAccounts.CheckConfirm($tab);
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                OtherAccounts.checkTemp = false;
            });;

        //对账保存
        $tab.find(".T-confirm").click(function(event) {
            FinancialService.changeUncheck($tab.find('.T-checkList tr'),function(){
                OtherAccounts.CheckConfirm($tab,args);
            });
        });
        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            OtherAccounts.AccountsChecking(args,$tab);
        });
        //对账搜索
        $tab.find('.T-search').click(function(event) {
            args.pageNo = 0;
            OtherAccounts.AccountsChecking(args,$tab);
        });

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsData = { 
                name: args.name,
                info: $tab.find('.T-creatorUserChoose').val(),
                startAccountTime: $tab.find('.T-startTime').val(),
                endAccountTime: $tab.find('.T-endTime').val(),
                accountStatus : args.accountStatus,
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
            };
            FinancialService.exportReport(argsData,"exportArrangeOtherFinancial");
        });
        //给全选按钮绑定事件
        FinancialService.initCheckBoxs($tab.find('.T-selectAll'), $tab.find('.T-checkList input[type="checkbox"]'));
    };
    /**
     * 获取其它账务list列表
     * @param  {object} $obj 客户列表搜索框的Jquery对象
     * @return {[type]}      [description]
     */
    OtherAccounts.getTravelAgencyList = function($obj) {
        var isMainList = $obj.closest('#tab-financial_Other_accounts-content').length === 1,
            name = $obj.val();
        if (!!OtherAccounts.projList) {
            if (OtherAccounts.projList.length) {
                var isAll = OtherAccounts.projList[0].value == '全部';
                if (isMainList && !isAll) {
                    OtherAccounts.projList.unshift({
                                value: '全部'
                            });
                } else if (!isMainList && isAll) {
                    OtherAccounts.projList.shift({
                                value: '全部'
                            });
                }
                $obj.autocomplete({
                    minLength: 0,
                    change: function(event, ui) {
                        if(!isMainList){
                            $obj.val(name);
                        } else {
                            if (!ui.item) {
                                $(this).data('id', '');
                            }
                        }
                    },
                    select: function(event, ui) {
                        $obj.val(ui.item.name).closest('.tab-pane-menu').find('.T-search').trigger('click');
                    },
                    source: OtherAccounts.projList,
                }).off('click').on('click', function() {
                    $obj.autocomplete('search', '');
                })
            }
            return $obj;
        }
        return $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if(!isMainList){
                    $obj.val(name);
                } else {
                    if (!ui.item) {
                        $(this).data('id', '');
                    }
                }
            },
            select: function(event, ui) {
                $obj.val(ui.item.name).closest('.tab-pane-menu').find('.T-search').trigger('click');
            }
        }).off("click").on("click", function() {
            var obj = $(this);
            $.ajax({
                url: KingServices.build_url('account/arrangeOtherFinancial', 'getQueryTerms'),
                type: 'POST',
                showLoading: false,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var projList = data.nameList
                        for (var i = 0; i < projList.length; i++) {
                            projList[i].value = projList[i].name;
                        };
                        if (isMainList) {
                            projList.unshift({
                                value: '全部'
                            });
                        }
                        OtherAccounts.projList = projList;
                        obj.autocomplete('option', 'source', projList);
                        obj.autocomplete('search', '');
                    };
                }
            })

        });
    };

    // 保存对账 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
    OtherAccounts.CheckConfirm = function($tab,args,tabArgs) {
        var argumentLen = arguments.length
        var json = FinancialService.checkSaveJson(OtherAccounts.$checkTab,OtherAccounts.checkTemp,new FinRule(0),true);
        if(!json){ return false; }
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
            type: "POST",
            data: { reconciliation: json },
        }).done(function(data) {
            if (showDialog(data)) {
                
                showMessageDialog(data.message, function() {
                    OtherAccounts.checkTemp = false;
                    $tab.data('isEdited', false);
                    if (argumentLen === 1) {
                        Tools.closeTab(menuKey + "-checking");
                        OtherAccounts.listFinancialOtherAccounts(OtherAccounts.listPageNo);
                    } else {
                        OtherAccounts.AccountsChecking(args);
                    }
                });
            }
        });
    };
    //付款
    OtherAccounts.AccountsPayment = function(args,$tab) {
        if (!!$tab) {
            args.name = $tab.find("input[name=itemName]").val();
            args.startAccountTime = $tab.find(".T-startTime").val();
            args.endAccountTime = $tab.find(".T-endTime").val();
            args.info = $tab.find('.T-creatorUserChoose').val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.pageNo = args.pageNo || 0;
        args.sortType = "auto";
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOtherDetails"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    //暂存数据读取
                    if(!$.isEmptyObject(OtherAccounts.saveJson)) {
                        data.sumPayMoney = OtherAccounts.saveJson.sumPayMoney;
                        data.sumPayType = OtherAccounts.saveJson.sumPayType;
                        data.sumPayRemark = OtherAccounts.saveJson.sumPayRemark;
                        data.bankNo = OtherAccounts.saveJson.bankNo;
                        data.bankId = OtherAccounts.saveJson.bankId;
                        data.voucher = OtherAccounts.saveJson.voucher;
                        data.billTime = OtherAccounts.saveJson.billTime;

                        data.financialOtherDetailsList = FinancialService.getTempDate(data.financialOtherDetailsList,OtherAccounts.saveJson.autoPayList);
                    }
                    data.financialOtherDetailsList = FinancialService.isGuidePay(data.financialOtherDetailsList);
                    //财务入口调用
                    data.showBtnFlag = OtherAccounts.showBtnFlag;
                    if (OtherAccounts.saveJson.btnShowStatus) {
                        data.btnShowStatus = OtherAccounts.saveJson.btnShowStatus;
                    }
                    var dataTable = data;
                    dataTable.searchParam = args;
                    // 付款头部的接口
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: args,
                        success: function(data) {
                            if (showDialog(data)) {
                                dataTable.statistics = data.statistics;
                                if (Tools.addTab(menuKey + "-clearing", "其它付款", AccountsPaymentTemplate(dataTable))) {
                                    OtherAccounts.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                                    if(OtherAccounts.saveJson.autoPayList){
                                        OtherAccounts.$clearTab.data("isEdited",true);
                                    }
                                    OtherAccounts.initPaymentEvent(args,OtherAccounts.$clearTab);
                                } else {
                                    OtherAccounts.$clearTab.data('next',args);
                                }

                                //翻页
                                laypage({
                                    cont: OtherAccounts.$clearTab.find('.T-pagenation'),
                                    pages: dataTable.totalPage,
                                    curr: (args.pageNo + 1),
                                    jump: function(obj, first) {
                                        if (!first) {
                                            OtherAccounts.saveJson.autoPayList = FinancialService.clearSaveJson(OtherAccounts.$clearTab, OtherAccounts.saveJson.autoPayList, new FinRule(1));
                                            console.log("OtherAccounts.saveJson.autoPayList");
                                            console.log(OtherAccounts.saveJson.autoPayList);
                                            var sumPayMoney = parseFloat(OtherAccounts.$clearTab.find('input[name=sumPayMoney]').val()) || '',
                                                sumPayType = parseFloat(OtherAccounts.$clearTab.find('select[name=sumPayType]').val()),
                                                sumPayRemark = OtherAccounts.$clearTab.find('input[name=sumPayRemark]').val();
                                            OtherAccounts.saveJson.sumPayMoney = sumPayMoney;
                                            OtherAccounts.saveJson.sumPayType = sumPayType;
                                            OtherAccounts.saveJson.sumPayRemark = sumPayRemark;
                                            OtherAccounts.saveJson.bankNo = (sumPayType == 0) ? OtherAccounts.$clearTab.find('input[name=cash-number]').val() : OtherAccounts.$clearTab.find('input[name=card-number]').val();
                                            OtherAccounts.saveJson.bankId = (sumPayType == 0) ? OtherAccounts.$clearTab.find('input[name=cash-id]').val() : OtherAccounts.$clearTab.find('input[name=card-id]').val();
                                            OtherAccounts.saveJson.voucher = OtherAccounts.$clearTab.find('input[name=credentials-number]').val();
                                            OtherAccounts.saveJson.billTime = OtherAccounts.$clearTab.find('input[name=tally-date]').val();
                                            OtherAccounts.$clearTab.data('isEdited',false);
                                            args.pageNo = obj.curr - 1;
                                            OtherAccounts.AccountsPayment(args);
                                        }
                                    }
                                });
                            }
                        }
                    })
                };
            }
        })
    };

    /**
     * 付款页面数据初始化，事件绑定
     * @param  {object} data 页面响应数据
     * @return {[type]}      [description]
     */
    OtherAccounts.initPaymentEvent = function(args,$tab) {
        var autoValidator = new FinRule(2).check($tab.find('.T-count'));
        var settleValidator = OtherAccounts.showBtnFlag == true ? new FinRule(3) : new FinRule(1);
        var payValidator = settleValidator.check($tab);
        //绑定项目
        OtherAccounts.getTravelAgencyList($tab.find('.T-item-name'));

        if (OtherAccounts.saveJson.btnShowStatus) {
            // 当翻页时，需要使用实际的合计，而非下账的合计
            // $tab.find('input[name=sumPayMoney]').val(OtherAccounts.saveJson.autoPayMoney);
            OtherAccounts.setAutoFillEdit($tab, true);
        }

        FinancialService.updateSumPayMoney($tab, settleValidator);
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            OtherAccounts.saveJson = false;
            OtherAccounts.saveJson.autoPayList = false;
            OtherAccounts.AccountsPayment($tab.data('next'),$tab);
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            OtherAccounts.paysave($tab,$tab.data('next'),[tab_id, title, html]);
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            OtherAccounts.paysave($tab);
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            OtherAccounts.saveJson = {};
        });
        //付款-自动计算本次付款总额
        $tab.find('.T-clearList').off('change').on('change', 'input', function() {
            $(this).closest('tr').data('change', true);
            $tab.data("isEdited",true);
        });
        //表格内操作
        $tab.find('.T-clearList').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');
            if ($that.hasClass('T-lookPay')) {
                // 查看已付明细
                OtherAccounts.lookDetail(id);
            } else if ($that.hasClass('T-viewInsuanceImg')) {
                // 查看单据
                FinancialService.viewBillImage(this);
            } else if ($that.hasClass('T-viewhandle')) {
                // 查看对账明细
                OtherAccounts.viewOrderDetail(id);
            } else if($that.hasClass('T-payRequest')){
                KingServices.getPayment($(this).data("preid"));
            }
        });
        FinancialService.initPayEvent($tab);
        
        //时间控件
        Tools.setDatePicker($tab.find('.datepicker'), true);
        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            OtherAccounts.AccountsPayment(args,$tab);
        });
        //付款搜索
        $tab.find('.T-search').click(function(event) {
            args.pageNo = 0;
            OtherAccounts.AccountsPayment(args,$tab);
        });
        //关闭页面事件
        FinancialService.closeTab(menuKey + "-clearing");
        //保存付款事件
        $tab.find(".T-saveClear").click(function() {
            var check =  new FinRule(5).check($tab);
            if(!check.form()){ return false; }
            if(!payValidator.form()){return;}
            OtherAccounts.paysave($tab,args);
        });
        // 自动下账
        $tab.find(".T-clear-auto").off('click').on("click", function() {
            var $that = $(this);
            if ($that.hasClass('btn-primary')) {
                var startAccountTime = $tab.find('.T-startTime').val(),
                    endAccountTime = $tab.find('.T-endTime').val(),
                    $that = $(this);
                var isAutoPay = FinancialService.autoPayJson(args.name,$tab, new FinRule(2));
                if (!isAutoPay) {
                    return false;
                }
                var searchParam = {
                    name: args.name,
                    autoPayMoney: parseFloat($tab.find('input[name=sumPayMoney]').val()),
                    startAccountTime: startAccountTime,
                    endAccountTime: endAccountTime,
                    info: $tab.find('input[name=creator]').val(),
                    payType: $tab.find('select[name=sumPayType]').val(),
                    accountStatus : args.accountStatus
                };
                FinancialService.autoPayConfirm(startAccountTime,endAccountTime,function() {
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "autoPayment"),
                        type: "POST",
                        data: searchParam,
                        success: function(data) {
                            if (showDialog(data)) {
                                $tab.data("isEdited",false);
                                OtherAccounts.saveJson = data;
                                args.pageNo = 0;
                                OtherAccounts.AccountsPayment(args,$tab);
                                OtherAccounts.saveJson.btnShowStatus = true;
                                OtherAccounts.setAutoFillEdit($tab, true);
                                OtherAccounts.saveJson.sumPayMoney = $tab.find('input[name=sumPayMoney]').val();
                                var payType = $tab.find('select[name=sumPayType]').val();
                                OtherAccounts.saveJson.sumPayType = payType;
                                OtherAccounts.saveJson.sumPayRemark = $tab.find('input[name=sumPayRemark]').val();
                                OtherAccounts.saveJson.bankNo = (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
                                OtherAccounts.saveJson.bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
                                OtherAccounts.saveJson.voucher = $tab.find('input[name=credentials-number]').val();
                                OtherAccounts.saveJson.billTime = $tab.find('input[name=tally-date]').val();
                            }
                        }
                    });
                });
            } else {
                $tab.data('isEdited', false);
                OtherAccounts.saveJson = {};
                OtherAccounts.AccountsPayment(args,$tab);
            }
        });
    };

    // 保存付款 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
    OtherAccounts.paysave = function($tab,args,tabArgs) {
        var json = FinancialService.clearSaveJson($tab,OtherAccounts.saveJson.autoPayList, new FinRule(3),true);
        if(!json){ return false; }
        var arguementLen = arguments.length,
            payType = $tab.find('select[name=sumPayType]').val(),
            searchParam = {
                name : $tab.find('input[name=itemName]').val(),
                payMoney : $tab.find('input[name=sumPayMoney]').val(),
                payType : payType,
                payRemark : $tab.find('input[name=sumPayRemark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            };
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "savePayment"),
            type: "POST",
            data: {
                payment: json,
                searchParam : JSON.stringify(searchParam)
            },
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    $tab.data('isEdited', false);
                    OtherAccounts.saveJson = {};
                    if (arguementLen === 1) {
                        Tools.closeTab(menuKey + "-clearing");
                        OtherAccounts.listFinancialOtherAccounts(OtherAccounts.listPageNo);
                    } else {
                        OtherAccounts.AccountsPayment(args,$tab);
                    }
                });
            }
        });
    };
    // // 查看已付金额a-1
    OtherAccounts.lookDetail = function(id) {
        // 对账查看明细页面
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "getPaymentDetails"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                if (showDialog(data)) {
                    var html = lookDetailTemplate(data);
                    var lookDetailLayer = layer.open({
                        type: 1,
                        title: "已付金额明细",
                        skin: 'layui-layer-rim', //加上边框
                        area: '55%', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                    });
                }
            }
        })
    };
        //应付金额明细b-2
    OtherAccounts.viewOrderDetail = function(id) {
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "getReconciliationDetails"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                if (showDialog(data)) {
                    var html = viewOrderDetailTemplate(data);
                    var lookDetailLayer = layer.open({
                        type: 1,
                        title: "应付金额明细",
                        skin: 'layui-layer-rim', //加上边框
                        area: '55%', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                    });
                }
            }
        })
    };

    //自动下账后设置按钮的样式
    OtherAccounts.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        } else{
            $tab.find('.T-bankDiv').removeClass('hidden');
        }
        $tab.find('.T-clear-auto').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');
    };
    //暴露方法
    OtherAccounts.initPayModule = function(options) {
        OtherAccounts.showBtnFlag = true;
        var args = {
            pageNo : 0,
            name : options.name,
            startAccountTime : options.startDate,
            endAccountTime : options.endDate,
            accountStatus : options.accountStatus
        };
        OtherAccounts.AccountsPayment(args);
    };
    exports.init = OtherAccounts.initModule;
    exports.initPay = OtherAccounts.initPayModule;
})
