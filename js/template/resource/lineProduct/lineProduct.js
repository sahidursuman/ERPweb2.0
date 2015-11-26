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
	
		// 主体对象
		ResLineProduct = {};

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
		ResLineProduct.getProductList(0, '', 1);
	};

	/**
	 * 请求产品列表，并用模板初始化页面
	 * @param  {[type]} page   [description]
	 * @param  {[type]} name   [description]
	 * @param  {[type]} status [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.getProductList = function(page,name,status){
		if (ResLineProduct.$tab && arguments.length === 1) {
			name = ResLineProduct.$tab.find('.T-lineproduct-name').val();
			status = ResLineProduct.$tab.find('.T-status').children('button').data('value');
		}

		if (!page || page < 0) {
			page = 0;
		}

		$.ajax({
			url: KingServices.build_url('lineProduct', 'listLineProduct'),
			type:"POST",
			showLoading:false,
			data: {
				pageNo: page,
				name: name,
				status: status,
				sortType: 'auto'
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					ResLineProduct.pageNo = page;

					var lineProductList = data.lineProductList;
					lineProductList = JSON.parse(lineProductList);
					data.lineProductList = lineProductList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"线路产品管理",html);

					// init $tab
					ResLineProduct.$tab = $("#tab-"+menuKey+"-content");
					// init event
					ResLineProduct.init_event();

					// 绑定翻页组件
					laypage({
					    cont: ResLineProduct.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		ResLineProduct.getProductList(obj.curr -1);
					    	}
					    }
					});		
				}
			}
		});
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
			ResLineProduct.getProductList(0);
		});

		// 回车搜索
		ResLineProduct.$tab.find('.T-lineproduct-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				ResLineProduct.getProductList(0);
			}
		});

		// 切换状态
		ResLineProduct.$tab.find('.T-status').find('a').on('click', function(event) {
			event.preventDefault();
			var $that = $(this);

			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());

			ResLineProduct.getProductList(0);
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
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var lineProduct = JSON.parse(data.lineProduct);
						var busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
						var guideTemplate = JSON.parse(data.guideTemplate);
						var insuranceTemplate = JSON.parse(data.insuranceTemplate);
						var daysList = JSON.parse(data.daysList);
						data.viewLineProduct = {
								lineProduct : lineProduct,
								busCompanyTemplate : busCompanyTemplate,
								guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList
						};
						
						Tools.addTab(menuKey+"-view","查看线路产品",viewDetailTemplate(data));
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
				showLoading: false,
				data:"id=" + id,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var lineProductDetail = JSON.parse(data.lineProduct),
							busCompanyTemplate = JSON.parse(data.busCompanyTemplate),
							guideTemplate = JSON.parse(data.guideTemplate),
							insuranceTemplate = JSON.parse(data.insuranceTemplate),
							daysList = JSON.parse(data.daysList);					

						data.viewLineProduct = {
								lineProduct : lineProductDetail,
								busCompanyTemplate : busCompanyTemplate,
								guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList
						};
						
						data.viewLineProduct.clipboardMode = clipboardMode;				

						ResLineProduct.tmpData.productId = id;
						ResLineProduct.tmpData.type = clipboardMode;

						data.viewLineProduct.editorName = tab_id + '-ueditor';
						var html = updateLineProductTemplate(data.viewLineProduct);
						// 初始化页面
						if (Tools.addTab(tab_id, title, html)) {
							ResLineProduct.init_updata_tab(tab_id);							
						}
						// 绑定autocomplete
						$tab = $('#tab-'+ tab_id + '-content');
						
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

		
		
		// 以下待修改
		ResLineProduct.mousedownBlur();

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
			$tab.find('.T-daylist').on('click', '.T-add', function(event) {
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
				}
			})
			.on('click', '.T-delete', ResLineProduct.deleteLineProductDaysArrange);

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

			/**
			 * 绑定基础安排
			 */
			// 导游
			ResLineProduct.bindGuideChosen($tab.find('.T-guide-name'), validator);
			ResLineProduct.bindInsuranceChosen($tab.find('.T-insurance-name'), validator);
			ResLineProduct.bindBusCompanyChosen($tab.find('.T-buscompany-name'), validator);
			ResLineProduct.bindBusDetailChosen($tab.find('.T-licenseNumber'), validator);

			$tab.find('.T-btn-submit').on('click', function(event) {
				event.preventDefault();
				ResLineProduct.saveProductData($tab, validator);
			});
		}
	};

	/**
	 * 绑定导游选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindGuideChosen = function($input, validator) {
		if (!$input || !$input.length) {
			console.error('绑定导游的autocomplete，主体Dom为空!');
			return;
		}

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
	ResLineProduct.bindInsuranceChosen = function($input, validator) {
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

	/**
	 * 绑定车队选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	ResLineProduct.bindBusCompanyChosen = function($input, validator) {
		if (!$input || !$input.length) {
			console.error('绑定车队的autocomplete，主体Dom为空!');
			return;
		}
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
			console.log(obj)
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
		if (!$input || !$input.length) {
			console.error('绑定保险的autocomplete，主体Dom为空!');
			return;
		}

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
			ResLineProduct.updateRouteIndex($obj.closest('.T-updateLineProductContainer'));
		}
	};
	ResLineProduct.deleteLineProduct = function(id){
		if (!!id) {
			$("#confirm-dialog-message").removeClass('hide').dialog({
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
								url: KingServices.build_url('lineProduct', 'deleteLineProduct'),
								type:"POST",
								showLoading:false,
								data:"id="+id+"",
								success:function(data){
									var result = showDialog(data);
									if(result){
										ResLineProduct.$tab.find('.lineProduct-' + id).fadeOut(function() {
											var len = ResLineProduct.$tab.find('.T-list').children('tr').length

											ResLineProduct.getProductList(len <= 1? (ResLineProduct.pageNo - 1): ResLineProduct.pageNo);
										});
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
		}
	};
	
	ResLineProduct.addRestaurant = function($btn, validator){
		//添加行程安排餐饮
		var scheduleDetails = '<div class="T-timeline-item timeline-item clearfix updateRestaurantList updateLineProductDaysDetail T-RestaurantList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info " style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span>餐饮</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th  class="th-border">餐厅名称</th><th class="th-border">餐厅电话</th><th class="th-border">用餐类型</th><th class="th-border">餐标</th>	<th class="th-border">菜单</th><th  class="th-border">备注</th>	<th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseRestaurantName bind-change"/><input type="hidden" name="restaurantId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><select name="type" class="col-xs-12 T-restauranType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>'+
		'<td><input type="text" name="typeName" class="col-xs-12 restaurantStandardsName bind-change"/><input type="hidden" name="typeId"/></td>'+
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
					var $tr = $(this).val("").closest('tr');
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
		var hotelDetails = '<div class="T-timeline-item timeline-item clearfix updateHotelList updateLineProductDaysDetail T-resourceHotelList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info"  style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >酒店</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th  class="th-border">酒店星级</th><th  class="th-border">酒店名称</th><th class="th-border">房型</th><th class="th-border">价格</th><th class="th-border">含餐</th><th class="th-border">电话</th><th class="th-border">备注</th><th  class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
		'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
		'<td><input type="text" class="col-xs-12 chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice" /></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除 </a></td></tr></tbody></table></div></div></div></div>';

		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(hotelDetails);
		ResLineProduct.updateLineProductIndex += 1;
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
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(scenicDetails);
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
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="parkingRebateMoney"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="customerRebateMoney"/></td>'+
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
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice"/><input type="hidden" class="col-xs-12" readonly="readonly" name="marketPrice"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother"> 删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(selfPayingDetails);
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
					$tr.find("input[name=companyId]").val("");
					$tr.find("input[name=selfPayItemId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					$tr.find("input[name=contractPrice]").val("");
					$tr.find("input[name=managerName]").val("");
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
	ResLineProduct.addResourceTraffic = function($btn, validator){
		//添加行程安排交通
		var shoppingDetails = '<div class="T-timeline-item timeline-item clearfix updateTicketList updateLineProductDaysDetail T-resourceTicketList ui-sortable-handle" data-entity-index='+ResLineProduct.updateLineProductIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >交通</span></div>'+
		'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
		'<thead><tr><th class="th-border">票务公司名称</th><th class="th-border">类型</th><th class="th-border">价格</th><th class="th-border">联系人</th><th class="th-border">联系电话</th><th class="th-border">公司电话</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
		'<tbody><tr>'+
		'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
		'<td><select name="type" class="col-xs-12 form-control" style="font-size: 12px !important;"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
		'<td><input type="text" class="col-xs-12" name="price"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" readonly="readonly" name="telNumber"/></td>'+
		'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
		'<td><a class="cursor btn-restaurant-delete T-delete deleteAllother">删除</a></td></tr></tbody></table></div></div></div></div>';
		$btn.closest(".T-dailyArrangeList").find(".T-timeline-detail-container").append(shoppingDetails);
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

	/**
	 * 保存数据。若需要切换tab，就调用切换tab操作
	 * @param  {obj} $tab      当前tab的顶层元素
	 * @param  {object} validator 表单验证对象
	 * @param  {array} tabArgs   保存tab切换的参数
	 * @return {[type]}           [description]
	 */
	ResLineProduct.saveProductData = function($tab, validator, tabArgs){
		if (!validator.form())   return;

		var $form = $tab.find('.T-mainForm'), travelLineData = {},isAjax = true;
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
			showMessageDialog($( "#confirm-dialog-message" ), "请输入线路产品名称");
			return false;
		} else if(trim(type) == ""){
			showMessageDialog($( "#confirm-dialog-message" ), "请输入线路类型");
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
				status : getValue($form, "status")
			}];
		
		// 获取基础安排的数据
		$form = $tab.find('.T-guideForm');
		travelLineData.guide = [{
				id : getValue($form, "templateId"),
				guideId : getValue($form, "guideNameId"),
				price : getValue($form, "guideFee"),
				remark : getValue($form, "remark")
			}];

		$form = $tab.find('.T-insuranceForm');
		travelLineData.insurance = [{
				id : getValue($form, "templateId"),
				insuranceId : getValue($form, "insuranceId"),
				type : getValue($form, "type"),
				price : getValue($form, "price"),
				remark : getValue($form, "remark")
			}];

		$form = $tab.find('.T-busCompanyForm');
		travelLineData.busCompany = [{
				id : getValue($form, "templateId"),
				busCompanyId : getValue($form, "busCompanyId"),
				needSeatCount : getValue($form, "needSeatCount"),
				busId : getValue($form, "busLicenseNumberId"),
				price : getValue($form, "seatPrice"),
				remark : getValue($form, "remark")
			}];

		// 存放每天安排数据的数组
		travelLineData.lineDayList = [];
		
		$tab.find(".T-dailyArrangeList").each(function(index, el) { // 获取每天的数据
			var $that = $(this), $list, $item;

			travelLineData.lineDayList[index] = {
				detailEditor : encodeURIComponent(UE.getEditor($that.find('.T-editor').prop('id')).getContent()),
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
							isAjax = false;
							return false;
						}
						var restaurantJson = {
							id : $item.find("[name=templateId]").val(),
							restaurantId : restaurantId,
							standardId : standardId,
							price : $item.find("[name=typeName]").val(),
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						travelLineData.lineDayList[index].restaurant.push(restaurantJson);
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
							isAjax = false;
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
							showMessageDialog($( "#confirm-dialog-message" ), "请选择收费项目！");
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
							isAjax = false;
							return false;
						}
						var shopJson = {
							id : $item.find("[name=templateId]").val(),
							shopId : shopId,
							policyId : policyId,
							remark : $item.find("[name=remark]").val(),
							orderIndex : $item.attr("data-entity-index")
						}
						travelLineData.lineDayList[index].shop.push(shopJson);
					}
				}
			}
			//获取自费
			$list = $that.find(".T-resourceSelfPayList");
			if($list.length > 0){
				for(var j=0; j<$list.length;j++){
					$item = $list.eq(j);
					var selfPayId = $item.find("[name=selfPayItemId]").val();
					if(!selfPayId){
						showMessageDialog($( "#confirm-dialog-message" ), "请选择自费项目！");
						isAjax = false;
						return false;
					}
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
						travelLineData.lineDayList[index].selfPay.push(selfPayJson);
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
					showMessageDialog($( "#confirm-dialog-message" ),data.message, function(){
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
					showMessageDialog($( "#confirm-dialog-message" ),data.message);
					ResLineProduct.listLineProduct(0,"","");
				}
			}
		});
	};


	ResLineProduct.mousedownBlur = function(){
		$("#tab-resource_lineProduct-update-content .T-timeline-detail-container ").mousedown(function() {
			$(this).find(":focus").blur();
		});
	};

	ResLineProduct.quoteLineProduct = function(id) {
		KingServices.addQuote(id);
	};
	exports.init = ResLineProduct.initModule;  
	exports.addLineProduct = ResLineProduct.addLineProduct;  
});