define(function(require, exports) {
	var menuKey = "resource_selfpay",
		listTemplate = require("./view/list"),
		rule = require('./selfRule'),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		tabId = "tab-"+menuKey+"-content";
	
	var selfpay = {
		searchData : {
			name : "",
			status : ""
		},
		listSelfPay:function(page,name,status){
			selfpay.searchData.name = name;
			selfpay.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/selfpay.do?method=listSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var selfPayList = data.selfPayList;
						//实例化对象
						selfPayList = JSON.parse(selfPayList);
						//讲字符串改为对象
						data.selfPayList = selfPayList;
						var html = listTemplate(data);
						addTab(menuKey,"自费管理",html);
						
						$("#"+tabId+" .btn-selfpay-add").click(selfpay.addSelfpay);
						$("#"+tabId+" .selfpayList .btn-selfpay-view").click(selfpay.viewSelfpay);
						$("#"+tabId+" .selfpayList .btn-selfpay-edit").click(selfpay.updateSelfpay);
						$("#"+tabId+" .selfpayList .btn-selfpay-delete").click(selfpay.deleteSelfpay);
						
						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							selfpay.searchData = {
								name : $("#"+tabId+" input[name=selfpay_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							selfpay.listSelfPay(0,selfpay.searchData.name,selfpay.searchData.status);
						});
						
						//搜索按钮事件
						$("#"+tabId+" .btn-selfpay-search").click(function(){
							selfpay.searchData = {
								name : $("#"+tabId+" input[name=selfpay_name]").val(),
								status : $("#"+tabId+" .btn-status").find("button").attr("data-value")
							}
							selfpay.listSelfPay(0,selfpay.searchData.name,selfpay.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							selfpay.listSelfPay(0,selfpay.searchData.name,selfpay.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							selfpay.listSelfPay(previous,selfpay.searchData.name,selfpay.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							selfpay.listSelfPay(next,selfpay.searchData.name,selfpay.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							selfpay.listSelfPay(data.totalPage == 0?data.totalPage:data.totalPage-1,selfpay.searchData.name,selfpay.searchData.status);
						});
						
					}
				}
			});
		},
		addSelfpay:function(){
			var html = addTemplate();
			var addSelfpayLayer = layer.open({
			    type: 1,
			    title:"新增自费项目",
			    skin: 'layui-layer-rim', //加上边框
			    area: '1190px', //宽高
			    zIndex:1028,
			    content: html,
				scrollbar: false,    // 推荐禁用浏览器外部滚动条
			    success:function(){
			    	var $obj = $(".add-selfpay-form .selfpayMainForm"),
			    	    $price = $(".add-selfpay-form .priceList"),
			    	    validator = rule.check($(".add-selfpay-form")),
			    	    priceItemValidator;

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
			    	selfpay.getProvinceList($obj.find("select[name=provinceId]"));
			    	
			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId!=''){
				    		selfpay.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}else{
				    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		selfpay.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
				    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	//添加价格列表
			    	$price.find(".btn-price-add").click(function(){
						var html = '<tr><td><input name="name" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100"/></td>'+
							'<td><select class="col-sm-12" name="customerType" style="min-width:100px;"><option value="0">散客</option><option value="1">团体</option></select></td>'+
							'<td><div class="col-sm-12 no-padding dateTimeArea"><input name="startTime" type="text" class="datepicker col-sm-4" /><label class="col-sm-2 control-label center datepicker">&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker col-sm-4"/><label class="priceArea col-sm-2" style="padding-top:3px;"><button class="btn btn-success btn-sm btn-white add addScenice"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'+
							'<td><div class="col-sm-12 no-padding"><input name="contractPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
							'<td><div class="col-sm-12 no-padding"><input name="marketPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
							'<td><div class="col-sm-12 no-padding"><input name="guideRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
							'<td><div class="col-sm-12 no-padding"><input name="travelAgencyRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
							'<td><input name="remark" type="text" class="col-sm-12" style="min-width:100px;" maxlength="1000"/></div></td>'+
							'<td style="width:70px"><a class=" btn-price-delete">删除</a></td></tr>';
						$price.find("tbody").append(html);
						// 再调整对话框的高度
						$(window).trigger('resize');
						priceItemValidator = rule.checkItems($(".add-selfpay-form .priceList"));
						$price.find(".datepicker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
						$price.find(".btn-price-delete").click(function(){
							$(this).parent().parent().fadeOut(function(){
								$(this).remove();
						    	selfpay.numberRate("add-selfpay-form");
							});
						});
				    	selfpay.numberRate("add-selfpay-form");
				    	$price.find(".dateTimeArea button.add").off().on("click",function(){
				    		selfpay.addDateArea($(this));
				    		priceItemValidator = rule.checkItems($(".add-selfpay-form .priceList"));
				    	})
			    	});
					
			    	//给提交按钮绑定事件
			    	$(".add-selfpay-form .btn-submit-selfpay").click(function(){
			    		if(!validator.form()){return;}
			    		
			    		console.log(priceItemValidator);
			    		if(priceItemValidator != undefined){
			    			if(!priceItemValidator.form()){return;}
			    		}
			    		var status = 0;
						if($obj.find(".selfpay-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $obj.serialize()+"&status="+status+"";
			    		
			    		var priceJsonAdd = [];
			    		var priceListLength = $price.find("tbody tr").length;
			    		$price.find("tbody tr").each(function(i){
							var priceJson = {};
							var name = $(this).find("input[name=name]").val(),
							customerType = $(this).find("select[name=customerType]").val(),
							remark = $(this).find("input[name=remark]").val();
							
							if(name != ""){
								priceJson = {
									name : name,
									customerType : customerType,
									dateArea : [],
									remark : remark
								}
								
								$(this).find(".dateTimeArea").each(function(){
									var index = $(this).attr("data-index") || 1,
									$parents = $(this).parent().parent(),
									startTime = $parents.find("input[name=startTime]").eq(index-1).val(),
									endTime = $parents.find("input[name=endTime]").eq(index-1).val(),
									contractPrice = $parents.find("input[name=contractPrice]").eq(index-1).val(),
									marketPrice = $parents.find("input[name=marketPrice]").eq(index-1).val(),
									guideRate = $parents.find("input[name=guideRate]").eq(index-1).val(),
									travelAgencyRate = $parents.find("input[name=travelAgencyRate]").eq(index-1).val();

									if(startTime != "" && startTime != ""){
										var dateArea = {
											startTime : startTime,
											endTime : endTime,
											price : contractPrice || 0,
											marketPrice : marketPrice || 0,
											guideRate : guideRate || 0,
											travelAgencyRate : travelAgencyRate || 0,
										}
										priceJson.dateArea.push(dateArea);
									}
								});
							}
							
							priceJsonAdd.push(priceJson)
						});
			    		console.log(priceJsonAdd);
			    		priceJsonAdd = JSON.stringify(priceJsonAdd);
			    		$.ajax({
							url:""+APP_ROOT+"back/selfpay.do?method=addSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							type:"POST",
							data:form+"&priceJsonAdd="+encodeURIComponent(priceJsonAdd),
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									layer.close(addSelfpayLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									selfpay.listSelfPay(0,"","");
								}
							}
						});
			    	});
			    	
			    	//$(".btn-selfpay-standard-add").click();
			    }
			});
		},
		addDateArea : function($obj){
			var $parents = $obj.parent().parent().parent().parent(), td = $parents.find("td");
			td.eq(2).append('<div class="col-sm-12 no-padding dateTimeArea"><input type="hidden" name="rebateListId" value="" /><input name="startTime" value="" type="text" class="datepicker col-sm-4"><label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label><input name="endTime" value="" type="text" class="datepicker col-sm-4"><label class="priceArea col-sm-2" style="padding-top:3px;"><button class="btn btn-success btn-sm btn-white del"><i class="ace-icon fa fa-minus bigger-110 icon-only" style="line-height: 20px"></i></button></label></div>');
			td.eq(3).append('<div class="col-sm-12 no-padding" style="padding-top:8px!important;"><input name="contractPrice" value="" class="col-sm-12" type="text" maxlength="10"></div>');
			td.eq(4).append('<div class="col-sm-12 no-padding" style="padding-top:8px!important;"><input name="marketPrice" value="" class="col-sm-12" type="text" maxlength="10"></div>');
			td.eq(5).append('<div class="col-sm-12 no-padding" style="padding-top:8px!important;"><input name="guideRate" value="" class="col-sm-12" type="text" maxlength="5"></div>');
			td.eq(6).append('<div class="col-sm-12 no-padding" style="padding-top:8px!important;"><input name="travelAgencyRate" value="" class="col-sm-12" type="text" maxlength="5"></div>');
			$parents.find(".dateTimeArea button.del").off().on("click", selfpay.deteleDateArea);
			$parents.find(".dateTimeArea").eq($parents.find(".dateTimeArea").length - 1).attr("data-index", $parents.find(".dateTimeArea").length);
			selfpay.numberRate("update-selfpay-form");
	    	selfpay.numberRate("add-selfpay-form");
			$parents.find(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
			
		},
		deteleDateArea : function(){
			var $obj = $(this), $parents = $(this).parent().parent().parent().parent(), td = $parents.find("td"), index = $obj.parent().parent().attr("data-index");
			for(var i=2; i < 7; i++){
				var $children =  td.eq(i).children("div");
				$children.eq(index - 1).fadeOut(function(){
					$(this).remove();
					selfpay.numberRate("update-selfpay-form");
			    	selfpay.numberRate("add-selfpay-form");

					for(var j=0; j<$parents.find(".dateTimeArea").length;j++){
						$parents.find(".dateTimeArea").eq(j).attr("data-index", j+1)
					}
				});
			}
		},
		
		updateSelfpay:function(pageNo){
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/selfpay.do?method=getSelfPayById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					 layer.close(globalLoadingLayer);
					 console.log(data);
					var result = showDialog(data);
					if(result){
						var selfpayInfo = JSON.parse(data.selfpay);
						data.selfpay = selfpayInfo;
						var html = updateTemplate(data);
						var updateSelfpay = layer.open({
						    type: 1,
						    title:"编辑自费项目信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: '1190px', //宽高
						    zIndex:1028,
						    content: html,
							scrollbar: false,    // 推荐禁用浏览器外部滚动条
						    success:function(){
						    	var $obj = $(".update-selfpay-form .selfpayMainForm"),
						    		$price = $(".update-selfpay-form .priceList"),
						    	    validator = rule.check($(".update-selfpay-form")),
						    	    priceItemValidator;
						    	$price.find("tr").each(function(){
							    	for(var i=0; i<$price.find(".dateTimeArea").length;i++){
							    		$(this).find(".dateTimeArea").eq(i).attr("data-index", i+1)
									}
						    	})
						    	
						    	
						    	selfpay.numberRate("update-selfpay-form");
						    	//绑定账期模式选择事件
					    		if(data.selfpay.payType == 1){
					    			$obj.find(".payPeriod").removeClass("hide");
					    		}
					    		else{
					    			$obj.find(".payPeriod").addClass("hide");
					    		}
						    	$obj.find("select[name=payType]").change(function(){
						    		if($(this).val() == 1){
						    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
						    		}
						    		else{
						    			$(this).parent().parent().find(".payPeriod").addClass("hide");
						    		}
						    	});
						    	//时间控件
						    	$price.find(".datepicker").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId!=''){
						    			selfpay.getCityList($obj.find("select[name=cityId]"),provinceId);
						    		}else{
							    		$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});
						    	
						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						       		if(cityId!=''){
						       			selfpay.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}else{
							    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	
						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.selfpay.province != null){
						    		provinceId = data.selfpay.province.id;
									var cityId = "";
									if(data.selfpay.city != null){
										cityId = data.selfpay.city.id;
										
										var districtId = "";
										if(data.selfpay.district != null){
											districtId = data.selfpay.district.id;
										}
										selfpay.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
									}
									selfpay.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    	}
						    	selfpay.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	//修改价格列表
								$price.find(".dateTimeArea button.add").off().on("click",function(){ 
									selfpay.addDateArea($(this));
									priceItemValidator = rule.checkItems($(".update-selfpay-form .priceList"));
									});
								
								//$price.find(".dateTimeArea button.del").off().on("click", selfpay.deteleDateArea);
								$price.find(".dateTimeArea button.del").click(function(){
									var $paren = $(this).parent().parent(),
										id = $paren.children().eq(0).val();
										
									var $obj = $(this), 
										$parents = $(this).parent().parent().parent().parent(), 
										td = $parents.find("td"), 
										index = $obj.parent().parent().attr("data-index");
									
									selfpay.deleteSelfrebate(id,"selfrebate",$parents,$obj,td,index);
								});

								$price.find(".btn-price-delete").click(function(){									
									var $parent = $(this).parent().parent(),
										id =  $parent.attr("data-entity-id");
									selfpay.deleteSelfitem(id,"selfitem",$parent);
									});
						    	//新增价格列表
						    	$price.find(".btn-price-add").click(function(){
									var html = '<tr><td><input name="name" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100"/></td>'+
									'<td><select class="col-sm-12" name="customerType" style="min-width:100px;"><option value="0">散客</option><option value="1">团体</option></select></td>'+
									'<td><div class="col-sm-12 no-padding dateTimeArea"><input name="startTime" type="text" class="datepicker col-sm-4" /><label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker col-sm-4"/><label class="priceArea col-sm-2" style="padding-top:3px;"><button class="btn btn-success btn-sm btn-white add addScenice"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'+
									'<td><div class="col-sm-12 no-padding"><input name="contractPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
									'<td><div class="col-sm-12 no-padding"><input name="marketPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
									'<td><div class="col-sm-12 no-padding"><input name="guideRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
									'<td><div class="col-sm-12 no-padding"><input name="travelAgencyRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
									'<td><input name="remark" type="text" class="col-sm-12" style="min-width:100px;"/></div></td>'+
									'<td style="width:70px"><a class="btn-price-delete">删除</a></td></tr>';

									$price.find("tbody").append(html);
									// 再调整对话框的高度
									$(window).trigger('resize');
									//修改是的项目价格价格列表验证
									priceItemValidator = rule.checkItems($(".update-selfpay-form .priceList"));
									$price.find(".datepicker").datepicker({
										autoclose: true,
										todayHighlight: true,
										format: 'yyyy-mm-dd',
										language: 'zh-CN'
									});
									$price.find(".btn-price-delete").click(function(){
										$(this).parent().parent().fadeOut(function(){
											$(this).remove();
										});
										selfpay.numberRate("update-selfpay-form");
									});
									selfpay.numberRate("update-selfpay-form");
									$price.find(".dateTimeArea button.add").off().on("click",function(){
										selfpay.addDateArea($(this));
										priceItemValidator = rule.checkItems($(".update-selfpay-form .priceList"));
									} );
								});
						    	//修改  提交事件
						    	$(".update-selfpay-form .btn-submit-selfpay").click(function(){
						    		if(!validator.form()){return;}
						    		if(priceItemValidator != undefined){
						    			if(!priceItemValidator.form()){return;}
						    		}
						    		
						    		var status = 0;
									if($obj.find(".selfpay-status").is(":checked") == true){
										status = 1;
									}
									var id = $obj.find("input[name=selfpayId]").val();
						    		var form = $obj.serialize()+"&status="+status+"&id="+id+"";
						    		
						    		var selfPayUpdate = [];
						    		var priceListLength = $price.find("tbody tr").length;
						    		$price.find("tbody tr").each(function(i){
										var priceJson = {};
										var name = $(this).find("input[name=name]").val(),
										id = $(this).attr("data-entity-id"),
										customerType = $(this).find("select[name=customerType]").val(),
										remark = $(this).find("input[name=remark]").val();
										
										if(name != ""){
											priceJson = {
												id : id,
												name : name,
												customerType : customerType,
												dateArea : [],
												remark : remark
											}
											
											$(this).find(".dateTimeArea").each(function(){
												var index = $(this).attr("data-index") || 1,
												$parents = $(this).parent().parent(),
												id = $parents.find("input[name=rebateListId]").eq(index-1).val(),
												startTime = $parents.find("input[name=startTime]").eq(index-1).val(),
												endTime = $parents.find("input[name=endTime]").eq(index-1).val(),
												contractPrice = $parents.find("input[name=contractPrice]").eq(index-1).val(),
												marketPrice = $parents.find("input[name=marketPrice]").eq(index-1).val(),
												guideRate = $parents.find("input[name=guideRate]").eq(index-1).val(),
												travelAgencyRate = $parents.find("input[name=travelAgencyRate]").eq(index-1).val();

												if(startTime != "" && startTime != ""){
													var dateArea = {
														id : id,
														startTime : startTime,
														endTime : endTime,
														price : contractPrice || 0,
														marketPrice : marketPrice || 0,
														guideRate : guideRate || 0,
														travelAgencyRate : travelAgencyRate || 0,
													}
													priceJson.dateArea.push(dateArea);
												}
											});
										}
										
										selfPayUpdate.push(priceJson)
									});
						    		console.log(selfPayUpdate);
						    		selfPayUpdate = JSON.stringify(selfPayUpdate);
						    		$.ajax({
										url:""+APP_ROOT+"back/selfpay.do?method=updateSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&selfPayUpdate="+encodeURIComponent(selfPayUpdate),
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												layer.close(updateSelfpay);
												showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
													selfpay.listSelfPay(pageNo,selfpay.searchData.name,selfpay.searchData.status);
												});
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
		deleteSelfpay :function(id,pageNo){
			var dialogObj = $( "#confirm-dialog-message" ),
				id = $(this).attr("data-entity-id");
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
								url:""+APP_ROOT+"back/selfpay.do?method=deleteSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id+"&cateName=selfpay"+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										$(".main-content .page-content .selfpayList .selfpay-"+id+"").fadeOut(function(){
											$(".main-content .page-content .selfpayList .selfpay-"+id+"").remove();
										});
										selfpay.listSelfpay(pageNo,selfpay.searchData.name,selfpay.searchData.status);
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
		deleteSelfitem :function(id,cateName,$parent){
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
								url:""+APP_ROOT+"back/selfpay.do?method=deleteSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id+"&cateName="+cateName+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										$parent.fadeOut(function(){
											$parent.remove();
											selfpay.numberRate("update-selfpay-form");
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
		deleteSelfrebate :function(id,cateName,$parents,$obj,td,index){
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
								url:""+APP_ROOT+"back/selfpay.do?method=deleteSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id+"&cateName="+cateName+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										for(var i=2; i < 7; i++){
											var $children =  td.eq(i).children("div");
											$children.eq(index - 1).fadeOut(function(){
												$(this).remove();
												selfpay.numberRate("update-selfpay-form");

												for(var j=0; j<$parents.find(".dateTimeArea").length;j++){
													$parents.find(".dateTimeArea").eq(j).attr("data-index", j+1)
												}
											});
										}
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
		viewSelfpay:function(id){
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/selfpay.do?method=getSelfPayById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						type:3
					});
				},
				success:function(data){
					console.log(data);
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var selfpayInfo = JSON.parse(data.selfpay);
						data.selfpay = selfpayInfo;
						console.log(data.selfpay);
						var html = viewTemplate(data);
						layer.open({
						    type: 1,
						    title:"查看自费项目",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1024px', '60%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//绑定账期模式选择事件
					    		if(data.selfpay.payType == 1){
					    			$(".view-selfpay-form").find(".payPeriod").removeClass("hide");
					    		}
					    		else{
					    			$(".view-selfpay-form").find(".payPeriod").addClass("hide");
					    		}
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
		numberRate :function(form){
			//导游返佣 和 旅行社返佣
			$("."+form+" .priceList").find("tr").each(function(){
		    	for(var i=0; i<$(this).find("input[name=guideRate]").length;i++){
		    		$(this).find("input[name=guideRate]").eq(i).attr("index", i+1);
				}
	    	})
	    	$("."+form+" .priceList").find("tr").each(function(){
		    	for(var i=0; i<$(this).find("input[name=travelAgencyRate]").length;i++){
		    		$(this).find("input[name=travelAgencyRate]").eq(i).attr("index", i+1)
				}
	    	})
	    	var guide = $("."+form+" .priceList").find("input[name=guideRate]");
			/*guide.keyup(function(){
				guide.each(function(i){
	    			var index = guide.eq(i).attr("index");
	    			var guideVal = guide.eq(i).val();
	    			var travelAgency = guide.eq(i).parent().parent().next("td").find("input[name=travelAgencyRate]");
	    			travelAgency.each(function(j){
	    				if(travelAgency.eq(j).attr("index") == index){
	    					travelAgency.eq(j).val(100 - guideVal);
	    					
	    				}
	    			})
	    		})
	    	})*/
		}
	}
	exports.listSelfPay = selfpay.listSelfPay;
});