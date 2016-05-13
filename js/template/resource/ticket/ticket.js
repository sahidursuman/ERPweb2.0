define(function(require, exports) {
	var menuKey = "resource_ticket",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		rule = require('./ticketRule'),
		tabId = "tab-" + menuKey + "-content";
	/**
	 * 定义票务资源对象
	 * @type {Object}
	 */
	var TicketResource = {
		searchData: false,
		$tab: false,
		$searchArea: false
	};

	/**
	 * 页面初始化方法
	 * @return {[type]} [description]
	 */
	TicketResource.initModule = function() {
		TicketResource.listTicket(0,"",1);
	};
	/**
	 * 初始化票务列表
	 * @param  {init} page     页码
	 * @param  {string} realname 票务姓名，搜索关键字
	 * @param  {int} status   票务的状态
	 * @return {[type]}          [description]
	 */
	TicketResource.listTicket = function(page,realname,status){
		if (TicketResource.$searchArea && arguments.length === 1) {
			// 初始化页面后，可以获取页面的参数
			realname = TicketResource.$searchArea.find("input[name=ticket_name]").val();
			status = TicketResource.$searchArea.find('.T-select-ticket').find("button").data('value')
		}
		// 修正页码
		page = page || 0;
		$.ajax({
			url:""+APP_ROOT+"back/ticket.do?method=listTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"pageNo="+page+"&name="+encodeURIComponent(realname)+"&status="+status+"&sortType=auto",
			dataType:"json",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var ticketList = data.ticketList;
					ticketList = JSON.parse(ticketList);
					data.ticketList = ticketList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"票务管理",html);

					// 初始化jQuery 对象
					TicketResource.$tab = $('#' + tabId);
					TicketResource.$searchArea = TicketResource.$tab.find('.search-area');
					TicketResource.init_event();

					// 绑定翻页组件
					laypage({
						cont: TicketResource.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						pages: data.totalPage, //总页数
						curr: (page + 1),
						jump: function(obj, first) {
							if (!first) {  // 避免死循环，第一次进入，不调用页面方法
								TicketResource.listTicket(obj.curr -1);
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
	TicketResource.init_event = function() {
		//搜索栏状态button下拉事件
		TicketResource.$tab.find('.T-select-ticket').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this);

			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());

			TicketResource.listTicket(0);
		});
		//搜索按钮事件
		TicketResource.$tab.find('.T-ticket-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			TicketResource.listTicket(0);
		});
		// 回车搜索
		TicketResource.$tab.find('.T-ticket-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				TicketResource.listTicket(0);
			}
		});
		// 添加票务
		TicketResource.$tab.find('.T-ticket-add').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			TicketResource.addTicket(0);
		});
		// 报表内的操作
		TicketResource.$tab.find('.T-ticket-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-ticket-view'))  {
				// 查看票务信息
				TicketResource.viewTicket(id);
			} else if ($that.hasClass('T-ticket-edit'))  {
				// 编辑票务信息
				TicketResource.updateTicket(id);
			} else if ($that.hasClass('T-ticket-delete'))  {
				// 删除票务
				TicketResource.deleteTicket(id);
			}
		});
		Tools.descToolTip($(".T-ctrl-tip"));
	};
	TicketResource.addTicket=function(fn){
		var html = addTemplate();
		var addTicketLayer = layer.open({
			type: 1,
			title:"新增票务公司",
			skin: 'layui-layer-rim', //加上边框
			area: ['800px'], //宽高
			zIndex:1028,
			content: html,
			scrollbar: false,
			success:function(){
				var $container = $(".T-addTicketContainer");
				KingServices.provinceCity($container);
				// 设置表单验证
				var validator = rule.check($container);
				$container.find(".T-TicketSubmit").click(function() {
					// 表单校验
					if (!validator.form()) {
						return;
					}
					var status = 0;
					if ($container.find(".T-ticket-start").is(":checked") == true) {
						status = 1;
					}
					var form = $container.children('.T-ticketMainForm').serialize() + "&status=" + status + "",
						formData = $container.children('.T-ticketMainForm').serializeJson();
					$.ajax({
						url:""+APP_ROOT+"back/ticket.do?method=addTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
						type:"POST",
						data:form,
						success:function(data){
							var result = showDialog(data);
							if(result){
								layer.close(addTicketLayer);
								showMessageDialog(data.message,function(){
									if (typeof fn === "function") {
										data.ticket = JSON.parse(data.ticket);
										formData.id = data.ticket.id;
										fn(formData);
									}else{
										TicketResource.listTicket(0,"","");
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
	 * 编辑票务信息
	 * @param  {int} id     票务编号
	 * @param  {int} pageNo 当前页码
	 * @return {[type]}        [description]
	 */
	TicketResource.updateTicket = function(id){
		$.ajax({
			url:""+APP_ROOT+"back/ticket.do?method=getTicketById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var ticketInfo = JSON.parse(data.ticket);
					data.ticket = ticketInfo;
					var html = updateTemplate(data);
					var updateTicket = layer.open({
						type: 1,
						title:"编辑票务公司信息",
						skin: 'layui-layer-rim', //加上边框
						area: '800px', //宽高
						zIndex:1028,
						content: html,
						scrollbar: false, // 推荐禁用浏览器外部滚动条
						success:function(){
							var $container = $(".T-updateTicketContainer");
							var $province = $container.find("select[name=provinceId]");
								var $city = $container.find("select[name=cityId]");
								var validator = rule.check($container);
								//省市区事件
								if(data.ticket.provinceId != null )var provinceId = data.ticket.provinceId;
								if(data.ticket.cityId != null )var cityId = data.ticket.cityId;
								if(data.ticket.districtId != null ) var districtId = data.ticket.districtId;
								KingServices.provinceCity($container,provinceId,cityId,districtId);
							// 设置表单验证
							
							$container.find(".T-ticket-Submit").click(function() {
								// 表单校验
								if (!validator.form()) {
									return;
								}
								var status = 0;
								if ($container.find(".T-ticket-start").is(":checked") == true) {
									status = 1;
								}
								var form = "id=" + id + "&" + $container.children('.T-ticketMainForm').serialize() + "&status=" + status + "";
								$.ajax({
									url:""+APP_ROOT+"back/ticket.do?method=updateTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
									type:"POST",
									data:form,
									success:function(data){
										var result = showDialog(data);
										if(result){
											layer.close(updateTicket);
											showMessageDialog(data.message);
											TicketResource.listTicket(0,"","");
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
	 * 删除票务
	 * @param  {[type]} obj    [description]
	 * @param  {int} id     票务编号
	 * @param  {int} pageNo 当前页码
	 * @return {[type]}        [description]
	 */
	
	TicketResource.deleteTicket = function(id){
		if(!!id){
			showConfirmDialog("你确定要删除该条记录？",function(){
					$.ajax({
							url:""+APP_ROOT+"back/ticket.do?method=deleteTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
	 						type:"POST",
	 						data:"id="+id+"",
					}).done(function(data){
						if(showDialog(data)){
							TicketResource.listTicket(0);
						}
					})
			})
		}
	}	

	/**
	 * 查看票务信息
	 * @param  {int} id 票务编号
	 * @return {[type]}    [description]
	 */
	TicketResource.viewTicket = function(id){
		$.ajax({
			url:""+APP_ROOT+"back/ticket.do?method=getTicketById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"id="+id+"",
			dataType:"json",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var ticketInfo = JSON.parse(data.ticket);
					data.ticket = ticketInfo;
					var html = viewTemplate(data);
					layer.open({
						type: 1,
						title:"查看票务公司",
						skin: 'layui-layer-rim', //加上边框
						area:'800px', //宽高
						zIndex:1028,
						content: html,
						scrollbar: false   // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	}
	exports.init = TicketResource.initModule;
	exports.addTicket = TicketResource.addTicket;
});
