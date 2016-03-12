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
        hotelplan = "tab-" + menuKey + "-hotelplan",
        busplan = "tab-" + menuKey + "-busplan",
        itsplan = "tab-" + menuKey + "-itsplan",
        tabId = "tab-" + menuKey + '-content',
        viewbus = menuKey + "-bus";
    /**
     * 自定义中转对象
     * @type {Object}
     */
    var transitPlan = {

        }
        //初始化中转模块
    transitPlan.initModule = function() {
        transitPlan.listtransitPlan();
    };
    transitPlan.listtransitPlan = function() {
        var html = listTemplate();
        addTab(menuKey, "中转安排", html);
        transitPlan.$tab = $("#" + tabId);

        transitPlan.init_eventMain(transitPlan.$tab);
    };
    transitPlan.init_eventMain = function($tab) {
        // 收起展开
        var $search = $tab.find('.T-search');
        $search.find('.T-shrink').on('click', function() {
                var font = $(this).text();
                $tab.find('.T-hide').toggle(100);
                if (font == '收起') {
                    $(this).text("展开");
                } else {
                    $(this).text("收起");
                }
            })
            // 查看车
        $tab.find('.T-view').on('click', function() {
                transitPlan.viewbus();
            })
            // 查看房
        $tab.find('.T-view-hotel').on("click", function() {
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
            }
        });

    };
    transitPlan.busplan = function() {
        var html = busplanTemplate();
        addTab(busplan, '车安排', html);
        transitPlan.$tab = $("#tab-" + busplan + "-content")
       transitPlan.$tab.on("click",function(){
        transitPlan.addContact(transitPlan.$tab)
       })

        
    };
    transitPlan.hotelplan = function() {
        var html = hotelplanTemplate();
        addTab(hotelplan, '房安排', html)
    };
    transitPlan.itsplan = function() {
        var html = itsplanTemplate();
        addTab(itsplan, '它安排', html)
    };
    //添加联系人
    transitPlan.addContact = function($obj) {
        var html =
            '<tr>' +
            '<td><input class="col-sm-12" type="text" name="contactRealname" maxlength="32"/></td>' +
            '<td><input class="col-sm-12" type="text" name="contactMobileNumber" maxlength="20"/></td>' +
            '<td><input class="col-sm-12" type="text" name="departmentName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><input class="col-sm-12" type="text" name="dutyName" maxlength="45"/></td>' +
            '<td><a class="T-contact-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-insuranceForm');
        $tbody.append(html);
        $obj.find('.T-contact-delete').on('click', function() {
            var $tr = $(this).closest('tr');
            $tr.remove();
        });
    };
    transitPlan.viewbus = function() {
        var html = viewbusTemplate();
        layer.open({
            type: 1,
            title: "订房信息",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function() {

            }
        });
    };
    transitPlan.viewhotel = function() {
        var html = viewhotelTemplate();
        layer.open({
            type: 1,
            title: "订车信息",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function() {

            }
        })
    };
    exports.init = transitPlan.initModule;
})
