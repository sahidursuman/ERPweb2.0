/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports){
	var rule = require("./rule"),
		listTemplate = require("./view/list"),
		shopCheckingTemplate = require("./view/shopChecking"),
		billImagesTemplate = require("./view/shopLookImg"),
		shopClearingTemplate = require("./view/shopClearing"),
		shopRecords = require("./view/shopRecords"),
		viewReceivedTemplate = require("./view/viewReceived"),
		viewAccountTemplate = require('./view/viewAccount'),
		payingTableTemplate = require('./view/shopPayingTable'),
		menuKey = "financial_shop",
		checkMenuKey = menuKey + "_checking",
		settMenuKey = menuKey+"_clearing";

	var FinShop = {
		$tab: false,
		$checkingTab : false,
		checkingId : null
	}

	/**
	 * 初始化模块
	 */
	FinShop.initModule = function(){
		FinShop.$tab = null;
		FinShop.getList();
	};

	/**
	 * 获取购物账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	FinShop.getList = function(page){
		var args = FinancialService.getInitDate();
        args.pageNo = page || 0;
		if (!!FinShop.$tab) {
			args = {
				pageNo: (page || 0),
				startDate: FinShop.$tab.find('.T-search-start-date').val(),
				endDate : FinShop.$tab.find('.T-search-end-date').val(),
			}
			var shopName = FinShop.$tab.find('.T-search-name').val();
            args.shopName = shopName === '全部' ? '' : shopName;
		}
		var data = {
			searchParam : {},
			shopAccountList : [
				{
					shopId : 1,
					shopName : "商品名字"
				}
			],
			totalList : {}
		}
		$.ajax({
			url: KingServices.build_url('financial/shopAccount', 'listPager'),
			type: 'post',
			data: args,
		}).done(function(data){
			if (showDialog(data)) {
				Tools.addTab(menuKey,"购物账务",listTemplate(data));
				// 绑定事件
				FinShop.$tab = $('#tab-' + menuKey + '-content');
				FinShop.init_event(FinShop.$tab);
				// 缓存页面
				FinShop.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: FinShop.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		FinShop.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	/**
	 * 初始化列表页面的事件绑定
	 */
	FinShop.init_event = function($tab){
		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = $tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			FinShop.getList();
		});
		Tools.setDatePicker($searchArea.find('.datepicker'), true);

		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-checking'))  {
				// 对账
				FinShop.accountChecking(id);
			} else if ($that.hasClass('T-settlement'))  {
				// 结算
				FinShop.settlement(id);
			}
		});
	};

	/**
	 * 初始化对账模块
	 * @param  {[int]} id 购物账务ID
	 */
	FinShop.accountChecking = function(id){
		FinShop.$checkingTab = null;
		FinShop.checkingId = id;
		FinShop.checkingList(0, id);
	};

	/**
	 * 获取购物账务-对账列表，初始化列表页面
	 * @param  {int} page 页码
	 * @param  {[int]} id 购物账务ID
	 */
	FinShop.checkingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			shopId : id || FinShop.checkingId,
			startTime: FinShop.$tab.find('.T-search-start-date').val(),
			endTime : FinShop.$tab.find('.T-search-end-date').val()
		}
		if (!!FinShop.$checkingTab) {
			args = {
				pageNo: (page || 0),
				shopId : id || FinShop.checkingId,
				startTime: FinShop.$checkingTab.find('.T-search-start-date').val(),
				endTime : FinShop.$checkingTab.find('.T-search-end-date').val(),
				tripMessage : FinShop.$checkingTab.find('.T-search-trip').val()
			}
		}
		var data = {
			searchParam : {},
			shopAccountList : [{
				id : 1,
				shopName : "商品",
				receiveMoney : 500
			},
			{
				id : 2,
				shopName : "商品2",
				receiveMoney : 500,
				isConfirmAccount : 1
			}],
			totalList : {}
		}
		
		$.ajax({
			url: KingServices.build_url('financial/shopAccount', 'listCheckShopAcccount'),
			type: 'post',
			data: args,
		}).done(function(data){
			if (showDialog(data)) {
				Tools.addTab(checkMenuKey,"购物对账",shopCheckingTemplate(data));
				FinShop.$checkingTab = $('#tab-' + checkMenuKey + '-content');
				FinShop.check_init_event(FinShop.$checkingTab);
			}
		});
	};

	FinShop.check_init_event = function($tab){
		var validator = rule.check($tab);

		$tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE)
		.on('change', '.T-checkList', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinShop.saveChecking($tab, validator, [tab_id, title, html], false);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinShop.saveChecking($tab, validator, null, true);
		});

		//搜索顶部的事件绑定
		var $searchArea = $tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinShop.checkingList(0, FinShop.checkingId);
		});

		Tools.setDatePicker($searchArea.find('.datepicker'), true);
		FinancialService.updateUnpayMoney($tab, rule);

		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if($that.hasClass('T-see-group')){
				FinShop.unfold($that);
			}else if($that.hasClass('T-view-receipts')){
				FinShop.viewImage($that);
			}else if($that.hasClass('T-payDetails')){
				FinShop.viewOperationDetail(id, 0);
			}else if($that.hasClass('T-view-details')){
				FinShop.viewOperationDetail(id, 1);
			}
		});

		//给全选按钮绑定事件: 未去重
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

		//绑定确定事件
		$tab.find('.T-btn-save').on('click', function(event){
			event.preventDefault();
			FinShop.saveChecking($tab, validator, null, false);
		});
		//绑定取消事件
		$tab.find('.T-btn-close').on('click', function(event){
			event.preventDefault();
			if(!!$tab.data('isEdited')){
				showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function(){
					FinShop.saveCheckData($tab);
				}, function(){
					Tools.closeTab(checkMenuKey);
                	FinShop.getList(FinShop.listPageNo);
				});
			}else{
				Tools.closeTab(checkMenuKey);
                FinShop.getList(FinShop.listPageNo);
			}
		});
	};

	FinShop.viewOperationDetail = function(id, type){
		if (!!id) {
			var method = 'findCheckAccountDetail',
                title = '应付金额明细',
                html = viewAccountTemplate;
            if (!type) {
                method = 'findReciveAccountDetail';
                title = '已付金额明细';
                html = viewReceivedTemplate;
            }
            $.ajax({
                url: KingServices.build_url('financial/bookingAccount', method),
                type: 'post',
                data: {
                    id: id
                },
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.type = type;
                    layer.open({
                        type: 1,
                        title: title,
                        skin: 'layui-layer-rim',
                        area: '1024px',
                        zIndex: 1028,
                        content: html(data),
                        scrollbar: false
                    });
                }
            });
		}
	};

	FinShop.unfold = function($that){
		if($that.data('is-show')){
			$that.html('展开');
			$that.data('is-show', '');
			$that.closest('tr').next().addClass('hide');
		}else{
			$that.html('收起');
			$that.data('is-show', 'true');
			$that.closest('tr').next().removeClass('hide');
		}
	};

	FinShop.viewImage = function($that){
		var WEB_IMG_URL_BIG = FinShop.$checkingTab.find("input[name=WEB_IMG_URL_BIG]").val(),
			WEB_IMG_URL_SMALL = FinShop.$checkingTab.find("input[name=WEB_IMG_URL_SMALL]").val(),
				data = {
	    		"images":[]
    		},
    		str = $that.attr('url'),
    		strs = str.split(",");
    	for(var i = 0; i < strs.length; i ++) {
    		var s = strs[i];
    		if(s != null && s != "" && s.length > 0) {
	    		var image = {
	    			"WEB_IMG_URL_BIG":imgUrl+s,
	    			"WEB_IMG_URL_SMALL":imgUrl+s+"?imageView2/2/w/150",
	    		}
	    		data.images.push(image);
    		}
    	}
    	var $overflow = null;
    	layer.open({
			type : 1,
			title : "单据图片",
			skin : 'layui-layer-rim', // 加上边框
			area : '500px', // 宽高
			zIndex : 1028,
			content : billImagesTemplate(data),
			scrollbar: false, // 推荐禁用浏览器外部滚动条
			success : function() {
				var colorbox_params = {
					photo : true,
	    			rel: 'colorbox',
	    			reposition:true,
	    			scalePhotos:true,
	    			scrolling:false,
	    			previous:'<i class="ace-icon fa fa-arrow-left"></i>',
	    			next:'<i class="ace-icon fa fa-arrow-right"></i>',
	    			close:'&times;',
	    			current:'{current} of {total}',
	    			maxWidth:'100%',
	    			maxHeight:'100%',
	    			onOpen:function(){ 
	    				$overflow = document.body.style.overflow;
	    				document.body.style.overflow = 'hidden';
	    			},
	    			onClosed:function(){
	    				document.body.style.overflow = $overflow;
	    			},
	    			onComplete:function(){
	    				$.colorbox.resize();
	    			}
	    		};
	    		$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
			}
		});
	};

	FinShop.saveChecking = function($tab, tab_array){
		// 表单校验
		var json = FinancialService.checkSaveJson($tab, rule);
		if(json.length > 0){
			$.ajax({
				url : KingServices.build_url('financial/shopAccount', 'checkShopAccount'),
				type : "POST",
				data : {checkAccountList : json}
			}).done(function(data){
				if(showDialog(data)){
					$tab.data('isEdited', false);
	                showMessageDialog($('#confirm-dialog-message'), data.message, function() {
	                    if (!!tabArgs) {
	                        Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
	                        FinShop.checkingList(0);
	                    } else {
	                        Tools.closeTab(checkMenuKey);
	                        FinShop.getList(FinShop.listPageNo);
	                    }
	                });
	            }
			});
		}else{
			showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
		}
	};

	FinShop.settlement = function(id){
		FinShop.$settlementTab = null;
		FinShop.settlementId = id;
		FinShop.settlementList(0, id);
	};

	FinShop.settlementList = function(page, id){
		var args = {
			pageNo : (page || 0),
			shopId : id || FinShop.settlementId,
			startTime: FinShop.$tab.find('.T-search-start-date').val(),
			endTime : FinShop.$tab.find('.T-search-end-date').val()
		}
		if (!!FinShop.$checkingTab) {
			args = {
				pageNo: (page || 0),
				shopId : id || FinShop.settlementId,
				startTime: FinShop.$settlementTab.find('.T-search-start-date').val(),
				endTime : FinShop.$settlementTab.find('.T-search-end-date').val(),
				tripMessage : FinShop.$settlementTab.find('.T-search-trip').val()
			}
		}
		FinShop.settListPageNo = args.pageNo;

		$.ajax({
			url : KingServices.build_url('financial/shopAccount', 'listReciveShopAcccount'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				Tools.addTab(settMenuKey, "购物结算", shopClearingTemplate(data));

				FinShop.$settlementTab = $('#tab-' + settMenuKey + '-content');
				FinShop.sett_init_event(FinShop.$settlementTab);
			}
		});
	};

	FinShop.sett_init_event = function($tab){
		var validator = rule.check($tab);

		$tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE)
		.on('change', '.T-checkList', function(event) {
			event.preventDefault();
			$tab.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinShop.saveSettlement($tab, validator, [tab_id, title, html], false);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinShop.saveSettlement($tab, validator, null, true);
		});

		//搜索顶部的事件绑定
		var $searchArea = $tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinShop.settlementList(0, FinShop.settlementId);
		});

		Tools.setDatePicker($searchArea.find('.datepicker'), true);
		FinancialService.updateUnpayMoney($tab, rule);

		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if($that.hasClass('T-see-group')){
				FinShop.unfold($that);
			}else if($that.hasClass('T-view-receipts')){
				FinShop.viewImage($that);
			}else if($that.hasClass('T-payDetails')){
				FinShop.viewOperationDetail(id, 0);
			}else if($that.hasClass('T-view-details')){
				FinShop.viewOperationDetail(id, 1);
			}
		});

		//给全选按钮绑定事件: 未去重
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

		//绑定确定事件
		$tab.find('.T-btn-save').on('click', function(event){
			event.preventDefault();
			FinShop.saveSettlement($tab, validator, null, false);
		});
		//绑定取消事件
		$tab.find('.T-btn-close').on('click', function(event){
			event.preventDefault();
			if(!!$tab.data('isEdited')){
				showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function(){
					FinShop.saveSettlement($tab);
				}, function(){
					Tools.closeTab(settMenuKey);
                	FinShop.getList(FinShop.listPageNo);
				});
			}else{
				Tools.closeTab(settMenuKey);
                FinShop.getList(FinShop.listPageNo);
			}
		});
	};

	/**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    FinShop.autoFillMoney = function($tab) {
        if (!!$tab && $tab.length) {
            var $autoPayMoney = $tab.find('.T-sumPayMoney');

            var args = {
				ticketId : FinShop.settlementId,
				startDate : $tab.find('.T-search-start-date').val(),
				endDate : $tab.find('.T-search-end-date').val(),
				accountInfo : $tab.find('.T-search-type').val(),
				isAutoPay : 1,
				sumCurrentPayMoney : $tab.find('.T-sumReciveMoney').val()
            };

            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'autoBookingAccount'),
                    type: 'post',
                    data: {searchParam : JSON.stringify(args)},
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        FinShop.payingJson = data.autoPaymentJson;
                        $tab.find('input[name="sumPayMoney"]').val(data.checkedUnPayedMoney);
                        FinShop.setAutoFillEdit($tab, true);
                    }
                });
        }
    };

    FinShop.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        FinShop.getOperationList(0, $tab);

    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    FinShop.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var args = {
                pageNo: pageNo || 0,
				shopId : Ticket.settlementId,
				startTime : $tab.find('.T-search-start-date').val(),
				endTime : $tab.find('.T-search-end-date').val(),
				tripMessage : $tab.find('.T-search-trip').val()
            };

            $.ajax({
                    url : KingServices.build_url('financial/shopAccount', 'listReciveShopAcccount'),
					type : "POST",
					data : {searchParam : JSON.stringify(args)}
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	data.financialTicketList = FinancialService.getTempDate(data.financialTicketList, Ticket.payingJson);
                    	var html = payingTableTemplate(data);
						FinShop.$settlementTab.find('.T-checkList').html(html);

						//给全选按钮绑定事件: 未去重
                        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                        $tab.find('.T-btn-save').data('pageNo', args.pageNo);
						// 绑定翻页组件
						laypage({
						    cont: $tab.find('.T-pagenation'), 
						    pages: data.totalPage, //总页数
						    curr: (data.pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		FinShop.getOperationList(obj.curr -1);
						    	}
						    }
						});	
                    }
                });

        }
    }

	FinShop.saveSettlement = function($tab, tabArgs){
		var json = FinancialService.clearSaveJson($tab, FinShop.payingJson, rule);
		if (json.length) {
			var args = {
                ticketId: FinShop.settlementId,
                sumCurrentPayMoney: $tab.find('.T-sumReciveMoney').val(),
                payType: $tab.find('.T-sumPayType').val(),
                payRemark: $tab.find('.T-sumRemark').val()
			}
            $.ajax({
                    url: KingServices.build_url('account/arrangeTicketFinancial', 'saveAccountSettlement'),
                    type: 'post',
                    data: {
                    	searchParam : JSON.stringify(args),
                    	ticketJson : JSON.stringify(json)
                    },
                })
                .done(function(data) {
                    $tab.data('isEdited', false);
                    FinShop.payingJson = [];
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (!!tabArgs) {
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            FinShop.settlementList(0);
                        } else {
                            Tools.closeTab(clearingTab);
                            FinShop.getList(FinShop.listPageNo);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
	};

	// 暴露方法
	exports.init = FinShop.initModule;
});