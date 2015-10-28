// var APP_ROOT = "http://localhost:8080/huochaitou/";
var APP_ROOT = "/huochaitou/";
var ASSETS_ROOT = '/';
var APP_VERSION = "1.0.0";
var globalLoadingLayer;
var globelEditorInstants = {};
var imgUrl = "http://7xlg3o.com2.z0.glb.qiniucdn.com/";//正式的图片地址
imgUrl  = "http://7xlw2q.com2.z0.glb.qiniucdn.com/"; //测试
var listwidth = parseInt($("#tabList li").eq(0).css("width"));//ul总宽度，初始化数据为“工作台”tab宽度
// window.UEDITOR_HOME_URL = APP_ROOT + 'app/components/ueditor/';
var modals = {};

function addTab(tabId,tabName,html){
	$("#tabList li").removeClass("active");
	if($("#tabList li.tab-"+tabId+"").length > 0){
		$("#tabList li.tab-"+tabId+"").addClass("active");
		setTimeout(function() {
			var maxwidth = parseInt($(".breadcrumbs-fixed").css("width"))-70;//可视区域宽度
			if(listwidth > maxwidth){//只有当ul宽度大于可视区宽度时需要处理
				var index = $("#tabList li.tab-"+tabId+"").index();
				var widthleft = 0,maxleft = 0,minleft = 0;
				//widthleft为ul在当前元素左侧的宽度，maxleft绝对值为当前元素在可视区显示时ul可向左平移的最小宽度，minleft为最大
				for(var i = 0; i <= index; i++){
					if(i < index){
						widthleft += parseInt($("#tabList li").eq(i).css("width"));
					}
					if(i == index){
						minleft = -(widthleft - 35);
						widthleft += parseInt($("#tabList li").eq(i).css("width"));
						maxleft = -(widthleft - (maxwidth + 35));
					}
				}
				marginLeft = parseInt($("#tabList").css("marginLeft"));
				//只有当marginLeft取值在minleft~maxleft时，当前tab才在可视区域内
				if(marginLeft > maxleft){
					$("#tabList").css("marginLeft",maxleft);
				}
				if(marginLeft < minleft){
					$("#tabList").css("marginLeft",minleft);
				}
			}
		}, 50);
		$("#tabList li.tab-"+tabId+"").find("span").text(tabName);

	}
	else{
		$("#tabList").append("<li class=\"tab-"+tabId+" active\"><a data-toggle=\"tab\" href=\"#tab-"+tabId+"-content\" aria-expanded=\"true\"><span>"+tabName+"</span><i class=\"ace-icon fa fa-close tab-close\"></i></a></li>");
		setTimeout(function() {
			listwidth += parseInt($("#tabList li.tab-"+tabId+"").css("width"));
			var maxwidth = parseInt($(".breadcrumbs-fixed").css("width"))-70;
			if(listwidth > maxwidth){
				var maxleft = -(listwidth - (maxwidth + 35));//ul可向左平移的最大宽度，maxleft取负值,35为左侧移动符号宽度
				$("#tabList").css("marginLeft",maxleft);
			}
			$("#tabList .tab-"+tabId+" .tab-close").click(function(){
				$that = $(this);
				var str = tabId.split("-");
				var modal = modals[str[0]];
				if(str.length > 1 && str[1] != "view" && !!modal && !!modal.isEdited && modal.isEdited(str[1])){//非列表、查看,且有修改
					if(str[1] == "add"){
						showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
							console.log("留在当前页");
						},function(){
							closeTab();
							modal.clearEdit(str[1]);
						},"放弃","留在此页");
					} else{
						console.log(str[1]);
						showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已修改的数据?",function(){
							modal.save(str[1]);
							closeTab();
						}, function(){
							closeTab();
							modal.clearEdit(str[1]);
						});
					}
				} else {
					closeTab();
				}

				function closeTab() {
					var index = $that.parent().parent().index();
					listwidth -= parseInt($("#tabList li").eq(index).css("width"));
					$that.parent().parent().remove();
					$("#tab-"+tabId+"-content").remove();
					if($("#tabList li.active").length == 0){
						var preTab = $("#tabList li").get(index-1);
						$(preTab).addClass("active");
						var preTabId = $(preTab).find("a").attr("href");
						$(""+preTabId+"").addClass("active");
					}
					var marginLeft = parseInt($("#tabList").css("marginLeft"));
					var maxwidth = parseInt($(".breadcrumbs-fixed").css("width")) - 70;
					if(listwidth > maxwidth){
						var widthleft = 0;
						for(var i = 0;i < $("#tabList").find("li.active").index();i++){
							widthleft += parseInt($("#tabList li").eq(i).css("width"))
						}
						if((listwidth + marginLeft - 35) < maxwidth){//左侧有隐藏部分并且当前可视区未填满
							marginLeft = -(listwidth - (maxwidth + 35));
							if(marginLeft < -(widthleft - 35)){//active项在左侧隐藏
								marginLeft = -(widthleft - 35);
								console.log("1");
							}
						} else if(marginLeft < -(widthleft - 35)){//active项在左侧隐藏
							marginLeft = -(widthleft - 35);
							console.log("2");
						}
					} else {
						marginLeft = 35;
					}
					$("#tabList").css("marginLeft",marginLeft);
				}
			});
		}, 50);
	}
	$("#tabContent .tab-pane-menu").removeClass("active");
	if($("#tab-"+tabId+"-content").length > 0){
		$("#tab-"+tabId+"-content").addClass("active");
	}
	else{
		$("#tabContent").append("<div id=\"tab-"+tabId+"-content\" class=\"tab-pane tab-pane-menu active\"></div>");
	}
	$("#tab-"+tabId+"-content").html(html);
}
function closeTab(tabId){
	var _this = $("#tabList .tab-"+tabId+" .tab-close");
	var index = _this.parent().parent().index();
	listwidth -= parseInt($("#tabList li").eq(index).css("width"));
	_this.parent().parent().remove();
	$("#tab-"+tabId+"-content").remove();
	if($("#tabList li.active").length == 0){
		var preTab = $("#tabList li").get(index-1);
		$(preTab).addClass("active");
		var preTabId = $(preTab).find("a").attr("href");
		$(""+preTabId+"").addClass("active");
	}
	var marginLeft = parseInt($("#tabList").css("marginLeft"));
	var maxwidth = parseInt($(".breadcrumbs-fixed").css("width")) - 70;
	if(listwidth > maxwidth){
		var widthleft = 0;
		for(var i = 0;i < $("#tabList").find("li.active").index();i++){
			widthleft += parseInt($("#tabList li").eq(i).css("width"))
		}
		if((listwidth + marginLeft - 35) < maxwidth){//左侧有隐藏部分并且当前可视区未填满
			marginLeft = -(listwidth - (maxwidth + 35));
			if(marginLeft < -(widthleft - 35)){//active项在左侧隐藏
				marginLeft = -(widthleft - 35);
				console.log("1");
			}
		} else if(marginLeft < -(widthleft - 35)){//active项在左侧隐藏
			marginLeft = -(widthleft - 35);
			console.log("2");
		}
	} else {
		marginLeft = 35;
	}
	$("#tabList").css("marginLeft",marginLeft);
}
function openLoadingLayer(){
	var globalLoadingLayer = layer.open({
		zIndex:1028,
		type:3
	});
	return globalLoadingLayer;
}

