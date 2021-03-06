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
					//绑定页面事件
					BankAccount.initEvents($listTab);
				}
			}
		});
	};
	BankAccount.initEvents = function($obj){
		// 报表内的操作
		$obj.find('.T-bankAcc-list').on('click', '.T-action', function(event) {
			var $that = $(this), $tr = $that.closest('tr');

			if ($that.hasClass('T-view'))  {
				// 查看账户信息
				KingServices.viewPayMentDetail({
					pageNo: 0,
					payType: $tr.data('type'),
					bankId: $tr.data('bankid'),
					bankName: $that.data('desc'),
					beginningBalance: $that.data('beginningbalance')
				});
			} 
		});
	};
	exports.init = BankAccount.initMoudle;
});