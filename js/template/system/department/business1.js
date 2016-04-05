define(function(require, exports) {
	var menuKey = "system_department";
	var listTemplate = require("./view/list");
	var addTemplate = require("./view/add");
	var updateTemplate = require("./view/update");
	var viewTemplate = require("./view/view");
	var authTemplate = require("./view/auth");
	var addGroupTemplate = require("./view/addGroup");
	var updateGroupTemplate = require("./view/updateGroup");
	var department = require("./view/department");
	var business = {
		listBusiness:function(page,keywork){
			business.departmentList();
			return;
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findBusinessGroupAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"keywork="+encodeURIComponent(keywork)+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = listTemplate(data);
						addTab(menuKey,"部门管理",html);
						
						$(".main-content .page-content .businessList .btn-group-list").click(function(){
							var id = $(this).attr("data-entity-id");
							business.viewGroup(id);
						});
						$(".main-content .page-content .businessList .btn-business-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							business.updateBusiness(id);
						});
						$(".main-content .page-content .btn-business-add").click(function(){
							business.addBusiness();
						});
					}
				}
			});
		},
		updateBusiness:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findBusinessGroupById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						
						var html = updateTemplate(data);
						var updateBusinessGroupLayer = layer.open({
						    type: 1,
						    title:"修改部门信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['500px', '230px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
								$(".businessMainForm .btn-submit-business").click(function(){
									var form = $(".businessMainForm").serialize()+"";
									$.ajax({
										url:""+APP_ROOT+"back/group.do?method=updateBusinessGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
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
												layer.close(updateBusinessGroupLayer);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												business.listBusiness(0, "");
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
		viewGroup:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findGroupByBusinessGroupId&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var html = viewTemplate(data);
						var plan = layer.open({
						    type: 1,
						    title:"部门信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['880px', '500px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	$(".groupList .btn-group-edit").click(function(){
						    		var id = $(this).attr('data-entity-id');
									business.updateGroup(id);
								});
						    	$(".groupList .btn-group-del").click(function(){
						    		alert("asdfasdf");
								});
						    	$(".search-area .btn-group-add").click(function(){
						    		var businessGroupId = $("#businessGroupId").val();
						    		business.addGroup(businessGroupId);
								});
						    }
						});
					}
				}
			});
		},
		addBusiness:function() {
			var html = addTemplate();
						var addBusinessGroupLayer = layer.open({
						    type: 1,
						    title:"新增业务部门",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['400px', '210px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
								$(".businessMainForm .btn-submit-business").click(function(){
									var form = $(".businessMainForm").serialize()+"";
									$.ajax({
										url:""+APP_ROOT+"back/group.do?method=addBusinessGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
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
												layer.close(addBusinessGroupLayer);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												business.listBusiness(0, "");
											}
										}
									});
								});
						    }
						});
		},
		addGroup:function(id) {
			var businessGroupId = id;
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findBusinessGroupAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"businessGroupId="+businessGroupId+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = addGroupTemplate(data);
						var addGroupLayer = layer.open({
						    type: 1,
						    title:"新增子部门",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['400px', '230px'], //宽高
						    zIndex:1030,
						    content: html,
						    success:function(){
						    	$(".groupMainForm .btn-submit-group").click(function(){
						    		
						    		var form = $(".groupMainForm").serialize()+"";
									$.ajax({
										url:""+APP_ROOT+"back/group.do?method=addGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
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
												layer.close(addGroupLayer);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												var group = JSON.parse(data.group);
												data.group = group;
												var tr = '<tr class="business-' + data.group.id + '">';
												tr += '<td>' + data.group.name+'</td><td>' + data.group.createTime + '</td>';
												tr += '<td><div class="btn-group"><button data-entity-id="' + data.group.id + '" class="btn btn-xs btn-info btn-group-edit"><i class="ace-icon fa fa-pencil-square-o bigger-120"></i></button></div>';
												tr += '<div class="hidden-md hidden-lg"> <div class="inline pos-rel"><button class="btn btn-minier btn-primary dropdown-toggle\" data-toggle="dropdown" data-position="auto"><i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button>';
												tr += '<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="' + data.group.id + '" href="javascript:void(0)" class="tooltip-success btn-group-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> </ul>';
												tr += '</div> </div> </td> </tr>';
												$("#groupContent").append(tr);
												
												$(".groupList .btn-group-edit").click(function(){
													var id = $(this).attr('data-entity-id');
													business.updateGroup(id);
												});
												$(".groupList .btn-group-del").click(function(){
										    		alert("asdfasdf");
												});
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
		updateGroup:function(id) {
			var businessGroupId = id;
			$.ajax({
				url:""+APP_ROOT+"back/group.do?method=findGroupById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"groupId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = updateGroupTemplate(data);
						var updateGroupLayer = layer.open({
						    type: 1,
						    title:"修改子部门信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['500px', '270px'], //宽高
						    zIndex:1030,
						    content: html,
						    success:function(data){
						    	$('.groupMainForm .btn-submit-group').click(function() {
						    		var form = $(".groupMainForm").serialize()+"";
						    		$.ajax({
										url:""+APP_ROOT+"back/group.do?method=updateGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
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
												layer.close(updateGroupLayer);
												showMessageDialog($("#confirm-dialog-message"),data.message);
												var group = JSON.parse(data.group);
												var name = group.name;
												var id = group.id;
												$('tr[class=business-'+id+']').find('td:first-child').html(name);
												$(".groupList .btn-group-edit").click(function(){
													var id = $(this).attr('data-entity-id');
													business.updateGroup(id);
												});
												$(".groupList .btn-group-del").click(function(){
										    		alert("asdfasdf");
												});
												location.reload(true);
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
		updateAuth:function(id) {
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=findMenuAll&token="+$.cookie("token")+"&menuKey=system_user&operation=view",
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
						    area: ['1000px', '800px'], //宽高
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
						    				var pmodules = $(".pmodule");
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
						    	$(".userMainForm  .pmodule").click(function() {
						    		var id = $(this).val();
						    		var trs = $('.pmodule' + id);
						    		
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
						    	$(".userMainForm .smodule").click(function(){
						    		 
							    		if($(this).is(":checked")){	
							    			//复选框
							    			$(this).parent().parent().find("input[type='checkbox']").prop("checked",true);
							    			//单选框
							    			var radio = $(this).parent().parent().find("input[type='radio']")[0];
							    			$(radio).prop("checked",true);
							    		}else {	

							     			$(this).parent().parent().find("input[type='checkbox']").prop("checked",false);
							    			$(this).parent().parent().find("input[type='radio']").prop("checked",false);

							    		}
								});
						    	
								
								$(".userMainForm .btn-submit-group").click(function(){
									//组装json
									var authIds = $('.userMainForm .authId');
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
									var userId = $('.userMainForm #userId').val();
									$.ajax({
										url:""+APP_ROOT+"back/user.do?method=updateUserAuth&token="+$.cookie("token")+"&menuKey=system_user&operation=update&userId="+userId+"",
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
		editInputChange : function() {
			$('#system_department #tree1').find('.edit').find('input').off("keyup").on("keyup",function(event) {
				if(event.which == 13){
					$(this).blur();
				}
			});
			
			$('#system_department #tree1').find('.edit').find('input').off("blur").on("blur",function(event) {
				var old = $(this).attr("old");
				var val = $(this).val();
				if(old != val) {
					var type = $(this).parent().prev().attr('type');
					var id = $(this).parent().prev().attr('data-entity-id');
					var name = val;
					var businessGroupId = $(this).parent().prev().attr('business-id');
					var url = "";
					var _this = this;
					if(type == "1") {
						url = ""+APP_ROOT+"back/group.do?method=updateBusinessGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view";
					} else if(type == "2") {
						url = ""+APP_ROOT+"back/group.do?method=updateGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view";
					}
					$.ajax({
                        url: url,  
                        data: {
                        	"id":id,
                        	"name":name,
                        	"businessGroupId":businessGroupId
                        },  
                        type: 'POST' ,  
                        dataType: 'json' ,
                        beforeSend:function(){
							globalLoadingLayer = openLoadingLayer();
						},
                        success : function (data) {
                        	layer.close(globalLoadingLayer);
                        	var result = showDialog(data);
                        	if(result) {
                        		$(_this).parent().prev().prev().text(val);
                        	}
        					$(_this).parent().prev().show();
        					$(_this).parent().prev().prev().show();
        					$(_this).parent().remove();
                        }
                   })
				} else {
					$(this).parent().prev().show();
					$(this).parent().prev().prev().show();
					$(this).parent().remove();
				}
			});
			var val = $('#system_department #tree1').find('.edit').find('input').val();
			$('#system_department #tree1').find('.edit').find('input').focus().val(val);
			
			$('#system_department #tree1').find('.edit').find('input').off("click").on("click",function(event) {
				event.stopPropagation();
			});
		},
		editDepartment : function() {
			$('#system_department').find('.treeIcon').off("click").on("click",function(event) {
				$(this).hide();
				$(this).prev().hide();
				
				var val = $(this).prev().text();
				$(this).after("<span class='edit'><input style='width:80%;height:24px;line-height:24px;' type='text' value='" + val + "' old='" + val + "' /><span>");
				
				business.editInputChange();
				event.stopPropagation();
			});
		},
		departmentList : function() {
			var html = department();
			addTab(menuKey, "部门管理", html);
			
			$('#system_department .btn-business-add').off('click').on('click',function(event) {
				business.addBusiness();
			});
			$('#system_department .btn-group-add').off('click').on('click',function(event) {
				business.addGroup();
			});
			

			/**********************绑定开始，绑定tree事件*****************************/
			var dataSource = function(options, callback) {
				var pid = null;
				var type = null;
				
				if (!("text" in options) && !("type" in options)) {
					callback({ data: {"root":{text:"公司<div class=\'div-root\'><div>", type:"folder", id:"-1"}} });
					$('#system_department .div-root').click();
				} else if ("type" in options && options.type == "folder") {
					pid = options.id;
					type = "group";
				}
				
				if(options.id == "-1") {
					pid = 0;
					type = "business";
				}
				
				var resultData = {};
				if("business" == type) {
					if(pid != null) {
						 $.ajax({
	                         url: ""+APP_ROOT+"back/group.do?method=departmentTreeList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",  
	                         data: '',  
	                         type: 'POST' ,  
	                         dataType: 'json' ,  
	                         success : function (data) {
	                        	 var tmp = "";
	                        	 data.tree = JSON.parse(data.tree);
	                        	 for(var i = 0; i < data.tree.length; i ++) {
	                        		 if(i>0) tmp += ",";
	                        		 var tree = data.tree[i];
	                        		 tmp += '"business'+tree.id+'":{"text":"<span>' + tree.name + '</span><i data-entity-id=\'' + tree.id + '\' type=\'1\' title=\'编辑\' style=\'float: right;font-size:16px;\' class=\'ace-icon fa fa-edit treeIcon\'></i>","name":"' + tree.name + '","type":"folder","id":"' + tree.id + '","myType":"business"}';
	                        	 }
	                        	 tmp = "{"+tmp+"}";
	                        	 tmp = JSON.parse(tmp);
	                        	 resultData = tmp;
	                        	 callback({ data: resultData });
	                        	 business.editDepartment();
	                         }
	                    })
					}
				} else if(type == "group") {
					if(pid != null) {
						 $.ajax({
							 url: ""+APP_ROOT+"back/group.do?method=groupTreeList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                         data: 'pid=' +pid,  
	                         type: 'POST' ,  
	                         dataType: 'json' ,  
	                         success : function (data) {
	                        	 var tmp = "";
	                        	 data.tree = JSON.parse(data.tree);
	                        	 for(var i = 0; i < data.tree.length; i ++) {
	                        		 if(i>0) tmp += ",";
	                        		 var tree = data.tree[i];
	                        		 tmp += '"group'+tree.id+'":{"text":"<span>' + tree.name + '</span><i business-id=\'' + tree.businessGroupId + '\' data-entity-id=\'' + tree.id + '\' type=\'2\' title=\'编辑\' style=\'float: right;font-size:16px;\' class=\'ace-icon fa fa-edit treeIcon\'></i>","name":"' + tree.name + '","type":"item","id":"' + tree.id + '","myType":"group","pid":"' + pid + '"}';
	                        	 }
	                        	 tmp = "{"+tmp+"}";
	                        	 tmp = JSON.parse(tmp);
	                        	 resultData = tmp;
	                        	 callback({ data: resultData });
	                        	 business.editDepartment();
	                         }
	                    })
					}
				}
				
			}
			$('#tree1').ace_tree({
				dataSource: dataSource,	//数据来源
				multiSelect: false,	//是否多选
				cacheItems: true,	//使用缓存数据
				'open-icon' : 'ace-icon tree-minus',//展开图标
				'close-icon' : 'ace-icon tree-plus',//关闭图标
				'selectable' : true,	//是否可以选中
				'selected-icon' : null,	//选中图标
				'unselected-icon' : null,//没选中图标
				loadingHTML : '<div class="tree-loading"><i class="ace-icon fa fa-refresh fa-spin blue"></i></div>'	//数据加载显示效果
			});
			
			$('#tree1')
			.on('loaded.fu.tree', function(e) {
			})
			.on('updated.fu.tree', function(e, result) {
			})
			.on('selected.fu.tree', function(e) {
				business.userInfoToHtml(e.handleObj.handler.arguments[1].target.id);
			})
			.on('deselected.fu.tree', function(e) {
				business.userInfoToHtml(e.handleObj.handler.arguments[1].target.id);
			})
			.on('opened.fu.tree', function(e) {
			})
			.on('closed.fu.tree', function(e) {
			});
			
		},
		userInfoToHtml:function(groupId) {
			$.ajax({
				url:""+APP_ROOT+"back/user.do?method=findUserByGroupId&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"groupId="+groupId,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					
					data.userList = JSON.parse(data.userList);
					$('#content').empty();
					
					//绑定部门下面的动态人员
					if(data.userList.length > 0) {
						for(var i = 0; i < data.userList.length; i ++) {
							var user = data.userList[i];
							var tr = "<tr>";
							tr += "<td>" + user.realName + "</td>";
							tr += "<td>" + user.userName + "</td>";
							tr += "<td>" + user.mobileNumber +"</td>";
							var tmp = user.status==1?"已启用":"已停用";
							tr += "<td>" + tmp +"</td>";
							tr += "<td>" +
									"<div class=\"btn-group\"> " +
									"<button data-entity-id=\"" + user.id + "\" class=\"btn btn-xs btn-danger btn-user-auth\" title=\"授权\"> <i class=\"ace-icon fa fa-key bigger-120\"></i> </button>" +
									"</div>" +
									"<div class=\"hidden-md hidden-lg\">" +
									"<div class=\"inline pos-rel\"> " +
									"<button class=\"btn btn-minier btn-primary dropdown-toggle\" data-toggle=\"dropdown\" data-position=\"auto\"> <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i> </button> " +
									"<ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close\">" +
									"<li> <a data-entity-id=\"" + user.id + "\" href=\"javascript:void(0)\" class=\"tooltip-error btn-user-auth\" data-rel=\"tooltip\"> <span class=\"red\"> <i class=\"ace-icon fa fa-search-plus bigger-120\"></i> </span> </a> </li>" +
									"</ul></div></div></td>" +
									"</td>";
							tr += "</tr>";
							$('#content').append(tr);
						}
						$("#content .btn-user-auth").off("click").on("click",function(e) {
							var id = $(this).attr("data-entity-id");
							business.updateAuth(id);
						});
					} else {
						var tr = "<tr><td colspan='5'>该部门下无成员</td></tr>";
						$('#content').append(tr);
					}
				}
			});
		}
	}
	exports.listBusiness = business.listBusiness;
});
