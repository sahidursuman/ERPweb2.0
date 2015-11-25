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
		var args = {
			pageNo : (page || 0),
			shopId : "",
			year : "",
			month : ""
		}
		if (!!FinShop.$tab) {
			args = {
				pageNo: (page || 0),
				shopId: FinShop.$tab.find('.T-search-name').val(),
				year: FinShop.$tab.find('.T-search-year').val(),
				month : FinShop.$tab.find('.T-search-month').val(),
			}
		}
		$.ajax({
			url: KingServices.build_url('financialShop', 'listFinancialShop'),
			type: 'post',
			data: args,
		}).done(function(data){
			if (showDialog(data)) {
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				
				Tools.addTab(menuKey,"购物账务",listTemplate(data));
				// 绑定事件
				FinShop.init_event();
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
	FinShop.init_event = function(){
		FinShop.$tab = $('#tab-' + menuKey + '-content');
		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = FinShop.$tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			FinShop.getList();
		});

		// 报表内的操作
		FinShop.$tab.find('.T-list').on('click', '.T-action', function(event) {
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
	FinShop.accountChecking = function(id, year, month){
		FinShop.$checkingTab = null;
		FinShop.checkingId = id;
		FinShop.checkingList(0, id, year, month);
	};

	/**
	 * 获取购物账务-对账列表，初始化列表页面
	 * @param  {int} page 页码
	 * @param  {[int]} id 购物账务ID
	 */
	FinShop.checkingList = function(page, id, year, month){
		var args = {
			pageNo : (page || 0),
			shopId : id,
			year: year || FinShop.$tab.find('.T-search-year').val(),
			month : month || FinShop.$tab.find('.T-search-month').val(),
			menuKey : menuKey,
			operation : "view"
		}
		if (!!FinShop.$checkingTab) {
			args = {
				pageNo: (page || 0),
				shopId : id,
				year: year || FinShop.$checkingTab.find('.T-search-year').val(),
				month : month || FinShop.$checkingTab.find('.T-search-month').val(),
				menuKey : menuKey,
				operation : "view"
			}
		}
		$.ajax({
			url: KingServices.build_url('financialShop', 'listShopChecking'),
			type: 'post',
			data: args,
		}).done(function(data){
			if (showDialog(data)) {
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(checkMenuKey,"购物对账",shopCheckingTemplate(data));

				FinShop.check_init_event();
			}
		});
	};

	FinShop.check_init_event = function(){
		FinShop.$checkingTab = $('#tab-' + checkMenuKey + '-content');
		var validator = rule.check($('.shop-checking'));

		FinShop.$checkingTab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE)
		.on('change', function(event) {
			event.preventDefault();
			FinShop.$checkingTab.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinShop.saveChecking(FinShop.$checkingTab, validator, [tab_id, title, html], false);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinShop.saveChecking(FinShop.$checkingTab, validator, null, true);
		});
		//搜索顶部的事件绑定
		var $searchArea = FinShop.$checkingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinShop.checkingList(0, FinShop.checkingId);
		});
		$searchArea.find('.T-btn-export').on('click', function(event){
			event.preventDefault();
			var shopName = $searchArea.find('.T-shop-name').text();
			var year = $searchArea.find('.T-search-year').val();
			var month = $searchArea.find('.T-search-month').val();
			FinShop.exportReport(shopName, year, month);
		});

		// 报表内的操作
		FinShop.$checkingTab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-see-group')){
				FinShop.unfold($that);
			}else if($that.hasClass('T-bill-images')){
				FinShop.viewImage($that);
			}
		});
		FinShop.$checkingTab.find('.T-select-all').on('click', function(event){
			var account = FinShop.$checkingTab.find('.T-list .T-account'),
				$that = $(this);
			if(!!$that.is(':checked')){
				account.each(function(){
					$(this).prop("checked",true);
				});
			}else{
				account.each(function(){
					$(this).prop("checked",false);
				});
			}
		});
		//绑定确定事件
		FinShop.$checkingTab.find('.T-confirm-shop-rs').on('click', function(event){
			event.preventDefault();
			FinShop.saveChecking(FinShop.$checkingTab, validator, null, false);
		});
		//绑定取消事件
		FinShop.$checkingTab.find('.T-shop-close').on('click', function(event){
			event.preventDefault();
			Tools.closeTab(Tools.getTabKey(FinShop.$checkingTab.prop('id')));
		});
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

	FinShop.saveChecking = function($tab, validator, tab_array, isClose){
		// 表单校验
		if (!validator.form()) { 
			return;
		}
		var JsonStr = [],$tr = $tab.find('.T-list tr'),
            oldRealRebateMoney,
            newRealRebateMoney,
            oldRemark,
            newRemark;
        $tr.each(function(i){
 		   var checkStatus = $(this).attr("data-entity-isConfirmAccount");
 		   var consumeStartTime = $(this).attr("data-entity-startTime");
 		   var flag = $(this).find("input[name='isConfirmAccount']").is(":checked");
 		   newRealRebateMoney = $(this).find("input[name='realRebateMoney']").val();
 		   newRemark = $(this).find("input[name='billRemark']").val();
 		   oldRemark = $(this).attr("data-entity-billRemark");
 		   oldRealRebateMoney = $(this).attr("data-entity-rebateMoney");
 		   if(flag){
 			    if(checkStatus == 1){
 				  	//判断是否修改对账
 				    if(oldRealRebateMoney != newRealRebateMoney || oldRemark != newRemark){
 				  		var checkData = {
					  		id:$(this).attr("data-entity-id"),
	 					    shopId:FinShop.checkingId,
	 					    consumeStartTime:consumeStartTime,
	 					    realRebateMoney:newRealRebateMoney,
	 					    billRemark:newRemark,
	 					    isConfirmAccount:1
 				  		}
 				  		JsonStr.push(checkData);
 				  	}
			    }else{
			      	var checkData = {
				  		id:$(this).attr("data-entity-id"),
 					    shopId:FinShop.checkingId,
 					    consumeStartTime:consumeStartTime,
 					    realRebateMoney:newRealRebateMoney,
 					    billRemark:newRemark,
 					    isConfirmAccount:1
 				  	}
 				  	JsonStr.push(checkData);
			    }
 		    }else{
 			    if(checkStatus == 1){
					   var checkData = {
				  		id:$(this).attr("data-entity-id"),
 					    shopId:FinShop.checkingId,
 					    consumeStartTime:consumeStartTime,
 					    realRebateMoney:newRealRebateMoney,
 					    billRemark:newRemark,
 					    isConfirmAccount:0
 				  	}
     			    JsonStr.push(checkData);
 			    }
 		    }
	    });
		if(JsonStr.length == 0){
 		    showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
 		    return;
 	    }

 	    JsonStr = JSON.stringify(JsonStr);
 	    $.ajax({
 	    	url : KingServices.build_url('financialShop', 'updateShopChecking'),
 	    	type:"POST",
 	    	data : {financialShopListStr : encodeURIComponent(JsonStr), menuKey : menuKey, operation : 'update'}
 	    }).done(function(data){
 	    	if(showDialog(data)){
 	    		showMessageDialog($( "#confirm-dialog-message" ),data.message);
 	    		if(!!isClose){
 	    			Tools.closeTab(Tools.getTabKey($tab.prop('id')));
 	    			FinShop.getList(FinShop.listPageNo);
 	    		}else{
 	    			FinShop.checkingList(0, FinShop.checkingId);
 	    		}
 	    	}
 	    });
	};

	FinShop.settlement = function(id){
		FinShop.$settlementTab = null;
		FinShop.settlementId = id;
		FinShop.settlementList(0, id);
	};

	FinShop.settlementList = function(page, id){
		var args = {
			pageNo : (page || 0),
			shopId : id,
			year: FinShop.$tab.find('.T-search-year').val(),
			start_month : 1,
			end_month : 12,
			menuKey : menuKey,
			operation : "view"
		}
		if(!!FinShop.$settlementTab){
			args = {
				pageNo : (page || 0),
				shopId : id,
				year: FinShop.$settlementTab.find('.T-search-year').val(),
				start_month : FinShop.$settlementTab.find('.T-search-start-month').val(),
				end_month : FinShop.$settlementTab.find('.T-search-end-month').val(),
				menuKey : menuKey,
				operation : "view"
			}
		}
		FinShop.settListPageNo = args.pageNo;

		$.ajax({
			url : KingServices.build_url('financialShop', 'listShopSettlement'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				var validator = null;
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(settMenuKey, "购物结算", shopClearingTemplate(data));

				FinShop.sett_init_event();
			}
		});
	};

	FinShop.sett_init_event = function(){
		FinShop.$settlementTab = $('#tab-' + settMenuKey + '-content');

		//搜索顶部的事件绑定
		var $searchArea = FinShop.$settlementTab.find('.T-search-area');

		$searchArea.find('.T-btn-search').on('click', function(event){
			FinShop.settlementList(0, FinShop.settlementId);
		});
		FinShop.$settlementTab.find('.T-records').on('click', function(event){
			FinShop.records();
		});
		FinShop.$settlementTab.find('.T-list').on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-save')){
				FinShop.saveSettlement($that, $that.data('entity-id'));
			}else if($that.hasClass('T-checkDetail')){
				FinShop.accountChecking(FinShop.settlementId, $that.data('entity-year'), $that.data('entity-month'));
			}
		});
	};

	FinShop.records = function(){
		$.ajax({
			url : KingServices.build_url('financialShop', 'listFinancialShopSettlementRecord'),
			type : 'POST',
			data : {enuKey : menuKey, operation : 'view', shopId : FinShop.settlementId}
		}).done(function(data){
			if(showDialog(data)){
				if(data.financialShopSettlementRecordList.length == 0){
        			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
        		}else{
        			var html = shopRecords(data);
		    		var blanceRecordsTemplateLayer = layer.open({
		    			type: 1,
					    title:"操作记录",
					    skin: 'layui-layer-rim', //加上边框
					    area: '60%', //宽高
					    zIndex:1030,
					    content: html,
					    scrollbar: false, // 推荐禁用浏览器外部滚动条
					    success: function(){}
		    		});
        		}
			}
		});
	};

	FinShop.saveSettlement = function($that, id){
		var $tr = $that.closest('tr'),
		payMoney = $tr.find('input[name=payMoney]').val(),
		payType = $tr.find("select[name='payType'] :selected").text(),
		remark = $tr.find(" input[name='remark']").val();
		$.ajax({
			url : KingServices.build_url('financialShop', 'saveFinancialShopSettlement'),
			type : 'POST',
			data : {id : id, payMoney : payMoney, payType : payType, remark : remark}
		}).done(function(data){
			if(showDialog(data)){
				showMessageDialog($( "#confirm-dialog-message" ),data.message);
				FinShop.settlementList(FinShop.settListPageNo, FinShop.settlementId);
			}
		});
	};

	/**
	 * 导出报表
	 * @param  {string} shopName 购物店名
	 * @param  {string} year     年份
	 * @param  {string} month    月份
	 */
	FinShop.exportReport = function(shopName, year, month){
		var url = APP_ROOT+"back/export.do?method=shop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&shopId="+FinShop.checkingId+"&shopName="+shopName+"&year="+year+"&month="+month+"&sortType=auto";
	    exportXLS(url);
	};

	// 暴露方法
	exports.init = FinShop.initModule;
});