define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_lineProduct";
	var listTemplate = require("./view/list");
	var addTemplate = require("./view/add");
	var viewDetailTemplate = require("./view/viewDetail");
	var addQouteTemplate = require("./view/addQoute");
	var updateLineProductTemplate = require("./view/updateLineProduct")
	var tabId = "tab-"+menuKey+"-content";
	
	var lineProduct = {
		searchData : {},
		edited : false,
		listLineProduct:function(page,name,status){
			$.ajax({
				url:""+APP_ROOT+"back/lineProduct.do?method=listLineProduct&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
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
						var lineProductList = data.lineProductList;
						lineProductList = JSON.parse(lineProductList);
						data.lineProductList = lineProductList;
						var html = listTemplate(data);
						addTab(menuKey,"线路产品管理",html);
//						
//						$("#"+tabId+" .lineProductList .btn-lineProduct-edit").click(function(){
//							var id = $(this).attr("data-lineProduct-id");
//							lineProduct.updateLineProduct(id);
//						});
//						$("#"+tabId+" .lineProductList .btn-lineProduct-delete").click(function(){
//							var id = $(this).attr("data-lineProduct-id");
//							lineProduct.deleteLineProduct(this,id);
//						});
//						
						$("#"+tabId+" .btn-lineProduct-quote").click(function(){
							var id = $(this).attr("data-entiy-id");
							lineProduct.addQoute(id);
						});
						
						$("#"+tabId+" .btn-lineProduct-add").click(function(){
							lineProduct.addLineProduct();
						});

						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
						});
						//搜索按钮事件
						lineProduct.searchData = {
							name : $("#"+tabId+" input[name=lineProduct_name]").val(),
							status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
						};
						$("#"+tabId+" .btn-lineProduct-search").click(function(){
							lineProduct.searchData = {
								name : $("#"+tabId+" input[name=lineProduct_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							};
							lineProduct.listLineProduct(0,lineProduct.searchData.name,lineProduct.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							if(data.pageNo == 0 || data.totalPage == 0)return;
							lineProduct.listLineProduct(0,lineProduct.searchData.name,lineProduct.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							if(data.totalPage == 0)return;
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
								return false;
							}
							lineProduct.listLineProduct(previous,lineProduct.searchData.name,lineProduct.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							if(data.totalPage == 0)return;
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
								return false;
							}
							lineProduct.listLineProduct(next,lineProduct.searchData.name,lineProduct.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
							lineProduct.listLineProduct(data.totalPage-1,lineProduct.searchData.name,lineProduct.searchData.status);
						});
						
						$("#"+tabId+" .lineProductList .btn-lineProduct-view").on("click", lineProduct.viewLineProductDetail);//查看
						$("#"+tabId+" .lineProductList .btn-lineProduct-edit").on("click", function(){
							var id = $(this).attr("data-entiy-id");
							lineProduct.updateLineProduct(id,false);
						});//修改
						$("#"+tabId+" .lineProductList .btn-lineProduct-delete").click(lineProduct.deleteLineProduct);//删除
						$("#"+tabId+" .lineProductList .btn-lineProduct-clipboard").on("click", function(){
							var id = $(this).attr("data-entiy-id");
							lineProduct.updateLineProduct(id,true);
						});//复制
						$("#"+tabId+" .lineProductList .btn-lineProduct-export").on("click", function(){
							var id = $(this).attr("data-entiy-id");
							lineProduct.exportLineProduct(id);
						});//复制
					}
				}
			});
		},
		addLineProduct:function(){
			var html = addTemplate();
			var addLineProductLayer = layer.open({
			    type: 1,
			    title:"新增线路产品",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['95%', '90%'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	lineProduct.getProvinceList($(".add-lineProduct-form select[name=provinceId]"));
					$(".add-lineProduct-form select[name=provinceId]").change(function(){
						var provinceId = $(this).val();
						lineProduct.getCityList($(".add-lineProduct-form select[name=cityId]"),provinceId);
					});
					$(".add-lineProduct-form select[name=cityId]").change(function(){
						var cityId = $(this).val();
						lineProduct.getDistrictList($(".add-lineProduct-form select[name=districtId]"),cityId);
					});
					
					$(".add-lineProduct-form select[name=payType]").change(function(){
						var payType = $(this).val();
						if(payType == 1){
							$(this).parent().find(".payPeriod").removeClass("hide");
						}
						else{
							$(this).parent().find(".payPeriod").addClass("hide");
						}
					});
					
					$(".add-lineProduct-form .btn-bus-add").click(function(){
						var html = "<tr><td><input  name=\"licenseNumber\" type=\"text\" /></td><td><input name=\"brand\" type=\"text\" /></td><td><input name=\"seatCount\" type=\"text\" value=\"1\"/></td><td class=\"col-sm-1\"><div class=\"input-group col-sm-12\"><input name=\"buyTime\" type=\"text\" class=\"date-picker\" /><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span></div></td><td><select name=\"isChartered\"><option value=\"1\">是</option><option value=\"0\" selected=\"selected\">否</option></select></td><td><input name=\"charteredStartTime\" type=\"text\" readonly=\"readonly\" class=\"date-picker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"charteredEndTime\" type=\"text\" readonly=\"readonly\" class=\"date-picker\" style=\"width:100px\"/></td><td><input name=\"charteredPrice\" type=\"text\" readonly=\"readonly\"/><label>&nbsp;元</label></td><td><input name=\"remark\" type=\"text\"/></td><td style=\"width:70px\"><button class=\"btn btn-xs btn-danger btn-bus-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td></tr>";
						$(".add-lineProduct-form .busList tbody").append(html);
						$(".add-lineProduct-form .busList input[name=seatCount]").spinner({
							min:1,
							step:1,
							create: function( event, ui ) {
								$(this).next().addClass('btn btn-success').html('<i class="ace-icon fa fa-plus"></i>').next().addClass('btn btn-danger').html('<i class="ace-icon fa fa-minus"></i>')
							}
						});
						$(".add-lineProduct-form .date-picker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
					});
					
					$(".add-lineProduct-form .btn-driver-add").click(function(){
						var html = "<tr><td><input name=\"driverName\" type=\"text\" /></td><td><select name=\"gender\"><option value=\"0\">男</option><option value=\"1\">女</option></select></td><td><input name=\"mobileNumber\" type=\"text\" /></td><td><input name=\"driveYears\" type=\"text\" value=\"1\"/></td><td><input name=\"licenseId\" type=\"text\" /></td><td><select name=\"status\"><option value=\"1\">启用</option><option value=\"0\">停用</option></select></td><td><input name=\"remark\" type=\"text\" /></td><td style=\"width:70px\"><button data-entiy-id=\"\" class=\"btn btn-xs btn-danger btn-driver-delete\"><i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td></tr>";
						$(".add-lineProduct-form .driverList tbody").append(html);
						$(".add-lineProduct-form .driverList .btn-driver-delete").click(function(){
							$(this).parent().parent().fadeOut(function(){
								$(this).remove();
							});
						});
						$(".add-lineProduct-form .driverList input[name=driveYears]").spinner({
							min:1,
							step:1,
							create: function( event, ui ) {
								$(this).next().addClass('btn btn-success').html('<i class="ace-icon fa fa-plus"></i>').next().addClass('btn btn-danger').html('<i class="ace-icon fa fa-minus"></i>')
							}
						});
					});
					
					$(".add-lineProduct-form .btn-bus-add").click();
					$(".add-lineProduct-form .btn-driver-add").click();
					
					$(".add-lineProduct-form .btn-submit-lineProduct").click(function(){
						var status = 0;
						if($(".add-lineProduct-form .lineProduct-status").is(":checked") == true){
							status = 1;
						}
						var form = $(".add-lineProduct-form form.lineProductMainForm").serialize()+"&status="+status+"";
						var busJsonAdd = "[";
						var busListLength = $(".add-lineProduct-form .busList tbody tr").length;
						$(".add-lineProduct-form .busList tbody tr").each(function(i){
							var busJson = "";
							var licenseNumber = $(this).find("input[name=licenseNumber]").val();
							var brand = $(this).find("input[name=brand]").val();
							var seatCount = $(this).find("input[name=seatCount]").val();
							var buyTime = $(this).find("input[name=buyTime]").val();
							if(buyTime == ""){
								buyTime = "0000-00-00";
							}
							var isChartered = $(this).find("select[name=isChartered]").val();
							var charteredStartTime = "0000-00-00";
							var charteredEndTime = "0000-00-00";
							var charteredPrice = "0";
							if(isChartered == 1){
								charteredStartTime = $(this).find("input[name=charteredStartTime]").val();
								charteredEndTime = $(this).find("input[name=charteredEndTime]").val();
								charteredPrice = $(this).find("input[name=charteredPrice]").val();
							}
							var remark = $(this).find("input[name=remark]").val();
							if(i == (busListLength-1)){
								busJson = "{\"licenseNumber\":\""+licenseNumber+"\",\"brand\":\""+brand+"\",\"seatCount\":\""+seatCount+"\",\"buyTime\":\""+buyTime+"\",\"isChartered\":\""+isChartered+"\",\"charteredStartTime\":\""+charteredStartTime+"\",\"charteredEndTime\":\""+charteredEndTime+"\",\"charteredPrice\":\""+charteredPrice+"\",\"remark\":\""+remark+"\"}";
							}
							else{
								busJson = "{\"licenseNumber\":\""+licenseNumber+"\",\"brand\":\""+brand+"\",\"seatCount\":\""+seatCount+"\",\"buyTime\":\""+buyTime+"\",\"isChartered\":\""+isChartered+"\",\"charteredStartTime\":\""+charteredStartTime+"\",\"charteredEndTime\":\""+charteredEndTime+"\",\"charteredPrice\":\""+charteredPrice+"\",\"remark\":\""+remark+"\"},";
							}
							busJsonAdd += busJson;
						});
						busJsonAdd += "]";
						var driverJsonAdd = "[";
						var driverListLength = $(".add-lineProduct-form .driverList tbody tr").length;
						$(".add-lineProduct-form .driverList tbody tr").each(function(i){
							var driverJson = "";
							var name = $(this).find("input[name=driverName]").val();
							var gender = $(this).find("select[name=gender]").val();
							var mobileNumber = $(this).find("input[name=mobileNumber]").val();
							var driveYears = $(this).find("input[name=driveYears]").val();
							var licenseId = $(this).find("input[name=licenseId]").val();
							var status = $(this).find("select[name=status]").val();
							var remark = $(this).find("input[name=remark]").val();
							if(i == (driverListLength-1)){
								driverJson = "{\"name\":\""+name+"\",\"gender\":\""+gender+"\",\"mobileNumber\":\""+mobileNumber+"\",\"driveYears\":\""+driveYears+"\",\"licenseId\":\""+licenseId+"\",\"status\":\""+status+"\",\"remark\":\""+remark+"\"}";
							}
							else{
								driverJson = "{\"name\":\""+name+"\",\"gender\":\""+gender+"\",\"mobileNumber\":\""+mobileNumber+"\",\"driveYears\":\""+driveYears+"\",\"licenseId\":\""+licenseId+"\",\"status\":\""+status+"\",\"remark\":\""+remark+"\"},";
							}
							driverJsonAdd += driverJson;
						});
						driverJsonAdd += "]";
						console.log(busJsonAdd);
						console.log(driverJsonAdd);
						$.ajax({
							url:""+APP_ROOT+"back/lineProduct.do?method=addLineProduct&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&busJsonAdd="+encodeURIComponent(busJsonAdd)+"&driverJsonAdd="+encodeURIComponent(driverJsonAdd)+"",
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
									layer.close(addLineProductLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									lineProduct.listLineProduct(0,"",1);
								}
							}
						});
					});
			    }
			});
		},
		updateLineProductIndex:0,
		updateLineProduct:function(id,clipboardMode){
			$.ajax({
	    		url:""+APP_ROOT+"back/lineProduct.do?method=getLineProductById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id=" + id,
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
						var lineProductDetail = JSON.parse(data.lineProduct);
						var busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
						var guideTemplate = JSON.parse(data.guideTemplate);
						var insuranceTemplate = JSON.parse(data.insuranceTemplate);
						var daysList = JSON.parse(data.daysList);
						data.viewLineProduct = {
								lineProduct : lineProductDetail,
								busCompanyTemplate : busCompanyTemplate,
								guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList
						};
						
						//data.viewLineProduct.guideTemplate.guide = data.viewLineProduct.guideTemplate.guide || {};
						//data.viewLineProduct.insuranceTemplate.insurance = data.viewLineProduct.insuranceTemplate.insurance || {};
						//data.viewLineProduct.busCompanyTemplate.busCompany = data.viewLineProduct.busCompanyTemplate.busCompany || {};
						//data.viewLineProduct.busCompanyTemplate.bus = data.viewLineProduct.busCompanyTemplate.bus || {};
						data.viewLineProduct.clipboardMode = clipboardMode;
						var html = updateLineProductTemplate(data.viewLineProduct);
						var title = "修改线路产品";
						if(clipboardMode){
							title = "新增线路产品";
						}
						//已修改提示
						var tab = "tab-resource_lineProduct-update-content";
			    		var validator = rule.lineProductCheckor($('.updateLineProductContainer'));
						if($(".tab-"+menuKey+"-update").length > 0) {
                 	    	if(lineProduct.edited){
								addTab(menuKey+"-update",title,html);
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.lineProductCheckor($('.updateLineProductContainer'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 lineProduct.submitInfoLineProduct(tab,clipboardMode, validator,0);
									 lineProduct.edited = false;
				            		 addTab(menuKey+"-update",title,html);
				            		 validator = rule.lineProductCheckor($("#"+tab+""));
				            	 },function(){
				            		 addTab(menuKey+"-update",title,html);
				            		 validator = rule.lineProductCheckor($("#"+tab+""));
				            	 });							
                 	    	 }else{
	                 	    	addTab(menuKey+"-update",title,html);
	                 	        validator = rule.lineProductCheckor($("#"+tab+""));
                 	    	 } 
                 	    }else{
                 	    	addTab(menuKey+"-update",title,html);
                 	    	validator = rule.lineProductCheckor($("#"+tab+""));
                 	    	$("#"+tab+"").on("change",function(){
                 	    		lineProduct.edited = true;
                 	    	});
                 	    };						
				    	
			    		for(var i=0;i<lineProductDetail.days;i++){
							var ue = init_editor("detailEditor-update-lineProduct-"+i+"");
						}
			    		
				    	
				    	var updateList =$("#"+tab+" .updateLineProductDaysListContainer .updateLineProductDaysList");
				    	if(updateList.length > 0){
				    		for(var k=0; k<updateList.length; k++){
				    			var updateDays = updateList.eq(k).find(".updateLineProductDaysDetailContainer");
				    			if( updateDays.find(".updateLineProductDaysDetail").length > 0){
						    		var arr = [], daysList = updateDays.find(".updateLineProductDaysDetail");
						    		for(var i=0; i<daysList.length; i++){
						    			arr.push(daysList[i].outerHTML);
						    		}
						    		arr.sort(function(a,b){
						                a = parseInt(/data-entity-index=\"(\d+)/.exec(a)[1], 10);
						                b = parseInt(/data-entity-index=\"(\d+)/.exec(b)[1], 10);
						                return a-b;
						            });
						    		
						    		updateDays.html(arr.join(""));
						    	}
				    		}
				    		var daysDetailList = $("#"+tab+" .updateLineProductDaysDetail");
				    		lineProduct.updateLineProductIndex = parseInt(daysDetailList.eq(daysDetailList.length-1).attr("data-entity-index")) + 1;
				    	}
				    	
				    	//添加具体行程安排相应事件
				    	$("#"+tab+" .updateLineProductDaysList .addRestaurant").bind("click", validator, lineProduct.addRestaurant);//餐饮
				    	$("#"+tab+" .updateLineProductDaysList .addResourceHotel").bind("click", validator, lineProduct.addResourceHotel);//酒店
				    	$("#"+tab+" .updateLineProductDaysList .addResourceScenic").bind("click", validator, lineProduct.addResourceScenic);//景区
				    	$("#"+tab+" .updateLineProductDaysList .addResourceShopping").bind("click", validator, lineProduct.addResourceShopping);//购物
				    	$("#"+tab+" .updateLineProductDaysList .addResourceSelfPaying").bind("click", validator, lineProduct.addResourceSelfPaying);//自费
				    	$("#"+tab+" .updateLineProductDaysList .addResourceTraffic").bind("click", validator, lineProduct.addResourceTraffic);//交通
						
						lineProduct.bindRestaurantEvent($("#"+tab+" .viewUpdateRestaurantList .chooseRestaurantName"), $("#"+tab+" .viewUpdateRestaurantList .restaurantStandardsName"));
						lineProduct.bindHotelEvent($("#"+tab+" .viewUpdateHotelList .chooseHotelName"), $("#"+tab+" .viewUpdateHotelList .chooseHotelRoom"), $("#"+tab+" .viewUpdateHotelList .resourceHotelStar"));
						lineProduct.bindScenicEvent($("#"+tab+" .viewUpdateScenicList .chooseScenicName"));
						lineProduct.bindShopEvent($("#"+tab+" .viewUpdateShopList .chooseVendorName"));
						lineProduct.bindSelfPay($("#"+tab+" .viewUpdateSelfPayList .chooseCompanyName"));
						lineProduct.bindTicketEvent($("#"+tab+" .viewUpdateTicketList .chooseTicketName"));
						
						$("#"+tab+" .updateLineProductContainer .submitInfoLineProduct").on("click", function(){
							lineProduct.submitInfoLineProduct(tab,clipboardMode, validator,1);
						});//绑定提交事件
						
						$("#"+tab+" .viewUpdateRestaurantList .deleteScheduleList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						$("#"+tab+" .viewUpdateHotelList .deleteResourceHotelList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						$("#"+tab+" .viewUpdateScenicList .deleteResourceScenicList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						$("#"+tab+" .viewUpdateShopList .deleteResourceShopList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						$("#"+tab+" .viewUpdateSelfPayList .deleteResourceSelfPayList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						$("#"+tab+" .viewUpdateTicketList .deleteResourceTicketList").off().on("click", lineProduct.deleteLineProductDaysArrange);
						
						$("#"+tab+" .updateLineProductDaysDetailContainer").sortable({
							containment: 'parent',
							handle: ace.vars['touch'] ? '.table-bordered thead' : false,
							forceHelperSize:true,
							forcePlaceholderSize:true,
							tolerance:'pointer',
							update: function(event, ui) {
								var itemList = $("#"+tab+" .updateLineProductDaysDetailContainer .timeline-item");
								for(var i=0; i<itemList.length; i++){
									itemList.eq(i).attr("data-entity-index", i);
								}
							}
						});
						//导游安排
						$("#"+tab+" .updateGuideList .chooseGuide").autocomplete({
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
						
						
						$("#"+tab+" .updateInsuranceList .chooseInsurance").autocomplete({
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
				                    data:"id="+ui.item.id,
				                    success: function(data) {
				                    	layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											var insurance = JSON.parse(data.insurance);
											console.log(insurance);
											$(obj).parent().parent().find("input[name=insuranceId]").val(insurance.id).trigger('change');
											$(obj).parent().parent().find("input[name=telNumber]").val(insurance.telNumber);
											$(obj).parent().parent().find("input[name=managerName]").val(insurance.managerName);
											$(obj).parent().parent().find("input[name=mobileNumber]").val(insurance.telNumber);

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
						$("#"+tab+" .updateBusCompanyList .chooseBusCompany").autocomplete({
							minLength:0,
							change:function(event,ui){
								if(ui.item == null){
									$(this).val("");
									$(this).parent().parent().find("input[name=busCompanyId]").val("");
									$(this).parent().parent().find("input[name=licenseNumber]").val("");
									$(this).parent().parent().find("input[name=seatPrice]").val("");
									$(this).parent().parent().find("input[name=seatCount]").val("");
									$(this).parent().parent().find("input[name=charteredPrice]").val("");
									$(this).parent().parent().find("input[name=mobileNumber]").val("");
								}

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							},
							select:function(event,ui){
								$(this).blur();
								
								$(this).parent().parent().find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
								$(this).parent().parent().find("input[name=licenseNumber]").val("");
								$(this).parent().parent().find("input[name=seatPrice]").val("");
								$(this).parent().parent().find("input[name=seatCount]").val("");
								$(this).parent().parent().find("input[name=charteredPrice]").val("");
								$(this).parent().parent().find("input[name=mobileNumber]").val("");
								
								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);

								var obj = this, mobileNumber = "";
								
								if(chooseBusLicenseNumber){
									$(".updateBusCompanyList .chooseBusLicenseNumber").autocomplete( "destroy");
								}
								
								//给车辆绑定autocomplete事件
								chooseBusLicenseNumber = $(".updateBusCompanyList .chooseBusLicenseNumber").autocomplete({
									minLength:0,
									select:function(event,ui){
										
										//获得busId，到后台查询bus相应信息
										//var mobileNumber = data.mobileNumber;
										//$(obj).parent().parent().find("input[name=mobileNumber]").val(mobileNumber);
										$.ajax({
											url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
						                    dataType: "json",
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
													objParent.find("input[name=remark]").val(d.remark);
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
											objParent.find("input[name=remark]").val("");
										}
									}
								}).unbind("click").click(function(){
									var objBus = this;
									var busCompanyId = ui.item.id;
									var needSeatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
									$.ajax({
										url:""+APP_ROOT+"back/busCompany.do?method=findBusListBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
					                    dataType: "json",
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
							console.log(obj)
							var needSeatCount = $(obj).parent().parent().find("input[name=needSeatCount]").val();
							$.ajax({
								url:""+APP_ROOT+"back/busCompany.do?method=findBusCompanyBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
			                    dataType: "json",
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
					}
				}
			});
			

		},
		deleteLineProductDaysArrange : function(){
			var dialogObj = $( "#confirm-dialog-message" ), obj = this;
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
							var id = $(obj).attr("data-entity-id"), objParents = $(obj).parents(".updateLineProductDaysDetail"), 
							    name = $(obj).attr("data-entity-name"),
							    templateJsonDel = {name:name, id:id};
							
							$.ajax({
								url:""+APP_ROOT+"back/lineProduct.do?method=deleteLineProductArrangeTemplate&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"templateJsonDel="+encodeURIComponent(JSON.stringify(templateJsonDel)),
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){										
										objParents.remove();
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
		deleteLineProduct:function(){
			var dialogObj = $( "#confirm-dialog-message" );
			var obj = this;
			var id = $(obj).attr("data-entiy-id");
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
								url:""+APP_ROOT+"back/lineProduct.do?method=deleteLineProduct&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id+"",
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
										$("#"+tabId+" .lineProductList .lineProduct-"+id+"").fadeOut(function(){
											lineProduct.listLineProduct(0,"",1);
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
		getProvinceList:function(obj){
			$.ajax({
				url:""+APP_ROOT+"/base.do?method=getProvince",
				type:"POST",
				dataType:"json",
				success:function(data){
					var html = "<option value=''>未选择</option>";
					var provinceList = data.provinceList;
					if(provinceList != null && provinceList.length > 0){
						for(var i=0;i<provinceList.length;i++){
							html += "<option value='"+provinceList[i].id+"'>"+provinceList[i].name+"</option>";
						}
					}
					$(obj).html(html);
				}
			});
		},
		getCityList:function(obj,provinceId){
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
								html += "<option value='"+cityList[i].id+"'>"+cityList[i].name+"</option>";
							}
						}
						$(obj).html(html);
					}
				});
			}
		},
		getDistrictList:function(obj,cityId){
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
								html += "<option value='"+districtList[i].id+"'>"+districtList[i].name+"</option>";
							}
						}
						$(obj).html(html);
					}
				});
			}
		},
		viewLineProductDetail : function(){
			
			var id = $(this).attr("data-entiy-id");
			
			$.ajax({
	    		url:""+APP_ROOT+"back/lineProduct.do?method=getLineProductById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id=" + id,
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
						var lineProduct = JSON.parse(data.lineProduct);
						var busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
						var guideTemplate = JSON.parse(data.guideTemplate);
						var insuranceTemplate = JSON.parse(data.insuranceTemplate);
						var daysList = JSON.parse(data.daysList);
						data.viewLineProduct = {
								lineProduct : lineProduct,
								busCompanyTemplate : busCompanyTemplate,
								guideTemplate : guideTemplate,
								insuranceTemplate : insuranceTemplate,
								daysList : daysList
						};
						
						var html = viewDetailTemplate(data);
						addTab(menuKey+"-view","查看线路产品",html);
				    	var tab = "tab-resource_lineProduct-view-content",
				    	viewsList = $("#"+tab+" .viewsLineProductDaysListContainer .viewsLineProductDaysList");
				    	if(viewsList.length > 0){
				    		for(var k=0; k<viewsList.length; k++){
				    			var viewsDays = viewsList.eq(k).find(".viewLineProductDaysDetailContainer");
				    			if( viewsDays.find(".viewLineProductDaysDetail").length > 0){
						    		var arr = [], daysList = viewsDays.find(".viewLineProductDaysDetail");
						    		for(var i=0; i<daysList.length; i++){
						    			arr.push(daysList[i].outerHTML);
						    		}
						    		arr.sort(function(a,b){
						                a = parseInt(/<div class=\"timeline-item clearfix viewLineProductDaysDetail\" data-entity-index=\"(\d+)/.exec(a)[1], 10);
						                b = parseInt(/<div class=\"timeline-item clearfix viewLineProductDaysDetail\" data-entity-index=\"(\d+)/.exec(b)[1], 10);
						                return a-b;
						            });

						    		viewsDays.html(arr.join(""));
						    	}
				    		}
				    	}
				    	
				    	var date = new Date();
						var d = date.getDate();
						var m = date.getMonth();
						var y = date.getFullYear();
						var dateArr = [];
						function toNum(num){
							return num < 10 ? "0"+num : num;
						}
						for(var k=0; k<7; k++){
							dateArr.push(y+"-"+(toNum(m+1))+"-"+(toNum(d+k)))
						}
						var Calendar =  $("#"+tab+" .viewsLineProductDetailCalendar .lineProductDetailCalendar");
						Calendar.fullCalendar({
							 monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
							 monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
							 dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
							 dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
							 today: ["今天"],
							 buttonText:{
								 prev:     '上个月',
								 next:     '下个月',
								 today:    '今天'
							},
							events: [
								{
									title: '480元',
									start: dateArr[0]
								},
								{
									title: '480元',
									start: dateArr[1]
								},
								{
									title: '480元',
									start: dateArr[2]
								},
								{
									title: '480元',
									start: dateArr[3]
								},
								{
									title: '480元',
									start: dateArr[4]
								},
								{
									title: '480元',
									start: dateArr[5]
								},
								{
									title: '480元',
									start: dateArr[6]
								}
							],
							selectable: true,
							selectHelper: true,
							select: function(start, end, allDay) {
								var startDate = start._d,
								sY = startDate.getFullYear(),
								sM = startDate.getMonth(),
								sD = startDate.getDate();
								var toDate = new Date(),
								tY = toDate.getFullYear(),
								tM = toDate.getMonth(),
								tD = toDate.getDate();
								var newDate = sY+"-"+(toNum(sM+1))+"-"+(toNum(sD));
								if(!(sY > tY || (sY == tY && sM > tM) || (sY == tY && sM == tM && sD >= tD))){
									layer.tips('选择日期必须大于当前日期！', Calendar, {
									    tips: [1, '#3595CC'],
									    time: 1500
									});
									return false;
								}
								for(var s=0; s<dateArr.length; s++){
									if(dateArr[s] == newDate){
										return false;
									}
								}
								dateArr.push(newDate);
								this.calendar.addEventSource([{title:"2000元", start:dateArr[dateArr.length-1]}]);
							}
						});
					}
					
				}
	    	})
			
		},
		
		addRestaurant:function(e){
			//添加行程安排餐饮
			var scheduleDetails = '<div class="timeline-item clearfix updateRestaurantList updateLineProductDaysDetail scheduleList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-cutlery btn btn-success no-hover"></i><span class="label label-info label-sm">餐饮</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>餐厅名称</th><th>餐厅电话</th><th>餐标类型</th><th>餐标名称</th>	<th>菜单列表</th><th>每位价格</th><th>备注</th>	<th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseRestaurantName bind-change"/><input type="hidden" name="restaurantId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><select name="type" class="col-xs-12 restauranType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select></td>'+
			'<td><input type="text" name="typeName" class="col-xs-12 restaurantStandardsName bind-change"/><input type="hidden" name="typeId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="menuList"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="pricePerPerson"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td><td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteScheduleList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr>'+
			'</tbody></table></div></div></div></div>';

			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(scheduleDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排餐饮
			function deleteScheduleList(e){
				$(this).parents(".updateRestaurantList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateRestaurantList .deleteScheduleList").off().on("click", deleteScheduleList);
			
			
			$(".updateRestaurantList .restauranType").on("change", function(){
				var typeParent = $(this).parent().parent();
				typeParent.find("input[name=typeName]").val("");
				typeParent.find("input[name=menuList]").val("");
				typeParent.find("input[name=pricePerPerson]").val("");
				typeParent.find("input[name=remark]").val("");
			});
			
			lineProduct.bindRestaurantEvent($(".updateRestaurantList .chooseRestaurantName"), $(".updateRestaurantList .restaurantStandardsName"), e.data);
			
			
			
		},
		bindRestaurantEvent : function( obj, typeObj, validator) {
			//绑定选择餐厅名称事件
			obj.autocomplete({
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
					
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=findRestaurantById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
	                    dataType: "json",
	                    data:"id="+restaurantNameId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurant = JSON.parse(data.restaurant);
								objParent.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
								//objParent.find("input[name=payType]").val(restaurant.payType == 0? "现付" : "账期" + (restaurant.payPeriod ? "(" + restaurant.payPeriod.month + "个月)" : "" ));

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							}
	                    }
					})
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
                    dataType: "json",
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
			
			//为餐标名称绑定事件
			typeObj.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent();
						objParent.find("input[name=pricePerPerson]").val("");
						objParent.find("input[name=menuList]").val("");
						objParent.find("input[name=remark]").val("");
						objParent.find("input[name=typeId]").val("");
					}
				},select:function(event,ui){
					var objEatName = this;
					var objParent = $(objEatName).parent().parent();
					objParent.find("input[name=typeId]").val(ui.item.id);
					$.ajax({
						url:""+APP_ROOT+"back/restaurant.do?method=findStandardDetailById&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var restaurantStandard = JSON.parse(data.restaurantStandard);
								
								objParent.find("input[name=menuList]").val(restaurantStandard.menuList);
								objParent.find("input[name=pricePerPerson]").val(restaurantStandard.contractPrice);
								objParent.find("input[name=remark]").val(restaurantStandard.remark);
							}
	                    }
					});
				}
			}).unbind("click").click(function(){
				var objEat = this,
				eatType = $(objEat).parent().parent().find("[name=type]").val(),
				restaurantNameId = $(objEat).parent().parent().find("[name=restaurantId]").val();
				$.ajax({
					url:""+APP_ROOT+"back/restaurant.do?method=findStandardTypeName&token="+$.cookie("token")+"&menuKey=resource_restaurant&operation=view",
                    dataType: "json",
                    data:"id="+restaurantNameId+"&type="+eatType,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var restaurantStandardList = JSON.parse(data.restaurantStandardList);
							if(restaurantStandardList && restaurantStandardList.length > 0){
								for(var i=0; i<restaurantStandardList.length; i++){
									restaurantStandardList[i].value = restaurantStandardList[i].typeName;
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
			
			
		},
		//添加酒店
		addResourceHotel:function(e){
			//添加行程安排酒店
			var hotelDetails = '<div class="timeline-item clearfix updateHotelList updateLineProductDaysDetail resourceHotelList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-hotel btn btn-success no-hover"></i><span class="label label-info label-sm">酒店</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>酒店星级</th><th>酒店名称</th><th>房型</th><th>价格</th><th>早餐</th><th>电话</th><th>备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><select class="col-xs-12 resourceHotelStar"><option selected="selected" value="1">三星以下</option><option value="2">三星</option><option value="3">准四星</option><option value="4">四星</option><option value="5">准五星</option><option value="6">五星</option><option value="7">五星以上</option></select></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelName bind-change" name="hotelNmae"/><input type="hidden" name="hotelId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseHotelRoom bind-change" name="hotelRoom"/><input type="hidden" name="hotelRoomId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice" style="width:70px;"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="containBreakfast"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteResourceHotelList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr></tbody></table></div></div></div></div>';

			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(hotelDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排酒店
			function deleteResourceHotelList(e){
				$(this).parents(".updateHotelList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateHotelList .deleteResourceHotelList").off().on("click", deleteResourceHotelList);
			
			//绑定选择酒店名称事件
			lineProduct.bindHotelEvent($(".updateHotelList .chooseHotelName"), $(".updateHotelList .chooseHotelRoom"), $(".updateHotelList .resourceHotelStar"), e.data)
		},
		bindHotelEvent : function(obj, typeObj, selObj, validator){
			var $hotelStar = selObj;
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
			});
			obj.autocomplete({
				minLength:0,
				select:function(event,ui){
					var obj=this, hotelDataId = ui.item.id,
					    objParent = $(obj).parent().parent();
					objParent.find("input[name=hotelId]").val(hotelDataId).trigger('change');	
					objParent.find("input[name=hotelRoom]").val("");					
					objParent.find("input[name=contractPrice]").val("");
					objParent.find("input[name=containBreakfast]").val("");
					
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
	                    dataType: "json",
	                    data:"id=" + hotelDataId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var hotel = JSON.parse(data.hotel);
								objParent.find("input[name=mobileNumber]").val(hotel.mobileNumber);
								//objParent.find("input[name=payType]").val(hotel.payType == 0? "现付" : "账期" + (hotel.payPeriod ? "(" + hotel.payPeriod.month + "个月)" : "" ));
								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
							}
	                    }
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
						objParent.find("input[name=remark]").val("");
						objParent.find("input[name=hotelRoom]").val("");
						objParent.find("input[name=mobileNumber]").val("");
						objParent.find("input[name=payType]").val("");

						// 更新表单验证的配置
						validator = rule.lineProductUpdate(validator);
					}
				}
			}).unbind("click").click(function(){
				var hotelStarValue = $hotelStar.val(),
				    obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findHotelListByLevel&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
                    dataType: "json",
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
			
			
			typeObj.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					var thisParent = $(_this).parent().parent();
					thisParent.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
					$.ajax({
						url:""+APP_ROOT+"back/hotel.do?method=findRoomDetailById&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
						dataType: "json",
	                    data:"id=" + ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var hotelRoom = JSON.parse(data.hotelRoom);

								thisParent.find("input[name=contractPrice]").val(hotelRoom.contractPrice);
								thisParent.find("input[name=containBreakfast]").val(hotelRoom.containBreakfast == "0" ? "不含" : "包含");
								thisParent.find("input[name=remark]").val(hotelRoom.remark);
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
						objParent.find("input[name=remark]").val("");
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
				var hotelDataId = $(objhotelRoom).parent().parent().find("input[name=hotelId]").val()
				$.ajax({
					url:""+APP_ROOT+"back/hotel.do?method=findTypeByHotelId&token="+$.cookie("token")+"&menuKey=resource_hotel&operation=view",
                    dataType: "json",
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
		//添加景区
		addResourceScenic:function(e){
			//添加行程安排景区
			var scenicDetails = '<div class="timeline-item clearfix updateScenicList updateLineProductDaysDetail resourceScenicList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-tree btn btn-success no-hover"></i><span class="label label-info label-sm">景区</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>景区名称</th><th>收费项目</th><th>景区价格</th><th>联系电话</th><th>备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseScenicName bind-change"/><input type="hidden" name="scenicId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseChargingProjects bind-change" name="chargingProjects"/><input type="hidden" name="chargingId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="price"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteResourceScenicList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(scenicDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排景区
			function deleteResourceScenicList(e){
				$(this).parents(".updateScenicList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateScenicList .deleteResourceScenicList").off().on("click", deleteResourceScenicList);
			
			//绑定选择景区名称事件
			lineProduct.bindScenicEvent($(".updateScenicList .chooseScenicName"), e.data);
		},
		bindScenicEvent : function(obj, validator){
			obj.autocomplete({
				minLength:0,
				select:function(event, ui){
					var obj = this,
					    objParent = $(obj).parent().parent(),
					    scenicNameId = ui.item.id;
					objParent.find("input[name=scenicId]").val(scenicNameId).trigger('change');
					// 更新表单验证的配置
					validator = rule.lineProductUpdate(validator);
					
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
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
						// 更新表单验证的配置
						validator = rule.lineProductUpdate(validator);
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
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
			
			var objParent = $(obj).parent().parent();
			objParent.find(".chooseChargingProjects").autocomplete({
				minLength:0,
				select:function(event, nameUi){
					var nameUiId = nameUi.item.id, _this = this;
					var thisParent = $(_this).parent().parent();
					thisParent.find("input[name=chargingId]").val(nameUiId).trigger('change');
					
					$.ajax({
						url:""+APP_ROOT+"back/scenic.do?method=findItemDetailById&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
	                    dataType: "json",
	                    data: "id="+nameUiId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var scenicItem = JSON.parse(data.scenicItem);

								thisParent.find("input[name=price]").val(scenicItem.contractPrice);
								thisParent.find("input[name=remark]").val(scenicItem.remark);
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
						thisParent.find("input[name=remark]").val("");
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
				var scenicNameId = $(scenicObj).parent().parent().find("input[name=scenicId]").val();
				$.ajax({
					url:""+APP_ROOT+"back/scenic.do?method=findItemByScenicId&token="+$.cookie("token")+"&menuKey=resource_scenic&operation=view",
                    dataType: "json",
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
		//添加购物
		addResourceShopping:function(e){
			//添加行程安排购物
			var shoppingDetails = '<div class="timeline-item clearfix updateShoppingList updateLineProductDaysDetail resourceShoppingList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-shopping-cart btn btn-success no-hover"></i><span class="label label-info label-sm">购物</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>商家名称</th><th>商品政策</th><th>联系电话</th><th>停车返佣</th><th>人数返佣</th><th>备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseVendorName bind-change"/><input type="hidden" name="shopId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseGoodsPolicy bind-change" name="goodsPolicy"/><input type="hidden" name="shopPolicyId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="parkingRebateMoney"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="customerRebateMoney"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteResourceShopList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(shoppingDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排购物
			function deleteResourceShopList(e){
				$(this).parents(".updateShoppingList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateShoppingList .deleteResourceShopList").off().on("click", deleteResourceShopList);
			
			//绑定选择商家名称事件
			lineProduct.bindShopEvent($(".updateShoppingList .chooseVendorName"), e.data);
		},
		bindShopEvent : function(obj, validator){
			obj.autocomplete({
				minLength:0,
				select:function(event, ui){
					var obj = this,
					    objParent = $(obj).parent().parent(),
					    vendorNameId = ui.item.id,
						policyParent = $(obj).parent().parent();
					    policyParent.find("input[name=shopId]").val(vendorNameId).trigger('change');

				    // 更新表单验证的配置
				    validator = rule.lineProductUpdate(validator);

					$.ajax({
						url:""+APP_ROOT+"back/shop.do?method=getShopById&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
	                    dataType: "json",
	                    data: "id="+vendorNameId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var shop = JSON.parse(data.shop);
								console.info(shop);
								objParent.find("input[name=mobileNumber]").val(shop.mobileNumber);
								objParent.find("input[name=customerRebateMoney]").val(shop.customerRebateMoney);
								objParent.find("input[name=parkingRebateMoney]").val(shop.parkingRebateMoney);
							}
	                    }
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
						thisParent.find("input[name=guideRate]").val("");
						thisParent.find("input[name=travelAgencyRate]").val("");
						thisParent.find("input[name=parkingRebateMoney]").val("");
						thisParent.find("input[name=customerRebateMoney]").val("");

						// 更新表单验证的配置
						validator = rule.lineProductUpdate(validator);
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/shop.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
                    dataType: "json",
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
			
			
			var objParent = $(obj).parent().parent();
			objParent.find(".chooseGoodsPolicy").autocomplete({
				minLength:0,
				select:function(event, nameUi){
					var nameUiId = nameUi.item.id, _this = this;
					var thisParent = $(_this).parent().parent();
					thisParent.find("input[name=shopPolicyId]").val(nameUiId).trigger('change');

//					$.ajax({
//						url:""+APP_ROOT+"back/shop.do?method=findRebateDetail&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
//	                    dataType: "json",
//	                    data: "id="+nameUiId,
//	                    success: function(data) {
//	                    	layer.close(globalLoadingLayer);
//							var result = showDialog(data);
//							if(result){
//								var shopPolicyRebate = JSON.parse(data.shopPolicyRebate) || {};
//								var thisParent = $(_this).parent().parent();
//								thisParent.find("input[name=shopPolicyId]").val(nameUiId);

//								thisParent.find("input[name=remark]").val(nameUi.item.remark || "");
//							}
//	                    }
//	                });
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=shopPolicyId]").val("");
						thisParent.find("input[name=parkingRebateMoney]").val("");
						thisParent.find("input[name=customerRebateMoney]").val("");
						thisParent.find("input[name=remark]").val("");
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
				var vendorNameId = $(shopObj).parent().parent().find("input[name=shopId]").val();
				$.ajax({
					url:""+APP_ROOT+"back/shop.do?method=findPolicyByShopId&token="+$.cookie("token")+"&menuKey=resource_shop&operation=view",
                    dataType: "json",
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
		
		//添加自费
		addResourceSelfPaying:function(e){
			//添加行程安排自费
			var selfPayingDetails = '<div class="timeline-item clearfix updateSelfPayList updateLineProductDaysDetail resourceSelfPayList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-credit-card btn btn-success no-hover"></i><span class="label label-info label-sm">自费</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>公司名称</th><th>项目名称</th><th>联系电话</th><th>价格</th><th>负责人</th><th>备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseCompanyName bind-change"/><input type="hidden" name="companyId"/></td>'+
			'<td><input type="text" class="col-xs-12 chooseItemName bind-change"/><input type="hidden" name="selfPayItemId"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="contractPrice"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteResourceSelfPayList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(selfPayingDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排自费
			function deleteResourceSelfPayList(e){
				$(this).parents(".updateSelfPayList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateSelfPayList .deleteResourceSelfPayList").off().on("click", deleteResourceSelfPayList);
			
			//绑定选择自费名称事件
			lineProduct.bindSelfPay($(".updateSelfPayList .chooseCompanyName"), e.data);
			
		},
		
		bindSelfPay : function(obj, validator){
			obj.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=getSelfPayById&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var selfpay = JSON.parse(data.selfpay) || {};
								
								var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=companyId]").val(ui.item.id).trigger('change');
								thisParent.find("input[name=mobileNumber]").val(selfpay.mobileNumber);
								thisParent.find("input[name=managerName]").val(selfpay.managerName);

								// 更新表单验证的配置
								validator = rule.lineProductUpdate(validator);
								//var SelfPayRebateList=JSON.parse(data.SelfPayRebateList);
								//thisParent.find("input[name=contractPrice]").val(SelfPayRebateList.price);
								
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
						thisParent.find("input[name=contractPrice]").val("");
						thisParent.find("input[name=managerName]").val("");

						// 更新表单验证的配置
						validator = rule.lineProductUpdate(validator);
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/selfpay.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
					dataType:"json",
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
			});
			
			
			var objItem = $(obj).parent().parent().find(".chooseItemName");
			objItem.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayRebateByItemId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
	                    dataType: "json",
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								
								var selfPayRebate = JSON.parse(data.selfPayRebate); 
								console.info(selfPayRebate);
    							var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=selfPayItemId]").val(ui.item.id).trigger('change');
								thisParent.find("input[name=contractPrice]").val(selfPayRebate.price);
								
							}
	                    }
	                });
				},
				change:function(event, ui){
					if(ui.item == null){
						$(this).val("");
						var thisParent = $(this).parent().parent();
						thisParent.find("input[name=companyId]").val("");
						thisParent.find("input[name=selfPayItemId]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=contractPrice]").val("");
						thisParent.find("input[name=managerName]").val("");
						thisParent.find("input[name=remark]").val("");
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				var chooseCompanyNameId=$(obj).parent().parent().find("input[name='companyId']").val();
				$.ajax({
					url:""+APP_ROOT+"back/selfpay.do?method=findSelfPayItemBySelfPayId&token="+$.cookie("token")+"&menuKey=resource_selfpay&operation=view",
					dataType:"json",
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
			});
			
			
		},
		//添加交通
		addResourceTraffic:function(e){
			//添加行程安排交通
			var shoppingDetails = '<div class="timeline-item clearfix updateTicketList updateLineProductDaysDetail resourceTicketList ui-sortable-handle" data-entity-index='+lineProduct.updateLineProductIndex+'><div class="timeline-info"><i class="timeline-indicator ace-icon fa fa-car btn btn-success no-hover"></i><span class="label label-info label-sm">交通</span></div>'+
			'<div class="widget-box transparent"><div class="widget-body"><div class="widget-main"><table class="table table-striped table-bordered table-hover">'+
			'<thead><tr><th>票务公司名称</th><th>类型</th><th>价格</th><th>负责人</th><th>联系电话</th><th>公司电话</th><th>备注</th><th style="width: 60px;">操作</th></tr></thead>'+
			'<tbody><tr>'+
			'<td><input type="text" class="col-xs-12 chooseTicketName bind-change"/><input type="hidden" name="tickeId"/></td>'+
			'<td><select name="type" class="col-xs-12 form-control"><option value="1">机票</option><option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
			'<td><input type="text" class="col-xs-12" name="price"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="managerName"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="mobileNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" readonly="readonly" name="companyPhoneNumber"/></td>'+
			'<td><input type="text" class="col-xs-12" name="remark"/></td>'+
			'<td><button class="btn btn-xs btn-danger btn-restaurant-delete deleteResourceTicketList"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button></td></tr></tbody></table></div></div></div></div>';
			$(this).parents(".updateLineProductDaysList").find(".updateLineProductDaysDetailContainer").append(shoppingDetails);
			lineProduct.updateLineProductIndex += 1;
			//删除选中行程安排交通
			function deleteResourceShopList(e){
				$(this).parents(".updateTicketList").remove();
				lineProduct.updateRouteIndex();
			}
			$(".updateTicketList .deleteResourceTicketList").off().on("click", deleteResourceShopList);
			
			//绑定选择自费名称事件
			lineProduct.bindTicketEvent($(".updateTicketList .chooseTicketName"), e.data);
		},
		bindTicketEvent : function(obj, validator){
			obj.autocomplete({
				minLength:0,
				select:function(event, ui){
					var _this = this;
					$.ajax({
						url:""+APP_ROOT+"back/ticket.do?method=findTicketById&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
	                    dataType: "json",
	                    data: "id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var ticket = JSON.parse(data.ticket) || {};
								var thisParent = $(_this).parent().parent();
								thisParent.find("input[name=tickeId]").val(ui.item.id).trigger('change');
								thisParent.find("select[name=type]").val(ui.item.type  || 1);
								thisParent.find("input[name=managerName]").val(ticket.managerName);
								thisParent.find("input[name=mobileNumber]").val(ticket.mobileNumber);
								thisParent.find("input[name=companyPhoneNumber]").val(ticket.companyPhoneNumber);

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
						thisParent.find("input[name=tickeId]").val("");
						thisParent.find("select[name=type]").val(1);
						thisParent.find("input[name=price]").val("");
						thisParent.find("input[name=managerName]").val("");
						thisParent.find("input[name=mobileNumber]").val("");
						thisParent.find("input[name=companyPhoneNumber]").val("");

						// 更新表单验证的配置
						validator = rule.lineProductUpdate(validator);
					}
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/ticket.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_ticket&operation=view",
					dataType:"json",
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
				});
			});
		},
		submitInfoLineProduct:function(tab,clipboardMode, validator,isClose){
			if (!validator.form())   return;

			var $form = $(".updateLineProductContainer form"), travelLineData;
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
						id: getValue($form.eq(0), "lineProductId"),
						name : getValue($form.eq(0), "name"),
						travellineId: getValue($form.eq(0), "travellineId"),
						remark : getValue($form.eq(0), "remark"),
						type : getValue($form.eq(0), "type"),
						customerType : getValue($form.eq(0), "customerType"),
						status : getValue($form.eq(0), "status")
					}],
					guide : [{
						id : getValue($form.eq(1).find(".updateGuideList"), "templateId"),
						guideId : getValue($form.eq(1).find(".updateGuideList"), "guideNameId"),
						price : getValue($form.eq(1).find(".updateGuideList"), "guideFee"),
						remark : getValue($form.eq(1).find(".updateGuideList"), "remark")
					}],
					insurance : [{
						id : getValue($form.eq(1).find(".updateInsuranceList"), "templateId"),
						insuranceId : getValue($form.eq(1).find(".updateInsuranceList"), "insuranceId"),
						type : getValue($form.eq(1).find(".updateInsuranceList"), "type"),
						price : getValue($form.eq(1).find(".updateInsuranceList"), "price"),
						remark : getValue($form.eq(1).find(".updateInsuranceList"), "remark")
					}],
					busCompany : [{
						id : getValue($form.eq(1).find(".updateBusCompanyList"), "templateId"),
						busCompanyId : getValue($form.eq(1).find(".updateBusCompanyList"), "busCompanyId"),
						needSeatCount : getValue($form.eq(1).find(".updateBusCompanyList"), "needSeatCount"),
						busId : getValue($form.eq(1).find(".updateBusCompanyList"), "busLicenseNumberId"),
						price : getValue($form.eq(1).find(".updateBusCompanyList"), "seatPrice"),
						remark : getValue($form.eq(1).find(".updateBusCompanyList"), "remark")
					}],
					lineDayList : []
			}
			
			var dayList = $form.find(".updateLineProductDaysList");
			
			for(var i=0; i<dayList.length; i++){
				travelLineData.lineDayList[i] = {
						detailEditor : UE.getEditor("detailEditor-update-lineProduct-"+i+"").getContent(),
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
								showMessageDialog($( "#confirm-dialog-message" ), "请选择餐标名称！");
								return false;
							}
							var restaurantJson = {
									id : scheduleList.eq(j).find("[name=templateId]").val(),
									restaurantId : restaurantId,
									standardId : standardId,
									price : scheduleList.eq(j).find("[name=pricePerPerson]").val(),
									remark : scheduleList.eq(j).find("[name=remark]").val(),
									orderIndex : scheduleList.eq(j).attr("data-entity-index")
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
								showMessageDialog($( "#confirm-dialog-message" ), "请选择房型！");
								return false;
							}
							var hotelJson = {
									id : hotelList.eq(j).find("[name=templateId]").val(),
									hotelId : hotelId,
									hotelRoomId : hotelRoomId,
									price : hotelList.eq(j).find("[name=contractPrice]").val(),
									remark : hotelList.eq(j).find("[name=remark]").val(),
									orderIndex : hotelList.eq(j).attr("data-entity-index")
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
								showMessageDialog($( "#confirm-dialog-message" ), "请选择收费房型！");
								return false;
							}
							var scenicJson= {
									id : scenicList.eq(j).find("[name=templateId]").val(),
									scenicId : scenicId,
									itemId : itemId,
									price : scenicList.eq(j).find("[name=price]").val(),
									remark : scenicList.eq(j).find("[name=remark]").val(),
									orderIndex : scenicList.eq(j).attr("data-entity-index")
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
								showMessageDialog($( "#confirm-dialog-message" ), "请选择商品政策！");
								return false;
							}
							var shopJson = {
									id : shopList.eq(j).find("[name=templateId]").val(),
									shopId : shopId,
									policyId : policyId,
									remark : shopList.eq(j).find("[name=remark]").val(),
									orderIndex : shopList.eq(j).attr("data-entity-index")
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
						if(selfPayId){
							var selfPayJson = {
									id : selfPayList.eq(j).find("[name=templateId]").val(),
									selfPayItemId :selfPayList.eq(j).find("[name=selfPayItemId]").val(),
									selfPayId : selfPayId,
									price : selfPayList.eq(j).find("[name=contractPrice]").val(),
									remark : selfPayList.eq(j).find("[name=remark]").val(),
									orderIndex : selfPayList.eq(j).attr("data-entity-index")
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
						if(ticketId){
							ticketJson = {
									id : ticketList.eq(j).find("[name=templateId]").val(),
									ticketId : ticketId,
									type : ticketList.eq(j).find("[name=type]").val(),
									price : ticketList.eq(j).find("[name=price]").val(),
									remark : ticketList.eq(j).find("[name=remark]").val(),
									orderIndex : ticketList.eq(j).attr("data-entity-index")
								}
							travelLineData.lineDayList[i].ticket.push(ticketJson);
						}
					}
				} 
				
			}
			var lineDataJson = JSON.stringify(travelLineData);
			var id = getValue($form.eq(0), "lineProductId");
			var url = ""+APP_ROOT+"back/lineProduct.do?method=updateLineProduct&token="+$.cookie("token")+"&menuKey=resource_lineProduct&operation=update";
			var submitData = "id="+id+"&LineProductJsonUpdate="+encodeURIComponent(lineDataJson);
			if(clipboardMode){
				url = ""+APP_ROOT+"back/lineProduct.do?method=addLineProduct&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add";
				submitData = "LineProductJsonAdd="+encodeURIComponent(lineDataJson);
			}
			
			$.ajax({
    			url:url,
				type:"POST",
				data:submitData,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						//layer.close(addTravelLineLayer);
						showMessageDialog($( "#confirm-dialog-message" ),data.message, function(){
							//lineProduct.listLineProduct(0,"",1);
							if(isClose == 1){
								closeTab(menuKey+"-update");
								lineProduct.listLineProduct(0,"",1);
							}
						});
					}
				}
    		});
		},
		updateRouteIndex:function(){
			lineProduct.updateLineProductIndex -= 1;
			var itemList = $(".updateScheduleListContainer .timeline-item");
			for(var i=0; i<itemList.length; i++){
				itemList.eq(i).attr("data-entity-index", i);
			}
		},
		addQoute:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/lineProduct.do?method=getLineProductById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.lineProduct = JSON.parse(data.lineProduct);
					data.daysList = JSON.parse(data.daysList);
					console.log(data.daysList);
					var result = showDialog(data);
					if(result){
						var html = addQouteTemplate(data);
						addTab(menuKey+"-qoute","新增产品报价",html);
						
						var date = new Date();
						var d = date.getDate();
						var m = date.getMonth();
						var y = date.getFullYear();
						$('#tab-'+menuKey+'-qoute-content .addQouteMainForm .calendar').fullCalendar({
							 monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
							 monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
							 dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
							 dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
							 today: ["今天"],
							 buttonText:{
								 prev:     '上个月',
								 next:     '下个月',
								 today:    '今天'
							},
							events: [
								{
									title: '480元',
									start: '2015-08-12'
								},
								{
									title: '480元',
									start: '2015-08-13'
								},
								{
									title: '480元',
									start: '2015-08-14'
								},
								{
									title: '480元',
									start: '2015-08-15'
								},
								{
									title: '480元',
									start: '2015-08-16'
								},
								{
									title: '480元',
									start: '2015-08-17'
								},
								{
									title: '480元',
									start: '2015-08-18'
								},
								{
									title: '480元',
									start: '2015-08-19'
								}
							],
							selectable: true,
							selectHelper: true,
							select: function(start, end, allDay) {
								alert(start);
							}
						});
						
						$('#tab-'+menuKey+'-qoute-content .addQouteMainForm .btn-offer').click(function(){
							var dataClass = $(this).attr("data-class");
							var isChooseCurrent = $(this).parent().parent().find(".offer-list:not(.hide)").hasClass(dataClass); 
							$(this).parent().parent().find(".offer-list").addClass("hide");
							$(this).parent().parent().find(".offer-list").css("width","0px");
							$(this).parent().parent().find(".offer-list").css("left","0px");
							if(!isChooseCurrent){
								$(this).parent().parent().find("."+dataClass+" .tabbable").addClass("hide");
								$(this).parent().parent().find("."+dataClass+"").removeClass("hide");
								$(this).parent().parent().find("."+dataClass+"").animate({width:"700px",left:"-699px"},500,function(){
									$(this).parent().parent().find("."+dataClass+" .tabbable").removeClass("hide");
								});
							}
						});
						$('#tab-'+menuKey+'-qoute-content .addQouteMainForm .offer-list .scrollable').each(function () {
							var $this = $(this);
							$(this).ace_scroll({
								size: $(window).height()-185
							});
						});
						$(window).on('resize.scroll_reset', function() {
							$('#tab-'+menuKey+'-qoute-content .addQouteMainForm .offer-list .scrollable').height($(window).height()-185);
							$('.scrollable').ace_scroll('reset');
						});
						$('#tab-'+menuKey+'-qoute-content .addQouteMainForm #offerBusCompanySearch .btn-show-bus').click(function(){
							var tr = $(this).parent().parent().next();
							if(tr.hasClass("hide")){
								$(this).find("i").removeClass("fa-chevron-up");
								$(this).find("i").addClass("fa-chevron-down");
								tr.removeClass("hide");
							}
							else{
								$(this).find("i").removeClass("fa-chevron-down");
								$(this).find("i").addClass("fa-chevron-up");
								tr.addClass("hide");
							}
						});
						$('#tab-'+menuKey+'-qoute-content .addQouteMainForm #offerHotelSearch .btn-show-hotel-room').click(function(){
							var tr = $(this).parent().parent().next();
							if(tr.hasClass("hide")){
								$(this).find("i").removeClass("fa-chevron-up");
								$(this).find("i").addClass("fa-chevron-down");
								tr.removeClass("hide");
							}
							else{
								$(this).find("i").removeClass("fa-chevron-down");
								$(this).find("i").addClass("fa-chevron-up");
								tr.addClass("hide");
							}
						});
					}
				}
			});
		},
		exportLineProduct:function(id){
			checkLogin(function(){
				var url = ""+APP_ROOT+"back/export.do?method=exportLineProduct&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&lineProductId="+id+"";
				exportXLS(url);
			});
		},
		isEdited : function(){
			return lineProduct.edited;
		},
		save : function(){
			var tab = "tab-resource_lineProduct-update-content";
			var validator = rule.lineProductCheckor($('.updateLineProductContainer'));
			lineProduct.submitInfoLineProduct(tab,false,validator,1);
		}
	}
	exports.listLineProduct = lineProduct.listLineProduct;  
	exports.save = lineProduct.save;
	exports.isEdited = lineProduct.isEdited;
});