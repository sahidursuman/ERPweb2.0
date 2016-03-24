/**
 * 发团管理——中转安排
 *
 * 通知、编辑安排、查看安排、导出安排操作
 * 显示中转安排列表
 * author: yangcany
 */
define(function(require, exports) {
    var menuKey = "arrange_transit",
        listTemplate = require("./view/list"),
        viewbusTemplate = require("./view/viewbus"),
        viewhotelTemplate = require("./view/viewhotel"),
        busplanTemplate = require("./view/busplan"),
        hotelplanTemplate = require("./view/hotelplan"),
        itsplanTemplate = require("./view/itsplan"),
        mealplanTemplate = require("./view/mealplan"),
        ticketplanTemplate = require("./view/ticketplan"),
        busviewTemplate = require("./view/busview"),
        listHeaderTemplate = require("./view/listHeader"),
        listBusTemplate = require("./view/listBus"),
        listHotelTemplate = require("./view/listHotel"),
        listItsTemplate = require("./view/listIts"),
        hotelMainTemplate = require("./view/hotelMain"),
        itsMainTemplate = require("./view/itsMian"),
        noticeTemplate = require("./view/busnotice"),
        hotelnoticeTemplate = require("./view/hotelnotice"),
        hotelplanId = "tab-" + menuKey + "-hotelplan",
        listHotel = "tab-" + menuKey + "-listHotel",
        listHeader = "tab-" + menuKey + "-listHeader",
        busplan = "tab-" + menuKey + "-busplan",
        itsplan = "tab-" + menuKey + "-itsplan",
        mealplan = "tab-" + menuKey + "-mealplan",
        ticketplan = "tab-" + menuKey + "-ticketplan",
        tabId = "tab-" + menuKey + '-content',
        viewbus =  "tab-" + menuKey + "-bus",
        busviewId = "tab-" + menuKey + '-busview';
    /**
     * 自定义中转对象
     * @type {Object}
     */
    var transitPlan = {
        $searchAreabus : false,
        $searchAreahotel : false,
        $searchAreaits : false,
        $searchAreabusview : false
    }
    //初始化中转模块
    transitPlan.initModule = function(event) {
        var args = {
            pageNo:0,
            // customerType : 0,
            arrangeItem : 'bus',
            tgOrderNumber : '',
            touristName : '',
            driverName : '',
            arriveTime : '',
            lineProductName : '',
            shift : '',
            arrangeUserName : '',
            status : '',
            sortType:'auto'
        }
        transitPlan.listTransitBusPlan(args);
    };
    // 默认展示车队
    transitPlan.listTransitBusPlan = function(args) {
        args = args || {};
        if (!!transitPlan.$searchAreabus) {
            args.tgOrderNumber = transitPlan.$searchAreabus.find('input[name=tgOrderNumber]').val();
            args.touristName = transitPlan.$searchAreabus.find('input[name=touristName]').val();
            args.driverName = transitPlan.$searchAreabus.find('input[name=driverName]').val();
            args.arriveTime = transitPlan.$searchAreabus.find('input[name=arriveTime]').val();
            args.lineProductName = transitPlan.$searchAreabus.find('input[name=lineProductName]').val();
            args.shift = transitPlan.$searchAreabus.find('input[name=shift]').val();
            args.arrangeUserName = transitPlan.$searchAreabus.find('input[name=arrangeUserName]').val();
            args.status = transitPlan.$searchAreabus.find('select[name=status]').val();
        }
        args.pageNo = args.pageNo || 0;
         $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutBusArrangeList"),
            type: "POST",
            data:args,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "中转安排", html);
                    transitPlan.$tab = $("#" + tabId);
                    // 搜索域的html
                    var listHeader = listHeaderTemplate();
                    transitPlan.$tab.find('.T-search').html(listHeader);
                    // 车队列表
                    var listToutel = listBusTemplate(data);
                    transitPlan.$searchAreabus = transitPlan.$tab.find('.T-searchMian');
                    transitPlan.$tab.find('.T-busLists').html(listToutel);
                    transitPlan.init_eventMain(transitPlan.$tab,args);
                    transitPlan.busevent(transitPlan.$tab);
                    //翻页
                    laypage({
                        cont: transitPlan.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (data.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var searchData = args;
                                searchData.pageNo = obj.curr-1
                                transitPlan.listTransitBusPlan(searchData);
                            }
                        }
                    });
                    
                    
                   
                }
            }
        })
    };
    // 房
    transitPlan.listTransitHoutelPlan = function($tab,hotelsData){
        $tab = $tab || transitPlan.$tab;
        hotelsData = hotelsData || {};
        if (!!transitPlan.$searchAreahotel) {
            hotelsData.tgOrderNumber = transitPlan.$searchAreahotel.find('input[name=tgOrderNumber]').val();
            hotelsData.touristName = transitPlan.$searchAreahotel.find('input[name=touristName]').val();
            hotelsData.hotelName = transitPlan.$searchAreahotel.find('input[name=hotelName]').val();
            hotelsData.checkInTime = transitPlan.$searchAreahotel.find('input[name=checkInTime]').val();
            hotelsData.lineProductName = transitPlan.$searchAreahotel.find('input[name=lineProductName]').val();
            hotelsData.hotelLevel = transitPlan.$searchAreahotel.find('input[name=hotelLevel]').val();
            hotelsData.arrangeUserName = transitPlan.$searchAreahotel.find('input[name=arrangeUserName]').val();
            hotelsData.status = transitPlan.$searchAreahotel.find('select[name=status]').val();
        }
        hotelsData.pageNo = hotelsData.pageNo || 0;
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutHotelArrangeList"),
            type: "POST",
            data:hotelsData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    // // 搜索域的html
                    var hotelsearch = hotelMainTemplate()
                    transitPlan.$tab.find('.T-search').html(hotelsearch);
                    // 房列表
                    var listHotel = listHotelTemplate(data);
                    transitPlan.$tab.find('.T-HotelList').html(listHotel);
                    transitPlan.$searchAreahotel = transitPlan.$tab.find('.T-hotelMian-search');
                    transitPlan.init_eventMain(transitPlan.$tab);
                    transitPlan.hotelevent(transitPlan.$tab);
                    transitPlan.bindHotelChoose(transitPlan.$tab);
                    //翻页
                    laypage({
                        cont: transitPlan.$tab.find('.T-pagenation-hotel'),
                        pages: data.totalPage,
                        curr: (data.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var searchData = hotelsData;
                                searchData.pageNo = obj.curr-1
                                transitPlan.listTransitHoutelPlan(searchData);
                            }
                        }
                    });
                }
            }
        })
    };
    // 它
    transitPlan.listTransitItsPlan = function($tab,itsData){
        $tab = $tab || transitPlan.$tab;
        itsData = itsData || {};
        if (!!transitPlan.$searchAreaits) {
            itsData.tgOrderNumber = transitPlan.$searchAreaits.find('input[name=tgOrderNumber]').val();
            itsData.touristName = transitPlan.$searchAreaits.find('input[name=touristName]').val();
            itsData.lineProductName = transitPlan.$searchAreaits.find('input[name=lineProductName]').val();
            itsData.consumeTime = transitPlan.$searchAreaits.find('input[name=consumeTime]').val();
            itsData.arrangeUserName = transitPlan.$searchAreaits.find('input[name=arrangeUserName]').val();
            itsData.status = transitPlan.$searchAreaits.find('select[name=status]').val();
        }
        itsData.pageNo = itsData.pageNo || 0;
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutOtherArrangeList"),
            type: "POST",
            data:itsData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    // 搜索域的html
                    var itsMain = itsMainTemplate();
                    transitPlan.$tab.find('.T-search').html(itsMain);
                    // 它列表
                    var listIts = listItsTemplate(data);
                    transitPlan.$tab.find('.T-itsList').html(listIts);
                    transitPlan.$searchAreaits = transitPlan.$tab.find('.T-itsMian-search');
                    transitPlan.init_eventMain(transitPlan.$tab);
                    //翻页
                    laypage({
                        cont: transitPlan.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (data.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var searchData = itsData;
                                searchData.pageNo = obj.curr-1
                                transitPlan.listTransitItsPlan(searchData);
                            }
                        }
                    });
                }
            }
        })
    }
    // 车事件
    transitPlan.busevent = function($tab){
        // 表格内操作
        $tab.find('.T-bus-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');
            if ($that.hasClass('T-plan-bus')) {
                // 车安排
                transitPlan.busplan(id,$tr);
            }else if($that.hasClass('T-view-bus')){
                //车查看
                transitPlan.buslook(id,$tr);
            }else if($that.hasClass('T-inform')){
                //通知
                var status = {
                    receiveBusStatus: $tab.find('.receiveBusStatus').data('status'),
                    receiveHotelStatus: $tab.find('.receiveHotelStatus').data('status'),
                    receiveRestaurantStatus: $tab.find('.receiveRestaurantStatus').data('status'),
                    receiveTicketStatus: $tab.find('.receiveTicketStatus').data('status'),
                    receiveOtherStatus: $tab.find('.receiveOtherStatus').data('status'),
                    sendBusStatus: $tab.find('.sendBusStatus').data('status'),
                    sendHotelStatus: $tab.find('.sendHotelStatus').data('status'),
                    sendRestaurantStatus: $tab.find('.sendRestaurantStatus').data('status'),
                    sendTicketStatus: $tab.find('.sendTicketStatus').data('status'),
                    sendOtherStatus: $tab.find('.sendOtherStatus').data('status')
                }
                transitPlan.bussendTransit(id, status,$tr);
            }
        });
        // 小查看车
        $tab.find('.T-view').on('click', function(event) {
            transitPlan.viewbus();
        });
        // 车搜索域
        $tab.find('.T-searchbus').on('click',function(event){
            transitPlan.listTransitBusPlan();
        })
        //统一付款
        $tab.find('.T-start-merge').on('click',function(){
              transitPlan.busunify();
        })
    };


    // 统一安排
    transitPlan.busunify = function(){
        for (var i = 0; i < Things.length; i++) {
            Things[i]
        }
        var outRemarkList = {
            id : id
        }
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "outBusUnifyArrange"),
            type: "POST",
            data:outRemarkList,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = busviewTemplate(data);
                    addTab(busviewId,'车安排',html);
                    transitPlan.$busviewId = $("#tab-" + busviewId + "-content");
                }
            }
        })
    }
    //提交车信息
    transitPlan.submitUpdatebus = function($tab,outRemarkId,shuttleType){
        var status = getValue($tab,'status'),
           outBusList = [],
           $tr = $tab.find('.T-bus-plan tr')
        console.log($tr);
        for (var i = 0; i < $tr.length; i++) {
            var id = $tr.eq(i).data("entity-id"),
                $trline = $tr.eq(i);
            var outBusJson = {
                busId : getValue($trline,'busId'),//车id
                busCompanyId : getValue($trline,'busCompanyId'), //车队id
                driverId : getValue($trline,'driverId'), //司机id
                serviceType :  getValue($trline,'serviceType'), //接送类型
                fee : getValue($trline,'fee'),
                seatCount : getValue($trline,'seatCount'),
                brand : getValue($trline,'brand'), 
                useTime : getValue($trline,'useTime'),
                boardLocation : getValue($trline,'boardLocation'),
                destination : getValue($trline,'destination'),
                reduceMoney : getValue($trline,'reduceMoney'), 
                needPayMoney : getValue($trline,'needPayMoney'), 
                prePayMoney : getValue($trline,'prePayMoney'), 
                remark : getValue($trline,'remark')
            };
            if(!!id){
                outBusJson.id = id;
            }
            outBusList.push(outBusJson);

       } 
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "saveOutBusArrange"),
            type: "POST",
            data:'outRemarkId='+outRemarkId+"&status="+status+"&shuttleType="+shuttleType+"&outBusList="+JSON.stringify(outBusList),
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                    Tools.closeTab(busplan);
                    transitPlan.listTransitBusPlan(transitPlan.listPageNo);
                });
            }
        })
        function getValue($obj,name){
            var $this = $obj.find('[name='+name+']'), res;
            if ($this.attr('type') == 'checkbox') {
                res =  $this.is(':checked') ? 3 : 1;
            }else if ($this.is('input')) {
                res = $this.val();
            }
            return res;
        }
    };
     /**
     * 车队autocomplete
     * @param  {[type]} $tab [容器]
     * @return {[type]}      [description]
     */
    transitPlan.bindBusCompanyChoose = function($tab){
        function clearData($tr, start) {
            switch(start) {
                case 'brand':
                    $tr.find('input[name="busbrand"]').val('');
                case 'licenseNumber':
                    $tr.find('input[name="busLicenseNumber"]').val('');
                    $tr.find('input[name="busLicenseNumberId"]').val('');
                case 'CompanyName':
                    $tr.find('input[name="busCompanyName"]').val('');
                    $tr.find('input[name="busCompanyId"]').val('');
                    $tr.find('input[name="mobileNumber"]').val('');
                case 'driverName':
                    $tr.find('input[name="driverName"]').val('');
                    $tr.find('input[name="driverId"]').val('');
                    $tr.find('input[name="driverMobileNumber"]').val('');
                default: break;
            }
        }

        function checkBusCompay($tr, start) {
            setTimeout(function() {
                var searchJson = {
                    seatCount:$tr.find('input[name=seatCount]').val(),
                    brand: $tr.find('input[name=busbrand]').val(),
                    busId: $tr.find('input[name=busLicenseNumberId]').val(),
                    busCompanyId:$tr.find('input[name=busCompanyId]').val()
                };
                $.ajax({
                    url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
                    showLoading:false,
                    type: 'post',
                    data: searchJson,
                })
                .done(function(data) {
                    if(showDialog(data)){
                        data.busCompanyList = JSON.parse(data.busCompanyList);
                        if (!data.busCompanyList || !data.busCompanyList.length) {
                            clearData($tr, start);
                        }
                    }
                });
            }, 10);
        }

        //选择车座位数
        var chooseSeatCount = $tab.find(".T-chooseSeatCount");
        chooseSeatCount.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('tr');
                    $this.val("");
                    clearData(parents, 'brand');
                }
            },
            select :function(event, ui){
                var $this = $(this),parents = $(this).closest('tr');
                checkBusCompay($(this).blur().closest('tr'), 'brand');
            }
        }).unbind("click").click(function(){
            var obj = this, $tr = $(this).closest('tr');
            $.ajax({
                url: KingServices.build_url('bookingOrder','getSeatCountList'),
                showLoading: false,
                data:{
                    brand:$tr.find("input[name=busbrand]").val(),
                    busCompanyId:$tr.find("input[name=busCompanyId]").val()
                },
                success:function(data){
                    if(showDialog(data)){
                        var seatCountListJson = [];
                        var seatCountList = data.seatCountList;
                        if(seatCountList && seatCountList.length > 0){
                            for(var i=0; i < seatCountList.length; i++){
                                var seatCount = {
                                    value : seatCountList[i]
                                }
                                seatCountListJson.push(seatCount);
                            }
                            $(obj).autocomplete('option','source', seatCountListJson);
                            $(obj).autocomplete('search', '');
                        }else{
                            layer.tips('无数据', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        })
        //选择品牌
        var chooseBrand = $tab.find(".T-chooseBusBrand");
        chooseBrand.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('tr');
                    $this.val("");
                    clearData(parents, 'LicenseNumber');
                }
            },
            select :function(event, ui){
                var $this = $(this),parents = $(this).closest('tr');
                checkBusCompay($(this).blur().closest('tr'), 'LicenseNumber');
            }
        }).unbind("click").click(function(){
            var obj = this;
            var $tr = $(this).closest('tr');
            var seatCount = $tr.find("[name=seatCount]").val();
                $.ajax({
                    url: KingServices.build_url('bookingOrder','getBusBrandList'),
                    data:{
                        seatCount:$tr.find("[name=seatCount]").val(),
                        busCompanyId:$tr.find("[name=busCompanyId]").val()
                    },
                    showLoading:false,
                    type:"POST",
                    success:function(data){
                        if(showDialog(data)){
                            var busBrandListJson = [];
                            var busBrandList = data.busBrandList;
                            if(busBrandList && busBrandList.length > 0){
                                for(var i=0; i < busBrandList.length; i++){
                                    var busBrand = {
                                        value : busBrandList[i]
                                    }
                                    busBrandListJson.push(busBrand);
                                }
                                $(obj).autocomplete('option','source', busBrandListJson);
                                $(obj).autocomplete('search', '');
                            }else{
                                layer.tips('无数据', obj, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                })
        });
        //选择车辆
        var chooseLicense = $tab.find(".T-chooseBusLicenseNumber");
        chooseLicense.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('tr');
                    $this.val("");
                    clearData(parents, 'licenseNumber');
                }
            },
            select :function(event, ui){
                var $this = $(this),parents = $(this).closest('tr');
                    parents.find("input[name=busId]").val(ui.item.id).trigger('change');
                    checkBusCompay(parents, 'licenseNumber');
            }
        }).unbind("click").click(function(){
            var obj = this,parents = $(obj).closest('tr'),
                seatCount = parents.find("[name=seatCount]").val(),
                busCompanyId = parents.find("[name=busCompanyId]").val(),
                busBrand = parents.find("[name=busbrand]").val();
                $.ajax({
                    url: KingServices.build_url('busCompany','getLicenseNumbers'),
                    data: {
                        seatCount: seatCount,
                        brand: busBrand,
                        busCompanyId: busCompanyId
                    },
                    showLoading:false,
                    type:"POST",
                    success:function(data){
                        if(showDialog(data)){
                            var licenseList = JSON.parse(data.busList);
                            if(licenseList && licenseList.length > 0){
                                for(var i=0; i < licenseList.length; i++){
                                    licenseList[i].value = licenseList[i].licenseNumber;
                                }
                                $(obj).autocomplete('option','source', licenseList);
                                $(obj).autocomplete('search', '');
                            }else{
                                layer.tips('无数据', obj, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                })
        });
        // 选择车队
        var chooseLicense = $tab.find(".T-busCompanyName");
        chooseLicense.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('tr');
                    $this.val("");
                    clearData($that.closest('tr'), 'CompanyName');
            
                }
            },
            select :function(event, ui){
                var $tr = $(this).blur().closest('tr');
                checkBusCompay($tr, 'driverName');
                $tr.find("input[name=busCompanyName]").val(ui.item.busCompanyName);
                $tr.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url('busCompany', 'findBusCompanyById'),
                    type: 'post',
                    dataType: 'json',
                    showLoading: false,
                    data: {
                        id: ui.item.id
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        data.busCompany = JSON.parse(data.busCompany || false);

                        if (!!data.busCompany)
                            $tr.find("input[name=mobileNumber]").val(data.busCompany.mobileNumber || '');
                        else {
                            $tr.find("input[name=mobileNumber]").val('');
                        }
                    }
                });
            }
        }).unbind("click").click(function(){
            var obj = this,parents = $(obj).closest('tr'),
                seatCount = parents.find("[name=seatCount]").val(),
                busBrand = parents.find("[name=busbrand]").val();
            $.ajax({
                url: KingServices.build_url('busCompany', 'getAllBusCompanyList'),
                data:  {
                    seatCount: parents.find("[name=seatCount]").val(),
                    brand: parents.find("[name=busbrand]").val(),
                    busId: parents.find('input[name="busLicenseNumberId"]').val()
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
                            $(obj).autocomplete('option','source', busCompanyList);
                            $(obj).autocomplete('search', '');
                        }else{
                            layer.tips('无数据', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            })
        });
        //司机选择
        var chooseDriver = $tab.find(".T-chooseDriver");
        chooseDriver.autocomplete({
            minLength:0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('tr');
                    $this.val("");
                    parents.find("input[name=driverId]").val("");
                    parents.find("input[name=driverMobileNumber]").val("");
                }
            },
            select :function(event, ui){
                var $this = $(this),parents = $(this).closest('tr');
                parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
                parents.find("input[name=MobileNumber]").val(ui.item.mobileNumber);
            }
        }).unbind("click").click(function(){
            var obj = this,
                $tr=$(this).closest('tr');//busCompanyId
            var busLicenseNumberId = $tr.find("input[name=busLicenseNumberId]").val();
            var busCompanyId = $tr.find("input[name=busCompanyId]").val();
            $.ajax({
                url: KingServices.build_url('busCompany','getDrivers'),
                data:"busCompanyId="+busCompanyId+"",
                showLoading:false,
                type:"POST",
                success:function(data){
                    if(showDialog(data)){
                        var driverList = JSON.parse(data.driverList);
                        if(driverList && driverList.length > 0){
                            for(var i=0; i < driverList.length; i++){
                                driverList[i].value = driverList[i].name;
                            }
                            $(obj).autocomplete('option','source', driverList);
                            $(obj).autocomplete('search', '');
                        }else{
                            layer.tips('无数据', obj, {
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
     * 酒店autocomplete
     * @param  {[type]} tab       [容器]
     * @param  {[type]} validator [description]
     * @return {[type]}           [description]
     */
    transitPlan.bindHotelChoose = function($tab){
        var hotelChoose = $tab.find('.T-chooseHotel');
        var $hotelStar = $tab.find(".tripPlanHotelStar");
        $hotelStar.off().on("change", function(){
            var parentObj = $(this).closest('tr');
            parentObj.find("input[name=hotelName]").val("");
            parentObj.find("input[name=hotelId]").val("");
            parentObj.find("input[name=hotelRoomType]").val("");
            parentObj.find("input[name=hotelRoomTypeId]").val("");
            parentObj.find("input[name=hotelMobileNumber]").val("");
            parentObj.find("input[name=hotelManagerName]").val("");
            parentObj.find("input[name=hotelPrice]").val("");
        });
        //酒店选择
        hotelChoose.autocomplete({
            minLength:0,
            change: function(event,ui){
                if(ui.item == null){
                    $(this).val("");
                    var parents = $(this).closest('tr');
                    parents.find("input[name=hotelId]").val("");
                    parents.find("input[name=hotelRoomType]").val("");
                    parents.find("input[name=hotelRoomTypeId]").val("");
                    parents.find("input[name=hotelMobileNumber]").val("");
                    parents.find("input[name=hotelManagerName]").val("");
                    parents.find("input[name=hotelPrice]").val("");
                }
            },
            select: function(event,ui){
                var _this = this, parents = $(_this).closest('tr');
                parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
                $.ajax({
                    url: KingServices.build_url("hotel","getHotelById"),
                    showLoading:false,
                    data:"id=" + ui.item.id,
                    success: function(data) {
                        if(showDialog(data)){
                            parents.find("input[name=hotelMobileNumber]").val(data.hotel.mobileNumber);
                            parents.find("input[name=hotelManagerName]").val(data.hotel.managerName);
                            parents.find("select[name=hotelLevel]").val(data.hotel.level);
                            parents.find("input[name=hotelRoomType]").val("");
                            parents.find("input[name=hotelRoomId]").val("");
                        }
                    }
                });
            }
        }).off("click").on("click", function(){
            var hotelStarValue = $hotelStar.val(),
                hotelStarValue = $(this).closest('tr').find('.tripPlanHotelStar').val();
            obj = this;
            $.ajax({
                url: KingServices.build_url('hotel','findHotelListByLevel'),
                showLoading:false,
                data:"level=" + hotelStarValue,
                success: function(data) {
                    if(showDialog(data)){
                        var hotelList = JSON.parse(data.hotelList);
                        if(hotelList && hotelList.length > 0){
                            for(var i=0; i < hotelList.length; i++){
                                hotelList[i].value = hotelList[i].name;
                            }
                            $(obj).autocomplete('option','source', hotelList);
                            $(obj).autocomplete('search', '');
                        }else{
                            layer.tips('没有酒店可供选择', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        });
        //房型选择
        $tab.find("[name=hotelRoomType]").autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $(this).val("");
                    var objParent = $(this).closest('tr');
                    objParent.find("input[name=hotelRoomTypeId]").val("");
                    objParent.find("input[name=hotelPrice]").val("");
                }
            },
            select:function(event,ui){
                var $thisRoom =$(this).closest('tr');
                $thisRoom.find("input[name=hotelRoomTypeId]").val(ui.item.id).trigger('change');
                var startTime=$thisRoom.find("input[name=checkInTime]").val();
                $.ajax({
                    url: KingServices.build_url('hotel','findRoomDetailById'),
                    showLoading:false,
                    data:"id=" + ui.item.id+"&startTime="+startTime,
                    success: function(data) {
                        if(showDialog(data)){
                            var hotelRoom = JSON.parse(data.hotelRoom);
                            $thisRoom.find("input[name=hotelPrice]").val(hotelRoom.normalInnerPrice).trigger('change');
                        }
                    }
                })
            }
        }).off("click").on("click", function(){
            var _this = $(this), $parents = _this.closest('tr'),
            id = $parents.find('input[name=hotelId]').val();
            if (!!id) {
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
                                $(_this).autocomplete('option','source', hotelRommList);
                                $(_this).autocomplete('search', '');
                            }else{
                                layer.tips('没有房型可供选择', _this, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            }else{
                layer.tips('请选择酒店', _this, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
        });
    };
    //房事件
    transitPlan.hotelevent = function($tab){
        // 表格内操作
        $tab.find('.T-hotel-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');
            if ($that.hasClass('T-plan-hotel')) {
                //安排
                transitPlan.hotelplan(id,$tr);
            }else if($that.hasClass('T-inform')){
                var status = {
                    receiveBusStatus: $tab.find('.receiveBusStatus').data('status'),
                    receiveHotelStatus: $tab.find('.receiveHotelStatus').data('status'),
                    receiveRestaurantStatus: $tab.find('.receiveRestaurantStatus').data('status'),
                    receiveTicketStatus: $tab.find('.receiveTicketStatus').data('status'),
                    receiveOtherStatus: $tab.find('.receiveOtherStatus').data('status'),
                    sendBusStatus: $tab.find('.sendBusStatus').data('status'),
                    sendHotelStatus: $tab.find('.sendHotelStatus').data('status'),
                    sendRestaurantStatus: $tab.find('.sendRestaurantStatus').data('status'),
                    sendTicketStatus: $tab.find('.sendTicketStatus').data('status'),
                    sendOtherStatus: $tab.find('.sendOtherStatus').data('status')
                }
                // 通知
                transitPlan.hotelsendTransit(id,status,$tr);
            }else if($that.hasClass('T-viewhotel-plan')){
                //查看房安排
                transitPlan.hotelview(id,$tr);

            }

        });
        //查看方安排
        transitPlan.hotelview = function(id,$tr){
            var shuttleType = $tr.find('input[name=shuttleType]').val();
            var viewbusData = {
                id : id,
                shuttleType : shuttleType
            }
            $.ajax({
                url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutHotelArrange"),
                type: "POST",
                data:viewbusData,
                success: function(data) {
                    var result = showDialog(data);
                    if(result){
                        var html = busviewTemplate(data);
                        addTab(busviewId,'查看车安排',html);
                    }
                }
            })
            

        }
         
        // 查看房
        $tab.find('.T-view-hotel').on('click', function(event) {
            transitPlan.minviewhotel();
        });
        // 房搜索域
        $tab.find('.T-searchhotel').on('click',function(){
            transitPlan.listTransitHoutelPlan();
        })
        
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
        //房安排
    transitPlan.hotelplan = function(id,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            id : id,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutHotelArrange"),
            type: "POST",
            data:planbusData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = hotelplanTemplate(data);
                    addTab(hotelplanId, '房安排', html);
                    transitPlan.$tab = $("#tab-" + hotelplanId + "-content");
                    var $tab = transitPlan.$tab;
                    //绑定删除事件
                    transitPlan.$tab.on('click','.T-contact-delete',function(event){
                        transitPlan.delBusArrange($(this));
                    });
                    // 新增房安排
                    transitPlan.$tab.find('.T-add-hotel').on('click', function(event) {
                        transitPlan.addhotel($tab);
                    })
                    //change触发计算
                    transitPlan.$tab.on('change', '.count, .price, .discount', function(){
                        var $that = $(this);
                        $Tr = $that.closest("tr");
                        transitPlan.calculation($Tr);
                    });
                    // 房物理删除
                    
                    transitPlan.$tab.find('.T-hotel-plan').on('click', '.T-contact-delete', function(event) {
                        event.preventDefault();
                        var $that = $(this),
                            $tr = $that.closest('tr');
                        transitPlan.deletehotel($tr);  
                    });
                    // 提交房安排保存
                    transitPlan.$tab.find('.T-hotel-save').on('click',function(){
                        transitPlan.submitUpdatehotel($tab,id,shuttleType)
                    })
                }
            }
        })
    };
      //提交房信息
    transitPlan.submitUpdatehotel = function($tab,outRemarkId,shuttleType){
        var status = getValue($tab,'status'),
           outHotelList = [],
           $tr = $tab.find('.T-hotel-plan tr')
        for (var i = 0; i < $tr.length; i++) {
            var id = $tr.eq(i).data("entity-id"),
                $trline = $tr.eq(i);
            var outhotelJson = {
                hotelId : getValue($trline,'hotelId'),//房ID
                hotelRoomId : getValue($trline,'hotelRoomTypeId'),//房型Id
                checkInTime : getValue($trline,'checkInTime'),
                checkOutTime : getValue($trline,'checkOutTime'),
                price : getValue($trline,'price'),
                memberCount : getValue($trline,'memberCount'),
                reduceMoney : getValue($trline,'reduceMoney'),
                needPayMoney : getValue($trline,'needPayMoney'),
                prePayMoney : getValue($trline,'prePayMoney'),
                remark : getValue($trline,'remark')
            };
            if(!!id){
                outhotelJson.id = id;
            }
            outHotelList.push(outhotelJson);

       } 
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "saveOutHotelArrange"),
            type: "POST",
            data:'outRemarkId='+outRemarkId+"&status="+status+"&shuttleType="+shuttleType+"&outHotelList="+JSON.stringify(outHotelList),
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                    Tools.closeTab(busplan);
                    transitPlan.listTransitHoutelPlan(transitPlan.listPageNo);
                });
            }
        })
        function getValue($obj,name){
            var $this = $obj.find('[name='+name+']'), res;
            if ($this.attr('type') == 'checkbox') {
                res =  $this.is(':checked') ? 3 : 1;
            }else if ($this.is('input')) {
                res = $this.val();
            }
            return res;
        }
    };
    /**
     * 中转安排删除房物理删除安排
     * @param  {[type]} $obj      [删除对象]
     * @param  {[type]} $id       [删除对象ID]
     * @param  {[type]} $cateName [识别字段]
     * @return {[type]}           [description]
     */
    transitPlan.deletehotel = function($tr) {
        var $bus = "hotel",
            $id = $tr.data('entity-id');
        if (!!$id) {
            showConfirmDialog($( "#confirm-dialog-message" ), '确定要删除该安排？', function(){
                $.ajax({
                    url: KingServices.build_url('v2/singleItemArrange/touristGroupTransferArrange','deleteTransferArrange'),
                    type: "POST",
                    data: "cateName="+$bus+"&id="+$id+"",
                    success: function(data){
                        if(showDialog(data)){
                            showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                                $tr.closest('tr').fadeOut(function(){
                                    $tr.closest('tr').remove();
                                });
                            });
                        }
                    }
                });
            })
        }else{
            $tr.closest('tr').fadeOut(function(){
                $tr.closest('tr').remove();
            });
        }
    };
    //它事件
    transitPlan.itsevent = function($tab){
        // 它搜索域
        $tab.find('.T-searchits').on('click',function(){
            transitPlan.listTransitItsPlan();
        })
        // 它 表格内操作
        $tab.find('.T-its-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');

            if ($that.hasClass('T-plan-its')) {
                // 房安排
                transitPlan.itsplan();
            } else if ($that.hasClass('T-plan-meal')) {
                // 餐安排
                transitPlan.mealplan();
            } else if ($that.hasClass('T-plan-ticket')) {
                // 票安排
                transitPlan.ticketplan();

            }
        });

    }
    // 公共事件绑定
    transitPlan.init_eventMain = function($tab) {
        transitPlan.$tab.find('.T-listTabs').on('click', '.T-tab', function(event) {
            event.preventDefault();
            var $that = $(this);

            if($that.hasClass('T-busTab')) {
                // 车安排
                transitPlan.listTransitBusPlan();
            }else if($that.hasClass('T-hotelTab')){
                //房查看
                var hotelsData = {
                    pageNo:0,
                    // customerType : 0,
                    arrangeItem : "hotel",
                    tgOrderNumber : '',
                    touristName : '',
                    hotelName : '',
                    checkInTime : '',
                    lineProductName : '',
                    hotelLevel : '',
                    arrangeUserName : '',
                    status : '',
                    sortType:'auto'
                }
                transitPlan.listTransitHoutelPlan(transitPlan.$tab,hotelsData);
            }else if($that.hasClass('T-itsTab')){
                // 它 
                var itsData = {
                    pageNo:0,
                    // customerType : 0,
                    arrangeItem : "other",
                    tgOrderNumber : '',
                    touristName : '',
                    lineProductName : '',
                    consumeTime : '',
                    arrangeUserName : '',
                    status : '',
                    sortType:'auto'
                }
                transitPlan.listTransitItsPlan(transitPlan.$tab,itsData);
            }
        });
       
        // 收起展开
        var $search = $tab.find('.T-search');
        $search.find('.T-shrink').on('click', function(event) {
            $tab.find('.T-hide').toggle();
        });
        
            
            
        
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
    //车安排
    transitPlan.busplan = function(id,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            id : id,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutBusArrange"),
            type: "POST",
            data:planbusData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = busplanTemplate(data);
                    addTab(busplan, '车安排', html);
                    transitPlan.$tab = $("#tab-" + busplan + "-content");
                    var $tab = transitPlan.$tab;
                    transitPlan.addResource($tab);
                    //绑定删除事件
                    transitPlan.$tab.on('click','.T-contact-delete',function(event){
                        transitPlan.delBusArrange($(this));
                    });
                    // 新增车安排
                    transitPlan.$tab.find('.T-add-bus').on('click', function(event) {
                        transitPlan.addbus(transitPlan.$tab)
                    })
                    //时间控件
                    Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
                    //保存车事件
                    transitPlan.$tab.find('.T-bus-save').on('click',function(){
                        transitPlan.submitUpdatebus($tab,id,shuttleType);
                    });
                    // 车安排下拉列表
                    transitPlan.bindBusCompanyChoose(transitPlan.$tab);
                     // 车表格内操作
                    transitPlan.$tab.find('.T-bus-plan').on('click', '.T-contact-delete', function(event) {
                        event.preventDefault();
                        var $that = $(this),
                            $tr = $that.closest('tr');
                        transitPlan.deleteArrange($tr);   
                    });
                    

                }
            }
        })
    };
    /**
     * 中转安排删除车安排
     * @param  {[type]} $obj      [删除对象]
     * @param  {[type]} $id       [删除对象ID]
     * @param  {[type]} $cateName [识别字段]
     * @return {[type]}           [description]
     */
    transitPlan.deleteArrange = function($tr) {
        var $bus = "bus",
            $id = $tr.data('entity-id');
        if (!!$id) {
            showConfirmDialog($( "#confirm-dialog-message" ), '确定要删除该安排？', function(){
                $.ajax({
                    url: KingServices.build_url('v2/singleItemArrange/touristGroupTransferArrange','deleteTransferArrange'),
                    type: "POST",
                    data: "cateName="+$bus+"&id="+$id+"",
                    success: function(data){
                        if(showDialog(data)){
                            showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                                $tr.closest('tr').fadeOut(function(){
                                    $tr.closest('tr').remove();
                                });
                            });
                        }
                    }
                });
            })
        }else{
            $tr.closest('tr').fadeOut(function(){
                $tr.closest('tr').remove();
            });
        }
    };
    
    /**
     * 车通知操作
     * @param  {[type]} id [安排ID]
     * @return {[type]}    [description]
     */
    transitPlan.bussendTransit = function(id, status,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var noticeLayer = layer.open({
            type: 1,
            title: '车通知设置',
            skin: 'layui-layer-rim', //加上边框
            area: '630px', //宽高
            zIndex:1028,
            content: noticeTemplate(status),
            success:function(){
                var $container = $('.T-transitNotice'),
                    $checkbox = $container.find('.T-checked'),
                    $touristDiv = $container.find(".T-touristCheckedShow");
                // transitPlan.dateTimePicker($container);
                var $timeCheck = $touristDiv.find('.T-checked')
                $timeCheck.click(function() {
                    var $this = $(this);
                    $timeCheck.prop('checked',false);
                    $this.prop('checked',true);

                    if($touristDiv.find('[name=timing]').is(":checked")){
                        $touristDiv.find('[name=sendDateTime]').removeClass('hidden');
                    } else{
                        $touristDiv.find('[name=sendDateTime]').addClass('hidden');
                        $touristDiv.find('[name=sendDateTime]').val('');
                    }
                })
                $container.find('.T-cancel').on('click', function() {
                    layer.close(noticeLayer);
                })
                $container.find('.T-btn-submit-notice').on('click', function() {
                    var noticeItems = {
                        shuttleType : shuttleType,
                        id : id,
                        bus: getValue('bus')
                    }
                    $.ajax({
                        url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange","noticeTransferArrange"),     
                        type: 'POST',
                        data: {
                            noticeItems: JSON.stringify(noticeItems)
                        },
                        success: function(data) {
                            if (showDialog(data)) {
                                showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
                                    layer.close(noticeLayer);
                                })
                            }
                        }
                    })
                })
                function getValue(name){
                    var $this = $container.find('[name='+name+']');
                    if ($this.attr('type') == 'checkbox') {
                        return $this.is(':checked') ? 1 : 0;
                    }else if ($this.attr('type') == 'text') {
                        return $this.val();
                    }
                }
            }
        })
    };
    /**
     * 房通知操作
     * @param  {[type]} id [安排ID]
     * @return {[type]}    [description]
     */
    transitPlan.hotelsendTransit = function(id, status,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var noticeLayer = layer.open({
            type: 1,
            title: '房通知设置',
            skin: 'layui-layer-rim', //加上边框
            area: '630px', //宽高
            zIndex:1028,
            content: hotelnoticeTemplate(status),
            success:function(){
                var $container = $('.T-transitNotice'),
                    $checkbox = $container.find('.T-checked'),
                    $touristDiv = $container.find(".T-touristCheckedShow");
                // transitPlan.dateTimePicker($container);
                var $timeCheck = $touristDiv.find('.T-checked')
                $timeCheck.click(function() {
                    var $this = $(this);
                    $timeCheck.prop('checked',false);
                    $this.prop('checked',true);

                    if($touristDiv.find('[name=timing]').is(":checked")){
                        $touristDiv.find('[name=sendDateTime]').removeClass('hidden');
                    } else{
                        $touristDiv.find('[name=sendDateTime]').addClass('hidden');
                        $touristDiv.find('[name=sendDateTime]').val('');
                    }
                })
                $container.find('.T-cancel').on('click', function() {
                    layer.close(noticeLayer);
                })
                $container.find('.T-btn-submit-notice').on('click', function() {
                    var noticeItems = {
                        shuttleType : shuttleType,
                        id : id,
                        bus: getValue('hotel')
                    }
                    $.ajax({
                        url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange","noticeTransferArrange"),     
                        type: 'POST',
                        data: {
                            noticeItems: JSON.stringify(noticeItems)
                        },
                        success: function(data) {
                            if (showDialog(data)) {
                                showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
                                    layer.close(noticeLayer);
                                })
                            }
                        }
                    })
                })
                function getValue(name){
                    var $this = $container.find('[name='+name+']');
                    if ($this.attr('type') == 'checkbox') {
                        return $this.is(':checked') ? 1 : 0;
                    }else if ($this.attr('type') == 'text') {
                        return $this.val();
                    }
                }
            }
        })
    };
    // 车事件弹窗
    transitPlan.addResource = function($tab){
        $tab.find(".T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany}, KingServices.addResourceFunction);
        $tab.find(".T-addHotelResource").off('click').on("click",{function : KingServices.addHotel , type : "tr" , name : "hotelName" , id : "hotelId" , managerName : "hotelManagerName" , mobileNumber : "hotelMobileNumber"}, KingServices.addResourceFunction);
        $tab.find(".T-addTicketResource").off('click').on("click",{function : KingServices.addTicket , type : "tr" , name : "ticketName" , id : "tickeId"}, KingServices.addResourceFunction);
        $tab.find(".T-addRestaurantResource").off('click').on("click",{function : KingServices.addRestaurant , type : "tr" , name : "restaurant" , id : "restaurantId" , managerName : "manager" , mobileNumber : "mobileNumber"}, KingServices.addResourceFunction);
        
        $tab.find(".T-addBusResource,.T-addDriverResource").off('click').on("click",{
            function : KingServices.addBusDriver,
            busCompanyName : "busCompanyName",
            busCompanyId : "busCompanyId",
            busLicenseNumberId : "busLicenseNumberId",
            busLicenseNumber : "busLicenseNumber",
            busbrand : "busbrand",
            seatCount : "seatCount",
            driverName : "driverName",
            driverId : "driverId",
            driverMobileNumber : "MobileNumber",
            type : "tr"
        }, KingServices.addBusDriverFunction);
    }

    // 它安排
    transitPlan.itsplan = function(event) {
        var html = itsplanTemplate();
        addTab(itsplan, '它安排', html);
        transitPlan.$tab = $("#tab-" + itsplan + "-content");
        //绑定删除事件
        transitPlan.$tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 新增它安排
        transitPlan.$tab.find('.T-add-its').on('click', function(event) {
            event.preventDefault();
            transitPlan.addits(transitPlan.$tab);
        });
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
    //餐安排
    transitPlan.mealplan = function(event) {
        var html = mealplanTemplate();
        addTab(mealplan, '餐安排', html);
        transitPlan.$tab = $("#tab-" + mealplan + "-content");
        //绑定删除事件
        transitPlan.$tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 新增餐安排
        transitPlan.$tab.find('.T-add-meal').on('click', function(event) {
            event.preventDefault();
            transitPlan.addmeal(transitPlan.$tab);
        });
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
    //票安排
    transitPlan.ticketplan = function(event) {
        var html = ticketplanTemplate();
        addTab(ticketplan, '票安排', html);
        transitPlan.$tab = $("#tab-" + ticketplan + "-content");
        //绑定删除事件
        transitPlan.$tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 新增票安排
        transitPlan.$tab.find('.T-add-ticket').on('click', function(event) {
            event.preventDefault();
            transitPlan.addticket(transitPlan.$tab);
        });
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
    //添加车安排
    transitPlan.addbus = function($obj) {
        var html = '<tr data-entity-id="">'+
        '<td><div class="col-sm-12"><input type="hidden" name="serviceType" value="" />'+
        '<input class="col-sm-12 bind-change T-busCompanyName" name="busCompanyName"  type="text" value="" />'+
        '<input type="hidden" name="busCompanyId" value="" /><span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
        '<td><input type="text" class="col-sm-12 T-chooseSeatCount" name="seatCount" value="" /></td>'+
        '<td><input class="col-sm-12 T-chooseBusBrand" name="busbrand" type="text" value="" /></td>'+
        '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="busLicenseNumber" type="text" value="" /><input type="hidden" name="busLicenseNumberId" value="" /><span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
        '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseDriver bind-change" name="driverName" type="text" value="" /><input type="hidden" name="driverId" value="" /><span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
        '<td><input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="" /></td>'+
        '<td><input class="col-sm-12 T-dateTimePicker  datepicker" name="useTime" type="text" value="" /></td>'+
        '<td><input class="col-sm-12" name="boardLocation" type="text"  maxlength="20"  value="" /></td>'+
        '<td><input class="col-sm-12" name="destination" type="text" maxlength="20" value="" /></td>'+
        '<td><input class="col-sm-12 T-number price F-float F-money" name="busFee" type="text"  maxlength="9" value="" /><input type="hidden" class="count" value="1" /></td>'+
        '<td><input class="col-sm-12 T-number discount F-float F-count" name="busReduceMoney"  maxlength="9" type="text" value="" /></td>'+
        '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="busNeedPayMoney"  maxlength="9" type="text" value="" /></td>'+
        '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" type="text" value="" /></td>'+
        '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
        '<td><a class="cursor T-contact-delete" data-catename="bus" title="删除">删除</a></td>'+
        '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
        transitPlan.addResource($tbody);
        transitPlan.deleteArrange($tbody);
        transitPlan.bindBusCompanyChoose($tbody);
        transitPlan.init_eventMain($tbody);
    };
    //公共方法删除安排
    transitPlan.delBusArrange = function($obj){
       var $tr = $obj.closest('tr');
        $tr.remove(); 
    };
    //添加房安排
    transitPlan.addhotel = function($obj) {
       var html ='<tr>'+
            '<td><input type="text" name="serviceType" value="" class="datepicker"/>'+
            '<td><input type="hidden" name="serviceType" value="" class="datepicker"/>'+
            '<input class="col-sm-12 T-datePicker datepicker" name="checkInTime" value="" type="text" /></td>'+
            '<td><select class="tripPlanHotelStar" name="hotelLevel">'+
            '<option  selected="selected" value="" {{if outHotel.hotel.level == 0}}selected="selected"{{/if}}>--全部--</option><option value="1">三星以下</option>'+
            '<option value="2">三星</option><option value="3">准四星</option>'+
            '<option value="4">四星</option><option value="5">准五星</option>'+
            '<option value="6">五星</option><option value="7">五星以上</option></select></td>'+
            '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" />'+
            '<span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
            '<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>'+
            '<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>'+
            '<td><input class="col-sm-12" name="hotelRoomType" value=""  type="text" /><input type="hidden" name="hotelRoomTypeId" /></td>'+
            '<td><input class="col-sm-12 T-number price F-float F-money" name="hotelPrice" value="" maxlength="9" type="text" /></td>'+
            '<td><input class="col-sm-12 count F-float F-count" name="hotelMemberCount"  maxlength="6" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="hotelReduceMoney"  maxlength="9" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-needPay F-float F-money" readonly="readonly" name="needPayMoney" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value="" type="text" maxlength="9" /></td>'+
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
            '<td><a class="cursor T-contact-delete" data-catename="hotel" title="删除">删除</a></td>'+
            '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
        transitPlan.bindHotelChoose($tbody);
        transitPlan.addResource($tbody);
        transitPlan.init_eventMain($tbody);
    };
    //添加它安排
    transitPlan.addits = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-12" type="text" value="" name="contactMobileNumber" maxlength="20"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="departmentName" maxlength="45"/></td>' +
            '<td><input class="col-sm-10" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" value="" name="dutyName" maxlength="45"/></td>' +
            '<td><a class="T-contact-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
    };
    //添加餐安排
    transitPlan.addmeal = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>' +
            '<td><input class="col-sm-10" type="text" name="departmentName" maxlength="45"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><select><option value="">机票</option><option value="">机票</option><option value="">机票</option></select></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><a class="T-contact-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
    };
    //添加票安排
    transitPlan.addticket = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-10" type="text" name="contactMobileNumber" maxlength="20"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><select><option value="">机票</option><option value="">机票</option><option value="">机票</option></select></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" /></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><a class="T-contact-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
    };
    // 查看车安排
    transitPlan.buslook = function(id,$tr){
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var viewbusData = {
            id : id,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "getOutBusArrange"),
            type: "POST",
            data:viewbusData,
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var html = busviewTemplate(data);
                    addTab(busviewId,'查看车安排',html);
                }
            }
        })
        
    };

    //小查看车
    transitPlan.viewbus = function(event) {
        var html = viewbusTemplate();
        layer.open({
            type: 1,
            title: "订房信息",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function(event) {

            }
        });
    };
    //小查看房
    transitPlan.viewhotelviewhotel = function(event) {
        var html = viewhotelTemplate();
        layer.open({
            type: 1,
            title: "订车信息",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function(event) {

            }
        })
    };
    //计算
    transitPlan.calculation = function($obj){
        var count = $obj.find(".count").val() || 0,
            price = $obj.find(".price").val() || 0,
            discount = $obj.find(".discount").val() || 0,
            needPay = (count * price)-discount;
        $obj.find(".needPay").val(needPay);
    };
    exports.init = transitPlan.initModule;
})
