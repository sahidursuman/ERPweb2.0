/**
 * 财务管理--导游账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var menuKey = "financial_guide",
        listTemplate = require("./view/list"),
        // 对账模板
        guideCheckingTemplate = require("./view/guideChecking"),
        checkingTableTemplate = require('./view/guideCheckingTable'),
        operationDetailTemplate = require('./view/operationDetail'),
        // 付款模板
        guidePayTemplate = require("./view/guidePaying"),
        payingTableTemplate = require('./view/guidePayingTable'),
        // 费用明细
        costDetailTemplate = require("./view/costDetail"),
        billImagesTemplate = require("./view/billImages"),
        paymentTemplate = require("./view/payment"),
        paymentDetailTemplate = require("./view/paymentDetail"),
        payResultTemplate = require("./view/payResult"),

        checkMenuKey = menuKey + "_checking",
        payMenuKey = menuKey + "-paying";

    var FinGuide = {
        mock: true,
        $tab: false,
        $checkingTab: false,
        checkingId: null,
        $clearTab: false,
        clearId: null
    };
    /**
     * 初始化模块
     */
    FinGuide.initModule = function() {
        FinGuide.$tab = null;
        FinGuide.getList(0);
    };
    /**
     * 获取购物账务列表，初始化列表页面
     * @param  {int} page 页码
     */
    FinGuide.getList = function(page) {
        var args = FinancialService.getInitDate();

        args.pageNo = page || 0;
        if (!!FinGuide.$tab) {
            args = {
                pageNo: (page || 0),
                guideId: FinGuide.$tab.find('.T-search-name').data('id'),
                startDate: FinGuide.$tab.find('.T-search-start-date').val(),
                endDate: FinGuide.$tab.find('.T-search-end-date').val(),
            }

            var guideName = FinGuide.$tab.find('.T-search-name').val();
            if (guideName === '全部') {
                guideName = '';
            }else{
                args.guideId = FinGuide.$tab.find('.T-search-name').data('id');
            }

            args.guideName = guideName;
        }

        $.ajax({
            url: KingServices.build_url('account/guideFinancial', 'listSumFinancialGuide'),
            type: 'POST',
            data: args,
        }).done(function(data) {
            if (showDialog(data)) {
                data.guideName = data.guideName || '全部';
                Tools.addTab(menuKey, "导游账务", listTemplate(data));
                // 绑定事件
                FinGuide.init_event();
                // 缓存页面
                FinGuide.listPageNo = args.pageNo;
                // 绑定翻页组件
                laypage({
                    cont: FinGuide.$tab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            FinGuide.getList(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };

    /**
     * 初始化列表页面的事件绑定
     */
    FinGuide.init_event = function() {
        FinGuide.$tab = $('#tab-' + menuKey + '-content');
        //搜索顶部的事件绑定
        var $searchArea = FinGuide.$tab.find('.T-search-area'),
            $datepicker = $searchArea.find('.datepicker');

        // 导游绑定
        FinGuide.getGuideNameList($searchArea.find('.T-search-name'), [$datepicker.eq(0).val(), $datepicker.eq(1).val()])
        // 绑定时间控件
        Tools.setDatePicker($datepicker, true);


        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinGuide.getList();
        });
        
        // 报表内的操作
        FinGuide.$tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this), $tr = $that.closest('tr'),
                args = {
                    guideId: $tr.data('id'),
                    guideName: $tr.children('td').first().text(),
                    startDate: $datepicker.eq(0).val(),
                    endDate: $datepicker.eq(1).val()
                };

            if ($that.hasClass('T-check')) {
                // 对账
                FinGuide.initOperationModule(args, 0);
            } else if ($that.hasClass('T-pay')) {
                // 结算
                FinGuide.initOperationModule(args, 1);
            }
        });
    };

    FinGuide.getGuideNameList = function($obj, valArray) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item) {
                    $(this).data('id', '');
                }
            },
            select: function(event, ui) {
                $(this).blur().data('id', ui.item.id);
            }
        }).on("click", function() {
            if (!$obj.data('ajax')) { // 避免重复请求
                var args = {};

                if (!!valArray && valArray.length === 2) {
                    args.startDate = valArray[0];
                    args.endDate = valArray[1];
                }
                $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'listFinancialGuideQuery'),
                    type: "POST",
                    showLoading: false,
                    data: args
                }).done(function(data) {
                    for (var i = 0; i < data.guideList.length; i++) {
                        data.guideList[i].value = data.guideList[i].realname;
                        data.guideList[i].id = data.guideList[i].guideId;
                    }
                    data.guideList.unshift({
                        id: '',
                        value: '全部'
                    });
                    $obj.autocomplete('option', 'source', data.guideList);
                    $obj.autocomplete('search', '');

                    $obj.data('ajax', true);
                });
            } else {
                $obj.autocomplete('search', '');
            }
        });
    };

    /**
     * 初始化对账页面
     * @param  {int}  id         导游ID
     * @param  {string}  id      导游的姓名
     * @param  {Boolean} isSearchIn true: 来自搜索，false: 来自初始化
     * @return {[type]}             [description]
     */
    FinGuide.initOperationModule = function(args, type, $tab) {
        if (!!$tab) {
            var $line = $tab.find('.T-lineProductName');
            args = {
                guideId: $tab.find('.T-saveClear').data('id'),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
                lineProductId: $line.data('id'),
                lineProductName: $line.val(),
            };

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }
            name = $tab.find('.T-guideName').text();
            args.isOuter = FinGuide.isOuter;
        }

        if(type == 1){
            args.actionType = "pay";
        }
        $.ajax({
                url: KingServices.build_url('account/guideFinancial', 'financialGuideSumStaticsByGuideId'),
                type: 'post',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    //data.guideName = args.name;
                    data.id = args.guideId;
                    data.type = type;
                    data.lineProductName = data.lineProductName || '全部';
                    // 临时缓存
                    FinGuide.checkingTabLineProduct = data.lineProductList;

                    var key = checkMenuKey,
                        title = '导游对账',
                        html;
                    if (type) {
                        if(data.success == 2){
                            args.orderId = data.orderId;
                            FinancialService.unfinishedBill(args);
                            return false;
                        }
                        data.isOuter = FinGuide.isOuter = args.isOuter;
                        key = payMenuKey, title = '导游付款';
                        html = guidePayTemplate(data);
                    } else {
                        html = guideCheckingTemplate(data);
                    }
                    if (Tools.addTab(key, title, html)) {
                        FinGuide.initOperationEvent($('#tab-' + key + '-content'), type);
                    }
                }
            });

    };

    /**
     * 对账页面事件初始化及列表初始化
     * @return {[type]} [description]
     */
    FinGuide.initOperationEvent = function($tab, type) {
        // 绑定搜索
        var $searchArea = $tab.find('.T-search-area');

        FinGuide.getLineProduct($searchArea.find('.T-lineProductName'), FinGuide.checkingTabLineProduct);

        var $datePicker = Tools.setDatePicker($searchArea.find('.datepicker'), true);

        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            var $btn = $tab.find('.T-saveClear');
            var args = {
                guideId: $btn.data('id'), 
                guideName:$btn.data('name'),
                startDate: $datePicker.eq(0).val(),
                endDate: $datePicker.eq(1).val()
            };
            if(type){
                args.isOuter = FinGuide.isOuter;
            }
            FinGuide.initOperationModule(args, type, $tab);
        });


        var validator = new FinRule(type ? (FinGuide.isOuter ? 3 : 1) : 3),
            autoValidator = new FinRule(2);
        var validatorCheck = validator.check($tab),
            autoValidatorCheck = autoValidator.check($tab.find('.T-auto-fill-area'));
        // 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
            .on('change', '.T-checkList', function() {
                $tab.data('isEdited', true);
            })
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                if (!validatorCheck.form())return;
                FinGuide.saveCheckingData($tab, [tab_id, title, html]);
            })
            .on(SWITCH_TAB_BIND_EVENT, function() {
                FinGuide.initOperationEvent($tab, type);
            })
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                if (!validatorCheck.form())return;
                FinGuide.saveCheckingData($tab);
            });

        // 计算
        if (type) {
            FinancialService.updateSumPayMoney($tab, validator);
            FinancialService.initPayEvent($tab.find('.T-summary'));
        } else {
            FinancialService.updateUnpayMoney($tab, validator);
            $searchArea.find('.T-btn-export').on('click', function(event) {
                event.preventDefault();
                var $btn = $tab.find('.T-saveClear'),
                    args = {
                        guideId: $btn.data('id'), 
                        startDate: $datePicker.eq(0).val(),
                        endDate: $datePicker.eq(1).val(),
                        tripPlanNumber: $searchArea.find('.T-tripPlanNumber').val(),
                        lineProductName: $searchArea.find('.T-lineProductName').val(),
                        lineProductId: $searchArea.find('.T-lineProductName').data('id'),
                    };
                args.lineProductName = args.lineProductName === "全部" ? "" : args.lineProductName;
                FinancialService.exportReport(args,"exportArrangeGuideFinancial");
            });
        }

        // 绑定表格内容元素的事件
        $tab.find('.T-checkList').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');

            if ($that.hasClass('T-view')) {
                // 查看应付明细
                FinGuide.viewOperationDetail(id, 0)
            } else if ($that.hasClass('T-viewPayedMoney')) {
                // 查看已付
                FinGuide.viewOperationDetail(id, 1);
            } else if ($that.hasClass('T-gid')) {
                // 查看费用明细
                FinGuide.viewFeeDetail($that.data('id'));
            }
        });

        //确认按钮事件
        $tab.find(".T-saveClear").click(function() {
            if (!validatorCheck.form())return;
            if (type) {
                FinGuide.savePayingData($tab);
            } else {
                FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
                    FinGuide.saveCheckingData($tab);
                });
            }
        });

        //关闭页面事件
        $tab.find(".T-btn-close").click(function() {
            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
        });

        // 付款时，自动下账
        if (type) {
            $tab.find('.T-btn-autofill').on('click', function(event) {
                event.preventDefault();
                if ($(this).hasClass('btn-primary')) {
                    if (autoValidatorCheck.form()) {
                        FinGuide.autoFillMoney($tab);
                    }
                } else {
                    FinGuide.payingJson = [];
                    FinGuide.setAutoFillEdit($tab, false);
                }
            });

            // 清空数据
            FinGuide.payingJson = [];
        }

        // 后续业务
        FinGuide.getOperationList(0, $tab);
    }

    /**
     * 保存对账数据
     * @param  {object} $tab    对账页面的Jquery对象
     * @param  {array} tabArgs 翻页提示所需的切换参数
     * @return {[type]}         [description]
     */
    FinGuide.saveCheckingData = function($tab, tabArgs) {
        var validator = new FinRule(3);
        var json = FinancialService.checkSaveJson($tab, validator);

        if (json) { // 有值
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'operateCheckAccount'),
                    type: 'post',
                    data: {
                        checkJson: json
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        $tab.data('isEdited', false);

                        showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                            if (!!tabArgs) {
                                Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                                FinGuide.initOperationEvent($tab, 0);
                            } else {
                                $tab.find('.T-btn-search').trigger('click');
                                // FinGuide.getList(FinGuide.listPageNo);
                            }
                        })
                    }
                });
        }
    }

    /**
     * 保存付款
     * @param  {object} $tab    对账页面的Jquery对象
     * @param  {array} tabArgs 翻页提示所需的切换参数
     * @return {[type]}         [description]
     */
    FinGuide.savePayingData = function($tab, tabArgs,Dsave) {
        var validator = new FinRule(FinGuide.isOuter ? 3 : 1);
        if(!FinancialService.isClearSave($tab,validator)){
            return false;
        }
        var json = FinancialService.clearSaveJson($tab, FinGuide.payingJson, validator);
        var payType = $tab.find('.T-sumPayType').val();
		var bankId = $tab.find('input[name=card-id]').val();
        var voucher = $tab.find('input[name=credentials-number]').val();
        var billTime = $tab.find('input[name=tally-date]').val();
        var args = {
            payJson: JSON.stringify(json),
            guideId: $tab.find('.T-saveClear').data('id'),
            payType: payType,
            remark: $tab.find('.T-remark').val(),
            bankId:bankId,
            payMoney: $tab.find('.T-sumPayMoney').val(),
            voucher:voucher,
            billTime:billTime
        }
        if(payType == 1){
            if(!Dsave){
                args.resourceId = $tab.find('.T-saveClear').data('id');
                args.resourceName = $tab.find(".T-guideName").text();
                args.businessType = "guide";
                args.payRemark = $tab.find('.T-remark').val();
                FinGuide.payment(args,0);
                return false;
            }
        }
        if (json.length) {
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'operatePayAccount'),
                    type: 'post',
                    data: args,
                })
                .done(function(data) {
                    $tab.data('isEdited', false);
                    FinGuide.payingJson = [];
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (!!tabArgs && tabArgs) {
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            FinGuide.initOperationEvent($tab, 1);
                        } else {
                            $tab.find('.T-btn-search').trigger('click');
                            // FinGuide.getList(FinGuide.listPageNo);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
    };

    /**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    FinGuide.autoFillMoney = function($tab) {
        if (!!$tab && $tab.length) {
            var id = $tab.find('.T-saveClear').data('id'),
                args = FinancialService.autoPayJson(id, $tab, new FinRule(2), 0),
                $line = $tab.find('.T-lineProductName'),
                $autoPayMoney = $tab.find('.T-sumPayMoney');
            if(!args)return;
            args = {
                guideId: id,
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
                lineProductId: $line.data('id'),
                lineProductName: $line.val(),
                autoPayMoney: $autoPayMoney.val(),
                payType: $tab.find('.T-sumPayType').val()
            };

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }

            FinancialService.autoPayConfirm(args.startDate, args.endDate, function() {
                $.ajax({
                        url: KingServices.build_url('account/guideFinancial', 'autoPay'),
                        type: 'post',
                        data: args,
                        showLoading: false
                    })
                    .done(function(data) {
                        if (showDialog(data)) {
                            FinGuide.payingJson = data.autoPayList;
                            $tab.find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
                            FinGuide.setAutoFillEdit($tab, true);
                        }
                    });
            })
        }
    };

    FinGuide.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        FinGuide.getOperationList(0, $tab);

    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    FinGuide.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var $line = $tab.find('.T-lineProductName');

            var args = {
                pageNo: pageNo || 0,
                guideId: $tab.find('.T-saveClear').data('id'),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
                lineProductId: $line.data('id'),
                lineProductName: $line.val(),
            };

            if (args.lineProductName === '全部') {
                args.lineProductName = '';
            }

            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'listFinancialGuideByGuideId'),
                    type: 'post',
                    data: args,
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var html,
                            type = $tab.find('.T-saveClear').data('type');
                        if (!!type) {
                            data.list = FinancialService.getTempDate(data.list, FinGuide.payingJson);
                            data.isOuter = FinGuide.isOuter;
                            html = filterUnAuth(payingTableTemplate(data));
                        } else {
                            html = filterUnAuth(checkingTableTemplate(data));
                        }
                        $tab.find('.T-checkList').html(html);

                        if (!type) {
                            //给全选按钮绑定事件: 未去重
                            FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
                        }

                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                        $tab.find('.T-saveClear').data('pageNo', args.pageNo);
                        // 绑定翻页组件
                        laypage({
                            cont: $tab.find('.T-pagenation'),
                            pages: data.totalPage, //总页数
                            curr: (data.pageNo + 1),
                            jump: function(obj, first) {
                                if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                    FinGuide.getOperationList(obj.curr - 1, $tab);
                                }
                            }
                        });
                    }
                });

        }
    }

    /**
     * 绑定线路产品的下拉选择
     * @param  {object} $obj 绑定对象
     * @param  {array} list 线路产品的选项
     * @return {[type]}      [description]
     */
    FinGuide.getLineProduct = function($obj, list) {
        for (var i = 0; i < list.length; i++) {
            list[i].value = list[i].name;
            list[i].id = list[i].id;
        }
        list.unshift({
            id: '',
            value: '全部'
        });

        $obj.autocomplete({
                minLength: 0,
                change: function(event, ui) {
                    if (!ui.item) {
                        $(this).data('id', '');
                    }
                },
                select: function(event, ui) {
                    $(this).blur().data('id', ui.item.id);
                }
            }).on("click", function() {
                $obj.autocomplete('search', '');
            })
            .autocomplete('option', 'source', list);
    }

    /**
     * 查看操作记录
     * @param  {int} id   账务id
     * @param  {int} type 0：应付明细，1：已付明细
     * @return {[type]}      [description]
     */
    FinGuide.viewOperationDetail = function(id, type) {
        if (!!id) {
            var method = 'viewCheckRecordList',
                title = '应付金额明细';
            if (type) {
                method = 'viewPayedRecordList';
                title = '已付金额明细';
            }
            $.ajax({
                url: KingServices.build_url('account/guideFinancial', method),
                type: 'post',
                data: {
                    id: id
                },
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.type = type;
                    layer.open({
                        type: 1,
                        title: title,
                        skin: 'layui-layer-rim',
                        area: '1024px',
                        zIndex: 1028,
                        content: operationDetailTemplate(data),
                        scrollbar: false
                    });
                }
            });
        }
    }

    /**
     * 查看--导游对账费用明细 
     * @param  {int} tripId 发团计划ID
     * @return {[type]}        [description]
     */
    FinGuide.viewFeeDetail = function(tripId) {
        if (!!tripId) {
            $.ajax({
                    url: KingServices.build_url('account/guideFinancial', 'viewTripPlanFeeDetail'),
                    type: 'post',
                    data: {
                        tripPlanId: tripId
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	data.touristGroupList = JSON.parse(data.touristGroupList || false) || [];
                        Tools.addTab(menuKey + "-costDetail", "费用明细", costDetailTemplate(data));
                        //查看图片事件
                        $("#tab-" + menuKey + "-costDetail-content").find(".T-view-bill").click(function() {
                            FinGuide.viewBillImage($(this).data('fn'));
                        });
                    }
                });

        }
    }


    //显示单据
    FinGuide.viewBillImage = function(fn) {
        var data = {
            "images": []
        }, strs = fn.split(",");
        for (var i = 0, str; i < strs.length; i++) {
            str = strs[i];

            if (!!str) {
                data.images.push({
                    WEB_IMG_URL_BIG: imgUrl + str,
                    WEB_IMG_URL_SMALL: imgUrl + str + "?imageView2/2/w/150"
                })
            }
        }
        var html = billImagesTemplate(data);

        layer.open({
            type: 1,
            title: "单据图片",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function() {
                var colorbox_params = {
                	photo: true,
                    rel: 'colorbox',
                    reposition: true,
                    scalePhotos: true,
                    scrolling: false,
                    previous: '<i class="ace-icon fa fa-arrow-left"></i>',
                    next: '<i class="ace-icon fa fa-arrow-right"></i>',
                    close: '&times;',
                    current: '{current} of {total}',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    onOpen: function() {
                        $overflow = document.body.style.overflow;
                        document.body.style.overflow = 'hidden';
                    },
                    onClosed: function() {
                        document.body.style.overflow = $overflow;
                    },
                    onComplete: function() {
                        $.colorbox.resize();
                    }
                };
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
            }
        });
    };

    //选择支付方式
    FinGuide.payment = function(args,type){//type:0新建，1账务付款进入,2在线支付列表进入
        if(type == 0){
            var data = [];
            data.type = type;
            data.args = args;
            FinGuide.initPayment(data);
        } else {
            $.ajax({
                url: KingServices.build_url('onlinePay/payOrder', 'findPayOrderById'),
                type: 'POST',
                data: args,
            })
            .done(function(data) {
                data.type = type;
                data.args = args;
                FinGuide.initPayment(data);
            });
        }
    };

    FinGuide.initPayment = function(data){
        var args = data.args,
            type = data.type;
        var html = paymentTemplate(data);

        var payTypeLayer = layer.open({
            type: 1,
            title: "选择支付方式",
            skin: 'layui-layer-rim', // 加上边框
            area: '700px', // 宽高
            zIndex: 1028,
            content: html,
            scrollbar: false,
            success : function(){
                var $container = $(".T-payment-container"),
                    $layer = $container.closest(".layui-layer");
                $layer.find(".layui-layer-close").off().on('click', function() {
                    layer.close(payTypeLayer);
                    if(type == 0){
                        FinGuide.initOperationModule(args, 1,$("#tab-financial_guide-paying-content"));
                    }
                });
                if(type == 0){
                    FinGuide.getGuideInfo($container,args.resourceId);
                }
                $container.off().on("click",".T-option",function(){
                    var $this = $(this);
                    if($this.hasClass('T-hideGuide')){
                        $container.find(".T-guideInfo").addClass('hide');
                    }else if($this.hasClass('T-showGuide')){
                        $container.find(".T-guideInfo").removeClass('hide');
                    } else if($this.hasClass('T-detail')){//新建时无明细
                        if(type == 1 || type == 2){
                            FinGuide.paymentDetail(args.orderId);
                        }
                    } else if($this.hasClass('T-toPay')){
                        if($container.find('.T-showGuide').is(":checked")){
                            if(type == 0){
                                FinGuide.createPayOrder($layer,type,args);
                            } else {
                                FinGuide.openPayWindow(data.orderNumber);
                                FinGuide.payResult($layer,type,args);
                            }
                        } else if($container.find('.T-hideGuide').is(":checked")){
                            layer.close(payTypeLayer);
                            if(type == 0){
                                FinGuide.savePayingData($("#tab-financial_guide-paying-content"),false,true);
                            } else{
                                $.ajax({
                                    url: KingServices.build_url('onlinePay/payOrder', 'offlinePayByOrderId'),
                                    type: 'POST',
                                    data: args,
                                })
                                .done(function(data) {
                                    showMessageDialog($("#confirm-dialog-message"),data.message);
                                    if(type == 2){//刷新在线支付列表
                                        $(".financial_onlinePay").trigger('click');
                                    }
                                });
                                
                            }
                        }
                    }
                });
            }
        });
    };

    //创建订单
    FinGuide.createPayOrder = function($layer,type,args){
        $.ajax({
            url: KingServices.build_url('onlinePay/payOrder', 'createPayOrder'),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                FinGuide.openPayWindow(data.orderNumber);
                FinGuide.payResult($layer,type,args);
            }
        });
    };

    FinGuide.openPayWindow = function(orderNum) {
        var win = window.open();

        setTimeout(function() {
            win.location.href = APP_ROOT + "back/onlinePay/alipay.do?method=pay&orderNumber=" + orderNum +"&token=" +$.cookie('token');            
        });
    }

    //支付明细
    FinGuide.paymentDetail = function(orderId){
        $.ajax({
            url: KingServices.build_url('onlinePay/payOrder', 'findPayItemListByOrderId'),
            type: 'POST',
            data: {orderId: orderId},
        })
        .done(function(data) {
            var html = paymentDetailTemplate(data);
            layer.open({
                type: 1,
                title: "明细",
                skin: 'layui-layer-rim', // 加上边框
                area: '700px', // 宽高
                zIndex: 1038,
                content: html,
                scrollbar: false
            });
        });
    };

    FinGuide.payResult = function($layer,type,args){
        $layer.hide();
        var html = payResultTemplate();
        var rstLayer = layer.open({
            type: 1,
            title: "支付",
            skin: 'layui-layer-rim', // 加上边框
            area: '400px', // 宽高
            zIndex: 1038,
            content: html,
            scrollbar: false,
            success : function(){
                var $container = $(".T-payResult-container"),
                    $close = $container.closest(".layui-layer").find(".layui-layer-close");
                $close.off().on('click', function() {
                    $layer.prev(".layui-layer-shade").remove();
                    $layer.remove();
                    if(type == 0){
                        $('#tab-financial_guide-paying-content').data("isEdited",false);
                        FinGuide.initOperationModule(args, 1,$("#tab-financial_guide-paying-content"));
                    } else if(type == 2){
                        $(".financial_onlinePay").trigger('click');
                    }
                });

                $container.off().on('click', '.T-option', function(event) {
                    event.preventDefault();
                    var $this = $(this);
                    if($this.hasClass('T-success')){
                        $close.trigger('click');
                        if(type == 0 ||　type == 1){
                            var $tab = $('#tab-financial_guide-paying-content');
                            if($tab.length == 0){
                                $tab = false;
                            } else {
                                $tab.data("isEdited",false);
                            }
                            FinGuide.initOperationModule(args, 1,$tab);
                        }
                    } else if($this.hasClass('T-problem')){
                        var o = window.open();
                        setTimeout(function(){
                            o.location.href = "https://help.alipay.com/lab/help_detail.htm?help_id=258086";
                        }, 0);
                    } else if($this.hasClass('T-return')){
                        $layer.show();
                        layer.close(rstLayer);
                    }
                });
            }
        });
    };

    FinGuide.getGuideInfo = function($container,guideId){
        $container.find(".T-showGuide").one("click",function(){
            $.ajax({
                url: KingServices.build_url('account/guideFinancial', 'checkGuideIsUseApp'),
                type: 'POST',
                data: {guideId : guideId},
            })
            .done(function(data) {
                if(data.success == 0){
                    showMessageDialog($("#confirm-dialog-message"),data.message);
                    $container.find(".T-guideInfo").addClass('hide');
                    $container.find(".T-payType").eq(0).prop("checked",true);
                    $container.find(".T-payType").prop("disabled",true);
                    return false;
                }
                var photo = data.guideInfo.photo;
                if(photo != null || photo != ""){
                    $container.find(".T-guideImg").attr("src",photo);
                }
                $container.find(".T-guideName").text(data.guideInfo.name);
                $container.find(".T-guideNumber").text(data.guideInfo.guideCardNumber);
                $container.find(".T-guideMobile").text(data.guideInfo.mobileNumber);
            });
            
        });
    };

    FinGuide.initPayModule = function(options) {
        options.guideId = options.id;
        delete(options.id);
        options.isOuter = FinGuide.isOuter = true;

        FinGuide.initOperationModule(options, 1)
    };

    // 暴露方法
    exports.init = FinGuide.initModule;
    exports.initPay = FinGuide.initPayModule;
	exports.viewFeeDetail = FinGuide.viewFeeDetail;
    exports.payment = FinGuide.payment;
    exports.paymentDetail = FinGuide.paymentDetail;
});
