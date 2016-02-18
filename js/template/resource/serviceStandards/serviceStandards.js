define(function(require, exports){
	// body...
	var menuKey = 'arrange_serviceStandards',
		rule = require('./rule'),
		listTemplate = require('./view/list'),
		updateTemplate = require('./view/update'),
		addTemplate = require('./view/add');
	var ServiceStandards ={
		$listTab:false
	};
	ServiceStandards.initModule = function(){
		ServiceStandards.listService(0,'',1);
	};
	ServiceStandards.listService = function(pageNo,serviceTitle,status){
		if(arguments.length == 1){
			serviceTitle = ServiceStandards.$listTab.find('input[name=service_name]').val();
			status = ServiceStandards.$listTab.find(".T-status").find("button").attr("data-value")
		};
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url('serviceStandardController','getServiceStandardTemplateList'),
			data:{
				pageNo:pageNo,
				serviceTitle:serviceTitle,
				status:status
			},
			type:'POST',
			success:function(data){
				if(showDialog(data)){
					data.gssTemplateList = JSON.parse(data.gssTemplateList);
					var searchParam = {
						serviceTitle:serviceTitle,
						status:status
					};
					data.searchParam = searchParam;
					var html = listTemplate(data);
					Tools.addTab(menuKey,'服务标准',html);
					var $serviceTab = $("#tab-"+menuKey+"-content");
					ServiceStandards.$listTab = $serviceTab;
					//添加记录
					var recordSize = Tools.getRecordSizeDesc(data.recordSize);
					$serviceTab.find('.recordSize').text(recordSize);
					//要求内容过长的处理
					var $tbody = $serviceTab.find('.T-service-list');
					Tools.descToolTip($tbody.find(".T-ctrl-tip"),1);
					// 绑定翻页组件
					laypage({
					    cont: $serviceTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		ServiceStandards.listService(obj.curr -1);
					    	}
					    }
					});
					//绑定事件
					ServiceStandards.initEvents($serviceTab);
				}
			}
		});
		
	};
	//页面事件
	ServiceStandards.initEvents = function($obj){
		//搜索事件
		$obj.find('.T-search-area').on('click','.T-btn-service-search',function(){
			ServiceStandards.listService(0);
		});
		//状态栏事件
		$obj.find(".T-sleect-ul").on('click','a',function(){
			$(this).closest('div').find(".T-select-status").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			ServiceStandards.listService(0);
		});
		//新增服务标准
		$obj.find('.T-search-area').on('click','.T-service-add',function(){
			ServiceStandards.addService();
		});
		// 报表内的操作
		$obj.find('.T-service-list').on('click', '.T-action', function(event) {
			var $that = $(this), id = $that.closest('tr').attr('serviceId');
			if ($that.hasClass('T-edit'))  {
				// 编辑账户信息
				ServiceStandards.getDataById(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除账户
				showConfirmDialog($("#confirm-dialog-message"),"你确定要删除该条记录？", function() {
					ServiceStandards.deleteService(id);
				});
				
			}
		});
	};
	//新增事件
	ServiceStandards.addService = function(){
		var html = addTemplate();
		var addServiceLayer = layer.open({
			type: 1,
			title:"新增服务标准",
			skin: 'layui-layer-rim', //加上边框
			area: '800px', //宽高
			zIndex:1028,
			content: html,
			scrollbar: false,
			success:function(){
				var $addTabObj = $('.T-service-container');
				//表单验证
				var validator = rule.check($addTabObj);
				//保存事件
				$addTabObj.find('.T-submit').on('click',function(){
					var args = ServiceStandards.installData ($addTabObj,1);
					if(!validator.form()){return;};
					ServiceStandards.saveData(args,addServiceLayer);
				});
			}
		});
	};
	//编辑事件
	ServiceStandards.updateService = function(data){
		console.log(data);
		var html = updateTemplate(data);
		var updateServiceLayer = layer.open({
			type: 1,
			title:"修改服务标准",
			skin: 'layui-layer-rim', //加上边框
			area: '800px', //宽高
			zIndex:1028,
			content: html,
			scrollbar: false,
			success:function(){
				var $updateTabObj = $('.T-service-container');
				//表单验证
				var validator = rule.check($updateTabObj);
				//保存事件
				$updateTabObj.find('.T-submit').on('click',function(){
					var args = ServiceStandards.installData ($updateTabObj,2);
					if(!validator.form()){return;};
					ServiceStandards.saveData(args,updateServiceLayer);
				});
			}
		});
	};
	//保存事件
	ServiceStandards.saveData = function(args,closeLayer){
		$.ajax({
			url:KingServices.build_url('serviceStandardController','saveServiceStandardTemplate'),
			data:args,
			type:'POST',
			success:function(data){
				if(showDialog(data)){
					if(!!args.form){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
					}else{
						layer.close(closeLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							ServiceStandards.listService(0,'',1);
						});
					};
				}
			}
		});
	};
	//删除事件
	ServiceStandards.deleteService = function(id){
		$.ajax({
			url:KingServices.build_url('serviceStandardController','deleteServiceStandardTemplate'),
			data:{id:id},
			type:'POST',
			success:function(data){
				if(showDialog(data)){
				showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
					ServiceStandards.listService(0,'',1);
				});
			}
			}
		});
	};
	//组装数据
	ServiceStandards.installData = function($obj,typeFlag){
		var status = 0,
		    checkStatus = $obj.find('.T-checkStatus').is(':checked');
		if(checkStatus){
			status = 1;
		};
		var subData = {
			serviceTitle:$obj.find('input[name=serviceName]').val(),
			serviceContent:$obj.find('textarea[name=serviceContent]').val(),
			serviceRequire:$obj.find('textarea[name=serviceRequire]').val(),
			status:status,
			id:typeFlag == 2 ? $obj.find('input[name=serviceId]').val():'',
		};
		return subData;
	};
	//通过id获取数据
	ServiceStandards.getDataById = function(id){
		$.ajax({
			url:KingServices.build_url('serviceStandardController','getServiceStandardTemplate'),
			data:{
				id:id
			},
			type:'POST',
			success:function(data){
				if(showDialog(data)){
					console.log(data);
					data.gssTemplate = JSON.parse(data.gssTemplate);
					ServiceStandards.updateService(data);
				}
			}

		});
	};
	exports.init = ServiceStandards.initModule;
	exports.saveData = ServiceStandards.saveData;
});