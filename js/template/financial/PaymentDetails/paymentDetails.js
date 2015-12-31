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
	Payment.initModule = function(bankId,bankNo){
		Payment.$tab = null;
		var date = new Date(),
        year = date.getFullYear(),
        month = Tools.addZero2Two(date.getMonth() + 1),
        day = Tools.addZero2Two(date.getDate()),
		args = {
			pageNo : 0,
			endTime : year + "-" + month + "-" + day,
			startTime : year + "-" + month + "-01",
			bankId : bankId ? bankId : "",
			payType : bankId ? 1 : ""
		},
		data = {
			searchParam : args
		};
		Tools.addTab(menuKey, "现金日记", listTemplate(data));
		Payment.$tab = $('#tab-' + menuKey + '-content');
		FinancialService.initPayEvent(Payment.$tab);
		Payment.getTotal(args);
		Payment.ajaxInit(args);
		Payment.initSearch(args,bankNo);
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

		Payment.getSubjectList($tab);
		FinancialService.initPayEvent($tab);	
	};
	/**
	 * 初始化搜索栏
	 * @param  {object} args 初始化时填充参数
	 */
	Payment.initSearch = function(args,bankNo){
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
			data.payTypeList = ['现金', '银行转账', '支票', '其它'];
			console.log(data);
			var html = listSearchTemplate(data);
			Payment.$tab.find('.T-search-area').html(html);
			Payment.init_event(Payment.$tab);
			if(bankNo){
				Payment.$tab.find(".T-card-number").val(bankNo);
				Payment.$tab.find(".T-card-number").closest('div').removeClass('hidden');
			}
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
		var name = Payment.$tab.find('.T-resourceName').val();
		args = {
			pageNo: (page || 0),
			businessTypeId : Payment.$tab.find('.T-search-business').val(),
			moneyType : Payment.$tab.find('.T-moneyType').val(),
			receivableTypeId : Payment.$tab.find('.T-search-category').val(),
			// resourceId : Payment.$tab.find('.T-search-unit').data('id'),
			resourceName : name,
			endTime : Payment.$tab.find('.T-search-end-time').val(),
			startTime : Payment.$tab.find('.T-search-start-time').val(),
			payType : Payment.$tab.find('.T-search-payment').val(),
			bankId : Payment.$tab.find('.T-bankId').val(),
			subjectId : Payment.$tab.find('.T-search-subject').val(),
			voucher : Payment.$tab.find('.T-search-voucher').val()
		}
		return args;
	};

	Payment.addPayment = function(){
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","addIncomeorPay"),
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = addTemplate(data);
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
					    	FinancialService.initPayEvent($container.find('.T-bank-area'));//bankNum
					    	var bankNum = $container.find('.bankNum');
					    	// $container.find('select').on('change', function(event) {
						    //     event.preventDefault();
						    //     var val = $(this).val();
						        
						    //     bankNum.toggleClass('hidden', val != 1);

						    // }).trigger('change');
					    	$container.find('.datepicker').datetimepicker({
					    		autoclose: true,
						        todayHighlight: true,
						        format: 'L',
						        language: 'zh-CN'
					    	});

					    	$bankCountList.find("li").on("click",function(){
					    		var bankId = $(this).data("id"),
					    			bankCount = $(this).find('.T-bankCount').text(),
					    			avilableMoney = $(this).find('.T-avilableMoney').text();
					    		$bankCount.find("input[name=bankId]").val(bankId);
					    		$bankCount.find(".T-count").text(bankCount);
					    		$bankCount.find(".T-money").text(avilableMoney);
					    		$bankCountList.trigger("mouseleave");
					    	});

					    	$bankCountList.hide();
					    	$container.on("click",".T-choose-bankCount",function(){
					    		$bankCountList.show();
					    	})
					    	.on("mouseleave",".T-choose-bankCount",function(){
					    		$bankCountList.hide(150);
					    	})
					    	.on("click",".T-option",function(){
					    		var $this = $(this);
					    		if($this.hasClass('T-close-payment')){
					    			layer.close(addGuideLayer);
					    		} else if($this.hasClass('T-save-payment')){
					    			if (!validator.form()) { return; }
					    			Payment.submitPayment();
					    		}
					    	})
					    	.on("click",".T-subject",function(){
					    		var subjectName = $(this).find("option:selected").text();
					    		$container.find('input[name=subjectName]').val(subjectName);
					    	});
					    }
					});
				}
			}
		});
		
	};

	Payment.submitPayment = function(){
		var form = $(".T-addPayment-container .T-form").serializeJson();
		form.bankId = form['card-id'];
		delete(form['card-id']);
		delete(form['card-number']);
		
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","saveIncomeorPay"),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($("#confirm-dialog-message"),data.message,function(){
						$(".T-addPayment-container .T-close-payment").trigger('click');
						Payment.initModule(3,"账户：2,余额：13");
					});
				}
			}
		});
	};

	Payment.getSubjectList = function($tab){
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'getSubjectList'),
			type : "POST",
			showLoading: false
		}).done(function(data){
			var subjectList = data.subjectList,
				listHtml = "";
			for(var i = 0;i < subjectList.length;i++){
				listHtml += "<option value='" + subjectList[i].id + "'>" + subjectList[i].subjectName + "</option>";
			}
			$tab.find(".T-search-subject").append(listHtml);
		});
	}

	// 暴露方法
	exports.init = Payment.initModule;
});