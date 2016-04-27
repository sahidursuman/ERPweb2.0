/**
 * 发团管理——中转安排
 *
 * 通知、编辑安排、查看安排、导出安排操作
 * 显示中转安排列表
 * author: yangcany
 */
define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_transit",
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list"),
		arrangeTemplate = require("./view/arrange"),
		viewTemplate = require("./view/view"),
		financiaListTemplate = require("./view/financiaList")
		financialNoticeTemplate = require("./view/FinancialNotice"),
		noticeTemplate = require("./view/notice");
	/**
	 * 自定义中转对象
	 * @type {Object}
	 */
	var transit = {
		$tab: false,
		$searchArea: false,
		pageNo: "",
		// isPrePayMoney : false,
		receiveUserIdList : []
	}
	//搜索数据
	var autocompleteData = {}

	//初始化中转模块
	transit.initModule = function() {
		transit.$searchArea = false;
		transit.listMainTransit();
	};

	//中转安排搜索模块
	transit.listMainTransit = function(page) {
		

		$.ajax({
			url: KingServices.build_url('touristGroup', 'getQueryTermsForTransitArrange'),
			type: "POST",
			success: function(data) {
				autocompleteData.partnerAgencyList = data.partnerAgencyList;
				autocompleteData.lineProductList = data.lineProductList;
				autocompleteData.arrangeUserList = data.arrangeUserList;
				if(showDialog(data)){
					var html = listMainTemplate('');
					Tools.addTab(menuKey,"中转安排",html);

					transit.$tab = $('#tab-arrange_transit-content');
					transit.$searchArea = transit.$tab.find('.T-search-area');
					transit.init_eventMain();
					transit.listTransit(0);
				}
			}
		})
	};
	/**
	 * listMain搜索模块事件绑定
	 * @return {[type]} [description]
	 */
	transit.init_eventMain = function() {
		//搜索栏状态button下拉事件
		transit.$searchArea.find('.T-transitState, #order_by').on('change', function() {
			transit.listTransit(0);
		});

		//中转安排搜索按钮事件绑定
		transit.$searchArea.on('click', '.T-btn-transitList-search', function() {
			transit.listTransit(0);
		});

		//导出安排
		transit.$searchArea.on('click', '.T-transit-export', function() {
			var recordSize =  transit.$tab.find('.T-recordSize').text();
			showConfirmDialog($( "#confirm-dialog-message" ), '确定要导出'+ recordSize +'条中转安排？', function() {
				transit.listTransit(-1);//page == -1，导出安排
			})
		})

		//时间控件
		Tools.setDatePicker(transit.$searchArea.find('.T-datePicker'));
		Tools.setDatePicker(transit.$searchArea.find('.T-datePicker-range'), true);

		//autocomplete		
		var choosePartnerAgency = transit.$searchArea.find('[name=fromPartnerAgencyName]'),
			chooseLineProduct = transit.$searchArea.find('[name=lineProductName]'),
			chooseArrangeUser = transit.$searchArea.find('[name=arrangeUserName]');
		transit.autocompleteSearch(choosePartnerAgency,autocompleteData.partnerAgencyList,'travelAgencyName','fromPartnerAgencyId');
		transit.autocompleteSearch(chooseLineProduct,autocompleteData.lineProductList,'name','lineProductId');
		transit.autocompleteSearch(chooseArrangeUser,autocompleteData.arrangeUserList,'realName','arrangeUserId');
	};
	/**
	 * 查询中转安排列表
	 * @param  {[type]} 参数                  [查询条件]
	 */
	transit.listTransit = function(page) {
		if (transit.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            fromPartnerAgencyName = transit.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
            fromPartnerAgencyId = transit.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
            lineProductName = transit.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = transit.$searchArea.find("input[name=lineProductId]").val(),
            startTime = transit.$searchArea.find("input[name=startTime]").val(),
            arrangeUserId = transit.$searchArea.find("input[name=arrangeUserId]").val(),
            arrangeUserName = transit.$searchArea.find("input[name=arrangeUserName]").val(),
            arrangeStartTime = transit.$searchArea.find("input[name=arrangeStartTime]").val(),
            arrangeEndTime = transit.$searchArea.find("input[name=arrangeEndTime]").val(),
            status = transit.$searchArea.find(".T-transitState").val(),
            tgOrderNumber = transit.$searchArea.find(".T-tgOrderNumber").val(),
            orderNumber = transit.$searchArea.find(".T-orderNumber").val(),
            shuttleType = transit.$searchArea.find("[name=shuttleType]").val(),
            shuttleTime = transit.$searchArea.find("input[name=shuttleTime]").val(),
            arrangeItem = transit.$searchArea.find("[name=arrangeItem]").val(),
            arrangeItemStatus = transit.$searchArea.find("[name=arrangeItemStatus]").val(),
            contactInfo = transit.$searchArea.find("[name=contactInfo]").val(),
            shift = transit.$searchArea.find("input[name=shift]").val()
        }

    	var args = {
			fromPartnerAgencyName: fromPartnerAgencyName,
			fromPartnerAgencyId: fromPartnerAgencyId,
			lineProductName: lineProductName,
			lineProductId: lineProductId,
			startTime: startTime,
			arrangeUserName: arrangeUserName,
			arrangeUserId: arrangeUserId,
			arrangeStartTime: arrangeStartTime,
			arrangeEndTime: arrangeEndTime,
			status: status,
			tgOrderNumber: tgOrderNumber,
			orderNumber: orderNumber,
			shuttleType: shuttleType,
			shuttleTime: shuttleTime,
			arrangeItem: arrangeItem,
			arrangeItemStatus: arrangeItemStatus,
			contactInfo: contactInfo,
			shift: shift
		}
        if (page == -1) {
        	exportXLS( APP_ROOT + 'back/export.do?method=exportOutArrangeItemList&token='+ $.cookie("token") + '&' + $.param(args));
        	return;
        }

        // 修正页码
		args.pageNo = (page || 0);
		args.sortType = 'touristGroup.startTime';
		args.order = transit.$searchArea.find("#order_by").val();
		if (!args.fromPartnerAgencyName) {
			args.fromPartnerAgencyId = '';
		}
		if (!args.lineProductName) {
			args.lineProductId = '';
		}
		if (!args.arrangeUserName) {
			args.arrangeUserId = '';
		}


        $.ajax({
			url: KingServices.build_url('touristGroup','listTransitArrange'),
			type:"POST",
			data: args,
			success:function(data){
				//根据返回值判断下一步操作，或者已出现错误
				if(showDialog(data)){
					data.outRemarkArrangeList = JSON.parse(data.outRemarkArrangeList);
					var html = listTemplate(data);

					transit.$tab.find('.T-arrangeTransitList').html(filterUnAuth(html));

					transit.$tab.find('tbody').off('click').on('click', '.T-action', function() {
						var $this = $(this),id = $this.closest('tr').data('entity-id'), $parents = $this.closest('tr');
						if ($this.hasClass('T-send')) {
							//通知
							var status = {
								receiveBusStatus: $parents.find('.receiveBusStatus').data('status'),
								receiveHotelStatus: $parents.find('.receiveHotelStatus').data('status'),
								receiveRestaurantStatus: $parents.find('.receiveRestaurantStatus').data('status'),
								receiveTicketStatus: $parents.find('.receiveTicketStatus').data('status'),
								receiveOtherStatus: $parents.find('.receiveOtherStatus').data('status'),
								sendBusStatus: $parents.find('.sendBusStatus').data('status'),
								sendHotelStatus: $parents.find('.sendHotelStatus').data('status'),
								sendRestaurantStatus: $parents.find('.sendRestaurantStatus').data('status'),
								sendTicketStatus: $parents.find('.sendTicketStatus').data('status'),
								sendOtherStatus: $parents.find('.sendOtherStatus').data('status')
							}
							transit.sendTransit(id, status);
						}else if ($this.hasClass('T-edit')) {
							//编辑
							transit.pageNo = page;
							transit.updateTransit(id);
						}else if ($this.hasClass('T-view')) {
							//查看
							transit.viewTransit(id);
						}else if ($this.hasClass('T-export')) {
							//导出
							transit.exportTransit(id);
						}
					});
					// 绑定翻页组件
					laypage({
					    cont: transit.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		transit.listTransit(obj.curr -1);
					    	}
					    }
					});	

				    transit.$tab.find('.T-arrangeTransitList').off('click.ace-icon').on('click.ace-icon', 'td', function(event){
						event.preventDefault();
						var $this = $(this).find('.ace-icon');
						if(!$this.hasClass('fa-minus') && $this.length > 0){
							transit.pageNo = page;
							transit.updateTransit($this.closest('tr').data('entity-id'),'','',$this.closest('td').data("target"));
						}
					});	
				}
			}
		});
	};
	/**
	 * 中转安排搜索区域autocomplete
	 * @param  {[obj]} chooseObj   [选择的input对象]
	 * @param  {[array]} jsonList    [数据列表]
	 * @param  {[string]} valueName   [数据中需要展示的对象属性]
	 * @param  {[string]} inputIdName [隐藏的input Id 的name值]
	 * @return {[type]}             [description]
	 */
	transit.autocompleteSearch = function(chooseObj,jsonList,valueName,inputIdName) {
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
			var obj = this;
			var completeList = jsonList;
			if (completeList && completeList.length > 0) {
				for(var i = 0, len = completeList.length; i < len; i++) {
					completeList[i].value = completeList[i][valueName];
				}
				$(obj).autocomplete('option','source', completeList);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('无数据', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		});
	};

	/**
	 * 通知操作
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}    [description]
	 */
	transit.sendTransit = function(id, status) {
		var noticeLayer = layer.open({
			type: 1,
			title: '通知设置',
			skin: 'layui-layer-rim', //加上边框
			area: '630px', //宽高
			zIndex:1028,
			content: noticeTemplate(status),
			success:function(){
				var $container = $('.T-transitNotice'),
					$checkbox = $container.find('.T-checked'),
					$touristDiv = $container.find(".T-touristCheckedShow");
				/*$container.find("[name=tourist]").click(function(){
					if($(this).is(":checked")){
						$touristDiv.removeClass('hidden');
					} else{
						$touristDiv.addClass('hidden');
						$touristDiv.find('[name=rightNow]').trigger('click');
						$touristDiv.find('[name=smsSign]').val('');
					}
				});*/
				transit.dateTimePicker($container);
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
					var noticeItems = {
						bus: getValue('bus'),
						hotel: getValue('hotel'),
						other: getValue('other'),
						restaurant: getValue('restaurant'),
						ticket: getValue('ticket'),
						timing: getValue('timing'),
						tourist: getValue('tourist'),
						sendDateTime: getValue('sendDateTime'),
						touristGroupId: id,
						smsSign: getValue('smsSign')
					}
					$.ajax({
						url: KingServices.build_url('touristGroup','noticeTouristGroupTransitArrange'), 	
						type: 'POST',
						data: {
							noticeItems: JSON.stringify(noticeItems)
						},
						success: function(data) {
							if (showDialog(data)) {
								showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
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
		/*showConfirmDialog($( "#confirm-dialog-message" ),'是否发送通知？', function() {
			$.ajax({
				url: KingServices.build_url('touristGroup','noticeTouristInfo'),
				type:"POST",
				data:"id="+id,
				success:function(data){
					if(showDialog(data)){
						showMessageDialog($( "#confirm-dialog-message" ), "发送成功",function(){
							transit.listTransit(0);
						});
					}
				}
			})
		})*/
	};

	/**
	 * 编辑操作
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}    [description]
	 */
	transit.updateTransit = function(id, isOuter,$tab,target) {
		$.ajax({
			url: KingServices.build_url('touristGroup','getTouristGroupTransitArrange'),
			type:"POST",
			data:"id="+id,
			success:function(data){
				if(showDialog(data)){
					data.bus = JSON.parse(data.bus);
					data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
					data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
					data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
					data.receiveGroup.outRestaurantList = JSON.parse(data.receiveGroup.outRestaurantList);
					data.receiveGroup.outOtherList = JSON.parse(data.receiveGroup.outOtherList);
					data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
					data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
					data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
					data.sendGroup.outRestaurantList = JSON.parse(data.sendGroup.outRestaurantList);
					data.sendGroup.outOtherList = JSON.parse(data.sendGroup.outOtherList);
					data.touristGroup = JSON.parse(data.touristGroup);
					data.isOuter = !!isOuter;
					var html =arrangeTemplate(data);
					html  = filterUnAuth(html);
					if (Tools.addTab(menuKey+'-update','编辑中转安排',html)) {
						//已修改提示
						transit.$arrangeTab = $("#tab-arrange_transit-update-content");
						var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
						transit.init_event(transit.$arrangeTab, validator, id, target);
					}
		
				}
			}
		})	
	};


		/**
		 * /通知财务勾选列表
		 * @return {[type]} [description]
		 */
 		transit.chooseFinancial = function(){
		var title = '财务列表',data={};
		var addFinancialLayer = layer.open({
			type: 1,
			title: title,
			skin: 'layui-layer-rim', //加上边框
			area: '860px', //宽高
			zIndex:1028,
			content: financiaListTemplate(data),
			success:function(){
				var $container = $(".T-optional-financial");
				// 初始化list列表
				transit.listFinancialUser(0,$container);
				 //给提交按钮绑定事件
                // $container.find(".T-btn-sureSubmit").on('click' , saveFinancial);
				// 取消按钮绑定事件
				$container.find(".T-btn-sureSubmit").click(function() {
                   layer.close(addFinancialLayer);
                });

			}
		})

	}
	transit.listFinancialUser = function(page,$container){

		var $container = $(".T-optional-financial");
		  // 修正页码
        var args = {
			pageNo: (page || 0)
		}
		if (!!transit.$tab) {
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
					    	$container.find('.T-financial-content').html(html);
					    	// 关键字搜索事件
							$container.find('.T-financial-name').on('click',function(e){
								if(e.which == 13 && !window.forbiddenError){
									transit.listFinancialUser();
								}
							});
							$container.find('.T-btn-search').on('click', function(event) {
									event.preventDefault();
									transit.listFinancialUser();
							});

							//勾选记录
							$container.find('.T-add').on('click',transit.addFinancialUser);
							//分页自动勾选
							var $tr = $container.find('tr');
						   for (var i = 0; i < transit.receiveUserIdList.length; i++) {
						   	$tr.each(function(j) {
						    	var id = $tr.eq(j).attr('data-value');
						    	if (transit.receiveUserIdList[i].receiveUserId == id ) {
						    		$tr.eq(j).find('.T-add').prop('checked',true);
						    	}
						    })
						   };
					    	// 让对话框居中
							$(window).trigger('resize');

					    	// 绑定翻页组件
							laypage({
							    cont: $container.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.totalPage, //总页数
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		transit.listFinancialUser(obj.curr -1,$container);
							    	}
							    }
							});
			    }

	        }
       });
	};

	// transit.saveFinancial = function(){

	// }
	/**
	 * addFinancialUser 分页勾选
	 */
	transit.addFinancialUser = function(){
		var $that=$(this),
		    $tr=$that.closest('tr'),
		    id= $tr.attr('data-value');
	    if ($that.is(':checked')) {
	    	var receiveUserIdArray = {
	    		receiveUserId : id
	    	};
	    	transit.receiveUserIdList.push(receiveUserIdArray);
	    } else {
	    	for (var i = 0; i < transit.receiveUserIdList.length; i++) {
	    		if ( !!transit.receiveUserIdList[i].receiveUserId &&  id == transit.receiveUserIdList[i].receiveUserId ) {
	    			transit.receiveUserIdList.splice(i,1);
	    		}
	    	}
	    }
	};


	transit.init_event = function($tab, validator, $id, target) {
		// 监听修改
		$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
		.on('change','input, select,.T-editor', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		// 监听保存，并切换tab
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
			event.preventDefault();
			transit.submitUpdateTransit($id,1,$tab,tab_id, title, html);
		})
		.on(SWITCH_TAB_BIND_EVENT, function(event) {
			event.preventDefault();
			transit.init_event($tab,validator,$id, target);
		})
		// 保存后关闭
		.on(CLOSE_TAB_SAVE, function(event) {
			event.preventDefault();
			transit.submitUpdateTransit($id,0,$tab);
		});

		//$tab.find('selector')

		// 通知财务初始化
		$tab.find('.T-btn-financial').on('click', function(event) {
			event.preventDefault();
			transit.chooseFinancial();
		});

		$tab.find('.tab-content').off('click').on('click', '.T-add', function(event) {
			event.preventDefault();
			var $this = $(this), id = $this.closest('.T-tab-pane').attr('id'),type = $this.data('type');
			if ($this.hasClass('T-bus')) {
				transit.addOutBusList(id,type,validator);
			}else if ($this.hasClass('T-hotel')) {
				transit.addOutHotel(id,type,validator);
			}else if ($this.hasClass('T-restaurant')) {
				transit.addRestaurantList(id,type,validator);
			}else if ($this.hasClass('T-ticket')) {
				transit.addTicketList(id,type,validator);
			}else if ($this.hasClass('T-other')) {
				transit.addOtherList(id,type,validator);
			}

		});

		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tab);

		//Input控件位数的输入
		Tools.inputCtrolFloat($tab.find('.F-float'));
		//删除安排
		$tab.on('click', '.T-arrange-delete', function(event) {
			event.preventDefault();
			var $this = $(this), id = $this.closest('tr').data('entity-id'), cateName = $this.data('catename');
			transit.deleteArrange($this, id, cateName);
		});
		//时间控件
		transit.datepicker($tab);
		transit.dateTimePicker($tab);
		//autocomplete
		transit.bindBusCompanyChoose($tab);
		transit.bindTicketChoose($tab);
		transit.bindHotelChoose($tab, validator);
		transit.bindRestaurantChoose($tab);
		//添加资源
		transit.addResource($tab);
		//提交按钮事件绑定
		$tab.find('.T-arrange-update').on('click', function() {
			var $this = $(this), id = $this.data('entity-id'),
				isOuter = !!$this.data('isouter');
			transit.submitUpdateTransit(id, !isOuter, $tab);
		})
		$tab.find('.T-cancel').on('click', function() {
			Tools.closeTab(menuKey+'-update');
		})
		//change触发计算
		$tab.on('change', '.count, .price, .discount', function(){
			transit.calculation($(this));
		});

		// 绑定安排完成的选择
		transit.$arrangeTab.on('click', 'a', function(event) {
			event.preventDefault();
			$tab.find('[data-target="'+ $(this).attr('href') + '"]').removeClass('hidden').siblings('.checkbox').addClass('hidden');
		});
		
		if (!!target) {
			transit.$arrangeTab.find('[href=#'+target+']').trigger('click');
		}else{
			transit.$arrangeTab.find('.nav-tabs a').eq(0).trigger('click');
		}
	};

	//添加资源 
	transit.addResource = function($tab){
		$tab.find(".T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany}, KingServices.addResourceFunction);
		$tab.find(".T-addHotelResource").off('click').on("click",{function : KingServices.addHotel , type : "tr" , name : "hotelName" , id : "hotelId" , managerName : "hotelManagerName" , mobileNumber : "hotelMobileNumber"}, KingServices.addResourceFunction);
		$tab.find(".T-addTicketResource").off('click').on("click",{function : KingServices.addTicket , type : "tr" , name : "ticketName" , id : "tickeId"}, KingServices.addResourceFunction);
		$tab.find(".T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant , type : "tr" , name : "restaurant" , id : "restaurantId" , managerName : "manager" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
		
		$tab.find(".T-addBusResource,.T-addDriverResource").off('click').on("click",{
			function : KingServices.addBusDriver,
			busCompanyName : "busCompanyName",
			busCompanyId : "busCompanyId",
			busLicenseNumberId : "busLicenseNumberId",
			busLicenseNumber : "busLicenseNumber",
			busbrand : "busbrand",
			seatCount : "seatCount",
			driverName : "driverName",
			driverId : "driverId",
			driverMobileNumber : "driverMobileNumber",
			type : "tr"
		}, KingServices.addBusDriverFunction);
	}

	//新增团外安排接送车辆
	transit.addOutBusList = function(id,type,validator){
		var html = '<tr data-entity-id="">'+
		'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" />'+
		'<input class="col-sm-12 bind-change T-busCompanyName" name="busCompanyName"  type="text" value="" />'+
		'<input type="hidden" name="busCompanyId" value="" /><span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
		'<td><input type="text" class="col-sm-12 T-chooseSeatCount" name="seatCount" value="" /></td>'+
		'<td><input class="col-sm-12 T-chooseBusBrand" name="busbrand" type="text" value="" /></td>'+
		'<td><div class="col-sm-12"><input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="busLicenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" value="" /><span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
		'<td><div class="col-sm-12"><input class="col-sm-12 T-chooseDriver bind-change" name="driverName" type="text" value="" /><input type="hidden" name="driverId" value="" /><span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
		'<td><input class="col-sm-12" name="driverMobileNumber" readonly="readonly" type="text" value="" /></td>'+
		'<td><input class="col-sm-12 T-dateTimePicker" name="bususeTime" type="text" value="" /></td>'+
		'<td><input class="col-sm-12" name="boardLocation" type="text"  maxlength="20"  value="" /></td>'+
		'<td><input class="col-sm-12" name="destination" type="text" maxlength="20" value="" /></td>'+
		'<td><input class="col-sm-12 T-number price F-float F-money" name="busFee" type="text"  maxlength="9" value="" /><input type="hidden" class="count" value="1" /></td>'+
		'<td><input class="col-sm-12 T-number discount F-float F-count" name="busReduceMoney"  maxlength="9" type="text" value="" /></td>'+
		'<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="busNeedPayMoney"  maxlength="9" type="text" value="" /></td>'+
		'<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" type="text" value="" /></td>'+
		'<td><input class="col-sm-12 F-float F-money" name="collection" type="text" value="" maxlength="9" /></td>'+
		'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
		'<td><a class="cursor T-arrange-delete" data-catename="bus" title="删除">删除</a></td>'+
		'</tr>';
		html  = filterUnAuth(html);//权限过滤
		var $tbody= $("#"+id+" tbody");
		    $tbody.append(html);
		//Input控件位数的输入
		Tools.inputCtrolFloat($tbody.find('.F-float'));
		//表单验证
		rule.update(validator);
		//时间控件
		transit.dateTimePicker($tbody);
		//autocomplete
		transit.bindBusCompanyChoose($tbody);
		//添加资源
		transit.addResource($tbody);
		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tbody);
	};
	//新增团外安排酒店
	transit.addOutHotel = function(id,type,validator){
		var html ='<tr>'+
			'<td><input type="hidden" name="serviceType" value="'+type+'" />'+
			'<input class="col-sm-12 T-datePicker datepicker" name="hotelCheckInTime" value="" type="text" /></td>'+
			'<td><select class="tripPlanHotelStar" name="hotelLevel">'+
			'<option  selected="selected" value="" {{if outHotel.hotel.level == 0}}selected="selected"{{/if}}>--全部--</option><option value="1">三星以下</option>'+
			'<option value="2">三星</option><option value="3">准四星</option>'+
			'<option value="4">四星</option><option value="5">准五星</option>'+
			'<option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><div class="col-sm-12"><input class="col-sm-12 T-chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" />'+
			'<span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>'+
			'<td><input class="col-sm-12" name="hotelRoomType" value=""  type="text" /><input type="hidden" name="hotelRoomTypeId" /></td>'+
			'<td><input class="col-sm-12 T-number price F-float F-money" name="hotelPrice" value="" maxlength="9" type="text" /></td>'+
			'<td><input class="col-sm-12 count F-float F-count" name="hotelMemberCount"  maxlength="6" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 T-number discount F-float F-money" name="hotelReduceMoney"  maxlength="9" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="hotelNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value="" type="text" maxlength="9" /></td>'+
			'<td><input class="col-sm-12 F-float F-money" name="collection" type="text" value="" maxlength="9" /></td>'+
			'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
			'<td><a class="cursor T-arrange-delete" data-catename="hotel" title="删除">删除</a></td>'+
			'</tr>';
		html  = filterUnAuth(html);
		var $tbody=$("#"+id+" tbody");
		    $tbody.append(html);
		//Input控件位数的输入
		Tools.inputCtrolFloat($tbody.find('.F-float'));
		//表单验证
		rule.update(validator);
		//时间控件
		transit.datepicker($tbody);
		//酒店autocomplete
		transit.bindHotelChoose($tbody, validator);
		//添加资源
		transit.addResource($tbody);
		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tbody);

	};
	//新增团外安排票务
	transit.addTicketList = function(id,type,validator){
		var html ='<tr>'+
			'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 T-chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="tickeId" />'+
			'<span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><select class="" name="ticketType"><option value="1">机票</option>'+
			'<option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
			'<td><input class="col-sm-12" name="ticketStartCity" value="" maxlength="20"  type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketArriveCity" value="" maxlength="20"  type="text" /></td>'+
			'<td><input class="col-sm-12 T-dateTimePicker" name="ticketStartTime" value="" type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketShift" value=""  maxlength="20"  type="text" /></td>'+
			'<td><input class="col-sm-12" name="ticketSeatLevel"  maxlength="20"  value="" type="text" />'+
			'<td><input class="col-sm-12 T-number price F-float F-money" name="ticketPrice"  maxlength="9"  value="" type="text" /></td>'+
			'<td><input class="col-sm-12 count F-float F-count" name="ticketMemberCount"  maxlength="6"  value="" type="text" /></td>'+
			'<td><input class="col-sm-12 T-number discount F-float F-money" name="ticketReduceMoney" value=""  maxlength="9"  type="text" /></td>'+
			'<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="ticketNeedPayMoney" value="" type="text" /></td>'+
			'<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value=""  maxlength="9"  type="text" /></td>'+
			'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
			'<td><a class="cursor T-arrange-delete" data-catename="ticket" title="删除">删除</a></td>'+
			'</tr>';
		html  = filterUnAuth(html);
		var $tbody=$("#"+id+" tbody");
		    $tbody.append(html);
		//Input控件位数的输入
		Tools.inputCtrolFloat($tbody.find('.F-float'));

		//表单验证
		rule.update(validator);
		//时间控件
		transit.dateTimePicker($tbody);
		//票务autocomplete
		transit.bindTicketChoose($tbody);
		//添加资源
		transit.addResource($tbody);
		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tbody);
	}
	//新增餐厅安排
	transit.addRestaurantList = function(id,type,validator){
		var html = '<tr data-entity-id="">'+
			'<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>'+
			'<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="'+type+'" /><input class="col-sm-12 bind-change T-chooseRestaurant" name="restaurant" type="text" value="" />'+
			'<input type="hidden" name="restaurantId" value="" />'+
			'<span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
			'<td><input class="col-sm-12" name="manager" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="mobileNumber" readonly="readonly" type="text" value="" /></td>'+
			'<td><select name="standardType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select>'+
			'</td><td><input class="col-sm-12 T-chooseStandard price F-float F-money" name="restaurantStandardId" type="text" value="" maxlength="9" /><input type="hidden" name="price" value="" />'+
			'</td><td><input class="col-sm-12 count F-float F-count" name="memberCount" maxlength="6" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9"  type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
			'<td><a class="cursor T-arrange-delete" data-catename="restaurant" title="删除">删除</a></td>'+
			'</tr>';
		html  = filterUnAuth(html);

		var $tbody=$("#"+id+" tbody");
		    $tbody.append(html);
		//Input控件位数的输入
		Tools.inputCtrolFloat($tbody.find('.F-float'));

		//表单验证
		rule.update(validator);
		//时间控件
		transit.datepicker($tbody);
		//餐厅autocomplete
		transit.bindRestaurantChoose($tbody);
		//添加资源
		transit.addResource($tbody);
		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tbody);
	},
	//新增其他安排
	transit.addOtherList = function(id,type,validator){
		var html = '<tr data-entity-id="">'+
			'<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>'+
			'<td><input class="col-sm-12" name="name" type="text" value="" maxlength="30" /><input type="hidden" name="serviceType" value="'+type+'" /></td>'+
			'<td><input class="col-sm-12" name="managerName" type="text" value="" maxlength="20" /></td>'+
			'<td><input class="col-sm-12" name="mobileNumber" type="text" maxlength="11" value="" /></td>'+
			'<td><input class="col-sm-12 price F-float F-money" name="price" type="text" maxlength="9" value="" /></td>'+
			'<td><input class="col-sm-12 count F-float F-count" name="memberCount" type="text" maxlength="9" value="" /></td>'+
			'<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" type="text" maxlength="9" value="" /></td>'+
			'<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
			'<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" type="text" maxlength="9" value="" /></td>'+
			'<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000"/></td>'+
			'<td><a class="cursor T-arrange-delete" data-catename="other" title="删除">删除</a></td>'+
			'</tr>';
		
		var $tbody=$("#"+id+" tbody");
		    $tbody.append(html);
		//Input控件位数的输入
		Tools.inputCtrolFloat($tbody.find('.F-float'));	
		//表单验证
		rule.update(validator);
		//时间控件
		transit.datepicker($tbody);
		//添加资源
		transit.addResource($tbody);
		//判定预付款是否发生改变
		// transit.prePayMoneyChange($tbody);
	};

	/**
	 * prePayMoneyChange 判定预付款是否发生改变
	 * @param  {[type]} $tab [description]
	 * @return {[type]}      [description]
	 */
	// transit.prePayMoneyChange = function($tab){
	//     $tab.find('.T-prePayMoney').on('change',function(event) {
	// 		event.preventDefault();
	// 		transit.isPrePayMoney=true;
	// 	});
	// };
	

	/**
	 * 中转安排删除安排
	 * @param  {[type]} $obj      [删除对象]
	 * @param  {[type]} $id       [删除对象ID]
	 * @param  {[type]} $cateName [识别字段]
	 * @return {[type]}           [description]
	 */
	transit.deleteArrange = function($obj, $id, $cateName) {
		if (!!$id) {
			showConfirmDialog($( "#confirm-dialog-message" ), '确定要删除该安排？', function(){
				$.ajax({
					url: KingServices.build_url('touristGroup','deleteTouristGroupArrange'),
					type: "POST",
					data: "cateName="+$cateName+"&id="+$id+"",
					success: function(data){
						if(showDialog(data)){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								$obj.closest('tr').fadeOut(function(){
									$obj.closest('tr').remove();
								});
							});
						}
					}
				});
			})
		}else{
			$obj.closest('tr').fadeOut(function(){
				$obj.closest('tr').remove();
			});
		}
	};

	/**
	 * 查看操作
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}    [description]
	 */
	transit.viewTransit = function(id){
		$.ajax({
			url: KingServices.build_url('touristGroup','getTouristGroupTransitArrange'),
			type:"POST",
			data:"id="+id,
			success:function(data){
				if(showDialog(data)){
					data.bus = JSON.parse(data.bus);
					data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
					data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
					data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
					data.receiveGroup.outRestaurantList = JSON.parse(data.receiveGroup.outRestaurantList);
					data.receiveGroup.outOtherList = JSON.parse(data.receiveGroup.outOtherList);
					data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
					data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
					data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
					data.sendGroup.outRestaurantList = JSON.parse(data.sendGroup.outRestaurantList);
					data.sendGroup.outOtherList = JSON.parse(data.sendGroup.outOtherList);
					data.touristGroup = JSON.parse(data.touristGroup);
					var html =viewTemplate(data);
					Tools.addTab(menuKey+"-view","查看中转安排",html);
				}
			}
		})
	};

	/**
	 * 导出操作
	 * @param  {[type]} id [安排ID]
	 * @return {[type]}    [description]
	 */
	transit.exportTransit = function(id){
		var url = ""+APP_ROOT+"back/export.do?method=exportOutTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&id="+id;
		exportXLS(url);
	};

	/**
	 * 车队autocomplete
	 * @param  {[type]} $tab [容器]
	 * @return {[type]}      [description]
	 */
	transit.bindBusCompanyChoose = function($tab){
		function clearData($tr, start) {
			switch(start) {
				case 'brand':
					$tr.find('input[name="busbrand"]').val('');
				case 'licenseNumber':
					$tr.find('input[name="busLicenseNumber"]').val('');
					$tr.find('input[name="busLicenseNumberId"]').val('');
				case 'CompanyName':
					$tr.find('input[name="busCompanyName"]').val('');
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
					seatCount:$tr.find('input[name=seatCount]').val(),
					brand: $tr.find('input[name=busbrand]').val(),
					busId: $tr.find('input[name=busLicenseNumberId]').val(),
					busCompanyId:$tr.find('input[name=busCompanyId]').val()
				};
				$.ajax({
					url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
					showLoading:false,
					type: 'post',
					data: searchJson,
				})
				.done(function(data) {
					if(showDialog(data)){
						data.busCompanyList = JSON.parse(data.busCompanyList);
						if (!data.busCompanyList || !data.busCompanyList.length) {
							clearData($tr, start);
						}
					}
				});
			}, 10);
		}

		//选择车座位数
		var chooseSeatCount = $tab.find(".T-chooseSeatCount");
		chooseSeatCount.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					clearData(parents, 'brand');
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
				checkBusCompay($(this).blur().closest('tr'), 'brand');
			}
		}).unbind("click").click(function(){
			var obj = this, $tr = $(this).closest('tr');
			$.ajax({
				url: KingServices.build_url('bookingOrder','getSeatCountList'),
				showLoading: false,
				data:{
					brand:$tr.find("input[name=busbrand]").val(),
					busCompanyId:$tr.find("input[name=busCompanyId]").val(),
					menuKey:menuKey
				},
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
		//选择品牌
		var chooseBrand = $tab.find(".T-chooseBusBrand");
		chooseBrand.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					clearData(parents, 'LicenseNumber');
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
				checkBusCompay($(this).blur().closest('tr'), 'LicenseNumber');
			}
		}).unbind("click").click(function(){
			var obj = this;
			var $tr = $(this).closest('tr');
			var seatCount = $tr.find("[name=seatCount]").val();
				$.ajax({
					url: KingServices.build_url('bookingOrder','getBusBrandList'),
					data:{
						seatCount:$tr.find("[name=seatCount]").val(),
						busCompanyId:$tr.find("[name=busCompanyId]").val(),
						menuKey:menuKey
					},
					showLoading:false,
					type:"POST",
					success:function(data){
						if(showDialog(data)){
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
								layer.tips('无数据', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
		});
		//选择车辆
		var chooseLicense = $tab.find(".T-chooseBusLicenseNumber");
		chooseLicense.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					clearData(parents, 'licenseNumber');
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
					parents.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
					checkBusCompay(parents, 'licenseNumber');
			}
		}).unbind("click").click(function(){
			var obj = this,parents = $(obj).closest('tr'),
				seatCount = parents.find("[name=seatCount]").val(),
				busCompanyId = parents.find("[name=busCompanyId]").val(),
				busBrand = parents.find("[name=busbrand]").val();
				$.ajax({
					url: KingServices.build_url('busCompany','getLicenseNumbers'),
					data: {
						seatCount: seatCount,
						brand: busBrand,
						busCompanyId: busCompanyId,
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
								$(obj).autocomplete('option','source', licenseList);
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
		// 选择车队
		var chooseLicense = $tab.find(".T-busCompanyName");
		chooseLicense.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					clearData($that.closest('tr'), 'CompanyName');
			
				}
			},
			select :function(event, ui){
				var $tr = $(this).blur().closest('tr');
				checkBusCompay($tr, 'driverName');
				$tr.find("input[name=busCompanyName]").val(ui.item.busCompanyName);
				$tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
				$.ajax({
					url: KingServices.build_url('busCompany', 'findBusCompanyById'),
					type: 'post',
					dataType: 'json',
					showLoading: false,
					data: {
						id: ui.item.id
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
				
				/*var $this = $(this),parents = $(this).closest('tr');
					parents.find("input[name=busCompanyName]").val(ui.item.busCompanyName);
					parents.find("input[name=driverName]").val('');
					parents.find("input[name=driverMobileNumber]").val('');
					parents.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');*/
			}
		}).unbind("click").click(function(){
			var obj = this,parents = $(obj).closest('tr'),
				seatCount = parents.find("[name=seatCount]").val(),
				busBrand = parents.find("[name=busbrand]").val();
			$.ajax({
				url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
				data:  {
					seatCount: parents.find("[name=seatCount]").val(),
					brand: parents.find("[name=busbrand]").val(),
					busId: parents.find('input[name="busLicenseNumberId"]').val(),
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
							$(obj).autocomplete('option','source', busCompanyList);
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
		//司机选择
		var chooseDriver = $tab.find(".T-chooseDriver");
		chooseDriver.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=driverMobileNumber]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('tr');
				parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
				parents.find("input[name=driverMobileNumber]").val(ui.item.mobileNumber);
			}
		}).unbind("click").click(function(){
			var obj = this,
			    $tr=$(this).closest('tr');//busCompanyId
			var busLicenseNumberId = $tr.find("input[name=busLicenseNumberId]").val();
			var busCompanyId = $tr.find("input[name=busCompanyId]").val();
			$.ajax({
				url: KingServices.build_url('busCompany','getDrivers'),
				data:"busCompanyId="+busCompanyId+"",
				showLoading:false,
				type:"POST",
				success:function(data){
					if(showDialog(data)){
						var driverList = JSON.parse(data.driverList);
						if(driverList && driverList.length > 0){
							for(var i=0; i < driverList.length; i++){
								driverList[i].value = driverList[i].name;
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

	/**
	 * 酒店autocomplete
	 * @param  {[type]} tab       [容器]
	 * @param  {[type]} validator [description]
	 * @return {[type]}           [description]
	 */
	transit.bindHotelChoose = function($tab, validator){
		var hotelChoose = $tab.find('.T-chooseHotel');
		var $hotelStar = $tab.find(".tripPlanHotelStar");
		$hotelStar.off().on("change", function(){
			var parentObj = $(this).closest('tr');
			parentObj.find("input[name=hotelName]").val("");
			parentObj.find("input[name=hotelId]").val("");
			parentObj.find("input[name=hotelRoomType]").val("");
			parentObj.find("input[name=hotelRoomTypeId]").val("");
			parentObj.find("input[name=hotelMobileNumber]").val("");
			parentObj.find("input[name=hotelManagerName]").val("");
			parentObj.find("input[name=hotelPrice]").val("");
		});
		//酒店选择
		hotelChoose.autocomplete({
			minLength:0,
			change: function(event,ui){
				if(ui.item == null){
					$(this).val("");
					var parents = $(this).closest('tr');
					parents.find("input[name=hotelId]").val("");
					parents.find("input[name=hotelRoomType]").val("");
					parents.find("input[name=hotelRoomTypeId]").val("");
					parents.find("input[name=hotelMobileNumber]").val("");
					parents.find("input[name=hotelManagerName]").val("");
					parents.find("input[name=hotelPrice]").val("");
				}
			},
			select: function(event,ui){
				var _this = this, parents = $(_this).closest('tr');
				parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
				
				rule.update(validator);
				$.ajax({
					url: KingServices.build_url("hotel","getHotelById"),
					showLoading:false,
					data:"id=" + ui.item.id,
					success: function(data) {
						if(showDialog(data)){
							parents.find("input[name=hotelMobileNumber]").val(data.hotel.mobileNumber);
							parents.find("input[name=hotelManagerName]").val(data.hotel.managerName);
							parents.find("select[name=hotelLevel]").val(data.hotel.level);
							parents.find("input[name=hotelRoomType]").val("");
							parents.find("input[name=hotelRoomTypeId]").val("");
						}
					}
				});
			}
		}).off("click").on("click", function(){
			var hotelStarValue = $hotelStar.val(),
				hotelStarValue = $(this).closest('tr').find('.tripPlanHotelStar').val();
			obj = this;
			$.ajax({
				url: KingServices.build_url('hotel','findHotelListByLevel'),
				showLoading:false,
				data:{
					menuKey:menuKey,
					level:hotelStarValue
				},
				success: function(data) {
					if(showDialog(data)){
						var hotelList = JSON.parse(data.hotelList);
						if(hotelList && hotelList.length > 0){
							for(var i=0; i < hotelList.length; i++){
								hotelList[i].value = hotelList[i].name;
							}
							$(obj).autocomplete('option','source', hotelList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有酒店可供选择', obj, {
								tips: [1, '#3595CC'],
								time: 2000
							});
						}
					}
				}
			});
		});
		//房型选择
		$tab.find("[name=hotelRoomType]").autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val("");
					var objParent = $(this).closest('tr');
					objParent.find("input[name=hotelRoomTypeId]").val("");
					objParent.find("input[name=hotelPrice]").val("");
				}
			},
			select:function(event,ui){
				var $thisRoom =$(this).closest('tr');
				$thisRoom.find("input[name=hotelRoomTypeId]").val(ui.item.id).trigger('change');
				var startTime=$thisRoom.find("input[name=hotelCheckInTime]").val();
				$.ajax({
					url: KingServices.build_url('hotel','findRoomDetailById'),
					showLoading:false,
					data:"id=" + ui.item.id+"&startTime="+startTime,
					success: function(data) {
						if(showDialog(data)){
							var hotelRoom = JSON.parse(data.hotelRoom);
							$thisRoom.find("input[name=hotelPrice]").val(hotelRoom.normalInnerPrice).trigger('change');
						}
					}
				})
			}
		}).off("click").on("click", function(){
			var _this = $(this), $parents = _this.closest('tr'),
			id = $parents.find('input[name=hotelId]').val();
			if (!!id) {
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
								$(_this).autocomplete('option','source', hotelRommList);
								$(_this).autocomplete('search', '');
							}else{
								layer.tips('没有房型可供选择', _this, {
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
	};

	/**
	 * 票务 autocomplete
	 * @param  {[type]} tab [description]
	 * @return {[type]}     [description]
	 */
	transit.bindTicketChoose = function($tab) {
		var ticketChoose = $tab.find(".T-chooseTicket");
		ticketChoose.autocomplete({
			minLength:0,
			select:function(event, ui) {
				var _this = this;
				var thisParent = $(_this).closest('tr');
				thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
				var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
				rule.update(validator);
			},
			change : function(event, ui) {
				if(ui.item == null) {
					$(this).val("");
					var thisParent = $(this).closest('tr');
					thisParent.find("input[name=tickeId]").val("").trigger('change');
				}
			}
		}).off("click").on("click", function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('ticket','findAll'),
				data:{
					menuKey:menuKey
				},
				showLoading: false,
				success: function(data) {
					if(showDialog(data)) {
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
	},
	//餐厅autocomplete
	transit.bindRestaurantChoose = function($tab) {
		var restaurantChoose = $tab.find(".T-chooseRestaurant"),
			standardChoose = $tab.find(".T-chooseStandard"),
			standardType = $tab.find("select[name=standardType]");
		standardType.off("change").on("change", function(){
			var parents = $(this).closest('tr');
			parents.find("input[name=restaurantStandardId]").val("");
			transit.calculation($(this));
		});
		//餐厅选择
		restaurantChoose.autocomplete({
			minLength:0,
			select:function(event, ui) {
				var _this = this, parents = $(_this).closest('tr');
				parents.find("input[name=restaurantId]").val(ui.item.id);
				$.ajax({
					url: KingServices.build_url('restaurant','findRestaurantById'),
					showLoading: false,
					data: "id="+ui.item.id,
					success: function(data) {
						if(showDialog(data)) {
							var restaurant = JSON.parse(data.restaurant);
							parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
							parents.find("input[name=manager]").val(restaurant.managerName);
							parents.find("input[name=price]").val(0);
							parents.find("input[name=restaurantStandardId]").val(0);
							transit.calculation($(_this));
						}
					}
				});
				
			},
			change : function(event, ui) {
				if(ui.item == null) {
					$(this).val("");
					var parents = $(this).closest('tr');
					parents.find("input[name=restaurantId]").val("");
					parents.find("input[name=manager]").val("");
					parents.find("input[name=mobileNumber]").val("");
					parents.find("input[name=restaurantStandardId]").val("");
					parents.find("input[name=price]").val("");
				}
			}
		}).off("click").on("click", function(){
			var obj = this;
			$.ajax({
				url: KingServices.build_url('restaurant','findAll'),
				data:{
					menuKey:menuKey
				},
				showLoading: false,
				success: function(data) {
					if(showDialog(data)) {
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
		//餐标
		standardChoose.autocomplete({
			minLength: 0,
			select: function(event, ui){
				var standardId = ui.item.id;
				var _this = $(this);

				$(this).closest('tr').find("input[name=price]").val(ui.item.price);
				$(this).closest('tr').find("input[name=price]").focus();
				$(this).closest('tr').find("input[name=price]").blur();

			},
			change: function(event, ui) {
				if(ui.item == null) {
					var objParent = $(this).closest('tr');
					objParent.find("input[name=price]").val("");
				};
				transit.calculation($(this));
			}
		}).off("click").on("click", function(){
			var obj = this, parents = $(obj).closest('tr');
			var id = parents.find("input[name=restaurantId]").val();
			var type = parents.find('select[name=standardType]').val();
			if(id && id.length > 0){
				$.ajax({
					url: KingServices.build_url('restaurant','getRestaurantStandardByType'),
					showLoading: false,
					data: "restaurantId=" + id + "&type=" + type,
					success: function(data) {
						if(showDialog(data)) {
							var restaurantStandardList = data.restaurantStandardList;
							if(restaurantStandardList && restaurantStandardList.length > 0){
								for(var i=0; i < restaurantStandardList.length; i++){
									restaurantStandardList[i].value = restaurantStandardList[i].price;
								}
								$(obj).autocomplete('option','source', restaurantStandardList);
								$(obj).autocomplete('search', '');
							}else {
								layer.tips('没有内容。', obj, {
									tips: [1, '#3595CC'],
									time: 2000
								});
							}
						}
					}
				});
			}else{
				layer.tips('请选择餐厅', _this, {
					tips: [1, '#3595CC'],
					time: 2000
				});
			}
		});
	}
	/**
	 * 时间控件
	 * @param  {[type]} obj [input对象]
	 * @return {[type]}     [description]
	 */
	transit.datepicker = function(obj){
		obj.find(".T-datePicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	transit.dateTimePicker = function(){
		Tools.setDateHSPicker($('.T-dateTimePicker')); 
	};

	transit.save = function(saveType){
		if(saveType == "update"){
			var id = $(".arrangeTouristMain .btn-updateArrange").attr("data-entity-id");
			transit.submitUpdateTransit(id,1);
		}
	}

	//保存中转安排操作
	transit.submitUpdateTransit = function(id, isClose, $tab, tab_id, title, html) {
		var validator = rule.setTranistCheckor($tab),
			argumentsLen = arguments.length,
			idString = $tab.attr('id');
		if (!validator.form())  return;
		var touristGroupArrange = {
			touristGroup : {},
			outBusList : [],
			outHotelList : [],
			outTicketList : [],
			outRestaurantList : [],
			outOtherList : [],
			receiveUserIdList : [],
			arrangeStatus: {}
		};
		$tab.find('.T-finishedArrange').each(function() {
			var $this = $(this);
			touristGroupArrange.arrangeStatus[$this.prop('name')] = $this.is(':checked')?3:1;
		})
		touristGroupArrange.receiveUserIdList = transit.receiveUserIdList;
		//小组ID
		touristGroupArrange.touristGroup = {
			id : $tab.find('[name=touristGroup]').val()
		};
		//接送车安排 JSON
		var receptionOutBusTr = $tab.find(".busListTable tbody tr");
		transit.outBusJson(receptionOutBusTr,touristGroupArrange.outBusList);
		//酒店安排 JSON
		var receptionOutHotelTr = $tab.find(".hotelListTable tbody tr");
		transit.outHotelJson(receptionOutHotelTr,touristGroupArrange.outHotelList);
		//票务安排 JSON
		var receptionOutTicketTr = $tab.find(".ticketListTable tbody tr");
		transit.outTicketJson(receptionOutTicketTr,touristGroupArrange.outTicketList);
		//餐厅安排 JSON
		var receptionOutRestaurantTr = $tab.find(".restaurantListTable tbody tr");
		transit.outRestaurantJson(receptionOutRestaurantTr,touristGroupArrange.outRestaurantList);
		//其他安排 JSON
		var receptionOutOtherTr = $tab.find(".otherListTable tbody tr");
		transit.outOtherJson(receptionOutOtherTr,touristGroupArrange.outOtherList);

		//预付款发生改变，请通知财务
		// if (transit.isPrePayMoney==true && transit.receiveUserIdList.length ==0 ) {
		// 	showMessageDialog($( "#confirm-dialog-message" ),"预付款发生改变，请通知财务！");
		// 	return;
		// };
		touristGroupArrange = JSON.stringify(touristGroupArrange);
		$.ajax({
			url: KingServices.build_url('touristGroup','saveTouristGroupArrange'),
			type:"POST",
			data:"touristGroupArrange="+encodeURIComponent(touristGroupArrange),
			success:function(data){
				if(showDialog(data)){
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						if(isClose ==1){
							if (argumentsLen == 3) {
								Tools.closeTab(menuKey+"-update");
								transit.listTransit(transit.pageNo);
							}else{
								$tab.data('isEdited',false);
								Tools.addTab(tab_id, title, html)
								transit.updateTransit($tab.find('[name=touristGroup]').val());
							}
						}else {
							Tools.closeTab(menuKey+"-update");
						};
					});
				};
			}
		});
	};

	//接送车辆JSON组装
	transit.outBusJson = function(obj,json) {
		for(var i = 0; i<obj.length; i++){
			var busJson = {//touristGroup.getArrangeTrValue(outBusTr.eq(i),""),
				id : obj.eq(i).attr("data-entity-id"),
				seatCount : transit.getArrangeTrValue(obj.eq(i),"seatCount"),
				brand : transit.getArrangeTrValue(obj.eq(i),"busbrand"),
				serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
				busCompanyId : transit.getArrangeTrValue(obj.eq(i),"busCompanyId"),
				busId : transit.getArrangeTrValue(obj.eq(i),"busLicenseNumberId"),
				driverId : transit.getArrangeTrValue(obj.eq(i),"driverId"),
				useTime : transit.getArrangeTrValue(obj.eq(i),"bususeTime"),
				boardLocation : transit.getArrangeTrValue(obj.eq(i),"boardLocation"),
				destination : transit.getArrangeTrValue(obj.eq(i),"destination"),
				fee : transit.getArrangeTrValue(obj.eq(i),"busFee"),
				reduceMoney : transit.getArrangeTrValue(obj.eq(i),"busReduceMoney"),
				needPayMoney : transit.getArrangeTrValue(obj.eq(i),"busNeedPayMoney"),
				prePayMoney : transit.getArrangeTrValue(obj.eq(i),"prePayMoney"),
				collection :  transit.getArrangeTrValue(obj.eq(i),"collection"),
				remark : transit.getArrangeTrValue(obj.eq(i),"remark")
			}
			if(busJson.busCompanyId != "" && busJson.busCompanyId.length>0){
				json.push(busJson);
			}
		}
	};
	//酒店安排JSON组装
	transit.outHotelJson = function(obj,json) {
		for(var i = 0; i<obj.length; i++){
			var hotelJson ={
				id : obj.eq(i).attr("data-entity-id"),
				serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
				checkInTime : transit.getArrangeTrValue(obj.eq(i),"hotelCheckInTime"),
				hotelLevel : transit.getArrangeTrValue(obj.eq(i),"hotelLevel"),
				hotelId : transit.getArrangeTrValue(obj.eq(i),"hotelId"),
				hotelRoomId : transit.getArrangeTrValue(obj.eq(i),"hotelRoomTypeId"),
				price : transit.getArrangeTrValue(obj.eq(i),"hotelPrice"),
				memberCount : transit.getArrangeTrValue(obj.eq(i),"hotelMemberCount"),
				reduceMoney : transit.getArrangeTrValue(obj.eq(i),"hotelReduceMoney"),
				needPayMoney : transit.getArrangeTrValue(obj.eq(i),"hotelNeedPayMoney"),
				prePayMoney : transit.getArrangeTrValue(obj.eq(i),"prePayMoney"),
				collection :  transit.getArrangeTrValue(obj.eq(i),"collection"),
				remark : transit.getArrangeTrValue(obj.eq(i),"remark")
			}
			if(hotelJson.hotelId != "" && hotelJson.hotelId.length>0){
				json.push(hotelJson);
			}
		}
	};
	//票务安排JSON组装
	transit.outTicketJson = function(obj,json) {
		for(var i = 0; i<obj.length; i++){
			var ticketJson ={
				id : obj.eq(i).attr("data-entity-id"),
				serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
				ticketId : transit.getArrangeTrValue(obj.eq(i),"tickeId"),
				type : transit.getArrangeTrValue(obj.eq(i),"ticketType"),
				startingCity : transit.getArrangeTrValue(obj.eq(i),"ticketStartCity"),
				arriveCity : transit.getArrangeTrValue(obj.eq(i),"ticketArriveCity"),
				startTime : transit.getArrangeTrValue(obj.eq(i),"ticketStartTime"),
				shift : transit.getArrangeTrValue(obj.eq(i),"ticketShift"),
				seatLevel : transit.getArrangeTrValue(obj.eq(i),"ticketSeatLevel"),
				price : transit.getArrangeTrValue(obj.eq(i),"ticketPrice"),
				memberCount : transit.getArrangeTrValue(obj.eq(i),"ticketMemberCount"),
				reduceMoney : transit.getArrangeTrValue(obj.eq(i),"ticketReduceMoney"),
				needPayMoney : transit.getArrangeTrValue(obj.eq(i),"ticketNeedPayMoney"),
				prePayMoney : transit.getArrangeTrValue(obj.eq(i),"prePayMoney"),
				remark : transit.getArrangeTrValue(obj.eq(i),"remark")
			}
			if(ticketJson.ticketId != "" && ticketJson.ticketId.length>0){
				json.push(ticketJson);
			}
		}
	};
	//餐厅安排JSON组装
	transit.outRestaurantJson = function(obj,json) {
		for(var i = 0; i<obj.length; i++){
			var restaurantJson ={
				id : obj.eq(i).attr("data-entity-id"),
				serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
				startTime : transit.getArrangeTrValue(obj.eq(i),"startTime"),
				restaurantId : transit.getArrangeTrValue(obj.eq(i),"restaurantId"),
				standardType : transit.getArrangeTrValue(obj.eq(i),"standardType"),
				price : transit.getArrangeTrValue(obj.eq(i),"restaurantStandardId"),
				memberCount : transit.getArrangeTrValue(obj.eq(i),"memberCount"),
				reduceMoney : transit.getArrangeTrValue(obj.eq(i),"reduceMoney"),
				needPayMoney : transit.getArrangeTrValue(obj.eq(i),"needPayMoney"),
				prePayMoney : transit.getArrangeTrValue(obj.eq(i),"prePayMoney"),
				remark : transit.getArrangeTrValue(obj.eq(i),"remark")
			}
			if(restaurantJson.restaurantId != "" && restaurantJson.restaurantId.length>0){
				json.push(restaurantJson);
			}
		}
	};
	//其他安排JSON组装
	transit.outOtherJson = function(obj,json) {
		for(var i = 0; i<obj.length; i++){
			var otherJson ={
				id : obj.eq(i).attr("data-entity-id"),
				serviceType : transit.getArrangeTrValue(obj.eq(i),"serviceType"),
				name : transit.getArrangeTrValue(obj.eq(i),"name"),
				mobileNumber : transit.getArrangeTrValue(obj.eq(i),"mobileNumber"),
				managerName : transit.getArrangeTrValue(obj.eq(i),"managerName"),
				startTime : transit.getArrangeTrValue(obj.eq(i),"startTime"),
				price : transit.getArrangeTrValue(obj.eq(i),"price"),
				memberCount : transit.getArrangeTrValue(obj.eq(i),"memberCount"),
				reduceMoney : transit.getArrangeTrValue(obj.eq(i),"reduceMoney"),
				needPayMoney : transit.getArrangeTrValue(obj.eq(i),"needPayMoney"),
				prePayMoney : transit.getArrangeTrValue(obj.eq(i),"prePayMoney"),
				remark : transit.getArrangeTrValue(obj.eq(i),"remark")
			}
			if(otherJson.name != "" && otherJson.name.length>0){
				json.push(otherJson);
			}
		}
	};
	//name取值
	transit.getArrangeTrValue = function(obj,name){
		return obj.find("[name="+name+"]").val();
	}
	//计算
	transit.calculation = function($obj){
		var Tr = $obj.closest("tr"),
			count = Tr.find(".count").val() || 0,
			price = Tr.find(".price").val() || 0,
			discount = Tr.find(".discount").val() || 0,
			needPay = (count * price)-discount;
		Tr.find(".needPay").val(needPay);
	};

	exports.init = transit.initModule;
	exports.viewTransit = transit.viewTransit;
	exports.updateTransit = function(id, isOuter) {
		transit.updateTransit(id, isOuter);
	}
})