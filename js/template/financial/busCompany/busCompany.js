define(function(require, exports) {
	var rule = require("./rule"); 
	var  menuKey = "financial_busCompany",
		 blanceTabId = menuKey+"-blance",
		 listTemplate = require("./view/list"),
		 checkBill = require("./view/checkBill"),
		 Clearing = require("./view/Clearing"),
		 blanceRecords = require("./view/busCompanyRecords"),
		 billImageTempLate = require("./view/billImages"),
		 tabId = "tab-"+menuKey+"-content",
	     checkTabId = menuKey+"-checking",
		 yearList=[],
	     monthList = [];
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    }
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }
	    //var busCompanyDate={}
	var BusCompany = {
		searchData:{
			page : "",
			busCompanyId : "",
			year : "",
			month : ""
		},
		searchCheckData:{
			pageNo : "",
			busCompanyId : "",
			companyName : "",
			year : "",
			month : ""
		},
		searchBalanceData:{
			pageNo : "",
			busCompanyId : "",
			companyName : "",
			year : "",
			startMonth : "",
			endMonth : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!BusCompany.edited[editedType] && BusCompany.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		blanceStatus:false, 
		//车队账务list 
		listBusCompany:function(page,busCompanyId,year,month){
			$.ajax({
				 url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=listSumFcBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&busCompanyId="+busCompanyId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.companyNameListNew = JSON.parse(data.companyNameListNew);
						BusCompany.searchData={
							page : page,
							busCompanyId:busCompanyId,
							year:year,
							month:month
						},
						data.searchParam = BusCompany.searchData;
						data.yearList = yearList;
						data.monthList = monthList;
						var html = listTemplate(data);
						console.log(BusCompany);
						addTab(menuKey,"车队账务",html);	
						
						//搜索按钮事件 BusCompany.listBusCompany
						$("#" + tabId + " .btn-busCompany-search").click(function(){
							BusCompany.searchData = {
									busCompanyId:$("#" + tabId + " select[name=busCompanyId]").val(),
									year:$("#" + tabId + "  select[name=year]").val(),
									month:$("#" + tabId + " select[name=month]").val(),
							}
							BusCompany.listBusCompany(0,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						});
						
						
						//分页--首页按钮事件
						$("#" + tabId + " .pageMode a.first").click(function(){
							BusCompany.listBusCompany(0,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						});
						//分页--上一页事件
						$("#" + tabId + " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							BusCompany.listBusCompany(previous,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						});
						//分页--下一页事件
						$("#" + tabId + " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							BusCompany.listBusCompany(next,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						});
						//分页--尾页事件
						$("#" + tabId + " .pageMode a.last").click(function(){
							 BusCompany.listBusCompany(data.totalPage == 0 ? data.totalPage:data.totalPage-1,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						});
						//给对账按钮绑定事件
						$("#" + tabId + " .btn-busCompany-check").click(function(){
							BusCompany.searchCheckData={
									busCompanyId:$(this).attr("data-entity-id"),
									companyName:$(this).attr("data-entity-companyName"),
									year:$(this).attr("data-entity-year"),
									month:$(this).attr("data-entity-month")        
							}
							BusCompany.busCompanyCheck(0,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//给结算按钮绑定事件
						$("#" + tabId + "  .btn-busCompany-balance").click(function(){
							BusCompany.searchBalanceData={
									"busCompanyId":$(this).attr("data-entity-id"),
									"companyName":$(this).attr("data-entity-companyName"),
									"year":$(this).attr("data-entity-year"),
									"startMonth":$(this).attr("data-entity-startMonth"),
									"endMonth":$(this).attr("data-entity-endMonth")
								}//busCompanyClear
							BusCompany.busCompanyClear(0,BusCompany.searchBalanceData.busCompanyId,BusCompany.searchBalanceData.companyName,BusCompany.searchBalanceData.year,BusCompany.searchBalanceData.startMonth,BusCompany.searchBalanceData.endMonth);
						});
					}
				}  
			});
		},
		//车队对账
		busCompanyCheck:function(pageNo,busCompanyId,companyName,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=listFcBusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+pageNo+"&busCompanyId="+busCompanyId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//表单验证
					var $obj = $(".busCompanyChecking .form-horizontal"); 
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.financialBusCompanyList = JSON.parse(data.financialBusCompanyList);
						BusCompany.searchCheckData={
							busCompanyId:busCompanyId,
							companyName:companyName,
							year:year,
							month:month        
						}
						data.yearList = yearList
						data.monthList = monthList
						data.companyName = companyName
						data.searchParam = BusCompany.searchCheckData  
						var html = checkBill(data);
						var validator;
						//判断页面是否存在
						if($("#" +"tab-"+checkTabId+"-content").length > 0) {	
							if(!!BusCompany.edited["checking"] && BusCompany.edited["checking"] != ""){
								addTab(checkTabId,"车队对账");
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									validator = rule.check($('.busCompanyChecking'));
									if (!validator.form()) { return; }
									BusCompany.saveCheckingData(pageNo,busCompanyId,companyName,year,month,0)
									BusCompany.edited["checking"] = "";
									addTab(checkTabId,"车队对账",html);
									validator = rule.check($('.busCompanyChecking'));
								 },function(){
									addTab(checkTabId,"车队对账",html);
									BusCompany.edited["checking"] = "";
									validator = rule.check($('.busCompanyChecking'));
								 });
							}else{
								addTab(checkTabId,"车队对账",html);
								validator = rule.check($('.busCompanyChecking'));
							}
						}else{
							addTab(checkTabId,"车队对账",html);
							validator = rule.check($('.busCompanyChecking .all'));
						}
					    $("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
							BusCompany.checkingData={
								pageNo : pageNo,
								busCompanyId : busCompanyId,
								companyName : companyName,
								year : year,
								month : month
							};
							BusCompany.edited["checking"] = "checking";  
						});
						
						//给搜索按钮绑定事件
						$("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
							BusCompany.busCompanyCheck(0,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//车队导出事件btn-busCompanyExport
						$("#" +"tab-"+ checkTabId+"-content"+" .btn-busCompanyExport").click(function(){
							var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
							var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
							checkLogin(function(){
								var url = ""+APP_ROOT+"back/export.do?method=busCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&busCompanyId="+busCompanyId+"&companyName="+companyName+"&year="+year+"&month="+month+"&sortType=auto";
								exportXLS(url)
							});
						});
						//分页--首页按钮事件
						$("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
							BusCompany.busCompanyCheck(0,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//分页--上一页事件
						$("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							BusCompany.busCompanyCheck(previous,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//分页--下一页事件
						$("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							BusCompany.busCompanyCheck(next,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//分页--尾页事件
						$("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
							BusCompany.busCompanyCheck(data.totalPage == 0 ? data.totalPage : data.totalPage-1,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
						//给全选绑定事件
						$("#" +"tab-"+ checkTabId+"-content"+" .busCompany-selectAll").click(function(){
							var flag = this.checked;
							$(".busCompanyChecking .all tbody tr").each(function(){
								var checkedbox = $(this).find(".busCompanyFinancial")
								if(flag){
									checkedbox.prop("checked",true);
								}else{
									//判断对账状态
									if(checkedbox.attr("data-entity-checkStatus") == 1){
										checkedbox.prop("checked",true);
									}else{ 	
										checkedbox.prop("checked",false);
									}
								}
							});
						});
					    //给复选框绑定事件
						$("#" +"tab-"+ checkTabId+"-content"+" .busCompanyFinancial").click(function(){
							var flag = true
							$("#" +"tab-"+ checkTabId+"-content"+" .busCompanyFinancial").each(function(){
								if(!$(this).prop("checked")){
									flag = false;
								} 
							})
							$("#" +"tab-"+ checkTabId+"-content"+" .busCompany-selectAll").prop("checked",flag)
						});
					    //给确认对账按钮绑定事件
						$("#" +"tab-"+ checkTabId+"-content"+" .btn-busCompanyFinancial-checking").click(function(){
							if (!validator.form()) { return;}
							BusCompany.saveCheckingData(pageNo,busCompanyId,companyName,year,month,0);
						});
						//给查看单据绑定事件
						$("#" +"tab-"+ checkTabId+"-content"+" .busCompanyImg").click(function(){
							var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
							var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
							BusCompany.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
						});
						//取消按钮事件
						$("#" +"tab-"+ checkTabId+"-content"+" .btn-busCompanyFinancial-close").click(function(){
							showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
								closeTab(checkTabId);
								BusCompany.edited["checking"] = "";
							});
						});
					}          
						 
				}
			});
		},
		//车队结算
		busCompanyClear:function(pageNo,busCompanyId,companyName,year,startMonth,endMonth){
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=listFcBusCompanySettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+pageNo+"&busCompanyId="+busCompanyId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//表单验证
					var $obj = $(".busCompanyCleaning .form-horizontal");
					var validator;
				   layer.close(globalLoadingLayer);
				   var result = showDialog(data);
					if(result){
						data.yearList = yearList
						data.companyName = companyName
						data.monthList = monthList
						var html = Clearing(data);
						//addTab(blanceTabId,"车队结算",html);
						//var validator = rule.check($('.busCompanyCleaning'));
					   /* //获取table中的tr
						var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
						//给每个tr添加表单验证
						$tr.each(function(){
							$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
						});*/
						//var validator = rule.check($('.busCompanyCleaning'));
					  //判断页面是否存在
						if($("#" +"tab-"+blanceTabId+"-content").length > 0) {
							if(!!BusCompany.edited["blance"] && BusCompany.edited["blance"] != ""){
								addTab(blanceTabId,"车队结算");
								//给每个tr添加表单验证
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
									$tr.each(function(){
										$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
									});
									 
									var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-busCompanyBlance-save")
									if (!$(saveBtn).data('validata').form()) { return; }
									BusCompany.saveBlanceData(pageNo,busCompanyId,companyName,year,startMonth,endMonth,0);
									BusCompany.edited["blance"] = "";
									addTab(blanceTabId,"车队结算",html);
									var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
									//给每个tr添加表单验证
									$tr.each(function(){
										$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
									});
								 },function(){
									addTab(blanceTabId,"车队结算",html);
									BusCompany.edited["blance"] = ""
									var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
									//给每个tr添加表单验证
									$tr.each(function(){
										$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
									});
									
								 });
							}else{
								addTab(blanceTabId,"车队结算",html);
								var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
								//给每个tr添加表单验证
								$tr.each(function(){
									$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
								});
							}
							 
						}else{
							addTab(blanceTabId,"车队结算",html);
							var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
							//给每个tr添加表单验证
							$tr.each(function(){
								$(this).find('.btn-busCompanyBlance-save').data('validata', rule.check($(this)));
							});
						};
					   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
							BusCompany.edited["blance"] = "blance";
							BusCompany.searchBalanceData = {
								pageNo : pageNo,
								busCompanyId : busCompanyId,
								companyName : companyName,
								year : year,
								startMonth : year,
								endMonth : endMonth
							}
							$(this).closest('tr').data('blanceStatus',true);
						});
						//设置表单验证
						//var validator = rule.check($('.busCompanyCleaning')); 
						
						//搜索按钮事件
						$("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
							BusCompany.searchBalanceData={
								busCompanyId:busCompanyId,
								companyName:companyName,
								year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
								startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
								endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
							}
							BusCompany.busCompanyClear(0,BusCompany.searchBalanceData.busCompanyId,BusCompany.searchBalanceData.companyName,BusCompany.searchBalanceData.year,BusCompany.searchBalanceData.startMonth,BusCompany.searchBalanceData.endMonth);
						});
					   //保存按钮事件
						$("#" +"tab-"+ blanceTabId+"-content"+" .btn-busCompanyBlance-save").click(function(){
							BusCompany.saveBlanceData(pageNo,busCompanyId,companyName,year,startMonth,endMonth,0);
						});
						//对账明细按钮事件
						$("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-checkDetail").click(function(){
							BusCompany.searchCheckData={
									busCompanyId:busCompanyId,
									companyName:companyName,
									year:$(this).attr("data-entity-year"),
									month:$(this).attr("data-entity-month"),
							}
							BusCompany.busCompanyCheck(0,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month)
						});
					    //给操作记录按钮绑定事件
						$("#" +"tab-"+ blanceTabId+"-content"+" .btn-busCompany-record").click(function(){
							$.ajax({
								url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=listFcBusCompanySettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
								type:"POST",
								data:"busCompanyId="+busCompanyId,
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										if(data.financialBusCompanySettlementRecordList.length == 0){
											showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
										}else{
											var html =blanceRecords(data);
											var blanceRecordsTemplateLayer =layer.open({
												type: 1,
												title:"操作记录",
												skin: 'layui-layer-rim', //加上边框
												area: ['60%', '70%'], //宽高
												zIndex:1030,
												content: html,
												success: function(){
													 
												}
											})
										}
									}
								}
							});
						});
					}
				}
		   });
		},
		//保存对账数据
		saveCheckingData:function(pageNo,busCompanyId,companyName,year,month,isClose){
		    var JsonStr = [],
			    oldUnPayedMoney,
			    newUnPayedMoney,
			    oldRemark,
			    newRemark,
			    $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
		    $tr.each(function(i){
			    var flag = $(this).find(".busCompanyFinancial").is(":checked");
			    if(flag){
				    if($(this).attr("data-entity-isConfirmAccount") == 1){
					    //取值用于是否修改对账判断
					    oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
					    oldRemark = $(this).attr("data-entity-remark");
					    newUnPayedMoney = $tr.eq(i).find("input[name=FinancialbusCompanyRealUnPayedMoney]").val();
					    newRemark = $tr.eq(i).find("input[name=FinancialbusCompanyRemark]").val();
					    console.log(oldUnPayedMoney);
					    console.log(oldRemark);
					    //判断是否是修改对账
					    if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
						    var checkData = {
							    id:$(this).attr("data-entity-id"),
							    busCompanyId:busCompanyId,
							    companyName:companyName,
							    startTime:$tr.eq(i).find("td[name=startTime]").text(),
							    realUnPayedMoney:$tr.eq(i).find("input[name=FinancialbusCompanyRealUnPayedMoney]").val(),
							    remark:$tr.eq(i).find("input[name=FinancialbusCompanyRemark]").val(),
							    isConfirmAccount:1
						    }
						    JsonStr.push(checkData)
					    }
				    }else{
					    var checkData = {
						    id:$(this).attr("data-entity-id"),
						    busCompanyId:busCompanyId,
						    companyName:companyName,
						    startTime:$tr.eq(i).find("td[name=startTime]").text(),
						    realUnPayedMoney:$tr.eq(i).find("input[name=FinancialbusCompanyRealUnPayedMoney]").val(),
						    remark:$tr.eq(i).find("input[name=FinancialbusCompanyRemark]").val(),
						    isConfirmAccount:1
					    }
					    JsonStr.push(checkData)
				    }
			    }else{
				    if($(this).attr("data-entity-isConfirmAccount") == 1){
					    var checkData = {
						    id:$(this).attr("data-entity-id"),
						    busCompanyId:busCompanyId,
						    companyName:companyName,
						    startTime:$tr.eq(i).find("td[name=startTime]").text(),
						    realUnPayedMoney:$tr.eq(i).find("input[name=FinancialbusCompanyRealUnPayedMoney]").val(),
						    remark:$tr.eq(i).find("input[name=FinancialbusCompanyRemark]").val(),
						    isConfirmAccount:0
					    } 
					    JsonStr.push(checkData)
				    }
			    }
			});
		    if(JsonStr.length == 0){
				   showMessageDialog($( "#confirm-dialog-message" ),"请您勾选或修改想要对账的项目");
				   return
		    }else{
			    JsonStr = JSON.stringify(JsonStr);
				console.log(JsonStr);
			    $.ajax({
				    url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				    type:"POST",
				    data:"financialBusCompanyListStr="+encodeURIComponent(JsonStr),
				    dataType:"json",
				    beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
							BusCompany.edited["checking"] = "";
							if(isClose == 1){
								closeTab(checkTabId);
								BusCompany.listBusCompany(BusCompany.searchData.page,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
							} else{
								BusCompany.busCompanyCheck(pageNo,busCompanyId,companyName,year,month)
							}
						}
					}
			    });
		    }
		},
	    //保存结算数据
	    saveBlanceData : function(pageNo,busCompanyId,companyName,year,startMonth,endMonth,isClose){
			//console.log($obj+"-------");
			var DataArr = [],
			JsonData,
			$tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
			// 表单校验       
			//if (saveBtn.data('validata').form()) { return; }
			$tr.each(function(i){
				if($(this).data('blanceStatus')){
					console.log($(this).find(".btn-busCompanyBlance-save").attr("data-entity-id"));
					var blanceData = {
						id : $(this).find(".btn-busCompanyBlance-save").attr("data-entity-id"),
						busCompanyId:busCompanyId,
						year:$(this).find(".btn-busCompanyBlance-save").attr("data-entity-year"),
						month:$(this).find(".btn-busCompanyBlance-save").attr("data-entity-month"),
						realPayedMoney:$tr.eq(i).find("[name=blancerealrealPayedMoney]").text(),
						unPayedMoney:$tr.eq(i).find("[name=blanceunPayedMoney]").text(),
						realUnPayedMoney:$tr.eq(i).find("[name=blancerealrealUnPayedMoney]").text(),
						payMoney:$tr.eq(i).find("input[name=blancerealPayedMoney]").val(),
						payType:$tr.eq(i).find("select[name=blancePayType]").val(),
						remark:$tr.eq(i).find("input[name=blancerealRemark]").val()
					}
					DataArr.push(blanceData)
					JsonData = JSON.stringify(DataArr)
				}
			})
			console.log(JsonData);
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialBusCompany.do?method=saveFcBusCompanySettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				type:"POST",
				data:"fcBusCompanySettlementStr="+JsonData,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						BusCompany.edited["blance"] = "";
						if(isClose ==1){
							closeTab(blanceTabId);
							BusCompany.listBusCompany(BusCompany.searchData.page,BusCompany.searchData.busCompanyId,BusCompany.searchData.year,BusCompany.searchData.month);
						} else{
							BusCompany.busCompanyClear(pageNo,busCompanyId,companyName,year,startMonth,endMonth);
						}
					}
				}
			})
		},
		//显示单据
		viewImage:function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
			var data = {
				"images":[]
			};
			var str = $(obj).attr('url');
			var strs = str.split(",");
			for(var i = 0; i < strs.length; i ++) {
				var s = strs[i];
				if(s != null && s != "" && s.length > 0) {
					var image = {
						"WEB_IMG_URL_BIG":imgUrl+s,
						"WEB_IMG_URL_SMALL":imgUrl+s+"?imageView2/2/w/150",
					}
					data.images.push(image);
				}
			}
			var html = billImageTempLate(data);
			
			layer.open({
				type : 1,
				title : "单据图片",
				skin : 'layui-layer-rim', // 加上边框
				area : [ '500px', '540px' ], // 宽高
				zIndex : 1028,
				content : html,
				success : function() {
					var colorbox_params = {
						rel: 'colorbox',
						reposition:true,
						scalePhotos:true,
						scrolling:false,
						previous:'<i class="ace-icon fa fa-arrow-left"></i>',
						next:'<i class="ace-icon fa fa-arrow-right"></i>',
						close:'&times;',
						current:'{current} of {total}',
						maxWidth:'100%',
						maxHeight:'100%',
						onOpen:function(){ 
							$overflow = document.body.style.overflow;
							document.body.style.overflow = 'hidden';
						},
						onClosed:function(){
							document.body.style.overflow = $overflow;
						},
						onComplete:function(){
							$.colorbox.resize();
						}
					};
					$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
				}
			});
		},
		save : function(saveType){
			if(saveType == "checking"){
				BusCompany.saveCheckingData(BusCompany.searchCheckData.pageNo,BusCompany.searchCheckData.busCompanyId,BusCompany.searchCheckData.companyName,BusCompany.searchCheckData.year,BusCompany.searchCheckData.month,1);
			} else if(saveType == "blance"){
				BusCompany.saveBlanceData(BusCompany.searchBalanceData.pageNo,BusCompany.searchBalanceData.busCompanyId,BusCompany.searchBalanceData.companyName,BusCompany.searchBalanceData.year,BusCompany.searchBalanceData.startMonth,BusCompany.searchBalanceData.endMonth,1);
			}
		},
		clearEdit : function(clearType){
			BusCompany.edited[clearType] = "";
		}
	}
	exports.listBusCompany = BusCompany.listBusCompany;
	exports.isEdited = BusCompany.isEdited;
	exports.save = BusCompany.save;
	exports.clearEdit = BusCompany.clearEdit;
});
