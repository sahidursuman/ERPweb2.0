define(function(require, exports) {
	var messageTemplate = require("./view/message"),
		viewTemplate = require("../system/message/view/view"),
		settingsTemplate = require('./view/userSettings');
	var index = {
		/**
		 * 初始化首页模块
		 * @return {[type]} [description]
		 */
		main:function(){
			that.init_event();
			that.init_message();
		},
		/**
		 * 绑定处理方法
		 * @return {[type]} [description]
		 */
		init_event: function() {
			$('#update-userinfo-settings').on('click', function(event) {
				event.preventDefault();
				index.updateUserinfoLayer = index.initUpdateUserinfoLayer();
			});
		},
		/**
		 * 初始化消息通讯
		 * @return {[type]} [description]
		 */
		init_message: function() {
			index.message();
			setInterval(index.message,1000*60*30);
		},
		message:function(){
			$.ajax({
				url:""+APP_ROOT+"back/message.do?method=listMessage&token="+$.cookie("token")+"&menuKey=&operation=self",
				type:"POST",
				success:function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
						if (data.unReadMsgCount == 0) {
							$("#unReadCountStr").text("当前没有未读消息");
						}else{
							$("#unReadCountStr").text(data.unReadMsgCount+"  条新消息");
						}
						$("#msgCountSpan").text(data.unReadMsgCount);
						var html = messageTemplate(data);
						$("#msgContainer .msgList").html(html);
						$("#msgContainer").ace_scroll({
							size: 200
						});
						
						$("#msgContainer .msgList .msg-intro").click(function(){
							var id =$(this).attr("data-entity-id");
							$.ajax({
								url:""+APP_ROOT+"back/message.do?method=readMessage&token="+$.cookie("token")+"&menuKey=&operation=self",
								type:"POST",
								data:"id="+id,
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									console.log(data);
									var html = viewTemplate(data);
									layer.open({
									    type: 1,
									    title:"查看信息",
									    skin: 'layui-layer.-rim', //加上边框
									    area: ['600px', '480px'], //宽高
									    zIndex:1028,
									    content: html,
									    success:function(){
									    }
									});
								}
							});
						});
					}
				}
			});
		}
	}, that = index;

	index.initUpdateUserinfoLayer = function() {

		return layer.open({
		    type: 1,
		    title: "修改个人信息",
		    skin: 'layui-layer-lan', //加上边框
		    area: ['500px', '300px'], //宽高
		    zIndex:1028,
		    content: settingsTemplate(IndexData.userInfo),
		    success:function(){
		    	// 绑定表单校验事件
		    	index.bindValiator();
		    	// 初始化对话框的事件
		    	index.init_update_user_info_event();

		    	$('.btn-cancelUserInfo').parent().off('click.updateinfo.api')
		    	.on('click.updateinfo.api', 'button', function(event) {
		    		var $that = $(this);
		    		if ($that.hasClass('btn-cancelUserInfo')) {
		    			// 取消
		    			layer.close(index.updateUserinfoLayer);
		    		} else if ($that.hasClass('btn-UserSaveInfo')) {
		    			// 保存
		    			if (index.updateUserInfoAction === 0 )  {
		    				// 保存个人信息的修改
		    				index.saveUserInfo();
		    			} else if (index.updateUserInfoAction === 1){
		    				// 修改密码
		    				index.changePwd();
		    			}
		    		}
		    	});
		    }
		});
	};

	index.bindValiator = function() {
		var $obj = $(".login-userData-form");
		index.validator = {
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

	index.saveUserInfo = function() {
		// 表单校验
		if (!index.validator.updateinfoValidator.form()) {
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
				layer.close(index.updateUserinfoLayer);
				console.log(data);
				var result = showDialog(data);
				if(result){
					showMessageDialog($( "#confirm-dialog-message" ),data.message);
					// 回显设置
					var $userInfoContainer = $('#loginUserInfo');
					$userInfoContainer.find('.userName').text(realName);
					$userInfoContainer.find('.phoneNumber').text(mobileNumber);
					IndexData.userInfo.realName = realName;
					IndexData.userInfo.mobileNumber = mobileNumber;
			    }
			}
		})
	};

	index.changePwd = function() {
		if (!index.validator.changePwdValidator.form()) {
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
					layer.close(index.updateUserinfoLayer);

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

	index.init_update_user_info_event = function() {
		index.updateUserInfoAction = 0;		// 修改个人信息
		$(".userinfo-tabs").on('click', '>p', function(event) {
			event.preventDefault();
			var $that = $(this);

			if ($that.hasClass('user-active'))  return;


			$that.parent().children().toggleClass('Default user-active');
			$('.userinfo-content').children('div').toggleClass('hidden');

			if ($that.hasClass('alter-user'))  {	// 修改个人信息
				index.updateUserInfoAction = 0;
			} else {
				index.updateUserInfoAction = 1;		// 修改密码
			}
		});
	}
	exports.main = index.main;
});