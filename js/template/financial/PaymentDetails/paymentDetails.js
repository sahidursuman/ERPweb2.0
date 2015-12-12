/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports){
	var rule = require("./rule"),
		listTemplate = require("./view/list"),
		listTableTemplate = require("./view/listTable"),
		listSearchTemplate = require("./view/search"),
		menuKey = "financial_payment_details";

	var Payment = {
		$tab : false,
		list : {},
		total : {},
		isList : false,
		isTotal : false,
		isSelect : false
	};

	/**
	 * 初始化模块
	 */
	Payment.initModule = function(){
		Payment.$tab = null;
		Payment.isList = Payment.isTotal = Payment.isSelect = false;
		Payment.getList();
	};

	/**
	 * 获取购物账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	Payment.getList = function(page){
		Payment.isList = Payment.isTotal = false;
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
			var name = Payment.$tab.find('.T-search-unit').val();
			args = {
				pageNo: (page || 0),
				businessTypeId : Payment.$tab.find('.T-search-business').val(),
				costTypeId : Payment.$tab.find('.T-search-cost').val(),
				incomeOrPayTypeId : Payment.$tab.find('.T-search-type').val(),
				receivableTypeId : Payment.$tab.find('.T-search-category').val(),
				resourceId : Payment.$tab.find('.T-search-unit').data('id'),
				resourceName : name == "全部" ? "" : name,
				endTime : Payment.$tab.find('.T-search-end-time').val(),
				startTime : Payment.$tab.find('.T-search-start-time').val(),
				payType : Payment.$tab.find('.T-search-payment').val()
			}
		}
		Payment.globalLoadingLayer = openLoadingLayer();
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findTotal'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)},
			showLoading: false
		}).done(function(data){
			Payment.total = data.total;
			data.searchParam = args;
			Payment.isTotal = true;
			Payment.closeLayer();
			if(!Payment.$tab || !Payment.$tab.data('ajax')){
				Tools.addTab(menuKey, "收支明细", listTemplate(data));
			}else{
				Payment.$tab.find('.T-incomeMoney').html(data.total.incomeMoney);
				Payment.$tab.find('.T-payMoney').html(data.total.payMoney);
			}
			Payment.$tab = $('#tab-' + menuKey + '-content');
			Payment.$tab.data('ajax', 'true');
			Payment.ajaxInit(0, args, Payment.$tab);
		});
		Payment.initSearch(args);
	};

	Payment.init_event = function($tab){
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');
		Tools.setDatePicker($datepicker, true);
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			Payment.getList(0);
		})
		Payment.chooseUnit($searchArea.find('.T-search-unit'));
		
	};

	Payment.initSearch = function(args){
		if(!Payment.$tab || !Payment.$tab.data('ajax')){
			$.ajax({
				url : KingServices.build_url('financialIncomeOrPay', 'findSelectValue'),
				type : "POST",
				showLoading: false
			}).done(function(data){
				data.businessTypes = JSON.parse(data.businessTypes);
				data.costTypes = JSON.parse(data.costTypes);
				data.incomeOrPayTypes = JSON.parse(data.incomeOrPayTypes);
				data.receivableTypes = JSON.parse(data.receivableTypes);
				data.searchParam = args;
				Payment.list.units = data.units;

				Payment.isSelect = true;

				data.total = Payment.total;
				data.payTypeList = ['现金', '银行转账', '网上支付', '支票', '其它'];
				
				var html = listSearchTemplate(data);
				Payment.$tab.find('.T-search-area').html(html);
				Payment.init_event(Payment.$tab);
			});
		}
	};
	Payment.ajaxInit = function(page, args, $tab){
		args.pageNo = page || 0;
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findPager'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)},
			showLoading: false
		})
		.done(function(data){
			if(showDialog(data)){
				data.result = JSON.parse(data.result);
				var html = listTableTemplate(data);
				$tab.find('.T-list').html(html);
				// 设置记录条数及页面
                $tab.find('.T-sumItem').text('共计' + data.searchParam.totalCount + '条记录');
                Payment.isList = true;
                Payment.closeLayer();
				// 绑定翻页组件
				laypage({
				    cont: $tab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Payment.ajaxInit(obj.curr -1, args, $tab);
				    	}
				    }
				});	
			}
		});
	};

	Payment.chooseUnit = function($obj){
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
			var data = Payment.list.units;
			for(var i=0; i<data.length; i++){
                data[i].value = data[i].name;
                data[i].id = data[i].resourceId;
            }
            data.unshift({id:'', value: '全部'});
            $obj.autocomplete('option', 'source', data);
            $obj.autocomplete('search', '');
		});
	};

	Payment.closeLayer = function(){
        if(Payment.isList && Payment.isTotal)
        {
			layer.close(Payment.globalLoadingLayer);
        }
	}
	// 暴露方法
	exports.init = Payment.initModule;
});