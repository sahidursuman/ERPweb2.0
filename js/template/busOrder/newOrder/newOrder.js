/**
 * 新建订单
 * @param  {[type]} require  [description]
 * @param  {[type]} exports) {var listTemplate [description]
 * @return {[type]}          [description]
 */
define(function(require, exports) {
    var addTemplate = require('./view/add'),
        updateTemplate = require('./view/update'),
        viewTemplate = require('./view/view'),
        // shuttleTemplate = require('./view/shuttle'),
        addGroupTemplate = require('./view/addGroup'),
        groupListTemplate = require('./view/groupList'),
        chooseCompanyTemplate = require('./view/chooseCompany'),
        main = '';

    var newOrder = {
        authToken: ''
    };

    newOrder.initModule = function (data) {
        data = data || {};
        main = require('./main').main;
        if (!!data && !!data.authToken) {
            newOrder.authToken = data.authToken;
            newOrder.add(1, '', data);
        } else {
            $.ajax({
                url: KingServices.build_url_bus('bindAccount','findAllBindCompany'),
                type: 'POST',
                data: {
                    travelAgency: IndexData.userInfo.travelAgencyShortName
                },
                success: function (data) {
                    if (data.bindAccountList.length) {
                        var publicLayer = layer.open({
                            type: 1,
                            title: '选择车队',
                            skin: 'layui-layer-rim', //加上边框
                            area: '780px', //宽高
                            zIndex: 1028,
                            content: chooseCompanyTemplate(data),
                            scrollbar: false,
                            success: function(){
                                var $layer = $('.T-chooseCompanyContent');
                                $layer.find('.T-save').on('click', function () {
                                    var $checked = $layer.find('tr input:checked');
                                    if ($checked.length) {
                                        var $checkedTr = $checked.closest('tr'),
                                            authToken = $checkedTr.data('token'),
                                            companyName = $checkedTr.data('name');
                                        data.authToken = authToken;
                                        data.companyName = companyName;
                                        newOrder.authToken = authToken;
                                        layer.close(publicLayer);
                                        newOrder.add(1, '', data);
                                    } else {
                                        showLayerMessage('请选择一个车队！');
                                    }
                                });
                            }
                        });
                    } else {
                        showMessageDialog('您还没有绑定任何车队，请先绑定车队！', function () {
                            KingServices.bindCompany();
                        });
                    }
                }
            });
        }
    };
    /**
     * 新增/修改 订单
     * @param {[type]} type [1 新增  0 修改]
     * @param {[type]} id   [description]
     */
    newOrder.add = function (type, id, changeData, authToken) {
        main = require('./main').main;
        var orderData = {
            order: {
                priceType: 1,
                touristGroupList: []
            },
            changeData: changeData
        };
        var title = (type ? '新建' : '修改') + '订单',
            template = addTemplate(orderData),
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
                        var isRoundTrip = orderData.order.isRoundTrip,
                            position = orderData.order.tripType.position,
                            tripType = orderData.order.tripType.type,
                            roundPosition = isRoundTrip ? orderData.order.roundTripType.position : '',
                            groupList = orderData.order.touristGroupList;
                        for (var i = 0; i < groupList.length; i++) {
                            groupList[i].isRoundTrip = isRoundTrip;
                            groupList[i].position = position;
                            groupList[i].type = tripType;
                            groupList[i].roundPosition = roundPosition;
                        }
                        template = updateTemplate(orderData);
                        Tools.addTab(idName, title, template);
                        var $tab = $('#tab-'+idName+'-content');
                        for (var j = 0; j < orderData.order.touristGroupList.length; j++) {
                            orderData.order.touristGroupList[j].touristGroupMemberDelList = [];
                        }
                        newOrder.init_event($tab, type, orderData);
                    }
                }
            });
        }else {
            Tools.addTab(idName, title, template);
            var $tab = $('#tab-'+idName+'-content');
            orderData.authToken = newOrder.authToken;
            newOrder.init_event($tab, type, orderData);
        }
    };

    newOrder.init_event = function ($tab, type, orderData) {
        $tab.find('[name=authToken]').val(newOrder.authToken);
        var companyName = type ? orderData.changeData.companyName : orderData.companyName;
        $tab.find('[name=companyName]').val(companyName);
        $tab.find('.T-companyName').text(companyName);
        $tab.find('.T-touristList tbody').append(groupListTemplate(orderData.order));

        main.init_event($tab);
        
        if (!type) {
            main.calcFee($tab);
            main.sortGroup($tab);
            newOrder.tripAutocomplete($tab, 'roundTripSelect');
            if (orderData.order.priceType == '0') {
                main.getContractSeatPrice($tab);
            }
        }
        main.typeChange($tab, 'newOrder');

        //监听行程类型变化
        newOrder.listenTripChange($tab);
        Tools.setDatePicker($tab.find('.T-datepicker'));
        $tab.find('[name=position]').trigger('change');

        if (type) {
            newOrder.tripAutocomplete($tab, 'tripSelect');
            main.getContractSeatPrice($tab);
        }
        
        $tab.find('.T-touristList').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            if ($this.hasClass('T-update')) {
                main.updateGroup($tab, $this, $tr, newOrder.group);
            } else if ($this.hasClass('T-delete')) {
                main.deleteGroup($tab, $this, $tr, id);
            }
        });
        $tab.find('.T-addGroup').on('click', function(event) {
            event.preventDefault();
            newOrder.group($tab, {});
        });

        $tab.find('.T-saveOrder').on('click', function(event) {
            event.preventDefault();
            newOrder.saveOrder($tab, orderData.authToken);
        });
    };

    newOrder.viewOrder = function (id, authToken) {
        $.ajax({
            url: KingServices.build_url_bus('customer/order','viewBusOrder', authToken),
            type: 'POST',
            data: {
                orderId: id
            },
            success: function (data) {
                var isRoundTrip = data.order.isRoundTrip,
                    position = data.order.tripType.position,
                    tripType = data.order.tripType.type,
                    roundPosition = isRoundTrip ? data.order.roundTripType.position : '',
                    groupList = data.order.touristGroupList;
                for (var i = 0; i < groupList.length; i++) {
                    groupList[i].isRoundTrip = isRoundTrip;
                    groupList[i].position = position;
                    groupList[i].type = tripType;
                    groupList[i].roundPosition = roundPosition;
                }
                Tools.addTab('viewOrder', '查看订单', viewTemplate(data));
                var $tab = $('#tab-viewOrder-content');
                Tools.descToolTip($tab.find('.T-ctrl-tip'), 1);
                main = require('./main').main;
                main.sortGroup($tab);
                main.calcFee($tab);
            }
        });
    };

    newOrder.tripAutocomplete = function ($tab, name) {
        $tab.find('.T-'+name).autocomplete({
            minLength: 0,
            change: function(event, ui){
                if(ui.item === null){
                    var $this = $(this),
                        $div = $this.closest('div');
                    $this.val('');
                    if (name == 'tripSelect') {
                        $div.find('[name=position]').val('').trigger('change');
                        $div.find('[name=tripTypeId]').val('');
                        $div.find('[name=tripTypeName]').val('');
                        $div.find('[name=type]').val('').trigger('change');
                        if ($tab.find('.T-isRoundTrip').prop('checked')) {
                            $tab.find('.T-isRoundTrip').trigger('click');
                            $tab.find('.T-isRoundTrip').trigger('change');
                        }
                    } else {
                        $div.find('[name=roundPosition]').val('').trigger('change');
                        $div.find('[name=roundType]').val('').trigger('change');
                        $div.find('[name=roundTripTypeId]').val('');
                        $tab.find('.T-addGroup').addClass('hide');
                    }
                    newOrder.refrashGroupList($tab);
                }
            },
            select: function(event, ui){
                var $this = $(this),
                    $div = $this.closest('div');
                if (name == 'tripSelect') {
                    $div.find('[name=position]').val(ui.item.position).trigger('change');
                    $div.find('[name=tripTypeId]').val(ui.item.id);
                    $div.find('[name=tripTypeName]').val(ui.item.name);
                    $div.find('[name=type]').val(ui.item.type).trigger('change');
                    newOrder.setTripDateHtml($tab, 0, ui.item.type, ui.item.position);
                    if ($tab.find('.T-isRoundTrip').prop('checked')) {
                        $tab.find('.T-isRoundTrip').trigger('click');
                        $tab.find('.T-isRoundTrip').trigger('change');
                    }
                } else {
                    $div.find('[name=roundPosition]').val(ui.item.position).trigger('change');
                    $div.find('[name=roundType]').val(ui.item.type).trigger('change');
                    $div.find('[name=roundTripTypeId]').val(ui.item.id);
                    newOrder.setTripDateHtml($tab, 1, ui.item.type, ui.item.position);
                    $tab.find('.T-addGroup').removeClass('hide');
                }
                newOrder.refrashGroupList($tab);
            }
        }).on('click', function () {
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url_bus('customer/base','findAllTripType',newOrder.authToken),
                type: 'POST',
                showLoading: false,
                success: function (data) {
                    var tripList = data.tripTypeList;
                    for (var i = 0; i < tripList.length; i++) {
                        if(name == 'roundTripSelect') {
                            var tripType = $tab.find('.T-tripSelectDiv input[name=type]').val();
                            if (tripType == '0' && tripList[i].type == '1') {
                                tripList[i].value = tripList[i].name;
                            } else if (tripType == '1' && tripList[i].type == '0') {
                                tripList[i].value = tripList[i].name;
                            }
                        }else {
                            tripList[i].value = tripList[i].name;
                        }
                    }
                    $this.autocomplete('option','source', tripList);
                    $this.autocomplete('search', '');
                }
            });
        });
    };

    newOrder.setTripDateHtml = function($tab, isRoundTrip, type, position){
        var html = ['<div class="form-group T-pickSendTime">',
            '<label class="col-sm-2 control-label no-padding-right"><span class="red">*</span>'+(type == '0' ? "接团":"送团")+'日期：</label>',
            '<div class="col-sm-4">',
                '<input class="T-datepicker col-sm-10" name="'+(isRoundTrip == '0' ? "tripTime":"roundTripTime")+'" type="text" value="">',
            '</div>',
            '<label class="col-sm-2 control-label no-padding-right"><span class="red">*</span><span class="T-tripPositionContent">'+(position == '0' ? "航班号":"班次")+'</span>：</label>',
            '<div class="col-sm-4">',
                '<input class="col-sm-10" name="'+(isRoundTrip == '0' ? "shiftNumber":"roundShiftNumber")+'" type="text" value="">',
            '</div>',
        '</div>'].join('');

       if(isRoundTrip){
            $tab.find('.T-roundTripDate').html(html);
       }else{
            $tab.find('.T-tripDate').html(html);
       }
       Tools.setDatePicker($tab.find('.T-datepicker'));
    },

    newOrder.listenTripChange = function ($tab) {
        
        var roundTrip = ['<label class="col-sm-4 control-label no-padding-right min-width100"><span class="red">*</span>请选择返程：</label>',
        '<div class="T-tripSelectDiv col-sm-8">',
            '<input class="T-roundTripSelect col-sm-10" type="text">',
            '<input type="hidden" name="roundPosition">',
            '<input type="hidden" name="roundType">',
            '<input type="hidden" name="roundTripTypeId">',
        '</div>'].join('');
        
        $tab.find('.T-isRoundTrip').off('change.isRoundTrip').on('change.isRoundTrip', function () {
            var isChecked = $tab.find('.T-isRoundTrip').prop('checked');
            if (isChecked) {
                $tab.find('.T-isRoundContent').removeClass('hide');
                $tab.find('.T-isRoundContent .T-roundTrip').html(roundTrip);
                newOrder.tripAutocomplete($tab, 'roundTripSelect');
                if ($tab.find('.T-roundTripSelect').length && $tab.find('.T-roundTripSelect').val() === '') {
                    $tab.find('.T-addGroup').addClass('hide');
                }
            } else {
                $tab.find('.T-isRoundContent').addClass('hide');
                $tab.find('.T-isRoundContent .T-roundTripDate').html('');
                $tab.find('.T-addGroup').removeClass('hide');
            }
            main.calcFee($tab);
            newOrder.refrashGroupList($tab);
            Tools.setDatePicker($tab.find('.T-datepicker'));
        });
    };

    /**
     * 小组操作
     * @param  {[type]} data [数据]
     * @param  {[type]} type [类型] 1 编辑
     * @return {[type]}      [description]
     */
    newOrder.group = function ($tab, data, editeType, $that) {
        var title = editeType ? '编辑小组' : '新增小组';
        var groupLayer = layer.open({
            type: 1,
            title: title,
            skin: 'layui-layer-rim', //加上边框
            area: '980px', //宽高
            zIndex: 1028,
            content: addGroupTemplate(data),
            scrollbar: false,
            success: function(){
                var $layer = $('.T-addGroup'), 
                    type = $tab.find('[name=type]').val(),
                    isRound = $tab.find('.T-isRoundTrip').prop('checked'),
                    roundHtml = isRound ? [
                    '<div class="form-group T-hotelInfo">',
                        '<hr>',
                        '<label for="" class="col-sm-2 control-label"><span class="red">*</span>' + ((type == '0') ? '送团接人' : '接团入住') + '酒店：</label>',
                        '<div class="col-sm-3"><input type="text" name="roundHotelName" value="'+(data.roundHotelName?data.roundHotelName:'')+'"></div>',
                        '<label for="" class="col-sm-2 control-label"><span class="red">*</span>酒店地址：</label>',
                        '<div class="col-sm-5"><input type="text" name="roundHotelAddress" value="'+(data.roundHotelAddress?data.roundHotelAddress:'')+'"></div></div>',
                        '<div class="form-group"><label class="col-sm-2 control-label">'+ ((type == '0') ? '送团' : '接团') +'现收：</label>',
                        '<div class="col-sm-3"><input type="text" name="roundDriverIncomeMoney" value="' + (data.roundDriverIncomeMoney?data.roundDriverIncomeMoney:'') + '"></div>',
                        '<label for="" class="col-sm-2 control-label">'+ ((type == '0') ? '送团' : '接团') +'备注：</label>',
                        '<div class="col-sm-3"><input name="roundRemark" type="text" value="'+(data.roundRemark?data.roundRemark:'')+'"></div>',
                        '</div>'].join('') : '';
                var pickHotel = ['<div class="form-group T-hotelInfo">',
                        '<label for="" class="col-sm-2 control-label"><span class="red">*</span>' + ((type == '0') ? '接团入住' : '送团接人') + '酒店：</label>',
                        '<div class="col-sm-3"><input type="text" name="hotelName" value="'+(data.hotelName?data.hotelName:'')+'"></div>',
                        '<label for="" class="col-sm-2 control-label"><span class="red">*</span>酒店地址：</label>',
                        '<div class="col-sm-5"><input type="text" name="hotelAddress" value="'+(data.hotelAddress?data.hotelAddress:'')+'"></div></div>',
                        '<div class="form-group"><label class="col-sm-2 control-label">'+ ((type == '0') ? '接团' : '送团') +'现收：</label>',
                        '<div class="col-sm-3"><input type="text" name="driverIncomeMoney" value="' + (data.driverIncomeMoney?data.driverIncomeMoney:'') + '"></div>',
                        '<label for="" class="col-sm-2 control-label">'+ ((type == '0') ? '接团' : '送团') +'备注：</label>',
                        '<div class="col-sm-3"><input name="remark" type="text" value="'+(data.remark?data.remark:'')+'"></div>',
                        '</div>' + roundHtml].join('');

                $layer.find('form .form-group').eq(0).after(pickHotel);
                $(window).trigger('resize');
                if (!isRound) {
                    $layer.find('form .T-hotelInfo').eq(1).addClass('hide');
                }
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
                        roundDriverIncomeMoney: main.getValue($layer, 'roundDriverIncomeMoney'),
                        adultCount: main.getValue($layer, 'adultCount'),
                        childCount: $layer.find('[name=childCount]').val() || 0,
                        hotelName: main.getValue($layer, 'hotelName'),
                        hotelAddress: main.getValue($layer, 'hotelAddress'),
                        position: main.getValue($tab, 'position'),
                        roundPosition: main.getValue($tab, 'roundPosition'),
                        type: main.getValue($tab, 'type'),
                        isRoundTrip: $tab.find('.T-isRoundTrip').prop('checked') ? 1 : 0,
                        roundHotelName: main.getValue($layer, 'roundHotelName'),
                        roundHotelAddress: main.getValue($layer, 'roundHotelAddress'),
                        remark: main.getValue($layer, 'remark'),
                        roundRemark: main.getValue($layer, 'roundRemark'),
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
                        $tr.before(groupListTemplate(grouplistData));
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
                        $tab.find('.T-touristList tbody').append(groupListTemplate(grouplistData));
                    }
                    layer.close(groupLayer);
                    main.sortGroup($tab);
                    main.calcFee($tab);
                });
            }
        });
    };

    newOrder.refrashGroupList = function ($tab) {
        var data = {
            touristGroupList: []
        };
        var $trs = $tab.find('.T-touristList tr.T-sort:not(".delete")');
        if (!$trs.length) {
            return;
        }
        $trs.each(function(index) {
            var $this = $trs.eq(index);
            var content = $this.data('content');
            content.position = $tab.find('[name=position]').val();
            content.type = $tab.find('[name=type]').val();
            content.roundPosition = $tab.find('[name=roundPosition]').val();
            if ((content.roundPosition == '0' || content.roundPosition == '1') && $tab.find('.T-isRoundTrip').prop('checked')) {
                content.isRoundTrip = '1';
            } else {
                content.isRoundTrip = '';
            }
            data.touristGroupList.push(content);
        });
        if (data.touristGroupList.length) {
            $tab.find('.T-touristList tr').each(function(i) {
                if (i > 0) {
                    $tab.find('.T-touristList tr').eq(1).remove();
                }
            });
        }
        $tab.find('.T-touristList tbody').append(groupListTemplate(data));
        main.sortGroup($tab);
    };

    newOrder.saveOrder = function ($tab, authToken) {
        var orderData = {
            tripTypeId: main.getValue($tab, 'tripTypeId'),
            baseJson: {
                id: main.getValue($tab, 'id'),
                isRoundTrip: $tab.find('.T-isRoundTrip').prop('checked') ? 1 : 0,
                tripTime: main.getValue($tab, 'tripTime'),
                shiftNumber: main.getValue($tab, 'shiftNumber'),
                roundTripTime: main.getValue($tab, 'roundTripTime'),
                roundShiftNumber: main.getValue($tab, 'roundShiftNumber'),
                roundTripTypeId: main.getValue($tab, 'roundTripTypeId'),
                priceType: $tab.find('.T-carpooling').prop('checked') ? 1 : 0,
                price: $tab.find('.T-carpooling').prop('checked') ? main.getValue($tab, 'carpoolingPrice') : main.getValue($tab, 'charterPrice'),
                orderRemark: main.getValue($tab, 'orderRemark')
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

    exports.init = newOrder.initModule;
    exports.updateOrder = newOrder.add;
    exports.viewOrder = newOrder.viewOrder;
    exports.newOrder = newOrder;
});