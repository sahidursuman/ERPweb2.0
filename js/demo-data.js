var DemoData = {};

DemoData.userInfo = {"unReadBusCompanyOffer":0,"mobileNumber":"15881158856","listUserFunctionShip":"[{\"menuId\":2,\"functionName\":\"新增导游\",\"functionCode\":\"1010002\"},{\"menuId\":2,\"functionName\":\"修改导游\",\"functionCode\":\"1010003\"},{\"menuId\":2,\"functionName\":\"删除导游\",\"functionCode\":\"1010004\"},{\"menuId\":3,\"functionName\":\"新增车队\",\"functionCode\":\"1020002\"},{\"menuId\":3,\"functionName\":\"修改车队\",\"functionCode\":\"1020003\"},{\"menuId\":3,\"functionName\":\"删除车队\",\"functionCode\":\"1020004\"},{\"menuId\":6,\"functionName\":\"新增餐厅\",\"functionCode\":\"1030002\"},{\"menuId\":6,\"functionName\":\"修改餐厅\",\"functionCode\":\"1030003\"},{\"menuId\":6,\"functionName\":\"删除餐厅\",\"functionCode\":\"1030004\"},{\"menuId\":7,\"functionName\":\"新增酒店\",\"functionCode\":\"1040002\"},{\"menuId\":7,\"functionName\":\"修改酒店\",\"functionCode\":\"1040003\"},{\"menuId\":7,\"functionName\":\"删除酒店\",\"functionCode\":\"1040004\"},{\"menuId\":8,\"functionName\":\"新增商家\",\"functionCode\":\"1050002\"},{\"menuId\":8,\"functionName\":\"修改商家\",\"functionCode\":\"1050003\"},{\"menuId\":8,\"functionName\":\"删除商家\",\"functionCode\":\"1050004\"},{\"menuId\":9,\"functionName\":\"新增景区\",\"functionCode\":\"1060002\"},{\"menuId\":9,\"functionName\":\"修改景区\",\"functionCode\":\"1060003\"},{\"menuId\":9,\"functionName\":\"删除景区\",\"functionCode\":\"1060004\"},{\"menuId\":10,\"functionName\":\"新增票务\",\"functionCode\":\"1070002\"},{\"menuId\":10,\"functionName\":\"修改票务\",\"functionCode\":\"1070003\"},{\"menuId\":10,\"functionName\":\"删除票务\",\"functionCode\":\"1070004\"},{\"menuId\":11,\"functionName\":\"新增保险\",\"functionCode\":\"1080002\"},{\"menuId\":11,\"functionName\":\"修改保险\",\"functionCode\":\"1080003\"},{\"menuId\":11,\"functionName\":\"删除保险\",\"functionCode\":\"1080004\"},{\"menuId\":12,\"functionName\":\"新增自费\",\"functionCode\":\"1090002\"},{\"menuId\":12,\"functionName\":\"修改自费\",\"functionCode\":\"1090003\"},{\"menuId\":12,\"functionName\":\"删除自费\",\"functionCode\":\"1090004\"},{\"menuId\":5,\"functionName\":\"新增线路模板\",\"functionCode\":\"1100002\"},{\"menuId\":5,\"functionName\":\"修改线路模板\",\"functionCode\":\"1100003\"},{\"menuId\":5,\"functionName\":\"删除线路模板\",\"functionCode\":\"1100004\"},{\"menuId\":5,\"functionName\":\"复制线路模板\",\"functionCode\":\"1100005\"},{\"menuId\":21,\"functionName\":\"新增线路产品\",\"functionCode\":\"1110002\"},{\"menuId\":21,\"functionName\":\"修改线路产品\",\"functionCode\":\"1110003\"},{\"menuId\":21,\"functionName\":\"删除线路产品\",\"functionCode\":\"1110004\"},{\"menuId\":21,\"functionName\":\"复制线路产品\",\"functionCode\":\"1110005\"},{\"menuId\":21,\"functionName\":\"导出线路产品\",\"functionCode\":\"1110006\"},{\"menuId\":13,\"functionName\":\"新增游客\",\"functionCode\":\"1120002\"},{\"menuId\":13,\"functionName\":\"修改游客\",\"functionCode\":\"1120003\"},{\"menuId\":13,\"functionName\":\"删除游客\",\"functionCode\":\"1120004\"},{\"menuId\":122,\"functionName\":\"分团\",\"functionCode\":\"1130002\"},{\"menuId\":121,\"functionName\":\"外传\",\"functionCode\":\"1130003\"},{\"menuId\":122,\"functionName\":\"并团\",\"functionCode\":\"1130004\"},{\"menuId\":121,\"functionName\":\"内转\",\"functionCode\":\"1130005\"},{\"menuId\":16,\"functionName\":\"新增团队计划\",\"functionCode\":\"1140002\"},{\"menuId\":16,\"functionName\":\"修改团队计划\",\"functionCode\":\"1140003\"},{\"menuId\":16,\"functionName\":\"取消团队计划\",\"functionCode\":\"1140004\"},{\"menuId\":16,\"functionName\":\"导出团队计划\",\"functionCode\":\"1140005\"},{\"menuId\":16,\"functionName\":\"确认发团\",\"functionCode\":\"1140006\"},{\"menuId\":17,\"functionName\":\"修改安排\",\"functionCode\":\"1140007\"},{\"menuId\":17,\"functionName\":\"安排通知\",\"functionCode\":\"1140010\"},{\"menuId\":4,\"functionName\":\"新增同行\",\"functionCode\":\"1150002\"},{\"menuId\":4,\"functionName\":\"修改同行\",\"functionCode\":\"1150003\"},{\"menuId\":4,\"functionName\":\"删除同行\",\"functionCode\":\"1150004\"},{\"menuId\":90,\"functionName\":\"修改中转安排\",\"functionCode\":\"1160002\"},{\"menuId\":90,\"functionName\":\"导出中转安排\",\"functionCode\":\"1160003\"},{\"menuId\":90,\"functionName\":\"中转安排通知\",\"functionCode\":\"1160004\"},{\"menuId\":87,\"functionName\":\"新增项目代订\",\"functionCode\":\"1170002\"},{\"menuId\":87,\"functionName\":\"修改项目代订\",\"functionCode\":\"1170003\"},{\"menuId\":87,\"functionName\":\"删除项目代订\",\"functionCode\":\"1170004\"},{\"menuId\":19,\"functionName\":\"编辑转客信息\",\"functionCode\":\"1180003\"},{\"menuId\":19,\"functionName\":\"撤销转客\",\"functionCode\":\"1180004\"},{\"menuId\":19,\"functionName\":\"导出转客名单\",\"functionCode\":\"1180005\"},{\"menuId\":19,\"functionName\":\"接收同行转入\",\"functionCode\":\"1180007\"},{\"menuId\":19,\"functionName\":\"拒绝同行转入\",\"functionCode\":\"1180008\"},{\"menuId\":80,\"functionName\":\"（计调）审核\",\"functionCode\":\"1190002\"},{\"menuId\":80,\"functionName\":\"（财务）审核\",\"functionCode\":\"1190003\"},{\"menuId\":80,\"functionName\":\"报账\",\"functionCode\":\"1190004\"},{\"menuId\":64,\"functionName\":\"对账\",\"functionCode\":\"1200002\"},{\"menuId\":64,\"functionName\":\"付款\",\"functionCode\":\"1200003\"},{\"menuId\":66,\"functionName\":\"对账\",\"functionCode\":\"1210002\"},{\"menuId\":66,\"functionName\":\"付款\",\"functionCode\":\"1210003\"},{\"menuId\":67,\"functionName\":\"对账\",\"functionCode\":\"1220002\"},{\"menuId\":67,\"functionName\":\"付款\",\"functionCode\":\"1220003\"},{\"menuId\":68,\"functionName\":\"对账\",\"functionCode\":\"1230002\"},{\"menuId\":68,\"functionName\":\"付款\",\"functionCode\":\"1230003\"},{\"menuId\":69,\"functionName\":\"对账\",\"functionCode\":\"1240002\"},{\"menuId\":69,\"functionName\":\"付款\",\"functionCode\":\"1240003\"},{\"menuId\":70,\"functionName\":\"对账\",\"functionCode\":\"1250002\"},{\"menuId\":70,\"functionName\":\"付款\",\"functionCode\":\"1250003\"},{\"menuId\":71,\"functionName\":\"对账\",\"functionCode\":\"1260002\"},{\"menuId\":71,\"functionName\":\"付款\",\"functionCode\":\"1260003\"},{\"menuId\":72,\"functionName\":\"对账\",\"functionCode\":\"1270002\"},{\"menuId\":72,\"functionName\":\"付款\",\"functionCode\":\"1270003\"},{\"menuId\":73,\"functionName\":\"对账\",\"functionCode\":\"1280002\"},{\"menuId\":73,\"functionName\":\"付款\",\"functionCode\":\"1280003\"},{\"menuId\":74,\"functionName\":\"对账\",\"functionCode\":\"1290002\"},{\"menuId\":74,\"functionName\":\"付款\",\"functionCode\":\"1290003\"},{\"menuId\":76,\"functionName\":\"对账\",\"functionCode\":\"1300002\"},{\"menuId\":76,\"functionName\":\"付款\",\"functionCode\":\"1300003\"},{\"menuId\":77,\"functionName\":\"对账\",\"functionCode\":\"1310002\"},{\"menuId\":77,\"functionName\":\"付款\",\"functionCode\":\"1310003\"},{\"menuId\":106,\"functionName\":\"对账\",\"functionCode\":\"1320002\"},{\"menuId\":106,\"functionName\":\"付款\",\"functionCode\":\"1320003\"},{\"menuId\":95,\"functionName\":\"导出名单\",\"functionCode\":\"1340001\"},{\"menuId\":95,\"functionName\":\"编辑转出\",\"functionCode\":\"1340002\"},{\"menuId\":95,\"functionName\":\"撤销转出\",\"functionCode\":\"1340003\"},{\"menuId\":95,\"functionName\":\"确认转入\",\"functionCode\":\"1340004\"},{\"menuId\":95,\"functionName\":\"拒绝转入\",\"functionCode\":\"1340005\"},{\"menuId\":91,\"functionName\":\"分段操作\",\"functionCode\":\"1350001\"},{\"menuId\":91,\"functionName\":\"撤销分段\",\"functionCode\":\"1350002\"},{\"menuId\":92,\"functionName\":\"对账\",\"functionCode\":\"1360001\"},{\"menuId\":92,\"functionName\":\"付款\",\"functionCode\":\"1360002\"},{\"menuId\":93,\"functionName\":\"对账\",\"functionCode\":\"1370001\"},{\"menuId\":93,\"functionName\":\"付款\",\"functionCode\":\"1370002\"},{\"menuId\":65,\"functionName\":\"新增业务部\",\"functionCode\":\"1410001\"},{\"menuId\":65,\"functionName\":\"新增子部门\",\"functionCode\":\"1410002\"},{\"menuId\":65,\"functionName\":\"修改业务部\",\"functionCode\":\"1410003\"},{\"menuId\":65,\"functionName\":\"修改子部门\",\"functionCode\":\"1410004\"},{\"menuId\":61,\"functionName\":\"新增人员\",\"functionCode\":\"1420001\"},{\"menuId\":61,\"functionName\":\"修改人员\",\"functionCode\":\"1420002\"},{\"menuId\":61,\"functionName\":\"分配权限\",\"functionCode\":\"1420003\"},{\"menuId\":64,\"functionName\":\"取消对账\",\"functionCode\":\"1200005\"},{\"menuId\":66,\"functionName\":\"取消对账\",\"functionCode\":\"1210005\"},{\"menuId\":67,\"functionName\":\"取消对账\",\"functionCode\":\"1220005\"},{\"menuId\":68,\"functionName\":\"取消对账\",\"functionCode\":\"1230005\"},{\"menuId\":69,\"functionName\":\"取消对账\",\"functionCode\":\"1240005\"},{\"menuId\":70,\"functionName\":\"取消对账\",\"functionCode\":\"1250005\"},{\"menuId\":71,\"functionName\":\"取消对账\",\"functionCode\":\"1260005\"},{\"menuId\":72,\"functionName\":\"取消对账\",\"functionCode\":\"1270005\"},{\"menuId\":73,\"functionName\":\"取消对账\",\"functionCode\":\"1280005\"},{\"menuId\":74,\"functionName\":\"取消对账\",\"functionCode\":\"1290005\"},{\"menuId\":76,\"functionName\":\"取消对账\",\"functionCode\":\"1300005\"},{\"menuId\":77,\"functionName\":\"取消对账\",\"functionCode\":\"1310005\"},{\"menuId\":106,\"functionName\":\"取消对账\",\"functionCode\":\"1320005\"},{\"menuId\":92,\"functionName\":\"取消对账\",\"functionCode\":\"1360005\"},{\"menuId\":93,\"functionName\":\"取消对账\",\"functionCode\":\"1370005\"},{\"menuId\":21,\"functionName\":\"新增报价\",\"functionCode\":\"1440001\"},{\"menuId\":102,\"functionName\":\"修改报价\",\"functionCode\":\"1440002\"},{\"menuId\":102,\"functionName\":\"删除报价\",\"functionCode\":\"1440003\"},{\"menuId\":120,\"functionName\":\"新增散客计划\",\"functionCode\":\"1460002\"},{\"menuId\":120,\"functionName\":\"修改散客计划\",\"functionCode\":\"1460003\"},{\"menuId\":120,\"functionName\":\"取消散客计划\",\"functionCode\":\"1460004\"},{\"menuId\":120,\"functionName\":\"确认发团\",\"functionCode\":\"1460006\"},{\"menuId\":120,\"functionName\":\"导出散客计划\",\"functionCode\":\"1460005\"}]","userName":"roger","message":"已登录","userId":107,"onlinePay":"1","unReadHotelOffer":0,"messageStatus":1,"realName":"魏桂云","groupName":"计调","success":"1","pusherKey":"73878e4e933b5f85bf38"};

