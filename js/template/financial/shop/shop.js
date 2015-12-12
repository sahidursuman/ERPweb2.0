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
		FinShop.getShopName($searchArea.find('.T-search-name'));
		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id'), name = $that.closest('tr').data('name');
			if ($that.hasClass('T-checking'))  {
				// 对账
				FinShop.accountChecking(id, name);
			} else if ($that.hasClass('T-settlement'))  {
				// 结算
				FinShop.settlement(id, name);
			}
		});
	};

	FinShop.getShopName = function($obj){
		$obj.autocomplete({
			minLength: 0,
		    change: function(event, ui) {
		        if (!ui.item)  {
		            $(this).data('id', '');
		        }
		    },
		    select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on('click', function(){
			if (!$obj.data('ajax')) {  // 避免重复请求
				$.ajax({
					url : KingServices.build_url('financial/shopAccount', 'selectShopName'),
					type : "POST"
				}).done(function(data){
					if(showDialog(data)){
						for(var i=0; i<data.shopList.length; i++){
			                data.shopList[i].value = data.shopList[i].shopName;
			                data.shopList[i].id = data.shopList[i].shopId;
			            }
			            data.shopList.unshift({id:'', value: '全部'});
			            $obj.autocomplete('option', 'source', data.shopList);
			            $obj.autocomplete('search', '');

			            $obj.data('ajax', true);
		        	}
				});
			} else {
		        $obj.autocomplete('search', '');
		    }
		});
	};

	/**
	 * 初始化对账模块
	 * @param  {[int]} id 购物账务ID
	 */
	FinShop.accountChecking = function(id, name){
		FinShop.$checkingTab = null;
		FinShop.checkingId = id;
		FinShop.checkingName = name;
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
		$.ajax({
			url: KingServices.build_url('financial/shopAccount', 'listCheckShopAcccount'),
			type: 'post',
			data: args,
		}).done(function(data){
			if (showDialog(data)) {
				data.name = FinShop.checkingName;
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
			FinShop.saveChecking($tab, [tab_id, title, html]);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinShop.saveChecking($tab);
		});

		//搜索顶部的事件绑定
		var $searchArea = $tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinShop.checkingList(0, FinShop.checkingId);
		});

		$tab.find('.T-checkTr').on('change', function(){
			$(this).data('change', 'true');
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
				FinShop.viewImage($tab, $that.closest('tr').data('images'));
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
			FinShop.saveChecking($tab);
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

	FinShop.viewImage = function($tab, strImage){
		if(!strImage)return;
		var WEB_IMG_URL_BIG = $tab.find(".globalAdd").data('big'),
			WEB_IMG_URL_SMALL = $tab.find(".globalAdd").data('small'),
				data = {
	    		"images":[]
    		},
    		str = strImage,
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

	FinShop.saveChecking = function($tab, tabArgs){
		// 表单校验
		var json = FinancialService.checkSaveJson($tab, rule);
		if(JSON.parse(json).length > 0){
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
		}else if(!json){

		}else{
			showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
		}
	};

	FinShop.settlement = function(id, name){
		FinShop.$settlementTab = null;
		FinShop.settlementId = id;
		FinShop.settlementName = name;
		FinShop.settlementList(0, id);
	};

	FinShop.settlementList = function(page, id){
		var args = {
			pageNo : (page || 0),
			shopId : id || FinShop.settlementId,
			startTime: FinShop.$tab.find('.T-search-start-date').val(),
			endTime : FinShop.$tab.find('.T-search-end-date').val()
		}
		if (!!FinShop.$settlementTab) {
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
				data.name = FinShop.settlementName;
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
			FinShop.saveSettlement($tab, [tab_id, title, html]);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinShop.saveSettlement($tab);
		});

		//搜索顶部的事件绑定
		var $searchArea = $tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinShop.settlementList(0, FinShop.settlementId);
		});
		var $datepicker = $searchArea.find('.datepicker');
		Tools.setDatePicker($datepicker, true);
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
			FinShop.saveSettlement($tab);
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
		$tab.find(".T-btn-autofill").on('click', function(event){
			event.preventDefault();
			if ($(this).hasClass('btn-primary')) {
                if (validator.form()) {
                	FinancialService.autoPayConfirm($datepicker.eq(0).val(), $datepicker.eq(1).val(),function(){
                    	FinShop.autoFillMoney($tab);
                	});
                }
            } else {
                FinShop.payingJson = [];
                FinShop.setAutoFillEdit($tab, false);
            }
		})

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
				shopId : FinShop.settlementId,
				startDate : $tab.find('.T-search-start-date').val(),
				endDate : $tab.find('.T-search-end-date').val(),
				tripMessage : $tab.find('.T-search-trip').val(),
				sumTemporaryIncomeMoney : $tab.find('.T-sumReciveMoney').val()
            };

            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'autoShopAccount'),
                    type: 'post',
                    data: args,
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        FinShop.payingJson = data.autoAccountList;
                        $tab.find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
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
				shopId : FinShop.settlementId,
				startTime : $tab.find('.T-search-start-date').val(),
				endTime : $tab.find('.T-search-end-date').val(),
				tripMessage : $tab.find('.T-search-trip').val()
            };

            $.ajax({
                    url : KingServices.build_url('financial/shopAccount', 'listReciveShopAcccount'),
					type : "POST",
					data : args
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	data.shopAccountList = FinancialService.getTempDate(data.shopAccountList, FinShop.payingJson);
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
                            Tools.closeTab(settMenuKey);
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