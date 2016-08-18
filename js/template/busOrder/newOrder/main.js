define(function(require, exports) {
    var newOrder = require('./newOrder').newOrder,
        cityOrder = require('./newCity').cityOrder,
        tripOrder = require('./newTrip').tripOrder,
        viewOperationRecordTemplate = require('./view/viewOperationRecord');

    var main = {};

    main.init_event = function ($tab) {
        $tab.find('.T-orderType').on('click', '.T-radio', function() {
            var $this = $(this);
            if ($this.hasClass('T-carpooling') && $this.prop('checked') || $this.hasClass('T-charter') && !$this.prop('checked')) {
                $this.closest('tr').find('.T-charterPrice').val('').prop('readonly', true);
            } else {
                $this.closest('tr').find('.T-charterPrice').prop('readonly', false).focus();
            }
            main.calcFee($tab);
        });

        $tab.find('.T-feeListRemark').on('click', '.T-feeAction', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            if ($this.hasClass('T-addFee')) {
                main.addFee($tab, $this, $tr);
            } else if ($this.hasClass('T-delete')) {
                main.deleteFee($tab, $this, $tr, id);
            }
        });

        $tab.on('change', '.T-clacFee', function() {
            main.calcFee($tab);
        });
    };

    main.addFee = function ($tab) {
        var feeHtml = ['<tr>',
            '<td><input class="T-clacFee" name="fee" type="text"></td>',
            '<td><input name="remark" type="text"></td>',
            '<td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>',
        '</tr>'].join('');
        $tab.find('.T-feeListRemark table').append(feeHtml);
        main.calcFee($tab);
    };

    main.deleteFee = function ($tab, $this, $tr, id) {
        if (!!id) {
            showConfirmDialog('确定要删除该费用？',function () {
                $tr.addClass('delete').hide();
                $tr.find('[name=fee]').addClass('delete');
                main.calcFee($tab);
            });
        } else {
            $tr.remove();
        }
        main.calcFee($tab);
    };

    main.tripAutocomplete = function ($tab) {
        $tab.find('.T-tripSelect').autocomplete({
            minLength: 0,
            change: function(event, ui){
                if(ui.item === null){
                    var $this = $(this),
                        $div = $this.closest('div');
                    $this.val('');
                    $div.find('[name=position]').val('').trigger('change');
                    $div.find('[name=tripTypeId]').val('');
                    $div.find('[name=tripTypeName]').val('');
                    $div.find('[name=type]').val('').trigger('change');
                }
            },
            select: function(event, ui){
                var $this = $(this),
                    $div = $this.closest('div');
                $div.find('[name=position]').val(ui.item.position).trigger('change');
                $div.find('[name=tripTypeName]').val(ui.item.name);
                $div.find('[name=tripTypeId]').val(ui.item.id);
                $div.find('[name=type]').val(ui.item.type).trigger('change');
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


    main.historyHotelComplete = function ($tab, authToken) {
        $tab.find('.T-chooseHistoryHotel').autocomplete({
            minLength: 0
        }).on('click', function () {
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url_bus('customer/order','getHistoryHotelNameList', authToken),
                type: 'POST',
                showLoading: false,
                success: function (data) {
                    var tripList = data.hotelNameList;
                    for (var i = 0; i < tripList.length; i++) {
                        tripList[i].value = tripList[i].hotelName;
                    }
                    $this.autocomplete('option','source', tripList);
                    $this.autocomplete('search', '');
                }
            });
        });
    };

    main.historyHotelAddressComplete = function ($tab, authToken) {
        $tab.find('.T-chooseHistoryHotelAddress').autocomplete({
            minLength: 0
        }).on('click', function () {
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url_bus('customer/order','getHistoryHotelAddressList', authToken),
                type: 'POST',
                showLoading: false,
                success: function (data) {
                    var tripList = data.hotelAddressList;
                    for (var i = 0; i < tripList.length; i++) {
                        tripList[i].value = tripList[i].hotelAddress;
                    }
                    $this.autocomplete('option','source', tripList);
                    $this.autocomplete('search', '');
                }
            });
        });
    };

    main.viewOperationRecord = function ($tab, id, authToken) {
        $tab.find('.T-viewOperationRecord').on('click', function () {
            $.ajax({
                url: KingServices.build_url_bus('customer/order','viewBusOrderLog', authToken),
                type: 'POST',
                data: {
                    busOrderId: id
                },
                success: function (data) {
                    layer.open({
                        type: 1,
                        title: '操作记录',
                        skin: 'layui-layer-rim', //加上边框
                        area: '980px', //宽高
                        zIndex: 1028,
                        content: viewOperationRecordTemplate(data),
                        scrollbar: false,
                        success: function(){

                        }
                    });
                    
                }
            });
        });
    };

    main.getContractSeatPrice = function ($tab) {
        $.ajax({
            url: KingServices.build_url_bus('customer/base','getContractSeatPrice',newOrder.authToken),
            type: 'POST',
            showLoading: false,
            success: function (data) {
                var price = data.contractSeatPrice;
                $tab.find('.T-carpoolingPrice').text(price);
                $tab.find('[name=carpoolingPrice]').val(price);
                main.calcFee($tab);
            }
        });
    };

    main.typeChange = function ($tab, type) {
        $tab.off('change.typeChange').on('change.typeChange', '[name=type]', function () {
            var $this = $(this),
                $div = $this.closest('div'),
                position = $div.find('[name=position]').val(),
                name = $div.find('[name=tripTypeName]').val(),
                tripTypeId = $div.find('[name=tripTypeId]').val(),
                authToken = $div.find('[name=authToken]').val(),
                companyName = $div.find('[name=companyName]').val(),
                val = $this.val();
            var data = {
                type: val,
                name: name,
                position: position,
                tripTypeId: tripTypeId,
                authToken: authToken,
                companyName: companyName
            };
            switch (val) {
                case '':
                    if (type == 'newOrder') {
                        $tab.find('.T-isRoundCheck, .T-addGroup, .T-tripDate').addClass('hide');
                    }
                    break;
                case '0':
                case '1':
                    newOrder.initModule(data);
                    newOrder.setTripDateHtml($tab, 0, data.type, data.position);
                    $tab.find('.T-isRoundCheck, .T-addGroup, .T-tripDate').removeClass('hide');
                    break;
                case '2':
                    cityOrder.initModule(data);
                    break;
                case '3':
                    tripOrder.initModule(data);
                    break;
                default:
                    break;
            }
            Tools.setDatePicker($tab.find('.T-datepicker'));
        });
    };

    main.updateGroup = function ($tab, $this, $tr, fn) {
        var groupDetaile = $tr.data('content');
        fn($tab, groupDetaile, '1', $this);
    };
    
    main.deleteGroup = function ($tab, $this, $tr, id) {
        if (!!id) {
            showConfirmDialog('确定要删除该小组？', function () {
                for (var i = 0; i >= 0 ; i++) {
                    if ($tr.length && $tr.next().length && $tr.next().hasClass('T-sort')) {
                        $tr.addClass('delete').hide();
                        break;
                    } else if ($tr.length) {
                        var $copyTr = $tr;
                        $copyTr.addClass('delete').hide();
                        if ($tr.next().length) {
                            $tr = $tr.next();
                        } else {
                            break;
                        }
                    }else {
                        break;
                    }
                }
            });
        } else {
            for (var i = 0; i >= 0 ; i++) {
                if ($tr.length && $tr.next().length && $tr.next().hasClass('T-sort')) {
                    $tr.remove();
                    break;
                } else if ($tr.length) {
                    var $copyTr = $tr;
                    $copyTr.removeClass('T-sort').addClass('delete').hide();
                    if ($tr.next().length) {
                        $tr = $tr.next();
                    } else {
                        break;
                    }
                }else {
                    break;
                }
            }
        }
        main.sortGroup($tab);
        main.calcFee($tab);
    };

    main.calcFee = function ($tab) {
        var orderType = $tab.find('.T-carpooling').prop('checked'),
            isRoundTrip = $tab.find('.T-isRoundTrip').prop('checked');
        var adultCount = 0,
            childCount = 0,
            otherFee = 0;
        var groupList = $tab.find('tr.T-sort:not(".delete")');
        groupList.each(function(i) {
            adultCount += main.isNaN(groupList.eq(i).data('adultcount') *1);
            childCount += main.isNaN(groupList.eq(i).data('childcount') *1);
        });
        var otherPriceList = $tab.find('[name=fee]:not(".delete")');
        if ($tab.find('[name=adultCount]').length == 1 && $tab.find('[name=childCount]').length == 1) {
            adultCount = $tab.find('[name=adultCount]').val();
            childCount = $tab.find('[name=childCount]').val();
        }
        otherPriceList.each(function(i) {
            otherFee += main.isNaN(otherPriceList.eq(i).val() *1);
        });
        var allPeopleText = adultCount+'大'+childCount+'小',
            allFeeText = '',
            isRoundTripx2 = isRoundTrip ? '*2' : '';
        var orderType1 = isRoundTrip ? (main.isNaN(main.getValue($tab, 'carpoolingPrice')*1)*(adultCount+childCount)*2 + otherFee) : (main.isNaN(main.getValue($tab, 'carpoolingPrice')*1)*(adultCount+childCount) + otherFee),
            orderType0 = main.isNaN((main.getValue($tab, 'charterPrice') || 0)*1) + otherFee;

        if (orderType) {
            allFeeText = main.isNaN(main.getValue($tab, 'carpoolingPrice')*1) + '*(' + adultCount + '+' + childCount + ')' + isRoundTripx2 + '+' + otherFee + '=<span class="font-size20 red">' + orderType1 + '</span>';
        } else {
            allFeeText = main.isNaN((main.getValue($tab, 'charterPrice') || 0)*1) + '+' + otherFee + '=<span class="font-size20 red">' + orderType0 + '</span>';
        }
        $tab.find('.T-allPeopleText').text(allPeopleText);
        $tab.find('.T-allFeeText').html(allFeeText);
    };

    main.getValue = function (obj, name) {
        return obj.find('[name='+name+']').val();
    };

    main.sortGroup = function ($tab) {
        var $trs = $tab.find('.T-touristList tr.T-sort:not(".delete")');
        $trs.each(function(i) {
            $trs.eq(i).children('td').eq(0).text(i+1);
        });
    };

    main.isNaN = function (num) {
        return isNaN(num) ? 0 : num;
    };

    exports.main = main;
});