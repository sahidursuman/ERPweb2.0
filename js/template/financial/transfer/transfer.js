define(function(require, exports) {
	
    var menuKey = "financial_transfer",
	    listTemplate = require("./view/list"),
	    transferChecking = require("./view/transferChecking"),
	    transferClearing = require("./view/transferClearing"),
	    payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var Transfer = {
    	searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
    	$checkSearchArea: false,
        $clearSearchArea : false,
        partnerList : false,
        clearTempData : false,
        clearTempSumDate : false
    };

    Transfer.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        Transfer.listTransfer(0,"","",dateJson.startDate,dateJson.endDate);
    };

    Transfer.listTransfer = function(page,partnerAgencyId,partnerAgencyName,startDate,endDate){
    	if (Transfer.$searchArea && arguments.length === 1) {
            partnerAgencyName = Transfer.$searchArea.find("input[name=partnerAgencyName]").val(),
            partnerAgencyId = Transfer.$searchArea.find("input[name=partnerAgencyId]").val(),
            startDate = Transfer.$searchArea.find("input[name=startDate]").val(),
            endDate = Transfer.$searchArea.find("input[name=endDate]").val();
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

                    Transfer.initList(startDate,endDate);
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

	Transfer.initList = function(startDate,endDate){
        Transfer.$tab = $('#tab-' + menuKey + "-content");
        Transfer.$searchArea = Transfer.$tab.find('.T-search-area');

        Transfer.getQueryList();
        Tools.setDatePicker(Transfer.$tab.find(".date-picker"),true);

        //搜索按钮事件
        Transfer.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            Transfer.listTransfer(0);
        });

        // 报表内的操作
        Transfer.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                Transfer.transferCheck(0,id,name,"","","",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 付款
                Transfer.clearTempSumDate = false;
                Transfer.clearTempData = false;
                Transfer.transferClear(0,0,id,name,"","","",startDate,endDate);
            }
        });
    };

    //对账
    Transfer.transferCheck = function(page,partnerAgencyId,partnerAgencyName,lineProductName,operateId,operateName,startDate,endDate){
        if (Transfer.$checkSearchArea && arguments.length === 3) {
            lineProductName = Transfer.$checkSearchArea.find("input[name=lineProductName]").val(),
            operateId = Transfer.$checkSearchArea.find("input[name=operateId]").val(),
            operateName = Transfer.$checkSearchArea.find("input[name=operateName]").val(),
            startDate = Transfer.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = Transfer.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        operateName = (operateName == "全部") ? "" : operateName;
        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            partnerAgencyId : partnerAgencyId,
            lineProductName : lineProductName,
            operateId : operateId,
            operateName : operateName,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listTransferAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var ftList = data.financialTransferList;
                    data.partnerAgencyName = partnerAgencyName;
                    var html = transferChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "外转对账", html)) {
                        Transfer.initCheck(page,partnerAgencyId,partnerAgencyName);                      
                    }

                    Transfer.getOperateList(Transfer.$checkTab,data.operateList);
                    //取消对账权限过滤
                    var checkTr = Transfer.$checkTab.find(".T-checkTr");
                    var rightCode = Transfer.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(ftList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: Transfer.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Transfer.transferCheck(obj.curr-1,partnerAgencyId,partnerAgencyName);
                            }
                        }
                    });
                }
            }
        });
    };

    Transfer.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        Transfer.$checkTab = $("#tab-" + menuKey + "-checking-content");
        Transfer.$checkSearchArea = Transfer.$checkTab.find('.T-search-area');

        Transfer.init_event(page,id,name,Transfer.$checkTab,"check");
        Tools.setDatePicker(Transfer.$checkTab.find(".date-picker"),true);
        Transfer.updateUnpayMoney();

        //表单验证
        var validator = new FinRule(0);
            /*settleValidator = new FinRule(4);
            autoValidator = new FinRule(2);*/
        var validatorCheck = validator.check(Transfer.$checkTab);
            /*autoValidatorCheck,
            settleCheck = settleValidator.check($obj);
            if(typeFlag == 2){
                autoValidatorCheck = autoValidator.check($obj.find('.T-count'));
            }*/

        //搜索按钮事件
        Transfer.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Transfer.transferCheck(0,id,name);
        });

        //报表内的操作
        Transfer.listOption(Transfer.$checkTab);

        //复选框事件初始化
        var checkboxList = Transfer.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = Transfer.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //关闭页面事件
        Transfer.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        Transfer.$checkTab.find(".T-saveCheck").click(function(){
            if(!validatorCheck.form()){return;}
            Transfer.saveChecking(id,name,page);
        });
    };

    //付款
    Transfer.transferClear= function(isAutoPay,page,partnerAgencyId,partnerAgencyName,lineProductName,operateId,operateName,startDate,endDate){
        if (Transfer.$clearSearchArea && arguments.length === 4) {
            lineProductName = Transfer.$clearSearchArea.find("input[name=lineProductName]").val(),
            operateId = Transfer.$clearSearchArea.find("input[name=operateId]").val(),
            operateName = Transfer.$clearSearchArea.find("input[name=operateName]").val(),
            startDate = Transfer.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = Transfer.$clearSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        operateName = (operateName == "全部") ? "" : operateName;
        page = page || 0;
        var searchParam = {
            pageNo : page,
            partnerAgencyId : partnerAgencyId,
            lineProductName : lineProductName,
            operateId : operateId,
            operateName : operateName,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto",
            isAutoPay : isAutoPay
        };
        if(isAutoPay == 1){
           searchParam.isAutoPay = isAutoPay;
           searchParam.sumCurrentPayMoney = Transfer.$clearTab.find('input[name=sumPayMoney]').val();
           searchParam.payType = Transfer.$clearTab.find('select[name=sumPayType]').val();
           searchParam.payRemark = Transfer.$clearTab.find('input[name=sumPayRemark]').val();
        }
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listTransferAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.partnerAgencyName = partnerAgencyName;
                    if(isAutoPay == 1){
                        Transfer.clearTempData = data.autoPaymentJson;
                        Transfer.clearTempSumDate = {
                            sumPayMoney : Transfer.$clearTab.find('input[name=sumPayMoney]').val(),
                            sumPayType : Transfer.$clearTab.find('select[name=sumPayType]').val(),
                            sumPayRemark : Transfer.$clearTab.find('input[name=sumPayRemark]').val()
                        };
                    }

                    //暂存数据读取
                    if(Transfer.clearTempSumDate){
                        data.sumPayMoney = Transfer.clearTempSumDate.sumPayMoney;
                        data.sumPayType = Transfer.clearTempSumDate.sumPayType;
                        data.sumPayRemark = Transfer.clearTempSumDate.sumPayRemark;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.financialTransferList;
                    data.financialTransferList = FinancialService.getTempDate(resultList,Transfer.clearTempData);

                    var html = transferClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "外转付款", html)) {
                        Transfer.initClear(page,partnerAgencyId,partnerAgencyName); 
                                       
                    }

                    Transfer.getOperateList(Transfer.$clearTab,data.operateList);

                    if(isAutoPay == 0){
                        Transfer.$clearTab.find(".T-cancel-auto").hide();
                    } else {
                        Transfer.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                        Transfer.$clearTab.find(".T-clear-auto").hide(); 
                        if(isAutoPay == 1){
                            Transfer.$clearTab.data('isEdited',true);
                        } else if(isAutoPay == 2){
                            Transfer.$clearTab.find(".T-cancel-auto").hide();
                        }
                    }

                    //绑定翻页组件
                    var $tr = Transfer.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: Transfer.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(Transfer.$clearTab,Transfer.clearTempData,new FinRule(1));
                                Transfer.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(Transfer.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(Transfer.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = Transfer.$clearTab.find('input[name=sumPayRemark]').val();
                                Transfer.clearTempSumDate = {
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark
                                }
                                Transfer.transferClear(isAutoPay,obj.curr -1,partnerAgencyId,partnerAgencyName);
                            }
                        }
                    });
                }
            }
        });
    };

    Transfer.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        Transfer.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        Transfer.$clearSearchArea = Transfer.$clearTab.find('.T-search-area');

        Transfer.init_event(page,id,name,Transfer.$clearTab,"clear");
        Tools.setDatePicker(Transfer.$clearTab.find(".date-picker"),true);

        //表单验证
        var settleValidator = new FinRule(1),
            autoValidator = new FinRule(2);
        var validatorCheck = settleValidator.check(Transfer.$clearTab),
        autoValidatorCheck = autoValidator.check(Transfer.$clearTab.find('.T-count'));
            

        //搜索事件
        Transfer.$clearTab.find(".T-search").click(function(){
            Transfer.clearTempSumDate = false;
            Transfer.clearTempData = false;
            Transfer.$clearTab.data('isEdited',false);
            Transfer.transferClear(0,0,id,name);
        });

        //关闭页面事件
        Transfer.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存付款事件
        Transfer.$clearTab.find(".T-saveClear").click(function(){
            if(!validatorCheck.form()){return;}
            Transfer.saveClear(id,name,page);
        });

        //报表内的操作
        Transfer.listOption(Transfer.$clearTab);

        //自动下账
        Transfer.$clearTab.find(".T-clear-auto").off().on("click",function(){
            if(!autoValidatorCheck.form()){return;}
            var isAutoPay = FinancialService.autoPayJson(id,Transfer.$clearTab,rule);
            if(!isAutoPay){return false;}
            Transfer.transferClear(1,0,id,name);
        });

        Transfer.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            Transfer.$clearTab.find(".T-cancel-auto").toggle();
            Transfer.$clearTab.find(".T-clear-auto").toggle();
            Transfer.clearTempSumDate = false;
            Transfer.clearTempData = false;
            Transfer.$clearTab.data('isEdited',false);
            Transfer.transferClear(0,0,id,name);
        });

        FinancialService.updateSumPayMoney(Transfer.$clearTab,new FinRule(1));
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
    Transfer.saveChecking = function(partnerAgencyId,partnerAgencyName,page,tab_id, title, html){
        var argumentsLen = arguments.length;

	    if(!Transfer.$checkTab.data('isEdited')){
	        showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
	        return false;
	    }

	    var $list = Transfer.$checkTab.find(".T-checkList"),
	        $tr = $list.find(".T-checkTr"),
	        saveJson = []; 

	    function getValue($obj,name){
		    var result = $obj.find("[name="+name+"]").val();
		    if (result == "") {//所有空字符串变成0
		        result = 0;
		    }
		    return result;
		} 

	    $tr.each(function(){
	        var $this = $(this);
	        if($this.data("change")){//遍历修改行
	            var validator = rule.check($this);
	            if(!validator.form()){ return false; }
	            var isConfirmAccount = "";
	            if ($this.find(".T-checkbox").is(':checked')) {
	                isConfirmAccount = 1;
	            } else {
	                isConfirmAccount = 0; 
	            }
	            //提交修改了对账状态或已对账行数据的行
	            if(($this.data("confirm") != isConfirmAccount) || ($this.data("confirm") == 1)){
	                var checkRecord = {
	                    id : $this.data("id"),
	                    punishMoney : getValue($this,"settlementMoney"),
	                    settlementMoney : $this.find("td[name=settlementMoney]").text(),
	                    unPayedMoney : $this.find("td[name=unPayedMoney]").text(),
	                    checkRemark : $this.find("[name=checkRemark]").val(),
	                    isConfirmAccount : isConfirmAccount
	                };
	                saveJson.push(checkRecord);
	            }
	        }
	    });
	    saveJson = JSON.stringify(saveJson);

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
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            Transfer.listTransfer(Transfer.searchData.pageNo,Transfer.searchData.partnerAgencyId,Transfer.searchData.partnerAgencyName,Transfer.searchData.startDate,Transfer.searchData.endDate);
                        } else if(argumentsLen == 3){
                            Transfer.$checkTab.data('isEdited',false);
                            Transfer.transferCheck(page,partnerAgencyId,partnerAgencyName);
                        } else {
                            Transfer.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Transfer.initCheck(0,Transfer.$checkTab.find(".T-newData").data("id"),Transfer.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    Transfer.saveClear = function(id,name,page,tab_id, title, html){
        if(!FinancialService.isClearSave(Transfer.$clearTab,rule)){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(Transfer.$clearTab,Transfer.clearTempData,rule);
        var searchParam = {
            partnerAgencyId : id,
            sumCurrentPayMoney : Transfer.$clearTab.find('input[name=sumPayMoney]').val(),
        	payType : Transfer.$clearTab.find('select[name=sumPayType]').val(),
            payRemark : Transfer.$clearTab.find('input[name=sumPayRemark]').val()
        };

        clearSaveJson = JSON.stringify(clearSaveJson);
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
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            Transfer.listTransfer(Transfer.searchData.pageNo,Transfer.searchData.partnerAgencyId,Transfer.searchData.partnerAgencyName,Transfer.searchData.startDate,Transfer.searchData.endDate);
                        }else if(argumentsLen === 3){
                            Transfer.$clearTab.data('isEdited',false);
                            Transfer.transferClear(0,page,id,name);
                        } else {
                            Transfer.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Transfer.initClear(0,Transfer.$clearTab.find(".T-newData").data("id"),Transfer.$clearTab.find(".T-newData").data("name"));
                        }
                    }); 
                }
            }
        });
    };

    Transfer.init_event = function(page,id,name,$tab,option) {
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
                    Transfer.initCheck(page,id,name);
                } else if(option == "clear"){
                    Transfer.initClear(page,id,name);
                    Transfer.$clearTab.find(".T-cancel-auto").hide();
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    Transfer.saveChecking(id,name,0,tab_id, title, html);
                } else if(option == "clear"){
                    Transfer.saveClear(id,name,0,tab_id, title, html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    Transfer.saveChecking(id,name);
                } else if(option == "clear"){
                    Transfer.saveClear(id,name);
                }
            });
        }
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
                var text = $that.text(),
                	$next = $that.closest('tr').next();
                if(text == "展开"){
                	$that.text("收起");
                	$next.removeClass('hide');
                } else if (text == "收起"){
                	$that.text("展开");
                	$next.addClass('hide');
                }
            }
        });
    };
    //对账-自动计算未付金额
	Transfer.updateUnpayMoney = function(){
	    Transfer.$checkTab.find('input[name="settlementMoney"]').on('focusin',function() {
	        $(this).data("oldVal",$(this).val());
	    })
	    .on('change',function() {
	        var $this = $(this),
	            $tr = $this.closest('tr'),
	            validator = rule.check($tr);
	        if(!validator.form()){ return false;}
	        var punishMoney = ($this.val() || 0) * 1;

	        //计算结算金额修改前后差值
	        var spread = punishMoney - $this.data("oldVal")*1;

	        // 设置结算、未付金额
            var settlementMoney = $tr.find("td[name=settlementMoney]").text(),
                unPayedMoney = $tr.find("td[name=unPayedMoney]").text(); 
	        $tr.find("td[name=settlementMoney]").text(settlementMoney - spread);
	        $tr.find("td[name=unPayedMoney]").text(unPayedMoney - spread);	        
	        //统计数据更新
	        var $pm = Transfer.$checkTab.find(".T-punishMoney"),
	        	$st = Transfer.$checkTab.find(".T-stMoney"),
	            $unpay = Transfer.$checkTab.find(".T-unpayMoney");
	        $pm.text($pm.text()*1 + spread);
	        $st.text($st.text()*1 - spread);
	        $unpay.text($unpay.text()*1 - spread);
	    });
	};

    Transfer.initPay = function(options){
        Transfer.transferClear(2,0,options.id,options.name,"",options.startDate,options.endDate); 
    };

    exports.init = Transfer.initModule;
    exports.initPay = Transfer.initPay;
});