/**
 * 代订安排
 * author：魏桂云
 * date：2016-04-11
 */

define(function(require, exports) {
    var ListTemplate = {
            busList: require('./bookingView/busList'),
            hotelList: require('./bookingView/hotelList'),
            scenicList: require('./bookingView/scenceList'),
            ticketList: require('./bookingView/ticketList')
        },
        editTemplate = {
            busEdit: require('./bookingView/busEdit'),
            hotelEdit: require('./bookingView/hotelEdit'),
            scenicEdit: require('./bookingView/scenceEdit'),
            ticketEdit: require('./bookingView/ticketEdit'),
        },
        viewTemplate = {
            busView: require('./bookingView/busView'),
            hotelView: require('./bookingView/hotelView'),
            scenicView: require('./bookingView/scenceView'),
            ticketView: require('./bookingView/ticketView'),
        },

        tabKey = 'booking_arrange_part',
        BookingArrange = {
            $searchArea : false,
            busPageNo : 0,
            hotelPageNo : 0,
            ticketPageNo : 0,
            scenicPageNo : 0
        },
        rule = require('./rule'),
        service = 'v2/singleItemArrange/bookingOrderArrange';

    /**
     * 获取列表数据
     * @param  {object} $searchForm 搜索区域
     * @return {[type]}             [description]
     */
    BookingArrange.getList = function($form, page, item) {
        if (!$form || !$form.length)  {
            console.info('未找到搜索区域');
            return;
        }

        var args = $form.serializeJson();
        args.item = $form.parent().data('target');
        args.pageNo = page || 0;
        var temp = args.item + "List";
        if(!!item && args.item != item){
            $form = $("#booking-"+item+"-arrange").find('.T-search-area');
            args = $form.serializeJson();
            args.item = item;
            args.pageNo = page || 0;
        }
        $.ajax({
                url: KingServices.build_url(service, 'listBookingOrder'),
                type: 'post',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var $container = $form.next().html(ListTemplate[temp](data));
                    BookingArrange.$searchArea = $form;
                    switch (args.item) {
                        case 'bus':
                            BookingArrange.busPageNo = args.pageNo;
                            break;
                        case 'hotel':
                            BookingArrange.hotelPageNo = args.pageNo;
                            break;
                        case 'scenic':
                            BookingArrange.scenicPageNo = args.pageNo;
                            break;
                        case 'ticket':
                            BookingArrange.ticketPageNo = args.pageNo;
                            break;
                        default:
                            break;
                    }
                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                BookingArrange.getList($form, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    /**
     * 安排入口
     * @param  {[type]} $arrange [description]
     * @return {[type]}          [description]
     */
    BookingArrange.arrange = function($arrange) {
        var target = $arrange.closest('.tab-pane').data('target'),
            title = $arrange.closest('.tabable').find('.nav').find('.active').text(),
            html = editTemplate[target + 'Edit'],
            id = $arrange.closest('tr').data('id');
        
        if(!id || !target){
            console.info('信息有误，请检查传递的参数!');
            return false;
        }

        $.ajax({
            url : KingServices.build_url(service, 'getBookingOrder'),
            data: {id : id, item : target},
            type: 'post',
        }).done(function(data){
            if (showDialog(data)) {
                var tab_key = tabKey + '_' + target + '_edit';

                if (Tools.addTab(tab_key, "代订" + title + '安排', html(data))) {
                    BookingArrange.init_arrange_event($('#tab-' + tab_key + '-content'), target);
                }
            }
        });
    };

    /**
     * 安排初始化事件
     * @param  {[type]} $tab   [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */
    BookingArrange.init_arrange_event = function($tab, target){
        //绑定日期事件
        Tools.setDatePicker($tab.find('.datepicker'));
        //绑定取消事件
        $tab.find('.T-cancel').on('click', function(){
            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
        });
        switch (target) {
            // 中转部分
            case 'bus':
                BookingArrange._initBusEvent($tab);
                break;
            case 'hotel':
                BookingArrange._initHotelEvent($tab);
                break;
            case 'scenic':
                BookingArrange._initScenicEvent($tab);
                break;
            case 'ticket':
                BookingArrange._initTicketEvent($tab);
                break;
            default:
                break;
        }
        return this;
    };

    /**
     * 初始化车安排事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange._initBusEvent = function($tab){
        var validate = rule.busCheck($tab);
        BookingArrange.bindBusCompanyChoose($tab);
        $tab.find('.T-busList').on('change', '.T-action-blur', function(event){
            event.preventDefault();
            var $that = $(this), $tr = $that.closest('tr'),
            sumCostMoney = ($tr.find('[name="fee"]').val() || 0) - ($tr.find('[name="reduceMoney"]').val() || 0);
            $tr.find('[name="sumCostMoney"]').val(isNaN(sumCostMoney) ? 0 : sumCostMoney);
        });
        $tab.find('.T-busList').on('click', '.T-bus-delete', function(event){
            var $tr = $(this).closest('tr');
            BookingArrange.delArrangeList($tr, $tr.data('id'));
        });
        $tab.find('.T-bus-add').on('click', function(){
            addBus();
        });
        $tab.find('.T-hotel-save').on('click', function(){
            if(!validate.form())return;
            BookingArrange.saveBusData($tab);
        });
        return this;
        function addBus(){
            var html =  '<tr><td><input name="startTime" type="text" class="datepicker" /></td>'+
                        '<td><input name="endTime" type="text" class="datepicker" /></td>'+
                        '<td><input name="needSeatCount" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="needBusBrand" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="busCompany" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="fee" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" /></td>'+
                        '<td><input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" /></td>'+
                        '<td><input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /></td>'+
                        '<td><input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /></td>'+
                        '<td><input name="remark" type="text" class="col-sm-12" /></td>'+
                        '<td><a class="cursor T-action T-bus-delete">删除</a></td></tr>';
            $tab.find('.T-busList').append(html);
            BookingArrange.bindBusCompanyChoose($tab);
            Tools.setDatePicker($tab.find('.datepicker'));
            rule.busUpdate(validate);
        }
    };

    /**
     * 初始化房安排事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange._initHotelEvent = function($tab){
        var validate = rule.hotelCheck($tab);
        BookingArrange.bindHotelChoose($tab);
        $tab.find('.T-hotelList').on('change', '.T-action-blur', function(event){
            event.preventDefault();
            var $that = $(this), 
                $tr = $that.closest('tr'),
                sumCostMoney = ($tr.find('[name="costPrice"]').val() || 0) * 
                                ($tr.find('[name="roomCount"]').val() || 0) - 
                                ($tr.find('[name="reduceMoney"]').val() || 0);
            $tr.find('[name="sumCostMoney"]').val(isNaN(sumCostMoney) ? 0 : sumCostMoney);
        });
        $tab.find('.T-hotelList').on('click', '.T-hotel-delete', function(event){
            var $tr = $(this).closest('tr');
            BookingArrange.delArrangeList($tr, $tr.data('id'));
        });
        $tab.find('.T-hotel-add').on('click', function(){
            addHotel();
        });
        $tab.find('.T-hotel-save').on('click', function(){
            if(!validate.form())return;
            BookingArrange.saveHotelData($tab);
        });
        return this;
        function addHotel(){
            var html =  '<tr><td><input name="enterTime" type="text" class="datepicker" /></td>'+
                        '<td><input name="leaveTime" type="text" class="datepicker" /></td>'+
                        '<td><select name="hotelLevel" class="col-sm-12">'+
                        '    <option selected="selected" value="">--全部--</option>'+
                        '    <option value="1">三星以下</option>'+
                        '    <option value="2">三星</option>'+
                        '    <option value="3">准四星</option>'+
                        '    <option value="4">四星</option>'+
                        '    <option value="5">准五星</option>'+
                        '    <option value="6">五星</option>'+
                        '    <option value="7">五星以上</option>'+
                        '    </select></td>'+
                        '<td><input name="hotelName" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="hotelRoomType" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="costPrice" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="roomCount" type="text" class="col-sm-12 T-action-blur F-float F-count" /></td>'+
                        '<td><input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /></td>'+
                        '<td><input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /></td>'+
                        '<td><input type="text" name="remark" class="col-sm-12"></td>'+
                        '<td><a class="cursor T-action T-hotel-delete">删除</a></td></tr>';
            $tab.find('.T-hotelList').append(html);
            BookingArrange.bindHotelChoose($tab);
            Tools.setDatePicker($tab.find('.datepicker'));
            rule.hotelUpdate(validate);
        }
    };

    /**
     * 初始化景区安排事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange._initScenicEvent = function($tab){
        var validate = rule.scenicCheck($tab);
        BookingArrange.bindScenicChoose($tab);
        $tab.find('.T-scenicList').on('change', '.T-action-blur', function(event){
            event.preventDefault();
            var $that = $(this), 
                $tr = $that.closest('tr'),
                sumCostMoney = ($tr.find('[name="costPrice"]').val() || 0) * 
                                ($tr.find('[name="roomCount"]').val() || 0) - 
                                ($tr.find('[name="reduceMoney"]').val() || 0);
            $tr.find('[name="sumCostMoney"]').val(isNaN(sumCostMoney) ? 0 : sumCostMoney);
        });
        $tab.find('.T-scenicList').on('click', '.T-scenic-delete', function(event){
            var $tr = $(this).closest('tr');
            BookingArrange.delArrangeList($tr, $tr.data('id'));
        });
        $tab.find('.T-scenic-add').on('click', function(){
            addScenic();
        });
        $tab.find('.T-scenic-save').on('click', function(){
            if(!validate.form())return;
            BookingArrange.saveScenicData($tab);
        });
        return this;
        function addScenic(){
            var html =  '<tr><td><input name="startTime" type="text" class="datepicker" /></td>'+
                        '<td><select name="tourTime" class="col-sm-12">'+
                        '    <option selected="selected" value="全天">全天</option> '+
                        '        <option value="上午">上午</option> '+
                        '        <option value="下午">下午</option> '+
                        '    </select></td>'+
                        '<td><input name="scenicName" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><input name="scenicItemName" type="text" class="col-sm-12"/></td>'+
                        '<td><input name="tourDuration" type="text" class="col-sm-12" /></td>'+
                        '<td><input name="costPrice" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="roomCount" type="text" class="col-sm-12 T-action-blur F-float F-count" /></td>'+
                        '<td><input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="orderNumber" type="text" class="col-sm-12" maxlength="50" /></td>'+
                        '<td><input type="text" name="sumCostMoney" readonly class="col-sm-12 F-float F-money"></td>'+
                        '<td><input type="text" name="prePayMoney" class="col-sm-12 F-float F-money"></td>'+
                        '<td><input type="text" name="remark" class="col-sm-12"></td>'+
                        '<td><a class="cursor T-action T-scenic-delete">删除</a></td></tr>';
            $tab.find('.T-scenicList').append(html);
            BookingArrange.bindScenicChoose($tab);
            Tools.setDatePicker($tab.find('.datepicker'));
            rule.scenicUpdate(validate);
        }
    };

    /**
     * 初始化票安排事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange._initTicketEvent = function($tab){
        var validate = rule.ticketCheck($tab);
        BookingArrange.setDateTimePicker($tab.find('.datetimepicker'));
        BookingArrange.bindTicketChoose($tab);
        $tab.find('.T-ticketList').on('change', '.T-action-blur', function(event){
            event.preventDefault();
            var $that = $(this), 
                $tr = $that.closest('tr'),
                sumCostMoney = ($tr.find('[name="costPrice"]').val() || 0) * 
                                ($tr.find('[name="roomCount"]').val() || 0) - 
                                ($tr.find('[name="reduceMoney"]').val() || 0);
            $tr.find('[name="sumCostMoney"]').val(isNaN(sumCostMoney) ? 0 : sumCostMoney);
        });
        $tab.find('.T-ticketList').on('click', '.T-ticket-delete', function(event){
            var $tr = $(this).closest('tr');
            BookingArrange.delArrangeList($tr, $tr.data('id'));
        });
        $tab.find('.T-ticket-add').on('click', function(){
            addTicket();
        });
        $tab.find('.T-ticket-save').on('click', function(){
            if(!validate.form())return;
            BookingArrange.saveTicketData($tab);
        });
        return this;
        function addTicket(){
            var html =  '<tr><td><input name="ticketName" type="text" class="col-sm-12 bind-change" /></td>'+
                        '<td><select name="type">'+
                        '        <option value="1">机票</option>'+
                        '        <option value="2">汽车票</option>'+
                        '        <option value="3">火车票</option>'+
                        '        <option value="4">轮船票</option>'+
                        '    </select></td>'+
                        '<td><input name="startCity" type="text" class="col-sm-12" maxlength="30" /></td>'+
                        '<td><input name="arriveCity" type="text" class="col-sm-12" maxlength="30" /></td>'+
                        '<td><input name="shift" type="text" class="col-sm-12" maxlength="50" /></td>'+
                        '<td><input name="startTime" type="text" class="col-sm-12 datepicker" /></td>'+
                        '<td><input name="seatLevel" type="text" class="col-sm-12" maxlength="30" /></td>'+
                        '<td><input name="costPrice" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="roomCount" type="text" class="col-sm-12 T-action-blur F-float F-count" /></td>'+
                        '<td><input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" /></td>'+
                        '<td><input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /></td>'+
                        '<td><input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /></td>'+
                        '<td><input name="remark" type="text" class="col-sm-12" /></td>'+
                        '<td><a class="cursor T-action T-ticket-delete">删除</a></td></tr>';
            $tab.find('.T-ticketList').append(html);
            BookingArrange.bindTicketChoose($tab);
            Tools.setDatePicker($tab.find('.datepicker'));
            rule.ticketUpdate(validate);
        }
    };

    /**
     * 保存车安排
     * @param  {[type]} $tab     [description]
     * @param  {[type]} validate [description]
     * @return {[type]}          [description]
     */
    BookingArrange.saveBusData = function ($tab, validate){
        var data = {
                id : $tab.find('.base-info').data('id'),
                item : 'bus',
                status : $tab.find('.T-finishedArrange').is(':checked') ? 1 : 0
            },
            $tr = $tab.find('.T-busList tr'), 
            busList = [];
        $tr.each(function(){
            var $that = $(this),
                id = $that.data('id'),
                busJson = {
                    busCompanyId : $that.find('[name="busCompany"]').data('id'),
                    startTime : $that.find('[name="startTime"]').val(),
                    endTime : $that.find('[name="endTime"]').val(),
                    needSeatCount : $that.find('[name="needSeatCount"]').val(),
                    needBusBrand : $that.find('[name="needBusBrand"]').val(),
                    fee : $that.find('[name="fee"]').val(),
                    sumCostMoney : $that.find('[name="sumCostMoney"]').val(),
                    prePayMoney : $that.find('[name="prePayMoney"]').val(),
                    reduceMoney : $that.find('[name="reduceMoney"]').val(),
                    remark : $that.find('[name="remark"]').val()
                };
            if(!!id){
                busJson.id = id;
            }
            busList.push(busJson);
        });
        if(busList.length > 0){
            data.arrangeList = JSON.stringify(busList);
        }
        
        BookingArrange.submitDataToServer($tab, data);
    };
    /**
     * 保存房安排
     * @param  {[type]} $tab     [description]
     * @param  {[type]} validate [description]
     * @return {[type]}          [description]
     */
    BookingArrange.saveHotelData = function($tab, validate){
        var data = {
                id : $tab.find('.base-info').data('id'),
                item : 'hotel',
                status : $tab.find('.T-finishedArrange').is(':checked') ? 1 : 0
            },
            $tr = $tab.find('.T-hotelList tr'), 
            hotelList = [];
        $tr.each(function(){
            var $that = $(this),
                id = $that.data('id'),
                hotelJson = {
                    enterTime : $that.find('[name="enterTime"]').val(),
                    leaveTime : $that.find('[name="leaveTime"]').val(),
                    hotelLevel : $that.find('[name="hotelLevel"]').val(),
                    hotelId : $that.find('[name="hotelName"]').data('id'),
                    hotelRoomId : $that.find('[name="hotelRoomType"]').data('id'),
                    costPrice : $that.find('[name="costPrice"]').val(),
                    roomCount : $that.find('[name="roomCount"]').val(),
                    reduceMoney : $that.find('[name="reduceMoney"]').val(),
                    sumCostMoney : $that.find('[name="sumCostMoney"]').val(),
                    prePayMoney : $that.find('[name="prePayMoney"]').val(),
                    remark : $that.find('[name="remark"]').val()
                };
            if(!!id){
                hotelJson.id = id;
            }
            hotelList.push(hotelJson);
        });
        if(hotelList.length > 0){
            data.arrangeList = JSON.stringify(hotelList);
        }
        BookingArrange.submitDataToServer($tab, data);
    };
    /**
     * 保存景区安排
     * @param  {[type]} $tab     [description]
     * @param  {[type]} validate [description]
     * @return {[type]}          [description]
     */
    BookingArrange.saveScenicData = function($tab, validate){
        var data = {
                id : $tab.find('.base-info').data('id'),
                item : 'scenic',
                status : $tab.find('.T-finishedArrange').is(':checked') ? 1 : 0
            },
            $tr = $tab.find('.T-scenicList tr'), 
            scenicList = [];
        $tr.each(function(){
            var $that = $(this),
                id = $that.data('id'),
                scenicJson = {
                    startTime : $that.find('[name="startTime"]').val(),
                    tourTime : $that.find('[name="tourTime"]').val(),
                    scenicId : $that.find('[name="scenicName"]').data('id'),
                    scenicItemId : $that.find('[name="scenicItemName"]').data('id'),
                    tourDuration : $that.find('[name="tourDuration"]').val(),
                    costPrice : $that.find('[name="costPrice"]').val(),
                    roomCount : $that.find('[name="roomCount"]').val(),
                    reduceMoney : $that.find('[name="reduceMoney"]').val(),
                    orderNumber : $that.find('[name="orderNumber"]').val(),
                    sumCostMoney : $that.find('[name="sumCostMoney"]').val(),
                    prePayMoney : $that.find('[name="prePayMoney"]').val(),
                    remark : $that.find('[name="remark"]').val()
                };
            if(!!id){
                scenicJson.id = id;
            }
            scenicList.push(scenicJson);
        });
        if(scenicList.length > 0){
            data.arrangeList = JSON.stringify(scenicList);
        }
        BookingArrange.submitDataToServer($tab, data);
    };
    /**
     * 保存票安排
     * @param  {[type]} $tab     [description]
     * @param  {[type]} validate [description]
     * @return {[type]}          [description]
     */
    BookingArrange.saveTicketData = function($tab, validate){
        var data = {
                id : $tab.find('.base-info').data('id'),
                item : 'ticket',
                status : $tab.find('.T-finishedArrange').is(':checked') ? 1 : 0
            },
            $tr = $tab.find('.T-ticketList tr'), 
            ticketList = [];
        $tr.each(function(){
            var $that = $(this),
                id = $that.data('id'),
                ticketJson = {
                    ticketId : $that.find('[name="ticketName"]').data('id'),
                    type : $that.find('[name="type"]').val(),
                    startCity : $that.find('[name="startCity"]').val(),
                    arriveCity : $that.find('[name="arriveCity"]').val(),
                    shift : $that.find('[name="shift"]').val(),
                    startTime : $that.find('[name="startTime"]').val(),
                    seatLevel : $that.find('[name="seatLevel"]').val(),
                    costPrice : $that.find('[name="costPrice"]').val(),
                    roomCount : $that.find('[name="roomCount"]').val(),
                    reduceMoney : $that.find('[name="reduceMoney"]').val(),
                    sumCostMoney : $that.find('[name="sumCostMoney"]').val(),
                    prePayMoney : $that.find('[name="prePayMoney"]').val(),
                    remark : $that.find('[name="remark"]').val()
                };
            if(!!id){
                ticketJson.id = id;
            }
            ticketList.push(ticketJson);
        });
        if(ticketList.length > 0){
            data.arrangeList = JSON.stringify(ticketList);
        }
        BookingArrange.submitDataToServer($tab, data);
    };

    /**
     * 提交数据到后台
     * @param  {[type]} $tab [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    BookingArrange.submitDataToServer = function($tab, data){
        var item = data.item;
        $.ajax({
            url : KingServices.build_url(service, 'saveBookingOrder'),
            data: data,
            type: 'post',
        }).done(function(data){
            if (showDialog(data)) {
                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                    Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                    var pageNo = 0;
                    switch (item) {
                        case 'bus':
                            pageNo = BookingArrange.busPageNo;
                            break;
                        case 'hotel':
                            pageNo = BookingArrange.hotelPageNo;
                            break;
                        case 'scenic':
                            pageNo = BookingArrange.scenicPageNo;
                            break;
                        case 'ticket':
                            pageNo = BookingArrange.ticketPageNo;
                            break;
                        default:
                            break;
                    }
                    BookingArrange.getList(BookingArrange.$searchArea, pageNo, item);
                });
            }
        });
    }

    /**
     * 删除安排
     * @param  {[type]} $tr [description]
     * @param  {[type]} id  [description]
     * @return {[type]}     [description]
     */
    BookingArrange.delArrangeList = function($tr, id){
        if(!!id){
            var delJson = $tr.closest('tbody').data('del-json');
            if(typeof delJson !== "object"){
                delJson = JSON.parse(delJson || "[]");
            };
            delJson.push({
                id : id
            });
            $tr.closest('tbody').data('del-json', delJson);
            $tr.remove();
        }else{
            $tr.remove();
        }
    };

    /**
     * 查看入口
     * @param  {object} $view 查看按钮
     * @return {[type]}       [description]
     */
    BookingArrange.view = function($view) {
        var target = $view.closest('.tab-pane').data('target'),
            title = $view.closest('.tabable').find('.nav').find('.active').text(),
            html = viewTemplate[target + 'View'],
            id = $view.closest('tr').data('id');
        
        if(!id || !target){
            console.info('信息有误，请检查传递的参数!');
            return false;
        }

        $.ajax({
            url : KingServices.build_url(service, 'getBookingOrder'),
            data: {id : id, item : target},
            type: 'post',
        }).done(function(data){
            if (showDialog(data)) {
                var tab_key = tabKey + '_' + target + '_view';

                if (Tools.addTab(tab_key, "代订" + title + '安排', html(data))) {
                    var $tab = $('#tab-' + tab_key + '-content');
                    $tab.find('.T-btn-close').on('click', function(){
                        Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                    });
                }
            }
        });
    };

    /**
     * 绑定车队选择事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange.bindBusCompanyChoose = function($tab){
        function clearData($tr, start) {
            switch(start) {
                case 'brand':
                    $tr.find('input[name="needBusBrand"]').val('');
                case 'licenseNumber':
                    $tr.find('input[name="licenseNumber"]').val('');
                    $tr.find('input[name="busId"]').val('');
                case 'CompanyName':
                    $tr.find('input[name="busCompany"]').val('').data('id', '');
                default: break;
            }
        }

        //选择车座位数
        var chooseSeatCount = $tab.find('input[name="needSeatCount"]');
        chooseSeatCount.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $that = $(this).val("");
                    clearData($that.closest('tr'), 'brand');
                }
            }
        }).off("click").on('click', function(){
            var $that = $(this), $tr = $that.closest('tr');
            $.ajax({
                url: KingServices.build_url('bookingOrder','getSeatCountList'),
                showLoading: false,
                data:{
                    brand:$tr.find("input[name=needBusBrand]").val(),
                    busCompanyId:$tr.find("input[name=busCompany]").data('id')
                },
                success:function(data){
                    if(showDialog(data)){
                        var seatCountListJson = [];
                        if(data.seatCountList && data.seatCountList.length > 0){
                            for(var i=0, seatCount; i < data.seatCountList.length; i++){
                                seatCount = {
                                    value : data.seatCountList[i]
                                }
                                seatCountListJson.push(seatCount);
                            }
                            $that.autocomplete('option','source', seatCountListJson);
                            $that.autocomplete('search', '');
                        }else{
                            layer.tips('无数据', $that, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });

        //选择品牌
        var chooseBrand = $tab.find('input[name="needBusBrand"]');
        chooseBrand.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $that = $(this).val("");
                    clearData($that.closest('tr'), 'licenseNumber');
                }
            },
            select :function(event, ui){
                //checkBusCompay($(this).blur().closest('tr'), 'licenseNumber');
            }
        }).off("click").on('click', function(){
            var $that = $(this), $tr = $that.closest('tr');
            $.ajax({
                url: KingServices.build_url('bookingOrder','getBusBrandList'),
                data:{
                    seatCount:$tr.find("[name=needSeatCount]").val(),
                    busCompanyId:$tr.find("[name=busCompany]").data('id')
                },
                showLoading:false,
                type:"POST",
                success:function(data){
                    if(showDialog(data)){
                        var busBrandListJson = [];
                        if(data.busBrandList && data.busBrandList.length > 0){
                            for(var i=0; i < data.busBrandList.length; i++){
                                var busBrand = {
                                    value : data.busBrandList[i]
                                }
                                busBrandListJson.push(busBrand);
                            }
                            $that.autocomplete('option','source', busBrandListJson);
                            $that.autocomplete('search', '');
                        }else{
                            layer.tips('无数据', $that, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });

        // 选择车队
        var chooseLicense = $tab.find('input[name="busCompany"]');
        chooseLicense.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $that = $(this).val("");
                    clearData($that.closest('tr'), 'CompanyName');
                }
            },
            select :function(event, ui){
                var $tr = $(this).blur().closest('tr');
                $tr.find("input[name=busCompany]").val(ui.item.busCompanyName).data('id', ui.item.id).trigger('change');
            }
        }).off("click").on('click', function(){
            var $that = $(this), $tr = $that.closest('tr');

            $.ajax({
                url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
                data:  {
                    seatCount: $tr.find("[name=needSeatCount]").val(),
                    brand: $tr.find("[name=needBusBrand]").val()
                },
                showLoading:false,
                type:"POST",
                success:function(data){
                    var result = showDialog(data);
                    if(result){
                        var busCompanyList = JSON.parse(data.busCompanyList);
                        if(busCompanyList && busCompanyList.length > 0){
                            for(var i=0; i < busCompanyList.length; i++){
                                busCompanyList[i].value = busCompanyList[i].companyName;
                            }
                            $that.autocomplete('option','source', busCompanyList);
                            $that.autocomplete('search', '');
                        }else{
                            layer.tips('无数据', $that, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });
    };

    /**
     * 绑定酒店选择事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange.bindHotelChoose = function($tab){
        var $hotelChoose = $tab.find('[name="hotelName"]'),
            $hotelStar = $tab.find('[name="hotelLevel"]');

        $hotelStar.off().on("change", function(){
            var $this = $(this), $parents = $this.closest('tr');
            $parents.find('[name="hotelName"]').val("").data('id', '');
            $parents.find('[name="hotelRoomType"]').val("").data('id', '');
        });
        
        $hotelChoose.autocomplete({
            minLength: 0,
            change: function(event,ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest("tr");
                    $this.val("").data('id', '');
                    $parents.find('[name="hotelRoomType"]').val("").data('id', '');
                }
            },
            select: function(event,ui){
                var $this = $(this), 
                    $parents = $this.closest('tr');
                if(ui.item.id == $this.data('id'))return;
                $this.data('id', ui.item.id).trigger('change');
                $parents.find('[name="hotelRoomType"]').val("").data('id', '');
                $.ajax({
                    url: KingServices.build_url('hotel','getHotelById'),
                    type: 'POST',
                    showLoading: false,
                    data: "id=" + ui.item.id,
                    success: function(data) {
                        if(showDialog(data)){
                            $parents.find('[name="hotelLevel"]').val(data.hotel.level);
                        }
                    }
                });
            }
        }).off("click").on("click", function(){
            var $this = $(this),
                hotelStarValue = $(this).closest('tr').find('[name="hotelLevel"]').val();
            $.ajax({
                url: KingServices.build_url('hotel','findHotelListByLevel'),
                showLoading:false,
                data:{
                    level : hotelStarValue
                },
                success: function(data) {
                    if(showDialog(data)){
                        var hotelList = JSON.parse(data.hotelList);
                        if(hotelList && hotelList.length > 0){
                            for(var i=0; i < hotelList.length; i++){
                                hotelList[i].value = hotelList[i].name;
                            }
                            $this.autocomplete('option','source', hotelList);
                            $this.autocomplete('search', '');
                        }else{
                            layer.tips('没有内容。', $this, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });

        var chooseHotelRoom = $tab.find('[name="hotelRoomType"]');
        chooseHotelRoom.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest('tr');
                    $this.val("").data('id', '');
                }
            },
            select:function(event,ui){
                var $this = $(this), 
                    $parents = $this.closest('tr'),
                    enterTime = $parents.find('[name="enterTime"]').val();
                    //enterTime = $parents.find('[name="leaveTime"]').val();
                $(this).data('id', ui.item.id).trigger('change');
                if(!enterTime)return;
                $.ajax({
                    url: KingServices.build_url('hotel','getHotelRoomPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                        id: ui.item.id,
                        enterTime: enterTime
                    },
                    success: function(data) {
                        if(showDialog(data)){
                            if(!!data.price){
                                $parents.find("input[name=price]").val(data.price).trigger('change');
                            }
                        }
                    }
                });
            }
        }).off("click").on("click", function(){
            var $this = $(this),
                $parents = $this.closest('tr'),
                $hotelName = $parents.find("input[name=hotelName]")
                id = $hotelName.data('id');
            if(!!id){
                $.ajax({
                    url: KingServices.build_url('hotel','findTypeByHotelId'),
                    showLoading: false,
                    data: "id=" + id,
                    success: function(data) {
                        if(showDialog(data)) {
                            var hotelRommList = JSON.parse(data.hotelRommList);
                            if(hotelRommList && hotelRommList.length > 0){
                                for(var i=0; i < hotelRommList.length; i++){
                                    hotelRommList[i].value = hotelRommList[i].type;
                                }
                                $this.autocomplete('option','source', hotelRommList);
                                $this.autocomplete('search', '');
                            }else{
                                layer.tips('没有内容。', $this, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            }else{
                layer.tips('请先选择酒店！', $hotelName, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
        });
    };

    /**
     * 绑定景区选择事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange.bindScenicChoose = function($tab){
        var scenicChoose = $tab.find('[name="scenicName"]');
        scenicChoose.autocomplete({
            minLength: 0,
            change: function(event,ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest('tr');
                    $this.val("").data('id', '');
                    $parents.find('[name="scenicItemName"]').val("").data("id", "");
                }
            },
            select: function(event,ui){
                var $this = $(this), $parents = $this.closest('tr');
                $this.data('id', ui.item.id).trigger('change');
                $parents.find('[name="scenicItemName"]').val("").data("id", "");
            }
        }).off("click").on("click", function(){
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url('scenic','findAll'),
                type: 'POST',
                showLoading: false,
                success: function(data) {
                    if(showDialog(data)){
                        var scenicList = JSON.parse(data.scenicList);
                        if(scenicList && scenicList.length > 0){
                            for(var i=0; i < scenicList.length; i++){
                                scenicList[i].value = scenicList[i].name;
                            }
                            $this.autocomplete('option','source', scenicList);
                            $this.autocomplete('search', '');
                        }else{
                            layer.tips('没有内容。', $this, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
        
        var chooseChargingProject = $tab.find('[name="scenicItemName"]');
        chooseChargingProject.autocomplete({
            minLength: 0,
            select: function(event, ui){
                var $this = $(this), $parents = $this.closest('tr'),
                    startTime = $parents.find('[name="startTime"]').val();

                $this.data('id', ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url('scenic','getScenicItemPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                        id: ui.item.id,
                        startTime: startTime
                    },
                    success: function(data) {
                        if(showDialog(data)) {
                            if(!!data.price){
                                $parents.find("input[name=price]").val(data.price);
                            }
                        }
                    }
                });
            },
            change: function(event, ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest('tr');
                    $this.val("").data('id', '');
                }
            }
        }).off("click").on("click", function(){
            var $this = $(this), $parents = $this.closest('tr'),
                $scenicName = $parents.find('[name="scenicName"]'),
                id = $scenicName.data('id');
            if(!!id){
                $.ajax({
                    url: KingServices.build_url('scenic','findItemByScenicId'),
                    type: 'POST',
                    showLoading:false,
                    data: "id="+id,
                    success: function(data) {
                        if(showDialog(data)) {
                            var scenicItemList = JSON.parse(data.scenicItemList);
                            if(scenicItemList && scenicItemList.length > 0){
                                for(var i=0; i < scenicItemList.length; i++){
                                    scenicItemList[i].value = scenicItemList[i].name;
                                }
                                $this.autocomplete('option','source', scenicItemList);
                                $this.autocomplete('search', '');
                            }else{
                                layer.tips('没有内容。', $this, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            }else{
                layer.tips('请先选择景区！', $scenicName, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
            
        });
    };

    /**
     * 绑定票务选择事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    BookingArrange.bindTicketChoose = function($tab){
        var ticketChoose = $tab.find('[name="ticketName"]');
        ticketChoose.autocomplete({
            minLength: 0,
            select: function(event, ui){
                var $this = $(this).data('id', ui.item.id).trigger('change');
            },
            change: function(event, ui){
                if(ui.item == null){
                    $(this).val("").data('id', '').trigger('change');
                }
            }
        }).off("click").on("click", function(){
            var $this = $(this);
            $.ajax({
                url: KingServices.build_url('ticket','findAll'),
                type: 'POST',
                showLoading:false,
                success:function(data){
                    if(showDialog(data)) {
                        var ticketList = JSON.parse(data.ticketList);
                        if(ticketList && ticketList.length > 0){
                            for(var i=0; i < ticketList.length; i++){
                                ticketList[i].value = ticketList[i].name;
                            }
                            $this.autocomplete('option','source', ticketList);
                            $this.autocomplete('search', '');
                        }else{
                            layer.tips('没有内容。', $this, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
    }

    /**
     * 选择外联销售
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    BookingArrange.getOPUserList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur()
                .data('id', item.id);
            }
        })
        .on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
                return false;
            }
            $.ajax({
                url: KingServices.build_url('tripPlan', 'getOPUserList'),
                type: 'post',
                showLoading: false,
            })
            .done(function(data) {
                if (showDialog(data)) {                    
                    var userList = JSON.parse(data.userList || false);
                    if (!!userList) {
                        for (var i = 0, len = userList.length;i < len; i++) {
                            userList[i].value = userList[i].realName;
                        }

                        $target.autocomplete('option', 'source', userList).data('ajax', true);
                        $target.autocomplete('search', '');
                    }
                }
            });
        });
    }

    BookingArrange.setDateTimePicker = function($obj){
        $obj.datetimepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'YYYY-MM-DD HH:mm',
            language: 'zh-CN'
        });
    };

    return BookingArrange;
});
