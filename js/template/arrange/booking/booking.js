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
		listTableTemplate = require("./view/listTable"),
		addPartnerManagerTemplate = require("./view/addPartnerManager"),
		listFinancialTemplate = require("./view/listFinancial"),
		financialNoticeTemplate = require("./view/financiaNoticeBook"),
		viewSettlementTemplate = require("./view/viewSettlement"),
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
		edited : {},
		// isPrePayMoney : false,
		receiveUserIdList : []
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
				showLoading:false,
				success:function(data){
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
		BookingArrange.$searchArea = false;
		
		Tools.addTab(menuKey,"项目代订",listTemplate());
		BookingArrange.$tab = $('#' + tabId);
		BookingArrange.$searchArea = BookingArrange.$tab.find('.T-search-area');
		BookingArrange.init_event();
		// 初始化列表
		BookingArrange.listBooking(0);
		// 初始化查询参数
		BookingArrange.getQueryTerms();		
	};

	/**
		 * /通知财务勾选列表
		 * @return {[type]} [description]
		 */
 		BookingArrange.chooseFinancial = function(){
		var title = '财务列表',data={};
		var addFinancialLayer = layer.open({
			type: 1,
			title: title,
			skin: 'layui-layer-rim', //加上边框
			area: '860px', //宽高
			zIndex:1028,
			content: listFinancialTemplate(data),
			success:function(){
				
				var $container = $(".T-optional-financial");
				// 初始化list列表
				BookingArrange.listBookFinancial(0,$container);
				 //给提交按钮绑定事件
                //$container.find(".T-btn-sureSubmit").on('click' , saveScenicOptional);
				// 取消按钮绑定事件
				$container.find(".T-btn-sureSubmit").click(function() {
                   layer.close(addFinancialLayer);
                });

			}
		})

	};

	BookingArrange.listBookFinancial = function(page,$container){
		var $container = $(".T-optional-financial");
		  // 修正页码
        var args = {
			pageNo: (page || 0)
		}
		if (!!BookingArrange.$tab) {
			args = {
				pageNo: (page || 0),
				realName: $container.find('.T-financial-name').val()
			}
		}
			$.ajax({
					url: KingServices.build_url('touristGroup', 'getReceiveUserList'),
					type: 'POST',
					// data: "pageNo="+page,
					data: args,
					success:function(data){
					    if(showDialog(data)){
					    	data.userList=JSON.parse(data.userList);
					    	var html = financialNoticeTemplate(data);
					    	$container.find('.T-bookingF-content').html(html);
					    	// 关键字搜索事件
							$container.find('.T-financial-name').on('click',function(e){
								if(e.which == 13 && !window.forbiddenError){
									BookingArrange.listBookFinancial();
								}
							});
							$container.find('.T-btn-search').on('click', function(event) {
									event.preventDefault();
									BookingArrange.listBookFinancial();
							});
					    	// 让对话框居中
								$(window).trigger('resize');

							// 勾选记录
							$container.find('.T-add').on('click',BookingArrange.addFinancialBook);

							//分页自动勾选
							var $tr = $container.find('tr');
						   for (var i = 0; i < BookingArrange.receiveUserIdList.length; i++) {
						   	$tr.each(function(j) {
						    	var id = $tr.eq(j).attr('data-value');
						    	if (BookingArrange.receiveUserIdList[i].receiveUserId == id ) {
						    		$tr.eq(j).find('.T-add').prop('checked',true);
						    	}
						    })
						   };
					    	// 绑定翻页组件
							laypage({
							    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.totalPage, //总页数
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		BookingArrange.listBookFinancial(obj.curr -1,$container);
							    	}
							    }
							});
			    }

	        }
       });
	}

	/**
	 * 分页勾选状态
	 */
	 BookingArrange.addFinancialBook = function(){
	 	var $that=$(this),
		    $tr=$that.closest('tr'),
		    id= $tr.attr('data-value');
	    if ($that.is(':checked')) {
	    	var receiveUserIdArray = {
	    		receiveUserId : id
	    	};
	    	BookingArrange.receiveUserIdList.push(receiveUserIdArray);
	    } else {
	    	for (var i = 0; i < BookingArrange.receiveUserIdList.length; i++) {
	    		if ( !!BookingArrange.receiveUserIdList[i].receiveUserId &&  id == BookingArrange.receiveUserIdList[i].receiveUserId ) {
	    			tranBookingArrangesit.receiveUserIdList.splice(i,1);
	    		}
	    	}
	    }
	 }


	/**
	 * 绑定页内事件
	 */
	BookingArrange.init_event = function($tab){		
		// var $this = $that.closest('.T-updateBooking');
		// var $container = $this.find(".T-hotelList");
		//时间事件
		Tools.setDatePicker(BookingArrange.$searchArea.find('.datepicker'), true);
		
		//搜索按钮事件
		BookingArrange.$searchArea.find('.T-booking-search').on("click", function (event) {
			event.preventDefault();
			BookingArrange.listBooking(0);
		});

		//搜索客户模糊查询
		BookingArrange.choose(BookingArrange.$searchArea.find('.T-partnerAgencyChoose'), function(obj){
			var partnerAgencyList = BookingArrange.autocompleteDate.partnerAgencyList;
			if(partnerAgencyList && partnerAgencyList.length > 0){
				for(var i=0; i < partnerAgencyList.length; i++){
						partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName
					}

				partnerAgencyList.unshift({
                    id: '',
                    value: '全部'
                });
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
			if(operationUserList && operationUserList.length > 0){
				for(var i=0; i < operationUserList.length; i++){
					operationUserList[i].value = operationUserList[i].realName
				}

				operationUserList.unshift({
                    id: '',
                    value: '全部'
                });
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
				BookingArrange.deleteBooking(id, $that);
			}
		});
		 BookingArrange.financialChanged($tab);
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
			partnerAgencyId = BookingArrange.$searchArea.find("input[name=partnerAgencyChooseId]").val(),
			partnerAgency = partnerAgency === '全部'? '': partnerAgency;
			operateUser = BookingArrange.$searchArea.find("input[name=operateUser]").val(),
			operateUserId = BookingArrange.$searchArea.find("input[name=operateUserId]").val(),
			operateUser = operateUser === '全部'? '': operateUser;
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
				partnerAgency: partnerAgency || '',
				partnerAgencyId: partnerAgencyId || '',
				operateUser : operateUser || '',
				operateUserId : operateUserId || '',
				startTime : startTime || '',
				endTime : endTime || '',
				sortType : 'operationTime'
			};

		BookingArrange.ajax(data, listBookingInfo);
		function listBookingInfo (data) {
			if (showDialog(data)) {
				BookingArrange.searchData =  {
					pageNo: page
				};
				data.bookingOrderList = JSON.parse(data.bookingOrderList);

				BookingArrange.$tab.find('.T-list').html(filterUnAuth(listTableTemplate(data)));
				BookingArrange.$tab.find('.T-recordSize').html(Tools.getRecordSizeDesc(data.recordSize));
				
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
		}
	};


	/**
	 * 绑定事件事件  包含  年月日 时分秒
	 * @param  {[type]} $container [description]
	 * @return {[type]}            [description]
	 */
	BookingArrange.datetimepicker = function(){
		Tools.setDateHSPicker($('.datetimepicker')); 
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
					var $that = $(this);
					if (!$that.closest('.T-search-area').length) {
						// 编辑页面
						$(this).val('');
					}

					if(typeof changeFn == 'function'){
						changeFn(this, ui);
					}else if ($that.next().is('input')) {
						$that.next().val('');
					}
				}
			},
			select :function(event, ui){
				var $that = $(this);
				$that.blur();
				if(typeof selectFn == 'function'){
					selectFn(this, ui);
				} else if ($that.next().is('input')) {
					$that.next().val(ui.item.id);
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
		BookingArrange.bookNumberChange($tab)
		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change', function(event){
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			BookingArrange.CU_event($tab);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			BookingArrange.save($tab, validator, [tab_id, title, html]);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			BookingArrange.BL_event($tab);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			BookingArrange.save($tab, validator);
		});

		var $price=$tab.find('.price');
		Tools.inputCtrolFloat($price);

		//新增list事件
		$tab.off('click', '.T-action').on('click', '.T-action', function(event){
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

			validator = rule.checkAddBooking($tab);
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
    	//外联销售下拉
		BookingArrange.getOPUserList($tab.find(".T-outOPUserName")).trigger('click');
    	// 通知财务初始化
		$tab.find('.T-btn-financial').on('click', function(event) {
			event.preventDefault();
			BookingArrange.chooseFinancial();
		});
		//判定预付款是否发生改变
		BookingArrange.financialChanged($tab);
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
		
		$tab.find('.datepicker').each(function() {
			var $datepicker = $(this);

			if (!$datepicker.data('datepicker')) {
				var $datepickerTr = $datepicker.closest('tr');
				if ($datepickerTr.find('[name=days]').length) {
					var $datepickers = $datepickerTr.find('.datepicker'),
						options = {
							moreDay : 1
						};

					Tools.setDatePicker($datepickers, true,options).on('changeDate.diff.api', function(event) {
						event.preventDefault();
						$datepickerTr.find('input[name="days"]').val(Tools.getDateDiff($datepickers.eq(0).val(), $datepickers.eq(1).val()));
						BookingArrange.calculation($datepicker.parents('[class*="Booking"]'));
					});
				} else if ($datepickerTr.find('[name=days]').length==0) {
					var $datepickers = $datepickerTr.find('.datepicker'),
						options = {
							moreDay : 0
						};
					Tools.setDatePicker($datepickers, true,options).on('changeDate.diff.api', function(event) {
						event.preventDefault();
						$datepickerTr.find('input[name="days"]').val(Tools.getDateDiff($datepickers.eq(0).val(), $datepickers.eq(1).val()));
						BookingArrange.calculation($datepicker.parents('[class*="Booking"]'));
					});
				} else{
					Tools.setDatePicker($datepicker);
				}
			}
		});

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
				parents.find("input[name=costPrice]").val(0);
				parents.find("input[name=salePrice]").val(0);
				$.ajax({
					url: KingServices.build_url('hotel','getHotelById'),
					type: 'POST',
	                showLoading: false,
	                data: "id=" + ui.item.id,
	                success: function(data) {
						if(showDialog(data)){
							parents.find(".T-hotelStar").val(data.hotel.level);
						}
	                }
				});
				BookingArrange.calculation($(obj).parents('[class*="Booking"]'));
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
				BookingArrange.calculation($(obj).parents('[class*="Booking"]'));
			});
		}, function(obj, ui){
			var $parent = $(obj).closest('tr');
			$parent.find("input[name=hotelRoomId]").val("");
		});

		BookingArrange.choose($tab.find(".T-chooseScenicItem"), function(obj){
			var obj = $(obj);
			var $parent = obj.closest('tr');
			var startTime = $parent.find("[name=startTime]").val();
			if(startTime == ""){
				showMessageDialog("请选择日期！");
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
				BookingArrange.calculation($(obj).parents('[class*="Booking"]'));
			});
		}, function(obj, ui){
			var $parent = $(obj).closest('tr');
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
			if(seatCount){
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
				layer.tips('请选择车座数', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
    	}, function(obj, ui){
			$(obj).parent().find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
    	}, function(obj, ui){
    		$(obj).parent().parent().find("input[name=busCompanyId]").val("");
    	});

	}

	//添加酒店代订列表
	BookingArrange.addHotelList = function($that){
		var html = '<tr>'+
			'<td><div class="input-group"><input name="enterTime" value="" type="text" class="datepicker"/></div></td>'+
			'<td><div class="input-group"><input name="leaveTime" value="" type="text" class="datepicker"/></div></td>'+
			'<td><select name="level" class="col-sm-12 T-hotelStar"><option selected="selected" value="" {{if hotelList.hotel.level == 0}}selected="selected"{{/if}}>全部</option>'+
			'<option value="1">三星以下</option>'+
			'<option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input name="hotelName" value="" type="text" class="col-sm-12 T-chooseHotel bind-change"/><input name="hotelId" type="hidden" value="" /></td>'+
			'<td><input name="hotelRoom" value="" type="text" class="col-sm-12 T-chooseHotelRoom bind-change"/><input name="hotelRoomId" type="hidden" value="" /></td>'+
			'<td><input name="days" value="" type="text" class="col-sm-12 T-action-blur F-float F-count" maxlength="5" readonly="readonly" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" style="width: 55px" maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money"  style="width: 55px"  maxlength="9" /><label class="col-sm-4 control-label" style="padding: 7px 0 0 0;width:25px;" >/天</label></td>'+
			'<td><input name="sumCostMoney" readonly="readonly" value="" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="sumNeedGetMoney" readonly="readonly" value="" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="prePayMoney" value="" type="text" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money"/></td>'+
			'<td><a class="cursor T-action T-hotel-delete">删除</a></td></tr>';
		var $this = $that.closest('.T-bookingHotelList');
		var $container = $this.find(".T-hotelList");
		    $container.append(html);
		var $price= $container.find('.price');
		Tools.inputCtrolFloat($price);
		BookingArrange.BL_event($this.find(".T-hotelList"));
		//判定预付款是否发生改变 
		BookingArrange.financialChanged($container);
		
	};

	//新增景区项目代订列表
	BookingArrange.addScenicList = function($that){
		var $this = $that.closest(".T-bookingScenicList");
		var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker"/></div></td>'+
			'<td><input name="scenicName" value="" type="text" class="col-sm-12 T-chooseScenic bind-change" /><input name="scenicId" value="" type="hidden" /></td>'+
			'<td><input name="scenicItemName" value="" type="text"  class="col-sm-12 T-chooseScenicItem bind-change" /><input name="scenicItemId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur"  maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="orderNumber" value="" type="text" class="col-sm-12" maxlength="50" /></td>'+
			'<td><input name="prePayMoney" value="" type="text" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money"/></td>'+
			'<td><a class="cursor T-action T-scenic-delete">删除</a></td></tr>';
		var $container=	$this.find('.T-scenicList');
		    $container.append(html);
		var $price=$container.find('.price')
		Tools.inputCtrolFloat($price);
		BookingArrange.BL_event($this.find(".T-scenicList"));

		//判定预付款是否发生改变 
		BookingArrange.financialChanged($container);
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
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="prePayMoney" value="" type="text" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money"/></td>'+
			'<td><a class="cursor T-action T-ticket-delete">删除</a></td></tr>';
		var $container=$this.find(".T-ticketList");
		    $container.append(html);
        var $price=$container.find('.price')
			Tools.inputCtrolFloat($price);
		BookingArrange.BL_event($this.find(".T-ticketList"));

		//判定预付款是否发生改变 
		BookingArrange.financialChanged($container);
	};

	//新增旅游车代订列表
	BookingArrange.addBusList = function($that){
		var $this = $that.closest('.T-bookingBusList');
		var html = '<tr>'+
			'<td><div class="input-group"><input name="startTime" value="" type="text" class="datepicker" /></div></td>'+
			'<td><div class="input-group"><input name="endTime" value="" type="text" class="datepicker" /></div></td>'+
			'<td><input name="needSeatCount" value="" type="text" class="col-sm-12 T-chooseSeatCount bind-change" /></td>'+
			'<td><input name="needBusBrand" value="" type="text" class="col-sm-12 bind-change T-chooseNeedBusBrand" /></td>'+
			'<td><input name="busCompany" value="" type="text" class="col-sm-12 bind-change T-busCompany" /><input name="busCompanyId" value="" type="hidden" /></td>'+
			'<td><input name="roomCount" value="" type="text" class="col-sm-12 T-action-blur" maxlength="5" /></td>'+
			'<td><input name="costPrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="salePrice" value="" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /></td>'+
			'<td><input name="sumCostMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="sumNeedGetMoney" value="" readonly="readonly" type="text" class="col-sm-12 F-float F-money"/></td>'+
			'<td><input name="prePayMoney" value="" type="text" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money"/></td>'+
			'<td><a class="cursor T-action T-bus-delete">删除</a></td></tr>';
		var $container = $this.find(".T-busList");
		$container.append(html);	
		var $price=$container.find('.price')
		Tools.inputCtrolFloat($price);	
		BookingArrange.BL_event($this.find(".T-busList"));

		//判定预付款是否发生改变 
		BookingArrange.financialChanged($container);
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
				BookingArrange.ajax({
					'url' : 'partnerAgency',
					'method' : 'getContactListByPartnerAgencyId', 
					'menuKey' : 'resource_partnerAgency', 
					'operation' : 'view', 
					'partnerAgencyId' : partnerAgencyId}, function(data){
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
			BookingArrange.ajax({'url' : 'bookingOrder',
			 'method' : 'getAllPartnerAgencyList', 'menuKey' : menuKey, 'operation' : 'view'}, function(data){
				BookingArrange.tmpData.partnerAgency = data;
				setPartnerAgency(data);
			});
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
			    area: '35%', //宽高
			    zIndex:1028,
			    content: html,
			    scrollbar: false,
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
			$payedS = [];
		Tr.each(function(i){
			var count = Tr.eq(i).find("[name=roomCount]").val() || 0,
				cost = Tr.eq(i).find("[name=costPrice]").val() || 0,
				sale = Tr.eq(i).find("[name=salePrice]").val() || 0,
				costS = Tr.eq(i).find("[name=sumCostMoney]"),
				saleS = Tr.eq(i).find("[name=sumNeedGetMoney]"),
				days = Tr.eq(i).find("[name=days]").val() || 1,
				payed = Tr.eq(i).find("[name=prePayMoney]").val()-0 || 0;
			
			if(count*cost*days - 900000000 >0){
				showMessageDialog("计算成本值过大，请确认数据是否有误");
			}else if(count*sale*days - 900000000 >0){
				showMessageDialog("计算应收值过大，请确认数据是否有误");
			}else{
			costS.val(count*cost*days);
			saleS.val(count*sale*days);
			}
			$costS.push(costS.val());
			$saleS.push(saleS.val());
			$payedS.push(payed);
		});
		var sumCost = eval($costS.join("+"));
		var sumSale = eval($saleS.join("+"));
		var sumPayed = eval($payedS.join("+"));
		$that.find(".sumNeedGetMoney").val(Tools.toFixed(sumSale));
		$that.find(".sumCostMoney").val(Tools.toFixed(sumCost));
		$that.find(".sumPrePayMoney").val(Tools.toFixed(sumPayed));
	};
	/**
	 * 保存模板数据
	 * @param  {object} $tab      顶层容器
	 * @param  {object} validator 校验对象
	 * @param  {array}  tab_array 切换tab的参数
	 */
	BookingArrange.save = function($tab, validator, tab_array){
		//表单代订信息验证
		if (!validator.form()) { return; }    
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
				bookingOrderNumber : BookingArrange.getValue($that,"orderNumber"),
				partnerAgencyId : BookingArrange.getValue($that,"partnerAgencyId"),
				contactId : BookingArrange.getValue($that,"partnerAgencyContactId"),
				contactRealname : BookingArrange.getValue($that,"contactRealname"),
			    contactMobileNumber : BookingArrange.getValue($that,"contactMobileNumber"),
			    touristRealname : BookingArrange.getValue($that,"touristRealname"),
			    touristMobileNumber : BookingArrange.getValue($that,"touristMobileNumber"),
			    outOPUserName : BookingArrange.getValue($that,"outOPUserName"),
			    outOPUserId : $that.find('[name="outOPUserName"]').data('id') || $that.find('[name="outOPUserId"]').val(),
			    sumNeedGetMoney : BookingArrange.getValue($that,"sumNeedGetMoney"),
			    preIncomeMoney : BookingArrange.getValue($that,"preIncomeMoney"), 
			    sumCostMoney : BookingArrange.getValue($that,"sumCostMoney"),
			    remark : BookingArrange.getValue($that,"remark"),
			    bookingHotelList : [],
			    bookingScenicList : [],
			    bookingTicketList : [],
			    bookingBusCompanieList : [],
			    receiveUserIdList : []
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
				sumNeedGetMoney : BookingArrange.getValue(hotelListTr.eq(i),"sumNeedGetMoney"),
				prePayMoney : BookingArrange.getValue(hotelListTr.eq(i),"prePayMoney"),
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
				sumNeedGetMoney : BookingArrange.getValue(scenicListTr.eq(i),"sumNeedGetMoney"),
				prePayMoney : BookingArrange.getValue(scenicListTr.eq(i),"prePayMoney"),
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
				sumNeedGetMoney : BookingArrange.getValue(ticketListTr.eq(i),"sumNeedGetMoney"),
				prePayMoney : BookingArrange.getValue(ticketListTr.eq(i),"prePayMoney"),
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
				sumNeedGetMoney : BookingArrange.getValue(busListTr.eq(i),"sumNeedGetMoney"),
				prePayMoney : BookingArrange.getValue(busListTr.eq(i),"prePayMoney"),
				payType : BookingArrange.getValue(busListTr.eq(i),"payType")
			}
			if(busJson.busCompanyId){
				bookingOrder.bookingBusCompanieList.push(busJson);
			}
		})

		//通知财务Id
		bookingOrder.receiveUserIdList = BookingArrange.receiveUserIdList;
		bookingOrder = JSON.stringify(bookingOrder);
		var operation = $that.children().hasClass('T-addBooking') ? 'add' : 'update';
		// 预付款发生改变，请通知财务
		// if(BookingArrange.isPrePayMoney==true && BookingArrange.receiveUserIdList.length == 0){
		// 	showMessageDialog($( "#confirm-dialog-message" ),"预付款发生改变，请通知财务！");
		// 	return;
		// }
		

		console.log(JSON.stringify(bookingOrder));
		BookingArrange.ajax({
			'url' : 'bookingOrder', 
			'method' : 'saveBookingOrder', 
			'menuKey' : menuKey, 
			'operation' : operation, 
			'bookingOrder' : encodeURIComponent(bookingOrder)
		}, function(data){
			showMessageDialog(data.message,function(){
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
		BookingArrange.ajax({'url' : 'bookingOrder', 'method' : 'getBookingOrder', 'menuKey' : menuKey, 'operation' : 'view', 'id' : id}, function(data){
			data.bookingOrder = JSON.parse(data.bookingOrder);
			var html = viewTemplate(data);
			Tools.addTab(menuKey+"-view","查看项目代订",html);
			//导出查看项目代订按钮事件
			$(".updateBooking .T-bookingBtn").on('click', function(){
				BookingArrange.exportBooking(id);
		 	});
		 	//导出查看项目代订按钮事件
			$(".updateBooking .T-viewSettle").on('click', function(){
				var pluginKey = 'plugin_print';
                    Tools.loadPluginScript(pluginKey);
				BookingArrange.viewSettlement(id);
		 	});
		});
	};
	/**
	 * 修改项目代订
	 */
	BookingArrange.update = function(id){
		if(!!id){
			BookingArrange.ajax({
				'url' : 'bookingOrder', 
				'method' : 'getBookingOrder', 
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
	 * 判断预付款是否发生改变
	 */
	 BookingArrange.financialChanged = function($tab){
	 	BookingArrange.$tab.find('.T-prePayMoney').on('change',function(event) {
	 		// BookingArrange.isPrePayMoney = true;
	 	});
	 };

	/**
	 * 取消项目代订
	 */
	BookingArrange.deleteBooking = function(id, $that){
		var $parent = $that.closest('tr');
		var $conDiaMes = $( "#confirm-dialog-message");
		$conDiaMes.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "取消",
					"class" : "btn btn-minier btn-heightMall",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "确定",
					"class" : "btn btn-primary btn-minier btn-heightMall",
					click: function() {
						$( this ).dialog( "close" );
						BookingArrange.ajax({
							'url' : 'bookingOrder',
							'method' : 'deleteBookingOrder',
							'menuKey' : menuKey,
							'operation' : 'delete',
							'cateName' : 'order',
							'id' : id
						}, function(data){
							showMessageDialog(data.message,function(){
								$parent.fadeOut(function(){
									var len = $parent.closest('tbody.T-list').find('tr').length;
									$parent.remove();
									if(len <= 1 && BookingArrange.searchData.pageNo - 1 >=0){
										BookingArrange.listBooking(BookingArrange.searchData.pageNo - 1);
									}
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

		// BookingArrange.deleteBooking = function(id, $that){
		// 	if(!!id){
		// 		showConfirmDialog($("#confirm-dialog-message"),"你确定要删除该项目代订？",function(){
		// 			$.ajax({
		// 					'url' : 'bookingOrder',
	 // 						'method' : 'deleteBookingOrderByIdAndCateName',
	 // 						'menuKey' : menuKey,
	 // 						'operation' : 'delete',
	 // 						'cateName' : 'order',
	 // 						'id' : id	
		// 			}).done(function(data){
		// 				if(showDialog(data)){
		// 					BookingArrange.listBooking(0);
		// 				}
		// 			})
		// 		});
		// 	}
		// }

	/**
	 * 导出项目代订信息
	 * @param  {number} id 需要导出的项目代订信息的ID编号
	 */
	BookingArrange.exportBooking = function(id){
		var url = APP_ROOT+"back/export.do?method=exportBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&id="+id;
		exportXLS(url);
	};
	/**
	 * 代订结算单
	 * 
	 */
	BookingArrange.viewSettlement = function(id){
		$.ajax({
			url:KingServices.build_url('bookingOrder','viewBookingSettlement'),
			type:'POST',
			data:{
				id:id
			},
			success:function(data){
				if(showDialog(data)){
					var html = viewSettlementTemplate(data);
					var viewSettlementLayer = layer.open({
                        type: 1,
                        title:"代订结算单",
                        skin: 'layui-layer-rim',
                        area: '750px', 
                        zIndex:1028,
                        content: html,
                        scrollbar: false,
                        success:function(){
                        	//打印结算单页面
		                    var $outAccountsTab = $("#T-viewSettlement");
		                    $outAccountsTab.off('click').on('click','.T-printBooking',function(){
		                    	console.log(123);
		                        BookingArrange.exportsOutAccounts($outAccountsTab);
		                    });
	                    }
                    });
	                   
				}
			}
		});
	};
	//打印页面
    BookingArrange.exportsOutAccounts = function($obj){
        $obj.print({
            globalStyles:true
        });
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
			var $conDiaMes = $( "#confirm-dialog-message" );
			$conDiaMes.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
							BookingArrange.ajax({
								'url' : 'bookingOrder', 
								'method' : 'deleteBookingOrder',
								'operation': 'delete', 
								'cateName' : $list, 
								'id' : id
							}, function(data){
								showMessageDialog(data.message,function(){
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

	/**
	 * 绑定责任计调的选择
	 * @param  {object} $target 绑定选择的Jquery对象
	 * @return {[type]}         [description]
	 */
	BookingArrange.getOPUserList = function($target){
		return $target.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$target.val('').data("id", "");
				}
			},
			select:function(event,ui){
				var item = ui.item;
				$target.blur().data("id", item.id);
			}
		}).one('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$.ajax({
				url: KingServices.build_url('tripPlan', 'getOPUserList'),
				type: 'post',
			})
			.done(function(data) {
				if (showDialog(data)) {
					if($target.val() == ""){
						$target.val(data.realName).data('id', data.userId)
					}
					
					var userList = JSON.parse(data.userList || false);
					if (!!userList) {
						for (var i = 0, len = userList.length;i < len; i++) {
							userList[i].value = userList[i].realName;
						}

						$target.autocomplete('option', 'source', userList).data('ajax', true);;
					}
				}
			});
		})
		.on('click', function(event) {
			event.preventDefault();
			if ($target.data('ajax')) {
				$target.autocomplete('search', '');
			}
		})
	};

	//检查代订单号重复性
    BookingArrange.bookNumberChange = function($tab) {
        $tab.find('.T-bookNumberChange').on('change', function() {
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url('bookingOrder','validateOrderNumber'),
                type: 'POST',
                showLoading: false,
                data: { bookingOrderNumber: $this.val()}
            })
            .done(function(data) {
                if (data.success == 0) {
                    $this.val('');
                    layer.tips('该代订单号已存在', $this, {
                        tips: [1, '#3595CC'],
                        time: 2000
                    });
                }
            })
        })
    }

	exports.init = BookingArrange.initModule;
	exports.replaceDetail = BookingArrange.viewBooking;
})