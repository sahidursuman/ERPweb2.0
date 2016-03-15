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
        selfList : false,
        clearTempData : false,
        clearTempSumDate : false,
        showBtnFlag: false
    };
    Self.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        Self.listSelf(0,"","",dateJson.startDate,dateJson.endDate,2);
    };
    Self.listSelf = function(page,selfPayName,selfPayId,startDate,endDate,accountStatus) {
        if (Self.$searchArea && arguments.length === 1) {
            selfPayName = Self.$searchArea.find("input[name=selfPayName]").val();
            selfPayId = Self.$searchArea.find("input[name=selfPayId]").val();
            startDate = Self.$searchArea.find("input[name=startDate]").val();
            endDate = Self.$searchArea.find("input[name=endDate]").val();
            accountStatus = Self.$searchArea.find(".T-finance-status").find("button").data("value");
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
            accountStatus : accountStatus,
            sortType: 'auto'
        };
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listFinancialSummaryOfSelfPay"),
            type: "POST",
            data: Self.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.searchParam.accountStatus = Self.searchData.accountStatus;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "自费账务", html);
                    Self.$tab = $('#' + tabId);
                    Self.$searchArea = Self.$tab.find('.T-search-area');
                    Self.initList(startDate,endDate,accountStatus);
                    var sumMoneyData = {
                        settlementMoneySum:data.settlementMoneySum,
                        unPayedMoneySum:data.unPayedMoneySum,
                        payedMoneySum:data.payedMoneySum,
                        needPayMoneySum:data.needPayMoneySum
                    };
                    Self.getSumMoney(sumMoneyData,Self.$tab);
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
    };
    //获取合计金额
    Self.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
    Self.initList = function(startDate,endDate,accountStatus) {
        Self.getQueryList();
        Tools.setDatePicker(Self.$tab.find(".date-picker"),true);

        //搜索按钮事件
        Self.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Self.listSelf(0);
        });

        //状态框选择事件
        Self.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Self.listSelf(0);
        });

        // 报表内的操作
        Self.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0,
                    selfPayId :$that.closest("tr").data("id"),
                    selfPayName : $that.closest("tr").data("name"),
                    startTime : startDate,
                    endTime : endDate,
                    accountStatus : accountStatus
                };
            if ($that.hasClass('T-check')) {
                // 对账
                Self.Getcheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Self.showBtnFlag = false;
                args.isAutoPay = 0;
                Self.GetClear(args);
            }
        });
    };

    Self.Getcheck = function(args,$tab) {
        if (!!$tab) {
            args.tripInfo = $tab.find("input[name=tripInfo]").val();
            args.startTime = $tab.find("input[name=startDate]").val();
            args.endTime = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
        }
        args.pageNo = args.pageNo || 0;
        args.sortType = "auto";
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listSelfPayFinancialAccount"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    data.sumData = Self.getSumData(args);
                    var fsList = data.list;
                    data.selfPayName = args.selfPayName;
                    data.searchParam.accountStatus = args.accountStatus;
                    var html = SelfChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(checkTabId, "自费对账", html)) {
                        Self.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        Self.initCheck(args,Self.$checkTab); 
                        //取消对账权限过滤
                        var checkTr = Self.$checkTab.find(".T-checkTr");
                        var rightCode = Self.$checkTab.find(".T-checkList").data("right");
                        checkDisabled(fsList,checkTr,rightCode);                    
                    } else {
                        Self.$checkTab.data('next',args);
                    }
                    
                    //绑定翻页组件
                    laypage({
                        cont: Self.$checkTab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Self.$checkTab.data('isEdited',false);
                                args.pageNo = obj.curr-1;
                                Self.Getcheck(args);
                            }
                        }
                    });
                }

            }
        })
    };

    Self.initCheck = function(args,$tab){
        Self.init_event(args,$tab,"check");
        FinancialService.updateUnpayMoney($tab,new FinRule(0));

        //搜索按钮事件
        $tab.find('.T-search').off().on('click', function(event) {
            event.preventDefault();
            Self.Getcheck(0,id,name);
        });

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsData = {
                    selfPayId: args.selfPayId, 
                    tripInfo: $tab.find('input[name=tripInfo]').val(),
                    startTime: $tab.find('input[name=startDate]').val(),
                    endTime: $tab.find('input[name=endDate]').val()
                };
            FinancialService.exportReport(argsData,"exportSelfPayFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"),$tab.find(".T-checkList tr .T-checkbox"));

        //确认对账按钮事件
        $tab.find(".T-saveCheck").click(function(){
             FinancialService.changeUncheck($tab.find(".T-checkTr"),function(){
               Self.saveChecking($tab,args);
            });
         });
    };
    // 付款
    Self.GetClear = function(args,$tab) {
        if (!!$tab) {
            args.tripInfo = $tab.find("input[name=tripInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
        }
        args.pageNo = args.pageNo || 0;
        args.sortType = "auto";
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial", "listSelfPayFinancialAccount"),
            type: "POST",
            data: args,
            success: function(data) {
                if (showDialog(data)) {
                    data.sumData = Self.getSumData(args);
                    data.selfPayName = args.selfPayName;

                    //暂存数据读取
                    if(Self.clearTempSumDate){
                        data.sumPayMoney = Self.clearTempSumDate.sumPayMoney;
                        data.sumPayType = Self.clearTempSumDate.sumPayType;
                        data.sumPayRemark = Self.clearTempSumDate.sumPayRemark;
                        data.bankNo = Self.clearTempSumDate.bankNo;
                        data.bankId = Self.clearTempSumDate.bankId;
                        data.voucher = Self.clearTempSumDate.voucher;
                        data.billTime = Self.clearTempSumDate.billTime;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.list;
                    data.list = FinancialService.getTempDate(resultList,Self.clearTempData);
                    data.isAutoPay = args.isAutoPay;
                    data.searchParam.accountStatus = args.accountStatus;
                    var html = SelfClearing(data);
                    // 初始化页面
                    if (Tools.addTab(blanceTabId, "自费付款", html)) {
                        Self.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        Self.initClear(args,Self.$clearTab); 
                        if(Self.clearTempData){
                            Self.$clearTab.data('isEdited',true);
                        }
                    } else {
                        Self.$clearTab.data('next',args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: Self.$clearTab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (args.pageNo + 1),
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
                                    sumPayRemark : sumPayRemark,
                                    bankNo : (sumPayType == 0) ? Self.$clearTab.find('input[name=cash-number]').val() : Self.$clearTab.find('input[name=card-number]').val(),
                                    bankId : (sumPayType == 0) ? Self.$clearTab.find('input[name=cash-id]').val() : Self.$clearTab.find('input[name=card-id]').val(),
                                    voucher : Self.$clearTab.find('input[name=credentials-number]').val(),
                                    billTime : Self.$clearTab.find('input[name=tally-date]').val()
                                }
                                Self.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr -1;
                                Self.GetClear(args);
                            }
                        }
                    });
                }
            }
        })
    };

    Self.initClear = function(args,$tab){
        var settleValidator = args.isAutoPay == 2 ? new FinRule(3):new FinRule(1);
        Self.init_event(args,$tab,"clear");

        //搜索事件
        $tab.find(".T-search").click(function(){
            args.pageNo = 0;
            args.isAutoPay = Self.showBtnFlag ? 2 : 0;
            Self.GetClear(args,$tab);
        });

        FinancialService.initPayEvent($tab);

        //保存付款事件
        $tab.find(".T-saveClear").click(function(){
            Self.saveClear($tab,args);
        });

        var payingCheck = new FinRule(2).check($tab);

        //自动下账
        $tab.find(".T-clear-auto").off().on("click",function(){
            var isAutoPay = FinancialService.autoPayJson(args.selfPayId,$tab,new FinRule(2));
            if(!isAutoPay){return false;}

            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                $.ajax({
                    url:KingServices.build_url("account/selfPayFinancial","autoWiredSelfPayAccount"),
                    type:"POST",
                    data:{ 
                        selfPayId : args.selfPayId,
                        autoPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                        payType : $tab.find('select[name=sumPayType]').val(),
                        payRemark : $tab.find('input[name=sumPayRemark]').val(),
                        accountTimeStart :startDate,
                        accountTimeEnd : endDate,
                        tripInfo : $tab.find('select[name=tripInfo]').val()
                    },
                    success:function(data){
                        if(showDialog(data)){
                            $tab.data('isEdited',false);
                            Self.clearTempData = data.autoPayList;
                            var payType = $tab.find('select[name=sumPayType]').val();
                            Self.clearTempSumDate = {
                                sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                                sumPayType : payType,
                                sumPayRemark : $tab.find('input[name=sumPayRemark]').val(),
                                bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                                voucher : $tab.find('input[name=credentials-number]').val(),
                                billTime : $tab.find('input[name=tally-date]').val()
                            };
                            args.isAutoPay = 1;
                            Self.GetClear(args,$tab);
                        }
                    }
                });
            });
        });

        $tab.find(".T-cancel-auto").off().on("click",function(){
            Self.clearTempSumDate = false;
            Self.clearTempData = false;
            args.isAutoPay = 0;
            Self.GetClear(args,$tab);
        });

        FinancialService.updateSumPayMoney($tab,settleValidator);
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
        var html = billImagesTemplate(data);
        
        layer.open({
            type : 1,
            title : "单据图片",
            skin : 'layui-layer-rim', // 加上边框
            area : '500px', // 宽高
            zIndex : 1028,
            content : html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success : function() {
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
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
                if (showDialog(data)) {
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
                if (showDialog(data)) {
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
    Self.saveChecking = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson($tab,new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/selfPayFinancial","operateSelfPayAccount"),
            type:"POST",
            data:{ checkJson : checkSaveJson },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Self.listSelf(Self.searchData.pageNo);
                        } else if(argumentsLen === 2){
                            Self.Getcheck(args,$tab);
                        } else if(argumentsLen === 3){
                            Tools.addTab(tabArgs[0],tabArgs[1],tabArgs[2]);
                            Self.initCheck(args,$tab);
                        }
                    });
                }
            }
        });
    };

    Self.saveClear = function($tab,args,tabArgs){
        if(!FinancialService.isClearSave($tab,new FinRule(Self.showBtnFlag ? 3 : 1))){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab,Self.clearTempData,new FinRule(Self.showBtnFlag ? 3 : 1)),
            payType = $tab.find('select[name=sumPayType]').val();
        $.ajax({
            url:KingServices.build_url("account/selfPayFinancial","confirmSelfPayPayment"),
            type:"POST",
            data:{
                selfPayPaymentJson : JSON.stringify(clearSaveJson),
                selfPayId : args ? args.selfPayId : $tab.data('selfPayId'),
                payType : payType,
                payRemark : $tab.find('input[name=sumPayRemark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        Self.clearTempData = false;
                        Self.clearTempSumDate = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            Self.listSelf(Self.searchData.pageNo);
                        }else{
                            args.isAutoPay = Self.showBtnFlag ? 2: 0;
                            Self.GetClear(args,$tab);
                        }
                    });
                }
            }
        });
    };

    Self.init_event = function(args,$tab,option) {
        var validator = new FinRule(Self.showBtnFlag ? 3 : 1).check($tab);
        Tools.setDatePicker($tab.find(".date-picker"),true);

        // 监听修改
        $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            if(option == "check"){
                Self.initCheck($tab.data('next'),$tab);
            } else if(option == "clear"){
                Self.clearTempData = false;
                Self.clearTempSumDate = false;
                Self.GetClear($tab.data('next'),$tab);
            }
        })
        // 监听保存，并切换tab
        .on('switch.tab.save', function(event, tab_id, title, html) {
            event.preventDefault();
            if(option == "check"){
                Self.saveChecking($tab,$tab.data('next'),[tab_id, title, html]);
            } else if(option == "clear"){
                Self.saveClear($tab,$tab.data('next'),[tab_id, title, html]);
            }
        })
        // 保存后关闭
        .on('close.tab.save', function(event) {
            event.preventDefault();
            if(option == "check"){
                Self.saveChecking($tab);
            } else if(option == "clear"){
                $tab.data('selfPayId',args.selfPayId);
                Self.saveClear($tab);
            }
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(option == "clear"){
                Self.clearTempData = false;
                Self.clearTempSumDate = false;
            }
        });

        //报表内的操作
        Self.listOption($tab);
        FinancialService.closeTab(menuKey + "-" + option + "ing");
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

    Self.getSumData = function(args){
        var sumData = false;
        $.ajax({
            url: KingServices.build_url("account/selfPayFinancial","collectSelfPayAccount"),
            async: false, 
            type: "POST",
            data: args,
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
        var args = {
            pageNo : 0,
            selfPayId : options.id,
            selfPayName : options.name,
            startTime : options.startDate,
            endTime : options.endDate,
            accountStatus : options.accountStatus,
            isAutoPay : 2
        }
        Self.GetClear(args); 
    };

    exports.init = Self.initModule;
    exports.initPay = Self.initPay;
});
