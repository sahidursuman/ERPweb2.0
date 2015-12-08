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
        clearTempSumDate : false,
        sumData : false
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
                    Self.initList(startDate,endDate);

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
                Self.Getcheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Self.clearTempSumDate = false;
                Self.clearTempData = false;
                Self.GetChecking(0,id,name,"",startDate,endDate);
            }
        });
    };

    Self.Getcheck = function(page,selfPayId,selfPayName,tripInfo,startDate,endDate) {
        if (Self.$checkSearchArea && arguments.length === 3) {
            tripInfo = Self.$checkSearchArea.find("input[name=tripInfo]").val(),
            startDate = Self.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = Self.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listSelfPayFinancialAccount"),
            type: "POST",
            data: {
                pageNo: page,
                selfPayId: selfPayId,
                tripInfo : tripInfo,
                startDate: startDate,
                endDate: endDate,
                sortType: "auto"
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var fsList = data.list;
                    data.sumData = self.getSumData(selfPayId,tripInfo,startDate,endDate);
                    data.selfPayName = selfPayName;
                    var html = SelfChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(checkTabId, "自费对账", html)) {
                        Self.initCheck(page,selfPayId,selfPayName); 
                        validator = rule.check(Self.$checkTab.find(".T-checkList"));                     
                    }
                    //取消对账权限过滤
                    var checkTr = Self.$checkTab.find(".T-checkTr");
                    var rightCode = Self.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fsList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: Self.$checkTab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Self.Getcheck(obj.curr-1,selfId,selfName);
                            }
                        }
                    });
                }

            }
        })
    };

    Self.initCheck = function(page,id,name){
        // 初始化jQuery 对象 
        Self.$checkTab = $("#tab-" + menuKey + "-checking-content");
        Self.$checkSearchArea = Self.$checkTab.find('.T-search-area');

        Self.init_event(page,id,name,Self.$checkTab,"check");
        FinancialService.initDate(Self.$checkTab);
        FinancialService.updateUnpayMoney(Self.$checkTab,rule);

        //搜索按钮事件
        Self.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Self.Getcheck(0,id,name);
        });

        //报表内的操作
        Self.listOption(Self.$checkTab);

        //复选框事件初始化
        var checkboxList = Self.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = Self.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //关闭页面事件
        Self.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        Self.$checkTab.find(".T-saveCheck").click(function(){
            Self.saveChecking(id,name,page);
         });
    };
        // 结算
    Self.GetClear = function(isAutoPay,page,selfPayId,selfPayName,tripInfo,startDate,endDate) {
        if (Self.$clearSearchArea && arguments.length === 4) {
            tripInfo = Self.$clearSearchArea.find("input[name=tripInfo]").val(),
            startDate = Self.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = Self.$clearSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listSelfPayFinancialAccount"),
            type: "POST",
            data: {
                pageNo: page,
                selfPayId: selfPayId,
                tripInfo : tripInfo,
                startDate: startDate,
                endDate: endDate,
                sortType: "auto"
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.restaurantName = restaurantName;
                    data.sumData = self.getSumData(selfPayId,tripInfo,startDate,endDate);

                    //暂存数据读取
                    if(Self.clearTempSumDate){
                        data.sumPayMoney = Self.clearTempSumDate.sumPayMoney;
                        data.sumPayType = Self.clearTempSumDate.sumPayType;
                        data.sumPayRemark = Self.clearTempSumDate.sumPayRemark;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.financialRestaurantList;
                    data.list = FinancialService.getTempDate(resultList,Self.clearTempData);

                    var html = SelfClearing(data);
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(blanceTabId, "自费结算", html)) {
                        Self.initClear(page,selfPayId,selfPayName); 
                        validator = rule.check(Self.$clearTab.find('.T-clearList'));                       
                    }

                    if(isAutoPay == 1){
                        Self.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                        Self.$clearTab.find(".T-clear-auto").hide(); 
                    } else {
                        Self.$clearTab.find(".T-cancel-auto").hide();
                    }

                    //绑定翻页组件
                    var $tr = Self.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: Self.$clearTab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(Self.$clearTab,Self.clearTempData,rule);
                                Self.clearTempData = tempJson;
                                var sumPayMoney = parseInt(Self.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseInt(Self.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = Self.$clearTab.find('input[name=sumPayRemark]').val();
                                Self.clearTempSumDate = {
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark
                                }
                                Self.GetClear(isAutoPay,obj.curr -1,selfId,selfName);
                            }
                        }
                    });
                }
            }
        })
    };

    Self.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        Self.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        Self.$clearSearchArea = Self.$clearTab.find('.T-search-area');

        Self.init_event(page,id,name,Self.$clearTab,"clear");
        FinancialService.initDate(Self.$clearTab);

        //搜索事件
        Self.$clearTab.find(".T-search").click(function(){
            Self.clearTempSumDate = false;
            Self.clearTempData = false;
            Self.GetClear(0,0,id,name);
        });

        //关闭页面事件
        Self.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存付款事件
        Self.$clearTab.find(".T-saveClear").click(function(){
            Self.saveClear(id,name,page);
        });

        //报表内的操作
        Self.listOption(Self.$clearTab);

        //自动下账
        Self.$clearTab.find(".T-clear-auto").off().on("click",function(){
            var isAutoPay = FinancialService.autoPayJson(id,Self.$clearTab,rule);
            if(!isAutoPay){return false;}

            var startDate = Self.$clearTab.find("input[name=startDate]").val(),
                endDate = Self.$clearTab.find("input[name=endDate]").val(),
                tripInfo = Self.$clearTab.find("input[name=tripInfo]").val(),
                sumPayMoney = parseInt(Self.$clearTab.find('input[name=sumPayMoney]').val()),
                sumPayType = parseInt(Self.$clearTab.find('select[name=sumPayType]').val());
            showConfirmMsg($("#confirm-dialog-message"),"是否按当前账期 " + startDate + " 至 " + endDate + " 下账？",function(){
                $.ajax({
                    url:KingServices.build_url("account/arrangeRestaurantFinancial","listRestaurantAccount"),
                    type:"POST",
                    data:{ 
                        selfPayId : id,
                        autoPayMoney : sumPayMoney,
                        payType : sumPayType,
                        tripInfo : tripInfo,
                        accountTimeStart :startDate,
                        accountTimeEnd : endDate
                    },
                    success:function(data){
                        var result = showDialog(data);
                        if(result){
                            showMessageDialog($("#confirm-dialog-message"),"自动下账成功！",function(){
                                Self.$clearTab.find(".T-clear-auto").toggle();
                                Self.$clearTab.find(".T-cancel-auto").toggle();
                                Self.$clearTab.data('isEdited',false);
                                Self.clearTempData = data.autoPaymentJson;
                                Self.clearTempSumDate = {
                                    sumPayMoney : Self.$clearTab.find('input[name=sumPayMoney]').val(),
                                    sumPayType : Self.$clearTab.find('select[name=sumPayType]').val(),
                                    sumPayRemark : Self.$clearTab.find('input[name=sumPayRemark]').val()
                                };
                                Self.GetClear(1,0,id,name);
                            });
                        }
                    }
                });
            });
        });

        Self.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            Self.$clearTab.find(".T-cancel-auto").toggle();
            Self.$clearTab.find(".T-clear-auto").toggle();
            Self.clearTempSumDate = false;
            Self.clearTempData = false;
            Self.GetClear(0,0,id,name);
        });

        FinancialService.updateSumPayMoney(Self.$clearTab,rule);
    };

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

    Self.init_event = function(page,id,name,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                if(option == "check"){
                    Self.initCheck(page,id,name);
                } else if(option == "clear"){
                    Self.initClear(page,id,name);
                }
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    Self.saveChecking(id,name,0,tab_id, title, html);
                } else if(option == "clear"){
                    Self.saveClear(id,name,0,tab_id, title, html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    Self.saveChecking(id,name);
                } else if(option == "clear"){
                    Self.saveClear(id,name);
                }
            });
        }
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

    // 对账、付款报表内的操作
    Self.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-selfImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                Self.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                Self.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                Self.needPayDetail(id);
            }
        });
    };

    self.getSumData = function(id,tripInfo,startDate,endDate){
         $.ajax({
            url: KingServices.build_url("account/selfPayFinancial","collectSelfPayAccount"),
            type: "POST",
            data: {
                selfPayId : id,
                tripInfo : tripInfo,
                startTime : startDate,
                endTime : endDate
            },
            success: function(data) {
                var result = showDialog(data);
                if(result) {
                    console.log(data.statistic);
                    return data.statistic;
                }
            }
        });
    };

    exports.init = Self.initModule;
});
