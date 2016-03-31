/**
 * 中转安排模块
 * author：roger wei
 * 2016-03-31
 */

define(function(require, exports) {
    var BusListTemplate = require('./transfer/busList'),
        BusArrangedListTemplate = require('./transfer/busArrangedList'),

        HotelListTemplate = require('./transfer/hotelList'),
        HotelArrangedListTemplate = require('./transfer/hotelArrangedList'),

        OtherListTemplate = require('./transfer/otherList'),

        Transfer = {},
        service_name = 'v2/singleItemArrange/touristGroupTransferArrange';

    /**
     * 获取车队安排的列表
     * @param  {object} $searchFrom 参数form
     * @param  {int} page        页面
     * @return {[type]}             [description]
     */
    Transfer.getBusList = function($searchFrom, page) {
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
                                Transfer.getBusList($searchFrom, obj.curr - 1);
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
    Transfer.getHotelList = function($searchFrom, page) {
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
                                Transfer.getBusList($searchFrom, obj.curr - 1);
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
    Transfer.getOtherList = function($searchFrom, page) {
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
                    var $container = $searchFrom.next().html(OtherListTemplate(data));

                    laypage({
                        cont: $container.find('.T-pagenation'),
                        pages: data.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Transfer.getBusList($searchFrom, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    };

    return Transfer;
});
