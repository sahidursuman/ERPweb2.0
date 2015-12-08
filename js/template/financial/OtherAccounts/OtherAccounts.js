define(function(require, exports) {
    var menuKey = "financial_Other_accounts",
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

    OtherAccounts.listFinancialOtherAccounts = function(pageNo, name1, startAccountTime, endAccountTime) {
            if (OtherAccounts.$searchArea && arguments.length === 1) {
                // 初始化页面后，可以获取页面的参数
                name = OtherAccounts.$searchArea.find("select[name=otherId]").val();
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
                        data.startAccountTime = startAccountTime
                        data.endAccountTime = endAccountTime
                        var html = listTemplate(data);
                        Tools.addTab(menuKey, "其他账务", html);
                        OtherAccounts.initList();
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
        OtherAccounts.initList = function(pageNo, name1, startAccountTime, endAccountTime) {
            // 初始化jQuery 对象

            OtherAccounts.$tab = $('#' + tabId);
            OtherAccounts.$searchArea = OtherAccounts.$tab.find('.T-search-area');

            //搜索按钮事件
            OtherAccounts.$tab.find('.T-search').click(function(event) {
                event.preventDefault();
                OtherAccounts.listFinancialOtherAccounts(0);
            });
            // 报表内的操作
            OtherAccounts.$tab.find('.T-other').on('click', '.T-option', function(event) {
                event.preventDefault();
                var $that = $(this)
                if ($that.hasClass('T-checking')) {
                    //对账
                    OtherAccounts.AccountsChecking(0, name, "", "");
                } else if ($that.hasClass('T-payment')) {
                    alert("付款");
                    // 结算
                    OtherAccounts.AccountsPayment(0, name, "", "");
                }
            });
        };

    // 对账
    OtherAccounts.AccountsChecking = function(pageNo, id, name, startAccountTime, endAccountTime) {
            name = OtherAccounts.$searchArea.find("select[name=otherId]").val();
            id = $(".T-list").attr('data-id');
            startAccountTime = OtherAccounts.$searchArea.find("input[name=startTime]").val();
            endAccountTime = OtherAccounts.$searchArea.find("input[name=endTime]").val();

            //重置搜索条件
            OtherAccounts.CheckingData = {
                pageNo: pageNo,
                id: id,
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
                    var result = showDialog(data);
                    if (result) {
                        var dataTable = data;
                        // 对账 
                        $.ajax({
                            url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                            type: "POST",
                            data: OtherAccounts.CheckingData,
                            success: function(data) {
                                // console.log(dataTable);
                                dataTable.statistics = data.statistics;
                                var result = showDialog(data);
                                if (result) {
                                    var html = AccountsCheckingTemplate(dataTable);
                                    Tools.addTab(checkTabId, "其他对账", html);
                                    var $checkTabId = $("#tab-" + checkTabId + "-content");
                                    // 查看已付金额明细
                                    $(".T-Accounts").find('.T-lookDetail').click(function(event) {
                                        event.preventDefault();
                                        OtherAccounts.lookDetail();
                                    });
                                    //应付金额明细
                                    $(".T-Accounts").find('.T-viewhandle').click(function(event) {
                                        event.preventDefault();
                                        OtherAccounts.viewhandle();
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
                                    //对账保存
                                    $container.find(".T-confirm").click(function(id, settlementMoney, checkRemark, isConfirmAccount) {

                                        OtherAccounts.CheckConfirm(id)
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

        },
        // 保存对账 主键 结算金额  对账备注 对账状态[0(未对账)、1(已对账)]
        OtherAccounts.CheckConfirm = function(id) {
            var $checkTabId = $("#tab-" + checkTabId + "-content");
            var $tr = $checkTabId.find(".T-checkListNum tr");
            var JsonStr = [];
            $tr.each(function(i) {
                //取值用于是否修改对账判断
                var oldRemark = $(this).attr("data-entity-remark"); //得到对账结算金额旧的值
                var oldUnPayedMoney = $(this).attr("data-entity-checkRemark"); //得到对账备注旧的值
                var newUnPayedMoney = $tr.eq(i).find("input[name=ClearMoney]").val(); //得到对账结算金额被修改之后值
                var newRemark = $tr.eq(i).find("input[name=checkRemark]").val(); //得到对账备注金额被修改之后值
                var flag = $(this).find(".T-insuanceFinancial").is(":checked");
                if (flag) {
                    if ($(this).attr("data-entity-isConfirmAccount") == 1) {
                        //取值用于是否修改对账判断
                        // 判断是否修改对账
                        if (oldUnPayedMoney != newUnPayedMoney || oldRemark != newRemark) {
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
                    if ($(this).attr("data-entity-isConfirmAccount") == 1) {
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
            // 对账保存接口
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
                type: "POST",
                data:{
                    reconciliation:JsonStr
                },
                success: function(data) {
                    console.log(data);
                }
            })
        }
        //付款
    OtherAccounts.AccountsPayment = function(pageNo, name, startAccountTime, endAccountTime) {
        name = OtherAccounts.$searchArea.find("select[name=otherId]").val();
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
                var result = showDialog(data);
                if (result) {
                    var dataTable = data;
                    // 对账 
                    $.ajax({
                        url: KingServices.build_url("account/arrangeOtherFinancial", "getStatistics"),
                        type: "POST",
                        data: OtherAccounts.CheckingData,
                        success: function(data) {
                            dataTable.statistics = data.statistics;
                            var result = showDialog(data);
                            if (result) {
                                var html = AccountsPaymentTemplate(dataTable);
                                Tools.addTab("-payment", "其他付款", html);

                                var $PaymentTabId = $("#tab-" + PaymentTabId + "-content");
                                // 查看已付金额明细
                                $PaymentTabId.find(".T-lookPay").click(function(event) {
                                    alert();
                                    event.preventDefault();
                                    OtherAccounts.lookDetail();
                                });

                                //应付金额明细
                                $PaymentTabId.find('.T-viewhandle').click(function(event) {
                                    event.preventDefault();
                                    OtherAccounts.viewhandle();
                                });

                                //时间控件
                                var $container = $(".T-AccountsPayment");
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


                            }

                        }
                    })



                }
            }
        })
    }

    // // 查看已付金额a-1
    OtherAccounts.lookDetail = function() {
            // 对账页面
            $.ajax({
                url: KingServices.build_url("account/arrangeOtherFinancial", "saveReconciliation"),
                type: "POST",
                data:{
                    reconciliation:JsonStr
                },
                success: function(data) {
                    console.log(data);
                }
            })
            var html = lookDetailTemplate();
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
        //应付金额明细a-2
    OtherAccounts.viewhandle = function() {
            var html = viewhandleTemplate();
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
        //已付金额明细b-1
    OtherAccounts.ViewAmountPaid = function() {
            var html = ViewAmountPaidTemplate();
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
        //应付金额明细b-2
    OtherAccounts.viewOrderDetail = function() {
        var html = viewOrderDetailTemplate();
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
    exports.init = OtherAccounts.initModule;
})
