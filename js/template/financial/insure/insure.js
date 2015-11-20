define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    blanceRecords = require("./view/insuranceRecords"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
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
	var Insure = {
		searchData:{
			pageNo : "",
	    	insuranceId : "",
	    	year : "",
	    	month : ""
	    },
	    searchCheckData:{
	    	"insuranceId":"",
	    	"insuranceCompanyName":"",
	    	"year":"",
	    	"month":""
	    },
	    searchBalanceData:{
	    	"insuranceId":"",
	        "insuranceCompanyName":"",
	    	"year":"",
	    	"startMonth":"",
	    	"endMonth":""
	    },//back/financial/financialHotel.do
	    edited : {},
		isEdited : function(editedType){
			if(!!Insure.edited[editedType] && Insure.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckInsuranceId:0,
        oldBlanceInsuranceId:0,
		listInsure:function(pageNo,insuranceId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialInsurance.do?method=listSumFcInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+pageNo+"&insuranceId="+insuranceId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						Insure.searchData={
							pageNo : pageNo,
					    	insuranceId:insuranceId,
					    	year:year,
					    	month:month
					    },
						data.insuranceCompanyNameListNew = JSON.parse(data.insuranceCompanyNameListNew);
						data.searchParam = Insure.searchData
						data.yearList = yearList
	                    data.monthList = monthList
						var html = listTemplate(data);
						addTab(menuKey,"保险财务",html);
						//搜索按钮事件
                        $("#" + tabId + " .btn-insurance-search").click(function(){
                        	Insure.searchData={
                                insuranceId:$("#" + tabId + " select[name=insuranceId]").val(),
                            	year:$("#" + tabId + "  select[name=year]").val(),
                            	month:$("#" + tabId + " select[name=month]").val(),
                            }
                            Insure.listInsure(0,Insure.searchData.insuranceId,Insure.searchData.year,Insure.searchData.month);
                        });

                        // 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		Insure.listInsure(obj.curr -1,Insure.searchData.insuranceId,Insure.searchData.year,Insure.searchData.month);
								}
						    }
						});
                      
						//给对账按钮绑定事件
						$("#tab-"+menuKey+"-content  .btn-insurance-check").click(function(){
							Insure.searchCheckData={
	                        		insuranceId:$(this).attr("data-entity-id"),
	                        		insuranceCompanyName:$(this).attr("data-entity-insuranceCompanyName"),
	                        		year:$(this).attr("data-entity-year"),
	                        		month:$(this).attr("data-entity-month")        
	                            }
	                        Insure.insuranceCheckList(0,Insure.searchCheckData.insuranceId,Insure.searchCheckData.insuranceCompanyName,Insure.searchCheckData.year,Insure.searchCheckData.month)
						});
						////给结算按钮绑定事件
						$("#tab-"+menuKey+"-content  .btn-insurance-balance").click(function(){
							Insure.searchBalanceData={
	                            	"insuranceId":$(this).attr("data-entity-id"),
	                            	"insuranceCompanyName":$(this).attr("data-entity-insuranceCompanyName"),
	                            	"year":$(this).attr("data-entity-year"),
	                            	"startMonth":$(this).attr("data-entity-startMonth"),
	                            	"endMonth":$(this).attr("data-entity-endMonth")
	                            	}
	                        Insure.insuranceBalanceList(0,Insure.searchBalanceData.insuranceId,Insure.searchBalanceData.insuranceCompanyName,Insure.searchBalanceData.year,Insure.searchBalanceData.startMonth,Insure.searchBalanceData.endMonth);
						});
					}
				}
			});
		},
        //保险票务对账处理
		insuranceCheckList:function(page,insuranceId,insuranceCompanyName,year,month){ 
    	 $.ajax({
    		 url:""+APP_ROOT+"back/financial/financialInsurance.do?method=listFcInsurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
             type:"POST",
             data:"pageNo="+page+"&insuranceId="+insuranceId+"&year="+year+"&month="+month+"&sortType=auto",
             dataType:"json",
             beforeSend:function(){
                 globalLoadingLayer = openLoadingLayer();
             },
             success:function(data){
            	 
            	//表单验证
            	 var $obj = $(".insuranceChecking .form-horizontal"); 
            	 
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                 if(result){
                 	 data.financialInsuranceList = JSON.parse(data.financialInsuranceList);
                 	    Insure.searchCheckData={
                    		insuranceId:insuranceId,
                    		insuranceCompanyName:insuranceCompanyName,
                    		year:year,
                    		month:month        
                        }
	                    data.yearList = yearList
	                    data.monthList = monthList
	                    data.insuranceCompanyName = insuranceCompanyName
	                    data.searchParam = Insure.searchCheckData  
	                    var html = insuranceChecking(data);
                 	    var validator;
                 	    //addTab(checkTabId,"保险对账",html);
                 	   if($("#" +"tab-"+checkTabId+"-content").length > 0)
                	    {
                	    	
                	    	 if(!!Insure.edited["checking"] && Insure.edited["checking"] != ""){
                	    		addTab(checkTabId,"保险对账");
                	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
                	    			 validator = rule.check($('.insuranceChecking'));
				            		 if (!validator.form()) { return; }
				            		 Insure.saveCheckingData(insuranceId,insuranceCompanyName,0)
				            		 Insure.edited["checking"] = "";
				            		 addTab(checkTabId,"保险对账",html);
				            		 validator = rule.check($('.insuranceChecking'));
				            	 },function(){
				            		 addTab(checkTabId,"保险对账",html);
				            		 Insure.edited["checking"] = "";
				            		 validator = rule.check($('.insuranceChecking'));
				            	 });
                	    	 }else{
	                 	    	addTab(checkTabId,"保险对账",html);
	                 	        validator = rule.check($('.insuranceChecking'));
                	    	 }
         	    		 
                	    }else{
                	    	addTab(checkTabId,"保险对账",html);
                	    	validator = rule.check($('.insuranceChecking'));
                	    	
                	    }

                	    //取消对账权限过滤
                 	    var checkList = data.financialInsuranceList;
	                    var checkTr = $(".T-checkList tr");
	                    var rightCode = $(".T-checkList").data("right");
	                    checkDisabled(checkList,checkTr,rightCode);
	                    
                	    $("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
            	    		Insure.edited["checking"] = "checking"; 
							Insure.oldCheckInsuranceId = insuranceId;
            	    	});
                 }          
	                 //给搜索按钮绑定事件
	                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
                         Insure.searchCheckData={
                            insuranceId:insuranceId,
                            insuranceCompanyName:insuranceCompanyName,
                         	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
                         	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
                         }
                         Insure.insuranceCheckList(0,Insure.searchCheckData.insuranceId,Insure.searchCheckData.insuranceCompanyName,Insure.searchCheckData.year,Insure.searchCheckData.month)
                     });
                    //保险导出事件btn-insureExport
	                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-insureExport").click(function(){
	                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
                      	 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
                      	 console.log(year);
                      	checkLogin(function(){
	                        	var url = ""+APP_ROOT+"back/export.do?method=insurance&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&insuranceId="+insuranceId+"&insuranceCompanyName="+insuranceCompanyName+"&year="+year+"&month="+month+"&sortType=auto";
	                        	exportXLS(url)
	                        });
	                 });

	                 // 绑定翻页组件
					laypage({
					    cont: $("#tab-"+ checkTabId+"-content").find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		Insure.insuranceCheckList(obj.curr -1,Insure.searchCheckData.insuranceId,Insure.searchCheckData.insuranceCompanyName,Insure.searchCheckData.year,Insure.searchCheckData.month)
	                 		}
					    }
					});
                   
		             //给全选绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").click(function(){
		                	 var flag = this.checked;
		                	 $(".insuranceChecking .all tbody tr").each(function(){
		                		 var checkedbox = $(this).find(".insuanceFinancial") 
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
		                 $("#" +"tab-"+ checkTabId+"-content"+" .insuanceFinancial").click(function(){
		                	 var flag = true
		                	 $("#" +"tab-"+ checkTabId+"-content"+" .insuanceFinancial").each(function(){
		                		 if(!$(this).prop("checked")){
			                			flag = false;
			                		} 
		                	 })
		                	 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").prop("checked",flag)
		                 });
	                 //给确认对账按钮绑定事件
		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-insuanceFinancial-checking").click(function(){
		            		 if (!validator.form()) { return; }
		            		 Insure.saveCheckingData(insuranceId,insuranceCompanyName,0);
		                 })
	                 //给查看单据绑定事件
	                 $("#" +"tab-"+ checkTabId+"-content"+" .insuanceImg").click(function(){
	                	 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
	                	 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//小图
	                	 console.log(WEB_IMG_URL_SMALL);
	                	 Insure.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
	                 });
		             //关闭按钮事件
		             $("#" +"tab-"+ checkTabId+"-content"+" .btn-insuanceFinancial-close").click(function(){
		            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
		            		 closeTab(checkTabId);
							 Insure.edited["checking"] = "";
		            	 });
		             });
             }
    	 });
    },
    //保险公司结算处理
    insuranceBalanceList:function(page,insuranceId,insuranceCompanyName,year,startMonth,endMonth){
    	$.ajax({
            url:""+APP_ROOT+"back/financial/financialInsurance.do?method=listFcInsuranceSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
            type:"POST",
            data:"pageNo="+page+"&insuranceId="+insuranceId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
            dataType:"json",
            beforeSend:function(){
                globalLoadingLayer = openLoadingLayer();
            },
            success:function(data){
               layer.close(globalLoadingLayer);    
               var result = showDialog(data);
                if(result){
                	Insure.searchBalanceData={
                            insuranceId:insuranceId,
                            insuranceCompanyName:insuranceCompanyName,
                        	year:year,
                        	startMonth:startMonth,
                        	endMonth:endMonth,
                        }
                    data.yearList = yearList
                    data.monthList = monthList
                    data.insuranceCompanyName = insuranceCompanyName
                    var html = insureClearing(data);
                    //addTab(blanceTabId,"保险结算",html);
                    //设置表单验证
                  //获取table中的tr
                    
                    if($("#" +"tab-"+blanceTabId+"-content").length > 0)
             	    {
             	    	
             	    	 if(!!Insure.edited["blance"] && Insure.edited["blance"] != ""){
             	    		addTab(blanceTabId,"保险结算");
		                    //给每个tr添加表单验证
             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
             	    			//获取table中的tr
             	    			var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
                                //给每个tr添加表单验证
                                $tr.each(function(){
                                	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
                                });
             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-save")
             	    			 if (!$(saveBtn).data('validata').form()) { return; }
             	    			 Insure.saveBlanceData(saveBtn,Insure.oldBlanceInsuranceId,insuranceCompanyName,0)
			            		 Insure.edited["blance"] = "";
			            		 addTab(blanceTabId,"保险结算",html);
			            		//获取table中的tr
			            		 var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
			                     //给每个tr添加表单验证
			                     $tr.each(function(){
			                     	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
			                     });
			            	 },function(){
			            		    addTab(blanceTabId,"保险结算",html);
			            		    Insure.edited["blance"] = "";
			            		 	//获取table中的tr
			            		    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
			                        //给每个tr添加表单验证
			                        $tr.each(function(){
			                        	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
			                        });
			            	 });
             	    	 }else{
                 	    	addTab(blanceTabId,"保险结算",html);
                 	    	//获取table中的tr
                 	    	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
                            //给每个tr添加表单验证
                            $tr.each(function(){
                            	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
                            });
             	    	 }
         	    		 
             	    }else{
             	    	addTab(blanceTabId,"保险结算",html);
             	    	//获取table中的tr
             	    	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
                        //给每个tr添加表单验证
                        $tr.each(function(){
                        	$(this).find('.btn-hotelBlance-save').data('validata', rule.check($(this)));
                        });
             	    };
             	   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
             		   	Insure.edited["blance"] = "blance";
             		  	Insure.oldBlanceInsuranceId = insuranceId;
    	    			$(this).closest('tr').data('blanceStatus',true);
    	    		});
                    //搜索按钮事件
                    $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                        Insure.searchBalanceData={
                            insuranceId:insuranceId,
                            insuranceCompanyName:insuranceCompanyName,
                        	year:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=year]").val(),
                        	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                        	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                        }
                        Insure.insuranceBalanceList(0,Insure.searchBalanceData.insuranceId,Insure.searchBalanceData.insuranceCompanyName,Insure.searchBalanceData.year,Insure.searchBalanceData.startMonth,Insure.searchBalanceData.endMonth);
                    });
                   //保存按钮事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-save").click(function(){
                    	var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-save")
    	    			 if (!$(this).data('validata').form()) { return; }
    	    			 Insure.saveBlanceData($(this),Insure.oldBlanceInsuranceId,insuranceCompanyName,0);
                    	/*// 表单校验
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
                                    insuranceId:insuranceId,
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
                            		url:""+APP_ROOT+"back/financial/financialInsurance.do?method=saveFcInsuranceSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                                    type:"POST",
                                    data:"fcInsuranceSettlementStr="+JsonData,
                                    dataType:"json",
                                    beforeSend:function(){
                                        globalLoadingLayer = openLoadingLayer();
                                    },
                                    success:function(data){
                                    	layer.close(globalLoadingLayer);
                                        var result = showDialog(data);
                                        if(result){
                                        	showMessageDialog($( "#confirm-dialog-message" ),data.message);
        									Insure.insuranceBalanceList(0,Insure.searchBalanceData.insuranceId,Insure.searchBalanceData.insuranceCompanyName,Insure.searchBalanceData.year,Insure.searchBalanceData.startMonth,Insure.searchBalanceData.endMonth);
                                        }
                                    }
                            	})
                    	}*/
                    	
                    	//
                    });
                    //对账明细按钮事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-checkDetail").click(function(){
                    	Insure.searchCheckData={
                    			insuranceId:insuranceId,
                    			insuranceCompanyName:insuranceCompanyName,
                    			year:$(this).attr("data-entity-year"),
                    			month:$(this).attr("data-entity-month"),
                    	}
                    	Insure.insuranceCheckList(0,Insure.searchCheckData.insuranceId,Insure.searchCheckData.insuranceCompanyName,Insure.searchCheckData.year,Insure.searchCheckData.month)
                    });

                  //给操作记录按钮绑定事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-Records").click(function(){
                    	$.ajax({
                    		url:""+APP_ROOT+"back/financial/financialInsurance.do?method=listFcInsuranceSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                            type:"POST",
                            data:"insuranceId="+insuranceId,
                            dataType:"json",
                            beforeSend:function(){
                                globalLoadingLayer = openLoadingLayer();
                            },
                            success:function(data){
                            	
                            	layer.close(globalLoadingLayer);
                                var result = showDialog(data);
                            	if(result){
                            		if(data.financialInsuranceSettlementRecordList.length == 0){
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
			area :'500px', // 宽高
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
    //处理对账数据
    saveCheckingData:function(insuranceId,insuranceCompanyName,isClose){
       var JsonStr = [],
           oldUnPayedMoney,
           newUnPayedMoney,
           oldRemark,
           newRemark,
	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
	   $tr.each(function(i){
		   var flag = $(this).find(".insuanceFinancial").is(":checked");
		   if(flag){
			   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialinsuanceRealUnPayedMoney]").val();
			   newRemark = $tr.eq(i).find("input[name=FinancialinsuanceRemark]").val();
			   if($(this).attr("data-entity-isConfirmAccount") == 1){
				   //取值用于是否修改对账判断
				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
				   oldRemark = $(this).attr("data-entity-remark");
				   //newUnPayedMoney = $tr.eq(i).find("input[name=FinancialinsuanceRealUnPayedMoney]").val();
				   //newRemark = $tr.eq(i).find("input[name=FinancialinsuanceRemark]").val();
				   //判断是否是修改对账
				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
					   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   insuranceId:insuranceId,
        					   insuranceCompanyName:insuranceCompanyName,
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
    					   insuranceId:insuranceId,
    					   insuranceCompanyName:insuranceCompanyName,
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
    					   insuranceId:insuranceId,
    					   insuranceCompanyName:insuranceCompanyName,
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
		   /*return*/
    	   $.ajax({
    		   url:""+APP_ROOT+"back/financial/financialInsurance.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
               type:"POST",
               data:"financialInsuranceListStr="+encodeURIComponent(JsonStr),
               dataType:"json",
               beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						Insure.edited["checking"] = "";
						if(isClose == 1){
							closeTab(checkTabId);
							Insure.listInsure(Insure.searchData.pageNo,Insure.searchData.insuranceId,Insure.searchData.year,Insure.searchData.month);
						} else{
							Insure.insuranceCheckList(0,Insure.searchCheckData.insuranceId,Insure.searchCheckData.insuranceCompanyName,Insure.searchCheckData.year,Insure.searchCheckData.month);
						}
					}
				}
    	   });
	   }
	   
      },
      saveBlanceData:function(saveBtn,insuranceId,insuranceCompanyName,isClose){
	    	var $tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr"),
	    	DataArr = [],
		    JsonData;
	    	$tr.each(function(i){
          		if($(this).data('blanceStatus')){
          			var blanceData = {
    		        		id:$(this).find(".btn-hotelBlance-save").attr("data-entity-id"),
    		                insuranceId:insuranceId,
    		                year:$(this).find(".btn-hotelBlance-save").attr("data-entity-year"),
    		                month:$(this).find(".btn-hotelBlance-save").attr("data-entity-month"),
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
        		url:""+APP_ROOT+"back/financial/financialInsurance.do?method=saveFcInsuranceSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"fcInsuranceSettlementStr="+JsonData,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
						Insure.edited["blance"] = "";
						if(isClose == 1){
							closeTab(blanceTabId);
							Insure.listInsure(Insure.searchData.pageNo,Insure.searchData.insuranceId,Insure.searchData.year,Insure.searchData.month);
						} else{
							Insure.insuranceBalanceList(0,Insure.searchBalanceData.insuranceId,Insure.searchBalanceData.insuranceCompanyName,Insure.searchBalanceData.year,Insure.searchBalanceData.startMonth,Insure.searchBalanceData.endMonth);
						}
                    }
                }
        	})
		},
		save : function(saveType){
			console.log(saveType);
			if(saveType == "checking"){
				Insure.saveCheckingData(Insure.oldCheckInsuranceId,"",1);
			} else if(saveType == "blance"){
				 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-hotelBlance-save")
				Insure.saveBlanceData(saveBtn,Insure.oldBlanceInsuranceId,"",1);
			}
		},
		clearEdit : function(clearType){
			Insure.edited[clearType] = "";
		}
	}
	exports.listInsure = Insure.listInsure;
	exports.isEdited = Insure.isEdited;
	exports.save = Insure.save;
	exports.clearEdit = Insure.clearEdit;
});
