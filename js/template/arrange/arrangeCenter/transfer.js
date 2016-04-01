/**
 * 中转安排模块
 * author：roger wei
 * 2016-03-31
 */

define(function(require, exports) {
    var BusListTemplate = require('./transfer/busList'),
        BusArrangedListTemplate = require('./transfer/busArrangedList'),
        BusArrangeTemplate = require('./transfer/busArrange'),
        ViewBusTemplate = require('./transfer/viewBus'),

        HotelListTemplate = require('./transfer/hotelList'),
        HotelArrangedListTemplate = require('./transfer/hotelArrangedList'),
        HotelArrangeTemplate = require('./transfer/hotelArrange'),
        ViewHotelTemplate = require('./transfer/viewHotel'),

        OtherListTemplate = require('./transfer/otherList'),
        OtherArrangeTemplate = require('./transfer/otherArrange'),
        ViewOtherTemplate = require('./transfer/viewOther'),

        Transfer = {},
        tabKey = 'transfer_arrange_part',
        service_name = 'v2/singleItemArrange/touristGroupTransferArrange';

    /**
     * 列表入口
     * @param  {object} $form 搜索的参数区域
     * @return {[type]}       [description]
     */
    Transfer.getList = function($form) {
        var target = $form.closest('.tab-pane').data('target');

        switch(target) {
            // 中转部分
            case 'bus':
                Transfer._getBusList($form);
                break;
            case 'hotel':
                Transfer._getHotelList($form);
                break;
            case 'other':
                Transfer._getOtherList($form);
                break;

            default: break;
        }
    };

    /**
     * 安排入口
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer.arrange = function($arrange)  {
        var target = $arrange.closest('.tab-pane').data('target');

        switch(target) {
            // 中转部分
            case 'bus':
                Transfer._arrangeBus($arrange);
                break;
            case 'hotel':
                Transfer._arrangeHotel($arrange);
                break;
            case 'other':
                Transfer._arrangeOther($arrange);
                break;

            default: break;
        }
    };


    /**
     * 安排入口
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer.view = function($view)  {
        var target = $view.closest('.tab-pane').data('target'),
            id = $view.closest('tr').data('id');

        if (!id) {
            console.info('ID 为空，查看无效');
            return;
        }

        switch(target) {
            // 中转部分
            case 'bus':
                Transfer._viewBus(id);
                break;
            case 'hotel':
                Transfer._viewHotel(id);
                break;
            case 'other':
                Transfer._viewOther(id);
                break;

            default: break;
        }
    };
    /**
     * 获取车队安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getBusList = function($searchFrom, page) {
        var args = $searchFrom.serializeJson();

        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutBusArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var html = args.status == '1' ? BusArrangedListTemplate(data) : BusListTemplate(data);

                    var $container = $searchFrom.next().html(html);

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };


    /**
     * 获取酒店安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getHotelList = function($searchFrom, page) {
        var args = $searchFrom.serializeJson();

        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutHotelArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var html = args.status == '1' ? HotelArrangedListTemplate(data) : HotelListTemplate(data);

                    var $container = $searchFrom.next().html(html);

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    /**
     * 获取其他安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer._getOtherList = function($searchFrom, page) {
        var args = $searchFrom.serializeJson();

        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url(service_name, 'getOutOtherArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    if (data.recordSize) {
                        for (var i = 0, tmp, len = data.outOtherList.length;i < len; i ++) {
                            tmp = data.outOtherList[i];
                            tmp.size = len_j = tmp.arrangeItems.length || 1;
                        }
                    }
                    var $container = $searchFrom.next().html(OtherListTemplate(data));

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer._getBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    /**
     * 安排车
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeBus = function($arrange) {
        var id = $arrange.closest('tr').data('id');

        if (!!id)  {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutBusArrange"),
                type: "POST",
                data:{
                    unifyId: id
                },
                success: function(data) {
                    if (showDialog(data)) {
                    }
                }
            });
        }
    };

    /**
     * 安排房
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeHotel = function($arrange) {
        var id = $arrange.closest('tr').data('id');

        if (!!id)  {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutBusArrange"),
                type: "POST",
                data:{
                    unifyId: id
                },
                success: function(data) {
                    if (showDialog(data)) {
                    }
                }
            });
        }
    };

    /**
     * 安排其他
     * @param  {object} $arrange 安排按钮
     * @return {[type]}          [description]
     */
    Transfer._arrangeOther = function($arrange) {
        var id = $arrange.closest('tr').data('id');

        if (!!id)  {
            $.ajax({
                url: KingServices.build_url(service_name, "getOutBusArrange"),
                type: "POST",
                data:{
                    id: id
                },
                success: function(data) {
                    if (showDialog(data)) {
                        var tab_key = tabKey + '_other';
                        if (Tools.addTab(tab_key, '其他安排', OtherArrangeTemplate(data))) {
                            Transfer._initOtherArrange($('#tab-'+ tab_key + '-content'));
                        }
                    }
                }
            });
        }
    };

    /**
     * 车查看
     * @param  {int} id 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewBus = function(id) {

    };

    /**
     * 房查看
     * @param  {int} id 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewHotel = function(id) {

    };

    /**
     * 其他查看
     * @param  {int} id 安排ID
     * @return {[type]}    [description]
     */
    Transfer._viewOther = function(id) {
        if (!id) {
            console.info('其他安排为空，无法查看具体信息');
        }

        $.ajax({
            url: KingServices.build_url(service_name, 'getOutOtherArrange'),
            type: 'get',
            dataType: 'json',
            data: {id: id},
        })
        .done(function(res) {
            if (showDialog(res)) {
                var tab_key = tabKey + '-view-other';

                if (Tools.addTab(otherViewId, '查看其他安排', ViewOtherTemplate(res))) {
                    $('#tab-' + tab_key + '-content').find('.T-close').on('click', function(event) {
                        event.preventDefault();

                        Tools.closeTab(tab_key);
                    });
                }
            }
        }); 
    };

    Transfer._initOtherArrange = function($tab) {
        Transfer.setDate($tab);

        // 绑定安排完成的选择
        $tab.find('#myTab_transitArrange').on('click', 'a', function(event) {
            event.preventDefault();
            $tab.find('[data-target="'+ $(this).attr('href') + '"]').removeClass('hidden').siblings('.checkbox').addClass('hidden');
        }).find('a').eq(0).trigger('click');

        // 添加安排
        $tab.find('.tab-content').on('click', '.T-add', function(event) {
            event.preventDefault();
            
            var $that = $(this), $tbody = $that.closest('.T-tab-pane').find('tbody');

            if ($that.hasClass('T-restaurant')) {
                // 添加酒店
                Transfer.addRestaurant($tbody);
            } else if ($that.hasClass('T-ticket')) {
                // 添加票务
                Transfer.addTicket($tbody);
            } else if ($that.hasClass('T-other')) {
                // 添加其他
                Transfer.addOther($tbody);
            }
        })
        .on('click', '.T-autocomplete-input', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('ui-autocomplete-input')) return;

            if ($that.hasClass('T-chooseRestaurant')) {
                // 餐厅选项
                Transfer.setRestaurantList($that);
            } else if ($that.hasClass('T-chooseTicket'))  {
                // 票务选项
                Transfer.setTicketChoose($that);
            }

            $that.trigger('click');
        })
        .on('click', '.T-arrange-delete', function(event) {
            event.preventDefault();
            // 删除
            Transfer.deleteArrange($(this));
        })
        .on('change', '[name="price"], [name="memberCount"], [name="reduceMoney"], [name="reduceMoney"]', function(event) {
            event.preventDefault();
            
            Transfer.calculation($(this).closest('tr'));
        });

        $tab.find('.T-submit').on('click', function(event) {
            event.preventDefault();
            Transfer.otherSubmit($tab);
        });
    }

    Transfer.addRestaurant = function($tbody) {
        var html = '<tr data-entity-id="">'+
            '<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>'+
            '<td><div class="col-sm-12"><input class="col-sm-12 bind-change T-autocomplete-input T-chooseRestaurant" name="restaurant" type="text" value="" />'+
            '<input type="hidden" name="restaurantId" value="" />'+
            '<span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
            '<td><input class="col-sm-12" name="manager" readonly="readonly" type="text" value="" /></td>'+
            '<td><input class="col-sm-12" name="mobileNumber" readonly="readonly" type="text" value="" /></td>'+
            '<td><select name="standardType"><option value="早餐">早餐</option><option value="午餐">午餐</option><option value="晚餐">晚餐</option></select>'+
            '</td><td><input class="col-sm-12 T-chooseStandard price F-float F-money" name="restaurantStandardId" type="text" value="" maxlength="9" /><input type="hidden" name="price" value="" />'+
            '</td><td><input class="col-sm-12 count F-float F-count" name="memberCount" maxlength="6" type="text" value="" /></td>'+
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" type="text" value="" /></td>'+
            '<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9"  type="text" value="" /></td>'+
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
            '<td><a class="cursor T-arrange-delete" data-catename="restaurant" title="删除">删除</a></td>'+
            '</tr>',
        $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.setDate($line);
    };
    Transfer.addTicket = function($tbody) {
        var html ='<tr>'+
            '<td><div class="col-sm-12"><input class="col-sm-12 T-autocomplete-input T-chooseTicket" name="ticketName" value="" type="text" /><input type="hidden" name="ticketId" />'+
            '<span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
            '<td><select class="" name="type"><option value="1">机票</option>'+
            '<option value="2">汽车票</option><option value="3">火车票</option><option value="4">轮船票</option></select></td>'+
            '<td><input class="col-sm-12" name="startCity" value="" maxlength="20"  type="text" /></td>'+
            '<td><input class="col-sm-12" name="arriveCity" value="" maxlength="20"  type="text" /></td>'+
            '<td><input class="col-sm-12 T-dateTimePicker" name="startTime" value="" type="text" /></td>'+
            '<td><input class="col-sm-12" name="shift" value=""  maxlength="20"  type="text" /></td>'+
            '<td><input class="col-sm-12" name="seatLevel"  maxlength="20"  value="" type="text" />'+
            '<td><input class="col-sm-12 T-number price F-float F-money" name="price"  maxlength="9"  value="" type="text" /></td>'+
            '<td><input class="col-sm-12 count F-float F-count" name="memberCount"  maxlength="6"  value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" value=""  maxlength="9"  type="text" /></td>'+
            '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value=""  maxlength="9"  type="text" /></td>'+
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
            '<td><a class="cursor T-arrange-delete" data-catename="ticket" title="删除">删除</a></td>'+
            '</tr>';

        $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.setDate($line);
    };
    Transfer.addOther = function($tbody) {
        var html = '<tr data-entity-id="">'+
            '<td><input class="col-sm-12 T-datePicker datepicker" name="startTime" type="text" value="" /></td>'+
            '<td><input class="col-sm-12" name="name" type="text" value="" maxlength="30" /></td>'+
            '<td><input class="col-sm-12" name="managerName" type="text" value="" maxlength="20" /></td>'+
            '<td><input class="col-sm-12" name="mobileNumber" type="text" maxlength="11" value="" /></td>'+
            '<td><input class="col-sm-12 price F-float F-money" name="price" type="text" maxlength="9" value="" /></td>'+
            '<td><input class="col-sm-12 count F-float F-count" name="memberCount" type="text" maxlength="9" value="" /></td>'+
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" type="text" maxlength="9" value="" /></td>'+
            '<td><input class="col-sm-12 T-number needPay F-float F-money" name="needPayMoney" readonly="readonly" type="text" value="" /></td>'+
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" type="text" maxlength="9" value="" /></td>'+
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000"/></td>'+
            '<td><a class="cursor T-arrange-delete" data-catename="other" title="删除">删除</a></td>'+
            '</tr>';
        
        $line = filterUnAuth(html);
        $tbody.append($line);
        Transfer.setDate($line);
    };

    Transfer.otherSubmit = function($tab) {
        var args = {}, data;

        data = Tools.getTableVal($('#restaurant_body'), 'entity-id');
        if (!!data) {
            args.outRestaurantList = JSON.stringify(data);
        }
        data = Tools.getTableVal($('#ticket_body'), 'entity-id');
        if (!!data) {
            args.outTicketList = JSON.stringify(data);
        }
        data = Tools.getTableVal($('#other_body'), 'entity-id');
        if (!!data) {
            args.outOtherList = JSON.stringify(data);
        }

        $tab.find('.T-finishedArrange').each(function(index, el) {
            var $that = $(this);
            args[$that.prop('name')] = $that.prop('checked')?3: 1;
        });

        args.outRemarkId = $tab.find('input[name="outRemarkId"]').val();

        $.ajax({
            url: KingServices.build_url(service_name, 'saveOutOtherArrange'),
            type: 'post',
            dataType: 'json',
            data: args,
        })
        .done(function(res) {
            if (showDialog(res)) {
                // 刷新其他的安排列表
                showMessageDialog($( "#confirm-dialog-message" ),res.message,function(){
                    Tools.closeTab(Tools.getTabKey($tab));
                });
            }
        });
        
    };
    Transfer.setDate = function($container) {
        // 绑定日期
        Tools.setDatePicker($container.find('.T-datePicker'));

        $container.find('.T-dateTimePicker').datetimepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'L',
            language: 'zh-CN',
            maxView: 3
        });
    };

    /**
     * 餐厅选择项
     * @param {object} $feild 餐厅输入框
     */
    Transfer.setRestaurantList = function($feild) {
        if ($feild.length)  {
            var $tr = $feild.closest('tr'),
                restaurantChoose = $tr.find(".T-chooseRestaurant"),
                standardChoose = $tr.find(".T-chooseStandard"),
                standardType = $tr.find("select[name=standardType]");
            standardType.off("change").on("change", function(){
                var parents = $(this).closest('tr');
                parents.find("input[name=restaurantStandardId]").val("");
                // Transfer.calculation($(this));
            });
            //餐厅选择
            $feild.autocomplete({
                minLength:0,
                select:function(event, ui) {
                    var _this = this, parents = $(_this).closest('tr');
                    parents.find("input[name=restaurantId]").val(ui.item.id);
                    $.ajax({
                        url: KingServices.build_url('restaurant','findRestaurantById'),
                        showLoading: false,
                        data: "id="+ui.item.id,
                        success: function(data) {
                            if(showDialog(data)) {
                                var restaurant = JSON.parse(data.restaurant);
                                parents.find("input[name=mobileNumber]").val(restaurant.mobileNumber);
                                parents.find("input[name=manager]").val(restaurant.managerName);
                                parents.find("input[name=price]").val(0);
                                parents.find("input[name=restaurantStandardId]").val(0);
                                // Transfer.calculation($(_this));
                            }
                        }
                    });
                    
                },
                change : function(event, ui) {
                    if(ui.item == null) {
                        $(this).val("");
                        var parents = $(this).closest('tr');
                        parents.find("input[name=restaurantId]").val("");
                        parents.find("input[name=manager]").val("");
                        parents.find("input[name=mobileNumber]").val("");
                        parents.find("input[name=restaurantStandardId]").val("");
                        parents.find("input[name=price]").val("");
                    }
                }
            }).off("click").on("click", function(){
                var obj = this;
                $.ajax({
                    url: KingServices.build_url('restaurant','findAll'),
                    showLoading: false,
                    success: function(data) {
                        if(showDialog(data)) {
                            var restaurantList = JSON.parse(data.restaurantList);
                            if(restaurantList && restaurantList.length > 0){
                                for(var i=0; i < restaurantList.length; i++){
                                    restaurantList[i].value = restaurantList[i].name;
                                }
                            }
                            $(obj).autocomplete('option','source', restaurantList);
                            $(obj).autocomplete('search', '');
                        }
                    }
                });
            });
            //餐标
            standardChoose.autocomplete({
                minLength: 0,
                select: function(event, ui){
                    var standardId = ui.item.id;
                    var _this = $(this);

                    $(this).closest('tr').find("input[name=price]").val(ui.item.price);
                    $(this).closest('tr').find("input[name=price]").focus();
                    $(this).closest('tr').find("input[name=price]").blur();

                },
                change: function(event, ui) {
                    if(ui.item == null) {
                        var objParent = $(this).closest('tr');
                        objParent.find("input[name=price]").val("");
                    };
                    Transfer.calculation($(this));
                }
            }).off("click").on("click", function(){
                var obj = this, parents = $(obj).closest('tr');
                var id = parents.find("input[name=restaurantId]").val();
                var type = parents.find('select[name=standardType]').val();
                if(id && id.length > 0){
                    $.ajax({
                        url: KingServices.build_url('restaurant','getRestaurantStandardByType'),
                        showLoading: false,
                        data: "restaurantId=" + id + "&type=" + type,
                        success: function(data) {
                            if(showDialog(data)) {
                                var restaurantStandardList = data.restaurantStandardList;
                                if(restaurantStandardList && restaurantStandardList.length > 0){
                                    for(var i=0; i < restaurantStandardList.length; i++){
                                        restaurantStandardList[i].value = restaurantStandardList[i].price;
                                    }
                                    $(obj).autocomplete('option','source', restaurantStandardList);
                                    $(obj).autocomplete('search', '');
                                }else {
                                    layer.tips('没有内容。', obj, {
                                        tips: [1, '#3595CC'],
                                        time: 2000
                                    });
                                }
                            }
                        }
                    });
                }else{
                    layer.tips('请选择餐厅', _this, {
                        tips: [1, '#3595CC'],
                        time: 2000
                    });
                }
            });
        }
    }

    Transfer.setTicketChoose = function($feild) {
        if (!$feild.length) {
            console.info('组织票务选项失败：选择框不存在')
            return;
        }

        $feild.autocomplete({
            minLength:0,
            select:function(event, ui) {
                var _this = this;
                var thisParent = $(_this).closest('tr');
                thisParent.find("input[name=ticketId]").val(ui.item.id).trigger('change');
                // var validator = rule.setTranistCheckor($(".arrangeTouristMain"));
                // rule.update(validator);
            },
            change : function(event, ui) {
                if(ui.item == null) {
                    $(this).val("");
                    var thisParent = $(this).closest('tr');
                    thisParent.find("input[name=ticketId]").val("").trigger('change');
                }
            }
        }).off("click").on("click", function(){
            var obj = this;
            $.ajax({
                url: KingServices.build_url('ticket','findAll'),
                showLoading: false,
                success: function(data) {
                    if(showDialog(data)) {
                        var ticketList = JSON.parse(data.ticketList);
                        if(ticketList && ticketList.length > 0){
                            for(var i=0; i < ticketList.length; i++){
                                ticketList[i].value = ticketList[i].name;
                            }
                            $(obj).autocomplete('option','source', ticketList);
                            $(obj).autocomplete('search', '');
                        }else{
                            layer.tips('没有内容。', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
    };

    return Transfer;
});
