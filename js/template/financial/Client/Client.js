/**
 * 财务管理--导游账务
 * 
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var menuKey = "financial_Client",
        listTemplate = require("./view/list"),
        ClientCheckingTemplate = require("./view/ClientChecking"),
        ClientClearingTemplate = require("./view/ClientClearing"),
        receivedTemplate = require('./view/received'),
        detailsTemplate = require('./view/details'),
        touristsTemplate = require('./view/tourists'),
        ClientCheckTab = "financial_Client_checking",
        ClientClearTab = "financial_Client_clearing",
        tabId = "tab-"+menuKey+"-content";
    
    var Client = {
        mock: false,
		searchData: false,
        $tab: false,
        $searchArea: false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        edited : {},
        oldBlanceClientId : false,
        oldCheckClientId : false,
        checkId : false
	};

    Client.initModule = function() {
        Client = $.extend({}, Client, 
            {
                mock: true,
                searchData: false,
                $tab: false,
                $searchArea: false,
                $checkSearchArea: false,
                $clearSearchArea : false,
                edited : {},
                oldBlanceClientId : false,
                oldCheckClientId : false,
                checkId : false
            }
            );
        Client.listClient(0);
    };	
    
    Client.listClient = function(page){
        var date = new Date(),
            year = date.getFullYear(),
            month = Tools.addZero2Two(date.getMonth() + 1),
            day = Tools.addZero2Two(date.getDate()),
            args = {
                pageNo : (page || 0),
                startDate : year + '-' + month + '-' + '01',
                endDate : year + '-' + month + '-' + day
            };
        if(Client.$tab){
            args = {
                pageNo : (page || 0),
                startDate : Client.$tab.find('.T-search-start-date').val(),
                endDate : Client.$tab.find('.T-search-end-date').val()
            };

            var $office = Client.$tab.find('.T-search-head-office'),
                $customer = Client.$tab.find('.T-search-customer'),
                val;

            if ($office.val() != '全部') {
                args.headerAgencyName = $office.val();

                val = $office.data('id');
                if (!!val) {
                    args.headerAgencyId = val;
                }
            }

            if ($customer.val() != '全部') {
                args.fromPartnerAgencyName = $customer.val();

                val = $customer.data('id');
                if (!!val) {
                    args.fromPartnerAgencyId = val;
                }
            }
        }
        $.ajax({
            url : KingServices.build_url('financial/customerAccount', 'listPager'),
            type : 'POST',
            data : args
        }).done(function(data){
            if(showDialog(data)){
                Tools.addTab(menuKey, "客户账务", listTemplate(data));
                Client.initList();
                // 绑定翻页组件
                laypage({
                    cont: Client.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.listClient(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };

    Client.datepicker = function($tab){
        $tab.find('.date-picker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
    };

    Client.initList = function(){
        // 初始化jQuery 对象
        Client.$tab = $('#' + tabId);

        Client.$searchArea = Client.$tab.find('.T-search-area');
        Client.getPartnerAgencyList(Client.$tab.find('.T-search-head-office'));
        Client.getTravelAgencyList(Client.$tab.find('.T-search-customer'));
        Client.datepicker(Client.$searchArea);

        //搜索按钮事件
        Client.$searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.listClient(0);
        });

        // 报表内的操作
        Client.$tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),$tr = $that.closest('tr'),
                agencyName = Client.$tab.find('.T-search-head-office').val(),
                options = {
                    pageNo: 0,
                    headerAgencyName : agencyName === '全部' ? '' : agencyName,
                    fromPartnerAgencyName : $tr.children('td').eq(1).text(),
                    fromPartnerAgencyId: $tr.data('id'),
                    name: $tr.children('td').eq(1).text(),
                    startDate : Client.$tab.find('.T-search-start-date').val(),
                    endDate : Client.$tab.find('.T-search-end-date').val()
                };

            if ($that.hasClass('T-checking')) {
                // 对账
                Client.ClientCheck(0, options);
            } else if ($that.hasClass('T-balance')) {
                // 结算
                Client.ClientClear(0, options);
            }
        });
    };

    Client.ClientCheck = function(pageNo, args, $tab){
        if(!!$tab){
            args = getBaseArgs($tab);
            args.fromPartnerAgencyId = $tab.data("id");
            partnerAgencyName = $tab.find('.T-partnerAgencyName').text();
        } else {
            partnerAgencyName = args.name;
        }

        Client.checkPageNo = args.pageNo = pageNo || 0;

        $.ajax({
            url : KingServices.build_url('financial/customerAccount', 'listCheckCustomerAcccount'),
            type : "POST",
            data : args
        }).done(function(data){
            if(showDialog(data)){
                data.partnerAgencyName = partnerAgencyName;
                data.fromPartnerAgencyId = args.fromPartnerAgencyId;
                data.searchParam.lineProductName = args.lineProductName || '全部';
                data.searchParam.creatorName = args.creatorName || '全部';
                // 合并数据
                Client.pushClearData(data, Client.clearDataArray);

                if (Tools.addTab(ClientCheckTab, "客户对账", ClientCheckingTemplate(data))) {
                    $tab = $('#tab-'+ ClientCheckTab + '-content');

                    Client.initCheck($tab);

                    // 绑定翻页组件
                    laypage({
                        cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.searchParam.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Client.ClientCheck(obj.curr - 1, false, $tab);
                            }
                        }
                    });
                }
            }
        });
    };

    Client.initCheck = function($tab){
        var id = $tab.find('.T-btn-save').data('id');
        $tab.data('id', id);
        var validator = (new FinRule(0)).check($tab);
        $tab.find(".T-List").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.ClientCheck(Client.checkPageNo, false, $tab);
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab, [tab_id, title, html])
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab)
        });

        // 初始化jQuery 对象 
        Client.$checkSearchArea = $tab.find('.T-search-area');
        Client.$checkSumArea = $tab.find('.T-sum-area');
        Client.$checkSumBackMoney = Client.$checkSumArea.find('.T-sumBackMoney');
        Client.$checksumSettlementMoney = Client.$checkSumArea.find('.T-sumSettlementMoney');
        Client.$checksumUnReceivedMoney = Client.$checkSumArea.find('.T-sumUnReceivedMoney');

        // 初始化下拉选项
        Client.getLineProductList(Client.$checkSearchArea.find('.T-search-line'), id);
        Client.getRecorderList(Client.$checkSearchArea.find('.T-search-enter'), id);

        Client.datepicker(Client.$checkSearchArea);

        //搜索按钮事件
        Client.$checkSearchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.ClientCheck(0, false, $tab);
        });

        //导出报表事件
        Client.$checkSearchArea.find('.T-btn-export').on('click', function(event){
            event.preventDefault();
                var $btn = $tab.find('.T-btn-save'),
                $datePicker = Client.$checkSearchArea.find('.date-picker'),
                args = {
                    fromPartnerAgencyId: $tab.data("id"), 
                    startDate: $datePicker.eq(0).val(),
                    endDate: $datePicker.eq(1).val(),
                    lineProductName: Client.$checkSearchArea.find('.T-search-line').val(),
                    lineProductId: Client.$checkSearchArea.find('.T-search-line').data('id'),
                    creatorName: Client.$checkSearchArea.find('.T-search-enter').val(),
                    creatorId: Client.$checkSearchArea.find('.T-search-enter').data('id')
                };
                Client.exportReport(args);
            });

        //给全选按钮绑定事件
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-list").find('.T-check'));

        //绑定表内事件
        $tab.find('.T-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-unfold')){
                Client.unfoldGroup($that);
            }else if($that.hasClass('T-receive')){
                Client.viewReceive(id);
            }else if($that.hasClass('T-view')){
                Client.viewDetails(id);
            }
        })
        .on('change', 'input', function(event) {
            event.preventDefault();
            var $that = $(this);

            // 只处理对账状态改变的数据
            if ($that.hasClass('T-check')) {
                $that.closest('tr').data('change', true);
            }
            $tab.data('isEdited', true);

            if ($that.hasClass('T-refund')) {
                // 反算金额
                Client.CalcCheckor($that);
            }
        });

        //确认对账按钮事件
        $tab.find(".T-btn-save").click(function(){ 
            if (!validator.form()) { return; }
            FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
                Client.saveCheckingData($tab);
            });
         });

        //关闭页面事件
        $tab.find(".T-btn-close").click(function(){
            Tools.closeTab(ClientCheckTab);
        });

    };

    /**
     * 通过返款计算当前行和合计的结算、未收
     * @param {object} $obj 返款输入框
     */
    Client.CalcCheckor = function($obj) {
        if ('undefined' === $obj || $obj.length != 1 || isNaN($obj.val())) {
            return;
        }

        var $tr = $obj.closest('tr').data('change', true),
            refundMoney = $obj.val(),  // 返款金额
            settlementMoney = $tr.find('.T-settlementMoney').text() *1,   // 结算金额
            unReceivedMoney = $tr.find('.T-unReceivedMoney').text() *1,   // 未收金额
            spread = $tr.find('.T-contractMoney').text() *1 - settlementMoney - refundMoney;

        $tr.find('.T-settlementMoney').text(settlementMoney + spread);
        $tr.find('.T-unReceivedMoney').text(unReceivedMoney + spread);
        Client.$checkSumBackMoney.text(Client.$checkSumBackMoney.text()*1 - spread);
        Client.$checksumSettlementMoney.text(Client.$checksumSettlementMoney.text()*1 + spread);
        Client.$checksumUnReceivedMoney.text(Client.$checksumUnReceivedMoney.text()*1 + spread);
    }

    Client.unfoldGroup = function($that){
        if ('undefined' === $that)  {
            return;
        }

        var $next = $that.closest('tr').next();

        if ($that.data('ajax')) {
            $that.text('收起' === $that.text()? '展开': '收起');
            $next.fadeToggle();
        } else {
            $.ajax({
                url: KingServices.build_url('financial/customerAccount', 'findTouristGroupDetail'),
                type: 'post',
                data: {touristGroupId: $that.closest('tr').data('gid')},
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.memberList = JSON.parse(data.memberList || false) || [];

                    $next.find('.T-group-list').html(touristsTemplate(data));
                    $that.data('ajax', true).trigger('click');
                }
            });            
        }
    };

    Client.viewReceive = function(id){
        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'findReciveCustomerAccountDetail'),
            type: 'post',
            data: {id: id},
        })
        .done(function(data) {
            if (showDialog(data)) {
                layer.open({
                    type: 1,
                    title:"已收金额明细",
                    skin: 'layui-layer-rim', 
                    area: '1024px', 
                    zIndex:1028,
                    content: receivedTemplate(data),
                    scrollbar: false
                });
            }
        });
    };

    /**
     * 查看对账明细
     * @param  {int} id 账务记录Id
     * @return {[type]}     [description]
     */
    Client.viewDetails = function(id){
        if (!!id) {
            $.ajax({
                url: KingServices.build_url('financial/customerAccount', 'findCheckCustomerAccountDetail'),
                type: 'post',
                data: {id: id},
            })
            .done(function(data) {
                if (showDialog(data)) {
                    layer.open({
                        type: 1,
                        title:"应收金额明细",
                        skin: 'layui-layer-rim', 
                        area: '1024px', 
                        zIndex:1028,
                        content: detailsTemplate(data),
                        scrollbar: false
                    });
                }
            });
        }
    };

    /**
     * 外调收款接口
     * @param  {object} options 设置
     * @return {[type]}         [description]
     */
    Client.initIncome = function(options) {
        Client.ClientClear(0, {
            pageNo:0,
            fromPartnerAgencyId: options.id,
            name: options.name,
            startDate: options.startDate,
            endDate: options.endDate,
            type: 1
        });
    }

    Client.ClientClear = function(pageNo, args, $tab) {
        var partnerAgencyName, type;

        if (!!$tab) {
            args = getBaseArgs($tab);
            args.fromPartnerAgencyId = $tab.data('id');

            partnerAgencyName = $tab.find('.T-partnerAgencyName').text();
            type = $tab.find('.T-btn-save').data('type');
        } else {
            partnerAgencyName = args.name;
            type =args.type;
        }

        args.pageNo = pageNo || 0;
        args.sortType = 'startTime';
        args.order='asc';
        $.ajax({
            url:KingServices.build_url("financial/customerAccount","listReciveCustomerAcccount"),
            type:"POST",
            data:args,
        }).done(function(data){
            if(showDialog(data)){
                data.type = type;
                data.partnerAgencyName = partnerAgencyName;
                data.fromPartnerAgencyId = args.fromPartnerAgencyId;

                data.searchParam.lineProductName = args.lineProductName || '全部';
                data.searchParam.creatorName = args.creatorName || '全部';
                
                if (Tools.addTab(ClientClearTab, "客户收款", ClientClearingTemplate(data))) {
                    $tab = $("#tab-"+ ClientClearTab + "-content").data('id', args.fromPartnerAgencyId);
                    Client.initClear($tab, args.fromPartnerAgencyId);                    

                    // 绑定翻页组件
                    laypage({
                        cont: $tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.searchParam.totalPage, //总页数
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                Client.cacheClearData($tab.find('.T-list'));
                                Client.ClientClear(obj.curr - 1, false, $tab);
                            }
                        }
                    });
                };
            }
        });
    };

    Client.initClear = function($tab, id){
        var id = $tab.find('.T-btn-save').data('id');
        
        Client.$clearSearchArea = $tab.find('.T-search-area');
        Client.$sumUnReceivedMoney = $tab.find('.T-sumReciveMoney');
        var validator = (new FinRule($tab.find('.T-btn-save').data('type') ? 3 : 1)).check($tab),
            autoValidator = (new FinRule(2)).check(Client.$clearSearchArea);

        $tab.data('id', id);

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.initClear($tab, id);
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab, [tab_id, title, html]);
            }
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab);
            }
        });

        Client.datepicker(Client.$clearSearchArea);
        FinancialService.initPayEvent(Client.$clearSearchArea);
        //Client.init_clear_event(id, $cleartab);
        // 初始化下拉选项
        Client.getLineProductList(Client.$clearSearchArea.find('.T-search-line'),  id);
        Client.getRecorderList(Client.$clearSearchArea.find('.T-search-enter'),  id);
        //搜索事件
        Client.$clearSearchArea.find(".T-btn-search").click(function(){
            Client.ClientClear(0, false, $tab);
        });

        //绑定表内事件
        var $body = $tab.find('.T-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-unfold')){
                Client.unfoldGroup($that);
            }else if($that.hasClass('T-receive')){
                Client.viewReceive(id)
            }else if($that.hasClass('T-view')){
                Client.viewDetails(id)
            }
        })
        .on('change', 'input', function(event) {
            event.preventDefault();
            var $that = $(this);

            $that.closest('tr').data('change', true);
            $tab.data('isEdited', true);

            if ($that.hasClass('T-reciveMoney')) {
                // 反算金额
                Client.CalcClear($that);
            }
        });
        // 自动下账
        $tab.find('.T-btn-autofill').on('click', function(event) {
            event.preventDefault();
            var $that = $(this);

            if ($that.hasClass('btn-primary')) {
                if (autoValidator.form()) {
                    Client.autoFillData($tab);
                }
            } else {
                Client.clearDataArray = [];
                $tab.data('isEdited', false);
                Client.setAutoFillEdit($tab, false);
            }
        });
        //确认对账按钮事件
        $tab.find(".T-btn-save").click(function(){ 
            if (!validator.form()) { return; }
            Client.saveClearData($tab);
         });

        //关闭页面事件
        $tab.find(".T-btn-close").click(function(){
            Tools.closeTab(ClientClearTab);
        });
    };

    /**
     * 结算金额反算方法
     * @param {object} $that 本次收款金额
     */
    Client.CalcClear = function($that) {
        if (isNaN($that.val()))  return;

        var old = $that.data('old') || 0,
            curr = $that.val() * 1,            
            spread = curr - old,
            sum = (Client.$sumUnReceivedMoney.val() || 0) * 1;
        
        Client.$sumUnReceivedMoney.val(sum + spread);

        $that.data('old', curr);
    }

    Client.autoFillData = function($tab) {
        if(!!$tab && $tab.length){
            var args = getBaseArgs($tab, 1);
            if(!args)return;
            FinancialService.autoPayConfirm(args.startDate, args.endDate, function() {
                args.fromPartnerAgencyId = $tab.data('id');
                args.sumTemporaryIncomeMoney = $tab.find('.T-sumReciveMoney').val();

                $.ajax({
                    url: KingServices.build_url('financial/customerAccount', 'autoCustomerAccount'),
                    type: 'post',
                    data: args,
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        Client.clearDataArray = data.customerAccountList;
                        var bankId = $tab.find('input[name=card-id]').val();
                        var voucher = $tab.find('input[name=credentials-number]').val();
                        var billTime = $tab.find('input[name=tally-date]').val();
                        var bankNumber = $tab.find('input[name=card-number]').val();
                        Client.clearDataArray.bankId = bankId;
                        Client.clearDataArray.voucher = voucher;
                        Client.clearDataArray.billTime = billTime;
                        Client.clearDataArray.bankNumber = bankNumber;
                        console.log(Client.clearDataArray);
                        $tab.find('.T-sumReciveMoney').val(data.realAutoPayMoney || 0);
                        var len = Client.clearDataArray.length;

                        $tab.find('.T-list').children('tr:nth-child(2n+1)').each(function() {
                            var $tr = $(this),
                                id = $tr.data('id'),
                                $receive = $tr.find('.T-reciveMoney'),
                                hasData = false;

                            for (var i = 0, tmp;i < len; i ++) {
                                tmp = Client.clearDataArray[i];

                                if (tmp.id === id) {
                                    hasData = true;
                                    $receive.val(tmp.temporaryIncomeMoney);
                                    return true;
                                }
                            }

                            if (!hasData) {
                                $receive.val('');
                                $tr.data('change', false);
                            }
                        })

                        Client.setAutoFillEdit($tab, true);
                    }
                });
            })
        }
    };

    /**
     * 自动下账的编辑状态
     * @param {object} $tab    父容器
     * @param {boolean} disable true: 禁用，false：启用
     */
    Client.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('.T-sumReciveMoney').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        if (!disable) {
            Client.ClientClear(0, false, $tab);
        }

    };
    /**
     * 缓存当前页面的数据
     * @param  {[type]} $body [description]
     * @return {[type]}       [description]
     */
    Client.cacheClearData = function($body) {
        if (!Client.clearDataArray) {
            Client.clearDataArray = []
        }

        $body.children('tr:nth-child(2n+1)').each(function() {
            var $tr = $(this);

            if ($tr.data('change')) {
                var $reciveMoney = $tr.find('.T-reciveMoney'),
                    reciveMoney = $reciveMoney.val(), 
                    item = {};

                if (!isNaN(reciveMoney)) {
                    item = {
                        temporaryIncomeMoney: reciveMoney,
                        incomeRemark: $tr.find('.T-remark').val(),
                        id: $tr.data('id')
                    }

                    // 设置值
                    var hasItem = false;
                    for (var i = 0, len = Client.clearDataArray.length, temp; i < len; i ++) {
                        temp = Client.clearDataArray[i];
                        if (temp.id === item.id) {
                            $.extend(Client.clearDataArray[i], temp, item);
                            hasItem = true;
                            break;
                        }
                    }

                    if (!hasItem) {
                        Client.clearDataArray.push(item);
                    }
                }
            }
        });
    };

    /**
     * 合并数据
     * @param  {object} dest 合并的目的地
     * @param  {object} src  源数据
     * @return {object}      合并的结果
     */
    Client.pushClearData = function(dest, src) {
        if (!!dest && dest.length) {
            if (!!src && src.length) {
                for (var i = 0, len = dest.length;i < len; i ++ ) {
                    for (var j = 0, cLen = src.length, tmp;j < cLen ; j++) {
                        if (dest[i].id === src[j].id) {
                            tmp = src[j];
                            dest[i].temporaryIncomeMoney = tmp.temporaryIncomeMoney;
                            dest[i].incomeRemark = tmp.incomeRemark;
                        }
                    }
                }
            }

            return dest;
        } else {
            return src || [];
        }
    }

    Client.saveCheckingData = function($tab, tabArgs){
        var JsonStr = [],
            selectFlag = 0,
            argLen = arguments.length,
            checkList = $tab.find('.T-list'),
            $tr = checkList.find('.T-check');
        $tr.each(function(i){
           var flag = $(this).is(":checked");
           var tr = $(this).closest('tr');
           if(flag){
                if(tr.attr("data-confirm") == 0 ){
                    var checkData = {
                        backMoney: tr.find('.T-refund').val(),
                        checkRemark: tr.find('.T-remark').val(),
                        isConfirmAccount: 1,
                        id: tr.data('id')
                    };
                    JsonStr.push(checkData);
                }
           }else{
                if(tr.attr("data-confirm") == 1){
                    var checkData = {
                        backMoney: tr.find('.T-refund').val(),
                        checkRemark: tr.find('.T-remark').val(),
                        isConfirmAccount: 0,
                        id: tr.data('id')
                    };  
                    JsonStr.push(checkData);
                }
           }
        });
        $.ajax({
            url:KingServices.build_url("financial/customerAccount","checkCustomerAccount"),
            type:"POST",
            data:{
                checkAccountList : JSON.stringify(JsonStr)
            },
            success:function(data){
                if(showDialog(data)){
                    $tab.data('isEdited', false);

                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if (argLen === 2) {
                            Client.listClient(0);
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                        } else {
                            Client.ClientCheck(0, false, $tab);
                        }
                    });
                }
            }
        });
    };

    Client.saveClearData = function($tab,tabArgs) {
        var argLen = arguments.length;
        var bankId = $tab.find('input[name=card-id]').val();
        var voucher = $tab.find('input[name=credentials-number]').val();
        var billTime = $tab.find('input[name=tally-date]').val();
        Client.cacheClearData($tab.find('.T-list'));

        $.ajax({
            url:KingServices.build_url("financial/customerAccount","receiveCustomerAccount"),
            type:"POST",
            data:{
                receiveAccountList : JSON.stringify(Client.clearDataArray),
                fromPartnerAgencyId: $tab.data('id'),
                payType: $tab.find('.T-sumPayType').val(),
                bankId:bankId,
                voucher:voucher,
                billTime:billTime,
                remark: $tab.find('.T-sumRemark').val()
            },
            success:function(data){
                if(showDialog(data)){
                    $tab.data('isEdited', false);
                    Client.clearDataArray = [];
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if (argLen === 2) {
                            Client.listClient(0);
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Client.initClear($tab.data('id'));
                        } else {
                            Client.ClientClear(0, false, $tab);
                        }
                    });
                }
            }
        });
	};

    //给每个tr增加验证
    Client.validatorTable = function(){
        var validator;
        var $tr = $("#tab-financial_Client-checking-content .T-checkList tr"),
            type = $("#tab-financial_Client-checking-content .T-btn-save").data('type');
        $tr.each(function(){
            validator = (new FinRule(type ? 3 : 1)).check($(this));
        });
        return validator;
    };

    /**
     * 获取总社
     * @param  {object} $obj 总社输入框的Jquery对象
     * @return {[type]}      [description]
     */
    Client.getPartnerAgencyList = function($obj){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).data('id', '');
                }
            },
            select: function(event, ui) {
                $(this).blur().data('id', ui.item.id);
                Client.$searchArea.find('.T-search-customer').data('ajax', false).val('全部');
            }
        }).on("click",function(){
            if (!$obj.data('ajax')) {  // 避免重复请求
                $.ajax({
                    url : KingServices.build_url('financial/customerAccount', 'selectHeaderAgency'),
                    type : "POST",
                    showLoading:false
                }).done(function(data){
                    for(var i=0; i<data.headerAgencyList.length; i++){
                        data.headerAgencyList[i].value = data.headerAgencyList[i].headerAgencyName;
                        data.headerAgencyList[i].id = data.headerAgencyList[i].headerAgencyId;
                    }
                    data.headerAgencyList.unshift({id:'', value: '全部'});
                    $obj.autocomplete('option', 'source', data.headerAgencyList);
                    $obj.autocomplete('search', '');

                    $obj.data('ajax', true);
                });
            } else {
                $obj.autocomplete('search', '');
            }
        }).on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            Client.$searchArea.find('.T-search-customer').data('ajax', false);
        });;
    };

    /**
     * 获取客户列表
     * @param  {object} $obj 客户列表搜索框的Jquery对象
     * @return {[type]}      [description]
     */
    Client.getTravelAgencyList = function($obj){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).data('id', '');
                }
            },
            select: function(event, ui) {
                $(this).blur().data('id', ui.item.id);
            }
        }).on("click",function(){
            if (!$obj.data('ajax')) {  // 避免重复请求
                var val = Client.$tab.find('.T-search-head-office').val();
                if (val === '全部') {
                    val = '';
                }

                $.ajax({
                    url : KingServices.build_url('financial/customerAccount', 'selectPartnerAgency'),
                    type : 'POST',
                    showLoading:false,
                    data : {headerAgencyName : val}
                }).done(function(data) {
                    for(var i=0; i<data.fromPartnerAgencyList.length; i++){
                        data.fromPartnerAgencyList[i].value = data.fromPartnerAgencyList[i].fromPartnerAgencyName;
                        data.fromPartnerAgencyList[i].id = data.fromPartnerAgencyList[i].fromPartnerAgencyId;
                    }
                    data.fromPartnerAgencyList.unshift({id:'', value: '全部'});
                    $obj.autocomplete('option', 'source', data.fromPartnerAgencyList);
                    $obj.autocomplete('search', '');
                    $obj.data('ajax', true);
                })
            } else {
                $obj.autocomplete('search', '');
            }
        });        
    };

    /**
     * 获取线路产品
     * @param  {object} $obj 搜索框
     * @return {[type]}      [description]
     */
    Client.getLineProductList = function($obj, id){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).data('id', '');
                }
            },
            select: function(event, ui) {
                $(this).blur().data('id', ui.item.id);
            }
        }).on("click",function(){
            if (!$obj.data('ajax')) {  // 避免重复请求
                $.ajax({
                    url : KingServices.build_url('financial/customerAccount', 'selectLineProduct'),
                    type : 'POST',
                    showLoading:false,
                    data: {fromPartnerAgencyId: id}
                }).done(function(data) {
                    for(var i=0; i<data.lineProductList.length; i++){
                        data.lineProductList[i].value = data.lineProductList[i].lineProductName;
                        data.lineProductList[i].id = data.lineProductList[i].lineProductId;
                    }
                    data.lineProductList.unshift({id:'', value: '全部'});

                    $obj.autocomplete('option', 'source', data.lineProductList);
                    $obj.autocomplete('search', '');
                    $obj.data('ajax', true);
                })
            } else {
                $obj.autocomplete('search', '');
            }
        });        
    };

    Client.getRecorderList = function($obj, id){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).data('id', '');
                }
            },
            select: function(event, ui) {
                $(this).blur().data('id', ui.item.id);
            }
        }).on("click",function(){
            if (!$obj.data('ajax')) {  // 避免重复请求
                $.ajax({
                    url : KingServices.build_url('financial/customerAccount', 'selectCreator'),
                    type : 'POST',
                    showLoading:false,
                    data: {fromPartnerAgencyId: id}
                }).done(function(data) {
                    for(var i=0; i< data.creatorList.length; i++){
                        data.creatorList[i].value = data.creatorList[i].creatorName;
                        data.creatorList[i].id = data.creatorList[i].creatorId;
                    }

                    data.creatorList.unshift({id:'', value: '全部'});

                    $obj.autocomplete('option', 'source', data.creatorList);
                    $obj.autocomplete('search', '');
                    $obj.data('ajax', true);
                })
            } else {
                $obj.autocomplete('search', '');
            }
        });        
    };

    Client.exportReport = function(args){
        args.lineProductName = args.lineProductName === "全部" ? "" : args.lineProductName;
        args.creatorName = args.creatorName === "全部" ? "" : args.creatorName;
        var str = '';
        for(var i in args){
            str += "&" + i + "=" + args[i];
        }
        exportXLS(KingServices.build_url('export', 'exportPartnerAgencyFinancial') + str);
    };

    function getBaseArgs($tab, isAuto) {
        var id = $tab.find('.T-search-enter').data('id'),
            args = {};
        if(isAuto){
            args = FinancialService.autoPayJson(id, $tab, new FinRule(2), 1);
            if(!args)return false;
        }
        args = {
            creatorId : id,
            lineProductId : $tab.find('.T-search-line').data('id'),
            lineProductName : $tab.find('.T-search-line').val(),
            creatorName : $tab.find('.T-search-enter').val(),
            startDate : $tab.find('.T-search-start-date').val(),
            endDate : $tab.find('.T-search-end-date').val()
        }
        console.log(args.lineProductId);
        if (args.lineProductName === '全部') {
            args.lineProductName = '';
        }

        if (args.creatorName === '全部') {
            args.creatorName = '';
        }    

        return args;
    }

    exports.init = Client.initModule;
    exports.initIncome = Client.initIncome;
});
