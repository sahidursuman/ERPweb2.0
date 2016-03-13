define(function(require, exports) {
	//key
	var K = {
			menu : "resource_touristGroup",
			update : "resource_touristGroup_update"
		},
		//模板文件
		T = {
			list : require('./view/list'),//列表页
			listTable : require('./view/listTable'),//列表页表格
			update : require('./view/update'),//编辑页面
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

        });
        //添加游客小组事件
        $tab.find('.T-touristGroup-add').on('click', function(){
            touristGroup.touristGroupUpdate();
        });
        //表内操作
    	$tab.find('.T-touristGroup').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this), id = $that.closest('tr').data('id');
    		if($that.hasClass('T-edit')){
    			touristGroup.touristGroupUpdate(id);
    		}
    	});

    	return this;
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
    	//客人信息
    	$tab.find('.T-guest-info').on('click', function(){
    		touristGroup.updateGuestInfo($tab);
    	});
    	//接团事件
    	$tab.find('.T-join-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-money')){
    			touristGroup.updateJionGroupMoney();
    		}else if($that.hasClass('T-bug')){
    			touristGroup.updateJionGroupBus();
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel();
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther();
    		}
    	});
    	//参团事件
    	$tab.find('.T-part-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-money')){
    			touristGroup.updateJionGroupMoney(1);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(1);
    		}else if($that.hasClass('T-inner-turn')){
                touristGroup.updateInnerTurn();
            }else if($that.hasClass('T-outer-turn')){
                touristGroup.updateOuterTurn();
            }else if($that.hasClass('T-delete')){
                $that.closest('tr').remove();
            }
    	});
    	//送团事件
    	$tab.find('.T-send-group-list').on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-money')){
    			touristGroup.updateJionGroupMoney(2);
    		}else if($that.hasClass('T-bug')){
    			touristGroup.updateJionGroupBus(2);
    		}else if($that.hasClass('T-hotel')){
    			touristGroup.updateJionGroupHotel(2);
    		}else if($that.hasClass('T-other')){
    			touristGroup.updateJionGroupOther(2);
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
    };

    //添加接团
    touristGroup.addJoinGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><a class="cursor">删除</a></td></tr>';
    	$tab.find('.T-join-group-list').append(html);
    };

    //添加参团
    touristGroup.addPartGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><label><input checked="checked" type="checkbox" class="ace" ><span class="lbl"></span></label></td>'+
					'<td><label><input checked="checked" type="checkbox" class="ace" ><span class="lbl"></span></label></td>'+
					'<td>-</td>'+
					'<td><a class="cursor">内转</a> | <a class="cursor">外转</a> | <a class="cursor">删除</a></td></tr>';
    	$tab.find('.T-part-group-list').append(html);
    };

    //添加送团
    touristGroup.addSendGroup = function($tab){
    	var html =  '<tr><td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><input type="text" class="col-xs-12"></td>'+
					'<td><a class="cursor">删除</a></td></tr>';
    	$tab.find('.T-send-group-list').append(html);
    };

    //游客列表序号自动升序
    touristGroup.memberNumber = function($obj) {
        var $tbody = $obj.find('tbody.T-addTouristTbody').children('tr');
        $tbody.each(function(i) {
            if (i >= 0) {
                $(this).children().eq(0).text(i + 1);
            }
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
        touristGroup.memberNumber($obj);
    };

    //编辑客人信息
    touristGroup.updateGuestInfo = function(){
    	var layerIndex = layer.open({
			type: 1,
		    title:"编辑客人名单",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1000px', //宽高
		    zIndex:1028,
		    content: T.guestInfo(),
		    scrollbar: false,
		    success:function(obj){
                var $layer = $(obj);
                $layer.find('.T-add-tourist-more').on('click', function(){
                    touristGroup.batchAddTourists($layer);
                });
                $layer.find('.T-add-tourist').on('click', function(){
                    touristGroup.addVisotor($layer);
                });
                $layer.find('.T-addTouristTbody').on('click', '.T-action', function(event){
                    event.preventDefault();
                    var $that = $(this);
                    if($that.hasClass('T-delete')){
                        $that.closest('tr').remove();
                    }
                });
		    }
		});
    };

    //更新接/参/送团金额
    touristGroup.updateJionGroupMoney = function(type){
    	var title = "接团费用", data = {};
    	if(type === 1){
    		title = "参团费用";
    	}else if(type === 2){
    		title = "送团费用";
    	}
    	data.type = type;
    	var layerIndex = layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '850px', //宽高
		    zIndex:1028,
		    content: T.updateMoney(data),
		    scrollbar: false,
		    success:function(){
		    	
		    }
		});
    };

    //更新接/送团车辆
    touristGroup.updateJionGroupBus = function(type){
    	var title = "接团车辆";
    	if(type === 2){
    		title = "送团车辆";
    	}
    	var layerIndex = layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '560px', //宽高
		    zIndex:1028,
		    content: T.updateBus(),
		    scrollbar: false,
		    success:function(){
		    	
		    }
		});
    };

    //更新接/参/送团房
    touristGroup.updateJionGroupHotel = function(type){
    	var title = "接团住宿", data = {};
    	if(type === 1 || type === 2){
    		title = "返程住宿";
    	}
        data.type = type;
    	var layerIndex = layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '560px', //宽高
		    zIndex:1028,
		    content: T.updateHotel(data),
		    scrollbar: false,
		    success:function(obj){
                var $layer = $(obj);
		    	if(type === 1){
                    $layer.find('.T-choose-hotel').on('click', function() {
                        touristGroup.chooseHotel();
                    });
                }
		    }
		});
    };

    //更新接/送团其它
    touristGroup.updateJionGroupOther = function(type){
    	var title = "接团其它";
    	if(type === 2){
    		title = "送团其它";
    	}
    	var layerIndex = layer.open({
			type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '560px', //宽高
		    zIndex:1028,
		    content: T.updateOther(),
		    scrollbar: false,
		    success:function(obj){
		    	var $layer = $(obj).on('click', '.T-action', function(event) {
                    event.preventDefault();
                    var $that = $(this);
                    if($that.hasClass('T-restaurant')){
                        console.log("1");
                    }
                });
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
                    layer.close(layerIndex);
                });
		    }
		});
    };



    //参团内转操作
    touristGroup.updateInnerTurn = function(){
        var layerIndex = layer.open({
            type: 1,
            title: "编辑内转信息",
            skin: 'layui-layer-rim', //加上边框
            area: '870px', //宽高
            zIndex:1028,
            content: T.updateInnerTurn(),
            scrollbar: false,
            success:function(){
                
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
            content: T.updateInnerTurn(),
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
    
    //批量添加游客
    touristGroup.batchAddTourists = function($obj) {
        seajs.use("" + ASSETS_ROOT + modalScripts.arrange_plan,function(module){
            module.addVisotorMore($obj.find('.T-addTouristTbody'), touristGroup.memberNumber);
        });
    };
    exports.init = touristGroup.initModule;
});