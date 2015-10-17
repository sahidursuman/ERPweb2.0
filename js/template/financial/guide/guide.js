define(function(require, exports) {
	
	var rule = require("./rule");
    var menuKey = "financial_guide",
        listTemplate = require("./view/list"),
        guideCheckingTemplate = require("./view/guideChecking"),
        billImagesTemplate = require("./view/billImages"),
        guideClearingTemplate = require("./view/guideClearing"),
        costDetail = require("./view/costDetail"),
        guideRecords = require("./view/guideRecords"),
        tabId = "tab-"+menuKey+"-content",
        checkTabId = "tab-"+ menuKey+"-checking"+"-content",
        clearTabId = "tab-"+ menuKey+"-clearing"+"-content";
	var guide = {
		searchData : {
			page : "",
			guideId : "",
			year : "",
			month : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!guide.edited[editedType] && guide.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckGuideId : 0,
        oldBlanceGuideId:0,
		listFinancialGuide:function(page,guideId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financialGuide.do?method=listFinancialGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&guideId="+guideId+"&year="+year+"&month="+month,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						guide.searchData = {
							page : page,
							guideId : guideId,
							year : year,
							month : month
						};
						var html = listTemplate(data);
						addTab(menuKey,"导游帐务",html);
						
						$("#"+tabId+ " select[name=guideId]").val(data.guideId);
						$("#"+tabId+ " select[name=year]").val(data.year);
						$("#"+tabId+ " select[name=month]").val(data.month);
						
						//搜索按钮事件
						$("#"+tabId+ " .btn-financialguide-search").click(function(){
							var guideId = $("#"+tabId+ " select[name=guideId]").val();
							var year = $("#"+tabId+ " select[name=year]").val();
							var month = $("#"+tabId+ " select[name=month]").val();
							guide.listFinancialGuide(0,guideId,year,month);
						});
						//分页--首页按钮事件
						$("#"+tabId+ " .pageMode a.first").click(function(){
							guide.listFinancialGuide(0,guideId,data.year,data.month);
						});
						//分页--上一页事件
						$("#"+tabId+ " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							guide.listFinancialGuide(previous,guideId,data.year,data.month);
						});
						//分页--下一页事件
						$("#"+tabId+ " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							guide.listFinancialGuide(next,guideId,data.year,data.month);
						});
						//分页--尾页事件
						$("#"+tabId+ " .pageMode a.last").click(function(){
							guide.listFinancialGuide(data.totalPage-1,guideId,data.year,data.month);
						});
						//给对账按钮绑定事件
						$("#"+tabId+" .btn-divide").click(function(){
							var guideId = $(this).attr("data-entity-id");
							guide.listGuideChecking(0,guideId,data.year,data.month);

						});
						//给结算按钮绑定事件
						$("#"+tabId+" .btn-transfter").click(function(){
							var guideId = $(this).attr("data-entity-id");
							var start_month = 1;
							var end_month = 12;
							guide.listGuideSettlement(guideId,data.year,start_month,end_month);

						});
					}
				}
			});
		},
		listGuideChecking:function(page,guideId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financialGuide.do?method=listGuideChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&guideId="+guideId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					var $obj = $(".check .form-horizontal");
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var guideList = JSON.parse(data.guideList);
						data.guideList = guideList;
						var html = guideCheckingTemplate(data);
						//addTab(menuKey+"-checking","导游对账",html);
						if($("#"+checkTabId+"").length > 0) {
                 	    	if(!!guide.edited["checking"] && guide.edited["checking"] != ""){
                 	    		addTab(menuKey+"-checking","导游对账");
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.check($('.check'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 guide.saveCheckingData(page,guideId,year,month,0);
				            		 guide.edited["checking"] = "";
				            		 addTab(menuKey+"-checking","导游对账",html);
				            		 validator = rule.check($('.check'));
				            	 },function(){
				            		 addTab(menuKey+"-checking","导游对账",html);
				            		 guide.edited["checking"] = "";
				            		 validator = rule.check($('.check'));
				            	 });
                 	    	 }else{
	                 	    	addTab(menuKey+"-checking","导游对账",html);
	                 	        validator = rule.check($('.check'));
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(menuKey+"-checking","导游对账",html);
                 	    	validator = rule.check($('.guide-checking'));
                 	    	
                 	    };
                 	    $("#"+checkTabId+ " .all").on("change",function(){
            	    		guide.edited["checking"] = "checking"; 
							guide.oldCheckGuideId = guideId;
            	    	});
						
						// 设置表单验证
				    	//var validator = rule.check($('.check'));
						
						$("#"+checkTabId+ " select[name=year]").val(data.year);
						$("#"+checkTabId+ " select[name=month]").val(data.month);

						//详细费用明细
                        $("#"+checkTabId+ " .check .cost-detail").click(function(){
                            var id = $(this).attr("data-entity-id");
                            $.ajax({
 	                		   url:""+APP_ROOT+"back/financialGuide.do?method=listFinancialTripInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
 	                           type:"POST",
 	                           data:"id="+id,
 	                           dataType:"json",
 	                           beforeSend:function(){
 									globalLoadingLayer = openLoadingLayer();
 								},
 								success:function(data){
 									layer.close(globalLoadingLayer);
 									var result = showDialog(data);
 									if(result){
 										data.financialGuide = JSON.parse(data.financialGuide);
 										var html = costDetail(data);
 										addTab(menuKey+"-costDetail","费用明细",html);
 										//查看图片事件
 										$("#tab-"+menuKey+"-costDetail-content .costDetailImg").click(function(){
 											 var WEB_IMG_URL_BIG = $("#tab-"+menuKey+"-costDetail-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
 						                	 var WEB_IMG_URL_SMALL = $("#tab-"+menuKey+"-costDetail-content").find("input[name=WEB_IMG_URL_SMALL]").val();//小图
 						                	guide.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
 										});
 									}
 								}
 	                	   });
                        });
						//搜索按钮事件
						$("#"+checkTabId+ " .btn-guideChecking-search").click(function(){
							var year = $("#"+checkTabId+ " select[name=year]").val();
							var month = $("#"+checkTabId+ " select[name=month]").val();
							guide.listGuideChecking(0,guideId,year,month);
						});
						//导出事件btn-guideExport
						$("#"+checkTabId+ " .btn-guideExport").click(function(){
							var year = $("#"+checkTabId+ " select[name=year]").val();
							var month = $("#"+checkTabId+ " select[name=month]").val();
							 checkLogin(function(){
	 	                        	var url = ""+APP_ROOT+"back/export.do?method=guide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&guideId="+guideId+"&guideName="+data.guideName+"&year="+year+"&month="+month+"&sortType=auto";
	 	                        	exportXLS(url)
	 	                     });
		                 });
						//分页--首页按钮事件
						$("#"+checkTabId+ " .pageMode a.first").click(function(){
							guide.listGuideChecking(0,guideId,data.year,data.month);
						});
						//分页--上一页事件
						$("#"+checkTabId+ " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							guide.listGuideChecking(previous,guideId,data.year,data.month);
						});
						//分页--下一页事件
						$("#"+checkTabId+ " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							guide.listGuideChecking(next,guideId,data.year,data.month);
						});
						//分页--尾页事件
						$("#"+checkTabId+ " .pageMode a.last").click(function(){
							guide.listGuideChecking(data.totalPage-1,guideId,data.year,data.month);
						});
						
						//给全选绑定事件
		                $("#"+checkTabId+ " input[type='checkbox'].selectAll").click(function(){
		                	if(!$(this).prop("checked")){
		                		$("#"+checkTabId+ " input[name='isConfirmAccount']").each(function(){
		                			if($(this).attr("data-entity-checkStatus")==0){
		                				$(this).prop("checked",false);
				                	}else{
				                		$(this).prop("checked",true);
				                	}
		                		});
		                	}else{
		                		$("#"+checkTabId+ " input[name='isConfirmAccount']").prop("checked",true);
		                	}
		                });
		                //给复选框绑定事件
		                $("#"+checkTabId+ " input[name='isConfirmAccount']").click(function(){
		                	var flag = true;
		                	$("#"+checkTabId+ " input[name='isConfirmAccount']").each(function(){
		                		if(!$(this).prop("checked")){
		                			flag = false;
		                		}
		                	});
		                	$("#"+checkTabId+ " input[type='checkbox'].selectAll").prop("checked",flag);
		                });
		                //关闭按钮事件
			            $("#"+checkTabId+ " .btn-guide-close").click(function(){
			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
			            		 closeTab(menuKey+"-checking");
								 guide.edited["checking"] = "";
			            	 });
			            });
		                
		                //已对账的实际退补款不可修改
		                //$("#"+checkTabId+ " input[name='isConfirmAccount']:checked").parent().siblings().find("input[name='realBackGuideMoney']").prop("disabled",true);
		                
						//给对账按钮绑定事件
						$("#"+checkTabId+ " .btn-confirm-guide-checking").click(function(){
							 if (!validator.form()) { 
		            			 return; 
		            		 }
		            		 guide.saveCheckingData(page,guideId,year,month,0);
						});

					}
				}
			});
		},
		listGuideSettlement:function(guideId,year,start_month,end_month){
			$.ajax({
				url:""+APP_ROOT+"back/financialGuide.do?method=listGuideSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"guideId="+guideId+"&year="+year+"&start_month="+start_month+"&end_month="+end_month,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = guideClearingTemplate(data);
						//addTab(menuKey+"-clearing","导游结算",html);
						//判断页面是否存在 #tab-financial_guide-clearing-content  "tab-"+ menuKey+"-clearing"+"-content" 
                 	    if($("#tab-"+menuKey+"-clearing-content").length > 0) {
                 	    	if(!!guide.edited["clearing"] && guide.edited["clearing"] != ""){
                 	    		addTab(menuKey+"-clearing","导游结算");
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 guide.validatorTable();
                 	    			 var saveBtn = $("#"+clearTabId+" .btn-settlement-save");
	             	    			 if (!$(saveBtn).data('validata').form()) { return; };
				            		 guide.saveGuideSettlement(guideId,year,start_month,end_month,0);
				            		 guide.edited["clearing"] = "";
				            		 addTab(menuKey+"-clearing","导游结算",html);
				            		 guide.validatorTable();
				            	 },function(){
				            		 addTab(menuKey+"-clearing","导游结算",html);
				            		 guide.edited["clearing"] = "";
				            		 guide.validatorTable();
				            	 });
                 	    	 }else{
	                 	    	addTab(menuKey+"-clearing","导游结算",html);
	                 	    	guide.validatorTable();
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(menuKey+"-clearing","导游结算",html);
                 	    	guide.validatorTable();
                 	    };
                 	   $("#"+clearTabId+" .all").on('change', 'input, select', function() {
                 		  guide.edited["clearing"] = "clear";
						  guide.oldBlanceGuideId = guideId;
	    	    		  $(this).closest('tr').data('blanceStatus',true);
	    	    		});
						
						
						$("#"+clearTabId+ " select[name=year]").val(year);
						$("#"+clearTabId+ " select[name=start_month]").val(start_month);
						$("#"+clearTabId+ " select[name=end_month]").val(end_month);
						
						//搜索按钮事件
						$("#"+clearTabId+ " .btn-guideSettlement-search").click(function(){
							var year = $("#"+clearTabId+ " select[name=year]").val();
							var start_month = $("#"+clearTabId+ " select[name=start_month]").val();
							var end_month = $("#"+clearTabId+ " select[name=end_month]").val();
							guide.listGuideSettlement(guideId,year,start_month,end_month);
						});
						
						//对账明细按钮事件
                        $("#"+clearTabId+ " .btn-guide-checkDetail").click(function(){
                        	var year = $(this).attr("data-entity-year");
                        	var month = $(this).attr("data-entity-month");
                        	guide.listGuideChecking(0,guideId,year,month);
                        });
						
						//给操作记录按钮绑定事件
                        $("#"+clearTabId+ " .btn-guide-records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financialGuide.do?method=listFinancialGuideSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"guideId="+guideId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialGuideSettlementRecordList.length == 0){
                                			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                                		}else{
                                			var html =guideRecords(data);
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
		                
						//保存按钮事件
                        $("#"+clearTabId+" .btn-settlement-save").click(function(){
                        	 if (!$(this).data('validata').form()) { return; };
		            		 guide.saveGuideSettlement(guideId,year,start_month,end_month,0);
                        });

					}
				}
			});
		},
		//给每个tr增加验证
	    validatorTable:function(){
	       //设置表单验证  tab-financial_guide-clearing-content #tab-financial_guide-clearing-content
		   var $tr = $("#"+clearTabId+ " .all tbody tr")
           //给每个tr添加表单验证
           $tr.each(function(){
           	$(this).find('.btn-settlement-save').data('validata', rule.check($(this)));
           });	
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
	    	var html = billImagesTemplate(data);
	    	
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
	    //保存对账数据
	    saveCheckingData:function(page,guideId,year,month,isClose){
           var JsonStr = [],$tr = $("#"+checkTabId+" .all tbody tr");
           var count = 0;
    	   $tr.each(function(i){
    		   var checkStatus = $(this).find("input[name='isConfirmAccount']").attr("data-entity-checkStatus");
    		   var startTime = $(this).attr("data-entity-startTime");
    		   var flag = $(this).find("input[name='isConfirmAccount']").is(":checked");
    		   var $realBack = $(this).find("input[name='realBackGuideMoney']");
    		   var $billRemark = $(this).find("input[name='billRemark']");
    		   if(flag){
    			   if(checkStatus == 1){
    				   if($realBack.val() != $realBack.attr("data-entity-value") 
    						   || $billRemark.val() != $billRemark.attr("data-entity-value"))
    				   {
    					   count++;
    				   }
			      }else{
			    	  count++;
			      }
    			   
    			  var checkData = {
    					   id:$(this).attr("data-entity-id"),
    					   guideId:guideId,
    					   startTime:startTime,
    					   realBackGuideMoney:$realBack.val(),
    					   billRemark:$billRemark.val(),
    					   isConfirmAccount:1
    			  }
    			  JsonStr.push(checkData);
    		   }else{
    			   if(checkStatus == 1){
					   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   guideId:guideId,
        					   startTime:startTime,
        					   realBackGuideMoney:$realBack.attr("data-entity-value"),
        					   billRemark:$billRemark.attr("data-entity-value"),
        					   isConfirmAccount:0
        			   }
        			   JsonStr.push(checkData);
					   count++;
    			   }
    		   }
		    });
    	   
    	   if(count == 0){
    		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
    		   return
    	   }
    	   JsonStr = JSON.stringify(JsonStr);
    	   $.ajax({
    		   url:""+APP_ROOT+"back/financialGuide.do?method=updateGuideChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
               type:"POST",
               data:"financialGuideListStr="+encodeURIComponent(JsonStr),
               dataType:"json",
               beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					console.log(data);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						guide.edited["checking"] = "";
						if(isClose == 1){
							closeTab(checkTabId);
							guide.listFinancialGuide(guide.searchData.page,guide.searchData.guideId,guide.searchData.year,guide.searchData.month);
						} else {
							guide.listGuideChecking(page,guideId,year,month);
						}
					}
				}
    	   });
		},
		//保存结算
		saveGuideSettlement : function(guideId,year,start_month,end_month,isClose){
	    	var $tr = $("#"+clearTabId+ " .all tbody tr");
	    	var id ; 
        	var payMoney ;
        	var payType;
        	var remark;
	    	$tr.each(function(i){
          		if($(this).data('blanceStatus')){
                	 id = $(this).attr("data-entity-id"); 
                	 payMoney = $tr.eq(i).find("input[name='payMoney']").val();
                	 payType = $tr.eq(i).find("select[name='payType'] :selected").text();
                	 remark = $tr.eq(i).find(" input[name='remark']").val();
          		}
          	})
	    	$.ajax({
        		url:""+APP_ROOT+"back/financialGuide.do?method=saveFinancialGuideSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"id="+id+"&payMoney="+payMoney+"&payType="+payType+"&remark="+remark,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                    	guide.edited["clearing"] = "";
						if(isClose == 1){
							closeTab(clearTabId);
							guide.listFinancialGuide(guide.searchData.page,guide.searchData.guideId,guide.searchData.year,guide.searchData.month);
						} else {
							guide.listGuideSettlement(guideId,year,start_month,end_month);
						}
                    }
                }
        	})
		},
		save : function(saveType){
			console.log(saveType);
			if(saveType == "checking"){
				guide.saveCheckingData(0,guide.oldCheckGuideId,"","",1);
			} else if(saveType == "clearing"){
				guide.saveGuideSettlement(guide.oldBlanceGuideId,"","","",1);
			}
		},
		clearEdit : function(clearType){
			guide.edited[clearType] = "";
		}
	}
	exports.listFinancialGuide = guide.listFinancialGuide;
	exports.isEdited = guide.isEdited;
	exports.save = guide.save;
	exports.clearEdit = guide.clearEdit;
});
