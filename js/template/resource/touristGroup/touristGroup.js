define(function(require, exports) {
    var menuKey = "resource_touristGroup",
        rule = require('./rule'),
        listTemplate = require('./view/list'),
        addTempLate = require('./view/add'),
        listMainTemplate = require('./view/listMain'),
        updateTemplate = require('./view/update'),
        viewTemplate = require('./view/view'),
        viewAccountsTemplate = require('./view/viewAccounts'),
        searchTemplate = require('./view/searchList'),
        lineproductSearchList = require("./view/lineproductSearchList"),
        addPartnerManagerTemplate = require('./view/addPartnerManager'),
        updateTransferTemplate = require('./view/updateTransfer'),
        updateTransferInTemplate = require('./view/updateTransferIn'),
        addVisitorMoreTemplate = require('./view/addVisitorMore'),
        chooseQuoteProductTemplate = require('./view/chooseQuoteProduct'),
        quoteListTemplate = require('./view/quoteList'),
        tabId = "tab-" + menuKey + "-content",
        updateTab = "tab-" + menuKey + "-update-content",
        addTabId = menuKey + "-add",
        updateTabId = menuKey + '-update',
        viewAccountsTabId = menuKey + "-viewAccounts",
        viewTabId = menuKey + "-view";
    var touristGroup = {
        $tab: false,
        $searchArea: false,
        validator: false,
        checkInnerValidator: false,
        autocompleteDate: {},
        typeFlag: 0,
        visitorId: 0,
        chooseQuoteProlayer: "",
        args: {
            pageNo: 0,
            type: 0,
            lineProductName: "",
            lineProductId: "",
            fromBussinessGroupName: "",
            fromBussinessGroupId: "",
            fromPartnerAgencyName: "",
            fromPartnerAgencyId: "",
            realName: "",
            outOPUserId: "",
            startTimeSearch: "",
            createTimeStart: "",
            createTimeEnd: "",
            statusSearch: "",
            customerType: "",
            memberType: "",
            contactInfo:"",
            sortType: 'auto'
        },
        touristGroupId: "",
        $freshData: false,
        isCheckFirst : true
    };
    var getFeeItemPayTypeOptions = {
        payType: 1,
        payType2:2
    };
    //游客管理页面初始化
    touristGroup.initModule = function() {
        touristGroup.$searchArea = false;
        touristGroup.listTouristGroup({
            pageNo: 0,
            type: 0,
            statusSearch:1,
            sortType: 'startTime',
            order:'asc'
        });
    };
    touristGroup.listTouristGroup = function($args) {
        //判断搜索区域的变化--是否改变条件
        if (touristGroup.$searchArea && arguments.length === 1) {
            var fromPartnerAgencyId, fromPartnerAgencyName, fromBussinessGroupName, fromBussinessGroupId;
            fromPartnerAgencyId = touristGroup.$searchArea.find("input[name=fromPartnerAgencyId]").val();
            fromPartnerAgencyName = touristGroup.$searchArea.find("input[name=fromPartnerAgencyName]").val();
            fromBussinessGroupId = touristGroup.$searchArea.find("input[name=fromBussinessGroupId]").val();
            fromBussinessGroupName = touristGroup.$searchArea.find("input[name=fromBussinessGroupName]").val();
            if (fromPartnerAgencyName == "全部") {
                fromPartnerAgencyId = "";
                fromPartnerAgencyName = "";
            };
            if (fromBussinessGroupName == "全部") {
                fromBussinessGroupId = "";
                fromBussinessGroupName = "";
            };
            $args = {
                pageNo: 0,
                type: touristGroup.$searchArea.find('.T-choosePorB').val(),
                lineProductName: touristGroup.$searchArea.find('input[name=lineProductName]').val(),
                lineProductId: touristGroup.$searchArea.find('input[name=lineProductId]').val(),
                fromBussinessGroupName: fromBussinessGroupName,
                fromBussinessGroupId: fromBussinessGroupId,
                fromPartnerAgencyName: fromPartnerAgencyName,
                fromPartnerAgencyId: fromPartnerAgencyId,
                realName: touristGroup.$searchArea.find('input[name=realName]').val(),
                quoteNumber: touristGroup.$searchArea.find('input[name=quoteNumber]').val(),
                outOPUserId: touristGroup.$searchArea.find('input[name=outOPUserId]').val(),
                otaOrderNumber: touristGroup.$searchArea.find('input[name=otaOrderNumber]').val(),
                contactInfo: touristGroup.$searchArea.find('input[name=contactInfo]').val(),
                startTimeSearch: touristGroup.$searchArea.find('input[name=startTime]').val(),
                createTimeEnd: touristGroup.$searchArea.find('input[name=createTimeEnd]').val(),
                createTimeStart: touristGroup.$searchArea.find('input[name=createTimeStart]').val(),
                statusSearch: touristGroup.$searchArea.find('.T-select-status').val(),
                customerType: touristGroup.$searchArea.find('select[name=customerType]').val(),
                memberType: touristGroup.$searchArea.find('select[name=memberType]').val(),
                orderNumber: touristGroup.$searchArea.find('input[name=orderNumber]').val(),
                sortType: 'startTime',
                'order': touristGroup.$searchArea.find('#order_by').val()
            }
        }
        //保存查询数据
        $.ajax({
            url: touristGroup.url("getTouristStatisticData", "view"),
            data: $args,
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listMainTemplate(data);
                    Tools.addTab(menuKey, '游客管理', html);
                    touristGroup.$tab = $("#" + tabId);
                    var $mainFormObj = touristGroup.$tab.find(".T-touristGroupSearchForm"),
                        $searchObj = $mainFormObj.find(".T-search-area");
                    touristGroup.$searchArea = $searchObj;
                    touristGroup.$freshData = $args;
                    //业务事件
                    touristGroup.initEvents();
                    //获取搜索区域的数据
                    touristGroup.getSearchAreaData();
                    //获取列表数据
                    touristGroup.getListData($args);
                    //获取搜索栏的数据
                    var $partnerAgencyObj = touristGroup.$tab.find(".T-choosePartnerAgency"); //来源--组团社对象
                    var $bussinessGroupObj = touristGroup.$tab.find(".T-chooseBussinessGroup"); //来源--业务部对象
                    var $lineProductObj = touristGroup.$tab.find(".T-chooseLineProduct"); //线路产品对象
                    var $outUserObj = touristGroup.$tab.find(".T-choose-outUserList"); //外联销售
                    //来源--组团社
                    touristGroup.getListPartnerAgencyList($partnerAgencyObj);
                    //来源--业务部
                    touristGroup.getBussinessList($bussinessGroupObj);
                    //线路产品
                    touristGroup.getLineProduct($lineProductObj);
                    //外联销售
                    touristGroup.getOutUserList($outUserObj);

                    //获取接站牌
                    //选择组团社与业务部
                    var $selectObj = $searchObj.find(".T-choosePorB");
                    $selectObj.on('change', function() {
                        touristGroup.choosePartnerAgencyOrBussiness($(this));
                    });
                    //格式化时间控件
                    touristGroup.formatTime($searchObj);
                }
            }
        });
    };
    //页面事件
    touristGroup.initEvents = function() {
        var $searchAreaObj = touristGroup.$searchArea;
        //选择框事件
        
        $searchAreaObj.find("select").on('change',  function(event) {
            event.preventDefault();
            touristGroup.listTouristGroup(touristGroup.getSearParam());
        });
        //搜索按钮事件
        $searchAreaObj.find(".T-touristGroupList-search").on('click', function(event) {
            event.preventDefault();
            touristGroup.listTouristGroup(touristGroup.args);
        });
        //新增小组事件
        $searchAreaObj.find(".T-touristGroup-add").on('click', function(event) {
            event.preventDefault();
            touristGroup.typeFlag = 1;
            touristGroup.addTouristGroup("", "");
        });

        //导出游客名单
        $searchAreaObj.find('.T-export').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var startTime=$searchAreaObj.find('input[name=startTime]').val();
            if (!!startTime && startTime!=null) {
                var exportUrl="" + KingServices.build_url("export","exportBuyInsuranceMember")+"&"+$.param(touristGroup.getSearParam($searchAreaObj));
                //window.location.href=exportUrl;
                exportXLS(exportUrl);
            }else{
                showMessageDialog($("#confirm-dialog-message"), "请选择出游时间");
                return;
            };
        });
    };

    //封装参数
    touristGroup.getSearParam = function($searchAreaObj){
        touristGroup.args = {
            pageNo: 0,
            type: touristGroup.$searchArea.find('.T-choosePorB').val(),
            lineProductName: touristGroup.$searchArea.find('input[name=lineProductName]').val(),
            lineProductId: touristGroup.$searchArea.find('input[name=lineProductId]').val(),
            fromBussinessGroupName: touristGroup.$searchArea.find('input[name=fromBussinessGroupName]').val(),
            fromBussinessGroupId: touristGroup.$searchArea.find('input[name=fromBussinessGroupId]').val(),
            fromPartnerAgencyName:  touristGroup.$searchArea.find('input[name=fromPartnerAgencyName]').val(),
            fromPartnerAgencyId: touristGroup.$searchArea.find('input[name=fromPartnerAgencyId]').val(),
            realName: touristGroup.$searchArea.find('input[name=realName]').val(),
            outOPUserId: touristGroup.$searchArea.find('input[name=outOPUserId]').val(),
            otaOrderNumber: touristGroup.$searchArea.find('input[name=otaOrderNumber]').val(),
            contactInfo: touristGroup.$searchArea.find('input[name=contactInfo]').val(),
            startTimeSearch: touristGroup.$searchArea.find('input[name=startTime]').val(),
            createTimeEnd: touristGroup.$searchArea.find('input[name=createTimeEnd]').val(),
            createTimeStart: touristGroup.$searchArea.find('input[name=createTimeStart]').val(),
            statusSearch: touristGroup.$searchArea.find('.T-select-status').val(),
            customerType: touristGroup.$searchArea.find('select[name=customerType]').val(),
            memberType: touristGroup.$searchArea.find('select[name=memberType]').val(),
            orderNumber: touristGroup.$searchArea.find('input[name=orderNumber]').val(),
            sortType: 'startTime',
            order: touristGroup.$searchArea.find('#order_by').val()
        }
        return touristGroup.args;         
    };

    //报表事件
    touristGroup.listEvents = function($listObj) {
        //报表事件
        $listObj.find(".T-touristGroupList").on('click', '.T-action', function() {
            var $that = $(this),
                $tr = $that.closest('tr'),
                touristGroupId = $tr.attr('id'),
                status = $tr.attr("data-status"),
                InnerTransfer = $tr.attr("data-InnerTransfer"); //副游客小组
            if ($that.hasClass('T-edit')) {
                if (!!status && status == 1 && !!InnerTransfer && InnerTransfer == 1) { //已内转
                    touristGroup.updateTransferIn(touristGroupId, status, InnerTransfer);
                } else if (!!status && status == 3 && !!InnerTransfer && InnerTransfer == 1) { //已内转
                    touristGroup.updateTransferIn(touristGroupId, status, InnerTransfer);
                } else if (!!status && status == 6 && !!InnerTransfer && InnerTransfer == 1) { //已内转
                    touristGroup.updateTransferIn(touristGroupId, status, InnerTransfer);
                } else {
                    //修改小组
                    touristGroup.updateTouristGroup(touristGroupId, "");
                    touristGroup.typeFlag = 2;
                };
            };
            if ($that.hasClass('T-view')) {
                //查看小组
                touristGroup.viewTouristGroupDetails(touristGroupId);
            };
            if ($that.hasClass('T-del')) {
                //删除小组
                showConfirmDialog($("#confirm-dialog-message"), "确定删除该条数据?", function() {
                    touristGroup.deleteGroup(touristGroupId);
                });
            };
        });
    };

    /**
     * updateTransferIn 内转确认
     * @param  {[type]} touristGroupId 游客小组ID
     * @return {[type]}
     */
    touristGroup.updateTransferIn = function(touristGroupId, status, InnerTransfer) {
        var typeOut = 'inner';
        //声明一个全局的游客小组ID用于跳转到中转安排
        touristGroup.visitorId = touristGroupId;
        $.ajax({
            url: touristGroup.url("viewTouristGroupDetails", "view"),
            data: "id=" + touristGroupId + "&type=" + typeOut,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var touristGroupInfo = JSON.parse(data.touristGroupDetail);
                    data.touristGroupDetail = touristGroupInfo;
                    var html = updateTransferInTemplate(data);
                    if (InnerTransfer == null || InnerTransfer == "" || InnerTransfer == undefined) {
                        if (Tools.addTab(updateTabId, "添加游客", html)) {
                            var $updateTabId = $('#' + updateTab);
                            $updateTabId.find('.T-touristReception', '.T-smallCar', '.T-touristSend').prop("checked", false);
                            touristGroup.updateEvents(typeOut);
                        }
                    } else if (!!status && !!InnerTransfer) {
                        if (Tools.addTab(updateTabId, "编辑游客", html)) {
                            typeOut = "";
                            touristGroup.updateEvents(typeOut);
                        }
                    }
                }
            }
        });
    };


    /**
     * updateTransfer   外转确认
     * @param  {[type]} touristGroupId 游客小组ID
     * @return {[type]}
     */
    touristGroup.updateTransfer = function(touristGroupId, id,status, InnerTransfer) {
        var typeOut = 'out';
        //声明一个全局的游客小组ID用于跳转到中转安排
        touristGroup.visitorId = touristGroupId;
        $.ajax({
            url: touristGroup.url("viewTransferTouristGroup", "view"),
            data: "id=" + touristGroupId + "&type=" + typeOut+"&transferId="+id,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var touristGroupInfo = JSON.parse(data.touristGroupDetail);
                    data.touristGroupDetail = touristGroupInfo;
                    var html = updateTransferTemplate(data);
                    //外转确认需清空线路产品
                    if (status == undefined || status == null || status == "") {
                        if (Tools.addTab(updateTabId, "添加游客", html)) {
                            var $updateTabId = $('#' + updateTab);
                            $updateTabId.find('input[name=accompanyGuideName]').val("");
                            $updateTabId.find('input[name=accompanyGuideMobile]').val("");
                            $updateTabId.find('input[name=otaOrderNumber]').val("");
                            $updateTabId.find('input[name=orderNumber]').val("");
                            touristGroup.updateEvents(typeOut);
                        }
                    } else if (!!status && !!InnerTransfer) {
                        if (Tools.addTab(updateTabId, "编辑游客", html)) {
                            typeOut = "";
                            touristGroup.updateEvents(typeOut);
                        }
                    }
                }
            }
        });
    };

    //添加游客小组
    touristGroup.addTouristGroup = function() {
        var data = {
            getPayType: getFeeItemPayTypeOptions.payType,
            getPayType2: getFeeItemPayTypeOptions.payType2,
            isTransfer: false
        };
        var html = addTempLate(data);
        if (Tools.addTab(addTabId, "添加游客", html)) {
            touristGroup.addEvents();
        }
    };

    //修改小组
    touristGroup.updateTouristGroup = function(id, type) {
        //判断打开的是否是同一个页面
        var $tab = $('#tab-' + updateTabId + '-content');
        if ($tab.length && $tab.find('.T-submit-updateTouristGroup').data('id') == id) { // 如果打开的是相同数据模板，则不替换
            $('.tab-' + updateTabId).children('a').trigger('click');
            return;
        };
        $.ajax({
            url: touristGroup.url("viewTouristGroupDetails", "view"),
            data: "id=" + id + "&type=" + type,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var touristGroupInfo = JSON.parse(data.touristGroupDetail);
                    data.touristGroupDetail = touristGroupInfo;
                    var html = updateTemplate(data);
                    if (Tools.addTab(updateTabId, '编辑小组', html)) {
                        touristGroup.visitorId = id;
                        var typeInner = type;
                        var status = data.touristGroupDetail.status;
                        touristGroup.updateEvents(typeInner, status);
                    }
                }
            }
        });
    };


    //添加小组事件绑定
    touristGroup.addEvents = function() {
        var $addTabId = $("#tab-resource_touristGroup-add-content"),
            $groupInfoForm = $addTabId.find(".T-touristGroupMainForm"), //小组信息对象
            $groupMemberForm = $addTabId.find(".T-touristGroupMainFormMember"), //游客名单对象
            $innerTransferForm = $addTabId.find(".T-touristGroupMainFormRS"); //中转安排对象
        //精度控制
        var $payedMoney = $groupInfoForm.find('input[name=payedMoney]'),
            $currentNeedPayMoney = $groupInfoForm.find('input[name=currentNeedPayMoney]'),
            $count = $groupInfoForm.find('.T-count'),
            $adultCount = $groupInfoForm.find('.T-adultCount'),
            $childCount = $groupInfoForm.find('.T-childCount');
        Tools.inputCtrolFloat($payedMoney);
        Tools.inputCtrolFloat($currentNeedPayMoney);
        Tools.inputCtrolFloat($count);
        Tools.inputCtrolFloat($adultCount);
        Tools.inputCtrolFloat($childCount);

        //外联计调默认是当前登录账号
        $groupInfoForm.find('.T-choose-opUserList').val(IndexData.userInfo.realName);
        $groupInfoForm.find('input[name=outOPUserId]').val(IndexData.userInfo.userId);

        //添加表单验证
        touristGroup.validator = rule.checktouristGroup($groupInfoForm);
        touristGroup.checkInnerValidator = rule.checkInnerTransfer($innerTransferForm);
        //添加tab切换
        touristGroup.init_CRU_event($addTabId);
        //小组信息模块处理
        touristGroup.groupInfoDispose($groupInfoForm);
        //游客名单模块处理
        touristGroup.groupMemberDispose($groupMemberForm);
        //中转安排处理
        touristGroup.innerTransferDispose($innerTransferForm);

        //初始化外联计调Autocomplate
        $opUserList = $addTabId.find('.T-choose-opUserList');
        touristGroup.getopUserList($opUserList);


        //报价单号
        $addTabId.find('.T-ChosenQuoteNumber').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            //报价单号的layer层
            var lineProductId = '',
                addType = '1';
            touristGroup.chooseQuoteProduct(lineProductId, addType);
        });

        touristGroup.orderNumberChange($addTabId)

        //提交按钮事件
        $addTabId.find(".T-submit-addTouristGroup").on('click', function() {
            if (!touristGroup.validator.form()) {
                return;
            }
            if (!touristGroup.checkInnerValidator.form()) {
                return;
            }
            touristGroup.installData($addTabId);
        });
    };
    //修改小组的事件绑定
    touristGroup.updateEvents = function(typeInner, status) {
        var id = touristGroup.visitorId,
            $updateTabId = $("#tab-resource_touristGroup-update-content"),
            $groupInfoForm = $updateTabId.find(".T-touristGroupMainForm"), //小组信息对象
            $groupMemberForm = $updateTabId.find(".T-touristGroupMainFormMember"), //游客名单对象
            $innerTransferForm = $updateTabId.find(".T-touristGroupMainFormRS"); //中转安排对象
        var $payedMoney = $groupInfoForm.find('input[name=payedMoney]'),
            $currentNeedPayMoney = $groupInfoForm.find('input[name=currentNeedPayMoney]'),
            $count = $groupInfoForm.find('.T-count'),
            $adultCount = $groupInfoForm.find('.T-adultCount'),
            $childCount = $groupInfoForm.find('.T-childCount');
        Tools.inputCtrolFloat($payedMoney);
        Tools.inputCtrolFloat($currentNeedPayMoney);
        Tools.inputCtrolFloat($count);
        Tools.inputCtrolFloat($adultCount);
        Tools.inputCtrolFloat($childCount);

        $groupInfoForm.find('.T-customerType').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if($updateTabId.find('.T-isEditStatus').val()==0 || $updateTabId.find('.T-isEditStatus').val()==2){
               showMessageDialog($("#confirm-dialog-message"), "该游客小组已生成发团计划不可修改");
               return;
            }
        });       
        //添加验证
        touristGroup.validator = rule.checktouristGroup($groupInfoForm);
        touristGroup.checkInnerValidator = rule.checkInnerTransfer($innerTransferForm);
        //添加tab切换
        touristGroup.init_CRU_event($updateTabId, id, 2, typeInner);
        //游客的序号
        touristGroup.memberNumber($groupMemberForm.find('.T-addTouristTbody'));        
        //小组信息模块处理
        touristGroup.groupInfoDispose($groupInfoForm, 2, typeInner);
        //游客名单模块处理
        touristGroup.groupMemberDispose($groupMemberForm, 2);
        //中转安排处理
        touristGroup.innerTransferDispose($innerTransferForm, 2);

        //外联计调Autocomplate
        $opUserList = $updateTabId.find('.T-choose-opUserList');
        touristGroup.getopUserList($opUserList);

        touristGroup.orderNumberChange($updateTabId)

        //报价单号
        $updateTabId.find('.T-ChosenQuoteNumber').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            //报价单号的layer层
            var lineProductId = '';
            touristGroup.chooseQuoteProduct(lineProductId);
        });

        //提交按钮事件
        $updateTabId.find(".T-submit-updateTouristGroup").on('click', function() {
            if (!touristGroup.validator.form()) {
                return;
            }
            if (!touristGroup.checkInnerValidator.form()) {
                return;
            }
            touristGroup.installData($updateTabId, id, 2, "", typeInner,status);
        });

        //格式化时间
        touristGroup.formatTime($updateTabId);


        $updateTabId.data('isEdited', false);

        //内转状态时   部分不可编辑
        if (status == 6) {
            $updateTabId.find('input[name=buyInsurance], input[name=orderNumber], .T-touristGroupMainForm input, .T-touristGroupMainForm select, .T-touristGroupMainForm textarea, .T-touristGroupMainFormMember input , .T-touristGroupMainFormMember select').attr('disabled','disabled');
            $updateTabId.find('.T-addPartner, .T-addPartnerManager, .T-touristGroup-addOtherCost, .T-add-tourist, .T-add-tourist-more, .oldbtnDeleteTourist, .T-delete').hide()
        }
    };
    //查看小组信息
    touristGroup.viewTouristGroupDetails = function(id,isTransferIn) {
        $.ajax({
            url: touristGroup.url("viewTouristGroupDetails", "view"),
            data: "id=" + id+"&type=" + isTransferIn +"&action=view",
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var touristGroupInfo = JSON.parse(data.touristGroupDetail);
                    data.touristGroupDetail = touristGroupInfo;

                    var html = viewTemplate(data);
                    Tools.addTab(viewTabId, "查看小组", html);
                    var $viewTabId = $("#tab-resource_touristGroup-view-content"),
                        $groupInfoForm = $viewTabId.find(".T-touristGroupMainForm"); //小组信息对象
                    $groupMemberForm = $viewTabId.find(".T-touristGroupMainFormMember"); //游客名单对象
                    $innerTransferForm = $viewTabId.find(".T-touristGroupMainFormRS"); //中转安排对象
                    //接送安排
                    touristGroup.innerTransferDispose($innerTransferForm, 2);
                    //游客的序号
                    touristGroup.memberNumber($groupMemberForm.find('.T-addTouristTbody'));

                    if (!!isTransferIn) {
                        $('#inner-TransferIn').find('.T-T-transferIn-search').trigger('click');
                    };
                }
                var $viewAccount = $("#tab-resource_touristGroup-view-content");
                    $viewAccount.find('.T-statementsBtn').off('click').on('click',function(){
                    var pluginKey = 'plugin_print';
                        Tools.loadPluginScript(pluginKey);
                        touristGroup.viewAccountList(id);
                });
            }
        });
    };
    /**
     * [viewAccountList 结算单打印]
     * @return {[type]} [description]
     */
    touristGroup.viewAccountList = function(id){ 
        $.ajax({
                url: touristGroup.url("viewPartnerSettlement", "viewAccounts"),
                data: "id=" + id+"&action=viewAccounts",
                type: 'POST',
                showLoading:false,
                success:function(data){
                    var result = showDialog(data);
                        if(result){
                            var imgUrl = data.ERP_IMG_URL;
                            var html = viewAccountsTemplate(data);
                            var viewAccountsLayer = layer.open({
                                type: 1,
                                title:"打印结算单",
                                skin: 'layui-layer-rim',
                                area: '750px', 
                                zIndex:1028,
                                content: html,
                                scrollbar: false
                            });
                        //打印结算单页面
                        var $outAccountsTab = $("#T-touristGroupViewAccount");
                            $outAccountsTab.off('click').on('click','.T-printAccountBtn',function(){
                            touristGroup.exportsOutAccounts($outAccountsTab);
                        });
                    }   
                }
        });       
    };

    //打印页面
    touristGroup.exportsOutAccounts = function($obj){
        $obj.print({
            globalStyles:true
        });
    };

    /**
     * getopUserList 获取外联计调数据
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    touristGroup.getopUserList = function($obj) {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getOutOPUserList"),
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var opUserList;
                    /* data.opUserList = JSON.parse(data.opUserList);*/
                    opUserList = data.outOPUserList;
                    if (!!opUserList && opUserList.length > 0) {
                        for (var i = 0; i < opUserList.length; i++) {
                            opUserList[i].value = opUserList[i].realName;
                        };
                    }
                    $obj.autocomplete({
                        minLength: 0,
                        change: function(event, ui) {
                            if (ui.item == null) {
                                var $that = $(this),
                                    $parents = $that.closest('div');
                                $parents.find("input[name=outOPUserId]").val("");
                            }
                        },
                        select: function(event, ui) {
                            var _this = this,
                                $parents = $(_this).closest('div');
                            $parents.find("input[name=outOPUserId]").val(ui.item.id).trigger('change');
                        },
                        source: opUserList
                    }).unbind("click").click(function() {
                        var obj = this,
                            $obj = $(obj);
                        if (!!opUserList && opUserList.length) {
                            $obj.autocomplete('search', '');
                        } else {
                            layer.tips('没有内容', obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    })
                }
            }
        });

    };


    //检查收客单号重复性
    touristGroup.orderNumberChange = function($tab) {
        $tab.find('.T-orderNumberChange').on('change', function() {
            var $this = $(this),
                orderNumber = $this.val(),
                touristGroupId = $tab.find('.T-submit-updateTouristGroup').data('entity-id');
            $.ajax({
                url: KingServices.build_url('touristGroup','validateOrderNumber'),
                type: 'POST',
                showLoading: false,
                data: {
                    orderNumber: orderNumber,
                    id: touristGroupId},
            })
            .done(function(data) {
                if (data.success == 0) {
                    $this.val('');
                    layer.tips('该收客单号已存在', $this, {
                        tips: [1, '#3595CC'],
                        time: 2000
                    });
                }
            })
        })
    }


    //删除小组
    touristGroup.deleteGroup = function(id) {
        $.ajax({
            url: touristGroup.url("deleteTouristGroup", "delete"),
            data: "id=" + id,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        touristGroup.listTouristGroup(touristGroup.args);
                    });
                }
            }
        });
    };
    //切换tab页面自动提示
    touristGroup.init_CRU_event = function($tab, id, typeFlag, typeInner) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
                .on('change', function(event) {
                    event.preventDefault();
                    $tab.data('isEdited', true);
                })
                // 监听保存，并切换tab
                .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                    event.preventDefault();
                    touristGroup.installData($tab, id, typeFlag, [tab_id, title, html], typeInner);
                })
                .on(SWITCH_TAB_BIND_EVENT, function(event) {
                    event.preventDefault();
                    //通过typeFlag来判断；1--新增的事件绑定；2--修改的事件绑定
                    if (typeFlag == 2) {
                        touristGroup.updateEvents(typeInner);
                    } else {
                        touristGroup.addEvents();
                    }
                    touristGroup.init_CRU_event($tab, $tab.find('.T-submit-updateTouristGroup').data('id'), typeFlag, typeInner);

                })
                // 保存后关闭
                .on(CLOSE_TAB_SAVE, function(event) {
                    event.preventDefault();
                    touristGroup.installData($tab, id, tabArgs, typeFlag, typeInner);
                });
        }
    };
    //处理小组信息
    touristGroup.groupInfoDispose = function($obj, typeFlag, typeInner) {
        //格式化时间控件
        touristGroup.formatTime($obj);
        //搜索线路
        $obj.find(".T-travelLine-search").on('click', function() {
            touristGroup.initLineProductSearch(typeFlag == 2, typeInner);
        });

         //选择出游日期带出完团日期
        $obj.find('.T-startTime').on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                startTime = $that.val(),
                $row = $that.closest('.form-inline');
            if (!!startTime && !!$obj.find('.T-days').val()) {
                $row.find('.T-endTime').val(Tools.addDay(startTime, $row.find('.T-days').val() - 1));
            }else{
                $row.find('.T-endTime').val(Tools.addDay(startTime, 0));
            }
               
        });
        //客户来源
        var $partnerAgencyObj = $obj.find('input[name=fromPartnerAgency]');
        touristGroup.getPartnerAgencyList($partnerAgencyObj);
        //同行联系人
        var $contactObj = $obj.find('input[name=partnerAgencyNameList]');
        touristGroup.getContactList($contactObj);
        //新增同行
        $obj.find('.T-addPartner').off('click').on("click", {
            function: KingServices.addPartnerAgency,
            type: ".form-group",
            name: "fromPartnerAgency",
            id: "fromPartnerAgencyId"
        }, KingServices.addResourceFunction);
        //新增同行联系人
        $obj.find('.T-addPartnerManager').on('click', function() {
            touristGroup.addPartnerManager($(this));
        });
        //新增费用项
        $obj.find('.T-touristGroup-addOtherCost').on('click', function() {
            touristGroup.addOtherCost($obj);
            touristGroup.validator = rule.checktouristGroup($obj);
        });
        //删除原有费用项
        if (typeFlag == 2) {
            //addCost-delete
            var $tbody=$obj.find('.T-addCostTbody');
            touristGroup.deleteTr($tbody, $obj);
        } else {
            var $tbody=$obj.find('.T-addCostTbody');
            touristGroup.deleteTr($tbody, $obj);
        };

        //根据单价数量计算金额
        touristGroup.calcPayMoney($obj);
        //数量、单价改变
        $obj.find('.T-count').trigger('change', touristGroup.calcPayMoney($obj));
        $obj.find('.T-price').trigger('change', touristGroup.calcPayMoney($obj));
    };



    touristGroup.deleteTr =function($tbody, $obj){
        $tbody.off('click').on('click', ".T-delete", function() {
            $tr = $(this).closest('tr');
            var costListTrId = $tr.attr("data-entity-id");
            if (costListTrId != null && costListTrId != "") {
                $tr.addClass("deleted");
                $tr.fadeOut(function() {
                    $(this).hide();
                    touristGroup.autoSumNeedPay($obj);
                })
            }else{
                $tr.addClass("deleted");
                $tr.fadeOut(function() {
                    $(this).hide();
                })
            }
            touristGroup.autoSumNeedPay($obj);
        });

    };


    /**
     * calcPayMoney 根据费用【单价、数量】项目计算金额
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    touristGroup.calcPayMoney = function($tab) {
        $tab.find('.T-addCostTbody').on('change', '.T-calc', function(event) {
            /* Act on the event */
            var $that = $(this),
                $tr = $that.closest('tr');
            if ($that.hasClass('T-count')) { //若数量改变
                var count = $tr.find('.T-count').val(),
                    price = $tr.find('.T-price').val(),
                    payMoney;
                if (!isNaN(price) && !isNaN(count)) {
                    payMoney = parseFloat(price * count);
                    $tr.find('.T-payMoney').val(payMoney);
                    touristGroup.autoSumNeedPay($tab);
                };

            } else if ($that.hasClass('T-price')) { //若价格改变
                var count = $tr.find('.T-count').val(),
                    price = $tr.find('.T-price').val(),
                    payMoney;
                if (!isNaN(price) && !isNaN(count)) {
                    payMoney = parseFloat(price * count);
                    $tr.find('.T-payMoney').val(payMoney);
                    touristGroup.autoSumNeedPay($tab);
                };
            };
        });
    };


    /**
     * 初始化选择线路的对话框
     * @param  {Boolean} isUpdate true：修改界面，false：添加界面
     * @return {[type]}           [description]
     */
    touristGroup.initLineProductSearch = function(isUpdate, typeInner) {
        var type = isUpdate ? 'update' : 'add',
            html = searchTemplate({
                update: type
            }),
            searchTravelLinelayer = layer.open({
                type: 1,
                title: "选择线路产品",
                skin: 'layui-layer-rim', //加上边框
                area: '85%', //宽高
                zIndex: 1029,
                content: html,
                scrollbar: false,
            });

        var $dialog = $('.T-lineproduct-search-' + type);
        touristGroup.getLineProductList($dialog, isUpdate ? 1 : 0);
        // touristGroup.getLineProductList($dialog, 1);

        // 选择线路产品
        $dialog.find('.T-searchtravelLine').on('click', function(event) {
            event.preventDefault();
            var $tr = $dialog.find('input[name="choice-TravelLine"]:checked').closest('tr'),
                $tab = $('#tab-resource_touristGroup-add-content'),startTime,
                lineProductId = $tr.data('id');

            if (lineProductId == null || lineProductId == '' || lineProductId == undefined) {
                showMessageDialog($("#confirm-dialog-message"), "请选择线路产品");
                return;
            };

            if (isUpdate) {
                $tab = $('#tab-resource_touristGroup-update-content');
            }

            $tab.find('input[name="lineProductIdName"]').val($tr.children('[name="travelLine-select"]').text()).trigger('change');
            $tab.find('input[name="lineProductId"]').val($tr.data('id'));
            $tab.find('.T-startTime').data('days',$tr.data('days'));
            $tab.find('.T-days').val($tr.data('days'));
            $tab.find('.T-addPartner').removeClass('hide');
            $tab.find('.T-addPartnerManager').removeClass('hide');

            startTime = $tab.find('.T-startTime').val();
            if (!!startTime) {
                $tab.find('.T-endTime').val(Tools.addDay(startTime, $tr.data('days') - 1));
            };
            var $form = $tab.find('.T-touristGroupMainForm');
            if (!!$form.find('.T-quoteNumber').val()) {
                // 有报价产品切换到普通线路产品，则清空报价的数据
                touristGroup.clearQuoteData($form);
            };


            layer.close(searchTravelLinelayer);
        });
    };

    //处理游客名单
    touristGroup.groupMemberDispose = function($obj, typeFlag) {
        //添加成员
        $obj.find('.T-add-tourist').on('click', function() {
            touristGroup.addVisotor($obj);
            touristGroup.validator = rule.checktouristGroup($obj);
        });
        //批量添加
        $obj.find('.T-add-tourist-more').on('click', function() {
            touristGroup.addVisotorMore($obj);
            touristGroup.validator = rule.checktouristGroup($obj);
        });
        // 删除游客
        $obj.find('.T-addTouristTbody').on('click', '.T-delete', function(event) {
            event.preventDefault();
            var $tr = $(this).closest('tr');
            var id = $tr.attr("data-entity-id");
            if (!!id && typeFlag == 2) {
                $tr.addClass("deleted");
                $tr.fadeOut(function() {
                    $tr.hide();
                })
            } else {
                $tr.fadeOut(function() {
                    $tr.remove();
                    touristGroup.memberNumber($obj.find('.T-addTouristTbody'));
                });
            };          
        });
    };
    //处理中转
    touristGroup.innerTransferDispose = function($obj) {
        //接团送团操作
        $obj.find('.T-recive .T-add-action').on('change', 'input[type="checkbox"]', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                $div = $that.closest('div.form-group'),
                $reciveText = $div.find('.T-recive-title'),
                $label = $that.closest('label.T-add-action'),
                type = $label.data('type'),
                reciveType = 0;

            //移除中转信息
            touristGroup.isRemoveRequire($obj,$that,$div,$reciveText,$label,type,reciveType);
        });

        //送团操作
        $obj.find('.T-send .T-add-action').on('change', 'input[type="checkbox"]', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                $div = $that.closest('div.form-group'),
                $sendText = $div.find('.T-send-title'),
                $label = $that.closest('label.T-add-action'),
                type = $label.data('type'),
                sendType = 1;
            //移除中转信息
            touristGroup.isRemoveRequire($obj,$that,$div,$sendText,$label,type,sendType);
        });

       
    }; //<div class="form-group">

    /**
     * isRemoveRequire 移除中转信息
     * @param  {[type]}  $that  当前复选框
     * @param  {[type]}  $div   
     * @param  {[type]}  $label 复选框label
     * @param  {[type]}  type  复选框标识
     * @return {Boolean}
     */
    touristGroup.isRemoveRequire = function($obj,$that,$div,$text,$label,type ,isReciveType){
        if ($that.is(":checked")) {
            touristGroup.addActionPlan($div,$text.text(),$label.text(), type,isReciveType);
        }else{
           removeRequire();
        }
       function removeRequire() {
            var $require = $div.find('.T-action-require-list .hct-plan-ask'),
                $checkedbox = $div.find('input[type="checkbox"]:checked');//获取选中对象
            if($require.length > 0){
                $require.each(function(index, el) {
                    var $inputParent = $(this),
                        thisType = $inputParent.data('type'),
                        title = $text.text(),
                        id = $inputParent.data('id');
                    if(type === thisType){
                        if(!!id){
                            $.ajax({
                                url: KingServices.build_url('touristGroup', 'deleteRequire'),
                                type: 'post',
                                data: {requireId: id},
                            })
                            .done(function(data) {
                                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                                    if (data.success!=0) { //没有有中转安排,可以删除
                                        $inputParent.remove();
                                    }else{
                                        $label.html('<input type="checkbox" class="ace" checked="checked"><span class="lbl">'+$label.text()+'</span>');
                                    };
                                    //当复选框未全部不选--移除共用选项
                                    if ($checkedbox.length==0  && data.success!=0) { //$("input[type='checkbox']:checked").length
                                        $div.find('.T-action-require-list').children('div.require-commons').remove();
                                    };
                                });
                            });
                        }else{
                            $inputParent.remove();
                            //当复选框未全部不选--移除共用选项
                            if ($checkedbox.length==0 ) { //$("input[type='checkbox']:checked").length
                                $div.find('.T-action-require-list').children('div.require-commons').remove();
                            };
                        }
                    }
                });
            }
        };
        touristGroup.checkInnerValidator = rule.checkInnerTransfer($obj);
    };

    /**
     * addActionPlan  添加特定复选框input控件
     * @param {[type]} $tab  
     * @param {[type]} textTitle 标题
     * @param {[type]} title 复选框内容
     * @param {[type]} type
     * @param {[type]} isReciveType  0 送  1 接
     */
    touristGroup.addActionPlan = function($tab,textTitle, title, type, isReciveType ){
        var list = '';
            if ($tab.find('.T-action-require-list').children('div.require-commons').length == 0 && isReciveType == 0 ) {
                list += '<div class="require-commons"><div class="form-inline" style="padding:14px 0 7px 14px;"><div class="fixed-width"><span class="necessary">*</span>'+
                        '<label class="mar-r-10">'+$.trim(textTitle)+'时间</label><input type="text" name="arriveTime" class="form-control date-picker datetimepicker" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 7px 14px;"><div class="fixed-width"><span class="necessary">*</span><label class="mar-r-10">'+$.trim(textTitle)+'地点</label><input type="text" name="arrivePosition" class="form-control" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 7px 20px;"><div class="fixed-width"><label class="mar-r-10">票务班次</label><input type="text" name="arriveShift" class="form-control" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 0 20px;"><div class="fixed-width"><label  class="mar-r-10">票务时间</label><input type="text" name="arriveShiftTime" class="form-control date-picker datetimepicker" />'+
                        '</div></div></div>'
            };
            if ($tab.find('.T-action-require-list').children('div.require-commons').length == 0 && isReciveType == 1 ) {
                list += '<div class="require-commons"><div class="form-inline" style="padding:14px 0 7px 14px;"><div class="fixed-width"><span class="necessary">*</span>'+
                        '<label class="mar-r-10">'+$.trim(textTitle)+'时间</label><input type="text" name="leaveTime" class="form-control date-picker datetimepicker" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 7px 14px;"><div class="fixed-width"><span class="necessary">*</span><label class="mar-r-10">'+$.trim(textTitle)+'地点</label><input type="text" name="leavePosition" class="form-control" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 7px 20px;"><div class="fixed-width"><label class="mar-r-10">票务班次</label><input type="text" name="leaveShift" class="form-control" /></div></div>'+
                        '<div class="form-inline" style="padding:0 0 0 20px;"><div class="fixed-width"><label class="mar-r-10">票务时间</label><input type="text" name="leaveShiftTime" class="form-control date-picker datetimepicker" />'+
                        '</div></div></div>'
            };
            list += '<div class="col-xs-10 hct-plan-ask" style="padding-bottom:0px;" data-type="'+type+'">'+
                    '<div class="pull-left hct-plan-ask-title  mar-l-10" style="width:auto;">'+$.trim(title)+'要求</div>'+
                    '<div class="pull-left hct-plan-ask-input" style="padding-left:65px;"><input type="text" class="col-xs-8" name="requireContent"></div>'+
                    '</div>';
        $tab.find('.T-action-require-list').append(list);
        //格式化时间
        touristGroup.formatTime($tab);
    };

    /**
     * 获取线路产品数据，并填入选择线路产品的对话框
     * @param  {object} $dialog dialog的Jquery对象
     * @param  {int} type    0：新增 1：更新
     * @param  {int} page    页码
     * @param  {string} name    搜索关键字
     * @return {[type]}         [description]
     */
    touristGroup.getLineProductList = function($dialog, type, page, name) {
        page = page || 0;
        var url = KingServices.build_url('lineProduct', 'findAll'),
            $tbody = $dialog.find('.T-normal-list');
        $.ajax({
                url: url,
                type: 'post',
                data: {
                    pageNo: page,
                    name: name
                },
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.lineProductList = JSON.parse(data.lineProductList);
                    $tbody.html(lineproductSearchList(data));

                    //搜索线路名称
                    $dialog.find('.T-btn-search').on('click', function(event) {
                        event.preventDefault();
                        /* Act on the event */
                        var $that=$(this),$searArea=$that.closest('.form-inline');
                        var name= $searArea.find('.T-productName').val();
                        touristGroup.getLineProductList($dialog, type, page, name);
                    });

                    $tbody.closest('.tab-pane').find('.T-total').text(data.recordSize);
                    // 绑定翻页组件
                    laypage({
                        cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (data.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                touristGroup.getLineProductList($dialog, type, obj.curr - 1, $dialog.find('input[name=lineProduct_name]').val());
                            }
                        }
                    });
                    // 让对话框居中
                    $(window).trigger('resize');
                }
            });
    };



    /**
     * chooseQuoteProduct 选择报价线路产品
     * @return {[type]} [description]
     */
    touristGroup.chooseQuoteProduct = function(lineProductId, addType) {
        var html = chooseQuoteProductTemplate();
        touristGroup.chooseQuoteProlayer = layer.open({
            type: 1,
            title: "选择报价线路产品",
            skin: 'layui-layer-rim', //加上边框
            area: '85%;', //宽高
            zIndex: 1029,
            content: html,
            scrollbar: false,
            success: function() {
                //报价线路初始化
                touristGroup.getQuoteLineProductList(0, lineProductId, addType);
            }
        });

    };

    /**
     * [getQuoteLineProductList description]
     * @param  {[type]} pageNo        [description]
     * @param  {[type]} lineProductId [description]
     * @return {[type]}               [description]
     */
    touristGroup.getQuoteLineProductList = function(pageNo, lineProductId, addType) {
        var $chooseQuotObj = $('#T-chooseQuoteProduct-layer'),
            name = '';
        $.ajax({
            url: KingServices.build_url("lineProduct", "listQuoteLinePorduct"),
            type: 'POST',
            data: "pageNo=" + pageNo + "&lineProductId=" + lineProductId + "&name=" + name,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var lineProductList = JSON.parse(data.lineProductList);
                    data.lineProductList = lineProductList;
                    //数据模板
                    var html = quoteListTemplate(data);
                    $chooseQuotObj.find('.T-chooseQuoteProduct-Content').html(html);
                    // 绑定翻页组件
                    laypage({
                        cont: $chooseQuotObj.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                touristGroup.getQuoteLineProductList(obj.curr - 1, lineProductId, addType);
                            }
                        }
                    });
                    //事件初始化
                    touristGroup.initQuoteEvents($chooseQuotObj, addType);
                    //resize
                    $(window).trigger('resize');

                }
            }
        });
    };


    /**
     * initQuoteEvents description
     * @param  {[type]} $chooseQuotObj 报价layer
     * @return {[type]}
     * 选择报价产品后
     * 带出线路产品、出游日期、客户来源、同行联系人、费用项的结算价的数量和单价、自动计算应收
     */
    touristGroup.initQuoteEvents = function($chooseQuotObj, addType) {
        //取消
        $chooseQuotObj.find('.T-cancel').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(touristGroup.chooseQuoteProlayer);
        });

        var $addTabId = $("#tab-resource_touristGroup-update-content");
        if (!!addType && addType == '1') {
            $addTabId = $("#tab-resource_touristGroup-add-content");
        };

        //保存
        $chooseQuotObj.find('.T-save').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $trList = $chooseQuotObj.find('tr'),
                ids = [],
                chooseQuotObj = {};
            $trList.each(function(i) {
                var $check = $trList.eq(i).find('.T-cheked');
                if ($check.is(':checked')) {
                    var $that = $(this),
                        $tr = $that.closest('tr'),
                        chooseQuot = {
                            quoteId: $tr.attr('data-quoteId'), //报价单号Id
                            quoteNumber: $tr.attr('data-quoteNumber'), //  报价单号名称
                            lineProductName: $tr.attr('data-lineProductName'),
                            lineProducId: $tr.attr('data-lineProducId'),
                            startTime: $tr.attr('data-startTime'),
                            days: $tr.attr('data-days'),
                            fromPartnerAgencyId: $tr.attr('data-fromPartnerAgencyId'),
                            fromPartnerAgencyName: $tr.attr('data-fromPartnerAgencyName'),
                            partnerAgencyContactName: $tr.attr('data-partnerAgencyContactName'),
                            partnerAgencyContactId: $tr.attr('data-partnerAgencyContactId'),
                            adultCount: $tr.attr('data-adultCount'),
                            adultPrice: $tr.attr('data-adultPrice'),
                            childCount: $tr.attr('data-childCount'),
                            childPrice: $tr.attr('data-childPrice'),
                            customerType:$tr.attr('data-customerType')
                        },
                        id = {
                            id: chooseQuot.quoteId
                        };
                    //选中报价后带出数据组装
                    chooseQuotObj = chooseQuot;
                    ids.push(id);
                }
            });
            touristGroup.clearQuoteData($addTabId.find('.T-touristGroupMainForm'));
            //带出线路产品、出游日期、客户来源、同行联系人、费用项的结算价的数量和单价、自动计算应收
            if (!!ids && ids.length > 0) {
                $addTabId.find('.T-quoteNumber').val(chooseQuotObj.quoteNumber);
                $addTabId.find('.T-quoteId').val(chooseQuotObj.quoteId);
                $addTabId.find('.T-lineProductId').val(chooseQuotObj.lineProducId);
                $addTabId.find('.T-lineProductIdName').val(chooseQuotObj.lineProductName);
                $addTabId.find('.T-startTime').val(chooseQuotObj.startTime.split(' ')[0]);
                $addTabId.find('.T-endTime').val(touristGroup.getEndTime(chooseQuotObj.days-1, chooseQuotObj.startTime.split(' ')[0]));
                $addTabId.find('.T-fromPartnerAgencyName').val(chooseQuotObj.fromPartnerAgencyName);
                $addTabId.find('.T-fromPartnerAgencyId').val(chooseQuotObj.fromPartnerAgencyId);
                $addTabId.find('.T-partnerAgencyNameList').val(chooseQuotObj.partnerAgencyContactName);
                $addTabId.find('.T-partnerAgencyContactId').val(chooseQuotObj.partnerAgencyContactId);
                $addTabId.find('.T-adultCount').val(chooseQuotObj.adultCount);
                $addTabId.find('.T-adultPrice').val(chooseQuotObj.adultPrice);
                $addTabId.find('.T-childCount').val(chooseQuotObj.childCount);
                $addTabId.find('.T-childPrice').val(chooseQuotObj.childPrice);
                $addTabId.find('.T-Fee-adultCount').val(chooseQuotObj.adultCount);
                $addTabId.find('.T-Fee-childCount').val(chooseQuotObj.childCount);
                $addTabId.find('.T-customerType').val(chooseQuotObj.customerType);
                $addTabId.find('.T-adultPrice').trigger('change');
                $addTabId.find('.T-childPrice').trigger('change');

                //设置只读属性
                touristGroup.setReadonly($addTabId, "quoteNumber");
                touristGroup.setReadonly($addTabId, "adultCount");
                touristGroup.setReadonly($addTabId, "childCount");
                touristGroup.setTimePicRe($addTabId, "startTime");
                touristGroup.setTimePicRe($addTabId, "endTime");
                touristGroup.setTimePicRe($addTabId, "fromPartnerAgency");
                touristGroup.setTimePicRe($addTabId, "partnerAgencyNameList");
                $addTabId.find('.T-addPartner').addClass('hide');
                $addTabId.find('.T-addPartnerManager').addClass('hide');
                layer.close(touristGroup.chooseQuoteProlayer);

            } else {
                showMessageDialog($("#confirm-dialog-message"), "请选择报价线路产品", function() {});
            };
        });
    };
    //删除小组
    touristGroup.deleteGroup = function(id) {
        $.ajax({
            url: touristGroup.url("deleteTouristGroup", "delete"),
            data: "id=" + id,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        touristGroup.listTouristGroup(touristGroup.args);
                    });
                }
            }
        });
    };

    /**
     * 用报价产品信息，初始化小组页面
     * @param  {object} $mainForm   对应小组页面容器
     * @param  {int} lineId 报价产品的索引
     * @return {[type]}        [description]
     */
    touristGroup.initQuoteData = function($mainForm, quoteId) {
        if (!!quoteId) {
            $.ajax({
                    url: KingServices.build_url('lineProduct', 'findQuoteLineProduct'),
                    type: 'post',
                    showLoading: false,
                    data: {
                        id: quoteId
                    },
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        touristGroup.setQuoteData($mainForm, JSON.parse(data.quoteLinePorduct || false));
                    }
                });

        }
    }


    /**
     * [getTransitPlanRequest  获取中转安排数据
     * @param  {[type]} $tab     [description]
     * @param  {[type]} sendType 送
     * @return {[type]}          [description]
     */
    touristGroup.getTransitPlanRequest = function($tab, sendType) {
        if ( sendType ==0 ) { 
            var reciveArgs = [];
                $tab.find('.T-receive-list .hct-plan-ask').each(function(index) {
                    var $that = $(this);
                    reciveArgs.push({
                        id : $that.data("id") || "",
                        requireContent : $that.find('[name="requireContent"]').val(),
                        requireType : $that.data("type") || ""
                    });
                });
            return reciveArgs;
        }else{
            var sendArgs = [];
                $tab.find('.T-leave-list .hct-plan-ask').each(function(index) {
                    var $that = $(this);
                    sendArgs.push({ 
                        id : $that.data("id") || "",
                        requireContent : $that.find('[name="requireContent"]').val(),
                        requireType : $that.data("type") || ""
                    });
                });
            return sendArgs;
        };
        
    };

    /**
     * 设置报价产品数据到游客小组
     * @param {object} $mainForm 游客小组的父容器
     * @param {object} data 报价产品的数据
     */
    touristGroup.setQuoteData = function($mainForm, data) {
        if (!!data) {
            setData('startTime', data.startTime); //出游日期
            var isUpdate = $mainForm.hasClass('T-update');
            setData('startTime', data.startTime.split(' ')[0]).prop('disabled', true).nextAll('span, .fa').addClass('hidden'); //出游日期
            setData('fromPartnerAgency', data.partnerAgency.travelAgencyName).nextAll('.T-addPartner').addClass('hidden');; //客户来源
            setData('fromPartnerAgencyId', data.partnerAgency.id); //客户来源的索引
            setData('partnerAgencyNameList', data.partnerAgencyContact.contactRealname).nextAll('.T-addPartnerManager').addClass('hidden'); //同行联系人
            setData('partnerAgencyContactId', data.partnerAgencyContact.id); //同行联系人的索引
            setData('adultCount', data.adultCount); //大人人数
            setData('adultPrice', data.adultQuotePrice); //大人单价
            setData('childCount', data.childCount); //小孩人数
            setData('childPrice', data.childQuotePrice); //小孩单价

            $mainForm.find('input[name="childPrice"]').trigger('change');
        }

        function setData(name, val) {
            $mainForm.find('[name="' + name + '"]').val(val).prop('readonly', true);
            var $name = $mainForm.find('[name="' + name + '"]');

            if (!!isUpdate) {
                $name.data('old', $name.val());
            }

            $name.val(val).prop('readonly', true).trigger('change');
            return $name;
        }
    };

    /**
     * 选择线路产品时，需要清理报价数据
     * @param  {object} $mainForm 游客小组的父容器
     * @return {[type]}      [description]
     */
    touristGroup.clearQuoteData = function($mainForm) {
        var names = [
            'startTime',
            'endTime',
            'fromPartnerAgency',
            'fromPartnerAgencyId',
            'partnerAgencyNameList',
            'partnerAgencyContactId',
            'adultCount',
            'adultPrice',
            'childCount',
            'childPrice',
            'quoteNumber'
        ];

        names.forEach(function(name) {
            $mainForm.find('[name="' + name + '"]').val('').prop('readonly', false);
            var $name = $mainForm.find('[name="' + name + '"]'),
                val = $mainForm.hasClass('.T-update') ? $name.data('old') : '';
            $name.val(val).prop('readonly', false).prop('disabled', false).nextAll('span,.fa').removeClass('hidden');
        });
        $mainForm.find('input[name="childPrice"]').trigger('change');
    };
    //获取线路产品
    touristGroup.searchLinproduct = function(typeFlag, pageNo, name, tabFlag) {
        $.ajax({
            url: KingServices.build_url("lineProduct", "findAll"),
            data: "pageNo=" + pageNo + "&name=" + name,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var lineProductInfo = JSON.parse(data.lineProductList);
                    data.lineProductList = lineProductInfo;
                    if (lineProductInfo != null && lineProductInfo.length > 0) {
                        for (var i = 0; i < lineProductInfo.length; i++) {
                            lineProductInfo[i].value = lineProductInfo[i].name;
                        }
                    }
                    var html = searchTemplate(data);
                    if (typeFlag) {
                        searchLinproductLayer = layer.open({
                            type: 1,
                            title: '选择线路',
                            skin: 'layui-layer-rim',
                            area: '70%',
                            zIndex: 1028,
                            scrollbar: false,
                            content: html
                        });
                    } else {
                        $("#layui-layer" + searchLinproductLayer + "").find(".layui-layer-content").html(html);
                    }
                    var $searchPanel = $("#T-chooseLineProductId"); //获取面板
                    //绑定翻页
                    laypage({
                        cont: $searchPanel.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (data.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                var name = $searchPanel.find('input[name=lineProduct_name]').val();
                                touristGroup.searchLinproduct(false, obj.curr - 1, name);
                            }
                        }
                    });
                    //搜索事件
                    $searchPanel.find('.T-lineProduct-search').off('click').on('click', function() {
                        var name = $searchPanel.find('input[name=lineProduct_name]').val();
                        touristGroup.searchLinproduct(false, 0, name);
                    });
                    //提交事件
                    $searchPanel.find('.T-searchtravelLine').off('click').on('click', function() {
                        touristGroup.saveLineproduceJson($searchPanel, tabFlag);
                        layer.close(searchLinproductLayer);
                    });
                }
            }
        });
    };
    //选择线路的提交按钮事件
    touristGroup.saveLineproduceJson = function($searchPanel, typeFlag) {
        var $addVisitorObj;
        if (typeFlag != 2) {
            $addVisitorObj = $("#tab-resource_touristGroup-add-content")
        } else {
            $addVisitorObj = $("#tab-resource_touristGroup-update-content")
        }

        var $parentObj = $addVisitorObj.find('.T- ');
        var lineProductName = $parentObj.find('input[name=lineProductIdName]');
        var lineProductId = $parentObj.find('input[name=lineProductId]');
        var $tr = $searchPanel.find('tbody tr'),
            name = "",
            id = "";
        $tr.each(function(i) {
            var $selectFlag = $(this).find('input[name=choice-TravelLine]').is(":checked");
            var $that = $(this);
            if ($selectFlag) {
                name = $that.find('td[name=travelLine-select]').text();
                id = $that.find('td[name=travelLine-select]').attr("data-travelLine-Id");
            };
            lineProductName.val(name).trigger('change');
            lineProductId.val(id);
        });
    };
    //添加游客
    touristGroup.addVisotor = function($obj) {
        var html = '<tr>' +
            '<td>' + '</td>' +
            '<td><input name="name" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><input name="mobileNumber" type="text" class="col-sm-12  no-padding-right T-mobileNumber"  maxlength="11"  /></td>' +
            '<td><select name="idCardType" value="idCardTypeId" class="col-xs-12"><option value="0" selected="selected">身份证</option><option value="1">护照</option><option value="2">其它</option></select></td>' +
            '<td><input name="idCardNumber" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><div class="checkbox"><label><input type="checkbox" class="ace " value="1" name="isContactUser"><span class="lbl"></span></label></div></td>' +
            '<td><a class="cursor T-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-addTouristTbody')
        $tbody.append(html);
        touristGroup.memberNumber($tbody);        
    };
    //游客列表序号自动升序
    touristGroup.memberNumber = function($tab) {
        $tab.find('tr').each(function(i) {
            if (i >= 0) {
                $(this).children().eq(0).text(i + 1);
            }
        });
    };
    //批量添加游客
    touristGroup.addVisotorMore = function($obj) {
        seajs.use("" + ASSETS_ROOT + modalScripts.arrange_plan,function(module){
            module.addVisotorMore($obj.find('.T-addTouristTbody'), touristGroup.memberNumber);
        });
    };

    //新增同行联系人
    touristGroup.addPartnerManager = function($obj) {
        var $parentsObj = $obj.closest('.form-inline');
        var partnerAgencyId = $parentsObj.find('input[name=fromPartnerAgencyId]').val();
        var html = addPartnerManagerTemplate();
        if (partnerAgencyId) {
            var addPartnerManagerLayer = layer.open({
                type: 1,
                title: '新增同行联系人',
                skin: "layui-layer-rim",
                area: '40%',
                content: html,
                scrollbar: false,
                zIndex: 1028,
                success: function() {
                    var $addPartnerManagerObj = $(".T-addPartnerManager");
                    //提交事件
                    $addPartnerManagerObj.find('.T-submit-addPartnerManager').on('click', function() {
                        var managerName = $addPartnerManagerObj.find('input[name=managerName]').val(),
                            managerMobile = $addPartnerManagerObj.find('input[name=managerMobile]').val(),
                            departmentName = $addPartnerManagerObj.find('input[name=departmentName]').val(),
                            dutyName = $addPartnerManagerObj.find('input[name=dutyName]').val();
                        touristGroup.addPartnerManagerFn(partnerAgencyId, managerName, managerMobile, departmentName, dutyName, $obj, addPartnerManagerLayer);
                    });
                }
            });
        } else {
            layer.tips('新建联系人请先选择客户来源', $obj, {
                tips: [1, '#3595CC'],
                time: 2000
            });
        }
    };
    //新增同行联系人
    touristGroup.addPartnerManagerFn = function(partnerAgencyId, managerName, managerMobile, departmentName, dutyName, $obj, addPartnerManagerLayer) {
        $.ajax({
            url: KingServices.build_url("partnerAgency", "saveContact"),
            data: {
                partnerAgencyId: partnerAgencyId,
                contactRealname: managerName,
                contactMobileNumber: managerMobile,
                departmentName: departmentName,
                dutyName: dutyName,
                operation: "view"
            },
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var contact = JSON.parse(data.partnerAgencyContact);
                    layer.close(addPartnerManagerLayer);
                    var $parentsObj = $obj.closest('div');
                    $parentsObj.find('input[name=partnerAgencyNameList]').val(contact.contactRealname + "-[" + contact.contactMobileNumber + "]").trigger('change');
                    $parentsObj.find('input[name=partnerAgencyContactId]').val(contact.id);
                }
            }
        });
    };
    //新增其他费用项
    touristGroup.addOtherCost = function($obj) {
        var html = '<tr>' +
            '<td><select name="type" class="col-sm-10 col-sm-offset-1"><option value="1">大人结算价</option><option value="2">小孩结算价</option>' +
            '<option value="3">中转结算价</option><option value="4">车辆费用</option><option value="5">餐厅费用</option><option value="6">保险费用</option>' +
            '<option value="7">导服费</option><option value="8">酒店费用</option><option value="9">景区费用</option>' +
            '<option value="10">自费费用</option><option value="11">票务费用</option><option value="12">其他费用</option></select></td>' +
            '<td><input  name="count" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costCount T-count T-calc F-float F-count"/></td>' +
            '<td><input  name="price" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-costPrice T-price T-calc F-float F-money"/></td>' +
            '<td><input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /></td>' +
            '<td><input  name="remark" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right" /></td>' +
            '<td><a class="cursor T-delete">删除</a></td>' +
            '</tr>';
        var $parentsObj = $obj.closest(".T-touristGroupMainForm");
        var $tableObj = $parentsObj.find(".T-addCostTbody");
        $tableObj.append(html);
        var $count = $tableObj.find('.T-count');
        Tools.inputCtrolFloat($count);
        //删除事件
        $tableObj.find(".T-delete").last().on('click', function() {
            var $tr = $(this).closest('tr');
            if (!!$tr.attr('data-entity-id')) {

            }else{
                $tr.fadeOut(function() {
                    $(this).remove();
                    touristGroup.autoSumNeedPay($obj);
                });
            };
            
        })
    };

    //自动计算应收，未收
    touristGroup.autoSumNeedPay = function($tab) {
        var needIncome = $tab.find('input[name=needPayAllMoney]'),
            hadIncome = $tab.find('input[name=payedMoney]'),
            unIncome = $tab.find('input[name=unIncomeMoney]'),
            currentIncome = $tab.find('input[name=currentNeedPayMoney]'),
            $tr = $tab.find('.T-addCostTbody').find("tr:not(.deleted)"),
            needSumIncome = 0;
        $tr.each(function() {
            var $that = $(this),
                count = parseFloat($that.find('.T-count').val()),
                price = parseFloat($that.find('.T-price').val());
            if (isNaN(count)) {
                count = 0;
            }
            if (isNaN(price)) {
                price = 0;
            }
            needSumIncome += count * price
        });
        //四舍五入
        needSumIncome = needSumIncome.toFixed(2);
        //计算应收
        needIncome.val(needSumIncome);
        //计算未收
        var hadInMoney = parseFloat(hadIncome.val()),
            currInMoney = parseFloat(currentIncome.val()),
            unInMoney = 0;
        if (isNaN(hadInMoney)) {
            hadInMoney = 0;
        };
        if (isNaN(currInMoney)) {
            currInMoney = 0;
        };
        unInMoney = needSumIncome - hadInMoney - currInMoney;
        unInMoney = unInMoney.toFixed(2);
        unIncome.val(unInMoney);
    };
    //获取列表数据
    touristGroup.getListData = function(searchData) {
        $.ajax({
            url: touristGroup.url('listTouristGroup', 'view'),
            data: searchData,
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var $listObj = $("#touristGroup-listMain"),
                        $mainList = $("#" + tabId);
                    var touristGroupList = data.touristGroupList;
                    //实例化对象
                    touristGroupList = JSON.parse(touristGroupList);
                    for (var i = 0 , len = touristGroupList.length, tmp;i < len; i ++) {
                        tmp = touristGroupList[i];
                        tmp.editTitle = '';
                        tmp.deleteTitle = '';

                        // can edit
                        if (((tmp.status < 3 || tmp.status == 6) || touristGroup.isBackStatus == 1) && (tmp.isInnerTransferConfirm == 0 && tmp.isConfirmAccount == 0))  {
                            tmp.canEdit = true;
                        } else {
                            tmp.canEdit = false;

                            if (tmp.isInnerTransferConfirm) {
                                tmp.editTitle = '内转成功，不能编辑';
                            } else if (tmp.isConfirmAccount) {
                                tmp.editTitle = '客户账务已对账，不能编辑';
                            } else {
                                switch(tmp.status*1) {
                                    case 5:
                                        tmp.editTitle = '该小组已经分段，不能编辑';
                                        break;
                                    default: 
                                        break;
                                } 
                            }
                        }

                        // can delete
                        if ((tmp.status == 1 && (tmp.isInnerTransferConfirm == 0 && tmp.isConfirmAccount == 0)) || tmp.isBackStatus == 1) {
                            tmp.canDelete = true;
                        } else {
                            tmp.canDelete = false;

                            if (tmp.isInnerTransferConfirm) {
                                tmp.deleteTitle = '内转成功，不能删除';
                            } else if (tmp.isConfirmAccount) {
                                tmp.deleteTitle = '客户账务已对账，不能删除';
                            } else {
                                switch(tmp.status*1) {
                                    case 2:
                                        tmp.deleteTitle = '该小组已分团，不能删除';
                                        break;
                                    case 3:
                                        tmp.deleteTitle = '该小组已外转，不能删除';
                                        break;
                                    case 5:
                                        tmp.deleteTitle = '该小组已分段，不能删除';
                                        break;
                                    case 6:
                                        tmp.deleteTitle = '该小组已内转，不能删除';
                                        break;
                                    default: 
                                        break;
                                } 
                            }
                        }
                    }
                    //讲字符串改为对象
                    data.touristGroupList = touristGroupList;
                    data.adultCount = 0;
                    data.childCount = 0;

                    var html = listTemplate(data);
                    //权限过滤
                    html = filterUnAuth(html);
                    $listObj.html(html);
                    touristGroup.listEvents($listObj);
                   
                    //绑定分页插件
                    laypage({
                        cont: $mainList.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (searchData.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                searchData.pageNo = (obj.curr - 1);
                                touristGroup.getListData(searchData);
                            }
                        }
                    });
                }
            }
        });
    };


  

    //刷新数据合计
    touristGroup.freshHeader = function($args) {
        $.ajax({
            url: touristGroup.url("getTouristStatisticData", "view"),
            data: $args,
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var $listObj = touristGroup.$tab.find(".T-touristGroupSearchForm"),
                        $countBody = $listObj.find('.T-countData'),
                        $statistics = data.statistics;
                    $countBody.find(".allPerson").text($statistics.adultCount + "大" + $statistics.childCount + "小");
                    $countBody.find(".needIncome").text($statistics.needPay + "元");
                    $countBody.find(".payedMoney").text($statistics.payedMoney + "元");
                    $countBody.find(".currentNeedPay").text($statistics.currentNeedPay + "元");
                    $countBody.find(".unIncome").text($statistics.unIncomeMoney + "元");

                }
            }
        });
    };

    //获取组团社的数据
    touristGroup.getPartnerAgencyList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).find('input[name=fromPartnerAgencyId]').val("");
                    $(this).parent().find('input[name=partnerAgencyNameList]').val("");
                    $(this).parent().find('input[name=type]').val("");
                }
            },
            select: function(event, ui) {
                var $parent = $(this).blur().nextAll("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change').parent(),
                    $form = $parent.closest('.form-inline');
                //通过typeFlag来判断--1、新增；2、修改
                $parent.find("input[name=type]").val("");
                $form.find("input[name=partnerAgencyNameList]").val("");
                $form.find('input[name=partnerAgencyContactId]').val("");
                touristGroup.getContactList($form.find('[name=partnerAgencyNameList]'),true);
            }
        }).off('click').on('click', function() {
            var $that = $(this);
            if (!!$that.attr('readonly')) return;

            $.ajax({
                url: KingServices.build_url("partnerAgency", "getPartnerAgency"),
                data: {
                    operation: 'view'
                },
                showLoading: false,
                type: 'POST',
                success: function(data) {
                    if (showDialog(data)) {
                        var formParObj = JSON.parse(data.partnerAgencyList);
                        if (formParObj != null && formParObj.length > 0) {
                            for (var i = 0; i < formParObj.length; i++) {
                                formParObj[i].value = formParObj[i].travelAgencyName
                            }
                        };
                        $that.autocomplete('option', 'source', formParObj);
                        $that.autocomplete('search', '');
                    }

                }
            });
        });
    };
    //获取同行联系人
    touristGroup.getContactList = function($obj,isPartnerClick) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                   $(this).val("").nextAll('[name="partnerAgencyContactId"]').val("");
                }
            },
            select: function(event, ui) {
                $(this).nextAll("input[name=partnerAgencyContactId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var $that = $(this),
                $parentsObj = $that.closest('.form-inline'),
                 partnerAgencyId = $parentsObj.find('input[name=fromPartnerAgencyId]').val();
            if (partnerAgencyId) {
                $.ajax({
                    url: KingServices.build_url("partnerAgency", "getContactListByPartnerAgencyId"),
                    data: {
                        partnerAgencyId: partnerAgencyId,
                        operation: "view"
                    },
                    showLoading: false,
                    type: 'POST',
                    success: function(data) {
                        var result = showDialog(data);
                        if (result) {
                            var contactList = JSON.parse(data.partnerAgencyContactList);
                            if (contactList != null && contactList.length > 0) {
                                if (contactList != null && contactList.length) {
                                    for (var i = 0; i < contactList.length; i++) {
                                        contactList[i].value = contactList[i].contactRealname + " - [" + contactList[i].contactMobileNumber + "]";
                                    }
                                }
                                if (!!isPartnerClick) {
                                	$parentsObj.find('input[name=partnerAgencyNameList]').val(contactList[0].value);
                                	$parentsObj.find('input[name=partnerAgencyContactId]').val(contactList[0].id);
                                    isPartnerClick=false;
                                } else{
                                	$obj.autocomplete('option', 'source', contactList);
                                    $obj.autocomplete('search', '');
                                };
                            } else {
                                layer.tips('该组团社没有联系人，请添加！', $obj, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            } else {
                layer.tips('请选择客户来源', $obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }

        });
        
         if(!!isPartnerClick){
            $obj.trigger('click');
        };
    };
    //获取业务部数据
    touristGroup.getBussinessList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).closest('div').find('input[name=fromBussinessGroupId]').val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                var obj = this;
                $(obj).closest('div').find("input[name=fromBussinessGroupId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var obj = this;
            var fromParObj = touristGroup.autocompleteDate.fromBusinessGroupList;
            if (fromParObj != null && fromParObj.length > 0) {
                for (var i = 0; i < fromParObj.length; i++) {
                    fromParObj[i].value = fromParObj[i].businessGroupName;
                }
            }
            $(obj).autocomplete('option', 'source', fromParObj);
            $(obj).autocomplete('search', '');
        });
    };
    //列表获取组团社数据
    touristGroup.getListPartnerAgencyList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).closest('div').find('input[name=fromPartnerAgencyId]').val("");
                    $(this).closest('div').find('input[name=partnerAgencyNameList]').val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                var obj = this;
                $(obj).closest('div').find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
                //通过typeFlag来判断--1、新增；2、修改
                if (touristGroup.typeFlag == 1) {
                    var $tabId = $("#tab-resource_touristGroup-add-content");
                    $tabId.find("input[name=partnerAgencyNameList]").val("");
                    $tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
                }
                if (touristGroup.typeFlag == 2) {
                    var $tabId = $("#tab-resource_touristGroup-update-content");
                    $tabId.find("input[name=partnerAgencyNameList]").val("");
                    $tabId.closest('div').find('input[name=partnerAgencyContactId]').val("");
                }
            }
        }).off('click').on('click', function() {
            if (!!$(this).attr('readonly')) return;
            var obj = this;
            var formParObj = touristGroup.autocompleteDate.fromPartnerAgencyList;
            if (formParObj != null && formParObj.length > 0) {
                for (var i = 0; i < formParObj.length; i++) {
                    formParObj[i].value = formParObj[i].travelAgencyName
                }
            };
            $(obj).autocomplete('option', 'source', formParObj);
            $(obj).autocomplete('search', '');
        });
    };
    //获取线路产品数据
    touristGroup.getLineProduct = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).closest('div').find("input[name=lineProductId]").val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                var obj = this;
                $(obj).closest('div').find("input[name=lineProductId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var obj = this;
            var lineParObj = touristGroup.autocompleteDate.lineProductList;
            if (lineParObj != null && lineParObj.length > 0) {
                for (var i = 0; i < lineParObj.length; i++) {
                    lineParObj[i].value = lineParObj[i].name;
                }
            }
            $(obj).autocomplete('option', 'source', lineParObj);
            $(obj).autocomplete('search', '');
        });
    };
    //获取外联计调数据
    touristGroup.getOutUserList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).closest('div').find("input[name=outOPUserId]").val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                var obj = this;
                $(obj).closest('div').find("input[name=outOPUserId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var $obj = $(this);
            var opList = touristGroup.autocompleteDate.opList;
            if (opList != null && opList.length > 0) {
                for (var i = 0; i < opList.length; i++) {
                    opList[i].value = opList[i].realName;
                }
            } else {
                layer.tips('没有内容', $obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
            $obj.autocomplete('option', 'source', opList);
            $obj.autocomplete('search', '');
        });
    };


    //获取搜索区域的数据
    touristGroup.getSearchAreaData = function() {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryTermsForTouristGroup"),
            data: {
                operation: "view"
            },
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var optional = {
                            id: "",
                            travelAgencyName: "全部"
                        },
                        buissness = {
                            id: "",
                            businessGroupName: "全部"
                        };
                    touristGroup.autocompleteDate.lineProductList = data.lineProductList;
                    touristGroup.autocompleteDate.fromBusinessGroupList = data.fromBusinessGroupList;
                    touristGroup.autocompleteDate.fromPartnerAgencyList = data.fromPartnerAgencyList;
                    touristGroup.autocompleteDate.fromPartnerAgencyList.unshift(optional);
                    touristGroup.autocompleteDate.fromBusinessGroupList.unshift(buissness);
                    touristGroup.autocompleteDate.opList = data.opList;
                }
            }
        });
    };
    //选择组团社与业务部
    touristGroup.choosePartnerAgencyOrBussiness = function($obj) {
        var $this = $obj,
            $parents = $this.closest('form'),
            $value = $this.val();
        if ($value == 1) {
            $parents.find('.T-choosePAB').hide();
            $parents.find('.T-chooseBussinessGroup').hide();
            $parents.find('.T-choosePartnerAgency').show();
        } else if ($value == 2) {
            $parents.find('.T-choosePAB').hide();
            $parents.find('.T-choosePartnerAgency').hide();
            $parents.find('.T-chooseBussinessGroup').show();
        } else if ($value == 0) {
            $parents.find('.T-choosePAB').show();
            $parents.find('.T-choosePartnerAgency').hide();
            $parents.find('.T-chooseBussinessGroup').hide();
        }
        $parents.find('.T-chooseBussinessGroup').val("");
        $parents.find('.T-choosePartnerAgency').val("");
        $parents.find('[name=fromPartnerAgencyId]').val("");
        $parents.find('[name=fromBussinessGroupId]').val("");
    };
    //时间控件
    touristGroup.formatTime = function($obj) {
        Tools.setDatePicker($obj.find('.datepicker'), true);
        Tools.setDateHSPicker($('.datetimepicker'));
    };

    /**
     * 组织提交数据
     * @param  {object} $obj      最外层父容器
     * @param  {int} id        游客小组id
     * @param  {int} typeFlag  1：新增游客小组；2：编辑游客小组
     * @param  {array} tabArgs   切换tab的参数
     * @param  {[type]} typeInner 内外转标识
     */
    touristGroup.installData = function($obj, id, typeFlag, tabArgs, typeInner,status) {
        //判断购买保险状态
        var buyInsuranceS = 1,isNeedArriveService=0,isNeedLeaveService=0; //isNeedArriveService是否接团
        var $lineInfoForm = $obj.find(".T-touristGroupMainForm"),
            $arrangeForm = $obj.find(".T-touristGroupMainFormRS"),
            $receptionObj = $arrangeForm.find('.T-recive'),
            $sendObj = $arrangeForm.find('.T-send'),
            $touristSendObj = $arrangeForm.find('input[name=touristSend]'),
            $insuranceStatus = $obj.find('input[name=buyInsurance]'),
            //获取游客名单住宿、星级、自费、备注
            $visiForm = $obj.find(".T-touristGroupMainFormMember"),
            expectLevel = touristGroup.getVal($visiForm, "level"),
            includeOwnExpense = touristGroup.getVal($visiForm, "includeOwnExpense"),
            orderNumber = touristGroup.getVal($obj, "orderNumber");

        if ($insuranceStatus.is(":checked") == true) {
            buyInsuranceS = 1;
        } else {
            buyInsuranceS = 0;
        };

        //游客小组、账单信息序列化
        var form = '',
            $startTime = $lineInfoForm.find('input[name=startTime]'),
            $endTime = $lineInfoForm.find('input[name=endTime]');

        if ($startTime.val() == '') {
            showMessageDialog($("#confirm-dialog-message"), "出游日期不能为空！");
            return;
        };

        if ($endTime.val() == '') {
            showMessageDialog($("#confirm-dialog-message"), "完团日期不能为空！");
            return;
        };


        if ($receptionObj.find('input[name=arriveTime]').val() == '') {showMessageDialog($("#confirm-dialog-message"), "接团时间不能为空！"); return;};
        if ($sendObj.find('input[name=leaveTime]').val() == '') {showMessageDialog($("#confirm-dialog-message"), "送团时间不能为空！"); return;};

        // for 出游日期
        if ($startTime.prop('disabled')) {
            form = form + '&startTime=' + $startTime.val();
        }

        if ($endTime.prop('disabled')) {
            form = form + '&endTime=' + $endTime.val();
        }

        //内转数据序列化【内转确认】
        if (!!typeInner && typeInner == 'inner') {
            form = form + '&customerType=' + touristGroup.getVal($lineInfoForm, "customerType") + "&getType=" + touristGroup.getVal($lineInfoForm, "getType") + "&memberType=" + touristGroup.getVal($lineInfoForm, "memberType");
        };

        //消除输入的空格          
        function trim(str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }

        var touristGroupFeeJsonAdd = [],
            $addFeeItemTr;
        if (typeFlag == 2) {
            $addFeeItemTr = $lineInfoForm.find(".T-addCostTbody tr:not(.deleted)");
        } else {
            $addFeeItemTr = $lineInfoForm.find(".T-addCostTbody tr:not(.deleted)");
        };
        var needTransitFee=true,isReturn=false;
        $addFeeItemTr.each(function(i) {
            var type = trim($addFeeItemTr.eq(i).find("select[name=type]").val()), //费用项目
                count = trim($addFeeItemTr.eq(i).find(".T-count").val()), //数量
                price = trim($addFeeItemTr.eq(i).find(".T-price").val()), //单价
                remark = trim($addFeeItemTr.eq(i).find("input[name=remark]").val()),//说明
                id=$addFeeItemTr.eq(i).attr('data-entity-id');

            //计算按中转费用
            if ($addFeeItemTr.eq(i).find("select[name=type]").val()==3) {
                var transitFee=$addFeeItemTr.eq(i).find('.T-payMoney').val()*1;
                if (!isNaN(transitFee)) {
                    needTransitFee=false;
                };
            };
            //数量&&单价校验
            if (count== "" && price!= "") {
                isReturn=true;
            };
            if (count!= "" && price== "") {
                isReturn=true;
            };
       
            if (!!id && count== "" && price== "") {
                isReturn=true;
            };
            if (count!= "" && price!= "") {
                var touristGroupFeeJson = {};
                if (typeFlag == 2) {
                    var id = $addFeeItemTr.eq(i).data("entity-id");
                    touristGroupFeeJson = {
                        id: id,
                        type: type,
                        count: count,
                        price: price,
                        remark: remark
                    };
                } else {
                    touristGroupFeeJson = {
                        type: type,
                        count: count,
                        price: price,
                        remark: remark
                    };
                };
                touristGroupFeeJsonAdd.push(touristGroupFeeJson);
            }
        });

        if (isReturn) {
            showMessageDialog($("#confirm-dialog-message"), "数量或单价不能为空！");
            return;
        };
        if(touristGroupFeeJsonAdd.length < 1){
            showMessageDialog($("#confirm-dialog-message"), "至少填写一条费用项！");
            return;
        }

        //删除费用项
        if (typeFlag == 2) {
            touristGroupFeeJsonDel = [];
            var $delFeeTtr = $lineInfoForm.find('tbody').children('tr.deleted');
            $delFeeTtr.each(function(i) {
                var idDel = $delFeeTtr.eq(i).attr("data-entity-id");
                touristGroupFeeJson = {
                    id: idDel
                };
                touristGroupFeeJsonDel.push(touristGroupFeeJson);
            })
        };

        //接团
        if ($receptionObj.find('.T-add-action input[type="checkbox"]:checked').length>0) {
            isNeedArriveService = 1;
        } else {
            isNeedArriveService = 0;
        };

        //送团
        if($sendObj.find('.T-add-action input[type="checkbox"]:checked').length>0){
            isNeedLeaveService=1;
        }else{
            isNeedLeaveService=0;
        }

        var buyInsurance = buyInsuranceS;
        form += "&hotelLevel=" + expectLevel + "&includeSelfPay=" + includeOwnExpense + "&buyInsurance=" + buyInsurance + "&isNeedArriveService=" + isNeedArriveService + "&isNeedLeaveService=" + isNeedLeaveService+"&touristGroupId="+id+ "&orderNumber=" +orderNumber+"&";
        //游客json串
        var touristGroupMemberJsonAdd = touristGroup.installVisiJson($visiForm, id, typeFlag);

        if (touristGroupMemberJsonAdd == 2 || touristGroupMemberJsonAdd == 1) {
            return;
        }
        if (touristGroupMemberJsonAdd.length == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请添加游客成员");
            return;
        }
        //删除游客小组
        var touristGroupMemberJsonDel = [];
        if (typeFlag == 2) {
            var $addMemberTr = $visiForm.find(".T-addTouristList tbody tr.deleted");
            $addMemberTr.each(function(i) {
                var id = $addMemberTr.eq(i).attr("data-entity-id");
                touristGroupMemberJson = {
                    id: id
                };
                touristGroupMemberJsonDel.push(touristGroupMemberJson);
            })
        }
        //接送JSON包
        var  reciveTrip  = {
            param : {},
            require : []
        },sendTrip ={
            param : {},
            require : []
        };
        //接团
        reciveTrip.require = touristGroup.getTransitPlanRequest($obj,0);
        //送团
        sendTrip.require = touristGroup.getTransitPlanRequest($obj,1);

        //接团共用json
        reciveTrip.param = {
            arriveTime : $obj.find('[name="arriveTime"]').val(),
            arrivePosition : $obj.find('[name="arrivePosition"]').val(),
            arriveShift : $obj.find('[name="arriveShift"]').val(),
            arriveShiftTime : $obj.find('[name="arriveShiftTime"]').val()
        };
        //送团共用json
        sendTrip.param = {
            leaveTime : $obj.find('[name="leaveTime"]').val(),
            leavePosition : $obj.find('[name="leavePosition"]').val(),
            leaveShift : $obj.find('[name="leaveShift"]').val(),
            leaveShiftTime : $obj.find('[name="leaveShiftTime"]').val()
        };

        //预收款、计划现收不能大于应收
        var preIncomeMoney = touristGroup.getVal($lineInfoForm, "preIncomeMoney"),
            currentNeedPayMoney = touristGroup.getVal($lineInfoForm, "currentNeedPayMoney"),
            needPayAllMoney = touristGroup.getVal($lineInfoForm, "needPayAllMoney"),
            type = touristGroup.getVal($lineInfoForm, "type"),
            needTotalMoney = 0;
        //数据类型转换
        preIncomeMoney = parseFloat(preIncomeMoney);
        currentNeedPayMoney = parseFloat(currentNeedPayMoney);
        needPayAllMoney = parseFloat(needPayAllMoney);
        //预收款、计划现收之和    
        needTotalMoney = touristGroup.calcNeedTotalMoney(preIncomeMoney, currentNeedPayMoney);

        //客户来源不能是地接社
        if (!!type && type == "0") {
            showMessageDialog($("#confirm-dialog-message"), "客户来源不能是地接社");
            return;
        };

        //将json对象转换成字符串
        touristGroupFeeJsonAdd = JSON.stringify(touristGroupFeeJsonAdd);
        touristGroupMemberJsonAdd = JSON.stringify(touristGroupMemberJsonAdd);
        reciveTrip = JSON.stringify(reciveTrip);
        sendTrip = JSON.stringify(sendTrip);

        var url, data, tabId;
        if (typeFlag == 2) {
            touristGroupMemberJsonDel = JSON.stringify(touristGroupMemberJsonDel);
            touristGroupFeeJsonDel = JSON.stringify(touristGroupFeeJsonDel);
            url = touristGroup.url("updateTouristGroup", "update");
            data = form + "&id=" + id + "&touristGroupFeeJsonAdd=" + encodeURIComponent(touristGroupFeeJsonAdd) + "&touristGroupFeeJsonDel=" + touristGroupFeeJsonDel + "&touristGroupMemberJsonAdd=" + encodeURIComponent(touristGroupMemberJsonAdd) + "&touristGroupMemberJsonDel=" + touristGroupMemberJsonDel + "&reciveTrip=" + encodeURIComponent(reciveTrip)+"&sendTrip="+encodeURIComponent(sendTrip)
            tabId = updateTabId
        }

        if(typeFlag==undefined || typeInner=='out'){
            //提交数据
            var innerStatus = false;
            if($arrangeForm.find('.T-add-action input[type="checkbox"]:checked').length>0){
                innerStatus = true;
            };
            url = touristGroup.url("saveTouristGroup", "add");
            data = "&touristGroupFeeJsonAdd=" + encodeURIComponent(touristGroupFeeJsonAdd) + "&touristGroupMemberJsonAdd=" + encodeURIComponent(touristGroupMemberJsonAdd) + "&reciveTrip=" + encodeURIComponent(reciveTrip)+"&sendTrip="+encodeURIComponent(sendTrip);
            tabId = addTabId;
            if (typeInner=='out') {
                tabId = updateTabId
                url = touristGroup.url("saveTransferTouristGroup", "add");
            };
        };

       //中转选项是否打勾且中转费用项<=0
       var transitChekedLength = $arrangeForm.find('.T-add-action input[type="checkbox"]:checked').length;
        if(transitChekedLength>0 && !!needTransitFee){
            //中转信息Tip
            touristGroup.TransitInfo($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm);
        }else if(needTotalMoney > needPayAllMoney){  //预收款与计划现收之和不能大于应收
         touristGroup.preNeedPayMoneyInfo($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm);
        }else{
             touristGroup.submitData($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm);
         }
       
    };


    /**
     * [TransitInfo 中转信息Tip
     * @param {[type]} $obj        [description]
     * @param {[type]} url         [description]
     * @param {[type]} data        数据组装
     * @param {[type]} innerStatus 内转状态
     * @param {[type]} tabId       Tab
     * @param {[type]} tabArgs     
     * @param {[type]} typeFlag    新增、编辑
     * @param {[type]} typeInner  
     */
    touristGroup.TransitInfo = function($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm) {
        $("#confirm-dialog-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
            title_html: true,
            draggable: false,
            buttons: [{
                text: "否",
                "class": "btn btn-minier btn-heightMall",
                click: function() {
                    $(this).dialog("close");
                }
            }, {
                text: "是",
                "class": "btn btn-primary btn-minier btn-heightMall",
                click: function() {
                    touristGroup.submitData($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm);
                    $(this).dialog("close");
                }
            }],
            open: function(event, ui) {
                $(this).find("p").text("该游客小组需要中转安排，但未填写中转结算价，会影响核算单团利润和中转利润，是否继续！");
            }
        });
    };


    //预收款和计划现收之和大于应收金额，是否继续
    touristGroup.preNeedPayMoneyInfo = function($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm) {
        $("#confirm-dialog-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
            title_html: true,
            draggable: false,
            buttons: [{
                text: "否",
                "class": "btn btn-minier btn-heightMall",
                click: function() {
                    $(this).dialog("close");
                }
            }, {
                text: "是",
                "class": "btn btn-primary btn-minier btn-heightMall",
                click: function() {
                    touristGroup.submitData($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm);
                    $(this).dialog("close");
                }
            }],
            open: function(event, ui) {
                $(this).find("p").text("预收款和计划现收之和大于应收金额，是否继续！");
            }
        });
    };


    //提交数据
    touristGroup.submitData = function($obj, url, data, form, innerStatus, tabId, tabArgs, typeFlag, typeInner,status, $lineInfoForm) {
        if (status == 6) {
            $obj.find('input[name=buyInsurance], input[name=orderNumber], .T-touristGroupMainForm input, .T-touristGroupMainForm select, .T-touristGroupMainForm textarea, .T-touristGroupMainFormMember input , .T-touristGroupMainFormMember select').removeAttr('disabled');
        } 
        var formData = $lineInfoForm.serialize();
        data += form + formData;
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            success: function(data) {
                if (showDialog(data)) {
                    $obj.data('isEdited', false);
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                        if (data.success == 1) {
                            if (!!tabArgs && tabArgs.length === 3) {
                                Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                                if (typeFlag != 2) {
                                    touristGroup.addEvents();
                                } else {
                                    touristGroup.updateEvents();
                                }
                            } else {
                                var $arrangeForm = $obj.find(".T-touristGroupMainFormRS");
                               
                                //外转确认
                                if (!!typeInner && typeInner=='out') {
                                    touristGroup.freshTransferList($obj);
                                };
                                if (!!typeInner && ($arrangeForm.find('.T-add-action input[type="checkbox"]:checked').length>0)) {
                                    // 内外转确认之后，在游客小组选择了中转，需要调整到中转安排的列表界面
                                    KingServices.updateTransit(touristGroup.visitorId);
                                }else {
                                    touristGroup.freshHeader(touristGroup.$freshData);
                                    //刷新列表数据
                                    touristGroup.getListData(touristGroup.$freshData);
                                };

                                Tools.closeTab(tabId);

                            };
                            if (innerStatus) {
                                // 新增游客小组时，选择了中转，跳转到中转安排的编辑界面
                                KingServices.updateTransit(data.touristGroupId);
                            };
                        }
                    });
                }
            }
        });
    };
    //拼接游客名单json
    touristGroup.installVisiJson = function($obj, id, typeFlag) {
        var touristGroupMemberJsonAdd = [],
            erroFlag = 0,
            $tr;
        if (typeFlag == 2) {
            $tr = $obj.find(".T-addTouristList tbody tr:not(.deleted)");
        } else {
            $tr = $obj.find(".T-addTouristList tbody tr");
        };
        $tr.each(function(i) {
            var $that = $(this),
                name = $that.find("input[name=name]").val(),
                mobileNumber = $that.find("input[name=mobileNumber]").val(),
                idCardType = $that.find("select[name=idCardType]").val(),
                idCardNumber = $that.find("input[name=idCardNumber]").val(),
                isContactUser = 0;
            if (typeFlag == 2) {
                var id = $that.attr("data-entity-id");
            };
            if ($(this).find("input[name=isContactUser]").is(":checked") == true) {
                isContactUser = 1;
            }
            if (isContactUser && mobileNumber == "") {
                showMessageDialog($("#confirm-dialog-message"), "请填写名单中联系人的手机号码！");
                erroFlag = 1;
                return;
            } else if (!mobileNumber && !idCardNumber) {
                showMessageDialog($("#confirm-dialog-message"), "手机号码或证件号码必填一项！");
                erroFlag = 2;
                return;
            }
            var touristGroupMemberJson = {};
            if (typeFlag == 2) {
                touristGroupMemberJson = {
                    id: id,
                    name: name,
                    mobileNumber: mobileNumber,
                    idCardType: idCardType,
                    idCardNumber: idCardNumber,
                    isContactUser: isContactUser
                };
            } else {
                touristGroupMemberJson = {
                    name: name,
                    mobileNumber: mobileNumber,
                    idCardType: idCardType,
                    idCardNumber: idCardNumber,
                    isContactUser: isContactUser
                };
            }

            touristGroupMemberJsonAdd.push(touristGroupMemberJson); 
        });
        if (erroFlag == 0) {
            return touristGroupMemberJsonAdd;
        } else {
            return erroFlag;
        }
    };



    /**
     * 更新外转确认记录data
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    touristGroup.freshTransferList = function($obj){
        var transferId = touristGroup.getVal($obj,"transferId");
        $.ajax({
            url:KingServices.build_url("transfer","saveTourist"),
            data: "id="+transferId,
            type: 'POST'
        })
        .done(function(data) {
            $('#Transfer-In').find('.T-transferIn-search').trigger('click');
        })     
    };


    //拼接url
    touristGroup.url = function(method, operation) {
        var url = APP_ROOT + "back/touristGroup.do?method=" + method + "&token=" + $.cookie("token") + "&menuKey=" + menuKey + "&operation=" + operation;
        return url;
    };


    /**
     *  预收款、计划现总和计算
     * @param  {[type]} preIncomeMoney     预收款
     * @param  {[type]} currentNeedPayMoney 计划现
     * @return {[type]}                     [description]
     */
    touristGroup.calcNeedTotalMoney = function(preIncomeMoney, currentNeedPayMoney) {
        if (!isNaN(preIncomeMoney) && !isNaN(currentNeedPayMoney)) {
            var needTotalMoney = 0,
                needTotalMoney = parseFloat(needTotalMoney + preIncomeMoney + currentNeedPayMoney);
            return needTotalMoney;
        };
    };


    /**
     * [getVal 获取input控件的值
     * @param  {[type]} obj  Dom容器对象
     * @param  {[type]} name 控件name
     * @return {[type]}
     */
    touristGroup.getVal = function(obj, name) {
        return obj.find("[name=" + name + "]").val();
    }

    /**
     * [setReadonly设置只读属性
     * @param {[type]} $tab [description]
     * @param {[type]} name [description]
     */
    touristGroup.setReadonly = function($tab, name) {
        $tab.find("[name=" + name + "]").prop("readonly", true);
    };

    touristGroup.setTimePicRe = function($tab, name) {
        $tab.find("[name=" + name + "]").prop('disabled', true);
    };


    /**
     * getEndTime 完团日期的函数计算
     * @param  {[type]} whichDay 某一天
     * @param  {[type]} startTime 出游日期
     * @return {[type]}
     */
    touristGroup.getEndTime = function(whichDay, startTime) {
        var date = new Date(startTime.replace("-", "/").replace("-", "/"));
        var timer = date.getTime() + (whichDay) * 24 * 60 * 60 * 1000;
        date.setTime(timer);
        var endTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return endTime;
    }
    exports.init = touristGroup.initModule;
    exports.updateTouristGroup = touristGroup.updateTouristGroup;
    exports.addTouristGroup = touristGroup.addTouristGroup;
    //内外转方法的暴露
    exports.updateTransferIn = touristGroup.updateTransferIn;
    exports.updateTransfer = touristGroup.updateTransfer;
    exports.viewTouristGroup = touristGroup.viewTouristGroupDetails;
});