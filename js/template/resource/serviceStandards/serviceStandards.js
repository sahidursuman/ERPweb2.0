define(function(require, exports){
	// body...
	var menuKey = 'arrange_serviceStandards',
		rule = require('./rule'),
		listTemplate = require('./view/list'),
		addTemplate = require('./view/add');
	var ServiceStandards ={

	};
	ServiceStandards.initModule = function(){
		ServiceStandards.listService();
	};
	ServiceStandards.listService = function(){
		var name = [];
		var name1 = {
			serviceStandardsId:1,
			serviceStandards:"剪纸",
			serviceContent:"老师手把手一对一培训",
			serviceRequire:"男女均可，耐得住寂寞",
			status:1
		};
		var name2 = {
			serviceStandardsId:2,
			serviceStandards:"剪纸",
			serviceContent:"老师手把手一对一培训，老师手把手一对一培训，老师手把手一对一培训，老师手把手一对一培训，老师手把手一对一培训，老师手把手一对一培训",
			serviceRequire:"男女均可，耐得住寂寞，男女均可，耐得住寂寞，男女均可，耐得住寂寞男女均可，耐得住寂寞,男女均可，耐得住寂寞,男女均可，耐得住寂寞,男女均可，耐得住寂寞,男女均可，耐得住寂寞,男女均可，耐得住寂寞",
			status:0
		};
		name.push(name1);
		name.push(name2);
		var searchParam = {
			serviceName:"",
			status:0
		};
		var serviceData = {
			serviceStandardList:name,
			searchParam:searchParam,
			recordSize:2,
			totalPage:1,
			pageNo:0
		};
		console.log(serviceData);
		var html = listTemplate(serviceData);
		Tools.addTab(menuKey,'服务标准',html);
		var $serviceTab = $("#tab-"+menuKey+"-content");
		var $tbody=$serviceTab.find('.T-service-list');
		//添加记录
		var recordSize = Tools.getRecordSizeDesc(serviceData.recordSize);
		$serviceTab.find('.recordSize').text(recordSize);
		//要求内容过长的处理
		Tools.descToolTip($tbody.find(".T-ctrl-tip"),1);
		// 绑定翻页组件
		laypage({
		    cont: $serviceTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
		    pages: serviceData.totalPage, //总页数
		    curr: (serviceData.pageNo + 1),
		    jump: function(obj, first) {
		    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
		    		//args.pageNo = obj.curr -1
		    		//Infrastructure.listBankAcc(args,$obj,'page');
		    	}
		    }
		});
		//绑定事件
		ServiceStandards.initEvents($serviceTab);
	};
	//页面事件
	ServiceStandards.initEvents = function($obj){
		//搜索事件
		$obj.find('.T-search-area').on('click','.T-btn-service-search',function(){
			//Infrastructure.listBankAcc(args,$obj,'search');
		});
		//状态栏事件
		$obj.find(".T-sleect-ul").on('click','a',function(){
			$(this).closest('div').find(".T-select-status").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			//Infrastructure.listBankAcc(args,$obj,'search');
		});
		//新增服务标准
		$obj.find('.T-search-area').on('click','.T-service-add',function(){
			ServiceStandards.addService();
		});
	};
	//新增事件
	ServiceStandards.addService = function(){
		var html = addTemplate();
		var addServiceLayer = layer.open({
			type: 1,
			title:"新增服务标准",
			skin: 'layui-layer-rim', //加上边框
			area: '600px', //宽高
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
	//保存事件
	ServiceStandards.saveData = function(args,closeLayer){
		console.log(args);
		layer.close(closeLayer);
	};
	//组装数据
	ServiceStandards.installData = function($obj,typeFlag){
		var status = 0,
		    checkStatus = $obj.find('.T-checkStatus').is(':checked');
		if(checkStatus){
			status = 1;
		};
		var subData = {
			serviceName:$obj.find('input[name=serviceName]').val(),
			serviceContent:$obj.find('textarea[name=serviceContent]').val(),
			serviceRequire:$obj.find('textarea[name=serviceRequire]').val(),
			status:status,
			id:typeFlag == 2 ? $obj.find('input[name=bankNumberId]').val():'',
		};
		return subData;
	};
	exports.init = ServiceStandards.initModule;
});