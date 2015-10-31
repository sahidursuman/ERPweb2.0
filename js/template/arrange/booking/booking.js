define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_booking",
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		listTemplate = require("./view/list"),
		addPartnerManagerTemplate = require("./view/addPartnerManager");
	var booking ={
		searchData :{
			id:"",
			orderNumber : "",
			partnerAgencyId:"",
			partnerAgency : "",
			operateUserId:"",
			operateUser : "",
			startTime : "",
			endTime : "",
		},
		edited : {},
		autocompleteDate : {},
		isEdited : function(editedType){
			if(!!booking.edited[editedType] && booking.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listbooking :function(page,id,orderNumber,partnerAgencyId,partnerAgency,operateUserId,operateUser,startTime,endTime){
			booking.searchData = {
				id:id,
				orderNumber : orderNumber,
				partnerAgencyId:partnerAgencyId,
				partnerAgency : partnerAgency,
				operateUserId:operateUserId,
				operateUser : operateUser,
				startTime : startTime,
				endTime : endTime,
				status : status
			},
			$.ajax({
				url:""+APP_ROOT+"back/bookingOrder.do?method=listBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&id="+booking.searchData.id+"&orderNumber="+booking.searchData.orderNumber+"&partnerAgencyId="+booking.searchData.partnerAgencyId+"&partnerAgency="+booking.searchData.partnerAgency+"&operateUserId="+booking.searchData.operateUserId+"&operateUser="+booking.searchData.operateUser+"&endTime="+booking.searchData.endTime+"&startTime="+booking.searchData.startTime+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					console.log(data);
					layer.close(globalLoadingLayer);
					data.bookingOrderList = JSON.parse(data.bookingOrderList);
					var result = showDialog(data);
					if(result){
						var html = listTemplate(data);
						addTab(menuKey,"项目代订",html);
						booking.initList(data);
						booking.getQueryTerms();
					}
				}
			})
		},
		initList : function(data){
			//时间控件
			booking.datepicker($("#tab-"+menuKey+"-content"));
			//给搜索按钮绑定事件
			$("#tab-"+menuKey+"-content .bookingListMain .btn-booking-search").click(function(){
				booking.searchData = {
					    id : $("#tab-"+menuKey+"-content .bookingListMain input[name=orderNumberId]").val(),
						orderNumber : $("#tab-"+menuKey+"-content .bookingListMain input[name=orderNumber]").val(),
					    partnerAgencyId : $("#tab-"+menuKey+"-content .bookingListMain input[name=partnerAgencyChooseId]").val(),
						partnerAgency : $("#tab-"+menuKey+"-content .bookingListMain input[name=partnerAgency]").val(),
					    operateUserId : $("#tab-"+menuKey+"-content .bookingListMain input[name=operateUserId]").val(),
						operateUser : $("#tab-"+menuKey+"-content .bookingListMain input[name=operateUser]").val(),
						startTime : $("#tab-"+menuKey+"-content .bookingListMain input[name=startTime]").val(),
						endTime : $("#tab-"+menuKey+"-content .bookingListMain input[name=endTime]").val()
				}
				booking.listbooking(0,booking.searchData.id,booking.searchData.orderNumber,booking.searchData.partnerAgencyId,booking.searchData.partnerAgency,booking.searchData.operateUserId,booking.searchData.operateUser,booking.searchData.startTime,booking.searchData.endTime);
			});
			
			//分页--首页按钮事件
			$("#tab-"+menuKey+"-content .pageMode a.first").click(function(){
				if(data.pageNo == 0 || data.totalPage == 0)return;
				booking.listbooking(0,booking.searchData.id,booking.searchData.orderNumber,booking.searchData.partnerAgencyId,booking.searchData.partnerAgency,booking.searchData.operateUserId,booking.searchData.operateUser,booking.searchData.startTime,booking.searchData.endTime);
			});
			//分页--上一页事件
			$("#tab-"+menuKey+"-content  .pageMode a.previous").click(function(){
				if(data.totalPage == 0)return;
				var previous = data.pageNo - 1;
				if(data.pageNo == 0){
					previous = 0;
				}
				booking.listbooking(previous,booking.searchData.id,booking.searchData.orderNumber,booking.searchData.partnerAgencyId,booking.searchData.partnerAgency,booking.searchData.operateUserId,booking.searchData.operateUser,booking.searchData.startTime,booking.searchData.endTime);
			});
			//分页--下一页事件
			$("#tab-"+menuKey+"-content .pageMode a.next").click(function(){
				if(data.pageNo+1 == data.totalPage || data.totalPage == 0)return;
				var next =  data.pageNo + 1;
				if(data.pageNo == data.totalPage-1){
					next = data.pageNo ;
				}
				booking.listbooking(next,booking.searchData.id,booking.searchData.orderNumber,booking.searchData.partnerAgencyId,booking.searchData.partnerAgency,booking.searchData.operateUserId,booking.searchData.operateUser,booking.searchData.startTime,booking.searchData.endTime);
			});
			//分页--尾页事件
			$("#tab-"+menuKey+"-content  .pageMode a.last").click(function(){
				if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
				booking.listbooking(data.totalPage-1,booking.searchData.id,booking.searchData.orderNumber,booking.searchData.partnerAgencyId,booking.searchData.partnerAgency,booking.searchData.operateUserId,booking.searchData.operateUser,booking.searchData.startTime,booking.searchData.endTime);
			});
			//新增项目代订
			$("#tab-"+menuKey+"-content .btn-Booking-add").click(booking.addBooking);
			//修改项目代订
			$("#tab-"+menuKey+"-content .btn-Booking-edit").click(function(){
				var id = $(this).attr("data-entity-id");
				booking.updateBooking(id);
			});
			//查看项目代订
			$("#tab-"+menuKey+"-content .btn-Booking-view").click(function(){
				var id = $(this).attr("data-entity-id");
				booking.viewBooking(id);
			});
			//删除项目代订
			$("#tab-"+menuKey+"-content .btn-Booking-cancel").click(function(){
				var id = $(this).attr("data-entity-id");
				booking.deleteBooking(id);
			});
			
			//autocomplete
			booking.orderNumberChoose($("#tab-"+menuKey+"-content"));
			booking.partnerAgencyChoose($("#tab-"+menuKey+"-content"));
			booking.operateUserChoose($("#tab-"+menuKey+"-content"));
		},
		addBooking :function(){
			var html = addTemplate();
			if($(".tab-"+menuKey+"-add").length > 0) {
				addTab(menuKey+"-add","新增项目代订");
				if(!!booking.edited["add"] && booking.edited["add"] != ""){
					showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
						console.log("继续编辑");			
					},function(){
						addTab(menuKey+"-add","新增项目代订",html);
						booking.edited["add"] = "";
						booking.initAdd();
					},"放弃","继续编辑"); 							
				 }else{
					addTab(menuKey+"-add","新增项目代订",html);	
					booking.initAdd();
				 } 
			}else{
				addTab(menuKey+"-add","新增项目代订",html);		
				booking.initAdd();
			}	
		},
		initAdd : function(){
			$('.addBooking').on("change",function(){
				booking.edited["add"] = "add";
			});
			//表单代订信息验证
			var validator = rule.checkAddBooking($(".addBooking"));
			//酒店代订验证
			var validatorHotel=rule.checkBookingHotel($(".bookingHotelList")); 
			//景区贷订
			var validatorScenic=rule.checkBookingScenic($(".bookingScenicList"));   
			//票务验证
			var validatorTicket= rule.checkBookingTicket($(".bookingTicketList"));
			//车队旅游贷订
			var validatorBus=rule.checkBookingBus($(".bookingBusList")); 

			var tab = "tab-arrange_booking-add-content",
	    	$add = $("#"+tab+" .addBooking");
	    	//新增List
	    	$add.find(".btn-hotel-booking-add").off().on("click",{$this:$add},booking.addHotelList);
	    	$add.find(".btn-scenic-booking-add").off().on("click",{$this:$add},booking.addScenicList);
	    	$add.find(".btn-ticket-booking-add").off().on("click",{$this:$add},booking.addTicketList);
	    	$add.find(".btn-bus-booking-add").off().on("click",{$this:$add},booking.addBusList);
	    	//删除List
	    	$add.find(".btn-hotel-booking-delete").off().on("click",{cateName : "hotel", _this : $add},booking.deleteList);
	    	$add.find(".btn-scenic-booking-delete").off().on("click",{cateName : "scenic", _this : $add},booking.deleteList);
	    	$add.find(".btn-ticket-booking-delete").off().on("click",{cateName : "ticket", _this : $add},booking.deleteList);
	    	$add.find(".btn-bus-booking-delete").off().on("click",{cateName : "bus", _this : $add},booking.deleteList);
	    	//同行客户联系人下拉
	    	booking.getPartnerAgencyManagerList("addBooking");
	    	//添加同行客户联系人
	    	booking.addPartnerManager("addBooking");
	    	//时间控件
	    	booking.datepicker( $("#"+tab));
	    	booking.datetimepicker();
	    	//同行客户下拉
	    	booking.partnerAgencyChooseList($add);
	    	//酒店联动  
	    	booking.hotelChooseList($add);
	    	booking.hotelRoomChooseList($add);
	    	//景区联动
	    	booking.scenicItemChooseList($add);
	    	booking.scenicChooseList($add);
	    	//票务下拉
	    	booking.ticketChoostList($add);
	    	//旅游车逆向联动
	    	booking.seatCountChoose($add);
	    	booking.brandChoose($add);
	    	booking.busCompanyChoose($add);
	    	//计算
	    	$add.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
		    	booking.calculation($add);
	    	})
			//提交事件  
	    	$('#'+ tab).find(".btn-submit-booking").off('click')
	    	.on('click', function(event) {
	    		event.preventDefault();
	    		booking.submitBooking("add",1);
	    	});
		},
		updateBooking :function(id){
			$.ajax({
				url:""+APP_ROOT+"back/bookingOrder.do?method=findBookingOrderById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					console.log(data);
					layer.close(globalLoadingLayer);
					data.bookingOrder = JSON.parse(data.bookingOrder);
					var result = showDialog(data);
					if(result){
						var html = updateTemplate(data);
				    	var tab = "tab-arrange_booking-update-content"
				    	
						if($(".tab-"+menuKey+"-update").length > 0) {
							addTab(menuKey+"-update","修改项目代订");
                 	    	if(!!booking.edited["update"] && booking.edited["update"] != ""){
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			//已修改提示
									var validator = rule.checkAddBooking($(".updateBooking"));
									//酒店代订验证
									var validatorHotel=rule.checkBookingHotel($(".hotelBookingList")); 
									//景区贷订
									var validatorScenic=rule.checkBookingScenic($(".scenicBookingList"));   
									//票务验证
									var validatorTicket= rule.checkBookingTicket($(".ticketBookingList"));
									//车队旅游贷订
									var validatorBus=rule.checkBookingBus($(".busBookingList"));
				            		if (!validator.form() || !validatorHotel.form() || !validatorScenic.form() || !validatorTicket.form() || !validatorBus.form()) { 
				            			return; 
				            		}
				            		booking.submitBooking("update",0);
									booking.edited["update"] = "";
				            		addTab(menuKey+"-update","修改项目代订",html);
									booking.initUpdate();
									booking.initUpdate();									
				            	},function(){
				            		addTab(menuKey+"-update","修改项目代订",html);
									booking.initUpdate();
									booking.edited["update"] = "";
				            	}); 							
                 	    	}else{
	                 	    	addTab(menuKey+"-update","修改项目代订",html);	
								booking.initUpdate();
                 	    	} 
                 	    }else{
                 	    	addTab(menuKey+"-update","修改项目代订",html);	
							booking.initUpdate();
                 	    };		
				    }
				}
			})
		},
		initUpdate : function(){
			$('.updateBooking').on("change",function(){
				booking.edited["update"] = "update";
			});
			var tab = "tab-arrange_booking-update-content"
			$obj = $("#"+tab+" .updateBooking");
			/*修改项目贷订验证*/
			var validator=rule.checkAddBooking($(".updateBooking"));
			//酒店代订验证
			var validatorHotel=rule.checkBookingHotel($(".hotelBookingList")); 
			//景区贷订
			var validatorScenic=rule.checkBookingScenic($(".scenicBookingList"));   
			//票务验证
			var validatorTicket= rule.checkBookingTicket($(".ticketBookingList"));
			//车队旅游贷订
			var validatorBus=rule.checkBookingBus($(".busBookingList")); 

			//新增List
			$obj.find(".btn-hotel-booking-add").off().on("click",{$this:$obj},booking.addHotelList);
			$obj.find(".btn-scenic-booking-add").off().on("click",{$this:$obj},booking.addScenicList);
			$obj.find(".btn-ticket-booking-add").off().on("click",{$this:$obj},booking.addTicketList);
			$obj.find(".btn-bus-booking-add").off().on("click",{$this:$obj},booking.addBusList);
			//删除List
			$obj.find(".btn-hotel-booking-delete").off().on("click",{cateName : "hotel",_this : $obj},booking.deleteList);
			$obj.find(".btn-scenic-booking-delete").off().on("click",{cateName : "scenic",_this : $obj},booking.deleteList);
			$obj.find(".btn-ticket-booking-delete").off().on("click",{cateName : "ticket",_this : $obj},booking.deleteList);
			$obj.find(".btn-bus-booking-delete").off().on("click",{cateName : "bus",_this : $obj},booking.deleteList);
			//同行客户联系人下拉
			booking.getPartnerAgencyManagerList("updateBooking");
			//添加同行客户联系人
			booking.addPartnerManager("updateBooking");
			//时间控件
			booking.datepicker($("#"+tab));
			booking.datetimepicker();
			//同行客户下拉
			booking.partnerAgencyChooseList($obj);
			//酒店联动  
			booking.hotelChooseList($obj);
			booking.hotelRoomChooseList($obj);
			//景区联动
			booking.scenicItemChooseList($obj);
			booking.scenicChooseList($obj);
			//票务下拉
			booking.ticketChoostList($obj);
			//旅游车逆向联动
			booking.seatCountChoose($obj);
			booking.brandChoose($obj);
			booking.busCompanyChoose($obj);
			//计算
			$obj.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
				booking.calculation($obj);
			})
			//提交事件  
			var $obj = $(".updateBooking");
			$('#'+ tab).find(".btn-submit-booking").on('click', function(event) {
				event.preventDefault();
				booking.submitBooking("update",1);
			});	
		},
		viewBooking :function(id){
			$.ajax({
				url:""+APP_ROOT+"back/bookingOrder.do?method=findBookingOrderById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.bookingOrder = JSON.parse(data.bookingOrder);
					var result = showDialog(data);
					if(result){
					var html = viewTemplate(data);
					addTab(menuKey+"-view","查看项目代订",html);
					//导出查看项目代订按钮事件
				$(".updateBooking .T-bookingBtn").click(function(){
				    //svar id = $(".updateBooking");
				    booking.exportBooking(id);
		 		});
					}
				}
			})

   //      //导出查看项目代订按钮事件
			// $(".updateBooking .btn-bookingB-export").click(function(){
			// 	var id = $(".updateBooking");
			// 	booking.exportBooking(id);
			// });

		},



