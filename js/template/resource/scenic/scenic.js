define(function(require, exports) {
	var menuKey = "resource_scenic";
	//跳转表格视图
	var listTemplate = require("./view/list"),
	    rule = require('./scenicRule'),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		tabId = "tab-"+menuKey+"-content";
	
	var scenic = {
		searchData : {
			name : "",
			status : ""
		},
		listScenic:function(page,name,status){
			scenic.searchData.name = name;
			scenic.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/scenic.do?method=listScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var scenicList = data.scenicList;
						//实例化对象
						scenicList = JSON.parse(scenicList);
						//讲字符串改为对象
						data.scenicList = scenicList;
						var html = listTemplate(data);
						addTab(menuKey,"景区管理",html);

						$("#"+tabId+" .btn-scenic-add").click(function(){
							scenic.addScenic();
						});
						$("#"+tabId+" .scenicList .btn-scenic-view").click(function(){
							var id = $(this).attr("data-entity-id");
							scenic.viewScenic(id);
						});
						
						$("#"+tabId+" .scenicList .btn-scenic-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							scenic.updateScenic(id,data.pageNo);
						});
						
						$("#"+tabId+" .scenicList .btn-scenic-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							scenic.deleteScenic(id,data.pageNo);
						});
						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							scenic.searchData = {
								name : $("#"+tabId+" input[name=scenic_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							scenic.listScenic(0,scenic.searchData.name,scenic.searchData.status);
						});
						
						
						//搜索按钮事件
						$("#"+tabId+" .btn-scenic-search").click(function(){
							scenic.searchData = {
								name : $("#"+tabId+" input[name=scenic_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							scenic.listScenic(0,scenic.searchData.name,scenic.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							scenic.listScenic(0,scenic.searchData.name,scenic.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							scenic.listScenic(previous,scenic.searchData.name,scenic.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							scenic.listScenic(next,scenic.searchData.name,scenic.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							scenic.listScenic(data.totalPage==0?data.totalPage:data.totalPage-1,scenic.searchData.name,scenic.searchData.status);
						});
						
						
						
					}
				}
			});
		},
		addScenic:function(){
			var html = addTemplate();
			var addScenicLayer = layer.open({
			    type: 1,
			    title:"新增景区信息",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['1190px', '700px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addScenicContainer .scenicMainForm"),
			    		$project = $(".addScenicContainer .scenicProjectForm");
			    	var validator = rule.check($(".addScenicContainer"));
			    	var itemValidator;
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
			    	scenic.getProvinceList($obj.find("select[name=provinceId]"));
			    	
			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId!=''){
				    		scenic.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}else{
				    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		scenic.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
				    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
			    	//给房间列表新增按钮绑定事件
			    	$project.find(".btn-scenic-standard-add").click(function(){
			    		var html = "<tr>" +
			    				"<td><input name=\"name\" class='col-sm-12' type=\"text\"/></td>" +
			    				"<td class=\"time\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right;padding-top:3px;\"><button class=\"btn btn-success btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
			    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12' type=\"text\"/></div></td>" +
			    				"<td><input name=\"remark\" class='col-sm-12' type=\"text\"/></td>" +
			    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\" btn-scenic-standard-delete\">删除</a></td>" +
			    				"</tr>";
			    		$project.find(".scenicItemStandardList tbody").append(html);
			    		//对景区管理的项目列表校验
			    		itemValidator = rule.checkItems($(".addScenicContainer .scenicItemStandardList"));
			    		//给餐标列表删除按钮绑定事件
			    		$project.find(".scenicItemStandardList tbody .btn-scenic-standard-delete").click(function(){
				    		$(this).parent().parent().fadeOut(function(){
				    			$(this).remove();
				    		});
				    	});
				    	
				    	$project.find(".scenicItemStandardList .datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
				    	
				    	// button按钮动态添加时限区间
				    	$project.find(".scenicItemStandardList .timeArea button.add").unbind().click(function(){
							var td = $(this).parent().parent().parent();
							var index = td.find("div").length;
							var timeLimitDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right;padding-top:3px;\"><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
							var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12' type=\"text\"/></div>";
							td.next().append(contractPriceInput);
							td.append(timeLimitDiv);
							itemValidator = rule.checkItems($(".addScenicContainer .scenicItemStandardList"));
							$project.find(".scenicItemStandardList .datepicker").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
							$project.find(".scenicItemStandardList .timeArea button.del").click(function(){
								var div = $(this).parent().parent();
								var divIndex = div.attr("data-index");
								div.fadeOut(function(){
									$(this).remove();
								});
								div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
									$(this).remove();
								});
							});
						});
				    	
			    	});
			    	
			    	//给提交按钮绑定事件
			    	$project.find(".btn-submit-scenic").click(function(){
			    		//表单验证
			    		if(!validator.form()){return;}
			    		if(itemValidator !=undefined){
			    			if(!itemValidator.form()){return}
			    		}
			    		var status = 0;
						if($obj.find(".scenic-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $obj.eq(0).serialize()+"&status="+status+"";
			    		console.log(form + "-------------------");
			    		var scenicItemJsonAdd = [];
			    		var scenicItemJsonAddTr = $project.find(".scenicItemStandardList tbody tr");
			    		scenicItemJsonAddTr.each(function(i){
			    			var scenicItemJson = {
		    					name : scenicItemJsonAddTr.eq(i).find("input[name=name]").val(),
		    					remark : scenicItemJsonAddTr.eq(i).find("input[name=remark]").val(),
		    					priceJsonAddList : []
			    			};
			    			var priceJsonAddTr = scenicItemJsonAddTr.eq(i).find("td.time div");
			    			priceJsonAddTr.each(function(j){
			    				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
			    				var priceJson = {
		    						divIndex : divIndex,
		    						startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
		    						endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
		    						contractPrice : priceJsonAddTr.eq(j).parent().next().find(".div-" + divIndex + "").find("input[name=contractPrice]").val()
			    				};
			    				scenicItemJson.priceJsonAddList.push(priceJson);
			    			});
			    			scenicItemJsonAdd.push(scenicItemJson);
			    		});
			    		/*var scenicItemJsonAdd = "[";
			    		//获取所有行数
			    		var scenicItemStandardListLength = $project.find(".scenicItemStandardList tbody tr").length;
			    		$project.find(".scenicItemStandardList tbody tr").each(function(i){
			    			var name = $(this).find("input[name=name]").val();
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
			    			
			    			
			    			if(i == (scenicItemStandardListLength-1)){
			    				var scenicJson = "{\"name\":\""+name+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"remark\":\""+remark+"\"}";
			    			}
			    			else{
			    				var scenicJson = "{\"name\":\""+name+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"remark\":\""+remark+"\"},";
			    			}
			    			scenicItemJsonAdd += scenicJson;
			    		});
			    		scenicItemJsonAdd += "]";*/
			    		
			    		scenicItemJsonAdd = JSON.stringify(scenicItemJsonAdd);
			    		console.log("---------");
			    		console.log(scenicItemJsonAdd);
			    		$.ajax({
							url:""+APP_ROOT+"back/scenic.do?method=addScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&scenicItemJsonAdd="+encodeURIComponent(scenicItemJsonAdd)+"",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addScenicLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									scenic.listScenic(0,"","");
									
								}
							}
						});
			    	});
			    	
			    	$project.find(".btn-scenic-standard-add").click();
			    }
			});
		},
		updateScenic:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var scenicInfo = JSON.parse(data.scenic);
						data.scenic = scenicInfo;
						var html = updateTemplate(data);
						var updateScenic = layer.open({
						    type: 1,
						    title:"编辑景区信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1190px', '700px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var $obj = $(".updateScenicContainer .scenicMainForm"),
					    			$project = $(".updateScenicContainer .scenicProjectForm");
						    	var validator = rule.check($(".updateScenicContainer"));
						    	var itemsValidator;
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
						    	scenic.getProvinceList($obj.find("select[name=provinceId]"));*/
						    	
						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId!=''){
							    		scenic.getCityList($obj.find("select[name=cityId]"),provinceId);
						    		}else{
							    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});
						    	
						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						       		if(cityId!=''){
							    		scenic.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}else{
							    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	
						    	
						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.scenic.provinceId != null){
						    		provinceId = data.scenic.provinceId;
						    	}
						    	scenic.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	var cityId = "";
						    	if(data.scenic.cityId != null){
						    		cityId = data.scenic.cityId;
						    		scenic.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    		
						    		var districtId = "";
						    		if(data.scenic.districtId != null){
						    			districtId = data.scenic.districtId;
						    			scenic.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
						    		}
						    	}
						    	
						    	// 修改时修改原来的standard，
						    	$project.find(".scenicItemStandardList .timeArea button.add").click(function(){
						    		scenic.modifyOriginalRecord($(this));
						    		itemsValidator = rule.checkItems($(".updateScenicContainer .scenicItemStandardList"));
						    	});
						    	
						    	// 修改时删除原来的standard，
						    	$project.find(".scenicItemStandardList .timeArea button.delete").click(function(){
						    		scenic.deleteOriginalRecord($(this));
								});
						    	
						    	$project.find(".scenicItemStandardList .btn-scenic-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var standardId = tr.attr("data-entity-id");
						    		if(standardId != null && standardId != ""){
						    			tr.addClass("deleted");
										$(this).parent().parent().fadeOut(function(){
											$(this).hide();
										});
						    		}
								});
						    	
						    	$project.find(".scenicItemStandardList .datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
						    	
						    	//给项目列表新增按钮绑定事件
						    	$project.find(".btn-scenic-standard-add").click(function(){
						    		var html = "<tr>" +
						    				"<td><input name=\"name\" class='col-sm-12' type=\"text\"/></td>" +
						    				"<td class=\"time\"><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-success btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div></td>" +
						    				"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12' type=\"text\"/></div></td>" +
						    				"<td><input name=\"remark\" class='col-sm-12' type=\"text\"/></td>" +
						    				"<td style=\"width:70px\"><a data-entity-id=\"\" class=\"btn-scenic-standard-delete\">删除</a></td>" +
						    				"</tr>";
						    		$project.find(".scenicItemStandardList tbody").append(html);
						    		//项目列表表单验证
						    		itemsValidator = rule.checkItems($(".updateScenicContainer .scenicItemStandardList"));
							    		//给餐标列表删除按钮绑定事件
						    		$project.find(".scenicItemStandardList tbody .btn-scenic-standard-delete").click(function(){
								    		var tr = $(this).parent().parent();
								    		var scenicStandardId = tr.attr("data-entity-id");
								    		if (!(scenicStandardId != null && scenicStandardId != "")) {
									    		$(this).parent().parent().fadeOut(function(){
									    			$(this).remove();
									    		});
								    		}
								    	});
								    	
						    		$project.find(".scenicItemStandardList .datepicker").datepicker({
											autoclose: true,
											todayHighlight: true,
											format: 'yyyy-mm-dd',
											language: 'zh-CN'
										});
								    	
								    	// button按钮动态修改包车时限区间
						    		$project.find(".scenicItemStandardList .timeArea button.add").unbind().click(function(){
											scenic.modifyOriginalRecord($(this));
											itemsValidator = rule.checkItems($(".updateScenicContainer .scenicItemStandardList"));
										});
										
							    	});
							   	
						    	//删除餐标
						    	//给餐标列表删除按钮绑定事件
						    	$project.find(".scenicItemStandardList tbody .btn-scenic-standard-delete").click(function(){
						    		var tr = $(this).parent().parent();
						    		var scenicStandardId = tr.attr("data-entity-id");
						    		console.debug(scenicStandardId);
						    		if (scenicStandardId != null && scenicStandardId != "") {
						    			tr.addClass("deleted");
						    			tr.fadeOut(function(){
							    			$(this).hide();
							    		});
						    		}
						    	});
						    	
						    	
						    	//提交表单
						    	$project.find(".btn-submit-scenic").click(function(){
						    		if(!validator.form()){return}
						    		if(itemsValidator !=undefined){
						    			if(!itemsValidator.form()){return}
						    		}
						    		
						    		var status = 0;
									if($obj.find(".scenic-status").is(":checked") == true){
										status = 1;
									}
									
						    		var form = $obj.eq(0).serialize()+"&status="+status+"";
						    		console.log(form + "-------------------");
						    		var scenicItemJsonAdd = [];
						    		var scenicItemJsonAddTr = $project.find(".scenicItemStandardList tbody tr:not(.deleted)");
						    		scenicItemJsonAddTr.each(function(i){
						    			var scenicItemJson = {
					    					id : scenicItemJsonAddTr.eq(i).attr("data-entity-id"),
					    					name : scenicItemJsonAddTr.eq(i).find("input[name=name]").val(),
					    					remark : scenicItemJsonAddTr.eq(i).find("input[name=remark]").val(),
					    					priceJsonAddList : [],
					    					priceJsonDelList : []
						    			};
						    			//添加、修改
						    			var priceJsonAddTr = scenicItemJsonAddTr.eq(i).find("td.time div:not(.deleted)");
						    			priceJsonAddTr.each(function(j){
						    				var divIndex = priceJsonAddTr.eq(j).attr("data-index");
						    				var priceJsonAdd = {
						    					id : priceJsonAddTr.eq(j).attr("data-entity-id"),
						    					divIndex : divIndex,
						    					startTime : priceJsonAddTr.eq(j).find("input[name=startTime]").val(),
						    					endTime : priceJsonAddTr.eq(j).find("input[name=endTime]").val(),
						    					contractPrice : priceJsonAddTr.eq(j).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val()
						    				};
						    				scenicItemJson.priceJsonAddList.push(priceJsonAdd);
						    			});
						    			//删除
						    			var priceJsonDelTr = scenicItemJsonAddTr.eq(i).find("td.time div.deleted");
						    			priceJsonDelTr.each(function(j){
						    				var id = priceJsonDelTr.eq(j).attr("data-entity-id");
						    				var priceJsonDel = {
						    					id : id
						    				};
						    				if(id){
						    					scenicItemJson.priceJsonDelList.push(priceJsonDel);
						    				}
						    			});
						    			scenicItemJsonAdd.push(scenicItemJson);
						    		});
						    		
						    		var scenicItemJsonDel = [];
						    		var scenicItemJsonDelTr = $project.find(".scenicItemStandardList tbody tr.deleted");
						    		scenicItemJsonDelTr.each(function(i){
						    			var id = scenicItemJsonDelTr.eq(i).attr("data-entity-id");
						    			var scenicItemJson = {
						    				id : id	
						    			};
						    			if(id){
						    				scenicItemJsonDel.push(scenicItemJson);
						    			}
						    		});
						    		scenicItemJsonAdd = JSON.stringify(scenicItemJsonAdd);
						    		console.log(scenicItemJsonAdd);
						    		console.log("-------------------------------");
						    		scenicItemJsonDel = JSON.stringify(scenicItemJsonDel);
						    		console.log(scenicItemJsonDel);
						    		$.ajax({
										url:""+APP_ROOT+"back/scenic.do?method=updateScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&scenicItemJsonAdd="+encodeURIComponent(scenicItemJsonAdd)+"&scenicItemJsonDel="+encodeURIComponent(scenicItemJsonDel),
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											console.log(data);
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateScenic);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												scenic.listScenic(pageNo,scenic.searchData.name,scenic.searchData.status);
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
		deleteScenic:function(id,pageNo){
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
								url:""+APP_ROOT+"back/scenic.do?method=deleteScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#"+tabId+" .scenicList .scenic-"+id+"").fadeOut(function(){
											scenic.listScenic(pageNo,scenic.searchData.name,scenic.searchData.status);
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
		viewScenic:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/scenic.do?method=getScenicById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var scenicInfo = JSON.parse(data.scenic);
						data.scenic = scenicInfo;
						var html = viewTemplate(data);
						layer.open({
						    type: 1,
						    title:"查看景区公司",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1024px', '600px'], //宽高
						    zIndex:1028,
						    content: html
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
    		var $project = $(".updateScenicContainer .scenicProjectForm"),
    			td = obj.parent().parent().parent(), 
    			index = td.find("div").length,
				timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white delete\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only\"></i></button></label></div>",
    			contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"contractPrice\" class='col-sm-12' type=\"text\"/></div>";
			td.append(timeLimitDiv);
			td.next().append(contractPriceInput);
			$project.find(".scenicItemStandardList .datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			$project.find(".scenicItemStandardList .timeArea button.delete").click(function(){
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
		}
	}
	exports.listScenic = scenic.listScenic;
});