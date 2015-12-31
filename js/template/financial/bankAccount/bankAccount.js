define(function(require,exports){
	var menuKey = "financial_bank_account",
		listTemplate = require('./view/list');
	var BankAccount = {};
	BankAccount.initMoudle = function(){
		BankAccount.listBank(0);
	};
	BankAccount.listBank = function(pageNo){
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url('bankFinancial','listSumBankFinancial'),
			type:'POST',
			data:{pageNo:pageNo},
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					data.newBankAccountList = JSON.parse(data.newBankAccountList);
					var html = listTemplate(data);
					Tools.addTab(menuKey,'银行账户',html);
					var $listTab = $("#tab-"+menuKey+"-content");
					//设置记录数
					var recordSize = Tools.getRecordSizeDesc(data.recordSize);
					$listTab.find('.recordSize').text(recordSize);
					//绑定分页插件
					laypage({
					    cont: $listTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		BankAccount.listBank(obj.curr -1);
					    	}
					    }
					});
					//绑定页面事件
					BankAccount.initEvents($listTab);
				}
			}
		});
	};
	BankAccount.initEvents = function($obj){
		// 报表内的操作
		$obj.find('.T-bankAcc-list').on('click', '.T-action', function(event) {
			var $that = $(this), id = $that.closest('tr').attr('bankid');
			if ($that.hasClass('T-view'))  {
				// 查看账户信息
				//Infrastructure.viewBankAcc(id);
				console.log(123);
			} 
		});
	};
	exports.init = BankAccount.initMoudle;
});