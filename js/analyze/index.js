
var data = {
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