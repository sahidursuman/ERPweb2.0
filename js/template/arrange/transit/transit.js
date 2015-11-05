define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_transit",
		listTemplate = require("./view/list"),
		arrangeTemplate = require("./view/arrange"),
		viewTemplate = require("./view/view");
		tabId = "tab-"+menuKey+"-content";
	var transit ={
		searchData : {
			fromPartnerAgencyName:"",
			fromPartnerAgencyId : "",
			lineProductName:"",
			lineProductId : "",
			startTime : "",
			arrangeUserName:"",
			arrangeUserId : "",
			arrangeStartTime : "",
			arrangeEndTime : "",
			status : "",
			shuttleType : "",
			shuttleTime : ""
		},
		edited : {},
		autocompleteDate : {},
		isEdited : function(editedType){
			if(!!transit.edited[editedType] && transit.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listTransit :function(page,fromPartnerAgencyName,fromPartnerAgencyId,lineProductId,lineProductName,startTime,arrangeUserId,arrangeUserName,arrangeStartTime,arrangeEndTime,status,shuttleType,shuttleTime){
			transit.searchData = {
				fromPartnerAgencyName:fromPartnerAgencyName,
				fromPartnerAgencyId : fromPartnerAgencyId,
				lineProductName:lineProductName,
				lineProductId : lineProductId,
				startTime : startTime,
				arrangeUserName:arrangeUserName,
				arrangeUserId : arrangeUserId,
				arrangeStartTime : arrangeStartTime,
				arrangeEndTime : arrangeEndTime,
				status : status,
				shuttleType : shuttleType,
				shuttleTime : shuttleTime
			};
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=listTransitArrange&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&sortType=auto"+"&fromPartnerAgencyName="+fromPartnerAgencyName+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&lineProductName="+lineProductName+"&lineProductId="+lineProductId+"&startTime="+startTime+"&arrangeUserName="+arrangeUserName+"&arrangeUserId="+arrangeUserId+"&arrangeStartTime="+arrangeStartTime+"&arrangeEndTime="+arrangeEndTime+"&status="+status+"&shuttleType="+shuttleType+"&shuttleTime="+shuttleTime,
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
						data.outRemarkArrangeList = JSON.parse(data.outRemarkArrangeList);
						var html = listTemplate(data);
						addTab(menuKey,"中转安排",html);
						transit.initList(data);
						transit.getQueryTerms();
						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		transit.listTransit(obj.curr -1,transit.searchData.fromPartnerAgencyName,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.lineProductName,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeUserName,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime);
						    	}
						    }
						});		
					}
				}
			});
		},
		initList : function(data){
			var tab = "tab-arrange_transit-content";
			// 时间控件
			transit.datePicker(tab);
			//编辑中转安排
			$("#"+tab+" .btn-transit-edit").click(function(){
				var id = $(this).attr("data-entity-id");
				transit.updateTransit(id);
			});
			//查看中转安排
			$("#"+tab+" .btn-transit-view").click(function(){
				var id = $(this).attr("data-entity-id");
				transit.viewTransit(id);
			});
			//发送中转安排信息
			$("#"+tab+" .btn-transit-send").click(function(){
				var id = $(this).attr("data-entity-id");
				transit.sendTransit(id);
			});
			//导出中转安排信息 
			$("#"+tab+" .btn-transit-export").click(function(){
				var id = $(this).attr("data-entity-id");
				transit.exportTransit(id);
			});
			//线路下拉搜索
			//transit.lineProductChoose(tab);
			transit.lineProductChoose($("#tab-"+menuKey+"-content"));
			//组团社下拉搜索
			//transit.partnerAgencyChoose(tab);
			transit.partnerAgencyChoose($("#tab-"+menuKey+"-content"));
			//安排人下拉搜索			    	
			//transit.arrangeUserChoose(tab);
			transit.arrangeUserChoose($("#tab-"+menuKey+"-content"));
			//搜索栏状态button下拉事件
			$("#"+tab+" .search-area .btn-status .dropdown-menu a").click(function(){
				$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
				$(this).parent().parent().parent().find("span").text($(this).text());
				transit.searchData = {
					fromPartnerAgencyName : $("#"+tab+" input[name=fromPartnerAgencyName]").val(),
					fromPartnerAgencyId : $("#"+tab+" input[name=partnerAgencyId]").val(),
					lineProductName : $("#"+tab+" input[name=lineProductName]").val(),
					lineProductId : $("#"+tab+" input[name=lineProductId]").val(),
					startTime : $("#"+tab+" input[name=startTime]").val(),
					arrangeUserName :$("#"+tab+" input[name=arrangeUserName]").val(),
					arrangeUserId :$("#"+tab+" input[name=arrangeUserId]").val(),
					arrangeStartTime : $("#"+tab+" input[name=arrangeStartTime]").val(),
					arrangeEndTime : $("#"+tab+" input[name=arrangeEndTime]").val(),
					//status : $("#"+tab+" select[name=status]").val(),
					status :$("#"+tab+" .search-area .btn-status").find("button").attr("data-value"),
					shuttleType :$("#"+tab+" select[name=shuttleType]").val(),
					shuttleTime :$("#"+tab+" input[name=shuttleTime]").val()
				}
				transit.listTransit(0,transit.searchData.fromPartnerAgencyName,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.lineProductName,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeUserName,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime)
			});
			//筛选事件绑定
			$("#"+tab+" .btn-touristGroupList-search").click(function(){
				transit.searchData = {
					fromPartnerAgencyName : $("#"+tab+" input[name=fromPartnerAgencyName]").val(),
					fromPartnerAgencyId : $("#"+tab+" input[name=partnerAgencyId]").val(),
					lineProductName : $("#"+tab+" input[name=lineProductName]").val(),
					lineProductId : $("#"+tab+" input[name=lineProductId]").val(),
					startTime : $("#"+tab+" input[name=startTime]").val(),
					arrangeUserName :$("#"+tab+" input[name=arrangeUserName]").val(),
					arrangeUserId :$("#"+tab+" input[name=arrangeUserId]").val(),
					arrangeStartTime : $("#"+tab+" input[name=arrangeStartTime]").val(),
					arrangeEndTime : $("#"+tab+" input[name=arrangeEndTime]").val(),
					//status : $("#"+tab+" select[name=status]").val(),
					status :$("#"+tab+" .search-area .btn-status").find("button").attr("data-value"),
					shuttleType :$("#"+tab+" select[name=shuttleType]").val(),
					shuttleTime :$("#"+tab+" input[name=shuttleTime]").val()
				}
				transit.listTransit(0,transit.searchData.fromPartnerAgencyName,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.lineProductName,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeUserName,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime)
			})
		},
		viewTransit :function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupArrangeById&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
				type:"POST",
				dataType:"json",
				data:"id="+id,
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.bus = JSON.parse(data.bus);
						data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
						data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
						data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
						data.receiveGroup.outRestaurantList = JSON.parse(data.receiveGroup.outRestaurantList);
						data.receiveGroup.outOtherList = JSON.parse(data.receiveGroup.outOtherList);
						data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
						data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
						data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
						data.sendGroup.outRestaurantList = JSON.parse(data.sendGroup.outRestaurantList);
						data.sendGroup.outOtherList = JSON.parse(data.sendGroup.outOtherList);
						data.touristGroup = JSON.parse(data.touristGroup);
						var html =viewTemplate(data);
						addTab(menuKey+"-view","查看中转安排",html);
					}
				}
			})
		},
		sendTransit :function(id){
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
								url:""+APP_ROOT+"back/touristGroup.do?method=noticeTouristInfo&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
								type:"POST",
								dataType:"json",
								data:"id="+id,
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										showMessageDialog($( "#confirm-dialog-message" ), "发送成功",function(){
											transit.listTransit(0,"","","","","","","","","","","","");
										});
									}
								}
							})
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("是否发送通知？");
				}
			})
		},
		exportTransit :function(id){
			var url = ""+APP_ROOT+"back/export.do?method=exportOutTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&id="+id;
			exportXLS(url);
		},
		updateTransit :function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupArrangeById&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
				type:"POST",
				dataType:"json",
				data:"id="+id,
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					console.log(data);
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.bus = JSON.parse(data.bus);
						data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
						data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
						data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
						data.receiveGroup.outRestaurantList = JSON.parse(data.receiveGroup.outRestaurantList);
						data.receiveGroup.outOtherList = JSON.parse(data.receiveGroup.outOtherList);
						data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
						data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
						data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
						data.sendGroup.outRestaurantList = JSON.parse(data.sendGroup.outRestaurantList);
						data.sendGroup.outOtherList = JSON.parse(data.sendGroup.outOtherList);
						data.touristGroup = JSON.parse(data.touristGroup);
						var html =arrangeTemplate(data);
						html  = filterUnAuth(html);
						//已修改提示
						var tab = "tab-arrange_transit-update-content";
						var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
						if($(".tab-"+menuKey+"-update").length > 0) {
							addTab(menuKey+"-update","编辑中转安排");
							if(!!transit.edited["update"] && transit.edited["update"] == "update"){
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									validator = rule.setTranistCheckor($(".arrangeTouristMain"));
									if (!validator.form()) {
										return;
									}
									transit.submitUpdateTransit($(".arrangeTouristMain .btn-updateArrange").attr("data-entity-id"),0);
									transit.edited["update"] = "";
									addTab(menuKey+"-update","编辑中转安排",html);
									validator = rule.setTranistCheckor($(".arrangeTouristMain"));
									transit.initUpdate(id,data,validator);
								},function(){
									addTab(menuKey+"-update","编辑中转安排",html);
									validator = rule.setTranistCheckor($(".arrangeTouristMain"));
									transit.initUpdate(id,data,validator);
									transit.edited["update"] = "";
								});
							}else{
								addTab(menuKey+"-update","编辑中转安排",html);
								transit.initUpdate(id,data,validator);
								validator = rule.setTranistCheckor($(".arrangeTouristMain"));
							}
						}else{
							addTab(menuKey+"-update","编辑中转安排",html);
							validator = rule.setTranistCheckor($(".arrangeTouristMain"));
							transit.initUpdate(id,data,validator);
						}
					}
				}
			})
		},
		initUpdate : function(id,data,validator){
			var tab = "tab-arrange_transit-update-content";
			// 设置表单验证
			//var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
			$('.arrangeTouristMain').on("change",function(){
				transit.edited["update"] = "update";
			});
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
			//接待-------------------------开始---------------------------------------------------------	
			$("#"+tab+" #receptionList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,0,tab,validator);
			})
			$("#"+tab+" #receptionList .btn-hotel-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutHotel(id,0,tab,validator);
			})
			$("#"+tab+" #receptionList .btn-ticket-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addTicketList(id,0,tab,validator);
			})
			$("#"+tab+" #receptionList .btn-restaurant-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addRestaurantList(id,0,tab,validator);
			})
			$("#"+tab+" #receptionList .btn-other-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOtherList(id,0,tab,validator);
			})
			//小车--------------------------开始--------------------------------------------------------	
			$("#"+tab+" #carList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,2,tab,validator);
			})
			//送团--------------------------开始--------------------------------------------------------	
			$("#"+tab+" #sendList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,1,tab,validator);
			})
			$("#"+tab+" #sendList .btn-hotel-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutHotel(id,1,tab,validator);
			})
			$("#"+tab+" #sendList .btn-ticket-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addTicketList(id,1,tab,validator);
			})
			$("#"+tab+" #sendList .btn-restaurant-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addRestaurantList(id,1,tab,validator);
			})
			$("#"+tab+" #sendList .btn-other-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOtherList(id,1,tab,validator);
			})

			//删除安排事件绑定
			$("#"+tab+" .arrangeTouristMain .busList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"bus");
			})
			$("#"+tab+" .arrangeTouristMain .hotelList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"hotel");
			})
			$("#"+tab+" .arrangeTouristMain .ticketList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"ticket");
			})
			$("#"+tab+" .arrangeTouristMain .restaurantList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"restaurant");
			})
			$("#"+tab+" .arrangeTouristMain .otherList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"other");
			})

			//车辆信息 联动
			transit.bindBusCompanyChoose(tab);
			//酒店信息 联动
			transit.bindHotelChoose(tab);
			//票务信息 联动
			transit.bindTicketChoose(tab);
			//餐厅信息 联动
			transit.bindRestaurantChoose(tab);
			//日期插件绑定
			transit.outArrangeDateTimepicker("receptionList","bususeTime",tab);
			transit.outArrangeDatepicker("receptionList","hotelCheckInTime",tab);
			transit.outArrangeDateTimepicker("receptionList","ticketStartTime",tab);
			transit.outArrangeDatepicker("receptionList","startTime",tab);
			transit.outArrangeDateTimepicker("carList","bususeTime",tab);
			transit.outArrangeDateTimepicker("sendList","bususeTime",tab);
			transit.outArrangeDatepicker("sendList","hotelCheckInTime",tab);
			transit.outArrangeDateTimepicker("sendList","ticketStartTime",tab);
			transit.outArrangeDatepicker("sendList","startTime",tab);

			//提交安排事件绑定
			$("#"+tab+" .arrangeTouristMain .btn-updateArrange").click(function(){
				transit.submitUpdateTransit(id,1);
			})
			//添加资源
			transit.addResource(tab);
		},
		//添加资源 
		addResource : function(tab){
			$("#"+tab+" .T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany}, KingServices.addResourceFunction);
			$("#"+tab+" .T-addHotelResource").off('click').on("click",{function : KingServices.addHotel , type : "tr" , name : "hotelName" , id : "hotelId" , managerName : "hotelManagerName" , mobileNumber : "hotelMobileNumber"}, KingServices.addResourceFunction);
			$("#"+tab+" .T-addTicketResource").off('click').on("click",{function : KingServices.addTicket , type : "tr" , name : "ticketName" , id : "tickeId"}, KingServices.addResourceFunction);
			$("#"+tab+" .T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant , type : "tr" , name : "restaurant" , id : "restaurantId" , managerName : "manager" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
			
			$("#"+tab).find(".T-addBusResource,.T-addDriverResource").off('click').on("click",{
				function : KingServices.addBusDriver,
				busCompanyName : "busCompanyName",
				busCompanyId : "busCompanyId",
				busLicenseNumberId : "busLicenseNumberId",
				busLicenseNumber : "busLicenseNumber",
				busbrand : "busbrand",
				seatCount : "seatCount",
				driverName : "driverName",
				driverId : "driverId",
				driverMobileNumber : "driverMobileNumber",
				type : "tr"
			}, KingServices.addBusDriverFunction);
		},
		//接送车辆JSON组装
		outBusJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
				var busJson = {//touristGroup.getArrangeTrValue(outBusTr.eq(i),""),
					id : obj.eq(i).attr("data-entity-id"),
					serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
					busCompanyId : transit.getArrangeTrValue(obj.eq(i),"busCompanyId"),
					busId : transit.getArrangeTrValue(obj.eq(i),"busLicenseNumberId"),
					driverId : transit.getArrangeTrValue(obj.eq(i),"driverId"),
					useTime : transit.getArrangeTrValue(obj.eq(i),"bususeTime"),
					boardLocation : transit.getArrangeTrValue(obj.eq(i),"boardLocation"),
					fee : transit.getArrangeTrValue(obj.eq(i),"busFee"),
					reduceMoney : transit.getArrangeTrValue(obj.eq(i),"busReduceMoney"),
					needPayMoney : transit.getArrangeTrValue(obj.eq(i),"busNeedPayMoney"),
					payedMoney : transit.getArrangeTrValue(obj.eq(i),"busPayedMoney"),
					payType : transit.getArrangeTrValue(obj.eq(i),"busPayType"),
					remark : transit.getArrangeTrValue(obj.eq(i),"remark")
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
					serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
					checkInTime : transit.getArrangeTrValue(obj.eq(i),"hotelCheckInTime"),
					hotelLevel : transit.getArrangeTrValue(obj.eq(i),"hotelLevel"),
					hotelId : transit.getArrangeTrValue(obj.eq(i),"hotelId"),
					hotelRoomId : transit.getArrangeTrValue(obj.eq(i),"hotelRoomTypeId"),
					price : transit.getArrangeTrValue(obj.eq(i),"hotelPrice"),
					memberCount : transit.getArrangeTrValue(obj.eq(i),"hotelMemberCount"),
					reduceMoney : transit.getArrangeTrValue(obj.eq(i),"hotelReduceMoney"),
					needPayMoney : transit.getArrangeTrValue(obj.eq(i),"hotelNeedPayMoney"),
					payedMoney : transit.getArrangeTrValue(obj.eq(i),"hotelPayedMoney"),
					payType : transit.getArrangeTrValue(obj.eq(i),"hotelPayType"),
					remark : transit.getArrangeTrValue(obj.eq(i),"remark")
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
					serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
					ticketId : transit.getArrangeTrValue(obj.eq(i),"tickeId"),
					type : transit.getArrangeTrValue(obj.eq(i),"ticketType"),
					startingCity : transit.getArrangeTrValue(obj.eq(i),"ticketStartCity"),
					arriveCity : transit.getArrangeTrValue(obj.eq(i),"ticketArriveCity"),
					startTime : transit.getArrangeTrValue(obj.eq(i),"ticketStartTime"),
					shift : transit.getArrangeTrValue(obj.eq(i),"ticketShift"),
					seatLevel : transit.getArrangeTrValue(obj.eq(i),"ticketSeatLevel"),
					price : transit.getArrangeTrValue(obj.eq(i),"ticketPrice"),
					memberCount : transit.getArrangeTrValue(obj.eq(i),"ticketMemberCount"),
					reduceMoney : transit.getArrangeTrValue(obj.eq(i),"ticketReduceMoney"),
					needPayMoney : transit.getArrangeTrValue(obj.eq(i),"ticketNeedPayMoney"),
					payedMoney : transit.getArrangeTrValue(obj.eq(i),"ticketPayedMoney"),
					payType : transit.getArrangeTrValue(obj.eq(i),"ticketPayType"),
					remark : transit.getArrangeTrValue(obj.eq(i),"remark")
				}
				if(ticketJson.ticketId != "" && ticketJson.ticketId.length>0){
					json.push(ticketJson);
				}
			}
		},
		//餐厅安排JSON组装
		outRestaurantJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
				var restaurantJson ={
					id : obj.eq(i).attr("data-entity-id"),
					serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
					startTime : transit.getArrangeTrValue(obj.eq(i),"startTime"),
					restaurantId : transit.getArrangeTrValue(obj.eq(i),"restaurantId"),
					standardType : transit.getArrangeTrValue(obj.eq(i),"standardType"),
					price : transit.getArrangeTrValue(obj.eq(i),"price"),
					memberCount : transit.getArrangeTrValue(obj.eq(i),"memberCount"),
					reduceMoney : transit.getArrangeTrValue(obj.eq(i),"reduceMoney"),
					needPayMoney : transit.getArrangeTrValue(obj.eq(i),"needPayMoney"),
					payedMoney : transit.getArrangeTrValue(obj.eq(i),"payedMoney"),
					payType : transit.getArrangeTrValue(obj.eq(i),"payType"),
					remark : transit.getArrangeTrValue(obj.eq(i),"remark")
				}
				if(restaurantJson.restaurantId != "" && restaurantJson.restaurantId.length>0){
					json.push(restaurantJson);
				}
			}
			console.log(json);
		},
		//其他安排JSON组装
		outOtherJson :function(obj,json){
			for(var i = 0; i<obj.length; i++){
				var otherJson ={
					id : obj.eq(i).attr("data-entity-id"),
					serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
					name : transit.getArrangeTrValue(obj.eq(i),"name"),
					mobileNumber : transit.getArrangeTrValue(obj.eq(i),"mobileNumber"),
					managerName : transit.getArrangeTrValue(obj.eq(i),"managerName"),
					startTime : transit.getArrangeTrValue(obj.eq(i),"startTime"),
					price : transit.getArrangeTrValue(obj.eq(i),"price"),
					memberCount : transit.getArrangeTrValue(obj.eq(i),"memberCount"),
					reduceMoney : transit.getArrangeTrValue(obj.eq(i),"reduceMoney"),
					needPayMoney : transit.getArrangeTrValue(obj.eq(i),"needPayMoney"),
					payedMoney : transit.getArrangeTrValue(obj.eq(i),"payedMoney"),
					payType : transit.getArrangeTrValue(obj.eq(i),"payType"),
					remark : transit.getArrangeTrValue(obj.eq(i),"remark")
				}
				if(otherJson.name != "" && otherJson.name.length>0){
					json.push(otherJson);
				}
			}
		},
		//新增团外安排接送车辆
		addOutBusList :function(id,type,tab,validator){
			var html = '<tr data-entity-id="">'+
			'<td><input type="text" class="col-sm-12 chooseSeatCount" name="seatCount" value="" /></td>'+
			'<td><input class="col-sm-12 chooseBusBrand" name="busbrand" type="text" value="" /></td>'+
			'<td><div class="col-sm-12"><input class="col-sm-12 chooseBusLicenseNumber bind-change" name="busLicenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" value="" /><span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" />'+
			'<input class="col-sm-12 bind-change" name="busCompanyName" readonly="readonly" type="text" value="" />'+
			'<input type="hidden" name="busCompanyId" value="" /><span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><div class="col-sm-12"><input class="col-sm-12 chooseDriver bind-change" name="driverName" type="text" value="" /><input type="hidden" name="driverId" value="" /><span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><input class="col-sm-12" name="driverMobileNumber" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 datetimepicker" name="bususeTime" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="boardLocation" type="text"  maxlength="20"  value="" /></td>'+
			'<td><input class="col-sm-12 price" name="busFee" type="text"  maxlength="9" value="" /><input type="hidden" class="count" value="1" /></td>'+
			'<td><input class="col-sm-12 discount" name="busReduceMoney"  maxlength="9" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 needPay" readonly="readonly" name="busNeedPayMoney"  maxlength="9" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busPayedMoney" maxlength="9" type="text" value="" /></td>'+
			'<td><select class="" name="busPayType"><option value="0" {{if outBus.payType == 0}}selected="selected"{{/if}}>现付</option>'+
			'<option value="1" {{if outBus.payType == 1}}selected="selected"{{/if}}>签单</option><option value="2" {{if outBus.payType == 2}}selected="selected"{{/if}}>转账</option><option value="3" {{if outBus.payType == 3}}selected="selected"{{/if}}>网付</option></select></td>'+
			'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
			'<td><a class="cursor arrange-delete" title="删除">删除</a></td>'+
			'</tr>';
			html  = filterUnAuth(html);//权限过滤
			$("#"+id+" .busList tbody").append(html);
			//表单验证
			//var validator = rule.setTranistCheckor($('#'+id));
			rule.update(validator);
			$("#"+tab+" .arrangeTouristMain .busList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"bus");
			})
			transit.addResource(tab);
			transit.bindBusCompanyChoose(tab);
			transit.outArrangeDateTimepicker("carList","bususeTime",tab);
			transit.outArrangeDateTimepicker("sendList","bususeTime",tab);
			transit.outArrangeDateTimepicker("receptionList","bususeTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增团外安排酒店
		addOutHotel :function(id,type,tab,validator){
			var html ='<tr>'+
				'<td><input type="hidden" name="serviceType" value="'+type+'" />'+
				'<input class="col-sm-12" name="hotelCheckInTime" value="" type="text" /></td>'+
				'<td><select class="tripPlanHotelStar" name="hotelLevel"><option value="1">三星以下</option>'+
				'<option value="2">三星</option><option value="3">准四星</option>'+
				'<option value="4">四星</option><option value="5">准五星</option>'+
				'<option value="6">五星</option><option value="7">五星以上</option></select></td>'+
				'<td><div class="col-sm-12"><input class="col-sm-12 chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" />'+
				'<span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
				'<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>'+
				'<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>'+
				'<td><input class="col-sm-12" name="hotelRoomType" value=""  type="text" /><input type="hidden" name="hotelRoomTypeId" /></td>'+
				'<td><input class="col-sm-12 price" name="hotelPrice" value="" maxlength="9" type="text" /></td>'+
				'<td><input class="col-sm-12 count" name="hotelMemberCount"  maxlength="6" value="" type="text" /></td>'+
				'<td><input class="col-sm-12 discount" name="hotelReduceMoney"  maxlength="9" value="" type="text" /></td>'+
				'<td><input class="col-sm-12 needPay" readonly="readonly" name="hotelNeedPayMoney" value="" type="text" /></td>'+
				'<td><input class="col-sm-12" name="hotelPayedMoney" value="" type="text" maxlength="9" /></td>'+
				'<td><select class="" name="hotelPayType" >'+
				'<option value="0">现付</option>'+
				'<option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>'+
				'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
				'<td><a class="cursor arrange-delete" title="删除">删除</a></td>'+
				'</tr>';
			html  = filterUnAuth(html);
			$("#"+id+" .hotelList tbody").append(html);
			//表单验证
			rule.update(validator);
			$("#"+tab+" .arrangeTouristMain .hotelList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"hotel");
			})
			transit.addResource(tab);
			transit.bindHotelChoose(tab);
			transit.outArrangeDatepicker("receptionList","hotelCheckInTime",tab);
			transit.outArrangeDatepicker("sendList","hotelCheckInTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增团外安排票务
		addTicketList :function(id,type,tab,validator){
			var html ='<tr>'+
				'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="tickeId" />'+
				'<span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
				'<td><select class="" name="ticketType"><option value="1">机票</option>'+
				'<option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
				'<td><input class="col-sm-12" name="ticketStartCity" value="" maxlength="20"  type="text" /></td>'+
				'<td><input class="col-sm-12" name="ticketArriveCity" value="" maxlength="20"  type="text" /></td>'+
				'<td><input class="col-sm-12" name="ticketStartTime" value="" type="text" /></td>'+
				'<td><input class="col-sm-12" name="ticketShift" value=""  maxlength="20"  type="text" /></td>'+
				'<td><input class="col-sm-12" name="ticketSeatLevel"  maxlength="20"  value="" type="text" />'+
				'<td><input class="col-sm-12 price" name="ticketPrice"  maxlength="9"  value="" type="text" /></td>'+
				'<td><input class="col-sm-12 count" name="ticketMemberCount"  maxlength="6"  value="" type="text" /></td>'+
				'<td><input class="col-sm-12 discount" name="ticketReduceMoney" value=""  maxlength="9"  type="text" /></td>'+
				'<td><input class="col-sm-12 needPay" readonly="readonly" name="ticketNeedPayMoney" value="" type="text" /></td>'+
				'<td><input class="col-sm-12" name="ticketPayedMoney" value=""  maxlength="9"  type="text" /></td>'+
				'<td><select class="" name="ticketPayType" >'+
				'<option value="0">现付</option>'+
				'<option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>'+
				'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
				'<td><a class="cursor arrange-delete" title="删除">删除</a></td>'+
				'</tr>';
			html  = filterUnAuth(html);
			$("#"+id+" .ticketList tbody").append(html);
			//表单验证
			rule.update(validator);
			$("#"+tab+" .arrangeTouristMain .ticketList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"ticket");
			})
			transit.addResource(tab);
			transit.bindTicketChoose(tab);
			transit.outArrangeDateTimepicker("receptionList","ticketStartTime",tab);
			transit.outArrangeDateTimepicker("sendList","ticketStartTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增餐厅安排
		addRestaurantList :function(id,type,tab,validator){
			var html = '<tr data-entity-id="">'+
				'<td><input class="col-sm-12" name="startTime" type="text" value="" /></td>'+
				'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 bind-change chooseRestaurant" name="restaurant" type="text" value="" />'+
				'<input type="hidden" name="restaurantId" value="" />'+
				'<span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
				'<td><input class="col-sm-12" name="manager" readonly="readonly" type="text" value="" /></td>'+
				'<td><input class="col-sm-12" name="mobileNumber" readonly="readonly" type="text" value="" /></td>'+
				'<td><select name="standardType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select>'+
				'</td><td><input class="col-sm-12 chooseStandard price" name="restaurantStandardId" type="text" value="" maxlength="9" /><input type="hidden" name="price" value="" />'+
				'</td><td><input class="col-sm-12 count" name="memberCount" maxlength="6" type="text" value="" /></td>'+
				'<td><input class="col-sm-12 discount" name="reduceMoney" maxlength="9" type="text" value="" /></td>'+
				'<td><input class="col-sm-12 needPay" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
				'<td><input class="col-sm-12" name="payedMoney" maxlength="9"  type="text" value="" /></td>'+
				'<td><select class="" name="payType"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>'+
				'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
				'<td><a class="cursor arrange-delete" title="删除">删除</a></td>'+
				'</tr>';
			html  = filterUnAuth(html);
			$("#"+id+" .restaurantList tbody").append(html);
			//表单验证
			rule.update(validator);
			transit.bindRestaurantChoose(tab);
			$("#"+tab+" .arrangeTouristMain .restaurantList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"restaurant");
			})
			transit.addResource(tab);
			transit.outArrangeDatepicker("receptionList","startTime",tab);
			transit.outArrangeDatepicker("sendList","startTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增其他安排
		addOtherList :function(id,type,tab,validator){
			var html = '<tr data-entity-id="">'+
				'<td><input class="col-sm-12" name="startTime" type="text" value="" /></td>'+
				'<td><input class="col-sm-12" name="name" type="text" value="" maxlength="30" /><input type="hidden" name="serviceType" value="'+type+'" /></td>'+
				'<td><input class="col-sm-12" name="managerName" type="text" value="" maxlength="20" /></td>'+
				'<td><input class="col-sm-12" name="mobileNumber" type="text" maxlength="11" value="" /></td>'+
				'<td><input class="col-sm-12 price" name="price" type="text" maxlength="9" value="" /></td>'+
				'<td><input class="col-sm-12 count" name="memberCount" type="text" maxlength="9" value="" /></td>'+
				'<td><input class="col-sm-12 discount" name="reduceMoney" type="text" maxlength="9" value="" /></td>'+
				'<td><input class="col-sm-12 needPay" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
				'<td><input class="col-sm-12" name="payedMoney" type="text" maxlength="9" value="" /></td>'+
				'<td><select class="" name="payType"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>'+
				'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000"/></td>'+
				'<td><a class="cursor arrange-delete" title="删除">删除</a></td>'+
				'</tr>';
			$("#"+id+" .otherList tbody").append(html);
			//表单验证
			rule.update(validator);
			$("#"+tab+" .arrangeTouristMain .otherList .arrange-delete").click(function(){
				var thisObj = $(this);
				transit.delArrangeJudge (thisObj,"other");
			})
			transit.outArrangeDatepicker("receptionList","startTime",tab);
			transit.outArrangeDatepicker("sendList","startTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		getArrangeValue :function(name){
			var val = $(".arrangeTouristMain [name="+name+"]").val();
			return val;
		},
		getArrangeTrValue :function(obj,name){
			return obj.find("[name="+name+"]").val();
		},
		getArrangeTrId :function(thisObj){
			var id = thisObj.closest('.tab-pane').attr("id");
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
				transit.delArrangeTr(thisObj,id,type);
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
								url:""+APP_ROOT+"back/touristGroup.do?method=deleteTouristGroupArrange&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=delete",
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
		bindBusCompanyChoose : function(tab){
			//选择车座位数
			var chooseSeatCount = $("#"+tab).find(".chooseSeatCount");
			chooseSeatCount.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('tr');
						$this.val("");
						parents.find("input[name=busbrand]").val("");
						parents.find("input[name=busLicenseNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompanyName]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('tr');
					parents.find("input[name=busbrand]").val("");
					parents.find("input[name=busLicenseNumber]").val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompanyName]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=driverMobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/bookingOrder.do?method=getSeatCountList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					dataType:"json",
					showLoading: false,
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
								layer.tips('无数据', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			})
			//选择品牌
			var chooseBrand = $("#"+tab).find(".chooseBusBrand");
			chooseBrand.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('tr');
						$this.val("");
						parents.find("input[name=busLicenseNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompanyName]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('tr');
						parents.find("input[name=busLicenseNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompanyName]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).closest('tr').find("[name=seatCount]").val();
				if(!!seatCount){
					$.ajax({
						url:""+APP_ROOT+"back/bookingOrder.do?method=getBusBrandList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"",
						dateType:"json",
						showLoading:false,
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
									layer.tips('无数据', obj, {
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
			});
			//选择车辆
			var chooseLicense = $("#"+tab).find(".chooseBusLicenseNumber ");
			chooseLicense.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('tr');
						$this.val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompanyName]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('tr');
						parents.find("input[name=busCompanyName]").val(ui.item.busCompanyName);
						parents.find("input[name=busCompanyId]").val(ui.item.busCompanyId);
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this,parents = $(obj).closest('tr'),
					seatCount = parents.find("[name=seatCount]").val(),
					busBrand = parents.find("[name=busbrand]").val();
				if (!!seatCount) {
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data: {
							seatCount: seatCount,
							brand: busBrand
						},
						dateType:"json",
						showLoading:false,
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
									layer.tips('无数据', obj, {
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
			});
			//司机选择
			var chooseDriver = $("#"+tab).find(".chooseDriver");
			chooseDriver.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('tr');
						$this.val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=driverMobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('tr');
					parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
					parents.find("input[name=driverMobileNumber]").val(ui.item.mobileNumber);
				}
			}).unbind("click").click(function(){
				var obj = this;
				var busLicenseNumberId = $(this).closest('tr').find("input[name=busLicenseNumberId]").val();
				if(busLicenseNumberId){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getDrivers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"busId="+busLicenseNumberId+"",
						dateType:"json",
						showLoading:false,
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
									layer.tips('无数据', obj, {
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
			});
			/*var chooseBusLicenseNumber = $("#"+tab+" .arrangeTouristMain .chooseBusLicenseNumber");
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
								var d = JSON.parse(data.bus), objParent = $obj.closest('tr');
								objParent.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
								objParent.find("input[name=busbrand]").val(d.brand);
							}
						}
					});
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).closest('tr');
						objParent.find("input[name=busLicenseNumberId]").val("");
						objParent.find("input[name=licenseNumber]").val("");
						objParent.find("input[name=seatCount]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(objBus).closest('tr').find("input[name=busCompanyId]").val();
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
			var busCompanyChoose = $("#"+tab+" .arrangeTouristMain .chooseBusCompany");
			busCompanyChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var $obj = $(this).closest('tr');
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
					var _this = this, parent = $(_this).closest('tr')
					$(this).blur();
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					parent.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					parent.find("input[name=busLicenseNumber]").val("");
					parent.find("input[name=busLicenseNumberId]").val("");
					parent.find("input[name=busbrand]").val("");
					parent.find("input[name=driverName]").val("");
					parent.find("input[name=driverId]").val("");
					parent.find("input[name=driverMobileNumber]").val("");
					rule.updateTranistCheckor(validator);

					var obj = this;
					/*if(chooseBusLicenseNumber){
					 $(".addTripPlanMain .chooseBusLicenseNumber").autocomplete( "destroy");
					 }
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
			var chooseDriver = $("#"+tab+" .arrangeTouristMain .chooseDriver");
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
								var d = JSON.parse(data.driverNumber), objParent = $obj.closest('tr');
								objParent.find("input[name=driverId]").val(d.id).trigger('change');
								objParent.find("input[name=driverMobileNumber]").val(d.mobileNumber);
							}
						}
					});
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).closest('tr');
						objParent.find("input[name=driverId]").val("");
						objParent.find("input[name=DmobileNumber]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(objBus).closest('tr').find("input[name=busCompanyId]").val();
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
			})*/
		},
		bindHotelChoose : function(tab){
			var hotelChoose = $("#"+tab+" .arrangeTouristMain .chooseHotel");
			var $hotelStar = $("#"+tab+" .arrangeTouristMain .tripPlanHotelStar");
			$hotelStar.off().on("change", function(){
				var parentObj = $(this).closest('tr');
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
						var parents = $(this).closest('tr');
						parents.find("input[name=hotelId]").val("");
						parents.find("input[name=hotelRoomType]").val("");
						parents.find("input[name=hotelRoomTypeId]").val("");
						parents.find("input[name=hotelMobileNumber]").val("");
						parents.find("input[name=hotelManagerName]").val("");
						parents.find("input[name=hotelPrice]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).closest('tr');
					parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					rule.updateTranistCheckor(validator);
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
						dataType: "json",
						showLoading:false,
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
					
				}
			}).off("click").on("click", function(){
				var hotelStarValue = $hotelStar.val(),
					hotelStarValue = $(this).closest('tr').find('.tripPlanHotelStar').val();
				obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findHotelListByLevel&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
					dataType: "json",
					showLoading:false,
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
			$("#"+tab+" .arrangeTouristMain").find("[name=hotelRoomType]").autocomplete({
					minLength:0,
					change:function(event,ui){
						if(ui.item == null){
							$(this).val("");
							var objParent = $(this).closest('tr');
							objParent.find("input[name=hotelRoomTypeId]").val("");
							objParent.find("input[name=hotelPrice]").val("");
						}
					},
					select:function(event,ui){
						var $thisRoom =$(this).closest('tr');
						$thisRoom.find("input[name=hotelRoomTypeId]").val(ui.item.id).trigger('change');
						$.ajax({
							url:""+APP_ROOT+"back/hotel.do?method=findRoomDetailById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
							dataType: "json",
							showLoading:false,
							data:"id=" + ui.item.id,
							success: function(data) {
								var hotelRoom = JSON.parse(data.hotelRoom);
								$thisRoom.find("input[name=hotelPrice]").val(hotelRoom.contractPrice);
							}
						})
					}
				}).off("click").on("click", function(){
					var _this = $(this), $parents = _this.closest('tr'),
					id = $parents.find('input[name=hotelId]').val();
					if (!!id) {
						$.ajax({
							url:""+APP_ROOT+"back/hotel.do?method=findTypeByHotelId&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
							dataType: "json",
							showLoading:false,
							data:"id=" + id,
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
										layer.tips('没有房型可供选择', _this, {
											tips: [1, '#3595CC'],
											time: 2000
										});
									}
								}
							}
						});
					}else{
						layer.tips('请选择酒店', _this, {
							tips: [1, '#3595CC'],
							time: 2000
						});
					}
				});
		},
		bindTicketChoose : function(tab){
			var ticketChoose = $("#"+tab+" .arrangeTouristMain .chooseTicket");
			ticketChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					var thisParent = $(_this).closest('tr');
					thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					rule.updateTranistCheckor(validator);
				},
				change : function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=tickeId]").val("").trigger('change');
					}
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/ticket.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
					dataType:"json",
					showLoading:false,
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
		//餐厅联动
		bindRestaurantChoose : function(tab){
			var restaurantChoose = $("#"+tab+" .arrangeTouristMain .chooseRestaurant"),
				standardChoose = $("#"+tab+" .arrangeTouristMain .chooseStandard"),
				standardType = $("#"+tab+" .arrangeTouristMain select[name=standardType]");
			$(standardType).off("change").on("change", function(){
				var parents = $(this).closest('tr');
				parents.find("input[name=restaurantStandardId]").val("");
				parents.find("input[name=price]").val("");
			});
			restaurantChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this, parents = $(_this).closest('tr');
					parents.find("input[name=restaurantId]").val(ui.item.id);
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=findRestaurantById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
						dataType: "json",
						showLoading:false,
						data:"id="+ui.item.id,
						success: function(data) {
							layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurant = JSON.parse(data.restaurant);
								parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
								parents.find("input[name=manager]").val(restaurant.managerName);
								parents.find("input[name=price]").val("");
								parents.find("input[name=restaurantStandardId]").val("");
							}
						}
					});
				},
				change : function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).closest('tr');
						parents.find("input[name=restaurantId]").val("");
						parents.find("input[name=manager]").val("");
						parents.find("input[name=mobileNumber]").val("");
						parents.find("input[name=restaurantStandardId]").val("");
						parents.find("input[name=price]").val("");
					}
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
					dataType:"json",
					showLoading:false,
					success: function(data) {
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var restaurantList = JSON.parse(data.restaurantList);
							if(restaurantList && restaurantList.length > 0){
								for(var i=0; i < restaurantList.length; i++){
									restaurantList[i].value = restaurantList[i].name;
								}
							}
							$(obj).autocomplete('option','source', restaurantList);
							$(obj).autocomplete('search', '');
						}
					}
				});
			});
			standardChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var standardId = ui.item.id;
					var _this = $(this);
					$(this).closest('tr').find("input[name=price]").val(ui.item.price);
					$(this).closest('tr').find("input[name=price]").focus();
					$(this).closest('tr').find("input[name=price]").blur();
					$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
				},
				change : function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).closest('tr');
						objParent.find("input[name=price]").val("");
					}
				}
			}).off("click").on("click", function(){
				var obj = this, parents = $(obj).closest('tr');
				var id = parents.find("input[name=restaurantId]").val();
				var type = parents.find('select[name=standardType]').val();
				if(id && id.length > 0){
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantStandardByType&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
						dataType:"json",
						showLoading:false,
						data:"restaurantId=" + id + "&type=" + type,
						success: function(data) {
							layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurantStandardList = data.restaurantStandardList;
								if(restaurantStandardList && restaurantStandardList.length > 0){
									for(var i=0; i < restaurantStandardList.length; i++){
										restaurantStandardList[i].value = restaurantStandardList[i].price;
									}
									$(obj).autocomplete('option','source', restaurantStandardList);
									$(obj).autocomplete('search', '');
								} else {
									layer.tips('没有内容。', obj, {
										tips: [1, '#3595CC'],
										time: 2000
									});
								}
							}
						}
					});
				}else{
					layer.tips('请选择餐厅', _this, {
						tips: [1, '#3595CC'],
						time: 2000
					});
				}

			});
		},
		outArrangeDatepicker :function(clas,name,tab){
			$("#"+tab+" .arrangeTouristMain #"+clas+" input[name="+name+"]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
				.on('changeDate', function() {
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					rule.updateTranistCheckor(validator);
				});
		},
		outArrangeDateTimepicker :function(clas,name,tab){
			$("#"+tab+" .arrangeTouristMain #"+clas+" input[name="+name+"]").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		//线路下拉搜索
		lineProductChoose :function($obj){
			var lineProductChoose = $obj.find(".chooseLineProduct");
			lineProductChoose.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						//$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=lineProductId]").val("");
					}
				}
			}).click(function(){
				var objM = this;
				var lineObj = transit.autocompleteDate.lineProductList;

				if(lineObj !=null && lineObj.length>0) {
					if(lineObj != null && lineObj.length){
						for (var i = 0; i < lineObj.length; i++) {
							lineObj[i].value = lineObj[i].name;
						}
					}
					$(objM).autocomplete('option','source', lineObj);
					$(objM).autocomplete('search', '');
				}else{
					layer.tips('无数据', objM, {
						tips: [1, '#3595CC'],
						time: 2000
					});
				}

			})
		},
		//组团社下拉搜索
		partnerAgencyChoose :function($obj){
			var partnerAgencyChoose = $obj.find(".choosePartnerAgency");
			partnerAgencyChoose.autocomplete({
				minLength:0,
				select:function(event,ui){
					//var $obj = $(this);
					//var objParent = $(this).parent();
					//objParent.find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						//$(this).val("");
						//var objParent = $(this).parent();
						//objParent.find("input[name=partnerAgencyId]").val("");
							$(this).parent().parent().find("input[name=partnerAgencyId]").val("");
					}
				}
			}).click(function(){
				var objM = this;
				var listObj = transit.autocompleteDate.partnerAgencyList;

				if(listObj !=null && listObj.length>0) {
					if(listObj != null && listObj.length){
					for (var i = 0; i < listObj.length; i++) {
						listObj[i].value = listObj[i].travelAgencyName;
					}
				}
					$(objM).autocomplete('option','source', listObj);
					$(objM).autocomplete('search', '');
				}else{
					layer.tips('没有组团社', objM, {
						tips: [1, '#3595CC'],
						time: 2000
					});
				}

			})
		},
		//安排人下拉搜索
		arrangeUserChoose :function($obj){
			var arrangeUserChoose = $obj.find(".chooseArrangeUser");
			arrangeUserChoose.autocomplete({
				minLength:0,
				select:function(event,ui){
					//var $obj = $(this);
					//var objParent = $(this).parent();
					//objParent.find("input[name=arrangeUserId]").val(ui.item.id).trigger('change');
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=arrangeUserId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						//$(this).val("");
						//var objParent = $(this).parent();
						//objParent.find("input[name=arrangeUserId]").val("");
						$(this).parent().parent().find("input[name=arrangeUserId]").val("");
					}
				}
			}).click(function(){
				var objM = this;
				var arrangeObj = transit.autocompleteDate.arrangeUserList;

				if(arrangeObj !=null && arrangeObj.length>0) {
					if(arrangeObj != null && arrangeObj.length){
						for (var i = 0; i < arrangeObj.length; i++) {
							arrangeObj[i].value = arrangeObj[i].realName;
						}
					}
					$(objM).autocomplete('option','source', arrangeObj);
					$(objM).autocomplete('search', '');
				}else{
					/*layer.tips('无数据', objM, {
						tips: [1, '#3595CC'],
						time: 2000
					});*/
				}

			})
		},
		datePicker :function(tab){
			$("#"+tab+" .date-picker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		calculation :function(){
			var Tr = $(this).parent().parent(),
				count = Tr.find(".count").val() || 0,
				price = Tr.find(".price").val() || 0,
				discount = Tr.find(".discount").val() || 0,
				needPay = (count * price)-discount;
			Tr.find(".needPay").val(needPay);
		},
		submitUpdateTransit : function(id,isClose){
			var tab = "tab-arrange_transit-update-content";
			var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
			if (!validator.form())  return;
			var touristGroupArrange = {
				touristGroup : {},
				outBusList : [],
				outHotelList : [],
				outTicketList : [],
				outRestaurantList : [],
				outOtherList : []
			};
			//小组ID
			touristGroupArrange.touristGroup = {
				id : transit.getArrangeValue("touristGroup")
			};
			//接送车安排 JSON
			var receptionOutBusTr = $("#"+tab+" .arrangeTouristMain #receptionList .busList tbody tr");
			transit.outBusJson(receptionOutBusTr,touristGroupArrange.outBusList);
			var carOutBusTr = $("#"+tab+" .arrangeTouristMain #carList .busList tbody tr");
			transit.outBusJson(carOutBusTr,touristGroupArrange.outBusList);
			var sendOutBusTr = $("#"+tab+" .arrangeTouristMain #sendList .busList tbody tr");
			transit.outBusJson(sendOutBusTr,touristGroupArrange.outBusList);
			//酒店安排 JSON
			var receptionOutHotelTr = $("#"+tab+" .arrangeTouristMain #receptionList .hotelList tbody tr");
			transit.outHotelJson(receptionOutHotelTr,touristGroupArrange.outHotelList);
			var sendOutHotelTr = $("#"+tab+" .arrangeTouristMain #sendList .hotelList tbody tr");
			transit.outHotelJson(sendOutHotelTr,touristGroupArrange.outHotelList);
			//票务安排 JSON
			var receptionOutTicketTr = $("#"+tab+" .arrangeTouristMain #receptionList .ticketList tbody tr");
			transit.outTicketJson(receptionOutTicketTr,touristGroupArrange.outTicketList);
			var sendOutTicketTr = $("#"+tab+" .arrangeTouristMain #sendList .ticketList tbody tr");
			transit.outTicketJson(sendOutTicketTr,touristGroupArrange.outTicketList);
			//餐厅安排 JSON
			var receptionOutRestaurantTr = $("#"+tab+" .arrangeTouristMain #receptionList .restaurantList tbody tr");
			transit.outRestaurantJson(receptionOutRestaurantTr,touristGroupArrange.outRestaurantList);
			var sendOutRestaurantTr = $("#"+tab+" .arrangeTouristMain #sendList .restaurantList tbody tr");
			transit.outRestaurantJson(sendOutRestaurantTr,touristGroupArrange.outRestaurantList);
			//其他安排 JSON
			var receptionOutOtherTr = $("#"+tab+" .arrangeTouristMain #receptionList .otherList tbody tr");
			transit.outOtherJson(receptionOutOtherTr,touristGroupArrange.outOtherList);
			var sendOutOtherTr = $("#"+tab+" .arrangeTouristMain #sendList .otherList tbody tr");
			transit.outOtherJson(sendOutOtherTr,touristGroupArrange.outOtherList);

			touristGroupArrange = JSON.stringify(touristGroupArrange);
			console.log(touristGroupArrange);
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=saveTouristGroupArrange&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=update",
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
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							transit.edited["update"] = "";
							if(isClose ==1){
								closeTab(menuKey+"-update");
								transit.listTransit(0,"","","","","","","","","","","","");
							}
						});
					}
				}
			})
		},
		save : function(saveType){
			console.log("save : 中转安排");
			if(saveType == "update"){
				var id = $(".arrangeTouristMain .btn-updateArrange").attr("data-entity-id");
				transit.submitUpdateTransit(id,1);
			}
		},
		clearEdit : function(clearType){
			transit.edited[clearType] = "";
		},

		getQueryTerms :function(){
			$.ajax({
				url:""+APP_ROOT+"/back/touristGroup.do?method=getQueryTermsForTransitArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				dateType:"json",
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						transit.autocompleteDate.partnerAgencyList = data.partnerAgencyList;
						transit.autocompleteDate.lineProductList = data.lineProductList;
						transit.autocompleteDate.arrangeUserList = data.arrangeUserList;
					}
				}
			})
		},

	}
	exports.listTransit = transit.listTransit;
	exports.isEdited = transit.isEdited;
	exports.save = transit.save;
	exports.clearEdit = transit.clearEdit;
	// 中转安排，用于其他模块调用
	exports.updateTransit = transit.updateTransit;
})