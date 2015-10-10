define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_transfer",
	    listTemplate = require("./view/list"),
	    transferChecking = require("./view/transferChecking"),
	    transferClearing = require("./view/transferClearing"),
	    blanceRecords = require("./view/transferRecords"),
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
	    }
    var Transfer = {
    	searchData:{
	        "partnerAgencyId":"",
	        "year":"",
	        "month":""
        },
        searchCheckData:{
	        "partnerAgencyId":"",
	        "partnerAgencyName":"",
	        "year":"",
	        "month":""
        },
        searchBalanceData:{
	        "partnerAgencyId":"",
	        "partnerAgencyName":"",
	        "year":"",
	        "startMonth":"",
	        "endMonth":""
        },//back/ticket.do?method=listTicket back/financial/financialTransfer.do?method=listSumFcTransfer
        edited : false,
        listTransfer:function(page,partnerAgencyId,year,month){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listSumFcTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&month="+month+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	Transfer.searchData={
                    	    partnerAgencyId:partnerAgencyId,
                    	    year:year,
                    	    month:month
                        },
                        data.partnerAgencyListNew = JSON.parse(data.partnerAgencyListNew);
                    	data.searchParam = Transfer.searchData
                        data.yearList = yearList;
                        data.monthList = monthList;
                        var html = listTemplate(data);
                        addTab(menuKey,"转客账务",html);
                      //搜索按钮事件
                        $("#" + tabId + " .btn-transfer-search").click(function(){
                        	Transfer.searchData={
                            	    partnerAgencyId:$("#" + tabId + " select[name=partnerAgencyId]").val(),
                            	    year:$("#" + tabId + "  select[name=year]").val(),
                            	    month:$("#" + tabId + " select[name=month]").val()
                            },
                            Transfer.listTransfer(0,Transfer.searchData.partnerAgencyId,Transfer.searchData.year,Transfer.searchData.month);
                        });
                        //分页--首页按钮事件
                        $("#" + tabId + " .pageMode a.first").click(function(){
                        	Transfer.listTransfer(0,Transfer.searchData.partnerAgencyId,Transfer.searchData.year,Transfer.searchData.month);
                        });
                        //分页--上一页事件
                        $("#" + tabId + " .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            Transfer.listTransfer(previous,Transfer.searchData.partnerAgencyId,Transfer.searchData.year,Transfer.searchData.month);
                        });
                        //分页--下一页事件
                        $("#" + tabId + " .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            Transfer.listTransfer(next,Transfer.searchData.partnerAgencyId,Transfer.searchData.year,Transfer.searchData.month);
                        });
                        //分页--尾页事件
                        $("#" + tabId + " .pageMode a.last").click(function(){
                        	 Transfer.listTransfer(data.totalPage == 0 ? data.totalPage:data.totalPage-1,Transfer.searchData.partnerAgencyId,Transfer.searchData.year,Transfer.searchData.month);
                        });
                        //给对账按钮绑定事件
                        $("#" + tabId + " .btn-transfer-check").click(function(){
                        	Transfer.searchCheckData={
                        			partnerAgencyId:$(this).attr("data-entity-id"),
                        			partnerAgencyName:$(this).attr("data-entity-partnerAgencyName"),
                            		year:$(this).attr("data-entity-year"),
                            		month:$(this).attr("data-entity-month")        
                            }
                        	Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
                        });
                        //给结算按钮绑定事件
                        $("#" + tabId + "  .btn-transfer-balance").click(function(){
                            Transfer.searchBalanceData={
                                	partnerAgencyId:$(this).attr("data-entity-id"),
                                	partnerAgencyName:$(this).attr("data-entity-partnerAgencyName"),
                                	year:$(this).attr("data-entity-year"),
                                	startMonth:$(this).attr("data-entity-startMonth"),
                                	endMonth:$(this).attr("data-entity-endMonth")
                                }
                            Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
                        });
                    }

                }

            });
        },
        //转客帐务对账处理
        transferCheckList:function(pageNo,partnerAgencyId,partnerAgencyName,year,month){
	    	 $.ajax({
	    		 url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	             type:"POST",
	             data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&month="+month+"&sortType=auto",
	             dataType:"json",
	             beforeSend:function(){
	                 globalLoadingLayer = openLoadingLayer();
	             },
	             success:function(data){
	            	//表单验证
	            	var $obj = $(".transferChecking .form-horizontal");
	                layer.close(globalLoadingLayer);
	                var result = showDialog(data);
	                 if(result){
 	                	   for(var i=0;i<data.financialTransferList.length;i++){
	                		   data.financialTransferList[i].touristGroupMemberList = JSON.parse(data.financialTransferList[i].touristGroupMemberList)
	                		   console.log(data.financialTransferList[i].touristGroupMemberList);
 	                	   }
	                 	    Transfer.searchCheckData={
		                 	    partnerAgencyId:partnerAgencyId,
		                 	    partnerAgencyName:partnerAgencyName,
	                       		year:year,
	                       		month:month        
                           }
	                 	    
		                    data.yearList = yearList
		                    data.monthList = monthList
		                    data.transferPartnerAgencyName = partnerAgencyName
		                    data.searchParam = Transfer.searchCheckData 
		                    console.log(data);
	                        var html = transferChecking(data);
	                        var validator;
	                 	    //判断页面是否存在
	                 	    if($("#tab-"+checkTabId+"-content").length > 0) {
	                 	    	if(Transfer.edited){
	                 	    		addTab(checkTabId,"转客对账");
	                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	                 	    			 validator = rule.check($('.transferChecking'));
					            		 if (!validator.form()) { 
					            			 return; 
					            		 }
					            		 Transfer.saveCheckingData(pageNo,partnerAgencyId,partnerAgencyName,year,month);
					            		 Transfer.edited = false;
					            		 addTab(checkTabId,"转客对账",html);
					            		 validator = rule.check($('.transferChecking'));
					            	 },function(){
					            		 addTab(checkTabId,"转客对账",html);
					            		 validator = rule.check($('.transferChecking'));
					            	 });
	                 	    	 }else{
	                 	    		addTab(checkTabId,"转客对账",html);
		                 	        validator = rule.check($('.transferChecking'));
	                 	    	 }
	             	    		 
	                 	    }else{
	                 	    	addTab(checkTabId,"转客对账",html);
	                 	    	validator = rule.check($('.transferChecking'));
	                 	    	
	                 	    };
	                 	   $("#tab-"+checkTabId+"-content .all").on("change",function(){
                	    		Transfer.edited = true; 
                	    	});
	                 	//展开事件
		                     $("#" +"tab-"+ checkTabId+"-content"+" .seeGroup").click(function(){
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
		                        })
			                 //给搜索按钮绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
		                         Transfer.searchCheckData={
		                            partnerAgencyId:partnerAgencyId,
		                            partnerAgencyName:partnerAgencyName,
		                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
		                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
		                         }
		                         Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
		                     });
		                     //导出事件btn-transferExport
		                     $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferExport").click(function(){
			                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
		                      	 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
		                      	 checkLogin(function(){
		                         	var url = ""+APP_ROOT+"back/export.do?method=transPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&partnerAgencyId="+partnerAgencyId+"&partnerAgencyName="+partnerAgencyName+"&year="+year+"&month="+month+"&sortType=auto";
		                         	exportXLS(url)
		                         });
			                 });
		                    //分页--首页按钮事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
			                	 Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
			                 });
							//分页--上一页事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
								var previous = data.pageNo - 1;
								if(data.pageNo == 0){
									previous = 0;
								}
								Transfer.transferCheckList(previous,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
			                 });
							//分页--下一页事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
								var next =  data.pageNo + 1;
								if(data.pageNo == data.totalPage-1){
									next = data.pageNo ;
								}
								Transfer.transferCheckList(next,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
			                 });
							//分页--尾页事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
			                	Transfer.transferCheckList(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
			                 });
				             //给全选绑定事件
				                 $("#" +"tab-"+ checkTabId+"-content"+" .transfer-selectAll").click(function(){
				                	 var flag = this.checked;
				                	 $(".transferChecking .all tbody tr").each(function(){
				                		 var checkedbox = $(this).find(".transferFinancial")
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
				                 $("#" +"tab-"+ checkTabId+"-content"+" .transferFinancial").click(function(){
				                	 var flag = true
				                	 $("#" +"tab-"+ checkTabId+"-content"+" .transferFinancial").each(function(){
				                		 if(!$(this).prop("checked")){
					                			flag = false;
					                		} 
				                	 })
				                	 $("#" +"tab-"+ checkTabId+"-content"+" .transfer-selectAll").prop("checked",flag)
				                 });
				                 //给确认对账按钮绑定事件
				                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferFinancial-checking").click(function(){
				                	 // 表单校验
				                	 if (!validator.form()) { return; } 
				                	 Transfer.saveCheckingData(pageNo,partnerAgencyId,partnerAgencyName,year,month);
			                      })
					             //取消按钮事件
					             $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferFinancial-close").click(function(){
					            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
					            		 closeTab(checkTabId)
					            	 });
					             });
	                     }    
		                 
	             }
	    	 });
	    },
       //转客帐务结算处理
        transferBalanceList:function(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth){
	    	$.ajax({
                url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransferSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                   layer.close(globalLoadingLayer);
                   var result = showDialog(data);
                    if(result){
	                    data.yearList = yearList
	                    data.monthList = monthList
	                    data.partnerAgencyName = partnerAgencyName
                        var html = transferClearing(data);
	                    var validator;
                 	    //判断页面是否存在
	                    addTab(blanceTabId,"转客结算",html);
	                  //获取table中的tr
	                    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
	                    //给每个tr添加表单验证
                        $tr.each(function(){
                        	$(this).find('.btn-transferBlance-save').data('validata', rule.check($(this)));
                        });
                 	    /*if($("#tab-"+blanceTabId+"-content").length > 0) {
                 	    	if(Transfer.edited){
                 	    		addTab(blanceTabId,"转客结算");
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.check($('.transferCleaning'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 Transfer.saveClearingData(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth,$("#tab-"+blanceTabId+"-content .btn-transferBlance-save"));
				            		 Transfer.edited = false;
				            		 addTab(blanceTabId,"转客结算",html);
				            		 validator = rule.check($('.transferCleaning'));
				            	 },function(){
				            		 addTab(blanceTabId,"转客结算",html);
				            		 validator = rule.check($('.transferCleaning'));
				            	 });
                 	    	 }else{
                 	    		addTab(blanceTabId,"转客结算",html);
	                 	        validator = rule.check($('.transferCleaning'));
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(blanceTabId,"转客结算",html);
                 	    	validator = rule.check($('.transferCleaning'));
                 	    	$("#tab-"+blanceTabId+"-content").on("change",function(){
                 	    		Transfer.edited = true; 
                 	    	});
                 	    };*/
                        
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                            Transfer.searchBalanceData={
                                partnerAgencyId:partnerAgencyId,
                                partnerAgencyName:partnerAgencyName,
                            	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                            	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                            	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
                        });
                       //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transferBlance-save").click(function(){
                        	// 表单校验
                        	if (!$(this).data('validata').form()) { return; }
                        	Transfer.saveClearingData(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth,this);
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-checkDetail").click(function(){
                        	
                        	Transfer.searchCheckData={
    		                 	    partnerAgencyId:partnerAgencyId,
    		                 	    partnerAgencyName:partnerAgencyName,
    	                       		year:$(this).attr("data-entity-year"),
    	                       		month:$(this).attr("data-entity-month")        
                               }
                        	Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
                        });
                        

                      //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transfer-record").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransferSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"partnerAgencyId="+partnerAgencyId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialTransferSettlementRecordList.length == 0){
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
                      /*
                       * 结算没有分页，需求变动的话，保险起见先注释
                       * //分页--首页按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.first").click(function(){
							Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
						});
						//分页--上一页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
						});
						//分页--下一页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
						});
						//分页--尾页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.last").click(function(){
							Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
						});*/
                        
                        
                        //给结算按钮绑定事件
						
                    }
                }
           });
	    },
	    saveCheckingData : function(pageNo,partnerAgencyId,partnerAgencyName,year,month){
	    	var JsonStr = [],
                oldUnPayedMoney,
                newUnPayedMoney,
                oldRemark,
                newRemark,
        	$tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
    		$tr.each(function(i){
	 		   var flag = $(this).find(".transferFinancial").is(":checked");
	 		   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialTransferRealUnPayedMoney]").val();
			   newRemark = $tr.eq(i).find("input[name=FinancialTransferRemark]").val();
			   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
			   oldRemark = $(this).attr("data-entity-remark");
			   if(flag){
				   if($(this).attr("data-entity-isConfirmAccount") == 1){
    				   //判断是否是修改对账
    				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
    					   var checkData = {
    		 					   id:$(this).attr("data-entity-id"),
    		 					   partnerAgencyId:partnerAgencyId,
    		 					   partnerAgencyName:partnerAgencyName,
    		 					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
    		 					   transRealUnPayedMoney:newUnPayedMoney,
    		 					   transRemark:newRemark,
    		 					   isConfirmAccount:1
    		     			   }
    					   JsonStr.push(checkData)
    				   }
    			   }else{ var checkData = {
	 					   id:$(this).attr("data-entity-id"),
	 					   partnerAgencyId:partnerAgencyId,
	 					   partnerAgencyName:partnerAgencyName,
	 					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
	 					   transRealUnPayedMoney:newUnPayedMoney,
	 					   transRemark:newRemark,
	 					   isConfirmAccount:1
	     			   }
				   JsonStr.push(checkData)}
	 		   }else{
	 			   if($(this).attr("data-entity-isConfirmAccount") == 1){
	 				   var checkData = {
     					   id:$(this).attr("data-entity-id"),
     					   partnerAgencyId:partnerAgencyId,
     					   partnerAgencyName:partnerAgencyName,
     					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
     					   transRealUnPayedMoney:newUnPayedMoney,
     					   transRemark:newRemark,
     					   isConfirmAccount:0
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
	     		    url:""+APP_ROOT+"back/financial/financialTransfer.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
	                type:"POST",
	                data:"financialTransferListStr="+encodeURIComponent(JsonStr),
	                dataType:"json",
	                beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
							Transfer.edited = false;
		                	Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
						}
					}
	     	   });
	 	   }
	    },
	    saveClearingData : function(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth,obj){
	    	var tr = $(obj).parent().parent(),
	    	    DataArr = [],
	    		JsonData,
	    		needPayMoney = tr.find("input[name=blancerealPayedMoney]").val();
	    	//判断是否填写付款/收款金额 
	    	if(needPayMoney == null || needPayMoney == ""){
	    		showMessageDialog($( "#confirm-dialog-message" ),"请输入付款金额");
	    		return;
	    	}else{
	    		var blanceData = {
            		id:$(obj).attr("data-entity-id"),
                    partnerAgencyId:partnerAgencyId,
                    year:$(obj).attr("data-entity-year"),
                    month:$(obj).attr("data-entity-month"),
                    realPayedMoney:tr.find("td[name=blancerealrealPayedMoney]").text(),
                    unPayedMoney:tr.find("td[name=blanceunPayedMoney]").text(),
                    realUnPayedMoney:tr.find("td[name=blancerealrealUnPayedMoney]").text(),
                    payMoney:tr.find("input[name=blancerealPayedMoney]").val(),
                    payType:tr.find("select[name=blancePayType]").val(),
                    remark:tr.find("input[name=blancerealRemark]").val()
            	}
            	DataArr.push(blanceData)
            	JsonData = JSON.stringify(DataArr)
            	$.ajax({
            		url:""+APP_ROOT+"back/financial/financialTransfer.do?method=saveFcTransferSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                    type:"POST",
                    data:"fcTransferSettlementStr="+JsonData,
                    dataType:"json",
                    beforeSend:function(){
                        globalLoadingLayer = openLoadingLayer();
                    },
                    success:function(data){
                    	layer.close(globalLoadingLayer);
                        var result = showDialog(data);
                        if(result){
                        	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                        	Transfer.edited = false;
                            Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
                        }
                    }
            	})
	    	}
	    }

    }
    exports.listTransfer = Transfer.listTransfer;
});
/**
 * Created by Administrator on 2015/8/31.
 */
