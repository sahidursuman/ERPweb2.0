define(function(require, exports) {
    var menuKey = "financial_self",
        listTemplate = require("./view/list"),
        billImagesTemplate = require("./view/billImages"),
        SelfChecking = require("./view/SelfChecking"),
        SelfClearing = require("./view/SelfClearing"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail"),
        tabId = "tab-" + menuKey + "-content",
        checkTabId = menuKey + "-checking",
        blanceTabId = menuKey + "-clearing";

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
        showBtnFlag: false
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
        Tools.setDatePicker(Self.$tab.find(".date-picker"),true);

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
                Self.showBtnFlag = false;
                Self.clearTempSumDate = false;
                Self.clearTempData = false;
                Self.GetClear(0,0,id,name,"",startDate,endDate);
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
                startTime: startDate,
                endTime: endDate,
                sortType: "auto"
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.sumData = Self.getSumData(selfPayId,tripInfo,startDate,endDate);
                    var fsList = data.list;
                    data.selfPayName = selfPayName;
                    var html = SelfChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(checkTabId, "自费对账", html)) {
                        Self.initCheck(page,selfPayId,selfPayName); 
                        validator = new FinRule(0).check(Self.$checkTab.find(".T-checkList"));                     
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
        Tools.setDatePicker(Self.$checkTab.find(".date-picker"),true);
        FinancialService.updateUnpayMoney(Self.$checkTab,new FinRule(0));

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
                startTime: startDate,
                endTime: endDate,
                sortType: "auto"
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.sumData = Self.getSumData(selfPayId,tripInfo,startDate,endDate);
                    data.selfPayName = selfPayName;

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
                    var resultList = data.list;
                    data.list = FinancialService.getTempDate(resultList,Self.clearTempData);
                    
                    var html = SelfClearing(data);
                    var validator;
                    data.showBtnFlag = Self.showBtnFlag

                    // 初始化页面
                    if (Tools.addTab(blanceTabId, "自费付款", html)) {
                        var settleValidator = new FinRule(Self.showBtnFlag ? 3 : 1);//data.showBtnFlag == true ? new FinRule(3) : new FinRule(1);
                        Self.initClear(page,selfPayId,selfPayName,settleValidator); 
                        validator = new FinRule(Self.showBtnFlag ? 3 : 1).check(Self.$clearTab.find('.T-clearList'));                       
                    }

                    if(isAutoPay == 0){
                        Self.$clearTab.find(".T-cancel-auto").hide();
                    } else {
                        Self.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                        Self.$clearTab.find(".T-clear-auto").hide(); 
                        if(isAutoPay == 1){
                            Self.$clearTab.data('isEdited',true);
                        } else if(isAutoPay == 2){
                            Self.$clearTab.find(".T-cancel-auto").hide();
                        }
                    }

                    //绑定翻页组件
                    var $tr = Self.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: Self.$clearTab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(Self.$clearTab,Self.clearTempData,new FinRule(Self.showBtnFlag ? 3 : 1));
                                Self.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(Self.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(Self.$clearTab.find('select[name=sumPayType]').val()),
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

    Self.initClear = function(page,id,name,settleValidator){

        // 初始化jQuery 对象 
        Self.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        Self.$clearSearchArea = Self.$clearTab.find('.T-search-area');
        var autoValidator = new FinRule(Self.showBtnFlag ? 3 : 1).check(Self.$clearTab.find('.T-count'));
        Self.init_event(page,id,name,Self.$clearTab,"clear");
        Tools.setDatePicker(Self.$clearTab.find(".date-picker"),true);

        //搜索事件
        Self.$clearTab.find(".T-search").click(function(){
            Self.clearTempSumDate = false;
            Self.clearTempData = false;
            Self.$clearTab.data('isEdited',false);
            Self.GetClear(Self.showBtnFlag ? 2 : 0,0,id,name);
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
            var isAutoPay = FinancialService.autoPayJson(id,Self.$clearTab,new FinRule(2));
            if(!isAutoPay){return false;}

            var startDate = Self.$clearTab.find("input[name=startDate]").val(),
                endDate = Self.$clearTab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                $.ajax({
                    url:KingServices.build_url("account/selfPayFinancial","autoWiredSelfPayAccount"),
                    type:"POST",
                    data:{ 
                        selfPayId : id,
                        autoPayMoney : Self.$clearTab.find('input[name=sumPayMoney]').val(),
                        payType : Self.$clearTab.find('select[name=sumPayType]').val(),
                        payRemark : Self.$clearTab.find('input[name=payRemark]').val(),
                        accountTimeStart :startDate,
                        accountTimeEnd : endDate,
                        tripInfo : Self.$clearTab.find('select[name=tripInfo]').val()
                    },
                    success:function(data){
                        var result = showDialog(data);
                        if(result){
                            Self.$clearTab.find(".T-clear-auto").toggle();
                            Self.$clearTab.find(".T-cancel-auto").toggle();
                            Self.$clearTab.data('isEdited',false);
                            Self.clearTempData = data.autoPayList;
                            Self.clearTempSumDate = {
                                sumPayMoney : Self.$clearTab.find('input[name=sumPayMoney]').val(),
                                sumPayType : Self.$clearTab.find('select[name=sumPayType]').val(),
                                sumPayRemark : Self.$clearTab.find('input[name=sumPayRemark]').val()
                            };
                            Self.GetClear(1,0,id,name);
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
            Self.$clearTab.data('isEdited',false);
            Self.GetClear(0,0,id,name);
        });

        FinancialService.updateSumPayMoney(Self.$clearTab,settleValidator);
    };

    //显示单据
    Self.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
        var data = { "images":[]  };
        var str = $(obj).attr('url');
        var strs = str.split(",");
        for(var i = 0; i < strs.length; i ++) {
            var s = strs[i];
            if(s != null && s != "" && s.length > 0) {
                var image = {
                    "WEB_IMG_URL_BIG":imgUrl+s,
                    "WEB_IMG_URL_SMALL":imgUrl+s+"?imageView2/2/w/150",
                }
                data.images.push(image);
            }
        }
        var html = billImageTempLate(data);
        
        layer.open({
            type : 1,
            title : "单据图片",
            skin : 'layui-layer-rim', // 加上边框
            area : '500px', // 宽高
            zIndex : 1028,
            content : html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success : function() {
                var colorbox_params = {
                    photo : true,
                    rel: 'colorbox',
                    reposition:true,
                    scalePhotos:true,
                    scrolling:false,
                    previous:'<i class="ace-icon fa fa-arrow-left"></i>',
                    next:'<i class="ace-icon fa fa-arrow-right"></i>',
                    close:'&times;',
                    current:'{current} of {total}',
                    maxWidth:'100%',
                    maxHeight:'100%',
                    onOpen:function(){ 
                        $overflow = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                    },
                    onClosed:function(){
                        document.body.style.overflow = $overflow;
                    },
                    onComplete:function(){
                        $.colorbox.resize();
                    }
                };
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
            } 
        });
    };

    //已付明细
    Self.viewPayedDetail = function(selfPayId) {
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "getSelfPayPayedMoneyDetail"),
            type: "POST",
            data: { id : selfPayId },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = payedDetailTempLate(data);
                    var lookDetailLayer = layer.open({
                        type: 1,
                        title: "已付金额明细",
                        skin: 'layui-layer-rim', //加上边框
                        area: '1000px', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false
                    });
                }
            }
        })
    };

    //应付明细
    Self.viewNeedPayDetail = function(selfPayId) {
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "getSelfPayNeedPayDetail"),
            type: "POST",
            data: { id : selfPayId },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = needPayDetailTempLate(data);
                    var lookDetailLayer = layer.open({
                        type: 1,
                        title: "应付金额明细",
                        skin: 'layui-layer-rim', //加上边框
                        area: '1000px', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false
                    });
                }
            }
        })
    };

    //对账数据保存
    Self.saveChecking = function(selfId,selfName,page,tab_id, title, html){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(Self.$checkTab,new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/selfPayFinancial","operateSelfPayAccount"),
            type:"POST",
            data:{
                checkJson : checkSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            Self.listSelf(Self.searchData.pageNo,Self.searchData.selfPayName,Self.searchData.selfPayId,Self.searchData.startDate,Self.searchData.endDate);
                        } else if(argumentsLen == 3){
                            Self.$checkTab.data('isEdited',false);
                            Self.Getcheck(page,selfId,selfName);
                        } else {
                            Self.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Self.initCheck(0,Self.$checkTab.find(".T-newData").data("id"),Self.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    Self.saveClear = function(id,name,page,tab_id, title, html){
        if(!FinancialService.isClearSave(Self.$clearTab,new FinRule(Self.showBtnFlag ? 3 : 1))){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(Self.$clearTab,Self.clearTempData,new FinRule(Self.showBtnFlag ? 3 : 1));

        clearSaveJson = JSON.stringify(clearSaveJson);
        $.ajax({
            url:KingServices.build_url("account/selfPayFinancial","confirmSelfPayPayment"),
            type:"POST",
            data:{
                selfPayPaymentJson : clearSaveJson,
                selfPayId : id,
                payType : Self.$clearTab.find('select[name=sumPayType]').val(),
                payRemark : Self.$clearTab.find('input[name=sumPayRemark]').val()
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        Self.clearTempData = false;
                        Self.clearTempSumDate = false;
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            Self.listSelf(Self.searchData.pageNo,Self.searchData.selfPayName,Self.searchData.selfPayId,Self.searchData.startDate,Self.searchData.endDate);
                        }else if(argumentsLen === 3){
                            Self.$clearTab.data('isEdited',false);
                            var isAuto = Self.showBtnFlag ? 2: 0;
                            Self.GetClear(isAuto,page,id,name);
                        } else {
                            Self.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Self.initClear(0,Self.$clearTab.find(".T-newData").data("id"),Self.$clearTab.find(".T-newData").data("name"));
                        }
                    });
                    
                }
            }
        });
    };

    Self.init_event = function(page,id,name,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = new FinRule(Self.showBtnFlag ? 3 : 1).check($tab);

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
                    Self.$clearTab.find(".T-cancel-auto").hide();
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
            if ($that.hasClass('T-selfPayImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                Self.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                Self.viewPayedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                Self.viewNeedPayDetail(id);
            }
        });
    };

    Self.getSumData = function(id,tripInfo,startDate,endDate){
        var sumData = false;
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial","collectSelfPayAccount"),
            async: false, 
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
                    sumData = data.statistic;
                } else {
                    sumData = {
                        needPayMoney : 0,
                        payedMoney : 0,
                        settlementMoney : 0,
                        unPayedMoney : 0
                    };
                }
            }
        });
        return sumData;
    };

    Self.initPay = function(options){
        Self.showBtnFlag = true;
        Self.GetClear(2,0,options.id,options.name,"",options.startDate,options.endDate); 
    };

    exports.init = Self.initModule;
    exports.initPay = Self.initPay;
});