function closeGlobalLayer() {
	if (!!layer && typeof layer.close === 'function') {
		layer.close(globalLoadingLayer);
	}
}

function init_editor(ue_key,options)  {
	var ue = globelEditorInstants[ue_key];

	if (ue) {
		ue.destroy();
	}

	// 富文本编辑器的公共配置
	options = $.extend({
		// 服务器统一请求接口路径
		serverUrl: APP_ROOT + "app/components/ueditor/jsp/controller.jsp",
		//是否启用元素路径：否
		elementPathEnabled: false
	}, options);

	ue = UE.getEditor(ue_key,options);
	ue.ready(function(){
		ue.setHeight(400);
	});
	globelEditorInstants[ue_key] = ue;

	return ue;
}

function showDialog(data){
	if(data.success == 0){
		showMessageDialog($( "#confirm-dialog-message" ),data.message);
		return false;
	}
	else if(data.success == -1){
		showLogoutDialog($( "#confirm-dialog-message" ),data.message);
		return false;
	}
	else if(data.success == -2){
		showAutoLoginDialog($( "#confirm-dialog-message" ),data.message);
		return false;
	}
	return true;
}
function showMessageDialog(dialogObj,message, fn){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(fn){
						fn();
					}
				}
			}
		],
		open:function(event,ui){
			$(this).find("p").html(message);
		}
	});
}
function showConfirmMsg(dialogObj,message,confirmFn ,cancelFn,btnStr1,btnStr2){
	var buttons;
	if(!!btnStr1 && btnStr1 != "" && !!btnStr2 && btnStr2 != ""){
		buttons = [
			{
				text: btnStr1,
				"class" : "btn btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof cancelFn === "function"){
						cancelFn();
					}
				}
			},
			{
				text: btnStr2,
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof confirmFn === "function"){
						confirmFn();
					}
				}
			}
		]
	} else{
		buttons = [
			{
				text: "放弃",
				"class" : "btn btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof cancelFn === "function"){
						cancelFn();
					}
				}
			},
			{
				text: "保存",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof confirmFn === "function"){
						confirmFn();
					}
				}
			}
		]
	}
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: buttons,
		open:function(event,ui){
			$(this).find("p").text(message);
		}
	});
}
function showConfirmDialog(dialogObj,message, fn){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "取消",
				"class" : "btn btn-minier",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					if(fn){
						fn();
					}
				}
			}
		],
		open:function(event,ui){
			$(this).find("p").text(message);
		}
	});
}
function showLogoutDialog(dialogObj,message){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "重新登录",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					window.location.href = "login.html";
				}
			}
		],
		open:function(event,ui){
			$(this).find("p").text(message);
		}
	});
}
function exportXLS(url){
	var iframe = document.createElement("iframe");
	iframe.src = url;
	iframe.style.display = "none";
	document.body.appendChild(iframe);
}
function checkLogin(fn){
	$.ajax({
		url:""+APP_ROOT+"base.do?method=autoLogin&token="+$.cookie("token")+"&operation=self",
		type:"POST",
		dataType:"json",
		success:function(data){
			if(data.success == 1){
				fn();
			}
			else{
				showLogoutDialog($( "#confirm-dialog-message" ),"当前账号登陆状态已失效，请重新登录");
			}
		}
	});
}
function showAutoLoginDialog(dialogObj,message){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "自动登录",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
					$.ajax({
						url:""+APP_ROOT+"base.do?method=autoLogin&token="+$.cookie("token")+"&operation=self",
						type:"POST",
						dataType:"json",
						success:function(data){
							if(data.success == 1){
								showMessageDialog($( "#confirm-dialog-message" ),data.message);
							}
							else{
								showLogoutDialog($( "#confirm-dialog-message" ),data.message);
							}
						}
					});
				}
			}
		],
		open:function(event,ui){
			$(this).find("p").text(message);
		}
	});
}
function login(){
	var userName = $("input[name=userName]").val();
	var password = $("input[name=password]").val();
	$.ajax({
		url:""+APP_ROOT+"base.do?method=login",
		type:"POST",
		data:"userName="+userName+"&password="+password+"",
		dataType:"json",
		beforeSend:function(){
			globalLoadingLayer = layer.open({
				type:3
			});
		},
		success:function(data){
			if(data.success == 1){
				window.location.href = "index.html";
			}
			else if(data.success == 2){ // 首次登陆，先修改密码
				var userId = data.id;
				var updatePasswordLayer=layer.open({
					type: 1,
					title: "首次登录，先修改密码",
					skin: 'layui-layer-lan', //加上边框
					area: ['500px', '300px'], //宽高
					content: "<div class='login-userData-form clearfix'><div class='col-sm-12' style='margin:25px 0 5px 0'><div class='form-group'>"+
					"<div class='search-area'><div class='col-xs-12'><div class='input-group'>"+
					"<input class='col-xs-12 date-picker' name='oldPassword' placeholder='请输入旧密码' value='' type='password' />"+
					"<span class='input-group-addon'><i class='ace-icon fa fa-lock'></i></span></div></div></div></div></div>"+
					"<div class='col-sm-12' style='margin:5px 0'><div class='form-group'><div class='search-area'><div class='col-xs-12'>"+
					"<div class='input-group'><input class='col-xs-12' name='newPassword' placeholder='请输入新密码' value='' type='password' />"+
					"<span class='input-group-addon'><i class='ace-icon fa fa-lock'></i></span></div></div></div></div></div>"+
					"<div class='col-sm-12' style='margin:5px 0'><div class='form-group'><div class='search-area'><div class='col-xs-12'>"+
					"<div class='input-group'><input class='col-xs-12' name='newPassword1' placeholder='请输入新密码' value='' type='password' />"+
					"<span class='input-group-addon'><i class='ace-icon fa fa-lock'></i></span></div></div></div></div></div>"+
					"<div class='col-xs-12'><div class='input-group'><h4 class='lighter'>"+
					"<p class='red password-validate'></p></h4></div></div>"+
					"<form class='form-horizontal col-sm-12' role='form' style='margin-top:30px;' onsubmit='return false'><div class='form-group' style='text-align: center;'>"+
					" <button class='btn btn-danger btn-cancelUserInfo'>"+
					"<i class='ace-icon fa fa-times'></i> 取消 </button> <button class='btn btn-primary btn-UserSaveInfo'> <i class='ace-icon fa fa-check'></i> 修改 </button></div></form></div>",
					success:function(){
						var $loginObj=$(".login-userData-form");
						$loginObj.find('[name="oldPassword"]').focus();
						//修改用户密码
						$loginObj.find(".btn-UserSaveInfo").click(function(){
							var newPassword=$loginObj.find("input[name='newPassword']").val();
							var newPassword1=$loginObj.find("input[name='newPassword1']").val();
							var oldPassword=$loginObj.find("input[name='oldPassword']").val();
							if(newPassword!=newPassword1){
								//两次密码是否一致性的验证
								$loginObj.find(".password-validate").text("两次输入的密码不一致！");
								return false;
							}
							else{
								$.ajax({
									url:""+APP_ROOT+"base.do?method=rePassword&menuKey=system_userinfo&operation=self",
									data:"oldPassword="+oldPassword+"&newPassword="+newPassword+"&userId="+userId,
									type:"POST",
									datatype:"json",
									beforSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											layer.close(updatePasswordLayer);
											showMessageDialog($( "#dialog-message" ),"修改成功，请用新密码登陆");
											window.location.href = "login.html";
										}else{
											$loginObj.find("input[name='newPassword']").val("");
											$loginObj.find("input[name='newPassword1']").val("");
											$loginObj.find("input[name='oldPassword']").val("");
											$loginObj.find(".password-validate").text(data.message);
											return false;
										}
									}
								});
							}
						});
						//取消
						$loginObj.find(".btn-cancelUserInfo").click(function(){
							layer.close(updatePasswordLayer);
							layer.close(globalLoadingLayer);
						})
						layer.close(globalLoadingLayer);
					}
				});
			}
			else{
				layer.close(globalLoadingLayer);
				showMessageDialog($( "#dialog-message" ),data.message);
				window.forbiddenError = true;
			}
		}
	});
}

