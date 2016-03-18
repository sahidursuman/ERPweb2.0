define(function(require, exports) {
	var menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImageTempLate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-clearing";

	var  Insure = {
		searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        insureList : false,
        clearTempData : false,
        clearTempSumDate : false,
        showBtnFlag:false,
        saveFlag:false
	};

	Insure.initModule = function() {
		var dateJson = FinancialService.getInitDate();
        Insure.listInsure(0,"","",dateJson.startDate,dateJson.endDate);
   	};
  	Insure.listInsure = function(page,insuranceName,insuranceId,startDate,endDate, accountStatus){
  		if (Insure.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            insuranceName = Insure.$searchArea.find("input[name=insuranceName]").val();
            insuranceId = Insure.$searchArea.find("input[name=insuranceId]").val();
            startDate = Insure.$searchArea.find("input[name=startDate]").val();
            endDate = Insure.$searchArea.find("input[name=endDate]").val();
            accountStatus = Insure.$searchArea.find(".T-finance-status").find('button').data('value');
    	}
        insuranceName = (insuranceName == "全部") ? "" : insuranceName;
  		Insure.searchData={
  			pageNo : page,
  			insuranceName : insuranceName,
  			insuranceId : insuranceId,
  			startDate : startDate,
  			endDate : endDate,
            accountStatus : accountStatus == undefined ? "2" : accountStatus,
  			sortType: 'auto'
  		};
  		var searchParam = JSON.stringify(Insure.searchData);
	  	$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listSumFinancialInsurance"),
			type:"POST",
			data:{ searchParam : searchParam },
	        success: function(data){
	            var result = showDialog(data);
	            if (result) {
	            	Insure.insureList = data.insuranceNameList;
	                var html = listTemplate(data);
	                Tools.addTab(menuKey,"保险账务",html);
                    Insure.$tab = $('#' + tabId);
                    Insure.$searchArea=Insure.$tab.find('.T-search-area');
	                Insure.initList(startDate,endDate, Insure.searchData.accountStatus);
                    //获取合计数据
                    var sumMoneyData = {
                        settlementMoneySum:data.settlementMoneySum,
                        unPayedMoneySum:data.unPayedMoneySum,
                        payedMoneySum:data.payedMoneySum,
                        needPayMoneySum:data.needPayMoneySum
                    };
                    Insure.getSumMoney(sumMoneyData,Insure.$tab);
	                // 绑定翻页组件
                    laypage({
                        cont: Insure.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Insure.listInsure(obj.curr -1);
                            }
                        }
                    });
	            }
        	}
    	});
  	};
    //获取合计金额
    Insure.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
  	Insure.initList = function(startDate,endDate, accountStatus){
        Insure.getQueryList();
        Tools.setDatePicker(Insure.$tab.find(".date-picker"),true);

 		//搜索按钮事件
        Insure.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.listInsure(0);
        });

        //状态框选择事件
        Insure.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Insure.listInsure(0);
        });
        
        var status = Insure.$tab.find(".T-finance-status");
        status.on('click', '.dropdown-menu a', function(event){
            event.preventDefault();
            var $that = $(this);
            status.find('button').data('value', $that.data('value')).find("span").text($that.text());
        });

        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0,
                    insuranceId : $that.closest('tr').data('id'),
                    insuranceName : $that.closest('tr').data('name'),
                    startDate : startDate,
                    endDate : endDate,
                    accountStatus  : accountStatus
                };
            if ($that.hasClass('T-check')) {
                // 对账
                Insure.GetChecking(args);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.showBtnFlag = false;
                args.isAutoPay = 0;
                Insure.getClearing(args);
            }
        });
    };

  	// 保险对账
	Insure.GetChecking = function(args,$tab){
		if (!!$tab) {
            args.insuranceId = $tab.find('.T-insuranceId').val();
            args.insuranceName = $tab.find('.T-insuranceName').val();
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.data('account-status');
        }
        args.page = args.page || 0;
        args.sortType = "auto";
		$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listInsuranceAccount"),
			type:"POST",
			data:{ searchParam : JSON.stringify(args) },
			success : function(data){
				if(showDialog(data)){
					var fiList = data.financialInsuranceList;
                    data.insuranceName = args.insuranceName;
                    data.insuranceId = args.insuranceId;
					var html = insuranceChecking(data);

                    // 初始化页面
                    if (Tools.addTab(checkTabId,"保险对账",html)) {
                        Insure.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        Insure.$checkTab.data('account-status',args.accountStatus);
                        Insure.initCheck(args,Insure.$checkTab); 
                        var validator = new FinRule(0).check(Insure.$checkTab.find(".T-checkList"));                     
                        //取消对账权限过滤
                        var checkTr = Insure.$checkTab.find(".T-checkTr");
                        var rightCode = Insure.$checkTab.find(".T-checkList").data("right");
                        checkDisabled(fiList,checkTr,rightCode);
                    } else {
                        Insure.$checkTab.data('next',args);
                    }
                    //绑定翻页组件
                    laypage({
                        cont: Insure.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Insure.$checkTab.data('isEdited',false);
                                args.pageNo = obj.curr-1;
                                Insure.GetChecking(args);
                            }
                        }
                    });
				}
			}
		});
	};

	Insure.initCheck = function(args,$tab){
        Insure.init_event(args,$tab,"check");
        var checkRule = new FinRule(0);
        FinancialService.updateUnpayMoney($tab,new FinRule(0));

        //搜索按钮事件
        $tab.find('.T-search').off().on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            Insure.GetChecking(args,$tab);
        });

        //导出报表事件
        $tab.find(".T-btn-export").click(function(){
            var argsData = {
                insuranceId : args.insuranceId,
                insuranceName: args.insuranceName, 
                accountInfo : $tab.find("input[name=accountInfo]").val(),
                startDate: $tab.find('input[name=startDate]').val(),
                endDate: $tab.find('input[name=endDate]').val()
            };
            FinancialService.exportReport(argsData,"exportArrangeInsuranceFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"),$tab.find(".T-checkList tr .T-checkbox"));

        //确认对账按钮事件
        $tab.find(".T-saveCheck").click(function(){
            FinancialService.changeUncheck($tab.find(".T-checkTr"),function(){
               Insure.saveChecking($tab,args);
            });
            
        });
    };

  	// 结算
  	Insure.getClearing = function(args,$tab){
        if (!!$tab) {
            args.insuranceId = $tab.find('.T-insuranceId').val();
            args.insuranceName = $tab.find('.T-insuranceName').val();
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.data('account-status');
        }
        args.page = args.page || 0;
        args.sortType = "auto";
        if(args.isAutoPay == 1){
           args.sumCurrentPayMoney = Insure.$clearTab.find('input[name=sumPayMoney]').val();
        }

  		$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listInsuranceAccount"),
			type:"POST",
			data:{ searchParam : JSON.stringify(args) },
			success : function(data){
				if(showDialog(data)){
					data.insuranceName = args.insuranceName;
                    data.insuranceId = args.insuranceId;
                    if(args.isAutoPay == 1){
                        Insure.clearTempData = data.autoPaymentJson;
                    }

                    //暂存数据读取
                    if(Insure.clearTempSumDate){
                        data.sumPayMoney = Insure.clearTempSumDate.sumPayMoney;
                        data.sumPayType = Insure.clearTempSumDate.sumPayType;
                        data.sumPayRemark = Insure.clearTempSumDate.sumPayRemark;
                        data.bankNo = Insure.clearTempSumDate.bankNo;
                        data.bankId = Insure.clearTempSumDate.bankId;
                        data.voucher = Insure.clearTempSumDate.voucher;
                        data.billTime = Insure.clearTempSumDate.billTime;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.financialInsuranceList;
                    data.financialInsuranceList = FinancialService.getTempDate(resultList,Insure.clearTempData);
                    // 财务付款入口调用
                    data.showBtnFlag = Insure.showBtnFlag;
                    Insure.saveFlag = Insure.showBtnFlag == true ? true:false;
                    data.isAutoPay = args.isAutoPay;
					var html = insureClearing(data);
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "保险付款", html)) {
                        Insure.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        Insure.$clearTab.data('account-status',args.accountStatus);
                        var settleValidator = data.showBtnFlag == true ? new FinRule(3) : new FinRule(1);
                        if(Insure.clearTempData){
                            Insure.$clearTab.data('isEdited',true);
                        }
                        Insure.initClear(args,Insure.$clearTab); 
                        var validator = settleValidator.check(Insure.$clearTab.find('.T-clearList'));
                        FinancialService.updateSumPayMoney(Insure.$clearTab,settleValidator);
                    } else {
                        Insure.$clearTab.data('next',args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: Insure.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(Insure.$clearTab,Insure.clearTempData,new FinRule(1));
                                Insure.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(Insure.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(Insure.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = Insure.$clearTab.find('input[name=sumPayRemark]').val();
                                Insure.clearTempSumDate = {
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark,
                                    bankNo : (sumPayType == 0) ? Insure.$clearTab.find('input[name=cash-number]').val() : Insure.$clearTab.find('input[name=card-number]').val(),
                                    bankId : (sumPayType == 0) ? Insure.$clearTab.find('input[name=cash-id]').val() : Insure.$clearTab.find('input[name=card-id]').val(),
                                    voucher : Insure.$clearTab.find('input[name=credentials-number]').val(),
                                    billTime : Insure.$clearTab.find('input[name=tally-date]').val()
                                }
                                Insure.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr -1;
                                Insure.getClearing(args);
                            }
                        }
                    });
				}
			}
	  	});	
  	};

  	Insure.initClear = function(args,$tab){
        Insure.init_event(args,$tab,"clear");

        //搜索事件
        $tab.find(".T-search").click(function(){
            args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
            args.pageNo = 0;
            Insure.getClearing(args,$tab);
        });

        FinancialService.initPayEvent($tab);
        //保存付款事件
        $tab.find(".T-saveClear").click(function(){
            Insure.saveClear($tab,args);
        });

        var payingCheck = new FinRule(2).check(Insure.$clearTab);

        //自动下账
        $tab.find(".T-clear-auto").off().on("click",function(){
            var isAutoPay = FinancialService.autoPayJson(args.insuranceId,$tab,new FinRule(2));
            if(!isAutoPay){return false;}
            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                var payType = $tab.find('select[name=sumPayType]').val();
                Insure.clearTempSumDate = {
                    id : args.insuranceId,
                    sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType : payType,
                    sumPayRemark : $tab.find('input[name=sumPayRemark]').val(),
                    bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher : $tab.find('input[name=credentials-number]').val(),
                    billTime : $tab.find('input[name=tally-date]').val()
                };
                args.isAutoPay = 1;
                Insure.getClearing(args,$tab);
            });
        });

        $tab.find(".T-cancel-auto").off().on("click",function(){
            args.isAutoPay = 0;
            Insure.getClearing(args);
        });        
    };

    //显示单据
    Insure.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
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
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
            } 
        });
    };

    //已付金额明细
    Insure.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","getPayedMoneyDetail"),
            type:"POST",
            data:{ id : id },
            success:function(data){
                if(showDialog(data)){
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
    Insure.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","getNeedPayDetail"),
            type:"POST",
            data:{ id : id },
            success:function(data){
                if(showDialog(data)){
                    var html = needPayDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "应付金额明细",
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

    //对账数据保存
    Insure.saveChecking = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson($tab, new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","saveAccountChecking"),
            type:"POST",
            data:{ insuranceJson : checkSaveJson },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-checking");
                            Insure.listInsure(Insure.searchData.pageNo);
                        } else{
                            Insure.GetChecking(args);
                        }
                    });
                }
            }
        });
    };

    Insure.saveClear = function($tab,args,tabArgs){
        var saveRule = Insure.saveFlag == true ? new FinRule(3):new FinRule(1);
        if(!FinancialService.isClearSave($tab,saveRule)){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab,Insure.clearTempData,saveRule);
        var payType = $tab.find('select[name=sumPayType]').val(),
            searchParam = {
                insuranceId : args ? args.insuranceId : $tab.data('insuranceId'),
                sumCurrentPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                payType : payType,
                payRemark : $tab.find('input[name=sumPayRemark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            };
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","saveAccountSettlement"),
            type:"POST",
            data:{
                insuranceJson : JSON.stringify(clearSaveJson),
                searchParam : JSON.stringify(searchParam)
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        Insure.clearTempData = false;
                        Insure.clearTempSumDate = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            Insure.listInsure(Insure.searchData.pageNo);
                        }else{
                            Insure.saveFlag = false; 
                            args.isAutoPay = (args.isAutoPay == 1) ? 0: args.isAutoPay;
                            Insure.getClearing(args);
                        }
                    });  
                }
            }
        });
    };

	Insure.init_event = function(args,$tab,option) {
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
                Insure.GetChecking($tab.data('next'),$tab);
            } else if(option == "clear"){
                Insure.clearTempData = false;
                Insure.clearTempSumDate = false;
                Insure.getClearing($tab.data('next'),$tab);
            }
    	})
        // 监听保存，并切换tab
        .on('switch.tab.save', function(event, tab_id, title, html) {
            event.preventDefault();
            if(option == "check"){
                Insure.saveChecking($tab,$tab.data('next'),[tab_id, title, html]);
            } else if(option == "clear"){
                Insure.saveClear($tab,$tab.data('next'),[tab_id, title, html]);
            }
        })
        // 保存后关闭
        .on('close.tab.save', function(event) {
            event.preventDefault();
            if(option == "check"){
                Insure.saveChecking($tab);
            } else if(option == "clear"){
                $tab.data('insuranceId',args.insuranceId);
                Insure.saveClear($tab);
            }
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(option == "clear"){
                Insure.clearTempData = false;
                Insure.clearTempSumDate = false;
            }
        });

        Insure.getInsureComList($tab.find('.T-insuranceName'));

        //报表内的操作
        Insure.listOption($tab);
        //关闭按钮
        FinancialService.closeTab(menuKey + "-" + option + "ing");
    };

    Insure.getInsureComList = function($obj) {
        if (!!Insure.insureList) {
            Insure.getQueryList($obj);
        } else {
            $.ajax({
               url:KingServices.build_url("account/insuranceFinancial","listSumFinancialInsurance"),
                type:"POST",
                data:{ searchParam : JSON.stringify({
                    insuranceId: '-1'
                }) },
                showLoading: false,
                success: function(data){
                    if (showDialog(data)) {
                        Insure.insureList = data.insuranceNameList;
                        Insure.getQueryList($obj);
                    }
                }
            });
        }
    };

    /**
     * 绑定保险公司列表
     * @param  {object} $obj 绑定的控件，为空说明是主列表
     * @return {[type]}      [description]
     */
	Insure.getQueryList = function($obj){
        var isMainList = !$obj;

        if (!$obj || $obj.length == 0) {
            $obj = Insure.$tab.find(".T-chooseInsure");
        }

        var list = Insure.insureList
            hasItem = !!list && list.length > 0;

        if (!hasItem) {
            console.info('绑定下拉菜单时，没有列表数据');
            return;
        }

        for(var i=0;i<list.length;i++){
            list[i].id = list[i].insuranceId;
            list[i].value = list[i].insuranceName;
        }

        var all = {
            id : "",
            value : "全部"
        }, $tab = $obj.closest('.tab-pane-menu');
        if (isMainList && list[0].value != '全部')  {
            list.unshift(all);
        } else if (!isMainList && list[0].value === '全部') {
            list.shift(all);
        }
        

        //保险
        $obj.autocomplete({
            minLength: 0,
            source : list,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.nextAll('input[name="insuranceId"]').val('');
                }
            },
            select: function(event,ui) {
                $obj.blur().nextAll('input[name="insuranceId"]').val(ui.item.id);
                if (!isMainList) {
                    $tab.find('input[name="accountInfo"]').val('');
                    $tab.find('.T-insuranceId').val(ui.item.id);
                }
                setTimeout(function() {
                    $tab.find('.T-search').trigger('click');
                }, 0);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    Insure.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-insuranceImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                Insure.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                Insure.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                Insure.needPayDetail(id);
            }
        });
    };

    Insure.initPay = function(options){
        Insure.showBtnFlag = true;
        var args = {
            pageNo : 0,
            insuranceId : options.id,
            insuranceName : options.name,
            startDate : options.startDate,
            endDate : options.endDate,
            accountStatus : options.accountStatus,
            isAutoPay : 2
        }
        Insure.getClearing(args); 
    };

    exports.init = Insure.initModule;
    exports.initPay = Insure.initPay;
});
