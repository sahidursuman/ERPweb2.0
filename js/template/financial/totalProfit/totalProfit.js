define(function(require, exports) {
    var menuKey = "financial_totalProfit",
    listTemplate = require("./view/list"),
    tabId = "tab-"+menuKey+"-content";

    var TotalProfit = {
        searchData: false,
        $tab: false,
        $searchArea: false,
    };

    TotalProfit.initModule = function() {
        TotalProfit.listTotalProfit();
    };

    TotalProfit.listTotalProfit = function(startTime,endTime){
        if (TotalProfit.$searchArea && arguments.length === 0) {
            // 初始化页面后，可以获取页面的参数
            startTime = TotalProfit.$searchArea.find("input[name=startTime]").val(),
            endTime = TotalProfit.$searchArea.find("input[name=endTime]").val()
        }

        $.ajax({
            url:TotalProfit.url("profitTotal","getTotalProfit"),
            type: "POST",
            data: {
                startTime : startTime,
                endTime : endTime,
                sortType: 'auto'
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    TotalProfit.searchData={
                        startTime:startTime,
                        endTime:endTime
                    };
                    data.searchParam = TotalProfit.searchData
                    var html = listTemplate(data);
                    addTab(menuKey,"总利润表",html);
                    // 初始化jQuery 对象
                    TotalProfit.$tab = $('#' + tabId);
                    TotalProfit.$searchArea = TotalProfit.$tab.find('.T-search-area');

                    TotalProfit.$tab.find(".date-picker").datepicker({
                        autoclose: true,
                        todayHighlight: true,
                        format: 'yyyy-mm-dd',
                        language: 'zh-CN'
                    });
                    //搜索按钮事件
                    TotalProfit.$tab.find('.T-search').on('click', function(event) {
                        event.preventDefault();
                        TotalProfit.listTotalProfit();
                    });
                }
            }
        });
    };

    TotalProfit.url = function(path,method){
        var url = ''+APP_ROOT+'back/'+path +'.do?method='+method+'&token='+$.cookie('token')+'';
        return url;
    };

    exports.init = TotalProfit.initModule;
});
