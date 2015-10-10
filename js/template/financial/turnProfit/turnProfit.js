define(function(require, exports) {
    var menuKey = "financial_turnProfit",
     listTurnProfit = require("./view/list"),
    tabId = "tab-"+menuKey+"-content",
    checkTabId = menuKey+"-checking",
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
                    }
                }
            });
        },
    }
    exports.listTurnProfit = TurnProfit.listTurnProfit;
});
