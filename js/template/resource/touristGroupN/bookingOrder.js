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
            updateMoney : require('./view/booking/update/updateMoney'),//编辑应收
            updaeGuestInfo : require('./view/booking/update/updaeGuestInfo'),//编辑客人信息
            view : require('./view/booking/view/view'),//查看页面
            viewSettlementTemplate : require("./view/booking/view/viewSettlement"),//查看结算单
            viewHotel : require('./view/booking/view/viewHotel'),//查看酒店
            viewTicketl : require('./view/booking/view/viewTicket'),//查看票务
            viewScenic : require('./view/booking/view/viewScenic'),//查看酒店
            viewMoney : require('./view/booking/view/viewMoney'),//查看酒店
            viewBus : require('./view/booking/view/viewBus'),//查看车
            viewGuestInfo : require('./view/booking/view/viewGuestInfo'),//查看客人信息
        },
        bookingOrder = {
            pageNo : 0,
            openAddTime : false
        },
        touristsOrderExports = require('./touristGroup'),//游客订单
        touristsOrder = touristsOrderExports.touristGroup,//游客订单
        F = touristsOrderExports.F;

    /**
     * 显示代订订单界面
     * @param  {[type]} page [description]
     * @param  {[type]} args [description]
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    bookingOrder.showListPage = function(page, args, $tab){
        args = args || {};
        args.pageNo = page || 0;
        args.type = args.type || 0;
        if(!!$tab){
            $tab.html(filterUnAuth(T.list()));
            bookingOrder.init_events($tab);
            bookingOrder.getList(args, $tab);
        }
    };

    /**
     * 获取列表数据
     * @param  {[type]} args [description]
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    bookingOrder.getList = function(args, $tab){
        var page = 0;
        if(typeof args === "number"){
            page = args;
        }
        if(typeof args !== "object"){
            args = getArgs($tab.find(".T-search-area"));
        }
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
                bookingOrder.pageNo = args.pageNo;
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
        return this;
        function getArgs($searchArea){
            var args = {
                pageNo : page,
                orderNumber : $searchArea.find('[name="orderNumber"]').val(),
                partnerAgencyName : $searchArea.find('[name="partnerAgencyName"]').val(),
                outOPUserName : $searchArea.find('[name="outOPUserName"]').val(),
                status : $searchArea.find('.T-select-status').val()
            };
            return args;
        }
    };

    /**
     * 初始化事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    bookingOrder.init_events = function($tab){
        var $searchArea = $tab.find(".T-search-area");
        //搜索
        $searchArea.find('.T-btn-search').on('click', function(){
            bookingOrder.getList(0, $tab);
        });
        //添加游客小组事件
        $tab.find('.T-btn-add').on('click', function(){
            bookingOrder.openAddTime = +new Date();
            bookingOrder.operationBooking();
        });
        bookingOrder.getOPUserList($tab.find('.T-choose-outUserList'), false).trigger('click');
        //表内操作
        $tab.find('.T-booking-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-view')){
                bookingOrder.getUpdateBooking(id, 0);
            }else if($that.hasClass('T-update')){
                bookingOrder.getUpdateBooking(id, 1);
            }else if($that.hasClass('T-delete')){
                showConfirmDialog("确定删除该条数据?", function() {
                    bookingOrder.deleteBooking(id, $tab);
                });
            }
        });

        return this;
    };

    /**
     * 新增项目代订 & 编辑项目代订
     * @param {[type]} data [description]
     */
    bookingOrder.operationBooking = function(data, type){
        if(!!data){
            if(!!data.hotel){
                data.hotelNeedPayMoney = data.hotel.needPayMoney;
                data.hotelId = data.hotel.id;
                data.hotel = JSON.stringify(data.hotel || null);
            }
            if(!!data.ticket){
                data.ticketNeedPayMoney = data.ticket.needPayMoney;
                data.ticketId = data.ticket.id;
                data.ticket = JSON.stringify(data.ticket || null);
            }
            if(!!data.scenic){
                data.scenicNeedPayMoney = data.scenic.needPayMoney;
                data.scenicId = data.scenic.id;
                data.scenic = JSON.stringify(data.scenic || null);
            }
            if(!!data.bus){
                data.busNeedPayMoney = data.bus.needPayMoney;
                data.busId = data.bus.id;
                data.bus = JSON.stringify(data.bus || null);
            }
            if(!!data.needGet){
                data.needGetNeedPayMoney = data.needGet.sumNeedGetMoney;
                data.needGet = JSON.stringify(data.needGet || null);
            }
            if(data.tourist){
                data.touristInfo = (data.tourist.touristRealname || "") + "　" + (data.tourist.adultCount || 0) + "大" + (data.tourist.childCount || 0) + "小";
                data.touristMobileNumber = data.tourist.touristMobileNumber;
                data.tourist = JSON.stringify(data.tourist || null);
            }
        }
        data = data || {};
        data.type = type;
        var menuKey = K.add,
            title = "新增项目代订",
            html = "";
        if(type === 1){
            title = "编辑项目代订";
            menuKey = K.update;
            html = T.add(data);
        }else if(type === 2){
            title = "查看项目代订";
            menuKey = K.view;
            html = T.view(data);
        }else{
            html = T.add(data);
        }
        if (Tools.addTab(menuKey , title, html)) {
            bookingOrder.commonEvents($("#tab-" + menuKey + "-content"), type, data.id);
        }
    };
    
    /**
     * 获取编辑&查看项目代订
     * @param  {number} id    ID
     * @param  {number} type  0新增；1编辑；2查看。
     */
    bookingOrder.getUpdateBooking = function(id, type){
        $.ajax({
            url: KingServices.build_url('bookingOrderV2','getBookingOrder'),
            data : {id : id}
        }).done(function(data){
            if(showDialog(data)){
                var partnerAgencyName = data.bookingOrder.partnerAgencyName + "（"+ data.bookingOrder.contactRealname +"）";
                data.bookingOrder.partnerAgencyName = partnerAgencyName;
                if(type === 1){
                    bookingOrder.operationBooking(data.bookingOrder, 1);
                }else{
                    bookingOrder.operationBooking(data.bookingOrder, 2);
                }
            }
        })
    };

    /**
     * 删除项目代订
     * @param  {[type]} id   [description]
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    bookingOrder.deleteBooking = function(id, $tab){
        $.ajax({
            url : KingServices.build_url('bookingOrderV2', 'deleteBookingOrder'),
            data : {id : id},
            type: 'POST',
            success : function(data){
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        bookingOrder.getList(bookingOrder.pageNo, $tab);
                    });
                }
            }
        });
        return this;
    };

    /**
     * 新增&编辑&查看公用事件
     * @param  {[type]} $tab [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    bookingOrder.commonEvents = function($tab, type, bookingId){
        //导出查看项目代订按钮事件
        $tab.find('.T-viewSettle').off('click').on('click',function(){
            var pluginKey = 'plugin_print';
                Tools.loadPluginScript(pluginKey);
                bookingOrder.viewSettlement(bookingId);
        });
        $tab.find('.T-booking-info').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this);
            if($that.hasClass('T-client')){
                touristsOrder.chooseClient($that);
            }else if($that.hasClass('T-receivable')){
                bookingOrder.updateMoney($that, type);
            }else if($that.hasClass('T-guest-info')){
                bookingOrder.updateGuestInfo($that, type);
            }else if($that.hasClass('T-hotel')){
                bookingOrder.updateHotel($that, type);
            }else if($that.hasClass('T-ticket')){
                bookingOrder.updateTicket($that, type);
            }else if($that.hasClass('T-scenic')){
                bookingOrder.updateScenic($that, type);
            }else if($that.hasClass('T-bus')){
                bookingOrder.updateBus($that, type);
            }else if($that.hasClass('T-clear')){
                clearItem($that);
            }
        });

        bookingOrder.getOPUserList($tab.find('.T-chooseUser'), true).trigger('click');
        $tab.on('change', '.T-container', function(event){
            if(type === 0){
                bookingOrder.saveData($tab, false, false, true);
            }
        });
        $tab.find('.T-btn-close').on('click', function(){
            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
        });
        $tab.find(".T-btn-save").on('click', function(){
            bookingOrder.saveData($tab);
        }); 
        /*$tab.find('.T-restore').on('click', function(){
           showConfirmDialog($("#confirm-dialog-message"), "确定还原到上次操作?", function() {
                var data = window.localStorage.getItem("hct_booking_order_add"), arr = [];
                data = JSON.parse(data || null);
                if(!!data){
                    for(var i in data){
                        arr.push(i);
                    }
                }else{
                    showMessageDialog($("#confirm-dialog-message"), "暂无缓存数据！");
                }
                bookingOrder.operationBooking(data);
            });
        });
        $tab.find('.T-refresh').on('click', function(){
            showConfirmDialog($("#confirm-dialog-message"), "确定重新加载当前项目代订信息?", function() {
                bookingOrder.getUpdateBooking(bookingId, 1);
            });
        });*/
        $tab.find('[name="orderNumber"]').on('change', function(){
        });

        return this;
        function clearItem($that){
            var status = $that.data('status'), tps = "确定清空该条数据？";
            switch(status){
                case "bus":
                    tps = "确定清空旅游车数据？";
                    break;
                case "hotel":
                    tps = "确定清空酒店数据？";
                    break;
                case "scenic":
                    tps = "确定清空景区数据？";
                    break;
                case "ticket":
                    tps = "确定清空票务数据？";
                    break;
            }
            if($that.prevAll('input[type="text"]').val() !== ""){
                showConfirmDialog(tps, function() {
                    var $text = $that.prevAll('input[type="text"]'),
                        clearId = $text.data('id');
                    if(!!clearId){
                        $text.data('old-json', $text.data('json'));
                    }
                    $text.val('').data('json', '').data('clear', '1');
                });
            }else{
                showMessageDialog("数据已经清空！");
            }
        }
        
    };

    /**
     * 代订结算单
     * 
     */
    bookingOrder.viewSettlement = function(id){
        $.ajax({
            url : KingServices.build_url('bookingOrder','viewBookingSettlement'),
            type:'POST',
            data:{
                id:id
            },
            success:function(data){
                if(showDialog(data)){
                    data.imgUrl = imgUrl;
                    html = T.viewSettlementTemplate(data);
                    var viewSettlementLayer = layer.open({
                        type: 1,
                        title:"代订结算单",
                        skin: 'layui-layer-rim',
                        area: '750px', 
                        zIndex:1028,
                        content: html,
                        scrollbar: false,
                        success:function(){
                            //打印结算单页面
                            var $outAccountsTab = $("#T-viewSettlement");
                            $outAccountsTab.off('click').on('click','.T-printBooking',function(){
                                bookingOrder.exportsOutAccounts($outAccountsTab);
                            });
                        }
                    });
                       
                }
            }
        });
    };
    //打印页面
    bookingOrder.exportsOutAccounts = function($obj){
        $obj.print({
            globalStyles:true
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
        data.feeDel = JSON.stringify(data.feeDel || null);
        if(optionType === 2){
            html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
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
                    var hotelJson = $layer.find('[name="arrangeHotel"]').data('json'),
                        baseInfo = {
                            checkInTime : $layer.find('[name="checkInTime"]').val(),//入住日期
                            checkOutTime: $layer.find('[name="checkOutTime"]').val(),//离店日期
                            hotelLevel : $layer.find('[name="hotelLevel"]').val(),//星级
                            roomCount : $layer.find('[name="roomCount"]').val(),//间数
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,//指定酒店
                            arrangeHotel : $layer.find('[name="arrangeHotel"]').val()
                        },
                        commonData = F.assemblyLayerData($layer);
                    
                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id;
                    }

                    $.extend(baseInfo, commonData);
                    $that.val(commonData.needPayMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                    F.sumBookingSubtotal($that.closest('.T-container'));
                    layer.close(index);
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
        data.feeDel = JSON.stringify(data.feeDel || null);
        if(optionType === 2){
            html = T.viewTicketl(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
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
                            type : $layer.find('[name="ticketType"]').val(),
                            startTime : $layer.find('[name="startTime"]').val(),
                            startingCity : $layer.find('[name="startingCity"]').val(),
                            arriveCity : $layer.find('[name="arriveCity"]').val(),
                            seatLevel : $layer.find('[name="seatLevel"]').val(),
                            memberCount : $layer.find('[name="memberCount"]').val()
                        },
                        commonData = F.assemblyLayerData($layer);

                    $.extend(baseInfo, commonData);
                    $that.val(commonData.needPayMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                    F.sumBookingSubtotal($that.closest('.T-container'));
                    layer.close(index);
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
        data.feeDel = JSON.stringify(data.feeDel || null);
        if(optionType === 2){
            html = T.viewScenic(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
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
                            startDate : $layer.find('[name="startDate"]').val(),
                            scenicName : $layer.find('[name="scenic"]').val(),
                            scenicId : $layer.find('[name="scenic"]').data("id"),
                            memberCount : $layer.find('[name="memberCount"]').val()
                        },
                        commonData = F.assemblyLayerData($layer);

                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id; 
                    }
                    $.extend(baseInfo, commonData);
                    $that.val(commonData.needPayMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                    F.sumBookingSubtotal($that.closest('.T-container'));
                    layer.close(index);
                });
            }
        });
    };

    /**
     * 编辑旅游车代订
     * @param  {[type]} $that      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateBus = function($that, optionType){
        var data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.feeDel = JSON.stringify(data.feeDel || null);
        if(optionType === 2){
            html = T.viewBus(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
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
                            startUseTime : $layer.find('[name="startUseTime"]').val(),
                            endUseTime : $layer.find('[name="endUseTime"]').val()
                        },
                        commonData = F.assemblyLayerData($layer);
                    $.extend(baseInfo, commonData);
                    $that.val(commonData.needPayMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                    F.sumBookingSubtotal($that.closest('.T-container'));
                    layer.close(index);
                });
            }
        });
    };

    /**
     * 编辑应收
     * @param  {[type]} $that      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateMoney = function($that, optionType){
        var data = {}, moneyData = $that.data('json'), html = "";
        
        if(typeof moneyData !== "object"){
            moneyData = JSON.parse(moneyData || "{}");
        }

        data.feeDel = JSON.stringify(data.feeDel || null);

        $.extend(data, moneyData);
        if(optionType === 2){
            html = T.viewMoney(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
        }else{
            html = T.updateMoney(data);
        }
        layer.open({
            type: 1,
            title: "应收款",
            skin: 'layui-layer-rim', //加上边框
            area: '850px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                var validate = bookingOrder.bindLayerCommonFeeEvents($layer, index, optionType);
                
                $layer.find('[name="isNowIncome"]').on('change', function(){
                    if($(this).is(":checked")){
                        $layer.find('.T-now-money').removeClass('hidden');
                    }else{
                        $layer.find('.T-now-money').addClass('hidden');
                    }
                });
                
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var moneyData = F.assemblyLayerData($layer);
                    if(moneyData.feeList.length === 0){
                        showMessageDialog('至少填写一条费用项！');
                        return false;
                    }
                    $that.val(moneyData.sumNeedGetMoney).data('json', JSON.stringify(moneyData)).trigger('blur');
                    bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                    layer.close(index);
                });
            }
        });
    };

    /**
     * 编辑客人信息
     * @param  {[type]} $thta      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    bookingOrder.updateGuestInfo = function($that, optionType){
        var data = $that.data('json'), html = "", title = "编辑客人信息";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        if(optionType === 2){
            title = "查看客人信息";
            html = T.viewGuestInfo(data);
        }else{
            html = T.updaeGuestInfo(data);
        }
        layer.open({
            type: 1,
            title: title,
            skin: 'layui-layer-rim', //加上边框
            area: '1000px', //宽高
            zIndex:1028,
            content: html,
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                if(optionType === 2){
                    $layer.find('.T-btn-close').on('click', function(){
                        layer.close(index);
                    });
                }else{
                    var $tbody = $layer.find('.T-addTouristTbody'),
                        validate = rule.checkGuest($layer);

                    $layer.find('.T-btn-save').on('click', function(){
                        if(!validate.form())return;
                        var infoData = {
                            adultCount : $layer.find('[name="adultCount"]').val(),
                            childCount : $layer.find('[name="childCount"]').val(),
                            touristRealname : $layer.find('[name="touristRealname"]').val(),
                            touristMobileNumber : $layer.find('[name="touristMobileNumber"]').val(),
                        }

                        $that.val(infoData.touristRealname+"  "+(infoData.adultCount || 0)+"大"+(infoData.childCount || 0)+"小").data('json', JSON.stringify(infoData)).trigger('blur');
                        $that.closest('.T-booking-info').find('[name="mobileNumber"]').val(infoData.touristMobileNumber).trigger('blur');
                        bookingOrder.saveData($that.closest('.T-container'), false, false, true);
                        layer.close(index);
                    });
                }
            }
        });
    }
    /**
     * 绑定弹层费用项公共事件
     * @param  {object} $layer     layer的jQuery对象
     * @param  {number} layerIndex layer的index值
     * @param  {number} type       1为查看，0为编辑
     * @return {[type]}            [description]
     */
    bookingOrder.bindLayerCommonFeeEvents = function($layer, layerIndex, type){
        if(type === 2){
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
        if($layer.find('.datetimepicker').length > 0){
            F.setDateTimePicker($layer.find('.datetimepicker'));
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
                         '<option value="2">小孩结算价</option>'+
                         '<option value="4">车辆费用</option>'+
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
        //绑定景区
        bookingOrder.getScenic($layer.find('[name="scenic"]'));
        //表内操作
        //删除
        $tbody.on('click', '.T-action', function(event){
            event.preventDefault();
            var $this = $(this), $tr = $this.closest('tr') , id = $tr.data('id');
            if($this.hasClass('T-delete')){
                if(!!id){
                    var delJson = $this.closest('.T-fee-list').data('del-json') || [];
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

    /**
     * 保存新增/编辑数据
     * @param  {object} $tab tab的jQuery对象
     * @param  {[type]} validate [description]
     * @param  {[type]} tabArgs  [description]
     * @return {[type]}          [description]
     */
    bookingOrder.saveData = function($tab, validate, tabArgs, isCache){
        var data = {},
            bookingOrderJson = {},
            $baseInfo = $tab.find('.T-booking-info');

        bookingOrderJson.orderNumber = $tab.find('[name="orderNumber"]').val();
        bookingOrderJson.partnerAgencyName = $baseInfo.find('[name="fromPartnerAgency"]').val();
        bookingOrderJson.partnerAgencyId = $baseInfo.find('[name="fromPartnerAgency"]').data('id');
        bookingOrderJson.contactId = $baseInfo.find('[name="fromPartnerAgency"]').data('contact-id');
        bookingOrderJson.outOPUserName = $baseInfo.find('[name="outOPUserName"]').val();
        bookingOrderJson.outOPUserId = $baseInfo.find('[name="outOPUserName"]').data('id');

        var $hotel = $baseInfo.find('.T-hotel'),
            hotelJson = $hotel.data('json'),
            hotelId = $hotel.data('id');
        hotelJson = typeof hotelJson !== "object" ? JSON.parse(hotelJson || null) : hotelJson;
        if(!$.isEmptyObject(hotelJson)){
            hotelJson.hotel = typeof hotelJson.hotel !== "object" ? JSON.parse(hotelJson.hotel || null) : hotelJson.hotel;
            if(!!hotelJson.hotel){
                hotelJson.arrangeHotelIds = "";
                for (var i = hotelJson.hotel.length - 1; i >= 0; i--) {
                    if(i != 0){
                        hotelJson.arrangeHotelIds += hotelJson.hotel[i].id + ",";
                    }else{
                        hotelJson.arrangeHotelIds += hotelJson.hotel[i].id;
                    }
                }
            }
            
            hotelJson.deleteFeeIds = F.assemblyFeeDelIds(hotelJson.feeDel);
            if(!!hotelId){
                hotelJson.id = hotelId;
            }
        }
        if($hotel.data('clear') == "1" && !!hotelId){
            bookingOrderJson.delHotelInfoId = hotelId;
        }
        bookingOrderJson.hotel = hotelJson;

        var $ticket = $baseInfo.find('.T-ticket'),
            ticketJson = $ticket.data('json'),
            ticketId = $ticket.data('id');
        ticketJson = typeof ticketJson !== "object" ? JSON.parse(ticketJson || null) : ticketJson;
        if(!!ticketId && !$.isEmptyObject(ticketJson)){
            ticketJson.id = ticketId;
        }
        if(!$.isEmptyObject(ticketJson)){
            ticketJson.deleteFeeIds = F.assemblyFeeDelIds(ticketJson.feeDel);
        }
        if($ticket.data('clear') == "1" && !!ticketId){
            bookingOrderJson.delTicketInfoId = ticketId;
        }
        bookingOrderJson.ticket = ticketJson;

        var $scenic = $baseInfo.find('.T-scenic'),
            scenicJson = $scenic.data('json'),
            scenicId = $scenic.data('id');
        scenicJson = typeof scenicJson !== "object" ? JSON.parse(scenicJson || null) : scenicJson;
        if(!!scenicId && !$.isEmptyObject(scenicJson)){
            scenicJson.id = scenicId;
        }
        if(!$.isEmptyObject(scenicJson)){
            scenicJson.deleteFeeIds = F.assemblyFeeDelIds(scenicJson.feeDel);
        }
        if($scenic.data('clear') == "1" && !!scenicId){
            bookingOrderJson.delScenicInfoId = scenicId;
        }
        bookingOrderJson.scenic = scenicJson;

        var $bus = $baseInfo.find('.T-bus'),
            busJson = $bus.data('json'),
            busId = $bus.data('id');

        busJson = typeof busJson !== "object" ? JSON.parse(busJson || null) : busJson;
        if(!!busId && !$.isEmptyObject(busJson)){
            busJson.id = busId;
        }
        if(!!busJson && !$.isEmptyObject(busJson)){
            busJson.deleteFeeIds = F.assemblyFeeDelIds(busJson.feeDel);
        }
        if($bus.data('clear') == "1" && !!busId){
            bookingOrderJson.delBusInfoId = busId;
        }
        bookingOrderJson.bus = busJson;

        var receivableJson = $baseInfo.find('.T-receivable').data('json');
        receivableJson = typeof receivableJson !== "object" ? JSON.parse(receivableJson || null) : receivableJson;
        if(!$.isEmptyObject(receivableJson)){
            receivableJson.deleteFeeIds = F.assemblyFeeDelIds(receivableJson.feeDel);
        }
        bookingOrderJson.needGet = receivableJson;

        var guestInfoJson = $baseInfo.find('.T-guest-info').data('json');
        guestInfoJson = typeof guestInfoJson !== "object" ? JSON.parse(guestInfoJson || null) : guestInfoJson;
        bookingOrderJson.tourist = guestInfoJson;

        var id = $tab.find('.T-container').data('id');
        if(!!id){
            bookingOrderJson.id = id;
        }


        if(!!isCache && !!window.localStorage){
            var hctBookingOrderAdd = window.localStorage.getItem("hct_booking_order_add");
            hctBookingOrderAdd = JSON.parse(hctBookingOrderAdd || null) || {};
            hctBookingOrderAdd[bookingOrder.openAddTime] = bookingOrderJson;
            console.log(bookingOrderJson)
            console.log(hctBookingOrderAdd);
            window.localStorage.setItem("hct_booking_order_add", JSON.stringify(hctBookingOrderAdd));
            return false;
        }else if(!!isCache){
            return false;
        }
        data.bookingOrder = JSON.stringify(bookingOrderJson);
        $.ajax({
            url : KingServices.build_url('bookingOrderV2', "saveBookingOrder"),
            data : data,
            type: 'POST',
            success : function(data){
                if(showDialog(data)){
                    showMessageDialog(data.message, function() {
                        if(!!tabArgs){
                            if(Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2])){
                                bookingOrder.init_events($("#tab-"+tabArgs[0]+"-content"));
                            };
                        }else{
                            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                            var $listTab = $("#tab-customer_order-content");
                            if($listTab.length > 0){
                                $listTab.find('#customerOrderBookingOrder').find('.T-btn-search').trigger('click');
                            }else{
                                bookingOrder.showListPage(0);
                            }
                        }
                        if(window.localStorage){
                            window.localStorage.removeItem("hct_booking_order_add");
                        }
                    });
                }else{

                }
            }
        })
    };
    /**
     * 选择外联销售
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    bookingOrder.getOPUserList = function($target, isOne){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    if($target.closest('.T-search-area').length === 0){
                        $target.val('');
                    }
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
                    if($target.val() == "" && !!isOne){
                        $target.val(data.realName).data('id', data.userId);
                    }
                    
                    var userList = JSON.parse(data.userList || false);
                    if (!!userList) {
                        for (var i = 0, len = userList.length;i < len; i++) {
                            userList[i].value = userList[i].realName;
                        }

                        $target.autocomplete('option', 'source', userList).data('ajax', true);;
                    }
                }
            });
        });
    }
    /**
     * 选择景区
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    bookingOrder.getScenic = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('')
                    .data('id', '');
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
                url: KingServices.build_url('scenic', 'findAll'),
                type: 'post',
                showLoading: false,
            })
            .done(function(data) {
                if (showDialog(data)) {                    
                    var scenicList = JSON.parse(data.scenicList || false);
                    if (!!scenicList) {
                        for (var i = 0, len = scenicList.length;i < len; i++) {
                            scenicList[i].value = scenicList[i].name;
                        }
                        $target.autocomplete('option', 'source', scenicList).data('ajax', true);;
                        $target.autocomplete('search', '');
                    }
                }
            });
        });
    }

    /**
     * 组装弹层公用参数
     * @param  {[type]} $layer [description]
     * @return {[type]}        [description]
     */
    F.assemblyLayerData = function($layer){
        var data = {};
        data.required = $layer.find('[name="required"]').val();
        if($layer.find('.T-abversion').val() == "1"){
            data.opSide = 1;
            data.dutyDepartmentName = $layer.find('[name="businessName"]').val();
            data.dutyDepartmentId = $layer.find('[name="businessName"]').data('id');
            data.dutySubDepartmentName = $layer.find('[name="groupName"]').val();
            data.dutySubDepartmentId = $layer.find('[name="groupName"]').data('id');
            data.dutyUserName = $layer.find('[name="dutyUserName"]').val();
            data.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
        }else{
            data.opSide = 0;
        }
        var id = $layer.find('.container-fluid').data('id');
        if(!!id){
            data.id = id; 
        }

        var moneyData = {
                feeList : []
            };
            if($layer.find('[name="needPayAllMoney"]').length > 0){
                moneyData.needPayMoney = $layer.find('[name="needPayAllMoney"]').val();
            }
            if($layer.find('[name="sumNeedGetMoney"]').length > 0){
                moneyData.sumNeedGetMoney = $layer.find('[name="sumNeedGetMoney"]').val();
            }
            if($layer.find('[name="preIncomeMoney"]').length > 0){
                moneyData.preIncomeMoney = $layer.find('[name="preIncomeMoney"]').val();
            }
            $layer.find('.T-fee-list tr').each(function(index){
                var $that = $(this),
                    id = $that.data('id'),
                    type = $that.find('[name="type"]').val(),
                    count = $that.find('[name="count"]').val(),
                    price = $that.find('[name="price"]').val(),
                    remark = $that.find('[name="remark"]').val();
                if(type != "" && count != "" && price != ""){
                    var jsonData = {
                        type : type,
                        count : count,
                        price : price,
                        remark : remark
                    }
                    if(!!id){
                        jsonData.id = id;
                    }
                    moneyData.feeList.push(jsonData);
                }
            });
            
            moneyData.feeDel = $layer.find('.T-fee-list').data('del-json');
            if(typeof moneyData.feeDel !== "object"){
                moneyData.feeDel = JSON.parse(moneyData.feeDel || "[]");
            }


        return $.extend({}, data, moneyData);
    };

    /**
     * 计算代订小计
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    F.sumBookingSubtotal = function($tab){
        var hotelMoney = $tab.find('.T-hotel').val() || 0,
            ticketMoney = $tab.find('.T-ticket').val() || 0,
            scenicMoney = $tab.find('.T-scenic').val() || 0,
            busMoney = $tab.find('.T-bus').val() || 0;
        $tab.find('[name="bookingSubtotal"]').val(hotelMoney*1 + ticketMoney*1 + scenicMoney*1 + busMoney*1);
        return this;
    };

    /**
     * 组装删除费用项ID集合
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    F.assemblyFeeDelIds = function(arr){
        var delIds = null;
        if(!!arr && arr.length > 0){
            delIds = "";
            for(var i=0; i<arr.length; i++){
                if(i != arr.length -1){
                    delIds += arr[i].id + ",";
                }else{
                    delIds += arr[i].id;
                }
            }
        }
        return delIds;
    };

    return bookingOrder;
});