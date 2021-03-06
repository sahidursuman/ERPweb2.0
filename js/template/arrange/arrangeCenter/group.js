/**
 * 团队安排
 * author：魏桂云
 * Date: 2016-04-08
 */

define(function(require, exports) {
    var ListTemplate = require('./groupView/list');

    var GroupArrange = {},
        service = 'v2/singleItemArrange/tripPlanArrange';

    /**
     * 获取安排列表
     * @param  {object} $form 参数区域
     * @param  {int} page  页码
     * @return {[type]}       [description]
     */
    GroupArrange.getList = function($form, page) {
        var args = $form.serializeJson();
        var assign = $form.find('.T-assign-check').is(':checked');
        if(assign){
           args.assign = 1;
        }else{
           args.assign = 0; 
        }

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
                                GroupArrange.getList($form, obj.curr - 1);
                            }
                        }
                    });
                }
            });
    }

    /**
     * 安排
     * @param  {object} $btn 安排按钮
     * @return {[type]}          [description]
     */
    GroupArrange.arrange = function($btn) {
        var type = $btn.closest('.tab-pane').data('target'),
            // title = $btn.closest('.tabable').find('.nav').find('.active').text(),
            // template = ArrangeTemplate[type],
            $tr = $btn.closest('tr'),

            id = $tr.data('id'), bs = $tr.data('billstatus');

        if (!type || !template) {
            console.info('不支持'+ type + '的安排');
        }

        // 调用发团安排的编辑界面，bs控制只显示某个安排
        seajs.use(ASSETS_ROOT + modalScripts.arrange_all,function(module){
            module.updatePlanInfo(id, (bs == '-1'?'-2':bs), type);
        });       
    };

    /**
     * 查看安排信息
     * @param  {object} $btn 查看按钮
     * @return {[type]}      [description]
     */
    GroupArrange.view = function($btn) {
        var type = $btn.closest('.tab-pane').data('target'),
            id = $btn.closest('tr').data('id');

        if (!type || !template) {
            console.info('不支持'+ type + '的安排');
        }

        // 调用发团安排中的查看界面
        seajs.use(ASSETS_ROOT + modalScripts.arrange_all,function(module){
            module.viewTripPlan(id, type);
        });
    }
    /**
     * 绑定安排页面的事件
     * @param  {object} $tab 安排页面的顶层容器
     * @param  {string} type 安排的类别
     * @return {[type]}      [description]
     */
    GroupArrange.initArrangeEvent = function($tab, type) {

    }

    return GroupArrange;
});
