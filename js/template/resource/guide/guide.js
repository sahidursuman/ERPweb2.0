define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_guide",
	    listTemplate = require("./view/list"),
	    addTemplate = require("./view/add"),
	    updateTemplate = require("./view/update"),
	    viewTemplate = require("./view/view"),
	    tabId = "tab-"+menuKey+"-content"
	
	
	
	var guide = {
		searchData : {
			realname : "",
			status : ""
		},
		listGuide:function(page,realname,status){
			guide.searchData.realname = realname;
			guide.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&realname="+encodeURIComponent(realname)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var guideList = data.guideList;
						guideList = JSON.parse(guideList);
						data.guideList = guideList;
						var html = listTemplate(data);
						addTab(menuKey,"导游管理",html);
						
						$("#"+tabId+" .guideList .btn-guide-view").click(function(){
							var id = $(this).attr("data-entity-id");
							guide.viewGuide(id);
							// 再调整对话框的高度
							$(window).trigger('resize');
						});
						$("#"+tabId+" .guideList .btn-guide-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							guide.updateGuide(id,data.pageNo);
						});
						
						$("#"+tabId+" .guideList .btn-guide-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							guide.deleteGuide(this,id,data.pageNo);
						});
						
						$("#"+tabId+" .search-area .btn-guide-add").click(function(){
							guide.addGuide();
						});
						
						
						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							guide.searchData = {
									realname : $("#"+tabId+" .search-area input[name=guide_realname]").val(),
									status : $("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
								}
							guide.listGuide(0,guide.searchData.realname, guide.searchData.status);
						});
						//搜索按钮事件
						$("#"+tabId+" .search-area .btn-guide-search").click(function(){
							guide.searchData = {
								realname : $("#"+tabId+" .search-area input[name=guide_realname]").val(),
								status : $("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
							}
							
							guide.listGuide(0,guide.searchData.realname, guide.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							guide.listGuide(0,guide.searchData.realname,guide.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							guide.listGuide(previous,guide.searchData.realname,guide.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							guide.listGuide(next,guide.searchData.realname,guide.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							guide.listGuide(data.totalPage == 0 ? 0 : data.totalPage-1,guide.searchData.realname,guide.searchData.status);
						});
						
						
						
					}
				}
			});
		},
		addGuide:function(){
			var html = addTemplate();
			var addGuideLayer = layer.open({
			    type: 1,
			    title:"新增导游",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['630px', '360px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addGuideContainer .guideMainForm");
			    	// 设置表单验证
			    	var validator = rule.check($('.addGuideContainer'));
			    	
			    	$obj.find("input[name=joinTime]").datepicker({
						autoclose: true,
						todayHighlight: true,
						format: 'yyyy-mm-dd',
						language: 'zh-CN'
					});
			    	$obj.find(".btn-submit-guide").click(function(){
			    		// 表单校验
			    		if (!validator.form()) { return; }
						var status = 0;
						if($obj.find(".guide-status").is(":checked") == true){
							status = 1;
						}
						var form = $obj.serialize()+"&status="+status+"";
						
						$.ajax({
							url:""+APP_ROOT+"back/guide.do?method=addGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
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
									layer.close(addGuideLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									guide.listGuide(0,"",1);
								}
							}
						});
					});
			    }
			});
		},
		updateGuide:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var guideInfo = JSON.parse(data.guide);
						data.guide = guideInfo;
						var html = updateTemplate(data);
						var addGuide = layer.open({
						    type: 1,
						    title:"修改导游",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['630px', '360px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var $obj = $(".updateGuideContainer .guideMainForm");
						    	// 设置表单验证
						    	var validator = rule.check($('.updateGuideContainer'));
						    	$obj.find("input[name=joinTime]").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
						    	$obj.find(".btn-submit-guide").click(function(){
						    		// 表单校验
						    		if (!validator.form()) { return; }
									var status = 0;
									if($obj.find(".guide-status").is(":checked") == true){
										status = 1;
									}
									var form = "id="+id+"&"+$obj.serialize()+"&status="+status+"";
									$.ajax({
										url:""+APP_ROOT+"back/guide.do?method=updateGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
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
												layer.close(addGuide);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												guide.listGuide(pageNo,guide.searchData.realname,guide.searchData.status);
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
		deleteGuide:function(obj,id,pageNo){
			var dialogObj = $( "#confirm-dialog-message" );
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
							$.ajax({
								url:""+APP_ROOT+"back/guide.do?method=deleteGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#"+tabId+" .guideList .guide-"+id+"").fadeOut(function(){
											console.info(guide.searchData.realname);
											guide.listGuide(pageNo,guide.searchData.realname,guide.searchData.status);
										});
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该条记录？");
				}
			});
		},
		viewGuide:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var guideInfo = JSON.parse(data.guide);
						data.guide = guideInfo;
						var html = viewTemplate(data);
						layer.open({
						    type: 1,
						    title:"查看导游",
						    skin: 'layui-layer-rim', //加上边框
						    area: '690px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						});
					}
				}
			});
		}
	}
	exports.listGuide = guide.listGuide;
});
