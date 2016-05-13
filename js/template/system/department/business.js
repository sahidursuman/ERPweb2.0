define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "system_department",
		addTemplate = require("./view/add"),
		addGroupTemplate = require("./view/addGroup"),
		department = require("./view/department"),
		tabId = "tab-" + menuKey + "-content";
	var rightCode = {
		business : "1410003",
    	group : "1410004"
    };

	var business = {
		$tab : false
	};

	business.initModule = function() {
        business.departmentList();
    };

    business.departmentList = function() {
		var html = department();
		Tools.addTab(menuKey, "部门管理", html);

		business.$tab = $("#" + tabId);
		business.$tab.find('.T-addBusiness').on('click',function() {
			business.addBusiness();
		});
		business.$tab.find('.T-addGroup').on('click',function(event) {
			business.addGroup();
		});

		$('#tree1').ace_tree({
			dataSource: business.dataSource,	//数据来源
			multiSelect: false,	//是否多选
			cacheItems: true,	//使用缓存数据
			'open-icon' : 'ace-icon tree-minus',//展开图标
			'close-icon' : 'ace-icon tree-plus',//关闭图标
			'selectable' : true,	//是否可以选中
			'selected-icon' : null,	//选中图标
			'unselected-icon' : null,//没选中图标
			loadingHTML : '<div class="tree-loading"><i class="ace-icon fa fa-refresh fa-spin blue"></i></div>'	//数据加载显示效果
		});

		$('#tree1').on('selected.fu.tree', function(e) {
			business.userInfoToHtml(e.handleObj.handler.arguments[1].target.id);
		})
		.on('deselected.fu.tree', function(e) {
			business.userInfoToHtml(e.handleObj.handler.arguments[1].target.id);
		});
	};

	//绑定tree事件
	business.dataSource = function(options, callback) {
		var pid = null,type = null;
		
		if (!("text" in options) && !("type" in options)) {
			callback({ data: {"root":{text:"公司<div class=\'T-tree-root\'><div>", type:"folder", id:"-1"}} });
			business.$tab.find('.T-tree-root').click();
		} else if ("type" in options && options.type == "folder") {
			pid = options.id;
			type = "group";
		}
		
		if(options.id == "-1") {
			pid = 0;
			type = "business";
		}
		
		var resultData = {},url,id = "";
		if(type == "business") {
			url = KingServices.build_url("group","departmentTreeList");
			
		} else if(type == "group") {
			url = KingServices.build_url("group","groupTreeList");
			id = pid;
		}

		if(pid != null) {
			$.ajax({
                 url:url,  
                 data:{
                 	pid : id + ""
                 },  
                 type: 'POST' ,    
                 success : function (data) {
                	 var tmp = "";
                	 data.tree = JSON.parse(data.tree);
                	 for(var i = 0; i < data.tree.length; i ++) {
                		if(i>0) tmp += ",";
                		var tree = data.tree[i];
                		if(type == "business") {
							var treeIcon = '<i data-id=\'' + tree.id + '\' type=\'1\' title=\'编辑\' style=\'float: right;font-size:16px;\' class=\'ace-icon fa fa-edit treeIcon\'></i>';
                		 	tmp += '"business'+tree.id+'":{"text":"<span>' + tree.name + '</span>'+ (isAuth(rightCode.business) ? treeIcon : "") + '","name":"' + tree.name + '","type":"folder","id":"' + tree.id + '","myType":"business"}';
						} else if(type == "group") {
							var treeIcon = '<i business-id=\'' + tree.businessGroupId + '\' data-id=\'' + tree.id + '\' type=\'2\' title=\'编辑\' style=\'float: right;font-size:16px;\' class=\'ace-icon fa fa-edit treeIcon\'></i>'
                    		tmp += '"group'+tree.id+'":{"text":"<span>' + tree.name + '</span>'+(isAuth(rightCode.group) ? treeIcon : "")+'","name":"' + tree.name + '","type":"item","id":"' + tree.id + '","myType":"group","pid":"' + pid + '"}';
						}
            		}
                	 tmp = "{"+tmp+"}";
                	 tmp = JSON.parse(tmp);
                	 resultData = tmp;
                	 callback({ data: resultData });
                	 business.editDepartment();
                 }
            });
		}
	};
	
	business.addBusiness = function() {
		var html = addTemplate();
		var addBusinessGroupLayer = layer.open({
		    type: 1,
		    title:"新增业务部门",
		    skin: 'layui-layer-rim', 
		    area: '400px',
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(){
		    	var $form = $(".T-addBusiness-form");
		    	var validator=rule.check($form);

				$form.find(".T-save-business").click(function(){
		    		if (!validator.form()) { return; }
					var form = $form.serialize()+"";
					$.ajax({
						url:KingServices.build_url("group","addBusinessGroup"),
						type:"POST",
						data:form,
						success:function(data){
							var result = showDialog(data);
							if(result){
								layer.close(addBusinessGroupLayer);
								showMessageDialog(data.message);
								business.departmentList();
							}
						}
					});
				});
		    }
		});
	};

	business.addGroup = function(id) {
		$.ajax({
			url:KingServices.build_url("group","findBusinessGroupAll"),
			type:"POST",
			data:{
				businessGroupId : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = addGroupTemplate(data);
					var addGroupLayer = layer.open({
					    type: 1,
					    title:"新增子部门",
					    skin: 'layui-layer-rim',
					    area: '400px',
					    zIndex:1030,
					    content: html,
					    scrollbar: false,
					    success:function(){
					    	var $form = $(".T-addGroup-form");
							var validator=rule.check($form);

					    	$form.find(".T-save-group").click(function(){
								if (!validator.form()) { return; }
					    		var form = $form.serialize()+"";
								$.ajax({
									url:KingServices.build_url("group","addGroup"),
									type:"POST",
									data:form,
									success:function(data){
										var result = showDialog(data);
										if(result){
											layer.close(addGroupLayer);
											showMessageDialog(data.message,function(){
												business.departmentList();
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
	};

	business.editDepartment = function() {
		business.$tab.find('.treeIcon').on("click",function(event) {
			$(this).hide();
			$(this).prev().hide();
			
			var val = $(this).prev().text();
			$(this).after("<span class='T-edit'><input style='width:80%;height:24px;line-height:24px;' type='text' value='" + val + "' old='" + val + "' /><span>");
			
			business.editInputChange();
			event.stopPropagation();
		});
	};

	business.editInputChange = function() {
		var $input = business.$tab.find('.T-edit input');
		$input.off("keyup").on("keyup",function(event) {
			if(event.which == 13){
				$(this).blur();
			}
		});
		
		$input.off("blur").on("blur",function(event) {
			var $this = $(this),
				$parent = $this.parent(),
				old = $this.attr("old"),
				val = $this.val();
			if(old != val) {
				var type = $parent.prev().attr('type'),
					id = $parent.prev().data('id'),
					name = val,
					businessGroupId = $parent.prev().attr('business-id');
				var url = "";
				if(type == "1") {
					url = KingServices.build_url("group","updateBusinessGroup");
				} else if(type == "2") {
					url = KingServices.build_url("group","updateGroup");
				}
				$.ajax({
                    url: url,  
                    data: {
                    	id : id + "",
                    	name : name,
                    	businessGroupId : businessGroupId
                    },  
                    type: 'POST', 
                    success : function (data) {
                    	var result = showDialog(data);
                    	if(result) {
                    		$parent.prev().prev().text(val);
                    	}
    					$parent.prev().show();
    					$parent.prev().prev().show();
    					$parent.remove();
                    }
               });
			} else {
				$parent.prev().show();
				$parent.prev().prev().show();
				$parent.remove();
			}
		});
		var val = $input.val();
		$input.focus().val(val);
		
		$input.off("click").on("click",function(event) {
			event.stopPropagation();
		});
	};

	business.userInfoToHtml = function(groupId) {
		$.ajax({
			url:KingServices.build_url("user","findUserByGroupId"),
			type:"POST",
			data:{
				groupId : groupId + ""
			},
			success:function(data){
				data.userList = JSON.parse(data.userList);
				var $list = business.$tab.find(".T-memberList"),tr = "";
				$list.empty();
				
				//绑定部门下面的动态人员
				if(data.userList.length > 0) {
					for(var i = 0; i < data.userList.length; i ++) {
						var user = data.userList[i];
						tr += "<tr><td>" + user.realName + "</td><td>" + user.userName + "</td><td>" + user.mobileNumber +"</td>";
						var tmp = user.status==1?"已启用":"已停用";
						tr += "<td>" + tmp +"</td></tr>yy";
					}
				} else {
					tr += "<tr><td colspan='4'>该部门下无成员</td></tr>";
				}
				$list.append(tr);
			}
		});
	};

	exports.init = business.initModule;
});
