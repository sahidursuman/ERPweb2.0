define(function(require, exports) {
    var main = {};
    main.listMainEvent = function (obj, fn) {
        obj.find('.T-search').on('click', function () {
            fn();
        });
        Tools.setDatePicker(obj.find('.T-datePicker'), true);
        main.autocompleteTripType(obj.find('.T-chooseTripType'));
    };

    main.list_event = function ($tab, fn, data) {
        $tab.find('.T-orderList').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id'),
                type = $tr.data('triptype'),
                companyId = $tr.data('companyid'),
                authToken = '';

            var authTokenList = data.bindAccountList;

            for (var i = 0; i < authTokenList.length; i++) {
                if (authTokenList[i].companyId == companyId) {
                    authToken = authTokenList[i].authToken;
                }
            }

            if ($this.hasClass('T-view')) {
                switch (type) {
                    case 0:
                    case 1:
                        KingServices.viewOrder(id, authToken);
                        break;
                    case 2:
                        KingServices.viewCityOrder(id, authToken);
                        break;
                    case 3:
                        KingServices.viewTripOrder(id, authToken);
                        break;
                }
            } else if ($this.hasClass('T-update')) {
                switch (type) {
                    case 0:
                    case 1:
                        KingServices.updateOrder(id, authToken);
                        break;
                    case 2:
                        KingServices.updateCityOrder(id, authToken);
                        break;
                    case 3:
                        KingServices.updateTripOrder(id, authToken);
                        break;
                }
            } else if ($this.hasClass('T-cancel')) {
                main.orderCancel(id, authToken, fn);
            } else if ($this.hasClass('T-applyCancel')) {
                main.orderApplyCancel(id, authToken, fn);
            }
        });
    };

    main.findAllBindCompany = function (fn) {
        $.ajax({
            url: KingServices.build_url_bus('bindAccount','findAllBindCompany'),
            type: 'POST',
            data: {
                travelAgency: IndexData.userInfo.travelAgencyShortName,
                BUS_API_SECRECT_KEY: IndexData.userInfo.BUS_API_SECRECT_KEY
            },
            success: function (data) {
                if (typeof fn === 'function' && data.bindAccountList.length) {
                    fn(data);
                } else {
                    showMessageDialog('您还没有绑定任何车队，请先绑定车队！', function () {
                        KingServices.bindCompany();
                    });
                }
            }
        });
    };

    main.companyAutoComplete = function ($obj, data) {
        $obj.autocomplete({
            minLength: 0,
            change :function(event, ui){
                if(ui.item === null){
                    var $this = $(this),
                        $div = $this.closest('.T-search-area');
                    $this.val('');
                    $div.find('[name=authToken]').val('');
                    $div.find('[name=triptype]').val('');
                    $div.find('[name=tripTypeId]').val('');
                }
            },
            select: function (event, ui) {
                var $this = $(this),
                    $div = $this.closest('.T-search-area');
                $div.find('[name=authToken]').val(ui.item.authToken);
                $div.find('[name=triptype]').val('');
                $div.find('[name=tripTypeId]').val('');
            }
        }).on('click', function () {
            var companyList = data.bindAccountList;
            for (var i = 0; i < companyList.length; i++) {
                companyList[i].value = companyList[i].name;
            }
            $obj.autocomplete('option','source', companyList);
            $obj.autocomplete('search', '');
        });
    };

    main.orderCancel = function (id, authToken, fn) {
        showConfirmDialog('确定取消该订单？', function () {
            $.ajax({
                url: KingServices.build_url_bus('customer/order','applyCancelBusOrder', authToken),
                type: 'POST',
                data: {
                    orderId: id
                },
                success: function (data) {
                    showLayerMessage(data.message);
                    fn();
                }
            });
        });
    };

    main.orderApplyCancel = function (id, authToken, fn) {
        showConfirmDialog('确定申请取消该订单？', function () {
            $.ajax({
                url: KingServices.build_url_bus('customer/order','applyCancelBusOrder', authToken),
                type: 'POST',
                data: {
                    orderId: id
                },
                success: function (data) {
                    showLayerMessage(data.message);
                    fn();
                }
            });
        });
    };

    main.autocompleteTripType = function ($obj) {
        $obj.autocomplete({
            minLength: 0,
            change :function(event, ui){
                if(ui.item === null){
                    var $this = $(this);
                    $this.val('');
                    $this.closest('div').find('[name=tripTypeId]').val('');

                }
            },
            select: function (event, ui) {
                var $this = $(this);
                    $this.closest('div').find('[name=tripTypeId]').val(ui.item.id);
            }
        }).on('click', function () {
            var $div = $obj.closest('.T-search-area'),
                authToken = $div.find('[name=authToken]').val();
            if (!!authToken) {
                $.ajax({
                    url: KingServices.build_url_bus('customer/base','findAllTripType',authToken),
                    type: 'POST',
                    showLoading: false,
                    success: function (data) { 
                        var tripTypeList = data.tripTypeList;
                        for (var i = 0; i < tripTypeList.length; i++) {
                            tripTypeList[i].value = tripTypeList[i].name;
                        }
                        $obj.autocomplete('option','source', tripTypeList);
                        $obj.autocomplete('search', '');
                    }
                });
            } else {
                layer.tips('请选择车队！', $obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
        });
    };

    main.setOrderStatusOption = function ($tab, orderStatusType) {
        var $searchStatus = $tab.find('[name=orderStatus]');
        var html = [
        '<option value="">全部</option>',
        '<option value="0">待接单</option>',
        '<option value="1">已接单</option>',
        '<option value="2">商家申请取消</option>',
        '<option value="3">车队拒绝取消</option>',
        '<option value="4">车队同意取消</option>',
        '<option value="5">车队拒单</option>',
        '<option value="6">车队退回商家</option>',
        '<option value="7">商家主动取消</option>'];
        if (orderStatusType == '0') {
            $searchStatus.html(html.join(''));
        } else if (orderStatusType == '1') {
            $searchStatus.html(html[0]+html[1]+html[7]);
        } else if (orderStatusType == '2') {
            $searchStatus.html(html[0]+html[2]+html[3]+html[4]);
        } else if (orderStatusType == '3') {
            $searchStatus.html(html[0]+html[6]+html[5]+html[8]);
        }
    };

    main.getSearchData = function (obj) {
        var json = {
            'orderNumber': main.getValue(obj, 'orderNumber'),
            'tripTypeId': main.getValue(obj, 'tripTypeId'),
            'tripStartTime': main.getValue(obj, 'tripStartTime'),
            'tripEndTime': main.getValue(obj, 'tripEndTime'),
            'memberName': main.getValue(obj, 'memberName'),
            'orderStatus': main.getValue(obj, 'orderStatus'),
            'authTokenList': []
        };
        main.getValue(obj, 'authToken') ? json.authTokenList.push({authToken: main.getValue(obj, 'authToken')}) : (json.authTokenList = obj.find('[name=authToken]').data('authtokenlist'));
        return json;
    };
    
    main.getValue = function (obj, name) {
        return obj.find('[name='+name+']').val();
    };
    exports.main = main;
});