// var APP_ROOT = "http://localhost:8080/huochaitou/";
var APP_ROOT = "/huochaitou/";
var ASSETS_ROOT = '/';
var APP_VERSION = "1.0.0";
var globalLoadingLayer;
var globelEditorInstants = {};
var listwidth = parseInt($("#tabList li").eq(0).css("width"));//ul总宽度，初始化数据为“工作台”tab宽度
// window.UEDITOR_HOME_URL = APP_ROOT + 'app/components/ueditor/';
var modals = {};
var $tabList = $('#tabList'), $tabContent = $("#tabContent"),
	tabHistory = [];
var SWITCH_TAB_SAVE = 'switch.tab.save',
	CLOSE_TAB_SAVE = 'close.tab.save',
	SWITCH_TAB_BIND_EVENT = 'switch.tab.bind_event',
	REFRESH_TAB_EVENT = 'refresh.tab.event',
	CLOSE_TAB_SAVE_NO = "close.tab.save.no";

var KingSettings = {
	// 询价服务的开关
	pusher: false,
};
/**
 * 图片地址
 */
var imgUrl = function () {
	var host = window.location.host, url = '';
	if(host.indexOf("192.168.0.") > -1
		|| host.indexOf("localhost") > -1){
		url = "http://7xlw2q.com2.z0.glb.qiniucdn.com/"; //测试或开发的图片地址
	}else{
		url = "http://7xlg3o.com2.z0.glb.qiniucdn.com/";//正式的图片地址
	}
	return url;
}();
function addTab(tabId,tabName,html){
	var $current_li = $tabList.find('.active'),
		$next_li = $tabList.find('.tab-'+tabId);

	$tabList.children("li").removeClass("active");
	if ($next_li.length) {
		$next_li.data('prev-tab',$current_li).children('a').trigger('click').children('span').text(tabName);
		setTimeout(function() {
			Tools.justifyTab();
		}, 50);
	}
	else{
		$("#tabList").append("<li class=\"tab-"+tabId+" active\"><a data-toggle=\"tab\" href=\"#tab-"+tabId+"-content\" aria-expanded=\"true\"><span>"+tabName+"</span><i class=\"ace-icon fa fa-close tab-close\"></i></a></li>");
		setTimeout(function() {
			$("#tabList .tab-"+tabId+" .tab-close").click(function(){
				$that = $(this);
				var str = tabId.split("-");
				var modal = modals[str[0]];
				if(str.length > 1 && str[1] != "view" && !!modal && !!modal.isEdited && modal.isEdited(str[1])){//非列表、查看,且有修改
					if(str[1] == "add"){
						showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
							console.log("留在当前页");
						},function(){
							closeTab(tabId);
							modal.clearEdit(str[1]);
						},"放弃","留在此页");
					} else{
						console.log(str[1]);
						showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已修改的数据?",function(){
							modal.save(str[1]);
							closeTab(tabId);
						}, function(){
							closeTab(tabId);
							modal.clearEdit(str[1]);
						});
					}
				} else {
					closeTab(tabId);
				}
			});
			
			$tabList.find('.active').data('prev-tab', $current_li);
			Tools.justifyTab();
		}, 50);
	
	}
	$("#tabContent .tab-pane-menu").removeClass("active");
	if($("#tab-"+tabId+"-content").length > 0){
		$("#tab-"+tabId+"-content").addClass("active");
	}
	else{
		$("#tabContent").append("<div id=\"tab-"+tabId+"-content\" class=\"tab-pane tab-pane-menu active\"></div>");
	}
	html = Tools.filterCount(html);
	html = Tools.filterMoney(html);
	html = Tools.filterUnPoint(html);
	html = filterUnAuth(html);
	$("#tab-"+tabId+"-content").html(html);
}
function closeTab(tabId){
	var $li = $tabList.find('.tab-' + tabId),
		index = $li.index(),
		$prev = false;

	// 查找下一个li
	if ($li.hasClass('active')) {
		$prev = $li.data('prev-tab');

		if (!$prev || !$prev.parent().length) {		// 没有前一个, 或者前一个被删除：通过父元素是否存在来判断
			if ($tabList.children('li').length > 1) {
				if (!!index) {
					index = index - 1;
				} 
				
				$prev = $tabList.children('li').eq(index);
			}
		}
	} 

	// 关闭当前tab
	$li.remove();
	$("#tab-"+tabId+"-content").remove();

	// 激活新的页面
	if ($prev) {  
		$prev.children('a').trigger('click');
	}

	Tools.justifyTab();
}

//判断是否有权限
function isAuth(codes){
	var res = false;
	if (!IndexData.userInfo || !IndexData.userInfo.listUserFunctionShip){
		return res;
	}
	var functionList = IndexData.userInfo.listUserFunctionShip;
	codes = (codes+'').split('|');	//考虑权限合并的情况

	if(Object.prototype.toString.call(codes) === '[object Array]'){
		codes.forEach(function(code) {
			if (functionList.indexOf(code) >= 0) {
				res = true;
			}
		});
	}
	return res;
}
//权限过滤
function filterUnAuth(obj) {
	if(!obj){
		return;
	}
	var $obj = $(obj);
	$obj.find(".R-right").each(function(){
		if(!isAuth($(this).data("right"))){
			$(this).remove();
		}
	});
	return $obj;
}

