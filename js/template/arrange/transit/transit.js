define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_transit",
		listTemplate = require("./view/list"),
		arrangeTemplate = require("./view/arrange"),
		viewTemplate = require("./view/view");
	var transit ={
		searchData : {
			fromPartnerAgencyId : "",
			lineProductId : "",
			startTime : "",
			arrangeUserId : "",
			arrangeStartTime : "",
			arrangeEndTime : "",
			status : "",
			shuttleType : "",
			shuttleTime : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!transit.edited[editedType] && transit.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listTransit :function(page,fromPartnerAgencyId,lineProductId,startTime,arrangeUserId,arrangeStartTime,arrangeEndTime,status,shuttleType,shuttleTime){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupTransitArrange&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&sortType=auto"+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&lineProductId="+lineProductId+"&startTime="+startTime+"&arrangeUserId="+arrangeUserId+"&arrangeStartTime="+arrangeStartTime+"&arrangeEndTime="+arrangeEndTime+"&status="+status+"&shuttleType="+shuttleType+"&shuttleTime="+shuttleTime,
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
						data.searchParam.arrangeUserList = JSON.parse(data.searchParam.arrangeUserList);
						data.searchParam.lineProductList = JSON.parse(data.searchParam.lineProductList);
						data.searchParam.partnerAgencyList = JSON.parse(data.searchParam.partnerAgencyList);
						var html = listTemplate(data);
						addTab(menuKey,"中转安排",html);
						transit.initList(data);
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
			transit.lineProductChoose(tab);
			//组团社下拉搜索
			transit.partnerAgencyChoose(tab);
			//安排人下拉搜索			    	
			transit.arrangeUserChoose(tab);
			
			//筛选事件绑定
			$("#"+tab+" .btn-touristGroupList-search").click(function(){
				transit.searchData = {
					fromPartnerAgencyId : $("#"+tab+" input[name=partnerAgencyId]").val(),
					lineProductId : $("#"+tab+" input[name=lineProductId]").val(),
					startTime : $("#"+tab+" input[name=startTime]").val(),
					arrangeUserId :$("#"+tab+" input[name=arrangeUserId]").val(),
					arrangeStartTime : $("#"+tab+" input[name=arrangeStartTime]").val(),
					arrangeEndTime : $("#"+tab+" input[name=arrangeEndTime]").val(),
					status : $("#"+tab+" select[name=status]").val(),
					shuttleType :$("#"+tab+" select[name=shuttleType]").val(),
					shuttleTime :$("#"+tab+" input[name=shuttleTime]").val()
				}
				transit.listTransit(0,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime)
			})
			//分页--首页按钮事件
			$("#"+tab+" .pageMode a.first").click(function(){
				if(data.pageNo == 0 || data.totalPage == 0)return;
				transit.listTransit(0,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime);
			});
			//分页--上一页事件
			$("#"+tab+" .pageMode a.previous").click(function(){	
				if(data.totalPage == 0)return;
				var previous = data.pageNo - 1;
				if(data.pageNo == 0){
					previous = 0;
				}
				transit.listTransit(previous,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime);
			});
			//分页--下一页事件
			$("#"+tab+" .pageMode a.next").click(function(){
				if(data.pageNo+1 == data.totalPage || data.totalPage == 0)return;
				var next =  data.pageNo + 1;
				if(data.pageNo == data.totalPage-1){
					next = data.pageNo ;
				}
				transit.listTransit(next,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime);
			});
			//分页--尾页事件
			$("#"+tab+" .pageMode a.last").click(function(){
				if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
				transit.listTransit(data.totalPage-1,transit.searchData.fromPartnerAgencyId,transit.searchData.lineProductId,transit.searchData.startTime,transit.searchData.arrangeUserId,transit.searchData.arrangeStartTime,transit.searchData.arrangeEndTime,transit.searchData.status,transit.searchData.shuttleType,transit.searchData.shuttleTime);
			});
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
						data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
						data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
						data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
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
						        			transit.listTransit(0,"","","","","","","","","");
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
						data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
						data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
						data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
						data.touristGroup = JSON.parse(data.touristGroup);
						var html =arrangeTemplate(data);
						//已修改提示
						var tab = "tab-arrange_transit-update-content";
			    		var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
						if($(".tab-"+menuKey+"-update").length > 0) {
                 	    	if(!!transit.edited["update"]){
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.setTranistCheckor($(".arrangeTouristMain"));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 transit.submitUpdateTransit($(".arrangeTouristMain .btn-updateArrange").attr("data-entity-id"),0);
									 transit.edited["update"] = "";
				            		 addTab(menuKey+"-update","编辑中转安排",html);			
				            		 validator = rule.setTranistCheckor($(".arrangeTouristMain"));
				            	},function(){
				            		addTab(menuKey+"-update","编辑中转安排",html);;	
									validator = rule.setTranistCheckor($(".arrangeTouristMain"));								
									transit.edited["update"] = "";
				            	}); 							
                 	    	 }else{
	                 	    	addTab(menuKey+"-update","编辑中转安排",html);			
	                 	        validator = rule.setTranistCheckor($(".arrangeTouristMain"));
                 	    	 } 
                 	    }else{
                 	    	addTab(menuKey+"-update","编辑中转安排",html);				
                 	    	validator = rule.setTranistCheckor($(".arrangeTouristMain"));
                 	    };	
						
						transit.initUpdate(id,data);
		        	}
				}
			})
		},
		initUpdate : function(id,data){
			var tab = "tab-arrange_transit-update-content";
			// 设置表单验证
			var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
			$('.arrangeTouristMain').on("change",function(){
				transit.edited["update"] = "update";
			});	
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
			//接待-------------------------开始---------------------------------------------------------	
			$("#"+tab+" #receptionList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,0,tab);
			})
			$("#"+tab+" #receptionList .btn-hotel-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutHotel(id,0,tab);
			})
			$("#"+tab+" #receptionList .btn-ticket-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addTicketList(id,0,tab);
			})
			//小车--------------------------开始--------------------------------------------------------	
			$("#"+tab+" #carList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,2,tab);
			})
			//送团--------------------------开始--------------------------------------------------------	
			$("#"+tab+" #sendList .btn-bus-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutBusList(id,1,tab);
			})
			$("#"+tab+" #sendList .btn-hotel-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addOutHotel(id,1,tab);
			})
			$("#"+tab+" #sendList .btn-ticket-add").click(function(){
				var thisObj = $(this);
				var id = transit.getArrangeTrId(thisObj);
				transit.addTicketList(id,1,tab);
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
			
			//车辆信息 联动
			transit.bindBusCompanyChoose(tab);
			//酒店信息 联动
			transit.bindHotelChoose(tab);
			//票务信息 联动
			transit.bindTicketChoose(tab);
			//日期插件绑定
			transit.outArrangeDateTimepicker("receptionList","bususeTime",tab);
			transit.outArrangeDatepicker("receptionList","hotelCheckInTime",tab);
			transit.outArrangeDateTimepicker("receptionList","ticketStartTime",tab);
			transit.outArrangeDateTimepicker("carList","bususeTime",tab);
			transit.outArrangeDateTimepicker("sendList","bususeTime",tab);
			transit.outArrangeDatepicker("sendList","hotelCheckInTime",tab);
			transit.outArrangeDateTimepicker("sendList","ticketStartTime",tab);
			
			//提交安排事件绑定
			$("#"+tab+" .arrangeTouristMain .btn-updateArrange").click(function(){
				transit.submitUpdateTransit(id,1);
			})
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
					payType : transit.getArrangeTrValue(obj.eq(i),"busPayType")
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
						payType : transit.getArrangeTrValue(obj.eq(i),"hotelPayType")
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
						payType : transit.getArrangeTrValue(obj.eq(i),"ticketPayType")
				}
				if(ticketJson.ticketId != "" && ticketJson.ticketId.length>0){
    				json.push(ticketJson);
    			}
			}
		},
		//新增团外安排接送车辆
		addOutBusList :function(id,type,tab){
			var html = '<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 chooseBusCompany" name="busCompanyName" type="text" value="" /><input type="hidden" name="busCompanyId" /></td>'+
			'<td><input class="col-sm-12 chooseBusLicenseNumber" name="busLicenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" /></td>'+
			'<td><input class="col-sm-12" name="busbrand" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 chooseDriver" name="driverName" type="text" value="" /><input type="hidden" name="driverId" /></td>'+
			'<td><input class="col-sm-12" name="driverMobileNumber" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 datetimepicker" name="bususeTime" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="boardLocation" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 price" name="busFee" type="text" value="" /><input type="hidden" class="count" value="1" /></td>'+
			'<td><input class="col-sm-12 discount" name="busReduceMoney" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 needPay" readonly="readonly" name="busNeedPayMoney" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="busPayedMoney" type="text" value="" /></td>'+
			'<td><select class="" name="busPayType" ><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete" title="删除"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .busList tbody").append(html);
	    	$("#"+tab+" .arrangeTouristMain .busList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		transit.delArrangeJudge (thisObj,"bus");
	    	})
    		transit.bindBusCompanyChoose(tab);
	    	transit.outArrangeDateTimepicker("carList","bususeTime",tab);
	    	transit.outArrangeDateTimepicker("sendList","bususeTime",tab);
	    	transit.outArrangeDateTimepicker("receptionList","bususeTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增团外安排酒店
		addOutHotel :function(id,type,tab){
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
			'<td><input class="col-sm-12 price" name="hotelPrice" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 count" name="hotelMemberCount" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 discount" name="hotelReduceMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 needPay" readonly="readonly" name="hotelNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelPayedMoney" value="" type="text" /></td>'+
			'<td><select class="" name="hotelPayType" >'+
			'<option value="0">现付</option>'+
			'<option value="1">签单</option><option value="2">转账</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .hotelList tbody").append(html);
			$("#"+tab+" .arrangeTouristMain .hotelList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		transit.delArrangeJudge (thisObj,"hotel");
	    	})
	    	transit.bindHotelChoose(tab);
	    	transit.outArrangeDatepicker("receptionList","hotelCheckInTime",tab);
	    	transit.outArrangeDatepicker("sendList","hotelCheckInTime",tab);
			$("#"+tab+" .count,#"+tab+" .price,#"+tab+" .discount").blur(transit.calculation);
		},
		//新增团外安排票务
		addTicketList :function(id,type,tab){
			var html ='<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="tickeId" /></td>'+
			'<td><select class="" name="ticketType"><option value="1">机票</option>'+
			'<option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
			'<td><input class="col-sm-12" name="ticketStartCity" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketArriveCity" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketStartTime" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketShift" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketSeatLevel" value="" type="text" />'+
			'<td><input class="col-sm-12 price" name="ticketPrice" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 count" name="ticketMemberCount" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 discount" name="ticketReduceMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 needPay" readonly="readonly" name="ticketNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketPayedMoney" value="" type="text" /></td>'+
			'<td><select class="" name="ticketPayType" >'+
			'<option value="0">现付</option>'+
			'<option value="1">签单</option><option value="2">转账</option></select></td>'+
			'<td><button class="btn btn-xs btn-danger arrange-delete"><i class="ace-icon fa fa-trash-o bigger-120"></i></button></td>'+
			'</tr>';
			$("#"+id+" .ticketList tbody").append(html);
	    	$("#"+tab+" .arrangeTouristMain .ticketList .arrange-delete").click(function(){
	    		var thisObj = $(this);
	    		transit.delArrangeJudge (thisObj,"ticket");
	    	})
	    	transit.bindTicketChoose(tab);
	    	transit.outArrangeDateTimepicker("receptionList","ticketStartTime",tab);
	    	transit.outArrangeDateTimepicker("sendList","ticketStartTime",tab);
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
			//选择车辆
			var chooseBusLicenseNumber = $("#"+tab+" .arrangeTouristMain .chooseBusLicenseNumber");
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
			var busCompanyChoose = $("#"+tab+" .arrangeTouristMain .chooseBusCompany");
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
		bindHotelChoose : function(tab){
			var hotelChoose = $("#"+tab+" .arrangeTouristMain .chooseHotel");
			var $hotelStar = $("#"+tab+" .arrangeTouristMain .tripPlanHotelStar");
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
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					rule.updateTranistCheckor(validator);
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
							$thisRoom.find("input[name=hotelRoomTypeId]").val(ui.item.id).trigger('change');
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
		bindTicketChoose : function(tab){
			var ticketChoose = $("#"+tab+" .arrangeTouristMain .chooseTicket");
			ticketChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					var thisParent = $(_this).parent().parent();
					thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
					var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
					rule.updateTranistCheckor(validator);
				},
				change : function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
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
    	lineProductChoose :function(tab){
			var chooselineProductList = $("#"+tab+" .arrangeTransit .chooseLineProduct");
			chooselineProductList.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=lineProductId]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objM = this;
				$.ajax({
					url:""+APP_ROOT+"back/touristGroup.do?method=getArrtgtConditions&token="+$.cookie("token")+"&menuKey=resource_touristGroup&operation=view",
	                dataType: "json",
	                beforSend:function(){
	                	globalLoadingLayer = openLoadingLayer()
	                },
	                success: function(data) {
	                	console.log(data);
	                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var lineProductList = data.lineProductList;
							if(lineProductList != null && lineProductList.length>0){
								if(lineProductList != null && lineProductList.length){
									for(var i=0;i<lineProductList.length;i++){
										lineProductList[i].value = lineProductList[i].name;
									}
								}
								$(objM).autocomplete('option','source', lineProductList);
								$(objM).autocomplete('search', '');
							}else{
								layer.tips('没有线路', objM, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	             });
			})
    	},
    	//组团社下拉搜索
    	partnerAgencyChoose :function(tab){
    		var choosePartnerAgency = $("#"+tab+" .arrangeTransit .choosePartnerAgency");
    		choosePartnerAgency.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=partnerAgencyId]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objM = this;
				$.ajax({
					url:""+APP_ROOT+"back/touristGroup.do?method=getArrtgtConditions&token="+$.cookie("token")+"&menuKey=resource_touristGroup&operation=view",
	                dataType: "json",
	                beforSend:function(){
	                	globalLoadingLayer = openLoadingLayer()
	                },
	                success: function(data) {
	                	console.log(data);
	                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var partnerAgencyList = data.partnerAgencyList;
							if(partnerAgencyList != null && partnerAgencyList.length>0){
								if(partnerAgencyList != null && partnerAgencyList.length){
									for(var i=0;i<partnerAgencyList.length;i++){
										partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
									}
								}
								$(objM).autocomplete('option','source', partnerAgencyList);
								$(objM).autocomplete('search', '');
							}else{
								layer.tips('没有组团社', objM, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	             });
			})
    	},
    	//安排人下拉搜索			    	
    	arrangeUserChoose :function(tab){
    		var chooseArrangeUser = $("#"+tab+" .arrangeTransit .chooseArrangeUser");
    		chooseArrangeUser.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=arrangeUserId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=arrangeUserId]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objM = this;
				$.ajax({
					url:""+APP_ROOT+"back/touristGroup.do?method=getArrtgtConditions&token="+$.cookie("token")+"&menuKey=resource_touristGroup&operation=view",
	                dataType: "json",
	                beforSend:function(){
	                	globalLoadingLayer = openLoadingLayer()
	                },
	                success: function(data) {
	                	console.log(data);
	                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var arrangeUserList = data.arrangeUserList;
							if(arrangeUserList != null && arrangeUserList.length>0){
								if(arrangeUserList != null && arrangeUserList.length){
									for(var i=0;i<arrangeUserList.length;i++){
										arrangeUserList[i].value = arrangeUserList[i].name;
									}
								}
								$(objM).autocomplete('option','source', arrangeUserList);
								$(objM).autocomplete('search', '');
							}else{
								layer.tips('没有安排人', objM, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	             });
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
					outTicketList : []
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
								transit.listTransit(0,"","","","","","","","","");
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
		}
	}
	exports.listTransit = transit.listTransit;
	exports.isEdited = transit.isEdited;
	exports.save = transit.save;
	exports.clearEdit = transit.clearEdit;
})