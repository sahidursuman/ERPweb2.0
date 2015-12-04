/**
 * 财务管理--导游账务
 * 未完全重构
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
	var rule = require("./rule"),
        menuKey = "financial_Client",
        listTemplate = require("./view/list"),
        ClientChecking = require("./view/ClientChecking"),
        ClientClearing = require("./view/ClientClearing"),
        recordTemplate = require("./view/record"),
        receivedTemplate = require('./view/received'),
        detailsTemplate = require('./view/details'),
        touristsTemplate = require('./view/tourists'),
        ClientCheckTab = "financial_Client_checking",
        ClientClearTab = "financial_Client_clearing",
        tabId = "tab-"+menuKey+"-content",
        validator;
    
    var Client = {
        mock: true,
		searchData: false,
        $tab: false,
        $searchArea: false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        edited : {},
        oldBlanceClientId : false,
        oldCheckClientId : false,
        chechingId : false
	};

    Client.initModule = function() {
        Client.listClient(0);
    };	
    
    Client.listClient = function(page){
        var date = new Date(),
            year = date.getFullYear(),
            month = Tools.addZero2Two(date.getMonth() + 1),
            day = Tools.addZero2Two(date.getDate()),
            args = {
                pageNo : (page || 0),
                startTime : year + '-' + month + '-' + '01',
                endTime : year + '-' + month + '-' + day
            };
        if(Client.$tab){
            args = {
                pageNo : (page || 0),
                startTime : Client.$tab.find('.T-search-start-date').val(),
                endTime : Client.$tab.find('.T-search-end-date').val()
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
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-checking')) {
                // 对账
                Client.chechModule(id);
            } else if ($that.hasClass('T-balance')) {
                // 结算
                Client.clearModule(id);
            }
        });
    };

    Client.chechModule = function(id){
        Client.chechingId = id;
        Client.$checkingTab = null;
        Client.ClientCheck(0, id);
    };

    Client.ClientCheck = function(page, id){
        var args = {
                pageNo : page || 0,
                partnerAgencyId : id || Client.chechingId,
                creatorId : '',
                lineProductId : '',
                lineProductName : '',
                creatorName : '',
                startTime :Client.$tab.find('.T-search-start-date').val(),
                endTime : Client.$tab.find('.T-search-end-date').val()
            };
        if(!!Client.$checkingTab){
            args = {
                pageNo : page || 0,
                partnerAgencyId : id || Client.chechingId,
                creatorId : Client.$checkingTab.find('.T-search-enter').data('id'),
                lineProductId : Client.$checkingTab.find('.T-search-line').data('id'),
                lineProductName : Client.$checkingTab.find('.T-search-line').val(),
                creatorName : Client.$checkingTab.find('.T-search-enter').val(),
                startTime : Client.$checkingTab.find('.T-search-start-date').val(),
                endTime :  Client.$checkingTab.find('.T-search-end-date').val()
            }
        }

        $.ajax({
            url : KingServices.build_url('financial/customerAccount', 'listCheckCustomerAcccount'),
            type : "POST",
            data : args
        }).done(function(data){
            if(showDialog(data)){
                Tools.addTab(ClientCheckTab, "客户对账", ClientChecking(data));
                Client.initCheck();
                // 绑定翻页组件
                laypage({
                    cont: Client.$checkingTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.ClientCheck(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };

    Client.initCheck = function(page,id){
        // 初始化jQuery 对象 
        Client.$checkingTab = $("#tab-" + ClientCheckTab + "-content");
        Client.$checkSearchArea = Client.$checkingTab.find('.T-search-area');

        //Client.init_check_event(id, $checktab);
        // 初始化下拉选项
        Client.getLineProductList(Client.$checkSearchArea.find('.T-search-line'));

        Client.datepicker(Client.$checkSearchArea);

        //搜索按钮事件
        Client.$checkSearchArea.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            Client.ClientCheck(0);
        });

        //给全选按钮绑定事件
        Client.$checkingTab.find(".T-checkAll").click(function(){
            var checkboxList = Client.$checkingTab.find(".T-checkList tr input[type=checkbox]");
            if($(this).is(":checked")){
                checkboxList.each(function(i){
                    $(this).prop("checked",true);
                });
            } else{
                checkboxList.each(function(i){
                	if(!$(this).prop("disabled")){
                		$(this).prop("checked",false);
                	}                                
                });
            } 
        });

        //关闭页面事件
        Client.$checkingTab.find(".T-btn-close").click(function(){
            Tools.closeTab(ClientCheckTab);
        });
        //确认对账按钮事件
        Client.$checkingTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(Client.$checkingTab);
            if (!validator.form()) { return; }
            Client.saveCheckingData(page,id);
         });

        //绑定表内事件
        Client.$checkingTab.find('.T-list').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this);
            if($that.hasClass('T-unfold')){
                Client.unfoldGroup($that);
            }else if($that.hasClass('T-receive')){
                Client.viewReceive($that)
            }else if($that.hasClass('T-view')){
                Client.viewDetails($that)
            }
        });

        //未收对账和返款内容变更后，计算并变更实际未收的值
        Client.$checkingTab.find("[name=unIncomeMoney]").keyup(function(){
            var checkUnIncomeMoney = $(this).val();
            var backMoney = $(this).parent().next().find("[name=backMoney]").val();
            var rs = checkUnIncomeMoney - backMoney;
            $(this).parent().next().next().find("[name=actualNotGet]").text(rs);
        });
        Client.$checkingTab.find("[name=backMoney]").keyup(function(){
            var checkUnIncomeMoney = $(this).parent().prev().find("[name=unIncomeMoney]").val();
            var backMoney = $(this).val();
            var rs = checkUnIncomeMoney - backMoney;
            $(this).parent().next().find("[name=actualNotGet]").text(rs);
        });
    };

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
                data: {touristGroupId: $that.data('touristGroupId')},
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.memberList = JSON.parse(data.memberList || false) || [];
                    data.memberList = [{
                        idCardNumber: 'D-1234-123456',
                        idCardType: 1,
                        isContactUser: 0,
                        mobileNumber: '15881158856',
                        name: 'roger wei'
                    },
                    {
                        idCardNumber: 'D-1234-123456',
                        idCardType: 0,
                        isContactUser: 1,
                        mobileNumber: '15881158856',
                        name: 'roger wei'
                    },
                    {
                        idCardNumber: 'D-1234-123456',
                        idCardType: 2,
                        isContactUser: 0,
                        mobileNumber: '15881158856',
                        name: 'roger wei'
                    },
                    ]

                    $next.find('.T-group-list').html(touristsTemplate(data));
                    $that.data('ajax', true).trigger('click');
                }
            });            
        }
    };

    Client.viewReceive = function($that){
        if ('undefined' === $that || !$that.length) {
            return;
        }
        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'findCustomerAccountDetail'),
            type: 'post',
            data: {id: $that.closest('tr').data('id')},
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.customerAcountDetailList = JSON.parse(data.customerAcountDetailList || false) || [];

                if (Client.mock) {
                    data.customerAcountDetailList = [
                        {
                            resourceType: '团款收入',
                            businessType: '游客管理-新增小组收入',
                            incomePart: '社收',
                            incomeMoney: '200',
                            incomeType: '现金',
                            remark: 'wa',
                            creatorName: '李四',
                            createTime: '2015-07-01 20:54:32'
                        },{
                            resourceType: '团款收入',
                            businessType: '游客管理-新增小组收入',
                            incomePart: '社收',
                            incomeMoney: '200',
                            incomeType: '现金',
                            remark: 'wa',
                            creatorName: '李四',
                            createTime: '2015-07-01 20:54:32'
                        },{
                            resourceType: '团款收入',
                            businessType: '游客管理-新增小组收入',
                            incomePart: '社收',
                            incomeMoney: '200',
                            incomeType: '现金',
                            remark: 'wa',
                            creatorName: '李四',
                            createTime: '2015-07-01 20:54:32'
                        }
                    ];
                }

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

    Client.viewDetails = function($that){
        layer.open({
            type: 1,
            title:"已收金额明细",
            skin: 'layui-layer-rim', 
            area: '1024px', 
            zIndex:1028,
            content: detailsTemplate(),
            scrollbar: false
        });
    };

    Client.clearModule = function(id){
        Client.clearingId = id;
        Client.$clearingTab = null;
        Client.ClientClear(0, id);
        //Client.
    };

    Client.ClientClear = function(page,id){
        /*
        var $tab =   $("#tab-"+menuKey + "-clearing"+"-content");
    	if ($tab.length && $tab.find('.T-saveClear').data('id') == id) {// 如果打开的是相同产品，则不替换
			$('.tab-financial_Client-clearing').children('a').trigger('click');
			return;
		}

        if (Client.$clearSearchArea && arguments.length === 1) {
            year = Client.$clearSearchArea.find("select[name=year]").val(),
            startMonth = Client.$clearSearchArea.find("select[name=startMonth]").val(),
            endMonth = Client.$clearSearchArea.find("select[name=endMonth]").val()
        }*/
        var args = {
                pageNo : page || 0,
                partnerAgencyId : id || Client.clearingId,
                creatorId : '',
                lineProductId : '',
                lineProductName : '',
                creatorName : '',
                startTime : Client.$tab.find('.T-search-start-date').val(),
                endTime : Client.$tab.find('.T-search-end-date').val()
            };
        if(!!Client.$clearingTab){
            args = {
                pageNo : page || 0,
                partnerAgencyId : id || Client.clearingId,
                creatorId : Client.$clearingTab.find('.T-search-enter').data('id'),
                lineProductId : Client.$clearingTab.find('.T-search-line').data('id'),
                lineProductName : Client.$clearingTab.find('.T-search-line').val(),
                creatorName : Client.$clearingTab.find('.T-search-enter').val(),
                startTime : Client.$clearingTab.find('.T-search-start-date').val(),
                endTime : Client.$clearingTab.find('.T-search-end-date').val()
            }
        }
        $.ajax({
            url:KingServices.build_url("financial/customerAccount","listReciveCustomerAcccount"),
            type:"POST",
            data:args,
            /*success:function(data){
                var result = showDialog(data);
                if(result){
                    data.financialPartnerAgencySettlementList = JSON.parse(data.financialPartnerAgencySettlementList);
                    data.id = id;
                    var html = ClientClearing(data);
                        
                    //设置表单验证
                    var validator = rule.check($('.ClientClearMain'));
                        
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "客户结算", html)) {
                        Client.initClear(id);                         
                    }
                    validator = rule.check($('.ClientClearMain'));
                }
            }*/
        }).done(function(data){
            if(showDialog(data)){
                Tools.addTab(ClientClearTab, "客户结算", ClientClearing(data));
                Client.initClear();
                // 绑定翻页组件
                laypage({
                    cont: Client.$clearingTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            Client.ClientCheck(obj.curr - 1);
                        }
                    }
                });
            }
        });
    };

    Client.initClear = function(){
        Client.$clearingTab = $("#tab-"+ ClientClearTab + "-content")

        Client.$clearSearchArea = Client.$clearingTab.find('.T-search-area');

        //Client.init_clear_event(id, $cleartab);

        //搜索事件
        Client.$clearSearchArea.find(".T-search").click(function(){
            Client.ClientClear(0);
        });

        //保存结算事件
        Client.$clearingTab.find(".T-saveClear").click(function(){
            if (!rule.check(Client.$clearingTab).form()) { return; }
            Client.saveBlanceData($(this),id);
        });

    };

    Client.saveCheckingData = function(page,id,tab_id, title, html){
        var $checktab = $("#tab-" + ClientCheckTab + "-content");
        if(!$checktab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = $checktab.find(".T-checkList"),argumentsLen = arguments.length;
        var checkRecordList = [];
        function getValue(className,name){
            var result = className.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var clientCheckingTr = $this.find(".T-checkTr");
        clientCheckingTr.each(function(){
            var touristGroupId = $(this).data("id");
            var checkUnIncomeMoney = getValue($(this),"unIncomeMoney");
            var unPayMoney = getValue($(this),"notGet");
            var backMoney = getValue($(this),"backMoney");
            var remark = getValue($(this),"remark");
            var idDelete = "";
            if ($(this).find(".T-checkbox").is(':checked')) {
                idDelete = 1;
            } else {
                idDelete = 0; 
            }
            var checkRecord = {
                touristGroupId : touristGroupId,
                checkUnIncomeMoney : checkUnIncomeMoney,//未收对账
                unPayMoney : unPayMoney,//未收
                backMoney : backMoney,//返款
                remark : remark,//说明
                idDelete : idDelete
            };
            checkRecordList.push(checkRecord);
        });
        checkRecordList = JSON.stringify(checkRecordList);
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","saveCheck"),
            type:"POST",
            data:{
                checkRecordList : checkRecordList
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 0){
                            Tools.closeTab("financial_Client-checking");
                             Client.listClient(Client.searchData.pageNo,Client.searchData.fromPartnerAgencyId,Client.searchData.fromPartnerAgencyName,Client.searchData.travelId,Client.searchData.travelName,Client.searchData.year,Client.searchData.month);
                        } else if(argumentsLen == 2){
                            $checktab.data('isEdited',false);
                            $checktab.find('.T-saveCheck').data('id',"");
                             Client.ClientCheck(page,$checktab.find(".T-data-id").data("id"),"","");
                        } else {
                            $checktab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Client.initCheck($checktab.find(".T-data-id").data("id"));
                        }
                    });
                }
            }
        });
    };

    Client.saveBlanceData = function($obj,id,tab_id, title, html){
        var $cleartab = $("#tab-" + ClientClearTab + "-content");
        if(!$cleartab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        if (!!$obj)  {
            $tr= $obj.closest('tr');
        } else{
            $tr = $cleartab.find(".T-clearList tr");
        }

        var clearJsonList = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id") + "",
                payMoney : $tr.eq(i).find("[name='payMoney']").val(),
                payType : $tr.eq(i).find("[name='payType']").val() + "",
                remark : $tr.eq(i).find("[name='remark']").val()
            };
            clearJsonList.push(clearJson);
		});
        clearJsonList = JSON.stringify(clearJsonList);
        $.ajax({
            url:KingServices.build_url("financial/financialParAgency","saveSettlement"),
            type:"POST",
            data:{
                clearJsonList : clearJsonList
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 0){
                            Tools.closeTab("financial_Client-clearing");
                            Client.listClient(Client.searchData.pageNo,Client.searchData.fromPartnerAgencyId,Client.searchData.fromPartnerAgencyName,Client.searchData.travelId,Client.searchData.travelName,Client.searchData.year,Client.searchData.month);
                        }else if(argumentsLen === 2){
                            $cleartab.data('isEdited',false);
                            $cleartab.find('.T-saveClear').data('id',"");
                            Client.ClientClear($cleartab.find(".T-data-id").data("id"),"","","");
                        } else {
                            $cleartab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            Client.initClear($cleartab.find(".T-data-id").data("id"));
                        }
                    });
                }
            }
        });
	};

    //给每个tr增加验证
    Client.validatorTable = function(){
        var validator;
        var $tr = $("#tab-financial_Client-checking-content .T-checkList tr");
        $tr.each(function(){
            validator = rule.check($(this));
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
                Client.$searchArea.find('.T-search-head-office').data('ajax', false);
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
        });
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
    Client.getLineProductList = function($obj){
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
                }).done(function(data) {
                    for(var i=0; i<data.lineProductList.length; i++){
                        data.lineProductList[i].value = data.lineProductList[i].lineProductName;
                        data.lineProductList[i].id = data.lineProductList[i].lineProductId;
                    }

                    if (Client.mock) {
                        data.lineProductList = [
                            {id: 1, value: '峨眉三日游'},
                            {id: 2, value: '峨眉1日游'},
                            {id: 3, value: '峨眉2日游'},
                        ];
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

    Client.init_check_event = function(id, $tab) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

            // 监听修改
            $tab.find(".T-checkList").off('change').on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				Client.initCheck($tab.find('.T-saveCheck').data('page'),$tab.find('.T-saveCheck').data('id'));
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                Client.saveCheckingData(0,Client.oldBlanceClientId,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                Client.saveCheckingData();
            });
        }
    };

    Client.init_clear_event = function(id, $tab) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

           $tab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
             $tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				Client.initClear($tab.find('.T-saveClear').data('id'));
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                Client.saveBlanceData("",Client.oldBlanceClientId,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                Client.saveBlanceData();
            });
        }
    };

    exports.init = Client.initModule;
});
