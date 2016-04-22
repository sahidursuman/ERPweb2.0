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
        BookingArrange = {},
        service = 'v2/singleItemArrange/bookingOrderArrange';

    /**
     * 获取列表数据
     * @param  {object} $searchForm 搜索区域
     * @return {[type]}             [description]
     */
    BookingArrange.getList = function($form, page) {
        if (!$form || !$form.length)  {
            console.info('未找到搜索区域');
            return;
        }

        var args = $form.serializeJson();
        args.item = $form.parent().data('target');
        args.pageNo = page || 0;
        var temp = args.item + "List";

        $.ajax({
                url: KingServices.build_url(service, 'listBookingOrder'),
                type: 'post',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var $container = $form.next().html(ListTemplate[temp](data));

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
                var tab_key = tabKey + '_' + target;

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
        BookingArrange.bindBusCompanyChoose($tab);
        Tools.setDatePicker($tab.find('.datepicker'));
        $tab.find('.T-busList').on('change', '.T-action-blur', function(event){
            event.preventDefault();
            var $that = $(this), $tr = $that.closest('tr');
            $tr.find('[name="sumCostMoney"]').val($tr.find('[name="fee"]').val() - $tr.find('[name="reduceMoney"]').val())
        });
        $tab.find('.T-busList').on('click', '.T-bus-delete', function(event){
            var $tr = $(this).closest('tr');
            BookingArrange.delArrangeList($tr, $tr.data('id'));
        });
        $tab.find('.T-bus-add').on('click', function(){
            addBus();
        });
        $tab.find('.T-cancel').on('click', function(){
            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
        });
        $tab.find('.T-hotel-save').on('click', function(){
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
        }
    };

    BookingArrange._initHotelEvent = function($tab){
        BookingArrange.bindHotelChoose($tab);
        Tools.setDatePicker($tab.find('.datepicker'));
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
        
        $.ajax({
            url : KingServices.build_url(service, 'saveBookingOrder'),
            data: data,
            type: 'post',
        }).done(function(data){
            if (showDialog(data)) {
                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                    Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                    BookingArrange.getList($tab.find('.T-search-area'));
                });
            }
        });
    };

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
            template = viewTemplate[target + 'View'];
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
            $parents.find("input[name=hotelName]").val("").data('id', '');
            $parents.find("input[name=hotelRoomType]").val("").data('id', '');
        });
        
        $hotelChoose.autocomplete({
            minLength: 0,
            change: function(event,ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest("tr");
                    $this.val("");
                    $parents.find("input[name=hotelId]").val("");
                    $parents.find("input[name=hotelRoom]").val("");
                    $parents.find("input[name=hotelRoomId]").val("");
                    $parents.find("input[name=mobileNumber]").val("");
                    $parents.find("input[name=managerName]").val("");
                    $parents.find("input[name=price]").val("");
                }
            },
            select: function(event,ui){
                var $this = $(this), $parents = $this.closest('tr');
                $parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url('hotel','getHotelById'),
                    type: 'POST',
                    showLoading: false,
                    data: "id=" + ui.item.id,
                    success: function(data) {
                        if(showDialog(data)){
                            var number = data.hotel.telNumber ? data.hotel.telNumber : data.hotel.mobileNumber;
                            $parents.find("input[name=managerName]").val(data.hotel.managerName +' '+ number);
                            $parents.find(".T-tripPlanHotelStar").val(data.hotel.level);
                            $parents.find("input[name=hotelRoom]").val("");
                            $parents.find("input[name=hotelRoomId]").val("");
                            $parents.find("input[name=price]").val("");
                        }
                    }
                });
            }
        }).off("click").on("click", function(){
            var $this = $(this),
                hotelStarValue = $(this).closest('tr').find('.T-tripPlanHotelStar').val();
            $.ajax({
                url: KingServices.build_url('hotel','findHotelListByLevel'),
                showLoading:false,
                data:{
                    level:hotelStarValue,
                    menuKey:menuKey
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

        var chooseHotelRoom = $tab.find(".T-chooseHotelRoom");
        chooseHotelRoom.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    var $this = $(this), $parents = $this.closest('tr');
                    $this.val("");
                    $parents.find("input[name=hotelRoomId]").val("");
                    $parents.find("input[name=price]").val("");
                }
            },
            select:function(event,ui){
                var $this = $(this), $parents = $this.closest('tr'),
                    whichDay = $parents.find("select[name=whichDay]").val(),
                    enterTime = $parents.find(".T-whichDaysContainer").find('option:selected').text();
                $parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url('hotel','getHotelRoomPrice'),
                    type: 'POST',
                    showLoading:false,
                    data: {
                        id: ui.item.id,
                        whichDay: whichDay,
                        enterTime: enterTime,
                        menuKey:menuKey
                    },
                    success: function(data) {
                        if(showDialog(data)){
                            $parents.find("input[name=price]").val(data.price).trigger('change');
                        }
                    }
                });
            }
        }).off("click").on("click", function(){
            var $this = $(this),$parents = $this.closest('tr'),
                id = $parents.find("input[name=hotelId]").val();
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
        });
    };

    return BookingArrange;
});
