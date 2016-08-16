/**
 * 新建订单 - 市内中转
 * @param  {[type]} require  [description]
 * @param  {[type]} exports) {               var listTemplate [description]
 * @return {[type]}          [description]
 */
define(function(require, exports) {
    var addCityTemplate = require('./viewCity/addCity'),
        updateCityTemplate = require('./viewCity/updateCity'),
        addCityGroupTemplate = require('./viewCity/addCityGroup'),
        cityGroupListTemplate = require('./viewCity/cityGroupList'),
        viewCityTemplate = require('./viewCity/viewCity'),
        main = '';

    var cityOrder = {
        authToken: ''
    };

    cityOrder.initModule = function (data) {
        main = require('./main').main;
        cityOrder.authToken = data.authToken;
        cityOrder.add(1, '', data);
    };

    cityOrder.add = function (type, id, changeData, authToken) {
        main = require('./main').main;
        var orderData = {
            order: {
                priceType: 1,
                touristGroupList: []
            },
            changeData: changeData
        };
        var title = (type ? '新建' : '修改') + '订单',
            template = addCityTemplate(orderData),
            idName = type ? 'addOrder' : 'updateOrder';
        if (!type) {
            $.ajax({
                url: KingServices.build_url_bus('customer/order','viewBusOrder',authToken),
                type: 'POST',
                data: {
                    orderId: id
                },
                success: function (data) {
                    if (!type) {
                        orderData = data;
                        orderData.authToken = authToken;
                        cityOrder.authToken = authToken;
                        template = updateCityTemplate(orderData);
                        Tools.addTab(idName, title, template);
                        var $tab = $('#tab-'+idName+'-content');
                        for (var j = 0; j < orderData.order.touristGroupList.length; j++) {
                            orderData.order.touristGroupList[j].touristGroupMemberDelList = [];
                        }
                        $tab.find('.T-touristList tbody').append(cityGroupListTemplate(data.order));
                        cityOrder.init_event($tab, type, orderData);
                        main.sortGroup($tab);
                        main.calcFee($tab);
                    }
                }
            });
        }else {
            Tools.addTab(idName, title, template);
            var $tab = $('#tab-'+idName+'-content');
            orderData.authToken = cityOrder.authToken;
            cityOrder.init_event($tab, type, orderData);
        }
    };

    cityOrder.init_event = function ($tab, type, orderData) {
        Tools.setDatePicker($tab.find('.T-datepicker'));
        main.init_event($tab);
        main.typeChange($tab);

        if (!!type) {
            main.getContractSeatPrice($tab);
        }

        main.tripAutocomplete($tab);

        $tab.find('.T-addGroup').on('click', function(event) {
            event.preventDefault();
            cityOrder.group($tab, {});
        });

        $tab.find('.T-saveOrder').on('click', function () {
            cityOrder.saveOrder($tab, orderData.authToken);
        });

        $tab.find('.T-touristList').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            if ($this.hasClass('T-update')) {
                main.updateGroup($tab, $this, $tr, cityOrder.group);
            } else if ($this.hasClass('T-delete')) {
                main.deleteGroup($tab, $this, $tr, id);
            }
        });

        function positionNameView() {
            var type = $tab.find('[name=cityType]').val();
            var positionName = type == 1 ? '下车点' : '上车点';
            $tab.find('.T-positionName').text(positionName);
        }

        positionNameView();

        $tab.find('[name=cityType]').on('change', function() {
            positionNameView();
        });
    };

    /**
     * 小组操作
     * @param  {[type]} data [数据]
     * @param  {[type]} type [类型] 1 编辑
     * @return {[type]}      [description]
     */
    cityOrder.group = function ($tab, data, editeType, $that) {
        var title = editeType ? '编辑小组' : '新增小组';
        var groupLayer = layer.open({
            type: 1,
            title: title,
            skin: 'layui-layer-rim', //加上边框
            area: '980px', //宽高
            zIndex: 1028,
            content: addCityGroupTemplate(data),
            scrollbar: false,
            success: function(){
                var $layer = $('.T-addCityGroup');
                $layer.find('.T-addContactMember').on('click', function (event) {
                    event.preventDefault();
                    var addContactTr = ['<tr>',
                        '<td><input name="name" type="text"></td>',
                        '<td><input name="mobileNumber" type="text"></td>',
                        '<td><button class="T-delete btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>',
                    '</tr>'].join('');
                    $layer.find('.T-contactMemberList').append(addContactTr);
                    $(window).trigger('resize');
                });
                main.historyHotelComplete($layer, cityOrder.authToken);
                main.historyHotelAddressComplete($layer, cityOrder.authToken);
                $layer.find('.T-contactMemberList').on('click', '.T-delete', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    var $this = $(this),
                        $tr = $this.closest('tr'),
                        id = $tr.data('id');
                    if (!!id) {
                        showConfirmDialog('确定要删除该联系人？', function () {
                            $tr.addClass('delete').hide();
                        });
                    } else {
                        $tr.remove();
                    }
                    $(window).trigger('resize');
                });
                $layer.find('.T-save').on('click', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    var touristGroupjson = {
                        id: main.getValue($layer, 'id'),
                        tripNumber: main.getValue($layer, 'tripNumber'),
                        driverIncomeMoney: main.getValue($layer, 'driverIncomeMoney'),
                        adultCount: main.getValue($layer, 'adultCount'),
                        childCount: $layer.find('[name=childCount]').val() || 0,
                        hotelName: main.getValue($layer, 'hotelName'),
                        hotelAddress: main.getValue($layer, 'hotelAddress'),
                        remark: main.getValue($layer, 'remark'),
                        touristGroupMemberList: [],
                        touristGroupMemberDelList: []
                    };

                    var memberListTr = $layer.find('.T-contactMemberList tr');
                    memberListTr.each(function(i) {
                        if (i > 0) {
                            if (memberListTr.eq(i).hasClass('delete')) {
                                var delJson = {
                                    id: memberListTr.eq(i).data('id')
                                };
                                touristGroupjson.touristGroupMemberDelList.push(delJson);
                            } else {
                                var json = {
                                    id: memberListTr.eq(i).data('id'),
                                    name: main.getValue(memberListTr.eq(i), 'name'),
                                    mobileNumber: main.getValue(memberListTr.eq(i), 'mobileNumber')
                                };
                                touristGroupjson.touristGroupMemberList.push(json);
                            }
                        }
                    });
                    var grouplistData = {
                        touristGroupList: [touristGroupjson]
                    };
                    if (editeType) {
                        var $tr = $that.closest('tr');
                        $tr.before(cityGroupListTemplate(grouplistData));
                        var delTr = [],
                            index = $tr.data('index');
                        delTr.push($tr);
                        for (var i = 1; i < index; i++) {
                            delTr.push($tr.next());
                            $tr = $tr.next();
                        }
                        for (var j = 0; j < delTr.length; j++) {
                            delTr[j].remove();
                        }
                    } else {
                        $tab.find('.T-touristList tbody').append(cityGroupListTemplate(grouplistData));
                    }
                    layer.close(groupLayer);
                    main.sortGroup($tab);
                    main.calcFee($tab);
                });
            }
        });
    };

    cityOrder.viewOrder = function (id, authToken) {
        $.ajax({
            url: KingServices.build_url_bus('customer/order','viewBusOrder', authToken),
            type: 'POST',
            data: {
                orderId: id
            },
            success: function (data) {
                Tools.addTab('viewOrder', '查看订单', viewCityTemplate(data));
                var $tab = $('#tab-viewOrder-content');
                Tools.descToolTip($tab.find('.T-ctrl-tip'), 1);
                main = require('./main').main;
                main.sortGroup($tab);
                main.calcFee($tab);
                main.viewOperationRecord($tab, id, authToken);
            }
        });
    };

    cityOrder.saveOrder = function ($tab, authToken) {
        var orderData = {
            tripTypeId: main.getValue($tab, 'tripTypeId'),
            baseJson: {
                id: main.getValue($tab, 'id'),
                tripTime: main.getValue($tab, 'tripTime'),
                guideName: main.getValue($tab, 'guideName'),
                guideMobileNumber: main.getValue($tab, 'guideMobileNumber'),
                togetherPosition: main.getValue($tab, 'togetherPosition'),
                togetherHour: main.getValue($tab, 'togetherHour'),
                togetherMinute: main.getValue($tab, 'togetherMinute'),
                priceType: 1,
                price: main.getValue($tab, 'carpoolingPrice'),
                orderRemark: main.getValue($tab, 'orderRemark'),
                cityType: main.getValue($tab, 'cityType')
            },
            touristGroupJson: [],
            touristGroupDelJson: [],
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
            url: KingServices.build_url_bus('customer/order','saveBusOrder', authToken),
            type: 'POST',
            data: orderData,
            success: function (data) {
                showLayerMessage(data.message);
                Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                KingServices.orderWaitListRefresh();
            }
        });
    };

    exports.cityOrder = cityOrder;
    exports.viewCityOrder = cityOrder.viewOrder;
    exports.updateCityOrder = cityOrder.add;
});