/**
 * 火柴头管理系统，初始化
 */
+function($) {
	var IndexFun = {};
	window.IndexData = {};

	IndexFun.init = function() {
		this.checkLogin();
		this.justifyTabPosition();
		this.init_event();
		
		// 设置对话框的最大高度
		$('body').append('<style id="layer-style">.layui-layer-page .layui-layer-content { max-height:' + (window.screen.availHeight - 260) + 'px; overflow-y: auto; }</style>');
	};

	/**
	 * 微调tab的位置
	 * @return {[type]} [description]
	 */
	IndexFun.justifyTabPosition = function() {
		var scroll;
		var maxwidth = parseInt($(".breadcrumbs-fixed").css("width"))-70;//ul可视区域 宽度，70为两侧移动符号宽度
		function scrollLeft(){
			var listwidth = 0;//ul总宽度
			$("#tabList li").each(function(i){
				listwidth += parseInt($("#tabList li").eq(i).css("width"));
			});
			var marginLeft = parseInt($("#tabList").css("marginLeft"));
			if(listwidth > maxwidth && marginLeft < 35){//当ul宽度大于可视区域宽度并且ul在左侧有隐藏部分时ul方可向右平移
				marginLeft = marginLeft + 20;
				if(marginLeft > 35){
					marginLeft = 35;
				}
				$("#tabList").css("marginLeft",marginLeft);
			}
			scroll = setTimeout(scrollLeft,30);
		}
		$("#tab_left_scroll").mousedown(scrollLeft);
		$("#tab_left_scroll").mouseup(function(){
			clearTimeout(scroll);
		});
		function scrollRight(){
			var listwidth = 0;
			$("#tabList li").each(function(i){
				listwidth += parseInt($("#tabList li").eq(i).css("width"));
			});
			var marginLeft = parseInt($("#tabList").css("marginLeft"));
			var maxleft = -(listwidth - (maxwidth + 35));//ul可向左平移的最大宽度，maxleft取负值,35为左侧移动符号宽度
			if(listwidth > maxwidth && marginLeft > maxleft){//当ul宽度大于可视区域宽度并且ul在右侧有隐藏部分时ul方可向左平移
				marginLeft = marginLeft - 20;
				if(marginLeft < maxleft){
					marginLeft = maxleft;
				}
				$("#tabList").css("marginLeft",marginLeft);
			}
			scroll = setTimeout(scrollRight,30);
		}
		$("#tab_right_scroll").mousedown(scrollRight);
		$("#tab_right_scroll").mouseup(function(){
			clearTimeout(scroll);
		});
	};

	/**
	 * 检查用户登陆状态
	 * @return {[type]} [description]
	 */
	IndexFun.checkLogin = function() {
		$.ajax({
			url:""+APP_ROOT+"base.do?method=checkLogin",
			type:"GET",
			dataType:"json",
			beforeSend:function(){
				globalLoadingLayer = layer.open({
					type:3
				});
			},
			success:function(data){
				IndexData.userInfo = data;
				layer.close(globalLoadingLayer);
				if(data.success == 0){
					window.location.href = "login.html";
				}
				else{
					if(data.realName != ""){//department
						$(".navbar .light-blue .userName").text(data.realName);
						$("#loginUserInfo").find(".userName").text(data.realName);
						$("#loginUserInfo").find(".phoneNumber").text(data.mobileNumber); 
						$("#loginUserInfo").find(".department").text(data.groupName);  
					}
					else{
						$(".navbar .light-blue .userName").text(data.userName);
					}
					$(".navbar .light-blue .groupName").text(data.groupName);
					listMenu();
					seajs.use(""+ASSETS_ROOT+"js/template/index/index.js",function(index){
						index.main();
					});
				}
			}
		});
	}

	/**
	 * 初始化框架事件
	 * @return {[type]} [description]
	 */
	IndexFun.init_event = function() {
		// 绑定划过事件
		$('.header-actions').children('li').hover(function() {
			$(this).find('.dropdown-menu').show();
		}, function() {
			$(this).find('.dropdown-menu').hide();
		});
	};

	
	// 初始哈
	jQuery(document).ready(function($) {
		IndexFun.init();
	});
}(window.jQuery);