function logout(){
	var dialog = $( "#confirm-dialog-message" ).removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "取消",
				"class" : "btn btn-minier",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier",
				click: function() {
					$( this ).dialog( "close" );
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
				}
			}
		],
		open:function(event,ui){
			$(this).find("p").text("你确认要退出系统？");
		}
	});

}

function viewAllMsg(){
	seajs.use("" + ASSETS_ROOT +"js/template/system/message/message.js",function(message){
		message.listMsg(0,0);
	});
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 定义模块绑定关系
 */
var modalScripts = {
	'resource_guide': "js/template/resource/guide/guide.js",
	'resource_restaurant': "js/template/resource/restaurant/restaurant.js",
	'resource_hotel': "js/template/resource/hotel/hotel.js",
	'resource_insurance': "js/template/resource/insurance/insurance.js",
};

function listMenu(menuTemplate){
	$.ajax({
		url:""+APP_ROOT+"back/user.do?method=listMenu&token="+$.cookie("token")+"&operation=self",
		type:"POST",
		dataType:"json",
		success:function(data){
			var result = showDialog(data);
			if(result){
				var menuList = data.menuList;
				menuList = JSON.parse(menuList);
				data.menuList = menuList;
				var html = template("menu-template",data);
				$("#sidebar .nav-list").html(html);

				// //绑定导游菜单功能//
				// $("#sidebar .nav-list .resource_guide").click(function(){
				// 	$("#sidebar .nav-list li").removeClass("active");
				// 	$(this).addClass("active");
				// 	$(this).parent().parent().addClass("active");
				// 	seajs.use("" + ASSETS_ROOT +"js/template/resource/guide/guide.js",function(guide){
				// 		guide.listGuide(0,"",1);
				// 	});
				// });

				//绑定车队菜单功能
				$("#sidebar .nav-list .resource_busCompany").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/busCompany/busCompany.js",function(busCompany){
						busCompany.listBusCompany(0,"",1);
					});
				});

				// //绑定餐厅菜单功能
				// $("#sidebar .nav-list .resource_restaurant").click(function(){
				// 	$("#sidebar .nav-list li").removeClass("active");
				// 	$(this).addClass("active");
				// 	$(this).parent().parent().addClass("active");
				// 	seajs.use("" + ASSETS_ROOT +"js/template/resource/restaurant/restaurant.js",function(restaurant){
				// 		restaurant.listRestaurant(0,"",1);
				// 	});
				// });
				//绑定酒店菜单功能
				/*$("#sidebar .nav-list .resource_hotel").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/hotel/hotel.js",function(hotel){
						hotel.init();
					});
				});*/

				//绑定同行菜单功能
				$("#sidebar .nav-list .resource_partnerAgency").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/partnerAgency/partnerAgency.js?version=",function(partnerAgency){
						partnerAgency.listPartnerAgency(0,"",1);
					});
				});

				//绑定线路产品菜单功能
				$("#sidebar .nav-list .resource_lineProduct").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/lineProduct/lineProduct.js",function(lineProduct){
						lineProduct.listLineProduct(0,"",1);
						modals["resource_lineProduct"] = lineProduct;
					});
					$("#main-container")[0].index = 0;
				});

				//绑定商家管理功能
				$("#sidebar .nav-list .resource_shop").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/shop/shop.js",function(shop){
						shop.listShop(0,"",1);
					});
				});


				//绑定线路模板菜单功能
				$("#sidebar .nav-list .resource_travelLine").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/travelLine/travelLine.js",function(travelLine){
						travelLine.listTravelLine(0,"",1);
						modals["resource_travelLine"] = travelLine;
					});
				});

				//绑定景区菜单功能
				$("#sidebar .nav-list .resource_scenic").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/scenic/scenic.js",function(scenic){
						scenic.listScenic(0,"",1);
					});
				});
				//绑定保险菜单功能
				/*$("#sidebar .nav-list .resource_insurance").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/insurance/insurance.js",function(insurance){
						insurance.listInsurance(0,"",1);
					});
				});*/
				//绑定自费项目菜单功能
				$("#sidebar .nav-list .resource_selfpay").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/selfpay/selfpay.js",function(selfpay){
						selfpay.listSelfPay(0,"",1);
					});
				});
				//绑定交通票务菜单功能
				$("#sidebar .nav-list .resource_ticket").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/ticket/ticket.js",function(ticket){
						ticket.listTicket(0,"",1);
					});
				});
				//绑定游客管理菜单功能
				/*$("#sidebar .nav-list .resource_touristGroup").click(function(){
				 $("#sidebar .nav-list li").removeClass("active");
				 $(this).addClass("active");
				 $(this).parent().parent().addClass("active");
				 seajs.use("" + ASSETS_ROOT +"js/template/resource/touristGroup/touristGroup.js",function(touristGroup){
				 touristGroup.listTouristGroup(0,"","","","","","","","");
				 modals["resource_touristGroup"] = touristGroup;
				 });
				 });*/


				$("#sidebar .nav-list .resource_touristGroup").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/touristGroup/touristGroup.js",function(touristGroup){
						touristGroup.getTouristStatisticData(0,"","","","","","","","");
						modals["resource_touristGroup"] = touristGroup;
					});
				});


				//绑定发团安排菜单功能
				$("#sidebar .nav-list .arrange_all").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/tripPlan/tripPlan.js",function(tripPlan){
						tripPlan.listTripPlan(0,"","","","","");
						modals["arrange_all"] = tripPlan;
					});
				});

				//绑定财务管理菜单功能 
				$("#sidebar .nav-list .financial_guide").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/guide/guide.js",function(guide){
						guide.listFinancialGuide(0,"","","");
						modals["financial_guide"] = guide;
					});
				});

				//绑定分团转客菜单功能
				$("#sidebar .nav-list .arrange_tourist").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/arrangeTourist/arrangeTourist.js",function(arrangeTourist){
						arrangeTourist.listArrangeTouristMain();
						modals["arrange_tourist"] = arrangeTourist;
					});
				});

				//绑定中转安排菜单功能
				$("#sidebar .nav-list .arrange_transit").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/transit/transit.js",function(transit){
						transit.listTransit(0,"","","","","","","","","");
						modals["arrange_transit"] = transit;
					});
				});

				//绑定交通票务菜单功能
				$("#sidebar .nav-list .financial_ticket").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/ticket/ticket.js",function(ticket){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""
						ticket.listTicket(0,"",year,"");
						modals["financial_ticket"] = ticket;
					});
				});

				//绑定系统人员管理菜单功能
				$("#sidebar .nav-list .system_user").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/system/user/user.js",function(user){
						user.listUser(0,"",1);
					});
				});

				//绑定系统部门管理菜单功能
				$("#sidebar .nav-list .system_department").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/system/department/business.js",function(business){
						business.listBusiness(0, "");
					});
				});

				//绑定系统旅行社
				$("#sidebar .nav-list .system_travelAgency").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/system/travelAgency/travelAgency.js",function(TravelAgency){
						TravelAgency.listTravelAgency();
					});
				});

				//绑定车队帐务菜单功能
				$("#sidebar .nav-list .financial_busCompany").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/busCompany/busCompany.js",function(busCompany){
						var date = new Date();
						var year = date.getFullYear();
						busCompany.listBusCompany(0,"",year,"");
						modals["financial_busCompany"] = busCompany;
					});
				});

				//绑定酒店账务菜单功能
				$("#sidebar .nav-list .financial_rummery").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/hotel/hotel.js",function(hotel){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""
						hotel.listHotel(0,"",year,month);
						modals["financial_rummery"]  = hotel;
					});
				});
				//绑定系统信息菜单功能
				$("#sidebar .nav-list .system_information").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/system/information/information.js",function(information){
						information.listInformation();
					});
				});
				//绑定系餐厅账务菜单功能
				$("#sidebar .nav-list .financial_restaurant").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/Restaurant/Restaurant.js",function( Restaurant){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""//date.getMonth()+1
						Restaurant.listRestaurant(0,"",year,month);/*new Date().getFullYear()*/
						modals["financial_restaurant"] = Restaurant;
					});
				});

				//绑定景区账务
				$("#sidebar .nav-list .financial_scenic").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/Scenic/Scenic.js",function( Scenic){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""//date.getMonth()+1
						Scenic.listScenic(0,"",year,month);
						modals["financial_scenic"] = Scenic;
					});
				});

				//绑定自费账务菜单功能
				$("#sidebar .nav-list .financial_self").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/Self/Self.js",function( Self){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""
						Self.listSelf(0,"",year,month);
						modals["financial_Self"] = Self;
					});
				});

				//绑定保险账务菜单功能
				$("#sidebar .nav-list .financial_insure").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/insure/insure.js",function(Insure){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""//date.getMonth()+1
						Insure.listInsure(0,"",year,"");
						modals["financial_insure"] = Insure;
					});
				});

				//绑定客户账务菜单功能
				$("#sidebar .nav-list .financial_Client").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/Client/Client.js",function(Client){
						Client.listClient(0,"","","","","","");
						modals["financial_Client"] = Client;
					});
				});

				//绑定系代订账务菜单功能
				$("#sidebar .nav-list .financial_replace").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/replace/replace.js",function(Replace){
						var date = new Date();
						var year = date.getFullYear();
						var month = "";
						Replace.listReplace(0,"","",year,month);
						modals["financial_replace"] = Replace;
					});
				});

				//绑定转客菜单功能
				$("#sidebar .nav-list .financial_transfer").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/transfer/transfer.js",function(transfer){
						var date = new Date();
						var year = date.getFullYear();
						transfer.listTransfer(0,"","",year,"");
						modals["financial_transfer"] = transfer;
					});
				});
				//绑定内转转出账务
				$("#sidebar .nav-list .financial_innerTransfer_in").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/innerTransferIn/innerTransferIn.js",function(innerTransferIn){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""//date.getMonth()+1
						innerTransferIn.listInnerTransferIn(0,"",year,month);
						modals["financial_innerTransfer_in"] = innerTransferIn;
					});
				});
				//绑定内转转出账务
				$("#sidebar .nav-list .financial_innerTransfer_out").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/innerTransferOut/innerTransferOut.js",function(innerTransferOut){
						var date = new Date();
						var year = date.getFullYear();
						var month = ""//date.getMonth()+1
						innerTransferOut.listInnerTransferOut(0,"",year,month);
						modals["financial_innerTransfer_out"] = innerTransferOut;
					});
				});
				//绑定内转利润账务
				$("#sidebar .nav-list .financial_innerTransfer_profit").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/innerTransferProfit/innerTransferProfit.js",function(innerTransferProfit){
						/*var date = new Date();
						 var year = date.getFullYear();
						 var month = ""//date.getMonth()+1
						 */						innerTransferProfit.listInnerTransferProfit(0,"","","","","","","","");
					});
				});
				//绑定购物菜单功能
				$("#sidebar .nav-list .financial_shop").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/shop/shop.js",function(shop){
						shop.listFinancialShop(0,"","","");
						modals["financial_shop"] = shop;
					});
				});

				//绑定其他支出菜单功能
				$("#sidebar .nav-list .financial_else").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/else/else.js",function(Else){
						Else.listElse();
					});
				});

				//绑定其他支出菜单功能
				$("#sidebar .nav-list .financial_vertical").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/Vertical/Vertical.js",function(Vertical){
						Vertical.listVertical();
					});
				});

				//绑定分团计划菜单功能
				/*$("#sidebar .nav-list .arrange_plan").click(function(){
				 $("#sidebar .nav-list li").removeClass("active");
				 $(this).addClass("active");
				 $(this).parent().parent().addClass("active");
				 seajs.use("" + ASSETS_ROOT +"js/template/arrange/plan/plan.js",function(plan){
				 //plan.listPlan();
				 });
				 });*/

				//绑定发团计划菜单功能
				$("#sidebar .nav-list .arrange_plan").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/tripPlan/tripPlan.js",function(tripPlan){
						tripPlan.listTripPlan(0,"","","","","","");
						modals["arrange_plan"] = tripPlan;
					});
				});

				//绑定项目代订菜单功能
				$("#sidebar .nav-list .arrange_booking").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/booking/booking.js",function(booking){
						booking.listbooking(0,"","","","","");
						modals["arrange_booking"] = booking;
					});
				});

				//绑定转客管理菜单功能
				$("#sidebar .nav-list .arrange_transfer").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/arrangeTransfer/arrangeTransfer.js",function(transfer){
						transfer.getlistTransferSumData(0,"","","","","","",2);
						modals["arrange_transfer"] = transfer;
					});
				});


				//绑定内转管理菜单功能
				$("#sidebar .nav-list .arrange_inner_Transfer").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					/*seajs.use("" + ASSETS_ROOT +"js/template/arrange/innerTransfer/innerTransfer.js",function(inner){ 
						var searchParam = {
								pageNo : "0",
								type : "1",
								first : "1",
							}
						inner.list(searchParam);
						modals["arrange_inner_Transfer"] = inner;
					});*/
					seajs.use("" + ASSETS_ROOT +"js/template/arrange/innerTransfer/innerTransfer.js",function(innerTransfer){ 
						innerTransfer.innerTransfer();
						modals["arrange_inner_Transfer"] = innerTransfer;
					});
				});


				//绑定按团统计菜单功能
				$("#sidebar .nav-list .financial_count").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/count/count.js",function(count){
						count.init()
						modals["financial_count"] = count;
						// count.getlistCount(0,"","","","","","","","");
					});
				});

				//绑定转客利润菜单功能
				$("#sidebar .nav-list .financial_turnProfit").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/turnProfit/turnProfit.js",function(TurnProfit){
						/*var tu = new Date()
						 var vYear = tu.getFullYear()
						 var vMon = tu.getMonth() + 1
						 var vDay = tu.getDate()
						 var startTime = vYear+"-"+vMon+"-"+vDay;
						 var tmp = new Date(startTime);
						 tmp = tmp-7*24*60*60*1000;
						 tmp = new Date(tmp);
						 var endTime = tmp.getFullYear()+"-"+(tmp.getMonth()+1)+"-"+tmp.getDate();*/
						TurnProfit.listTurnProfit(0,"","","","","","","","");
					});
				});


				//绑定代订利润功能
				$("#sidebar .nav-list .financial_replaceProfit").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/replaceProfit/replaceProfit.js",function(replaceProfit){
						replaceProfit.listReplaceProfit(0,"","","","","","","","","","");
					});
				});
				//绑定总利润菜单功能
				$("#sidebar .nav-list .financial_totalProfit").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/totalProfit/totalProfit.js",function(totalProfit){
						totalProfit.listTotalProfit();
					});
				});
				//绑定収支明细菜单功能
				$("#sidebar .nav-list .financial_collectDetail").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/collectDetail/collectDetail.js",function(collectDetail){
						collectDetail.listCollectDetail();
					});
				});
				//绑定中转安排菜单功能
				$("#sidebar .nav-list .resource_subsection").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/resource/subsection/subsection.js",function(subsection){
						subsection.listMainSubsection();
					});
				});

				//dateTime
				$(document).on("click",".input-group-addon",function(){
					var $that = $(this);

					if ($that.children('.fa-calendar').length || $that.children('.fa-clock-o').length)  {
						var $allInputs = $that.prevAll('input[type="text"]');
						$allInputs.eq($allInputs.length-1).focus();
					}
				})
					// 处理中英文长度控制问题
					.on('input', 'input[type="text"],textarea', function(event) {
						event.preventDefault();

						// 未设置maxlength，退出
						if (this.attributes.maxlength === undefined)  {
							return;
						}

						var $that = $(this),
							max = $that.attr('maxlength'),
							val = $that.val();

						if (chEnWordCount(val) > max)  {
							val = cutStr(val, max);
							$that.val(val);
						} 

						function chEnWordCount(str){
							var count = 0;

							if (!!str)  {
								count = str.replace(/[^\x00-\xff]/g,"**").length;
							}
							return count;
						}

						function cutStr(src, length) {
							var res = '';

							if (!!src || isNaN(length))  {
								for (var len = src.length, i = (len -1), tmp; i < len; i --) {
									tmp = src.substr(0, i+1);
									if (chEnWordCount(tmp) <= length)  {
										res = tmp;
										break;
									}
								}
							}

							return res;
						}
					});
			}
		}
	});
}

