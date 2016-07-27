/**
 * 资源管理--线路产品
 *
 * 提供产品编辑的重用
 * 
 */
define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "resource_lineProduct",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		addLineProductTemplate = require("./view/addLineProduct"),
		viewDetailTemplate = require("./view/viewDetail"),
		addQouteTemplate = require("./view/addQoute"),
		updateLineProductTemplate = require("./view/updateLineProduct"),
		shopMainTemplate = require("./view/shopMain"),
		shopListTemplate = require("./view/shopList"),
		selfPayMainTemplate = require("./view/selfPayMain"),
		selfPayListTemplate = require("./view/selfPayList"),
		tabId = "tab-"+menuKey+"-content";
		// 主体对象
	var ResLineProduct = {
		autocompleteDate:{}
	};
		
	// 声明全局变量
	ResLineProduct.$tab = false;
	ResLineProduct.updateLineProductIndex = 0;
	// 临时存放数据
	ResLineProduct.tmpData = {};
	/**
	 * 初始化首页模块
	 * @return {[type]} [description]
	 */
	ResLineProduct.initModule = function() {
		ResLineProduct.getProductList(0);
	};

	/**
	 * 请求产品列表，并用模板初始化页面
	 * @param  {[type]} page   [description]
	 * @param  {[type]} name   [description]
	 * @param  {[type]} status [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.getProductList = function(page, travelLineName, travelLineId){
		var arg = {};

		if (!!ResLineProduct.$tab && arguments.length>1 ) {
			arg = {
				name: ResLineProduct.$tab.find('.T-lineproduct-name').val(),
				type: ResLineProduct.$tab.find('.T-lineproduct-type').val(),
				customerType: ResLineProduct.$tab.find('select[name=customerType]').val(),
				status: ResLineProduct.$tab.find('.T-status').children('button').data('value'),
				travelLineName: ResLineProduct.$tab.find('[name=travelLineName]').val(),
				travelLineId: ResLineProduct.$tab.find('[name=travelLineId]').val()
			};
		}
		if (!!travelLineName && !!travelLineId) {
			
			arg.travelLineName = travelLineName;
			arg.travelLineId = travelLineId;
		}
		arg.page = page || 0;

		$.ajax({
			url: KingServices.build_url('lineProduct', 'listLineProduct'),
			type:"POST",
			showLoading:false,
			data: {
				pageNo: arg.page,
				name: arg.name,
				type: arg.type,
				customerType:arg.customerType,
				status: arg.status,
				sortType: 'auto',
				travelLineName: arg.travelLineName,
				travelLineId: arg.travelLineId
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					ResLineProduct.pageNo = page;

					var lineProductList = data.lineProductList;
					lineProductList = JSON.parse(lineProductList);
					data.lineProductList = lineProductList;
					var html = listTemplate(data);
					ResLineProduct.getQueryTerms();
					Tools.addTab(menuKey,"线路产品管理",html);

					// init $tab
					ResLineProduct.$tab = $("#tab-"+menuKey+"-content");
					ResLineProduct.lineProductType(ResLineProduct.$tab);
					ResLineProduct.needSeatCountS(ResLineProduct.$tab);
					ResLineProduct.autocompleteTravelLine(ResLineProduct.$tab.find('.T-chooseTravelLine'));
					// init event
					ResLineProduct.init_event();
					// 绑定翻页组件
					laypage({
					    cont: ResLineProduct.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		ResLineProduct.getProductList(obj.curr -1, '');
					    	}
					    }
					});		
				}
			}
		});

	};
	// 线路类型
	ResLineProduct.lineProductType  = function($obj){
			var lineProductType = $obj.find(".T-lineproduct-type");
			lineProductType.autocomplete({
				minLength:0,
				select:function(event,ui){
					
				},
				change:function(event,ui){
					
				}
			}).click(function(){
				var objM = this;
				var lineObj = ResLineProduct.autocompleteDate.typeList;
				for(var i = 0;i<lineObj.length;i++){
					// typeKey赋给value
					lineObj[i].value = lineObj[i].typeKey;
				}
				if(lineObj !=null) {
					$(objM).autocomplete('option','source', lineObj);
					$(objM).autocomplete('search', '');
				}else{
					layer.tips('无数据', objM, {
						tips: [1, '#3595CC'],
						time: 2000
					});
				}

			})
		};

		ResLineProduct.autocompleteTravelLine = function ($obj) {
			$obj.autocomplete ({
				minLength: 0,
				change: function (event, ui) {
					if (ui.item === null) {
						var $this = $(this),
							$div = $this.closest('div');
						$this.val('');
						$div.find('[name=travelLineId]').val('');
					}
				},
				select: function (event, ui) {
					var $this = $(this),
						$div = $this.closest('div');
					$div.find('[name=travelLineId]').val(ui.item.id);
				}
			}).click(function () {
				var obj = $(this);
				var travelLineList = ResLineProduct.autocompleteDate.travelLineList;
				for(var i = 0;i<travelLineList.length;i++){
					// typeKey赋给value
					travelLineList[i].value = travelLineList[i].name;
				}
				if(travelLineList.length) {
					obj.autocomplete('option','source', travelLineList);
					obj.autocomplete('search', '');
				}else{
					layer.tips('无数据', obj, {
						tips: [1, '#3595CC'],
						time: 2000
					});
				}
			});
		};

		ResLineProduct.needSeatCountS  = function($obj){
			var needSeatCountS = $obj.find(".T-needSeatCount");
			needSeatCountS.autocomplete({
				minLength:0,
				select:function(event,ui){
					
				},
				change:function(event,ui){
					
				}
			}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('bookingOrder','getSeatCountList'),
				showLoading: false,
				success:function(data){
					if(showDialog(data)){
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
		};

	/**
	 * 初始化列表页面的绑定
	 * @return {[type]} [description]
	 */
	ResLineProduct.init_event = function () {
		// 按钮搜索
		ResLineProduct.$tab.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			ResLineProduct.getProductList(0, '');
		});

		// 回车搜索
		ResLineProduct.$tab.find('.T-lineproduct-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				ResLineProduct.getProductList(0, '');
			}
		});

		// 切换状态
		ResLineProduct.$tab.find('.T-status').find('a').on('click', function(event) {
			event.preventDefault();
			var $that = $(this);

			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());

			ResLineProduct.getProductList(0, '');
		});

		// 报表内的操作
		ResLineProduct.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-view'))  {
				// 查看
				ResLineProduct.viewLineProductDetail(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑
				ResLineProduct.updateLineProduct(id,false);
			} else if ($that.hasClass('T-quote'))  {
				// 报价
				ResLineProduct.quoteLineProduct(id);
			} else if ($that.hasClass('T-copy'))  {
				// 复制
				ResLineProduct.updateLineProduct(id,true);
			} else if ($that.hasClass('T-export'))  {
				// 导出
				ResLineProduct.exportLineProduct(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除
				ResLineProduct.deleteLineProduct(id);
			}
		});
	};

	/**
	 * 查看线路产品信息
	 * @param  {int} id 数据索引
	 * @return {[type]}    [description]
	 */
	ResLineProduct.viewLineProductDetail = function(id){
		if (!!id) {
			$.ajax({
	    		url: KingServices.build_url('lineProduct', 'getLineProductById'),
				type:"POST",
				data:"id=" + id,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var lineProduct = JSON.parse(data.lineProduct);
						var busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
						//var guideTemplate = JSON.parse(data.guideTemplate);
						var insuranceTemplate = JSON.parse(data.insuranceTemplate);
						var daysList = JSON.parse(data.daysList);
						data.viewLineProduct = {
								lineProduct : lineProduct,
								busCompanyTemplate : busCompanyTemplate,
								//guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList
						};
						data.serviceStandardList = JSON.parse(data.serviceStandardList);
						data.productPriceList = JSON.parse(data.productPriceList);
						Tools.addTab(menuKey+"-view","查看线路产品",viewDetailTemplate(data));
						//要求内容过长的处理
						var tab_id = menuKey+"-view" ;
						var $viewTab = $('#tab-'+tab_id+'-content');
						var $tbody = $viewTab.find('.T-service-list');
						Tools.descToolTip($tbody.find(".T-ctrl-tip"),1);
					}
				}
	    	})
		} else {
			console.error('产品id为空');
		}
	};

	/**
	 * 使用模板增加线路产品
	 * @param {[type]} templateId [description]
	 */
	ResLineProduct.addLineProduct = function(templateId) {
		var tab_id = menuKey + '-add';

		if (ResLineProduct.add_id === templateId) {
			$('.tab-' + tab_id).children('a').trigger('click');
			return;
		}
		$.ajax({
			url: KingServices.build_url('travelLine', 'getTravelLineById'),
			type: 'post',
			data: {id: templateId},
		})
		.done(function(data) {
			if (showDialog(data))  {
				data.travelLine = JSON.parse(data.travelLine);
				if (Tools.addTab(tab_id, '新建线路产品', addLineProductTemplate(data))) {
					ResLineProduct.tmpData.type = true;  // 新增模式
					ResLineProduct.init_updata_tab(tab_id);
				}
			}
		});
	}

	/**
	 * 编辑、复制线路模板。其中编辑和添加功能将提供给其他模块调用
	 * @param  {id} id            编辑或者复制的线路产品的id
	 * @param  {Boolean} clipboardMode true表示复制、false表示编辑
	 * @return {[type]}               [description]
	 */
	ResLineProduct.updateLineProduct = function(id,clipboardMode){
		if (!!id) {
			// 编辑或者复制
			var title = "修改线路产品", tab_id = menuKey + '-update';
			if(clipboardMode){
				title = "复制线路产品";
				tab_id = menuKey + '-copy';
			}

			var $tab = $('#tab-'+ tab_id + '-content');
			if ($tab.length && $tab.find('.T-btn-submit').data('id') == id) {	// 如果打开的是相同产品，则不替换
				$('.tab-' + tab_id).children('a').trigger('click');
				return;
			}

			$.ajax({
	    		url: KingServices.build_url('lineProduct', 'getLineProductById'),
				type:"POST",
				data:"id=" + id,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var lineProductDetail = JSON.parse(data.lineProduct),
							busCompanyTemplate = JSON.parse(data.busCompanyTemplate),
							//guideTemplate = JSON.parse(data.guideTemplate),
							insuranceTemplate = JSON.parse(data.insuranceTemplate),
							productPriceList = JSON.parse(data.productPriceList),
							daysList = JSON.parse(data.daysList);					

						data.viewLineProduct = {
								lineProduct : lineProductDetail,
								busCompanyTemplate : busCompanyTemplate,
								//guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList,
								productPriceList: productPriceList
						};
						
						data.viewLineProduct.clipboardMode = clipboardMode;				

						ResLineProduct.tmpData.productId = id;
						ResLineProduct.tmpData.type = clipboardMode;
						if (!!data.serviceStandardList) {
							data.serviceStandardList = JSON.parse(data.serviceStandardList);
							data.viewLineProduct.serviceStandardList = data.serviceStandardList;
						}

						data.viewLineProduct.editorName = tab_id + '-ueditor';
						var html = updateLineProductTemplate(data.viewLineProduct);
						// 初始化页面
						if (Tools.addTab(tab_id, title, html)) {
							ResLineProduct.init_updata_tab(tab_id);							
						}
						// 绑定autocomplete
						$tab = $('#tab-'+ tab_id + '-content');
						//Input控件精度的限制
						var $guideFee= $tab.find('input[name=guideFee]'),
						    $price= $tab.find('input[name=price]'),
						    $seatPrice= $tab.find('input[name=seatPrice]');
						    Tools.inputCtrolFloat($guideFee);
						    Tools.inputCtrolFloat($price);
						    Tools.inputCtrolFloat($seatPrice);

						var $dayListArea = $tab.find('.T-timeline-container');
						ResLineProduct.bindRestaurantEvent($dayListArea.find('.T-choose-restaurantName'), $dayListArea.find('.T-choose-restaurantStandardsName'));
						ResLineProduct.bindHotelEvent($dayListArea.find('.T-choose-hotelName'), $dayListArea.find('.T-choose-hotelRoom'), $dayListArea.find('.T-choose-hotelStarLevel'));
						ResLineProduct.bindScenicEvent($dayListArea.find('.T-choose-scenicName'));
						ResLineProduct.bindShopEvent($dayListArea.find('.T-choose-shopVendorName'));
						ResLineProduct.bindSelfPay($dayListArea.find('.T-choose-ticketCompanyName'));
						ResLineProduct.bindTicketEvent($dayListArea.find('.chooseTicketName'));

						//修改用餐类型后清空餐标和菜单
						$tab.find(".T-restauranType").on("change", function(){
							var typeParent = $(this).parent().parent();
							typeParent.find("input[name=typeName]").val("");
							typeParent.find("input[name=menuList]").val("");
							typeParent.find("input[name=pricePerPerson]").val("");
							typeParent.find("input[name=remark]").val("");
						});
					}
				}
			});
		}
	};

	/**
	 * 初始化tab方法.主要便于编辑或者回调调用
	 * @return {[type]} [description]
	 */
	ResLineProduct.init_updata_tab = function (tab_id) {
		var id = ResLineProduct.tmpData.productId,
			clipboardMode = ResLineProduct.tmpData.type,
			$tab = $('#tab-'+ tab_id + '-content');

		// 初始化页面容器
		if (clipboardMode) {
			ResLineProduct.$copyTab = $tab;
		} else {
			ResLineProduct.$editTab = $tab;
		}
		// 绑定页面事件
		ResLineProduct.init_CRU_event(id, $tab);

		// 初始化数据
		if(!clipboardMode) {
			$tab.find('.T-btn-submit').data('id', id);
		}

		//Input控件精度的限制
		var $guideFee= $tab.find('input[name=guideFee]'),
		    $price= $tab.find('input[name=price]'),
		    $seatPrice= $tab.find('input[name=seatPrice]');
		    Tools.inputCtrolFloat($guideFee);
		    Tools.inputCtrolFloat($price);
		    Tools.inputCtrolFloat($seatPrice);
		
		// 以下待修改
		ResLineProduct.mousedownBlur($tab);

		var updateList =$tab.find(".T-dailyArrangeList");
		if(updateList.length > 0){
			for(var k=0; k<updateList.length; k++){
				var updateDays = updateList.eq(k).find(".T-timeline-detail-container");
				if( updateDays.find(".T-timeline-item").length > 0){
					var arr = [], daysList = updateDays.find(".T-timeline-item");
					for(var i=0; i<daysList.length; i++){
						arr.push(daysList[i].outerHTML);
					}
					arr.sort(function(a,b){
						a = parseInt(/data-entity-index=\"(\d+)/.exec(a)[1], 10);
						b = parseInt(/data-entity-index=\"(\d+)/.exec(b)[1], 10);
						return a-b;
					});
					
					updateDays.html(arr.join(""));
				}
			}
			var daysDetailList = $tab.find(".T-timeline-item"),
			daysDetailListIndex = parseInt(daysDetailList.eq(daysDetailList.length-1).attr("data-entity-index")) + 1;
			ResLineProduct.updateLineProductIndex = isNaN(daysDetailListIndex) ? 0 : daysDetailListIndex;

		}
	}

	/**
	 * 初始化添加、编辑、复制的事件绑定
	 * 考虑到它们之前的差异仅仅在于是否已经存在id，因此提为公共方法
	 * @param  {int} id            线路产品的id
	 * @param  {Boolean} clipboardMode true：复制，false：编辑
	 * @return {[type]}               [description]
	 */
	ResLineProduct.init_CRU_event = function(id, $tab) {
		if (!!$tab && $tab.length === 1) {
			var validator = rule.lineProductCheckor($tab);

			// 监听修改
			$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
			.on('change', function(event) {
				event.preventDefault();
				$tab.data('isEdited', true);
			})
			// 监听保存，并切换tab
			.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
				event.preventDefault();
				ResLineProduct.saveProductData($tab, validator, [tab_id, title, html]);
			})
			.on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				ResLineProduct.init_CRU_event($tab.find('.T-btn-submit').data('id'), $tab);
			})
			// 保存后关闭
			.on(CLOSE_TAB_SAVE, function(event) {
				event.preventDefault();
				ResLineProduct.saveProductData($tab, validator);
			});

			// 初始化富文本插件
			$tab.find('.T-daylist').children('.tab-pane').each(function(index, el) {
				init_editor($(this).find('.T-editor').prop('id'));
			});
			
			//添加具体行程安排相应事件
			$tab.find('.T-middleForm').on('click', '.T-add', function(event) {
				event.preventDefault();
				var $that = $(this);

				if ($that.hasClass('T-addRestaurant')) {
					// 添加餐厅
					ResLineProduct.addRestaurant($that, validator);
				} else if ($that.hasClass('T-addHotel')) {
					// 添加酒店
					ResLineProduct.addResourceHotel($that, validator);
				} else if ($that.hasClass('T-addScenic')) {
					// 添加景区
					ResLineProduct.addResourceScenic($that, validator);
				} else if ($that.hasClass('T-addShop')) {
					// 添加购物
					ResLineProduct.addResourceShopping($that, validator);
				} else if ($that.hasClass('T-addSelfPay')) {
					// 添加自费
					ResLineProduct.addResourceSelfPaying($that, validator);
				} else if ($that.hasClass('T-addTraffic')) {
					// 添加交通
					ResLineProduct.addResourceTraffic($that, validator);
				} else if ($that.hasClass('T-addOther')) {
					// 添加交通
					ResLineProduct.addOther($that, validator);
				} else if ($that.hasClass('T-addInsurance')) {
					// 添加保险
					ResLineProduct.addInsurance($that, validator);
				} else if ($that.hasClass('T-addBusCompany')) {
					// 添加车队
					ResLineProduct.addBusCompany($that, validator);
				}
			})
			.on('click', '.T-delete', ResLineProduct.deleteLineProductDaysArrange);
			//绑定导游服务标准
			$tab.find('.T-guideService-form').on('click','.T-add-service',function(){
				//添加导游服务标准
				ResLineProduct.addGuideService($tab);
			}).on('click','.T-action',function(){
				var $that = $(this);
				if($that.hasClass('T-addService')){
					//添加服务标准到资源 KingServices.addGuideService
					ResLineProduct.addService($that);
				}else if($that.hasClass('T-delete')){
					//删除服务标准
					ResLineProduct.delService($(this));
				}
			}).on('change','input[name=serviceName]',function(){
				//校验服务标准是否重复
				ResLineProduct.checkService($tab,$(this));
			});
			//获取服务标准
			ResLineProduct.getServiceList($tab,$tab.find('.T-service-list'));

			//绑定价格标准事件
			$tab.find('.T-price-form').find('.datePicker').datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$tab.find('.T-price-form').off('click').on('click','.T-add-price',function() {
				//添加价格标准
				ResLineProduct.addPrice($tab);
			}).on('click','.T-delPrice',function() {
				//删除事件
				ResLineProduct.delPrice($(this));
			});

			// 绑定安排的拖动事件				
			$tab.find('.T-timeline-detail-container').sortable({
				containment: 'parent',
				axis: "y",
				handle: '.table-bordered thead',
				tolerance:'pointer',
				update: function(event, ui) {
					ResLineProduct.updateRouteIndex($tab);
				}
			});

			//购物自费商家浮动显示
			ResLineProduct.viewOptionalSelfPay($tab.find('.T-selfPayMultiselect'));
			ResLineProduct.viewOptionalShop($tab.find('.T-shopMultiselect'));

			/**
			 * 绑定基础安排
			 */
			// 导游
			ResLineProduct.bindGuideChosen($tab.find('.T-guide-name'), validator);
			ResLineProduct.bindInsuranceChosen($tab.find('.T-insurance-name'), $tab.find('.T-chooseInsuranceItem'), validator);
			ResLineProduct.bindSeatCount($tab.find('.T-needSeatCount'), validator);
			ResLineProduct.bindBusBrand($tab.find('.T-busBrand'), validator);
			// ResLineProduct.bindBusCompanyChosen($tab.find('.T-buscompany-name'), validator);
			// ResLineProduct.bindBusDetailChosen($tab.find('.T-licenseNumber'), validator);

			$tab.find('.T-btn-submit').on('click', function(event) {
				event.preventDefault();
				ResLineProduct.saveProductData($tab, validator);
			});

			//购物商家多选
			$tab.find('.T-multiselect').on('click', function() {
				var $this = $(this);
				if ($this.hasClass('T-shopMultiselect')) {
					ResLineProduct.shopMultiselect($this);
				}else if ($this.hasClass('T-selfPayMultiselect')) {
					ResLineProduct.selfPayMultiselect($this);
				}
			})
		}
	};
	//新增导游服务标准 ResLineProduct.addGuideService
	ResLineProduct.addGuideService = function($obj){
		var $tbody = $obj.find('.T-service-list');
		var html = '<tr>'+
		'<td><input name="serviceName" type="text" class="col-xs-12"><input name="serviceId" type="hidden"></td>'+
		'<td><input name="serviceContent" type="text" class="col-xs-12"></td>'+
		'<td><input name="serviceRequire" type="text" class="col-xs-12"></td>'+
		'<td><a class="cursor T-action T-addService">添加服务标准</a><a class="cursor"> |</a> <a class="cursor T-action T-delete">删除</a></td>'+
		'</tr>';
		$tbody.append(html);
		//获取服务标准
		ResLineProduct.getServiceList($obj,$tbody);
	};
	//添加服务标准到资源
	ResLineProduct.addService = function($obj){
		var $tr = $obj.closest('tr');
		var args = {
			serviceTitle:$tr.find('input[name=serviceName]').val(),
			serviceContent:$tr.find('input[name=serviceContent]').val(),
			serviceRequire:$tr.find('input[name=serviceRequire]').val(),
			form:"lineProduct"
		};
		//添加服务标准到资源 
		KingServices.addGuideService(args);
	};
	//删除服务标准
	ResLineProduct.delService = function($obj){
		var $tr = $obj.closest('tr');
		if(!!$tr.attr('serviceId')){
			showConfirmDialog("你确定要删除该条记录？", function() {
				$.ajax({
					url:KingServices.build_url('serviceStandardController','deleteServiceStandard'),
					data:{
						id:$tr.attr('serviceId')
					},
					type:'POST',
					success:function(data){
						showMessageDialog(data.message);
						$tr.remove();
					}
				});
			});
		}else{
			$tr.remove();
		};
	};
	//校验服务标准是否重复
	ResLineProduct.checkService = function($tab,val){

		//获取服务标准
		var serviceStandardList = [];
		$tab.find('.T-service-list tr').each(function(index,el){
			var $that = $(this);
			var args = {
				serviceTitle:$that.find('input[name=serviceName]').val(),
				serviceContent:$that.find('input[name=serviceContent]').val(),
				serviceRequire:$that.find('input[name=serviceRequire]').val()
			};
			serviceStandardList.push(args);
		});
		//校验是否有重复的服务标准
		if(serviceStandardList.length>=2){
			for(var i = 0;i<serviceStandardList.length;i++){
				if(!!val){
					if(serviceStandardList[i].serviceTitle == val){
						showMessageDialog('【'+val+'】'+"服务标准已存在，请检查");
					}
				}else{
					if(i+1 !=serviceStandardList.length){
						if(serviceStandardList[i].serviceTitle == serviceStandardList[i+1].serviceTitle){
							showMessageDialog('【'+serviceStandardList[i+1].serviceTitle+'】'+"服务标准已存在，请检查");
							return;
						}
					}else{
						if(serviceStandardList[i-1].serviceTitle == serviceStandardList[i].serviceTitle){
							showMessageDialog('【'+serviceStandardList[i].serviceTitle+'】'+"服务标准已存在，请检查");
							return;
						}
					}
				}
				
			}
		};
	};
	//获取导游服务标准
	ResLineProduct.getServiceList = function($tab,$obj){
		var $clickObj = $obj.find('input[name=serviceName]');
		$clickObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
				}
			},
			select:function(event,ui){
				var $that = $(this);
				ResLineProduct.checkService($tab,ui.item.serviceTitle);
				$.ajax({
					url:KingServices.build_url('serviceStandardController','getServiceStandardTemplate'),
					data:{
						id:ui.item.id
					},
					type:'POST',
					showLoading:false,
					success:function(data){
						if(showDialog(data)){
							var $tr = $that.closest('tr');
							data.gssTemplate = JSON.parse(data.gssTemplate);
							$tr.find('input[name=serviceContent]').val(data.gssTemplate.serviceContent);
							$tr.find('input[name=serviceRequire]').val(data.gssTemplate.serviceRequire);
							$tr.find('input[name=serviceId]').val(ui.item.id);
						}
					}
				});
				
				
			}
		}).off('click').on('click',function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url('serviceStandardController','getServiceStandardTemplateDropDownList'),
				type:'POST',
				showLoading:false,
				success:function(data){
					if(showDialog(data)){
						var serviceList = JSON.parse(data.gssTemplateList);
						for(var i = 0; i<serviceList.length;i++){
							serviceList[i].value = serviceList[i].serviceTitle;
						};
						$(obj).autocomplete('option','source',serviceList);
						$(obj).autocomplete('search', '');
					}
				}
			})
		});
	};

	//添加价格标准
	ResLineProduct.addPrice = function($tab) {
		var html = '<tr>'
		+'<td><input class="datePicker col-xs-12" type="text" name="startTime" /></td>'
		+'<td><input class="datePicker col-xs-12" type="text" name="endTime" /></td>'
		+'<td><input class="F-float F-money col-xs-12" type="text" name="adultPrice" /></td>'
		+'<td><input class="F-float F-money col-xs-12" type="text" name="childPrice" /></td>'
		+'<td><a class="cursor T-action T-delPrice">删除</a></td>'
		+'</tr>';
		$tab.find('.T-price-list').append(html);
		$tab.find('.datePicker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};

	//删除价格标准
	ResLineProduct.delPrice = function($obj) {
		var $tr = $obj.closest('tr'),priceId = $tr.data('priceid');
		if(!!priceId){
			showConfirmDialog("确定要删除？", function() {
				$.ajax({
					url:KingServices.build_url('lineProduct','deleteLineProductArrangeTemplate'),
					data:{
						templateJsonDel: JSON.stringify({
							id: priceId,
							name: 'productPrice'
						})
					},
					type:'POST',
					success:function(data){
						showMessageDialog(data.message);
						$tr.remove();
					}
				});
			});
		} else {
			$tr.remove();
		}
	}
	/**
	 * 线路产品购物多选
	 * @param  {[type]} $this [当前元素]
	 * @return {[type]}       [description]
	 */
	ResLineProduct.shopMultiselect = function($this) {
		var html = shopMainTemplate(),$inputJson = $this.data("propover");
		if (!!$inputJson && typeof $inputJson === "string") {
			$inputJson = JSON.parse($inputJson);
		}
		var multiselectLayer = layer.open({
            type: 1,
            title: "购物商家选择",
            skin: 'layui-layer-rim', //加上边框
            area: '1190px', //宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success: function(data) {
				var $container = $(".T-shopOptional-container"),
                	$list = $container.find('.T-shopOptionalList'),
                	shopArray = [];

            	shopListSearch(0);

            	//给提交按钮绑定事件
                $container.find(".T-btn-saveOptional").on('click' , saveShop);
                //给取消按钮绑定事件
                $container.find(".T-btn-cancelOptional").click(function() {
                    layer.close(multiselectLayer);
                });

                if (!!$inputJson && $inputJson.length != 0) {
                	for (var i = 0; i < $inputJson.length; i++) {
                		var json = {
                			id: $inputJson[i].id,
                			shopId: $inputJson[i].shopId,
                			name: $inputJson[i].name,
                			item: $inputJson[i].item
                		}
						shopArray.push(json)
                	}
                }

            	function shopListSearch(page,shopName) {
	            	$.ajax({
	            		url: KingServices.build_url('shop','findShopAndPolicy'),
	            		type: 'POST',
	            		data: {
	            			pageNo: page,
	            			shopName: shopName,
	            			sortType: ''
	            		},
	            		success: function(data) {
	            			if (showDialog(data)) {
	            				data.shopList = JSON.parse(data.shopList);
	            				var content = shopListTemplate(data)
	            				$list.html(content);
	            				$(window).trigger("resize");

								// 绑定翻页组件
								laypage({
								    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
								    pages: data.totalPage, //总页数
								    curr: (page + 1),
								    jump: function(obj, first) {
								    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
								    		shopListSearch(obj.curr -1);
								    	}
								    }
								});	

								//翻页自动勾选已选购物
								var $tr = $list.find('tr');
								if (!!shopArray.length) {
									for (var i = 0, len = shopArray.length; i < len; i++) {
										$tr.each(function(j) {
											var $id = $tr.eq(j).data('entity-id');
											if (shopArray[i].shopId == $id) {
												$tr.eq(j).find('.T-add').prop('checked',true);
											}
										});
									}
								}

								//添加/删除自选
								$container.find(".T-add").off('click').on('click', addShop);
	            			}
	            		}
	            	});
            	}
            	//添加自选函数
	        	function addShop(){
	        		var $that = $(this),$parent = $that.closest('tr'),
						$shopId = $parent.data("entity-id"),
						$name = $parent.data("entity-name"),
						$item = $parent.data("entity-item");
					if (shopArray.length == 0) {
						var json = {
							shopId:  $shopId,
							name: $name,
							item: $item
						}
						shopArray.push(json);
					}else{
						for (var i = 0,len = shopArray.length; i < len; i++) {
		        			if (shopArray[i].shopId == $shopId) {
    							/*if (!!shopArray[i].id) {
    								$.ajax({
    									url: KingServices.build_url("restaurant","deleteChooseRestaurant"),
    									type: 'POST',
    									data: "id="+shopArray[i].id,
    									showLoading: false,
    									success: function(){
					        				shopArray.splice(i,1);
		        							$that.prop("checked",false);
    										saveOptional(1);
    									}
    								})
    							}else{*/
			        				shopArray.splice(i,1);
    							/*}*/
    							return;
		        			}
		        		}
		        		if(shopArray.length >= 50){
							showMessageDialog("最多只能添加50个购物商家");
	        				$that.prop("checked",false);
		        		}else{
							var json = {
								shopId:  $shopId,
								name: $name,
								item: $item
							}
							shopArray.push(json);
						}
	        		}
	        	};
	        	//保存函数
	        	function saveShop(type){
	        		var optionalJson = shopArray;
	        		optionalJson = JSON.stringify(optionalJson);
	        		$this.data("propover" , optionalJson);
	        		if (type == 1) {}else{
	        			layer.close(multiselectLayer);
	        		}
					ResLineProduct.viewOptionalShop($this);
	        	};
            }
        })
	}

	/**
	 * 浮动查看购物多选
	 * @param  {[type]} $objInput [对象]
	 * @return {[type]}           [description]
	 */
	ResLineProduct.viewOptionalShop = function($objInput){
		$objInput.each(function(){
			var $this = $(this),$parents = $this.closest('.form-group'),$title = [],$value = $this.data("propover");
			if (!!$value && typeof $value === "string") {
				$value = JSON.parse($value);
			}
			var inputValue= '',
				html = '';
			if (!!$value && $value.length > 0) {
				html = '<table class="table table-striped table-hover"><thead><tr><th class="th-border">商家名称</th><th class="th-border">商品列表</th></tr><tbody>';
				for (var i = 0; i < $value.length; i++) {
					html += '<tr><td>'+$value[i].name+'</td><td>'+$value[i].item+'</td></tr>'
					if (i == $value.length - 1) {
						inputValue += $value[i].name
					}else{
						inputValue += $value[i].name+'、'
					}
				};
				html += '</tbody></table>';
			}
			$this.data("html",html);
			$this.val(inputValue);
			Tools.descToolTip($this,2);
			$this.data('bs.popover').options.content = html;
		})
	}

	/**
	 * 线路产品自费多选
	 * @param  {[type]} $this [对象]
	 * @return {[type]}       [description]
	 */
	ResLineProduct.selfPayMultiselect = function($this) {
		var html = selfPayMainTemplate(),$inputJson = $this.data("propover");
		if (!!$inputJson && typeof $inputJson === "string") {
			$inputJson = JSON.parse($inputJson);
		}
		var multiselectLayer = layer.open({
            type: 1,
            title: "自费项目选择",
            skin: 'layui-layer-rim', //加上边框
            area: '1190px', //宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success: function(data) {
				var $container = $(".T-selfPayOptional-container"),
                	$list = $container.find('.T-selfPayOptionalList'),
                	selfPayArray = [];

            	shopListSearch(0);

            	//给提交按钮绑定事件
                $container.find(".T-btn-saveOptional").on('click' , saveShop);
                //给取消按钮绑定事件
                $container.find(".T-btn-cancelOptional").click(function() {
                    layer.close(multiselectLayer);
                });

                //if (!!$inputJson && $inputJson.length != 0) {
                	/*for (var i = 0; i < $inputJson.length; i++) {
                		var json = {
                			id: $inputJson[i].id,
                			shopId: $inputJson[i].shopId,
                			name: $inputJson[i].name,
                			item: $inputJson[i].item
                		}
						selfPayArray.push(json)
                	}*/
                	selfPayArray = $inputJson || [];
                //}

            	function shopListSearch(page,selfPayName) {
	            	$.ajax({
	            		url: KingServices.build_url('selfpay','findSelfPayAndItem'),
	            		type: 'POST',
	            		data: {
	            			pageNo: page,
	            			selfPayName: selfPayName,
	            			sortType: ''
	            		},
	            		success: function(data) {
	            			if (showDialog(data)) {
	            				data.selfPayList = JSON.parse(data.selfPayList);
	            				var content = selfPayListTemplate(data)
	            				$list.html(content);
	            				$(window).trigger("resize");

								// 绑定翻页组件
								laypage({
								    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
								    pages: data.totalPage, //总页数
								    curr: (page + 1),
								    jump: function(obj, first) {
								    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
								    		shopListSearch(obj.curr -1);
								    	}
								    }
								});	

								//翻页自动勾选已选自费项目
								var $tr = $list.find('tr');
								if (!!selfPayArray.length) {
									for (var i = 0, len = selfPayArray.length; i < len; i++) {
										for (var k = 0, itemLen = selfPayArray[i].item.length; k < itemLen; k++) {
											$tr.each(function(j) {
												var $id = $tr.eq(j).find('[name=itemId]').val();
												if (selfPayArray[i].item[k].itemId == $id) {
													$tr.eq(j).find('.T-add').prop('checked',true);
												}
											});
										}
									}
								}

								//添加/删除自选
								$container.find(".T-add").off('click').on('click', addShop);
	            			}
	            		}
	            	});
            	}
            	//添加自选函数
	        	function addShop(){
	        		var $that = $(this),$parent = $that.closest('tr'),
						$selfPayId = $parent.data("entity-id"),
						$name = $parent.data("entity-name"),
						$itemId = $parent.find('[name=itemId]').val(),
						$itemName = $parent.data("entity-itemname");
					if (selfPayArray.length == 0) {
						var json = {
							selfPayId: $selfPayId,
							name: $name,
							item: [{
								itemId: $itemId,
								itemName: $itemName
							}]
						}
						selfPayArray.push(json);
					}else{
						for (var i = 0,len = selfPayArray.length; i < len; i++) {
		        			if (selfPayArray[i].selfPayId == $selfPayId) {
		        				for (var j = 0, itemLen = selfPayArray[i].item.length; j < itemLen; j++) {
		        					if (selfPayArray[i].item[j].itemId == $itemId) {
		        						selfPayArray[i].item.splice(j,1);
		        						if (selfPayArray[i].item.length == 0) {
		        							selfPayArray.splice(i,1)
    										return;
		        						}
    									return;
		        					}
		        				}
		        				
    							/*if (!!selfPayArray[i].id) {
    								$.ajax({
    									url: KingServices.build_url("restaurant","deleteChooseRestaurant"),
    									type: 'POST',
    									data: "id="+selfPayArray[i].id,
    									showLoading: false,
    									success: function(){
					        				selfPayArray.splice(i,1);
		        							$that.prop("checked",false);
    										saveOptional(1);
    									}
    								})
    							}else{*/
			        				
    							/*}*/
		        			}
		        		}
		        		var a = 0;
		        		for (var i = 0,len = selfPayArray.length; i < len; i++) {
		        			if (selfPayArray[i].selfPayId == $selfPayId) {
		        				a = i+1;
		        				break;
		        			}
		        		}
		        		if (a == 0) {
		        			var json = {
								selfPayId: $selfPayId,
								name: $name,
								item: [{
									itemId: $itemId,
									itemName: $itemName
								}]
							}
							selfPayArray.push(json);
		        		} else {
		        			var itemJson = {
		        				itemId: $itemId,
		        				itemName: $itemName
		        			}
		        			selfPayArray[a-1].item.push(itemJson);
		        		}
	        		}
	        	};
	        	//保存函数
	        	function saveShop(type){
	        		var optionalJson = selfPayArray;
	        		optionalJson = JSON.stringify(optionalJson);
	        		$this.data("propover" , optionalJson);
	        		if (type == 1) {}else{
	        			layer.close(multiselectLayer);
	        		}
					ResLineProduct.viewOptionalSelfPay($this);
	        	};
            }
        })
	}

	/**
	 * 浮动查看自费多选
	 * @param  {[type]} $objInput [对象]
	 * @return {[type]}           [description]
	 */
	ResLineProduct.viewOptionalSelfPay = function($objInput){
		$objInput.each(function(){
			var $this = $(this),$parents = $this.closest('.form-group'),$title = [],$value = $this.data("propover");
			if (!!$value && typeof $value === "string") {
				$value = JSON.parse($value);
			}
			var inputValue= '',
				html = '';
			if (!!$value && $value.length > 0) {
				html = '<table class="table table-striped table-hover"><thead><tr><th class="th-border">自费商家</th><th class="th-border">自费项目</th></tr><tbody>';
				for (var i = 0; i < $value.length; i++) {
					var itemName = '';
					for (var j = 0, len = $value[i].item.length; j < len; j++) {
						if (j == len - 1) {
							itemName += $value[i].item[j].itemName;
						}else{
							itemName += $value[i].item[j].itemName + '、';
						}
					}
					if (i == $value.length -1) {
						inputValue += $value[i].name + '(' + itemName + ')';
					}else{
						inputValue += $value[i].name + '(' + itemName + ')、  ';
					}
					html += '<tr><td>'+$value[i].name+'</td><td>'+itemName+'</td></tr>'
				};
				html += '</tbody></table>';
			}
			$this.data("html",html);
			$this.val(inputValue);
			Tools.descToolTip($this,2);
			$this.data('bs.popover').options.content = html;
		})
	}

	/**
	 * 绑定导游选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindGuideChosen = function($input, validator) {
		$input.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=guideNameId]").val("");
					$tr.find("input[name=guideFee]").val("");
					$tr.find("input[name=gender]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=guideLevel]").val("");
					$tr.find("input[name=company]").val("");
				}
				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
			},
			select:function(event,ui){
				var $that = $(this).blur();
				
				$.ajax({
					url: KingServices.build_url('guide', 'getGuideById'),
					data:"id="+ui.item.id,
					showLoading:false,
					success: function(data) {
						var result = showDialog(data);
						if(result){
							var guide = JSON.parse(data.guide), $tr = $that.closest('tr');
							$tr.find("input[name=guideNameId]").val(guide.id).trigger('change');
							if(guide.gender == 0){
								$tr.find("input[name=gender]").val("男");
							}
							else{
								$tr.find("input[name=gender]").val("女");
							}
							$tr.find("input[name=mobileNumber]").val(guide.mobileNumber);

							var guideLevel = guide.guideLevel, levelLabel = "初级导游资格";							
							if(guideLevel == 2){
								levelLabel = "中级导游资格";
							}
							else if(guideLevel == 3){
								levelLabel = "高级导游资格";
							}
							else if(guideLevel == 4){
								levelLabel = "特级导游资格";
							}
							$tr.find("input[name=guideLevel]").val(levelLabel);
							$tr.find("input[name=company]").val(guide.company);

							// 更新表单验证的配置
							validator = rule.lineProductUpdate(validator);
						}
					}
				});
			}
		}).click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('guide', 'findAll'),
				dataType: "json",
				showLoading:false,
				success: function(data) {
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
	};

	/**
	 * 绑定保险选择
	 * @param  {object} $input 绑定的Dom
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindInsuranceChosen = function($input, $item, validator) {
		$input.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=insuranceId]").val("");
					$tr.find("input[name=type]").val("");
					$tr.find("input[name=typeId]").val("");
					$tr.find("input[name=price]").val("");
					$tr.find("input[name=telNumber]").val("");
					$tr.find("input[name=managerName]").val("");
					$tr.find("input[name=mobileNumber]").val("");
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
							$tr.find("input[name=type]").val("");
							$tr.find("input[name=typeId]").val("");
							$tr.find("input[name=price]").val("");
							$tr.find("input[name=telNumber]").val(insurance.telNumber);
							$tr.find("input[name=managerName]").val(insurance.managerName);
							$tr.find("input[name=mobileNumber]").val(insurance.mobileNumber);

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
	};

	/**
	 * 选择车座数
	 * @param  {object} $input    车座数选择框
	 * @param  {object} validator 校验对象
	 * @return {[type]}           [description]
	 */
	ResLineProduct.bindSeatCount = function($input, validator) {
		$input.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					parents.find("input[name=companyName]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=brand]").val("");
					parents.find("input[name=licenseNumber]").val("");
					parents.find("input[name=seatPrice]").val("");
					parents.find("input[name=seatCount]").val("");
					parents.find("input[name=charteredPrice]").val("");
					parents.find("input[name=mobileNumber]").val("");
				}
				validator = rule.lineProductUpdate(validator);
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
				parents.find("input[name=companyName]").val("");
				parents.find("input[name=brand]").val("");
				parents.find("input[name=busCompanyId]").val("");
				parents.find("input[name=licenseNumber]").val("");
				parents.find("input[name=seatPrice]").val("");
				parents.find("input[name=seatCount]").val("");
				parents.find("input[name=charteredPrice]").val("");
				parents.find("input[name=mobileNumber]").val("");

				validator = rule.lineProductUpdate(validator);
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('bookingOrder','getSeatCountList'),
				showLoading: false,
				success:function(data){
					if(showDialog(data)){
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
	};

	/**
	 * 绑定车队安排品牌选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindBusBrand = function($input, validator) {
		$input.autocomplete({
			minLength: 0,
			change: function(event, ui) {
				var $this = $(this);
				if(ui.item == null){
					$this.val('')
				}
			},
			select: function(event, ui) {

			}
		}).click(function() {
			var $this = $(this), $parents = $this.closest('tr'),
				needSeatCount = $parents.find('[name=needSeatCount]').val();
			if (!!needSeatCount) {
				$.ajax({
					url: KingServices.build_url('bookingOrder', 'getBusBrandList'),
					data:"seatCount="+needSeatCount,
					showLoading:false,
					success: function(data) {
						var result = showDialog(data);
						if(result){
							var busBrandList = data.busBrandList;
							if(busBrandList != null && busBrandList.length > 0){
								for(var i=0;i<busBrandList.length;i++){
									busBrandList[i].value = busBrandList[i];
								}
							}
							$this.autocomplete('option','source', busBrandList);
							$this.autocomplete('search', '');
						}
					}
				});
			}else {
				layer.tips('请选择座位数', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	}

	/**
	 * 绑定车队选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindBusCompanyChosen = function($input, validator) {
		$input.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=busCompanyId]").val("");
					$tr.find("input[name=licenseNumber]").val("");
					$tr.find("input[name=seatPrice]").val("");
					$tr.find("input[name=seatCount]").val("");
					$tr.find("input[name=charteredPrice]").val("");
					$tr.find("input[name=mobileNumber]").val("");
				}

				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
			},
			select:function(event,ui){
				var $tr = $(this).blur().closest('tr');
				
				$tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
				$tr.find("input[name=licenseNumber]").val("");
				$tr.find("input[name=seatPrice]").val("");
				$tr.find("input[name=seatCount]").val("");
				$tr.find("input[name=charteredPrice]").val("");
				$tr.find("input[name=mobileNumber]").val("");
				
				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);	
			}
		}).click(function(){
			var obj = this;
			var needSeatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
			$.ajax({
				url: KingServices.build_url('busCompany', 'findBusCompanyBySeat'),
				data:"seatCount="+needSeatCount,
				showLoading:false,
				success: function(data) {
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
	};

	/**
	 * 绑定车辆选择
	 * @param  {object} $input 绑定的Dom
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindBusDetailChosen = function($input, validator) {
		$input.autocomplete({
			minLength:0,
			select:function(event,ui){
				var $that = $(this);
				$.ajax({
					url: KingServices.build_url('busCompany', 'findBusDetailById'),
					data:"id="+ui.item.id,
					showLoading:false,
					success: function(data) {
						var result = showDialog(data);
						if(result){
							var d = JSON.parse(data.bus), $tr = $that.closest('tr');
							$tr.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
							$tr.find("input[name=seatPrice]").val(d.seatPrice);
							$tr.find("input[name=seatCount]").val(d.seatCount);
							$tr.find("input[name=mobileNumber]").val(d.mobileNumber);
							$tr.find("input[name=charteredPrice]").val(d.charteredPrice);
						}
					}
				 });
				
			},
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=busLicenseNumberId]").val("");
					$tr.find("input[name=licenseNumber]").val("");
					$tr.find("input[name=seatPrice]").val("");
					$tr.find("input[name=seatCount]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=charteredPrice]").val("");
				}
			}
		}).unbind("click").click(function(){
			var objBus = this;
			var busCompanyId = $(this).parent().parent().find('input[name=busCompanyId]').val();
			var needSeatCount = $(this).parent().parent().find("input[name=needSeatCount]").val();
			if(busCompanyId){
				$.ajax({
					url: KingServices.build_url('busCompany', 'findBusListBySeat'),
					data:"id="+busCompanyId+"&seatCount="+needSeatCount,
					showLoading:false,
					success: function(data) {
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
			}
		});	
	};
	ResLineProduct.deleteLineProductDaysArrange = function(){
		var $obj = $(this);
		if($obj.hasClass('T-delTr')) {
			var id = $obj.data('entity-id'),$parents = $obj.closest('tr'), catName = $obj.data('entity-name'),templateJsonDel = {name:catName, id:id + ""}
			if (!!id) {
				showConfirmDialog('你确定要删除该条记录？', function() {
					$.ajax({
						url: KingServices.build_url('lineProduct', 'deleteLineProductArrangeTemplate'),
						type:"POST",
						showLoading:false,
						data:"templateJsonDel="+encodeURIComponent(JSON.stringify(templateJsonDel)),
						success:function(data){
							if(showDialog(data)){
								if (catName == 'hotelTemplate') {
									var $div = $obj.closest('.T-resourceHotelList'),
										$tr = $div.find('tbody tr');
									if ($tr.length == 1) {
										$div.remove();
										ResLineProduct.updateRouteIndex($obj.closest('.T-updateLineProductContainer'));
									}else{
										$parents.remove();
									}
								}else{
									$parents.remove();
								}
							}
						}
					});
				})
			}else{
				if (catName == 'hotelTemplate') {
					var $div = $obj.closest('.T-resourceHotelList'),
						$tr = $div.find('tbody tr');
					if ($tr.length == 1) {
						$div.remove();
						ResLineProduct.updateRouteIndex($obj.closest('.T-updateLineProductContainer'));
					}else{
						$parents.remove();
					}
				}else{
					$parents.remove();
				}
			}
		} else {
			if (!!$obj.data("entity-id")) {
				showConfirmDialog('你确定要删除该条记录？', function() {
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
								/*var index = objParents.index();									
								$(".T-timeline-item").eq(index).remove();*/
							$obj.closest('.T-timeline-item').remove();
							}
						}
					});
				})
			} else {
				$obj.closest('.T-timeline-item').remove();
				ResLineProduct.updateRouteIndex($obj.closest('.T-updateLineProductContainer'));
			}
		}
	};

	// 删除线路产品
		ResLineProduct.deleteLineProduct = function(id){
			if(!!id){
				showConfirmDialog("你确定要删除该条记录？",function(){
				 $.ajax({
				 	url: KingServices.build_url('lineProduct', 'deleteLineProduct'),
				 	type:"POST",
				 	data:"id="+id+"",
				 })
				 .done(function(data) {
				 	if(showDialog(data)){
				 		ResLineProduct.getProductList(0);
				 	}
				 })
				 		
				});
			}

		}

	ResLineProduct.addRestaurant = function($btn, validator){
		//添加行程安排餐饮
		var scheduleDetails = '<div class="T-timeline-item timeline-item clearfix updateRestaurantList updateLineProductDaysDetail T-RestaurantList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info " style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span>餐饮</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th  class="th-border">餐厅名称</th><th class="th-border">餐厅电话</th><th class="th-border">用餐类型</th><th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>	<th class="th-border">菜单</th><th  class="th-border">备注</th>	<th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseRestaurantName bind-change"/><input type="hidden" name="restaurantId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><select name="type" class="col-xs-12 T-restauranType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>'+
		'<td><input type="text" name="typeName" class="col-xs-12 restaurantStandardsName bind-change  F-float F-money"/><input type="hidden" name="typeId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="menuList"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td><td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除 </a></td></tr>'+
		'</tbody></table></div></div></div></div>';

		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(scheduleDetails);
		ResLineProduct.updateLineProductIndex += 1;

		$(".T-restauranType").on("change", function(){
			var typeParent = $(this).parent().parent();
			typeParent.find("input[name=typeName]").val("");
			typeParent.find("input[name=menuList]").val("");
			typeParent.find("input[name=pricePerPerson]").val("");
			typeParent.find("input[name=remark]").val("");
		});
		
		ResLineProduct.bindRestaurantEvent($(".updateRestaurantList .chooseRestaurantName"), $(".updateRestaurantList .restaurantStandardsName"), validator);
		
		
		
	};
		
	ResLineProduct.bindRestaurantEvent = function( obj, typeObj, validator) {
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
					$tr.find("input[name=typeName]").val("");
					$tr.find("input[name=typeId]").val("");
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
				$tr.find("input[name=typeName]").val("");
				$tr.find("input[name=typeId]").val("");
				
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
					var $tr = $(this).closest('tr');
					$tr.find("input[name=pricePerPerson]").val("");
					$tr.find("input[name=menuList]").val("");
					$tr.find("input[name=typeId]").val("");
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
	ResLineProduct.addResourceHotel = function($btn, validator){
		//添加行程安排酒店
		var $hasTr = $btn.closest('.T-dailyArrangeList').find('.T-resourceHotelList');
		if ($hasTr.length > 0) {
			var html = '<tr>'+
			'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="">全部</option><option value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
			'<td><input type="text" class="col-xs-12 F-float F-money" name="contractPrice" /></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><a data-entity-name="hotelTemplate" class="cursor btn-restaurant-delete T-delete deleteAllother T-delTr">删除 </a></td></tr>';
			
			$hasTr.find('tbody').append(html);
		}else{
			var hotelDetails = '<div class="T-timeline-item timeline-item clearfix updateHotelList updateLineProductDaysDetail T-resourceHotelList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info"  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >酒店</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th  class="th-border">酒店星级</th><th  class="th-border">酒店名称</th><th class="th-border">房型</th><th class="th-border">价格</th><th class="th-border">含餐</th><th class="th-border">电话</th><th class="th-border">备注</th><th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="">全部</option><option value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
			'<td><input type="text" class="col-xs-12 F-float F-money" name="contractPrice" /></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><a data-entity-name="hotelTemplate" class="cursor btn-restaurant-delete T-delete deleteAllother T-delTr">删除 </a></td></tr></tbody></table></div></div></div></div>';
	   		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(hotelDetails);

			ResLineProduct.updateLineProductIndex += 1;
		}
		var $contractPrice=$btn.closest(".T-dailyArrangeList").find("input[name=contractPrice]");
	    Tools.inputCtrolFloat($contractPrice);
		//绑定选择酒店名称事件
		ResLineProduct.bindHotelEvent($(".updateHotelList .chooseHotelName"), $(".updateHotelList .chooseHotelRoom"), $(".updateHotelList .resourceHotelStar"), validator)
	};
	ResLineProduct.bindHotelEvent = function(obj, typeObj, selObj, validator){
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
				
				$.ajax({
                    url: KingServices.build_url('hotel', 'getHotelById'),
                    data:"id=" + hotelDataId,
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							$tr.find("input[name=mobileNumber]").val(data.hotel.mobileNumber);
							$tr.find('.resourceHotelStar').val(data.hotel.level);
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

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}
		}).unbind("click").click(function(){
			var obj = this, hotelStarValue = $(obj).closest('tr').find('.resourceHotelStar').val();
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

							$tr.find("input[name=contractPrice]").val(hotelRoom.normalInnerPrice);
							$tr.find("input[name=containBreakfast]").val(hotelRoom.containBreakfast == "0" ? "不含" : "包含");
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
	ResLineProduct.addResourceScenic = function($btn, validator){
		//添加行程安排景区
		var scenicDetails = '<div class="T-timeline-item timeline-item clearfix updateScenicList updateLineProductDaysDetail T-resourceScenicList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info"  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >景区</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">景区名称</th><th class="th-border">收费项目</th><th class="th-border">景区价格</th><th class="th-border">联系电话</th><th class="th-border">备注</th><th style="width: 60px;"  class="th-border">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseScenicName bind-change"/><input type="hidden" name="scenicId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseChargingProjects bind-change" name="chargingProjects"/><input type="hidden" name="chargingId"/></td>'+
		'<td><input type="text" class="col-xs-12 F-float F-money" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		var $container=$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container");
		    $container.append(scenicDetails);
		var $price=$container.find('input[name=price]');
		    Tools.inputCtrolFloat($price);

		ResLineProduct.updateLineProductIndex += 1;
		
		//绑定选择景区名称事件
		ResLineProduct.bindScenicEvent($(".updateScenicList .chooseScenicName"), validator);
	},
	ResLineProduct.bindScenicEvent = function(obj, validator){
		obj.autocomplete({
			minLength:0,
			select:function(event, ui){
				var obj = this,
				    objParent = $(obj).parent().parent(),
				    scenicNameId = ui.item.id;
				objParent.find("input[name=scenicId]").val(scenicNameId).trigger('change');
				objParent.find("input[name=chargingProjects]").val("");
				objParent.find("input[name=chargingId]").val("");
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

							thisParent.find("input[name=price]").val(scenicItem.normalInnerPrice);
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
	ResLineProduct.addResourceShopping = function($btn, validator){
		//添加行程安排购物
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateShoppingList updateLineProductDaysDetail T-resourceShoppingList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info "  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span>购物</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">商家名称</th><th class="th-border">商品政策</th><th class="th-border">联系电话</th><th class="th-border">停车返佣</th><th class="th-border">人数返佣</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseVendorName bind-change"/><input type="hidden" name="shopId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseGoodsPolicy bind-change" name="goodsPolicy"/><input type="hidden" name="shopPolicyId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="parkingRebateMoney"/></td>'+
		'<td><input type="text" class="col-xs-12" name="customerRebateMoney"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除 </a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(shoppingDetails);
		ResLineProduct.updateLineProductIndex += 1;
		
		//绑定选择商家名称事件
		ResLineProduct.bindShopEvent($(".updateShoppingList .chooseVendorName"), validator);
	};
	ResLineProduct.bindShopEvent = function(obj, validator){
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
	ResLineProduct.addResourceSelfPaying = function($btn, validator){
		//添加行程安排自费
		var selfPayingDetails = '<div class="T-timeline-item timeline-item clearfix updateSelfPayList updateLineProductDaysDetail T-resourceSelfPayList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >自费</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">公司名称</th><th class="th-border">项目名称</th><th class="th-border">联系电话</th><th class="th-border">价格</th><th class="th-border">联系人</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseCompanyName bind-change"/><input type="hidden" name="companyId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseItemName bind-change" name="selfPayItemName"/><input type="hidden" name="selfPayItemId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="contractPrice"/><input type="hidden" class="col-xs-12" readonly="readonly" name="marketPrice"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		var $container=$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container");
		    $container.append(selfPayingDetails);
		var $contractPrice=$container.find('input[name=contractPrice]');
		    Tools.inputCtrolFloat($contractPrice);
		ResLineProduct.updateLineProductIndex += 1;
		
		//绑定选择自费名称事件
		ResLineProduct.bindSelfPay($(".updateSelfPayList .chooseCompanyName"), validator);
		
	};
	
	ResLineProduct.bindSelfPay = function(obj, validator){
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
							var selfPayItem = JSON.parse(data.selfPayItem); 
							$tr.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
							$tr.find("input[name=contractPrice]").val(selfPayItem.normalInnerPrice);
							$tr.find("input[name=marketPrice]").val(selfPayItem.normalMarketPrice);
						}
                    }
                });
			},
			change:function(event, ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					// $tr.find("input[name=companyId]").val("");
					$tr.find("input[name=selfPayItemId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=contractPrice]").val("");
					$tr.find("input[name=managerName]").val("");
				}
			}
		}).unbind("click").click(function(){
			var $that = $(this);
			var chooseCompanyNameId=$that.closest('tr').find("input[name='companyId']").val();
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
							$that.autocomplete('option','source', selfPayItemList);
							$that.autocomplete('search', '');
						}else{
							layer.tips('没有内容。', $that, {
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
	ResLineProduct.addResourceTraffic = function($btn, validator){
		//添加行程安排交通
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateTicketList updateLineProductDaysDetail T-resourceTicketList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >交通</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">票务公司名称</th><th class="th-border">类型</th><th class="th-border">价格</th><th class="th-border">联系人</th><th class="th-border">联系电话</th><th class="th-border">公司电话</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
		'<td><select name="type" class="col-xs-12 form-control" style="font-size: 12px !important;"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
		'<td><input type="text" class="col-xs-12 F-float F-money" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="telNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除</a></td></tr></tbody></table></div></div></div></div>';
		var $container=$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container");
		    $container.append(shoppingDetails);
		var $price=$container.find('input[name=price]');
		    Tools.inputCtrolFloat($price);
		ResLineProduct.updateLineProductIndex += 1;
		
		//绑定选择自费名称事件
		ResLineProduct.bindTicketEvent($(".updateTicketList .chooseTicketName"), validator);
	};
	ResLineProduct.bindTicketEvent = function(obj, validator){
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
	//添加其他安排
	ResLineProduct.addOther = function($btn, validator) {
		var otherDetails = '<div class="T-timeline-item timeline-item clearfix updateOtherList updateLineProductDaysDetail T-resourceOtherList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >其他</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">项目名称</th><th class="th-border">联系人</th><th class="th-border">联系电话</th><th class="th-border">单价</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 otherName bind-change" name="name"/><input type="hidden" name="otherId"/></td>'+
		'<td><input type="text" class="col-xs-12" name="managerName"/></td>'+
        '<td><input type="text" class="col-xs-12" name="mobileNumber" value=""></td>'+
		'<td><input type="text" class="col-xs-12 F-float F-money" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除</a></td></tr></tbody></table></div></div></div></div>';
		var $container=$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container");
		    $container.append(otherDetails);
		var $price=$container.find('input[name=price]');
		    Tools.inputCtrolFloat($price);
		ResLineProduct.updateLineProductIndex += 1;
	};
	//添加保险安排
	ResLineProduct.addInsurance = function($btn, validator) {
		var insuranceDetails = ''
		+'<tr>'
		+'<td><input class="T-insurance-name col-xs-12 bind-change" name="insuranceName" type="text"/><input type="hidden" name="insuranceId"/></td>'
		+'<td>'
		+'<input class="col-xs-12 T-chooseInsuranceItem" name="type" type="text" maxlength="100" />'
		+'<input type="hidden" name="typeId" value="">'
		+'</td>'
		+'<td><input class="col-xs-12 F-float F-money" name="price" type="text" maxlength="6" /></td>'
		+'<td><input class="col-xs-12" name="managerName" type="text" readonly="readonly"/></td>'
		+'<td><input class="col-xs-12" name="mobileNumber" type="text" readonly="readonly"/></td>'
		+'<td><input class="col-xs-12" name="telNumber" type="text" readonly="readonly"/></td>'
		+'<td><input class="col-xs-12" name="remark" type="text" maxlength="1000" /></td>'
		+'<td><a class="cursor T-delete deleteAllother T-delTr">删除</a></td>'
		+'</tr>';

		var $container=$btn.closest(".T-baseArrange").find(".T-insuranceForm");
		    $container.append(insuranceDetails);
		var $price=$container.find('input[name=price]');
		    Tools.inputCtrolFloat($price);

		ResLineProduct.bindInsuranceChosen($container.find('.T-insurance-name'), $container.find('.T-chooseInsuranceItem'), validator);
	};
	//添加车队安排
	ResLineProduct.addBusCompany = function($btn, validator) {
		var busCompanyDetails = ''
		+'<tr>'
		+'<td><input class="col-xs-12 bind-change T-needSeatCount" name="needSeatCount" type="text" maxlength="2" /></td>'
		+'<td><input type="text" class="col-xs-12 T-busBrand" name="brand"></td>'
		+'<td><input class="col-xs-12" name="remark" type="text" maxlength="1000" /></td>'
		+'<td><a class="cursor T-delete deleteAllother T-delTr">删除</a></td>'
		+'</tr>';

		var $container=$btn.closest(".T-baseArrange").find(".T-busCompanyForm");
		    $container.append(busCompanyDetails);
		var $price=$container.find('input[name=seatPrice]');
		    Tools.inputCtrolFloat($price);

		ResLineProduct.bindSeatCount($container.find('.T-needSeatCount'), validator);
		// ResLineProduct.bindBusCompanyChosen($container.find('.T-buscompany-name'), validator);
		// ResLineProduct.bindBusDetailChosen($container.find('.T-licenseNumber'), validator);
		ResLineProduct.bindBusBrand($container.find('.T-busBrand'), validator)
	};

	/**
	 * 保存数据。若需要切换tab，就调用切换tab操作
	 * @param  {obj} $tab      当前tab的顶层元素
	 * @param  {object} validator 表单验证对象
	 * @param  {array} tabArgs   保存tab切换的参数
	 * @return {[type]}           [description]
	 */
	ResLineProduct.saveProductData = function($tab, validator, tabArgs){
		if (!validator.form())   return;

		var $form = $tab.find('.T-mainForm'), travelLineData = {},isAjax = true,$middleForm = $tab.find('.T-middleForm');
		function getValue(obj, name){
			var thisObj = obj.find("[name="+name+"]"), objValue;
			if(thisObj.attr("type") == "checkbox"){
				objValue = thisObj.is(":checked") ? 1 : 0;
			}else{
				objValue = thisObj.val();
			}
			return objValue;
		}
		function trim(str)
         { 
             return str.replace(/(^\s*)|(\s*$)/g, ""); 
         }
		var name = getValue($form.eq(0), "name"),
			type = getValue($form.eq(0), "type");
		if(trim(name) == ""){
			showMessageDialog("请输入线路产品名称");
			return false;
		} else if(trim(type) == ""){
			showMessageDialog("请输入线路类型");
			return false;
		}		

		// 获取表单的数据
		travelLineData.lineProduct = 
			[{
				id: getValue($form, "lineProductId"),
				name : getValue($form, "name"),
				travellineId: getValue($form, "travellineId"),
				remark : getValue($form, "remark"),
				type : getValue($form, "type"),
				
				customerType : getValue($form, "customerType"),
				includeFee  : getValue($middleForm, "includeFee"),
				excludeFee  : getValue($middleForm, "excludeFee"),
				lineFeature : getValue($middleForm, "lineFeature"),
				lineNotice  : getValue($middleForm, "lineNotice"),
				status : getValue($form, "status"),
				shopNames: $form.find('.T-shopMultiselect').val(),
				shopIds: ResLineProduct.jsonToString($form.find('.T-shopMultiselect').data('propover')),
				selfPayItemNames: $form.find('.T-selfPayMultiselect').val(),
				selfPayItemIds: ResLineProduct.jsonToString($form.find('.T-selfPayMultiselect').data('propover')),
				publishAuthArea: $tab.find('#publishAuthArea').val()
			}];
		
		// 获取基础安排的数据
		$form = $tab.find('.T-guideForm');
		travelLineData.guide = [{
				id : getValue($form, "templateId"),
				guideId : getValue($form, "guideNameId"),
				price : getValue($form, "guideFee"),
				remark : getValue($form, "remark")
			}];

		travelLineData.insurance = [];
		$form = $tab.find('.T-insuranceForm tr');
		if ($form.length > 0) {
			for (var i = 0, len = $form.length; i < len; i++) {
				var $item = $form.eq(i),
					json = {
					id : getValue($item, "templateId"),
					insuranceId : getValue($item, "insuranceId"),
					insuranceItemId: getValue($item, "typeId"),
					type : getValue($item, "type"),
					price : getValue($item, "price"),
					remark : getValue($item, "remark")
				}
				if (!!json.insuranceId) {
					travelLineData.insurance.push(json);
				}
			}
		}

		$form = $tab.find('.T-busCompanyForm tr');
		travelLineData.busCompany = [];
		if ($form.length > 0) {
			for (var i = 0, len = $form.length; i < len; i++) {
				var $item = $form.eq(i),
					json = {
					id : $item.data('entity-arrangeid'),
					needSeatCount : getValue($item, "needSeatCount"),
					brand: getValue($item, "brand"),
					remark : getValue($item, "remark")
				}
				travelLineData.busCompany.push(json);
			}
		}
		//获取服务标准
		travelLineData.serviceStandardList = [];
		$tab.find('.T-service-list tr').each(function(index,el){
			var $that = $(this);
			var id = '';
			if(!!$that.attr('serviceId')){
				id = $that.attr('serviceId');
			}

			var args = {
				id:id,
				serviceTitle:$that.find('input[name=serviceName]').val(),
				serviceContent:$that.find('input[name=serviceContent]').val(),
				serviceRequire:$that.find('input[name=serviceRequire]').val()

			};
			travelLineData.serviceStandardList.push(args);
		});
		//校验是否有重复的服务标准
		var checkArr = travelLineData.serviceStandardList, len = checkArr.length;
		for (var i = 0;i < len ;i ++ ) {
			for (var j = i-1; j >= 0; j --)  {
				if (checkArr[i].serviceTitle === checkArr[j].serviceTitle) {
					showMessageDialog('【'+checkArr[i].serviceTitle+'】'+"服务标准已重复，请去重之后再提交");
					return;
				}
			}
		}

		//获取价格标准
		travelLineData.productPriceList = [];
		$tab.find('.T-price-list tr').each(function(index,el) {
			var $that = $(this),id = '';
			if(!!$that.data('priceid')) {
				id = $that.data('priceid');
			};
			if ($that.find('input[name=startTime]').val() > $that.find('input[name=endTime]').val()) {
				showMessageDialog('第【'+(index+1)+'】行的'+"开始时间不能大于结束时间");
				return;
			}else{
				var args = {
					id: id,
					adultPrice: $that.find('input[name=adultPrice]').val(),
					childPrice: $that.find('input[name=childPrice]').val(),
					startTime: $that.find('input[name=startTime]').val(),
					endTime: $that.find('input[name=endTime]').val()
				}
				travelLineData.productPriceList.push(args);
			};
			
		});

		console.log(travelLineData.productPriceList);
		// 存放每天安排数据的数组
		travelLineData.lineDayList = [];
		
		$tab.find(".T-dailyArrangeList").each(function(index, el) { // 获取每天的数据
			var $that = $(this), $list, $item;

			travelLineData.lineDayList[index] = {
				whichDay: index+1,
				detailEditor : encodeURIComponent(UE.getEditor($that.find('.T-editor').prop('id')).getContent()),
				restaurant : [],
				hotel : [],
				scenic : [],
				shop : [],
				selfPay : [],
				ticket : [],
				other: []
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
							id : $item.find("[name=templateId]").val(),
							restaurantId : restaurantId,
							standardId : standardId,
							price : $item.find("[name=typeName]").val(),
							type : $item.find("[name=type]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						travelLineData.lineDayList[index].restaurant.push(restaurantJson);
					}
				}
			}
			//获取酒店
			$list = $that.find(".T-resourceHotelList tbody tr");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var hotelId = $item.find("input[name=hotelId]").val();
					if(hotelId){
						var hotelRoomId = $item.find("[name=hotelRoomId]").val();
						if(!hotelRoomId){
							showMessageDialog("请选择房型！");
							isAjax = false;
							return false;
						}
						var hotelJson = {
							id : $item.find("[name=templateId]").val(),
							hotelId : hotelId,
							hotelRoomId : hotelRoomId,
							price : $item.find("[name=contractPrice]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.closest('.T-resourceHotelList').data('entity-index')
						}
						travelLineData.lineDayList[index].hotel.push(hotelJson)
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
							showMessageDialog("请选择收费项目！");
							isAjax = false;
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
						travelLineData.lineDayList[index].scenic.push(scenicJson);
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
						travelLineData.lineDayList[index].ticket.push(ticketJson);
					}
				}
			} 
			//获取其他
			$list = $that.find(".T-resourceOtherList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var otherName = $item.find("[name=name]").val();
					if(otherName){
						otherJson = {
							id: $item.find("[name=arrangeId]").val(),
							name : $item.find("[name=name]").val(),
							managerName : $item.find("[name=managerName]").val(),
							mobileNumber : $item.find("[name=mobileNumber]").val(),
							price: $item.find("[name=price]").val(),
							remark: $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						travelLineData.lineDayList[index].other.push(otherJson);
					}
				}
			}
		});
		
		var lineDataJson = JSON.stringify(travelLineData);

		var id = $tab.find('.T-btn-submit').data('id'),
			url = KingServices.build_url('lineProduct', 'addLineProduct');
			submitData = "LineProductJsonAdd="+encodeURIComponent(lineDataJson);

		if (!!id) {  // 复制或者添加
			url = KingServices.build_url('lineProduct', 'updateLineProduct');
			submitData = "id="+id+"&LineProductJsonUpdate="+encodeURIComponent(lineDataJson);
		}
		if(!isAjax){
			return false;
		}
		$.ajax({
			url:url,
			type:"POST",
			data:submitData,
			showLoading:false,
			dataType:"json",
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					$tab.data('isEdited', false);
					showMessageDialog(data.message, function(){
						if (!!tabArgs && tabArgs.length === 3) {
							// 切换tab，就不做数据更新
							Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);

							ResLineProduct.init_updata_tab(tabArgs[0]);
						} else {
							ResLineProduct.getProductList(ResLineProduct.pageNo);	
							Tools.closeTab(Tools.getTabKey($tab.prop('id')));						
						}

					});
				}
			}
		});
	};
	/**
	 * 更新安排的序号
	 * @return {[type]} [description]
	 */
	ResLineProduct.updateRouteIndex = function($tab){
		ResLineProduct.updateLineProductIndex -= 1;
		var itemList = $tab.find(".T-timeline-item");
		for(var i=0; i<itemList.length; i++){
			itemList.eq(i).attr("data-entity-index", i);
		}
	};
	/**
	 * 导出线路产品
	 * @param  {int} id 线路产品的id
	 * @return {[type]}    [description]
	 */
	ResLineProduct.exportLineProduct = function(id){
		checkLogin(function(){
			exportXLS(KingServices.build_url('export', 'exportLineProduct') + "&lineProductId="+id);
		});
	};
	
	/**
	 * 提交数据
	 * @param  {object} $tab 父元素对象
	 * @return {[type]}      [description]
	 */
	ResLineProduct.submitAddLineProduct = function($tab, validator, html){
		var status = 0;
		if($(".add-lineProduct-form .lineProduct-status").is(":checked") == true){
			status = 1;
		}
		var form = $(".add-lineProduct-form form.lineProductMainForm").serialize()+"&status="+status+"";
		var busJsonAdd = [];
		var busListStr = $(".add-lineProduct-form .busList tbody tr");
		busListStr.each(function(i){
			var licenseNumber = busListStr.eq(i).find("input[name=licenseNumber]").val();
			var brand = busListStr.eq(i).find("input[name=brand]").val();
			var seatCount = busListStr.eq(i).find("input[name=seatCount]").val();
			var buyTime = busListStr.eq(i).find("input[name=buyTime]").val();
			if(buyTime == ""){
				buyTime = "0000-00-00";
			}
			var isChartered = busListStr.eq(i).find("select[name=isChartered]").val();
			var charteredStartTime = "0000-00-00";
			var charteredEndTime = "0000-00-00";
			var charteredPrice = "0";
			if(isChartered == 1){
				charteredStartTime = busListStr.eq(i).find("input[name=charteredStartTime]").val();
				charteredEndTime = busListStr.eq(i).find("input[name=charteredEndTime]").val();
				charteredPrice = busListStr.eq(i).find("input[name=charteredPrice]").val();
			}
			var remark = busListStr.eq(i).find("input[name=remark]").val();
			var busJson = {
				licenseNumber : licenseNumber,
				brand : brand,
				seatCount : seatCount,
				buyTime : buyTime,
				isChartered : isChartered,
				charteredStartTime : charteredStartTime,
				charteredEndTime : charteredEndTime,
				charteredPrice : charteredPrice,
				remark : remark
			};
			busJsonAdd.push(busJson);
		});
		
		var driverJsonAdd = [];
		var driverListStr = $(".add-lineProduct-form .driverList tbody tr");
		driverListStr.each(function(i){
			var name = driverListStr.eq(i).find("input[name=driverName]").val();
			var gender = driverListStr.eq(i).find("select[name=gender]").val();
			var mobileNumber = driverListStr.eq(i).find("input[name=mobileNumber]").val();
			var driveYears = driverListStr.eq(i).find("input[name=driveYears]").val();
			var licenseId = driverListStr.eq(i).find("input[name=licenseId]").val();
			var status = driverListStr.eq(i).find("select[name=status]").val();
			var remark = driverListStr.eq(i).find("input[name=remark]").val();
			var driverJson = {
				name : name,
				gender : gender,
				mobileNumber : mobileNumber,
				driveYears : driveYears,
				licenseId : licenseId,
				status : status,
				remark : remark
			};
			driverJsonAdd.push(driverJson);
		});
		busJsonAdd = JSON.stringify(busJsonAdd);
		driverJsonAdd = JSON.stringify(driverJsonAdd);
		$.ajax({
			url: KingServices.build_url('lineProduct', 'addLineProduct'),
			type:"POST",
			showLoading:false,
			data:form+"&busJsonAdd="+encodeURIComponent(busJsonAdd)+"&driverJsonAdd="+encodeURIComponent(driverJsonAdd)+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					layer.close(addLineProductLayer);
					showMessageDialog(data.message);
					ResLineProduct.listLineProduct(0,"","");
				}
			}
		});
	};

	ResLineProduct.getQueryTerms = function(){
			$.ajax({
				url: KingServices.build_url('lineProduct', 'getQueryTerms'),
				dateType:"json",
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						ResLineProduct.autocompleteDate.typeList = data.typeList;

					}
				}
			})
			$.ajax({
				url: KingServices.build_url('lineProduct', 'findAllTravelLine'),
				dateType:"json",
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						ResLineProduct.autocompleteDate.travelLineList = data.travelLineList;

					}
				}
			})
		};
	/**
	 * 解决autocomplete点击sortable区域无法收起的问题
	 * @param  {object} $tab 区域容器
	 * @return {[type]}      [description]
	 */
	ResLineProduct.mousedownBlur = function($tab){
		$tab.find('.T-timeline-detail-container').mousedown(function() {
			$(this).find(":focus").blur();
		});
	};

	ResLineProduct.quoteLineProduct = function(id) {
		KingServices.addQuote(id);
	};

	ResLineProduct.jsonToString = function(jTs) {
		if (typeof jTs != 'string') {
			jTs = JSON.stringify(jTs);
		}
		return jTs;
	}

	exports.init = ResLineProduct.initModule;  
	exports.addLineProduct = ResLineProduct.addLineProduct;  
	exports.viewLineProduct = ResLineProduct.viewLineProductDetail;
	exports.viewOptionalSelfPay = ResLineProduct.viewOptionalSelfPay;
	exports.viewOptionalShop = ResLineProduct.viewOptionalShop;
	exports.shopMultiselect = ResLineProduct.shopMultiselect;
	exports.selfPayMultiselect = ResLineProduct.selfPayMultiselect;
	exports.getProductList = ResLineProduct.getProductList;
});