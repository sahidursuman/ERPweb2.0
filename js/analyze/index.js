
Analyze.data = {
	// 其他类型
	'other': [
		{
			key: '[onclick="viewAllMsg()"]',
			args:  ["_trackEvent", "首页", "消息", "点击进入", 1, siteId]
		},
		{
			key: '.update-userinfo-settings',
			args:  ["_trackEvent", "首页", "修改基本信息", "进入对话框", 1, siteId]
		},
		{
			key: '[onclick="logout()"]',
			args:  ["_trackEvent", "首页", "退出", "点击退出", 1, siteId]
		}
	],
	// 菜单操作
	'menu' : [
		// 资源管理
		{
			key: '#sidebar .resource_guide',
			args:  ["_trackEvent", "菜单操作", "资源管理", "导游管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_busCompany',
			args:  ["_trackEvent", "菜单操作", "资源管理", "车队管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_restaurant',
			args:  ["_trackEvent", "菜单操作", "资源管理", "餐厅管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_hotel',
			args:  ["_trackEvent", "菜单操作", "资源管理", "酒店管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_ticket',
			args:  ["_trackEvent", "菜单操作", "资源管理", "票务管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_scenic',
			args:  ["_trackEvent", "菜单操作", "资源管理", "景区管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_shop',
			args:  ["_trackEvent", "菜单操作", "资源管理", "购物管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_selfpay',
			args:  ["_trackEvent", "菜单操作", "资源管理", "自费管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_insurance',
			args:  ["_trackEvent", "菜单操作", "资源管理", "保险管理", 1, siteId]
		},
		{
			key: '#sidebar .resource_partnerAgency',
			args:  ["_trackEvent", "菜单操作", "资源管理", "同行管理", 1, siteId]
		}
	],
	// 资源管理
	// 1. 导游管理
	'tab-resource_guide-content': [
		{
			key: '#tab-resource_guide-content .T-guide-search',
			args:  ["_trackEvent", "导游管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_guide-content .T-add-guide',
			args:  ["_trackEvent", "导游管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_guide-content .T-view',
			args:  ["_trackEvent", "导游管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_guide-content .T-edit',
			args:  ["_trackEvent", "导游管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_guide-content .T-delete',
			args:  ["_trackEvent", "导游管理", "按钮", "删除", 1, siteId]
		}
	],
	// 2. 车队管理
	'tab-resource_busCompany-content': [
		{
			key: '#tab-resource_busCompany-content .T-busCompany-search',
			args:  ["_trackEvent", "车队管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_busCompany-content .T-busCompany-add',
			args:  ["_trackEvent", "车队管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_busCompany-content .T-view',
			args:  ["_trackEvent", "车队管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_busCompany-content .T-edit',
			args:  ["_trackEvent", "车队管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_busCompany-content .T-delete',
			args:  ["_trackEvent", "车队管理", "按钮", "删除", 1, siteId]
		}
	],
	// 3. 餐厅管理
	'tab-resource_restaurant-content': [
		{
			key: '#tab-resource_restaurant-content .T-search',
			args:  ["_trackEvent", "餐厅管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_restaurant-content .T-add',
			args:  ["_trackEvent", "餐厅管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_restaurant-content .T-view',
			args:  ["_trackEvent", "餐厅管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_restaurant-content .T-edit',
			args:  ["_trackEvent", "餐厅管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_restaurant-content .T-delete',
			args:  ["_trackEvent", "餐厅管理", "按钮", "删除", 1, siteId]
		}
	],
	
	// 4. 酒店管理
	'tab-resource_hotel-content': [
		{
			key: '#tab-resource_hotel-content .T-btn-hotel-search',
			args:  ["_trackEvent", "酒店管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_hotel-content .T-btn-hotel-add',
			args:  ["_trackEvent", "酒店管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_hotel-content .T-view',
			args:  ["_trackEvent", "酒店管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_hotel-content .T-edit',
			args:  ["_trackEvent", "酒店管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_hotel-content .T-delete',
			args:  ["_trackEvent", "酒店管理", "按钮", "删除", 1, siteId]
		}
	],
	
	// 5. 票务管理
	'tab-resource_ticket-content': [
		{
			key: '#tab-resource_ticket-content .T-ticket-search',
			args:  ["_trackEvent", "票务管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_ticket-content .T-ticket-add',
			args:  ["_trackEvent", "票务管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_ticket-content .T-ticket-view',
			args:  ["_trackEvent", "票务管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_ticket-content .T-ticket-edit',
			args:  ["_trackEvent", "票务管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_ticket-content .T-ticket-delete',
			args:  ["_trackEvent", "票务管理", "按钮", "删除", 1, siteId]
		}
	],
	
	// 6. 景区管理
	'tab-resource_scenic-content': [
		{
			key: '#tab-resource_scenic-content .T-scenic-search',
			args:  ["_trackEvent", "景区管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_scenic-content .T-scenic-add',
			args:  ["_trackEvent", "景区管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_scenic-content .T-scenic-view',
			args:  ["_trackEvent", "景区管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_scenic-content .T-scenic-edit',
			args:  ["_trackEvent", "景区管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_scenic-content .T-scenic-delete',
			args:  ["_trackEvent", "景区管理", "按钮", "删除", 1, siteId]
		}
	],
	
	// 7. 商家管理
	'tab-resource_shop-content': [
		{
			key: '#tab-resource_shop-content .T-shop-search',
			args:  ["_trackEvent", "商家管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_shop-content .T-shop-add',
			args:  ["_trackEvent", "商家管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_shop-content .T-shop-view',
			args:  ["_trackEvent", "商家管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_shop-content .T-shop-edit',
			args:  ["_trackEvent", "商家管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_shop-content .T-shop-delete',
			args:  ["_trackEvent", "商家管理", "按钮", "删除", 1, siteId]
		}
	],
	// 8. 自费管理
	'tab-resource_selfpay-content': [
		{
			key: '#tab-resource_selfpay-content .T-btn-selfpay-search',
			args:  ["_trackEvent", "自费管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_selfpay-content .T-btn-selfpay-add',
			args:  ["_trackEvent", "自费管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_selfpay-content .T-view',
			args:  ["_trackEvent", "自费管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_selfpay-content .T-edit',
			args:  ["_trackEvent", "自费管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_selfpay-content .T-delete',
			args:  ["_trackEvent", "自费管理", "按钮", "删除", 1, siteId]
		}
	],
	// 9. 保险管理
	'tab-resource_insurance-content': [
		{
			key: '#tab-resource_insurance-content .T-insurance-search',
			args:  ["_trackEvent", "保险管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_insurance-content .T-btn-insurance-add',
			args:  ["_trackEvent", "保险管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_insurance-content .T-view',
			args:  ["_trackEvent", "保险管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_insurance-content .T-edit',
			args:  ["_trackEvent", "保险管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_insurance-content .T-delete',
			args:  ["_trackEvent", "保险管理", "按钮", "删除", 1, siteId]
		}
	],
	// 10. 同行管理
	'tab-resource_partnerAgency-content': [
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-search',
			args:  ["_trackEvent", "同行管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-add',
			args:  ["_trackEvent", "同行管理", "按钮", "添加", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-view',
			args:  ["_trackEvent", "同行管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-edit',
			args:  ["_trackEvent", "同行管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-delete',
			args:  ["_trackEvent", "同行管理", "按钮", "删除", 1, siteId]
		}
	]
}

Analyze.data = $.extend({}, Analyze.data,
{
	// 发团管理
	// 1.同行管理
	'tab-resource_partnerAgency-content':[
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-search',
			args:  ["_trackEvent", "同行管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-select-status',
			args:  ["_trackEvent", "同行管理", "按钮", "启用", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-add',
			args:  ["_trackEvent", "同行管理", "按钮", "新增同行", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-view',
			args:  ["_trackEvent", "同行管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-edit',
			args:  ["_trackEvent", "同行管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_partnerAgency-content .T-partnerAgency-delete',
			args:  ["_trackEvent", "同行管理", "按钮", "删除", 1, siteId]
		}
	],
	// 2.线路模板
	'tab-resource_travelLine-content':[
		{
			key: '#tab-resource_travelLine-content .T-btn-search',
			args:  ["_trackEvent", "线路模板", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-select-status',
			args:  ["_trackEvent", "线路模板", "按钮", "启用", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-btn-add',
			args:  ["_trackEvent", "线路模板", "按钮", "新增线路", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-add-lineproduct',
			args:  ["_trackEvent", "线路模板", "按钮", "新建线路产品", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-preview',
			args:  ["_trackEvent", "线路模板", "按钮", "预览", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-view',
			args:  ["_trackEvent", "线路模板", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-update',
			args:  ["_trackEvent", "线路模板", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-copy',
			args:  ["_trackEvent", "线路模板", "按钮", "复制", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-content .T-delete',
			args:  ["_trackEvent", "线路模板", "按钮", "删除", 1, siteId]
		}
	],
	'tab-resource_travelLine-add-content':[//新增线路模板
		{
			key: '#tab-resource_travelLine-add-content .T-add-schedule',
			args:  ["_trackEvent", "新增线路模板", "按钮", "新增日程", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-add-content .T-details',
			args:  ["_trackEvent", "新增线路模板", "按钮", "编辑行程详情", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-add-content .T-delete',
			args:  ["_trackEvent", "新增线路模板", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-add-content .T-btn-cancel',
			args:  ["_trackEvent", "新增线路模板", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-add-content .T-btn-save',
			args:  ["_trackEvent", "新增线路模板", "按钮", "保存", 1, siteId]
		}
	],
	'tab-resource_travelLine-update-content':[
		{//修改线路模板
			key: '#tab-resource_travelLine-update-content .T-add-schedule',
			args:  ["_trackEvent", "修改线路模板", "按钮", "新增日程", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-update-content .T-details',
			args:  ["_trackEvent", "修改线路模板", "按钮", "编辑行程详情", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-update-content .T-delete',
			args:  ["_trackEvent", "修改线路模板", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-update-content .T-btn-cancel',
			args:  ["_trackEvent", "修改线路模板", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-update-content .T-btn-save',
			args:  ["_trackEvent", "修改线路模板", "按钮", "保存", 1, siteId]
		}
	],
	'tab-resource_travelLine-copy-content':[
		{//复制线路模板
			key: '#tab-resource_travelLine-copy-content .T-add-schedule',
			args:  ["_trackEvent", "复制线路模板", "按钮", "新增日程", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-copy-content .T-btn-save',
			args:  ["_trackEvent", "复制线路模板", "按钮", "编辑行程详情", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-copy-content .T-delete',
			args:  ["_trackEvent", "复制线路模板", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-copy-content .T-btn-cancel',
			args:  ["_trackEvent", "复制线路模板", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-resource_travelLine-copy-content .T-btn-save',
			args:  ["_trackEvent", "复制线路模板", "按钮", "保存", 1, siteId]
		}
	],
	'tab-resource_travelLine-view-content':[
		{//查看线路模板
			key: '#tab-resource_travelLine-view-content .T-btn-viewCancel',
			args:  ["_trackEvent", "查看线路模板", "按钮", "关闭", 1, siteId]
		}
	],
	'tab-resource_lineProduct-add-content':[
		{//新建线路产品
			key: '#tab-resource_lineProduct-add-content .T-addInsurance',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addBusCompany',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "新建线路产品", "按钮", "删除保险", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "新建线路产品", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addRestaurant',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addHotel',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addScenic',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addTraffic',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增交通", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-addOther',
			args:  ["_trackEvent", "新建线路产品", "按钮", "新增其他", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-add-content .T-btn-submit',
			args:  ["_trackEvent", "新建线路产品", "按钮", "提交", 1, siteId]
		}
	],
	'tab-resource_lineProduct-content':[ //线路产品
		{
			key: '#tab-resource_lineProduct-content .T-status',
			args:  ["_trackEvent", "线路产品", "按钮", "启用", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-btn-search',
			args:  ["_trackEvent", "线路产品", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-quote',
			args:  ["_trackEvent", "线路产品", "按钮", "报价", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-view',
			args:  ["_trackEvent", "线路产品", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-edit',
			args:  ["_trackEvent", "线路产品", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-copy',
			args:  ["_trackEvent", "线路产品", "按钮", "复制", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-export',
			args:  ["_trackEvent", "线路产品", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-content .T-delete',
			args:  ["_trackEvent", "线路产品", "按钮", "删除", 1, siteId]
		}
	],
	'tab-resource_lineProduct-copy-content':[
		{//复制线路产品
			key: '#tab-resource_lineProduct-copy-content .T-addInsurance',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content .T-addBusCompany',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "复制线路产品", "按钮", "删除保险", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "复制线路产品", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content #dayListUpdate-0 .T-addRestaurant',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content #dayListUpdate-0 .T-addHotel',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content #dayListUpdate-0 .T-addScenic',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content #dayListUpdate-0 .T-addTraffic',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增交通", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content #dayListUpdate-0 .T-addOther',
			args:  ["_trackEvent", "复制线路产品", "按钮", "新增其他", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-copy-content .T-btn-submit',
			args:  ["_trackEvent", "复制线路产品", "按钮", "提交", 1, siteId]
		}
	],
	'tab-resource_lineProduct-update-content':[
		{//修改线路产品
			key: '#tab-resource_lineProduct-update-content .T-addInsurance',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content .T-addBusCompany',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "修改线路产品", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "修改线路产品", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content .T-btn-submit',
			args:  ["_trackEvent", "修改线路产品", "按钮", "提交", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content #dayListUpdate-0 .T-addRestaurant',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content #dayListUpdate-0 .T-addHotel',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content #dayListUpdate-0 .T-addScenic',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content #dayListUpdate-0 .T-addTraffic',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增交通", 1, siteId]
		},
		{
			key: '#tab-resource_lineProduct-update-content #dayListUpdate-0 .T-addOther',
			args:  ["_trackEvent", "修改线路产品", "按钮", "新增其他", 1, siteId]
		}
	],
	'tab-arrange_quote-add-content':[
		{//新增报价 报价详情
			key: '#tab-arrange_quote-add-content #quoteContent-add-add .T-addInsurance',
			args:  ["_trackEvent", "报价详情", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add .T-addBusCompany',
			args:  ["_trackEvent", "报价详情", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "报价详情", "按钮", "删除保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "报价详情", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add .T-car',
			args:  ["_trackEvent", "报价详情", "按钮", "车辆询价", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-addRestaurant',
			args:  ["_trackEvent", "报价详情", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-addHotel',
			args:  ["_trackEvent", "报价详情", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-addSelfPay',
			args:  ["_trackEvent", "报价详情", "按钮", "新增自费", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-addTraffic',
			args:  ["_trackEvent", "报价详情", "按钮", "新增交通", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-addOther',
			args:  ["_trackEvent", "报价详情", "按钮", "新增其他", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add #dayListAdd-0 .T-hotel',
			args:  ["_trackEvent", "报价详情", "按钮", "酒店询价", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #quoteContent-add-add  .T-btn-submit-quote',
			args:  ["_trackEvent", "报价详情", "按钮", "提交", 1, siteId]
		},//询价状态
		{
			key: '#tab-arrange_quote-add-content #inquiryContent-add-add  .T-refresh-status',
			args:  ["_trackEvent", "询价状态", "按钮", "刷新", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #inquiryContent-add-add #busInquiryResult-add-add .T-bus-delete',
			args:  ["_trackEvent", "询价状态", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-add-content #inquiryContent-add-add #hotelInquiryContent-add-add .T-hotel-delete',
			args:  ["_trackEvent", "询价状态", "按钮", "删除房", 1, siteId]
		}
	],
	'tab-arrange_quote-content':[//报价管理
		{
			key: '#tab-arrange_quote-content .T-btn-quote-search',
			args:  ["_trackEvent", "报价管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-quote-add',
			args:  ["_trackEvent", "报价管理", "按钮", "新增报价", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-status',
			args:  ["_trackEvent", "报价管理", "按钮", "询价状态", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-update',
			args:  ["_trackEvent", "报价管理", "按钮", "修改", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-copy',
			args:  ["_trackEvent", "报价管理", "按钮", "复制", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-view',
			args:  ["_trackEvent", "报价管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-delete',
			args:  ["_trackEvent", "报价管理", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-content .T-share',
			args:  ["_trackEvent", "报价管理", "按钮", "分享", 1, siteId]
		}	
	],
	'tab-arrange_quote-update-content':[
		{//修改报价 报价详情
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy .T-addInsurance',
			args:  ["_trackEvent", "修改报价", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy .T-addBusCompany',
			args:  ["_trackEvent", "修改报价", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "修改报价", "按钮", "删除保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "修改报价", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy .T-busCompanyForm .T-car',
			args:  ["_trackEvent", "修改报价", "按钮", "车俩询价", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addRestaurant',
			args:  ["_trackEvent", "修改报价", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addHotel',
			args:  ["_trackEvent", "修改报价", "按钮", "新增酒店", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addScenic',
			args:  ["_trackEvent", "修改报价", "按钮", "新增景区", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addSelfPay',
			args:  ["_trackEvent", "修改报价", "按钮", "新增自费", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addTraffic',
			args:  ["_trackEvent", "修改报价", "按钮", "新增交通", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-addOther',
			args:  ["_trackEvent", "修改报价", "按钮", "新增其他", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-update-content #quoteContent-update-copy #dayListupdate-0 .T-hotel',
			args:  ["_trackEvent", "修改报价", "按钮", "酒店询价", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content #quoteContent-update-copy  .T-btn-submit-quote',
			args:  ["_trackEvent", "修改报价", "按钮", "提交", 1, siteId]
		},
		{//询价状态
			key: '#tab-arrange_quote-update-content  #inquiryContent-update-copy .T-refresh-status',
			args:  ["_trackEvent", "修改报价", "按钮", "刷新", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content  #inquiryContent-update-copy #busInquiryResult-update-update .T-bus-delete',
			args:  ["_trackEvent", "修改报价", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-update-content  #inquiryContent-update-copy #hotelInquiryContent-update-update .T-hotel-delete',
			args:  ["_trackEvent", "修改报价", "按钮", "删除房", 1, siteId]
		}
	],
	'tab-arrange_quote-copy-content':[
		{// 复制报价 报价详情
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update .T-addInsurance',
			args:  ["_trackEvent", "复制报价", "按钮", "新增保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update .T-addBusCompany',
			args:  ["_trackEvent", "复制报价", "按钮", "新增车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update .T-insuranceForm .T-delTr',
			args:  ["_trackEvent", "复制报价", "按钮", "删除保险", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update .T-busCompanyForm .T-delTr',
			args:  ["_trackEvent", "复制报价", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update .T-busCompanyForm .T-car',
			args:  ["_trackEvent", "复制报价", "按钮", "车俩询价", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addRestaurant',
			args:  ["_trackEvent", "复制报价", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addHotel',
			args:  ["_trackEvent", "复制报价", "按钮", "新增酒店", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addScenic',
			args:  ["_trackEvent", "复制报价", "按钮", "新增景区", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addSelfPay',
			args:  ["_trackEvent", "复制报价", "按钮", "新增自费", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addTraffic',
			args:  ["_trackEvent", "复制报价", "按钮", "新增交通", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-addOther',
			args:  ["_trackEvent", "复制报价", "按钮", "新增其他", 1, siteId]
		},
		{
			key:'#tab-arrange_quote-copy-content #quoteContent-update-update #dayListupdate-0 .T-hotel',
			args:  ["_trackEvent", "复制报价", "按钮", "酒店询价", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content #quoteContent-update-update  .T-btn-submit-quote',
			args:  ["_trackEvent", "复制报价", "按钮", "提交", 1, siteId]
		},
		{//询价状态
			key: '#tab-arrange_quote-copy-content  #inquiryContent-update-update .T-refresh-status',
			args:  ["_trackEvent", "复制报价", "按钮", "刷新", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content  #inquiryContent-update-update #busInquiryResult-update-update .T-bus-delete',
			args:  ["_trackEvent", "复制报价", "按钮", "删除车队", 1, siteId]
		},
		{
			key: '#tab-arrange_quote-copy-content  #inquiryContent-update-update #hotelInquiryContent-update-update .T-hotel-delete',
			args:  ["_trackEvent", "复制报价", "按钮", "删除房", 1, siteId]
		}
	],
	'tab-resource_touristGroup-content':[ //游客管理
		{
			key: '#tab-resource_touristGroup-content .T-touristGroupList-search',
			args:  ["_trackEvent", "游客管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-content .T-touristGroup-add',
			args:  ["_trackEvent", "游客管理", "按钮", "新增小组", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-content .T-view',
			args:  ["_trackEvent", "游客管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-content .T-edit',
			args:  ["_trackEvent", "游客管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-content .T-del',
			args:  ["_trackEvent", "游客管理", "按钮", "删除", 1, siteId]
		}
	],
	'tab-resource_touristGroup-add-content':[
		{//添加游客
			key: '#tab-resource_touristGroup-add-content .T-addPartner',
			args:  ["_trackEvent", "添加游客", "按钮", "添加客户", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-addPartnerManager',
			args:  ["_trackEvent", "添加游客", "按钮", "未客户来源添加联系人", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-touristGroup-addOtherCost',
			args:  ["_trackEvent", "添加游客", "按钮", "新增费用项", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-add-tourist',
			args:  ["_trackEvent", "添加游客", "按钮", "添加成员", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-add-tourist-more',
			args:  ["_trackEvent", "添加游客", "按钮", "批量添加", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-ChosenQuoteNumber',
			args:  ["_trackEvent", "添加游客", "按钮", "选择报价线路产品", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-travelLine-search',
			args:  ["_trackEvent", "添加游客", "按钮", "选择线路产品", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .btnDeleteTourist',
			args:  ["_trackEvent", "编辑游客", "按钮", "删除游客", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-add-content .T-submit-addTouristGroup guideSubmit',
			args:  ["_trackEvent", "添加游客", "按钮", "提交", 1, siteId]
		}
	],
	'tab-resource_touristGroup-update-content':[
		{//编辑游客
			key: '#tab-resource_touristGroup-update-content .T-addPartner',
			args:  ["_trackEvent", "编辑游客", "按钮", "添加客户", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-addPartnerManager',
			args:  ["_trackEvent", "编辑游客", "按钮", "未客户来源添加联系人", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-touristGroup-addOtherCost',
			args:  ["_trackEvent", "编辑游客", "按钮", "新增费用项", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-add-tourist',
			args:  ["_trackEvent", "编辑游客", "按钮", "添加成员", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-add-tourist-more',
			args:  ["_trackEvent", "编辑游客", "按钮", "批量添加", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .btnDeleteTourist',
			args:  ["_trackEvent", "编辑游客", "按钮", "删除游客", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-ChosenQuoteNumber',
			args:  ["_trackEvent", "编辑游客", "按钮", "选择报价线路产品", 1, siteId]
		},
		{
			key: '#tab-resource_touristGroup-update-content .T-submit-updateTouristGroup',
			args:  ["_trackEvent", "编辑小组", "按钮", "提交", 1, siteId]
		}
	],
	'tab-arrange_transit-content':[ //中转安排
		{
			key: '#tab-arrange_transit-content .T-btn-transitList-search',
			args:  ["_trackEvent", "中转安排", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-content .T-send',
			args:  ["_trackEvent", "中转安排", "按钮", "通知", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-content .T-edit',
			args:  ["_trackEvent", "中转安排", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-content .T-view',
			args:  ["_trackEvent", "中转安排", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-content .T-export',
			args:  ["_trackEvent", "中转安排", "按钮", "导出", 1, siteId]
		}
	],
	'tab-arrange_transit-update-content':[
		{//编辑中转安排
			key: '#tab-arrange_transit-update-content #receptionList .T-btn-bus-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增车俩", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-update-content #receptionList .T-btn-hotel-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-update-content #receptionList .T-btn-ticket-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增票务", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-update-content #receptionList .T-btn-restaurant-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增餐厅", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-update-content #receptionList .T-btn-other-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增其他", 1, siteId]
		},
		{//小车
			key: '#tab-arrange_transit-update-content #carList .T-btn-bus-add',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "新增车俩", 1, siteId]
		},
		{
			key: '#tab-arrange_transit-update-content #carList .T-arrange-delete',
			args:  ["_trackEvent", "编辑中转安排", "按钮", "删除", 1, siteId]
		}
	],
	'tab-resource_subsection-content':[ //中转分段
		{
			key: '#tab-resource_subsection-content .T-btn-subsection-search',
			args:  ["_trackEvent", "中转分段", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-resource_subsection-content .T-btn-subsection',
			args:  ["_trackEvent", "中转分段", "按钮", "分段", 1, siteId]
		},
		{
			key: '#tab-resource_subsection-content .T-btn-subsection-revoke',
			args:  ["_trackEvent", "中转分段", "按钮", "撤销", 1, siteId]
		}
	],
	'tab-resource_subsection-operation-content':[
		{//分段操作
			key: '#tab-resource_subsection-operation-content .T-btn-subsection-revoke',
			args:  ["_trackEvent", "分段操作", "按钮", "新增分段", 1, siteId]
		},
		{
			key: '#tab-resource_subsection-operation-content .T-btn-operation-delete',
			args:  ["_trackEvent", "分段操作", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-resource_subsection-operation-content .T-btn-operation-close',
			args:  ["_trackEvent", "分段操作", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-resource_subsection-operation-content .T-btn-operation-save',
			args:  ["_trackEvent", "分段操作", "按钮", "保存", 1, siteId]
		}
	],
	'tab-arrange_tourist-content':[//并团转客
		{ //散拼
			key: '#tab-arrange_tourist-content #T-Visitor-list .T-visitorTourist-search',
			args:  ["_trackEvent", "并团转客", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_tourist-content #T-Visitor-list .T-arrageVisitor-view',
			args:  ["_trackEvent", "并团转客", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_tourist-content #T-Visitor-list .T-start-touristGroup-merge',
			args:  ["_trackEvent", "并团转客", "按钮", "开始并团", 1, siteId]
		},
		{//转客
			key: '#tab-arrange_tourist-content #T-Transfer-list .T-Transfer-search',
			args:  ["_trackEvent", "并团转客", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_tourist-content #T-Transfer-list .T-arrageTransfer-view',
			args:  ["_trackEvent", "并团转客", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_tourist-content #T-Transfer-list .T-arrageTransfer-inner',
			args:  ["_trackEvent", "并团转客", "按钮", "内转", 1, siteId]
		},
		{
			key: '#tab-arrange_tourist-content #T-Transfer-list .T-arrageTransfer-out',
			args:  ["_trackEvent", "并团转客", "按钮", "外转", 1, siteId]
		}
	],
	'tab-arrange_inner_Transfer-content':[//内转管理
		{//我部转出
			key: '#tab-arrange_inner_Transfer-content #inner-TransferOut .T-transferOut-search',
			args:  ["_trackEvent", "内转管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferOut .T-transfer-export',
			args:  ["_trackEvent", "内转管理", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferOut .T-TransferOut-edit',
			args:  ["_trackEvent", "内转管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferOut .T-TransferOut-view',
			args:  ["_trackEvent", "内转管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferOut .T-TransferOut-delete',
			args:  ["_trackEvent", "内转管理", "按钮", "撤销", 1, siteId]
		},
		
		{//他部转入
			key: '#tab-arrange_inner_Transfer-content #inner-TransferIn .T-transferIn-search',
			args:  ["_trackEvent", "内转管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferIn .T-transfer-export',
			args:  ["_trackEvent", "内转管理", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferIn .T-TransferIn-save',
			args:  ["_trackEvent", "内转管理", "按钮", "确认", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferIn .T-TransferIn-view',
			args:  ["_trackEvent", "内转管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-content #inner-TransferIn .T-TransferIn-refuse',
			args:  ["_trackEvent", "内转管理", "按钮", "拒绝", 1, siteId]
		}
	],
	'tab-arrange_inner_Transfer-edit-content':[
		{//修改内转信息
			key: '#tab-arrange_inner_Transfer-edit-content .T-transfer-addCost',
			args:  ["_trackEvent", "修改内转信息", "按钮", "新增费用项", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-edit-content .T-edittransfer-delete',
			args:  ["_trackEvent", "修改内转信息", "按钮", "删除费用项", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-edit-content .T-cancelTransfer',
			args:  ["_trackEvent", "修改内转信息", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-arrange_inner_Transfer-edit-content .T-saveTransoutInfo',
			args:  ["_trackEvent", "修改内转信息", "按钮", "保存", 1, siteId]
		}
	],
	'tab-arrange_transfer-content':[//外转管理
		{//我社转出
			key: '#tab-arrange_transfer-content #Transfer-Out .T-transferOut-search',
			args:  ["_trackEvent", "外转管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-Out .T-transferOut-export',
			args:  ["_trackEvent", "外转管理", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-Out .T-transfer-edit',
			args:  ["_trackEvent", "外转管理", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-Out .T-transfer-view',
			args:  ["_trackEvent", "外转管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-Out .T-transfer-delete',
			args:  ["_trackEvent", "外转管理", "按钮", "撤销", 1, siteId]
		},
	
		{//同行转入
			key: '#tab-arrange_transfer-content #Transfer-In .T-transferIn-search',
			args:  ["_trackEvent", "外转管理", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-In .T-transfer-export',
			args:  ["_trackEvent", "外转管理", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-In .T-TransferIn-save',
			args:  ["_trackEvent", "外转管理", "按钮", "确认", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-In .T-transferIn-view',
			args:  ["_trackEvent", "外转管理", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-content #Transfer-In .T-TransferIn-refuse',
			args:  ["_trackEvent", "外转管理", "按钮", "拒绝", 1, siteId]
		}
	],
	'tab-arrange_transfer-updateTransferOut-content':[
		{//编辑我社转出
			key: '#tab-arrange_transfer-updateTransferOut-content . T-transfer-addCost',
			args:  ["_trackEvent", "编辑我社转出", "按钮", "新增费用项", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-updateTransferOut-content .T-updateTransfer-delete',
			args:  ["_trackEvent", "编辑我社转出", "按钮", "删除费用项", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-updateTransferOut-content .T-cancelTransfer',
			args:  ["_trackEvent", "编辑我社转出", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-arrange_transfer-updateTransferOut-content .T-saveTransoutInfo',
			args:  ["_trackEvent", "编辑我社转出", "按钮", "保存", 1, siteId]
		}
	],
	'tab-arrange_plan-content' :[ //发团计划
		{//团体
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-btn-tripPlan-search',
			args:  ["_trackEvent", "发团计划", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-btn-tripPlan-add',
			args:  ["_trackEvent", "发团计划", "按钮", "新增团队计划", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-hair-regiment',
			args:  ["_trackEvent", "发团计划", "按钮", "发团", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-view',
			args:  ["_trackEvent", "发团计划", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-update',
			args:  ["_trackEvent", "发团计划", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-export',
			args:  ["_trackEvent", "发团计划", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-cancel',
			args:  ["_trackEvent", "发团计划", "按钮", "取消", 1, siteId]
		},
		
		{//散客
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-btn-tripPlan-search',
			args:  ["_trackEvent", "团体", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-btn-tripPlan-add',
			args:  ["_trackEvent", "团体", "按钮", "新增团队计划", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-hair-regiment',
			args:  ["_trackEvent", "团体", "按钮", "发团", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-view',
			args:  ["_trackEvent", "团体", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-update',
			args:  ["_trackEvent", "团体", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-export',
			args:  ["_trackEvent", "团体", "按钮", "导出", 1, siteId]
		},
		{
			key: '#tab-arrange_plan-content #arrangePlanTab_2 .T-cancel',
			args:  ["_trackEvent", "团体", "按钮", "取消", 1, siteId]
		}
	],
	'tab-arrange_plan_single_add-content':[
		{//新增散客计划
			key: '#tab-arrange_plan_single_add-content .T-add-days',
			args:  ["_trackEvent", "新增散客计划", "按钮", "新增行程安排", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-update-detail',
			args:  ["_trackEvent", "新增散客计划", "按钮", "编辑行程详情", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-delete',
			args:  ["_trackEvent", "新增散客计划", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-add-touristGroup',
			args:  ["_trackEvent", "新增散客计划", "按钮", "选择游客", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-groupView',
			args:  ["_trackEvent", "新增散客计划", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-groupDelete',
			args:  ["_trackEvent", "新增散客计划", "按钮", "删除", 1, siteId]
		},
		
		{
			key: '#tab-arrange_plan_single_add-content .T-cancelPlan',
			args:  ["_trackEvent", "新增散客计划", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_single_add-content .T-savePlan',
			args:  ["_trackEvent", "新增散客计划", "按钮", "保存", 1, siteId]
		}
	],
	'tab-arrange_plan_group_update-content':[
		{//编辑团队计划
			key: '#tab-arrange_plan_group_update-content .T-add-days',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "新增行程安排", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-update-detail',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "编辑行程详情", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-delete',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-add-tourists',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "添加成员", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-add-tourists-batch',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "批量添加", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-delete',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-add-fee',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "新增费用项", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-delete',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-cancelPlan',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-arrange_plan_group_update-content .T-savePlan',
			args:  ["_trackEvent", "编辑团队计划", "按钮", "保存", 1, siteId]
		}
	],
	'tab-arrange_all-content':[//发团安排
		{
			key: '#tab-arrange_all-content .T-btn-tripPlan-search',
			args:  ["_trackEvent", "发团安排", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_all-content .T-send',
			args:  ["_trackEvent", "发团安排", "按钮", "通知", 1, siteId]
		},
		{
			key: '#tab-arrange_all-content .T-view',
			args:  ["_trackEvent", "发团安排", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_all-content .T-plan',
			args:  ["_trackEvent", "发团安排", "按钮", "安排", 1, siteId]
		}
	],
	'tab-arrange_all-update-content':[
		{//编辑发团安排  导游
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_guide .T-addResource ',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增导游", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_guide .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除导游", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content  .T-cancel',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "取消", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content .T-btn-submit-tripPlan',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "提交信息", 1, siteId]
		},
		{// 保险
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_insurance .T-addInsurance ',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增导游", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_insurance .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除导游", 1, siteId]
		},
		{// 车俩
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-addBus',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增车俩", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-bus-askPrice',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "询价", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-bus-offerStatus',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "查看车队询价状态", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-bus-bookingStatus',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "预定", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-bus-bookingView',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "查看车队信息", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_bus .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除", 1, siteId]
		},
		{// 餐饮
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_restaurant .T-addRestaurant',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增餐饮", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_restaurant .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除", 1, siteId]
		},
		{// 住宿
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-addHotel',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-hotel-askPrice',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "询价", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-hotel-offerStatus',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "查看酒店询价状态", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-hotel-bookingStatus',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "预定", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-hotel-bookingView',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "查看酒店信息", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-booking',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "一键询价", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_hotel .T-asking',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "一键预定", 1, siteId]
		},
		{// 景区
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_scenic .T-addScenic',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_scenic .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除景区", 1, siteId]
		},
		{// 票务
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_ticket .T-addTicket',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增票务", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_ticket .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除票务", 1, siteId]
		},
		{// 购物
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_shop .T-addShop',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增票务", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_shop .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除票务", 1, siteId]
		},
		{// 自费
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_selfPay .T-addSelfPay',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增自费", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_selfPay .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除自费", 1, siteId]
		},
		{// 其他
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_other .T-addOther',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "新增其他", 1, siteId]
		},
		{
			key: '#tab-arrange_all-update-content #tripPlan_addPlan_other .T-btn-deleteTripPlanList',
			args:  ["_trackEvent", "编辑发团安排", "按钮", "删除其他", 1, siteId]
		}
	],
	'tab-arrange_orderManage-content':[ //订单管理
		{//车
			key: '#tab-arrange_orderManage-content #T-BusCompany-list .T-busCompanyOrder-search',
			args:  ["_trackEvent", "订单管理", "按钮", "搜索", 1, siteId]
		},
		{//酒店
			key: '#tab-arrange_orderManage-content #T-HotelOrder-list .T-hotelOrder-search',
			args:  ["_trackEvent", "订单管理", "按钮", "搜索", 1, siteId]
		}
	],
	'tab-arrange_booking-content':[ //项目代订
		{
			key: '#tab-arrange_booking-content .T-booking-search',
			args:  ["_trackEvent", "项目代订", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-content .T-Booking-add',
			args:  ["_trackEvent", "项目代订", "按钮", "新增项目代订", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-content .T-view',
			args:  ["_trackEvent", "项目代订", "按钮", "查看", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-content .T-edit',
			args:  ["_trackEvent", "项目代订", "按钮", "编辑", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-content .T-cancel',
			args:  ["_trackEvent", "项目代订", "按钮", "取消", 1, siteId]
		}
	],
	'tab-arrange_booking-update-content':[
		{//修改项目代订
			key: '#tab-arrange_booking-update-content .T-hotel-add',
			args:  ["_trackEvent", "修改项目代订", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-scenic-add',
			args:  ["_trackEvent", "修改项目代订", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-ticket-add',
			args:  ["_trackEvent", "修改项目代订", "按钮", "新增票务代订", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-bus-add',
			args:  ["_trackEvent", "修改项目代订", "按钮", "新增旅游车", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-hotel-delete',
			args:  ["_trackEvent", "修改项目代订", "按钮", "删除酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-scenic-delete',
			args:  ["_trackEvent", "修改项目代订", "按钮", "删除景区", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-ticket-delete',
			args:  ["_trackEvent", "修改项目代订", "按钮", "删除票务", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-bus-delete',
			args:  ["_trackEvent", "修改项目代订", "按钮", "删除旅游车", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-update-content .T-submit-booking',
			args:  ["_trackEvent", "修改项目代订", "按钮", "提交信息", 1, siteId]
		}
	],
	'tab-arrange_booking-add-content':[
		{//新增项目代订
			key: '#tab-arrange_booking-add-content .T-hotel-add',
			args:  ["_trackEvent", "新增项目代订", "按钮", "新增酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-scenic-add',
			args:  ["_trackEvent", "新增项目代订", "按钮", "新增景区", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-ticket-add',
			args:  ["_trackEvent", "新增项目代订", "按钮", "新增票务代订", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-bus-add',
			args:  ["_trackEvent", "新增项目代订", "按钮", "新增旅游车", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-hotel-delete',
			args:  ["_trackEvent", "新增项目代订", "按钮", "删除酒店", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-scenic-delete',
			args:  ["_trackEvent", "新增项目代订", "按钮", "删除景区", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-ticket-delete',
			args:  ["_trackEvent", "新增项目代订", "按钮", "删除票务", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-bus-delete',
			args:  ["_trackEvent", "新增项目代订", "按钮", "删除旅游车", 1, siteId]
		},
		{
			key: '#tab-arrange_booking-add-content .T-submit-booking',
			args:  ["_trackEvent", "新增项目代订", "按钮", "提交信息", 1, siteId]
		}
	],
	//业务分析
	'tab-business_analyst_saleProduct-content':[
		{//产品销量
			key: '#tab-business_analyst_saleProduct-content .T-saleProduct-search',
			args:  ["_trackEvent", "产品销量", "按钮", "搜索", 1, siteId]
		}
	],
	'tab-business_analyst_employeePerfor-content':[
		{//员工业绩
			key: '#tab-business_analyst_employeePerfor-content .T-employeePerfor-search',
			args:  ["_trackEvent", "员工业绩", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-business_analyst_employeePerfor-content .T-employeePerfor-search',
			args:  ["_trackEvent", "员工业绩", "按钮", "搜索", 1, siteId]
		}
	],
	'tab-business_analyst_sourDstribution-content':[
		{//客源分布
			key: '#tab-business_analyst_sourDstribution-content .T-saleProduct-search',
			args:  ["_trackEvent", "客源分布", "按钮", "搜索", 1, siteId]
		}
	],
	'tab-business_analyst_customerVol-content':[
		{//客户客量
			key: '#tab-business_analyst_customerVol-content .T-saleProduct-search',
			args:  ["_trackEvent", "客户客量", "按钮", "搜索", 1, siteId]
		},
		{
			key: '#tab-business_analyst_customerVol-content .btn-partnerAgency-view',
			args:  ["_trackEvent", "客户客量", "按钮", "查看", 1, siteId]
		}
	],
	'tab-business_analyst_tourguidePerfor-content':[
		{//导游业绩
			key: '#tab-business_analyst_tourguidePerfor-content .T-tourguidPer-search',
			args:  ["_trackEvent", "导游业绩", "按钮", "搜索", 1, siteId]
		}
	]
}


	);

Analyze.data = $.extend({}, Analyze.data,

 {
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

	);