//财务对账行处理
function checkDisabled(checkList,checkTr,rightCode){
	var auth = isAuth(rightCode);
    for(var i = 0;i < checkList.length; i++){
        if(checkList[i].isConfirmAccount == 1){
            checkTr.eq(i).find('input[type=text]').prop("disabled",true);
            checkTr.eq(i).find('textarea').prop("disabled",true);
            if(!auth){
            	checkTr.eq(i).find('input[type=checkbox]').prop("disabled",true);
            }
        }
    }
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

function init_editor(ue_key,options, height)  {
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
		ue.setHeight(height || 400);
		$(window).trigger('resize');
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
function showMessageDialog(dialogObj,message,fn,isNotClose){
	var showDiolog=dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier btn-heightMall T-ok",
				click: function() {
					ok_callback();
				}
			}
		],
		open:function(event,ui){
			$( this ).find("p").html(message);
		}
	}), timer, running = false;

	if (!isNotClose) {
		timer = setTimeout(ok_callback, 1500)
	}

	function ok_callback() {
		if (running) {
			return;
		}
		running = true;
		showDiolog.dialog('close');
		if (fn) {
			fn();	
		}
	}
}
function showConfirmMsg(dialogObj,message,confirmFn ,cancelFn,btnStr1,btnStr2){
	var buttons;
	if(!!btnStr1 && btnStr1 != "" && !!btnStr2 && btnStr2 != ""){
		buttons = [
			{
				text: btnStr1,
				"class" : "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof cancelFn === "function"){
						cancelFn();
					}
				}
			},
			{
				text: btnStr2,
				"class" : "btn btn-primary btn-minier btn-heightMall",
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
				"class" : "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof cancelFn === "function"){
						cancelFn();
					}
				}
			},
			{
				text: "保存",
				"class" : "btn btn-primary btn-minier btn-heightMall",
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

function showSaveConfirmDialog($dialog, message, yes_fn, no_fn, cacel_fn)  {
	var buttons = [
			{
				text: '是',
				class: "btn btn-primary btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof yes_fn === "function"){
						yes_fn();
					}
				}
			}, 
			{
				text: '否',
				class: "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof no_fn === "function"){
						no_fn();
					}
				}
			},
			{
				text: '取消',
				class: "btn btn-default btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(typeof cacel_fn === "function"){
						cacel_fn();
					}
				}
			}
		]

	$dialog.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i>数据保存</h4></div>",
		title_html: true,
		draggable:false,
		buttons: buttons,
		open:function(event,ui){
			$(this).find("p").text(message);
		}
	});
}
function showConfirmDialog(dialogObj,message, fn, closeFn){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "取消",
				"class" : "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					if(closeFn){
						closeFn();
					}
				}
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier btn-heightMall",
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
// 撤销 undo 
function showNndoConfirmDialog(dialogObj,message, fn){
	dialogObj.removeClass('hide').dialog({
		modal: true,
		title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
		title_html: true,
		draggable:false,
		buttons: [
			{
				text: "否",
				"class" : "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "是",
				"class" : "btn btn-primary btn-minier btn-heightMall",
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
				"class" : "btn btn-primary btn-minier btn-heightMall",
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
		success:function(data){
			console.info(fn)
			if(data.success == 1 && typeof fn === 'function'){
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
				"class" : "btn btn-primary btn-minier btn-heightMall",
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
		url: APP_ROOT+"base.do?method=login",
		type:"POST",
		data:"userName="+userName+"&password="+password+"",
		success:function(data){
			if(data.success == 1){
				window.location.href = "index.html";
			}else if(data.success == 2){ // 首次登陆，先修改密码
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
				"class" : "btn btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-minier btn-heightMall",
				click: function() {
					$( this ).dialog( "close" );
					$.ajax({
						url:""+APP_ROOT+"base.do?method=logOut&token="+$.cookie("token"),
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
	seajs.use("" + ASSETS_ROOT +modalScripts['public_message'],function(message){
		message.init();
	});
}

function trim(str){
	if (!!str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	} else {
		return str;
	}
}

/**
 * 定义模块绑定关系
 */

var modalScripts = {
    'resource_guide': "js/template/resource/guide/guide.js",
    'resource_ticket': "js/template/resource/ticket/ticket.js",
    'resource_restaurant': "js/template/resource/restaurant/restaurant.js",
    'resource_hotel': "js/template/resource/hotel/hotel.js",
    'resource_shop': 'js/template/resource/shop/shop.js',
    'resource_insurance': "js/template/resource/insurance/insurance.js",
    'resource_selfpay': "js/template/resource/selfpay/selfpay.js",
    'resource_scenic': "js/template/resource/scenic/scenic.js",
    'business_analyst_saleProduct': "js/template/businessAnalyst/saleProduct/saleProduct.js",
    'resource_busCompany': "js/template/resource/busCompany/busCompany.js",
    'resource_lineProduct': 'js/template/resource/lineProduct/lineProduct.js',

    //-------------------------------------------发团管理模块--------------------------------------------------
    'arrange_quote': 'js/template/arrange/quote/quote.js',
    'arrange_booking': 'js/template/arrange/booking/booking.js',
    'resource_subsection': 'js/template/resource/subsection/subsection.js',
    'resource_partnerAgency': 'js/template/resource/partnerAgency/partnerAgency.js',
    'resource_touristGroup': 'js/template/resource/touristGroup/touristGroup.js', //游客管理
    'arrange_plan': "js/template/arrange/tripPlan/tripPlan.js",
    'arrange_singlePlan': "js/template/arrange/singlePlan/singlePlan.js",
    'resource_travelLine': 'js/template/resource/travelLine/travelLine.js',
    'arrange_transit': 'js/template/arrange/transit/transit.js',
    'arrange_all': 'js/template/resource/tripPlan/tripPlan.js',
    'arrange_travels': 'js/template/arrange/arrangeTravels/travels.js',//跟团游记
    'arrange_serviceStandards':'js/template/resource/serviceStandards/serviceStandards.js',//服务标准
    //-------------------------------------------业务分析模块---------------------------------------------------
    'business_analyst_saleProduct': "js/template/businessAnalyst/saleProduct/saleProduct.js", //产品销量
    'business_analyst_sourDstribution': "js/template/businessAnalyst/sourDstribution/sourDstribution.js", //客源分布
    'business_analyst_customerVolume': "js/template/businessAnalyst/customerVolume/customerVolume.js", //客户客量
    'business_analyst_employeePerfor': "js/template/businessAnalyst/employeePerfor/employeePerfor.js", //员工业绩 
    'business_analyst_tourguidePerfor': "js/template/businessAnalyst/tourguidePerfor/tourguidePerfor.js", //导游业绩
    'business_analyst_shopStat': "js/template/businessAnalyst/shopStat/shopStat.js", //购物统计

    //-------------------------------------------财务管理模块--------------------------------------------------------------------
    'financial_count': "js/template/financial/count/count.js", //报账审核
    'financial_innerTransfer_profit': "js/template/financial/innerTransferProfit/innerTransferProfit.js",
    'financial_turnProfit': "js/template/financial/turnProfit/turnProfit.js",
    'financial_totalProfit': "js/template/financial/totalProfit/totalProfit.js",
    'financial_Client': "js/template/financial/Client/Client.js",
    'financial_insure': "js/template/financial/insure/insure.js",
    'financial_shop': "js/template/financial/shop/shop.js", //购物账务
    'financial_guide': "js/template/financial/guide/guide.js", //导游账务
    'financial_innerTransfer_in': "js/template/financial/innerTransferIn/innerTransferIn.js", //内转转入
    'financial_innerTransfer_out': "js/template/financial/innerTransferOut/innerTransferOut.js", //内转转出
    'financial_replace': 'js/template/financial/replace/replace.js', //代订账务
    'financial_replaceProfit': "js/template/financial/replaceProfit/replaceProfit.js",
    'financial_payment_details': "js/template/financial/paymentDetails/paymentDetails.js", //收支明细
    'financial_planProfit': "js/template/financial/planProfit/planProfit.js", //发团利润
    'financial_Other_accounts': "js/template/financial/OtherAccounts/OtherAccounts.js", //其他账务
    'financial_replaceProfit': "js/template/financial/replaceProfit/replaceProfit.js", //代订利润
    'financial_restaurant': "js/template/financial/Restaurant/Restaurant.js", //餐厅账务
    'financial_rummery': "js/template/financial/hotel/hotel.js", //酒店账务
    'financial_busCompany': "js/template/financial/busCompany/busCompany.js", //车队账务
    'financial_ticket': "js/template/financial/ticket/ticket.js", //票务账务
    'financial_scenic': "js/template/financial/Scenic/Scenic.js", //票务账务
    'financial_self': "js/template/financial/Self/Self.js", //自费账务
    'financial_income': 'js/template/financial/FinIncome/finIncome.js', //财务收款
    'financial_pay': 'js/template/financial/FinPay/finPay.js', //财务收款
    'financial_transfer': "js/template/financial/transfer/transfer.js",
	'financial_bank_account':"js/template/financial/bankAccount/bankAccount.js",//银行账号
	'financial_collectedGuests':"js/template/financial/collectedGuests/collectedGuests.js",//收客利润
	'financial_transferProfits':"js/template/financial/transferProfits/transferProfits.js",//中转利润
	'financial_onlinePay':"js/template/financial/onlinePayment/onlinePayment.js",//在线支付
	'financial_guide_borrow_money':"js/template/financial/guideBorrow/guideBorrow.js",//导游借款
	'financial_offsetByDetail':"js/template/financial/offsetByDetail/offsetByDetail.js",//冲抵明细
    //---------------------------------------------------------------------------------------------------------------
    'public_message': "js/template/system/message/message.js",
    'system_information': "js/template/system/information/information.js",
    'system_user': "js/template/system/user/user.js",
    'system_department': "js/template/system/department/business.js",
	'system_infrastructure':"js/template/system/basicSet/basicSet.js",
	'system_companyInformation':"js/template/system/companyInfo/company.js",//公司资料
	'accountSetting':"js/template/system/accountSetting/accountSetting.js",//账户设置
    'arrange_transfer': "js/template/arrange/arrangeTransfer/arrangeTransfer.js", //转客管理
    'arrange_inner_Transfer': "js/template/arrange/innerTransfer/innerTransfer.js",
    'arrange_orderManage': "js/template/arrange/orderManage/orderManage.js",
    'arrange_groupTransfer': "js/template/arrange/arrangeGroupTransfer/arrangeGroupTransfer.js", //团散转客
    'arrange_individual': "js/template/arrange/arrangeIndividual/arrangeIndividual.js" //散客拼团
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
				//绑定系统旅行社
				$("#sidebar .nav-list .system_travelAgency").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/system/travelAgency/travelAgency.js",function(TravelAgency){
						TravelAgency.listTravelAgency();
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

				//绑定収支明细菜单功能
				$("#sidebar .nav-list .financial_collectDetail").click(function(){
					$("#sidebar .nav-list li").removeClass("active");
					$(this).addClass("active");
					$(this).parent().parent().addClass("active");
					seajs.use("" + ASSETS_ROOT +"js/template/financial/collectDetail/collectDetail.js",function(collectDetail){
						collectDetail.listCollectDetail();
					});
				});
				//table 点击选中radio事件
				$(document).on('click', '.T-chex-radio tbody tr', function(event) {
					var $that = $(this);
						$that.toggleClass('success').find('input[type="radio"]').prop('checked',true);
						$that.siblings().removeClass('success');
				});
				$(document).on('click', '.T-chex-radio tbody input[type="radio"]', function(event) {
					var $that = $(this),$tr = $that.closest('tr');
						$tr.toggleClass('success');
						$tr.siblings().removeClass('success');

				});
				// table 点击选中事件
				$(document).on('click','tbody tr', function(event) {
					var event = event ? event :window.event,
						$target = $(event.target  || event.srcElement);

					// 若点击操作或者checkbox的浮层，就直接退出
					if ($target.hasClass('T-action') || $target.hasClass('lbl')) return;

					var $that = $(this), $checkBox = $that.find('input[type="checkbox"]'),
						targetIsCheckbox = $target.is('input[type="checkbox"]');
					if ($that.closest('table').hasClass('T-showHighLight')) {	
							if (targetIsCheckbox)  {	// 点击了checkbox
								// $that.toggleClass('success', $target.prop('checked'));
								toggleClass('success',  $target.prop('checked'));
							} else if ($checkBox.length) {  // tr含有checkbox
								$that.toggleClass('success');								
								$checkBox.trigger('click');	
							} else {   // 普通tr
								$that.siblings('tr').removeClass('success');
								toggleClass('success',  true);
							}
					}

					// tr不对齐的处理
					function toggleClass(className, enable) {
						var $trs = $that.parent().children('tr'),
							baseCnt = $trs.eq(0).children('td').length,
							$current = $that.next(), $prev = $that;

						// 向下遍历
						while(baseCnt != $current.children('td').length && $current.children('td').length > 0) {
							$current = $current.toggleClass(className, enable).next();
						}

						// 向上遍历
						while(baseCnt != $prev.children('td').length && $prev.children('td').length > 0) {
							$prev = $prev.toggleClass(className, enable).prev();
						}
						$prev.toggleClass(className, enable);
					}
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

	jQuery.fn.extend({
		//重写jquery的text方法
		text : function( value ){
			return jQuery.access( this, function( value ) {
				var $that = $(this);
				if(value === undefined){
					value = jQuery.text( this )
					if($that.hasClass('F-float')){
						value = Tools.formatQuantile(value);
					}
				}else{
					if($that.hasClass('F-float')){
						// 精度控制
						if ($that.hasClass('F-money') && value != 0) {
							value = Tools.toFixed(value, 2);
						} else if ($that.hasClass('F-count')) {
							value = Tools.toFixed(value, 1, false);
						}

						value = Tools.thousandPoint(value);
					}
					value = this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) )
				}
				return value;
			}, null, value, arguments.length );
		},

		//重写jquery的val方法
		val : function( value ){
			var ret, hooks, isFunction,rreturn = /\r/g,
			elem = this[0]
				$that = $(this);

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret.replace(/(^\s*)|(\s*$)/g, "");
					}

					ret = elem.value;
					if($that.hasClass('F-float') && ret !== ""){						
						ret = Tools.formatQuantile(ret);
					}
					if($that.hasClass('F-money') && ret !== ""){
							ret = Tools.toFixed(ret, 2);
					}
					if($that.hasClass('F-count') && ret !== ""){
							ret = Tools.toFixed(ret, 1);
					}
					return typeof ret === "string" ?
						(ret.replace(rreturn, "")).replace(/(^\s*)|(\s*$)/g, "") :
						ret == null ? "" : ret.replace(/(^\s*)|(\s*$)/g, "");
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {	
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map(val, function ( value ) {
						return value == null ? "" : (value + "").replace(/(^\s*)|(\s*$)/g, "");
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					if($that.hasClass('F-float')){
						// 精度控制
						if ($that.hasClass('F-money')) {
							val = Tools.toFixed(val, 2);
						} else if ($that.hasClass('F-count')) {
							val = Tools.toFixed(val, 1, false);
						}
						val = Tools.thousandPoint(val);						
					}
					this.value = val.replace(/(^\s*)|(\s*$)/g, "");
				}
			});
		},

		//获取或设置光标位置
		cursorPosition : function( value ){
			var oThat = $(this)[0], CaretPos = -1;
			if(typeof value === "number"){
				if(oThat.setSelectionRange){
			        oThat.setSelectionRange(value,value);
			    }
			    else if (oThat.createTextRange) {
			        var range = oThat.createTextRange();
			        range.collapse(true);
			        range.moveEnd('character', value);
			        range.moveStart('character', value);
			        range.select();
			    }
			}else{
				if(document.selection){
					var Sel = document.selection.createRange();
			        Sel.moveStart ('character', -oThat.value.length);
			        CaretPos = Sel.text.length;
				}
				else if (oThat.selectionStart || oThat.selectionStart == '0'){
	        		CaretPos = oThat.selectionStart;
				}
			}
		    return CaretPos;
        }
	});

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
	if (typeof laypage !== 'undefined') {
		var _laypage = laypage;
		laypage = function(options)  {
			var last = options.last || false;
			if (!last) {
				last = options.pages || false;
			}
			// 合并配置
			options = $.extend({},
				{
				    skip: true, //是否开启跳页
				    skin: '#51b0c2',
				    last: last,
				    groups: 3 //连续显示分页数
				}, options);

			_laypage(options);
		};
	} else {
		console.info('laypage was not loaded!');
	}

	// 重写autocomplete的resize方法
	$.widget("ui.autocomplete", $.ui.autocomplete, {
	    _resizeMenu: function() {
	        var a = this.menu.element;
            a.css('min-width', (Math.max(a.width("").outerWidth(), this.element.outerWidth()) - 8) + 'px')
	    }
	});

	$('body').append('<div id="desc-tooltip-containter"></div>');
	$('body').append('<div id="desc-tooltip-containter2"></div>');
	$('#desc-tooltip-containter, #desc-tooltip-containter2').hover(function() {
		$(this).data('focus-in', true);
	}, function() {
		$(this).data('focus-in', false).html('');
	});
})(jQuery);

var Tools = {
	$descContainer: $('#desc-tooltip-containter'),
	$descContainer2: $('#desc-tooltip-containter2'),
};

// 定义图片查看参数
Tools.colorbox_params = {
            photo : true,
            rel: 'colorbox',
            reposition:true,
            scalePhotos:true,
            scrolling:false,
            previous:'<i class="ace-icon fa fa-arrow-left"></i>',
            next:'<i class="ace-icon fa fa-arrow-right"></i>',
            close:'&times;',
            current:'{current} of {total}',
            maxWidth:'100%',
            maxHeight:'100%',
            onOpen:function(){ 
                $overflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            },
            onClosed:function(){
                document.body.style.overflow = $overflow;
            },
            onComplete:function(){
                $.colorbox.resize();
            }
        };
        
/**
 * 表单 转 JSON
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($){  
    $.fn.serializeJson=function(){  
        var serializeObj={};  
        var array=this.serializeArray();  
        var str=this.serialize();  
        $(array).each(function(){  
            if(serializeObj[this.name]){  
                if($.isArray(serializeObj[this.name])){  
                    serializeObj[this.name].push(this.value);  
                }else{  
                    serializeObj[this.name]=[serializeObj[this.name],this.value];  
                }  
            }else{  
                serializeObj[this.name]=this.value;   
            }  
        });  
        return serializeObj;  
    };  
})(jQuery); 

/**
 * 获取表格中的数据：input:text radio checkbox password
 * 通过名称获取，并会获取tr上的Id
 * @param  {object} $tbody table的query对象
 * @return {json}        返回JSON
 */
Tools.getTableVal = function($tbody, idName) {
	var res = false;

	if (!!$tbody && $tbody.length) {
		res = [];
		var name, value;	
		idName = idName || 'id';

		$tbody.children('tr').each(function() {
			var $tr = $(this), val = {id: $tr.data(idName)};

			$tr.find('input,select').each(function() {
				var $that = $(this);

				name = $that.prop('name');
				if (!!name) {
					if ($that.is('[type=checkbox],[type=radio]')) {
						value = $that.is(':checked')?1:0;
					} else {
						value = $that.val();
					}

					val[name] = value;
				}


			});

			res.push(val);
		});
	}

	return res;
};

/**
 * 自定义简介的提示
 * @param  {object} $elements 需要绑定提示的DOM
 * @return {[type]}           [description]
 */
Tools.descToolTip = function($elements,type, placement, htmlContent, hoverFn) {
	if (!!$elements)  {
		$elements.each(function() {
			var $that = $(this), content = $that.prop('title'),
				html = htmlContent || $that.data("html"), 
				timer = false, options = false;

			// 内容过长，才提示
			$that.prop('title', '');
			// set options
			if ($that.width() < $that.children().width() && type == 1)  {
				options = {
					trigger: 'click',
					container: '#desc-tooltip-containter',
					content: content,
				};
			}else if (type == 2) {
				options = {
					trigger: 'manual',
					container: '#desc-tooltip-containter2',
					content: html,
					html : true
				};
				if (!!placement) {
					options.placement = placement;
				}				
			}

			if (options)  {
				// 绑定提示
				$that.popover(options)
				// 处理显示与隐藏提示
				.hover(function() {
					// 进入时，触发提示
					timer = setTimeout(function() {
						timer = false;
						$that.popover('show');
						if(hoverFn){
							hoverFn();
						}
					},200)
				}, function() {
					if (timer) {
						clearTimeout(timer);
					}
					// 设置超时，通过判断来确定提示
					setTimeout(function() {
						if (type === 2) {
							if (Tools.$descContainer2.data('focus-in') != true)  {
								$that.popover('hide');
							}
						} else {
							if (Tools.$descContainer.data('focus-in') != true)  {
								$that.popover('hide');
							}

						}
					}, 100);
				});
			}
		});
	}
}

/**
 * 添加Tab——新增、更新内容。
 * 在编辑页面，监听isEdited状态。若编辑过（未保存），询问用户是否保存。用户确认后，触发'switch.tab.save'事件。切换页面的功能由事件回调控制。
 * 								 也可以选择【否】，即不保存。或者选择【取消】，什么都不做
 * @param {string} tab_id   Tab key id
 * @param {string} tab_name Tab的标题
 * @param {[type]} html     [description]
 */
Tools.addTab = function(tab_id, tab_name, html)  {
	$tabList.children('li').removeClass("active");

	var $current_li = $tabList.find('.active'),
		$next_li = $tabList.find('.tab-'+tab_id);
		$content = $('#tab-'+ tab_id +'-content'),
		canUpdateTabContent = true;

	// tab已经打开了
	if ($next_li.length)  {
		// show tab
		$next_li.children('a').trigger('click').children('span').text(tab_name);	

		// 页面已经编辑
		if ($content.data('isEdited'))  {
			showSaveConfirmDialog($( "#confirm-dialog-message" ), "数据已经被修改，是否保存?",
								function(){	// 保存
									$content.trigger(SWITCH_TAB_SAVE, [tab_id, tab_name, html]);
								},
								function(){  // 不保存
									updateTabContent();
									$content.data('isEdited', false).trigger(SWITCH_TAB_BIND_EVENT, [tab_id, tab_name, html]);
								},
								// 取消
								false);
			// 此时不能添加内容
			canUpdateTabContent = false;
		} else {
			setTimeout(function() {
				Tools.justifyTab();
			}, 50);
		}
	} 

	if (canUpdateTabContent) {
		// 更新页面
		updateTabContent();
	}

	return canUpdateTabContent;
	function updateTabContent()  {
		$tabContent.find(".tab-pane-menu").removeClass("active");
		if($content.length){
			$content.addClass("active");
			$next_li.find('span').text(tab_name);
			Tools.processTabHistory($current_li, true);
		}
		else{
			var $tab_li = $("<li class=\"tab-"+tab_id+" active\"><a data-toggle=\"tab\" href=\"#tab-"+tab_id+"-content\" aria-expanded=\"true\"><span>"+tab_name+"</span><i class=\"ace-icon fa fa-close tab-close T-close\"></i></a></li>");

			$tabList.append($tab_li);
			$tabContent.append("<div id='tab-"+tab_id+"-content' class='tab-pane tab-pane-menu active'></div>");
			// bind close event
			
			$tab_li.on('click', '.T-close', function(event) {
				event.preventDefault();
				var $content = $('#tab-' + tab_id + '-content');

				// 页面已经编辑
				if ($content.data('isEdited'))  {
					showSaveConfirmDialog($( "#confirm-dialog-message" ), "数据已经被修改，是否保存?",
										function(){	// 保存
											$content.trigger(CLOSE_TAB_SAVE);
										},
										function(){  // 不保存
											$content.trigger(CLOSE_TAB_SAVE_NO);
											Tools.closeTab(tab_id);
										},
										// 取消
										false);
					// 此时不能添加内容
					canUpdateTabContent = false;
				} else {
					Tools.closeTab(tab_id);
				}

			});
			Tools.processTabHistory($tab_li, true);

			Tools.justifyTab();
		}
		html = Tools.filterCount(html);
		html = Tools.filterMoney(html);
		html = Tools.filterUnPoint(html);
		Tools.trFixed(html);
		$("#tab-"+tab_id+"-content").html(filterUnAuth(html));
	}
};

/**
 * 关闭tab
 * @param  {string} tab_id tab标签的id
 * @return {[type]}        [description]
 */		
Tools.closeTab = function(tab_id) {
	var $tab_li = $tabList.find('.tab-' + tab_id),
		index = $tab_li.index();

	$tabContent.find('#tab-' + tab_id + '-content').remove();

	Tools.processTabHistory($tab_li);
	if ($tab_li.hasClass('active')) {
		if (tabHistory.length) {
			$tabList.find('[href="'+ tabHistory[0] + '"]').trigger('click');
		} else {
			$tabList.find('a').eq(0).trigger('click');
		}
	}

	$tab_li.remove();

	Tools.justifyTab();
};

/**
 * 围护历史数据
 * @param  {object} $obj         tab li对象
 * @param  {Boolean} isAdd true： 添加，false:删除
 * @return {[type]}             [description]
 */
Tools.processTabHistory = function($obj, isAdd) {
	var key = $obj.children('a').attr('href');

	if (!!key) {
		var index = tabHistory.indexOf(key);
		if (isAdd) {
			if (index >= 0) {
				if (index != 0) {
					tabHistory.splice(index, 1);
					tabHistory.unshift(key);
				}
			} else {
				tabHistory.unshift(key);
			}
		} else if (index >= 0) {
			tabHistory.splice(index, 1);
		}
	}
};

/**
 * 刷新tab
 * @param  {string} id 需要刷新的tab的Id
 * @return {[type]}    [description]
 */
Tools.refreshTab = function(id) {
	if (!!id) {
		$('#' + id).trigger(REFRESH_TAB_EVENT);
	}
}

/**
 * 调整tab的位置
 * @return {[type]} [description]
 */
Tools.justifyTab = function() {
	var viewWidth = $('.breadcrumbs-fixed').width(),
		leftBarWidth = $('#tab_left_scroll').width(),
		rightBarWidth = $('#tab_right_scroll').width(),
		tabWidth = $tabList.width();

	// 参考左边
	viewWidth = viewWidth - rightBarWidth;

	var $active_li = $tabList.find('.active');
	if (!$active_li.length) return;

		// 必须距离左边的距离
	var	li_left = $active_li.position().left,
		li_right = li_left + $active_li.outerWidth(),
		// need_left = right_point - viewWidth;
		leftMargin = parseInt($tabList.css('marginLeft'));

	if (li_left < (-leftMargin - leftBarWidth)) {
		// 左隐
		$tabList.css({
			'margin-left': (leftBarWidth -li_left + 'px')
		});
	} else if (li_right > (leftBarWidth + viewWidth - leftMargin)) {
		// 右隐
		$tabList.css('margin-left', (viewWidth - li_right) + 'px');
	} else {
		// 右侧缺口
		var $last = $tabList.children('li').last(),
			tab_len = $last.position().left + $last.width();

		if (viewWidth > tab_len) {
			// 当内容长度小于视口长度时
			$tabList.css('margin-left', leftBarWidth + 'px');
		} else if ((tab_len + leftMargin) < viewWidth) { 
			// 内容大于视口长度，且内容右边出现空白
			$tabList.css('margin-left', (viewWidth - tab_len ) + 'px');
		}
	}
};

/**
 * 通过tab id获取tab key
 * @param  {string} id tab ID
 * @return {[type]}    [description]
 */
Tools.getTabKey = function(id) {
	var res = '';
	if (!!id) {
		var res = id.split('-');

		res.shift();
		res.pop();

		res = res.join('-');
	}

	return res;
};

/**
 * inputCtrolFloat Input控件位数的输入
 * @param  {[type]} $inputCtrol input控件对象
 * @return {[type]}
 */

Tools.inputCtrolFloat=function($inputCtrol){
	if (jQuery.isArray($inputCtrol)) {
		for (var i = 0, len = $inputCtrol.length; i < len; i++) {
			$inputCtrol[i].on('input', function (event) {
			    var $amountInput = $(this);
			    //响应鼠标事件，允许左右方向键移动 
			    event = window.event || event;
			    if (event.keyCode == 37 | event.keyCode == 39) {
			        return;
			    }
			    if (isNaN($amountInput.val())) {
			    	setTimeout(function(){
			    		 //先把非数字的都替换掉，除了数字和. 
				        $amountInput.val($amountInput.val().replace(/[^\d.]/g, "").
				        //只允许一个小数点              
				        //replace(/^\./g, "").replace(/\.{2,}/g, ".").
				        //只能输入小数点后两位
				        replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
			    	},100)
			    };
		    });
			$inputCtrol[i].on('blur', function () {
			    var $amountInput = $(this);
				    //最后一位是小数点的话，移除
				    $amountInput.val(($amountInput.val().replace(/\.$/g, "")));
			});
		}
	}else{
		$inputCtrol.on('input', function (event) {
		    var $amountInput = $(this);
		    //响应鼠标事件，允许左右方向键移动 
		    event = window.event || event;
		    if (event.keyCode == 37 | event.keyCode == 39) {
		        return;
		    }
		     if (isNaN($amountInput.val())) {
			    	setTimeout(function(){
			    		 //先把非数字的都替换掉，除了数字和. 
				        $amountInput.val($amountInput.val().replace(/[^\d.]/g, "").
				        //只允许一个小数点              
				        //replace(/^\./g, "").replace(/\.{2,}/g, ".").
				        //只能输入小数点后两位
				        replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
			    	},100)
			    }; 
	    });
		$inputCtrol.on('blur', function () {
		    var $amountInput = $(this);
			    //最后一位是小数点的话，移除
			    $amountInput.val(($amountInput.val().replace(/\.$/g, "")));
		});
	}
}
/**
 * 为满足两位数，在需要的时候补充零
 * @param {int} num 数值
 * 返回处理过后的字符串
 */
Tools.addZero2Two = function(num)  {
	return num > 9 ? num : '0' + num;
}

/**
 * 控制精度
 * @param  {string/float} data   数据
 * @param  {float} length 精度的长度
 * @param  {boolean} fixed 是否固定长度，默认是:true
 * @return {float}        返回修正后的数据
 */
Tools.toFixed = function(data, length, fixed) {
	if (typeof fixed !== 'boolean') {
		fixed = true;
	}
	if (!!Number.prototype.toFixed && data != "") {
		if (isNaN(length) || !length) {
			length = 2;
		}

		if (!isNaN(data)) {
			if (!(fixed === false && length >= checkPrecisionLength(data))) {
				data = (data * 1).toFixed(length);
			}
		}
	}

	return data;

	function checkPrecisionLength(data) {
		var len = 0;
		if (!!data) {
			data = (data + '').split('.');
			if (data.length === 2) {
				len = data[1].length;
			}
		}

		return len;
	}
};
/**
 * 过滤金额精度为2位小数
 * @param  {string} obj html数据
 * @return {object}     返回转换后的html数据
 */
Tools.filterMoney = function(obj){
	if(!obj)return '';
	var $obj = $(obj);
	$obj.find(".F-money").each(function(){
		var $taht = $(this);
		if(!$taht.is(':not("input")')){
			$taht.val(Tools.toFixed($taht.val(), 2))
		}else if($taht.text() != 0){
			$taht.text(Tools.toFixed($taht.text(), 2));
		}
	});
	return $obj;
};
/**
 * 过滤数量精度为1位小数
 * @param  {string} obj html数据
 * @return {object}     返回转换后的html数据
 */
Tools.filterCount = function(obj){
	if(!obj)return '';
	var $obj = $(obj);
	$obj.find(".F-count").each(function(){
		if(!$(this).is(':not("input")')){
			var value = $(this).val();
			value = /\d+\./.test(value) ? Tools.toFixed(value, 1) : value;
			$(this).val(value);
		}else{
			var text = $(this).text();
			text = /\d+\./.test(value) ? Tools.toFixed(text, 1) : text;
			$(this).text(text);
		}
	});
	return $obj;
};
/**
 * 添加千分位
 * @param  {float} num   数据
 * @return {string}      返回添加千分位后的数据
 */
Tools.thousandPoint = function(num, length){
	if(!!length){
		num = Tools.toFixed(num, length);
	}
	num = (num + '').replace(/ /g, '');
	var folatNum = num.replace(/(,|-)/g, '').replace(/(\d+)(\.\d*)?$/, '$2'),
		intNum = num.replace(/,/g, '').replace(/(\d+)(\.\d*)?$/, '$1');
	
	if (isNaN(intNum) || (!!folatNum && isNaN(folatNum))) {
		return num;
	}

	return intNum.replace(/(-)?\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')+folatNum;
};
/**
 * 过滤千分位
 * @param  {string} obj html数据
 * @return {object}     返回转换后的html数据
 */
Tools.filterUnPoint = function(obj){
	if(!obj)return '';
	var $obj = $(obj);
	$obj.find(".F-float").each(function(){
		if(!$(this).is(':not("input")')){
			$(this).val(Tools.thousandPoint($(this).val()));
		}else{
			$(this).text(Tools.thousandPoint($(this).text()));
		}
	});
	
	return $obj;
};

$('body').on('focusin.format-float.api', 'input.F-float', function(event) {
	$(this).data('old-value-format-float.api', this.value);
})
.on('focusout.format-float.api', 'input.F-float', function(event) {
	if ($(this).data('old-value-format-float.api') !== this.value
		&& !!this.value && navigator.userAgent.toUpperCase().indexOf("FIREFOX") < 0) {
		// 处理千分位存在时丢失change事件的问题
		console.info('change')
		$(this).trigger('change');
	}
})
.on('keydown.format-float.api', 'input.F-float', function(event) {
	Tools.input_key = event.which;
})
.on('input.format-float.api', 'input.F-float', function(event) {
	event.preventDefault();
	var $that = $(this),
		current = $that.cursorPosition(),
		value = this.value,
		newValue = Tools.thousandPoint(value);

	switch(Tools.input_key) {
		case 8:  // backspace
			if (newValue[current] === ',') {
				// 删除','时
				
				// 删除一个数字
				value = value.substring(0, current - 1) + value.substr(current);
				// 重新格式化
				newValue = Tools.thousandPoint(value);
				if (current <= 1) {
					current --;
				}
			}
			break;
		case 46:  // delete
			if (newValue[current] === ',') {
				value = value.substring(0, current) + value.substr(current+1);
				newValue = Tools.thousandPoint(value);
				if (newValue.split(',').length) {	// 删除之后还有逗号，需要后移一位
					current ++;
				}
			}
			break;
		default:   //处理其他输入
			if (value.substr(0, current) != newValue.substr(0, current)) {  // 光标前的内容不同时
				var speed = value.split(',').length - newValue.split(',').length;
				if (speed < 0) {
					current ++;
				} else if (speed > 0) {
					current --;
				}
			}
		break;
	}

	this.value = newValue;
	if (current > 0) {
		$that.cursorPosition(current);
	} else {
		$that.cursorPosition(-1);
	}
})
.on('change.format-float.api', 'input.F-float', function(event) {
	event.preventDefault();
	$(this).val($(this).val());
});

/**
 * 把千分位转换为数字
 * @param  {string} data [description]
 * @return {[type]}      [description]
 */
Tools.formatQuantile = function(data){
	return data.replace(/,/g, '');
};

/**
 * 删除JSON中空字符串或者未定义的
 * @param  {[type]} json [description]
 * @return {[type]}      [description]
 */
Tools.delBlankJson = function(json) {
	if (!!json) {
		var value;
		for (var item in json) {
			value = json[item];
			
			if (undefined === value || '' === value) {
				delete json[item];
			}
		}
	}
	return json;
}

/**
 * 计算相关方法
 * @type {Object}
 */
Tools.Math = {};

/**
 * 浮点数比较。用于解决加减过程中精度所产生的误差
 * @param  {string/float}  src  比较数据
 * @param  {string/float}  dest 被比较数据
 * @return {Boolean}      true 相等,否则不相等
 */
Tools.Math.isFloatEqual = function(src, dest) {
	if (isNaN(src) || isNaN(dest)) {
		return false;
	}

	src = src * 1,
	dest = dest * 1;
	if (src == dest || Math.abs(src - dest) < 0.000001) {
		return true;
	}

	return false;
}

/**
 * 绑定日期控件
 * @param {object}  $obj         绑定日期控件的元素
 * @param {Boolean} isInputRange true：设置起始控制，false：不设置
 * @param {object}  options      补充配置
 */
Tools.setDatePicker = function($obj, isInputRange, options) {
    if (!$obj || !$obj.length) {
        console.log('元素为空，无法绑定日期控件');
        return;
    }

    options = $.extend({}, {
        autoclose: true,
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        language: 'zh-CN'
    }, options);
    
    $obj.datepicker(options);

    // 设置起始控制
    if (isInputRange && $obj.length === 2) {
        var $first = $obj.eq(0).on('changeDate', function(event) {
             event.preventDefault();
             var start = $(this).val();
         	 if(options.moreDay && start != ""){
         	 	start = Tools.addDay(start,options.moreDay);
         	 }
             var $end = $obj.eq(1).datepicker('setStartDate', start);

             if ($end.val() < start) {
                 $end.val(start);
             }
         });

        if (!!$first.val()) {
        	$first.trigger('changeDate');
        }
    }

    return $obj;
};

/**
 * 选择日期组件组
 * @param {object} $dateObjs 日期的Jquery对象
 */
Tools.setDateRange = function($dateObjs) {
	var len = $dateObjs.length;
	if (len) {
		Tools.setDatePicker($dateObjs);
		$dateObjs.each(function(index, val) {
			 $(this).on('changeDate.date-range.api', function(event) {
			 	event.preventDefault();
			 	var $that = $(this)
			 		date = $that.val();

			 	if (!!date) {
			 		for (var i = index + 1, $tmp, d; i < len; i ++) {
			 			$tmp = $dateObjs.eq(i);
			 			d = $tmp.val();
			 			if (!!d) {
			 				if (d <= date) {
			 					$tmp.val('');
			 				}
			 			}

			 			date = Tools.addDay(date, 1);
		 				$tmp.datepicker('setStartDate', date);
			 		}
			 	}
			 });
		});
	}

	return $dateObjs;
};
/**
 * 计算两个日期的差额
 * @param  {string} startDate 日期字符串
 * @param  {string} endDate   日期字符串
 * @return {int}           返回两个日期之间的天数
 *         					当天的话，返回0
 *         					开始日期或者结束日期为空，则表示今天
 */
Tools.getDateDiff = function(startDate,endDate, isAbs)  
{
	var days = 0;

	if (!!startDate || !!endDate)   {
		if (isAbs == 'noAbs') {
			days = Math.floor((getTime(endDate) - getTime(startDate))/(1000*60*60*24));
		}else{
			days = Math.floor(Math.abs(getTime(endDate) - getTime(startDate))/(1000*60*60*24));
		}
	}
    
    return days; 

    function getTime(date) {
    	if (!!date) {
    		return new Date(Date.parse(date.replace(/-/g,   "/"))).getTime();
    	} else {
    		return (new Date()).getTime();
    	}
    }
}

/**
 * 增加几天
 * @param {string} date 开始的日期 
 * @param {int} days 增加的天数
 */
Tools.addDay = function(date, days) {
	if (!isNaN(days)) {
		if (!(date instanceof Date)) {
			if (typeof date === 'string') {
				date = date.split('-').join('/');
			}
			
			date = new Date(date);
		}
		var timer = date.getTime()+ days*24*60*60*1000;
		date.setTime(timer);
		var month = date.getMonth() + 1, day = date.getDate();
		date = date.getFullYear()+ "-"+ (month < 10? ('0' + month) : month) + "-"+ (day < 10 ? ("0" + day) : day);
	}
	return date;
}

/**
 * 获取记录描述信息
 * 主要是为了统一描述
 * @param  {int} size 记录条数
 * @return {string}      记录统计的描述
 */
Tools.getRecordSizeDesc = function(size) {
	if (!!size && !isNaN(size) && size > 0) {
		return '共计'+ size + '条记录';
	} else {
		return '没有查询到相关记录';
	}
}
/**
 * 用于定义公共请求或者与数据相关的公共组件处理
 * @type {Object}
 */
 
var KingServices = {};

/**
 * 构建请求的URL
 * @param  {[type]} path   [description]
 * @param  {[type]} method [description]
 * @return {[type]}        [description]
 */
KingServices.build_url = function(path,method){
    return APP_ROOT+'back/'+path +'.do?method='+method+'&token='+$.cookie('token');
};

/**
 * 获取主列表
 * @param  {string} key       列表key
 * @param  {boolean} onlyStyle 是否只设置菜单样式，默认需要打开列表
 * @return {boolean}           true：操作成功，false：操作失败
 */
KingServices.getMainList = function(key, onlyStyle) {
	var res = false;

	if (!!key && typeof key === 'string') {
		var $menu = $('.'+ key),
			$mainMenu = $menu.parent().closest('li');

		// 展开一级菜单
		if (!$mainMenu.hasClass('open')) {
			$mainMenu.children('a').trigger('click');
		}

		if (!!onlyStyle) {
			$menu.addClass('open active');
		} else {
			$menu.trigger('click');
		}

		res = true;
	}

	return res;
}

/**
 * 购物统计总打单详情
 * @param  {[type]} tripPlanId    团ID
 * @param  {[type]} shopArrangeId 购物安排ID
 * @return {[type]}               [description]
 */
KingServices.viewConsumeMoney = function(tripPlanId,shopArrangeId)  {
	seajs.use(ASSETS_ROOT + modalScripts.business_analyst_shopStat, function(module){
		module.viewConsumeMoney(tripPlanId, shopArrangeId);
	});
}

/**
 * 编辑中转安排——
 * @param  {string} id 游客小组的ID
 * @return {[type]}    [description]
 */
KingServices.updateTransit = function(id)  {
	seajs.use(ASSETS_ROOT + modalScripts.arrange_transit, function(module){
		module.updateTransit(id, true);
	});
}

/**
 * 编辑游客小组
 * @param  {string} id 游客小组的ID
 * @return {[type]}    [description]
 */
KingServices.updateTouristGroup = function(id,type)  {
	seajs.use(ASSETS_ROOT + modalScripts.resource_touristGroup,function(module){
		module.updateTouristGroup(id,type);
	});
}

 /**
 /**
* updateTransfer 外转方法的确认

* @param  {[type]} touristGroupId [description]

* @return {[type]}                [description]

*/

KingServices.updateTransfer = function(touristGroupId,id)  {
	seajs.use("" + ASSETS_ROOT +modalScripts.resource_touristGroup,function(module){
		module.updateTransfer(touristGroupId,id);
	});
}

/** 
* [updateTransferIn 内转方法的确认 
* @param  {[type]} touristGroupId [description] 
* @return {[type]}                [description] 
*/ 
KingServices.updateTransferIn = function(touristGroupId)  {
	seajs.use("" + ASSETS_ROOT +modalScripts.resource_touristGroup,function(module){
	module.updateTransferIn(touristGroupId); 
});
}
/**

/**
 * 新增游客小组
 * @param  {string} id 游客小组的ID
 * @return {[type]}    [description]
 */
KingServices.addTouristGroup = function(touristGroupId,typeOut)  {
	seajs.use("" + ASSETS_ROOT +modalScripts.resource_touristGroup,function(module){
		module.addTouristGroup(touristGroupId,typeOut);
	});
}

//导游  新增
KingServices.addGuide = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_guide,function(module){
		module.addGuide(fn);
	});
}
//车队 新增
KingServices.addBusCompany = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_busCompany,function(module){
		module.addBusCompany(fn);
	});
}
//车队 新增 车和司机
KingServices.addBusDriver = function(fn,$busCompany,$busCompanyId){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_busCompany,function(module){
		module.addBusDriver(fn,$busCompany,$busCompanyId);
	});
}


//保险公司  新增
KingServices.addInsurance = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_insurance,function(module){
		module.addInsurance(fn);
	});
}
//餐厅  新增
KingServices.addRestaurant = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_restaurant,function(module){
		module.addRestaurant(fn);
	});
}
//酒店  新增
KingServices.addHotel = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_hotel,function(module){
		module.addHotel(fn);
	});
}
//景区  新增
KingServices.addScenic = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_scenic,function(module){
		module.addScenic(fn);
	});
}
//购物  新增
KingServices.addShop = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_shop,function(module){
		module.addShop(fn);
	});
}
//自费商家  新增
KingServices.addSelfPay = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_selfpay,function(module){
		module.addSelfPay(fn);
	});
}
//票务  新增
KingServices.addTicket = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_ticket,function(module){
		module.addTicket(fn);
	});
}

