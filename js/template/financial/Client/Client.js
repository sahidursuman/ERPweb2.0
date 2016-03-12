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
                checkId : false
            }
            );
        Client.listClient(0);
    };  
    
    Client.listClient = function(page){
        var date = FinancialService.getInitDate(),

            args = {
                pageNo : (page || 0),
                startDate : date.startDate,
                endDate : date.endDate,
                accountStatus:2
            };

        if(Client.$tab){
            args = {
                pageNo : (page || 0),
                startDate : Client.$tab.find('.T-search-start-date').val(),
                endDate : Client.$tab.find('.T-search-end-date').val(),
                accountStatus:Client.$tab.find(".T-finance-status").find("button").data("value")
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
                Client.listPage = args.pageNo;
                Client.initList();
                Client.getListSumData(args,$('#' + tabId));
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

    Client.initList = function(){
        // 初始化jQuery 对象
        Client.$tab = $('#' + tabId);

        Client.$searchArea = Client.$tab.find('.T-search-area');
        Client.getPartnerAgencyList(Client.$tab.find('.T-search-head-office'));
        Client.getTravelAgencyList(Client.$tab.find('.T-search-customer'));
        Tools.setDatePicker(Client.$searchArea.find(".date-picker"), true);

        //搜索按钮事件
        Client.$searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.listClient(0);
        });
        //状态框选择事件
        Client.$searchArea.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
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
                    accountStatus: $tr.attr('accountStatus'),
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

    Client.getListSumData = function(args,$tab){
        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'listPagerTotal'),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.find('.T-sumCount').text(data.sumCount);
                $tab.find('.T-sumContractMoney').text(data.sumContractMoney);
                $tab.find('.T-sumStMoney').text(data.sumSettlementMoney);
                $tab.find('.T-sumReceiveMoney').text(data.sumReceiveMoney);
                $tab.find('.T-sumUnReceivedMoney').text(data.sumUnReceivedMoney);
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

                //费用明细处理
                var resultList = data.customerAccountList;
                for(var i = 0; i < resultList.length; i++){
                    var detailList = resultList[i].detailList,
                        transitLen = (detailList.transitFee.transitFeeList.length > 0) ? 1 : 0;
                    resultList[i].detailList = detailList;
                    if(resultList[i].status == 5){
                        resultList[i].rowLen = transitLen + detailList.otherFee.length;
                    } else {
                        resultList[i].rowLen = transitLen + ((detailList.otherFee.otherFeeList.length > 0) ? 1 : 0);
                    }
                    resultList[i].rowLen = (resultList[i].rowLen > 0) ? resultList[i].rowLen : 1;
                }
                data.customerAccountList = resultList; 
                
                if (Tools.addTab(ClientCheckTab, "客户对账", ClientCheckingTemplate(data))) {
                    $tab = $('#tab-'+ ClientCheckTab + '-content');

                    Client.initCheck($tab,args);
                } else {
                    Client.$checkTab.data("next",args);
                }

                // 绑定翻页组件
                laypage({
                    cont: Client.$checkTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.$checkTab.data('isEdited',false);
                            Client.ClientCheck(obj.curr - 1, false, $tab);
                        }
                    }
                });
            }
        });
    };

    Client.initCheck = function($tab,args){
        var id = $tab.find('.T-saveClear').data('id');
        $tab.data('id', id);
        var validator = (new FinRule(0)).check($tab);
        $tab.find(".T-checkList").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.initCheck($tab,Client.$checkTab.data("next"));
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab,args,[tab_id, title, html])
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab)
        });

        // 初始化jQuery 对象 
        Client.$checkTab = $tab;
        Client.$checkSearchArea = $tab.find('.T-search-area');
        Client.$checkSumArea = $tab.find('.T-sum-area');
        Client.$checkSumBackMoney = Client.$checkSumArea.find('.T-sumBackMoney');
        Client.$checksumSettlementMoney = Client.$checkSumArea.find('.T-sumSettlementMoney');
        Client.$checksumUnReceivedMoney = Client.$checkSumArea.find('.T-sumUnReceivedMoney');

        // 初始化下拉选项
        Client.getLineProductList(Client.$checkSearchArea.find('.T-search-line'), id);
        Client.getRecorderList(Client.$checkSearchArea.find('.T-search-enter'), id);
        Client.getPartnerContactList(Client.$checkSearchArea.find('.T-search-contact'),args);

        Tools.setDatePicker(Client.$checkSearchArea.find(".date-picker"), true);

        //搜索按钮事件
        Client.$checkSearchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.ClientCheck(0, false, $tab);
        });

        //导出报表事件
        Client.$checkSearchArea.find('.T-btn-export').on('click', function(event){
            event.preventDefault();
            var $btn = $tab.find('.T-saveClear'),
                $datePicker = Client.$checkSearchArea.find('.date-picker'),
                args = {
                    fromPartnerAgencyId: $tab.data("id"), 
                    startDate: $datePicker.eq(0).val(),
                    endDate: $datePicker.eq(1).val(),
                    lineProductName: Client.$checkSearchArea.find('.T-search-line').val(),
                    lineProductId: Client.$checkSearchArea.find('.T-search-line').data('id'),
                    creatorName: Client.$checkSearchArea.find('.T-search-enter').val(),
                    creatorId: Client.$checkSearchArea.find('.T-search-enter').data('id'),
                    otaOrderNumber : Client.$checkSearchArea.find('.T-search-number').val()
                };
            args.lineProductName = args.lineProductName === "全部" ? "" : args.lineProductName;
            args.creatorName = args.creatorName === "全部" ? "" : args.creatorName;
            FinancialService.exportReport(args,"exportPartnerAgencyFinancial");
        });

        //给全选按钮绑定事件
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

        FinancialService.updateMoney_checking($tab,3);
        //绑定表内事件
        $tab.find('.T-checkList').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-viewGroup')){
                Client.viewGroup($that.closest('tr').data('gid'));
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
            if ($that.hasClass('T-checkbox')) {
                $that.closest('tr').data('change', true);
                var rowpan = $that.closest('td').attr('rowspan') - 1,
                    $theTr = $that.closest('tr');
                for (var i = 0; i < rowpan; i++) {
                    $theTr.next().data('change', 'true');
                    $theTr =  $theTr.next();
                }
            }
            $tab.data('isEdited', true);
        });

        //确认对账按钮事件
        $tab.find(".T-saveClear").click(function(){ 
            if (!validator.form()) { return; }
            FinancialService.changeUncheck($tab.find('.T-checkList tr'), function(){
                Client.saveCheckingData($tab,args);
            },3);
         });

        //关闭页面事件
        FinancialService.closeTab(ClientCheckTab);

    };

    Client.viewGroup = function(id){
        if ('undefined' === id)  {
            showMessageDialog($("#confirm-dialog-message"),"游客小组不存在，请检查！");
            return false;
        }

        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'findTouristGroupDetail'),
            type: 'post',
            data: {touristGroupId: id},
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.memberList = JSON.parse(data.memberList || false) || [];
                var html = touristsTemplate(data);
                var addGuide = layer.open({
                    type: 1,
                    title:"查看小组",
                    skin: 'layui-layer-rim', //加上边框
                    area: '850px', //宽高
                    zIndex:1028,
                    content: html,
                    scrollbar: false
                });
            }
        });
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
            accountStatus : options.accountStatus,
            type: 1
        });
    }

    Client.ClientClear = function(pageNo, args, $tab) {
        var partnerAgencyName, type;

        if (!!$tab) {
            args = getBaseArgs($tab);
            args.fromPartnerAgencyId = $tab.data('id');

            partnerAgencyName = $tab.find('.T-partnerAgencyName').text();
            type = $tab.find('.T-saveClear').data('type');
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
                //费用明细处理
                var resultList = data.customerAccountList;
                for(var i = 0; i < resultList.length; i++){
                    var detailList = resultList[i].detailList,
                        transitLen = (detailList.transitFee.transitFeeList.length > 0) ? 1 : 0;
                    resultList[i].detailList = detailList;
                    if(resultList[i].status == 5){
                        resultList[i].rowLen = transitLen + detailList.otherFee.length;
                    } else {
                        resultList[i].rowLen = transitLen + ((detailList.otherFee.otherFeeList.length > 0) ? 1 : 0);
                    }
                    resultList[i].rowLen = (resultList[i].rowLen > 0) ? resultList[i].rowLen : 1;
                }
                data.customerAccountList = resultList; 
                
                if (Tools.addTab(ClientClearTab, "客户收款", ClientClearingTemplate(data))) {
                    $tab = $("#tab-"+ ClientClearTab + "-content").data('id', args.fromPartnerAgencyId);
                    Client.initClear($tab,args);  
                } else {
                    Client.$clearTab.data('next', args);
                }                  

                // 绑定翻页组件
                laypage({
                    cont: Client.$clearTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.cacheClearData($tab.find('.T-list'));
                            Client.$clearTab.data("isEdited",false);
                            Client.ClientClear(obj.curr - 1, false, $tab);
                        }
                    }
                });
            }
        });
    };

    Client.initClear = function($tab,args){
        var id = $tab.find('.T-saveClear').data('id');
        
        Client.$clearTab = $tab;
        Client.$clearSearchArea = $tab.find('.T-search-area');
        Client.$sumUnReceivedMoney = $tab.find('.T-sumReciveMoney');
        var validator = (new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1)).check($tab),
            autoValidator = (new FinRule(2)).check(Client.$clearSearchArea);

        $tab.data('id', id);

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.initClear($tab,Client.$clearTab.data("next"));
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab,args,[tab_id, title, html]);
            }
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab);
            }
        });

        Tools.setDatePicker(Client.$clearSearchArea.find(".date-picker"), true);
        FinancialService.initPayEvent(Client.$clearSearchArea);
        //Client.init_clear_event(id, $cleartab);
        // 初始化下拉选项
        Client.getLineProductList(Client.$clearSearchArea.find('.T-search-line'),  id);
        Client.getRecorderList(Client.$clearSearchArea.find('.T-search-enter'),  id);
        Client.getPartnerContactList(Client.$clearSearchArea.find('.T-search-contact'),args);
        //搜索事件
        Client.$clearSearchArea.find(".T-btn-search").click(function(){
            Client.ClientClear(0, false, $tab);
        });

        //绑定表内事件
        var $body = $tab.find('.T-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-viewGroup')){
                Client.viewGroup($that.closest('tr').data('gid'));
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
            var rowpan = $that.closest('td').attr('rowspan') - 1,
                $theTr = $that.closest('tr');
            for (var i = 0; i < rowpan; i++) {
                $theTr.next().data('change', 'true');
                $theTr =  $theTr.next();
            }

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
                    $tab.data('isEdited', true);
                }
            } else {
                Client.clearDataArray = [];
                $tab.data('isEdited', false);
                Client.setAutoFillEdit($tab, false);
            }
        });
        //确认付款按钮事件
        $tab.find(".T-saveClear").click(function(){ 
            var check =  new FinRule(5).check($tab);
            if(!check.form()){ return false; }
            if (!validator.form()) { return; }
            if(!$tab.data('isEdited')){
                showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
                return false;
            }

            var sum = parseFloat(Client.$sumUnReceivedMoney.val()),
                sumList = Client.$sumUnReceivedMoney.data("money");
            if (sumList === undefined) {  // 未修改付款的时候，直接读取
                sumList = parseFloat($tab.find('input[name=sumPayMoney]').val());
            }
            if(sum != sumList){
                showMessageDialog($("#confirm-dialog-message"),"本次收款金额合计与单条记录本次收款金额的累计值不相等，请检查！");
                return false;
            }

            if(sumList == 0){
                showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
                    Client.saveClearData($tab,args);
                })
            }else{
                Client.saveClearData($tab,args);
            }
            
         });

        //关闭页面事件
        FinancialService.closeTab(ClientClearTab);
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
            sum = (Client.$sumUnReceivedMoney.data("money") || 0) * 1;
        
        Client.$sumUnReceivedMoney.val(sum + spread);
        Client.$sumUnReceivedMoney.data("money",sum + spread);

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
                        var bankId = $tab.find('input[name=card-id]').val() || $tab.find('input[name=cash-id]').val();
                        var voucher = $tab.find('input[name=credentials-number]').val();
                        var billTime = $tab.find('input[name=tally-date]').val();
                        var bankNumber = $tab.find('input[name=card-number]').val() || $tab.find('input[name=cash-number]').val();
                        Client.clearDataArray.bankId = bankId;
                        Client.clearDataArray.voucher = voucher;
                        Client.clearDataArray.billTime = billTime;
                        Client.clearDataArray.bankNumber = bankNumber;
                        $tab.find('.T-sumReciveMoney').val(data.realAutoPayMoney || 0);
                        var len = Client.clearDataArray.length;

                        $tab.find('.T-list').children('tr').each(function() {
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

        $body.children('tr').each(function() {
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

    Client.saveCheckingData = function($tab,args,tabArgs){
        var argLen = arguments.length,
            JsonStr = FinancialService.saveJson_checking($tab);
        if(!JsonStr){return false;}

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
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_checking");
                            Client.listClient(Client.listPage);
                        } else if(argLen === 2){
                            Client.ClientCheck(args.pageNo,false, $tab);
                        } else if(argLen === 3){
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Client.initCheck($tab,args);
                        }
                    });
                }
            }
        });
    };

    Client.saveClearData = function($tab,args,tabArgs) {
        var argLen = arguments.length;
        var payType = $tab.find('.T-sumPayType').val(),
            bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
            voucher = $tab.find('input[name=credentials-number]').val(),
            billTime = $tab.find('input[name=tally-date]').val();
        Client.cacheClearData($tab.find('.T-list'));
        var JsonStr = Client.clearDataArray; 
        if(JsonStr.length==0){
            showMessageDialog($("#confirm-dialog-message"),'请选择需要收款的记录');
            return;
        };

        JsonStr = JSON.stringify(JsonStr);
        $.ajax({
            url:KingServices.build_url("financial/customerAccount","receiveCustomerAccount"),
            type:"POST",
            data:{
                receiveAccountList : JsonStr,
                fromPartnerAgencyId: $tab.data('id'),
                payType: payType,
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
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_clearing");
                            Client.listClient(Client.listPage);
                        } else if(argLen === 2){
                            Client.ClientClear(args.pageNo, false, $tab);
                        } else if(argLen === 3){
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Client.initClear($tab,args);
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
            type = $("#tab-financial_Client-checking-content .T-saveClear").data('type');
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

    Client.getPartnerContactList = function($obj,args){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $obj.val("");
                    $obj.data('id', '');
                }
            },
            select: function(event, ui) {
                $obj.blur().data('id', ui.item.id);
            }
        }).one('click', function(event) {
            $.ajax({
                url : KingServices.build_url('financial/customerAccount', 'selectPartnerContact'),
                type : 'POST',
                showLoading:false,
                data: args
            }).done(function(data) {
                var partnerContact = data.partnerContact;
                for(var i=0; i<partnerContact.length; i++){
                    partnerContact[i].value = partnerContact[i].contactRealname;
                    partnerContact[i].id = partnerContact[i].fromPartnerAgencyContactId;
                }
                partnerContact.unshift({id:'', value: '全部'});

                $obj.autocomplete('option', 'source', partnerContact);
                $obj.autocomplete('search', '').data('ajax', true);
            });
        }).on('click', function(event) {
            event.preventDefault();
            if ($obj.data('ajax')) {
                $obj.autocomplete('search', '');
            }
        });        
    };

    function getBaseArgs($tab, isAuto) {
        var id = $tab.find('.T-search-enter').data('id'),
            args = {};
        if(isAuto){
            args = FinancialService.autoPayJson(id, $tab, new FinRule(2), 1);
            if(!args)return false;
        }
        args = {
            orderNumber : $tab.find('.T-search-orderNumber').val(),
            otaOrderNumber : $tab.find('.T-search-number').val(),
            creatorId : id,
            lineProductId : $tab.find('.T-search-line').data('id'),
            lineProductName : $tab.find('.T-search-line').val(),
            creatorName : $tab.find('.T-search-enter').val(),
            startDate : $tab.find('.T-search-start-date').val(),
            endDate : $tab.find('.T-search-end-date').val(),
            accountStatus : $tab.find('[name=accountStatus]').val(),
            fromPartnerAgencyContactId : $tab.find('.T-search-contact').data('id'),
            contactRealname : $tab.find('.T-search-contact').val()
        }
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
