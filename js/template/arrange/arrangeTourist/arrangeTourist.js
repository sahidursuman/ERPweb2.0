define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_tourist",
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list"),
		divideTemplate = require("./view/divide"),
		addTripPlanTemplate = require("./view/addTripPlan"),
		viewGroupTemplate = require("./view/viewGroup"),
		addGroupTemplate = require("./view/addGroup"),
		viewTripPlanTemplate = require("./view/viewTripPlan"),
		transferTemplate = require("./view/transfer"),
		editFeeTemplate = require("./view/editFee"),
		chooseMergeTemplate = require("./view/chooseMerge"),
		addMergePlanTemplate = require("./view/addMergePlan"),
		chooseTravelLineTemplate = require("./view/chooseTravelLine"),
		updateTripPlanTemplate = require("./view/updateTripPlan"),
		viewPlanTemplate = require("./view/viewPlan"),
		addMergePlanTemplateLayer = "",
		chooseMergeLayer = "",
		//-arrange_tourist-addTripPlan
		checkTable="arrange_tourist-addTripPlan",
		tabId = "tab-"+menuKey+"-content";
	var arrangeTourist = {
		searchData : {
			lineProductId : "",
			startTime : ""
		},
		//list Main
		listArrangeTouristMain:function(){
			$.ajax({
				url:""+APP_ROOT+"back/lineProduct.do?method=findLineProductList&token="+$.cookie("token")+"&menuKey=resource_lineProduct&operation=view",
				type:"POST",
				data:"sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					console.log(data);
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.lineProductList = JSON.parse(data.lineProductList);
						var html = listMainTemplate(data);
						addTab(menuKey,"分团转客",html);
						
						arrangeTourist.touristGroupMergeData = {
								touristGroupMergeList : []
						}
						arrangeTourist.listArrangeTourist(0,"","");
						//开始并团按钮绑定事件
						$("#"+tabId+" .arrangeTouristMain .arrangeTouristMergeList .btn-start-touristGroup-merge").click(arrangeTourist.startTouristGroupMerge);
					}
				}
			});
		},
		//list页面
		listArrangeTourist:function(page,lineProductId,startTime){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=arrangeTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&lineProductId="+lineProductId+"&startTime="+startTime+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = listTemplate(data);
						$("#"+tabId+" .arrangeTouristMain .arrangeTouristList").html(html);
						$("#"+tabId+" .arrangeTouristMain .date-picker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
						
						//给并团checkbox绑定事件
						$("#"+tabId+" .arrangeTouristMain .arrangeTouristList .touristGroupMergeCheckBox").click(arrangeTourist.addTouristGroupMerge);
						
						//给分团按钮绑定事件
						$("#"+tabId+" .arrangeTouristMain .btn-divide").click(function(){
							var lineProductId = $(this).attr("data-entity-id");
							var startTime = $(this).attr("data-entity-startTime");
							arrangeTourist.divideTourist(lineProductId,startTime);
						});
						//给转客按钮绑定事件
						$("#"+tabId+" .arrangeTouristMain .btn-transfer").click(function(){
							var lineProductId = $(this).attr("data-entity-id");
							var startTime = $(this).attr("data-entity-startTime");
							arrangeTourist.transferTourist(lineProductId,startTime);
						});
						//给搜索按钮绑定事件
						$("#"+tabId+" .arrangeTouristMain .btn-arrangeTourist-search").click(function(){
							arrangeTourist.searchData = {
									lineProductId : $("#tab-"+menuKey+"-content .arrangeTouristMain select[name=lineProductId]").val(),
									startTime : $("#tab-"+menuKey+"-content .arrangeTouristMain input[name=startTime]").val()
							}
							arrangeTourist.listArrangeTourist(0,arrangeTourist.searchData.lineProductId,arrangeTourist.searchData.startTime);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .arrangeTouristMain .pageMode a.first").click(function(){
							arrangeTourist.listArrangeTourist(0,arrangeTourist.searchData.lineProductId,arrangeTourist.searchData.startTime);
						});
						//分页--上一页事件
						$("#"+tabId+" .arrangeTouristMain .pageMode a.previous").click(function(){	
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							arrangeTourist.listArrangeTourist(previous,arrangeTourist.searchData.lineProductId,arrangeTourist.searchData.startTime);
						});
						//分页--下一页事件
						$("#"+tabId+" .arrangeTouristMain .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							arrangeTourist.listArrangeTourist(next,arrangeTourist.searchData.lineProductId,arrangeTourist.searchData.startTime);
						});
						//分页--尾页事件
						$("#"+tabId+" .arrangeTouristMain .pageMode a.last").click(function(){
							arrangeTourist.listArrangeTourist(data.totalPage == 0 ? 0 : data.totalPage-1,arrangeTourist.searchData.lineProductId,arrangeTourist.searchData.startTime);
						});
					}
				}
			});
		},
		//分团操作
		divideTourist:function(lineProductId,startTime){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"type=1"+"&lineProductId="+lineProductId+"&startTime="+startTime+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);

					var result = showDialog(data);
					if(result){
						data.touristGroupList = JSON.parse(data.touristGroupList);
						data.lineProduct = JSON.parse(data.lineProduct);
						var html = divideTemplate(data);
						addTab(menuKey+"-divide","分团操作",html);
						var choose_lineProductId = data.lineProduct.id;
						var choose_startTime = data.lineProduct.startTime;
						//绑定table的全选按钮事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .all .mainCheckBox").click(function(){
							var is_checked = $(this).is(':checked');
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
								if(is_checked){
									$(this).find(".touristGroupCheckBox").prop("checked",true);
								}
								else{
									$(this).find(".touristGroupCheckBox").prop("checked",false);
								}
							});
							calChoosenAdultAndChildCount();
						});
						
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr .touristGroupCheckBox").click(function(){
							calChoosenAdultAndChildCount();
						});
						
						function calChoosenAdultAndChildCount(){
							var sumAdultCount = 0;
							var sumChildCount = 0;
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
								if($(this).find(".touristGroupCheckBox").is(":checked")){
									sumAdultCount += parseInt($(this).attr("data-entity-adultCount"));
									sumChildCount += parseInt($(this).attr("data-entity-childCount"));
								}
							});
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .choosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
						}
						
						//绑定查看游客成员列表按钮事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .groupView").unbind().click(arrangeTourist.viewTouristGroup);
						//给生成计划绑定事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .btn-createTripPlan").off().on("click",{tab:"tab-"+menuKey+"-divide-content"},arrangeTourist.generationPlan);
						//分团操作中 选择计划按钮事件绑定
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .btn-chooseTripPlan").off().on("click",{choose_lineProductId:choose_lineProductId,choose_startTime:choose_startTime},arrangeTourist.choosePlan);
					}
				}
			});
		},
		//转客操作
		transferTourist:function(lineProductId,startTime){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"type=2"+"&lineProductId="+lineProductId+"&startTime="+startTime+"",
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
						var html = transferTemplate(data);
						addTab(menuKey+"-transfer","转客操作",html);
						//查看游客小组
						$(".transferTouristMain .viewTouristGroup_transfer").click(arrangeTourist.viewTouristGroup);
						//绑定table的全选按钮事件
						$(".transferTouristMain .mainCheckBox").click(function(){
							var is_checked = $(this).is(':checked');
							$(".transferTouristMain .transferTouristGroupTbody tr").each(function(){
								if(is_checked){
									$(this).find(".transferCheckBox").prop("checked",true);
								}
								else{
									$(this).find(".transferCheckBox").prop("checked",false);
								}
							});
							choosenAdultAndChildCount();
						});
						$("#tab-"+menuKey+"-transfer-content .transferTouristMain .all tbody tr .transferCheckBox").click(function(){
							choosenAdultAndChildCount();
						});
						
						function choosenAdultAndChildCount(){
							var sumAdultCount = 0;
							var sumChildCount = 0;
							$("#tab-"+menuKey+"-transfer-content .transferTouristMain .all tbody tr").each(function(){
								if($(this).find(".transferCheckBox").is(":checked")){
									sumAdultCount += parseInt($(this).attr("data-entity-adultCount"));
									sumChildCount += parseInt($(this).attr("data-entity-childCount"));
								}
							});
							$("#tab-"+menuKey+"-transfer-content .transferTouristMain .choosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
						}
						var lineProductIdFee = lineProductId;
						var startTimeFee = startTime;
						//初始化 组社团数据
						arrangeTourist.getPartnerAgencyList($(".transferTouristMain select[name=toPartnerAgency"));
						//绑定编辑费用点击事件
						$(".transferTouristMain .editFee").click(arrangeTourist.transferFee);
						//提交转客操作事件绑定
						$(".transferTouristMain .btn-saveTransfer").click(arrangeTourist.saveTransfer);
						//取消转客事件绑定
						$(".transferTouristMain .btn-cancelTransfer").click(function(){
							closeTab(menuKey+"-transfer");
						})
					}
				}
			});
		},
		//并团操作函数
		addTouristGroupMerge:function(){
			var $merge = $("#"+tabId+" .arrangeTouristMain .arrangeTouristMergeList .list");
			var $parents = $(this).parent().parent().parent();
			var lineProductId = $parents.attr("data-entity-id");
			var startTime = $parents.attr("data-entity-startTime");
			var days = $parents.attr("data-entity-days");
			var lineProductName = $parents.attr("data-entity-name");
			var lineProductType = $parents.attr("data-entity-type");
			if($(this).is(":checked")){
				if($merge.find(".btn-"+lineProductId+"-"+startTime+"").length == 0){
					var button = '<button class="btn btn-white btn-default btn-round btn-'+lineProductId+'-'+startTime+'" style="margin-bottom:10px;margin-right:10px">'+
						'【'+lineProductName+'】 类别：'+lineProductType+'；出游日期：'+startTime+'；天数：'+days+'天'+
						'<i class="ace-icon fa fa-times icon-on-right red2"></i>'+
					'</button>';
					$merge.prepend(button);
					$merge.find('.btn-'+lineProductId+'-'+startTime+'').click(function(){
						arrangeTourist.bindRemoveTouristGroupMerge($merge,lineProductId,startTime)
					});
					var touristGroupMerge = {
						lineProductId : lineProductId,
						startTime : startTime,
						days : days,
						lineProductName : lineProductName,
						lineProductType : lineProductType
					}
					arrangeTourist.touristGroupMergeData.touristGroupMergeList.push(touristGroupMerge);
				}
				else{
					showMessageDialog($( "#confirm-dialog-message" ),"该游客组已经被加入过并团列表了");
				}
			}
			else{
				arrangeTourist.removeTouristGroupMergeData($merge,lineProductId,startTime);
			}
		},
		//生成计划函数
		generationPlan :function(event){
			var tab = event.data.tab;
			var idJson = [];
			$("#"+tab+" .divideTouristMain .all tbody tr").each(function(){
				if($(this).find(".touristGroupCheckBox").is(":checked")){
					var id = {
						id : $(this).attr("data-entity-id")
					};
					idJson.push(id);
				}
			});
			idJson = JSON.stringify(idJson);
			console.log(idJson.length);
			if(idJson != "[]" && idJson.length > 2){
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=generationTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"touristGroupId="+encodeURIComponent(idJson)+"",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
						data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
						data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
						data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
						data.addTripPlan.driver = JSON.parse(data.addTripPlan.driver);
						data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
						data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
						var result = showDialog(data);
						if(result){
							var validatorCreateTripPlan;
							var html = addTripPlanTemplate(data);    
							//判断页面是否存在
							if($("#" +"tab-"+checkTable+"-content").length > 0){  
								 if(arrangeTourist.edited){//是否编辑
										addTab(menuKey+"-addTripPlan","生成计划");
										showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
										 validatorCreateTripPlan = rule.checkdCreateTripPlan($('.addTripPlanMainForm'));  
										 if (!validatorCreateTripPlan.form()) { return; }
										 arrangeTourist.saveAddTripPlan(tab,"addTripPlanMain",1,"","addTripPlanTouristTbody",validatorCreateTripPlan);
										 arrangeTourist.edited = false;  
										 addTab(menuKey+"-addTripPlan","生成计划",html);
										 validator = rule.checkdCreateTripPlan($('.addTripPlanMainForm'));   
									 },function(){
										 addTab(menuKey+"-addTripPlan","生成计划",html);
										 validatorCreateTripPlan = rule.checkdCreateTripPlan($('.addTripPlanMainForm'));        
									 });
									 }else{
								    	addTab(menuKey+"-addTripPlan","生成计划",html);
								    	validatorCreateTripPlan = rule.checkdCreateTripPlan($('.addTripPlanMainForm'));
									 }
								
							}else{
								addTab(menuKey+"-addTripPlan","生成计划",html);
								validatorCreateTripPlan = rule.checkdCreateTripPlan($('.addTripPlanMainForm'));
								//监听是否改变页面内容
								$("#" +"tab-"+checkTable+"-content").on("change",function(){
									arrangeTourist.edited = true; 
								});
							};
							
							
							
							
//							var html = addTripPlanTemplate(data);
//							addTab(menuKey+"-addTripPlan","生成计划",html);
//							
//						    var validatorCreateTripPlan=rule.checkdCreateTripPlan($(".addTripPlanMainForm"));  
							
							var tab = "tab-arrange_tourist-addTripPlan-content";
							//集合时间   时间控件
					    	arrangeTourist.dateTimePicker();
							//查看旅游小组成员
							$("#"+tab+" .addTripPlanMain .addTripPlanView").unbind().click(arrangeTourist.viewTouristGroup);
							//删除小组   addTripPlanViewDelete
							$("#"+tab+" .addTripPlanMain .addTripPlanDelete").click(arrangeTourist.delTrouristGroup);
							//添加游客小组 （多选）
							$("#"+tab+" .addTripPlanMain .addTouristGroup").click(arrangeTourist.addTouristGroup);
							//拉下查询
							arrangeTourist.seatCountChoose();
							arrangeTourist.brandChoose();
							arrangeTourist.licenseNumberChoose();
							arrangeTourist.driverChoose();
							arrangeTourist.guideChoose();
							//小组序号
							arrangeTourist.MenberNumber("addTripPlanTouristTbody");
							//取消生成计划   btn-cancelTripPlan
							$("#"+tab+" .addTripPlanMain .btn-cancelTripPlan").click(function(){
								closeTab(menuKey+"-addTripPlan");
							})
							//保存生成计划
							arrangeTourist.saveAddTripPlan(tab,"addTripPlanMain",1,"","addTripPlanTouristTbody",validatorCreateTripPlan);
						}
					}
				});
			}else{
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
						$(this).find("p").text("请选择游客小组");
					}
				});
			}
		},
		getPartnerAgencyList:function(obj,partnerAId){
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAgencyByOtherTravelAgency&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
				type:"POST",
				dataType:"json",
				success:function(data){
					var html = "<option value=''>未选择</option>";
					var partnerAgencyList = JSON.parse(data.partnerAgencyList);
					if(partnerAgencyList != null && partnerAgencyList.length > 0){ 
						for(var i=0;i<partnerAgencyList.length;i++){
							if (partnerAId != null && partnerAgencyList[i].id == partnerAId) {
								html += "<option selected=\"selected\" value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].travelAgencyName+"</option>";
							} else {
								html += "<option value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].travelAgencyName+"</option>";
							}
						}
						$(obj).html(html);
					}
			    	//给组社团select绑定事件
			    	$(".transferTouristMain select[name=toPartnerAgency]").change(function(){
			    		var partnerAId = $(this).val();
			    			for(var i=0;i<partnerAgencyList.length;i++){
							if (partnerAId == partnerAgencyList[i].id && partnerAId != "") {
								$(".transferTouristMain input[name=toPartnerAgency]").val(partnerAgencyList[i].managerName);
							} else {
								}
						} 
			    	});
				}
			})
		},
		touristGroupMergeData:{
			touristGroupMergeList:[]
		},
		//选择计划函数
		choosePlan :function(event){
			var touristGroupIdJson = [],
				choose_lineProductId = event.data.choose_lineProductId,
				choose_startTime = event.data.choose_startTime;
			$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
				if($(this).find(".touristGroupCheckBox").is(":checked")){
					var id = {
						id : $(this).attr("data-entity-id")
					};
					touristGroupIdJson.push(id);
				}
			});
			touristGroupIdJson = JSON.stringify(touristGroupIdJson);

			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getTripPlanList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"lineProductId="+choose_lineProductId+"&startTime="+choose_startTime+"&touristGroupIdJson="+encodeURIComponent(touristGroupIdJson)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result =showDialog(data);
					if(result){
				    	data.lineProduct = JSON.parse(data.lineProduct);
				    	data.tripPlanList = JSON.parse(data.tripPlanList);
						var html = viewTripPlanTemplate(data);
						var viewTripPlanLayer = layer.open({
						    type: 1,
						    title:"选择计划",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['95%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//chooseTripPlanTbody
						    	//saveTouristGroupToTripPlan 方法名
						    	$(".groupView").click(function(){
						    		var id = $(this).attr("data-entity-id");
						    		arrangeTourist.viewTripPlan(id);
						    	})
						    	$(".chooseTripPlanMain .btn-chooseTripPlan").click(function(){
						    		var tripPlanId = "";
						    		$(".chooseTripPlanMain .chooseTripPlanTbody tr").each(function(i){
						    			if($(".chooseTripPlanMain .chooseTripPlanTbody tr").eq(i).find(".ridioCheck").is(":checked")){
											tripPlanId = $(".chooseTripPlanMain .chooseTripPlanTbody tr").eq(i).attr("data-entity-id");
										}
						    		})
							    	$.ajax({
							    		url:""+APP_ROOT+"back/tripPlan.do?method=saveTouristGroupToTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
										type:"POST",
										data:"tripPlanId="+tripPlanId+"",
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												showMessageDialog($( "#confirm-dialog-message" ),"分团成功",function(){
													layer.close(viewTripPlanLayer);
													closeTab(menuKey+"-divide");
													arrangeTourist.listArrangeTouristMain();
												});
											}
										}
							    	})
						    	})
						    }
						})
					}
				}
			})	
		},
		//提交转客函数
		saveTransfer :function(){
			var touristGroupId = [];
			$(".transferTouristMain .transferTouristGroupTbody tr").each(function(){
				if($(this).find(".transferCheckBox").is(":checked")==true){
					var id = {
							id : $(this).attr("data-entity-id")
						};
					touristGroupId.push(id);
				}
			})
			touristGroupId = JSON.stringify(touristGroupId);
			
			var transferTravelAgencyId = $(".transferTouristMain select[name=toPartnerAgency]").val();
			console.log(transferTravelAgencyId);
			$.ajax({
				url:""+APP_ROOT+"back/transTourist.do?method=saveTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
				data:"partnerAgencyId="+transferTravelAgencyId+"&touristGroupId="+encodeURIComponent(touristGroupId)+"",
				dataType:"json",
				type:"POST",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
		        	if(result){
		        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							$(".tab-arrange_tourist-transfer i.tab-close").trigger("click");
							window.open(APP_ROOT+"back/transTourist.do?method=exportTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&idJson="+touristGroupId+"");
							arrangeTourist.listArrangeTouristMain();
		        		})
		        	}
				}
			})
		},
		//集合时间控件
		dateTimePicker :function(){
			$(".dataTimePicker").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		//时间控件
		datePicker :function(){
			$(".datePicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		bindRemoveTouristGroupMerge:function($merge,lineProductId,startTime){
			var obj = $(this);
			var dialog = $( "#confirm-dialog-message" ).removeClass('hide').dialog({
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
							obj.remove();
							$( this ).dialog( "close" );
							arrangeTourist.removeTouristGroupMergeData($merge,lineProductId,startTime);
							console.log(arrangeTourist.touristGroupMergeData);
						} 
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确认要从并团列表中移除该条游客小组？");
				}
			});
		},
		removeTouristGroupMergeData:function($merge,lineProductId,startTime){
			$merge.find(".btn-"+lineProductId+"-"+startTime+"").remove();
			$("#"+tabId+" .arrangeTouristMain .arrangeTouristList .tr-"+lineProductId+"-"+startTime+" .touristGroupMergeCheckBox").prop("checked",false);
			var touristGroupMergeList = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
			if(touristGroupMergeList.length > 0){
				for(var i=0;i<touristGroupMergeList.length;i++){
					if(touristGroupMergeList[i].lineProductId == lineProductId && touristGroupMergeList[i].startTime == startTime){
						touristGroupMergeList.splice(i,1);
						break;
					}
				}
			}
		},
		startTouristGroupMerge:function(){
			var data = arrangeTourist.touristGroupMergeData;
			if(data.touristGroupMergeList.length > 0){
				var html = chooseMergeTemplate(data);
				var chooseMergeLayer = layer.open({
				    type: 1,
				    title:"选择安排模板",
				    skin: 'layui-layer-rim', //加上边框
				    area: ['70%', '70%'], //宽高
				    zIndex:1028,
				    content: html,
				    success:function(){
				    	$(".chooseMerge .btn-mergeAddPlan").click(function(){
				    		var lineProductId = "";
				    		var startTime = "";
				    		$(".chooseMerge .chooseMergeTbody tr").each(function(i){
				    			if($(this).find(".ridioCheck").is(":checked")){
				    				lineProductId = $(this).attr("data-entity-id");
									startTime = $(this).attr("data-entity-startTime");
								}
				    		})
				    		var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				    		mergeDataJson = JSON.stringify(mergeDataJson);
				    		if(lineProductId !=null && lineProductId.length > 0){
				    			$.ajax({
						    		url:""+APP_ROOT+"back/tripPlan.do?method=addTripPlanByMergeData&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
									type:"POST",
									data:"lineProductId="+lineProductId+"&startTime="+startTime+"&mergeDataJson="+encodeURIComponent(mergeDataJson)+"",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										console.log(data);
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											layer.close(chooseMergeLayer);
											var validatorCreateTripPlan;
											data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
											data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
											data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
											data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
											data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
											data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
											var html = addMergePlanTemplate(data);
											
											addTab(menuKey+"-mergeAddTripPlan","并团-生成计划",html)
											var tab = "tab-arrange_tourist-mergeAddTripPlan-content";
											
									    	//生成计划验证  
									    	validatorCreateTripPlan=rule.checkdCreateTripPlan($("#"+tab+" .addTripPlanMain"));        
									    	
									    	//小组序号自动
											arrangeTourist.MenberNumber("addTripPlanTouristTbody");
											//出游日期控件
											arrangeTourist.datePicker();
											//集合时间   时间控件
											arrangeTourist.dateTimePicker();
									    	//查看旅游小组成员
											$("#"+tab+" .addMergePlan .addTripPlanView").click(arrangeTourist.viewTouristGroup);
											//删除小组  
											$("#"+tab+" .addMergePlan .addTripPlanDelete").click(arrangeTourist.delTrouristGroup);
											//拉下查询
											arrangeTourist.seatCountChoose();
											arrangeTourist.brandChoose();
											arrangeTourist.licenseNumberChoose();
											arrangeTourist.driverChoose();
											arrangeTourist.guideChoose();
											//关闭生成计划 
											$("#"+tab+" .addMergePlan .btn-cancelTripPlan").click(function(){
												closeTab(menuKey+"-mergeAddTripPlan");
											})
											   
											
											//保存生成计划
											arrangeTourist.saveAddTripPlan(tab,"addMergePlan",0,"arrange_tourist-mergeAddTripPlan","addTripPlanTouristTbody",validatorCreateTripPlan);
										}
									}
						    	})
				    		}else{
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
										$(this).find("p").text("请选择线路产品");
									}
								});
				    		}
				    	})
				    	$(".chooseMerge .btn-chooseMergePlan").click(function(){
				    		var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				    		mergeDataJson = JSON.stringify(mergeDataJson);
				    		$.ajax({
					    		url:""+APP_ROOT+"back/tripPlan.do?method=findNoStartTripPlanList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									console.log(data);
									data.tripPlanList = JSON.parse(data.tripPlanList);
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										var html =chooseTravelLineTemplate(data);
										var chooseTravelLinelayer =layer.open({
							    			type: 1,
										    title:"选择计划",
										    skin: 'layui-layer-rim', //加上边框
										    area: ['85%', '80%'], //宽高
										    zIndex:1029,
										    content: html,
										    success: function(data) {
										    	
										    	$(".groupView").click(function(){
										    		var id = $(this).attr("data-entity-id");
										    		arrangeTourist.viewTripPlan(id);
										    	})
										    	
										    	var $obj = $(".chooseMergeTripPlan");//chooseTripPlanTbody
										    	var tripPlanId = "";
										    	$obj.find(".btn-chooseMergeTripPlan").click(function(){
										    		var chooseMergeTr = $obj.find(".chooseTripPlanTbody tr");
										    		chooseMergeTr.each(function(i){
										    			if(chooseMergeTr.eq(i).find("input[name=form-field-radio]").is(":checked")==true){
										    				tripPlanId = chooseMergeTr.eq(i).attr("data-entity-id");
										    			}
										    		})
										    		console.log(tripPlanId);
										    		console.log(mergeDataJson);
										    		$.ajax({
										    			url:""+APP_ROOT+"back/tripPlan.do?method=chooseTripPlanByMerge&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
														data:"tripPlanId="+tripPlanId+"&mergeDataJson="+encodeURIComponent(mergeDataJson)+"",
														type:"POST",
										    			dataType:"json",
														beforeSend:function(){
															globalLoadingLayer = openLoadingLayer();
														},
														success:function(data){
															layer.close(globalLoadingLayer);
															var result = showDialog(data);
															if(result){
																layer.close(chooseTravelLinelayer);
																layer.close(chooseMergeLayer);
																arrangeTourist.updateTripPlan(data);
//																showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
//																	layer.close(chooseTravelLinelayer);
//																	layer.close(chooseMergeLayer);
//																	arrangeTourist.listArrangeTouristMain();
//																})
															}
														}
										    		})		
										    	})
										    }
									    });
									}
								}
				    		})
				    	})
				    }
				})
			}
			else{
				showMessageDialog($( "#confirm-dialog-message" ),"你还没有勾选任何需要并团的游客小组");
			}
		},
		viewTouristGroup :function(){
			var id = $(this).attr("data-entity-id");
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
						    area: ['80%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	
						    }
						})
					}
				}
				
			})
		},
		MenberNumber :function(className){
			$("."+className+" tr").each(function(i){
					$(this).children().eq(0).text(i+1);
			})
		},
		//添加游客小组函数
		addTouristGroup :function(){
			var lineProductId = $(".addTripPlanMain input[name=lineProductId]").val();
			var startTime = $(".addTripPlanMain input[name=startTime]").val();
			
			var excludeIdJson = [];
			$(".addTripPlanMain .addTripPlanTouristTbody tr").each(function(i){
				var id = {
						id : $(this).attr("data-entity-id")
					};
				excludeIdJson.push(id);
			})
			excludeIdJson = JSON.stringify(excludeIdJson);
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
						    area: ['95%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//选择游客小组并提交（多选）
						    	//绑定table的全选按钮事件
								$(".addTouristGroupList .all .addMainCheckBox").click(function(){
									var is_checked = $(this).is(':checked');
									$(".addTouristGroupList .all tbody tr").each(function(){
										if(is_checked){
											$(this).find(".touristGroupCheckBox").prop("checked",true);
										}
										else{
											$(this).find(".touristGroupCheckBox").prop("checked",false);
										}
									});
								});
								//查看添加小组游客
								$(".addTouristGroupList .addGroupView").click(arrangeTourist.viewTouristGroup);
								//提交按钮事件绑定
								$(".addTouristGroupList .btn-submit-addtravelLine").click(function(){
									var addGroupIdJson = "[";
									var addGListLength = $(".addTouristGroupList .all tbody tr").find("input:checked").length;
									$(".addTouristGroupList .all tbody tr").find("input:checked").each(function(i){
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
												"<td>"+addGroupIdJson[i].peopleCount+"</td>"+
												"<td>"+addGroupIdJson[i].remark+"</td>"+
												"<td>"+
												"<div class=\"hidden-sm hidden-xs btn-group\">"+
												"<button data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"btn btn-xs btn-success addTripPlanView\">"+
													"<i class=\"ace-icon fa fa-search-plus bigger-120\"></i>"+
												"</button>"+
												"<button data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"btn btn-xs btn-danger addTripPlanDelete\">"+
													"<i class=\"ace-icon fa fa-trash-o bigger-120\"></i>"+
												"</button>"+
												"</div>"+
												"</td>"+
											"</tr>";
								    		$(".addTripPlanMain .addTripPlanTouristTbody").append(html);
										}
									}
									layer.close(addGroupTemplateLayer);
									arrangeTourist.MenberNumber("addTripPlanTouristTbody");
									$(".addTripPlanMain .addTripPlanDelete").click(arrangeTourist.delTrouristGroup);
									$(".addTripPlanMain .addTripPlanView").click(arrangeTourist.viewTouristGroup);
						    	})
						    }
						})
					}
				}
			})
		},
		delTrouristGroup :function(){
			var obj = $(this);
			var id = $(this).attr("data-entity-id");
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
							obj.parent().parent().parent().remove();
							arrangeTourist.MenberNumber("addTripPlanTouristTbody");
							arrangeTourist.MenberNumber("updateTripPlanTouristTbody");
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要移除该小组吗？");
				}
			});
		},
		guideChoose :function(){
			//导游autocomplete
			$(".addTripPlanMain .AddTPchooseGuide").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
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
		busChoose : function(){
		//给车辆绑定autocomplete事件
			chooseBusLicenseNumber = $(".addTripPlanMain .chooseBusLicenseNumber").autocomplete({
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
								var d = JSON.parse(data.bus), objParent = $(".addTripPlanMain");
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
				var busCompanyId = $(".addTripPlanMain").find("input[name=busCompanyId]").val();
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
		driverChoose : function(){
			//给司机绑定autocomplete事件
			chooseDriver = $(".addTripPlanMain .chooseDriver").autocomplete({
				minLength:0,
				select:function(event,ui){
					//获得busCompanyId，到后台查询driver相应信息
					$.ajax({
						url:""+APP_ROOT+"back/tripPlan.do?method=getDriverById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {

	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.driverNumber), objParent = $(".addTripPlanMain");
								objParent.find("input[name=driverId]").val(d.id).trigger('change');
								objParent.find("input[name=DmobileNumber]").val(d.mobileNumber);
							}
	                    }
	                 });
					
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent().parent();
						objParent.find("input[name=driverId]").val("");
						objParent.find("input[name=DmobileNumber]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(".addTripPlanMain").find("input[name=busCompanyId]").val();
				if(busCompanyId){
					$.ajax({
						url:""+APP_ROOT+"back/tripPlan.do?method=getDriverBybusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                    dataType: "json",
	                    data:"id="+busCompanyId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var driverList = JSON.parse(data.driverList);
								if(driverList != null && driverList.length){
									for(var i=0;i<driverList.length;i++){
										driverList[i].value = driverList[i].name;
									}
								}
								$(objBus).autocomplete('option','source', driverList);
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
				
			});
		},
		busCompanyChoose : function(){
			//车队-车牌autocomplete  
			var chooseBusLicenseNumber= $(".addTripPlanMain .chooseBusCompany");
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
		//查看计划    arrangeTourist.viewTripPlan(id);
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
						var html = viewPlanTemplate(data);
						//addTab(menuKey+"-view","查看发团计划",html);
						
						var viewPlanLayer = layer.open({
						    type: 1,
						    title:"查看发团计划",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['95%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	
								var tab = "tab-arrange_plan-view-content";
						    	arrangeTourist.MenberNumber("addTripPlanTouristTbody");
						    	//查看计划中 查看游客小组
						    	$(".viewTripPlan .viewTripPlanView").click(arrangeTourist.viewTouristGroup)
						    }
						})
					}
				}
			});
		},
		//填写费用信息函数
		transferFee :function(){
			var id = $(this).parent().parent().attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transTourist.do?method=getTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var touristGroupInfo = JSON.parse(data.touristGroup);
						data.touristGroup = touristGroupInfo;
						var html = editFeeTemplate(data);
						var updateTouristGroupLayer = layer.open({
						    type: 1,
						    title:"编辑费用信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['95%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var feeId = "";//data.touristGroupTransferFeeSet.id;
						    	//给新增费用项绑定事件
						    	$(".editFeeMainForm .newEditFee").click(function(){
						    		var html=
					    			"<tr>"+
					    			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
					    			"<td><input  name=\"describe\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					    			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-12  no-padding-right costCount\" /></td>"+
					    			"<td><input  name=\"otherPrice\" type=\"text\" class=\"col-sm-12  no-padding-right costPrice\" /></td>"+
					    			"<td><button class=\"btn btn-xs btn-danger addCost-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
					    			"</tr>";
						    		$(".editFeeMainForm .editFeeTbody").append(html);
						    		
						    		//给费用清单列表删除按钮绑定事件
							    	$(".editFeeTbody .addCost-delete").click(function(){
					    				$(this).parent().parent().fadeOut(function(){
					    					$(this).remove();
							    			PayMoneyF();
					    				})
						    			PayMoneyF();
						    			$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
											PayMoneyF();
										})
										$(".editFeeMainForm .editFeeTbody").keyup(function(){
											PayMoneyF();
										})
										$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
											PayMoneyF();
										})
							    	});
						    		$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
										PayMoneyF();
									})
									PayMoneyF();
						    	});
						    	//费用清单删除列表事件
						    	$(".editFeeTbody .addCost-delete").click(function(){
				    				var tr =$(this).parent().parent();
					    			var costListTrId = tr.attr("data-entity-id");
					    			if(costListTrId!=null && costListTrId!=""){
					    				tr.addClass("deleted");
					    				tr.fadeOut(function(){
					    					$(this).hide();
							    			PayMoneyF();
					    				})
					    			}
					    			PayMoneyF();
					    			$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
										PayMoneyF();
									})
						    	});
						    	
						    	//新增费用项目  算应收
								$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
									PayMoneyF();
								})
								$(".editFeeMainForm .editFeeTbody").keyup(function(){
									PayMoneyF();
								})
								$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
									PayMoneyF();
								})
								
								function PayMoneyF(){
									var needPayMoney = 0;
									var needPayAllM = $(".form-group input[name=needPayMoney]");
									var payedM = $(".form-group input[name=payedMoney]"); 
									var currentNeedPayM = $(".form-group input[name=currentNeedPayMoney]"); 
									var assC_tr = $(".editFeeMainForm .editFeeTbody").find("tr:not(.deleted)");
									needPayMoney=0;
									for(i=0;i<assC_tr.length;i++){
										var a =parseFloat(assC_tr.eq(i).find(".costCount").val());
										var b =parseFloat(assC_tr.eq(i).find(".costPrice").val());
										
											if(assC_tr.eq(i).find("option:selected").val()==0){
												a=a;
											}
											else if(assC_tr.eq(i).find("option:selected").val()==1){
												a=-a;
											}
										
										
										if(isNaN(a)){
											a = 0;
										}
										if(isNaN(b)){
											b =0;
										}
										needPayMoney += a*b;
									}//应收-已收=现收
									needPayAllM.val(needPayMoney);
									var payedMN =parseFloat(payedM.val());
									if(isNaN(payedMN)){
										payedMN = 0;
									}
									var currentNPM = needPayMoney-payedMN;
									currentNeedPayM.val(currentNPM);
								}  
								//转客费用提交按钮  
								$(".editFeeMain .btn-updateFee").click(function(){
									var form = $(".editFeeMain .editFeeMainForm").serialize();
									var touristGroup = {
											"id" : id,
											"transRemark" : $(".editFeeMain input[name=remark]").val() || "无",
											"transAdultPrice" : $(".editFeeMain input[name=adultTransferMoney]").val() || 0,
											"transChildPrice" : $(".editFeeMain input[name=childTransferMoney]").val() || 0,
											"transPayedMoney" : $(".editFeeMain input[name=payedMoney]").val() || 0,
											"transNeedPayAllMoney":$(".editFeeMain input[name=needPayMoney]").val() || 0,
									};
									var otherFeeList = "[";
									var otherFeeListLength = $(".editFeeMain .editFeeTbody tr:not(.deleted)").length;
									 $(".editFeeMain .editFeeTbody tr:not(.deleted)").each(function(i){
										var id = $(this).attr("data-entity-id");
										var type = $(this).find("[name=type]").attr("value");
										var discribe = $(this).find("input[name=describe]").val();
										var otherPrice = $(this).find("input[name=otherPrice]").val();
										var count = $(this).find("input[name=count]").val();
										if(i>1){
											if (id != null && id != "") {
								    			if(i==(otherFeeListLength-1)){
								    				otherFeeList+="{\"id\":\""+id+"\",\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"}";
								    			}else{
								    				otherFeeList+="{\"id\":\""+id+"\",\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"},"
								    			}
							    			}
							    			else{
							    				if(i==(otherFeeListLength-1)){
							    					otherFeeList+="{\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"}";
								    			}else{
								    				otherFeeList+="{\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"},"
								    			}
							    			}
										}
									})
									otherFeeList += "]";
									
									/*$(".editFeeMain .editFeeTbody tr:not(.deleted)").each(function(i){
										if(i>1){
											otherFeeList[i] = {
													"id" : $(this).attr("data-entity-id"),
													"type" : $(this).find("option:selected").val(),
													"discribe" : $(this).find("input[name=describe]").val(),
													"otherPrice" : $(this).find("input[name=otherPrice]").val(),
													"count" : $(this).find("input[name=count]").val()
											}
										}
									})*/
									var otherFeeListDel = [];
									$(".editFeeMain .editFeeTbody tr.deleted").each(function(i){
										otherFeeListDel[i] = {
												"id" : $(this).attr("data-entity-id")
										}
									})
									touristGroup = JSON.stringify(touristGroup);
									otherFeeListDel = JSON.stringify(otherFeeListDel);
									$.ajax({
										url:""+APP_ROOT+"back/transTourist.do?method=saveTransFee&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										data:"touristGroup="+encodeURIComponent(touristGroup)+"&otherFeeList="+encodeURIComponent(otherFeeList)+"&otherFeeListDel="+encodeURIComponent(otherFeeListDel),
										type:"POST",
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
								        	if(result){
								        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
												layer.close(updateTouristGroupLayer);
								        			if(data.success==1){
								        				var transferTr = $(".transferTouristMain .transferTouristGroupTbody tr");
								        				transferTr.each(function(i){
								        					var id = transferTr.eq(i).attr("data-entity-id");
								        					if(id == data.id){
								        						transferTr.eq(i).find("td:last-child").html('<i class ="ace-icon fa fa-check"></i>已填写');
								        						transferTr.eq(i).find("[name=label_payed]").html(data.transPayedMoney);
								        						transferTr.eq(i).find("[name=label_needPay]").html(data.transNeedPayAllMoney);
								        					}
								        				})
								        			}
												//arrangeTourist.transferTourist(lineProductIdFee,startTimeFee);
								        		})
									    	}
										}
									})
								});
						    }//编辑费用信息end
						})
					}
					
				}
			})
		},
		saveAddTripPlan :function(tab,className,status,layerIndex,tbody,validatorCreateTripPlan){
			//保存生成计划   btn-savelTripPlan
			function getValue(name){
				var thisObj = $("#"+tab+" .addTripPlanMain").find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}
			$("#"+tab+" ."+className+" .btn-saveTripPlan").click(function(){
				// 表单校验
				if (!validatorCreateTripPlan.form()) { return; }  
				var saveTripP = {
						"tripPlan": {
							"startTime": getValue("startTime"),
				            "accompanyGuideName": getValue("accompanyGuideName"),
				            "accompanyGuideMobile": getValue("accompanyGuideMobile"),
				            "planTouristCount": getValue("planTouristCount"),
				            "setPlacePosition": getValue("setPlacePosition"),
				            "setPlaceTime": getValue("setPlaceTime")
						},
						"lineProductId": getValue("lineProductId"),
				        "driverId": getValue("driverId"),
				        "guideId": getValue("AddTPchooseGuideId"),
				        "busId": getValue("busLicenseNumberId"),
				        "touristGroupId": []
				}
				var touristGroupList = $("#"+tab+" ."+className+" ."+tbody+" tr").length;
				$("#"+tab+" ."+className+" ."+tbody+" tr").each(function(i){
					saveTripP.touristGroupId[i] = {
							"id": $(this).attr("data-entity-id")
					}
				})
				
				var saveTripPlan = JSON.stringify(saveTripP);
				console.log(saveTripPlan);
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=saveTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					data:"saveTripPlan="+encodeURIComponent(saveTripPlan),
					dataType: "json",
					type:"POST",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
									if(status==1){
										closeTab(menuKey+"-addTripPlan");
										closeTab(menuKey+"-divide");
										arrangeTourist.listArrangeTouristMain();
									}
									else if(status==0){
										closeTab(layerIndex);
										arrangeTourist.listArrangeTouristMain();
									}
									else{
										closeTab(layerIndex);
										arrangeTourist.listArrangeTouristMain();
									}
							});
						}
					}
				})
			});
		},
		updateTripPlan:function(data){
			data.touristGroupList =JSON.parse(data.touristGroupList);
			data.lineProductDayList =JSON.parse(data.lineProductDayList);
			data.tripPlan =JSON.parse(data.tripPlan);
			data.lineProduct =JSON.parse(data.lineProduct);
			data.guide =JSON.parse(data.guide);
			data.driver =JSON.parse(data.driver);
			data.busCompant =JSON.parse(data.busCompant);
			data.bus =JSON.parse(data.bus);
			var validatorCreateTripPlan;
			var html = updateTripPlanTemplate(data);
				chooseMergeLayer = layer.open({
			    type: 1,
			    title:"修改发团计划",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['95%', '90%'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){  
			    	
			    	//修改发团计划
			    	validatorCreateTripPlan=rule.checkdCreateTripPlan($(".updateTripPlan"));   
			    	
					//集合时间   时间控件
			    	arrangeTourist.dateTimePicker();
					//查看旅游小组成员
					$(".mergeTripPlan .addTripPlanMain .touristGroupView").unbind().click(arrangeTourist.viewTouristGroup);
					//删除小组   addTripPlanViewDelete
					$(".mergeTripPlan .addTripPlanMain .touristGroupDelete").click(arrangeTourist.delTrouristGroup);
					//拉下查询
					arrangeTourist.seatCountChoose();
					arrangeTourist.brandChoose();
					arrangeTourist.licenseNumberChoose();
					arrangeTourist.driverChoose();
					arrangeTourist.guideChoose();
					//小组序号
					arrangeTourist.MenberNumber("updateTripPlanTouristTbody");
					//取消生成计划   btn-cancelTripPlan
					$(".mergeTripPlan .addTripPlanMain .btn-updatecancelTripPlan").click(function(){
						layer.close(chooseMergeLayer);
					})
			    }
		    });
			addTab(menuKey+"-chooseMerge","并团-修改计划",html);
			
			var tab = "tab-arrange_tourist-chooseMerge-content";
			

			//保存生成计划
			arrangeTourist.saveAddTripPlan(tab,"mergeTripPlan",2,"arrange_tourist-chooseMerge","updateTripPlanTouristTbody",validatorCreateTripPlan);
		},
		seatCountChoose : function(){
			var chooseSeatCount = $(".widget-main").find("input[name=seatCount]");
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
				var seatCount = $(this).parent().parent().find("input[name=seatCount]").val();
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
				var seatCount = $(this).parent().parent().find("input[name=seatCount]").val();
				var busBrand = $(this).parent().parent().find("input[name=needBusBrand]").val();
				console.log(seatCount);
				console.log(busBrand);
				if(busBrand){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"&brand="+busBrand+"",
						dateType:"json",
						type:"POST",
						success:function(data){
							console.log(data)
							var result = showDialog(data);
							console.log(data.busList);
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
				}
			}).unbind("click").click(function(){
				var obj = this;
				var busLicenseNumberId = $(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val();
				console.log(busLicenseNumberId);
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
		}
	}
	exports.listArrangeTouristMain = arrangeTourist.listArrangeTouristMain;
});