//报价  新增
KingServices.addQuote = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_quote,function(module){
		module.addQuote(id);
	});
}

//导游服务标准--新增 'arrange_serviceStandards':'js/template/resource/serviceStandards/serviceStandards.js',//服务标准
KingServices.addGuideService = function(args,closeLayer){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_serviceStandards,function(module){
		module.saveData(args,closeLayer);
	});
}

//单团明细
KingServices.tripDetail = function(id){
	seajs.use("" + ASSETS_ROOT + "js/template/financial/count/count.js",function(module){
		module.tripDetail(id);
	});
}
//代订明细
KingServices.replaceDetail = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_booking,function(module){
		module.replaceDetail(id);
	});
}
//查看线路产品
KingServices.viewLineProduct = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
		module.viewLineProduct(id);
	});
}
//查看导游报账
KingServices.viewFeeDetail = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_guide,function(module){
		module.viewFeeDetail(id);
	});
}
//查看游客小组
KingServices.viewTouristGroup = function(id,isTransferIn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_touristGroup,function(module){
		module.viewTouristGroup(id,isTransferIn);
	});
}
//查看外转情况
KingServices.viewTurnInfo = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_transfer,function(module){
		module.viewTransferOut(id);
	});
};
//查看内转情况
KingServices.viewInnerInfo = function(id,type){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_inner_Transfer,function(module){
		module.viewTransferOut(id,type);
	});
};
//查看中转安排exports.viewTransit
KingServices.viewTransit = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_transit,function(module){
		module.viewTransit(id);
	});
};
//查看收支明细 
KingServices.viewPayMentDetail = function(args){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_payment_details,function(module){
		module.init(args);
	});
};
//报账审核--跳转发团安排的查看页面
KingServices.viewTripDetail = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_all,function(module){
		module.viewTripPlan(id);
	});
};
//报价  修改
KingServices.updateQuoteToOffer = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_quote,function(module){
		module.updateQuoteToOffer(id);
	});
}
//同行  新增
KingServices.addPartnerAgency = function(fn){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_partnerAgency,function(module){
		module.addPartnerAgency(fn);
	});
}

