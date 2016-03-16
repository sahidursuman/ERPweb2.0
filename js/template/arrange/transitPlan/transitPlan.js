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
        viewTemplate = require("./view/view"),
        listHeaderTemplate = require("./view/listHeader"),
        listBusTemplate = require("./view/listBus"),
        listHotelTemplate = require("./view/listHotel"),
        listItsTemplate = require("./view/listIts"),
        hotelplan = "tab-" + menuKey + "-hotelplan",
        listHeader = "tab-" + menuKey + "-listHeader",
        busplan = "tab-" + menuKey + "-busplan",
        itsplan = "tab-" + menuKey + "-itsplan",
        mealplan = "tab-" + menuKey + "-mealplan",
        ticketplan = "tab-" + menuKey + "-ticketplan",
        tabId = "tab-" + menuKey + '-content',
        viewbus =  "tab-" + menuKey + "-bus",
        viewId = "tab-" + menuKey + '-view';
    /**
     * 自定义中转对象
     * @type {Object}
     */
    var transitPlan = {

        }
        //初始化中转模块
    transitPlan.initModule = function(event) {
        var args = {
            pageNo:0,
            customerType : 0,
            arrangeItem : "bus"
        }
        transitPlan.listTransitBusPlan(args);
    };
    // 车队
    transitPlan.listTransitBusPlan = function(args) {
         $.ajax({
            url: KingServices.build_url("v2/touristGroupTransferArrange", "getTouristGroupTransferArrangeList"),
            type: "POST",
            data:args,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "中转安排", html);
                    transitPlan.$tab = $("#" + tabId);
                    // 搜索域的html
                    var listHeader = listHeaderTemplate(data)
                    transitPlan.$tab.find('.T-search').html(listHeader);
                    // 车队列表
                    var listToutel = listBusTemplate(data);
                    transitPlan.$tab.find('.T-busLists').html(listToutel);
                    transitPlan.init_eventMain(transitPlan.$tab);
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
                    transitPlan.$tab.find('.T-listTabs').on('click', '.T-tab', function(event) {
                        event.preventDefault();
                        var $that = $(this);

                        if($that.hasClass('T-busTab')) {
                            // 车安排
                            transitPlan.listTransitBusPlan();
                        }else if($that.hasClass('T-hotelTab')){
                            //房查看
                            transitPlan.listTransitHoutelPlan(transitPlan.$tab);
                        }else if($that.hasClass('T-itsTab')){
                            // 它 
                            transitPlan.listTransitItsPlan(transitPlan.$tab);
                        }
                    });
                   
                }
            }
        })
    };

    // 房
    transitPlan.listTransitHoutelPlan = function($tab){

        var hotelsData = {
            pageNo:0,
            customerType : 0,
            arrangeItem : "hotel"
        }
        $.ajax({
            url: KingServices.build_url("v2/touristGroupTransferArrange", "getTouristGroupTransferArrangeList"),
            type: "POST",
            data:hotelsData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    // 搜索域的html
                    var listHeader = listHeaderTemplate(data)
                    $tab.find('.T-search').html(listHeader);
                    // 车队列表
                    var listBus = listHotelTemplate(data);
                    $tab.find('.T-HotelList').html(listBus);
                    transitPlan.init_eventMain($tab);
                    //翻页
                    laypage({
                        cont: $tab.find('.T-pagenation'),
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
    // 它
    transitPlan.listTransitItsPlan = function($tab){
         console.log($tab);
        var itsData = {
            pageNo:0,
            customerType : 0,
            arrangeItem : "other"
        }
        $.ajax({
            url: KingServices.build_url("v2/touristGroupTransferArrange", "getTouristGroupTransferArrangeList"),
            type: "POST",
            data:itsData,
            success: function(data) {
                
                var result = showDialog(data);
                if (result) {
                    // 搜索域的html
                    var listHeader = listHeaderTemplate(data)
                    $tab.find('.T-search').html(listHeader);
                    // 它列表
                    var listIts = listItsTemplate(data);
                    $tab.find('.T-itsList').html(listIts);
                    transitPlan.init_eventMain($tab);
                    //翻页
                    laypage({
                        cont: $tab.find('.T-pagenation'),
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

    }
    
    

    transitPlan.init_eventMain = function($tab) {
        // 监听事件
        
        // 收起展开
        var $search = $tab.find('.T-search');
        $search.find('.T-shrink').on('click', function(event) {
                $tab.find('.T-hide').toggle();
            })
            // 查看车
        $tab.find('.T-view').on('click', function(event) {
                transitPlan.viewbus();
            })
            // 查看房
        $tab.find('.T-view-hotel').on('click', function(event) {
                transitPlan.viewhotel();
            })
            // 表格内操作
        $tab.find('.T-bus-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');

            if ($that.hasClass('T-plan-bus')) {
                // 车安排
                transitPlan.busplan();
            }else if($that.hasClass('T-view-plan')){
                //车查看
                transitPlan.buslook();
            }
        });
        // 表格内操作
        $tab.find('.T-hotel-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id');

            if ($that.hasClass('T-plan-hotel')) {
                // 房安排
                transitPlan.hotelplan();
            }
        });
        // 表格内操作
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
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);
        
    };
    transitPlan.busplan = function(event) {
        var html = busplanTemplate();
        addTab(busplan, '车安排', html);
        transitPlan.$tab = $("#tab-" + busplan + "-content");
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
    };
    transitPlan.hotelplan = function(event) {
        var html = hotelplanTemplate();
        addTab(hotelplan, '房安排', html);
        transitPlan.$tab = $("#tab-" + hotelplan + "-content");
        //绑定删除事件
        transitPlan.$tab.on('click','.T-contact-delete',function(event){
            transitPlan.delBusArrange($(this));
        });
        // 新增房安排
        transitPlan.$tab.find('.T-add-hotel').on('click', function(event) {
            transitPlan.addhotel(transitPlan.$tab);
        })
        //时间控件
        Tools.setDatePicker(transitPlan.$tab.find('.datepicker'), true);


    };
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
        var html =
            '<tr>' +
            '<td><input class="col-sm-10" type="text" name="contactMobileNumber" maxlength="20"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-10" type="text" name="dutyName" maxlength="45"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><input class="col-sm-10" type="text" name="dutyName" maxlength="45"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12 datepicker" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
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
    //删除安排
    transitPlan.delBusArrange = function($obj){
       var $tr = $obj.closest('tr');
        $tr.remove(); 
    };
    //添加车安排
    transitPlan.addhotel = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>' +
            '<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>' +
            '<td><input class="col-sm-10" type="text" name="dutyName" maxlength="45"/><span class="T-addPartnerManager" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only" style="margin-top:5px"></i> </span></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45" readonly="readonly"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
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
    //添加它安排
    transitPlan.addits = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>' +
            '<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>' +
            '<td><input class="col-sm-10" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
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
    // 查看中转安排
    transitPlan.buslook = function(){
        var html = viewTemplate();
        addTab(viewId,'查看中转安排',html);
        transitPlan.$tab = $("#tab-" + viewId + "-content");

    };
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
    transitPlan.viewhotel = function(event) {
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
    exports.init = transitPlan.initModule;
})
