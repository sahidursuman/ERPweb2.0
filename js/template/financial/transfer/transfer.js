define(function(require, exports) {
	
    var menuKey = "financial_transfer",
	    listTemplate = require("./view/list"),
	    transferChecking = require("./view/transferChecking"),
	    transferClearing = require("./view/transferClearing"),
	    payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail"),
        viewGroupTemplate = require("./view/viewTouristGroup"),
        addFeeTemplate = require("./view/addFee");

    var Transfer = {
    	searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
        partnerList : false,
        clearTempData : false,
        clearTempSumDate : false
    };

    Transfer.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        Transfer.listTransfer(0,"","",dateJson.startDate,dateJson.endDate,2);
    };

    Transfer.listTransfer = function(page,partnerAgencyId,partnerAgencyName,startDate,endDate,accountStatus){
    	if (Transfer.$searchArea && arguments.length === 1) {
            partnerAgencyName = Transfer.$searchArea.find("input[name=partnerAgencyName]").val(),
            partnerAgencyId = Transfer.$searchArea.find("input[name=partnerAgencyId]").val(),
            startDate = Transfer.$searchArea.find("input[name=startDate]").val(),
            endDate = Transfer.$searchArea.find("input[name=endDate]").val();
            accountStatus = Transfer.$searchArea.find(".T-finance-status").find("button").data("value")
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        partnerAgencyName = (partnerAgencyName == "全部") ? "" : partnerAgencyName;
        // 修正页码
        page = page || 0;
        Transfer.searchData = {
            pageNo : page,
            partnerAgencyName : partnerAgencyName,
            partnerAgencyId : partnerAgencyId,
            startDate : startDate,
            endDate : endDate,
            accountStatus : accountStatus,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(Transfer.searchData);
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listSumTransfer"),
            type:"POST",
            data:{ searchParam : searchParam},
            success:function(data){
                var result = showDialog(data);
                if(result){
                    Transfer.partnerList = data.partnerAgencyNameList;
                	var html = listTemplate(data);
                    Tools.addTab(menuKey,"外转账务",html);
                    Transfer.$tab = $('#tab-' + menuKey + "-content");
                    Transfer.$searchArea = Transfer.$tab.find('.T-search-area');
                    
                    Transfer.initList(startDate,endDate,accountStatus);
                    Transfer.getSumMoney(data.totalStatisticsData[0],Transfer.$tab);
                    // 绑定翻页组件
                    laypage({
                        cont: Transfer.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Transfer.listTransfer(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
	};
    //获取合计金额
    Transfer.getSumMoney = function(data,tabId){
        var totalPerson = data.totalPeople || 0;
        tabId.find('.T-sumCount').text(totalPerson);
        tabId.find('.T-sumTransMoney').text(data.totalNeedPayMoney);
        tabId.find('.T-sumStMoney').text(data.totalSettlementMoney);
        tabId.find('.T-sumPaiedMoney').text(data.totalPayedMoney);
        tabId.find('.T-sumUnPaiedMoney').text(data.totalUnPayedMoney);

    };
	Transfer.initList = function(startDate,endDate,accountStatus){
        Transfer.getQueryList();
        Tools.setDatePicker(Transfer.$tab.find(".date-picker"),true);

        //搜索按钮事件
        Transfer.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            Transfer.listTransfer(0);
        });
        //状态框选择事件
        Transfer.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Transfer.listTransfer(0);
        });
        // 报表内的操作
        Transfer.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0,
                    partnerAgencyId : $that.closest('tr').data('id'),
                    partnerAgencyName : $that.closest('tr').data('name'),
                    startDate : startDate,
                    endDate : endDate,
                    accountStatus : accountStatus
                };
            if ($that.hasClass('T-check')) {
                // 对账
                Transfer.transferCheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 付款
                args.isAutoPay = 0;
                Transfer.transferClear(args);
            }
        });
    };

    //对账
    Transfer.transferCheck = function(args,$tab){
        if($tab) {
            args.pageNo = args.pageNo || 0;
            args.lineProductName = $tab.find("input[name=lineProductName]").val();
            args.operateId = $tab.find("input[name=operateId]").val();
            args.operateName = $tab.find("input[name=operateName]").val();
            args.orderNumber = $tab.find("input[name=orderNumber]").val();
            args.contactInfo = $tab.find("input[name=contactInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.operateName = (args.operateName == "全部") ? "" : args.operateName;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;

        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listTransferAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var ftList = data.financialTransferList;
                    data.partnerAgencyName = args.partnerAgencyName;
                    for(var i = 0; i < data.financialTransferList.length; i++){
                        data.financialTransferList[i].memberList = JSON.stringify(data.financialTransferList[i].memberList);
                    }

                    //费用明细处理
                    var resultList = data.financialTransferList;
                    for(var i = 0; i < resultList.length; i++){
                        var transitLen = (resultList[i].outFeeList.length > 0) ? 1 : 0;
                        resultList[i].rowLen = ((resultList[i].outFeeList.length > 0) ? 1 : 0) + ((resultList[i].otherFeeList.length > 0) ? 1 : 0);
                        resultList[i].rowLen = (resultList[i].rowLen > 0) ? resultList[i].rowLen : 1;
                    }
                    data.financialTransferList = resultList;
                    if(Transfer.checkTemp && Transfer.checkTemp.length > 0){
                        data.financialTransferList = Transfer.getCheckTemp(data.financialTransferList);
                        data.sumPunishMoney = Transfer.checkTemp.sumPunishMoney;
                        data.sumSettlementMoney = Transfer.checkTemp.sumSettlementMoney;
                        data.sumUnPayedMoney = Transfer.checkTemp.sumUnPayedMoney;
                    }                    

                    var html = transferChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "外转对账", html)) {
                        $tab = $("#tab-" + menuKey + "-checking-content");
                        if(Transfer.checkTemp && Transfer.checkTemp.length > 0){
                            $tab.data('isEdited',true);
                        }
                        Transfer.initCheck(args,$tab);
                    } else {
                        Transfer.$checkTab.data("next",args);
                    }

                    Transfer.getOperateList(Transfer.$checkTab,data.operateList);
                    Transfer.getLineProductList(Transfer.$checkTab,data.lineProductList);
                    //取消对账权限过滤
                    var checkTr = Transfer.$checkTab.find(".T-checkTr");
                    var rightCode = Transfer.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(ftList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: Transfer.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var temp = Transfer.saveCheckingJson(Transfer.$checkTab);
                                console.log(temp);
                                if(!temp){
                                    return false;
                                } else {
                                    Transfer.checkTemp = temp;
                                    Transfer.$checkTab.data("isEdited",false);
                                    args.pageNo = obj.curr-1;
                                    Transfer.transferCheck(args);
                                }
                            }
                        }
                    });
                }
            }
        });
    };

    Transfer.initCheck = function(args,$tab){
        $tab = $("#tab-" + menuKey + "-checking-content");
        Transfer.$checkTab = $tab;
        Transfer.init_event(args,$tab,"check");
        Tools.setDatePicker($tab.find(".date-picker"),true);
        FinancialService.updateMoney_checking($tab,3);
        Transfer.getPartnerList($tab,false);

        //表单验证
        var validator = new FinRule(0);
        var validatorCheck = validator.check($tab);

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            Transfer.transferCheck(args,$tab);
        });
        //搜索按钮事件
        $tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            Transfer.transferCheck(args,$tab);
        });

        //费用调整
        Transfer.addFee(args,$tab);

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsDate = { 
                    lineProductId:$tab.find('input[name=lineProductId]').val(),
                    lineProductName:$tab.find('input[name=lineProductName]').val(),
                    operateId:$tab.find('input[name=operateId]').val(),
                    operateName:$tab.find('input[name=operateName]').val(),
                    partnerAgencyId:$tab.find('input[name=partnerAgencyId]').val(),
                    travelAgencyId:"",
                    startDate: $tab.find('input[name=startDate]').val(),
                    endDate: $tab.find('input[name=endDate]').val(),
                    accountStatus : args.accountStatus,
                    orderNumber : $tab.find("input[name=orderNumber]").val(),
                    contactInfo : $tab.find("input[name=contactInfo]").val(),
                    isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
                };
            argsDate.lineProductName = argsDate.lineProductName === "全部" ? "" : argsDate.lineProductName;
            argsDate.operateName = argsDate.operateName === "全部" ? "" : argsDate.operateName;
            FinancialService.exportReport(argsDate,"exportArrangeTransferFinancial");
        });

        //报表内的操作
        Transfer.listOption($tab);
        FinancialService.updateMoney_checking($tab,3);

        //复选框事件初始化
        var checkboxList = $tab.find(".T-checkList tr .T-checkbox"),
            $checkAll = $tab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //关闭页面事件
        FinancialService.closeTab(menuKey + "-checking");
        //确认对账按钮事件
        $tab.find(".T-saveCheck").click(function(){
            if(!validatorCheck.form()){return;}
            FinancialService.changeUncheck($tab.find(".T-checkList tr"), function(){
                Transfer.saveChecking($tab,args);
            },3);
        });
    };

    //付款
    Transfer.transferClear= function(args,$tab){
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.lineProductName = $tab.find("input[name=lineProductName]").val();
            args.operateId = $tab.find("input[name=operateId]").val();
            args.operateName = $tab.find("input[name=operateName]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.orderNumber = $tab.find("input[name=orderNumber]").val();
            args.contactInfo = $tab.find("input[name=contactInfo]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.operateName = (args.operateName == "全部") ? "" : args.operateName;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;

        if(args.autoPay == 1){
            args.isAutoPay = 0;
        }
        if(args.isAutoPay == 1){
           args.sumCurrentPayMoney = Transfer.$clearTab.find('input[name=sumPayMoney]').val();
        }
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listTransferAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.partnerAgencyName = args.partnerAgencyName;
                    if(args.isAutoPay == 1){
                        Transfer.clearTempData = data.autoPaymentJson;
                    }

                    //暂存数据读取
                    if(Transfer.clearTempSumDate){
                        data.sumPayMoney = Transfer.clearTempSumDate.sumPayMoney;
                        data.sumPayType = Transfer.clearTempSumDate.sumPayType;
                        data.sumPayRemark = Transfer.clearTempSumDate.sumPayRemark;
                        data.bankNo = Transfer.clearTempSumDate.bankNo;
                        data.bankId = Transfer.clearTempSumDate.bankId;
                        data.voucher = Transfer.clearTempSumDate.voucher;
                        data.billTime = Transfer.clearTempSumDate.billTime;
                    }
                    var resultList = data.financialTransferList;
                    data.financialTransferList = FinancialService.getTempDate(resultList,Transfer.clearTempData);
                    data.isAutoPay = (args.autoPay == 1) ? 1 : args.isAutoPay;
                    for(var i = 0; i < data.financialTransferList.length; i++){
                        data.financialTransferList[i].memberList = JSON.stringify(data.financialTransferList[i].memberList);
                    }

                    //费用明细处理
                    var resultList = data.financialTransferList;
                    for(var i = 0; i < resultList.length; i++){
                        var transitLen = (resultList[i].outFeeList.length > 0) ? 1 : 0;
                        resultList[i].rowLen = ((resultList[i].outFeeList.length > 0) ? 1 : 0) + ((resultList[i].otherFeeList.length > 0) ? 1 : 0);
                        resultList[i].rowLen = (resultList[i].rowLen > 0) ? resultList[i].rowLen : 1;
                    }
                    data.financialTransferList = resultList;

                    var html = transferClearing(data);
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "外转付款", html)) {
                        if(Transfer.clearTempData){
                            Transfer.$clearTab.data('isEdited',true);
                        }
                        // 初始化jQuery 对象 
                        Transfer.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        Transfer.initClear(args,Transfer.$clearTab); 
                    } else {
                       Transfer.$clearTab.data('next',args);
                    }
                    Transfer.getOperateList(Transfer.$clearTab,data.operateList);
                    Transfer.getLineProductList(Transfer.$clearTab,data.lineProductList);
                    
                    //绑定翻页组件
                    laypage({
                        cont: Transfer.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(Transfer.$clearTab,Transfer.clearTempData,new FinRule(1));
                                if(tempJson){
                                    Transfer.clearTempData = tempJson;
                                    var sumPayMoney = parseFloat(Transfer.$clearTab.find('input[name=sumPayMoney]').val()),
                                        sumPayType = parseFloat(Transfer.$clearTab.find('select[name=sumPayType]').val()),
                                        sumPayRemark = Transfer.$clearTab.find('input[name=sumPayRemark]').val();
                                    Transfer.clearTempSumDate = {
                                        sumPayMoney : sumPayMoney,
                                        sumPayType : sumPayType,
                                        sumPayRemark : sumPayRemark,
                                        bankNo : (sumPayType == 0) ? Transfer.$clearTab.find('input[name=cash-number]').val() : Transfer.$clearTab.find('input[name=card-number]').val(),
                                        bankId : (sumPayType == 0) ? Transfer.$clearTab.find('input[name=cash-id]').val() : Transfer.$clearTab.find('input[name=card-id]').val(),
                                        voucher : Transfer.$clearTab.find('input[name=credentials-number]').val(),
                                        billTime : Transfer.$clearTab.find('input[name=tally-date]').val()
                                    }
                                }
                                Transfer.$clearTab.data("isEdited",false);
                                args.pageNo = obj.curr-1;
                                args.autoPay = (args.autoPay == 1) ? args.autoPay : args.isAutoPay;
                                args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                                Transfer.transferClear(args,Transfer.$clearTab);
                            }
                        }
                    });
                }
            }
        });
    };

    Transfer.initClear = function(args,$tab){
        Transfer.init_event(args,$tab,"clear");
        Tools.setDatePicker($tab.find(".date-picker"),true);
        Transfer.getPartnerList($tab,true);

        //表单验证
        var settleValidator = args.isAutoPay == 2 ? new FinRule(3) : new FinRule(1),
            autoValidator = new FinRule(2);
        var validatorCheck = settleValidator.check($tab),
        autoValidatorCheck = autoValidator.check($tab.find('.T-count'));
            
        FinancialService.initPayEvent($tab);
        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            Transfer.transferClear(args,$tab);
        });
        //搜索事件
        $tab.find(".T-search").click(function(){
            args.pageNo = 0;
            Transfer.transferClear(args,$tab);
        });

        //关闭页面事件
        FinancialService.closeTab(menuKey + "-clearing");

        //保存付款事件
        $tab.find(".T-saveClear").click(function(){
            if(!validatorCheck.form()){return;}
            Transfer.saveClear($tab,args);
        });

        //报表内的操作
        Transfer.listOption($tab);

        //自动下账
        $tab.find(".T-clear-auto").off().on("click",function(){
            if(!autoValidatorCheck.form()){return;}
            var isAutoPay = FinancialService.autoPayJson(args.id,$tab,new FinRule(1));
            if(!isAutoPay){return false;}
            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                var payType = $tab.find('select[name=sumPayType]').val();
                Transfer.clearTempSumDate = {
                    id : args.partnerAgencyId,
                    sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType : payType,
                    sumPayRemark : $tab.find('input[name=sumPayRemark]').val(),
                    bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher : $tab.find('input[name=credentials-number]').val(),
                    billTime : $tab.find('input[name=tally-date]').val()
                };
                args.pageNo = 0;
                args.isAutoPay = 1;
                Transfer.transferClear(args,$tab);
            });
        });

        $tab.find(".T-cancel-auto").off().on("click",function(){
            Transfer.clearTempSumDate = false;
            Transfer.clearTempData = false;
            $tab.data('isEdited',false);
            args.isAutoPay = 0;
            args.autoPay = 0;
            // args.pageNo = 0;
            Transfer.transferClear(args);
        });

        FinancialService.updateSumPayMoney(Transfer.$clearTab,settleValidator);
    };

    //已付金额明细
    Transfer.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","getPayedMoneyDetail"),
            type:"POST",
            data:{
                id : id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = payedDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "已付金额明细",
                        skin : 'layui-layer-rim',
                        area : '1000px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

    //应付金额明细
    Transfer.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","getNeedPayDetail"),
            type:"POST",
            data:{
                id : id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = needPayDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "应付金额明细",
                        skin : 'layui-layer-rim',
                        area : '800px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

    //对账数据保存
    Transfer.saveChecking = function($tab,args,tabArgs){
        var argLen = arguments.length,
            saveJson = Transfer.saveCheckingJson(Transfer.$checkTab,true); 
        if(!saveJson){return false;}

        $.ajax({
            url:KingServices.build_url("account/financialTransfer","saveAccountChecking"),
            type:"POST",
            data:{
                transferJson : saveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        $tab.data('isEdited', false);
                        Transfer.checkTemp = false;
                        if(argLen === 1){
                            Tools.closeTab(menuKey + "-checking");
                            Transfer.listTransfer(Transfer.searchData.pageNo,Transfer.searchData.partnerAgencyId,Transfer.searchData.partnerAgencyName,Transfer.searchData.startDate,Transfer.searchData.endDate);
                        } else {
                            Transfer.transferCheck(args,$tab);
                        }
                    });
                }
            }
        });
    };

    Transfer.saveClear = function($tab,args,tabArgs){
        var isAutoPay = (arguments.length > 1) ? args.isAutoPay : $tab.data("isAutoPay"),
            settleValidator = new FinRule(isAutoPay == 2 ? 3 : 1);
        var argLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab,Transfer.clearTempData,settleValidator,true);
        if(!clearSaveJson){ return false;}
        var payType = Transfer.$clearTab.find('select[name=sumPayType]').val();
        searchParam = {
            partnerAgencyId : (arguments.length > 1) ? args.partnerAgencyId : $tab.data("id"),
            sumCurrentPayMoney : $tab.find('input[name=sumPayMoney]').val(),
        	payType : payType,
            payRemark : $tab.find('input[name=sumPayRemark]').val(),
            bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
            voucher : $tab.find('input[name=credentials-number]').val(),
            billTime : $tab.find('input[name=tally-date]').val()
        };

        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","saveAccountSettlement"),
            type:"POST",
            data:{
                transferJson : clearSaveJson,
                searchParam : searchParam
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        Transfer.clearTempData = false;
                        Transfer.clearTempSumDate = false;
                        $tab.data('isEdited', false);
                        if(argLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            Transfer.listTransfer(Transfer.searchData.pageNo,Transfer.searchData.partnerAgencyId,Transfer.searchData.partnerAgencyName,Transfer.searchData.startDate,Transfer.searchData.endDate);
                        } else {
                            args.isAutoPay = (args.isAutoPay == 2) ? 2 : 0 ;
                            args.autoPay = 0;
                            Transfer.transferClear(args,$tab);
                        }
                    }); 
                }
            }
        });
    };

    Transfer.init_event = function(args,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    Transfer.checkTemp = false;
                    Transfer.transferCheck($tab.data('next'),$tab);
                } else if(option == "clear"){
                    Transfer.clearTempData = false;
                    Transfer.clearTempSumDate = false;
                    args = $tab.data('next');
                    args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                    Transfer.transferClear($tab.data('next'),$tab);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    Transfer.saveChecking($tab,$tab.data('next'),[tab_id, title, html]);
                } else if(option == "clear"){
                    Transfer.saveClear($tab,$tab.data('next'),[tab_id, title, html]);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    Transfer.saveChecking($tab);
                } else if(option == "clear"){
                    $tab.data("isAutoPay",args.isAutoPay);
                    $tab.data("id",args.partnerAgencyId);
                    Transfer.saveClear($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                if(option == "clear"){
                    Transfer.clearTempData = false;
                    Transfer.clearTempSumDate = false;
                } else if(option == "check"){
                    Transfer.checkTemp = false;
                }
            });
        }
    };

    Transfer.getLineProductList = function($tab,lineProductList){
        var $lineProduct = $tab.find("input[name=lineProductName]");
        if(lineProductList != null && lineProductList.length > 0){
            for(var i=0;i<lineProductList.length;i++){
                lineProductList[i].value = lineProductList[i].lineProductName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        lineProductList.unshift(all);

        //餐厅
        $lineProduct.autocomplete({
            minLength: 0,
            source : lineProductList,
            change: function(event,ui) {
               
            },
            select: function(event,ui) {
                $(this).next().val(ui.item.lineProductId);
            }
        }).on("click",function(){

            $lineProduct.autocomplete('search','');
        });      
    };

    Transfer.getQueryList = function(){
        var $partnerAgency = Transfer.$tab.find(".T-choosePartnerAgency"),
            partnerList = Transfer.partnerList;
        if(partnerList != null && partnerList.length > 0){
            for(var i=0;i < partnerList.length;i++){
                partnerList[i].id = partnerList[i].partnerAgencyId;
                partnerList[i].value = partnerList[i].partnerAgencyName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        Transfer.partnerList = partnerList.slice(all);
        partnerList.unshift(all);

        //同行地接
        $partnerAgency.autocomplete({
            minLength: 0,
            source : partnerList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="partnerAgencyId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="partnerAgencyId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $partnerAgency.autocomplete('search','');
        });      
    };

    Transfer.getOperateList = function($tab,operateList){
        var $operate = $tab.find("input[name=operateName]");
        if(operateList != null && operateList.length > 0){
            for(var i=0;i<operateList.length;i++){
                operateList[i].id = operateList[i].operateId;
                operateList[i].value = operateList[i].operateName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        operateList.unshift(all);

        //餐厅
        $operate.autocomplete({
            minLength: 0,
            source : operateList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="operateId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="operateId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $operate.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    Transfer.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-transferImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                Transfer.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                Transfer.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                Transfer.needPayDetail(id);
            } else if ($that.hasClass('T-viewGroup')) {
                // 游客明细
                Transfer.viewGroup($(this));
            }else if($that.hasClass('T-orderNumber')){
                KingServices.viewTurnInfo($that.data("id"));
            }
        });
    };

    //查看小组
    Transfer.viewGroup = function($obj){
        var data = {
            memberList : $obj.data("list")
        };

        if(!data){
            showMessageDialog($("#confirm-dialog-message"),"游客小组不存在，请检查！");
            return false;
        }
        var html = viewGroupTemplate(data);
        layer.open({
            type : 1,
            title :"查看小组",
            skin : 'layui-layer-rim',
            area : "850px", 
            zIndex : 1028,
            content : html,
            scrollbar: false 
        });
    };

    //对账数据组装
    Transfer.saveCheckingJson = function($tab,isSave){
        var rule = new FinRule(0),
            validator = rule.check($tab);
        if(!validator.form()){ return false; }//未通过验证不允许翻页或提交

        if(!$tab.data('isEdited')){
            if(isSave && !Transfer.checkTemp){
                showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
                return false;
            } else {
                // return tempJson;
            }
        }

        var $list = $tab.find(".T-checkList"),
            $tr = $list.find(".T-checkTr"),
            saveJson = Transfer.checkTemp || [],
            len = saveJson.length; 
        $tr.each(function(){
            var $this = $(this);
            if($this.data("change")){//遍历修改行
                validator = rule.check($this);
                if(!validator.form()){ return false; }//未通过验证退出当前行

                var isChecked = "";
                if ($this.find(".T-checkbox").is(':checked')) {
                    isChecked = 1;
                } else {
                    isChecked = 0; 
                }

                //已有数据更新
                for(var i = 0; i < len; i++){
                    var $childTr = $this,
                        detailList = [],
                        end = false;
                    while(!end && $childTr.length > 0){
                        if(saveJson[i].id == $this.data("id")){
                            if($childTr.data('trans')){
                                saveJson[i].outTransferBackMoney = $childTr.find("input[name=settlementMoney]").val();
                                saveJson[i].outTransferSettlementMoney = $childTr.find(".T-settlementMoney").text();
                            } else {
                                saveJson[i].punishMoney = $childTr.find("input[name=settlementMoney]").val();
                                saveJson[i].settlementMoney = $childTr.find(".T-settlementMoney").text();
                            }
                            saveJson[i].unPayedMoney = $this.find(".T-unReceivedMoney").text();
                            saveJson[i].checkRemark = $this.find("[name=checkRemark]").val();
                            return;
                        }
                        $childTr = $childTr.next();
                        if($childTr.hasClass('T-checkTr')){
                            end = true;
                        }
                    }
                }
                //新数据
                if(i >= len){
                    var $childTr = $this,
                        checkRecord = {
                            id : $this.data("id"),
                            unPayedMoney : $this.find(".T-unReceivedMoney").text(),
                            checkRemark : $this.find("[name=checkRemark]").val(),
                            confirm : $this.data("confirm"),//数据的原始对账状态，保存时用于过滤不需提交的数据
                            isChecked : isChecked
                        },
                        end = false;
                    while(!end && $childTr.length > 0){
                        if($childTr.data("change")){
                            if($childTr.data('trans')){
                                checkRecord.trans = true;
                                checkRecord.outTransferBackMoney = $childTr.find("input[name=settlementMoney]").val();
                                checkRecord.outTransferSettlementMoney = $childTr.find(".T-settlementMoney").text();
                            } else {
                                checkRecord.punishMoney = $childTr.find("input[name=settlementMoney]").val();
                                checkRecord.settlementMoney = $childTr.find(".T-settlementMoney").text();
                            }
                        }
                        $childTr = $childTr.next();
                        if($childTr.hasClass('T-checkTr')){
                            end = true;
                        }
                    }
                    saveJson.push(checkRecord);  
                }
            }
        });
        if(isSave){
            if(saveJson.length == 0){
                showMessageDialog($("#confirm-dialog-message"),"没有可提交的数据！");
                return false;
            }
            //保存数据处理,
            for(var i = 0; i < saveJson.length; i++){
                if(saveJson[i].confirm == 0 && saveJson[i].isChecked == 0){
                    saveJson.splice(i,1);//删除不需提交的行
                    i--;
                } else {
                    saveJson[i].isConfirmAccount = saveJson[i].isChecked;
                }
            }
            saveJson = JSON.stringify(saveJson);
        } else {
           saveJson.sumPunishMoney = $tab.find('.T-sumBackMoney').text();
           saveJson.sumSettlementMoney = $tab.find('.T-sumSettlementMoney').text();
           saveJson.sumUnPayedMoney = $tab.find('.T-sumUnReceivedMoney').text();
        }
        return saveJson;
    };

    Transfer.getCheckTemp = function(resultList){
        var tempJson = Transfer.checkTemp;
        if(!!tempJson && tempJson.length){
            for(var i = 0; i < tempJson.length; i++){
                for(var j = 0; j < resultList.length; j++){
                    if(tempJson[i].id == resultList[j].id){
                        resultList[j].change = true;
                        resultList[j].outTransferBackMoney = tempJson[i].outTransferBackMoney;
                        resultList[j].outTransferSettlementMoney = tempJson[i].outTransferSettlementMoney;
                        resultList[j].punishMoney = tempJson[i].punishMoney ? tempJson[i].punishMoney : resultList[j].punishMoney;
                        resultList[j].settlementMoney = tempJson[i].settlementMoney ? tempJson[i].settlementMoney : resultList[j].settlementMoney;
                        resultList[j].checkRemark = tempJson[i].checkRemark;
                        resultList[j].isChecked = tempJson[i].isChecked;
                        break;
                    }
                }
            }
        }
        return resultList;
    }

    Transfer.addFee = function(args, $tab) {
        $tab.find('.T-addFee').on('click', function() {
            var $this = $(this), id = $this.attr('data-id');
            var addFeeLayer = layer.open({
                type: 1,
                title:'费用调整',
                skin: 'layui-layer-rim', //加上边框
                area: ['1000px', '450px'], //宽高
                zIndex:1028,
                content: addFeeTemplate(),
                success: function() {
                    var $content = $('.T-transfer-addFee');

                    var rule = $content.formValidate([
                        {   //明细数量
                            $ele: $content.find('input[name=count]'),
                            rules: [
                                {
                                    type: 'nonnegative-float',
                                    errMsg: '请输入非负数'
                                },
                                {
                                    type: 'null',
                                    errMsg: '数量不能为空'
                                }
                            ]
                        },
                        {   //明细价格
                            $ele: $content.find('input[name=price]'),
                            rules: [
                                {
                                    type: 'float',
                                    errMsg:'请输入数字金额'
                                },
                                {
                                    type: 'null',
                                    errMsg: '单价不能为空'
                                }
                            ]
                        }
                    ]);
                    function getValue($obj, name) {
                        return $obj.find('[name='+name+']').val();
                    }

                    $content.find('.T-addCostTbody, .T-addTransferCostTbody').on('change', '.T-calc', function() {
                        var $this = $(this), $parent = $this.closest('tr');
                        var count = getValue($parent, 'count') || 0,
                            price = getValue($parent, 'price') || 0;
                        $parent.find('.T-payMoney').val(count * price);
                    })
                    $content.find('.T-addCostTbody').on('change', '[name=type],[name=count],[name=price]', function() {
                        var $this = $(this), $parent = $this.closest('tr');
                        var type = getValue($parent, 'type') || 0,
                            count = getValue($parent, 'count') || 0,
                            price = getValue($parent, 'price') || 0;
                        $content.find('.T-addTransferCostTbody').find('[name=type]').val(type);
                        $content.find('.T-addTransferCostTbody').find('[name=count]').val(count).trigger('change');
                        $content.find('.T-addTransferCostTbody').find('[name=price]').val(price).trigger('change');
                    })
                    $content.find('.T-add-Fee-submit').off('click').on('click', function() {
                        if (!rule.form()) {
                            return;
                        }
                        var feeJson = {
                            type: getValue( $content.find('.T-addCostTbody'), 'type'),
                            count: getValue($content.find('.T-addCostTbody'), 'count'),
                            price: getValue($content.find('.T-addCostTbody'), 'price'),
                            remark: getValue($content.find('.T-addCostTbody'), 'remark')
                        },transferJson = {
                            type: getValue($content.find('.T-addTransferCostTbody'), 'type'),
                            count: getValue($content.find('.T-addTransferCostTbody'), 'count'),
                            price: getValue($content.find('.T-addTransferCostTbody'), 'price'),
                            remark: getValue($content.find('.T-addTransferCostTbody'), 'remark')
                        }
                        feeJson = JSON.stringify(feeJson);
                        transferJson = JSON.stringify(transferJson);

                        $.ajax({
                            url: KingServices.build_url('account/financialTransfer','addFee'),
                            type: 'POST',
                            data: {
                                id: id, 
                                touristGroupFeeJson: feeJson,
                                touristGroupTransferFeeJson: transferJson
                            },
                        })
                        .done(function(data) {
                            if (showDialog(data)) {
                                layer.close(addFeeLayer);
                                Transfer.transferCheck(args);
                            }
                        });
                    })
                }
            });
        })
    };

    Transfer.initPay = function(options){
        var args = {
            pageNo : 0,
            partnerAgencyId : options.id,
            partnerAgencyName : options.name,
            startDate : options.startDate,
            endDate : options.endDate,
            accountStatus : options.accountStatus
        }
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listSumTransfer"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args)},
            success:function(data){
                if(showDialog(data)){
                    var partnerList = data.partnerAgencyNameList;
                    if(partnerList != null && partnerList.length > 0){
                        for(var i=0;i < partnerList.length;i++){
                            partnerList[i].id = partnerList[i].partnerAgencyId;
                            partnerList[i].value = partnerList[i].partnerAgencyName;
                        }
                    }
                    Transfer.partnerList = partnerList;
                    args.isAutoPay = 2;
                    Transfer.transferClear(args);
                }
            }
        });
    };

    Transfer.getPartnerList = function($tab,type){
        var $obj = $tab.find('input[name=partnerAgencyName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : Transfer.partnerList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    partnerAgencyId : ui.item.id,
                    partnerAgencyName : ui.item.value,
                    startDate : $tab.find('input[name=startDate]').val(),
                    endDate : $tab.find('input[name=endDate]').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                if(type){
                    args.isAutoPay = ($tab.find(".T-clear-auto").length || $tab.find(".T-cancel-auto").length) ? 0 : 2;
                    Transfer.transferClear(args);
                } else {
                    Transfer.transferCheck(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    exports.init = Transfer.initModule;
    exports.initPay = Transfer.initPay;
});