/**
 * 资源——导游管理模块
 *
 * 添加、编辑、查看导游信息
 * 显示导游列表
 */

define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_guide",
	    listTemplate = require("./view/list"),
	    addTemplate = require("./view/add"),
	    updateTemplate = require("./view/update"),
	    viewTemplate = require("./view/view"),
	    tabId = "tab-"+menuKey+"-content";
	
	/**
	 * 定义导游资源对象
	 * @type {Object}
	 */
	var GuideResource = {
		searchData: false,	
		$tab: false,	
		$searchArea: false
	};

	/**
	 * 页面初始化方法
	 * @return {[type]} [description]
	 */
	GuideResource.initModule = function() {
		GuideResource.listGuide(0,"",1);
	};

	/**
	 * 初始化导游列表
	 * @param  {init} page     页码
	 * @param  {string} realname 导游姓名，搜索关键字
	 * @param  {int} status   导游的状态
	 * @return {[type]}          [description]
	 */
	GuideResource.listGuide = function(page,realname,status){
		if (GuideResource.$searchArea && arguments.length === 1) {
			// 初始化页面后，可以获取页面的参数
			realname = GuideResource.$searchArea.find("input[name=guide_realname]").val(),
			status = GuideResource.$searchArea.find('.T-select-status').find("button").data('value')
		}
		// 修正页码
		page = page || 0;

		$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data: {
				pageNo: page,
				realname: realname,
				status: status,
				sortType: 'auto'
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					GuideResource.searchData =  {
						pageNo: page
					};
					var guideList = data.guideList;
					guideList = JSON.parse(guideList);
					data.guideList = guideList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"导游管理",html);
					
					// 初始化jQuery 对象
					GuideResource.$tab = $('#' + tabId);
					GuideResource.$searchArea = GuideResource.$tab.find('.search-area');
					GuideResource.init_event();	

					// 绑定翻页组件
					laypage({
					    cont: GuideResource.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		GuideResource.listGuide(obj.curr -1);
					    	}
					    }
					});		
				}
			}
		});
	};

	/**
	 * 绑定页内事件
	 * @return {[type]} [description]
	 */
	GuideResource.init_event = function() {
		//搜索栏状态button下拉事件
		GuideResource.$tab.find('.T-select-status').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this);

			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());

			GuideResource.listGuide(0);
		});

		//搜索按钮事件
		GuideResource.$tab.find('.T-guide-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			GuideResource.listGuide(0);
		});

		// 回车搜索
		GuideResource.$tab.find('.T-guide-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				GuideResource.listGuide(0);
			}
		});

		// 添加导游
		GuideResource.$tab.find('.T-add-guide').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			GuideResource.addGuide();
		});

		// 报表内的操作
		var $tbody = GuideResource.$tab.find('.T-guide-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-view'))  {
				// 查看导游信息
				GuideResource.viewGuide(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑导游信息
				GuideResource.updateGuide(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除导游
				GuideResource.deleteGuide(id);
			}
		});

		Tools.descToolTip($tbody.find(".T-ctrl-tip"),1);
	}
	/**
	 * 添加导游
	 */
	GuideResource.addGuide = function(fn){
		var html = addTemplate();
		var addGuideLayer = layer.open({
		    type: 1,
		    title:"新增导游",
		    skin: 'layui-layer-rim', //加上边框
		    area: '630px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){
		    	var $container = $(".T-guide-container");
		    	// 设置表单验证
		    	var validator = rule.check($container);
		    	
		    	$container.find("input[name=joinTime]").datepicker({
					autoclose: true,
					todayHighlight: true,
					format: 'yyyy-mm-dd',
					language: 'zh-CN'
				});
		    	$container.find(".T-add-guide-submit").click(function(){
		    		// 表单校验
		    		if (!validator.form()) { return; }
					var status = 0;
					if($container.find(".T-guide-status").is(":checked") == true){
						status = 1;
					}
					var form = $container.children('.T-form').serialize()+"&status="+status+"",
						formData = $container.children('.T-form').serializeJson();
					
					$.ajax({
						url:""+APP_ROOT+"back/guide.do?method=addGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
						type:"POST",
						data:form,
						dataType:"json",
						success:function(data){
							var result = showDialog(data);
							if(result){
								layer.close(addGuideLayer);
								showMessageDialog(data.message,function(){
									if (typeof fn === "function") {
										data.guide = JSON.parse(data.guide);
										formData.id = data.guide.id;
										formData.name = formData.realname;
										fn(formData);
									}else{
										GuideResource.listGuide(0);
									}
								});
							}
						}
					});
				});
		    }
		});
	};
		
	/**
	 * 编辑导游信息
	 * @param  {int} id     导游编号
	 * @param  {int} pageNo 当前页码
	 * @return {[type]}        [description]
	 */
	GuideResource.updateGuide = function(id){
		$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"id="+id+"",
			dataType:"json",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var guideInfo = JSON.parse(data.guide);
					data.guide = guideInfo;
					var html = updateTemplate(data);
					var addGuide = layer.open({
					    type: 1,
					    title:"修改导游",
					    skin: 'layui-layer-rim', //加上边框
					    area: '630px', //宽高
					    zIndex:1028,
					    content: html,
					    scrollbar: false,
					    success:function(){
					    	var $container = $(".T-guide-container");
					    	// 设置表单验证
					    	var validator = rule.check($container);
					    	$container.find("input[name=joinTime]").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
					    	$container.find(".T-update-guide").click(function(){
					    		// 表单校验
					    		if (!validator.form()) { return; }
								var status = 0;
								if($container.find(".T-guide-status").is(":checked") == true){
									status = 1;
								}
								var form = "id="+id+"&"+$container.children('.T-form').serialize()+"&status="+status+"";
								$.ajax({
									url:""+APP_ROOT+"back/guide.do?method=updateGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
									type:"POST",
									data:form,
									dataType:"json",
									success:function(data){
										var result = showDialog(data);
										if(result){
											layer.close(addGuide);
											showMessageDialog(data.message);
											GuideResource.listGuide(GuideResource.searchData.pageNo);
										}
									}
								});
							});
					    }
					});
				}
			}
		});
	};

	/**
	 * 删除导游
	 * @param  {[type]} obj    [description]
	 * @param  {int} id     导游编号
	 * @param  {int} pageNo 当前页码
	 * @return {[type]}        [description]
	 */
	
		GuideResource.deleteGuide = function(id){
		if (!!id) {
			showConfirmDialog("你确定要删除该条记录？", function() {
				$.ajax({
					url:""+APP_ROOT+"back/guide.do?method=deleteGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
					type: 'post',
					data: {id: id},
				})
				.done(function(data) {
					if (showDialog(data)) {
						GuideResource.listGuide(0);
					}
				});
			})
		}
	}


	/**
	 * 查看导游信息
	 * @param  {int} id 导游编号
	 * @return {[type]}    [description]
	 */
	GuideResource.viewGuide = function(id){
		$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"id="+id+"",
			dataType:"json",
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					var guideInfo = JSON.parse(data.guide);
					data.guide = guideInfo;
					var html = viewTemplate(data);
					layer.open({
					    type: 1,
					    title:"查看导游",
					    skin: 'layui-layer-rim', //加上边框
					    area: '690px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	}

	exports.init = GuideResource.initModule;
	exports.addGuide = GuideResource.addGuide;
});