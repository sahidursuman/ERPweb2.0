define(function(require, exports) {
    var menuKey = "financial_totalProfit",
    listTemplate = require("./view/list"),
    tableTemplate = require('./view/listTable'),
    tabId = "tab-"+menuKey+"-content";

    var TotalProfit = {
        searchData: false,
        $tab: false,
        $searchArea: false,
        countData:{}
    };

    TotalProfit.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        TotalProfit.listTotalProfit(0,dateJson.startDate,dateJson.endDate,"");
    };

    TotalProfit.listTotalProfit = function(page,startTime,endTime,type){
        if (TotalProfit.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            startTime = TotalProfit.$searchArea.find("input[name=startTime]").val(),
            endTime = TotalProfit.$searchArea.find("input[name=endTime]").val(),
            type = TotalProfit.$searchArea.find("select[name=type]").val()
        }
        TotalProfit.searchData = {
            pageNo : page,
            startTime:startTime,
            endTime:endTime,
            type : type
        };

        var searchParam = JSON.stringify(TotalProfit.searchData);

        $.ajax({
            url:KingServices.build_url("financialTotal","findTotal"),
            type: "POST",
            data: TotalProfit.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    console.log(data);
                    data.searchParam = TotalProfit.searchData
                    var html = listTemplate(data);
                    addTab(menuKey,"总利润表",html);
                    // 初始化jQuery 对象
                    var $tabId= $('#' + tabId);
                    TotalProfit.$tab = $tabId
                    TotalProfit.$searchArea = TotalProfit.$tab.find('.T-search-area');
                    //获取列表数据
                    TotalProfit.getListData($tabId,TotalProfit.searchData);
                    data.countData = TotalProfit.countData;
                    console.log(data);
                    Tools.setDatePicker(TotalProfit.$tab.find(".date-picker"),true);
                    //搜索按钮事件
                    TotalProfit.$tab.find('.T-search').on('click', function(event) {
                        event.preventDefault();
                        TotalProfit.listTotalProfit(0);
                    });

                    //报表内的操作
                    TotalProfit.$tab.find('.T-list').on("click",".T-option",function(){
                        var $this = $(this);
                        if($this.hasClass('T-transfer')){
                            //查看线路产品
                            KingServices.viewLineProduct($(this).data("id"));
                        } 
                    });

                    // 绑定翻页组件
                    laypage({
                        cont: TotalProfit.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                TotalProfit.listTotalProfit(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };
    //获取列表数据
    TotalProfit.getListData = function($obj,searchData){
        var resultData;
        $.ajax({
            url:KingServices.build_url("financialTotal","findPager"),
            data:searchData,
            type:'POST',
            success:function(data){
                var result = showDialog(data);
                if(result){
                    console.log(data);
                    var html = tableTemplate(data)
                    $obj.find('.T-list').html(html)
                }
            }
        });
    };
    exports.init = TotalProfit.initModule;
});
