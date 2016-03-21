define(function(require,exports) {
	var menuKey = "financial_innerTransfer_out",
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferOutChecking"),
		settlementTemplate = require("./view/InnerTransferClearing"),
		checkTableTemplate = require('./view/innerTransferOutCheckTable'),
		checkDetailTemplate = require('./view/innerTransferOutDetail'),
		clearTableTemplate = require('./view/innerTransferOutClearTable'),
		payedDetailTemplate = require('./view/innerTransferOutPayed'),
		viewGroupTemplate = require('./view/viewTouristGroup'),
		listTabId = menuKey,
		checkId = menuKey+"-checking",
		settleId= menuKey+"-settlement";
	var InnerTransferOut = {
		$tab : false,
		$checkTab : false,
		$settlementTab:false,
		$searchArea:false,
		$checkValidator:false,
		$settlermentValidator:false,
		$autoAccountData:false,
		validatorCheck:false,
		saveJson:{},
		autoValidatorCheck:false,
	};
	InnerTransferOut.initModule = function(){
		var dateJson = FinancialService.getInitDate();
		InnerTransferOut.listInnerTransfer(0,"","",dateJson.startDate,dateJson.endDate,2);
	};
	/**
	 * 初始化list页面
	 */
	InnerTransferOut.listInnerTransfer = function(pageNo,toBusinessGroupId,toBusinessGroupName,startDate,endDate,accountStatus){
		if(InnerTransferOut.$tab && arguments.length === 1){
			var $toBusinessGroupId = InnerTransferOut.$tab.find('input[name=toBusinessGroupId]').val();
			var $toBusinessGroupName = InnerTransferOut.$tab.find('input[name=toBusinessGroupName]').val(),
			toBusinessGroupId = $toBusinessGroupId;
			toBusinessGroupName = $toBusinessGroupId==""?"":$toBusinessGroupName;
			startDate = InnerTransferOut.getValueForInput(InnerTransferOut.$tab,'input',"startDate");
			endDate = InnerTransferOut.getValueForInput(InnerTransferOut.$tab,'input',"endDate");
			accountStatus = InnerTransferOut.$tab.find(".T-finance-status").find("button").data("value");
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","listSumFinancialInnerTransferOut"),
			data:{
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				toBusinessGroupName:toBusinessGroupName,
				startDate:startDate,
				endDate:endDate,
				accountStatus:accountStatus,
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
							accountStatus:accountStatus,
							endDate:endDate,
						};
						var html = listTemplate(data);
						Tools.addTab(listTabId,"内转转出",html);
						var $tabId = $("#tab-"+listTabId+"-content");
							InnerTransferOut.$tab = $tabId;
						InnerTransferOut.listPage = pageNo;
						//页面操作事件
						InnerTransferOut.inieEvent($tabId);
						//获取搜索框的数据
						InnerTransferOut.getToBusinessGroupName(InnerTransferOut.$tab,data.searchParam);
						//获取合计数据
						InnerTransferOut.getSumMoney(data.sumFinancialInnerTransferOutList[0],InnerTransferOut.$tab);
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
	//获取合计金额
	InnerTransferOut.getSumMoney = function(data,tabId){
		var totalPeople = data.sumAllTransAdultCount+data.sumAllTransChildCount;
		tabId.find('.T-sumCount').text(totalPeople);
        tabId.find('.T-sumInnerOutMoney').text(data.sumAllTransNeedPayMoney);
        tabId.find('.T-sumStMoney').text(data.sumAllSettlementMoney);
        tabId.find('.T-sumPaiedMoney').text(data.sumAllPayedMoney);
        tabId.find('.T-sumUnPaiedMoney').text(data.sumAllUnPayedMoney);
	};
	//list页面事件
	InnerTransferOut.inieEvent = function($obj){
		//格式化日期控件
		Tools.setDatePicker($obj.find(".date-picker"), true);
		//搜索事件
		$obj.find(".T-search").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.listInnerTransfer(0);
		});
		//状态框选择事件
        $obj.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            InnerTransferOut.listInnerTransfer(0);
        });
		//报表事件
		$obj.find('.T-innerTransferOutList').on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this),
				$tr = $that.closest('tr'),
				args = {
					pageNo : 0,
					toBusinessGroupId : $tr.attr("businessGroupId"),
					toBusinessGroupName : $tr.attr("businessGroupName"),
					startDate : $tr.attr("startDate"),
					endDate : $tr.attr("endDate"),
					accountStatus : $tr.attr('accountStatus')
				};
			if($that.hasClass('T-check')){
				//对账处理
				InnerTransferOut.chenking(args);
			}else if($that.hasClass('T-balance')){
				//付款处理
				InnerTransferOut.btnSatus = 0;
				InnerTransferOut.settlement(args);
			}
		});
	};
	//对账处理
	InnerTransferOut.chenking = function(args,$tab){
		if(!!$tab){
			args.pageNo = args.pageNo || 0,
			args.lineProductId = $tab.find('input[name=lineProductId]').val();
			args.accountStatus = $tab.find('input[name=accountStatus]').val();
			args.orderNumber = $tab.find('input[name=orderNumber]').val();
			args.lineProductName = $tab.find('input[name=lineProductName]').val();
			args.operateUserId= $tab.find('select[name=operater]').val();
			args.startDate = $tab.find('input[name=startDate]').val();
			args.endDate = $tab.find('input[name=endDate]').val();
		}
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","financialInnerTransferOutSumStaticsByToBusinessGroupId"),
			data:args,
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.searchParam = args;
					var html = checkTemplate(data);
				    if(Tools.addTab(checkId,'内转转出对账',html)){
						var $checkId = $("#tab-"+checkId+"-content");
						InnerTransferOut.$checkTab = $checkId;
						//获取线路数据
						InnerTransferOut.getCheckLineproduct($checkId.find('input[name=lineProductName]'),data.lineProductList);
						//获取列表数据
						InnerTransferOut.getListData($checkId,args,1);
					} else {
						InnerTransferOut.$checkTab.data('next',args);
					}
				    
				}
			}
		});
	};
	//获取列表数据
	InnerTransferOut.getListData = function($tab,args,typeFlag){
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","listFinancialInnerTransferOutByToBusinessGroupId"),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var dataList = data.list;
					var html;
					for(var i=0;i<dataList.length;i++){
						data.list[i].innerTransferFeeList = JSON.parse(dataList[i].innerTransferFeeList);
					};
					if(typeFlag == 2){
						if(InnerTransferOut.saveJson){
				 	    	data.sumPayMoney = InnerTransferOut.saveJson.sumPayMoney;
					 	    data.sumPayType = InnerTransferOut.saveJson.sumPayType;
					 	    data.sumPayRemark = InnerTransferOut.saveJson.sumPayRemark;
					 	    data.bankId = InnerTransferOut.saveJson.bankId;
					 	    data.bankNo = InnerTransferOut.saveJson.bankNo;
				 	    }
			 	    	data.btnSatus = InnerTransferOut.btnSatus;
						data.list.innerTransferFeeList = FinancialService.getTempDate(data.list,InnerTransferOut.saveJson.autoPayList);
						data.showBtnFlag = args.showBtnFlag;
						html = clearTableTemplate(data);
						if(InnerTransferOut.saveJson.autoPayList){
							$tab.data('isEdited', true);
						}
					}else{
						html = checkTableTemplate(data);

					}
					$tab.find('.' + (typeFlag == 2 ? "T-clearList" : "T-checkList")).html(html);
					//设置总条数
					$tab.find('.T-recordSize').text(data.recordSize);
					if(typeFlag != 2){
						//表单验证
						var validator = new FinRule(6);
					    InnerTransferOut.validatorCheck = validator.check($tab);
						//取消对账权限过滤
						var fiList= data.list;
                		var checkTr = $tab.find(".T-checkTr");
                		var rightCode = $tab.find(".T-checkList").data("right");
                		checkDisabled(fiList,checkTr,rightCode);
					}else{
					    var autoValidator = args.showBtnFlag == true ? new FinRule(3) : new FinRule(2),
					    	settlermentValidator = args.showBtnFlag == true ? new FinRule(3):new FinRule(1);
					    InnerTransferOut.$settlermentValidator = settlermentValidator.check($tab);
        				InnerTransferOut.autoValidatorCheck = autoValidator.check($tab.find('.T-count'));
					}

					//绑定事件
					InnerTransferOut.chenkingEvent($tab,args,typeFlag);
					// 绑定翻页组件
					laypage({
					    cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (args.pageNo + 1),
					    jump: function(obj,first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		$tab.data('isEdited',false);
					    		if(typeFlag == 2){
					    			InnerTransferOut.saveJson.autoPayList = FinancialService.clearSaveJson($tab,InnerTransferOut.saveJson.autoPayList,new FinRule(1));
                                    InnerTransferOut.saveJson.sumPayMoney = $tab.find('input[name=sumPayMoney]').val();
                                    InnerTransferOut.saveJson.sumPayType = $tab.find('select[name=sumPayType]').val();
                                    InnerTransferOut.saveJson.sumPayRemark = $tab.find('input[name=sumRemark]').val();
                                    InnerTransferOut.saveJson.bankId = (InnerTransferOut.saveJson.sumPayType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val;
                                    InnerTransferOut.saveJson.bankNo = (InnerTransferOut.saveJson.sumPayType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val;
	                                args.pageNo = obj.curr -1;
									InnerTransferOut.getListData($tab,args,2);
                                }else{
                                	args.pageNo = obj.curr -1;
                                	InnerTransferOut.chenking(args);
                                }
							}
					    }
					});
				}
			}
		});
	};
	//对账页面事件
	InnerTransferOut.chenkingEvent = function($tab,args,typeFlag){
		//切换tab事件
		InnerTransferOut.init_CRU_event($tab,args,typeFlag);
		InnerTransferOut.getGroupList($tab,typeFlag);
		//监听已对账的数据是否被修改
		if(typeFlag == 2){
			$tab.find('.T-clearList').off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				$tab.data('isEdited', true);
			});
			if(InnerTransferOut.btnSatus == 1 || args.showBtnFlag == true){
				$tab.find('input[name=sumPayMoney]').val(InnerTransferOut.saveJson.sumPayMoney);
			}
			FinancialService.updateSumPayMoney($tab,new FinRule(args.showBtnFlag == true ? 3 : 1));
		}else{
			$tab.find('.T-checkList').off('change').on('change','input',function(){
				$(this).closest('tr').data('change',true);
				$tab.data('isEdited', true);
			});
		};
		//页面时间控件格式化
		Tools.setDatePicker($tab.find(".date-picker"), true);
		FinancialService.initPayEvent($tab);
		//搜索事件
		$tab.find(".T-checking-search").off().on('click',function(event){
			event.preventDefault();
			args.pageNo = 0;
			if(typeFlag !=2){
				InnerTransferOut.chenking(args,$tab);
			}else{
				InnerTransferOut.settlement(args,$tab);
			}
		});
		//导出报表事件
		$tab.find(".T-btn-export").on('click',function(event){
			var argsData = { 
					toBusinessGroupId:args.toBusinessGroupId,
					lineProductId:$tab.find('input[name=lineProductId]').val(),
					lineProductName:$tab.find('input[name=lineProductName]').val(),
					operateUserId:$tab.find('select[name=operater]').val(),
                    startDate: $tab.find('input[name=startDate]').val(),
                    endDate: $tab.find('input[name=endDate]').val(),
                    accountStatus : args.accountStatus
                };
            argsData.lineProductName = argsData.lineProductName === "全部" ? "" : argsData.lineProductName;
            FinancialService.exportReport(argsData,"exportArrangeInnerTransferOutFinancial");
		});
		//全选事件
		FinancialService.initCheckBoxs($tab.find(".T-selectAll"),$tab.find('.T-checkList .T-checkbox'));
		//展开事件
		$tab.on('click', '.T-seeGroup' ,function(event){
			InnerTransferOut.viewGroup($(this));
        });
        //监听扣款输入框的改变
        FinancialService.updateMoney_checking($tab,3);
        //查看对账明细
        $tab.off('click.checkDetail').on('click.checkDetail','.T-check-Detail',function(){
        	var id = $(this).closest('tr').data('id');
        	InnerTransferOut.viewAccountDetail(id);
        });
        //查看付款明细事件
        $tab.on('click',".T-viewDetail",function(){
        	var id = $(this).closest('tr').data('id');
        	InnerTransferOut.viewPayedDetail(id);
        });
        //确认对账事件
        $tab.find(".T-checking").on('click',function(event){
        	if(!InnerTransferOut.validatorCheck.form()){return;}
			FinancialService.changeUncheck($tab.find(".T-checkList tr"),function(){
				InnerTransferOut.saveCheckingData($tab,args);
			},3);
        });
        //关闭事件
        FinancialService.closeTab((typeFlag == 1) ? checkId : settleId);
        //自动下账事件
        $tab.find('.T-btn-autofill').off('click').on('click',function(){
        	if(!InnerTransferOut.autoValidatorCheck.form()){return;}
        	var $that = $(this);
        	if($that.hasClass('btn-primary')){
        		var unPayMoney = $tab.find('.sumUnPayedMoney').text();
				var payMoney = $tab.find('input[name=sumPayMoney]').val();
				var startDate = $tab.find('input[name=startDate]').val();
				var endDate = $tab.find('input[name=endDate]').val();
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
        		showConfirmDialog($( "#confirm-dialog-message" ), "是否按当前账期 " + startDate + " 至 " + endDate + " 下账？",function(){
	        		//自动下账函数
	        		args.autoPayMoney = payMoney;
	        		InnerTransferOut.autoAcountMoney($tab,args);
	        	});
        	}else{
        		InnerTransferOut.setAutoFillEdit($tab,false);
        		InnerTransferOut.saveJson = [];
        		InnerTransferOut.btnSatus = 0;
        		InnerTransferOut.getListData($tab, args, 2);
        	}
        });
		var payingCheck = new FinRule(2).check($tab);
        //确认付款事件
        $tab.find('.T-payMoney').off('click').on('click',function(){
        	if(!$tab.data('isEdited')){
                showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
                return false;
            }
        	if(!InnerTransferOut.$settlermentValidator.form()){return;}
	        	var sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
		        sumListMoney = parseFloat($tab.find('input[name=sumPayMoney]').data("money"));
		    var sumMoney = $tab.find('input[name=sumPayMoney]').data("money");
		    if(!Tools.Math.isFloatEqual(sumPayMoney,sumMoney)){
		        showMessageDialog($("#confirm-dialog-message"),"本次收款金额合计与单条记录本次收款金额的累计值不相等，请检查！");
		        return false;
		    }

        	var allMoney = $tab.find('input[name=sumPayMoney]').val();
        	if(allMoney == 0){
        		showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
		            InnerTransferOut.saveBlanceData($tab,args);
		        })
        	}else{
        		InnerTransferOut.saveBlanceData($tab,args);
        	}
        	
        });
	};

	//自动下账
	InnerTransferOut.autoAcountMoney = function($tab,args){
		$.ajax({
			url:KingServices.build_url('account/innerTransferOutFinancial','autoPay'),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					InnerTransferOut.saveJson.autoPayList = data.autoPayList;
					InnerTransferOut.saveJson.sumPayMoney = $tab.find('input[name=sumPayMoney]').val();
                    InnerTransferOut.saveJson.sumPayType = $tab.find('select[name=sumPayType]').val();
                    InnerTransferOut.saveJson.sumPayRemark = $tab.find('input[name=sumRemark]').val();
                    InnerTransferOut.saveJson.bankId = (InnerTransferOut.saveJson.sumPayType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val;
                    InnerTransferOut.saveJson.bankNo = (InnerTransferOut.saveJson.sumPayType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val;
					InnerTransferOut.btnSatus = 1;
					args.pageNo = 0;
					args.toBusinessGroupName = $tab.find('input[name=toBusinessGroupName]').val();
					args.orderNumber = $tab.find('input[name=orderNumber]').val();
					args.operateUserId = $tab.find('select[name=operater]').val();
					InnerTransferOut.getListData($tab,args,2);
					$tab.data("isEdited",true);
					InnerTransferOut.setAutoFillEdit($tab,true);
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
	InnerTransferOut.saveCheckingData = function($tab,args,tabArgs){
    	var JsonStr = [],
            selectFlag = 0,
            argumentsLen = arguments.length,
            checkList = $tab.find('.T-checkList'),
			$tr = checkList.find('.T-checkbox');
		$tr.each(function(i){
 		   var flag = $(this).is(":checked");
 		   var tr = $(this).closest('tr');
		   if(flag){
		   	    if(tr.attr("data-confirm") == 0 ){
		   	    	var checkData = {
					    id:tr.data("id"),
					    checkRemark:tr.find('textarea[name=checkRemark]').val(),
					    punishMoney:tr.find('input[name=settlementMoney]').val()
 			    	}
			    	JsonStr.push(checkData)
		   	    }
 		   }else{
 			    if(tr.attr("data-confirm") == 1){
 				    var checkData = {
	 					    id:tr.data("id"),
	 					    checkRemark:tr.find('textarea[name=checkRemark]').val(),
	 					    punishMoney:tr.find('input[name=settlementMoney]').val()
	     			    }
 				    JsonStr.push(checkData)
 			    }
 		   }
	    });
 	   //判断用户是否操作
 	    if(JsonStr.length == 0){
 		   showMessageDialog($( "#confirm-dialog-message" ),"没有可提交的数据！");
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
						$tab.data('isEdited', false);
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							if(argumentsLen === 1){
	                            Tools.closeTab(menuKey + "-checking");
	                            InnerTransferOut.listInnerTransfer(InnerTransferOut.listPage);
                        	} else {
                        		InnerTransferOut.chenking(args);
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

	//查看小组
	InnerTransferOut.viewGroup = function($obj){
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

	//付款处理
	InnerTransferOut.settlement = function(args,$tab){
		if(!!$tab){
			args.pageNo = args.pageNo || 0;
			args.lineProductId = $tab.find('input[name=lineProductId]').val();
			args.lineProductName = $tab.find('input[name=lineProductName]').val();
			args.orderNumber = $tab.find('input[name=orderNumber]').val();
			args.operateUserId = $tab.find('select[name=operater]').val();
			args.startDate = $tab.find('input[name=startDate]').val();
			args.endDate = $tab.find('input[name=endDate]').val();
		}
		$.ajax({
			url:KingServices.build_url("account/innerTransferOutFinancial","financialInnerTransferOutSumStaticsByToBusinessGroupId"),
			data:args,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
			    if(result){
			 	    data.searchParam = args;
			 	    data.showBtnFlag = args.showBtnFlag;
			 	    if(InnerTransferOut.saveJson){
			 	    	data.sumPayMoney = InnerTransferOut.saveJson.sumPayMoney;
				 	    data.sumPayType = InnerTransferOut.saveJson.sumPayType;
				 	    data.sumPayRemark = InnerTransferOut.saveJson.sumPayRemark;
				 	    data.bankId = InnerTransferOut.saveJson.bankId;
				 	    data.bankNo = InnerTransferOut.saveJson.bankNo;
			 	    }
			 	    data.btnSatus = InnerTransferOut.btnSatus;
				    var $lineProductData = data.lineProductList;
					var html = settlementTemplate(data);
				    if(Tools.addTab(settleId,'内转转出付款',html)){
				    	InnerTransferOut.$settlementTab = $("#tab-"+settleId+"-content");
						// if(InnerTransferOut.btnSatus == 1){
						// 	InnerTransferOut.$settlementTab.data("isEdited",true);
						// }
						//获取线路数据
						var lineProductNameObj = InnerTransferOut.$settlementTab.find('input[name=lineProductName]');
						InnerTransferOut.getCheckLineproduct(lineProductNameObj,data.lineProductList);
						//获取列表数据
						InnerTransferOut.getListData(InnerTransferOut.$settlementTab,args,2);						
					} else {
						InnerTransferOut.$settlementTab.data('next',args);
					}
				};
			}
		});
	};
	//保存数据
	InnerTransferOut.saveBlanceData = function($tab,args,tabArgs){
		var showBtnFlag = (arguments.length > 1) ? args.showBtnFlag : $tab.data('showBtnFlag'),
			settlermentValidator =  new FinRule((showBtnFlag == true) ? 3 : 1),
			argumentsLen = arguments.length;
		if(!FinancialService.isClearSave($tab,settlermentValidator)){
			return false;
		}
		var JsonStr = FinancialService.clearSaveJson(InnerTransferOut.$settlementTab,InnerTransferOut.saveJson.autoPayList,settlermentValidator);
		var payType = $tab.find('select[name=sumPayType]').val(),
			sumRemark = $tab.find('input[name=sumRemark]').val();
		JsonStr = JSON.stringify(JsonStr);
  		$.ajax({
  			url:KingServices.build_url('account/innerTransferOutFinancial','operatePayAccount'),
            type:"POST",
            data:{
            	payJson:JsonStr,
            	payType:payType,
            	remark:sumRemark,
            	bankId : (payType == 0) ? InnerTransferOut.$settlementTab.find('input[name=cash-id]').val() : InnerTransferOut.$settlementTab.find('input[name=card-id]').val(),
	            voucher : InnerTransferOut.$settlementTab.find('input[name=credentials-number]').val(),
	            billTime : InnerTransferOut.$settlementTab.find('input[name=tally-date]').val()
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	$tab.data('isEdited', false);
                	InnerTransferOut.saveJson = false;
                	InnerTransferOut.btnSatus = 0;
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-settlement");
                            InnerTransferOut.listInnerTransfer(InnerTransferOut.listPage);
                    	} else {
                            InnerTransferOut.settlement(args);
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferOut.init_CRU_event = function($tab,args,typeFlag){
		if(!!$tab && $tab.length === 1){
			// 监听保存，并切换tab
			$tab.on(SWITCH_TAB_SAVE, function(event,tab_id, title, html) {
				event.preventDefault();
				if(typeFlag == 2){
					InnerTransferOut.saveBlanceData($tab,$tab.data("next"),[tab_id, title, html]);
				}else{
					InnerTransferOut.saveCheckingData($tab,$tab.data("next"),[tab_id, title, html]);
				}
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id,title, html) {
				event.preventDefault();
				$tab.data('isEdited',false);
				if(typeFlag == 2){
					InnerTransferOut.btnSatus = 0;
					InnerTransferOut.saveJson = false;
					InnerTransferOut.settlement($tab.data("next"));
				} else {
					InnerTransferOut.chenking($tab.data("next"));
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if(typeFlag == 2){
					$tab.data('showBtnFlag',args.showBtnFlag);
					InnerTransferOut.saveBlanceData($tab);
				}else{
					InnerTransferOut.saveCheckingData($tab);
				}
			}).on(CLOSE_TAB_SAVE_NO, function(event) {
	            event.preventDefault();
	            if(typeFlag == 2){
	                InnerTransferOut.saveJson = false;
	            }
	        });
		}
	};
	//获取搜索框的数据
	InnerTransferOut.getToBusinessGroupName = function($obj,args){
		$.ajax({
			url:KingServices.build_url('account/innerTransferOutFinancial','listFinancialInnerTransferOutQuery'),
			data:{
				startDate :args.startDate,
				endDate:args.endDate
			},
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
					
					for(var i = 0;i<businessGroupList.length;i++){
						businessGroupList[i].value = businessGroupList[i].name;
					}
					InnerTransferOut.businessGroupList = businessGroupList.slice(allItem);
					if($obj){
						businessGroupList.unshift(allItem);
						var $nameObj = $obj.find('input[name=toBusinessGroupName]');
						$nameObj.autocomplete({
							minLength:0,
							source : businessGroupList,
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
						}).on('click',function(){
							$nameObj.autocomplete('search','');
						});
					}
				}
			}
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
			startDate:options.startDate,
			endDate:options.endDate,
			accountStatus:options.accountStatus,
		};
		InnerTransferOut.getToBusinessGroupName(false,args);

		args.toBusinessGroupId = options.id;
		args.toBusinessGroupName = options.name;
		args.showBtnFlag = true;
        InnerTransferOut.settlement(args,0); 
    };

    InnerTransferOut.getGroupList = function($tab,type){
    	var $obj = $tab.find('input[name=toBusinessGroupName]'),
    		name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : InnerTransferOut.businessGroupList,
            change: function(event,ui) {
                if (!ui.item)  {
                	$obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    toBusinessGroupId : ui.item.id,
					toBusinessGroupName : ui.item.value,
					startDate : $tab.find('input[name=startDate]').val(),
					endDate : $tab.find('input[name=endDate]').val(),
					accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                if(type == 1){
                	InnerTransferOut.chenking(args);
                } else {
                	args.showBtnFlag = $tab.find('.T-btn-autofill').length ? false : true;
                	InnerTransferOut.settlement(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };
	exports.init = InnerTransferOut.initModule;
	exports.initPay = InnerTransferOut.initPay;
});