//购物自费多选和浮动显示
KingServices.shopMultiselect = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
		module.shopMultiselect($this);
	});
}
KingServices.viewOptionalShop = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
		module.viewOptionalShop($this);
	});
}
KingServices.selfPayMultiselect = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
		module.selfPayMultiselect($this);
	});
}
KingServices.viewOptionalSelfPay = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_lineProduct,function(module){
		module.viewOptionalSelfPay($this);
	});
}
//景区多选和浮动显示
KingServices.chooseScenic = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_travelLine,function(module){
		module.chooseScenic($this);
	});
}
KingServices.viewOptionalScenic = function($this){
	seajs.use("" + ASSETS_ROOT + modalScripts.resource_travelLine,function(module){
		module.viewOptionalScenic($this);
	});
}

//发团计划--散客
KingServices.updateSingleTripPlan = function(id,mergeTouristGroupIdJson){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_singlePlan,function(module){
		module.updateSingleTripPlan(id,mergeTouristGroupIdJson);
	});
}
KingServices.addTripPlan = function(args,mergeTouristGroupIdJson){
	seajs.use("" + ASSETS_ROOT + modalScripts.arrange_singlePlan,function(module){
		module.addTripPlan(false,args,mergeTouristGroupIdJson);
	});
}

//支付
KingServices.payment = function(args,listFn){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_guide,function(module){
		module.payment(args,listFn);
	});
}
KingServices.paymentDetail = function(orderId){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_guide,function(module){
		module.paymentDetail(orderId);
	});
}

