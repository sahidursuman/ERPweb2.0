define(function(require, exports) {
    var menuKey = "financial_replaceProfit",
        listTemplate = require("./view/list"),
        tabId = "tab-"+menuKey+"-content"

    var ReplaceProfit = {
    	searchData:{
    		"partnerAgencyId":"",
    		"partnerAgencyName":"",
            "hotelId":"",
            "hotelName":"",
            "scenicId":"",
            "scenicName":"",
            "type":"",
            "needSeatCount":"",
            "startTime":"",
            "endTime":""
            
    	},
    	listReplaceProfit:function(pageNo,partnerAgencyId,partnerAgencyName,hotelId,hotelName,scenicId,scenicName,type,needSeatCount,startTime,endTime){
            $.ajax({
                url:""+APP_ROOT+"back/profitBooking.do?method=listFinancialBookingOrder&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"pageNo="+pageNo+"&partnerAgencyId="+partnerAgencyId+"&hotelId="+hotelId+"&scenicId="+scenicId+"&type="+type+"&needSeatCount="+needSeatCount+"&startTime="+startTime+"&endTime="+endTime+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	data.bookingOrderList = JSON.parse(data.bookingOrderList);
                    	ReplaceProfit.searchData={
                    		partnerAgencyId:partnerAgencyId,
                    		partnerAgencyName:partnerAgencyName,
                            hotelId:scenicId,
                            hotelName:hotelName,
                            scenicId:scenicId,
                            scenicName:scenicName,
                            type:type,
                            needSeatCount:needSeatCount,
                            startTime:startTime,
                            endTime:endTime
                            
                    	};
                    	data.searchParam = ReplaceProfit.searchData;
                        var html = listTemplate(data);
                        addTab(menuKey,"代订利润",html);
                        $("#" + tabId + " .date-picker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
                        //获取搜索框数据
                        ReplaceProfit.getSearchData()
                        //搜索按钮事件
                        $("#" + tabId + " .btn-bookingProFit-search").click(function(){
                        	ReplaceProfit.searchData={
                            		partnerAgencyId:$("#" + tabId + " .search-area").find("input[name=partnerAgencyId]").val(),
                            		partnerAgencyName:$("#" + tabId + " .search-area").find("input[name=chooseAgencies]").val(),
                                    hotelId:$("#" + tabId + " .search-area").find("input[name=hotelId]").val(),
                                    hotelName:$("#" + tabId + " .search-area").find("input[name=chooseLineHotels]").val(),
                                    scenicId:$("#" + tabId + " .search-area").find("input[name=scenicId]").val(),
                                    scenicName:$("#" + tabId + " .search-area").find("input[name=chooseScenics]").val(),
                                    type:$("#" + tabId + " .search-area").find("select[name=ticketType]").val(),
                                    needSeatCount:$("#" + tabId + " .search-area").find("input[name=busSeat]").val(),
                                    startTime:$("#" + tabId + " .search-area").find("input[name=startTime]").val(),
                                    endTime:$("#" + tabId + " .search-area").find("input[name=endTime]").val()
                            };
                        	ReplaceProfit.listReplaceProfit(0,ReplaceProfit.searchData.partnerAgencyId,ReplaceProfit.searchData.partnerAgencyName,ReplaceProfit.searchData.hotelId,ReplaceProfit.searchData.hotelName,ReplaceProfit.searchData.scenicId,ReplaceProfit.searchData.scenicName,ReplaceProfit.searchData.type,ReplaceProfit.searchData.needSeatCount,ReplaceProfit.searchData.startTime,ReplaceProfit.searchData.endTime);
                        });

                        //分页--首页按钮事件
                        $("#" + tabId + " .pageMode a.first").click(function(){
                        	ReplaceProfit.listReplaceProfit(0,ReplaceProfit.searchData.partnerAgencyId,ReplaceProfit.searchData.partnerAgencyName,ReplaceProfit.searchData.hotelId,ReplaceProfit.searchData.hotelName,ReplaceProfit.searchData.scenicId,ReplaceProfit.searchData.scenicName,ReplaceProfit.searchData.type,ReplaceProfit.searchData.needSeatCount,ReplaceProfit.searchData.startTime,ReplaceProfit.searchData.endTime);
                        });
                        //分页--上一页事件
                        $("#" + tabId + " .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            ReplaceProfit.listReplaceProfit(previous,ReplaceProfit.searchData.partnerAgencyId,ReplaceProfit.searchData.partnerAgencyName,ReplaceProfit.searchData.hotelId,ReplaceProfit.searchData.hotelName,ReplaceProfit.searchData.scenicId,ReplaceProfit.searchData.scenicName,ReplaceProfit.searchData.type,ReplaceProfit.searchData.needSeatCount,ReplaceProfit.searchData.startTime,ReplaceProfit.searchData.endTime);
                        });
                        //分页--下一页事件
                        $("#" + tabId + " .pageMode a.next").click(function(){
                            var name = $(".main-content .page-content input[name=ticket_name]").val();
                            var status = $(".main-content .page-content .btn-status").find("button").attr("data-value");
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            ReplaceProfit.listReplaceProfit(next,ReplaceProfit.searchData.partnerAgencyId,ReplaceProfit.searchData.partnerAgencyName,ReplaceProfit.searchData.hotelId,ReplaceProfit.searchData.hotelName,ReplaceProfit.searchData.scenicId,ReplaceProfit.searchData.scenicName,ReplaceProfit.searchData.type,ReplaceProfit.searchData.needSeatCount,ReplaceProfit.searchData.startTime,ReplaceProfit.searchData.endTime);

                        });
                        //分页--尾页事件
                        $("#" + tabId + " .pageMode a.last").click(function(){
                            ReplaceProfit.listReplaceProfit(data.totalPage == 0 ? data.totalPage : data.totalPage-1,ReplaceProfit.searchData.partnerAgencyId,ReplaceProfit.searchData.partnerAgencyName,ReplaceProfit.searchData.hotelId,ReplaceProfit.searchData.hotelName,ReplaceProfit.searchData.scenicId,ReplaceProfit.searchData.scenicName,ReplaceProfit.searchData.type,ReplaceProfit.searchData.needSeatCount,ReplaceProfit.searchData.startTime,ReplaceProfit.searchData.endTime);
                        });
                    }
                }
            });
        },
        //获取搜索框的数据
        getSearchData:function(){
        	var customer = $("#" + tabId + " input[name=chooseAgencies]"),
        	    hotel = $("#" + tabId + " input[name=chooseLineHotels]"),
        	    scenics = $("#" + tabId + " input[name=chooseScenics]"),
        	    chooseBus = $("#" + tabId + " input[name=chooseBus]");
        	$.ajax({
        		url:""+APP_ROOT+"back/profitBooking.do?method=getFinancialConditions&token="+$.cookie("token")+"&menuKey=resource_lineProduct&operation=view",
        		dataType:"json",
        		success:function(data){
        			var result = showDialog(data);
        			if(result){
        				var searchData = JSON.parse(data.conditions),
        				    customerList = searchData.agencies,
        				    hotelList = searchData.hotels,
        				    busList = searchData.needSeatCounts,
        				    scenicsList = searchData.scenics,
        				    busList = []
        				    
        				if(searchData.needSeatCounts !=null && searchData.needSeatCounts.length>0){
        					for(var i = 0;i<searchData.needSeatCounts.length;i++){
        						var busSeat = {"count":searchData.needSeatCounts[i]}
        						busList.push(busSeat)
        						for(var j = 0;j<busList.length;j++){
        							busList[j].value = busList[j].count
        						}
        					}
        				}
        				if(customerList !=null && customerList.length>0){
        					for(var i = 0;i<customerList.length;i++){
        						customerList[i].value =  customerList[i].travelAgencyName
        					}
        				}
        				if(hotelList !=null && hotelList.length>0){
        					for(var i = 0;i<hotelList.length;i++){
        						hotelList[i].value =  hotelList[i].name
        					}
        				}
        				
        				if(scenicsList !=null && scenicsList.length>0){
        					for(var i = 0;i<scenicsList.length;i++){
        						scenicsList[i].value =  scenicsList[i].name
        					}
        				}
        				//旅游车数据
        				chooseBus.autocomplete({
        					minLength:0,
        					change:function(event,ui){
        						if(ui.item == null){
        							$(this).next().val("");
        						}
        					},
        					select:function(event,ui){
        						$(this).blur();
        						$(this).next().val(ui.item.count);
        					}
        				}).off("click").on("click", function(){
        					var Obj = chooseBus;
        					$(Obj).autocomplete('option','source',busList );
							$(Obj).autocomplete('search', '');
        				});
        				//客户数据
        				customer.autocomplete({
        					minLength:0,
        					change:function(event,ui){
        						if(ui.item == null){
        							$(this).next().val("");
        						}
        					},
        					select:function(event,ui){
        						$(this).blur();
        						$(this).next().val(ui.item.id);
        					}
        				}).off("click").on("click", function(){
        					var Obj = customer;
        					$(Obj).autocomplete('option','source', customerList);
							$(Obj).autocomplete('search', '');
        				});
        				//酒店数据
        				hotel.autocomplete({
        					minLength:0,
        					change:function(event,ui){
        						if(ui.item == null){
        							$(this).next().val("");
        						}
        					},
        					select:function(event,ui){
        						$(this).blur();
        						$(this).next().val(ui.item.id);
        					}
        				}).off("click").on("click", function(){
        					var Obj = hotel;
        					$(Obj).autocomplete('option','source', hotelList);
							$(Obj).autocomplete('search', '');
        				});
        				//景区
        				scenics.autocomplete({
        					minLength:0,
        					change:function(event,ui){
        						if(ui.item == null){
        							$(this).next().val("");
        						}
        					},
        					select:function(event,ui){
        						$(this).blur();
        						$(this).next().val(ui.item.id);
        					}
        				}).off("click").on("click", function(){
        					var Obj = scenics;
        					$(Obj).autocomplete('option','source', scenicsList);
							$(Obj).autocomplete('search', '');
        				});
        			}
        		}
        	
        	})
        },
    }
    exports.listReplaceProfit = ReplaceProfit.listReplaceProfit;
});
