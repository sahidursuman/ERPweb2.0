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
		$tab : false,
		$searchArea : false,
		$addUserLayer :false
	};

	user.initModule = function() {
		user.listUser(0,"",1);
	};

	user.listUser = function(page,realname,status){
		if (user.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            realname = user.$searchArea.find("input[name=user_realname]").val(),
            status = user.$searchArea.find('.T-status').find("button").data('value')
        }
        // 修正页码
        page = page || 0;

        $.ajax({
        	url:KingServices.build_url("user","findAllUser"),
            type: "POST",
            data: {
                pageNo: page,
                inputName: realname,
                status: status,
                sortType: 'auto'
            },
            success: function(data) {
            	var result = showDialog(data);
				if(result){
					var userList = data.userList;
					userList = JSON.parse(userList);
					data.userList = userList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"人员管理",html);

					user.initList();

					// 绑定翻页组件
					laypage({
					    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		user.listUser(obj.curr -1);
							}
					    }
					});
				}
            }
        });
	};

	user.initList = function(){
		// 初始化jQuery 对象
        user.$tab = $('#' + tabId);
        user.$searchArea = user.$tab.find('.T-search-area');

        //搜索栏状态button下拉事件
        user.$tab.find('.T-status').on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            user.listUser(0);
        });

        //搜索按钮事件
        user.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            user.listUser(0);
        });

        // 回车搜索
        user.$tab.find('input[name=user_realname]').keyup(function(e) {
            if (e.which == 13 && !window.forbiddenError) { //e.which == 13键盘回车事件，
                user.listUser(0);
            }
        });

        //添加人员
        user.$tab.find(".T-add").click(function(){
			user.addUser();
		});

		// 报表内的操作
        user.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-view')) {
                // 查看
                user.viewUser(id);
            } else if ($that.hasClass('T-auth')) {
                // 授权
                user.updateAuth(id);
            } else if ($that.hasClass('T-update')) {
                // 修改
                user.updateUser(id);
            }
        });
	};

	//添加人员
	user.addUser = function() {
		$.ajax({
			url:KingServices.build_url("group","findGroupAll"),
			type:"POST",
			data:"",
			success:function(data){
				var result = showDialog(data);
				data = user.covertOrg(data);
				if(result){
					var html = addTemplate(data);
					user.$addUserLayer = layer.open({
					    type: 1,
					    title:"新增系统人员",
					    skin: 'layui-layer-rim',
					    area: '650px', 
					    zIndex:1028,
					    content: html,
					    scrollbar: false,
					    success:function(){
							var validator=rule.check($(".T-addUser-form"));
							$(".T-addUser-form .T-addUser").click(function(){
								user.saveAdd();
							});
					    }
					});
				}
			}
		});
	};

	user.saveAdd = function(){
		//表单验证
		var $form = $(".T-addUser-form");
		var validator=rule.check($form);
		if (!validator.form()) { return; }

		var status = 0;
		if($(".T-user-status").is(":checked") == true){
			status = 1;
		}
		var isOpenOP = 0;
		if($(".T-addUser-form .T-open-meter").is(":checked") == true){
			isOpenOP = 1;
		}
		var financialMessage = 0;
		if($(".T-addUser-form .T-financialMessage").is(":checked")){
			financialMessage = 1;
		}
		var form = $form.serialize()+"&status="+status+"&financialMessage="+financialMessage;
		
		$.ajax({
			url:KingServices.build_url("user","addUser"),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					if(isOpenOP){
						user.openOP(data.userId, 10);
					}
					layer.close(user.$addUserLayer);
					user.listUser(0, "", 1);
					user.updateAuth(data.userId,true);
				}
			}
		});
	};

	user.openOP = function(userId, type){
		$.ajax({
			url: KingServices.build_url("user","openApp"),
			type: 'POST',
			data: {id: userId, type : type},
		})
		.done(function() {
			var result = showDialog(data);
		});
	};
	
	user.viewUser = function(id){
		$.ajax({
			url:KingServices.build_url("user","getUserById"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var userInfo = JSON.parse(data.user);
					data.user = userInfo;
					var html = viewTemplate(data);
					layer.open({
					    type: 1,
					    title:"系统人员信息",
					    skin: 'layui-layer-rim', 
					    area: '700px', 
					    zIndex:1028,
					    content: html,
					    scrollbar: false
					});
				}
			}
		});
	};

	user.updateAuth = function(id,isNew){
		$.ajax({
			url:KingServices.build_url("user","findUserFunctionShip"),
			type:"POST",
			data:{
				userId : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.listMenu = JSON.parse(data.listMenu),
					data.userAuthList = JSON.parse(data.userAuthList),
					data.listUserFunctionShip = JSON.parse(data.listUserFunctionShip),
					data.user = JSON.parse(data.user);
					var html = authTemplate(data);
						Tools.addTab(tabId,"编辑授权",html);
					    user.initAuth(data,isNew);
				}
			}
		});
	};

	user.initAuth = function(data,isNew){
		var $tab = $('#tab-tab-system_user-content-content'), 
			$container = $tab.find(".T-update-auth");
    	//初始化选择框
    	if(isNew){
    		$container.find("input").prop("checked",true);
    	} else {
    		//权限范围
    		var authList = data.userAuthList;
	    	for(var i = 0 ;i < authList.length; i ++){
	    		var menuId = authList[i].menuId,
	    			submenu = $container.find(".T-submenu-id"+menuId),
	    			authType = authList[i].authAreaType;
	    		submenu.prop("checked",true);
	    		submenu.closest('tr').find(".T-function-area"+authType).prop("checked",true);
	    	}
	    	//功能listUserFunctionShip
	    	var functionList = data.listUserFunctionShip;
	    	for(var i = 0 ;i < functionList.length; i ++){
	    		var functionId = functionList[i].functionId;
	    		$(".T-function-id"+functionId).prop("checked",true);
	    	}
    	}
    	//编辑授权右侧列功能
    	$container.find(".meun").click(function(){
    		var toId = $(this).data('toid'),
    			top = $container.find('#'+toId).offset().top - 180 + $tab.scrollTop();
	       		$tab.animate({scrollTop: top},150);
		});

    	//主菜单是否勾选
    	$('.T-menu-check').each(function(){
    		user.checkMenu(this);
    	});

    	//主菜单事件 
    	$container.find(".T-menu-check").on("click",function(){
    		var table = $(this).closest('table');
    		if($(this).is(":checked")){
    			table.find('.T-submenu-check').prop("checked",true);
    			table.find('.T-function').prop("checked",true);
    			table.find('.T-submenu').each(function(){
    				user.checkAuth(this);
    			});
    		}else{
    			table.find('input').prop("checked",false);
    		}
    	});

    	//子菜单事件
    	$container.find(".T-submenu-check").on("click",function(){
    		var tr = $(this).closest('tr'),
    			checkboxs = tr.find("input[type=checkbox]");
    		if($(this).is(":checked")){
    			checkboxs.prop("checked",true);
    			tr.find(".T-function-area4").prop("checked",true);
    			user.checkMenu(this);
    		} else{
    			checkboxs.prop("checked",false);
    			tr.find("input[type=radio]").prop("checked",false);
    			$(this).closest('table').find(".T-menu-check").prop("checked",false);
    		}
    	});

		//功能项选择事件
    	$container.find(".T-function").on("click",function(){
    		var $this = $(this);
    			tr = $this.closest('tr'),
    			funcs = tr.find(".T-function"),
    			index = funcs.index($this);
    		
    		if($this.is(":checked")){
    			tr.find('.T-submenu-check').prop("checked",true);
    			user.checkAuth(tr);
    			user.checkMenu(this);
    		}
    	});
    	$container.find(".T-submenu input[type=radio]").on("click",function(){
    		$(this).closest('tr').find('.T-submenu-check').prop("checked",true);
    		user.checkMenu(this);
    	});

    	//权限范围列全选
    	$container.find(".T-selectAll").on("click",function(){
    		var index = $(this).parent().index(),
    			submenus = $(this).closest('table').find(".T-submenu");
    		submenus.each(function(){
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
    				if(!ischeck){
    					$(this).find(".T-function-area4").prop("checked",true);
    				}
    			}
    			$(this).find('.T-submenu-check').prop("checked",true);
    		});
    		$(this).closest('table').find(".T-menu-check").prop("checked",true);
    	});	

    	//功能权限全选
    	$container.find(".T-selectAll-function").on("click",function(){
    		var index = $(this).parent().index();
    		var funcs = $(this).closest('table').find(".T-function");
    		var submenu = $(this).closest('table').find(".T-submenu");
    		submenu.each(function(){
    			user.checkAuth(this);
    		})
    		var isAll = false;
    		funcs.each(function(){
    			if($(this).is(":checked")){
    				isAll = true;
    			} else{
    				isAll = false;
    				return false;
    			}
    		});
    		if(isAll){
    			funcs.prop("checked",false);
    		} else{
    			$(this).closest('table').find(".T-menu-check").prop("checked",true);
    			$(this).closest('table').find(".T-submenu-check").prop("checked",true);
    			funcs.prop("checked",true);
    		}
    	});

    	//保存按钮事件绑定
    	$container.find(".T-saveAuth").click(function(){
    		if(!$(this).data("click")){
    			$(this).data("click",true);
    			user.saveAuth(data.user.id,data.user.userName);

    		}
    	});
	};

	//保存授权
	user.saveAuth = function(id,username){
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
			url:KingServices.build_url("user","updateUserFunctionShip"),
			type:"POST",
			data:{
				listMenuAuth : authUpdateJson,
				listUserFunctionShip : functionShipJson,
				userId : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					// layer.close(user.$updateAuth);
					
					showMessageDialog($("#confirm-dialog-message"),data.message, function() {
						Tools.closeTab(tabId);
						user.listUser(0, "", 1);	
						if (IndexData.userInfo.userName === username) {
							user.updateLoginInfo();
						}
					});
				}
			}
		});
	};

	user.updateUser = function(id){
		$.ajax({
			url:KingServices.build_url("user","getUserById"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.user = JSON.parse(data.user);
					var groupInfo = user.covertOrg({groupList: JSON.parse(data.groups)})
						data.groups = groupInfo.groupList;
					var html = updateTemplate(data);
					var updateUserLayer = layer.open({
					    type: 1,
					    title:"修改人员信息",
					    skin: 'layui-layer-rim',
					    area: '650px',
					    zIndex:1028,
					    content: html,
					    success:function(){
							//表单验证
							var $form = $(".T-updateUser-form");
							var validator=rule.check($form);

							$form.find(".T-updateUser").click(function(){
								// 表单校验
								if (!validator.form()) { return; }

								var status = 0;
								if($form.find(".T-user-status").is(":checked") == true){
									status = 1;
								}
								var isOpenOP = 0;
								if($(".T-updateUser-form .T-open-meter").is(":checked") == true){
									isOpenOP = 1;
								}

								var financialMessage = 0;
								if($(".T-updateUser-form .T-financialMessage").is(":checked")){
									financialMessage = 1;
								}
								var form = "id="+id+"&"+$form.serialize()+"&status="+status+"&financialMessage="+financialMessage;
								$.ajax({
									url:KingServices.build_url("user","updateUser"),
									type:"POST",
									data:form,
									success:function(data){
										var result = showDialog(data);
										if(result){
											if(isOpenOP){
												user.openOP(id, 10);
											}
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
	};


	//主菜单勾选与否
	user.checkMenu = function(obj){
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
	};

	//权限范围是否使用默认勾选
	user.checkAuth = function(obj){
		var ischeck = false;
		$(obj).find("input[type=radio]").each(function(){
			if($(this).is(":checked")){
				ischeck = true;
				return false;
			}
		});
		if(!ischeck){
			$(obj).find('.T-function-area4').prop("checked",true);
		}
	};

	user.updateLoginInfo = function() {
		$.ajax({
			url:""+APP_ROOT+"base.do?method=checkLogin",
			type:"GET",
			success:function(data){
				IndexData.userInfo = data;
			}
		});
	};

	// 组织数据结构
	user.covertOrg = function(data)  {
		var res = [];
		if (!!data && !!data.groupList)  {
			for (var i = 0, len = data.groupList.length, tmp;i < len; i++)  {
				tmp = data.groupList[i];
				pushData(tmp.businessGroup.id, tmp.businessGroup.name, tmp.id, tmp.name);
			}
			// 恢复格式
			res = { groupList: res };
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
	};

	

    // $(".meun").toggle(function(){
    //     $('#D-{{menu.id}}').animate({top:'130px'},"fast");
    // });

   


	exports.init = user.initModule;
});
