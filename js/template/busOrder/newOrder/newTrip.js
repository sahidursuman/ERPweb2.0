/**
 * 新建订单 - 跟团
 * @param  {[type]} require  [description]
 * @param  {[type]} exports) {               var listTemplate [description]
 * @return {[type]}          [description]
 */
define(function(require, exports) {
    var addTripTemplate = require('./viewTrip/addTrip'),
        updateTripTemplate = require('./viewTrip/updateTrip'),
        viewTripTemplate = require('./viewTrip/viewTrip'),
        main = '';
    var tripOrder = {
        authToken: ''
    };

    tripOrder.initModule = function (data) {
        main = require('./main').main;
        tripOrder.authToken = data.authToken;
        tripOrder.add(1, '', data);
    };

    tripOrder.add = function (type, id, changeData, authToken) {
        main = require('./main').main;
        var orderData = {
            order: {
                priceType: 1,
                touristGroupList: []
            },
            changeData: changeData
        };
        var title = (type ? '新建' : '修改') + '订单',
            template = addTripTemplate(orderData),
            idName = type ? 'addOrder' : 'updateOrder';
        if (!type) {
            $.ajax({
                url: KingServices.build_url_bus('customer/order','viewBusOrder', authToken),
                type: 'POST',
                data: {
                    orderId: id
                },
                success: function (data) {
                    if (!type) {
                        orderData = data;
                        orderData.authToken = authToken;
                        template = updateTripTemplate(orderData);
                        Tools.addTab(idName, title, template);
                        var $tab = $('#tab-'+idName+'-content');
                        tripOrder.init_event($tab, orderData);
                        main.calcFee($tab);
                    }
                }
            });
        }else {
            Tools.addTab(idName, title, template);
            var $tab = $('#tab-'+idName+'-content');
            orderData.authToken = tripOrder.authToken;
            tripOrder.init_event($tab, orderData);
        }
    };

    tripOrder.init_event = function ($tab, orderData) {
        Tools.setDatePicker($tab.find('.T-datepicker'));
        main.init_event($tab);
        main.typeChange($tab);
        main.tripAutocomplete($tab);

        $tab.find('.T-saveOrder').on('click', function () {
            tripOrder.saveOrder($tab, orderData.authToken);
        });
    }; 

    tripOrder.viewOrder = function (id, authToken) {
        $.ajax({
            url: KingServices.build_url_bus('customer/order','viewBusOrder', authToken),
            type: 'POST',
            data: {
                orderId: id
            },
            success: function (data) {
                Tools.addTab('viewOrder', '查看订单', viewTripTemplate(data));
                var $tab = $('#tab-viewOrder-content');
                Tools.descToolTip($tab.find('.T-ctrl-tip'), 1);
                main = require('./main').main;
                main.calcFee($tab);
                main.viewOperationRecord($tab, id, authToken);
            }
        });
    };

    tripOrder.saveOrder = function ($tab, authToken) {
        var orderData = {
            tripTypeId: main.getValue($tab, 'tripTypeId'),
            baseJson: {
                id: main.getValue($tab, 'id'),
                tripDriverIncomeMoney: main.getValue($tab, 'tripDriverIncomeMoney'),
                tripTime: main.getValue($tab, 'tripTime'),
                guideName: main.getValue($tab, 'guideName'),
                guideMobileNumber: main.getValue($tab, 'guideMobileNumber'),
                tripEndTime: main.getValue($tab, 'tripEndTime'),
                lineProductName: main.getValue($tab, 'lineProductName'),
                togetherPosition: main.getValue($tab, 'togetherPosition'),
                togetherHour: main.getValue($tab, 'togetherHour'),
                togetherMinute: main.getValue($tab, 'togetherMinute'),
                adultCount: main.getValue($tab, 'adultCount'),
                childCount: main.getValue($tab, 'childCount'),
                priceType: 0,
                price: main.getValue($tab, 'charterPrice'),
                orderRemark: main.getValue($tab, 'orderRemark')
            },
            otherFeeJson: [],
            otherFeeDelJson: [],
        };

        var touristGroupList = $tab.find('.T-touristList tr.T-sort');
        touristGroupList.each(function(i) {
            if (touristGroupList.eq(i).hasClass('delete')) {
                var delJson = {
                    id: touristGroupList.eq(i).data('id')
                };
                if (!!delJson.id) {
                    orderData.touristGroupDelJson.push(delJson);
                }
            } else {
                orderData.touristGroupJson.push(touristGroupList.eq(i).data('content'));
            }
        });
        var feeList = $tab.find('.T-feeListRemark tr');
        feeList.each(function(i) {
            if (i > 0) {
                if (feeList.eq(i).hasClass('delete')) {
                    var delJson = {
                        id: feeList.eq(i).data('id')
                    };
                    orderData.otherFeeDelJson.push(delJson);
                } else {
                    var json = {
                        id: feeList.eq(i).data('id'),
                        fee: main.getValue(feeList.eq(i), 'fee'),
                        name: main.getValue(feeList.eq(i), 'name'),
                        remark: main.getValue(feeList.eq(i), 'remark')
                    };
                    if (!!json.fee || !!json.remark || !!json.id) {
                        orderData.otherFeeJson.push(json);
                    }
                }
            }
        });

        orderData.touristGroupJson = JSON.stringify(orderData.touristGroupJson);
        orderData.touristGroupDelJson = JSON.stringify(orderData.touristGroupDelJson);
        orderData.otherFeeJson = JSON.stringify(orderData.otherFeeJson);
        orderData.otherFeeDelJson = JSON.stringify(orderData.otherFeeDelJson);
        orderData.baseJson = JSON.stringify(orderData.baseJson);

        $.ajax({
            url: KingServices.build_url_bus('customer/order','saveBusOrder',authToken),
            type: 'POST',
            data: orderData,
            success: function (data) {
                showLayerMessage(data.message);
                Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                KingServices.orderWaitListRefresh();
            }
        });
    };

    exports.tripOrder = tripOrder;
    exports.updateTripOrder = tripOrder.add;
    exports.viewTripOrder = tripOrder.viewOrder;
});