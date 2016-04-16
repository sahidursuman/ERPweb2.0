/**
 * 代订安排
 * author：魏桂云
 * date：2016-04-11
 */

define(function(require, exports) {
    var ListTemplate = {
            busList: require('./bookingView/busList'),
            hotelList: require('./bookingView/hotelList'),
            scenceList: require('./bookingView/scenceList'),
            ticketList: require('./bookingView/ticketList')
        },
        editTemplate = {
            busEdit: require('./bookingView/busEdit'),
            hotelEdit: require('./bookingView/hotelEdit'),
            scenceEdit: require('./bookingView/scenceEdit'),
            ticketEdit: require('./bookingView/ticketEdit'),
        },
        viewTemplate = {
            busView: require('./bookingView/busView'),
            hotelView: require('./bookingView/hotelView'),
            scenceView: require('./bookingView/scenceView'),
            ticketView: require('./bookingView/ticketView'),
        },

        BookingArrange = {},
        service = 'v2/singleItemArrange/tripPlanArrange';

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
        args.item = $form.parent().data('item');
        args.pageNo = page || 0;

        $.ajax({
                url: KingServices.build_url(service, 'getTripPlanArrangeList'),
                type: 'post',
                dataType: 'json',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var $container = $form.next().html(ListTemplate(data));

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
            template = editTemplate[target + 'Edit'];

        
    };

    /**
     * 查看入口
     * @param  {object} $view 查看按钮
     * @return {[type]}       [description]
     */
    BookingArrange.view = function($view) {
        var target = $arrange.closest('.tab-pane').data('target'),
            title = $arrange.closest('.tabable').find('.nav').find('.active').text(),
            template = viewTemplate[target + 'View'];
    };

    return BookingArrange;
});
