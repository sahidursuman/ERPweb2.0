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
		},

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
                $tab.find('.T-is-hidden').removeClass('hidden');
            }else{
                $tab.find('.T-is-hidden').addClass('hidden');
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
            url : KingServices.build_url('v2/partnerAgency', 'selectPartnerAgency'),
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

    //添加接团
    touristGroup.addJoinGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker"></td>'+
                    '<td><input type="text" class="col-xs-12"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-bug F-float F-money" readonly></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly></td>'+
                    '<td><input type="text" class="w-100 hct-cursor F-float F-money" readonly></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-join-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
    };

    //添加参团
    touristGroup.addPartGroup = function($tab){
    	var html =  '<tr><td>'+
                        '<div class="hct-input-group col-xs-12">'+
                                '<input type="text" class="col-xs-12" readonly name="lineProductName">'+
                                '<span class="hct-group-add cursor T-action T-search-line">[搜索]</span>'+
                            '</div></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker"></td>'+
                        '<td><input type="text" class="col-xs-12 datepicker"></td>'+
                        '<td><input type="text" class="w-100 hct-cursor T-action T-line-cope" readonly></td>'+
                        '<td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly></td>'+
                        '<td><input type="text" class="w-100" readonly></td>'+
                        '<td><label><input checked="checked" type="checkbox" class="ace" ><span class="lbl"></span></label></td>'+
                        '<td><label><input checked="checked" type="checkbox" class="ace" ><span class="lbl"></span></label></td>'+
                        '<td>-</td>'+
                        '<td><a class="cursor T-action T-inner-turn">内转</a> | <a class="cursor T-action T-outer-turn">外转</a> | <a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-part-group-list').append(html);
        Tools.setDatePicker($tab.find('.datepicker'));
    };

    //添加送团
    touristGroup.addSendGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12 datetimepicker"></td>'+
                    '<td><input type="text" class="col-xs-12"></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-bug" readonly></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly></td>'+
                    '<td><input type="text" class="w-100 hct-cursor T-action T-other" readonly></td>'+
                    '<td><input type="text" class="w-100" readonly></td>'+
                    '<td><a class="cursor T-action T-delete">删除</a></td></tr>';
    	$tab.find('.T-send-group-list').append(html);
        F.setDateTimePicker($tab.find('.datetimepicker'));
    };

    //添加游客
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

    //编辑客人信息
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
                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                });
		    }
		});
    };

    //更新接/参/送团房
    touristGroup.updateJionGroupHotel = function(type, $that){
    	var title = "接团住宿", data = JSON.parse($that.data('json') || "{}");
    	if(type === 1 || type === 2){
    		title = "返程住宿";
    	};
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
                    touristGroup.chooseHotel();
                });
                //保存
                $layer.find('.T-btn-save').on('click', function(){
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
                            dutyUserId : $layer.find('[name="dutyUserName"]').data('id')
                        },
                        moneyData = F.assemblyMoneyData($layer);
                    if($layer.find('.T-abversion').is(":checked")){
                        baseInfo.isTransfer = 1;
                        baseInfo.transferPartnerAgency = $layer.find('[name="transferPartnerAgency"]').val();
                    }
                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
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
                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
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
            $tbody.append('<tr>'+
                '<td><select class="col-xs-12" name="type">'+
                '<option value="1">大人结算价</option>'+
                '<option value="2">小孩结算价</option>'+
                '</select></td>'+
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

        data.lineData = JSON.parse($tr.find('[name="lineProductName"]').data('json') || "{}");
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
                        },
                        moneyData = F.assemblyMoneyData($layer);

                    moneyData.outFee = moneyData.touristGroupFeeJsonAdd;
                    delete moneyData.touristGroupFeeJsonAdd;
                    $.extend(baseInfo, moneyData);
                    $that.val(moneyData.needPayAllMoney);
                    $that.data('json', JSON.stringify(baseInfo));
                    layer.close(index);
                });
            }
        });
    };

    //参团外转操作
    touristGroup.updateOuterTurn = function(){
        var layerIndex = layer.open({
            type: 1,
            title: "编辑外转信息",
            skin: 'layui-layer-rim', //加上边框
            area: '870px', //宽高
            zIndex:1028,
            content: T.updateOuterTurn(),
            scrollbar: false,
            success:function(){
                
            }
        });
    };

    //自选酒店
    touristGroup.chooseHotel = function(){
        var layerIndex = layer.open({
            type: 1,
            title: "自选酒店",
            skin: 'layui-layer-rim', //加上边框
            area: '570px', //宽高
            zIndex:1028,
            content: T.chooseHotel(),
            scrollbar: false,
            success:function(){
                
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
                    $that.prev('input').val(lineData.lineProductName).data('id', lineData.id).data('json', JSON.stringify(lineData));
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
                guestData.guestName = $tr.find('[name="isContactUser"]:checked').eq(0).closest('tr').find('[name="name"]').val();
            }else{
                return false;
            }
            return guestData;
        }
    };
    exports.init = touristGroup.initModule;
});