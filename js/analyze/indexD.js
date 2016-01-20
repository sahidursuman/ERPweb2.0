
var data = {
	// 发团利润
	'tab-financial_planProfit-content': [
		{
			key: '#tab-financial_planProfit-content .T-search',
			args:  ["_trackEvent", "发团利润", "按钮", "搜索", 1, siteId]
		},{
			key: '#tab-financial_planProfit-content .T-tripDetail',
			args:  ["_trackEvent", "发团利润", "按钮", "单团明细", 1, siteId]
		}
	],

	// 报账审核
	'tab-financial_count-content': [
		{
			key:'#tab-financial_count-content .T-search',
			args:  ["_trackEvent", "报账审核", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_count-content .T-audit',
			args:  ["_trackEvent", "报账审核", "按钮", "审核", 1, siteId]
		},
		{
			key:'#tab-financial_count-content .T-detail',
			args:  ["_trackEvent", "报账审核", "按钮", "明细", 1, siteId]
		},
		{
			key:'#tab-financial_count-content .T-quality',
			args:  ["_trackEvent", "报账审核", "按钮", "质量", 1, siteId]
		},
		{
			key:'#tab-financial_count-content .T-account',
			args:  ["_trackEvent", "报账审核", "按钮", "报账", 1, siteId]
		}
	],

	// 单团审核
	'tab-financial_count-update-content':[
		{
			key:'#tab-financial_count-update-content .btn-saveCount',
			args:  ["_trackEvent", "单团审核", "按钮", "保存", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .T-accountCheck',
			args:  ["_trackEvent", "单团审核", "按钮", "审核通过", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .T-rebackGuide',
			args:  ["_trackEvent", "单团审核", "按钮", "退回导游", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .T-rebackOP',
			args:  ["_trackEvent", "单团审核", "按钮", "退回计调", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .btn-financialLog',
			args:  ["_trackEvent", "单团审核", "按钮", "操作记录", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .T-tripPlanArrange',
			args:  ["_trackEvent", "单团审核", "按钮", "安排预算表", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content .T-guideAccount',
			args:  ["_trackEvent", "单团审核", "按钮", "导游报账表", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-shop .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "购物新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-selfpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "自费新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-other-incoming .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "其它收入新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-buspay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "车费新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-restaurantpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "餐费新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-hotelpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "房费新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-scenicpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "景区新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-ticketpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "票务新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-otherpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "其它支出新增", 1, siteId]	
		},
		{
			key:'#tab-financial_count-update-content #financial-count-update-otherpay .T-add',
			args:  ["_trackEvent", "单团审核", "按钮", "其它支出新增", 1, siteId]	
		}
	],

	// 单团明细
	'tab-financial_count-tripDetail-content':[
		{
			key:'#tab-financial_count-tripDetail-content .btn-financialLog',
			args:  ["_trackEvent", "单团明细", "按钮", "操作记录", 1, siteId]
		},
		{
			key:'#tab-financial_count-tripDetail-content .T-tripPlanArrange',
			args:  ["_trackEvent", "单团明细", "按钮", "安排预算表", 1, siteId]
		},
		{
			key:'#tab-financial_count-tripDetail-content .T-tripPlanArrange',
			args:  ["_trackEvent", "单团明细", "按钮", "安排预算表", 1, siteId]
		}
	],
	// 单团报账
	'tab-financial_count-Reimbursement-content':[
		{
			key:'#tab-financial_count-Reimbursement-content .T-saveCount',
			args:  ["_trackEvent", "单团报账", "按钮", "保存", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content .T-fanishAccount',
			args:  ["_trackEvent", "单团报账", "按钮", "报账完成", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content .T-tripPlanArrange',
			args:  ["_trackEvent", "单团报账", "按钮", "安排预算表", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-shop .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "购物新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-selfpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "自费新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-other-incoming .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "其它收入新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-buspay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "车队新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-restaurantpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "餐费新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-hotelpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "房费新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-scenicpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "景区新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-ticketpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "票务新增", 1, siteId]
		},
		{
			key:'#tab-financial_count-Reimbursement-content #financial-count-reimbursement-otherpay .T-add',
			args:  ["_trackEvent", "单团报账", "按钮", "其它支出新增", 1, siteId]
		},
	],
	// 内转利润
	'tab-financial_innerTransfer_profit-content':[
		{
			key:'#tab-financial_innerTransfer_profit-content .T-search',
			args:  ["_trackEvent", "内转利润", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_profit-content .T-lineProductDetail',
			args:  ["_trackEvent", "内转利润", "按钮", "我部转出小组信息", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_profit-content .T-showTourist',
			args:  ["_trackEvent", "内转利润", "按钮", "查看小组", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_profit-content .T-showIncomeDetail',
			args:  ["_trackEvent", "内转利润", "按钮", "收客团款明细", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_profit-content .T-showChangePay',
			args:  ["_trackEvent", "内转利润", "按钮", "内转中转成本", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_profit-content .T-showTransPay',
			args:  ["_trackEvent", "内转利润", "按钮", "内转成本", 1, siteId]
		}
	],

	// 外转利润
	'tab-financial_turnProfit-content':[
		{
			key:'#tab-financial_turnProfit-content .T-search',
			args:  ["_trackEvent", "外转利润", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-lineProductDetail',
			args:  ["_trackEvent", "外转利润", "按钮", "查看我社转出", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-showTourist',
			args:  ["_trackEvent", "外转利润", "按钮", "查看小组", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-showIncomeDetail',
			args:  ["_trackEvent", "外转利润", "按钮", "查看团款应收明细", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-showChangePay',
			args:  ["_trackEvent", "外转利润", "按钮", "中转成本明细", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-showTransPay',
			args:  ["_trackEvent", "外转利润", "按钮", "外转成本明细", 1, siteId]
		},
		{
			key:'#tab-financial_turnProfit-content .T-checkTurn',
			args:  ["_trackEvent", "外转利润", "按钮", "核算中转", 1, siteId]
		}
	],

	// 代订利润
	'tab-financial_replaceProfit-content':[
		{
			key:'#tab-financial_replaceProfit-content .T-search',
			args:  ["_trackEvent", "代订利润", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_replaceProfit-content .T-replaceDetail',
			args:  ["_trackEvent", "代订利润", "按钮", "查看项目代订", 1, siteId]	
		},
		{
			key:'#tab-financial_replaceProfit-content .T-needPayDetail',
			args:  ["_trackEvent", "代订利润", "按钮", "代订应收明细", 1, siteId]	
		},
		{
			key:'#tab-financial_replaceProfit-content .T-costDetail',
			args:  ["_trackEvent", "代订利润", "按钮", "代订成本明细", 1, siteId]	
		}
	],

	// 总利润表
	'tab-financial_totalProfit-content':[
		{
			key:'#tab-financial_totalProfit-content .T-search',
			args:  ["_trackEvent", "总利润表", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_totalProfit-content .T-transfer',
			args:  ["_trackEvent", "总利润表", "按钮", "查看线路产品", 1, siteId]
		}
	],

	// 客户账务
	'tab-financial_Client-content':[
		{
			key:'#tab-financial_Client-content .T-btn-search',
			args:  ["_trackEvent", "客户账务", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_Client-content .T-checking',
			args:  ["_trackEvent", "客户账务", "按钮", "对账", 1, siteId]
		},
		{
			key:'#tab-financial_Client-content .T-balance',
			args:  ["_trackEvent", "客户账务", "按钮", "收款", 1, siteId]
		}
	],

	//客户对账
	'tab-financial_Client_checking-content':[
		{
			key:'#tab-financial_Client_checking-content .T-btn-search',
			args:  ["_trackEvent", "客户对账", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_Client_checking-content .T-btn-export',
			args:  ["_trackEvent", "客户对账", "按钮", "导出报表", 1, siteId]
		},
		{
			key:'#tab-financial_Client_checking-content .T-receive',
			args:  ["_trackEvent", "客户对账", "按钮", "已收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_Client_checking-content .T-view',
			args:  ["_trackEvent", "客户对账", "按钮", "查看应收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_Client_checking-content .T-saveClear',
			args:  ["_trackEvent", "客户对账", "按钮", "确认对账", 1, siteId]
		},
		{
			key:'#tab-financial_Client_checking-content .T-viewGroup',
			args:  ["_trackEvent", "客户对账", "按钮", "查看小组", 1, siteId]
		}
	],

	//客户收款
	'tab-financial_Client_clearing-content':[
		{
			key:'#tab-financial_Client_clearing-content .T-btn-search',
			args:  ["_trackEvent", "客户收款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_Client_clearing-content .T-btn-autofill',
			args:  ["_trackEvent", "客户收款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_Client_clearing-content .T-receive',
			args:  ["_trackEvent", "客户收款", "按钮", "已收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_Client_clearing-content .T-view',
			args:  ["_trackEvent", "客户收款", "按钮", "查看应收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_Client_clearing-content .T-saveClear',
			args:  ["_trackEvent", "客户收款", "按钮", "确认收款", 1, siteId]	
		},
		{
			key:'#tab-financial_Client_clearing-content .T-viewGroup',
			args:  ["_trackEvent", "客户收款", "按钮", "查看小组", 1, siteId]	
		}
	],

	// 内转转入
	'tab-financial_innerTransfer_in-content':[
		{
			key:'#tab-financial_innerTransfer_in-content .T-search',
			args:  ["_trackEvent", "内转转入", "按钮", "搜素", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-content .T-check',
			args:  ["_trackEvent", "内转转入", "按钮", "对账", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-content .T-balance',
			args:  ["_trackEvent", "内转转入", "按钮", "收款", 1, siteId]
		},
	],
	// 内转转入对账
	'tab-financial_innerTransfer_in-checking-content':[
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-checking-search',
			args:  ["_trackEvent", "内转转入对账", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-btn-export',
			args:  ["_trackEvent", "内转转入对账", "按钮", "导出报表", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-viewDetail',
			args:  ["_trackEvent", "内转转入对账", "按钮", "已收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-check-Detail',
			args:  ["_trackEvent", "内转转入对账", "按钮", "查看应收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-checking',
			args:  ["_trackEvent", "内转转入对账", "按钮", "确认对账", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_in-checking-content .T-seeGroup',
			args:  ["_trackEvent", "内转转入对账", "按钮", "查看小组", 1, siteId]
		}
	],

	// 内转转入收款
	'tab-financial_innerTransfer_in-settlement-content':[
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-checking-search',
			args:  ["_trackEvent", "内转转入收款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-btn-autofill',
			args:  ["_trackEvent", "内转转入收款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-viewDetail',
			args:  ["_trackEvent", "内转转入收款", "按钮", "已收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-check-Detail',
			args:  ["_trackEvent", "内转转入收款", "按钮", "查看应收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-incomeMoney',
			args:  ["_trackEvent", "内转转入收款", "按钮", "确认收款", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_in-settlement-content .T-seeGroup',
			args:  ["_trackEvent", "内转转入收款", "按钮", "查看小组", 1, siteId]
		}
	],

	// 购物账务
	'tab-financial_shop-content':[
		{
		 	key:'#tab-financial_shop-content .T-btn-search',
			args:  ["_trackEvent", "购物账务", "按钮", "确认收款", 1, siteId]	
		},
		{
		 	key:'#tab-financial_shop-content .T-checking',
			args:  ["_trackEvent", "购物账务", "按钮", "对账", 1, siteId]	
		},
		{
		 	key:'#tab-financial_shop-content .T-settlement',
			args:  ["_trackEvent", "购物账务", "按钮", "收款", 1, siteId]	
		}
	],

	// 购物对账
	'tab-financial_shop_checking-content':[
		{
			key:'#tab-financial_shop_checking-content .T-btn-search',
			args:  ["_trackEvent", "购物对账", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_shop_checking-content .T-btn-export',
			args:  ["_trackEvent", "购物对账", "按钮", "导出报表", 1, siteId]
		},
		{
			key:'#tab-financial_shop_checking-content .T-payDetails',
			args:  ["_trackEvent", "购物对账", "按钮", "已收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_shop_checking-content .T-view-details',
			args:  ["_trackEvent", "购物对账", "按钮", "查看应收金额明细", 1, siteId]
		},
		{
			key:'#tab-financial_shop_checking-content .T-saveClear',
			args:  ["_trackEvent", "购物对账", "按钮", "确认对账", 1, siteId]
		},
		{
			key:'#tab-financial_shop_checking-content .T-view-receipts',
			args:  ["_trackEvent", "购物对账", "按钮", "查看单据图片", 1, siteId]
		}
	],

	// 购物收款
	'tab-financial_shop_clearing-content':[
		{
			key:'#tab-financial_shop_clearing-content .T-btn-search',
			args:  ["_trackEvent", "购物收款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_shop_clearing-content .T-btn-autofill',
			args:  ["_trackEvent", "购物收款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_shop_clearing-content .T-payDetails',
			args:  ["_trackEvent", "购物收款", "按钮", "已收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_shop_clearing-content .T-view-details',
			args:  ["_trackEvent", "购物收款", "按钮", "查看应收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_shop_clearing-content .T-saveClear',
			args:  ["_trackEvent", "购物收款", "按钮", "确认收款", 1, siteId]	
		},
		{
			key:'#tab-financial_shop_clearing-content .T-view-receipts',
			args:  ["_trackEvent", "购物收款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 代订账务
	'tab-financial_replace-content':[
		{
			key:'#tab-financial_replace-content .T-btn-search',
			args:  ["_trackEvent", "代订账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-content .T-checking',
			args:  ["_trackEvent", "代订账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-content .T-balance',
			args:  ["_trackEvent", "代订账务", "按钮", "收款", 1, siteId]	
		}
	],

	// 代订对账
	'tab-financial_replace-checking-content':[
		{
			key:'#tab-financial_replace-checking-content .T-btn-search',
			args:  ["_trackEvent", "代订对账", "按钮", "搜索", 1, siteId]		
		},
		{
			key:'#tab-financial_replace-checking-content .T-btn-export',
			args:  ["_trackEvent", "代订对账", "按钮", "导出报表", 1, siteId]		
		},
		{
			key:'#tab-financial_replace-checking-content .T-receive-money',
			args:  ["_trackEvent", "代订对账", "按钮", "已收金额明细", 1, siteId]		
		},
		{
			key:'#tab-financial_replace-checking-content .T-view-Received',
			args:  ["_trackEvent", "代订对账", "按钮", "查看应收金额明细", 1, siteId]		
		},
		{
			key:'#tab-financial_replace-checking-content .T-saveClear',
			args:  ["_trackEvent", "代订对账", "按钮", "确认对账", 1, siteId]		
		}
	],

	// 代订收款
	'tab-financial_replace-blance-content':[
		{
			key:'#tab-financial_replace-blance-content .T-btn-search',
			args:  ["_trackEvent", "代订收款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-blance-content .T-btn-autofill',
			args:  ["_trackEvent", "代订收款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-blance-content .T-receive-money',
			args:  ["_trackEvent", "代订收款", "按钮", "已收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-blance-content .T-view-Received',
			args:  ["_trackEvent", "代订收款", "按钮", "查看应收金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_replace-blance-content .T-saveClear',
			args:  ["_trackEvent", "代订收款", "按钮", "确认收款", 1, siteId]	
		}
	],

	// 内转转出
	'tab-financial_innerTransfer_out-content':[
		{
			key:'#tab-financial_innerTransfer_out-content .T-search',
			args:  ["_trackEvent", "内转转出", "按钮", "搜索", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_out-content .T-check',
			args:  ["_trackEvent", "内转转出", "按钮", "对账", 1, siteId]
		},
		{
			key:'#tab-financial_innerTransfer_out-content .T-balance',
			args:  ["_trackEvent", "内转转出", "按钮", "收款", 1, siteId]
		}
	],

	// 内转转出对账
	'tab-financial_innerTransfer_out-checking-content':[
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-checking-search',
			args:  ["_trackEvent", "内转转出对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-btn-export',
			args:  ["_trackEvent", "内转转出对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-viewDetail',
			args:  ["_trackEvent", "内转转出对账", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-check-Detail',
			args:  ["_trackEvent", "内转转出对账", "按钮", "应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-checking',
			args:  ["_trackEvent", "内转转出对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-checking-content .T-seeGroup',
			args:  ["_trackEvent", "内转转出对账", "按钮", "查看小组", 1, siteId]	
		}
	],

	// 内转转出付款
	'tab-financial_innerTransfer_out-settlement-content':[
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-checking',
			args:  ["_trackEvent", "内转转出付款", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-checking-search',
			args:  ["_trackEvent", "内转转出付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-viewDetail',
			args:  ["_trackEvent", "内转转出付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-check-Detail',
			args:  ["_trackEvent", "内转转出付款", "按钮", "应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-payMoney',
			args:  ["_trackEvent", "内转转出付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_innerTransfer_out-settlement-content .T-seeGroup',
			args:  ["_trackEvent", "内转转出付款", "按钮", "查看小组", 1, siteId]	
		}
	],

	// 外转账务
	'tab-financial_transfer-content':[
		{
			key:'#tab-financial_transfer-content .T-search',
			args:  ["_trackEvent", "外转账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-content .T-check',
			args:  ["_trackEvent", "外转账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-content .T-clear',
			args:  ["_trackEvent", "外转账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 外转对账
	'tab-financial_transfer-checking-content':[
		{
			key:'#tab-financial_transfer-checking-content .T-search',
			args:  ["_trackEvent", "外转对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-checking-content .T-btn-export',
			args:  ["_trackEvent", "外转对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-checking-content .T-payedDetail',
			args:  ["_trackEvent", "外转对账", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "外转对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-checking-content .T-saveCheck',
			args:  ["_trackEvent", "外转对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_transfer-checking-content .T-viewGroup',
			args:  ["_trackEvent", "外转对账", "按钮", "查看小组", 1, siteId]	
		}
	],

	// 外转付款
	'tab-financial_transfer-clearing-content':[
		{
			key:'#tab-financial_transfer-clearing-content .T-search',
			args:  ["_trackEvent", "外转付款", "按钮", "搜索", 1, siteId]		
		},
		{
			key:'#tab-financial_transfer-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "外转付款", "按钮", "自动下账", 1, siteId]		
		},
		{
			key:'#tab-financial_transfer-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "外转付款", "按钮", "已付金额明细", 1, siteId]		
		},
		{
			key:'#tab-financial_transfer-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "外转付款", "按钮", "查看应付金额明细", 1, siteId]		
		},
		{
			key:'#tab-financial_transfer-clearing-content .T-saveClear',
			args:  ["_trackEvent", "外转付款", "按钮", "确认付款", 1, siteId]		
		},
		{
			key:'#tab-financial_transfer-clearing-content .T-viewGroup',
			args:  ["_trackEvent", "外转付款", "按钮", "查看小组", 1, siteId]	
		}
	],

	// 导游账务
	'tab-financial_guide-content':[
		{
			key:'#tab-financial_guide-content .T-btn-search',
			args:  ["_trackEvent", "导游账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-content .T-check',
			args:  ["_trackEvent", "导游账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-content .T-pay',
			args:  ["_trackEvent", "导游账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 导游对账
	'tab-financial_guide_checking-content':[
		{
			key:'#tab-financial_guide_checking-content .T-btn-search',
			args:  ["_trackEvent", "导游对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_guide_checking-content .T-btn-export',
			args:  ["_trackEvent", "导游对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_guide_checking-content .T-gid',
			args:  ["_trackEvent", "导游对账", "按钮", "费用明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide_checking-content .T-view',
			args:  ["_trackEvent", "导游对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide_checking-content .T-viewPayedMoney',
			args:  ["_trackEvent", "导游对账", "按钮", "应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide_checking-content .T-saveClear',
			args:  ["_trackEvent", "导游对账", "按钮", "确认对账", 1, siteId]	
		}
	],

	//导游付款
	'tab-financial_guide-paying-content':[
		{
			key:'#tab-financial_guide-paying-content .T-btn-search',
			args:  ["_trackEvent", "导游付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-paying-content .T-btn-autofill',
			args:  ["_trackEvent", "导游付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-paying-content .T-gid',
			args:  ["_trackEvent", "导游付款", "按钮", "费用明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-paying-content .T-viewPayedMoney',
			args:  ["_trackEvent", "导游付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-paying-content .T-view',
			args:  ["_trackEvent", "导游付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_guide-paying-content .T-saveClear',
			args:  ["_trackEvent", "导游付款", "按钮", "确认付款", 1, siteId]	
		}
	],

	// 餐厅账务
	'tab-financial_restaurant-content':[
		{
			key:'#tab-financial_restaurant-content .T-search',
			args:  ["_trackEvent", "餐厅账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-content .T-check',
			args:  ["_trackEvent", "餐厅账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-content .T-clear',
			args:  ["_trackEvent", "餐厅账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 餐厅对账
	'tab-financial_restaurant-checking-content':[
		{
			key:'#tab-financial_restaurant-checking-content .T-search',
			args:  ["_trackEvent", "餐厅对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-checking-content .T-btn-export',
			args:  ["_trackEvent", "餐厅对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-checking-content .T-payedDetail',
			args:  ["_trackEvent", "餐厅对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "餐厅对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-checking-content .T-saveCheck',
			args:  ["_trackEvent", "餐厅对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-checking-content .T-restaurantImg',
			args:  ["_trackEvent", "餐厅对账", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 餐厅付款
	'tab-financial_restaurant-clearing-content':[
		{
			key:'#tab-financial_restaurant-clearing-content .T-search',
			args:  ["_trackEvent", "餐厅付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "餐厅付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "餐厅付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "餐厅付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-clearing-content .T-saveClear',
			args:  ["_trackEvent", "餐厅付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_restaurant-clearing-content .T-restaurantImg',
			args:  ["_trackEvent", "餐厅付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 酒店账务
	'tab-financial_rummery-content':[
		{
			key:'#tab-financial_rummery-content .T-search',
			args:  ["_trackEvent", "酒店账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-content .T-check',
			args:  ["_trackEvent", "酒店账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-content .T-clear',
			args:  ["_trackEvent", "酒店账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 酒店对账
	'tab-financial_rummery-checking-content':[
		{
			key:'#tab-financial_rummery-checking-content .T-search',
			args:  ["_trackEvent", "酒店对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-checking-content .T-btn-export',
			args:  ["_trackEvent", "酒店对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-checking-content .T-payedDetail',
			args:  ["_trackEvent", "酒店对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "酒店对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-checking-content .T-saveCheck',
			args:  ["_trackEvent", "酒店对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-checking-content .T-hotelImg',
			args:  ["_trackEvent", "酒店对账", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 酒店付款
	'tab-financial_rummery-clearing-content':[
		{
			key:'#tab-financial_rummery-clearing-content .T-search',
			args:  ["_trackEvent", "酒店付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "酒店付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "酒店付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "酒店付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-clearing-content .T-saveClear',
			args:  ["_trackEvent", "酒店付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_rummery-clearing-content .T-hotelImg',
			args:  ["_trackEvent", "酒店付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 车队账务
	'tab-financial_busCompany-content':[
		{
			key:'#tab-financial_busCompany-content .T-search',
			args:  ["_trackEvent", "车队账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-content .T-check',
			args:  ["_trackEvent", "车队账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-content .T-clear',
			args:  ["_trackEvent", "车队账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 车队对账
	'tab-financial_busCompany-checking-content':[
		{
			key:'#tab-financial_busCompany-checking-content .T-search',
			args:  ["_trackEvent", "车队对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-btn-export',
			args:  ["_trackEvent", "车队对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-payedDetail',
			args:  ["_trackEvent", "车队对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "车队对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-saveCheck',
			args:  ["_trackEvent", "车队对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-busCompanyImg',
			args:  ["_trackEvent", "车队对账", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 车队付款
	'tab-financial_busCompany-clearing-content':[
		{
			key:'#tab-financial_busCompany-clearing-content .T-search',
			args:  ["_trackEvent", "车队付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "车队付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "车队付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "车队付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-clearing-content .T-saveClear',
			args:  ["_trackEvent", "车队付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-clearing-content .T-busCompanyImg',
			args:  ["_trackEvent", "车队付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 票务账务
	'tab-financial_ticket-content':[
		{
			key:'#tab-financial_ticket-content .T-btn-search',
			args:  ["_trackEvent", "票务账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket-content .T-checking ',
			args:  ["_trackEvent", "票务账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket-content .T-balance ',
			args:  ["_trackEvent", "票务账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 票务对账
	'tab-financial_busCompany-checking-content':[
		{
			key:'#tab-financial_busCompany-checking-content .T-btn-search',
			args:  ["_trackEvent", "票务对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-btn-export',
			args:  ["_trackEvent", "票务对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-payDetails',
			args:  ["_trackEvent", "票务对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-view-details',
			args:  ["_trackEvent", "票务对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-saveClear',
			args:  ["_trackEvent", "票务对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_busCompany-checking-content .T-view-receipts',
			args:  ["_trackEvent", "票务对账", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	//票务付款
	 'tab-financial_ticket_clearing-content':[
		{
			key:'#tab-financial_ticket_clearing-content .T-btn-search',
			args:  ["_trackEvent", "票务付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket_clearing-content .T-btn-autofill',
			args:  ["_trackEvent", "票务付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket_clearing-content .T-payDetails',
			args:  ["_trackEvent", "票务付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket_clearing-content .T-view-details',
			args:  ["_trackEvent", "票务付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket_clearing-content .T-saveClear',
			args:  ["_trackEvent", "票务付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_ticket_clearing-content .T-view-receipts',
			args:  ["_trackEvent", "票务付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 景区账务
	'tab-financial_scenic-content':[
		{
			key:'#tab-financial_scenic-content .T-search',
			args:  ["_trackEvent", "景区账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-content .T-check',
			args:  ["_trackEvent", "景区账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-content .T-clear',
			args:  ["_trackEvent", "景区账务", "按钮", "付款", 1, siteId]	
		}
	],

	//景区对账
	'tab-financial_scenic-checking-content':[
		{
			key:'#tab-financial_scenic-checking-content .T-search',
			args:  ["_trackEvent", "景区对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-checking-content .T-btn-export',
			args:  ["_trackEvent", "景区对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-checking-content .T-payedDetail',
			args:  ["_trackEvent", "景区对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "景区对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-checking-content .T-saveCheck',
			args:  ["_trackEvent", "景区对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-checking-content .T-scenicImg',
			args:  ["_trackEvent", "景区对账", "按钮", "查看单据图片", 1, siteId]	
		}
	], 

	// 景区付款
	'tab-financial_scenic-clearing-content':[
		{
			key:'#tab-financial_scenic-clearing-content .T-search',
			args:  ["_trackEvent", "景区付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "景区付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "景区付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "景区付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-clearing-content .T-saveClear',
			args:  ["_trackEvent", "景区付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_scenic-clearing-content .T-scenicImg',
			args:  ["_trackEvent", "景区付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 自费账务
	'tab-financial_self-content':[
		{
			key:'#tab-financial_self-content .T-search',
			args:  ["_trackEvent", "自费账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_self-content .T-check',
			args:  ["_trackEvent", "自费账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_self-content .T-clear',
			args:  ["_trackEvent", "自费账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 自费对账
	'tab-financial_self-checking-content':[
		{
			key:'#tab-financial_self-checking-content .T-search',
			args:  ["_trackEvent", "自费对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_self-checking-content .T-btn-export',
			args:  ["_trackEvent", "自费对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_self-checking-content .T-payedDetail',
			args:  ["_trackEvent", "自费对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_self-checking-content .T-needPayDetail ',
			args:  ["_trackEvent", "自费对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_self-checking-content .T-saveCheck',
			args:  ["_trackEvent", "自费对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_self-checking-content .T-selfPayImg',
			args:  ["_trackEvent", "自费对账", "按钮", "查看单据图片", 1, siteId]	
		}
	], 

	// 自费付款
	'tab-financial_self-clearing-content':[
		{
			key:'#tab-financial_self-clearing-content .T-search',
			args:  ["_trackEvent", "自费付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_self-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "自费付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_self-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "自费付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_self-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "自费付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_self-clearing-content .T-saveClear',
			args:  ["_trackEvent", "自费付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_self-clearing-content .T-selfPayImg',
			args:  ["_trackEvent", "自费付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 保险账务
	'tab-financial_insure-content':[
		{
			key:'#tab-financial_insure-content .T-search',
			args:  ["_trackEvent", "保险账务", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-content .T-check',
			args:  ["_trackEvent", "保险账务", "按钮", "对账", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-content .T-clear',
			args:  ["_trackEvent", "保险账务", "按钮", "付款", 1, siteId]	
		}
	],

	// 保险对账
	'tab-financial_insure-checking-content':[
		{
			key:'#tab-financial_insure-checking-content .T-search',
			args:  ["_trackEvent", "保险对账", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-checking-content .T-btn-export',
			args:  ["_trackEvent", "保险对账", "按钮", "导出报表", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-checking-content .T-payedDetail',
			args:  ["_trackEvent", "保险对账", "按钮", "查看已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-checking-content .T-needPayDetail',
			args:  ["_trackEvent", "保险对账", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-checking-content .T-saveCheck',
			args:  ["_trackEvent", "保险对账", "按钮", "确认对账", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-checking-content .T-insuranceImg',
			args:  ["_trackEvent", "保险对账", "按钮", "查看单据图片", 1, siteId]	
		}
	], 

	// 保险付款
	'tab-financial_insure-clearing-content':[
		{
			key:'#tab-financial_insure-clearing-content .T-search',
			args:  ["_trackEvent", "保险付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-clearing-content .T-clear-auto',
			args:  ["_trackEvent", "保险付款", "按钮", "自动下账", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-clearing-content .T-payedDetail',
			args:  ["_trackEvent", "保险付款", "按钮", "已付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-clearing-content .T-needPayDetail',
			args:  ["_trackEvent", "保险付款", "按钮", "查看应付金额明细", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-clearing-content .T-saveClear',
			args:  ["_trackEvent", "保险付款", "按钮", "确认付款", 1, siteId]	
		},
		{
			key:'#tab-financial_insure-clearing-content .T-insuranceImg',
			args:  ["_trackEvent", "保险付款", "按钮", "查看单据图片", 1, siteId]	
		}
	],

	// 现金日记
	'tab-financial_payment_details-content':[
		{
			key:'#tab-financial_payment_details-content .T-btn-search',
			args:  ["_trackEvent", "现金日记", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_payment_details-content .T-btn-add',
			args:  ["_trackEvent", "现金日记", "按钮", "新增", 1, siteId]	
		}
	],

	// 其它账务
	'tab-financial_Other_accounts-content':[
		{
			key:'#tab-financial_Other_accounts-content .T-search ',
			args:  ["_trackEvent", "其它账务", "按钮", "搜索", 1, siteId]	
		}
	],

	//财务付款
	'tab-financial_pay-content':[
		{
			key:'#tab-financial_pay-content .T-btn-search',
			args:  ["_trackEvent", "财务付款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_pay-content .T-pay-task',
			args:  ["_trackEvent", "财务付款", "按钮", "付款", 1, siteId]	
		}
	],

	// 财务收款
	'tab-financial_income-content':[
		{
			key:'#tab-financial_income-content .T-btn-search',
			args:  ["_trackEvent", "财务收款", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_income-content .T-income-task',
			args:  ["_trackEvent", "财务收款", "按钮", "付款", 1, siteId]	
		}
	],
	// 系统管理
	// 部门管理
	'tab-system_department-content':[
		{
			key:'#tab-system_department-content .T-addBusiness',
			args:  ["_trackEvent", "部门管理", "按钮", "新增业务部门", 1, siteId]	
		},
		{
			key:'#tab-system_department-content .T-addGroup ',
			args:  ["_trackEvent", "部门管理", "按钮", "新增子部门", 1, siteId]	
		}
	],

	// 人员管理
	'tab-system_user-content':[
		{
			key:'#tab-system_user-content .T-search',
			args:  ["_trackEvent", "人员管理", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-system_user-content .T-add',
			args:  ["_trackEvent", "人员管理", "按钮", "新增", 1, siteId]	
		},
		{
			key:'#tab-system_user-content .T-view',
			args:  ["_trackEvent", "人员管理", "按钮", "查看", 1, siteId]	
		},
		{
			key:'#tab-system_user-content .T-auth ',
			args:  ["_trackEvent", "人员管理", "按钮", "授权", 1, siteId]	
		},
		{
			key:'#tab-system_user-content .T-update ',
			args:  ["_trackEvent", "人员管理", "按钮", "修改", 1, siteId]	
		}
	],

	// 收客利润
	 'tab-financial_collectedGuests-content':[
		{
			key:'#tab-financial_collectedGuests-content .T-search',
			args:  ["_trackEvent", "收客利润", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_collectedGuests-content .T-viewLine',
			args:  ["_trackEvent", "收客利润", "按钮", "查看线路产品", 1, siteId]	
		}
	],

	// 中转利润
	'tab-financial_transferProfits-content':[
		{
			key:'#tab-financial_transferProfits-content .T-search',
			args:  ["_trackEvent", "中转利润", "按钮", "搜索", 1, siteId]	
		},
		{
			key:'#tab-financial_transferProfits-content .T-viewLineproduct',
			args:  ["_trackEvent", "中转利润", "按钮", "查看线路产品", 1, siteId]	
		},
		{
			key:'#tab-financial_transferProfits-content .T-viewGroup',
			args:  ["_trackEvent", "中转利润", "按钮", "查看小组", 1, siteId]	
		},
		{
			key:'#tab-financial_transferProfits-content .T-costDetail',
			args:  ["_trackEvent", "中转利润", "按钮", "中转成本明细", 1, siteId]	
		}
	]
}