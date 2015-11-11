define(function(require, exports) {
	var menuKey = "public_message",
		tabId = "tab-"+menuKey+"-content";
		listTemplate = require("./view/list");
		viewTemplate = require("./view/view");
	
	var message = {};	

	message.initModule = function() {
		message.listMsg(0);
	};

	message.listMsg = function(page){
		page = page || 0;
		$.ajax({
			url:KingServices.build_url("message","listMessage"),
			type:"POST",
			data:{
				pageNo : page,
				sortType : "auto"
			},
			success:function(data){
				var result = showDialog(data);
				if (result) {
					var html = listTemplate(data);
					addTab(menuKey+"-message","消息列表",html);
					//查看消息内容
					$(".T-message-list .T-view").click(function(){
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
	};

	message.viewMsg = function(id){
		$.ajax({
			url:KingServices.build_url("message","readMessage"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var html = viewTemplate(data);
				layer.open({
				    type: 1,
				    title:"查看信息",
				    skin: 'layui-layer-rim',
				    area: '600px', 
				    zIndex:1028,
				    content: html,
				    success:function(){
				    	message.listMsg(message.msgData.pageNo);
				    	// 修改header的显示
	    		    	var $msgCounter = $("#msgCountSpan"), count = $msgCounter.text();
	    		    	if (!!count && !isNaN(count) && count != '0')  {
	    		    		count = count - 1;
	    		    		var tip = count + " 条新消息";
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
	};

	exports.init = message.initModule;
})