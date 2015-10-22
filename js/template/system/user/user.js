define(function(require, exports) {
	var rule = require("./rule"),
		 menuKey = "system_user",
		 listTemplate = require("./view/list"),
		 addTemplate = require("./view/add"),
		 updateTemplate = require("./view/update"),
		 viewTemplate = require( "./view/view"),
		 authTemplate = require("./view/auth");
	
	var user = {
		listUser:function(page,realname,status){
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=findAllUser&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&inputName="+encodeURIComponent(realname)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var userList = data.userList;
						userList = JSON.parse(userList);
						data.userList = userList;
						var html = listTemplate(data);
						addTab(menuKey,"人员管理",html);
						
						$("#tab-"+menuKey+"-content .userList .btn-user-view").click(function(){
							var id = $(this).attr("data-entity-id");
							user.viewUser(id);
						});
						
						$("#tab-"+menuKey+"-content .userList .btn-user-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							user.updateUser(id);
						});
						
						$("#tab-"+menuKey+"-content .userList .btn-user-auth").click(function(){
							var id = $(this).attr("data-entity-id");
							user.updateAuth(id);
						});
						
						$("#tab-"+menuKey+"-content .btn-user-add").click(function(){
							user.addUser();
						});
						
						$("#tab-"+menuKey+"-content .btn-department-add").click(function(){
							//新增部门
							alert("新增部门未实现");
						});
						
						$("#tab-"+menuKey+"-content").find('input[name=user_realname]').keyup(function(e){
							if(e.which == 13){
								var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
								var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
								user.listUser(0,realname,status);
							}
						});
						
						//搜索栏状态button下拉事件
						$("#tab-"+menuKey+"-content .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
						});
						//搜索按钮事件
						$("#tab-"+menuKey+"-content  .btn-user-search").click(function(){
							var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							user.listUser(0,realname,status);
						});
						//分页--首页按钮事件
						$("#tab-"+menuKey+"-content .pageMode a.first").click(function(){
							var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							user.listUser(0,realname,status);
						});
						//分页--上一页事件
						$("#tab-"+menuKey+"-content  .pageMode a.previous").click(function(){
							var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							user.listUser(previous,realname,status);
						});
						//分页--下一页事件
						$("#tab-"+menuKey+"-content .pageMode a.next").click(function(){
							var realname = $("#tab-"+menuKey+"-content input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							user.listUser(next,realname,status);
						});
						//分页--尾页事件
						$("#tab-"+menuKey+"-content  .pageMode a.last").click(function(){
							var realname = $("#tab-"+menuKey+"-content input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							user.listUser(data.totalPage-1,realname,status);
						});
						
					}
				}
			});
		},
		updateAuth:function(id) {
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=findMenuAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&groupId="+id,
				type:"POST",
				data:"userId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var mens = JSON.parse(data.menuList);
						data.menuList = mens;
						var MenuAuths = JSON.parse(data.userAuthList);
						data.userAuthList = MenuAuths;
						var tmpGroupId = JSON.parse(data.user);
						data.user = tmpGroupId;
						var html = authTemplate(data);
						var updateAuth = layer.open({
						    type: 1,
						    title:"编辑权限",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1000px', '750px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    
						    	for(var i=0; i < data.userAuthList.length; i ++) {
						    		var myAuth = data.userAuthList[i];
						    		var id = myAuth.menuId;
						    		var a = myAuth.addAuth==1?true:false;
						    		var e = myAuth.updateAuth?true:false;
						    		var d = myAuth.deleteAuth?true:false;
						    		var authType = myAuth.authAreaType;
						    		
						    		$('.userMainForm .checkibox'+id).find("input[value='auTy" + authType + "']").attr("checked","checked");
						    		
						    		$('.userMainForm .checkibox'+id).find("input[value='" + id + "|s']").attr("checked","checked");
						    		if(a) {
						    			$('.userMainForm .checkibox'+id).find("input[value='" + id + "|a']").attr("checked","checked");
						    		}
									if(e) {
										$('.userMainForm .checkibox'+id).find("input[value='" + id + "|e']").attr("checked","checked");
									}
									if(d) {
										$('.userMainForm .checkibox'+id).find("input[value='" + id + "|d']").attr("checked","checked");
									}
						    	}
						    	
						    	for(var i=0; i < data.menuList.length; i ++) {
						    		var menu = data.menuList[i];
						    		if(menu.pid == 0) {
						    			var menuId = menu.id;
						    			var trs = $('.userMainForm .pmodule'+menuId);
						    			
						    			var flag = false;
						    			for(var j=0; j < trs.length; j ++) {
						    				var tr = trs[j];
						    				var s = $(tr).find('td').eq(0).find('input[type=checkbox]').is(':checked');
						    				var a = $(tr).find('td').eq(1).find('input[type=checkbox]').is(':checked');
						    				var e = $(tr).find('td').eq(2).find('input[type=checkbox]').is(':checked');
						    				var d = $(tr).find('td').eq(3).find('input[type=checkbox]').is(':checked');
						    				var auty = $(tr).find('input[type=radio]').is(':checked');
						    				if(s&&a&&e&&d&&auty) {
						    					flag = true;
						    				} 
						    				else {
						    					flag = false;
						    					break;						    					
						    				}
						    				
						    			}
						    			if(flag || flag == "true") {
						    				var pmodules = $("#userSetAuth .pmodule");
						    				for(var j=0; j < pmodules.length; j ++) {
						    					var pmodule = pmodules[j];
						    					var val = $(pmodule).val();
						    					if(val == menuId) {
						    						$(pmodule).prop("checked",true);
						    					}
						    				}
						    			}
						    		}
						    	}
						    	
						    	//总选框
						    	$("#userSetAuth .userMainForm .pmodule").click(function() {
						    		var id = $(this).val();
						    		var trs = $('#userSetAuth .pmodule' + id);
						    		
						    		for(var i=0; i< trs.length; i ++) {
						    			var tr = trs[i];
						    			
						    			if($(this).is(":checked")){	
						    				
						    				$(tr).find("input[type='checkbox']").prop("checked",true);
							    			$(tr).find("input[type='radio']").eq(0).prop("checked",true);
							    			
						    			}else {
					                        $(tr).find("input[type='checkbox']").prop("checked",false);
							    			$(tr).find("input[type='radio']").prop("checked",false);	
						    			}
						    		}

						    	})
						    	
						    	//复选框的单选和反选  
						    	$("#userSetAuth .userMainForm .smodule").click(function(){
						    		if($(this).is(":checked")){	
						    			//复选框
						    			$(this).parent().parent().find("input[type='checkbox']").prop("checked",true);
						    			//单选框
						    			if(!$(this).parent().parent().find("input[type='radio']").val()) {
						    				var radio = $(this).parent().parent().find("input[type='radio']")[0];
						    				$(radio).prop("checked",true);
						    			}
						    		}else {	
						     			$(this).parent().parent().find("input[type='checkbox']").prop("checked",false);
						    			$(this).parent().parent().find("input[type='radio']").prop("checked",false);
						    		}
								});
						    	
						    	//列全选
						    	$("#userSetAuth .sAll").click(function() {
						    		var td = $(this).attr("td");
						    		var id = $(this).attr("data-id");
						    		$("#userSetAuth").find(".pmodule" + id).each(function() {
						    			$($(this).find('td')[td]).find('input').prop("checked",true);
						    			$($(this).find('td')[0]).find('input').prop("checked",true);
						    		});
						    	});
						    	
						    	$("#userSetAuth .authId").find('input[type=checkbox]').change(function() {
						    		if($(this).is(":checked")){	
						    			var parent = $(this).parent().parent();
						    			$(parent).find('td').eq(0).find('input').prop("checked",true);
							    		if(!$(parent).find('input[type=radio]:checked').val()) {
							    			$(parent).find('td').eq(4).find('input').prop("checked",true);
							    		}
						    		}
						    	});
						    	
								$("#userSetAuth .userMainForm .btn-submit-group").click(function(){
									//组装json
									var authIds = $('#userSetAuth .userMainForm .authId');
									var json = "[";
									for(var i=0; i < authIds.length; i ++) {
										var j = "";
										if(i > 0) {
											j += ",";
										}
										var authId = $(authIds[i]).attr("data-id");
										
										var tmp = $('.checkibox'+authId).find('input[name=auTy' + authId + ']:checked').val();
										var auTy = tmp=="auTy4"?"4":tmp=="auTy3"?"3":tmp=="auTy2"?"2":"1";
										var s = $('.checkibox'+authId).find('input[value="' + authId + '|s"]').is(':checked')?1:0;
										var a = $('.checkibox'+authId).find('input[value="' + authId + '|a"]').is(':checked')?1:0;
										var e = $('.checkibox'+authId).find('input[value="' + authId + '|e"]').is(':checked')?1:0;
										var d = $('.checkibox'+authId).find('input[value="' + authId + '|d"]').is(':checked')?1:0;
										j += "{";
										j += "\"menuId\":\"" + authId + "\"";
										j += ",\"auTy\":\"" + auTy + "\"";
										j += ",\"s\":\"" + s + "\"";
										j += ",\"a\":\"" + a + "\"";
										j += ",\"e\":\"" + e + "\"";
										j += ",\"d\":\"" + d + "\"";
										j += "}";
										
										json += j;
									}
									json += "]";
									json = "menuAuth="+json
									var userId = $('#userSetAuth .userMainForm #userId').val();
									$.ajax({
										url:""+APP_ROOT+"back/user.do?method=updateUserAuth&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update&userId="+userId+"",
										type:"POST",
										data:json,
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateAuth);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												user.listUser(0, "", 1);
											}
										}
									});
								});
						    }
						});
					}
				}
			});
		},
		updateUser:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=getUserById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var userInfo = JSON.parse(data.user);
						data.user = userInfo;
						var groupInfo = user.covertOrg({groupList: JSON.parse(data.groups)})

						data.groups = groupInfo.groupList;
						var html = updateTemplate(data);
						var updateUserLayer = layer.open({
						    type: 1,
						    title:"修改人员信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['650px', '450px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
								//表单验证
								var validator=rule.check($(".userMainForm"));

								$(".userMainForm .btn-submit-user").click(function(){
									// 表单校验
									if (!validator.form()) { return; }

									var status = 0;
									if($(".userMainForm .user-status").is(":checked") == true){
										status = 1;
									}
									var form = "id="+id+"&"+$(".userMainForm").serialize()+"&status="+status;
									$.ajax({
										url:""+APP_ROOT+"back/user.do?method=updateUser&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form,
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateUserLayer);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												user.listUser(0, "", 1);
											}
										}
									});
								});
								
						    }
						});
					}
				}
			});
		},
		viewUser:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=getUserById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var userInfo = JSON.parse(data.user);
						data.user = userInfo;
						var html = viewTemplate(data);
						layer.open({
						    type: 1,
						    title:"系统人员信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['700px', '400px'], //宽高
						    zIndex:1028,
						    content: html
						});
					}
				}
			});
		},
		addUser:function() {
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findGroupAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);

					var result = showDialog(data);
					// 数据格式转换
					data = user.covertOrg(data);
					if(result){
						var html = addTemplate(data);
						var addUserLayer = layer.open({
						    type: 1,
						    title:"新增系统人员",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['650px', '400px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
								//表单验证
								var validator=rule.check($(".userMainForm"));

								$(".userMainForm .btn-submit-user").click(function(){
									// 表单校验
									if (!validator.form()) { return; }

									var status = 0;
									if($(".userMainForm .user-status").is(":checked") == true){
										status = 1;
									}
									var form = $(".userMainForm").serialize()+"&status="+status;
									$.ajax({
										url:""+APP_ROOT+"back/user.do?method=addUser&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
										type:"POST",
										data:form,
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(addUserLayer);
												//showMessageDialog($("#confirm-dialog-message"),data.message);
												user.listUser(0, "", 1);
												//弹出设置权限页面
												user.updateAuth(data.userId);
											}
										}
									});
								});
						    }
						});
					}
				}
			});
		},
		// 组织数据结构
		covertOrg: function(data)  {
			var res = [];
			if (!!data && !!data.groupList)  {
				for (var i = 0, len = data.groupList.length, tmp;i < len; i++)  {
					tmp = data.groupList[i];
					pushData(tmp.businessGroup.id, tmp.businessGroup.name, tmp.id, tmp.name);
				}

				// 恢复格式
				res = {
					groupList: res
				};
			} else {
				res = data;
			}

			return res;

			function pushData(parentID, parentName, id, name) {
				var obj = {
						id: parentID,
						name: parentName,
						subOrg: []
					};
					
				// 获取父对象
				for (var i = 0, len = res.length; i < len; i ++)  {
					if (res[i].id === parentID)  {
						obj = res[i];
						break;
					}
				}

				// 添加子节点
				obj.subOrg.push({
					orgId: id,
					orgName: name
				});

				if (obj.subOrg.length === 1)  {
					// 首次加入
					res.push(obj);
				}
			}
		}
	}
	exports.listUser = user.listUser;
});