KingServices.viewDetails = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_payment_details,function(module){
		module.viewDetails(id);
	});
}

//添加资源函数
KingServices.addResourceFunction = function(e){
	var $this = $(this),
		$parents = $(this).closest(e.data.type),
		name = e.data.name,
		id = e.data.id,
		managerName = e.data.managerName,
		mobileNumber = e.data.mobileNumber,
		$function = e.data.function,
		fn = function (data){
			console.log(data)
			if (!!data.name && !!name && !!data.id && !!id) {$parents.find('input[name=price],input[name=hotelRoom],input[name=hotelRoomId],input[name=fee],input[name=chargingProjects],input[name=chargingId],input[name=goodsPolicy],input[name=shopPolicyId],input[name=selfitem],input[name=selfitemId],input[name=oldPrice],input[name=hotelRoomType],input[name=hotelRoomTypeId],input[name=hotelPrice],input[name=partnerAgencyNameList],input[name=partnerAgencyContactId]').val("")}
			if (!!data.name && !!name) {$parents.find('input[name='+name+']').val(data.name).trigger('change');}
			if (!!data.companyName && !!name) {$parents.find('input[name='+name+']').val(data.companyName).trigger('change');}
			if (!!data.id && !!id) {$parents.find('input[name='+id+']').val(data.id).trigger('change');}
			if (!!data.managerName && !!managerName) {$parents.find('input[name='+managerName+']').val(data.managerName);}
			if (!!data.mobileNumber && !!mobileNumber) {$parents.find('input[name='+mobileNumber+']').val(data.mobileNumber);}
			if (!!data.level || data.level == 0) {$parents.find('select[name=hotelLevel]').val(data.level);}
			if (!!data.type || data.type == 0) {$parents.find('input[name=type]').val(data.type);}
		}
	$function(fn);
}
//添加车、司机函数
KingServices.addBusDriverFunction = function(e){
	var $this = $(this),
		$parents = $(this).closest(e.data.type),
		$busCompany = $parents.find('[name=' + e.data.busCompanyName + ']').val() || "",
		$busCompanyId = $parents.find('[name=' + e.data.busCompanyId + ']').val() || "",
		busCompanyName = e.data.busCompanyName,
		busCompanyId = e.data.busCompanyId,
		licenseNumberId = e.data.busLicenseNumberId,
		licenseNumber = e.data.busLicenseNumber,
		busbrand = e.data.busbrand,
		seatCount = e.data.seatCount,
		driverName = e.data.driverName,
		driverId = e.data.driverId,
		driverMobileNumber = e.data.driverMobileNumber,
		$function = e.data.function,
		fn = function (data){
			console.log(data);
			if (!!data.busCompanyData.name && !!busCompanyName) {$parents.find('input[name='+busCompanyName+']').val(data.busCompanyData.name);}
			if (!!data.busCompanyData.id && !!busCompanyId) {$parents.find('input[name='+busCompanyId+']').val(data.busCompanyData.id);}
			if (!!data.busData.id && !!licenseNumberId) {$parents.find('input[name='+licenseNumberId+']').val(data.busData.id).trigger('change');}
			if (!!data.busData.licenseNumber && !!licenseNumber) {$parents.find('input[name='+licenseNumber+']').val(data.busData.licenseNumber);}
			if (!!data.busData.brand && !!busbrand) {$parents.find('input[name='+busbrand+']').val(data.busData.brand);}
			if (!!data.busData.seatCount && !!seatCount) {$parents.find('input[name='+seatCount+']').val(data.busData.seatCount).trigger('change');}
			if (!!data.driverData.name && !!driverName) {$parents.find('input[name='+driverName+']').val(data.driverData.name);}
			if (!!data.driverData.id && !!driverId) {$parents.find('input[name='+driverId+']').val(data.driverData.id).trigger('change');}
			if (!!data.driverData.mobileNumber && !!driverMobileNumber) {$parents.find('input[name='+driverMobileNumber+']').val(data.driverData.mobileNumber);}
		}
	$function(fn,$busCompany,$busCompanyId);
}
//跳转报账审核的单团核算
KingServices.viewTripAccount = function(id){
	seajs.use("" + ASSETS_ROOT + modalScripts.financial_count,function(module){
		module.viewTripAccount(id);
	});
}
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
	if (!!cityIdU) {KingServices.getCityList($container.find("select[name=cityId]"),provinceIdU,cityIdU);} 
	if (!!districtIdU) {KingServices.getDistrictList($container.find("select[name=districtId]"),cityIdU,districtIdU);} 
	
	if(provinceIdU != "" && !cityIdU){
		KingServices.getCityList($container.find("select[name=cityId]"),provinceIdU);
	}
	if(cityIdU != "" && !districtIdU){
		KingServices.getDistrictList($container.find("select[name=districtId]"),cityIdU);
	}
	 
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
	if (!!KingServices.provinceData) {
		var html = "<option value=''>未选择</option>";
		for(var i=0;i<KingServices.provinceData.length;i++){
			if (provinceId != null && KingServices.provinceData[i].id == provinceId) {
				html += "<option selected=\"selected\" value='"+KingServices.provinceData[i].id+"'>"+KingServices.provinceData[i].name+"</option>";
			} else {
				html += "<option value='"+KingServices.provinceData[i].id+"'>"+KingServices.provinceData[i].name+"</option>";
			}
		}
		$(obj).html(html);
	}else{
		$.ajax({
			url:""+APP_ROOT+"/base.do?method=getProvince",
			type:"POST",
			dataType:"json",
			showLoading: false,
			success:function(data){
				var html = "<option value=''>未选择</option>";
				KingServices.provinceData = data.provinceList;
				if(KingServices.provinceData != null && KingServices.provinceData.length > 0){
					for(var i=0;i<KingServices.provinceData.length;i++){
						if (provinceId != null && KingServices.provinceData[i].id == provinceId) {
							html += "<option selected=\"selected\" value='"+KingServices.provinceData[i].id+"'>"+KingServices.provinceData[i].name+"</option>";
						} else {
							html += "<option value='"+KingServices.provinceData[i].id+"'>"+KingServices.provinceData[i].name+"</option>";
						}
					}
				}
				$(obj).html(html);
			}
		});
	}
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
KingServices.hotelDescArray = ['未选择', '三星以下', '三星', '准四星', '四星', '准五星', '五星', '五星以上']
KingServices.getHotelDesc = function(level, defaultDesc) {
	return  KingServices.hotelDescArray[level] || defaultDesc || '三星以下';
};

