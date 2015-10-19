define(function(require, exports) {
	var menuKey = "resource_hotel",
	 	rule = require("./hotelRule"),
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		tabId = "tab-"+menuKey+"-content";
	
	var hotel = {
		searchData : {
			name : "",
			status : ""
		},
		listHotel:function(page,name,status){
			hotel.searchData.name = name;
			hotel.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/hotel.do?method=listHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&name="+encodeURIComponent(name)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//关闭遮罩
					layer.close(globalLoadingLayer);
					//根据返回值判断下一步操作，或者已出现错误
					var result = showDialog(data);
					//如果正确则就执行
					if(result){
						//返回一个json字符串 的数据
						var hotelList = data.hotelList;
						//实例化对象
						hotelList = JSON.parse(hotelList);
						//讲字符串改为对象
						data.hotelList = hotelList;
						var html = listTemplate(data);
						addTab(menuKey,"酒店管理",html);
						
						$("#" + tabId + " .hotelList .btn-hotel-view").click(function(){
							var id = $(this).attr("data-entity-id");
							hotel.viewHotel(id);
						});
						
						$("#" + tabId + " .btn-hotel-add").click(function(){
							hotel.addHotel();
						});
						$("#" + tabId + " .hotelList .btn-hotel-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							hotel.updateHotel(id,data.pageNo);
						});
						
						$("#" + tabId + " .hotelList .btn-hotel-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							hotel.deleteHotel(id,data.pageNo);
						});
						//搜索栏状态button下拉事件
						$("#" + tabId + " .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							hotel.searchData={
								name : $("#"+tabId+" .search-area input[name=hotel_name]").val(),
								status : $("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
						}	
							hotel.listHotel(0,hotel.searchData.name,hotel.searchData.status);
						});
						//搜索按钮事件
						$("#" + tabId + " .btn-hotel-search").click(function(){
							hotel.searchData ={
								name : $("#" + tabId + " input[name=hotel_name]").val(),
								status : $("#" + tabId + " .btn-status").find("button").attr("data-value")
							}
							hotel.listHotel(0,hotel.searchData.name,hotel.searchData.status);
						});
						//分页--首页按钮事件
						$("#" + tabId + " .pageMode a.first").click(function(){
							hotel.listHotel(0,hotel.searchData.name,hotel.searchData.status);
						});
						//分页--上一页事件
						$("#" + tabId + " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							hotel.listHotel(previous,hotel.searchData.name,hotel.searchData.status);
						});
						//分页--下一页事件
						$("#" + tabId + " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							hotel.listHotel(next,hotel.searchData.name,hotel.searchData.status);
						});
						//分页--尾页事件
						$("#" + tabId + " .pageMode a.last").click(function(){
							hotel.listHotel(data.totalPage == 0 ? data.totalPage : data.totalPage-1,hotel.searchData.name,hotel.searchData.status);
						});
						
						
						
					}
				}
			});
		},
		addHotel:function(){
			var html = addTemplate();
			var hotelRoomStandardList;
			var timeAreavalidator;
			var marketPricevalidator;
			var pricevalidator;
			var addHotelLayer = layer.open({
			    type: 1,
			    title:"新增酒店",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['1190px', '700px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addHotelContainer .hotelMainForm");
			    	var validator = rule.check($('.addHotelContainer'));
			    	var roomTd;
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
			    	hotel.getProvinceList($obj.find("select[name=provinceId]"));
			    	
			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId!=''){
				    		hotel.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}else{
			    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		hotel.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
			    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
			    	//给房间列表新增按钮绑定事件
			    	$obj.find(".btn-hotel-standard-add").click(function(){
			    		var html = "<tr>" +
			    				"<td><input name=\"type\" type=\"text\" class='col-sm-12'  maxlength=\"32\" /></td>" +
			    				"<td class=\"time\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px;\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right; padding-top:3px;\"><button class=\"btn btn-success btn-sm btn-white add addScenice\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
			    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"marketPrice\" class='col-sm-12 marketPrice' maxlength=\"9\" type=\"text\"/></div></td>" +
			    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12 price' maxlength=\"9\" type=\"text\"/></div></td>" +
			    				"<td><select name=\"containBreakfast\" class='no-padding foodsAll'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
			    				"<td><select name=\"containLunch\" class='no-padding foodsAll'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
			    				"<td><select name=\"containDinner\" class='no-padding foodsAll'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
			    				"<td><input name=\"broadband\" class='col-sm-12' type=\"text\"  maxlength=\"100\" /></td>" + 
			    				"<td><input name=\"areaSize\" class='col-sm-12' type=\"text\"  maxlength=\"5\" /></td>" +
			    				"<td><input name=\"guestNumber\" class='col-sm-12' type=\"text\"  maxlength=\"4\" /></td>" +
			    				"<td><input name=\"remark\" class='col-sm-12' type=\"text\"  maxlength=\"1000\" /></td>" +
			    				"<td style=\"width:70px\"><a data-entity-id=\"\" href=\"#\" class=\" btn-xs  btn-hotel-standard-delete\">删除</a></td>" +
			    				"</tr>";
			    		$obj.find(".hotelRoomStandardList tbody").append(html);
			    		// 对酒店房型设置表单验证
			    	    hotelRoomStandardList = rule.checkRoom($('.addHotelContainer .hotelRoomStandardList'));
			    	    
			    		//给餐标列表删除按钮绑定事件
			    		$obj.find(".hotelRoomStandardList tbody .btn-hotel-standard-delete").click(function(){
				    		$(this).parent().parent().fadeOut(function(){
				    			$(this).remove();
				    		});
				    	});
				    	$obj.find(".hotelRoomStandardList .datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});

				    	// button按钮动态添加时限区间 
				    	
				    	$obj.find(".hotelRoomStandardList .timeArea button.add").unbind().click(function(){
							var td = $(this).parent().parent().parent();
							roomTd = td;
							var index = td.find("div").length;
							var timeLimitDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:3px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right; padding-top:3px;\"><a href=\"#\" class=\"btn-white del\">删除</a></label></div>";
							var marketPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:4px\"><input name=\"marketPrice\" type=\"text\" class='col-sm-12 marketPrice'/></div>";
							var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:4px\"><input name=\"contractPrice\" type=\"text\" class='col-sm-12 price'/></div>";
							td.next().append(marketPriceInput);
							td.next().next().append(contractPriceInput);
							td.append(timeLimitDiv);
							timeAreavalidator = rule.checkTimeArea(td);
							marketPricevalidator = rule.checkTimeArea(td.next());
							pricevalidator = rule.checkTimeArea(td.next().next());
							$obj.find(".hotelRoomStandardList .datepicker").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
							$obj.find(".hotelRoomStandardList .timeArea .del").click(function(){
								var div = $(this).parent().parent();
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
						});

			    	});

			    	//给提交按钮绑定事件
			    	$obj.find(".btn-submit-hotel").click(function(){
			    		// 表单校验
			    		if(!validator.form()) { return; }
			    		if(!hotelRoomStandardList.form()){return;}
			    		if(roomTd != undefined){
			    			if(!timeAreavalidator.form()){return;}
			    			if(!marketPricevalidator.form()){return;}
			    			if(!pricevalidator.form()){return;}
			    		}
			    		
			    		/*if($('.addHotelContainer .hotelRoomStandardList')){
			    			
			    		}*/
			    		//判断
			    		/*if(){}
			    		*/
			    		var status = 0;
						if($obj.find(".hotel-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $obj.eq(0).serialize()+"&status="+status+"";

			    		var hotelRoomJsonAdd = [];
			    		var hotelRoomJsonAddTr = $obj.find(".hotelRoomStandardList tbody tr");
			    		hotelRoomJsonAddTr.each(function(i){
			    			var hotelRoomJson = {
		    					type : hotelRoomJsonAddTr.eq(i).find("input[name=type]").val(),
		    					containBreakfast : hotelRoomJsonAddTr.eq(i).find("select[name=containBreakfast]").val(),
		    					containLunch : hotelRoomJsonAddTr.eq(i).find("select[name=containLunch]").val(),
		    					containDinner : hotelRoomJsonAddTr.eq(i).find("select[name=containDinner]").val(),
		    					broadband : hotelRoomJsonAddTr.eq(i).find("input[name=broadband]").val(),
		    					areaSize : hotelRoomJsonAddTr.eq(i).find("input[name=areaSize]").val(),
		    					guestNumber : hotelRoomJsonAddTr.eq(i).find("input[name=guestNumber]").val(),
		    					remark : hotelRoomJsonAddTr.eq(i).find("input[name=remark]").val(),
		    					priceJsonAddList : []
			    			};
			    			var priceJsonAddTr = hotelRoomJsonAddTr.eq(i).find("td.time div");
			    			priceJsonAddTr.each(function(j){
			    				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
			    				var priceJsonAdd = {
		    						divIndex : divIndex,
		    						startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
		    						endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
		    						marketPrice : priceJsonAddTr.eq(j).parent().next().find(".div-" + divIndex + "").find("input[name=marketPrice]").val(),
		    						contractPrice : priceJsonAddTr.eq(j).parent().next().next().find(".div-" + divIndex + "").find("input[name=contractPrice]").val()
			    				}
			    				hotelRoomJson.priceJsonAddList.push(priceJsonAdd);
			    			});
			    			hotelRoomJsonAdd.push(hotelRoomJson);
			    		});
			    		if(hotelRoomJsonAdd.length == 0){
			    			showMessageDialog($( "#confirm-dialog-message" ),"酒店房间不能为空");
			    			return
			    		}
			    		hotelRoomJsonAdd = JSON.stringify(hotelRoomJsonAdd);
			    		console.log(hotelRoomJsonAdd.length);
			    		
			    		$.ajax({
							url:""+APP_ROOT+"back/hotel.do?method=addHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&hotelRoomJsonAdd="+encodeURIComponent(hotelRoomJsonAdd)+"",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addHotelLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									hotel.listHotel(0,"","");
								}
							}
						});
			    	});

			    	$obj.find(".btn-hotel-standard-add").click();
			    }
			});
		},
		updateHotel:function(id,pageNo){
			var timeAreavalidator;
			var marketPricevalidator;
			var pricevalidator;
			var roomTd;
			$.ajax({
				url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var hotelInfo = JSON.parse(data.hotel);
						data.hotel = hotelInfo;
						var html = updateTemplate(data);
						var updateHotel = layer.open({
						    type: 1,
						    title:"编辑酒店信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1190px', '700px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var $obj = $(".updateHotelContainer .hotelMainForm");
						    	var validator = rule.check($('.updateHotelContainer .hotelMainForm'));
						    	var roomValidator = rule.checkRoom($('.updateHotelContainer .hotelRoomStandardList'));
						    	//绑定账期模式选择事件
						    	var $_payType = $obj.find("select[name=payType] option");
						    	$_payType.each(function(){
						    		if($(this).val()==1){
						    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
						    		}
						    	});
						    	//绑定账期模式选择事件
						    	$obj.find("select[name=payType]").change(function(){
						    		if($(this).val() == 1){
						    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
						    		}
						    		else{
						    			$(this).parent().parent().find(".payPeriod").addClass("hide");
						    		}
						    	});
						    /*	//初始化省数据
						    	hotel.getProvinceList($(".hotelMainForm select[name=provinceId]"));*/

						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId!=''){
							    		hotel.getCityList($obj.find("select[name=cityId]"),provinceId);
						    		}else{
						    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});

						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						       		if(cityId!=''){
							    		hotel.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}else{
						    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});

						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.hotel.province != null){
						    		provinceId = data.hotel.province.id;
						    		var cityId = "";
							    	if(data.hotel.city != null){
							    		cityId = data.hotel.city.id;

							    		var districtId = "";
							    		if(data.hotel.district != null){
							    			districtId = data.hotel.district.id;
							    		}
							    		hotel.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
							    	}
							    	hotel.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    	}
						    	hotel.getProvinceList($obj.find("select[name=provinceId]"),provinceId);



						    	// 修改时修改原来的standard，
						    	$obj.find(".hotelRoomStandardList .timeArea button.add").click(function(){
						    		hotel.modifyOriginalRecord($(this));
						    		roomValidator = rule.checkRoom($('.updateHotelContainer .hotelRoomStandardList'));
						    	});

						    	// 修改时删除原来的standard，
						    	$obj.find(".hotelRoomStandardList .timeArea button.delete").click(function(){
						    		hotel.deleteOriginalRecord($(this));
								});

						    	$obj.find(".hotelRoomStandardList .btn-hotel-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var standardId = tr.attr("data-entity-id");
						    		if(standardId != null && standardId != ""){
						    			tr.addClass("deleted");
										$(this).parent().parent().fadeOut(function(){
											$(this).hide();
										});
						    		}
								});

						    	$obj.find(".hotelRoomStandardList .datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
						    	//给房间列表新增按钮绑定事件 <span class="necessary">*</span>
						    	$obj.find(".btn-hotel-standard-add").click(function(){
							    		var html = "<tr>" +
							    				"<td><input name=\"type\" type=\"text\" class='col-sm-12'/></td>" +
							    				"<td class=\"time\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-success btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
							    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"marketPrice\" class='col-sm-12' maxlength=\"9\" type=\"text\"/></div></td>" +
							    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12' maxlength=\"9\" type=\"text\"/></div></td>" +
							    				"<td><select name=\"containBreakfast\" class='no-padding foodsAll\'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
							    				"<td><select name=\"containLunch\" class='cno-padding foodsAll'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
							    				"<td><select name=\"containDinner\" class='no-padding foodsAll'><option value=\"0\">不含</option><option value=\"1\">包含</option></select></td>" +
							    				"<td><input name=\"broadband\" class='col-sm-12' type=\"text\"/></td>" +
							    				"<td><input name=\"areaSize\" class='col-sm-12' type=\"text\"/></td>" +
							    				"<td><input name=\"guestNumber\" class='col-sm-12' type=\"text\"/></td>" +
							    				"<td><input name=\"remark\" class='col-sm-12' type=\"text\"/></td>" +
							    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\"btn-hotel-standard-delete\">删除</a></td>" +
							    				"</tr>";
							    		$obj.find(".hotelRoomStandardList tbody").append(html); 
							    		roomValidator = rule.checkRoom($('.updateHotelContainer .hotelRoomStandardList'));
							    		// 对酒店房型设置表单验证
							    		console.log($('.updateHotelContainer .hotelRoomStandardList'));
							    		
							    		//给餐标列表删除按钮绑定事件
							    		$obj.find(".hotelRoomStandardList tbody .btn-hotel-standard-delete").click(function(){
								    		var tr = $(this).parent().parent(); 
								    		var hotelStandardId = tr.attr("data-entity-id");
								    		if (!(hotelStandardId != null && hotelStandardId != "")) {
									    		$(this).parent().parent().fadeOut(function(){
									    			$(this).remove();
									    		});
								    		}
								    	});

							    		$obj.find(".hotelRoomStandardList .datepicker").datepicker({
											autoclose: true,
											todayHighlight: true,
											format: 'yyyy-mm-dd',
											language: 'zh-CN'
										});

								    	// button按钮动态修改包车时限区间
							    		$obj.find(".hotelRoomStandardList .timeArea button.add").unbind().click(function(){
							    			hotel.modifyOriginalRecord($(this));
							    			roomValidator = rule.checkRoom($('.updateHotelContainer .hotelRoomStandardList'));
										});

							    	});

						    	//删除餐标
						    	//给餐标列表删除按钮绑定事件
						    	$obj.find(".hotelRoomStandardList tbody .btn-hotel-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var hotelStandardId = tr.attr("data-entity-id");
						    		console.debug(hotelStandardId);
						    		if (hotelStandardId != null && hotelStandardId != "") {
						    			tr.addClass("deleted");
						    			tr.fadeOut(function(){
							    			$(this).hide();
							    		});
						    		}
						    	});


						    	//提交表单
						    	$obj.find(".btn-submit-hotel").click(function(){
						    		// 表单校验
						    		console.log( );
						    		if(!validator.form()) { return; }
						    		if(!roomValidator.form()){return;}
						    		var status = 0;
									if($obj.find(".hotel-status").is(":checked") == true){
										status = 1;
									}
						    		var form = $obj.eq(0).serialize()+"&status="+status+"";


						    		console.log(form);

						    		var hotelRoomJsonAdd = [];
						    		var hotelRoomJsonAddTr = $obj.find(".hotelRoomStandardList tbody tr:not(.deleted)");
						    		hotelRoomJsonAddTr.each(function(i){
						    			var hotelRoomJson = {
					    					id : hotelRoomJsonAddTr.eq(i).attr("data-entity-id"),
					    					type : hotelRoomJsonAddTr.eq(i).find("input[name=type]").val(),
					    					containBreakfast : hotelRoomJsonAddTr.eq(i).find("select[name=containBreakfast]").val(),
					    					containLunch : hotelRoomJsonAddTr.eq(i).find("select[name=containLunch]").val(),
					    					containDinner : hotelRoomJsonAddTr.eq(i).find("select[name=containDinner]").val(),
					    					broadband : hotelRoomJsonAddTr.eq(i).find("input[name=broadband]").val(),
					    					areaSize : hotelRoomJsonAddTr.eq(i).find("input[name=areaSize]").val(),
					    					guestNumber : hotelRoomJsonAddTr.eq(i).find("input[name=guestNumber]").val(),
					    					remark : hotelRoomJsonAddTr.eq(i).find("input[name=remark]").val(),
					    					priceJsonAddList : [],
					    					priceJsonDelList : []
						    			};
						    			var priceJsonAddTr = hotelRoomJsonAddTr.eq(i).find("td.time div:not(.deleted)");
						    			priceJsonAddTr.each(function(j){
						    				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
						    				var priceJsonAdd = {
					    						id : priceJsonAddTr.eq(j).attr("data-entity-id"),
					    						divIndex : divIndex,
					    						startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
					    						endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
					    						marketPrice : priceJsonAddTr.eq(j).parent().next().find(".div-"+divIndex+"").find("input[name=marketPrice]").val(),
					    						contractPrice : priceJsonAddTr.eq(j).parent().next().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val()
						    				};
						    				hotelRoomJson.priceJsonAddList.push(priceJsonAdd);
						    			});
						    			var priceJsonDelTr = hotelRoomJsonAddTr.eq(i).find("td.time div.deleted");
						    			priceJsonDelTr.each(function(j){
						    				var priceJsonDel = {
					    						id : priceJsonDelTr.eq(j).attr("data-entity-id")
						    				};
						    				hotelRoomJson.priceJsonDelList.push(priceJsonDel);
						    			});
						    			hotelRoomJsonAdd.push(hotelRoomJson);
						    		});

						    		//删除餐标
						    		var hotelRoomJsonDel = [];
						    		var hotelRoomJsonDelTr = $obj.find(".hotelRoomStandardList tbody tr.deleted");
						    		hotelRoomJsonDelTr.each(function(i){
						    			var hotelRoomJson = {
						    				id : hotelRoomJsonDelTr.eq(i).attr("data-entity-id")
						    			};
						    			hotelRoomJsonDel.push(hotelRoomJson);
						    		});
						    		hotelRoomJsonAdd = JSON.stringify(hotelRoomJsonAdd);
						    		console.log(hotelRoomJsonAdd);
						    		console.log("-----------------------------");
						    		hotelRoomJsonDel = JSON.stringify(hotelRoomJsonDel);
						    		console.log(hotelRoomJsonDel);
						    		$.ajax({
										url:""+APP_ROOT+"back/hotel.do?method=updateHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&hotelRoomJsonAdd="+encodeURIComponent(hotelRoomJsonAdd)+"&hotelRoomJsonDel="+encodeURIComponent(hotelRoomJsonDel),
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateHotel);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);

												hotel.listHotel(0,hotel.searchData.name,hotel.searchData.status);

												hotel.listHotel(pageNo,hotel.searchData.name,hotel.searchData.status);

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
		deleteHotel:function(id,pageNo){
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
								url:""+APP_ROOT+"back/hotel.do?method=deleteHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$(".main-content .page-content .hotelList .hotel-"+id+"").fadeOut(function(){

											hotel.listHotel(0,hotel.searchData.name,hotel.searchData.status);

											hotel.listHotel(pageNo,hotel.searchData.name,hotel.searchData.status);

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
		viewHotel:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/hotel.do?method=getHotelById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var hotelInfo = JSON.parse(data.hotel);
						data.hotel = hotelInfo;
						var html = viewTemplate(data);
						var updateHotel = layer.open({
						    type: 1,
						    title:"查看酒店信息",
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
			var marketPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:7px\"><input name=\"marketPrice\" type=\"text\" class='col-sm-12'/></div>";
			var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:7px\"><input name=\"contractPrice\" type=\"text\" class='col-sm-12'/></div>";
			td.append(timeLimitDiv);
			td.next().append(marketPriceInput);
			td.next().next().append(contractPriceInput);
			$(".hotelRoomStandardList .datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$(".hotelRoomStandardList .timeArea button.delete").click(function(){
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
		}
	}
	exports.listHotel = hotel.listHotel;
});