define(function(require, exports) {
    var listMainTemplate = require('./view/listMain'),
        listTemplate = require('./view/list'),
        orderMain = require('./main').main;
    var $tab = '';

    var orderConfirm = {};

    orderConfirm.initModule = function () {
        orderMain.findAllBindCompany(orderConfirm.listMain);
    }; 

    orderConfirm.listMain = function (data) {
        Tools.addTab('orderListConfirm', '已接订单', listMainTemplate());
        $tab = $('#tab-orderListConfirm-content');
        orderConfirm.$searchArea = $tab.find('.T-search-area');
        $tab.find('[name=authToken]').data('authtokenlist', data.bindAccountList);
        orderMain.companyAutoComplete($tab.find('.T-chooseCompany'), data);
        orderConfirm.list();
        orderMain.listMainEvent(orderConfirm.$searchArea, orderConfirm.list);
                orderMain.list_event($tab, orderConfirm.list, data);
        orderMain.setOrderStatusOption(orderConfirm.$searchArea, 2);
    };

    orderConfirm.list = function (page) {
        var searchData = orderMain.getSearchData(orderConfirm.$searchArea);
        searchData.pageNo = page || 0;
        $.ajax({
            url: KingServices.build_url_bus('customer/order','findOrderList'),
            type: 'POST',
            data: {
                orderStatusType: 2,
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
                            orderConfirm.list(obj.curr -1);
                        }
                    }
                }); 
            }
        });
    };

    exports.init = orderConfirm.initModule;
});