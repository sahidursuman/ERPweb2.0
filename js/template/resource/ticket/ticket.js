define(function(require, exports) {
	var menuKey = "resource_ticket",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		rule = require('./ticketRule');
		tabId = "tab-" + menuKey + "-content";
	var ticket = {
		searchData : {
			name : "",
			status : ""
		},
		listTicket:function(page,name,status){
			ticket.searchData.name = name;
			ticket.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/ticket.do?method=listTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var ticketList = data.ticketList;
						ticketList = JSON.parse(ticketList);
						data.ticketList = ticketList;
						var html = listTemplate(data);
						addTab(menuKey,"票务管理",html);
						
						$("#"+tabId+" .ticketList .btn-ticket-view").click(function(){
							var id = $(this).attr("data-entity-id");
							ticket.viewTicket(id);
							// 再调整对话框的高度
							$(window).trigger('resize');
						});
						$("#"+tabId+" .ticketList .btn-ticket-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							ticket.updateTicket(id,data.pageNo);
						});
						
						$("#"+tabId+" .ticketList .btn-ticket-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							ticket.deleteTicket(this,id,data.pageNo);
						});
						
						$("#"+tabId+" .btn-ticket-add").click(function(){
							ticket.addTicket();
						});
						
						
						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							ticket.searchData = {
								name : $("#"+tabId+" .search-area input[name=ticket_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							ticket.listTicket(0,ticket.searchData.name,ticket.searchData.status);
						});
						//搜索按钮事件
						$("#"+tabId+" .btn-ticket-search").click(function(){
							ticket.searchData = {
								name : $("#"+tabId+" input[name=ticket_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							ticket.listTicket(0,ticket.searchData.name,ticket.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							ticket.listTicket(0,ticket.searchData.name,ticket.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							ticket.listTicket(previous,ticket.searchData.name,ticket.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							ticket.listTicket(next,ticket.searchData.name,ticket.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							ticket.listTicket(data.totalPage == 0?data.totalPage:data.totalPage-1,ticket.searchData.name,ticket.searchData.status);
						});
					}
				}
			});
		},
		addTicket:function(){
			var html = addTemplate();
			var addTicketLayer = layer.open({
			    type: 1,
			    title:"新增票务公司",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['800px', '360px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addTicketContainer .ticketMainForm");
			    	var validator = rule.check($(".addTicketContainer .ticketMainForm"));
			    	//初始化省数据
			    	ticket.getProvinceList($obj.find("select[name=provinceId]"));
			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId!=''){
				    		ticket.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}else{
				    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		ticket.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
				    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		ticket.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
				    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
					$obj.find(".btn-submit-ticket").click(function(){
						if(!validator.form()){return}
						var status = 0;
						if($obj.find(".ticket-status").is(":checked") == true){
							status = 1;
						}
						var form = $obj.serialize()+"&status="+status+"";
						$.ajax({
							url:""+APP_ROOT+"back/ticket.do?method=addTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
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
									layer.close(addTicketLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									ticket.listTicket(0,"","");
								}
							}
						});
					});
			    }
			});
		},
		updateTicket:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/ticket.do?method=getTicketById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var ticketInfo = JSON.parse(data.ticket);
						data.ticket = ticketInfo;
						var html = updateTemplate(data);
						var updateTicket = layer.open({
						    type: 1,
						    title:"编辑票务公司信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['800px', '360px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var $obj = $(".updateTicketContainer .ticketMainForm");
						    	var validator = rule.check($(".updateTicketContainer .ticketMainForm"));
								//级联选择城市列表
								var provinceId = "";
								if(data.ticket.provinceId != null){
									provinceId = data.ticket.provinceId;
									var cityId = "";
									if(data.ticket.cityId != null){
										cityId = data.ticket.cityId;

										var districtId = "";
										if(data.ticket.districtId != null){
											districtId = data.ticket.districtId;
										}
										ticket.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
									}
									ticket.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
								}
								ticket.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId!=''){
							    		ticket.getCityList($obj.find("select[name=cityId]"),provinceId);
						    		}else{
							    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});
						    	
						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						       		if(cityId!=''){
							    		ticket.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}else{
							    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	
						    	
						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.ticket.provinceId != null){
						    		provinceId = data.ticket.provinceId;
						    	}
						    	ticket.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	var cityId = "";
						    	if(data.ticket.cityId != null){
						    		cityId = data.ticket.cityId;
						    		ticket.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    		
						    		var districtId = "";
						    		if(data.ticket.districtId != null){
						    			districtId = data.ticket.districtId;
						    			ticket.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
						    		}
						    	}
						    	
						    	
						    	//提交表单
						    	$obj.find(".btn-submit-ticket").click(function(){
						    		if(!validator.form()){return}
						    		var status = 0;
									if($obj.find(".ticket-status").is(":checked") == true){
										status = 1;
									}
									
						    		var form = $obj.serialize()+"&status="+status+"";
						    		$.ajax({
										url:""+APP_ROOT+"back/ticket.do?method=updateTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form,
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(updateTicket);
											var result = showDialog(data);
											if(result){
												layer.close(updateTicket);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												ticket.listTicket(pageNo,ticket.searchData.name,ticket.searchData.status);
											}else{
												ticket.listTicket(0,ticket.searchData.name,ticket.searchData.status);
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
		deleteTicket:function(obj,id,pageNo){
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
								url:""+APP_ROOT+"back/ticket.do?method=deleteTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#"+tabId+" .ticketList .ticket-"+id+"").fadeOut(function(){
											ticket.listTicket(pageNo,ticket.searchData.name,ticket.searchData.status);
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
		viewTicket:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/ticket.do?method=getTicketById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var ticketInfo = JSON.parse(data.ticket);
						data.ticket = ticketInfo;
						var html = viewTemplate(data);
						layer.open({
						    type: 1,
						    title:"查看票务公司",
						    skin: 'layui-layer-rim', //加上边框
						    area:'1024px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						});
					}
				}
			});
		},
		getProvinceList:function(obj,provinceId){
			$.ajax({
				url:""+APP_ROOT+"/base.do?method=getProvince",
				type:"POST",
				dataType:"json",
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
		},
		getCityList:function(obj,provinceId,cityId){
			if(provinceId != ""){
				$.ajax({
					url:""+APP_ROOT+"/base.do?method=getCity",
					type:"POST",
					data:"provinceId="+provinceId+"",
					dataType:"json",
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
		},
		getDistrictList:function(obj,cityId,districtId){
			if(cityId != ""){
				$.ajax({
					url:""+APP_ROOT+"/base.do?method=getDistrict",
					type:"POST",
					data:"cityId="+cityId+"",
					dataType:"json",
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
		}
	}
	exports.listTicket = ticket.listTicket;
});
