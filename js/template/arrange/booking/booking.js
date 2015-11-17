/**
 * 发团管理——项目代订模块
 *
 * 添加、编辑、查看项目代订信息
 * 显示项目代订列表
 */
define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_booking",
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		listTemplate = require("./view/list"),
		addPartnerManagerTemplate = require("./view/addPartnerManager"),
		tabId = "tab-"+menuKey+"-content";
	/**
	 * 定义项目代订对象
	 * @type {Object}
	 */
	var BookingArrange = {
		$searchArea : false,
		searchData : false,
		$tab : false,
		autocompleteDate : {},
		edited : {}
	}

	// 临时存放数据
	BookingArrange.tmpData = {};

	/**
	 * AJAX请求函数
	 * @param  {object}    data      请求参数
	 * @param  {Function}  callback  请求成功
	 */
	BookingArrange.ajax = function (data, callback) {
		callback = callback || function(){};
		var url = KingServices.build_url(data.url, data.method);
		delete data.url;
		delete data.method;
		$.ajax({
				url: url,
				type:"POST",
				data: data || "",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						callback(data);
					}
				}
			});
	};

	/**
	 * 页面初始化方法
	 */
	BookingArrange.initModule = function () {
		BookingArrange.listBooking(0);
	};
	/**
	 * 项目代订列表
	 * @param  {int}     page             页码
	 * @param  {string}  orderNumber      代订单号
	 * @param  {string}  partnerAgency    客户
	 * @param  {string}  operateUser      操作人
	 * @param  {string}  startTime        开始操作时间
	 * @param  {string}  endTime          结束操作时间
	 */
	BookingArrange.listBooking = function(page, orderNumber, partnerAgency, operateUser, startTime, endTime){
		if(BookingArrange.$searchArea && arguments.length === 1){
			orderNumber = BookingArrange.$searchArea.find("input[name=orderNumber]").val(),
			partnerAgency = BookingArrange.$searchArea.find("input[name=partnerAgency]").val(),
			operateUser = BookingArrange.$searchArea.find("input[name=operateUser]").val(),
			startTime = BookingArrange.$searchArea.find("input[name=startTime]").val(),
			endTime = BookingArrange.$searchArea.find("input[name=endTime]").val();
		}
		// 修正页码
		page = page || 0;
		var data = {
				url : 'bookingOrder',
				method : 'listBookingOrder',
				'menuKey' : menuKey,
				operation : 'view',
				pageNo : page,
				orderNumber : orderNumber || '',
				partnerAgencyId: partnerAgency || '',
				operateUser : operateUser || '',
				startTime : startTime || '',
				endTime : endTime || ''
			};

		BookingArrange.ajax(data, listBookingInfo);
		function listBookingInfo (data) {
			BookingArrange.searchData =  {
				pageNo: page
			};
			data.bookingOrderList = JSON.parse(data.bookingOrderList);
			var html = listTemplate(data);
			Tools.addTab(menuKey,"项目代订",html);

			// 初始化jQuery 对象
			BookingArrange.$tab = $('#' + tabId);
			BookingArrange.$searchArea = BookingArrange.$tab.find('.search-area');
			BookingArrange.init_event();
			// 绑定翻页组件
			laypage({
				cont: BookingArrange.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				pages: data.totalPage, //总页数
				curr: (page + 1),
				jump: function(obj, first) {
					if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    BookingArrange.listBooking(obj.curr -1);
					}
				}
			});
		}
	};

	/**
	 * 绑定页内事件
	 */
	BookingArrange.init_event = function(){
		
		//时间时间
		BookingArrange.datepicker(BookingArrange.$searchArea);
		
		//搜索按钮事件
		BookingArrange.$searchArea.find('.T-booking-search').on("click", function (event) {
			event.preventDefault();
			BookingArrange.listBooking(0);
		});

		BookingArrange.getQueryTerms();
		//搜索订单代号模糊查询
		BookingArrange.choose(BookingArrange.$searchArea.find('.T-orderNumberChoose'), function(obj){
			var orderNumberList = BookingArrange.autocompleteDate.orderNumberList;

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
		});
		//搜索客户模糊查询
		BookingArrange.choose(BookingArrange.$searchArea.find('.T-partnerAgencyChoose'), function(obj){
			var partnerAgencyList = BookingArrange.autocompleteDate.partnerAgencyList;
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
		});
		//搜索操作人查询
		BookingArrange.choose(BookingArrange.$searchArea.find('.T-operateUserChoose'),function(obj){
			var operationUserList = BookingArrange.autocompleteDate.operationUserList;
			console.log(operationUserList);
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
		});
		//新增项目代订事件
		BookingArrange.$searchArea.find('.T-Booking-add').on('click', BookingArrange.addBooking);
		//查看项目代订
		BookingArrange.$tab.find('.T-list').on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('entity-id');
			if($that.hasClass('T-view')){
				BookingArrange.viewBooking(id);
			}else if($that.hasClass('T-edit')){
				BookingArrange.update(id);
			}else if($that.hasClass('T-cancel')){
				BookingArrange.deleteBooking(id);
			}
		});
	};

	/**
	 * 绑定日期事件 包含  年月日
	 * @param  {object}  $container  容器。只jquery对象;
	 */
	BookingArrange.datepicker = function($container){
		$container.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};

	/**
	 * 绑定事件事件  包含  年月日 时分秒
	 * @param  {[type]} $container [description]
	 * @return {[type]}            [description]
	 */
	BookingArrange.datetimepicker = function($container){
		$container.find('.datetimepicker').datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	}

	/**
	 * 获取代订单号、客户、操作人数据
 	 */
	BookingArrange.getQueryTerms= function(){
		BookingArrange.ajax({'url': 'bookingOrder', 'method' : 'getQueryTerms','operation' : 'view'}, function(data){
			BookingArrange.autocompleteDate = {
				orderNumberList : data.orderNumberList,
				partnerAgencyList : data.partnerAgencyList,
				operationUserList : data.operationUserList
			}
		});
	};

	/**
	 * 绑定选择事件
	 * @param  {object}    $chooseContainer   容器。只jquery对象;
	 * @param  {function}  clickFn            点击事件返回函数
	 * @param  {function}  selectFn           选择事件返回函数
	 * @param  {function}  changeFn           值改变事件返回函数
	 */
	BookingArrange.choose = function($chooseContainer, clickFn, selectFn, changeFn){
		$chooseContainer.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					$(this).val('');
					if(typeof changeFn == 'function'){
						changeFn(this, ui);
					}
				}
			},
			select :function(event, ui){
				$(this).blur();
				if(typeof selectFn == 'function'){
					selectFn(this, ui);
				}
			}
		}).unbind("click").click(function(){
			if(typeof clickFn == 'function'){
				clickFn(this);
			}
		})
	};

	/**
	 * 添加项目代订
	 */
	BookingArrange.addBooking = function(){
		if (Tools.addTab(menuKey + '-add', '新增项目代订', addTemplate())) {
			BookingArrange.CU_event($('#tab-' + menuKey + '-add-content'));
		}
	};

	/**
	 * 绑定事件：添加、修改界面
	 * @param {object} $tab 界面的父元素
	 */
	BookingArrange.CU_event = function($tab){
		//表单代订信息验证
		var validator = rule.checkAddBooking($tab);
		//酒店代订验证
		var validatorHotel=rule.checkBookingHotel($tab.find(".T-bookingHotelList")); 
		//景区贷订
		var validatorScenic=rule.checkBookingScenic($tab.find(".T-bookingScenicList"));   
		//票务验证
		var validatorTicket= rule.checkBookingTicket($tab.find(".T-bookingTicketList"));
		//车队旅游贷订
		var validatorBus=rule.checkBookingBus($tab.find(".T-bookingBusList")); 

		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change', function(event){
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			BookingArrange.save($tab, validator, [tab_id, title, html]);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event){
			event.preventDefault();
			BookingArrange.CU_event($tab);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			BookingArrange.save($tab, validator);
		});

		//新增list事件
		$tab.on('click', '.T-action', function(event){
			var $that = $(this);
			if($that.hasClass('T-hotel-add')){
				BookingArrange.addHotelList($that);
			}else if($that.hasClass('T-scenic-add')){
				BookingArrange.addScenicList($that);
			}else if($that.hasClass('T-ticket-add')){
				BookingArrange.addTicketList($that);
			}else if($that.hasClass('T-bus-add')){
				BookingArrange.addBusList($that);
			}
		});
    	//同行客户联系人下拉
    	BookingArrange.getPartnerAgencyManagerList($tab);
    	//同行客户下拉
    	BookingArrange.partnerAgencyChooseList($tab);
    	//添加同行客户联系人
    	$tab.find('.T-addPartnerManager').on('click', BookingArrange.addPartnerManager);
		$tab.find(".T-submit-booking").on('click', function(event) {
    		event.preventDefault();
    		BookingArrange.save($tab, validator);
    	});
	};

	/**
	 * 绑定事件 删除、choose、计算
	 * @param {[type]} $tab [description]
	 */
	BookingArrange.BL_event = function($tab){
		$tab.on('click', '.T-action', function(event){
    		event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-hotel-delete')){
				BookingArrange.deleteList('hotel', $that);
			}else if($that.hasClass('T-scenic-delete')){
				BookingArrange.deleteList('scenic', $that);
			}else if($that.hasClass('T-ticket-delete')){
				BookingArrange.deleteList('ticket', $that);
			}else if($that.hasClass('T-bus-delete')){
				BookingArrange.deleteList('bus', $that);
			}
		});
		$tab.on('blur', '.T-action-blur', function(event){
    		event.preventDefault();
			BookingArrange.calculation($(this).parents('[class*="Booking"]'));
		});
		BookingArrange.datepicker($tab);
		BookingArrange.datetimepicker($tab); 

		//酒店联动  
		//绑定选择星级change事件
		$tab.find('.T-hotelStar').off().on('change', function(){
			var $parent = $(this).closest('tr');
				$parent.find("input[name=hotelName]").val("");
				$parent.find("input[name=hotelId]").val("");
				$parent.find("input[name=hotelRoom]").val("");
				$parent.find("input[name=hotelRoomId]").val("");
		});
		//绑定酒店choose事件
		BookingArrange.choose($tab.find(".T-chooseHotel"), function(obj){
			var hotelStarValue = $(obj).closest('tr').find('.T-hotelStar').val();
			BookingArrange.ajax({'url': 'hotel', 'method' : 'findHotelListByLevel','menuKey' : 'resource_hotel', 'operation' : 'view', 'level' : hotelStarValue}, function(data){
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
			});
		}, function(obj, ui){
			var parents = $(obj).closest('tr');
				parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
				parents.find("input[name=hotelRoom]").val("");
				parents.find("input[name=hotelRoomId]").val("");
		}, function(obj, ui){
			var parents = $(obj).closest('tr');
			parents.find("input[name=hotelId]").val("");
			parents.find("input[name=hotelRoom]").val("");
			parents.find("input[name=hotelRoomId]").val("");
		});
		//绑定房型choose事件
		BookingArrange.choose($tab.find(".T-chooseHotelRoom"), function(obj){
			var _this = obj;
			var id = $(_this).closest('tr').find("input[name=hotelId]").val();
			if(id){
				BookingArrange.ajax({'url' : 'hotel', 'method' : 'findTypeByHotelId', 'menuKey' : 'resource_hotel', 'operation' : 'view', 'id' : id}, function(data){
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
				});
			}else{
				layer.tips('请选择酒店', _this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		}, function(obj, ui){
			var _this = obj, parents = $(_this).parent().parent();
			parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
			var enterTime = parents.find("input[name=enterTime]").val();
			BookingArrange.ajax({'url' : 'hotel', 'method' : 'getHotelRoomPrice', 'menuKey' : 'resource_hotel', 'operation' : 'view', 'id' : ui.item.id, 'enterTime' : enterTime}, function(data){
				parents.find("input[name=costPrice]").val(data.price);
			});
		}, function(obj, ui){
			var $parent = $(obj).closest('tr');
			$parent.find("input[name=hotelRoomId]").val("");
		});
		//酒店代订验证
		var validatorHotel=rule.checkBookingHotel($tab);

		BookingArrange.choose($tab.find(".T-chooseScenicItem"), function(obj){
			var obj = $(obj);
			var $parent = obj.closest('tr');
			var startTime = $parent.find("[name=startTime]").val();
			if(startTime == ""){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择日期！");
				return false;
			}
			var scenicId = $parent.find("input[name=scenicId]").val();
			var enterTime = $parent.find("input[name=enterTime]").val();
			if(scenicId){
				BookingArrange.ajax({'url' : 'scenic', 'method' : 'findItemByScenicId', 'menuKey' : 'resource_scenic', 'operation' : 'view', 'id' : scenicId}, function(data){
					var scenicItemList = JSON.parse(data.scenicItemList);
					if(scenicItemList && scenicItemList.length > 0){
						for(var i=0; i < scenicItemList.length; i++){
							scenicItemList[i].value = scenicItemList[i].name;
						}
						obj.autocomplete('option','source', scenicItemList);
						obj.autocomplete('search', '');
					}else{
						layer.tips('没有内容。', scenicObj, {
						    tips: [1, '#3595CC'],
						    time: 2000
						});
					}
				});
			}else{
				layer.tips('请先选择景区', obj, {
				    tips: [1, '#3595CC'],
				    time: 1500
				});
			}
		}, function(obj, ui){
			var nameUiId = ui.item.id;
			var $parent = $(obj).closest('tr');
			var startTime = $parent.find("[name=startTime]").val();
			$parent.find("input[name=scenicItemId]").val(nameUiId).trigger('change');
			BookingArrange.ajax({'url' : 'scenic', 'method' : 'getScenicItemPrice', 'menuKey' : 'resource_scenic', 'operation' : 'view', 'id' : nameUiId, 'startTime' : startTime}, function(data){
				$parent.find("input[name=costPrice]").val(data.price);
			});
		}, function(obj, ui){
			var $parent = $(obj).closest(tr);
			$parent.find("input[name=scenicItemId]").val("");
		});

		//景区项目代订
		//景区choose事件
    	BookingArrange.choose($tab.find('.T-chooseScenic'), function(obj){
    		BookingArrange.ajax({'url' : 'scenic', 'method' : 'findAll', 'menuKey' : 'resource_scenic', 'operation' : 'view'},function(data){
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
    		});
    	}, function(obj, ui){
    		var $parents = $(obj).closest('tr');
			$parents.find("input[name=scenicId]").val(ui.item.id).trigger('change');
			$parents.find("input[name=scenicItemName]").val("");
			$parents.find("input[name=scenicItemId]").val("");
			$parents.find("input[name=costPrice]").val("");
    	}, function(obj, ui){
			var $parent = $(obj).closest('tr');
			$parent.find("input[name=scenicId]").val("");
			$parent.find("input[name=scenicItemName]").val("");
			$parent.find("input[name=scenicItemId]").val("");
			$parent.find("input[name=costPrice]").val("");
    	});
    	//景区贷订
		var validatorScenic=rule.checkBookingScenic($tab);  

		//票务项目代订
		//票务下拉
    	BookingArrange.choose($tab.find('.T-chooseTicket'), function(obj){
    		BookingArrange.ajax({'url' : 'ticket', 'method' : 'findAll', 'menuKey' : 'resource_ticket', 'operation' : 'view'}, function(data){
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
    		});
    	}, function(obj, ui){
    		$(obj).nextAll("input[name=ticketId]").val(ui.item.id).trigger('change');
    	}, function(obj, ui){
			var $parent = $(obj).closest('tr');
			$parent.find("input[name=ticketId]").val("");
    	});
    	//票务验证
		var validatorTicket= rule.checkBookingTicket($tab);

		//旅游车逆向联动
    	//车座数下拉列表
    	BookingArrange.choose($tab.find('.T-chooseSeatCount'), function(obj){
    		BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getSeatCountList', 'menuKey' : menuKey, 'operation' : 'view'}, function(data){
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
    		});
    	}, function(obj, ui){
    		var $parents = $(obj).closest('tr');
			$parents.find("input[name=needBusBrand]").val("");
			$parents.find("input[name=busCompany]").val("");
    	}, function(obj, ui){
			var $parents = $(obj).closest('tr');
			$parents.find("input[name=needBusBrand]").val("");
			$parents.find("input[name=busCompany]").val("");
    	});

    	//车辆品牌下拉列表
    	BookingArrange.choose($tab.find('.T-chooseNeedBusBrand'), function(obj){
			var seatCount = $(obj).closest('tr').find("input[name=needSeatCount]").val();
			if(seatCount){
				BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getBusBrandList', 'menuKey' : menuKey, 'operation' : 'view', 'seatCount' : seatCount}, function(data){
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
				});
			}else{
				layer.tips('请选择车座数', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
    	}, function(obj, ui){
			var $parents = $(obj).closest('tr');
			$parents.find("input[name=busCompany]").val("");
    	}, function(obj, ui){
    		var $parents = $(obj).closest('tr');
			$parents.find("input[name=busCompany]").val("");
    	});

    	//所属车队下拉列表
    	BookingArrange.choose($tab.find('.T-busCompany'), function(obj){
			var seatCount = $(obj).closest('tr').find("input[name=needSeatCount]").val();
			var brand = $(obj).closest('tr').find("input[name=needBusBrand]").val();
			if(seatCount && brand){
				BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getBusCompanyList', 'menuKey' : menuKey, 'operation' : 'view', 'seatCount' : seatCount, 'brand' : brand}, function(data){
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
				});
			}else{
				layer.tips('请选择车辆品牌', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
    	}, function(obj, ui){
			$(obj).parent().find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
    	}, function(obj, ui){
    		$(obj).parent().parent().find("input[name=busCompanyId]").val("");
    	});

		//车队旅游贷订
		var validatorBus=rule.checkBookingBus($tab);
	}

	//添加酒店代订列表
	BookingArrange.addHotelList = function($that){
		var html = '<tr>'+
			'<td><div class="input-group"><input name="enterTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><div class="input-group"><input name="leaveTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><select name="level" class="col-sm-12 T-hotelStar"><option selected="selected" value="1" {{if hotelList.hotel.level == 1}}selected="selected"{{/if}}>三星以下</option>'+
			'<option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input name="hotelName" value="" type="text" class="col-sm-12 T-chooseHotel bind-change"/><input name="hotelId" type="hidden" value="" /></td>'+
			'<td><input name="hotelRoom" value="" type="text" class="col-sm-12 T-chooseHotelRoom bind-change"/><input name="hotelRoomId" type="hidden" value="" /></td>'+
			'<td><input name="days" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur" style="width: 55px" maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur"  style="width: 55px"  maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="sumCostMoney" readonly="readonly" value="" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" readonly="readonly" value="" type="text" class="col-sm-12"/></td>'+
			'<td><a class="cursor T-action T-hotel-delete">删除</a></td></tr>';
		var $this = $that.closest('.T-bookingHotelList');
		var $container = $this.find(".T-hotelList").append(html);
		BookingArrange.BL_event($this.find(".T-hotelList"));
		
	};

	//新增景区项目代订列表
	BookingArrange.addScenicList = function($that){
		var $this = $that.closest(".T-bookingScenicList");
		var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker"/><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><input name="scenicName" value="" type="text" class="col-sm-12 T-chooseScenic bind-change" /><input name="scenicId" value="" type="hidden" /></td>'+
			'<td><input name="scenicItemName" value="" type="text"  class="col-sm-12 T-chooseScenicItem bind-change" /><input name="scenicItemId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur"  maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="orderNumber" value="" type="text" class="col-sm-12" maxlength="50" /></td>'+
			'<td><a class="cursor T-action T-scenic-delete">删除</a></td></tr>';
		var $container = $this.find('.T-scenicList').append(html);
		BookingArrange.BL_event($this.find(".T-scenicList"));
	};

	//新增票务代订列表
	BookingArrange.addTicketList = function($that){
		var $this = $that.closest(".T-bookingTicketList");
		var html = '<tr>'+
			'<td><input name="ticketName" value="" type="text" class="col-sm-12 T-chooseTicket bind-change"/><input name="ticketId" value="" type="hidden" /></td>'+
			'<td><select name="type"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
			'<td><input name="startCity" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
			'<td><input name="arriveCity" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
			'<td><input name="shift" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
			'<td><input name="seatLevel" value="" type="text" class="col-sm-12" maxlength="30" /></td>'+
			'<td><div class="input-group" style="min-width: 165px;"><input name="startTime" value="" type="text" class="datetimepicker col-sm-12"/><span class="input-group-addon"><i class="fa fa-clock-o"></i></span></div></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><a class="cursor T-action T-ticket-delete">删除</a></td></tr>';
		$this.find(".T-ticketList").append(html);
		BookingArrange.BL_event($this.find(".T-ticketList"));
	};

	//新增旅游车代订列表
	BookingArrange.addBusList = function($that){
		var $this = $that.closest('.T-bookingBusList');
		var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker" /><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><div class="input-group"><input name="endTime" value="" type="text" class="datepicker" /><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div></td>'+
			'<td><input name="needSeatCount" value="" type="text" class="col-sm-12 T-chooseSeatCount bind-change" /></td>'+
			'<td><input name="needBusBrand" value="" type="text" class="col-sm-12 bind-change T-chooseNeedBusBrand" /></td>'+
			'<td><input name="busCompany" value="" type="text" class="col-sm-12 bind-change T-busCompany" /><input name="busCompanyId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12"/></td>'+
			'<td><a class="cursor T-action T-bus-delete">删除</a></td></tr>';
		var $container = $this.find(".T-busList").append(html);		
		BookingArrange.BL_event($this.find(".T-busList"));
	};
	/**
	 * 同行客户联系人下拉
	 * @param  {object} parentObj DOM容器。只jquery对象;
	 */
	BookingArrange.getPartnerAgencyManagerList = function(parentObj){
		var chooseManagerList = parentObj.find('.T-choosePartnerManager');
		BookingArrange.choose(chooseManagerList, function(obj){
			var partnerAgencyId = parentObj.find('.bookingMainForm input[name=partnerAgencyId]').val();
			if(partnerAgencyId){
				BookingArrange.ajax({'url' : 'partnerAgency', 'method' : 'getContactListByPartnerAgencyId', 'menuKey' : 'resource_partnerAgency', 'operation' : 'view', 'partnerAgencyId' : partnerAgencyId}, function(data){
					var contactList = JSON.parse(data.partnerAgencyContactList);
					if(contactList != null && contactList.length>0){
						if(contactList != null && contactList.length){
							for(var i=0;i<contactList.length;i++){
								contactList[i].value = contactList[i].contactRealname;
							}
						}
						$(obj).autocomplete('option','source', contactList);
						$(obj).autocomplete('search', '');
					}else{
						layer.tips('该同行客户没有联系人，请添加！', obj, {
						    tips: [1, '#3595CC'],
						    time: 2000
						});
					}
				});
			}else{
				layer.tips('请选择同行客户', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		}, function(obj, ui){
			var $parent = $(obj).parent().parent().parent();
			$parent.find("input[name=partnerAgencyContactId]").val(ui.item.id).trigger('change');
			$parent.find("input[name=contactMobileNumber]").val(ui.item.contactMobileNumber);
		}, function(obj, ui){
			var $parent = $(obj).parent();
			$parent.find("input[name=partnerAgencyContactId]").val("");
		});
	};
	/**
	 * 同行客户下拉
	 * @param  {object} parentObj DOM容器。只jquery对象;
	 */
	BookingArrange.partnerAgencyChooseList = function(parentObj){
		var partnerAgencyChoose = parentObj.find(".T-choosePartnerAgency");
		BookingArrange.choose(partnerAgencyChoose, function(obj){
			if(BookingArrange.tmpData.partnerAgency){
				setPartnerAgency(BookingArrange.tmpData.partnerAgency);
			}else{
				BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getAllPartnerAgencyList', 'menuKey' : menuKey, 'operation' : 'view'}, function(data){
					BookingArrange.tmpData.partnerAgency = data;
					setPartnerAgency(data);
				});
			}
			function setPartnerAgency(data){
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

		}, function(obj, ui){
			var $parents = $(obj).parent().parent();
			$parents.find("[name=partnerAgencyId]").val(ui.item.id).trigger('change');
			BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getAllPartnerAgencyList', 'menuKey' : menuKey, 'operation' : 'view', 'id' : ui.item.id}, function(data){
				$parents.find("input[name=contactRealname]").val("");
				$parents.find("input[name=contactMobileNumber]").val("");
			});
		},function(obj, ui){
			var parents = $(obj).parent().parent();
			parents.find("[name=partnerAgencyId]").val("");
			parents.find("input[name=contactRealname]").val("");
			parents.find("input[name=contactMobileNumber]").val("");
		});
	};
	/**
	 * 添加同行客户联系人
	 */
	BookingArrange.addPartnerManager = function(){
		var obj = this;
		var PartnerId = $(obj).closest('.form-group').find("input[name=partnerAgencyId]").val();
		var $classNmae = $(obj).closest('.T-addBooking');
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
			    	$(".T-addPartnerManager .T-submit-addPartnerManager").click(function(){
			    		
			    		//提交验证
			    		if (!validatorManager.form())return;
			    		var partnerAgencyId = PartnerId,
			    		contactRealname = $(".T-addPartnerManager").find("input[name=managerName]").val(),
			    		contactMobileNumber = $(".T-addPartnerManager").find("input[name=managerMobile]").val();
			    		departmentName = $(".T-addPartnerManager").find("input[name=departmentName]").val();
			    		dutyName = $(".T-addPartnerManager").find("input[name=dutyName]").val();
			    		BookingArrange.ajax({
			    			'url' : 'partnerAgency', 
			    			'method' : 'saveContact',
			    			'menuKey' : 'resource_partnerAgency',
			    			'operation' : 'view',
			    			'partnerAgencyId' : partnerAgencyId,
			    			'contactRealname' : contactRealname,
			    			'contactMobileNumber' : contactMobileNumber,
			    			'departmentName' : departmentName,
			    			'dutyName' : dutyName
			    		}, function(data){
			    			var contact = JSON.parse(data.partnerAgencyContact);
							layer.close(addPartnerManagerLayer);
							$classNmae.find("input[name=contactRealname]").val(contact.contactRealname);
							$classNmae.find("input[name=partnerAgencyContactId]").val(contact.id);
							$classNmae.find("input[name=contactMobileNumber]").val(contact.contactMobileNumber);
			    		});
			    	})
			    }
			})
		}else{
			layer.tips('新建联系人请先选择同行客户', obj, {
			    tips: [1, '#3595CC'],
			    time: 2000
			});
		}
	};
	//计算成本和价格
	BookingArrange.calculation = function($that){
		var Tr = $that.find('tbody[class*="List"]').find('tr'),
			$costS = [],
			$saleS = [];
		Tr.each(function(i){
			var count = Tr.eq(i).find("[name=roomCount]").val() || 0,
				cost = Tr.eq(i).find("[name=costPrice]").val() || 0,
				sale = Tr.eq(i).find("[name=salePrice]").val() || 0,
				costS = Tr.eq(i).find("[name=sumCostMoney]"),
				saleS = Tr.eq(i).find("[name=sumNeedGetMoney]"),
				days = Tr.eq(i).find("[name=days]").val() || 1;
			
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
		});
		var sumCost = eval($costS.join("+"));
		var sumSale = eval($saleS.join("+"));
		$that.find(".sumNeedGetMoney").val(sumSale);
		$that.find(".sumCostMoney").val(sumCost);
	};
	/**
	 * 保存模板数据
	 * @param  {object} $tab      顶层容器
	 * @param  {object} validator 校验对象
	 * @param  {array}  tab_array 切换tab的参数
	 */
	BookingArrange.save = function($tab, validator, tab_array){
		//表单代订信息验证
		var validator = rule.checkAddBooking($tab);
		//酒店代订验证
		var validatorHotel=rule.checkBookingHotel($tab.find(".T-bookingHotelList")); 
		//景区代订
		var validatorScenic=rule.checkBookingScenic($tab.find(".T-bookingScenicList"));   
		//票务验证
		var validatorTicket= rule.checkBookingTicket($tab.find(".T-bookingTicketList"));
		//车队旅游代订
		var validatorBus=rule.checkBookingBus($tab.find(".T-bookingBusList"));
		if (!validator.form() || !validatorHotel.form() || !validatorScenic.form() || !validatorTicket.form() || !validatorBus.form()) { return; }    
		BookingArrange.submitBooking($tab, validator, tab_array);
	}
	/**
	 * 提交表单事件
	 * @param  {string}  operation 指定为add or update
	 * @param  {Boolean} isClose   是否关闭当前tab
	 */
	BookingArrange.submitBooking = function($that, validator, tab_array){
		var bookingOrder = {
				id : BookingArrange.getValue($that,"id"),
				partnerAgencyId : BookingArrange.getValue($that,"partnerAgencyId"),
				contactId : BookingArrange.getValue($that,"partnerAgencyContactId"),
				contactRealname : BookingArrange.getValue($that,"contactRealname"),
			    contactMobileNumber : BookingArrange.getValue($that,"contactMobileNumber"),
			    touristRealname : BookingArrange.getValue($that,"touristRealname"),
			    touristMobileNumber : BookingArrange.getValue($that,"touristMobileNumber"),
			    sumNeedGetMoney : BookingArrange.getValue($that,"sumNeedGetMoney"),
			    getedMoney : BookingArrange.getValue($that,"getedMoney"),
			    getType : BookingArrange.getValue($that,"getType"),
			    sumCostMoney : BookingArrange.getValue($that,"sumCostMoney"),
			    payedMoney : BookingArrange.getValue($that,"payedMoney"),
			    payType : BookingArrange.getValue($that,"payType"),
			    remark : BookingArrange.getValue($that,"remark"),
			    bookingHotelList : [],
			    bookingScenicList : [],
			    bookingTicketList : [],
			    bookingBusCompanieList : []
		    };
		var hotelListTr = $that.find(".T-hotelList tr");
		hotelListTr.each(function(i){
			var hotelJson = {
				id : hotelListTr.eq(i).attr("data-entity-id"),
				hotelId : BookingArrange.getValue(hotelListTr.eq(i),"hotelId"),
				hotelRoomId : BookingArrange.getValue(hotelListTr.eq(i),"hotelRoomId"),
				enterTime : BookingArrange.getValue(hotelListTr.eq(i),"enterTime"),
				leaveTime : BookingArrange.getValue(hotelListTr.eq(i),"leaveTime"),
				days : BookingArrange.getValue(hotelListTr.eq(i),"days"),
				roomCount : BookingArrange.getValue(hotelListTr.eq(i),"roomCount"),
				costPrice : BookingArrange.getValue(hotelListTr.eq(i),"costPrice"),
				salePrice : BookingArrange.getValue(hotelListTr.eq(i),"salePrice"),
				sumCostMoney : BookingArrange.getValue(hotelListTr.eq(i),"sumCostMoney"),
				sumNeedGetMoney : BookingArrange.getValue(hotelListTr.eq(i),"sumNeedGetMoney")
			}
			if(hotelJson.hotelId){
				bookingOrder.bookingHotelList.push(hotelJson);
			}
		});
		var scenicListTr =  $that.find(".T-scenicList tr");
		scenicListTr.each(function(i){
			var scenicJson = {
				id : scenicListTr.eq(i).attr("data-entity-id"),
				scenicId : BookingArrange.getValue(scenicListTr.eq(i),"scenicId"),
				scenicItemId : BookingArrange.getValue(scenicListTr.eq(i),"scenicItemId"),
				startTime : BookingArrange.getValue(scenicListTr.eq(i),"startTime"),
				orderNumber : BookingArrange.getValue(scenicListTr.eq(i),"orderNumber"),
				roomCount : BookingArrange.getValue(scenicListTr.eq(i),"roomCount"),
				costPrice : BookingArrange.getValue(scenicListTr.eq(i),"costPrice"),
				salePrice : BookingArrange.getValue(scenicListTr.eq(i),"salePrice"),
				sumCostMoney : BookingArrange.getValue(scenicListTr.eq(i),"sumCostMoney"),
				sumNeedGetMoney : BookingArrange.getValue(scenicListTr.eq(i),"sumNeedGetMoney")
			}
			if(scenicJson.scenicId){
				bookingOrder.bookingScenicList.push(scenicJson);
			}
		})
		var ticketListTr = $that.find(".T-ticketList tr");
		ticketListTr.each(function(i){
			var ticketJson = {
				id : ticketListTr.eq(i).attr("data-entity-id"),
				ticketId : BookingArrange.getValue(ticketListTr.eq(i),"ticketId"),
				type : BookingArrange.getValue(ticketListTr.eq(i),"type"),
				startTime : BookingArrange.getValue(ticketListTr.eq(i),"startTime"),
				startCity : BookingArrange.getValue(ticketListTr.eq(i),"startCity"),
				arriveCity : BookingArrange.getValue(ticketListTr.eq(i),"arriveCity"),
				shift : BookingArrange.getValue(ticketListTr.eq(i),"shift"),
				seatLevel : BookingArrange.getValue(ticketListTr.eq(i),"seatLevel"),
				roomCount : BookingArrange.getValue(ticketListTr.eq(i),"roomCount"),
				costPrice : BookingArrange.getValue(ticketListTr.eq(i),"costPrice"),
				salePrice : BookingArrange.getValue(ticketListTr.eq(i),"salePrice"),
				sumCostMoney : BookingArrange.getValue(ticketListTr.eq(i),"sumCostMoney"),
				sumNeedGetMoney : BookingArrange.getValue(ticketListTr.eq(i),"sumNeedGetMoney")
			}
			if(ticketJson.ticketId){
				bookingOrder.bookingTicketList.push(ticketJson);
			}
		})
		var busListTr = $that.find(".T-busList tr");
		busListTr.each(function(i){
			var busJson = {
				id : busListTr.eq(i).attr("data-entity-id"),
				busCompanyId : BookingArrange.getValue(busListTr.eq(i),"busCompanyId"),
				needSeatCount : BookingArrange.getValue(busListTr.eq(i),"needSeatCount"),
				needBusBrand :BookingArrange.getValue(busListTr.eq(i),"needBusBrand"),
				startTime : BookingArrange.getValue(busListTr.eq(i),"startTime"),
				endTime : BookingArrange.getValue(busListTr.eq(i),"endTime"),
				roomCount : BookingArrange.getValue(busListTr.eq(i),"roomCount"),
				costPrice : BookingArrange.getValue(busListTr.eq(i),"costPrice"),
				salePrice : BookingArrange.getValue(busListTr.eq(i),"salePrice"),
				sumCostMoney : BookingArrange.getValue(busListTr.eq(i),"sumCostMoney"),
				sumNeedGetMoney : BookingArrange.getValue(busListTr.eq(i),"sumNeedGetMoney")
			}
			if(busJson.busCompanyId){
				bookingOrder.bookingBusCompanieList.push(busJson);
			}
		})
		bookingOrder = JSON.stringify(bookingOrder);
		var operation = $that.children().hasClass('T-addBooking') ? 'add' : 'update';
		BookingArrange.ajax({
			'url' : 'bookingOrder', 
			'method' : 'saveBookingOrder', 
			'menuKey' : menuKey, 
			'operation' : operation, 
			'bookingOrder' : encodeURIComponent(bookingOrder)
		}, function(data){
			showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
				if (!!tab_array) {
					Tools.addTab(tab_array[0], tab_array[1], tab_array[2]);
					BookingArrange.CU_event($that);
				} else {
					Tools.closeTab(Tools.getTabKey($that.prop('id')));
					BookingArrange.listBooking(BookingArrange.searchData.pageNo);
				}

				$that.data('isEdited', false);
			});	
		});
	};
	/**
	 * 查看项目代订
	 */
	BookingArrange.viewBooking = function(id){
		BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'findBookingOrderById', 'menuKey' : menuKey, 'operation' : 'view', 'id' : id}, function(data){
			data.bookingOrder = JSON.parse(data.bookingOrder);
			var html = viewTemplate(data);
			Tools.addTab(menuKey+"-view","查看项目代订",html);
			//导出查看项目代订按钮事件
			$(".updateBooking .T-bookingBtn").on('click', function(){
				BookingArrange.exportBooking(id);
		 	});
		});
	};
	/**
	 * 修改项目代订
	 */
	BookingArrange.update = function(id){
		if(!!id){
			if (BookingArrange.update_id === id)  {
				$('.tab-' + menuKey + '-update').children('a').trigger('click');
				return;
			}

			BookingArrange.ajax({
				'url' : 'bookingOrder', 
				'method' : 'findBookingOrderById', 
				'menuKey' : menuKey, 
				'operation' : 'view', 
				'id' : id
			}, function(data){
				BookingArrange.update_id = id;
				data.id = id;
				data.bookingOrder = JSON.parse(data.bookingOrder);
				if (Tools.addTab(menuKey + '-update', '修改项目代订', updateTemplate(data))) {
					BookingArrange.CU_event($('#tab-' + menuKey + '-update-content'));
					BookingArrange.BL_event($('#tab-' + menuKey + '-update-content').find('tbody[class*=List]'));
				}	
			});
		}
	};
	/**
	 * 取消项目代订
	 */
	BookingArrange.deleteBooking = function(id){
		var $parent = $(this).closest('tr');
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
						BookingArrange.ajax({
							'url' : 'bookingOrder',
							'method' : 'deleteBookingOrderByIdAndCateName',
							'menuKey' : menuKey,
							'operation' : 'delete',
							'cateName' : 'order',
							'id' : id
						}, function(data){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								$parent.fadeOut(function(){
									$parent.remove();
									BookingArrange.listBooking(BookingArrange.searchData.pageNo);
								})
							});
						});
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("你确定要删除该项目代订？");
			}
		});
	};

	/**
	 * 导出项目代订信息
	 * @param  {number} id 需要导出的项目代订信息的ID编号
	 */
	BookingArrange.exportBooking = function(id){
		var url = APP_ROOT+"back/export.do?method=exportBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&id="+id;
		exportXLS(url);
	};
	/**
	 * 获取Value
	 * @param  {object} $obj DOM容器。只jquery对象;
	 * @param  {string} name input的name
	 */
	BookingArrange.getValue = function($obj, name){
		var $this = $obj.find("[name="+name+"]"), $value;
		if($this.attr("type") == "checkbox"){
			$value = $this.is(":checked") ? 1 : 0;
		}else{
			$value = $this.val();
		}
		return $value;
	}
	/**
	 * 删除列表事件
	 * @param  {string} $list 需要删除的列名称
	 * @param  {object} $this 当前元素
	 */
	BookingArrange.deleteList = function($list, $this){
		var $parent = $this.closest("tr"),
			id = $parent.data("entity-id");
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
							BookingArrange.ajax({
								'url' : 'bookingOrder', 
								'method' : 'deleteBookingOrderByIdAndCateName',
								'operation': 'delete', 
								'cateName' : $list, 
								'id' : id
							}, function(){
								showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
									$parent.fadeOut(function(){
										var $thatPar = $parent.parents('[class*="Booking"]');
										$parent.remove();
		    							BookingArrange.calculation($thatPar);
							    	});
								});
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
				var $thatPar = $parent.parents('[class*="Booking"]');
				$parent.remove();
				BookingArrange.calculation($thatPar);
			})
		}
	};

	exports.init = BookingArrange.initModule;
})