//override dialog's title function to allow for HTML titles//
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
	_title: function(title) {
		var $title = this.options.title || '&nbsp;';
		if( ("title_html" in this.options) && this.options.title_html == true )
			title.html($title);
		else title.text($title);
	}
}));

/**
 * 根据请求结果获取状态信息
 * @param  {[type]} XMLHttpRequest [description]
 * @return {[type]}                [description]
 */
function getAjaxErrorInfo (XMLHttpRequest)  {
	var status = XMLHttpRequest.status;

	try {
		var fixedResponse = XMLHttpRequest.responseText.replace(/\\'/g, "'");
		var jsonObj = JSON.parse(fixedResponse);
		return jsonObj.description;
	} catch (e) {
		if (status > 200) {
			switch (status) {
				case 401:
					return _statusText._401;
				case 403:
					return _statusText._403;
				case 404:
					return _statusText._404;
				case 413:
					return _statusText._413;
				case 500:
					return _statusText._500;
				case 501:
					return _statusText._501;
				case 502:
					return _statusText._502;
				case 503:
					return _statusText._503;
				case 504:
					return _statusText._504;
				case 505:
					return _statusText._505;
				default:
					break;
			}
		}
	}

	return _statusText._unused + ':' + status;
}

var _statusText = {
	_401: '无权访问:未登录或者会话已过期',
	_403: '服务器拒绝访问',
	_404: '没有找到所请求的服务',
	_413: '请求内容过大',
	_500: '服务器内部错误',
	_501: '服务器未实现该服务',
	_502: '线路不通，无法到达',
	_503: '所请求的服务不可用',
	_504: '网关超时',
	_505: '服务器不支持请求所使用的HTTP版本',
	_unused: '未转化异常'
};

//重新封装jquery的ajax方法
(function ($) {
	//备份jquery的ajax方法

	var _ajax = $.ajax;
	//重写jquery的ajax方法

	$.ajax = function (opt) {
		//GET方法要做编码,暂不编码,等服务器弄好拦截器再进行编码

		// if ((opt.type == "GET" || opt.type == "get") && opt.data && typeof opt.data === 'object') {
		//     $.each(opt.data, function (key, value) {
		//         //opt.data[key] = encodeURIComponent(value);

		//     });
		// }
		//json提交要修改contentType和格式化json

		if (opt.submitType == "json") {
			opt.data = JSON.stringify(opt.data);
			opt.contentType = "application/json";
		}
		//备份opt中error和success方法

		var fn =
		{
			error: function (XMLHttpRequest, textStatus, errorThrown) {
			},
			success: function (data, textStatus) {
			}
		};

		if (opt.error) {
			fn.error = opt.error;
		}
		if (opt.success) {
			fn.success = opt.success;
		}

		//扩展增强处理
		opt = $.extend({}, {
			timeout: 60000,
			cache: false,
			showLoading: true,
			removeLoading: true,
			showError: true,
			dataType: 'json'
		}, opt);
		$.extend(opt, opt,
			{
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//判断是否是当前页面的ajax请求错误

					if (!!XMLHttpRequest && XMLHttpRequest.readyState == 4) {
						if (opt.showError != false) {
							var status;
							try {
								status = $.parseJSON(XMLHttpRequest.responseText).errorCode;
							} catch (e) {
								// console.warn(e)
								status = XMLHttpRequest.status;
							}

							showMessageDialog($( "#confirm-dialog-message" ),getAjaxErrorInfo(XMLHttpRequest), closeGlobalLayer);

						}
						fn.error(XMLHttpRequest, textStatus, errorThrown);
					}
					else {
						console.info(opt.url + "请求异常:readyState = " + XMLHttpRequest.readyState);
						showMessageDialog($( "#confirm-dialog-message" ), '服务器开小差了，请您稍后再试', closeGlobalLayer);
					}
				},
				beforeSend:function(){
					if (opt.showLoading)  {
						globalLoadingLayer = openLoadingLayer();
					}
				},
				success: function (data, textStatus) {
					//若要移除loading,则移除

					fn.success(data, textStatus);
				},
				complete: function()  {
					if (opt.removeLoading) {
						layer.close(globalLoadingLayer);
					}
				}
			});
		return _ajax(opt);
	};

	/****
		Tools
	*****/
	// 对Date的扩展，将 Date 转化为指定格式的String
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
	// 例子： 
	// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
	// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
	Date.prototype.Format = function (fmt) { //author: meizz 
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}

	/**
	 * 重写laypage
	 * @param  {[object]} options [自定义选项]
	 * @return {[type]}         [description]
	 */
	var _laypage = laypage;
	laypage = function(options)  {
		// 合并配置
		options = $.extend({}, 
			{
			    skip: true, //是否开启跳页
			    skin: '#51b0c2',
			    groups: 3, //连续显示分页数
			}, options);

		_laypage(options);
	};

	$('body').append('<div id="desc-tooltip-containter"></div>');
	$('#desc-tooltip-containter').hover(function() {
		$(this).data('focus-in', true);
	}, function() {
		$(this).data('focus-in', false).html('');
	});
})(jQuery);

