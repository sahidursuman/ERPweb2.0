/**
 * 财务管理--车队账务
 *
 * by 廖佳玲
 */
define(function(require, exports) {
    var menuKey = "financial_busCompany",
        listTemplate = require("./view/list"),
        checkBill = require("./view/checkBill"),
        Clearing = require("./view/Clearing"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail"),
        planCollectionTemplate = require('./view/planCollection'),
        service_name = 'v2/singleItemArrange/touristGroupTransferArrange';

    var busCompany = {
        searchData: false,
        $tab: false,
        $checkTab: false,
        $clearTab: false,
        $searchArea: false,
        busCompanyList: false,
        clearTempData: false,
        clearTempSumDate: false
    };

    busCompany.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        dateJson.accountStatus = 2;
        busCompany.listBusCompany(0, "", "", dateJson.startDate, dateJson.endDate,dateJson.accountStatus);
    };

    busCompany.listBusCompany = function(page, busCompanyName, busCompanyId, startDate, endDate,accountStatus) {
        if (busCompany.$searchArea && arguments.length === 1) {
            busCompanyName = busCompany.$searchArea.find("input[name=busCompanyName]").val();
            busCompanyId = busCompany.$searchArea.find("input[name=busCompanyId]").val();
            startDate = busCompany.$searchArea.find("input[name=startDate]").val();
            endDate = busCompany.$searchArea.find("input[name=endDate]").val();
            accountStatus = busCompany.$searchArea.find(".T-finance-status").find("button").data("value");
        }
        busCompanyName = (busCompanyName == "全部") ? "" : busCompanyName;
        // 修正页码
        page = page || 0;
        busCompany.searchData = {
            pageNo: page,
            busCompanyName: busCompanyName,
            busCompanyId: busCompanyId,
            startTime: startDate,
            endTime: endDate,
            accountStatus : accountStatus,
            sortType: busCompany.$searchArea ? busCompany.$searchArea.find("select[name=orderBy]").val() : "desc"
        };

        var searchParam = JSON.stringify(busCompany.searchData);
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listSumFinancialBusCompany"),
            type: "POST",
            data: { searchParam: searchParam },
            success: function(data) {
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if (result) {
                    busCompany.busCompanyList = data.busCompanyNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "车队账务", html);
                    busCompany.$tab = $('#tab-' + menuKey + "-content");
                    busCompany.$searchArea = busCompany.$tab.find('.T-search-area');
                    busCompany.initList(startDate, endDate,accountStatus);
                    busCompany.listPage = page;
                    //获取合计数据
                    var sumMoneyData = {
                        settlementMoneySum: data.settlementMoneySum,
                        unPayedMoneySum: data.unPayedMoneySum,
                        payedMoneySum: data.payedMoneySum,
                        needPayMoneySum: data.needPayMoneySum
                    };
                    busCompany.getSumMoney(sumMoneyData, busCompany.$tab);
                    // 绑定翻页组件
                    laypage({
                        cont: busCompany.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                busCompany.listBusCompany(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };
    //获取合计金额
    busCompany.getSumMoney = function(data, tabId) {
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
        tabId.find('.T-sumSignMoney').text(data.unPayedMoneySum);
    };
    busCompany.initList = function(startDate, endDate,accountStatus) {
        busCompany.getQueryList();
        Tools.setDatePicker(busCompany.$tab.find(".date-picker"), true);
        //状态框选择事件
        busCompany.$tab.find(".T-finance-status").on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            busCompany.listBusCompany(0);
        });

        //搜索按钮事件
        busCompany.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            busCompany.listBusCompany(0);
        });

        // 报表内的操作
        busCompany.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var accountStatus = busCompany.$tab.find(".T-finance-status").find("button").data("value");
            var $that = $(this),
                args = {
                    pageNo : 0,
                    busCompanyId : $that.closest('tr').data('id'),
                    busCompanyName : $that.closest('tr').data('name'),
                    startTime : startDate,
                    endTime : endDate,
                    accountStatus : accountStatus
                };
            if ($that.hasClass('T-check')) {
                // 对账
                busCompany.busCompanyCheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                args.isAutoPay = 0;
                busCompany.busCompanyClear(args);
            }
        });
    };

    //对账
    busCompany.busCompanyCheck = function(args,$tab) {
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.licenseNumber = $tab.find("input[name=licenseNumber]").val();
            args.startTime = $tab.find("input[name=startDate]").val();
            args.endTime = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
        }
        args.sortType = "startTime";
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listBusCompanyAccount"),
            type: "POST",
            data: { searchParam: JSON.stringify(args) },
            success: function(data) {
                if (showDialog(data)) {
                    var fbList = data.financialBusCompanyListData;
                    data.busCompanyName = args.busCompanyName;
                    data.accountStatus = args.accountStatus;
                    data.financialBusCompanyListData = FinancialService.isGuidePay(fbList); //获取是否显示导付标识
                    data.financialBusCompanyListData = busCompany.isMemberCount(data.financialBusCompanyListData); //获取是否显示人数标识
                    if(busCompany.checkTemp && busCompany.checkTemp.length > 0){
                        data.financialBusCompanyListData = FinancialService.getCheckTempData(data.financialBusCompanyListData,busCompany.checkTemp);
                        data.sumSettlementMoney = busCompany.checkTemp.sumSttlementMoney;
                        data.sumUnPayedMoney = busCompany.checkTemp.sumUnPayedMoney;
                    }
                    var html = checkBill(data);

                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "车队对账", html)) {
                        busCompany.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        if(busCompany.checkTemp && busCompany.checkTemp.length > 0){
                            busCompany.$checkTab.data('isEdited',true);
                        }
                        busCompany.initCheck(args,busCompany.$checkTab);
                        //取消对账权限过滤
                        checkDisabled(fbList, busCompany.$checkTab.find(".T-checkTr"), busCompany.$checkTab.find(".T-checkList").data("right"));
                    } else {
                        busCompany.$checkTab.data('next',args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: busCompany.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var temp = FinancialService.checkSaveJson(busCompany.$checkTab,busCompany.checkTemp,new FinRule(0));
                                if(!temp){
                                    return false;
                                } else {
                                    busCompany.checkTemp = temp;
                                    busCompany.$checkTab.data('isEdited',false);
                                    args.pageNo = obj.curr - 1;
                                    busCompany.busCompanyCheck(args);
                                }
                                
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initCheck = function(args,$tab) {
        // 初始化jQuery 对象 
        var ruleCheck = new FinRule(0);

        busCompany.init_event(args,$tab, "check");
        FinancialService.updateUnpayMoney($tab, ruleCheck);
        busCompany.getBusCompanyList($tab,false);

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            busCompany.busCompanyCheck(args,$tab);
        });
        //搜索按钮事件
        $tab.find('.T-search').off().on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            busCompany.busCompanyCheck(args,$tab);
        });

        //导出报表事件 btn-busCompanyExport
        $tab.find(".T-btn-export").click(function() {
            var argsData = {
                busCompanyId: args.busCompanyId,
                accountInfo: $tab.find("input[name=accountInfo]").val(),
                startTime: $tab.find("input[name=startDate]").val(),
                endTime: $tab.find("input[name=endDate]").val(),
                accountStatus : args.accountStatus,
                licenseNumber : $tab.find("input[name=licenseNumber]").val(),
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                startCheck : $tab.find('.T-checkStartTime').val(),
                endCheck : $tab.find('.T-checkEndTime').val()
            };
            console.log(argsData);
            FinancialService.exportReport(argsData, "exportArrangeBusCompanyFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList tr .T-checkbox"));
        //确认对账按钮事件
        $tab.find(".T-saveCheck").click(function() {
            FinancialService.changeUncheck($tab.find(".T-checkTr"), function() {
                busCompany.saveChecking($tab,args);
            });
        });
    };

    //付款
    busCompany.busCompanyClear = function(args,$tab) {
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.licenseNumber = $tab.find("input[name=licenseNumber]").val();
            args.startTime = $tab.find("input[name=startDate]").val();
            args.endTime = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
        }
        args.sortType = "startTime";
        if(args.autoPay == 1){
            args.isAutoPay = 0;
        }
        if (args.isAutoPay == 1) {
            args.sumCurrentPayMoney = busCompany.$clearTab.find('input[name=sumPayMoney]').val();
        }
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listBusCompanyAccount"),
            type: "POST",
            data: { searchParam: JSON.stringify(args) },
            success: function(data) {
                if (showDialog(data)) {
                    data.busCompanyName = args.busCompanyName;
                    if (args.isAutoPay == 1) {
                        busCompany.clearTempData = data.autoPaymentJson;
                    }

                    var resultList = data.financialBusCompanyListData;
                    //暂存数据读取
                    if (busCompany.clearTempSumDate && busCompany.clearTempSumDate.id == args.busCompanyId) {
                        data.sumPayMoney = busCompany.clearTempSumDate.sumPayMoney;
                        data.sumPayType = busCompany.clearTempSumDate.sumPayType;
                        data.sumPayRemark = busCompany.clearTempSumDate.sumPayRemark;
                        data.bankNo = busCompany.clearTempSumDate.bankNo;
                        data.bankId = busCompany.clearTempSumDate.bankId;
                        data.voucher = busCompany.clearTempSumDate.voucher;
                        data.billTime = busCompany.clearTempSumDate.billTime;

                        data.financialBusCompanyListData = FinancialService.getTempDate(resultList, busCompany.clearTempData);
                    }
                    data.financialBusCompanyListData = FinancialService.isGuidePay(resultList);
                    data.financialBusCompanyListData = busCompany.isMemberCount(data.financialBusCompanyListData);
                    data.isAutoPay = (args.autoPay == 1) ? 1 : args.isAutoPay;
                    data.isNetPay=true;
                    var html = Clearing(data);
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "车队付款", html)) {
                        busCompany.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        if(busCompany.clearTempData){
                            busCompany.$clearTab.data('isEdited',true);
                        }
                        busCompany.initClear(args,busCompany.$clearTab);
                    } else {
                        busCompany.$clearTab.data('next', args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: busCompany.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var tempJson = FinancialService.clearSaveJson(busCompany.$clearTab, busCompany.clearTempData, new FinRule(args.isAutoPay == 2 ? 3 : 1));
                                if(tempJson){
                                    busCompany.clearTempData = tempJson;
                                    var sumPayMoney = parseFloat(busCompany.$clearTab.find('input[name=sumPayMoney]').val()),
                                        sumPayType = parseFloat(busCompany.$clearTab.find('select[name=sumPayType]').val()),
                                        sumPayRemark = busCompany.$clearTab.find('input[name=remark]').val();
                                    busCompany.clearTempSumDate = {
                                        id: args.busCompanyId,
                                        sumPayMoney: sumPayMoney,
                                        sumPayType: sumPayType,
                                        sumPayRemark: sumPayRemark,
                                        bankNo: (sumPayType == 0) ? busCompany.$clearTab.find('input[name=cash-number]').val() : busCompany.$clearTab.find('input[name=card-number]').val(),
                                        bankId: (sumPayType == 0) ? busCompany.$clearTab.find('input[name=cash-id]').val() : busCompany.$clearTab.find('input[name=card-id]').val(),
                                        voucher: busCompany.$clearTab.find('input[name=credentials-number]').val(),
                                        billTime: busCompany.$clearTab.find('input[name=tally-date]').val()
                                    }
                                }
                                busCompany.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr - 1;
                                args.autoPay = (args.autoPay == 1) ? args.autoPay : args.isAutoPay;
                                args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                                busCompany.busCompanyClear(args);
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initClear = function(args,$tab) {
        var saveRule = new FinRule(args.isAutoPay == 2 ? 3 : 1),
            autoPayRule = (new FinRule(2)).check($tab);
        args.saveRule = saveRule;

        busCompany.init_event(args,$tab, "clear");
        FinancialService.initPayEvent($tab);
        busCompany.getBusCompanyList($tab,true);
        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            if (args.isAutoPay == 1) {
                args.isAutoPay = 0;
            }
            args.pageNo = 0;
            busCompany.busCompanyClear(args,$tab);
        });
        //搜索事件
        $tab.find(".T-search").click(function() {
            if (args.isAutoPay == 1) {
                args.isAutoPay = 0;
            }
            args.pageNo = 0;
            busCompany.busCompanyClear(args,$tab);
        });

        //保存结算事件
        $tab.find(".T-saveClear").click(function() {
            if (!saveRule.check($tab).form()) { return; }
            busCompany.saveClear($tab,args);
        });

        //自动下账
        $tab.find(".T-clear-auto").off().on("click", function() {
            var autoPayJson = FinancialService.autoPayJson(args.busCompanyId,$tab, new FinRule(2));
            if (!autoPayJson) {
                return false; }
            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate, endDate, function() {
                var payType = $tab.find('select[name=sumPayType]').val();
                busCompany.clearTempSumDate = {
                    id: args.busCompanyId,
                    sumPayMoney: $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType: payType,
                    sumPayRemark: $tab.find('input[name=remark]').val(),
                    bankNo: (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId: (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher: $tab.find('input[name=credentials-number]').val(),
                    billTime: $tab.find('input[name=tally-date]').val()
                };
                args.isAutoPay = 1;
                busCompany.busCompanyClear(args);
            });
        });

        $tab.find(".T-cancel-auto").off().on("click", function() {
            busCompany.clearTempSumDate = false;
            busCompany.clearTempData = false;
            $tab.data('isEdited', false);
            args.isAutoPay = 0;
            args.autoPay = 0;
            busCompany.busCompanyClear(args,$tab);
        });
        FinancialService.updateSumPayMoney($tab,saveRule);
    };

    //对账数据保存
    busCompany.saveChecking = function($tab,args,tabArgs) {
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(busCompany.$checkTab,busCompany.checkTemp,new FinRule(0),true);
        if (!checkSaveJson) {
            return false; }

        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "saveAccountChecking"),
            type: "POST",
            data: {
                busCompanyJson: checkSaveJson
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        busCompany.checkTemp = false;
                        $tab.data('isEdited', false);
                        if (argumentsLen == 1) {
                            Tools.closeTab(menuKey + "-checking");
                            busCompany.listBusCompany(busCompany.listPage);
                        } else {
                            busCompany.busCompanyCheck(args,$tab);
                        }
                    });
                }
            }
        });
    };

    busCompany.saveClear = function($tab,args,tabArgs) {
        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab, busCompany.clearTempData,new FinRule((args ? args.isAutoPay : $tab.data('isAutoPay')) == 2 ? 3 : 1),true);
        if(!clearSaveJson){ return false; }
        var payType = $tab.find('select[name=sumPayType]').val(),
            searchParam = {
                busCompanyId: args ? args.busCompanyId : $tab.data('busCompanyId'),
                sumCurrentPayMoney: $tab.find('input[name=sumPayMoney]').val(),
                payType: payType,
                payRemark: $tab.find('input[name=remark]').val(),
                bankId: (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher: $tab.find('input[name=credentials-number]').val(),
                billTime: $tab.find('input[name=tally-date]').val()
            };

        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "saveAccountSettlement"),
            type: "POST",
            data: {
                busCompanyJson: clearSaveJson,
                searchParam: JSON.stringify(searchParam)
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        busCompany.clearTempData = false;
                        busCompany.clearTempSumDate = false;
                        $tab.data('isEdited', false);
                        if (argumentsLen === 1) {
                            Tools.closeTab(menuKey + "-clearing");
                            busCompany.listBusCompany(busCompany.listPage);
                        } else {
                            if (args.isAutoPay == 1) {
                                args.isAutoPay = 0;
                            }
                            args.autoPay = 0;
                            busCompany.busCompanyClear(args,$tab);
                        }
                    });

                }
            }
        });
    };

    //已付金额明细
    busCompany.payedDetail = function(id) {
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "getPayedMoneyDetail"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = payedDetailTempLate(data);
                    layer.open({
                        type: 1,
                        title: "已付金额明细",
                        skin: 'layui-layer-rim',
                        area: '1000px',
                        zIndex: 1028,
                        content: html,
                        scrollbar: false
                    });
                }
            }
        });
    };

    //应付金额明细
    busCompany.needPayDetail = function(id) {
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "getNeedPayDetail"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = needPayDetailTempLate(data);
                    layer.open({
                        type: 1,
                        title: "应付金额明细",
                        skin: 'layui-layer-rim',
                        area: '1000px',
                        zIndex: 1028,
                        content: html,
                        scrollbar: false
                    });
                }
            }
        });
    };

    busCompany.init_event = function(args,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = (new FinRule(0)).check($tab);
            Tools.setDatePicker($tab.find(".T-time"), true);
            Tools.setDatePicker($tab.find(".T-checkTime"), true);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change', "input", function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change", true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                if (option == "check") {
                    busCompany.checkTemp = false;
                    busCompany.busCompanyCheck($tab.data('next'),$tab);
                } else if (option == "clear") {
                    busCompany.clearTempData = false;
                    busCompany.clearTempSumDate = false;
                    busCompany.busCompanyClear($tab.data('next'),$tab);
                }
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if (option == "check") {
                    busCompany.saveChecking($tab,$tab.data('next'),[tab_id, title, html]);
                } else if (option == "clear") {
                    busCompany.saveClear($tab,$tab.data('next'),[tab_id, title, html]);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if (option == "check") {
                    busCompany.saveChecking($tab);
                } else if (option == "clear") {
                    $tab.data('saveRule',args.saveRule);
                    $tab.data('busCompanyId',args.busCompanyId);
                    $tab.data('isAutoPay',args.isAutoPay);
                    busCompany.saveClear($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                if(option == "clear"){
                    busCompany.clearTempData = false;
                    busCompany.clearTempSumDate = false;
                }else if(option == "check"){
                    busCompany.checkTemp = false;
                }
            });

            //报表内的操作
            busCompany.listOption($tab);
            //关闭页面事件
            FinancialService.closeTab(menuKey + "-" + option + "ing");
            }
    };

    busCompany.getQueryList = function() {
        var $busCompany = busCompany.$tab.find(".T-chooseBusCompany"),
            busCompanyList = busCompany.busCompanyList;
        if (busCompanyList != null && busCompanyList.length > 0) {
            for (var i = 0; i < busCompanyList.length; i++) {
                busCompanyList[i].id = busCompanyList[i].busCompanyId;
                busCompanyList[i].value = busCompanyList[i].busCompanyName;
            }
        }
        var all = {
            id: "",
            value: "全部"
        };
        busCompany.busCompanyList = busCompanyList.slice(all);
        busCompanyList.unshift(all);

        //车队
        $busCompany.autocomplete({
            minLength: 0,
            source: busCompanyList,
            change: function(event, ui) {
                if (!ui.item) {
                    $(this).nextAll('input[name="busCompanyId"]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name="busCompanyId"]').val(ui.item.id);
            }
        }).on("click", function() {
            $busCompany.autocomplete('search', '');
        });
    };

    // 对账、付款报表内的操作
    busCompany.listOption = function($tab) {
        $tab.find('.T-option').on('click', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-busCompanyImg')) {
                // 查看单据
                FinancialService.viewBillImage(this);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                busCompany.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                busCompany.needPayDetail(id);
            }else if ($that.hasClass('T-collection')) {
                // 代收金额
                var $that=$(this);
                busCompany.planCollection($tab, $that);
            }
        });
    };
        /**
     * 计划代收
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    busCompany.planCollection = function($tab, $that) {
            var $tr = $that.closest('tr'),
                arrangeId = $tr.attr('arrangeId'),
                subject = $that.attr("data-type")=="bus" ? 0 : 1;
            $.ajax({
                url: KingServices.build_url(service_name, "getCollectionList"),
                type: "POST",
                data: {
                    arrangeId: arrangeId,
                    subject: subject
                },
                success: function(data) {
                    if (showDialog(data)) {
                        var html = planCollectionTemplate(data);
                        var viewAccountsLayer = layer.open({
                            type: 1,
                            title: "编辑计划代收",
                            skin: 'layui-layer-rim',
                            area: '1200px',
                            zIndex: 1028,
                            content: html,
                            scrollbar: false,
                            success: function() {
                                var $LayerId = $('.T-transfer-bus-planCollectionLayer');
                                //关闭弹窗
                                $LayerId.on('click','.T-btn-close',function(){
                                    layer.close(viewAccountsLayer);
                                });
                                $LayerId.on('click','.T-btn-save',function(){
                                    var collection  = $LayerId.find('input[name=collection]');
                                    var count = 0;
                                    for(var i = 0; i < collection.length; i++){
                                     count += +collection.eq(i).val();
                                    }
                                    layer.close(viewAccountsLayer);
                                    $that.val(count);

                                    $LayerId.find('tr').each(function(index) {
                                        var $that = $(this);
                                        var planCollection = {
                                            id : $that.attr("id"),
                                            touristGroupId : $that.attr("touristGroupId"),
                                            collection : $that.find("[name=collection]").val(),
                                            collectionType : $that.find('[name=collectionType]').is('checked') ? 0 : 1
                                        };
                                        $tr.find('[name=collection]').data('json',planCollection);
                                    });
                                   
                                })
                            }
                        });

                    }
                }
            })
        }

    //设置数据来源标识（中转、代订）
    busCompany.isMemberCount = function(dataList) {
        for (var i = 0; i < dataList.length; i++) {
            if (!!dataList[i].tripNumber) {
                var tripNumber = trim(dataList[i].tripNumber),
                    strLen = tripNumber.length;
                tripType = tripNumber.substring(strLen - 2, strLen);
                if (tripType == "DD" || tripType == "dd") {
                    dataList[i].isMemberCount = 1;
                }
            }
        }
        return dataList;
    };

    busCompany.getBusCompanyList = function($tab,type){
        var $obj = $tab.find('input[name=busCompanyName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : busCompany.busCompanyList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    busCompanyId : ui.item.id,
                    busCompanyName : ui.item.value,
                    startTime : $tab.find('input[name=startDate]').val(),
                    endTime : $tab.find('input[name=endDate]').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val(),
                    sortType : "accountTime"
                };
                if(type){
                    args.isAutoPay = ($tab.find(".T-clear-auto").length || $tab.find(".T-cancel-auto").length) ? 0 : 2;
                    busCompany.busCompanyClear(args);
                } else {
                    busCompany.busCompanyCheck(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    busCompany.initPay = function(options) {
        var args = {
            pageNo : 0,
            startTime : options.startDate,
            endTime : options.endDate,
            accountStatus : options.accountStatus,
        }
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listSumFinancialBusCompany"),
            type: "POST",
            data: { searchParam: JSON.stringify(args) },
            success: function(data) {
                if (showDialog(data)) {
                    busCompanyList = data.busCompanyNameList;
                    if (busCompanyList != null && busCompanyList.length > 0) {
                        for (var i = 0; i < busCompanyList.length; i++) {
                            busCompanyList[i].id = busCompanyList[i].busCompanyId;
                            busCompanyList[i].value = busCompanyList[i].busCompanyName;
                        }
                    }
                    busCompany.busCompanyList = busCompanyList;
                    args.busCompanyId = options.id;
                    args.busCompanyName = options.name;
                    args.isAutoPay = 2;
                    busCompany.busCompanyClear(args);
                }
            }
        });
    };

    exports.init = busCompany.initModule;
    exports.initPay = busCompany.initPay;
});
