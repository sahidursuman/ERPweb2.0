define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_scenic",
        listTemplate = require("./view/list"),
        ScenicClearing = require("./view/ScenicClearing"),
        listScenicChecking = require("./view/ScenicChecking"),
        billImagesTemplate = require("./view/lookBillsImg"),
        blanceRecords = require("./view/ScenicRecords"),
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
    var Scenic = {
        searchData:{
            "scenicId":"",
            "year":"",
            "month":""
        },
        searchCheckData:{
        	"scenicId":"",
        	"scenicName":"",
        	"year":"",
        	"month":""
        },
        searchBalanceData:{
        	"scenicId":"",
            "scenicName":"",
        	"year":"",
        	"startMonth":"",
        	"endMonth":""
        },
        listScenic:function(pageNo,scenicId,year,month){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialScenic.do?method=listSumFcScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&scenicId="+scenicId+"&year="+year+"&month="+month+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	 layer.close(globalLoadingLayer);
                	 var result = showDialog(data);
                     if(result){
                         data.yearList = yearList;
                         data.monthList = monthList;
                         Scenic.searchData={
                             scenicId:scenicId,
                             year:year,
                             month:month
                         };
                         data.scenicNameListNew = JSON.parse(data.scenicNameListNew);
                         data.searchParam = Scenic.searchData;
                         var html = listTemplate(data);
                         addTab(menuKey,"景区账务",html);
                         //搜索按钮事件
                         $("#" + tabId + " .btn-scenic-search").click(function(){
                             Scenic.searchData={
                                 scenicId:$("#" + tabId + " select[name=scenicId]").val(),
                                 year:$("#" + tabId + "  select[name=year]").val(),
                                 month:$("#" + tabId + " select[name=month]").val()
                             }
                             Scenic.listScenic(0,Scenic.searchData.scenicId,Scenic.searchData.year,Scenic.searchData.month);
                         });

                       //分页--首页按钮事件
 						$("#" + tabId + " .pageMode a.first").click(function(){
 							Scenic.listScenic(0,Scenic.searchData.scenicId,Scenic.searchData.year,Scenic.searchData.month);
 						});
 						//分页--上一页事件
 						$("#" + tabId + " .pageMode a.previous").click(function(){
 							var previous = data.pageNo - 1;
 							if(data.pageNo == 0){
 								previous = 0;
 							}
 							Scenic.listScenic(previous,Scenic.searchData.scenicId,Scenic.searchData.year,Scenic.searchData.month);
 						});
 						//分页--下一页事件
 						$("#" + tabId + " .pageMode a.next").click(function(){
 							var next =  data.pageNo + 1;
 							if(data.pageNo == data.totalPage-1){
 								next = data.pageNo ;
 							}
 							Scenic.listScenic(next,Scenic.searchData.scenicId,Scenic.searchData.year,Scenic.searchData.month);
 						});
 						//分页--尾页事件
 						$("#" + tabId + " .pageMode a.last").click(function(){
 							Scenic.listScenic(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Scenic.searchData.scenicId,Scenic.searchData.year,Scenic.searchData.month);
 						});
                         //给对账按钮绑定事件
                         $("#" + tabId + " .btn-scenic-Check").click(function(){
                        	 Scenic.searchCheckData={
                        			 scenicId:$(this).attr("data-entity-id"),
                        			 scenicName:$(this).attr("data-entity-scenicName"),
                             		 year:$(this).attr("data-entity-year"),
                             		 month:$(this).attr("data-entity-month")        
                            }
                            Scenic.ScenicChecking(0,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month);
                         });
                         //给结算按钮绑定事件
                         $("#" + tabId + " .btn-scenic-balance").click(function(){
                        	 Scenic.searchBalanceData={
                             	"scenicId":$(this).attr("data-entity-id"),
                                "scenicName":$(this).attr("data-entity-scenicName"),
                             	"year":$(this).attr("data-entity-year"),
                             	"startMonth":$(this).attr("data-entity-startMonth"),
                             	"endMonth":$(this).attr("data-entity-endMonth")
                             },
                             Scenic.ScenicClearing(Scenic.searchBalanceData.scenicId,Scenic.searchBalanceData.scenicName,Scenic.searchBalanceData.year,Scenic.searchBalanceData.startMonth,Scenic.searchBalanceData.endMonth);
                         });
                     }
                }
            });
        },
        //结算
        ScenicClearing:function(scenicId,scenicName,year,startMonth,endMonth){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialScenic.do?method=listFcScenicSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"scenicId="+scenicId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	Scenic.searchData={
                                "scenicId":scenicId,
                                "scenicName":scenicName,
                                "startMonth":startMonth,
                                "endMonth":endMonth,
                                "year":year
                        };
                    	data.yearList = yearList;
                        data.monthList = monthList;
                        data.scenicName = scenicName;
                        var html = ScenicClearing(data);
                        addTab(blanceTabId,"景区结算",html);
                        //设置表单验证
                    	var validator;
                    	 //获取table中的tr
	                    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
	                    //给每个tr添加表单验证
                        $tr.each(function(){
                        	$(this).find('.btn-scenicBlance-save').data('validata', rule.check($(this)));
                        });
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                        	Scenic.searchBalanceData={
                            	scenicId:scenicId,
                            	scenicName:scenicName,
                            	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                            	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                            	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            
                            Scenic.ScenicClearing(Scenic.searchBalanceData.scenicId,Scenic.searchBalanceData.scenicName,Scenic.searchBalanceData.year,Scenic.searchBalanceData.startMonth,Scenic.searchBalanceData.endMonth);
                        });
                        
                      //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-scenicBlance-save").click(function(){
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
                                		scenicId:scenicId,
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
                                		url:""+APP_ROOT+"back/financial/financialScenic.do?method=saveFcScenicSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                                        type:"POST",
                                        data:"fcScenicSettlementStr="+JsonData,
                                        dataType:"json",
                                        beforeSend:function(){
                                            globalLoadingLayer = openLoadingLayer();
                                        },
                                        success:function(data){
                                        	layer.close(globalLoadingLayer);
                                            var result = showDialog(data);
                                            if(result){
                                            	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                                            	Scenic.ScenicClearing(Scenic.searchBalanceData.scenicId,Scenic.searchBalanceData.scenicName,Scenic.searchBalanceData.year,Scenic.searchBalanceData.startMonth,Scenic.searchBalanceData.endMonth);
                                            }
                                        }
                                	})
                        	}
                        	
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-scenicBlance-checkDetail").click(function(){
                        	Scenic.searchCheckData={
                        			scenicId:scenicId,
                        			scenicName:scenicName,
                        			year:$(this).attr("data-entity-year"),
                        			month:$(this).attr("data-entity-month"),
                        	}
                        	Scenic.ScenicChecking(0,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month);
                        });

                      //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-scenicBlance-Records").click(function(){
                        	$.ajax({
                        		url:""+APP_ROOT+"back/financial/financialScenic.do?method=listFcScenicSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                                type:"POST",
                                data:"scenicId="+scenicId,
                                dataType:"json",
                                beforeSend:function(){
                                    globalLoadingLayer = openLoadingLayer();
                                },
                                success:function(data){
                                	
                                	layer.close(globalLoadingLayer);
                                    var result = showDialog(data);
                                	if(result){
                                		if(data.financialScenicSettlementRecordList.length == 0){
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
            })   
        },
        //对账
        ScenicChecking:function(pageNo,scenicId,scenicName,year,month){ 
	    	 $.ajax({
	    		 url:""+APP_ROOT+"back/financial/financialScenic.do?method=listFcScenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	             type:"POST",
	             data:"pageNo="+pageNo+"&scenicId="+scenicId+"&year="+year+"&month="+month+"&sortType=auto",
	             dataType:"json",
	             beforeSend:function(){
	                 globalLoadingLayer = openLoadingLayer();
	             },
	             success:function(data){
	            	 
	            	//表单验证
	            	 var $obj = $('.ScenicChecking .form-horizontal');
	            	 
	                layer.close(globalLoadingLayer);
	                var result = showDialog(data);
	                if(result){
   
	                 	    Scenic.searchCheckData={
                       		scenicId:scenicId,
                       		scenicName:scenicName,
                       		year:year,
                       		month:month        
                           }
		                    data.yearList = yearList
		                    data.monthList = monthList
		                    data.scenicName = scenicName
		                    data.financialScenicList = JSON.parse(data.financialScenicList);
		                    data.searchParam = Scenic.searchCheckData 
		                    var html = listScenicChecking(data);
		                    addTab(checkTabId,"景区对账",html);
	                     //设置表单验证
		                    var validator = rule.check($('.ScenicChecking'));
	                 }          
		                 //给搜索按钮绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
	                         Scenic.searchCheckData={
	                            scenicId:scenicId,
	                            scenicName:scenicName,
	                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
	                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
	                         }
	                         Scenic.ScenicChecking(0,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
	                     });
		               //导出事件btn-scenicExport
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-scenicExport").click(function(){

	   	                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
	                         var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
	                         console.log(year);
	                         checkLogin(function(){
	                         	var url = ""+APP_ROOT+"back/export.do?method=scenic&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&scenicId="+scenicId+"&scenicName="+scenicName+"&year="+year+"&month="+month+"&sortType=auto";
	                         	exportXLS(url)
	                         });
	   	                 
	                        });
	                    //分页--首页按钮事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
		                	 Scenic.ScenicChecking(0,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
		                 });
						//分页--上一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Scenic.ScenicChecking(previous,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
		                 });
						//分页--下一页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Scenic.ScenicChecking(next,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
		                 });
						//分页--尾页事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
		                	Scenic.ScenicChecking(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
		                 });
			             //给全选绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .scenicSelectAll").click(function(){
			                	 var flag = this.checked;
			                	 $(".restChecking .all tbody tr").each(function(){
			                		 var checkedbox = $(this).find(".scenicFinancial") 
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
			                 $("#" +"tab-"+ checkTabId+"-content"+" .scenicFinancial").click(function(){
			                	 var flag = true
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .scenicFinancial").each(function(){
			                		 if(!$(this).prop("checked")){
				                			flag = false;
				                		} 
			                	 })
			                	 $("#" +"tab-"+ checkTabId+"-content"+" .scenicSelectAll").prop("checked",flag)
			                 });
		                 //给确认对账按钮绑定事件
			                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-scenicFinancial-checking").click(function(){
			                	 
			                	// 表单校验
						    		if (!validator.form()) { return; }
			                	 
			                   var JsonStr = [],
			                       oldUnPayedMoney,
			                       newUnPayedMoney,
			                       oldRemark,
			                       newRemark,
		                	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
		                	   $tr.each(function(i){
		                		   var flag = $(this).find(".scenicFinancial").is(":checked"),
		                		   	   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialScenicRealUnPayedMoney]").val(),
                				       newRemark = $tr.eq(i).find("input[name=FinancialScenicRemark]").val();
		                		   if(flag){
		                			   if($(this).attr("data-entity-isConfirmAccount") == 1){
		                				   //取值用于是否修改对账判断
		                				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
		                				   oldRemark = $(this).attr("data-entity-remark");
		                				  
		                				   //判断是否是修改对账
		                				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
		                					   var checkData = {
				                					   id:$(this).attr("data-entity-id"),
				                					   scenicId:scenicId,
				                					   scenicName:scenicName,
				                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
				                					   realUnPayedMoney:newUnPayedMoney,
				                					   remark:newRemark,
				                					   isConfirmAccount:1
				                			   }
		                					   JsonStr.push(checkData)
		                				   }
		                			   }else{
		                				   var checkData = {
			                					   id:$(this).attr("data-entity-id"),
			                					   scenicId:scenicId,
			                					   scenicName:scenicName,
			                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
			                					   realUnPayedMoney:newUnPayedMoney,
			                					   remark:newRemark,
			                					   isConfirmAccount:1
			                			   }
		                				   JsonStr.push(checkData)
		                			   }
		                		   }else{
		                			   if($(this).attr("data-entity-isConfirmAccount") == 1){
		                				   var checkData = {
			                					   id:$(this).attr("data-entity-id"),
			                					   scenicId:scenicId,
			                					   scenicName:scenicName,
			                					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
			                					   realUnPayedMoney:newUnPayedMoney,
			                					   remark:newRemark,
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
			                		   url:""+APP_ROOT+"back/financial/financialScenic.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
			                           type:"POST",
			                           data:"financialScenicListStr="+encodeURIComponent(JsonStr),
			                           dataType:"json",
			                           beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												showMessageDialog($( "#confirm-dialog-message" ),data.message);
												Scenic.ScenicChecking(0,Scenic.searchCheckData.scenicId,Scenic.searchCheckData.scenicName,Scenic.searchCheckData.year,Scenic.searchCheckData.month)
											}
										}
			                	   });
		                	   }
		                	   
		                      })
		                 //给查看单据绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .scenicLookBillsImg").click(function(){
		                	 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
		                	 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
		                	 Scenic.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
		                 });
						 //关闭按钮事件
						 $("#" +"tab-"+ checkTabId+"-content"+" .btn-scenicFinancial-close").click(function(){
							 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
								 closeTab(checkTabId)
							 });
						 });
					 //给全选绑定事件
					 $("#" +"tab-"+ checkTabId+"-content"+" .scenicSelectAll").click(function(){
						 var flag = this.checked;
						 $(".ScenicChecking .all tbody tr").each(function(){
							 var checkedbox = $(this).find(".scenicFinancial");
							 if(flag){
								 checkedbox.prop("checked",true);
							 }else{
								 //判断对账状态
								 if(checkedbox.attr("data-entity-isConfirmAccount-scenic") == 1){
									 checkedbox.prop("checked",true);
								 }else{
									 checkedbox.prop("checked",false);
								 }
							 }
						 });
					 });
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
    exports.listScenic = Scenic.listScenic;
});