var Tools = {
	$descContainer: $('#desc-tooltip-containter')
};

/**
 * 自定义简介的提示
 * @param  {object} $elements 需要绑定提示的DOM
 * @return {[type]}           [description]
 */
Tools.descToolTip = function($elements) {
	if (!!$elements)  {
		$elements.each(function() {
			var $that = $(this), content = $that.prop('title');

			// 内容过长，才提示
			$that.prop('title', '');
			if ($that.width() < $that.children().width())  {
				// 绑定提示
				$that.popover({
					trigger: 'click',
					container: '#desc-tooltip-containter',
					content: content
				})
				// 处理显示与隐藏提示
				.hover(function() {
					// 进入时，触发提示
					$(this).popover('show');
				}, function() {
					// 设置超时，通过判断来确定提示
					setTimeout(function() {
						if (Tools.$descContainer.data('focus-in') != true)  {
							$that.popover('hide');
						}
					}, 100);
				});
			}
		});
	}
}

/**
 * 编辑中转安排——
 * @param  {string} id 游客小组的ID
 * @return {[type]}    [description]
 */
Tools.updateTransit = function(id)  {
	seajs.use("" + ASSETS_ROOT +"js/template/arrange/transit/transit.js",function(module){
		module.updateTransit(id);
		modals["arrange_transit"] = transit;
	});
}

