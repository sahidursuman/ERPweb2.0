define(function(require,exports){
	var menuKey = "financial_innerTransfer_out",
		listTemplate = require("./view/list"),
		checkTemplate = require("./view/innerTransferOutChecking"),
		settlementTemplate = require("./view/innerTransferClearing"),
		rule = require("./innerTransferOutRule"),
		recordTemplate = require("./view/innerTransferOutRecord"),
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
	var InnerTransferOut = {
			searchData:{
		    	"toBusinessGroupId":"",
		    	"year":"",
		    	"month":""
		    },
		    searchCheckData:{
		    	"toBusinessGroupId":"",
		    	"data-entity-toBusinessGroupNam":"",
		    	"year":"",
		    	"month":""
		    },
		    searchBalanceData:{
		    	"toBusinessGroupId":"",
		        "data-entity-toBusinessGroupNam":"",
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
			if(!!InnerTransferOut.edited[editedType] && InnerTransferOut.edited[editedType] != ""){
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
			listInnerTransferOut:function(pageNo,toBusinessGroupId,year,month){
				$.ajax({
					url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=listFinancialInnerTransferOut&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"pageNo="+pageNo+"&toBusinessGroupId="+toBusinessGroupId+"&year="+year+"&month="+month+"&sortType=auto",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
						
						InnerTransferOut.searchData={
					    	"toBusinessGroupId":toBusinessGroupId,
					    	"year":year,
					    	"month":month
			    		}
						data.searchParam = InnerTransferOut.searchData;
			    		data.yearList = yearList;
						data.monthList = monthList;
						var html = listTemplate(data);
						addTab(menuKey,"内转转出",html);
						//给搜索按钮绑定事件
						//var $tabId = $();
						var $tabId = $("#"+tabId);
						//搜索按钮事件
						$tabId.find(".btn-innerTransferOut-search").click(function(){
						InnerTransferOut.searchData={
					    	"toBusinessGroupId":$tabId.find("select[name=toBusinessGroupId]").val(),
					    	"year":$tabId.find("select[name=year]").val(),
					    	"month":$tabId.find("select[name=month]").val()
		    			}
			    		InnerTransferOut.listInnerTransferOut(0,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);
						});
						//分页--首页按钮事件
                        $tabId.find(".first").click(function(){

			    		InnerTransferOut.listInnerTransferOut(0,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);

                        });
                        //分页--上一页事件
                        $tabId.find(".previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
			    		InnerTransferOut.listInnerTransferOut(previous,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);

                        });
                        //分页--下一页事件
                        $tabId.find(".next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
			    		InnerTransferOut.listInnerTransferOut(next,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);
                        });
                        //分页--尾页事件
                        $tabId.find(".last").click(function(){
			    		InnerTransferOut.listInnerTransferOut(data.totalPage == 0 ? data.totalPage : data.totalPage-1,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);

                        });
                        //对账事件
                        $tabId.find(".btn-innerTransferOut-check").click(function(){
                        	InnerTransferOut.searchCheckData = {
						    	"toBusinessGroupId":$(this).attr("data-entity-id"),
						    	"toBusinessGroupNam":$(this).attr("data-entity-data-entity-toBusinessGroupNam"),
						    	"year":$(this).attr("data-entity-year"),
						    	"month":$(this).attr("data-entity-month")
		    				};
		    				InnerTransferOut.InnerTransferOutCheck(0,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)
                        });
                        //结算事件
                        $tabId.find(".btn-innerTransferOut-balance").click(function(){
                        	InnerTransferOut.searchBalanceData = {
						    	"toBusinessGroupId":$(this).attr("data-entity-id"),
						    	"toBusinessGroupNam":$(this).attr("data-entity-tobusinessgroupname"),
						    	"year":$(this).attr("data-entity-year"),
						    	"startMonth":$(this).attr("data-entity-startmonth"),
						    	"endMonth":$(this).attr("data-entity-endmonth"),

		    				};
		    				console.log(InnerTransferOut.searchBalanceData);
		    				InnerTransferOut.InnerTransferInBalance(0,InnerTransferOut.searchBalanceData.toBusinessGroupId,InnerTransferOut.searchBalanceData.toBusinessGroupNam,InnerTransferOut.searchBalanceData.year,InnerTransferOut.searchBalanceData.startMonth,InnerTransferOut.searchBalanceData.endMonth);
                        });
						}
					}
				});
			},
			//对账处理
			InnerTransferOutCheck:function(pageNo,toBusinessGroupId,toBusinessGroupNam,year,month){
				$.ajax({
					url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=listFinancialInnerTransferOutChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"pageNo="+pageNo+"&toBusinessGroupId="+toBusinessGroupId+"&year="+year+"&month="+month+"&sortType=auto",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
						
						InnerTransferOut.searchCheckData = {
					    	"toBusinessGroupId":toBusinessGroupId,
					    	"toBusinessGroupNam":toBusinessGroupNam,
					    	"year":year,
					    	"month":month
					    };
					   
					    data.yearList = yearList;
					    data.monthList = monthList;
					    data.searchParam = InnerTransferOut.searchCheckData;
					    var html = checkTemplate(data)
					    var $checkId = $("#" +"tab-"+checkTabId+"-content");
					    
					    var validator;// #tab-financial_innerTransfer_in-checking-content var $checkId = $("#" +"tab-"+checkTabId+"-content"); validator = rule.check($('.innerTransferChecking'));
					    				// #tab-financial_innerTransfer_in-checking-content
					    
					   
						//判断页面是否存在
						if($("#" +"tab-"+checkTabId+"-content").length > 0) {	
							if(!!InnerTransferOut.edited["checking"] && InnerTransferOut.edited["checking"] != ""){
								addTab(checkTabId,"内转转出对账");
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									validator = rule.check($('.innerTransferChecking'));
									if (!validator.form()) { return; }
									InnerTransferOut.saveCheckingData(0)
									InnerTransferOut.edited["checking"] = "";
									addTab(checkTabId,"内转转出对账",html);
									validator = rule.check($('.innerTransferChecking'));
								 },function(){
									addTab(checkTabId,"内转转出对账",html);
									InnerTransferOut.edited["checking"] = "";
									validator = rule.check($('.innerTransferChecking'));
								 });
							}else{
								addTab(checkTabId,"内转转出对账",html);
								validator = rule.check($('.innerTransferChecking'));
							}//
						}else{
							addTab(checkTabId,"内转转出对账",html);
							validator = rule.check($('.innerTransferChecking .all'));
						}
					    $("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
							oldCheckId = toBusinessGroupId;
							InnerTransferOut.edited["checking"] = "checking";  
						});
						var $checkId = $("#" +"tab-"+checkTabId+"-content");
						
						//分页--首页按钮事件
                        $checkId.find(".first").click(function(){

		    				InnerTransferOut.InnerTransferOutCheck(0,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

                        });
                        //分页--上一页事件
                        $checkId.find(".previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
		    				InnerTransferOut.InnerTransferOutCheck(previous,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

                        });
                        //分页--下一页事件
                        $checkId.find(".next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
		    				InnerTransferOut.InnerTransferOutCheck(next,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNamtoBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

                        });
                        //分页--尾页事件
                        $checkId.find(".last").click(function(){
		    				InnerTransferOut.InnerTransferOutCheck(data.totalPage == 0 ? data.totalPage : data.totalPage-1,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNamtoBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

                        });
						//搜索事件
						$checkId.find(".btn-checking-search").click(function(){
							InnerTransferOut.searchCheckData = {
						    	"toBusinessGroupId":toBusinessGroupId,
						    	"toBusinessGroupNam":toBusinessGroupNam,
						    	"year":$checkId.find("select[name=year]").val(),
						    	"month":$checkId.find("select[name=month]").val()
					    	};
		    				InnerTransferOut.InnerTransferOutCheck(0,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

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
	                    	InnerTransferOut.saveCheckingData(0)
	                    });
	                    //取消按钮事件
						$checkId.find(".btn-transferFinancial-close").click(function(){
							showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
								closeTab(checkTabId);
								InnerTransferOut.edited["checking"] = "";
							});
						});

						}
					}
				});
			},
			//结算处理
			InnerTransferInBalance:function(pageNo,toBusinessGroupId,toBusinessGroupNam,year,startMonth,endMonth){
				$.ajax({
					 url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=listFinancialInnerTransferOutSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					 type:"POST",
	                 data:"pageNo="+pageNo+"&toBusinessGroupId="+toBusinessGroupId+"&year="+year+"&start_month="+startMonth+"&end_month="+endMonth+"&sortType=auto",
					 dataType:"json",
					 beforeSend:function(){
						 globalLoadingLayer = openLoadingLayer();
					 },
					 success:function(data){
						
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						 if(result){
						 	InnerTransferOut.searchBalanceData = {
						    	"toBusinessGroupId":toBusinessGroupId,
						        "toBusinessGroupNam":toBusinessGroupNam,
						    	"year":year,
						    	"startMonth":startMonth,
						    	"endMonth":endMonth
						    };

						 	data.yearList = yearList;
		                    data.monthList = monthList;
		                    data.searchParam = InnerTransferOut.searchBalanceData;
	                        var html = settlementTemplate(data);
                            if($("#" +"tab-"+blanceTabId+"-content").length > 0)
	             	    	{
	             	    	 if(!!InnerTransferOut.edited["blance"] && InnerTransferOut.edited["blance"] != ""){
	             	    		addTab(blanceTabId,"内转转出结算");
			                    
	             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	             	    			 InnerTransferOut.validatorTable()
	             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transferBlance-save")
	             	    			 if (!$(saveBtn).data('validata').form()) { return; }
	             	    			 InnerTransferOut.saveBlanceData(0);
				            		 InnerTransferOut.edited["blance"] = "";
				            		 addTab(blanceTabId,"内转转出结算",html);
				            		 InnerTransferOut.validatorTable();
				            	 },function(){
				            		    addTab(blanceTabId,"内转转出结算",html);
				            		    InnerTransferOut.edited["blance"] = "";
				            		    InnerTransferOut.validatorTable();
				            	 });
	             	    	 }else{
	                 	    	addTab(blanceTabId,"内转转出结算",html);
	                 	    	InnerTransferOut.validatorTable();
	             	    	 }//
	             	    }else{
	             	    	addTab(blanceTabId,"内转转出结算",html);
	             	    	InnerTransferOut.validatorTable();
	             	    };
	             	    var $settleId = $("#" +"tab-"+blanceTabId+"-content");
	             	   	$settleId.find(".all").on('change', 'input, select', function() {
	             		   	InnerTransferOut.edited["blance"] = "blance";
	             		   //	InnerTransferOut.oldBlancePartnerAgencyId = toBusinessGroupId;
	    	    			$(this).closest('tr').data('blanceStatus',true);
	    	    		});
	    	    		//搜索事件
	    	    		$settleId.find(".btn-blance-search").click(function(){

	    	    			InnerTransferOut.searchBalanceData = {
						    	"toBusinessGroupId":toBusinessGroupId,
						        "toBusinessGroupNam":toBusinessGroupNam,
						    	"year":$settleId.find("select[name=year]").val(),
						    	"startMonth":$settleId.find("select[name=startMonth]").val(),
						    	"endMonth":$settleId.find("select[name=endMonth]").val()
						    };
						    console.log(InnerTransferOut.searchBalanceData);
		    				InnerTransferOut.InnerTransferInBalance(0,InnerTransferOut.searchBalanceData.toBusinessGroupId,InnerTransferOut.searchBalanceData.toBusinessGroupNam,InnerTransferOut.searchBalanceData.year,InnerTransferOut.searchBalanceData.startMonth,InnerTransferOut.searchBalanceData.endMonth);
	    	    		});
						//保存结算事件
						$settleId.find(".btn-transferBlance-save").click(function(){
							if (!$(this).data('validata').form()) { return; }
							InnerTransferOut.saveBlanceData(0);
						});
						//对账明细按钮
						$settleId.find(".btn-restaurantBlance-checkDetail").click(function(){
							InnerTransferOut.searchCheckData = {
						    	"toBusinessGroupId":toBusinessGroupId,
						    	"toBusinessGroupNam":toBusinessGroupNam,
						    	"year":$(this).attr("data-entity-year"),
						    	"month":$(this).attr("data-entity-month")
					    	};
		    				InnerTransferOut.InnerTransferOutCheck(0,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)

						});
						//操作记录按钮事件
						$settleId.find(".btn-transfer-record").click(function(){
							$.ajax({
                        		url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=listFinancialInnerTransferOutSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"toBusinessGroupId="+toBusinessGroupId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialInnerTransferOutSettlementRecordList.length == 0){
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
	                oldPyamoney,
	                oldRemark,
	                newPayMoney,
	                newRemark,
					$tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
	    		$tr.each(function(i){
		 		   var flag = $(this).find(".innerTransferFinancial").is(":checked");
		 		   
				   var oldPyamoney = $(this).attr("data-entity-realunpayedmoney"),
				   oldRemark = $(this).attr("data-entity-remark"),
				   newPayMoney = $tr.eq(i).find("input[name=realUnPayedMoney]").val(),
				   newRemark = $tr.eq(i).find("input[name=checkRemark]").val();
				  
				   if(flag){
					   if($(this).attr("data-entity-isComfirmAccount") == 1){
	    				   //判断是否是修改对账
	    				   if(oldPyamoney !== newPayMoney || oldRemark != newRemark){
	    					   var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   realUnPayedMoney:newPayMoney,
	    		 					   checkRemark:newRemark,
	    		 					   isComfirmAccount:1
			     			   }
	    					   JsonStr.push(checkData)
	    				   }
	    			   }else{ 
	    			   		var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   realUnPayedMoney:newPayMoney,
	    		 					   checkRemark:newRemark,
	    		 					   isComfirmAccount:1
			     			   }
					   JsonStr.push(checkData)}
		 		   }else{
		 			   if($(this).attr("data-entity-isComfirmAccount") == 1){
		 				   var checkData = {
	    		 					   id:$(this).attr("data-entity-id"),
	    		 					   realUnPayedMoney:newPayMoney,
	    		 					   checkRemark:newRemark,
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
			     		    url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=updateFinancialInnerTransferOutChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
			                type:"POST",
			                data:"financialInnerTransferOutStr="+encodeURIComponent(JsonStr),
			                dataType:"json",
			                beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if(result){
									showMessageDialog($( "#confirm-dialog-message" ),data.message);

									InnerTransferOut.edited["checking"] = "";
									if(isClose == 1){
										closeTab(checkTabId);
			    						InnerTransferOut.listInnerTransferOut(0,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);
									} else {
		    							InnerTransferOut.InnerTransferOutCheck(0,InnerTransferOut.searchCheckData.toBusinessGroupId,InnerTransferOut.searchCheckData.toBusinessGroupNam,InnerTransferOut.searchCheckData.year,InnerTransferOut.searchCheckData.month)
									}
								}
							}
			     	   });
			 	   }
	    	},
	    	saveBlanceData : function(isClose){
	    		var $tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
    		    var id; 
        		var payMoney;
        		var payType;
        		var remark;

	    		$tr.each(function(i){
	          		if($(this).data('blanceStatus')){
	          			id = $(this).attr("data-entity-id");
	          			payMoney =  $tr.eq(i).find("input[name=payedMoney]").val();
	          			payType =  $tr.eq(i).find("select[name=blancePayType]").val();
	          			remark =  $tr.eq(i).find("input[name=blancerealRemark]").val();
	          		}
          		});
          		$.ajax({
          			url:""+APP_ROOT+"back/financialInnerTransferOut.do?method=saveFinancialInnerTransferOutSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
	                type:"POST",
	                data:"id="+id+"&payedMoney="+payMoney+"&payType="+payType+"&remark="+remark,
	                dataType:"json",
	                beforeSend:function(){
	                    globalLoadingLayer = openLoadingLayer();
	                },
	                success:function(data){
	                	layer.close(globalLoadingLayer);
	                    var result = showDialog(data);
	                    if(result){
	                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
	                    	InnerTransferOut.edited["blance"] = "";
							if(isClose == 1){
								closeTab(clearTabId);
			    				InnerTransferOut.listInnerTransferOut(0,InnerTransferOut.searchData.toBusinessGroupId,InnerTransferOut.searchData.year,InnerTransferOut.searchData.month);
							} else {
		    				    InnerTransferOut.InnerTransferInBalance(0,InnerTransferOut.searchBalanceData.toBusinessGroupId,InnerTransferOut.searchBalanceData.toBusinessGroupNam,InnerTransferOut.searchBalanceData.year,InnerTransferOut.searchBalanceData.startMonth,InnerTransferOut.searchBalanceData.endMonth);
							}
	                    }
	                }
          		});


	    	},
			save : function(saveType){
				if(saveType == "checking"){
					var $checkId = $("#" +"tab-"+checkTabId+"-content"), 
					validator = rule.check($checkId.find('.innerTransferChecking'));
					if(!validator.form()){return;}
					InnerTransferOut.saveCheckingData(1)
				} else if(saveType == "blance"){
					InnerTransferOut.saveBlanceData(1);
				}
			},
			clearEdit : function(clearType){
				InnerTransferOut.edited[clearType] = "";
			}
	}
	exports.isEdited = InnerTransferOut.isEdited;
	exports.save = InnerTransferOut.save;
	exports.clearEdit = InnerTransferOut.clearEdit;
	exports.listInnerTransferOut = InnerTransferOut.listInnerTransferOut;
})