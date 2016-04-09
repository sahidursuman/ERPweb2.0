define(function(require, exports) {
    var MainTemplate = require('./view/listMain'),
        ListTemplate = require('./view/list'),
        menuKey = 'guide_arrange_table';


    // 定义业务对象
    var GuideArrange = {},
        colorList = {},
        list, $table, tbl_start, tbl_end;

    // 初始化首页页面
    GuideArrange.initMain = function() {
        Tools.addTab(menuKey, '导游排期表', MainTemplate());

        GuideArrange.init_event();
    };

    // 绑定首页事件
    GuideArrange.init_event = function() {
        var $tab = $('#tab-' + menuKey + '-content'),
            $searchArea = $tab.find('.T-search-area'),
            $form = $searchArea.find('form');

        GuideArrange.initSelect($tab);

        Tools.setDatePicker($searchArea.find('.datepicker'), true);

        // search
        $searchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            GuideArrange.initGuideList($form);
        }).trigger('click');

        // 查看计划
        $tab.find('.T-table-area').on('click', '.T-tranplan', function(event) {
            event.preventDefault();
            var $that = $(this),
                // 团散标记：0 散客团，1 团体团，默认值 0
                type = $that.data('type'),
                id = $that.data('id'),
                triplanModuleScript = modalScripts.arrange_plan; //团队

            if (type == '0') {
                triplanModuleScript = modalScripts.arrange_singlePlan;
            }

            seajs.use("" + ASSETS_ROOT + triplanModuleScript, function(module) {
                module.viewTripPlan(id * 1);
            });
        });

        GuideArrange.$tab = $tab;
    };

    /**
     * 初始化安排表
     * @return {[type]}      [description]
     */
    GuideArrange.initGuideList = function($form, page) {
        var args = $form.serializeJson();

        args.pageNo = page || 0;
        $.ajax({
                url: KingServices.build_url('guideDate', 'findPager'),
                type: 'get',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    // 加载表格框架

                    var html = GuideArrange.loadList(data.guideList, data.searchParam.totalCount);
                    $form.parent().next().html(html || '');

                    laypage({
                        cont: GuideArrange.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.searchParam.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                GuideArrange.initGuideList($form, obj.curr - 1);
                            };
                        }
                    });
                }
            });
    };

    /**
     * 组织表格数据
     * @param  {object} guides 导游安排数据
     * @param  {int} total  记录总条数
     * @return {string}        表格的HTML
     */
    GuideArrange.loadList = function(guides, total) {
        // 初始化数据
        $table = GuideArrange.$tab.find('table'),
            tbl_start = tbl_end = 0;
        var data = {},
            thStr = [],
            tdStr = [],
            date,
            len = guides.length;

        for (var i = 0, len = guides.length; i < len; i++) {
            guides[i].guideArrangeList.sort(function(x, y) {
                GuideArrange._fetchRange(x);
                GuideArrange._fetchRange(y);
                return (x.startTime > y.startTime) ? 1 : -1;
            });

            if (guides[i].guideArrangeList.length === 1) {
                GuideArrange._fetchRange(guides[i].guideArrangeList[0]);
            }
        }

        // 组织th
        for (i = 0, date;; i++) {
            date = Tools.addDay(tbl_start, i);

            if (date <= tbl_end) {
                thStr.push('<th title="' + date + '">' + date.split('-')[2] + '</th>');
            } else {
                break;
            }
        }

        // 组织td
        for (i = 0; i < len; i++) {
            var same = 0,
                start = tbl_start,
                end = tbl_end;

            tdStr.push('<tr data-guide-id="' + guides[i].guideId + '"><td>' + guides[i].guideName + '</td>');
            for (var j = 0, jLen = guides[i].guideArrangeList.length, tmp, days; j < jLen; j++) {

                tmp = guides[i].guideArrangeList[j];
                tdStr.push((new Array(Tools.getDateDiff(tmp.startTime, start, true) + 1)).join('<td></td>'));

                tdStr.push('<td colspan="' + (Tools.getDateDiff(tmp.startTime, tmp.endTime, true) + 1) + '" title="' + tmp.startTime + '-' + tmp.endTime + '" class="T-tranplan cursor" data-id="' + tmp.tripPlanId + '" data-type="' + tmp.tripPlanType + '" style="background-color:' + GuideArrange.getBackGroundColor(tmp.tripPlanId) + ';color:#fff;">' + tmp.lineProductName + '</td>');
                start = Tools.addDay(tmp.endTime, 1);
            }

            j = 2;
            if (jLen) {  // 存在安排时
                start = tmp.endTime;
                j = 1;
            } // 无安排，使用start、end填充
            if(!!tmp){
                tdStr.push((new Array(Tools.getDateDiff(start, end, true) + j)).join('<td></td>'));
            }

            tdStr.push('</tr>');
        }

        return ListTemplate({
            total: total,
            thStr: thStr.join(''),
            tdStr: tdStr.join(''),
        });
    };

    /**
     * 获取背景颜色
     * @param  {int} id 发团ID
     * @return {string}    颜色值
     */
    GuideArrange.getBackGroundColor = function(id) {
        if (!colorList[id]) {
            colorList[id] = GuideArrange.getDiffColor(JSON.stringify(colorList));
        }

        return colorList[id];
    };

    /**
     * 获取不同的颜色
     * @param  {array} colors [description]
     * @return {[type]}        [description]
     */
    GuideArrange.getDiffColor = function(colors) {
        var color;
        do {
            color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
            if (colors.indexOf(color) < 0) {
                break;
            }
        } while (true);

        return color;
    };

    /**
     * 获取最大时间与最小时间
     * @param  {object} item 安排对象
     * @return {[type]}      [description]
     */
    GuideArrange._fetchRange = function(item) {
        if (!tbl_start || tbl_start > item.startTime) {
            tbl_start = item.startTime;
        }

        if (!tbl_end || tbl_end < item.endTime) {
            tbl_end = item.endTime;
        }
    };

    /**
     * 绑定下拉菜单
     * @param  {object} $tab 顶层元素
     * @return {[type]}      [description]
     */
    GuideArrange.initSelect = function($tab) {
        $tab.find('.T-guideName').autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).closest('div').find('input[name="guideId"]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur();
                $(this).closest('div').find('input[name="guideId"]').val(ui.item.id);
            }
        }).off("click").on("click", function() {
            var obj = this;
            $.ajax({
                url: KingServices.build_url("guide", "findAll"),
                type: 'POST',
                data: {
                    menuKey: "resource_guide"
                },
                showLoading: false,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var guideList = JSON.parse(data.guideList);
                        if (guideList != null && guideList.length > 0) {
                            for (var i = 0; i < guideList.length; i++) {
                                guideList[i].value = guideList[i].realname;
                            }
                        }
                        $(obj).autocomplete('option', 'source', guideList);
                        $(obj).autocomplete('search', '');
                    }
                }
            });
        });
    }
    exports.init = GuideArrange.initMain;
});
