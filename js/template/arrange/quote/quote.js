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
		viewQuoteTemplate = require("./view/viewQuote"),
		updateQuoteTemplate = require("./view/updateQuote"),
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
		// var tabId = "tab-"+menuKey+"-content";
	/**
	 * 自定义报价对象
	 * @type {Object}
	 */
	var quote = {
		$tab: false,
	};
	var autocompleteData = {}
	//初始化报价模块
	quote.initModule = function() {
		quote.listMainQuote();
	};

	//初始化报价搜索模块
	quote.listMainQuote = function() {
		var html = listMainTemplate();
		Tools.addTab(menukey,"报价模块",html);
		quote.$tab = $("#tab-arrange_quote-content");

		quote.listQuote(0);
	};

	//初始化报价列表
	quote.listQuote = function(page) {
		$.ajax({
			url: KingServices.build_url('quote', 'listQuote'),
			type: 'POST',
			data: 'pageNo='+page+'',
			success: function(data){
				var result = showDialog(data);
				if(result){
					data.quoteList = JSON.parse(data.quoteList);
					var html = listTemplate(data);
					quote.$tab.find('.T-quoteList').html(html);

					quote.$tab.find('.T-quoteList').off('click').on('click','.T-action',function(){
						var $this = $(this), id = $this.closest('tr').data('entity-id');
						if ($this.hasClass('T-view')){
							// 查看报价信息
							quote.viewQuote(id);
						} else if ($this.hasClass('T-update')){
							// 编辑报价信息
							//quote.updateQuote(id);
							quote.updateQuoteToOffer(id,'1');
						} else if ($this.hasClass('T-delete')){
							// 删除报价
							//....
						} else if ($this.hasClass('T-share')){
							quote.shareQuote(id);
						}
					})

	                //绑定翻页组件
	                laypage({
	                	cont: quote.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		quote.listQuote(obj.curr -1);
					        }
					    }
	                });
				}
			}
		})
	};


	//查看报价
	quote.viewQuote = function(id) {
		$.ajax({
			url: KingServices.build_url("quote","viewQuote"),
			type: 'POST',
			data: "id="+id+"",
			success: function(data){
				var result = showDialog(data);
				if (result) {	

					console.info(data);
					var busCompanyArrange = JSON.parse(data.busCompanyArrange);
                    data.busCompanyArrange=busCompanyArrange;

					var guideArrange = JSON.parse(data.guideArrange);
					data.guideArrange=guideArrange;

					var insuranceArrange = JSON.parse(data.insuranceArrange);
					data.insuranceArrange=insuranceArrange;

					var daysList = JSON.parse(data.daysList);
					data.daysList=daysList;

					var quoteDetailJson = JSON.parse(data.quoteDetailJson);
					data.quoteDetailJson=quoteDetailJson;

              

					// data.viewLineProduct = {
					// 								lineProduct : lineProduct,
					// 								busCompanyTemplate : busCompanyTemplate,
					// 								guideTemplate : guideTemplate,
					// 								insuranceTemplate : insuranceTemplate,
					// 								daysList : daysList
					// 						};
					var html = viewQuoteTemplate(data);
					Tools.addTab(menukey+"-view","查看报价",html);
				}
			}
		})
	}

   //初始化分享报价。。
 //   quote.listQuote = function(){
 //   	var html = listTemplate();
 //   	quote.$tab.find('.T-quoteList').html(html);
 //     quote.$tab.find('.T-share').on('click', function(event) {
 //     	event.preventDefault();
     	
 //     	quote.shareQuote();
 //     });

 //     quote.$tab.find('.T-view').on('click', function(event,id) {
	// 		event.preventDefault();
	// 		/* Act on the event */
	// 		// var id = $(this).closest('tr').data(id);
	// 		// var id = $
	// 		quote.viewQuote(id);
	// });

 //   }

	//分享页面
	quote.shareQuote = function(id) {
		$.ajax({
			url: KingServices.build_url("quote","shareQuote"),
			type: 'POST',
			data: { id: id},
			success: function(data){				
				if (showDialog(data)) {
					var key = data.shareKey;
					if (!!key) {
						var url = location.origin + '/quote.html?key=' + key;
						window.open(url);
						showMessageDialog($( "#confirm-dialog-message" ),"分享成功");
					}
				}
			}
		})
		
		// window.open("quote.html?key=" + key);
		// window.open("quote.html")
		// var html = shareQuoteTemplate();
		// Tools.addTab(menukey+"-share","分享报价");
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
					$container = $("#tab-arrange_quote-add-content");
					$container = $("#tab-arrange_quote-add-content");

					var addHtml = addQuoteTemplate(data.viewLineProduct);
					$container.find('#quoteContent').html(addHtml)

					$container.find('.inquiryContent').on("click",function(){
						var quoteId = $container.find('[name=quoteId]').val();
						if(!quoteId){
							showMessageDialog($( "#confirm-dialog-message" ),"请先询价！");
							return false;
						} 
						quote.quoteStatus(quoteId,$container);
					});	

					quote.init_event($container);
				}
			}
		})
	};

	//询价状态
	quote.quoteStatus = function(quoteId,$container){
		var inquiryHtml = inquiryResultTemplate();
		$container.find('#inquiryContent').html(inquiryHtml);
		
		quote.busStatusList(quoteId,$container);

		$container.find('.busInquiryResult').on("click",function(){
			quote.busStatusList(quoteId,$container);
		});
		$container.find('.hotelInquiryContent').on("click",function(){
			quote.hotelStatusList(quoteId,$container);
		});
	};

	//询价状态-车
	quote.busStatusList = function(quoteId,$container){
		//询车
		$.ajax({
			url: KingServices.build_url('busInquiry','statusList'),
			type: 'POST',
			data: { quoteId : quoteId + "" },
			success: function(data){
				var result = showDialog(data);
				if(result){
					var busInquiryResultHtml = busInquiryResultTemplate(data);
					$container.find('#busInquiryResult').html(busInquiryResultHtml);

					//操作
					$container.find('.T-bus-refresh').on("click",function(){
						var $this = $(this),
							$tr = $this.closest('tr'),
							offerId = $this.closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('busInquiry','refreshListInquiryBus'),
							type: 'POST',
							data: { offerId : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										var rs = data.List[0],
											status = rs.status;
										$tr.find(".T-status").html(status);
										$tr.find(".T-price").html(rs.replyPrice);

										if(status != "等待确认"){
											$this.next().remove();
											$this.remove();
											if(status != "已同意"){ 
												var html = "<a class='T-bus-add'>加入</a><span> | </span>";
												$tr.find('td:last-child').prepend(html);
											}
										}	 
									});
								}
							}
						});
					});

					$container.find('.T-bus-add').on("click",function(){
						var offerId = $(this).closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('busInquiry','sumListInquiryBusAdd'),
							type: 'POST',
							data: { offerId : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										var $obj = $container.find(".T-arrangeBusCompanyList"),
											offer = data.sumListInquiryBusAdd[0];
										$obj.find("input[name=needSeatCount]").val(offer.seatCount);
										$obj.find("input[name=brand]").val(offer.brand);
										$obj.find("input[name=offerId]").val(offer.id);
										$obj.find("input[name=companyName]").val(offer.companyName);
										$obj.find("input[name=busCompanyId]").val(offer.busCompanyId);
										$obj.find("input[name=manager]").val(offer.managerName);
										$obj.find("input[name=mobileNumber]").val(offer.mobileNumber);
										$obj.find("input[name=seatcountPrice]").val(offer.seatPrice);
										$obj.find("input[name=remark]").val(offer.remark);

										$container.find('.quoteContent').trigger('click');
									});
								}
							}
						});
					});

					$container.find('.T-bus-delete').on("click",function(){
						var offerId = $(this).closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('busInquiry','deleteListInquiryBus'),
							type: 'POST',
							data: { id : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										quote.busStatusList(quoteId,$container);
									});
								}
							}
						});
					});
				}
			}
		});
	};

	//询价状态-房
	quote.hotelStatusList = function(quoteId,$container){
		$.ajax({
			url: KingServices.build_url('hotelInquiry','statusList'),
			type: 'POST',
			data: { quoteId : quoteId + "" },
			success: function(data){
				var result = showDialog(data);
				if(result){
					for(var i = 0 ; i < data.data.length; i++){
						for(var j = 0 ; j < data.data[i].hotelList.length; j++){
							data.data[i].hotelList[j].roomTypeList = JSON.parse(data.data[i].hotelList[j].roomTypeList);
						}
					}
					var hotelInquiryResultHtml = hotelInquiryResultTemplate(data);
					$container.find('#hotelInquiryContent').html(hotelInquiryResultHtml);

					//操作
					$container.find('.T-hotel-refresh').on("click",function(){
						var $this = $(this),
							$tr = $this.closest('tr'),
							offerId = $this.closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('hotelInquiry','refreshListInquiryHotel'),
							type: 'POST',
							data: { offerId : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										var rs = data.List,
											status = data.status;
										$this.closest('td').prev().html(status);
										$tr.find(".T-hotelPrice-" + offerId + "").each(function(i){
											$(this).html(rs[i].replyPrice);
										});

										if(status != "等待确认"){
											$this.next().remove();
											$this.remove();
											if(status == "已同意"){
												var html = "<a class='T-hotel-add'>加入</a><span> | </span>";
												$tr.find('td:last-child').prepend(html);
											}
										}
									});
								}
							}
						});
					});

					$container.find('.T-hotel-add').on("click",function(){
						var offerId = $(this).closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('hotelInquiry','sumListInquiryHotelAdd'),
							type: 'POST',
							data: { id : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										//删除现有
										$container.find(".T-resourceHotelList").remove();
										// $container.find(".T-resourceHotelList").each(function(){
										// 	var id = $(this).data("entity-id");
										// 	if(id){
										// 		$.ajax({
										// 			url: KingServices.build_url('hotelInquiry','sumListInquiryHotelAdd'),
										// 			type: 'POST',
										// 			data: { id : id + ""},
										// 			success: function(data){
										// 				var result = showDialog(data);
										// 				if(result){
										// 				}
										// 			}
										// 		});
										// 	}
										// });

										var html = quote.hotelHtml(data.hotelList);
										$container.find(".T-timeline-detail-container").append(html);

										$container.find('.quoteContent').trigger('click');
									});
								}
							}
						});
					});

					$container.find('.T-hotel-delete').on("click",function(){
						var offerId = $(this).closest('td').data("id");
						$.ajax({
							url: KingServices.build_url('hotelInquiry','deleteListInquiryHotel'),
							type: 'POST',
							data: { id : offerId + ""},
							success: function(data){
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										quote.hotelStatusList(quoteId,$container);
									});
								}
							}
						});
					});
				}
			}
		});
	};

	//酒店html
	quote.hotelHtml = function(hotelList){
		var html = "";
		for(var i=0; i < hotelList.length; i++){
			html += "<div class='T-timeline-item timeline-item clearfix T-resourceHotelList ui-sortable-handle' data-entity-index='" + i +"'>" + 
				"<div class='timeline-info' style='color:#1fade0;margin-left: 4px'><i class='ace-icon fa fa-circle'></i><span>酒店</span></div>" + 
				"<div class='widget-box transparent' style='margin-top: 20px'><div class='widget-body'><div class='widget-main'>" +
				"<table class='table table-striped table-bordered table-hover'>" +
					"<thead><tr>" + 
						"<th class='th-border'>酒店星级</th>" + 
						"<th class='th-border'>酒店名称</th>" + 
						"<th class='th-border'>房型</th>" + 
						"<th class='th-border'>价格</th>" + 
						"<th class='th-border'>数量</th>" + 
						"<th class='th-border'>含餐</th>" +
						"<th class='th-border'>电话</th>" + 
						"<th class='th-border'>备注</th>" + 
						"<th class='th-border' style='width: 60px;'>操作</th>" + 
					"</tr></thead>" +
					"<tbody><tr>" + 
						"<td><input type='hidden' name='offerId' value='" + hotelList[i].offerId + "' /><select class='col-xs-12 T-choose-hotelStarLevel'><option";
						 if (hotelList[i].hotelLevel==1)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='1'>三星以下</option><option";
						 if (hotelList[i].hotelLevel==2)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='2'>三星</option><option";
						 if (hotelList[i].hotelLevel==3)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='3'>准四星</option><option";
						 if (hotelList[i].hotelLevel==4)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='4'>四星</option><option";
						 if (hotelList[i].hotelLevel==5)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='5'>准五星</option><option";
						 if (hotelList[i].hotelLevel==6)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='6'>五星</option><option";
						 if (hotelList[i].hotelLevel==7)
						 {
						 	html += " selected='selected'";
						 }
						 html += " value='7'>五星以上</option></select></td>" +
						 "<td><input type='text' class='T-choose-hotelName col-xs-12 bind-change' name='hotelNmae' value='" + hotelList[i].hotelName + "' /><input type='hidden' name='hotelId' value='" + hotelList[i].hotelId + "' /></td>" + 
						 "<td><input type='text' class='T-choose-hotelRoom col-xs-12 bind-change' name='hotelRoom' value='" + hotelList[i].type + "' /><input type='hidden' name='hotelRoomId' value='" + hotelList[i].roomId +"' /></td>" +
						 "<td><input type='text' readonly='readonly' class='T-changeQuote' name='contractPrice' value='" + hotelList[i].price + "' style='width:70px;' /></td>" +
						 "<td><input type='text' name='count' class='T-changeQuote' value='" + hotelList[i].needRoomCount + "' style='width:70px;' /></td>" +
						 "<td><input type='text' class='col-xs-12' readonly='readonly' name='containBreakfast' value='";
						 if (hotelList[i].containBreakfast==1){
					 		html += "含早餐"; 
					 	}
					 	if (hotelList[i].containLunch==1){
					 		html += "含午餐"; 
					 	}
					 	if (hotelList[i].containDinner==1){
					 		html += "含晚餐"; 
					 	}
					 	html +="' /></td>" + 
					 	"<td><input type='text' class='col-xs-12' readonly='readonly' name='mobileNumber' value='" + hotelList[i].mobileNumber + "' /></td>" +
					 	"<td><input type='text' class='col-xs-12' name='remark' value='' /></td>" +
					 	"<td><a data-entity-id='" + hotelList[i].hotelId + "' data-entity-type='8' class='cursor btn-restaurant-delete T-delete'>删除</a></td>" +
					"</tr></tbody>" + 
				"</table></div></div></div></div>";
		}
		return html;
	};

	//修改报价
	quote.updateQuote = function(id,type) {
		$.ajax({
			url: KingServices.build_url('quote', 'viewQuote'),
			type: 'POST',
			data: 'id='+id+'',
			success: function(data){
				var result = showDialog(data);
				if(result){
					data.busCompanyArrange = JSON.parse(data.busCompanyArrange);
					data.daysList = JSON.parse(data.daysList);
					data.guideArrange = JSON.parse(data.guideArrange);
					data.insuranceArrange = JSON.parse(data.insuranceArrange);
					data.quoteDetailJson = JSON.parse(data.quoteDetailJson);
					data.editorName = menukey +'-update' + '-ueditor'
					var html = mainQuoteTemplate();
					Tools.addTab(menukey+'-update',"修改报价",html)
					$container = $("#tab-arrange_quote-update-content");

					var updateHtml = updateQuoteTemplate(data);
					$container.find('#quoteContent').html(updateHtml)


					/*var inquiryHtml = inquiryResultTemplate();
					$container.find('#inquiryContent').html(inquiryHtml)
					var busInquiryResultHtml = busInquiryResultTemplate();
					var hotelInquiryResultHtml = hotelInquiryResultTemplate();

					$container.find('#busInquiryResult').html(busInquiryResultHtml)
					$container.find('#hotelInquiryContent').html(hotelInquiryResultHtml)*/

					quote.init_event($container);
					if (!!type) {
						$container.find('.inquiryContent').trigger('click');
						if (type == "T-hotel") {
							$container.find('.inquiryContent').trigger('click');
						}else if (type == "T-bus") {
							$container.find('.inquiryContent').trigger('click');
						}
					}
				}
			}
		})
	};

	//报价详情页事件绑定
	quote.init_event =function($container) {
		var validator = rule.lineProductCheckor($container);
		//下拉
		quote.autocomplete($container);
		//时间控件
		quote.datePicker($container);
		quote.dateTimePicker($container);
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
				quote.addRestaurant($that, validator, $container);
			} else if ($that.hasClass('T-addHotel')) {
				// 添加酒店
				quote.addResourceHotel($that, validator, $container);
			} else if ($that.hasClass('T-addScenic')) {
				// 添加景区
				quote.addResourceScenic($that, validator, $container);
			} else if ($that.hasClass('T-addShop')) {
				// 添加购物
				quote.addResourceShopping($that, validator, $container);
			} else if ($that.hasClass('T-addSelfPay')) {
				// 添加自费
				quote.addResourceSelfPaying($that, validator, $container);
			} else if ($that.hasClass('T-addTraffic')) {
				// 添加交通
				quote.addResourceTraffic($that, validator, $container);
			}
		})
		.on('click', '.T-delete', function(){
			quote.deleteLineProductDaysArrange($(this), $container);
		});

		// 绑定安排的拖动事件				
		$container.find('.T-timeline-detail-container').sortable({
			containment: 'parent',
			axis: "y",
			handle: '.table-bordered thead',
			tolerance:'pointer',
			update: function(event, ui) {
				quote.updateRouteIndex(null, $container);
			}
		});

		//autocomplete
		var $dayListArea = $container.find('.T-timeline-container');
		quote.bindInsuranceChosen($container.find('.T-insurance-name'), validator, $container);
		quote.bindRestaurantEvent($dayListArea.find('.T-choose-restaurantName'), $dayListArea.find('.T-choose-restaurantStandardsName'), validator, $container);
		quote.bindHotelEvent($dayListArea.find('.T-choose-hotelName'), $dayListArea.find('.T-choose-hotelRoom'), $dayListArea.find('.T-choose-hotelStarLevel'), validator, $container);
		quote.bindScenicEvent($dayListArea.find('.T-choose-scenicName'), validator, $container);
		quote.bindShopEvent($dayListArea.find('.T-choose-shopVendorName'), validator, $container);
		quote.bindSelfPay($dayListArea.find('.T-choose-ticketCompanyName'), validator, $container);
		quote.bindTicketEvent($dayListArea.find('.chooseTicketName'), validator, $container);
		//车辆询价
		$container.find('.T-car').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			var lineProductInfo = {
				id: quote.getValue($container,"lineProductId"),
				name: $container.find('.T-lineProductName').text(),
				type: $container.find('.T-lineProductType').text(),
				customerType: $container.find('.T-lineProductCusType').text(),
				days: $container.find('.T-lineProductDays').text(),
				startTime: quote.getValue($container,'startTime'),
				adultCount: quote.getValue($container,'adultCount'),
				childCount: quote.getValue($container,'childCount'),
				partnerAgencyId: quote.getValue($container,'partnerAgencyId'),
				partnerAgencyContactId: quote.getValue($container,'managerId')
			}
			var quoteId = quote.getValue($container,'quoteId');
			if(!!lineProductInfo.startTime && !!lineProductInfo.partnerAgencyId && !!lineProductInfo.partnerAgencyContactId ){
				quote.busInquiry(quoteId,lineProductInfo,$container);
			}else if (!!lineProductInfo.startTime != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择出游日期");
			}else if (!!lineProductInfo.partnerAgencyId != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择客户");
			}else if (!!lineProductInfo.partnerAgencyContactId != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择客户联系人");
			}
		});
		//车辆询价
		quote.busInquiry = function(quoteId,lineProductInfo,$container) {
			$.ajax({
				url: KingServices.build_url("busCompany","findBusList"),
				type: 'POST',
				data: 'quoteId='+quoteId+'',
				success: function(data){
					data.lineProductInfo = lineProductInfo;
					autocompleteData.busBrandList = JSON.parse(data.brands);
					autocompleteData.seatCountList = JSON.parse(data.seatCounts);
					var result = showDialog(data);
					if (result) {
						var busInquiryHtml = busInquiryTemplate(data);
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
						    	quote.busInquiryList(0,$busLayerContent,lineProductInfo);

				    			quote.dateTimePicker($busLayerContent);
				    			quote.chooseBusInfo($busLayerContent);
				    			//保存接口
				    			$busLayerContent.find('.T-saveBusInquiry').on('click', function() {
				    				var brand = quote.getValue($busLayerContent,"busBrand"),
				    					lineProductId = lineProductInfo.id,
				    					seatCount = quote.getValue($busLayerContent,"seatCount"),
				    					startTime = lineProductInfo.startTime,
				    					expiryTime = quote.getValue($busLayerContent,"expiryTime")
				    					busCompany = [];
				    				$busLayerContent.find('.T-selectedBusTbody tr').each(function(){
				    					var json ={
				    						id: $(this).data("entity-id")
				    					}
				    					busCompany.push(json);
				    				})
				    				busCompany = JSON.stringify(busCompany);
				    				$.ajax({
				    					url: KingServices.build_url("busInquiry","saveInquiry"),
				    					type: 'POST',
				    					data: {
				    						brand: brand,
				    						lineProductId: lineProductId,
				    						quoteId: quoteId,
				    						seatCount: seatCount,
				    						startTime: startTime,
				    						busCompany: busCompany,
				    						expiryTime: expiryTime,
											partnerAgencyId: lineProductInfo.partnerAgencyId,
											partnerAgencyContactId: lineProductInfo.partnerAgencyContactId
				    					},
				    					success: function(data){
				    						var result = showDialog(data);
				    						if (result) {
												$container.find('[name=quoteId]').val(data.quoteId);
												layer.close(busInquiryLayer);
				    						}
				    					}
				    				})
				    				

				    			})
								//关闭酒店询价
								$busLayerContent.find(".T-closeLayer").on('click', function(){
									layer.close(busInquiryLayer);
								})
						    }
						})
					}
				}
			});
		};
		//车辆询价列表
		quote.busInquiryList = function(page,$container,lineProductInfo) {
			var searchParam = {
				brand: quote.getValue($container,"busBrand") || "",
				lineProductId: lineProductInfo.id,
				pageNo: page,
				seatCount: quote.getValue($container,"seatCount") || "",
				sortType: 'auto',
				startTime: lineProductInfo.startTime
			}
			searchParam = JSON.stringify(searchParam);
	    	$.ajax({
	    		url: KingServices.build_url("busInquiry","findPager"),
	    		type: 'POST',
	    		data: "searchParam="+encodeURIComponent(searchParam),
	    		success: function(data){
	    			var result = showDialog(data);
	    			if (result) {
	    				data.result = JSON.parse(data.result);
				    	var busInquiryListHtml = busInquiryListTemplate(data);
				    	$container.find('.T-busInquiryList').html(busInquiryListHtml);
						$(window).trigger("resize");

						//搜索
						$container.find(".T-btn-busInquiry-search").off('click').on('click', function(){
					    	quote.busInquiryList(0,$container,lineProductInfo);
						})
						$container.find('.T-chooseBus').on('click',function(){
							var $this = $(this),$parents = $this.closest('tr');
							var chooseBusInfo = {
								name: $parents.find('.T-name').text(),
								id: $parents.data("entity-id"),
								managerName: $parents.find('.T-managerName').text(),
								mobileNumber: $parents.find('.T-mobileNumber').text()
							}
							addChooseBus(chooseBusInfo);
						})
						var selectedBusArray = [];
						$container.find('.T-selectedBusTbody tr').each(function(){
							selectedBusArray.push($(this).data("entity-id"));
						})
						function addChooseBus(chooseBusInfo){
							var html = ''
							+'<tr data-entity-id="'+chooseBusInfo.id+'">'
							+'<td>'+chooseBusInfo.name+'</td>'
							+'<td>'+chooseBusInfo.managerName+'</td>'
							+'<td>'+chooseBusInfo.mobileNumber+'</td>'
							+'<td><a class="T-del">删除</a></td>'
							+'</tr>';
							var isRepeat = 0;
							for (var i = 0,len = selectedBusArray.length; i < len; i++) {
								if (selectedBusArray[i] == chooseBusInfo.id) {
									isRepeat = 1;
								}
							}
							if (isRepeat == 1) {
								showMessageDialog($( "#confirm-dialog-message" ),"该车队已经被选择");
							}else{
								$container.find('.T-selectedBusTbody').append(html);
								selectedBusArray.push(chooseBusInfo.id);
							}
							delChooseBus();
						}
						function delChooseBus(){
							$container.find('.T-del').off('click').on('click', function(){
								$this = $(this), $parents = $this.closest("tr");
								var id = $parents.data("entity-id");
								for (var i = 0,len = selectedBusArray.length; i < len; i++) {
									if (selectedBusArray[i] == id) {
										selectedBusArray.splice(i,1);
									}
								}
								$parents.remove();
							})
						}

		                //绑定翻页组件
		                laypage({
		                	cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		quote.busInquiryList(obj.curr -1,$container,lineProductInfo);
						        }
						    }
		                });
						
	    			}
	    		}
	    	})
		};
		//酒店询价
		$container.find('.T-hotel').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $this = $(this), $whichDiv = $this.closest('.T-dailyArrangeList');
			var lineProductInfo = {
				id: quote.getValue($container,"lineProductId"),
				name: $container.find('.T-lineProductName').text(),
				type: $container.find('.T-lineProductType').text(),
				customerType: $container.find('.T-lineProductCusType').text(),
				days: $container.find('.T-lineProductDays').text(),
				startTime: quote.getValue($container,'startTime'),
				adultCount: quote.getValue($container,'adultCount'),
				childCount: quote.getValue($container,'childCount'),
				partnerAgencyId: quote.getValue($container,'partnerAgencyId'),
				partnerAgencyContactId: quote.getValue($container,'managerId')
			}
			var whichDay = $whichDiv.data("entity-whichday");
			var quoteId = quote.getValue($container,'quoteId');

			if(!!lineProductInfo.startTime && !!lineProductInfo.partnerAgencyId && !!lineProductInfo.partnerAgencyContactId ){
				quote.hotelInquiry(lineProductInfo,whichDay,quoteId,$container);
			}else if (!!lineProductInfo.startTime != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择出游日期");
			}else if (!!lineProductInfo.partnerAgencyId != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择客户");
			}else if (!!lineProductInfo.partnerAgencyContactId != true){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择客户联系人");
			}
		});
		//保存报价
		$container.find('.T-btn-submit-quote').on('click',function(){
			var id = $container.find('input[name=quoteId]').val();
			quote.saveQuote(id, $container);
		})
	};
	//酒店询价
	quote.hotelInquiry = function(lineProductInfo,whichDay,quoteId,$container) {
		$.ajax({
			url: KingServices.build_url("hotel","findRoomTypeList"),
			type: 'POST',
			data: 'quoteId='+quoteId+'',
			success: function(data){
				var result = showDialog(data);
				if (result) {
					autocompleteData.roomTypeList = data.roomTypeList;
					data.lineProductInfo = lineProductInfo;
					var hotelInquiryHtml = hotelInquiryTemplate(data);
					var hotelInquiryLayer = layer.open({
					    type: 1,
					    title:"酒店询价",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: hotelInquiryHtml,
					    scrollbar: false,
					    success:function(data){
					    	var $hotelLayerContent = $(".T-hotelInquiryContainer");

					    	quote.chooseRoomType($hotelLayerContent);
					    	quote.dateTimePicker($hotelLayerContent);
					    	
							$hotelLayerContent.find(".T-addSearchCondition").off('click').on('click', function(){
								var html = ''
								+'<div class="col-xs-12 T-seachAreaDiv" style="margin-top:5px">'
								+'<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>房型:</label>'
								+'<div class="col-sm-1">'
								+'<input type="text" class="col-sm-12 T-chooseRoomType width110" name="roomType" value=""/>'
								+'</div>'
								+'<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>数量:</label>'
								+'<div class="col-sm-1">'
								+'<input type="text" class="col-sm-12 width110" name="roomCount" value=""/>'
								+'</div>'
								+'</div>';
								$hotelLayerContent.find('.T-searchArea').append(html);
								quote.chooseRoomType($hotelLayerContent);
							})

							var selectedHotelArray = [];
							//酒店查询分页
							var startTime = lineProductInfo.startTime;
							quote.hotelInquiryList(0,$hotelLayerContent,whichDay,startTime,$container);
							$hotelLayerContent.find('.T-btn-hotelInquiry-search').off('click').on('click',function(){
								quote.hotelInquiryList(0,$hotelLayerContent,whichDay,startTime,$container);
							})
							//保存接口
							$hotelLayerContent.find('.T-saveHotelInquiry').on('click', function(){

								var saveJson ={
									expiryTime: quote.getValue($hotelLayerContent,"expiryTime"),
									arriveTime: quote.checkInTime(whichDay,startTime),
									hotelJson: [],
									lineProductId: lineProductInfo.id+'',
									params: [],
									quoteId: quoteId,
									startTime: startTime,
									partnerAgencyId: lineProductInfo.partnerAgencyId,
									partnerAgencyContactId: lineProductInfo.partnerAgencyContactId
								}
								var seachAreaDiv = $hotelLayerContent.find('.T-seachAreaDiv');
								seachAreaDiv.each(function(){
									var $this = $(this);
									var json = {
										type: $this.find('[name=roomType]').val(),
										needRoomCount: $this.find('[name=roomCount]').val()
									}
									saveJson.params.push(json);
								})
								var selectedHotel = $hotelLayerContent.find('.T-selectedHotelTbody tr');
								selectedHotel.each(function(){
									var $this = $(this);
									var json = {
										hotelId: $this.data("entity-id")+''
									}
									saveJson.hotelJson.push(json);
								})
								saveJson = JSON.stringify(saveJson);
								$.ajax({
									url: KingServices.build_url("hotelInquiry","saveHotelInquiry"),
									type: 'POST',
									data:"saveJson="+encodeURIComponent(saveJson),
									success: function(data){
										var result = showDialog(data);
										if (result) {
											$container.find('[name=quoteId]').val(data.quoteId);
											layer.close(hotelInquiryLayer);
										}
									}
								})
							})
							//关闭酒店询价
							$hotelLayerContent.find(".T-closeLayer").on('click', function(){
								layer.close(hotelInquiryLayer);
							})
					    }
					})
				}
			}
		})
	};
	//选择房间类型
	quote.chooseRoomType = function($obj) {
		var chooseRoomType = $obj.find('.T-chooseRoomType');
		chooseRoomType.autocomplete({
			minLength:0,
			change: function(event,ui){
				if(ui.item == null){
					$(this).val("")
				}
			},
			select: function(){

			}
		}).off('click').on('click',function(){
			var obj = this,dataList = [];
			if(autocompleteData.roomTypeList && autocompleteData.roomTypeList.length > 0){
				for (var i = 0,len = autocompleteData.roomTypeList.length; i < len; i++) {
					var json = {
						value: autocompleteData.roomTypeList[i]
					};
					dataList.push(json);
				}
				$(obj).autocomplete('option','source', dataList);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容。', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	}
	//车辆询价 autocomplete
	quote.chooseBusInfo = function($obj) {
		var chooseBusSeatCount = $obj.find('.T-chooseSeatCount');
		chooseBusSeatCount.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if (ui.item == null) {
					$(this).val("")
				}
			}
		}).off('click').on('click', function(){
			var obj = this,dataList = [];
			if(autocompleteData.seatCountList && autocompleteData.seatCountList.length > 0){
				for (var i = 0,len = autocompleteData.seatCountList.length; i < len; i++) {
					var json = {
						value: autocompleteData.seatCountList[i]
					};
					dataList.push(json);
				}
				$(obj).autocomplete('option','source', dataList);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容。', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})

		var chooseBusBrand = $obj.find('.T-chooseBusBrand');
		chooseBusBrand.autocomplete({
			minLength: 0,
			change: function(event,ui){
				if (ui.item == null) {
					$(this).val("")
				}
			}
		}).off('click').on('click', function(){
			var obj = this,dataList = [];
			if(autocompleteData.busBrandList && autocompleteData.busBrandList.length > 0){
				for (var i = 0,len = autocompleteData.busBrandList.length; i < len; i++) {
					var json = {
						value: autocompleteData.busBrandList[i]
					};
					dataList.push(json);
				}
				$(obj).autocomplete('option','source', dataList);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容。', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};
	//时间计算
	quote.checkInTime = function(whichDay,startTime) {
		var	date = new Date(startTime.replace("-", "/").replace("-", "/"));
		var timer = date.getTime()+(whichDay-1)*24*60*60*1000;
		date.setTime(timer);
		var checkInTime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
		return checkInTime;
	}
	//酒店查询分页
	quote.hotelInquiryList = function(page,$container,whichDay,startTime) {
		var checkInTime = quote.checkInTime(whichDay,startTime);
		var searchJson = {
			pageNo: page,
			checkInTime: checkInTime,
			params: []
		}
		var seachAreaDiv = $container.find('.T-seachAreaDiv');
		seachAreaDiv.each(function(){
			var $this = $(this);
			var json = {
				type: $this.find('[name=roomType]').val()
			}
			searchJson.params.push(json);
		})
		searchJson = JSON.stringify(searchJson);
		$.ajax({
			url: KingServices.build_url("hotel","findHotelByInquiry"),
			type: 'POST',
			data: "searchJson="+encodeURIComponent(searchJson),
			success: function(data){
				var result = showDialog(data)
				if (result) {
					data.hotelList = JSON.parse(data.hotelList);
					var hotelInquiryListHtml = hotelInquiryListTemplate(data);
					$container.find('.T-hotelInquiryList').html(hotelInquiryListHtml);
					$(window).trigger("resize");

					$container.find('.T-chooseHotel').on('click',function(){
						var $this = $(this),$parents = $this.closest('tr');
						var chooseHotelInfo = {
							name: $parents.find('.T-name').text(),
							id: $parents.data("entity-id"),
							managerName: $parents.find('.T-managerName').text(),
							mobileNumber: $parents.find('.T-mobileNumber').text()
						}
						addChooseHotel(chooseHotelInfo);
					})
					var selectedHotelArray = [];
					$container.find('.T-selectedHotelTbody tr').each(function(){
						selectedHotelArray.push($(this).data("entity-id"));
					})
					function addChooseHotel(chooseHotelInfo){
						var html = ''
						+'<tr data-entity-id="'+chooseHotelInfo.id+'">'
						+'<td>'+chooseHotelInfo.name+'</td>'
						+'<td>'+chooseHotelInfo.managerName+'</td>'
						+'<td>'+chooseHotelInfo.mobileNumber+'</td>'
						+'<td><a class="T-del">删除</a></td>'
						+'</tr>';
						var isRepeat = 0;
						for (var i = 0,len = selectedHotelArray.length; i < len; i++) {
							if (selectedHotelArray[i] == chooseHotelInfo.id) {
								isRepeat = 1;
							}
						}
						if (isRepeat == 1) {
							showMessageDialog($( "#confirm-dialog-message" ),"该酒店已经被选择");
						}else{
							$container.find('.T-selectedHotelTbody').append(html);
							selectedHotelArray.push(chooseHotelInfo.id);
						}
						delChooseHotel();
						console.log(selectedHotelArray);
					}
					function delChooseHotel(){
						$container.find('.T-del').off('click').on('click', function(){
							$this = $(this), $parents = $this.closest("tr");
							var id = $parents.data("entity-id");
							for (var i = 0,len = selectedHotelArray.length; i < len; i++) {
								if (selectedHotelArray[i] == id) {
									selectedHotelArray.splice(i,1);
								}
							}
							$parents.remove();
							console.log(selectedHotelArray);
						})
					}

	                //绑定翻页组件
	                laypage({
	                	cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.searchParam.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		quote.hotelInquiryList(obj.curr -1,$container,whichDay,startTime);
					        }
					    }
	                });
					
				}
			}
		});
		
	};
	//保险选择
	quote.bindInsuranceChosen = function($input, validator, $container) {
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
					quote.costCalculation($container)
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
							quote.costCalculation($container)

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
	quote.addRestaurant = function($btn, validator, $container){
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
			typeParent.find("input[name=price]").val("");
			typeParent.find("input[name=typeId]").val("");

			quote.costCalculation($container)
		});
		
		quote.bindRestaurantEvent($(".updateRestaurantList .chooseRestaurantName"), $(".updateRestaurantList .restaurantStandardsName"), validator, $container);
		
		
		
	};
		
	quote.bindRestaurantEvent = function( obj, typeObj, validator, $container) {
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
					quote.costCalculation($container)
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
				quote.costCalculation($container)
				
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
					quote.costCalculation($container)
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
							quote.costCalculation($container)
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
	quote.addResourceHotel = function($btn, validator, $container){
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
		quote.costCalculation($container)
		quote.bindHotelEvent($(".updateHotelList .chooseHotelName"), $(".updateHotelList .chooseHotelRoom"), $(".updateHotelList .resourceHotelStar"), validator,$container)
	};
	quote.bindHotelEvent = function(obj, typeObj, selObj, validator ,$container){
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
			quote.costCalculation($container)
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
				quote.costCalculation($container)
				
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
					quote.costCalculation($container)

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
							quote.costCalculation($container)
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
					quote.costCalculation($container)
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
	quote.addResourceScenic = function($btn, validator, $container){
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
		quote.bindScenicEvent($(".updateScenicList .chooseScenicName"), validator, $container);
	},
	quote.bindScenicEvent = function(obj, validator, $container){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var obj = this,
				    objParent = $(obj).parent().parent(),
				    scenicNameId = ui.item.id;
				objParent.find("input[name=scenicId]").val(scenicNameId).trigger('change');
				objParent.find("input[name=chargingProjects]").val("");
				objParent.find("input[name=chargingId]").val("");
				quote.costCalculation($container)
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
					quote.costCalculation($container)
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
							quote.costCalculation($container)
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
					quote.costCalculation($container)
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
						var dataList = JSON.parse(data.scenicItemList);
						if(dataList && dataList.length > 0){
							for(var i=0; i < dataList.length; i++){
								dataList[i].value = dataList[i].name;
							}
							$(scenicObj).autocomplete('option','source', dataList);
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
	quote.addResourceSelfPaying = function($btn, validator, $container){
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
		quote.bindSelfPay($(".updateSelfPayList .chooseCompanyName"), validator, $container);
		
	};
	
	quote.bindSelfPay = function(obj, validator, $container){
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
							quote.costCalculation($container)

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
					quote.costCalculation($container)

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
							var selfPayRebate = JSON.parse(data.selfPayItem); 
							$tr.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
							$tr.find("input[name=contractPrice]").val(selfPayRebate.normalInnerPrice);
							$tr.find("input[name=marketPrice]").val(selfPayRebate.normalMarketPrice);
							quote.costCalculation($container)
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
					quote.costCalculation($container)
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
	quote.addResourceTraffic = function($btn, validator, $container){
		//添加行程安排交通
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateTicketList updateLineProductDaysDetail T-resourceTicketList ui-sortable-handle" data-entity-index='+quote.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >交通</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">票务公司名称</th><th class="th-border">类型</th><th class="th-border">座位级别</th><th class="th-border">日期</th><th class="th-border">单价</th><th class="th-border">数量</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
		'<td><select name="type" class="col-xs-12 form-control" style="font-size: 12px !important;"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
		'<td><input type="text" class="col-xs-12" name="seatLevel"/></td>'+
        '<td><input type="text" class="col-xs-12 T-dateTimePicker" name="time" value=""></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12 T-changeQuote" name="count"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(shoppingDetails);
		quote.updateLineProductIndex += 1;
		
		//绑定选择自费名称事件
		quote.bindTicketEvent($(".updateTicketList .chooseTicketName"), validator, $container);
		quote.dateTimePicker($(".T-timeline-item"));
	};
	quote.bindTicketEvent = function(obj, validator, $container){
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
							quote.costCalculation($container)

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
					quote.costCalculation($container)

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
	quote.deleteLineProductDaysArrange = function($obj, $container){
		var dialogObj = $( "#confirm-dialog-message" );

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
							    type = $obj.data("entity-type");
							
							$.ajax({
								url: KingServices.build_url('productQuote', 'delete'),
								type:"POST",
								showLoading:false,
								data:"id="+id+"&type="+type+"",
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){	
										var index = objParents.index();									
										$(".T-timeline-item").eq(index).remove();
										quote.costCalculation($container);
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
			quote.updateRouteIndex($obj.closest('.T-updateLineProductContainer'),$container);
			quote.costCalculation($container);
		}
	};
	/**
	 * 更新安排的序号
	 * @return {[type]} [description]
	 */
	quote.updateRouteIndex = function($tab,$container) {
		quote.updateLineProductIndex -= 1;
		var itemList = $container.find(".T-timeline-item");
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

		insurancePrice = $container.find('.T-arrangeInsuranceList [name=price]').val()-0 || 0;
		seatCountPrice = $container.find('.T-arrangeBusCompanyList [name=seatcountPrice]').val()-0 || 0;
		guidePrice = $container.find('.T-arrangeGuideList [name=guideFee]').val()-0 || 0;
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
			adultQuote = adultCost * (adultAm/100 + 1);
		}
		if (selectAmChild == 0) {
			childQuote = childCost + childAm;
		}else if (selectAmChild == 1) {
			childQuote = childCost * (childAm/100 + 1);
		}
		if (selectAmOneRoom == 0) {
			oneRoomQuote = oneRoomCost + oneRoomAm;
		}else if (selectAmOneRoom == 1) {
			oneRoomQuote = oneRoomCost * (oneRoomAm/100 + 1);
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
	quote.saveQuote = function(id, $container) {
		var quoteJson = {
			id: id,
			adultAdjustType: quote.getValue($container,'selectAmAdult'),
			adultAdjustValue: quote.getValue($container,'adultAdjustValue'),
			adultCostPrice: $container.find('.T-adultCost').text(),
			adultCount: quote.getValue($container,'adultCount'),
			adultQuotePrice: quote.getValue($container,'adultQuotePrice'),
			childAdjustType: quote.getValue($container,'selectAmChild'),
			childAdjustValue: quote.getValue($container,'childAdjustValue'),
			childCostPrice: $container.find('.T-childCost').text(),
			childCount: quote.getValue($container,'childCount'),
			childQuotePrice: quote.getValue($container,'childQuotePrice'),
			days: $container.find('[name=days]').attr("value"),
			lineProductId: quote.getValue($container,'lineProductId'),
			partnerAgencyId: quote.getValue($container,'partnerAgencyId'),
			partnerAgencyContactId: quote.getValue($container,'managerId'),
			singleRoomAdjustType: quote.getValue($container,'selectAmOneRoom'),
			singleRoomAdjustValue: quote.getValue($container,'singleRoomAdjustValue'),
			singleRoomCostPrice: $container.find('.T-oneRoomCost').text(),
			singleRoomCount: quote.getValue($container,'singleRoomCount'),
			singleRoomQuotePrice: quote.getValue($container,'singleRoomQuotePrice'),
			startTime: quote.getValue($container,'startTime'),
			sumCostFee: $container.find('.T-allCost').text(),
			sumQuoteFee: quote.getValue($container,'sumQuoteFee'),
			grossProfit: $container.find('.T-grossProfit').text(),
			isContainGuideFee: quote.getValue($container,'includeGuideFee'),
			isContainSelfPay: quote.getValue($container,'includeSelfpay'),
			isChildNeedRoom: quote.getValue($container,'childNeedBed'),
			remark: quote.getValue($container,'quoteRemark')
		}
		var busList = $container.find('.T-arrangeBusCompanyList');
		var guideList = $container.find('.T-arrangeGuideList');
		var insuranceList = $container.find('.T-arrangeInsuranceList');
		var saveJson = {
			busCompany: {
				arrangeId: quote.getValue(busList,'arrangeId'),
				offerId: quote.getValue(busList,'offerId'),
				brand: quote.getValue(busList,'brand'),
				busCompanyId: quote.getValue(busList,'busCompanyId'),
				needSeatCount: quote.getValue(busList,'needSeatCount'),
				price: quote.getValue(busList,'seatcountPrice'),
				remark: quote.getValue(busList,'remark')
			},
			guide: {
				arrangeId: quote.getValue(guideList,'arrangeId'),
				price: quote.getValue(guideList,'guideFee'),
				remark: quote.getValue(guideList,'remark')
			},
			insurance: {
				arrangeId: quote.getValue(insuranceList,'arrangeId'),
				insuranceId: quote.getValue(insuranceList,'insuranceId'),
				price: quote.getValue(insuranceList,'price'),
				remark: quote.getValue(insuranceList,'remark'),
				type: quote.getValue(insuranceList,'type')
			},
			lineDayList: []
		}

		$container.find(".T-dailyArrangeList").each(function(index, el) { // 获取每天的数据
			var $that = $(this), $list, $item;

			saveJson.lineDayList[index] = {
				//detailEditor : encodeURIComponent(UE.getEditor($that.find('.T-editor').prop('id')).getContent()),
				whichDay: index+1,
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
						var restaurantJson = {
							arrangeId: $item.find("[name=arrangeId]").val(),
							restaurantId : restaurantId,
							standardId : $item.find("input[name=standardId]").val(),
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
							arrangeId: $item.find("[name=arrangeId]").val(),
							offerId: $item.find("[name=offerId]").val(),
							hotelId : hotelId,
							hotelRoomId : hotelRoomId,
							count: $item.find("[name=count]").val(),
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
							arrangeId: $item.find("[name=arrangeId]").val(),
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
							arrangeId: $item.find("[name=arrangeId]").val(),
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
							arrangeId: $item.find("[name=arrangeId]").val(),
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
							arrangeId: $item.find("[name=arrangeId]").val(),
							ticketId : ticketId,
							type : $item.find("[name=type]").val(),
							price : $item.find("[name=price]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index"),
							startTime: $item.find("[name=time]").val(),
							count: $item.find("[name=count]").val(),
							seatLevel: $item.find("[name=seatLevel]").val()
						}
						saveJson.lineDayList[index].ticket.push(ticketJson);
					}
				}
			} 
		});
		quoteJson = JSON.stringify(quoteJson);
		saveJson = JSON.stringify(saveJson);
		$.ajax({
			url: KingServices.build_url("productQuote","saveQuote"),
			type: 'POST',
			data: "quoteJson="+encodeURIComponent(quoteJson)+"&saveJson="+encodeURIComponent(saveJson),
			success: function(data){
				var result = showDialog(data);
				if (result) {
					Tools.closeTab("arrange_quote-add");
				}
			}
		})
	};

	quote.autocomplete = function($container){
		var choosePartnerAgency = $container.find('.T-choosePartnerAgency');
		choosePartnerAgency.autocomplete({
			minLength: 0,
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this),$parents = $this.closest('.form-group');
					$this.val("");
					$parents.find('[name=partnerAgencyId]').val("");
				}
			},
			select: function(event, ui){
					var $this = $(this),$parents = $this.closest('.form-group');
					$parents.find('[name=partnerAgencyId]').val(ui.item.id);
			}
		}).off('click').on('click',function(){
			var obj = this;
			$.ajax({
                url: KingServices.build_url('partnerAgency', 'getPartnerAnencyList'),
                type: 'POST',
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var dataList = JSON.parse(data.partnerAgencyList);
						if(dataList && dataList.length > 0){
							for(var i=0; i < dataList.length; i++){
								dataList[i].value = dataList[i].travelAgencyName;
							}
							$(obj).autocomplete('option','source', dataList);
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

		var chooseManager = $container.find('.T-chooseManager');
		chooseManager.autocomplete({
			minLength: 0,
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this),$parents = $this.closest('.form-group');
					$this.val("");
					$parents.find('[name=managerId]').val("");
					$parents.find('[name=mobileNumber]').val("");
				}
			},
			select: function(event, ui){
					var $this = $(this),$parents = $this.closest('.form-group');
					$parents.find('[name=managerId]').val(ui.item.id);
					$parents.find('[name=mobileNumber]').val(ui.item.contactMobileNumber);
			}
		}).off('click').on('click',function(){
			var obj = this, id = $(this).closest('.form-group').find('[name=partnerAgencyId]').val();
			if (!!id) {
				$.ajax({
	                url: KingServices.build_url('partnerAgency', 'getContactListByPartnerAgencyId'),
	                type: 'POST',
	                data: "partnerAgencyId="+id+"",
	                showLoading:false,
	                success: function(data) {
						var result = showDialog(data);
						if(result){
							var dataList = JSON.parse(data.partnerAgencyContactList);
							if(dataList && dataList.length > 0){
								for(var i=0; i < dataList.length; i++){
									dataList[i].value = dataList[i].contactRealname;
								}
								$(obj).autocomplete('option','source', dataList);
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
            }else{
				layer.tips('请选择客户来源', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
            }
		})
	}

	quote.getValue = function($obj,name) {
		var value = $obj.find('[name='+name+']').val();
		return value;
	};

	quote.datePicker = function($container){
		$container.find('.T-datePicker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	quote.dateTimePicker = function($container){
		$container.find('.T-dateTimePicker').datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	}
	quote.updateQuoteToOffer = function(id,type) {
		quote.updateQuote(id,type);
	};
	exports.init = quote.initModule;
	exports.addQuote = quote.addQuote;
	exports.updateQuote = quote.updateQuoteToOffer;
})