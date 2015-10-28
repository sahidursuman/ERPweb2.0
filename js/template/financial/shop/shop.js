define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_shop",
        listTemplate = require("./view/list"),
        shopCheckingTemplate = require("./view/shopChecking"),
        shopClearingTemplate = require("./view/shopClearing"),
		billImagesTemplate = require("./view/shopLookImg"),
		shopRecords = require("./view/shopRecords"),
        tabId = "tab-"+menuKey+"-content",
        checkTabId = "tab-"+ menuKey+"-checking"+"-content",//
        clearTabId = "tab-"+ menuKey+"-clearing"+"-content";
   /*  $("#" + tabId + "").off().on("edited.api",function(){
    	shop.edited = true;
    }); */
	var shop = {
		searchData : {
			page : "",
			shopId : "",
			year : "",
			month : ""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!shop.edited[editedType] && shop.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckShopId:0,
        oldBlanceShopId:0,
		listFinancialShop:function(page,shopId,year,month){   
			$.ajax({
				url:""+APP_ROOT+"back/financialShop.do?method=listFinancialShop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&shopId="+shopId+"&year="+year+"&month="+month,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						shop.searchData = {
							page : page,
							shopId : shopId,
							year : year,
							month : month
						};
						var html = listTemplate(data);
						addTab(menuKey,"购物账务",html);
						
						$("#"+tabId+ " select[name=shopId]").val(data.shopId);
						$("#"+tabId+ " select[name=year]").val(data.year);
						$("#"+tabId+ " select[name=month]").val(data.month);
						
						//搜索按钮事件
						$("#"+tabId+ " .btn-shop-search").click(function(){
							var shopId = $("#"+tabId+ " select[name=shopId]").val();
							var year = $("#"+tabId+ " select[name=year]").val();
							var month = $("#"+tabId+ " select[name=month]").val();
							shop.listFinancialShop(0,shopId,year,month);
						});
						//分页--首页按钮事件
						$("#"+tabId+ " .pageMode a.first").click(function(){
							shop.listFinancialShop(0,shopId,data.year,data.month);
						});
						//分页--上一页事件
						$("#"+tabId+ " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							shop.listFinancialShop(previous,shopId,data.year,data.month);
						});
						//分页--下一页事件
						$("#"+tabId+ " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							shop.listFinancialShop(next,shopId,data.year,data.month);
						});
						//分页--尾页事件
						$("#"+tabId+ " .pageMode a.last").click(function(){
							shop.listFinancialShop(data.totalPage-1,shopId,data.year,data.month);
						});
						//给对账按钮绑定事件
						$("#"+tabId+" .btn-divide").click(function(){
							var shopId = $(this).attr("data-entity-id");
							shop.listShopChecking(0,shopId,data.year,data.month);
						});
						//给结算按钮绑定事件
						$("#"+tabId+" .btn-transfter").click(function(){
							var shopId = $(this).attr("data-entity-id");
							var start_month = 1;
							var end_month = 12;
							shop.listShopSettlement(shopId,data.year,start_month,end_month);
						});
					}
				}
			});
		},
		//对账
		listShopChecking:function(page,shopId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financialShop.do?method=listShopChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&shopId="+shopId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//表单验证
					var $obj = $(".shop-checking .form-horizontal");
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = shopCheckingTemplate(data);
						var validator;
                 	    //判断页面是否存在
                 	    if($("#"+checkTabId+"").length > 0) {
                 	    	if(!!shop.edited["checking"] && shop.edited["checking"] != ""){
                 	    		addTab(menuKey+"-checking","购物对账");
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 validator = rule.check($('.shop-checking'));
				            		 if (!validator.form()) { 
				            			 return; 
				            		 }
				            		 shop.saveCheckingData(page,shopId,year,month,0);
				            		 shop.edited["checking"] = "";
				            		 addTab(menuKey+"-checking","购物对账",html);
				            		 validator = rule.check($('.shop-checking'));
				            	 },function(){
				            		 addTab(menuKey+"-checking","购物对账",html);
				            		 shop.edited["checking"] = "";
				            		 validator = rule.check($('.shop-checking'));
				            	 });
                 	    	 }else{
	                 	    	addTab(menuKey+"-checking","购物对账",html);
	                 	        validator = rule.check($('.shop-checking'));
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(menuKey+"-checking","购物对账",html);
                 	    	validator = rule.check($('.shop-checking'));
                 	    	
                 	    };
                 	   $("#"+checkTabId+ " .all").on("change",function(){
            	    		shop.edited["checking"] = "checking"; 
							shop.oldCheckShopId = shopId;
            	    	});
						$("#"+checkTabId+ " select[name=year]").val(data.year);
						$("#"+checkTabId+ " select[name=month]").val(data.month);
						
						//搜索按钮事件
						$("#"+checkTabId+ " .btn-shopChecking-search").click(function(){
							var year = $("#"+checkTabId+ " select[name=year]").val();
							var month = $("#"+checkTabId+ " select[name=month]").val();
							shop.listShopChecking(0,shopId,year,month);
						});
						//导出事件btn-shopExport
						$("#"+checkTabId+ " .btn-shopExport").click(function(){
							var year = $("#"+checkTabId+ " select[name=year]").val();
							var month = $("#"+checkTabId+ " select[name=month]").val();
							checkLogin(function(){
	                         	var url = ""+APP_ROOT+"back/export.do?method=shop&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&shopId="+shopId+"&shopName="+data.shopName+"&year="+year+"&month="+month+"&sortType=auto";
	                         	exportXLS(url)
	                         });
						});
						//分页--首页按钮事件
						$("#"+checkTabId+ " .pageMode a.first").click(function(){
							shop.listShopChecking(0,shopId,data.year,data.month);
						});
						//分页--上一页事件
						$("#"+checkTabId+ " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							shop.listShopChecking(previous,shopId,data.year,data.month);
						});
						//分页--下一页事件
						$("#"+checkTabId+ " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							shop.listShopChecking(next,shopId,data.year,data.month);
						});
						//分页--尾页事件
						$("#"+checkTabId+ " .pageMode a.last").click(function(){
							shop.listShopChecking(data.totalPage-1,shopId,data.year,data.month);
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
			            $("#"+checkTabId+ " .btn-shop-close").click(function(){
			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
			            		 closeTab(menuKey+"-checking");
								 shop.edited["checking"] = "";
			            	 });
			            });
		                //已对账的实际退补款不可修改
		                //$("#"+checkTabId+ " input[name='isConfirmAccount']:checked").parent().siblings().find("input[name='realBackshopMoney']").prop("disabled",true);
		                
		                 //给查看单据绑定事件
		                 $("#"+checkTabId+ " .shopImg").click(function(){
		                	 var WEB_IMG_URL_BIG = $("#"+checkTabId).find("input[name=WEB_IMG_URL_BIG]").val();//大图
		                	 var WEB_IMG_URL_SMALL = $("#"+ checkTabId).find("input[name=WEB_IMG_URL_SMALL]").val();//大图
		                	 shop.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
		                 });
						
		                 //展开事件
	                     $("#"+checkTabId+ " .seeGroup").click(function(){
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
	                     
						//给对账按钮绑定事件 
						$("#"+checkTabId+ " .btn-confirm-shop-rs").click(function(){
							// 表单校验
							if (!validator.form()) { 
								return;
							}
							shop.saveCheckingData(page,shopId,year,month,0);
			            });
					}
				}
			});
		},
		//结算
		listShopSettlement:function(shopId,year,start_month,end_month){
			$.ajax({
				url:""+APP_ROOT+"back/financialShop.do?method=listShopSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"shopId="+shopId+"&year="+year+"&start_month="+start_month+"&end_month="+end_month,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var html = shopClearingTemplate(data);
						var validator;       
                 	    //判断页面是否存在 #tab-financial_shop-clearing-content  "tab-"+ menuKey+"-clearing"+"-content" 
                 	    if($("#tab-"+menuKey+"-clearing-content").length > 0) {
                 	    	if(!!shop.edited["clearing"] && shop.edited["clearing"] != ""){
                 	    		addTab(menuKey+"-clearing","购物结算");
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                 	    			 shop.validatorTable();
                 	    			 var saveBtn = $("#"+clearTabId+" .btn-settlement-save");
	             	    			 if (!$(saveBtn).data('validata').form()) { return; };
				            		 shop.saveShopSettlement(shopId,year,start_month,end_month,0);
				            		 shop.edited["clearing"] = "";
				            		 addTab(menuKey+"-clearing","购物结算",html);
				            		 shop.validatorTable();
				            	 },function(){
				            		 addTab(menuKey+"-clearing","购物结算",html);
				            		 shop.edited["clearing"] = "";
				            		 shop.validatorTable();
				            	 });
                 	    	 }else{
	                 	    	addTab(menuKey+"-clearing","购物结算",html);
	                 	    	shop.validatorTable();
                 	    	 }
             	    		 
                 	    }else{
                 	    	addTab(menuKey+"-clearing","购物结算",html);
                 	    	shop.validatorTable();
                 	    };
                 	   $("#"+clearTabId+" .all").on('change', 'input, select', function() {
                 		  shop.edited["clearing"] = "clearing";
						  shop.oldBlanceShopId = shopId;
	    	    		  $(this).closest('tr').data('blanceStatus',true);
	    	    		});
											
						$("#"+clearTabId+ " select[name=year]").val(year);
						$("#"+clearTabId+ " select[name=start_month]").val(start_month);
						$("#"+clearTabId+ " select[name=end_month]").val(end_month);
						
						//搜索按钮事件
						$("#"+clearTabId+ " .btn-shopSettlement-search").click(function(){
							var year = $("#"+clearTabId+ " select[name=year]").val();
							var start_month = $("#"+clearTabId+ " select[name=start_month]").val();
							var end_month = $("#"+clearTabId+ " select[name=end_month]").val();
							shop.listShopSettlement(shopId,year,start_month,end_month);
						});
						
						//对账明细按钮事件
                        $("#"+clearTabId+ " .btn-shop-checkDetail").click(function(){
                        	var year = $(this).attr("data-entity-year");
                        	var month = $(this).attr("data-entity-month");
                        	shop.listShopChecking(0,shopId,year,month);
                        });
						
						//给操作记录按钮绑定事件
                        $("#"+clearTabId+ " .btn-shop-records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financialShop.do?method=listFinancialShopSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"shopId="+shopId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialShopSettlementRecordList.length == 0){
                                			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                                		}else{
                                			var html =shopRecords(data);
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
                        	if (!$(this).data('validata').form()) { return; }
		            		shop.saveShopSettlement(shop.oldBlanceShopId,year,start_month,end_month,0);
                        });
					}
				}
			});
		},
		//给每个tr增加验证
	    validatorTable:function(){
	    	//获取table中的tr
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
		saveCheckingData : function(page,shopId,year,month,isClose){
			console.log("test");
			var JsonStr = [],$tr = $("#"+checkTabId+" .all tbody tr"),
            oldRealRebateMoney,
            newRealRebateMoney,
            oldRemark,
            newRemark;
     	    $tr.each(function(i){
     		   var checkStatus = $(this).attr("data-entity-isConfirmAccount");
     		   var consumeStartTime = $(this).attr("data-entity-startTime");
     		   var flag = $(this).find("input[name='isConfirmAccount']").is(":checked");
     		   newRealRebateMoney = $(this).find("input[name='realRebateMoney']").val();
     		   newRemark = $(this).find("input[name='billRemark']").val();
     		   oldRemark = $(this).attr("data-entity-billRemark");
     		   oldRealRebateMoney = $(this).attr("data-entity-rebateMoney");
     		   if(flag){
     			  if(checkStatus == 1){
     				  //判断是否修改对账
     				  if(oldRealRebateMoney != newRealRebateMoney || oldRemark != newRemark){
     				  	var checkData = {
 				  		   id:$(this).attr("data-entity-id"),
	 					   shopId:shopId,
	 					   consumeStartTime:consumeStartTime,
	 					   realRebateMoney:newRealRebateMoney,
	 					   billRemark:newRemark,
	 					   isConfirmAccount:1
     				  	}
     				  	JsonStr.push(checkData);
     				  }
 			      }else{
 			      		var checkData = {
 				  		   id:$(this).attr("data-entity-id"),
	 					   shopId:shopId,
	 					   consumeStartTime:consumeStartTime,
	 					   realRebateMoney:newRealRebateMoney,
	 					   billRemark:newRemark,
	 					   isConfirmAccount:1
     				  	}
     				  	JsonStr.push(checkData);
 			      }
     		   }else{
     			   if(checkStatus == 1){
 					   var checkData = {
 				  		   id:$(this).attr("data-entity-id"),
	 					   shopId:shopId,
	 					   consumeStartTime:consumeStartTime,
	 					   realRebateMoney:newRealRebateMoney,
	 					   billRemark:newRemark,
	 					   isConfirmAccount:0
     				  	}
         			   JsonStr.push(checkData);
     			   }
     		   }
		   });
     	   if(JsonStr.length == 0){
     		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
     		   return;
     	   }
     	   JsonStr = JSON.stringify(JsonStr);
     	   $.ajax({
     		   url:""+APP_ROOT+"back/financialShop.do?method=updateShopChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"financialShopListStr="+encodeURIComponent(JsonStr),
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
						shop.edited["checking"] = "";
						if(isClose == 1){
							closeTab(checkTabId);
							shop.listFinancialShop(shop.searchData.page,shop.searchData.shopId,shop.searchData.year,shop.searchData.month);
						} else {
							shop.listShopChecking(page,shopId,year,month);
						}
					}
				}
     	   });
		},
		//保存结算
		saveShopSettlement : function(shopId,year,start_month,end_month,obj,isClose){
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
          	console.log(payMoney);
	    	$.ajax({
        		url:""+APP_ROOT+"back/financialShop.do?method=saveFinancialShopSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
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
                    	shop.edited["clearing"] = "";
						if(isClose == 1){
							closeTab(clearTabId);
							shop.listFinancialShop(shop.searchData.page,shop.searchData.shopId,shop.searchData.year,shop.searchData.month);
						} else {
							shop.listShopSettlement(shopId,year,start_month,end_month);
						}
                    }
                }
        	})
		},
		save : function(saveType){
			console.log(saveType);
			if(saveType == "checking"){
				shop.saveCheckingData(0,shop.oldCheckShopId,"","",1);
			} else if(saveType == "clearing"){
				shop.saveShopSettlement(shop.oldBlanceShopId,"","","",1);
			}
		},
		clearEdit : function(clearType){
			shop.edited[clearType] = "";
		}
	}
	exports.listFinancialShop = shop.listFinancialShop;
	exports.isEdited = shop.isEdited;
	exports.save = shop.save;
	exports.clearEdit = shop.clearEdit;
});
