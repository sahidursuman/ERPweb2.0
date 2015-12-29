/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports){
	var listTemplate = require("./view/list"),
		listTableTemplate = require("./view/listTable"),
		listSearchTemplate = require("./view/search"),
		addTemplate = require("./view/add"),
		rule = require("./rule"),
		menuKey = "financial_payment_details";

	var Payment = {
		$tab : false,
		total : {}
	};
	/**
	 * 初始化模块
	 */
	Payment.initModule = function(){
		Payment.$tab = null;
		var date = new Date(),
        year = date.getFullYear(),
        month = Tools.addZero2Two(date.getMonth() + 1),
        day = Tools.addZero2Two(date.getDate()),
		args = {
			pageNo : 0,
			endTime : year + "-" + month + "-" + day,
			startTime : year + "-" + month + "-01"
		},
		data = {
			searchParam : args
		};
		Tools.addTab(menuKey, "收支明细", listTemplate(data));
		Payment.$tab = $('#tab-' + menuKey + '-content');
		Payment.getTotal(args);
		Payment.ajaxInit(args);
		Payment.initSearch(args);
	};
	/**
	 * 获取收/付款合计
	 * @param  {object/number} args 参数
	 * @param  {object} $tab $tab
	 */
	Payment.getTotal = function(args, $tab){
		var page = typeof(args) !== "number" ? (args || 0) : (args.pageNo || 0);
		if(!!Payment.$tab){
			args = Payment.getArgs(page);
		}
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findTotal'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)},
			showLoading: false
		}).done(function(data){
			Payment.$tab.find('.T-incomeMoney').html(data.total.incomeMoney);
			Payment.$tab.find('.T-payMoney').html(data.total.payMoney);
			Payment.total = data.total;
		});
	};
	/**
	 * 初始化事件
	 * @param  {object} $tab $tab
	 */
	Payment.init_event = function($tab){
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');
		Tools.setDatePicker($datepicker, true);

		$searchArea.on('click',".T-btn-search",function(event){
			event.preventDefault();
			Payment.getTotal(0);
			Payment.ajaxInit(0);
		})
		.on('click',".T-btn-add",function(event){
			Payment.addPayment();
		});		
	};
	/**
	 * 初始化搜索栏
	 * @param  {object} args 初始化时填充参数
	 */
	Payment.initSearch = function(args){
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findSelectValue'),
			type : "POST",
			showLoading: false
		}).done(function(data){
			data.businessTypes = JSON.parse(data.businessTypes);
			data.costTypes = JSON.parse(data.costTypes);
			data.incomeOrPayTypes = JSON.parse(data.incomeOrPayTypes);
			data.receivableTypes = JSON.parse(data.receivableTypes);
			data.total = Payment.total;
			data.searchParam = args;
			data.payTypeList = ['现金', '银行转账', '网上支付', '支票', '其它'];
			var html = listSearchTemplate(data);
			Payment.$tab.find('.T-search-area').html(html);
			Payment.init_event(Payment.$tab);
		});
	};
	/**
	 * 初始化列表
	 * @param  {object/number} args 请求参数
	 */
	Payment.ajaxInit = function(args){
		var page = typeof(args) === "number" ? (args || 0) : (args.pageNo || 0);
		if(!!Payment.$tab){
			args = Payment.getArgs(page);
		}
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findPager'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		})
		.done(function(data){
			if(showDialog(data)){
				data.result = JSON.parse(data.result);
				var html = listTableTemplate(data);
				Payment.$tab.find('.T-list').html(html);
				// 设置记录条数及页面
                Payment.$tab.find('.T-sumItem').text('共计' + data.searchParam.totalCount + '条记录');
				// 绑定翻页组件
				laypage({
				    cont: Payment.$tab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Payment.ajaxInit(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};
	/**
	 * 获取请求参数
	 * @param  {number} page 当前页
	 */
	Payment.getArgs = function(page){
		var name = Payment.$tab.find('.T-search-unit').val();
		args = {
			pageNo: (page || 0),
			businessTypeId : Payment.$tab.find('.T-search-business').val(),
			moneyType : Payment.$tab.find('#fin-type').val(),
			receivableTypeId : Payment.$tab.find('.T-search-category').val(),
			resourceId : Payment.$tab.find('.T-search-unit').data('id'),
			resourceName : name == "全部" ? "" : name,
			endTime : Payment.$tab.find('.T-search-end-time').val(),
			startTime : Payment.$tab.find('.T-search-start-time').val(),
			payType : Payment.$tab.find('.T-search-payment').val()
		}
		return args;
	};

	Payment.addPayment = function(){
		var html = addTemplate();
		var addGuideLayer = layer.open({
		    type: 1,
		    title:"新增现金日记账",
		    skin: 'layui-layer-rim', //加上边框
		    area: '750px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){
		    	var $container = $(".T-addPayment-container"),
		    		$bankCount = $container.find(".T-choose-bankCount"),
		    		$bankCountList = $container.find(".T-bankCount-list"),
		    		validator = rule.check($container);

		    	Tools.setDatePicker($container.find('.datepicker'));

		    	$bankCount.one("click",function(){
		    		var ListData = [],
		    			listHtml = "";
		    		for(var i=0;i<8;i++){
		    			var json = {
			    			count : "123 456 7890 1234" + i,
			    			leftMoney : "22.00"
			    		};
			    		ListData.push(json);
		    		}
		    		if(ListData != null && ListData.length > 0){
			            for(var j=0;j<ListData.length;j++){
			                listHtml += "<li><div><label class='T-bankCount'>" + ListData[j].count + "</label>" +
									"<label class='T-avilableMoney marginLeft-30'>余额：" + ListData[j].leftMoney + "</label></div></li>";
			            }
			        	$bankCountList.html(listHtml);
			        }
			        
			        $bankCountList.find("li").on("click",function(){
			    		var bankCount = $(this).find('.T-bankCount').text(),
			    			avilableMoney = $(this).find('.T-avilableMoney').text();
			    		$bankCount.find(".T-count").text(bankCount);
			    		$bankCount.find(".T-money").text(avilableMoney);
			    		$bankCountList.trigger("mouseleave");
			    	});
		    	});

		    	$bankCountList.hide();
		    	$container.on("click",".T-choose-bankCount",function(){
		    		$bankCountList.show();
		    	})
		    	.on("mouseleave",".T-choose-bankCount",function(){
		    		$bankCountList.hide(150);
		    	});
		    	
		    	$container.on("click",".T-option",function(){
		    		var $this = $(this);
		    		if($this.hasClass('T-close-payment')){
		    			layer.close(addGuideLayer);
		    		} else if($this.hasClass('T-save-payment')){
		    			if (!validator.form()) { return; }
		    			Payment.submitPayment();
		    		}
		    	});
		    }
		});
	};

	Payment.submitPayment = function(){
		var form = $(".T-addPayment-container .T-form").serialize();
		$.ajax({
			url:KingServices.build_url("account/arrangeRestaurantFinancial","listSumFinancialRestaurant"),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($("#confirm-dialog-message"),data.message,function(){
						$(".T-addPayment-container .T-close-payment").trigger('click');
						Payment.initModule();
					});
				}
			}
		});
	};

	// 暴露方法
	exports.init = Payment.initModule;
});