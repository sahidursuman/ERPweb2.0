define(function(require,exports) {
	var menuKey = "financial_innerTransfer_in",
		rule = require("./innerTransferInRule"),
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferInChecking"),
		settlementTemplate = require("./view/InnerTransferInClearing"),
		recordTemplate = require("./view/innerTransferInRecord"),
		listTabId = menuKey,
		checkId = menuKey+"-checking",
		settleId= menuKey+"-settlement"
		yearList=[],
	    monthList = [];
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    };
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    };
	var InnerTransferIn = {
		$tab : false,
		$checkTab : false,
		$settlementTab:false,
		$searchArea:false,
		$checkSearchArea:false,
		$checkValidator:false,
		$settlermentValidator:false,
		$settlementSearchArea:false
	};
	InnerTransferIn.initModule = function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = ""
		InnerTransferIn.listInnerTransfer(0,"",year,month);
	};
	/**
	 * 初始化list页面
	 */
	InnerTransferIn.listInnerTransfer = function(pageNo,fromBusinessGroupId,year,month){
		if(InnerTransferIn.$searchArea && arguments.length === 1){
			fromBusinessGroupId = InnerTransferIn.$searchArea.find('select[name=fromBusinessGroupId]').val();
			year = InnerTransferIn.$searchArea.find('select[name=year]').val();
			month = InnerTransferIn.$searchArea.find('select[name=month]').val();
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("financialInnerTransferIn","listFinancialInnerTransferIn"),
			data:{
				pageNo:pageNo,
				fromBusinessGroupId:fromBusinessGroupId,
				year:year,
				month:month
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
						if(result){
						data.searchParam = {
							fromBusinessGroupId:fromBusinessGroupId,
							year:year,
							month:month
						};
			    		data.yearList = yearList;
						data.monthList = monthList;
						var html = listTemplate(data);
						Tools.addTab(listTabId,"内转转入",html);
						var $tabId = $("#tab-"+listTabId+"-content");
							InnerTransferIn.$tab = $tabId;
							InnerTransferIn.$searchArea = $tabId.find(".T-search-area");
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
		//搜索事件
		$obj.find(".T-innerTransferIn-search").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.listInnerTransfer(0);
		});
		//报表事件
		$obj.find('.T-innerTransferInList').on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this),
				id = $that.attr("data-entity-id"),
				name = $that.attr("data-entity-fromBusinessGroupName"),
				year = $that.attr("data-entity-year");
			if($that.hasClass('T-check')){
				//对账处理
				var month = $that.attr("data-entity-month");
				InnerTransferIn.chenking(0,id,name,year,month);
			}else if($that.hasClass('T-balance')){
				//结算处理
				var startMonth = $that.attr("data-entity-startmonth"),
			    	endMonth = $that.attr("data-entity-endmonth");
				InnerTransferIn.settlement(0,id,name,year,startMonth,endMonth);
			}
		});
	};
	//对账处理
	InnerTransferIn.chenking = function(pageNo,fromBusinessGroupId,fromBusinessGroupName,year,month){
		if(InnerTransferIn.$checkSearchArea && arguments.length === 1){
			fromBusinessGroupId = InnerTransferIn.$checkSearchArea.find('input[name=fromBusinessGroupId]').val();
			fromBusinessGroupName = InnerTransferIn.$checkSearchArea.find('input[name=fromBusinessGroupName]').val();
			year = InnerTransferIn.$checkSearchArea.find('select[name=year]').val();
			month = InnerTransferIn.$checkSearchArea.find('select[name=month]').val();
		};
		pageNo = pageNo || 0;
		if(arguments.length != 1){
			var $tab =  $("#tab-"+checkId+"-content");
			if ($tab.length && $tab.find('input[name=fromBusinessGroupId]').val() == fromBusinessGroupId) {	// 如果打开的是相同数据模板，则不替换
				$('.tab-' + checkId).children('a').trigger('click');
				return;
			};
		};
		$.ajax({
			url:KingServices.build_url("financialInnerTransferIn","listFinancialInnerTransferInChecking"),
			data:{
				pageNo:pageNo,
				fromBusinessGroupId:fromBusinessGroupId,
				year:year,
				month:month
			},
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var checkList = data.financialInnerTransferInList;
					data.yearList = yearList;
				    data.monthList = monthList;
				    data.searchParam = {
				    	"fromBusinessGroupId":fromBusinessGroupId,
				    	"fromBusinessGroupName":fromBusinessGroupName,
				    	"year":year,
				    	"month":month
				    };
				    var html = checkTemplate(data);
				    if(Tools.addTab(checkId,'内转转入对账',html)){
						var $checkId = $("#tab-"+checkId+"-content");
						InnerTransferIn.$checkTab = $checkId;
						InnerTransferIn.$checkSearchArea = $checkId.find(".T-search");
						InnerTransferIn.$checkValidator = rule.check($checkId);
					    // 绑定翻页组件
						laypage({
						    cont: $checkId.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		InnerTransferIn.chenking(obj.curr -1);
								}
						    }
						});
						//页面事件
						InnerTransferIn.chenkingEvent($checkId);
					}
				    
				}
			}
		});
	};
	//对账页面事件
	InnerTransferIn.chenkingEvent = function($obj){
		//切换tab事件
		InnerTransferIn.init_CRU_event($obj)
		//搜索事件
		$obj.find(".T-checking-search").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.chenking(0);
		});
		//导出报表事件
		$obj.find(".T-transferExport").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.exportData($obj)
		});
		//全选事件
		$obj.find(".T-selectAll").on('click',function(event){
			var flag = this.checked;
			$obj.find(" .all tbody tr").each(function(){
				var checkedbox = $(this).find(".innerTransferFinancial")
				if(flag){
					checkedbox.prop("checked",true);
				}else{
					//判断对账状态
					if(checkedbox.attr("data-entity-checkStatus") == 1){
						checkedbox.prop("checked",true);
					}else{ 	
						checkedbox.prop("checked",false);
					}
				}
			});
		});
		//复选框事件
		$obj.find(".innerTransferFinancial").on('click',function(event){
			//event.preventDefault();
			var flag = true
			$obj.find(" .innerTransferFinancial").each(function(){
				if(!$(this).prop("checked")){
					flag = false;
				} 
			})
			$obj.find(" .T-selectAll").prop("checked",flag)
		});
		//展开事件
		$obj.find(".T-seeGroup").on('click',function(event){
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
        	if(!InnerTransferIn.$checkValidator.form()){return;}
        	InnerTransferIn.saveCheckingData(0)
        });
        //关闭事件
        $obj.find(".T-close").on('click',function(event){
        	event.preventDefault();
        	showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
        		Tools.closeTab(checkId);
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
	//确认对账
	InnerTransferIn.saveCheckingData = function(pageNo,tab_id, title, html){
    	var JsonStr = [],
            oldUnIncome,
            oldBack,
            oldRemark,
            newUnIncome,
            newBack,
            newRemark,
            selectFlag = 0,
            $tab = $("#" +"tab-"+ checkId+"-content"),
            argumentsLen = arguments.length,
			$tr = $tab.find(".all tbody tr");
		$tr.each(function(i){
 		   var flag = $(this).find(".innerTransferFinancial").is(":checked");
		   var oldUnIncome = $(this).attr("data-entity-UnIncomeMoney"),
			   oldBack = $(this).attr("data-entity-backMoney"),
		   oldRemark = $(this).attr("data-entity-remark"),
		   newUnIncome = $tr.eq(i).find("input[name=UnIncomeMoney]").val(),
		   newBack = $tr.eq(i).find("input[name=backMoney]").val(),
		   newRemark = $tr.eq(i).find("input[name=checkRemark]").val(),
		   realUnIncomeMoney = $tr.eq(i).find("input[name=realUnIncomeMoney]").val(),
		   createTime =  $(this).attr("data-entity-createTime");
		   if(flag){
			   if($(this).attr("data-entity-isComfirmAccount") == 1){
				   //判断是否是修改对账
				   if(oldUnIncome !== newUnIncome || oldBack !== newBack || oldRemark != newRemark){
					   var checkData = {
		 					   id:$(this).attr("data-entity-id"),
		 					   checkUnIncomeMoney:newUnIncome,
		 					   backMoney:newBack,
		 					   checkRemark:newRemark,
		 					   createTime:createTime,
		 					   realUnIncomeMoney:realUnIncomeMoney,
		 					   isComfirmAccount:1
	     			   }
					   JsonStr.push(checkData)
				   }
			   }else{ 
			   		var checkData = {
 					   id:$(this).attr("data-entity-id"),
 					   checkUnIncomeMoney:newUnIncome,
 					   backMoney:newBack,
 					   checkRemark:newRemark,
 					   createTime:createTime,
 					   realUnIncomeMoney:realUnIncomeMoney,
 					   isComfirmAccount:1
     			    }
			   JsonStr.push(checkData)}
 		   }else{
 			   if($(this).attr("data-entity-isComfirmAccount") == 1){
 				   var checkData = {
		 					   id:$(this).attr("data-entity-id"),
		 					   checkUnIncomeMoney:newUnIncome,
		 					   backMoney:newBack,
		 					   checkRemark:newRemark,
		 					   createTime:createTime,
		 					   realUnIncomeMoney:realUnIncomeMoney,
		 					   isComfirmAccount:0
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
	     		    url:KingServices.build_url("financialInnerTransferIn","updateFinancialInnerTransferInChecking"),
	                data:"financialInnerTransferInStr="+encodeURIComponent(JsonStr),
					success:function(data){
						var result = showDialog(data);
						if(result){
							$tab.data('isEdited', false);
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								//Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
								if(argumentsLen == 0){
		                            Tools.closeTab(checkId);
		                            InnerTransferIn.listInnerTransfer(0);
	                        	} else if(argumentsLen == 1){
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
                Tools.addTab(settleId,'内转转入结算',html);
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
	//结算页面事件
	InnerTransferIn.settlementEvent = function($obj){
		var id = $obj.find('input[name=fromBusinessGroupId]').val();
		InnerTransferIn.init_CRU_event($obj,id,2)
		//搜索事件
		$obj.find(".T-settlement-search").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.settlement(0);
		});	
		//保存结算事件
		$obj.find(".T-settlementList").on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-save')){
				//保存结算数据
				if (!$(this).data('validata').form()) { return; }
				InnerTransferIn.saveBlanceData(0);
			}else if($that.hasClass('T-checkDetail')){
				//对账明细
				var name = $obj.find('input[name=fromBusinessGroupName]').val();
				var year = $that.attr("data-entity-year");
				var month = $that.attr("data-entity-month");
				InnerTransferIn.chenking(0,id,name,year,month);
			}
		});
		//操作记录事件
		$obj.find(".T-transfer-record").on('click',function(event){
			event.preventDefault();
			InnerTransferIn.showRecords(id);
		});
		//添加验证
 	   	$obj.find(".T-settlementList").on('change', 'input, select', function() {
			$(this).closest('tr').data('blanceStatus',true);
		});
	};
	//结算--给每个tr添加验证
    InnerTransferIn.validatorTable = function(){
    	//获取table中的tr
        var $tr = $("#tab-"+ settleId+"-content"+" .T-settlementList tr");
        //给每个tr添加表单验证
        $tr.each(function(){
        	$(this).find('.T-save').data('validata',rule.check($(this)));
        });	
    },
	//显示操作记录事件
	InnerTransferIn.showRecords = function(id){
		$.ajax({
			url:KingServices.build_url("financialInnerTransferIn","listFinancialInnerTransferInSettlementRecord"),
			data:{
				fromBusinessGroupId:id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					if(data.financialInnerTransferInSettlementRecordList.length == 0){
            			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
            		}else{
            			var html =recordTemplate(data);
			    		var blanceRecordsTemplateLayer =layer.open({
			    			type: 1,
						    title:"操作记录",
						    skin: 'layui-layer-rim', //加上边框
						    area: '60%', //宽高
						    zIndex:1030,
						    content: html,
						    scrollbar: false, // 推荐禁用浏览器外部滚动条
						    success: function(){}
			    		})
            		}
				}
			}
		});
	};
	//保存数据
	InnerTransferIn.saveBlanceData = function(pageNo,tab_id, title, html){
		var $tab = $("#tab-"+ settleId+"-content");
		var $tr = $tab.find(".T-settlementList tr");
		var argumentsLen = arguments.length;
	    var id; 
		var incomeMoney;
		var incomeType;
		var remark;
		$tr.each(function(i){
      		if($(this).data('blanceStatus')){
      			id = $(this).attr("data-entity-id");
      			incomeMoney =  $tr.eq(i).find("input[name=blancerealIncomeMoney]").val();
      			incomeType =  $tr.eq(i).find("select[name=blancePayType]").val();
      			remark =  $tr.eq(i).find("input[name=blancerealRemark]").val();
      		}
  		});
  		console.log(argumentsLen);
  		$.ajax({
  			url:KingServices.build_url('financialInnerTransferIn','saveFinancialInnerTransferInSettlement'),
            type:"POST",
            data:{
            	id:id,
            	incomeMoney:incomeMoney,
            	payType:incomeType,
            	remark:remark
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	$tab.data('isEdited', false);
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		
                		if(argumentsLen == 0){
                            Tools.closeTab(settleId);
                            InnerTransferIn.listInnerTransfer(0);
                    	} else if(argumentsLen == 1){
                            InnerTransferIn.settlement(0);
                    	} else {
                            Tools.addTab(tab_id, title, html);
                            InnerTransferIn.settlementEvent($tab);
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferIn.init_CRU_event = function($tab,id,typeFlag){
		if(!!$tab && $tab.length === 1){
			// 监听修改
			var $tbody,
				saveBtn;
			if(typeFlag == 2){
				$tbody = $tab.find(".T-settlementList");
				saveBtn = $tab.find(".T-save");
			}else{
				$tbody = $tab.find('.T-checkList')}
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
					InnerTransferIn.saveCheckingData(0,tab_id, title, html);
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