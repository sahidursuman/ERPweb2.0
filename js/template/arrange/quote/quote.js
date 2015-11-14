/**
 * 发团管理——报价模块
 *
 * 报价修改、查看、删除、分享操作
 * 显示报价列表
 */
define(function(require, exports) {
	var menukey = "arrange_quote",
		rule = require("./rule"),
		mainQuoteTemplate = require("./view/mainQuote"),
		addQuoteTemplate = require("./view/addQuote"),
		inquiryResultTemplate = require("./view/inquiryResult"),
		busInquiryTemplate = require("./view/busInquiry"),
		busInquiryListTemplate = require("./view/busInquiryList"),
		busInquiryResultTemplate = require("./view/busInquiryResult"),
		hotelInquiryTemplate = require("./view/hotelInquiry"),
		hotelInquiryListTemplate = require("./view/hotelInquiryList"),
		hotelInquiryResultTemplate = require("./view/hotelInquiryResult"),
		busInquiryTemplate = require("./view/busInquiry"),
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list");
	/**
	 * 自定义报价对象
	 * @type {Object}
	 */
	var quote = {
		$tab: false,
		$tabAdd: false

	};
	//初始化报价模块
	quote.initModule = function() {
		quote.listMainQuote();
	};

	//初始化报价搜索模块
	quote.listMainQuote = function() {
		var html = listMainTemplate();
		Tools.addTab(menukey,"报价模块",html);
		quote.$tab = $("#tab-arrange_quote-content");

		quote.listQuote();
	};

	//初始化报价列表
	quote.listQuote = function() {
		var html = listTemplate();
		quote.$tab.find('.T-quoteList').html(html);
	};

	//新增报价
	quote.addQuote = function(id) {
		$.ajax({
			url: KingServices.build_url('lineProduct', 'getLineProductById'),
			type: 'POST',
			data: 'id='+id+'',
			success: function(data){
				var result = showDialog(data);
				if(result){
					data.viewLineProduct = {
							lineProduct: JSON.parse(data.lineProduct),
							busCompanyTemplate: JSON.parse(data.busCompanyTemplate),
							guideTemplate: JSON.parse(data.guideTemplate),
							insuranceTemplate: JSON.parse(data.insuranceTemplate),
							daysList: JSON.parse(data.daysList)
					};
					data.viewLineProduct.editorName = menukey + '-ueditor'
					var html = mainQuoteTemplate();
					Tools.addTab(menukey+'-add',"新增报价",html)
					quote.$tabAdd = $("#tab-arrange_quote-add-content");

					var addHtml = addQuoteTemplate(data.viewLineProduct);
					quote.$tabAdd.find('#quoteContent').html(addHtml)

					var inquiryHtml = inquiryResultTemplate();
					quote.$tabAdd.find('#inquiryContent').html(inquiryHtml)
					var busInquiryResultHtml = busInquiryResultTemplate();
					var hotelInquiryResultHtml = hotelInquiryResultTemplate();

					quote.$tabAdd.find('#busInquiryResult').html(busInquiryResultHtml)
					quote.$tabAdd.find('#hotelInquiryContent').html(hotelInquiryResultHtml)

					quote.init_event(quote.$tabAdd);
				}
			}
		})
	};

	//报价详情页事件绑定
	quote.init_event =function($container) {
		var validator = rule.lineProductCheckor($container);
		//报价计算器
		quote.costCalculation($container)
		$container.on("change",".T-changeQuote",function(){
			quote.costCalculation($container)
		})
		// 初始化富文本插件
		$container.find('.T-daylist').children('.tab-pane').each(function(index, el) {
			init_editor($(this).find('.T-editor').prop('id'));
		});
		//添加具体行程安排相应事件
		$container.find('.T-daylist').on('click', '.T-add', function(event) {
			event.preventDefault();
			var $that = $(this);

			if ($that.hasClass('T-addRestaurant')) {
				// 添加餐厅
				quote.addRestaurant($that, validator);
			} else if ($that.hasClass('T-addHotel')) {
				// 添加酒店
				quote.addResourceHotel($that, validator);
			} else if ($that.hasClass('T-addScenic')) {
				// 添加景区
				quote.addResourceScenic($that, validator);
			} else if ($that.hasClass('T-addShop')) {
				// 添加购物
				quote.addResourceShopping($that, validator);
			} else if ($that.hasClass('T-addSelfPay')) {
				// 添加自费
				quote.addResourceSelfPaying($that, validator);
			} else if ($that.hasClass('T-addTraffic')) {
				// 添加交通
				quote.addResourceTraffic($that, validator);
			}
		})
		.on('click', '.T-delete', quote.deleteLineProductDaysArrange);
		//autocomplete
		var $dayListArea = $container.find('.T-timeline-container');
		quote.bindInsuranceChosen($container.find('.T-insurance-name'), validator);
		quote.bindRestaurantEvent($dayListArea.find('.T-choose-restaurantName'), $dayListArea.find('.T-choose-restaurantStandardsName'));
		quote.bindHotelEvent($dayListArea.find('.T-choose-hotelName'), $dayListArea.find('.T-choose-hotelRoom'), $dayListArea.find('.T-choose-hotelStarLevel'));
		quote.bindScenicEvent($dayListArea.find('.T-choose-scenicName'));
		quote.bindShopEvent($dayListArea.find('.T-choose-shopVendorName'));
		quote.bindSelfPay($dayListArea.find('.T-choose-ticketCompanyName'));
		quote.bindTicketEvent($dayListArea.find('.chooseTicketName'));
		//车辆询价
		$container.find('.car').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			var busInquiryHtml = busInquiryTemplate();
			var busInquiryLayer = layer.open({
			    type: 1,
			    title:"车辆询价",
			    skin: 'layui-layer-rim', //加上边框
			    area: '1190px', //宽高
			    zIndex:1028,
			    content: busInquiryHtml,
			    scrollbar: false,
			    success:function(){
			    	var $busLayerContent = $(".T-busInquiryContainer");
			    	var busInquiryListHtml = busInquiryListTemplate();
			    	$busLayerContent.find('.T-busInquiryList').html(busInquiryListHtml);
			    }
			})
		});
		//酒店询价
		$container.find('.hotel').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			quote.hotelInquiry();
		});
		//保存报价
		$container.find('.T-btn-submit-quote').on('click',function(){
			var id = $container.find('input[name=quoteId]');
			quote.saveQuote(id);
		})
	};
	//酒店询价
	quote.hotelInquiry = function() {
		$.ajax({
			url: KingServices.build_url("hotel","findRoomTypeList"),
			type: 'POST',
			success: function(data){
				var result = showDialog(data);
				if (result) {
					var hotelInquiryHtml = hotelInquiryTemplate(data);
					var hotelInquiryLayer = layer.open({
					    type: 1,
					    title:"酒店询价",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: hotelInquiryHtml,
					    scrollbar: false,
					    success:function(){
					    	var $hotelLayerContent = $(".T-hotelInquiryContainer");
					    	//酒店查询分页
					    	quote.hotelInquiryList(0,$hotelLayerContent);
					    }
					})
				}
			}
		})
	};
	//酒店查询分页
	quote.hotelInquiryList = function(page,$container) {
		$.ajax({
			url: KingServices.build_url("hotel","findHotelByInquiry"),
			type: 'POST',
			data: {param1: 'value1'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
    	var hotelInquiryListHtml = hotelInquiryListTemplate();
    	$hotelLayerContent.find('.T-hotelInquiryList').html(hotelInquiryListHtml);
	};
	//保险选择
	quote.bindInsuranceChosen = function($input, validator) {
		if (!$input || !$input.length) {
			console.error('绑定保险的autocomplete，主体Dom为空!');
			return;
		}
		$input.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=insuranceId]").val("");
					$tr.find("input[name=type]").val("");
					$tr.find("input[name=price]").val("");
					$tr.find("input[name=telNumber]").val("");
					$tr.find("input[name=managerName]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					quote.costCalculation(quote.$tabAdd)
				}

				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
			},
			select:function(event,ui){
				var $that = $(this).blur();
				$.ajax({
					url: KingServices.build_url('insurance', 'getInsuranceById'),
					data:"id="+ui.item.id,
					showLoading:false,
					success: function(data) {
						var result = showDialog(data),$tr = $that.closest('tr');
						if(result){
							var insurance = JSON.parse(data.insurance), $tr = $that.closest('tr');
							$tr.find("input[name=insuranceId]").val(insurance.id).trigger('change');
							$tr.find("input[name=telNumber]").val(insurance.telNumber);
							$tr.find("input[name=managerName]").val(insurance.managerName);
							$tr.find("input[name=mobileNumber]").val(insurance.telNumber);
							quote.costCalculation(quote.$tabAdd)

							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
						}
					}
				});
			}
		}).click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('insurance', 'findAll'),
				showLoading:false,
				success: function(data) {
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
	};
	//添加餐厅
	quote.addRestaurant = function($btn, validator){
		//添加行程安排餐饮
		var scheduleDetails = '<div class="T-timeline-item timeline-item clearfix updateRestaurantList updateLineProductDaysDetail T-RestaurantList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info " style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span>餐饮</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th  class="th-border">餐厅名称</th><th class="th-border">餐厅电话</th><th class="th-border">用餐类型</th><th class="th-border">餐标</th>	<th class="th-border">菜单</th><th  class="th-border">备注</th>	<th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseRestaurantName bind-change"/><input type="hidden" name="restaurantId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><select name="type" class="col-xs-12 restauranType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>'+
		'<td><input type="text" name="price" class="col-xs-12 restaurantStandardsName bind-change T-changeQuote"/><input type="hidden" name="typeId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="menuList"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td><td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除 </a></td></tr>'+
		'</tbody></table></div></div></div></div>';

		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(scheduleDetails);
		quote.updateLineProductIndex += 1;

		$(".updateRestaurantList .restauranType").on("change", function(){
			var typeParent = $(this).parent().parent();
			typeParent.find("input[name=typeName]").val("");
			typeParent.find("input[name=menuList]").val("");
			typeParent.find("input[name=pricePerPerson]").val("");
			typeParent.find("input[name=remark]").val("");
			quote.costCalculation(quote.$tabAdd)
		});
		
		quote.bindRestaurantEvent($(".updateRestaurantList .chooseRestaurantName"), $(".updateRestaurantList .restaurantStandardsName"), validator);
		
		
		
	};
		
	quote.bindRestaurantEvent = function( obj, typeObj, validator) {
		//绑定选择餐厅名称事件
		obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=restaurantId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=payType]").val("");
					$tr.find("input[name=menuList]").val("");
					$tr.find("input[name=pricePerPerson]").val("");
					$tr.find("input[name=price]").val("");
					$tr.find("input[name=typeId]").val("");
					quote.costCalculation(quote.$tabAdd)
				}

				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
			},
			select:function(event,ui){
				var $tr = $(this).closest('tr'), restaurantNameId=ui.item.id;
				$tr.find("input[name=restaurantId]").val(restaurantNameId).trigger('change');
				$tr.find("input[name=typeName]").val("");
				$tr.find("input[name=menuList]").val("");
				$tr.find("input[name=pricePerPerson]").val("");
				$tr.find("input[name=price]").val("");
				$tr.find("input[name=typeId]").val("");
				quote.costCalculation(quote.$tabAdd)
				
				$.ajax({
					url: KingServices.build_url('restaurant', 'findRestaurantById'),
                    data:"id="+restaurantNameId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var restaurant = JSON.parse(data.restaurant);
							$tr.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
							//objParent.find("input[name=payType]").val(restaurant.payType == 0? "现付" : "账期" + (restaurant.payPeriod ? "(" + restaurant.payPeriod.month + "个月)" : "" ));

							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
						}
                    }
				})
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('restaurant', 'findAll'),
				showLoading:false,
                success: function(data) {
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
		
		//为餐标名称绑定事件
		typeObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=pricePerPerson]").val("");
					$tr.find("input[name=menuList]").val("");
					$tr.find("input[name=typeId]").val("");
					quote.costCalculation(quote.$tabAdd)
				}
			},select:function(event,ui){
				var objEatName = this;
				var objParent = $(objEatName).parent().parent();
				objParent.find("input[name=typeId]").val(ui.item.id);
				$.ajax({
					url: KingServices.build_url('restaurant', 'findStandardDetailById'),
                    data:"id="+ui.item.id,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var restaurantStandard = JSON.parse(data.restaurantStandard);
							
							objParent.find("input[name=menuList]").val(restaurantStandard.menuList);
							quote.costCalculation(quote.$tabAdd)
						}
                    }
				});
			}
		}).unbind("click").click(function(){
			var objEat = this,
			eatType = $(objEat).parent().parent().find("[name=type]").val(),
			restaurantNameId = $(objEat).parent().parent().find("[name=restaurantId]").val();
			$.ajax({
                url: KingServices.build_url('restaurant', 'getRestaurantStandardByType'),
                data:"restaurantId="+restaurantNameId+"&type="+eatType,
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var restaurantStandardList = data.restaurantStandardList;
						if(restaurantStandardList && restaurantStandardList.length > 0){
							for(var i=0; i<restaurantStandardList.length; i++){
								restaurantStandardList[i].value = restaurantStandardList[i].price;
							}

							$(objEat).autocomplete('option','source', restaurantStandardList);
							$(objEat).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', objEat, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
			});
		});
		
		
	};
	//添加酒店
	quote.addResourceHotel = function($btn, validator){
		//添加行程安排酒店
		var hotelDetails = '<div class="T-timeline-item timeline-item clearfix updateHotelList updateLineProductDaysDetail T-resourceHotelList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info"  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >酒店</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th  class="th-border">酒店星级</th><th  class="th-border">酒店名称</th><th class="th-border">房型</th><th class="th-border">价格</th><th class="th-border">数量</th><th class="th-border">含餐</th><th class="th-border">电话</th><th class="th-border">备注</th><th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
		'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" readonly="readonly" name="contractPrice" style="width:70px;"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" name="count" style="width:70px;"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除 </a></td></tr></tbody></table></div></div></div></div>';

		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(hotelDetails);
		quote.updateLineProductIndex += 1;
		//绑定选择酒店名称事件
		quote.bindHotelEvent($(".updateHotelList .chooseHotelName"), $(".updateHotelList .chooseHotelRoom"), $(".updateHotelList .resourceHotelStar"), validator)
	};
	quote.bindHotelEvent = function(obj, typeObj, selObj, validator){
		var $hotelStar = selObj;
		$hotelStar.on("change", function(){
			var parentObj = $(this).closest('tr');
			parentObj.find("input[name=hotelNmae]").val("");
			parentObj.find("input[name=hotelId]").val("");
			parentObj.find("input[name=hotelRoom]").val("");
			parentObj.find("input[name=hotelRoomId]").val("");
			parentObj.find("input[name=contractPrice]").val("");
			parentObj.find("input[name=containBreakfast]").val("");
			parentObj.find("input[name=mobileNumber]").val("");
			parentObj.find("input[name=payType]").val("");
			quote.costCalculation(quote.$tabAdd)
		});
		obj.autocomplete({
			minLength:0,
			select:function(event,ui){
				var $tr = $(this).closest('tr'), hotelDataId = ui.item.id;

				$tr.find("input[name=hotelId]").val(hotelDataId).trigger('change');	
				$tr.find("input[name=hotelRoom]").val("");
				$tr.find("input[name=hotelRoomId]").val("");					
				$tr.find("input[name=contractPrice]").val("");
				$tr.find("input[name=containBreakfast]").val("");
				quote.costCalculation(quote.$tabAdd)
				
				$.ajax({
                    url: KingServices.build_url('hotel', 'getHotelById'),
                    data:"id=" + hotelDataId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var hotel = JSON.parse(data.hotel);
							$tr.find("input[name=mobileNumber]").val(hotel.mobileNumber);
							//objParent.find("input[name=payType]").val(hotel.payType == 0? "现付" : "账期" + (hotel.payPeriod ? "(" + hotel.payPeriod.month + "个月)" : "" ));
							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
						}
                    }
				});
				
			},
			change:function(event, ui){
				if(ui.item == null){
					$(this).val("");
					var objParent = $(this).closest('tr');
					objParent.find("input[name=hotelId]").val("");
					objParent.find("input[name=hotelRoomId]").val("");
					objParent.find("input[name=contractPrice]").val("");
					objParent.find("input[name=containBreakfast]").val("");
					objParent.find("input[name=hotelRoom]").val("");
					objParent.find("input[name=mobileNumber]").val("");
					objParent.find("input[name=payType]").val("");
					quote.costCalculation(quote.$tabAdd)

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var hotelStarValue = $hotelStar.val(),
			    obj = this;
			$.ajax({
                url: KingServices.build_url('hotel', 'findHotelListByLevel'),
                data:"level=" + hotelStarValue,
                showLoading:false,
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
							layer.tips('没有内容。', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
		
		
		typeObj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var $tr = $(this).closest('tr');
				$tr.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('hotel', 'findRoomDetailById'),
                    data:"id=" + ui.item.id,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var hotelRoom = JSON.parse(data.hotelRoom);

							$tr.find("input[name=contractPrice]").val(hotelRoom.contractPrice);
							$tr.find("input[name=containBreakfast]").val(hotelRoom.containBreakfast == "0" ? "不含" : "包含");
							quote.costCalculation(quote.$tabAdd)
						}
                    }
				})
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=hotelRoomId]").val("");
					$tr.find("input[name=contractPrice]").val("");
					$tr.find("input[name=containBreakfast]").val("");
					quote.costCalculation(quote.$tabAdd)
				}
			}
		}).unbind("click").click(function(){
			var objhotelRoom = this;
			if($(objhotelRoom).parent().parent().find("input[name=hotelNmae]").val() == ""){
				layer.tips('请先选择酒店名称。', objhotelRoom, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
				return false;
			}
			var hotelDataId = $(objhotelRoom).parent().parent().find("input[name=hotelId]").val()
			$.ajax({
                url: KingServices.build_url('hotel', 'findTypeByHotelId'),
                data:"id=" + hotelDataId,
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var hotelRommList = JSON.parse(data.hotelRommList);
						if(hotelRommList && hotelRommList.length > 0){
							for(var i=0; i < hotelRommList.length; i++){
								hotelRommList[i].value = hotelRommList[i].type;
							}
							$(objhotelRoom).autocomplete('option','source', hotelRommList);
							$(objhotelRoom).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', objhotelRoom, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
		
		
	};
	//添加景区
	quote.addResourceScenic = function($btn, validator){
		//添加行程安排景区
		var scenicDetails = '<div class="T-timeline-item timeline-item clearfix updateScenicList updateLineProductDaysDetail T-resourceScenicList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info"  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >景区</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">景区名称</th><th class="th-border">收费项目</th><th class="th-border">景区价格</th><th class="th-border">联系电话</th><th class="th-border">备注</th><th style="width: 60px;"  class="th-border">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseScenicName bind-change"/><input type="hidden" name="scenicId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseChargingProjects bind-change" name="chargingProjects"/><input type="hidden" name="chargingId"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" readonly="readonly" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(scenicDetails);
		quote.updateLineProductIndex += 1;
		
		//绑定选择景区名称事件
		quote.bindScenicEvent($(".updateScenicList .chooseScenicName"), validator);
	},
	quote.bindScenicEvent = function(obj, validator){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var obj = this,
				    objParent = $(obj).parent().parent(),
				    scenicNameId = ui.item.id;
				objParent.find("input[name=scenicId]").val(scenicNameId).trigger('change');
				objParent.find("input[name=chargingProjects]").val("");
				objParent.find("input[name=chargingId]").val("");
				quote.costCalculation(quote.$tabAdd)
				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
				
				$.ajax({
                    url: KingServices.build_url('scenic', 'getScenicById'),
                    data: "id="+scenicNameId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var scenic = JSON.parse(data.scenic);
							objParent.find("input[name=mobileNumber]").val(scenic.mobileNumber);
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=scenicId]").val("");
					$tr.find("input[name=chargingProjects]").val("");
					$tr.find("input[name=chargingId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=price]").val("");
					quote.costCalculation(quote.$tabAdd)
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
                url: KingServices.build_url('scenic', 'findAll'),
                showLoading:false,
                success: function(data) {
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
		
		var objParent = $(obj).parent().parent();
		objParent.find(".chooseChargingProjects").autocomplete({
			minLength:0,
			select:function(event, nameUi){
				var nameUiId = nameUi.item.id, _this = this;
				var thisParent = $(_this).parent().parent();
				thisParent.find("input[name=chargingId]").val(nameUiId).trigger('change');
				
				$.ajax({
                    url: KingServices.build_url('scenic', 'findItemDetailById'),
                    data: "id="+nameUiId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var scenicItem = JSON.parse(data.scenicItem);

							thisParent.find("input[name=price]").val(scenicItem.contractPrice);
							quote.costCalculation(quote.$tabAdd)
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					$(this).val("");
					var thisParent = $(this).parent().parent();
					thisParent.find("input[name=chargingId]").val("");
					thisParent.find("input[name=price]").val("");
					quote.costCalculation(quote.$tabAdd)
				}
			}
		}).unbind("click").click(function(){
			var scenicObj = this;
			
			if($(scenicObj).parent().parent().find(".chooseScenicName").val() == ""){
				layer.tips('请先选景区名称。', scenicObj, {
				    tips: [1, '#3595CC'],
				    time: 1500
				});
				return false;
			}
			var scenicNameId = $(scenicObj).parent().parent().find("input[name=scenicId]").val();
			$.ajax({
                url: KingServices.build_url('scenic', 'findItemByScenicId'),
                data: "id="+scenicNameId,
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var scenicItemList = JSON.parse(data.scenicItemList);
						if(scenicItemList && scenicItemList.length > 0){
							for(var i=0; i < scenicItemList.length; i++){
								scenicItemList[i].value = scenicItemList[i].name;
							}
							$(scenicObj).autocomplete('option','source', scenicItemList);
							$(scenicObj).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', scenicObj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
                }
            });
		});
		
		
	};
	//添加购物
	quote.addResourceShopping = function($btn, validator){
		//添加行程安排购物
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateShoppingList updateLineProductDaysDetail T-resourceShoppingList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info "  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span>购物</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">商家名称</th><th class="th-border">商品政策</th><th class="th-border">联系电话</th><th class="th-border">停车返佣</th><th class="th-border">人数返佣</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseVendorName bind-change"/><input type="hidden" name="shopId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseGoodsPolicy bind-change" name="goodsPolicy"/><input type="hidden" name="shopPolicyId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="parkingRebateMoney"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="customerRebateMoney"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除 </a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(shoppingDetails);
		quote.updateLineProductIndex += 1;
		
		//绑定选择商家名称事件
		quote.bindShopEvent($(".updateShoppingList .chooseVendorName"), validator);
	};
	quote.bindShopEvent = function(obj, validator){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var $tr = $(this).closest('tr'),
				    vendorNameId = ui.item.id,
					policyParent = $(obj).parent().parent();
				    policyParent.find("input[name=shopId]").val(vendorNameId).trigger('change');

			    // 更新表单验证的配置
			    validator = rule.lineProductUpdate(validator);

				$.ajax({
                    url: KingServices.build_url('shop', 'getShopById'),
                    data: "id="+vendorNameId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var shop = JSON.parse(data.shop);
							$tr.find("input[name=mobileNumber]").val(shop.mobileNumber);
							$tr.find("input[name=customerRebateMoney]").val(shop.customerRebateMoney);
							$tr.find("input[name=parkingRebateMoney]").val(shop.parkingRebateMoney);
							$tr.find("input[name=goodsPolicy]").val("");
							$tr.find("input[name=shopPolicyId]").val("");
						}
                    }
                });
				
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=shopId]").val("");
					$tr.find("input[name=goodsPolicy]").val("");
					$tr.find("input[name=shopPolicyId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=guideRate]").val("");
					$tr.find("input[name=travelAgencyRate]").val("");
					$tr.find("input[name=parkingRebateMoney]").val("");
					$tr.find("input[name=customerRebateMoney]").val("");

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
                url: KingServices.build_url('shop', 'findAll'),
                showLoading:false,
                success: function(data) {
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
		
		
		var objParent = $(obj).parent().parent();
		objParent.find(".chooseGoodsPolicy").autocomplete({
			minLength:0,
			select:function(event, nameUi){
				var nameUiId = nameUi.item.id;
				$(this).closest('tr').find("input[name=shopPolicyId]").val(nameUiId).trigger('change');
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=shopPolicyId]").val("");
					$tr.find("input[name=parkingRebateMoney]").val("");
					$tr.find("input[name=customerRebateMoney]").val("");
				}
			}
		}).unbind("click").click(function(){
			var shopObj = this;
			
			if($(shopObj).parent().parent().find(".chooseScenicName").val() == ""){
				layer.tips('请先选商家名称。', shopObj, {
				    tips: [1, '#3595CC'],
				    time: 1500
				});
				return false;
			}
			var vendorNameId = $(shopObj).parent().parent().find("input[name=shopId]").val();
			$.ajax({
                url: KingServices.build_url('shop', 'findPolicyByShopId'),
                data: "id="+vendorNameId,
                showLoading:false,
                success: function(data) {
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
		
		
	};
	
	//添加自费
	quote.addResourceSelfPaying = function($btn, validator){
		//添加行程安排自费
		var selfPayingDetails = '<div class="T-timeline-item timeline-item clearfix updateSelfPayList updateLineProductDaysDetail T-resourceSelfPayList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >自费</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">公司名称</th><th class="th-border">项目名称</th><th class="th-border">联系电话</th><th class="th-border">价格</th><th class="th-border">负责人</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseCompanyName bind-change"/><input type="hidden" name="companyId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseItemName bind-change" name="selfPayItemName"/><input type="hidden" name="selfPayItemId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" readonly="readonly" name="contractPrice"/><input type="hidden" class="col-xs-12" readonly="readonly" name="marketPrice"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(selfPayingDetails);
		quote.updateLineProductIndex += 1;
		
		//绑定选择自费名称事件
		quote.bindSelfPay($(".updateSelfPayList .chooseCompanyName"), validator);
		
	};
	
	quote.bindSelfPay = function(obj, validator){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var $tr = $(this).closest('tr');
				$.ajax({
                    url: KingServices.build_url('selfpay', 'getSelfPayById'),
                    data: "id="+ui.item.id,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var selfpay = JSON.parse(data.selfpay) || {};
							
							$tr.find("input[name=companyId]").val(ui.item.id).trigger('change');
							$tr.find("input[name=mobileNumber]").val(selfpay.mobileNumber);
							$tr.find("input[name=managerName]").val(selfpay.managerName);
							$tr.find("input[name=selfPayItemName]").val("");
							$tr.find("input[name=selfPayItemId]").val("");
							quote.costCalculation(quote.$tabAdd)

							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
							//var SelfPayRebateList=JSON.parse(data.SelfPayRebateList);
							//thisParent.find("input[name=contractPrice]").val(SelfPayRebateList.price);
							
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=companyId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=contractPrice]").val("");
					$tr.find("input[name=marketPrice]").val("");
					$tr.find("input[name=managerName]").val("");
					$tr.find("input[name=selfPayItemName]").val("");
					$tr.find("input[name=selfPayItemId]").val("");
					quote.costCalculation(quote.$tabAdd)

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('selfpay', 'findAll'),
				showLoading:false,
				success:function(data){
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
			})
		});
		
		
		var objItem = $(obj).parent().parent().find(".chooseItemName");
		objItem.autocomplete({
			minLength:0,
			select:function(event, ui){
				var $tr = $(this).closest('tr');
				$.ajax({
                    url: KingServices.build_url('selfpay', 'findSelfPayRebateByItemId'),
                    data: "id="+ui.item.id,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var selfPayRebate = JSON.parse(data.selfPayRebate); 
							$tr.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
							$tr.find("input[name=contractPrice]").val(selfPayRebate.price);
							$tr.find("input[name=marketPrice]").val(selfPayRebate.marketPrice);
							quote.costCalculation(quote.$tabAdd)
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=companyId]").val("");
					$tr.find("input[name=selfPayItemId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=contractPrice]").val("");
					$tr.find("input[name=managerName]").val("");
					quote.costCalculation(quote.$tabAdd)
				}
			}
		}).unbind("click").click(function(){
			var obj = this;
			var chooseCompanyNameId=$(obj).parent().parent().find("input[name='companyId']").val();
			$.ajax({
				url: KingServices.build_url('selfpay', 'findSelfPayItemBySelfPayId'),
				data:"id="+chooseCompanyNameId,
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var selfPayItemList = JSON.parse(data.selfPayItemList); 

						if(selfPayItemList && selfPayItemList.length > 0){
							for(var i=0; i < selfPayItemList.length; i++){
								
								selfPayItemList[i].value = selfPayItemList[i].name;
							}
							$(obj).autocomplete('option','source', selfPayItemList);
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
		
		
	};
	//添加交通
	quote.addResourceTraffic = function($btn, validator){
		//添加行程安排交通
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateTicketList updateLineProductDaysDetail T-resourceTicketList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >交通</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">票务公司名称</th><th class="th-border">类型</th><th class="th-border">座位级别</th><th class="th-border">单价</th><th class="th-border">数量</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
		'<td><select name="type" class="col-xs-12 form-control" style="font-size: 12px !important;"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
		'<td><input type="text" class="col-xs-12" name="seatLevel"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" name="count"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(shoppingDetails);
		quote.updateLineProductIndex += 1;
		
		//绑定选择自费名称事件
		quote.bindTicketEvent($(".updateTicketList .chooseTicketName"), validator);
	};
	quote.bindTicketEvent = function(obj, validator){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var $tr = $(this).closest('tr');
				$.ajax({
                    url: KingServices.build_url('ticket', 'findTicketById'),
                    data: "id="+ui.item.id,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var ticket = JSON.parse(data.ticket) || {};
							$tr.find("input[name=tickeId]").val(ui.item.id).trigger('change');
							$tr.find("select[name=type]").val(ui.item.type  || 1);
							$tr.find("input[name=managerName]").val(ticket.managerName);
							$tr.find("input[name=mobileNumber]").val(ticket.mobileNumber);
							$tr.find("input[name=telNumber]").val(ticket.telNumber);
							quote.costCalculation(quote.$tabAdd)

							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=tickeId]").val("");
					$tr.find("select[name=type]").val(1);
					$tr.find("input[name=price]").val("");
					$tr.find("input[name=managerName]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=telNumber]").val("");
					quote.costCalculation(quote.$tabAdd)

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('ticket', 'findAll'),
				showLoading:false,
				success:function(data){
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
	};
	//删除日程安排
	quote.deleteLineProductDaysArrange = function(){
		var dialogObj = $( "#confirm-dialog-message" ), $obj = $(this);

		if (!!$obj.data("entity-id")) {
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
							var id = $obj.data("entity-id"), objParents = $obj.closest('.T-timeline-item'), 
							    name = $obj.data("entity-name"),
							    templateJsonDel = {name:name, id:id + ""};
							
							$.ajax({
								url: KingServices.build_url('lineProduct', 'deleteLineProductArrangeTemplate'),
								type:"POST",
								showLoading:false,
								data:"templateJsonDel="+encodeURIComponent(JSON.stringify(templateJsonDel)),
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){	
										var index = objParents.index();									
										$(".T-timeline-item").eq(index).remove();
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
			$obj.closest('.T-timeline-item').remove();
			quote.updateRouteIndex($obj.closest('.T-updateLineProductContainer'));
		}
	};
	/**
	 * 更新安排的序号
	 * @return {[type]} [description]
	 */
	quote.updateRouteIndex = function($tab) {
		quote.updateLineProductIndex -= 1;
		var itemList = quote.$tabAdd.find(".T-timeline-item");
		for(var i=0; i<itemList.length; i++){
			itemList.eq(i).attr("data-entity-index", i);
		}
	};
	/**
	 * 成本计算
	 * @return {[type]} [description]
	 */
	quote.costCalculation = function($container) {
		var adultCost = 0,//大人成本
			childCost = 0,//小孩成本
			insurancePrice = 0,//保险价格
			seatCountPrice = 0,//车座价格
			scenicPrice = 0,//景区价格
			restaurantPrice = 0,//餐厅价格
			ticketPrice = 0,//票务价格
			selfpayPrice = 0,//自费价格
			hotelPrice = 0,//酒店价格
			guidePrice = 0,//导服费
			allCost = 0,//总成本
			oneRoomCost = 0,//单房差成本
			isChildNeedBed = 0,//小孩是否占床   0不占  1占
			isIncludeSelfpay = 0,//是否包含自费   0不含  1含
			isIncludeGuideFee = 0,//是否包含导服费  0不含  1含
			adultCount = 0,//大人数量
			childCount = 0,//小孩数量
			hotelCount = 0,//房间数量
			ticketCount = 0,//票务数量
			adultQuote = 0,//大人报价
			childQuote = 0,//小孩报价
			allQuote = 0,//总报价
			grossProfit = 0,//毛利预估
			oneRoomQuote = 0;//单房差报价

		insurancePrice = $container.find('.arrangeInsuranceList [name=price]').val()-0 || 0;
		seatCountPrice = $container.find('.arrangeBusCompanyList [name=seatcountPrice]').val()-0 || 0;
		guidePrice = $container.find('.arrangeGuideList [name=guideFee]').val()-0 || 0;
		adultCount = $container.find('[name=adultCount]').val()-0 || 0;
		childCount = $container.find('[name=childCount]').val()-0 || 0;
		var scenicPriceArray = $container.find('.T-resourceScenicList [name=price]');
		for (var i = 0,len = scenicPriceArray.length; i < len; i++) {
			var value = scenicPriceArray.eq(i).val()-0 || 0;
			scenicPrice += (value-0);
		}
		var restaurantPriceArray = $container.find('.T-RestaurantList [name=price]');
		for (var i = 0,len = restaurantPriceArray.length; i < len; i++) {
			var value = restaurantPriceArray.eq(i).val()-0 || 0;
			restaurantPrice += (value-0);
		}
		var ticketPriceArray = $container.find('.T-resourceTicketList tbody tr');
		for (var i = 0,len = ticketPriceArray.length; i < len; i++) {
			var price = ticketPriceArray.eq(i).find('[name=price]').val()-0 || 0;
			var count = ticketPriceArray.eq(i).find('[name=count]').val()-0 || 0;
			ticketCount += count;
			ticketPrice += price*count;
		}
		var selfpayPriceArray = $container.find('.T-resourceSelfPayList [name=contractPrice]');
		for (var i = 0,len = selfpayPriceArray.length; i < len; i++) {
			var value = selfpayPriceArray.eq(i).val()-0 || 0;
			selfpayPrice += (value-0);
		}
		var hotelPriceArray = $container.find('.T-resourceHotelList tbody tr');
		for (var i = 0,len =hotelPriceArray.length; i < len; i++) {
			var price = hotelPriceArray.eq(i).find('[name=contractPrice]').val()-0 || 0;
			var count = hotelPriceArray.eq(i).find('[name=count]').val()-0 || 0;
			hotelCount += count;
			hotelPrice += price*count;
		}
		var ticketAverage = ticketPrice/ticketCount;
		if (ticketCount == 0) {
			ticketAverage = 0;
		}
		adultCost = insurancePrice + seatCountPrice + scenicPrice + restaurantPrice + ticketAverage;
		childCost = insurancePrice + seatCountPrice + restaurantPrice/2 + ticketAverage/2;
		

		if ($container.find('.T-isChooseService [name=childNeedBed]').prop('checked')) {
			var hotelAverage = hotelPrice/(adultCount+childCount);
			if ((adultCount+childCount) == 0) {
				hotelAverage = 0;
			}
			adultCost += hotelAverage;
			childCost += hotelAverage;
		}else{
			var hotelAverage = hotelPrice/adultCount;
			if (adultCount == 0) {
				hotelAverage = 0;
			}
			adultCost += hotelAverage;
		}
		if ($container.find('.T-isChooseService [name=includeSelfpay]').prop('checked')) {
			adultCost += selfpayPrice;
			childCost += selfpayPrice;
		}
		if ($container.find('.T-isChooseService [name=includeGuideFee]').prop('checked')) {
			var guideAverage = guidePrice/(adultCount+childCount);
			if ((adultCount+childCount) == 0) {
				guideAverage = 0;
			}
			adultCost += guideAverage;
			childCost += guideAverage;
		}
		oneRoomCost = hotelPrice/hotelCount/2;
		if (hotelCount == 0) {
			oneRoomCost = 0;
		}
		allCost = adultCost*adultCount + childCost*childCount;
		$container.find(".T-adultCost").text((adultCost).toFixed(2));
		$container.find(".T-childCost").text((childCost).toFixed(2));
		$container.find(".T-allCost").text((allCost).toFixed(2));
		$container.find(".T-oneRoomCost").text((oneRoomCost).toFixed(2));

		var selectAmAdult = $container.find('.T-quoteMath [name=selectAmAdult]').val();
		var selectAmChild = $container.find('.T-quoteMath [name=selectAmChild]').val();
		var selectAmOneRoom = $container.find('.T-quoteMath [name=selectAmOneRoom]').val();
		var adultAm = $container.find('.T-adultAmplitude').val()-0 || 0;
		var childAm = $container.find('.T-childAmplitude').val()-0 || 0;
		var oneRoomAm = $container.find('.T-oneRoomAmplitude').val()-0 || 0;
		if (selectAmAdult == 0) {
			adultQuote = adultCost + adultAm;
		}else if (selectAmAdult == 1) {
			adultQuote = adultCost * adultAm;
		}
		if (selectAmChild == 0) {
			childQuote = childCost + childAm;
		}else if (selectAmChild == 1) {
			childQuote = childCost * childAm;
		}
		if (selectAmOneRoom == 0) {
			oneRoomQuote = oneRoomCost + oneRoomAm;
		}else if (selectAmOneRoom == 1) {
			oneRoomQuote = oneRoomCost * oneRoomAm;
		}
		allQuote = adultQuote*adultCount + childQuote*childCount;
		grossProfit = allQuote - allCost;
		$container.find('.T-adultQuote').val((adultQuote).toFixed(2))
		$container.find('.T-childQuote').val((childQuote).toFixed(2))
		$container.find('.T-oneRoomQuote').val((oneRoomQuote).toFixed(2))
		$container.find('.T-allQuote').val((allQuote).toFixed(2))
		$container.find('.T-grossProfit').text((grossProfit).toFixed(2))
	};
	/**
	 * 报价保存
	 * @param  {[type]} id [报价ID]
	 * @return {[type]}    [description]
	 */
	quote.saveQuote = function(id) {
		var quoteJson = {
			adultAdjustType: quote.getValue(quote.$tabAdd,'selectAmAdult'),
			adultAdjustValue: quote.getValue(quote.$tabAdd,'adultAdjustValue'),
			adultCostPrice: quote.$tabAdd.find('.T-adultCost').text(),
			adultCount: quote.getValue(quote.$tabAdd,'adultCount'),
			adultQuotePrice: quote.getValue(quote.$tabAdd,'adultQuotePrice'),
			childAdjustType: quote.getValue(quote.$tabAdd,'selectAmChild'),
			childAdjustValue: quote.getValue(quote.$tabAdd,'selectAmAdult'),
			childCostPrice: quote.$tabAdd.find('.T-childCost').text(),
			childCount: quote.getValue(quote.$tabAdd,'childCount'),
			childQuotePrice: quote.getValue(quote.$tabAdd,'childQuotePrice'),
			days: quote.$tabAdd.find('[name=days]').attr("value"),
			lineProductId: quote.getValue(quote.$tabAdd,'lineProductId'),
			partnerAgencyId: quote.getValue(quote.$tabAdd,'partnerAgencyId'),
			singleRoomAdjustType: quote.getValue(quote.$tabAdd,'selectAmOneRoom'),
			singleRoomAdjustValue: quote.getValue(quote.$tabAdd,'singleRoomAdjustValue'),
			singleRoomCostPrice: quote.$tabAdd.find('.T-oneRoomCost').text(),
			singleRoomCount: quote.getValue(quote.$tabAdd,'singleRoomCount'),
			singleRoomQuotePrice: quote.getValue(quote.$tabAdd,'singleRoomQuotePrice'),
			startTime: quote.getValue(quote.$tabAdd,'startTime'),
			sumCostFee: quote.$tabAdd.find('.T-allCost').text(),
			sumQuoteFee: quote.getValue(quote.$tabAdd,'sumQuoteFee'),
			grossProfit: quote.$tabAdd.find('.T-grossProfit').text()
		}
		var busList = quote.$tabAdd.find('.T-arrangeBusCompanyList');
		var guideList = quote.$tabAdd.find('.T-arrangeGuideList');
		var insuranceList = quote.$tabAdd.find('.T-arrangeInsuranceList');
		var saveJson = {
			busCompany: {
				brand: quote.getValue(busList,'brand'),
				busCompanyId: quote.getValue(busList,'busCompanyId'),
				needSeatCount: quote.getValue(busList,'needSeatCount'),
				price: quote.getValue(busList,'seatcountPrice'),
				remark: quote.getValue(busList,'remark')
			},
			guide: {
				price: quote.getValue(guideList,'guideFee'),
				remark: quote.getValue(guideList,'remark')
			},
			insurance: {
				insuranceId: quote.getValue(insuranceList,'insuranceId'),
				price: quote.getValue(insuranceList,'price'),
				remark: quote.getValue(insuranceList,'remark'),
				type: quote.getValue(insuranceList,'type')
			},
			lineDayList: []
		}

		quote.$tabAdd.find(".T-dailyArrangeList").each(function(index, el) { // 获取每天的数据
			var $that = $(this), $list, $item;

			saveJson.lineDayList[index] = {
				//detailEditor : encodeURIComponent(UE.getEditor($that.find('.T-editor').prop('id')).getContent()),
				restaurant : [],
				hotel : [],
				scenic : [],
				shop : [],
				selfPay : [],
				ticket : []
			}
			//获取餐饮
			$list= $that.find(".T-RestaurantList");
			if($list.length > 0){
				for(var j = 0; j < $list.length; j++){
					$item = $list.eq(j);

					var restaurantId = $item.find("input[name=restaurantId]").val();
					if(restaurantId){
						var standardId = $item.find("[name=typeId]").val();
						if(!standardId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择餐标名称！");
							return false;
						}
						var restaurantJson = {
							id : $item.find("[name=templateId]").val(),
							restaurantId : restaurantId,
							standardId : standardId,
							price : $item.find("[name=price]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].restaurant.push(restaurantJson);
					}
				}
			}
			//获取酒店
			$list = $that.find(".T-resourceHotelList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var hotelId = $item.find("input[name=hotelId]").val();
					if(hotelId){
						var hotelRoomId = $item.find("[name=hotelRoomId]").val();
						if(!hotelRoomId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择房型！");
							return false;
						}
						var hotelJson = {
							id : $item.find("[name=templateId]").val(),
							hotelId : hotelId,
							hotelRoomId : hotelRoomId,
							price : $item.find("[name=contractPrice]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].hotel.push(hotelJson)
					}
				}
			}
			//获取景区
			$list = $that.find(".T-resourceScenicList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var scenicId = $item.find("[name=scenicId]").val();
					if(scenicId){
						var itemId = $item.find("[name=chargingId]").val();
						if(!itemId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择收费房型！");
							return false;
						}
						var scenicJson= {
							id : $item.find("[name=templateId]").val(),
							scenicId : scenicId,
							itemId : itemId,
							price : $item.find("[name=price]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].scenic.push(scenicJson);
					}
					
				}
			}
			//获取购物
			$list = $that.find(".T-resourceShoppingList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);

					var shopId = $item.find("[name=shopId]").val();
					if(shopId){
						var policyId = $item.find("[name=shopPolicyId]").val();
						if(!policyId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择商品政策！");
							return false;
						}
						var shopJson = {
							id : $item.find("[name=templateId]").val(),
							shopId : shopId,
							policyId : policyId,
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].shop.push(shopJson);
					}
				}
			}
			//获取自费
			$list = $that.find(".T-resourceSelfPayList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var selfPayId = $item.find("[name=companyId]").val();
					if(selfPayId){
						var selfPayJson = {
							id : $item.find("[name=templateId]").val(),
							selfPayItemId :$item.find("[name=selfPayItemId]").val(),
							selfPayId : selfPayId,
							price : $item.find("[name=contractPrice]").val(),
							marketPrice : $item.find("[name=marketPrice]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].selfPay.push(selfPayJson);
					}
					
				}
			}
			//获取交通
			$list = $that.find(".T-resourceTicketList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var ticketId = $item.find("[name=tickeId]").val();
					if(ticketId){
						ticketJson = {
							id : $item.find("[name=templateId]").val(),
							ticketId : ticketId,
							type : $item.find("[name=type]").val(),
							price : $item.find("[name=price]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						saveJson.lineDayList[index].ticket.push(ticketJson);
					}
				}
			} 
		});
		quoteJson = JSON.stringify(quoteJson);
		saveJson = JSON.stringify(saveJson);
		$.ajax({
			url: KingServices.build_url("busInquiry","saveQuote"),
			type: 'POST',
			data: "quoteJson="+encodeURIComponent(quoteJson)+"&saveJson="+encodeURIComponent(saveJson),
			success: function(data){
				var result = showDialog(data);
				if (result) {

				}
			}
		})
		
	};

	quote.getValue = function($obj,name) {
		var value = $obj.find('[name='+name+']').val();
		return value;
	};

	exports.init = quote.initModule;
	exports.addQuote = quote.addQuote;
})