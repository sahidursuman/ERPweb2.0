define(function(require, exports) {
	var menuKey = "resource_insurance",
	    listTemplate = require("./view/list"),
	    addTemplate = require("./view/add"),
	    updateTemplate = require("./view/update"),
	    viewTemplate = require("./view/view"),
	    rule = require('./insuranceRule'),
	    tabId = "tab-" + menuKey + "-content";
	var insurance = {
		searchData : {
			name : "",
			status : ""
		},
		listInsurance:function(page,name,status){
			insurance.searchData.name = name;
			insurance.searchData.status = status;
			$.ajax({
				url:""+APP_ROOT+"back/insurance.do?method=listInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var insuranceList = data.insuranceList;
						//实例化对象
						insuranceList = JSON.parse(insuranceList);
						//讲字符串改为对象
						data.insuranceList = insuranceList;
						var html = listTemplate(data);
						addTab(menuKey,"保险公司",html);
						
//						$(".main-content .page-content .insuranceList .btn-insurance-edit").click(function(){
//							var id = $(this).attr("data-entiy-id");
//							insurance.updateInsurance(id);
//						});
						$("#" +tabId+" .insuranceList .btn-insurance-view").click(insurance.viewInsurance);
						
						$("#" +tabId+" .btn-insurance-add").click(insurance.addInsurance);
						
						$("#" +tabId+" .insuranceList .btn-insurance-edit").click(function(){
							var id = $(this).attr("data-entiy-id");
							insurance.updateInsurance(id,data.pageNo);
						});
						
						$("#" +tabId+" .insuranceList .btn-insurance-delete").click(function(){
							var id = $(this).attr("data-entiy-id");
							insurance.deleteInsurance(id,data.pageNo);
						});
						//搜索栏状态button下拉事件
						$("#" +tabId+" .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							insurance.searchData = {
								name : $("#" +tabId+" input[name=insurance_name]").val(),
								status : $("#" +tabId+" .btn-status").find("button").attr("data-value")
							}
							insurance.listInsurance(0,insurance.searchData.name,insurance.searchData.status);
						});
						
						//搜索按钮事件
						$("#" +tabId+" .btn-insurance-search").click(function(){
							insurance.searchData = {
								name : $("#" +tabId+" input[name=insurance_name]").val(),
								status : $("#" +tabId+" .btn-status").find("button").attr("data-value")
							}
							insurance.listInsurance(0,insurance.searchData.name,insurance.searchData.status);
						});
						//分页--首页按钮事件
						$("#" +tabId+" .pageMode a.first").click(function(){
							insurance.listInsurance(0,insurance.searchData.name,insurance.searchData.status);
						});
						//分页--上一页事件
						$("#" +tabId+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							insurance.listInsurance(previous,insurance.searchData.name,insurance.searchData.status);
						});
						//分页--下一页事件
						$("#" +tabId+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							insurance.listInsurance(next,insurance.searchData.name,insurance.searchData.status);
						});
						//分页--尾页事件
						$("#" +tabId+" .pageMode a.last").click(function(){
							insurance.listInsurance(data.totalPage == 0 ? data.totalPage : data.totalPage-1,insurance.searchData.name,insurance.searchData.status);
						});
						
						
						
					}
				}
			});
		},
		addInsurance:function(){
			var html = addTemplate();
			var addInsuranceLayer = layer.open({
			    type: 1,
			    title:"新增保险",
			    skin: 'layui-layer-rim', //加上边框
			    area: ['800px', '400px'], //宽高
			    zIndex:1028,
			    content: html,
			    success:function(){
			    	var $obj = $(".addInsuranceContainer .insuranceMainForm");
			    	var validator = rule.check($(".addInsuranceContainer .insuranceMainForm"));
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
			    	insurance.getProvinceList($obj.find("select[name=provinceId]"));
			    	
			    	//给省份select绑定事件
			    	$obj.find("select[name=provinceId]").change(function(){
			    		var provinceId = $(this).val();
			    		if(provinceId!=''){
				    		insurance.getCityList($obj.find("select[name=cityId]"),provinceId);
			    		}else{
			    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
			    		}
			    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    	});
			    	
			    	//给城市select绑定事件
			    	$obj.find("select[name=cityId]").change(function(){
			    		var cityId = $(this).val();
			       		if(cityId!=''){
				    		insurance.getDistrictList($obj.find("select[name=districtId]"),cityId);
			    		}else{
			    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
			    		}
			    	});
			    	
			  
			    	
			    	//给提交按钮绑定事件
			    	$obj.find(".btn-submit-insurance").click(function(){
			    		if(!validator.form()){return;}
			    		var status = 0;
						if($obj.find(".insurance-status").is(":checked") == true){
							status = 1;
						}
			    		var form = $obj.serialize()+"&status="+status+"";
			    	
			    		$.ajax({
							url:""+APP_ROOT+"back/insurance.do?method=addInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
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
									layer.close(addInsuranceLayer);
									showMessageDialog($( "#confirm-dialog-message" ),data.message);
									insurance.listInsurance(0,"","");
								}
							}
						});
			    	});
			    	
			    	$obj.find(".btn-insurance-standard-add").click();
			    }
			});
		},
		updateInsurance:function(id,pageNo){
			$.ajax({
				url:""+APP_ROOT+"back/insurance.do?method=getInsuranceById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var insuranceInfo = JSON.parse(data.insurance);
						data.insurance = insuranceInfo;
						var html = updateTemplate(data);
						var updateInsurance = layer.open({
						    type: 1,
						    title:"编辑保险信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['900px', '400px'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var $obj = $(".updateInsuranceContainer .insuranceMainForm");
						    	var validator = rule.check($obj);
						    	//绑定账期模式选择事件
						    	var $_payType = $obj.find("select[name=payType] option");
						    	$_payType.each(function(){
						    		if($(this).val()==1){
						    			$(this).parent().parent().find(".payPeriod").removeClass("hide");
						    		}
						    	});
						    	//绑定账期模式选择事件
						    	$obj.find("select[name=payType]").change(function(){
						    		var $payPeriod = $(this).parent().parent().find(".payPeriod");
						    		if($(this).val() == 1){
						    			$payPeriod.removeClass("hide");
						    		}
						    		else{
						    			$payPeriod.addClass("hide");
						    		}
						    	});
								//级联选择城市列表
								var provinceId = "";
								if(data.insurance.provinceId != null){
									provinceId = data.insurance.provinceId;
									var cityId = "";
									if(data.insurance.cityId != null){
										cityId = data.insurance.cityId;

										var districtId = "";
										if(data.insurance.districtId != null){
											districtId = data.insurance.districtId;
										}
										insurance.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
									}
									insurance.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
								}
								insurance.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    /*	//初始化省数据
						    	insurance.getProvinceList($(".insuranceMainForm select[name=provinceId]"));*/
						    	
						    	//给省份select绑定事件
						    	$obj.find("select[name=provinceId]").change(function(){
						    		var provinceId = $(this).val();
						    		if(provinceId!=''){
							    		insurance.getCityList($obj.find("select[name=cityId]"),provinceId);
						    		}else{
						    			$obj.find("select[name=cityId]").html("<option value=''>未选择</option>");
						    		}
						    		$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    	});
						    	
						    	//给城市select绑定事件
						    	$obj.find("select[name=cityId]").change(function(){
						    		var cityId = $(this).val();
						       		if(cityId!=''){
							    		insurance.getDistrictList($obj.find("select[name=districtId]"),cityId);
						    		}else{
						    			$obj.find("select[name=districtId]").html("<option value=''>未选择</option>");
						    		}
						    	});
						    	
						    	
						    	//级联选择城市列表
						    	var provinceId = "";
						    	if(data.insurance.provinceId != null){
						    		provinceId = data.insurance.provinceId;
						    	}
						    	insurance.getProvinceList($obj.find("select[name=provinceId]"),provinceId);
						    	var cityId = "";
						    	if(data.insurance.cityId != null){
						    		cityId = data.insurance.cityId;
						    		insurance.getCityList($obj.find("select[name=cityId]"),provinceId,cityId);
						    		
						    		var districtId = "";
						    		if(data.insurance.districtId != null){
						    			districtId = data.insurance.districtId;
						    			insurance.getDistrictList($obj.find("select[name=districtId]"),cityId,districtId);
						    		}
						    	}
						    	
						    	
						    	//提交表单
						    	$obj.find(".btn-submit-insurance").click(function(){
						    		if(!validator.form()){return}
						    		var status = 0;
									if($obj.find(".insurance-status").is(":checked") == true){
										status = 1;
									}
									
						    		var form = $obj.serialize()+"&status="+status+"";
						    		$.ajax({
										url:""+APP_ROOT+"back/insurance.do?method=updateInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
										type:"POST",
										data:form,
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(updateInsurance);
											var result = showDialog(data);
											if(result){
												layer.close(updateInsurance);
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												insurance.listInsurance(pageNo,insurance.searchData.name,insurance.searchData.status);
											}else{
												insurance.listInsurance(0,insurance.searchData.name,insurance.searchData.status);
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
		deleteInsurance:function(id,pageNo){
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
								url:""+APP_ROOT+"back/insurance.do?method=deleteInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
										$("#" + tabId + " .insuranceList .insurance-"+id+"").fadeOut(function(){
											insurance.listInsurance(pageNo,insurance.searchData.name,insurance.searchData.status);
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
		viewInsurance:function(){
			var id = $(this).attr("data-entiy-id");
			$.ajax({
				url:""+APP_ROOT+"back/insurance.do?method=getInsuranceById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var insuranceInfo = JSON.parse(data.insurance);  
						data.insurance = insuranceInfo;
						var html = viewTemplate(data);
						var updateInsurance = layer.open({
						    type: 1,
						    title:"查看保险详情",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['1024px', 'auto'], //宽高
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
	exports.listInsurance = insurance.listInsurance;
});