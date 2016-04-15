/**
 * 计调操作--代订订单
 * 
 * by David Bear 2016-04-12
 */
define(function(require, exports, module) {
    //key
    var K = {
            menu : "resource_bookingOrder",
            update : "resource_bookingOrder_update",
            add : "resource_bookingOrder_add",
            view : "resource_bookingOrder_view",
        },
        rule = require('./rule'),
        //模板文件
        T = {
            list : require('./view/booking/list'),//列表页
            listTable : require('./view/booking/listTable'),//列表页表格
            add : require('./view/booking/add'),//新增页面
            updateHotel : require('./view/booking/update/updateHotel'),//编辑酒店
            updateTicket : require('./view/booking/update/updateTicket'),//编辑票务
            updateScenic : require('./view/booking/update/updateScenic'),//编辑景区
            updateBus : require('./view/booking/update/updateBus'),//编辑景区
        },
        bookingOrder = {
        },
        touristsOrderExports = require('./touristGroup'),//游客订单
        touristsOrder = touristsOrderExports.touristGroup,//游客订单
        F = touristsOrderExports.F;
        
    bookingOrder.showListPage = function(page, args, $tab){
        args = args || {};
        args.pageNo = page || 0;
        args.type = args.type || 0;
        if(!!$tab){
            $tab.html(T.list());
            bookingOrder.init_events($tab);
            bookingOrder.getList(args, $tab);
        }
    };
    bookingOrder.getList = function(args, $tab){
        $.ajax({
            url: KingServices.build_url('bookingOrderV2','getBookingOrderList'),
            data: args,
            type: 'POST',
        }).done(function(data){
            if(showDialog(data)){
                var html = T.listTable(data);
                html = filterUnAuth(html);
                $tab.find('.T-booking-list').html(html);
                $tab.find('.T-record-size').html(data.recordSize);
                //绑定分页插件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.totalPage,
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {
                            args.pageNo = (obj.curr - 1);
                            bookingOrder.getList(args, $tab);
                        }
                    }
                });
            }
        });
    };
    bookingOrder.init_events = function($tab){
        var $searchArea = $tab.find(".T-search-area");
        //搜索
        $searchArea.find('.T-btn-search').on('click', function(){
            bookingOrder.getList(getArgs($searchArea), $tab);
        });
        //添加游客小组事件
        $tab.find('.T-btn-add').on('click', function(){
            bookingOrder.addBooking();
        });
    };
    bookingOrder.addBooking = function(){
        if (Tools.addTab(K.add , '新增项目代订', T.add())) {
            bookingOrder.commonEvents($("#tab-" + K.add + "-content"));
        }
    };
    bookingOrder.commonEvents = function($tab, type){
        //小组信息表内操作
        $tab.find('.T-booking-info').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this);
            if($that.hasClass('T-client')){
                touristsOrder.chooseClient($that);
            }else if($that.hasClass('T-receivable')){
                bookingOrder.updateMoney($that, 0, type);
            }else if($that.hasClass('T-guest-info')){
                bookingOrder.updateGuestInfo($that, type);
            }else if($that.hasClass('T-hotel')){
                bookingOrder.updateHotel($that, type);
            }else if($that.hasClass('T-ticket')){
                bookingOrder.updateTicket($that, type);
            }else if($that.hasClass('T-scenic')){
                bookingOrder.updateTicket($that, type);
            }else if($that.hasClass('T-bus')){
                bookingOrder.updateTicket($that, type);
            }
        });
    };

    /**
     * 编辑酒店代订
     * @param  {[type]} $that      [description]
     * @param  {number} optionType 1、查看；0、编辑或添加。
     * @return {[type]}            [description]
     */
    bookingOrder.updateHotel = function($that, optionType){
        var data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.hotelFeeDel = JSON.stringify(data.hotelFeeDel || []);
        if(optionType === 1){
            /*html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;*/
        }else{
            html = T.updateHotel(data);
        }
        layer.open({
            type: 1,
            title: "酒店代订",
            skin: 'layui-layer-rim', //加上边框
            area: '890px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                var validate = bookingOrder.bindLayerCommonFeeEvents($layer, index, optionType);
                $layer.find('.T-choose-hotel').on('click', function() {
                    touristsOrder.chooseHotel($(this));
                });
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var hotelJson = $layer.find('[name="hotel"]').data('json');
                    var baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            require : {
                                id : $layer.find('[name="requireContent"]').data("id"),
                                requireContent : $layer.find('[name="requireContent"]').val()
                            },
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="dutyDepartmentName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="dutyDepartmentName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id;
                    }
                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.hotelFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), type === 1 ? 1 : 0);
                });
            }
        });
    };

    /**
     * 编辑票务代订
     * @param  {[type]} $that      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateTicket = function($that, optionType){
        var data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.ticketFeeDel = JSON.stringify(data.ticketFeeDel || []);
        if(optionType === 1){
            /*html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;*/
        }else{
            html = T.updateTicket(data);
        }
        layer.open({
            type: 1,
            title: "票务代订",
            skin: 'layui-layer-rim', //加上边框
            area: '890px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                var validate = bookingOrder.bindLayerCommonFeeEvents($layer, index, optionType);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var hotelJson = $layer.find('[name="hotel"]').data('json'),
                        baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            require : {
                                id : $layer.find('[name="requireContent"]').data("id"),
                                requireContent : $layer.find('[name="requireContent"]').val()
                            },
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="groupName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="groupName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id; 
                    }
                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.hotelFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), type === 1 ? 1 : 0);
                });
            }
        });
    };

    /**
     * 编辑景区代订
     * @param  {[type]} $that      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateScenic = function($that, optionType){
        var data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.scenicFeeDel = JSON.stringify(data.scenicFeeDel || []);
        if(optionType === 1){
            /*html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;*/
        }else{
            html = T.updateScenic(data);
        }
        layer.open({
            type: 1,
            title: "景区代订",
            skin: 'layui-layer-rim', //加上边框
            area: '890px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                var validate = bookingOrder.bindLayerCommonFeeEvents($layer, index, optionType);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var hotelJson = $layer.find('[name="hotel"]').data('json'),
                        baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            require : {
                                id : $layer.find('[name="requireContent"]').data("id"),
                                requireContent : $layer.find('[name="requireContent"]').val()
                            },
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="groupName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="groupName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id; 
                    }
                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.hotelFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), type === 1 ? 1 : 0);
                });
            }
        });
    };

    /**
     * 编辑旅游车代订
     * @param  {[type]} $thta      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateBus = function($thta, optionType){
        var data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.scenicFeeDel = JSON.stringify(data.scenicFeeDel || []);
        if(optionType === 1){
            /*html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;*/
        }else{
            html = T.updateBus(data);
        }
        layer.open({
            type: 1,
            title: "旅游车代订",
            skin: 'layui-layer-rim', //加上边框
            area: '890px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                var validate = bookingOrder.bindLayerCommonFeeEvents($layer, index, optionType);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer),
                        commonData = F.assemblyLayerData($layer);

                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.hotelFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData, commonData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), type === 1 ? 1 : 0);
                });
            }
        });
    };

    /**
     * 编辑应收
     * @param  {[type]} $thta      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateMoney = function($thta, optionType){

    };

    /**
     * 编辑客人信息
     * @param  {[type]} $thta      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateGuestInfo = function($thta, optionType){

    }

    bookingOrder.bindLayerCommonFeeEvents = function($layer, layerIndex, type, groupType){
        if(type === 1){
            $layer.find('.T-btn-close').on('click', function(){
                layer.close(layerIndex);
            });
            return false;
        }
        var validate = rule.checkNeed($layer);
        $layer.find('.F-float').trigger('change');
        if($layer.find('.datepicker').length > 0){
            Tools.setDatePicker($layer.find('.datepicker'));
        }
        var $tbody = $layer.find('.T-fee-list');
        //添加
        $layer.find('.T-add-fee').on('click', function(){
            var  option = "", type = $tbody.data('type');
            if(type == "1"){
                option = '<option value="8">酒店费用</option>';
            }else if(type == "2"){
                option = '<option value="11">票务费用</option>';
            }else if(type == "3"){
                option = '<option value="9">景区费用</option>';
            }else if(type == "4"){
                option = '<option value="4">车辆费用</option>';
            }else{
                option = '<option value="1">大人结算价</option>'+
                         '<option value="2">小孩结算价</option>';
                if(groupType!="group"){
                    option += '<option value="3">中转结算价</option>';
                }
                option +='<option value="4">车辆费用</option>'+
                         '<option value="5">餐厅费用</option>'+
                         '<option value="6">保险费用</option>'+
                         '<option value="7">导服费</option>'+
                         '<option value="8">酒店费用</option>'+
                         '<option value="9">景区费用</option>'+
                         '<option value="10">自费费用</option>'+
                         '<option value="11">票务费用</option>'+
                         '<option value="12">其他费用</option>';
            }
            $tbody.append('<tr>'+
                '<td><select class="col-xs-12" name="type">'+option+'</select></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>'+
                '<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>'+
                '<td><input type="text" class="col-xs-12" name="remark"></td>'+
                '<td><a class="cursor T-action T-delete">删除</a></td>'+
                '</tr>');
            rule.needUpdate(validate);
        });
        //是否外转
        $layer.find('.T-abversion').on('change', function(){
            var $peer = $layer.find('.T-peer'),
                $internal = $layer.find('.T-internal');
            if($(this).val() == "1"){
                $internal.removeClass('hidden');
                $peer.addClass('hidden');
                rule.needUpdate(validate);
            }else if($(this).val() == "2"){
                $peer.removeClass('hidden');
                $internal.addClass('hidden');
                rule.needUpdate(validate);
            }else{
                $peer.addClass('hidden');
                $internal.addClass('hidden');
                rule.needUpdate(validate);
            }
        });
        //绑定责任部门和责任计调
        touristsOrder.getBusinessGroup($layer.find('[name="dutyDepartmentName"]'));
        touristsOrder.getDutyUserName($layer.find('[name="dutyUserName"]'));
        //绑定同行事件
        touristsOrder.getPartnerAgencyList($layer.find('[name="transferPartnerAgency"]'));
        //绑定部门
        touristsOrder.getBusinessList($layer.find('[name="businessName"]'));
        touristsOrder.getGroupMapList($layer.find('[name="groupName"]'));
        //表内操作
        //删除
        $tbody.on('click', '.T-action', function(event){
            event.preventDefault();
            var $this = $(this), $tr = $this.closest('tr') , id = $tr.data('id');
            if($this.hasClass('T-delete')){
                if(!!id){
                    var delJson = $this.closest('.T-fee-list').data('del-json');
                    if(typeof delJson !== "object"){
                        delJson = JSON.parse(delJson || "[]");
                    };
                    delJson.push({
                        id : id
                    });
                    $this.closest('.T-fee-list').data('del-json', JSON.stringify(delJson));
                    $tr.remove();
                }else{
                    $tr.remove();
                }
                F.calcMoney($(this), $layer);
            }
        });
        $tbody.on('change', '.T-option', function(event){
            event.preventDefault();
            F.calcMoney($(this), $layer);
        });
        return validate;
    };
    console.log(F);
    F.assemblyLayerData = function($layer){
        var data = {};
        data.require = {
            id : $layer.find('[name="requireContent"]').data("id"),
            requireContent : $layer.find('[name="requireContent"]').val()
        }
        if($layer.find('.T-abversion').val() == "2"){
            data.isTransfer = 2;
            data.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
            data.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
        }else if($layer.find('.T-abversion').val() == "1"){
            data.isTransfer = 1;
            data.dutyDepartmentName = $layer.find('[name="groupName"]').val();
            data.dutyDepartmentId = $layer.find('[name="groupName"]').data('id');
            data.dutyUserName = $layer.find('[name="dutyUserName"]').val();
            data.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
        }else{
            data.isTransfer = 0;
        }
        var id = $layer.find('.container-fluid').data('id');
        if(!!id){
            data.id = id; 
        }
        return data;
    };

    return bookingOrder;
});