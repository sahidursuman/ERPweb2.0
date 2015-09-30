define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "financial_ticket",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		ticketChecking = require("./view/TicketChecking"),
		ticketClearing = require("./view/TicketClearing"),
		blanceRecords = require("./view/ticketRecords"),
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
	var Ticket = {
		searchData:{
		  "ticketId":"",
		  "year":"",
		  "month":""
		},
		searchCheckData:{
		  "ticketId":"",
		  "companyName":"",
		  "year":"",
		  "month":""
		},
		searchBalanceData:{
		  "ticketId":"",
		  "companyName":"",
		  "year":"",
		  "startMonth":"",
		  "endMonth":""

		},
		listTicket:function(pageNo,ticketId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialTicket.do?method=listSumFcTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+pageNo+"&ticketId="+ticketId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.companyNameListNew = JSON.parse(data.companyNameListNew);
						Ticket.searchData={
								ticketId:ticketId,
                            	year:year,
                            	month:month,
                        };
						data.yearList = yearList
	                    data.monthList = monthList
	                    data.searchParam = Ticket.searchData
						var html = listTemplate(data);
						addTab(menuKey,"票务账务",html);
						//搜索按钮事件
						 $("#" + tabId + " .btn-ticket-search").click(function(){
	                        	Ticket.searchData = {
	                        			ticketId:$("#" + tabId + " select[name=ticketId]").val(),
	                                	year:$("#" + tabId + "  select[name=year]").val(),
	                                	month:$("#" + tabId + " select[name=month]").val(),
	                            }
	                            Ticket.listTicket(0,Ticket.searchData.ticketId,Ticket.searchData.year,Ticket.searchData.month);
	                      });
	                        //分页--首页按钮事件
	                        $("#" + tabId + " .pageMode a.first").click(function(){
	                        	Ticket.listTicket(0,Ticket.searchData.ticketId,Ticket.searchData.year,Ticket.searchData.month);
	                        });
	                        //分页--上一页事件
	                        $("#" + tabId + " .pageMode a.previous").click(function(){
	                            var previous = data.pageNo - 1;
	                            if(data.pageNo == 0){
	                                previous = 0;
	                            }
	                            Ticket.listTicket(previous,Ticket.searchData.ticketId,Ticket.searchData.year,Ticket.searchData.month);
	                        });
	                        //分页--下一页事件
	                        $("#" + tabId + " .pageMode a.next").click(function(){
	                            var next =  data.pageNo + 1;
	                            if(data.pageNo == data.totalPage-1){
	                                next = data.pageNo ;
	                            }
	                            Ticket.listTicket(next,Ticket.searchData.ticketId,Ticket.searchData.year,Ticket.searchData.month);
	                        });
	                        //分页--尾页事件
	                        $("#" + tabId + " .pageMode a.last").click(function(){
	                        	 Ticket.listTicket(data.totalPage == 0 ? data.totalPage:data.totalPage-1,Ticket.searchData.ticketId,Ticket.searchData.year,Ticket.searchData.month);
	                        });
	                        //给对账按钮绑定事件
	                        $("#" + tabId + "  .btn-ticket-check").click(function(){
	                        	Ticket.searchCheckData={
	                            		ticketId:$(this).attr("data-entity-id"),
	                            		companyName:$(this).attr("data-entity-companyName"),
	                            		year:$(this).attr("data-entity-year"),
	                            		month:$(this).attr("data-entity-month")        
	                            }
	                        	Ticket.ticketCheckList(0,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
	                        });
	                        //给结算按钮绑定事件
	                        $("#" + tabId + " .btn-ticket-balance").click(function(){
	                            Ticket.searchBalanceData={
	                                	"ticketId":$(this).attr("data-entity-id"),
	                                	"companyName":$(this).attr("data-entity-companyName"),
	                                	"year":$(this).attr("data-entity-year"),
	                                	"startMonth":$(this).attr("data-entity-startMonth"),
	                                	"endMonth":$(this).attr("data-entity-endMonth")
	                             }
	                            Ticket.ticketBalanceList(0,Ticket.searchBalanceData.ticketId,Ticket.searchBalanceData.companyName,Ticket.searchBalanceData.year,Ticket.searchBalanceData.startMonth,Ticket.searchBalanceData.endMonth);
	                        });
						
					}
				}
			});
		},
	    //票务对账处理
		ticketCheckList:function(pageNo,ticketId,companyName,year,month){
	    	 $.ajax({
	    		 url:""+APP_ROOT+"back/financial/financialTicket.do?method=listFcTicket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	             type:"POST",
	             data:"pageNo="+pageNo+"&ticketId="+ticketId+"&year="+year+"&month="+month+"&sortType=auto",
	             dataType:"json",
	             beforeSend:function(){
	                 globalLoadingLayer = openLoadingLayer();
	             },
	             success:function(data){
	            	 
	            	//表单验证
	            	 var $obj = $(".ticketChecking .form-horizontal"); 
	            	 
	                layer.close(globalLoadingLayer);
	                var result = showDialog(data);
	                 if(result){
	                 	 data.financialTicketList = JSON.parse(data.financialTicketList);
	                 	    Ticket.searchCheckData={
		                 	    ticketId:ticketId,
		                 	    companyName:companyName,
	                      		year:year,
	                      		month:month        
                            }
		                    data.yearList = yearList
		                    data.monthList = monthList
		                    data.companyName = companyName
		                    data.searchParam = Ticket.searchCheckData  
	                     var html = ticketChecking(data);
	                     addTab(checkTabId,"票务对账",html);
	                     
	                     //设置表单验证
	                     var validator = rule.check($('.ticketChecking'));  
	                 }           
		                 //给搜索按钮绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
	                         Ticket.searchCheckData={
	                            ticketId:ticketId,
	                            companyName:companyName,
	                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
	                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
	                         }
	                         Ticket.ticketCheckList(0,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
	                     });
		                 //导出事件btn-ticketExport
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-ticketExport").click(function(){
		                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
	                      	 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
	                      	 checkLogin(function(){
	                         	var url = ""+APP_ROOT+"back/export.do?method=ticket&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&ticketId="+ticketId+"&companyName="+companyName+"&year="+year+"&month="+month+"&sortType=auto";
	                         	exportXLS(url)
	                         });
		                 });
	                    //分页--首页按钮事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
		                	 Ticket.ticketCheckList(0,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
		                 });
						//分页--上一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Ticket.ticketCheckList(previous,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
		                 });
						//分页--下一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Ticket.ticketCheckList(next,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
		                 });
						//分页--尾页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
		                	Ticket.ticketCheckList(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
		                 });
			             //给全选绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .ticket-selectAll").click(function(){
			                	 var flag = this.checked;
			                	 $(".ticketChecking .all tbody tr").each(function(){
			                		 var checkedbox = $(this).find(".ticketFinancial")
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
			                 $("#" +"tab-"+ checkTabId+"-content"+" .ticketFinancial").click(function(){
			                	 var flag = true
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .ticketFinancial").each(function(){
			                		 if(!$(this).prop("checked")){
				                			flag = false;
				                		} 
			                	 })
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .ticket-selectAll").prop("checked",flag)
			                 });
		                 //给确认对账按钮绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-ticketFinancial-checking").click(function(){
			                	// 表单校验
			                	 if (!validator.form()) { return; } 
			                	 
			                   var JsonStr = [],
			                       oldUnPayedMoney,
			                       newUnPayedMoney,
			                       oldRemark,
			                       newRemark,
		                	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
		                	   $tr.each(function(i){
		                		   var flag = $(this).find(".ticketFinancial").is(":checked");
		                		   if(flag){
		                			   if($(this).attr("data-entity-isConfirmAccount") == 1){
		                				   //取值用于是否修改对账判断
		                				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
		                				   oldRemark = $(this).attr("data-entity-remark");
		                				   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialticketRealUnPayedMoney]").val();
		                				   newRemark = $tr.eq(i).find("input[name=FinancialticketRemark]").val();
		                				   //判断是否是修改对账
		                				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
		                					   var checkData = {
				                					   id:$(this).attr("data-entity-id"),
				                					   ticketId:ticketId,
				                					   companyName:companyName,
				                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
				                					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialticketRealUnPayedMoney]").val(),
				                					   remark:$tr.eq(i).find("input[name=FinancialticketRemark]").val(),
				                					   isConfirmAccount:1
				                			   }
		                					   JsonStr.push(checkData)
		                				   }
		                			   }else{
		                				   var checkData = {
			                					   id:$(this).attr("data-entity-id"),
			                					   ticketId:ticketId,
			                					   companyName:companyName,
			                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
			                					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialticketRealUnPayedMoney]").val(),
			                					   remark:$tr.eq(i).find("input[name=FinancialticketRemark]").val(),
			                					   isConfirmAccount:1
			                			   }
		                				   JsonStr.push(checkData)
		                			   }
		                		   }else{
		                			   if($(this).attr("data-entity-isConfirmAccount") == 1){
		                				   var checkData = {
			                					   id:$(this).attr("data-entity-id"),
			                					   ticketId:ticketId,
			                					   companyName:companyName,
			                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
			                					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialticketRealUnPayedMoney]").val(),
			                					   remark:$tr.eq(i).find("input[name=FinancialticketRemark]").val(),
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
			                	   //return
			                	   $.ajax({
			                		   url:""+APP_ROOT+"back/financial/financialTicket.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
			                           type:"POST",
			                           data:"financialTicketListStr="+encodeURIComponent(JsonStr),
			                           dataType:"json",
			                           beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
							                	Ticket.ticketCheckList(0,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
											}
										}
			                	   });
		                	   }
		                	   
		                      })
		                 //给查看单据绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .ticketImg").click(function(){
		                	 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
		                	 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
		                	 Ticket.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
		                 });
			             //取消按钮事件
			             $("#" +"tab-"+ checkTabId+"-content"+" .btn-ticketFinancial-close").click(function(){
			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
			            		 closeTab(checkTabId)
			            	 });
			             });
	             }
	    	 });
	    },
       //票务结算处理
	    ticketBalanceList:function(page,ticketId,companyName,year,startMonth,endMonth){
	    	$.ajax({
                url:""+APP_ROOT+"back/financial/financialTicket.do?method=listFcTicketSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&ticketId="+ticketId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	
                	//表单验证
                	var $obj = $(".ticketFinancialBalancing .form-horizontal");
                	
                   layer.close(globalLoadingLayer);
                   var result = showDialog(data);
                    if(result){
	                    data.yearList = yearList
	                    data.monthList = monthList
	                    data.companyName = companyName
                        var html = ticketClearing(data);
                        addTab(blanceTabId,"票务结算",html);
                      //获取table中的tr
	                    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
	                    //给每个tr添加表单验证
                        $tr.each(function(){
                        	$(this).find('.btn-ticketBlance-save').data('validata', rule.check($(this)));
                        });
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                            Ticket.searchBalanceData={
                                ticketId:ticketId,
                                companyName:companyName,
                            	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                            	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                            	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            Ticket.ticketBalanceList(0,Ticket.searchBalanceData.ticketId,Ticket.searchBalanceData.companyName,Ticket.searchBalanceData.year,Ticket.searchBalanceData.startMonth,Ticket.searchBalanceData.endMonth);
                        });
                       //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-ticketBlance-save").click(function(){
                        	// 表单校验
                        	if (!$(this).data('validata').form()) { return; }
                        	
                        	var tr = $(this).parent().parent(),
                        	    DataArr = [],
                        		JsonData,
                        		needPayMoney = tr.find("input[name=blancerealPayedMoney]").val();
                        	//判断是否填写付款/收款金额 
                        	if(needPayMoney == null || needPayMoney == ""){
                        		showMessageDialog($( "#confirm-dialog-message" ),"请输入付款金额");
                        		return
                        	}else{
                        		var blanceData = {
                                		id:$(this).attr("data-entity-id"),
                                        ticketId:ticketId,
                                        year:$(this).attr("data-entity-year"),
                                        month:$(this).attr("data-entity-month"),
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
                                		url:""+APP_ROOT+"back/financial/financialTicket.do?method=saveFcTicketSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                                        type:"POST",
                                        data:"fcTicketSettlementStr="+JsonData,
                                        dataType:"json",
                                        beforeSend:function(){
                                            globalLoadingLayer = openLoadingLayer();
                                        },
                                        success:function(data){
                                        	layer.close(globalLoadingLayer);
                                            var result = showDialog(data);
                                            if(result){
                                            	showMessageDialog($( "#confirm-dialog-message" ),data.message);
        										Ticket.ticketBalanceList(0,Ticket.searchBalanceData.ticketId,Ticket.searchBalanceData.companyName,Ticket.searchBalanceData.year,Ticket.searchBalanceData.startMonth,Ticket.searchBalanceData.endMonth);
                                            }
                                        }
                                	})
                        	}
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-ticketBlance-checkDetail").click(function(){
                        	Ticket.searchCheckData={
                        			ticketId:ticketId,
                        			companyName:companyName,
                        			year:$(this).attr("data-entity-year"),
                        			month:$(this).attr("data-entity-month"),
                        	}
                        	Ticket.ticketCheckList(0,Ticket.searchCheckData.ticketId,Ticket.searchCheckData.companyName,Ticket.searchCheckData.year,Ticket.searchCheckData.month)
                        });
                        
                      //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-ticketBlance-Records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financial/financialTicket.do?method=listFcTicketSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"ticketId="+ticketId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialTicketSettlementRecordList.length == 0){
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
	    }
	}
	exports.listTicket = Ticket.listTicket;
});
