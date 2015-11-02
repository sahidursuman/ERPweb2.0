define(function(require, exports) {
	var menuKey = "public_message",
	tabId = "tab-"+menuKey+"-content";
	listTemplate = require("./view/list");
	viewTemplate = require("./view/view");
	
	var message = {
		msgData : {
			pageNo : 0
		},	
		listMsg : function(page){
			$.ajax({
				url:""+APP_ROOT+"back/message.do?method=listMessage&token="+$.cookie("token")+"&menuKey=&operation=self",
				type:"POST",
				data:"pageNo="+page+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					pageNo = data.pageNo;
					var result = showDialog(data);
					if (result) {
						var html = listTemplate(data);
						addTab(menuKey+"-message","消息列表",html);
						
						// 查看消息内容
						$("#messageList .btn-msg-view").click(function(){
							var id = $(this).closest('tr').data('id');
							message.viewMsg(id);
						});

						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		message.listMsg(obj.curr -1);
								}
						    }
						});
					}
				}
			});
		},
		viewMsg:function(id){

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
					var html = viewTemplate(data);
					layer.open({
					    type: 1,
					    title:"查看信息",
					    skin: 'layui-layer-rim', //加上边框
					    area: '600px', //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){
					    	message.listMsg(message.msgData.pageNo);
					    	// 修改header的显示
		    		    	var $msgCounter = $("#msgCountSpan"), count = $msgCounter.text();
		    		    	if (!!count && !isNaN(count) && count != '0')  {
		    		    		count = count - 1;
		    		    		var tip = count + "  条新消息";
		    		    		if (count <= 0) {
		    		    			count = 0;
		    		    			tip = '当前没有未读消息';
		    		    		}

		    	    			$('#unReadCountStr').text(tip);
		    		    		$msgCounter.text(count);
		    		    	}
					    }
					});
				}
			});
		}
	}

	exports.listMsg = message.listMsg;
})