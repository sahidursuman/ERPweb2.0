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

        $searchArea.on('change', '.T-beginningBalance, .T-search-payment', function() {
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
            args = $form.serializeJson(),
            $bankName;

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
                    $sum.text(Tools.thousandPoint(data.total.incomeMoney * 1 + ($form.find('.T-beginningBalance').val() || 0) * 1 - data.total.payMoney * 1, 2));
                }
                $sum.parent().toggleClass('hidden', !args.bankId);
                $sumaryArea.removeClass('hidden');
            });
        }
    };

    /**
     * 新增现金日记
     */
    PaymentDetailUtil.add = function() {
        $.ajax({
            url: KingServices.build_url("financialIncomeOrPay", "addIncomeorPay"),
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = addTemplate(data);
                    var addGuideLayer = layer.open({
                        type: 1,
                        title: "新增现金日记账",
                        skin: 'layui-layer-rim', //加上边框
                        area: '800px', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                        success: function() {
                            PaymentDetailUtil.subList0 = data.subjectdata0;
                            PaymentDetailUtil.subList1 = data.subjectdata1;
                            PaymentDetailUtil.subList2 = data.subjectdata2;
                            var $container = $(".T-addPayment-container"),
                                $bankCount = $container.find(".T-choose-bankCount"),
                                $bankCountList = $container.find(".T-bankCount-list"),
                                validator = rule.check($container);
                            FinancialService.initPayEvent($container);
                            FinancialService.datetimepicker($container);

                            $container.find(".T-moneyType").off().on("change", function() {
                                PaymentDetailUtil.loadSubjectHtml($(this).val(), $container);
                                if ($(this).val() == 2) {
                                    $container.find(".T-Ntransfer").addClass('hidden');
                                    $container.find(".T-payType-cash").addClass('hidden');
                                    $container.find(".T-transfer").removeClass('hidden');

                                } else {
                                    $container.find(".T-Ntransfer").removeClass('hidden');
                                    $container.find(".T-payType-cash").removeClass('hidden');
                                    $container.find(".T-transfer").addClass('hidden');
                                }
                            });

                            $bankCountList.find("li").on("click", function() {
                                var bankId = $(this).data("id"),
                                    bankCount = $(this).find('.T-bankCount').text(),
                                    avilableMoney = $(this).find('.T-avilableMoney').text();
                                $bankCount.find("input[name=bankId]").val(bankId);
                                $bankCount.find(".T-count").text(bankCount);
                                $bankCount.find(".T-money").text(avilableMoney);
                                $bankCountList.trigger("mouseleave");
                            });

                            $bankCountList.hide();
                            $container.on("click", ".T-choose-bankCount", function() {
                                    $bankCountList.show();
                                })
                                .on("mouseleave", ".T-choose-bankCount", function() {
                                    $bankCountList.hide(150);
                                })
                                .on("click", ".T-option", function() {
                                    var $this = $(this);
                                    if ($this.hasClass('T-close-payment')) {
                                        layer.close(addGuideLayer);
                                    } else if ($this.hasClass('T-save-payment')) {
                                        var subjectName = $container.find('.T-subject').find("option:selected").text(),
                                            resourceName = $container.find('[name=resourceName]').val();
                                        if ((subjectName === "预收账款" || subjectName === "预付账款") && !resourceName) {
                                            showMessageDialog($("#confirm-dialog-message"), "对方单位不能为空");
                                            return;
                                        }
                                        if (!validator.form()) {
                                            return;
                                        }
                                        PaymentDetailUtil.submitPayment();
                                    }
                                })
                                .on("change", ".T-subject", function() {
                                    var subjectName = $(this).find("option:selected").text();
                                    $container.find('input[name=subjectName]').val(subjectName);
                                    PaymentDetailUtil._loadResTypeSelect(subjectName, $container);
                                });
                            $container.find('.T-subject').trigger('change');

                            //获取对方单位
                            PaymentDetailUtil._getResourceList($container.find('[name=resourceName]'), $container);

                            $container.find('.T-chooseAccount').autocomplete({
                                minLength: 0,
                                change: function(event, ui) {
                                    if (ui.item == null) {
                                        $(this).val('').nextAll('.T-accountId').val('');
                                    }
                                },
                                select: function(event, ui) {
                                    $(this).nextAll('.T-accountId').val(ui.item.id).trigger('change');
                                }
                            }).on("click", function() {
                                var $this = $(this),
                                    id = "";
                                if ($this.hasClass('T-type-out')) {
                                    id = $container.find('input[name=in-id]').val();
                                } else if ($this.hasClass('T-type-in')) {
                                    id = $container.find('input[name=out-id]').val();
                                }

                                $.ajax({
                                    url: KingServices.build_url('financialIncomeOrPay', 'selectBankAccount'),
                                    data: { id: id },
                                    showLoading: false,
                                    success: function(data) {
                                        if (showDialog(data)) {
                                            var cardNumberJson = [];
                                            var bankList = data.bankList;
                                            if (bankList && bankList.length > 0) {
                                                for (var i = 0; i < bankList.length; i++) {
                                                    var seatCount = {
                                                        value: "账户：" + bankList[i].accountName + ",余额：" + bankList[i].balance,
                                                        id: bankList[i].id
                                                    }
                                                    cardNumberJson.push(seatCount);
                                                }
                                                $this.autocomplete('option', 'source', cardNumberJson);
                                                $this.autocomplete('search', '');
                                            } else {
                                                layer.tips('没有内容', $that, {
                                                    tips: [1, '#3595CC'],
                                                    time: 2000
                                                });
                                            }
                                        }
                                    }
                                })
                            });
                        }
                    });
                }
            }
        });
    }

    /**
     * 新增现金日记：提交数据
     * @return {[type]} [description]
     */
    PaymentDetailUtil.submitPayment = function() {
        var form = $(".T-addPayment-container .T-form").serializeJson();
        form.bankId = form['card-id'] || form['cash-id'];
        form.bankIdIn = form['in-id'];
        form.bankIdOut = form['out-id'];
        delete(form['card-id']);
        delete(form['card-number']);

        $.ajax({
            url: KingServices.build_url("financialIncomeOrPay", "saveIncomeorPay"),
            type: "POST",
            data: form,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        $(".T-addPayment-container .T-close-payment").trigger('click');
                        PaymentDetailUtil.getList();
                    });
                }
            }
        });
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
                        var detailList=data.detailList;
                        for (var i = 0; i < detailList.length; i++) {
                            $('#T-tripNumber-layer').find('.T-number').eq(i).html(detailList[i].number+"");
                        };
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
                            PaymentDetailUtil.getList();
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

    /**
     * 获取收付款对象
     * @param  {string} resTypeText 类型描述
     * @param  {object} $container  父容器
     * @return {[type]}             [description]
     */
    PaymentDetailUtil._loadResTypeSelect = function(resTypeText, $container) {
        var resPayTypeList = [{ id: '20', name: '酒店' }, { id: '23', name: '车队' }],
            resRecTypeList = [{ id: '21', name: '购物' }, { id: '22', name: '客户' }],
            resTypeOption = "<select name='resourceType' class='col-sm-12 T-selct-rsType'>";
        if (resTypeText === "预付账款") {
            for (var i = 0; i < resPayTypeList.length; i++) {
                resTypeOption += "<option  value=" + resPayTypeList[i].id + ">" + resPayTypeList[i].name + "</option>";
            }
        }
        if (resTypeText === "预收账款") {
            for (var i = 0; i < resRecTypeList.length; i++) {
                resTypeOption += "<option  value=" + resRecTypeList[i].id + ">" + resRecTypeList[i].name + "</option>";
            }
        }
        resTypeOption += '</select>';
        if (resTypeText === "预收账款" || resTypeText === "预付账款") {
            $container.find(".T-resourceType").html(resTypeOption);
            $container.find('.T-resType').removeClass('hidden');
        } else {
            $container.find(".T-resourceType").html("");
            $container.find('.T-resType').addClass('hidden');
        }
        $container.find('input[name=resourceName]').val('').next().val('');
    };

    /**
     * 获取单位对象
     * @param  {object} $obj 当前对象
     * @param  {object} $tab 父容器
     * @return {[type]}      [description]
     */
    PaymentDetailUtil._getResourceList = function($obj, $tab) {
        var resourceTypeList = null;
        $obj.off('click').on('click', function() {
            var resourceType = $tab.find('[name=resourceType]').val();
            //修正change当resourceType作用域
            resourceTypeList = resourceType;
            if (!resourceType) {
                return;
            }
            $.ajax({
                    url: KingServices.build_url("cash", "findUnits"),
                    type: 'POST',
                    data: "resourceType=" + resourceType,
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var list = data.units;
                        if (list != null && list.length > 0) {
                            for (var i = 0; i < list.length; i++) {
                                list[i].value = list[i].name;
                                list[i].id = list[i].id;
                            };
                        } else {
                            layer.tips('没有内容', $obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                        $obj.autocomplete({
                            minLength: 0,
                            change: function(event, ui) {
                                if (!ui.item && !!resourceTypeList) {
                                    $(this).val('');
                                }
                            },
                            select: function(event, ui) {
                                $(this).val(ui.item.name).nextAll('[name=resourceId]').val(ui.item.id);
                            }
                        })
                        $obj.autocomplete('option', 'source', list);
                        $obj.autocomplete('search', '');
                    }
                });
        })
    };

    /**
     * [loadSubjectHtml 根据业务类别加载对应会计科目+]
     * @param  {[type]} type       [业务类别]
     * @param  {[type]} $container [容器]
     * @return {[type]}            [description]
     */
    PaymentDetailUtil.loadSubjectHtml = function(type,$container){
        var subList = false,subjectHtml = "";
        if(type == 0) { subList = PaymentDetailUtil.subList0; }
        else if(type == 1) { subList = PaymentDetailUtil.subList1; }
        else if(type == 2) { subList = PaymentDetailUtil.subList2; }  
        if(subList.length > 0){
            for(var i = 0; i < subList.length; i++){
                subjectHtml += "<option value=" + subList[i].id + ">" + subList[i].subjectName + "</option>";
            }
            $container.find(".T-subject").html(subjectHtml);
            $container.find("input[name=subjectName]").val(subList[0].subjectName);
            PaymentDetailUtil.loadResTypeSelect(subList[0].subjectName, $container);
        } else {
            showMessageDialog($("#confirm-dialog-message"),"会计科目列表为空，请先进行添加！",function(){
                $container.find(".T-subject").html("");
                $container.find("input[name=subjectName]").val("");
            });
        }
    };

    /**
     * [loadResTypeSelect 会计科目加载资源]
     * @param  {[type]} resTypeText [会计科目Text]
     * @param  {[type]} $container  [容器]
     * @return {[type]}             [description]
     */
    PaymentDetailUtil.loadResTypeSelect =function(resTypeText, $container){
        var resPayTypeList=[{id:'20',name:'酒店'}],resRecTypeList=[{id:'21',name:'购物'},{id:'22',name:'客户'}],
            resTypeOption="<select name='resourceType' class='col-sm-12 T-selct-rsType'>";
        if (resTypeText==="预付账款") {
           for(var i = 0; i < resPayTypeList.length; i++){
             resTypeOption+="<option  value=" + resPayTypeList[i].id + ">" + resPayTypeList[i].name + "</option>";
           }
        }
        if (resTypeText==="预收账款") {
            for(var i = 0; i < resRecTypeList.length; i++){
             resTypeOption+="<option  value=" + resRecTypeList[i].id + ">" + resRecTypeList[i].name + "</option>";
           }
        }
        resTypeOption+='</select>';
        if (resTypeText==="预收账款" || resTypeText==="预付账款") {
            $container.find(".T-resourceType").html(resTypeOption);
            $container.find('.T-resType').removeClass('hidden');
        }else{
            $container.find(".T-resourceType").html("");
            $container.find('.T-resType').addClass('hidden');
        }
        $container.find('input[name=resourceName]').val('').next().val('');
    };

    // 初始页面接口
    exports.init = PaymentDetailUtil.initMain;
    //收付款
    exports.viewDetails = PaymentDetailUtil.viewDetails;
});