DemoData.menuInfo = {"menuList":"[{\"id\":89,\"name\":\"消息中心\",\"menuKey\":\"public_message\",\"icon\":null,\"childMenuList\":[]},{\"id\":20,\"name\":\"工作台\",\"menuKey\":\"dashboard \",\"icon\":\"fa-tachometer\",\"childMenuList\":[]},{\"id\":1,\"name\":\"资源管理\",\"menuKey\":\"resource\",\"icon\":\"fa-database\",\"childMenuList\":[{\"id\":2,\"name\":\"导游管理\",\"menuKey\":\"resource_guide\",\"icon\":null,\"childMenuList\":null},{\"id\":3,\"name\":\"车队管理\",\"menuKey\":\"resource_busCompany\",\"icon\":null,\"childMenuList\":null},{\"id\":6,\"name\":\"餐厅管理\",\"menuKey\":\"resource_restaurant\",\"icon\":null,\"childMenuList\":null},{\"id\":7,\"name\":\"酒店管理\",\"menuKey\":\"resource_hotel\",\"icon\":null,\"childMenuList\":null},{\"id\":10,\"name\":\"票务管理\",\"menuKey\":\"resource_ticket\",\"icon\":null,\"childMenuList\":null},{\"id\":9,\"name\":\"景区管理\",\"menuKey\":\"resource_scenic\",\"icon\":null,\"childMenuList\":null},{\"id\":8,\"name\":\"商家管理\",\"menuKey\":\"resource_shop\",\"icon\":null,\"childMenuList\":null},{\"id\":12,\"name\":\"自费项目\",\"menuKey\":\"resource_selfpay\",\"icon\":null,\"childMenuList\":null},{\"id\":11,\"name\":\"保险公司\",\"menuKey\":\"resource_insurance\",\"icon\":null,\"childMenuList\":null}]},{\"id\":123,\"name\":\"产品管理\",\"menuKey\":\"product\",\"icon\":\"fa-home\",\"childMenuList\":[{\"id\":4,\"name\":\"客户管理\",\"menuKey\":\"resource_partnerAgency\",\"icon\":null,\"childMenuList\":null},{\"id\":5,\"name\":\"线路模板\",\"menuKey\":\"resource_travelLine\",\"icon\":null,\"childMenuList\":null},{\"id\":21,\"name\":\"线路产品\",\"menuKey\":\"resource_lineProduct\",\"icon\":null,\"childMenuList\":null},{\"id\":115,\"name\":\"服务标准\",\"menuKey\":\"arrange_serviceStandards\",\"icon\":\"\",\"childMenuList\":null},{\"id\":116,\"name\":\"跟团游记\",\"menuKey\":\"arrange_travels\",\"icon\":\"\",\"childMenuList\":null},{\"id\":102,\"name\":\"报价管理\",\"menuKey\":\"arrange_quote\",\"icon\":\"\",\"childMenuList\":null}]},{\"id\":14,\"name\":\"计调操作\",\"menuKey\":\"arrange\",\"icon\":\"fa-tasks\",\"childMenuList\":[{\"id\":13,\"name\":\"游客管理\",\"menuKey\":\"resource_touristGroup\",\"icon\":null,\"childMenuList\":null},{\"id\":90,\"name\":\"中转安排\",\"menuKey\":\"arrange_transit\",\"icon\":null,\"childMenuList\":null},{\"id\":91,\"name\":\"中转分段\",\"menuKey\":\"resource_subsection\",\"icon\":null,\"childMenuList\":null},{\"id\":121,\"name\":\"团散转客\",\"menuKey\":\"arrange_groupTransfer\",\"icon\":null,\"childMenuList\":null},{\"id\":95,\"name\":\"内转管理\",\"menuKey\":\"arrange_inner_Transfer\",\"icon\":null,\"childMenuList\":null},{\"id\":19,\"name\":\"外转管理\",\"menuKey\":\"arrange_transfer\",\"icon\":\"\",\"childMenuList\":null},{\"id\":122,\"name\":\"散客拼团\",\"menuKey\":\"arrange_individual\",\"icon\":null,\"childMenuList\":null},{\"id\":120,\"name\":\"散客计划\",\"menuKey\":\"arrange_singlePlan\",\"icon\":null,\"childMenuList\":null},{\"id\":16,\"name\":\"团队计划\",\"menuKey\":\"arrange_plan\",\"icon\":null,\"childMenuList\":null},{\"id\":17,\"name\":\"发团安排\",\"menuKey\":\"arrange_all\",\"icon\":null,\"childMenuList\":null},{\"id\":104,\"name\":\"订单管理\",\"menuKey\":\"arrange_orderManage\",\"icon\":null,\"childMenuList\":null},{\"id\":87,\"name\":\"项目代订\",\"menuKey\":\"arrange_booking\",\"icon\":null,\"childMenuList\":null}]},{\"id\":63,\"name\":\"财务管理\",\"menuKey\":\"financial\",\"icon\":\"fa-money\",\"childMenuList\":[{\"id\":80,\"name\":\"报账审核\",\"menuKey\":\"financial_count\",\"icon\":null,\"childMenuList\":null},{\"id\":73,\"name\":\"客户账务\",\"menuKey\":\"financial_Client\",\"icon\":null,\"childMenuList\":null},{\"id\":92,\"name\":\"内转转入\",\"menuKey\":\"financial_innerTransfer_in\",\"icon\":null,\"childMenuList\":null},{\"id\":77,\"name\":\"购物账务\",\"menuKey\":\"financial_shop\",\"icon\":null,\"childMenuList\":null},{\"id\":74,\"name\":\"代订账务\",\"menuKey\":\"financial_replace\",\"icon\":null,\"childMenuList\":null},{\"id\":93,\"name\":\"内转转出\",\"menuKey\":\"financial_innerTransfer_out\",\"icon\":null,\"childMenuList\":null},{\"id\":76,\"name\":\"外转账务\",\"menuKey\":\"financial_transfer\",\"icon\":null,\"childMenuList\":null},{\"id\":64,\"name\":\"导游账务\",\"menuKey\":\"financial_guide\",\"icon\":null,\"childMenuList\":null},{\"id\":69,\"name\":\"餐厅账务\",\"menuKey\":\"financial_restaurant\",\"icon\":null,\"childMenuList\":null},{\"id\":67,\"name\":\"酒店账务\",\"menuKey\":\"financial_rummery\",\"icon\":null,\"childMenuList\":null},{\"id\":68,\"name\":\"车队账务\",\"menuKey\":\"financial_busCompany\",\"icon\":null,\"childMenuList\":null},{\"id\":66,\"name\":\"票务账务\",\"menuKey\":\"financial_ticket\",\"icon\":null,\"childMenuList\":null},{\"id\":70,\"name\":\"景区账务\",\"menuKey\":\"financial_scenic\",\"icon\":null,\"childMenuList\":null},{\"id\":71,\"name\":\"自费账务\",\"menuKey\":\"financial_self\",\"icon\":null,\"childMenuList\":null},{\"id\":72,\"name\":\"保险账务\",\"menuKey\":\"financial_insure\",\"icon\":null,\"childMenuList\":null},{\"id\":106,\"name\":\"其他账务\",\"menuKey\":\"financial_Other_accounts\",\"icon\":null,\"childMenuList\":null},{\"id\":109,\"name\":\"财务收款\",\"menuKey\":\"financial_income\",\"icon\":null,\"childMenuList\":null},{\"id\":108,\"name\":\"财务付款\",\"menuKey\":\"financial_pay\",\"icon\":null,\"childMenuList\":null},{\"id\":107,\"name\":\"现金日记\",\"menuKey\":\"financial_payment_details\",\"icon\":null,\"childMenuList\":null},{\"id\":111,\"name\":\"银行账户\",\"menuKey\":\"financial_bank_account\",\"icon\":null,\"childMenuList\":null},{\"id\":119,\"name\":\"在线支付\",\"menuKey\":\"financial_onlinePay\",\"icon\":null,\"childMenuList\":null}]},{\"id\":118,\"name\":\"财务统计\",\"menuKey\":\"financial_count\",\"icon\":\"fa-area-chart\",\"childMenuList\":[{\"id\":113,\"name\":\"中转利润\",\"menuKey\":\"financial_transferProfits\",\"icon\":\"\",\"childMenuList\":null},{\"id\":94,\"name\":\"内转利润\",\"menuKey\":\"financial_innerTransfer_profit\",\"icon\":null,\"childMenuList\":null},{\"id\":81,\"name\":\"外转利润\",\"menuKey\":\"financial_turnProfit\",\"icon\":null,\"childMenuList\":null},{\"id\":105,\"name\":\"单团利润\",\"menuKey\":\"financial_planProfit\",\"icon\":null,\"childMenuList\":null},{\"id\":114,\"name\":\"收客利润\",\"menuKey\":\"financial_collectedGuests\",\"icon\":\"\",\"childMenuList\":null},{\"id\":82,\"name\":\"代订利润\",\"menuKey\":\"financial_replaceProfit\",\"icon\":null,\"childMenuList\":null},{\"id\":83,\"name\":\"总利润表\",\"menuKey\":\"financial_totalProfit\",\"icon\":null,\"childMenuList\":null}]},{\"id\":96,\"name\":\"业务分析\",\"menuKey\":\"business_analyst\",\"icon\":\"fa-bar-chart\",\"childMenuList\":[{\"id\":97,\"name\":\"产品销量\",\"menuKey\":\"business_analyst_saleProduct\",\"icon\":null,\"childMenuList\":null},{\"id\":100,\"name\":\"员工业绩\",\"menuKey\":\"business_analyst_employeePerfor\",\"icon\":null,\"childMenuList\":null},{\"id\":99,\"name\":\"客户客量\",\"menuKey\":\"business_analyst_customerVolume\",\"icon\":null,\"childMenuList\":null},{\"id\":98,\"name\":\"客源分布\",\"menuKey\":\"business_analyst_sourDstribution\",\"icon\":null,\"childMenuList\":null},{\"id\":101,\"name\":\"导游业绩\",\"menuKey\":\"business_analyst_tourguidePerfor\",\"icon\":null,\"childMenuList\":null}]},{\"id\":60,\"name\":\"系统管理\",\"menuKey\":\"system\",\"icon\":\"fa-cog\",\"childMenuList\":[{\"id\":112,\"name\":\"公司资料\",\"menuKey\":\"system_companyInformation\",\"icon\":\"\",\"childMenuList\":null},{\"id\":65,\"name\":\"部门管理\",\"menuKey\":\"system_department\",\"icon\":null,\"childMenuList\":null},{\"id\":61,\"name\":\"人员管理\",\"menuKey\":\"system_user\",\"icon\":null,\"childMenuList\":null},{\"id\":110,\"name\":\"基础设置\",\"menuKey\":\"system_infrastructure\",\"icon\":null,\"childMenuList\":null},{\"id\":62,\"name\":\"系统信息\",\"menuKey\":\"system_information\",\"icon\":\"\",\"childMenuList\":null}]}]"};

