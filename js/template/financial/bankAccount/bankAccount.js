define(function(require,exports){
	var menuKey = "financial_bank_account",
		listTemplate = require('./view/list');
	var BankAccount = {};
	BankAccount.initMoudle = function(){
		var args = {
			accountName:'',
			pageNo:0,
			status:1,
			sortType:'auto'
		}
		BankAccount.listBank(args);
	};
	BankAccount.listBank = function(args){
		
		$.ajax({
			url:KingServices.build_url('bankFinancial','listSumBankFinancial'),
			type:'POST',
			data:args,
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.newBankAccountList = JSON.parse(data.newBankAccountList);
					for(var i = 0;i<data.newBankAccountList.length;i++){
						var bankNumber = data.newBankAccountList[i].bankAccountNumber || "";
							bankNumber = bankNumber.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
						data.newBankAccountList[i].bankAccountNumber = bankNumber;
					};
					var html = listTemplate(data);
					Tools.addTab(menuKey,'资金账户',html);
					var $listTab = $("#tab-"+menuKey+"-content");
					//设置记录数
					var recordSize = Tools.getRecordSizeDesc(data.recordSize);
					$listTab.find('.recordSize').text(recordSize);
					$listTab.find('.T-refresh').on('click', function() {
						args.pageNo = 0;
						BankAccount.listBank(args);
					})
					//绑定分页插件
					laypage({
					    cont: $listTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (args.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		args.pageNo = obj.curr -1;
					    		BankAccount.listBank(args);
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
			var $that = $(this), 
				aliasName = $that.closest('tr').attr('aliasName'),
				bankMoney = $that.closest('tr').attr('bankMoney'),
				beginningBalance = $that.closest('tr').attr('beginningBalance'),
				args = {
					bankId : $that.closest('tr').attr('bankid'),
					bankNo :"账户：" + aliasName + ",余额：" + bankMoney + ",期初余额：" + beginningBalance,
					beginningBalance : beginningBalance,
					accountType : $that.closest('tr').data('type')
				};
			if ($that.hasClass('T-view'))  {
				// 查看账户信息
				KingServices.viewPayMentDetail(args);
			} 
		});
	};
	exports.init = BankAccount.initMoudle;
});