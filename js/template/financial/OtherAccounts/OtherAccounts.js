define(function(require, exports) {
    var menuKey = "financial_Other_accounts",
        rule = require("./rule"),
        listTemplate = require("./view/list"),
        AccountsCheckingTemplate = require("./view/AccountsChecking"),
        AccountsPaymentTemplate = require("./view/AccountsPayment"),
        lookDetailTemplate = require("./view/lookDetail"),
        viewhandleTemplate = require("./view/viewhandle"),
        ViewAmountPaidTemplate = require("./view/ViewAmountPaid"),
        viewOrderDetailTemplate = require("./view/viewOrderDetail"),
        checkTabId = menuKey + "-checking",
        tabId = "tab-" + menuKey + "-content",
        PaymentTabId = menuKey + "-Payment";

    var OtherAccounts = {
        $searchArea: false
    };
    OtherAccounts.initModule = function() {
        var myDate = new Date(),
            thisyear = myDate.getFullYear(),
            thismonth = myDate.getMonth() + 1,
            endAccountTime = moment(new Date(myDate)).format("YYYY-MM-DD"), //结束日期
            myDate = new Date(thisyear + '-' + thismonth + '-01'),
            startAccountTime = moment(new Date(myDate)).format("YYYY-MM-DD"); //开始日期
        OtherAccounts.listFinancialOtherAccounts(0, "", startAccountTime, endAccountTime);
    };

    OtherAccounts.listFinancialOtherAccounts = function(pageNo, name, startAccountTime, endAccountTime) {
            if (OtherAccounts.$searchArea && arguments.length === 1) {
                // 初始化页面后，可以获取页面的参数
                name = OtherAccounts.$searchArea.find("input[name=otherId]").val();
                startAccountTime = OtherAccounts.$searchArea.find("input[name=startTime]").val();
                endAccountTime = OtherAccounts.$searchArea.find("input[name=endTime]").val();
            }
            //重置搜索条件
            OtherAccounts.searchData = {
                pageNo: pageNo,
                name: name,
                startAccountTime: startAccountTime,
                endAccountTime: endAccountTime,
                sortType: 'auto'
            }
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOther"),
                type: "POST",
                data: OtherAccounts.searchData,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        console.log(data);
                        data.startAccountTime = startAccountTime
                        data.endAccountTime = endAccountTime
                        var html = listTemplate(data);
                        Tools.addTab(menuKey, "其他账务", html);
                        OtherAccounts.initList(pageNo, name, startAccountTime, endAccountTime);
                        //时间控件
                        var $container = $(".T-other");
                        $container.find(".T-time").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });
                    }
                }
            })
        },
        OtherAccounts.initList = function(pageNo, name, startAccountTime, endAccountTime) {
            // 初始化jQuery 对象
            var $container = $(".T-other");
            OtherAccounts.$tab = $('#' + tabId);
            OtherAccounts.$searchArea = OtherAccounts.$tab.find('.T-search-area');
            var $obj = OtherAccounts.$tab.find('.T-search-head-office');
            OtherAccounts.getTravelAgencyList($obj);
            //搜索按钮事件
            OtherAccounts.$tab.find('.T-search').click(function(event) {
                event.preventDefault();
                OtherAccounts.listFinancialOtherAccounts(0);
            });
            // 报表内的操作
            OtherAccounts.$tab.find('.T-other').on('click', '.T-option', function(event) {
                event.preventDefault();
                var $that = $(this);
                var name = $(this).closest('tr').attr("data-name");
                if ($that.hasClass('T-checking')) {
                    //对账
                    OtherAccounts.AccountsChecking(0, name, startAccountTime, endAccountTime);
                } else if ($that.hasClass('T-payment')) {
                    // 付款
                    OtherAccounts.AccountsPayment(0, name, startAccountTime, endAccountTime);
                }
            });
        };

    // 对账
    OtherAccounts.AccountsChecking = function(pageNo, name, startAccountTime, endAccountTime) {

        if (OtherAccounts.$searchArea) {
            var args = {
                startAccountTime: OtherAccounts.$searchArea.find("input[name=startTime]").val(),
                endAccountTime: OtherAccounts.$searchArea.find("input[name=endTime]").val(),
                name: name,
                info: OtherAccounts.$searchArea.find('.T-creatorUserChoose').val()
            }
        }

        args.pageNo = pageNo || 0;
        //重置搜索条件
        OtherAccounts.CheckingData = {
            pageNo: pageNo,
            name: name,
            startAccountTime: startAccountTime,
            endAccountTime: endAccountTime,
            sortType: 'auto'
        }
        console.log(OtherAccounts.CheckingData);

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
                            console.log(dataTable, "对账");
                            dataTable.statistics = data.statistics;
                            var result = showDialog(data);

                            if (result) {
                                var html = AccountsCheckingTemplate(dataTable);
                                Tools.addTab(checkTabId, "其他对账", html);
                                var $checkTab = $("#tab-" + checkTabId + "-content");
                                // 查看已付金额明细
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
                                        OtherAccounts.viewInsuranceImg(id);
                                    } else if ($that.hasClass('T-viewhandle')) {
                                        // 查看对账明细
                                        OtherAccounts.viewhandle(id);
                                    }
                                });
                                //时间控件
                                var $container = $(".T-Accounts");
                                $container.find("input[name=joinTime]").datepicker({
                                    autoclose: true,
                                    todayHighlight: true,
                                    format: 'yyyy-mm-dd',
                                    language: 'zh-CN'
                                });
                                //关闭页面事件
                                $container.find(".T-closeTab").click(function() {
                                    closeTab(checkTabId);
                                });
                                $container.on('change', '.selector', function(event) {
                                    event.preventDefault();
                                    /* Act on the event */
                                });
                                //对账保存
                                $container.find(".T-confirm").click(function(event) {
                                    OtherAccounts.CheckConfirm(name);
                                });
                                //给全选按钮绑定事件
                                $container.find('.T-selectAll').click(function(event) {
                                    var checkboxList = $(".T-Accounts").find(".T-checkListNum tr input[type=checkbox]");
                                    if ($(this).is(":checked")) {
                                        checkboxList.each(function(i) {
                                            $(this).prop("checked", true);
                                        });
                                    } else {
                                        checkboxList.each(function(i) {
                                            if (!$(this).prop("disabled")) {
                                                $(this).prop("checked", false);
                                            }
                                        });
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
     * 获取其他账务list列表
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
                        console.log(data);
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
    OtherAccounts.CheckConfirm = function(name) {
            var $checkTabId = $("#tab-" + checkTabId + "-content");
            var $tr = $checkTabId.find(".T-checkListNum tr");
            var JsonStr = [];
            $tr.each(function(i) {
                //取值用于是否修改对账判断
                var $that = $(this),
                    id = $that.data('id');
                var oldRemark = $that.attr("data-entity-checkRemark"); //得到对账结算金额旧的值
                var oldUnPayedMoney = $that.attr("data-entity-settlementMoney"); //得到对账备注旧的值
                var newUnPayedMoney = $tr.eq(i).find("input[name=ClearMoney]").val(); //得到对账结算金额被修改之后值
                var newRemark = $tr.eq(i).find("input[name=checkRemark]").val(); //得到对账备注金额被修改之后值
                var flag = $that.find(".T-insuanceFinancial").is(":checked");
                if (flag) { //勾选
                    if ($(this).attr("data-entity-isConfirmAccount") == 1) { //本来就已对账
                        //取值用于是否修改对账判断
                        // 判断是否修改对账
                        if (oldUnPayedMoney != newUnPayedMoney || oldRemark != newRemark) { //是否有修改
                            OtherAccounts.CheckConfirmData = {
                                id: id,
                                settlementMoney: newUnPayedMoney,
                                checkRemark: newRemark,
                                isConfirmAccount: 1,
                                sortType: 'auto'
                            }
                            JsonStr.push(OtherAccounts.CheckConfirmData)
                        }

                    } else { //新加的对账
                        OtherAccounts.CheckConfirmData = {
                            id: id,
                            settlementMoney: newUnPayedMoney,
                            checkRemark: newRemark,
                            isConfirmAccount: 1,
                            sortType: 'auto'
                        }
                        JsonStr.push(OtherAccounts.CheckConfirmData)
                    }
                } else {
                    if ($(this).attr("data-entity-isConfirmAccount") == 1) { //本来是否已对账
                        OtherAccounts.CheckConfirmData = {
                            id: id,
                            settlementMoney: newUnPayedMoney,
                            checkRemark: newRemark,
                            isConfirmAccount: 0,
                            sortType: 'auto'
                        }
                        JsonStr.push(OtherAccounts.CheckConfirmData)
                    }

                }

            });
            JsonStr = JSON.stringify(JsonStr);
            // 对账保存接口
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
                type: "POST",
                data: {
                    reconciliation: JsonStr
                },
                success: function(data) {}
            })
        }
        //付款
    OtherAccounts.AccountsPayment = function(pageNo, name, startAccountTime, endAccountTime) {
        startAccountTime = OtherAccounts.$searchArea.find("input[name=startTime]").val();
        endAccountTime = OtherAccounts.$searchArea.find("input[name=endTime]").val();
        //重置搜索条件
        OtherAccounts.CheckingData = {
            pageNo: pageNo,
            name: name,
            startAccountTime: startAccountTime,
            endAccountTime: endAccountTime,
            sortType: 'auto'
        }

        $.ajax({
            url: KingServices.build_url("account/arrangeOtherFinancial", "listFinancialOtherDetails"),
            type: "POST",
            data: OtherAccounts.CheckingData,
            success: function(data) {
                console.log(data);
                var result = showDialog(data);
                if (result) {
                    var dataTable = data;
                    // 付款头部的接口
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: OtherAccounts.CheckingData,
                        success: function(data) {
                            dataTable.statistics = data.statistics;
                            var result = showDialog(data);
                            if (result) {
                                var html = AccountsPaymentTemplate(dataTable);
                                Tools.addTab(PaymentTabId, "其他付款", html);
                                var $PaymentTabId = $("#tab-" + PaymentTabId + "-content");
                                $PaymentTabId.find('.T-PaymentListNum').on('click', '.T-action', function(event) {
                                    event.preventDefault();
                                    var $that = $(this),
                                        $tr = $that.closest('tr'),
                                        id = $tr.data('id');
                                    console.log(id);
                                    if ($that.hasClass('T-lookPay')) {
                                        alert("已付金额");
                                        // 查看已付明细
                                        OtherAccounts.ViewAmountPaid(id);
                                    } else if ($that.hasClass('T-insuanceImg')) {
                                        // 查看单据
                                        OtherAccounts.viewInsuranceImg(id);
                                    } else if ($that.hasClass('T-viewhandle')) {
                                        // 查看对账明细
                                        OtherAccounts.viewOrderDetail(id);
                                    }
                                });

                                //时间控件
                                $PaymentTabId.find("input[name=joinTime]").datepicker({
                                    autoclose: true,
                                    todayHighlight: true,
                                    format: 'yyyy-mm-dd',
                                    language: 'zh-CN'
                                });
                                //关闭页面事件
                                $PaymentTabId.find(".T-closeTab").click(function() {
                                    closeTab(PaymentTabId);
                                });
                                // 付款保存
                                $PaymentTabId.find('.T-save').click(function(event) {
                                    OtherAccounts.paysave(name);
                                });
                                //自动下账
                                $PaymentTabId.find(".T-clear-auto").off().on("click", function() {
                                    var sumPayMoney = parseInt($PaymentTabId.find('input[name=sumPayMoney]').val()),
                                        sumPayType =$PaymentTabId.find('select[name=sumPayType]').val(),
                                        sumPayRemark = $PaymentTabId.find('input[name=sumPayRemark]').val(), //备注
                                        names = $PaymentTabId.find(".T-name").text(),
                                        creator = $PaymentTabId.find('input[name=creator]').val();
                                        console.log(name,"项目名称");
                                    var isAutoPay = FinancialService.autoPayJson(name,$PaymentTabId, rule);
                                    if (!isAutoPay) {
                                        return false;
                                    }
                                    var searchParam = {
                                        name : names,
                                        autoPayMoney: sumPayMoney,
                                        startAccountTime: startAccountTime,
                                        endAccountTime: endAccountTime,
                                        info: creator,
                                        payType: sumPayType,
                                    };
                                    searchParam = JSON.stringify(searchParam);
                                    showConfirmMsg($("#confirm-dialog-message"), "是否按当前账期 " + startAccountTime + " 至 " + endAccountTime + " 下账？", function() {
                                        $.ajax({
                                            url: KingServices.build_url("account/arrangeOtherFinancial", "autoPayment"),
                                            type: "POST",
                                            data: {
                                                searchParam: searchParam
                                            },
                                            success: function(data) {
                                                console.log(data)
                                                var result = showDialog(data);
                                                if (result) {
                                                    $PaymentTabId.find(".T-clear-auto").toggle();
                                                    $PaymentTabId.find(".T-cancel-auto").toggle();
                                                    data.clearTempData = data.autoPaymentJson;
                                                    data.clearTempSumDate = {
                                                        sumPayMoney: $PaymentTabId.find('input[name=sumPayMoney]').val(),
                                                        sumPayType: $PaymentTabId.find('select[name=sumPayType]').val(),
                                                        sumPayRemark: $PaymentTabId.find('input[name=sumPayRemark]').val()
                                                    };
                                                    data.restaurantClear(1, 0, id, name);
                                                }
                                            }
                                        });
                                    });
                                });

                            }

                        }
                    })



                }
            }
        })
    };
    // 保存付款 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
    OtherAccounts.paysave = function(name, $PaymentTabId) {
            var $PaymentTabId = $("#tab-" + PaymentTabId + "-content");
            var $tr = $PaymentTabId.find(".T-PaymentListNum tr");
            var JsonStr = [];
            $tr.each(function(i) {
                //取值用于是否修改对账判断
                var $that = $(this),
                    id = $that.data('id');
                var oldRemark = $that.attr("data-entity-checkRemark"); //得到付款付款金额旧的值
                var payMoney = $tr.eq(i).find("input[name=ClearMoney]").val(); //得到付款付款金额被修改之后值
                var newRemark = $tr.eq(i).find("input[name=checkRemark]").val(); //得到付款备注金额被修改之后值、
                var paymentMethod = $tr.find('select option:selected').val();
                if (oldRemark != newRemark) { //是否有修改
                    OtherAccounts.CheckConfirmData = {
                        id: id,
                        payMoney: payMoney,
                        payRemark: newRemark,
                        payType: paymentMethod,
                        isConfirmAccount: 1,
                        sortType: 'auto'
                    }
                    JsonStr.push(OtherAccounts.CheckConfirmData);
                }
            });
            JsonStr = JSON.stringify(JsonStr);
            // 付款保存接口
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
                type: "POST",
                data: {
                    reconciliation: JsonStr
                },
                success: function(data) {
                    var result = showDialog(data);
                    var $tab = $tab = $('#' + tabId);
                    if (result) {
                        // FinancialService.isClearSave($tab,rule);
                    }
                }
            })
        }
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
                console.log(data, "查看已付");
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

    //应付金额明细a-2
    OtherAccounts.viewhandle = function(id) {
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "getReconciliationDetails"),
                type: "POST",
                data: {
                    id: id
                },
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        console.log(data);
                        var html = viewhandleTemplate(data);
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

        }
        //已付金额明细b-1
    OtherAccounts.ViewAmountPaid = function(id) {
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "getPaymentDetails"),
                type: "POST",
                data: {
                    id: id
                },
                success: function(data) {
                    console.log(data, "123");
                    var result = showDialog(data);
                    if (result) {
                        var html = ViewAmountPaidTemplate(data);
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

        }
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

    }
    exports.init = OtherAccounts.initModule;
})