/**
 * 用于定义公共请求或者与数据相关的公共组件处理
 * @type {Object}
 */
var KingServices = {};

/**
 * 设置省下拉框
 * @param  {[type]} obj [description]
 * @param  {[type]} pid [description]
 * @return {[type]}     [description]
 */


//省市区 start
KingServices.provinceCity = function($container,provinceIdU,cityIdU,districtIdU){
	//初始化地区数据
	KingServices.getProvinceList($container.find("select[name=provinceId]"),provinceIdU);
	KingServices.getCityList($container.find("select[name=cityId]"),provinceIdU,cityIdU);
	KingServices.getDistrictList($container.find("select[name=districtId]"),cityIdU,districtIdU);
	//给省份select绑定事件
	$container.find("select[name=provinceId]").change(function(){
		var provinceId = $(this).val();
		if(provinceId!=''){
    		KingServices.getCityList($container.find("select[name=cityId]"),provinceId);
		}else{
			$container.find("select[name=cityId]").html("<option value=''>未选择</option>");
		}
		$container.find("select[name=districtId]").html("<option value=''>未选择</option>");
	});
	//给城市select绑定事件
	$container.find("select[name=cityId]").change(function(){
		var cityId = $(this).val();
   		if(cityId!=''){
    		KingServices.getDistrictList($container.find("select[name=districtId]"),cityId);
		}else{
			$container.find("select[name=districtId]").html("<option value=''>未选择</option>");
		}
	});
};
KingServices.getProvinceList = function(obj,provinceId){
	$.ajax({
		url:""+APP_ROOT+"/base.do?method=getProvince",
		type:"POST",
		dataType:"json",
		showLoading: false,
		success:function(data){
			var html = "<option value=''>未选择</option>";
			var provinceList = data.provinceList;
			if(provinceList != null && provinceList.length > 0){
				for(var i=0;i<provinceList.length;i++){
					if (provinceId != null && provinceList[i].id == provinceId) {
						html += "<option selected=\"selected\" value='"+provinceList[i].id+"'>"+provinceList[i].name+"</option>";
					} else {
						html += "<option value='"+provinceList[i].id+"'>"+provinceList[i].name+"</option>";
					}
				}
			}
			$(obj).html(html);
		}
	});
};
KingServices.getCityList = function(obj,provinceId,cityId){
	if(provinceId != ""){
		$.ajax({
			url:""+APP_ROOT+"/base.do?method=getCity",
			type:"POST",
			data:"provinceId="+provinceId+"",
			dataType:"json",
			showLoading: false,
			success:function(data){
				var html = "<option value=''>未选择</option>";
				var cityList = JSON.parse(data.cityList);
				if(cityList != null && cityList.length > 0){
					for(var i=0;i<cityList.length;i++){
						if (cityId != null && cityId == cityList[i].id) {
							html += "<option selected=\"selected\" value='"+cityList[i].id+"'>"+cityList[i].name+"</option>";
						} else {
							html += "<option value='"+cityList[i].id+"'>"+cityList[i].name+"</option>";
						}
					}
				}
				$(obj).html(html);
			}
		});
	}
};
KingServices.getDistrictList = function(obj,cityId,districtId){
	if(cityId != ""){
		$.ajax({
			url:""+APP_ROOT+"/base.do?method=getDistrict",
			type:"POST",
			data:"cityId="+cityId+"",
			dataType:"json",
			showLoading: false,
			success:function(data){
				var html = "<option value=''>未选择</option>";
				var districtList = JSON.parse(data.districtList);
				if(districtList != null && districtList.length > 0){
					for(var i=0;i<districtList.length;i++){
						if (districtId != null && districtId == districtList[i].id) {
							html += "<option selected=\"selected\" value='"+districtList[i].id+"'>"+districtList[i].name+"</option>";
						} else {
							html += "<option value='"+districtList[i].id+"'>"+districtList[i].name+"</option>";
						}

					}
				}
				$(obj).html(html);
			}
		});
	}
};
//省市区 end