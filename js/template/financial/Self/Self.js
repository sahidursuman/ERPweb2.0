define(function(require, exports) {
    var rule = require("./rule"),
        menuKey = "financial_self",
        listTemplate = require("./view/list"),
        billImagesTemplate = require("./view/billImages"),
        SelfChecking = require("./view/SelfChecking"),
        SelfClearing = require("./view/SelfClearing"),
        blanceRecords = require("./view/selfPayRecords"),
        tabId = "tab-" + menuKey + "-content",
        checkTabId = menuKey + "-checking",
        blanceTabId = menuKey + "-blance";

    var Self = {
        searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        selfList : false,
        clearTempData : false,
        clearTempSumDate : false
    };
    Self.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        Self.listSelf(0,"","",dateJson.startDate,dateJson.endDate);
    };
    Self.listSelf = function(page,selfPayName,selfPayId,startDate,endDate) {
        if (Self.$searchArea && arguments.length === 1) {
            selfPayName = Self.$searchArea.find("input[name=selfPayName]").val(),
            selfPayId = Self.$searchArea.find("input[name=selfPayId]").val(),
            startDate = Self.$searchArea.find("input[name=startDate]").val(),
            endDate = Self.$searchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        selfPayName = (selfPayName == "全部") ? "" : selfPayName;

        Self.searchData = {
            pageNo: page,
            selfPayName : selfPayName,
            selfPayId: selfPayId,
            startTime: startDate,
            endTime: endDate,
            sortType: 'auto'
        };
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listFinancialSummaryOfSelfPay"),
            type: "POST",
            data: Self.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "自费账务", html);
                    Self.initList();

                    // 绑定翻页组件
                    laypage({
                        cont: Self.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Self.listSelf(obj.curr -1);
                            }
                        }
                    });
                }
            }
        });
    }
    Self.initList = function(startDate,endDate) {
        // 初始化jQuery 对象
        Self.$tab = $('#' + tabId);
        Self.$searchArea = Self.$tab.find('.T-search-area');

        Self.getQueryList();
        FinancialService.initDate(Self.$tab);

        //搜索按钮事件
        Self.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Self.listSelf(0);
        });

        // 报表内的操作
        Self.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest("tr").data("id"),
                name = $that.closest("tr").data("name");
            if ($that.hasClass('T-check')) {
                // 对账
                Self.Getcheck(0,id,selfPayName,startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Self.GetChecking(0,id,selfPayName,startDate,endDate);
            }
        });
    };

    Self.Getcheck = function(page,selfPayId,busCompanyName,accountInfo,startDate,endDate) {
            Self.CheckData = {
                pageNo: page,
                selfPayId: selfPayId,
                selfPayName: selfPayName,
                year: year,
                month: month,
                sortType: "auto"
            }
            $.ajax({
                url: KingServices.build_url("financial/financialSelfPay", "listFcSelfPay"),
                type: "POST",
                data: Self.CheckData,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        data.yearList = yearList;
                        data.monthList = monthList;
                        data.searchParam = Self.searchData;
                        data.financialSelfPayList = JSON.parse(data.financialSelfPayList);
                        var html = SelfChecking(data);
                        Tools.addTab(checkTabId, "自费对账", html);
                        //给全选按钮绑定事件
                        $(".T-cking").find(".T-checkAll").click(function() {
                            var checkboxList = $(".T-cking").find(".T-checkList tr input[type=checkbox]");
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
                        //关闭页面事件
                        $(".T-cking").find(".T-closeTab").click(function() {
                            closeTab(checkTabId);
                        });
                    }

                }
            })

        }
        // 结算
    Self.GetChecking = function(page, selfPayId, selfPayName, year, startMonth, endMonth) {
        Self.CheckData = {
            pageNo: page,
            selfPayId: selfPayId,
            selfPayName: selfPayName,
            year: year,
            monthStart: startMonth,
            monthEnd: endMonth,
            sortType: "auto"

        }
        $.ajax({
            url: KingServices.build_url("financial/financialSelfPay", "listFcSelfPaySettlement"),
            type: "POST",
            data: Self.CheckData,
            success: function(data) {
                console.log(data);
                var result = showDialog(data);
                if (result) {
                    data.yearList = yearList;
                    data.monthList = monthList;
                    var html = SelfClearing(data);
                    Tools.addTab(blanceTabId, "自费结算", html);
                    $(".T-Clear").find('.T-Records').click(function(id) {
                        alert();
                        Self.lookDetail(37);
                    });
                }

            }
        })
    }
    Self.lookDetail = function(selfPayId) {
        Self.ClearData = {
            selfPayId: selfPayId
        }
        $.ajax({
            url: KingServices.build_url("financial/financialSelfPay", "listFcSelfPaySettlementRecord"),
            type: "POST",
            data: Self.ClearData,
            dataType: "json",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = blanceRecords(data);
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

    Self.getQueryList = function(){
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial","getSelfPayNames"),
            type: "POST",
            data: Self.ClearData,
            dataType: "json",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var $selfPay = Self.$tab.find(".T-chooseSelfPay"),
                        selfPayList = data.selfPayNames;
                    if(selfPayList != null && selfPayList.length > 0){
                        for(var i=0;i<selfPayList.length;i++){
                            selfPayList[i].value = selfPayList[i].name;
                        }
                    }
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    selfPayList.unshift(all);

                    //车队
                    $selfPay.autocomplete({
                        minLength: 0,
                        source : selfPayList,
                        change: function(event,ui) {
                            if (!ui.item)  {
                                $(this).nextAll('input[name="busCompanyId"]').val('');
                            }
                        },
                        select: function(event,ui) {
                            $(this).blur().nextAll('input[name="busCompanyId"]').val(ui.item.id);
                        }
                    }).on("click",function(){
                        $selfPay.autocomplete('search','');
                    });
                }
            }
        });
              
    };

    exports.init = Self.initModule;
});
