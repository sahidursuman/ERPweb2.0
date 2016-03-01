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
        $checkSearchArea: false,
        $clearSearchArea : false,
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
  	Insure.listInsure = function(page,insuranceName,insuranceId,startDate,endDate){
  		if (Insure.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            insuranceName = Insure.$searchArea.find("input[name=insuranceName]").val(),
            insuranceId = Insure.$searchArea.find("input[name=insuranceId]").val(),
            startDate = Insure.$searchArea.find("input[name=startDate]").val(),
            endDate = Insure.$searchArea.find("input[name=endDate]").val()
    	}
    	if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        insuranceName = (insuranceName == "全部") ? "" : insuranceName;

  		Insure.searchData={
  			pageNo : page,
  			insuranceName : insuranceName,
  			insuranceId : insuranceId,
  			startDate : startDate,
  			endDate : endDate,
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
	                Insure.initList(startDate,endDate);
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
  	Insure.initList = function(startDate,endDate){
        // 初始化jQuery 对象
        

        Insure.getQueryList();
        Tools.setDatePicker(Insure.$tab.find(".date-picker"),true);

 		//搜索按钮事件
        Insure.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.listInsure(0);
        });
        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');

            if ($that.hasClass('T-check')) {
                // 对账
                Insure.GetChecking(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.showBtnFlag = false;
                Insure.getClearing(0,0,id,name,"",startDate,endDate);
            }
        });
    };

  	// 保险对账
	Insure.GetChecking = function(page,insuranceId,insuranceName,accountInfo,startDate,endDate){
		if (Insure.$checkSearchArea && arguments.length === 3) {
            accountInfo = Insure.$checkSearchArea.find("input[name=accountInfo]").val(),
            startDate = Insure.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = Insure.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            insuranceId : insuranceId,
            accountInfo : accountInfo,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
		$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listInsuranceAccount"),
			type:"POST",
			data:{ searchParam : searchParam },
			success : function(data){
				var result = showDialog(data);
				if(result){
					var fiList = data.financialInsuranceList;
                    data.insuranceName = insuranceName;
					var html = insuranceChecking(data);

					var validator;
                    // 初始化页面
                    if (Tools.addTab(checkTabId,"保险对账",html)) {
                        Insure.initCheck(page,insuranceId,insuranceName); 
                        validator = new FinRule(0).check(Insure.$checkTab.find(".T-checkList"));                     
                    }

                    //取消对账权限过滤
                    var checkTr = Insure.$checkTab.find(".T-checkTr");
                    var rightCode = Insure.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fiList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: Insure.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Insure.GetChecking(obj.curr-1,insuranceId,insuranceName);
                            }
                        }
                    });
				}
			}
		});
	};

	Insure.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        Insure.$checkTab = $("#tab-" + menuKey + "-checking-content");
        Insure.$checkSearchArea = Insure.$checkTab.find('.T-search-area');
        Insure.init_event(page,id,name,Insure.$checkTab,"check");
        Tools.setDatePicker(Insure.$checkTab.find(".date-picker"),true);
        var checkRule = new FinRule(0);
        FinancialService.updateUnpayMoney(Insure.$checkTab,new FinRule(0));

        //搜索按钮事件
        Insure.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.GetChecking(0,id,name);
        });

        //导出报表事件
        Insure.$checkSearchArea.find(".T-btn-export").click(function(){
            var args = {
                insuranceId : id,
                insuranceName: name, 
                accountInfo : Insure.$checkSearchArea.find("input[name=accountInfo]").val(),
                startDate: Insure.$checkSearchArea.find('input[name=startDate]').val(),
                endDate: Insure.$checkSearchArea.find('input[name=endDate]').val()
            };
            FinancialService.exportReport(args,"exportArrangeInsuranceFinancial");
        });

        //报表内的操作
        Insure.listOption(Insure.$checkTab);

        //复选框事件初始化
        var checkboxList = Insure.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = Insure.$checkTab.find(".T-checkAll");
            FinancialService.initCheckBoxs($checkAll,checkboxList);
        var trList = Insure.$checkTab.find(".T-checkTr");
        //关闭页面事件
        Insure.$checkTab.find(".T-close-check").click(function(){
             FinancialService.changeUncheck(trList,function(){
                Tools.closeTab(menuKey + "-checking");
            });
            
        });
        //确认对账按钮事件
        Insure.$checkTab.find(".T-saveCheck").click(function(){
            FinancialService.changeUncheck(trList,function(){
               Insure.saveChecking(id,name,page);
            });
            
         });
    };

  	// 结算
  	Insure.getClearing = function(isAutoPay,page,insuranceId,insuranceName,accountInfo,startDate,endDate){

  		if (Insure.$clearSearchArea && arguments.length === 4) {
            accountInfo = Insure.$clearSearchArea.find("input[name=accountInfo]").val(),
            startDate = Insure.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = Insure.$clearSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        var searchParam = {
            pageNo : page,
            insuranceId : insuranceId,
            accountInfo : accountInfo,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        if(isAutoPay == 1){
           searchParam.isAutoPay = isAutoPay;
           searchParam.sumCurrentPayMoney = Insure.$clearTab.find('input[name=sumPayMoney]').val();
        }
        searchParam = JSON.stringify(searchParam);
  		$.ajax({
	       url:KingServices.build_url("account/insuranceFinancial","listInsuranceAccount"),
			type:"POST",
			data:{ searchParam : searchParam },
			success : function(data){
				var result = showDialog(data);
				if(result){
					data.insuranceName = insuranceName;
                    if(isAutoPay == 1){
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
                    data.isAutoPay = isAutoPay;
					var html = insureClearing(data);
	  				var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "保险付款", html)) {
                        var settleValidator = data.showBtnFlag == true ? new FinRule(3) : new FinRule(1);

                        Insure.initClear(page,insuranceId,insuranceName,settleValidator); 
                        validator = settleValidator.check(Insure.$clearTab.find('.T-clearList'));
                         FinancialService.updateSumPayMoney(Insure.$clearTab,settleValidator);
                       
                    }

                    if(isAutoPay == 0){
                        Insure.$clearTab.find(".T-cancel-auto").hide();
                    } else {
                        Insure.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                        Insure.$clearTab.find(".T-clear-auto").hide(); 
                        if(isAutoPay == 1){
                            Insure.$clearTab.data('isEdited',true);
                            // Insure.$clearTab.find(".T-bankDiv").removeClass('hidden');
                        } else if(isAutoPay == 2){
                            Insure.$clearTab.find(".T-cancel-auto").hide();
                        }
                    }

                    //绑定翻页组件
                    var $tr = Insure.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: Insure.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
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
                                    bankNo : Insure.$clearTab.find('input[name=card-number]').val(),
                                    bankId : Insure.$clearTab.find('input[name=card-id]').val(),
                                    voucher : Insure.$clearTab.find('input[name=credentials-number]').val(),
                                    billTime : Insure.$clearTab.find('input[name=tally-date]').val()
                                }
                                Insure.getClearing(isAutoPay,obj.curr -1,insuranceId,insuranceName);
                            }
                        }
                    });
				}
			}
	  	});	
  	};

  	Insure.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        Insure.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        Insure.$clearSearchArea = Insure.$clearTab.find('.T-search-area');
        Insure.init_event(page,id,name,Insure.$clearTab,"clear");
        Tools.setDatePicker(Insure.$clearTab.find(".date-picker"),true);


        //搜索事件
        Insure.$clearTab.find(".T-search").click(function(){
            var isAutoPay = Insure.$clearTab.find('input[name=isAutoPay]').val();
            Insure.clearTempSumDate = false;
            Insure.clearTempData = false;
            Insure.$clearTab.data('isEdited',false);
            Insure.getClearing(isAutoPay,0,id,name);
        });

        FinancialService.initPayEvent(Insure.$clearTab.find('.T-summary'));
        
        //关闭页面事件
        Insure.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存付款事件
        Insure.$clearTab.find(".T-saveClear").click(function(){
            Insure.saveClear(id,name,page);
        });

        //报表内的操作
        Insure.listOption(Insure.$clearTab);

        var payingCheck = new FinRule(2).check(Insure.$clearTab);

        //自动下账
        Insure.$clearTab.find(".T-clear-auto").off().on("click",function(){
            var isAutoPay = FinancialService.autoPayJson(id,Insure.$clearTab,new FinRule(2));
            if(!isAutoPay){return false;}
            var startDate = Insure.$clearSearchArea.find("input[name=startDate]").val(),
                endDate = Insure.$clearSearchArea.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                Insure.clearTempSumDate = {
                    id : id,
                    sumPayMoney : Insure.$clearTab.find('input[name=sumPayMoney]').val(),
                    sumPayType : Insure.$clearTab.find('select[name=sumPayType]').val(),
                    sumPayRemark : Insure.$clearTab.find('input[name=sumPayRemark]').val(),
                    bankNo : Insure.$clearTab.find('input[name=card-number]').val(),
                    bankId : Insure.$clearTab.find('input[name=card-id]').val(),
                    voucher : Insure.$clearTab.find('input[name=credentials-number]').val(),
                    billTime : Insure.$clearTab.find('input[name=tally-date]').val()
                };
                Insure.getClearing(1,0,id,name);
            });
        });

        Insure.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            Insure.$clearTab.find(".T-cancel-auto").toggle();
            Insure.$clearTab.find(".T-clear-auto").toggle();
            Insure.clearTempSumDate = false;
            Insure.clearTempData = false;
            Insure.$clearTab.data('isEdited',false);
            Insure.getClearing(0,0,id,name);
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

    //已付金额明细
    Insure.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","getPayedMoneyDetail"),
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
    Insure.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","getNeedPayDetail"),
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
    Insure.saveChecking = function(insuranceId,insuranceName,page,tab_id, title, html){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(Insure.$checkTab, new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","saveAccountChecking"),
            type:"POST",
            data:{
                insuranceJson : checkSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            Insure.listInsure(Insure.searchData.pageNo,Insure.searchData.insuranceName,Insure.searchData.insuranceId,Insure.searchData.startDate,Insure.searchData.endDate);
                        } else if(argumentsLen == 3){
                            Insure.$checkTab.data('isEdited',false);
                            Insure.GetChecking(page,insuranceId,insuranceName);
                        } else {
                            Insure.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Insure.initCheck(0,Insure.$checkTab.find(".T-newData").data("id"),Insure.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    Insure.saveClear = function(id,name,page,tab_id, title, html){
        var saveRule = Insure.saveFlag == true ? new FinRule(3):new FinRule(1);
        if(!FinancialService.isClearSave(Insure.$clearTab,saveRule)){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(Insure.$clearTab,Insure.clearTempData,saveRule);
        var searchParam = {
            insuranceId : id,
            sumCurrentPayMoney : Insure.$clearTab.find('input[name=sumPayMoney]').val(),
            payType : Insure.$clearTab.find('select[name=sumPayType]').val(),
            payRemark : Insure.$clearTab.find('input[name=sumPayRemark]').val(),
            bankId : Insure.$clearTab.find('input[name=card-id]').val(),
            voucher : Insure.$clearTab.find('input[name=credentials-number]').val(),
            billTime : Insure.$clearTab.find('input[name=tally-date]').val()
        };
        var isAutoPay = Insure.$clearTab.find('input[name=isAutoPay]').val();
        clearSaveJson = JSON.stringify(clearSaveJson);
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/insuranceFinancial","saveAccountSettlement"),
            type:"POST",
            data:{
                insuranceJson : clearSaveJson,
                searchParam : searchParam
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        Insure.clearTempData = false;
                        Insure.clearTempSumDate = false;
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            Insure.listInsure(Insure.searchData.pageNo,Insure.searchData.insuranceName,Insure.searchData.insuranceId,Insure.searchData.startDate,Insure.searchData.endDate);
                        }else if(argumentsLen === 3){
                            Insure.saveFlag = false;    
                            Insure.$clearTab.data('isEdited',false);
                            Insure.getClearing(isAutoPay == 1 ? 0: isAutoPay,page,id,name);
                        } else {
                            Insure.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Insure.initClear(0,Insure.$clearTab.find(".T-newData").data("id"),Insure.$clearTab.find(".T-newData").data("name"));
                        }
                    });  
                }
            }
        });
    };

	Insure.init_event = function(page,id,name,$tab,option) {
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
                    Insure.initCheck(page,id,name);
                } else if(option == "clear"){
                    Insure.initClear(page,id,name);
                    Insure.$clearTab.find(".T-cancel-auto").hide();
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    Insure.saveChecking(id,name,0,tab_id, title, html);
                } else if(option == "clear"){
                    Insure.saveClear(id,name,0,tab_id, title, html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    Insure.saveChecking(id,name);
                } else if(option == "clear"){
                    Insure.saveClear(id,name);
                }
            });
        }
    };

	Insure.getQueryList = function(){
        var $Insure = Insure.$tab.find(".T-chooseInsure"),
            insureList = Insure.insureList;
        if(insureList != null && insureList.length > 0){
            for(var i=0;i<insureList.length;i++){
            	insureList[i].id = insureList[i].insuranceId;
                insureList[i].value = insureList[i].insuranceName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        insureList.unshift(all);

        //车队
        $Insure.autocomplete({
            minLength: 0,
            source : insureList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="insuranceId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="insuranceId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $Insure.autocomplete('search','');
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
        Insure.getClearing(2,0,options.id,options.name,"",options.startDate,options.endDate); 
    };

    exports.init = Insure.initModule;
    exports.initPay = Insure.initPay;
});
