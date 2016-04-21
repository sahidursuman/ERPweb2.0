/**
 * 发团安排模块——主页框架
 * Auhtor：roger wei
 * 2016-03-31
 */

define(function(require, exports) {
    var TransferFun = require('./transfer'),
        GroupFun = require('./group'),
        BookingFun = require('./booking'),

        // 模板
        MainFrameTemplate = require('./mainFrame');

    var FrameFun = {},
        tabKey = 'arrange_center';

    /**
     * 初始化首页框架
     * @return {[type]} [description]
     */
    FrameFun.initMain = function() {
        if (Tools.addTab(tabKey, '单项操作', MainFrameTemplate())) {
            FrameFun.initMainEvent();
        }
    };

    /**
     * 绑定事件
     * @return {[type]} [description]
     */
    FrameFun.initMainEvent = function() {
        var $container = $('#tab-' + tabKey + '-content').children();


        // 公共事件
        $container.on('click', '.T-more', function(event) { // 高级搜
                event.preventDefault();
                $(this).closest('.form-inline').next().toggleClass('hidden');
            })
            // 触发搜索
            .children('.nav').on('click', 'a', function(event) {
                event.preventDefault();
                $($(this).attr('href')).find('.nav').find('a').eq(0).trigger('click');
            }).end()
            .find('.T-tab-area').find('.nav').on('click', 'a', function(event) {
                event.preventDefault();

                var $that = $(this);

                if (!$that.hasClass('ajax')) {
                    $($that.attr('href')).find('.T-search').trigger('click');
                }

                $that.addClass('ajax');
            });

        Tools.setDatePicker($container.find('.datepicker'));

        // 初始化中转页面的事件
        FrameFun.initTransferEvent($container.find('#transfer-arrange'));
        // 初始化团队安排的事件
        FrameFun.initGroupEvent($container.find('#group-arrange'));
        // 初始化代订的事件
        FrameFun.initBookingEvent($container.find('#booking-arrange'));

        // 初始化列表
        $container.children('.nav').find('a').eq(0).trigger('click');
    };

    /**
     * 中转安排的事件绑定
     * @param  {object} $tab 所在的顶层容器
     * @return {[type]}      [description]
     */
    FrameFun.initTransferEvent = function($tab) {
        $tab.on('click', '.T-search', function(event) {
                event.preventDefault();
                // TransferFun.busArrangeIdArray = [];
                // TransferFun.hotelArrangeIdArray = [];
                TransferFun.getList($(this).closest('form'));
            })
            // table内操作
            .on('click', '.T-action', function(event) {
                event.preventDefault();
                var $that = $(this);

                if ($that.hasClass('T-inform')) {
                    // 通知
                    FrameFun.inform($that);
                } else if ($that.hasClass('T-arrange-item')) {
                    // 安排
                    TransferFun.arrange($that);
                } else if ($that.hasClass('T-view')) {
                    // 查看
                    TransferFun.view($that);
                } else if ($that.hasClass('T-bus-cancel')){
                    //取消
                    TransferFun.cancelBus($that);

                } else if ($that.hasClass('T-hotel-cancel')){
                    //取消
                    TransferFun.cancelHotel($that);

                }
            })
            .on('change', 'input[type="checkbox"]', function(event) {
                event.preventDefault();
                TransferFun.setArrangeId($(this));
            })
            // 统一安排
            .on('click', '.T-merge-arrange', function(event) {
                event.preventDefault();
                TransferFun.mergeArrange($(this));
            }).on('change','select[name=shuttleType]',function(){
                TransferFun.busArrangeIdArray = [];
                TransferFun.hotelArrangeIdArray = [];
            })
        .on('change', 'select[name="status"]', function(event) {
            event.preventDefault();
            var $that = $(this);
            $that.closest('form').find('.T-arrange-feild')
            .toggleClass('hidden', $that.val() === '0').find('input').val('');
        });
    };

    /**
     * 初始化团队安排事件
     * @param  {object} $tab 父容器
     * @return {[type]}      [description]
     */
    FrameFun.initGroupEvent = function($tab) {
        $tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            GroupFun.getList($(this).closest('form'));
        })
        // table内操作
        .end().on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('T-inform')) {
                // 通知
                FrameFun.inform($that);
            } else if ($that.hasClass('T-arrange-item')) {
                // 安排
                GroupFun.arrange($that);
            } else if ($that.hasClass('T-view')) {
                // 查看
                GroupFun.view($that);
            }
        });
    };

    /**
     * 初始化代订安排的事件
     * @param  {object} $tab 父容器
     * @return {[type]}      [description]
     */
    FrameFun.initBookingEvent = function($tab) {
        $tab.find('.T-search').on('click', function(event) {
                event.preventDefault();
                BookingFun.getList($(this).closest('form'));
            })
            // table内操作
            .end().on('click', '.T-action', function(event) {
                event.preventDefault();
                var $that = $(this);

                if ($that.hasClass('T-send')) {
                    // 通知
                    FrameFun.inform($that);
                } else if ($that.hasClass('T-plan')) {
                    // 安排
                    BookingFun.arrange($that);
                } else if ($that.hasClass('T-view')) {
                    // 查看
                    BookingFun.view($that);
                }
            });
    }

    FrameFun.inform = function($inform) {
        if (!$inform.length) {
            console.info('通知主体为空，无法查询主体信息');
            return;
        }
        var args = {
            id: $inform.closest('tr').data('id'),
        }

        args[$inform.data('target')] = 1;

        $.ajax({
            url: KingServices.build_url(service_name, "noticeTransferArrange"),
            type: 'POST',
            data: {
                noticeItems: JSON.stringify(args)
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        layer.close(noticeLayer);
                    })
                }
            }
        })
    };
    //取消车
    TransferFun.cancelBus = function ($that) {
        // data-catename
        var id = $that.closest('tr').data('id');
        id = JSON.stringify(id);   
        showConfirmMsg($( "#confirm-dialog-message" ), "你确定要取消该中转安排信息？",function(){         
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange","deleteOutBusArrange"),     
            type: 'POST',
            data: 'id='+id,
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
                        TransferFun._refreshList('bus');
                    })
                }
            }
        })
        },function(){},"取消","确定");
    }
    //取消房
    TransferFun.cancelHotel = function ($that) {
        // data-catename
        var id = $that.closest('tr').data('id');
        id = JSON.stringify(id);   
        showConfirmMsg($( "#confirm-dialog-message" ), "你确定要取消该中转安排信息？",function(){         
        $.ajax({
            url: KingServices.build_url("v2/singleItemArrange/touristGroupTransferArrange","deleteOutHotelArrange"),     
            type: 'POST',
            data: 'id='+id,
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog($( "#confirm-dialog-message" ),data.message, function() {
                       TransferFun._refreshList('hotel');
                    })
                }
            }
        })
        },function(){},"取消","确定");
    }
    exports.init = FrameFun.initMain;
});
