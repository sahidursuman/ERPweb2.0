define(function(require,exports){
	var menuKey = "financial_innerTransfer_in",
		rule = require("./innerTransferInRule"),
	    listTemplate = require("./view/list"),
	    checkTemplate = require("./view/innerTransferInChecking"),
	    settlementTemplate = require("./view/innerTransferInClearing"),
	    recordTemplate = require("./view/innerTransferInRecord"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = []
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    };
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    };
	var InnerTransferIn = {
			searchData:{
		    	"fromBusinessGroupId":"",
		    	"year":"",
		    	"month":""
		    },
		    searchCheckData:{
		    	"fromBusinessGroupId":"",
		    	"fromBusinessGroupName":"",
		    	"year":"",
		    	"month":""
		    },
		    searchBalanceData:{
		    	"fromBusinessGroupId":"",
		        "fromBusinessGroupName":"",
		    	"year":"",
		    	"startMonth":"",
		    	"endMonth":""
		    },//back/financial/financialHotel.do
		    edited:false,
	        blanceEdited:false,
	        oldBlanceFromBusinessGroupId:0,
	        oldCheckId:0,
	        edited : {},
	        isEdited : function(editedType){
			if(!!InnerTransferIn.edited[editedType] && InnerTransferIn.edited[editedType] != ""){
				return true;
			}
				return false;
			},
			/**
			 * @param  {获取内转账务的列表}
			 * @param  {}
			 * @param  {[type]}
			 * @param  {[type]}
			 * @return {[type]}
			 */
			listInnerTransferIn:function(pageNo,fromBusinessGroupId,year,month){
				$.ajax({
					url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=listFinancialInnerTransferIn&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"pageNo="+pageNo+"&fromBusinessGroupId="+fromBusinessGroupId+"&year="+year+"&month="+month+"&sortType=auto",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
						
						InnerTransferIn.searchData={
					    	"fromBusinessGroupId":fromBusinessGroupId,
					    	"year":year,
					    	"month":month
			    		}
						data.searchParam = InnerTransferIn.searchData;
			    		data.yearList = yearList;


						data.monthList = monthList;
						var html = listTemplate(data);
						addTab(menuKey,"内转转入",html);
						//给搜索按钮绑定事件
						//var $tabId = $();
						var $tabId = $("#"+tabId);
						//搜索按钮事件
						$tabId.find(".btn-innerTransferIn-search").click(function(){
						InnerTransferIn.searchData={
					    	"fromBusinessGroupId":$tabId.find("select[name=fromBusinessGroupId]").val(),
					    	"year":$tabId.find("select[name=year]").val(),
					    	"month":$tabId.find("select[name=month]").val()
		    			}
			    		InnerTransferIn.listInnerTransferIn(0,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);
						});
						//分页--首页按钮事件
                        $tabId.find(".first").click(function(){

			    		InnerTransferIn.listInnerTransferIn(0,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);

                        });
                        //分页--上一页事件
                        $tabId.find(".previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
			    		InnerTransferIn.listInnerTransferIn(previous,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);

                        });
                        //分页--下一页事件
                        $tabId.find(".next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
			    		InnerTransferIn.listInnerTransferIn(next,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);
                        });
                        //分页--尾页事件
                        $tabId.find(".last").click(function(){
			    		InnerTransferIn.listInnerTransferIn(data.totalPage == 0 ? data.totalPage : data.totalPage-1,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);

                        });
                        //对账事件
                        $tabId.find(".btn-innerTransferIn-check").click(function(){
                        	InnerTransferIn.searchCheckData = {
						    	"fromBusinessGroupId":$(this).attr("data-entity-id"),
						    	"fromBusinessGroupName":$(this).attr("data-entity-fromBusinessGroupName"),
						    	"year":$(this).attr("data-entity-year"),
						    	"month":$(this).attr("data-entity-month")
		    				};
		    				InnerTransferIn.InnerTransferInCheck(0,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)
                        });
                        //结算事件
                        $tabId.find(".btn-innerTransferIn-balance").click(function(){
                        	InnerTransferIn.searchBalanceData = {
						    	"fromBusinessGroupId":$(this).attr("data-entity-id"),
						    	"fromBusinessGroupName":$(this).attr("data-entity-fromBusinessGroupName"),
						    	"year":$(this).attr("data-entity-year"),
						    	"startMonth":$(this).attr("data-entity-startmonth"),
						    	"endMonth":$(this).attr("data-entity-endmonth"),

		    				};
		    				
		    				InnerTransferIn.InnerTransferInBalance(0,InnerTransferIn.searchBalanceData.fromBusinessGroupId,InnerTransferIn.searchBalanceData.fromBusinessGroupName,InnerTransferIn.searchBalanceData.year,InnerTransferIn.searchBalanceData.startMonth,InnerTransferIn.searchBalanceData.endMonth);
                        });
						}
					}
				});
			},
			InnerTransferInCheck:function(pageNo,fromBusinessGroupId,fromBusinessGroupName,year,month){
				$.ajax({
					url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=listFinancialInnerTransferInChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"pageNo="+pageNo+"&fromBusinessGroupId="+fromBusinessGroupId+"&year="+year+"&month="+month+"&sortType=auto",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
						
						InnerTransferIn.searchCheckData = {
					    	"fromBusinessGroupId":fromBusinessGroupId,
					    	"fromBusinessGroupName":fromBusinessGroupName,
					    	"year":year,
					    	"month":month
					    };

					    data.yearList = yearList;
					    data.monthList = monthList;
					    data.searchParam = InnerTransferIn.searchCheckData;
					    var html = checkTemplate(data)
					    var $checkId = $("#" +"tab-"+checkTabId+"-content");
					    
					    var validator;// #tab-financial_innerTransfer_in-checking-content
					    				// #tab-financial_innerTransfer_in-checking-content  
					    
					   
						//判断页面是否存在
						if($("#" +"tab-"+checkTabId+"-content").length > 0) {	
							if(!!InnerTransferIn.edited["checking"] && InnerTransferIn.edited["checking"] != ""){
								addTab(checkTabId,"内转转入对账");
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									validator = rule.check($('.innerTransferChecking'));
									if (!validator.form()) { return; }
									InnerTransferIn.saveCheckingData(0)
									InnerTransferIn.edited["checking"] = "";
									addTab(checkTabId,"内转转入对账",html);
									validator = rule.check($('.innerTransferChecking'));
								 },function(){
									addTab(checkTabId,"内转转入对账",html);
									InnerTransferIn.edited["checking"] = "";
									validator = rule.check($('.innerTransferChecking'));
								 });
							}else{
								addTab(checkTabId,"内转转入对账",html);
								validator = rule.check($('.innerTransferChecking'));
							}
						}else{
							addTab(checkTabId,"内转转入对账",html);
							validator = rule.check($('.innerTransferChecking .all'));
						}
					    $("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
							oldCheckId = fromBusinessGroupId;
							InnerTransferIn.edited["checking"] = "checking";  
						});
						var $checkId = $("#" +"tab-"+checkTabId+"-content");
						//计算实际未收
						
						$checkId.find("input[name=UnIncomeMoney]").keyup(function  () {
							var unIncome = $(this).val();
							var backMoney = $(this).parent().next().find("input[name=backMoney]").val();
							var realUnIncome = unIncome - backMoney;
							$(this).parent().next().next().find("input[name=realUnIncomeMoney]").val(realUnIncome)
						});
						$checkId.find("input[name=backMoney]").keyup(function(){
							var unIncome = $(this).parent().prev().find("input[name=UnIncomeMoney]").val();
							var backMoney = $(this).val();
							var realUnIncome = unIncome - backMoney;
							$(this).parent().next().find("input[name=realUnIncomeMoney]").val(realUnIncome);
						});
						//分页--首页按钮事件
                        $checkId.find(".first").click(function(){

		    				InnerTransferIn.InnerTransferInCheck(0,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)

                        });
                        //分页--上一页事件
                        $checkId.find(".previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
		    				InnerTransferIn.InnerTransferInCheck(previous,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)

                        });
                        //分页--下一页事件
                        $checkId.find(".next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
		    				InnerTransferIn.InnerTransferInCheck(next,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)
                        });
                        //分页--尾页事件
                        $checkId.find(".last").click(function(){
		    				InnerTransferIn.InnerTransferInCheck(data.totalPage == 0 ? data.totalPage : data.totalPage-1,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)

                        });
						//搜索事件
						$checkId.find(".btn-checking-search").click(function(){
							InnerTransferIn.searchCheckData = {
						    	"fromBusinessGroupId":fromBusinessGroupId,
						    	"fromBusinessGroupName":fromBusinessGroupName,
						    	"year":$checkId.find("select[name=year]").val(),
						    	"month":$checkId.find("select[name=month]").val()
					    	};
		    				InnerTransferIn.InnerTransferInCheck(0,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)

						});
						//导出事件
						$checkId.find(".btn-transferExport").click(function(){

							var year=$checkId.find("select[name=year]").val();
	                      	var month=$checkId.find("select[name=month]").val();
	                      	checkLogin(function(){
	                        	var url = ""+APP_ROOT+"back/export.do?method=exportInnerTransferIn&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&fromBusinessGroupId="+fromBusinessGroupId+"&fromBusinessGroupName="+fromBusinessGroupName+"&year="+year+"&month="+month+"&sortType=auto";
	                        	exportXLS(url)
	                        });

						});
						//全选事件
						$checkId.find(" .innerTransferIn-selectAll").click(function(){
							var flag = this.checked;
							$checkId.find(" .all tbody tr").each(function(){
								var checkedbox = $(this).find(".innerTransferFinancial")
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
						//复选框事件
						$checkId.find(".innerTransferFinancial").click(function(){
							var flag = true
							$checkId.find(" .innerTransferFinancial").each(function(){
								if(!$(this).prop("checked")){
									flag = false;
								} 
							})
							$checkId.find(" .innerTransferIn-selectAll").prop("checked",flag)
						});
						//展开事件
	                     $checkId.find(".seeGroup").click(function(){
	                    	var tr = $(this).parent().parent().next();
	                    	if($(this).text()=="展开"){
	                    		$(this).text("收起");
	                    	}else{$(this).text("展开");}
	                     	if(tr.hasClass("hide")){
									$(this).find("i").removeClass("fa-chevron-up");
									$(this).find("i").addClass("fa-chevron-down");
									tr.removeClass("hide");
								}
								else{
									$(this).find("i").removeClass("fa-chevron-down");
									$(this).find("i").addClass("fa-chevron-up");
									tr.addClass("hide");
								}
	                        });
	                    //确认对账事件
	                    $checkId.find(".btn-transferFinancial-checking").click(function  () {
	                    	// body...
	                    	if (!validator.form()) { return; }
	                    	InnerTransferIn.saveCheckingData(0)
	                    });
	                    //取消按钮事件
						$checkId.find(".btn-transferFinancial-close").click(function(){
							showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
								closeTab(checkTabId);
								InnerTransferIn.edited["checking"] = "";
							});
						});

						}
					}
				});
			},
			//结算处理
			InnerTransferInBalance:function(pageNo,fromBusinessGroupId,fromBusinessGroupName,year,startMonth,endMonth){
				$.ajax({
					 url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=listFinancialInnerTransferInSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					 type:"POST",
	                 data:"pageNo="+pageNo+"&fromBusinessGroupId="+fromBusinessGroupId+"&year="+year+"&start_month="+startMonth+"&end_month="+endMonth+"&sortType=auto",
					 dataType:"json",
					 beforeSend:function(){
						 globalLoadingLayer = openLoadingLayer();
					 },
					 success:function(data){
						
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						 if(result){
						 	InnerTransferIn.searchBalanceData = {
						    	"fromBusinessGroupId":fromBusinessGroupId,
						        "fromBusinessGroupName":fromBusinessGroupName,
						    	"year":year,
						    	"startMonth":startMonth,
						    	"endMonth":endMonth
						    };

						 	data.yearList = yearList;
		                    data.monthList = monthList;
		                    data.searchParam = InnerTransferIn.searchBalanceData;
	                        var html = settlementTemplate(data);
                            if($("#" +"tab-"+blanceTabId+"-content").length > 0)
	             	    	{
	             	    	 if(!!InnerTransferIn.edited["blance"] && InnerTransferIn.edited["blance"] != ""){
	             	    		addTab(blanceTabId,"内转转入结算");
			                    
	             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	             	    			 InnerTransferIn.validatorTable()
	             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transferBlance-save")
	             	    			 if (!$(saveBtn).data('validata').form()) { return; }
	             	    			 InnerTransferIn.saveBlanceData(0);
				            		 InnerTransferIn.edited["blance"] = "";
				            		 addTab(blanceTabId,"内转转入结算",html);
				            		 InnerTransferIn.validatorTable();
				            	 },function(){
				            		    addTab(blanceTabId,"内转转入结算",html);
				            		    InnerTransferIn.edited["blance"] = "";
				            		    InnerTransferIn.validatorTable();
				            	 });
	             	    	 }else{
	                 	    	addTab(blanceTabId,"内转转入结算",html);
	                 	    	InnerTransferIn.validatorTable();
	             	    	 }
	             	    }else{
	             	    	addTab(blanceTabId,"内转转入结算",html);
	             	    	InnerTransferIn.validatorTable();
	             	    };
	             	    var $settleId = $("#" +"tab-"+blanceTabId+"-content");
	             	   	$settleId.find(".all").on('change', 'input, select', function() {
	             		   	InnerTransferIn.edited["blance"] = "blance";
	             		   //	InnerTransferIn.oldBlancePartnerAgencyId = fromBusinessGroupId;
	    	    			$(this).closest('tr').data('blanceStatus',true);
	    	    		});
	    	    		//搜索事件
	    	    		$settleId.find(".btn-blance-search").click(function(){

	    	    			InnerTransferIn.searchBalanceData = {
						    	"fromBusinessGroupId":fromBusinessGroupId,
						        "fromBusinessGroupName":fromBusinessGroupName,
						    	"year":$settleId.find("select[name=year]").val(),
						    	"startMonth":$settleId.find("select[name=startMonth]").val(),
						    	"endMonth":$settleId.find("select[name=endMonth]").val()
						    };
						    console.log(InnerTransferIn.searchBalanceData);
						    InnerTransferIn.InnerTransferInBalance(0,InnerTransferIn.searchBalanceData.fromBusinessGroupId,InnerTransferIn.searchBalanceData.fromBusinessGroupName,InnerTransferIn.searchBalanceData.year,InnerTransferIn.searchBalanceData.startMonth,InnerTransferIn.searchBalanceData.endMonth);
	    	    		});
						//保存结算事件
						$settleId.find(".btn-transferBlance-save").click(function(){
							if (!$(this).data('validata').form()) { return; }
							InnerTransferIn.saveBlanceData(0);
						});
						//对账明细按钮
						$settleId.find(".btn-restaurantBlance-checkDetail").click(function(){
							InnerTransferIn.searchCheckData = {
						    	"fromBusinessGroupId":fromBusinessGroupId,
						    	"fromBusinessGroupName":fromBusinessGroupName,
						    	"year":$(this).attr("data-entity-year"),
						    	"month":$(this).attr("data-entity-month")
					    	};
					    	
		    				InnerTransferIn.InnerTransferInCheck(0,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)

						});
						//操作记录按钮事件
						$settleId.find(".btn-transfer-record").click(function(){
							$.ajax({
                        		url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=listFinancialInnerTransferInSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"fromBusinessGroupId="+fromBusinessGroupId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialInnerTransferInSettlementRecordList.length == 0){
                                			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                                		}else{
                                			var html =recordTemplate(data);
            					    		var blanceRecordsTemplateLayer =layer.open({
            					    			type: 1,
            								    title:"操作记录",
            								    skin: 'layui-layer-rim', //加上边框
            								    area: ['60%', '70%'], //宽高
            								    zIndex:1030,
            								    content: html,
            								    success: function(){}
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
			//给每个tr增加验证
		    validatorTable:function(){
		    	//获取table中的tr
	            var $tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
	            //给每个tr添加表单验证
	            $tr.each(function(){
	            	$(this).find('.btn-transferBlance-save').data('validata', rule.check($(this)));
	            });	
		    },
			saveCheckingData : function(isClose){
		    	var JsonStr = [],
	                oldUnIncome,
	                oldBack,
	                oldRemark,
	                newUnIncome,
	                newBack,
	                newRemark,
	                selectFlag = 0,
					$tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
	    		$tr.each(function(i){
		 		   var flag = $(this).find(".innerTransferFinancial").is(":checked");
		 		   
				   var oldUnIncome = $(this).attr("data-entity-UnIncomeMoney"),
	   			   oldBack = $(this).attr("data-entity-backMoney"),
				   oldRemark = $(this).attr("data-entity-remark"),
				   newUnIncome = $tr.eq(i).find("input[name=UnIncomeMoney]").val(),
				   newBack = $tr.eq(i).find("input[name=backMoney]").val(),
				   newRemark = $tr.eq(i).find("input[name=checkRemark]").val(),
				   realUnIncomeMoney = $tr.eq(i).find("input[name=realUnIncomeMoney]").val(); 
				   
				   if(flag){
					   if($(this).attr("data-entity-isComfirmAccount") == 1){
	    				   //判断是否是修改对账
	    				   if(oldUnIncome !== newUnIncome || oldBack !== newBack || oldRemark != newRemark){
	    					   var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   checkUnIncomeMoney:newUnIncome,
	    		 					   backMoney:newBack,
	    		 					   checkRemark:newRemark,
	    		 					   realUnIncomeMoney:realUnIncomeMoney,
	    		 					   isComfirmAccount:1
			     			   }
	    					   JsonStr.push(checkData)
	    				   }
	    			   }else{ 
	    			   		var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   checkUnIncomeMoney:newUnIncome,
	    		 					   backMoney:newBack,
	    		 					   checkRemark:newRemark,
	    		 					   realUnIncomeMoney:realUnIncomeMoney,
	    		 					   isComfirmAccount:1
			     			   }
					   JsonStr.push(checkData)}
		 		   }else{
		 			   if($(this).attr("data-entity-isComfirmAccount") == 1){
		 				   var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   checkUnIncomeMoney:newUnIncome,
	    		 					   backMoney:newBack,
	    		 					   checkRemark:newRemark,
	    		 					   realUnIncomeMoney:realUnIncomeMoney,
	    		 					   isComfirmAccount:0
			     			   }
		 				   JsonStr.push(checkData)
		 			   }
		 		   }

			    });
				
		 	   //判断用户是否操作
			 	   if(JsonStr.length == 0){
			 		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
			 		   return
			 	   }else{
			 		   JsonStr = JSON.stringify(JsonStr);
			     	   $.ajax({
			     		    url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=updateFinancialInnerTransferInChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
			                type:"POST",
			                data:"financialInnerTransferInStr="+encodeURIComponent(JsonStr),
			                dataType:"json",
			                beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message);

									InnerTransferIn.edited["checking"] = "";
									if(isClose == 1){
										closeTab(checkTabId);
										InnerTransferIn.listInnerTransferIn(0,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);									
									} else {
				    					InnerTransferIn.InnerTransferInCheck(0,InnerTransferIn.searchCheckData.fromBusinessGroupId,InnerTransferIn.searchCheckData.fromBusinessGroupName,InnerTransferIn.searchCheckData.year,InnerTransferIn.searchCheckData.month)
									}
								}
							}
			     	   });
			 	   }
	    	},
	    	saveBlanceData : function(isClose){
	    		var $tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
    		    var id; 
        		var incomeMoney;
        		var incomeType;
        		var remark;

	    		$tr.each(function(i){
	          		if($(this).data('blanceStatus')){
	          			id = $(this).attr("data-entity-id");
	          			incomeMoney =  $tr.eq(i).find("input[name=blancerealIncomeMoney]").val();
	          			incomeType =  $tr.eq(i).find("select[name=blancePayType]").val();
	          			remark =  $tr.eq(i).find("input[name=blancerealRemark]").val();
	          		}
          		});
          		console.log(incomeMoney);
          		
          		$.ajax({
          			url:""+APP_ROOT+"back/financialInnerTransferIn.do?method=saveFinancialInnerTransferInSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
	                type:"POST",
	                data:"id="+id+"&incomeMoney="+incomeMoney+"&payType="+incomeType+"&remark="+remark,
	                dataType:"json",
	                beforeSend:function(){
	                    globalLoadingLayer = openLoadingLayer();
	                },
	                success:function(data){
	                	layer.close(globalLoadingLayer);
	                    var result = showDialog(data);
	                    if(result){
	                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
	                    	InnerTransferIn.edited["blance"] = "";
							if(isClose == 1){
								closeTab(clearTabId);
								InnerTransferIn.listInnerTransferIn(0,InnerTransferIn.searchData.fromBusinessGroupId,InnerTransferIn.searchData.year,InnerTransferIn.searchData.month);
							} else {
						    	InnerTransferIn.InnerTransferInBalance(0,InnerTransferIn.searchBalanceData.fromBusinessGroupId,InnerTransferIn.searchBalanceData.fromBusinessGroupName,InnerTransferIn.searchBalanceData.year,InnerTransferIn.searchBalanceData.startMonth,InnerTransferIn.searchBalanceData.endMonth);
							}
	                    }
	                }
          		});


	    	},
			save : function(saveType){
				if(saveType == "checking"){
					
					InnerTransferIn.saveCheckingData(1)
				} else if(saveType == "blance"){
					InnerTransferIn.saveBlanceData(1);
				}
			},
			clearEdit : function(clearType){
				InnerTransferIn.edited[clearType] = "";
			}
	}
	exports.isEdited = InnerTransferIn.isEdited;
	exports.save = InnerTransferIn.save;
	exports.clearEdit = InnerTransferIn.clearEdit;
	exports.listInnerTransferIn = InnerTransferIn.listInnerTransferIn;
})