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
        checkTabId = menuKey + "-checking",
        tabId = "tab-" + menuKey + "-content",
        PaymentTabId = menuKey + "-Payment";
    var OtherAccounts = {
        $searchArea: false,
        $checkSearchArea: false,
        saveJson: {},
        $clearSearchArea: false,
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
        console.log(accountStatus);
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
            var $that = $(this);
            var name = $(this).closest('tr').attr("data-name");
            if ($that.hasClass('T-checking')) {
                //对账
                OtherAccounts.AccountsChecking(0, name, "", startAccountTime, endAccountTime, accountStatus);
            } else if ($that.hasClass('T-payment')) {
                // 付款
                OtherAccounts.showBtnFlag = false;
                OtherAccounts.AccountsPayment(0, name, "", startAccountTime, endAccountTime, accountStatus);
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
    OtherAccounts.AccountsChecking = function(pageNo, name, info, startAccountTime, endAccountTime, accountStatus) {

        if (OtherAccounts.$checkSearchArea && arguments.length === 1) {
            startAccountTime = OtherAccounts.$checkSearchArea.find(".T-startTime").val();
            endAccountTime = OtherAccounts.$checkSearchArea.find(".T-endTime").val();
            name = OtherAccounts.$checkSearchArea.find("input[name=itemName]").val();
            info = OtherAccounts.$checkSearchArea.find('.T-creatorUserChoose').val();
            accountStatus = OtherAccounts.$checkSearchArea.data('account-status');
        }

        pageNo = pageNo || 0;
        //重置搜索条件
        OtherAccounts.CheckingData = {
            pageNo: pageNo,
            name: name,
            startAccountTime: startAccountTime,
            endAccountTime: endAccountTime,
            info: info,
            accountStatus : accountStatus,
            sortType: 'auto'
        }
        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOtherDetails"),
            type: "POST",
            data: OtherAccounts.CheckingData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var dataTable = data;
                    // 对账 
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: OtherAccounts.CheckingData,
                        success: function(data) {
                            dataTable.accountStatus = accountStatus;
                            dataTable.statistics = data.statistics;
                            dataTable.financialOtherDetailsList = FinancialService.isGuidePay(dataTable.financialOtherDetailsList);
                            if (showDialog(data)) {
                                // 切换tab内容成功
                                if (Tools.addTab(checkTabId, "其它对账", AccountsCheckingTemplate(dataTable))) {
                                    OtherAccounts.initCheckEvent(dataTable);
                                } else if (OtherAccounts.$checkTab && OtherAccounts.$checkTab.length) {
                                    OtherAccounts.$checkTab.data('next', dataTable);
                                }
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
    OtherAccounts.initCheckEvent = function(data) {
        var $checkTab = $("#tab-" + checkTabId + "-content"),
            checkRule = new FinRule(0);
        OtherAccounts.$checkSearchArea = $checkTab.find('.T-search-area');
        FinancialService.updateUnpayMoney($checkTab, checkRule);
        //翻页
        laypage({
            cont: $checkTab.find('.T-pagenation'),
            pages: data.totalPage,
            curr: (data.pageNo + 1),
            jump: function(obj, first) {
                if (!first) {
                    OtherAccounts.AccountsChecking(obj.curr - 1);
                }
            }
        });

        // 表格内操作
        $checkTab.find('.T-checkListNum').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');

            if ($that.hasClass('T-lookDetail')) {
                // 查看已付明细
                OtherAccounts.lookDetail(id);
            } else if ($that.hasClass('T-viewInsuanceImg')) {
                // 查看单据
                var bigImg = $checkTab.find('input[name=WEB_IMG_URL_BIG]').val();
                var smallImg = $checkTab.find('input[name=WEB_IMG_URL_SMALL]').val();
                OtherAccounts.viewInsuranceImg(this, bigImg, smallImg);
            } else if ($that.hasClass('T-viewhandle')) {
                // 查看对账明细
                OtherAccounts.viewOrderDetail(id);
            }
        });
        //时间控件
        Tools.setDatePicker(OtherAccounts.$checkSearchArea.find('.datepicker'), true);

        //关闭页面事
        $checkTab.find(".T-closeTab").click(function() {
            Tools.closeTab(checkTabId);
        });
        // 处理关闭与切换tab
        $checkTab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
            .on('change', '.T-checkList, .T-checkAll', function() {
                $checkTab.data('isEdited', true);
                if ($(this).hasClass('T-checkAll')) {
                    $checkTab.find('.T-checkTr').data('change', true);
                }
            })
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                Ticket.CheckConfirm($checkTab, [tab_id, title, html]);
            })
            .on(SWITCH_TAB_BIND_EVENT, function() {
                Ticket.checkingList();
            })
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                if (!validator.form()) {
                    return;
                }
                Ticket.CheckConfirm($checkTab);
            });
        $checkTab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            OtherAccounts.initCheckEvent(data);
        });

        //监听关闭tab
        $checkTab.find(".T-closeTab").on('click', function(event) {
            event.preventDefault();
            if (!!$checkTab.data('isEdited')) {
                showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function() {
                    OtherAccounts.CheckConfirm($checkTab);
                }, function() {
                    Tools.closeTab(checkMenuKey);
                    OtherAccounts.listFinancialOtherAccounts(0);
                });
            } else {
                Tools.closeTab(checkMenuKey);
                OtherAccounts.listFinancialOtherAccounts(0);
            }
        });

        //对账保存
        $checkTab.find(".T-confirm").click(function(event) {
            OtherAccounts.CheckConfirm(data.searchParam.name, OtherAccounts.$checkTab);
        });
        //对账搜索
        $checkTab.find('.T-search').click(function(event) {
            OtherAccounts.AccountsChecking(0);
        });

        //导出报表事件 btn-hotelExport
        $checkTab.find(".T-btn-export").click(function(){
            var args = { 
                    name: $checkTab.find('input[name=itemName]').val(),
                    info: $checkTab.find('.T-creatorUserChoose').val(),
                    startAccountTime: $checkTab.find('.T-startTime').val(),
                    endAccountTime: $checkTab.find('.T-endTime').val()
                };
            FinancialService.exportReport(args,"exportArrangeOtherFinancial");
        });
        //给全选按钮绑定事件
        FinancialService.initCheckBoxs($checkTab.find('.T-selectAll'), $checkTab.find('.T-Accounts').find('input[type="checkbox"]'));

        OtherAccounts.$checkTab = $checkTab;
    };
    /**
     * 获取其它账务list列表
     * @param  {object} $obj 客户列表搜索框的Jquery对象
     * @return {[type]}      [description]
     */
    OtherAccounts.getTravelAgencyList = function($obj) {
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
        }).off("click").on("click", function() {
            var obj = $(this);
            $.ajax({
                url: KingServices.build_url('account/arrangeOtherFinancial', 'getQueryTerms'),
                type: 'POST',
                showLoading: false,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var $nameList = data.nameList
                        for (var i = 0; i < $nameList.length; i++) {
                            $nameList[i].value = $nameList[i].name;
                        };
                        $nameList.unshift({
                            value: '全部'
                        });
                        obj.autocomplete('option', 'source', $nameList);
                        obj.autocomplete('search', '');
                    };
                }
            })

        });
    };

    // 保存对账 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
    OtherAccounts.CheckConfirm = function(name, $checkTab, tabArgs) {
        var argumentLen = arguments.length
        var json = FinancialService.checkSaveJson($checkTab, new FinRule(0));
        if (json.length > 0) {
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
                type: "POST",
                data: {
                    reconciliation: json
                },
            }).done(function(data) {
                if (showDialog(data)) {
                    $checkTab.data('isEdited', false);
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (argumentLen == 2) {
                            OtherAccounts.AccountsChecking(0);
                        } else {
                            if (!!tabArgs) {
                                Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                                OtherAccounts.checkList(0);
                            } else {
                                Tools.closeTab(checkTabId);
                                OtherAccounts.listFinancialOtherAccounts(OtherAccounts.listPageNo);
                            }
                        }
                    });
                }
            });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
    };
    //付款
    OtherAccounts.AccountsPayment = function(pageNo, name, info, startAccountTime, endAccountTime, accountStatus) {
        if (OtherAccounts.$clearSearchArea && arguments.length === 1) {
            startAccountTime = OtherAccounts.$clearSearchArea.find(".T-startTime").val();
            endAccountTime = OtherAccounts.$clearSearchArea.find(".T-endTime").val();
            name = OtherAccounts.$clearSearchArea.find("input[name=itemName]").val();
            info = OtherAccounts.$clearSearchArea.find('.T-creatorUserChoose').val();
            accountStatus = OtherAccounts.$clearSearchArea.data('account-status');
        }
        console.log(accountStatus);
        pageNo = pageNo || 0;
        //重置搜索条件
        OtherAccounts.PaymentData = {
            pageNo: pageNo,
            name: name,
            info: info,
            startAccountTime: startAccountTime,
            endAccountTime: endAccountTime,
            accountStatus : accountStatus,
            sortType: 'auto'
        };

        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOtherDetails"),
            type: "POST",
            data: OtherAccounts.PaymentData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    //暂存数据读取
                    if(OtherAccounts.saveJson){
                        data.sumPayMoney = OtherAccounts.saveJson.sumPayMoney;
                        data.sumPayType = OtherAccounts.saveJson.sumPayType;
                        data.sumPayRemark = OtherAccounts.saveJson.sumPayRemark;
                        data.bankNo = OtherAccounts.saveJson.bankNo;
                        data.bankId = OtherAccounts.saveJson.bankId;
                        data.voucher = OtherAccounts.saveJson.voucher;
                        data.billTime = OtherAccounts.saveJson.billTime;
                    } 
                    data.accountStatus = accountStatus;
                    if (OtherAccounts.saveJson.autoPayList) {
                        var saveJson = OtherAccounts.saveJson.autoPayList;
                        for (var i = 0; i < data.financialOtherDetailsList.length; i++) {
                            for (var j = 0; j < saveJson.length; j++) {
                                if (data.financialOtherDetailsList[i].id == saveJson[j].id) {
                                    data.financialOtherDetailsList[i].payMoney = saveJson[j].payMoney
                                }
                            }
                        }
                    };
                    //财务入口调用
                    data.showBtnFlag = OtherAccounts.showBtnFlag
                    if (OtherAccounts.saveJson.btnShowStatus) {
                        data.btnShowStatus = OtherAccounts.saveJson.btnShowStatus;
                    }
                    var dataTable = data;
                    // 付款头部的接口
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: OtherAccounts.PaymentData,
                        success: function(data) {
                            if (showDialog(data)) {

                                dataTable.statistics = data.statistics;
                                dataTable.financialOtherDetailsList = FinancialService.isGuidePay(dataTable.financialOtherDetailsList);
                                if (Tools.addTab(PaymentTabId, "其它付款", AccountsPaymentTemplate(dataTable))) {
                                    if(OtherAccounts.saveJson.btnShowStatus){
                                        OtherAccounts.$PaymentTabId.data("isEdited",true);
                                    }
                                    OtherAccounts.initPaymentEvent(dataTable);
                                } else if (OtherAccounts.$PaymentTabId && OtherAccounts.$PaymentTabId.length) {
                                    OtherAccounts.$PaymentTabId.data('next', dataTable);
                                }


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
    OtherAccounts.initPaymentEvent = function(data) {
        var $PaymentTabId = $("#tab-" + PaymentTabId + "-content");
        OtherAccounts.$PaymentTabId = $PaymentTabId;

        OtherAccounts.$clearSearchArea = $PaymentTabId.find('.T-search-area');
        var id = OtherAccounts.$PaymentTabId.find('.T-btn-save').data('id');
        var autoValidator = new FinRule(2).check($PaymentTabId.find('.T-count'));
        var settleValidator = data.showBtnFlag == true ? new FinRule(3) : new FinRule(1);
        var payValidator = settleValidator.check($PaymentTabId);
        OtherAccounts.$PaymentTabId.data('id', id);
        if (data.btnShowStatus) {
            $PaymentTabId.find('input[name=sumPayMoney]').val(OtherAccounts.saveJson.autoPayMoney);
            OtherAccounts.setAutoFillEdit($PaymentTabId, true);
        }
        OtherAccounts.$PaymentTabId.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                OtherAccounts.saveJson = false;
                OtherAccounts.saveJson.autoPayList = false;
                OtherAccounts.$PaymentTabId.data("isEdited",false);
                OtherAccounts.AccountsPayment(OtherAccounts.$PaymentTabId, id);
            })
            // 监听保存，并切换tab
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                OtherAccounts.paysave($tab, [tab_id, title, html]);
            })
            // 保存后关闭
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                OtherAccounts.paysave($tab);
            });
        //付款-自动计算本次付款总额
        $PaymentTabId.find('.T-clearList').off('change').on('change', 'input', function() {
            $(this).closest('tr').data('change', true);
            $PaymentTabId.data("isEdited",true);
            FinancialService.updateSumPayMoney($PaymentTabId, settleValidator);
        });
        //表格内操作
        $PaymentTabId.find('.T-clearList').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');
            if ($that.hasClass('T-lookPay')) {
                // 查看已付明细
                OtherAccounts.lookDetail(id);
            } else if ($that.hasClass('T-viewInsuanceImg')) {
                // 查看单据
                var bigImg = $PaymentTabId.find('input[name=WEB_IMG_URL_BIG]').val();
                var smallImg = $PaymentTabId.find('input[name=WEB_IMG_URL_SMALL]').val();
                OtherAccounts.viewInsuranceImg(this, bigImg, smallImg);
            } else if ($that.hasClass('T-viewhandle')) {
                // 查看对账明细
                OtherAccounts.viewOrderDetail(id);
            }
        });

        FinancialService.initPayEvent($PaymentTabId.find('.T-summary'));
        
        //时间控件
        Tools.setDatePicker(OtherAccounts.$clearSearchArea.find('.datepicker'), true);
        //翻页
        laypage({
            cont: $PaymentTabId.find('.T-pagenation'),
            pages: data.totalPage,
            curr: (data.pageNo + 1),
            jump: function(obj, first) {
                if (!first) {
                    var tempJson = FinancialService.clearSaveJson($PaymentTabId, OtherAccounts.saveJson.autoPayList, new FinRule(1));
                    OtherAccounts.saveJson.autoPayList = tempJson;
                    var sumPayMoney = parseFloat($PaymentTabId.find('input[name=sumPayMoney]').val()),
                        sumPayType = parseFloat($PaymentTabId.find('select[name=sumPayType]').val()),
                        sumPayRemark = $PaymentTabId.find('input[name=sumRemark]').val();
                    OtherAccounts.saveJson = {
                        sumPayMoney: sumPayMoney,
                        sumPayType: sumPayType,
                        sumPayRemark: sumPayRemark,
                        bankNo : $PaymentTabId.find('input[name=card-number]').val(),
                        bankId : $PaymentTabId.find('input[name=card-id]').val(),
                        voucher : $PaymentTabId.find('input[name=credentials-number]').val(),
                        billTime : $PaymentTabId.find('input[name=tally-date]').val()
                    }
                    OtherAccounts.AccountsPayment(obj.curr - 1);
                }
            }
        });
        //付款搜索
        $PaymentTabId.find('.T-paymentSearch').click(function(event) {
            OtherAccounts.AccountsPayment(0);
        });
        //关闭页面事件
        $PaymentTabId.find(".T-close-clear").click(function() {
            Tools.closeTab(PaymentTabId);
        });
        //保存付款事件
        $PaymentTabId.find(".T-saveClear").click(function() {
            var check =  new FinRule(5).check($PaymentTabId);
            if(!check.form()){ return false; }
            if(!payValidator.form()){return;}
            OtherAccounts.paysave(data, $PaymentTabId);
        });
        // 自动下账
        $PaymentTabId.find(".T-clear-auto").off('click').on("click", function() {
            var $that = $(this);
            if ($that.hasClass('btn-primary')) {
                var sumPayMoney = parseInt($PaymentTabId.find('input[name=sumPayMoney]').val()),
                    sumPayType = $PaymentTabId.find('select[name=sumPayType]').val(),
                    info = $PaymentTabId.find('input[name=creator]').val(),
                    startAccountTime = $PaymentTabId.find('.T-startTime').val(),
                    endAccountTime = $PaymentTabId.find('.T-endTime').val(),
                    names = $PaymentTabId.find(".T-name").text(),
                    $that = $(this);
                var isAutoPay = FinancialService.autoPayJson(names, $PaymentTabId, new FinRule(2));
                if (!isAutoPay) {
                    return false;
                }

                var searchParam = {
                    name: names,
                    autoPayMoney: sumPayMoney,
                    startAccountTime: startAccountTime,
                    endAccountTime: endAccountTime,
                    info: info,
                    payType: sumPayType
                };
                showConfirmMsg($("#confirm-dialog-message"), "是否按当前账期 " + startAccountTime + " 至 " + endAccountTime + " 下账？", function() {
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "autoPayment"),
                        type: "POST",
                        data: searchParam,
                        success: function(data) {
                            var result = showDialog(data);
                            if (result) {
                                OtherAccounts.$PaymentTabId.data("isEdited",false);
                                OtherAccounts.saveJson = data;
                                OtherAccounts.AccountsPayment(0);
                                OtherAccounts.saveJson.btnShowStatus = true;
                                OtherAccounts.setAutoFillEdit($PaymentTabId, true);
                                OtherAccounts.saveJson.sumPayMoney = $PaymentTabId.find('input[name=sumPayMoney]').val();
                                OtherAccounts.saveJson.sumPayType = $PaymentTabId.find('select[name=sumPayType]').val();
                                OtherAccounts.saveJson.sumPayRemark = $PaymentTabId.find('input[name=sumPayRemark]').val();
                                OtherAccounts.saveJson.bankNo = $PaymentTabId.find('input[name=card-number]').val();
                                OtherAccounts.saveJson.bankId = $PaymentTabId.find('input[name=card-id]').val();
                                OtherAccounts.saveJson.voucher = $PaymentTabId.find('input[name=credentials-number]').val();
                                OtherAccounts.saveJson.billTime = $PaymentTabId.find('input[name=tally-date]').val();
                            }
                        }
                    });
                });
            } else {
                OtherAccounts.setAutoFillEdit($PaymentTabId, false);
            }
        });
    };

    // 保存付款 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
    OtherAccounts.paysave = function(data, tabid, title, html) {
        var $PaymentTabId = $("#tab-" + PaymentTabId + "-content");
        if(!FinancialService.isClearSave($PaymentTabId)){
            return false;
        }
        var json = FinancialService.clearSaveJson(tabid, OtherAccounts.saveJson.autoPayList, new FinRule(3));
        var arguementLen = arguments.length,
            searchParam = {
                payMoney : tabid.find('input[name=sumPayMoney]').val(),
                payType : tabid.find('select[name=sumPayType]').val(),
                payRemark : tabid.find('input[name=sumPayRemark]').val(),
                bankId : tabid.find('input[name=card-id]').val(),
                voucher : tabid.find('input[name=credentials-number]').val(),
                billTime : tabid.find('input[name=tally-date]').val()
            };
        json = JSON.stringify(json);
        searchParam = JSON.stringify(searchParam);
        if (json.length > 0) {
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "savePayment"),
                type: "POST",
                data: {
                    payment: json,
                    searchParam : searchParam
                },
            }).done(function(data) {
                if (showDialog(data)) {
                    tabid.data('isEdited', false);
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (arguementLen == 2) {
                            OtherAccounts.saveJson = {};
                            OtherAccounts.AccountsPayment(0);
                        } else {
                            Tools.closeTab(checkTabId);
                            OtherAccounts.listFinancialOtherAccounts(OtherAccounts.listPageNo);
                        }
                    });
                }
            });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
    };
    //显示单据
    OtherAccounts.viewInsuranceImg = function(obj, bigImg, smallImg) {
        var data = {
            "images": []
        };
        var str = $(obj).attr('url');
        var strs = str.split(",");
        for (var i = 0; i < strs.length; i++) {
            var s = strs[i];
            if (s != null && s != "" && s.length > 0) {
                var image = {
                    "WEB_IMG_URL_BIG": imgUrl + s,
                    "WEB_IMG_URL_SMALL": imgUrl + s + "?imageView2/2/w/150",
                }
                data.images.push(image);
            }
        }
        var html = viewImgCheckingTemplate(data);

        layer.open({
            type: 1,
            title: "单据图片",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function() {
                var colorbox_params = {
                    photo: true,
                    rel: 'colorbox',
                    reposition: true,
                    scalePhotos: true,
                    scrolling: false,
                    previous: '<i class="ace-icon fa fa-arrow-left"></i>',
                    next: '<i class="ace-icon fa fa-arrow-right"></i>',
                    close: '&times;',
                    current: '{current} of {total}',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    onOpen: function() {
                        $overflow = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                    },
                    onClosed: function() {
                        document.body.style.overflow = $overflow;
                    },
                    onComplete: function() {
                        $.colorbox.resize();
                    }
                };
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
            }
        });
    };
    //
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
                var result = showDialog(data);
                if (result) {
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
                var result = showDialog(data);
                if (result) {
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
        OtherAccounts.AccountsPayment(0, options.name, "", options.startDate, options.endDate, options.accountStatus);
    };
    exports.init = OtherAccounts.initModule;
    exports.initPay = OtherAccounts.initPayModule;
})
