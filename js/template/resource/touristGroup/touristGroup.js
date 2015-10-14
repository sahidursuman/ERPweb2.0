define(function(require, exports) {
	var rule=require("./rule");
	var menuKey = "resource_touristGroup";
	//跳转表格视图
	var listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		searchTemplate = require("./view/searchList"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		arrangeTemplate = require("./view/arrange"),
		listMainTemplate = require("./view/listMain"),
		addPartnerManagerTemplate = require("./view/addPartnerManager");
	
	var touristGroup = {
		searchData : {
		    partnerAgencyId : "",
			lineProductId : "",
			startTime : "",
			userId : "",
			createTimeStart : "",
			createTimeEnd : "",
			customerType:"",
			status : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!touristGroup.edited[editedType] && touristGroup.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		//获取统计数据
		getTouristStatisticData:function(page,partnerAgencyIdS,lineProductIdS,startTimeS,userIdS,createTimeStartS,createTimeEndS,customerTypeS,statusS){
		
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=getTouristStatisticData&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&sortType=auto"+"&partnerAgencyId="+partnerAgencyIdS+"&lineProductIdSearch="+lineProductIdS+"&startTimeSearch="+startTimeS+"&userId="+userIdS+"&createTimeStart="+createTimeStartS+"&createTimeEnd="+createTimeEndS+"&statusSearch="+statusS+"&customerType="+customerTypeS,
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//关闭遮罩
					layer.close(globalLoadingLayer);
					//根据返回值判断下一步操作，或者已出现错误
					var result = showDialog(data);
					//如果正确则就执行
					if(result){
						var html = listMainTemplate(data);
						addTab(menuKey,"游客管理",html);
						//筛选事件绑定
						$(".touristGroupSearchForm .btn-touristGroupList-search").click(function(){
							touristGroup.searchData = {
								partnerAgencyId : $(".touristGroupSearchForm select[name=partnerAgencyId]").find("option:selected").val(),
								lineProductId : $(".touristGroupSearchForm select[name=lineProductId]").find("option:selected").val(),
								startTime : $(".touristGroupSearchForm input[name=startTime]").val(),
								userId : $(".touristGroupSearchForm select[name=userId]").find("option:selected").val(),
								createTimeStart : $(".touristGroupSearchForm input[name=createTimeStart]").val(),
								createTimeEnd : $(".touristGroupSearchForm input[name=createTimeEnd]").val(),
								customerType : $(".touristGroupSearchForm select[name=customerType]").find("option:selected").val(),
								status : $(".touristGroupSearchForm select[name=status]").find("option:selected").val()
							}
							touristGroup.getTouristStatisticData(0,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
							//下拉数据初始化
							touristGroup.initList(data);
						});

						//新增小组事件
						$(".main-content .page-content .btn-touristGroup-add").click(function(){
							touristGroup.addTouristGroup();
						});
				        touristGroup.listTouristGroup(0,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
				        //下拉数据初始化
				        touristGroup.initList(data);
					}
				}
			});
		},

	   //数据列表
		listTouristGroup:function(page,partnerAgencyIdS,lineProductIdS,startTimeS,userIdS,createTimeStartS,createTimeEndS,customerTypeS,statusS){
			touristGroup.searchData = {
				partnerAgencyId : partnerAgencyIdS,
				lineProductId : lineProductIdS,
				startTime : startTimeS,
				userId : userIdS,
				createTimeStart : createTimeStartS,
				createTimeEnd : createTimeEndS,
				customerType:customerTypeS,
				status : statusS
			};
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=listTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&sortType=auto"+"&partnerAgencyId="+partnerAgencyIdS+"&lineProductIdSearch="+lineProductIdS+"&startTimeSearch="+startTimeS+"&userId="+userIdS+"&createTimeStart="+createTimeStartS+"&createTimeEnd="+createTimeEndS+"&statusSearch="+statusS+"&customerType="+customerTypeS,
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//关闭遮罩
					layer.close(globalLoadingLayer);
					//根据返回值判断下一步操作，或者已出现错误
					var result = showDialog(data);
					//如果正确则就执行
					if(result){
						//返回一个json字符串的数据
						var touristGroupList = data.touristGroupList;
						//实例化对象
						touristGroupList = JSON.parse(touristGroupList);
						//讲字符串改为对象
						data.touristGroupList = touristGroupList;
						var html = listTemplate(data);
						$("#touristGroup-listMain").html(html);
						//touristGroup.initList(data);

						//安排小组事件
						$(".touristGroupList .btn-touristGroup-arrange").click(function(){
							var id = $(this).attr("data-entity-id");
							touristGroup.arrangeTouristGroup(id);
						});
						//查看小组事件
						$(".touristGroupList .btn-touristGroup-view").click(function(){
							var id = $(this).attr("data-entity-id");
							touristGroup.viewTouristGroup(id);
						});
						
						//修改小组事件
						$(".main-content .page-content .btn-touristGroup-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							touristGroup.updateTouristGroup(id);
						});
						//删除小组事件绑定
						$(".main-content .page-content .btn-touristGroup-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							touristGroup.deleteTouristGroup(id);
						});
						//分页--首页按钮事件
						$(".touristGroupList .pageMode a.first").click(function(){
							if(data.pageNo == 0 || data.totalPage == 0)return;
							touristGroup.listTouristGroup(0,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
						});
						//分页--上一页事件
						$(".touristGroupList .pageMode a.previous").click(function(){	
							if(data.pageNo == 0 || data.totalPage == 0)return;
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							touristGroup.listTouristGroup(previous,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
						});
						//分页--下一页事件
						$(".touristGroupList .pageMode a.next").click(function(){
							if(data.pageNo+1 == data.totalPage || data.totalPage == 0)return;
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							touristGroup.listTouristGroup(next,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
						});
						//分页--尾页事件
						$(".touristGroupList .pageMode a.last").click(function(){
							if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
							touristGroup.listTouristGroup(data.totalPage-1,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
						});



					}
				},
			});
		},
		//列表初始化
		initList : function(data){
			//出游日期 时间控件（筛选搜索）
			$("#main-container input[name=startTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//录入时间 时间控件（筛选搜索）
			$("#main-container input[name=creatTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$("#main-container input[name=createTimeStart]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$("#main-container input[name=createTimeEnd]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//初始化路线    	
			if(data.searchParam == '{}'){
				touristGroup.getLineProductList($(".touristGroupSearchForm select[name=lineProductId]"));
				touristGroup.getPartnerAgencyList($(".touristGroupSearchForm input[name=fromPartnerAgency]"));
				touristGroup.getCreatorUserList($(".touristGroupSearchForm select[name=userId]"));
			}
			else{
				touristGroup.getLineProductList($(".touristGroupSearchForm select[name=lineProductId]"),data.searchParam.lineProductId);
				touristGroup.getPartnerAgencySearchList($(".touristGroupSearchForm select[name=partnerAgencyId]"),data.searchParam.fromPartnerAgencyId);
				touristGroup.getCreatorUserList($(".touristGroupSearchForm select[name=userId]"),data.searchParam.creator);
			}
		
			
		},
		arrangeTouristGroup:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupArrangeById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				dataType:"json",
				data:"id="+id,
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					data.bus = JSON.parse(data.bus);
					data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
					data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
					data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
					data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
					data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
					data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
					data.touristGroup = JSON.parse(data.touristGroup);
		        	layer.close(globalLoadingLayer);
		        	var result = showDialog(data);
		        	if(result){
						var html =arrangeTemplate(data);
			    		var arrangeLayer =layer.open({
			    			type: 1,
						    title:"小组安排",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['95%', '90%'], //宽高
						    zIndex:1030,
						    content: html,
						    success: function(data) {
						    	//接待-------------------------开始---------------------------------------------------------	
						    	$("#receptionList .btn-bus-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addOutBusList(id,0);
						    	})
						    	$("#receptionList .btn-hotel-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addOutHotel(id,0);
						    	})
						    	$("#receptionList .btn-ticket-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addTicketList(id,0);
						    	})
						    	//小车--------------------------开始--------------------------------------------------------	
						    	$("#carList .btn-bus-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addOutBusList(id,2);
						    	})
						    	//送团--------------------------开始--------------------------------------------------------	
						    	$("#sendList .btn-bus-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addOutBusList(id,1);
						    	})
						    	$("#sendList .btn-hotel-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addOutHotel(id,1);
						    	})
						    	$("#sendList .btn-ticket-add").click(function(){
						    		var thisObj = $(this);
						    		var id = touristGroup.getArrangeTrId(thisObj);
						    		touristGroup.addTicketList(id,1);
						    	})
						    	
						    	//删除安排事件绑定
						    	$(".arrangeTouristMain .busList .arrange-delete").click(function(){
						    		var thisObj = $(this);
						    		touristGroup.delArrangeJudge (thisObj,"bus");
						    	})
						    	$(".arrangeTouristMain .hotelList .arrange-delete").click(function(){
						    		var thisObj = $(this);
						    		touristGroup.delArrangeJudge (thisObj,"hotel");
						    	})
						    	$(".arrangeTouristMain .ticketList .arrange-delete").click(function(){
						    		var thisObj = $(this);
						    		touristGroup.delArrangeJudge (thisObj,"ticket");
						    	})
						    	
						    	//车辆信息 联动
						    	touristGroup.bindBusCompanyChoose();
						    	//酒店信息 联动
						    	touristGroup.bindHotelChoose();
						    	//票务信息 联动
						    	touristGroup.bindTicketChoose();
						    	//日期插件绑定
						    	touristGroup.outArrangeDatepicker("receptionList","bususeTime");
						    	touristGroup.outArrangeDatepicker("receptionList","hotelCheckInTime");
						    	touristGroup.outArrangeDatepicker("receptionList","ticketStartTime");
						    	touristGroup.outArrangeDatepicker("carList","bususeTime");
						    	touristGroup.outArrangeDatepicker("sendList","bususeTime");
						    	touristGroup.outArrangeDatepicker("sendList","hotelCheckInTime");
						    	touristGroup.outArrangeDatepicker("sendList","ticketStartTime");
						    	//提交安排事件绑定
						    	$(".arrangeTouristMain .btn-updateArrange").click(function(){
						    		var touristGroupArrange = {
						    				touristGroup : {},
						    				outBusList : [],
						    				outHotelList : [],
						    				outTicketList : []
						    		};
						    		//小组ID
						    		touristGroupArrange.touristGroup = {
						    				id : touristGroup.getArrangeValue("touristGroup")
						    		};
						    		//接送车安排 JSON
						    		var receptionOutBusTr = $(".arrangeTouristMain #receptionList .busList tbody tr");
						    		touristGroup.outBusJson(receptionOutBusTr,touristGroupArrange.outBusList);
						    		var carOutBusTr = $(".arrangeTouristMain #carList .busList tbody tr");
						    		touristGroup.outBusJson(carOutBusTr,touristGroupArrange.outBusList);
						    		var sendOutBusTr = $(".arrangeTouristMain #sendList .busList tbody tr");
						    		touristGroup.outBusJson(sendOutBusTr,touristGroupArrange.outBusList);
						    		//酒店安排 JSON
						    		var receptionOutHotelTr = $(".arrangeTouristMain #receptionList .hotelList tbody tr");
						    		touristGroup.outHotelJson(receptionOutHotelTr,touristGroupArrange.outHotelList);
						    		var sendOutHotelTr = $(".arrangeTouristMain #sendList .hotelList tbody tr");
						    		touristGroup.outHotelJson(sendOutHotelTr,touristGroupArrange.outHotelList);
						    		//票务安排 JSON
						    		var receptionOutTicketTr = $(".arrangeTouristMain #receptionList .ticketList tbody tr");
						    		touristGroup.outTicketJson(receptionOutTicketTr,touristGroupArrange.outTicketList);
						    		var sendOutTicketTr = $(".arrangeTouristMain #sendList .ticketList tbody tr");
						    		touristGroup.outTicketJson(sendOutTicketTr,touristGroupArrange.outTicketList);
						    		
						    		touristGroupArrange = JSON.stringify(touristGroupArrange);
						    		$.ajax({
						    			url:""+APP_ROOT+"back/touristGroup.do?method=saveTouristGroupArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										dataType:"json",
										data:"touristGroupArrange="+encodeURIComponent(touristGroupArrange),
										beforeSend:function(){
											//打开一个遮罩层
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(arrangeLayer);
												showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
													touristGroup.listTouristGroup(0,"","","","","","","","");
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
		addTouristGroup:function(){
			var html = addTemplate();
			//已填写提示
			var tab = "tab-resource_touristGroup-add-content";
			var validator=rule.checktouristGroup($(".addTouristGroup"));  
			if($(".tab-"+menuKey+"-add").length > 0) {
				if(!!touristGroup.edited["add"] && touristGroup.edited["add"] == "add"){
					showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
						console.log("继续编辑");			
					},function(){
						addTab(menuKey+"-add","添加游客",html);
						touristGroup.edited["add"] = "";
						touristGroup.initAdd();
					},"放弃","继续编辑"); 							
				 }else{
					addTab(menuKey+"-add","添加游客",html);	
					touristGroup.initAdd();					
				 } 
			}else{
				addTab(menuKey+"-add","添加游客",html);		
			};	
			touristGroup.initAdd();
		},
		initAdd : function(){
			//游客管理验证 
			var validator=rule.checktouristGroup($(".addTouristGroup"));
			var tab = "tab-resource_touristGroup-add-content";
			$('.addTouristGroup').on("change",function(){
				touristGroup.edited["add"] = "add";
			});	
			//出游日期 时间控件
			$("#"+tab+" .touristGroupMainForm input[name=startTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//接待日期 时间控件
			$("#"+tab+" .touristGroupMainFormRS input[name=receptionTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//送离日期 时间控件
			$("#"+tab+" .touristGroupMainFormRS input[name=sendTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//选择联系人列表
			touristGroup.getPartnerAgencyManagerList("addTouristGroup");
			//为该组团社添加新联系人
			touristGroup.addPartnerManager("addTouristGroup");
			//接送安排显示隐藏
			var that1 = $("#"+tab+" .touristGroupMainFormRS input[name=touristReception]");
			var that2 = $("#"+tab+" .touristGroupMainFormRS input[name=touristSend]");
			if($("#"+tab+" .touristGroupMainFormRS input[name=touristReception]").is(":checked") == true){
				that1.parent().parent().parent().find(".reception-div").removeClass("hide");
			}
			else{
				that1.parent().parent().parent().find(".reception-div").addClass("hide");
			}
			if($("#"+tab+" .touristGroupMainFormRS input[name=touristSend]").is(":checked") == true){
				that2.parent().parent().parent().find(".send-div").removeClass("hide");
			}
			else{
				that2.parent().parent().parent().find(".send-div").addClass("hide");
			}
			//给新增费用项绑定事件
			$("#"+tab+" .touristGroupMainForm .btn-touristGroup-addCost2").click(function(){
				var html = "<tr>"+
					"<td><span name=\"addOrReduceSelect\" value=\"0\">其他费用</span></td>"+
					"<td><input  name=\"describeInfo\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><input  name=\"count\" type=\"text\" class=\"col-sm-11  no-padding-right costCount\" style=\"float:right;\" /></td>"+
					"<td><input  name=\"price\" type=\"text\" class=\"col-sm-11  no-padding-right costPrice\" style=\"float:right;\" /></td>"+
					"<td><button class=\"btn btn-xs btn-danger addCost-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
					"</tr>";
				$("#"+tab+" .addCostList .addCostTbody").append(html);
				//给新增费用项删除绑定事件
				$("#"+tab+" .addCostList .addCost-delete").click(function(){
					$(this).parent().parent().fadeOut(function(){
						$(this).remove();
						touristGroup.PayMoneyF(tab);
						$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
							touristGroup.PayMoneyF(tab);
						})
						$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
							touristGroup.PayMoneyF(tab);
						})
						$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
							touristGroup.PayMoneyF(tab);
						})
						$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
							touristGroup.PayMoneyF(tab);
						})
					});
				});
				$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				});
				$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				});
				$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
					touristGroup.PayMoneyF(tab);
				});
				$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
					touristGroup.PayMoneyF(tab);
				});
				validator = rule.updateTouristGroupCheckor(validator);
			});
			$("#"+tab+" .addCostList .addCost-delete").click(function(){
				$(this).parent().parent().fadeOut(function(){
					$(this).remove();
					touristGroup.PayMoneyF(tab);
					$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
						touristGroup.PayMoneyF(tab);
					})
				});
			});
			//新增费用项目算应收					
			$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
				touristGroup.PayMoneyF(tab);
			});
			$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
				touristGroup.PayMoneyF(tab);
			});
			$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
				touristGroup.PayMoneyF(tab);
			});
			$("#touristGroup."+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
				touristGroup.PayMoneyF(tab);
			});
			//游客名单成员添加自动序号函数		
			$(document).ready(MenberNumber);
			function MenberNumber(){
				$("#"+tab+" .addTouristList tr").each(function(i){
					if(i>0){
						$(this).children().eq(0).text(i);
					}
				})
			}
			//游客名单删除按钮绑定事件
			$("#"+tab+" .addTouristList .btnDeleteTourist").click(function(){
				$(this).parent().parent().fadeOut(function(){
					$(this).remove();
					MenberNumber();
				});
			});
			
			//游客名单 添加成员按钮绑定事件
			$("#"+tab+" .touristGroupMainFormMember .btn-add-tourist").click(addT);
			function addT(){
				var html=
					"<tr>"+
					"<td>"+"</td>"+
					"<td><input name=\"name\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><select name=\"idCardType\" value=\"idCardTypeId\"><option value=\"0\" selected=\"selected\">身份证</option><option value=\"1\">护照</option><option value=\"2\">其它</option></select></td>"+
					"<td><input name=\"idCardNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><div class=\"checkbox\"><label><input type=\"checkbox\" class=\"ace \" value=\"1\" name=\"isContactUser\"><span class=\"lbl\"></span></label></div></td>"+
					"<td><button class=\"btn btn-xs btn-danger btnDeleteTourist\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
					"</tr>"
				;
				$("#"+tab+" .addTouristList .addTouristTbody").append(html);
				
				//游客名单成员验证 
				validator = rule.updateTouristGroupCheckor(validator);
				MenberNumber();
				//游客名单删除按钮绑定事件
				$("#"+tab+" .addTouristList .btnDeleteTourist").click(function(){
					$(this).parent().parent().fadeOut(function(){
						$(this).remove();
						MenberNumber();
					});
				});
			}
			//游客名单 批量添加成员按钮绑定事件
			$("#"+tab+" .touristGroupMainFormMember .btn-add-tourist-more").click(touristGroup.batchAddTouristGroupMember);
			//中转接待状态事件绑定
			$("#"+tab+" .checkbox").click(function(){
				if($("#"+tab+" .touristGroupMainFormRS input[name=touristReception]")[0].checked== true){
					$(this).parent().parent().parent().find(".reception-div").removeClass("hide");
				}
				else{
					$(this).parent().parent().parent().find(".reception-div").addClass("hide");
				}
				if($("#"+tab+" .touristGroupMainFormRS input[name=touristSend]")[0].checked== true){
					$(this).parent().parent().parent().find(".send-div").removeClass("hide");
				}
				else{
					$(this).parent().parent().parent().find(".send-div").addClass("hide");
				}
			});
			//点击‘搜索路线’获取JSON
			$("#"+tab+" .touristGroupMainForm .btn-travelLine-search").click(function(){
				touristGroup.searchLineFunction(true,0,"");
			});
			
			//初始化 组社团数据
			touristGroup.getPartnerAgencyList($("#"+tab+" .choosePartnerAgencyDiv input[name='fromPartnerAgency']"));
			//添加小组页面提交按钮事件绑定
			$("#"+tab+" .touristGroupMainFormRS .btn-submit-addTouristGroup").click(function(){
				touristGroup.submitAddTouristGroup();
			});
		},
		updateTouristGroup:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=viewTouristGroupDetails&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var touristGroupInfo = JSON.parse(data.touristGroupDetail);
						data.touristGroupDetail = touristGroupInfo;
						var html = updateTemplate(data);	
						//已修改提示
						var tab = "tab-resource_touristGroup-update-content";
			    		var validator=rule.checktouristGroup($(".updateTouristGroup"));  
						if($(".tab-"+menuKey+"-update").length > 0) {
                 	    	if(!!touristGroup.edited["update"]){
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.checktouristGroup($('.updateTouristGroup'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 touristGroup.submitUpdateTouristGroup($(".updateTouristGroup .btn-submit-addTouristGroup").attr("data-entity-id"),0);
									 touristGroup.edited["update"] = "";
				            		 addTab(menuKey+"-update","编辑小组",html);	
									 touristGroup.initUpdate(id,data);
				            		 validator = rule.checktouristGroup($('.updateTouristGroup'));
				            	},function(){
				            		addTab(menuKey+"-update","编辑小组",html);	
									touristGroup.initUpdate(id,data);
									validator = rule.checktouristGroup($('.updateTouristGroup'));									
									touristGroup.edited["update"] = "";
				            	}); 							
                 	    	 }else{
	                 	    	addTab(menuKey+"-update","编辑小组",html);				
	                 	        validator = rule.checktouristGroup($('.updateTouristGroup'));
                 	    	 } 
                 	    }else{
                 	    	addTab(menuKey+"-update","编辑小组",html);				
                 	    	validator = rule.checktouristGroup($("#"+tab+""));
                 	    };	
						touristGroup.initUpdate(id,data);
					}
				}
			});
		},
		initUpdate : function(id,data){
			var validator=rule.checktouristGroup($(".updateTouristGroup"));  
			var tab = "tab-resource_touristGroup-update-content";
			var updateTouristGroup = id;
			$('.updateTouristGroup').on("change",function(){
				touristGroup.edited["update"] = "update";
			});	
			if(data.touristGroupDetail.status != 0){
				//出游日期 时间控件
				$("#"+tab+" .touristGroupMainForm input[name=startTime]").datepicker({
					autoclose: true,
					todayHighlight: true,
					format: 'yyyy-mm-dd',
					language: 'zh-CN'
				});
			}
			//接待日期 时间控件
			$("#"+tab+" .touristGroupMainFormRS input[name=receptionTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//送离日期 时间控件
			$("#"+tab+" .touristGroupMainFormRS input[name=sendTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			
			//选择联系人列表
			touristGroup.getPartnerAgencyManagerList("updateTouristGroup");
			//为该组团社添加新联系人
			touristGroup.addPartnerManager("updateTouristGroup");
			//接送安排显示隐藏
			var that1 = $("#"+tab+" .touristGroupMainFormRS input[name=touristReception]");
			var that2 = $("#"+tab+" .touristGroupMainFormRS input[name=touristSend]");
			if($("#"+tab+" .touristGroupMainFormRS input[name=touristReception]").is(":checked") == true){
				that1.parent().parent().parent().find(".reception-div").removeClass("hide");
			}
			else{
				that1.parent().parent().parent().find(".reception-div").addClass("hide");
			}
			if($("#"+tab+" .touristGroupMainFormRS input[name=touristSend]").is(":checked") == true){
				that2.parent().parent().parent().find(".send-div").removeClass("hide");
			}
			else{
				that2.parent().parent().parent().find(".send-div").addClass("hide");
			}
			//给新增费用项绑定事件
			$("#"+tab+" .touristGroupMainForm .btn-touristGroup-addCost2").click(function(){
				var html=/*"<tr>"+
				"<td><select class=\"col-sm-12 addOrReduceSelect\"><option value=\"0\">增加费用</option><option value=\"1\">减少费用</option></select></td>"+
				"<td><input type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
				"<td><input type=\"text\" class=\"col-sm-12  no-padding-right costCount\" /></td>"+
				"<td><input type=\"text\" class=\"col-sm-12  no-padding-right costPrice\" /></td>"+
				"<td><button class=\"btn btn-xs btn-danger addCost-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
				"</tr>"*/
				"<tr>"+
				"<td><span name=\"addOrReduceSelect\" value=\"0\">其他费用</span></td>"+
				"<td><input  name=\"describeInfo\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
				"<td><input  name=\"count\" type=\"text\" class=\"col-sm-11  no-padding-right costCount\" style=\"float:right;\" /></td>"+
				"<td><input  name=\"price\" type=\"text\" class=\"col-sm-11  no-padding-right costPrice\" style=\"float:right;\" /></td>"+
				"<td><button class=\"btn btn-xs btn-danger addCost-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
				"</tr>";
				$("#"+tab+" .addCostList .addCostTbody").append(html);
				
				validator = rule.updateTouristGroupCheckor(validator);    
				   
				//给费用清单列表删除按钮绑定事件
				$("#"+tab+" .addCostList .addCost-delete").click(function(){
					var tr =$(this).parent().parent();
					var costListTrId = tr.attr("data-entity-id");

					
					if(!(costListTrId!=null && costListTrId!="")){
						$(this).parent().parent().fadeOut(function(){
							$(this).remove();
							MenberNumber();
						})
					}
					touristGroup.PayMoneyF(tab);
					$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
						touristGroup.PayMoneyF(tab);
					})
					$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
						touristGroup.PayMoneyF(tab);
					})
				});
				$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
					touristGroup.PayMoneyF(tab);
				})
			});
			//费用清单删除列表事件
			$("#"+tab+" .addCostList .addCost-delete").click(function(){
				var tr =$(this).parent().parent();
				var costListTrId = tr.attr("data-entity-id");
				if(costListTrId!=null && costListTrId!=""){
					tr.addClass("deleted");
					tr.fadeOut(function(){
						$(this).hide();
						MenberNumber();
						touristGroup.PayMoneyF(tab);
					})
					touristGroup.PayMoneyF(tab);
				}
				touristGroup.PayMoneyF(tab);
				$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
					touristGroup.PayMoneyF(tab);
				})
				$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
					touristGroup.PayMoneyF(tab);
				})
			});
			validator = rule.updateTouristGroupCheckor(validator); 
			//新增费用项目  算应收
			$("#"+tab+" .touristGroupMainForm input[name=payedMoney]").keyup(function(){
				touristGroup.PayMoneyF(tab);
			})
			$("#"+tab+" .touristGroupMainForm input[name=currentNeedPayMoney]").keyup(function(){
				touristGroup.PayMoneyF(tab);
			})
			$("#"+tab+" .touristGroupMainForm .addCostList").keyup(function(){
				touristGroup.PayMoneyF(tab);
			})
			$("#"+tab+" .touristGroupMainForm .addCostList").find(".addOrReduceSelect").change(function(){
				touristGroup.PayMoneyF(tab);
			})
			//游客名单成员添加自动序号函数		
			$(document).ready(MenberNumber);
			function MenberNumber(){
				$("#"+tab+" .addTouristList tr:not(.deleted)").each(function(i){
					if(i>0){
						$(this).children().eq(0).text(i);
					}
				})
			}
			
			//游客名单成员列表删除
			$("#"+tab+" .addTouristList .btnDeleteTourist").click(function(){
				var tr =$(this).parent().parent();
				var touristListTrId = tr.attr("data-entity-id");
				if(touristListTrId!=null && touristListTrId!=""){
					tr.addClass("deleted");
					tr.fadeOut(function(){
						$(this).hide();
					})
				}
			});
			//游客名单 添加成员按钮绑定事件
			$("#"+tab+" .touristGroupMainFormMember .btn-add-tourist").click(addT);
			function addT(){
				var html=
					"<tr>"+
					"<td>"+"</td>"+
					"<td><input name=\"name\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><select name=\"idCardType\" value=\"idCardTypeId\"><option value=\"0\" selected=\"selected\">身份证</option><option value=\"1\">护照</option><option value=\"2\">其它</option></select></td>"+
					"<td><input name=\"idCardNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					"<td><div class=\"checkbox\"><label><input type=\"checkbox\" class=\"ace \" value=\"1\" name=\"isContactUser\"><span class=\"lbl\"></span></label></div></td>"+
					"<td><button class=\"btn btn-xs btn-danger btnDeleteTourist\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
					"</tr>"
				;
				$("#"+tab+" .addTouristList .addTouristTbody").append(html);
				
				//游客名单成员验证 
				validator = rule.updateTouristGroupCheckor(validator);
				MenberNumber();
				//游客名单删除按钮绑定事件
				$("#"+tab+" .addTouristList .btnDeleteTourist").click(function(){
					$(this).parent().parent().fadeOut(function(){
						$(this).remove();
						MenberNumber();
					});
				});
			}
			//游客名单 批量添加成员按钮绑定事件
			$("#"+tab+" .touristGroupMainFormMember .btn-add-tourist-more").click(touristGroup.batchAddTouristGroupMember);
			//中转接待状态事件绑定
			$("#"+tab+" .checkbox").click(function(){
				if($(".touristGroupMainFormRS input[name=touristReception]")[0].checked== true){
					$(this).parent().parent().parent().find(".reception-div").removeClass("hide");
					//中转接待状态  
					validator = rule.updateTouristGroupCheckor(validator); 
				}
				else{
					$(this).parent().parent().parent().find(".reception-div").addClass("hide");
				}
				if($(".touristGroupMainFormRS input[name=touristSend]")[0].checked== true){
					$(this).parent().parent().parent().find(".send-div").removeClass("hide");
				}
				else{
					$(this).parent().parent().parent().find(".send-div").addClass("hide");
				}
			});
			//点击‘搜索路线’获取JSON
			$("#"+tab+" .touristGroupMainForm .btn-travelLine-search").click(function(){
				touristGroup.searchLineFunction(true,0,"");
			});
			//初始化 组社团数据
			touristGroup.getPartnerAgencyList($("#"+tab+" .choosePartnerAgencyDiv input[name=fromPartnerAgency]"),data.touristGroupDetail.fromPartnerAgencyId);
			//update点击提交按钮事件
			$("#"+tab+" .touristGroupMainFormRS .btn-submit-addTouristGroup").click(function(){
				touristGroup.submitUpdateTouristGroup(id,1);
			});
		},
		viewTouristGroup:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=viewTouristGroupDetails&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var touristGroupInfo = JSON.parse(data.touristGroupDetail);
						data.touristGroupDetail = touristGroupInfo;
						var html = viewTemplate(data);

						addTab(menuKey+"-view","查看小组",html);
						var tab = "tab-resource_touristGroup-view-content";
						$(".btn-submit-addTouristGroup").click(function(){
							layer.close(viewTouristGroup);
						})
						function MenberNumber(){
							$(".addTouristList tr").each(function(i){
								if(i>0){
									$(this).children().eq(0).text(i);
								}
							})
							//接送安排显示隐藏
							var that1 = $("#"+tab+" .touristGroupMainForm input[name=touristReception]");
							var that2 = $("#"+tab+" .touristGroupMainForm input[name=touristSend]");
							if($("#"+tab+" .touristGroupMainForm input[name=touristReception]").is(":checked") == true){
								that1.parent().parent().parent().find(".reception-div").removeClass("hide");
							}
							else{
								that1.parent().parent().parent().find(".reception-div").addClass("hide");
							}
							if($("#"+tab+" .touristGroupMainForm input[name=touristSend]").is(":checked") == true){
								that2.parent().parent().parent().find(".send-div").removeClass("hide");
							}
							else{
								that2.parent().parent().parent().find(".send-div").addClass("hide");
							}
						}
						MenberNumber();
					}
				}
			});
		},
		deleteTouristGroup:function(id){
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
								url:""+APP_ROOT+"back/touristGroup.do?method=deleteTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$(".main-content .page-content .touristGroup-"+id+"").fadeOut(function(){
											touristGroup.listTouristGroup(0,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
										});
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该条记录？");
				}
			});
		},
		getPartnerAgencyManagerList :function(className){
			var chooseManagerList = $("."+className+" .choosePartnerManager");
			chooseManagerList.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=partnerAgencyContactId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=partnerAgencyContactId]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objM = this,
					partnerAgencyId = $("."+className+" .touristGroupMainForm").find("input[name=fromPartnerAgencyId]").val();
				if(partnerAgencyId){
					$.ajax({
						url:""+APP_ROOT+"back/partnerAgency.do?method=getContactListByPartnerAgencyId&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
		                dataType: "json",
		                data:"partnerAgencyId="+partnerAgencyId,
		                beforSend:function(){
		                	globalLoadingLayer = openLoadingLayer()
		                },
		                success: function(data) {
		                	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var contactList = JSON.parse(data.partnerAgencyContactList);
								if(contactList != null && contactList.length>0){
									if(contactList != null && contactList.length){
										for(var i=0;i<contactList.length;i++){
											contactList[i].value = contactList[i].contactRealname+" - ["+contactList[i].contactMobileNumber+"]";
										}
									}
									$(objM).autocomplete('option','source', contactList);
									$(objM).autocomplete('search', '');
								}else{
									layer.tips('该组团社没有联系人，请添加！', objM, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
		                }
		             });
				}else{
					layer.tips('请选择组团社', objM, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		addPartnerManager :function(className){
			$("."+className+"").find(".addPartnerManager").click(function(){
				var obj = this;
				var PartnerId = $(obj).parent().parent().parent().parent().find("input[name=fromPartnerAgencyId]").val();
				if(PartnerId){
					var html = addPartnerManagerTemplate();
					var addPartnerManagerLayer = layer.open({
					    type: 1,
					    title:"新增同行联系人",
					    skin: 'layui-layer-rim', //加上边框
					    area: ['35%', '40%'], //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){
					    	//新增组团社联系人 
					    	var validator=rule.checkdPartnerManager($(".addPartnerManager"));
					    	$(".addPartnerManager .btn-submit-addPartnerManager").click(function(){
					    		
					    		// 表单校验
					    		if (!validator.form()) { return; }
					    		
					    		var partnerAgencyId = PartnerId,
					    		contactRealname = $(".addPartnerManager").find("input[name=managerName]").val(),
					    		contactMobileNumber = $(".addPartnerManager").find("input[name=managerMobile]").val();
					    		departmentName = $(".addPartnerManager").find("input[name=departmentName]").val();
					    		dutyName = $(".addPartnerManager").find("input[name=dutyName]").val();
					    		
					    		$.ajax({
					    			url:""+APP_ROOT+"back/partnerAgency.do?method=saveContact&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
									data:"partnerAgencyId="+partnerAgencyId+"&contactRealname="+contactRealname+"&contactMobileNumber="+contactMobileNumber+"&departmentName="+departmentName+"&dutyName="+dutyName+"",
					    			dataType:"json",
					    			type:"POST",
					    			beforSend:function(){
										globalLoadingLayer = openLoadingLayer();
					    			},
									success:function(data){
										console.log(data);
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											var contact = JSON.parse(data.partnerAgencyContact);
											layer.close(addPartnerManagerLayer);
											$("."+className+"").find("input[name=partnerAgencyNameList]").val(contact.contactRealname+" - ["+contact.contactMobileNumber+"]").trigger('change');
											$("."+className+"").find("input[name=partnerAgencyContactId]").val(contact.id);
										}
									}
					    		})
					    	})
					    }
					})
				}else{
					layer.tips('新建联系人请先选择组团社', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		getLineProductList:function(obj,lineProductId){
			$.ajax({
				url:""+APP_ROOT+"back/lineProduct.do?method=findAllLineProductOnlyIdAndName&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				dataType:"json",
				success:function(data){
					var html ="<option value=''>全部</option>"; //"<option value=''>全部</option>";
					var lineProductList = JSON.parse(data.lineProductList);

					console.log(lineProductList.length);
					if(lineProductList != null && lineProductList.length > 0){ 
						for(var i=0;i<lineProductList.length;i++){
							if (lineProductId != null && lineProductList[i].id == lineProductId) {
								html += "<option selected=\"selected\" value='"+lineProductList[i].id+"'>"+lineProductList[i].name+"</option>";
							} else {
								html += "<option  value='"+lineProductList[i].id+"'>"+lineProductList[i].name+"</option>";
							}
						}
						$(obj).html(html);
					}
				}
			})
		},
		getPartnerAgencyList:function(obj,partnerAId){
			$(obj).autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if (!!ui.item)  {
						$(this).val('').nextAll('input[name="fromPartnerAgencyId"]').val('');
					}
				},
				select: function(event, ui) {
					$(this).blur().nextAll('input[name="fromPartnerAgencyId"]').val(ui.item.id);
				}
			})
			.click(function(event) {
				var $objC = $(this);
				$.ajax({
					url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAnencyList&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
                    dataType: "json",
                    data:"travelAgencyName="+$objC.val(),
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var partnerAgencyList = JSON.parse(data.partnerAgencyList);
							if(partnerAgencyList != null && partnerAgencyList.length > 0){
								for(var i=0;i<partnerAgencyList.length;i++){
									partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
								}
							}
							$objC.autocomplete('option','source', partnerAgencyList);
							$objC.autocomplete('search', '');
						}
                    }
                });
			});
		},
		getPartnerAgencySearchList:function(obj,partnerAgencyId){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=getPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				dataType:"json",
				success:function(data){
					var html ="<option value=''>全部</option>"; //"<option value=''>全部</option>";
					var partnerAgencyList = data.data;
					if(partnerAgencyList != null && partnerAgencyList.length > 0){ 
						for(var i=0;i<partnerAgencyList.length;i++){
							
							if (partnerAgencyId != null && partnerAgencyList[i].id == partnerAgencyId) {
								html += "<option selected=\"selected\" value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].name+"</option>";
							} else {
								html += "<option  value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].name+"</option>";
							}
						}
						$(obj).html(html);
					}
				}
			})
		},
		getCreatorUserList:function(obj,userId){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=getTourCreator&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				dataType:"json",
				success:function(data){
					var html ="<option value=''>全部</option>"; //"<option value=''>全部</option>";
					var creatorUserList = data.data;
					if(creatorUserList != null && creatorUserList.length > 0){ 
						for(var i=0;i<creatorUserList.length;i++){
							
							if (userId != null && creatorUserList[i].id == userId) {
								html += "<option selected=\"selected\" value='"+creatorUserList[i].id+"'>"+creatorUserList[i].name+"</option>";
							} else {
								html += "<option  value='"+creatorUserList[i].id+"'>"+creatorUserList[i].name+"</option>";
							}
						}
						$(obj).html(html);
					}
				}
			})
		},
		submitAddTouristGroup : function(){
			//游客管理验证 
			var validator=rule.checktouristGroup($(".addTouristGroup"));
			var tab = "tab-resource_touristGroup-add-content";
			// 表单校验
			if (!validator.form()) { return; }
			//购买保险 状态事件绑定
			var buyInsuranceS = 1;
			if($("#"+tab+" .touristGroupMainForm input[name=buyInsurance]").is(":checked") == true){
				buyInsuranceS = 1;
			}
			else{
				buyInsuranceS = 0;
			}
			var form = $("#"+tab+" .touristGroupMainForm").serialize();//+"&status="+status+"";
			function trim(str){ 
				 return str.replace(/(^\s*)|(\s*$)/g, ""); 
			}
			var touristGroupFeeJsonAdd = [];
			var addCostStr = $("#"+tab+" .touristGroupMainForm .addCostList .addCostTbody tr");
			addCostStr.each(function(i){
				if(i > 1){
					var type = addCostStr.eq(i).find("[name=addOrReduceSelect]").attr("value");
					var describeInfo = addCostStr.eq(i).find("input[name=describeInfo]").val();
					if (trim(describeInfo) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入费用说明");
						return false;
					}
					var count = addCostStr.eq(i).find("input[name=count]").val();
					console.log("count" + count);
					if (trim(count) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费数量");
						return false;
					}
					var price = addCostStr.eq(i).find("input[name=price]").val();
					if (trim(price) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费单价");
						return false;
					}
					var touristGroupFeeJson = {
						type : type,
						describeInfo : describeInfo,
						count : count,
						price : price
					};	
					touristGroupFeeJsonAdd.push(touristGroupFeeJson);
				}				
			});
			
			//游客名单  酒店星级、自费包含、备注
			var expectLevel = $("#"+tab+" .touristGroupMainFormMember").find("select[name=level]").find("option:selected").val()
			var includeOwnExpense = $("#"+tab+" .touristGroupMainFormMember").find("input[name=includeOwnExpense]").val();
			var touristRemarks = $("#"+tab+" .touristGroupMainFormMember").find("input[name=touristRemarks]").val();
			
			//接团、小车、送团
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=touristReception]").is(":checked")==true){
				var isNeedArriveService = 1;
			}
			else{
				isNeedArriveService = 0;
			}
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=smallCar]").is(":checked")==true){
				var isNeedBus = 1;
			}
			else{
				isNeedBus = 0;
			}
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=touristSend]").is(":checked")==true){
				var isNeedLeaveService = 1;
			}
			else{
				isNeedLeaveService = 0;
			}
			var buyInsurance = buyInsuranceS;
			form +="&hotelLevel="+expectLevel+"&includeSelfPay="+includeOwnExpense+"&remark="+touristRemarks+"&buyInsurance="+buyInsurance+"&isNeedArriveService="+isNeedArriveService+"&isNeedBus="+isNeedBus+"&isNeedLeaveService="+isNeedLeaveService;

			var touristGroupMemberJsonAdd = [];
			var touristNameStr = $("#"+tab+" .touristGroupMainFormMember .addTouristList tbody tr");
			touristNameStr.each(function(i){
				var name = touristNameStr.eq(i).find("input[name=name]").val();
				var mobileNumber = touristNameStr.eq(i).find("input[name=mobileNumber]").val();
				var idCardType = touristNameStr.eq(i).find("select[name=idCardType]").val();
				var idCardNumber = touristNameStr.eq(i).find("input[name=idCardNumber]").val();
				if(touristNameStr.eq(i).find("input[name=isContactUser]").is(":checked")==true){
					var isContactUser = 1;
					if(mobileNumber == ""){
						showMessageDialog($( "#confirm-dialog-message" ), "请填写名单中联系人的手机号码！");
					}
				}
				else{
					isContactUser = 0;
				}
				var touristGroupMemberJson = {
					name : name,
					mobileNumber : mobileNumber,
					idCardType : idCardType,
					idCardNumber : idCardNumber,
					isContactUser : isContactUser
				};
				touristGroupMemberJsonAdd.push(touristGroupMemberJson);
			})
			//打包接送时间地点
			var outArrangeRemarkJson = [];
			outArrangeRemarkJson = {
				arriveTime : $("#"+tab+" .touristGroupMainFormRS").find("input[name=receptionTime]").val(),
				arrivePosition : $("#"+tab+" .touristGroupMainFormRS").find("input[name=receptionAddress]").val(),
				leaveTime : $("#"+tab+" .touristGroupMainFormRS").find("input[name=sendTime]").val(),
				leavePosition : $("#"+tab+" .touristGroupMainFormRS").find("input[name=sendAddress]").val()
			};
			touristGroupFeeJsonAdd = JSON.stringify(touristGroupFeeJsonAdd);
			touristGroupMemberJsonAdd = JSON.stringify(touristGroupMemberJsonAdd);
			outArrangeRemarkJson = JSON.stringify(outArrangeRemarkJson);
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=saveTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
				type:"POST",
				data:form+"&touristGroupFeeJsonAdd="+encodeURIComponent(touristGroupFeeJsonAdd)+"&touristGroupMemberJsonAdd="+encodeURIComponent(touristGroupMemberJsonAdd)+"&outArrangeRemarkJson="+encodeURIComponent(outArrangeRemarkJson)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							closeTab(menuKey+"-add");
							touristGroup.listTouristGroup(0,"","","","","","","","");
							touristGroup.edited["add"] = "";
						});
					}
				}
			});
		},
		submitUpdateTouristGroup : function(id,isClose){
			//游客管理验证 
			var validator=rule.checktouristGroup($(".updateTouristGroup"));
			var tab = "tab-resource_touristGroup-update-content";
			// 表单校验
			if (!validator.form()) { return; }
			//购买保险 状态事件绑定
			var buyInsuranceS = 1;
			if($("#"+tab+" .touristGroupMainForm input[name=buyInsurance]").is(":checked") == true){
				buyInsuranceS = 1;
			}
			else{
				buyInsuranceS = 0;
			}
			var form = $("#"+tab+" .touristGroupMainForm").serialize();//+"&status="+status+"";
			function trim(str){ 
				 return str.replace(/(^\s*)|(\s*$)/g, ""); 
			}
			var touristGroupFeeJsonAdd = [];
			var addCostStr = $("#"+tab+" .touristGroupMainForm .addCostList .addCostTbody tr:not(.deleted)");
			addCostStr.each(function(i){
				if(i > 1){
					var type = $(this).find("[name=addOrReduceSelect]").attr("value");
					var describeInfo = $(this).find("input[name=describeInfo]").val();
					if (trim(describeInfo) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入费用说明");
						return false;
					}
					var count = $(this).find("input[name=count]").val();
					if (trim(count) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费数量");
						return false;
					}
					var price = $(this).find("input[name=price]").val();
					if (trim(price) == "") {
						showMessageDialog($( "#confirm-dialog-message" ), "请输入自费单价");
						return false;
					}				
					var touristGroupFeeJson = {
						id : id,
						type : type,
						describeInfo : describeInfo,
						count : count,
						price : price
					};					
					touristGroupFeeJsonAdd.push(touristGroupFeeJson);	
				}			
			});
			//删除费用JSON
			touristGroupFeeJsonDel = [];
			var delFeeStr = $("#"+tab+" .touristGroupMainForm .addCostList .addCostTbody tr.deleted");
			delFeeStr.each(function(i){
				var id = delFeeStr.eq(i).attr("data-entity-id");
				touristGroupFeeJson = {
					id :id
				};
				touristGroupFeeJsonDel.push(touristGroupFeeJson);
			})			
			
			//游客名单  酒店星级、自费包含、备注
			var expectLevel = $("#"+tab+" .touristGroupMainFormMember").find("select[name=level]").find("option:selected").val()
			var includeOwnExpense = $("#"+tab+" .touristGroupMainFormMember").find("input[name=includeOwnExpense]").val();
			var touristRemarks = $("#"+tab+" .touristGroupMainFormMember").find("input[name=touristRemarks]").val();
			
			//接团、小车、送团
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=touristReception]").is(":checked")==true){
				var isNeedArriveService = 1;
			}
			else{
				isNeedArriveService = 0;
			}
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=smallCar]").is(":checked")==true){
				var isNeedBus = 1;
			}
			else{
				isNeedBus = 0;
			}
			if($("#"+tab+" .touristGroupMainFormRS").find("input[name=touristSend]").is(":checked")==true){
				var isNeedLeaveService = 1;
			}
			else{
				isNeedLeaveService = 0;
			}
			var buyInsurance = buyInsuranceS;
			form +="&hotelLevel="+expectLevel+"&includeSelfPay="+includeOwnExpense+"&remark="+touristRemarks+"&buyInsurance="+buyInsurance+"&isNeedArriveService="+isNeedArriveService+"&isNeedBus="+isNeedBus+"&isNeedLeaveService="+isNeedLeaveService;

			var touristGroupMemberJsonAdd = [];
			var touristNameStr = $("#"+tab+" .touristGroupMainFormMember .addTouristList tbody tr");
			touristNameStr.each(function(i){
				var id = $(this).attr("data-entity-id");
				var name = touristNameStr.eq(i).find("input[name=name]").val();
				var mobileNumber = touristNameStr.eq(i).find("input[name=mobileNumber]").val();
				var idCardType = touristNameStr.eq(i).find("select[name=idCardType]").val();
				var idCardNumber = touristNameStr.eq(i).find("input[name=idCardNumber]").val();
				if(touristNameStr.eq(i).find("input[name=isContactUser]").is(":checked")==true){
					var isContactUser = 1;
					if(mobileNumber == ""){
						showMessageDialog($( "#confirm-dialog-message" ), "请填写名单中联系人的手机号码！");
					}
				}
				else{
					isContactUser = 0;
				}
				
				var touristGroupMemberJson = {
					id : id,
					name : name,
					mobileNumber : mobileNumber,
					idCardType : idCardType,
					idCardNumber : idCardNumber,
					isContactUser : isContactUser
				};
				touristGroupMemberJsonAdd.push(touristGroupMemberJson);
			})
			
			//删除小组JSON
			var touristGroupMemberJsonDel = [];
			var addMemberStr = $("#"+tab+" .touristGroupMainFormMember .addTouristList tbody tr.deleted");
			
			addMemberStr.each(function(i){
				var id = addMemberStr.eq(i).attr("data-entity-id");
				touristGroupMemberJson = {
					id : id
				};
				touristGroupMemberJsonDel.push(touristGroupMemberJson);
			})
			//打包接送时间地点
			var outArrangeRemarkJson = [];
			outArrangeRemarkJson = {
				arriveTime : $("#"+tab+" .touristGroupMainFormRS").find("input[name=receptionTime]").val(),
				arrivePosition : $("#"+tab+" .touristGroupMainFormRS").find("input[name=receptionAddress]").val(),
				leaveTime : $("#"+tab+" .touristGroupMainFormRS").find("input[name=sendTime]").val(),
				leavePosition : $("#"+tab+" .touristGroupMainFormRS").find("input[name=sendAddress]").val()
			};
		    touristGroupFeeJsonAdd = JSON.stringify(touristGroupFeeJsonAdd);
			touristGroupFeeJsonDel = JSON.stringify(touristGroupFeeJsonDel);
			touristGroupMemberJsonDel = JSON.stringify(touristGroupMemberJsonDel);
			touristGroupMemberJsonAdd = JSON.stringify(touristGroupMemberJsonAdd);
			outArrangeRemarkJson = JSON.stringify(outArrangeRemarkJson);
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=updateTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				type:"POST",
				data:form+"&id="+id+"&touristGroupFeeJsonAdd="+encodeURIComponent(touristGroupFeeJsonAdd)+"&touristGroupFeeJsonDel="+encodeURIComponent(touristGroupFeeJsonDel)+"&touristGroupMemberJsonAdd="+encodeURIComponent(touristGroupMemberJsonAdd)+"&touristGroupMemberJsonDel="+encodeURIComponent(touristGroupMemberJsonDel)+"&outArrangeRemarkJson="+encodeURIComponent(outArrangeRemarkJson),
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							touristGroup.edited["update"] = "";
							if(isClose == 1){
								closeTab(menuKey+"-update");
								touristGroup.listTouristGroup(0,touristGroup.searchData.partnerAgencyId,touristGroup.searchData.lineProductId,touristGroup.searchData.startTime,touristGroup.searchData.userId,touristGroup.searchData.createTimeStart,touristGroup.searchData.createTimeEnd,touristGroup.searchData.customerType,touristGroup.searchData.status);
							}
						});
					}
				}
			});
		},
		PayMoneyF : function (tab){
			//var tab = "tab-resource_touristGroup-add-content";
			var needPayMoney = 0;
			var needPayAllM = $("#"+tab+" .form-group input[name=needPayAllMoney]");
			var payedM = $("#"+tab+" .form-group input[name=payedMoney]");
			var currentNeedPayM = $("#"+tab+" .form-group input[name=currentNeedPayMoney]"); 
			var unIncomeMoney = $("#"+tab+" .form-group input[name=unIncomeMoney]"); 
			var assC_tr = $("#"+tab+" .touristGroupMainForm .addCostList tbody").find("tr:not(.deleted)");
			needPayMoney=0;
			for(i=0;i<assC_tr.length;i++){
				var a =parseFloat(assC_tr.eq(i).find(".costCount").val());
				var b =parseFloat(assC_tr.eq(i).find(".costPrice").val());
				if(isNaN(a)){
					a = 0;
				}
				if(isNaN(b)){
					b =0;
				}
				needPayMoney += a*b;
			}//应收-已收-现收=未收
			needPayMoney = needPayMoney.toFixed(2);
			needPayAllM.val(needPayMoney);
			
			var payedMN =parseFloat(payedM.val()),
				cnPMn = parseFloat(currentNeedPayM.val()),
				unIMn = 0;
			if(isNaN(payedMN)){
				payedMN = 0;
			}
			if(isNaN(cnPMn)){
				cnPMn = 0;
			}
			unIMn = needPayMoney-payedMN-cnPMn;
			unIncomeMoney.val(unIMn);
		},
		searchLineFunction : function(init,page,name){
			$.ajax({
				url:""+APP_ROOT+"back/lineProduct.do?method=findAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&sortType=auto",
				data:"pageNo="+page+"&name="+name,
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success: function(data){
					layer.close(globalLoadingLayer);
					var searchTravelLinelayer;
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
								area: ['85%', '80%'], //宽高
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
						$("#chooseLineProductId .btn-lineProduct-search").click(function(){
							var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
							touristGroup.searchLineFunction(false,0,name);
						});
						
						//分页--首页按钮事件
						$("#chooseLineProductId .pageMode a.first").click(function(){
							var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
							touristGroup.searchLineFunction(false,0,name);
						});
						//分页--上一页事件
						$("#chooseLineProductId .pageMode a.previous").click(function(){
							var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
							var previous = dataD.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							touristGroup.searchLineFunction(false,previous,name);
						});
						//分页--下一页事件
						$("#chooseLineProductId .pageMode a.next").click(function(){
							var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
							var next =  dataD.pageNo + 1;
							if(dataD.pageNo == dataD.totalPage-1){
								next = dataD.pageNo ;
							}
							touristGroup.searchLineFunction(false,next,name);
						});
						//分页--尾页事件
						$("#chooseLineProductId .pageMode a.last").click(function(){
							var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
							if(dataD.totalPage < 1){return;}
							touristGroup.searchLineFunction(false,dataD.totalPage-1,name);
						});
						//搜索路线   提交事件绑定
						var travelLineName="";
						var travelLineId="";
						$(".btn-submit-searchtravelLine").click(function(){
							var trSearchtravelLine =$(".search-travelLineList-table tbody tr");
							for(var i=0;i<trSearchtravelLine.length;i++){
								
								if(trSearchtravelLine.eq(i).find("input[name=choice-TravelLine]").is(":checked")==true){
									travelLineName =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").text();
									travelLineId =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").attr("data-travelLine-Id");

									layer.close(searchTravelLinelayer);
								}
								else{
								}
							}
							
							$("input[name=lineProductIdName]").val(travelLineName).trigger('change');
							$("input[name=lineProductId]").val(travelLineId);
						});
					}
				}
			});
		},
		batchAddTouristGroupMember:function(){
			var html = '<div class="col-xs-12 batchAddTouristGroupMemberContainer" style="margin-top:10px"><div><div class="red">批量添加格式为：游客姓名 手机号码  证件号(用空格隔开，一行一条)</div><div>举例：<br/>张三 &nbsp;&nbsp;&nbsp;&nbsp;138****8888&nbsp;&nbsp;&nbsp;&nbsp; 510***19891002****<br/>李四 &nbsp;&nbsp;&nbsp;&nbsp;137****7777&nbsp;&nbsp;&nbsp;&nbsp; 510***19881003****</div><div class="space-10"></div><div><textarea class="form-control" name="batchTouristGroupMember" style="height:200px"></textarea></div><div class="space-10"></div><button class="btn btn-block btn-primary btn-submit-batchTouristGroupMember"> <i class="ace-icon fa fa-check"></i>提交信息 </button></div></div>';
			var batchAddTouristGroupMemberLayer = layer.open({
			    type: 1,
			    title:"批量添加游客",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['600px', '470px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	$(".batchAddTouristGroupMemberContainer .btn-submit-batchTouristGroupMember").click(function(){
			    		var data = trim($(".batchAddTouristGroupMemberContainer textarea[name=batchTouristGroupMember]").val());
			    		if (data == "") {
			    			showMessageDialog($( "#confirm-dialog-message" ),"请输入要添加的数据");
			    		}else{
					    	var dataArray = data.split(/\r?\n/);
					    	if(dataArray.length > 0){
					    		for(var i=0;i<dataArray.length;i++){
					    			var memberInfo = dataArray[i];
					    			var memberInfoArray = memberInfo.split(/\s+/);
					    			console.log(memberInfoArray);
					    			var name = "";
					    			var mobileNumber = "";
					    			var idCardNumber = "";
					    			if(memberInfoArray.length == 1){
					    				name = memberInfoArray[0];
					    			}
					    			else if(memberInfoArray.length == 2){
					    				name = memberInfoArray[0];
					    				if(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(memberInfoArray[1])){
					    					idCardNumber = memberInfoArray[1];
					    				}
					    				else{
					    					mobileNumber = memberInfoArray[1];
					    				}
					    			}
					    			else if(memberInfoArray.length == 3){
					    				name = memberInfoArray[0];
					    				mobileNumber = memberInfoArray[1];
					    				idCardNumber = memberInfoArray[2];
					    			}
					    			// 如果第一行数据为空，则删除第一行
					    			
					    			var html=
						    			"<tr>"+
						    			"<td>"+"</td>"+
						    			"<td><input name=\"name\" type=\"text\" class=\"col-sm-12  no-padding-right\" value=\""+name+"\"/></td>"+
						    			"<td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\"  value=\""+mobileNumber+"\"/></td>"+
						    			"<td><select name=\"idCardType\"><option value=\"0\" selected=\"selected\">身份证</option>><option value=\"1\">护照</option><option value=\"2\">其它</option></select></td>"+
						    			"<td><input name=\"idCardNumber\" type=\"text\" class=\"col-sm-12  no-padding-right\" value=\""+idCardNumber+"\" /></td>"+
						    			"<td><div class=\"checkbox\"><label><input type=\"checkbox\" class=\"ace \" value=\"1\" name=\"isContactUser\"><span class=\"lbl\"></span></label></div></td>"+
						    			"<td><button class=\"btn btn-xs btn-danger btnDeleteTourist\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td>"+
						    			"</tr>";
						    		$(".addTouristList .addTouristTbody").append(html);
						    		$(".addTouristList tr:not(.deleted)").each(function(i){
										if(i>0){
											$(this).children().eq(0).text(i);
										}
									})
									//游客名单删除按钮绑定事件
						    		$(".addTouristList .btnDeleteTourist").click(function(){
						    			var tr = $(this).parent().parent();
						    			var touristListTrId = tr.attr("data-entity-id");
						    			if(!(touristListTrId!=null && touristListTrId!="")){
						    				$(this).parent().parent().fadeOut(function(){
						    					$(this).remove();
						    				})
						    			}
						    			else{
						    				$(this).parent().parent().fadeOut(function(){
								    			$(this).remove();
								    			MenberNumber();
								    		});
						    			}
							    	});
						    		layer.close(batchAddTouristGroupMemberLayer);
					    		}
					    	}
			    		}
			    	});
			    	
			    }
			});
		},
		bindTicketChoose : function(){
			var ticketChoose = $(".arrangeTouristMain .chooseTicket");
			ticketChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					var thisParent = $(_this).parent().parent();
					thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
				},
				change : function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=tickeId]").val(ui.item.id);
					}
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/ticket.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
					dataType:"json",
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var ticketList = JSON.parse(data.ticketList);
							if(ticketList && ticketList.length > 0){
								for(var i=0; i < ticketList.length; i++){
									ticketList[i].value = ticketList[i].name;
								}
								$(obj).autocomplete('option','source', ticketList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				});
			});
		},
		outArrangeDatepicker :function(clas,name){
			$(".arrangeTouristMain #"+clas+" input[name="+name+"]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		//接送车辆JSON组装
		outBusJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
    			var busJson = {//touristGroup.getArrangeTrValue(outBusTr.eq(i),""),
    				id : obj.eq(i).attr("data-entity-id"),
					serviceType : touristGroup.getArrangeTrValue(obj.eq(i),"serviceType"),
					busCompanyId : touristGroup.getArrangeTrValue(obj.eq(i),"busCompanyId"),
					busId : touristGroup.getArrangeTrValue(obj.eq(i),"busLicenseNumberId"),
					driverId : touristGroup.getArrangeTrValue(obj.eq(i),"driverId"),
					useTime : touristGroup.getArrangeTrValue(obj.eq(i),"bususeTime"),
					boardLocation : touristGroup.getArrangeTrValue(obj.eq(i),"boardLocation"),
					fee : touristGroup.getArrangeTrValue(obj.eq(i),"busFee"),
					reduceMoney : touristGroup.getArrangeTrValue(obj.eq(i),"busReduceMoney"),
					needPayMoney : touristGroup.getArrangeTrValue(obj.eq(i),"busNeedPayMoney"),
					payedMoney : touristGroup.getArrangeTrValue(obj.eq(i),"busPayedMoney"),
					payType : touristGroup.getArrangeTrValue(obj.eq(i),"busPayType")
				}
    			if(busJson.busCompanyId != "" && busJson.busCompanyId.length>0){
    				json.push(busJson);
    			}
    		}
		},
		//酒店安排JSON组装
		outHotelJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
				var hotelJson ={
	    				id : obj.eq(i).attr("data-entity-id"),
						serviceType : touristGroup.getArrangeTrValue(obj.eq(i),"serviceType"),
						checkInTime : touristGroup.getArrangeTrValue(obj.eq(i),"hotelCheckInTime"),
						hotelLevel : touristGroup.getArrangeTrValue(obj.eq(i),"hotelLevel"),
						hotelId : touristGroup.getArrangeTrValue(obj.eq(i),"hotelId"),
						hotelRoomId : touristGroup.getArrangeTrValue(obj.eq(i),"hotelRoomTypeId"),
						price : touristGroup.getArrangeTrValue(obj.eq(i),"hotelPrice"),
						memberCount : touristGroup.getArrangeTrValue(obj.eq(i),"hotelMemberCount"),
						reduceMoney : touristGroup.getArrangeTrValue(obj.eq(i),"hotelReduceMoney"),
						needPayMoney : touristGroup.getArrangeTrValue(obj.eq(i),"hotelNeedPayMoney"),
						payedMoney : touristGroup.getArrangeTrValue(obj.eq(i),"hotelPayedMoney"),
						payType : touristGroup.getArrangeTrValue(obj.eq(i),"hotelPayType")
				}
				if(hotelJson.hotelId != "" && hotelJson.hotelId.length>0){
    				json.push(hotelJson);
    			}
			}
		},
		//票务安排JSON组装
		outTicketJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
				var ticketJson ={
	    				id : obj.eq(i).attr("data-entity-id"),
						serviceType : touristGroup.getArrangeTrValue(obj.eq(i),"serviceType"),
						ticketId : touristGroup.getArrangeTrValue(obj.eq(i),"tickeId"),
						type : touristGroup.getArrangeTrValue(obj.eq(i),"ticketType"),
						startingCity : touristGroup.getArrangeTrValue(obj.eq(i),"ticketStartCity"),
						arriveCity : touristGroup.getArrangeTrValue(obj.eq(i),"ticketArriveCity"),
						startTime : touristGroup.getArrangeTrValue(obj.eq(i),"ticketStartTime"),
						shift : touristGroup.getArrangeTrValue(obj.eq(i),"ticketShift"),
						seatLevel : touristGroup.getArrangeTrValue(obj.eq(i),"ticketSeatLevel"),
						price : touristGroup.getArrangeTrValue(obj.eq(i),"ticketPrice"),
						memberCount : touristGroup.getArrangeTrValue(obj.eq(i),"ticketMemberCount"),
						reduceMoney : touristGroup.getArrangeTrValue(obj.eq(i),"ticketReduceMoney"),
						needPayMoney : touristGroup.getArrangeTrValue(obj.eq(i),"ticketNeedPayMoney"),
						payedMoney : touristGroup.getArrangeTrValue(obj.eq(i),"ticketPayedMoney"),
						payType : touristGroup.getArrangeTrValue(obj.eq(i),"ticketPayType")
				}
				if(ticketJson.ticketId != "" && ticketJson.ticketId.length>0){
    				json.push(ticketJson);
    			}
			}
		},
		//新增团外安排接送车辆
		addOutBusList :function(id,type){
			var html = '<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 chooseBusCompany" name="busCompanyName" type="text" value="" /><input type="hidden" name="busCompanyId" /></td>'+
			'<td><input class="col-sm-12 chooseBusLicenseNumber" name="busLicenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" /></td>'+
			'<td><input class="col-sm-12" name="busbrand" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 chooseDriver" name="driverName" type="text" value="" /><input type="hidden" name="driverId" /></td>'+
			'<td><input class="col-sm-12" name="driverMobileNumber" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="bususeTime" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="boardLocation" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busFee" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busReduceMoney" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busNeedPayMoney" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busPayedMoney" type="text" value="" /></td>'+
			'<td><select class="" name="busPayType" ><option value="0">现付</option><option value="1">账期</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete" title="删除"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .busList tbody").append(html);
	    	$(".arrangeTouristMain .busList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		touristGroup.delArrangeJudge (thisObj,"bus");
	    	})
    		touristGroup.bindBusCompanyChoose();
	    	touristGroup.outArrangeDatepicker("carList","bususeTime");
	    	touristGroup.outArrangeDatepicker("sendList","bususeTime");
	    	touristGroup.outArrangeDatepicker("receptionList","bususeTime");
		},
		//新增团外安排酒店
		addOutHotel :function(id,type){
			var html ='<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" />'+
			'<input class="col-sm-12" name="hotelCheckInTime" value="" type="text" /></td>'+
			'<td><select class="tripPlanHotelStar" name="hotelLevel"><option value="1">三星以下</option>'+
			'<option value="2">三星</option><option value="3">准四星</option>'+
			'<option value="4">四星</option><option value="5">准五星</option>'+
			'<option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input class="col-sm-12 chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" /></td>'+
			'<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelRoomType" value="" type="text" /><input type="hidden" name="hotelRoomTypeId" /></td>'+
			'<td><input class="col-sm-12" name="hotelPrice" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelMemberCount" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelReduceMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelPayedMoney" value="" type="text" /></td>'+
			'<td><select class="" name="hotelPayType" >'+
			'<option value="0">现付</option>'+
			'<option value="1">账期</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .hotelList tbody").append(html);
	    	$(".arrangeTouristMain .hotelList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		touristGroup.delArrangeJudge (thisObj,"hotel");
	    	})
	    	touristGroup.bindHotelChoose();
	    	touristGroup.outArrangeDatepicker("receptionList","hotelCheckInTime");
	    	touristGroup.outArrangeDatepicker("sendList","hotelCheckInTime");
		},
		//新增团外安排票务
		addTicketList :function(id,type){
			var html ='<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="tickeId" /></td>'+
			'<td><select class="" name="ticketType"><option value="1">机票</option>'+
			'<option value="2">汽车票</option><option value="3">火车票</option></select></td>'+
			'<td><input class="col-sm-12" name="ticketStartCity" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketArriveCity" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketStartTime" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketShift" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketSeatLevel" value="{{outTicket.seatLevel}}" type="text" />'+
			'<td><input class="col-sm-12" name="ticketPrice" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketMemberCount" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketReduceMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketPayedMoney" value="" type="text" /></td>'+
			'<td><select class="" name="ticketPayType" >'+
			'<option value="0">现付</option>'+
			'<option value="1">账期</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .ticketList tbody").append(html);
	    	$(".arrangeTouristMain .ticketList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		touristGroup.delArrangeJudge (thisObj,"ticket");
	    	})
	    	touristGroup.bindTicketChoose();
	    	touristGroup.outArrangeDatepicker("receptionList","ticketStartTime");
	    	touristGroup.outArrangeDatepicker("sendList","ticketStartTime");
		},
		getArrangeValue :function(name){
			var val = $(".arrangeTouristMain [name="+name+"]").val();
			return val;
		},
		getArrangeTrValue :function(obj,name){
			return obj.find("[name="+name+"]").val();
		},
		getArrangeTrId :function(thisObj){
			var id = thisObj.parent().parent().parent().parent().parent().parent().attr("id");
			return id;
		},
		//删除安排判断
    	delArrangeJudge :function(thisObj,type){
    		var id = thisObj.parent().parent().attr("data-entity-id");
    		if(id == null || id.length == 0){
    			thisObj.parent().parent().fadeOut(function(){
    				thisObj.parent().parent().remove();
    			});
    		}
    		else{
        		touristGroup.delArrangeTr(thisObj,id,type);
    		}
			
		},
		//删除安排事件 (及时删除）
		delArrangeTr :function(thisObj,id,type){
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
								url:""+APP_ROOT+"back/touristGroup.do?method=deleteTouristGroupArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"cateName="+type+"&id="+id+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
											thisObj.parent().parent().fadeOut(function(){
							    				thisObj.parent().parent().remove();
							    			});
										});
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该安排？");
				}
			});
		},
		bindBusCompanyChoose : function(){
			//选择车辆
			var chooseBusLicenseNumber = $(".arrangeTouristMain .chooseBusLicenseNumber");
			chooseBusLicenseNumber.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.bus), objParent = $obj.parent().parent();
								objParent.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
								objParent.find("input[name=busbrand]").val(d.brand);
							}
	                    }
	                 });
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent();
						objParent.find("input[name=busLicenseNumberId]").val("");
						objParent.find("input[name=licenseNumber]").val("");
						objParent.find("input[name=seatCount]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(objBus).parent().parent().find("input[name=busCompanyId]").val();
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
			//车队-车牌-司机
			var busCompanyChoose = $(".arrangeTouristMain .chooseBusCompany");
			busCompanyChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var $obj = $(this).parent().parent();
						$obj.find("input[name=busCompanyId]").val("");
						$obj.find("input[name=busLicenseNumber]").val("");
						$obj.find("input[name=busLicenseNumberId]").val("");
						$obj.find("input[name=busbrand]").val("");
						$obj.find("input[name=driverName]").val("");
						$obj.find("input[name=driverId]").val("");
						$obj.find("input[name=driverMobileNumber]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parent = $(_this).parent().parent()
					$(this).blur();
					
					parent.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					parent.find("input[name=busLicenseNumber]").val("");
					parent.find("input[name=busLicenseNumberId]").val("");
					parent.find("input[name=busbrand]").val("");
					parent.find("input[name=driverName]").val("");
					parent.find("input[name=driverId]").val("");
					parent.find("input[name=driverMobileNumber]").val("");
					
					var obj = this;
					/*if(chooseBusLicenseNumber){
						$(".addTripPlanMain .chooseBusLicenseNumber").autocomplete( "destroy");
					}*/
				}
			}).click(function(){
				var objC = this;
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
							$(objC).autocomplete('option','source', busCompanyList);
							$(objC).autocomplete('search', '');
						}
                    }
                });
			})
			//选择司机
			var chooseDriver = $(".arrangeTouristMain .chooseDriver");
			chooseDriver.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					$.ajax({
						url:""+APP_ROOT+"back/tripPlan.do?method=getDriverById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.driverNumber), objParent = $obj.parent().parent();
								objParent.find("input[name=driverId]").val(d.id).trigger('change');
								objParent.find("input[name=driverMobileNumber]").val(d.mobileNumber);
							}
	                    }
	                 });
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent();
						objParent.find("input[name=driverId]").val("");
						objParent.find("input[name=DmobileNumber]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(objBus).parent().parent().find("input[name=busCompanyId]").val();
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
			})
		},
		bindHotelChoose : function(){
			var hotelChoose = $(".arrangeTouristMain .chooseHotel");
			var $hotelStar = $(".arrangeTouristMain .tripPlanHotelStar");
			$hotelStar.off().on("change", function(){
				var parentObj = $(this).parent().parent();
				parentObj.find("input[name=hotelName]").val("");
				parentObj.find("input[name=hotelId]").val("");
				parentObj.find("input[name=hotelRoomType]").val("");
				parentObj.find("input[name=hotelRoomTypeId]").val("");
				parentObj.find("input[name=hotelMobileNumber]").val("");
				parentObj.find("input[name=hotelManagerName]").val("");
				parentObj.find("input[name=hotelPrice]").val("");
			});
			
			hotelChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).parent().parent();
						parents.find("input[name=hotelId]").val("");
						parents.find("input[name=hotelRoomType]").val("");
						parents.find("input[name=hotelRoomTypeId]").val("");
						parents.find("input[name=hotelMobileNumber]").val("");
						parents.find("input[name=hotelManagerName]").val("");
						parentObj.find("input[name=hotelPrice]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).parent().parent();
					parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
					
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    data:"id=" + ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var hotel = JSON.parse(data.hotel);
								parents.find("input[name=hotelMobileNumber]").val(hotel.mobileNumber);
								parents.find("input[name=hotelManagerName]").val(hotel.managerName);
							}
	                    }
					});
					if(this.chooseHotelRoom){
						parents.find("[name=hotelRoomType]").autocomplete( "destroy");
					}
					
					this.chooseHotelRoom = parents.find("[name=hotelRoomType]").autocomplete({
						minLength:0,
						change:function(event,ui){
							if(ui.item == null){
								$(this).val("");
								var objParent = $(this).parent().parent();
								objParent.find("input[name=hotelRoomTypeId]").val("");
								objParent.find("input[name=hotelPrice]").val("");
							}
						},
						select:function(event,ui){
							var $thisRoom =$(this).parent().parent();
							$thisRoom.find("input[name=hotelRoomTypeId]").val(ui.item.id);
							$.ajax({
								url:""+APP_ROOT+"back/hotel.do?method=findRoomDetailById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
			                    dataType: "json",
			                    data:"id=" + ui.item.id,
			                    success: function(data) {
			                    	var hotelRoom = JSON.parse(data.hotelRoom);
			                    	$thisRoom.find("input[name=hotelPrice]").val(hotelRoom.contractPrice);
			                    }
							})
						}
					}).off("click").on("click", function(){
						var _this = this;
						$.ajax({
							url:""+APP_ROOT+"back/hotel.do?method=findTypeByHotelId&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
		                    dataType: "json",
		                    data:"id=" + ui.item.id,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var hotelRommList = JSON.parse(data.hotelRommList);
									if(hotelRommList && hotelRommList.length > 0){
										for(var i=0; i < hotelRommList.length; i++){
											hotelRommList[i].value = hotelRommList[i].type;
										}
										$(_this).autocomplete('option','source', hotelRommList);
										$(_this).autocomplete('search', '');
									}else{
										layer.tips('没有房型可供选择，请选择其他星级', objhotelRoom, {
										    tips: [1, '#3595CC'],
										    time: 2000
										});
									}
								}
		                    }
		                });
					});
				}
			}).off("click").on("click", function(){
				var hotelStarValue = $hotelStar.val(),
				hotelStarValue = $(this).parent().parent().find('.tripPlanHotelStar').val();
			    obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findHotelListByLevel&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                dataType: "json",
	                data:"level=" + hotelStarValue,
	                success: function(data) {
	                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var hotelList = JSON.parse(data.hotelList);
							if(hotelList && hotelList.length > 0){
								for(var i=0; i < hotelList.length; i++){
									hotelList[i].value = hotelList[i].name;
								}
								$(obj).autocomplete('option','source', hotelList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有酒店可供选择', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	            });
			});
		},
		save : function(saveType){
			if(saveType == "add"){
				console.log("saveadd");
				touristGroup.submitAddTouristGroup();
			} else if(saveType == "update"){
				var id = $(".updateTouristGroup .btn-submit-addTouristGroup").attr("data-entity-id");
				console.log(id);
				var validator=rule.checktouristGroup($(".updateTouristGroup"));  
				touristGroup.submitUpdateTouristGroup(id,1);
			}
		},
		clearEdit : function(clearType){
			touristGroup.edited[clearType] = "";
		}
	}
	exports.getTouristStatisticData = touristGroup.getTouristStatisticData;
	exports.isEdited = touristGroup.isEdited;
	exports.save = touristGroup.save;
	exports.clearEdit = touristGroup.clearEdit;
})
						