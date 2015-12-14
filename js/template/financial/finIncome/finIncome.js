/**
 * Description：财务收款
 * Author：roger.wei
 * Date: 2015-12-8
 * 
 */
define(function(require, exports) {
	var menuKey = 'financial_income',
		listTemplate = require('./view/list'),
		listTableTemplate = require('./view/listTable');

	var FinIncome = {
		currentType: 0,
		moduleKeys: ['financial_Client', 'financial_innerTransfer_in', 'financial_shop', 'financial_replace', 'financial_Other_accounts']
	};

	/**
	 * 初始化页面
	 * @return {[type]} [description]
	 */
	FinIncome.initModule = function() {
		FinIncome.$tab = false;

		var data = FinancialService.getInitDate();
		if (Tools.addTab(menuKey, '财务收款', listTemplate(data))) {
			FinIncome.initEvent();
		}

		FinIncome.getList();
	};

	/**
	 * [getList description]
	 * @return {[type]} [description]
	 */
	FinIncome.getList = function(pageNo) {
		if (FinIncome.$tab) {
			var args = {
				startTime: FinIncome.$tab.find('.T-start').val(),
				endTime: FinIncome.$tab.find('.T-end').val()
			},
				org = FinIncome.$tab.find('.T-org-name').val();

			if (!!org && org != '全部') {
				args.name = org;				
			}
		}

		args.pageNo = pageNo || 0;
		$.ajax(FinIncome.covertArgs(args))
		.done(function(data) {
			if (showDialog(data)) {
				data.list = FinIncome.covertResponse(data);
				FinIncome.$tab.find('.T-list').html(listTableTemplate(data));

				FinIncome.$tab.find('.T-sumItem').html('共计 '+ data.totalCount + ' 条记录');
				// 绑定翻页组件
				laypage({
				    cont: FinIncome.$tab.find('.T-pagenation'),
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				        if (!first) { // 避免死循环，第一次进入，不调用页面方法
				            FinIncome.getList(obj.curr - 1);
				        }
				    }
				});
			}
		});		
	};

	/**
	 * 处理查询参数，适应不同接口的需要
	 * @param  {object} args 页面参数
	 * @return {[type]}      [description]
	 */
	FinIncome.covertArgs = function(args)  {
		var options = {
			method: 'post'
		}, resArgs = {};

		resArgs.pageNo = args.pageNo;

		switch(FinIncome.currentType) {
			case 0:  //客户账务
				options.url = KingServices.build_url('financial/customerAccount', 'listPager');
				resArgs.startTime = args.startTime;
				resArgs.endTime = args.endTime;
				resArgs.fromPartnerAgencyName = args.name;
				break;
			case 1:  //内转转入
				options.url = KingServices.build_url('account/innerTransferIn', 'listInnerTransferIncome');
				resArgs.startAccountTime = args.startTime;
				resArgs.endAccountTime = args.endTime;
				resArgs.businessGroupName = args.name;
				break;
			case 2:  //购物账务
				options.url = KingServices.build_url('financial/shopAccount', 'listPager');
				resArgs.startDate = args.startTime;
				resArgs.endDate = args.endTime;
				resArgs.shopName = args.name;
				break;
			default:  //代订账务
				options.url = KingServices.build_url('financial/bookingAccount', 'listPager');
				resArgs.startTime = args.startTime;
				resArgs.endTime = args.endTime;
				resArgs.travelAgencyName = args.name;
				break;
		}
		
		options.data = resArgs;
		return options;		
	};

	/**
	 * 将不同的接口数据统一处理
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	FinIncome.covertResponse = function(data) {
		var list = [];
		if (!!data) {
			switch(FinIncome.currentType) {
				case 0:  //客户账务
					var src = data.customerAccountList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.fromPartnerAgencyName,
							needPayMoney: tmp.settlementMoney,
							payedMoney: tmp.receiveMoney,
							unPayedMoney: tmp.unReceivedMoney,
							id: tmp.partnerAgencyId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 1:  //内转转入
					var src = data.innerTransferIncomeList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.businessGroupName,
							needPayMoney: tmp.settlementMoney,
							payedMoney: tmp.alreadyIncomeMoney,
							unPayedMoney: tmp.unIncomeMoney,
							id: tmp.businessGroupId
						})
					}

					data.totalPage = data.totalPage;
					data.totalCount = data.recordSize;
					break;
				case 2:  //购物账务
					var src = data.shopAccountList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.shopName,
							needPayMoney: tmp.settlementMoney,
							payedMoney: tmp.reciveMoney,
							unPayedMoney: tmp.unReciveMoney,
							id: tmp.partnerAgencyId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				default:  //代订账务
					var src = data.bookingAccountList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.fromPartnerAgencyName,
							needPayMoney: tmp.settlementMoney,
							payedMoney: tmp.receiveMoney,
							unPayedMoney: tmp.unReceivedMoney,
							id: tmp.partnerAgencyId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
			}
		}
		return list;
	};

	/**
	 * list事件绑定
	 * @return {[type]} [description]
	 */
	FinIncome.initEvent = function() {
		var $tab = $('#tab-'+ menuKey + '-content');

		// 搜索区域
		$tab.find('.T-business-type').on('change', function(event) {
			event.preventDefault();
			FinIncome.currentType = $(this).val()*1;
			FinIncome.$tab.find('.T-org-name').val('');
			FinIncome.getList();
		});

		Tools.setDatePicker($tab.find('.T-datepicker'), true);

		$tab.find('.T-btn-search').on('click', function(event) {
		    event.preventDefault();
		    FinIncome.getList();
		});

		// 收款
		$tab.find('.T-list').on('click', '.T-income-task', function(event) {
			event.preventDefault();
			var $tr = $(this).closest('tr'),
			options = {
				id: $tr.data('id'),
				name: $tr.children('td').eq(0).text(),
				startDate: $tab.find('.T-start').val(),
				endDate: $tab.find('.T-end').val()
			}
			FinIncome.doIncomeTask(options);
		});

		FinIncome.$tab = $tab;
	};

	/**
	 * 执行收款
	 * @param  {int} id 收款记录
	 * @return {[type]}    [description]
	 */
	FinIncome.doIncomeTask = function(options) {
		if (!!options) {
			var moduleKey = FinIncome.moduleKeys[FinIncome.currentType];

			seajs.use(ASSETS_ROOT + modalScripts[moduleKey], function(module){
				module.initIncome(options);
			});
		}
	};

	// 暴露方法
	exports.init = FinIncome.initModule;
});