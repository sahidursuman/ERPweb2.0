define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_travelLine";
	var listTemplate = require("./view/list");
	var addTemplate = require("./view/add");
	var addLineDayTemplate = require("./view/addLineDay");
	var scanDetailTemplate = require("./view/scanDetail");
	var viewLineDayTemplate = require("./view/viewDetail");
	var updateTemplate = require("./view/update");
	var updateLineDayTemplate = require("./view/updateLineDay");//addLineDayTemplate
	var editLineDayTemplate = require("./view/editLineDay");
	var addLineProductTemplate = require("./view/addLineProduct");
	var tabId = "tab-"+menuKey+"-content";
	var addLineId = menuKey+"-addLine";
	var lookID = menuKey+"-look";
	var updateId = menuKey+"-update";

	var scheduleDialogWidth = '950px',
		EDITOR_HEIGHT = 200;

	var travelLine = {
		pageData:{
			pageNo:0
		},
		searchData : {
			name : "",
			status : ""
		},
		updateClipboardMode : false,
		edited : {},
		isEdited : function(editedType){
			if(!!travelLine.edited[editedType] && travelLine.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		listTravelLine:function(page,name,status){
			$.ajax({
				url:""+APP_ROOT+"back/travelLine.do?method=listTravelLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if (result) {
						var travelLineList = data.travelLineList;
						travelLine.pageData.pageNo = data.pageNo;
						travelLineList = JSON.parse(travelLineList);
						data.travelLineList = travelLineList;
						var html = listTemplate(data);
						addTab(menuKey,"线路模板管理",html);
						travelLine.initList(data);
					}
				}
			});
		},
		initList : function(data){
			console.info(data);
			var $tab = $('#' + tabId);
			//新增线路产品button按钮事件
			$("#"+tabId+"  .btn-lineProduct-add").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.addLineProduct(id);
			});
			//新增线路button按钮事件
			$("#"+tabId+"  .btn-travelLine-add").click(function(){
				travelLine.addTravelLine();
			});
			
			//修改线路button按钮事件
			$("#"+tabId+"  .btn-line-edit").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.updateTravelLine(id,false);
			});
			
			//删除线路button按钮事件
			$("#"+tabId+"  .btn-line-delete").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.deleteTravelLine(id);
			});
			
			//复制线路模板
			$("#"+tabId+" .btn-line-clipboard").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.updateTravelLine(id,true);
			});
			
			$("#"+tabId+" .btn-line-pre-scan").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.scanLineProductDay(id);
			});

			//查看详情线路button按钮事件
			$("#"+tabId+"  .btn-line-scan").click(function(){
				var id = $(this).attr("data-entiy-id");
				travelLine.scanDetail(id);

			});
			
			//搜索栏状态button下拉事件
			$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
				$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
				$(this).parent().parent().parent().find("span").text($(this).text());
				travelLine.searchData = {
					name : $("#"+tabId+" input[name=travelLine_name]").val(),
					status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
				}
				travelLine.listTravelLine(0,travelLine.searchData.name,travelLine.searchData.status);
			});
			
			//搜索按钮事件
			$("#"+tabId+"  .btn-travelLine-search").click(function(){
				travelLine.searchData = {
					name : $("#"+tabId+"  input[name=travelLine_name]").val(),
					status : $("#"+tabId+"  .btn-status").find("button").attr("data-value")
				}
				travelLine.listTravelLine(0,travelLine.searchData.name,travelLine.searchData.status);
			});

			// 绑定翻页组件
			laypage({
			    cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
			    pages: data.totalPage, //总页数
			    curr: (data.pageNo + 1),
			    jump: function(obj, first) {
			    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
			    		travelLine.searchData = {
			    			name : $tab.find("input[name=travelLine_name]").val(),
			    			status : $tab.find(".btn-status").find("button").attr("data-value")
			    		}
			    		travelLine.listTravelLine(obj.curr -1,travelLine.searchData.name,travelLine.searchData.status);
			    	}
			    }
			});	
		},
		addTravelLine:function(){
			var html = addTemplate();
			//已填写提示  
			if($(".tab-"+menuKey+"-addLine").length > 0) {
				addTab(addLineId,"新增线路");
				if(!!travelLine.edited["addLine"] && travelLine.edited["addLine"] != ""){
					showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
						console.log("继续编辑");			
					},function(){
						addTab(addLineId,"新增线路",html);
						travelLine.initAdd();
						travelLine.edited["addLine"] = "";
					},"放弃","继续编辑"); 							
				 }else{
					addTab(addLineId,"新增线路",html);
                    travelLine.initAdd();					
				 } 
			}else{
				addTab(addLineId,"新增线路",html);	
                travelLine.initAdd();				
			}
		},
		initAdd : function(){
			var $addTrLinObj=$('#tab-resource_travelLine-addLine-content');
			$addTrLinObj.on("change",function(){
				travelLine.edited["addLine"] = "addLine";
			});	
			$addTrLinObj.find(".travelLineDayList .btn-submit-travelLine").unbind().click(function(){
				travelLine.submitAddTravelLine();
			});

			// 以弹出框的形式添加线路下行程信息
			$addTrLinObj.find(".travelLineDayList .btn-line-day-add").click(function(){
				function trim(str){
					return str.replace(/(^\s*)|(\s*$)/g, "");
				}
				var lineDayHtml = addLineDayTemplate();
				var addTravelLineDayLayer = layer.open({
					type:1,
					title:"新增日程",
					skin: 'layui-layer-rim', //加上边框
					area: scheduleDialogWidth, //宽高
					zIndex:1029,
					content: lineDayHtml,
					success:function(){
						var dayCheckor = rule.travelLineDayCheckor($('.travelLineDayForm'));

						var ue = init_editor("detailEditor-add-travelLine",{zIndex:99999999}, EDITOR_HEIGHT);

						$(".travelLineDayForm .btn-submit-line-day").click(function(){
							// 数据校验
							if (!dayCheckor.form()) return;

							var repastDetail = $(".travelLineDayForm input[name=repastDetail]").val();
							var hotelLevel = $(".travelLineDayForm select[name=hotelLevel]").val();
							var whichDay = $(".travelLineDayForm select[name=whichDay]").val();
							var level = "三星以下";
							if (hotelLevel == 0) {
								level = "未选择";
							}else if (hotelLevel == 1) {
								level = "三星以下";
							}else if (hotelLevel == 2) {
								level = "三星";
							}else if(hotelLevel == 3){
								level = "准四星";
							}else if(hotelLevel == 4){
								level = "四星";
							}else if(hotelLevel == 5){
								level = "准五星";
							}else if(hotelLevel == 6){
								level = "五星";
							}else if(hotelLevel == 7){
								level = "五星以上";
							}
							var title = $(".travelLineDayForm input[name=title]").val();
							if (trim(title) == "") {
								showMessageDialog($( "#confirm-dialog-message" ), "请输入行程标题");
								return false;
							}
							var restPosition = $(".travelLineDayForm input[name=restPosition]").val();
							var roadScenic = $(".travelLineDayForm input[name=roadScenic]").val();
							var detail = encodeURIComponent(ue.getContent());
							if (trim(detail) == "") {
								showMessageDialog($( "#confirm-dialog-message" ), "请输入行程详情");
								return false;
							}
//						    		var day = $(".travelLineDayList .lineDayList tbody tr").length + 1;
							var lineDayHtml = "<tr><td>第"+whichDay+"天<input name=\"whichDay\" value=\""+whichDay+"\" type=\"hidden\"/></td><td>"+repastDetail+"</td><td>"+restPosition+"</td><td>"+level+"</td><td>"+title+"</td>" +
								"<td style=\"width:120px\"><div class=\"btn-group\"><a data-entiy-id=\"\" class=\"btn-line-day-edit cursor\">修改|</a>" +
								"<a data-entiy-id=\"\" class=\" btn-line-day-delete cursor\">删除</a></div>" +
								"<input type=\"hidden\" name=\"hotelLevel\" value=\""+hotelLevel+"\"/>" +
								"<input type=\"hidden\" name=\"roadScenic\" value=\""+roadScenic+"\"/>" +
								"<input type=\"hidden\" name=\"detail\" value=\""+detail+"\"/></td></tr>";
							$addTrLinObj.find(".travelLineDayList .lineDayList tbody").append(lineDayHtml);
							$addTrLinObj.find(".travelLineDayList .lineDayList .btn-line-day-edit").unbind().click(function(){
								travelLine.bindEditButton($(this));
							});
							$addTrLinObj.find(".travelLineDayList .lineDayList .btn-line-day-delete").click(function(){
								travelLine.deleteDayDialog($(this));
							});
							layer.close(addTravelLineDayLayer);
						});
					}
				});
			});
		},
		scanDetail:function(id){
			$.ajax({
	    		url:""+APP_ROOT+"back/travelLine.do?method=getTravelLineById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var travelLineInfo = JSON.parse(data.travelLine);
						data.travelLine = travelLineInfo;
						var html = scanDetailTemplate(data);
						addTab(lookID,"查看线路",html);
					}
					
					$(".travelLineDayList .btn-guide-scan").click(function(){
						var id = $(this).attr("data-entiy-id");
				    	$.ajax({
				    		url:""+APP_ROOT+"back/travelLine.do?method=getTravelLineDayById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
									var lineDayInfo = JSON.parse(data.lineDay);
									data.lineDay = lineDayInfo;
									var lineDayhtml = viewLineDayTemplate(data);
									layer.open({
										type: 1,
										title:"日程安排",
										skin: 'layui-layer-rim', //加上边框
										area: scheduleDialogWidth, //宽高
										zIndex:1030,
										content: lineDayhtml,
										scrollbar: false,    // 推荐禁用浏览器外部滚动条
										success:function(){
//											$(".travelLineDayForm .detailEditor").ace_wysiwyg({
//									    		toolbar:
//									    			[
//									    				'font',
//									    				null,
//									    				'fontSize',
//									    				null,
//									    				{name:'bold', className:'btn-info'},
//									    				{name:'italic', className:'btn-info'},
//									    				{name:'strikethrough', className:'btn-info'},
//									    				{name:'underline', className:'btn-info'},
//									    				null,
//									    				{name:'insertunorderedlist', className:'btn-success'},
//									    				{name:'insertorderedlist', className:'btn-success'},
//									    				{name:'outdent', className:'btn-purple'},
//									    				{name:'indent', className:'btn-purple'},
//									    				null,
//									    				{name:'justifyleft', className:'btn-primary'},
//									    				{name:'justifycenter', className:'btn-primary'},
//									    				{name:'justifyright', className:'btn-primary'},
//									    				{name:'justifyfull', className:'btn-inverse'},
//									    				null,
//									    				{name:'createLink', className:'btn-pink'},
//									    				{name:'unlink', className:'btn-pink'},
//									    				null,
//									    				{name:'insertImage', className:'btn-success'},
//									    				null,
//									    				'foreColor',
//									    				null,
//									    				{name:'undo', className:'btn-grey'},
//									    				{name:'redo', className:'btn-grey'}
//									    			]
//									    		}).prev().addClass('wysiwyg-style2');
										}
									});
								}
							}
				    	});
			    	});
				}
			});
		},
		updateTravelLine:function(id,clipboardMode){
			$.ajax({
				url:""+APP_ROOT+"back/travelLine.do?method=getTravelLineById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if (result) {
						var travelLineInfo = JSON.parse(data.travelLine);
						data.travelLine = travelLineInfo;
						data.clipboardMode = clipboardMode;
						var html = updateTemplate(data);
						var title = "修改线路模板信息";
						if(clipboardMode){
							title = "新增线路模板信息";
						}
						//已修改提示
			    		var validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
						if($(".tab-"+menuKey+"-update").length > 0) {
							addTab(updateId,title);
                 	    	if(!!travelLine.edited["update"] && travelLine.edited["update"] != ""){
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 travelLine.submitUpdateTraveLine(travelLine.updateClipboardMode,0);
									 travelLine.edited["update"] = "";
				            		 addTab(updateId,title,html);	
									 travelLine.initUpdate(clipboardMode);
				            		 validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
				            	},function(){
				            		addTab(updateId,title,html);
									travelLine.initUpdate(clipboardMode);
									validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));									
									travelLine.edited["update"] = "";
				            	}); 							
                 	    	 }else{
	                 	    	addTab(updateId,title,html);
								travelLine.initUpdate(clipboardMode);
	                 	        validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
                 	    	 } 
                 	    }else{
                 	    	addTab(updateId,title,html);
							travelLine.initUpdate(clipboardMode);
                 	    	validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
                 	    }
					}
				}
			});
		},
		initUpdate : function(clipboardMode){
			var $travelLupObj=$('#tab-resource_travelLine-update-content');
			travelLine.updateClipboardMode = clipboardMode;
			$travelLupObj.on("change",function(){
				travelLine.edited["update"] = "update";
			});
			// 初始化并绑定表单验证
			var validator = rule.traveLineCheckor($travelLupObj.find('.travelLineUpdateMainForm'));

			travelLine.updateClipboardMode = clipboardMode;
			// 添加行程安排
			$travelLupObj.find(".travelLineDayList .btn-line-day-add").click(function(){
				var lineDayHtml = editLineDayTemplate();
				var addTravelLineDayLayer = layer.open({
					type:1,
					title:"新增日程",
					skin: 'layui-layer-rim', //加上边框
					area: scheduleDialogWidth, //宽高
					zIndex:1029,
					content: lineDayHtml,
					success:function(){
						// 绑定表单验证
						var dayCheckor = rule.travelLineDayCheckor($('.editLineDayForm'));
						// 初始化UEditor
						var ue = init_editor("detailEditor-add-travelLine",{zIndex:99999999}, EDITOR_HEIGHT);

						$(".editLineDayForm .btn-submit-line-day").click(function(){
							if( !dayCheckor.form() )  return;

							function trim(str){ 
								 return str.replace(/(^\s*)|(\s*$)/g, ""); 
							}
							var repastDetail = $(".editLineDayForm input[name=repastDetail]").val();
							var hotelLevel = $(".editLineDayForm select[name=hotelLevel]").val();
							var whichDay = $(".editLineDayForm select[name=whichDay]").val();
							var level = "三星以下";
							if (hotelLevel == 0) {
								level = "未选择";
							}else if (hotelLevel == 1) {
								level = "三星以下";
							}else if (hotelLevel == 2) {
								level = "三星";
							}else if(hotelLevel == 3){
								level = "准四星";
							}else if(hotelLevel == 4){
								level = "四星";
							}else if(hotelLevel == 5){
								level = "准五星";
							}else if(hotelLevel == 6){
								level = "五星";
							}else if(hotelLevel == 7){
								level = "五星以上";
							}
							var title = $(".editLineDayForm input[name=title]").val();
							if(trim(title) == ""){
								showMessageDialog($( "#confirm-dialog-message" ), "请输入行程标题");
								return false;
							}
							var restPosition = $(".editLineDayForm input[name=restPosition]").val();
							var roadScenic = $(".editLineDayForm input[name=roadScenic]").val();
							var detail = encodeURIComponent(ue.getContent());
							if(trim(detail) == ""){
								showMessageDialog($( "#confirm-dialog-message" ), "请输入行程详情");
								return false;
							}
//									    		var day = $(".travelLineDayList .lineDayList tbody tr").length + 1;
							var lineDayHtml = "<tr><td>第"+whichDay+"天<input name=\"whichDay\" value=\""+whichDay+"\" type=\"hidden\"/></td><td>"+repastDetail+"</td><td>"+restPosition+"</td><td>"+level+"</td><td>"+title+"</td>" +
									"<td style=\"width:120px\"><div class=\"btn-group\"><a data-entiy-id=\"\" class=\" btn-line-day-edit cursor\">修改|</a>" +
									"<a data-entiy-id=\"\" class=\" btn-line-day-delete cursor\">删除</a></div>" +
									"<input type=\"hidden\" name=\"hotelLevel\" value=\""+hotelLevel+"\"/>" +
									"<input type=\"hidden\" name=\"roadScenic\" value=\""+roadScenic+"\"/>" +
									"<input type=\"hidden\" name=\"detail\" value=\""+detail+"\"/></td></tr>";
							$travelLupObj.find(".travelLineDayList .lineDayList tbody").append(lineDayHtml);
							$travelLupObj.find(".travelLineDayList .lineDayList .btn-line-day-edit").unbind().click(function(){
								travelLine.bindEditButton($(this));
							});
							
							$travelLupObj.find(".travelLineDayList .lineDayList .btn-line-day-delete").click(function(){
								travelLine.deleteDayDialog($(this));
							});
							
							layer.close(addTravelLineDayLayer);
						});
					}
				});
				
			});
			
			// 删除日期行程
			$travelLupObj.find(".travelLineDayList .lineDayList .btn-line-day-delete").click(function(){
				travelLine.deleteDayDialog($(this));
			});
			
			// 修改日期行程
			$travelLupObj.find(".travelLineDayList .lineDayList .btn-line-day-edit").unbind().click(function(){
				travelLine.bindEditButton($(this));
			});
			
			// 2.序列化form表单，并通过Ajax实现保存操作
			$travelLupObj.find(".travelLineDayList .btn-submit-travelLine").unbind().click(function(){
				travelLine.submitUpdateTraveLine(clipboardMode,1);
			});
		},
		scanLineProductDay:function(id){
			layer.open({
				type:2,
				title:"线路日程详情",
				area: ['360px', '720px'],
				scrollbar:true,
		        content: APP_ROOT + 'back/travelLine.do?method=getLineProductDayDetail&token='+$.cookie("token")+'&menuKey='+menuKey+'&operation=view&travelLineId='+id,
		        success:function(){
		        	
		        }
			});
		},
		deleteTravelLine:function(id){
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
								url:""+APP_ROOT+"back/travelLine.do?method=deleteTravelLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#"+tabId+"  .travelLineList .travelLine-"+id+"").fadeOut(function(){
											travelLine.listTravelLine(travelLine.pageData,travelLine.searchData.name,travelLine.searchData.status);
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
		bindEditButton:function(obj){
    		// 修改之后把新内容替换到原来的模板上
    		var modifyTr = obj.parent().parent().parent();
    		var id = obj.attr("data-entiy-id");
    		var day = obj.parent().parent().parent().find("input[name=whichDay]").val();
    		var repastDetail = modifyTr.find("td")[1].innerHTML;
    		var restPosition = modifyTr.find("td")[2].innerHTML;
    		var title = modifyTr.find("td")[4].innerHTML;
    		var hotelLevel = modifyTr.find("input[name=hotelLevel]").val();
    		var roadScenic = modifyTr.find("input[name=roadScenic]").val();
    		var detail = modifyTr.find("input[name=detail]").val();
    		detail = decodeURIComponent(detail);
			var lineDay = "{\"id\":\""+id+"\",\"whichDay\":\""+day+"\",\"repastDetail\":\""+repastDetail+"\",\"restPosition\":\""+restPosition+"\",\"title\":\""+title+"\",\"hotelLevel\":\""+hotelLevel+"\",\"roadScenic\":\""+roadScenic+"\"}" ; 
			var data = {};
			var lineDayInfo = JSON.parse(lineDay);
			data.lineDay = lineDayInfo;
			var lineDayHtml = updateLineDayTemplate(data);
			var updateTravelLineDayLayer = layer.open({
				type:1,
    			title:"修改日程",
    			skin: 'layui-layer-rim', //加上边框
 			    area: scheduleDialogWidth, //宽高
 			    zIndex:1029,
			    content: lineDayHtml,
			    success:function(){
			    	// $(".updateTravelLineDayForm select[name=whichDay]").attr("disabled","disabled");
			    	
			    	var ue = init_editor("detailEditor-update-travelLine",{zIndex:99999999}, EDITOR_HEIGHT);
			    	ue.ready(function(){
			    		ue.setContent(detail);
			    	});
			   
			    	// 提交修改后的信息
			    	$(".updateTravelLineDayForm .btn-submit-line-day").click(function(){
			    		var repastDetail = $(".updateTravelLineDayForm input[name=repastDetail]").val();
			    		var hotelLevel = $(".updateTravelLineDayForm select[name=hotelLevel]").val();
			    		var whichDay = $(".updateTravelLineDayForm select[name=whichDay]").val();
			    		var level = "三星以下";
			    		if (hotelLevel == 0) {
			    			level = "未选择";
			    		}else if (hotelLevel == 1) {
			    			level = "三星以下";
						}else if (hotelLevel == 2) {
							level = "三星";
						}else if(hotelLevel == 3){
							level = "准四星";
						}else if(hotelLevel == 4){
							level = "四星";
						}else if(hotelLevel == 5){
							level = "准五星";
						}else if(hotelLevel == 6){
							level = "五星";
						}else if(hotelLevel == 7){
							level = "五星以上";
						}
			    		var title = $(".updateTravelLineDayForm input[name=title]").val();
			    		var restPosition = $(".updateTravelLineDayForm input[name=restPosition]").val();
			    		var roadScenic = $(".updateTravelLineDayForm input[name=roadScenic]").val();
			    		var detail =  encodeURIComponent(ue.getContent());
			    		modifyTr.find("td")[0].innerHTML = "第"+whichDay+"天<input name=\"whichDay\" value=\""+whichDay+"\" type=\"hidden\"/>";
			    		modifyTr.find("td")[1].innerHTML = repastDetail;
			    		modifyTr.find("td")[2].innerHTML = restPosition;
			    		modifyTr.find("td")[3].innerHTML = level;
			    		modifyTr.find("input[name=hotelLevel]").val(hotelLevel);
			    		modifyTr.find("td")[4].innerHTML = title;
			    		modifyTr.find("input[name=roadScenic]").val(roadScenic);
			    		modifyTr.find("input[name=detail]").val(detail);
			    		layer.close(updateTravelLineDayLayer);
			    	});
			    }
			});
		},
		addLineProduct:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/travelLine.do?method=getTravelLineById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var travelLineInfo = JSON.parse(data.travelLine);
					data.travelLine = travelLineInfo;
					var result = showDialog(data);
					if(result){
						var html = addLineProductTemplate(data);
						addTab(menuKey+"-add","新增线路产品",html);
						
						// 初始化表单验证
						var validator = rule.lineProductCheckor($('.lineProductContainer'));
						//已填写提示  
						if($(".tab-"+menuKey+"-addLine").length > 0) {
							addTab(menuKey+"-add","新增线路产品");
							if(!!travelLine.edited["add"] && travelLine.edited["add"] != ""){
								showConfirmMsg($( "#confirm-dialog-message" ), "未保存的数据，是否放弃?",function(){
									console.log("继续编辑");			
								},function(){
									addTab(menuKey+"-add","新增线路产品",html);
									travelLine.initAddLineProduct(data);
									travelLine.edited["add"] = "";
								},"放弃","继续编辑"); 							
							 }else{
								addTab(menuKey+"-add","新增线路产品",html);
								travelLine.initAddLineProduct(data);					
							 } 
						}else{
							addTab(menuKey+"-add","新增线路产品",html);
							travelLine.initAddLineProduct(data);				
						}
					}
				}
			});
			
		},
		initAddLineProduct : function(data){
			$('.lineProductContainer').on("change",function(){
				travelLine.edited["add"] = "add";
				console.log("change-add");
			});
			var validator = rule.lineProductCheckor($('.lineProductContainer'));
			for(var i=0;i<data.travelLine.days;i++){
				var ue = init_editor("detailEditor-add-lineProduct-"+i+"");
			}
			travelLine.mousedownBlur();
			//添加具体行程安排相应事件
			$(".widgetSchedule .addRestaurant").bind("click", validator, travelLine.addRestaurant);//餐饮
			$(".widgetSchedule .addResourceHotel").bind("click", validator, travelLine.addResourceHotel);//酒店
			$(".widgetSchedule .addResourceScenic").bind("click", validator, travelLine.addResourceScenic);//景区
			$(".widgetSchedule .addResourceShopping").bind("click", validator, travelLine.addResourceShopping);//购物
			$(".widgetSchedule .addResourceSelfPaying").bind("click", validator, travelLine.addResourceSelfPaying);//自费
			$(".widgetSchedule .addResourceTraffic").bind("click", validator, travelLine.addResourceTraffic);//交通
			
			$(".lineProductContainer .submitInfoLineProduct").bind("click",travelLine.submitAddLineProduct);//绑定提交事件
			$('.scheduleListContainer').sortable({
				containment: 'parent',
				handle: ace.vars['touch'] ? '.table-bordered thead' : false,
				forceHelperSize:true,
				forcePlaceholderSize:true,
				tolerance:'pointer',
				update: function(event, ui) {
					var itemList = $(".scheduleListContainer .timeline-item");
					for(var i=0; i<itemList.length; i++){
						itemList.eq(i).attr("index", i);
					}
				}
			});

			
			$(".arrangeGuideList .chooseGuide").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).parent().parent().find("input[name=guideNameId]").val("");
						$(this).parent().parent().find("input[name=guideFee]").val("");
						$(this).parent().parent().find("input[name=gender]").val("");
						$(this).parent().parent().find("input[name=mobileNumber]").val("");
						$(this).parent().parent().find("input[name=guideLevel]").val("");
						$(this).parent().parent().find("input[name=company]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$.ajax({
						url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
						dataType: "json",
						showLoading: false,
						data:"id="+ui.item.id,
						success: function(data) {
							layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var guide = JSON.parse(data.guide);
								$(obj).parent().parent().find("input[name=guideNameId]").val(guide.id).trigger('change');
								if(guide.gender == 0){
									$(obj).parent().parent().find("input[name=gender]").val("男");
								}
								else{
									$(obj).parent().parent().find("input[name=gender]").val("女");
								}
								$(obj).parent().parent().find("input[name=mobileNumber]").val(guide.mobileNumber);
								var guideLevel = guide.guideLevel;
								if(guideLevel == 1){
									$(obj).parent().parent().find("input[name=guideLevel]").val("初级导游资格");
								}
								else if(guideLevel == 2){
									$(obj).parent().parent().find("input[name=guideLevel]").val("中级导游资格");
								}
								else if(guideLevel == 3){
									$(obj).parent().parent().find("input[name=guideLevel]").val("高级导游资格");
								}
								else if(guideLevel == 4){
									$(obj).parent().parent().find("input[name=guideLevel]").val("特级导游资格");
								}
								$(obj).parent().parent().find("input[name=company]").val(guide.company);

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							}
						}
					});
				}
			}).click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/guide.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
					dataType: "json",
					showLoading: false,
					success: function(data) {
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var guideList = JSON.parse(data.guideList);
							if(guideList != null && guideList.length > 0){
								for(var i=0;i<guideList.length;i++){
									guideList[i].value = guideList[i].realname;
								}
							}
							$(obj).autocomplete('option','source', guideList);
							$(obj).autocomplete('search', '');
						}
					}
				});
			});
			
			
			$(".arrangeInsuranceList .chooseInsurance").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).parent().parent().find("input[name=insuranceId]").val("");
						$(this).parent().parent().find("input[name=type]").val("");
						$(this).parent().parent().find("input[name=price]").val("");
						$(this).parent().parent().find("input[name=telNumber]").val("");
						$(this).parent().parent().find("input[name=managerName]").val("");
						$(this).parent().parent().find("input[name=mobileNumber]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$.ajax({
						url:""+APP_ROOT+"back/insurance.do?method=getInsuranceById&token="+$.cookie("token")+"&menuKey=resource_insurance&operation=view",
						dataType: "json",
                        showLoading: false,
						data:"id="+ui.item.id,
						success: function(data) {
							layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var insurance = JSON.parse(data.insurance);
								$(obj).parent().parent().find("input[name=insuranceId]").val(insurance.id).trigger('change');
								$(obj).parent().parent().find("input[name=telNumber]").val(insurance.telNumber);
								$(obj).parent().parent().find("input[name=managerName]").val(insurance.managerName);
								$(obj).parent().parent().find("input[name=mobileNumber]").val(insurance.mobileNumber);

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							}
						}
					});
				}
			}).click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/insurance.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_insurance&operation=view",
					dataType: "json",
					showLoading: false,
					success: function(data) {
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var insuranceList = JSON.parse(data.insuranceList);
							if(insuranceList != null && insuranceList.length > 0){
								for(var i=0;i<insuranceList.length;i++){
									insuranceList[i].value = insuranceList[i].name;
								}
							}
							$(obj).autocomplete('option','source', insuranceList);
							$(obj).autocomplete('search', '');
						}
					}
				});
			});
			
			var chooseBusLicenseNumber;
			$(".arrangeBusCompanyList .chooseBusCompany").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						var $tr = $(this).val("").closest('tr');
						$tr.find("input[name=busCompanyId]").val("");
						$tr.find("input[name=licenseNumber]").val("");
						$tr.find("input[name=seatPrice]").val("");
						$tr.find("input[name=seatCount]").val("");
						$tr.find("input[name=charteredPrice]").val("");
						$tr.find("input[name=mobileNumber]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				},
				select:function(event,ui){
					var $tr = $(this).blur().closest('tr');
					
					$tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					$tr.find("input[name=licenseNumber]").val("");
					$tr.find("input[name=seatPrice]").val("");
					$tr.find("input[name=seatCount]").val("");
					$tr.find("input[name=charteredPrice]").val("");
					$tr.find("input[name=mobileNumber]").val("");
					
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
					
					var obj = this, mobileNumber = "";
					
					if(chooseBusLicenseNumber){
						$(".arrangeBusCompanyList .chooseBusLicenseNumber").autocomplete( "destroy");
					}
					
					//给车辆绑定autocomplete事件
					chooseBusLicenseNumber = $(".arrangeBusCompanyList .chooseBusLicenseNumber").autocomplete({
						minLength:0,
						select:function(event,ui){
							
							//获得busId，到后台查询bus相应信息
							//var mobileNumber = data.mobileNumber;
							//$(obj).parent().parent().find("input[name=mobileNumber]").val(mobileNumber);
							$.ajax({
								url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
								dataType: "json",
								showLoading: false,
								data:"id="+ui.item.id,
								success: function(data) {
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										var d = JSON.parse(data.bus), objParent = $(obj).parent().parent();
										objParent.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
										objParent.find("input[name=seatPrice]").val(d.seatPrice);
										objParent.find("input[name=seatCount]").val(d.seatCount);
										objParent.find("input[name=mobileNumber]").val(d.mobileNumber);
										objParent.find("input[name=charteredPrice]").val(d.charteredPrice);
									}
								}
							 });
							
						},
						change:function(event,ui){
							if(ui.item == null){
								$(this).val("");
								var objParent = $(this).parent().parent();
								objParent.find("input[name=busLicenseNumberId]").val("");
								objParent.find("input[name=licenseNumber]").val("");
								objParent.find("input[name=seatPrice]").val("");
								objParent.find("input[name=seatCount]").val("");
								objParent.find("input[name=mobileNumber]").val("");
								objParent.find("input[name=charteredPrice]").val("");
							}
						}
					}).unbind("click").click(function(){
						var objBus = this;
						var busCompanyId = ui.item.id;
						var needSeatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
						$.ajax({
							url:""+APP_ROOT+"back/busCompany.do?method=findBusListBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
							dataType: "json",
							showLoading: false,
							data:"id="+busCompanyId+"&seatCount="+needSeatCount,
							success: function(data) {
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var busList = JSON.parse(data.busList);
									if(busList != null && busList.length){
										for(var i=0;i<busList.length;i++){
											busList[i].value = busList[i].licenseNumber;
										}
									}
									
									
									$(objBus).autocomplete('option','source', busList);
									$(objBus).autocomplete('search', '');
								}
							}
						 });
					});
				}
			}).click(function(){
				var obj = this;
				var needSeatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
				$.ajax({
					url:""+APP_ROOT+"back/busCompany.do?method=findBusCompanyBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
					dataType: "json",
					showLoading: false,
					data:"seatCount="+needSeatCount,
					success: function(data) {
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var busCompanyList = JSON.parse(data.busCompanyList);
							if(busCompanyList != null && busCompanyList.length > 0){
								for(var i=0;i<busCompanyList.length;i++){
									busCompanyList[i].value = busCompanyList[i].companyName;
								}
							}
							$(obj).autocomplete('option','source', busCompanyList);
							$(obj).autocomplete('search', '');
						}
					}
				});
			});
		},
		routeIndex : 0,
		addRestaurant:function(e){
			//添加行程安排餐饮
			var scheduleDetails = '<div class="timeline-item clearfix scheduleList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0 " ><i class="ace-icon fa fa-circle" ></i><span >餐饮</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th class="th-border">餐厅名称</th><th class="th-border">餐厅电话</th><th class="th-border">用餐类型</th><th class="th-border">餐标</th>	<th class="th-border">菜单列表</th><th class="th-border">备注</th>	<th style="width: 60px;" class="th-border">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseRestaurantName bind-change"/><input type="hidden" name="restaurantId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><select name="type" class="col-xs-12 restauranType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>'+
			'<td><input type="text" name="price" class="col-xs-12 restaurantStandardsName bind-change"/><input type="hidden" name="typeId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="menuList"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td><td><a data-entity-id="27" class=" btn-restaurant-delete deleteScheduleList cursor"> 删除</a></td></tr>'+
			'</tbody></table></div></div></div></div>',
			validator = e.data;

			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(scheduleDetails);
			travelLine.routeIndex += 1;
			//删除选中行程安排餐饮
			function deleteScheduleList(e){
				$(this).parents(".scheduleList").remove();
				travelLine.updateRouteIndex();
			}
			$(".scheduleList .deleteScheduleList").off().on("click", deleteScheduleList);
			
			
			$(".scheduleList .restauranType").on("change", function(){
				var typeParent = $(this).parent().parent();
				typeParent.find("input[name=price]").val("");
				typeParent.find("input[name=menuList]").val("");
				typeParent.find("input[name=pricePerPerson]").val("");
				typeParent.find("input[name=remark]").val("");
			});
			
			
			//绑定选择餐厅名称事件
			$(".scheduleList .chooseRestaurantName").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent();
						objParent.find("input[name=restaurantId]").val("");
						objParent.find("input[name=mobileNumber]").val("");
						objParent.find("input[name=payType]").val("");
						objParent.find("input[name=menuList]").val("");
						objParent.find("input[name=pricePerPerson]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				},
				select:function(event,ui){
					var obj = this, restaurantNameId=ui.item.id;
					var objParent = $(obj).parent().parent().parent();
					objParent.find("input[name=restaurantId]").val(restaurantNameId).trigger('change');
					objParent.find("input[name=typeName]").val("");
					objParent.find("input[name=menuList]").val("");
					objParent.find("input[name=pricePerPerson]").val("");

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
					
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=findRestaurantById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data:"id="+restaurantNameId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurant = JSON.parse(data.restaurant);
								objParent.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
								//objParent.find("input[name=payType]").val(restaurant.payType == 0? "现付" : "账期" + (restaurant.payPeriod ? "(" + restaurant.payPeriod.month + "个月)" : "" ));
								
								//为餐标名称绑定事件
								$(".scheduleList .restaurantStandardsName").autocomplete({
									minLength:0,
									change:function(event,ui){
										if(ui.item == null){
											$(this).val("");
											var objParent = $(this).parent().parent();
											objParent.find("input[name=pricePerPerson]").val("");
											objParent.find("input[name=menuList]").val("");
											objParent.find("input[name=typeId]").val("");
											objParent.find("input[name=remark]").val("");
										}
									},select:function(event,ui){
										var objEatName = this;
										var objParent = $(objEatName).parent().parent();
										objParent.find("input[name=typeId]").val(ui.item.id);
										$.ajax({
											url:""+APP_ROOT+"back/restaurant.do?method=findStandardDetailById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
						                    dataType: "json",
						                    showLoading:false,
						                    data:"id="+ui.item.id,
						                    success: function(data) {
						                    	layer.close(globalLoadingLayer);
												var result = showDialog(data);
												if(result){
													var restaurantStandard = JSON.parse(data.restaurantStandard);
													
													objParent.find("input[name=menuList]").val(restaurantStandard.menuList);
													
												}
						                    }
										});
									}
								}).unbind("click").click(function(){
									var objEat = this,
								    eatType = $(objEat).parent().parent().find("[name=type]").val();
									$.ajax({
										url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantStandardByType&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
					                    dataType: "json",
					                    showLoading:false,
					                    data:"restaurantId="+restaurantNameId+"&type="+eatType,
					                    success: function(data) {
					                    	layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												var restaurantStandardList = data.restaurantStandardList;
												if(restaurantStandardList && restaurantStandardList.length > 0){
													for(var i=0; i<restaurantStandardList.length; i++){
														restaurantStandardList[i].value = restaurantStandardList[i].price;
													}

													$(objEat).autocomplete('option','source', restaurantStandardList);
													$(objEat).autocomplete('search', '');
												}else{
													layer.tips('没有内容。', objEat, {
													    tips: [1, '#3595CC'],
													    time: 2000
													});
												}
											}
					                    }
									});
								});
							}
	                    }
					})
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var restaurantList = JSON.parse(data.restaurantList);
							if(restaurantList && restaurantList.length > 0){
								for(var i=0; i < restaurantList.length; i++){
									restaurantList[i].value = restaurantList[i].name;
								}
							}
							$(obj).autocomplete('option','source', restaurantList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			});
			
			
		},
		//添加酒店
		addResourceHotel:function(e){
			//添加行程安排酒店
			var hotelDetails = '<div class="timeline-item clearfix resourceHotelList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0 "><i class="ace-icon fa fa-circle" ></i><span >酒店</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th class="th-border">酒店星级</th><th class="th-border">酒店名称</th><th  class="th-border">房型</th><th class="th-border">价格</th><th  class="th-border">含餐</th><th  class="th-border">电话</th><th  class="th-border">备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
			'<td><input type="text" class="chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice" style="width:70px;"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td>'+
			'<td><a data-entity-id="27" class=" btn-restaurant-delete deleteResourceHotelList cursor"> 删除</a></td></tr></tbody></table></div></div></div></div>';

			var validator = e.data;
			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(hotelDetails);
			travelLine.routeIndex += 1;
			//删除选中行程安排酒店
			function deleteResourceHotelList(e){
				$(this).parents(".resourceHotelList").remove();
				travelLine.updateRouteIndex();
			}
			$(".resourceHotelList .deleteResourceHotelList").off().on("click", deleteResourceHotelList);
			
			//绑定选择酒店名称事件
			var $hotelStar = $(".resourceHotelList .resourceHotelStar");
			$hotelStar.on("change", function(){
				var parentObj = $(this).parent().parent();
				parentObj.find("input[name=hotelNmae]").val("");
				parentObj.find("input[name=hotelId]").val("");
				parentObj.find("input[name=hotelRoom]").val("");
				parentObj.find("input[name=hotelRoomId]").val("");
				parentObj.find("input[name=contractPrice]").val("");
				parentObj.find("input[name=containBreakfast]").val("");
				parentObj.find("input[name=mobileNumber]").val("");
				parentObj.find("input[name=payType]").val("");
				// 更新表单验证的配置
				validator = rule.lineProductUpdate(validator);
			});
			$(".resourceHotelList .chooseHotelName").autocomplete({
				minLength:0,
				select:function(event,ui){
					var obj=this, hotelDataId = ui.item.id,
					    objParent = $(obj).parent().parent();
					objParent.find("input[name=hotelId]").val(hotelDataId).trigger('change');	
					objParent.find("input[name=hotelRoom]").val("");					
					objParent.find("input[name=contractPrice]").val("");
					objParent.find("input[name=containBreakfast]").val("");
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);

					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data:"id=" + hotelDataId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var hotel = JSON.parse(data.hotel);
								objParent.find("input[name=mobileNumber]").val(hotel.mobileNumber);
								//objParent.find("input[name=payType]").val(hotel.payType == 0? "现付" : "账期" + (hotel.payPeriod ? "(" + hotel.payPeriod.month + "个月)" : "" ));
							}
	                    }
					});
					
					$(".resourceHotelList .chooseHotelRoom").autocomplete({
						minLength:0,
						select:function(event, ui){
							var _this = this;
							var thisParent = $(_this).parent().parent();
							thisParent.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
							$.ajax({
								url:""+APP_ROOT+"back/hotel.do?method=findRoomDetailById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
								dataType: "json",
								showLoading:false,
			                    data:"id=" + ui.item.id,
			                    success: function(data) {
			                    	layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										var hotelRoom = JSON.parse(data.hotelRoom);

										thisParent.find("input[name=contractPrice]").val(hotelRoom.contractPrice);
										thisParent.find("input[name=containBreakfast]").val(hotelRoom.containBreakfast == "0" ? "不含" : "包含");
									}
			                    }
							})
						},
						change:function(event, ui){
							if(ui.item == null){
								$(this).val("");
								var objParent = $(this).parent().parent();
								objParent.find("input[name=hotelRoomId]").val("");
								objParent.find("input[name=contractPrice]").val("");
								objParent.find("input[name=containBreakfast]").val("");
							}
						}
					}).unbind("click").click(function(){
						var objhotelRoom = this;
						if($(objhotelRoom).parent().parent().find("input[name=hotelNmae]").val() == ""){
							layer.tips('请先选择酒店名称。', objhotelRoom, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
							return false;
						}
						$.ajax({
							url:""+APP_ROOT+"back/hotel.do?method=findTypeByHotelId&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
		                    dataType: "json",
		                    showLoading:false,
		                    data:"id=" + hotelDataId,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var hotelRommList = JSON.parse(data.hotelRommList);
									if(hotelRommList && hotelRommList.length > 0){
										for(var i=0; i < hotelRommList.length; i++){
											hotelRommList[i].value = hotelRommList[i].type;
										}
										$(objhotelRoom).autocomplete('option','source', hotelRommList);
										$(objhotelRoom).autocomplete('search', '');
									}else{
										layer.tips('没有内容。', objhotelRoom, {
										    tips: [1, '#3595CC'],
										    time: 2000
										});
									}
								}
		                    }
		                });
					});
					
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent();
						objParent.find("input[name=hotelId]").val("");
						objParent.find("input[name=hotelRoomId]").val("");
						objParent.find("input[name=contractPrice]").val("");
						objParent.find("input[name=containBreakfast]").val("");
						objParent.find("input[name=hotelRoom]").val("");
						objParent.find("input[name=mobileNumber]").val("");
						objParent.find("input[name=payType]").val("");
					}
				}
			}).unbind("click").click(function(){
				var hotelStarValue = $hotelStar.val(),
				    obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findHotelListByLevel&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
                    dataType: "json",
                    showLoading:false,
                    data:"level=" + hotelStarValue,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var hotelList = JSON.parse(data.hotelList);
							if(hotelList && hotelList.length > 0){
								for(var i=0; i < hotelList.length; i++){
									hotelList[i].value = hotelList[i].name;
								}
								$(obj).autocomplete('option','source', hotelList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		//添加景区
		addResourceScenic:function(e){
			//添加行程安排景区
			var scenicDetails = '<div class="timeline-item clearfix resourceScenicList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0 "><i class="ace-icon fa fa-circle" ></i><span ><span >景区</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr  ><th class="th-border">景区名称</th><th class="th-border">收费项目</th><th class="th-border">景区价格</th><th class="th-border">联系电话</th><th class="th-border">备注</th><th style="width: 60px;" class="th-border">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseScenicName bind-change"/><input type="hidden" name="scenicId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseChargingProjects bind-change" name="chargingProjects"/><input type="hidden" name="chargingId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="price"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td>'+
			'<td><a data-entity-id="27" class=" btn-restaurant-delete deleteResourceScenicList cursor"> 删除 </a></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(scenicDetails);
			var validator = e.data;

			travelLine.routeIndex += 1;
			//删除选中行程安排景区
			function deleteResourceScenicList(e){
				$(this).parents(".resourceScenicList").remove();
				travelLine.updateRouteIndex();
			}
			$(".resourceScenicList .deleteResourceScenicList").off().on("click", deleteResourceScenicList);
			
			//绑定选择景区名称事件
			$(".resourceScenicList .chooseScenicName").autocomplete({
				minLength:0,
				select:function(event, ui){
					var obj = this,
					    objParent = $(obj).parent().parent(),
					    scenicNameId = ui.item.id;
					objParent.find("input[name=scenicId]").val(scenicNameId).trigger('change');
					objParent.find("input[name=chargingProjects]").val("");
					objParent.find("input[name=chargingId]").val("");
					objParent.find("input[name=price]").val("");

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
					
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+scenicNameId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var scenic = JSON.parse(data.scenic);
								objParent.find("input[name=mobileNumber]").val(scenic.mobileNumber);
							}
	                    }
	                });
					
					objParent.find(".chooseChargingProjects").autocomplete({
						minLength:0,
						select:function(event, nameUi){
							var nameUiId = nameUi.item.id, _this = this;
							var thisParent = $(_this).parent().parent();
							thisParent.find("input[name=chargingId]").val(nameUiId).trigger('change');
							
							$.ajax({
								url:""+APP_ROOT+"back/scenic.do?method=findItemDetailById&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
			                    dataType: "json",
			                    showLoading:false,
			                    data: "id="+nameUiId,
			                    success: function(data) {
			                    	layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										var scenicItem = JSON.parse(data.scenicItem);

										thisParent.find("input[name=price]").val(scenicItem.contractPrice);
									}
			                    }
			                });
						},
						change:function(event, ui){
							if(ui.item == null){
								$(this).val("");
								var thisParent = $(this).parent().parent();
								thisParent.find("input[name=chargingId]").val("");
								thisParent.find("input[name=price]").val("");
							}
						}
					}).unbind("click").click(function(){
						var scenicObj = this;
						
						if($(scenicObj).parent().parent().find(".chooseScenicName").val() == ""){
							layer.tips('请先选景区名称。', scenicObj, {
							    tips: [1, '#3595CC'],
							    time: 1500
							});
							return false;
						}
						
						$.ajax({
							url:""+APP_ROOT+"back/scenic.do?method=findItemByScenicId&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
		                    dataType: "json",
		                    showLoading:false,
		                    data: "id="+scenicNameId,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var scenicItemList = JSON.parse(data.scenicItemList);
									if(scenicItemList && scenicItemList.length > 0){
										for(var i=0; i < scenicItemList.length; i++){
											scenicItemList[i].value = scenicItemList[i].name;
										}
										$(scenicObj).autocomplete('option','source', scenicItemList);
										$(scenicObj).autocomplete('search', '');
									}else{
										layer.tips('没有内容。', scenicObj, {
										    tips: [1, '#3595CC'],
										    time: 2000
										});
									}
								}
		                    }
		                });
					});
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=scenicId]").val("");
						thisParent.find("input[name=chargingProjects]").val("");
						thisParent.find("input[name=chargingId]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=price]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var scenicList = JSON.parse(data.scenicList);
							if(scenicList && scenicList.length > 0){
								for(var i=0; i < scenicList.length; i++){
									scenicList[i].value = scenicList[i].name;
								}
								$(obj).autocomplete('option','source', scenicList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		//添加购物
		addResourceShopping:function(e){
			//添加行程安排购物
			var shoppingDetails = '<div class="timeline-item clearfix resourceShoppingList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >购物</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th class="th-border">商家名称</th><th class="th-border">商品政策</th><th class="th-border">联系电话</th><th class="th-border">停车返佣</th><th class="th-border">人数返佣</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseVendorName bind-change"/><input type="hidden" name="shopId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseGoodsPolicy bind-change" name="goodsPolicy"/><input type="hidden" name="shopPolicyId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="parkingRebateMoney" style="width: 100px;"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="customerRebateMoney" style="width: 100px;"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td>'+
			'<td><a data-entity-id="27" class=" btn-restaurant-delete deleteResourceShopList cursor">删除 </a></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(shoppingDetails);

			validator = e.data;
			travelLine.routeIndex += 1;
			//删除选中行程安排购物
			function deleteResourceShopList(e){
				$(this).parents(".resourceShoppingList").remove();
				travelLine.updateRouteIndex();
			}
			$(".resourceShoppingList .deleteResourceShopList").off().on("click", deleteResourceShopList);
			
			//绑定选择商家名称事件
			$(".resourceShoppingList .chooseVendorName").autocomplete({
				minLength:0,
				select:function(event, ui){
					var obj = this,
					    objParent = $(obj).parent().parent(),
					    vendorNameId = ui.item.id,
						policyParent = $(obj).parent().parent();
					policyParent.find("input[name=shopId]").val(vendorNameId).trigger('change');

					policyParent.find("input[name=goodsPolicy]").val("");
					policyParent.find("input[name=shopPolicyId]").val("");
					policyParent.find("input[name=parkingRebateMoney]").val("");
					policyParent.find("input[name=customerRebateMoney]").val("");
					
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);

					$.ajax({
						url:""+APP_ROOT+"back/shop.do?method=getShopById&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+vendorNameId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var shop = JSON.parse(data.shop);
								objParent.find("input[name=mobileNumber]").val(shop.mobileNumber);
								objParent.find("input[name=parkingRebateMoney]").val(shop.parkingRebateMoney);
								objParent.find("input[name=customerRebateMoney]").val(shop.customerRebateMoney);
							}
	                    }
	                });
					
					objParent.find(".chooseGoodsPolicy").autocomplete({
						minLength:0,
						select:function(event, nameUi){
							var nameUiId = nameUi.item.id, _this = this;
							var thisParent = $(this).parent().parent();
							thisParent.find("input[name=shopPolicyId]").val(nameUiId).trigger('change');
						},
						change:function(event, ui){
							if(ui.item == null){
								$(this).val("");
								var thisParent = $(this).parent().parent();
								thisParent.find("input[name=shopPolicyId]").val("");
								thisParent.find("input[name=parkingRebateMoney]").val("");
								thisParent.find("input[name=customerRebateMoney]").val("");
							}
						}
					}).unbind("click").click(function(){
						var shopObj = this;
						
						if($(shopObj).parent().parent().find(".chooseScenicName").val() == ""){
							layer.tips('请先选商家名称。', shopObj, {
							    tips: [1, '#3595CC'],
							    time: 1500
							});
							return false;
						}
						
						$.ajax({
							url:""+APP_ROOT+"back/shop.do?method=findPolicyByShopId&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
		                    dataType: "json",
		                    showLoading:false,
		                    data: "id="+vendorNameId,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var shopPolicyList = JSON.parse(data.shopPolicyList);
									if(shopPolicyList && shopPolicyList.length > 0){
										for(var i=0; i < shopPolicyList.length; i++){
											shopPolicyList[i].value = shopPolicyList[i].name;
										}
										$(shopObj).autocomplete('option','source', shopPolicyList);
										$(shopObj).autocomplete('search', '');
									}else{
										layer.tips('没有内容。', shopObj, {
										    tips: [1, '#3595CC'],
										    time: 2000
										});
									}
								}
		                    }
		                });
					});
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=shopId]").val("");
						thisParent.find("input[name=goodsPolicy]").val("");
						thisParent.find("input[name=shopPolicyId]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=parkingRebateMoney]").val("");
						thisParent.find("input[name=customerRebateMoney]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/shop.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var scenicList = JSON.parse(data.scenicList);
							if(scenicList && scenicList.length > 0){
								for(var i=0; i < scenicList.length; i++){
									scenicList[i].value = scenicList[i].name;
								}
								$(obj).autocomplete('option','source', scenicList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
                    }
                });
			});
		},
		//添加自费
		addResourceSelfPaying:function(e){
			//添加行程安排自费
			var selfPayingDetails = '<div class="timeline-item clearfix resourceSelfPayList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >自费</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th class="th-border">公司名称</th><th class="th-border">项目名称</th><th class="th-border">联系电话</th><th class="th-border">价格</th><th class="th-border">负责人</th><th class="th-border">备注</th><th style="width: 60px;" class="th-border">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseCompanyName bind-change"/><input type="hidden" name="companyId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseItemName bind-change"/><input type="hidden" name="selfPayItemId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice"/><input type="hidden" class="col-xs-12" readonly="readonly" name="marketPrice"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td>'+
			'<td><a data-entity-id="27" class=" btn-restaurant-delete deleteResourceSelfPayList cursor"> 删除 </a></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(selfPayingDetails);

			var validator = e.data;

			travelLine.routeIndex += 1;
			//删除选中行程安排自费
			function deleteResourceSelfPayList(e){
				$(this).parents(".resourceSelfPayList").remove();
				travelLine.updateRouteIndex();
			}
			$(".resourceSelfPayList .deleteResourceSelfPayList").off().on("click", deleteResourceSelfPayList);
			
			//绑定选择自费名称事件
			$(".resourceSelfPayList .chooseCompanyName").autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=getSelfPayById&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var selfpay = JSON.parse(data.selfpay) || {};
								var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=companyId]").val(ui.item.id).trigger('change');
								thisParent.find("input[name=mobileNumber]").val(selfpay.mobileNumber);
								//thisParent.find("input[name=contractPrice]").val(selfpay.contractPrice);
								thisParent.find("input[name=managerName]").val(selfpay.managerName);

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							}
	                    }
	                });
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=companyId]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						//thisParent.find("input[name=contractPrice]").val("");
						thisParent.find("input[name=managerName]").val("");
					}

					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/selfpay.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
					dataType:"json",
					showLoading:false,
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var selfPayList = JSON.parse(data.selfPayList);
							if(selfPayList && selfPayList.length > 0){
								for(var i=0; i < selfPayList.length; i++){
									selfPayList[i].value = selfPayList[i].name;
								}
								$(obj).autocomplete('option','source', selfPayList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			}),
			
			//公司对应项目
			$(".resourceSelfPayList .chooseItemName").autocomplete({
					minLength:0,
					select:function(event, ui){
						var _this = this;
						$.ajax({
							url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayRebateByItemId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
		                    dataType: "json",
		                    showLoading:false,
		                    data: "id="+ui.item.id,
		                    success: function(data) {
		                    	layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									var selfPayRebate = JSON.parse(data.selfPayRebate); 
	    							var thisParent = $(_this).parent().parent();
									thisParent.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
									thisParent.find("input[name=contractPrice]").val(selfPayRebate.price);
									thisParent.find("input[name=marketPrice]").val(selfPayRebate.marketPrice);
									//thisParent.find("input[name=remark]").val(ui.item.remark);
								}
		                    }
		                });
					},
					change:function(event, ui){
						if(ui.item == null){
							$(this).val("");
							var thisParent = $(this).parent().parent();
							thisParent.find("input[name=itemId]").val("");
							thisParent.find("input[name=contractPrice]").val("");
							thisParent.find("input[name=marketPrice]").val("");
						}
					}
				}).unbind("click").click(function(){
					var chooseCompanyNameId=$("input[name='companyId']").val();
					var obj = this;
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayItemBySelfPayId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
						dataType:"json",
						showLoading:false,
						data:"id="+chooseCompanyNameId,
						success:function(data){
							layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var selfPayItemList = JSON.parse(data.selfPayItemList); 
		
								if(selfPayItemList && selfPayItemList.length > 0){
									for(var i=0; i < selfPayItemList.length; i++){
										
										selfPayItemList[i].value = selfPayItemList[i].name;
									}
									$(obj).autocomplete('option','source', selfPayItemList);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容。', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				})			
		},
		
		
		
		//添加交通
		addResourceTraffic:function(e){
			//添加行程安排交通
			var shoppingDetails = '<div class="timeline-item clearfix resourceTicketList" index='+travelLine.routeIndex+'><div class="timeline-info" style="color:#1fade0" ><i class="ace-icon fa fa-circle" ></i><span >交通</span></div>'+
			'<div class="widget-box transparent" style="margin-top: 20px"><div class="widget-body"><div class=""><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th class="th-border">票务公司名称</th><th class="th-border">类型</th><th class="th-border">价格</th><th class="th-border">负责人</th><th class="th-border">联系电话</th><th class="th-border">公司电话</th><th class="th-border">备注</th><th class="th-border" style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
			'<td><select name="type" class="col-xs-12 form-control"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
			'<td><input type="text" class="col-xs-12" name="price"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="telNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark" maxLength="500" /></td>'+
			'<td><a data-entity-id="27" class="btn-restaurant-delete deleteResourceTicketList cursor"> 删除 </a></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".scheduleContainer").find(".scheduleListContainer").append(shoppingDetails);
			travelLine.routeIndex += 1;

			var validator = e.data;
			//删除选中行程安排交通
			function deleteResourceShopList(e){
				$(this).parents(".resourceTicketList").remove();
				travelLine.updateRouteIndex();
			}
			$(".resourceTicketList .deleteResourceTicketList").off().on("click", deleteResourceShopList);
			
			//绑定选择自费名称事件
			$(".resourceTicketList .chooseTicketName").autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/ticket.do?method=getTicketById&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var ticket = JSON.parse(data.ticket) || {};
								var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
								if (ui.item.type) {
									thisParent.find("select[name=type]").val(ui.item.type);
								}
								thisParent.find("input[name=managerName]").val(ticket.managerName);
								thisParent.find("input[name=mobileNumber]").val(ticket.mobileNumber);
								thisParent.find("input[name=telNumber]").val(ticket.telNumber);
							}
	                    }
	                });
	                // 更新表单验证的配置
	                validator = rule.lineProductUpdate(validator);
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=tickeId]").val("");
						thisParent.find("input[name=price]").val("");
						thisParent.find("input[name=managerName]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=telNumber]").val("");
					}
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/ticket.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
					dataType:"json",
					showLoading:false,
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var ticketList = JSON.parse(data.ticketList);
							if(ticketList && ticketList.length > 0){
								for(var i=0; i < ticketList.length; i++){
									ticketList[i].value = ticketList[i].name;
								}
								$(obj).autocomplete('option','source', ticketList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容。', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			});
		},
		submitAddLineProduct:function(){
			var validator = rule.lineProductCheckor($('.lineProductContainer'));
			if (!validator.form())  return;

			var $form = $(".lineProductContainer > form"), travelLineData;
			function getValue(obj, name){
				var thisObj = obj.find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}
			function trim(str)
	         { 
	             return str.replace(/(^\s*)|(\s*$)/g, ""); 
	         }
			var name = getValue($form.eq(0), "name");
			if(trim(name) == ""){
				showMessageDialog($( "#confirm-dialog-message" ), "请输入线路产品名称");
				return false;
			}
			travelLineData = {
					lineProduct : [{
						name : getValue($form.eq(0), "name"),
						travellineId: getValue($form.eq(0), "travellineId"),
						remark : getValue($form.eq(0), "remark"),
						type : getValue($form.eq(0), "type"),
						customerType : getValue($form.eq(0), "customerType"),
						status : getValue($form.eq(0), "status")
					}],
					guide : [{
						guideId : getValue($form.eq(1).find(".arrangeGuideList"), "guideNameId"),
						price : getValue($form.eq(1).find(".arrangeGuideList"), "guideFee"),
						remark : getValue($form.eq(1).find(".arrangeGuideList"), "remark")
					}],
					insurance : [{
						insuranceId : getValue($form.eq(1).find(".arrangeInsuranceList"), "insuranceId"),
						type : getValue($form.eq(1).find(".arrangeInsuranceList"), "type"),
						price : getValue($form.eq(1).find(".arrangeInsuranceList"), "price"),
						remark : getValue($form.eq(1).find(".arrangeInsuranceList"), "remark")
					}],
					busCompany : [{
						needSeatCount : getValue($form.eq(1).find(".arrangeBusCompanyList"), "needSeatCount"),
						busCompanyId : getValue($form.eq(1).find(".arrangeBusCompanyList"), "busCompanyId"),
						busId : getValue($form.eq(1).find(".arrangeBusCompanyList"), "busLicenseNumberId"),
						price : getValue($form.eq(1).find(".arrangeBusCompanyList"), "seatPrice"),
						remark : getValue($form.eq(1).find(".arrangeBusCompanyList"), "remark")
					}],
					lineDayList : []
			}
			
			var dayList = $form.eq(1).find(".travelLineDayList");
			for(var i=0; i<dayList.length; i++){
				
				travelLineData.lineDayList[i] = {
						detailEditor : encodeURIComponent(UE.getEditor("detailEditor-add-lineProduct-"+i+"").getContent()),
						restaurant : [],
						hotel : [],
						scenic : [],
						shop : [],
						selfPay : [],
						ticket : []
				}
				//获取餐饮
				var scheduleList = dayList.eq(i).find(".scheduleList");
				if(scheduleList.length > 0){
					for(var j = 0; j < scheduleList.length; j++){
						var restaurantId = scheduleList.eq(j).find("input[name=restaurantId]").val();
						if(restaurantId){
							var standardId = scheduleList.eq(j).find("[name=typeId]").val();
							if(!standardId){
								showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天中【餐厅】的餐标！");
								return false;
							}
							var restaurantJson = {
									restaurantId : restaurantId,
									standardId : standardId,
									price : scheduleList.eq(j).find("[name=pricePerPerson]").val(),
									remark : scheduleList.eq(j).find("[name=remark]").val(),
									orderIndex : scheduleList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].restaurant.push(restaurantJson);
						}
					}
				}
				//获取酒店
				var hotelList = dayList.eq(i).find(".resourceHotelList");
				if(hotelList.length > 0){
					for(var j=0; j<hotelList.length;j++){
						var hotelId = hotelList.eq(j).find("input[name=hotelId]").val();
						if(hotelId){
							var hotelRoomId = hotelList.eq(j).find("[name=hotelRoomId]").val();
							if(!hotelRoomId){
								showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天【酒店】的房型！");
								return false;
							}
							var hotelJson = {
									hotelId : hotelId,
									hotelRoomId : hotelRoomId,
									price : hotelList.eq(j).find("[name=contractPrice]").val(),
									remark : hotelList.eq(j).find("[name=remark]").val(),
									orderIndex : hotelList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].hotel.push(hotelJson)
						}
					}
				}
				//获取景区
				var scenicList = dayList.eq(i).find(".resourceScenicList");
				if(scenicList.length > 0){
					for(var j=0; j<scenicList.length;j++){
						var scenicId = scenicList.eq(j).find("[name=scenicId]").val();
						if(scenicId){
							var itemId = scenicList.eq(j).find("[name=chargingId]").val();
							if(!itemId){
								showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天【景区】的收费项目！");
								return false;
							}
							var scenicJson= {
									scenicId : scenicId,
									itemId : itemId,
									price : scenicList.eq(j).find("[name=price]").val(),
									remark : scenicList.eq(j).find("[name=remark]").val(),
									orderIndex : scenicList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].scenic.push(scenicJson);
						}
						
					}
				}
				//获取购物
				var shopList = dayList.eq(i).find(".resourceShoppingList");
				if(shopList.length > 0){
					for(var j=0; j<shopList.length;j++){
						var shopId = shopList.eq(j).find("[name=shopId]").val();
						if(shopId){
							var policyId = shopList.eq(j).find("[name=shopPolicyId]").val();
							if(!policyId){
								showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天【购物】的商品政策！");
								return false;
							}
							var shopJson = {
									shopId : shopId,
									policyId : policyId,
									remark : shopList.eq(j).find("[name=remark]").val(),
									orderIndex : shopList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].shop.push(shopJson);
						}
					}
				}
				//获取自费
				var selfPayList = dayList.eq(i).find(".resourceSelfPayList");
				if(selfPayList.length > 0){
					for(var j=0; j<selfPayList.length;j++){
						var selfPayId = selfPayList.eq(j).find("[name=companyId]").val();
						if(!selfPayId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天【自费】的公司名称！");
							return false;
						}
						if(selfPayId){
							var selfPayJson = {
									selfPayId : selfPayId,
									price : selfPayList.eq(j).find("[name=contractPrice]").val(),
									marketPrice : selfPayList.eq(j).find("[name=marketPrice]").val(),
									remark : selfPayList.eq(j).find("[name=remark]").val(),
									selfPayItemId : selfPayList.eq(j).find("[name=selfPayItemId]").val(),   
									orderIndex : selfPayList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].selfPay.push(selfPayJson);
						}
						
					}
				}
				//获取交通
				var ticketList = dayList.eq(i).find(".resourceTicketList");
				if(ticketList.length > 0){
					for(var j=0; j<ticketList.length;j++){
						var ticketId = ticketList.eq(j).find("[name=tickeId]").val();
						if(!ticketId){
							showMessageDialog($( "#confirm-dialog-message" ), "请选择第" + (i+1) + "天【交通】的票务公司名称！");
							return false;
						}
						if(ticketId){
							ticketJson = {
									ticketId : ticketId,
									type : ticketList.eq(j).find("[name=type]").val(),
									price : ticketList.eq(j).find("[name=price]").val(),
									remark : ticketList.eq(j).find("[name=remark]").val(),
									orderIndex : ticketList.eq(j).attr("index")
								}
							travelLineData.lineDayList[i].ticket.push(ticketJson);
						}
					}
				} 
				
			}
			var lineDataJson = JSON.stringify(travelLineData);

			$.ajax({
    			url:""+APP_ROOT+"back/lineProduct.do?method=addLineProduct&token="+$.cookie("token")+"&menuKey=resource_lineProduct&operation=add",
				type:"POST",
				data:"LineProductJsonAdd="+encodeURIComponent(lineDataJson),
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						//layer.close(addTravelLineLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							closeTab(menuKey+"-add");
						});
						//travelLine.listTravelLine(data.totalPage-1,name,status);
						// 查看线路行程安排
						/*layer.open({
							type:2,
							title:"线路日程详情",
							area: ['360px', '720px'],
							scrollbar:true,
					        content: APP_ROOT + 'back/lineProduct.do?method=getLineProductDayDetail&token='+$.cookie("token")+'&menuKey='+menuKey+'&operation=view&lineProductId='+data.id,
					        success:function(){
					        	
					        }
						});*/
					}
				}
    		});
		},
		updateRouteIndex:function(){
			travelLine.routeIndex -= 1;
			var itemList = $(".scheduleListContainer .timeline-item");
			for(var i=0; i<itemList.length; i++){
				itemList.eq(i).attr("index", i);
			}
		}
		,
		deleteDayDialog:function(obj){
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
							var lineDayId = obj.attr("data-entiy-id");
							var tr = obj.parent().parent().parent();
							if (lineDayId != null && lineDayId != "") {
								tr.addClass("deleted");
								tr.fadeOut(function(){
									tr.hide();
								});
							}else{
								tr.addClass("deleted");
								tr.fadeOut(function(){
									tr.remove();
								});
							}
							$( this ).dialog( "close" );
							
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该条记录？");
				}
    		});
		},
		submitAddTravelLine : function(){
			var $travelLiAddObj=$("#tab-resource_travelLine-addLine-content");
			var validator = rule.traveLineCheckor($travelLiAddObj.find('.travelLineMainForm'));
			// 表单验证
			if (!validator.form())  return;

			var status = 0;
			if($travelLiAddObj.find(".travelLineMainForm .travelLine-status").is(":checked") == true){
				status = 1;
			}
			var form = $travelLiAddObj.find(".travelLineMainForm").serialize()+"&status="+status+"";
			var travelLineJsonAdd = [];
			var lineDayListStr = $travelLiAddObj.find(".travelLineDayList .lineDayList tbody tr");
			lineDayListStr.each(function(i){
				var repastDetail = lineDayListStr.eq(i).find("td")[1].innerHTML;
				var restPosition = lineDayListStr.eq(i).find("td")[2].innerHTML;
				var level = lineDayListStr.eq(i).find("td")[3].innerHTML;
				var title = lineDayListStr.eq(i).find("td")[4].innerHTML;
				var roadScenic = lineDayListStr.eq(i).find("input[name=roadScenic]").val();
				var detail = lineDayListStr.eq(i).find("input[name=detail]").val();
				var whichDay = lineDayListStr.eq(i).find("input[name=whichDay]").val();
				var hotelLevel = 0;
				if (level == "未选择") {
					hotelLevel = 0;
				}else if (level == "三星以下") {
					hotelLevel = 1;
				}else  if(level == "三星"){
					hotelLevel = 2;
				}else if(level == "准四星"){
					hotelLevel = 3;
				}else if(level == "四星"){
					hotelLevel = 4;
				}else if(level == "准五星"){
					hotelLevel = 5;
				}else if(level == "五星"){
					hotelLevel = 6;
				}else if(level == "五星以上"){
					hotelLevel = 7;
				}
				var lineDayJson = {
					whichDay : whichDay,
					repastDetail : repastDetail,
					hotelLevel : hotelLevel,
					title : title,
					restPosition : restPosition,
					roadScenic : roadScenic,
					detail : detail
				};
				travelLineJsonAdd.push(lineDayJson);
			});
			travelLineJsonAdd = JSON.stringify(travelLineJsonAdd);
			// 保存线路
			$.ajax({
				url:""+APP_ROOT+"back/travelLine.do?method=saveTravelLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
				type:"POST",
				data:form+"&travelLineJsonAdd="+encodeURIComponent(travelLineJsonAdd)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						//layer.close(addTravelLineLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						travelLine.edited["addLine"] = "";
						closeTab(addLineId);
						travelLine.listTravelLine(data.totalPage-1,name,status);
					}
				}
			});
		},
		submitUpdateTraveLine : function(clipboardMode,isClose){
			var $updateObj=$("#tab-resource_travelLine-update-content");
			var validator = rule.traveLineCheckor($('.travelLineUpdateMainForm'));
			if ( !validator.form() )  return;
			var status = 0;
			if($updateObj.find(".travelLineUpdateMainForm .travelLine-status").is(":checked") == true){
				status = 1;
			}
			var form = $updateObj.find(".travelLineUpdateMainForm").serialize()+"&status="+status+"";
			var travelLineJsonAdd = "[";
			var lineDayListLength = $updateObj.find(".travelLineDayList .lineDayList tbody tr:not(.deleted)").length;
			$updateObj.find(".travelLineDayList .lineDayList tbody tr:not(.deleted)").each(function(i){
				var lineDayJson = "";
				var id = $(this).find(" .btn-line-day-delete").attr("data-entiy-id");
				var repastDetail = $(this).find("td")[1].innerHTML;
				var restPosition = $(this).find("td")[2].innerHTML;
				var title = $(this).find("td")[4].innerHTML;
				var whichDay = $(this).find("input[name=whichDay]").val();
				var roadScenic = $(this).find("input[name=roadScenic]").val();
				var detail = $(this).find("input[name=detail]").val();
				var hotelLevel = $(this).find("input[name=hotelLevel]").val();
				if (i == (lineDayListLength -1)) {
					if (id != null && id != "") {
						lineDayJson = "{\"id\":\""+id+"\",\"whichDay\":\""+whichDay+"\",\"repastDetail\":\""+repastDetail+"\",\"hotelLevel\":\""+hotelLevel+"\",\"title\":\""+title+"\",\"restPosition\":\""+restPosition+"\",\"roadScenic\":\""+roadScenic+"\",\"detail\":\""+detail+"\"}";
					}else{
						lineDayJson = "{\"whichDay\":\""+whichDay+"\",\"repastDetail\":\""+repastDetail+"\",\"hotelLevel\":\""+hotelLevel+"\",\"title\":\""+title+"\",\"restPosition\":\""+restPosition+"\",\"roadScenic\":\""+roadScenic+"\",\"detail\":\""+detail+"\"}";
					}
				}else{
					if (id != null && id != "") {
						lineDayJson = "{\"id\":\""+id+"\",\"whichDay\":\""+whichDay+"\",\"repastDetail\":\""+repastDetail+"\",\"hotelLevel\":\""+hotelLevel+"\",\"title\":\""+title+"\",\"restPosition\":\""+restPosition+"\",\"roadScenic\":\""+roadScenic+"\",\"detail\":\""+detail+"\"},";
					}else {
						lineDayJson = "{\"whichDay\":\""+whichDay+"\",\"repastDetail\":\""+repastDetail+"\",\"hotelLevel\":\""+hotelLevel+"\",\"title\":\""+title+"\",\"restPosition\":\""+restPosition+"\",\"roadScenic\":\""+roadScenic+"\",\"detail\":\""+detail+"\"},";
					}
				}
				travelLineJsonAdd += lineDayJson; 
			});
			travelLineJsonAdd += "]";
		
			var travelLineJsonDel = "[";
			var travelLineListLength = $updateObj.find(".travelLineDayList .lineDayList tbody tr.deleted").length;
			$updateObj.find(".travelLineDayList .lineDayList tbody tr.deleted").each(function(i){
				var travelLineDayJson = "";
				var id = $(this).find(".btn-line-day-delete").attr("data-entiy-id");
				if(i == (travelLineListLength-1)){
					travelLineDayJson = "{\"id\":\""+id+"\"}";
				}
				else{
					travelLineDayJson = "{\"id\":\""+id+"\"},";
				}
				travelLineJsonDel += travelLineDayJson;
			});
			travelLineJsonDel += "]";
		
			var url = ""+APP_ROOT+"back/travelLine.do?method=updateTravelLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update";
			if(travelLine.updateClipboardMode){
				url = ""+APP_ROOT+"back/travelLine.do?method=saveTravelLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add";
			}
			$.ajax({
				url:url,
				type:"POST",
				data:form+"&travelLineJsonAdd="+encodeURIComponent(travelLineJsonAdd)+"&travelLineJsonDel="+encodeURIComponent(travelLineJsonDel)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						type:3
					});
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						//layer.close(updateTravelLineLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						travelLine.edited["update"] = "";
						if(isClose == 1){
							closeTab(updateId);
							travelLine.listTravelLine(travelLine.pageData.pageNo,travelLine.searchData.name,travelLine.searchData.status);
						}
					}
				}
			});
		},
		save : function(saveType){
			if(saveType == "addLine"){
				travelLine.submitAddTravelLine();
			} else if(saveType == "update"){
				travelLine.submitUpdateTraveLine(travelLine.updateClipboardMode,1);
			} else if(saveType == "add"){
				travelLine.submitAddLineProduct();
			}
		},
		clearEdit : function(clearType){
			travelLine.edited[clearType] = "";
		},
		mousedownBlur :function(){
			$("#tab-resource_travelLine-add-content .scheduleListContainer").mousedown(function() {
				$(this).find(":focus").blur();
			});
		}
	}
	
	exports.listTravelLine = travelLine.listTravelLine;
	exports.isEdited = travelLine.isEdited;
	exports.save = travelLine.save;
	exports.clearEdit = travelLine.clearEdit;
});