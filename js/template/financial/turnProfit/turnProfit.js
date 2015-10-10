define(function(require, exports) {
    var menuKey = "financial_turnProfit",
     listTurnProfit = require("./view/list"),
    tabId = "tab-"+menuKey+"-content",
    checkTabId = menuKey+"-checking",
    viewTemplate = require("./view/visitorGroup"),
    transitViewTemplate = require("../../arrange/transit/view/view"),
    visitorGroupMainInfo = require("./view/visitorGroupMainInfo"),
    arrangeTransferViewTemplate=require("./view/turnVisitorGroup"),
    blanceTabId = menuKey+"-blance";
    var TurnProfit  = {
	    searchBalanceData:{
	        "lineProductId":"",
	        "lineProductName":"",
	        "transferPartnerAgencyId":"",
	        "transferPartnerAgencyName":"",
	        "partnerAgencyId":"",
	        "partnerAgencyName":"",
	        "startTime":"",
	        "endTime":""
	    },
        clickFlag:0,
        listTurnProfit:function(page,lineProductId,lineProductName,transferPartnerAgencyId,transferPartnerAgencyName,partnerAgencyId,partnerAgencyName,startTime,endTime){
            $.ajax({
                url:""+APP_ROOT+"back/profitTransfer.do?method=listProfitTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+page+"&lineProductId="+lineProductId+"&transferPartnerAgencyId="+transferPartnerAgencyId+"&partnerAgencyId="+partnerAgencyId+"&startTime="+startTime+"&endTime="+endTime+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        TurnProfit.searchBalanceData = {
                            lineProductId:lineProductId,
                            lineProductName:lineProductName,
                            transferPartnerAgencyId:transferPartnerAgencyId,
                            transferPartnerAgencyName:transferPartnerAgencyName,
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:partnerAgencyName,
                            startTime:startTime,
                            endTime:endTime
                        }
                        data.searchParam = TurnProfit.searchBalanceData;
                        var html = listTurnProfit(data);
                        addTab(menuKey,"转客利润",html);
                        $("#" + tabId + " .date-picker").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });
                        //获取搜索框数据
                        //1.获取数据
                        var lineProductNameList = data.lineProductNameList,
                            partnerAgencyNameList = data.partnerAgencyNameList, 
                            partnerLocalAgencyNameList  = data.partnerLocalAgencyNameList;

                        var lineProducts  = $("#" + tabId + " input[name=chooseLineProductName]"),
                            groupCollective  = $("#" + tabId + " input[name=chooseLineTurnprofits]"),
                            partner = $("#" + tabId + " input[name=partnerTurnprofits]");

                        if(lineProductNameList !=null && lineProductNameList.length>0){
                            for(var i = 0;i<lineProductNameList.length;i++){
                                lineProductNameList[i].value = lineProductNameList[i].lineProductName
                            }
                        }

                        if(partnerAgencyNameList !=null && partnerAgencyNameList.length>0){
                            for(var i = 0;i<partnerAgencyNameList.length;i++){
                                partnerAgencyNameList[i].value = partnerAgencyNameList[i].partnerAgencyName
                            }
                        }

                        if(partnerLocalAgencyNameList !=null && partnerLocalAgencyNameList.length>0){
                            for(var i = 0;i<partnerLocalAgencyNameList.length;i++){
                                partnerLocalAgencyNameList[i].value = partnerLocalAgencyNameList[i].partnerLocalAgencyName
                            }
                        }

                        //线路产品   
                        lineProducts.autocomplete({
                            minLength:0,
                            change:function(event,ui){
                                if(ui.item == null){
                                    $(this).next().val("");
                                }
                            },
                            select:function(event,ui){
                            	//console.log(ui);
                                $(this).blur();
                                $(this).next().val(ui.item.lineProductId);
                            }
                        }).off("click").on("click", function(){
                            var Obj = lineProducts;
                            $(Obj).autocomplete('option','source',lineProductNameList);
                            $(Obj).autocomplete('search', '');
                        });

                        //组团社
                        groupCollective.autocomplete({
                            minLength:0,
                            change:function(even,ui){
                                if(ui.item == null){
                                    $(this).next().val("");
                                }
                            },
                            select:function(evevt,ui){
                                $(this).blur();
                                $(this).next().val(ui.item.partnerAgencyId);
                            }
                        }).off("click").on("click",function(){
                            var Obj = groupCollective;
                            $(Obj).autocomplete("option","source",partnerAgencyNameList);
                            $(Obj).autocomplete('search','');
                        });

                        //同行地接
                        partner.autocomplete({
                            minLength:0,
                            change:function(even,ui){
                                if(ui.item == null){
                                    $(this).next().val("");
                                }
                            },
                            select:function(evevt,ui){
                                $(this).blur();
                                $(this).next().val(ui.item.partnerLocalAgencyId);
                            }
                        }).off("click").on("click",function(){
                            var Obj = partner;
                            $(Obj).autocomplete("option","source",partnerLocalAgencyNameList);
                            $(Obj).autocomplete('search','');
                        });

                        //搜索按钮事件
                        $("#" + tabId + " .btn-arrangeTourist-search").click(function(){
                            //var name = $(".main-content .page-content input[name=ticket_name]").val();
                            //var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            TurnProfit.searchBalanceData={
                                lineProductId:$("#" + tabId + " .search-area").find("input[name=lineProductId]").val(),
                                lineProductName:$("#" + tabId + " .search-area").find("input[name=chooseLineProductName]").val(),
                                transferPartnerAgencyId:$("#" + tabId + " .search-area").find("input[name=transferPartnerAgencyId]").val(),
                                transferPartnerAgencyName:$("#" + tabId + " .search-area").find("input[name=partnerTurnprofits]").val(),
                                partnerAgencyId:$("#" + tabId + " .search-area").find("input[name=partnerAgencyId]").val(),
                                partnerAgencyName:$("#" + tabId + " .search-area").find("input[name=chooseLineTurnprofits]").val(),
                                startTime:$("#" + tabId + " .search-area").find("input[name=startTime]").val(),
                                endTime:$("#" + tabId + " .search-area").find("input[name=endTime]").val(),
                            }
                            console.log(TurnProfit.searchBalanceData);
                            TurnProfit.listTurnProfit(0,TurnProfit.searchBalanceData.lineProductId,TurnProfit.searchBalanceData.lineProductName,TurnProfit.searchBalanceData.transferPartnerAgencyId,TurnProfit.searchBalanceData.transferPartnerAgencyName,TurnProfit.searchBalanceData.partnerAgencyId,TurnProfit.searchBalanceData.partnerAgencyName,TurnProfit.searchBalanceData.startTime,TurnProfit.searchBalanceData.endTime);
                        });

                        //分页--首页按钮事件
                        $("#" + tabId + " .pageMode a.first").click(function(){
                            TurnProfit.listTurnProfit(0,TurnProfit.searchBalanceData.lineProductId,TurnProfit.searchBalanceData.lineProductName,TurnProfit.searchBalanceData.transferPartnerAgencyId,TurnProfit.searchBalanceData.transferPartnerAgencyName,TurnProfit.searchBalanceData.partnerAgencyId,TurnProfit.searchBalanceData.partnerAgencyName,TurnProfit.searchBalanceData.startTime,TurnProfit.searchBalanceData.endTime);

                        });
                        //分页--上一页事件
                        $("#" + tabId + " .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            TurnProfit.listTurnProfit(previous,TurnProfit.searchBalanceData.lineProductId,TurnProfit.searchBalanceData.lineProductName,TurnProfit.searchBalanceData.transferPartnerAgencyId,TurnProfit.searchBalanceData.transferPartnerAgencyName,TurnProfit.searchBalanceData.partnerAgencyId,TurnProfit.searchBalanceData.partnerAgencyName,TurnProfit.searchBalanceData.startTime,TurnProfit.searchBalanceData.endTime);

                        });
                        //分页--下一页事件
                        $("#" + tabId + " .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            TurnProfit.listTurnProfit(next,TurnProfit.searchBalanceData.lineProductId,TurnProfit.searchBalanceData.lineProductName,TurnProfit.searchBalanceData.transferPartnerAgencyId,TurnProfit.searchBalanceData.transferPartnerAgencyName,TurnProfit.searchBalanceData.partnerAgencyId,TurnProfit.searchBalanceData.partnerAgencyName,TurnProfit.searchBalanceData.startTime,TurnProfit.searchBalanceData.endTime);
                        });
                        //分页--尾页事件
                        $("#" + tabId + " .pageMode a.last").click(function(){
                            TurnProfit.listTurnProfit(data.totalPage == 0 ? data.totalPage : data.totalPage-1,TurnProfit.searchBalanceData.lineProductId,TurnProfit.searchBalanceData.lineProductName,TurnProfit.searchBalanceData.transferPartnerAgencyId,TurnProfit.searchBalanceData.transferPartnerAgencyName,TurnProfit.searchBalanceData.partnerAgencyId,TurnProfit.searchBalanceData.partnerAgencyName,TurnProfit.searchBalanceData.startTime,TurnProfit.searchBalanceData.endTime);

                        });
                        //查看遊客人數事件
                        $("#" + tabId + " .showPerson").click(function(){
                        	var visitorGroupId = $(this).attr("data-entity-id")
                        	TurnProfit.clickFlag = 1;
                        	TurnProfit.viewTouristGroup(visitorGroupId);
                        });
                      //查看收客團款明細事件
                        $("#" + tabId + " .showIncomeDetail").click(function(){
                        	
                        	var visitorGroupId = $(this).attr("data-entity-id")
                        	TurnProfit.clickFlag = 2
                        	TurnProfit.viewTouristGroup(visitorGroupId);
                        });
                      //查看中轉m 事件
                        $("#" + tabId + " .showChangeNeedPayDetail").click(function(){
                        	var visitorGroupId = $(this).attr("data-entity-id")
                        	TurnProfit.viewTransit(visitorGroupId);
                        });
                      //查看轉客事件
                        $("#" + tabId + " .showTransNeedPayDeatil").click(function(){
                        	var visitorGroupId = $(this).attr("data-entity-id")
                        	TurnProfit.viewTransfer(visitorGroupId);
                        });
                    }
                }
            });
        },
        //查看遊客小組的信息
        viewTouristGroup:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=viewTouristGroupDetails&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var touristGroupInfo = JSON.parse(data.touristGroupDetail);
						data.touristGroupDetail = touristGroupInfo;
						console.log(data);
						if(TurnProfit.clickFlag == 1){
							var html = viewTemplate(data);
							//addTab(menuKey+"-view","查看小组",html);
							layer.open({
								type : 1,
								title : "查看小组",
								skin : 'layui-layer-rim', // 加上边框
								area : [ "60%", '50%' ], // 宽高
								zIndex : 1028,
								content : html,
								success : function() {
									var tab = "tab-resource_touristGroup-view-content";
							    	$(".btn-submit-addTouristGroup").click(function(){
								    	layer.close(viewTouristGroup);
							    	})
									function MenberNumber(){
										$(".addTouristList tr").each(function(i){
											if(i>0){
												$(this).children().eq(0).text(i);
											}
										})
										//接送安排显示隐藏
										var that1 = $("#"+tab+" .touristGroupMainForm input[name=touristReception]");
										var that2 = $("#"+tab+" .touristGroupMainForm input[name=touristSend]");
										if($("#"+tab+" .touristGroupMainForm input[name=touristReception]").is(":checked") == true){
											that1.parent().parent().parent().find(".reception-div").removeClass("hide");
							    		}
							    		else{
							    			that1.parent().parent().parent().find(".reception-div").addClass("hide");
							    		}
							    		if($("#"+tab+" .touristGroupMainForm input[name=touristSend]").is(":checked") == true){
							    			that2.parent().parent().parent().find(".send-div").removeClass("hide");
							    		}
							    		else{
							    			that2.parent().parent().parent().find(".send-div").addClass("hide");
							    		}
									}
							    	MenberNumber();
								}
							});
						};
						if(TurnProfit.clickFlag == 2){
							//visitorGroupMainInfo
							var html = visitorGroupMainInfo(data);
							//addTab(menuKey+"-view","查看小组",html);
							layer.open({
								type : 1,
								title : "收客团款明細",
								skin : 'layui-layer-rim', // 加上边框
								area : [ "65%", '57%' ], // 宽高
								zIndex : 1028,
								content : html,
							});
						}
					}
				}
			});
		},
		viewTransit :function(id){
			$.ajax({
				url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupArrangeById&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
				type:"POST",
				dataType:"json",
				data:"id="+id,
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
		        	layer.close(globalLoadingLayer);
		        	var result = showDialog(data);
		        	if(result){
		        		data.bus = JSON.parse(data.bus);
						data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
						data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
						data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
						data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
						data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
						data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
						data.touristGroup = JSON.parse(data.touristGroup);
						var html =transitViewTemplate(data);
						
						layer.open({
							type : 1,
							title : "中转明细",
							skin : 'layui-layer-rim', // 加上边框
							area : [ "90%", '80%' ], // 宽高
							zIndex : 1028,
							content : html,
						});
		        	}
				}
			})
		},
		//查看我社转出分团转客信息	
		viewTransfer:function(id){
			//var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=findMember&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						type:3
					});
				},
				success:function(data){
					
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						var html = arrangeTransferViewTemplate(data);
						//addTab(menuKey+"-viewTransfer","查看我社转出",html);
						layer.open({
							type : 1,
							title : "转客明细",
							skin : 'layui-layer-rim', // 加上边框
							area : [ "60%", '50%' ], // 宽高
							zIndex : 1028,
							content : html,
						});
					}
				}
			});
		}
    }
    exports.listTurnProfit = TurnProfit.listTurnProfit;
});
