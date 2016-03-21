/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var listTemplate = require("./view/list"),
        shopCheckingTemplate = require("./view/shopChecking"),
        billImagesTemplate = require("./view/shopLookImg"),
        shopClearingTemplate = require("./view/shopClearing"),
        viewReceivedTemplate = require("./view/viewReceived"),
        viewAccountTemplate = require('./view/viewAccount'),
        payingTableTemplate = require('./view/shopPayingTable'),
        menuKey = "financial_shop",
        checkMenuKey = menuKey + "_checking",
        settMenuKey = menuKey + "_clearing";

    var FinShop = {
        $tab: false,
        $checkingTab: false,
        checkingId: null
    }

    /**
     * 初始化模块
     */
    FinShop.initModule = function() {
        FinShop.$tab = null;
        FinShop.getList();
    };

    /**
     * 获取购物账务列表，初始化列表页面
     * @param  {int} page 页码
     */
    FinShop.getList = function(page, $tab) {
        var args = FinancialService.getInitDate();
            args.accountStatus = 2;
        args.pageNo = page || 0;
        if (!!$tab) {
            args = {
                pageNo: (page || 0),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                accountStatus : $tab.find(".T-finance-status").find("button").data("value")
            }
            var shopName = $tab.find('.T-search-name').val().trim();
            args.shopName = shopName === '全部' ? '' : shopName;
        }
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'listPager'),
            type: 'post',
            data: args //{searchParam : JSON.stringify()},
        }).done(function(data) {
            if (showDialog(data)) {
                Tools.addTab(menuKey, "购物账务", listTemplate(data));
                // 绑定事件
                FinShop.$tab = $tab = $('#tab-' + menuKey + '-content');
                FinShop.init_event($tab);
                //获取合计金额
                FinShop.getSumMoney(args, $tab);
                // 缓存页面
                FinShop.listPageNo = args.pageNo;
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            FinShop.getList(obj.curr - 1, $tab);
                        }
                    }
                });
            }
        });
    };
    //获取合计金额
    FinShop.getSumMoney = function(args, tabId) {
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'listPagerTotal'),
            data: args,
            type: "POST",
            success: function(data) {
                if (showDialog(data)) {
                    tabId.find('.T-sumCount').text(data.sumCount);
                    tabId.find('.T-sumOrderMoney').text(data.sumContractMoney);
                    tabId.find('.T-sumContractMoney').text(data.sumRebateMoney);
                    tabId.find('.T-sumStMoney').text(data.sumSettlementMoney);
                    tabId.find('.T-sumReceiveMoney').text(data.sumReceiveMoney);
                    tabId.find('.T-sumUnReceivedMoney').text(data.sumUnReceivedMoney);
                }
            }
        });
    };
    /**
     * 初始化列表页面的事件绑定
     */
    FinShop.init_event = function($tab) {

        /**
         * 搜索顶部的事件绑定
         */
        var $searchArea = $tab.find('.T-search-area');
        //搜索下拉事件
        $searchArea.find('.T-finance-status').on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
            FinShop.getList(0,$tab);
        });
        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinShop.getList(0, $tab);
        });
        Tools.setDatePicker($searchArea.find('.datepicker'), true);
        FinShop.getShopName($searchArea.find('.T-search-name'));
        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                name = $that.closest('tr').data('name'),
                argsData = {
                    shopId: id,
                    shopName: name,
                    source: true,
                    startDate: $tab.find('.T-search-start-date').val(),
                    endDate: $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find(".T-finance-status").find("button").data("value")
                };
            if ($that.hasClass('T-checking')) {
                // 对账
                FinShop.accountChecking(argsData);
            } else if ($that.hasClass('T-settlement')) {
                // 结算

                FinShop.settlement(argsData);
            }
        });
    };

    FinShop.getShopName = function($obj) {
        $.ajax({
            url: KingServices.build_url('financial/shopAccount', 'selectShopName'),
            type: "POST",
            showLoading: false
        }).done(function(data) {
            if (showDialog(data)) {
                for (var i = 0; i < data.shopList.length; i++) {
                    data.shopList[i].value = data.shopList[i].shopName;
                    data.shopList[i].id = data.shopList[i].shopId;
                }
                var all = { id: '', value: '全部' };
                FinShop.shopList = data.shopList.slice(all);
                if(!!$obj){
                    data.shopList.unshift(all);
                    $obj.autocomplete({
                        minLength: 0,
                        source : data.shopList,
                        change: function(event, ui) {
                            if (!ui.item) {
                                $(this).data('id', '');
                            }
                        },
                        select: function(event, ui) {
                            $(this).blur().data('id', ui.item.id);
                        }
                    }).on('click', function() {
                        $obj.autocomplete('search','');
                    });
                }
            }
        });
    };

    /**
     * 初始化对账模块
     * @param  {[int]} id 购物账务ID
     */
    FinShop.accountChecking = function(args) {
        FinShop.checkingId = args.shopId;
        FinShop.checkingName = args.shopName;
        args.page = 0;
        FinShop.initOperationList(args, false,false);
    };
    /**
     * 初始化付款模块
     * @param  {[type]} args 
     */
    FinShop.settlement = function(args) {
        FinShop.settlementId = args.shopId;
        FinShop.settlementName = args.shopName;
        FinShop.isBalanceSource = !args.source;
        args.page = 0;
        FinShop.initOperationList(args, true,false);
    };
    FinShop.initPay = function(args){
        FinShop.getShopName();
        args.shopId = args.id;
        args.shopName = args.name;
        FinShop.settlement(args);
    };
    /**
     * 对账和收款列表
     * @param  {Object} args 请求参数
     * @param  {Boole}  type 是否未收款界面
     * @param  {Object} $tab tab
     */
    FinShop.initOperationList = function(args, type, $tab) {
        if (!!$tab) {
            args.pageNo = (args.page || 0);
            args.startDate = $tab.find('.T-search-start-date').val();
            args.endDate = $tab.find('.T-search-end-date').val();
            args.tripMessage = $tab.find('.T-search-trip').val();
            args.accountStatus = $tab.find('[name=accountStatus]').val();
        }
        args.sortType = 'accountTime';
        args.order = 'asc';
        var method = 'listReciveShopAcccount';
        if (!type) {
            method = 'listCheckShopAcccount';
        }

        $.ajax({
            url: KingServices.build_url('financial/shopAccount', method),
            type: "POST",
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                var template = shopClearingTemplate,
                    title = '购物收款',
                    key = settMenuKey;
                if (type) {
                    data.id = args.shopId;
                    data.name = args.shopName;
                    data.source = FinShop.isBalanceSource;
                    data.shopAccountList = FinancialService.getTempDate(data.shopAccountList,FinShop.payingJson);
                } else {
                    data.name = FinShop.checkingName;
                    template = shopCheckingTemplate;
                    title = '购物对账';
                    key = checkMenuKey;
                }
                var $theTab = null;
                if (Tools.addTab(key, title, template(data))) {
                    if (type) {
                        $theTab = $tab || $('#tab-' + key + '-content');
                        FinShop.$settlementTab = $theTab;
                        if(FinShop.payingJson){
                            FinShop.$settlementTab.data('isEdited',true);
                        }
                    } else {
                        $theTab = $tab || $('#tab-' + key + '-content');
                        FinShop.$checkingTab = $theTab;
                    }
                    FinShop.initOperationEvent($theTab,args,type);
                    $theTab.data('id', args.shopId);
                } else {
                    var $tab = type ? FinShop.$settlementTab : FinShop.$checkingTab;
                    $tab.data('next', args);
                }

                var $tab = type ? FinShop.$settlementTab : FinShop.$checkingTab;
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            if(type){
                                FinShop.payingJson = FinancialService.clearSaveJson(FinShop.$settlementTab,FinShop.payingJson,new FinRule(FinShop.isBalanceSource ? 3 : 1));
                                FinShop.$settlementTab.data("isEdited",false);
                                FinShop.getOperationList(obj.curr - 1,FinShop.$settlementTab);
                            } else {
                                FinShop.$checkingTab.data('isEdited',false);
                                FinShop.initOperationList({ page: obj.curr - 1 }, type,FinShop.$checkingTab);
                            }
                        }
                    }
                });
            }
        });
    };
    /**
     * 对账和收款绑定事件
     * @param  {[type]} $tab [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    FinShop.initOperationEvent = function($tab,args,type) {
        var validator = (new FinRule(!type ? 0 : (FinShop.isBalanceSource ? 3 : 1))).check($tab);
        FinShop.getShopList($tab,type);

        //搜索顶部的事件绑定
        var $searchArea = $tab.find('.T-search-area');
        $searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            FinShop.initOperationList(args, type, $tab);
        });
        var $datepicker = $searchArea.find('.datepicker');
        Tools.setDatePicker($datepicker, true);
        var operationMenuKey = settMenuKey,
            saveData = type ? FinShop.saveSettlement : FinShop.saveChecking;

        // 监听修改
        var $list = type ? $tab.find(".T-clearList") : $tab.find(".T-checkList");
        $list.off('change').on('change', "input", function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change", true);
            $tab.data('isEdited', true);
        });

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            if(type){
                FinShop.payingJson = [];
            }
            FinShop.initOperationList($tab.data("next"), true,false);
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            saveData($tab,args,[tab_id, title, html]);
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            saveData($tab);
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(type){
                FinShop.payingJson = [];
            }
        });

        if (type) {
            var autoValidator = (new FinRule(2)).check($tab);
            FinancialService.updateSumPayMoney($tab, new FinRule(FinShop.isBalanceSource ? 3 : 1));
            $tab.find(".T-btn-autofill").on('click', function(event) {
                event.preventDefault();
                if ($(this).hasClass('btn-primary')) {
                    if (autoValidator.form()) {
                        FinancialService.autoPayConfirm($datepicker.eq(0).val(), $datepicker.eq(1).val(), function() {
                            FinShop.autoFillMoney($tab);
                        });
                    }
                } else {
                    FinShop.payingJson = [];
                    FinShop.setAutoFillEdit($tab, false);
                }
            });

            FinancialService.initPayEvent($searchArea);
        } else {
            operationMenuKey = checkMenuKey;
            FinancialService.updateUnpayMoney($tab, new FinRule(0));
            //给全选按钮绑定事件
            FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

            //导出报表事件 btn-hotelExport
            $tab.find(".T-btn-export").click(function() {
                var args = {
                    shopId: $tab.find('input[name=shopId]').val(),
                    shopName: $tab.find('input[name=shopName]').val(),
                    tripMessage: $tab.find('.T-search-trip').val(),
                    startDate: $tab.find('.T-search-start-date').val(),
                    endDate: $tab.find('.T-search-end-date').val()
                };
                FinancialService.exportReport(args, "exportArrangeShopFinancial");
            });
        }

        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-see-group')) {
                FinShop.unfold($that);
            } else if ($that.hasClass('T-view-receipts')) {
                FinShop.viewImage($tab, $that.data('billimage'));
            } else if ($that.hasClass('T-payDetails')) {
                FinShop.viewOperationDetail(id, 0);
            } else if ($that.hasClass('T-view-details')) {
                FinShop.viewOperationDetail(id, 1);
            }
        });


        //绑定确定事件
        $tab.find('.T-saveClear').on('click', function(event) {
            var check = new FinRule(5).check($tab);
            if (!check.form()) {
                return false;
            }
            event.preventDefault();
            if (!type) {
                FinancialService.changeUncheck($tab.find('.T-checkTr'), function() {
                    saveData($tab,args);
                });
            } else {
                if (!$tab.data('isEdited')) {
                    showMessageDialog($("#confirm-dialog-message"), "您未进行任何操作！");
                    return false;
                }
                var sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
                    sumListMoney = parseFloat($tab.find('input[name=sumPayMoney]').data("money"));
                if (sumPayMoney != sumListMoney) {
                    showMessageDialog($("#confirm-dialog-message"), "本次收款金额合计与单条记录本收付款金额的累计值不相等，请检查！");
                    return false;
                }
                if (sumPayMoney == 0) {
                    showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
                        saveData($tab,args);
                    })
                } else {
                    saveData($tab,args);
                }
            }
        });
        //绑定取消事件
        FinancialService.closeTab(operationMenuKey);
    };

    FinShop.viewOperationDetail = function(id, type) {
        if (!!id) {
            var method = 'findCheckAccountDetail',
                title = '应收金额明细',
                html = viewAccountTemplate;
            if (!type) {
                method = 'findReciveAccountDetail';
                title = '已收金额明细';
                html = viewReceivedTemplate;
            }
            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', method),
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
                            content: html(data),
                            scrollbar: false
                        });
                    }
                });
        }
    };

    FinShop.unfold = function($that) {
        if ($that.data('is-show')) {
            $that.html('展开');
            $that.data('is-show', '');
            $that.closest('tr').next().addClass('hide');
        } else {
            $that.html('收起');
            $that.data('is-show', 'true');
            $that.closest('tr').next().removeClass('hide');
        }
    };

    FinShop.viewImage = function($tab, strImage) {
        if (!strImage) return;
        var WEB_IMG_URL_BIG = $tab.find(".globalAdd").data('big'),
            WEB_IMG_URL_SMALL = $tab.find(".globalAdd").data('small'),
            data = {
                "images": []
            },
            str = strImage,
            strs = str.split(",");
        for (var i = 0; i < strs.length; i++) {
            var s = strs[i];
            if (s != null && s != "" && s.length > 0) {
                var image = {
                    "WEB_IMG_URL_BIG": imgUrl + s,
                    "WEB_IMG_URL_SMALL": imgUrl + s + "?imageView2/2/w/150",
                }
                data.images.push(image);
            }
        }
        var $overflow = null;
        layer.open({
            type: 1,
            title: "单据图片",
            skin: 'layui-layer-rim', // 加上边框
            area: '500px', // 宽高
            zIndex: 1028,
            content: billImagesTemplate(data),
            scrollbar: false, // 推荐禁用浏览器外部滚动条
            success: function() {
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
            }
        });
    };

    FinShop.saveChecking = function($tab,args,tabArgs) {
        console.log("saveChecking");
        // 表单校验
        var argLen = arguments.length,
            json = FinancialService.checkSaveJson($tab, new FinRule(0));
        if (JSON.parse(json).length > 0) {
            $.ajax({
                url: KingServices.build_url('financial/shopAccount', 'checkShopAccount'),
                type: "POST",
                data: { checkAccountList: json }
            }).done(function(data) {
                if (showDialog(data)) {
                    $tab.data('isEdited', false);
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (argLen === 1) {
                            Tools.closeTab(checkMenuKey);
                            FinShop.getList(FinShop.listPageNo);
                        } else if(argLen === 2){
                            FinShop.initOperationList(args, false, false);
                        } else if(argLen === 3){
                            Tools.addTab(tabArgs[0],tabArgs[1],tabArgs[2]);
                            FinShop.initOperationEvent($tab,args,false);
                        }
                    });
                }
            });
        }else {
            showMessageDialog($('#confirm-dialog-message'), '没有可提交的数据');
        }
    };

    /**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    FinShop.autoFillMoney = function($tab) {
        if (!!$tab && $tab.length) {
            var args = FinancialService.autoPayJson(FinShop.settlementId, $tab, new FinRule(2), 1);
            if (!args) return;
            args = JSON.parse(args);
            args.shopId = args.id;
            args.sumTemporaryIncomeMoney = args.sumCurrentPayMoney
            args.tripMessage = $tab.find('.T-search-trip').val();
            delete args.id;
            delete args.sumCurrentPayMoney;

            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'autoShopAccount'),
                    type: 'post',
                    data: args,
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var payType = $tab.find('select[name=sumPayType]').val(),
                            bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
                        var voucher = $tab.find('input[name=credentials-number]').val();
                        var billTime = $tab.find('input[name=tally-date]').val();
                        var bankNumber = (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
                        FinShop.payingJson = data.autoAccountList;
                        FinShop.payingJson.bankId = bankId;
                        FinShop.payingJson.voucher = voucher;
                        FinShop.payingJson.billTime = billTime;
                        FinShop.payingJson.bankNumber = bankNumber;
                        $tab.find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
                        FinShop.setAutoFillEdit($tab, true);
                    }
                });
        }
    };

    FinShop.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        FinShop.getOperationList(0, $tab);
        $tab.data('isEdited', true);
        FinancialService.updateSumPayMoney($tab, new FinRule(FinShop.isBalanceSource ? 3 : 1));
    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    FinShop.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var args = {
                pageNo: pageNo || 0,
                shopId: $tab.find('input[name=shopName]').data('id'),
                shopName : $tab.find('input[name=shopName]').val(),
                startDate: $tab.find('.T-search-start-date').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                tripMessage: $tab.find('.T-search-trip').val()
            };

            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'listReciveShopAcccount'),
                    type: "POST",
                    data: args
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        data.shopAccountList = FinancialService.getTempDate(data.shopAccountList, FinShop.payingJson);
                        var html = payingTableTemplate(data);
                        FinShop.$settlementTab.find('.T-checkList').html(html);
                        if(FinShop.payingJson){
                            FinShop.$settlementTab.data("isEdited",true);
                        }
                        $tab.find('.T-checkTr').on('change', function() {
                            $(this).data('change', 'true');
                        });
                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.searchParam.recordSize + '条记录');
                        $tab.find('.T-saveClear').data('pageNo', args.pageNo);
                        // 绑定翻页组件
                        laypage({
                            cont: $tab.find('.T-pagenation'),
                            pages: data.searchParam.totalPage, //总页数
                            curr: (data.searchParam.pageNo + 1),
                            jump: function(obj, first) {
                                if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                    FinShop.payingJson = FinancialService.clearSaveJson($tab,FinShop.payingJson,new FinRule(FinShop.isBalanceSource ? 3 : 1));
                                    $tab.data('isEdited',false);
                                    FinShop.getOperationList(obj.curr - 1, $tab);
                                }
                            }
                        });
                    }
                });

        }
    }

    FinShop.saveSettlement = function($tab,args,tabArgs) {
        var check = new FinRule(5).check($tab);
        if (!check.form()) { return false;}
        var argLen = arguments.length,
            payType = $tab.find('select[name=sumPayType]').val(),
            bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
        var voucher = $tab.find('input[name=credentials-number]').val();
        var billTime = $tab.find('input[name=tally-date]').val();
        var json = FinancialService.clearSaveJson($tab, FinShop.payingJson, new FinRule(FinShop.isBalanceSource ? 3 : 1));
        if (json.length) {
            var saveArgs = {
                shopId: FinShop.settlementId,
                payType: payType,
                bankId: bankId,
                voucher: voucher,
                billTime: billTime,
                remark: $tab.find('.T-sumRemark').val(),
                reciveAccountList: JSON.stringify(json)
            }
            $.ajax({
                    url: KingServices.build_url('financial/shopAccount', 'receiveShopAccount'),
                    type: 'post',
                    data: saveArgs,
                })
                .done(function(data) {
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        $tab.data('isEdited', false);
                        FinShop.payingJson = [];
                        if (argLen === 1) {
                            Tools.closeTab(settMenuKey);
                            FinShop.getList(FinShop.listPageNo);
                        } else if(argLen === 2){
                            FinShop.initOperationList(args, true,false);
                        } else if(argLen === 3){
                            FinShop.initOperationList(args, true,false);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '没有可提交的数据！');
        }
    };

    FinShop.getShopList = function($tab,type){
        var $obj = $tab.find('input[name=shopName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : FinShop.shopList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    shopId : ui.item.id,
                    shopName : ui.item.value,
                    startDate : $tab.find('.T-search-start-date').val(),
                    endDate : $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                FinShop.initOperationList(args, type,false);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    // 暴露方法
    exports.init = FinShop.initModule;
    exports.initIncome = FinShop.initPay;
});
