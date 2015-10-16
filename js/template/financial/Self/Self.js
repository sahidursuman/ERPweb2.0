define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "financial_Self";
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		SelfChecking = require("./view/SelfChecking"),
		SelfClearing = require("./view/SelfClearing"),
		blanceRecords = require("./view/selfPayRecords"),
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
	var Self = {			
		searchData:{
			page : "",
		   "selfPayId":"",
			"year":"",
			"month":""
		}, 
		searchCheckData:{
			"selfPayId":"",
			"hotelName":"",
			"year":"",
			"month":""
		},
		searchBalanceData:{
			"selfPayId":"",
			"selfPayName":"",
			"year":"",
			"startMonth":"",
			"endMonth":""
		},
		edited : {},
		isEdited : function(editedType){
			if(!!Self.edited[editedType] && Self.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckSelfPayId : 0,
		oldBlanceSelfPayId:0,
		listSelf:function(page,selfPayId,year,month){
			$.ajax({
				url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=listSumFcSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&selfPayId="+selfPayId+"&year="+year+"&month="+month+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					
					if(result){
						data.selfPayNameListNew = JSON.parse(data.selfPayNameListNew);
						Self.searchData={
							page : page,
							selfPayId:selfPayId,
	//						var SelfList = data.SelfList;						
							year:year,
							month:month
						}
						data.yearList=yearList,
						data.monthList=monthList,
						data.searchParam=Self.searchData
						var html = listTemplate(data);
						addTab(menuKey,"自费账务",html);

//						
						//搜索按钮事件
						$("#" + tabId + " .btn-selfPay-search").click(function(){
							Self.searchData={
							selfPayId:$("#" + tabId + " select[name=selfPayId]").val(),
							year:$("#" + tabId + " select[name=year]").val(),
							month:$("#" +tabId + " select[name=month]").val()
							}
							Self.listSelf(0,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						});
						//分页--首页按钮事件
						$("#"+ tabId + ".pageMode a.first").click(function(){
							Self.listSelf(0,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						});
						//分页--上一页事件
						$("#"+ tabId + " .pageMode a.previous").click(function(){
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							Self.listSelf(previous,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						});
						//分页--下一页事件
						$("#"+tabId+ " .pageMode a.next").click(function(){
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							Self.listSelf(next,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						});
						//分页--尾页事件
						$("#"+tabId + " .pageMode a.last").click(function(){
							Self.listSelf(data.totalPage == 0 ? data.totalPage: data.totalPage-1,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						});

						//给对账按钮绑定事件
						$("#"+tabId+"  .btn-selfPay-check").click(function(){
							Self.searchCheckData={
							selfPayId:$(this).attr("data-entity-id"),
							selfPayName:$(this).attr("data-entity-selfPayName"),
							year:$(this).attr("data-entity-year"),
							month:$(this).attr("data-entity-month")
							}
                           Self.selfPayCheckList(0,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
						});
						//给结算按钮绑定事件
						$("#"+tabId+"  .btn-self-balance").click(function(){
							Self.searchBalanceData={
									selfPayId:$(this).attr("data-entity-id"),
									selfPayName:$(this).attr("data-entity-selfPayName"),
									year:$(this).attr("data-entity-year"),
									startMonth:$(this).attr("data-entity-startMonth"),
									endMonth:$(this).attr("data-entity-endMonth")
							}
                            Self.selfPayBalanceList(0,Self.searchBalanceData.selfPayId,Self.searchBalanceData.selfPayName,Self.searchBalanceData.year,Self.searchBalanceData.startMonth,Self.searchBalanceData.endMonth);

						});

					}
				}
			});
		},
		//自费对账处理 
        selfPayCheckList:function(page,selfPayId,selfPayName,year,month){
    	 $.ajax({
    		 url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=listFcSelfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
             type:"POST",
             data:"pageNo="+page+"&selfPayId="+selfPayId+"&year="+year+"&month="+month+"&sortType=auto",
             dataType:"json",
             beforeSend:function(){
                 globalLoadingLayer = openLoadingLayer();
             },
             success:function(data){
            	 
            	 //表单验证
            	 var $obj = $(".selfPayChecking .form-horizontal");
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                 if(result){
                 	 data.financialSelfPayList = JSON.parse(data.financialSelfPayList);
					Self.searchCheckData={
						selfPayId:selfPayId,
						selfPayName:selfPayName,
						year:year,
						month:month        
					}
					data.yearList = yearList
					data.monthList = monthList
					data.selfPayName = selfPayName
					data.searchParam = Self.searchCheckData  
				   var html = SelfChecking(data);
				   var validator;
					//addTab(checkTabId,"自费对账",html);
				   if($("#" +"tab-"+checkTabId+"-content").length > 0) {
               	    	 if(!!Self.edited["checking"] && Self.edited["checking"] != ""){
               	    		addTab(checkTabId,"自费对账");
               	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
               	    			 validator = rule.check($('.selfPayChecking'));
				            		 if (!validator.form()) { return; }
				            		 Self.saveCheckingData(selfPayId,selfPayName,0);
				            		 Self.edited["checking"] = "";
				            		 addTab(checkTabId,"自费对账",html);
				            		 validator = rule.check($('.selfPayChecking'));
				            	 },function(){
				            		 addTab(checkTabId,"自费对账",html);
				            		 Self.edited["checking"] = "";
				            		 validator = rule.check($('.selfPayChecking'));
				            	 });
               	    	 }else{
	                 	    	addTab(checkTabId,"自费对账",html);
	                 	        validator = rule.check($('.selfPayChecking'));
               	    	 }
        	    		 
               	    }else{
               	    	addTab(checkTabId,"自费对账",html);
               	    	validator = rule.check($('.selfPayChecking'));
               	    };
           	    	$("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
           	    		Self.edited["checking"] = "checking";
						Self.oldCheckSelfPayId = selfPayId;
						console.log("chenge-checking");
           	    	});
                 }          
				 //给搜索按钮绑定事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
					 Self.searchCheckData={
						selfPayId:selfPayId,  
						selfPayName:selfPayName,
						year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
						month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
					 }
					 Self.selfPayCheckList(0,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
				 });
				 //导出事件btn-selfExport
				 $("#" +"tab-"+ checkTabId+"-content"+" .btn-selfExport").click(function(){

					 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
					 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
					 checkLogin(function(){
							var url = ""+APP_ROOT+"back/export.do?method=selfPay&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&selfPayId="+selfPayId+"&selfPayName="+selfPayName+"&year="+year+"&month="+month+"&sortType=auto";
							exportXLS(url)
						 });
				 });
				//分页--首页按钮事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
					 Self.selfPayCheckList(0,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
				 });
				//分页--上一页事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
					var previous = data.pageNo - 1;
					if(data.pageNo == 0){
						previous = 0;
					}
					Self.selfPayCheckList(previous,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
				 });
				//分页--下一页事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
					var next =  data.pageNo + 1;
					if(data.pageNo == data.totalPage-1){
						next = data.pageNo ;
					}
					Self.selfPayCheckList(next,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
				 });
				//分页--尾页事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
					Self.selfPayCheckList(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
				 });
				 //给全选绑定事件
					 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").click(function(){
						 var flag = this.checked;
						 $(".selfPayChecking .all tbody tr").each(function(){
							 var checkedbox = $(this).find(".selfPayFinancial") 
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
					 $("#" +"tab-"+ checkTabId+"-content"+" .selfPayFinancial").click(function(){
						 var flag = true
						 $("#" +"tab-"+ checkTabId+"-content"+" .selfPayFinancial").each(function(){
							 if(!$(this).prop("checked")){
									flag = false;
								} 
						 })
						 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").prop("checked",flag)
					 });
				 //给确认对账按钮绑定事件
					 $("#" +"tab-"+ checkTabId+"-content"+" .btn-selfPayFinancial-checking").click(function(){
						 if (!validator.form()) { return; }
						 Self.saveCheckingData(selfPayId,selfPayName,0);
					 })
				 //给查看单据绑定事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .selfPayImg").click(function(){
					 var WEB_IMG_URL_BIG = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_BIG]").val();//大图
					 var WEB_IMG_URL_SMALL = $("#" +"tab-"+ checkTabId+"-content").find("input[name=WEB_IMG_URL_SMALL]").val();//大图
					 Self.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
				 });
				 //关闭按钮事件
				 $("#" +"tab-"+ checkTabId+"-content"+" .btn-selfPayFinancial-close").click(function(){
					 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
						 closeTab(checkTabId);
						 Self.edited["checking"] = "";
					 });
				 });
             }
    	 });
    },
    //自费结算处理
    selfPayBalanceList:function(page,selfPayId,selfPayName,year,startMonth,endMonth){
    	$.ajax({
            url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=listFcSelfPaySettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
            type:"POST",
            data:"pageNo="+page+"&selfPayId="+selfPayId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
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
                    data.selfPayName = selfPayName
                    var html = SelfClearing(data);
                  /*//获取table中的tr
                    var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
                    //给每个tr添加表单验证
                    $tr.each(function(){
                    	$(this).find('.btn-selfPayBlance-save').data('validata', rule.check($(this)));
                    });
                    //设置表单验证
                    var validator = rule.check($('.selfPayFinancialBalancing'));*/
                    if($("#" +"tab-"+blanceTabId+"-content").length > 0)
             	    {
             	    	 if(!!Self.edited["blance"] && Self.edited["blance"] != ""){
             	    		addTab(blanceTabId,"自费结算");
		                    //给每个tr添加表单验证
             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
             	    			 Self.validatorTable()
             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-selfPayBlance-save")
             	    			 if (!$(saveBtn).data('validata').form()) { return; }
             	    			 Self.saveBlanceData(Self.oldBlanceSelfPayId,selfPayName,0);
			            		 Self.edited["blance"] = "";
			            		 addTab(blanceTabId,"自费结算",html);
			            		 Self.validatorTable();
			            	 },function(){
			            		    addTab(blanceTabId,"自费结算",html);
			            		    Self.edited["blance"] = "";
			            		    Self.validatorTable();
			            	 });
             	    	 }else{
                 	    	addTab(blanceTabId,"自费结算",html);
                 	    	Self.validatorTable();
             	    	 }
         	    		 
             	    }else{
             	    	addTab(blanceTabId,"自费结算",html);
             	    	Self.validatorTable();
             	    };
             	   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
             		    Self.edited["blance"] = "blance";
             		    Self.oldBlanceSelfPayId = selfPayId;
    	    			$(this).closest('tr').data('blanceStatus',true);
    	    		});
                    
                    //搜索按钮事件
                    $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                        Self.searchBalanceData={
                            selfPayId:selfPayId,
                            selfPayName:selfPayName,
                        	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                        	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                        	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                        }
                        Self.selfPayBalanceList(0,Self.searchBalanceData.selfPayId,Self.searchBalanceData.selfPayName,Self.searchBalanceData.year,Self.searchBalanceData.startMonth,Self.searchBalanceData.endMonth);
                    });
                   //保存按钮事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-selfPayBlance-save").click(function(){
    	    			 if (!$(this).data('validata').form()) { return; }
    	    			 Self.saveBlanceData(Self.oldBlanceSelfPayId,selfPayName,0);
                    });
                    //对账明细按钮事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-selfPayBlance-checkDetail").click(function(){
                    	Self.searchCheckData={
                    			selfPayId:selfPayId,
                    			selfPayName:selfPayName,
                    			year:$(this).attr("data-entity-year"),
                    			month:$(this).attr("data-entity-month"),
                    	}
                    	Self.selfPayCheckList(0,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month)
                    });
                  //给操作记录按钮绑定事件
                    $("#" +"tab-"+ blanceTabId+"-content"+" .btn-selfPayBlance-Records").click(function(){
                    	$.ajax({
                    		url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=listFcSelfPaySettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                            type:"POST",
                            data:"selfPayId="+selfPayId,
                            dataType:"json",
                            beforeSend:function(){
                                globalLoadingLayer = openLoadingLayer();
                            },
                            success:function(data){
                            	
                            	layer.close(globalLoadingLayer);
                                var result = showDialog(data);
                            	if(result){
                            		if(data.financialSelfPaySettlementRecordList.length == 0){
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
  //给每个tr增加验证
    validatorTable:function(){
    	//获取table中的tr
	    	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
        //给每个tr添加表单验证
        $tr.each(function(){
        	$(this).find('.btn-selfPayBlance-save').data('validata', rule.check($(this)));
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
    saveCheckingData:function(selfPayId,selfPayName,isClose){
       var JsonStr = [],
           oldUnPayedMoney,
           newUnPayedMoney,
           oldRemark,
           newRemark,
	       $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
	   $tr.each(function(i){
		   var flag = $(this).find(".selfPayFinancial").is(":checked");
		   if(flag){
			   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialselfPayRealUnPayedMoney]").val();
			   newRemark = $tr.eq(i).find("input[name=FinancialselfPayRemark]").val();
			   if($(this).attr("data-entity-isConfirmAccount") == 1){
				   //取值用于是否修改对账判断
				   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
				   oldRemark = $(this).attr("data-entity-remark");
				   //newUnPayedMoney = $tr.eq(i).find("input[name=FinancialselfPayRealUnPayedMoney]").val();
				   //newRemark = $tr.eq(i).find("input[name=FinancialselfPayRemark]").val();
				   //判断是否是修改对账
				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
					   var checkData = {
        					   id:$(this).attr("data-entity-id"),
        					   selfPayId:selfPayId,
        					   selfPayName:selfPayName,
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
    					   selfPayId:selfPayId,
    					   selfPayName:selfPayName,
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
    					   selfPayId:selfPayId,
    					   selfPayName:selfPayName,
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
    		   url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
               type:"POST",
               data:"financialSelfPayListStr="+encodeURIComponent(JsonStr),
               dataType:"json",
               beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);  
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						Self.edited["checking"] = "";
						if(isClose == 1){
							closeTab(checkTabId);
							Self.listSelf(Self.searchData.page,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
						} else{
							Self.selfPayCheckList(0,Self.searchCheckData.selfPayId,Self.searchCheckData.selfPayName,Self.searchCheckData.year,Self.searchCheckData.month);
						}
					}
				}
    	   });
	   }
    },
    //结算处理
    saveBlanceData:function(selfPayId,selfPayName,isClose){

      	//console.log($obj+"-------");
      	var DataArr = [],
			JsonData,
      	$tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
      	// 表单校验
      	//if (saveBtn.data('validata').form()) { return; }
      	$tr.each(function(i){
      		if($(this).data('blanceStatus')){
      			var blanceData = {
                		id:$(this).attr("data-entity-id"),
                        selfPayId:selfPayId,
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
    		url:""+APP_ROOT+"back/financial/financialSelfPay.do?method=saveFcSelfPaySettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
            type:"POST",
            data:"fcSelfPaySettlementStr="+JsonData,
            dataType:"json",
            beforeSend:function(){
                globalLoadingLayer = openLoadingLayer();
            },
            success:function(data){
            	layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if(result){
                	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                	Self.edited["blance"] = "";
					if(isClose == 1){
						closeTab();
						Self.listSelf(Self.searchData.page,Self.searchData.selfPayId,Self.searchData.year,Self.searchData.month);
					} else{
						Self.selfPayBalanceList(0,Self.searchBalanceData.selfPayId,Self.searchBalanceData.selfPayName,Self.searchBalanceData.year,Self.searchBalanceData.startMonth,Self.searchBalanceData.endMonth);
					}
                }
            }
    	})
      
    },
		save : function(saveType){
			console.log(saveType);
			if(saveType == "checking"){
				Self.saveCheckingData(Self.oldCheckSelfPayId,"",1);
			} else if(saveType == "blance"){
				Self.saveBlanceData(Self.oldBlanceSelfPayId,"",1);
			}
		},
		clearEdit : function(clearType){
			Self.edited[clearType] = "";
		}
	}
	exports.listSelf = Self.listSelf;
	exports.isEdited = Self.isEdited;
	exports.save = Self.save;
	exports.clearEdit = Self.clearEdit;
});
