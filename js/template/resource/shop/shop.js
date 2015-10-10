define(function(require, exports) {
	var menuKey = "resource_shop";
	var listTemplate = require("./view/list");
	var addTemplate = require("./view/add");
	var updateTemplate = require("./view/update");
	var viewTemplate = require("./view/view");
	var policyTemplate = require("./view/shopPolicy");
	var updatePolicyTemplate = require("./view/updateShopPolicy");
	var tabId = "tab-"+menuKey+"-content";
	var rule = require('./shopRule');
	
	var shop = {
		searchData : {
			name : "",
			status : ""
		},
		listShop:function(page,name,status){
			shop.searchData.name = name;
			shop.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/shop.do?method=listShop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					
					console.info(data)
					
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var shopList = data.shopList;
						shopList = JSON.parse(shopList);
						data.shopList = shopList;
						var html = listTemplate(data);
						addTab(menuKey,"商家管理",html);
						
						$(".main-content .page-content .shopList .btn-shop-view").click(function(){
							var id = $(this).attr("data-entity-id");
							shop.viewShop(id);
						});
						
						$(".main-content .page-content .shopList .btn-shop-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							shop.updateShop(id,data.pageNo);
						});
						
						$(".main-content .page-content .shopList .btn-shop-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							shop.deleteShop(id,data.pageNo);
						});
						
						
						
						$(".main-content .page-content .btn-shop-add").click(function(){
							shop.addShop();
						});
						
						$(".main-content .page-content .guideList .btn-shop-view").click(function(){
							var id = $(this).attr("data-entity-id");
							shop.viewShop(this,id);
						});
						
						//搜索栏状态button下拉事件
						$(".main-content .page-content .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							shop.searchData ={
								name : $("#" + tabId + " input[name=shop_name]").val(),
								status : $("#" + tabId + " .btn-status").find("button").attr("data-value")
							}
							shop.listShop(0,shop.searchData.name,shop.searchData.status);
						});
						//搜索按钮事件
						$(".main-content .page-content .btn-shop-search").click(function(){
							var name = $(".main-content .page-content input[name=shop_name]").val();
							var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
							shop.searchData ={
								name : $("#" + tabId + " input[name=shop_name]").val(),
								status : $("#" + tabId + " .btn-status").find("button").attr("data-value")
							}
							shop.listShop(0,shop.searchData.name,shop.searchData.status);
						});
						//分页--首页按钮事件
						$(".main-content .page-content .pageMode a.first").click(function(){
							var name = $(".main-content .page-content input[name=shop_name]").val();
							var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
							shop.listShop(0,shop.searchData.name,shop.searchData.status);
						});
						//分页--上一页事件
						$(".main-content .page-content .pageMode a.previous").click(function(){
							var name = $(".main-content .page-content input[name=shop_name]").val();
							var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							shop.listShop(previous,shop.searchData.name,shop.searchData.status);
						});
						//分页--下一页事件
						$(".main-content .page-content .pageMode a.next").click(function(){
							var name = $(".main-content .page-content input[name=shop_name]").val();
							var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							shop.listShop(next,shop.searchData.name,shop.searchData.status);
						});
						//分页--尾页事件
						$(".main-content .page-content .pageMode a.last").click(function(){
							var name = $(".main-content .page-content input[name=shop_name]").val();
							var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
							shop.listShop(data.totalPage-1,shop.searchData.name,shop.searchData.status);
						});
						
						
						
					}
				}
			});
		},
		addShop:function(){
			var html = addTemplate();
			var addshopLayer = layer.open({
			    type: 1,
			    title:"新增商家",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['95%', '90%'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	//对新增商家校验
			    	var validator = rule.check($(".shopContainer .shopMainForm"));
			    	var shopItem;
			    	var policyValidator;
			    	
			    	//初始化省数据
			    	shop.getProvinceList($(".shopMainForm select[name=provinceId]"));
			    	
			    	//给省份select绑定事件
			    	$(".shopMainForm select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId != ""){
			    			shop.getCityList($(".shopMainForm select[name=cityId]"),provinceId);
			    		}
			    		else{
			    			$(".shopMainForm select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$(".shopMainForm select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	//给城市select绑定事件
			    	$(".shopMainForm select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			    		if(cityId != ""){
			    			shop.getDistrictList($(".shopMainForm select[name=districtId]"),cityId);
			    		}
			    		else{
			    			$(".shopMainForm select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
			    	//给政策列表新增按钮绑定事件
			    	$(".btn-shop-standard-add").click(function(){
			    		var index = $(".shopStandardList tbody tr").length;
			    		var html = '<tr ><td><input name=\"name\" class="col-sm-12" type=\"text\"/></td>';
			    		html += '<td><select name="customerType" class="col-sm-12"><option value="0" selected="selected">散客</option><option value="1">团体</option></select></td>';
			    		html += "<td><button data-entity-id=\"\" class=\"btn btn-xs btn-success btn-shop-rate-add\"><i class=\"ace-icon fa fa-recorder bigger-240\"></i>添加政策</button><input hidden-index=\""+(index+1)+"\" type=\"hidden\" name=\"policyInput\"></td>";
			    		html += '<td><input name="remark" class="col-sm-12" type="text"/></td>';
			    		html += '<td style="width:70px"><a data-entity-id="" class=" btn-shop-standard-delete">删除</a></td>';
			    		html += "</tr>";
			    		$(".shopStandardList tbody").append(html);
			    		//政策列表的校验
			    		shopItem = rule.checkItems($(".shopContainer .shopPolicyForm"));
			    		//给餐标列表删除按钮绑定事件
				    	
				    	$(".shopStandardList .btn-shop-standard-delete").click(function(){
				    		$(this).parent().parent().fadeOut(function(){
								$(this).remove();
							});
						});
				    	
				    	
				    	$(".shopStandardList .datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
				    	// shopPolicyContainer
				    	$(".shopPolicyForm .btn-shop-rate-add").unbind().click(function(){
				    		var $policyInput = $(this).next();
				    		policyValidator = rule.checkShopItem($(".shopPolicyContainer"));
				    		var policyVal = $policyInput.val();
				    		policyVal = decodeURIComponent(policyVal);
				    		if (policyVal != null && policyVal != "") {
				    			var policyData = JSON.parse(policyVal);
							}
				    		var data = {}
				    		data.policyData = policyData;
				    		console.log(data);
				    		shop.updatePolicy(data,$policyInput);
				    		//policyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));//dsf ，
				    	});
				    	
			    	});
			    	
			    	$(".btn-shop-standard-add").click();
			    	//表单校验
			    	/*var validator = rule.check($(".shopContainer .shopMainForm"));
			    	var shopItem;*/
			    	//var policyValidator;
			    	
			    	//给提交按钮绑定事件
			    	$(".btn-submit-shop").click(function(){
			    		if(!validator.form()){return}
				    	if(shopItem != undefined){
				    		if(!shopItem.form()){
				    			return;
				    		}
				    	}
			    		var status = 0;
						if($(".shopMainForm .shop-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $(".shopMainForm").serialize()+"&status="+status+"";
			    		
			    		// 政策列表数据封装
			    		var policyDataList = [];
			    		$(".shopContainer .shopPolicyForm .shopStandardList tbody tr").each(function(i){
			    			console.debug(decodeURIComponent($(this).find("input[name=policyInput]").val()));
			    			var policyInputJson = "";
			    			if($(this).find("input[name=policyInput]").val()){
				    			policyInputJson = JSON.parse(decodeURIComponent($(this).find("input[name=policyInput]").val()));
			    			}
			    			var policyData = {
			    				name : $(this).find("input[name=name]").val(),
			    				customerType : $(this).find("select[name=customerType]").val(),
			    				policyInput : [],
			    				remark : $(this).find("input[name=remark]").val()
			    			}
			    			if(policyInputJson.length > 0){
			    				for(var i=0;i<policyInputJson.length;i++){
			    					policyData.policyInput.push(policyInputJson[i]);
			    				}
			    			}
			    			policyDataList.push(policyData);
			    		});
			    		var policyDataListJson = JSON.stringify(policyDataList);
			    		console.debug(policyDataListJson);
			    		$.ajax({
							url:""+APP_ROOT+"back/shop.do?method=addShop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&policyDataListJson="+encodeURIComponent(policyDataListJson)+"",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addshopLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										shop.listShop(0,"","");
									});
								}
							}
						});
			    	});
			    	
			    }
			});
		},
		updateShop:function(id,pageNo) {
			$.ajax({
				url:""+APP_ROOT+"back/shop.do?method=getShopById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var shopData = JSON.parse(data.shop);
						
						data.shop = shopData;	
						var html = updateTemplate(data);
						
						var updateshopLayer = layer.open({
						    type: 1,
						    title:"修改商家",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['95%', '90%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//初始化省数据
						    	//shop.getProvinceList($(".shopMainForm select[name=provinceId]"));
						    	var validator = rule.check($(".updateShopContainer .shopMainForm"));
								var policayValidator = rule.checkItems($(".shopPolicyForm .shopStandardList"));
						    	var shopPolicyList = shopData.shopPolicyList
						    	for(var i=0; i<shopPolicyList.length; i++){
						    		for(var j=0; j < shopPolicyList[i].shopTimeAreaList.length; j++){
						    			shopPolicyList[i].shopTimeAreaList[j].costMoneyList = shopPolicyList[i].shopTimeAreaList[j].shopCostRebateList;
						    		}
						    		$(".shopPolicyForm .shopStandardList input[name=policyInput]").eq(i).val(encodeURIComponent(JSON.stringify(shopPolicyList[i].shopTimeAreaList)));
						    	}
						    	//给省份select绑定事件
						    	$(".shopMainForm select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId != ""){
						    			shop.getCityList($(".shopMainForm select[name=cityId]"),provinceId);
						    		}
						    		else{
						    			$(".shopMainForm select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$(".shopMainForm select[name=districtId]").html("<option value=''>未选择</option>");
						    	});
						    	//给城市select绑定事件
						    	$(".shopMainForm select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						    		if(cityId != ""){
						    			shop.getDistrictList($(".shopMainForm select[name=districtId]"),cityId);
						    		}
						    		else{
						    			$(".shopMainForm select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	//级联选择城市列表//
						    	var provinceId = "";
						    	if(data.shop.province != null){
						    		provinceId = data.shop.province.id;
						    		var cityId = "";
							    	if(data.shop.city != null){
							    		cityId = data.shop.city.id;
							    		var districtId = "";
							    		if(data.shop.district != null){
							    			districtId = data.shop.district.id;
							    		}
							    		shop.getDistrictList($(".shopMainForm select[name=districtId]"),cityId,districtId);
							    	}
							    	shop.getCityList($(".shopMainForm select[name=cityId]"),provinceId,cityId);
						    	}
						    	shop.getProvinceList($(".shopMainForm select[name=provinceId]"),provinceId);
						    	
						    	// 修改时修改原来的standard，
						    	$(".shopStandardList .timeArea button.add").click(function(){
						    		shop.modifyOriginalRecord($(this));
						    		//绑定校验
						    		policayValidator = rule.checkItems($(".shopPolicyForm .shopStandardList"));
						    	});
						    	
						    	// 修改时删除原来的standard，
						    	$(".shopStandardList .timeArea button.delete").click(function(){
						    		shop.deleteOriginalRecord($(this));
								});
						    	
						    	$(".shopStandardList tbody .btn-shop-standard-delete").off().click(deleteStandard);
						    	function deleteStandard(obj){
						    		var obj = $(this), id = obj.attr("data-entiy-id");
						    		
					    			if(id){
					    				var dialogObj = $( "#confirm-dialog-message" )
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
															url:""+APP_ROOT+"back/shop.do?method=deleteShopPolicy&token="+$.cookie("token")+"&menuKey=resource_shop&operation=delete",
										                    dataType: "json",
										                    data:"id="+id,
										                    success: function(data) {
										                    	layer.close(globalLoadingLayer);
																var result = showDialog(data);
																if(result){

														    		obj.parent().parent().fadeOut(function(){
														    			$(this).remove();
														    		});
																	layer.msg(data.message || "删除成功");
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
					    			}else{
					    				obj.parent().parent().fadeOut(function(){
					    					$(this).remove();
							    		});
					    			}
						    		
						    	}
						    	
						    	$(".shopStandardList .datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
						    	
						    	function showPolicyList(){
						    		var $policyInput = $(this).next();
						    		var policyVal = $policyInput.val();
						    		policyVal = decodeURIComponent(policyVal);
						    		if (policyVal != null && policyVal != "") {
						    			var policyData = JSON.parse(policyVal);
									}
						    		var data = {}
						    		data.policyData = policyData;
						    		shop.updateShopPolicy(data,$policyInput);
						    	}

						    	$(".shopStandardList .btn-shop-rate-add").off().on("click", showPolicyList);
						    	//给政策列表新增按钮绑定事件
						    	$(".btn-shop-standard-add").click(function(){
						    		var index = $(".shopStandardList tbody tr").length;
						    		var html = '<tr><td><input name=\"name\" class="col-sm-12" type=\"text\"/></td>';
						    		html += '<td><select name="customerType" class="col-sm-12"><option value="0" selected="selected">散客</option><option value="1">团体</option></select></td>';
						    		html += "<td><button data-entity-id=\"\" class=\"btn btn-xs btn-success btn-shop-rate-add\"><i class=\"ace-icon fa fa-recorder bigger-240\"></i>添加政策</button><input hidden-index=\""+(index+1)+"\" type=\"hidden\" name=\"policyInput\"></td>";
						    	/*	html += '<td class="time"><div data-index="1" class="clearfix div-1" style="margin-top:2px"><input name="startTime" type="text" class="datepicker" style="width:100px"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px"/><label class="timeArea" style="float:right"><button class="btn btn-success btn-sm btn-white add"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>' ;
						    		html += '<td><div data-index="1" class="clearfix div-1" style="margin-top:2px"><input name="guideRate" class="col-sm-12" type="text"/></div></td>';
						    		html += '<td><div data-index="1" class="clearfix div-1" style="margin-top:2px"><input name="travelAgencyRate" class="col-sm-12" type="text"/></div></td>';*/
						    		html += '<td><input class="col-sm-12" name=\"remark\" type=\"text\"/></td>';
						    		html += '<td style=\"width:70px\"><a data-entity-id=\"\" class=\"btn-shop-standard-delete\">删除</a></td>';
						    		html += "</tr>";
						    		$(".shopStandardList tbody").append(html);
						    		addPolicyValidator = rule.checkShopItem($(""));
						    		policayValidator = rule.checkItems($(".shopPolicyForm .shopStandardList"));

							    	$(".shopStandardList tbody .btn-shop-standard-delete").click(deleteStandard);
							    	
							    	$(".shopStandardList .btn-shop-rate-add").off().on("click", showPolicyList);
							    	
							    	$(".shopStandardList .datepicker").datepicker({
										autoclose: true,
										todayHighlight: true,
										format: 'yyyy-mm-dd',
										language: 'zh-CN'
									});
							    	
							    	// button按钮动态修改包车时限区间
									$(".shopStandardList .timeArea button.add").unbind().click(function(){
										shop.modifyOriginalRecord($(this));
									});
						    	});
						    	
						    	
						    	//提交表单
						    	$(".btn-submit-shop").click(function(){
						    		var validator = rule.check($(".updateShopContainer .shopMainForm"));
									var policayValidator = rule.checkItems($(".shopPolicyForm .shopStandardList"));
									if(!validator.form()){return;}
									if(validator !=undefined){
										if(!policayValidator.form()){return;}
									}
						    		var status = 0;
									if($(".shopMainForm .shop-status").is(":checked") == true){
										status = 1;
									}
						    		var form = $(".shopMainForm").serialize()+"&status="+status+"";
						    		
						    		var shopStandardJsonAdd = [];
						    		var $policy = $(".updateShopContainer .shopPolicyForm");
						    		
						    		$policy.find(".shopStandardList tbody tr").each(function(index){
						    			var rebateJsonUpdate = {};
						    			var id = $(this).attr("data-entity-id"),
						    			    name = $(this).find("input[name=name]").val(),
						    			    customerType = $(this).find("select[name=customerType]").val(),
						    			    remark = $(this).find("input[name=remark]").val(),
						    			    policyVal = $(this).find("input[name=policyInput]").val(),
						    			    policyData = {};

							    		policyVal = decodeURIComponent(policyVal);
							    		if (policyVal != null && policyVal != "") {
							    			policyData = JSON.parse(policyVal);
										}
						    			if(id){
						    				rebateJsonUpdate = {
						    					id : id,
						    					name : name,
						    					customerType : customerType,
						    					remark : remark,
						    					policyInput : policyData
						    				}
						    			}else{
						    				rebateJsonUpdate = {
							    				name : name,
							    				customerType : customerType,
							    				remark : remark,
							    				policyInput : policyData
							    			}
						    			}
						    			if(name){
							    			shopStandardJsonAdd.push(rebateJsonUpdate);
						    			}
						    		});
						    		for(var i=0; i<shopStandardJsonAdd.length; i++){
					    				for(var j=0; j<shopStandardJsonAdd[i].policyInput.length;j++){
					    					if(shopStandardJsonAdd[i].policyInput[j].shopCostRebateList){
						    					delete shopStandardJsonAdd[i].policyInput[j].shopCostRebateList;
						    				}
					    				}
					    			}
						    		var shopStandardData = JSON.stringify(shopStandardJsonAdd); 
						    		console.log(shopStandardData)
						    		$.ajax({
										url:""+APP_ROOT+"back/shop.do?method=updateShop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",														
										data:form+"&policyDataList=" + decodeURIComponent(shopStandardData),
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateshopLayer);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												shop.listShop(pageNo,shop.searchData.name,shop.searchData.status);
											}
										}
									});
						    		
						    	});
						    }
						});
						//修改结束
					}
				}
			});
		},
		deleteShop:function(id,pageNo){
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
								url:""+APP_ROOT+"back/shop.do?method=deleteShop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$(".main-content .page-content .shopList .shop-"+id+"").fadeOut(function(){
											shop.listShop(pageNo,shop.searchData.name,shop.searchData.status);
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
		viewShop:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/shop.do?method=getShopById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var shopData = JSON.parse(data.shop);
						data.shop = shopData;	
						var html = viewTemplate(data);
						
						var updateshopLayer = layer.open({
						    type: 1,
						    title:"查看商家信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1024px', '600px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						
						    }
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
		modifyOriginalRecord:function(obj){
    		var td = obj.parent().parent().parent();
			var index = td.find("div").length;
			var timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white delete\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
			var guideRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"guideRate\" type=\"text\"/></div>";
			var travelAgencyRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"travelAgencyRate\" type=\"text\"/></div>";
			var customerRebateMoneyInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"customerRebateMoney\" type=\"text\"/></div>";
			var parkingRebateMoneyInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"parkingRebateMoney\" type=\"text\"/></div>";
			td.append(timeLimitDiv);
			td.next().append(guideRateInput);
			td.next().next().append(travelAgencyRateInput);
			td.next().next().next().append(customerRebateMoneyInput);
			td.next().next().next().next().append(parkingRebateMoneyInput);
			$(".shopStandardList .datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$(".shopStandardList .timeArea button.delete").click(function(){
				var div = $(this).parent().parent();
				var entityId = div.attr("data-entity-id");
				var divIndex = div.attr("data-index");
				if (entityId != null && entityId != "") {
					div.addClass("deleted");
					div.fadeOut(function(){
						$(this).hide();
					});
				}else{
					div.fadeOut(function(){
						$(this).remove();
					});
				}
				div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
				div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
				div.parent().next().next().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
				div.parent().next().next().next().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
			});
		},
		deleteOriginalRecord:function(obj){
			var div = obj.parent().parent();
			var entityId = div.attr("data-entity-id");
			var divIndex = div.attr("data-index");
			if (entityId != null && entityId != "") {
				div.addClass("deleted");
				div.fadeOut(function(){
					$(this).hide();
				});
			}else{
				div.fadeOut(function(){
					$(this).remove();
				});
			}
			div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().next().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().next().next().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
		},
		updatePolicy:function(data,obj){
			console.log(data);
			var html = policyTemplate(data);
			var policyLayer = layer.open({
				 type: 1,
			    title:"新增购物政策",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['85%', '80%'], //宽高
			    zIndex:1029,
			    content: html,
			    success:function(){
			    	var policyValidator;
			    	var policyHtml = '<tr class="timeArea">'+
			    	'<td data-index="1" class="clearfix div-1" style="margin-bottom:3px"><div><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/>'+
			    	'<label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px">'+
			    	'<input name="costMoneyStart" type=\"text\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label>'+
			    	'<input name=\"costMoneyEnd\" type=\"text\" style=\"width:100px\"/><label class=\"priceArea\" style=\"float:right\">'+
			    	'<button class=\"btn btn-success btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i>'+
			    	'</button></label></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px"><input name="guideRate" type="text"/>'+
			    	'</div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px"><input name="travelAgencyRate" type="text"/>'+
			    	'</div></td><td style=\"width:70px\"><button data-entity-id=\"\" class=\"btn btn-xs btn-danger btn-shop-policy-delete\">'+
			    	'<i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td></tr>';
//			    	$(".policyForm .shopPolicyList tbody").append(policyHtml);
			    	
			     	$(".policyForm .btn-shop-policy-add").click(function(){
			     		
			    		$(".policyForm .shopPolicyList tbody").append(policyHtml);
			    	    policyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
			    		shop.datePicter($(".shopPolicyList .datepicker"));
			    		
			    		$(".shopPolicyList .btn-shop-policy-delete").click(function(){
			    			$(this).closest("tr").remove();
			    		});
			    		
			    		$(".shopPolicyList .priceArea button.add").unbind().click(function(){
				    		shop.addPriceArea($(this));
				    		policyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
							shop.datePicter($(".shopPolicyList .datepicker"));
							$(".shopPolicyList .priceArea button.del").click(function(){
								shop.deletePriceArea($(this));
					    	});
				    	});
			    	});
			    	
			    	shop.datePicter($(".shopPolicyList .datepicker"));
			    	
			    	$(".shopPolicyList .btn-shop-policy-delete").click(function(){
			    		$(this).closest("tr").remove();
			    	});
			    	$(".shopPolicyList .priceArea button.add").unbind().click(function(){
			    		shop.addPriceArea($(this));
						shop.datePicter($(".shopPolicyList .datepicker"));
						$(".shopPolicyList .priceArea button.del").click(function(){
							shop.deletePriceArea($(this));
				    	});
			    	});
			    	// 提交数据，临时保存起来
			    	$(".btn-submit-shop-policy").click(function(){
			    		if( policyValidator != undefined){
			    			if(!policyValidator.form()){return;}
			    		}else{
			    			showMessageDialog($( "#confirm-dialog-message" ),"政策不能为空");
			    			return;
			    		}
			    		var result = shop.submitShopPolicy(obj);
				    	if(result){
				    		layer.close(policyLayer);
				    		showMessageDialog($( "#confirm-dialog-message" ), "成功添加购物政策");
				    	}
			    	});
			    }
			});
		},
		updateShopPolicy:function(data,obj){
			var html = updatePolicyTemplate(data);
			var policyLayer = layer.open({
				 type: 1,
			    title:"修改购物政策",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['85%', '80%'], //宽高
			    zIndex:1029,
			    content: html,
			    success:function(){
			    	var modiPolicyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
			    	var policyHtml = '<tr class="timeArea">'+
			    	'<td data-index="1" class="clearfix div-1" style="margin-bottom:3px"><div><input name=\"startTime\" type=\"text\" class=\"datepicker col-sm-5\"/>'+
			    	'<label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker col-sm-5\"/></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px">'+
			    	'<input name="costMoneyStart" type=\"text\" class="col-sm-4"/><label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label>'+
			    	'<input name=\"costMoneyEnd\" type=\"text\" class="col-sm-4"/><label class=\"priceArea col-sm-2\">'+
			    	'<button class=\"btn btn-success btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i>'+
			    	'</button></label></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px"><input name="guideRate" type="text"/>'+
			    	'</div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px"><input name="travelAgencyRate" type="text"/>'+
			    	'</div></td><td style=\"width:70px\"><button data-entity-id=\"\" class=\"btn btn-xs btn-danger btn-shop-policy-delete\">'+
			    	'<i class=\"ace-icon fa fa-trash-o bigger-120\"></i></button></td></tr>';
//			    	$(".policyForm .shopPolicyList tbody").append(policyHtml);
			    	function deletePolic(){
			    		var dialogObj = $( "#confirm-dialog-message" ), obj = $(this), id=obj.attr("data-entity-id");
			    		if(id){
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
			    							$.ajax({
												url:""+APP_ROOT+"back/shop.do?method=deleteShopTimeArea&token="+$.cookie("token")+"&menuKey=resource_shop&operation=delete",
							                    dataType: "json",
							                    data:"id="+id,
							                    success: function(data) {
							                    	layer.close(globalLoadingLayer);
													var result = showDialog(data);
													if(result){
										    			obj.parent().parent().remove();
														layer.msg(data.message || "删除成功");
													}
							                    }
							                });
			    							$( this ).dialog( "close" );
			    							
			    						}
			    					}
			    				],
			    				open:function(event,ui){
			    					$(this).find("p").text("你确定要删除该条记录？");
			    				}
			    			});
			    		}else{
			    			obj.parent().parent().remove();
			    		}
		    			
			    	}
			    	
			     	$(".policyForm .btn-shop-policy-add").click(function(){
			    		$(".policyForm .shopPolicyList tbody").append(policyHtml);
			    		modiPolicyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
			    		shop.datePicter($(".shopPolicyList .datepicker"));
			    		
			    		$(".shopPolicyList .btn-shop-policy-delete").click(deletePolic);
			    		
			    		$(".shopPolicyList .priceArea button.add").unbind().click(function(){
				    		shop.addPolicyPriceArea($(this));
				    		modiPolicyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
							shop.datePicter($(".shopPolicyList .datepicker"));
							$(".shopPolicyList .priceArea button.del").click(shop.deletePolicyPriceArea);
				    	});
			    	});
			    	
			    	shop.datePicter($(".shopPolicyList .datepicker"));
			    	
			    	$(".shopPolicyList .btn-shop-policy-delete").click(deletePolic);
			    	$(".shopPolicyList .priceArea button.add").unbind().click(function(){
			    		shop.addPolicyPriceArea($(this));
			    		modiPolicyValidator = rule.checkShopItem($(".policyForm .shopPolicyList"));
						shop.datePicter($(".shopPolicyList .datepicker"));
						$(".shopPolicyList .priceArea button.del").click(shop.deletePolicyPriceArea);
			    	});
			    	$(".shopPolicyList .priceArea button.del").unbind().click(shop.deletePolicyPriceArea);
			    	// 提交数据，临时保存起来
			    	$(".btn-submit-shop-policy").click(function(){
			    		if( modiPolicyValidator != undefined){
			    			if(!modiPolicyValidator.form()){return;}
			    		}else{
			    			showMessageDialog($( "#confirm-dialog-message" ),"政策不能为空");
			    			return;
			    		}
			    		var result = shop.submitShopPolicy(obj);
				    	if(result){
				    		layer.close(policyLayer);
				    		showMessageDialog($( "#confirm-dialog-message" ), "成功更新购物政策");
				    	}
			    	});
			    }
			});
		},
		deletePriceArea:function(obj){
			var div = obj.parent().parent();
			var divIndex = div.attr("data-index");
			div.fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
				$(this).remove();
			});
		},
		addPriceArea:function(obj){
			var td = obj.parent().parent().parent();
			var index = td.find("div").length;
			var priceAreaDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"costMoneyStart\" type=\"text\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"costMoneyEnd\" type=\"text\" style=\"width:100px\"/><label class=\"priceArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
			var guideRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"guideRate\" type=\"text\"/></div>";
			var travelAgencyRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"travelAgencyRate\" type=\"text\"/></div>";
			td.append(priceAreaDiv);
			td.next().append(guideRateInput);
			td.next().next().append(travelAgencyRateInput);
		},
		addPolicyPriceArea:function(obj){
			var td = obj.parent().parent().parent();
			var index = td.find("div").length;
			var priceAreaDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"costMoneyStart\" type=\"text\" class=\"col-sm-4\"/><label class=\"col-sm-2 control-label center\">&nbsp;至&nbsp;</label><input name=\"costMoneyEnd\" type=\"text\" class=\"col-sm-4\"/><label class=\"priceArea col-sm-2\"><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
			var guideRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"guideRate\" type=\"text\" class=\"col-sm-12\"/></div>";
			var travelAgencyRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:3px\"><input name=\"travelAgencyRate\"class=\"col-sm-12\"  type=\"text\"/></div>";
			td.append(priceAreaDiv);
			td.next().append(guideRateInput);
			td.next().next().append(travelAgencyRateInput);
		},
		deletePolicyPriceArea:function(){
			var obj = $(this), id= obj.attr("data-entity-id"), div = obj.parent().parent(),divIndex = div.attr("data-index");
			if(id){
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
    							$.ajax({
									url:""+APP_ROOT+"back/shop.do?method=deleteShopCostRebate&token="+$.cookie("token")+"&menuKey=resource_shop&operation=delete",
				                    dataType: "json",
				                    data:"id="+id,
				                    success: function(data) {
				                    	layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											div.fadeOut(function(){
												$(this).remove();
											});
											div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
												$(this).remove();
											});
											div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
												$(this).remove();
											});
											layer.msg(data.message || "删除成功");
										}
				                    }
				                });
    							$( this ).dialog( "close" );
    						}
    					}
    				],
    				open:function(event,ui){
    					$(this).find("p").text("你确定要删除该条记录？");
    				}
    			});
			}else{
				div.fadeOut(function(){
					$(this).remove();
				});
				div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
				div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
					$(this).remove();
				});
			}
			
		},
		datePicter:function(obj){
			obj.datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},
		submitShopPolicy:function(policyInput){
			var $form = $(".shopPolicyContainer > form"),policyData;
			function getValue(obj, name){
				var thisObj = obj.find("input[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}
			function trim(str){ 
	             return str.replace(/(^\s*)|(\s*$)/g, ""); 
	         }
			var startTime = getValue($form.eq(0), "startTime");
			var endTime = getValue($form.eq(0), "endTime");
			if(trim(startTime) == ""){
				showMessageDialog($( "#confirm-dialog-message" ), "请输入起始日期");
				return false;
			}
			if(trim(endTime) == ""){
				showMessageDialog($( "#confirm-dialog-message" ), "请输入截止日期");
				return false;
			}
			var shopPolicyList = [];
			$(".shopPolicyList tbody tr").each(function(){
				var shopPolicy = {
					id : $(this).attr("data-entity-id"),
					startTime : $(this).find("input[name=startTime]").val(),
					endTime : $(this).find("input[name=endTime]").val(),
					costMoneyList:[]
				}
				var $td = $($(this).find("td")[1]);
				$td.find("div").each(function(){
					var index = $(this).attr("data-index");
					var costMoney = {
						id : $(this).find("input[name=costMoneyStart]").attr("data-entity-id"),
						costMoneyStart :  $(this).find("input[name=costMoneyStart]").val(),
						costMoneyEnd :  $(this).find("input[name=costMoneyEnd]").val(),
						guideRate :  $(this).parent().parent().find(".div-"+index+" input[name=guideRate]").val()/100,
						travelAgencyRate :  $(this).parent().parent().find(".div-"+index+" input[name=travelAgencyRate]").val()/100
					}
					shopPolicy.costMoneyList.push(costMoney);
				});
				shopPolicyList.push(shopPolicy);
			});
			var timeAreaJson = JSON.stringify(shopPolicyList);
			console.log(timeAreaJson);
			policyInput.val(encodeURIComponent(timeAreaJson));
			return true;
		}
	}
	exports.listShop = shop.listShop;
});