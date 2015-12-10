define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_transfer",
	    listTemplate = require("./view/list"),
	    transferChecking = require("./view/transferChecking"),
	    transferClearing = require("./view/transferClearing"),
	    blanceRecords = require("./view/transferRecords"),
	    tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance";

    var Transfer = {
    	searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
    	$checkSearchArea: false,
        $clearSearchArea : false,
        partnerList : false,
        clearTempData : false,
        clearTempSumDate : false
    };

    Transfer.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        Transfer.listTransfer(0,"","",dateJson.startDate,dateJson.endDate);
    };

    Transfer.listTransfer = function(page,partnerAgencyId,travelAgencyName,startDate,endDate){
    	if (Transfer.$searchArea && arguments.length === 1) {
            travelAgencyName = Transfer.$searchArea.find("input[name=travelAgencyName]").val(),
            partnerAgencyId = Transfer.$searchArea.find("input[name=partnerAgencyId]").val(),
            startDate = Transfer.$searchArea.find("input[name=startDate]").val(),
            endDate = Transfer.$searchArea.find("input[name=endDate]").val();
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        travelAgencyName = (travelAgencyName == "全部") ? "" : travelAgencyName;
        // 修正页码
        page = page || 0;
        Transfer.searchData = {
            pageNo : page,
            travelAgencyName : travelAgencyName,
            partnerAgencyId : partnerAgencyId,
            startDate : startDate,
            endDate : endDate,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(Transfer.searchData);
        $.ajax({
            url:KingServices.build_url("account/financialTransfer","listSumTransfer"),
            type:"POST",
            data:{ searchParam : searchParam},
            success:function(data){
                var result = showDialog(data);
                if(result){
                	Transfer.partnerList = data.partnerAgencyNameList;
                	var html = listTemplate(data);
                    Tools.addTab(menuKey,"转客账务",html);

                    Transfer.initList(startDate,endDate);
                    // 绑定翻页组件
                    laypage({
                        cont: Transfer.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                Transfer.listTransfer(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
	};

	Transfer.initList = function(startDate,endDate){
        Transfer.$tab = $('#tab-' + menuKey + "-content");
        Transfer.$searchArea = Transfer.$tab.find('.T-search-area');

        Transfer.getQueryList();
        FinancialService.initDate(Transfer.$tab);

        //搜索按钮事件
        Transfer.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            Transfer.listRestaurant(0);
        });

        // 报表内的操作
        Transfer.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                Transfer.transferCheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 付款
                Transfer.clearTempSumDate = false;
                Transfer.clearTempData = false;
                Transfer.transferClear(0,0,id,name,"",startDate,endDate);
            }
        });
    };

    Transfer.getQueryList = function(){
        var $partnerAgency = Transfer.$tab.find(".T-choosePartnerAgency"),
            partnerList = Transfer.partnerList;
        if(partnerList != null && partnerList.length > 0){
            for(var i=0;i < partnerList.length;i++){
                partnerList[i].id = partnerList[i].partnerAgencyId;
                partnerList[i].value = partnerList[i].partnerAgencyName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        partnerList.unshift(all);

        //同行地接
        $partnerAgency.autocomplete({
            minLength: 0,
            source : partnerList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="partnerAgencyId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="partnerAgencyId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $partnerAgency.autocomplete('search','');
        });      
    };

  //       //转客帐务对账处理
  //       transferCheckList:function(pageNo,partnerAgencyId,partnerAgencyName,year,month){
	 //    	 $.ajax({
	 //    		 url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	 //             type:"POST",
	 //             data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&month="+month+"&sortType=auto",
	 //             dataType:"json",
	 //             beforeSend:function(){
	 //                 globalLoadingLayer = openLoadingLayer();
	 //             },
	 //             success:function(data){
	 //            	//表单验证
	 //            	var $obj = $(".transferChecking .form-horizontal");
	 //                layer.close(globalLoadingLayer);
	 //                var result = showDialog(data);
	 //                 if(result){
 	//                 	   for(var i=0;i<data.financialTransferList.length;i++){
	 //                		   data.financialTransferList[i].touristGroupMemberList = JSON.parse(data.financialTransferList[i].touristGroupMemberList)
	 //                		   console.log(data.financialTransferList[i].touristGroupMemberList);
 	//                 	   }
	 //                 	    Transfer.searchCheckData={
		//                  	    partnerAgencyId:partnerAgencyId,
		//                  	    partnerAgencyName:partnerAgencyName,
	 //                       		year:year,
	 //                       		month:month        
  //                          }
	                 	    
		//                     data.yearList = yearList
		//                     data.monthList = monthList
		//                     data.transferPartnerAgencyName = partnerAgencyName
		//                     data.searchParam = Transfer.searchCheckData 
		//                     console.log(data);
	 //                        var html = transferChecking(data);
	 //                        var validator;
	 //                 	    //判断页面是否存在
	 //                        if($("#" +"tab-"+checkTabId+"-content").length > 0)
	 //                 	      {
	 //                 	    	 if(!!Transfer.edited["checking"] && Transfer.edited["checking"] != ""){
	 //                 	    		addTab(checkTabId,"转客对账");
	 //                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	 //                 	    			 validator = rule.check($('.transferChecking'));
	 //  				            		 if (!validator.form()) { return; }
	 //  				            		 Transfer.saveCheckingData(partnerAgencyId,partnerAgencyName,0);
	 //  				            		 Transfer.edited["checking"] = "";
	 //  				            		 addTab(checkTabId,"转客对账",html);
	 //  				            		 validator = rule.check($('.transferChecking'));
	 //  				            	 },function(){
	 //  				            		 addTab(checkTabId,"转客对账",html);
	 //  				            		 Transfer.edited["checking"] = "";
	 //  				            		 validator = rule.check($('.transferChecking'));
	 //  				            	 });
	 //                 	    	 }else{
	 //  	                 	    	addTab(checkTabId,"转客对账",html);
	 //  	                 	        validator = rule.check($('.transferChecking'));
	 //                 	    	 }
	 //                 	    }else{
	 //                 	    	addTab(checkTabId,"转客对账",html);
	 //                 	    	validator = rule.check($('.transferChecking'));
	 //                 	    }

	 //                 	    //取消对账权限过滤
	 //                 	    var checkList = data.financialTransferList;
		//                     var checkTr = $(".T-checkList tr");
		//                     var rightCode = $(".T-checkList").data("right");
		//                     checkDisabled(checkList,checkTr,rightCode);

	 //             	    	$("#" +"tab-"+checkTabId+"-content .all").on("change",function(){
	 //             	    		Transfer.edited["checking"] = "checking"; 
		// 						Transfer.oldCheckPartnerAgencyId = partnerAgencyId;
								
	 //             	    	});   
	                          
	 //                 	//展开事件
		//                      $("#" +"tab-"+ checkTabId+"-content"+" .seeGroup").click(function(){
		//                     	var tr = $(this).parent().parent().next();
		//                     	if($(this).text()=="展开"){
		//                     		$(this).text("收起");
		//                     	}else{$(this).text("展开");}
		//                      	if(tr.hasClass("hide")){
		// 								$(this).find("i").removeClass("fa-chevron-up");
		// 								$(this).find("i").addClass("fa-chevron-down");
		// 								tr.removeClass("hide");
		// 							}
		// 							else{
		// 								$(this).find("i").removeClass("fa-chevron-down");
		// 								$(this).find("i").addClass("fa-chevron-up");
		// 								tr.addClass("hide");
		// 							}
		//                         })
		// 	                 //给搜索按钮绑定事件
		// 	                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-checking-search").click(function(){
		//                          Transfer.searchCheckData={
		//                             partnerAgencyId:partnerAgencyId,
		//                             partnerAgencyName:partnerAgencyName,
		//                          	year:$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val(),
		//                          	month:$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val(),
		//                          }
		//                          Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
		//                      });
		//                      //导出事件btn-transferExport
		//                      $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferExport").click(function(){
		// 	                	 var year=$("#" +"tab-"+ checkTabId+"-content"+"  select[name=year]").val();
		//                       	 var month=$("#" +"tab-"+ checkTabId+"-content"+" select[name=month]").val();
		//                       	 checkLogin(function(){
		//                          	var url = ""+APP_ROOT+"back/export.do?method=transPartnerAgency&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&partnerAgencyId="+partnerAgencyId+"&partnerAgencyName="+partnerAgencyName+"&year="+year+"&month="+month+"&sortType=auto";
		//                          	exportXLS(url)
		//                          });
		// 	                 });
		                    
		// 	                 // 绑定翻页组件
		// 					laypage({
		// 					    cont: $("#tab-"+ checkTabId+"-content").find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
		// 					    pages: data.totalPage, //总页数
		// 					    curr: (pageNo + 1),
		// 					    jump: function(obj, first) {
		// 					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
		// 					    		Transfer.transferCheckList(obj.curr -1,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
		// 	                 		}
		// 					    }
		// 					});
		// 		             //给全选绑定事件
		// 		                 $("#" +"tab-"+ checkTabId+"-content"+" .transfer-selectAll").click(function(){
		// 		                	 var flag = this.checked;
		// 		                	 $(".transferChecking .all tbody tr").each(function(){
		// 		                		 var checkedbox = $(this).find(".transferFinancial")
		// 		                		 if(flag){
		// 		                			 checkedbox.prop("checked",true);
		// 		                		 }else{
		// 									 //判断对账状态
		// 									 if(checkedbox.attr("data-entity-checkStatus") == 1){
		// 										 checkedbox.prop("checked",true);
		// 									 }else{ 	
		// 										 checkedbox.prop("checked",false);
		// 									 }
		// 								 }
		// 		                	 });
		// 		                 });
		// 		               //给复选框绑定事件
		// 		                 $("#" +"tab-"+ checkTabId+"-content"+" .transferFinancial").click(function(){
		// 		                	 var flag = true
		// 		                	 $("#" +"tab-"+ checkTabId+"-content"+" .transferFinancial").each(function(){
		// 		                		 if(!$(this).prop("checked")){
		// 			                			flag = false;
		// 			                		} 
		// 		                	 })
		// 		                	 $("#" +"tab-"+ checkTabId+"-content"+" .transfer-selectAll").prop("checked",flag)
		// 		                 });
		// 		                 //给确认对账按钮绑定事件
		// 		                 $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferFinancial-checking").click(function(){
		// 		                	 // 表单校验
		// 		                	 if (!validator.form()) { return; }
  // 				            		 Transfer.saveCheckingData(partnerAgencyId,partnerAgencyName,0);
		// 	                      })
		// 			             //取消按钮事件
		// 			             $("#" +"tab-"+ checkTabId+"-content"+" .btn-transferFinancial-close").click(function(){
		// 			            	 showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
		// 			            		 closeTab(checkTabId);
		// 								 Transfer.edited["checking"] = "";
		// 			            	 });
		// 			             });
	 //                     }    
		                 
	 //             }
	 //    	 });
	 //    },
  //      //转客帐务结算处理
  //       transferBalanceList:function(pageNo,partnerAgencyId,partnerAgencyName,year,startMonth,endMonth){
	 //    	$.ajax({
  //               url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransferSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
  //               type:"POST",
  //               data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&year="+year+"&monthStart="+startMonth+"&monthEnd="+endMonth+"&sortType=auto",
  //               dataType:"json",
  //               beforeSend:function(){
  //                   globalLoadingLayer = openLoadingLayer();
  //               },
  //               success:function(data){
  //                  layer.close(globalLoadingLayer);
  //                  var result = showDialog(data);
  //                   if(result){
	 //                    data.yearList = yearList
	 //                    data.monthList = monthList
	 //                    data.partnerAgencyName = partnerAgencyName
  //                       var html = transferClearing(data);
	 //                    var validator;
  //                	    //判断页面是否存在
	 //                   // addTab(blanceTabId,"转客结算",html);
	 //                  //获取table中的tr
	 //                    if($("#" +"tab-"+blanceTabId+"-content").length > 0)
	 //             	    {
	 //             	    	 if(!!Transfer.edited["blance"] && Transfer.edited["blance"] != ""){
	 //             	    		addTab(blanceTabId,"转客结算");
		// 	                    //给每个tr添加表单验证
	 //             	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
	 //             	    			 Transfer.validatorTable()
	 //             	    			 var saveBtn = $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transferBlance-save")
	 //             	    			 if (!$(saveBtn).data('validata').form()) { return; }
	 //             	    			 Transfer.saveBlanceData(Transfer.oldBlancePartnerAgencyId,partnerAgencyName,0);
		// 		            		 Transfer.edited["blance"] = "";
		// 		            		 addTab(blanceTabId,"转客结算",html);
		// 		            		 Transfer.validatorTable();
		// 		            	 },function(){
		// 		            		    addTab(blanceTabId,"转客结算",html);
		// 		            		    Transfer.edited["blance"] = "";
		// 		            		    Transfer.validatorTable();
		// 		            	 });
	 //             	    	 }else{
	 //                 	    	addTab(blanceTabId,"转客结算",html);
	 //                 	    	Transfer.validatorTable();
	 //             	    	 }
	 //             	    }else{
	 //             	    	addTab(blanceTabId,"转客结算",html);
	 //             	    	Transfer.validatorTable();
	 //             	    };
	 //             	   $("#" +"tab-"+blanceTabId+"-content .all").on('change', 'input, select', function() {
	 //             		   	Transfer.edited["blance"] = "blance";
	 //             		   	Transfer.oldBlancePartnerAgencyId = partnerAgencyId;
	 //    	    			$(this).closest('tr').data('blanceStatus',true);
	 //    	    		});
  //                       //搜索按钮事件
  //                       $("#" +"tab-"+ blanceTabId + "-content"+" .btn-blance-search").click(function(){
  //                           Transfer.searchBalanceData={
  //                               partnerAgencyId:partnerAgencyId,
  //                               partnerAgencyName:partnerAgencyName,
  //                           	year:$("#" +"tab-"+ blanceTabId + "-content"+"  select[name=year]").val(),
  //                           	startMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=startMonth]").val(),
  //                           	endMonth:$("#" +"tab-"+ blanceTabId + "-content"+" select[name=endMonth]").val(),
  //                           }
  //                           Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
  //                       });
  //                      //保存按钮事件
  //                       $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transferBlance-save").click(function(){
  //                       	// 表单校验
  //                       	if (!$(this).data('validata').form()) { return; }
  //                       	Transfer.saveBlanceData(Transfer.oldBlancePartnerAgencyId,partnerAgencyName,0);
  //                       });
  //                       //对账明细按钮事件
  //                       $("#" +"tab-"+ blanceTabId+"-content"+" .btn-restaurantBlance-checkDetail").click(function(){
                        	
  //                       	Transfer.searchCheckData={
  //   		                 	    partnerAgencyId:partnerAgencyId,
  //   		                 	    partnerAgencyName:partnerAgencyName,
  //   	                       		year:$(this).attr("data-entity-year"),
  //   	                       		month:$(this).attr("data-entity-month")        
  //                              }
  //                       	Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
  //                       });
                        

  //                     //给操作记录按钮绑定事件
  //                       $("#" +"tab-"+ blanceTabId+"-content"+" .btn-transfer-record").click(function(){
  //                       	$.ajax({
  //                       		url:""+APP_ROOT+"back/financial/financialTransfer.do?method=listFcTransferSettlementRecord&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
  //                               type:"POST",
  //                               data:"partnerAgencyId="+partnerAgencyId,
  //                               dataType:"json",
  //                               beforeSend:function(){
  //                                   globalLoadingLayer = openLoadingLayer();
  //                               },
  //                               success:function(data){
                                	
  //                               	layer.close(globalLoadingLayer);
  //                                   var result = showDialog(data);
  //                               	if(result){
  //                               		if(data.financialTransferSettlementRecordList.length == 0){
  //                               			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
  //                               		}else{
  //                               			var html =blanceRecords(data);
  //           					    		var blanceRecordsTemplateLayer =layer.open({
  //           					    			type: 1,
  //           								    title:"操作记录",
  //           								    skin: 'layui-layer-rim', //加上边框
  //           								    area: '60%', //宽高
  //           								    zIndex:1030,
  //           								    content: html,
  //           								    scrollbar: false, // 推荐禁用浏览器外部滚动条
  //           								    success: function(){
            								    	 
  //           								    }
  //           					    		})
  //                               		}
  //       		                	}
  //                               }
  //                       	});
  //                       });
  //                   }
  //               }
  //          });
	 //    },
	 //  //给每个tr增加验证
	 //    validatorTable:function(){
	 //    	//获取table中的tr
 	//     	var $tr = $("#" +"tab-"+ blanceTabId + "-content"+" .all tbody tr")
  //           //给每个tr添加表单验证
  //           $tr.each(function(){
  //           	$(this).find('.btn-transferBlance-save').data('validata', rule.check($(this)));
  //           });
	 //    },
	 //    saveCheckingData : function(partnerAgencyId,partnerAgencyName,isClose){
	 //    	var JsonStr = [],
  //               oldUnPayedMoney,
  //               newUnPayedMoney,
  //               oldRemark,
  //               newRemark,
		// 		$tr = $("#" +"tab-"+ checkTabId+"-content"+" .all tbody tr");
  //   		$tr.each(function(i){
	 // 		   var flag = $(this).find(".transferFinancial").is(":checked");
	 // 		   newUnPayedMoney = $tr.eq(i).find("input[name=FinancialTransferRealUnPayedMoney]").val();
		// 	   newRemark = $tr.eq(i).find("input[name=FinancialTransferRemark]").val();
		// 	   oldUnPayedMoney = $(this).attr("data-entity-realUnPayedMoney");
		// 	   oldRemark = $(this).attr("data-entity-remark");
		// 	   if(flag){
		// 		   if($(this).attr("data-entity-isConfirmAccount") == 1){
  //   				   //判断是否是修改对账
  //   				   if(oldUnPayedMoney !== newUnPayedMoney || oldRemark !== newRemark){
  //   					   var checkData = {
  //   		 					   id:$(this).attr("data-entity-id"),
  //   		 					   partnerAgencyId:partnerAgencyId,
  //   		 					   partnerAgencyName:partnerAgencyName,
  //   		 					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
  //   		 					   transRealUnPayedMoney:newUnPayedMoney,
  //   		 					   transRemark:newRemark,
  //   		 					   isConfirmAccount:1
  //   		     			   }
  //   					   JsonStr.push(checkData)
  //   				   }
  //   			   }else{ var checkData = {
	 // 					   id:$(this).attr("data-entity-id"),
	 // 					   partnerAgencyId:partnerAgencyId,
	 // 					   partnerAgencyName:partnerAgencyName,
	 // 					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
	 // 					   transRealUnPayedMoney:newUnPayedMoney,
	 // 					   transRemark:newRemark,
	 // 					   isConfirmAccount:1
	 //     			   }
		// 		   JsonStr.push(checkData)}
	 // 		   }else{
	 // 			   if($(this).attr("data-entity-isConfirmAccount") == 1){
	 // 				   var checkData = {
  //    					   id:$(this).attr("data-entity-id"),
  //    					   partnerAgencyId:partnerAgencyId,
  //    					   partnerAgencyName:partnerAgencyName,
  //    					   startTime:$tr.eq(i).find("td[name=startTime]").text(),
  //    					   transRealUnPayedMoney:newUnPayedMoney,
  //    					   transRemark:newRemark,
  //    					   isConfirmAccount:0
	 //     			   } 
	 // 				   JsonStr.push(checkData)
	 // 			   }
	 // 		   }
		//     });
	 // 	   //判断用户是否操作
	 // 	   if(JsonStr.length == 0){
	 // 		   showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
	 // 		   return
	 // 	   }else{
	 // 		   JsonStr = JSON.stringify(JsonStr);
	 //     	   $.ajax({
	 //     		    url:""+APP_ROOT+"back/financial/financialTransfer.do?method=accountChecking&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
	 //                type:"POST",
	 //                data:"financialTransferListStr="+encodeURIComponent(JsonStr),
	 //                dataType:"json",
	 //                beforeSend:function(){
		// 				globalLoadingLayer = openLoadingLayer();
		// 			},
		// 			success:function(data){
		// 				layer.close(globalLoadingLayer);
		// 				var result = showDialog(data);
		// 				if(result){
		// 					showMessageDialog($( "#confirm-dialog-message" ),data.message);
		// 					Transfer.edited["checking"] = "";
		// 					if(isClose == 1){
		// 						closeTab(checkTabId);
		// 						Transfer.listTransfer(Transfer.searchData.page,Transfer.searchData.partnerAgencyId,Transfer.searchData.travelAgencyName,Transfer.searchData.year,Transfer.searchData.month);
		// 					} else {
		// 						Transfer.transferCheckList(0,Transfer.searchCheckData.partnerAgencyId,Transfer.searchCheckData.partnerAgencyName,Transfer.searchCheckData.year,Transfer.searchCheckData.month)
		// 					}
		// 				}
		// 			}
	 //     	   });
	 // 	   }
	 //    },
	 //    saveBlanceData : function(partnerAgencyId,partnerAgencyName,isClose){

  //         	var DataArr = [],
  // 			JsonData,
  //         	$tr = $("#" +"tab-"+ blanceTabId+"-content"+" .all tbody tr");
  //         	$tr.each(function(i){
  //         		if($(this).data('blanceStatus')){
  //         			var blanceData = {
  //                   		id:$(this).attr("data-entity-id"),
  //                           partnerAgencyId:partnerAgencyId,
  //                           year:$(this).attr("data-entity-year"),
  //                           month:$(this).attr("data-entity-month"),
  //                           realPayedMoney:$tr.eq(i).find("td[name=blancerealrealPayedMoney]").text(),
  //                           unPayedMoney:$tr.eq(i).find("td[name=blanceunPayedMoney]").text(),
  //                           realUnPayedMoney:$tr.eq(i).find("td[name=blancerealrealUnPayedMoney]").text(),
  //                           payMoney:$tr.eq(i).find("input[name=blancerealPayedMoney]").val(),
  //                           payType:$tr.eq(i).find("select[name=blancePayType]").val(),
  //                           remark:$tr.eq(i).find("input[name=blancerealRemark]").val()
  //                   	}
  //         			 DataArr.push(blanceData)
  //         		}
  //         	})
  //         	JsonData = JSON.stringify(DataArr)
  //         	$.ajax({
  //       		url:""+APP_ROOT+"back/financial/financialTransfer.do?method=saveFcTransferSettlement&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
  //               type:"POST",
  //               data:"fcTransferSettlementStr="+JsonData,
  //               dataType:"json",
  //               beforeSend:function(){
  //                   globalLoadingLayer = openLoadingLayer();
  //               },
  //               success:function(data){
  //               	layer.close(globalLoadingLayer);
  //                   var result = showDialog(data);
  //                   if(result){
  //                   	showMessageDialog($( "#confirm-dialog-message" ),data.message);
  //                   	Transfer.edited["blance"] = "";
		// 				if(isClose == 1){
		// 					closeTab(blanceTabId);
		// 					Transfer.listTransfer(Transfer.searchData.page,Transfer.searchData.partnerAgencyId,Transfer.searchData.travelAgencyName,Transfer.searchData.year,Transfer.searchData.month);
		// 				} else {
		// 					Transfer.transferBalanceList(0,Transfer.searchBalanceData.partnerAgencyId,Transfer.searchBalanceData.partnerAgencyName,Transfer.searchBalanceData.year,Transfer.searchBalanceData.startMonth,Transfer.searchBalanceData.endMonth);
		// 				}
  //                   }
  //               }
  //       	})
	    	
	 //    },
		// getPartnerAgencyList:function(obj,partnerAId){
		// 	$(obj).autocomplete({
		// 		minLength: 0,
		// 		change: function(event, ui) {
		// 			if (!ui.item)  {
		// 				$(this).val('').nextAll('input[name="fromPartnerAgencyId"]').val('');
		// 			}
		// 		},
		// 		select: function(event, ui) {
		// 			$(this).blur().nextAll('input[name="fromPartnerAgencyId"]').val(ui.item.id);
		// 		}
		// 	})
		// 	.click(function(event) {
		// 		var $objC = $(this);
		// 		$.ajax({
		// 			url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAnencyList&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
  //                   dataType: "json",
  //                   showLoading:false,
  //                   success: function(data) {
  //                   	layer.close(globalLoadingLayer);
		// 				var result = showDialog(data);
		// 				if(result){
		// 					var partnerAgencyList = JSON.parse(data.partnerAgencyList);
		// 					if(partnerAgencyList != null && partnerAgencyList.length > 0){
		// 						for(var i=0;i<partnerAgencyList.length;i++){
		// 							partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
		// 						}
		// 					}
		// 					$objC.autocomplete('option','source', partnerAgencyList);
		// 					$objC.autocomplete('search', '');
		// 				}
  //                   }
  //               });
		// 	});
		// },
		// save : function(saveType){
		// 	console.log(saveType);
		// 	if(saveType == "checking"){
		// 		Transfer.saveCheckingData(Transfer.oldCheckPartnerAgencyId,"",1);
		// 	} else if(saveType == "blance"){
		// 		Transfer.saveBlanceData(Transfer.oldBlancePartnerAgencyId,"",1);
		// 	}
		// },
		// clearEdit : function(clearType){
		// 	Transfer.edited[clearType] = "";
		// }
  //   }
    exports.init = Transfer.initModule;
});