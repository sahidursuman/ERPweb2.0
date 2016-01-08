define(function(require, exports) {
	var rule=require("./rule"),
		menuKey = "arrange_plan",
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list"),
		singleListTemplate = require("./view/singleList"),
		viewTripPlanTemplate = require("./view/viewTripPlan"),
		addTripPlanTemplate=require("./view/addTripPlan"),
		// 散客计划模板
		addSingleTripPlanTemplate=require("./view/addSingleTripPlan"),
		updateSingleTripPlanTemplate=require("./view/updateSingleTripPlan"),
		updateTemplate = require("./view/updateTripPlan"),
		searchTemplate = require("./view/searchList"),
		searchQuoteOrderTemplate = require("./view/searchQuoteOrder"),
		lineproductSearchList = require("./view/lineproductSearchList"),
		searchQuoteOrderList = require("./view/searchQuoteOrderList"),
		addGroupTemplate = require("./view/addGroup"),
		viewGroupTemplate = require("./view/viewGroup"),
		travelArrange = require("./view/travelArrange"),
		checkTable="arrange_plan-add",
		tabId = "tab-"+menuKey+"-content",
		addTripPlanLayer,
		executeTimeType;
	//模版
	var T = {
		updateDetail : require("./view/updateDetail"),
		updateGroupTripPlan : require("./view/updateGroupTripPlan"),
		searchTeam : require("./view/searchTeam"),
		touristsList : require("./view/touristsList"),
		feeList : require("./view/feeList"),
		addPartnerManager : require('./view/addPartnerManager'),
		viewTripPlanGroup : require('./view/viewTripPlanGroup'),
		viewTripPlanSingle : require('./view/viewTripPlanSingle'),
		batchAddTourist : require('./view/batchAddTourist')
	}
	var tripPlan = {
		searchData : false,
		$tab : false,
		$searchArea : false,
		autocompleteDate : {}
	},
	autocompleteData = {};

	tripPlan.initModule = function() {
		tripPlan.listMainTripPlan();
    };	

    tripPlan.listMainTripPlan = function(){
    	$.ajax({
    		url: KingServices.build_url('tripController','findSelectValue'),
			type:"POST"
    	}).done(function(data){
    		if(showDialog(data)){
				autocompleteData.busCompanyArranges = data.busCompanyArranges;
				autocompleteData.businessGroups = data.businessGroups;
				autocompleteData.dutyOPUsers = data.dutyOPUsers;
				autocompleteData.guides = data.guides;
				autocompleteData.lineProducts = data.lineProducts;
				autocompleteData.outOPUsers = data.outOPUsers;
				autocompleteData.partnerAgencies = data.partnerAgencies;

		    	Tools.addTab(menuKey, "发团计划", listMainTemplate(FinancialService.getInitDate()));
				tripPlan.$tab = $('#tab-'+menuKey+'-content');
				tripPlan.$searchArea = tripPlan.$tab.find('.T-search-tripPlan');
				tripPlan.listTripPlanGroup(0, tripPlan.$tab);
				tripPlan.listTripPlanSingle(0, tripPlan.$tab);

				tripPlan.init_eventMain(tripPlan.$tab);
			}
    	})
    };

    tripPlan.init_eventMain = function($tab){
    	// 绑定日期
		Tools.setDatePicker($tab.find('.datepicker'), true);
		//搜索按钮事件绑定
		$tab.find('.T-btn-tripPlan-search').on('click', function() {
			var type = $(this).data('type');
			if(type == "0"){
				tripPlan.listTripPlanSingle(0, $tab);
			}else if(type == "1"){
				tripPlan.listTripPlanGroup(0, $tab);
			}
		})
    	//查询条件 autocomplete
		tripPlan.autocompleteSearch($tab.find('input[name="lineProductName"]'), autocompleteData.lineProducts, 'name');
		tripPlan.autocompleteSearch($tab.find('input[name="partnerAgencyName"]'), autocompleteData.partnerAgencies, 'travelAgencyName');
		tripPlan.autocompleteSearch($tab.find('input[name="outOPUserName"]'), autocompleteData.outOPUsers, 'realName');
		tripPlan.autocompleteSearch($tab.find('input[name="dutyOPUserName"]'), autocompleteData.dutyOPUsers, 'realName');
		tripPlan.autocompleteSearch($tab.find('input[name="businessGroupName"]'), autocompleteData.businessGroups, 'name');
		tripPlan.autocompleteSearch($tab.find('input[name="realname"]'), autocompleteData.guides, 'realname');
		tripPlan.autocompleteSearch($tab.find('input[name="brand"]'), autocompleteData.busCompanyArranges, 'licenseNumber');
    	$tab.find("[name='tripPlanStatus']").on('change', function(){
    		if($(this).val() != "1"){
    			$(this).next('[name="status"]').addClass('hide');
    		}else{
    			$(this).next('[name="status"]').removeClass('hide');
    		}
    	});
    	$tab.on('click', '.T-btn-tripPlan-add', function(event) {
    		event.preventDefault();
    		tripPlan.addTripPlan($(this).data('type'));
    	});

    	// 团队
		$tab.find(".T-tripPlan-groupList").on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if($that.hasClass('T-view')){
				tripPlan.viewTripPlan(id, 1);
			} else if($that.hasClass('T-hair-regiment')){
				// 发团
                var statusValue = $that.data("status-value"),
					billStatus = $that.data("bill-status");

                tripPlan.confirmTripPlan(id, statusValue, billStatus);
			} else if($that.hasClass('T-update')){
				// 编辑
                tripPlan.updateGroupTripPlan(id);
			} else if($that.hasClass('T-export')){
				// 导出
                tripPlan.exportTripPlan(id);				
			} else if($that.hasClass('T-cancel')){
				// 取消
                tripPlan.cancelTripPlan(id);
			}
		});

		// 散客
		$tab.find(".T-tripPlan-singleList").on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if($that.hasClass('T-view')){
				tripPlan.viewTripPlan(id, 0);
			} else if($that.hasClass('T-hair-regiment')){
				// 发团
                var statusValue = $that.data("status-value"),
					billStatus = $that.data("bill-status");
					
                tripPlan.confirmTripPlan(id,statusValue,billStatus);
			} else if($that.hasClass('T-update')){
				// 编辑
                tripPlan.updateSingleTripPlan(id);
			} else if($that.hasClass('T-export')){
				// 导出
                tripPlan.exportTripPlan(id);
			} else if($that.hasClass('T-cancel')){
				// 取消
                tripPlan.cancelTripPlan(id);
			}
		});

		$tab.find('[class*="T-tripPlan-"]').on('click', '.ace-icon', function(event){
			event.preventDefault();
			var $that = $(this);
			if(!$that.hasClass('fa-minus')){
				seajs.use(ASSETS_ROOT + modalScripts.arrange_all,function(module){
					module.updatePlanInfo($that.closest('tr').data("id"), $that.closest('td').data("target"));
				});
			}
		});
    };
	
	tripPlan.listTripPlanGroup = function(page, $tab){
		var $searchArea = $tab.find(".T-search-tripPlan-group"),
			arge = {
				pageNo : page || 0,
				tripPlanType : 1
			},
			formData = $searchArea.serializeJson(),
			idData = {
				lineProductId : $searchArea.find('[name="lineProductName"]').data('id'),
				partnerAgencyId : $searchArea.find('[name="partnerAgencyName"]').data('id'),
				outOPUserId : $searchArea.find('[name="outOPUserName"]').data('id'),
				dutyOPUserId : $searchArea.find('[name="dutyOPUserName"]').data('id'),
				businessGroupId : $searchArea.find('[name="businessGroupName"]').data('id'),
				guideId : $searchArea.find('[name="realname"]').data('id'),
				busId : $searchArea.find('[name="licenseNumber"]').data('id')
			};
		arge = $.extend({},arge, formData, idData);
		if($searchArea.find('[name="status"]').hasClass('hide')){
			arge.status = "";
		}
		$.ajax({
			url : KingServices.build_url('tripController', 'findPager'),
			type : "POST",
			data : {searchParam : JSON.stringify(arge)}
		}).done(function(data){
			if(showDialog(data)){
				data.result = JSON.parse(data.result);
				var groupHtml = listTemplate(data);
				$tab.find('.T-tripPlan-groupList').html(groupHtml);
				// 绑定翻页组件
				laypage({
				    cont: $tab.find('.T-tripPlan-groupList').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.searchParam.totalPage, //总页数
				    curr: (page + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		tripPlan.listTripPlanGroup(obj.curr -1, $tab);
						};
				    }
				});
			}
		});
	};

	tripPlan.listTripPlanSingle = function(page, $tab){
		var $searchArea = $tab.find(".T-search-tripPlan-single"),
			arge = {
				pageNo : page || 0,
				tripPlanType : 0
			},
			formData = $searchArea.serializeJson(),
			idData = {
				lineProductId : $searchArea.find('[name="lineProductName"]').data('id'),
				dutyOPUserId : $searchArea.find('[name="dutyOPUserName"]').data('id'),
				businessGroupId : $searchArea.find('[name="businessGroupName"]').data('id'),
				guideId : $searchArea.find('[name="realname"]').data('id'),
				busId : $searchArea.find('[name="licenseNumber"]').data('id')
			};
		arge = $.extend({},arge, formData, idData);
		if($searchArea.find('[name="status"]').hasClass('hide')){
			arge.status = "";
		}
		$.ajax({
			url : KingServices.build_url('tripController', 'findPager'),
			type : "POST",
			data : {searchParam : JSON.stringify(arge)}
		}).done(function(data){
			if(showDialog(data)){
				data.result = JSON.parse(data.result);
				var singleHrml = singleListTemplate(data);
				$tab.find('.T-tripPlan-singleList').html(singleHrml);
				// 绑定翻页组件
				laypage({
				    cont: $tab.find('.T-tripPlan-singleList').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.searchParam.totalPage, //总页数
				    curr: (page + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		tripPlan.listTripPlanSingle(obj.curr -1, $tab);
						};
				    }
				});
			}
		});
	};
	
	tripPlan.autocompleteSearch = function(chooseObj,jsonList,valueName) {
		chooseObj.autocomplete({
			minLength: 0,
			change :function(event, ui){
				if(ui.item == null){
					$(this).data('id', '');
				}
			},
			select :function(event, ui){
				$(this).data('id', ui.item.id);
			}
		}).on('click', function() {
			var $this = $(this),
				completeList = jsonList;
			if (completeList && completeList.length > 0) {
				for(var i = 0, len = completeList.length; i < len; i++) {
					completeList[i].value = completeList[i][valueName];
				}

				$this.autocomplete('option','source', completeList);
				$this.autocomplete('search', '');
			}else{
				layer.tips('无数据', $this, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		});
	}

	//新增计划
	tripPlan.addTripPlan = function(planType, args){
		if (planType) {
			// 团队
	        var tabKey = menuKey + "_group_add";

	        if (Tools.addTab(tabKey, "新增计划", addTripPlanTemplate())) {
	            tripPlan.initEdit($("#tab-" + tabKey + "-content"));
	        }
		} else {
			var tabKey = menuKey + "_single_add";
	        if(!args){
	        	args = {}
	        }
	        if (Tools.addTab(tabKey, "新增计划", addSingleTripPlanTemplate(args))) {
	            tripPlan.initSigleEvent($("#tab-" + tabKey + "-content")) 
	            if(!!args){//id, name, GroupIds
	            	tripPlan.initNormalLineProduct($("#tab-" + tabKey + "-content"), id);
	            }
	        }
		}	
	};

	tripPlan.initEdit = function($tab){
		var validate = tripPlan.bindCommonEvent($tab, 1);
		//搜索线路
        $tab.find(".T-search-line").off('click').on('click', function(){
        	tripPlan.initLineProductSearch($tab, 0);
        });
		//搜索报价单号
    	$tab.find(".T-search-quote-order").off('click').on('click', function(){
    		tripPlan.initLineProductSearch($tab, 1);
    	});		
    	//收客单号
    	$tab.find(".T-search-team").off('click').on('click', function(){
    		tripPlan.initTeamSearch($tab);
    	});

    	//新增同行
        $tab.find('.T-addPartner').off('click').on("click", {
            function: KingServices.addPartnerAgency,
            type: ".form-group",
            name: "travelAgencyName",
            id: "fromPartnerAgencyId"
        }, KingServices.addResourceFunction);

        //新增同行联系人
        $tab.find('.T-addPartnerManager').off('click').on("click", function(){
        	tripPlan.addPartnerManager($tab.find('[name="contactRealname"]'), $tab);
        });

        tripPlan.chooseTravelAgencyName($tab.find('[name="travelAgencyName"]'));
        tripPlan.chooseContactRealname($tab.find('[name="contactRealname"]'), $tab);
        //外联销售
        tripPlan.getOPUserList($tab.find('[name="outOPUserName"]')).trigger('click');
    	//绑定添加游客小组事件
    	$tab.find('.T-add-tourists').on('click', function(event){
    		event.preventDefault();
    		/*var $tr = $tab.find('.T-tourists-list tr'), index = 1;
    		if($tr.length > 0){
    			index = $tr.eq($tr.length-1).data('index') * 1 + 1;
    		}*/
    		//$tab.find('.T-tourists-list').append('<tr data-index='+index+'><td>'+index+'</td><td><input type="text" class="col-xs-12"></td><td><input type="text" class="col-xs-12"></td><td><select class="col-xs-12"><option value="0">身份证</option><option value="1">护照</option><option value="2">其它</option></select></td><td><input type="text" class="col-xs-12"></td><td><label class="control-label"><input type="checkbox" class="ace"><span class="lbl"></span></label></td><td><a class="cursor T-action T-delete" title="删除">删除</a></td></tr>');
    		$tab.find('.T-tourists-list').append(T.touristsList({touristGroupMemberList:[{}]}));
    		validate = rule.update(validate);
    	});
    	//批量添加游客小组
    	$tab.find('.T-add-tourists-batch').on('click', function(event){
    		event.preventDefault();
    		F.batchAddTourists($tab.find('.T-tourists-list'));
    		validate = rule.update(validate);
    	});
    	//删除游客小组
    	$tab.find('.T-tourists-list')
    	.on('click', '.T-delete', function(event){
    		event.preventDefault();
    		var $tr = $(this).closest('tr'), id = $tr.data("id");
    		if(!!id){
    			showConfirmDialog($('#confirm-dialog-message'), '是否删除该条游客名单？', function() {
	    			$.ajax({
						url:KingServices.build_url("touristGroup","deleteMemberById"),
						data:{ 
							memberId : id
						},
						success: function(data) {
							var result =showDialog(data);
							if(result){
								showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
				    				$tr.remove();
								});
							}
						}
					});
				});
    		}else{
    			$tr.remove();
    		}
    	});
    	//删除账单
    	$tab.find('.T-fee-list')
    	.on('click', '.T-delete', function(event){
    		event.preventDefault();
    		var $tr = $(this).closest('tr'), id = $tr.data("id");
    		
    		if(!!id){
    			showConfirmDialog($('#confirm-dialog-message'), '是否删除该条费用项？', function() {
    				$.ajax({
						url : KingServices.build_url("tripPlan","saveTripPlanByT"),
						type : "POST",
						data : {touristGroupFeeDelJson : "{id : "+id+"}"}
					})
					.done(function(data){
						if(showDialog(data)){
							showMessageDialog($( "#confirm-dialog-message" ), data.message, function(){
								$tr.remove();
								$tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
							});
						}
					});
    			});
    		}else{
    			$tr.remove();
    			$tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
    		}
    	});
    	//绑定账单新增费用项
    	$tab.find(".T-add-fee").on('click', function(event){
    		event.preventDefault();
    		$tab.find('.T-fee-list').append(T.feeList({touristGroupFeeList:[{}]}));
    	});
    	//绑定账单表内事件
    	$tab.find('.T-fee-list').on('change', '.T-calculate', function(event){
    		event.preventDefault();
    		var $that = $(this), $tr = $that.closest('tr');
    		if($that.hasClass('T-count') || $that.hasClass('T-price')){
    			var count = $tr.find('[name="count"]').val() || 0,
    				price = $tr.find('[name="price"]').val() || 0;
    			$tr.find('[name="money"]').val(count * price);
    			$tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
    		}
    	});
    	
    	//提交数据
    	$tab.find(".T-savePlan").on('click', function(event){
    		event.preventDefault();
    		tripPlan.savePlanData($tab, validate);
    	});
	};
	/**
	 * 团队-编辑计划
	 * @param  {string} id id
	 */
	tripPlan.updateGroupTripPlan = function(id){
		$.ajax({
			url : KingServices.build_url("tripPlan","editTripPlanByT"),
			type : "POST",
			data : {tripPlanId : id}
		}).done(function(data){
			if(showDialog(data)){
				// 团队
	        	var tabKey = menuKey + "_group_update";
	        	data.touristGroup = JSON.parse(data.touristGroup);
	        	data.touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
	        	data.touristGroupMemberList = JSON.parse(data.touristGroupMemberList);
	        	data.tripPlanDayList = JSON.parse(data.tripPlanDayList);
	        	data.tripPlanRequireList = JSON.parse(data.tripPlanRequireList);
	        	data.hasData = tripPlan.hasTripPlan(data.tripPlanRequireList);
	        	tripPlan.processRepastDetail(data.tripPlanDayList);
	        	if(Tools.addTab(tabKey, "编辑计划", T.updateGroupTripPlan(data))){
	        		tripPlan.initEdit($("#tab-"+tabKey+"-content"));
	        	};
			}
		});
	};
	tripPlan.chooseTravelAgencyName = function($that){
		$that.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                	$(this).val("").next('[name="fromPartnerAgencyId"]').val("");
                }
            },
            select: function(event, ui) {
            	$(this).next('[name="fromPartnerAgencyId"]').val(ui.item.id);
            }
        }).off('click').on('click', function() {
            var $that = $(this);
            $.ajax({
                url: KingServices.build_url("partnerAgency", "getPartnerAgency"),
                data: {operation: 'view'},
                showLoading:false,
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

	tripPlan.chooseContactRealname = function($that, $tab){
		$that.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    $(this).val("").next('[name="fromPartnerAgencyContactId"]').val("");
                }
            },
            select: function(event, ui) {
                $(this).next('[name="fromPartnerAgencyContactId"]').val(ui.item.id);
            }
        }).off('click').on('click', function() {
            var objM = this;
            var partnerAgencyId = $tab.find('input[name=fromPartnerAgencyId]').val();
            if (partnerAgencyId) {
                $.ajax({
                    url: KingServices.build_url("partnerAgency", "getContactListByPartnerAgencyId"),
                    data: {
                        partnerAgencyId: partnerAgencyId
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
                                $that.autocomplete('option', 'source', contactList);
                                $that.autocomplete('search', '');
                            } else {
                                layer.tips('该组团社没有联系人，请添加！', objM, {
                                    tips: [1, '#3595CC'],
                                    time: 2000
                                });
                            }
                        }
                    }
                });
            } else {
                layer.tips('请选择客户来源', this, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            }

        });
	};

	/**
	 * 团散的通用事件绑定
	 * @param  {object} $tab 顶层父元素
	 * @return {object}      返回表单对象
	 */
	tripPlan.bindCommonEvent = function($tab, type) {
        //购物商家
        $tab.find(".T-shopNames").on('click', function(){
            KingServices.shopMultiselect($(this));
        });
        //自费商家
        $tab.find(".T-selfPayItemNames").on('click', function(){
            KingServices.selfPayMultiselect($(this));
        });
        // 责任计调
        tripPlan.getOPUserList($tab.find('input[name="dutyOPUserName"]')).trigger('click');

        //绑定时间
        Tools.setDatePicker($tab.find('.datepicker'), true);
        tripPlan.setExecuteTimer($tab);
        $tab.find('[name="startTime"]').on('change', function(){
            F.arrangeDate($tab);
        }).trigger('change');        
        $tab.find('.T-executeTime').on('click', 'input[name="executeTimeType"]', function(event) {
            // 发送短信效果
            var $that = $(this);
            $that.closest('div').find('input[name="executeTime"]').toggleClass('hidden', !$that.hasClass('T-timed'));
        });

		var validate = rule.checkPlan($tab); 
		tripPlan.init_edit_event($tab, validate, type);

        //行程安排
        $tab.find('.T-add-days').on('click', function(event){
            event.preventDefault();
            var $days = $tab.find('.T-days'), 
                $tr = $days.find('tr');
            if($tr.length > 0){
                $tr.each(function(index) {
                    var $that = $(this),
                        fresh = $that.find('[name="dateDays"]').data("which-day");
                    if(fresh - (index+1) != 0){
                        $that.before(travelArrange({lineProductDayList:[{whichDay:index+1}]}));
                        return false;
                    }else if(index + 1 >= $tr.length){
                        $days.append(travelArrange({lineProductDayList:[{whichDay:$tr.length+1}]}));
                        return false;
                    }
                });
            }else{
                $days.append(travelArrange({lineProductDayList:[{whichDay:$tr.length+1}]}));
            }
            F.arrangeDate($tab);
            validate = rule.update(validate);
        });

        //绑定操作计划新增事件
        $tab.find('.T-action-plan').on('click', '.T-add-action', function(event){
            event.preventDefault();
            var $that = $(this).prop('disabled', true), 
                type = $that.data('type');

            tripPlan.addActionPlan($tab, $that.text(), type);
            validate = rule.update(validate);
        });
        //绑定操作计划删除事件
        $tab.find('.T-action-plan-list').on('click', '.T-delete', function(event){
            event.preventDefault();
            var $that = $(this), $require = $that.closest('.hct-plan-ask'),
            	title = $require.find('.hct-plan-ask-title').text(),
            	id = $require.data('id');

			if (!!id) {
				showConfirmDialog($('#confirm-dialog-message'), '您将删除'+ title +'，是否继续？', function() {
					$.ajax({
						url: KingServices.build_url('tripPlan', 'deleteTripPlanRequire'),
						type: 'post',
						data: {requireId: id},
					})
					.done(function(data) {
						if (showDialog(data)) {
							showMessageDialog($("#confirm-dialog-message"), data.message, function() {
								removeRequire();
							});
						}
					});
				})
			} else {
				removeRequire();
			}

			function removeRequire() {
				$tab.find('.T-action-plan').find('[data-type="'+ $require.data('type')+'"]').prop('disabled', false);
				$require.remove();
			}
        });

        //绑定行程表内事件
    	$tab.find(".T-days").on('click', '.T-action', function(event){
    		event.preventDefault();
    		var $that = $(this);
    		if($that.hasClass('T-update-detail')){
    			tripPlan.daysUpdateDetail($that);
    		}else if($that.hasClass('T-delete')){
    			var id = $that.closest('tr').data('id');

    			if (!!id) {
    				showConfirmDialog($('#confirm-dialog-message'), '您将删除一天的行程，是否继续？', function() {
    					$.ajax({
    						url: KingServices.build_url('tripController', 'deletePlanDay'),
    						type: 'post',
    						data: {planDayId: id},
    					})
    					.done(function(data) {
    						if (showDialog(data)) {
    							showMessageDialog($("#confirm-dialog-message"), data.message, function() {
    								removeDay();
    							});
    						}
    					});
    				})
    			} else {
    				removeDay();
    			}

    			function removeDay() {
    				$that.closest('tr').remove();
	    			F.arrangeDate($tab);
    			}
    		}else if($that.hasClass('T-scenicItem')){
    			KingServices.chooseScenic($that);
    		}
    	});

		// 取消
		$tab.find('.T-cancelPlan').on('click', function(event) {
			event.preventDefault();
			Tools.closeTab(Tools.getTabKey($tab.prop('id')));
		});
		return validate;
	};

	tripPlan.savePlanData = function($tab, validate, tabArgs){
		if(!validate.form())return;
		var arge = $tab.find('.T-basic-info').serializeJson();
		var tripPlanId = $tab.find('.T-tab').data("id");
		if(tripPlanId){
			arge.tripPlanId = tripPlanId;
		}
		//团行程json包
		arge.tripPlanDayJson = tripPlan.getTripPlanDays($tab);
		
		//游客成员json包
		arge.touristGroupMemberJson = [];
		$tab.find('.T-tourists-list tr').each(function(index) {
			var $that = $(this);
			arge.touristGroupMemberJson.push({
				id : $that.data("id") || "",
			    idCardNumber : $that.find('[name="idCardNumber"]').val(),
			    idCardType : $that.find('[name="idCardType"]').val(),
			    isContactUser : $that.find('[name="isContactUser"]').is(":checked") ? 1 : 0,
			    mobileNumber : $that.find('[name="mobileNumber"]').val(),
			    name : $that.find('[name="name"]').val()
			});
		});
		//团计划要求json包
		arge.tripPlanRequireJson = tripPlan.getTripPlanRequest($tab);
		
		//费用项json包
		arge.touristGroupFeeJson = [];
		$tab.find('.T-fee-list tr').each(function(index) {
			var $that = $(this);
			arge.touristGroupFeeJson.push({
				count : $that.find('[name="count"]').val(),
			    describeInfo : $that.find('[name="describeInfo"]').val(),
			    id : $that.data("id") || "",
			    price : $that.find('[name="price"]').val(),
			    remark : $that.find('[name="remark"]').val()
			});
		});
		//购物&自费商家ID集
		arge.shopIds = $tab.find('[name="shopNames"]').data("propover") || "";
		arge.selfPayItemIds = $tab.find('[name="selfPayItemNames"]').data("propover") || "";
		//应收&预收款&计划现收
		arge.needPayAllMoney = $tab.find('[name="needPayAllMoney"]').val();
		arge.preIncomeMoney = $tab.find('[name="preIncomeMoney"]').val();
		arge.currentNeedPayMoney = $tab.find('[name="currentNeedPayMoney"]').val();
		//
		arge.touristGroupId = $tab.find('[name="partnerAgencyName"]').data("id") || "";
		arge.isContainSelfPay = $tab.find('[name="isContainSelfPay"]').is(":checked") ? 1 : 0;
		arge.buyInsurance = $tab.find('[name="buyInsurance"]').is(":checked") ? 1 : 0;
		arge.executeTimeType = $tab.find('.T-timed').is(":checked") ? 1 : 0;
		if(arge.executeTimeType === 1){
			arge.executeTime = $tab.find('[name="executeTime"]').val();
		}
		//转数据
		arge.tripPlanDayJson = JSON.stringify(arge.tripPlanDayJson);
		arge.touristGroupMemberJson = JSON.stringify(arge.touristGroupMemberJson);
		arge.tripPlanRequireJson = JSON.stringify(arge.tripPlanRequireJson);
		arge.touristGroupFeeJson = JSON.stringify(arge.touristGroupFeeJson);
		$.ajax({
			url : KingServices.build_url("tripPlan","saveTripPlanByT"),
			type : "POST",
			data : arge
		})
		.done(function(data){
			if(showDialog(data)){
				$tab.data('isEdited', false);
				showMessageDialog($( "#confirm-dialog-message" ), data.message, function(){
					if(!!tabArgs){
						if(Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2])){
                        	tripPlan.initEdit($("#tab-"+tabArgs[0]+"-content"));
						};
					}else{
						Tools.closeTab(Tools.getTabKey($tab.prop('id')));
						if(!!tripPlan.$tab){
							tripPlan.$tab.find('.T-search-tripPlan-group .T-btn-tripPlan-search').trigger('click');
						}
					}
				});
			}
		});
	};

	/**
	 * 获取散客计划，进入编辑页面
	 * @param  {int} id 计划ID
	 * @return {[type]}    [description]
	 */
	tripPlan.updateSingleTripPlan = function(id) {
		if (!!id) {
			$.ajax({
				url: KingServices.build_url('tripController', 'editTripPlan'),
				type: 'post',
				data: {tripPlanId: id},
			})
			.done(function(data) {
				if (showDialog(data)) {
					var tabKey = menuKey + "_single_add";
					data.require = JSON.parse(data.require);
					data.touristGroup = JSON.parse(data.touristGroup);
					data.tripPlan = JSON.parse(data.tripPlan);
					data.tripPlanDay = JSON.parse(data.tripPlanDay);

					data.hasData = tripPlan.hasTripPlan(data.require);
					tripPlan.processRepastDetail(data.tripPlanDay);
					console.info(data)
					if (Tools.addTab(tabKey, '编辑计划', updateSingleTripPlanTemplate(data))) {
						tripPlan.initSigleEvent($("#tab-" + tabKey + "-content"));
					}
				}
			});			
		}
	};

	/**
	 * 处理要求数据
	 * @param  {[type]}  require [description]
	 * @return {Boolean}         [description]
	 */
	var requireText = {
		'insurance': '保险',
		'guide': '导游',
		'bus': '车辆',
		'restaurant': '餐饮',
		'hotel': '酒店',
		'scenic': '景区',
		'ticket': '票务',
		'shop': '购物',
		'selfPay': '自费',
		'other': '其它'
	};

	tripPlan.hasTripPlan = function(require) {
		var res = {};

		if (!!require) {
			for (var i = 0, len = require.length; i < len; i ++) {
				require[i].requireText = requireText[require[i].requireType];

				res[require[i].requireType] = true;
			}
		}

		return res;
	};

	tripPlan.processRepastDetail = function(detail) {
		if (!!detail) {
			for (var i = 0, len = detail.length, tmp; i < len; i ++) {
				tmp =  detail[i].repastDetail;
				if (!!tmp) {
					tmp = tmp.split(',');
				}

				if (tmp.length === 3) {
					detail[i].m = tmp[0];
					detail[i].n = tmp[1];
					detail[i].e = tmp[2];
				}
			}
		}
	};

	tripPlan.initSigleEvent = function($tab) {
		var validate = tripPlan.bindCommonEvent($tab, 0);
        //搜索线路
    	$tab.find(".T-search-line").on('click', function(){
    		tripPlan.initLineProductSearch($tab, 0);
    	});

    	//绑定添加游客小组事件
    	$tab.find('.T-add-touristGroup').on('click', function(event){
    		event.preventDefault();
    		var lineProductId = $tab.find("input[name=lineProductId]").val();
			var startTime = $tab.find("input[name=startTime]").val();
			tripPlan.addTouristGroup(lineProductId,startTime,$tab);
    	});
		$tab.find(".T-touristGroup-list").on('click', '.T-action', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this)
				id = $that.closest('tr').data('id');

			if ($that.hasClass('T-groupView')) {
				//查看旅游小组成员
				tripPlan.viewTouristGroup(id);
			} else if ($that.hasClass('T-groupDelete')) {
				//删除小组
				tripPlan.deleteTouristGroup($that, id, $tab.find("input[name=id]").val(), $tab);
			}
		});

    	// 保存
    	$tab.find('.T-savePlan').on('click', function(event) {
    		event.preventDefault();
    		tripPlan.saveSinglePlan($tab, validate);
    	});
	};

	/**
	 * 保存散客计划
	 * @param  {object} $tab 父容器
	 * @return {[type]}      [description]
	 */
	tripPlan.saveSinglePlan = function($tab, validate, tabArgs) {
		if(!validate.form())return;
		var args = $tab.find('.T-basic-info').serializeJson();
		args.isContainSelfPay = $tab.find('[name="isContainSelfPay"]').is(":checked") ? 1 : 0;
		args.shopIds = $tab.find('[name="shopNames"]').data("propover") || "";
		args.selfPayItemIds = $tab.find('[name="selfPayItemNames"]').data("propover") || "";
		// 处理定时发送
		args.executeTimeType = $tab.find('.T-timed').is(':checked')?1:0;
		if (args.executeTimeType && (args.startTime + ' 06:00:00') < args.executeTime) {
			showMessageDialog($( "#confirm-dialog-message" ),"通知时间不能在出团日期6点之后");
			return;
		} else {
			delete(args.executeTime);
		}

		//团行程json包
		args.planDayJson =  JSON.stringify(tripPlan.getTripPlanDays($tab));
		//团计划要求json包
		args.requireJson =  JSON.stringify(tripPlan.getTripPlanRequest($tab));

		// 获取游客小组Id
		args.touristGroupIdJson = [];
		var adultcount = 0, childcount = 0;
		$tab.find('.T-touristGroup-list').children('tr').each(function() {
			var $tr = $(this), $countTd = $tr.find('td[name="peopleCount"]');
			args.touristGroupIdJson.push({
				id: $tr.data('id')
			});

			// 计算人数
			adultcount += $countTd.data('adultcount')*1;
			childcount += $countTd.data('childcount')*1;
		});
		args.touristGroupIdJson =  JSON.stringify(args.touristGroupIdJson);
		args.touristAdultCount = adultcount;
		args.touristChildCount = childcount;
		
		$.ajax({
			url: KingServices.build_url('tripController', 'saveRetailClient'),
			type: 'post',
			data: {tripPlan: JSON.stringify(args)},
		})
		.done(function(data) {
			if (showDialog(data)) {
				showMessageDialog($( "#confirm-dialog-message" ), data.message, function() {
					if(!!tabArgs){
						if(Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2])){
                        	tripPlan.initSigleEvent($("#tab-"+tabArgs[0]+"-content"));
						};
					}else{
						Tools.closeTab(Tools.getTabKey($tab.prop('id')));
						if(!!tripPlan.$tab){
							tripPlan.$tab.find('.T-search-tripPlan-single .T-btn-tripPlan-search').trigger('click');
						}
					}
				});				
			}
		});
		
	};

	/**
	 * 获取行程安排数据
	 * @param  {object} $tab 顶层父容器
	 * @return {[type]}      [description]
	 */
	tripPlan.getTripPlanDays = function($tab) {
		var args = [];

		$tab.find('.T-days tr').each(function(index) {
			var $that = $(this), 
				repastDetail = ($that.find('[name="repastDetailM"]').is(":checked") ? 1 : 0) + ',';

			repastDetail += ($that.find('[name="repastDetailN"]').is(":checked") ? 1 : 0) + ',';
			repastDetail += $that.find('[name="repastDetailE"]').is(":checked") ? 1 : 0;

			args.push(
				{
				    id : $that.data("id") || "",
					title : $that.find('[name="title"]').val(),
					detail: encodeURIComponent($that.find('.T-update-detail').data('detail')),
				    repastDetail : repastDetail,
				    restPosition : $that.find('[name="restPosition"]').val(),
				    scenicItemIds : $that.find('[name="scenicItemNames"]').data("propover") || "",
				    scenicItemNames : $that.find('[name="scenicItemNames"]').val(),
				    whichDay : index + 1	
				});
		});

		return args;
	};

	/**
	 * 获取安排要求数据
	 * @param  {object} $tab 顶级父容器
	 * @return {[type]}      [description]
	 */
	tripPlan.getTripPlanRequest = function($tab) {
		var args = [];

		$tab.find('.T-action-plan-list .hct-plan-ask').each(function(index) {
			var $that = $(this);
			args.push({
				id : $that.data("id") || "",
    			requireContent : $that.find('[name="requireContent"]').val(),
    			requireType : $that.data("type") || ""
			});
		});

		return args;
	};

	tripPlan.initTeamSearch = function($tab){
		var searchTravelLinelayer = layer.open({
			type: 1,
			title: "收客单号",
			skin: 'layui-layer-rim', //加上边框
			area: '85%', //宽高
			zIndex:1029,
			content: '<div class="col-xs-12 T-team-search globalAdd" style="padding-top: 10px;"></div>',
			scrollbar: false,
		});
		tripPlan.getTouristGroupList(0);
		$(".T-team-search").on('click', '.T-team-radio', function(event){
			event.preventDefault();
			var $tr = $(this).closest('tr');
			$tab.find('[name="partnerAgencyName"]').data('id', $tr.data("id")).val($tr.data("ordernumber"));
			tripPlan.getTouristsList($tab, $tr.data("id"));
			layer.close(searchTravelLinelayer);
		});
	};
	tripPlan.getTouristGroupList = function(page){
		$.ajax({
			url : KingServices.build_url('touristGroup', 'getTouristGroupListByT'),
			type : 'POST',
			data : {pageNo : page || 0}
		}).done(function(data){
			if(showDialog(data)){
				var $team = $(".T-team-search");
				$team.html(T.searchTeam(data));
				laypage({
				    cont: $team.find('.T-pagenation'),
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							tripPlan.getTouristGroupList(obj.curr -1);
				    	}
				    }
				});	
				$(window).trigger('resize');
			}
		});
	};
	tripPlan.getTouristsList = function($tab, id){
		$.ajax({
			url: KingServices.build_url('touristGroup', 'getMembersByTouristGroupId'),
			type: 'POST',
			data: {id: id}
		})
		.done(function(data) {
			if(showDialog(data)){
				var groupData = JSON.parse(data.touristGroup);
				data.touristGroupMemberList = JSON.parse(data.touristGroupMemberList);
				data.touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
				$tab.find('.T-tourists-list').html(T.touristsList(data));
				$tab.find('.T-fee-list').html(T.feeList(data));
				if(!!groupData.quote){
					$tab.find('[name="quoteOrderName"]').val(groupData.quote.name);
					$tab.find('[name="quoteId"]').val(groupData.quote.id);
				}
				if(!!groupData.lineProduct){
					$tab.find('[name="lineProductName"]').val(groupData.lineProduct.name);
					$tab.find('[name="lineProductId"]').val(groupData.lineProduct.id);
					tripPlan.initNormalLineProduct($tab, groupData.lineProduct.id);
				}
				$tab.find('[name="adultCount"]').val(groupData.adultCount);
				$tab.find('[name="childCount"]').val(groupData.childCount);
				$tab.find('[name="startTime"]').val(groupData.startTime ? groupData.startTime.replace(/(\d+)(\s\d{2}:\d{2}:\d{2})/, '$1') : "");
				$tab.find('[name="endTime"]').val(groupData.endTime ? groupData.endTime.replace(/(\d+)(\s\d{2}:\d{2}:\d{2})/, '$1') : "");
				$tab.find('[name="travelAgencyName"]').val(groupData.partnerAgency ? groupData.partnerAgency.travelAgencyName : "");
				$tab.find('[name="fromPartnerAgencyId"]').val(groupData.partnerAgency ? groupData.partnerAgency.id : "");
				$tab.find('[name="contactRealname"]').val(groupData.partnerAgencyContact ? groupData.partnerAgencyContact.contactRealname : "")
				$tab.find('[name="fromPartnerAgencyContactId"]').val(groupData.partnerAgencyContact ? groupData.partnerAgencyContact.id : "");
				$tab.find('[name="getType"]').val(groupData.getType);
				$tab.find('[name="otaOrderNumber"]').val(groupData.otaOrderNumber);
				$tab.find('[name="outOPUserId"]').val(groupData.outOPUserId);
				$tab.find('[name="memberType"]').val(groupData.memberType);
				$tab.find('[name="welcomeBoard"]').val(groupData.welcomeBoard);
				$tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
			}
		});
	};
	tripPlan.daysUpdateDetail = function($that){
		var html = T.updateDetail({detail : $that.data('detail')});
		var daysLayer = layer.open({
		    type: 1,
		    title: false,
		    closeBtn: 0,
		    skin: 'layui-layer-rim',
		    area: '900px',
		    content: html,
		    scrollbar: false,
		});
		init_editor('tripPlanUpdateDetail');
		var $layer = $(".hct-update-detail ");
		$layer.find('.T-cancel').on('click', function(){
			layer.close(daysLayer);
		});
		$layer.find('.T-save').on('click', function(){
			$that.data('detail', UE.getEditor('tripPlanUpdateDetail').getContent());
			layer.close(daysLayer);
		});
	};
	tripPlan.addActionPlan = function($tab, title, type){
		var list = '<div class="col-xs-12 hct-plan-ask" data-type="'+type+'"><div class="pull-left hct-plan-ask-title">'+$.trim(title)+'计划要求</div><div class="pull-left hct-plan-ask-input"><input type="text" class="col-xs-12" name="requireContent"></div><div class="pull-left hct-plan-ask-operate"><a class="cursor T-action T-delete" title="删除">删除</a></div></div>';
		$tab.find('.T-action-plan-list').append(list);
	}
	tripPlan.viewTripPlan = function(id, planType){
		var html = T.viewTripPlanSingle, viewMenuKey = menuKey+"_single_view";
		if(planType == 1){
			html = T.viewTripPlanGroup;
			viewMenuKey = menuKey+"_group_view";
		}
		$.ajax({
			url : KingServices.build_url("tripController", "viewTripPlan"),
			type : "POST",
			data : {tripPlanId : id}
		})
		.done(function(data){
			if(showDialog(data)){
				for(var i=0; i<data.dayList.length; i++){
					data.dayList[i].dayInfo = JSON.parse(data.dayList[i].dayInfo);
					var arrangeData = data.dayList[i].arrangeData;
					arrangeData.hotelArrangeList = JSON.parse(arrangeData.hotelArrangeList);
					arrangeData.otherArrangeList = JSON.parse(arrangeData.otherArrangeList);
					arrangeData.restaurantArrangeList = JSON.parse(arrangeData.restaurantArrangeList);
					arrangeData.scenicArrangeList = JSON.parse(arrangeData.scenicArrangeList);
					arrangeData.selfPayArrangeList = JSON.parse(arrangeData.selfPayArrangeList);
					arrangeData.shopArrangeList = JSON.parse(arrangeData.shopArrangeList);
					arrangeData.ticketArrangeList = JSON.parse(arrangeData.ticketArrangeList);
				}
				data.busCompanyArrange = JSON.parse(data.busCompanyArrange);
				data.guideArrange = JSON.parse(data.guideArrange);
				data.insuranceArrange = JSON.parse(data.insuranceArrange);
				data.touristGroup = JSON.parse(data.touristGroup);
				data.tripPlan = JSON.parse(data.tripPlan);
				if(Tools.addTab(viewMenuKey, "查看计划", html(data))){
					$("#tab-"+viewMenuKey+"-content").find('.T-btn-close').on('click', function(event){
						event.preventDefault();
						Tools.closeTab(viewMenuKey);
					});
				}
			}
		});
	};

	var F = {
		//计算应收
		calcRece : function($tab){
			var countMoney = 0;
			$tab.find('.T-fee-list tr').each(function(index){
				var money = $(this).find('[name="money"]').val() * 1;
				countMoney += money;
			});
			return countMoney;
		},
		//换算行程安排日期
		arrangeDate : function($tab){
			var $time = $tab.find('[name="startTime"]'),
				startTime = $time.val(),
				endTime = $tab.find('[name="endTime"]'),
				$tr = $tab.find('.T-days tr');
			if(startTime != ""){
				$tr.each(function(index){
					var $days = $(this).find('[name="dateDays"]'),
						whichDate = Tools.addDay(startTime, $days.data("which-day") - 1);
					$days.text(whichDate);
					if(endTime.val() != whichDate && index == $tr.length-1){
						endTime.val(whichDate);
					}
				});
			}
		},
		batchAddTourists : function($obj){
			var addVisotorMoreLayer = layer.open({
	            type: 1,
	            title: '批量添加游客',
	            skin: 'layui-layer-rim',
	            area: '40%',
	            zIndex: 1028,
	            content: T.batchAddTourist(),
	            success: function() {
	                var $panelObj = $(".T-batchAddTouristGroupMemberContainer");
	                $panelObj.find('.T-submit-batchTouristGroupMember').on('click', function() {
	                    F.saveVisitorMore($panelObj, addVisotorMoreLayer, $obj);
	                });
	            }
	        });
		},
		getName : function(str){
			//return trim(str.replace(/[^\u4e00-\u9fa5a-zA-Z\s]/ig, "").replace(/\s+/g, " "));
			var name = str.match(/(^|\s)([\u4e00-\u9fa5a-zA-Z\s]+)(\s|$)/ig);
			return trim(name ? name[0] : " ").replace(/\s+/g, " ");
		},
		getPhone : function(str){
			var phone = str.match(/(^|\s)(1[34587]\d{9})|(0[1-9]\d{1,2}[-\s]\d{7,8})(\s|$)/ig);
			return trim(phone ? phone[0] : " ");
		},
		getIdCard : function(str){
			var idCard = str.match(/(^|\s)\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)(\s|$)/ig);
			return trim(idCard ? idCard[0] : " ");
		},
		saveVisitorMore : function($panelObj, addVisotorMoreLayer, $obj){
			var data = trim($panelObj.find('textarea[name=batchTouristGroupMember]').val());
			if (data != "") {
            	var dataArray = data.split(/\r?\n/);
	            if (dataArray.length > 0) {
	                for (var i = 0; i < dataArray.length; i++) {
	                	var memberInfo = trim(dataArray[i]);
	                	if(memberInfo){
		                    $obj.append(T.touristsList({touristGroupMemberList:[{
		                    	name : F.getName(memberInfo),
		                    	mobileNumber : F.getPhone(memberInfo),
		                    	idCardNumber : F.getIdCard(memberInfo)
		                    }]}));
		                    layer.close(addVisotorMoreLayer);
	                	}
	                }
	            }
        	}else{
				showMessageDialog($("#confirm-dialog-message"), "请输入要添加的数据");
        	}
		}
	};

	//发团定时   
	tripPlan.setExecuteTimer = function($tab){
		var maxDateTime = $tab.find('[name="startTime"]').val() + ' 06:00:00';
		$tab.find("input[name=executeTime]").datetimepicker({
			autoclose: true,
			useCurrent:false,
			todayHighlight: true,
			maxDate: new Date(maxDateTime),
			format: 'L',
			language: 'zh-CN'
		});
	}; 

	/**
	 * 绑定责任计调的选择
	 * @param  {object} $target 绑定选择的Jquery对象
	 * @return {[type]}         [description]
	 */
	tripPlan.getOPUserList = function($target){
		return $target.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					if($target.attr("name") === "outOPUserName"){
						$target.val('')
						.nextAll('input[name="dutyOPUserId"]').val('')
					}else{
						$target.val('')
						.nextAll('input[name="dutyOPUserId"]').val('')
						.closest('.T-tab').find('input[name="dutyOPDepartment"]').val('');
					}
				}
			},
			select:function(event,ui){
				var item = ui.item;
				if($target.attr("name") === "outOPUserName"){
					$target.blur()
					.nextAll('input[name="outOPUserId"]').val(item.id);
				}else{
					$target.blur()
					.nextAll('input[name="dutyOPUserId"]').val(item.id)
					.closest('.T-tab').find('input[name="dutyOPDepartment"]').val(item.businessGroup.name);
				}
			}
		})
		.one('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$.ajax({
				url: KingServices.build_url('tripPlan', 'getOPUserList'),
				type: 'post',
			})
			.done(function(data) {
				if (showDialog(data)) {
					if($target.val() == ""){
						$target.val(data.realName)
						.nextAll('input[name="dutyOPUserId"]').val(data.userId)
						.closest('.T-tab').find('input[name="dutyOPDepartment"]').val(data.businessGroupName);
					}
					var $tab = $target.closest('.T-tab');
					if($tab.find('[name="travelAgencyTag"]').val() == ""){
						$tab.find('[name="travelAgencyTag"]').val(data.travelAgencyTag)
					}
					
					var userList = JSON.parse(data.userList || false);
					if (!!userList) {
						for (var i = 0, len = userList.length;i < len; i++) {
							userList[i].value = userList[i].realName;
						}

						$target.autocomplete('option', 'source', userList).data('ajax', true);
					}
				}
			});
		})
		.on('click', function(event) {
			event.preventDefault();
			if ($target.data('ajax')) {
				$target.autocomplete('search', '');
			}
		});
	};

	//添加游客小组
	tripPlan.addTouristGroup = function(lineProductId,startTime,$tab){
		//添加游客小组 （多选）			
		var excludeIdJson = [];
		$tab.find(".T-touristGroup-list").children('tr').each(function(i){
			var excludeId = {
				id : $(this).data("id")
			};
			excludeIdJson.push(excludeId);
		})
		excludeIdJson = JSON.stringify(excludeIdJson);

		if(lineProductId.length > 0 && startTime.length > 0){
			$.ajax({
				url:KingServices.build_url("tripPlan","findTouristGroupInfo"),
				type:"POST",
				data:{
					lineProductId : lineProductId,
					startTime : startTime,
					type : 1,
					excludeIdJson : excludeIdJson
				},
				success:function(data){
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						if(data.touristGroupList.length <= 0 ){
							showMessageDialog($( "#confirm-dialog-message" ),"没有出游的游客小组，请在游客管理中添加！");
							return false;
						}
						var html = addGroupTemplate(data);
						var addGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"添加游客小组",
						    skin: 'layui-layer-rim', 
						    area: '1100px',
						    zIndex:1028,
						    content: html,
						    scrollbar: false,
						    success:function(){
						    	var $container = $(".T-addtourist-toplan");
						    	$container.find(".T-checkAll").click(function(){
									if($(this).is(":checked")){
										$container.find(".T-tourist-check").prop("checked",true);
									} else{
										$container.find(".T-tourist-check").prop("checked",false);
									}
								});
						    	//查看旅游小组成员
						    	$container.find(".T-groupView").off().on("click",function(){
						    		tripPlan.viewTouristGroup($(this).closest("tr").data("id"));
						    	})
						    	//提交按钮事件绑定
								$container.find(".T-saveGroup").click(function(){
									var addGroupIdJson = [],
										html = "<td>"+
											"<div class=\"hidden-sm hidden-xs btn-group\">"+
											"<a class=\"cursor T-action T-groupView\">"+
												"查看"+
											"</a>"+"<a class='cursor'> </a>"+
											"<a class=\"cursor T-action T-groupDelete\">"+
												"删除"+
											"</a>"+
											"</div>"+
											"</td>";
									$container.find(".T-group-list tr").find("input:checked").each(function(i){
										var $tr = $(this).closest('tr').clone();
										// 构造所需的行
										$tr.children('td').eq(0).remove().end().last().remove().end().end().append(html);
										// 附加行
						    			$tab.find(".T-touristGroup-list").append($tr);
									});
									
									layer.close(addGroupTemplateLayer);
						    	})
						    }
						})
					}					
				}
			})
		}else{
			showMessageDialog($( "#confirm-dialog-message" ),"请先选择线路名称和出团日期！");
		}
	};

	//新增计划带出游客小组
	/*tripPlan.getTouristGroup = function(args, $tab){
		$.ajax({
			url:KingServices.build_url("tripPlan","findTouristGroupInfo"),
			type:"POST",
			data:{
				lineProductId : args.lineProductId,
				startTime : args.startTime,
				type : 1,
				excludeIdJson : JSON.stringify([]);
			},
			success:function(data){
				if(showDialog(data)){

				}
			}
		});
	};*/
	//删除小组成员
	tripPlan.deleteTouristGroup = function(obj,id,tripPlanId,$tab){
		showConfirmMsg($( "#confirm-dialog-message" ), "你确定要移除该小组吗？",function(){
			if(!!id){
				$.ajax({
					url:KingServices.build_url("touristGroup","removeTouristGroup"),
					data:{ 
						tripPlanId : tripPlanId + "",
						touristGroupId : id
					},
					success: function(data) {
						var result =showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
			    				obj.closest('tr').remove();
								tripPlan.MenberNumber($tab);
								tripPlan.tripPlanAllMemberCount($tab);
							});
						}
					}
				});
			} else{
				obj.closest('tr').remove();
				tripPlan.MenberNumber($tab);
				tripPlan.tripPlanAllMemberCount($tab);
			}
		},function(){},"取消","确定");
	};

	tripPlan.getOutOPUser = function($that){

	};

	//新增同行联系人
    tripPlan.addPartnerManager = function($that, $tab) {
        var partnerAgencyId = $tab.find('input[name=fromPartnerAgencyId]').val();
        var html = T.addPartnerManager();
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
                        tripPlan.addPartnerManagerFn(partnerAgencyId, managerName, managerMobile, departmentName, dutyName, $tab, addPartnerManagerLayer);
                    });
                }
            });
        } else {
            layer.tips('新建联系人请先选择客户来源', $that, {
                tips: [1, '#3595CC'],
                time: 2000
            });
        }
    };
    //新增同行联系人
    tripPlan.addPartnerManagerFn = function(partnerAgencyId, managerName, managerMobile, departmentName, dutyName, $obj, addPartnerManagerLayer) {
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
                    $tab.find('input[name=contactRealname]').val(contact.contactRealname + "-[" + contact.contactMobileNumber + "]").trigger('change');
                    $tab.find('input[name=fromPartnerAgencyContactId]').val(contact.id);
                }
            }
        });
    };

    tripPlan.confirmTripPlan = function(id,statusValue,billStatus){
		if(billStatus != -1){
			showMessageDialog($( "#confirm-dialog-message" ),"该团已审核，无法确认");
		}else{
			if(statusValue==0){
				$.ajax({
					url:KingServices.build_url("tripPlan","confirmTripPlan"),
					data:{ tripPlanId : id + "" },
					success: function(data) {
		            	var result =showDialog(data);
		            	var dataD = data;
						if(result){
							showMessageDialog($("#confirm-dialog-message" ),data.message, function(){
								tripPlan.$tab.find('.tab-pane.acitve').find('.T-btn-tripPlan-search').trigger('click');
							});
						}
					}
				});
			}else{
				showConfirmMsg($( "#confirm-dialog-message" ), "是否给导游发送短信？",function(){
					$.ajax({
						url:KingServices.build_url("tripPlan","noticeGuideTripPlanAfterConfirmTripPlanAgain"),
						data:{ id : id + "" },
						success: function(data) {
							var result =showDialog(data);
							var dataD = data;
							if(result){
								showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
									tripPlan.$tab.find('.tab-pane.acitve').find('.T-btn-tripPlan-search').trigger('click');
								});
							}
						}
					});
				},function(){},"取消","确定");
			}
		}
	};

	tripPlan.init_edit_event = function($tab, validate, type) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event, tab_id, title, html) {
            	event.preventDefault();
            	$tab.data('isEdited', false);
            	if(type == 1){
            		tripPlan.initEdit($("#tab-"+tab_id+"-content"));
            	}else{
            		tripPlan.initSigleEvent($("#tab-"+tab_id+"-content"));
            	}
            })
            // 监听保存，并切换tab
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                if(type == 1){
                	tripPlan.savePlanData($tab, validate, [tab_id, title, html]);
                }else{
                	tripPlan.saveSinglePlan($tab, validate, [tab_id, title, html]);
                }
            })
            // 保存后关闭
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                $tab.data('isEdited', false);
                if(type == 1){
                	tripPlan.savePlanData($tab, validate);
                }else{
                	tripPlan.saveSinglePlan($tab, validate);
                }
                
            });
        }
    };

	/**old**/
	//编辑计划
	tripPlan.updateTripPlan = function(id){
		var $tab = $("#tab-" + menuKey + "-update-content");
		if ($tab.length && $tab.find('.T-savePlan').data('id') == id) {// 如果打开的是相同产品，则不替换
			$('.tab-arrange_plan-update').children('a').trigger('click');
			return;
		}

		$.ajax({
			url:KingServices.build_url("tripPlan","getTripPlanById"),
			data:{ tripPlanId : id + ""}, 
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.touristGroupList =JSON.parse(data.touristGroupList);
					data.lineProductDayList =JSON.parse(data.lineProductDayList);
					data.tripPlan =JSON.parse(data.tripPlan);
					data.lineProduct =JSON.parse(data.lineProduct);
					data.guide =JSON.parse(data.guide);
					data.driver =JSON.parse(data.driver);
					data.busCompant =JSON.parse(data.busCompant);
					data.bus =JSON.parse(data.bus);
					var html = updateTemplate(data);

					//判定短信是否发送
					var isSendMessageStatus=data.tripPlan.isSendTouristMessage;
					//判断  立即发送  定时发送
					var isCheckedStatus=data.tripPlan.executeTimeType;
					if (Tools.addTab(menuKey+"-update", "编辑发团计划", html)) {
			            tripPlan.initEdit("update",id);  
			            //短信状态
					 	tripPlan.isMessageStatus(isSendMessageStatus,isCheckedStatus,$("#tab-"+menuKey+"-update-content"));                       
			        }
				}	
			}
			
		});	
	};
	/**
	 * 初始化选择线路的对话框
	 */
	tripPlan.initLineProductSearch = function($tab, type) {
		var html = searchTemplate({}),
			title = '选择线路产品';
		if(type == 1){
			html = searchQuoteOrderTemplate({});
			title = '选择报价单号';
		}
		var searchTravelLinelayer = layer.open({
			type: 1,
			title: title,
			skin: 'layui-layer-rim', //加上边框
			area: '85%', //宽高
			zIndex:1029,
			content: html,
			scrollbar: false,
		});
		var $dialog = $('.T-tripplan-lineproduct-search');
		if(type == 1){
			tripPlan.getLineProductList($dialog, type);
		}else{
			tripPlan.getLineProductList($dialog, type);
		}

		// 选择线路产品
		$dialog.find('.T-btn-submit').on('click', function(event) {
			event.preventDefault();
			var $tr = $dialog.find('input[name="choice-TravelLine"]:checked').closest('tr'),
				oldLinetId = $tab.find('input[name="lineProductId"]').val();

			if (!$tr.length) {
				showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品");
				return;
			}
			var lineId = $tr.data('id');
			if(type == 1){
				quoteId = $tr.data('id');
				$tab.find('input[name="quoteId"]').val(quoteId);
				$tab.find('input[name="quoteOrderName"]').val($tr.find('[name="quoteNumber"]').text()).trigger('change');
				lineId = $tr.data('line-id');
			}else if(oldLinetId != lineId){
				$tab.find('input[name="quoteId"]').val("");
				$tab.find('input[name="quoteOrderName"]').val("");
			}
			$tab.find('input[name="lineProductName"]').val($tr.find('[name="lineName"]').text()).trigger('change');
			$tab.find('input[name="lineProductId"]').val(lineId);
			tripPlan.initNormalLineProduct($tab, lineId);
			layer.close(searchTravelLinelayer);
		});	
	};

	/**
	 * 获取线路产品数据，并填入选择线路产品的对话框
	 * @param  {object} $dialog dialog的Jquery对象
	 * @param  {int} type    0：新增 1：更新
	 * @param  {int} page    页码
	 * @param  {string} name    搜索关键字
	 * @return {[type]}         [description]
	 */
	tripPlan.getLineProductList = function($dialog, type, page, name) {
		page = page || 0;
		var url = KingServices.build_url('lineProduct', 'findAll'),
			$tbody = $dialog.find('.T-normal-list');

		if (type) {
			url = KingServices.build_url('lineProduct', 'listQuoteLinePorduct');
			$tbody = $dialog.find('.T-quote-list');
		}
		$.ajax({
			url: url,
			type: 'post',
			showLoading: false,
			data: {
					pageNo: page,
					name: name
				},
		})
		.done(function(data) {
			if (showDialog(data)) {
				data.lineProductList = JSON.parse(data.lineProductList);
				var listHtml = lineproductSearchList(data);
				if(type == 1){
					listHtml = searchQuoteOrderList(data);
				}
				$tbody.html(listHtml);
				$tbody.closest('.tab-pane').find('.T-total').text(data.recordSize);
				// 绑定翻页组件
				laypage({
				    cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							tripPlan.getLineProductList($dialog, type, obj.curr -1,$dialog.find('input[name=lineProduct_name]').val());
				    	}
				    }
				});	

				// 让对话框居中
				$(window).trigger('resize');
			}
		});			
	};

	/**
	 * 用报价产品信息，初始化小组页面
	 * @param  {object} $mainForm   对应小组页面容器
	 * @param  {int} lineId 报价产品的索引
	 * @return {[type]}        [description]
	 */
	tripPlan.initQuoteData = function($mainForm, quoteId) {
		if (!!quoteId) {
			$.ajax({
				url: KingServices.build_url('lineProduct', 'listQuoteLinePorduct'),
				type: 'post',
				showLoading: false,
				data: {id: quoteId},
			})
			.done(function(data) {
				if (showDialog(data)) {
					data.lineProductList = JSON.parse(data.lineProductList);

					/*data.quoteLinePorduct = JSON.parse(data.quoteLinePorduct || false);
					data.busCompany = JSON.parse(data.busCompany || false);
					data.busCompanyArrange = JSON.parse(data.busCompanyArrange || false);*/
					//tripPlan.setQuoteData($mainForm, data);
				}
			});
			
		}
	}

	tripPlan.initNormalLineProduct = function($tab, pId) {
		if (!!pId) {
			$.ajax({
    			url:KingServices.build_url("tripPlan","getLineProductDayList"),
    			data:{ lineProductId : pId},
				type:"POST",
				success: function(data) {
					data.lineProductDayList = JSON.parse(data.lineProductDayList);
                	var result =showDialog(data);
					if(result){
						//tripPlan.setTripPlanLineValue(data);
						for(var i=0; i<data.lineProductDayList.length; i++){
							var repastDetail = data.lineProductDayList[i].repastDetail;
							if(!/^\d,\d,\d$/.test(repastDetail)){
								repastDetail = '0,0,0';
							}
							repastDetail = repastDetail.split(',');
							data.lineProductDayList[i].m = repastDetail[0];
							data.lineProductDayList[i].n = repastDetail[1];
							data.lineProductDayList[i].e = repastDetail[2];
						}
						$tab.find(".T-days").html(travelArrange(data));
						//KingServices.viewOptionalScenic($tab.find('.T-days .T-scenicItem'));
						F.arrangeDate($tab);
					}
				}
    		})
		}
	}

	/**
	 * 设置报价产品数据到游客小组
	 * @param {object} $mainForm 游客小组的父容器
	 * @param {object} data 报价产品的数据
	 */
	tripPlan.setQuoteData = function($mainForm, data) {
		if (!!data) {
			var isUpdate = $mainForm.hasClass('T-update'), tmp = '';
			setData('startTime', data.quoteLinePorduct.startTime);   //出游日期
			
			if (!!data.busCompanyArrange && !!data.busCompanyArrange.needSeatCount) {
				tmp = data.busCompanyArrange.needSeatCount;
			}
			setData('seatCount', tmp);   //车坐数
			if (!!data.busCompany) {
				setData('busCompany', data.busCompany.companyName || '');   //车队
				setData('busCompanyId', data.busCompany.id || '');   //车队索引
			} else {
				setData('busCompany', '');   //车队
				setData('busCompanyId', '');   //车队索引
			}

			$mainForm.find('input[name="childPrice"]').trigger('change');
		}

		function setData(name, val) {
			var $name = $mainForm.find('[name="'+ name +'"]');

			if (!!isUpdate)  {
				$name.data('old', $name.val());
			}

			if (!!val) {
				$name.prop('readonly', true);
			}
			
			$name.val(val || '');
		}
	};

	tripPlan.setValue = function(name,value){
		$(".T-plan-container").find("[name="+name+"]").attr("value",value);
	};
	tripPlan.setAreaValue = function(name,value){
		$(".T-plan-container").find("[name="+name+"]").text(value);
	};

	//查看旅游小组成员
	tripPlan.viewTouristGroup = function(id){
		$.ajax({
			url:KingServices.build_url("tripPlan","getMemberList"),
			data:{ touristGroupId : id + "" },
			success:function(data){
				var result = showDialog(data);
				if(result){
					var memberList = JSON.parse(data.memberList);
					data.memberList = memberList;
					var html = viewGroupTemplate(data);
					var viewGroupTemplateLayer = layer.open({
					    type: 1,
					    title:"查看小组信息",
					    skin: 'layui-layer-rim',
					    area: '1000px',
					    zIndex:1028,
					    content: html,
					    scrollbar: false
					})
				}
			}
		});
	};

	//导出发团计划
	tripPlan.exportTripPlan = function(id){
		checkLogin(function(){
			var url = KingServices.build_url("export","exportTripPlan") + "&tripPlanId="+id+"";
			exportXLS(url);
		});
	};

	//取消计划
	tripPlan.cancelTripPlan = function(id){
		showConfirmMsg($( "#confirm-dialog-message" ), "你确定要取消该发团计划信息？",function(){
			$.ajax({
				url:KingServices.build_url("tripPlan","cancelTripPlan"),
				data:{ tripPlanId : id + "" },
				success: function(data) {
					var result =showDialog(data);
					var dataD = data;
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							tripPlan.listTripPlan(0,"","","","","","","","","","");
						});
					}
				}
			});
		},function(){},"取消","确定");
	};

	tripPlan.tripPlanAllMemberCount = function($tab){
		var tr = $tab.find(".T-tourist-list tr"),
			trMemberCount = 0;
		tr.each(function(){
			trMemberCount += parseInt($(this).find(".T-memberCount").text());
		})
		$tab.find(".T-groupMemberCount").text(trMemberCount);
		trMemberCount = 0;
	};

	//游客名单成员添加自动序号函数  tripPlan.MenberNumber(oClass);
	tripPlan.MenberNumber = function($tab){
		$tab.find(".T-tourist-list tr").each(function(i){
			$(this).children().eq(0).text(i+1);
		});
	};

	//团号模糊查询
	tripPlan.tripNumberListChoose = function($obj){
		var tripNumberListChoose = $obj.find(".T-choosePlan");
		tripNumberListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=tripId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=tripId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var listObj = tripPlan.autocompleteDate.tripNumberList;
			if(listObj !=null && listObj.length>0){
				for(var i=0;i<listObj.length;i++){
					listObj[i].value = listObj[i].tripNumber;
				}
			}
			$(obj).autocomplete('option','source', listObj);
			$(obj).autocomplete('search', '');
		})
	};
	//导游模糊查询
	tripPlan.guideListChoose = function($obj){
		var guideListChoose = $obj.find(".T-chooseGuide");
		guideListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=guideId]").val("");
				}
			},
			select:function(event,ui){
            $(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=guideId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listGuideObj = tripPlan.autocompleteDate.guideList;
			if(listGuideObj !=null && listGuideObj.length>0){
				for(var i=0;i<listGuideObj.length;i++){
					listGuideObj[i].value = listGuideObj[i].realname;
				}
			}
			$(obj).autocomplete('option','source',listGuideObj);
			$(obj).autocomplete('search', '');
		});
	};

	//车牌号模糊查询
	tripPlan.busListChoose = function($obj){
		var busListChoose = $obj.find(".T-chooseBus");
		busListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=busId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=busId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listBusObj = tripPlan.autocompleteDate.busList;
			if(listBusObj !=null && listBusObj.length>0){
				for(var i=0;i<listBusObj.length;i++){
					listBusObj[i].value = listBusObj[i].licenseNumber;
				}
			}
			$(obj).autocomplete('option','source',listBusObj);
			$(obj).autocomplete('search', '');
		});
	};
    //创建人模糊查询
	tripPlan.creatorListChoose = function($obj){
		var creatorListChoose = $obj.find(".T-chooseCreator");
		creatorListChoose.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=creatorId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=creatorId]").val(ui.item.id).trigger('change');
			}

		}).click(function(){
			var obj = this;
			var listCreatorObj = tripPlan.autocompleteDate.creatorList;
			if(listCreatorObj !=null && listCreatorObj.length>0){
				for(var i=0;i<listCreatorObj.length;i++){
					listCreatorObj[i].value = listCreatorObj[i].realName;
				}
			}
			$(obj).autocomplete('option','source',listCreatorObj);
			$(obj).autocomplete('search', '');
		});
	};

	tripPlan.isMessageStatus = function(isSendMessageStatus,isCheckedStatus,$tab){
		var $Obj=$tab.find(".T-plan-container");
		if (isSendMessageStatus==1) {
			$Obj.find("input[name=executeTimeType]").prop("disabled",true);
		} else{
			$Obj.find("input[name=executeTimeType]").prop("disabled",false);
		}

		if (isCheckedStatus==0) {//立即发送
			$Obj.find("input[name=executeTimeType]").eq(0).prop("checked",true);
		} else{//定时发送
			$Obj.find("input[name=executeTimeType]").eq(1).prop("checked",true);
			$Obj.find("input[name=executeTime]").show();
			
			if(isSendMessageStatus==1){
				$Obj.find("input[name=executeTime]").prop("disabled",true);
			}
		}
	};

	exports.init = tripPlan.initModule;
	//散客发团计划编辑
	exports.updateSingleTripPlan = tripPlan.updateSingleTripPlan;
	exports.addTripPlan = tripPlan.addTripPlan;
});