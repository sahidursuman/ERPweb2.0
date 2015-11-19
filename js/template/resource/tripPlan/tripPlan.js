define(function(require, exports) {
	var rule=require("./rule"),
		menuKey = "arrange_all",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		viewTemplate = require("./view/view"),
		addOptionalTemplate = require("./view/addOptional"),
		optionalListTemplate = require("./view/optionalList"),
		tabId = "tab-"+menuKey+"-content";
	
	var tripPlan = {
		searchData : {
			tripId:"",
			tripNumber : "",
			startTime : "",
			guideId:"",
			realname : "",
			busId:"",
			licenseNumber : "",
			status : ""
		},
		edited : {},
		autocompleteDate : {},
		isEdited : function(editedType){
			if(!!tripPlan.edited[editedType] && tripPlan.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listTripPlan : function(page,tripId,tripNumber,startTime,guideId,realname,busId,licenseNumber,status){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=listTripPlan&token="+$.cookie("token")+"&menuKey=arrange_all&operation=view",
				type:"POST",
				data:"queryType=1&pageNo="+page+"&tripId="+encodeURIComponent(tripId)+"&tripNumber="+encodeURIComponent(tripNumber)+"&startTime="+encodeURIComponent(startTime)+"&guideId="+encodeURIComponent(guideId)+"&guideName="+encodeURIComponent(realname)+"&busId="+encodeURIComponent(busId)+"&busLicenseNumber="+encodeURIComponent(licenseNumber)+"&status="+encodeURIComponent(status)+"&sortType=auto&tripPlan=arrange",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({  
						type:3
					});
				},  
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var tripPlanList = JSON.parse(data.tripPlanList);
						data.tripPlanList = tripPlanList
						var html = listTemplate(data);
						addTab(menuKey,"发团安排管理",html);
						tripPlan.initList(data);
						tripPlan.getQueryTerms();
						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		tripPlan.listTripPlan(obj.curr -1,tripPlan.searchData.tripId, tripPlan.searchData.tripNumber, tripPlan.searchData.startTime,tripPlan.searchData.guideId, tripPlan.searchData.realname,tripPlan.searchData.busId, tripPlan.searchData.licenseNumber,tripPlan.searchData.status);
								}
						    }
						});
					}	
				}
			});
		},
		initList : function(data){
			var search = $("#"+tabId+" .search-tripPlanContainer");
			tripPlan.searchData = {
				tripId : search.find("input[name=tripChooseId]").val(),
				tripNumber : search.find("input[name=tripNumber]").val(),
				startTime : search.find("input[name=startTime]").val(),
				guideId: search.find("input[name=guideChooseId]").val(),
				realname : search.find("input[name=realname]").val(),
				busId : search.find("input[name=busChooseId]").val(),
				licenseNumber : search.find("input[name=licenseNumber]").val(),
				status : search.find("[name=status]").attr("data-value")
			}
			//搜索栏状态button下拉事件
			$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
				$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
				$(this).parent().parent().parent().find("span").text($(this).text());
				
				tripPlan.searchData = {
					tripId : search.find("input[name=tripChooseId]").val(),
					tripNumber : search.find("input[name=tripNumber]").val(),
					startTime : search.find("input[name=startTime]").val(),
					guideId: search.find("input[name=guideChooseId]").val(),
					realname : search.find("input[name=realname]").val(),
					busId : search.find("input[name=busChooseId]").val(),
					licenseNumber : search.find("input[name=licenseNumber]").val(),
					status : search.find("[name=status]").attr("data-value")
				}
				tripPlan.listTripPlan(0,tripPlan.searchData.tripId, tripPlan.searchData.tripNumber, tripPlan.searchData.startTime,tripPlan.searchData.guideId, tripPlan.searchData.realname,tripPlan.searchData.busId, tripPlan.searchData.licenseNumber,tripPlan.searchData.status);
			});
			//搜索
			$("#"+tabId+" .btn-tripPlan-search").on("click", function(){
				tripPlan.searchData = {
					tripNumber : search.find("input[name=tripNumber]").val(),
					startTime : search.find("input[name=startTime]").val(),
					realname : search.find("input[name=realname]").val(),
					licenseNumber : search.find("input[name=licenseNumber]").val(),
					status : search.find("[name=status]").attr("data-value")
				}
				tripPlan.listTripPlan(0, tripPlan.searchData.tripId, tripPlan.searchData.tripNumber, tripPlan.searchData.startTime,tripPlan.searchData.guideId, tripPlan.searchData.realname,tripPlan.searchData.busId, tripPlan.searchData.licenseNumber,tripPlan.searchData.status);
			});

			//autocomplete
			tripPlan.tripNumberListChoose($("#tab-"+menuKey+"-content"));
            tripPlan.guideListChoose($("#tab-"+menuKey+"-content"));
			tripPlan.busListChoose($("#tab-"+menuKey+"-content"));


			$("#"+tabId+" .date-picker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});

		    //报表下单操作
			$("#" +tabId+ " .tripPlanViewList .T-tripPlan-sendOrder").on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that=$(this),
				    qouteId=$that.attr("data-entiy-qouteId");
				 tripPlan.singleClickSendOrder(qouteId);    
			});

		

			$("#" +tabId+ " .tripPlanViewList .btn-tripPlan-view").on("click", tripPlan.viewTripPlan)
			$("#"+tabId+" .tripPlanViewList .btn-tripPlan-plan").on("click", function(){
				var billStatus = $(this).attr("billStatus");
				var id = $(this).attr("data-entiy-id");
				if(billStatus == 1 || billStatus == 2){
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
				}else if(billStatus == 0){
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
							$(this).find("p").text("该团导游已报账，无法编辑");
						}
					});
				}
				else{
					tripPlan.addTripPlan(id);
				}
			});
			$("#" +tabId+ " .tripPlanViewList .btn-tripPlan-export").on("click", tripPlan.exportTripPlanArrange);
			$("#" +tabId+ " .tripPlanViewList .btn-tripPlan-send").on("click", tripPlan.sendTripPlanArrange);
		},
		viewTripPlan : function(){
			var id = $(this).attr("data-entiy-id");
			$.ajax({
    			url:""+APP_ROOT+"back/tripPlan.do?method=findArrangeTripPlanById&token="+$.cookie("token")+"&menuKey=arrange_all&operation=view",
				type:"GET",
				data:"id="+id+"&type=view",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var tripPlanInfo = JSON.parse(data.tripPlan),
							 insuranceList = JSON.parse(data.insuranceList),
							 hotelList = JSON.parse(data.hotelList),
							 busCompanyList = JSON.parse(data.busCompanyList),
							 guideList = JSON.parse(data.guideList),
							 otherList = JSON.parse(data.otherList),
							 restaurantList = JSON.parse(data.restaurantList),
							 scenicList = JSON.parse(data.scenicList),
							 selfPayList = JSON.parse(data.selfPayList),
							 shopList = JSON.parse(data.shopList),
							 ticketList = JSON.parse(data.ticketList);
						
						data = {
							tripPlan : tripPlanInfo,
							insuranceList : insuranceList,
							hotelList : hotelList,
							busCompanyList : busCompanyList,
							guideList : guideList,
							otherList : otherList,
							restaurantList : restaurantList,
							scenicList : scenicList,
							selfPayList : selfPayList,
							shopList : shopList,
							ticketList : ticketList
						};
						
						var html = viewTemplate(data);
						addTab(menuKey+"-view","查看发团安排",html);
						$(document).on("mouseenter",".viewWhichDaysContainer",function(){
							var whichDay = $(this).attr("whichDay"),
								$this = $(this)
								startTime = $("#tab-arrange_all-view-content").find("span[name=startTime_Choose]").text(),
								date = new Date(startTime.replace("-", "/").replace("-", "/"));
							var timer = date.getTime()+(whichDay-1)*24*60*60*1000;
							date.setTime(timer);
							//var datetime = date.getFullYear()+ "-"+ ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0"+ (date.getMonth() + 1))+ "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
							var datetime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
							layer.tips(datetime, $this, {
					    		tips: [1, '#3595CC'],
					    		time: 1500
							});
						})
						
					}
				}
			});
		},
		addTripPlan : function(id){
			$.ajax({
    			url:""+APP_ROOT+"back/tripPlan.do?method=findArrangeTripPlanById&token="+$.cookie("token")+"&menuKey=arrange_all&operation=view",
				type:"GET",
				data:"id="+id,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						$(document).on("mouseenter",".whichDaysContainer",function(){
							var whichDay = $(this).find("select").val(),
								$this = $(this)
								startTime = $("#tripPlan_addPlan_content").find("span[name=startTime_Choose]").text(),
								date = new Date(startTime.replace("-", "/").replace("-", "/"));
							var timer = date.getTime()+(whichDay-1)*24*60*60*1000;
							date.setTime(timer);
							//var datetime = date.getFullYear()+ "-"+ ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0"+ (date.getMonth() + 1))+ "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
							var datetime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
							layer.tips(datetime, $this, {
					    		tips: [1, '#3595CC'],
					    		time: 1500
							});
						})
						var tripPlanInfo = JSON.parse(data.tripPlan),
							 insuranceList = JSON.parse(data.insuranceList),
							 hotelList = JSON.parse(data.hotelList),
							 busCompanyList = JSON.parse(data.busCompanyList),
							 guideList = JSON.parse(data.guideList),
							 otherList = JSON.parse(data.otherList),
							 restaurantList = JSON.parse(data.restaurantList),
							 scenicList = JSON.parse(data.scenicList),
							 selfPayList = JSON.parse(data.selfPayList),
							 shopList = JSON.parse(data.shopList),
							 ticketList = JSON.parse(data.ticketList);
						
						data = {
							tripPlan : tripPlanInfo,
							insuranceList : insuranceList,
							hotelList : hotelList,
							busCompanyList : busCompanyList,
							guideList : guideList,
							otherList : otherList,
							restaurantList : restaurantList,
							scenicList : scenicList,
							selfPayList : selfPayList,
							shopList : shopList,       
							ticketList : ticketList
						};
						var html = addTemplate(data);

						//已填写提示
						//var tab = "tab-resource_touristGroup-add-content";
						var validator = rule.listTripPlanCheckor($("#tripPlan_addPlan_content"));  
						if($(".tab-"+menuKey+"-update").length > 0) {
							addTab(menuKey + "-update","添加发团安排");
							if(!!tripPlan.edited["update"] && tripPlan.edited["update"] == "update"){
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									validator = rule.listTripPlanCheckor($("#tripPlan_addPlan_content"));  
									tripPlan.submitTripPlan(0);
									addTab(menuKey + "-update","添加发团安排",html);
									tripPlan.edited["update"] = "";
									tripPlan.initAdd();									
								},function(){
									addTab(menuKey + "-update","添加发团安排",html);
									tripPlan.edited["update"] = "";
									tripPlan.initAdd();
								}); 							
							 }else{
								addTab(menuKey + "-update","添加发团安排",html);
								tripPlan.initAdd();					
							 } 
						}else{
							addTab(menuKey + "-update","添加发团安排",html);	
							tripPlan.initAdd();
						};	
					}
				}
    		});
		},
		initAdd : function(){
			$("#tripPlan_addPlan_content").on("change",function(){
				tripPlan.edited["update"] = "update";
			});	
			tripPlan.dateTimePicker();  
			var validator = rule.listTripPlanCheckor($("#tripPlan_addPlan_content"));  
			$("#tripPlan_addPlan_insurance .addInsurance").on("click",{validator:validator}, tripPlan.addInsurance);
			//$("#tripPlan_addPlan_guide .addGuide").on("click", tripPlan.addGuide);
			//$("#tripPlan_addPlan_bus .addBus").on("click", tripPlan.addBus);
			$("#tripPlan_addPlan_restaurant .addRestaurant").on("click",{validator:validator},tripPlan.addRestaurant);   
			$("#tripPlan_addPlan_hotel .addHotel").on("click",{validator:validator},tripPlan.addHotel);
			$("#tripPlan_addPlan_scenic .addScenic").on("click",{validator:validator},tripPlan.addScenic);
			$("#tripPlan_addPlan_shop .addShop").on("click", tripPlan.addShop);
			$("#tripPlan_addPlan_selfPay .addSelfPay").on("click",{validator:validator}, tripPlan.addSelfPay);
			$("#tripPlan_addPlan_ticket .addTicket").on("click",{validator:validator}, tripPlan.addTicket);
			$("#tripPlan_addPlan_other .addOther").on("click",{validator:validator}, tripPlan.addOther);

			//一键下单操作
			$("#tripPlan_addPlan_content").find('.T-singleClick-Order').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $obj=$('#tab-arrange_all-update-content'),
				    quoteId=$obj.find('input[name=qouteId]').val();
				    tripPlan.singleClickSendOrder(quoteId);
				    
			});

			//发送订单显示&&隐藏
			tripPlan.isSendOrderHide($("#tripPlan_addPlan_bus"));
			tripPlan.isSendOrderHide($("#tripPlan_addPlan_hotel"));

            //车辆的发送订单
			$("#tripPlan_addPlan_bus").find('.T-bus-SendOrder').on('click',  function(event) {
				event.preventDefault();
				var $that=$(this),$trBusData=$that.closest('tr'),$obj=$('#tab-arrange_all-update-content'),
				    qouteId=$obj.find('input[name=qouteId]').val();
				/* Act on the event */
			    tripPlan.busSendOrder($trBusData,qouteId);
			});

			//住宿的发送订单
			$("#tripPlan_addPlan_hotel").find('.T-Hotel-SendOrder').on('click', function(event) {
				event.preventDefault();
				var $that=$(this),$trHotelData=$that.closest('tr'),$obj=$('#tab-arrange_all-update-content'),
				    qouteId=$obj.find('input[name=qouteId]').val();
				/* Act on the event */
				tripPlan.hotelSendOrder($trHotelData,qouteId);
			});

			//绑定删除时间
			tripPlan.bindDeleteEvent();


			//发送订单显示&&隐藏
			tripPlan.isSendOrderHide($("#tripPlan_addPlan_bus"));
			tripPlan.isSendOrderHide($("#tripPlan_addPlan_hotel"));

            //车辆的发送订单
			$("#tripPlan_addPlan_bus").find('.T-bus-SendOrder').on('click',  function(event) {
				event.preventDefault();
				var $that=$(this),$trBusData=$that.closest('tr');
				/* Act on the event */
			    tripPlan.busSendOrder($trBusData);
			});

			//住宿的发送订单
			$("#tripPlan_addPlan_hotel").find('.T-Hotel-SendOrder').on('click', function(event) {
				event.preventDefault();
				var $that=$(this),$trHotelData=$that.closest('tr');
				/* Act on the event */
				tripPlan.hotelSendOrder($trHotelData);
			});
			

			
			tripPlan.bindInsuranceChoose();
			//tripPlan.bindGuideChoose();
			//tripPlan.bindBusCompanyChoose();
			tripPlan.bindRestaurantChoose();
			tripPlan.bindHotelChoose();
			tripPlan.bindHotelRoomeChoose();
			tripPlan.bindScenicChoose();
			tripPlan.bindShopChoose();
			tripPlan.bindSelfPayChoose();
			tripPlan.bindTicketChoose();
			tripPlan.calculatePrice();
			//添加提交事件
			
			$("#tripPlan_addPlan_content .btn-submit-tripPlan").on("click",function(){
				 if (!validator.form()) { 
				    return; 
				 }
				tripPlan.submitTripPlan(1);
			});  
			
			tripPlan.bindMoneyTripPlan();
			tripPlan.moneyTripPlan();
			tripPlan.setChooseDays();

			//添加资源
			tripPlan.addResource();

			//浮动查看自选餐厅
			//Tools.viewOptionalRestaurant($("#tripPlan_addPlan_restaurant .chooseRestaurant"));
			tripPlan.viewOptionalRestaurant($("#tripPlan_addPlan_restaurant .chooseRestaurant"));
			//组装JSON 浮动显示
			
		},

		/**
		 * 
		 * @param  {[type]} $trBusData 车辆中的发送订单
		 * @return {[type]}            [description]
		 */
		busSendOrder:function($trBusData,quoteId){
			var saveJson={
				quoteId:quoteId
			};
			saveJson.busJson=[];
			if($trBusData.length > 0){
				for(var i=0; i<$trBusData.length; i++){
					$trBusData.each(function(i) {
						var busJsonArray = {
							id: $trBusData.eq(i).attr("data-entity-arrangeId"),
							busCompanyId : $trBusData.eq(i).attr("data-entity-busCompanyId"),
							busId : $trBusData.eq(i).attr("data-entity-busId")
						}	
						saveJson.busJson.push(busJsonArray);			
					});
				}
			}
			
			tripPlan.sendOrderRequest(saveJson);
		},

		/**
		 * [hotelSendOrder 住宿的发送订单]
		 * @param  {[type]} $trHotelData [description]
		 * @return {[type]}              [description]
		 */
		hotelSendOrder:function($trHotelData, quoteId){
			var saveJson={
				 quoteId: quoteId
			};
			saveJson.hotelJson=[];
			if($trHotelData.length > 0){  
                for(var i=0; i<$trHotelData.length; i++){
					$trHotelData.each(function(i) {
						var hotelJsonArray = {
							id: $trHotelData.eq(i).attr("data-entity-arrangeId"),
							roomId : $trHotelData.eq(i).attr("data-entity-roomId"),
							hotelId : $trHotelData.eq(i).attr("data-entity-hotelId")
						}	
						saveJson.hotelJson.push(hotelJsonArray);			
					});
				}
			}
			tripPlan.sendHotelRequest(saveJson);
		},


		/**
		 * [sendOrderRequest 车队发送订单请求]
		 * @param  {[type]} saveJson [description]
		 * @return {[type]}          [description]
		 */
		sendOrderRequest:function(saveJson){
			$.ajax({
				url:KingServices.build_url("busInquiry","saveBusCompanyOrder"),
				type: 'POST',
				dataType: 'JSON',
				data: "saveJson="+encodeURIComponent(JSON.stringify(saveJson)),
				success:function(data){
					var result = showDialog(data);
					if(result){
					}
			    }
			})
		},



		/**
		 * [sendHotelRequest 酒店发送订单请求]
		 * @param  {[type]} saveJson [description]
		 * @return {[type]}          [description]
		 */
		sendHotelRequest:function(saveJson){
			$.ajax({
				url:KingServices.build_url("hotelInquiry","saveHotelOrder"),
				type: 'POST',
				dataType: 'JSON',
				data: "saveJson="+encodeURIComponent(JSON.stringify(saveJson)),
				success:function(data){
					var result = showDialog(data);
					if(result){
					}
			    }
			})
		},


		/**
		 * singleClickSendOrder 一键下单
		 * @param  {[type]} qouteId 报价Id
		 * @return {[type]}         [description]
		 */
		singleClickSendOrder:function(quoteId){
			$.ajax({
				url:KingServices.build_url("productQuote","saveOrder"),
				type: 'POST',
				dataType: 'JSON',
				data: "quoteId="+quoteId,
				success:function(data){
					var result = showDialog(data);
					if(result){
					}
			    }
			})

		},


		/**
		 * isSendOrderHide  判断发送订单是否显示隐藏
		 * @param  {[type]}  $sendArea 发送订单域
		 * @return {Boolean}           [description]
		 */
		isSendOrderHide:function($sendArea){
			var $that=$('#tab-arrange_all-update-content'),
			    qouteId=$that.find('input[name=qouteId]').val(),
			    $sendOrderObj=$sendArea.find('.T-sendOrder-Area');
			    //车队&&酒店显示隐藏
				for (var i = 0; i < $sendOrderObj.length; i++) {
					var offerId=$sendOrderObj.eq(i).attr("data-entity-offerId");
					    if (offerId=="") {
					    	$sendOrderObj.eq(i).addClass('hide');
					    } else{
					    	$sendOrderObj.eq(i).removeClass('hide');
					};	         
				}
	            //qouteId判定一键下单是否隐藏
				if (qouteId=="") {  
					$that.find('.T-singleClick-Order').addClass('hide');
				}else{
					$that.find('.T-singleClick-Order').removeClass('hide');
				};
		},

		//浮动查看自选餐厅
		viewOptionalRestaurant :function($objInput){
			$objInput.each(function(){
				var $this = $(this),$parents = $this.closest('tr'),/*$value = $parents.find('[name=optional]').val(),*/$title = [],$value = $this.data("propover");
				if (!!$value && typeof $value === "string") {
					$value = JSON.parse($value);
				}
				if (!!$value && $value.length > 0) {
					var html = '<table class="table table-striped table-hover"><thead><tr><th class="th-border">餐厅名称</th><th class="th-border">联系人</th><th class="th-border">联系电话</th></tr><tbody>';
					for (var i = 0; i < $value.length; i++) {
						html += '<tr><td>'+$value[i].name+'</td><td>'+$value[i].managerName+'</td><td>'+$value[i].mobileNumber+'</td></tr>'
					};
					html += '</tbody></table>';
					$this.data("html",html)
					Tools.descToolTip($this,2);
					$this.data('bs.popover').options.content = html;
				}
			})
		},
		//添加资源 
		addResource : function(){
			$("#tripPlan_addPlan_insurance .T-addInsuranceResource").off('click').on("click",{function : KingServices.addInsurance , type : "tr" , name : "insuranceName" , id : "insuranceId"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_restaurant .T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant, type : "tr" , name : "restaurantName" , id : "restaurantId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_hotel .T-addHotelResource").off('click').on("click",{function : KingServices.addHotel, type : "tr" , name : "name" , id : "hotelId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_scenic .T-addScenicResource").off('click').on("click",{function : KingServices.addScenic, type : "tr" , name : "name" , id : "scenicId"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_shop .T-addShopResource").off('click').on("click",{function : KingServices.addShop, type : "tr" , name : "name" , id : "shopId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_selfPay .T-addSelfPayResource").off('click').on("click",{function : KingServices.addSelfPay, type : "tr" , name : "name" , id : "selfPayId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
			$("#tripPlan_addPlan_ticket .T-addTicketResource").off('click').on("click",{function : KingServices.addTicket, type : "tr" , name : "name" , id : "tickeId"}, KingServices.addResourceFunction);
		},
		//添加保险安排
		addInsurance : function(e){
			var validator = e.data.validator;
			var _this = $(this),
				tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
				html = '<tr><td><div class="col-sm-12"><input type="text" maxlength="32" name="insuranceName" class="col-sm-12 chooseInsurance bind-change"/><input type="hidden" name="insuranceId"/><span class="addResourceBtn T-addInsuranceResource R-right" data-right="1080002" title="添加保险公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
						'<td><input type="text" name="type" maxlength="32" class="col-sm-12"/></td>' +
						'<td><input type="text" name="price" maxlength="6" class="col-sm-12"/></td>' +
						'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
						'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
						'<td><input type="text" name="payedMoney" class="col-sm-12" maxlength="9"/></td>' +
						'<td><select name="payType" class="col-sm-12 no-padding"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +		
						'<td><input name="remark" type="text" class="col-sm-12" maxlength="500"/></td>' +
						'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';
			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindInsuranceChoose();
			tripPlan.calculatePrice();
			validator = rule.update(validator);
			tripPlan.addResource();


		},
		//添加导游安排
		addGuide : function(){
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td><input type="text" name="guideName" readonly="readonly" class="col-sm-12 chooseGuide"/><input type="hidden" name="guideId"/></td>' +
			'<td><input type="text" name="mobileNumber" class="col-sm-12" readonly="readonly"/></td>' +
			'<td><input type="text" name="guideFee" class="col-sm-12"/></td>' +
			'<td><input type="text" name="manageFee" class="col-sm-12"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input name="remark" type="text" class="col-sm-12"/></td>' +
			'<td><button class="btn btn-xs btn-success" title="发送订单"><i class="ace-icon fa fa-paper-plane-o bigger-120"></i></button></td></tr>';
			tableContainer.append(html);
			tripPlan.bindDeleteEvent();
			//tripPlan.bindGuideChoose();
			tripPlan.calculatePrice();
		},
		//添加旅游车安排
		addBus : function(){
			var _this = $(this), 
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td><input type="text" name="needSeatCount" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="companyName" class="col-sm-12 chooseBusCompany"/><input type="hidden" name="busCompanyId"></td>' +
			'<td><input type="text" name="licenseNumber" class="col-sm-12 chooseBusLicenseNumber"/></td>' +
			'<td><input type="text" name="brand" class="col-sm-12"/></td>' +
			'<td><input type="text" name="mobileNumber" class="col-sm-12"/></td>' +
			'<td><input type="text" name="driverName" class="col-sm-12"/></td>' +
			'<td><input type="text" name="price" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="reduceMoney" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="payedMoney" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" name="" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="remark" class="col-sm-12"/></td>' +
			'<td><button class="btn btn-xs btn-success" title="发送订单"><i class="ace-icon fa fa-paper-plane-o bigger-120"></i></button></td></tr>';
			tableContainer.append(html);
			tripPlan.bindDeleteEvent();
			//tripPlan.bindBusCompanyChoose();
			tripPlan.calculatePrice();
		},
		//添加餐饮安排
		addRestaurant : function(e){   
			var validator = e.data.validator;
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer"></td>' +
			'<td><div class="col-sm-12"><input type="text" name="restaurantName" class="col-sm-12 chooseRestaurant"/><input type="hidden" name="restaurantId"><input type="hidden" name="optional" value="" /><span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
			'<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12"/></td>' +
			'<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12"/></td>' +
			'<td><select name="type" class="col-sm-12 restauranType" style="width:80px;"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>' +
			'<td><input type="text" name="price" value="" class="col-sm-12 typeNameChoose"/><input type="hidden" name="restaurantStandardId" value="0"/></td>' +
			'<td><input name="memberCount" type="text" class="col-sm-12" style="width: 60px;" maxlength="4"/></td>' +
			'<td><input name="reduceMoney" type="text" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input name="needPayMoney" readonly="readonly" type="text" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input name="payedMoney" type="text" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input name="guidePayMoney" type="text" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input name="remark" type="text" class="col-sm-12"/></td>' +
			//'<td><button class="btn btn-xs btn-success" title="发送订单"><i class="ace-icon fa fa-paper-plane-o bigger-120"></i></button></td></tr>';
			'<td><a class="cursor btn-deleteTripPlanList" data-entity-name="restaurant" title="删除">删除</a></td>';
			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindRestaurantChoose();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_restaurant");
			tripPlan.calculatePrice();
			tripPlan.addResource();
			
			// 更新表单验证的事件绑定  
			validator = rule.update(validator); 
		},
		addHotel : function(e){
			var validator = e.data.validator;       
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer"></td>' +
			'<td><select class="col-sm-12 no-padding tripPlanHotelStar" style="width: 80px;"><option value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>' +
			'<td><div class="col-sm-12"><input type="text" class="col-sm-12 chooseHotel" name="name" /><input type="hidden" name="hotelId"><span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
			'<td><input type="text" class="col-sm-12" readonly="readonly" name="managerName"/></td>' +
			'<td><input type="text" class="col-sm-12" readonly="readonly" name="mobileNumber"/></td>' +
			'<td><input type="text" class="col-sm-12 chooseHotelRoom" name="hotelRoom"/><input type="hidden" name="hotelRoomId"></td>' +
			'<td><input type="text" class="col-sm-12" name="fee" style="width: 60px;" maxlength="6"/></td>' +
			'<td><input type="text" class="col-sm-12" name="memberCount" style="width: 60px;" maxlength="6"/></td>' +
			'<td><input type="text" class="col-sm-12" name="reduceMoney" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input type="text" class="col-sm-12" name="needPayMoney" readonly="readonly" style="width: 60px;"/></td>' +
			'<td><input type="text" class="col-sm-12" name="payedMoney" style="width: 60px;" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" class="col-sm-12" name="guidePayMoney" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input type="text" class="col-sm-12" name="remark" maxlength="500"/></td>' +
			'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindHotelChoose();
			tripPlan.bindHotelRoomeChoose();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_hotel");
			tripPlan.calculatePrice();
			tripPlan.addResource();
			// 更新表单验证的事件绑定  
			validator = rule.update(validator); 
		},
		addScenic : function(e){
			var validator = e.data.validator;   
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer"></td>' +
			'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 chooseScenic"/><input type="hidden" name="scenicId"/><span class="addResourceBtn T-addScenicResource R-right" data-right="1060002" title="添加景区"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
			'<td><input type="text" name="chargingProjects" class="col-sm-12"/><input type="hidden" name="chargingId"/></td>' +
			'<td><select name="tourTime" class="col-sm-12 no-padding" style="width: 75px;"> <option value="全天">全天</option> <option value="上午">上午</option> <option value="下午">下午</option> </select> </td>' +
			'<td><input type="text" name="tourDuration" class="col-sm-12" value="" style="width: 60px;" maxlength="3"> </td>' +
			'<td><input type="text" name="orderNumber" class="col-sm-12" value="" maxlength="20"/></td>'+
			'<td><input type="text" name="fee" class="col-sm-12" style="width: 60px;" maxlength="6"/></td>' +
			'<td><input type="text" name="memberCount" class="col-sm-12" style="width: 60px;" maxlength="8"/></td>' +
			'<td><input type="text" name="reduceMoney" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12" style="width: 60px;"/></td>' +
			'<td><input type="text" name="payedMoney" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" name="guidePayMoney" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
			'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
			'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';
			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent(); 
			tripPlan.bindScenicChoose();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_scenic");
			tripPlan.calculatePrice();
			tripPlan.addResource();
			// 更新表单验证的事件绑定
			validator = rule.update(validator);       
		},
		addShop : function(){
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer" value=""></td>'+
                '<td><div class="col-sm-12"><input type="hidden" name="id" value="" /><input type="text" name="name" class="col-sm-12 chooseShop" value="" /><input type="hidden" name="shopId" value="" /><span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
                '<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="" /></td>'+
                '<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="" /></td>'+
                '<td><input type="text" name="goodsPolicy" class="col-sm-12" value="" /><input type="hidden" name="shopPolicyId" value=""/></td>'+
                '<td><input type="text" name="remark" class="col-sm-12" value="" maxlength="500" /></td>'+
                '<td><a class="cursor btn-deleteTripPlanList" data-entiy-id="" data-entity-name="shop" title="删除">删除</a></td></tr>';

			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindShopChoose();
			tripPlan.setChooseDays("tripPlan_addPlan_shop");
			tripPlan.addResource();
		},
		dateTimePicker :function(){
			$(".date-time-picker").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		addSelfPay : function(e){
			var validator = e.data.validator; 
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer"></td>' +
			'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 chooseSelfPay"/><input type="hidden" name="selfPayId" /><span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
			'<td><input type="hidden" name="selfitemId" value="" /><input type="text" name="selfitem" class="col-sm-12 chooseSelfitem" value="" /></td>'+
			'<td><input type="text" readonly="readonly" name="managerName" class="col-sm-12"/></td>' +
			'<td><input type="text" readonly="readonly" name="mobileNumber" class="col-sm-12"/></td>' +
			'<td><input type="text" name="oldPrice" class="col-sm-12" maxlength="6"/></td>' +
			'<td><input type="text" name="price" class="col-sm-12" maxlength="6"/></td>' +
			'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
			'<td><input type="text" name="reduceMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="payedMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
			'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindSelfPayChoose();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_selfPay");
			tripPlan.calculatePrice();
			tripPlan.addResource();
			// 更新表单验证的事件绑定
			validator = rule.update(validator);     
		},
		addTicket : function(e){
			var validator = e.data.validator; 
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr>' +
			'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 chooseTicket"/><input type="hidden" name="tickeId" /><span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
			'<td><select name="type" class="col-sm-12 no-padding" style="width:70px;"> <option value="1" selected="selected">机票</option><option value="2">汽车票</option> <option value="3">火车票</option> <option value="4">轮船票</option> </select></td>' +
			'<td><input type="text" name="startingCity" class="col-sm-12" maxlength="32"/></td>' +
			'<td><input type="text" name="arriveCity" class="col-sm-12" maxlength="32"/></td>' +
			'<td><input type="text" name="shift" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="startTime" class="col-sm-13 col-xs-12 date-time-picker"/></td>' +
			'<td><input type="text" name="seatLevel" class="col-sm-12" maxlength="32"/></td>' +
			'<td><input type="text" name="fee" class="col-sm-12" maxlength="6"/></td>' +
			'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
			'<td><input type="text" name="reduceMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
			'<td><input type="text" name="payedMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
			'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

			tableContainer.append(filterUnAuth(html));
			tripPlan.bindDeleteEvent();
			tripPlan.bindTicketChoose();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_ticket");
			tripPlan.calculatePrice();
			tripPlan.dateTimePicker();
			tripPlan.addResource();
			// 更新表单验证的事件绑定
			validator = rule.update(validator);      
		},
		addOther : function(e){
			var validator = e.data.validator; 
			var _this = $(this),
			tableContainer = _this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="whichDaysContainer"></td>' +
			'<td><input type="text" name="name" maxlength="32" class="col-sm-12"/></td>' +
			'<td><input type="text" name="managerName" maxlength="32" class="col-sm-12"/></td>' +
			'<td><input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"/></td>' +
			'<td><input type="text" name="fee" class="col-sm-12" maxlength="6"/></td>' +
			'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
			'<td><input type="text" name="reduceMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
			'<td><input type="text" name="payedMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
			'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
			'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
			'<td><a class="cursor btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

			tableContainer.append(html);
			tripPlan.bindDeleteEvent();
			tripPlan.bindMoneyTripPlan();
			tripPlan.setChooseDays("tripPlan_addPlan_other");
			tripPlan.calculatePrice();
			// 更新表单验证的事件绑定
			validator = rule.update(validator);    
		},
		bindMoneyTripPlan : function() {
			$('#tripPlan_addPlan_content .row').find("input[name=guidePayMoney]").off("blur").on("blur", function() {
				tripPlan.moneyTripPlan();
			});
		},
		bindDeleteEvent : function(){
			$(".table-tripPlan-container .btn-deleteTripPlanList").on("click", function(){
				var id = $(this).attr("data-entiy-id");
				if(id){
					//默认等于0，说明数据来源于模板表，直接移除tr行，不做后台删除请求
					//等于1说明数据来源于安排表，发送删除请求
					var isArranged = $('#isArranged').val() == "1" ? true : false;
					
					if(isArranged) {
						var dialogObj = $( "#confirm-dialog-message" ), obj = this;
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
										var name = $(obj).attr("data-entity-name"),
										    templateJsonDel = {name:name, id:id};
										$.ajax({
											url:""+APP_ROOT+"back/tripPlan.do?method=deleteTripPlanInfoByCategoryId&token="+$.cookie("token")+"&menuKey=arrange_all&operation=delete",
						                    dataType: "json",
						                    data:"cateName="+name+"&cateId="+id,
						                    success: function(data) {
						                    	layer.close(globalLoadingLayer);
												var result = showDialog(data);
												if(result){
													$(obj).parent().parent().remove();
													layer.msg(data.message || "删除成功");
													tripPlan.moneyTripPlan();
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
					} else {
						$(this).parent().parent().remove();
						tripPlan.moneyTripPlan();
					}
				}else{
					$(this).parent().parent().remove();
					tripPlan.moneyTripPlan();
				}
				
			});
		},
		getVal : function(obj, name){
			return obj.find("[name="+name+"]").val();
		},
		setVal : function(obj, name, val){
			obj.find("[name="+name+"]").val(val);
		},
		bindInsuranceChoose : function(){
			var insurance = $("#tripPlan_addPlan_insurance .table-tripPlan-container .chooseInsurance");
			insurance.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this,
					    o = $(obj).closest('tr');					
					tripPlan.setVal(o, "insuranceId", ui.item.id);
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/insurance.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_insurance&operation=view",
                    dataType: "json",
                    showLoading: false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var insuranceList = JSON.parse(data.insuranceList);
							if(insuranceList != null && insuranceList.length > 0){
								for(var i=0;i<insuranceList.length;i++){
									insuranceList[i].value = insuranceList[i].name;
								}
							}
							$(obj).autocomplete('option','source', insuranceList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			});
			
		},


		/**
		 * 
		 * @param  {[type]} $trBusData 车辆中的发送订单
		 * @return {[type]}            [description]
		 */
		busSendOrder:function($trBusData){
			var saveJson={};
			saveJson.busJson=[];
			if($trBusData.length > 0){
				for(var i=0; i<$trBusData.length; i++){
					if(tripPlan.getVal($trBusData.eq(i), "id")){
						var busJsonArray = {
							id : tripPlan.getVal($trBusData.eq(i), "id")
						}
						saveJson.busJson.push(busJsonArray);
					}
				}
			}
			
			tripPlan.sendOrderRequest(saveJson);
		},

		/**
		 * [hotelSendOrder 住宿的发送订单]
		 * @param  {[type]} $trHotelData [description]
		 * @return {[type]}              [description]
		 */
		hotelSendOrder:function($trHotelData){
			var saveJson={};
			    saveJson.hotelJson=[];
			if($trHotelData.length > 0){
				for(var i=0; i<$trHotelData.length; i++){
					if(tripPlan.getVal($trHotelData.eq(i), "hotelId")){
						var hotelJsonArray = {
							id : tripPlan.getVal($trHotelData.eq(i), "id"),
						}
						saveJson.hotelJson.push(hotelJsonArray);
					}
				}
			}
			tripPlan.sendOrderRequest(saveJson);
		},

		/**
		 * isSendOrderHide  判断发送订单是否显示隐藏
		 * @param  {[type]}  $sendArea 发送订单域
		 * @return {Boolean}           [description]
		 */
		isSendOrderHide:function($sendArea){
			var $sendOrderObj=$sendArea.find('.T-sendOrder-Area');
			for (var i = 0; i < $sendOrderObj.length; i++) {
				var statusValue=$sendOrderObj.eq(i).data('value');
				if (statusValue==2) {
					$sendOrderObj.removeClass('hide');
				} else{
					$sendOrderObj.addClass('hide');
				};
			};
		},


		/**
		 * [sendOrderRequest 发送订单请求]
		 * @param  {[type]} saveJson [description]
		 * @return {[type]}          [description]
		 */
		sendOrderRequest:function(saveJson){
			$.ajax({
				url:KingServices.build_url("busInquiry","saveBusCompanyOrder"),
				type: 'POST',
				dataType: 'JSON',
				data: "saveJson="+encodeURIComponent(JSON.stringify(saveJson)),
				success:function(data){
					var result = showDialog(data);
					if(result){
					}
			    }
			})
		},

		//导游安排
		bindGuideChoose : function(){
			var guideChoose = $("#tripPlan_addPlan_guide .table-tripPlan-container .chooseGuide");
			guideChoose.autocomplete({
				minLength:0,
				change : function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).closest('tr').find(".mobileNumber").val("")
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
								$(obj).closest('tr').find("input[name=mobileNumber]").val(guide.mobileNumber);
							}
	                    }
	                });
				}
			}).off("click").on("click", function(){
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


		//团号模糊查询
		tripNumberListChoose:function($obj){
			var tripNumberListChoose = $obj.find(".T-tripChoose");
			tripNumberListChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).parent().parent().find("input[name=tripChooseId]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=tripChooseId]").val(ui.item.id).trigger('change');
				}
			}).click(function(){
				var obj = this;
				var listObj = tripPlan.autocompleteDate.tripNumberList;
				if(listObj !=null && listObj.length>0){
					for(var i=0;i<listObj.length;i++){
						listObj[i].value = listObj[i].tripNumber;
					}
				}
				$(obj).autocomplete('option','source', listObj);
				$(obj).autocomplete('search', '');
			})
		},

		//导游模糊查询
		guideListChoose:function($obj){
			var guideListChoose = $obj.find(".T-guideChoose");
			guideListChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).closest('tr').find("input[name=guideChooseId]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$(obj).closest('tr').find("input[name=guideChooseId]").val(ui.item.id).trigger('change');
				}

			}).click(function(){
				var obj = this;
				var listGuideObj = tripPlan.autocompleteDate.guideList;
				if(listGuideObj !=null && listGuideObj.length>0){
					for(var i=0;i<listGuideObj.length;i++){
						listGuideObj[i].value = listGuideObj[i].realname;
					}
				}
				$(obj).autocomplete('option','source',listGuideObj);
				$(obj).autocomplete('search', '');
			});
		},

		//	车牌号模糊查询
		busListChoose:function($obj){
			var busListChoose = $obj.find(".T-busChoose");
			busListChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).closest('tr').find("input[name=busChooseId]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$(obj).closest('tr').find("input[name=busChooseId]").val(ui.item.id).trigger('change');
				}

			}).click(function(){
				var obj = this;
				var listBusObj = tripPlan.autocompleteDate.busList;
				if(listBusObj !=null && listBusObj.length>0){
					for(var i=0;i<listBusObj.length;i++){
						listBusObj[i].value = listBusObj[i].licenseNumber;
					}
				}
				$(obj).autocomplete('option','source',listBusObj);
				$(obj).autocomplete('search', '');
			});
		},

		bindBusCompanyChoose : function(){
			var busCompanyChoose = $("#tripPlan_addPlan_bus .table-tripPlan-container .chooseBusCompany");
			busCompanyChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).closest('tr');
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=licenseNumber]").val("");
						parents.find("input[name=licenseNumberId]").val("");
						parents.find("input[name=brand]").val("");
						parents.find("input[name=mobileNumber]").val("");
						parents.find("input[name=driverName]").val("");
					}
				},
				select:function(event,ui){
					
					var _this = this,
						parents = $(_this).closest('tr');
					parents.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					
					parents.find("input[name=licenseNumber]").val("");
					parents.find("input[name=licenseNumberId]").val("");
					parents.find("input[name=brand]").val("");
					parents.find("input[name=mobileNumber]").val("");
					parents.find("input[name=driverName]").val("");

					if(this.chooseBusLicenseNumber){
						parents.find("[name=licenseNumber]").autocomplete( "destroy");
					}
					
					this.chooseBusLicenseNumber = parents.find("[name=licenseNumber]").autocomplete({
						minLength:0,
						change:function(event,ui){
							if(ui.item == null){
								$(this).val("");
								var parents = $(this).closest('tr');
								parents.find("input[name=licenseNumberId]").val("");
								parents.find("input[name=brand]").val("");
								parents.find("input[name=mobileNumber]").val("");
								parents.find("input[name=driverName]").val("");
							}
						},
						select:function(event,ui){
							var cThis = this;
							$.ajax({
							url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
		                    dataType: "json",
		                    data:"id="+ui.item.id,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var d = JSON.parse(data.bus), objParent = $(cThis).closest('tr');
									//objParent.find("input[name=seatPrice]").val(d.seatPrice);
									//objParent.find("input[name=seatCount]").val(d.seatCount);
									objParent.find("input[name=mobileNumber]").val(d.mobileNumber);
									//objParent.find("input[name=charteredPrice]").val(d.charteredPrice);
									//objParent.find("input[name=remark]").val(d.remark);
								}
		                    }
		                 });
						}
					}).off("click").on("click", function(){
						var cThis = this;
						var needSeatCount = $(cThis).closest('tr').find("input[name=needSeatCount]").val();
						$.ajax({
							url:""+APP_ROOT+"back/busCompany.do?method=findBusListBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
		                    dataType: "json",
		                    data:"id="+ui.item.id+"&seatCount="+needSeatCount,
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
									
									
									$(cThis).autocomplete('option','source', busList);
									$(cThis).autocomplete('search', '');
								}
		                    }
		                 });
					});
					
					
				}
			}).off("click").on("click", function(){
				var obj = this, par = $(obj).closest('tr'),
				    needSeatCount = par.find("input[name=needSeatCount]").val();
				if(needSeatCount==""){
					layer.tips('请输入座位数。', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
					return;
				}
				$.ajax({
					url:""+APP_ROOT+"back/busCompany.do?method=findBusCompanyBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
                    dataType: "json",
                    data:"seatCount="+needSeatCount,
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
			});
		},
		bindRestaurantChoose : function(){
			var restauranTyp = $("#tripPlan_addPlan_restaurant .table-tripPlan-container .restauranType");
			$(restauranTyp).off("change").on("change", function(){
				var parents = $(this).closest('tr');
				parents.find("input[name=typeName]").val("");
				//parents.find("input[name=restaurantStandardId]").val("");
				parents.find("input[name=price]").val("");
			});
			var restaurantChoose = $("#tripPlan_addPlan_restaurant .table-tripPlan-container .chooseRestaurant");
			restaurantChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).closest('tr');
						parents.find("input[name=restaurantId]").val("");
						parents.find("input[name=managerName]").val("");
						parents.find("input[name=mobileNumber]").val("");
						parents.find("input[name=price]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).closest('tr');
					if (ui.item.id == -1) {
						tripPlan.addOptional($(this));
						parents.find("input[name=restaurantId]").val(ui.item.id).trigger('change');
						parents.find("input[name=mobileNumber]").val(ui.item.mobileNumber);
						parents.find("input[name=managerName]").val(ui.item.managerName);
						parents.find("input[name=price]").val("");
					}else{
						if($(_this).data('bs.popover')){
							$(_this).data('bs.popover').options.content = "";
						}
						$(_this).data("propover" , "");
						parents.find("input[name=restaurantId]").val(ui.item.id).trigger('change');
						
						$.ajax({
							url:""+APP_ROOT+"back/restaurant.do?method=findRestaurantById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
		                    dataType: "json",
		                    showLoading:false,
		                    data:"id="+ui.item.id,
		                    success: function(data){
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var restaurant = JSON.parse(data.restaurant);
									parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
									parents.find("input[name=managerName]").val(restaurant.managerName);
									parents.find("input[name=price]").val("");
									parents.find("input[name=optional]").val("");
								}
		                    }
						});
					}
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var restaurantList = JSON.parse(data.restaurantList),
								optional = {id : -1 , name : "-导游任选-",mobileNumber : "-",managerName : "-"};
							restaurantList.unshift(optional);
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

			var chooseTypeName =  $("#tripPlan_addPlan_restaurant .table-tripPlan-container .typeNameChoose").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						var objParent = $(this).closest('tr');
						objParent.find("input[name=restaurantStandardId]").val(0);
						//objParent.find("input[name=fee]").val("");
					}
				},
				select:function(event,ui){
					/*var parents = $(this).parent().parent(),
						whichDay = parents.find(".whichDaysContainer").attr("value"),
						enterTime = $("#tripPlan_addPlan_content").find("[name=startTime_Choose]").text();
					parents.find("input[name=restaurantStandardId]").val(ui.item.id).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantStandardPrice&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
	                    dataType: "json",
	                    data:"id=" + ui.item.id+"&whichDay="+whichDay+"&enterTime="+enterTime,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								parents.find("[name=fee]").val(data.price);
							}
	                    }
	                });*/
					var standardId = ui.item.id;
					var _this = $(this);
					//$(this).parent().parent().find("input[name=restaurantStandardId]").val(ui.item.id);
					$(this).closest('tr').find("input[name=fee]").val(ui.item.price);
					/*$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=findStandardDetailById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
	                    dataType: "json",
	                    data:"id="+standardId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurantStandard = JSON.parse(data.restaurantStandard);
								_this.parent().parent().find("input[name=fee]").val(restaurantStandard.contractPrice);
							}
	                    }
	                });*/
				}
			}).off("click").on("click", function(){
				var _this = this, parents = $(_this).closest('tr');
				var id = parents.find("input[name=restaurantId]").val();
				var type = parents.find('select[name=type]').val();
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantStandardByType&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
                    dataType: "json",
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
								$(_this).autocomplete('option','source', restaurantStandardList);
								$(_this).autocomplete('search', '');
							} else {
								layer.tips('没有内容。', _this, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		bindHotelChoose : function(){
			var hotelChoose = $("#tripPlan_addPlan_hotel .table-tripPlan-container .chooseHotel");
			var $hotelStar = $("#tripPlan_addPlan_hotel .table-tripPlan-container .tripPlanHotelStar");
			$hotelStar.off().on("change", function(){
				var parentObj = $(this).closest('tr');
				parentObj.find("input[name=name]").val("");
				parentObj.find("input[name=hotelId]").val("");
				parentObj.find("input[name=hotelRoom]").val("");
				parentObj.find("input[name=hotelRoomId]").val("");
				parentObj.find("input[name=mobileNumber]").val("");
				parentObj.find("input[name=managerName]").val("");
			});
			
			hotelChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).closest('tr');
						parents.find("input[name=hotelId]").val("");
						parents.find("input[name=hotelRoom]").val("");
						parents.find("input[name=hotelRoomId]").val("");
						parents.find("input[name=mobileNumber]").val("");
						parents.find("input[name=managerName]").val("");
					}
				},
				select:function(event,ui){
					var _this = this, parents = $(_this).closest('tr');
					parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
					
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
								parents.find("input[name=mobileNumber]").val(hotel.mobileNumber);
								parents.find("input[name=managerName]").val(hotel.managerName);
								parents.find("input[name=hotelRoom]").val("");
								parents.find("input[name=hotelRoomId]").val("");
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
		bindHotelRoomeChoose :function(){
			var chooseHotelRoom = $("#tripPlan_addPlan_hotel .table-tripPlan-container .chooseHotelRoom");
			chooseHotelRoom.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).closest('tr');
						objParent.find("input[name=hotelRoomId]").val("");
					}
				},
				select:function(event,ui){
					var parents = $(this).closest('tr'),
						whichDay = parents.find("select[name=whichDay]").val(),
						enterTime = $("#tripPlan_addPlan_content").find("[name=startTime_Choose]").text();
					parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelRoomPrice&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data:"id=" + ui.item.id+"&whichDay=" + whichDay+"&enterTime=" + enterTime,
	                    success: function(data) {
							var result = showDialog(data);
							if(result){
		                    	parents.find("input[name=fee]").val(data.price);
							}
	                    }
	                });
				}
			}).off("click").on("click", function(){
				var _this = this,
					parents = $(_this).closest('tr'),
					id = parents.find("input[name=hotelId]").val();
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
								layer.tips('没有内容。', _this, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		bindScenicChoose : function(){
			var scenicChoose = $("#tripPlan_addPlan_scenic .table-tripPlan-container .chooseScenic");
			scenicChoose.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).closest('tr');
						objParent.find("input[name=scenicId]").val("");
						objParent.find("input[name=chargingProjects]").val("");
						objParent.find("input[name=chargingId]").val("");
						objParent.find("input[name=fee]").val("");
					}
				},
				select : function(event,ui){
					var obj = this,objParent = $(obj).closest('tr');

					objParent.find("input[name=scenicId]").val(ui.item.id).trigger('change');
					objParent.find("input[name=chargingProjects]").val("");
					objParent.find("input[name=chargingId]").val("");
					objParent.find("input[name=fee]").val("");
					
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var scenicList = JSON.parse(data.scenicList);
							if(scenicList && scenicList.length > 0){
								for(var i=0; i < scenicList.length; i++){
									scenicList[i].value = scenicList[i].name;
								}
								$(obj).autocomplete('option','source', scenicList);
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
			
			var objParent = $(scenicChoose).closest('tr');
			this.chooseChargingProjects = objParent.find("[name=chargingProjects]").autocomplete({
				minLength:0,
				select:function(event, nameUi){
					var nameUiId = nameUi.item.id, _this = this,
						thisParent = $(_this).closest('tr'),
						startTime = $("#tripPlan_addPlan_content").find("[name=startTime_Choose]").text(),
						whichDay = thisParent.find("select[name=whichDay]").val();
					thisParent.find("input[name=chargingId]").val(nameUiId).trigger('change');
					
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=getScenicItemPrice&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+nameUiId+"&whichDay="+whichDay+"&startTime="+startTime,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								thisParent.find("input[name=fee]").val(data.price);
							}
	                    }
	                });
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=chargingId]").val("");
						thisParent.find("input[name=fee]").val("");
					}
				}
			}).off("click").on("click", function(){
				var _this = this;
				var id = $(_this).closest('tr').find("input[name=scenicId]").val();
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findItemByScenicId&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
                    showLoading:false,
                    data: "id="+id,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var scenicItemList = JSON.parse(data.scenicItemList);
							if(scenicItemList && scenicItemList.length > 0){
								for(var i=0; i < scenicItemList.length; i++){
									scenicItemList[i].value = scenicItemList[i].name;
								}
								$(_this).autocomplete('option','source', scenicItemList);
								$(_this).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', _this, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		bindShopChoose : function(){
			var shopChoose = $("#tripPlan_addPlan_shop .table-tripPlan-container .chooseShop");
			shopChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this,
				    objParent = $(_this).closest('tr');
					objParent.find("input[name=shopId]").val(ui.item.id).trigger('change');
					objParent.find("input[name=goodsPolicy]").val("");
					objParent.find("input[name=shopPolicyId]").val("");
					objParent.find("input[name=travelAgencyRate]").val("");
					objParent.find("input[name=guideRate]").val("");
					
					$.ajax({
						url:""+APP_ROOT+"back/shop.do?method=getShopById&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var shop = JSON.parse(data.shop);
								objParent.find("input[name=mobileNumber]").val(shop.mobileNumber);
								objParent.find("input[name=managerName]").val(shop.managerName);
							}
	                    }
	                });
					
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=shopId]").val("");
						thisParent.find("input[name=managerName]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=goodsPolicy]").val("");
						thisParent.find("input[name=shopPolicyId]").val("");
						thisParent.find("input[name=travelAgencyRate]").val("");
						thisParent.find("input[name=guideRate]").val("");
					}
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/shop.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var scenicList = JSON.parse(data.scenicList);
							if(scenicList && scenicList.length > 0){
								for(var i=0; i < scenicList.length; i++){
									scenicList[i].value = scenicList[i].name;
								}
								$(obj).autocomplete('option','source', scenicList);
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
			
			var objParent = $(shopChoose).closest('tr');
			this.chooseGoodsPolicy = objParent.find("[name=goodsPolicy]").autocomplete({
				minLength:0,
				select:function(event, nameUi){
					var nameUiId = nameUi.item.id, obj = this;
					var thisParent = $(obj).closest('tr');
					thisParent.find("input[name=shopPolicyId]").val(nameUiId).trigger('change');
					/*$.ajax({
						url:""+APP_ROOT+"back/shop.do?method=findRebateDetail&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
	                    dataType: "json",
	                    data: "id="+nameUiId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var shopPolicyRebate = JSON.parse(data.shopPolicyRebate) || {};
								var thisParent = $(obj).parent().parent();
								thisParent.find("input[name=shopPolicyId]").val(nameUiId);
								thisParent.find("input[name=guideRate]").val(shopPolicyRebate.guideRate || 0);
								thisParent.find("input[name=travelAgencyRate]").val(shopPolicyRebate.travelAgencyRate || 0);
							}
	                    }
	                });*/
				},
				change : function(event,nameUi){
					if(nameUi.item == null){ 
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=shopPolicyId]").val("");
						thisParent.find("input[name=guideRate]").val("");
						thisParent.find("input[name=travelAgencyRate]").val("");
					}
				}
			}).off("click").on("click", function(){
				var shopObj = this;
				var id = $(shopObj).closest('tr').find("input[name=shopId]").val();
				$.ajax({
					url:""+APP_ROOT+"back/shop.do?method=findPolicyByShopId&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
                    dataType: "json",
                    showLoading:false,
                    data: "id="+id,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var shopPolicyList = JSON.parse(data.shopPolicyList);
							if(shopPolicyList && shopPolicyList.length > 0){
								for(var i=0; i < shopPolicyList.length; i++){
									shopPolicyList[i].value = shopPolicyList[i].name;
								}
								$(shopObj).autocomplete('option','source', shopPolicyList);
								$(shopObj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', shopObj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
			
		},
		bindSelfPayChoose : function(){
			var selfPayChoose = $("#tripPlan_addPlan_selfPay .table-tripPlan-container .chooseSelfPay");
			selfPayChoose.autocomplete({
				minLength:0,
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=selfPayId]").val("");
						thisParent.find("input[name=managerName]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=fee]").val("");
						thisParent.find("input[name=selfitemId]").val("");
						thisParent.find("input[name=selfitem]").val("");
					}
				},
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayItemBySelfPayId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var selfPay = JSON.parse(data.selfPay) || {};
								var thisParent = $(_this).closest('tr');
								thisParent.find("input[name=selfPayId]").val(ui.item.id).trigger('change');
								thisParent.find("input[name=managerName]").val(selfPay.managerName);
								thisParent.find("input[name=mobileNumber]").val(selfPay.mobileNumber);
								thisParent.find("input[name=selfitemId]").val("");
								thisParent.find("input[name=selfitem]").val("");
								//thisParent.find("input[name=fee]").val(selfPayJson.prize);



							}
	                    }
	                });
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/selfpay.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
					dataType:"json",
					showLoading:false,
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var selfPayList = JSON.parse(data.selfPayList);
							if(selfPayList && selfPayList.length > 0){
								for(var i=0; i < selfPayList.length; i++){
									selfPayList[i].value = selfPayList[i].name;
								}
								$(obj).autocomplete('option','source', selfPayList);
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
			var chooseSelfitem = $("#tripPlan_addPlan_selfPay .table-tripPlan-container .chooseSelfitem");
			chooseSelfitem.autocomplete({
				minLength:0,
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).closest('tr');
						thisParent.find("input[name=selfitemId]").val("");
					}
				},
				select:function(event, ui){
					var thisParent = $(this).closest('tr'),
						startTime = $("#tripPlan_addPlan_content").find("[name=startTime_Choose]").text(),
						whichDay = thisParent.find("select[name=whichDay]").val();
					thisParent.find("input[name=selfitemId]").val(ui.item.id).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=getSelfPayItemPrice&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+ui.item.id+"&whichDay="+whichDay+"&startTime="+startTime,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								thisParent.find("input[name=oldPrice]").val(data.marketPrice);
								thisParent.find("input[name=price]").val(data.price);
							}
	                    }
					})
				}
			}).off("click").on("click",function(){
				var $objItem = $(this);
				var id = $(this).closest('tr').find("input[name=selfPayId]").val();
				if(id){
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayItemBySelfPayId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var selfPayItemList = JSON.parse(data.selfPayItemList) || {};

									for(var i=0; i < selfPayItemList.length; i++){
										selfPayItemList[i].value = selfPayItemList[i].name;
									}
									$objItem.autocomplete('option','source', selfPayItemList);
									$objItem.autocomplete('search', '');
							}
	                    }
					})
				}else{
					layer.tips('请选择公司',$objItem, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
				
			})
		},

		getQueryTerms :function(){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getQueryTermsForArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				dateType:"json",
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						tripPlan.autocompleteDate.tripNumberList = data.tripNumberList;
						tripPlan.autocompleteDate.guideList = data.guideList	;
						tripPlan.autocompleteDate.busList = data.busList;
					}
				}
			})
		},



		bindTicketChoose : function(){
			var ticketChoose = $("#tripPlan_addPlan_ticket .table-tripPlan-container .chooseTicket");
			ticketChoose.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					var thisParent = $(_this).closest('tr');
					thisParent.find("input[name=tickeId]").val(ui.item.id);
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
			
			$("#tripPlan_addPlan_ticket .date-picker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		moneyTripPlan:function() {
			
			var guideAllPayMoney = 0.0;	//总导付
			//var guideAllNowMoney = 0.0;	//现收款
			
			var inputs = $('#tripPlan_tab_content').find("input[name=guidePayMoney]");
			for(var i=0; i < inputs.length; i ++) {
				var val = $(inputs[i]).val();
				guideAllPayMoney += tripPlan.checkParamIsDouble(val);
				
			}
			
			$('#tripPlan_addPlan_tripPlan').find("input[name=guideAllPayMoney]").prev().find("strong").html(guideAllPayMoney);
			//$('#tripPlan_addPlan_tripPlan').find("input[name=guideAllNowMoney]").prev().find("strong").html(guideAllNowMoney);
			
			$('#tripPlan_addPlan_tripPlan').find("input[name=guideAllPayMoney]").val(guideAllPayMoney);
			//$('#tripPlan_addPlan_tripPlan').find("input[name=guideAllNowMoney]").val(guideAllNowMoney);
			
		},
		checkParamIsDouble : function(val) {
			val = parseFloat(val);
			if(isNaN(val)) {
				val = 0.0;
			}
			return val;
		},
		submitTripPlan : function(isClose){   
			//记录统计数据  
			var guideAllPayMoney = 0.0;
			var guideAllNowMoney = 0.0;
			var guideAllPreMoney = 0.0;
			
			tripPlan.moneyTripPlan();
			
			var tripPlanJson = {
					tripPlan : {},
					insuranceArrangeList : [],
					guideArrange : {},
					busCompanyArrange : {},
					restaurantArrangeList : [],
					hotelArrangeList : [],
					scenicArrangeList : [],
					shopArrangeList : [],
					selfPayArrangeList : [],
					ticketArrangeList : [],
					otherArrangeList : []
			}
			
			var insur = $("#tripPlan_addPlan_insurance tbody tr");
			//保险
			if(insur.length > 0){
				for(var i=0; i<insur.length; i++){
					if(tripPlan.getVal(insur.eq(i), "insuranceId")){
						var insurJosn = {
							id : tripPlan.getVal(insur.eq(i), "id"),
							insuranceId : tripPlan.getVal(insur.eq(i), "insuranceId"),
							type : tripPlan.getVal(insur.eq(i), "type"),
							price : tripPlan.getVal(insur.eq(i), "price"),
							memberCount : tripPlan.getVal(insur.eq(i), "memberCount"),
							needPayMoney : tripPlan.getVal(insur.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(insur.eq(i), "payedMoney"),
							payType : tripPlan.getVal(insur.eq(i), "payType"),
							remark : tripPlan.getVal(insur.eq(i), "remark")
						}
						tripPlanJson.insuranceArrangeList.push(insurJosn);
					}
				}
			}
			//导游安排
			var guide = $("#tripPlan_addPlan_guide tbody tr");
			if(guide.length > 0){
				for(var i=0; i<guide.length; i++){
					if(tripPlan.getVal(guide.eq(i), "id")){
						var guideJosn = {
							id : tripPlan.getVal(guide.eq(i), "id"),
							price : tripPlan.getVal(guide.eq(i), "guideFee"),
							manageFee : tripPlan.getVal(guide.eq(i), "manageFee"),
							payType : tripPlan.getVal(guide.eq(i), "payType"),
							remark : tripPlan.getVal(guide.eq(i), "remark"),
						}
						tripPlanJson.guideArrange = guideJosn;
					}
				}
			}
			//旅游车安排
			var bus = $("#tripPlan_addPlan_bus tbody tr");
			if(bus.length > 0){
				for(var i=0; i<bus.length; i++){
					if(tripPlan.getVal(bus.eq(i), "id")){
						var busJson = {
							id : tripPlan.getVal(bus.eq(i), "id"),
							price : tripPlan.getVal(bus.eq(i), "price"),
							reduceMoney : tripPlan.getVal(bus.eq(i), "reduceMoney"),
							contractNumber : tripPlan.getVal(bus.eq(i), "contractNumber"),
							needPayMoney : tripPlan.getVal(bus.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(bus.eq(i), "payedMoney"),
							payType : tripPlan.getVal(bus.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(bus.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(bus.eq(i), "remark"),
						}
						tripPlanJson.busCompanyArrange = busJson;
						guideAllPayMoney += tripPlan.checkParamIsDouble(busJson.guidePayMoney);
					}
				}
			}
			//餐安排
			var restaurant = $("#tripPlan_addPlan_restaurant tbody tr");
			if(restaurant.length > 0){
				for(var i=0; i<restaurant.length; i++){
					var isChoose = "0",restaurantChooseArrangeListJson;
					if (!!restaurant.eq(i).find('[name=restaurantName]').data('propover')) {
						restaurantChooseArrangeListJson = restaurant.eq(i).find('[name=restaurantName]').data('propover')
						if(typeof restaurant.eq(i).find('[name=restaurantName]').data('propover') === 'string'){
							restaurantChooseArrangeListJson = JSON.parse(restaurant.eq(i).find('[name=restaurantName]').data('propover'))
						}
					}
					if(!!tripPlan.getVal(restaurant.eq(i), "restaurantId") && tripPlan.getVal(restaurant.eq(i), "restaurantId") == -1){{
						isChoose = "1";
					}}
					if(tripPlan.getVal(restaurant.eq(i), "restaurantId")){
						var restaurantJson = {
							id : tripPlan.getVal(restaurant.eq(i), "id"),
							whichDay : tripPlan.getVal(restaurant.eq(i), "whichDay"),
							restaurantId : tripPlan.getVal(restaurant.eq(i), "restaurantId"),
							restaurantStandardId : tripPlan.getVal(restaurant.eq(i), "restaurantStandardId"),
							price : tripPlan.getVal(restaurant.eq(i), "price"),
							memberCount : tripPlan.getVal(restaurant.eq(i), "memberCount"),
							reduceMoney : tripPlan.getVal(restaurant.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(restaurant.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(restaurant.eq(i), "payedMoney"),
							payType : tripPlan.getVal(restaurant.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(restaurant.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(restaurant.eq(i), "remark"),
							type : restaurant.eq(i).find("[name=type]").val(),
							isChoose : isChoose,
							restaurantChooseArrangeListJson : restaurantChooseArrangeListJson
						}
						tripPlanJson.restaurantArrangeList.push(restaurantJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(restaurantJson.guidePayMoney);
					}
				}
			}
			//房安排
			var hotel = $("#tripPlan_addPlan_hotel tbody tr");
			if(hotel.length > 0){
				for(var i=0; i<hotel.length; i++){
					if(tripPlan.getVal(hotel.eq(i), "hotelId")){
						var hotelJson = {
							id : tripPlan.getVal(hotel.eq(i), "id"),
							whichDay : tripPlan.getVal(hotel.eq(i), "whichDay"),
							hotelId : tripPlan.getVal(hotel.eq(i), "hotelId"),
							hotelRoomId : tripPlan.getVal(hotel.eq(i), "hotelRoomId"),
							memberCount : tripPlan.getVal(hotel.eq(i), "memberCount"),
							price : tripPlan.getVal(hotel.eq(i), "fee"),
							reduceMoney : tripPlan.getVal(hotel.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(hotel.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(hotel.eq(i), "payedMoney"),
							payType : tripPlan.getVal(hotel.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(hotel.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(hotel.eq(i), "remark"),
						}
						tripPlanJson.hotelArrangeList.push(hotelJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(hotelJson.guidePayMoney);
					}
				}
			}
			//景点安排
			var scenic = $("#tripPlan_addPlan_scenic tbody tr");
			if(scenic.length > 0){
				for(var i=0; i<scenic.length; i++){
					if(tripPlan.getVal(scenic.eq(i), "scenicId")){
						var scenicJson = {
							id : tripPlan.getVal(scenic.eq(i), "id"),
							whichDay : tripPlan.getVal(scenic.eq(i), "whichDay"),
							scenicId : tripPlan.getVal(scenic.eq(i), "scenicId"),
							scenicItemId : tripPlan.getVal(scenic.eq(i), "chargingId"),
							tourTime : tripPlan.getVal(scenic.eq(i), "tourTime"),
							tourDuration : tripPlan.getVal(scenic.eq(i), "tourDuration"),
							orderNumber : tripPlan.getVal(scenic.eq(i), "orderNumber"),
							price : tripPlan.getVal(scenic.eq(i), "fee"),
							memberCount : tripPlan.getVal(scenic.eq(i), "memberCount"),
							reduceMoney : tripPlan.getVal(scenic.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(scenic.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(scenic.eq(i), "payedMoney"),
							payType : tripPlan.getVal(scenic.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(scenic.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(scenic.eq(i), "remark"),
						}
						tripPlanJson.scenicArrangeList.push(scenicJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(scenicJson.guidePayMoney);
					}
				}
			}
			
			//购物安排
			var shop = $("#tripPlan_addPlan_shop tbody tr");
			if(shop.length > 0){
				for(var i=0; i<shop.length; i++){
					if(tripPlan.getVal(shop.eq(i), "shopId")){
						var shopJson = {
							id : tripPlan.getVal(shop.eq(i), "id"),
							whichDay : tripPlan.getVal(shop.eq(i), "whichDay"),
							shopId : tripPlan.getVal(shop.eq(i), "shopId"),
							shopPolicyId :tripPlan.getVal(shop.eq(i), "shopPolicyId"),
							remark : tripPlan.getVal(shop.eq(i), "remark")
						}
						tripPlanJson.shopArrangeList.push(shopJson);
					}
				}
			}
			
			//自费
			var selfPay = $("#tripPlan_addPlan_selfPay tbody tr");
			if(selfPay.length > 0){
				for(var i=0; i<selfPay.length; i++){
					if(tripPlan.getVal(selfPay.eq(i), "selfPayId")){
						var selfPayJson = {
							id : tripPlan.getVal(selfPay.eq(i), "id"),
							whichDay : tripPlan.getVal(selfPay.eq(i), "whichDay"),
							selfPayId : tripPlan.getVal(selfPay.eq(i), "selfPayId"),
							selfPayItemId : tripPlan.getVal(selfPay.eq(i), "selfitemId"),
							lowestPrice : tripPlan.getVal(selfPay.eq(i), "price"),
							price : tripPlan.getVal(selfPay.eq(i), "oldPrice"),
							memberCount : tripPlan.getVal(selfPay.eq(i), "memberCount"),
							reduceMoney : tripPlan.getVal(selfPay.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(selfPay.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(selfPay.eq(i), "payedMoney"),
							payType : tripPlan.getVal(selfPay.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(selfPay.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(selfPay.eq(i), "remark")
						}
						tripPlanJson.selfPayArrangeList.push(selfPayJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(selfPayJson.guidePayMoney);
					}
				}
			}
			
			//票务
			var ticket = $("#tripPlan_addPlan_ticket tbody tr");
			if(ticket.length > 0){
				for(var i=0; i<ticket.length; i++){
					if(tripPlan.getVal(ticket.eq(i), "tickeId")){
						var ticketJson = {
							id : tripPlan.getVal(ticket.eq(i), "id"),
							whichDay : tripPlan.getVal(ticket.eq(i), "whichDay"),
							ticketId : tripPlan.getVal(ticket.eq(i), "tickeId"),
							type : tripPlan.getVal(ticket.eq(i), "type"),
							shift : tripPlan.getVal(ticket.eq(i), "shift"),
							startTime : tripPlan.getVal(ticket.eq(i), "startTime"),
							startingCity : tripPlan.getVal(ticket.eq(i), "startingCity"),
							arriveCity : tripPlan.getVal(ticket.eq(i), "arriveCity"),
							seatLevel : tripPlan.getVal(ticket.eq(i), "seatLevel"),
							memberCount : tripPlan.getVal(ticket.eq(i), "memberCount"),
							price : tripPlan.getVal(ticket.eq(i), "fee"),
							reduceMoney : tripPlan.getVal(ticket.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(ticket.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(ticket.eq(i), "payedMoney"),
							payType : tripPlan.getVal(ticket.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(ticket.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(ticket.eq(i), "remark"),
						}
						tripPlanJson.ticketArrangeList.push(ticketJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(ticketJson.guidePayMoney);
					}
				}
			}
			
			//其它
			var other = $("#tripPlan_addPlan_other tbody tr");
			if(other.length > 0){
				for(var i=0; i<other.length; i++){
					if(tripPlan.getVal(other.eq(i), "whichDay")){
						var otherJson = {
							id : tripPlan.getVal(other.eq(i), "id"),
							whichDay : tripPlan.getVal(other.eq(i), "whichDay"),
							managerName : tripPlan.getVal(other.eq(i), "managerName"),
							mobileNumber : tripPlan.getVal(other.eq(i), "mobileNumber"),
							name : tripPlan.getVal(other.eq(i), "name"),
							memberCount : tripPlan.getVal(other.eq(i), "memberCount"),
							price : tripPlan.getVal(other.eq(i), "fee"),
							reduceMoney : tripPlan.getVal(other.eq(i), "reduceMoney"),
							needPayMoney : tripPlan.getVal(other.eq(i), "needPayMoney"),
							payedMoney : tripPlan.getVal(other.eq(i), "payedMoney"),
							payType : tripPlan.getVal(other.eq(i), "payType"),
							guidePayMoney : tripPlan.getVal(other.eq(i), "guidePayMoney"),
							remark : tripPlan.getVal(other.eq(i), "remark")
						}
						tripPlanJson.otherArrangeList.push(otherJson);
						guideAllPayMoney += tripPlan.checkParamIsDouble(otherJson.guidePayMoney);
					}
				}
			}
			
			//获取tripPlan
			var tmp = {
				id : $('#tripPlan_addPlan_tripPlan input[name=tripPlanId]').val(),
				guideAllPayMoney : $('#tripPlan_addPlan_tripPlan input[name=guideAllPayMoney]').val(),
				guideAllNowMoney : $('#tripPlan_addPlan_tripPlan input[name=guideAllNowMoney]').val(),
				guideAllPreMoney : $('#tripPlan_addPlan_tripPlan input[name=guideAllPreMoney]').val()
			}
			tmp.guideAllPayMoney = guideAllPayMoney;
			
			tripPlanJson.tripPlan = tmp;
			
			
			var json = JSON.stringify(tripPlanJson);
			var tripPlanId = $(this).attr('data-entiy-id');
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=updateArrangeTriplan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				type:"POST",
				data:{"arrangeTripPlanInfo":json},
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($("#confirm-dialog-message"),data.message, function(){
							tripPlan.edited["update"] = "";
							$("#main-container")[0].index = 0;
							if(isClose == 1){
								closeTab(menuKey + "-update");
								tripPlan.listTripPlan(0,"","","","","","","","");
							}
						});
					}
				}
			});
		},
		setChooseDays : function(id){
			var days = $(".tripPlanLineProductDays").text();
			if(parseInt(days) < 1)return;
			if(id){
				var tr = $("#"+id+" tbody tr");
				var selectText = '<select class="col-sm-12" name="whichDay">';
				for(var i = 0; i < parseInt(days); i++){
					selectText += '<option value="'+(i+1)+'">第'+(i+1)+'天</option>';
				}
				selectText += '</select>';
				tr.eq(tr.length-1).find(".whichDaysContainer").html(selectText);
			}else{
				$("td.whichDaysContainer").each(function(index){
					var val = $(this).attr("value");
					var selectText = '<select class="col-sm-12" name="whichDay">';
					for(var i = 0; i < parseInt(days); i++){
						if(val == (i+1)){
							selectText += '<option value="'+(i+1)+'" selected="selected">第'+(i+1)+'天</option>';
						}else{
							selectText += '<option value="'+(i+1)+'">第'+(i+1)+'天</option>';
						}
					}
					selectText += '</select>';
					$(this).html(selectText);
				});
			}
		},
		//计算 应付 导付
		calculatePrice : function(){
			var table = $(".table-tripPlan-container tbody tr"), price = 0, num = 0, reduceMoney = 0;
			table.each(function(){
				var _this = $(this);
				_this.find("input[name=price], input[name=fee]").on("change", function(){
					tripPlan.plusPrice(this);
				});
				_this.find("input[name=price], input[name=fee]").on("blur", function(){
					tripPlan.plusPrice(this);
				});
				_this.find("input[name=memberCount], input[name=memberCount], input[name=needRoomCount]").on("change", function(){
					tripPlan.plusPrice(this);
				});
				_this.find("input[name=reduceMoney]").on("change", function(){
					tripPlan.plusPrice(this);
				});
				_this.find("input[name=payedMoney]").on("change", function(){
					tripPlan.plusPrice(this);
				});
				_this.find("select[name=payType]").on("change", function(){
					if($(this).val()!=0){
						$(this).parent().parent().find("input[name=guidePayMoney]").val("");
					}else{
						tripPlan.plusPrice(this);
					}
				});
			});			
		},
		plusPrice :function(obj){
			var parents = $(obj).parent().parent();
			var payType = parents.find("select[name=payType]").val(),
				payedMoney = parents.find("input[name=payedMoney]").val(),
				payedMoney = isNaN(payedMoney) ? 0 : payedMoney;
			price = parseFloat(parents.find("input[name=price], input[name=fee]").val());
			price = isNaN(price) ? 0 : price;
			num = parseFloat(parents.find("input[name=memberCount], input[name=memberCount], input[name=needRoomCount]").val());
			num = isNaN(num) ? 0 : num;
			reduceMoney = parseFloat(parents.find("input[name=reduceMoney]").val());
			reduceMoney = isNaN(reduceMoney) ? 0 : reduceMoney;

			parents.find("input[name=needPayMoney]").val(price * num - reduceMoney);
			
			if(payType == 0){
				parents.find("input[name=guidePayMoney]").val((price * num - reduceMoney)-payedMoney);
			}
			tripPlan.moneyTripPlan();
		},
		exportTripPlanArrange:function(){
			var id = $(this).attr("data-entity-id");
			checkLogin(function(){
				var url = ""+APP_ROOT+"back/export.do?method=exportTripPlanArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&tripPlanId="+id+"";
				exportXLS(url);
			});
		},
		//发团安排 发送通知
		sendTripPlanArrange :function(){
			var id = $(this).attr("data-entiy-id");
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=noticeResourceArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($("#confirm-dialog-message"),data.message, function(){
							tripPlan.listTripPlan(0,"","","","","","","");
						});
					}
				}
			});
		},
		//添加自选餐厅
		addOptional :function($objInput){
			var html = addOptionalTemplate(),$inputJson = $objInput.data("propover");
			if (!!$inputJson && typeof $inputJson === "string") {
				$inputJson = JSON.parse($inputJson);
			}
			var addOptionalLayer = layer.open({
	            type: 1,
	            title: "餐厅自选模式",
	            skin: 'layui-layer-rim', //加上边框
	            area: '1190px', //宽高
	            zIndex: 1028,
	            content: html,
	            scrollbar: false,
	            success: function(data) {
	                var $container = $(".T-optional-container"),
	                	$list = $container.find('.T-addOptionalList'),
	                	$tbody = $container.find('.T-alreadyAddOptionalTbody'),
	                	optionalArray = [];

	                if (!!$inputJson && $inputJson.length != 0) {
	                	for (var i = 0; i < $inputJson.length; i++) {
	                		var html = '<tr data-entity-id="'+$inputJson[i].id+'" data-entity-restaurantid="'+$inputJson[i].restaurantId+'">'+
							'<td class="name">'+$inputJson[i].name+'</td>'+
							'<td class="managerName">'+$inputJson[i].managerName+'</td>'+
							'<td class="mobileNumber">'+$inputJson[i].mobileNumber+'</td>'+
							'<td><a class="T-del">删除</a></td>'+
							'</tr>';
							$tbody.append(html);
							optionalArray.push($inputJson[i].restaurantId)
	                	}
	                }
	                //初始化list列表
	                listOptional(0);
	                
	                //给提交按钮绑定事件
	                $container.find(".T-btn-saveOptional").on('click' , saveOptional);
	                //给取消按钮绑定事件
	                $container.find(".T-btn-cancelOptional").click(function() {
	                    layer.close(addOptionalLayer);
	                });
	                function listOptional(page){
						$.ajax({
				        	url: ""+APP_ROOT+"back/restaurant.do?method=getRestaurantListByChooseMode&token="+$.cookie("token")+"&menuKey=resource_restaurant"+"&operation=view",
				        	type: "POST",
				        	data: "pageNo="+page,
				        	success: function(data){
				        		var result = showDialog(data);
				        		if (result) {
				        			data.restaurantList = JSON.parse(data.restaurantList);
									var html = optionalListTemplate(data);
									$list.html(html);
									$(window).trigger("resize");

									// 绑定翻页组件
									laypage({
									    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
									    pages: data.totalPage, //总页数
									    curr: (page + 1),
									    jump: function(obj, first) {
									    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
									    		listOptional(obj.curr -1);
									    	}
									    }
									});	

									//添加自选
									$container.find(".T-add").off('click').on('click', addOptional);
									//删除自选
									$container.find(".T-del").off('click').on('click', delOptional);
				        		}
				        	}
				        })
		        	}
		        	//添加自选函数
		        	function addOptional(){
		        		var $this = $(this),$parent = $this.closest('tr'),
							$id = $parent.data("entity-id"),
							$name = $parent.data("entity-name"),
							$managerName = $parent.data("entity-managername"),
							$mobileNumber = $parent.data("entity-mobilenumber");
						var html = '<tr data-entity-id="" data-entity-restaurantid="'+$id+'">'+
							'<td class="name">'+$name+'</td>'+
							'<td class="managerName">'+$managerName+'</td>'+
							'<td class="mobileNumber">'+$mobileNumber+'</td>'+
							'<td><a class="T-del">删除</a></td>'+
							'</tr>';
						if (optionalArray.length >= 5) {
							showMessageDialog($("#confirm-dialog-message"),"最多只能添加5个自选餐厅");
							return;
						}else{
							if (optionalArray.length == 0) {
								$tbody.append(html);
								optionalArray.push($id);
							}else{
								for (var i = 0,$length = optionalArray.length; i < $length; i++) {
				        			if (optionalArray[i] == $id) {
				        				showMessageDialog($("#confirm-dialog-message"),"该餐厅已经添加");
				        				return;
				        			}
				        		}
		        				$tbody.append(html);
								optionalArray.push($id);
			        		}
						}
						//删除自选
						$container.find(".T-del").off('click').on('click', delOptional);
		        	};
		        	//删除自选函数
		        	function delOptional(){
		        		var $this = $(this),$parent = $this.closest('tr'),
		        			$restaurantid = $parent.data("entity-restaurantid"),
		        			$id = $parent.data("entity-id")+"";
		        		for (var i = 0,$length = optionalArray.length; i < $length; i++) {
		        			if (optionalArray[i] == $restaurantid) {
	        					var a = i;
		        				if (!!$id) {
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
											        	url: ""+APP_ROOT+"back/restaurant.do?method=deleteChooseRestaurant&token="+$.cookie("token")+"&menuKey=resource_restaurant"+"&operation=view",
											        	type: "POST",
											        	data: "id="+$id,
											        	success: function(data){
											        		var result = showDialog(data);
											        		if (result) {
											        			showMessageDialog($("#confirm-dialog-message"),data.message,function(){
											        				optionalArray.splice([a],1);
												        			$parent.remove();
												        			saveOptional(1);
											        			})
												        	}
												        }
												    })
												}
											}
										],
										open:function(event,ui){
											$(this).find("p").text("你确定要删除该条记录？");
										}
									});	
		        				}else{
		        					optionalArray.splice([a],1);
				        			$parent.remove();
				        			saveOptional(1); 
						        }
		        			} 
		        		}
		        	};
		        	//保存函数
		        	function saveOptional(type){
		        		var $tr = $tbody.find('tr'),
		        			optionalJson = [];
		        		function getValue($obj,className){
		        			var value = $obj.find('.'+className).text();
		        			return value;
		        		}
		        		$tr.each(function(){
		        			var $this = $(this),$id = $this.data("entity-id")+"" || "";
		        				json = {
		        				id : $id+"",
		        				restaurantId : $this.data("entity-restaurantid")+"",
		        				name : getValue($this,"name"),
		        				managerName : getValue($this,"managerName"),
		        				mobileNumber : getValue($this,"mobileNumber")
		        				}
		        			optionalJson.push(json);
		        		})
		        		optionalJson = JSON.stringify(optionalJson);
		        		//$objInput.closest('tr').find("[name=optional]").val(encodeURIComponent(optionalJson))
		        		$objInput.data("propover" , optionalJson);
		        		if (type == 1) {}else{
		        			layer.close(addOptionalLayer);
		        		}
						tripPlan.viewOptionalRestaurant($objInput);
						//Tools.descToolTip($("#tripPlan_addPlan_restaurant .chooseRestaurant"),2);
		        	};
	            }
        	});
		},
		save : function(saveType){
			if(saveType == "update"){
				tripPlan.submitTripPlan(1);
			} 
		},
		clearEdit : function(clearType){
			tripPlan.edited[clearType] = "";
		}
	};
	
	exports.listTripPlan = tripPlan.listTripPlan;
	exports.isEdited = tripPlan.isEdited;
	exports.save = tripPlan.save;
	exports.clearEdit = tripPlan.clearEdit;
});

