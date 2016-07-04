/**
 * 财务管理--客户账务
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
        feeDetailsTemplate = require('./view/feeDetails'),
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
        checkId : false,
        clearDataArray : false
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
                accountStatus:2,
                partnerAgencyType: '',
                sortType : "desc"
            };
        if(Client.$tab){
            args = {
                pageNo : (page || 0),
                startDate : Client.$tab.find('.T-search-start-date').val(),
                endDate : Client.$tab.find('.T-search-end-date').val(),
                accountStatus:Client.$tab.find(".T-finance-status").find("button").data("value"),
                unReceivedMoney : Client.$tab.find(".T-money-status").find("button").data("value"),
                partnerAgencyType: Client.$tab.find("[name=partnerAgencyType]").val(),
                sortType : Client.$tab.find("select[name=orderBy]").val(),
                fromPartnerAgencyId: Client.$tab.find("input[name=fromPartnerAgencyId]").val(),
                headerAgencyId: Client.$tab.find("input[name=headerAgencyId]").val() ,
                checkBalance: Client.$tab.find('.T-sumUnIncome').prop('checked') ? 1 : 0
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
        if(Client.$tab && Client.$tab.data('searchEdit')) { Client.partnerAgencyList = false;}
        args = FinancialService.getChangeArgs(args,Client.$tab);
        $.ajax({
            url : KingServices.build_url('financial/customerAccount', 'listPager'),
            type : 'POST',
            data : args
        }).done(function(data){
            if(showDialog(data)){
                Tools.addTab(menuKey, "客户账务", listTemplate(data));
                Client.listPage = args.pageNo;
                Client.initList(args);
                // 绑定翻页组件
                laypage({
                    cont: Client.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.listClient(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };

    Client.initList = function(args){
        // 初始化jQuery 对象
        Client.$tab = $('#' + tabId);

        if(!Client.$tab.data("searchEdit") && Client.$tab.data("total")){
            Client.loadListSumData(Client.$tab);
        } else {
            Client.getListSumData(args,Client.$tab);
        }
                

        Client.$searchArea = Client.$tab.find('.T-search-area');
        Client.getPartnerAgencyList(Client.$tab.find('.T-search-head-office'));
        if(Client.partnerAgencyList) {
            Client.loadTravelAgencyList(Client.$tab.find('.T-search-customer'));
        } else {
            Client.getTravelAgencyList(Client.$tab.find('.T-search-customer'));
        }
        
        Tools.setDatePicker(Client.$searchArea.find(".date-picker"), true);
        FinancialService.searchChange(Client.$tab);

        //搜索按钮事件
        Client.$searchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.listClient(0);
        });
        Client.$searchArea.find('[name=partnerAgencyType]').on('change', function(event) {
            event.preventDefault();
            Client.listClient(0);
        });
        // 导出
        Client.$searchArea.find(".T-client-export").click(function() {
            var args = {
                fromPartnerAgencyId: Client.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
                headerAgencyId: Client.$searchArea.find("input[name=headerAgencyId]").val() ,
                headerAgencyName: Client.$searchArea.find("input[name=headerAgencyName]").val(),
                fromPartnerAgencyName: Client.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
                startDate : Client.$searchArea.find('.T-search-start-date').val(),
                endDate : Client.$searchArea.find('.T-search-end-date').val(),
                partnerAgencyType: Client.$searchArea.find("[name=partnerAgencyType]").val(),
                accountStatus:Client.$searchArea.find(".T-finance-status").find("button").data("value"),
                unReceivedMoney : Client.$searchArea.find(".T-money-status").find("button").data("value"),
                sortType : Client.$searchArea.find("select[name=orderBy]").val(),
                checkBalance: Client.$tab.find('.T-sumUnIncome').prop('checked') ? 1 : 0
            };
            FinancialService.exportReport(args, "exportCustomer");
        });
        //状态框选择事件
        Client.$searchArea.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Client.$tab.data("searchEdit",true);
            Client.listClient(0);
        });
        Client.$searchArea.find(".T-money-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
             Client.$tab.data("searchEdit",true);
            Client.listClient(0);
        });

        //未收减去预收勾选事件
        Client.$searchArea.on('click','.T-sumUnIncome',function() {
            Client.clacReceivedMoney();
            
        })
        Client.clacReceivedMoney();
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
                    partnerAgencyName: $tr.children('td').eq(1).text(),
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
            } else if ($that.hasClass('T-view')) {
                //查看
                Client.ClientCheck(0, options, '', true)// 4参数为是否查看
            }
        });
    };

    Client.clacReceivedMoney = function () {
        //找到所有的tr  is(':checked')
        var $that = Client.$searchArea.find('.T-sumUnIncome');
            $trList = Client.$tab.find('.T-list').find('tr'), 
            checkStatus = $that.is(':checked');
        //遍历tr
        $trList.each(function() {
            function changeTwoDecimal($val){
                var newVal = parseFloat($val);

                if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
                    return 0;
                }
                var newVal = Math.round($val*100)/100;
                return newVal;
            };
            //准备数据
            var settlementMoney = changeTwoDecimal($(this).find('.T-settlementMoney').text()),
                receiveMoney = changeTwoDecimal($(this).find('.T-receiveMoney').text()),
                balance = changeTwoDecimal($(this).find('.T-advance').text()),
                unReceivedMoney = $(this).data('unincome'),
                $unReceivedMoney = $(this).find('.T-unReceivedMoney'),
                result = 0;
            if(checkStatus){
                result = changeTwoDecimal((settlementMoney-receiveMoney-balance));
            } else {
                result = unReceivedMoney;
            }
            $unReceivedMoney.text(result);
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
                $tab.data("total",data);
                Client.loadListSumData($tab);
            }
        });
    };  
    Client.loadListSumData = function($tab){
        var total = $tab.data("total");
        $tab.find('.T-sumCount').text(total.sumCount);
        $tab.find('.T-sumContractMoney').text(total.sumContractMoney);
        $tab.find('.T-sumStMoney').text(total.sumSettlementMoney);
        $tab.find('.T-sumReceiveMoney').text(total.sumReceiveMoney);
        $tab.find('.T-travelIncome').text(total.sumAgencyMoney);
        $tab.find('.T-guideIncome').text(total.sumGuideMoney);
        $tab.find('.T-sumUnReceivedMoney').text(total.sumUnReceivedMoney);
        $tab.find('.T-sumBalance').text(total.sumBalance);
    };

    Client.ClientCheck = function(pageNo, args, $tab, isView){
        if(!!$tab){
            args = getBaseArgs($tab);
            args.fromPartnerAgencyId = $tab.data("id");
        }
        partnerAgencyName = args.partnerAgencyName;

        Client.checkPageNo = args.pageNo = pageNo || 0;

        $.ajax({
            url : KingServices.build_url('financial/customerAccount', 'listCustomerAcccount'),
            type : "POST",
            data : args
        }).done(function(data){
            if(showDialog(data)){
                data.userInfoTravelAgencyId = IndexData.userInfo.travelAgencyId;
                data.partnerAgencyName = partnerAgencyName;
                data.fromPartnerAgencyId = args.fromPartnerAgencyId;
                //data.searchParam.lineProductName = args.lineProductName || '全部';
                data.searchParam.creatorName = args.creatorName || '全部';
                var resultList = data.customerAccountList;

                //费用明细处理
                var title = '客户对账', tab_id;
                if (isView) {
                    data.view = 1;
                    tab_id = ClientCheckTab + '-view';
                    title = '查看客户对账';
                }else {
                    data.view = '';
                    tab_id = 'financial_Client_checking';
                    if(Client.checkTemp && Client.checkTemp.length > 0 && !!$tab){
                        data.customerAccountList = FinancialService.getCheckTempData_checking(resultList,Client.checkTemp);
                        var total = $tab.data("total") || {};
                        total.sumBackMoney = Client.checkTemp.sumBackMoney;
                        total.sumSettlementMoney = Client.checkTemp.sumSettlementMoney;
                        total.sumUnReceivedMoney = Client.checkTemp.sumUnReceivedMoney;
                        $tab.data("total",total);
                    }
                }
                if (Tools.addTab(tab_id, title, ClientCheckingTemplate(data))) {
                    $tab = $('#tab-'+ tab_id + '-content').data('id', args.fromPartnerAgencyId);
                    if(Client.checkTemp && Client.checkTemp.length > 0){
                        $tab.data('isEdited',true);
                    }
                    if($tab.data("total")){
                        Client.loadSumData($tab);
                    } else {
                        Client.getCheckSumData(args,$tab);
                    }
                    
                    Client.initCheck($tab,args,isView);
                    FinancialService.checkAuthFilter($tab.find(".T-checkTr"),$tab.find(".T-checkList").data("right"));
                    Client.viewFeeDetails($tab,resultList);
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
                            if(!isView){
                                var temp = FinancialService.saveJson_checking(Client.$checkTab,Client.checkTemp,new FinRule(6));
                                if(!temp){
                                    return false;
                                } else {
                                    Client.checkTemp = temp;
                                    Client.$checkTab.data('isEdited',false);
                                Client.ClientCheck(obj.curr - 1, false, $tab);
                                }
                            } else {
                                Client.$checkTab.data('isEdited',false);
                                Client.ClientCheck(obj.curr - 1, false, $tab);
                            }
                        }
                    }
                });
            }
        });
    };

    Client.initCheck = function($tab,args,isView){
        var id = $tab.find('.T-search-area').data('id');
        $tab.data('id', id);
        var validator = (new FinRule(6)).check($tab);
        Client.getAgencyList($tab,false);
        $tab.find(".T-checkList").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.checkTemp = false;
            $tab.data("total","");
            Client.ClientCheck(Client.$checkTab.data("next").pageNo,Client.$checkTab.data("next"));
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab,Client.$checkTab.data("next"),[tab_id, title, html])
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) { return; }
            Client.saveCheckingData($tab)
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            Client.checkTemp = false;
            $tab.data("total","");
        });

        // 初始化jQuery 对象 
        Client.$checkTab = $tab;
        Client.$checkSearchArea = $tab.find('.T-search-area');
        Client.$checkSumArea = $tab.find('.T-sum-area');
        Client.$checkSumBackMoney = Client.$checkSumArea.find('.T-sumBackMoney');
        Client.$checksumSettlementMoney = Client.$checkSumArea.find('.T-sumSettlementMoney');
        Client.$checksumUnReceivedMoney = Client.$checkSumArea.find('.T-sumUnReceivedMoney');

        // 初始化下拉选项
        //Client.getLineProductList(Client.$checkSearchArea.find('.T-search-line'), id);
        Client.getRecorderList(Client.$checkSearchArea.find('.T-search-enter'), id);
        Client.getPartnerContactList(Client.$checkSearchArea.find('.T-search-contact'),args);

        Tools.setDatePicker(Client.$checkSearchArea.find(".T-time"), true);
        Tools.setDatePicker(Client.$checkSearchArea.find(".T-checkTime"), true);

        //搜索下拉事件
        Client.$checkSearchArea.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            $tab.data("total","");
            Client.ClientCheck(0, false, $tab, $(this).closest('.T-search-area').data('isview'));
        });
        //搜索按钮事件
        Client.$checkSearchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            $tab.data("total","");
            Client.ClientCheck(0, false, $tab, $(this).closest('.T-search-area').data('isview'));
        });

        //导出报表事件
        Client.$checkSearchArea.find('.T-btn-export').on('click', function(event){
            event.preventDefault();
            var $btn = $tab.find('.T-saveClear'),
                $datePicker = Client.$checkSearchArea.find('.date-picker'),
                argsData = {
                    fromPartnerAgencyId: $tab.data("id"), 
                    startDate: $datePicker.eq(0).val(),
                    endDate: $datePicker.eq(1).val(),
                    lineProductName: Client.$checkSearchArea.find('.T-search-line').val(),
                    lineProductId: Client.$checkSearchArea.find('.T-search-line').data('id'),
                    creatorName: Client.$checkSearchArea.find('.T-search-enter').val(),
                    creatorId: Client.$checkSearchArea.find('.T-search-enter').data('id'),
                    orderNumber : $tab.find('.T-search-orderNumber').val(),
                    contactInfo : $tab.find('.T-search-contactInfo').val(),
                    otaOrderNumber : $tab.find('.T-search-number').val(),
                    accountStatus : args.accountStatus,
                    isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                    startCheck : $tab.find('.T-checkStartTime').val(),
                    endCheck : $tab.find('.T-checkEndTime').val()
                };
            argsData.lineProductName = argsData.lineProductName === "全部" ? "" : argsData.lineProductName;
            argsData.creatorName = argsData.creatorName === "全部" ? "" : argsData.creatorName;
            FinancialService.exportReport(argsData,"exportPartnerAgencyFinancial");
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
            }else if($that.hasClass('T-open-tourist')){
                KingServices.viewTouristGroup($that.closest('tr').data('gid'));
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
        FinancialService.closeTab(isView ? ClientCheckTab + '-view' : ClientCheckTab);

    };

    Client.viewGroup = function(id){
        if ('undefined' === id)  {
            showMessageDialog("游客小组不存在，请检查！");
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
        Client.getTravelAgencyList();
        options.type = 1;
        Client.ClientClear(0, options);
    }

    Client.ClientClear = function(pageNo, args, $tab) {
        var partnerAgencyName, type;

        if (!!$tab) {
            args = getBaseArgs($tab);
            args.fromPartnerAgencyId = $tab.data('id');
            type = $tab.find('.T-saveClear').data('type');
            args.isAutoPay = $tab.find('.T-btn-autofill').hasClass('btn-primary') ? false : true; 
            args.sumPayType = $tab.find('[name=sumPayType]').val();
        } else {
            type =args.type;
        }
        partnerAgencyName = args.partnerAgencyName;

        args.pageNo = pageNo || 0;
        args.sortType = 'startTime';
        args.order='asc';
        $.ajax({
            url:KingServices.build_url("financial/customerAccount","listCustomerAcccount"),
            type:"POST",
            data:args,
        }).done(function(data){
            if(showDialog(data)){
                data.userInfoTravelAgencyId = IndexData.userInfo.travelAgencyId;
                data.type = type;
                data.partnerAgencyName = partnerAgencyName;
                data.fromPartnerAgencyId = args.fromPartnerAgencyId;

                //data.searchParam.lineProductName = args.lineProductName || '全部';
                data.searchParam.creatorName = args.creatorName || '全部';
                //费用明细处理
                var resultList = data.customerAccountList;
                if(Client.clearDataArray){
                    data = Client.pushClearData(data);
                }
                
                if (Tools.addTab(ClientClearTab, "客户收款", ClientClearingTemplate(data))) {
                    $tab = $("#tab-"+ ClientClearTab + "-content").data('id', args.fromPartnerAgencyId);
                    if(Client.clearDataArray){
                        $tab.data('isEdited',true);
                    }
                    if(args.isAutoPay){
                        Client.setAutoFillEdit($tab,true);
                    }
                    if($tab.data("total")){
                        Client.loadSumData($tab);
                    } else {
                        Client.getCheckSumData(args,$tab);
                    }
                    Client.initClear($tab,args);
                    Client.viewFeeDetails($tab,resultList);  
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
                            Client.cacheClearData(Client.$clearTab);
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
        Client.getAgencyList($tab,true);
        var validator = (new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1)).check($tab),
            autoValidator = (new FinRule(2)).check(Client.$clearSearchArea);

        FinancialService.updateSumPayMoney($tab,new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1));
        $tab.data('id', id);

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Client.clearDataArray = false;
            $tab.data("total","");
            Client.ClientClear(Client.$clearTab.data("next").pageNo,Client.$clearTab.data("next"));
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab,Client.$clearTab.data("next"),[tab_id, title, html]);
            }
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (autoValidator.form()) {
                Client.saveClearData($tab);
            }
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                Client.clearDataArray = false;
                $tab.data("total","");
            });

        Tools.setDatePicker(Client.$clearSearchArea.find(".T-time"), true);
        Tools.setDatePicker(Client.$clearSearchArea.find(".T-checkTime"), true);
        FinancialService.initPayEvent(Client.$clearSearchArea);
        //Client.init_clear_event(id, $cleartab);
        // 初始化下拉选项
        //Client.getLineProductList(Client.$clearSearchArea.find('.T-search-line'),  id);
        Client.getRecorderList(Client.$clearSearchArea.find('.T-search-enter'),  id);
        Client.getPartnerContactList(Client.$clearSearchArea.find('.T-search-contact'),args);
        //搜索事件
        Client.$clearSearchArea.find(".T-btn-search").click(function(){
            $tab.data("total","");
            Client.ClientClear(0, false, $tab);
        });
        //搜索下拉事件
        Client.$clearSearchArea.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            $tab.data("total","");
            Client.ClientClear(0, false, $tab);
        });

        //绑定表内事件
        var $body = $tab.find('.T-clearList').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-viewGroup')){
                Client.viewGroup($that.closest('tr').data('gid'));
            }else if($that.hasClass('T-receive')){
                Client.viewReceive(id)
            }else if($that.hasClass('T-view')){
                Client.viewDetails(id)
            }else if($that.hasClass('T-open-tourist')){
                KingServices.viewTouristGroup($that.closest('tr').data('gid'));
            }
        })
        .on('change', 'input', function(event) {
            event.preventDefault();
            var $that = $(this);

            $that.closest('tr').data('change', true);
            $tab.data('isEdited', true);
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
                Client.clearDataArray = false;
                $tab.data("total","");
                $tab.data('isEdited', false);
                Client.setAutoFillEdit($tab, false);
            }
        });
        //确认付款按钮事件
        $tab.find(".T-saveClear").click(function(){ 
            var check =  new FinRule(5).check($tab);
            if(!check.form()){ return false; }
            if (!validator.form()) { return; }
            Client.saveClearData($tab,args);
            
         });

        //关闭页面事件
        FinancialService.closeTab(ClientClearTab);
    };

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
                        Client.clearDataArray.sumPayMoney = $tab.find('input[name=sumPayMoney]');
                        Client.clearDataArray.sumPayType = $tab.find('select[name=sumPayType]');
                        var len = Client.clearDataArray.length;

                        $tab.find('.T-sumReciveMoney').data('money',args.sumTemporaryIncomeMoney);
                        $tab.find('.T-clearList').children('tr').each(function() {
                            var $tr = $(this),
                                id = $tr.data('id'),
                                $receive = $tr.find('.T-reciveMoney'),
                                hasData = false;

                            for (var i = 0, tmp;i < len; i ++) {
                                tmp = Client.clearDataArray[i];

                                if (tmp.id === id) {
                                    hasData = true;
                                    $receive.val(tmp.payMoney);
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
     */
    Client.cacheClearData = function($tab) {
        Client.clearDataArray = FinancialService.clearSaveJson($tab,Client.clearDataArray,new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1));
        var sumPayType = $tab.find('select[name=sumPayType]').val();
        Client.clearDataArray.sumPayMoney = $tab.find('input[name=sumPayMoney]').val();
        Client.clearDataArray.sumPayType = sumPayType;
        Client.clearDataArray.bankId = (sumPayType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
        Client.clearDataArray.voucher = $tab.find('input[name=credentials-number]').val();
        Client.clearDataArray.billTime = $tab.find('input[name=tally-date]').val();
        Client.clearDataArray.bankNumber = (sumPayType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
    };
    /**
     * 合并数据
     */
    Client.pushClearData = function(data) {
        data.customerAccountList = FinancialService.getTempDate(data.customerAccountList,Client.clearDataArray);
        data.sumPayMoney = Client.clearDataArray.sumPayMoney;
        data.sumPayType = Client.clearDataArray.sumPayType;
        data.bankId = Client.clearDataArray.bankId;
        data.bankNumber = Client.clearDataArray.bankNumber;
        data.voucher = Client.clearDataArray.voucher;
        data.billTime = Client.clearDataArray.billTime;
        return data;
    }

    Client.saveCheckingData = function($tab,args,tabArgs){
        var argLen = arguments.length,
            JsonStr = FinancialService.saveJson_checking($tab,Client.checkTemp,new FinRule(6),true);
        if(!JsonStr){return false;}

        $.ajax({
            url:KingServices.build_url("financial/customerAccount","checkCustomerAccount"),
            type:"POST",
            data:{
                checkAccountList : JsonStr
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog(data.message,function(){
                        $tab.data('isEdited', false);
                        Client.checkTemp = false;
                        $tab.data("total","");
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_checking");
                            Client.listClient(Client.listPage);
                        } else {
                            Client.ClientCheck(args.pageNo,args);
                        }
                    });
                }
            }
        });
    };

    Client.saveClearData = function($tab,args,tabArgs) {
        var check =  new FinRule(5).check($tab);
        if(!check.form()){ return false; }
        var validator = (new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1)).check($tab);
        if (!validator.form()) { return; }
            
        var argLen = arguments.length;
        var payType = $tab.find('select[name=sumPayType]').val(),
            bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
            voucher = $tab.find('input[name=credentials-number]').val(),
            billTime = $tab.find('input[name=tally-date]').val();
        var JsonStr = FinancialService.clearSaveJson($tab,Client.clearDataArray,new FinRule($tab.find('.T-saveClear').data('type') ? 3 : 1),true); 
        if(!JsonStr){ return false; }

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
                remark: $tab.find('.T-sumRemark').val(),
                sumPayMoney : $tab.find("input[name=sumPayMoney]").val()
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog(data.message,function(){
                        $tab.data('isEdited', false);
                        Client.clearDataArray = false;
                        $tab.data("total","");
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_clearing");
                            Client.listClient(Client.listPage);
                        } else {
                            args.isAutoPay = false;
                            Client.ClientClear(args.pageNo, args);
                        }
                    });
                }
            }
        });
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
                $(this).trigger('change');
                $(this).blur().data('id', ui.item.id);
                $(this).closest('div').find('input[name="headerAgencyId"]').val(ui.item.id);
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
        var val = "";
        if(!!Client.$tab){
            val = Client.$tab.find('.T-search-head-office').val();
             if (val === '全部') { val = ''; }
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
            Client.partnerAgencyList = JSON.stringify(data.fromPartnerAgencyList);
            Client.loadTravelAgencyList($obj);
        });       
    };

    Client.loadTravelAgencyList = function($obj){
        if(!!$obj){
            $obj.autocomplete({
                minLength: 0,
                source : FinancialService.parseList(Client.partnerAgencyList),
                change: function(event, ui) {
                    if (!ui.item)  {
                        $(this).data('id', '');
                    }
                },
                select: function(event, ui) {
                    $(this).trigger('change');
                    $(this).blur().data('id', ui.item.id);
                }
            }).on("click",function(){
                $obj.autocomplete('search', '');
            });
        }
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
                        data.creatorList[i].id = data.creatorList[i].creator;
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
            contactInfo : $tab.find('.T-search-contactInfo').val(),
            creatorId : id,
            lineProductId : $tab.find('.T-search-line').data('id'),
            lineProductName : $tab.find('.T-search-line').val(),
            creatorName : $tab.find('.T-search-enter').val(),
            startDate : $tab.find('.T-search-start-date').val(),
            endDate : $tab.find('.T-search-end-date').val(),
            accountStatus : $tab.find('[name=accountStatus]').val(),
            fromPartnerAgencyContactId : $tab.find('.T-search-contact').data('id'),
            partnerAgencyName : $tab.find(".T-partnerAgencyName").val(),
            contactRealname : $tab.find('.T-search-contact').val(),
            isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
            startCheck : $tab.find('.T-checkStartTime').val(),
            endCheck : $tab.find('.T-checkEndTime').val()
        }
        if (args.lineProductName === '全部') {
            args.lineProductName = '';
        }

        if (args.creatorName === '全部') {
            args.creatorName = '';
        }    

        return args;
    }

    Client.getAgencyList = function($tab,type){
        var $obj = $tab.find('.T-partnerAgencyName'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : JSON.parse(Client.partnerAgencyList),
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo:0,
                    fromPartnerAgencyId: ui.item.id,
                    partnerAgencyName : ui.item.value,
                    startDate: $tab.find('.T-search-start-date').val(),
                    endDate: $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                if(type){
                    if($tab.find('.T-btn-autofill').length == 0){
                        args.type = 1;
                    }
                    Client.ClientClear(0,args);
                } else {
                    Client.ClientCheck(0,args, false, $(this).closest('.T-search-area').data('isview'));
                }

                Client.getCheckSumData(args, $tab);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    //费用明细
    Client.viewFeeDetails = function($tab,resultList){
        $tab.find('.T-viewFeeDetails').off().on("click",function(){
            var index = $(this).data("index"),
                viewData = {
                    otherFee : resultList[index].detailList.otherFee
                };
            layer.open({
                type: 1,
                title:"费用明细",
                skin: 'layui-layer-rim', 
                area: '1024px', 
                zIndex:1028,
                content: feeDetailsTemplate(viewData),
                scrollbar: false
            });
        });
    };

    /* 获取合计数据 */
    Client.getCheckSumData = function(args,$tab){
        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'listCustomerAcccountTotal'),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.data("total",data);
                Client.loadSumData($tab);
            }
        });
    };
    Client.loadSumData = function($tab){
        var total = $tab.data("total");
        $tab.find(".T-sumCount").text(total.sumCount);
        $tab.find(".T-sumContractMoney").text(total.sumContractMoney);
        $tab.find(".T-sumReceiveMoney").text(total.sumReceiveMoney);
        $tab.find('.T-travelIncome').text(total.sumAgencyMoney);
        $tab.find('.T-guideIncome').text(total.sumGuideMoney);
        $tab.find(".T-sumBackMoney").text(total.sumBackMoney);
        $tab.find(".T-sumSettlementMoney").text(total.sumSettlementMoney);
        $tab.find(".T-sumUnReceivedMoney").text(total.sumUnReceivedMoney);
        $tab.find(".T-unpayMoney").text(total.checkedUnPayedMoney);
    };

    exports.init = Client.initModule;
    exports.initPayment = Client.initIncome;
});