//导出发团计划
		// exportTripPlan:function(id){
		// 	checkLogin(function(){
		// 		var url = ""+APP_ROOT+"back/export.do?method=exportTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&tripPlanId="+id+"";
		// 		exportXLS(url);
		// 	});
		// },


		exportBooking :function(id){
			var url = ""+APP_ROOT+"back/export.do?method=exportBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&id="+id;
			exportXLS(url);
		},
		deleteBooking :function(id){
			var $parent = $(this).parent().parent();
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
								url:""+APP_ROOT+"back/bookingOrder.do?method=deleteBookingOrderByIdAndCateName&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"cateName=order"+"&id="+id+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
											$parent.fadeOut(function(){
												$parent.remove();
											})
											booking.listbooking(0,"","","","","","","","");
										});
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该项目代订？");
				}
			});
		},
		addHotelList :function(event){
			var html = '<tr>'+
			'<td><div class="input-group"><input name="enterTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><div class="input-group"><input name="leaveTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><select name="level" class="col-sm-12 hotelStar"><option selected="selected" value="1" {{if hotelList.hotel.level == 1}}selected="selected"{{/if}}>三星以下</option>'+
			'<option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input name="hotelName" value="" type="text" class="col-sm-12 chooseHotel bind-change"/><input name="hotelId" type="hidden" value="" /></td>'+
			'<td><input name="hotelRoom" value="" type="text" class="col-sm-12 chooseHotelRoom bind-change"/><input name="hotelRoomId" type="hidden" value="" /></td>'+
			'<td><input name="days" value="" type="text" class="col-sm-12" maxlength="5" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12" style="width: 55px" maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12"  style="width: 55px"  maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="sumCostMoney" readonly="readonly" value="" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" readonly="readonly" value="" type="text" class="col-sm-12"/></td>'+
			'<td><a class="cursor btn-hotel-booking-delete">删除</a></td>'+
			'</tr>';
			var $container = event.data.$this.find("tbody.hotelBookingList").append(html);
			event.data.$this.find(".bookingHotelList .btn-hotel-booking-delete").off().on("click",{cateName : "hotel", _this : event.data.$this},booking.deleteList);
	    	//时间控件
	    	booking.datepicker($container);
	    	//酒店联动  
	    	booking.hotelChooseList(event.data.$this);
	    	booking.hotelRoomChooseList(event.data.$this);
	    	
	    	//酒店代订验证
			var validatorHotel=rule.checkBookingHotel($(".hotelBookingList"));   
			
	    	//计算
	    	event.data.$this.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
		    	booking.calculation(event.data.$this);
	    	})
		},
		addScenicList :function(event){
			var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><input name="scenicName" value="" type="text"  class="col-sm-12 chooseScenic bind-change" /><input name="scenicId" value="" type="hidden" /></td>'+
			'<td><input name="scenicItemName" value="" type="text"  class="col-sm-12 chooseScenicItem bind-change" /><input name="scenicItemId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12"  maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="orderNumber" value="" type="text" class="col-sm-12" maxlength="50" /></td>'+
			'<td><a class="cursor btn-scenic-booking-delete">删除</a></td></tr>';
			var $container = event.data.$this.find("tbody.scenicBookingList").append(html);
			event.data.$this.find(".bookingScenicList .btn-scenic-booking-delete").off().on("click",{cateName : "scenic", _this : event.data.$this},booking.deleteList);
			//时间控件
	    	booking.datepicker($container);
	    	//景区联动
	    	booking.scenicItemChooseList(event.data.$this);
	    	booking.scenicChooseList(event.data.$this);
	    	
	    	//景区贷订
			var validatorScenic=rule.checkBookingScenic($(".scenicBookingList"));  
			
	    	//计算
	    	event.data.$this.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
		    	booking.calculation(event.data.$this);
	    	})
		},
		addTicketList :function(event){
			var html = '<tr>'+
				'<td><input name="ticketName" value="" type="text" class="col-sm-12 chooseTicket bind-change"/><input name="ticketId" value="" type="hidden" /></td>'+
				'<td><select name="type"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
				'<td><input name="startCity" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
				'<td><input name="arriveCity" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
				'<td><input name="shift" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
				'<td><input name="seatLevel" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
				'<td><div class="input-group"><input name="startTime" value="" type="text" class="datetimepicker"/><span class="input-group-addon"><i class="fa fa-clock-o"></i></span></div></td>'+
				'<td><input name="roomCount" value="" type="text" class="col-sm-12" maxlength="5" /></td>'+
				'<td><input name="costPrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
				'<td><input name="salePrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
				'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
				'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
				'<td><a class="cursor btn-ticket-booking-delete">删除</a></td></tr>';
			event.data.$this.find("tbody.ticketBookingList").append(html);
			event.data.$this.find(".bookingTicketList .btn-ticket-booking-delete").off().on("click",{cateName : "ticket", _this : event.data.$this},booking.deleteList);
			//时间控件
	    	booking.datetimepicker();
	    	//票务下拉
	    	booking.ticketChoostList(event.data.$this);
	    	
	    	//票务验证
			var validatorTicket= rule.checkBookingTicket($(".ticketBookingList"));
	    	//计算
	    	event.data.$this.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
		    	booking.calculation(event.data.$this);
	    	})
		},
		addBusList :function(event){
			var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker" /><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><div class="input-group"><input name="endTime" value="" type="text" class="datepicker" /><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><input name="needSeatCount" value="" type="text" class="col-sm-12 chooseSeatCount bind-change" /></td>'+
			'<td><input name="needBusBrand" value="" type="text" class="col-sm-12 bind-change" /></td>'+
			'<td><input name="busCompany" value="" type="text" class="col-sm-12 bind-change" /><input name="busCompanyId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><a class="cursor btn-bus-booking-delete">删除</a></td></tr>';
			var $container = event.data.$this.find("tbody.busBookingList").append(html);
			event.data.$this.find(".bookingBusList .btn-bus-booking-delete").off().on("click",{cateName : "bus", _this : event.data.$this},booking.deleteList);
			//时间控件
	    	booking.datepicker($container);
	    	//旅游车逆向联动
	    	booking.seatCountChoose(event.data.$this);
	    	booking.brandChoose(event.data.$this);
	    	booking.busCompanyChoose(event.data.$this);
	    	
			//车队旅游贷订
			var validatorBus=rule.checkBookingBus($(".busBookingList")); 
			
	    	//计算
	    	event.data.$this.find("[name=roomCount],[name=costPrice],[name=salePrice],[name=days]").blur(function(){
		    	booking.calculation(event.data.$this);
	    	})
		},
		deleteList :function(event){
			var $parent = $(this).parent().parent(),
				id = $parent.attr("data-entity-id"),
				thisObj = $(this);
			if(id){
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
									url:""+APP_ROOT+"back/bookingOrder.do?method=deleteBookingOrderByIdAndCateName&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
									type:"POST",
									data:"cateName="+event.data.cateName+"&id="+id+"",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
												$parent.fadeOut(function(){
													$parent.remove();
													//计算
											    	booking.calculation(event.data._this);
								    			});
											});
										}
									}
								});
							}
						}
					],
					open:function(event,ui){
						$(this).find("p").text("你确定要删除该项目代订？");
					}
				});
			}else{
				$parent.fadeOut(function(){
					$parent.remove();
					//计算
			    	booking.calculation(event.data._this);
				})
			}
		},

		datepicker :function($container){
			$container.find(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		datetimepicker :function(){
	    	$(".datetimepicker").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		//choosePartnerAgency
		partnerAgencyChooseList :function(className){
			var partnerAgencyChoose = className.find(".choosePartnerAgency");
			partnerAgencyChoose.autocomplete({
				minLength:0,
				change :function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).parent().parent();
						parents.find("[name=partnerAgencyId]").val("");
					}
				},
				select :function(event,ui){
					var parents = $(this).parent().parent();
					parents.find("[name=partnerAgencyId]").val(ui.item.id).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/bookingOrder.do?method=getAllPartnerAgencyList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
		                data:"id="+ui.item.id,
		                type:"POST",
						dataType: "json",
		                success: function(data) {
							var result = showDialog(data);
							if(result){
								parents.find("input[name=contactRealname]").val();
								parents.find("input[name=contactMobileNumber]").val();
							}
		                }
					})
				}
			}).unbind("click").click(function(){
				var obj =this;
				$.ajax({
					url:""+APP_ROOT+"back/bookingOrder.do?method=getAllPartnerAgencyList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                dataType: "json",
	                success: function(data) {
						var result = showDialog(data);
						if(result){
							console.log(data);
							var partnerAgencieList = JSON.parse(data.partnerAgencieList);
							if(partnerAgencieList && partnerAgencieList.length > 0){
								for(var i=0; i < partnerAgencieList.length; i++){
									partnerAgencieList[i].value = partnerAgencieList[i].travelAgencyName;
								}
								$(obj).autocomplete('option','source', partnerAgencieList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有同行客户信息', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
				})
			})
		},

		hotelChooseList :function(className){
			var hotelChoose = className.find(".chooseHotel");
			var $hotelStar = className.find(".hotelStar");
			$hotelStar.off().on("change", function(){
				var parentObj = $(this).parent().parent();
				parentObj.find("input[name=hotelName]").val("");
				parentObj.find("input[name=hotelId]").val("");
				parentObj.find("input[name=hotelRoom]").val("");
				parentObj.find("input[name=hotelRoomId]").val("");
			});
			
			hotelChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).parent().parent();
						parents.find("input[name=hotelId]").val("");
						parents.find("input[name=hotelRoom]").val("");
						parents.find("input[name=hotelRoomId]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).parent().parent();
					parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
				}
			}).off("click").on("click", function(){
				var hotelStarValue = $hotelStar.val(),
				hotelStarValue = $(this).parent().parent().find('.hotelStar').val();
			    obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findHotelListByLevel&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                dataType: "json",
	                data:"level=" + hotelStarValue,
	                success: function(data) {
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
								layer.tips('没有酒店可供选择，请选择其他星级', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	            });
			});
		},
		hotelRoomChooseList :function(className){
			var chooseHotelRoom = className.find(".chooseHotelRoom");
			chooseHotelRoom.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = chooseHotelRoom.parent().parent();
						objParent.find("input[name=hotelRoomId]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).parent().parent();
					parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
					var enterTime = parents.find("input[name=enterTime]").val();
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelRoomPrice&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    data: "id="+ui.item.id+"&enterTime="+enterTime,
	                    success: function(data) {
	                    	console.log(data);
	                    	var result = showDialog(data);
							if(result){
								parents.find("input[name=costPrice]").val(data.price);
							}
	                    }
					})
				}
			}).off("click").on("click", function(){
				var _this = this;
				var id = $(_this).parent().parent().find("input[name=hotelId]").val();
				if(id){
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=findTypeByHotelId&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    data:"id=" + id,
	                    success: function(data) {
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
									layer.tips('没有房型可供选择，请选择其他酒店', _this, {
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
		scenicChooseList :function(className){
			var chooseScenic = className.find(".chooseScenic");
			chooseScenic.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=scenicId]").val("");
						thisParent.find("input[name=scenicItemName]").val("");
						thisParent.find("input[name=scenicItemId]").val("");
					}
				},
				select :function(event, ui){
					console.log(ui);
					var _this = this, parents = $(_this).parent().parent();
					parents.find("input[name=scenicId]").val(ui.item.id).trigger('change');
					parents.find("input[name=scenicItemName]").val("");
					parents.find("input[name=scenicItemId]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							console.log(data);
							var scenicList = JSON.parse(data.scenicList);
							if(scenicList && scenicList.length > 0){
								for(var i=0; i < scenicList.length; i++){
									scenicList[i].value = scenicList[i].name;
								}
								$(obj).autocomplete('option','source', scenicList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			})
		},
		scenicItemChooseList :function(className){
			var chooseScenicItem = className.find(".chooseScenicItem");
			chooseScenicItem.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=scenicItemId]").val("");
					}
				},
				select :function(event, nameUi){
					var nameUiId = nameUi.item.id, _this = this;
					var thisParent = $(_this).parent().parent();
					var startTime = thisParent.find("[name=startTime]").val();
					thisParent.find("input[name=scenicItemId]").val(nameUiId).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=getScenicItemPrice&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
	                    data: "id="+nameUiId+"&startTime="+startTime,
	                    success: function(data) {
	                    	var result = showDialog(data);
							if(result){
								thisParent.find("input[name=costPrice]").val(data.price);
							}
	                    }
					})
				}
			}).unbind("click").click(function(){
				var _this = $(this);
				var scenicId = _this.parent().parent().find("input[name=scenicId]").val();
				var enterTime = _this.parent().parent().find("input[name=enterTime]").val();
				console.log(scenicId);
				if(scenicId){
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=findItemByScenicId&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
	                    data: "id="+scenicId,
	                    success: function(data) {
	                    	console.log(data);
							var result = showDialog(data);
							if(result){
								var scenicItemList = JSON.parse(data.scenicItemList);
								if(scenicItemList && scenicItemList.length > 0){
									for(var i=0; i < scenicItemList.length; i++){
										scenicItemList[i].value = scenicItemList[i].name;
									}
									_this.autocomplete('option','source', scenicItemList);
									_this.autocomplete('search', '');
								}else{
									layer.tips('没有内容。', scenicObj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
	                    }
	                });
				}else{
					layer.tips('请先选择景区', _this, {
					    tips: [1, '#3595CC'],
					    time: 1500
					});
					
				}
			})
		},
		ticketChoostList :function(className){
			var chooseTicket = className.find(".chooseTicket");
			chooseTicket.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/ticket.do?method=findTicketById&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
	                    dataType: "json",
	                    data: "id="+ui.item.id,
	                    success: function(data) {
							var result = showDialog(data);
							if(result){
								var ticket = JSON.parse(data.ticket) || {};
								var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=ticketId]").val(ui.item.id).trigger('change');
							}
	                    }
	                });
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=ticketId]").val("");
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/ticket.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
					dataType:"json",
					success:function(data){
						console.log(data);
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
				})
			});
		},
		seatCountChoose :function(className){
			var chooseSeatCount = className.find(".chooseSeatCount");
			chooseSeatCount.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
						parents.find("input[name=needBusBrand]").val("");
						parents.find("input[name=busCompany]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					parents.find("input[name=needBusBrand]").val("");
					parents.find("input[name=busCompany]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/bookingOrder.do?method=getSeatCountList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					dataType:"json",
					success:function(data){
						var result = showDialog(data);
						if(result){
							console.log(data);
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
		brandChoose :function(className){
			var chooseBrand = className.find("input[name=needBusBrand]");
			chooseBrand.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).parent().parent();
						$this.val("");
						parents.find("input[name=busCompany]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).parent().parent();
					parents.find("input[name=busCompany]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).parent().parent().find("input[name=needSeatCount]").val();
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
		getQueryTerms :function(){
			$.ajax({
				url:""+APP_ROOT+"back/bookingOrder.do?method=getQueryTerms&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				dateType:"json",
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						booking.autocompleteDate.orderNumberList = data.orderNumberList;
						booking.autocompleteDate.partnerAgencyList = data.partnerAgencyList;
						booking.autocompleteDate.operationUserList = data.operationUserList;


					}
				}
			})
		},
		busCompanyChoose :function(className){
			var chooseBusCompany = className.find("input[name=busCompany]");
			chooseBusCompany.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this);
						$this.val("");
						$this.parent().parent().find("input[name=busCompanyId]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this);
					$this.parent().find("input[name=busCompanyId]").val(ui.item.busCompanyId).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
				var brand = $(obj).parent().parent().find("input[name=needBusBrand]").val();
				if(seatCount && brand){
					$.ajax({
						url:""+APP_ROOT+"back/bookingOrder.do?method=getBusCompanyList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"&brand="+brand+"",
						dateType:"json",
						type:"POST",
						success:function(data){
							console.log(data);
							var result = showDialog(data);
							if(result){
								var busCompanyList = JSON.parse(data.busCompanyList);
								if(busCompanyList && busCompanyList.length > 0){
									for(var i=0; i < busCompanyList.length; i++){
										busCompanyList[i].value = busCompanyList[i].companyName;
									}
									$(obj).autocomplete('option','source', busCompanyList);
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
		//搜索订单代号模糊查询
		orderNumberChoose :function(className){
			var orderNumberChoose = className.find(".T-orderNumberChoose");
			orderNumberChoose.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						//var $this = $(this),parents = $(this).parent().parent();
						$(this).parent().parent().find("input[name=orderNumberId]").val("");

					}
				},
				select :function(event, ui){
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=orderNumberId]").val(ui.item.id).trigger('change');

				}
			}).unbind("click").click(function(){
				var obj = this,
					orderNumberList = booking.autocompleteDate.orderNumberList;
				if(orderNumberList && orderNumberList.length > 0){
					for(var i=0; i < orderNumberList.length; i++){
						orderNumberList[i].value = orderNumberList[i].orderNumber;
					}
					$(obj).autocomplete('option','source', orderNumberList);
					$(obj).autocomplete('search', '');
				}else{
					layer.tips('没有内容', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		//搜索客户模糊查询
		partnerAgencyChoose :function(className){
			var partnerAgencyChoose = className.find(".T-partnerAgencyChoose");
			partnerAgencyChoose.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						$(this).parent().parent().find("input[name=partnerAgencyChooseId]").val("");
					}
				},
				select :function(event,ui){
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=partnerAgencyChooseId]").val(ui.item.id).trigger('change');

				}
			}).unbind("click").click(function(){
				var obj = this,partnerAgencyList = booking.autocompleteDate.partnerAgencyList;
				if(partnerAgencyList && partnerAgencyList.length > 0){
					for(var i=0; i < partnerAgencyList.length; i++){
							partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName
						}
					$(obj).autocomplete('option','source', partnerAgencyList);
					$(obj).autocomplete('search', '');
				}else{
					layer.tips('没有内容', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		//搜索操作人查询
		operateUserChoose :function(className){
			var operateUserChoose = className.find(".operateUserChoose");
			operateUserChoose.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						//var $this = $(this),parents = $(this).parent();
						//$this.val("");
						//parents.find('input[name=operateUserId]').val("");
						$(this).parent().parent().find("input[name=operateUserId]").val("");

					}
				},
				select :function(event, ui){
					//var $this = $(this),parents = $(this).parent();
					//parents.find('input[name=operateUserId]').val(ui.item.id);
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=operateUserId]").val(ui.item.id).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this,operationUserList = booking.autocompleteDate.operationUserList;
				if(operationUserList && operationUserList.length > 0){
					for(var i=0; i < operationUserList.length; i++){
							operationUserList[i].value = operationUserList[i].realName
						}
					$(obj).autocomplete('option','source', operationUserList);
					$(obj).autocomplete('search', '');
				}else{
					layer.tips('没有内容', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		submitBooking :function(operation,isClose){
			//表单代订信息验证
			var validator = rule.checkAddBooking($(".addBooking"));
			//酒店代订验证
			var validatorHotel=rule.checkBookingHotel($(".bookingHotelList")); 
			//景区贷订
			var validatorScenic=rule.checkBookingScenic($(".bookingScenicList"));   
			//票务验证
			var validatorTicket= rule.checkBookingTicket($(".bookingTicketList"));
			//车队旅游贷订
			var validatorBus=rule.checkBookingBus($(".bookingBusList"));   
			
			if (!validator.form() || !validatorHotel.form() || !validatorScenic.form() || !validatorTicket.form() || !validatorBus.form()) { return; }    
	
			function getValue($obj, name){
				var thisObj = $obj.find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}
			if(operation == "add"){
				className = $("#tab-arrange_booking-add-content .addBooking");
			} else if(operation == "update"){
				className = $("#tab-arrange_booking-update-content .updateBooking");
			}
			var $this = $(this),
				bookingOrder = {
					id : getValue(className,"id"),
					partnerAgencyId : getValue(className,"partnerAgencyId"),
					contactId : getValue(className,"partnerAgencyContactId"),
					contactRealname : getValue(className,"contactRealname"),
				    contactMobileNumber : getValue(className,"contactMobileNumber"),
				    touristRealname : getValue(className,"touristRealname"),
				    touristMobileNumber : getValue(className,"touristMobileNumber"),
				    sumNeedGetMoney : getValue(className,"sumNeedGetMoney"),
				    getedMoney : getValue(className,"getedMoney"),
				    getType : getValue(className,"getType"),
				    sumCostMoney : getValue(className,"sumCostMoney"),
				    payedMoney : getValue(className,"payedMoney"),
				    payType : getValue(className,"payType"),
				    remark : getValue(className,"remark"),
				    bookingHotelList : [],
				    bookingScenicList : [],
				    bookingTicketList : [],
				    bookingBusCompanieList : []
			    };
			var hotelListTr = className.find(".hotelBookingList tr");
			hotelListTr.each(function(i){
				var hotelJson = {
					id : hotelListTr.eq(i).attr("data-entity-id"),
					hotelId : getValue(hotelListTr.eq(i),"hotelId"),
					hotelRoomId : getValue(hotelListTr.eq(i),"hotelRoomId"),
					enterTime : getValue(hotelListTr.eq(i),"enterTime"),
					leaveTime : getValue(hotelListTr.eq(i),"leaveTime"),
					days : getValue(hotelListTr.eq(i),"days"),
					roomCount : getValue(hotelListTr.eq(i),"roomCount"),
					costPrice : getValue(hotelListTr.eq(i),"costPrice"),
					salePrice : getValue(hotelListTr.eq(i),"salePrice"),
					sumCostMoney : getValue(hotelListTr.eq(i),"sumCostMoney"),
					sumNeedGetMoney : getValue(hotelListTr.eq(i),"sumNeedGetMoney")
				}
				if(hotelJson.hotelId){
					bookingOrder.bookingHotelList.push(hotelJson);
				}
			});
			var scenicListTr =  className.find(".scenicBookingList tr");
			scenicListTr.each(function(i){
				var scenicJson = {
					id : scenicListTr.eq(i).attr("data-entity-id"),
					scenicId : getValue(scenicListTr.eq(i),"scenicId"),
					scenicItemId : getValue(scenicListTr.eq(i),"scenicItemId"),
					startTime : getValue(scenicListTr.eq(i),"startTime"),
					orderNumber : getValue(scenicListTr.eq(i),"orderNumber"),
					roomCount : getValue(scenicListTr.eq(i),"roomCount"),
					costPrice : getValue(scenicListTr.eq(i),"costPrice"),
					salePrice : getValue(scenicListTr.eq(i),"salePrice"),
					sumCostMoney : getValue(scenicListTr.eq(i),"sumCostMoney"),
					sumNeedGetMoney : getValue(scenicListTr.eq(i),"sumNeedGetMoney")
				}
				if(scenicJson.scenicId){
					bookingOrder.bookingScenicList.push(scenicJson);
				}
			})
			var ticketListTr = className.find(".ticketBookingList tr");
			ticketListTr.each(function(i){
				var ticketJson = {
					id : ticketListTr.eq(i).attr("data-entity-id"),
					ticketId : getValue(ticketListTr.eq(i),"ticketId"),
					type : getValue(ticketListTr.eq(i),"type"),
					startTime : getValue(ticketListTr.eq(i),"startTime"),
					startCity : getValue(ticketListTr.eq(i),"startCity"),
					arriveCity : getValue(ticketListTr.eq(i),"arriveCity"),
					shift : getValue(ticketListTr.eq(i),"shift"),
					seatLevel : getValue(ticketListTr.eq(i),"seatLevel"),
					roomCount : getValue(ticketListTr.eq(i),"roomCount"),
					costPrice : getValue(ticketListTr.eq(i),"costPrice"),
					salePrice : getValue(ticketListTr.eq(i),"salePrice"),
					sumCostMoney : getValue(ticketListTr.eq(i),"sumCostMoney"),
					sumNeedGetMoney : getValue(ticketListTr.eq(i),"sumNeedGetMoney")
				}
				if(ticketJson.ticketId){
					bookingOrder.bookingTicketList.push(ticketJson);
				}
			})
			var busListTr = className.find(".busBookingList tr");
			busListTr.each(function(i){
				var busJson = {
					id : busListTr.eq(i).attr("data-entity-id"),
					busCompanyId : getValue(busListTr.eq(i),"busCompanyId"),
					needSeatCount : getValue(busListTr.eq(i),"needSeatCount"),
					needBusBrand :getValue(busListTr.eq(i),"needBusBrand"),
					startTime : getValue(busListTr.eq(i),"startTime"),
					endTime : getValue(busListTr.eq(i),"endTime"),
					roomCount : getValue(busListTr.eq(i),"roomCount"),
					costPrice : getValue(busListTr.eq(i),"costPrice"),
					salePrice : getValue(busListTr.eq(i),"salePrice"),
					sumCostMoney : getValue(busListTr.eq(i),"sumCostMoney"),
					sumNeedGetMoney : getValue(busListTr.eq(i),"sumNeedGetMoney")
				}
				if(busJson.busCompanyId){
					bookingOrder.bookingBusCompanieList.push(busJson);
				}
			})
			bookingOrder = JSON.stringify(bookingOrder);
			$.ajax({
				url:""+APP_ROOT+"back/bookingOrder.do?method=saveBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation+"",
				type:"POST",
				data:"bookingOrder="+encodeURIComponent(bookingOrder),
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							if(operation == "add"){
								booking.edited["add"] = "";
								if(isClose == 1){
									closeTab("arrange_booking-"+operation);
									booking.listbooking(0,"","","","","","","","");
								}
							} else if(operation == "update"){
								booking.edited["update"] = "";
								if(isClose == 1){
									closeTab("arrange_booking-"+operation);
									booking.listbooking(0,"","","","","","","","");
								}
							}
							
						});						
					}
				}
			})
		},
		getPartnerAgencyManagerList :function(className){
			var chooseManagerList = $("."+className+" .choosePartnerManager");
			chooseManagerList.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent().parent().parent();
					objParent.find("input[name=partnerAgencyContactId]").val(ui.item.id).trigger('change');
					objParent.find("input[name=contactMobileNumber]").val(ui.item.contactMobileNumber);
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
					partnerAgencyId = $("."+className+" .bookingMainForm").find("input[name=partnerAgencyId]").val();
				if(partnerAgencyId){
					$.ajax({
						url:""+APP_ROOT+"back/partnerAgency.do?method=getContactListByPartnerAgencyId&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
		                dataType: "json",
		                data:"partnerAgencyId="+partnerAgencyId,
		                beforSend:function(){
		                	globalLoadingLayer = openLoadingLayer()
		                },
		                success: function(data) {
		                	console.log(data);
		                	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var contactList = JSON.parse(data.partnerAgencyContactList);
								if(contactList != null && contactList.length>0){
									if(contactList != null && contactList.length){
										for(var i=0;i<contactList.length;i++){
											contactList[i].value = contactList[i].contactRealname;
										}
									}
									$(objM).autocomplete('option','source', contactList);
									$(objM).autocomplete('search', '');
								}else{
									layer.tips('该同行客户没有联系人，请添加！', objM, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
		                }
		             });
				}else{
					layer.tips('请选择同行客户', objM, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		addPartnerManager :function(className){
			$("."+className+"").find(".addPartnerManager").click(function(){
				var obj = this;
				var PartnerId = $(obj).parent().parent().parent().find("input[name=partnerAgencyId]").val();
				if(PartnerId){
					var html = addPartnerManagerTemplate();
					var addPartnerManagerLayer = layer.open({
					    type: 1,
					    title:"新增同行客户联系人",
					    skin: 'layui-layer-rim', //加上边框
					    area: ['35%', '40%'], //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){
					    	
					    	//新增同行联系客户人验证
					    	var validatorManager=rule.checkdPartnerManager($(".addPartnerManager"));
		
					    	$(".addPartnerManager .btn-submit-addPartnerManager").click(function(){
					    		//提交验证
					    		if (!validatorManager.form()) { return; }
					    		
					    		
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
											$("."+className+"").find("input[name=contactRealname]").val(contact.contactRealname);
											$("."+className+"").find("input[name=partnerAgencyContactId]").val(contact.id);
											$("."+className+"").find("input[name=contactMobileNumber]").val(contact.contactMobileNumber);
										}
									}
					    		})
					    	})
					    }
					})
				}else{
					layer.tips('新建联系人请先选择同行客户', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		calculation :function($this){
			var Tr = $this.find("tbody tr"),
				$costS = [],
				$saleS = [];
			Tr.each(function(i){
				var count = Tr.eq(i).find("[name=roomCount]").val() || 0,
					cost = Tr.eq(i).find("[name=costPrice]").val() || 0,
					sale = Tr.eq(i).find("[name=salePrice]").val() || 0,
					costS = Tr.eq(i).find("[name=sumCostMoney]"),
					saleS = Tr.eq(i).find("[name=sumNeedGetMoney]"),
					//ent = Tr.eq(i).find("[name=enterTime]").val(),
					//end = Tr.eq(i).find("[name=leaveTime]").val();
					//entDate = new Date(Date.parse(ent.replace(/-/g,"/")));//字符串转时间
					//endDate = new Date(Date.parse(end.replace(/-/g,"/")));
					days = Tr.eq(i).find("[name=days]").val() || 1; //Math.floor((endDate-entDate)/(24*3600*1000)) || 1;
				
				if(count*cost*days - 900000000 >0){
					showMessageDialog($( "#confirm-dialog-message" ),"计算成本值过大，请确认数据是否有误");
				}else if(count*sale*days - 900000000 >0){
					showMessageDialog($( "#confirm-dialog-message" ),"计算应收值过大，请确认数据是否有误");
				}else{
				costS.val(count*cost*days);
				saleS.val(count*sale*days);
				}
				$costS.push(costS.val());
				$saleS.push(saleS.val());
			})
			var sumCost = eval($costS.join("+"));
			var sumSale = eval($saleS.join("+"));
			$this.find(".sumNeedGetMoney").val(sumSale);
			$this.find(".sumCostMoney").val(sumCost);
		},
		save : function(saveType){
			var validatorHotel=rule.checkBookingHotel($(".bookingHotelList")); 
			var validatorScenic=rule.checkBookingScenic($(".bookingScenicList"));  
			var validatorTicket= rule.checkBookingTicket($(".bookingTicketList"));
			var validatorBus=rule.checkBookingBus($(".bookingBusList")); 
			if(saveType == "add"){
				console.log("saveadd");
				var validator = rule.checkAddBooking($(".addBooking"));
				booking.submitBooking("add",1);
			} else if(saveType == "update"){
				var validator=rule.checkAddBooking($(".updateBooking"));
				booking.submitBooking("update",1);
			}
		},
		clearEdit : function(clearType){
			booking.edited[clearType] = "";
		}
	}
	exports.listbooking = booking.listbooking;
	exports.isEdited = booking.isEdited;
	exports.save = booking.save;
	exports.clearEdit = booking.clearEdit;
})