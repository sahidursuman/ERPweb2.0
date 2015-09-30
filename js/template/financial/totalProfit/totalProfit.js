define(function(require, exports) {
    var menuKey = "financial_totalProfit",
    listTemplate = require("./view/list"),
    tabId = "tab-"+menuKey+"-content";
   

    var TotalProfit = {
        searchData:{
            "startTime":"",
            "endTime":""
        },
        listTotalProfit:function(startTime,endTime){
            $.ajax({
                url:""+APP_ROOT+"back/profitTotal.do?method=getTotalProfit&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"startTime="+startTime+"&endTime="+endTime+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	TotalProfit.searchData={
                    			startTime:startTime,
                    			endTime:endTime
                    	};
                        data.searchParam = TotalProfit.searchData
                        var html = listTemplate(data);
                        addTab(menuKey,"总利润表",html);
                        //事件控件
                        $("#" + tabId + " .date-picker").datepicker({
							autoclose: true,
							todayHighlight: true,
							format: 'yyyy-mm-dd',
							language: 'zh-CN'
						});
                        //搜索按钮事件
                        $("#" + tabId + " .btn-totalTourist-search").click(function(){
                            TotalProfit.searchData={
                                startTime:$("#" + tabId + "  input[name=startTime]").val(),
                                endTime:$("#" + tabId + " input[name=endTime]").val(),
                            }
                            TotalProfit.listTotalProfit(TotalProfit.searchData.startTime,TotalProfit.searchData.endTime);
                        });


                        //分页--首页按钮事件
                        $("#" + tabId + " .pageMode a.first").click(function(){

                            TotalProfit.listTicket(0,TotalProfit.TotalProfit.searchData.year,TotalProfit.searchData.month);
                        });
                        //分页--上一页事件
                        $("#" + tabId + " .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            TotalProfit.listTotalProfit(previous,TotalProfit.searchData.totalId,TotalProfit.searchData.year,TotalProfit.searchData.month);
                        });
                        //分页--下一页事件
                        $("#" + tabId + " .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            TotalProfit.listTotalProfit(next,TotalProfit.searchData.totalId,TotalProfit.searchData.year,TotalProfit.searchData.month);
                        });
                        //分页--尾页事件
                        $("#" + tabId + " .pageMode a.last").click(function(){
                            TotalProfit.listTotalProfit(data.totalPage == 0 ? data.totalPage:data.totalPage-1,TotalProfit.searchData.totalId,TotalProfit.searchData.year,TotalProfit.searchData.month);
                        });


                    }
                }
            });
        },
    }
    exports.listTotalProfit = TotalProfit.listTotalProfit;
});
