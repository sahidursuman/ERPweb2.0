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
							var id = $(this).attr("data-entity-id");
							message.viewMsg(id);
						});
						
						//分页--首页按钮事件
						$("#messageList .pageMode a.first").click(function(){
							message.listMsg(0);
						});
						//分页--上一页事件
						$("#messageList .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							message.listMsg(previous);
						});
						//分页--下一页事件
						$("#messageList .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							message.listMsg(next);
						});
						//分页--尾页事件
						$("#messageList .pageMode a.last").click(function(){
							message.listMsg(data.totalPage == 0 ? 0 : data.totalPage-1);
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
					    area: ['600px', '480px'], //宽高
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