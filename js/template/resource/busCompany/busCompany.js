/**
 * 资源管理--车队管理模块
 * 
 * 添加、编辑、查看车队
 * 列表显示车队
 */
define(function(require,exports){
	var menuKey = "resource_busCompany",
		rule = require("./rule"),
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		addBusDriverTemplate = require("./view/addBusDriver"),
		validator = "",
		tabId = "tab-"+menuKey+"-content";
	/**
	 * 车队管理资源
	 * [BusCompany description]
	 * @type {Object}
	 */
	var BusCompany = {
		searchData: false,	
		$tab: false,
		$searchArea:false
	};
	/**
	 * 初始化车队管理list方法
	 * [BusCompany description]
	 * @type {Object}
	 */
	BusCompany.initModule = function(){
		BusCompany.listBusCompany(0,"",1)
	}
	/**
	 * 车队管理的列表
	 */
	BusCompany.listBusCompany = function(pageNo,busCompanyName,status){
		//判断传入的参数的个数
		if(BusCompany.$searchArea && arguments.length === 1){
			busCompanyName = BusCompany.$searchArea.find("input[name=busCompany_companyName]").val();
			status = BusCompany.$searchArea.find(".T-select-status").find("button").data("value");
		};

		pageNo = pageNo || 0;
		$.ajax({
			url:""+APP_ROOT+"back/busCompany.do?method=listBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:{
				pageNo:pageNo,
				companyName:busCompanyName,
				status:status,
				sortType:"auto"
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					BusCompany.searchData = {
						pageNo:pageNo
					};
					var busCompanyList = data.busCompanyList;
					busCompanyList = JSON.parse(busCompanyList);
					data.busCompanyList = busCompanyList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"车队管理",html);
					//对车队的公共参数设置
					BusCompany.$tab = $("#"+tabId);
					BusCompany.$searchArea = BusCompany.$tab.find(".search-area");
					//list页面内事件函数
					BusCompany.initEvent();
					//分页控件
					laypage({
					    cont: BusCompany.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		BusCompany.listBusCompany(obj.curr -1);
					    	}
					    }
					});
				}
			}
		});
	};
	//list页面事件函数
	BusCompany.initEvent = function(){
		//状态框选择事件
		BusCompany.$tab.find(".T-select-status").on('click','a',function(event){
			event.preventDefault();//阻止相应控件的默认事件
			var $that = $(this);
			// 设置选择的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			BusCompany.listBusCompany(0);
		});
		//搜索按钮事件
		BusCompany.$tab.find(".T-busCompany-search").on('click',function(event){
			event.preventDefault();
			BusCompany.listBusCompany(0);
		});
		//回车搜索事件
		BusCompany.$tab.find(".T-busCompanyInputList").keyup(function(event){
			event.preventDefault();
			if(event.which == 13 && !window.forbiddenError){
				BusCompany.listBusCompany(0);
			}
		});
		//新增车队事件
		BusCompany.$tab.find(".T-busCompany-add").on('click',function(event){
			event.preventDefault();
			BusCompany.addBusCompany();
		});
		// 报表内的事件
		BusCompany.$tab.find('.T-busCompany-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-view'))  {
				// 查看车队信息
				BusCompany.viewbusCompany(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑车队信息
				BusCompany.updatebusCompany(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除车队
				BusCompany.deletebusCompany(id);
			}
		});
	};
	//新增车队
	BusCompany.addBusCompany = function(fn){
		var html = addTemplate();
		var addBusCompanyLayer = layer.open({
			type:1,
			title:'新增车队',
			skin:'layui-layer-rim',
			area:'1190px',
			zIndex:1028,
			content:html,
			scrollbar: false,
			success:function(){
				//给省的下拉列表绑定事件
				var $obj = $(".T-addBusCompanyContainer");
				var $mainObj = $obj.find(".T-busCompanyMainForm");
				var $provinceObj = $mainObj.find("select[name=provinceId]");
				var $cityObj = $mainObj.find("select[name=cityId]");
				var provinceId = $provinceObj.val();
				//表单验证
				validator = rule.busComCheckor($('.T-addBusCompanyContainer'));
				KingServices.provinceCity($obj);
				//新增车辆事件
				var $busList = $obj.find(".T-busListForm .T-busList");
				var $addBtn = $busList.find(".T-busCompany-add"); 
				$addBtn.on('click',function(){
					BusCompany.addBusList($obj,1);
					validator = rule.update(validator);
				});
				//新增司机事件
				var $driverList = $obj.find(".T-busListForm .T-driverList");
				var $addDerver = $driverList.find(".T-driver-add");
				$addDerver.on('click',function(){
					BusCompany.addDriverList($driverList);
					validator = rule.update(validator);
				});
				//提交数据事件
				var $submitBtn = $obj.find(".T-submit-busCompany");
				$submitBtn.on('click',function(){
					if (!validator.form()) return;
					var status = 0;
					var checkStatus = $mainObj.find(".T-busCompany-status").is(":checked");
					if(checkStatus == true){
						status = 1;
					};
					var form = $mainObj.serialize()+"&status="+status+"",
						formData = $mainObj.serializeJson();
					//车辆数据的组装
					var busJsonAdd = [];
					var busJsonAddTr = $busList.find("tbody tr"),
					    isBuyTime = true;
		        	function getDate(strDate){
		        		return new Date(strDate.replace(/-/g, "/"));
		        	}
					busJsonAddTr.each(function(i){
						var buyTime = busJsonAddTr.eq(i).find("input[name=buyTime]").val();
						var isChartered = busJsonAddTr.eq(i).find("select[name=isChartered]").val();
			
						if(buyTime && !(new Date() > getDate(buyTime))){
							showMessageDialog("第"+(i+1)+"个车辆，购买时间不能大于当前时间");
							isBuyTime = false;
							return false;
						}
						var busJson = {
							licenseNumber : busJsonAddTr.eq(i).find("input[name=licenseNumber]").val(),
							brand : busJsonAddTr.eq(i).find("input[name=brand]").val(),
							seatCount : busJsonAddTr.eq(i).find("input[name=seatCount]").val(),
							buyTime : (buyTime == "") ? "" : buyTime,
							remark : busJsonAddTr.eq(i).find("input[name=remark]").val(),
							lowestPrice : busJsonAddTr.eq(i).find("input[name=lowestPrice]").val(),
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
					
					if(!isBuyTime){
						return false;
					}
					//司机数据的组装
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
					busJsonAdd = JSON.stringify(busJsonAdd);
					driverJsonAdd = JSON.stringify(driverJsonAdd);
					var url = ""+APP_ROOT+"back/busCompany.do?method=addBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add";
					var data = form+"&busJsonAdd="+encodeURIComponent(busJsonAdd)+"&driverJsonAdd="+encodeURIComponent(driverJsonAdd)+"";
					BusCompany.saveBusCompany(url,data,addBusCompanyLayer,fn,formData);
				});

			}
		});
	};
	//修改车队
	BusCompany.updatebusCompany = function($id){
		$.ajax({
			url:""+APP_ROOT+"back/busCompany.do?method=getBusCompanyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+$id+"",
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var busCompanyInfo = JSON.parse(data.busCompany);
						data.busCompany = busCompanyInfo;
						var html = updateTemplate(data);
						var updatebusCompanyLayer = layer.open({
							type: 1,
							title:"修改车队",
							skin: 'layui-layer-rim', //加上边框
							area: '1190px', //宽高
							zIndex:1028,
							content: html,
							scrollbar: false,
							success:function(){
								var $obj = $(".T-updateBusCompanyContainer");
								var $updateObj = $obj.find(".T-busCompanyMainForm");
								var $busList = $obj.find(".T-busList");
								var $driverList = $obj.find(".T-driverList");
								var $province = $obj.find("select[name=provinceId]");
								var $city = $obj.find("select[name=cityId]");
								validator = rule.busComCheckor($('.T-updateBusCompanyContainer'));
								var $inputPrice=$busList.find("input[name=contractPrice]");
								//控件
								Tools.inputCtrolFloat($inputPrice);
								//省市区事件
								if(data.busCompany.provinceId != null )var provinceId = data.busCompany.provinceId;
								if(data.busCompany.cityId != null )var cityId = data.busCompany.cityId;
								if(data.busCompany.districtId != null ) var districtId = data.busCompany.districtId;
								KingServices.provinceCity($obj,provinceId,cityId,districtId);
								//格式化车辆列表的座位数
								$busList.find("input[name=seatCount]").spinner({
									min:1,
									step:1,
									create: function( event, ui ) {
										$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
									}
								});
								//格式化司机列表的驾龄
								$driverList.find("input[name=driveYears]").spinner({
									min:1,
									step:1,
									create: function( event, ui ) {
										$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
									}
								});
								//格式化车辆列表的时间控件
								BusCompany.bindTime($busList,"buyTime");
								$busList.find("select[name=isChartered]").each(function(){
									var $charParent = $(this).closest("tr");
									if($(this).val() == 1){
										BusCompany.bindTime($charParent ,"startTime");
										BusCompany.bindTime($charParent ,"endTime");
										BusCompany.addTimeEvents($charParent.find('td'))
									}
								});
								var $isChartered = $obj.find("select[name=isChartered]").val();
								if($isChartered == 0){
									$busList.find("input[name=startTime],input[name=endTime]").datepicker("remove");
								}
								//协议包车事件
								$busList.on("change",'select',function(){
									//添加协议包车
									var $that = $(this)
									BusCompany.isCharter($that,2);
									validator = rule.update(validator);
								});
								//动态添加包车时限区间
								var $addTimeArea = $busList.find('.timeArea .T-add');
								$addTimeArea.unbind().on('click',function(){
									var $td = $(this).closest('td'), isVal = false;
									/*$td.children('div').each(function(index){
										var $s = $(this).find('input[name=startTime]');
										var $e = $(this).find('input[name=endTime]');
										if(!$s.val()){
											$s.focus();
											isVal = false;
											$s.datepicker('hide');
											return false;
										}else if(!$e.val()){
											$e.focus();
											isVal = false;
											$s.datepicker('hide');
											return false;
										}else{
											isVal = true;
										}
									});*/
									//if(isVal){
										BusCompany.addTimeArea($(this),2,validator);
										//validator = rule.update(validator);
									//}
								});
								//删除原有包车区间
								$busList.find(".T-del").on('click',function(){
									BusCompany.deletedTimeArea($(this),2);
								});
								//新增车辆
								var $addBtn = $busList.find(".T-busCompany-add");
								$addBtn.on('click',function(){
									BusCompany.addBusList($obj,2);
									validator = rule.update(validator);
								});
								//删除原有车辆
								$busList.find(".T-bus-delete").on('click',function(){
									var tr = $(this).closest('tr');
									var busId = tr.attr("data-entity-id");
									if(busId != null && busId != ""){
										tr.addClass("deleted");
										$(this).closest("tr").fadeOut(function(){
											$(this).hide();
										});
									}
								});
								//新增司机
								$driverList.find(".T-driver-add").on('click',function(){
									BusCompany.addDriverList($driverList);
									validator = rule.update(validator);
								});
								//删除原有司机
								$driverList.find(".T-driver-delete").on('click',function(){
									var tr = $(this).closest('tr');
									var driverId = tr.attr("data-entity-id");
									if(driverId != null && driverId != ""){
										tr.addClass("deleted");
										$(this).closest("tr").fadeOut(function(){
											$(this).hide();
										});
									}
								});
								$obj.find(".T-submit-busCompany").click(function(){
									if (!validator.form()) return;
									var status = 0;
									if($obj.find(".busCompany-status").is(":checked") == true){
										status = 1;
									}
									var form = $updateObj.serialize()+"&status="+status+"";
									//return
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
											remark : busListTr.eq(i).find("input[name=remark]").val(),
											lowestPrice : busListTr.eq(i).find("input[name=lowestPrice]").val(),
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
									var url = ""+APP_ROOT+"back/busCompany.do?method=updateBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update";
									var data = form+"&busJsonAdd="+encodeURIComponent(busJsonAdd)+"&driverJsonAdd="+encodeURIComponent(driverJsonAdd)+"&busJsonDel="+encodeURIComponent(busJsonDel)+"&driverJsonDel="+encodeURIComponent(driverJsonDel)+"";
									BusCompany.saveBusCompany(url,data,updatebusCompanyLayer);
									
								});
							}
						});
					}
				}
		});
	};
	//保存函数
	BusCompany.saveBusCompany = function(url,data,$obj,fn,formData){
		$.ajax({
			url:url,
			type:"POST",
			data:data,
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					layer.close($obj);
					showMessageDialog(data.message,function(){
						if (typeof fn === "function") {
							data.busCompany = JSON.parse(data.busCompany);
							formData.id = data.busCompany.id;
							fn(formData);
						}else{
							BusCompany.listBusCompany(0);
						}
					});
				}
			}
		});
	};
	//删除包车区间
	BusCompany.deletedTimeArea = function($obj,typeFlag){
	};
	//新增车辆函数
	BusCompany.addBusList = function($obj,typeFlag){
		var html = "<tr><td><input class=\"col-sm-12\" name=\"licenseNumber\" type=\"text\" maxlength=\"10\"/></td><td><input class=\"col-sm-12\" name=\"brand\" type=\"text\" maxlength=\"32\"/></td><td class=\"busCompanyupSubtractBtn\"><input class=\"col-sm-10\" name=\"seatCount\" type=\"text\" value=\"1\"  maxlength=\"3\"/></td><td class=\"col-sm-1\"><div class=\"input-group col-sm-12\"><input name=\"buyTime\" type=\"text\" class=\"datepicker\" style='width: 130px' /><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span></div></td><td><select name=\"isChartered\"><option value=\"1\">是</option><option value=\"0\" selected=\"selected\">否</option></select></td>" +								"<td class=\"time\">" +
					"<div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker T-startTime T-calc\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" readonly=\"readonly\" class=\"datepicker T-endTime T-calc\" style=\"width:100px\"/><label class=\"timeArea hide\" style=\"float:right\"><button class=\"btn  btn-sm btn-white T-add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i></button></label></div>" +
					"</td>" +
					"<td><div data-index=\"1\" class=\"clearfix div-1\" style=\"margin-top:2px\"><input style=\"width:100px;\" name=\"contractPrice\" class=\" F-float F-money T-minPrice T-calc\" maxlength=\"9\" type=\"text\" readonly=\"readonly\"/><label>&nbsp;元</label></div></td>" +
					"<td><input name=\"remark\"  maxlength=\"1000\"  type=\"text\" class=\"col-sm-12\"/></td><td style=\"width:70px\"><a class=\"btn-xs T-bus-delete\">删除</a></td></tr>";
		$obj.find(".T-busTbody-list").append(html);
		validator = rule.update(validator);
		$(window).trigger('resize');
		BusCompany.bindTime($obj, "buyTime");
		var $isChartered = $obj.find("select[name=isChartered]");
		$isChartered.each(function(){
			if($(this).val() == 0){
				var tr = $(this).closest('tr');
				tr.find("input[name=startTime]").datepicker('remove');
				tr.find("input[name=endTime]").datepicker('remove');
			}
		});
		//协议包车选择事件
		 $obj.on("change","select",function(){
		 	//添加协议包车
		 	var $that = $(this)
		 	BusCompany.isCharter($that,typeFlag);
		 	validator = rule.update(validator);
		 });
		//车辆座位数的设置
		$obj.find("input[name=seatCount]").spinner({
			min:1,
			step:1,
			create: function( event, ui ) {
				$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
			}
		});
		//删除车辆事件
		$obj.find(".T-bus-delete").on("click",function(){
			$(this).closest('tr').fadeOut(function(){
				$(this).remove();
			});
		});
		//动态添加包车时限区间
		var $addTimeArea = $obj.find('.timeArea .T-add');
		$addTimeArea.unbind().on('click',function(){
			BusCompany.addTimeArea($(this),typeFlag,validator);
		});

		$obj.find('.T-busTbody-list').on('change', '.T-calc', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this),index=$that.index(),$tr=$that.closest('tr'),days=[],minBusPriceArr=[];
			   if($that.hasClass('T-startTime')){//包车时限结束日期--基数按天数
			   	  var minPrice=BusCompany.minBusPrice($obj);
			   	  if (!isNaN(minPrice)) {
			   	  	 $obj.find('.T-lowestPrice').val(minPrice);
			   	  };
			    }else if($that.hasClass('T-endTime')){//包车时限结束日期--基数按天数
			   	  var minPrice=BusCompany.minBusPrice($obj);
			   	  if (!isNaN(minPrice)) {
			   	  	 $obj.find('.T-lowestPrice').val(minPrice);
			   	  };
			    }else if($that.hasClass('T-minPrice')){//包车价格
			        var minPrice = BusCompany.minBusPrice($obj);
			        //最低价
			        if (!isNaN(minPrice)) {
			          $obj.find('.T-lowestPrice').val(minPrice);
			        }
			    }
		});	
	};


	BusCompany.datepicker = function(obj, min, max, show){
		if(min){
			min = min.split('-');
			min = new Date(min[0], min[1] - 1, min[2] - (-1));
		}
		if(max){
			max = max.split('-');
			max = new Date(max[0], max[1] - 1, max[2] - 1);
		}
		obj.datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN',
			startDate : min || null,
			endDate : max || null
		});
		if(show){
			obj.datepicker('show');
		}
	};
	//动态增加班车时限
	BusCompany.addTimeArea = function($obj,typeFlag,validator){
		var $td = $obj.closest('td');
		var $tr=$obj.closest('tr');
		var index = $td.find('div').length;
		var timeLimitDiv = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:2px\"><input name=\"startTime\" type=\"text\" class=\"datepicker T-startTime T-calc\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"datepicker T-endTime T-calc\" style=\"width:100px\"/><label class=\"timeArea\" style=\"float:right\"><button class=\"btn  btn-sm btn-white T-del\"><i class=\"fa fa-minus bigger-110 icon-only\"></i></button></label></div>";
		var contractPriceInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix appendDiv div-"+(index+1)+"\" style=\"margin-top:7px\"><input style=\"width:100px;\" name=\"contractPrice\" class=\"F-float F-money T-minPrice T-calc\" type=\"text\" maxlength=\"9\"/><label>&nbsp;元</label></div>";
		$td.next().append(contractPriceInput);
		$td.append(timeLimitDiv);
		BusCompany.datepicker($td.find(".datepicker"));
		BusCompany.addTimeEvents($td);
		//删除包车时限
		$td.find(".T-del").off('click').on('click',function(event){
			BusCompany.deletedTimeArea($(this),typeFlag);
		});
		validator = rule.update(validator);
	};
	BusCompany.addTimeEvents = function(obj){
		obj.find('input[name=startTime]').off('click').on('click', function(){
			var $parent = $(this).parent().prev().find('input[name=endTime]');
			var endDate = $(this).parent().find('input[name=endTime]');
			$(this).datepicker('remove');
			BusCompany.datepicker($(this), $parent.val(), endDate.val(), true);
		});
		obj.find('input[name=endTime]').off('click').on('click', function(){
			var startDate = $(this).parent().find('input[name=startTime]');
			var $parent = $(this).parent().prev().find('input[name=endTime]');
			var nextStartTime = $(this).parent().next().find('input[name=startTime]');
			var nextEndTime = $(this).parent().next().find('input[name=endTime]');
			$(this).datepicker('remove');
			BusCompany.datepicker($(this), startDate.val()||$parent.val(), nextStartTime.val() || nextEndTime.val() || null, true);
		});
	}
	//协议包车选择
	BusCompany.isCharter = function($obj,$typeFlag){
		var $parents = $($obj).closest("tr");
		var charterFlag = $($obj).val();
		//通过typeFlag来判断是新增还是修改，1--新增；2--修改
		if(charterFlag == 1){
			$parents.find("input[name=startTime]").removeAttr("readonly");
				$parents.find("input[name=endTime]").removeAttr("readonly");
				$parents.find("input[name=contractPrice]").removeAttr("readonly");
				$parents.find(".timeArea").removeClass("hide");
				BusCompany.datepicker($parents.find("input[name=startTime],input[name=endTime]"));
				BusCompany.addTimeEvents($parents);
				//Input控件控制位数
				Tools.inputCtrolFloat($parents.find("input[name=contractPrice]"));

			validator = rule.update(validator);
			}else{
				if($typeFlag == 1){
					$parents.find("input[name=startTime]").attr("readonly","readonly");
					$parents.find("input[name=endTime]").attr("readonly","readonly");
					$parents.find("input[name=contractPrice]").attr("readonly","readonly");
					$parents.find(".timeArea").addClass("hide");
					$parents.find(".appendDiv").remove();
					$parents.find("input[name=endTime]").datepicker("remove").off();
					$parents.find("input[name=startTime]").datepicker("remove").off();
				}else{
					$parents.find("input[name=startTime]").attr("readonly","readonly").off();
					$parents.find("input[name=endTime]").attr("readonly","readonly").off();
					$parents.find("input[name=contractPrice]").attr("readonly","readonly");
					$parents.find(".timeArea").addClass("hide");
					$parents.find(".T-appendDiv").each(function(){
						var id = $(this).attr("data-entity-id");
						if(!(id != null && id != "")){
							var index = $(this).attr("data-index");
							$(this).parent().next().find(".div-"+index+"").find("input[name=contractPrice]").attr("readonly","readonly");
						}
					});
					BusCompany.bindTime($parents, "startTime",true);
					BusCompany.bindTime($parents, "endTime",true);
				}
			}
	};
	//删除包车区间
	BusCompany.deletedTimeArea = function($obj,typeFlag){
		if (!$obj.data('deleted')) {
			$obj.data('deleted', true);
			var div = $($obj).closest('div');
			var $td = $($obj).closest('td');
			var entityId = div.attr("data-entity-id");
			var divIndex = div.attr("data-index");
			var index = $td.find('div:not(.deleted)').index(div);
			//通过typeF来判断是新增车队页面还是修改车队页面1--新增；2--修改
			$td.next().children('div').eq(index).fadeOut(function(){
				$(this).remove();
			});
			if(typeFlag == 1){
				div.fadeOut(function(){
					$(this).remove();
				});
			}else if(typeFlag == 2){
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
			}	
		}		
	}
	//新增司机函数
	BusCompany.addDriverList = function($obj){
		var html = "<tr><td><input name=\"driverName\" type=\"text\" maxlength=\"32\" class=\"col-sm-12\" /></td>"+
			"<td><select name=\"gender\">"+
			"<option value=\"0\">男</option><option value=\"1\">女</option></select></td>"+
			"<td><input name=\"mobileNumber\" type=\"text\" class=\"col-sm-12\" maxlength=\"11\"/></td>"+
			"<td><input name=\"driveYears\" maxlength=\"2\" type=\"text\" value=\"1\"/></td>"+
			"<td><input name=\"licenseId\" maxlength=\"18\" class=\"col-sm-12\" type=\"text\" /></td>"+
			"<td width=\"8%\"><select name=\"status\" class=\"col-sm-12\"><option value=\"1\">启用</option><option value=\"0\">停用</option></select></td>"+
			"<td><input name=\"remark\" maxlength=\"500\" type=\"text\" class=\"col-sm-12\" /></td>"+
			"<td style=\"width:70px\"><a data-entiy-id=\"\" class=\" btn-xs T-driver-delete\">删除</a></td></tr>";
		$obj.find("tbody").append(html);
		//司机的删除事件
		$obj.find(".T-driver-delete").on('click',function(){
			$(this).closest("tr").fadeOut(function(){
				$(this).remove();
			});
		});
		$obj.find("input[name=driveYears]").spinner({
			min:1,
			step:1,
			create: function( event, ui ) {
				$(this).next().addClass('btn ').html('<i class="fa fa-sort-asc"></i>').next().addClass('btn ').html('<i class="fa fa-sort-desc"></i>')
			}
		});
	};
	//格式化时间控件
	BusCompany.bindTime = function($obj,name,isRemove){
		if(!isRemove){
			$obj.find("input[name="+name+"]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		}else{
			$obj.find("input[name="+name+"]").datepicker("remove");
		}
	}



	/**
    * 获取车队最低价
    * @param  {[type]} $tab [description]
    * @return {[type]}      [description]
    */
   BusCompany.minBusPrice = function($tab){
   		var temp=[];
	   	$tab.find('.T-busTbody-list').find('tr').each(function(i) {
	   		var $that=$(this),index=$that.find('.T-minPrice').closest('div').data('index'),$minPriceTr=$that.find('.T-minPrice');
	   		$minPriceTr.each(function(j) {
	   			if(j<=index){
	   			  var minPrice = $(this).val()*1,
	   			      startTime = $(this).closest('td').prev('td').find('div').eq(j).find('.T-startTime').val(),
	   			      endTime = $(this).closest('td').prev('td').find('div').eq(j).find('.T-endTime').val();
	   			  if(minPrice!=null && startTime!=null && !isNaN(minPrice)){
	   			  	 // 计算时间区间天数
	   	    	     var days = Tools.getDateDiff(startTime,endTime);    
	   	    	         temp.push(minPrice/days);
	   			  }
	   			 
	   			}
	   		});
	   		
	   	});
        //返回包车价与时间区间商集合
	   	return Math.min.apply(Math,temp);
	}


	//查看车队
	BusCompany.viewbusCompany = function($id){
		$.ajax({
			url:""+APP_ROOT+"back/busCompany.do?method=getBusCompanyById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data:"id="+$id+"",
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
						area: '1024px', //宽高
						zIndex:1028,
						content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
						success:function(){

						}
					});
				}
			}
		});
	};
	//删除车队
		BusCompany.deletebusCompany = function($id){
				if (!!$id) {
					showConfirmDialog("你确定要删除该条记录？", function() {
						$.ajax({
							url:""+APP_ROOT+"back/busCompany.do?method=deleteBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
							type: 'post',
							data: {id: $id},
						})
						.done(function(data) {
							if (showDialog(data)) {
								BusCompany.listBusCompany(0);
							}
						});
					})
				}
	}


	//添加司机和车辆
	BusCompany.addBusDriver = function(fn,$busCompany,$busCompanyId){
		var html = addBusDriverTemplate();
		var addBusDriverLayer = layer.open({
			type:1,
			title:'新增车辆和司机',
			skin:'layui-layer-rim',
			area:'650px',
			zIndex:1028,
			content:html,
			scrollbar: false,
			success:function(){
				var $container = $(".T-addBusDriverContainer");

				$container.find('[name=busCompanyName]').val($busCompany);
				$container.find('[name=busCompanyId]').val($busCompanyId);
				BusCompany.chooseBusCompany($container);
				$container.find(".T-submit-busDriver").on('click', function() {
					var BusCompanyId = getValue("busCompanyId"),
						bus = {
							brand : getValue("brand"),
							licenseNumber : getValue("licenseNumber"),
							seatCount : getValue("seatCount")
						},
						driver = {
							name : getValue("driverName"),
							mobileNumber : getValue("mobileNumber"),
							licenseId : getValue("driverLicenseId"),
							driveYears : getValue("driveYear")
						};
					var formData = {
						busCompanyData : {
							name : getValue('busCompanyName'),
							id : getValue('busCompanyId')
						},
						busData : {
							brand : bus.brand,
							licenseNumber : bus.licenseNumber,
							seatCount : bus.seatCount
						},
						driverData : {
							name : driver.name,
							mobileNumber : driver.mobileNumber,
							licenseId : driver.licenseId,
							driveYears : driver.driveYears
						}
					}
					bus = JSON.stringify(bus);
					driver = JSON.stringify(driver);
					if (formData.busCompanyData.id.length == 0) {
						layer.tips('请选择车队', $container.find('[name=busCompanyName]'), {
							tips: [1, '#3595CC'],
							time: 2000
						});
					}else if(formData.busData.licenseNumber == "" && formData.busData.brand == "" && formData.busData.seatCount == "" && formData.driverData.name == "" && formData.driverData.mobileNumber == "" && formData.driverData.licenseId == "" && formData.driverData.driveYears == ""){
						showMessageDialog("车辆和司机至少添加一个。");
					}else{
						if(formData.busData.brand != "" || formData.busData.licenseNumber != "" || formData.busData.seatCount != ""){
							var validatorBus = rule.busComCheckor($container.find('.busTable'));
							if (!validatorBus.form()) return;
						}
						if(formData.driverData.name != "" || formData.driverData.mobileNumber != "" || formData.driverData.licenseId != "" || formData.driverData.driveYears != ""){
							var validatorDriver = rule.busComCheckor($container.find('.driverTable'));
							if (!validatorDriver.form()) return;
						}
						if(formData.busData.licenseNumber == ""){
							bus = "";
						}
						if(formData.driverData.name == ""){
							driver = "";
						}
						$.ajax({
							url: ""+APP_ROOT+"back/busCompany.do?method=addBusAndDriver&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
							type: "POST",
							data: "busCompanyId="+BusCompanyId+"&bus="+encodeURIComponent(bus)+"&driver="+encodeURIComponent(driver),
							success: function(data){
								var result = showDialog(data);
								if(result){
									layer.close(addBusDriverLayer);
									showMessageDialog(data.message,function(){
										if (typeof fn === "function") {
											formData.busData.id = data.busId;
											formData.driverData.id = data.driverId;
											fn(formData);
										}
									})
								}
							}
						})
					}
				});
				function getValue(name){
					var value = $container.find('[name='+name+']').val();
					return value;
				};


				
			}
		})
	};
	//车队 autocomplete
	BusCompany.chooseBusCompany = function($container){
		var busCompanyChoose = $container.find('.T-chooseBusCompany');
		busCompanyChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if (ui.item == null) {
					var $this = $(this),$parents = $this.closest('div');
					$this.val("");
					$parents.find('[name=busCompanyId]').val("");

				}
			},
			select:function(event,ui){
				var $this = $(this),$parents = $this.closest('div');
				$parents.find('[name=busCompanyId]').val(ui.item.id);
			}
		}).on('click', function() {
			var objC = this;
			$.ajax({
				url:""+APP_ROOT+"back/busCompany.do?method=findAllBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				dataType: "json",
				success: function(data) {
					var result = showDialog(data);
					if(result){
						var busCompanyList = JSON.parse(data.busCompanyList);
						if(busCompanyList != null && busCompanyList.length > 0){
							for(var i=0;i<busCompanyList.length;i++){
								busCompanyList[i].value = busCompanyList[i].companyName;
							}
						}
						$(objC).autocomplete('option','source', busCompanyList);
						$(objC).autocomplete('search', '');
					}
				}
			});
		});
	};

	exports.init = BusCompany.initModule;
	exports.addBusCompany = BusCompany.addBusCompany;
	exports.addBusDriver = BusCompany.addBusDriver;
});