define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "resource_busCompany",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		tabId = "tab-"+menuKey+"-content";
	var busCompany = {
		searchData : {
			companyName : "",
			status : ""
		},
		listBusCompany:function(page,companyName,status){
			busCompany.searchData.companyName = companyName;
			busCompany.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/busCompany.do?method=listBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&companyName="+encodeURIComponent(companyName)+"&status="+status+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var busCompanyList = data.busCompanyList;
						busCompanyList = JSON.parse(busCompanyList);
						data.busCompanyList = busCompanyList;
						var html = listTemplate(data);
						addTab(menuKey,"车队管理",html);
						$("#"+tabId+" .busCompanyList .btn-busCompany-view").click(function(){
							var id = $(this).attr("data-entity-id");
							busCompany.viewBusCompany(id);
						});

						$("#"+tabId+" .busCompanyList .btn-busCompany-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							busCompany.updateBusCompany(id,data.pageNo);
						});
						$("#"+tabId+" .busCompanyList .btn-busCompany-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							busCompany.deleteBusCompany(id,data.pageNo);
						});

						$("#"+tabId+" .btn-busCompany-add").click(function(){
							busCompany.addBusCompany();
						});


						//搜索栏状态button下拉事件
						$("#"+tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());

							busCompany.searchData={
								companyName :$("#"+tabId+" .search-area input[name=busCompany_companyName]").val(),
								status :$("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
							}
							busCompany.listBusCompany(0,busCompany.searchData.companyName,busCompany.searchData.status)
						});
						//搜索按钮事件
						$("#"+tabId+" .btn-busCompany-search").click(function(){
							busCompany.searchData={
								companyName :$("#"+tabId+" .search-area input[name=busCompany_companyName]").val(),
								status :$("#"+tabId+" .search-area .btn-status").find("button").attr("data-value")
							}
							busCompany.listBusCompany(0,busCompany.searchData.companyName,busCompany.searchData.status);
						});
						//分页--首页按钮事件
						$("#"+tabId+" .pageMode a.first").click(function(){
							busCompany.listBusCompany(0,busCompany.searchData.companyName,busCompany.searchData.status);
						});
						//分页--上一页事件
						$("#"+tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							busCompany.listBusCompany(previous,busCompany.searchData.companyName,busCompany.searchData.status);
						});
						//分页--下一页事件
						$("#"+tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							busCompany.listBusCompany(next,busCompany.searchData.companyName,busCompany.searchData.status);
						});
						//分页--尾页事件
						$("#"+tabId+" .pageMode a.last").click(function(){
							busCompany.listBusCompany(data.totalPage == 0 ? 0 : data.totalPage-1,busCompany.searchData.companyName,busCompany.searchData.status);
						});



					}
				}
			});
		},
		addBusCompany:function(){
			var html = addTemplate();
			var addBusCompanyLayer = layer.open({
				type: 1,
				title:"新增车队",
				skin: 'layui-layer-rim', //加上边框
				area: '70%', //宽高
				zIndex:1028,
				content: html,
				success:function(){
					var $obj = $(".addBusCompanyContainer .busCompanyMainForm"),
					// 添加表单验证
						validator = rule.busComCheckor($('.addBusCompanyContainer'));

					busCompany.getProvinceList($obj.find("select[name=provinceId]"));
					//给省份select绑定事件
					$(".busCompanyMainForm select[name=provinceId]").change(function(){
						var provinceId = $(this).val();
						if(provinceId!=''){
							busCompany.getCityList($obj.find("select[name=cityId]"),provinceId);
						}else{
							$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						}
						$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
					});

					//给城市select绑定事件
					$obj.find("select[name=cityId]").change(function(){
						var cityId = $(this).val();
						if(cityId!=''){
							busCompany.getDistrictList($obj.find("select[name=districtId]"),cityId);
						}else{
							$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						}
					});

					$obj.find("select[name=payType]").change(function(){
						var payType = $(this).val();
						if(payType == 1){
							$(this).parent().find(".payPeriod").removeClass("hide");
						}
						else{
							$(this).parent().find(".payPeriod").addClass("hide");
						}
					});
					var $busList = $(".addBusCompanyContainer .busList");
					$busList.find(".btn-bus-add").click(function(){
						var html = "<tr><td><input class=\"col-sm-12\" name=\"licenseNumber\" type=\"text\" maxlength=\"10\"/></td><td><input class=\"col-sm-12\" name=\"brand\" type=\"text\" maxlength=\"32\"/></td><td><input class=\"col-sm-12\" name=\"seatCount\" type=\"text\" value=\"1\"  maxlength=\"3\"/></td><td class=\"col-sm-1\"><div class=\"input-group col-sm-12\"><input name=\"buyTime\" type=\"text\" class=\"datepicker\" style='width: 130px' /><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span></div></td><td><select name=\"isChartered\"><option value=\"1\">是</option><option value=\"0\" selected=\"selected\">否</option></select></td>" +								"<td class=\"time\">" +
							"<div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea hide\" style=\"float:right\"><button class=\"btn  btn-sm btn-white add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div>" +
							"</td>" +
							"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input style=\"width:100px;\" name=\"contractPrice\" maxlength=\"9\" type=\"text\" readonly=\"readonly\"/><label>&nbsp;元</label></div></td>" +
							"<td><input name=\"remark\"  maxlength=\"1000\"  type=\"text\" class=\"col-sm-12\"/></td><td style=\"width:70px\"><a class=\"btn-xs btn-bus-delete\">删除</a></td></tr>";
						$busList.find("tbody").append(html);
						$(window).trigger('resize');
						$busList.find("select[name=isChartered]").change(function(){
							var $parents = $(this).parent().parent();
							if($(this).val() == 1){
								$parents.find("input[name=startTime]").removeAttr("readonly");
								$parents.find("input[name=endTime]").removeAttr("readonly");
								$parents.find("input[name=contractPrice]").removeAttr("readonly");
								$parents.find(".timeArea").removeClass("hide");
								$parents.find("input[name=startTime],input[name=endTime]").datepicker({
									autoclose: true,
									todayHighlight: true,
									format: 'yyyy-mm-dd',
									language: 'zh-CN'
								});
							}
							else{
								$parents.find("input[name=startTime]").attr("readonly","readonly");
								$parents.find("input[name=endTime]").attr("readonly","readonly");
								$parents.find("input[name=contractPrice]").attr("readonly","readonly");
								$parents.find(".timeArea").addClass("hide");
								$parents.find(".appendDiv").remove();
								$parents.find("input[name=startTime],input[name=endTime]").datepicker("remove");
							}

							// 更新表单验证的事件绑定
							validator = rule.update(validator);
						});

						$busList.find("input[name=seatCount]").spinner({
							min:1,
							step:1,
							create: function( event, ui ) {
								$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
							}
						});
						$busList.find("input[name=buyTime]").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
						$busList.find(".busList .btn-bus-delete").click(function(){
							$(this).parent().parent().fadeOut(function(){
								$(this).remove();
							});
						});

						// button按钮动态添加包车时限区间
						$busList.find(".timeArea button.add").unbind().click(function(){
							var td = $(this).parent().parent().parent();
							var index = td.find("div").length;
							var timeLimitDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn  btn-sm btn-white del\"><i class=\"fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
							var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input style=\"width:100px;\" name=\"contractPrice\" type=\"text\"/><label>&nbsp;元</label></div>";
							td.next().append(contractPriceInput);
							td.append(timeLimitDiv);
							$busList.find(".datepicker").datepicker({
								autoclose: true,
								todayHighlight: true,
								format: 'yyyy-mm-dd',
								language: 'zh-CN'
							});
							$busList.find(".timeArea button.del").click(function(){
								var div = $(this).parent().parent();
								var divIndex = div.attr("data-index");
								div.fadeOut(function(){
									$(this).remove();
								});
								div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
									$(this).remove();
								});
							});

							// 更新表单验证的事件绑定
							validator = rule.update(validator);
						});

						// 更新表单验证的事件绑定
						validator = rule.update(validator);
					});
					var $driverList = $(".addBusCompanyContainer .driverList");
					$driverList.find(".btn-driver-add").click(function(){
						var html = "<tr><td><input name=\"driverName\" type=\"text\" class=\"col-sm-12\" /></td><td><select name=\"gender\"><option value=\"0\">男</option><option value=\"1\">女</option></select></td><td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12\" /></td><td><input name=\"driveYears\" type=\"text\" value=\"1\"/></td><td><input name=\"licenseId\" class=\"col-sm-12\" type=\"text\" /></td><td width=\"8%\"><select name=\"status\" class=\"col-sm-12\"><option value=\"1\">启用</option><option value=\"0\">停用</option></select></td><td><input name=\"remark\" type=\"text\" class=\"col-sm-12\" /></td><td style=\"width:70px\"><a data-entiy-id=\"\" class=\" btn-xs btn-driver-delete\">删除</a></td></tr>";
						$driverList.find("tbody").append(html);

						$driverList.find(".btn-driver-delete").click(function(){
							$(this).parent().parent().fadeOut(function(){
								$(this).remove();
							});
						});
						$driverList.find("input[name=driveYears]").spinner({
							min:1,
							step:1,
							create: function( event, ui ) {
								$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
							}
						});

						// 更新表单验证的事件绑定
						validator = rule.update(validator);
					});

					$busList.find(".btn-bus-add").click();
					$driverList.find(".btn-driver-add").click();

					//数据提交
					$(".addBusCompanyContainer .btn-submit-busCompany").click(function(){
						if (!validator.form()) return;
						var status = 0;
						if($obj.find(".busCompany-status").is(":checked") == true){
							status = 1;
						}
						var form = $obj.serialize()+"&status="+status+"";


						//车辆
						var busJsonAdd = [];
						var busJsonAddTr = $busList.find("tbody tr");
						busJsonAddTr.each(function(i){
							var buyTime = busJsonAddTr.eq(i).find("input[name=buyTime]").val();
							var isChartered = busJsonAddTr.eq(i).find("select[name=isChartered]").val();
							var busJson = {
								licenseNumber : busJsonAddTr.eq(i).find("input[name=licenseNumber]").val(),
								brand : busJsonAddTr.eq(i).find("input[name=brand]").val(),
								seatCount : busJsonAddTr.eq(i).find("input[name=seatCount]").val(),
								buyTime : (buyTime == "") ? "" : buyTime,
								remark : busJsonAddTr.eq(i).find("input[name=remark]").val(),
								isChartered : busJsonAddTr.eq(i).find("select[name=isChartered]").val(),
								priceJsonAddList : []
							};
							if(isChartered == 1){
								var busJsonTr = busJsonAddTr.eq(i).find("td.time div");
								busJsonTr.each(function(j){
									var divIndex = busJsonTr.eq(j).attr("data-index");
									var priceJsonAdd = {
										divIndex : divIndex,
										startTime : busJsonTr.eq(j).find("input[name=startTime]").val(),
										endTime : busJsonTr.eq(j).find("input[name=endTime]").val(),
										contractPrice : busJsonTr.eq(j).parent().next().find(".div-" + divIndex + "").find("input[name=contractPrice]").val()
									};
									busJson.priceJsonAddList.push(priceJsonAdd);
								});
							}
							busJsonAdd.push(busJson);
						});

						//司机
						var driverJsonAdd = [];
						var driverJsonAddTr = $driverList.find("tbody tr");
						driverJsonAddTr.each(function(i){
							var driverJson = {
								name : driverJsonAddTr.eq(i).find("input[name=driverName]").val(),
								gender : driverJsonAddTr.eq(i).find("select[name=gender]").val(),
								mobileNumber : driverJsonAddTr.eq(i).find("input[name=mobileNumber]").val(),
								driveYears : driverJsonAddTr.eq(i).find("input[name=driveYears]").val(),
								licenseId : driverJsonAddTr.eq(i).find("input[name=licenseId]").val(),
								status : driverJsonAddTr.eq(i).find("select[name=status]").val(),
								remark : driverJsonAddTr.eq(i).find("input[name=remark]").val()
							};
							driverJsonAdd.push(driverJson);
						});

						/*var busJsonAdd = "[";
						 var busListLength = $(".busList tbody tr").length;
						 $busList.find("tbody tr").each(function(i){
						 var busJson = "";
						 var licenseNumber = $(this).find("input[name=licenseNumber]").val();
						 var brand = $(this).find("input[name=brand]").val();
						 var seatCount = $(this).find("input[name=seatCount]").val();
						 var buyTime = $(this).find("input[name=buyTime]").val();
						 if(buyTime == ""){
						 buyTime = "0000-00-00";
						 }
						 var isChartered = $(this).find("select[name=isChartered]").val();

						 var priceJsonAdd = "[";
						 var priceLength = $(this).find("td.time div").length;
						 if(isChartered == 1){
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
						 }
						 priceJsonAdd += "]";
						 console.log(priceJsonAdd);


						 var remark = $(this).find("input[name=remark]").val();
						 if(i == (busListLength-1)){
						 busJson = "{\"licenseNumber\":\""+licenseNumber+"\",\"brand\":\""+brand+"\",\"seatCount\":\""+seatCount+"\",\"buyTime\":\""+buyTime+"\",\"isChartered\":\""+isChartered+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"remark\":\""+remark+"\"}";
						 }
						 else{
						 busJson = "{\"licenseNumber\":\""+licenseNumber+"\",\"brand\":\""+brand+"\",\"seatCount\":\""+seatCount+"\",\"buyTime\":\""+buyTime+"\",\"isChartered\":\""+isChartered+"\",\"priceJsonAdd\":\""+encodeURIComponent(priceJsonAdd)+"\",\"remark\":\""+remark+"\"},";
						 }
						 busJsonAdd += busJson;
						 });
						 busJsonAdd += "]";
						 var driverJsonAdd = "[";
						 var driverListLength = $driverList.find("tbody tr").length;
						 $driverList.find("tbody tr").each(function(i){
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
						 driverJsonAdd += "]";*/
						busJsonAdd = JSON.stringify(busJsonAdd);
						console.log(busJsonAdd);
						console.log("---------------");
						driverJsonAdd = JSON.stringify(driverJsonAdd);
						console.log(driverJsonAdd);
						$.ajax({
							url:""+APP_ROOT+"back/busCompany.do?method=addBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
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
									layer.close(addBusCompanyLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									busCompany.listBusCompany(0,"","");
								}
							}
						});
					});
				}
			});
		},
		updateBusCompany:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/busCompany.do?method=getBusCompanyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var busCompanyInfo = JSON.parse(data.busCompany);
						data.busCompany = busCompanyInfo;
						var html = updateTemplate(data);
						var updateBusCompanyLayer = layer.open({
							type: 1,
							title:"修改车队",
							skin: 'layui-layer-rim', //加上边框
							area: '70%', //宽高
							zIndex:1028,
							content: html,
							success:function(){
								var $obj = $(".updateBusCompanyContainer .busCompanyMainForm"),
									$busList = $(".updateBusCompanyContainer .busList"),
									$driverList = $(".updateBusCompanyContainer .driverList"),
								// 添加表单验证
									validator = rule.busComCheckor($('.updateBusCompanyContainer'));
								//级联选择城市列表
								var provinceId = "";
								if(data.busCompany.provinceId != null){
									provinceId = data.busCompany.provinceId;
									var cityId = "";
									if(data.busCompany.cityId != null){
										cityId = data.busCompany.cityId;

										var districtId = "";
										if(data.busCompany.districtId != null){
											districtId = data.busCompany.districtId;
										}
										busCompany.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
									}
									busCompany.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
								}
								busCompany.getProvinceList($obj.find("select[name=provinceId]"),provinceId);


								//给省份select绑定事件
								$obj.find("select[name=provinceId]").change(function(){
									var provinceId = $(this).val();
									if(provinceId!=''){
										busCompany.getCityList($obj.find("select[name=cityId]"),provinceId);
									}else{
										$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
									}
									$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
								});

								//给城市select绑定事件
								$obj.find("select[name=cityId]").change(function(){
									var cityId = $(this).val();
									if(cityId!=''){
										busCompany.getDistrictList($obj.find("select[name=districtId]"),cityId);
									}else{
										$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
									}
								});


								$obj.find("select[name=payType]").change(function(){
									var payType = $(this).val();
									if(payType == 1){
										$(this).parent().find(".payPeriod").removeClass("hide");
									}
									else{
										$(this).parent().find(".payPeriod").addClass("hide");
									}
								});


								$busList.find("input[name=seatCount]").spinner({
									min:1,
									step:1,
									create: function( event, ui ) {
										$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
									}
								});

								$driverList.find("input[name=driveYears]").spinner({
									min:1,
									step:1,
									create: function( event, ui ) {
										$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
									}
								});
								function bindTime(obj, name,isRemove){
									if(!isRemove){
										obj.find("input[name="+name+"]").datepicker({
											autoclose: true,
											todayHighlight: true,
											format: 'yyyy-mm-dd',
											language: 'zh-CN'
										});
									}else{
										obj.find("input[name="+name+"]").datepicker("remove");
									}
								}

								bindTime($busList, "buyTime");
								/*$busList.find("input[name=buyTime]").datepicker({
								 autoclose: true,
								 todayHighlight: true,
								 format: 'yyyy-mm-dd',
								 language: 'zh-CN'
								 });*/

								/* 	$driverList.find(".datepicker").datepicker({
								 autoclose: true,
								 todayHighlight: true,
								 format: 'yyyy-mm-dd',
								 language: 'zh-CN'
								 });*/
								$busList.find("select[name=isChartered]").each(function(){
									var $charParent = $(this).parent().parent();
									if($(this).val() == "1"){
										bindTime($charParent, "startTime");
										bindTime($charParent, "endTime");
									}
								})

								function bindIsChartered(){
									$busList.find("select[name=isChartered]").change(function(){
										var $parents = $(this).parent().parent();
										if($(this).val() == 1){
											$parents.find("input[name=startTime]").removeAttr("readonly");
											$parents.find("input[name=endTime]").removeAttr("readonly");
											$parents.find("input[name=contractPrice]").removeAttr("readonly");
											$parents.find(".timeArea").removeClass("hide");
											bindTime($parents, "startTime");
											bindTime($parents, "endTime");
										}
										else{
											$parents.find("input[name=startTime]").attr("readonly","readonly");
											$parents.find("input[name=endTime]").attr("readonly","readonly");
											$parents.find("input[name=contractPrice]").attr("readonly","readonly");
											$parents.find(".timeArea").addClass("hide");
											$parents.find(".appendDiv").each(function(){
												var id = $(this).attr("data-entity-id");
												if(!(id != null && id != "")){
													var index = $(this).attr("data-index");
													$(this).parent().next().find(".div-"+index+"").remove();
													$(this).remove();
												}
											});
											bindTime($parents, "startTime", true);
											bindTime($parents, "endTime", true);
										}

										// 更新表单验证的事件绑定
										validator = rule.update(validator);
									});
								}
								bindIsChartered();

								/*$driverList.find(".datepicker").datepicker({
								 autoclose: true,
								 todayHighlight: true,
								 format: 'yyyy-mm-dd',
								 language: 'zh-CN'
								 });*/
								$busList.find(".btn-bus-delete").click(function(){
									var tr = $(this).parent().parent();
									var busId = tr.attr("data-entity-id");
									if(busId != null && busId != ""){
										tr.addClass("deleted");
										$(this).parent().parent().fadeOut(function(){
											$(this).hide();
										});
									}
								});

								$driverList.find(".btn-driver-delete").click(function(){
									var tr = $(this).parent().parent();
									var driverId = tr.attr("data-entity-id");
									if(driverId != null && driverId != ""){
										tr.addClass("deleted");
										$(this).parent().parent().fadeOut(function(){
											$(this).hide();
										});
									}
								});

								function bindTimeAreaDelete(){
									$busList.find(".timeArea button.delete").click(function(){
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
								}

								// 修改时修改原来的bus，
								$busList.find(".timeArea button.add").click(function(){
									var td = $(this).parent().parent().parent();
									var index = td.find("div").length;
									var timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn  btn-sm btn-white delete\"><i class=\"fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
									var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:2px\"><input style=\"width:100px;\" name=\"contractPrice\" maxlength=\"9\" type=\"text\" class=\"\"/><label>&nbsp;元</label></div>";
									td.next().append(contractPriceInput);
									td.append(timeLimitDiv);
									bindTimeAreaDelete();
									bindTime(td, "startTime");
									bindTime(td, "endTime");


									// 更新表单验证的事件绑定
									validator = rule.update(validator);
								});

								// 修改时删除原来的bus，
								bindTimeAreaDelete();

								$busList.find(".btn-bus-add").click(function(){
									var html = "<tr><td><input  name=\"licenseNumber\" type=\"text\" class=\"col-sm-12\" /></td><td><input name=\"brand\" maxlength=\"100\" type=\"text\" class=\"col-sm-12\" /></td><td><input maxlength=\"3\" name=\"seatCount\" type=\"text\" class=\"col-sm-12\" value=\"1\"/></td><td class=\"col-sm-1\"><div class=\"input-group col-sm-12\"><input name=\"buyTime\" type=\"text\" class=\"datepicker\" style='width: 130px' /><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span></div></td><td><select name=\"isChartered\"><option value=\"1\">是</option><option value=\"0\" selected=\"selected\">否</option></select></td>" +
										"<td class=\"time\">" +
										"<div data-index=\"1\" data-entity-id=\"\" class=\"clearfix div-1\" style=\"margin-top:2px\">" +
										"<input name=\"startTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea hide\" style=\"float:right\"><button class=\"btn  btn-sm btn-white add\"><i class=\"fa fa-sort-asc bigger-110 icon-only\"></i></button></label></div>" +
										"</td>" +
										"<td class=\"price\">" +
										"<div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input style=\"width:100px;\" name=\"contractPrice\" maxlength=\"9\" type=\"text\" readonly=\"readonly\" /><label>&nbsp;元</label></div>" +
										"</td>" +
										"<td><input name=\"remark\" type=\"text\" class=\"col-sm-12\"/></td><td style=\"width:70px\"><a class=\" btn-bus-delete\">删除</a></td></tr>";
									$busList.find("tbody").append(html);
									$busList.find("input[name=seatCount]").spinner({
										min:1,
										step:1,
										create: function( event, ui ) {
											$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
										}
									});

									bindTime($busList, "buyTime");
									bindIsChartered();

									// button按钮动态修改包车时限区间
									$busList.find(".timeArea button.add").unbind().click(function(){
										var td = $(this).parent().parent().parent();
										var index = td.find("div").length;
										var timeLimitDiv = "<div data-index=\""+(index+1)+"\" data-entity-id=\"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn  btn-sm btn-white delete\"><i class=\"fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
										var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-top:2px\"><input style=\" width: 100px;\" name=\"contractPrice\" type=\"text\" value=\"\"/><label>&nbsp;元</label></div>";

										td.next().append(contractPriceInput);
										td.append(timeLimitDiv);
										bindTimeAreaDelete();
										bindTime(td, "startTime");
										bindTime(td, "endTime");
									});
									$(".busList .btn-bus-delete").click(function(){
										var tr = $(this).parent().parent();
										var driverId = tr.attr("data-entity-id");
										if(!(driverId != null && driverId != "")){
											$(this).parent().parent().fadeOut(function(){
												$(this).remove();
											});
										}
									});

									// 更新表单验证的事件绑定
									validator = rule.update(validator);
								});

								$driverList.find(".btn-driver-add").click(function(){
									var html = "<tr><td><input name=\"driverName\" type=\"text\" class=\"col-sm-12\" /></td><td><select name=\"gender\" class=\"col-sm-12\"><option value=\"0\">男</option><option value=\"1\">女</option></select></td><td><input name=\"mobileNumber\" class=\"col-sm-12\" type=\"text\" /></td><td><input name=\"driveYears\" class=\"col-sm-12\" type=\"text\" value=\"1\"/></td><td><input name=\"licenseId\" type=\"text\" class=\"col-sm-12\" /></td><td width=\"8%\"><select name=\"status\" class=\"col-sm-12\"><option value=\"1\">启用</option><option value=\"0\">停用</option></select></td><td><input name=\"remark\" type=\"text\" class=\"col-sm-12\" /></td><td style=\"width:70px\"><a data-entiy-id=\"\" class=\" btn-driver-delete\">删除</a></td></tr>";
									$(".driverList tbody").append(html);
									$(".driverList .btn-driver-delete").click(function(){
										var tr = $(this).parent().parent();
										var driverId = tr.attr("data-entity-id");
										if(!(driverId != null && driverId != "")){
											$(this).parent().parent().fadeOut(function(){
												$(this).remove();
											});
										}
									});
									$driverList.find("input[name=driveYears]").spinner({
										min:1,
										step:1,
										create: function( event, ui ) {
											$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
										}
									});

									// 更新表单验证的事件绑定
									validator = rule.update(validator);
								});

								$(".updateBusCompanyContainer .btn-submit-busCompany").click(function(){
									if (!validator.form()) return;

									var status = 0;
									if($obj.find(".busCompany-status").is(":checked") == true){
										status = 1;
									}
									var form = $obj.serialize()+"&status="+status+"";
									var busJsonAdd = [],
										busJsonDel = [],
										driverJsonAdd = [],
										driverJsonDel = [];

									//busJsonAdd 组装
									var busListTr =  $busList.find("tbody tr:not(.deleted)");
									busListTr.each(function(i){
										var busJson = {
											id : busListTr.eq(i).attr("data-entity-id"),
											licenseNumber : busListTr.eq(i).find("input[name=licenseNumber]").val(),
											brand : busListTr.eq(i).find("input[name=brand]").val(),
											seatCount : busListTr.eq(i).find("input[name=seatCount]").val(),
											buyTime : busListTr.eq(i).find("input[name=buyTime]").val() || "",
											isChartered : busListTr.eq(i).find("select[name=isChartered]").val(),
											priceJsonAdd : [],
											priceJsonDel : [],
											remark : busListTr.eq(i).find("input[name=remark]").val()
										}
										if(busJson.isChartered==1){
											var priceUpdate = busListTr.eq(i).find("td.time div:not(.deleted)");
											priceUpdate.each(function(j){
												var divIndex = priceUpdate.eq(j).attr("data-index");
												var priceJson = {
													id : priceUpdate.eq(j).attr("data-entity-id"),
													startTime : priceUpdate.eq(j).find("input[name=startTime]").val(),
													endTime : priceUpdate.eq(j).find("input[name=endTime]").val(),
													contractPrice : priceUpdate.eq(j).parent().next().find(".div-"+divIndex+"").find("input[name=contractPrice]").val()
												};
												busJson.priceJsonAdd.push(priceJson);
											})
											var priceDel = busListTr.eq(i).find("td.time div.deleted");
											priceDel.each(function(n){
												var priceJson = {
													id : priceDel.eq(n).attr("data-entity-id")
												};
												busJson.priceJsonDel.push(priceJson);
											})
										}
										busJsonAdd.push(busJson);
									});
									//busJsonDel 组装
									var busListDelTr =  $busList.find("tbody tr.deleted");
									busListDelTr.each(function(i){
										var busJson = {
											id : busListDelTr.attr("data-entity-id")
										}
										busJsonDel.push(busJson);
									});
									//driverJsonAdd 组装
									var driverTr = $driverList.find("tbody tr:not(.deleted)");
									driverTr.each(function(i){
										var driverJson = {
											id : driverTr.eq(i).attr("data-entity-id"),
											name : driverTr.eq(i).find("input[name=driverName]").val(),
											gender : driverTr.eq(i).find("select[name=gender]").val(),
											mobileNumber : driverTr.eq(i).find("input[name=mobileNumber]").val(),
											driveYears : driverTr.eq(i).find("input[name=driveYears]").val(),
											licenseId : driverTr.eq(i).find("input[name=licenseId]").val(),
											status : driverTr.eq(i).find("select[name=status]").val(),
											remark : driverTr.eq(i).find("input[name=remark]").val()
										}
										driverJsonAdd.push(driverJson);
									})
									//driverJsonDel 组装
									var driverDelTr = $driverList.find("tbody tr.deleted");
									driverDelTr.each(function(i){
										var driverJson = {
											id : driverDelTr.eq(i).attr("data-entity-id")
										}
										driverJsonDel.push(driverJson);
									})

									busJsonAdd = JSON.stringify(busJsonAdd);
									busJsonDel = JSON.stringify(busJsonDel);
									driverJsonAdd = JSON.stringify(driverJsonAdd);
									driverJsonDel = JSON.stringify(driverJsonDel);

									$.ajax({
										url:""+APP_ROOT+"back/busCompany.do?method=updateBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form+"&busJsonAdd="+encodeURIComponent(busJsonAdd)+"&driverJsonAdd="+encodeURIComponent(driverJsonAdd)+"&busJsonDel="+encodeURIComponent(busJsonDel)+"&driverJsonDel="+encodeURIComponent(driverJsonDel)+"",
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
												layer.close(updateBusCompanyLayer);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												busCompany.listBusCompany(pageNo,busCompany.searchData.companyName,busCompany.searchData.status);
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
		deleteBusCompany:function(id,pageNo){
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
								url:""+APP_ROOT+"back/busCompany.do?method=deleteBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#" + tabId +" .busCompanyList .busCompany-"+id+"").fadeOut(function(){
											busCompany.listBusCompany(pageNo,busCompany.searchData.companyName,busCompany.searchData.status);
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
		viewBusCompany:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/busCompany.do?method=getBusCompanyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var busCompanyInfo = JSON.parse(data.busCompany);
						data.busCompany = busCompanyInfo;
						var html = viewTemplate(data);
						layer.open({
							type: 1,
							title:"查看车队",
							skin: 'layui-layer-rim', //加上边框
							area: ['1024px', '750px'], //宽高
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
		}
	}
	exports.listBusCompany = busCompany.listBusCompany;
});