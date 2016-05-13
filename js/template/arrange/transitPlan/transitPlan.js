/**
 * 发团管理——中转安排
 *
 * 通知、编辑安排、查看安排、导出安排操作
 * 显示中转安排列表
 * author: yangcany
 */
define(function(require, exports) {
    var 
        menuKey = "arrange_transit",
        listTemplate = require("./view/list"),
        busplanTemplate = require("./view/busplan"),
        hotelplanTemplate = require("./view/hotelplan"),
        // 其他安排
        itsplanTemplate = require("./view/itsplan"),
        itsViewTemplate = require("./view/itsView"),
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
        listbusCompleted = require("./view/listbusCompleted"),
        busviewalready = require("./view/busviewalready"),
        hotelnoticeTemplate = require("./view/hotelnotice"),
        hotelalreadyTemplate = require("./view/hotelalready"),
        busviewalreadyId = "tab-" + menuKey + "-busviewwalreadyId",
        hotelplanId = "tab-" + menuKey + "-hotelplan",
        listHotel = "tab-" + menuKey + "-listHotel",
        listHeader = "tab-" + menuKey + "-listHeader",
        busplan = "tab-" + menuKey + "-busplan",
        itsplan = "tab-" + menuKey + "-itsplan",
        mealplan = "tab-" + menuKey + "-mealplan",
        ticketplan = "tab-" + menuKey + "-ticketplan",
        tabId = "tab-" + menuKey + '-content',
        viewbus =  "tab-" + menuKey + "-bus",
        busviewId = "tab-" + menuKey + '-busview',
        otherViewId = menuKey + '-otherview';
    /**
     * 自定义中转对象
     * @type {Object}
     */
    var transitPlan = {
        $searchAreabus : false,
        $searchAreahotel : false,
        $searchAreaits : false,
        $searchAreabusview : false,
        transitIds :[]
    },
    service_name = "v2/singleItemArrange/touristGroupTransferArrange";

    //初始化中未安排转模块
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
        var html = listTemplate();
        Tools.addTab(menuKey, "中转安排", html);
        transitPlan.$tab = $("#" + tabId);
        // 搜索域的html
        var listHeader = listHeaderTemplate();
        
        transitPlan.$tab.find('.T-search').html(listHeader);
        // 判断是已安排还是未安排
         transitPlan.$tab.find("select[name=status]").on('change',function(){
            var status = $(this).val();
            transitPlan.listTransitBusPlan(args, status);
         })   
        
        transitPlan.$searchAreabus = transitPlan.$tab.find('.T-searchMian');
        transitPlan.init_eventMain(transitPlan.$tab);
    };

    // 默认展示车队未安排
    transitPlan.listTransitBusPlan = function(args, tempStatus) {
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
            args.shuttleType = transitPlan.$searchAreabus.find('select[name=shuttleType]').val();
        }
        args.pageNo = args.pageNo || 0;
         $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrangeList"),
            type: "POST",
            data:args,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var listToutel = "";
                    if(tempStatus == 1){
                        listToutel = listbusCompleted(data);
                       
                    }else{
                        listToutel = listBusTemplate(data);
                    }
                    transitPlan.$tab.find('.T-busLists').html(listToutel);
                    transitPlan.busevent(transitPlan.$tab,args);
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
                     transitPlan.listbusCompletednform(transitPlan.$tab);
                }
            }
        })
    };
    //车 已安排事件
    transitPlan.listbusCompletednform = function($tab){
        // 表格内操作
       $tab.find('.T-busCompleted-list').on('click','.T-action',function(){
        var $that = $(this);
            $tr = $that.closest('tr'),
            unifyId = $tr.data('id');
            if($that.hasClass('T-message')){
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
            }else if($that.hasClass('T-check-bus')){
                transitPlan.Already(unifyId,$tab);
            }else if($that.hasClass('T-plan-busyet')){
                //已安排 车安排
                transitPlan.alreadyplan(unifyId,$tr);
            }

       })
    }
    //安排车已安排
    transitPlan.alreadyplan = function(unifyId,$tr){
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            unifyId : unifyId,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrange"),
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
                    transitPlan.busplanclick($tab,unifyId);
                    $tab.find('.T-cancel').on('click',function(){
                        Tools.closeTab(busplan)
                    })
                    //给日期格式化
                    transitPlan.$tab.find('.T-datepicker').datetimepicker({
                        autoclose: true,
                        todayHighlight: true,
                        format: 'L',
                        language: 'zh-CN'
                    });
                }
            }
        })
    }
    //车安排绑定事件
    transitPlan.busplanclick = function($tab,outRemarkId,shuttleType){
        //change触发计算
        $tab.on('change', '.count, .price, .discount', function(){
            var $that = $(this);
            $Tr = $that.closest("tr");
            transitPlan.calculation($Tr);
        });
        //绑定删除事件
        $tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 新增车安排
        $tab.find('.T-add-bus').on('click', function(event) {
            transitPlan.addbus($tab)
        })
        //时间控件
        Tools.setDatePicker($tab.find('.datepicker'), true);
        //保存车事件
        $tab.find('.T-bus-save').on('click',function(){
            transitPlan.submitbus($tab,shuttleType);
        });
        // 保存车事件已安排
        $tab.find('.T-busAlready-save').on('click',function(){
            transitPlan.submitbusAlready($tab,outRemarkId,shuttleType);
        });
        // 车安排下拉列表
        transitPlan.bindBusCompanyChoose($tab);
         // 车表格内操作
        $tab.find('.T-bus-plan').on('click', '.T-contact-delete', function(event) {
            event.preventDefault();
            transitPlan.deleteArrange($(this));   
        });

    }
     //安排已安排保存
    transitPlan.submitbusAlready = function($tab,outRemarkId,shuttleType){
        var unifyId = outRemarkId;
        var outBusList = [],//车安排列表
            // status = transitPlan.getValue($tab,'status'),
            outRemarkList = [],//中转列表 Id
            $tr = $tab.find('.T-bus-plan tr'),
            outRemarkId = $tab.find('input[name=outRemarkId]');
        for (var i = 0; i < $tr.length; i++) {
            var $trline = $tr.eq(i);
            var outBusJson = {
                busId : transitPlan.getValue($trline,'busId'),//车id
                busCompanyId : transitPlan.getValue($trline,'busCompanyId'), //车队id
                driverId : transitPlan.getValue($trline,'driverId'), //司机id
                serviceType :  transitPlan.getValue($trline,'serviceType'), //接送类型
                fee : transitPlan.getValue($trline,'fee'),
                seatCount : transitPlan.getValue($trline,'seatCount'),
                brand : transitPlan.getValue($trline,'brand'), 
                useTime : transitPlan.getValue($trline,'useTime'),
                boardLocation : transitPlan.getValue($trline,'boardLocation'),
                destination : transitPlan.getValue($trline,'destination'),
                reduceMoney : transitPlan.getValue($trline,'reduceMoney'), 
                needPayMoney : transitPlan.getValue($trline,'needPayMoney'), 
                prePayMoney : transitPlan.getValue($trline,'prePayMoney'), 
                remark : transitPlan.getValue($trline,'remark')
            };
            outBusList.push(outBusJson);
        }
        outRemarkId.each(function(){
            if($(this).val().trim()){
             var outRemarkJson = {
                 outRemarkId : $(this).val(),
                 shuttleType : shuttleType
             }
             outRemarkList.push(outRemarkJson);
             }
        })
        $.ajax({
            url : KingServices.build_url(service_name, "saveOutBusUnifyArrange"),
            type : "POST",
            data : "outRemarkList="+JSON.stringify(outRemarkList)+"&outBusList="+JSON.stringify(outBusList)+"&unifyId="+unifyId,
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        
                        transitPlan.listTransitBusPlan(transitPlan.listPageNo);
                    });
                    Tools.closeTab(busplan)
                 }

            }
        })
    };
    //安排未安排保存
    transitPlan.submitbus = function($tab,shuttleType){
        var outBusList = [],//车安排列表
            // status = transitPlan.getValue($tab,'status'),
            outRemarkList = [],//中转列表 Id
            $tr = $tab.find('.T-bus-plan tr'),
            outRemarkId = $tab.find('input[name=outRemarkId]');
        for (var i = 0; i < $tr.length; i++) {
            var $trline = $tr.eq(i);
            var outBusJson = {
                busId : transitPlan.getValue($trline,'busId'),//车id
                busCompanyId : transitPlan.getValue($trline,'busCompanyId'), //车队id
                driverId : transitPlan.getValue($trline,'driverId'), //司机id
                serviceType :  transitPlan.getValue($trline,'serviceType'), //接送类型
                fee : transitPlan.getValue($trline,'fee'),
                seatCount : transitPlan.getValue($trline,'seatCount'),
                brand : transitPlan.getValue($trline,'brand'), 
                useTime : transitPlan.getValue($trline,'useTime'),
                boardLocation : transitPlan.getValue($trline,'boardLocation'),
                destination : transitPlan.getValue($trline,'destination'),
                reduceMoney : transitPlan.getValue($trline,'reduceMoney'), 
                needPayMoney : transitPlan.getValue($trline,'needPayMoney'), 
                prePayMoney : transitPlan.getValue($trline,'prePayMoney'), 
                remark : transitPlan.getValue($trline,'remark')
            };
            outBusList.push(outBusJson);
        }
        outRemarkId.each(function(){
            if($(this).val().trim()){
             var outRemarkJson = {
                 outRemarkId : $(this).val(),
                 shuttleType : shuttleType
             }
             outRemarkList.push(outRemarkJson);
             }
        })
        $.ajax({
            url : KingServices.build_url(service_name, "saveOutBusUnifyArrange"),
            type : "POST",
            data : "outRemarkList="+JSON.stringify(outRemarkList)+"&outBusList="+JSON.stringify(outBusList),
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        
                        transitPlan.listTransitBusPlan(transitPlan.listPageNo);
                    });
                    Tools.closeTab(busplan)
                 }

            }
        })
    };
    //查看车已安排
    transitPlan.Already = function(unifyId,$tab){
        $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrange"),
            type: "POST",
            data:'unifyId='+unifyId,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = busviewalready(data);
                    addTab(busviewalreadyId,'查看车安排',html);
                }
            }
        })
    }
    // 查看车安排
    transitPlan.buslook = function(outRemarkId,$tr){
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var viewbusData = {
            outRemarkId : outRemarkId,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrange"),
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
    // 房未安排
    transitPlan.listTransitHoutelPlan = function(hotelsData){
        var $tab = $tab || transitPlan.$tab,
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
            hotelsData.shuttleType = transitPlan.$searchAreabus.find('select[name=shuttleType]').val();
        }
        hotelsData.pageNo = hotelsData.pageNo || 0;
        $.ajax({
            url: KingServices.build_url(service_name, "getOutHotelArrangeList"),
            type: "POST",
            data:hotelsData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    
                    // 房列表
                    
                    if(hotelsData.status == 0){
                        var listHotel = listHotelTemplate(data);
                        transitPlan.$tab.find('.T-HotelList').html(listHotel);
                    }else{
                        var listalreadyhotel = hotelalreadyTemplate(data);
                        transitPlan.$tab.find('.T-HotelList').html(listalreadyhotel);
                        transitPlan.hotelalreadys(transitPlan.$tab);
                    }
                    
                    transitPlan.$searchAreahotel = transitPlan.$tab.find('.T-hotelMian-search');
                    transitPlan.init_eventMain(transitPlan.$tab);
                    transitPlan.hotelevent(transitPlan.$tab);
                    transitPlan.bindHotelChoose(transitPlan.$tab);
                     // 判断是已安排还是未安排
                     $tab.find("select[name=status]").on('change',function(){
                        transitPlan.listTransitHoutelPlan()
                     });
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
     //查看方已安排安排
    transitPlan.hotelAlreadyview = function(unifyId,$tr){
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var viewbusData = {
            unifyId : unifyId,
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
    // 房已安排安排
    transitPlan.arranged = function(unifyId,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            unifyId : unifyId,
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
                    transitPlan.hotelplanclick($tab,unifyId);
                }
            }
        })
    };
    // 它
    transitPlan.listTransitItsPlan = function($tab,itsData){
        $tab = $tab || transitPlan.$tab;
        itsData = itsData || {};
        // if (!!transitPlan.$searchAreaits) {
        //     itsData.tgOrderNumber = transitPlan.$searchAreaits.find('input[name=tgOrderNumber]').val();
        //     itsData.touristName = transitPlan.$searchAreaits.find('input[name=touristName]').val();
        //     itsData.lineProductName = transitPlan.$searchAreaits.find('input[name=lineProductName]').val();
        //     itsData.consumeTime = transitPlan.$searchAreaits.find('input[name=consumeTime]').val();
        //     itsData.arrangeUserName = transitPlan.$searchAreaits.find('input[name=arrangeUserName]').val();
        //     itsData.status = transitPlan.$searchAreaits.find('select[name=status]').val();
        // }
        itsData.pageNo = itsData.pageNo || 0;
        if ($tab) {
            var args = $tab.find('.T-itsMian-search').find('form').serializeJson();
            args.pageNo = itsData.pageNo;
            itsData = args;
        }
        $.ajax({
            url: KingServices.build_url(service_name, "getOutOtherArrangeList"),
            type: "POST",
            data:itsData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    // 搜索域的html
                    var itsMain = itsMainTemplate();
                    transitPlan.$tab.find('.T-search').html(itsMain);

                    if (data.recordSize) {
                        for (var i = 0, tmp, len = data.outOtherList.length;i < len; i ++) {
                            tmp = data.outOtherList[i];

                            // n = 0;
                            // for (var j = 0, len_j = tmp.arrangeItems.length, tmpJ; j < len_j; j ++) {
                            //     tmpJ = tmp.arrangeItems[j];
                            //     tmpJ.size = tmp.arrangeItems[j].arrangeResultList.length || 1;

                            //     n += tmpJ.size;
                            // }

                            tmp.size = len_j = tmp.arrangeItems.length || 1;
                        }
                    }
                    // 它列表
                    var listIts = listItsTemplate(data);
                    transitPlan.$tab.find('.T-itsList').html(listIts);
                    transitPlan.$searchAreaits = transitPlan.$tab.find('.T-itsMian-search');
                    transitPlan.init_other_event(transitPlan.$tab);
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

    /**
     * 中转安排：其他安排的事件初始化
     * @param  {object} $tab 顶层父元素
     * @return {[type]}      [description]
     */
    transitPlan.init_other_event = function($tab) {
        $tab.find('.T-its-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');

            if ($that.hasClass('T-inform')) {  // 通知
                transitPlan._inform_work({
                    restaurant: 1,
                    shuttleType: $that.closest('tr').data('shuttleType'),
                    id: id
                })
            } else if ($that.hasClass('T-plan-its'))  {  // 安排
                transitPlan.otherArrange(id);
            } else if ($that.hasClass('T-view-plan'))   {  // 查看
                transitPlan.otherView(id);
            }
        });

        $tab.find('.T-itsMian-search').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('T-searchits')) {
                // 搜索
                transitPlan.listTransitItsPlan($tab);
            } else if ($that.hasClass('T-more')) {
                // 高级搜索
                $that.closest('form').next().toggleClass('hidden');
            // } else if ($that.hasClass('T-less'))  {
            //     // 收起
            //     $that.closest('form').next().addClass('hidden');
            } else if ($that.hasClass('T-transit-export')) {

            }
        });
    };

    /**
     * 打开其他安排的安排页面
     * @param  {int} id 安排的ID
     * @return {[type]}    [description]
     */
    transitPlan.otherArrange = function(id) {
        if (!id) {
            console.info('其他安排为空，无法进行安排');
        }

        $.ajax({
            url: KingServices.build_url(service_name, 'getOutOtherArrange'),
            type: 'get',
            dataType: 'json',
            data: {id: id},
        })
        .done(function(res) {
            if (showDialog(res)) {
                var tab_key = menuKey + '_other_arrange';
                if (Tools.addTab(tab_key, '其他安排', itsplanTemplate(res))) {
                    transitPlan.init_other_arrange($('#tab-'+ tab_key + '-content'));
                }
            }
        });        
    };

    /**
     * 其他安排的操作界面
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    transitPlan.init_other_arrange = function($tab) {
        transitPlan.setDate($tab);

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
                transitPlan.addRestaurant($tbody);
            } else if ($that.hasClass('T-ticket')) {
                // 添加票务
                transitPlan.addTicket($tbody);
            } else if ($that.hasClass('T-other')) {
                // 添加其他
                transitPlan.addOther($tbody);
            }
        })
        .on('click', '.T-autocomplete-input', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('ui-autocomplete-input')) return;

            if ($that.hasClass('T-chooseRestaurant')) {
                // 餐厅选项
                transitPlan.setRestaurantList($that);
            } else if ($that.hasClass('T-chooseTicket'))  {
                // 票务选项
                transitPlan.setTicketChoose($that);
            }

            $that.trigger('click');
        })
        .on('click', '.T-arrange-delete', function(event) {
            event.preventDefault();
            // 删除
            transitPlan.deleteArrange($(this));
        })
        .on('change', '[name="price"], [name="memberCount"], [name="reduceMoney"], [name="reduceMoney"]', function(event) {
            event.preventDefault();
            
            transitPlan.calculation($(this).closest('tr'));
        });

        $tab.find('.T-submit').on('click', function(event) {
            event.preventDefault();
            transitPlan.otherSubmit($tab);
        });
    };

    transitPlan.addRestaurant = function($tbody) {
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
        transitPlan.setDate($line);
    };
    transitPlan.addTicket = function($tbody) {
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
        transitPlan.setDate($line);
    };
    transitPlan.addOther = function($tbody) {
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
        transitPlan.setDate($line);
    };

    transitPlan.otherSubmit = function($tab) {
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
                showMessageDialog(res.message,function(){
                    Tools.closeTab(Tools.getTabKey($tab));
                });
            }
        });
        
    };
    transitPlan.setDate = function($container) {
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

    transitPlan.otherView = function(id) {
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
                if (Tools.addTab(otherViewId, '查看其他安排', itsViewTemplate(res))) {
                    var tabId = '#tab-' + otherViewId + '-content';
                    $(tabId).find('.T-close').on('click', function(event) {
                        event.preventDefault();

                        Tools.closeTab(tabId);
                    });
                }
            }
        });        
    };
    // 车事件
    transitPlan.busevent = function($tab,args){
        // 表格内操作
        $tab.find('.T-bus-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                outRemarkId = $tr.data('id');
            if ($that.hasClass('T-plan-bus')) {
                // 车安排
                transitPlan.busplan(outRemarkId,$tr);
            }else if($that.hasClass('T-view-bus')){
                //车查看
                transitPlan.buslook(outRemarkId,$tr);
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
                transitPlan.bussendTransit(outRemarkId, status,$tr);
            }
        });
        // 车搜索域
        transitPlan.$searchAreabus.find('.T-searchbus').off('click.bussearch').on('click.bussearch',function(event){
            transitPlan.listTransitBusPlan();
        })

        $tab.find('.T-cheked').on('click',function(){
            var $that = $(this),$tr = $that.closest('tr'),
                shuttleType= $tr.find("input[name=shuttleType]").val();
            // 统一安排事件绑定
            var $that=$(this),outRemarkId=$that.closest('tr').data('id');
            if($that.is(':checked')){
                var transitJson = {
                    outRemarkId : outRemarkId,
                    shuttleType : shuttleType
                };
                transitPlan.transitIds.push(transitJson);
            }else{
                for (var i = 0; i < transitPlan.transitIds.length; i++) {
                    if (transitPlan.transitIds[i].outRemarkId==outRemarkId) {
                        transitPlan.transitIds.splice(i,1);
                        break;
                   } 
                }
            }
        })
        //统一安排事件
        $tab.find('.T-start-merge').on('click',function(){
             transitPlan.busunify($tab);
        })
        //分页勾选效果
        for (var i = 0; i < transitPlan.transitIds.length; i++) {
              var transitId = transitPlan.transitIds[i].id,$trList=$tab.find('.T-bus-list').find('tr');
              $trList.each(function(index) {
                  var outRemarkId = $trList.eq(index).data('id');
                  if (!!outRemarkId && !!transitId && id == transitId) {
                      $trList.eq(index).find('.T-cheked').prop('checked', true);
                  };
              });
        }
    };

    // 统一安排
    transitPlan.busunify = function($tab){
        if (!!transitPlan.transitIds && transitPlan.transitIds.length>0) {
            var outRemarkList=transitPlan.transitIds;
            var outRemarkList = JSON.stringify(outRemarkList);
            $.ajax({
                url: KingServices.build_url(service_name, "outBusUnifyArrange"),
                type: "POST",
                data:{outRemarkList:outRemarkList},
                success: function(data) {
                    var result  = showDialog(data);
                    if (result) {
                        var html = busplanTemplate(data);
                        addTab(busviewId,'车安排',html);
                        transitPlan.$busviewId = $("#tab-" + busviewId + "-content");
                        $tab = transitPlan.$busviewId
                        transitPlan.$checkJson = transitPlan.$busviewId;
                        transitPlan.addResource($tab);
                        transitPlan.bindBusCompanyChoose($tab);
                        transitPlan.busplanclick($tab,outRemarkList.outRemarkId,outRemarkList.shuttleType);
                        $tab.find('.T-cancel').on('click',function(){
                            Tools.closeTab(busplan);
                        })
                        //给日期格式化
                        $tab.find('.T-datepicker').datetimepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'L',
                            language: 'zh-CN'
                        });
                    }
                }
            })
        } else {
            showMessageDialog("请勾选中转安排记录" )
        }
    }
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

    /**
     * 餐厅选择项
     * @param {object} $feild 餐厅输入框
     */
    transitPlan.setRestaurantList = function($feild) {
        if ($feild.length)  {
            var $tr = $feild.closest('tr'),
                restaurantChoose = $tr.find(".T-chooseRestaurant"),
                standardChoose = $tr.find(".T-chooseStandard"),
                standardType = $tr.find("select[name=standardType]");
            standardType.off("change").on("change", function(){
                var parents = $(this).closest('tr');
                parents.find("input[name=restaurantStandardId]").val("");
                // transitPlan.calculation($(this));
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
                                // transitPlan.calculation($(_this));
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
                    transitPlan.calculation($(this));
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

    transitPlan.setTicketChoose = function($feild) {
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
    }
    //房事件
    transitPlan.hotelevent = function($tab){
        // 表格内操作
        $tab.find('.T-hotel-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                outRemarkId = $tr.data('id');
            if ($that.hasClass('T-plan-hotel')) {
                //安排
                transitPlan.hotelplan(outRemarkId,$tr);
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
                transitPlan.hotelview(outRemarkId,$tr);

            }

        });
        //查看方安排
        transitPlan.hotelview = function(outRemarkId,$tr){
            var shuttleType = $tr.find('input[name=shuttleType]').val();
            var viewbusData = {
                outRemarkId : outRemarkId,
                shuttleType : shuttleType
            }
            $.ajax({
                url: KingServices.build_url(service_name, "getOutHotelArrange"),
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
        $tab.find('.T-searchhotel').off('click.hotelsearch').on('click.hotelsearch',function(){
            transitPlan.listTransitHoutelPlan();
        })
        // 选中复选框
        $tab.find('.T-hotelcheked').on('click',function(){
            var $that = $(this),$tr = $that.closest('tr'),
                shuttleType= $tr.find("input[name=shuttleType]").val();
            
            // 统一安排事件绑定
            var $that=$(this),outRemarkId=$that.closest('tr').data('id');
            if($that.is(':checked')){
                var transitJson = {
                    outRemarkId : outRemarkId,
                    shuttleType : shuttleType
                };
                transitPlan.transitIds.push(transitJson);
            }else{
                for (var i = 0; i < transitPlan.transitIds.length; i++) {
                    if (transitPlan.transitIds[i].outRemarkId==outRemarkId) {
                        transitPlan.transitIds.splice(i,1);
                        break;
                   } 
                }
            }
        })
        //统一安排事件
        $tab.find('.T-hotel-merge').on('click',function(){
            var $that=$(this),outRemarkId=$that.closest('tr').data('id');
             transitPlan.hotelunify($tab,outRemarkId);
        })
        //分页勾选效果
        for (var i = 0; i < transitPlan.transitIds.length; i++) {
              var transitId = transitPlan.transitIds[i].outRemarkId,$trList=$tab.find('.T-hotel-list').find('tr');
              $trList.each(function(index) {
                  var outRemarkId = $trList.eq(index).data('id');
                  if (!!outRemarkId && !!transitId && outRemarkId == transitId) {
                      $trList.eq(index).find('.T-cheked').prop('checked', true);
                  };
            });
        }
        
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
    };
      // 车统一安排
    transitPlan.hotelunify = function($tab,outRemarkId){
        if (!!transitPlan.transitIds && transitPlan.transitIds.length>0) {
            var outRemarkList=transitPlan.transitIds;
            var outRemarkList = JSON.stringify(outRemarkList);
            $.ajax({
                url: KingServices.build_url(service_name, "outHotelUnifyArrange"),
                type: "POST",
                data:{outRemarkList:outRemarkList},
                success: function(data) {
                    var result  = showDialog(data);
                    if (result) {
                       var html = hotelplanTemplate(data);
                        addTab(hotelplanId, '房安排', html);
                        transitPlan.$tab = $("#tab-" + hotelplanId + "-content");
                        var $tab = transitPlan.$tab
                        transitPlan.bindHotelChoose($tab);
                        transitPlan.addResource($tab);
                        var $tab = transitPlan.$tab;
                        transitPlan.hotelplanclick($tab,outRemarkId);
                    }
                }
            })
        } else {
            showMessageDialog("请勾选中转安排记录" )
        }
    }
       // 房安排事件
    transitPlan.hotelplanclick = function($tab,outRemarkId,shuttleType){
        //change触发计算
        $tab.on('change', '.count, .price, .discount', function(){
            var $that = $(this);
            $Tr = $that.closest("tr");
            transitPlan.calculation($Tr);
        });
        // 新增房安排
        $tab.find('.T-add-hotel').on('click', function(event) {
            transitPlan.addhotel($tab);
        })
        
        // 房物理删除
        $tab.find('.T-hotel-plan').on('click', '.T-contact-delete', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr');
            transitPlan.deletehotel($tr);  
        });
        //绑定删除事件
         $tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 提交未安排安排房房安排保存
        $tab.find('.T-hotel-save').on('click',function(){
            transitPlan.submitUpdatehotel($tab,shuttleType)
        })
        // 提交已安排房房安排保存
        $tab.find('.T-hotel-already').on('click',function(){
            var unifyId = outRemarkId;
            transitPlan.submialreadyhotel($tab,unifyId,shuttleType)
        })
        //关闭房安排
        $tab.find('.T-cancel').on('click',function(){
            Tools.closeTab(hotelplanId)
        })
        Tools.setDatePicker($tab.find('.datepicker'), true);
    }
      // 已安排事件绑定
    transitPlan.hotelalreadys = function($tab){
         $tab.find('.T-hotelarranged-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                unifyId = $tr.data('id');
            if ($that.hasClass('T-plan-hotel')) {
                //安排
                transitPlan.arranged(unifyId,$tr);
            
            }else if($that.hasClass('T-viewhotel-plan')){
                //查看房安排
                transitPlan.hotelAlreadyview(unifyId,$tr);

            }
        });
    }
    // 房已安排保存
    transitPlan.submialreadyhotel = function($tab,unifyId,shuttleType){
        var outHotelList = [],//房安排列表
            outRemarkList = [],//中转列表 Id
            $tr = $tab.find('.T-hotel-plan tr'),
            outRemarkId = $tab.find('input[name=outRemarkIds]');
        for (var i = 0; i < $tr.length; i++) {
            var $trline = $tr.eq(i);
            var outhotelJson = {
                hotelId : transitPlan.getValue($trline,'hotelId'),//酒店Id 
                hotelRoomId :  transitPlan.getValue($trline,'hotelRoomTypeId'), //房型Id
                checkInTime : transitPlan.getValue($trline,'checkInTime'),
                checkOutTime : transitPlan.getValue($trline,'checkOutTime'), 
                price : transitPlan.getValue($trline,'hotelPrice'),
                reduceMoney : transitPlan.getValue($trline,'hotelReduceMoney'),
                needPayMoney : transitPlan.getValue($trline,'hotelNeedPayMoney'),
                memberCount : transitPlan.getValue($trline,'hotelMemberCount'),
                outHotelId : transitPlan.getValue($trline,'outHotelId'),
                prePayMoney : transitPlan.getValue($trline,'prePayMoney'), 
                remark : transitPlan.getValue($trline,'remark')
            };
            outHotelList.push(outhotelJson);
        }
        // if($(this).val().trim()){
            outRemarkId.each(function(){
                 var outRemarkJson = {
                     outRemarkId : $(this).val()
                 }
                 outRemarkList.push(outRemarkJson);
            })
        // }    
        $.ajax({
            url : KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "saveOutHotelUnifyArrange"),
            type : "POST",
            data : 'unifyId='+JSON.stringify(unifyId)+"&outRemarkList="+JSON.stringify(outRemarkList)+"&outHotelList="+JSON.stringify(outHotelList),
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    transitPlan.arranged(transitPlan.listPageNo)
                });
                Tools.closeTab(hotelplanId)
            }
        })
    }
    //房安排
    transitPlan.hotelplan = function(outRemarkId,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            outRemarkId : outRemarkId,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url(service_name, "getOutHotelArrange"),
            type: "POST",
            data:planbusData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = hotelplanTemplate(data);
                    addTab(hotelplanId, '房安排', html);
                    transitPlan.$tab = $("#tab-" + hotelplanId + "-content");
                    var $tab = transitPlan.$tab;
                    transitPlan.hotelplanclick($tab,outRemarkId);
                }
            }
        })
    };
       // 房保存
    transitPlan.submitUpdatehotel = function($tab,shuttleType){
        var outHotelList = [],//房安排列表
            outRemarkList = [],//中转列表 Id
            $tr = $tab.find('.T-hotel-plan tr'),
            outRemarkId = $tab.find('input[name=outRemarkIds]');
        for (var i = 0; i < $tr.length; i++) {
            var $trline = $tr.eq(i);
            var outhotelJson = {
                hotelId : transitPlan.getValue($trline,'hotelId'),//酒店Id
                hotelRoomId :  transitPlan.getValue($trline,'hotelRoomTypeId'), //房型Id
                checkInTime : transitPlan.getValue($trline,'checkInTime'),
                checkOutTime : transitPlan.getValue($trline,'checkOutTime'), 
                price : transitPlan.getValue($trline,'hotelPrice'),
                reduceMoney : transitPlan.getValue($trline,'hotelReduceMoney'),
                needPayMoney : transitPlan.getValue($trline,'hotelNeedPayMoney'),
                memberCount : transitPlan.getValue($trline,'hotelMemberCount'),
                outHotelId : transitPlan.getValue($trline,'outHotelId'),
                prePayMoney : transitPlan.getValue($trline,'prePayMoney'), 
                remark : transitPlan.getValue($trline,'remark')
            };
            outHotelList.push(outhotelJson);
        }
        // if($(this).val().trim()){
        outRemarkId.each(function(){
             var outRemarkJson = {
                 outRemarkId : $(this).val()
             }
             outRemarkList.push(outRemarkJson);
        })
        // }
        $.ajax({
            url : KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange", "saveOutHotelUnifyArrange"),
            type : "POST",
            data : "outRemarkList="+JSON.stringify(outRemarkList)+"&outHotelList="+JSON.stringify(outHotelList),
            success: function(data){
                if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    transitPlan.listTransitHoutelPlan(transitPlan.listPageNo);
                });
                Tools.closeTab(hotelplanId);
            }
            }
    })
    }
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
            showConfirmDialog('确定要删除该安排？', function(){
                $.ajax({
                    url: KingServices.build_url(service_name,'deleteTransferArrange'),
                    type: "POST",
                    data: "cateName="+$bus+"&id="+$id+"",
                    success: function(data){
                        if(showDialog(data)){
                            showMessageDialog(data.message,function(){
                                $tr.remove();
                            });
                        }
                    }
                });
            })
        }else{
            $tr.remove();
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
    transitPlan.getValue = function($obj,name){
            var $this = $obj.find('[name='+name+']'), res;
            if ($this.attr('type') == 'checkbox') {
                res =  $this.is(':checked') ? 3 : 1;
            }else if ($this.is('input')) {
                res = $this.val();
            }
            return res;
        }
    // 公共事件绑定
    transitPlan.init_eventMain = function($tab) {
        transitPlan.$tab.find('.T-listTabs').off('click.tab.api').on('click.tab.api', '.T-tab', function(event) {
            event.preventDefault();
            var $that = $(this);

            if (!$that.data('requested'))  {
                $that.data('requested', true);
            } else {
                return;
            }

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
                    status : 0,
                    sortType:'auto'
                }
                var hotelsearch = hotelMainTemplate();
                transitPlan.$tab.find('.T-search').html(hotelsearch);
                transitPlan.listTransitHoutelPlan(hotelsData);
            }else if($that.hasClass('T-itsTab')){
                // 它 
                var itsData = {
                    pageNo:0,
                    // customerType : 0,
                    arrangeItem : "other",
                    status : 0,
                    sortType:'auto'
                }
                transitPlan.listTransitItsPlan(false, itsData);
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
   
    //车未安排安排
    transitPlan.busplan = function(outRemarkId,$tr) {
        var shuttleType = $tr.find('input[name=shuttleType]').val();
        var planbusData = {
            outRemarkId : outRemarkId,
            shuttleType : shuttleType
        }
        $.ajax({
            url: KingServices.build_url(service_name, "getOutBusArrange"),
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
                    transitPlan.busplanclick($tab,outRemarkId,shuttleType);
                     //给日期格式化
                    $tab.find('.T-datepicker').datetimepicker({
                        autoclose: true,
                        todayHighlight: true,
                        format: 'L',
                        language: 'zh-CN'
                    });
                }
            }
        })
    };
    
    /**
     * 删除安排
     * @param  {object} $obj 删除按钮
     * @return {[type]}      [description]
     */
    transitPlan.deleteArrange = function($obj) {
        var $tr = $obj.closest('tr');
        var id = $tr.data('entity-id');



        if (!!id) {
            showConfirmDialog('确定要删除该安排？', function(){
                $.ajax({
                    url: KingServices.build_url(service_name,'deleteTransferArrange'),
                    type: "POST",
                    data: {
                        cateName: $obj.prop('name'),
                        id: id
                    },
                    success: function(data){
                        if(showDialog(data)){
                            showMessageDialog(data.message,function(){
                                    $tr.remove();
                            });
                        }
                    }
                });
            })
        }else{
            $tr.remove();
        }
    };
    
    /**
     * 车通知操作
     * @param  {[type]} id [安排ID]
     * @return {[type]}    [description]
     */
    transitPlan.bussendTransit = function(unifyId, status,$tr) {
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
                    transitPlan._inform_work({
                        bus : 1,
                        unifyId : id,
                        isNoticeTourist: transitPlan.getValue('bus')
                    });                 
                })
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
                    transitPlan._inform_work({
                        shuttleType : shuttleType,
                        id : id,
                        hotel: 1,
                    });
                })
            }
        })
    };

    /**
     * 通知请求
     * @param  {object} args 通知请求的参数  主体，通知范围
     * @return {[type]}      [description]
     */
    transitPlan._inform_work = function(args) {
        $.ajax({
            url: KingServices.build_url(service_name,"noticeTransferArrange"),     
            type: 'POST',
            data: {
                noticeItems: JSON.stringify(args)
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        layer.close(noticeLayer);
                    })
                }
            }
        })
    }
    // 车事件弹窗
    transitPlan.addResource = function($tab){
        $tab.find(".T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany}, KingServices.addResourceFunction);
        $tab.find(".T-addHotelResource").off('click').on("click",{function : KingServices.addHotel , type : "tr" , name : "hotelName" , id : "hotelId" , managerName : "hotelManagerName" , mobileNumber : "hotelMobileNumber"}, KingServices.addResourceFunction);
        $tab.find(".T-addTicketResource").off('click').on("click",{function : KingServices.addTicket , type : "tr" , name : "ticketName" , id : "ticketId"}, KingServices.addResourceFunction);
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
        '<td><input class="col-sm-12  T-datepicker" name="useTime" type="text" value="" /></td>'+
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
        //给日期格式化
        $obj.find('.T-datepicker').datetimepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'L',
            language: 'zh-CN'
        });
    };
    //公共方法删除安排
    transitPlan.delBusArrange = function($obj){
       var $tr = $obj.closest('tr');
        $tr.remove(); 
    };
    //添加房安排
    transitPlan.addhotel = function($obj) {
       var html ='<tr>'+
            '<td>'+
            '<input class="col-sm-12 T-datePicker datepicker" name="checkInTime" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="" type="text" /></td>'+
            '<td><select class="tripPlanHotelStar" name="hotelLevel">'+
            '<option  selected="selected" value="" {{if outHotel.hotel.level == 0}}selected="selected"{{/if}}>--全部--</option><option value="1">三星以下</option>'+
            '<option value="2">三星</option><option value="3">准四星</option>'+
            '<option value="4">四星</option><option value="5">准五星</option>'+
            '<option value="6">五星</option><option value="7">五星以上</option></select></td>'+
            '<td><div class="col-sm-12"><input class="col-sm-12 T-chooseHotel" name="hotelName" value="" type="text" /><input type="hidden" name="hotelId" value=""/>'+
            '<span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span></div></td>'+
            '<td><input class="col-sm-12" name="hotelManagerName" value="" readonly="readonly" type="text" /></td>'+
            '<td><input class="col-sm-12" name="hotelMobileNumber" value="" readonly="readonly" type="text" /></td>'+
            '<td><input class="col-sm-12" name="hotelRoomType" value=""  type="text" /><input type="hidden" name="hotelRoomTypeId" value=""/></td>'+
            '<td><input class="col-sm-12 T-number price F-float F-money" name="hotelPrice" value="" maxlength="9" type="text" /></td>'+
            '<td><input class="col-sm-12 count F-float F-count" name="hotelMemberCount"  maxlength="6" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number discount F-float F-money" name="hotelReduceMoney"  maxlength="9" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="hotelNeedPayMoney" value="" type="text" /></td>'+
            '<td><input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" value="" type="text" maxlength="9" /></td>'+
            '<td><input class="col-sm-12" name="remark" type="text" value="" maxlength="1000" /></td>'+
            '<td><a class="cursor T-arrange-delete" data-catename="hotel" title="删除">删除</a></td>'+
            '</tr>';
        var $tbody = $obj.find('tbody');
        $tbody.append(html);
        transitPlan.bindHotelChoose($tbody);
        transitPlan.addResource($tbody);
        transitPlan.init_eventMain($tbody);
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
