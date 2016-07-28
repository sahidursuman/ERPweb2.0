define(function(require, exports) {
    var listMainTemplate = require('./view/listMain'),
        listTemplate = require('./view/list'),
        orderMain = require('./main').main;
    var $tab = '';

    var orderWait = {};

    orderWait.initModule = function () {
        orderMain.findAllBindCompany(orderWait.listMain);
    }; 

    orderWait.listMain = function (data) {
        Tools.addTab('orderListWait', '待确认订单', listMainTemplate());
        $tab = $('#tab-orderListWait-content');
        orderWait.$searchArea = $tab.find('.T-search-area');
        $tab.find('[name=authToken]').data('authtokenlist', data.bindAccountList);
        orderMain.companyAutoComplete($tab.find('.T-chooseCompany'), data);
        orderWait.list();
        orderMain.listMainEvent(orderWait.$searchArea, orderWait.list);
                orderMain.list_event($tab, orderWait.list, data);
        orderMain.setOrderStatusOption(orderWait.$searchArea, 1);
    };

    orderWait.list = function (page) {
        var searchData = orderMain.getSearchData(orderWait.$searchArea);
        searchData.pageNo = page || 0;
        $.ajax({
            url: KingServices.build_url_bus('customer/order','findOrderList'),
            type: 'POST',
            data: {
                orderStatusType: 1,
                searchData: JSON.stringify(searchData)
            },
            success: function (data) {
                $tab.find('.T-orderList').html(listTemplate(data));

                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            orderWait.list(obj.curr -1);
                        }
                    }
                }); 
            }
        });
    };

    exports.init = orderWait.initModule;
});