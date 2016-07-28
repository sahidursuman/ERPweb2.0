define(function(require, exports) {
    var listMainTemplate = require('./view/listMain'),
        listTemplate = require('./view/list'),
        orderMain = require('./main').main;
    var $tab = '';

    var orderInvalid = {};

    orderInvalid.initModule = function () {
        orderMain.findAllBindCompany(orderInvalid.listMain);
    }; 

    orderInvalid.listMain = function (data) {
        Tools.addTab('orderListInvalid', '无效订单', listMainTemplate());
        $tab = $('#tab-orderListInvalid-content');
        orderInvalid.$searchArea = $tab.find('.T-search-area');
        $tab.find('[name=authToken]').data('authtokenlist', data.bindAccountList);
        orderMain.companyAutoComplete($tab.find('.T-chooseCompany'), data);
        orderInvalid.list();
        orderMain.listMainEvent(orderInvalid.$searchArea, orderInvalid.list);
                orderMain.list_event($tab, orderInvalid.list, data);
        orderMain.setOrderStatusOption(orderInvalid.$searchArea, 3);
    };

    orderInvalid.list = function (page) {
        var searchData = orderMain.getSearchData(orderInvalid.$searchArea);
        searchData.pageNo = page || 0;
        $.ajax({
            url: KingServices.build_url_bus('customer/order','findOrderList'),
            type: 'POST',
            data: {
                orderStatusType: 3,
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
                            orderInvalid.list(obj.curr -1);
                        }
                    }
                }); 
            }
        });
    };

    exports.init = orderInvalid.initModule;
});