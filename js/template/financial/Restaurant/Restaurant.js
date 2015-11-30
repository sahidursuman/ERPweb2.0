define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_restaurant",
        listTemplate = require("./view/list"),
        billImageTempLate = require("./view/billImages"),
        restaurantChecking = require("./view/restaurantChecking"),
        restaurantClearing = require("./view/restaurantClearing"),
        blanceRecords = require("./view/restaurantRecords"),
        exportInfo = require("./view/restaurantExportInfo"),
        tabId = "tab-"+menuKey+"-content",
        checkTabId = menuKey+"-checking",
        blanceTabId = menuKey+"-blance",
        yearList=[],
        monthList = []
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    }
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }
    var Restaurant = {
        searchData:{
			page : "",
        	restaurantId : "",
        	year : "",
        	month : ""
        },
        searchCheckData:{
        	"restaurantId":"",
        	"restaurantName":"",
        	"year":"",
        	"month":""
        },
        searchBalanceData:{
        	"restaurantId":"",
            "restaurantName":"",
        	"year":"",
        	"startMonth":"",
        	"endMonth":""
        },
        /**/
        edited : {},
		isEdited : function(editedType){
			if(!!Restaurant.edited[editedType] && Restaurant.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckRestaurantId : 0,
        oldBlanceRestaurantId : 0,
        listRestaurant:function(page,restaurantId,year,month){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=listSumFcRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&restaurantId="+restaurantId+"&year="+year+"&month="+month+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                   layer.close(globalLoadingLayer);
                   var result = showDialog(data);
                    if(result){
                    	data.restaurantNameListNew = JSON.parse(data.restaurantNameListNew);
	                    Restaurant.searchData={
							page : page,
							restaurantId:restaurantId,
							year:year,
							month:month
                        }
	                    data.yearList = yearList
	                    data.monthList = monthList
	                    data.searchParam = Restaurant.searchData
	                    
                        var html = listTemplate(data);
                        addTab(menuKey,"餐厅账务",html);
                        //搜索按钮事件
                        $("#" + tabId + " .btn-restaurant-search").click(function(){
                            Restaurant.searchData={
                                restaurantId:$("#" + tabId + " select[name=restaurantId]").val(),
                            	year:$("#" + tabId + "  select[name=year]").val(),
                            	month:$("#" + tabId + " select[name=month]").val(),
                            }
                            Restaurant.listRestaurant(0,Restaurant.searchData.restaurantId,Restaurant.searchData.year,Restaurant.searchData.month);
                        });
                        // 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		Restaurant.listRestaurant(obj.curr -1,Restaurant.searchData.restaurantId,Restaurant.searchData.year,Restaurant.searchData.month);
								}
						    }
						});
                      
                        //给对账按钮绑定事件
						$("#" + tabId + " .btn-divide").click(function(){
							Restaurant.searchCheckData={
                        		restaurantId:$(this).attr("data-entity-id"),
                        		restaurantName:$(this).attr("data-entity-restaurantName"),
                        		year:$(this).attr("data-entity-year"),
                        		month:$(this).attr("data-entity-month")        
                            }
                            Restaurant.restaurantCheckList(0,Restaurant.searchCheckData.restaurantId,Restaurant.searchCheckData.restaurantName,Restaurant.searchCheckData.year,Restaurant.searchCheckData.month)
                        });
                        //给结算按钮绑定事件
						$("#" + tabId + " .btn-balance").click(function(){
                            Restaurant.searchBalanceData={
                            	"restaurantId":$(this).attr("data-entity-id"),
                            	"restaurantName":$(this).attr("data-entity-restaurantName"),
                            	"year":$(this).attr("data-entity-year"),
                            	"startMonth":$(this).attr("data-entity-startMonth"),
                            	"endMonth":$(this).attr("data-entity-endMonth")
                            }
                            Restaurant.restaurantBalanceList(0,Restaurant.searchBalanceData.restaurantId,Restaurant.searchBalanceData.restaurantName,Restaurant.searchBalanceData.year,Restaurant.searchBalanceData.startMonth,Restaurant.searchBalanceData.endMonth);
                        });
                    }
                }
           });
        },    
		//餐厅对账处理 
		restaurantCheckList:function(page,restaurantId,restaurantName,year,month){ 
	    	$.ajax({
	    		 url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=listFcRestaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	             type:"POST",
	             data:"pageNo="+page+"&restaurantId="+restaurantId+"&year="+year+"&month="+month+"&sortType=auto",
	             dataType:"json",
	             beforeSend:function(){
	                 globalLoadingLayer = openLoadingLayer();
	             },
	             success:function(data){
	            	//表单验证
	            	var $obj = $(".restChecking .form-horizontal");
	                layer.close(globalLoadingLayer);
	                var result = showDialog(data);
	                 if(result){
	                 	data.financialRestaurantList = JSON.parse(data.financialRestaurantList);
						Restaurant.searchCheckData={
							restaurantId:restaurantId,
							restaurantName:restaurantName,
							year:year,
							month:month        
						}
						data.yearList = yearList
						data.monthList = monthList
						data.restaurantName = restaurantName
						data.searchParam = Restaurant.searchCheckData  
						var html = restaurantChecking(data);
					    //addTab(checkTabId,"餐厅对账",html);
						var validator;
						//addTab(checkTabId,"餐厅对账",html);
					    if($("#" +"tab-"+checkTabId+"-content").length > 0)  {
							 if(!!Restaurant.edited["checking"] && Restaurant.edited["checking"] != ""){
								addTab(checkTabId,"餐厅对账");
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									 validator = rule.check($('.restChecking'));
									 if (!validator.form()) { return; }
									 Restaurant.saveCheckingData(Restaurant.oldCheckRestaurantId,restaurantName,0)
									 Restaurant.edited["checking"] = "";
									 addTab(checkTabId,"餐厅对账",html);
									 validator = rule.check($('.restChecking'));
								},function(){
									 addTab(checkTabId,"餐厅对账",html);
									 Restaurant.edited["checking"] = "";
									 validator = rule.check($('.restChecking'));
								});
							}else{
								addTab(checkTabId,"餐厅对账",html);
								validator = rule.check($('.restChecking'));
							}
						}else{
							addTab(checkTabId,"餐厅对账",html);
							validator = rule.check($('.restChecking'));
							
						}

						//取消对账权限过滤
                 	    var checkList = data.financialRestaurantList;
	                    var checkTr = $(".T-checkList tr");
	                    var rightCode = $(".T-checkList").data("right");
	                    checkDisabled(checkList,checkTr,rightCode);
		                    
						$("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
							Restaurant.edited["checking"] = "checking";
							Restaurant.oldCheckRestaurantId = restaurantId;
						});
	                   //给搜索按钮绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
	                         Restaurant.searchCheckData={
	                            restaurantId:restaurantId,
	                            restaurantName:restaurantName,
	                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
	                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
	                         }
	                         Restaurant.restaurantCheckList(0,Restaurant.searchCheckData.restaurantId,Restaurant.searchCheckData.restaurantName,Restaurant.searchCheckData.year,Restaurant.searchCheckData.month)
	                     });
		               //导出报表btn-restaurantExport
			             $("#" +"tab-"+ checkTabId+"-content"+" .btn-restaurantExport").click(function(){
 	                         var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
	                         var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
	                        /**/
	                        checkLogin(function(){
	                        	var url = ""+APP_ROOT+"back/export.do?method=restaurant&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&restaurantId="+restaurantId+"&restaurantName="+restaurantName+"&year="+year+"&month="+month+"&sortType=auto";
	                        	exportXLS(url)
	                        });
	                       
			             });
			             // 绑定翻页组件
						laypage({
						    cont: $("#tab-"+checkTabId+"-content").find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		Restaurant.restaurantCheckList(obj.curr -1,Restaurant.searchCheckData.restaurantId,Restaurant.searchCheckData.restaurantName,Restaurant.searchCheckData.year,Restaurant.searchCheckData.month)
		                		}
						    }
						});
	                   
			             //给全选绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").click(function(){
			                	 var flag = this.checked;
			                	 $(".restChecking .all tbody tr").each(function(){
			                		 var checkedbox = $(this).find(".restaurantFinancial") 
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
			                 $("#" +"tab-"+ checkTabId+"-content"+" .restaurantFinancial").click(function(){
			                		 var flag = true
				                	 $(this).each(function(){
				                		 if(!$(this).prop("checked")){
					                			flag = false;
					                		} 
				                	 })
				                	 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").prop("checked",flag)
			                 });
		                 //给确认对账按钮绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-restaurantFinancial-checking").click(function(){
			                	 if (!validator.form()) { return; }
			            		 Restaurant.saveCheckingData(restaurantId,restaurantName,0)
			                 })
		                 //给查看单据绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .restaurantImg").click(function(){
		                	 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
		                	 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
		                	 Restaurant.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
		                 });
			             //关闭按钮事件
			             $("#" +"tab-"+ checkTabId+"-content"+" .btn-restaurantFinancial-close").click(function(){
			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
			            		 closeTab(checkTabId);
								 Restaurant.edited["checking"] = "";
			            	 });
			             });
			             
	                 }          
		                 
	             }
	    	 });
	    },
	    //餐厅结算处理
	    restaurantBalanceList:function(page,restaurantId,restaurantName,year,startMonth,endMonth){
	    	$.ajax({
                url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=listFcRestaurantSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&restaurantId="+restaurantId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
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
	                    data.restaurantName = restaurantName
                        var html = restaurantClearing(data);
	                    if($("#" +"tab-"+blanceTabId+"-content").length > 0)
	             	    {
	             	    	 if(!!Restaurant.edited["blance"] && Restaurant.edited["blance"] != ""){
	             	    		addTab(blanceTabId,"餐厅结算");
			                    //给每个tr添加表单验证
	             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	             	    			 Restaurant.validatorTable()
	             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-save")
	             	    			 if (!$(saveBtn).data('validata').form()) { return; }
	             	    			 Restaurant.saveBlanceData(Restaurant.oldBlanceRestaurantId,restaurantName,0)
				            		 Restaurant.edited["blance"] = "";
				            		 addTab(blanceTabId,"餐厅结算",html);
				            		 Restaurant.validatorTable();
				            	 },function(){
				            		    addTab(blanceTabId,"餐厅结算",html);
				            		    Restaurant.edited["blance"] = "";
				            		    Restaurant.validatorTable();
				            	 });
	             	    	 }else{
	                 	    	addTab(blanceTabId,"餐厅结算",html);
	                 	    	Restaurant.validatorTable();
	             	    	 }
	         	    		 
	             	    }else{
	             	    	addTab(blanceTabId,"餐厅结算",html);
	             	    	Restaurant.validatorTable();
	             	    };
	             	   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
	             		    Restaurant.edited["blance"] = "blance";
	             		    Restaurant.oldBlanceRestaurantId = restaurantId;
	    	    			$(this).closest('tr').data('blanceStatus',true);
	    	    		});
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                            Restaurant.searchBalanceData={
                                restaurantId:restaurantId,
                                restaurantName:restaurantName,
                            	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                            	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                            	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            
                            Restaurant.restaurantBalanceList(0,Restaurant.searchBalanceData.restaurantId,Restaurant.searchBalanceData.restaurantName,Restaurant.searchBalanceData.year,Restaurant.searchBalanceData.startMonth,Restaurant.searchBalanceData.endMonth);
                        });
                       //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-save").click(function(){
         	    			 if (!$(this).data('validata').form()) { return; }
         	    			 Restaurant.saveBlanceData(Restaurant.oldBlanceRestaurantId,restaurantName,0)
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-checkDetail").click(function(){
                        	Restaurant.searchCheckData={
                        			restaurantId:restaurantId,
                        			restaurantName:restaurantName,
                        			year:$(this).attr("data-entity-year"),
                        			month:$(this).attr("data-entity-month"),
                        	}
                        	Restaurant.restaurantCheckList(0,Restaurant.searchCheckData.restaurantId,Restaurant.searchCheckData.restaurantName,Restaurant.searchCheckData.year,Restaurant.searchCheckData.month)
                        });

                      //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-Records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=listFcRestaurantSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"restaurantId="+restaurantId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialRestaurantSettlementRecordList.length == 0){
                                			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                                		}else{
                                			var html =blanceRecords(data);
            					    		var blanceRecordsTemplateLayer =layer.open({
            					    			type: 1,
            								    title:"操作记录",
            								    skin: 'layui-layer-rim', //加上边框
            								    area: '60%', //宽高
            								    zIndex:1030,
            								    content: html,
            								    scrollbar: false, // 推荐禁用浏览器外部滚动条
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
 	    	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
            //给每个tr添加表单验证
            $tr.each(function(){
            	$(this).find('.btn-restaurantBlance-save').data('validata', rule.check($(this)));
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
	    	var html = billImageTempLate(data);
	    	
			layer.open({
				type : 1,
				title : "单据图片",
				skin : 'layui-layer-rim', // 加上边框
				area : '500px', // 宽高
				zIndex : 1028,
				content : html,
				scrollbar: false, // 推荐禁用浏览器外部滚动条
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
	    //对账数据保存
	    saveCheckingData:function(restaurantId,restaurantName,isClose){
			console.log("save");
           var JsonStr = [],
               oldUnPayedMoney,
               newUnPayedMoney,
               oldRemark,
               newRemark,
    	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
    	   $tr.each(function(i){
    		   var flag = $(this).find(".restaurantFinancial").is(":checked");
    		   if(flag){
    			   if($(this).attr("data-entity-isConfirmAccount") == 1){
    				   //取值用于是否修改对账判断
    				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
    				   oldRemark = $(this).attr("data-entity-remark");
    				   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialRestaurantRealUnPayedMoney]").val();
    				   newRemark = $tr.eq(i).find("input[name=FinancialRestaurantRemark]").val();
    				   //判断是否是修改对账
    				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
    					   var checkData = {
            					   id:$(this).attr("data-entity-id"),
            					   restaurantId:restaurantId,
            					   restaurantName:restaurantName,
            					   consumeStartTime:$tr.eq(i).find("td[name=consumeStartTime]").text(),
            					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialRestaurantRealUnPayedMoney]").val(),
            					   remark:$tr.eq(i).find("input[name=FinancialRestaurantRemark]").val(),
            					   isConfirmAccount:1
            			   }
    					   JsonStr.push(checkData)
    				   }
    			   }else{
    				   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   restaurantId:restaurantId,
        					   restaurantName:restaurantName,
        					   consumeStartTime:$tr.eq(i).find("td[name=consumeStartTime]").text(),
        					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialRestaurantRealUnPayedMoney]").val(),
        					   remark:$tr.eq(i).find("input[name=FinancialRestaurantRemark]").val(),
        					   isConfirmAccount:1
        			   }
    				   JsonStr.push(checkData)
    			   }
    		   }else{
    			   if($(this).attr("data-entity-isConfirmAccount") == 1){
    				   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   restaurantId:restaurantId,
        					   restaurantName:restaurantName,
        					   consumeStartTime:$tr.eq(i).find("td[name=consumeStartTime]").text(),
        					   realUnPayedMoney:$tr.eq(i).find("input[name=FinancialRestaurantRealUnPayedMoney]").val(),
        					   remark:$tr.eq(i).find("input[name=FinancialRestaurantRemark]").val(),
        					   isConfirmAccount:0
        			   } 
    				   JsonStr.push(checkData)
    			   }
    		   }
		    });
    	   if(JsonStr.length == 0){
    		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
    		   return
    	   }else{
    		   JsonStr = JSON.stringify(JsonStr);
        	   $.ajax({
        		   url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                   type:"POST",
                   data:"financialRestaurantListStr="+encodeURIComponent(JsonStr),
                   dataType:"json",
                   beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
							Restaurant.edited["checking"] = "";
							if(isClose == 1){
								closeTab(checkTabId);
								Restaurant.listRestaurant(Restaurant.searchData.page,Restaurant.searchData.restaurantId,Restaurant.searchData.year,Restaurant.searchData.month);
							} else {
								Restaurant.restaurantCheckList(0,Restaurant.searchCheckData.restaurantId,Restaurant.searchCheckData.restaurantName,Restaurant.searchCheckData.year,Restaurant.searchCheckData.month);
							}
						}
					}
        	   });
    	   }
          },
          //结算数据保存
          saveBlanceData:function(restaurantId,restaurantName,isClose){
  	    	var $tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr"),
  	    	DataArr = [],
  		    JsonData;
  	    	$tr.each(function(i){
				if($(this).data('blanceStatus')){
					var blanceData = {
						id:$(this).attr("data-entity-id"),
						restaurantId:restaurantId,
						year:$(this).attr("data-entity-year"),  
						month:$(this).attr("data-entity-month"),
						realPayedMoney:$tr.eq(i).find("td[name=blancerealrealPayedMoney]").text(),
						unPayedMoney:$tr.eq(i).find("td[name=blanceunPayedMoney]").text(),
						realUnPayedMoney:$tr.eq(i).find("td[name=blancerealrealUnPayedMoney]").text(),
						payMoney:$tr.eq(i).find("input[name=blancerealPayedMoney]").val(),
						payType:$tr.eq(i).find("select[name=blancePayType]").val(),
						remark:$tr.eq(i).find("input[name=blancerealRemark]").val()
					}
					 DataArr.push(blanceData)
				}
			})
  	    	JsonData = JSON.stringify(DataArr)
  	    	$.ajax({
        		url:""+APP_ROOT+"back/financial/financialRestaurant.do?method=saveFcRestaurantSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"fcRestaurantSettlementStr="+JsonData,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                    	Restaurant.edited["blance"] = "";
						if(isClose == 1){
							closeTab(blanceTabId);
							Restaurant.listRestaurant(Restaurant.searchData.page,Restaurant.searchData.restaurantId,Restaurant.searchData.year,Restaurant.searchData.month);
						} else {
							Restaurant.restaurantBalanceList(0,Restaurant.searchBalanceData.restaurantId,Restaurant.searchBalanceData.restaurantName,Restaurant.searchBalanceData.year,Restaurant.searchBalanceData.startMonth,Restaurant.searchBalanceData.endMonth);
						}
                    }
                }
        	})
  		
        },
		save : function(saveType){
			if(saveType == "checking"){
				Restaurant.saveCheckingData(Restaurant.oldCheckRestaurantId,"",1);
			} else if(saveType == "blance"){
				Restaurant.saveBlanceData(Restaurant.oldBlanceRestaurantId,"",1);
			}
		},
		clearEdit : function(clearType){
			Restaurant.edited[clearType] = "";
		}
    }
    exports.listRestaurant = Restaurant.listRestaurant;
	exports.isEdited = Restaurant.isEdited;
	exports.save = Restaurant.save;
	exports.clearEdit = Restaurant.clearEdit;
});
