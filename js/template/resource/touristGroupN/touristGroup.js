define(function(require, exports) {
    //key
    var K = {
            menu : "resource_touristGroup",
            update : "resource_touristGroup_update",
            add : "resource_touristGroup_add"
        },
        //模板文件
        T = {
            list : require('./view/list'),//列表页
            listTable : require('./view/listTable'),//列表页表格
            add : require('./view/add'),//新增页面
            update : require('./view/update'),//编辑页面
            chooseClient : require('./view/chooseClient'),//选择客户
            chooseClientList : require('./view/chooseClientList'),//选择客户列表
            chooseLineProduct : require('./view/chooseLineProduct'),//选择线路产品
            chooseLineProductList : require('./view/chooseLineProductList'),//选择线路产品列表
			guestInfo : require('./view/guestInfo'),//客人信息
			updateMoney : require('./view/updateMoney'),//编辑金额
			updateBus : require('./view/updateBus'),//编辑车
			updateHotel : require('./view/updateHotel'),//编辑房
			updateOther : require('./view/updateOther'),//编辑其它
            updateInnerTurn : require('./view/updateInnerTurn'),//编辑内转
            updateOuterTurn : require('./view/updateOuterTurn'),//编辑外转
            chooseHotel : require('./view/chooseHotel'),//自选酒店
            chooseHotelList : require('./view/chooseHotelList'),//自选酒店列表
        },
        rule = require('./rule'),
        touristGroup = {};
    /**
	 * 游客管理页面初始化
	 * @param  {object} args 请求参数
	 * @return {[type]}      [description]
	 */
    touristGroup.initModule = function(args){
        touristGroup.listTouristGroup(0, args);
    };
    /**
     * 游客管理列表页
     * @param  {number} page 翻页
     * @param  {object} args 请求参数
     * @param  {object} $tab tab的jQuery对象
     * @return {[type]}      [description]
     */
    touristGroup.listTouristGroup = function(page, args, $tab){
    	args = args || {};
    	args.pageNo = page || 0;
    	args.type = args.type || 0;
    	$.ajax({
    		url : KingServices.build_url('touristGroup','getTouristStatisticData'),
    		data : args,
            type: "POST",
            success: function(data) {
            	if(showDialog(data)){
            		if(Tools.addTab(K.menu, '游客管理', T.list(data))){
            			$tab = $tab || $("#tab-" + K.menu + "-content");
            			//业务事件
                    	touristGroup.init_events($tab);
                    	touristGroup.getList(args, $tab);
            		}
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
    	$.ajax({
            url: KingServices.build_url('touristGroup','listTouristGroup'),
            data: args,
            type: 'POST',
            success: function(data) {
            	if(showDialog(data)){
            		var touristGroupList = JSON.parse(data.touristGroupList);
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
                    data.touristGroupList = touristGroupList;
            		var html = T.listTable(data);
            		html = filterUnAuth(html);
            		$tab.find('.T-touristGroup').html(html);
            		$tab.find('.T-record-size').html(data.recordSize);
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
            var args = {
                pageNo : 0,
                orderNumber : $searchArea.find('[name="orderNumber"]').val(),
                type : $searchArea.find('.T-choosePorB').val(),
                lineProductName: $searchArea.find('[name="lineProductName"]').val(),
                lineProductId: $searchArea.find('[name="lineProductId"]').val(),
                fromBussinessGroupName : $searchArea.find('[name="fromBussinessGroupName"]').val(),
                fromBussinessGroupId: $searchArea.find('[name="fromBussinessGroupId"]').val(),
                fromPartnerAgencyName: $searchArea.find('[name="fromPartnerAgencyName"]').val(),
                fromPartnerAgencyId: $searchArea.find('[name="fromPartnerAgencyId"]').val(),
                customerType : $searchArea.find('[name="customerType"]').val()
            }
            touristGroup.getList(args, $tab);
        });
        //绑定日期事件
        Tools.setDatePicker($searchArea.find('.datepicker'));
        //添加游客小组事件
        $tab.find('.T-touristGroup-add').on('click', function(){
            touristGroup.addTouristGroup();
        });
        //表内操作
    	$tab.find('.T-touristGroup').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), id = $that.closest('tr').data('id');
    		if($that.hasClass('T-edit')){
    			touristGroup.touristGroupUpdate(id);
    		}else if($that.hasClass('T-view')){

            }else if($that.hasClass('T-del')){

            }
    	});

    	return this;
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
        if (Tools.addTab(K.update , '编辑小组', T.update())) {
            touristGroup.commonEvents($("#tab-" + K.update + "-content"));
        }
    	/*$.ajax({
    		url : KingServices.build_url('touristGroup', 'viewTouristGroupDetails'),
    		data : {id : id},
    		type: 'POST',
    		success : function(data){
    			if(showDialog(data)){
    				data.touristGroupDetail = JSON.parse(data.touristGroupDetail);
                    if (Tools.addTab(K.update , '编辑小组', T.update(data))) {
                        touristGroup.commonEvents($("#tab-" + K.update + "-content"));
                    }
    			}
    		}
    	});*/
    };

    /**
     * 编辑和添加通用事件
     * @param  {object} $tab tab的jQuery对象
     * @return {[type]}      [description]
     */
    touristGroup.commonEvents = function($tab){
        //小组信息表内操作
        $tab.find('.T-team-info').on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this);
            if($that.hasClass('T-client')){
                touristGroup.chooseClient($that);
            }else if($that.hasClass('T-search-trip')){
                touristGroup.chooseLineProduct($that);
            }else if($that.hasClass('T-receivable')){
                touristGroup.updateJionGroupMoney($that);
            }else if($that.hasClass('T-guest-info')){
                touristGroup.updateGuestInfo($that);
            }
        });
        $tab.find('.T-team-info').on('change', '[name="singlePlanDefine"]', function(){
            var $that = $(this);
            if($that.hasClass('T-single-group')){
                $tab.find('.T-is-hidden, .T-join-group, .T-send-group, .T-add-join-group, .T-add-send-group').removeClass('hidden');
                $tab.find('.T-container').data('type', 'single');
                $tab.find('.T-add-part-group').html(' <i class="ace-icon fa fa-plus bigger-160"></i> 参团 ');
            }else{
                $tab.find('.T-is-hidden, .T-join-group, .T-send-group, .T-add-join-group, .T-add-send-group').addClass('hidden');
                $tab.find('.T-container').data('type', 'group');
                $tab.find('.T-add-part-group').html(' <i class="ace-icon fa fa-plus bigger-160"></i> 转团 ');
            }
        });
    	//添加接团
    	$tab.find('.T-add-join-group').on('click', function(){
    		touristGroup.addJoinGroup($tab);
    	});
    	//添加参团
    	$tab.find('.T-add-part-group').on('click', function(){
    		touristGroup.addPartGroup($tab);
    	});
    	//添加送团
    	$tab.find('.T-add-send-group').on('click', function(){
    		touristGroup.addSendGroup($tab);
    	});
    	//接团表内操作
    	$tab.find('.T-join-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-bug')){
    			touristGroup.updateJionGroupBus(0, $that);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(0, $that);
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther(0, $that);
    		}else if($that.hasClass('T-delete')){
                $that.closest('tr').remove();
            }
    	});
    	//参团表内操作
    	$tab.find('.T-part-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
            if($that.hasClass('T-search-line')){
                touristGroup.chooseLineProduct($that);
            }else if($that.hasClass('T-hotel')){
                touristGroup.updateJionGroupHotel(1, $that);
            }else if($that.hasClass('T-line-cope')){
    			touristGroup.updateJionGroupMoney($that, 1);
    		}else if($that.hasClass('T-inner-turn')){
                touristGroup.updateInnerTurn($that);
            }else if($that.hasClass('T-outer-turn')){
                touristGroup.updateOuterTurn($that);
            }else if($that.hasClass('T-delete')){
                $that.closest('tr').remove();
            }
    	});
    	//送团表内操作
    	$tab.find('.T-send-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-bug')){
    			touristGroup.updateJionGroupBus(2, $that);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(2, $that);
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther(2, $that);
    		}else if($that.hasClass('T-delete')){
                $that.closest('tr').remove();
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
        //绑定日期事件
        Tools.setDatePicker($tab.find('.datepicker'));
        F.setDateTimePicker($tab.find('.datetimepicker'));
        //外联销售
        touristGroup.getOPUserList($tab.find('.T-chooseUser')).trigger('click');
        //保存信息
        $tab.find('.T-btn-save').on('click', function(){
            touristGroup.saveData($tab);
        });
    };

    //选择客户
    touristGroup.chooseClient = function($that){
        layer.open({
            type: 1,
            title:"选择客户",
            skin: 'layui-layer-rim', //加上边框
            area: '950px', //宽高
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
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    var $clientRadio = $layer.find('.T-client-list').find('[name="chooseClient"]:checked'),
                        $tr = $clientRadio.closest('tr');

                    $that.val($tr.find('[name="travelAgencyName"]').text()).data('id', $tr.data('id'));
                    layer.close(index);
                });

                $layer.find('.T-client-list').on('click', 'tr', function(event){
                    $(this).find('[type="radio"]')[0].checked = true;
                });
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
    touristGroup.addJoinGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime"></td>'+
                    '<td><input type="text" class="col-xs-12" name="arriveShift"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-bug F-float F-money" readonly name="receiveBus"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther"></td>'+
                    '<td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-join-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
    };

    /**
     * 添加参团
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addPartGroup = function($tab){
        var isHidden = $tab.find('.T-container').data('type') || "single";
    	var html =  '<tr><td>'+
                        '<div class="hct-input-group col-xs-12 T-action T-search-line">'+
                                '<input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName">'+
                                '<span class="hct-group-add cursor">[搜索]</span>'+
                            '</div></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker" name="tripStartTime"></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker" name="tripEndTime"></td>'+
                        '<td><input type="text" class="w-100 hct-cursor T-action T-line-cope" readonly name="lineNeedPayMoney"></td>'+
                        '<td class="T-is-hidden'+(isHidden==="single"?"":" hidden")+'"><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly name="hotelNeedPayMoney"></td>'+
                        '<td class="T-is-hidden'+(isHidden==="single"?"":" hidden")+'"><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td>'+
                        '<td class="T-is-hidden'+(isHidden==="single"?"":" hidden")+'"><input type="text" class="w-100" name="operateCurrentNeedPayMoney"></td>'+
                        '<td>-</td>'+
                        '<td><a class="cursor T-action T-inner-turn">内转</a> | <a class="cursor T-action T-outer-turn">外转</a> | <a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-part-group-list').append(html);
        Tools.setDatePicker($tab.find('.datepicker'));
    };

    /**
     * 添加送团
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addSendGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime"></td>'+
                    '<td><input type="text" class="col-xs-12" name="arriveShift"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-bug" readonly name="receiveBus"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly name="receiveHotel"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-other" readonly name="receiveOther"></td>'+
                    '<td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-send-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
    };

    /**
     * 添加游客
     * @param {object} $tab tab的jQuery对象
     */
    touristGroup.addVisotor = function($obj) {
        var html = '<tr><td></td>' +
            '<td><input name="name" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><input name="mobileNumber" type="text" class="col-sm-12  no-padding-right T-mobileNumber"  maxlength="11"  /></td>' +
            '<td><select name="idCardType" value="idCardTypeId" class="col-xs-12"><option value="0" selected="selected">身份证</option><option value="1">护照</option><option value="2">其它</option></select></td>' +
            '<td><input name="idCardNumber" type="text" class="col-sm-12  no-padding-right" /></td>' +
            '<td><div class="checkbox"><label><input type="checkbox" class="ace " value="1" name="isContactUser"><span class="lbl"></span></label></div></td>' +
            '<td><a class="cursor T-action T-delete">删除</a></td>' +
            '</tr>';
        var $tbody = $obj.find('.T-addTouristTbody')
        $tbody.append(html);
        touristGroup.memberNumber($tbody);
    };

    /**
     * 编辑客人信息
     * @param  {object} $that [description]
     * @return {[type]}       [description]
     */
    touristGroup.updateGuestInfo = function($that){
        var data = JSON.parse($that.data('json') || "{}");
    	layer.open({
			type: 1,
		    title:"编辑客人名单",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1000px', //宽高
		    zIndex:1028,
		    content: T.guestInfo(data),
		    scrollbar: false,
		    success:function(obj, index){
                var $layer = $(obj), $tbody = $layer.find('.T-addTouristTbody');
                $layer.find('.T-add-tourist-more').on('click', function(){
                    touristGroup.batchAddTourists($layer);
                });
                $layer.find('.T-add-tourist').on('click', function(){
                    touristGroup.addVisotor($layer);
                });
                $tbody.on('click', '.T-action', function(event){
                    event.preventDefault();
                    var $this = $(this);
                    if($this.hasClass('T-delete')){
                        $this.closest('tr').remove();
                        touristGroup.memberNumber($tbody);
                    }
                });
                $layer.find('.T-btn-save').on('click', function(){
                    var infoData = F.guestInfoData($layer);
                    if(!!infoData){
                        $that.val(infoData.guestName+"  "+infoData.adultCount+"大"+infoData.childCount+"小").data('json', JSON.stringify(infoData));
                        $that.closest('.T-team-info').find('[name="mobileNumber"]').val(infoData.mobileNumber);
                        layer.close(index);
                    }else{

                    }
                });
		    }
		});
    };

    //更新应收团款
    touristGroup.updateJionGroupMoney = function($that, type){
        var title = "应收团款",data = JSON.parse($that.data('json') || "{}");
        if(!!type){
            data.type = type;
            title = "线路应付";
        }
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '850px', //宽高
		    zIndex:1028,
		    content: T.updateMoney(data),
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj);

                touristGroup.bindLayerCommonFeeEvents($layer);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    var moneyData = F.assemblyMoneyData($layer);

                    if(!!type){
                        moneyData.lineFee = moneyData.touristGroupFeeJsonAdd;
                        delete moneyData.touristGroupFeeJsonAdd;
                    }
                    $that.val(moneyData.needPayAllMoney).data('json', JSON.stringify(moneyData));
                    layer.close(index);
                });
		    }
		});
    };

    //更新接/送团车辆
    touristGroup.updateJionGroupBus = function(type, $that){
    	var title = "接团车辆",
            data = JSON.parse($that.data('json') || "{}");
    	if(type === 2){
    		title = "送团车辆";
    	}
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: T.updateBus(data),
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj);
                touristGroup.bindLayerCommonFeeEvents($layer);
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    var baseInfo = {
                            require : {
                                id : $layer.find('[name="requireContent"]').data("id"),
                                requireContent : $layer.find('[name="requireContent"]').val()
                            },
                            dutyDepartmentName : $layer.find('[name="dutyDepartmentName"]').val(),
                            dutyDepartmentId : $layer.find('[name="dutyDepartmentName"]').data('id'),
                            dutyUserName : $layer.find('[name="dutyUserName"]').val(),
                            dutyUserId : $layer.find('[name="dutyUserName"]').data('id')
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').is(":checked")){
                        baseInfo.isTransfer = 1;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                    }
                    moneyData.busFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                    F.subtotal($that.closest('tr'), 0);
                });
		    }
		});
    };

    //更新接/参/送团房
    touristGroup.updateJionGroupHotel = function(type, $that){
    	var title = "接团住宿", data = JSON.parse($that.data('json') || "{}");
    	if(type === 1){
    		title = "返程住宿";
    	}else if(type === 2){
            title = "送团住宿";
        }
        data.type = type;
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: T.updateHotel(data),
		    scrollbar: false,
		    success:function(obj, index){
                var $layer = $(obj);
                touristGroup.bindLayerCommonFeeEvents($layer);
		    	$layer.find('.T-choose-hotel').on('click', function() {
                    touristGroup.chooseHotel($(this));
                });
                //保存
                $layer.find('.T-btn-save').on('click', function(){
                    var hotelJson = $layer.find('[name="hotel"]').data('json');
                    var baseInfo = {
                            intakeTime : $layer.find('[name="intakeTime"]').val(),
                            level : $layer.find('[name="level"]').val(),
                            roomCount : $layer.find('[name="roomCount"]').val(),
                            require : {
                                id : $layer.find('[name="requireContent"]').data("id"),
                                requireContent : $layer.find('[name="requireContent"]').val()
                            },
                            dutyDepartmentName : $layer.find('[name="dutyDepartmentName"]').val(),
                            dutyDepartmentId : $layer.find('[name="dutyDepartmentName"]').data('id'),
                            dutyUserName : $layer.find('[name="dutyUserName"]').val(),
                            dutyUserId : $layer.find('[name="dutyUserName"]').data('id'),
                            hotel : typeof hotelJson === "object" ? JSON.stringify(hotelJson) : hotelJson,
                            hotelName : $layer.find('[name="hotel"]').val()
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').is(":checked")){
                        baseInfo.isTransfer = 1;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                    }
                    moneyData.hotelFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                    F.subtotal($that.closest('tr'), type === 1 ? 1 : 0);
                });
		    }
		});
    };

    //更新接/送团其它
    touristGroup.updateJionGroupOther = function(type, $that){
    	var title = "接团其它", data = JSON.parse($that.data('json') || "{}");
    	if(type === 2){
    		title = "送团其它";
    	}
    	layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '890px', //宽高
		    zIndex:1028,
		    content: T.updateOther(data),
		    scrollbar: false,
		    success:function(obj, index){
		    	var $layer = $(obj), $plan = $layer.find('.T-action-plan');
                touristGroup.bindLayerCommonFeeEvents($layer);
                $layer.find('.T-action-plan').on('change', 'input[type="checkbox"]', function(event){
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
                });
                $layer.find('.T-btn-save').on('click', function(){
                    var baseInfo = {
                            consumeTime : $layer.find('[name="consumeTime"]').val(),
                            dutyDepartmentName : $layer.find('[name="dutyDepartmentName"]').val(),
                            dutyDepartmentId : $layer.find('[name="dutyDepartmentName"]').data('id'),
                            dutyUserName : $layer.find('[name="dutyUserName"]').val(),
                            dutyUserId : $layer.find('[name="dutyUserName"]').data('id'),
                            isRestaurantRequired : 0,
                            isTicketRequired : 0,
                            isOtherRequired : 0
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('[name="isRestaurantRequired"]').is(":checked")){
                        var $rest = $layer.find('[name="restaurantRequired"]'), 
                            id = $rest.data('id');

                        baseInfo.isRestaurantRequired = 1;
                        baseInfo.restaurantRequired = {
                            requireContent : $rest.val()
                        };
                        if(!!id){
                            baseInfo.restaurantRequired.id = id;
                        }
                    }
                    if($layer.find('[name="isTicketRequired"]').is(":checked")){
                        var $ticket = $layer.find('[name="ticketRequired"]'), 
                            id = $ticket.data('id');

                        baseInfo.isTicketRequired = 1;
                        baseInfo.ticketRequired = {
                            requireContent : $ticket.val()
                        };
                        if(!!id){
                            baseInfo.ticketRequired.id = id;
                        }
                    }
                    if($layer.find('[name="isOtherRequired"]').is(":checked")){
                        var $other = $layer.find('[name="otherRequired"]'), 
                            id = $other.data('id');

                        baseInfo.isOtherRequired = 1;
                        baseInfo.otherRequired = {
                            requireContent : $other.val()
                        };
                        if(!!id){
                            baseInfo.otherRequired.id = id;
                        }
                    }
                    moneyData.otherFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                    F.subtotal($that.closest('tr'), 0);
                });
		    }
		});
    };

    /**
     * 绑定弹层费用项公共事件
     * @param  {object} $layer layer的jQuery对象
     */
    touristGroup.bindLayerCommonFeeEvents = function($layer){
        if($layer.find('.datepicker').length > 0){
            Tools.setDatePicker($layer.find('.datepicker'));
        }
        var $tbody = $layer.find('.T-fee-list');
        //添加
        $layer.find('.T-add-fee').on('click', function(){
            var  option = "";
            if($tbody.data('type') == "1"){
                option = '<option value="3">中转结算价</option>'+
                         '<option value="8">酒店费用</option>';
            }else{
                option = '<option value="1">大人结算价</option>'+
                         '<option value="2">小孩结算价</option>'+
                         '<option value="3">中转结算价</option>'+
                         '<option value="4">车辆费用</option>'+
                         '<option value="5">餐厅费用</option>'+
                         '<option value="6">保险费用</option>'+
                         '<option value="7">导服费</option>'+
                         '<option value="8">酒店费用</option>'+
                         '<option value="9">景区费用</option>'+
                         '<option value="10">自费费用</option>'+
                         '<option value="11">票务费用</option>'+
                         '<option value="12">其他费用</option>';
            }
            $tbody.append('<tr>'+
                '<td><select class="col-xs-12" name="type">'+option+'</select></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>'+
                '<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>'+
                '<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>'+
                '<td><input type="text" class="col-xs-12" name="remark"></td>'+
                '<td><a class="cursor T-action T-delete">删除</a></td>'+
                '</tr>');
        });
        //是否外传
        $layer.find('.T-abversion').on('change', function(){
            var $peer = $layer.find('.T-peer');
            if($(this).is(":checked")){
                $peer.removeClass('hidden');
            }else{
                $peer.addClass('hidden');
            }
        });
        //touristGroup.getOPUserList($layer.find('[name="dutyUserName"]')).trigger('click');

        //表内操作
        //删除
        $tbody.on('click', '.T-action', function(event){
            event.preventDefault();
            var $this = $(this), $tr = $this.closest('tr') , id = $tr.data('id');
            if($this.hasClass('T-delete')){
                if(!!id){

                }else{
                    $tr.remove();
                }
            }
        });
        $tbody.on('change', '.T-option', function(event){
            event.preventDefault();
            F.calcMoney($(this), $layer);
        });
    }

    //参团内转操作
    touristGroup.updateInnerTurn = function($that){
        var data = JSON.parse($that.data('json') || "{}"),
            $tr = $that.closest('tr'),
            $tab = $tr.closest('[id^="tab-resource_touristGroup"]'),
            receivable = JSON.parse($tab.find('.T-team-info .T-receivable').data('json') || "{}");
        var lineData = $tr.find('[name="lineProductName"]').data('json');
        if(!lineData){
            layer.tips('请先选择线路产品！', $that.closest('tr').find('[name="lineProductName"]'), {
                tips: [1, '#3595CC'],
                time: 2000
            });
            return false;
        }
        data.lineData = JSON.parse(lineData || "{}");
        data.lineData.startTime = $tr.find('[name="startTime"]').val();
        data.currentNeedPayMoney = receivable.currentNeedPayMoney || 0;

        layer.open({
            type: 1,
            title: "编辑内转信息",
            skin: 'layui-layer-rim', //加上边框
            area: '870px', //宽高
            zIndex:1028,
            content: T.updateInnerTurn(data),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.bindLayerCommonFeeEvents($layer);
                $layer.find('.T-btn-save').on('click', function(){
                    var baseInfo = {
                            dutyDepartmentName : $layer.find('[name="dutyDepartmentName"]').val(),
                            dutyDepartmentId : $layer.find('[name="dutyDepartmentName"]').data('id'),
                            dutyUserName : $layer.find('[name="dutyUserName"]').val(),
                            dutyUserId : $layer.find('[name="dutyUserName"]').data('id'),
                            remark : $layer.find('[name="remark"]').val(),
                            isNowIncome : $layer.find('[name="isNowIncome"]').is(":checked") ? 1 : 0,
                        },
                        moneyData = F.assemblyMoneyData($layer);

                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                    $that.closest('td').find('.T-outer-turn').addClass('hct-color-BBB').removeClass('T-action');
                });
            }
        });
    };

    //参团外转操作
    touristGroup.updateOuterTurn = function($that){
        var data = JSON.parse($that.data('json') || "{}"),
            $tr = $that.closest('tr'),
            $tab = $tr.closest('[id^="tab-resource_touristGroup"]'),
            receivable = JSON.parse($tab.find('.T-team-info .T-receivable').data('json') || "{}");
        var lineData = $tr.find('[name="lineProductName"]').data('json');
        if(!lineData){
            layer.tips('请先选择线路产品！', $that.closest('tr').find('[name="lineProductName"]'), {
                tips: [1, '#3595CC'],
                time: 2000
            });
            return false;
        }
        data.lineData = JSON.parse(lineData || "{}");
        data.lineData.startTime = $tr.find('[name="startTime"]').val();
        data.currentNeedPayMoney = receivable.currentNeedPayMoney || 0;

        var layerIndex = layer.open({
            type: 1,
            title: "编辑外转信息",
            skin: 'layui-layer-rim', //加上边框
            area: '870px', //宽高
            zIndex:1028,
            content: T.updateOuterTurn(data),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.bindLayerCommonFeeEvents($layer);
                $layer.find('.T-btn-save').on('click', function(){
                    var baseInfo = {
                            transferPartnerAgency : $layer.find('[name="transferPartnerAgency"]').val(),
                            remark : $layer.find('[name="remark"]').val(),
                            isNowIncome : $layer.find('[name="isNowIncome"]').is(":checked") ? 1 : 0,
                        },
                        moneyData = F.assemblyMoneyData($layer);

                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                    $that.closest('td').find('.T-inner-turn').addClass('hct-color-BBB').removeClass('T-action');
                });
            }
        });
    };

    //缓存选中的自选酒店
    touristGroup.selectHotelCache = [];
    /**
     * 自选酒店
     * @param  {object} $that 触发对象的jQuery对象
     */
    touristGroup.chooseHotel = function($that){
        var data = typeof $that.data('json') === 'object' ? $that.data('json') : JSON.parse($that.data('json') || "[]");
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
                        if(touristGroup.selectHotelCache[i].id === id){
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
     * @param  {Array} resultList  原有的数据
     * @param  {Array}  tempJson   新数据
     */
    touristGroup.getTempDate = function(resultList,tempJson){
        if(!!tempJson && tempJson.length){
            for(var i = 0; i < tempJson.length; i++){
                var tempId = tempJson[i].id;
                for(var j = 0; j < resultList.length; j++){
                    var id = resultList[j].id;
                    if(tempId == id){
                        resultList[j].ischeck = tempJson[i].ischeck;
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
    touristGroup.batchAddTourists = function($obj) {
        seajs.use("" + ASSETS_ROOT + modalScripts.arrange_plan,function(module){
            module.addVisotorMore($obj.find('.T-addTouristTbody'), touristGroup.memberNumber);
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
            skin: 'layui-layer-rim', //加上边框
            area: '80%, 80%', //宽高
            zIndex: 1028,
            content: T.chooseLineProduct(),
            scrollbar: false,
            success:function(obj, index){
                var $layer = $(obj);
                touristGroup.getLineProductList(0, $layer);
                $layer.find('.T-btn-search').on('click', function(){
                    touristGroup.getLineProductList(0, $layer);
                });
                $layer.find('.T-btn-save').on('click', function(){
                    var $lineRadio = $layer.find(".T-line-product-list").find('[name="chooseLineProduct"]:checked');
                        $tr = $lineRadio.closest('tr');
                    var lineData = {
                        id : $tr.data('id'),
                        lineProductName : $tr.find('[name="lineProductName"]').text(),
                        days : $tr.find('[name="days"]').text()
                    }
                    $that.find('[name="lineProductName"]').val(lineData.lineProductName).data('id', lineData.id).data('json', JSON.stringify(lineData));
                    layer.close(index);
                });
                
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
            showLoading: false,
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
                            touristGroup.getLineProductListt(args, $layer);
                        }
                    }
                }); 
 
                // 让对话框居中
                $(window).trigger('resize');
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
    touristGroup.getOPUserList = function($target){
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
                    if($target.val() == ""){
                        $target.val(data.realName).data('id', data.userId);
                    }
                    
                    var userList = JSON.parse(data.userList || false);
                    if (!!userList) {
                        for (var i = 0, len = userList.length;i < len; i++) {
                            userList[i].value = userList[i].realName;
                        }

                        $target.autocomplete('option', 'source', userList).data('ajax', true);;
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
     * 保存新增/编辑数据
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    touristGroup.saveData = function($tab){
        var data = {},
            $baseInfo = $tab.find('.T-team-info'),
            $joinGroup = $tab.find('.T-join-group-list'),
            $partGroup = $tab.find('.T-part-group-list'),
            $sendGroup = $tab.find('.T-send-group-list'),
            $otherInfo = $tab.find('.T-other-info-cont'),
            guestDetails = $baseInfo.find('[name="guestDetails"]').data('json') || "{}";

        //转换客人信息并且删除
        guestDetails = JSON.parse(guestDetails);
        if(!$.isEmptyObject(guestDetails)){
            delete guestDetails.guestName;
            delete guestDetails.mobileNumber;
        }

        //小组信息
        data.baseInfo = {
            fromPartnerAgency : $baseInfo.find('[name="fromPartnerAgency"]').val(),
            fromPartnerAgencyId : $baseInfo.find('[name="fromPartnerAgency"]').data("id"),
            lineProductName : $baseInfo.find('[name="lineProductName"]').val(),
            lineProductId : $baseInfo.find('[name="lineProductName"]').data("id"),
            startTime : $baseInfo.find('[name="startTime"]').val(),
            endTime : $baseInfo.find('[name="endTime"]').val(),
            needPayAllMoney : JSON.parse($baseInfo.find('[name="needPayAllMoney"]').data('json') || "{}"),
            touristGroupMemberJsonAdd : guestDetails
        };

        //接团
        data.receiveTrip = [];
        $joinGroup.find('tr').each(function(index){
            var $that = $(this),
                receiveHotel = JSON.parse($that.find('[name="receiveHotel"]').data('json') || "{}");
            receiveHotel.hotel = JSON.parse(receiveHotel.hotel || "[]");
            data.receiveTrip.push({
                arriveTime : $that.find('[name="arriveTime"]').val(),
                arriveShift : $that.find('[name="arriveShift"]').val(),
                receiveBus : JSON.parse($that.find('[name="receiveBus"]').data('json') || "{}"),
                receiveHotel : receiveHotel,
                receiveOther : JSON.parse($that.find('[name="receiveOther"]').data('json') || "{}"),
                totalMoney : $that.find('[name="totalMoney"]').val()
            });
        });

        //参团
        data.joinTrip = [];
        $partGroup.find('tr').each(function(index){
            var $that = $(this),
                hotelNeedPayMoney = JSON.parse($that.find('[name="hotelNeedPayMoney"]').data('json') || "{}");
            hotelNeedPayMoney.hotel = JSON.parse(hotelNeedPayMoney.hotel || "[]");
            data.joinTrip.push({
                lineProductId : $that.find('[name="lineProductName"]').data('id'),
                tripStartTime : $that.find('[name="tripStartTime"]').val(),
                tripEndTime : $that.find('[name="tripEndTime"]').val(),
                lineNeedPayMoney : JSON.parse($that.find('[name="lineNeedPayMoney"]').data('json') || "{}"),
                hotelNeedPayMoney : hotelNeedPayMoney,
                operateCurrentNeedPayMoney : $that.find('[name="operateCurrentNeedPayMoney"]').val()
            });
        });

        //送团
        data.sendTrip = [];
        $sendGroup.find('tr').each(function(index){
            var $that = $(this),
                receiveHotel = JSON.parse($that.find('[name="receiveHotel"]').data('json') || "{}");
            receiveHotel.hotel = JSON.parse(receiveHotel.hotel || "[]");
            data.sendTrip.push({
                arriveTime : $that.find('[name="arriveTime"]').val(),
                arriveShift : $that.find('[name="arriveShift"]').val(),
                receiveBus : JSON.parse($that.find('[name="receiveBus"]').data('json') || "{}"),
                receiveHotel : receiveHotel,
                receiveOther : JSON.parse($that.find('[name="receiveOther"]').data('json') || "{}"),
                totalMoney : $that.find('[name="totalMoney"]').val()
            });
        });

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

        $.ajax({
            url : KingServices.build_url('customerOrder', 'saveCustomerOrder'),
            data : data,
            type: 'POST',
            success : function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"), data.message, function() {

                    });
                }
            }
        })
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
                var money = $(this).find('[name="money"]').val() * 1;
                countMoney += money;
            });
            return Tools.toFixed(countMoney);
        },
        //计算金额
        calcMoney : function($that, $tab){
            var $tr = $that.closest('tr');
            $tr.find('[name="money"]').val($tr.find('[name="count"]').val() * $tr.find('[name="price"]').val());
            $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
        },
        //组装应收数据
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
            $tab.find('.T-fee-list tr').each(function(index){
                var $that = $(this),
                    id = $that.data('id'),
                    type = $that.find('[name="type"]').val(),
                    count = $that.find('[name="count"]').val(),
                    price = $that.find('[name="price"]').val(),
                    remark = $that.find('[name="remark"]').val();
                if(type != "" && count != "" && price != ""){
                    var jsonData = {
                        type : type,
                        count : count,
                        price : price,
                        remark : remark
                    }
                    if(!!id){
                        jsonData.id = id;
                    }
                    moneyData.touristGroupFeeJsonAdd.push(jsonData);
                }
            });
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
                    mobileNumber = $that.find('[name="mobileNumber"]').val();
                if(name != "" && mobileNumber != ""){
                    var jsonData = {
                        name : name,
                        mobileNumber : mobileNumber,
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
        }
    };
    exports.init = touristGroup.initModule;
});