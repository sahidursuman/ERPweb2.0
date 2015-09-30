define(function(require, exports) {
	var messageTemplate = require("./view/message"),
		viewTemplate = require("../system/message/view/view");
	var index = {
		main:function(){
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
	}
	exports.main = index.main;
});