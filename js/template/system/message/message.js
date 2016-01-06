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
		var $tab = $("#" + tabId),
		    searchParam = {
				pageNo : page,
				messageTypeName : $tab.find("input[name=menuName]").val(),
				messageType : $tab.find("input[name=menuId]").val(),
				sortType : "auto"
			}
		$.ajax({
			url:KingServices.build_url("message","listMessage"),
			type:"POST",
			data: searchParam,
			success:function(data){
				data.searchParam = searchParam;
				var result = showDialog(data);
				if (result) {
					data.msgList = JSON.parse(data.msgList);
					var html = listTemplate(data);
					Tools.addTab(menuKey,"消息列表",html);
					message.getQuery();
					message.$tab = $('#tab-public_message-content');

					//查看消息内容
					message.$tab.find('.T-message-list').on('click', '.T-view', function(){
						var $that = $(this), sub = false;

						if ($that.hasClass('T-unread')) {
							$that.removeClass('T-unread');
							sub = true;
						}
						message.viewMsg($(this).closest('tr').data('id'), sub);
					});

					// read all
					message.$tab.find('.T-set-read-all').on('click', function(event) {
						event.preventDefault();
						message.setReadAll();
					});

					//搜索事件
					message.$tab.find('.T-search').on('click', function(event) {
						event.preventDefault();
						message.listMsg(0);
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

	message.viewMsg = function(id, sub){
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
				    scrollbar: false,
				    success:function(){
				    	// 修改header的显示
	    		    	if (sub) {
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
				    }
				});
				// 设置list
				message.$tab.find('[data-id="'+id+'"]').children('td').eq(1).find('b').text('已读').css('color', 'green');
			}
		});
	};

	message.setReadAll = function() {
		$.ajax({
			url: KingServices.build_url("message","readMessageAll"),
			type: 'post',
		})
		.done(function(data) {
			if (showDialog(data)) {
				showMessageDialog($('#confirm-dialog-message'), data.message, function() {
					message.listMsg();
					$("#msgCountSpan").text(0);
					$('#unReadCountStr').text('当前没有未读消息');
				})
			}
		});		
	};

	message.getQuery = function(){
		$.ajax({
			url: KingServices.build_url("message","findMessageType"),
			type: 'POST',
		})
		.done(function(data) {
			var menus = JSON.parse(data.menus),
				$menu = $("#" + tabId + " .T-chooseMenu");
			for(var i = 0 ;i < menus.length; i ++){
				menus[i].value = menus[i].name;
			}

			$menu.autocomplete({
	            minLength: 0,
	            source : menus,
	            change: function(event,ui) {
	                if (!ui.item)  {
	                    $(this).nextAll('input[name="menuId"]').val('');
	                }
	            },
	            select: function(event,ui) {
	                $(this).blur().nextAll('input[name="menuId"]').val(ui.item.id);
	            }
	        }).on("click",function(){
	            $menu.autocomplete('search','');
	        }); 
		});
		
	};

	exports.init = message.initModule;
})