/**
 * 计调操作--游客订单
 * 
 * by David Bear 2016-03-12
 */
define(function(require, exports) {

    //key
    var K = {
            menu : "resource_touristGroup",
            update : "resource_touristGroup_update",
            add : "resource_touristGroup_add",
            view : "resource_touristGroup_view",
        },
        //模板文件
        T = {
            list : require('./view/tourists/list'),//列表页
            listTable : require('./view/tourists/listTable'),//列表页表格
            listCount : require('./view/tourists/listCount'),//列表页合计
            listPartGroup : require('./view/tourists/listPartGroup'),//获取参团列表
            add : require('./view/tourists/add'),//新增页面
            update : require('./view/tourists/update/update'),//编辑页面
            view : require('./view/tourists/view/view'),//查看页面
            viewAccountsTemplate : require('./view/tourists/view/viewAccounts'),//查看结算单
            viewSingleTemplate : require('./view/tourists/view/viewSingle'),//查看中转核算单
            viewTransferSingleTemplate : require("./view/tourists/view/viewTransferSingle"),//外转核算单
            chooseClient : require('./view/tourists/choose/chooseClient'),//选择客户
            chooseClientList : require('./view/tourists/choose/chooseClientList'),//选择客户列表
            chooseLineProduct : require('./view/tourists/choose/chooseLineProduct'),//选择线路产品
            chooseLineProductList : require('./view/tourists/choose/chooseLineProductList'),//选择线路产品列表
			guestInfo : require('./view/tourists/update/guestInfo'),//编辑客人信息
			updateMoney : require('./view/tourists/update/updateMoney'),//编辑金额
			updateBus : require('./view/tourists/update/updateBus'),//编辑车
			updateHotel : require('./view/tourists/update/updateHotel'),//编辑房
			updateOther : require('./view/tourists/update/updateOther'),//编辑其它
            updateOuterTurn : require('./view/tourists/update/updateOuterTurn'),//编辑外转
            moneyAdjust : require('./view/tourists/update/moneyAdjust'),//调整本段团款
            addFee : require('./view/tourists/addFee'),//调整费用项
            chooseHotel : require('./view/tourists/choose/chooseHotel'),//自选酒店
            chooseHotelList : require('./view/tourists/choose/chooseHotelList'),//自选酒店列表
            viewGuestInfo : require('./view/tourists/view/viewGuestInfo'),//查看客人信息
            viewMoney : require('./view/tourists/view/viewMoney'),//查看应收
            viewBus : require('./view/tourists/view/viewBus'),//查看车
            viewHotel : require('./view/tourists/view/viewHotel'),//查看房
            viewOther : require('./view/tourists/view/viewOther'),//查看其它
            updateMoneyAndGuest : require('./view/tourists/update/updateMoneyAndGuest'),//编辑应收和客人信息
        },
        rule = require('./rule'),
        touristGroup = {
            autocompleteDate : {}
        };
    /**
	 * 游客管理页面初始化
	 * @param  {object} args 请求参数
	 * @return {[type]}      [description]
	 */
    touristGroup.initModule = function(args){
        if(Tools.addTab(K.menu, '游客管理', T.list())){
            var $tab = $("#tab-" + K.menu + "-content");
            touristGroup.listTouristGroup(0, args, $tab);
        }
    };
    /**
     * 游客管理列表页
     * @param  {number} page 翻页
     * @param  {object} args 请求参数
     * @param  {object} $tab tab的jQuery对象
     * @return {[type]}      [description]
     */
    touristGroup.listTouristGroup = function(page, args, $tab){
        touristGroup.getSearchAreaData();
    	args = args || {};
    	args.pageNo = page || 0;
        args.type = args.type || 0;
        args.statusSearch = args.statusSearch || 1;
        args.order = 0;
        if(!!$tab){
            $tab.html(filterUnAuth(T.list()));
            touristGroup.init_events($tab);
            touristGroup.getList(args, $tab);
        }
    };

    touristGroup.getTouristStatisticData = function(args, $tab){
        $.ajax({
            url : KingServices.build_url('touristGroup','getTouristStatisticData'),
            data : args,
            type: "POST",
            success: function(data) {
                if(showDialog(data)){
                    $tab.find('.T-countData').html(T.listCount(data));
                }
            }
        });
    };

    /**
     * 获取游客管理列表
     * @param  {object} args 请求参数
     * @param  {object} $tab tab的jQuery对象
     * @return {[type]}      [description]
     */
    touristGroup.getList = function(args, $tab){
        var page = 0;
        if(typeof args === "number"){
            page = args;
        }
        if(typeof args !== "object" || !args){
            args = getArgs($tab.find(".T-search-area"));
        }
        touristGroup.getTouristStatisticData(args, $tab);
    	$.ajax({
            url: KingServices.build_url('touristGroup','listTouristGroup'),
            data: args,
            type: 'POST',
            success: function(data) {
            	if(showDialog(data)){
                    var totalAdultCount = 0, 
                        totalChildCount = 0,
                        touristGroupList = JSON.parse(data.touristGroupList);

            		for (var i = 0 , len = touristGroupList.length, tmp;i < len; i ++) {
                        tmp = touristGroupList[i];
                        tmp.editTitle = '';
                        tmp.deleteTitle = '';

                        // can edit
                        if ((
                            (tmp.status < 3 || tmp.status == 6 || tmp.status == 5) || tmp.isBackStatus == 1) && 
                            (tmp.isInnerTransferConfirm == 0 && tmp.isConfirmAccount == 0) &&
                            tmp.isEdit == 0)  
                        {
                            tmp.canEdit = true;
                        } else {
                            tmp.canEdit = false;

                            if (tmp.isInnerTransferConfirm) {
                                tmp.editTitle = '内转成功，不能编辑';
                            } else if (tmp.isConfirmAccount) {
                                tmp.editTitle = '客户账务已对账，不能编辑';
                            } else {/*
                                switch(tmp.status*1) {
                                    case 5:
                                        tmp.editTitle = '该小组已经分段，不能编辑';
                                        break;
                                    default: 
                                        break;
                                } */
                            }
                        }

                        // can delete
                        if ((tmp.status == 1 && 
                            (tmp.isInnerTransferConfirm == 0 && tmp.isConfirmAccount == 0)) || 
                            tmp.isBackStatus == 1 &&
                            tmp.isEdit == 0) 
                        {
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

                        totalAdultCount += tmp.adultCount;
                        totalChildCount += tmp.childCount;
                    }
                    data.touristGroupList = touristGroupList;
            		var html = T.listTable(data);
            		html = filterUnAuth(html);
            		$tab.find('.T-touristGroup').html(html);
            		$tab.find('.T-record-size').html(data.recordSize);

                    //$tab.find('.T-total-number').text((totalAdultCount||0) + "大" + (totalChildCount||0) + "小")

            		//绑定分页插件
                    laypage({
                        cont: $tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                args.pageNo = (obj.curr - 1);
                                touristGroup.getList(args, $tab);
                            }
                        }
                    });
            	}
            }
        });
        return this;
        function getArgs($searchArea){
            var type = $searchArea.find('.T-choosePorB').val(),
                args = {
                    pageNo : 0,
                    orderNumber : $searchArea.find('[name="orderNumber"]').val(),
                    otaOrderNumber : $searchArea.find('[name="otaOrderNumber"]').val(),
                    type : type,
                    lineTripName : $searchArea.find('[name="lineTripName"]').val(),
                    guestDetails : $searchArea.find('[name="guestDetails"]').val(),
                    customerType : $searchArea.find('[name="customerType"]').val(),
                    dateType : $searchArea.find('[name="dateType"]').val(),
                    tripTime : $searchArea.find('[name="tripTime"]').val(),
                    createTimeStart : $searchArea.find('[name="createTimeStart"]').val(),
                    createTimeEnd : $searchArea.find('[name="createTimeEnd"]').val(),
                    realName: $searchArea.find('[name="realName"]').val(),
                    statusSearch : $searchArea.find('.T-select-status').val(),
                    order : $searchArea.find('[name="order"]').val()
                };
            if(type == "1"){
                args.fromPartnerAgencyName = $searchArea.find('[name="fromPartnerAgencyName"]').val();
                args.fromPartnerAgencyId = $searchArea.find('[name="fromPartnerAgencyId"]').val();
            }else if(type == "2"){
                args.fromBussinessGroupName = $searchArea.find('[name="fromBussinessGroupName"]').val();
                args.fromBussinessGroupId = $searchArea.find('[name="fromBussinessGroupId"]').val();
            }
            if(args.fromPartnerAgencyName == "全部"){
                args.fromPartnerAgencyName = "";
            }
            if(args.fromBussinessGroupName == "全部"){
                args.fromBussinessGroupName = "";
            }
            if($searchArea.find('.T-more-btn').hasClass('unfold')){
                delete args.dateType;
                delete args.tripTime;
                delete args.realName;
                delete args.customerType;
            }
            return args;
        }
    };

    /**
     * 列表页初始化事件
     * @param  {object} $tab tab的jQuery对象
     * @return {object}      touristGroup对象
     */
    touristGroup.init_events = function($tab){
    	var $searchArea = $tab.find(".T-search-area");
    	$searchArea.find('.T-choosePorB').on('change', function() {
            var $that = $(this), val = $(this).val();
            $searchArea.find('.T-choosePAB, .T-PorB').addClass('hidden');
            if(val == "0"){
                $searchArea.find('.T-choosePAB').removeClass('hidden');
            }else if(val == "1"){
                $searchArea.find('.T-choosePartnerAgency').removeClass('hidden');
            }else if(val == "2"){
                $searchArea.find('.T-chooseBussinessGroup').removeClass('hidden');
            }
        });
        //搜索
        $searchArea.find('.T-touristGroupList-search').on('click', function(){
            touristGroup.getList(0, $tab);
        });
        //高级搜索
        $searchArea.find('.T-more-btn').on('click', function(){
            var $that = $(this);
            if($that.hasClass('packUp')){
                $that.addClass('unfold').removeClass('packUp');
                $searchArea.find('.T-more-info').addClass('hidden');
            }else{
                $that.addClass('packUp').removeClass('unfold');
                $searchArea.find('.T-more-info').removeClass('hidden');
            }
        });
        //绑定日期事件
        Tools.setDatePicker($searchArea.find('.datepicker'));
        Tools.setDateHSPicker($searchArea.find('.datetimepicker'));

        touristGroup.getOPUserList($searchArea.find('[name=realName]'), true);
        touristGroup.getListPartnerAgencyList($searchArea.find('.T-choosePartnerAgency'));
        touristGroup.getBussinessList($searchArea.find('.T-chooseBussinessGroup'));
        //添加游客小组事件
        $tab.find('.T-touristGroup-add').on('click', function(){
            touristGroup.addTouristGroup();
        });
        //表内操作
    	$tab.find('.T-touristGroup').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), $tr = $that.closest('tr'), id = $tr.data('id');
    		if($that.hasClass('T-edit')){
    			touristGroup.touristGroupUpdate(id);
    		}else if($that.hasClass('T-view')){
                var type = $(this).data('type');
                touristGroup.touristGroupView(id,type);
            }else if($that.hasClass('T-del')){
                showConfirmDialog("确定删除该条数据?", function() {
                    touristGroup.touristGroupDelete(id, $tab);
                });
            }else if($that.hasClass('T-show-part-group')){
                touristGroup.getListPartGroup(id, $tr, $that);
            }else if($that.hasClass('T-outer-turn')){
                touristGroup.updateOuterTurn(id);
            }
    	});

        //导出游客保险名单
        $searchArea.find('.T-export').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var startTime = $searchArea.find('input[name="tripTime"]').val(),
                dateType = $searchArea.find('[name="dateType"]').val();
            if (!!startTime && dateType == "0") {
                exportXLS(KingServices.build_url("export","exportBuyInsuranceMember")+"&"+$.param(getArgs($searchArea)));
            }else{
                showMessageDialog("请在高级选项里选择接团日期！");
                return;
            };
        });

        //导出游客名单
        $searchArea.find('.T-export-list').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var startTime = $searchArea.find('input[name="tripTime"]').val(),
                dateType = $searchArea.find('[name="dateType"]').val();
            if (!!startTime && dateType == "0") {
                exportXLS(KingServices.build_url("export","exportMember")+"&"+$.param(getArgs($searchArea)));
            }else{
                showMessageDialog("请在高级选项里选择接团日期！");
                return;
            };
        });

    	return this;
        function getArgs($searchArea){
            var type = $searchArea.find('.T-choosePorB').val(),
                args = {
                    pageNo : 0,
                    orderNumber : $searchArea.find('[name="orderNumber"]').val(),
                    type : type,
                    lineTripName : $searchArea.find('[name="lineTripName"]').val(),
                    guestDetails : $searchArea.find('[name="guestDetails"]').val(),
                    customerType : $searchArea.find('[name="customerType"]').val(),
                    dateType : $searchArea.find('[name="dateType"]').val(),
                    tripTime : $searchArea.find('[name="tripTime"]').val(),
                    realName: $searchArea.find('[name=realName]').val(),
                    statusSearch : $searchArea.find('.T-select-status').val()
                };
            if(type == "1"){
                args.fromPartnerAgencyName = $searchArea.find('[name="fromPartnerAgencyName"]').val();
                args.fromPartnerAgencyId = $searchArea.find('[name="fromPartnerAgencyId"]').val();
            }else if(type == "2"){
                args.fromBussinessGroupName = $searchArea.find('[name="fromBussinessGroupName"]').val();
                args.fromBussinessGroupId = $searchArea.find('[name="fromBussinessGroupId"]').val();
            }
            if(args.fromPartnerAgencyName == "全部"){
                args.fromPartnerAgencyName = "";
            }
            if(args.fromBussinessGroupName == "全部"){
                args.fromBussinessGroupName = "";
            }
            return args;
        }
    };

    touristGroup.getListPartGroup = function(id, $tr, $that){

        if($that.attr('index') == "1"){
            $that.html('<i class="ace-icon fa bigger-110 icon-only fa-plus"></i>');
            $tr.next('tr').addClass('hidden');
            $that.attr('index', "0");
        }else if(!$that.data('ajax')){
            $.ajax({
                url: KingServices.build_url('customerOrder','getSubOrderInfo'),
                data: {id : id},
                type: 'POST',
                showLoading : false,
                success: function(data) {
                    if(showDialog(data)){
                        $that.html('<i class="ace-icon fa bigger-110 icon-only fa-minus"></i>');
                        $tr.next('tr').removeClass('hidden').find('.T-part-group-list').html(T.listPartGroup(data));
                        $that.attr('index', "1");
                        $that.data('ajax', true);
                    }
                }
            });
        }else{
            $that.html('<i class="ace-icon fa bigger-110 icon-only fa-minus"></i>');
            $tr.next('tr').removeClass('hidden');
            $that.attr('index', "1");
        }
    };

    /**
     * 新增游客小组
     */
    touristGroup.addTouristGroup = function(){
        if (Tools.addTab(K.add , '新增小组', T.add())) {
            touristGroup.commonEvents($("#tab-" + K.add + "-content")); 
        }
    };

    /**
     * 编辑游客管理
     * @param  {number} id 游客ID
     * @return {[type]}    [description]
     */
    touristGroup.touristGroupUpdate = function(id){
    	$.ajax({
    		url : KingServices.build_url('customerOrder', 'viewCustomerOrder'),
    		data : {id : id},
    		type: 'POST',
    		success : function(data){
    			if(showDialog(data)){
                    data.id = id;
                    if(!!data.baseInfo && !!data.baseInfo.touristGroupMemberInfo){
                        var memberInfo = data.baseInfo.touristGroupMemberInfo;
                        for(var i=0; i<memberInfo.touristGroupMemberJsonAdd.length; i++){
                            var memberJson = memberInfo.touristGroupMemberJsonAdd[i]
                            if(!!memberJson.isContactUser){
                                data.baseInfo.mobileNumber = memberJson.mobileNumber;
                                data.baseInfo.name = memberJson.name;
                                data.baseInfo.remark = memberJson.remark;
                                break;
                            }
                        }
                        data.baseInfo.name = data.baseInfo.name + " " + (data.baseInfo.touristGroupMemberInfo.adultCount || 0) +"大" + (data.baseInfo.touristGroupMemberInfo.childCount || 0) + "小";
                        data.baseInfo.touristGroupMemberInfo = JSON.stringify(data.baseInfo.touristGroupMemberInfo || {});
                    }
                    data.baseInfo.needPayAllMoney = data.baseInfo.touristGroupFee.needPayAllMoney
                    data.baseInfo.touristGroupFee = JSON.stringify(data.baseInfo.touristGroupFee || {});

                    var receiveTrip = data.receiveTrip;
                    for(var i=0; i<receiveTrip.length; i++){
                        if(receiveTrip[i].receiveBus){
                            receiveTrip[i].receiveBusClearFlag = receiveTrip[i].receiveBus.clearFlag;
                            receiveTrip[i].busNeedPayAllMoney = receiveTrip[i].receiveBus.needPayAllMoney;
                            receiveTrip[i].receiveBusId = receiveTrip[i].receiveBus.id;
                            receiveTrip[i].receiveBus = JSON.stringify(receiveTrip[i].receiveBus || {});
                        }
                        if(receiveTrip[i].receiveHotel){
                            receiveTrip[i].receiveHotelClearFlag = receiveTrip[i].receiveHotel.clearFlag;
                            receiveTrip[i].hotelNeedPayAllMoney = receiveTrip[i].receiveHotel.needPayAllMoney;
                            receiveTrip[i].receiveHotelId = receiveTrip[i].receiveHotel.id;
                            receiveTrip[i].receiveHotel.hotel = [];
                            var hotelIds = receiveTrip[i].receiveHotel.hotelIds,
                                hotelNames = receiveTrip[i].receiveHotel.hotelName;
                            if(!!hotelIds && !!hotelNames){
                                hotelIds = hotelIds.split(',');
                                hotelNames = hotelNames.split(',');
                                for(var j = 0; j < hotelIds.length; j++){
                                    receiveTrip[i].receiveHotel.hotel[j] = {
                                        id : hotelIds[j],
                                        name : hotelNames[j]
                                    }
                                }
                            }
                            receiveTrip[i].receiveHotel = JSON.stringify(receiveTrip[i].receiveHotel || {});
                        }
                        if(receiveTrip[i].receiveOther){
                            receiveTrip[i].receiveOtherClearFlag = receiveTrip[i].receiveOther.clearFlag;
                            receiveTrip[i].otherNeedPayAllMoney = receiveTrip[i].receiveOther.needPayAllMoney;
                            receiveTrip[i].receiveOtherId = receiveTrip[i].receiveOther.id;
                            receiveTrip[i].receiveOther = JSON.stringify(receiveTrip[i].receiveOther || {});
                        }
                    }
                    var joinTrip = data.joinTrip;
                    for(var i=0; i<joinTrip.length; i++){
                        if(joinTrip[i].lineInfo){
                            joinTrip[i].currentNeedPayMoney = joinTrip[i].lineInfo.currentNeedPayMoney;
                            var str = "", isTransfer = joinTrip[i].lineInfo.isTransfer;
                            if(isTransfer == 1){
                                str = "他部　" + joinTrip[i].lineInfo.dutyDepartmentName + "　";
                            }else if(isTransfer == 2){
                                str = "外转　" + joinTrip[i].lineInfo.transferPartnerAgency + "　";
                            }
                            joinTrip[i].lineNeedPayAllMoney = str + Tools.thousandPoint(joinTrip[i].lineInfo.needPayAllMoney || 0, 2);
                            joinTrip[i].lineInfoId = joinTrip[i].lineInfo.id;
                            joinTrip[i].lineInfo = JSON.stringify(joinTrip[i].lineInfo || {});
                        }
                        if(joinTrip[i].hotelInfo){
                            joinTrip[i].hotelNeedPayAllMoney = joinTrip[i].hotelInfo.needPayAllMoney;
                            joinTrip[i].hotelInfoId = joinTrip[i].hotelInfo.id;
                            joinTrip[i].hotelOutRemarkId = joinTrip[i].hotelInfo.outRemarkId;
                            joinTrip[i].hotelInfo.hotel = [];
                            joinTrip[i].hotelInfoClearFlag = joinTrip[i].hotelInfo.clearFlag;
                            var hotelIds = joinTrip[i].hotelInfo.hotelIds,
                                hotelNames = joinTrip[i].hotelInfo.hotelName;
                            if(!!hotelIds && !!hotelNames){
                                hotelIds = hotelIds.split(',');
                                hotelNames = hotelNames.split(',');
                                for(var j = 0; j < hotelIds.length; j++){
                                    joinTrip[i].hotelInfo.hotel[j] = {
                                        id : hotelIds[j],
                                        name : hotelNames[j]
                                    }
                                }
                            }

                            var str = joinTrip[i].hotelInfo.isTransfer === 0 ? "本部" : "他部";
                            joinTrip[i].hotelInputValue = str + "　" + Tools.thousandPoint(joinTrip[i].hotelNeedPayAllMoney, 2);
                            joinTrip[i].hotelInfo = JSON.stringify(joinTrip[i].hotelInfo || {});
                        }
                        joinTrip[i].lineJson = {
                            lineProductName : joinTrip[i].lineProductName,
                            days : joinTrip[i].lineDays
                        }
                        joinTrip[i].lineJson = JSON.stringify(joinTrip[i].lineJson);
                    }
                    var sendTrip = data.sendTrip;
                    for(var i=0; i<sendTrip.length; i++){
                        if(sendTrip[i].sendBus){
                            sendTrip[i].sendBusClearFlag = sendTrip[i].sendBus.clearFlag;
                            sendTrip[i].busNeedPayAllMoney = sendTrip[i].sendBus.needPayAllMoney;
                            sendTrip[i].sendBusId = sendTrip[i].sendBus.id;
                            sendTrip[i].sendBus = JSON.stringify(sendTrip[i].sendBus || {});
                        }
                        if(sendTrip[i].sendHotel){
                            sendTrip[i].sendHotelClearFlag = sendTrip[i].sendHotel.clearFlag;
                            sendTrip[i].hotelNeedPayAllMoney = sendTrip[i].sendHotel.needPayAllMoney;
                            sendTrip[i].sendHotelId = sendTrip[i].sendHotel.id;
                            sendTrip[i].sendHotel.hotel = [];
                            var hotelIds = sendTrip[i].sendHotel.hotelIds,
                                hotelNames = sendTrip[i].sendHotel.hotelName;
                            if(!!hotelIds && !!hotelNames){
                                hotelIds = hotelIds.split(',');
                                hotelNames = hotelNames.split(',');
                                for(var j = 0; j < hotelIds.length; j++){
                                    sendTrip[i].sendHotel.hotel[j] = {
                                        id : hotelIds[j],
                                        name : hotelNames[j]
                                    }
                                }
                            }
                            sendTrip[i].sendHotel = JSON.stringify(sendTrip[i].sendHotel || {});
                        }
                        if(sendTrip[i].sendOther){
                            sendTrip[i].sendOtherClearFlag = sendTrip[i].sendOther.clearFlag;
                            sendTrip[i].otherNeedPayAllMoney = sendTrip[i].sendOther.needPayAllMoney;
                            sendTrip[i].sendOtherId = sendTrip[i].sendOther.id;
                            sendTrip[i].sendOther = JSON.stringify(sendTrip[i].sendOther || {});
                        }
                    }
                    if (Tools.addTab(K.update , '编辑小组', T.update(data))) {
                        touristGroup.commonEvents($("#tab-" + K.update + "-content"), 0, id);
                    }
    			}
    		}
    	});
    };

    /**
     * 查看游客管理
     * @param  {number} id 游客ID
     * @return {string}    'inner':表示是内转
     */
    touristGroup.touristGroupView = function(id, type){
        $.ajax({
            url : KingServices.build_url('customerOrder', 'viewCustomerOrder'),
            data : {id : id},
            type: 'POST',
            success : function(data){
                if(showDialog(data)){
                    data.type = type;
                    data.id = id;
                    if(!!data.baseInfo && !!data.baseInfo.touristGroupMemberInfo){
                        var memberInfo = data.baseInfo.touristGroupMemberInfo;
                        for(var i=0; i<memberInfo.touristGroupMemberJsonAdd.length; i++){
                            var memberJson = memberInfo.touristGroupMemberJsonAdd[i]
                            if(!!memberJson.isContactUser){
                                data.baseInfo.mobileNumber = memberJson.mobileNumber;
                                data.baseInfo.name = memberJson.name;
                                data.baseInfo.remark = memberJson.remark;
                                break;
                            }
                        }
                        data.baseInfo.currentNeedPayMoney = data.baseInfo.touristGroupFee.currentNeedPayMoney;
                        data.baseInfo.name = data.baseInfo.name + " " + (data.baseInfo.touristGroupMemberInfo.adultCount || 0) +"大" + (data.baseInfo.touristGroupMemberInfo.childCount || 0) + "小";
                        data.baseInfo.touristGroupMemberInfo = JSON.stringify(data.baseInfo.touristGroupMemberInfo || {});
                    }
                    data.baseInfo.needPayAllMoney = data.baseInfo.touristGroupFee.needPayAllMoney
                    data.baseInfo.touristGroupFee = JSON.stringify(data.baseInfo.touristGroupFee || {});

                    var receiveTrip = data.receiveTrip;
                    for(var i=0; i<receiveTrip.length; i++){
                        if(receiveTrip[i].receiveBus){
                            receiveTrip[i].busNeedPayAllMoney = receiveTrip[i].receiveBus.needPayAllMoney;
                            receiveTrip[i].receiveBus = JSON.stringify(receiveTrip[i].receiveBus || {});
                        }
                        if(receiveTrip[i].receiveHotel){
                            receiveTrip[i].hotelNeedPayAllMoney = receiveTrip[i].receiveHotel.needPayAllMoney;
                            receiveTrip[i].receiveHotel = JSON.stringify(receiveTrip[i].receiveHotel || {});
                        }
                        if(receiveTrip[i].receiveOther){
                            receiveTrip[i].otherNeedPayAllMoney = receiveTrip[i].receiveOther.needPayAllMoney;
                            receiveTrip[i].receiveOther = JSON.stringify(receiveTrip[i].receiveOther || {});
                        }
                    }
                    var joinTrip = data.joinTrip;
                    for(var i=0; i<joinTrip.length; i++){
                        if(joinTrip[i].lineInfo){
                            joinTrip[i].currentNeedPayMoney = joinTrip[i].lineInfo.currentNeedPayMoney;
                            var str = "", isTransfer = joinTrip[i].lineInfo.isTransfer;
                            if(isTransfer == 1){
                                str = "他部　" + joinTrip[i].lineInfo.dutyDepartmentName + "　";
                            }else if(isTransfer == 2){
                                str = "外转　" + joinTrip[i].lineInfo.transferPartnerAgency + "　";
                            }
                            joinTrip[i].lineNeedPayAllMoney = str + Tools.thousandPoint(joinTrip[i].lineInfo.needPayAllMoney || 0, 2);
                            joinTrip[i].lineInfoId = joinTrip[i].lineInfo.id;
                            joinTrip[i].lineInfo = JSON.stringify(joinTrip[i].lineInfo || {});
                        }
                        if(joinTrip[i].hotelInfo){
                            joinTrip[i].hotelNeedPayAllMoney = joinTrip[i].hotelInfo.needPayAllMoney;
                            joinTrip[i].hotelInfoId = joinTrip[i].hotelInfo.id;
                            joinTrip[i].hotelOutRemarkId = joinTrip[i].hotelInfo.outRemarkId;
                            joinTrip[i].hotelInfo.hotel = [];
                            var hotelIds = joinTrip[i].hotelInfo.hotelIds,
                                hotelNames = joinTrip[i].hotelInfo.hotelName;
                            if(!!hotelIds && !!hotelNames){
                                hotelIds = hotelIds.split(',');
                                hotelNames = hotelNames.split(',');
                                for(var j = 0; j < hotelIds.length; j++){
                                    joinTrip[i].hotelInfo.hotel[j] = {
                                        id : hotelIds[j],
                                        name : hotelNames[j]
                                    }
                                }
                            }

                            var str = joinTrip[i].hotelInfo.isTransfer === 0 ? "本部" : "他部";
                            joinTrip[i].hotelInputValue = str + "　" + Tools.thousandPoint(joinTrip[i].hotelNeedPayAllMoney, 2);
                            joinTrip[i].hotelInfo = JSON.stringify(joinTrip[i].hotelInfo || {});
                        }
                        joinTrip[i].lineJson = {
                            lineProductName : joinTrip[i].lineProductName,
                            days : joinTrip[i].lineDays
                        }
                        joinTrip[i].lineJson = JSON.stringify(joinTrip[i].lineJson);
                    }
                    var sendTrip = data.sendTrip;
                    for(var i=0; i<sendTrip.length; i++){
                        if(sendTrip[i].sendBus){
                            sendTrip[i].busNeedPayAllMoney = sendTrip[i].sendBus.needPayAllMoney;
                            sendTrip[i].sendBus = JSON.stringify(sendTrip[i].sendBus || {});
                        }
                        if(sendTrip[i].sendHotel){
                            sendTrip[i].hotelNeedPayAllMoney = sendTrip[i].sendHotel.needPayAllMoney;
                            sendTrip[i].sendHotel = JSON.stringify(sendTrip[i].sendHotel || {});
                        }
                        if(sendTrip[i].sendOther){
                            sendTrip[i].otherNeedPayAllMoney = sendTrip[i].sendOther.needPayAllMoney;
                            sendTrip[i].sendOther = JSON.stringify(sendTrip[i].sendOther || {});
                        }
                    }
                    console.log(data)
                    if (Tools.addTab(K.view , '查看小组', T.view(data))) {
                        touristGroup.commonEvents($("#tab-" + K.view + "-content"), 1);
                    }
                }
            }
        });
    };

     /**
     * [viewAccountList 结算单打印]
     * @return {[type]} [description]
     */
    touristGroup.viewAccountList = function(id){ 
        $.ajax({
                url: KingServices.build_url("touristGroup", "viewPartnerSettlement"),
                data: "id=" + id,
                type: 'POST',
                showLoading:false,
                success:function(data){
                    var result = showDialog(data);
                        if(result){
                           var num = data.touristGroup.companyLogo.indexOf('null');
                            if(num>0){
                                data.touristGroup.companyLogo =''
                            }
                            var includeRest = [];
                            for(var i = 0,len = data.lineProductDay.length;i<len;i++) {
                                var ret = data.lineProductDay[i].repastDetail.split(','),rest = {
                                    b:false,
                                    l:false,
                                    d:false
                                };
                                if(ret[0] == 1){rest.b = true}
                                if(ret[1] == 1){rest.l = true}
                                if(ret[2] == 1){rest.d = true}
                                    console.log(ret);
                                data.lineProductDay[i].includeRest = rest
                                console.log(data.lineProductDay[i].includeRest);
                            };
                            console.log(data);
                            data.showTravalList = (IndexData.userInfo.travelAgencyId == 293);
                            html = T.viewAccountsTemplate(data);
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

    /**
     * [viewSingleList 游客小组核算单]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
     touristGroup.viewSingleList = function(id){ 
            $.ajax({
                url: KingServices.build_url("outRemarkArrange", "viewSettlement"),
                data: "id=" + id,
                type: 'POST',
                showLoading:false,
                success:function(data){
                    if (showDialog(data)) {
                    html = T.viewSingleTemplate(data);
                    var viewSingleLayer = layer.open({
                        type: 1,
                        title:"打印核算表",
                        skin: 'layui-layer-rim',
                        area: '720px', 
                        zIndex:1028,
                        content: html,
                        scrollbar: false
                    });
                    var $outAccountsTab = $("#T-touristGroupViewSingle");
                        $outAccountsTab.off('click').on('click','.T-printAccountBtn',function(){
                        touristGroup.exportsOutAccounts($outAccountsTab);
                        }); 
                    }
                }
        });           
    };

/**
 * [viewTranferSingleList 外转核算单]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
    touristGroup.viewTranferSingleList = function(id){ 
            $.ajax({
                url: KingServices.build_url("customerOrder", "transferAccount"),
                data: "id=" + id,
                type: 'POST',
                showLoading:false,
                success:function(data){
                    var result = showDialog(data);
                    html = T.viewTransferSingleTemplate(data);
                    var viewSingleLayer = layer.open({
                        type: 1,
                        title:"打印核算表",
                        skin: 'layui-layer-rim',
                        area: '720px', 
                        zIndex:1028,
                        content: html,
                        scrollbar: false
                }); 
                var $outAccountsTab = $("#T-touristGroupViewSingle");
                    $outAccountsTab.off('click').on('click','.T-printAccountBtn',function(){
                    touristGroup.exportsOutAccounts($outAccountsTab);
                });
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
     * 删除游客小组
     * @param  {number} id 游客ID
     * @return {object}    this
     */
    touristGroup.touristGroupDelete = function(id, $tab){
        $.ajax({
            url : KingServices.build_url('customerOrder', 'deleteCustomerOrder'),
            data : {id : id},
            type: 'POST',
            success : function(data){
                if (showDialog(data)) {
                    showMessageDialog(data.message, function() {
                        touristGroup.getList(0, $tab);
                    });
                }
            }
        });
        return this;
    }
    /**
     * 编辑和添加通用事件
     * @param  {object} $tab tab的jQuery对象
     * @param  {number} type 1为查看；
     * @return {[type]}      [description]
     */
    touristGroup.commonEvents = function($tab, type, touristId){
        var validate = null;
        if(!type){
            validate = rule.checktTourist($tab);
        }
        touristGroup.init_edit_event($tab, validate);
        //小组信息表内操作
        $tab.find('.T-team-info').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), isInner = $that.closest('tr').attr('data-is-inner')
            if($that.hasClass('T-client')){
                touristGroup.chooseClient($that);
            }else if($that.hasClass('T-search-trip')){
                touristGroup.chooseLineProduct($that);
            }else if($that.hasClass('T-receivable')){
                if(!type){
                    touristGroup.updateMoneyAndGuest($that, 0);
                }else{
                    touristGroup.updateJionGroupMoney($that, 0, type)
                }
            }else if($that.hasClass('T-guest-info')){
                if(!type){
                    touristGroup.updateMoneyAndGuest($that, type);
                }else{
                    touristGroup.updateGuestInfo($that, type)
                }
            }else if($that.hasClass('datepicker')){
                var start = $tab.find('.T-team-info [name="startTime"]').val();
                $(this).datepicker('setStartDate', start);
            }else if($that.hasClass('T-add-client')){
                KingServices.addPartnerAgency(function(formData){});
            }else if($that.hasClass('T-fee-adjust')){
                touristGroup.updateJionGroupMoney($that, 0, 2,'',isInner);
            }
        });
        $tab.find('.T-team-info').on('change', '[name="singlePlanDefine"], [name="singlePlanDefine-add"]', function(){
            var $that = $(this);
            if($that.hasClass('T-single-group')){
                $tab.find('.T-is-hidden, .T-add-join-group, .T-add-send-group').removeClass('hidden');
                if($tab.find(".T-join-group-list tr").length > 0){
                    $tab.find('.T-join-group').removeClass('hidden');
                }
                if($tab.find(".T-send-group-list tr").length > 0){
                    $tab.find('.T-send-group').removeClass('hidden');
                }
                $tab.find('.T-container').data('type', 'single');
                $tab.find('.T-add-part-group').html(' <i class="ace-icon fa fa-plus bigger-160"></i> 参团 ');
                $tab.find('.T-part-group-text').text('参团');
            }else{
                $tab.find('.T-is-hidden, .T-join-group, .T-send-group, .T-add-join-group, .T-add-send-group').addClass('hidden');
                $tab.find('.T-container').data('type', 'group');
                $tab.find('.T-add-part-group').html(' <i class="ace-icon fa fa-plus bigger-160"></i> 转团 ');
                $tab.find('.T-part-group-text').text('转团');
            }
        });
        $tab.find('.T-team-info').on('change', '[name="lineProductName"]', function(){
            $(this).data('id', '').data('json', '');
        });
        $tab.find('.T-team-info').on('changeDate', '[name="startTime"]', function(){
            F.autoCalcDate($(this));
        });

        if(!type){
            //添加接团
            $tab.find('.T-add-join-group').on('click', function(){
        		touristGroup.addJoinGroup($tab, validate);
        	});
        	//添加参团
        	$tab.find('.T-add-part-group').on('click', function(){
        		touristGroup.addPartGroup($tab, validate);
        	});
        	//添加送团
        	$tab.find('.T-add-send-group').on('click', function(){
        		touristGroup.addSendGroup($tab, validate);
        	});
            //绑定日期事件
            Tools.setDatePicker($tab.find('.datepicker'));
            F.setDateTimePicker($tab.find('.datetimepicker'));
            //外联销售
            touristGroup.getOPUserList($tab.find('.T-chooseUser')).trigger('click');
            //保存信息
            $tab.find('.T-btn-save').on('click', function(){
                if(!validate.form())return;
                touristGroup.saveData($tab);
            });
            $tab.find('.T-refresh').on('click', function(){
                showConfirmDialog("确定重新加载当前小组信息?", function() {
                    touristGroup.touristGroupUpdate(touristId);
                });
            });
        }else{
            //关闭信息
            $tab.find('.T-btn-close').on('click', function(){
                Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                if($("#tab-" + K.menu + "-content").length > 0){
                    $("body").find('[href="#tab-' + K.menu + '-content"]').trigger('click');                    
                }
            });
            //绑定打印结算单事件
            $tab.find('.T-statementsBtn').off('click').on('click',function(){
                var pluginKey = 'plugin_print';
                    Tools.loadPluginScript(pluginKey);
                    touristGroup.viewAccountList($tab.find('.T-container').data('id'));
            });

            //绑定中转核算单事件
            $tab.find('.T-singlesBtn').off('click').on('click',function(id){
                var pluginKey = 'plugin_print';
                    Tools.loadPluginScript(pluginKey);
                    touristGroup.viewSingleList($tab.find('.T-container').data('id'));
            });


            //绑定外转核算单事件
            $tab.find('.T-transfersBtn').off('click').on('click',function(id){
                var pluginKey = 'plugin_print';
                    Tools.loadPluginScript(pluginKey);
                    touristGroup.viewTranferSingleList($tab.find('.T-part-group-list tr').eq(0).data('id'));
            });

            $tab.find('.T-money-adjust').on('click', function () {
                touristGroup.adjustPayMoney($(this));
            });
        }
    	//接团表内操作
    	$tab.find('.T-join-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), $tr = $that.closest('tr'), id = $tr.data('id');
    		if($that.hasClass('T-bus')){
    			touristGroup.updateJionGroupBus(0, $that, type);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(0, $that, type);
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther(0, $that, type);
    		}else if($that.hasClass('T-delete')){
                deleteList($tr, id);
            }else if($that.hasClass('T-clear')){
                clearItem($that);
            }
    	});
    	//参团表内操作
        var $partGroup = $tab.find('.T-part-group-list');
    	$partGroup.on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), $tr = $that.closest('tr'), id = $tr.data('id');
            if($that.hasClass('T-search-line')){
                touristGroup.chooseLineProduct($that);
            }else if($that.hasClass('T-hotel')){
                touristGroup.updateJionGroupHotel(1, $that, type);
            }else if($that.hasClass('T-line-cope')){
                var remark = '';
                if (!id) {
                    remark = $tab.find('.T-other-info-cont [name=remark]').val();
                }
    			touristGroup.updateJionGroupMoney($that, 1, type, remark);
    		}else if($that.hasClass('T-delete')){
                deleteList($tr, id);
                if($tab.find('.T-part-group-list tr').length === 0){
                    $tab.find('.T-team-info').find('[name="lineProductName"]').attr('readonly', 'readonly');
                }
            }else if($that.hasClass('datepicker')){
                var start = $tab.find('.T-team-info [name="startTime"]').val();
                $(this).datepicker('setStartDate', start);
            }else if($that.hasClass('T-clear')){
                clearItem($that);
            }else if($that.hasClass('T-fee-adjust')){
                touristGroup.updateJionGroupMoney($that, 1, 2);
            }
    	});
        $partGroup.on('changeDate', '[name="tripStartTime"]', function(){
            F.autoCalcDate($(this));
        });
        //本段团款change事件
        $partGroup.on('change', '[name="subNeedPayMoney"]', function(event){
            $(this).data('change', "1");
        });
    	//送团表内操作
    	$tab.find('.T-send-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), $tr = $that.closest('tr'), id = $tr.data('id');
    		if($that.hasClass('T-bus')){
    			touristGroup.updateJionGroupBus(2, $that, type);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(2, $that, type);
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther(2, $that, type);
    		}else if($that.hasClass('T-delete')){
                deleteList($tr, id);
            }else if($that.hasClass('T-clear')){
                clearItem($that);
            }
    	});
    	//其它信息收缩事件
    	$tab.find('.T-other-info-btn').on('click', function(){
    		var $that = $(this);
    		if($that.find('i.fa').hasClass('fa-angle-double-down')){
    			$that.find('i.fa').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
    			$tab.find('.T-other-info-cont').removeClass('hidden');
    		}else{
				$that.find('i.fa').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
				$tab.find('.T-other-info-cont').addClass('hidden');
    		}
    	});
        return this;
        function deleteList($tr, id) {
            if(!!id){
                var outId = 0;
                if($tr.closest('tbody').hasClass('T-part-group-list')){
                    outId = $tr.find('[name="hotelNeedPayMoney"]').data('out-id');
                }
                if(!!outId){
                    validateDelete(outId, function(data){
                        var delJson = $tr.closest('tbody').data('del-json');
                        if(typeof delJson !== "object"){
                            delJson = JSON.parse(delJson || "[]");
                        };
                        delJson.push({
                            id : id
                        });
                        $tr.closest('tbody').data('del-json', delJson);
                        $tr.remove();
                    });
                }else{
                    var delJson = $tr.closest('tbody').data('del-json');
                    if(typeof delJson !== "object"){
                        delJson = JSON.parse(delJson || "[]");
                    };
                    delJson.push({
                        id : id
                    });
                    $tr.closest('tbody').data('del-json', delJson);
                    $tr.remove();
                }
            }else{
                $tr.remove();
            }
        }
        function clearItem($that){
            var status = $that.data('status'), tps = "确定清空该条数据？";
            switch(status){
                case "joinBus":
                    tps = "确定清空该条接团车辆数据？";
                    break;
                case "joinHotel":
                    tps = "确定清空该条接团住宿数据？";
                    break;
                case "joinOther":
                    tps = "确定清空该条接团其它数据？";
                    break;
                case "partHotel":
                    tps = "确定清空该条返程住宿数据？";
                    break;
                case "partLine":
                    tps = "确定清空该条线路应付数据？";
                    break;
                case "sendBus":
                    tps = "确定清空该条送团车辆数据？";
                    break;
                case "sendHotel":
                    tps = "确定清空该条送团住宿数据？";
                    break;
                case "sendOther":
                    tps = "确定清空该条送团其它数据？";
                    break;
            }
            if($that.prevAll('input[type="text"]').val() !== ""){
                showConfirmDialog(tps, function() {
                    $that.prevAll('input[type="text"]').val('').data('json', '').data('clear', '1');
                    F.subtotal($that.closest('tr'), status === "partHotel" || status === "partLine" ? 1 : 0);
                });
            }else{
                showMessageDialog("数据已经清空！");
            }
        }
        function validateDelete(id, fn){
            $.ajax({
                url : KingServices.build_url('customerOrder', 'validateDelete'),
                data : {id :  id}
            }).done(function(data){
                if(showDialog(data)){
                    if($.type(fn) === "function"){
                        fn(data);
                    }
                }
            });
        }

    };
    
    /**
     * 叠加费用项
     * @param  {[type]} $that [description]
     * @param  {[type]} data  [description]
     * @return {[type]}       [description]
     */
    touristGroup.overlayFee = function($that, data){

        var $td = $that.closest('td'),
            $fee = $td.find('.T-receivable');

        $fee = $fee.length > 0 ? $fee : $td.find('.T-line-cope');

        //获取原有的费用项数据
        var jsonData = $fee.data('json') || {};
        if(!!jsonData && typeof jsonData !== "object"){
            jsonData = JSON.parse(jsonData);
        }

        //合并新旧应收&应付费用项
        if(!!jsonData.touristGroupFeeJsonAdd){
            $.merge(jsonData.touristGroupFeeJsonAdd, data.feeList);
        }else if(!!jsonData.lineFee){
            $.merge(jsonData.lineFee, data.feeList);
        }

        //重新计算应付&应收
        var feeList = jsonData.touristGroupFeeJsonAdd || jsonData.lineFee,
            needPayAllMoney = 0;
        for(var i=0; i<feeList.length; i++){
            needPayAllMoney += feeList[i].price * feeList[i].count * (feeList[i].days || 1);
        }
        jsonData.needPayAllMoney = needPayAllMoney;

        //重新赋值查看界面显示的应付&应收金额
        var str = Tools.thousandPoint(needPayAllMoney);
        if(!!jsonData.isTransfer && jsonData.isTransfer == 1){
            str = "他部　" + jsonData.dutyDepartmentName + "　" + Tools.thousandPoint(needPayAllMoney, 2);
        }else if(!!jsonData.isTransfer && jsonData.isTransfer == 2){
            str = "外转　" + jsonData.transferPartnerAgency + "　" + Tools.thousandPoint(needPayAllMoney, 2);
        }
        jsonData.currentNeedPayMoney = data.currentNeedPayMoney;
        $fee.text(str).closest('tr').find('.currentNeedPayMoney').text(data.currentNeedPayMoney);
        $fee.data('json', jsonData);
    };

    //选择客户
    touristGroup.chooseClient = function($that){
        layer.open({
            type: 1,
            title:"选择客户",
            skin: 'layui-layer-rim', //加上边框
            area: '1024px;', //宽高
            zIndex:1028,
            content: T.chooseClient(),
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.getClientList(0, $layer, index);
                //搜索
                $layer.find('.T-btn-search').on('click', function(){
                    var args = {
                        pageNo : 0,
                        travelAgencyName : $layer.find('[name="travelAgencyName"]').val(),
                        contactRealname : $layer.find('[name="contactRealname"]').val()
                    };
                    touristGroup.getClientList(args, $layer);
                });

                $layer.find('.T-client-list').on('click', '[name="chooseClient"]', function(){
                    getClientData($(this));
                });

                //关闭
                $layer.find('.T-btn-close').on('click', function(){
                    layer.close(index);
                });

                function getClientData($this) {
                    var $tr = $this.closest('tr'),
                        travelAgencyName = $tr.data('agency-name'),
                        travelAgencyContactName = $tr.find('[name="travelAgencyContactName"]').text(), 
                        str = "";
                    if(!!travelAgencyContactName){
                        str = travelAgencyName + " （"+travelAgencyContactName+"）";
                    }else{
                        str = travelAgencyName;
                    }
                    $that.val(str).data('id', $tr.data('id')).data('contact-id', $tr.data('contact-id')).trigger('blur');
                    layer.close(index);
                }
            }
        });
    };

    /**
     * 获取客户列表
     * @param  {object} args       请求参数
     * @param  {object} $layer     layer的jQuery对象
     * @param  {number} layerIndex layer的索引
     */
    touristGroup.getClientList = function(args, $layer, layerIndex){
        if(typeof args === "number"){
            var page = args;
            args = {};
            args.pageNo = page;
        }
        $.ajax({
            url : KingServices.build_url('partnerAgency', 'selectPartnerAgency'),
            data : {searchParam : JSON.stringify(args)},
            type: 'POST',
            success : function(data){
                if(showDialog(data)){
                    /*var travelAgencyList = data.travelAgencyList, id;
                    for(var i=0; i<travelAgencyList.length; i++){
                        if(id ===)
                    }*/
                    var html = T.chooseClientList(data);
                    $layer.find('.T-client-list').html(html);
                    $layer.find('.T-record-size').text(data.searchParam.recordSize);
                    //绑定分页插件
                    laypage({
                        cont: $layer.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                args.pageNo = (obj.curr - 1);
                                touristGroup.getClientList(args, $layer);
                            }
                        }
                    });
                    $(document).trigger('resize');
                }else if(!!layerIndex){
                    layer.close(layerIndex);
                }
            }
        });
    };

    /**
     * 添加接团
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addJoinGroup = function($tab, validate){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime"></td>'+
                    '<td><input type="text" class="col-xs-12" name="arriveShift"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" placeholder="点击填写车"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" placeholder="点击填写房"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" placeholder="点击填写它"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-join-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
        rule.update(validate);
        $tab.find('.T-join-group').removeClass('hidden');
    };

    /**
     * 添加参团
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addPartGroup = function($tab, validate){
        var isHidden         = $tab.find('.T-container').data('type') || "single",
            id               = $tab.find('.T-container').data("id"),
            $team            = $tab.find('.T-team-info'),
            lineData         = "",
            lineProductName  = "",
            lineProductId    = $team.find('[name="lineProductName"]').data('id'),
            tripStartTime    = "",
            tripEndTime      = "",
            $partList        = $tab.find('.T-part-group-list');

        if(!id && !!lineProductId && $partList.find("tr").length < 1){
            lineData         = $team.find('[name="lineProductName"]').data('json');
            lineProductName  = $team.find('[name="lineProductName"]').val();
            tripStartTime    = $team.find('[name="startTime"]').val();
            tripEndTime      = $team.find('[name="endTime"]').val();
        }else{
            lineProductId = "";
        }
    	
        var html =  '<tr><td>'+
                        '<div class="hct-input-group col-xs-12 T-action T-search-line">'+
                                '<input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" placeholder="点击选择线路产品" value="'+lineProductName+'" data-id="'+lineProductId+'">'+
                                '<span class="hct-group-add cursor">[搜索]</span>'+
                            '</div></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker T-action" name="tripStartTime" value="'+tripStartTime+'"></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker T-action" name="tripEndTime" value="'+tripEndTime+'"></td>'+
                        '<td><input type="text" class="col-xs-12 F-float F-money" name="subNeedPayMoney"></td>'+
                        '<td><input type="text" class="w-150 hct-cursor T-action T-line-cope" readonly name="lineNeedPayMoney" placeholder="点击填写线路应付"><a class="cursor T-action T-clear" data-status="partLine">清空</a></td>'+
                        '<td class="T-is-hidden'+(isHidden==="single"?"":" hidden")+'"><input type="text" class="w-150 hct-cursor T-action T-hotel" readonly name="hotelNeedPayMoney" placeholder="点击填写返程住宿"><a class="cursor T-action T-clear" data-status="partHotel">清空</a></td>'+
                        '<td><input type="text" class="w-100 F-float F-money" name="currentNeedPayMoney" readonly></td>'+
                        '<td>-</td>'+
                        '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$partList.append($(html).find('input[name="lineProductName"]').data('json', lineData).end());
        Tools.setDatePicker($tab.find('.datepicker'));
        rule.update(validate);
        $tab.find('.T-team-info').find('[name="lineProductName"]').removeAttr('readonly');
        $tab.find('.T-offered').removeClass('hidden');
    };

    /**
     * 添加送团
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addSendGroup = function($tab, validate){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime"></td>'+
                    '<td><input type="text" class="col-xs-12" name="leaveShift"></td>'+
                    '<td><input type="text" class="w-100 F-float F-money hct-cursor T-action T-bus" readonly name="receiveBus" placeholder="点击填写车"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 F-float F-money hct-cursor T-action T-hotel" readonly name="receiveHotel" placeholder="点击填写房"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 F-float F-money hct-cursor T-action T-other" readonly name="receiveOther" placeholder="点击填写它"><a class="cursor T-action T-clear">清空</a></td>'+
                    '<td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-send-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
        rule.update(validate);
        $tab.find('.T-send-group').removeClass('hidden');
    };

    /**
     * 添加游客
     * @param {[type]} $obj     [description]
     * @param {[type]} validate [description]
     */
    touristGroup.addVisotor = function($obj, validate) {
        var html = '<tr><td></td>' +
            '<td><input name="name" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><input name="mobileNumber" type="text" class="col-sm-12  no-padding-right T-mobileNumber"  maxlength="11"  /></td>' +
            '<td><select name="idCardType" value="idCardTypeId" class="col-xs-12"><option value="0" selected="selected">身份证</option><option value="1">护照</option><option value="2">其它</option></select></td>' +
            '<td><input name="idCardNumber" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><label><input type="checkbox" class="ace " value="1" name="isContactUser"><span class="lbl"></span></label></td>' +
            '<td><input type="text" class="col-xs-12" name="remark"></td>'+
            '<td><a class="cursor T-action T-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-addTouristTbody')
        $tbody.append(html);
        touristGroup.memberNumber($tbody);
        rule.guestUpdate(validate)
    };

    touristGroup.adjustPayMoney = function ($that) {
        var $tr = $that.closest('tr'),
            $payMoney = $tr.find('.T-pay-money'),
            data = {
                id : $tr.data('id'),
                isInnerTransferConfirm: $tr.data('is-inner'),
                subNeedPayMoney : $payMoney.text()
            };

        layer.open({
            type: 1,
            title: "调整本段团款",
            skin: 'layui-layer-rim', //加上边框
            area: '300px', //宽高
            zIndex: 1028,
            content: T.moneyAdjust(data),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);

                var validate = rule.checkPayMoney($layer);
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var id               =   $layer.find('.container-fluid').data('id'),
                        subNeedPayMoney  =   $layer.find('[name="subNeedPayMoney"]').val();
                    $.ajax({
                        url: KingServices.build_url('customerOrder', 'reEditTripMoney'),
                        data: {id : id, needPayAllMoney : subNeedPayMoney},
                    })
                    .done(function(data) {
                        if(showDialog(data)){
                            $payMoney.text(subNeedPayMoney || 0);
                            layer.close(index);
                        }
                    });
                });
            }
        });
    };

    /**
     * [updateMoneyAndGuest description]
     * @param  {[type]} $that      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    touristGroup.updateMoneyAndGuest = function($that, optionType){
        var html = "",
            data = {},
            title = "编辑信息",
            $tr = $that.closest('tr'),
            startTime = $tr.find('input[name=startTime]').val(),
            endTime = $tr.find('input[name=endTime]').val(),
            guestData = $tr.find('.T-guest-info').data('json'),
            moneyData = $tr.find('.T-receivable').data('json');

       
            $.ajax({
                url: KingServices.build_url('lineProduct','findProductPrice'),
                type: 'POST',
                data: {
                    id: $tr.data('lineproductid'),
                    startTime: startTime,
                    endTime: endTime
                }
            })
            .done(function(data) {
                if(showDialog(data)) {
                    console.log(data)
                    if(typeof guestData !== "object"){
                        data.guestData = JSON.parse(guestData || "{}");
                    }else{
                        data.guestData = guestData;
                    }

                    if(typeof moneyData !== "object"){
                        data.moneyData = JSON.parse(moneyData || "{}");
                    }else{
                        data.moneyData = moneyData;
                    }

                    if($that.hasClass('T-guest-info')){
                        data.isShowGuestInfo = true;
                    }
                    html = T.updateMoneyAndGuest(data);
                    layer.open({
                        type: 1,
                        title: title,
                        skin: 'layui-layer-rim', //加上边框
                        area: '1000px', //宽高
                        zIndex:1028,
                        content: html,
                        scrollbar: false,
                        success:function(obj, index){
                            var groupType = $that.closest('.T-container').data('type');

                            $(obj).on("change", '#tourists-update-guest-info, #tourists-update-money', function(){
                                $(this).data('change', true);
                            });

                            var $layerMoney = $(obj).find("#tourists-update-money"),
                                moneyValidate = touristGroup.bindLayerCommonFeeEvents($layerMoney, index, optionType, groupType),
                                $layerGuest   = $(obj).find("#tourists-update-guest-info"),
                                $tbody        = $layerGuest.find('.T-addTouristTbody'),
                                guestValidate = rule.checkGuest($layerGuest);


                            //绑定应收团款事件
                            //保存
                            $layerMoney.find('.T-btn-save').on('click', function(){
                                var isMoneySave = false,
                                    isGuestSave = true,
                                    isChange    = $layerGuest.data("change");
                                isMoneySave = touristGroup.jionGroupMoneySave( $layerMoney, index, moneyValidate, $that );
                                if(!!isMoneySave && $.type(isMoneySave) !=="object" && isChange){
                                    isGuestSave = touristGroup.guestInfoSave( $layerGuest, guestValidate, $that );
                                }

                                if($.type(isMoneySave) === "object"){
                                    var msg = isMoneySave.currentNeedPayMoney == "" ? 
                                              '未填写现收团款，是否继续？' : 
                                              '现收团款为0，是否继续？'
                                    showConfirmMsg(msg, function(){
                                        touristGroup.setJionGroupMoneyData($that, isMoneySave);
                                        if(isChange){
                                            isGuestSave = touristGroup.guestInfoSave( $layerGuest, guestValidate, $that );
                                        }
                                        checkSave();
                                    });
                                    return false;
                                }
                                checkSave();
                                return this;
                                function checkSave(){
                                    if(isMoneySave && !!isGuestSave){
                                        if($.type(isGuestSave) === "object"){
                                            touristGroup.setGuestInfoData($that, $layerGuest, isGuestSave);
                                        }
                                        layer.close(index);
                                    }else if(isMoneySave && !isGuestSave){
                                        $(obj).find('a[href="#tourists-update-guest-info"]').trigger('click');
                                    }
                                }
                            });

                            //绑定客人信息事件
                            $layerGuest.find('.T-add-tourist-more').on('click', function(){
                                touristGroup.batchAddTourists($layerGuest, guestValidate);
                            });
                            $layerGuest.find('.T-add-tourist').on('click', function(){
                                touristGroup.addVisotor($layerGuest, guestValidate);
                            });

                            $tbody.on('click', '.T-action', function(event){
                                event.preventDefault();
                                var $this = $(this), 
                                    id    = $this.closest('tr').data('id');

                                if($this.hasClass('T-delete')){
                                    if(!!id){
                                        var delJson = $this.closest('.T-addTouristTbody').data('del-json');
                                        if(typeof delJson !== "object"){
                                            delJson = JSON.parse(delJson || "[]");
                                        };
                                        delJson.push({
                                            id : id
                                        });
                                        $this.closest('.T-addTouristTbody').data('del-json', delJson);
                                        $this.closest('tr').remove();
                                    }else{
                                        $this.closest('tr').remove();
                                    }
                                    touristGroup.memberNumber($tbody);
                                }
                            });
                            $tbody.on('change', '[name="idCardType"]', function(event){
                                guestValidate = rule.guestUpdate(guestValidate);
                            });

                            $layerGuest.find('.T-btn-save').on('click', function(){
                                var isGuestSave = false, 
                                    isMoneySave = true,
                                    isChange    = $layerMoney.data("change");;

                                isGuestSave = touristGroup.guestInfoSave( $layerGuest, guestValidate, $that );
                                if(!!isGuestSave && isChange){
                                    isMoneySave = touristGroup.jionGroupMoneySave( $layerMoney, index, moneyValidate, $that );
                                    if($.type(isMoneySave) === "object"){
                                        var msg = isMoneySave.currentNeedPayMoney == "" ? 
                                                  '未填写现收团款，是否继续？' : 
                                                  '现收团款为0，是否继续？'
                                        showConfirmMsg(msg, function(){
                                            touristGroup.setJionGroupMoneyData($that, isMoneySave);
                                            isGuestSave = touristGroup.guestInfoSave( $layerGuest, guestValidate, $that );
                                            checkSave();
                                        });
                                        return false;
                                    }
                                }
                                checkSave();
                                return this;
                                function checkSave(){
                                    if(isGuestSave && !!isMoneySave){
                                        if($.type(isGuestSave) === "object"){
                                            touristGroup.setGuestInfoData($that, $layerGuest, isGuestSave);
                                        }
                                        layer.close(index);
                                    }else if(isGuestSave && !isMoneySave){
                                        $(obj).find('a[href="#tourists-update-money"]').trigger('click');
                                    }
                                }
                            });
                        }
                    });
                }
            });  
    }

    /**
     * [jionGroupMoneySave description]
     * @param  {[type]} $layer   [description]
     * @param  {[type]} index    [description]
     * @param  {[type]} validate [description]
     * @param  {[type]} $that    [description]
     * @return {[type]}          [description]
     */
    touristGroup.jionGroupMoneySave = function ( $layer, index, validate, $that ){
        if(!validate.form())return false;

        var moneyData = F.assemblyMoneyData($layer);
        if(moneyData.touristGroupFeeJsonAdd.length === 0){
            showMessageDialog('至少填写一条费用项！');
            return false;
        }
        if(!moneyData.currentNeedPayMoney || moneyData.currentNeedPayMoney == 0){
            return moneyData;
        }else{
            touristGroup.setJionGroupMoneyData($that, moneyData);
        }
        return true;
    };

    /**
     * [setJionGroupMoneyData description]
     * @param {[type]} $that     [description]
     * @param {[type]} moneyData [description]
     */
    touristGroup.setJionGroupMoneyData = function setMoneyData($that, moneyData){
        $that = $that.closest('tr').find('[name="needPayAllMoney"]');
        $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(moneyData)).trigger('blur');
        return true;
    }

    /**
     * 编辑/查看 客人信息事件
     * @param  {[type]} obj        [description]
     * @param  {[type]} index      [description]
     * @param  {[type]} optionType [description]
     * @return {[type]}            [description]
     */
    touristGroup.guestInfoEvent = function(obj, index, optionType, $that){
        var $layer = $(obj);
        var $tbody = $layer.find('.T-addTouristTbody'),
            validate = rule.checkGuest($layer);
        $layer.off().on('click', '.T-btn-close', function(event) {
            event.preventDefault();
            layer.close(index);
        });

        $layer.find('.T-add-tourist-more').on('click', function(){
            touristGroup.batchAddTourists($layer, validate);
        });
        $layer.find('.T-add-tourist').on('click', function(){
            touristGroup.addVisotor($layer, validate);
        });
        $tbody.on('click', '.T-action', function(event){
            event.preventDefault();
            var $this = $(this), id = $this.closest('tr').data('id');
            if($this.hasClass('T-delete')){
                if(!!id){
                    var delJson = $this.closest('.T-addTouristTbody').data('del-json');
                    if(typeof delJson !== "object"){
                        delJson = JSON.parse(delJson || "[]");
                    };
                    delJson.push({
                        id : id
                    });
                    $this.closest('.T-addTouristTbody').data('del-json', delJson);
                    $this.closest('tr').remove();
                }else{
                    $this.closest('tr').remove();
                    touristGroup.memberNumber($tbody);
                }
                touristGroup.memberNumber($tbody);
            }
        });
        $tbody.on('change', '[name="idCardType"]', function(event){
            validate = rule.guestUpdate(validate);
        });

        $layer.find('.T-btn-save').on('click', function(){
            touristGroup.guestInfoSave( $layer, index, validate, $that );
        });
    }

    /**
     * [guestInfoSave description]
     * @param  {[type]} $layer   [description]
     * @param  {[type]} index    [description]
     * @param  {[type]} validate [description]
     * @param  {[type]} $that    [description]
     * @return {[type]}          [description]
     */
    touristGroup.guestInfoSave = function ( $layer, validate, $that ){
        if(!validate.form())return false;
        var infoData = F.guestInfoData($layer);
        if(!infoData){
            showMessageDialog('至少设置一个联系人！');
            return false;
        }
        for(var i=0; i<infoData.touristGroupMemberJsonAdd.length; i++){
            var jsonAdd = infoData.touristGroupMemberJsonAdd[i];
            if(!!jsonAdd.isContactUser && jsonAdd.mobileNumber == ""){
                showMessageDialog('联系人的手机号码不能为空！');
                return false;
            }
            if(jsonAdd.mobileNumber == "" && jsonAdd.idCardNumber == ""){
                showMessageDialog('手机号码和证件号必填一项！');
                return false;
            }
        }
        
        return infoData;
    }

    /**
     * [setGuestInfoData description]
     * @param {[type]} $that    [description]
     * @param {[type]} $layer   [description]
     * @param {[type]} infoData [description]
     */
    touristGroup.setGuestInfoData = function( $that, $layer, infoData ){
        infoData.touristGroupMemberJsonDel = $layer.find('.T-addTouristTbody').data('del-json');
        if(typeof infoData.touristGroupMemberJsonDel !== "object"){
            infoData.touristGroupMemberJsonDel = JSON.parse(infoData.touristGroupMemberJsonDel || "[]");
        }

        $that = $that.closest('tr').find('[name="guestDetails"]');
        console.log(infoData);
        $that.val(infoData.guestName+"  "+(infoData.adultCount || 0)+"大"+(infoData.childCount || 0)+"小").data('json', JSON.stringify(infoData)).trigger('blur');
        $that.closest('.T-team-info').find('[name="mobileNumber"]').val(infoData.mobileNumber).trigger('blur');
    }

    /**
     * 编辑/查看 客人信息
     * @param  {object} $that [description]
     * @return {[type]}       [description]
     */
    touristGroup.updateGuestInfo = function($that, optionType){
        var data = $that.data('json'), html = "", title = "编辑客人名单";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        if(optionType === 1){
            title = "查看客人名单";
            html = T.viewGuestInfo(data);
        }else{
            html = T.guestInfo(data);
        }
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '1000px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(obj, index){
                touristGroup.guestInfoEvent(obj, index, optionType,  $that);
		    }
		});
    };

    //更新/查看 应收团款
    touristGroup.updateJionGroupMoney = function($that, type, optionType, remark, isInnerTransferConfirm){
        if (optionType === 2) {
            $that = $that.prev();
        }
        var title = "应收团款", data = {}, moneyData = $that.data('json'), html = "", groupType = $that.closest('.T-container').data('type');
        if(typeof moneyData !== "object"){
            moneyData = JSON.parse(moneyData || "{}");
        }else{
            moneyData.isInnerTransferConfirm = isInnerTransferConfirm;
        }

        if(!!type){
            moneyData.type = type;
            title = "线路应付";

            var $tr = $that.closest('tr'),
                $tab = $tr.closest('[id^="tab-resource_touristGroup"]'),
                receivable = $tab.find('.T-team-info .T-receivable').data('json');
            if(typeof receivable !== "object"){
                receivable = JSON.parse(receivable || "{}");
            }
            var lineData = $tr.find('[name="lineProductName"]').data('json');
            if(!lineData && optionType !== 1){
                layer.tips('请先选择线路产品！', $that.closest('tr').find('[name="lineProductName"]'), {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
                return false;
            }
            if(typeof lineData !== "object"){
                lineData = JSON.parse(lineData || "{}");
            }
            data.lineData = lineData;
            data.lineData.startTime = $tr.find('[name="tripStartTime"]').val() || $tr.find('[name="tripStartTime"]').text();
            data.needPayMoney = receivable.currentNeedPayMoney || 0;
            if(!!moneyData.lineFeeDel) moneyData.lineFeeDel = JSON.stringify(moneyData.lineFeeDel);
        }else{
            if(!!moneyData.touristGroupFeeJsonDel)moneyData.touristGroupFeeJsonDel = JSON.stringify(moneyData.touristGroupFeeJsonDel);
        }
        data.groupType = groupType;
        $.extend(data, moneyData);
        if(optionType===1 || optionType===2){
            if (optionType === 2) {
                title = '调整费用项';
                data.isFeeAdjust = true;
            }

            html = T.viewMoney(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;

            
        }else{
            html = T.updateMoney(data);
        }

    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '850px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj);
                var validate = touristGroup.bindLayerCommonFeeEvents($layer, index, optionType, groupType);
                
                $layer.find('[name="isNowIncome"]').on('change', function(){
                    if($(this).is(":checked")){
                        $layer.find('.T-now-money').removeClass('hidden');
                    }else{
                        $layer.find('.T-now-money').addClass('hidden');
                    }
                });

                if (!!remark && $layer.find('[name=remark]').val().length == 0 && remark.length > 0) {
                    $layer.find('.T-replace-remark').val(remark)
                }

                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;

                    if (optionType === 2) {
                        var feeData = {}, feeList = [];
                        $layer.find('.T-fee-list').find('select').closest('tr').each(function(index, el) {
                            feeList.push(
                                {
                                    count : $layer.find('[name="count"]').val(),
                                    days : $layer.find('[name="days"]').val(),
                                    price : $layer.find('[name="price"]').val(),
                                    remark : $layer.find('[name="remark"]').val(),
                                    type : $layer.find('[name="type"]').val()
                                });
                        });
                        feeData.feeList = feeList;
                        feeData.id = $that.closest('tr').data('id') || $that.closest('.T-container').data('id');
                        feeData.currentNeedPayMoney = $layer.find('.currentNeedPayMoney').val() || 0;

                        $.ajax({
                            url : KingServices.build_url('customerOrder', 'reEditFee'),
                            data : {saveJson : JSON.stringify(feeData)}
                        }).done(function(data){
                            if(showDialog(data)){
                                touristGroup.overlayFee($that, feeData)
                                layer.close(index);
                            }
                        });

                        return this;
                    };

                    var moneyData = F.assemblyMoneyData($layer);
                    if(moneyData.touristGroupFeeJsonAdd.length === 0){
                        showMessageDialog('至少填写一条费用项！');
                        return false;
                    }
                    if(!!type){
                        if($layer.find('.T-abversion').val() == "2"){
                            moneyData.isTransfer = 2;
                            moneyData.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                            moneyData.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                        }else if($layer.find('.T-abversion').val() == "1"){
                            moneyData.isTransfer = 1;
                            moneyData.dutyDepartmentName = $layer.find('[name="dutyDepartmentName"]').val();
                            moneyData.dutyDepartmentId = $layer.find('[name="dutyDepartmentName"]').data('id');
                            moneyData.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                            moneyData.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                        }else{
                            moneyData.isTransfer = 0;
                        }
                        moneyData.remark = $layer.find('[name="remark"]').val();
                        moneyData.currentNeedPayMoney = $layer.find('[name="preIncomeMoney"]').val();
                        
                        moneyData.lineFee = moneyData.touristGroupFeeJsonAdd;
                        moneyData.lineFeeDel = moneyData.touristGroupFeeJsonDel;
                        delete moneyData.touristGroupFeeJsonAdd;
                        delete moneyData.touristGroupFeeJsonDel;
                        var $tr = $that.closest('tr');
                        $tr.find('[name="currentNeedPayMoney"]').val(moneyData.currentNeedPayMoney);
                        if($tr.find('[name="subNeedPayMoney"]').data('change') != "1"){
                            $tr.find('[name="subNeedPayMoney"]').val(moneyData.needPayAllMoney);
                        }
                        var str = Tools.thousandPoint(moneyData.needPayAllMoney, 2);
                        if(moneyData.isTransfer === 1){
                            str = "他部　" + moneyData.dutyDepartmentName + "　" + Tools.thousandPoint(moneyData.needPayAllMoney, 2);
                        }else if(moneyData.isTransfer === 2){
                            str = "外转　" + moneyData.transferPartnerAgency + "　" + Tools.thousandPoint(moneyData.needPayAllMoney, 2);
                        }
                        $that.val(str).data('json', JSON.stringify(moneyData)).trigger('blur');
                        layer.close(index);
                        F.subtotal($that.closest('tr'), 1);
                    }else{
                        if(!moneyData.currentNeedPayMoney || moneyData.currentNeedPayMoney == 0){
                            /*showConfirmMsg('现收团款，是否继续？', function(){
                                $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(moneyData)).trigger('blur');
                                layer.close(index);
                            });*/
                            var msg = moneyData.currentNeedPayMoney == "" ? 
                                      '未填写现收团款，是否继续？' : 
                                      '现收团款为0，是否继续？'
                            showConfirmMsg(msg, function(){
                                $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(moneyData)).trigger('blur');
                                layer.close(index);
                            });
                        }else{
                            $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(moneyData)).trigger('blur');
                            layer.close(index);
                        }
                    }
                });
		    }
		});
    };

    //更新/查看 接/送团车辆
    touristGroup.updateJionGroupBus = function(type, $that, optionType){
    	var title = "接团车辆",
            data = $that.data('json'),
            html = "";
    	if(type === 2){
    		title = "送团车辆";
    	}
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        data.busFeeDel = JSON.stringify(data.busFeeDel || []);
        if(optionType === 1){
            html = T.viewBus(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
        }else{
            html = T.updateBus(data);
        }
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj);
                var validate = touristGroup.bindLayerCommonFeeEvents($layer, index, optionType);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var baseInfo = {
                            require : $layer.find('[name="requireContent"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="businessName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="businessName"]').data('id');
                        baseInfo.dutySubDepartmentName = $layer.find('[name="groupName"]').val();
                        baseInfo.dutySubDepartmentId = $layer.find('[name="groupName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    moneyData.busFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.busFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), 0);
                });
		    }
		});
    };

    //更新接/参/送团房
    touristGroup.updateJionGroupHotel = function(type, $that, optionType){
    	var title = "接团住宿", data = $that.data('json'), html = "";
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
    	if(type === 1){
    		title = "返程住宿";
    	}else if(type === 2){
            title = "送团住宿";
        }
        data.type = type;
        if(typeof data.hotel === "object"){
            data.hotel = JSON.stringify(data.hotel || []);
        }
        data.hotelFeeDel = JSON.stringify(data.hotelFeeDel || []);
        if(optionType === 1){
            html = T.viewHotel(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
        }else{
            html = T.updateHotel(data);
        }
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(obj, index){
                var $layer = $(obj);
                var validate = touristGroup.bindLayerCommonFeeEvents($layer, index, optionType);
		    	$layer.find('.T-choose-hotel').on('click', function() {
                    touristGroup.chooseHotel($(this));
                });
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var hotelJson = $layer.find('[name="hotel"]').data('json');
                    var baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            require : $layer.find('[name="requireContent"]').val(),
                            hotel : typeof hotelJson !== "object" ? JSON.parse(hotelJson || "[]") : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val(),
                            hotelIds : ""
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="businessName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="businessName"]').data('id');
                        baseInfo.dutySubDepartmentName = $layer.find('[name="groupName"]').val();
                        baseInfo.dutySubDepartmentId = $layer.find('[name="groupName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    for(var i = 0; i < baseInfo.hotel.length; i++){
                        if(i != baseInfo.hotel.length-1){
                            baseInfo.hotelIds += baseInfo.hotel[i].id + ",";
                        }else{
                            baseInfo.hotelIds += baseInfo.hotel[i].id;
                        }
                    }
                    baseInfo.hotel = JSON.stringify(baseInfo.hotel);
                    var id = $layer.find('.container-fluid').data('id');
                    if(!!id){
                        baseInfo.id = id;
                    }
                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.hotelFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    if(type === 1){
                        var str = baseInfo.isTransfer === 0 ? "本部" : "他部";
                        $that.val(str + "　" + Tools.thousandPoint(moneyData.needPayAllMoney, 2)).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    }else{
                        $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                        F.subtotal($that.closest('tr'), 0);
                    }
                    layer.close(index);
                });
		    }
		});
    };

    //更新接/送团其它
    touristGroup.updateJionGroupOther = function(type, $that, optionType){
    	var title = "接团其它", data = $that.data('json') || "{}", html = "";
    	if(type === 2){
    		title = "送团其它";
    	}
        if(typeof data !== "object"){
            data = JSON.parse(data || "{}");
        }
        if(!!data.otherFeeDel)data.otherFeeDel = JSON.stringify(data.otherFeeDel);
        
        if(optionType === 1){
            html = T.viewOther(data);
            html = Tools.filterMoney(html);
            html = Tools.filterCount(html);
            html = Tools.filterUnPoint(html)[0].outerHTML;
        }else{
            html = T.updateOther(data);
        }
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: html,
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj), $plan = $layer.find('.T-action-plan');
                var validate = touristGroup.bindLayerCommonFeeEvents($layer, index, optionType);
                $plan.on('change', 'input[type="checkbox"]', function(event){
                    event.preventDefault();
                    var $that = $(this), 
                        $label = $that.closest('label'),
                        type = $label.data('type');

                    if(type === "restaurant"){
                        $layer.find('.T-ask-restaurant').toggleClass('hidden');
                    }else if(type === "ticket"){
                        $layer.find('.T-ask-ticket').toggleClass('hidden');
                    }else if(type === "other"){
                        $layer.find('.T-ask-other').toggleClass('hidden');
                    }
                    rule.needUpdate(validate);
                });
                $layer.find('.T-btn-save').on('click', function(){
                    if(!validate.form())return;
                    var baseInfo = {
                            consumeTime : $layer.find('[name="consumeTime"]').val(),
                            isRestaurantRequired : 0,
                            isTicketRequired : 0,
                            isOtherRequired : 0
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('[name="isRestaurantRequired"]').is(":checked")){
                        var $rest = $layer.find('[name="restaurantRequired"]');

                        baseInfo.isRestaurantRequired = 1;
                        baseInfo.restaurantRequired = $rest.val();
                    }
                    if($layer.find('.T-abversion').val() == "2"){
                        baseInfo.isTransfer = 2;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                        baseInfo.transferPartnerAgencyId = $layer.find('[name="transferPartnerAgency"]').data('id');
                    }else if($layer.find('.T-abversion').val() == "1"){
                        baseInfo.isTransfer = 1;
                        baseInfo.dutyDepartmentName = $layer.find('[name="businessName"]').val();
                        baseInfo.dutyDepartmentId = $layer.find('[name="businessName"]').data('id');
                        baseInfo.dutySubDepartmentName = $layer.find('[name="groupName"]').val();
                        baseInfo.dutySubDepartmentId = $layer.find('[name="groupName"]').data('id');
                        baseInfo.dutyUserName = $layer.find('[name="dutyUserName"]').val();
                        baseInfo.dutyUserId = $layer.find('[name="dutyUserName"]').data('id');
                    }else{
                        baseInfo.isTransfer = 0;
                    }
                    if($layer.find('[name="isTicketRequired"]').is(":checked")){
                        var $ticket = $layer.find('[name="ticketRequired"]');

                        baseInfo.isTicketRequired = 1;
                        baseInfo.ticketRequired = $ticket.val();
                    }
                    if($layer.find('[name="isOtherRequired"]').is(":checked")){
                        var $other = $layer.find('[name="otherRequired"]');

                        baseInfo.isOtherRequired = 1;
                        baseInfo.otherRequired = $other.val();
                    }
                    moneyData.otherFee = moneyData.touristGroupFeeJsonAdd;
                    moneyData.otherFeeDel = moneyData.touristGroupFeeJsonDel;
                    delete moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonDel;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(baseInfo)).data('clear', '0');
                    layer.close(index);
                    F.subtotal($that.closest('tr'), 0);
                });
		    }
		});
    };

    //参团外转操作
    touristGroup.updateOuterTurn = function(id){
        $.ajax({
            url: KingServices.build_url('customerOrder', 'getTransferInfo'),
            data: {id: id},
        })
        .done(function(data) {
            if(showDialog(data)){
                layerOuterTurn(data);
            }
        });
        return this;
        function layerOuterTurn(data){
            layer.open({
                type: 1,
                title: "编辑外转信息",
                skin: 'layui-layer-rim', //加上边框
                area: '870px', //宽高
                zIndex:1028,
                content: T.updateOuterTurn(data),
                scrollbar: false,
                success:function(obj, index){
                    var $layer = $(obj);
                    var validate = touristGroup.bindLayerCommonFeeEvents($layer, index);
                    $layer.find('.T-btn-save').on('click', function(){
                        if(!validate.form())return;
                        saveOuterTurn($layer, index);
                    });
                }
            });
        }
        function saveOuterTurn($layer, index) {
            var id = $layer.find('.T-outer-turn').data('id'),
                baseInfo = {
                    transferPartnerAgency : $layer.find('[name="transferPartnerAgency"]').val(),
                    transferPartnerAgencyId : $layer.find('[name="transferPartnerAgency"]').data('id'),
                    remark : $layer.find('[name="remark"]').val(),
                    needPayAllMoney : $layer.find('[name="needPayAllMoney"]').val(),
                    id : id
                },
                moneyData = F.assemblyMoneyData($layer);
                moneyData.lineFee = moneyData.touristGroupFeeJsonAdd;
                moneyData.lineFeeDel = moneyData.touristGroupFeeJsonDel;
                delete moneyData.touristGroupFeeJsonAdd;
                delete moneyData.touristGroupFeeJsonDel;
                $.extend(baseInfo, moneyData);
            $.ajax({
                url: KingServices.build_url('customerOrder', 'doTransfer'),
                data: {lineInfo: JSON.stringify(baseInfo), id : id},
            })
            .done(function(data) {
                if(showDialog(data)){
                    showMessageDialog(data.message, function() {
                        layer.close(index);
                        var $listTab = $("#tab-customer_order-content");
                        if($listTab.length > 0){
                            $listTab.find('#customerOrderTouristsOrder').find('.T-touristGroupList-search').trigger('click');
                        }else{
                            touristGroup.listTouristGroup(0);
                        }
                    });
                }
            });
            
        }
    };

    /**
     * 绑定弹层费用项公共事件
     * @param  {object} $layer layer的jQuery对象
     */
    touristGroup.bindLayerCommonFeeEvents = function($layer, layerIndex, type, groupType){
        $layer.find('.T-btn-close').on('click', function(){
            layer.close(layerIndex);
        });
        if(type === 1){
            return false;
        }
        var validate = rule.checkNeed($layer);
        $layer.find('.F-float').trigger('change');
        $layer.data("change", false);
        if($layer.find('.datepicker').length > 0){
            Tools.setDatePicker($layer.find('.datepicker'));
        }
        var $tbody = $layer.find('.T-fee-list');
        //添加
        $layer.find('.T-add-fee').on('click', function(){
            var option = "",
                days = '';
            if($tbody.data('type') == "1"){
                option = '<option value="4">车辆费用</option>';
            }else if($tbody.data('type') == "2"){
                option = '<option value="8">酒店费用</option>';
            }else if($tbody.data('type') == "3"){
                option = '<option value="5">餐厅费用</option>'+
                         '<option value="11">票务费用</option>'+
                         '<option value="12">其他费用</option>';
            }else if($tbody.data('type') == "4"){
                option = '<option value="1">大人结算价</option>'+
                         '<option value="2">小孩结算价</option>'+
                         '<option value="8">酒店费用</option>'+
                         '<option value="12">其他费用</option>';
            }else{
                option = '<option value="1">大人结算价</option>'+
                         '<option value="2">小孩结算价</option>'+
                         '<option value="4">车辆费用</option>'+
                         '<option value="5">餐厅费用</option>'+
                         '<option value="6">保险费用</option>'+
                         '<option value="7">导服费</option>'+
                         '<option value="8">酒店费用</option>'+
                         '<option value="9">景区费用</option>'+
                         '<option value="10">自费费用</option>'+
                         '<option value="11">票务费用</option>'+
                         '<option value="12">其他费用</option>';
                days = '<td><input type="text" class="col-xs-12 T-option" name="days" value="1"></td>';
            }
            $tbody.append('<tr>'+
                '<td><select class="col-xs-12" name="type">'+option+'</select></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>'+days+
                '<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>'+
                '<td><input type="text" class="col-xs-12" name="remark"></td>'+
                '<td><a class="cursor T-action T-delete">删除</a></td>'+
                '</tr>');
            rule.needUpdate(validate);
        });
        //是否外转
        $layer.find('.T-abversion').on('change', function(){
            var $peer = $layer.find('.T-peer'),
                $internal = $layer.find('.T-internal');
            if($(this).val() == "1"){
                $internal.removeClass('hidden');
                $peer.addClass('hidden');
                rule.needUpdate(validate);
            }else if($(this).val() == "2"){
                $peer.removeClass('hidden');
                $internal.addClass('hidden');
                rule.needUpdate(validate);
            }else{
                $peer.addClass('hidden');
                $internal.addClass('hidden');
                rule.needUpdate(validate);
            }
        });
        //绑定责任部门和责任计调
        touristGroup.getBusinessGroup($layer.find('[name="dutyDepartmentName"]'));
        touristGroup.getDutyUserName($layer.find('[name="dutyUserName"]'));
        //绑定同行事件
        touristGroup.getPartnerAgencyList($layer.find('[name="transferPartnerAgency"]'));
        //绑定部门
        touristGroup.getBusinessList($layer.find('[name="businessName"]'));
        touristGroup.getGroupMapList($layer.find('[name="groupName"]'));
        //表内操作
        //删除
        $tbody.on('click', '.T-action', function(event){
            event.preventDefault();
            var $this = $(this), $tr = $this.closest('tr') , id = $tr.data('id');
            if($this.hasClass('T-delete')){
                if(!!id){
                    var delJson = $this.closest('.T-fee-list').data('del-json');

                    if(typeof delJson !== "object" || !delJson){
                        delJson = JSON.parse(delJson || "[]");
                    }

                    delJson.push({
                        id : id
                    });
                    $this.closest('.T-fee-list').data('del-json', JSON.stringify(delJson));
                    $tr.remove();
                }else{
                    $tr.remove();
                }
                F.calcMoney($(this), $layer);
            }
        });
        $tbody.on('change', '.T-option', function(event){
            event.preventDefault();
            F.calcMoney($(this), $layer);
        });
        return validate;
    };

    //缓存选中的自选酒店
    touristGroup.selectHotelCache = [];
    /**
     * 自选酒店
     * @param  {object} $that 触发对象的jQuery对象
     */
    touristGroup.chooseHotel = function($that){
        var data = typeof $that.data('json') !== 'object' || !$that.data('json') ? JSON.parse($that.data('json') || "[]") : $that.data('json');
        touristGroup.selectHotelCache = data;
        layer.open({
            type: 1,
            title: "自选酒店",
            skin: 'layui-layer-rim', //加上边框
            area: '570px', //宽高
            zIndex:1028,
            content: T.chooseHotel(),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.getHotelList(0, $layer);
                $layer.find('.T-btn-search').on('click', function(){
                    touristGroup.getHotelList({
                        pageNo : 0,
                        name : $layer.find('.T-hotel-name').val()
                    }, $layer);
                });
                $layer.find('.T-hotel-list').on('change', '.T-select', function(){
                    var $that = $(this);
                    if($that.is(":checked")){
                        cacheCheckData($that, 1);
                    }else{
                        cacheCheckData($that, 0);
                    }
                });
                $layer.find('.T-btn-save').on('click', function(){
                    var str = "";
                    for(var i=0, len = touristGroup.selectHotelCache.length; i<len;i++){
                        if(i != len - 1){
                            str = str + touristGroup.selectHotelCache[i].name + ",";
                        }else{
                            str += touristGroup.selectHotelCache[i].name;
                        }
                    }
                    $that.data('json', JSON.stringify(touristGroup.selectHotelCache)).val(str);
                    layer.close(index);
                });
                //关闭
                $layer.find('.T-btn-close').on('click', function(){
                    layer.close(index);
                });
            }
        });

        return;
        function cacheCheckData($that, operation) {
            var $tr = $that.closest('tr'),
                id = $tr.data('id'),
                name = $tr.find('[name="hotelName"]').text();
            if(touristGroup.selectHotelCache.length > 0){
                for(var i=0, len = touristGroup.selectHotelCache.length; i<len; i++){
                    if(operation === 1){
                        if(touristGroup.selectHotelCache[i].id === id){
                            break;
                        }
                        if(i === len - 1 && id !== touristGroup.selectHotelCache[i].id){
                            touristGroup.selectHotelCache.push({
                                id : id,
                                name : name,
                                ischeck : 1
                            });
                        }
                    }else{
                        if(touristGroup.selectHotelCache[i].id == id){
                            touristGroup.selectHotelCache.splice(i, 1);
                            break;
                        }
                    }
                }
            }else if(operation === 1){
                touristGroup.selectHotelCache.push({
                    id : id,
                    name : name,
                    ischeck : 1
                });
            }
        }
    };
    /**
     * 替换数据
     * @param  {Array}  resultList  原有的数据
     * @param  {Array}  tempJson   新数据
     */
    touristGroup.getTempDate = function(resultList,tempJson){
        if(!!tempJson && tempJson.length){
            for(var i = 0; i < tempJson.length; i++){
                var tempId = tempJson[i].id;
                for(var j = 0; j < resultList.length; j++){
                    var id = resultList[j].id;
                    if(tempId == id){
                        resultList[j].ischeck = tempJson[i].ischeck || true;
                    }
                }
            }
        };
        return resultList;
    };
    /**
     * 获取自选酒店列表
     * @param  {number/object} args       请求参数
     * @param  {object}        $layer     layer的jQuery对象
     * @param  {number}        layerIndex layer的索引
     */
    touristGroup.getHotelList = function(args, $layer, layerIndex){
        if(typeof args === "number"){
            var page = args;
            args = {};
            args.pageNo = page;
        }
        $.ajax({
            url : KingServices.build_url('hotel', 'selectHotel'),
            data : args,
            type: 'POST',
            success : function(data){
                if(showDialog(data)){
                    data.hotelList = JSON.parse(data.hotelList);
                    data.hotelList = touristGroup.getTempDate(data.hotelList, touristGroup.selectHotelCache);
                    var html = T.chooseHotelList(data);
                    $layer.find('.T-hotel-list').html(html);
                    //绑定分页插件
                    laypage({
                        cont: $layer.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                args.pageNo = (obj.curr - 1);
                                touristGroup.getHotelList(args, $layer);
                            }
                        }
                    });
                    $(document).trigger('resize');
                }else if(!!layerIndex){
                    layer.close(layerIndex);
                }
            }
        });
    };
    
    //游客列表序号自动升序
    touristGroup.memberNumber = function($obj) {
        var $tbody = $obj.children('tr');
        $tbody.each(function(i) {
            $(this).children().eq(0).text(i + 1);
        });
    };

    //批量添加游客
    touristGroup.batchAddTourists = function($obj, validate) {
        seajs.use("" + ASSETS_ROOT + modalScripts.arrange_plan,function(module){
            module.addVisotorMore($obj.find('.T-addTouristTbody'), function($layer, data){
                var $tr = $layer.find('tr[data-default="1"]');
                if($tr.length > 0 && $tr.find('[name="name"]').val() == ""&&$tr.find('[name="mobileNumber"]').val() == ""&&$tr.find('[name="idCardNumber"]').val() == ""&&$tr.find('[name="remark"]').val() == "" && data.length > 0){
                    $tr.remove();
                }
                touristGroup.memberNumber($layer);
                rule.guestUpdate(validate);
            });
        });
    };
    /**
     * 搜索线路产品
     * @param  {object} $that $(this)
     */
    touristGroup.chooseLineProduct = function($that){
        layer.open({
            type: 1,
            title: "选择线路产品",
            skin: 'hct-layui-layer-style layui-layer-rim', //加上边框
            area: '1024px', //宽高
            zIndex: 1028,
            content: T.chooseLineProduct(),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.getLineProductList(0, $layer);
                $layer.find('.T-btn-search').on('click', function(){
                    touristGroup.getLineProductList({
                        pageNo : 0,
                        name : $layer.find('[name="lineProductName"]').val()
                    }, $layer);
                });

                $layer.find('.T-line-product-list').on('click', '[name="chooseLineProduct"]', function () {
                     getLineData($(this));
                });
                //关闭
                $layer.find('.T-btn-close').on('click', function(){
                    layer.close(index);
                });

                function getLineData($this) {
                    var $tr = $this.closest('tr'),
                        lineData = {
                        id : $tr.data('id'),
                        lineProductName : $tr.find('[name="lineProductName"]').text(),
                        days : $tr.find('[name="days"]').text(),
                    }
                    $that.closest('td').find('[name="lineProductName"]').val(lineData.lineProductName).data('id', lineData.id).data('json', JSON.stringify(lineData)).trigger('blur');
                    $that.closest('tr').data('lineproductid',lineData.id);
                    layer.close(index);
                    F.autoCalcDate($that);
                }
                
            }
        });
    }
    /**
     * 获取线路产品列表
     * @param  {object} args       请求参数
     * @param  {object} $layer     layer的jQuery对象
     * @param  {number} layerIndex layer的索引
     */
    touristGroup.getLineProductList = function(args, $layer, layerIndex){
        if(typeof args === "number"){
            var page = args;
            args = {};
            args.pageNo = page;
        }
        $.ajax({
            url: KingServices.build_url('lineProduct', 'findAll'),
            type: 'post',
            data: args,
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.lineProductList = JSON.parse(data.lineProductList);
                $layer.find('.T-line-product-list').html(T.chooseLineProductList(data));

                $layer.find('.T-record-size').text(data.recordSize);

                // 绑定翻页组件
                laypage({
                    cont: $layer.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            args.pageNo = (obj.curr - 1);
                            touristGroup.getLineProductList(args, $layer);
                        }
                    }
                }); 
 
                // 让对话框居中
                $(document).trigger('resize');
            }else if(!!layerIndex){
                layer.close(layerIndex);
            }
        });
    };

    /**
     * 绑定外联销售的选择
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    touristGroup.getOPUserList = function($target, isShow){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data('id', item.id);
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url('tripPlan', 'getOPUserList'),
                type: 'post',
            })
            .done(function(data) {
                if (showDialog(data)) {
                    if($target.val() == "" && !isShow){
                        $target.val(data.realName).data('id', data.userId);
                    }
                    
                    var userList = JSON.parse(data.userList || false);
                    if (!!userList) {
                        for (var i = 0, len = userList.length;i < len; i++) {
                            userList[i].value = userList[i].realName;
                        }

                        $target.autocomplete('option', 'source', userList).data('ajax', true);
                        if(!!isShow){
                            $target.autocomplete('search', '');
                        }
                    }
                }
            });
        })
        .on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        })
    };

    /**
     * 绑定责任部门的选择
     * @param  {object} $target 绑定选择的Jquery对象
     */
    touristGroup.getBusinessGroup = function($target) {
        var $dutyUser = $target.closest('.layui-layer-content').find('[name="dutyUserName"]');
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                    $dutyUser.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                if(item.id != $target.data('id')){
                    $dutyUser.val('').data('id', '');
                }
                $target.blur().data('id', item.id);
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url('innerTransferOperation', 'getBusinessGroupList'),
                type: 'post',
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var businessGroupList = JSON.parse(data.businessGroupList || false);
                    if (!!businessGroupList) {
                        for (var i = 0, len = businessGroupList.length;i < len; i++) {
                            businessGroupList[i].value = businessGroupList[i].name;
                        }

                        $target.autocomplete('option', 'source', businessGroupList).data('ajax', true);
                        $target.autocomplete('search', '');
                    }
                }
            });
        })
        .on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        })
    };

    /**
     * 绑定部门
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    touristGroup.getBusinessList = function($target){
        var $groupName = $target.closest('.layui-layer-content').find('[name="groupName"]'),
            $dutyUser = $target.closest('.layui-layer-content').find('[name="dutyUserName"]');
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                    $groupName.val('').data('id', '');
                    $dutyUser.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                if(item.id != $target.data('id')){
                    $groupName.val('').data('id', '');
                    $dutyUser.val('').data('id', '');
                }
                $target.blur().data('id', item.id);
            }
        }).on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }else{
                $.ajax({
                    url: KingServices.build_url('innerTransferOperation', 'getBusinessGroupList'),
                    type: 'post',
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var businessGroupList = JSON.parse(data.businessGroupList || null);
                        if (!!businessGroupList) {
                            for (var i = 0, len = businessGroupList.length;i < len; i++) {
                                businessGroupList[i].value = businessGroupList[i].name;
                            }

                            $target.autocomplete('option', 'source', businessGroupList).data('ajax', true);
                            $target.autocomplete('search', '');
                        }
                    }
                });
            }
        });
    };

    /**
     * 绑定子部门
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    touristGroup.getGroupMapList = function($target){
        var $businessName = $target.closest('.layui-layer-content').find('[name="businessName"]'),
            $dutyUser = $target.closest('.layui-layer-content').find('[name="dutyUserName"]');
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                    $dutyUser.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                if(item.id != $target.data('id')){
                    $dutyUser.val('').data('id', '');
                }
                $target.blur().data('id', item.id);
            }
        }).on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var businessNameId = $businessName.data('id');
            if(!!businessNameId){
                $.ajax({
                    url: KingServices.build_url('group', 'selectGroup'),
                    type: 'post',
                    data: "businessGroupId=" + businessNameId,
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        var groupMapList = data.groupMapList;
                        if (!!groupMapList) {
                            for (var i = 0, len = groupMapList.length;i < len; i++) {
                                groupMapList[i].id = groupMapList[i].groupId;
                                groupMapList[i].value = groupMapList[i].groupName;
                            }

                            $target.autocomplete('option', 'source', groupMapList);
                            $target.autocomplete('search', '');
                        }
                    }
                });
            }else{
                layer.tips('请先选择部门！', $businessName, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }
        });
    }

    /**
     * 绑定责任计调的选择
     * @param  {object} $target 绑定选择的Jquery对象
     */
    touristGroup.getDutyUserName = function($target) {
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data('id', item.id);
            }
        })
        .on('click', function(event) {
            event.preventDefault();
            var $dutyDepartment = $target.closest('.layui-layer-content').find('[name="dutyDepartmentName"]');
            $dutyDepartment = $dutyDepartment.length > 0 ? $dutyDepartment : $target.closest('.layui-layer-content').find('[name="groupName"]');
            var businessGroupId = $dutyDepartment.data('id');
            var type = $dutyDepartment.data('type');
            var url = !!type ? KingServices.build_url('group', 'selectDutyUser') : KingServices.build_url('innerTransferOperation', 'getDutyOPUserList');
            var data = !!type ? {"groupId" : businessGroupId} : {businessGroupId : businessGroupId};
            if(!!businessGroupId){
                $.ajax({
                    url: url,
                    type: 'post',
                    data: data,
                    showLoading: false,
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        if(!!type){
                            var dutyUserList = data.dutyUserList;
                            if (!!dutyUserList) {
                                for (var i = 0, len = dutyUserList.length;i < len; i++) {
                                    dutyUserList[i].value = dutyUserList[i].dutyUserName;
                                    dutyUserList[i].id = dutyUserList[i].dutyUserId;
                                }

                                $target.autocomplete('option', 'source', dutyUserList);
                                $target.autocomplete('search', '');
                            }
                        }else{
                            var opUserList = data.opUserList;
                            if (!!opUserList) {
                                for (var i = 0, len = opUserList.length;i < len; i++) {
                                    opUserList[i].value = opUserList[i].realName;
                                }

                                $target.autocomplete('option', 'source', opUserList);
                                $target.autocomplete('search', '');
                            }
                        }
                    }
                });
            }else{
                var tps = $dutyDepartment.attr('name') === "dutyDepartmentName" ? '请先选择责任部门！' : '请先选择子部门！';
                layer.tips(tps, $dutyDepartment, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            } 
        });
    };

    /**
     * 绑定组团社的选择
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    touristGroup.getListPartnerAgencyList = function($target){
        return $target.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $target.nextAll("[name=fromPartnerAgencyId]").val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                $target.find("[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var obj = this;
            var formParObj = touristGroup.autocompleteDate.fromPartnerAgencyList;
            if (formParObj != null && formParObj.length > 0) {
                for (var i = 0; i < formParObj.length; i++) {
                    formParObj[i].value = formParObj[i].travelAgencyName;
                }
            }
            $(obj).autocomplete('option', 'source', formParObj);
            $(obj).autocomplete('search', '');
        });
    };

    /**
     * 绑定业务部的选择
     * @param  {[type]} $target [description]
     * @return {[type]}         [description]
     */
    touristGroup.getBussinessList = function($target){
        return $target.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $target.nextAll("[name=fromBussinessGroupId]").val("");
                }
            },
            select: function(event, ui) {
                $(this).blur();
                $target.find("[name=fromBussinessGroupId]").val(ui.item.id).trigger('change');
            }
        }).off('click').on('click', function() {
            var obj = this;
            var formParObj = touristGroup.autocompleteDate.fromBusinessGroupList;
            if (formParObj != null && formParObj.length > 0) {
                for (var i = 0; i < formParObj.length; i++) {
                    formParObj[i].value = formParObj[i].businessGroupName;
                }
            }
            $(obj).autocomplete('option', 'source', formParObj);
            $(obj).autocomplete('search', '');
        });
    };

    /**
     * 绑定同行的选择
     * @param  {object} $target 绑定选择的Jquery对象
     */
    touristGroup.getPartnerAgencyList = function($target) {
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.val('').data('id', '');
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data('id', item.id);
            }
        })
        .one('click', function(event) {
            event.preventDefault();
            $.ajax({
                url: KingServices.build_url('partnerAgency', 'findPartnerAgencyByOtherTravelAgency'),
                type: 'post',
                showLoading: false,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var partnerAgencyList = JSON.parse(data.partnerAgencyList || false);
                    if (!!partnerAgencyList) {
                        for (var i = 0, len = partnerAgencyList.length;i < len; i++) {
                            partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
                        }

                        $target.autocomplete('option', 'source', partnerAgencyList).data('ajax', true);
                        $target.autocomplete('search', '');
                    }
                }
            });
        }).on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        });
    };

    //获取搜索区域的数据
    touristGroup.getSearchAreaData = function() {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryTermsForTouristGroup"),
            data: {operation: "view"},
            type: 'POST',
            showLoading : false,
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
                    touristGroup.autocompleteDate.fromPartnerAgencyList = data.fromPartnerAgencyList;
                    touristGroup.autocompleteDate.fromBusinessGroupList = data.fromBusinessGroupList;
                    touristGroup.autocompleteDate.fromPartnerAgencyList.unshift(optional);
                    touristGroup.autocompleteDate.fromBusinessGroupList.unshift(buissness);
                }
            }
        });
    };

    /**
     * 保存新增/编辑数据
     * @param  {object} $tab tab的jQuery对象
     * @param  {[type]} validate [description]
     * @param  {[type]} tabArgs  [description]
     * @return {[type]}      [description]
     */
    touristGroup.saveData = function($tab, validate, tabArgs){
        var data = {},
            $baseInfo = $tab.find('.T-team-info'),
            $joinGroup = $tab.find('.T-join-group-list'),
            $partGroup = $tab.find('.T-part-group-list'),
            $sendGroup = $tab.find('.T-send-group-list'),
            $otherInfo = $tab.find('.T-other-info-cont'),
            guestDetails = $baseInfo.find('[name="guestDetails"]').data('json') || "{}";

        //转换客人信息并且删除
        if(typeof guestDetails !== "object" || !guestDetails){
            guestDetails = JSON.parse(guestDetails);
        }
        if(!$.isEmptyObject(guestDetails)){
            delete guestDetails.guestName;
            delete guestDetails.mobileNumber;
        }

        var touristGroupFee = $baseInfo.find('[name="needPayAllMoney"]').data('json')
        //小组信息
        data.baseInfo = {
            fromPartnerAgency : $baseInfo.find('[name="fromPartnerAgency"]').val(),
            fromPartnerAgencyId : $baseInfo.find('[name="fromPartnerAgency"]').data("id"),
            fromPartnerAgencyContactId : $baseInfo.find('[name="fromPartnerAgency"]').data("contact-id"),
            lineProductName : $baseInfo.find('[name="lineProductName"]').val(),
            lineProductId : $baseInfo.find('[name="lineProductName"]').data("id"),
            startTime : $baseInfo.find('[name="startTime"]').val(),
            endTime : $baseInfo.find('[name="endTime"]').val(),
            touristGroupFee : typeof touristGroupFee !== "object" ? JSON.parse(touristGroupFee || "{}") : touristGroupFee,
            touristGroupMemberInfo : guestDetails,
            outOPUserId : $baseInfo.find('[name="outOPUserName"]').data("id"),
            customerType : $baseInfo.find('.T-single-group').is(":checked") ? 0 : 1,
            buyInsurance : $tab.find('[name="buyInsurance"]').is(":checked") ? 1 : 0,
            orderNumber : $tab.find('[name="orderNumber"]').val()
        };
        if(typeof data.baseInfo.touristGroupFee.touristGroupFeeJsonDel !== "object"){
            data.baseInfo.touristGroupFee.touristGroupFeeJsonDel = JSON.parse(data.baseInfo.touristGroupFee.touristGroupFeeJsonDel || "[]");
        }else if(data.baseInfo.touristGroupFee.touristGroupFeeJsonDel && data.baseInfo.touristGroupFee.touristGroupFeeJsonDel.length === 0){
            data.baseInfo.touristGroupFee.touristGroupFeeJsonDel = [];
        }
        var receiveDateArr = [];
        if(data.baseInfo.customerType === 0){
            //接团
            data.receiveTrip = [];
            $joinGroup.find('tr').each(function(index){
                var $that = $(this),
                    $bus = $that.find('[name="receiveBus"]'),
                    $hotel = $that.find('[name="receiveHotel"]'),
                    $other = $that.find('[name="receiveOther"]'),
                    receiveHotel = $hotel.data('json');
                receiveHotel = typeof receiveHotel !== "object" ? JSON.parse(receiveHotel || "{}") : receiveHotel;
                if($.isEmptyObject(receiveHotel)){
                    receiveHotel = null;
                }else{
                    if(!!$hotel.data("id")){
                        receiveHotel.id = $hotel.data("id");
                    }
                    receiveHotel.hotel = typeof receiveHotel.hotel !== "object" ? JSON.parse(receiveHotel.hotel || "[]") : receiveHotel.hotel;
                }
                var receiveBus = $bus.data('json'),
                    receiveOther = $other.data('json'),
                    receiveTripData = {
                        arriveTime : $that.find('[name="arriveTime"]').val() +":00",
                        arriveShift : $that.find('[name="arriveShift"]').val(),
                        receiveBus : typeof receiveBus !== "object" ? JSON.parse(receiveBus || "{}") : receiveBus,
                        receiveHotel : receiveHotel,
                        receiveOther : typeof receiveOther !== "object" ? JSON.parse(receiveOther || "{}") : receiveOther
                    };
                receiveDateArr.push(receiveTripData.arriveTime);
                
                if($.isEmptyObject(receiveTripData.receiveBus)){
                    receiveTripData.receiveBus = null;
                }else{
                    if(!!$bus.data("id")){
                        receiveTripData.receiveBus.id = $bus.data("id");
                    }
                    if(typeof receiveTripData.receiveBus.busFeeDel !== "object"){
                        receiveTripData.receiveBus.busFeeDel = JSON.parse(receiveTripData.receiveBus.busFeeDel || "[]");
                    }
                }
                if(!receiveTripData.receiveHotel || $.isEmptyObject(receiveTripData.receiveHotel)){
                    receiveTripData.receiveHotel = null;
                }else{
                    if(typeof receiveTripData.receiveHotel.hotelFeeDel !== "object"){
                        receiveTripData.receiveHotel.hotelFeeDel = JSON.parse(receiveTripData.receiveHotel.hotelFeeDel || "[]");
                    }
                }
                if($.isEmptyObject(receiveTripData.receiveOther)){
                    receiveTripData.receiveOther = null;
                }else{
                    if(!!$other.data("id")){
                        receiveTripData.receiveOther.id = $other.data("id");
                    }
                    if(typeof receiveTripData.receiveOther.otherFeeDel !== "object"){
                        receiveTripData.receiveOther.otherFeeDel = JSON.parse(receiveTripData.receiveOther.otherFeeDel || "[]");
                    }
                }
                receiveTripData.receiveBusDel = $bus.data('clear') == "1" && !!$bus.data('id') ? [{id:$bus.data('id')}] : [];
                receiveTripData.receiveHotelDel = $hotel.data('clear') == "1" && !! $hotel.data('id') ? [{id:$hotel.data('id')}] : [];
                receiveTripData.receiveOtherDel = $other.data('clear') == "1" && !!$other.data('id') ? [{id:$other.data('id')}] : [];

                if(!!$that.data('id')){
                    receiveTripData.id = $that.data('id');
                }
                data.receiveTrip.push(receiveTripData);
            });
            data.receiveTripDel = $tab.find('.T-join-group-list').data('del-json');
            if(typeof data.receiveTripDel === "object" && !!data.receiveTripDel){
                data.receiveTripDel = JSON.stringify(data.receiveTripDel);
            }
        }

        //参团
        var isCheckDate = true;
        data.joinTrip = [];
        $partGroup.find('tr').each(function(index){
            var $that = $(this),
                $hotelPayMoney = $that.find('[name="hotelNeedPayMoney"]'),
                hotelNeedPayMoney = $hotelPayMoney.data('json');
            hotelNeedPayMoney = typeof hotelNeedPayMoney !== "object" ? JSON.parse(hotelNeedPayMoney || "{}") : hotelNeedPayMoney;
            if($.isEmptyObject(hotelNeedPayMoney)){
                hotelNeedPayMoney = null;
            }else{
                if(!!$hotelPayMoney.data("id")){
                    hotelNeedPayMoney.id = $hotelPayMoney.data("id");
                }
                if(!!$hotelPayMoney.data("out-id")){
                    hotelNeedPayMoney.outRemarkId = $hotelPayMoney.data("out-id");
                }
                hotelNeedPayMoney.hotel = typeof hotelNeedPayMoney.hotel !== "object" ? JSON.parse(hotelNeedPayMoney.hotel || "[]") : hotelNeedPayMoney.hotel;
                if(typeof hotelNeedPayMoney.hotelFeeDel !== "object"){
                    hotelNeedPayMoney.hotelFeeDel = JSON.parse(hotelNeedPayMoney.hotelFeeDel || "[]");
                }
            }
            var $linePayMoeny = $that.find('[name="lineNeedPayMoney"]'),
                lineInfo = $linePayMoeny.data('json');
            var joinTripData = {
                lineProductId : $that.find('[name="lineProductName"]').data('id'),
                tripStartTime : $that.find('[name="tripStartTime"]').val(),
                tripEndTime : $that.find('[name="tripEndTime"]').val(),
                subNeedPayMoney : $that.find('[name="subNeedPayMoney"]').val() || "",
                lineInfo : typeof lineInfo !== "object" ? JSON.parse(lineInfo || "{}") : lineInfo
            };

            joinTripData.lineInfoDel = $linePayMoeny.data('clear') == "1" && !!$linePayMoeny.data('id') ? [{id:$linePayMoeny.data('id')}] : [];
            joinTripData.currentNeedPayMoney = $that.find('[name="currentNeedPayMoney"]').val();
            
            if(data.baseInfo.customerType === 0){
                joinTripData.hotelInfo = hotelNeedPayMoney;
                joinTripData.hotelInfoDel = $hotelPayMoney.data('clear') == "1" && $hotelPayMoney.data('id') ? [{id:$hotelPayMoney.data('id'), outRemarkId: $hotelPayMoney.data("out-id")}] : [];
            }
            if($.isEmptyObject(joinTripData.lineInfo)){
                joinTripData.lineInfo = null;
            }
            var status = $that.find('.T-status').data('status');
            status = status == undefined ? 1 : status;

            if(!!$that.data('id')){
                joinTripData.id = $that.data('id');
            }
            if(status == 1){
                data.joinTrip.push(joinTripData);
            }
        });
        data.joinTripDel = $tab.find('.T-part-group-list').data('del-json');
        if(typeof data.joinTripDel === "object" && !!data.joinTripDel){
            data.joinTripDel = JSON.stringify(data.joinTripDel);
        }

        if(data.baseInfo.customerType === 0){
            //送团
            data.sendTrip = [];
            $sendGroup.find('tr').each(function(index){
                var $that = $(this),
                    $bus = $that.find('[name="receiveBus"]'),
                    $hotel = $that.find('[name="receiveHotel"]'),
                    $other = $that.find('[name="receiveOther"]'),
                    receiveHotel = $hotel.data('json');
                receiveHotel = typeof receiveHotel !== "object" ? JSON.parse(receiveHotel || "{}") : receiveHotel;
                if($.isEmptyObject(receiveHotel)){
                    receiveHotel = null;
                }else{
                    if(!!$hotel.data("id")){
                        receiveHotel.id = $hotel.data("id");
                    }
                    receiveHotel.hotel = typeof receiveHotel.hotel !== "object" ? JSON.parse(receiveHotel.hotel || "[]") : receiveHotel.hotel;
                }
                var sendBus = $bus.data('json'),
                    sendOther = $other.data('json'),
                    sendTripData = {
                        leaveTime : $that.find('[name="leaveTime"]').val() +":00",
                        leaveShift : $that.find('[name="leaveShift"]').val(),
                        sendBus : typeof sendBus !== "object" ? JSON.parse(sendBus || "{}") : sendBus,
                        sendHotel : receiveHotel,
                        sendOther : typeof sendOther !== "object" ? JSON.parse(sendOther || "{}") : sendOther
                    };
                if($.isEmptyObject(sendTripData.sendBus)){
                    sendTripData.sendBus = null;
                }else{
                    if(!!$bus.data("id")){
                        sendTripData.sendBus.id = $bus.data("id");
                    }
                    if(typeof sendTripData.sendBus.busFeeDel !== "object"){
                        sendTripData.sendBus.busFeeDel = JSON.parse(sendTripData.sendBus.busFeeDel || "[]");
                    }
                }
                if(!sendTripData.sendHotel || $.isEmptyObject(sendTripData.sendHotel)){
                    sendTripData.sendHotel = null;
                }else{
                    if(typeof sendTripData.sendHotel.hotelFeeDel !== "object"){
                        sendTripData.sendHotel.hotelFeeDel = JSON.parse(sendTripData.sendHotel.hotelFeeDel || "[]");
                    }
                }
                if($.isEmptyObject(sendTripData.sendOther)){
                    sendTripData.sendOther = null;
                }else{
                    if(!!$other.data("id")){
                        sendTripData.sendOther.id = $other.data("id");
                    }
                    if(typeof sendTripData.sendOther.otherFeeDel !== "object"){
                        sendTripData.sendOther.otherFeeDel = JSON.parse(sendTripData.sendOther.otherFeeDel || "[]");
                    }
                }
                sendTripData.sendBusDel = $bus.data('clear') == "1" && $bus.data('id') ? [{id:$bus.data('id')}] : [];
                sendTripData.sendHotelDel = $hotel.data('clear') == "1" && $hotel.data('id') ? [{id:$hotel.data('id')}] : [];
                sendTripData.sendOtherDel = $other.data('clear') == "1" && $other.data('id') ? [{id:$other.data('id')}] : [];
                if(!!$that.data('id')){
                    sendTripData.id = $that.data('id');
                }
                if($.inArray(sendTripData.leaveTime, receiveDateArr) > -1){
                    isCheckDate = false;
                }
                data.sendTrip.push(sendTripData);
            });
            data.sendTripDel = $tab.find('.T-send-group-list').data('del-json');
            if(typeof data.sendTripDel === "object" && !!data.sendTripDel){
                data.sendTripDel = JSON.stringify(data.sendTripDel);
            }
        }
        if(data.baseInfo.customerType === 1){
            data.receiveTripDel = $tab.find('.T-join-group-list').data('del-json') || [];
            if(typeof data.receiveTripDel !== "object"){
                data.receiveTripDel = JSON.parse(data.receiveTripDel);
            }
            $joinGroup.find('tr').each(function(index){
                data.receiveTripDel.push({
                    id : $(this).data('id')
                });
            });

            if(data.receiveTripDel.length > 0) data.receiveTripDel = JSON.stringify(data.receiveTripDel);
            else data.receiveTripDel = null;

            data.sendTripDel = $tab.find('.T-send-group-list').data('del-json') || [];
            if(typeof data.sendTripDel !== "object") data.sendTripDel = JSON.parse(data.sendTripDel);
            $sendGroup.find('tr').each(function(index){
                data.sendTripDel.push({
                    id : $(this).data('id')
                });
            });
            if(data.sendTripDel.length > 0) data.sendTripDel = JSON.stringify(data.sendTripDel);
            else data.sendTripDel = null;
        }

        if(!isCheckDate){
            showMessageDialog('送团日期不能等于接团日期！');
            return false;
        }

        //其它信息
        data.otherInfo = {
            accompanyGuideName : $otherInfo.find('[name="accompanyGuideName"]').val(),
            accompanyGuideMobile : $otherInfo.find('[name="accompanyGuideMobile"]').val(),
            otaOrderNumber : $otherInfo.find('[name="otaOrderNumber"]').val(),
            memberType : $otherInfo.find('[name="memberType"]').val(),
            welcomeBoard : $otherInfo.find('[name="welcomeBoard"]').val(),
            sendPosition : $otherInfo.find('[name="sendPosition"]').val(),
            remark : $otherInfo.find('[name="remark"]').val(),
        };
        
        var id = $tab.find('.T-container').data('id'), method = "saveCustomerOrder";
        if(!!id){
            data.id = id;
            method = "updateCustomerOrder";
        }
        
        if(data.joinTrip.length === 0 && !data.baseInfo.lineProductId && $partGroup.find('tr').length === 0){
            var msg = data.baseInfo.customerType === 0 ? '请选择行程或添加参团信息！' : '请选择行程或添加转团信息！';
            showMessageDialog(msg);
            return false;
        }
        var _type = $tab.find('.T-container').data('type') || "single";

        if(_type == "single" && ($joinGroup.find('tr').length > 0 || $sendGroup.find('tr').length > 0) && $partGroup.find('tr').length === 0){
            showMessageDialog('有接送团，请添加一条参团信息！');
            return false;
        }

        var _teamNeedPayMoney = data.baseInfo.touristGroupFee.currentNeedPayMoney,
            _partNeedPayMoney = 0;
        if($partGroup.find('tr').length > 0){
            for(var i = 0; i < $partGroup.find('tr').length; i++){
                _partNeedPayMoney += parseFloat($partGroup.find('tr').eq(i).find('[name="currentNeedPayMoney"]').val() || 0);
            }

            if(_teamNeedPayMoney != _partNeedPayMoney){
                var msg = '现收团款（'+ Tools.thousandPoint(_teamNeedPayMoney || 0, 2) +'）不等于参团代收团款之和（' + Tools.thousandPoint(_partNeedPayMoney || 0, 2) + '），是否继续？';
                showConfirmMsg(msg, function(){
                    saveTouristData(data);
                });
                return false;
            }
        }
        saveTouristData(data);
        return this;
        function saveTouristData (data) {
            data.baseInfo = JSON.stringify(data.baseInfo);
            data.receiveTrip = JSON.stringify(data.receiveTrip);
            data.joinTrip = JSON.stringify(data.joinTrip);
            data.sendTrip = JSON.stringify(data.sendTrip);
            data.otherInfo = JSON.stringify(data.otherInfo);

            $.ajax({
                url : KingServices.build_url('customerOrder', method),
                data : data,
                type: 'POST',
                success : function(data){
                    if(showDialog(data)){
                        showMessageDialog(data.message, function() {
                            if(!!tabArgs){
                                if(Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2])){
                                    touristGroup.init_events($("#tab-"+tabArgs[0]+"-content"));
                                };
                            }else{
                                Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                                var $listTab = $("#tab-customer_order-content");
                                if($listTab.length > 0){
                                    $listTab.find('#customerOrderTouristsOrder').find('.T-touristGroupList-search').trigger('click');
                                }else{
                                    touristGroup.listTouristGroup(0);
                                }
                            }
                        });
                    }
                }
            })
        }
        
    };

    /**
     * 监听编辑页面切换TAB事件
     * @param  {object} $tab     tab的jQuery对象
     * @param  {[type]} validate [description]
     * @return {[type]}          [description]
     */
    touristGroup.init_edit_event = function($tab, validate) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                touristGroup.commonEvents($("#tab-"+tab_id+"-content"));
            })
            // 监听保存，并切换tab
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                touristGroup.saveData($tab, validate, [tab_id, title, html]);
            })
            // 保存后关闭
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                $tab.data('isEdited', false);
                touristGroup.saveData($tab, validate);
            });
        }
    };
    //公用方法
    var F = {
        //设置时间控件
        setDateTimePicker : function($obj){
            $obj.datetimepicker({
                autoclose: true,
                todayHighlight: true,
                format: 'YYYY-MM-DD HH:mm',
                language: 'zh-CN'
            });
        },
        //计算应收
        calcRece : function($tab){
            var countMoney = 0;
            $tab.find('.T-fee-list tr').each(function(index){
                var $that = $(this),
                    money = $that.find('.T-money').length > 0 ? $that.find('.T-money').text() * 1 : $that.find('[name="money"]').val() * 1;
                countMoney += money;
            });
            countMoney = Tools.toFixed(countMoney)
            return isNaN(countMoney) ? 0 : countMoney;
        },
        //计算金额
        calcMoney : function($that, $tab){
            var $tr = $that.closest('tr'),
                price = $tr.find('[name="count"]').val() * $tr.find('[name="price"]').val() * ($tr.find('[name=days]').val() || 1)
            $tr.find('[name="money"]').val(isNaN(price) ? 0 : price);
            if($tab.find('[name="sumNeedGetMoney"]').length > 0){
                $tab.find('[name="sumNeedGetMoney"]').val(F.calcRece($tab));
            }else if($tab.find('.T-needPayAllMoney').length > 0){
                $tab.find('.T-needPayAllMoney').text(F.calcRece($tab));
            }else{
                $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
            }
        },
        /**
         * 组装应收数据
         * @param  {object}  $tab        表单容器
         * @return {[type]}              [description]
         */
        assemblyMoneyData : function($tab){
            var moneyData = {
                needPayAllMoney : $tab.find('[name="needPayAllMoney"]').val(),
                touristGroupFeeJsonAdd : []
            };
            if($tab.find('[name="preIncomeMoney"]').length > 0){
                moneyData.preIncomeMoney = $tab.find('[name="preIncomeMoney"]').val();
            }
            if($tab.find('[name="currentNeedPayMoney"]').length > 0){
                moneyData.currentNeedPayMoney = $tab.find('[name="currentNeedPayMoney"]').val();
            }
            $tab.find('.T-fee-list').children('tr').each(function(index){
                var $that = $(this),
                    id = $that.data('id'),
                    type = $that.find('[name="type"]').val(),
                    days = $that.find('[name="days"]').val(),
                    count = $that.find('[name="count"]').val(),
                    price = $that.find('[name="price"]').val(),
                    remark = $that.find('[name="remark"]').val();
                if(type != "" && count != "" && price != ""){
                    var jsonData = {
                        type : type,
                        count : count,
                        days : days,
                        price : price,
                        remark : remark
                    }
                    if(!!id){
                        jsonData.id = id;
                    }
                    moneyData.touristGroupFeeJsonAdd.push(jsonData);
                }
            });
            
            moneyData.touristGroupFeeJsonDel = $tab.find('.T-fee-list').data('del-json');
            if(typeof moneyData.touristGroupFeeJsonDel !== "object"){
                moneyData.touristGroupFeeJsonDel = JSON.parse(moneyData.touristGroupFeeJsonDel || null);
            }
            return moneyData;
        },
        //组装客人信息数据
        guestInfoData : function($tab){
            var guestData = {
                    adultCount : $tab.find('[name="adultCount"]').val(),
                    childCount : $tab.find('[name="childCount"]').val(),
                    touristGroupMemberJsonAdd : []
                },
                $tr = $tab.find('.T-addTouristTbody tr');
            $tr.each(function(index){
                var $that = $(this),
                    id = $that.data('id'),
                    name = $that.find('[name="name"]').val(),
                    remark = $that.find('[name="remark"]').val(),
                    mobileNumber = $that.find('[name="mobileNumber"]').val();
                if(name != "" || remark != "" || mobileNumber != ""){
                    var jsonData = {
                        name : name,
                        mobileNumber : mobileNumber,
                        remark : remark,
                        idCardType : $that.find('[name="idCardType"]').val(),
                        idCardNumber : $that.find('[name="idCardNumber"]').val(),
                        isContactUser : $that.find('[name="isContactUser"]').is(":checked") ? 1 : 0
                    }
                    if(!!id){
                        jsonData.id = id;
                    }
                    guestData.touristGroupMemberJsonAdd.push(jsonData);
                }
            });
            if($tr.find('[name="isContactUser"]:checked').length > 0){
                var $checkTr = $tr.find('[name="isContactUser"]:checked').eq(0).closest('tr');
                guestData.guestName = $checkTr.find('[name="name"]').val();
                guestData.mobileNumber = $checkTr.find('[name="mobileNumber"]').val();
            }else{
                return false;
            }
            return guestData;
        },
        /**
         * 接团小计
         * @param  {object} $tr  tr的jQuery对象
         * @param  {number} type 0为接\送团，1为参团
         * @return {[type]}      [description]
         */
        subtotal : function($tr, type){
            var lineNeedPayMoney = $tr.find('[name="lineNeedPayMoney"]').val() || 0,
                hotelNeedPayMoney = $tr.find('[name="hotelNeedPayMoney"]').val() || 0,
                receiveBus = $tr.find('[name="receiveBus"]').val() || 0,
                receiveHotel = $tr.find('[name="receiveHotel"]').val() || 0,
                receiveOther = $tr.find('[name="receiveOther"]').val() || 0,
                sumNum = 0;

            if(type === 1){
                sumNum = lineNeedPayMoney * 1 + hotelNeedPayMoney * 1;
            }else{
                sumNum = receiveBus * 1 + receiveHotel * 1 + receiveOther * 1;
            }
            $tr.find('[name="totalMoney"]').val(sumNum);
        },
        /**
         * 自动计算日期
         * @param  {object} $that $(this)
         */
        autoCalcDate : function ($that) {
            var $tr = $that.closest('tr'),
                $startDate = $tr.find('[name="tripStartTime"]'),
                $endData = $tr.find('[name="tripEndTime"]'),
                lineData = $tr.find('[name="lineProductName"]').data('json');

            $startDate =  $startDate.length > 0 ? $startDate : $tr.find('[name="startTime"]');
            $endData   =  $endData.length   > 0 ? $endData   : $tr.find('[name="endTime"]');

            if(typeof lineData !== "object"){
                lineData = JSON.parse(lineData || "{}");
            }

            if($startDate.val() != "" && !!lineData.days){
                $endData.val(Tools.addDay($startDate.val(), lineData.days-1)).trigger('blur');
            }
        }
    };
    exports.init = touristGroup.initModule;
    exports.viewTouristGroup = touristGroup.touristGroupView;
    exports.touristGroup = touristGroup;
    exports.F = F;
    return exports;
});