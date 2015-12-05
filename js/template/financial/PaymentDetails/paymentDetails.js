/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports){
	var rule = require("./rule"),
		listTemplate = require("./view/list"),
		menuKey = "financial_payment_details";

	var Payment = {
		$tab : false
	};

	/**
	 * 初始化模块
	 */
	Payment.initModule = function(){
		Payment.$tab = null;
		Payment.getList();
	};

	/**
	 * 获取购物账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	Payment.getList = function(page){
		var args = {
			pageNo : (page || 0),
		}
		if (!!Payment.$tab) {
			args = {
				pageNo: (page || 0),
			}
		}
		data = {};
		Tools.addTab(menuKey,"收支明细",listTemplate(data));
		Payment.init_event();
	};

	Payment.init_event = function(){
		Payment.$tab = $('#tab-' + menuKey + '-content');
		var $searchArea = Payment.$tab.find('.T-search-area');
	};

	// 暴露方法
	exports.init = Payment.initModule;
});