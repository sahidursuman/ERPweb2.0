define(function(require, exports) {
	var menuKey = "resource_restaurant",
	    listTemplate = require("./view/list"),
	    rule = require("./restaurantRule"),
	    addTemplate = require("./view/add"),
	    updateTemplate = require("./view/update"),
	    viewTemplate = require("./view/view"),
	    tabId = "tab-" + menuKey + "-content";
	var restaurant = {
		searchData : {
			name : "",
			status : ""
		},
		listRestaurant:function(page,name,status){
			restaurant.searchData.name = name;
			restaurant.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/restaurant.do?method=listRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var restaurantList = data.restaurantList;
						restaurantList = JSON.parse(restaurantList);
						data.restaurantList = restaurantList;
						var html = listTemplate(data);
						addTab(menuKey,"餐厅管理",html);

						$("#"+tabId+" .restaurantList .btn-restaurant-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							restaurant.updateRestaurant(id,data.pageNo);
						});

						$("#"+tabId+" .restaurantList .btn-restaurant-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							restaurant.deleteRestaurant(id,data.pageNo);
						});


						$("#"+tabId+" .restaurantList .btn-restaurant-view").click(function(){
							var id = $(this).attr("data-entity-id");
							restaurant.viewRestaurant(id);
						});


						$("#"+tabId+" .btn-restaurant-add").click(function(){
							restaurant.addRestaurant();
						});

						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());

							restaurant.searchData={
									name : $("#"+tabId+" .search-area input[name=restaurant_name]").val(),
									status:$("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
							}

							restaurant.listRestaurant(0,restaurant.searchData.name,restaurant.searchData.status);
						});
						//搜索按钮事件
						$("#"+tabId+" .btn-restaurant-search").click(function(){
							restaurant.searchData = {
								name : $("#"+tabId+" input[name=restaurant_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							restaurant.listRestaurant(0,restaurant.searchData.name,restaurant.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							restaurant.listRestaurant(0,restaurant.searchData.name,restaurant.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							restaurant.listRestaurant(previous,restaurant.searchData.name,restaurant.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							restaurant.listRestaurant(next,restaurant.searchData.name,restaurant.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							restaurant.listRestaurant(data.totalPage == 0 ? data.totalPage : data.totalPage-1,restaurant.searchData.name,restaurant.searchData.status);
						});

					}
				}
			});
		},
		addRestaurant:function(){
			var html = addTemplate();
			var addRestaurantLayer = layer.open({
			    type: 1,
			    title:"新增餐厅",
			    skin: 'layui-layer-rim', //加上边框
			    area: '1190px', //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addRestaurantContainer .restaurantMainForm");
			    	//餐厅表单校验
			    	var validator = rule.check($obj);
			    	var mealValidator;
			    	//绑定账期模式选择事件
			    	$obj.find("select[name=payType]").change(function(){
			    		if($(this).val() == 1){
			    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
			    		}
			    		else{
			    			$(this).parent().parent().find(".payPeriod").addClass("hide");
			    		}
			    	});

			    	//初始化省数据
			    	restaurant.getProvinceList($obj.find("select[name=provinceId]"));

			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId != ""){
			    			restaurant.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}
			    		else{
			    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});

			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			    		if(cityId != ""){
			    			restaurant.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}
			    		else{
			    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});

			    	//给餐标列表新增按钮绑定事件
			    	$obj.find(".btn-restaurant-standard-add").click(function(){
			    		var html = "<tr>" +
			    				"<td><select name=\"type\"><option value=\"早餐\">早餐</option><option value=\"午餐\">午餐</option><option value=\"晚餐\">晚餐</option></select></td>" +
			    				"<td class=\"price\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"price\" maxlength=\"9\" type=\"text\" class=\"col-sm-12\" style=\"margin-right:10px;\" /></div></td>" +
			    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"menuList\" type=\"text\" maxlength=\"1000\" class=\"col-sm-12\" /></div></td>" +
			    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"remark\" type=\"text\" class=\"col-sm-12\" maxlength=\"1000\"/></div></td>" +
			    				"<td style=\"width:90px\"><a class=\"btn-restaurant-standard-delete\">删除</a></td>" +
			    				"</tr>";
			    		$obj.find(".restaurantStandardList tbody").append(html);
						$(window).trigger('resize');
			    		mealValidator = rule.checkMeal($(".restaurantMainForm .restaurantStandardList"));
			    		//给餐标列表删除按钮绑定事件
			    		$obj.find(".restaurantStandardList tbody .btn-restaurant-standard-delete").click(function(){
				    		$(this).parent().parent().fadeOut(function(){
				    			$(this).remove();
				    		});
				    	});
				    	//给餐标列表button按钮绑定事件
				    	/*$obj.find(".restaurantStandardList tbody button.add").unbind().click(function(){
				    		var td = $(this).parent().parent(),
								index = td.find("div").length,
								priceDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"price\" type=\"text\" style=\"margin-right:10px;\" /><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></div>",
				    			menuListDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"menuList\" type=\"text\" class=\"col-sm-12\" /></div>",
				    			remarkDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"remark\" type=\"text\" class=\"col-sm-12\" /></div></div>";
				    		td.append(priceDiv);
				    		td.next().append(menuListDiv);
				    		td.next().next().append(remarkDiv);
				    		$obj.find(".restaurantStandardList tbody button.del").click(function(){
								var div = $(this).parent();
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
							});
				    	});*/
				    	
			    		$obj.find(".restaurantStandardList .datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});

				    	// button按钮动态添加时限区间
			    		/*$obj.find(".restaurantStandardList .timeArea button.add").unbind().click(function(){
							var td = $(this).parent().parent().parent();
							var index = td.find("div").length;
							var timeLimitDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
							var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"contractPrice\" maxlength=\"7\" type=\"text\"/><label>&nbsp;元</label></div>";
							td.next().append(contractPriceInput);
							td.append(timeLimitDiv);
							mealValidator = rule.checkMeal($(".restaurantMainForm .restaurantStandardList"));
							$obj.find(".restaurantStandardList .datepicker").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
							$obj.find(".restaurantStandardList .timeArea button.del").click(function(){
								var div = $(this).parent().parent();
								var divIndex = div.attr("data-index");
								div.fadeOut(function(){
									$(this).remove();
								});
								div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
									$(this).remove();
								});
							});
						});*/

			    	});

			    	//给提交按钮绑定事件 mealValidator validator
			    	$obj.find(".btn-submit-restaurant").click(function(){
			    		if(!validator.form()){return}
			    		if(mealValidator !=undefined){
			    			if(!mealValidator.form()){return}
			    		}

			    		var status = 0;
						if($obj.find(".restaurant-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $obj.serialize()+"&status="+status+"";

			    		var $this = $(this),
			    		restaurantStandardJsonAdd = [];
			    		var priceJsonTr = $obj.find(".restaurantStandardList tbody tr");
			    		priceJsonTr.each(function(j){
			    			var restaurantJson = {
				    			type : priceJsonTr.eq(j).find("select[name=type]").val(),
				    			price : priceJsonTr.eq(j).find("input[name=price]").val(),
	    						menuList : priceJsonTr.eq(j).find("input[name=menuList]").val(),
		    					remark : priceJsonTr.eq(j).find("input[name=remark]").val()
						    };
				    		/*var priceJsonAddTr = priceJsonTr.eq(j).find("td.price div");
				    		priceJsonAddTr.each(function(i){
				    			var divIndex = priceJsonAddTr.eq(i).attr("data-index");
				    			var	priceJson = {
			    					divIndex : divIndex,
			    					startTime : priceJsonAddTr.eq(i).find("input[name=startTime]").val(),
			    					endTime : priceJsonAddTr.eq(i).find("input[name=endTime]").val(),
			    					contractPrice : priceJsonAddTr.eq(i).parent().next().find(".div-" + divIndex + "").find("input[name=contractPrice]").val()
			    					price : priceJsonAddTr.eq(i).find("input[name=price]").val(),
			    					menuList : priceJsonAddTr.eq(i).parent().next().find(".div-" + divIndex + "").find("input[name=menuList]").val(),
			    					remark : priceJsonAddTr.eq(i).parent().next().next().find(".div-" + divIndex + "").find("input[name=remark]").val()
				    			};
				    			
				    		});*/
				    		restaurantStandardJsonAdd.push(restaurantJson);
			    		})

			    		/*var restaurantStandardJsonAdd = "[";
			    		var restaurantStandardListLength = $obj.find(".restaurantStandardList tbody tr").length;
			    		$obj.find(".restaurantStandardList tbody tr").each(function(i){
			    			var type = $(this).find("select[name=type]").val();
			    			var typeName = $(this).find("input[name=typeName]").val();
			    			var menuList = $(this).find("input[name=menuList]").val();
			    			var remark = $(this).find("input[name=remark]").val();
			    			var priceJsonAdd = "[";
			    			var priceLength = $(this).find("td.time div").length;
			    			$(this).find("td.time div").each(function(i){
			    				var divIndex = $(this).attr("data-index");
								var startTime = $(this).find("input[name=startTime]").val();
								var endTime = $(this).find("input[name=endTime]").val();
								var contractPrice = $(this).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val();
								if(i==(priceLength-1)){
									priceJsonAdd += "{\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"}";
								}else{
									priceJsonAdd += "{\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"},";
								}
			    			});
			    			priceJsonAdd += "]";
							console.log(priceJsonAdd);

			    			if(i == (restaurantStandardListLength-1)){
			    				var restaurantStandardJson = "{\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"}";
			    			}
			    			else{
			    				var restaurantStandardJson = "{\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"},";
			    			}
			    			restaurantStandardJsonAdd += restaurantStandardJson;
			    		});
			    		restaurantStandardJsonAdd += "]";*/
			    		restaurantStandardJsonAdd = JSON.stringify(restaurantStandardJsonAdd);
			    		console.log(restaurantStandardJsonAdd);
			    		$.ajax({
							url:""+APP_ROOT+"back/restaurant.do?method=addRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&restaurantStandardJsonAdd="+encodeURIComponent(restaurantStandardJsonAdd)+"",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addRestaurantLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									restaurant.listRestaurant(0,"","");
								}
							}
						});
			    	});

			    	$obj.find(".btn-restaurant-standard-add").click();
			    }
			});
		},
		updateRestaurant:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var restaurantInfo = JSON.parse(data.restaurant);
						data.restaurant = restaurantInfo;
						var html = updateTemplate(data);
						var updateRestaurantLayer = layer.open({
						    type: 1,
						    title:"修改餐厅",
						    skin: 'layui-layer-rim', //加上边框
						    area: '1190px', //宽高
						    zIndex:1028,
						    content: html,
							//scrollbar: false,    // 推荐禁用浏览器外部滚动条
						    success:function(){
						    	var $obj = $(".updateRestaurantContainer .restaurantMainForm");
						    	var validator = rule.check($obj);
						    	var mealValidator = rule.checkMeal($(".updateRestaurantContainer .restaurantStandardList"));
						    	//绑定账期模式选择事件
						    	$obj.find("select[name=payType]").change(function(){
						    		if($(this).val() == 1){
						    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
						    		}
						    		else{
						    			$(this).parent().parent().find(".payPeriod").addClass("hide");
						    		}
						    	});

						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId != ""){
						    			restaurant.getCityList($(".restaurantMainForm select[name=cityId]"),provinceId);
						    		}
						    		else{
						    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});

						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						    		if(cityId != ""){
						    			restaurant.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}
						    		else{
						    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.restaurant.province != null){
						    		provinceId = data.restaurant.province.id;
						    		var cityId = "";
							    	if(data.restaurant.city != null){
							    		cityId = data.restaurant.city.id;
							    		var districtId = "";
							    		if(data.restaurant.district != null){
							    			districtId = data.restaurant.district.id;
							    		}
							    		restaurant.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
							    	}
							    	restaurant.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    	}
						    	restaurant.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	//
						    	$obj.find(".datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});

						    	// 修改时修改原来的standard，
						    	$obj.find(".restaurantStandardList .timeArea button.add").click(function(){
						    		var td = $(this).parent().parent().parent();
									var index = td.find("div").length;
									var timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white delete\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
									var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"contractPrice\" maxlength=\"9\" type=\"text\"/><label>&nbsp;元</label></div>";
									td.next().append(contractPriceInput);
									td.append(timeLimitDiv);
									mealValidator = rule.checkMeal($(".updateRestaurantContainer .restaurantStandardList"));
									$obj.find(".restaurantStandardList .datepicker").datepicker({
										autoclose: true,
										todayHighlight: true,
										format: 'yyyy-mm-dd',
										language: 'zh-CN'
									});
									$obj.find(".restaurantStandardList .timeArea button.delete").click(function(){
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
									});
						    	});

						    	// 修改时删除原来的standard，
						    	$obj.find(".restaurantStandardList .timeArea button.delete").click(function(){
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
								});

						    	$obj.find(".restaurantStandardList .btn-restaurant-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var standardId = tr.attr("data-entity-id");
						    		if(standardId != null && standardId != ""){
						    			tr.addClass("deleted");
										$(this).parent().parent().fadeOut(function(){
											$(this).hide();
										});
						    		}
								});

						    	//给餐标列表新增按钮绑定事件
						    	$obj.find(".btn-restaurant-standard-add").click(function(){
						    		var html = "<tr>" +
				    				"<td><select name=\"type\"><option value=\"早餐\">早餐</option><option value=\"午餐\">午餐</option><option value=\"晚餐\">晚餐</option></select></td>" +
				    				"<td><input name=\"price\" class=\"col-sm-12\" maxlength=\"9\" type=\"text\"/></td>" +
				    				"<td><input name=\"menuList\" class=\"col-sm-12\" type=\"text\" maxlength=\"1000\"/></td>" +
				    				"<td><input name=\"remark\" class=\"col-sm-12\" type=\"text\" maxlength=\"1000\"/></td>" +
				    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\" btn-restaurant-standard-delete\">删除</a></td>" +
				    				"</tr>";


//						    		var selLength = $(".restaurantStandardList select[name=type]").length;
//						    		if (selLength >= 3) {
//										html = "";
//									}

						    		$obj.find(".restaurantStandardList tbody").append(html);
									// 再调整对话框的高度
									$(window).trigger('resize');
						    		mealValidator = rule.checkMeal($(".updateRestaurantContainer .restaurantStandardList"));

//						    		var selArr = $(".restaurantStandardList select[name=type]");
//						    		for (var i = 0; i < selArr.length-1; i++) {
//						    			$(selArr[i]).attr("disabled","true");
//						    			var selected = $(selArr[i]).val();
//						    			$($(".restaurantStandardList select[name=type]")[selArr.length-1]).find("option[value="+selected+"]").remove();
//									}

						    		//给餐标列表删除按钮绑定事件
						    		$obj.find(".restaurantStandardList tbody .btn-restaurant-standard-delete").click(function(){
							    		var restaurantStandardId = $(this).attr("data-entity-id");
							    		if (!(restaurantStandardId != null && restaurantStandardId != "")) {
								    		$(this).parent().parent().fadeOut(function(){
								    			$(this).remove();
								    		});
							    		}
							    	});

						    		$obj.find(".restaurantStandardList .datepicker").datepicker({
										autoclose: true,
										todayHighlight: true,
										format: 'yyyy-mm-dd',
										language: 'zh-CN'
									});

							    	// button按钮动态修改包车时限区间
						    		/*$obj.find(".restaurantStandardList .timeArea button.add").unbind().click(function(){
										var td = $(this).parent().parent().parent();
										var index = td.find("div").length;
										var timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white delete\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
										var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"contractPrice\" type=\"text\"/><label>&nbsp;元</label></div>";
										td.next().append(contractPriceInput);
										td.append(timeLimitDiv);
										mealValidator = rule.checkMeal($(".updateRestaurantContainer .restaurantStandardList"));
										$obj.find(".restaurantStandardList .datepicker").datepicker({
											autoclose: true,
											todayHighlight: true,
											format: 'yyyy-mm-dd',
											language: 'zh-CN'
										});
										$obj.find(".restaurantStandardList .timeArea button.delete").click(function(){
											var div = $(this).parent().parent();
											var divIndex = div.attr("data-index");
											var entityId = div.attr("data-entity-id");
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
										});
									});*/
									
						    		$obj.find(".restaurantStandardList .btn-restaurant-standard-delete").click(function(){
										var tr = $(this).parent().parent();
							    		var standardId = tr.attr("data-entity-id");
							    		if(!(standardId != null && standardId != "")){
											$(this).parent().parent().fadeOut(function(){
												$(this).remove();
											});
							    		}
									});

						    	});

						    	//删除餐标
						    	//给餐标列表删除按钮绑定事件
						    	$obj.find(".restaurantStandardList tbody .btn-restaurant-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var restaurantStandardId = $(this).attr("data-entity-id");
						    		if (restaurantStandardId != null && restaurantStandardId != "") {
						    			tr.addClass("deleted");
						    			tr.fadeOut(function(){
							    			$(this).hide();
							    		});
						    		}
						    	});


						    	//提交表单
						    	$obj.find(".btn-submit-restaurant").click(function(){
						    		if(!validator.form()){return}
						    		if(mealValidator !=undefined){
						    			if(!mealValidator.form()){return}
						    		}
						    		var status = 0;
									if($(".restaurantMainForm .restaurant-status").is(":checked") == true){
										status = 1;
									}

						    		var form = $obj.serialize()+"&status="+status+"";
						    		console.log(form);

						    		var restaurantStandardJsonAdd = [];
						    		var restaurantStandardJsonAddTr =$obj.find(".restaurantStandardList tbody tr:not(.deleted)");
						    		restaurantStandardJsonAddTr.each(function(i){
						    			var id = restaurantStandardJsonAddTr.eq(i).attr("data-entity-id");
						    			var divIndex = restaurantStandardJsonAddTr.eq(i).attr("data-index");
						    			var restaurantStandardJson= {
						    				id : id,
						    				divIndex : divIndex,
						    				type : restaurantStandardJsonAddTr.eq(i).find("select[name=type]").val(),
						    				price : restaurantStandardJsonAddTr.eq(i).find("input[name=price]").val(),
						    				menuList : restaurantStandardJsonAddTr.eq(i).find("input[name=menuList]").val(),
						    				remark : restaurantStandardJsonAddTr.eq(i).find("input[name=remark]").val(),
						    			};
						    			//有效
						    			/*var priceJsonAddTr = restaurantStandardJsonAddTr.eq(i).find("td.time div:not(.deleted)");
						    			priceJsonAddTr.each(function(j){
						    				var entityId = priceJsonAddTr.eq(j).attr("data-entity-id");
						    				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
						    				var priceJsonAdd = {
						    					id : entityId,
					    						divIndex : divIndex,
					    						startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
					    						endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
					    						contractPrice : priceJsonAddTr.eq(j).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val()
						    				};
						    				restaurantStandardJson.priceJsonAddList.push(priceJsonAdd);
						    			});*/
						    			//已删除
						    			/*var priceJsonDelTr = restaurantStandardJsonAddTr.eq(i).find("td.time div.deleted");
						    			priceJsonDelTr.each(function(j){
						    				var entityId = priceJsonDelTr.eq(j).attr("data-entity-id");
						    				var priceJsonDel = {
						    					id : entityId
						    				};
						    				if(entityId){
						    					restaurantStandardJson.priceJsonDelList.push(priceJsonDel);
						    				}
						    			});*/
						    			restaurantStandardJsonAdd.push(restaurantStandardJson);
						    		});


						    		var restaurantStandardJsonDel = [];
						    		restaurantStandardJsonDelTr = $obj.find(".restaurantStandardList tbody tr.deleted");
						    		restaurantStandardJsonDelTr.each(function(i){
						    			var id = restaurantStandardJsonDelTr.eq(i).attr("data-entity-id");
						    			var restaurantStandardJson= {
						    				id : id
						    			};
						    			if(id){
						    				restaurantStandardJsonDel.push(restaurantStandardJson);
						    			}
						    		});
						    		console.log(restaurantStandardJsonDel);

						    		/*var restaurantStandardJsonAdd = "[";
						    		var restaurantStandardListLength = $obj.find(".restaurantStandardList tbody tr:not(.deleted)").length;
						    		$obj.find(".restaurantStandardList tbody tr:not(.deleted)").each(function(i){
						    			var id = $(this).attr("data-entity-id");
						    			var type = $(this).find("select[name=type]").val();
						    			var typeName = $(this).find("input[name=typeName]").val();
						    			var menuList = $(this).find("input[name=menuList]").val();
						    			var remark = $(this).find("input[name=remark]").val();

						    			// 打包修改后的新添加和修改过的数据
						    			var priceJsonAdd = "[";
						    			var priceJsonDel = "[";

						    			var priceUpdateLength = $(this).find("td.time div:not(.deleted)").length;
						    			$(this).find("td.time div:not(.deleted)").each(function(i){
											var divIndex = $(this).attr("data-index");
											var entityId = $(this).attr("data-entity-id");
											var startTime = $(this).find("input[name=startTime]").val();
											console.debug(startTime);
											var endTime = $(this).find("input[name=endTime]").val();
											var contractPrice = $(this).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val();
											var priceAdd = "";
											if (entityId != null && entityId != "") {
												if(i==(priceUpdateLength-1)){
													priceAdd = "{\"id\":\""+entityId+"\",\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"}";
												}else{
													priceAdd = "{\"id\":\""+entityId+"\",\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"},";
												}
											}else {
												if(i==(priceUpdateLength-1)){
													priceAdd = "{\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"}";
												}else{
													priceAdd = "{\"startTime\":\""+startTime+"\",\"endTime\":\""+endTime+"\",\"contractPrice\":\""+contractPrice+"\"},";
												}
											}
											priceJsonAdd += priceAdd;
										});

										var priceDeleteLength = $(this).find("td.time div.deleted").length;
										$(this).find("td.time div.deleted").each(function(i){
											var divIndex = $(this).attr("data-index");
											var entityId = $(this).attr("data-entity-id");
											var startTime = $(this).find("input[name=startTime]").val();
											var endTime = $(this).find("input[name=endTime]").val();
											var priceDel = "";
											var contractPrice = $(this).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val();
											if(i==(priceDeleteLength-1)){
												priceDel = "{\"id\":\""+entityId+"\"}";
											}else{
												priceDel = "{\"id\":\""+entityId+"\"},";
											}
											priceJsonDel += priceDel;
										});

										priceJsonAdd += "]";
										priceJsonDel += "]";

						    			if(i == (restaurantStandardListLength-1)){
						    				if(id != null && id != "")
						    					var restaurantStandardJson = "{\"id\":\""+id+"\",\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"}";
						    				else
						    					var restaurantStandardJson = "{\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"}";
						    			}
						    			else{
						    				if(id != null && id != "")
						    					var restaurantStandardJson = "{\"id\":\""+id+"\",\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"},";
						    				else
						    					var restaurantStandardJson = "{\"type\":\""+type+"\",\"typeName\":\""+typeName+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\",\"menuList\":\""+menuList+"\",\"remark\":\""+remark+"\"},";
						    			}
						    			restaurantStandardJsonAdd += restaurantStandardJson;
						    		});
						    		restaurantStandardJsonAdd += "]";

						    		var restaurantStandardJsonDel = "[";
						    		var restaurantStandardListLength = $obj.find(".restaurantStandardList tbody tr.deleted").length;
						    		$obj.find(".restaurantStandardList tbody tr.deleted").each(function(i){
						    			var restaurantStandardJson = "";
						    			var id = $(this).attr("data-entity-id");

						    			// 删除bus关联的price表的数据
										var priceJsonDel = "[";
										var priceLength = $(this).find("td.time div").length;
										$(this).find("td.time div").each(function(){
											var entityId = $(this).attr("data-entity-id");
											var priceJson = "";
											if(i == (priceLength-1)){
												priceJson = "{\"id\":\""+entityId+"\"}";
											}
											else{
												priceJson = "{\"id\":\""+entityId+"\"},";
											}
											priceJsonDel += priceJson;
										});
										priceJsonDel += "]";

						    			if(i == (restaurantStandardListLength-1)){
						    				var restaurantStandardJson = "{\"id\":\""+id+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\"}";
						    			}
						    			else{
						    				var restaurantStandardJson = "{\"id\":\""+id+"\",\"priceJsonDel\":\""+encodeURIComponent(priceJsonDel)+"\"},";
						    			}
						    			restaurantStandardJsonDel += restaurantStandardJson;*/
						    		/*restaurantStandardJsonDel += "]";

						    		console.info(restaurantStandardJsonAdd);
						    		console.info(restaurantStandardJsonDel);*/
						    		restaurantStandardJsonAdd = JSON.stringify(restaurantStandardJsonAdd);
						    		console.log(restaurantStandardJsonAdd);
						    		console.log("----------------------------");
						    		restaurantStandardJsonDel = JSON.stringify(restaurantStandardJsonDel);
						    		console.log(restaurantStandardJsonDel);
						    		$.ajax({
										url:""+APP_ROOT+"back/restaurant.do?method=updateRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&restaurantStandardJsonAdd="+encodeURIComponent(restaurantStandardJsonAdd)+"&restaurantStandardJsonDel="+encodeURIComponent(restaurantStandardJsonDel),
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateRestaurantLayer);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												restaurant.listRestaurant(pageNo,restaurant.searchData.name,restaurant.searchData.status);
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



		//update ========
		viewRestaurant:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/restaurant.do?method=getRestaurantById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var restaurantInfo = JSON.parse(data.restaurant);
					data.restaurant = restaurantInfo;
					var html = viewTemplate(data);
					var viewRestaurantLayer = layer.open({
					    type: 1,
					    title:"查看餐厅",
					    skin: 'layui-layer-rim', //加上边框
					    area: ['1190px','600px'], //宽高
					    zIndex:1028,
					    content: html,
					    success:function(){

					    }
					});
				}
			});
		},
		deleteRestaurant:function(id){
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
								url:""+APP_ROOT+"back/restaurant.do?method=deleteRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$(".main-content .page-content .restaurantList .restaurant-"+id+"").fadeOut(function(){
											restaurant.listRestaurant(0,restaurant.searchData.name,restaurant.searchData.status);
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
	exports.listRestaurant = restaurant.listRestaurant;
});