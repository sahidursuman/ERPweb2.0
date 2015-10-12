define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_rummery",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    hotelChecking = require("./view/hotelChecking"),
	    hotelClearing = require("./view/hotelClearing"),
	    blanceRecords = require("./view/hotelRecords"),
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
    var Hotel = {
        searchData:{
           "hotelId":"",
            "year":"",
            "month":""
        },
        searchCheckData:{
            "hotelId":"",
            "hotelName":"",
            "year":"",
            "month":""
        },
        searchBalanceData:{
            "hotelId":"",
            "hotelName":"",
            "year":"",
            "startMonth":"",
            "endMonth":""
        },
        edited:false,
        blanceEdited:false,
        listHotel:function(page,hotelId,year,month){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialHotel.do?method=listSumFcHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&hotelId="+hotelId+"&year="+year+"&month="+month+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	data.hotelNameListNew = JSON.parse(data.hotelNameListNew);
                    	Hotel.searchData = {
                            	hotelId:hotelId,
                            	year:year,
                            	month:month
                        }
                    	data.yearList = yearList;
                        data.monthList = monthList;
                        data.searchParam = Hotel.searchData;
                        var html = listTemplate(data);
                        addTab(menuKey,"酒店账务",html);
                        //搜索按钮事件
                        $("#" + tabId + " .btn-financialHotel-search").click(function(){
                        	Hotel.searchData = {
                                	hotelId:$("#" + tabId + " select[name=hotelId]").val(),
                                	year:$("#" + tabId + "  select[name=year]").val(),
                                	month:$("#" + tabId + " select[name=month]").val(),
                            }
                            Hotel.listHotel(0,Hotel.searchData.hotelId,Hotel.searchData.year,Hotel.searchData.month);
                        });

                        //分页--首页按钮事件
                        $("#" + tabId + " .pageMode a.first").click(function(){
                        	Hotel.listHotel(0,Hotel.searchData.hotelId,Hotel.searchData.year,Hotel.searchData.month);
                        });
                        //分页--上一页事件
                        $("#" + tabId + " .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            Hotel.listHotel(previous,Hotel.searchData.hotelId,Hotel.searchData.year,Hotel.searchData.month);
                        });
                        //分页--下一页事件
                        $("#" + tabId + " .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            Hotel.listHotel(next,Hotel.searchData.hotelId,Hotel.searchData.year,Hotel.searchData.month);
                        });
                        //分页--尾页事件
                        $("#" + tabId + " .pageMode a.last").click(function(){
                        	 Hotel.listHotel(data.totalPage == 0 ? data.totalPage:data.totalPage-1,Hotel.searchData.hotelId,Hotel.searchData.year,Hotel.searchData.month);
                        });
                        //给对账按钮绑定事件
                        $("#" + tabId + "  .btn-financialHotel-check").click(function(){
                        	Hotel.searchCheckData={
                            		hotelId:$(this).attr("data-entity-id"),
                            		hotelName:$(this).attr("data-entity-hotelName"),
                            		year:$(this).attr("data-entity-year"),
                            		month:$(this).attr("data-entity-month")        
                            }
                        	Hotel.hotelCheckList(0,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
                        });
                        //给结算按钮绑定事件
                        $("#" + tabId + "  .btn-financialHotel-balance").click(function(){
                            Hotel.searchBalanceData={
                                	"hotelId":$(this).attr("data-entity-id"),
                                	"hotelName":$(this).attr("data-entity-hotelName"),
                                	"year":$(this).attr("data-entity-year"),
                                	"startMonth":$(this).attr("data-entity-startMonth"),
                                	"endMonth":$(this).attr("data-entity-endMonth")
                                }
                            Hotel.hotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
                        });
                    }

                }

            });
        },
        //酒店对账处理
        hotelCheckList:function(pageNo,hotelId,hotelName,year,month){
	    	 $.ajax({
	    		 url:""+APP_ROOT+"back/financial/financialHotel.do?method=listFcHotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	             type:"POST",
	             data:"pageNo="+pageNo+"&hotelId="+hotelId+"&year="+year+"&month="+month+"&sortType=auto",
	             dataType:"json",
	             beforeSend:function(){
	                 globalLoadingLayer = openLoadingLayer();
	             },
	             success:function(data){
	            	 
	            	 //表单验证
	            	 var $obj = $(".hotelChecking .form-horizontal"); 
	            	 
	                layer.close(globalLoadingLayer);
	                var result = showDialog(data);
	                 if(result){
	                 	 data.financialHotelList = JSON.parse(data.financialHotelList);
	                 	    Hotel.searchCheckData={
	                 	    hotelId:hotelId,
	                 	    hotelName:hotelName,
                       		year:year,
                       		month:month        
                           }
		                    data.yearList = yearList
		                    data.monthList = monthList
		                    data.hotelName = hotelName
		                    data.searchParam = Hotel.searchCheckData  
	                     var html = hotelChecking(data);
	                     //addTab(checkTabId,"酒店对账",html);
	                   //判断页面是否存在
	                 	    if($("#" +"tab-"+checkTabId+"-content").length > 0)
	                 	    {
	                 	    	
	                 	    	 if(Hotel.edited){
	                 	    		addTab(checkTabId,"酒店对账");
	                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	                 	    			 validator = rule.check($('.hotelChecking'));
					            		 if (!validator.form()) { return; }
					            		 Hotel.saveCheckingData(hotelId,hotelName)
					            		 Hotel.edited = false;
					            		 addTab(checkTabId,"酒店对账",html);
					            		 validator = rule.check($('.hotelChecking'));
					            	 },function(){
					            		 addTab(checkTabId,"酒店对账",html);
					            		 validator = rule.check($('.hotelChecking'));
					            	 });
	                 	    	 }else{
		                 	    	addTab(checkTabId,"酒店对账",html);
		                 	        validator = rule.check($('.hotelChecking'));
	                 	    	 }
              	    		 
	                 	    }else{
	                 	    	addTab(checkTabId,"酒店对账",html);
	                 	    	validator = rule.check($('.hotelChecking'));
	                 	    	$("#" +"tab-"+checkTabId+"-content").on("change",function(){
	                 	    		Hotel.edited = true; 
	                 	    	});
	                 	    };
	                 }          
		                 //给搜索按钮绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
	                         Hotel.searchCheckData={
	                            hotelId:hotelId,
	                            hotelName:hotelName,
	                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
	                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
	                         }
	                         Hotel.hotelCheckList(0,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
	                     });
                        //酒店导出事件btn-hotelExport
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-hotelExport").click(function(){
		                	    var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
	                         	var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
	                         	checkLogin(function(){
	                         		var url = ""+APP_ROOT+"back/export.do?method=hotel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&hotelId="+hotelId+"&hotelName="+hotelName+"&year="+year+"&month="+month+"&sortType=auto"
	 	                        	exportXLS(url)
	 	                        });
		                 });
	                    //分页--首页按钮事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
		                	 Hotel.hotelCheckList(0,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
		                 });
						//分页--上一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Hotel.hotelCheckList(previous,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
		                 });
						//分页--下一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Hotel.hotelCheckList(next,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
		                 });
						//分页--尾页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
		                	Hotel.hotelCheckList(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
		                 });
			             //给全选绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .hotel-selectAll").click(function(){
			                	 var flag = this.checked;
			                	 $(".hotelChecking .all tbody tr").each(function(){
			                		 var checkedbox = $(this).find(".hotelFinancial")
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
			                 $("#" +"tab-"+ checkTabId+"-content"+" .hotelFinancial").click(function(){
			                	 var flag = true
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .hotelFinancial").each(function(){
			                		 if(!$(this).prop("checked")){
				                			flag = false;
				                		} 
			                	 })
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .hotel-selectAll").prop("checked",flag)
			                 });
		                 //给确认对账按钮绑定事件  Hotel.saveCheckingData(hotelId,hotelName)
			                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-hotelFinancial-checking").click(function(){
			                	 if (!validator.form()) { return; }
			                	 Hotel.saveCheckingData(hotelId,hotelName)
		                      })
		                 //给查看单据绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .hotelImg").click(function(){
		                	 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
		                	 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
		                	 Hotel.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
		                 });
			             //取消按钮事件
			             $("#" +"tab-"+ checkTabId+"-content"+" .btn-hotelFinancial-close").click(function(){
			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
			            		 closeTab(checkTabId)
			            	 });
			             });
	             }
	    	 });
	    },
	    //酒店帐务结算处理
	    hotelBalanceList:function(pageNo,hotelId,hotelName,year,startMonth,endMonth){
	    	$.ajax({
                url:""+APP_ROOT+"back/financial/financialHotel.do?method=listFcHotelSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&hotelId="+hotelId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	
                	var $obj = $(".hotelFinancialBalancing .form-horizontal");
                	
                   layer.close(globalLoadingLayer);
                   var result = showDialog(data);
                    if(result){
	                    data.yearList = yearList
	                    data.monthList = monthList
	                    data.hotelName = hotelName
                        var html = hotelClearing(data);
                        addTab(blanceTabId,"酒店结算",html);
                        
                      //获取table中的tr
	                    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
	                    //给每个tr添加表单验证
                        $tr.each(function(){
                        	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
                        });
                        
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                            Hotel.searchBalanceData={
                                hotelId:hotelId,
                                hotelName:hotelName,
                            	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                            	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                            	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            Hotel.hotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
                        });
                       //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-save").click(function(){
                        	
                        	// 表单校验
                        	if (!$(this).data('validata').form()) { return; }
                        	
                        	var tr = $(this).parent().parent(),
                        	    DataArr = [],
                        	    JsonData,
                        		needPayMoney = tr.find("input[name=blancerealPayedMoney]").val();
                        	if(needPayMoney == null || needPayMoney == ""){
                        		showMessageDialog($( "#confirm-dialog-message" ),"请输入付款金额");
                        		return
                        	}else{
                        		var blanceData = {
                                		id:$(this).attr("data-entity-id"),
                                        hotelId:hotelId,
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
                                		url:""+APP_ROOT+"back/financial/financialHotel.do?method=saveFcHotelSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                                        type:"POST",
                                        data:"fcHotelSettlementStr="+JsonData,
                                        dataType:"json",
                                        beforeSend:function(){
                                            globalLoadingLayer = openLoadingLayer();
                                        },
                                        success:function(data){
                                        	layer.close(globalLoadingLayer);
                                            var result = showDialog(data);
                                            if(result){
                                            	showMessageDialog($( "#confirm-dialog-message" ),data.message);
        			                            Hotel.hotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
                                            }
                                        }
                                	})
                        	}
                        	
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-checkDetail").click(function(){
                        	Hotel.searchCheckData={
                        			hotelId:hotelId,
                        			hotelName:hotelName,
                        			year:$(this).attr("data-entity-year"),
                        			month:$(this).attr("data-entity-month"),
                        	}
                        	Hotel.hotelCheckList(0,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
                        });
                        

                      //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-Records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financial/financialHotel.do?method=listFcHotelSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"hotelId="+hotelId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialHotelSettlementRecordList.length == 0){
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
							Hotel.HotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
						});
						//分页--上一页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Hotel.HotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
						});
						//分页--下一页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Hotel.HotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
						});
						//分页--尾页事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .pageMode a.last").click(function(){
							Hotel.HotelBalanceList(0,Hotel.searchBalanceData.hotelId,Hotel.searchBalanceData.hotelName,Hotel.searchBalanceData.year,Hotel.searchBalanceData.startMonth,Hotel.searchBalanceData.endMonth);
						});*/
                        
                        
                        //给结算按钮绑定事件
						
                    }
                }
           });
	    },
	    //显示单据
	    viewImage:function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
	    	console.log(imgUrl);
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
	    saveCheckingData:function(hotelId,hotelName){
           var JsonStr = [],
               oldUnPayedMoney,
               newUnPayedMoney,
               oldRemark,
               newRemark,
    	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
    	   $tr.each(function(i){
    		   var flag = $(this).find(".hotelFinancial").is(":checked");
    		   if(flag){
    			   if($(this).attr("data-entity-isConfirmAccount") == 1){
    				   //取值用于是否修改对账判断
    				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
    				   oldRemark = $(this).attr("data-entity-remark");
    				   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialHotelRealUnPayedMoney]").val();
    				   newRemark = $tr.eq(i).find("input[name=FinancialHotelRemark]").val();
    				   //判断是否是修改对账
    				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
    					   var checkData = {
            					   id:$(this).attr("data-entity-id"),
            					   hotelId:hotelId,
            					   hotelName:hotelName,
            					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
            					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialHotelRealUnPayedMoney]").val(),
            					   remark:$tr.eq(i).find("input[name=FinancialHotelRemark]").val(),
            					   isConfirmAccount:1
            			   }
    					   JsonStr.push(checkData)
    				   }
    			   }else{
    				   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   hotelId:hotelId,
        					   hotelName:hotelName,
        					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
        					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialHotelRealUnPayedMoney]").val(),
        					   remark:$tr.eq(i).find("input[name=FinancialHotelRemark]").val(),
        					   isConfirmAccount:1
        			   }
    				   JsonStr.push(checkData)
    			   }
    		   }else{
    			   if($(this).attr("data-entity-isConfirmAccount") == 1){
    				   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   hotelId:hotelId,
        					   hotelName:hotelName,
        					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
        					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialHotelRealUnPayedMoney]").val(),
        					   remark:$tr.eq(i).find("input[name=FinancialHotelRemark]").val(),
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
        		   url:""+APP_ROOT+"back/financial/financialHotel.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                   type:"POST",
                   data:"financialHotelListStr="+encodeURIComponent(JsonStr),
                   dataType:"json",
                   beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
		                	Hotel.hotelCheckList(0,Hotel.searchCheckData.hotelId,Hotel.searchCheckData.hotelName,Hotel.searchCheckData.year,Hotel.searchCheckData.month)
						    Hotel.edited = false;
						}
					}
        	   });
    	   }
          }
    }
    exports.listHotel = Hotel.listHotel;



});
