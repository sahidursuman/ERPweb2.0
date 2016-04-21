/**
 * 财务管理——现金日记
 * rewrite by：roger
 * 2016-04-20
 */

define(function(require, exports) {
    var listTemplate = require("./view/list"),
        listTableTemplate = require("./view/listTable"),
        addTemplate = require("./view/add"),
        detailsTemplate = require("./view/viewDetails"),
        rule = require("./rule"),
        menuKey = "financial_payment_details",


        PaymentDetailUtil = {};

    /**
     * 初始化现金日记页面
     * @param  {object} args 初始参数
     * @return {[type]}      [description]
     */
    PaymentDetailUtil.initMain = function(args) {
        if (!args) {
            args = {
                payType: -1
            }
        }
        Tools.addTab(menuKey, '现金日记', listTemplate(args));

        PaymentDetailUtil.$tab = $('#tab-' + menuKey + '-content');

        PaymentDetailUtil.init_event(PaymentDetailUtil.$tab);

        if (args.bankId > 0) {
        	PaymentDetailUtil.$tab.find('.T-search-payment').val('');
            PaymentDetailUtil.$tab.find('.T-beginningBalance').val(args.beginningBalance);
        }
        PaymentDetailUtil.getList();
    };

    PaymentDetailUtil.init_event = function($tab) {
        var $searchArea = $tab.find('.T-search-area'),
            $datepicker = $searchArea.find('.T-search-time');
        Tools.setDatePicker($datepicker, true);
        FinancialService.initPayEvent($tab);
        PaymentDetailUtil._getSubjectList($tab);
        PaymentDetailUtil._bindMenuList($tab);

        $searchArea.on('click', ".T-btn-search", function(event) {
            event.preventDefault();
            PaymentDetailUtil.getList();
        });
        $searchArea.on('click', ".T-btn-add", function(event) {
            PaymentDetailUtil.add();
        });

        $tab.on('change', '.T-beginningBalance, .T-search-payment', function() {
            PaymentDetailUtil.getList();
        });

        $tab.find('.T-list').on('click', '.T-viewDetails', function(event) {
                event.preventDefault();
                PaymentDetailUtil.viewDetails($(this).closest('tr').data('id'));
            })
            .on('click', '.T-delete', function(event) {
                event.preventDefault();
                var id = $(this).closest('tr').data("id");
                showConfirmMsg($("#confirm-dialog-message"), "是否确认删除该条数据？", function() {
                    PaymentDetailUtil.deletePayment(id);
                }, function() {}, "放弃", "删除");
            });
    };

    /**
     * 获取列表
     * @param  {int} page 页码
     * @return {[type]}      [description]
     */
    PaymentDetailUtil.getList = function(page) {
        var $form = PaymentDetailUtil.$tab.find('form'),
            args = $form.serializeJson(), $bankName;

        args.pageNo = page || 0;
        args.payType = args.sumPayType;
        if ($form.find('.T-cash-number').is(':visible')) {
        	args.bankId = $form.find('.T-cash-number').nextAll('input').val();
        } else if ($form.find('.T-card-number').is(':visible')) {
        	args.bankId = $form.find('.T-card-number').nextAll('input').val();
        }

        delete args['sumPayType'],
        delete args['tally-date'],
        delete args['cash-id'];


        $.ajax({
                url: KingServices.build_url('financialIncomeOrPay', 'findPager'),
                type: "POST",
                data: { searchParam: JSON.stringify(args) }
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.result = JSON.parse(data.result);
                    var html = listTableTemplate(data);
                    PaymentDetailUtil.$tab.find('.T-list').html(html);
                    // 设置记录条数及页面
                    PaymentDetailUtil.$tab.find('.T-sumItem').text('共计' + data.searchParam.totalCount + '条记录');
                    // 绑定翻页组件
                    laypage({
                        cont: PaymentDetailUtil.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage, //总页数
                        curr: (data.searchParam.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                PaymentDetailUtil.getList(obj.curr - 1);
                            }
                        }
                    });
                }
            });
        if (args.pageNo == 0) {
            delete args.pageNo;
            delete args['beginningBalance'];
            var $sumaryArea = $form.find('.T-summary-area').addClass('hidden');
            $.ajax({
                url: KingServices.build_url('financialIncomeOrPay', 'findTotal'),
                type: "POST",
                data: { searchParam: JSON.stringify(args) },
                showLoading: false
            }).done(function(data) {
                $form.find('.T-incomeMoney').text(data.total.incomeMoney);
                $form.find('.T-payMoney').text(data.total.payMoney);

                var $sum = $form.find('.T-sumMoney');

                if (args.bankId > 0) {
                    $sum.text(Tools.thousandPoint(data.total.incomeMoney*1 + ($form.find('.T-beginningBalance').val() || 0)*1 - data.total.payMoney*1, 2));
                }
                $sum.parent().toggleClass('hidden', !args.bankId);
                $sumaryArea.removeClass('hidden');
            });
        }
    };

    /**
     * 查看明细
     * @param  {int} id 记账编号
     * @return {[type]}    [description]
     */
    PaymentDetailUtil.viewDetails = function(id) {
        if (id > 0) {
            $.ajax({
                url: KingServices.build_url("financialIncomeOrPay", "getIncomeOrPayDetailById"),
                type: "POST",
                data: { id: id },
                success: function(data) {
                    if (showDialog(data)) {
                        var html = detailsTemplate(data);
                        var addGuideLayer = layer.open({
                            type: 1,
                            title: "收/付款金额明细",
                            skin: 'layui-layer-rim',
                            area: '800px',
                            zIndex: 1028,
                            content: html,
                            scrollbar: false
                        });
                    }
                }
            });
        }
    };

    /**
     * 删除账务
     * @param  {int} id 记账编号
     * @return {[type]}    [description]
     */
    PaymentDetailUtil.deletePayment = function(id) {
        if (id > 0) {
            $.ajax({
                url: KingServices.build_url("financialIncomeOrPay", "deleteIncomeorPay"),
                type: "POST",
                data: { id: id },
                success: function(data) {
                    if (showDialog(data)) {
                        showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                            Payment.getList();
                        });
                    }
                }
            });
        }
    }

    /**
     * 获取会计科目菜单选项
     * @param  {object} $tab 父元素
     * @return {[type]}      [description]
     */
    PaymentDetailUtil._getSubjectList = function($tab) {
        $.ajax({
            url: KingServices.build_url('financialIncomeOrPay', 'getSubjectList'),
            type: "POST",
            showLoading: false
        }).done(function(data) {
            if (showDialog(data)) {
                var source = '{{each subjectList as item}}' + '<option value="{{item.id}}">{{item.subjectName}}</option>' + '{{/each}}',
                    render = template.compile(source);

                $tab.find('.T-search-subject').append(render(data));
            }
        });
    };

    /**
     * 绑定下拉选项：主营业务收支类别
     * @param  {object} $tab 顶级元素
     * @param  {object} args 外部参数
     * @return {[type]}      [description]
     */
    PaymentDetailUtil._bindMenuList = function($tab, args) {
        $.ajax({
                url: KingServices.build_url('financialIncomeOrPay', 'findSelectValue'),
                type: 'post',
                dataType: 'json',
                showLoading: false
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.receivableTypes = JSON.parse(data.receivableTypes);
                    var src = '{{each receivableTypes as rs}}' + '<option value="{{rs.id}}">{{rs.name}}</option>' + '{{/each}}',
                        render = template.compile(src);

                    $tab.find('.T-search-category').append(render(data));
                }
            });
    };

    // 初始页面接口
    exports.init = PaymentDetailUtil.initMain;
    // exports.
});
