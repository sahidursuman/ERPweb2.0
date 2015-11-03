define(function(require, exports) {
	var rule = require("./rule"),
		 menuKey = "system_user",
		 listTemplate = require("./view/list"),
		 addTemplate = require("./view/add"),
		 updateTemplate = require("./view/update"),
		 viewTemplate = require( "./view/view"),
		 authTemplate = require("./view/auth"),
		 tabId = "tab-"+menuKey+"-content";
	
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
							user.updateAuth(id,false);
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
							var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							user.listUser(0,realname,status);
						});
						//搜索按钮事件
						$("#tab-"+menuKey+"-content  .btn-user-search").click(function(){
							var realname = $("#tab-"+menuKey+"-content  input[name=user_realname]").val();
							var status = $("#tab-"+menuKey+"-content  .btn-status").find("button").attr("data-value");
							user.listUser(0,realname,status);
						});
						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		user.listUser(obj.curr -1,realname,status);
								}
						    }
						});
					}
				}
			});
		},
		updateAuth : function(id,isNew) {//isNew是否是新增人员
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=findUserFunctionShip&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&groupId="+id,
				type:"POST",
				data:{
					userId : id + ""
				},
				success:function(data){
					var result = showDialog(data);
					if(result){
						var listMenu = JSON.parse(data.listMenu);
						data.listMenu = listMenu;
						var userAuthList = JSON.parse(data.userAuthList);
						data.userAuthList = userAuthList;
						var functionList = JSON.parse(data.listUserFunctionShip);
						data.listUserFunctionShip = functionList;
						var userData = JSON.parse(data.user);
						data.user = userData;
						var html = authTemplate(data);
						var updateAuth = layer.open({
						    type: 1,
						    title:"编辑权限",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1080px', '750px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//初始化选择
						    	//权限范围
						    	if(isNew){
						    		$("input").prop("checked",true);
						    	} else {
						    		var authList = data.userAuthList;
							    	for(var i = 0 ;i < authList.length; i ++){
							    		var menuId = authList[i].menuId;
							    		$(".T-submenu-id"+menuId).prop("checked",true);
							    		var subCheck = $(".T-submenu-check");
							    		var index = subCheck.index($(".T-submenu-id"+menuId));
							    		var authType = authList[i].authAreaType;
							    		subCheck.eq(index).closest('tr').find(".T-function-area"+authType).prop("checked",true);
							    	}
						    	}
						    	
						    	//功能listUserFunctionShip
						    	var functionList = data.listUserFunctionShip;
						    	for(var i = 0 ;i < functionList.length; i ++){
						    		var functionId = functionList[i].functionId;
						    		$(".T-function-id"+functionId).prop("checked",true);
						    	}
						    	//主菜单是否勾选
						    	$('.T-menu-check').each(function(){
						    		user.checkMenu(this);
						    	});

						    	//主菜单事件 
						    	$(".T-menu-check").on("click",function(){
						    		var table = $(this).closest('table');
						    		var ischeck = $(this).is(":checked");
						    		if(ischeck){
						    			table.find('.T-submenu-check').prop("checked",true);
						    			// table.find('.T-function-area1').prop("checked",true);
						    			table.find('.T-function').prop("checked",true);
						    			table.find('.T-submenu').each(function(){
						    				user.checkAuth(this);
						    			});
						    		}else{
						    			table.find('input').prop("checked",false);
						    		}
						    	});

						    	//子菜单事件
						    	$(".T-submenu-check").on("click",function(){
						    		var tr = $(this).closest('tr');
						    		if($(this).is(":checked")){
						    			tr.find("input[type=checkbox]").prop("checked",true);
						    			tr.find(".T-function-area4").prop("checked",true);
						    			user.checkMenu(this);
						    		} else{
						    			tr.find("input[type=checkbox]").prop("checked",false);
						    			tr.find("input[type=radio]").prop("checked",false);
						    			$(this).closest('table').find(".T-menu-check").prop("checked",false);
						    		}
						    	});

						    	//项选择事件
						    	$(".T-submenu .T-function").on("click",function(){
						    		var tr = $(this).closest('tr');
						    		tr.find('.T-submenu-check').prop("checked",true);
						    		if($(this).is(":checked")){
						    			user.checkAuth(tr);
						    		}
						    		user.checkMenu(this);
						    	});
						    	$(".T-submenu input[type=radio]").on("click",function(){
						    		$(this).closest('tr').find('.T-submenu-check').prop("checked",true);
						    		user.checkMenu(this);
						    	});

						    	//权限范围列全选
						    	$(".T-selectAll").on("click",function(){
						    		var index = $(this).parent().index();
						    		var $this = $(this).closest('table').find(".T-submenu");
						    		$this.each(function(){
						    			var functionArea = $(this).find(".T-function-area"+index);
						    			if(functionArea.length > 0){
						    				functionArea.prop("checked",true);
						    			} else{//有权限范围屏蔽的行
						    				var ischeck = false;
						    				$(this).find('input[type=radio]').each(function(){
						    					if($(this).is(":checked")){
						    						ischeck = true;
						    						return false;
						    					}
						    				});
						    				console.log(ischeck);
						    				if(!ischeck){
						    					$(this).find(".T-function-area4").prop("checked",true);
						    				}
						    			}
						    			$(this).find('.T-submenu-check').prop("checked",true);
						    		});
						    		$(this).closest('table').find(".T-menu-check").prop("checked",true);
						    	});	

						    	//功能权限全选
						    	$(".T-selectAll-function").on("click",function(){
						    		var index = $(this).parent().index();
						    		var $this = $(this).closest('table').find(".T-function");
						    		var submenu = $(this).closest('table').find(".T-submenu");
						    		submenu.each(function(){
						    			user.checkAuth(this);
						    		})
						    		var isAll = false;
						    		$this.each(function(){
						    			if($(this).is(":checked")){
						    				isAll = true;
						    			} else{
						    				isAll = false;
						    				return false;
						    			}
						    		});
						    		if(isAll){
						    			$this.prop("checked",false);
						    		} else{
						    			$(this).closest('table').find(".T-menu-check").prop("checked",true);
						    			$(this).closest('table').find(".T-submenu-check").prop("checked",true);
						    			$this.prop("checked",true);
						    		}
						    	});

						    	$("#userSetAuth .userMainForm .btn-submit-group").click(function(){
						    		var authUpdateJson = [];
						    		$(".T-submenu input[type=radio]").each(function(){
						    			var ischeck = $(this).is(":checked");
						    			if(ischeck){
						    				var authJson = {
						    					menuId : $(this) .closest('tr').data("id") + "",
						    					authType : $(this).val()
						    				};
						    				authUpdateJson.push(authJson);
						    			}
						    		});
						    		authUpdateJson = JSON.stringify(authUpdateJson);

						    		var functionShipJson = [];
						    		$(".T-function").each(function(){
						    			if($(this).is(":checked")){
						    				var functionJson = {
						    					functionId : $(this).val()
						    				};
						    				functionShipJson.push(functionJson);
						    			}
						    		});
						    		functionShipJson = JSON.stringify(functionShipJson);

						    		$.ajax({
										url:""+APP_ROOT+"back/user.do?method=updateUserFunctionShip&token="+$.cookie("token")+"",
										type:"POST",
										data:{
											listMenuAuth : authUpdateJson,
											listUserFunctionShip : functionShipJson,
											userId : data.user.id + ""
										},
										success:function(data){
											var result = showDialog(data);
											if(result){
												layer.close(updateAuth);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												console.log(!!user.listUser);
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
		//主菜单勾选与否
		checkMenu : function(obj){
			$obj = $(obj);
			var isAll = false;
			$obj.closest('table').find(".T-submenu-check").each(function(){
				if($(this).is(":checked")){
					isAll = true;
				} else {
					isAll = false;
					return false;
				}
			});
			if(isAll){
				$obj.closest('table').find(".T-menu-check").prop("checked",true);
			}
		},
		//权限是否使用默认勾选
		checkAuth : function(obj){
			var ischeck = false;
			$(obj).find("input[type=radio]").each(function(){
				if($(this).is(":checked")){
					ischeck = true;
					return false;
				}
			});
			if(!ischeck){
				console.log("no-check");
				$(obj).find('.T-function-area4').prop("checked",true);
			}
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
												user.updateAuth(data.userId,true);
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
