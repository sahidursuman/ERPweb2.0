/**
 * 火柴头管理系统，初始化
 */
+function($) {
	var IndexFun = {};

	IndexFun.init = function() {
		this.checkLogin();
		this.justifyTabPosition();
		this.init_event();
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
				console.info(data);
				layer.close(globalLoadingLayer);
				if(data.success == 0){
					window.location.href = "login.html";
				}
				else{
					if(data.realName != ""){//department
						$(".navbar .light-blue .userName").text(data.realName);
						$("#loginUserInfo").find(".userName").text(data.realName);
						$("#loginUserInfo").find(".phoneNumber").text(data.mobileNumber); 
						$("#loginUserInfo").find(".phoneNumber").text(data.mobileNumber);  
						$("#loginUserInfo").find(".department").text(data.groupName);  
						
						$(".login-userData-form").find("input[name='userName']").val(data.userName);    
						$(".login-userData-form").find("input[name='realName']").val(data.realName);       
						$(".login-userData-form").find("input[name='mobileNumber']").val(data.mobileNumber);       
						    
		
						
					}
					else{
						$(".navbar .light-blue .userName").text(data.userName);
					}
					$(".navbar .light-blue .groupName").text(data.groupName);
					listMenu();
					seajs.use(""+APP_ROOT+"app/js/template/index/index.js",function(index){
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
		// 绑定更新用户设置弹窗
		$('#update-userinfo-settings').on('click', function(event) {
			event.preventDefault();
			IndexFun.updateUserinfoLayer = IndexFun.initUpdateUserinfoLayer();
		});

		// 绑定划过事件
		$('.header-actions').children('li').hover(function() {
			$(this).find('.dropdown-menu').show();
		}, function() {
			$(this).find('.dropdown-menu').hide();
		});
	};

	IndexFun.initUpdateUserinfoLayer = function() {
		return layer.open({
		    type: 1,
		    title: "修改个人信息",
		    skin: 'layui-layer-lan', //加上边框
		    area: ['500px', '300px'], //宽高
		    zIndex:1028,
		    content: $(".login-userData-form"),
		    success:function(){
		    	// 绑定表单校验事件
		    	IndexFun.bindValiator();
		    	// 初始化对话框的事件
		    	IndexFun.init_update_user_info_event();

		    	$('.btn-cancelUserInfo').parent().off('click.updateinfo.api')
		    	.on('click.updateinfo.api', 'button', function(event) {
		    		var $that = $(this);
		    		console.info(2342);
		    		if ($that.hasClass('btn-cancelUserInfo')) {
		    			// 取消
		    			layer.close(IndexFun.updateUserinfoLayer);
		    		} else if ($that.hasClass('btn-UserSaveInfo')) {
		    			// 保存
		    			if (IndexFun.updateUserInfoAction === 0 )  {
		    				// 保存个人信息的修改
		    				IndexFun.saveUserInfo();
		    			} else if (IndexFun.updateUserInfoAction === 1){
		    				// 修改密码
		    				IndexFun.changePwd();
		    			}
		    		}
		    	});
		    }
		});
	}

	IndexFun.bindValiator = function() {
		var $obj = $(".login-userData-form");

		// 仅初始化一次
		if (IndexFun.validator)  return;	

		IndexFun.validator = {
			updateinfoValidator : $obj.formValidate([
					{
						$ele: $obj.find("input[name='realName']"),
						rules: [{
							type: 'null',
							errMsg: '姓名不能为空'
						}]
					},
					{
						$ele: $obj.find("input[name='mobileNumber']"),
						rules: [
							{
								type: 'null',
								errMsg: '电话不能为空'
							},
							{
								type: 'phone-num',
								errMsg: '电话格式不正确'
							}
						]
					}
				]						
				),
			changePwdValidator : $obj.formValidate([
					{
						$ele: $obj.find("input[name='oldPassword']"),
						rules: [{
							type: 'null',
							errMsg: '旧密码不能为空'
						}]
					},
					{
						$ele: $obj.find("input[name='newPassword']"),
						rules: [{
							type: 'null',
							errMsg: '新密码不能为空'
						}]
					},
					{
						$ele: $obj.find("input[name='newPassword1']"),
						rules: [{
							type: 'null',
							errMsg: '确认密码不能为空'
						}]
					}
				]					
				)
		}
	};

	IndexFun.saveUserInfo = function() {
		// 表单校验
		if (!IndexFun.validator.updateinfoValidator.form()) {
			return;
		}
		var $updateObj = $(".login-userData-form");
		var userName=$updateObj.find("input[name='userName']").val();
		var realName=$updateObj.find("input[name='realName']").val();
		var mobileNumber=$updateObj.find("input[name='mobileNumber']").val();
		var user = {
				userName : userName,
				realName : realName,
				mobileNumber : mobileNumber
		}
		//提交修改用户信息
	   	$.ajax({
			url:""+APP_ROOT+"back/user.do?method=updateInfo&token="+$.cookie("token")+"&menuKey=system_userinfo&operation=self",
			data:"user="+encodeURIComponent(JSON.stringify(user))+"",
			datatype:"json",
			beforSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(IndexFun.updateUserinfoLayer);
				console.log(data);
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message);
			    }
			}
		})
	};

	IndexFun.changePwd = function() {
		if (!IndexFun.validator.changePwdValidator.form()) {
			return;
		}
		var $loginObj = $("#alter-pwd");
		var newPassword=$loginObj.find("input[name='newPassword']").val();
		var newPassword1=$loginObj.find("input[name='newPassword1']").val();
		var oldPassword=$loginObj.find("input[name='oldPassword']").val();
		if(newPassword!=newPassword1){
			//两次密码是否一致性的验证
			$(".password-validate").text("两次输入的密码不一致！");
			return false;
		}else{
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=rePassword&token="+$.cookie("token")+"&menuKey=system_userinfo&operation=self",
				data:"oldPassword="+oldPassword+"&newPassword="+newPassword,
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(IndexFun.updateUserinfoLayer);

					console.log(data);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							$.ajax({
								url:""+APP_ROOT+"back/user.do?method=logOut&token="+$.cookie("token")+"&operation=self",
								type:"POST",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									if(data.success == 0){
										showMessageDialog($( "#confirm-dialog-message" ),data.message);
									}
									else{
										window.location.href = "login.html";
									}
								}
							});
						});
				    }
				}
			})
		}
	};

	IndexFun.init_update_user_info_event = function() {
		IndexFun.updateUserInfoAction = 0;		// 修改个人信息
		$(".userinfo-tabs").on('click', '>p', function(event) {
			event.preventDefault();
			var $that = $(this);

			if ($that.hasClass('user-active'))  return;


			$that.parent().children().toggleClass('Default user-active');
			$('.userinfo-content').children('div').toggleClass('hidden');

			if ($that.hasClass('alter-user'))  {	// 修改个人信息
				IndexFun.updateUserInfoAction = 0;
			} else {
				IndexFun.updateUserInfoAction = 1;		// 修改密码
			}
		});
	}
	// 初始哈
	jQuery(document).ready(function($) {
		IndexFun.init();
	});
}(window.jQuery);