define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_replace";
    var listTemplate = require("./view/list");
    var billImagesTemplate = require("./view/billImages");
    var replaceChecking = require("./view/replaceChecking");
    var replaceClearing = require("./view/replaceClearing");
    var  blanceRecords = require("./view/replaceRecords"),
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

    var Replace = {
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
            },	
            edited:false,
            blanceEdited:false,
            oldBlancePartnerAgencyId:0,
    		//代订账务列表 back/financial/financialInsurance.do
        listReplace:function(page,partnerAgencyId,year,month){
        	
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=listSumFcBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
                    	Replace.searchData={
                    		partnerAgencyId:partnerAgencyId,
                    		year:year,
                    		month:month
                    	}
                        data.partnerAgencyNameListNew = JSON.parse(data.partnerAgencyNameListNew);
                    	data.yearList = yearList;
                        data.monthList = monthList;
                        data.searchParam = Replace.searchData;
                        var html = listTemplate(data);
                        addTab(menuKey,"代订账务",html);
                        //搜索按钮事件
                        $("#"+tabId+ " .btn-financialbooking-search").click(function(){
                        	Replace.searchData = {
                                	partnerAgencyId:$("#" + tabId + " select[name=partnerAgencyId]").val(),
                                	year:$("#" + tabId + " select[name=year]").val(),
                                	month:$("#" + tabId + " select[name=month]").val(),
                            }
                        	Replace.listReplace(0,Replace.searchData.partnerAgencyId,Replace.searchData.year, Replace.searchData.month);
                        });

                        //分页--首页按钮事件
                        $("#"+tabId+" .pageMode a.first").click(function(){
                            Replace.listReplace(0,Replace.searchData.partnerAgencyId,Replace.searchData.year,Replace.searchData.month);
                        });
                        //分页--上一页事件
                        $("#"+tabId+" .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            Replace.listReplace(previous,Replace.searchData.partnerAgencyId,Replace.searchData.year,Replace.searchData.month);
                        });
                        //分页--下一页事件
                        $("#"+tabId+" .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            Replace.listReplace(next,Replace.searchData.partnerAgencyId,Replace.searchData.year,Replace.searchData.month);
                        });
                        //分页--尾页事件
                        $("#"+tabId+" .pageMode a.last").click(function(){
                            Replace.listReplace(data.totalPage == 0 ? data.totalPage:data.totalPage-1,Replace.searchData.partnerAgencyId,Replace.searchData.year,Replace.searchData.month);
                        });
                        //给对账按钮绑定事件
                        $("#"+tabId+" .btn-financialbooking-check").click(function(){
                            Replace.searchCheckData={
                                partnerAgencyId:$(this).attr("data-entity-id"),
                                partnerAgencyName:$(this).attr("data-entity-partnerAgencyName"),
                                year:$(this).attr("data-entity-year"),
                                month:$(this).attr("data-entity-month")
                            }
                            Replace.replaceCheckList(0,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month);
                        });

                        //给结算按钮绑定事件 
                        $("#"+tabId+"  .btn-financialbooking-balance").click(function(){

                            Replace.searchBalanceData={
                                "partnerAgencyId":$(this).attr("data-entity-id"),                              
                                "year":$(this).attr("data-entity-year"),
                                "partnerAgencyName":$(this).attr("data-entity-partnerAgencyName"),
                                "startMonth":$(this).attr("data-entity-startMonth"),
                                "endMonth":$(this).attr("data-entity-endMonth")
                            }
                            Replace.replaceBalanceList(0,Replace.searchBalanceData.partnerAgencyId,Replace.searchBalanceData.partnerAgencyName,Replace.searchBalanceData.year,Replace.searchBalanceData.startMonth,Replace.searchBalanceData.endMonth)
                        });
                    }
                }
            });
        },
        //代订对账处理
        replaceCheckList:function(pageNo,partnerAgencyId,partnerAgencyName,year,month){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=listFcBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&month="+month+"&sortType=auto"+"",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	//表单验证
                	var $obj = $(".bookingChecking .form-horizontal");
                	
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        //data.financialReplaceList = JSON.parse(data.financialReplaceList);
                        Replace.searchCheckData={
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:partnerAgencyName,
                            year:year,
                            month:month
                        }
                        console.log(data);
                        data.yearList = yearList
                        data.monthList = monthList
                        data.partnerAgencyName = partnerAgencyName
                        data.searchParam = Replace.searchCheckData
                        var html = replaceChecking(data);
                        var validator;
                	    //addTab(checkTabId,"代订对账",html);
                	   if($("#" +"tab-"+checkTabId+"-content").length > 0)
               	      {
               	    	
               	    	 if(Replace.edited){
               	    		addTab(checkTabId,"代订对账");
               	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
               	    			 validator = rule.check($('.bookingChecking'));
				            		 if (!validator.form()) { return; }
				            		 Replace.saveCheckingData(partnerAgencyId,partnerAgencyName)
				            		 Replace.edited = false;
				            		 addTab(checkTabId,"代订对账",html);
				            		 validator = rule.check($('.bookingChecking'));
				            	 },function(){
				            		 addTab(checkTabId,"代订对账",html);
				            		 Replace.edited = false;
				            		 validator = rule.check($('.bookingChecking'));
				            	 });
               	    	 }else{
	                 	    	addTab(checkTabId,"代订对账",html);
	                 	        validator = rule.check($('.bookingChecking'));
               	    	 }
        	    		 
               	    }else{
               	    	addTab(checkTabId,"代订对账",html);
               	    	validator = rule.check($('.bookingChecking'));
               	    };
           	    	$("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
           	    		Replace.edited = true; 
           	    	});   
                        
                    }
                    //给搜索按钮绑定事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .btn-bookingcheck-search").click(function(){
                        Replace.searchCheckData={
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:partnerAgencyName,
                            year:$("#" +"tab-"+ checkTabId+"-content"+" select[name=year]").val(),
                            month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
                        }
                        Replace.replaceCheckList(0,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                    });
                    //代订账务导出事件btn-replaceExport
                    $("#" +"tab-"+ checkTabId+"-content"+" .btn-replaceExport").click(function(){
	                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
                      	 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
                      	checkLogin(function(){
                        	var url = ""+APP_ROOT+"back/export.do?method=bookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&partnerAgencyId="+partnerAgencyId+"&partnerAgencyName="+partnerAgencyName+"&year="+year+"&month="+month+"&sortType=auto";
                        	exportXLS(url)
                        });
	                 });

                    //分页--首页按钮事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.first").click(function(){
                        Replace.replaceCheckList(0,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                    });
                    //分页--上一页事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.previous").click(function(){
                        var previous = data.pageNo - 1;
                        if(data.pageNo == 0){
                            previous = 0;
                        }
                        Replace.replaceCheckList(previous,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                    });
                    //分页--下一页事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.next").click(function(){
                        var next =  data.pageNo + 1;
                        if(data.pageNo == data.totalPage-1){
                            next = data.pageNo ;
                        }
                        Replace.replaceCheckList(next,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                    });
                    //分页--尾页事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .pageMode a.last").click(function(){
                        Replace.replaceCheckList(data.totalPage == 0 ? data.totalPage : data.totalPage-1,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                    });
                    //给全选绑定事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").click(function(){
                        var flag = this.checked;
                        $(".bookingChecking .all tbody tr").each(function(){
                            var checkedbox = $(this).find(".bookingFinancial")
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
	                 $("#" +"tab-"+ checkTabId+"-content"+" .bookingFinancial").click(function(){
	                	 var flag = true
	                	 $("#" +"tab-"+ checkTabId+"-content"+" .bookingFinancial").each(function(){
	                		 if(!$(this).prop("checked")){
		                			flag = false;
		                		} 
	                	 })
	                	 $("#" +"tab-"+ checkTabId+"-content"+" .selectAll").prop("checked",flag)
	                 });
                    //给确认对账按钮绑定事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .btn-bookingFinancial-checking").click(function(){
                    	 if (!validator.form()) { return; }
	            		 Replace.saveCheckingData(partnerAgencyId,partnerAgencyName)
                    })
                    //取消按钮事件
                    $("#" +"tab-"+ checkTabId+"-content"+" .btn-bookingFinancial-close").click(function(){
                        showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
                            closeTab(checkTabId)
                        });
                    });
                }
            });
        },
        //代订帐务结算处理
       replaceBalanceList:function(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth){
            $.ajax({
                url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=listFcBookingOrderSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto"+"",
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
                        var html = replaceClearing(data);
	                    if($("#" +"tab-"+blanceTabId+"-content").length > 0)
	             	    {
	             	    	 if(Replace.blanceEdited){
	             	    		addTab(blanceTabId,"代订结算");
			                    //给每个tr添加表单验证
	             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	             	    			 Replace.validatorTable()
	             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-bookingBlance-save")
	             	    			 if (!$(saveBtn).data('validata').form()) { return; }
	             	    			 Replace.saveBlanceData(Replace.oldBlancePartnerAgencyId,partnerAgencyName)
				            		 Replace.blanceEdited = false;
				            		 addTab(blanceTabId,"代订结算",html);
				            		 Replace.validatorTable();
				            	 },function(){
				            		    addTab(blanceTabId,"代订结算",html);
				            		    Replace.blanceEdited = false;
				            		    Replace.validatorTable();
				            	 });
	             	    	 }else{
	                 	    	addTab(blanceTabId,"代订结算",html);
	                 	    	Replace.validatorTable();
	             	    	 }
	         	    		 
	             	    }else{
	             	    	addTab(blanceTabId,"代订结算",html);
	             	    	Replace.validatorTable();
	             	    };
	             	   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
	             		    Replace.blanceEdited = true;
	             		    Replace.oldBlancePartnerAgencyId = partnerAgencyId;
	    	    			$(this).closest('tr').data('blanceStatus',true);
	    	    		});
 
                        
                        //搜索按钮事件
                        $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
                            Replace.searchBalanceData={
                                partnerAgencyId:partnerAgencyId,
                                partnerAgencyName:partnerAgencyName,
                                year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
                                startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
                                endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
                            }
                            Replace.replaceBalanceList(0,Replace.searchBalanceData.partnerAgencyId,Replace.searchBalanceData.partnerAgencyName,Replace.searchBalanceData.year,Replace.searchBalanceData.startMonth,Replace.searchBalanceData.endMonth);
                        });
                        //保存按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-bookingBlance-save").click(function(){
                        	if (!$(this).data('validata').form()) { return; }
        	    			 Replace.saveBlanceData(Replace.oldBlancePartnerAgencyId,partnerAgencyName)
                        });
                        //对账明细按钮事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-bookingBlance-checkDetail").click(function(){
                            Replace.searchCheckData={
                               partnerAgencyId:partnerAgencyId,
                                partnerAgencyName:partnerAgencyName,
                                year:$(this).attr("data-entity-year"),
                                month:$(this).attr("data-entity-month"),
                            }
                            Replace.replaceCheckList(0,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)
                        });
                        //给操作记录按钮绑定事件
                        $("#" +"tab-"+ blanceTabId+"-content"+" .btn-bookingBlance-Records").click(function(){
                            $.ajax({
                                url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=listFcBookingOrderSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
                                        if(data.financialBookingOrderSettlementRecordList.length == 0){
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
	    	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
            //给每个tr添加表单验证
            $tr.each(function(){
            	$(this).find('.btn-bookingBlance-save').data('validata', rule.check($(this)));
            });
	    },
        //对账数据处理
        saveCheckingData:function(partnerAgencyId,partnerAgencyName){
            var JsonStr = [],
                oldrealUnIncomeMoney,
                newrealUnIncomeMoney,
                oldRemark,
                newRemark,
                $tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
            $tr.each(function(i){
                var flag = $(this).find(".bookingFinancial").is(":checked");
                if(flag){
                    if($(this).attr("data-entity-isConfirmAccount") == 1){
                        //取值用于是否修改对账判断
                        oldrealUnIncomeMoney = $(this).attr("data-entity-realUnIncomeMoney");
                        oldRemark = $(this).attr("data-entity-remark");
                        newrealUnIncomeMoney = $tr.eq(i).find("input[name=FinancialBookingRealUnPayedMoney]").val();
                        newRemark = $tr.eq(i).find("input[name=FinancialbookingRemark]").val();
                        //判断是否是修改对账
                        if(oldrealUnIncomeMoney !== newrealUnIncomeMoney || oldRemark !== newRemark){
                            var checkData = {
                                id:$(this).attr("data-entity-id"),
                                partnerAgencyId:partnerAgencyId,
                                partnerAgencyName:partnerAgencyName,
                                createTime:$(this).attr("data-entity-createTime"),
                                realUnIncomeMoney:$tr.eq(i).find("input[name=FinancialBookingRealUnPayedMoney]").val(),
                                remark:$tr.eq(i).find("input[name=FinancialbookingRemark]").val(),
                                isConfirmAccount:1
                            }
                            JsonStr.push(checkData)
                        }
                    }else{
                        var checkData = {
                            id:$(this).attr("data-entity-id"),
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:partnerAgencyName,
                            createTime:$(this).attr("data-entity-createTime"),
                            realUnIncomeMoney:$tr.eq(i).find("input[name=FinancialBookingRealUnPayedMoney]").val(),
                            remark:$tr.eq(i).find("input[name=FinancialbookingRemark]").val(),
                            isConfirmAccount:1
                        }
                        JsonStr.push(checkData)
                    }
                }else{
                    if($(this).attr("data-entity-isConfirmAccount") == 1){
                        var checkData = {
                            id:$(this).attr("data-entity-id"),
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:partnerAgencyName,
                            createTime:$(this).attr("data-entity-createTime"),
                            realUnIncomeMoney:$tr.eq(i).find("input[name=FinancialBookingRealUnPayedMoney]").val(),
                            remark:$tr.eq(i).find("input[name=FinancialbookingRemark]").val(),
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
                       url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                       type:"POST",
                       data:"financialBookingOrderListStr="+encodeURIComponent(JsonStr),
                       dataType:"json",
                       beforeSend:function(){
                           globalLoadingLayer = openLoadingLayer();
                       },
                       success:function(data){
                           layer.close(globalLoadingLayer);
                           var result = showDialog(data);
                           if(result){
                               showMessageDialog($( "#confirm-dialog-message" ),data.message);
                               Replace.edited = false;
                               Replace.replaceCheckList(0,Replace.searchCheckData.partnerAgencyId,Replace.searchCheckData.partnerAgencyName,Replace.searchCheckData.year,Replace.searchCheckData.month)                                }
                       }
                   });
        	   }
        },
        saveBlanceData:function(partnerAgencyId,partnerAgencyName){
          	var DataArr = [],
    			JsonData,
          	$tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
          	$tr.each(function(i){
          		if($(this).data('blanceStatus')){
          			var blanceData = {
                            id:$(this).attr("data-entity-id"),
                            partnerAgencyId:partnerAgencyId,
                            year:$(this).attr("data-entity-year"),
                            month:$(this).attr("data-entity-month"),
                            realNeedIncomeMoney:$tr.eq(i).find("td[name=blancerealNeedIncomeMoney]").text(),
                            realIncomeMoney:$tr.eq(i).find("td[name=blancerealIncomeMoney]").text(),
                            unIncomeMoney:$tr.eq(i).find("td[name=blanceununIncomeMoney]").text(),
                            realUnIncomeMoney:$tr.eq(i).find("td[name=blancerealrealUnIncomeMoney]").text(),
                            incomeType:$tr.eq(i).find("select[name=blancePayType]").val(),
                            incomeMoney:$tr.eq(i).find("input[name=blancerealIncomeMoney]").val(),
                            remark:$tr.eq(i).find("input[name=blancerealRemark]").val()
                        }
          			 DataArr.push(blanceData)
          		}
          	})
          	JsonData = JSON.stringify(DataArr)
          	$.ajax({
                url:""+APP_ROOT+"back/financial/financialBookingOrder.do?method=saveFcBookingOrderSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"fcBookingOrderSettlementStr="+JsonData,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        showMessageDialog($( "#confirm-dialog-message" ),data.message);
                        Replace.blanceEdited = false;
                        Replace.replaceBalanceList(0,Replace.searchBalanceData.partnerAgencyId,Replace.searchBalanceData.partnerAgencyName,Replace.searchBalanceData.year,Replace.searchBalanceData.startMonth,Replace.searchBalanceData.endMonth);
                    }
                }
            })
        }

    }
    exports.listReplace = Replace.listReplace;
});
