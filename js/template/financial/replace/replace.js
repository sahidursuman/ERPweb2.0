/**
 * 财务管理--代订账务
 *
 * by David Bear 2015-11-27
 */
define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_replace",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		replaceChecking = require("./view/replaceChecking"),
		replaceClearing = require("./view/replaceClearing"),
		blanceRecords = require("./view/replaceRecords"),
		checkMenuKey = menuKey+"-checking",
		blanceMenuKey = menuKey+"-blance";

	var Replace = {
		$tab : false
	};
	/**
	 * 初始化模块
	 */
	Replace.initModule = function(){
		Replace.$tab = null;
		Replace.getList(0);
	};

	/**
	 * 获取代订账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	Replace.getList = function(page){
		var args= {
			pageNo : (page || 0),
			travelAgencyName : '',
			year : '',
			month : ''
		};
		if(!!Replace.$tab){
			args= {
				pageNo : (page || 0),
				travelAgencyName : Replace.$tab.find('.T-search-customer').val(),
				year : Replace.$tab.find('.T-search-start-date').val(),
				month : Replace.$tab.find('.T-search-end-date').val()
			};
		}
		$.ajax({
			url : KingServices.build_url('financial/financialBookingOrder', 'listSumFcBookingOrder'),
			type: 'post',
			data: args
		}).done(function(data){
			if(showDialog(data)){
				console.log(data);
				//data.travelAgencyNameListNew = JSON.parse(data.partnerAgencyNameListNew);
				Tools.addTab(menuKey, "代订账务", listTemplate(data));
				//绑定事件
				Replace.init_event();
				// 缓存页面
				Replace.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: Replace.$tab.find('.T-pagenation'), 
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
	Replace.init_event = function(){
		Replace.$tab = $('#tab-' + menuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = Replace.$tab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Replace.getList();
		});
		// 报表内的操作
		Replace.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-checking'))  {
				// 对账
				Replace.checking(id);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Replace.balance(id);
			}
		});
	};
	/**
	 * 对账
	 * @param  {int} id 客户ID
	 */
	Replace.checking = function(id){
		Replace.$checkingTab = null; 
		Replace.checkingId = id;
		Replace.checkingList(0, id);
	};

	Replace.checkingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			partnerAgencyId : id
		};
		var data = {};
		Tools.addTab(checkMenuKey, "代订对账", replaceChecking(data));
/*
		$.ajax({
			url : KingServices.build_url('financial/financialBookingOrder', 'listFcBookingOrder'),
			type: 'post',
			data: args
		}).done(function(data){
			if (showDialog(data)) {
				Tools.addTab(checkMenuKey, "代订对账", replaceChecking(data));
			}
		});*/
	};

	Replace.balance = function(id){
		Replace.$balanceTab = null;
		Replace.balanceId = id;
		Replace.balanceList(0, id);
	}


	Replace.balanceList = function(page, id){
		var args = {
			pageNo : (page || 0),
			partnerAgencyId : id
		};
		var data = {};
		Tools.addTab(blanceMenuKey, "代订结算", replaceClearing(data));
	};

	exports.init = Replace.initModule;
});