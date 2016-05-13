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
		busbookingViewTemplate = require("./view/busbookingView"),
		selectTouristTemplate = require("./view/selectTourist"),
		noticeTemplate = require("./view/notice"),
		viewGroupTemplate = require("./view/viewGroup"),
		preTypeHtml = '<select name="preType"><option value="0" selected="">现金</option><option value="1">银行转账</option><option value="2">网付</option><option value="3">支票</option><option value="4">其他</option></select>';
		payTypeHtml = '<select name="payType"><option value="0" selected="">现金</option><option value="1">刷卡</option><option value="2">签单</option></select>';
	/**
	 * 自定义发团安排对象
	 * @type {Object}
	 */
	var tripPlan = {
		$tab: false,
		$searchArea: false,
		dayWhich:''
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
				autocompleteData.businessGroupList = data.businessGroupList;
				autocompleteData.dutyOPUserList = data.dutyOPUserList;
				autocompleteData.lineProductList = data.lineProductList;
				if(showDialog(data)){
					Tools.addTab(menuKey,'发团安排',listMainTemplate())

					tripPlan.$tab = $('#tab-arrange_all-content');
					tripPlan.$searchArea = tripPlan.$tab.find('.T-search-tripPlan');
					tripPlan.listTripPlan();
					tripPlan.init_eventMain();
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
		var $searchArea = tripPlan.$searchArea.on('change', 'select', function(event) {
			event.preventDefault();
			var $that = $(this);
			if ($that.is('select[name="arrangeItem"]')) {
				$searchArea.find('#arrangeItemStatus').val('');
			}
			if ($that.is('select[name="tripPlanItem"]')) {
				$searchArea.find('#tripPlanItemStatus').toggleClass('hidden', $that.val() != '0').val('');
			}
			tripPlan.listTripPlan();
		});

		// 绑定日期
		Tools.setDatePicker($searchArea.find('.datepicker'), true);

		//搜索按钮事件绑定
		$searchArea.find('.T-btn-tripPlan-search').on('click', function() {
			tripPlan.listTripPlan();
		})

		//查询条件 autocomplete
		tripPlan.autocompleteSearch($searchArea.find('input[name="lineProductName"]'), autocompleteData.lineProductList, 'lineProductName', 'lineProductId');
		//tripPlan.autocompleteSearch($searchArea.find('input[name="dutyOPUserName"]'), autocompleteData.dutyOPUserList, 'dutyOPUserName', 'dutyOPUserId');
		tripPlan.autocompleteSearch($searchArea.find('input[name="businessGroupName"]'), autocompleteData.businessGroupList, 'businessGroupName', 'businessGroupId');

		//责任计调
		tripPlan.getDutyOPUserList($searchArea.find('[name=dutyOPUserName]'));

		tripPlan.$tab.find('.T-tripPlanList').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $this = $(this), id = $this.closest('tr').data('entity-id'), $parents = $this.closest('tr')
				$billStatus = $this.attr('billStatus');
			if ($this.hasClass('T-sendOrder')) {
				//下单
				var $quoteId = $this.data('entity-quoteId');
				tripPlan.singleClickSendOrder($quoteId,id);
			}else if ($this.hasClass('T-send')){
				//通知
				var status = {
					guideStatus: $parents.find('.guideStatus').data('status'),
					busStatus: $parents.find('.busStatus').data('status'),
					restaurantStatus: $parents.find('.restaurantStatus').data('status'),
					hotelStatus: $parents.find('.hotelStatus').data('status'),
					shopStatus: $parents.find('.shopStatus').data('status'),
					selfPayStatus: $parents.find('.selfPayStatus').data('status')
				}
				tripPlan.sendTripPlanArrange(id, status);
			}else if ($this.hasClass('T-view')) {
				//查看
				tripPlan.viewTripPlan(id);
			}else if ($this.hasClass('T-plan')) {
				//安排
				tripPlan.updateTripPlanArrange(id, $billStatus)
			}else if ($this.hasClass('T-export')) {
				//导出
				tripPlan.exportTripPlanArrange(id);
			}else if($this.hasClass('T-showLineInfo')){
				var $tr = $this.closest('tr');
					$nextTr = $tr.nextAll('tr'),
					$icon = $this.find('i.fa'),
					isHide = 1,
					count = 0;
				if($icon.hasClass('fa-plus')){
					$icon.removeClass('fa-plus').addClass('fa-minus');
					isHide = 0;
				}else{
					$icon.removeClass('fa-minus').addClass('fa-plus');
					isHide = 1;
				}
				for(var i=0; i<$nextTr.length; i++){
					if(!!$nextTr.eq(i).data('entity-id')){
						break;
					}else{
						if(isHide === 1){
							$nextTr.eq(i).addClass('hidden');
						}else{
							$nextTr.eq(i).removeClass('hidden');
						}
					}
					count++;
				}
			}
		})
		.on('click', 'td', function(event) {
			event.preventDefault();
			var $that = $(this).find('.fa'),
				$tr = $that.closest('tr'),
				$planAction = $tr.find('.T-plan'),
				target = $that.parent().data('target');

			if ($that.css('cursor') === 'pointer' && $planAction.length && !!target && $that.length > 0) {
				tripPlan.updateTripPlanArrange($tr.data('entity-id'), $planAction.attr('billStatus'), target);
			}
		});		
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
	tripPlan.listTripPlan = function(page) {
        // 修正页码
        page = page || 0;

		var args = {};
		if (tripPlan.$searchArea) {
            // 初始化页面后，可以获取页面的参数
			args = tripPlan.$searchArea.find('form').serializeJson();
        }

        args.pageNo = page;
        args.tripPlan = 'arrange';

        $.ajax({
			url:  KingServices.build_url('tripPlan','listTripPlanArrange'),
			type:"POST",
			data: args,
			success:function(data){
				if(showDialog(data)){
					tripPlan.pageNo = page;

					data.tripPlanList = JSON.parse(data.tripPlanList);
					tripPlan.$tab.find('.T-tripPlanList').html(filterUnAuth(listTemplate(data)));

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
	 * 查看发团安排
	 * @param  {int} id [安排ID]
	 * @param  {string} type 安排项  （来自团队安排）
	 * @return {[type]}     [description]
	 */
	tripPlan.viewTripPlan = function(id, type) {
		$.ajax({
			url: KingServices.build_url('tripPlan','getTripPlanArrange'),
			type: "GET",
			data: {
				id: id,
				type: 'view'
			},
			success:function(data){
				if(showDialog(data)){
					data.basicInfo = JSON.parse(data.basicInfo);
					data.arrangeItemsStauts = JSON.parse(data.arrangeItemsStauts);
					data.tripPlanDayList = JSON.parse(data.tripPlanDayList);

					if (!!type)  {
						var _type = type.split('_')[2];
						for (var key in data.arrangeItems) {
							data[key] = [];
						}
						data[_type + 'List'] = JSON.parse(data.arrangeItems[_type + 'List']);
					} else {
						data.insuranceList = JSON.parse(data.arrangeItems.insuranceList);
						data.hotelList = JSON.parse(data.arrangeItems.hotelList);
						data.busCompanyList = JSON.parse(data.arrangeItems.busCompanyList);
						data.guideList = JSON.parse(data.arrangeItems.guideList);
						data.otherList = JSON.parse(data.arrangeItems.otherList);
						data.restaurantList = JSON.parse(data.arrangeItems.restaurantList);
						data.scenicList = JSON.parse(data.arrangeItems.scenicList);
						data.selfPayList = JSON.parse(data.arrangeItems.selfPayList);
						data.shopList = JSON.parse(data.arrangeItems.shopList);
						data.ticketList = JSON.parse(data.arrangeItems.ticketList);
					}
					data.basicInfo.touristCount = (data.basicInfo.touristAdultCount || 0) + (data.basicInfo.touristChildCount || 0);
					data.days = Tools.getDateDiff(data.basicInfo.endTime, data.basicInfo.startTime) + 1;
					data.touristGroupList = JSON.parse(data.touristGroupList);

					if (data.guideList.length) {
						for (var i = data.guideList.length - 1; i >= 0; i--) {
							data.guideList[i].taskJson = JSON.parse(data.guideList[i].taskJson);
						}
					}
					
					Tools.addTab(menuKey+"-view","查看发团安排",viewTemplate(data));
					var $tab = $("#tab-arrange_all-view-content");
					$tab.find('.T-restaurant-name').each(function() {
						var $name = $(this);

						if ($name.data('ischoose') == 1) {
							// 导游任选
							tripPlan.viewOptionalRestaurant($name);
						}
					});

					$tab.find('.T-close').on('click', function(event) {
						event.preventDefault();
						Tools.closeTab('arrange_all-view');
					});

					// 计算计划导付
					var detail = [0, 0, 0];
					$tab.find('.T-guidePayFeild').each(function() {
						var $td = $(this), type = $td.data('type')*1,
							money = $td.find('.F-money').text() * 1;

						if (type < 4 && type >= 0) {
							detail[type] += money;
						}
					});

					//计算车辆安排签单金额
					var $signBillMoney = $tab.find('.T-signBillMoney'),signBillMoney = 0;
					$signBillMoney.each(function(si) {
						signBillMoney += $(this).text()*1;
					});
					detail[2] += signBillMoney;
					
					var text = [], label = ['现金', '刷卡', '签单'];
					for (var i = 0; i < 3;i ++) {
						if (detail[i] != 0) {
							text.push(label[i] + detail[i]);
						}
					}

					$tab.find('.T-guidePayMoneyLabel').text(text.length?text.join(','): 0);

					$tab.on('click', '.T-collapse', function(event) {
						event.preventDefault();
						var $this = $(this);
						if($this.hasClass('collapsed')){
							$this.text('[收起]');
						} else {
							$this.text('[展开]');
						}
					});
				}
			}
		});
	};

	/**
	 * 导出发团安排
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.exportTripPlanArrange = function(id){
		checkLogin(function(){
			var url = ""+APP_ROOT+"back/export.do?method=exportTripPlanArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&tripPlanId="+id+"";
			exportXLS(url);
		});
	};

	/**
	 * 通知发团安排
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.sendTripPlanArrange = function(id, status) {
		var html = filterUnAuth(noticeTemplate(status));
		var noticeLayer = layer.open({
			type: 1,
			title: '通知设置',
			skin: 'layui-layer-rim', //加上边框
			area: '630px', //宽高
			zIndex:1028,
			content: html.html(),
			success:function(){
				var $container = $('.T-tripPlanNotice'),
					$checkbox = $container.find('.T-checked'),
					$touristDiv = $container.find(".T-touristCheckedShow");
				$container.find('[name=smsSign]').val(tripPlan.$tab.find('[name=travelAgencyName]').val());
				
				$container.find("[name=tourist]").click(function(){
					if($(this).is(":checked")){
						$touristDiv.removeClass('hidden');
					} else{
						$touristDiv.addClass('hidden');
						$touristDiv.find('[name=rightNow]').trigger('click');
					}
				});
				tripPlan.dateTimePicker($container);
				var $timeCheck = $touristDiv.find('.T-checked')
				$timeCheck.click(function() {
					var $this = $(this);
					$timeCheck.prop('checked',false);
					$this.prop('checked',true);

					if($touristDiv.find('[name=timing]').is(":checked")){
						$touristDiv.find('[name=sendDateTime]').removeClass('hidden');
					} else{
						$touristDiv.find('[name=sendDateTime]').addClass('hidden');
						$touristDiv.find('[name=sendDateTime]').val('');
					}
				})
				$container.find('.T-cancel').on('click', function() {
					layer.close(noticeLayer);
				})
				$container.find('.T-btn-submit-notice').on('click', function() {
					var resourceType = '';
					var $checkbox = $container.find('.T-arrangeNotice .T-checked');
					$checkbox.each(function(i) {
						var $this = $checkbox.eq(i);
						if($this.is(':checked')) {
							resourceType += ($this.val())+','
						}
					});
					$.ajax({
						url: KingServices.build_url('tripPlan','noticeTripPlanArrange'), 	
						type: 'POST',
						data: {
							tripPlanId: id + '',
							resourceType: resourceType,
							executeTime: getValue('sendDateTime'),
							executeTimeType: getValue('timing'),
							travelAgencyTag: getValue('smsSign')
						},
						success: function(data) {
							if (showDialog(data)) {
								showMessageDialog(data.message, function() {
									layer.close(noticeLayer);
								})
							}
						}
					})
				})
				function getValue(name){
					var $this = $container.find('[name='+name+']');
					if ($this.attr('type') == 'checkbox') {
						return $this.is(':checked') ? 1 : 0;
					}else if ($this.attr('type') == 'text') {
						return $this.val();
					}
				}
			}
		})
		/*$.ajax({
			url: KingServices.build_url('tripPlan','noticeResourceArrange'),
			type:"POST",
			data:"id="+id,
			success:function(data){
				if(showDialog(data)){
					showMessageDialog($("#confirm-dialog-message"),data.message, function(){
						tripPlan.listTripPlan(0);
					});
				}
			}
		});*/
	};

	/**
	 * 编辑发团安排
	 * @param  {[type]} id         [description]
	 * @param  {string} bs  账务状态  1/2已审核，0已报账 其他是安排，-2是安排具体的内容
	 * @return {[type]}             [description]
	 */
	tripPlan.updateTripPlanArrange = function(id, $billStatus, target, tabId) {
		if($billStatus == '1' || $billStatus == '2'){
			showMessageDialog('该团已审核，无法编辑')
		}else if($billStatus == '0'){
			showMessageDialog('该团导游已报账，无法编辑')
		}else{
			$.ajax({
				url: KingServices.build_url('tripPlan','getTripPlanArrange'),
				type: "GET",
				data: {id: id},
				success:function(data){
					if(showDialog(data)){
						data.basicInfo = JSON.parse(data.basicInfo);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						data.arrangeItemsStauts = JSON.parse(data.arrangeItemsStauts);
						data.tripPlanDayList = JSON.parse(data.tripPlanDayList);
						data.insuranceList = JSON.parse(data.arrangeItems.insuranceList);
						data.hotelList = JSON.parse(data.arrangeItems.hotelList);
						data.busCompanyList = JSON.parse(data.arrangeItems.busCompanyList);
						data.guideList = JSON.parse(data.arrangeItems.guideList);
						data.otherList = JSON.parse(data.arrangeItems.otherList);
						data.restaurantList = JSON.parse(data.arrangeItems.restaurantList);
						data.scenicList = JSON.parse(data.arrangeItems.scenicList);
						data.selfPayList = JSON.parse(data.arrangeItems.selfPayList);
						data.shopList = JSON.parse(data.arrangeItems.shopList);
						data.ticketList = JSON.parse(data.arrangeItems.ticketList);
						data.basicInfo.touristCount = (data.basicInfo.touristAdultCount || 0) + (data.basicInfo.touristChildCount || 0);
						data.days = Tools.getDateDiff(data.basicInfo.endTime, data.basicInfo.startTime) + 1;
						data.tarId = tabId;
						tripPlan.dayWhich = data.dayWhich;

						if ($billStatus === '-2' && !!target) {
							// 来自安排中心的安排
							var _type = target.split('_')[2];

							if (!!data.arrangeItemsStauts[_type + 'Status'])  {
								// 允许安排
								for (var key in data.arrangeItemsStauts) {
									data.arrangeItemsStauts[key] = 0;
								};

								data.arrangeItemsStauts[_type + 'Status'] = 1;
							} else {
								showMessageDialog($( "#confirm-dialog-message" ), '数据异常，请联系火柴头');
								return;
							}
						}
						for (var i = data.guideList.length - 1; i >= 0; i--) {
							if (data.guideList[i].taskJson) {
								data.guideList[i].taskJson = JSON.parse(data.guideList[i].taskJson)
							}
						}

						if (Tools.addTab(menuKey + '-update', '编辑发团安排', filterUnAuth(addTemplate(data)))) {
							var $tab = $("#tab-arrange_all-update-content"), validator = rule.listTripPlanCheckor($tab);
							tripPlan.init_event($tab,id,target);
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
	tripPlan.init_event = function($tab,id,target) {
		Tools.descToolTip($tab.find(".T-ctrl-tip"),1);
		tripPlan.$editTab = $tab;
		// 计算导付
		tripPlan.calcSummary($tab);

		// 监听修改
		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change','input, select,.T-editor', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		// 监听保存，并切换tab
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
			event.preventDefault();
			tripPlan.submitTripPlan($tab,1,id,tab_id, title, html);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			tripPlan.init_event($tab);
		})
		// 保存后关闭
		.on(CLOSE_TAB_SAVE, function(event) {
			event.preventDefault();
			tripPlan.submitTripPlan($tab,0,id);
		});

		tripPlan.addResource($tab);

		$tab.find('.T-toggle-List').off('click.toggle').on('click.toggle', function() {
			var $this = $(this), $tbody = $this.closest('h5').next();/*$tab.find('.T-tripPlanDayList-tbody')*/;
			if ($this.hasClass('T-show')) {
				$this.addClass('T-hide');
				$tbody.hide();
				$this.text('展开');
				$this.removeClass('T-show');
			}else if ($this.hasClass('T-hide')) {
				$this.addClass('T-show');
				$tbody.show();
				$this.text('收起');
				$this.removeClass('T-hide');
			}
		})

		var validator = rule.listTripPlanCheckor($tab);  
		$tab.find('.tab-content').on('click', '.T-addResource', function() {
			var $that = $(this);
			if ($that.hasClass('T-addInsurance')) {
				//保险安排
				tripPlan.addInsurance($that, validator, $tab);
			}else if ($that.hasClass('T-addGuide')) {
				//导游安排
				tripPlan.addGuide($that, validator, $tab);
			}else if ($that.hasClass('T-addBus')) {
				//车辆安排
				tripPlan.addBus($that, validator, $tab);
			}else if ($that.hasClass('T-addRestaurant')) {
				//餐厅安排
				tripPlan.addRestaurant($that, validator, $tab);
			}else if ($that.hasClass('T-addHotel')) {
				//酒店安排
				tripPlan.addHotel($that, validator, $tab);
			}else if ($that.hasClass('T-addScenic')) {
				//景区安排
				tripPlan.addScenic($that, validator, $tab);
			}else if ($that.hasClass('T-addShop')) {
				//购物安排
				tripPlan.addShop($that, validator, $tab);
			}else if ($that.hasClass('T-addSelfPay')) {
				//自费安排
				tripPlan.addSelfPay($that, validator, $tab);
			}else if ($that.hasClass('T-addTicket')) {
				//票务安排
				tripPlan.addTicket($that, validator, $tab);
			}else if ($that.hasClass('T-addOther')) {
				//其它安排
				tripPlan.addOther($that, validator, $tab);
			}
		});

		// 设置人数
		tripPlan.touristCount = $tab.find('.T-touristCount').data('count') || '';

		$tab.find('#tripPlan_addPlan_guide').on('click', '.T-guideBtn', function () {
			var $this = $(this)
			if ($this.hasClass('T-add')) {
				tripPlan.addGuideTask($this, 'add', validator);
			}else if ($this.hasClass('T-del')) {
				tripPlan.addGuideTask($this, 'del');
			}
		})

		var $nav = $tab.find('.T-arrange-tabs'), $target;
		// 绑定安排完成的选择
		$nav.on('click', 'a', function(event) {
			event.preventDefault();
			$tab.find('[data-target="'+ $(this).attr('href') + '"]').removeClass('hidden').siblings('.checkbox').addClass('hidden');
		});

		//车辆安排通知游客
		$tab.find('#tripPlan_addPlan_bus').off('click.noticeTourists').on('click.noticeTourists', '.T-noticeTourists', function() {
			var $this = $(this), $parent = $this.closest('tr'),
				busData = {
					taskType: $parent.find('[name=taskType]').val(),
					setPlaceTime: $this.data('entity-setplacetime'),
					setPlacePosition: $this.data('entity-setplaceposition')
				}
				console.log(busData)
			tripPlan.noticeTourists($this,id,busData);
		})
		tripPlan.taskTypeOperation($tab);

		//购物安排添加删除购物商品
		$tab.find('#tripPlan_addPlan_shop').off('click.shop').on('click.shop', '.T-shopPolicy', function() {
			var $this = $(this), $parentTd = $this.closest('td'), $parentDiv = $this.closest('div');
			if ($this.hasClass('T-add')) {
				var html = ''
				+'<div class="mar-t-10" data-entity-id="">'
                +'<input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" />'
                +'<input type="hidden" name="shopPolicyId" value=""/>'
                +'<button class="btn btn-danger btn-sm btn-white T-shopPolicy T-del"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button>'
                +'</div>';
                $parentTd.append(html);
			}else if ($this.hasClass('T-del')) {
				var id = $parentDiv.data('entity-id');
				if (!!id) {
					showConfirmDialog('你确定要删除该条商品？', function() {
						$.ajax({
							url: KingServices.build_url('tripPlan','deleteTripPlanInfoByCategoryId'),
							type: 'POST',
							data: {
								cateName: 'shopItem',
								cateId: id
							},
							success: function(data) {
								if (showDialog(data)) {
									$parentDiv.remove();
								}
							}
						})
					})
				}else{
					$parentDiv.remove();
				}
			}
			tripPlan.bindShopChoose($tab);
		})

		var noticeTourists = $tab.find('.T-noticeTourists')
		noticeTourists.each(function(i) {
			var $this = noticeTourists.eq(i),
				noticeJson = $this.data('entity-touristgroup'),
				setTime = $this.data('entity-setplacetime'),
				setPosition = $this.data('entity-setplaceposition');
			if (!!noticeJson && typeof noticeJson == 'string') {
				noticeJson = JSON.parse(noticeJson);
			}
			if (noticeJson.length > 0 || !!setTime || !!setPosition) {
				$this.text('已设置');
			}
		})

		// var setUpTourists = $tab.find('.T-setUp')
		// setUpTourists.each(function(i) {
		// 	var $this = setUpTourists.eq(i),
		// 		noticeJson = $this.attr('touristgroup');
				
		// 	if (!!noticeJson && typeof noticeJson == 'string') {
		// 		noticeJson = JSON.parse(noticeJson);
		// 	}
		// 	if (noticeJson.length > 0) {
		// 		$this.text('已设置');
		// 	}else{
		// 		$this.text('点击设置');
		// 	}
		// })

		$tab.find('.T-touristGroupList').on('click', '.T-groupView', function() {
			var $this = $(this), $parent = $this.closest('tr'), id = $parent.data('id');
			tripPlan.viewTouristGroup(id);
		})
		
		// 激活第一个菜单
		if (!!target) {
			if (target == 'T-bus') {
				$target = $tab.find('.T-busTarget');
			}else if (target == 'T-hotel') {
				$target = $tab.find('.T-hotelTarget');
			} else {
				$target = $nav.find('[href='+ target +']');
			}
		}
		if (!$target || !$target.length) {
			$target = $nav.find('a').eq(0);
		}
		$target.trigger('click');
		if (!$nav.find('.active').length) {

			$nav.find('a').eq(0).trigger('click');
		}

		// 记录状态改变，在提交数据时，只对改变了的数据进行提交
		$tab.find('.T-finishedArrange').on('change', function(event) {
			$(this).data('change', true);
		});

		tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
		//修改预订状态
		$tab.find('.tabbable').on('change', '[name=orderStatus],[name=hotelOrder]', function() {
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
					showMessageDialog('请完善车队信息');
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
		//车费查询
		$tab.find('#tripPlan_addPlan_bus').off('change').on('change','.T-busPriceC',function () {
			var $this = $(this), $parent = $this.closest('tr');
			var busStartTime = $parent.find('[name=startTime]').val(),
				busEndTime = $parent.find('[name=endTime]').val(),
				busId = $parent.find('[name=busId]').val(),
				busDays = tripPlan.daysDifference(busStartTime, busEndTime);

			$.ajax({
				url: KingServices.build_url('busCompany','getBusContractPrice'),
				type: 'POST',
				showLoading: false,
				data: {busId: busId, startTime: busStartTime},
			})
			.done(function(data) {
				$parent.find('[name=price]').val(data.contractPrice * busDays);
			});
		})

		//酒店询价、预订操作
		$tab.find('#tripPlan_addPlan_hotel').off('click.hotelAction').on('click.hotelAction', '.T-hotel-action', function(event) {
			event.preventDefault();
			var	$this = $(this),
				$parents = $this.closest('tr'),
				saveJson = { 
				arrangeId: $parents.data('entity-arrangeid'),
				count: $parents.find('[name=memberCount]').val(),
				hotelId: $parents.find('[name=hotelId]').val(),
				price: $parents.find('[name=price]').val(),
				tripPlanId: $tab.find('[name=tripPlanId]').val(),
				type: $parents.find('[name=hotelRoom]').val(),
				whichDay: $parents.find('[name=whichDay]').val(),
				hotelRoomId: $parents.find('[name=hotelRoomId]').val()
			}
			if ($this.hasClass('T-hotel-askPrice')) {
				//询价
				if (!!saveJson.count == false || !!saveJson.hotelId == false || !!saveJson.type == false) {
					showMessageDialog('请完善酒店信息');
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
						price: $tr.eq(i).find('[name=price]').val(),
						type: $tr.eq(i).find('[name=hotelRoom]').val(),
						whichDay: $tr.eq(i).find('[name=whichDay]').val(),
						hotelRoomId: $tr.eq(i).find('[name=hotelRoomId]').val()
					}
					if (!!json.count == false || !!json.hotelId == false || !!json.price == false || !!json.type == false || !!json.whichDay == false) {
						showMessageDialog('请完善酒店信息');
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
		tripPlan.addBusResource($tab);
		//第N天
		tripPlan.setChooseDays();
		//删除操作
		$tab.on('click', '.T-btn-deleteTripPlanList, [name="isAccountGuide"]', function() {
			var $that = $(this);

			if ($that.is('input[name="isAccountGuide"]')) {
				var $priceObj = $that.closest('tbody').find('.price:not(.hidden)').addClass('hidden'),
					$price = $priceObj.eq(0).text(),
					$trPriceObj = $that.closest('tr').find('.price');

				$trPriceObj.removeClass('hidden').text($price);
				$that.closest('tbody').find('.price').filter('.hidden').text(0);
			} else {
				var $parents = $that.closest('tr'), id = $parents.data('entity-arrangeid'),
					$name = $that.data('entity-name'), isBooking = $parents.data('entity-isbooking');
				tripPlan.deleteTripPlan($that, id, $name, $tab, isBooking);
			}
		});
		//所有autocomplete
		tripPlan.bindAutocomplete($tab);
		//车队修改计划导付付款方式
		tripPlan.changePayType($tab);
		//查看浮动自选餐厅
		tripPlan.viewOptionalRestaurant($tab.find('.T-chooseRestaurant'));
		// 绑定费用计算
		tripPlan.bindAutoCalcPrice($tab);
		//时间控件
		tripPlan.dateTimePicker($tab);
		// 绑定日期
		tripPlan.datepicker($tab);
		//提交事件
		$tab.find(".T-btn-submit-tripPlan").on("click",function(){
			 if (!validator.form()) { 
			    return; 
			 }
			tripPlan.submitTripPlan($tab,0,id);
		}); 
		$tab.find(".T-cancel").on("click",function(){
			 Tools.closeTab(Tools.getTabKey($tab.prop('id')));
		});  
		//计算计划预支款
		$tab.find('#tripPlan_addPlan_guide').on('change', 'input[name=guidePlanPreMoney]', function() {
			var $inputs = $tab.find('#tripPlan_addPlan_guide').find('input[name=guidePlanPreMoney]'), guideAllPlanPreMoney = 0;
			$inputs.each(function(index) {
				var $this = $inputs.eq(index);
				guideAllPlanPreMoney += $this.val()-0;
			});
			$tab.find('.T-guidePlanAllPreMoney').text(guideAllPlanPreMoney);
		});

		
		var isArranged = $tab.find('#isArranged').val();
		if (isArranged == 0) {
			$tab.find('[name=price]').trigger('change');
		}

		//选择已添加导游
		/*$tab.find('.tab-content').on('click.chooseGuide', '.T-chooseGuide', function() {
			var $this = $(this), $guideList = [], guideList = [],
				$parent = $this.closest('tr');
			$tab.find('#tripPlan_addPlan_guide tbody tr').each(function() {
				var $that = $(this);
				if (!!$that.find('[name=guideId]').val()) {
					$guideList.push($that)
				}
			});
			console.log($guideList)
			for (var i = $guideList.length - 1; i >= 0; i--) {
				var $that = $guideList[i];
				var guide = {
					index: i,
					name: $that.find('[name=guideName]').val(),
					id: $that.find('[name=guideId]').val()
				}
				if (!!guide.id) {
					guideList.push(guide);
				}
			}
			$guideList.each(function(i) {
				var $that = $guideList.eq(i);
				var guide = {
					index: i,
					name: $that.find('[name=guideName]').val(),
					id: $that.find('[name=guideId]').val()
				}
				if (!!guide.id) {
					guideList.push(guide);
				}
			})
			console.log(guideList);
			$this.autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if(ui.item == null){
						$this.data('entity-index','');
						$this.data('entity-guideid', '');
					}
				},
				select: function(event, ui) {
					$this.data('entity-index', ui.item.index);
					$this.data('entity-guideid', ui.item.id);
				}
			})
			if(guideList && guideList.length > 0){
				for(var i=0; i < guideList.length; i++){
					guideList[i].value = guideList[i].name;
				}
				$this.autocomplete('option','source', guideList);
				$this.autocomplete('search', '');
			}else{
				layer.tips('没有安排导游', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})*/
	}

	/**
	 * 车队通知游客操作
	 * @param  {[type]} $this [按钮对象]
	 * @return {[type]}       [description]
	 */
	tripPlan.noticeTourists = function($that,id,busData) {
		var thatJson = $that.data('entity-touristgroup');
		if (!!thatJson && typeof thatJson == 'string') {
			thatJson = JSON.parse(thatJson);
		}
		$.ajax({
			url: KingServices.build_url('tripPlan','getTouristGroupInTrip'),
			type: 'POST',
			data: {
				tripPlanId: id,
				taskType: busData.taskType
			},
			success: function(data) {
				if (showDialog(data)) {
					data.touristGroupList = JSON.parse(data.touristGroupList);
					data.busData = busData;
					console.log(data)
					var noticeTouristsLayer = layer.open({
						type: 1,
					    title:"选择游客小组",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: selectTouristTemplate(data),
					    scrollbar: false,
					    success:function(){
					    	var $container = $(".T-addtourist-TripPlanBus")

					    	tripPlan.dateTimePicker($container);
					    	$container.find(".T-checkAll").click(function(){
								if($(this).is(":checked")){
									$container.find(".T-tourist-check").prop("checked",true);
								} else{
									$container.find(".T-tourist-check").prop("checked",false);
								}
							});

							//勾选回显
							if (!!thatJson) {
								var $tr = $container.find('.T-group-list tr');
								$tr.each(function(j) {
									var $this = $tr.eq(j), id = $this.data('entity-id');
									for (var i = 0, len = thatJson.length; i < len; i++) {
										if (thatJson[i].id == id) {
											$this.find('.T-tourist-check').prop('checked',true)
											if (busData.taskType == 6) {
												$this.find('[name=setPlaceTime]').val(thatJson[i].setPlaceTime);
												$this.find('[name=setPlacePosition]').val(thatJson[i].setPlacePosition);
											}
											break;
										}
									}
								});
							}

							//查看游客小组
							$container.find('.T-groupView').off('click.viewGroup').on('click.viewGroup', function() {
								var $this = $(this), $parent = $this.closest('tr'), id = $parent.data('entity-id');
								tripPlan.viewTouristGroup(id);
							})

							$container.find('.T-cancel').on('click', function() {
								layer.close(noticeTouristsLayer);
							})

							//提交操作
							$container.find('.T-saveGroup').off('click.submit').on('click.submit', function() {
								var $checkbox = $container.find('.T-tourist-check:checked'),touristGroupJson = [], hasJson = 0,
									taskType = $container.data('tasktype');
								$checkbox.each(function(i) {
									var $this = $checkbox.eq(i),
										$parents = $this.closest('tr'),
										json = {}
									if (taskType == 6) {
										json = {
											id: $parents.data('entity-id'),
											setPlaceTime: $parents.find('[name=setPlaceTime]').val(),
											setPlacePosition: $parents.find('[name=setPlacePosition]').val()
										}
									}else {
										json = {
											id: $parents.data('entity-id')
										}
									}
									touristGroupJson.push(json);
								})
								if (touristGroupJson.length > 0) {
									hasJson = 1;
								}
								touristGroupJson = JSON.stringify(touristGroupJson);
								$that.data('entity-touristgroup',touristGroupJson);
								$that.data('entity-setplacetime', $container.find('[name=setPlaceTimeTotal]').val())
								$that.data('entity-setplaceposition', $container.find('[name=setPlacePositionTotal]').val())
								if (!!hasJson || !!$container.find('[name=setPlaceTimeTotal]').val() || $container.find('[name=setPlacePositionTotal]').val()) {
									$that.text('已设置');
								}else{
									$that.text('点击设置');
								}
								layer.close(noticeTouristsLayer);
							})
					    }
					})
				}
			}
		});
	};

	/**
	 * 车辆任务选择操作
	 * @param  {[type]} $tab [description]
	 * @return {[type]}      [description]
	 */
	tripPlan.taskTypeOperation = function($tab) {
		$tab.find('#tripPlan_addPlan_bus').off('change.taskType').on('change.taskType', '[name=taskType]', function() {
			var $this = $(this), $parent = $this.closest('tr'), value = $this.val();
			if (value == 6) {
				$parent.find('[name=setPlaceTime],[name=setPlacePosition]').val('').prop('disabled',true);
			}else{
				$parent.find('[name=setPlaceTime],[name=setPlacePosition]').prop('disabled',false);
			}
			$parent.find('.T-noticeTourists').data('entity-touristgroup','');
		})
	}

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
		    		var $parent = $this.closest('tr');
		    		saveJson.expiryTime = $container.find('[name=expiryTime]').val();
		    		if (!!saveJson.expiryTime) {
						$.ajax({
							url: KingServices.build_url('busInquiry','saveBusArrangeInquiry'),
							type: 'POST',
							data: {saveJson: JSON.stringify(saveJson)},
							success: function(data) {
								if (showDialog(data)) {
									showMessageDialog(data.message,function() {
										$parent.attr('data-entity-offerId', data.offerId);
										layer.close(tripPlan.$expiryTimeLayer);
									});
								}
							}
						})
					}else{
						showMessageDialog('请选择询价截止时间');
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
					showMessageDialog(data.message);
					$this.closest('tr').find('[name=orderStatus]').val(2);
					$this.closest('tr').find('.T-bus-bookingStatus').addClass('T-bus-booking').css('color','#337ab7');
					$this.closest('tr').find('[name=id]').val(data.arrangeId);
					$this.closest('tr').data('entity-arrangeid', data.arrangeId);
					$this.closest('tr').data('entity-isbooking', 1);
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
									showMessageDialog(data.message);
									layer.close(tripPlan.$expiryTimeLayer);
								}
							}
						})
					}else{
						showMessageDialog('请选择询价截止时间');
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
					showMessageDialog(data.message);
					$this.closest('tr').find('[name=hotelOrder]').val(2);
					$this.closest('tr').find('.T-hotel-bookingStatus').addClass('T-hotel-booking').css('color','#337ab7');
					$this.closest('tr').find('[name=id]').val(data.arrangeId);
					$this.closest('tr').data('entity-arrangeid',data.arrangeId);
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
					for(var i = 0 ; i < data.mapList.length; i++){
						var trLen = 0;
						for(var j = 0 ; j < data.mapList[i].hotelOffers.length; j++){
							var roomOffers = data.mapList[i].hotelOffers[j].roomOffers;
							data.mapList[i].hotelOffers[j].roomOffers = roomOffers;
							trLen += roomOffers.length;
						}
						data.mapList[i].trLen = trLen;
					}
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
								showConfirmDialog('存在有效询价，可直接预订，是否继续询价', function() {
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
									showMessageDialog(data.message);
									layer.close(tripPlan.$expiryTimeLayer);
								}
							}
						})
					}else{
						showMessageDialog('请选择询价截止时间');
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
					var hotelList = JSON.parse(data.hotelOrderJson);
					showMessageDialog(data.message,function() {
						for (var i = 0, len = hotelList.length; i < len; i++) {
							var arrangeId = hotelList[i].arrangeId,
								hotelId = hotelList[i].hotelId,
								hotelRoomId = hotelList[i].hotelRoomId,
								whichDay = hotelList[i].whichDay,
								$tr = $tab.find('#tripPlan_addPlan_hotel tbody tr');
							$tr.each(function(j) {
								var $this = $tr.eq(j);
								var trHotelId = $this.find('[name=hotelId]').val(),
									trHotelRoomId = $this.find('[name=hotelRoomId]').val(),
									trWhichDay = $this.find('[name=whichDay]').val();
								if (hotelId == trHotelId && hotelRoomId == trHotelRoomId && whichDay == trWhichDay) {
									$this.find('[name=id]').val(arrangeId);
									$this.data('entity-arrangeid', arrangeId);
									$this.data('entity-isbooking', 1);
								}
							});
						}
					});
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
		$("#tripPlan_addPlan_guide .T-addGuideResource").off('click').on("click",{function : KingServices.addGuide , type : "tr" , name : "guideName" , id : "guideId", mobileNumber: "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_insurance .T-addInsuranceResource").off('click').on("click",{function : KingServices.addInsurance , type : "tr" , name : "insuranceName" , id : "insuranceId"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_restaurant .T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant, type : "tr" , name : "restaurantName" , id : "restaurantId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_hotel .T-addHotelResource").off('click').on("click",{function : KingServices.addHotel, type : "tr" , name : "name" , id : "hotelId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_scenic .T-addScenicResource").off('click').on("click",{function : KingServices.addScenic, type : "tr" , name : "name" , id : "scenicId"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_shop .T-addShopResource").off('click').on("click",{function : KingServices.addShop, type : "tr" , name : "name" , id : "shopId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_selfPay .T-addSelfPayResource").off('click').on("click",{function : KingServices.addSelfPay, type : "tr" , name : "name" , id : "selfPayId" , managerName : "managerName" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		$("#tripPlan_addPlan_ticket .T-addTicketResource").off('click').on("click",{function : KingServices.addTicket, type : "tr" , name : "name" , id : "ticketId"}, KingServices.addResourceFunction);
	};

	/**
	 * 添加保险安排
	 * @param {[type]} validator [验证]
	 */
	tripPlan.addInsurance = function($this, validator, $tab) {
		var tableContainer = $this.closest('.ui-sortable-handle').find('.table tbody'),
			html = '<tr><td><div class="col-sm-12"><input type="text" maxlength="32" name="insuranceName" class="col-sm-12 T-chooseInsurance bind-change"/><input type="hidden" name="insuranceId"/><span class="addResourceBtn T-addInsuranceResource R-right" data-right="1080002" title="添加保险公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="insuranceItem" maxlength="32" class="col-sm-12 T-chooseInsuranceType"/><input type="hidden" name="insuranceItemId" value="" /></td>' +
		'<td><input type="text" name="price" maxlength="6" class="col-sm-12 price F-float F-money"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="'+ tripPlan.touristCount +'"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9"/></div></td>' +
		'<td><input name="remark" type="text" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList"  data-entity-name="insurance" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.addResource();
		validator = rule.update(validator);
		tripPlan.bindInsuranceChoose($tab);
	};

	/**
	 * 增加导游安排
	 * @param {object} $btn      增加按钮
	 * @param {object} validator 校验对象
	 * @param {object} $tab      顶层父元素
	 */
	tripPlan.addGuide = function($btn, validator, $tab) {
		var $tbody = $btn.closest('.ui-sortable-handle').find('tbody'),
			html = '<tr>'
			+'<td class="feild-relative"><div class="T-guideAddTask" data-index="0"><input type="text" name="startTime" class="datepicker"></div></td>'
			+'<td><div class="T-guideAddTask" data-index="0"><input type="text" name="endTime" class="datepicker"></div></td>'
			+'<td><div class="T-guideAddTask mar-t-5" data-index="0"><select name="taskType"><option value="0" selected="">全程</option><option value="1">接机</option><option value="2">送机</option><option value="3">前段</option><option value="4">中段</option><option value="5">后段</option></select>'
			+'<label style="float:right; padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-add T-guideBtn"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'
			+'<td><div class="col-sm-12 feild-relative"><input type="text" name="guideName" maxlength="32" class="col-sm-12 chooseGuide"><input type="hidden" name="guideId"><span class="addResourceBtn T-addGuideResource R-right" data-right="1010002" title="添加导游"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td> '
			+'<!-- <td><input type="text" name="mobileNumber" maxlength="32" readonly="readonly" class="col-sm-12"/></td> -->'
			+'<td><input type="text" name="mobileNumber" maxlength="32" readonly="readonly" class="col-sm-12"></td>'
			+'<td><input type="text" name="price" class="col-sm-12 input-success F-float F-money" maxlength="9"></td>'
			+'<td><input type="text" name="manageFee" class="col-sm-12 input-success F-float F-money" maxlength="9"></td>'
            +'<td><input type="text" name="guidePlanPreMoney" /></td>'
			+'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"></td>'
			+'<td> <a class="cursor T-btn-deleteTripPlanList" data-entity-name="guide" title="删除"> 删除 </a> </td> </tr>  ',

			$tr = $(filterUnAuth(html)).appendTo($tbody),
			//精度控件
			$price = $tr.find('.price');
		Tools.setDatePicker($tr.find('.datepicker'), true);
		Tools.inputCtrolFloat($price);
		tripPlan.addResource();
		validator = rule.update(validator);
		tripPlan.bindInsuranceChoose($tab);
		tripPlan.bindGuideChosen($tr);
		/*if ($tr.index() === 0) {  // 第一条时，默认选中
			$tr.find('input[name="isAccountGuide"]')[0].checked = true;
		} else {
			// 其他条时，默认隐藏费用项
			$tr.find('.price').addClass('hidden').text(0);
		}*/

		if ($tab.find('.T-status').text() != 0) {
			$tr.find('[name="isAccountGuide"]').prop('disabled', true)
		}
		
		var $trs = $tbody.find('tr'), startTime = $tab.find('.T-startTime').text(), endTime = $tab.find('.T-endTime').text();
		if ($trs.length == 1) {
			$trs.eq(0).find('input[name=startTime]').val(startTime);
			$trs.eq(0).find('input[name=endTime]').val(endTime);
		}
	}

	/**
	 * 增加车辆安排
	 * @param {object} $btn      增加按钮
	 * @param {object} validator 校验对象
	 * @param {object} $tab      顶层父元素
	 */
	tripPlan.addBus = function($btn, validator, $tab) {
		var $tbody = $btn.closest('.ui-sortable-handle').find('tbody'),
			html = '<tr> <td><input type="text" name="startTime" class="datepicker T-busPriceC"></td>'
					+ '<td><input type="text" name="endTime" class="datepicker T-busPriceC"></td>'
					+ '<td><select name="taskType"><option value="0">全程</option><option value="1">接机</option><option value="2">送机</option><option value="3">前段</option><option value="4">中段</option><option value="5">后段</option><option value="6">小车接客</option></select></td>'
					+ '<td><input type="text" name="needSeatCount" class="col-sm-12" style="width: 60px;"></td>'
					+ '<td><input type="text" name="brand" class="col-sm-12"></td>'
					+ '<td><div class="col-xs-12 feild-relative"><input type="text" name="licenseNumber"  class="col-sm-12 T-busPriceC"><input type="hidden" name="busId"><span class="addResourceBtn T-addBusResource R-right" data-right="1020003" title="添加车辆"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'
					+ '<td><div class="col-xs-12 feild-relative"><input type="text" name="driverName" class="col-sm-12"><input type="hidden" name="driverId"><span class="addResourceBtn T-addDriverResource R-right" data-right="1020003" title="添加司机"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'
					+ '<td><div class="col-xs-12 feild-relative"><input type="text" name="companyName" class="col-sm-12 chooseBusCompany"><input type="hidden" name="busCompanyId"><span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'
					+ '<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12"></td>'
                    + '<td><a class="T-noticeTourists">点击设置</a></td>'
					+ '<td><input type="text" name="contractNumber" maxlength="20" class="col-sm-12"></td>'
					+ '<td><input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;"><input type="hidden" name="memberCount" value="1"></td>'
					+ '<td><input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;"></td>'
					+ '<td><input type="text" name="needPayMoney" readonly="readonly"maxlength="9" class="col-sm-12 F-float F-money" style="width: 60px;"></td>'
					+ '<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9" style="width: 60px;"></div></td>'
					+ '<td style="text-align: left;"><div class="inline-flex">'+ payTypeHtml +'<input name="guidePayMoney" type="text" maxlength="9" class="F-float F-money"></td>'
					+ '<td><input type="text" readonly name="signBillMoney" class="F-float F-money"></td>'
					+ '<td><input name="remark" type="text" class="col-sm-12" maxlength="500"></td>'
					+ '<td> <select name="orderStatus"> <option value="1">未预定</option> <option value="2">预定中</option> <option value="3">已预订</option> <option value="0">无需预定</option> </select> </td>'
					+ '<td> <a class="cursor T-bus-action T-bus-askPrice">询价</a><a class="cursor T-bus-action T-bus-offerStatus"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-bus-action T-bus-bookingStatus " style="color: #bbb">预订</a><a class="cursor T-bus-action T-bus-bookingView"><i class="ace-icon fa fa-search"></i></a><a class="cursor T-hotel-action T-btn-deleteTripPlanList" title="删除" data-entity-name="busCompany">删除</a></td></tr>',

			$tr = $(filterUnAuth(html)).appendTo($tbody),
		//精度控件
			$price = $tr.find('.price');
		Tools.setDatePicker($tr.find('.datepicker'), true);
		Tools.inputCtrolFloat($price);
		tripPlan.addResource();
		tripPlan.addBusResource($tab);
		tripPlan.dateTimePicker($tab);
		validator = rule.update(validator);
		tripPlan.bindInsuranceChoose($tab);
		tripPlan.bindBusCompanyChoose($tr);
		tripPlan.changePayType($tab);
	}

	//添加餐饮安排
	tripPlan.addRestaurant = function($this, validator, $tab){   
		var tableContainer = $this.closest(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer w-100"></td>' +
		'<td><select name="type" class="col-sm-12 T-restauranType" style="width:80px;"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>' +
		'<td><div class="col-sm-12"><input type="text" name="restaurantName" class="col-sm-12 T-chooseRestaurant"/><input type="hidden" name="restaurantId"><input type="hidden" name="optional" value="" /><span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12"/></td>' +
		'<td><input type="text" name="price" value="" class="col-sm-12 T-typeNameChoose F-float F-money"/><input type="hidden" name="restaurantStandardId" value="0"/></td>' +
		'<td><input name="memberCount" type="text" class="col-sm-12 F-float F-count" style="width: 60px;" maxlength="4" value="'+ tripPlan.touristCount +'"/></td>' +
		'<td><input name="reduceMoney" type="text" class="col-sm-12 price F-float F-money" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input name="needPayMoney" readonly="readonly" type="text" class="col-sm-12 F-float F-money" style="width: 60px;"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input name="prePayMoney" type="text" class="price F-float F-money" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input name="guidePayMoney" type="text" class="F-float F-money" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><input name="remark" type="text" class="col-sm-12"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="restaurant" title="删除">删除</a></td>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_restaurant");
		tripPlan.addResource();
		// 更新表单验证的事件绑定  
		validator = rule.update(validator); 
		tripPlan.bindRestaurantChoose($tab);
	};
	// 添加酒店安排
	tripPlan.addHotel = function($this, validator, $tab){
		var tableContainer = $this.closest(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer w-100"></td>' +
		'<td><select class="col-sm-12 no-padding T-tripPlanHotelStar" style="width: 80px;"><option selected="selected" {{if hotel.hotel.level == 0}}selected="selected"{{/if}} value="">--全部--</option>'+
		'<option value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select><input type="hidden" name="id" value="" /></td>' +
		'<td><div class="col-sm-12"><input type="text" class="col-sm-12 T-chooseHotel" name="name" /><input type="hidden" name="hotelId"><span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" class="col-sm-12" readonly="readonly" name="managerName"/></td>' +
		'<td><input type="text" class="col-sm-12 T-chooseHotelRoom" name="hotelRoom"/><input type="hidden" name="hotelRoomId"></td>' +
		'<td><input type="text" class="col-sm-12 price F-float F-money" name="price" style="width: 60px;" maxlength="6"/></td>' +
		'<td><input type="text" class="col-sm-12 F-float F-count" name="memberCount" style="width: 60px;" maxlength="6"  value="'+ (tripPlan.touristCount/2) +'"/></td>' +
		'<td><input type="text" class="col-sm-12 price F-float F-money" name="reduceMoney" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" class="col-sm-12 F-float F-money" name="needPayMoney" readonly="readonly" style="width: 60px;"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" class="price F-float F-money" name="prePayMoney" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input type="text" class="F-float F-money" name="guidePayMoney" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><input type="text" class="col-sm-12" name="remark" maxlength="500"/></td>' +
		'<td><select name="orderStatus"><option value="1">未预定</option><option value="2">预定中</option><option value="3">已预订</option><option value="0">无需预订</option></select></td>'+
		'<td><a class="cursor T-hotel-action T-hotel-askPrice">询价</a><a class="cursor T-hotel-action T-hotel-offerStatus"><i class="ace-icon fa fa-search"></i></a>'+
		'<a class="cursor T-hotel-action T-hotel-bookingStatus" style="color: #bbb">预订</a><a class="cursor T-hotel-action T-hotel-bookingView"><i class="ace-icon fa fa-search"></i></a><a class="cursor T-hotel-action T-btn-deleteTripPlanList" title="删除" data-entity-name="hotel">删除</a></td></tr>';

		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price = tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_hotel");
		tripPlan.addResource();
		// 更新表单验证的事件绑定  
		validator = rule.update(validator); 
		tripPlan.bindHotelChoose($tab);
		tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'))
	};
	// 添加景区安排
	tripPlan.addScenic = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer w-100"></td>' +
		'<td><select name="tourTime" class="col-sm-12 no-padding" style="width: 75px;"> <option value="全天">全天</option> <option value="上午">上午</option> <option value="下午">下午</option> </select> </td>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseScenic"/><input type="hidden" name="scenicId"/><span class="addResourceBtn T-addScenicResource R-right" data-right="1060002" title="添加景区"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="text" name="chargingProjects" class="col-sm-12 T-chooseScenicItem"/><input type="hidden" name="scenicItemId"/></td>' +
		'<td><input type="text" name="tourDuration" class="col-sm-12" value="" style="width: 60px;" maxlength="3"> </td>' +
		'<td><input type="text" name="price" class="col-sm-12 price F-float F-money" style="width: 60px;" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12 F-float F-count" style="width: 60px;" maxlength="8" value="'+ tripPlan.touristCount +'"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" style="width: 60px;" maxlength="9"/></td>' +
		'<td><input type="text" name="orderNumber" class="col-sm-12" value="" maxlength="20"/></td>'+
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" style="width: 60px;"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input type="text" name="guidePayMoney" class="F-float F-money" style="width: 60px;" maxlength="9"/></div></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="scenic" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_scenic");
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindScenicChoose($tab);   
	};
	// 添加购物安排
	tripPlan.addShop = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer w-100" value=""></td>'+
        '<td><div class="col-sm-12"><input type="hidden" name="id" value="" /><input type="text" name="name" class="col-sm-12 T-chooseShop" value="" /><input type="hidden" name="shopId" value="" /><span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
        '<td><input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="" /></td>'+
        '<td><input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="" /></td>'+
        '<td>'+
		'<div>'
        +'<input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" />'
        +'<input type="hidden" name="shopPolicyId" value=""/>'
        +'<button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>'
        +'</div>'
        +'</td>'+
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
			html = '<tr><td class="T-whichDaysContainer w-100"></td>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseSelfPay"/><input type="hidden" name="selfPayId" /><span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><input type="hidden" name="selfPayItemId" value="" /><input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="" /></td>'+
		'<td><input type="text" readonly="readonly" name="managerName" class="col-sm-12"/></td>' +
		'<td><input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="6"/></td>' +
		'<td><input type="text" name="lowestPrice" class="col-sm-12 price F-float F-money" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="'+ tripPlan.touristCount +'"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" maxlength="9"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9" style="width: 60px;"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input type="text" name="guidePayMoney" class="F-float F-money w-80" maxlength="9"/></div></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="selfpay" title="删除">删除</a></td></tr>';
		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_selfPay");
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindSelfPayChoose($tab);
	};

	// 添加票务
	tripPlan.addTicket = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr>' +
		'<td><div class="col-sm-12"><input type="text" name="name" class="col-sm-12 T-chooseTicket"/><input type="hidden" name="ticketId" /><span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>' +
		'<td><select name="type" class="col-sm-12 no-padding" style="width:70px;"> <option value="1" selected="selected">机票</option><option value="2">汽车票</option> <option value="3">火车票</option> <option value="4">轮船票</option> </select></td>' +
		'<td><input type="text" name="startingCity" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="arriveCity" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="shift" class="col-sm-12" maxlength="9"/></td>' +
		'<td><input type="text" name="startTime" class="col-sm-13 col-xs-12 T-dateTimePicker"/></td>' +
		'<td><input type="text" name="seatLevel" class="col-sm-12" maxlength="32"/></td>' +
		'<td><input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="'+ tripPlan.touristCount +'"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input type="text" name="guidePayMoney" class="F-float F-money w-80" maxlength="9"/></div></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="ticket" title="删除">删除</a></td></tr>';

		tableContainer.append(filterUnAuth(html));
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_ticket");
		tripPlan.dateTimePicker($tab);
		tripPlan.addResource();
		// 更新表单验证的事件绑定
		validator = rule.update(validator);  
		tripPlan.bindTicketChoose($tab);    
	};

	// 添加其他
	tripPlan.addOther = function($this, validator, $tab){
		var tableContainer = $this.parents(".ui-sortable-handle").find(".table tbody"),
			html = '<tr><td class="T-whichDaysContainer w-100"></td>' +
		'<td><input type="text" name="name" maxlength="32" class="col-sm-12 T-other-name"/></td>' +
		'<td><input type="text" name="managerName" maxlength="32" class="col-sm-12"/></td>' +
		'<td><input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"/></td>' +
		'<td><input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="6"/></td>' +
		'<td><input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8"/></td>' +
		'<td><input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9"/></td>' +
		'<td><input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money"/></td>' +
		'<td><div class="inline-flex">'+preTypeHtml+'<input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9"/></div></td>' +
		'<td><div class="inline-flex">'+ payTypeHtml +'<input type="text" name="guidePayMoney" class="F-float F-money" maxlength="9"/></div></td>' +
		'<td><input type="text" name="remark" class="col-sm-12" maxlength="500"/></td>' +
		'<td><a class="cursor T-btn-deleteTripPlanList" data-entity-name="other" title="删除">删除</a></td></tr>';

		tableContainer.append(html);
		//精度控件
		var $price=tableContainer.find('.price');
		Tools.inputCtrolFloat($price);
		tripPlan.setChooseDays("tripPlan_addPlan_other");
		// 更新表单验证的事件绑定
		validator = rule.update(validator);    
	};

	//第N天
	tripPlan.setChooseDays = function(id){
		var days = tripPlan.$editTab.find(".T-days").text()*1,
			startTime = tripPlan.dayWhich.startTime,
			endTime = tripPlan.dayWhich.endTime;
		tripPlan.dayWhich.whichDay.push(1);
		tripPlan.dayWhich.whichDay.push(Tools.getDateDiff(startTime,endTime) + 1)
		console.log(tripPlan.dayWhich)
		var max = Math.max.apply(Math,tripPlan.dayWhich.whichDay) - 1,
			min = Math.min.apply(Math,tripPlan.dayWhich.whichDay) - 1;
			console.log(max + ',' + min)
		if(parseInt(days) < 1)return;

		if(id){
			var tr = $("#"+id+" tbody tr");
			var selectText = '<select class="w-100" name="whichDay">';
			for(var i = min; i <= max; i++){
				selectText += '<option value="'+(i+1)+'">'+ Tools.addDay(startTime, i) +'</option>';
				console.log(Tools.addDay(startTime, i))
			}
			selectText += '</select>';
			tr.eq(tr.length-1).find(".T-whichDaysContainer").html(selectText);
		}else{
			tripPlan.$editTab.find(".T-whichDaysContainer").each(function(index){
				var val = ($(this).attr("value") || 1)*1,isDis = $(this).data('isconfirmaccount'), disabled = '';
				if (isDis) {
					disabled = 'disabled = "disabled"';
				}
				var selectText = '<select class="w-100" name="whichDay" '+disabled+'>';
				max = (max >= val-1)? max: val-1;
				min = (min <= val-1)? min: val-1;
				console.info(max);
				for(var i = min; i <= max; i++){
					if(val == (i+1)){
						selectText += '<option value="'+(i+1)+'" selected="selected">'+ Tools.addDay(startTime, i) +'</option>';
					}else{
						selectText += '<option value="'+(i+1)+'">'+ Tools.addDay(startTime, i) +'</option>';
					}
				}
				selectText += '</select>';
				$(this).html(selectText);
			});
		}
	};

	/**
	 * 删除发团安排操作
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}     [description]
	 */
	tripPlan.deleteTripPlan = function($this, id, $name, $tab, isBooking) {
		var isPayed = $this.data('entity-ispayed'), text = '你确定要删除该条记录？'
		if (isPayed != '' && isPayed != 0) {
			text = '财务已付款，是否删除？'
		}
		if(id){
			//默认等于0，说明数据来源于模板表，直接移除tr行，不做后台删除请求
			//等于1说明数据来源于安排表，发送删除请求
			var isArranged = $('#isArranged').val() == "1";
			
			if(isArranged || !!isBooking) {
				showConfirmDialog(text, function() {
					$.ajax({
						url: KingServices.build_url("tripPlan","deleteTripPlanInfoByCategoryId"),
	                    type: "post",
	                    data:"cateName="+$name+"&cateId="+id,
	                    success: function(data) {
							if(showDialog(data)){
								if ($name === 'guide') {
									// 删除导游前，缓存Id
									var $container = $this.closest('#tripPlan_addPlan_guide'),
										delJson = $container.data('delJson') || [];

									delJson.push({id: id});
									$container.data('delJson', delJson);
								}								
								removeItem();								
							}
	                    }
	                });
				})
			} else {
				removeItem();
			}
		}else{
			removeItem();
		}

		function removeItem() {
			var $tbody = $this.closest('tbody');

			$this.closest('tr').remove();
			tripPlan.calcSummary($tab);
			tripPlan.viewCloseOneClick($tab.find('#tripPlan_addPlan_hotel'));

			var $radio = $tbody.find('input[name="isAccountGuide"]'), res = true;
			$radio.each(function() {
				if (this.checked) {
					res = false;
					return false;
				}
			});

			if (res) {
				$radio.eq(0).trigger('click');
			}
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
				if ($this.attr('name')==='businessGroupName') {
					$this.closest('.form-inline').find('[name=dutyOPUserName]').val('').trigger('change');
				}
			}
		}).on('click', function() {
			var $this = $(this),
				completeList = jsonList;
			if (completeList && completeList.length > 0) {
				for(var i = 0, len = completeList.length; i < len; i++) {
					completeList[i].id = completeList[i][inputIdName];
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
     * getDutyOPUserList 根据业务部门获取责任计调
     * @param  {[type]} $chooseObj [description]
     * @return {[type]}            [description]
     */
	tripPlan.getDutyOPUserList = function($chooseObj) {
        $chooseObj.autocomplete({
            minLength: 0,
            change :function(event, ui){
                if(ui.item == null){
                    $(this).val('').nextAll('[name=dutyOPUserId]').val('');
                }
            },
            select :function(event, ui){
                $(this).val(ui.item.realName).nextAll('[name=dutyOPUserId]').val(ui.item.id);
            }
        }).off('click').on('click', function() {
            $.ajax({
                url: KingServices.build_url("tripController", "selectDutyOPUser"),
                type: "POST",
                data: "businessGroupId="+$chooseObj.closest('.form-inline').find('[name=businessGroupId]').val(),
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var jsonList = data.outOPUsers;
                        if (jsonList != null && jsonList.length > 0) {
                            for (var i = 0; i < jsonList.length; i++) {
                                jsonList[i].value = jsonList[i].realName;
                            }
                            $chooseObj.autocomplete('option','source', jsonList);
                            $chooseObj.autocomplete('search', '');
                        } else {
                            layer.tips('没有内容', $chooseObj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        })
    };

	/**
	 * 发团安排编辑页面所有的autocomplete
	 * @param  {[type]} $tab [容器]
	 * @return {[type]}      [description]
	 */
	tripPlan.bindAutocomplete = function($tab) {
		tripPlan.bindInsuranceChoose($tab);
		tripPlan.bindGuideChosen($tab);

		tripPlan.bindBusCompanyChoose($tab);		

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
					$parents.find('[name=insuranceItem]').val('');
					$parents.find('[name=insuranceId]').val('');
					$parents.find('[name=type]').val('');
					$parents.find('[name=typeId]').val('');
					$parents.find('[name=price]').val('');
				}
			},
			select: function(event,ui){
				$(this).blur();
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find('[name=insuranceItem]').val('');
				$parents.find('[name=needPayMoney]').val('');
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
				data:{
					menuKey:menuKey
				},
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
					$parents.find('[name=insuranceItemId]').val('');
					$parents.find('[name=price]').val('');
				}
			},
			select: function(event, ui) {
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find('[name=insuranceItemId]').val(ui.item.id);
				$parents.find('[name=price]').val(ui.item.price).trigger('change');
			}
		}).off('click').on('click', function() {
			var $this = $(this), $parents =$this.closest('tr'),
				id = $parents.find('[name=insuranceId]').val();
			if (!!id) {
				$.ajax({
					url: KingServices.build_url('insurance','selectInsuranceItem'),
					type: 'POST',
					showLoading:false,
					data: {id: id},
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

	/**
	 * 绑定导游选择
	 * @param  {[type]} $input [description]
	 * @return {[type]}        [description]
	 */
	tripPlan.bindGuideChosen = function($tab) {
		$tab.find('input[name="guideName"]:not([readonly=readonly])').autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).val("").closest('tr');
					$tr.find("input[name=guideId]").val("");
					$tr.find("input[name=mobileNumber]").val("");
				}
			},
			select:function(event,ui){
				var $tr = $(this).blur().closest('tr');
				$tr.find("input[name=guideId]").val(ui.item.id).trigger('change');
				
				$.ajax({
					url: KingServices.build_url('guide', 'getGuideById'),
					data:{id :ui.item.id},
					showLoading:false,
					success: function(data) {
						if(showDialog(data)){
							var guide = JSON.parse(data.guide);
							$tr.find("input[name=mobileNumber]").val(guide.mobileNumber).trigger('change');
						}
					}
				});
			}
		}).off('click.getlist.api').on('click.getlist.api', function(){
			var obj = this;
			var guideIds = $(obj).closest('tbody').find('[name=guideId]');
			$.ajax({
				url: KingServices.build_url('guide', 'findAll'),
				dataType: "json",
				data:{
					menuKey:menuKey
				},
				showLoading:false,
				success: function(data) {
					var result = showDialog(data);
					if(result){
						var guideList = JSON.parse(data.guideList);
						if(guideList != null && guideList.length > 0){
							for(var i=0;i<guideList.length;i++){
								guideList[i].value = guideList[i].realname;
							}

							for (var i = guideList.length - 1; i >= 0; i--) {
								var id = guideList[i].id
								guideIds.each(function(index) {
									if (guideIds.eq(index).val() == id) {
										guideList.splice(i,1)
									}
								})
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
	 * 车队autocomplete
	 * @param  {[type]} $tab [容器]
	 * @return {[type]}      [description]
	 */
	tripPlan.bindBusCompanyChoose = function($tab){
		function clearData($tr, start) {
			switch(start) {
				case 'brand':
					$tr.find('input[name="brand"]').val('');
				case 'licenseNumber':
					$tr.find('input[name="licenseNumber"]').val('');
					$tr.find('input[name="busId"]').val('');
				case 'CompanyName':
					$tr.find('input[name="companyName"]').val('');
					$tr.find('input[name="busCompanyId"]').val('');
					$tr.find('input[name="mobileNumber"]').val('');
				case 'driverName':
					$tr.find('input[name="driverName"]').val('');
					$tr.find('input[name="driverId"]').val('');
					$tr.find('input[name="driverMobileNumber"]').val('');
				default: break;
			}
		}

		function checkBusCompay($tr, start) {
			setTimeout(function() {
				var searchJson = {
					seatCount:$tr.find('input[name=needSeatCount]').val(),
					brand: $tr.find('input[name=brand]').val(),
					busId: $tr.find('input[name=busId]').val(),
					busCompanyId:$tr.find('input[name=busCompanyId]').val()
				};
				$.ajax({
					url: KingServices.build_url('busCompany', 'selectBusCompanyList'),
					showLoading:false,
					type: 'post',
					data: searchJson,
				})
				.done(function(data) {
					if(showDialog(data)){
						if (!!data.busCompanyList) {
							data.busCompanyList = JSON.parse(data.busCompanyList);
							if (!data.busCompanyList || !data.busCompanyList.length || data.busCompanyList == 'null') {
								clearData($tr, start);
							}
						}else {
							clearData($tr, start);
						}
					}
				});
			}, 10);
		}

		//选择车座位数
		var chooseSeatCount = $tab.find('input[name="needSeatCount"]');
		chooseSeatCount.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $that = $(this).val("");
					clearData($that.closest('tr'), 'brand');
				}
			},
			select :function(event, ui){
				checkBusCompay($(this).blur().closest('tr'), 'brand');
			}
		}).unbind("click").click(function(){
			var $that = $(this), $tr = $that.closest('tr');
			$.ajax({
				url: KingServices.build_url('bookingOrder','getSeatCountList'),
				showLoading: false,
				data:{
					brand:$tr.find("input[name=brand]").val(),
					busCompanyId:$tr.find("input[name=busCompanyId]").val(),
					menuKey:menuKey
				},
				success:function(data){
					if(showDialog(data)){
						var seatCountListJson = [];
						if(data.seatCountList && data.seatCountList.length > 0){
							for(var i=0, seatCount; i < data.seatCountList.length; i++){
								seatCount = {
									value : data.seatCountList[i]
								}
								seatCountListJson.push(seatCount);
							}
							$that.autocomplete('option','source', seatCountListJson);
							$that.autocomplete('search', '');
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
		//选择品牌
		var chooseBrand = $tab.find('input[name="brand"]');
		chooseBrand.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $that = $(this).val("");
					clearData($that.closest('tr'), 'licenseNumber');
				}
			},
			select :function(event, ui){
				checkBusCompay($(this).blur().closest('tr'), 'licenseNumber');
			}
		}).unbind("click").click(function(){
			var $that = $(this), $tr = $that.closest('tr');
			$.ajax({
				url: KingServices.build_url('bookingOrder','getBusBrandList'),
				data:{
					seatCount:$tr.find("[name=needSeatCount]").val(),
					busCompanyId:$tr.find("[name=busCompanyId]").val(),
					menuKey:menuKey
				},
				showLoading:false,
				type:"POST",
				success:function(data){
					if(showDialog(data)){
						var busBrandListJson = [];
						if(data.busBrandList && data.busBrandList.length > 0){
							for(var i=0; i < data.busBrandList.length; i++){
								var busBrand = {
									value : data.busBrandList[i]
								}
								busBrandListJson.push(busBrand);
							}
							$that.autocomplete('option','source', busBrandListJson);
							$that.autocomplete('search', '');
						}else{
							layer.tips('无数据', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			})
		});
		//选择车辆（车牌号）
		var chooseLicense = $tab.find('input[name="licenseNumber"]');
		chooseLicense.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $that = $(this).val("");
					clearData($that.closest('tr'), 'licenseNumber');
				}
			},
			select :function(event, ui){
				var $tr = $(this).blur().closest('tr');
				$tr.find("input[name=busId]").val(ui.item.id).trigger('change');
				checkBusCompay($tr, 'companyName');
				$(this).trigger('change');
			}
		}).unbind("click").click(function(){
			var $that = $(this), $tr = $that.closest('tr'),
				startTime = $tr.find('input[name=startTime]').val();
			$.ajax({
				url: KingServices.build_url('busCompany','getLicenseNumbers'),
				data: {
					seatCount:$tr.find("[name=needSeatCount]").val(),
					brand:$tr.find("[name=brand]").val(),
					menuKey:menuKey
				},
				showLoading:false,
				type:"POST",
				success:function(data){
					if(showDialog(data)){
						var licenseList = JSON.parse(data.busList);
						if(licenseList && licenseList.length > 0){
							for(var i=0; i < licenseList.length; i++){
								licenseList[i].value = licenseList[i].licenseNumber;
							}
							$that.autocomplete('option','source', licenseList);
							$that.autocomplete('search', '');
						}else{
							layer.tips('无数据', $that, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			})
		});
		// 选择车队
		var chooseLicense = $tab.find('input[name="companyName"]');
		chooseLicense.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $that = $(this).val("");
					clearData($that.closest('tr'), 'CompanyName');
				}
			},
			select :function(event, ui){
				var $tr = $(this).blur().closest('tr');
				checkBusCompay($tr, 'driverName');
				$tr.find("input[name=CompanyName]").val(ui.item.busCompanyName);
				$tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('busCompany', 'findBusCompanyById'),
					type: 'post',
					dataType: 'json',
					showLoading: false,
					data: {
						id: ui.item.id,
						menuKey:menuKey
					},
				})
				.done(function(data) {
					if (showDialog(data)) {
						data.busCompany = JSON.parse(data.busCompany || false);

						if (!!data.busCompany)
							$tr.find("input[name=mobileNumber]").val(data.busCompany.mobileNumber || '');
						else {
							$tr.find("input[name=mobileNumber]").val('');
						}
					}
				});
			}
		}).unbind("click").click(function(){
			var $that = $(this), $tr = $that.closest('tr');

			$.ajax({
				url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
				data:  {
					seatCount: $tr.find("[name=needSeatCount]").val(),
					brand: $tr.find("[name=brand]").val(),
					busId: $tr.find('input[name="busId"]').val(),
					menuKey:menuKey
				},
				showLoading:false,
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						var busCompanyList = JSON.parse(data.busCompanyList);
						if(busCompanyList && busCompanyList.length > 0){
							for(var i=0; i < busCompanyList.length; i++){
								busCompanyList[i].value = busCompanyList[i].companyName;
							}
							$that.autocomplete('option','source', busCompanyList);
							$that.autocomplete('search', '');
						}else{
							layer.tips('无数据', $that, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			})
		});
		//司机选择
		var chooseDriver = $tab.find('input[name="driverName"]');
		chooseDriver.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					parents.find("input[name=driverId]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
				parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
			}
		}).unbind("click").click(function(){
			var obj = this,
			    $tr=$(this).closest('tr');//busCompanyId
			var busbusId = $tr.find("input[name=busId]").val();
			var busCompanyId = $tr.find("input[name=busCompanyId]").val();
			$.ajax({
				url: KingServices.build_url('busCompany','getDrivers'),
				data:"busId="+busbusId+"&busCompanyId="+busCompanyId+"",
				showLoading:false,
				type:"POST",
				success:function(data){
					if(showDialog(data)){
						var driverList = JSON.parse(data.driverList);
						if(driverList && driverList.length > 0){
							for(var i=0; i < driverList.length; i++){
								driverList[i].value = driverList[i].name+driverList[i].mobileNumber;
							}
							$(obj).autocomplete('option','source', driverList);
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
		});
	};

	//餐厅autocomplete
	tripPlan.bindRestaurantChoose = function($tab){
		var restauranTyp = $tab.find(".T-restauranType");
		restauranTyp.off("change").on("change", function(){
			var parents = $(this).closest('tr');
			parents.find("input[name=price]").val("").trigger('change');
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
					$parents.find("input[name=reduceMoney]").val('');
					$parents.find("input[name=price]").val("").trigger('change');
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				if (ui.item.id == -1) {
					tripPlan.addOptional($this);
					$parents.find("input[name=restaurantId]").val(ui.item.id).trigger('change');
					$parents.find("input[name=managerName]").val(ui.item.managerName + ' ' + ui.item.mobileNumber);
					$parents.find("input[name=reduceMoney]").val('');
					$parents.find("input[name=price]").val("").trigger('change');
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
								$parents.find("input[name=managerName]").val(restaurant.managerName+' '+restaurant.mobileNumber);
								$parents.find("input[name=reduceMoney]").val('');
								$parents.find("input[name=price]").val("").trigger('change');
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
				data:{
					menuKey:menuKey
				},
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
					$parents.find("input[name=reduceMoney]").val('').trigger('change');
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=price]").val(ui.item.price).trigger('change');
			}
		}).off("click").on("click", function(){
			var $this = $(this), parents = $this.closest('tr');
			var id = parents.find("input[name=restaurantId]").val();
			var type = parents.find('select[name=type]').val();
			if (!id || id <= 0) {
				console.info('餐厅自选，不能填充价格');
				$this.autocomplete('option','source', []);
				return;
			}

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
        	$parents.find("input[name=price]").val("").trigger('change');
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
                	$parents.find("input[name=price]").val("").trigger('change');
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
							var number = data.hotel.telNumber ? data.hotel.telNumber : data.hotel.mobileNumber;
							$parents.find("input[name=managerName]").val(data.hotel.managerName +' '+ number);
							$parents.find(".T-tripPlanHotelStar").val(data.hotel.level);
							$parents.find("input[name=hotelRoom]").val("");
							$parents.find("input[name=hotelRoomId]").val("");
	                    	$parents.find("input[name=price]").val("").trigger('change');
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
                data:{
                	level:hotelStarValue,
                	menuKey:menuKey
                },
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
                	$parents.find("input[name=price]").val("").trigger('change');
				}
			},
			select:function(event,ui){
				var $this = $(this), $parents = $this.closest('tr'),
					whichDay = $parents.find("select[name=whichDay]").val(),
					enterTime = $parents.find(".T-whichDaysContainer").find('option:selected').text();
				$parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('hotel','getHotelRoomPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                    	id: ui.item.id,
                    	whichDay: whichDay,
                    	enterTime: enterTime,
                    	menuKey:menuKey
                    },
                    success: function(data) {
						if(showDialog(data)){
	                    	$parents.find("input[name=price]").val(data.price).trigger('change');
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
					$parents.find("input[name=scenicItemId]").val("");
					$parents.find("input[name=price]").val("").trigger('change');
				}
			},
			select: function(event,ui){
				var $this = $(this), $parents = $this.closest('tr');
				$parents.find("input[name=scenicId]").val(ui.item.id).trigger('change');
				$parents.find("input[name=chargingProjects]").val("");
				$parents.find("input[name=scenicItemId]").val("");
				$parents.find("input[name=price]").val("").trigger('change');
				$parents.find("input[name=orderNumber]").val("");
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('scenic','findAll'),
                type: 'POST',
                data:{
					menuKey:menuKey
				},
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
					startTime = $parents.find(".T-whichDaysContainer").find('option:selected').text(),
					whichDay = $parents.find("select[name=whichDay]").val();
				$parents.find("input[name=scenicItemId]").val(ui.item.id).trigger('change');
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
							$parents.find("input[name=price]").val(data.price).trigger('change');
						}
                    }
                });
			},
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=scenicItemId]").val("");
					$parents.find("input[name=price]").val("").trigger('change');
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
                data:{
					menuKey:menuKey
				},
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
				var $this = $(this), $parents = $this.closest('div');
				$parents.find("input[name=shopPolicyId]").val(ui.item.id).trigger('change');
			},
			change: function(event,nameUi){
				if(nameUi.item == null){ 
					var $this = $(this), $parents = $this.closest('div');
					$this.val("");
					$parents.find("input[name=shopPolicyId]").val("");
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this), $parents = $this.closest('tr'),
				id = $parents.find("input[name=shopId]").val();
			if (!!id) {
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
            }else{
				layer.tips('请选择购物店', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
            }
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
					$parents.find("input[name=price]").val("").trigger('change');
					$parents.find("input[name=selfPayItemId]").val("");
					$parents.find("input[name=selfitem]").val("");
					$parents.find("input[name=lowestPrice]").val("").trigger('change');
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
							$parents.find("input[name=managerName]").val(selfPay.managerName +' '+ selfPay.mobileNumber);
							$parents.find("input[name=selfPayItemId]").val("");
							$parents.find("input[name=selfitem]").val("");
							$parents.find("input[name=price]").val("").trigger('change');
							$parents.find("input[name=lowestPrice]").val("").trigger('change');
						}
                    }
                });
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('selfpay','findAll'),
				type: 'POST',
				data:{
					menuKey:menuKey
				},
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
					$parents.find("input[name=selfPayItemId]").val("");
					// 底价
					$parents.find("input[name=lowestPrice]").val('').trigger('change');
					// 单价
					$parents.find("input[name=price]").val('').trigger('change');
				}
			},
			select: function(event, ui){
				var $this = $(this), $parents = $this.closest('tr'),
					startTime = $parents.find(".T-whichDaysContainer").find('option:selected').text(),
					whichDay = $parents.find("select[name=whichDay]").val();
				$parents.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
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
							// 底价
							$parents.find("input[name=lowestPrice]").val(data.price).trigger('change');
							// 单价
							$parents.find("input[name=price]").val(data.marketPrice).trigger('change');
						}
                    }
				})
			}
		}).off("click").on("click",function(){
			var $this = $(this), $parents = $this.closest('tr'),
				id = $parents.find("input[name=selfPayId]").val();
			if(!!id){
				$.ajax({
					url: KingServices.build_url('selfpay','findSelfPayItemBySelfPayId'),
                    type: 'POST',
                    showLoading: false,
                    data: "id="+id,
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
				$parents.find("input[name=ticketId]").val(ui.item.id);
			},
			change: function(event, ui){
				if(ui.item == null){
					var $this = $(this), $parents = $this.closest('tr');
					$this.val("");
					$parents.find("input[name=ticketId]").val("").trigger('change');
				}
			}
		}).off("click").on("click", function(){
			var $this = $(this);
			$.ajax({
				url: KingServices.build_url('ticket','findAll'),
				type: 'POST',
				data:{
					menuKey:menuKey
				},
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
                  listOptional(0,'','');
                 $container.find('.T-restaurant-search').on('click', function(event) {
                	event.preventDefault();
                	/* Act on the event */
                	var $that = $(this),$searchKey = $that.closest('div');
                	var name = $searchKey.find('.T-name').val(),
                	    startPrice = $searchKey.find('.T-start-price').val(),
               	        endPrice = $searchKey.find('.T-end-price').val();
               	        listOptional(0,name,startPrice,endPrice);

                });
                
                //给提交按钮绑定事件
                $container.find(".T-btn-saveOptional").on('click' , saveOptional);
                //给取消按钮绑定事件
                $container.find(".T-btn-cancelOptional").click(function() {
                    layer.close(addOptionalLayer);
                });
                function listOptional(page,name,startPrice,endPrice){
                	var searchJson = {
                			pageNo:page,
                			name:name,
                			startPrice:startPrice,
                			endPrice:endPrice
                	};
                	searchJson=JSON.stringify(searchJson);
					$.ajax({
			        	url: KingServices.build_url('restaurant','getRestaurantListByChooseMode'),
			        	type: "POST",
			        	data: "searchJson="+searchJson,
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
											var id = $tr.eq(j).data('entity-id');
											if (optionalArray[i].restaurantId == id) {
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
								showMessageDialog("最多只能添加5个自选餐厅");
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
	 * @param  {[type]} $parent [对象]
	 * @return {[type]}           [description]
	 */
	tripPlan.viewOptionalRestaurant = function($parent){
		$parent.each(function(){
			var $this = $(this), options = $this.data("propover");

			if (!!options) {
				if (typeof options === "string") {
					options = JSON.parse(options);
				}

				if (options.length) {
					var html = ['<table class="table table-bordered mar-0" style="min-width:400px;width:400px;"><thead><tr><th class="th-border">餐厅名称</th><th class="th-border">联系人</th><th class="th-border">联系电话</th></tr></thead><tbody>'];
					for (var i = 0; i < options.length; i++) {
						html +=('<tr><td>'+options[i].name+'</td><td>'+options[i].managerName+'</td><td>'+options[i].mobileNumber+'</td></tr>');
					};
					html +=('</tbody></table>');
					$this.data("html",html);

					Tools.descToolTip($this,2);
					$this.data('bs.popover').options.content = html;
				}
			}
		})
	}

	//查看旅游小组成员
	tripPlan.viewTouristGroup = function(id){
		$.ajax({
			url:KingServices.build_url("tripPlan","getMemberList"),
			data:{ touristGroupId : id + "" },
			success:function(data){
				var result = showDialog(data);
				if(result){
					var memberList = JSON.parse(data.memberList);
					data.memberList = memberList;
					var html = viewGroupTemplate(data);
					var viewGroupTemplateLayer = layer.open({
					    type: 1,
					    title:"查看小组信息",
					    skin: 'layui-layer-rim',
					    area: '1000px',
					    zIndex:1028,
					    content: html,
					    scrollbar: false
					})
				}
			}
		});
	};

	/**
	 * 单价  底价 数量 房间数 预付款 优惠 支付方式
	 * @type {Array}
	 */
	var _feilds = ['price', 'lowestPrice', 'memberCount', 'needRoomCount', 'prePayMoney', 'reduceMoney', 'payType', 'guidePayMoney'];
	tripPlan.bindAutoCalcPrice = function($tab) {
		function getValue($obj) {
			return ($obj.val() || 0)*1;
		}
	    $tab.find('.arrange-area').on('change', 'input,select', function(event) {
	        event.preventDefault();
	        var $that = $(this),
	            name = $that.prop('name'),
	            isGuidePayMoney = (name == 'guidePayMoney'),
	            hasSignBillMoney = $that.closest('tr').find('[name=signBillMoney]').length;
	        //如果改的是计划导付，但是没有签单金额，则不计算
	        
	        if (isGuidePayMoney && hasSignBillMoney == 0) {
	        	tripPlan.calcSummary($tab);
	        	return;
	        }

	        if (_feilds.indexOf(name) >= 0) {
	            var $tr = $that.closest('tr'),
	                $feilds = {},
	                price, count, reduce, prePay, type, needPay;

                _feilds.forEach(function(_name) {
                	$feilds[_name] = $tr.find('[name="'+ _name + '"]');
                })

                // 单价
                price = getValue($feilds['price']);
                if ($feilds.lowestPrice.length) {
                	price = getValue($feilds.lowestPrice);
                }

                // 数量
                count = getValue($feilds.memberCount);
                if ($feilds.needRoomCount.length) {
                	count = getValue($feilds.needRoomCount);
                }

                // 优惠
                reduce = getValue($feilds.reduceMoney);
                // 预付款
                prePay = getValue($feilds.prePayMoney);

                // 计算应付
                needPay = price * count - reduce;
                $tr.find("input[name=needPayMoney]").val(needPay);

                //如果改的不是计划导付，则计算计划导付
	        	if (!isGuidePayMoney) {
            		$tr.find("input[name=guidePayMoney]").val(needPay-prePay);
	        	}
		        //如果tr里有签单金额，则计算签单金额
		        if (hasSignBillMoney > 0) {
		        	//签单金额
            		$tr.find('input[name=signBillMoney]').val(needPay-prePay-($tr.find("input[name=guidePayMoney]").val()))
		        }            	

        		tripPlan.calcSummary($tab);
	        } else if(name === 'guidePlanPreMoney') {
	        	tripPlan.calcSummary($tab);  
	        }
	    });
	};

	/**
	 * 计算合计
	 * @param  {object} $tab 顶层元素
	 * @return {[type]}      [description]
	 */
	tripPlan.calcSummary = function($tab) {
		var guideAllPayMoney = 0,	//总计划导付
			detail = [0,0,0],
			index = 0,
			guidePayMoney = [],
			guideIndex = 0,
			money;
		
		var $objs = $tab.find('.tab-content').find("input[name=guidePayMoney]");
		for(var i=0; i < $objs.length; i ++) {
			money = $objs.eq(i).val();
			money = tripPlan.checkParamIsDouble(money);
			guideAllPayMoney += money;

			index = $objs.eq(i).prevAll('select[name="payType"]').val() * 1;
			guideIndex = $objs.eq(i).prevAll('input[name=arrangeGuide]').data('entity-index');
			detail[index] += money;

			var guideMoney = {
				type: index,
				guideIndex: guideIndex,
				money: money
			}
			guidePayMoney.push(guideMoney);
		}
		//计算车辆安排签单金额
		var $signBillMoney = $tab.find('#tripPlan_addPlan_bus [name=signBillMoney]'),signBillMoney = 0;
		$signBillMoney.each(function(si) {
			signBillMoney += $(this).val()*1;
		});
		detail[2] += signBillMoney;
		$tab.find(".T-guidePayedMoney").html(guideAllPayMoney);

		var text = [], label = ['现金', '刷卡', '签单'];
		for (var i = 0; i < 3;i ++) {
			if (detail[i] != 0) {
				text.push(label[i] + detail[i]);
			}
		}

		$tab.find('.T-guidePayedMoneyLabel').text(text.length?text.join(','): 0);
		//每个导游 导付
		var $guideListTr = $tab.find('#tripPlan_addPlan_guide tbody tr')
		$guideListTr.each(function(index) {
			var thisGuideMoney = [0,0,0], thisGuideText = [];
			for (var i = guidePayMoney.length - 1; i >= 0; i--) {
				var $this = guidePayMoney[i];
				if ($this.guideIndex == index) {
					thisGuideMoney[$this.type] += $this.money;
				}
			}
			for (var i = 0; i < 3;i ++) {
				if (thisGuideMoney[i] != 0) {
					thisGuideText.push(label[i] + thisGuideMoney[i]);
				}
			}
			$guideListTr.eq(index).find('.T-guidePlanPayMoney').text(thisGuideText.length?thisGuideText.join(','): 0);
		});
	};

	/**
	 * 提交事件
	 */
	tripPlan.submitTripPlan = function($tab,isClose,id,tab_id,title,html) {
		var argumentsLen = arguments.lengh;
		// 计算总额
		tripPlan.calcSummary($tab);
		
		//组织旅游车安排数据
		var bus = $("#tripPlan_addPlan_bus tbody tr"), busCompanyArrange = [];
		if(bus.length > 0){
			for(var i=0; i<bus.length; i++){
				if(tripPlan.getVal(bus.eq(i), "busCompanyId")){
					var annouceTouristGroupIds = bus.eq(i).find('.T-noticeTourists').data('entity-touristgroup'),
						offerId = bus.eq(i).attr('data-entity-offerId'),
						arrangeId =  bus.eq(i).attr('data-entity-arrangeid');
					if(typeof annouceTouristGroupIds != 'string'){
						annouceTouristGroupIds = JSON.stringify(annouceTouristGroupIds)
					}

					var busJson = {
						id : tripPlan.getVal(bus.eq(i), "id"),
						startTime: tripPlan.getVal(bus.eq(i), "startTime"),
						endTime: tripPlan.getVal(bus.eq(i), "endTime"),
						taskType: tripPlan.getVal(bus.eq(i), "taskType"),
						needSeatCount : tripPlan.getVal(bus.eq(i), "needSeatCount"),
						brand : tripPlan.getVal(bus.eq(i), "brand"),
						busId : tripPlan.getVal(bus.eq(i), "busId"),
						busCompanyId : tripPlan.getVal(bus.eq(i), "busCompanyId"),
						setPlaceTime : bus.eq(i).find('.T-noticeTourists').data('entity-setplacetime'),
						payType : tripPlan.getVal(bus.eq(i), "payType"),
						signMoney : tripPlan.getVal(bus.eq(i), "signBillMoney"),
						setPlacePosition : bus.eq(i).find('.T-noticeTourists').data('entity-setplaceposition'),
						driverId : tripPlan.getVal(bus.eq(i), "driverId"),
						contractNumber : tripPlan.getVal(bus.eq(i), "contractNumber"),
						memberCount: tripPlan.getVal(bus.eq(i), "memberCount"),
						reduceMoney: tripPlan.getVal(bus.eq(i), "reduceMoney"),
						needPayMoney: tripPlan.getVal(bus.eq(i), "needPayMoney"),
						prePayMoney: tripPlan.getVal(bus.eq(i), "prePayMoney"),
						guidePayMoney: tripPlan.getVal(bus.eq(i), "guidePayMoney"),
						remark: tripPlan.getVal(bus.eq(i), "remark"),
						price: tripPlan.getVal(bus.eq(i), "price"),
						orderStatus: tripPlan.getVal(bus.eq(i), "orderStatus"),
						annouceTouristGroupIds: annouceTouristGroupIds,
						offerId: offerId,
						preType: tripPlan.getVal(bus.eq(i),"preType")

					}
					busCompanyArrange.push(busJson);
				}else {
					showMessageDialog('车辆安排中所属车队不能为空')
					return;
				}
			}
		}
		//组织餐安排数据
		var restaurant = $("#tripPlan_addPlan_restaurant tbody tr"), restaurantArrangeList = [];
		if(restaurant.length > 0){
			for(var i=0; i<restaurant.length; i++){
				var isChoose = "0",restaurantChooseArrangeListJson;
				if (!!restaurant.eq(i).find('[name=restaurantName]').data('propover')) {
					restaurantChooseArrangeListJson = restaurant.eq(i).find('[name=restaurantName]').data('propover')
					if(typeof restaurant.eq(i).find('[name=restaurantName]').data('propover') === 'string'){
						restaurantChooseArrangeListJson = JSON.parse(restaurant.eq(i).find('[name=restaurantName]').data('propover'))
					}
				}
				if(!!tripPlan.getVal(restaurant.eq(i), "restaurantId") && tripPlan.getVal(restaurant.eq(i), "restaurantId") == -1){
					isChoose = "1";
				}
				if(tripPlan.getVal(restaurant.eq(i), "restaurantId")){
					var restaurantJson = {
						id : restaurant.eq(i).data('entity-arrangeid'),
						whichDay : tripPlan.getVal(restaurant.eq(i), "whichDay"),
						restaurantId : tripPlan.getVal(restaurant.eq(i), "restaurantId"),
						restaurantStandardId : tripPlan.getVal(restaurant.eq(i), "restaurantStandardId"),
						price : tripPlan.getVal(restaurant.eq(i), "price"),
						memberCount : tripPlan.getVal(restaurant.eq(i), "memberCount"),
						reduceMoney : tripPlan.getVal(restaurant.eq(i), "reduceMoney"),
						needPayMoney : tripPlan.getVal(restaurant.eq(i), "needPayMoney"),
						prePayMoney : tripPlan.getVal(restaurant.eq(i), "prePayMoney"),
						guidePayMoney : tripPlan.getVal(restaurant.eq(i), "guidePayMoney"),
						payType : tripPlan.getVal(restaurant.eq(i), "payType"),
						preType : tripPlan.getVal(restaurant.eq(i), "preType"),
						remark : tripPlan.getVal(restaurant.eq(i), "remark"),
						type : restaurant.eq(i).find("[name=type]").val(),
						isChoose : isChoose,
						restaurantChooseArrangeList : restaurantChooseArrangeListJson
					}
					restaurantArrangeList.push(restaurantJson);
				}
			}
		}

		//购物安排数据
		var shop = $("#tripPlan_addPlan_shop tbody tr"), shopArrangeList = [];
		if(shop.length > 0){
			for(var i=0; i<shop.length; i++){
				var shopJson = {
					id: shop.eq(i).data('entity-arrangeid'),
					whichDay: tripPlan.getVal(shop.eq(i), 'whichDay'),
					shopId: tripPlan.getVal(shop.eq(i), 'shopId'),
					managerName: tripPlan.getVal(shop.eq(i), 'managerName'),
					mobileNumber: tripPlan.getVal(shop.eq(i), 'mobileNumber'),
					remark: tripPlan.getVal(shop.eq(i), 'remark'),
					shopArrangeItemSet: []
				}
				var shopDiv = shop.eq(i).children('td').eq(4).find('div');
				for (var j = 0; j < shopDiv.length; j++) {
					var json = {
						id: shopDiv.eq(j).data('entity-id'),
						shopPolicyId: tripPlan.getVal(shopDiv.eq(j), 'shopPolicyId')
					}
					shopJson.shopArrangeItemSet.push(json);
				}
				var hasSameShop = 0;
				if (i > 0) {
					for (var j = 0; j < shopArrangeList.length; j++) {
						if(shopJson.whichDay == shopArrangeList[j].whichDay && shopJson.shopId == shopArrangeList[j].shopId) {
							showMessageDialog('购物安排中同一天安排了相同的商店')
							return;
						}else{
							hasSameShop = 1;
						}
					}
				}else{
					hasSameShop = 1;
				}
				if (hasSameShop) {
					shopArrangeList.push(shopJson)
				}
			}
		}
		//导游安排数据
		var $guideArea = $tab.find('#tripPlan_addPlan_guide'),
			$guideTr = $guideArea.find('tbody').children('tr'),
			guideArrangeList = [];
		if ($guideTr.length) {
			for (var i = 0,len = $guideTr.length; i < len; i++) {
				var $this = $guideTr.eq(i);
				var guideJson = {
					id: $this.data('entity-arrangeid'),
					guideId: $this.find('[name=guideId]').val(),
					price: $this.find('[name=price]').val(),
					manageFee: $this.find('[name=manageFee]').val(),
					guidePlanPreMoney: $this.find('[name=guidePlanPreMoney]').val(),
					remark: $this.find('[name=remark]').val(),
					taskJson: []
				}

				var $tds = $this.children('td'),
					$startTimes = $tds.eq(0).find('input[name="startTime"]');
					$endTimes = $tds.eq(1).find('input[name="endTime"]');
					$tasks = $tds.eq(2).find('select[name="taskType"]');
				for (var j = 0, lenj = $tasks.length, $temp; j < lenj; j++) {
				    guideJson.taskJson.push({
				        sTime: $startTimes.eq(j).val(),
				        eTime: $endTimes.eq(j).val(),
				        tType: $tasks.eq(j).val()
				    });
				}
				
				guideArrangeList.push(guideJson);
			}
		}else if ($tab.find('.T-status').text() == 1) {
			showMessageDialog('至少安排一个导游')
			return;
		}
		
		//获取tripPlan
		var $addTripTab = $tab.find('.baseinfo'),
		tmp = {  // 基础数据
			id : $addTripTab.find('input[name=tripPlanId]').val(),
			guideAllPayMoney : $addTripTab.find('.T-guidePayedMoney').text(),
			guidePlanAllPreMoney : $addTripTab.find('input[name=guidePlanAllPreMoney]').val(),
		},
		tripPlanJson = {  // 安排数据
			guideList : guideArrangeList,
			delGuideList: $guideArea.data('delJson') || [],
			//busCompanyList : Tools.getTableVal($tab.find('#tripPlan_addPlan_bus').find('tbody'), 'entity-arrangeid'),
			busCompanyList: busCompanyArrange,
			hotelList : Tools.getTableVal($tab.find('#tripPlan_addPlan_hotel').find('tbody'), 'entity-arrangeid'),
			insuranceList : Tools.getTableVal($tab.find('#tripPlan_addPlan_insurance').find('tbody'), 'entity-arrangeid'),
			otherList : Tools.getTableVal($tab.find('#tripPlan_addPlan_other').find('tbody'), 'entity-arrangeid'),
			restaurantList : restaurantArrangeList,
			scenicList : Tools.getTableVal($tab.find('#tripPlan_addPlan_scenic').find('tbody'), 'entity-arrangeid'),
			selfPayList : Tools.getTableVal($tab.find('#tripPlan_addPlan_selfPay').find('tbody'), 'entity-arrangeid'),
			shopList : shopArrangeList,//Tools.getTableVal($tab.find('#tripPlan_addPlan_shop').find('tbody'), 'entity-arrangeid'),
			ticketList : Tools.getTableVal($tab.find('#tripPlan_addPlan_ticket').find('tbody'), 'entity-arrangeid'),
		},
		json = JSON.stringify(tripPlanJson),arrangeStatus = {};
		console.log(tripPlanJson.hotelList);
		$tab.find('.T-finishedArrange').each(function() {
			var $that = $(this);

			if ($that.data('change')) {
				arrangeStatus[$that.prop('name')] = $that.is(':checked')?1:0;
			}
		})

		console.info(tripPlanJson)

		var tripPlanId = $(this).attr('data-entiy-id');
		$.ajax({
			url: KingServices.build_url('tripPlan','saveTripPlanArrange'),
			type: "POST",
			data: {
				arrangeItems: json,
				basicInfo: JSON.stringify(tmp),
				arrangeStatus: JSON.stringify(arrangeStatus)
			},
			success: function(data){
				if(showDialog(data)){
					if (!!tripPlan.$tab) {  // 未打开发团安排
						tripPlan.listTripPlan(0);
					}
					if(!!$("#tab-arrange_plan-content")) {
						seajs.use("" + ASSETS_ROOT + modalScripts.arrange_plan,function(module){
							module.listTripPlanGroup(0, $("#tab-arrange_plan-content"));
						});
					}
					if (!!$("#tab-arrange_singleplan-content")) {
						seajs.use("" + ASSETS_ROOT + modalScripts.arrange_singlePlan,function(module){
							module.listTripPlanSingle(0, $("#tab-arrange_singleplan-content"));
						});
					}

					Tools.refreshTab($tab.find('.T-tab-id').text());

					showMessageDialog(data.message, function(){
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
	tripPlan.datepicker = function($container){
		if (!!$container) {
			$container.find('tr').each(function() {
				var $tr = $(this), $dateFeilds = $tr.find('.datepicker'),
					length = $dateFeilds.length;

				if (length) {
					Tools.setDatePicker($dateFeilds, length == 2);
				}
			});
		}
	};
	tripPlan.dateTimePicker = function(){
		Tools.setDateHSPicker($('.T-dateTimePicker')); 
		// var $className = $('.T-dateTimePicker');
		// $className.datetimepicker({
	 //        autoclose: true,
	 //        todayHighlight: true,
	 //        format: 'L',
	 //        language: 'zh-CN'
	 //   	}); 
	};

	/**
	 * 取值
	 */
	tripPlan.getVal = function(obj, name){
		return obj.find("[name="+name+"]").val();
	}

	/**
	 * 消息接口
	 * @param  {[type]} tripPlanId [发团安排Id]
	 * @param  {[type]} target     [bus hotel]
	 * @param  {string} tabId     来自其他模块，传入模块的Tab id，用于刷新
	 * @return {[type]}            [description]
	 */
	tripPlan.updatePlanInfo = function(tripPlanId,billStatus,target, tabId) {
		var quoteContent = $(document).find('#tab-arrange_all-update-content'), isThere = 0;
		quoteContent.each(function(i){
			var menukeyId = quoteContent.eq(i).attr("id");
			var id = quoteContent.eq(i).find('[name=tripPlanId]').val();
			if (tripPlanId == id) {
				isThere = 1;
				Tools.addTab(menukeyId.substring(menukeyId.indexOf('tab-')+4,menukeyId.lastIndexOf('-content')));
				var $container = $("#"+menukeyId);
				/*if (!!target) {
					if (target == "T-hotel") {
						$container.find('.T-hotelTarget').trigger('click');
					}else if (target == "T-bus") {
						$container.find('.T-busTarget').trigger('click');
					}else {
						$target = $nav.find('[href='+ target +']');
					}
				}*/
				// 激活第一个菜单
				var $nav = quoteContent.find('.T-arrange-tabs'), $target;
				if (!!target) {
					if (target == 'T-bus') {
						$target = $tab.find('.T-busTarget');
					}else if (target == 'T-hotel') {
						$target = $tab.find('.T-hotelTarget');
					} else {
						$target = $nav.find('[href='+ target +']');
					}
				}
				if (!$target || !$target.length) {
					$target = $nav.find('a').eq(0);
				}
				$target.trigger('click');
				if (!$nav.find('.active').length) {

					$nav.find('a').eq(0).trigger('click');
				}
			}
		})
		if (isThere == 0) {
			tripPlan.updateTripPlanArrange(tripPlanId, billStatus, target, tabId)
		}
	}

	/**
	 * 实时添加车辆安排
	 * @param {[type]} $tab [description]
	 */
	tripPlan.addBusResource = function($tab){
		$tab.find(".T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany, name: 'companyName', id: 'busCompanyId', mobileNumber: 'mobileNumber', type: 'tr'}, KingServices.addResourceFunction);
		$tab.find(".T-addBusResource,.T-addDriverResource").off('click').on("click",{
			function : KingServices.addBusDriver,
			busCompanyName : "companyName",
			busCompanyId : "busCompanyId",
			busLicenseNumberId : "busId",
			busLicenseNumber : "licenseNumber",
			busbrand : "brand",
			seatCount : "needSeatCount",
			driverName : "driverName",
			driverId : "driverId",
			driverMobileNumber : "withName",
			type : "tr"
		}, KingServices.addBusDriverFunction);
	};

	/**
	 * 修改计划导付付款方式（车辆安排）
	 */
	tripPlan.changePayType = function($tab) {
		$tab.find('#tripPlan_addPlan_bus').on('click', '[name=payType]', function() {
			var $this = $(this),
				$div = $this.closest('div'),
				$td = $this.closest('td'),
				html = '<input type="text" readonly name="signBillMoney" class="F-float F-money" value="">'
			if ($this.val() == 2) {
				$td.next('td').html('-');
			}else{
				$td.next('td').html(html);
				$td.find('[name=guidePayMoney]').trigger('change');
			}
		})
		$tab.find('#tripPlan_addPlan_bus').on('click', '.T-delBusguidePay', function() {
			var $this = $(this),
				$div = $this.closest('div'),
				$td = $this.closest('td');
			$td.find('span').append('<button class="btn btn-success btn-sm btn-white show mar-l-5 T-addBusguidePay" index="0"> <i class="fa bigger-110 icon-only fa-plus"></i> </button>');
			$div.remove();
		})
	}


	/**
	 * 计算日期差
	 * @param  {[type]} sDate1 [description]
	 * @param  {[type]} sDate2 [description]
	 * @return {[type]}        [description]
	 */
	tripPlan.daysDifference = function(sDate1, sDate2) {
		if (!!sDate1 && !!sDate2) {
			var aDate, oDate1, oDate2, iDays   
			aDate = sDate1.split("-")
			oDate1 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2]) //转换为12-18-2002格式   
			aDate = sDate2.split("-")   
			oDate2 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2])   
			iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24) //把相差的毫秒数转换为天数   
			return iDays + 1;   
		}else {
			return 0;
		}
	}

	tripPlan.addGuideTask = function ($this, operation, validator) {
		if (operation == 'add') {
			var $parent = $this.closest('tr'),
				index = $parent.find('[name=taskType]').length,
				startTime = '<div class="T-guideAddTask mar-t-10" data-index="'+index+'"><input type="text" name="startTime" class="datepicker" value=""></div>',
				endTime = '<div class="T-guideAddTask mar-t-10" data-index="'+index+'"><input type="text" name="endTime" class="datepicker" value=""></div>',
				task = '<div class="T-guideAddTask mar-t-10" data-index="'+index+'"> <select name="taskType"><option value="0" selected="">全程</option><option value="1">接机</option><option value="2">送机</option><option value="3">前段</option><option value="4">中段</option><option value="5">后段</option></select> <label style="float:right; padding-top:0px;"> <button class="btn btn-danger btn-sm btn-white T-del T-guideBtn"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> </div>';
			$parent.find('td:eq(0)').append(startTime);
			$parent.find('td:eq(1)').append(endTime);
			$parent.find('td:eq(2)').append(task);
			Tools.setDatePicker($parent.find('.T-guideAddTask').filter(function() {
				return $(this).data('index') == index;
			}).find('.datepicker'), true);
			validator = rule.update(validator);
		}else if (operation == 'del'){
			var divIndex = $this.closest('div.T-guideAddTask').data('index'),
				$parent = $this.closest('tr');
			$parent.find('.T-guideAddTask').filter(function() {
				return $(this).data('index') == divIndex;
			}).remove();
			function sort(array) {
				if (array.length > 0) {
					array.each(function(index) {
						array.eq(index).attr('data-index',index);
					});
				}
			}
			for (var i = 0; i < 3; i++) {
				sort($parent.find('td:eq(' + i + ')').find('.T-guideAddTask'))
			}
		}
	}

	exports.init = tripPlan.initModule;
	exports.updatePlanInfo = tripPlan.updatePlanInfo;
	exports.viewTripPlan = tripPlan.viewTripPlan;//报账审核跳转查看页面
});