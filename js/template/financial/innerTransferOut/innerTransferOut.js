define(function(require,exports) {
	var menuKey = "financial_innerTransfer_out",
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferOutChecking"),
		settlementTemplate = require("./view/InnerTransferClearing"),
		recordTemplate = require("./view/innerTransferOutRecord"),
		checkTableTemplate = require('./view/innerTransferOutCheckTable'),
		checkDetailTemplate = require('./view/innerTransferOutDetail'),
		clearTableTemplate = require('./view/innerTransferOutClearTable'),
		payedDetailTemplate = require('./view/innerTransferOutPayed'),
		listTabId = menuKey,
		checkId = menuKey+"-checking",
		settleId= menuKey+"-settlement";
	var InnerTransferOut = {
		$tab : false,
		$checkTab : false,
		$settlementTab:false,
		$searchArea:false,
		$checkSearchArea:false,
		$checkValidator:false,
		$settlermentValidator:false,
		$settlementSearchArea:false,
		$autoAccountData:false,
		validatorCheck:false,
		saveJson:{},
		autoValidatorCheck:false,
	};
	InnerTransferOut.initModule = function(){
		var dateJson = FinancialService.getInitDate();
		InnerTransferOut.listInnerTransfer(0,"","",dateJson.startDate,dateJson.endDate);
	};
	/**
	 * 初始化list页面
	 */
	InnerTransferOut.listInnerTransfer = function(pageNo,toBusinessGroupId,toBusinessGroupName,startDate,endDate){
		if(InnerTransferOut.$searchArea && arguments.length === 1){
			var $toBusinessGroupId = InnerTransferOut.$searchArea.find('input[name=toBusinessGroupId]').val();
			var $toBusinessGroupName = InnerTransferOut.$searchArea.find('input[name=toBusinessGroupName]').val();
			toBusinessGroupId = $toBusinessGroupId;
			toBusinessGroupName = $toBusinessGroupId==""?"":$toBusinessGroupName;
			startDate = InnerTransferOut.getValueForInput(InnerTransferOut.$searchArea,'input',"startDate");
			endDate = InnerTransferOut.getValueForInput(InnerTransferOut.$searchArea,'input',"endDate");
		};
		pageNo = pageNo || 0;
		if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        };
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","listSumFinancialInnerTransferOut"),
			data:{
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				toBusinessGroupName:toBusinessGroupName,
				startDate:startDate,
				endDate:endDate,
				sortType:'auto'
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
						if(result){
						data.searchParam = {
							toBusinessGroupId:toBusinessGroupId,
							toBusinessGroupName:toBusinessGroupName,
							startDate:startDate,
							endDate:endDate,
						};
						var html = listTemplate(data);
						Tools.addTab(listTabId,"内转转出",html);
						var $tabId = $("#tab-"+listTabId+"-content");
							InnerTransferOut.$tab = $tabId;
							InnerTransferOut.$searchArea = $tabId.find(".T-search-area");
						//页面操作事件
						InnerTransferOut.inieEvent($tabId);
						//获取搜索框的数据
						InnerTransferOut.getToBusinessGroupName(InnerTransferOut.$searchArea,data.searchParam);
						//绑定翻页组件
						laypage({
						cont:InnerTransferOut.$tab.find(".T-pagenation"),
						pages:data.totalPage,
						curr:(pageNo+1),
						jump:function(obj,first){
							if(!first){
								InnerTransferOut.listInnerTransfer(obj.curr - 1);
							}
						}
					});
				}
			}
		});
	};
	//list页面事件
	InnerTransferOut.inieEvent = function($obj){
		//格式化日期控件
		FinancialService.initDate(InnerTransferOut.$searchArea);
		//搜索事件
		$obj.find(".T-search").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.listInnerTransfer(0);
		});
		//报表事件
		$obj.find('.T-innerTransferOutList').on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this),
				$tr = $that.closest('tr'),
				id = $tr.attr("businessGroupId"),
				name = $tr.attr("businessGroupName"),
				startDate = $tr.attr("startDate"),
				endDate = $tr.attr("endDate");
			if($that.hasClass('T-check')){
				//对账处理
				InnerTransferOut.chenking(0,id,name,"","","",startDate,endDate);
			}else if($that.hasClass('T-balance')){
				//付款处理
				InnerTransferOut.btnSatus = 0;
				var args = {
					toBusinessGroupId:id,
					toBusinessGroupName:name,
					lineProductId:"",
					lineProductName:"",
					operateUserId:"",
					startDate:startDate,
					endDate:endDate
				};
				InnerTransferOut.settlement(args,0);
			}
		});
	};
	//对账处理
	InnerTransferOut.chenking = function(pageNo,toBusinessGroupId,toBusinessGroupName,lineProductId,lineProductName,operateUserId,startDate,endDate){

		if(InnerTransferOut.$checkSearchArea && arguments.length === 1){
			var $lineProductId = InnerTransferOut.$checkSearchArea.find('input[name=lineProductId]').val();
			var $lineProductName = InnerTransferOut.$checkSearchArea.find('input[name=lineProductName]').val();
			toBusinessGroupId = InnerTransferOut.$checkSearchArea.find('input[name=toBusinessGroupId]').val();
			toBusinessGroupName = InnerTransferOut.$checkSearchArea.find('input[name=toBusinessGroupName]').val();
			lineProductId = $lineProductId;
			lineProductName = $lineProductId == ""?"":$lineProductName;
			operateUserId= InnerTransferOut.$checkSearchArea.find('select[name=operater]').val();
			startDate = InnerTransferOut.$checkSearchArea.find('input[name=startDate]').val();
			endDate = InnerTransferOut.$checkSearchArea.find('input[name=endDate]').val();
		};
		pageNo = pageNo || 0;
		var $listSearchData = {
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				toBusinessGroupName:toBusinessGroupName,
				lineProductId:lineProductId,
				lineProductName:lineProductName,
				startDate:startDate,
				operateUserId:operateUserId,
				endDate:endDate
			};
		if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        };
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","financialInnerTransferOutSumStaticsByToBusinessGroupId"),
			data:$listSearchData,
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.searchParam = $listSearchData;
				    var $lineProductData = data.lineProductList;
				    //return
					var html = checkTemplate(data);
				    if(Tools.addTab(checkId,'内转转出对账',html)){
						var $checkId = $("#tab-"+checkId+"-content");
						InnerTransferOut.$checkTab = $checkId;
						InnerTransferOut.$checkSearchArea = $checkId.find(".T-search");
						//获取线路数据
						var lineProductNameObj = InnerTransferOut.$checkSearchArea.find('input[name=lineProductName]');
						InnerTransferOut.getCheckLineproduct(lineProductNameObj,$lineProductData);
						//获取列表数据
						InnerTransferOut.getListData($checkId,$listSearchData,1);
					}
				    
				}
			}
		});
	};
	//获取列表数据
	InnerTransferOut.getListData = function($obj,$data,typeFlag){
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","listFinancialInnerTransferOutByToBusinessGroupId"),
			data:$data,
			type:'POST',
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var dataList = data.list;
					var html;
					for(var i=0;i<dataList.length;i++){
						data.list[i].innerTransferFeeList = JSON.parse(dataList[i].innerTransferFeeList);
						data.list[i].touristGroupMemberList = JSON.parse(dataList[i].touristGroupMemberList);
					};
					if(typeFlag == 2){
						data.list.innerTransferFeeList = FinancialService.getTempDate(data.list,InnerTransferOut.saveJson.autoPayList);
						
						data.showBtnFlag = $data.showBtnFlag;
						html = clearTableTemplate(data);
					}else{
						html = checkTableTemplate(data);

					}
					var $list = typeFlag == 2?"T-clearList":"T-checkList";
					$obj.find('.'+$list).html(html);
					//设置总条数
					$obj.find('.T-recordSize').text(data.recordSize);
					if(typeFlag != 2){
						//表单验证
						var validator = new FinRule(0);
					    InnerTransferOut.validatorCheck = validator.check($obj);
						//取消对账权限过滤
						var fiList= data.list;
                		var checkTr = $obj.find(".T-checkTr");
                		var rightCode = $obj.find(".T-checkList").data("right");
                		checkDisabled(fiList,checkTr,rightCode);
					}else{
					    var autoValidator = $data.showBtnFlag == true ? new FinRule(3) : new FinRule(2),
					    	settlermentValidator = $data.showBtnFlag == true ? new FinRule(3):new FinRule(1);
					    InnerTransferOut.$settlermentValidator = settlermentValidator.check($obj);
        				InnerTransferOut.autoValidatorCheck = autoValidator.check($obj.find('.T-count'));
					}

					//绑定事件
						InnerTransferOut.chenkingEvent($obj,$data,typeFlag);
					// 绑定翻页组件
					laypage({
					    cont: $obj.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: ($data.pageNo + 1),
					    jump: function(obj,first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		if(typeFlag == 2){
					    			var tempJson = FinancialService.clearSaveJson($obj,InnerTransferOut.saveJson.autoPayList,new FinRule(1));
	                                InnerTransferOut.saveJson = tempJson;
	                                var sumPayMoney = parseFloat($obj.find('input[name=sumPayMoney]').val()),
	                                    sumPayType = parseFloat($obj.find('select[name=sumPayType]').val()),
	                                    sumPayRemark = $obj.find('input[name=sumRemark]').val();
	                                InnerTransferOut.saveJson = {
	                                    sumPayMoney : sumPayMoney,
	                                    sumPayType : sumPayType,
	                                    sumPayRemark : sumPayRemark
	                                };
									InnerTransferOut.settlement($data,obj.curr -1);
                                }else{
                                	InnerTransferOut.chenking(obj.curr -1);
                                }
							}
					    }
					});
				}
			}
		});
	};
	//对账页面事件
	InnerTransferOut.chenkingEvent = function($obj,$data,typeFlag){
		var $list = typeFlag == 2?"T-clearList":"T-checkList";
		var $checkList = $obj.find('.'+$list);
		var $checkSearchArea = $obj.find('.T-search');
		var id = $obj.find('input[name=toBusinessGroupId]').val();
		var name = $obj.find('input[name=toBusinessGroupName]').val();
		$data.toBusinessGroupId = id;
		$data.toBusinessGroupName = name;
		//切换tab事件
		InnerTransferOut.init_CRU_event($obj,$data,id,name,typeFlag)
		//监听已对账的数据是否被修改
		if(typeFlag == 2){
			$obj.find('.'+$list).off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				//自动计算本次付款金额
				InnerTransferOut.autoSumPayMoney($obj);
				$obj.data('isEdited', true);
			});
			if(InnerTransferOut.btnSatus == 1 || $data.showBtnFlag == true){
				$obj.find('input[name=sumPayMoney]').val(InnerTransferOut.saveJson.autoPayMoney);
				InnerTransferOut.setAutoFillEdit($obj,true);

			};
		}else{
			$obj.find('.'+$list).off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				$obj.data('isEdited', true);
			});
		};
		//页面时间控件格式化
		FinancialService.initDate($checkSearchArea);
		FinancialService.initPayEvent($obj.find('.T-summary'));
		//搜索事件
		$checkSearchArea.find(".T-checking-search").on('click',function(event){
			event.preventDefault();
			if(typeFlag !=2){
				$obj.data('isEdited', false);
				InnerTransferOut.chenking(0);
			}else{
				$obj.data('isEdited', false);
				InnerTransferOut.settlement($data,0);
			}
		});
		//导出报表事件
		$obj.find(".T-btn-export").on('click',function(event){
			var args = { 
                    startDate: $obj.find('input[name=startDate]').val(),
                    endDate: $obj.find('input[name=endDate]').val()
                };
            FinancialService.exportReport(args,"exportInnerTransferOut");
		});
		//全选事件
		var $checkAll = $obj.find(".T-selectAll");
		var $checkBoxList = $checkList.find('.innerTransferFinancial');
		FinancialService.initCheckBoxs($checkAll,$checkBoxList);
		//展开事件
		$obj.find('.'+$list).on('click', '.T-seeGroup' ,function(event){
			//event.preventDefault();
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
        //监听扣款输入框的改变
        $obj.find('input[name=settlementMoney]').off('change').on('change',function(){
        	InnerTransferOut.changeTwoDecimal($(this).val());
        	InnerTransferOut.autoSumMoney($(this));
        });
        //查看对账明细
        $obj.find('.'+$list).on('click','.T-check-Detail',function(){
        	var id = $(this).closest('tr').data('id');
        	InnerTransferOut.viewAccountDetail(id);
        });
        //查看付款明细事件
        $obj.find('.'+$list).on('click',".T-viewDetail",function(){
        	var id = $(this).closest('tr').data('id');
        	InnerTransferOut.viewPayedDetail(id);
        });
        //确认对账事件
        $obj.find(".T-checking").on('click',function(event){
        	if(!InnerTransferOut.validatorCheck.form()){return;}
			InnerTransferOut.saveCheckingData(0,$obj,"");
        });
        //关闭事件
        $obj.find(".T-close").on('click',function(event){
        	if(typeFlag == 1){
        		var checkBoxList = $obj.find(".T-checkList").find('.innerTransferFinancial')
        		result =false;
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
	        	};
        	}else{
        		Tools.closeTab(settleId);
        	}
        	
        	
        });
        //自动下账事件
        $obj.find('.T-btn-autofill').off('click').on('click',function(){
        	if(!InnerTransferOut.autoValidatorCheck.form()){return;}
        	var $that = $(this);
        	if($that.hasClass('btn-primary')){
        		var unPayMoney = $obj.find('.T-count').find('.sumUnPayedMoney').text();
				var payMoney = $obj.find('.T-count').find('input[name=sumPayMoney]').val();
				var startDate = $obj.find('input[name=startDate]').val();
				var endDate = $obj.find('input[name=endDate]').val();
				if(parseFloat(payMoney)>parseFloat(unPayMoney) || payMoney < 0 || payMoney == "" || startDate>endDate){
					var message;
					if(startDate>endDate){
						message = "开始时间不能大于结束时间，请重新选择！";
					};
					if(payMoney<0 || payMoney == ""){
						message = "付款金额需大于0！";
					};
					if(parseFloat(payMoney)>parseFloat(unPayMoney)){
						message = "本次付款金额合计大于未付金额合计（已对账），请先进行对账";
					};
					
					showMessageDialog($("#confirm-dialog-message"),message);
					return;
				};
        		showConfirmDialog($( "#confirm-dialog-message" ), "是否按当前账期 " + $data.startDate + " 至 " + $data.endDate + " 下账？",function(){
        		//自动下账函数
        		InnerTransferOut.autoAcountMoney($obj,id,name,$data);
        	});
        		
        	}else{
        		InnerTransferOut.setAutoFillEdit($obj,false);
        		InnerTransferOut.saveJson = [];
        		InnerTransferOut.btnSatus = 0;
        		InnerTransferOut.settlement($data);
        	}
        });
		var payingCheck = new FinRule(2).check($obj);
        //确认付款事件
        $obj.find('.T-payMoney').off('click').on('click',function(){
        	if(!InnerTransferOut.$settlermentValidator.form()){return;}
        	var allMoney = $obj.find('input[name=sumPayMoney]').val();
        	if(allMoney == 0){
        		showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
		            InnerTransferOut.saveBlanceData(0,$data,$obj);
		        })
        	}else{
        		InnerTransferOut.saveBlanceData(0,$data,$obj);
        	}
        	
        });
	};

	//自动下账
	InnerTransferOut.autoAcountMoney = function($obj,id,name,$data){
		var args = {
			lineProductId:$obj.find('input[name=lineProductId]').val(),
			lineProductName:$obj.find('input[name=lineProductName]').val(),
			toBusinessGroupId:$obj.find('input[name=toBusinessGroupId]').val(),
			startDate:$obj.find('input[name=startDate]').val(),
			endDate:$obj.find('input[name=endDate]').val(),
			autoPayMoney:$obj.find('input[name=sumPayMoney]').val(),
			payType:$obj.find('select[name=payType]').val(),
			tripPlanNumber: ""
		};
		$.ajax({
			url:KingServices.build_url('account/innerTransferOutFinancial','autoPay'),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						InnerTransferOut.setAutoFillEdit($obj,true);
						InnerTransferOut.saveJson = data;
						InnerTransferOut.btnSatus = 1;
						$obj.data('isEdited', false);
						InnerTransferOut.settlement($data);
						//设置按钮样式
					});
				}
			}
		});
	};
	//设置按钮样式
	InnerTransferOut.setAutoFillEdit = function($tab, disable){
		var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
		if (!disable) {
			$sum.val(0);
		}
		$tab.find('.T-btn-autofill').html(disable?'<i class="ace-icon fa fa-times"></i> 取消下账': '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');
	};
	//确认对账
	InnerTransferOut.saveCheckingData = function(pageNo,$obj,$data,tab_id, title, html){
	
    	var JsonStr = [],
            selectFlag = 0,
            argumentsLen = arguments.length,
            checkList = $obj.find('.T-checkList'),
			$tr = checkList.find('.innerTransferFinancial');
		$tr.each(function(i){
 		   var flag = $(this).is(":checked");
 		   var tr = $(this).closest('tr');
		   if(flag){
		   	    if(tr.attr("data-confirm") == 0 ){
		   	    	var checkData = {
					    id:tr.data("id"),
					    checkRemark:tr.find('input[name=checkRemark]').val(),
					    punishMoney:tr.find('input[name=settlementMoney]').val()
 			    	}
			    	JsonStr.push(checkData)
		   	    }
 		   }else{
 			    if(tr.attr("data-confirm") == 1){
 				    var checkData = {
	 					    id:tr.data("id"),
	 					    checkRemark:tr.find('input[name=checkRemark]').val(),
	 					    punishMoney:tr.find('input[name=settlementMoney]').val()
	     			    }
 				    JsonStr.push(checkData)
 			    }
 		   }
	    });
 	   //判断用户是否操作
	 	    if(JsonStr.length == 0){
	 		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
	 		   return;
	 	    }else{
	 		   JsonStr = JSON.stringify(JsonStr);
	     	   $.ajax({
	     		    url:KingServices.build_url("account/innerTransferOutFinancial","operateCheckAccount"),
	                data:{
	                	checkJson:JsonStr
	                },
					success:function(data){
						var result = showDialog(data);
						if(result){
							$obj.data('isEdited', false);
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								
								if(argumentsLen == 2){
		                            Tools.closeTab(checkId);
		                            InnerTransferOut.listInnerTransfer(0);
	                        	} else if(argumentsLen == 3){
	                        		InnerTransferOut.chenking(0);
	                        	} else {
		                            Tools.addTab(tab_id, title, html);
		                            var id = $obj.find('input[name=toBusinessGroupId]').val();
		                            var toBusinessGroupName = $obj.find('input[name=toBusinessGroupName]').val();
		                            $data.toBusinessGroupId = id;
		                            $data.toBusinessGroupName = toBusinessGroupName;
		                            InnerTransferOut.chenking(0,id,toBusinessGroupName,$data.lineProductId,$data.lineProductName,$data.operateUserId,$data.startDate,$data.endDate);
	                        	}
							});
						}
					}
	     	   });
	 	    }  	
	};
	//查看付款明细
	InnerTransferOut.viewPayedDetail = function(id){
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","viewPayRecordList"),
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
						title :"已付金额明细",
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
	InnerTransferOut.viewAccountDetail = function(id){
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","viewCheckRecordList"),
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
						title :"应付金额明细",
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
	//修改扣款自动计算金额
	InnerTransferOut.autoSumMoney = function($obj){
		var $tr = $obj.closest('tr');
		//获取数据
		var transNeedPayMoney = $tr.find('.transNeedPayMoney').text();
		var travelPayedMoney = $tr.find('.travelPayedMoney').text();
		var currentNeedPayMoney = $tr.find('.currentNeedPayMoney').text();
		var settlementMoney = $tr.find('.settlementMoney').text();
		var unPayedMoney = $tr.find('.unPayedMoney').text();
		var punishMoney = $tr.find('input[name=punishMoney]').val();

		//规范数据
		transNeedPayMoney = InnerTransferOut.changeTwoDecimal(transNeedPayMoney);
		travelPayedMoney = InnerTransferOut.changeTwoDecimal(travelPayedMoney);
		currentNeedPayMoney = InnerTransferOut.changeTwoDecimal(currentNeedPayMoney);
		settlementMoney = InnerTransferOut.changeTwoDecimal(settlementMoney);
		unPayedMoney = InnerTransferOut.changeTwoDecimal(unPayedMoney);
		punishMoney = InnerTransferOut.changeTwoDecimal(punishMoney);

		var settleMoney = parseFloat(transNeedPayMoney)- parseFloat(punishMoney);
		var unPayMoney = parseFloat(settleMoney) - (parseFloat(travelPayedMoney)+parseFloat(currentNeedPayMoney));

		$tr.find('.unPayedMoney').text(unPayMoney);
		$tr.find('.settlementMoney').text(settleMoney)
		//更新数据统计
	};
	//付款处理
	InnerTransferOut.settlement = function(args,pageNo){
		if(InnerTransferOut.$settlementSearchArea && arguments.length === 2){
			var $lineProductId = InnerTransferOut.$settlementSearchArea.find('input[name=lineProductId]').val();
			var $lineProductName = InnerTransferOut.$settlementSearchArea.find('input[name=lineProductName]').val();
			args.toBusinessGroupId = InnerTransferOut.$settlementSearchArea.find('input[name=toBusinessGroupId]').val();
			args.toBusinessGroupName = InnerTransferOut.$settlementSearchArea.find('input[name=toBusinessGroupName]').val();
			args.lineProductId = $lineProductId;
			args.lineProductName = $lineProductId == ""?"":$lineProductName;
			args.operateUserId= InnerTransferOut.$settlementSearchArea.find('select[name=operater]').val();
			args.startDate = InnerTransferOut.$settlementSearchArea.find('input[name=startDate]').val();
			args.endDate = InnerTransferOut.$settlementSearchArea.find('input[name=endDate]').val();
		};
		args.pageNo = pageNo || 0;
		if(args.startDate > args.endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        };
		var $listSearchData = args;
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","financialInnerTransferOutSumStaticsByToBusinessGroupId"),
			data:$listSearchData,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				data.searchParam = $listSearchData;
			    if(result){
			 	    data.searchParam = $listSearchData;
			 	    data.showBtnFlag = args.showBtnFlag;
				    var $lineProductData = data.lineProductList;
				    //return
					var html = settlementTemplate(data);
				    if(Tools.addTab(settleId,'内转转出付款',html)){
						var $settleId = $("#tab-"+settleId+"-content");
						InnerTransferOut.$settlementTab = $settleId;
						InnerTransferOut.$settlementSearchArea = $settleId.find(".T-search");
						//获取线路数据
						var lineProductNameObj = InnerTransferOut.$settlementSearchArea.find('input[name=lineProductName]');
						InnerTransferOut.getCheckLineproduct(lineProductNameObj,$lineProductData);
						//获取列表数据
						InnerTransferOut.getListData($settleId,$listSearchData,2);
						
					}
				};
			}
		});
	};
	//保存数据
	InnerTransferOut.saveBlanceData = function(pageNo,$data,tab_id, title, html){
		var sumPayMoney = parseFloat(InnerTransferOut.$settlementTab.find('input[name=sumPayMoney]').val()),
	        sumListMoney = parseFloat(InnerTransferOut.$settlementTab.find('input[name=sumPayMoney]').data("money"));
	    if(sumPayMoney != sumListMoney){
	        showMessageDialog($("#confirm-dialog-message"),"本次收款金额合计与单条记录本次收款金额的累计值不相等，请检查！");
	        return false;
	    }
		var settlermentValidator = $data.showBtnFlag == true ? new FinRule(3):new FinRule(1);
	    var id; 
	    var argumentsLen = arguments.length;
		var payMoney;
		var payType;
		var remark;
		var JsonStr = FinancialService.clearSaveJson(InnerTransferOut.$settlementTab,InnerTransferOut.saveJson.autoPayList,settlermentValidator);
		var payType = tab_id.find('select[name=payType]').val();
		var sumRemark = tab_id.find('input[name=sumRemark]').val();
		JsonStr = JSON.stringify(JsonStr);
  		$.ajax({
  			url:KingServices.build_url('account/innerTransferOutFinancial','operatePayAccount'),
            type:"POST",
            data:{
            	payJson:JsonStr,
            	payType:payType,
            	remark:sumRemark,
            	bankId : InnerTransferOut.$settlementTab.find('input[name=card-id]').val(),
	            voucher : InnerTransferOut.$settlementTab.find('input[name=credentials-number]').val(),
	            billTime : InnerTransferOut.$settlementTab.find('input[name=tally-date]').val()
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	tab_id.data('isEdited', false);
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		
                		if(argumentsLen == 4){
                            Tools.closeTab(settleId);
                            InnerTransferOut.listInnerTransfer(0);
                    	} else if(argumentsLen == 3){
                    		InnerTransferOut.saveJson = [];
							InnerTransferOut.btnSatus = 0;
                            InnerTransferOut.settlement($data);
                    	} else {
                            Tools.addTab(tab_id, title, html);
                            var id = tab_id.find('input[name=toBusinessGroupId]').val();
                            var toBusinessGroupName = tab_id.find('input[name=toBusinessGroupName]').val();
                            $data.toBusinessGroupId = id;
                            $data.toBusinessGroupName = toBusinessGroupName;
                           // $obj,$data,typeFlag
                            InnerTransferOut.chenkingEvent(tab_id,$data,2);
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferOut.init_CRU_event = function($tab,$data,id,name,typeFlag){
		if(!!$tab && $tab.length === 1){
			// 监听保存，并切换tab
			$tab.on(SWITCH_TAB_SAVE, function(event,tab_id, title, html) {
				event.preventDefault();
				if(typeFlag == 2){
					InnerTransferOut.saveBlanceData(0,$data,tab_id, title, html);
				}else{
					InnerTransferOut.saveCheckingData(0,$tab,$data,tab_id, title, html);
				}
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id,title, html) {
				event.preventDefault();
				Tools.addTab(tab_id, title, html);
				//通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
				if(typeFlag == 2){

					var id = $tab.find('input[name=toBusinessGroupId]').val();
					var name = $tab.find('input[name=toBusinessGroupName]').val();
					$data.toBusinessGroupId = id;
					$data.toBusinessGroupName = name;
					InnerTransferOut.chenkingEvent($tab,$data,typeFlag);
				}else{

					var id = $tab.find('input[name=toBusinessGroupId]').val();
					var name = $tab.find('input[name=toBusinessGroupName]').val();
					$data.toBusinessGroupId = id;
					$data.toBusinessGroupName = name;
					InnerTransferOut.chenkingEvent($tab,$data,typeFlag);
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if(typeFlag == 2){//pageNo,$data,tab_id, title, html
					InnerTransferOut.saveBlanceData(0,$data,$tab,"");
				}else{
					InnerTransferOut.saveCheckingData(0,$tab);
				}
			});
		}
	};
	//获取搜索框的数据
	InnerTransferOut.getToBusinessGroupName = function($obj,nameData){
		var $nameObj = $obj.find('input[name=toBusinessGroupName]');
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
				url:KingServices.build_url('account/innerTransferOutFinancial','listFinancialInnerTransferOutQuery'),
				data:nameData,
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
	//获取线路列表
	InnerTransferOut.getCheckLineproduct = function($obj,$data){
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
	//获取input框的数据('input[name=a]').val();
	InnerTransferOut.getValueForInput = function($obj,$inputType,$name){
		var result = $obj.find($inputType+'[name='+$name+']').val();
		if (result == "") {//所有空字符串变成0
        	result = 0;
    	}
		return result;
	};
	InnerTransferOut.autoSumPayMoney = function($obj){
		var sumPayMoney = $obj.find('input[name=sumPayMoney]'),
			sumMoney = 0;
		var tr = $obj.find('.T-clearList').find("input[name=payMoney]");
		tr.each(function(){
			var $thisVal = $(this).val();
			$thisVal = InnerTransferOut.changeTwoDecimal($thisVal);
			sumMoney += $thisVal;
		});
		sumPayMoney.val(sumMoney);
	};
	//规范输入的数字数据
	InnerTransferOut.changeTwoDecimal = function($val){
		var newVal = parseFloat($val);
		if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
			return 0;
		}
		var newVal = Math.round($val*100)/100;
		return newVal;
	};
	InnerTransferOut.initPay = function(options){
		var args = {
			pageNo:0,
			toBusinessGroupId:options.id,
			toBusinessGroupName:options.name,
			lineProductId:"",
			lineProductName:"",
			operateUserId:"",
			startDate:options.startDate,
			endDate:options.endDate,
			showBtnFlag:true
		};
        InnerTransferOut.settlement(args,0); 
    };
	exports.init = InnerTransferOut.initModule;
	exports.initPay = InnerTransferOut.initPay;
});