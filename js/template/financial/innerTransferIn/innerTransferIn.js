define(function(require,exports) {
	var menuKey = "financial_innerTransfer_in",
		rule = require("./innerTransferInRule"),
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferInChecking"),
		settlementTemplate = require("./view/InnerTransferInClearing"),
		recordTemplate = require("./view/innerTransferInRecord"),
		payedDetailTemplate = require('./view/innerTransferIncome'),
		checkDetailTemplate = require('./view/innerTransferInCheckDetail'),
		listTabId = menuKey,
		checkId = menuKey+"-checking",
		settleId= menuKey+"-settlement";
	var InnerTransferIn = {
		$tab : false,
		$checkTab : false,
		$settlementTab:false,
		$searchArea:false,
		$checkSearchArea:false,
		$checkValidator:false,
		$settlermentValidator:false,
		saveJson:false,
		btnSatus:false,
		$settlementSearchArea:false
	};
	InnerTransferIn.initModule = function(){
		var dateJson = FinancialService.getInitDate();
		dateJson.startDate = "2015-11-01";
		InnerTransferIn.listInnerTransfer(0,"","",dateJson.startDate,dateJson.endDate);
	};
	/**
	 * 初始化list页面
	 */
	InnerTransferIn.listInnerTransfer = function(pageNo,fromBusinessGroupId,fromBusinessGroupName,startDate,endDate){
		 if(InnerTransferIn.$searchArea && arguments.length === 1){
		 	var fromBusinessGroupName =InnerTransferIn.$searchArea.find("input[name=businessGroupName]").val();
		 	fromBusinessGroupId = InnerTransferIn.$searchArea.find("input[name=businessGroupId]").val(),
            fromBusinessGroupName = fromBusinessGroupName == "全部"?"":fromBusinessGroupName,
            startDate = InnerTransferIn.$searchArea.find("input[name=startDate]").val(),
            endDate = InnerTransferIn.$searchArea.find("input[name=endDate]").val()
		 };
		pageNo = pageNo || 0;
		if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        };
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncome"),
			data:{
				pageNo:pageNo,
				businessGroupId:fromBusinessGroupId,
				businessGroupName:fromBusinessGroupName,
				startAccountTime:startDate,
				endAccountTime:endDate,
				sortType:'auto'
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
						if(result){
						data.searchParam = {
							businessGroupId:fromBusinessGroupId,
							businessGroupName:fromBusinessGroupName,
							startAccountTime:startDate,
							endAccountTime:endDate
						};
						var html = listTemplate(data);
						Tools.addTab(listTabId,"内转转入",html);
						var $tabId = $("#tab-"+listTabId+"-content");
							InnerTransferIn.$tab = $tabId;
							InnerTransferIn.$searchArea = $tabId.find(".T-search-area");
						//获取搜索框的数据
						InnerTransferIn.getToBusinessGroupName(InnerTransferIn.$searchArea,data.searchParam);
						//页面操作事件
						InnerTransferIn.inieEvent($tabId);
						//绑定翻页组件
						laypage({
						cont:InnerTransferIn.$tab.find(".T-pagenation"),
						pages:data.totalPage,
						curr:(pageNo+1),
						jump:function(obj,first){
							if(!first){
								InnerTransferIn.listInnerTransfer(obj.curr - 1);
							}
						}
					});
				}
			}
		});
	};
	//list页面事件
	InnerTransferIn.inieEvent = function($obj){
		//格式化日期控件
		FinancialService.initDate($obj.find(".T-search-area"));
		//搜索事件
		$obj.find(".T-search").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.listInnerTransfer(0);
		});
		//报表事件
		$obj.find('.T-innerTransferList').on('click','.T-action',function(event){
			event.preventDefault();
			var $tr = $(this).closest('tr'),
				$that = $(this),
				id = $tr.attr("businessGroupId"),
				name = $tr.attr("businessgroupname"),
				startDate = $tr.attr("startDate"),
				endDate = $tr.attr("endDate");
			if($that.hasClass('T-check')){
				//对账处理
				var month = $that.attr("data-entity-month");
				InnerTransferIn.incomeStatus = 0;
				InnerTransferIn.chenking(0,id,name,"","","","",startDate,endDate,1);
			}else if($that.hasClass('T-balance')){
				//结算处理
				InnerTransferIn.btnSatus = 0;
				InnerTransferIn.chenking(0,id,name,"","","","",startDate,endDate,2);
			}
		});
	};
	//获取首页搜索框的数据
	InnerTransferIn.getToBusinessGroupName = function($obj,nameData){
		var $nameObj = $obj.find('input[name=businessGroupName]');
		$nameObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $div = $(this).closest('div');
					$div.find('input[name=toBusinessGroupId]').val('');
				}
			},
			select:function(event,ui){
				var $div = $(this).closest('div');
				$div.find('input[name=toBusinessGroupId]').val(ui.item.id);
			}
		}).off('click').on('click',function(){
			var obj = $(this);
			$.ajax({
				url:KingServices.build_url('account/innerTransferIn','getQueryTerms'),
				type:'POST',
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						console.log(data);
						var businessGroupList = data.businessGroupList;
						var allItem = {
							id:"",
							name:"全部"
						};
						businessGroupList.unshift(allItem);
						for(var i = 0;i<businessGroupList.length;i++){
						businessGroupList[i].value = businessGroupList[i].name;
						}
						obj.autocomplete('option','source', businessGroupList);
						obj.autocomplete('search','');
					}
				}
			});
			
		});
	};
	//对账处理
	InnerTransferIn.chenking = function(pageNo,businessGroupId,businessGroupName,lineProductId,lineProductName,receiveUserId,receiveUserName,startDate,endDate,typeFlag){
		if(InnerTransferIn.$checkSearchArea && arguments.length === 1){
			var $lineProductId = InnerTransferIn.$checkSearchArea.find('input[name=lineProductId]').val();
			var $lineProductName = InnerTransferIn.$checkSearchArea.find('input[name=lineProductName]').val();
			var $receiveUserId = InnerTransferIn.$checkSearchArea.find('input[name=receiveUserId]').val();
			var $receiveUserName = InnerTransferIn.$checkSearchArea.find('input[name=receiveUserName]').val();
			businessGroupId = InnerTransferIn.$checkSearchArea.find('input[name=businessGroupId]').val();
			businessGroupName = InnerTransferIn.$checkSearchArea.find('input[name=businessGroupName]').val();
			lineProductId = $lineProductId;
			lineProductName = $lineProductName == "全部"?"":$lineProductName;
			receiveUserId= $receiveUserId;
			receiveUserName= $receiveUserName == "全部"?"":$receiveUserName;
			startDate = InnerTransferIn.$checkSearchArea.find('input[name=startDate]').val();
			endDate = InnerTransferIn.$checkSearchArea.find('input[name=endDate]').val();
		};
		pageNo = pageNo || 0;
		var $listSearchData = {
				pageNo:pageNo,
				businessGroupId:businessGroupId,
				businessGroupName:businessGroupName,
				lineProductId:lineProductId,
				lineProductName:lineProductName,
				startAccountTime:startDate,
				receiveUserId:receiveUserId,
				receiveUserName:receiveUserName,
				endAccountTime:endDate
			};
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncomeDetails"),
			data:$listSearchData,
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
               
				    data.searchParam = $listSearchData;
				    var title,
				    	tabId,
				    	html,
				    	tempLate;
				    if(typeFlag == 2 || InnerTransferIn.btnSatus == 1 || InnerTransferIn.incomeStatus == 1){
				    	tabId = settleId;
				    	title = "内转转入收款";
				    	console.log(data);
				    	if(InnerTransferIn.saveJson.autoPayList){
				    		var saveJson = InnerTransferIn.saveJson.autoPayList
				    		for(var i=0;i<saveJson.length;i++){
				    			for(var j=0;j<saveJson.length;j++){
				    				if(data.innerTransferIncomeDetailsList[i].id == saveJson[j].id){
				    					data.innerTransferIncomeDetailsList[i].payMoney = saveJson[j].payMoney
				    				}
				    			}
				    		}
				    	}
				    	//data.innerTransferIncomeDetailsList = FinancialService.getTempDate(data.innerTransferIncomeDetailsList,InnerTransferIn.saveJson);
				    	console.log(InnerTransferIn.saveJson);
				    	console.log(data.innerTransferIncomeDetailsList);
				    	html = settlementTemplate(data);
				    }else{
				    	tabId = checkId;
				    	title = "内转转入对账";
				    	html = checkTemplate(data);
				    };
				    if(Tools.addTab(tabId,title,html)){
						var $checkId = $("#tab-"+tabId+"-content");
						InnerTransferIn.$checkId = $checkId;
						InnerTransferIn.$checkSearchArea = $checkId.find(".T-search");
						InnerTransferIn.$checkValidator = rule.check($checkId);
						var countObj = $checkId.find(".T-count");
						//获取统计数据
						InnerTransferIn.getCountData($listSearchData,countObj);
						//
						InnerTransferIn.getReceiveUser(InnerTransferIn.$checkSearchArea);
					    // 绑定翻页组件
						laypage({
						    cont: $checkId.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {
						    	if(typeFlag == 2){
						    		var tempJson = FinancialService.clearSaveJson($checkId,InnerTransferIn.saveJson,rule);
	                                InnerTransferIn.saveJson = tempJson;
	                                var sumPayMoney = parseFloat($obj.find('input[name=sumPayMoney]').val()),
	                                    sumPayType = parseFloat($obj.find('select[name=sumPayType]').val()),
	                                    sumPayRemark = $obj.find('input[name=sumRemark]').val();
	                                InnerTransferIn.saveJson = {
	                                    sumPayMoney : sumPayMoney,
	                                    sumPayType : sumPayType,
	                                    sumPayRemark : sumPayRemark
	                                }
						    	}  // 避免死循环，第一次进入，不调用页面方法
						    		InnerTransferIn.chenking(obj.curr -1);
								}
						    }
						});
						//页面事件
						InnerTransferIn.chenkingEvent($checkId,$listSearchData,typeFlag);
					}
				    
				}
			}
		});
	};
	//获取统计数据
	InnerTransferIn.getCountData = function($data,$searchObj){
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","getStatistics"),
			data:$data,
			type:'POST',
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					$searchObj.find('.sumTransCount').text(data.totalCount);
					$searchObj.find('.sumTransNeedPayMoney').text(data.transInMoney);
					$searchObj.find('.sumPayedMoney').text(data.getedMoney);
					$searchObj.find('.sumPunishMoney').text(data.backMoney);
					$searchObj.find('.sumSettlementMoney').text(data.settlementMoney);
					$searchObj.find('.sumUnPayedMoney').text(data.unIncomeMoney);
				}
			}
		});
	};
	//对账页面事件
	InnerTransferIn.chenkingEvent = function($obj,$listSearchData,typeFlag){
		var $list = typeFlag == 2?"T-clearList":"T-checkList";
		var $checkList = $obj.find('.'+$list);
		//监听已对账的数据是否被修改
		if(typeFlag == 2){
			$obj.find('.'+$list).off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				FinancialService.updateSumPayMoney($obj,rule);
			});
		}
		//切换tab事件
		InnerTransferIn.init_CRU_event($obj,$listSearchData,typeFlag)
		//搜索事件
		$obj.find(".T-checking-search").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.chenking(0);
		});
		if(InnerTransferIn.btnSatus == 1){
			$obj.find('input[name=sumPayMoney]').val(InnerTransferIn.saveJson.autoPayMoney);
			InnerTransferIn.setAutoFillEdit($obj,true);
		}
		//格式化日期控件
		FinancialService.initDate(InnerTransferIn.$checkSearchArea);
		//导出报表事件
		$obj.find(".T-transferExport").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.exportData($obj)
		});
		//全选事件
		var $checkAll = $obj.find(".T-selectAll");
		var $checkBoxList = $checkList.find('.innerTransferFinancial');
		FinancialService.initCheckBoxs($checkAll,$checkBoxList);
		//展开事件
		$obj.find('.'+$list).on('click','.T-seeGroup',function(event){
			event.preventDefault();
	    	var tr = $(this).closest('tr').next();
	    	if($(this).text()=="展开"){
	    		$(this).text("收起");
	    	}else{$(this).text("展开");}
	     	if(tr.hasClass("hide")){
				$(this).find("i").removeClass("fa-chevron-up");
				$(this).find("i").addClass("fa-chevron-down");
				tr.removeClass("hide");
			}
			else{
				$(this).find("i").removeClass("fa-chevron-down");
				$(this).find("i").addClass("fa-chevron-up");
				tr.addClass("hide");
			}
        });
         //查看对账明细
        $obj.find('.'+$list).on('click','.T-check-Detail',function(){
        	var id = $(this).closest('tr').attr('data-entity-id');
        	InnerTransferIn.viewAccountDetail(id);
        });
        //查看付款明细事件
        $obj.find('.'+$list).on('click',".T-viewDetail",function(){
        	var id = $(this).closest('tr').attr('data-entity-id');
        	InnerTransferIn.viewPayedDetail(id);
        });
        //计算实际未收		
		$obj.find("input[name=UnIncomeMoney]").keyup(function  () {
			var unIncome = $(this).val();
			var backMoney = $(this).parent().next().find("input[name=backMoney]").val();
			var realUnIncome = unIncome - backMoney;
			$(this).parent().next().next().find("input[name=realUnIncomeMoney]").val(realUnIncome)
		});
		$obj.find("input[name=backMoney]").keyup(function(){
			var unIncome = $(this).parent().prev().find("input[name=UnIncomeMoney]").val();
			var backMoney = $(this).val();
			var realUnIncome = unIncome - backMoney;
			$(this).parent().next().find("input[name=realUnIncomeMoney]").val(realUnIncome);
		});
        //确认对账事件
        $obj.find(".T-checking").on('click',function(event){
        	event.preventDefault();
        	InnerTransferIn.saveCheckingData(0,$obj,"")
        });
        //自动下账事件
        $obj.find('.T-btn-autofill').off('click').on('click',function(){
        	var $that = $(this);
        	if($that.hasClass('btn-primary')){
        		//自动下账函数
        		InnerTransferIn.autoAcountMoney($obj,$listSearchData,typeFlag);
        	}else{
        		InnerTransferIn.setAutoFillEdit($obj,false)
        	}
        });
        //确认付款
        $obj.find('.T-incomeMoney').off('click').on('click',function(){
        	InnerTransferIn.saveBlanceData(0,$obj,$listSearchData);
        });
        //关闭事件
        $obj.find(".T-close").on('click',function(event){
        	event.preventDefault();
        	showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
        		var tabId = typeFlag == 2?settleId:checkId;
        		Tools.closeTab(tabId);
        	});
        	
        });
	};
	//导出事件
	InnerTransferIn.exportData = function($obj){
		var year=$obj.find("select[name=year]").val(),
			fromBusinessGroupId = $obj.find("input[name=fromBusinessGroupId]").val(),
			fromBusinessGroupName = $obj.find("input[name=fromBusinessGroupName]").val(),
	      	month=$obj.find("select[name=month]").val();
      	checkLogin(function(){
        	var url = KingServices.build_url("export","exportInnerTransferIn");
        	    url += "&fromBusinessGroupId="+fromBusinessGroupId+"&fromBusinessGroupName="+fromBusinessGroupName+"&year="+year+"&month="+month+"&sortType=auto";
        	exportXLS(url)
        });
	};
	//自动下账
	InnerTransferIn.autoAcountMoney = function($obj,$data){
		var payType = $obj.find('select[name=sumPayType]').val();
		console.log(payType);
		var args = {
			lineProductId:$obj.find('input[name=lineProductId]').val(),
			lineProductName:$obj.find('input[name=lineProductName]').val(),
			businessGroupId:$obj.find('input[name=businessGroupId]').val(),
			startAccountTime:$obj.find('input[name=startDate]').val(),
			endAccountTime:$obj.find('input[name=endDate]').val(),
			autoPayMoney:$obj.find('input[name=sumPayMoney]').val(),
			receiveUserId:$obj.find('input[name=receiveUserId]').val(),
			receiveUserName:$obj.find('input[name=receiveUserName]').val(),
			payType:$obj.find('select[name=sumPayType]').val(),
			sumRemark:$obj.find('select[name=sumRemark]').val(),
		};
		$.ajax({
			url:KingServices.build_url('account/innerTransferIn','automaticDown'),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						InnerTransferIn.saveJson = data
						console.log(InnerTransferIn.saveJson);
						InnerTransferIn.btnSatus = 1;
						InnerTransferIn.chenking(0,$data.businessGroupId,$data.businessGroupName,$data.lineProductId,$data.lineProductName,$data.receiveUserId,$data.receiveUserName,$data.startDate,$data.endDate,2);
					});
				}
			}
		});
	};
	//设置按钮样式
	InnerTransferIn.setAutoFillEdit = function($tab, disable){
		var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
		if (!disable) {
			$sum.val(0);
		}
		$tab.find('.T-btn-autofill').html(disable?'<i class="ace-icon fa fa-times"></i> 取消下账': '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');
	};
	//确认对账
	InnerTransferIn.saveCheckingData = function(pageNo,$obj,$data,tab_id, title, html){
    	var JsonStr = [],
            selectFlag = 0,
            argumentsLen = arguments.length,
            checkList = $obj.find('.T-checkList'),
			$tr = checkList.find('.innerTransferFinancial');
		$tr.each(function(i){
 		   var flag = $(this).is(":checked");
 		   var tr = $(this).closest('tr');
		   if(flag){
		   	    if(tr.attr("data-entity-iscomfirmaccount") == 0 ){
		   	    	var checkData = {
					    id:tr.attr("data-entity-id"),
					    backMoney:tr.find('input[name=backMoney]').val(),
					    checkRemark:tr.find('input[name=checkRemark]').val()
 			    	}
			    	JsonStr.push(checkData)
		   	    }
 		   }else{
 			    if(tr.attr("data-entity-iscomfirmaccount") == 1){
 				    var checkData = {
 					    id:tr.attr("data-entity-id"),
				    	backMoney:tr.find('input[name=backMoney]').val(),
				    	checkRemark:tr.find('input[name=checkRemark]').val()
	     			    }
 				    JsonStr.push(checkData)
 			    }
 		   }
	    });
 	   //判断用户是否操作
	 	   if(JsonStr.length == 0){
	 		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
	 		   return
	 	   }else{
	 		   JsonStr = JSON.stringify(JsonStr);
	     	   $.ajax({
	     		    url:KingServices.build_url("account/innerTransferIn","saveReconciliation"),
	                data:"reconciliation="+encodeURIComponent(JsonStr),
					success:function(data){
						var result = showDialog(data);
						if(result){
							$obj.data('isEdited', false);
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								//Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
								if(argumentsLen == 0){
		                            Tools.closeTab(checkId);
		                            InnerTransferIn.listInnerTransfer(0);
	                        	} else if(argumentsLen == 3){
		                            InnerTransferIn.chenking(0);
	                        	} else {
		                            Tools.addTab(tab_id, title, html);
		                            InnerTransferIn.chenkingEvent();
	                        	}
							});
						}
					}
	     	   });
	 	   }  	
	};
	//结算处理
	InnerTransferIn.settlement = function(pageNo,fromBusinessGroupId,fromBusinessGroupName,year,startMonth,endMonth){
		var $tab =  $("#tab-"+settleId+"-content");
		if ($tab.length && $tab.find('input[name=fromBusinessGroupId]').val() == fromBusinessGroupId) {	// 如果打开的是相同数据模板，则不替换
			$('.tab-' + settleId).children('a').trigger('click');
			return;
		};
		if(InnerTransferIn.$settlementSearchArea && arguments.length === 1){
			fromBusinessGroupId = InnerTransferIn.$settlementSearchArea.find('input[name=fromBusinessGroupId]').val();
			fromBusinessGroupName = InnerTransferIn.$settlementSearchArea.find('input[name=fromBusinessGroupName]').val();
			year = InnerTransferIn.$settlementSearchArea.find('select[name=year]').val();
			startMonth = InnerTransferIn.$settlementSearchArea.find('select[name=startMonth]').val();
			endMonth = InnerTransferIn.$settlementSearchArea.find('select[name=endMonth]').val();
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("financialInnerTransferIn","listFinancialInnerTransferInSettlement"),
			data:{
				pageNo:pageNo,
				fromBusinessGroupId:fromBusinessGroupId,
				year:year,
				start_month:startMonth,
				end_month:endMonth
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
			    if(result){
			 	data.searchParam = {
			    	"fromBusinessGroupId":fromBusinessGroupId,
			        "fromBusinessGroupName":fromBusinessGroupName,
			    	"year":year,
			    	"startMonth":startMonth,
			    	"endMonth":endMonth
			    };
			 	data.yearList = yearList;
                data.monthList = monthList;                
                var html = settlementTemplate(data);
                Tools.addTab(settleId,'内转转入付款',html);
                //表单验证
                InnerTransferIn.validatorTable();
                //页面资源对象
                var $settlementId = $("#tab-"+settleId+"-content");
                InnerTransferIn.$settlementTab = $settlementId;
                InnerTransferIn.$settlementSearchArea = $settlementId.find(".T-search");
                InnerTransferIn.$settlermentValidator = rule.ch
                //页面事件
                InnerTransferIn.settlementEvent($settlementId);
				};
			}
		});
	};
	//获取接收人--线路名称
	InnerTransferIn.getReceiveUser = function($obj){
		var userName = $obj.find('input[name=receiveUserName]');
		var lineProduct = $obj.find('input[name=lineProductName]');
		$.ajax({
				url:KingServices.build_url("account/innerTransferIn","getQueryTermsForDetails"),
				type:'POST',
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var allItem = {
								id:"",
								name:"全部"
							}; 
						data.receiveUserList.unshift(allItem);
						data.lineProductList.unshift(allItem);
						userName.autocomplete({
							minLength:0,
							change:function(event,ui){
								if(ui.item == null){
									$(this).next().val('');
								}
							},
							select:function(event,ui){
								console.log(ui);
								$(this).next().val(ui.item.id);
							}
						}).off('click').on('click',function(){
							var obj = $(this);
							for(var i=0;i<data.receiveUserList.length;i++){
								data.receiveUserList[i].value = data.receiveUserList[i].name
							}
							obj.autocomplete('option','source', data.receiveUserList);
							obj.autocomplete('search','');
						});

						lineProduct.autocomplete({
							minLength:0,
							change:function(event,ui){
								if(ui.item == null){
									$(this).next().val('');
								}
							},
							select:function(event,ui){
								console.log(ui);
								$(this).next().val(ui.item.id);
							}
						}).off('click').on('click',function(){
							var obj = $(this);
							for(var i=0;i<data.lineProductList.length;i++){
								data.lineProductList[i].value = data.lineProductList[i].name
							}
							obj.autocomplete('option','source', data.lineProductList);
							obj.autocomplete('search','');
						});
					}
				}
			});
	};
	//获取线路列表
	InnerTransferIn.getCheckLineproduct = function($obj,$data){
		var lineProductList = $data;
		var allItem = {
			id:"",
			name:"全部"
		};
		lineProductList.unshift(allItem);
		$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).next().val('');
				}
			},
			select:function(event,ui){
				console.log(ui);
				$(this).next().val(ui.item.id);
			}
		}).off('click').on('click',function(){
			
			var obj = $(this);
			
			for(var i=0;i<lineProductList.length;i++){
				lineProductList[i].value = lineProductList[i].name
			}
			obj.autocomplete('option','source', lineProductList);
			obj.autocomplete('search','');
		});
	};
	//查看付款明细
	InnerTransferIn.viewPayedDetail = function(id){
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","getReceivedDetails"),
			data:{
				id:id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					var html = payedDetailTemplate(data);
					layer.open({
						type : 1,
						title :"收款明细",
						skin : 'layui-layer-rim',
						area : "60%", 
						zIndex : 1028,
						content : html,
						scrollbar: false // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	};
	//查看对账明细
	InnerTransferIn.viewAccountDetail = function(id){
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","getReceivableDetails"),
			data:{
				id:id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					var html = checkDetailTemplate(data);
					layer.open({
						type : 1,
						title :"对账明细",
						skin : 'layui-layer-rim',
						area : "60%", 
						zIndex : 1028,
						content : html,
						scrollbar: false // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	};
	//保存数据
	InnerTransferIn.saveBlanceData = function(pageNo,tab_id,$data,title, html){
		 var argumentsLen = arguments.length;
		var payMoney;
		var payType;
		var remark;
		var JsonStr = FinancialService.clearSaveJson(InnerTransferIn.$checkId,InnerTransferIn.saveJson.autoPayList,rule);
		var payType = tab_id.find('select[name=sumPayType]').val();
		var sumRemark = tab_id.find('name[name=sumRemark]').val();
		JsonStr = JSON.stringify(JsonStr);
  		$.ajax({
  			url:KingServices.build_url('account/innerTransferIn','saveReceivables'),
            type:"POST",
            data:{
            	receivables:JsonStr,
            	payType:payType,
            	remark:sumRemark
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	tab_id.data('isEdited', false);
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		
                		if(argumentsLen == 2){
                            Tools.closeTab(settleId);
                            InnerTransferIn.listInnerTransfer(0);
                    	} else if(argumentsLen == 3){
                    		InnerTransferIn.saveJson = [];
                    		InnerTransferIn.btnSatus = 0;
                            InnerTransferIn.chenking(0,$data.businessGroupId,$data.businessGroupName,$data.lineProductId,$data.lineProductName,$data.receiveUserId,$data.receiveUserName,$data.startDate,$data.endDate,2);
                    	} else {
                            Tools.addTab(tab_id, title, html);
                            var id = $obj.find('input[name=businessGroupId]').val();
                            var businessGroupName = $obj.find('input[name=businessGroupName]').val();
                            InnerTransferIn.chenking(0,id,businessGroupName,$data.lineProductId,$data.lineProductName,$data.receiveUserId,$data.receiveUserName,$data.startDate,$data.endDate,2);
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferIn.init_CRU_event = function($tab,$listSearchData,typeFlag){
		if(!!$tab && $tab.length === 1){
			// 监听修改
			var $tbody,
				saveBtn;
			if(typeFlag == 2){
				$tbody = $tab.find(".T-clearList");
			}else{
				$tbody = $tab.find('.T-checkList')
			};
			$tbody.on('change', function(event) {
				event.preventDefault();
				$tab.data('isEdited', true);
			});
			// 监听保存，并切换tab
			$tab.on(SWITCH_TAB_SAVE, function(event,tab_id, title, html) {
				event.preventDefault();
				if(typeFlag == 2){
					InnerTransferIn.saveBlanceData(0,tab_id, title, html);
				}else{
					InnerTransferIn.saveCheckingData(0,$listSearchData,tab_id, title, html);
				}
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id, title, html) {
				event.preventDefault();
				Tools.addTab(tab_id, title, html);
				//通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
				if(typeFlag == 2){
					InnerTransferIn.settlementEvent(InnerTransferIn.$settlementTab);
				}else{
					InnerTransferIn.chenkingEvent(InnerTransferIn.$checkTab);
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if(typeFlag == 2){
					if (!saveBtn.data('validata').form()) { return; }
					InnerTransferIn.saveBlanceData();
				}else{
					if(!InnerTransferIn.$checkValidator.form()){return;}
					InnerTransferIn.saveCheckingData();
				}
			});
		}
	};
	exports.init = InnerTransferIn.initModule;
});