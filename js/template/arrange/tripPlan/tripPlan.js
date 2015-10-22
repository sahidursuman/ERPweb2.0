define(function(require, exports) {
	var rule=require("./rule");
	var menuKey = "arrange_plan";
	var listTemplate = require("./view/list");
	var viewTripPlanTemplate = require("./view/viewTripPlan");
	var addTripPlanTemplate=require("./view/addTripPlan");
	var updateTemplate = require("./view/updateTripPlan");
	var searchTemplate = require("./view/searchList");
	var addGroupTemplate = require("./view/addGroup");
	var viewGroupTemplate = require("./view/viewGroup");
	var checkTable="arrange_plan-add";
	var addTripPlanLayer;
	
	var tripPlan = {
		searchData : {
			words : "",
			startTime : "",
			realname : "",
			licenseNumber : "",
			creator : "",
			status : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!tripPlan.edited[editedType] && tripPlan.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listTripPlan:function(page,words,startTime,realname,licenseNumber,creator,status){
			tripPlan.searchData = {
				words : words,
				startTime : startTime,
				realname : realname,
				licenseNumber : licenseNumber,
				creator : creator,
				status : status
			},
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=listTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&words="+words+"&startTime="+startTime+"&realname="+realname+"&licenseNumber="+licenseNumber+"&creator="+creator+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.tripPlanList = JSON.parse(data.tripPlanList);
						var html = listTemplate(data);
						addTab(menuKey,"发团计划",html);
						tripPlan.initList(data);
					}
				}
			});
		},
		initList : function(data){
			//出游日期 时间控件（筛选搜索）
			$("#tab-"+menuKey+"-content .tripPlanMain input[name=startTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			
			//搜索栏状态button下拉事件
			$("#tab-"+menuKey+"-content .search-area .btn-status .dropdown-menu a").click(function(){
				$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
				$(this).parent().parent().parent().find("span").text($(this).text());
				tripPlan.searchData = {
					words : $("#tab-"+menuKey+"-content .tripPlanMain input[name=word]").val(),
					startTime : $("#tab-"+menuKey+"-content .tripPlanMain input[name=startTime]").val(),
					realname : $("#tab-"+menuKey+"-content .tripPlanMain input[name=realname]").val(),
					licenseNumber : $("#tab-"+menuKey+"-content .tripPlanMain input[name=licenseNumber]").val(),
					creator : $("#tab-"+menuKey+"-content .tripPlanMain input[name=creator]").val(),
					status : $("#tab-"+menuKey+"-content .btn-status").find("button").attr("data-value")
				}
				tripPlan.listTripPlan(0,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			
			//给搜索按钮绑定事件
			$("#tab-"+menuKey+"-content .tripPlanMain .btn-tripPlan-search").click(function(){
				tripPlan.searchData = {
						words : $("#tab-"+menuKey+"-content .tripPlanMain input[name=word]").val(),
						startTime : $("#tab-"+menuKey+"-content .tripPlanMain input[name=startTime]").val(),
						realname : $("#tab-"+menuKey+"-content .tripPlanMain input[name=realname]").val(),
						licenseNumber : $("#tab-"+menuKey+"-content .tripPlanMain input[name=licenseNumber]").val(),
						creator : $("#tab-"+menuKey+"-content .tripPlanMain input[name=creator]").val(),
						status : $("#tab-"+menuKey+"-content .btn-status").find("button").attr("data-value")
				}
				tripPlan.listTripPlan(0,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			
			//分页--首页按钮事件
			$("#tab-"+menuKey+"-content .pageMode a.first").click(function(){
				if(data.pageNo == 0 || data.totalPage == 0)return;
				tripPlan.listTripPlan(0,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			//分页--上一页事件
			$("#tab-"+menuKey+"-content  .pageMode a.previous").click(function(){
				if(data.totalPage == 0)return;
				var previous = data.pageNo - 1;
				if(data.pageNo == 0){
					previous = 0;
				}
				tripPlan.listTripPlan(previous,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			//分页--下一页事件
			$("#tab-"+menuKey+"-content .pageMode a.next").click(function(){
				if(data.pageNo+1 == data.totalPage || data.totalPage == 0)return;
				var next =  data.pageNo + 1;
				if(data.pageNo == data.totalPage-1){
					next = data.pageNo ;
				}
				tripPlan.listTripPlan(next,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			//分页--尾页事件
			$("#tab-"+menuKey+"-content  .pageMode a.last").click(function(){
				if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
				tripPlan.listTripPlan(data.totalPage-1,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
			});
			
			//新增发团计划
			$(".tripPlanMain .btn-Plan-add").click(function(){
				tripPlan.addTripPlan();
			});
			
			//查看发团计划信息  
			$(".tripPlanMain .btn-Plan-view").click(function(){
				var id = $(this).parent().parent().attr("data-entity-id");
				tripPlan.viewTripPlan(id);
			});
			
			//取消发团计划信息 
			$(".tripPlanMain .btn-Plan-cancel").click(function(){
				var id = $(this).parent().parent().attr("data-entity-id");
				var billStatus = $(this).attr("billStatus");
				if(billStatus != -1){
					var dialogObj = $( "#confirm-dialog-message" );
					dialogObj.removeClass('hide').dialog({
						modal: true,
						title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
						title_html: true,
						draggable:false,
						buttons: [ 
							{
								text: "确定",
								"class" : "btn btn-primary btn-minier",
								click: function() {
									$( this ).dialog( "close" );
								}
							}
						],
						open:function(event,ui){
							$(this).find("p").text("该团已审核，无法取消");
						}
					});
				}else{
					tripPlan.cancelTripPlan(id);	
				}
			})	
			
			//编辑发团计划信息
			$(".tripPlanMain .btn-Plan-edit").click(function(){
				var billStatus = $(this).attr("billStatus");
				if(billStatus != -1){
					var dialogObj = $( "#confirm-dialog-message" );
					dialogObj.removeClass('hide').dialog({
						modal: true,
						title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
						title_html: true,
						draggable:false,
						buttons: [ 
							{
								text: "确定",
								"class" : "btn btn-primary btn-minier",
								click: function() {
									$( this ).dialog( "close" );
								}
							}
						],
						open:function(event,ui){
							$(this).find("p").text("该团已审核，无法编辑");
						}
					});
				}else{
					var id = $(this).attr("data-entity-id");
					tripPlan.updateTripPlan(id);
				}
			});
			
			//确认发团按钮事件
			$(".tripPlanMain .btn-Plan-confirm").click(function(){
				var id = $(this).parent().parent().attr("data-entity-id");
				var statusValue = $(this).attr("statusValue");
				var billStatus = $(this).attr("billStatus");
				
				if(billStatus != -1){
					var dialogObj = $( "#confirm-dialog-message" );
					dialogObj.removeClass('hide').dialog({
						modal: true,
						title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
						title_html: true,
						draggable:false,
						buttons: [ 
							{
								text: "确定",
								"class" : "btn btn-primary btn-minier",
								click: function() {
									$( this ).dialog( "close" );
								}
							}
						],
						open:function(event,ui){
							$(this).find("p").text("该团已审核，无法确认");
						}
					});
				}else{
					if(statusValue==0){
						tripPlan.confirmTripPlan(id);
					}else{
						var dialogObj = $( "#confirm-dialog-message" );
						dialogObj.removeClass('hide').dialog({
							modal: true,
							title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
							title_html: true,
							draggable:false,
							buttons: [
								{
									text: "取消",
									"class" : "btn btn-minier",
									click: function() {
										$( this ).dialog( "close" );
									}
								},
								{
									text: "确定",
									"class" : "btn btn-primary btn-minier",
									click: function() {
										$( this ).dialog( "close" );
										$.ajax({
											url:""+APP_ROOT+"back/tripPlan.do?method=noticeGuideTripPlanAfterConfirmTripPlanAgain&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
											data:"id="+id,
											dataType:"json",
											beforeSend:function(){
												//打开一个遮罩层
												globalLoadingLayer = openLoadingLayer();
											},
											success: function(data) {
												layer.close(globalLoadingLayer);
												var result =showDialog(data);
												var dataD = data;
												if(result){
													showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
														tripPlan.listTripPlan(0,"","","","","","");
													});
												}
											}
										})
									}
								}
							],
							open:function(event,ui){
								$(this).find("p").text("是否给导游发送短信？");
							}
						})
					}
				}
			});
			//导出计划按钮事件
			$(".tripPlanMain .btn-Plan-export").click(function(){
				var id = $(this).parent().parent().attr("data-entity-id");
				tripPlan.exportTripPlan(id);
			});
		},
		//新增计划
		addTripPlan:function(){
			var html = addTripPlanTemplate();   
			//判断页面是否存在
			if($("#" +"tab-"+checkTable+"-content").length > 0){  
				addTab(menuKey+"-add","新增计划");
				 if(!!tripPlan.edited["add"] && tripPlan.edited["add"] != ""){
						showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
							console.log("继续编辑");	
					 },function(){
						addTab(menuKey+"-add","新增计划",html);
						tripPlan.edited["add"] = "";
						tripPlan.initAdd();						 
					 },"放弃","继续编辑");
				}else{
					addTab(menuKey+"-add","新增计划",html);
					tripPlan.initAdd();
				}
			}else{  
				addTab(menuKey+"-add","新增计划",html);
				tripPlan.initAdd();
			}    
		},
		initAdd : function(){
			$('.newAddTripPlan').on("change",function(){
				tripPlan.edited["add"] = "add";
			});	
			var validator = rule.checkdCreateTripPlan($(".newAddTripPlanMain"));
			var tab = "tab-arrange_plan-add-content";
	    	//搜索线路
	    	$("#" + tab + " .newAddTripPlanMain .search-banner").click(function(){
				var searchTravelLinelayer;
	    		tripPlan.searchLineProduct(true,0,"");
	    	})
	    	tripPlan.seatCountChoose();
	    	tripPlan.brandChoose();
	    	tripPlan.licenseNumberChoose();
	    	//tripPlan.busChoose();
	    	tripPlan.driverChoose();
			tripPlan.guideChoose();
			tripPlan.addTripPlanDatepicker("startTime");
			tripPlan.setPlanceTimeDateTimePicker();
			 //发团计划定时
			tripPlan.setTripPlanPicker();

			//游客短信及时发送显示隐藏
			$("#"+tab+" .newAddTripPlanMain ").unbind().click(function(){
				if ($("#"+tab+" .newAddTripPlanMain input[name=executeTimeType]:radio:checked").val()==1) {
					$(this).parent().parent().find(".newAddTripTimer").removeClass("hide");
				} else{
					$(this).parent().parent().find(".newAddTripTimer").addClass("hide");
				};

			})

			//新增游客小组
			$("#" + tab + " .newAddTripPlanMain .newAddTouristGroup").on("click",function(){
				var lineProductId = $("#" + tab + " .newAddTripPlanMain input[name=lineProductId]").val();
				var startTime = $("#" + tab + " .newAddTripPlanMain input[name=startTime]").val();
				tripPlan.addTouristGroup(lineProductId,startTime,"addTripPlanTouristTbody",tab);
			})
	    	//小组总人数计算
	    	tripPlan.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"addTripPlanTouristTbody");

			//取消计划   btn-cancelTripPlan
			$("#" + tab + " .newAddTripPlan .btn-cancelTripPlan").click(function(){
				closeTab(menuKey+"-add");
				tripPlan.edited["add"] = "";
			})
			//保存计划   btn-savelTripPlan
			$("#" + tab + " .newAddTripPlan .btn-saveTripPlan").click(function(){
				tripPlan.submitAddTripPlan();
			});
		},
		//查看计划
		viewTripPlan:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"tripPlanId="+id+"",
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.touristGroupList =JSON.parse(data.touristGroupList);
						data.lineProductDayList =JSON.parse(data.lineProductDayList);
						data.tripPlan =JSON.parse(data.tripPlan);
						data.lineProduct =JSON.parse(data.lineProduct);
						data.guide =JSON.parse(data.guide);
						data.driver =JSON.parse(data.driver);
						data.busCompant =JSON.parse(data.busCompant);
						data.bus =JSON.parse(data.bus);
						var html = viewTripPlanTemplate(data);
						addTab(menuKey+"-view","查看发团计划",html);
						var tab = "tab-arrange_plan-view-content";
				    	tripPlan.MenberNumber("addTripPlanTouristTbody");
				    	//判定是否选中
				    	if (data.tripPlan.executeTimeType==0) {
				    		$(".newAddTripPlanMain").find('input[name=executeTimeType]').eq(0).attr("checked","checked");
				    	} else{
				    		$(".newAddTripPlanMain").find('input[name=executeTimeType]').eq(1).attr("checked","checked");
				    	};
				    
				    	//查看计划中 查看游客小组
				    	$("#" + tab + " .viewTripPlan .viewTripPlanView").on("click",function(){
				    		var id = $(this).attr("data-entity-id");
				    		tripPlan.viewTouristGroup(id);
				    	})
					}
				}
			});
		},
		//编辑计划
		updateTripPlan:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"tripPlanId="+id+"", 
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.touristGroupList =JSON.parse(data.touristGroupList);
						data.lineProductDayList =JSON.parse(data.lineProductDayList);
						data.tripPlan =JSON.parse(data.tripPlan);
						data.lineProduct =JSON.parse(data.lineProduct);
						data.guide =JSON.parse(data.guide);
						data.driver =JSON.parse(data.driver);
						data.busCompant =JSON.parse(data.busCompant);
						data.bus =JSON.parse(data.bus);
						var html = updateTemplate(data);

						//判定短信是否发送
						var isSendMessageStatus=data.tripPlan.isSendTouristMessage;
						//判断  立即发送  定时发送
						var isCheckedStatus=data.tripPlan.executeTimeType;


						//已修改提示
			    		var validator =rule.checkdCreateTripPlan($(".updateTripPlan"));
						if($(".tab-"+menuKey+"-update").length > 0) {
							addTab(menuKey+"-update","编辑发团计划");
                 	    	if(!!tripPlan.edited["update"] && tripPlan.edited["update"] !=""){
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.checkdCreateTripPlan($(".updateTripPlan"));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 tripPlan.submitUpdateTripPlan(0);
									 tripPlan.edited["update"] = "";
				            		 addTab(menuKey+"-update","编辑发团计划",html);
									 tripPlan.initUpdate();
									 //短信状态
									 tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus);

				            		 validator = rule.checkdCreateTripPlan($(".updateTripPlan"));
				            	},function(){
				            		addTab(menuKey+"-update","编辑发团计划",html);
									tripPlan.initUpdate();	
									//短信状态
									 tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus);							
									tripPlan.edited["update"] = "";
				            	}); 							
                 	    	 }else{
	                 	    	addTab(menuKey+"-update","编辑发团计划",html);	
	                 	    	//短信状态
							    tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus);
								tripPlan.initUpdate();
                 	    	 } 
                 	    }else{
                 	    	addTab(menuKey+"-update","编辑发团计划",html);	
                 	    	//短信状态
							tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus);
							tripPlan.initUpdate();
                 	    }	
					}	
				}
				
			});	
		},

		isMessageStatus:function(isSendMessageStatus,isCheckedStatus){
			var $Obj=$(".newAddTripPlanMain ");
			if (isSendMessageStatus==1) {
				$Obj.find(" .checkbox input[name=executeTimeType]").eq(0).attr("disabled","disabled");
				$Obj.find(" .checkbox input[name=executeTimeType]").eq(1).attr("disabled","disabled");
				$Obj.find(".checkbox input[name=executeTime]").attr("disabled","disabled");
			} else{
				$Obj.find(".checkbox input[name=executeTimeType]").eq(0).removeAttr("disabled");
				$Obj.find(".checkbox input[name=executeTimeType]").eq(1).removeAttr("disabled");
				$Obj.find(".checkbox input[name=executeTime]").removeAttr("disabled");
			}

			if (isCheckedStatus==0) {//立即发送

				$Obj.find("input[name=executeTimeType]").eq(0).attr("checked","checked");

			} else{//定时发送
				$Obj.find("input[name=executeTimeType]").eq(1).attr("checked","checked");

			};
			$Obj.find(".newAddTripTimer").removeClass("hide");
		},

		initUpdate : function(){
			$('.updateTripPlan').on("change",function(){
				tripPlan.edited["update"] = "update";
			});	
			var tab = "tab-arrange_plan-update-content";		
			//编辑发团计划验证
			var validator = rule.checkdCreateTripPlan($(".updateTripPlan"));
					
			//小组排序
			tripPlan.MenberNumber("updateTripPlanTouristTbody");

			//小组总人数计算
			tripPlan.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"updateTripPlanTouristTbody");

			//搜索线路
			$("#" + tab + " .updateTripPlan .search-banner").click(function(){
				var searchTravelLinelayer;
				tripPlan.searchLineProduct(true,0,"");
			})
			tripPlan.seatCountChoose();
			tripPlan.brandChoose();
			tripPlan.licenseNumberChoose();
			//tripPlan.busChoose();
			tripPlan.driverChoose();
			tripPlan.guideChoose();
			//tripPlan.addTripPlanDatepicker("startTime");
			
	    	$("#"+tab+" input[name=setPlaceTime]").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});


			//发团计划定时
			tripPlan.setTripPlanPicker();

			//游客短信及时发送显示隐藏
			//$("#"+tab+" .checkbox ").unbind().click(function(){
				//if ($("#"+tab+" .checkbox input[name=executeTimeType]:radio:checked").val()==1) {
					//$(this).parent().parent().find(".newAddTripTimer").removeClass("hide");

				//} else{
					//$(this).parent().parent().find(".newAddTripTimer").addClass("hide");
				//};

			//})

			//新增游客小组
			$("#" + tab + " .updateTripPlan .newAddTouristGroup").on("click",function(){
				var lineProductId = $("#" + tab + " .updateTripPlan input[name=lineProductId]").val();
				var startTime = $("#" + tab + " .updateTripPlan input[name=startTime]").val();
				tripPlan.addTouristGroup(lineProductId,startTime,"updateTripPlanTouristTbody",tab);
			})
			//查看旅游小组成员
			$("#" + tab + " .updateTripPlan .touristGroupView").on("click",function(){
				var id = $(this).attr("data-entity-id");
				tripPlan.viewTouristGroup(id);
			})
			//删除小组
			$("#" + tab + " .updateTripPlan .touristGroupDelete").on("click",function(){
				var obj = $(this);
				var id = obj.attr("data-entity-id");
				var tripPlanId = $(".updateTripPlan input[name=tripPlanId]").val();
				 tripPlan.deleteTouristGroup(obj,id,tripPlanId,tab,"updateTripPlanTouristTbody");
			})
			//编辑 提交事件绑定
			//取消计划   btn-cancelTripPlan
			$("#" + tab + " .updateTripPlan .btn-updatecancelTripPlan").click(function(){
				closeTab(menuKey+"-update");
				tripPlan.edited["update"] = "";
			})
			//保存计划   btn-savelTripPlan
			$("#" + tab + " .updateTripPlan .btn-updateTripPlan").click(function(){
				tripPlan.submitUpdateTripPlan(1);
			});
		},
		//搜索关键词初始化
		lineSearchData : {
			name : ""
		},
		//新增页面中 搜索线路产品事件
		searchLineProduct : function(init,page,name){
	    	$.ajax({
    			url:""+APP_ROOT+"back/lineProduct.do?method=findAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&sortType=auto",
				data:"pageNo="+page+"&name="+name,
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success: function(data) {
                	layer.close(globalLoadingLayer);
                	var result =showDialog(data);
                	var dataD = data;
					if(result){
						var lineProductInfo = JSON.parse(data.lineProductList);
						data.lineProductList = lineProductInfo;								
						
						if(lineProductInfo != null && lineProductInfo.length > 0){
							for(var i=0;i<lineProductInfo.length;i++){
								lineProductInfo[i].value = lineProductInfo[i].name;
							}
						}
						var html =searchTemplate(data);
						if(init){
				    		searchTravelLinelayer =layer.open({
				    			type: 1,
							    title:"选择路线",
							    skin: 'layui-layer-rim', //加上边框
							    area: ['70%', '75%'], //宽高
							    zIndex:1029,
							    content: html,
							    success: function(data) {
							    }
						    });
						}
						else{
							$("#layui-layer"+searchTravelLinelayer+"").find(".layui-layer-content").html(html);
						}
						
						//搜索按钮事件
						$("#newTripPlanLineProduct .btn-lineProduct-search").click(function(){
							tripPlan.lineSearchData = {
									name : $("#newTripPlanLineProduct input[name=lineProduct_name]").val()
							}
							tripPlan.searchLineProduct(false,0,tripPlan.lineSearchData.name);
						});
				    	//分页--首页按钮事件
						$("#newTripPlanLineProduct .pageMode a.first").click(function(){
							tripPlan.searchLineProduct(false,0,tripPlan.lineSearchData.name);
						});
						//分页--上一页事件
						$("#newTripPlanLineProduct .pageMode a.previous").click(function(){
							var previous = dataD.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							tripPlan.searchLineProduct(false,previous,tripPlan.lineSearchData.name);
						});
						//分页--下一页事件
						$("#newTripPlanLineProduct .pageMode a.next").click(function(){
							var next =  dataD.pageNo + 1;
							if(dataD.pageNo == dataD.totalPage-1){
								next = dataD.pageNo ;
							}
							tripPlan.searchLineProduct(false,next,tripPlan.lineSearchData.name);
						});
						//分页--尾页事件
						$("#newTripPlanLineProduct .pageMode a.last").click(function(){
							if(dataD.totalPage < 1){return;}
							tripPlan.searchLineProduct(false,dataD.totalPage-1,tripPlan.lineSearchData.name);
						});
						//提交线路获取线路相关信息
						$(".tripPlanSearchLine .btn-submit-searchtravelLine").click(function(){
							var id = "";
							var trSearchtravelLine =$(".tripPlanSearchLine .search-travelLineList-table tbody tr");
				    		for(var i=0;i<trSearchtravelLine.length;i++){
				    			if(trSearchtravelLine.eq(i).find("input[name=choice-TravelLine]").is(":checked")==true){
				    				id =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").attr("data-travelLine-Id");
				    			}
				    			else{
				    			}
				    		}
				    		if(!!id){
								$.ajax({
					    			url:""+APP_ROOT+"back/lineProduct.do?method=findById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&sortType=auto",
									data:"lineProductId="+id,
									dataType:"json",
									type:"POST",
									beforeSend:function(){
										//打开一个遮罩层
										globalLoadingLayer = openLoadingLayer();
									},
									success: function(data) {
										data.lineProduct = JSON.parse(data.lineProduct);
										data.lineProductDays = JSON.parse(data.lineProductDays);
										data.guide = JSON.parse(data.guide);
										data.busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
				                    	layer.close(globalLoadingLayer);
				                    	var result =showDialog(data);
				                    	var dataD = data;
										if(result){
											layer.close(searchTravelLinelayer);
											tripPlan.setTripPlanLineValue(data);
											
											var daysLength = data.lineProductDays.length;
											var html = "";
											for(i=0;i<daysLength;i++){
												function hotelLevel(){
													if(data.lineProductDays[i].hotelLevel == 1){
														return "三星以下"
													}else if(data.lineProductDays[i].hotelLevel == 2){
														return "三星"
													}else if(data.lineProductDays[i].hotelLevel == 3){
														return "准四星"
													}else if(data.lineProductDays[i].hotelLevel == 4){
														return "四星"
													}else if(data.lineProductDays[i].hotelLevel == 5){
														return "准五星"
													}else if(data.lineProductDays[i].hotelLevel == 6){
														return "五星"
													}else if(data.lineProductDays[i].hotelLevel == 7){
														return "五星以上"
													}else{
														return "-"
													}
												}
												html +='<tr><td>第'+data.lineProductDays[i].whichDay+'天</td><td>'+data.lineProductDays[i].repastDetail+'</td><td>'+hotelLevel()+'</td><td class="col-xs-6">'+data.lineProductDays[i].title+'</td></tr>';
											}
											$(".newAddTripPlanMain table.days tbody").html(html);
											$(".newAddTripPlanMain table.days tbody").html(html);
										}
									}
					    		})
					    	}else{
					    		showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品");
					    	}
						})
					}
				}
    		})
    	},
    	//游客名单成员添加自动序号函数  tripPlan.MenberNumber(oClass);
		MenberNumber : function(tBody){
			$("."+tBody+" tr").each(function(i){
					$(this).children().eq(0).text(i+1);
			})
		},
		tripPlanAllMemberCount :function(className,tab,tbody){
			var tr = $("#"+tab+" ."+tbody+"").find("tr"),
				trMemberCount = 0;
			tr.each(function(){
				trMemberCount += parseInt($(this).find(".tripPlanTrMemberCount").text());
			})
			$("#"+tab+" ."+className+"").text(trMemberCount);
			trMemberCount = 0;
		},
		confirmTripPlan : function(id){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=confirmTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				data:"tripPlanId="+id,
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success: function(data) {
                	layer.close(globalLoadingLayer);
                	var result =showDialog(data);
                	var dataD = data;
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						// 确认发团成功后，刷新列表
						tripPlan.listTripPlan(0,tripPlan.searchData.words,tripPlan.searchData.startTime,tripPlan.searchData.realname,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.status);
					}
				}
			})
		},
		setValue : function(name,value){
			$(".newAddTripPlan").find("[name="+name+"]").attr("value",value);
		},
		setAreaValue : function(name,value){
			$(".newAddTripPlan").find("[name="+name+"]").text(value);
		},
		setTripPlanLineValue :function(data){
			var type = "";
			if(data.lineProduct.customerType==0){
				type = "散客";
			}else{
				type = "团体";
			}
			data.busCompanyTemplate.bus = data.busCompanyTemplate.bus || {};
			data.busCompanyTemplate.busCompany = data.busCompanyTemplate.busCompany || {};
			data.busCompanyTemplate.driver = data.busCompanyTemplate.driver || {};
			
			tripPlan.setValue("name",data.lineProduct.name);
			tripPlan.setValue("lineProductId",data.lineProduct.id);
			tripPlan.setValue("startTime",data.lineProduct.startTime);

			tripPlan.setValue("BusCompanyName",data.busCompanyTemplate.busCompany.companyName || "");
			tripPlan.setValue("busCompanyId",data.busCompanyTemplate.busCompany.id || "");
			tripPlan.setValue("needBusBrand",data.busCompanyTemplate.bus.brand || "");
			tripPlan.setValue("LicenseNumber",data.busCompanyTemplate.bus.licenseNumber || "");
			tripPlan.setValue("busLicenseNumberId",data.busCompanyTemplate.bus.id || "");
			tripPlan.setValue("seatCount",data.busCompanyTemplate.bus.seatCount);
			tripPlan.setValue("AddTPchooseGuide",data.guide.realname);
			tripPlan.setValue("AddTPchooseGuideId",data.guide.id);
			tripPlan.setValue("GmobileNumber",data.guide.mobileNumber);
			tripPlan.setValue("driverName",data.busCompanyTemplate.driver.name || "");
			tripPlan.setValue("driverId",data.busCompanyTemplate.driver.id || "");
			tripPlan.setValue("DmobileNumber",data.busCompanyTemplate.driver.mobileNumber || "");
			
			tripPlan.setValue("days",data.lineProduct.days);
			tripPlan.setValue("type",data.lineProduct.type);
			tripPlan.setValue("customerType",type);
			tripPlan.setAreaValue("includeFee",data.lineProduct.includeFee);
			tripPlan.setAreaValue("excludeFee",data.lineProduct.excludeFee);
			tripPlan.setAreaValue("lineFeature",data.lineProduct.lineFeature);
			tripPlan.setAreaValue("lineNotice",data.lineProduct.lineNotice);
		},
		busChoose : function(){
		//给车辆绑定autocomplete事件
			chooseBusLicenseNumber = $(".newAddTripPlan .chooseBusLicenseNumber").autocomplete({
				minLength:0,
				select:function(event,ui){
					
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.bus), objParent = $(".newAddTripPlan");
								objParent.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
								objParent.find("input[name=seatCount]").val(d.seatCount);
							}
	                    }
	                 });
					
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent().parent();
						objParent.find("input[name=busLicenseNumberId]").val("");
						objParent.find("input[name=licenseNumber]").val("");
						objParent.find("input[name=seatCount]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(".newAddTripPlan").find("input[name=busCompanyId]").val();
				if(busCompanyId){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=findBusListBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+busCompanyId+"&seatCount="+0,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var busList = JSON.parse(data.busList);
								
								
								if(busList != null && busList.length){
									for(var i=0;i<busList.length;i++){
										busList[i].value = busList[i].licenseNumber;
									}
								}
								$(objBus).autocomplete('option','source', busList);
								$(objBus).autocomplete('search', '');
								
							}
	                    }
	                 });
				}else{
					layer.tips('请选择车队', objBus, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		busCompanyChoose : function(){
			//车队-车牌autocomplete  
			var chooseBusLicenseNumber= $(".newAddTripPlan .chooseBusCompany");
			chooseBusLicenseNumber.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).parent().parent().parent().find("input[name=busCompanyId]").val("");
						$(this).parent().parent().parent().find("input[name=LicenseNumber]").val("");
						$(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val("");
						$(this).parent().parent().parent().find("input[name=seatCount]").val("");
						$(this).parent().parent().parent().parent().find("input[name=driverName]").val("");
						$(this).parent().parent().parent().parent().find("input[name=driverId]").val("");
						$(this).parent().parent().parent().parent().find("input[name=DmobileNumber]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					
					$(this).parent().parent().parent().find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					$(this).parent().parent().parent().find("input[name=LicenseNumber]").val("");
					$(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val("");
					$(this).parent().parent().parent().find("input[name=seatCount]").val("");
					$(this).parent().parent().parent().parent().find("input[name=driverName]").val("");
					$(this).parent().parent().parent().parent().find("input[name=driverId]").val("");
					$(this).parent().parent().parent().parent().find("input[name=DmobileNumber]").val("");
					
					//var obj = this, mobileNumber = ""; 
					
				}
			}).click(function(){
				var obj = this;
				//var needSeatCount = $(obj).parent().parent().parent().find("input[name=needSeatCount]").val();
				$.ajax({
					url:""+APP_ROOT+"back/busCompany.do?method=findBusCompanyBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
                    dataType: "json",
                    data:"seatCount="+0,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var busCompanyList = JSON.parse(data.busCompanyList);
							if(busCompanyList != null && busCompanyList.length > 0){
								for(var i=0;i<busCompanyList.length;i++){
									busCompanyList[i].value = busCompanyList[i].companyName;
								}
							}
							$(obj).autocomplete('option','source', busCompanyList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			})
		},
		//导游autocomplete
		guideChoose :function(){
			var guaideNameChoose = $(".newAddTripPlanMain .AddTPchooseGuide");
			guaideNameChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).parent().parent().find("input[name=AddTPchooseGuideId]").val("");
						$(this).parent().parent().find("input[name=mobileNumber]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$.ajax({
						url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var guide = JSON.parse(data.guide);
								$(obj).parent().parent().find("input[name=AddTPchooseGuideId]").val(guide.id).trigger('change');
								$(obj).parent().parent().find("input[name=GmobileNumber]").val(guide.mobileNumber);
							}
	                    }
	                });
				}
			}).click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/guide.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
                    dataType: "json",
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var guideList = JSON.parse(data.guideList);
							if(guideList != null && guideList.length > 0){
								for(var i=0;i<guideList.length;i++){
									guideList[i].value = guideList[i].realname;
								}
							}
							$(obj).autocomplete('option','source', guideList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			});
		},
		addTripPlanDatepicker :function(name){
			$(".newAddTripPlan input[name="+name+"]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		//集合时间   时间控件
		setPlanceTimeDateTimePicker :function(){
	    	$(".newAddTripPlan input[name=setPlaceTime]").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},

	    //发团定时   
		setTripPlanPicker:function(){
	    	$(".newAddTripPlanMain input[name=executeTime]").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		}, 

		//添加游客小组
		addTouristGroup :function(lineProductId,startTime,tBody,tab){
			//添加游客小组 （多选）			
			var excludeIdJson = [];
			$(".newAddTripPlan ."+tBody+" tr").each(function(i){
				var id = {
						id : $(this).attr("data-entity-id")
					};
				excludeIdJson.push(id);
			})
			excludeIdJson = JSON.stringify(excludeIdJson);
			if(lineProductId.length > 0 && startTime.length > 0){
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
					type:"POST",
					data:"lineProductId="+lineProductId+"&startTime="+startTime+"&type=1"+"&excludeIdJson="+encodeURIComponent(excludeIdJson)+"",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							data.lineProduct = JSON.parse(data.lineProduct);
							data.touristGroupList = JSON.parse(data.touristGroupList);
							var html = addGroupTemplate(data);
							var addGroupTemplateLayer = layer.open({
							    type: 1,
							    title:"添加游客小组",
							    skin: 'layui-layer-rim', //加上边框
							    area: ['60%', '50%'], //宽高
							    zIndex:1028,
							    content: html,
							    success:function(){
							    	//选择游客小组并提交（多选）
							    	//绑定table的全选按钮事件
							    	// tripPlan.chooseAllFunction("addTouristGroupListToPlan","addTGToPlanTbody");
							    	$(".addTouristGroupListToPlan .all .addMainCheckBox").click(function(){
										var is_checked = $(this).is(':checked');
										$(".addTouristGroupListToPlan .all tbody.addTGToPlanTbody tr").each(function(){
											if(is_checked){
												$(this).find(".touristGroupCheckBox").prop("checked",true);
											}
											else{
												$(this).find(".touristGroupCheckBox").prop("checked",false);
											}
										});
									});
							    	//查看旅游小组成员
							    	$(".addTouristGroupListToPlan .addTGToPlanTbody .addGroupView").off().on("click",function(){
							    		var id = $(this).attr("data-entity-id");
							    		tripPlan.viewTouristGroup(id);
							    	})
							    	//提交按钮事件绑定
									$(".addTouristGroupListToPlan .btn-submit-addtravelLine").click(function(){
										var addGroupIdJson = "[";
										var addGListLength = $(".addTouristGroupListToPlan .all tbody tr").find("input:checked").length;
										$(".addTouristGroupListToPlan .all tbody tr").find("input:checked").each(function(i){
												var id = $(this).parent().parent().parent().attr("data-entity-id");
												var travelAgencyName = $(this).parent().parent().parent().find("td[name=travelAgencyName]").text();
												var contactMemberName = $(this).parent().parent().parent().find("td[name=contactMemberName]").text();
												var contactMemberMobileNumber = $(this).parent().parent().parent().find("td[name=contactMemberMobileNumber]").text();
												var areaData = $(this).parent().parent().parent().find("td[name=areaData]").text();
												var ageData = $(this).parent().parent().parent().find("td[name=ageData]").text();
												var peopleCount = $(this).parent().parent().parent().find("td[name=peopleCount]").text();
												var remark = $(this).parent().parent().parent().find("td[name=remark]").text();
												if(i==addGListLength-1){
													addGroupIdJson += "{\"id\":\""+id+"\",\"travelAgencyName\":\""+travelAgencyName+"\",\"contactMemberName\":\""+contactMemberName+"\",\"contactMemberMobileNumber\":\""+contactMemberMobileNumber+"\",\"areaData\":\""+areaData+"\",\"ageData\":\""+ageData+"\",\"peopleCount\":\""+peopleCount+"\",\"remark\":\""+remark+"\"}"
												}
												else{
													addGroupIdJson += "{\"id\":\""+id+"\",\"travelAgencyName\":\""+travelAgencyName+"\",\"contactMemberName\":\""+contactMemberName+"\",\"contactMemberMobileNumber\":\""+contactMemberMobileNumber+"\",\"areaData\":\""+areaData+"\",\"ageData\":\""+ageData+"\",\"peopleCount\":\""+peopleCount+"\",\"remark\":\""+remark+"\"},"
												}
										});
										addGroupIdJson += "]";
										addGroupIdJson = JSON.parse(addGroupIdJson);
										for(var i in addGroupIdJson){
											//addGroupIdJson[i];
											if(i<addGroupIdJson.length){
											var html=
												"<tr data-entity-id=\""+addGroupIdJson[i].id+"\">"+
													"<td></td>"+
													"<td>"+addGroupIdJson[i].travelAgencyName+"</td>"+
													"<td>"+addGroupIdJson[i].contactMemberName+"</td>"+
													"<td>"+addGroupIdJson[i].contactMemberMobileNumber+"</td>"+
													"<td>"+addGroupIdJson[i].areaData+"</td>"+
													"<td>"+addGroupIdJson[i].ageData+"</td>"+
													"<td class=\"tripPlanTrMemberCount\">"+addGroupIdJson[i].peopleCount+"</td>"+
													"<td>"+addGroupIdJson[i].remark+"</td>"+
													"<td>"+
													"<div class=\"hidden-sm hidden-xs btn-group\">"+
													"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor touristGroupView\">"+
														"查看"+
													"</a>"+"<a class='cursor'> |</a>"+
													"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor touristGroupDelete\">"+
														"删除"+
													"</a>"+
													"</div>"+
													"</td>"+
												"</tr>";
											// 
									    		$("#"+tab+" ."+tBody+"").append(html);
											}
										}
										layer.close(addGroupTemplateLayer);
										tripPlan.MenberNumber("addTripPlanTouristTbody");
										tripPlan.MenberNumber("updateTripPlanTouristTbody");
										/*$(".newAddTripPlan .addTripPlanDelete").click(tripPlan.);
										$(".newAddTripPlan .groupView").click(viewGroup);
										$(".newAddTripPlan .addTripPlanView").click(addPlanViewGroup);
										$("")*/
										//查看旅游小组成员
								    	$(".newAddTripPlan ."+tBody+" .touristGroupView").off().on("click",function(){
								    		var id = $(this).attr("data-entity-id");
								    		tripPlan.viewTouristGroup(id);
								    	})
								    	//删除小组
								    	$(".newAddTripPlan ."+tBody+" .touristGroupDelete").off().on("click",function(){
								    		var obj = $(this);
								    		var id = obj.attr("data-entity-id");
								    		var tripPlanId = $(".newAddTripPlan input[name=tripPlanId]").val();
								    		 tripPlan.deleteTouristGroup(obj,id,tripPlanId,tab,tBody);
								    	})
								    	//小组总人数计算
				    					tripPlan.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,tBody);
							    	})
							    	
							    }
							})
						}
						
											
					}
				})
			}else{
				showMessageDialog($( "#confirm-dialog-message" ),"请先选择线路名称和出团日期！");
			}
			
		},
		viewTouristGroup :function(id){
			//查看旅游小组成员
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getMemberList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"touristGroupId="+id+"",
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var memberList = JSON.parse(data.memberList);
						data.memberList = memberList;
						var html = viewGroupTemplate(data);
						var viewGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"查看小组信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '50%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(data){
						    	
						    }
						})
					}
				}
			})
		},
		//删除小组成员
		deleteTouristGroup :function(obj,id,tripPlanId,tab,tbody){
			var dialogObj = $( "#confirm-dialog-message" );
			dialogObj.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [
					{
						text: "取消",
						"class" : "btn btn-minier",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier",
						click: function() {
							$( this ).dialog( "close" );
							if(tripPlanId){
								$.ajax({
									url:""+APP_ROOT+"back/touristGroup.do?method=removeTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
									type:"POST",
									data:"tripPlanId="+tripPlanId+"&touristGroupId="+id+"",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								    				obj.parent().parent().parent().remove();
													tripPlan.MenberNumber("addTripPlanTouristTbody");
													tripPlan.MenberNumber("updateTripPlanTouristTbody");
													//小组总人数计算
					    							tripPlan.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"updateTripPlanTouristTbody");
											});
										}
									}
								})
							}else{
				    				obj.parent().parent().parent().remove();
									tripPlan.MenberNumber("addTripPlanTouristTbody");
									tripPlan.MenberNumber("updateTripPlanTouristTbody");
									//小组总人数计算
	    							tripPlan.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,tbody);
							}
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要移除该小组吗？");
				}
			})
		},
		//全选 table
		//绑定table的全选按钮事件  tripPlan.chooseAllFunction(oClass,tBody);
		chooseAllFunction :function(oClass,tBody){
			$("."+oClass+".addMainCheckBox").click(function(){
				var is_checked = $(this).is(':checked');
				$("."+oClass+" ."+tBody+" tr").each(function(){
					if(is_checked){
						$(this).find(".touristGroupCheckBox").prop("checked",true);
					}
					else{
						$(this).find(".touristGroupCheckBox").prop("checked",false);
					}
				});
	
			});
		},

		//取消计划
		cancelTripPlan: function deleteGroup(id){
			var dialogObj = $( "#confirm-dialog-message" );
			dialogObj.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier",
						click: function() {
							$( this ).dialog( "close" );
							$.ajax({
								url:""+APP_ROOT+"back/tripPlan.do?method=cancelTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
								type:"POST",
								data:"tripPlanId="+id+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
											tripPlan.listTripPlan(0,"","","","","","");
										})
									}
								}
							});
						}
					}],
				open:function(event,ui){
					$(this).find("p").text("你确定要取消该发团计划信息？");
				}
			});
		},
		//导出发团计划
		exportTripPlan:function(id){
			checkLogin(function(){
				var url = ""+APP_ROOT+"back/export.do?method=exportTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&tripPlanId="+id+"";
				exportXLS(url);
			});
		},
		seatCountChoose :function(){
			var chooseSeatCount = $(".widget-main").find(".chooseSeatCount");
			chooseSeatCount.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
						parents.find("input[name=needBusBrand]").val("");
						parents.find("input[name=LicenseNumber]").val("");
						parents.next().find("input[name=driverName]").val("");
						parents.next().find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					parents.find("input[name=needBusBrand]").val("");
					parents.find("input[name=LicenseNumber]").val("");
					parents.next().find("input[name=driverName]").val("");
					parents.next().find("input[name=DmobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/bookingOrder.do?method=getSeatCountList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					dataType:"json",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var seatCountListJson = [];
							var seatCountList = data.seatCountList;
							if(seatCountList && seatCountList.length > 0){
								for(var i=0; i < seatCountList.length; i++){
									var seatCount = {
										value : seatCountList[i]
									}
									seatCountListJson.push(seatCount);
								}
								$(obj).autocomplete('option','source', seatCountListJson);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			})
		},
		brandChoose :function(){
			var chooseBrand = $(".widget-main").find("input[name=needBusBrand]");
			chooseBrand.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
						parents.find("input[name=LicenseNumber]").val("");
						parents.next().find("input[name=driverName]").val("");
						parents.next().find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					parents.find("input[name=LicenseNumber]").val("");
					parents.next().find("input[name=driverName]").val("");
					parents.next().find("input[name=DmobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).parent().parent().find(".chooseSeatCount").val();
				if(seatCount){
					$.ajax({
						url:""+APP_ROOT+"back/bookingOrder.do?method=getBusBrandList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"",
						dateType:"json",
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var busBrandListJson = [];
								var busBrandList = data.busBrandList;
								if(busBrandList && busBrandList.length > 0){
									for(var i=0; i < busBrandList.length; i++){
										var busBrand = {
											value : busBrandList[i]
										}
										busBrandListJson.push(busBrand);
									}
									$(obj).autocomplete('option','source', busBrandListJson);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车座数', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		licenseNumberChoose :function(){
			var chooseLicense = $(".widget-main").find("input[name=LicenseNumber]");
			chooseLicense.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
						parents.next().find("input[name=driverName]").val("");
						parents.next().find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					parents.next().find("input[name=driverName]").val("");
					parents.next().find("input[name=DmobileNumber]").val("");
					$(this).parent().find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).parent().parent().find(".chooseSeatCount").val();
				var busBrand = $(this).parent().parent().find("input[name=needBusBrand]").val();
				if(busBrand){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"&brand="+busBrand+"",
						dateType:"json",
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var licenseList = JSON.parse(data.busList);
								if(licenseList && licenseList.length > 0){
									for(var i=0; i < licenseList.length; i++){
										licenseList[i].value = licenseList[i].licenseNumber;
									}
									$(obj).autocomplete('option','source', licenseList);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车辆品牌', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		driverChoose : function(){
			var chooseDriver = $(".widget-main").find("input[name=driverName]");
			chooseDriver.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					$(this).parent().parent().find("input[name=driverId]").val(ui.item.id).trigger('change');
					$(this).parent().parent().find("input[name=DmobileNumber]").val(ui.item.mobileNumber);
					$(this).nextAll('[name="driverId"]').val(ui.item.id);
				}
			}).unbind("click").click(function(){
				var obj = this;
				var busLicenseNumberId = $(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val();
				if(busLicenseNumberId){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getDrivers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"busId="+busLicenseNumberId+"",
						dateType:"json",
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var driverList = JSON.parse(data.driverList);
								if(driverList && driverList.length > 0){
									for(var i=0; i < driverList.length; i++){
										driverList[i].value = driverList[i].name;
									}
									$(obj).autocomplete('option','source', driverList);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车牌号', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		submitAddTripPlan : function (){
			var tab = "tab-arrange_plan-add-content";
			function getValue(name){
				var thisObj = $("#" + tab + " .newAddTripPlan").find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}
			if ($('.newAddTripPlanMain').find("input[name=executeTimeType]")[0].checked) {
				executeTimeType=0;
			};

			if ($('.newAddTripPlanMain').find("input[name=executeTimeType]")[1].checked) {
				executeTimeType=1;
			};

			var planTouristCount = parseInt(getValue("planTouristCount")),
			memberCount = parseInt($("#" + tab + " .tripPlanAllMemberCount").text());
			if(planTouristCount < memberCount){
				showMessageDialog($( "#confirm-dialog-message" ),"小组总人数不能大于计划人数",function(){
				});
			}else{
				// 表单校验
				var validator = rule.checkdCreateTripPlan($(".newAddTripPlanMain"));
				if (!validator.form()) { return; }
				
				var saveTripP = {
					"tripPlan": {
						"startTime": getValue("startTime"),
						"accompanyGuideName": getValue("accompanyGuideName"),
						"accompanyGuideMobile": getValue("accompanyGuideMobile"),
						"planTouristCount": getValue("planTouristCount"),
						"setPlacePosition": getValue("setPlacePosition"),
						"setPlaceTime": getValue("setPlaceTime"),
						"executeTimeType" :executeTimeType+"",
						"executeTime" : getValue("executeTime")

					},
					"lineProductId": getValue("lineProductId"),
					"driverId": getValue("driverId"),
					"guideId": getValue("AddTPchooseGuideId"),
					"busId": getValue("busLicenseNumberId"),
					"touristGroupId": []
				}
				var touristGroupList = $("#" + tab + " .newAddTripPlan .addTripPlanTouristTbody tr").length;
				$("#" + tab + " .newAddTripPlan .addTripPlanTouristTbody tr").each(function(i){
					saveTripP.touristGroupId[i] = {
						"id": $(this).attr("data-entity-id")
					}
				})
						
				var saveTripPlan = JSON.stringify(saveTripP);
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=addTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					data:"saveTripPlan="+encodeURIComponent(saveTripPlan),
					dataType: "json",
					type:"POST",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						var result = showDialog(data);
						layer.close(globalLoadingLayer);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								closeTab(menuKey+"-add");
								tripPlan.edited["add"] = "";
								tripPlan.listTripPlan(0,"","","","","","");
							});
						}
					}
				})
			}
		},
		submitUpdateTripPlan : function(isClose){
			var tab = "tab-arrange_plan-update-content";
			function getValue(name){
				var thisObj = $("#" + tab + " .updateTripPlan").find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}

			if ($('.newAddTripPlanMain').find("input[name=executeTimeType]")[0].checked) {
				executeTimeType=0;
			};

			if ($('.newAddTripPlanMain').find("input[name=executeTimeType]")[1].checked) {
				executeTimeType=1;
			};
			
			
	
			var planTouristCount = parseInt(getValue("planTouristCount")),
				memberCount = parseInt($("#" + tab + " .tripPlanAllMemberCount").text());
			if(planTouristCount < memberCount){
				showMessageDialog($( "#confirm-dialog-message" ),"小组总人数不能大于计划人数",function(){
				});
			}else{
				var validator = rule.checkdCreateTripPlan($(".updateTripPlan"));
				// 表单校验
				if (!validator.form()) { return; }
				


				//获取计划Id
				var tripPlanId = $("#" + tab + " .updateTripPlan input[name=tripPlanId]").val();
				var saveTripP = {
					"tripPlanId" : tripPlanId,
					"tripPlan": {
						"startTime": getValue("startTime"),
						"accompanyGuideName": getValue("accompanyGuideName"),
						"accompanyGuideMobile": getValue("accompanyGuideMobile"),
						"planTouristCount": getValue("planTouristCount"),
						"setPlacePosition": getValue("setPlacePosition"),
						"setPlaceTime": getValue("setPlaceTime"),
						"executeTimeType" : executeTimeType+"",
						 executeTime :getValue("executeTime")  


					},
					"lineProductId": getValue("lineProductId"),
					"driverId": getValue("driverId"),
					"guideId": getValue("AddTPchooseGuideId"),
					"busId": getValue("busLicenseNumberId"),
					"touristGroupId": []
				}
				var touristGroupList = $("#" + tab + " .updateTripPlan .updateTripPlanTouristTbody tr").length;
				$("#" + tab + " .updateTripPlan .updateTripPlanTouristTbody tr").each(function(i){
					saveTripP.touristGroupId[i] = {
						"id": $(this).attr("data-entity-id")
					}
				})
						
				var saveTripPlan = JSON.stringify(saveTripP);
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=updateTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					data:"saveTripPlan="+encodeURIComponent(saveTripPlan)+"",
					dataType: "json",
					type:"POST",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						var result = showDialog(data);
						layer.close(globalLoadingLayer);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								tripPlan.edited["update"] = "";
								if(isClose == 1){
									closeTab(menuKey+"-update");
									tripPlan.listTripPlan(0,"","","","","","");
								}
							});
						}
						
					}
				})
			}
		},
		save : function(saveType){
			if(saveType == "add"){
				console.log("saveadd");
				tripPlan.submitAddTripPlan();
			} else if(saveType == "update"){
				var validator = rule.checkdCreateTripPlan($(".updateTripPlan"));
				tripPlan.submitUpdateTripPlan(1);
			}
		},
		clearEdit : function(clearType){
			tripPlan.edited[clearType] = "";
		}
	}
	exports.listTripPlan = tripPlan.listTripPlan;
	exports.isEdited = tripPlan.isEdited;
	exports.save = tripPlan.save;
	exports.clearEdit = tripPlan.clearEdit;
});