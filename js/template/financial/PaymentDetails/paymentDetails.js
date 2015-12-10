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
		var date = new Date(),
        year = date.getFullYear(),
        month = Tools.addZero2Two(date.getMonth() + 1),
        day = Tools.addZero2Two(date.getDate()),
        args = {
			pageNo : (page || 0),
			endTime : year + "-" + month + "-" + day,
			startTime : year + "-" + month + "-01"
		}
		if (!!Payment.$tab) {
			args = {
				pageNo: (page || 0),
			}
		}
		
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findSelectValue'),
			type : "POST",
		}).done(function(selectData){


			$.ajax({
				url : KingServices.build_url('financialIncomeOrPay', 'findPager'),
				type : "POST",
				data : args
			})
			.done(function(data){
				if(showDialog(data)){
					data.selectData = selectData;
					Tools.addTab(menuKey,"收支明细",listTemplate(data));
					Payment.$tab = $('#tab-' + menuKey + '-content');
					Payment.init_event(Payment.$tab);
				}
			});
		});
	};

	Payment.init_event = function($tab){
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');
		FinancialService.setDatePicker($datepicker);
	};

	// 暴露方法
	exports.init = Payment.initModule;
});