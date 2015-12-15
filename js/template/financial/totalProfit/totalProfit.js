define(function(require, exports) {
    var menuKey = "financial_totalProfit",
    listTemplate = require("./view/list"),
    tableTemplate = require('./view/listTable'),
    tabId = "tab-"+menuKey+"-content";

    var TotalProfit = {
        searchData: false,
        $tab: false,
        $searchArea: false,
        headerData:{},
        changeStatus:false
    };

    TotalProfit.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        TotalProfit.listTotalProfit(dateJson);
    };

    TotalProfit.listTotalProfit = function(searchData){
        if (Tools.addTab(menuKey,"总利润表",listTemplate(searchData))) {
            TotalProfit.initEvents();
        }
        
    };
    //处理事件
    TotalProfit.initEvents = function($obj,data){
        TotalProfit.$tab = $('#tab-'+ menuKey + '-content');
        TotalProfit.$searchArea = TotalProfit.$tab.find('.T-search-area');

        //格式化时间控件
        Tools.setDatePicker(TotalProfit.$tab.find(".date-picker"),true);

        //搜索按钮事件
        TotalProfit.$searchArea.find('.T-search').on('click', function(){
            var args = {
                startTime: TotalProfit.$searchArea.find("input[name=startTime]").val(),
                endTime: TotalProfit.$searchArea.find("input[name=endTime]").val(),
                type: TotalProfit.$searchArea.find("select[name=type]").val()
            };
            //获取数据列表
            TotalProfit.getListData(0, args);
            // 获取统计数据
            TotalProfit.getCountData(args);
        }).trigger('click');
    };
    //获取列表数据
    TotalProfit.getListData = function(page, args){
        if (!!args) {
            args.pageNo = page || 0;
        } else if (TotalProfit.$searchArea) {
            args = {
                startTime: TotalProfit.$searchArea.find("input[name=startTime]").val(),
                endTime: TotalProfit.$searchArea.find("input[name=endTime]").val(),
                type: TotalProfit.$searchArea.find("select[name=type]").val(),
                pageNo: page || 0
            }
        }
        $.ajax({
            url:KingServices.build_url("financialTotal","findPager"),
            data:args,
            showLoading:false,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    TotalProfit.$tab.find('.T-list').html(tableTemplate(data));

                    TotalProfit.$tab.find('.T-recordSize').html(Tools.getRecordSizeDesc(data.searchParam.totalCount));

                    // 绑定翻页组件
                    laypage({
                        cont: TotalProfit.$tab.find('.T-pagenation'), 
                        pages: data.searchParam.totalPage, //总页数
                        curr: (data.searchParam.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                                TotalProfit.getListData(obj.curr -1);
                            }
                        }
                    }); 
                }
            }
        });
    };
    //获取统计数据
    TotalProfit.getCountData = function(args){
        $.ajax({
            url:KingServices.build_url("financialTotal","findTotal"),
            data:args,
            showLoading:false,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    console.log(data);
                    TotalProfit.$tab.find('.income').text(data.total.income);
                    TotalProfit.$tab.find('.cost').text(data.total.cost);
                    TotalProfit.$tab.find('.profit').text(data.total.profit);
                }
            }
        });
    };
    exports.init = TotalProfit.initModule;
});
