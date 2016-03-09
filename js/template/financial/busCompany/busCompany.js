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
        billImageTempLate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var busCompany = {
        searchData: false,
        $tab: false,
        $checkTab: false,
        $clearTab: false,
        $searchArea: false,
        $checkSearchArea: false,
        $clearSearchArea: false,
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
        if (startDate > endDate) {
            showMessageDialog($("#confirm-dialog-message"), "开始时间不能大于结束时间，请重新选择！");
            return false;
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
            sortType: 'auto'
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
                    busCompany.initList(startDate, endDate);
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
    };
    busCompany.initList = function(startDate, endDate) {
        busCompany.getQueryList();
        Tools.setDatePicker(busCompany.$tab.find(".date-picker"), true);
        //状态框选择事件
        busCompany.$tab.find(".T-finance-status").on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
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
                id = $that.closest('tr').data('id'),
                name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                var $checkTab = $("#tab-" + menuKey + "-checking-content");
                if ($checkTab.length && $checkTab.find('.T-newData').data("id") == id) {
                    $('.tab-' + menuKey + '-checking').children('a').trigger('click');
                    return false;
                }
                busCompany.busCompanyCheck(0, id, name, "", "", startDate, endDate,accountStatus);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                var $clearTab = $("#tab-" + menuKey + "-clearing-content");
                if ($clearTab.length && $clearTab.find('.T-newData').data("id") == id) {
                    $('.tab-' + menuKey + '-clearing').children('a').trigger('click');
                    return false;
                }
                busCompany.busCompanyClear(0, 0, id, name, "", "", startDate, endDate,accountStatus);
            }
        });
    };

    //对账
    busCompany.busCompanyCheck = function(page, busCompanyId, busCompanyName, accountInfo, licenseNumber, startDate, endDate,accountStatus) {
        if (busCompany.$checkSearchArea && arguments.length === 3) {
            accountInfo = busCompany.$checkSearchArea.find("input[name=accountInfo]").val();
            licenseNumber = busCompany.$checkSearchArea.find("input[name=licenseNumber]").val();
            startDate = busCompany.$checkSearchArea.find("input[name=startDate]").val();
            endDate = busCompany.$checkSearchArea.find("input[name=endDate]").val();
            accountStatus = busCompany.$searchArea.find(".T-finance-status").find("button").data("value");
        }
        if (startDate > endDate) {
            showMessageDialog($("#confirm-dialog-message"), "开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo: page,
            busCompanyId: busCompanyId + "",
            accountInfo: accountInfo,
            licenseNumber: licenseNumber,
            startTime: startDate,
            endTime: endDate,
            accountStatus : accountStatus,
            sortType: "startTime"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listBusCompanyAccount"),
            type: "POST",
            data: { searchParam: searchParam },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var fbList = data.financialBusCompanyListData;
                    data.busCompanyName = busCompanyName;
                    data.financialBusCompanyListData = FinancialService.isGuidePay(fbList); //获取是否显示导付标识
                    data.financialBusCompanyListData = busCompany.isMemberCount(data.financialBusCompanyListData); //获取是否显示人数标识
                    var html = checkBill(data);

                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "车队对账", html)) {
                        busCompany.initCheck(page, busCompanyId, busCompanyName);
                    }
                    //取消对账权限过滤
                    var checkTr = busCompany.$checkTab.find(".T-checkTr");
                    var rightCode = busCompany.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fbList, checkTr, rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: busCompany.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                busCompany.busCompanyCheck(obj.curr - 1, busCompanyId, busCompanyName);
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initCheck = function(page, id, name) {
        // 初始化jQuery 对象 
        var ruleCheck = new FinRule(0);
        busCompany.$checkTab = $("#tab-" + menuKey + "-checking-content");
        busCompany.$checkSearchArea = busCompany.$checkTab.find('.T-search-area');

        busCompany.init_event(page, id, name, busCompany.$checkTab, "check");
        Tools.setDatePicker(busCompany.$checkTab.find(".date-picker"), true);
        FinancialService.updateUnpayMoney(busCompany.$checkTab, ruleCheck);

        //搜索按钮事件
        busCompany.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            busCompany.busCompanyCheck(0, id, name);
        });

        //导出报表事件 btn-busCompanyExport
        busCompany.$checkSearchArea.find(".T-btn-export").click(function() {
            var args = {
                busCompanyId: id,
                accountInfo: busCompany.$checkSearchArea.find("input[name=accountInfo]").val(),
                startTime: busCompany.$checkSearchArea.find("input[name=startDate]").val(),
                endTime: busCompany.$checkSearchArea.find("input[name=endDate]").val()
            };
            FinancialService.exportReport(args, "exportArrangeBusCompanyFinancial");
        });

        //报表内的操作
        busCompany.listOption(busCompany.$checkTab);

        //复选框事件初始化
        var checkboxList = busCompany.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = busCompany.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll, checkboxList);

        var trList = busCompany.$checkTab.find(".T-checkTr");
        //关闭页面事件
        busCompany.$checkTab.find(".T-close-check").click(function() {
            FinancialService.changeUncheck(trList, function() {
                Tools.closeTab(menuKey + "-checking");
            });
        });
        //确认对账按钮事件
        busCompany.$checkTab.find(".T-saveCheck").click(function() {
            FinancialService.changeUncheck(trList, function() {
                busCompany.saveChecking(id, name, page);
            });
        });
    };

    //付款
    busCompany.busCompanyClear = function(isAutoPay, page, busCompanyId, busCompanyName, accountInfo, licenseNumber, startDate, endDate,accountStatus) {
        if (busCompany.$clearSearchArea && arguments.length === 4) {
            accountInfo = busCompany.$clearSearchArea.find("input[name=accountInfo]").val();
                licenseNumber = busCompany.$clearSearchArea.find("input[name=licenseNumber]").val();
                startDate = busCompany.$clearSearchArea.find("input[name=startDate]").val();
                endDate = busCompany.$clearSearchArea.find("input[name=endDate]").val();
                accountStatus = busCompany.$clearSearchArea.find("input[name=accountStatus]").val();
        }
        if (startDate > endDate) {
            showMessageDialog($("#confirm-dialog-message"), "开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        var searchParam = {
                pageNo: page,
                busCompanyId: busCompanyId + "",
                accountInfo: accountInfo,
                licenseNumber: licenseNumber,
                startTime: startDate,
                accountStatus : accountStatus,
                endTime: endDate,
                sortType: "startTime"
            },
            args = arguments;
        if (isAutoPay == 1) {
            searchParam.isAutoPay = isAutoPay;
            searchParam.sumCurrentPayMoney = busCompany.$clearTab.find('input[name=sumPayMoney]').val();
        }
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "listBusCompanyAccount"),
            type: "POST",
            data: { searchParam: searchParam },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.busCompanyName = busCompanyName;
                    if (isAutoPay == 1) {
                        busCompany.clearTempData = data.autoPaymentJson;
                    }

                    var resultList = data.financialBusCompanyListData;
                    //暂存数据读取
                    if (busCompany.clearTempSumDate && busCompany.clearTempSumDate.id == busCompanyId) {
                        data.sumPayMoney = busCompany.clearTempSumDate.sumPayMoney;
                        data.sumPayType = busCompany.clearTempSumDate.sumPayType;
                        data.sumPayRemark = busCompany.clearTempSumDate.sumPayRemark;
                        data.bankNo = busCompany.clearTempSumDate.bankNo;
                        data.bankId = busCompany.clearTempSumDate.bankId;
                        data.voucher = busCompany.clearTempSumDate.voucher;
                        data.billTime = busCompany.clearTempSumDate.billTime;

                        data.financialBusCompanyListData = FinancialService.getTempDate(resultList, busCompany.clearTempData);
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    data.financialBusCompanyListData = FinancialService.isGuidePay(resultList);
                    data.financialBusCompanyListData = busCompany.isMemberCount(data.financialBusCompanyListData);
                    data.isAutoPay = isAutoPay;
                    var html = Clearing(data);

                    args.data = data;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "车队付款", html)) {
                        busCompany.initClear(args);
                    } else {
                        busCompany.$clearTab.data('next', args);
                    }

                    //绑定翻页组件
                    var $tr = busCompany.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: busCompany.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var tempJson = FinancialService.clearSaveJson(busCompany.$clearTab, busCompany.clearTempData, new FinRule(isAutoPay == 2 ? 3 : 1));
                                busCompany.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(busCompany.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(busCompany.$clearTab.find('select[name=payType]').val()),
                                    sumPayRemark = busCompany.$clearTab.find('input[name=remark]').val();
                                busCompany.clearTempSumDate = {
                                    id: busCompanyId,
                                    sumPayMoney: sumPayMoney,
                                    sumPayType: sumPayType,
                                    sumPayRemark: sumPayRemark,
                                    bankNo: (sumPayType == 0) ? busCompany.$clearTab.find('input[name=cash-number]').val() : busCompany.$clearTab.find('input[name=card-number]').val(),
                                    bankId: (sumPayType == 0) ? busCompany.$clearTab.find('input[name=cash-id]').val() : busCompany.$clearTab.find('input[name=card-id]').val(),
                                    voucher: busCompany.$clearTab.find('input[name=credentials-number]').val(),
                                    billTime: busCompany.$clearTab.find('input[name=tally-date]').val()
                                }
                                busCompany.busCompanyClear(isAutoPay, obj.curr - 1, busCompanyId, busCompanyName);
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initClear = function(args) {
        var isAutoPay = args[0],
            data = args.data,
            page = args[1] || 0,
            id = args[2],
            name = args[3];
        // 初始化jQuery 对象 
        busCompany.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        busCompany.$clearSearchArea = busCompany.$clearTab.find('.T-search-area');
        var $tab = busCompany.$clearTab,
            saveRule = new FinRule(isAutoPay == 2 ? 3 : 1),
            autoPayRule = (new FinRule(2)).check(busCompany.$clearTab);
        args.saveRule = saveRule;

        if (isAutoPay == 0) {
            busCompany.$clearTab.find(".T-cancel-auto").hide();
        } else {
            busCompany.$clearTab.find('input[name=sumPayMoney]').prop("disabled", true);
            busCompany.$clearTab.find(".T-clear-auto").hide();
            if (isAutoPay == 1) {
                busCompany.$clearTab.data('isEdited', true);
                // busCompany.$clearTab.find(".T-bankDiv").removeClass('hidden');
            } else if (isAutoPay == 2) {
                busCompany.$clearTab.find(".T-cancel-auto").hide();
            }
        }

        FinancialService.initPayEvent(busCompany.$clearTab.find('.T-summary'));

        // 监听修改
        $tab.find(".T-clearList").off('change').on('change', "input", function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change", true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                busCompany.clearTempSumDate = false;
                busCompany.clearTempData = false;
                busCompany.$clearTab.data('isEdited', false);
                isAutoPay = busCompany.$clearTab.data('next')[0];
                if (isAutoPay == 1) {
                    isAutoPay = 0;
                }
                busCompany.busCompanyClear(isAutoPay, 0, busCompany.$clearTab.data('next')[2], busCompany.$clearTab.data('next')[3]);
                busCompany.$clearTab.find(".T-cancel-auto").hide();
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                busCompany.saveClear(args, tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                busCompany.saveClear(args, true);
            });
        Tools.setDatePicker(busCompany.$clearTab.find(".date-picker"), true);

        //搜索事件
        busCompany.$clearTab.find(".T-search").click(function() {
            if (isAutoPay == 1) {
                isAutoPay = 0;
            }
            busCompany.busCompanyClear(isAutoPay, 0, id, name);
        });

        //关闭页面事件
        busCompany.$clearTab.find(".T-close-clear").click(function() {
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存结算事件
        busCompany.$clearTab.find(".T-saveClear").click(function() {
            if (!saveRule.check(busCompany.$clearTab).form()) {
                return; }
            busCompany.saveClear(args);
        });

        //报表内的操作
        busCompany.listOption(busCompany.$clearTab);

        //自动下账
        busCompany.$clearTab.find(".T-clear-auto").off().on("click", function() {
            var autoPayJson = FinancialService.autoPayJson(id, busCompany.$clearTab, new FinRule(2));
            if (!autoPayJson) {
                return false; }
            var startDate = busCompany.$clearSearchArea.find("input[name=startDate]").val(),
                endDate = busCompany.$clearSearchArea.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate, endDate, function() {
                var payType = busCompany.$clearTab.find('select[name=payType]').val();
                busCompany.clearTempSumDate = {
                    id: id,
                    sumPayMoney: busCompany.$clearTab.find('input[name=sumPayMoney]').val(),
                    sumPayType: payType,
                    sumPayRemark: busCompany.$clearTab.find('input[name=remark]').val(),
                    bankNo: (payType == 0) ? busCompany.$clearTab.find('input[name=cash-number]').val() : busCompany.$clearTab.find('input[name=card-number]').val(),
                    bankId: (payType == 0) ? busCompany.$clearTab.find('input[name=cash-id]').val() : busCompany.$clearTab.find('input[name=card-id]').val(),
                    voucher: busCompany.$clearTab.find('input[name=credentials-number]').val(),
                    billTime: busCompany.$clearTab.find('input[name=tally-date]').val()
                };
                busCompany.busCompanyClear(1, 0, id, name);
            });
        });

        busCompany.$clearTab.find(".T-cancel-auto").off().on("click", function() {
            busCompany.$clearTab.find(".T-cancel-auto").toggle();
            busCompany.$clearTab.find(".T-clear-auto").toggle();
            busCompany.clearTempSumDate = false;
            busCompany.clearTempData = false;
            busCompany.$clearTab.data('isEdited', false);
            busCompany.busCompanyClear(0, 0, id, name);
        });
        FinancialService.updateSumPayMoney(busCompany.$clearTab, saveRule);
    };

    //对账数据保存
    busCompany.saveChecking = function(busCompanyId, busCompanyName, page, tab_id, title, html) {
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(busCompany.$checkTab, new FinRule(0));
        if (!checkSaveJson) {
            return false; }

        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "saveAccountChecking"),
            type: "POST",
            data: {
                busCompanyJson: checkSaveJson
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        if (argumentsLen == 2) {
                            Tools.closeTab(menuKey + "-checking");
                            busCompany.listBusCompany(busCompany.searchData.pageNo, busCompany.searchData.busCompanyName, busCompany.searchData.busCompanyId, busCompany.searchData.startDate, busCompany.searchData.endDate);
                        } else if (argumentsLen == 3) {
                            busCompany.$checkTab.data('isEdited', false);
                            busCompany.busCompanyCheck(page, busCompanyId, busCompanyName);
                        } else {
                            busCompany.$checkTab.data('isEdited', false);
                            Tools.addTab(tab_id, title, html);
                            busCompany.initCheck(0, busCompany.$checkTab.find(".T-newData").data("id"), busCompany.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    busCompany.saveClear = function(args, tab_id, title, html) {
        if (!FinancialService.isClearSave(busCompany.$clearTab, new FinRule(args[0] == 2 ? 3 : 1))) {
            return false;
        }

        var isAutoPay = args[0],
            data = args.data,
            page = args[1] || 0,
            id = args[2],
            name = args[3];

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(busCompany.$clearTab, busCompany.clearTempData, args.saveRule);
        var payType = busCompany.$clearTab.find('select[name=payType]').val(),
            searchParam = {
                busCompanyId: id,
                sumCurrentPayMoney: busCompany.$clearTab.find('input[name=sumPayMoney]').val(),
                payType: payType,
                payRemark: busCompany.$clearTab.find('input[name=remark]').val(),
                bankId: (payType == 0) ? busCompany.$clearTab.find('input[name=cash-id]').val() : busCompany.$clearTab.find('input[name=card-id]').val(),
                voucher: busCompany.$clearTab.find('input[name=credentials-number]').val(),
                billTime: busCompany.$clearTab.find('input[name=tally-date]').val()
            };

        clearSaveJson = JSON.stringify(clearSaveJson);
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url: KingServices.build_url("account/financialBusCompany", "saveAccountSettlement"),
            type: "POST",
            data: {
                busCompanyJson: clearSaveJson,
                searchParam: searchParam
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    busCompany.$clearTab.data('isEdited', false);
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        busCompany.clearTempData = false;
                        busCompany.clearTempSumDate = false;
                        if (argumentsLen === 2) {
                            Tools.closeTab(menuKey + "-clearing");
                            busCompany.listBusCompany(busCompany.searchData.pageNo, busCompany.searchData.busCompanyName, busCompany.searchData.busCompanyId, busCompany.searchData.startDate, busCompany.searchData.endDate);
                        } else if (argumentsLen === 1) {
                            if (isAutoPay == 1) {
                                isAutoPay = 0;
                            }
                            busCompany.busCompanyClear(isAutoPay, page, id, name);
                        } else {
                            busCompany.busCompanyClear(busCompany.$clearTab.data('next')[0], 0, busCompany.$clearTab.data('next')[2], busCompany.$clearTab.data('next')[3]);
                        }
                    });

                }
            }
        });
    };

    //显示单据
    busCompany.viewImage = function(obj, WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL) {
        var data = { "images": [] };
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
        var html = billImageTempLate(data);

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

    busCompany.init_event = function(page, id, name, $tab, option) {
        if (!!$tab && $tab.length === 1) {
            var validator = (new FinRule(0)).check($tab);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change', "input", function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change", true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                    event.preventDefault();
                    if (option == "check") {
                        busCompany.initCheck(page, id, name);
                    } else if (option == "clear") {
                        busCompany.initClear(page, id, name);
                        busCompany.$clearTab.find(".T-cancel-auto").hide();
                    }
                })
                // 监听保存，并切换tab
                .on('switch.tab.save', function(event, tab_id, title, html) {
                    event.preventDefault();
                    if (option == "check") {
                        busCompany.saveChecking(id, name, 0, tab_id, title, html);
                    } else if (option == "clear") {
                        busCompany.saveClear(id, name, "", tab_id, title, html);
                    }
                })
                // 保存后关闭
                .on('close.tab.save', function(event) {
                    event.preventDefault();
                    if (option == "check") {
                        busCompany.saveChecking(id, name);
                    } else if (option == "clear") {
                        busCompany.saveClear(id, name);
                    }
                });
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
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val(); //大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val(); //大图
                busCompany.viewImage(this, WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                busCompany.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                busCompany.needPayDetail(id);
            }
        });
    };

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

    busCompany.initPay = function(options) {
        //isAutoPay, page, busCompanyId, busCompanyName, accountInfo, licenseNumber, startDate, endDate,accountStatus
        busCompany.busCompanyClear(2, 0, options.id, options.name, "", "", options.startDate, options.endDate,options.accountStatus);
    };

    exports.init = busCompany.initModule;
    exports.initPay = busCompany.initPay;
});