//内部模板
KingServices.inlineTemplate = function(source, option) {
	var s = source,
		render = template.compile(s),
		html = render(option);
	return html;
}
/**
 * 表格固定在顶部功能
 * @param  {object} obj 暂时未用上
 * @return {[type]}     [description]
 */
Tools.trFixed = function(obj){
	$tabPane = $("#tabContent > .tab-pane.active");

	$tabPane.off("scroll").scroll(function(event){
		event.preventDefault();
		var $that = $(this),
			$trFixed = $that.find('.T-tr-fixed'),
			$focus = $(":focus");
		if($focus.hasClass('datepicker')){
			$focus.blur();
			$focus.datepicker('hide');
		}else if($focus.hasClass('T-dateTimePicker')){
			$focus.blur();
			$focus.datetimepicker('hide');
		}else if($(".datepicker.datepicker-dropdown").length > 0){
			console.log($(".datepicker.datepicker-dropdown").length);
			$(".datepicker.datepicker-dropdown").remove();
		}

		if($trFixed.length === 0)return;

		var $table = $trFixed.closest('table'),
			top = $table.offset().top-$that.offset().top,
			topArr = [], heightArr = [];;

		if(top >= 0){
			top = 0;
		}
		$trFixed.css({
			'transform' : 'translateY('+(-top)+'px)',
			'-webkit-transform' : 'translateY('+(-top)+'px)',
			'-moz-transform' : 'translateY('+(-top)+'px)',
			'msTransform' : 'translateY('+(-top)+'px)',
			'-o-transform' : 'translateY('+(-top)+'px)'
		});
	});
};

//根据需要加载插件js
var modulePlugin = {
	"plugin_print":'components/jquery-plugin/jQuery.print.js',//加载打印插件
	"plugin_export":'components/jquery-plugin/jquery.table2excel.min.js',//加载导出插件
	'plugin_pusher': 'components/pusher/pusher.min.js',
};
Tools.loadPluginScript = function(pluginKey){
	if (!!pluginKey && !!modulePlugin[pluginKey])  {
		$.getScript(modulePlugin[pluginKey]);
	}
};

window.onbeforeunload=function(e){
	var event = e || window.event;
	var $children = $('#tabContent').children();
	$children.each(function(index) {
		var $this = $(this),
			isEdited = $this.data('isEdited');
		if (!!isEdited) {
			event.returnValue='重新加载页面将导致未保存的数据丢失'
		}
	});
}
