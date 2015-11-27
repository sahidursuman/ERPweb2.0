define(function(require,exports) {
	var menuKey = "financial_innerTransfer_out",
		rule = require("./innerTransferOutRule"),
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferOutChecking"),
		settlementTemplate = require("./view/InnerTransferClearing"),
		recordTemplate = require("./view/innerTransferOutRecord"),
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
	var InnerTransferOut = {
		$tab : false,
		$checkTab : false,
		$settlementTab:false,
		$searchArea:false,
		$checkSearchArea:false,
		$checkValidator:false,
		$settlermentValidator:false,
		$settlementSearchArea:false
	};
	InnerTransferOut.initModule = function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = ""
		InnerTransferOut.listInnerTransfer(0,"",year,month);
	};
	/**
	 * 初始化list页面
	 */
	InnerTransferOut.listInnerTransfer = function(pageNo,toBusinessGroupId,year,month){
		if(InnerTransferOut.$searchArea && arguments.length === 1){
			toBusinessGroupId = InnerTransferOut.$searchArea.find('select[name=toBusinessGroupId]').val();
			year = InnerTransferOut.$searchArea.find('select[name=year]').val();
			month = InnerTransferOut.$searchArea.find('select[name=month]').val();
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("financialInnerTransferOut","listFinancialInnerTransferOut"),
			data:{
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				year:year,
				month:month
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
						if(result){
						data.searchParam = {
							toBusinessGroupId:toBusinessGroupId,
							year:year,
							month:month
						};
			    		data.yearList = yearList;
						data.monthList = monthList;
						var html = listTemplate(data);
						Tools.addTab(listTabId,"内转转出",html);
						var $tabId = $("#tab-"+listTabId+"-content");
							InnerTransferOut.$tab = $tabId;
							InnerTransferOut.$searchArea = $tabId.find(".T-search-area");
						//页面操作事件
						InnerTransferOut.inieEvent($tabId);
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
		//搜索事件
		$obj.find(".T-innerTransferOut-search").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.listInnerTransfer(0);
		});
		//报表事件
		$obj.find('.T-innerTransferOutList').on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this),
				id = $that.attr("data-entity-id"),
				name = $that.attr("data-entity-toBusinessGroupName"),
				year = $that.attr("data-entity-year");
			if($that.hasClass('T-check')){
				//对账处理
				var month = $that.attr("data-entity-month");
				InnerTransferOut.chenking(0,id,name,year,month);
			}else if($that.hasClass('T-balance')){
				//结算处理
				var startMonth = $that.attr("data-entity-startmonth"),
			    	endMonth = $that.attr("data-entity-endmonth");
				InnerTransferOut.settlement(0,id,name,year,startMonth,endMonth);
			}
		});
	};
	//对账处理
	InnerTransferOut.chenking = function(pageNo,toBusinessGroupId,toBusinessGroupName,year,month){
		if(InnerTransferOut.$checkSearchArea && arguments.length === 1){
			toBusinessGroupId = InnerTransferOut.$checkSearchArea.find('input[name=toBusinessGroupId]').val();
			toBusinessGroupName = InnerTransferOut.$checkSearchArea.find('input[name=toBusinessGroupName]').val();
			year = InnerTransferOut.$checkSearchArea.find('select[name=year]').val();
			month = InnerTransferOut.$checkSearchArea.find('select[name=month]').val();
		};
		pageNo = pageNo || 0;
		if(arguments.length != 1 ){
			var $tab =  $("#tab-"+checkId+"-content");
			if ($tab.length && $tab.find('input[name=toBusinessGroupId]').val() == toBusinessGroupId) {	// 如果打开的是相同数据模板，则不替换
				$('.tab-' + checkId).children('a').trigger('click');
				return;
			};
		};
		$.ajax({
			url:KingServices.build_url("financialInnerTransferOut","listFinancialInnerTransferOutChecking"),
			data:{
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				year:year,
				month:month
			},
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var checkList = data.financialInnerTransferOutList;
					data.yearList = yearList;
				    data.monthList = monthList;
				    data.searchParam = {
				    	"toBusinessGroupId":toBusinessGroupId,
				    	"toBusinessGroupName":toBusinessGroupName,
				    	"year":year,
				    	"month":month
				    };
				    var html = checkTemplate(data);
				    if(Tools.addTab(checkId,'内转转出对账',html)){
						var $checkId = $("#tab-"+checkId+"-content");
						InnerTransferOut.$checkTab = $checkId;
						InnerTransferOut.$checkSearchArea = $checkId.find(".T-search");
						InnerTransferOut.$checkValidator = rule.check($checkId);
					    // 绑定翻页组件
						laypage({
						    cont: $checkId.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		InnerTransferOut.chenking(obj.curr -1);
								}
						    }
						});
						//页面事件
						InnerTransferOut.chenkingEvent(toBusinessGroupId,toBusinessGroupName);
					}
				    
				}
			}
		});
	};
	//对账页面事件
	InnerTransferOut.chenkingEvent = function(id,name){
		var $obj = $("#tab-"+checkId+"-content");
		$obj.find("input[name=toBusinessGroupId]").val(id);
		$obj.find("input[name=toBusinessGroupName]").val(name);
		//切换tab事件
		InnerTransferOut.init_CRU_event($obj)
		//搜索事件
		$obj.find(".T-checking-search").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.chenking(0);
		});
		//导出报表事件
		$obj.find(".T-transferExport").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.exportData($obj)
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
        //确认对账事件
        $obj.find(".T-checking").on('click',function(event){
        	event.preventDefault();
        	if(!InnerTransferOut.$checkValidator.form()){return;}
        	InnerTransferOut.saveCheckingData(0)
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
	InnerTransferOut.exportData = function($obj){
		var year=$obj.find("select[name=year]").val(),
			toBusinessGroupId = $obj.find("input[name=toBusinessGroupId]").val(),
			toBusinessGroupName = $obj.find("input[name=toBusinessGroupName]").val(),
	      	month=$obj.find("select[name=month]").val();
      	checkLogin(function(){
        	var url = KingServices.build_url("export","exportInnerTransferOut");
        	    url += "&toBusinessGroupId="+toBusinessGroupId+"&toBusinessGroupName="+toBusinessGroupName+"&year="+year+"&month="+month+"&sortType=auto";
        	exportXLS(url)
        });
	};
	//确认对账
	InnerTransferOut.saveCheckingData = function(pageNo,tab_id, title, html){
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
		   var oldPyamoney = $(this).attr("data-entity-realunpayedmoney"),
			   oldRemark = $(this).attr("data-entity-remark"),
			   newPayMoney = $tr.eq(i).find("input[name=realUnPayedMoney]").val(),
			   createTime = $(this).attr("data-entity-createTime"),
			   newRemark = $tr.eq(i).find("input[name=checkRemark]").val();
		   if(flag){
			   if($(this).attr("data-entity-isComfirmAccount") == 1){
				   //判断是否是修改对账
				   if(oldPyamoney !== newPayMoney || oldRemark != newRemark){
					   var checkData = {
		 					   id:$(this).attr("data-entity-id"),
		 					   realUnPayedMoney:newPayMoney,
		 					   checkRemark:newRemark,
		 					   createTime:createTime,
		 					   isComfirmAccount:1
	     			   }
					   JsonStr.push(checkData)
				   }
			   }else{ 
			   		var checkData = {
 					   id:$(this).attr("data-entity-id"),
 					   realUnPayedMoney:newPayMoney,
 					   checkRemark:newRemark,
 					   createTime:createTime,
 					   isComfirmAccount:1
     			    }
			   JsonStr.push(checkData)}
 		   }else{
 			   if($(this).attr("data-entity-isComfirmAccount") == 1){
 				   var checkData = {
	 					   id:$(this).attr("data-entity-id"),
	 					   realUnPayedMoney:newPayMoney,
	 					   checkRemark:newRemark,
	 					   createTime:createTime,
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
	     		    url:KingServices.build_url("financialInnerTransferOut","updateFinancialInnerTransferOutChecking"),
	                data:"financialInnerTransferOutStr="+encodeURIComponent(JsonStr),
					success:function(data){
						var result = showDialog(data);
						if(result){
							$tab.data('isEdited', false);
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								//Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
								if(argumentsLen == 0){
		                            Tools.closeTab(checkId);
		                            InnerTransferOut.listInnerTransfer(0);
	                        	} else if(argumentsLen == 1){
		                            InnerTransferOut.chenking(0);
	                        	} else {
		                            Tools.addTab(tab_id, title, html);
		                            InnerTransferOut.chenkingEvent();
	                        	}
							});
						}
					}
	     	   });
	 	    }  	
	};
	//结算处理
	InnerTransferOut.settlement = function(pageNo,toBusinessGroupId,toBusinessGroupName,year,startMonth,endMonth){
		if(arguments.length != 1){
			var $tab =  $("#tab-"+settleId+"-content");
			if ($tab.length && $tab.find('input[name=toBusinessGroupId]').val() == toBusinessGroupId) {	// 如果打开的是相同数据模板，则不替换
				$('.tab-' + settleId).children('a').trigger('click');
				return;
			};
			}
		if(InnerTransferOut.$settlementSearchArea && arguments.length === 1){
			toBusinessGroupId = InnerTransferOut.$settlementSearchArea.find('input[name=toBusinessGroupId]').val();
			toBusinessGroupName = InnerTransferOut.$settlementSearchArea.find('input[name=toBusinessGroupName]').val();
			year = InnerTransferOut.$settlementSearchArea.find('select[name=year]').val();
			startMonth = InnerTransferOut.$settlementSearchArea.find('select[name=startMonth]').val();
			endMonth = InnerTransferOut.$settlementSearchArea.find('select[name=endMonth]').val();
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("financialInnerTransferOut","listFinancialInnerTransferOutSettlement"),
			data:{
				pageNo:pageNo,
				toBusinessGroupId:toBusinessGroupId,
				year:year,
				start_month:startMonth,
				end_month:endMonth
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
			    if(result){
			 	data.searchParam = {
			    	"toBusinessGroupId":toBusinessGroupId,
			        "toBusinessGroupName":toBusinessGroupName,
			    	"year":year,
			    	"startMonth":startMonth,
			    	"endMonth":endMonth
			    };
			 	data.yearList = yearList;
                data.monthList = monthList;                
                var html = settlementTemplate(data);
                if(Tools.addTab(settleId,'内转转出结算',html)){
	                //表单验证
	                InnerTransferOut.validatorTable();
	                //页面资源对象
	                var $settlementId = $("#tab-"+settleId+"-content");
	                InnerTransferOut.$settlementTab = $settlementId;
	                InnerTransferOut.$settlementSearchArea = $settlementId.find(".T-search");
	                InnerTransferOut.$settlermentValidator = rule.ch
	                //页面事件
	                InnerTransferOut.settlementEvent();
					};
				};
			}
		});
	};
	//结算页面事件
	InnerTransferOut.settlementEvent = function(){
		var $obj = $("#tab-"+settleId+"-content");
		var id = $obj.find('input[name=toBusinessGroupId]').val();
		InnerTransferOut.init_CRU_event($obj,id,2)
		//搜索事件
		$obj.find(".T-settlement-search").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.settlement(0);
		});	
		//保存结算事件
		$obj.find(".T-settlementList").on('click','.T-action',function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-save')){
				//保存结算数据
				if (!$(this).data('validata').form()) { return; }
				InnerTransferOut.saveBlanceData(0);
			}else if($that.hasClass('T-checkDetail')){
				//对账明细
				var name = $obj.find('input[name=toBusinessGroupName]').val();
				var year = $that.attr("data-entity-year");
				var month = $that.attr("data-entity-month");
				InnerTransferOut.chenking(0,id,name,year,month);
			}
		});
		//操作记录事件
		$obj.find(".T-transfer-record").on('click',function(event){
			event.preventDefault();
			InnerTransferOut.showRecords(id);
		});
		//添加验证
 	   	$obj.find(".T-settlementList").on('change', 'input, select', function() {
			$(this).closest('tr').data('blanceStatus',true);
		});
	};
	//结算--给每个tr添加验证
    InnerTransferOut.validatorTable = function(){
    	//获取table中的tr
        var $tr = $("#tab-"+ settleId+"-content"+" .T-settlementList tr");
        //给每个tr添加表单验证
        $tr.each(function(){
        	$(this).find('.T-save').data('validata',rule.check($(this)));
        });	
    },
	//显示操作记录事件
	InnerTransferOut.showRecords = function(id){
		$.ajax({
			url:KingServices.build_url("financialInnerTransferOut","listFinancialInnerTransferOutSettlementRecord"),
			data:{
				toBusinessGroupId:id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					if(data.financialInnerTransferOutSettlementRecordList.length == 0){
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
	InnerTransferOut.saveBlanceData = function(pageNo,tab_id, title, html){
		var $tab = $("#tab-"+ settleId+"-content");
		var $tr = $tab.find(".T-settlementList tr");
		var argumentsLen = arguments.length;
	    var id; 
		var payMoney;
		var payType;
		var remark;
		$tr.each(function(i){
      		if($(this).data('blanceStatus')){
      			id = $(this).attr("data-entity-id");
	  			payMoney =  $tr.eq(i).find("input[name=payedMoney]").val();
	  			payType =  $tr.eq(i).find("select[name=blancePayType]").val();
	  			remark =  $tr.eq(i).find("input[name=blancerealRemark]").val();
	  		}
  		});
  		$.ajax({
  			url:KingServices.build_url('financialInnerTransferOut','saveFinancialInnerTransferOutSettlement'),
            type:"POST",
            data:{
            	id:id,
            	payedMoney:payMoney,
            	payType:payType,
            	remark:remark
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	$tab.data('isEdited', false);
                	showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                		
                		if(argumentsLen == 0){
                            Tools.closeTab(settleId);
                            InnerTransferOut.listInnerTransfer(0);
                    	} else if(argumentsLen == 1){
                            InnerTransferOut.settlement(0);
                    	} else {
                            Tools.addTab(tab_id, title, html);
                            InnerTransferOut.settlementEvent();
                    	}
                	});
                	
                }
            }
  		});
	};
	//切换tab页面自动提示
	InnerTransferOut.init_CRU_event = function($tab,id,typeFlag){
		
		var name= $tab.find('input[name=toBusinessGroupName]').val();
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
					InnerTransferOut.saveBlanceData(0,tab_id, title, html);
				}else{
					InnerTransferOut.saveCheckingData(0,tab_id, title, html);
				}
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event,tab_id,title, html) {
				event.preventDefault();
				Tools.addTab(tab_id, title, html);
				//通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
				if(typeFlag == 2){
					InnerTransferOut.settlementEvent(InnerTransferOut.$settlementTab);
				}else{
					InnerTransferOut.chenkingEvent(InnerTransferOut.$checkTab);
				}
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				if(typeFlag == 2){
					if (!saveBtn.data('validata').form()) { return; }
					InnerTransferOut.saveBlanceData();
				}else{
					if(!InnerTransferOut.$checkValidator.form()){return;}
					InnerTransferOut.saveCheckingData();
				}
			});
		}
	};
	exports.init = InnerTransferOut.initModule;
});