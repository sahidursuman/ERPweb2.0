define(function(require,exports) {
	var menuKey = "financial_innerTransfer_in",
		//rule = require("./innerTransferInRule"),
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferInChecking"),
		settlementTemplate = require("./view/InnerTransferInClearing"),
		recordTemplate = require("./view/innerTransferInRecord"),
		payedDetailTemplate = require('./view/innerTransferIncome'),
		checkDetailTemplate = require('./view/innerTransferInCheckDetail'),
		viewGroupTemplate = require('./view/viewTouristGroup'),
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
		autoPayValidator:false,
		saveJson:{},
		btnSatus:false,
		$settlementSearchArea:false
	};
	InnerTransferIn.initModule = function(){
		var dateJson = FinancialService.getInitDate();
		//dateJson.startDate = "2015-11-01";
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
						InnerTransferIn.getSumMoney(data.sumInnerTransferIncomeList[0],InnerTransferIn.$tab);
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
	//获取合计金额
	InnerTransferIn.getSumMoney = function(data,tabId){
		var totalPeople = data.sumChildCount+data.sumAdultCount;
		tabId.find('.T-sumCount').text(totalPeople);
        tabId.find('.T-sumInnerInMoney').text(data.sumTransNeedPayMoney);
        tabId.find('.T-sumStMoney').text(data.sumSettlementMoney);
        tabId.find('.T-sumReceiveMoney').text(data.sumAlreadyIncomeMoney);
        tabId.find('.T-sumUnReceivedMoney').text(data.sumUnIncomeMoney);
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
				var args = {
					pageNo:0,
					businessGroupId:id,
					businessGroupName:name,
					lineProductId:'',
					lineProductName:'',
					receiveUserId:'',
					receiveUserName:'',
					startAccountTime:startDate,
					endAccountTime:endDate
				}
			if($that.hasClass('T-check')){
				InnerTransferIn.chenking(args,1);
			}else if($that.hasClass('T-balance')){
				//结算处理
				InnerTransferIn.btnSatus = 0;
				InnerTransferIn.chenking(args,2);
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
	//function(args, type, $tab)
	InnerTransferIn.chenking = function(args,typeFlag,tab){
		if(InnerTransferIn.$checkSearchArea && arguments.length === 3){
			var $lineProductId = InnerTransferIn.$checkSearchArea.find('input[name=lineProductId]').val();
			var $lineProductName = InnerTransferIn.$checkSearchArea.find('input[name=lineProductName]').val();
			var $receiveUserId = InnerTransferIn.$checkSearchArea.find('input[name=receiveUserId]').val();
			var $receiveUserName = InnerTransferIn.$checkSearchArea.find('input[name=receiveUserName]').val();
			args.businessGroupId = InnerTransferIn.$checkSearchArea.find('input[name=businessGroupId]').val();
			args.businessGroupName = InnerTransferIn.$checkSearchArea.find('input[name=businessGroupName]').val();
			args.orderNumber = InnerTransferIn.$checkSearchArea.find('input[name=orderNumber]').val();
			args.lineProductId = $lineProductId;
			args.lineProductName = $lineProductName == "全部"?"":$lineProductName;
			args.receiveUserId= $receiveUserId;
			args.receiveUserName= $receiveUserName == "全部"?"":$receiveUserName;
			args.startAccountTime = InnerTransferIn.$checkSearchArea.find('input[name=startDate]').val();
			args.endAccountTime = InnerTransferIn.$checkSearchArea.find('input[name=endDate]').val();
		};
		args.pageNo = args.pageNo || 0;
		var $listSearchData = args;
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncomeDetails"),
			data:$listSearchData,
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
				    data.searchParam = $listSearchData;
				    data.btnShowStatus = args.btnShowStatus;
				    var title,
				    	tabId,
				    	html,
				    	tempLate;
				    for(var i = 0; i < data.innerTransferIncomeDetailsList.length; i++){
				    	data.innerTransferIncomeDetailsList[i].tgMemberList = JSON.stringify(data.innerTransferIncomeDetailsList[i].tgMemberList);
				    }
				    if(typeFlag == 2 || tab =="settle" || args.autoAccount == 1){
				    	data.bankNumber = InnerTransferIn.saveJson.bankNumber || '';
					    data.voucher = InnerTransferIn.saveJson.voucher || '';
					    data.billTime = InnerTransferIn.saveJson.billTime || '';
					    data.bankId = InnerTransferIn.saveJson.bankId || '';
					    data.sumPayRemark = InnerTransferIn.saveJson.sumPayRemark || '';
					    console.log(data);
				    	tabId = settleId;
				    	title = "内转转入收款";
				    	if(InnerTransferIn.saveJson.autoPayList){
				    		if(data.innerTransferIncomeDetailsList.length != 0){
				    			var saveJson = InnerTransferIn.saveJson.autoPayList
					    		for(var i=0;i<data.innerTransferIncomeDetailsList.length;i++){
					    			for(var j=0;j<saveJson.length;j++){
					    				if(data.innerTransferIncomeDetailsList[i].id == saveJson[j].id){
					    					data.innerTransferIncomeDetailsList[i].payMoney = saveJson[j].payMoney
					    				}
					    			}
					    		}
				    		}
				    	}
				    	html = settlementTemplate(data);
				    }else{
				    	tabId = checkId;
				    	title = "内转转入对账";
				    	html = checkTemplate(data);
				    };
				    if(Tools.addTab(tabId,title,html)){
						var $checkId = $("#tab-"+tabId+"-content");
							InnerTransferIn.$checkId = $checkId;
							InnerTransferIn.$settlementTab = $checkId;
							InnerTransferIn.$checkSearchArea = $checkId.find(".T-search");
							
						var $countObj = $checkId.find(".T-count");
						if(typeFlag !=2){
							//取消对账权限过滤
							var fiList= data.innerTransferIncomeDetailsList
                    		var checkTr = InnerTransferIn.$checkId.find(".T-checkTr");
                    		var rightCode = InnerTransferIn.$checkId.find(".T-checkList").data("right");
                    		checkDisabled(fiList,checkTr,rightCode);
						} else {
							if(!!args.autoAccount && args.autoAccount == 1){
								$checkId.data("isEdited",true);
							}else{
								InnerTransferIn.$checkId.data("isEdited",false);
							};
						}
						
						//获取统计数据
						InnerTransferIn.getCountData($listSearchData, $countObj);
						//
						InnerTransferIn.getReceiveUser(InnerTransferIn.$checkSearchArea,args);
					    // 绑定翻页组件
						laypage({
						    cont: $checkId.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (args.pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {
							    	if(typeFlag == 2){
							    		var tempJson = FinancialService.clearSaveJson($checkId,InnerTransferIn.saveJson.autoPayList,new FinRule(4));
		                                InnerTransferIn.saveJson.autoPayList = tempJson;
		                                var sumPayMoney = parseFloat($countObj.find('input[name=sumPayMoney]').val()),
		                                    sumPayType = parseFloat($countObj.find('select[name=sumPayType]').val()),
		                                    sumPayRemark = $countObj.find('input[name=sumRemark]').val();
		                                    var bankId = $countObj.find('input[name=card-id]').val();
											var voucher = $countObj.find('input[name=credentials-number]').val();
											var billTime = $countObj.find('input[name=tally-date]').val();
											var bankNumber = $countObj.find('input[name=card-number]').val();
		                                InnerTransferIn.saveJson = {
		                                    sumPayMoney : sumPayMoney,
		                                    sumPayType : sumPayType,
		                                    bankId:bankId,
		                                    voucher:voucher,
		                                    billTime:billTime,
		                                    bankNumber:bankNumber,
		                                    sumPayRemark : sumPayRemark
		                                }
							    	}  // 避免死循环，第一次进入，不调用页面方法
							    	
						    		args.pageNo = obj.curr -1;
						    		InnerTransferIn.chenking(args,typeFlag,tab);
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
					$searchObj.find('.T-sumTransCount').text(data.totalCount);
					$searchObj.find('.T-sumTransNeedPayMoney').text(data.transInMoney);
					$searchObj.find('.T-sumPayedMoney').text(data.getedMoney);
					$searchObj.find('.T-sumBackMoney').text(data.backMoney);
					$searchObj.find('.T-sumSettlementMoney').text(data.settlementMoney);
					$searchObj.find('.T-sumUnPayedMoney').text(data.confirmedMoney);
					$searchObj.find('.T-sumUnReceivedMoney').text(data.unIncomeMoney);
				}
			}
		});
	};
	//对账页面事件
	InnerTransferIn.chenkingEvent = function($obj,$listSearchData,typeFlag){
		var $list = typeFlag == 2?"T-clearList":"T-checkList";
		var $checkList = $obj.find('.'+$list);
		//$obj.data('isEdited', false);
		//切换tab事件
		
		//表单验证
		var validator = new FinRule(0),
			settleValidator,
            autoValidator = new FinRule(2);
        var validatorCheck = validator.check($obj),
        	settleCheck,
        	autoValidatorCheck;
        //监听已对账的数据是否被修改
			
        
		if(typeFlag == 2){
			InnerTransferIn.init_CRU_event($obj,$listSearchData,typeFlag,"T-clearList");
			settleValidator = $listSearchData.btnShowStatus == true ? new FinRule(3):new FinRule(4);
			settleCheck = settleValidator.check($obj);
			autoValidatorCheck = autoValidator.check($obj.find('.T-count'));
			$obj.on('change','input',function(){
				
				$obj.data('isEdited', true);
			});
			$obj.find('.T-clearList').off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				$obj.data('isEdited', true);
				//自动计算本次收款金额
				InnerTransferIn.autoSumIncomeMoney($obj);
			});
			FinancialService.initPayEvent($obj.find('.T-summary'));
		}else{
			InnerTransferIn.init_CRU_event($obj,$listSearchData,typeFlag,"T-checkList");
			$obj.find('.T-checkList').off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				$obj.data('isEdited', true);
			});
		};
		//搜索事件
		$obj.find(".T-checking-search").on('click',function(event){
			event.preventDefault();
			if(typeFlag == 2){
				InnerTransferIn.btnSatus = 0 ;
				$obj.data('isEdited', false);
				$listSearchData.pageNo = 0;
				InnerTransferIn.chenking($listSearchData,2,"settle");
			}else{
				$obj.data('isEdited', false);
				$listSearchData.pageNo = 0;
				InnerTransferIn.chenking($listSearchData,1,"check");
			}
			
		});
		if(InnerTransferIn.btnSatus == 1 || $listSearchData.btnShowStatus == true){
			$obj.find('input[name=sumPayMoney]').val(InnerTransferIn.saveJson.autoPayMoney);
			InnerTransferIn.setAutoFillEdit($obj,true);
		};
		//格式化日期控件
		FinancialService.initDate(InnerTransferIn.$checkSearchArea);
		//导出报表事件
		$obj.find(".T-btn-export").on('click',function(event){
			var args = { 
					businessGroupId:$obj.find('input[name=businessGroupId]').val(),
					lineProductId:$obj.find('input[name=lineProductId]').val(),
					lineProductName:$obj.find('input[name=lineProductName]').val() == ""?"全部":$obj.find('input[name=lineProductName]').val(),
					orderNumber:$obj.find('input[name=orderNumber]').val(),
					receiveUserId:$obj.find('input[name=receiveUserId]').val(),
					receiveUserName:$obj.find('input[name=receiveUserName]').val() == ""?"全部":$obj.find('input[name=receiveUserName]').val(),
                    startAccountTime: $obj.find('input[name=startDate]').val(),
                    endAccountTime: $obj.find('input[name=endDate]').val()
                };
            args.lineProductName = args.lineProductName === "全部" ? "" : args.lineProductName;
            args.receiveUserName = args.receiveUserName === "全部" ? "" : args.receiveUserName;
            FinancialService.exportReport(args,"exportArrangeInnerTransferInFinancial");
		});
		//全选事件
		var $checkAll = $obj.find(".T-selectAll");
		var $checkBoxList = $checkList.find('.T-checkbox');
		FinancialService.initCheckBoxs($checkAll,$checkBoxList);
		//查看游客小组
		$obj.find('.'+$list).on('click','.T-seeGroup',function(event){
			event.preventDefault();
	    	InnerTransferIn.viewGroup($(this));
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
        //计算返款金额
		FinancialService.updateMoney_checking($obj,3);
        //确认对账事件
        $obj.find(".T-checking").on('click',function(event){
        	if(!validatorCheck.form()){return;}
			InnerTransferIn.saveCheckingData(0,$obj,$listSearchData)
        	
        });
        //自动下账事件
        $obj.find('.T-btn-autofill').off('click').on('click',function(){
        	if(!autoValidatorCheck.form()){return;}
        	var $that = $(this);
        	if($that.hasClass('btn-primary')){
        		var unPayMoney = $obj.find('.T-count').find('.sumUnPayedMoney').text();
				var payMoney = $obj.find('.T-count').find('input[name=sumPayMoney]').val();
				var startDate = $obj.find('input[name=startDate]').val();
				var endDate = $obj.find('input[name=endDate]').val();
				if(parseFloat(payMoney)>parseFloat(unPayMoney) || payMoney < 0 || payMoney == "" || startDate>endDate){
					var message;
					if(payMoney<0 || payMoney == ""){
						message = "收款金额需大于0！";
					};
					if(parseFloat(payMoney)>parseFloat(unPayMoney)){
						message = "本次收款金额合计大于未收金额合计（已对账），请先进行对账";
					};
					if(startDate>endDate){
						message = "开始时间不能大于结束时间，请重新选择！";
					};
					showMessageDialog($("#confirm-dialog-message"),message);
					return;
				};
        		showConfirmDialog($( "#confirm-dialog-message" ), "是否按当前账期 " + $listSearchData.startAccountTime + " 至 " + $listSearchData.endAccountTime + " 下账？",function(){
	    			//自动下账函数
	        		InnerTransferIn.autoAcountMoney($obj,$listSearchData,typeFlag);
	        	});
        	
        	}else{
        		InnerTransferIn.setAutoFillEdit($obj,false);
        		InnerTransferIn.saveJson = [];
        		InnerTransferIn.btnSatus = 0;
                InnerTransferIn.chenking($listSearchData,2,"settle");
        	}
        });
        //确认付款
        $obj.find('.T-incomeMoney').off('click').on('click',function(){
        	if(!settleCheck.form()){return;}
        	if(!$obj.data('isEdited')){
                showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
                return false;
            }
        	var sumPayMoney = parseFloat(InnerTransferIn.$settlementTab.find('input[name=sumPayMoney]').val());
			var sumMoney = InnerTransferIn.autoSumIncomeMoney($obj);
		    if(sumMoney != sumPayMoney){
		        showMessageDialog($("#confirm-dialog-message"),"本次收款金额合计与单条记录本次收款金额的累计值不相等，请检查！");
		        return false;
		    };
        	if(sumPayMoney == 0){
        		showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
		            InnerTransferIn.saveBlanceData(0,$obj,$listSearchData,"");
		        })
        	}else{
        		InnerTransferIn.saveBlanceData(0,$obj,$listSearchData,"");
        	};
        });
        //关闭事件
        $obj.find(".T-close").on('click',function(event){
        	if(typeFlag == 1){
        		var checkBoxList = $obj.find(".T-checkList").find('.T-checkbox'),
        		result = false,
        		unCheckList = [];
	        	checkBoxList.each(function(i){
	        		var $this = $(this),
	        			flag = $this.is(":checked"),
	        			$tr = $this.closest('tr');
	        		if($tr.data('change') && $tr.data("confirm") == 0 && !flag){
	        			result = true;
	        		}
	        	});
	        	if(result){
	    			showConfirmDialog($( "#confirm-dialog-message" ), "您有记录已修改但未勾选对账，是否继续?",function(){
		        		Tools.closeTab(checkId);
		        	})
	        	}else{
	        		Tools.closeTab(checkId);
	        	}
        	}else{
        		Tools.closeTab(settleId);
        	}
        });
	};

	//自动计算本次收款金额
	InnerTransferIn.autoSumIncomeMoney = function($obj){
		var sumPayMoney = $obj.find('input[name=sumPayMoney]'),
			sumMoney = 0;
		var tr = $obj.find('.T-clearList').find("input[name=payMoney]");
		tr.each(function(){
			var $thisVal = $(this).val();
			$thisVal = InnerTransferIn.changeTwoDecimal($thisVal);
			sumMoney += $thisVal;
		});
		sumPayMoney.val(sumMoney);
		return sumMoney;
	};

	//自动下账
	InnerTransferIn.autoAcountMoney = function($obj,$data){
		var payType = $obj.find('select[name=sumPayType]').val();
		var bankId = $obj.find('input[name=card-id]').val();
		var voucher = $obj.find('input[name=credentials-number]').val();
		var billTime = $obj.find('input[name=tally-date]').val();
		var bankNumber = $obj.find('input[name=card-number]').val();
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
			bankId:bankId,
			voucher:voucher,
			billTime:billTime,
			sumRemark:$obj.find('input[name=sumRemark]').val(),
		};
		$.ajax({
			url:KingServices.build_url('account/innerTransferIn','automaticDown'),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						InnerTransferIn.saveJson = data;
						InnerTransferIn.saveJson.bankId = bankId;
				        InnerTransferIn.saveJson.voucher = voucher;
                        InnerTransferIn.saveJson.billTime = billTime;
                        InnerTransferIn.saveJson.bankNumber = bankNumber;
                        InnerTransferIn.saveJson.sumPayRemark = $obj.find('input[name=sumRemark]').val();
						InnerTransferIn.btnSatus = 1;
						$obj.data("isEdited",false);
						$data.autoAccount = 1;
						InnerTransferIn.chenking($data,2,"settle");
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
			$tr = checkList.find('.T-checkbox');
		$tr.each(function(i){
 		   var flag = $(this).is(":checked");
 		   var tr = $(this).closest('tr');
		   if(flag){
		   	    if(tr.attr("data-confirm") == 0 ){
		   	    	var checkData = {
					    id:tr.attr("data-entity-id"),
					    backMoney:tr.find('input[name=settlementMoney]').val(),
					    checkRemark:tr.find('textarea[name=checkRemark]').val()
 			    	}
			    	JsonStr.push(checkData)
		   	    }
 		   }else{
 			    if(tr.attr("data-confirm") == 1){
 				    var checkData = {
 					    id:tr.attr("data-entity-id"),
				    	backMoney:tr.find('input[name=settlementMoney]').val(),
				    	checkRemark:tr.find('textarea[name=checkRemark]').val()
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
								if(argumentsLen == 2){
		                            Tools.closeTab(checkId);
		                            InnerTransferIn.listInnerTransfer(0);
	                        	} else if(argumentsLen == 3){
		                            InnerTransferIn.chenking($data,1,"check");
	                        	} else {
		                            Tools.addTab(tab_id, title, html);
		                            var id = $obj.find('input[name=businessGroupId]').val();
		                            var businessGroupName = $obj.find('input[name=businessGroupName]').val();
		                            $data.businessGroupId = id;
		                            $data.businessGroupName = businessGroupName;
		                            InnerTransferIn.chenking($data,1,"check");
	                        	}
							});
						}
					}
	     	   });
	 	   }  	
	};
	//获取接收人--线路名称
	InnerTransferIn.getReceiveUser = function($obj,args){
		var userName = $obj.find('input[name=receiveUserName]');
		var lineProduct = $obj.find('input[name=lineProductName]');
		$.ajax({
				url:KingServices.build_url("account/innerTransferIn","getQueryTermsForDetails"),
				type:'POST',
				showLoading:false,
				data:args,
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
					var html = payedDetailTemplate(data);
					layer.open({
						type : 1,
						title :"已收金额明细",
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
					var html = checkDetailTemplate(data);
					layer.open({
						type : 1,
						title :"应收金额明细",
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

	//查看游客小组
	InnerTransferIn.viewGroup = function($obj){
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

	//保存数据
	InnerTransferIn.saveBlanceData = function(pageNo,tab_id,$data,title, html){
		
		var settleValidator = $data.btnShowStatus == true ? new FinRule(3):new FinRule(4);
		var argumentsLen = arguments.length;
		var payMoney;
		var payType;
		var remark;
		var JsonStr = FinancialService.clearSaveJson(InnerTransferIn.$settlementTab,InnerTransferIn.saveJson.autoPayList,settleValidator);
		var payType = tab_id.find('select[name=sumPayType]').val();
		var sumRemark = tab_id.find('input[name=sumRemark]').val();
		var bankId = tab_id.find('input[name=card-id]').val();
		var voucher = tab_id.find('input[name=credentials-number]').val();
		var billTime = tab_id.find('input[name=tally-date]').val();
		if(JsonStr.length == 0){
			showMessageDialog($("#confirm-dialog-message"),'请选择需要收款的记录');
			return false;
		}
		JsonStr = JSON.stringify(JsonStr);
  		$.ajax({
  			url:KingServices.build_url('account/innerTransferIn','saveReceivables'),
            type:"POST",
            data:{
            	receivables:JsonStr,
            	payType:payType,
            	bankId:bankId,
            	voucher:voucher,
            	billTime:billTime,
            	remark:sumRemark
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	tab_id.data('isEdited', false);
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		
                		if(argumentsLen == 3){
                            Tools.closeTab(settleId);
                            InnerTransferIn.listInnerTransfer(0);
                    	} else if(argumentsLen == 4){
                    		InnerTransferIn.saveJson = [];
                    		InnerTransferIn.btnSatus = 0;
                    		$data.autoAccount = 0;
                            InnerTransferIn.chenking($data,2,"settle");
                    	} else {
                            Tools.addTab(tab_id, title, html);
                            var id = $obj.find('input[name=businessGroupId]').val();
                            var businessGroupName = $obj.find('input[name=businessGroupName]').val();
                            $data.businessGroupId = id;
                            $data.businessGroupName = businessGroupName;
                            $data.autoAccount = 0;
                            InnerTransferIn.chenking($data,2,"settle");
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferIn.init_CRU_event = function($tab,$listSearchData,typeFlag,options){
		if(!!$tab && $tab.length === 1){
			// 监听保存，并切换tab
			$tab.on(SWITCH_TAB_SAVE, function(event,tab_id, title, html) {
				event.preventDefault();
				if(typeFlag == 2){
					InnerTransferIn.saveBlanceData(0,$tab,$listSearchData,tab_id, title, html);
				}else{
					InnerTransferIn.saveCheckingData(0,$tab,$listSearchData,tab_id, title, html);
				}
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id, title, html) {
				event.preventDefault();
				Tools.addTab(tab_id, title, html);
				//通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
				if(typeFlag == 2){
					var id = $tab.find('input[name=businessGroupId]').val();
					var name = $tab.find('input[name=businessGroupName]').val();
					$listSearchData.businessGroupId = id;
					$listSearchData.businessGroupName = name;
					InnerTransferIn.chenkingEvent($tab,$listSearchData,typeFlag);
				}else{
					var id = $tab.find('input[name=businessGroupId]').val();
					var name = $tab.find('input[name=businessGroupName]').val();
					$listSearchData.businessGroupId = id;
					$listSearchData.businessGroupName = name;
					InnerTransferIn.chenkingEvent($tab,$listSearchData,typeFlag);
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if(typeFlag == 2){
					InnerTransferIn.saveBlanceData(0,$tab,$listSearchData);
				}else{
					InnerTransferIn.saveCheckingData(0,$tab);
				}
			});
		}
	};
	//规范输入的数字数据
	InnerTransferIn.changeTwoDecimal = function($val){
		var newVal = parseFloat($val);
		if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
			return 0;
		}
		var newVal = Math.round($val*100)/100;
		return newVal;
	};
	InnerTransferIn.initIncome = function(options){
		var args = {
				pageNo:0,
				businessGroupId:options.id,
				businessGroupName:options.name,
				lineProductId:'',
				lineProductName:'',
				receiveUserId:'',
				receiveUserName:'',
				startAccountTime:options.startDate,
				endAccountTime:options.endDate,
				btnShowStatus:true
			}
        InnerTransferIn.chenking(args,2); 
    };
	exports.init = InnerTransferIn.initModule;
	exports.initIncome = InnerTransferIn.initIncome;
});