define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_partnerAgency",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		scanDetailTemplate = require("./view/view"),
		addHeaderAgencyTemplate = require("./view/addHeaderAgency"),
		tabId = "tab-"+menuKey+"-content";
	var partnerAgency = {
		searchData:{
			travelAgencyName:"",
			status:"1"
		},
		listPartnerAgency:function(page,travelAgencyName,status){
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=listPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&travelAgencyName="+encodeURIComponent(travelAgencyName)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
			 		if (result) {
						var partnerAgencyList = data.partnerAgencyList;
						partnerAgencyList = JSON.parse(partnerAgencyList);
						data.partnerAgencyList = partnerAgencyList;
						var html = listTemplate(data);
						addTab(menuKey,"同行管理",html);

						//新增同行旅行社button事件
						$("#"+tabId+" .btn-partnerAgency-add").click(function(){
							partnerAgency.addPartnerAgency();
						});

						//修改同行旅行社button事件
						$("#"+tabId+" .btn-partnerAgency-edit").click(function(){
							var id = $(this).attr("data-entiy-id");
							partnerAgency.updatePartnerAgency(id);
						});

						//查看同行旅行社详情button事件
						$("#"+tabId+" .btn-partnerAgency-view").click(function(){
							var id = $(this).attr("data-entiy-id");
							partnerAgency.viewPartnerAgency(id);
						});

						//删除同行旅行社button事件
						$("#"+tabId+" .btn-partnerAgency-delete").click(function(){
							var id = $(this).attr("data-entiy-id");
							partnerAgency.deletePartnerAgency(id);
						});

						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							partnerAgency.searchData = {
								travelAgencyName : $("#"+tabId+" .search-area input[name=partnerAgency_travelAgencyName]").val(),
								status : $("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
							};
							partnerAgency.listPartnerAgency(0,partnerAgency.searchData.travelAgencyName,partnerAgency.searchData.status);
						});

						//搜索按钮事件
						$("#"+tabId+" .btn-partnerAgency-search").click(function(){
							var travelAgencyName = $("#"+tabId+" .search-area input[name=partnerAgency_travelAgencyName]").val();
							var status = $("#"+tabId+" .search-area .btn-status").find("button").attr("data-value");
							partnerAgency.searchData = {
								travelAgencyName : travelAgencyName,
								status : status
							};
							partnerAgency.listPartnerAgency(0,partnerAgency.searchData.travelAgencyName,partnerAgency.searchData.status);
						});

						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		partnerAgency.listPartnerAgency(obj.curr -1,partnerAgency.searchData.travelAgencyName,partnerAgency.searchData.status);
						    	}
						    }
						});
					}
				}
			});

		},
		addPartnerAgency:function(){
			var html = addTemplate();
			var addPartnerAgencyLayer = layer.open({
			    type: 1,
			    title:"新增同行旅行社",
			    skin: 'layui-layer-rim', //加上边框
			    area: '1190px', //宽高
			    zIndex:1028,
			    content: html,

			    success:function(){
                  //vnb vcnvbn
			    	var $obj = $(".addPartnerAgencyContainer .form-horizontal");
			    	// 设置表单验证
			    	var validator = rule.partnerAgencyCheckor($('.partnerAgencyMainForm'));

			    	var $obj = $(".addPartnerAgencyContainer .partnerAgencyMainForm"); 
			    	partnerAgency.getProvinceList($obj.find("select[name=provinceId]")); 
			    	$obj.find("select[name=provinceId]").change(function(){
						var provinceId = $(this).val();
						if(provinceId != ""){
							partnerAgency.getCityList($obj.find("select[name=cityId]"),provinceId);
						}
						else{
							$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						}
						$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
					});
			    	$obj.find("select[name=cityId]").change(function(){
						var cityId = $(this).val();
						if(cityId != ""){
							partnerAgency.getDistrictList($obj.find("select[name=districtId]"),cityId); 
						}
						else{
							$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						}
					}); 


			    	// 新加总社信息下拉列表
			    	partnerAgency.getHeaderPartnerAgency($obj.find("select[name=headPartnerAgency]"),null);
			    	$(".addPartnerAgencyContainer .addheaderPartnerAgency").click(function(){ // 弹出添加总社框
			    		partnerAgency.addheaderPartnerAgency($obj);
			    	});

			    	$tbody = $(".addPartnerAgencyContainer .contactList tbody");
			    	$(".addPartnerAgencyContainer .contactList .btn-contact-add").click(function(){
			    		partnerAgency.addContact($tbody,validator);

						// 再调整对话框的高度
						$(window).trigger('resize');
			    	});

			    	partnerAgency.addContact($tbody,validator);


			    	$obj.find(".btn-submit-partnerAgency").click(function(){

			    		// 表单校验
			    		if (!validator.form()) { return; }

			    		var contactList = [];
			    		$obj.find(".contactList tbody tr").each(function(){
			    			var contactRealname = $(this).find("input[name=contactRealname]").val();
			    			var contactMobileNumber = $(this).find("input[name=contactMobileNumber]").val();
			    			if(contactRealname != "" && contactMobileNumber != ""){
				    			var contact = {
				    				contactRealname : contactRealname,
				    				contactMobileNumber : contactMobileNumber,
				    				departmentName : $(this).find("input[name=departmentName]").val(),
				    				dutyName : $(this).find("input[name=dutyName]").val()
				    			};
				    			contactList.push(contact);
			    			}
			    		});
						var status = 0;
						if($obj.find(".partnerAgency-status").is(":checked") == true){
							status = 1;
						}
						var form = $obj.serialize()+"&status="+status+"";

						var contactListJsonAdd = JSON.stringify(contactList);

						$.ajax({
							url:""+APP_ROOT+"back/partnerAgency.do?method=savePartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&contactListJsonAdd="+encodeURIComponent(contactListJsonAdd)+"",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addPartnerAgencyLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									partnerAgency.listPartnerAgency(0,"",1);
								}
							}
						});
					});
			    }
			});
		},
		viewPartnerAgency:function(id){
			$.ajax({
	    		url:""+APP_ROOT+"back/partnerAgency.do?method=getPartnerAgencyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var partnerAgencyInfo = JSON.parse(data.partnerAgencyJson);
						data.partnerAgency = partnerAgencyInfo;
						var html = scanDetailTemplate(data);
						layer.open({
						    type: 1,
						    title:"查看同行旅行社信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '60%'], //宽高
						    zIndex:1029,
						    content: html
						});
					}
				}
			});
		},
		updatePartnerAgency:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=getPartnerAgencyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){

					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					var  validator="";
					if(result){
						var partnerAgencyInfo = JSON.parse(data.partnerAgencyJson);
						data.partnerAgencyJson = partnerAgencyInfo;
						var html = updateTemplate(data);
						var updatePartnerAgencyLayer = layer.open({
						    type: 1,
						    title:"修改同行旅行社",
						    skin: 'layui-layer-rim', //加上边框
						    area: '1190px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						    success:function(){
						    	var validator=rule.partnerAgencyCheckor($(".partnerAgencyMainForm"));
						    	$obj = $(".updatePartnerAgencyContainer .partnerAgencyMainForm");
						    	$obj.find("select[name=provinceId]").change(function(){
									var provinceId = $(this).val();
									if(provinceId != ""){
										partnerAgency.getCityList($obj.find("select[name=cityId]"),provinceId);
									}
									else{
										$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
									}
									$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
								});
						    	$obj.find("select[name=cityId]").change(function(){
									var cityId = $(this).val();
									if(cityId != ""){
										partnerAgency.getDistrictList($obj.find("select[name=districtId]"),cityId);
									}
									else{
										$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
									}
								});

						    	var headerAgencyId = "";
						    	if(data.partnerAgencyJson.partnerHeaderAgency!= null){
						    		headerAgencyId = data.partnerAgencyJson.partnerHeaderAgency.id;
						    	}
						    	partnerAgency.getHeaderPartnerAgency($obj.find("select[name=headPartnerAgency]"),headerAgencyId);
						    	$obj.find(".addheaderPartnerAgency").click(function(){ // 弹出添加总社框
						    		partnerAgency.addheaderPartnerAgency($obj);
						    	});

						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.partnerAgencyJson.provinceId != null){
						    		provinceId = data.partnerAgencyJson.provinceId;
						    		var cityId = "";
							    	if(data.partnerAgencyJson.cityId != null){
							    		cityId = data.partnerAgencyJson.cityId;
							    		var districtId = "";
							    		if(data.partnerAgencyJson.districtId != null){
							    			districtId = data.partnerAgencyJson.districtId;
							    		}
							    		partnerAgency.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
							    	}
							    	partnerAgency.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    	}
						    	partnerAgency.getProvinceList($obj.find("select[name=provinceId]"),provinceId);


						    	$tbody = $(".updatePartnerAgencyContainer .contactList tbody");
						    	$(".updatePartnerAgencyContainer .contactList .btn-contact-add").click(function(){
						    		partnerAgency.addContact($tbody,validator);

									// 再调整对话框的高度
									$(window).trigger('resize');
						    	});

						    	partnerAgency.bindRemoveContact();

						    	$obj.find(".btn-submit-partnerAgency").click(function(){

						    		//同行编辑验证
						    		if(!validator.form()){ return ;}

						    		var contactList = [];
						    		$obj.find(".contactList tbody tr").each(function(){
						    			var contactRealname = $(this).find("input[name=contactRealname]").val();
						    			var contactMobileNumber = $(this).find("input[name=contactMobileNumber]").val();
						    			if(contactRealname != "" && contactMobileNumber != ""){
						    				var id = $(this).attr("data-entity-id");
						    				if(id != null && id != ""){
						    					var contact = {
						    						id : id,
								    				contactRealname : contactRealname,
								    				contactMobileNumber : contactMobileNumber,
								    				departmentName : $(this).find("input[name=departmentName]").val(),
								    				dutyName : $(this).find("input[name=dutyName]").val()
								    			};
						    				}
						    				else{
						    					var contact = {
								    				contactRealname : contactRealname,
								    				contactMobileNumber : contactMobileNumber,
								    				departmentName : $(this).find("input[name=departmentName]").val(),
								    				dutyName : $(this).find("input[name=dutyName]").val()
								    			};
						    				}
							    			contactList.push(contact);
						    			}

						    		});


						    		var status = 0;
									if($obj.find(".partnerAgency-status").is(":checked") == true){
										status = 1;
									}

									var form = $obj.serialize()+"&status="+status+"";

									var contactListJsonAdd = JSON.stringify(contactList);

									$.ajax({
										url:""+APP_ROOT+"back/partnerAgency.do?method=updatePartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&contactListJsonAdd="+encodeURIComponent(contactListJsonAdd)+"",
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updatePartnerAgencyLayer);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												partnerAgency.listPartnerAgency(0,"",1);
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
		deletePartnerAgency:function(id){
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
								url:""+APP_ROOT+"back/partnerAgency.do?method=deletePartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$(".main-content .page-content .partnerAgencyList .partnerAgency-"+id+"").fadeOut(function(){
											partnerAgency.listPartnerAgency(0,"",1);
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
			})
		},
		addContact:function($obj,validator){
			var html = '<tr>'+
				'<td><input class="col-sm-12" type="text" name="contactRealname" maxlength="32"/></td>'+
				'<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>'+
				'<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>'+
				'<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>'+
				'<td><a class="btn-contact-delete">删除</a></td>'+
			'</tr>';
			$obj.append(html);

			// 更新表单验证的事件绑定
			validator = rule.update(validator);

			$obj.find(".btn-contact-delete:not(.needConfirm)").click(function(){
				$(this).parent().parent().remove();
			});
		},
		bindRemoveContact:function(){
			$(".updatePartnerAgencyContainer .contactList tbody .btn-contact-delete.needConfirm").click(function(){
				var $obj = $(this);
				var id = $obj.attr("data-entity-id");
				showConfirmDialog($( "#confirm-dialog-message" ),"你确定要数据库删除该联系人？",function(){
					partnerAgency.deleteContact($obj,id);
				});
			});
		},
		deleteContact:function($obj,id){
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=deleteContact&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							$obj.parent().parent().remove();
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
		},
		getHeaderPartnerAgency:function(obj,headerAgencyId){
			$.ajax({
				url:APP_ROOT+"back/partnerAgency.do?method=getHeaderPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				success:function(data){
					var dataList = data.dataList;
					var html = '<option value=\"-1\">请选择</option>';
					for (var i = 0; i < dataList.length; i++) {
						if (headerAgencyId == dataList[i].id) {
							html += '<option selected=\"selected\" value=\"'+dataList[i].id+'\">'+dataList[i].name+'</option>';
						}else{
							html += '<option value=\"'+dataList[i].id+'\">'+dataList[i].name+'</option>';
						}
					}
					obj.append(html);
				}
			});
		},
		addheaderPartnerAgency:function($obj){
			var html = addHeaderAgencyTemplate();
			var addPartnerManagerLayer = layer.open({
			    type: 1,
			    title:"新增同行总社",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['35%', '35%'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $headerContainer = $(".addHeaderAgencyContainer");
			    	var validator=rule.partnerAgencyCheckor($headerContainer);
			    	$headerContainer.find(".btn-submit-addHeaderAgency").click(function(){
			    		if (!validator.form()) { return; }
			    		var headerAgencyName = $headerContainer.find("input[name=headerAgencyName]").val();
			    		// 实时添加
			    		$.ajax({
			    			url:APP_ROOT + "back/partnerAgency.do?method=addHeaderPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
			    			type:"POST",
			    			data:"headerAgencyName="+headerAgencyName,
			    			dataType:"json",
			    			success:function(data){
			    				if(data.success == 1) {
			    					var headerAgency = data.headerAgency;
			    					var option = '<option value=\"'+headerAgency.id+'\" selected=\"selected\">'+headerAgency.name+'</option>';
			    						$obj.find("select[name=headPartnerAgency]").append(option);
			    					layer.close(addPartnerManagerLayer);
								}
			    				showMessageDialog($( "#confirm-dialog-message" ),data.message);
			    			}
			    		});
			    	});
			    }
			});
		}
	}
	exports.listPartnerAgency = partnerAgency.listPartnerAgency;
});