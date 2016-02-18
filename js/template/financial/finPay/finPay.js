/**
 * Description：财务付款
 * Author：roger.wei
 * Date: 2015-12-8
 * 
 */
define(function(require, exports) {
	var menuKey = 'financial_pay',
		listTemplate = require('./view/list'),
		listTableTemplate = require('./view/listTable');

	var FinPay = {
		currentType: 0,
		moduleKeys: ['financial_innerTransfer_out', 'financial_transfer', 'financial_restaurant', 'financial_rummery', 'financial_busCompany',
					'financial_ticket', 'financial_scenic', 'financial_self', 'financial_insure', 'financial_Other_accounts','financial_guide']
	};

	/**
	 * 初始化页面
	 * @return {[type]} [description]
	 */
	FinPay.initModule = function() {
		FinPay.$tab = false;

		var data = FinancialService.getInitDate();
		if (Tools.addTab(menuKey, '财务付款', listTemplate(data))) {
			FinPay.initEvent();
		}

		FinPay.getList();
	};

	/**
	 * [getList description]
	 * @return {[type]} [description]
	 */
	FinPay.getList = function(pageNo) {
		if (FinPay.$tab) {
			var args = {
				startDate: FinPay.$tab.find('.T-start').val(),
				endDate: FinPay.$tab.find('.T-end').val()
			},
			org = FinPay.$tab.find('.T-org-name').val();

			if (!!org && org != '全部') {
				args.name = org;				
			}
		}

		args.pageNo = pageNo || 0;
		$.ajax(FinPay.covertArgs(args))
		.done(function(data) {
			if (showDialog(data)) {
				data = FinPay.covertResponse(data);
				data.currentType = FinPay.currentType;
				FinPay.$tab.find('.T-list').html(listTableTemplate(data));

				FinPay.$tab.find('.T-sumItem').html('共计 '+ data.totalCount + ' 条记录');
				// 绑定翻页组件
				laypage({
				    cont: FinPay.$tab.find('.T-pagenation'),
				    pages: data.totalPage, //总页数
				    curr: (args.pageNo + 1),
				    jump: function(obj, first) {
				        if (!first) { // 避免死循环，第一次进入，不调用页面方法
				            FinPay.getList(obj.curr - 1);
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
	FinPay.covertArgs = function(args)  {
		var options = {
			method: 'post'
		}, resArgs = {}, beJson = true;

		resArgs.pageNo = args.pageNo;

		switch(FinPay.currentType) {
			case 0:  //内转转出账务
				options.url = KingServices.build_url('account/innerTransferOutFinancial', 'listSumFinancialInnerTransferOut');
				resArgs.toBusinessGroupName = args.name;
				beJson = false;
				break;
			case 1:  //外转转出账务
				options.url = KingServices.build_url('account/financialTransfer', 'listSumTransfer');
				resArgs.partnerAgencyName = args.name;
				break;
			case 2:  //餐厅账务
				options.url = KingServices.build_url('account/arrangeRestaurantFinancial', 'listSumFinancialRestaurant');
				resArgs.restaurantName = args.name;
				break;
			case 3:  //酒店账务
				options.url = KingServices.build_url('account/financialHotel', 'listSumFinancialHotel');
				resArgs.startTime = args.startDate;
				resArgs.endTime = args.endDate
				resArgs.hotelName = args.name;
				break;
			case 4:  //车队账务
				options.url = KingServices.build_url('account/financialBusCompany', 'listSumFinancialBusCompany');
				resArgs.startTime = args.startDate;
				resArgs.endTime = args.endDate;
				resArgs.busCompanyName = args.name;
				break;
			case 5:  //票务账务
				options.url = KingServices.build_url('account/arrangeTicketFinancial', 'listSumFinancialTicket');
				resArgs.ticketName = args.name;
				break;
			case 6:  //景区账务
				options.url = KingServices.build_url('financial/financialScenic', 'listSumFinancialScenic');
				resArgs.scenicName = args.name;
				break;
			case 7:  //自费账务
				options.url = KingServices.build_url('account/selfPayFinancial', 'listFinancialSummaryOfSelfPay');
				resArgs.startTime = args.startDate;
				resArgs.endTime = args.endDate;
				resArgs.selfPayName = args.name;
				beJson = false;
				break;
			case 8:  //保险账务
				options.url = KingServices.build_url('account/insuranceFinancial', 'listSumFinancialInsurance');
				resArgs.insuranceName = args.name;
				break;

			case 9:  //其它账务
				options.url = KingServices.build_url('account/arrangeOtherFinancial', 'listFinancialOther');
				resArgs.name = args.name;

				beJson = false;
				break;
			case 10:  //导游账务
				options.url = KingServices.build_url('account/guideFinancial', 'listSumFinancialGuide');
				resArgs.guideName = args.name;
				beJson = false;
				break;
			default:
				break;
		}
		
		resArgs.startDate = args.startDate;
		resArgs.endDate = args.endDate;
		if (beJson) {
			options.data = {searchParam: JSON.stringify(resArgs)};
		} else {
			options.data = resArgs;
		}

		return options;		
	};

	/**
	 * 将不同的接口数据统一处理
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	FinPay.covertResponse = function(data) {
		var list = [];
		if (!!data) {
			switch(FinPay.currentType) {
				case 0:  //内转转出账务
					var src = data.list;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.businessGroupName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.businessGroupId
						})
					}

					data.totalPage = data.totalPage;
					data.totalCount = data.recordSize;
					break;
					break;
				case 1:  //外转转出账务
					var src = data.financialTransferList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.partnerAgencyName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.partnerAgencyId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 2:  //餐厅账务
					var src = data.financialRestaurantList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.restaurantName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.restaurantId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 3:  //酒店账务
					var src = data.financialHotelList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.hotelName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.hotelId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 4:  //车队账务
					var src = data.financialBusCompanyList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.busCompanyName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.busCompanyId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 5:  //票务账务
					var src = data.financialTicketList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.ticketName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.ticketId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 6:  //景区账务
					var src = data.financialScenicList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.scenicName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.scenicId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 7:  //自费账务
					var src = data.list;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.selfPayName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.id
						})
					}

					data.totalPage = data.totalPage;
					data.totalCount = data.recordSize;
					break;
				case 8:  //保险账务
					var src = data.financialInsuranceList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.insuranceName,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.insuranceId
						})
					}

					data.totalPage = data.searchParam.totalPage;
					data.totalCount = data.searchParam.recordSize;
					break;
				case 9:  //其它账务 9
					var src = data.financialOtherList;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.name,
							needPayMoney: tmp.sumNeedPayMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: ''
						})
					}

					data.totalPage = data.totalPage;
					data.totalCount = data.recordSize;
					break;
				case 10:  //导游账务 10
					var src = data.list;
					for (var i = 0, len = src.length, tmp; i < len; i++) {
						tmp = src[i];

						list.push({
							orgName: tmp.realname,
							needPayMoney: tmp.sumSettlementMoney,
							payedMoney: tmp.sumPayedMoney,
							unPayedMoney: tmp.sumUnPayedMoney,
							id: tmp.guideId
						})
					}

					data.totalPage = data.totalPage;
					data.totalCount = data.recordSize;
					break;
			}
		}

		data.list = list;
		return data;
	};

	/**
	 * list事件绑定
	 * @return {[type]} [description]
	 */
	FinPay.initEvent = function() {
		var $tab = $('#tab-'+ menuKey + '-content');

		// 搜索区域
		$tab.find('.T-business-type').on('change', function(event) {
			event.preventDefault();
			FinPay.currentType = $(this).val()*1;
			FinPay.$tab.find('.T-org-name').val('');
			FinPay.getList();
		});

		Tools.setDatePicker($tab.find('.T-datepicker'), true);
		$tab.find('.T-start').on('changeDate', function(event) {
		    event.preventDefault();
		    var start = $(this).val(),
		        $end = $tab.find('.T-end').datepicker('setStartDate', start);

		    if ($end.val() < start) {
		        $end.val(start);
		    }
		}).trigger('changeDate');


		$tab.find('.T-btn-search').on('click', function(event) {
		    event.preventDefault();
		    FinPay.getList();
		});

		// 收款
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $tr = $(this).closest('tr'),
			options = {
				id: $tr.data('id'),
				name: $tr.children('td').eq(0).text(),
				startDate: $tab.find('.T-start').val(),
				endDate: $tab.find('.T-end').val()
			}
			if($(this).hasClass('T-pay-borrow')){
				options.borrow = true;
			}
			FinPay.doIncomeTask(options);
		});

		FinPay.$tab = $tab;
	};

	/**
	 * 执行收款
	 * @param  {int} id 收款记录
	 * @return {[type]}    [description]
	 */
	FinPay.doIncomeTask = function(options) {
		if (!!options) {
			var moduleKey = FinPay.moduleKeys[FinPay.currentType];

			seajs.use(ASSETS_ROOT + modalScripts[moduleKey], function(module){
				module.initPay(options);
			});
		}
	};

	// 暴露方法
	exports.init = FinPay.initModule;
});