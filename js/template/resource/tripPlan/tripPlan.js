/**
 * 发团管理——发团安排
 *
 * 通知、编辑安排、查看安排、导出安排操作
 * 显示发团安排列表
 * author: yangcany
 */
define(function(require, exports) {
	var rule=require("./rule"),
		menuKey = "arrange_all",
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		viewTemplate = require("./view/view"),
		addOptionalTemplate = require("./view/addOptional"),
		optionalListTemplate = require("./view/optionalList"),
		expiryTimeTemplate = require("./view/expiryTime"),
		hotelInquiryResultTemplate = require("./view/hotelInquiryResult"),
		hotelbookingViewTemplate = require("./view/hotelbookingView"),
		busInquiryResultTemplate = require("./view/busInquiryResult"),
		busbookingViewTemplate = require("./view/busbookingView");
	/**
	 * 自定义发团安排对象
	 * @type {Object}
	 */
	var tripPlan = {
		$tab: false,
		$searchArea: false
	},
		autocompleteData = {};
	//初始化发团安排模块
	tripPlan.initModule = function() {
		tripPlan.listMainTripPlan();
	};

	//发团安排搜索模块
	tripPlan.listMainTripPlan = function () {
		$.ajax({
			url: KingServices.build_url('tripPlan','getQueryTermsForArrange'),
			type:"POST",
			success:function(data){
				autocompleteData.tripList = data.tripNumberList;
				autocompleteData.guideList = data.guideList;
				autocompleteData.busList = data.busList;
				if(showDialog(data)){
					Tools.addTab(menuKey,'发团安排',listMainTemplate())

					tripPlan.$tab = $('#tab-arrange_all-content');
					tripPlan.$searchArea = tripPlan.$tab.find('.T-search-tripPlan');
					tripPlan.init_eventMain();
					tripPlan.listTripPlan(0);
				}
			}
		})
	};

	/**
	 * listMain搜索模块事件绑定
	 * @return {[type]} [description]
	 */
	tripPlan.init_eventMain = function() {
		//搜索栏状态button下拉事件
		tripPlan.$tab.find('.T-tripPlanState').on('click', 'a', function() {
			var $this = $(this);
			// 设置选择状态的效果
			$this.closest('ul').prev().data('status', $this.data('value')).children('span').text($this.text());
			tripPlan.listTripPlan(0);
		});

		//搜索按钮事件绑定
		tripPlan.$tab.find('.T-btn-tripPlan-search').on('click', function() {
			tripPlan.listTripPlan(0);
		})

		//查询条件 autocomplete
		//tripPlan.autocompleteSearch(tripPlan.$tab.find('.T-tripChoose'), autocompleteData.tripList, 'tripNumber', 'tripChooseId');
		tripPlan.autocompleteSearch(tripPlan.$tab.find('.T-busChoose'), autocompleteData.busList, 'licenseNumber', 'busChooseId');
		tripPlan.autocompleteSearch(tripPlan.$tab.find('.T-guideChoose'), autocompleteData.guideList, 'realname', 'guideChooseId');
	
		//时间控件
		tripPlan.datepicker(tripPlan.$tab);
	};

	/**
	 * 查询发团安排列表
	 * @param  {[type]} page          [页数]
	 * @param  {[type]} tripId        [团号ID]
	 * @param  {[type]} tripNumber    [团号字段]
	 * @param  {[type]} startTime     [出团日期]
	 * @param  {[type]} guideId       [导游ID]
	 * @param  {[type]} realname      [导游字段]
	 * @param  {[type]} busId         [车ID]
	 * @param  {[type]} licenseNumber [车字段]
	 * @param  {[type]} status        [状态]
	 * @return {[type]}               [description]
	 */
	tripPlan.listTripPlan = function(page,tripId,tripNumber,startTime,guideId,realname,busId,licenseNumber,status) {
		if (tripPlan.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
			tripId = tripPlan.$searchArea.find("input[name=tripChooseId]").val(),
			tripNumber = tripPlan.$searchArea.find("input[name=tripNumber]").val(),
			startTime = tripPlan.$searchArea.find("input[name=startTime]").val(),
			guideId = tripPlan.$searchArea.find("input[name=guideChooseId]").val(),
			realname = tripPlan.$searchArea.find("input[name=realname]").val(),
			busId = tripPlan.$searchArea.find("input[name=busChooseId]").val(),
			licenseNumber = tripPlan.$searchArea.find("input[name=licenseNumber]").val(),
			status = tripPlan.$searchArea.find("[name=status]").data("status")
        }
        // 修正页码
        page = page || 0;

        $.ajax({
			url:  KingServices.build_url('tripPlan','listTripPlan'),
			type:"POST",
			data: {
				queryType: '1',
				pageNo: page,
				tripId: tripId,
				tripNumber: tripNumber,
				startTime: startTime,
				guideId: guideId,
				guideName: realname,
				busId: busId,
				busLicenseNumber: licenseNumber,
				status: status,
				sortType: 'auto',
				tripPlan: 'arrange'
			},
			success:function(data){
				data.tripPlanList = JSON.parse(data.tripPlanList);
				if(showDialog(data)){
					tripPlan.$tab.find('.T-tripPlanList').html(filterUnAuth(listTemplate(data)));
					
					tripPlan.$tab.off('click').on('click', '.T-action', function(event) {
						event.preventDefault();
						var $this = $(this), $id = $this.closest('tr').data('entity-id'),
							$billStatus = $this.attr('billStatus');
						if ($this.hasClass('T-sendOrder')) {
							//下单
							var $quoteId = $this.data('entity-quoteId');
							tripPlan.singleClickSendOrder($quoteId,$id);
						}else if ($this.hasClass('T-send')){
							//通知
							tripPlan.sendTripPlanArrange($id);
						}else if ($this.hasClass('T-view')) {
							//查看
							tripPlan.viewTripPlan($id);
						}else if ($this.hasClass('T-plan')) {
							//安排
							tripPlan.updateTripPlanArrange($id, $billStatus)
						}else if ($this.hasClass('T-export')) {
							//导出
							tripPlan.exportTripPlanArrange($id);
						}
					});

					// 绑定翻页组件
					laypage({
					    cont: tripPlan.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		tripPlan.listTripPlan(obj.curr -1);
							};
					    }
					});
				};
			}
		});
	};

	/**
	 * 下单操作
	 * @param  {[type]} quoteId    [报价ID]
	 * @param  {[type]} tripPlanId [发团安排ID]
	 * @return {[type]}            [description]
	 */
	tripPlan.singleClickSendOrder = function(quoteId,tripPlanId) {
		$.ajax({
			url:KingServices.build_url("productQuote","saveOrder"),
			type: 'POST',
			data: "quoteId="+quoteId+"&tripPlanId="+tripPlanId,
			success:function(data){
					if(showDialog(data)){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
					});
				}
		    }
		})
	}

	/**
	 * 查看发团安排
	 * @param  {[type]} $id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.viewTripPlan = function($id) {
		$.ajax({
			url: KingServices.build_url('tripPlan','findArrangeTripPlanById'),
			type: "GET",
			data: {
				id: $id,
				type: 'view'
			},
			success:function(data){
				if(showDialog(data)){
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
					
					addTab(menuKey+"-view","查看发团安排",viewTemplate(data));
					var $tab = $("#tab-arrange_all-view-content");
					$tab.on("mouseenter",".T-viewWhichDaysContainer",function(){
						var whichDay = $(this).attr("whichDay"),
							$this = $(this)
							startTime = $tab.find("span[name=startTime_Choose]").text(),
							date = new Date(startTime.replace("-", "/").replace("-", "/"));
						var timer = date.getTime()+(whichDay-1)*24*60*60*1000;
						date.setTime(timer);
						var datetime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
						layer.tips(datetime, $this, {
				    		tips: [1, '#3595CC'],
				    		time: 1500
						});
					})
				}
			}
		});
	};

	/**
	 * 导出发团安排
	 * @param  {[type]} $id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.exportTripPlanArrange = function($id){
		checkLogin(function(){
			var url = ""+APP_ROOT+"back/export.do?method=exportTripPlanArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&tripPlanId="+$id+"";
			exportXLS(url);
		});
	};

	/**
	 * 通知发团安排
	 * @param  {[type]} $id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.sendTripPlanArrange = function($id) {
		$.ajax({
			url: KingServices.build_url('tripPlan','noticeResourceArrange'),
			type:"POST",
			data:"id="+$id,
			success:function(data){
				if(showDialog(data)){
					showMessageDialog($("#confirm-dialog-message"),data.message, function(){
						tripPlan.listTripPlan(0);
					});
				}
			}
		});
	};

	/**
	 * 编辑发团安排
	 * @param  {[type]} $id         [description]
	 * @param  {[type]} $billStatus [description]
	 * @return {[type]}             [description]
	 */
	tripPlan.updateTripPlanArrange = function($id, $billStatus) {
		if($billStatus == 1 || $billStatus == 2){
			showMessageDialog($( "#confirm-dialog-message" ), '该团已审核，无法编辑')
		}else if($billStatus == 0){
			showMessageDialog($( "#confirm-dialog-message" ), '该团导游已报账，无法编辑')
		}else{
			$.ajax({
				url: KingServices.build_url('tripPlan','findArrangeTripPlanById'),
				type: "GET",
				data: "id="+$id,
				success:function(data){
					if(showDialog(data)){
						$(document).on("mouseenter",".T-whichDaysContainer",function(){
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
						if (Tools.addTab(menuKey + '-update', '编辑发团安排', addTemplate(data))) {
							var $tab = $("#tab-arrange_all-update-content"), validator = rule.listTripPlanCheckor($tab);
							tripPlan.init_event($tab,$id);
						}
					}
				}
			});
		}
	};

	/**
	 * 编辑发团安排事件处理
	 * @return {[type]} [description]
	 */
	tripPlan.init_event = function($tab,$id) {
		// 监听修改
		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change','input, select,.T-editor', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		// 监听保存，并切换tab
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
			event.preventDefault();
			tripPlan.submitTripPlan($tab,1,$id,tab_id, title, html);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			tripPlan.init_event($tab);
		})
		// 保存后关闭
		.on(CLOSE_TAB_SAVE, function(event) {
			event.preventDefault();
			tripPlan.submitTripPlan($tab,0,$id);
		});

		var validator = rule.listTripPlanCheckor($tab);  
		$tab.find('.T-addResource').off('click').on('click', function() {
			var $this = $(this);
			if ($this.hasClass('T-addInsurance')) {
				//保险安排
				tripPlan.addInsurance($this, validator, $tab);
			}else if ($this.hasClass('T-addRestaurant')) {
				//餐厅安排
				tripPlan.addRestaurant($this, validator, $tab);
			}else if ($this.hasClass('T-addHotel')) {
				//酒店安排
				tripPlan.addHotel($this, validator, $tab);
			}else if ($this.hasClass('T-addScenic')) {
				//景区安排
				tripPlan.addScenic($this, validator, $tab);
			}else if ($this.hasClass('T-addShop')) {
				//购物安排
				tripPlan.addShop($this, validator, $tab);
			}else if ($this.hasClass('T-addSelfPay')) {
				//自费安排
				tripPlan.addSelfPay($this, validator, $tab);
			}else if ($this.hasClass('T-addTicket')) {
				//票务安排
				tripPlan.addTicket($this, validator, $tab);
			}else if ($this.hasClass('T-addOther')) {
				//其它安排
				tripPlan.addOther($this, validator, $tab);
			}
		});
		tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
		//修改预订状态
		$tab.find('.tabbable').on('change', '[name=busOrder],[name=hotelOrder]', function() {
			var $this = $(this), $parents = $this.closest('tr'), value = $this.val(), cateName = $parents.find('.T-btn-deleteTripPlanList').data('entity-name');
			if (value == 2 || value == 3 || value == 0) {
				if (cateName == 'hotel') {
					$parents.find('.T-hotel-bookingStatus').removeClass('T-hotel-booking').css('color','#bbb');
				}else {
					$parents.find('.T-bus-bookingStatus').removeClass('T-bus-booking').css('color','#bbb');
				}
			}else {
				$parents.find('.T-bus-bookingStatus').addClass('T-bus-booking').css('color','#337ab7');
				$parents.find('.T-hotel-bookingStatus').addClass('T-hotel-booking').css('color','#337ab7');
			}
		})

		//车队询价、预订操作
		$tab.find('#tripPlan_addPlan_bus').off('click.busAction').on('click.busAction', '.T-bus-action', function(event) {
			event.preventDefault();
			var $this = $(this),
				$parents = $this.closest('tr');
				saveJson = {
					brand: $parents.find('[name=brand]').val(),
					busCompanyId: $parents.find('[name=busCompanyId]').val(),
					needSeatCount: $parents.find('[name=needSeatCount]').val(),
					tripPlanId: $tab.find('[name=tripPlanId]').val(),
					arrangeId: $parents.data('entity-arrangeid')
				}
			if ($this.hasClass('T-bus-askPrice')) {
				//询价
				if (!!saveJson.brand == false || !!saveJson.busCompanyId == false || !!saveJson.needSeatCount == false) {
					showMessageDialog($( "#confirm-dialog-message" ), '请完善车队信息');
				}else {
					tripPlan.busAskPrice($this, $tab, saveJson);
				}
			}else if ($this.hasClass('T-bus-booking')) {
				//预订
				tripPlan.busBooking($this, $tab, saveJson);
			}else if ($this.hasClass('T-bus-offerStatus')) {
				//询价状态
				tripPlan.busOfferStatus($this, $tab, saveJson);
			}else if ($this.hasClass('T-bus-bookingView')) {
				//预订查询
				tripPlan.busBookingView($this, $tab, saveJson);
			}
		});
		//酒店询价、预订操作
		$tab.find('#tripPlan_addPlan_hotel').off('click.hotelAction').on('click.hotelAction', '.T-hotel-action', function(event) {
			event.preventDefault();
			var	$this = $(this),
				$parents = $this.closest('tr'),
				saveJson = { 
				arrangeId: $parents.data('entity-arrangeid'),
				count: $parents.find('[name=memberCount]').val(),
				hotelId: $parents.find('[name=hotelId]').val(),
				price: $parents.find('[name=fee]').val(),
				tripPlanId: $tab.find('[name=tripPlanId]').val(),
				type: $parents.find('[name=hotelRoom]').val(),
				whichDay: $parents.find('[name=whichDay]').val(),
				hotelRoomId: $parents.find('[name=hotelRoomId]').val()
			}
			if ($this.hasClass('T-hotel-askPrice')) {
				//询价
				if (!!saveJson.count == false || !!saveJson.hotelId == false || !!saveJson.type == false) {
					showMessageDialog($( "#confirm-dialog-message" ), '请完善酒店信息');
				}else {
					tripPlan.hotelOfferStatus($this, $tab, saveJson, 'ask');
				}
			}else if ($this.hasClass('T-hotel-booking')) {
				//预订
				tripPlan.hotelBooking($this, $tab, saveJson)
			}else if ($this.hasClass('T-hotel-offerStatus')) {
				//询价状态
				tripPlan.hotelOfferStatus($this, $tab, saveJson);
			}else if ($this.hasClass('T-hotel-bookingView')) {
				//预订查询
				tripPlan.hotelBookingView($this, $tab, saveJson);
			}
		});
		//一键询价、预订操作
		$tab.find('#tripPlan_addPlan_hotel').off('click.oneClick').on('click.oneClick', '.T-oneClick', function() {
			event.preventDefault();
			var $this = $(this), isAgree = 1,
				saveJson = {
					tripPlanId : $tab.find('[name=tripPlanId]').val(),
					hotelJson: []
				}
				var $tr = $tab.find('#tripPlan_addPlan_hotel tbody tr');
				$tr.each(function(i) {
					var json = {
						arrangeId: $tr.eq(i).data('entity-arrangeid'),
						count: $tr.eq(i).find('[name=memberCount]').val(),
						hotelId: $tr.eq(i).find('[name=hotelId]').val(),
						price: $tr.eq(i).find('[name=fee]').val(),
						type: $tr.eq(i).find('[name=hotelRoom]').val(),
						whichDay: $tr.eq(i).find('[name=whichDay]').val(),
						hotelRoomId: $tr.eq(i).find('[name=hotelRoomId]').val()
					}
					if (!!json.count == false || !!json.hotelId == false || !!json.price == false || !!json.type == false || !!json.whichDay == false) {
						showMessageDialog($( "#confirm-dialog-message" ), '请完善酒店信息');
						isAgree = 0;
					}
				saveJson.hotelJson.push(json);
				});
			if ($this.hasClass('T-asking')) {
				//一键询价
				if (!!isAgree) {
					tripPlan.oneClickAsking($this, $tab, saveJson);
				}
			}else if ($this.hasClass('T-booking')) {
				//一键预订
				tripPlan.oneClickBooking($this, $tab, saveJson);
			}
		})

		//精度控件 
		var $price = $tab.find('.price');
		Tools.inputCtrolFloat($price);
		//添加资源
		tripPlan.addResource();
		//第N天
		tripPlan.setChooseDays();
		//删除操作
		$tab.on('click', '.T-btn-deleteTripPlanList', function() {
			var $this = $(this),$parents = $this.closest('tr'), $id = $parents.data('entity-arrangeid'),
				$name = $this.data('entity-name')
			tripPlan.deleteTripPlan($this, $id, $name, $tab);
		});
		//所有autocomplete
		tripPlan.bindAutocomplete($tab);
		//查看浮动自选餐厅
		tripPlan.viewOptionalRestaurant($tab.find('.T-chooseRestaurant'));
		//计算导付
		tripPlan.calculatePrice($tab);
		//时间控件
		tripPlan.dateTimePicker($tab);
		//提交事件
		$tab.find(".T-btn-submit-tripPlan").on("click",function(){
			 if (!validator.form()) { 
			    return; 
			 }
			tripPlan.submitTripPlan($tab,0,$id);
		});  
	};


	/**
	 * 车队询价操作
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.busAskPrice = function($this, $tab, saveJson) {
		var html = expiryTimeTemplate();
		tripPlan.$expiryTimeLayer = layer.open({
		    type: 1,
		    title:"询价截止时间",
		    skin: 'layui-layer-rim', //加上边框
		    area: '500px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){

				var $container = $(".T-tripPlanExpiryTimeLayer");
				tripPlan.dateTimePicker($container);
		    	//提交事件
		    	$container.find(".T-btn-submit-expiryTime").off('click').on("click",function() {
		    		saveJson.expiryTime = $container.find('[name=expiryTime]').val();
		    		if (!!saveJson.expiryTime) {
						$.ajax({
							url: KingServices.build_url('busInquiry','saveBusArrangeInquiry'),
							type: 'POST',
							data: {saveJson: JSON.stringify(saveJson)},
							success: function(data) {
								if (showDialog(data)) {
									showMessageDialog($( "#confirm-dialog-message" ), data.message);
									layer.close(tripPlan.$expiryTimeLayer);
								}
							}
						})
					}else{
						showMessageDialog($( "#confirm-dialog-message" ), '请选择询价截止时间');
					}
		    	});
		    }
		})
	};

	/**
	 * 车队预订操作
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.busBooking = function($this, $tab, saveJson) {
		$.ajax({
			url: KingServices.build_url('busInquiry','saveBusArrangeOrder'),
			type: 'POST',
			data: {saveJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {
					showMessageDialog($( "#confirm-dialog-message" ), data.message);
					$this.closest('tr').find('[name=busOrder]').val(2);
					$this.closest('tr').find('.T-bus-bookingStatus').addClass('T-bus-booking').css('color','#337ab7');
				}
			}
		})
	};

	/**
	 * 酒店询价操作
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.hotelAskPrice = function($this, $tab, saveJson) {
		var html = expiryTimeTemplate();
		tripPlan.$expiryTimeLayer = layer.open({
		    type: 1,
		    title:"询价截止时间",
		    skin: 'layui-layer-rim', //加上边框
		    area: '500px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){

				var $container = $(".T-tripPlanExpiryTimeLayer");
				tripPlan.dateTimePicker($container);
		    	//提交事件
		    	$container.find(".T-btn-submit-expiryTime").off('click').on("click",function() {
		    		saveJson.expiryTime = $container.find('[name=expiryTime]').val();
		    		if (!!saveJson.expiryTime) {
						$.ajax({
							url: KingServices.build_url('hotelInquiry','saveHotelArrangeInquiry'),
							type: 'POST',
							data: {saveJson: JSON.stringify(saveJson)},
							success: function(data) {
								if (showDialog(data)) {
									showMessageDialog($( "#confirm-dialog-message" ), data.message);
									layer.close(tripPlan.$expiryTimeLayer);
								}
							}
						})
					}else{
						showMessageDialog($( "#confirm-dialog-message" ), '请选择询价截止时间');
					}
		    	});
		    }
		})	
	};

	/**
	 * 酒店预订操作
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.hotelBooking = function($this, $tab, saveJson) {
		$.ajax({
			url: KingServices.build_url('hotelInquiry','saveHotelArrangeOrder'),
			type: 'POST',
			data: {saveJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {
					showMessageDialog($( "#confirm-dialog-message" ), data.message);
					$this.closest('tr').find('[name=hotelOrder]').val(2);
					$this.closest('tr').find('.T-hotel-bookingStatus').addClass('T-hotel-booking').css('color','#337ab7');
				}
			}
		})
	}

	/**
	 * 酒店询价状态
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.hotelOfferStatus = function($this, $tab, saveJson, type) {
		$.ajax({
			url: KingServices.build_url('hotelInquiry','listHotelArrangeInquiry'),
			type: 'POST',
			data: {searchJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {
					data.mapList = JSON.parse(data.mapList);
					var isAlert = 0;
					if (!!type) {
						if (data.mapList.length > 0) {
							for (var i = 0, len = data.mapList.length; i < len; i++) {
								var status = data.mapList[i].hotelOffers[0].reserveMinutes
								if( status != '已拒绝' && status != '等待确认' && status != '已到期' ) {
									isAlert = 1;
								}
							}
							if (isAlert == 1) {
								showConfirmDialog($( "#confirm-dialog-message" ), '存在有效询价，可直接预订，是否继续询价', function() {
									tripPlan.hotelAskPrice($this, $tab, saveJson);
								})
							}else {
								tripPlan.hotelAskPrice($this, $tab, saveJson);
							}
						}else {
							tripPlan.hotelAskPrice($this, $tab, saveJson);
						}
					}else{
						var html = hotelInquiryResultTemplate(data);
						tripPlan.$hotelOfferLayer = layer.open({
						    type: 1,
						    title:"查看酒店询价状态",
						    skin: 'layui-layer-rim', //加上边框
						    area: '1190px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						    success:function(data){

						    }
					    });
				    }
				}
			}
		})
	};

	/**
	 * 车队询价状态
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.busOfferStatus = function($this, $tab, saveJson) {
		$.ajax({
			url: KingServices.build_url('busInquiry','listBusArrangeInquiry'),
			type: 'POST',
			data: {searchJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {
					data.mapList = JSON.parse(data.mapList);
					var html = busInquiryResultTemplate(data);
					tripPlan.$busOfferLayer = layer.open({
					    type: 1,
					    title:"查看车队询价状态",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(data){

					    }
				    });
				}
			}
		})
	};

	/**
	 * 酒店预订查看
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.hotelBookingView = function($this, $tab, saveJson) {
		$.ajax({
			url: KingServices.build_url('hotelInquiry','listHotelArrangeOrder'),
			type: 'POST',
			data: {searchJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {	
					data.hotelOrderJson = JSON.parse(data.hotelOrderJson);
					var html = hotelbookingViewTemplate(data);
					tripPlan.$hotelBookingViewLayer = layer.open({
					    type: 1,
					    title:"安排查看住宿订单查询",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(data){

					    }
				    });
				}
			}
		})
	};

	/**
	 * 车队预订查看
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.busBookingView = function($this, $tab, saveJson) {
		$.ajax({
			url: KingServices.build_url('busInquiry','listBusArrangeOrder'),
			type: 'POST',
			data: {searchJson: JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {	
					data.busOrderJson = JSON.parse(data.busOrderJson);
					var html = busbookingViewTemplate(data);
					tripPlan.$busBookingViewLayer = layer.open({
					    type: 1,
					    title:"安排查看车队订单查询",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(data){

					    }
				    });
				}
			}
		})
	};

	/**
	 * 一键询价
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.oneClickAsking = function($this, $tab, saveJson) {
		var html = expiryTimeTemplate();
		tripPlan.$expiryTimeLayer = layer.open({
		    type: 1,
		    title:"询价截止时间",
		    skin: 'layui-layer-rim', //加上边框
		    area: '500px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){

				var $container = $(".T-tripPlanExpiryTimeLayer");
				tripPlan.dateTimePicker($container);
		    	//提交事件
		    	$container.find(".T-btn-submit-expiryTime").off('click').on("click",function() {
		    		saveJson.expiryTime = $container.find('[name=expiryTime]').val();
		    		if (!!saveJson.expiryTime) {
						$.ajax({
							url: KingServices.build_url('hotelInquiry','keySaveHotelArrangeInquiry'),
							type: 'POST',
							data: {saveJson: JSON.stringify(saveJson)},
							success: function(data) {
								if (showDialog(data)) {
									showMessageDialog($( "#confirm-dialog-message" ), data.message);
									layer.close(tripPlan.$expiryTimeLayer);
								}
							}
						})
					}else{
						showMessageDialog($( "#confirm-dialog-message" ), '请选择询价截止时间');
					}
		    	});
		    }
		})	
	};


	/**
	 * 一键预订
	 * @param  {[type]} $this    [按钮]
	 * @param  {[type]} $tab     [页面容器]
	 * @param  {[type]} saveJson [参数对象]
	 */
	tripPlan.oneClickBooking = function($this, $tab, saveJson){
		$.ajax({
			url: KingServices.build_url('hotelInquiry','keySaveHotelArrangeOrder'),
			type: 'POST',
			data: {saveJson : JSON.stringify(saveJson)},
			success: function(data) {
				if (showDialog(data)) {
					showMessageDialog($( "#confirm-dialog-message" ), data.message);
				}
			}
		})
	};

	/**
	 * 一键预订 一键询价 显示和关闭
	 * @param  {[type]} $tab [description]
	 * @return {[type]}      [description]
	 */
	tripPlan.viewCloseOneClick = function($tab) {
		var $tr = $tab.find('tbody tr');
		if ($tr.length > 0) {
			$tab.find('.T-oneClick').show();
		}else{
			$tab.find('.T-oneClick').hide();
		}
	}

	//添加资源 
	tripPlan.addResource = function(){
		$("#tripPlan_addPlan_insurance .T-addInsuranceResource").off('click').on("click",{function : KingServices.addInsurance , type : "tr" , name : "insuranceName" , id : "insuranceId"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_restaurant .T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant, type : "tr" , name : "restaurantName" , id : "restaurantId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_hotel .T-addHotelResource").off('click').on("click",{function : KingServices.addHotel, type : "tr" , name : "name" , id : "hotelId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_scenic .T-addScenicResource").off('click').on("click",{function : KingServices.addScenic, type : "tr" , name : "name" , id : "scenicId"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_shop .T-addShopResource").off('click').on("click",{function : KingServices.addShop, type : "tr" , name : "name" , id : "shopId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_selfPay .T-addSelfPayResource").off('click').on("click",{function : KingServices.addSelfPay, type : "tr" , name : "name" , id : "selfPayId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_ticket .T-addTicketResource").off('click').on("click",{function : KingServices.addTicket, type : "tr" , name : "name" , id : "tickeId"}, KingServices.addResourceFunction);
	};

	/**
	 * 添加保险安排
	 * @param {[type]} validator [验证]
	 */
	tripPlan.addInsurance = function($this, validator, $tab) {
		var tableContainer = $this.closest('.ui-sortable-handle').find('.table tbody'),
			html = '<tr><td><div class="col-sm-12"><input type="text" maxlength="32" name="insuranceName" class="col-sm-12 T-chooseInsurance bind-change"/><input type="hidden" name="insuranceId"/><span class="addResourceBtn T-addInsuranceResource R-right" data-right="1080002" title="添加保险公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="type" maxlength="32" class="col-sm-12 T-chooseInsuranceType"/><input type="hidden" name="typeId" value="" /></td>' +
		'<td><input type="text" name="price" maxlength="6" class="col-sm-12 price"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><input type="text" name="payedMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +		
		'<td><input name="remark" type="text" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.addResource();
		tripPlan.calculatePrice($tab);
		validator = rule.update(validator);
		tripPlan.bindInsuranceChoose($tab);
	};

	//添加餐饮安排
	tripPlan.addRestaurant = function($this, validator, $tab){   
		var tableContainer = $this.closest(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer"></td>' +
		'<td><div class="col-sm-12"><input type="text" name="restaurantName" class="col-sm-12 T-chooseRestaurant"/><input type="hidden" name="restaurantId"><input type="hidden" name="optional" value="" /><span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><select name="type" class="col-sm-12 T-restauranType" style="width:80px;"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>' +
		'<td><input type="text" name="price" value="" class="col-sm-12 T-typeNameChoose"/><input type="hidden" name="restaurantStandardId" value="0"/></td>' +
		'<td><input name="memberCount" type="text" class="col-sm-12" style="width: 60px;" maxlength="4"/></td>' +
		'<td><input name="reduceMoney" type="text" class="col-sm-12 price" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input name="needPayMoney" readonly="readonly" type="text" class="col-sm-12" style="width: 60px;"/></td>' +
		'<td><input name="payedMoney" type="text" class="col-sm-12 price" style="width: 60px;" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input name="guidePayMoney" type="text" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input name="remark" type="text" class="col-sm-12"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="restaurant" title="删除">删除</a></td>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_restaurant");
		tripPlan.calculatePrice($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定  
		validator = rule.update(validator); 
		tripPlan.bindRestaurantChoose($tab);
	};
	// 添加酒店安排
	tripPlan.addHotel = function($this, validator, $tab){
		var tableContainer = $this.closest(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer"></td>' +
		'<td><select class="col-sm-12 no-padding T-tripPlanHotelStar" style="width: 80px;"><option selected="selected" {{if hotel.hotel.level == 0}}selected="selected"{{/if}} value="">--全部--</option>'+
		'<option value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>' +
		'<td><div class="col-sm-12"><input type="text" class="col-sm-12 T-chooseHotel" name="name" /><input type="hidden" name="hotelId"><span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" class="col-sm-12" readonly="readonly" name="managerName"/></td>' +
		'<td><input type="text" class="col-sm-12" readonly="readonly" name="mobileNumber"/></td>' +
		'<td><input type="text" class="col-sm-12 T-chooseHotelRoom" name="hotelRoom"/><input type="hidden" name="hotelRoomId"></td>' +
		'<td><input type="text" class="col-sm-12 price" name="fee" style="width: 60px;" maxlength="6"/></td>' +
		'<td><input type="text" class="col-sm-12" name="memberCount" style="width: 60px;" maxlength="6"/></td>' +
		'<td><input type="text" class="col-sm-12 price" name="reduceMoney" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" class="col-sm-12" name="needPayMoney" readonly="readonly" style="width: 60px;"/></td>' +
		'<td><input type="text" class="col-sm-12 price" name="payedMoney" style="width: 60px;" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input type="text" class="col-sm-12" name="guidePayMoney" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" class="col-sm-12" name="remark" maxlength="500"/></td>' +
		'<td><select name="hotelOrder"><option value="1">未预定</option><option value="2">预定中</option><option value="3">已预订</option><option value="0">无需预订</option></select></td>'+
		'<td><a class="cursor T-hotel-action T-hotel-askPrice">询价</a><a class="cursor T-hotel-action T-hotel-offerStatus"><i class="ace-icon fa fa-search"></i></a>'+
		'<a class="cursor T-hotel-action T-hotel-bookingStatus" style="color: #bbb">预订</a><a class="cursor T-hotel-action T-hotel-bookingView"><i class="ace-icon fa fa-search"></i></a><a class="cursor T-hotel-action T-btn-deleteTripPlanList" title="删除" data-entity-name="hotel">删除</a></td></tr>';

		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_hotel");
		tripPlan.calculatePrice($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定  
		validator = rule.update(validator); 
		tripPlan.bindHotelChoose($tab);
		tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
	};
	// 添加景区安排
	tripPlan.addScenic = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer"></td>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseScenic"/><input type="hidden" name="scenicId"/><span class="addResourceBtn T-addScenicResource R-right" data-right="1060002" title="添加景区"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="chargingProjects" class="col-sm-12 T-chooseScenicItem"/><input type="hidden" name="chargingId"/></td>' +
		'<td><select name="tourTime" class="col-sm-12 no-padding" style="width: 75px;"> <option value="全天">全天</option> <option value="上午">上午</option> <option value="下午">下午</option> </select> </td>' +
		'<td><input type="text" name="tourDuration" class="col-sm-12" value="" style="width: 60px;" maxlength="3"> </td>' +
		'<td><input type="text" name="orderNumber" class="col-sm-12" value="" maxlength="20"/></td>'+
		'<td><input type="text" name="fee" class="col-sm-12 price" style="width: 60px;" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12" style="width: 60px;" maxlength="8"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12" style="width: 60px;"/></td>' +
		'<td><input type="text" name="payedMoney" class="col-sm-12 price" style="width: 60px;" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input type="text" name="guidePayMoney" class="col-sm-12" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_scenic");
		tripPlan.calculatePrice($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindScenicChoose($tab);   
	};
	// 添加购物安排
	tripPlan.addShop = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer" value=""></td>'+
        '<td><div class="col-sm-12"><input type="hidden" name="id" value="" /><input type="text" name="name" class="col-sm-12 T-chooseShop" value="" /><input type="hidden" name="shopId" value="" /><span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
        '<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="" /></td>'+
        '<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="" /></td>'+
        '<td><input type="text" name="goodsPolicy" class="col-sm-12 T-chooseGoodsPolicy" value="" /><input type="hidden" name="shopPolicyId" value=""/></td>'+
        '<td><input type="text" name="remark" class="col-sm-12" value="" maxlength="500" /></td>'+
        '<td><a class="cursor T-btn-deleteTripPlanList" data-entiy-id="" data-entity-name="shop" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		tripPlan.setChooseDays("tripPlan_addPlan_shop");
		tripPlan.addResource();
		tripPlan.bindShopChoose($tab);
		validator = rule.update(validator);  
	};
	// 添加自费安排
	tripPlan.addSelfPay = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer"></td>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseSelfPay"/><input type="hidden" name="selfPayId" /><span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="hidden" name="selfitemId" value="" /><input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="" /></td>'+
		'<td><input type="text" readonly="readonly" name="managerName" class="col-sm-12"/></td>' +
		'<td><input type="text" readonly="readonly" name="mobileNumber" class="col-sm-12"/></td>' +
		'<td><input type="text" name="oldPrice" class="col-sm-12 price" maxlength="6"/></td>' +
		'<td><input type="text" name="price" class="col-sm-12 price" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="payedMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_selfPay");
		tripPlan.calculatePrice($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindSelfPayChoose($tab);
	};
	tripPlan.addTicket = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseTicket"/><input type="hidden" name="tickeId" /><span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><select name="type" class="col-sm-12 no-padding" style="width:70px;"> <option value="1" selected="selected">机票</option><option value="2">汽车票</option> <option value="3">火车票</option> <option value="4">轮船票</option> </select></td>' +
		'<td><input type="text" name="startingCity" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="arriveCity" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="shift" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="startTime" class="col-sm-13 col-xs-12 T-dateTimePicker"/></td>' +
		'<td><input type="text" name="seatLevel" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="fee" class="col-sm-12 price" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><input type="text" name="payedMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_ticket");
		tripPlan.calculatePrice($tab);
		tripPlan.dateTimePicker($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindTicketChoose($tab);    
	};
	tripPlan.addOther = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer"></td>' +
		'<td><input type="text" name="name" maxlength="32" class="col-sm-12 T-other-name"/></td>' +
		'<td><input type="text" name="managerName" maxlength="32" class="col-sm-12"/></td>' +
		'<td><input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"/></td>' +
		'<td><input type="text" name="fee" class="col-sm-12 price" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12" maxlength="8"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><input type="text" name="payedMoney" class="col-sm-12 price" maxlength="9"/></td>' +
		'<td><select name="payType" class="col-sm-12 no-padding" style="width:55px;"><option value="0">现付</option><option value="1">签单</option><option value="2">转账</option><option value="3">网付</option></select></td>' +
		'<td><input type="text" name="guidePayMoney" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" title="删除">删除</a></td></tr>';

		tableContainer.append(html);
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_other");
		tripPlan.calculatePrice($tab);
		// 更新表单验证的事件绑定
		validator = rule.update(validator);    
	};

	//第N天
	tripPlan.setChooseDays = function(id){
		var days = $(".tripPlanLineProductDays").text();
		if(parseInt(days) < 1)return;
		if(id){
			var tr = $("#"+id+" tbody tr");
			var selectText = '<select class="col-sm-12" name="whichDay">';
			for(var i = 0; i < parseInt(days); i++){
				selectText += '<option value="'+(i+1)+'">第'+(i+1)+'天</option>';
			}
			selectText += '</select>';
			tr.eq(tr.length-1).find(".T-whichDaysContainer").html(selectText);
		}else{
			$("td.T-whichDaysContainer").each(function(index){
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
	};

	/**
	 * 删除发团安排操作
	 * @param  {[type]} $id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.deleteTripPlan = function($this, $id, $name, $tab) {
		if($id){
			//默认等于0，说明数据来源于模板表，直接移除tr行，不做后台删除请求
			//等于1说明数据来源于安排表，发送删除请求
			var isArranged = $('#isArranged').val() == "1" ? true : false;
			
			if(isArranged) {
				showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
					$.ajax({
						url: KingServices.build_url("tripPlan","deleteTripPlanInfoByCategoryId"),
	                    type: "post",
	                    data:"cateName="+$name+"&cateId="+$id,
	                    success: function(data) {
							if(showDialog(data)){
								showMessageDialog($( "#confirm-dialog-message" ),data.message,function() {
									$this.closest('tr').remove();
									tripPlan.moneyTripPlan($tab);
									tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
								})
							}
	                    }
	                });
				})
			} else {
				$this.closest('tr').remove();
				tripPlan.moneyTripPlan($tab);
				tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
			}
		}else{
			$this.closest('tr').remove();
			tripPlan.moneyTripPlan($tab);
			tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
		}
	};

	tripPlan.checkParamIsDouble = function(val) {
		val = parseFloat(val);
		if(isNaN(val)) {
			val = 0.0;
		}
		return val;
	}

	/**
	 * 发团安排搜索区域autocomplete
	 * @param  {[obj]} chooseObj   [选择的input对象]
	 * @param  {[array]} jsonList    [数据列表]
	 * @param  {[string]} valueName   [数据中需要展示的对象属性]
	 * @param  {[string]} inputIdName [隐藏的input Id 的name值]
	 * @return {[type]}             [description]
	 */
	tripPlan.autocompleteSearch = function(chooseObj,jsonList,valueName,inputIdName) {
		chooseObj.autocomplete({
			minLength: 0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('div');
					parents.find("input[name="+inputIdName+"]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('div');
				parents.find("input[name="+inputIdName+"]").val(ui.item.id);
			}
		}).on('click', function() {
			var $this = $(this),
				completeList = jsonList;
			if (completeList && completeList.length > 0) {
				for(var i = 0, len = completeList.length; i < len; i++) {
					completeList[i].value = completeList[i][valueName];
				}
				$this.autocomplete('option','source', completeList);
				$this.autocomplete('search', '');
			}else{
				layer.tips('无数据', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		});
	};

	/**
	 * 发团安排编辑页面所有的autocomplete
	 * @param  {[type]} $tab [容器]
	 * @return {[type]}      [description]
	 */
	tripPlan.bindAutocomplete = function($tab) {
		tripPlan.bindInsuranceChoose($tab);
		tripPlan.bindRestaurantChoose($tab);
		tripPlan.bindHotelChoose($tab);
		tripPlan.bindScenicChoose($tab);
		tripPlan.bindShopChoose($tab);
		tripPlan.bindSelfPayChoose($tab);
		tripPlan.bindTicketChoose($tab);
	}

	//保险autocomplete
	tripPlan.bindInsuranceChoose = function($tab) {
		var insurance = $tab.find(".T-chooseInsurance");
		insurance.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find('[name=insuranceId]').val('');
					$parents.find('[name=type]').val('');
					$parents.find('[name=typeId]').val('');
					$parents.find('[name=price]').val('');
				}
			},
			select: function(event,ui){
				$(this).blur();
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find('[name=insuranceId]').val(ui.item.id);
				$parents.find('[name=type]').val('');
				$parents.find('[name=typeId]').val('');
				$parents.find('[name=price]').val('');
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('insurance','findAll'),
				type: 'POST',
                showLoading: false,
                success: function(data) {
					if(showDialog(data)){
						var insuranceList = JSON.parse(data.insuranceList);
						if(insuranceList != null && insuranceList.length > 0){
							for(var i=0;i<insuranceList.length;i++){
								insuranceList[i].value = insuranceList[i].name;
							}
						}
						$this.autocomplete('option','source', insuranceList);
						$this.autocomplete('search', '');
					}
                }
            });
		});

		var $item = $tab.find(".T-chooseInsuranceType");
		$item.autocomplete({
			minLength: 0,
			change: function(event, ui) {
					if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val('')
					$parents.find('[name=typeId]').val('');
					$parents.find('[name=price]').val('');
				}
			},
			select: function(event, ui) {
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find('[name=typeId]').val(ui.item.id).trigger('click');
				$parents.find('[name=price]').val(ui.item.price);
			}
		}).off('click').on('click', function() {
			var $this = $(this), $parents =$this.closest('tr'),
				$id = $parents.find('[name=insuranceId]').val();
			if (!!$id) {
				$.ajax({
					url: KingServices.build_url('insurance','selectInsuranceItem'),
					type: 'POST',
					showLoading:false,
					data: {id: $id},
					success: function(data) {
						if (showDialog(data)) {
							var $list = JSON.parse(data.insuranceItem);
							if ($list != null && $list.length > 0) {
								for (var i = 0; i < $list.length; i++) {
									$list[i].value = $list[i].name;
								}
							}else{
								layer.tips('没有内容', $this, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
							$this.autocomplete('option','source', $list);
							$this.autocomplete('search', '');
						}
					}
				})
			}else{
				layer.tips('请选择保险公司', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	}
	
	//餐厅autocomplete
	tripPlan.bindRestaurantChoose = function($tab){
		var restauranTyp = $tab.find(".T-restauranType");
		restauranTyp.off("change").on("change", function(){
			var parents = $(this).closest('tr');
			parents.find("input[name=price]").val("");
		});
		var restaurantChoose = $tab.find(".T-chooseRestaurant");
		restaurantChoose.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=restaurantId]").val("");
					$parents.find("input[name=managerName]").val("");
					$parents.find("input[name=mobileNumber]").val("");
					$parents.find("input[name=price]").val("");
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				if (ui.item.id == -1) {
					tripPlan.addOptional($this);
					$parents.find("input[name=restaurantId]").val(ui.item.id).trigger('change');
					$parents.find("input[name=mobileNumber]").val(ui.item.mobileNumber);
					$parents.find("input[name=managerName]").val(ui.item.managerName);
					$parents.find("input[name=price]").val("");
				}else{
					if($this.data('bs.popover')){
						$this.data('bs.popover').options.content = "";
					}
					$this.data("propover" , "");
					$parents.find("input[name=restaurantId]").val(ui.item.id).trigger('change');
					
					$.ajax({
						url: KingServices.build_url('restaurant','findRestaurantById'),
						type: 'POST',
	                    showLoading: false,
	                    data: "id="+ui.item.id,
	                    success: function(data){
							if(showDialog(data)){
								var restaurant = JSON.parse(data.restaurant);
								$parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
								$parents.find("input[name=managerName]").val(restaurant.managerName);
								$parents.find("input[name=price]").val("");
								$parents.find("input[name=optional]").val("");
							}
	                    }
					});
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('restaurant','findAll'),
				type: 'POST',
                showLoading:false,
                success: function(data) {
					if(showDialog(data)){
						var restaurantList = JSON.parse(data.restaurantList),
							optional = {
								id : -1 , 
								name : "-导游任选-",
								mobileNumber : "-",managerName : "-"
							};
						restaurantList.unshift(optional);
						if(restaurantList && restaurantList.length > 0){
							for(var i=0; i < restaurantList.length; i++){
								restaurantList[i].value = restaurantList[i].name;
							}
						}
						$this.autocomplete('option','source', restaurantList);
						$this.autocomplete('search', '');
					}
                }
            });
		});

		var chooseTypeName =  $tab.find(".T-typeNameChoose");
		chooseTypeName.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if(ui.item == null){
					var $parents = $(this).closest('tr');
					$parents.find("input[name=restaurantStandardId]").val('0');
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=fee]").val(ui.item.price);
			}
		}).off("click").on("click", function(){
			var $this = $(this), parents = $this.closest('tr');
			var id = parents.find("input[name=restaurantId]").val();
			var type = parents.find('select[name=type]').val();
			$.ajax({
				url: KingServices.build_url('restaurant','getRestaurantStandardByType'),
                showLoading:false,
                data: {
                	restaurantId: id,
                	type: type
                },
                success: function(data) {
					if(showDialog(data)){
						var restaurantStandardList = data.restaurantStandardList;
						if(restaurantStandardList && restaurantStandardList.length > 0){
							for(var i=0; i < restaurantStandardList.length; i++){
								restaurantStandardList[i].value = restaurantStandardList[i].price;
							}
							$this.autocomplete('option','source', restaurantStandardList);
							$this.autocomplete('search', '');
						} else {
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
	}

	//酒店autocomplete
	tripPlan.bindHotelChoose = function($tab){
		var hotelChoose = $tab.find(".T-chooseHotel"),
			$hotelStar = $tab.find(".T-tripPlanHotelStar");
		$hotelStar.off().on("change", function(){
			var $this = $(this), $parents = $this.closest('tr');
			$parents.find("input[name=name]").val("");
			$parents.find("input[name=hotelId]").val("");
			$parents.find("input[name=hotelRoom]").val("");
			$parents.find("input[name=hotelRoomId]").val("");
			$parents.find("input[name=mobileNumber]").val("");
			$parents.find("input[name=managerName]").val("");
        	$parents.find("input[name=fee]").val("");
		});
		
		hotelChoose.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest("tr");
					$this.val("");
					$parents.find("input[name=hotelId]").val("");
					$parents.find("input[name=hotelRoom]").val("");
					$parents.find("input[name=hotelRoomId]").val("");
					$parents.find("input[name=mobileNumber]").val("");
					$parents.find("input[name=managerName]").val("");
                	$parents.find("input[name=fee]").val("");
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('hotel','getHotelById'),
					type: 'POST',
                    showLoading: false,
                    data: "id=" + ui.item.id,
                    success: function(data) {
						if(showDialog(data)){
							var hotel = JSON.parse(data.hotel);
							$parents.find("input[name=mobileNumber]").val(hotel.mobileNumber);
							$parents.find("input[name=managerName]").val(hotel.managerName);
							$parents.find(".T-tripPlanHotelStar").val(hotel.level);
							$parents.find("input[name=hotelRoom]").val("");
							$parents.find("input[name=hotelRoomId]").val("");
	                    	$parents.find("input[name=fee]").val("");
						}
                    }
				});
			}
		}).off("click").on("click", function(){
			var $this = $(this),
				hotelStarValue = $(this).closest('tr').find('.T-tripPlanHotelStar').val();
			$.ajax({
				url: KingServices.build_url('hotel','findHotelListByLevel'),
                showLoading:false,
                data:"level=" + hotelStarValue,
                success: function(data) {
					if(showDialog(data)){
						var hotelList = JSON.parse(data.hotelList);
						if(hotelList && hotelList.length > 0){
							for(var i=0; i < hotelList.length; i++){
								hotelList[i].value = hotelList[i].name;
							}
							$this.autocomplete('option','source', hotelList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});

		var chooseHotelRoom = $tab.find(".T-chooseHotelRoom");
		chooseHotelRoom.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=hotelRoomId]").val("");
                	$parents.find("input[name=fee]").val("");
				}
			},
			select:function(event,ui){
				var $this = $(this), $parents = $this.closest('tr'),
					whichDay = $parents.find("select[name=whichDay]").val(),
					enterTime = $tab.find("[name=startTime_Choose]").text();
				$parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('hotel','getHotelRoomPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                    	id: ui.item.id,
                    	whichDay: whichDay,
                    	enterTime: enterTime
                    },
                    success: function(data) {
						if(showDialog(data)){
	                    	$parents.find("input[name=fee]").val(data.price).trigger('change');
						}
                    }
                });
			}
		}).off("click").on("click", function(){
			var $this = $(this),$parents = $this.closest('tr'),
				id = $parents.find("input[name=hotelId]").val();
			$.ajax({
				url: KingServices.build_url('hotel','findTypeByHotelId'),
                showLoading: false,
                data: "id=" + id,
                success: function(data) {
					if(showDialog(data)) {
						var hotelRommList = JSON.parse(data.hotelRommList);
						if(hotelRommList && hotelRommList.length > 0){
							for(var i=0; i < hotelRommList.length; i++){
								hotelRommList[i].value = hotelRommList[i].type;
							}
							$this.autocomplete('option','source', hotelRommList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
	}

	//景区autocomplete
	tripPlan.bindScenicChoose = function($tab){
		var scenicChoose = $tab.find(".T-chooseScenic");
		scenicChoose.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=scenicId]").val("");
					$parents.find("input[name=chargingProjects]").val("");
					$parents.find("input[name=chargingId]").val("");
					$parents.find("input[name=fee]").val("");
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=scenicId]").val(ui.item.id).trigger('change');
				$parents.find("input[name=chargingProjects]").val("");
				$parents.find("input[name=chargingId]").val("");
				$parents.find("input[name=fee]").val("");
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('scenic','findAll'),
                type: 'POST',
                showLoading: false,
                success: function(data) {
					if(showDialog(data)){
						var scenicList = JSON.parse(data.scenicList);
						if(scenicList && scenicList.length > 0){
							for(var i=0; i < scenicList.length; i++){
								scenicList[i].value = scenicList[i].name;
							}
							$this.autocomplete('option','source', scenicList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
		
		var chooseChargingProject = $tab.find('.T-chooseScenicItem');
		chooseChargingProject.autocomplete({
			minLength: 0,
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr'),
					startTime = $tab.find("[name=startTime_Choose]").text(),
					whichDay = $parents.find("select[name=whichDay]").val();
				$parents.find("input[name=chargingId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('scenic','getScenicItemPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                    	id: ui.item.id,
                    	whichDay: whichDay,
                    	startTime: startTime
                    },
                    success: function(data) {
						if(showDialog(data)) {
							$parents.find("input[name=fee]").val(data.price);
						}
                    }
                });
			},
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=chargingId]").val("");
					$parents.find("input[name=fee]").val("");
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this), $parents = $this.closest('tr'),
				id = $parents.find("input[name=scenicId]").val();
			$.ajax({
				url: KingServices.build_url('scenic','findItemByScenicId'),
                type: 'POST',
                showLoading:false,
                data: "id="+id,
                success: function(data) {
					if(showDialog(data)) {
						var scenicItemList = JSON.parse(data.scenicItemList);
						if(scenicItemList && scenicItemList.length > 0){
							for(var i=0; i < scenicItemList.length; i++){
								scenicItemList[i].value = scenicItemList[i].name;
							}
							$this.autocomplete('option','source', scenicItemList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
	};

	// 购物autocomplete
	tripPlan.bindShopChoose = function($tab){
		var shopChoose = $tab.find(".T-chooseShop");
		shopChoose.autocomplete({
			minLength: 0,
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=shopId]").val(ui.item.id).trigger('change');
				$parents.find("input[name=goodsPolicy]").val("");
				$parents.find("input[name=shopPolicyId]").val("");
				$parents.find("input[name=travelAgencyRate]").val("");
				$parents.find("input[name=guideRate]").val("");
				
				$.ajax({
					url: KingServices.build_url('shop','getShopById'),
                    type: 'POST',
                    showLoading:false,
                    data: "id="+ui.item.id,
                    success: function(data) {
						if(showDialog(data)){
							var shop = JSON.parse(data.shop);
							$parents.find("input[name=mobileNumber]").val(shop.mobileNumber);
							$parents.find("input[name=managerName]").val(shop.managerName);
						}
                    }
                });
				
			},
			change:function(event, ui){
				if(ui.item == null){
					var $this =$(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=shopId]").val("");
					$parents.find("input[name=managerName]").val("");
					$parents.find("input[name=mobileNumber]").val("");
					$parents.find("input[name=goodsPolicy]").val("");
					$parents.find("input[name=shopPolicyId]").val("");
					$parents.find("input[name=travelAgencyRate]").val("");
					$parents.find("input[name=guideRate]").val("");
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('shop','findAll'),
                type: 'POST',
                showLoading:false,
                success: function(data) {
					if(showDialog(data)){
						var scenicList = JSON.parse(data.scenicList);
						if(scenicList && scenicList.length > 0){
							for(var i=0; i < scenicList.length; i++){
								scenicList[i].value = scenicList[i].name;
							}
							$this.autocomplete('option','source', scenicList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
		
		var chooseGoodsPolicy = $tab.find('.T-chooseGoodsPolicy');
		chooseGoodsPolicy.autocomplete({
			minLength: 0,
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=shopPolicyId]").val(ui.item.id).trigger('change');
			},
			change: function(event,nameUi){
				if(nameUi.item == null){ 
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=shopPolicyId]").val("");
					$parents.find("input[name=guideRate]").val("");
					$parents.find("input[name=travelAgencyRate]").val("");
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this), $parents = $this.closest('tr'),
				id = $parents.find("input[name=shopId]").val();
			$.ajax({
				url: KingServices.build_url('shop','findPolicyByShopId'),
                type: 'POST',
                showLoading:false,
                data: "id="+id,
                success: function(data) {
					if(showDialog(data)){
						var shopPolicyList = JSON.parse(data.shopPolicyList);
						if(shopPolicyList && shopPolicyList.length > 0){
							for(var i=0; i < shopPolicyList.length; i++){
								shopPolicyList[i].value = shopPolicyList[i].name;
							}
							$this.autocomplete('option','source', shopPolicyList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
	};

	// 自费autocomplete
	tripPlan.bindSelfPayChoose = function($tab){
		var selfPayChoose = $tab.find(".T-chooseSelfPay");
		selfPayChoose.autocomplete({
			minLength:0,
			change:function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=selfPayId]").val("");
					$parents.find("input[name=managerName]").val("");
					$parents.find("input[name=mobileNumber]").val("");
					$parents.find("input[name=fee]").val("");
					$parents.find("input[name=selfitemId]").val("");
					$parents.find("input[name=selfitem]").val("");
				}
			},
			select:function(event, ui){
				var $this = $(this), $parents = $this.closest('tr');
				$.ajax({
					url: KingServices.build_url('selfpay','findSelfPayItemBySelfPayId'),
                    type: 'POST',
                    showLoading:false,
                    data: "id="+ui.item.id,
                    success: function(data) {
						if(showDialog(data)){
							var selfPay = JSON.parse(data.selfPay) || {};
							$parents.find("input[name=selfPayId]").val(ui.item.id).trigger('change');
							$parents.find("input[name=managerName]").val(selfPay.managerName);
							$parents.find("input[name=mobileNumber]").val(selfPay.mobileNumber);
							$parents.find("input[name=selfitemId]").val("");
							$parents.find("input[name=selfitem]").val("");
						}
                    }
                });
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('selfpay','findAll'),
				type: 'POST',
				showLoading: false,
				success:function(data){
					if(showDialog(data)){
						var selfPayList = JSON.parse(data.selfPayList);
						if(selfPayList && selfPayList.length > 0){
							for(var i=0; i < selfPayList.length; i++){
								selfPayList[i].value = selfPayList[i].name;
							}
							$this.autocomplete('option','source', selfPayList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
		var chooseSelfitem = $tab.find(".T-chooseSelfitem");
		chooseSelfitem.autocomplete({
			minLength: 0,
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=selfitemId]").val("");
				}
			},
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr'),
					startTime = $tab.find("[name=startTime_Choose]").text(),
					whichDay = $parents.find("select[name=whichDay]").val();
				$parents.find("input[name=selfitemId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('selfpay','getSelfPayItemPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                    	id: ui.item.id,
                    	whichDay: whichDay,
                    	startTime: startTime
                    },
                    success: function(data) {
						if(showDialog(data)){
							$parents.find("input[name=oldPrice]").val(data.marketPrice);
							$parents.find("input[name=price]").val(data.price);
						}
                    }
				})
			}
		}).off("click").on("click",function(){
			var $this = $(this), $parents = $this.closest('tr'),
				$id = $parents.find("input[name=selfPayId]").val();
			if(!!$id){
				$.ajax({
					url: KingServices.build_url('selfpay','findSelfPayItemBySelfPayId'),
                    type: 'POST',
                    showLoading: false,
                    data: "id="+$id,
                    success: function(data) {
						if(showDialog(data)){
							var selfPayItemList = JSON.parse(data.selfPayItemList) || {};
							for(var i=0; i < selfPayItemList.length; i++){
								selfPayItemList[i].value = selfPayItemList[i].name;
							}
							$this.autocomplete('option','source', selfPayItemList);
							$this.autocomplete('search', '');
						}
                    }
				})
			}else{
				layer.tips('请选择自费商家',$this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};

	// 票务autocomplete
	tripPlan.bindTicketChoose = function($tab){
		var ticketChoose = $tab.find(".T-chooseTicket");
		ticketChoose.autocomplete({
			minLength: 0,
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=tickeId]").val(ui.item.id);
			},
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=tickeId]").val("").trigger('change');
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('ticket','findAll'),
				type: 'POST',
				showLoading:false,
				success:function(data){
					if(showDialog(data)) {
						var ticketList = JSON.parse(data.ticketList);
						if(ticketList && ticketList.length > 0){
							for(var i=0; i < ticketList.length; i++){
								ticketList[i].value = ticketList[i].name;
							}
							$this.autocomplete('option','source', ticketList);
							$this.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $this, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	}

	/**
	 * 餐厅自选 添加修改
	 * @param {[type]} $objInput [选择自选餐厅对象]
	 */
	tripPlan.addOptional = function($objInput) {
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
                		var json = {
                			id: $inputJson[i].id,
                			restaurantId: $inputJson[i].restaurantId,
                			name: $inputJson[i].name,
                			managerName: $inputJson[i].managerName,
                			mobileNumber: $inputJson[i].mobileNumber
                		}
						optionalArray.push(json)
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
			        	url: KingServices.build_url('restaurant','getRestaurantListByChooseMode'),
			        	type: "POST",
			        	data: "pageNo="+page,
			        	success: function(data){
			        		if (showDialog(data)) {
			        			data.restaurantList = JSON.parse(data.restaurantList);
								var html = optionalListTemplate(data);
								$list.html(html);
								$(window).trigger("resize");

								//翻页自动勾选已选餐厅
								var $tr = $list.find('tr');
								if (!!optionalArray.length) {
									for (var i = 0, len = optionalArray.length; i < len; i++) {
										$tr.each(function(j) {
											var $id = $tr.eq(j).data('entity-id');
											if (optionalArray[i].restaurantId == $id) {
												$tr.eq(j).find('.T-add').prop('checked',true);
											}
										});
									}
								}

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

								//添加/删除自选
								$container.find(".T-add").off('click').on('click', addOptional);
			        		}
			        	}
			        })
	        	}
	        	//添加自选函数
	        	function addOptional(){
	        		var $this = $(this),$parent = $this.closest('tr'),
						$restaurantId = $parent.data("entity-id"),
						$name = $parent.data("entity-name"),
						$managerName = $parent.data("entity-managername"),
						$mobileNumber = $parent.data("entity-mobilenumber");
						if (optionalArray.length == 0) {
							var json = {
								restaurantId:  $restaurantId,
								name: $name,
								managerName: $managerName,
								mobileNumber: $mobileNumber
							}
							optionalArray.push(json);
						}else{
							for (var i = 0,$length = optionalArray.length; i < $length; i++) {
			        			if (optionalArray[i].restaurantId == $restaurantId) {
        							if (!!optionalArray[i].id) {
        								$.ajax({
        									url: KingServices.build_url("restaurant","deleteChooseRestaurant"),
        									type: 'POST',
        									data: "id="+optionalArray[i].id,
        									showLoading: false,
        									success: function(){
						        				optionalArray.splice(i,1);
			        							$this.prop("checked",false);
        										saveOptional(1);
        									}
        								})
        							}else{
				        				optionalArray.splice(i,1);
        							}
        							return;
			        			}
			        		}
			        		if(optionalArray.length >= 5){
								showMessageDialog($("#confirm-dialog-message"),"最多只能添加5个自选餐厅");
		        				$this.prop("checked",false);
			        		}else{
								var json = {
									restaurantId:  $restaurantId,
									name: $name,
									managerName: $managerName,
									mobileNumber: $mobileNumber
								}
								optionalArray.push(json);
							}
		        		}
	        	};
	        	//保存函数
	        	function saveOptional(type){
	        		var optionalJson = optionalArray;
	        		optionalJson = JSON.stringify(optionalJson);
	        		$objInput.data("propover" , optionalJson);
	        		if (type == 1) {}else{
	        			layer.close(addOptionalLayer);
	        		}
					tripPlan.viewOptionalRestaurant($objInput);
	        	};
            }
    	});
	};
	/**
	 * 浮动查看自选餐厅
	 * @param  {[type]} $objInput [对象]
	 * @return {[type]}           [description]
	 */
	tripPlan.viewOptionalRestaurant = function($objInput){
		$objInput.each(function(){
			var $this = $(this),$parents = $this.closest('tr'),$title = [],$value = $this.data("propover");
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
	}

	//计算 应付 导付
	tripPlan.calculatePrice = function($tab){
		$tab.find("input[name=guidePayMoney]").off("blur").on("blur", function() {
			tripPlan.moneyTripPlan($tab);
		});
		var table = $tab.find(".table-tripPlan-container tbody tr"), price = 0, num = 0, reduceMoney = 0;
		table.each(function(){
			var $this = $(this), $parents = $this.closest('tr');
			$this.find("input[name=price], input[name=payedMoney], input[name=reduceMoney], input[name=fee], input[name=memberCount], input[name=needRoomCount]").on("change", function(){
				tripPlan.plusPrice($(this), $tab);
			});
			$this.find("select[name=payType]").on("change", function(){
				if($(this).val()!=0){
					$parents.find("input[name=guidePayMoney]").val("");
				}else{
					tripPlan.plusPrice($(this), $tab);
				}
			});

			//加载时自动计算
			tripPlan.plusPrice($this.find('input[name=fee], input[name=memberCount], input[name=reduceMoney], input[name=payedMoney]'), $tab ,true);
		});
	},
	tripPlan.plusPrice = function($this, $tab , isCalc){
		var $parents = $this.closest('tr');
		var payType = $parents.find("select[name=payType]").val(),
			payedMoney = $parents.find("input[name=payedMoney]").val(),
			payedMoney = isNaN(payedMoney) ? 0 : payedMoney;
		price = parseFloat($parents.find("input[name=price], input[name=fee]").val());
		price = isNaN(price) ? 0 : price;
		num = parseFloat($parents.find("input[name=memberCount], input[name=memberCount], input[name=needRoomCount]").val());
		num = isNaN(num) ? 0 : num;
		reduceMoney = parseFloat($parents.find("input[name=reduceMoney]").val());
		reduceMoney = isNaN(reduceMoney) ? 0 : reduceMoney;

		$parents.find("input[name=needPayMoney]").val(price * num - reduceMoney);
		
		if(payType == 0){
			if (!!isCalc == false) {
				$parents.find("input[name=guidePayMoney]").val((price * num - reduceMoney)-payedMoney);
			}
		}
		tripPlan.moneyTripPlan($tab);
	};
	tripPlan.moneyTripPlan = function($tab) {
		var guideAllPayMoney = 0.0;	//总导付
		var guideAllNowMoney = 0.0;	//现收款
		
		var inputs = $('#tripPlan_tab_content').find("input[name=guidePayMoney]");
		for(var i=0; i < inputs.length; i ++) {
			var val = $(inputs[i]).val();
			guideAllPayMoney += tripPlan.checkParamIsDouble(val);
			
		}
		$tab.find("input[name=guideAllPayMoney]").prev().find("strong").html(guideAllPayMoney);
		$tab.find("input[name=guideAllPayMoney]").val(guideAllPayMoney);
	};

	/**
	 * 提交事件
	 */
	tripPlan.submitTripPlan = function($tab,isClose,$id,tab_id,title,html) {
		//记录统计数据  
		var guideAllPayMoney = 0.0;
		var guideAllNowMoney = 0.0;
		var guideAllPreMoney = 0.0;
		var argumentsLen = arguments.lengh;
		
		tripPlan.moneyTripPlan($tab);
		
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
						typeId: tripPlan.getVal(insur.eq(i), "typeId"),
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
						orderStatus: tripPlan.getVal(bus.eq(i), "busOrder")
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
						orderStatus: tripPlan.getVal(hotel.eq(i), "hotelOrder")
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
		var $addTripTab = $('#tripPlan_addPlan_tripPlan');
		var tmp = {
			id : $addTripTab.find('input[name=tripPlanId]').val(),
			guideAllPayMoney : $addTripTab.find('input[name=guideAllPayMoney]').val(),
			guideAllNowMoney : $addTripTab.find('input[name=guideAllNowMoney]').val(),
			remark : tripPlan.getVal($addTripTab, "remark"),
			guideAllPreMoney : $addTripTab.find('input[name=guideAllPreMoney]').val()
		}
		tmp.guideAllPayMoney = guideAllPayMoney;
		
		tripPlanJson.tripPlan = tmp;
		
		
		var json = JSON.stringify(tripPlanJson);
		var tripPlanId = $(this).attr('data-entiy-id');
		$.ajax({
			url: KingServices.build_url('tripPlan','updateArrangeTriplan'),
			type: "POST",
			data: {
				arrangeTripPlanInfo: json
			},
			success: function(data){
				if(showDialog(data)){
					tripPlan.listTripPlan(0);
					showMessageDialog($("#confirm-dialog-message"),data.message, function(){
						if (isClose == 1) {
							if (argumentsLen == 3) {
								Tools.closeTab(menuKey + "-update");
							}else{
								$tab.data('isEdited',false);
								Tools.addTab(tab_id, title, html)
								tripPlan.updateTripPlanArrange($tab.find('[name=tripPlanId]').val());
							}
						}else{
							Tools.closeTab(menuKey + "-update");
						}
					});
				}
			}
		});
	};

	/**
	 * 时间控件
	 * @param  {[type]} obj [input对象]
	 * @return {[type]}     [description]
	 */
	tripPlan.datepicker = function(obj){
		obj.find(".T-datePicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	tripPlan.dateTimePicker = function(obj){
		obj.find(".T-dateTimePicker").datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	};

	/**
	 * 取值
	 */
	tripPlan.getVal = function(obj, name){
		return obj.find("[name="+name+"]").val();
	}

	exports.init = tripPlan.initModule;
});