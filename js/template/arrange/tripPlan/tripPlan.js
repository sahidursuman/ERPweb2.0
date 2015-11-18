define(function(require, exports) {
	var rule=require("./rule"),
		menuKey = "arrange_plan",
		listTemplate = require("./view/list"),
		viewTripPlanTemplate = require("./view/viewTripPlan"),
		addTripPlanTemplate=require("./view/addTripPlan"),
		updateTemplate = require("./view/updateTripPlan"),
		searchTemplate = require("./view/searchList"),
		addGroupTemplate = require("./view/addGroup"),
		viewGroupTemplate = require("./view/viewGroup"),
		checkTable="arrange_plan-add",
		tabId = "tab-"+menuKey+"-content",
		addTripPlanLayer,
		executeTimeType;
	
	var tripPlan = {
		searchData : false,
		$tab : false,
		$searchArea : false,
		autocompleteDate : {}
	};

	tripPlan.initModule = function() {
        tripPlan.listTripPlan(0,"","","","","","","","","","");
    };	
	
	tripPlan.listTripPlan = function(page,tripId,tripNumber,startTime,guideId,guideName,busId,licenseNumber,creatorName,creator,status){
		if (tripPlan.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            tripId = tripPlan.$searchArea.find("input[name=tripId]").val(),
            tripNumber = tripPlan.$searchArea.find("input[name=tripNumber]").val(),
            startTime = tripPlan.$searchArea.find("input[name=startTime]").val(),
            guideId = tripPlan.$searchArea.find("input[name=guideId]").val(),
            guideName = tripPlan.$searchArea.find("input[name=guideName]").val(),
            busId = tripPlan.$searchArea.find("input[name=busId]").val(),
            licenseNumber = tripPlan.$searchArea.find("input[name=licenseNumber]").val(),
            creator = tripPlan.$searchArea.find("input[name=creatorId]").val(),
            creatorName = tripPlan.$searchArea.find("input[name=creator]").val(),
            status = tripPlan.$searchArea.find('.T-status').find("button").data('value')
        }

        page = page || 0;
        //重置搜索条件
        tripPlan.searchData = {
        	queryType : 0,
            pageNo : page,
            tripId : tripId,
            tripNumber : tripNumber,
            startTime : startTime,
            guideId : guideId,
            guideName : guideName,
            busId : busId,
            busLicenseNumber : licenseNumber,
            creator : creator,
            creatorName : creatorName,
            status : status,
            sortType: 'auto'
        };
		$.ajax({
			url:KingServices.build_url("tripPlan","listTripPlan"),
			type:"POST",
			data:tripPlan.searchData,
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.tripPlanList = JSON.parse(data.tripPlanList);
					var html = listTemplate(data);
					Tools.addTab(menuKey,"发团计划",html);

					tripPlan.initList(data);
					tripPlan.getQueryTerms();

					// 绑定翻页组件
					laypage({
					    cont: $('#' + tabId).find('.T-pagenation'),
					    pages: data.totalPage, 
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		tripPlan.listTripPlan(obj.curr -1);
							}
					    }
					});
				}
			}
		});
	};

	tripPlan.initList = function(data){
		tripPlan.$tab = $('#' + tabId);
        tripPlan.$searchArea = tripPlan.$tab.find('.T-search-area');

		//出游日期 时间控件（筛选搜索）
		tripPlan.$searchArea.find("input[name=startTime]").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
		
		//搜索栏状态button下拉事件
        tripPlan.$searchArea.find('.T-status').on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            tripPlan.listTripPlan(0);
        });
			
		//搜索按钮事件
        tripPlan.$searchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            tripPlan.listTripPlan(0);
        });

		//新增发团计划
		tripPlan.$tab.find(".T-addPlan").click(function(){
			tripPlan.addTripPlan();
		});

		// 报表内的操作
        tripPlan.$tab.find('.T-planList').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id');
            if ($that.hasClass('T-confirm')) {
                // 确认
                var statusValue = $that.attr("statusValue"),
					billStatus = $that.attr("billStatus");
                tripPlan.confirmTripPlan(id,statusValue,billStatus);
            } else if ($that.hasClass('T-view')) {
                // 查看
                tripPlan.viewTripPlan(id);
            } else if ($that.hasClass('T-update')) {
                // 编辑
                tripPlan.updateTripPlan(id);
            } else if ($that.hasClass('T-export')) {
                // 导出
                tripPlan.exportTripPlan(id);
            } else if ($that.hasClass('T-cancel')) {
                // 取消
                tripPlan.cancelTripPlan(id);
            }
        });
			
		//autocomplete
		tripPlan.tripNumberListChoose(tripPlan.$tab);
		tripPlan.guideListChoose(tripPlan.$tab);
		tripPlan.busListChoose(tripPlan.$tab);
		tripPlan.creatorListChoose(tripPlan.$tab);		
	};

	//新增计划
	tripPlan.addTripPlan = function(){
		var $tab = $("#tab-" + menuKey + "-add-content");
		if ($tab.length) {// 如果打开的是相同产品，则不替换
			$('.tab-arrange_plan-add').children('a').trigger('click');
			return;
		}

		var html = addTripPlanTemplate(); 
        if (Tools.addTab(menuKey+"-add", "新增计划", html)) {
            tripPlan.initEdit("add");                         
        }
        rule.checkdCreateTripPlan($('.T-addPlan-form'));  	
	};
	//编辑计划
	tripPlan.updateTripPlan = function(id){
		var $tab = $("#tab-" + menuKey + "-update-content");
		if ($tab.length && $tab.find('.T-savePlan').data('id') == id) {// 如果打开的是相同产品，则不替换
			$('.tab-arrange_plan-update').children('a').trigger('click');
			return;
		}

		$.ajax({
			url:KingServices.build_url("tripPlan","getTripPlanById"),
			data:{ tripPlanId : id + ""}, 
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.touristGroupList =JSON.parse(data.touristGroupList);
					data.lineProductDayList =JSON.parse(data.lineProductDayList);
					data.tripPlan =JSON.parse(data.tripPlan);
					data.lineProduct =JSON.parse(data.lineProduct);
					data.guide =JSON.parse(data.guide);
					data.driver =JSON.parse(data.driver);
					data.busCompant =JSON.parse(data.busCompant);
					data.bus =JSON.parse(data.bus);
					var html = updateTemplate(data);

					//判定短信是否发送
					var isSendMessageStatus=data.tripPlan.isSendTouristMessage;
					//判断  立即发送  定时发送
					var isCheckedStatus=data.tripPlan.executeTimeType;
					if (Tools.addTab(menuKey+"-update", "编辑发团计划", html)) {
			            tripPlan.initEdit("update",id);  
			            //短信状态
					 	tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus,$("#tab-"+menuKey+"-update-content"));                       
			        }
				}	
			}
			
		});	
	};

	tripPlan.initEdit = function(operation,id){
		
		var $tab = $("#tab-" + menuKey + "-" + operation + "-content");
		var $container = $tab.find('.T-plan-container');
		if(arguments === 2){
			$tab.find('.T-savePlan').data('id', id);
		}

		tripPlan.init_edit_event($tab,operation);
    	//搜索线路
    	$container.find(".T-search-line").click(function(){
    		tripPlan.searchLineProduct(true,0,"");
    	});
    	tripPlan.seatCountChoose($tab);
    	tripPlan.brandChoose($tab);
    	tripPlan.licenseNumberChoose($tab);
    	tripPlan.driverChoose($tab);
		tripPlan.guideChoose($tab);
		tripPlan.addTripPlanDatepicker("startTime");
		tripPlan.setPlanceTimeDateTimePicker();
		 //发团计划定时
		tripPlan.setTripPlanPicker();

		//游客短信及时发送显示隐藏
		$tab.find('.T-timeArea .T-timeArea-input').hide();
		$tab.find('.T-timeArea input[type=radio]').click(function(){
			$tab.find('.T-timeArea .T-timeArea-input').toggle();
		});

		tripPlan.MenberNumber($tab);
    	//小组总人数计算
		tripPlan.tripPlanAllMemberCount($tab);
		//新增游客小组
		$tab.find(".T-addTouristGroup").on("click",function(){
			var lineProductId = $container.find("input[name=lineProductId]").val();
			var startTime = $container.find("input[name=startTime]").val();
			tripPlan.addTouristGroup(lineProductId,startTime,$tab);
		});
		//查看旅游小组成员
    	$tab.find(".T-groupView").on("click",function(){
    		var id = $(this).closest('tr').data("id");
    		tripPlan.viewTouristGroup(id);
    	});
    	//删除小组
    	$tab.find(".T-groupDelete").on("click",function(){
    		var id = $(this).closest('tr').data("id"),
    			tripPlanId = $tab.find("input[name=tripPlanId]").val();
    		 tripPlan.deleteTouristGroup($(this),id,tripPlanId,$tab);
    	});

    	//小组总人数计算
    	tripPlan.tripPlanAllMemberCount($tab);

		//取消计划   btn-cancelTripPlan
		$tab.find(".T-cancelPlan").click(function(){
			closeTab(menuKey+"-"+operation);
		})
		//保存计划   btn-savelTripPlan
		$tab.find(".T-savePlan").click(function(){
			tripPlan.saveTripPlan(operation,id);
		});
	};

	//新增页面中 搜索线路产品事件
	tripPlan.searchLineProduct = function(init,page,name){
    	$.ajax({
			url:KingServices.build_url("lineProduct","findAll"),
			data:{
				pageNo : page,
				name : name
			},
			success: function(data) {
            	var result =showDialog(data);
				if(result){
					var lineProductInfo = JSON.parse(data.lineProductList);
					data.lineProductList = lineProductInfo;								
					
					if(lineProductInfo != null && lineProductInfo.length > 0){
						for(var i=0;i<lineProductInfo.length;i++){
							lineProductInfo[i].value = lineProductInfo[i].name;
						}
					}
					var html =searchTemplate(data);
					if(init){
			    		searchTravelLinelayer =layer.open({
			    			type: 1,
						    title:"选择路线",
						    skin: 'layui-layer-rim',
						    area: '900px',
						    zIndex:1029,
						    content: html,
						    scrollbar: false
					    });
					}
					else{
						$("#layui-layer"+searchTravelLinelayer+"").find(".layui-layer-content").html(html);
					}
					
					var $container = $(".T-line-list");
					//搜索按钮事件
					$container.find(".T-line-search").click(function(){
						var name = $container.find("input[name=lineProduct_name]").val()
						tripPlan.searchLineProduct(false,0,name);
					});
					// 绑定翻页组件
					laypage({
					    cont: $container.find('.T-pagenation'),
					    pages: data.totalPage, 
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		tripPlan.searchLineProduct(false,obj.curr-1,name);
							}
					    }
					});

					var id = "";
					$container.find(".T-line-check").click(function(){
						if($(this).is(":checked")){
							id = $(this).closest('tr').data("id");
						}
					});
			    	
					//提交线路获取线路相关信息
					$container.find(".T-saveLine").click(function(){
			    		if(!!id && id != ""){
							$.ajax({
				    			url:KingServices.build_url("lineProduct","findById"),
				    			data:{ lineProductId : id + ""},
								type:"POST",
								success: function(data) {
									data.lineProduct = JSON.parse(data.lineProduct);
									data.lineProductDays = JSON.parse(data.lineProductDays);
									data.guide = JSON.parse(data.guide);
									data.busCompanyTemplate = JSON.parse(data.busCompanyTemplate);
			                    	var result =showDialog(data);
									if(result){
										layer.close(searchTravelLinelayer);
										tripPlan.setTripPlanLineValue(data);
										
										var daysLength = data.lineProductDays.length;
										var html = "";
										for(i=0;i<daysLength;i++){
											html +="<tr><td>第"+data.lineProductDays[i].whichDay+"天</td><td>"+data.lineProductDays[i].repastDetail+"</td><td>"+KingServices.getHotelDesc(data.lineProductDays[i].hotelLevel,'-')+"</td><td class='col-xs-6'>"+data.lineProductDays[i].title+"</td></tr>";
										}
										$(".T-plan-container .T-days").html(html);
									}
								}
				    		})
				    	}else{
				    		showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品");
				    	}
					})
				}
			}
		})
	};

	tripPlan.setTripPlanLineValue = function(data){
		var type = "";
		if(data.lineProduct.customerType==0){
			type = "散客";
		}else{
			type = "团体";
		}
		data.busCompanyTemplate.bus = data.busCompanyTemplate.bus || {};
		data.busCompanyTemplate.busCompany = data.busCompanyTemplate.busCompany || {};
		data.busCompanyTemplate.driver = data.busCompanyTemplate.driver || {};
		
		tripPlan.setValue("name",data.lineProduct.name);
		tripPlan.setValue("lineProductId",data.lineProduct.id);
		tripPlan.setValue("startTime",data.lineProduct.startTime);

		tripPlan.setValue("busCompany",data.busCompanyTemplate.busCompany.companyName || "");
		tripPlan.setValue("busCompanyId",data.busCompanyTemplate.busCompany.id || "");
		tripPlan.setValue("needBusBrand",data.busCompanyTemplate.bus.brand || "");
		tripPlan.setValue("LicenseNumber",data.busCompanyTemplate.bus.licenseNumber || "");
		tripPlan.setValue("busLicenseNumberId",data.busCompanyTemplate.bus.id || "");
		tripPlan.setValue("seatCount",data.busCompanyTemplate.bus.seatCount);
		tripPlan.setValue("AddTPchooseGuide",data.guide.realname);
		tripPlan.setValue("AddTPchooseGuideId",data.guide.id);
		tripPlan.setValue("GmobileNumber",data.guide.mobileNumber);
		tripPlan.setValue("driverName",data.busCompanyTemplate.driver.name || "");
		tripPlan.setValue("driverId",data.busCompanyTemplate.driver.id || "");
		tripPlan.setValue("DmobileNumber",data.busCompanyTemplate.driver.mobileNumber || "");
		
		tripPlan.setValue("days",data.lineProduct.days);
		tripPlan.setValue("type",data.lineProduct.type);
		tripPlan.setValue("customerType",type);
		tripPlan.setAreaValue("includeFee",data.lineProduct.includeFee);
		tripPlan.setAreaValue("excludeFee",data.lineProduct.excludeFee);
		tripPlan.setAreaValue("lineFeature",data.lineProduct.lineFeature);
		tripPlan.setAreaValue("lineNotice",data.lineProduct.lineNotice);
	};

	tripPlan.setValue = function(name,value){
		$(".T-plan-container").find("[name="+name+"]").attr("value",value);
	};
	tripPlan.setAreaValue = function(name,value){
		$(".T-plan-container").find("[name="+name+"]").text(value);
	};

	tripPlan.confirmTripPlan = function(id,statusValue,billStatus){
		if(billStatus != -1){
			showMessageDialog($( "#confirm-dialog-message" ),"该团已审核，无法确认");
		}else{
			if(statusValue==0){
				$.ajax({
					url:KingServices.build_url("tripPlan","confirmTripPlan"),
					data:{ tripPlanId : id + "" },
					success: function(data) {
		            	var result =showDialog(data);
		            	var dataD = data;
						if(result){
							showMessageDialog($("#confirm-dialog-message" ),data.message);
							// 确认发团成功后，刷新列表
							tripPlan.listTripPlan(0,tripPlan.searchData.tripId,tripPlan.searchData.tripNumber,tripPlan.searchData.startTime,tripPlan.searchData.guideId,tripPlan.searchData.guideName,tripPlan.searchData.busId,tripPlan.searchData.licenseNumber,tripPlan.searchData.creator,tripPlan.searchData.creatorName,tripPlan.searchData.status);
						}
					}
				});
			}else{
				showConfirmMsg($( "#confirm-dialog-message" ), "是否给导游发送短信？",function(){
					$.ajax({
						url:KingServices.build_url("tripPlan","noticeGuideTripPlanAfterConfirmTripPlanAgain"),
						data:{ id : id + "" },
						success: function(data) {
							var result =showDialog(data);
							var dataD = data;
							if(result){
								showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
									tripPlan.listTripPlan(0,"","","","","","","","","","");
								});
							}
						}
					});
				},function(){},"取消","确定");
			}
		}
	};

	//查看计划
	tripPlan.viewTripPlan = function(id){
		$.ajax({
			url:KingServices.build_url("tripPlan","getTripPlanById"),
			data:{
				tripPlanId : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.touristGroupList =JSON.parse(data.touristGroupList);
					data.lineProductDayList =JSON.parse(data.lineProductDayList);
					data.tripPlan =JSON.parse(data.tripPlan);
					data.lineProduct =JSON.parse(data.lineProduct);
					data.guide =JSON.parse(data.guide);
					data.driver =JSON.parse(data.driver);
					data.busCompant =JSON.parse(data.busCompant);
					data.bus =JSON.parse(data.bus);
					var html = viewTripPlanTemplate(data);
					Tools.addTab(menuKey+"-view","查看发团计划",html);
					var $tab = $("#tab-arrange_plan-view-content");
			    	tripPlan.MenberNumber($tab);
			    
			    	//查看计划中 查看游客小组
			    	$tab.find(".T-touristView").on("click",function(){
			    		var id = $(this).closest('tr').data("id");
			    		tripPlan.viewTouristGroup(id);
			    	})
				}
			}
		});
	};

	//查看旅游小组成员
	tripPlan.viewTouristGroup = function(id){
		$.ajax({
			url:KingServices.build_url("tripPlan","getMemberList"),
			data:{ touristGroupId : id + "" },
			success:function(data){
				var result = showDialog(data);
				if(result){
					var memberList = JSON.parse(data.memberList);
					data.memberList = memberList;
					var html = viewGroupTemplate(data);
					var viewGroupTemplateLayer = layer.open({
					    type: 1,
					    title:"查看小组信息",
					    skin: 'layui-layer-rim',
					    area: '700px',
					    zIndex:1028,
					    content: html,
					    scrollbar: false
					})
				}
			}
		});
	};

	//导出发团计划
	tripPlan.exportTripPlan = function(id){
		checkLogin(function(){
			var url = KingServices.build_url("export","exportTripPlan") + "&tripPlanId="+id+"";
			exportXLS(url);
		});
	};

	//取消计划
	tripPlan.cancelTripPlan = function(id){
		showConfirmMsg($( "#confirm-dialog-message" ), "你确定要取消该发团计划信息？",function(){
			$.ajax({
				url:KingServices.build_url("tripPlan","cancelTripPlan"),
				data:{ tripPlanId : id + "" },
				success: function(data) {
					var result =showDialog(data);
					var dataD = data;
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							tripPlan.listTripPlan(0,"","","","","","","","","","");
						});
					}
				}
			});
		},function(){},"取消","确定");
	};

	//保存编辑
	tripPlan.saveTripPlan = function (operation,id,tab_id, title, html){
		var $tab = $("#tab-arrange_plan-"+ operation +"-content"),argumentsLen = arguments.length;
		function getValue(name){
			var thisObj = $tab.find("[name="+name+"]"), objValue;
			if(thisObj.attr("type") == "checkbox"){
				objValue = thisObj.is(":checked") ? 1 : 0;
			}else{
				objValue = thisObj.val();
			}
			return objValue;
		}
		if ($tab.find("input[name=executeTimeType]").eq(0).is(":checked")) {
			executeTimeType=0;
		};

		if ($tab.find("input[name=executeTimeType]").eq(1).is(":checked")) {
			executeTimeType=1;
		};

		var planTouristCount = parseInt(getValue("planTouristCount")),
			memberCount = parseInt($tab.find(".T-groupMemberCount").text());
		if(planTouristCount < memberCount){
			showMessageDialog($( "#confirm-dialog-message" ),"小组总人数不能大于计划人数");
		}else{
			// 表单校验
			var validator = rule.checkdCreateTripPlan($tab.find(".T-plan-container"));
			if (!validator.form()) { return; }

			var saveTripP = {
				tripPlan : {
					startTime : getValue("startTime"),
					accompanyGuideName : getValue("accompanyGuideName"),
					accompanyGuideMobile : getValue("accompanyGuideMobile"),
					planTouristCount : getValue("planTouristCount"),
					setPlacePosition : getValue("setPlacePosition"),
					setPlaceTime : getValue("setPlaceTime"),
					executeTimeType :executeTimeType+"",
					executeTime : getValue("executeTime")
				},
				tripPlanId : getValue("tripPlanId"),
				lineProductId : getValue("lineProductId"),
				driverId : getValue("driverId"),
				guideId : getValue("AddTPchooseGuideId"),
				busId : getValue("busLicenseNumberId"),
				touristGroupId : []
			}
			var touristGroupTr = $tab.find(".T-tourist-list tr");
			touristGroupTr.each(function(i){
				saveTripP.touristGroupId.push({
					id : $(this).data("id") + ""
				});
			})
					
			var saveTripPlan = JSON.stringify(saveTripP);
			if (saveTripP.touristGroupId.length == 0) {
				showMessageDialog($( "#confirm-dialog-message" ),"请添加游客小组！")
				return;
			}
			var url = "";
			if(operation == "add"){
				url = KingServices.build_url("tripPlan","addTripPlan");
			} else if(operation == "update"){
				url = KingServices.build_url("tripPlan","updateTripPlan");
			}
			$.ajax({
				url:url,
				data:{
					saveTripPlan : saveTripPlan
				},
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							if(argumentsLen === 1 || argumentsLen === 2){
								Tools.closeTab(menuKey+"-" + operation);
								if(operation == "update"){
									tripPlan.listTripPlan(tripPlan.searchData.page,tripPlan.searchData.tripId,tripPlan.searchData.tripNumber,tripPlan.searchData.startTime,tripPlan.searchData.guideId,tripPlan.searchData.guideName,tripPlan.searchData.busId,tripPlan.searchData.licenseNumber,tripPlan.searchData.creatorName,tripPlan.searchData.creator,tripPlan.searchData.status);
								} else {
									tripPlan.listTripPlan(0,"","","","","","","","","","");
								}
							} else {
	                            $tab.data('isEdited',false);
	                            Tools.addTab(tab_id, title, html);
	                            tripPlan.initEdit(operation,id);
							}
						});
					}
				}
			})
		}
	};

	tripPlan.getQueryTerms = function(){
		$.ajax({
			url:KingServices.build_url("tripPlan","getQueryTermsForPlan"),
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					tripPlan.autocompleteDate.tripNumberList = data.tripNumberList;
					tripPlan.autocompleteDate.guideList = data.guideList	;
					tripPlan.autocompleteDate.creatorList = data.creatorList;
					tripPlan.autocompleteDate.busList = data.busList;
				}
			}
		});
	};

	tripPlan.tripPlanAllMemberCount = function($tab){
		var tr = $tab.find(".T-tourist-list tr"),
			trMemberCount = 0;
		tr.each(function(){
			trMemberCount += parseInt($(this).find(".T-memberCount").text());
		})
		$tab.find(".T-groupMemberCount").text(trMemberCount);
		trMemberCount = 0;
	};

	//游客名单成员添加自动序号函数  tripPlan.MenberNumber(oClass);
	tripPlan.MenberNumber = function($tab){
		$tab.find(".T-tourist-list tr").each(function(i){
			$(this).children().eq(0).text(i+1);
		});
	};

	//添加游客小组
	tripPlan.addTouristGroup = function(lineProductId,startTime,$tab){
		//添加游客小组 （多选）			
		var excludeIdJson = [];
		$tab.find(".T-tourist-list tr").each(function(i){
			var excludeId = {
				id : $(this).data("id")
			};
			excludeIdJson.push(excludeId);
		})
		excludeIdJson = JSON.stringify(excludeIdJson);

		if(lineProductId.length > 0 && startTime.length > 0){
			$.ajax({
				url:KingServices.build_url("tripPlan","findTouristGroupInfo"),
				type:"POST",
				data:{
					lineProductId : lineProductId,
					startTime : startTime,
					type : 1,
					excludeIdJson : excludeIdJson
				},
				success:function(data){
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						if(data.touristGroupList.length <= 0 ){
							showMessageDialog($( "#confirm-dialog-message" ),"没有出游的游客小组，请在游客管理中添加！");
							return false;
						}
						var html = addGroupTemplate(data);
						var addGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"添加游客小组",
						    skin: 'layui-layer-rim', 
						    area: '1100px',
						    zIndex:1028,
						    content: html,
						    scrollbar: false,
						    success:function(){
						    	var $container = $(".T-addtourist-toplan");
						    	$container.find(".T-checkAll").click(function(){
									if($(this).is(":checked")){
										$container.find(".T-tourist-check").prop("checked",true);
									} else{
										$container.find(".T-tourist-check").prop("checked",false);
									}
								});
						    	//查看旅游小组成员
						    	$container.find(".T-groupView").off().on("click",function(){
						    		tripPlan.viewTouristGroup($(this).closest("tr").data("id"));
						    	})
						    	//提交按钮事件绑定
								$container.find(".T-saveGroup").click(function(){
									var addGroupIdJson = [],html = "";
									$container.find(".T-group-list tr").find("input:checked").each(function(i){
										var $tr = $(this).closest('tr');
										html += "<tr data-id=\""+$tr.data("id")+"\">"+
											"<td></td>"+
											"<td>"+ $.text($tr.find("td[name=creatorName]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=lineProductName]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=travelAgencyName]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=contactMemberName]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=contactMemberMobileNumber]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=areaData]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=ageData]")) +"</td>"+
											"<td class=\"T-memberCount\">"+ $.text($tr.find("td[name=peopleCount]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=currentNeedPayMoney]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=hotelLevel]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=includeSelfPay]")) +"</td>"+
											"<td>"+ $.text($tr.find("td[name=remark]")) +"</td>"+
											"<td>"+
											"<div class=\"hidden-sm hidden-xs btn-group\">"+
											"<a class=\"cursor T-groupView\">"+
												"查看"+
											"</a>"+"<a class='cursor'> </a>"+
											"<a class=\"cursor T-groupDelete\">"+
												"删除"+
											"</a>"+
											"</div>"+
											"</td>"+
											"</tr>";
									});
						    		$tab.find(".T-tourist-list").append(html);
						    		//查看旅游小组成员
							    	$tab.find(".T-groupView").on("click",function(){
							    		var id = $(this).closest('tr').data("id");
							    		tripPlan.viewTouristGroup(id);
							    	});
							    	//删除小组
							    	$tab.find(".T-groupDelete").on("click",function(){
							    		var id = $(this).closest('tr').data("id"),
							    			tripPlanId = $tab.find("input[name=tripPlanId]").val();
							    		 tripPlan.deleteTouristGroup($(this),id,tripPlanId,$tab);
							    	});
									
									layer.close(addGroupTemplateLayer);
									tripPlan.MenberNumber($tab);
							    	//小组总人数计算
			    					tripPlan.tripPlanAllMemberCount($tab);
						    	})
						    }
						})
					}					
				}
			})
		}else{
			showMessageDialog($( "#confirm-dialog-message" ),"请先选择线路名称和出团日期！");
		}
	};

	//删除小组成员
	tripPlan.deleteTouristGroup = function(obj,id,tripPlanId,$tab){
		showConfirmMsg($( "#confirm-dialog-message" ), "你确定要移除该小组吗？",function(){
			if(tripPlanId){
				$.ajax({
					url:KingServices.build_url("touristGroup","removeTouristGroup"),
					data:{ 
						tripPlanId : tripPlanId + "",
						touristGroupId : id
					},
					success: function(data) {
						var result =showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
			    				obj.closest('tr').remove();
								tripPlan.MenberNumber($tab);
								tripPlan.tripPlanAllMemberCount($tab);
							});
						}
					}
				});
			} else{
				obj.closest('tr').remove();
				tripPlan.MenberNumber($tab);
				tripPlan.tripPlanAllMemberCount($tab);
			}
		},function(){},"取消","确定");
	};

	tripPlan.init_edit_event = function($tab,operation,id) {
        if (!!$tab && $tab.length === 1) {
            var validator =rule.checkdCreateTripPlan($tab.find('.T-addPlan-form'));

            // 监听修改
            $tab.find(".T-plan-container").on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            	event.preventDefault();
            	
				tripPlan.initEdit(operation,$tab.find('.T-savePlan').data('id'));
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                tripPlan.saveTripPlan(operation,id,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                tripPlan.saveTripPlan(operation);
            });
        }
    };

	//团号模糊查询
	tripPlan.tripNumberListChoose = function($obj){
		var tripNumberListChoose = $obj.find(".T-choosePlan");
		tripNumberListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=tripId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=tripId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var listObj = tripPlan.autocompleteDate.tripNumberList;
			if(listObj !=null && listObj.length>0){
				for(var i=0;i<listObj.length;i++){
					listObj[i].value = listObj[i].tripNumber;
				}
			}
			$(obj).autocomplete('option','source', listObj);
			$(obj).autocomplete('search', '');
		})
	};
	//导游模糊查询
	tripPlan.guideListChoose = function($obj){
		var guideListChoose = $obj.find(".T-chooseGuide");
		guideListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=guideId]").val("");
				}
			},
			select:function(event,ui){
            $(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=guideId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listGuideObj = tripPlan.autocompleteDate.guideList;
			if(listGuideObj !=null && listGuideObj.length>0){
				for(var i=0;i<listGuideObj.length;i++){
					listGuideObj[i].value = listGuideObj[i].realname;
				}
			}
			$(obj).autocomplete('option','source',listGuideObj);
			$(obj).autocomplete('search', '');
		});
	};

	//车牌号模糊查询
	tripPlan.busListChoose = function($obj){
		var busListChoose = $obj.find(".T-chooseBus");
		busListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=busId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=busId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listBusObj = tripPlan.autocompleteDate.busList;
			if(listBusObj !=null && listBusObj.length>0){
				for(var i=0;i<listBusObj.length;i++){
					listBusObj[i].value = listBusObj[i].licenseNumber;
				}
			}
			$(obj).autocomplete('option','source',listBusObj);
			$(obj).autocomplete('search', '');
		});
	};
    //创建人模糊查询
	tripPlan.creatorListChoose = function($obj){
		var creatorListChoose = $obj.find(".T-chooseCreator");
		creatorListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=creatorId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=creatorId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listCreatorObj = tripPlan.autocompleteDate.creatorList;
			if(listCreatorObj !=null && listCreatorObj.length>0){
				for(var i=0;i<listCreatorObj.length;i++){
					listCreatorObj[i].value = listCreatorObj[i].realName;
				}
			}
			$(obj).autocomplete('option','source',listCreatorObj);
			$(obj).autocomplete('search', '');
		});
	};

	tripPlan.seatCountChoose = function($tab){
		var chooseSeatCount = $tab.find(".T-editPlan-form .T-chooseSeatCount");
		chooseSeatCount.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
					$this.val("");
					parents.find("input[name=needBusBrand]").val("");
					parents.find("input[name=LicenseNumber]").val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompany]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
				parents.find("input[name=needBusBrand]").val("");
				parents.find("input[name=LicenseNumber]").val("");
				parents.find("input[name=busLicenseNumberId]").val("");
				parents.find("input[name=busCompany]").val("");
				parents.find("input[name=busCompanyId]").val("");
				parents.find("input[name=driverName]").val("");
				parents.find("input[name=driverId]").val("");
				parents.find("input[name=DmobileNumber]").val("");
			}
		}).unbind("click").click(function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url("bookingOrder","getSeatCountList"),
				success:function(data){
					var result = showDialog(data);
					if(result){
						var seatCountListJson = [];
						var seatCountList = data.seatCountList;
						if(seatCountList && seatCountList.length > 0){
							for(var i=0; i < seatCountList.length; i++){
								var seatCount = {
									value : seatCountList[i]
								}
								seatCountListJson.push(seatCount);
							}
							$(obj).autocomplete('option','source', seatCountListJson);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有内容', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			})
		})
	};
	tripPlan.brandChoose = function($tab){
		var chooseBrand = $tab.find(".T-editPlan-form .T-chooseBusBrand");
		chooseBrand.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
					$this.val("");
					parents.find("input[name=LicenseNumber]").val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompany]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
				parents.find("input[name=LicenseNumber]").val("");
				parents.find("input[name=busLicenseNumberId]").val("");
				parents.find("input[name=busCompany]").val("");
				parents.find("input[name=busCompanyId]").val("");
				parents.find("input[name=driverName]").val("");
				parents.find("input[name=driverId]").val("");
				parents.find("input[name=DmobileNumber]").val("");
			}
		}).unbind("click").click(function(){
			var obj = this;
			var seatCount = $(this).closest('.T-baseinfo-container').find(".T-chooseSeatCount").val();
			if(seatCount){
				$.ajax({
					url:KingServices.build_url("bookingOrder","getBusBrandList"),
					data:{
						seatCount : seatCount
					},
					showLoading:false,
					type:"POST",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var busBrandListJson = [];
							var busBrandList = data.busBrandList;
							if(busBrandList && busBrandList.length > 0){
								for(var i=0; i < busBrandList.length; i++){
									var busBrand = {
										value : busBrandList[i]
									}
									busBrandListJson.push(busBrand);
								}
								$(obj).autocomplete('option','source', busBrandListJson);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			}else{
				layer.tips('请选择车座数', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};
	tripPlan.licenseNumberChoose = function($tab){
		var chooseLicense = $tab.find(".T-editPlan-form .T-chooseLicenseNumber");
		chooseLicense.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
					$this.val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompany]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
					parents.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
					parents.find("input[name=busCompany]").val(ui.item.busCompanyName);
					parents.find("input[name=busCompanyId]").val(ui.item.busCompanyId);
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
			}
		}).unbind("click").click(function(){
			var obj = this;
			var seatCount = $(this).closest('.T-baseinfo-container').find(".T-chooseSeatCount").val();
			var busBrand = $(this).closest('.T-baseinfo-container').find("input[name=needBusBrand]").val();
			if (!!seatCount) {
				$.ajax({
					url:KingServices.build_url("busCompany","getLicenseNumbers"),
					data: {
						seatCount: seatCount,
						brand: busBrand
					},
					showLoading:false,
					type:"POST",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var licenseList = JSON.parse(data.busList);
							if(licenseList && licenseList.length > 0){
								for(var i=0; i < licenseList.length; i++){
									licenseList[i].value = licenseList[i].licenseNumber;
								}
								$(obj).autocomplete('option','source', licenseList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			}else{
				layer.tips('请选择车座数', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	},
	tripPlan.driverChoose = function($tab){
		var chooseDriver = $tab.find(".T-editPlan-form .T-chooseDriver");
		chooseDriver.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
					$this.val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			},
			select :function(event, ui){
				var $this = $(this),parents = $(this).closest('.T-baseinfo-container');
				parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
				parents.find("input[name=DmobileNumber]").val(ui.item.mobileNumber);
			}
		}).unbind("click").click(function(){
			var obj = this;
			var busLicenseNumberId = $(this).closest('.T-baseinfo-container').find("input[name=busLicenseNumberId]").val();
			if(busLicenseNumberId){
				$.ajax({
					url:KingServices.build_url("busCompany","getDrivers"),
					data:{
						busId : busLicenseNumberId + ""
					},
					showLoading:false,
					type:"POST",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var driverList = JSON.parse(data.driverList);
							if(driverList && driverList.length > 0){
								for(var i=0; i < driverList.length; i++){
									driverList[i].value = driverList[i].name;
								}
								$(obj).autocomplete('option','source', driverList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			}else{
				layer.tips('请选择车牌号', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};

	//导游autocomplete
	tripPlan.guideChoose = function($tab){
		var guaideNameChoose = $tab.find(".T-editPlan-form .T-chooseGuide"),
			$obj = $('.T-plan-container .T-baseinfo-container');
		guaideNameChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val("");
					$obj.find("input[name=AddTPchooseGuideId]").val("");
					$obj.find("input[name=GmobileNumber]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				$obj.find("input[name=AddTPchooseGuideId]").val(ui.item.id).trigger('change');
				$obj.find("input[name=GmobileNumber]").val(ui.item.mobileNumber);
			}
		}).click(function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url("guide","findAll"),
				showLoading:false,
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
	};

	tripPlan.addTripPlanDatepicker = function(name){
		$(".T-plan-container input[name="+name+"]").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
	//集合时间   时间控件
	tripPlan.setPlanceTimeDateTimePicker = function(){
    	$(".T-plan-container input[name=setPlaceTime]").datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	};
	  //发团定时   
	tripPlan.setTripPlanPicker = function(){
    	$(".T-plan-container input[name=executeTime]").datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
	}; 

	tripPlan.isMessageStatus = function(isSendMessageStatus,isCheckedStatus,$tab){
		var $Obj=$tab.find(".T-plan-container");
		if (isSendMessageStatus==1) {
			$Obj.find("input[name=executeTimeType]").prop("disabled",true);
		} else{
			$Obj.find("input[name=executeTimeType]").prop("disabled",false);
		}

		if (isCheckedStatus==0) {//立即发送
			$Obj.find("input[name=executeTimeType]").eq(0).prop("checked",true);
		} else{//定时发送
			$Obj.find("input[name=executeTimeType]").eq(1).prop("checked",true);
			$Obj.find("input[name=executeTime]").show();
			
			if(isSendMessageStatus==1){
				$Obj.find("input[name=executeTime]").prop("disabled",true);
			}
		}
	};

	exports.init = tripPlan.initModule;
});