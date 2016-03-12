/**
 * 财务管理--导游借款
 *
 * by 廖佳玲
 */
define(function(require, exports){
	var listTemplate = require("./view/list"),
		menuKey = "financial_guide_borrow_money";

	var guideBorrow = {
		$tab : false
	};
	/**
	 * 初始化模块
	 */
	guideBorrow.initModule = function(){
		var args = FinancialService.getInitDate();
		args.pageNo = 0;
		guideBorrow.getList(args);
	};
	guideBorrow.getList = function(args,$tab){
		if(!!$tab){
			args.pageNo = args.pageNo || 0;
			args.guideId = $tab.find('input[name=guideId]');
			args.guideName = $tab.find('input[name=guideName]');
			args.startDate = $tab.find('input[name=startDate]');
			args.endDate = $tab.find('input[name=endDate]');
			args.accountStatus = $tab.find(".T-borrow-status").find("button").data("value");
		}
		args.guideName = (args.guideName == "全部") ? "" : args.guideName;
		var data = {};
		data.searchParam = args;
		Tools.addTab(menuKey, "导游借款", listTemplate(data));
		guideBorrow.$tab = $("#tab-" + menuKey + "-content");

		// $.ajax({
		// 	url: '/path/to/file',
		// 	type: 'POST)',
		// 	data: {param1: 'value1'},
		// })
		// .done(function(data) {
		// 	if(showDialog(data)){

		// 	}
		// });
		guideBorrow.initList(guideBorrow.$tab);
	};

	guideBorrow.initList = function($tab){
		$tab.on('click', '.T-btn-search', function(event) {
			event.preventDefault();
			guideBorrow.getList({pageNo : 0},$tab);
		});
		//状态框选择事件
        $tab.on('click','.T-borrow-status a',function(event){
            event.preventDefault();
            var $that = $(this);
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            guideBorrow.getList({pageNo : 0},$tab);
        });

        $tab.on("click",'.T-borrow',function(){
			var options = {
				id: 67,
				name: "邱袁",
				startDate: "2016-02-11",
				endDate: "2016-04-11",
				accountStatus : 2,
				borrow : true
			}
			seajs.use(ASSETS_ROOT + modalScripts.financial_guide, function(module){
				module.initPay(options);
			});
		});
	};

	// 暴露方法
	exports.init = guideBorrow.initModule;
});