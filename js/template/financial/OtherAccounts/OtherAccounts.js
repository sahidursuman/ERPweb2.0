define(function(require,exports){
	var menuKey = "financial_Other_accounts",
	listTemplate = require("./view/list"),
	AccountsCheckingTemplate = require("./view/AccountsChecking"),
	AccountsPaymentTemplate = require("./view/AccountsPayment"),
	lookDetailTemplate = require("./view/lookDetail"),
	viewhandleTemplate = require("./view/viewhandle"),
	ViewAmountPaidTemplate = require("./view/ViewAmountPaid"),
	viewOrderDetailTemplate = require("./view/viewOrderDetail"),
	checkTabId = menuKey+"-checking";
	var  OtherAccounts={

	};

		OtherAccounts.listFinancialOtherAccounts = function(page,OtherAccountsID,year,month){
			// $.ajax({
			// 	url: "",
			// 	type: 'POST',
			// 	dataType: "",
			// 	data: "安安",
			// 	dataType:'json',
			// 	beforeSend:function(){
			// 		globalLoadingLayer = openLoadingLayer();
			// 	}
					var html = listTemplate();
						Tools.addTab(menuKey,"其他账务",html);
					// 对账		
					$(".T-other").find('.T-checking').click(function(event) {
						OtherAccounts.AccountsChecking($(this).data('id'));
					});
					// 付款
					$(".T-other").find('.T-payment').click(function(event) {
						OtherAccounts.AccountsPayment($(this).data('id'));
					});


			// })
			
			// 对账
		OtherAccounts.AccountsChecking = function(){
			var html = AccountsCheckingTemplate();
			Tools.addTab(checkTabId,"其他对账",html);
			var $checkTabId = $("#tab-"+checkTabId+"-content");
			// 查看已付金额明细
			$(".T-Accounts").find('.T-lookDetail').click(function(event) {
				event.preventDefault();
				/* Act on the event */
				OtherAccounts.lookDetail();
			});

			//应付金额明细
			$(".T-Accounts").find('.T-viewhandle').click(function(event) {
				event.preventDefault();
				/* Act on the event */
				OtherAccounts.viewhandle();
			});
			
			//时间控件
			var $container = $(".T-Accounts");
			$container.find("input[name=joinTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			//关闭页面事件
	        $container.find(".T-closeTab").click(function(){
	            closeTab(checkTabId);
	        });
			}	
			//付款
		OtherAccounts.AccountsPayment = function(){
			var html = AccountsPaymentTemplate();
			Tools.addTab("-payment","其他付款",html);

			//已付付金额明细
			$(".T-AccountsPayment").find('.T-ViewAmountPaid').click(function(event) {
				event.preventDefault();
				/* Act on the event */
				OtherAccounts.ViewAmountPaid();
			});
			//应付金额明细
			$(".T-AccountsPayment").find('.T-viewPaid').click(function(event) {
				event.preventDefault();
				/* Act on the event */
				OtherAccounts.viewOrderDetail();
			});
									//时间控件
			var $container = $(".T-AccountsPayment");
			$container.find("input[name=joinTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		}

			// // 查看已付金额a-1
		OtherAccounts.lookDetail = function(){
				var html = lookDetailTemplate();
				var lookDetailLayer = layer.open({
				    type: 1,
				    title:"已付金额明细",
				    skin: 'layui-layer-rim', //加上边框
				    area: '55%', //宽高
				    zIndex:1028,
				    content: html,
				    scrollbar: false,

				    });
		}
		//应付金额明细a-2
		OtherAccounts.viewhandle = function(){
				var html = viewhandleTemplate();
				var lookDetailLayer = layer.open({
				    type: 1,
				    title:"应付金额明细",
				    skin: 'layui-layer-rim', //加上边框
				    area: '55%', //宽高
				    zIndex:1028,
				    content: html,
				    scrollbar: false,

				    });
		}
		//已付金额明细b-1
		OtherAccounts.ViewAmountPaid = function(){
				var html = ViewAmountPaidTemplate();
				var lookDetailLayer = layer.open({
				    type: 1,
				    title:"已付金额明细",
				    skin: 'layui-layer-rim', //加上边框
				    area: '55%', //宽高
				    zIndex:1028,
				    content: html,
				    scrollbar: false,

				    });
		}
		//应付金额明细b-2
		OtherAccounts.viewOrderDetail = function(){
				var html = viewOrderDetailTemplate();
				var lookDetailLayer = layer.open({
				    type: 1,
				    title:"应付金额明细",
				    skin: 'layui-layer-rim', //加上边框
				    area: '55%', //宽高
				    zIndex:1028,
				    content: html,
				    scrollbar: false,
				    });
		}
			
			

		}
		

	

	exports.init = OtherAccounts.listFinancialOtherAccounts;
})