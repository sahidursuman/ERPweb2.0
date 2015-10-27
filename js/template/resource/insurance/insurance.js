/**
 * 资源——保险公司模块
 *
 * 新增、编辑、查看删除保险公司信息
 * 显示保险公司列表
 */
define(function(require, exports) {
	var menuKey = "resource_insurance",
	    listTemplate = require("./view/list"),
	    addTemplate = require("./view/add"),
	    updateTemplate = require("./view/update"),
	    viewTemplate = require("./view/view"),
	    rule = require('./insuranceRule');
	/**
	 * 定义保险公司对象
	 * @type {Object}
	 */
	var insurance = {
		$searchData : false,
		$tab : false,
		$searchArea : false,
		$addLayer : "",
		$updateLayer : ""
	};
	var ruleData = {};
	/**
	 * 页面初始化方法
	 * @return {[type]} [description]
	 */
	insurance.initModule = function(){
		insurance.insuranceList(0,"",1);
	};
	/**
	 * 初始化保险公司列表方法
	 * @param  {int} page     [页码]
	 * @param  {string} name 	 [保险公司模糊搜索]
	 * @param  {int} status   [保险公司状态]
	 */
	insurance.insuranceList = function(page,name,status){
		if (insurance.$searchArea && arguments.length === 1) {
			// 初始化页面后，可以获取页面的参数
			name = insurance.$searchArea.find("input[name=insurance_name]").val(),
			status = insurance.$searchArea.find('.T-btn-status').find("button").data('value')
		}
		// 修正页码
		page = page || 0;

		$.ajax({
			url: insurance.url("listInsurance","view"),
			type:"POST",
			data:{
				pageNo : page,
				name : name,
				status : status,
				sortType: 'auto'
			},
			success:function(data){
				data.insuranceList = JSON.parse(data.insuranceList);
				var result = showDialog(data);
				if(result){
					var html = listTemplate(data);
					addTab(menuKey,"保险公司",html);

					insurance.$tab = $("#tab-resource_insurance-content");
					insurance.$searchArea = insurance.$tab.find(".T-search-area");
					insurance.init_event();	

					// 绑定翻页组件
					laypage({
					    cont: insurance.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		insurance.insuranceList(obj.curr -1);
					    	}
					    }
					});	
				}
			}
		})
	};
	/**
	 * 绑定list页面内事件
	 * @return {[type]} [description]
	 */
	insurance.init_event = function(){
		//搜索栏状态button下拉事件
		insurance.$tab.find('.T-btn-status').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this);
			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			insurance.insuranceList(0);
		});

		//搜索按钮事件
		insurance.$tab.find('.T-btn-insurance-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			insurance.insuranceList(0);
		});

		// 回车搜索
		insurance.$tab.find('input[name=insurance_name]').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				insurance.insuranceList(0);
			}
		});

		//添加保险公司
		insurance.$tab.find(".T-btn-insurance-add").on("click",function(event){
			event.preventDefault();
			insurance.addInsurance();
		});

		// 报表内的操作
		insurance.$tab.find('.T-insuranceList').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('entity-id');

			if ($that.hasClass('T-view'))  {
				// 查看导游信息
				insurance.viewInsurance(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑导游信息
				insurance.updateInsurance(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除导游
				insurance.deleteInsurance(id,$that);
			}
		});
	};
	/**
	 * 新增保险公司
	 */
	insurance.addInsurance = function(){
		var html = addTemplate();
		insurance.$addLayer = layer.open({
		    type: 1,
		    title:"新增保险公司",
		    skin: 'layui-layer-rim', //加上边框
		    area: '800px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){

				var $container = $(".T-addInsuranceContainer");
			    ruleData.validator = rule.check($container);
		    	//初始化地区
		    	KingServices.provinceCity($container);
		    	//提交事件
		    	$container.find(".T-btn-submit-insurance").on("click",function(){
		    		insurance.saveInsurance($container,1);
		    	});
		    }
		})
	};
	/**
	 * 查看保险公司
	 */
	insurance.viewInsurance = function(id){
		$.ajax({
			url:insurance.url("getInsuranceById","view"),
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.insurance = JSON.parse(data.insurance);  
					var html = viewTemplate(data);
					var updateInsurance = layer.open({
					    type: 1,
					    title:"查看保险公司",
					    skin: 'layui-layer-rim', //加上边框
					    area: '800px', //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){}
					});
				}
			}
		});
	};
	/**
	 * 修改保险公司
	 */
	insurance.updateInsurance = function(id){
		$.ajax({
			url:insurance.url("getInsuranceById","view"),
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				data.insurance = JSON.parse(data.insurance);
				var provinceId = data.insurance.provinceId,
					cityId = data.insurance.cityId,
					districtId = data.insurance.districtId,
					result = showDialog(data);
				if(result){
					var html = updateTemplate(data);
					insurance.$updateLayer = layer.open({
					    type: 1,
					    title:"编辑保险公司",
					    skin: 'layui-layer-rim', //加上边框
					    area: '800px', //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){
					    	var $container = $(".T-updateInsuranceContainer");
							//初始化地区
							KingServices.provinceCity($container,provinceId,cityId,districtId);
							ruleData.Uvalidator = rule.check($container);
					    	//提交事件
					    	$container.find(".T-btn-submit-insurance").on("click",function(){
					    		insurance.saveInsurance($container,2);
					    	});

					    }
					})
				}
			}
		})
	};
	/**
	 * 删除保险公司
	 */
	insurance.deleteInsurance = function(id,$that){
		var dialogObj = $( "#confirm-dialog-message" );
		dialogObj.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "取消",
					"class" : "btn btn-minier",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "确定",
					"class" : "btn btn-primary btn-minier",
					click: function() {
						$( this ).dialog( "close" );
						$.ajax({
							url:insurance.url("deleteInsurance","delete"),
							type:"POST",
							data:"id="+id+"",
							success:function(data){
								var result = showDialog(data);
								if(result){
									$that.closest('tr').fadeOut(function() {
										insurance.insuranceList(0);
									});
								}
							}
						});
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("你确定要删除该条记录？");
			}
		});
	};
	/**
	 * 新增、修改提交事件
	 * @param  {[type]} $container [容器]
	 * @param  {[type]} type       [type:1 新增  type:2 修改]
	 * @return {[type]}            [description]
	 */
	insurance.saveInsurance = function($container,type){
		var method = "",operation = "",status = 0;
		if (type == 1) {
			method = "addInsurance";operation = "add";
			if(!ruleData.validator.form()){return;}
		}else if(type == 2){
			method = "updateInsurance";operation = "update";
			if(!ruleData.Uvalidator.form()){return;}
		}
		if($container.find(".T-insurance-status").prop("checked")){
			status = 1;
		}
		var form = $container.find(".insuranceMainForm").serialize()+"&status="+status+"";
		
		$.ajax({
			url:insurance.url(method,operation),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					if (type == 1) {layer.close(insurance.$addLayer)}else if(type == 2){layer.close(insurance.$updateLayer)}
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						insurance.insuranceList(0,"","");
					});
				}
			}
		});
	};
	/**
	 * ajax url方法
	 * @param  {[type]} method    [方法名]
	 * @param  {[type]} operation [operation]
	 * @return {[type]}           [description]
	 */
	insurance.url = function(method,operation){
		var url = ''+APP_ROOT+'back/insurance.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	};

	exports.init = insurance.initModule;
});