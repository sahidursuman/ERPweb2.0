define(function(require, exports) {
    var rule=require("./rule"),
        menuKey = "arrange_plan",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        addTripPlanTemplate=require("./view/addTripPlan"),
        searchTemplate = require("./view/searchList"),
        searchQuoteOrderTemplate = require("./view/searchQuoteOrder"),
        lineproductSearchList = require("./view/lineproductSearchList"),
        searchQuoteOrderList = require("./view/searchQuoteOrderList"),
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
        batchAddTourist : require('./view/batchAddTourist')
    }
    var tripPlan = {
        searchData : false,
        $tab : false,
        $searchArea : false,
        autocompleteDate : {}
    };

    tripPlan.initModule = function() {
        tripPlan.listMainTripPlan();
    };  

    tripPlan.listMainTripPlan = function(){
        Tools.addTab(menuKey, "团队计划", listMainTemplate(FinancialService.getInitDate()));
        tripPlan.$tab = $('#tab-'+menuKey+'-content');
        tripPlan.init_eventMain(tripPlan.$tab);
        
        tripPlan.getAutocompleteData(1);
    };

    tripPlan.getAutocompleteData = function(type){
        $.ajax({
            url: KingServices.build_url('tripController','findSelectValue'),
            type : "POST",
            data : {tripPlanType : type}
        }).done(function(data){
            if(showDialog(data)){
                //查询条件 autocomplete
                var $searchArea = tripPlan.$tab.find('.T-search-tripPlan-group');

                tripPlan.autocompleteSearch($searchArea.find('input[name="lineProductName"]'), data.lineProducts, 'name');
                tripPlan.autocompleteSearch($searchArea.find('input[name="partnerAgencyName"]'), data.partnerAgencies, 'travelAgencyName');
                //tripPlan.autocompleteSearch($searchArea.find('input[name="outOPUserName"]'), data.outOPUsers, 'realName');
                tripPlan.autocompleteSearch($searchArea.find('input[name="businessGroupName"]'), data.businessGroups, 'name');
                tripPlan.autocompleteSearch($searchArea.find('input[name="realname"]'), data.guides, 'realname');
                tripPlan.autocompleteSearch($searchArea.find('input[name="brand"]'), data.busCompanyArranges, 'licenseNumber');

                tripPlan.listTripPlanGroup(0, tripPlan.$tab);
            }
        })
    }

    tripPlan.init_eventMain = function($tab){
        // 绑定日期
        Tools.setDatePicker($tab.find('.datepicker'), true);
        //搜索按钮事件绑定
        $tab.find('.T-btn-tripPlan-search').on('click', function() {
            tripPlan.listTripPlanGroup(0, $tab);
        })

        //导出游客名单
        $tab.find('.T-tripPlan-export').on('click', function(event) {
            event.preventDefault();
            tripPlan.listTripPlanGroup(-1, $tab);
        });

        //获取责任计调
        tripPlan.getDutyOPUserList($tab.find('[name=dutyOPUserName]'));
        
        $tab.find("[name='tripPlanStatus']").on('change', function(){
            if($(this).val() != "1"){
                $(this).next('[name="status"]').addClass('hide');
            }else{
                $(this).next('[name="status"]').removeClass('hide');
            }
        });
        $tab.find('.T-btn-tripPlan-add').off('click')
        .on('click', function(event) {
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

                tripPlan.confirmTripPlan(id, statusValue, billStatus, $that);
            } else if($that.hasClass('T-update')){
                // 编辑
                tripPlan.updateGroupTripPlan(id);
            } else if($that.hasClass('T-export')){
                // 导出
                tripPlan.exportTripPlan(id);                
            } else if($that.hasClass('T-cancel')){
                // 取消
                tripPlan.cancelTripPlan(id, $that);
            }
        });
        $tab.off(REFRESH_TAB_EVENT).on(REFRESH_TAB_EVENT, function() {
            $tab.find('.tab-pane.active').find('.T-btn-tripPlan-search').trigger('click');
        });

        $tab.find('[class*="T-tripPlan-"]').on('click', 'td', function(event){
            event.preventDefault();
            var $that = $(this).find('.ace-icon'), $parent = $that.closest('tr'),
                billStatus = $parent.data("bill-status");
            if(!$that.hasClass('fa-minus') && $that.length > 0){
                seajs.use(ASSETS_ROOT + modalScripts.arrange_all,function(module){
                    module.updatePlanInfo($that.closest('tr').data("id"),billStatus, $that.closest('td').data("target"), $tab.prop('id'));
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

        if (page == -1) {
            exportXLS( APP_ROOT + 'back/export.do?method=exportTripPlanBuyInsuranceMember&token='+ $.cookie("token") + '&tripPlanType=1&' + $.param(idData)+'&'+ $.param(formData));
            return;
        }

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
                var groupHtml = filterUnAuth(listTemplate(data));
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
                if ($(this).attr("name") === "businessGroupName") {
                    $(this).closest('.form-inline').find('[name=dutyOPUserName]').val('').data('id', '');
                }
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

    /**
     * getDutyOPUserList 获取责任计调
     * @param  {[type]} $chooseObj [description]
     * @return {[type]}            [description]
     */
    tripPlan.getDutyOPUserList = function($chooseObj) {
        $chooseObj.autocomplete({
            minLength: 0,
            change :function(event, ui){
                if(ui.item == null){
                    $(this).data('id', '');
                }
            },
            select :function(event, ui){
                $(this).data('id', ui.item.id);
            }
        }).off('click').on('click', function() {
            $.ajax({
                url: KingServices.build_url("tripController", "selectDutyOPUser"),
                type: "POST",
                data: "businessGroupId="+$chooseObj.closest('.form-inline').find('[name=businessGroupName]').data('id'),
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var jsonList = data.outOPUsers;
                        if (jsonList != null && jsonList.length > 0) {
                            for (var i = 0; i < jsonList.length; i++) {
                                jsonList[i].value = jsonList[i].realName;
                            }
                            $chooseObj.autocomplete('option','source', jsonList);
                            $chooseObj.autocomplete('search', '');
                        } else {
                            layer.tips('没有内容', $chooseObj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                    }
                }
            });
        })
    };

    //新增计划
    tripPlan.addTripPlan = function(planType, args, groupIds){
        // 团队
        var tabKey = menuKey + "_group_add";

        if (Tools.addTab(tabKey, "新增团队计划", addTripPlanTemplate())) {
            tripPlan.initEdit($("#tab-" + tabKey + "-content"));
        }
    };

    tripPlan.initEdit = function($tab){
        var validate = tripPlan.bindCommonEvent($tab, 1);
        //搜索线路
        $tab.find(".T-search-line").off('click').on('click', function(){
            tripPlan.initLineProductSearch($tab, 0);
        });
        $tab.find('.T-tripNumberChange').on('change', function() {
            var $this = $(this),
                tripNumber = $this.val(),
                tripPlanId = $tab.find('.T-tab').data('id');
            $.ajax({
                url: KingServices.build_url('tripController','checkTripNumber'),
                type: 'POST',
                showLoading: false,
                data: {
                    tripNumber: tripNumber,
                    tripPlanId: tripPlanId},
            })
            .done(function(data) {
                if (data.success == 0) {
                    $this.val('');
                    layer.tips('该团号已存在', $this, {
                        tips: [1, '#3595CC'],
                        time: 2000
                    });
                }
            })
        })
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
            function: function(){
                KingServices.addPartnerAgency(function(data){
                    $tab.find('[name="travelAgencyName"]').val(data.name);
                    $tab.find('[name="fromPartnerAgencyId"]').val(data.id);
                    $tab.find('[name="contactRealname"]').val('');
                    $tab.find('[name="fromPartnerAgencyContactId"]').val('');
                })
            },
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
            tripPlan.MenberNumber($tab, 1);
            validate = rule.update(validate);
        });
        //批量添加游客小组
        $tab.find('.T-add-tourists-batch').on('click', function(event){
            event.preventDefault();
            F.batchAddTourists($tab.find('.T-tourists-list'), function(){
                tripPlan.MenberNumber($tab, 1);
            });
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
                                    tripPlan.MenberNumber($tab, 1);
                                });
                            }
                        }
                    });
                });
            }else{
                $tr.remove();
                tripPlan.MenberNumber($tab, 1);
            }
        });
        //删除账单
        $tab.find('.T-fee-list')
        .on('click', '.T-delete', function(event){
            event.preventDefault();
            var $tr = $(this).closest('tr'), id = $tr.data("id");
            
            if(!!id){
                showConfirmDialog($('#confirm-dialog-message'), '是否删除该条费用项？', function() {
                    $tr.remove();
                    $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
                    var $fee = $tab.find('.T-fee-list');
                    deleteIds = $fee.data('deleteIds');
                    if(deleteIds){
                        deleteIds = JSON.parse(deleteIds);
                        deleteIds.push({id : id});
                    }else{
                        deleteIds = [{id : id}]
                    }
                    $fee.data('deleteIds', JSON.stringify(deleteIds));
                });
            }else{
                $tr.remove();
                $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
            }
        });
        //绑定账单新增费用项
        $tab.find(".T-add-fee").on('click', function(event){
            event.preventDefault();
            var data = {
                touristGroupFeeList : [{}]
            };
            data.isTrans = false;
            $tab.find('.T-fee-list').append(T.feeList(data));
            validate = rule.update(validate);
        });
        //绑定账单表内事件
        $tab.find('.T-fee-list').on('blur', '.T-calculate', function(event){
            event.preventDefault();
            var $that = $(this), $tr = $that.closest('tr');
            if($that.hasClass('T-count') || $that.hasClass('T-price')){
                var count = $tr.find('[name="count"]').val() || 0,
                    price = $tr.find('[name="price"]').val() || 0;
                    $tr.find('[name="money"]').val(Tools.toFixed(count * price));
                    $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
            }
            var money = 0;
            $tab.find('.T-fee-list tr').each(function(index){
                if ($(this).find('[name=type]').val() == 3) {
                money += $(this).find('[name="money"]').val() * 1;
                }
            });
            $tab.find('[name=transitNeedPayMoney]').val(money)
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
                data.isGuest = 1;
                data.touristGroup = JSON.parse(data.touristGroup || false);
                data.touristGroupFeeList = JSON.parse(data.touristGroupFeeList || false);
                data.touristGroupMemberList = JSON.parse(data.touristGroupMemberList || false);
                data.tripPlanDayList = JSON.parse(data.tripPlanDayList );
                data.tripPlanRequireList = JSON.parse(data.tripPlanRequireList);
                data.hasData = tripPlan.hasTripPlan(data.tripPlanRequireList);
                tripPlan.processRepastDetail(data.tripPlanDayList);
                console.log(data.touristGroup);
                if(Tools.addTab(tabKey, "编辑团队计划", T.updateGroupTripPlan(data))){
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
                    $(this).val("").nextAll('[name="fromPartnerAgencyId"]').val("");
                }
            },
            select: function(event, ui) {
                $(this).trigger('change').nextAll('[name="fromPartnerAgencyId"]').val(ui.item.id)
                .closest('.T-tab').find('[name="contactRealname"]').val("")
                .nextAll('[name="fromPartnerAgencyContactId"]').val("");
                var $parent = $(this).closest('.T-basic-info');
                 $.ajax({
                    url: KingServices.build_url("partnerAgency", "getContactListByPartnerAgencyId"),
                    data: {
                        partnerAgencyId: ui.item.id
                    },
                    showLoading: false,
                    type: 'POST',
                    success: function(data) {
                        var result = showDialog(data);
                        if (result) {
                            var contactList = JSON.parse(data.partnerAgencyContactList);
                            if (contactList != null && contactList.length) {
                                for (var i = 0; i < contactList.length; i++) {
                                    contactList[i].value = contactList[i].contactRealname + " - [" + contactList[i].contactMobileNumber + "]";
                                }
                            }
                            $parent.find('[name=contactRealname]').val(contactList[0].value)
                            $parent.find('[name=fromPartnerAgencyContactId]').val(contactList[0].id)
                        }
                    }
                });
            }
        })
        $that.off('click').on('click', function() {
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
                    $(this).val("").nextAll('[name="fromPartnerAgencyContactId"]').val("");
                }
            },
            select: function(event, ui) {
                $(this).trigger('change').nextAll('[name="fromPartnerAgencyContactId"]').val(ui.item.id);
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
                layer.tips('请选择客户', this, {
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
        $tab.find('[name="startTime"]').off('changeDate').on('changeDate', function(){
            //F.arrangeDate($tab);
            if (!$(this).data('clicked') && $(this).data('add')) {
                F.arrangeDate($tab);
            }
            F.calcWhicDay($tab);
            if (!!$tab.find('[name=startTime]').val()/* && !$tab.find('[name=endTime]').val()*/) {
                $tab.find('[name=endTime]').val(Tools.addDay($tab.find('[name="startTime"]').val(), $tab.find('[name="lineProductName"]').data('entity-days')-1 || 0));
            }
            $(this).data("clicked",true);
        }).trigger('change'); 
        F.arrangeDate($tab);
        $tab.off('changeDate.whichDayDate').on('changeDate.whichDayDate', '[name=whichDayDate]', function() {
            F.calcWhicDay($tab);
        }).trigger('change');

        var validate = rule.checkPlan($tab); 
        tripPlan.init_edit_event($tab, validate, type);
        $tab.find('.T-tourists-list').on('change', '[name="idCardType"]', function(event) {
            event.preventDefault();
            rule.update(validate);
        });
        $tab.find('.T-executeTime').on('click', 'input[name="executeTimeType"]', function(event) {
            // 发送短信效果
            var $that = $(this);
            rule.update(validate);
            $that.closest('div').find('input[name="executeTime"]').toggleClass('hidden', !$that.hasClass('T-timed'));
        });


        //行程安排
        $tab.find('.T-add-days').on('click', function(event){
            event.preventDefault();
            var $days = $tab.find('.T-days'),
                lenWhichDay = $days.data('length-whichDay');
            $days.append(travelArrange({lineProductDayList:[{whichDay: ''}]}));
            
            Tools.setDatePicker($tab.find('.datepicker'), true);
            validate = rule.update(validate);
        });

        //绑定操作计划新增事件
        $tab.find('.T-action-plan .T-add-all').on('change', 'input[type="checkbox"]', function(event){
            var $this = $(this), $parent = $this.closest('div.T-action-plan'),checkBoxs = $parent.find('input[type="checkbox"]');
            if ($this.is(':checked')) {
                checkBoxs.each(function(index) {
                    if (!checkBoxs.eq(index).is(':checked')) {
                        checkBoxs.eq(index).trigger('click');
                    }
                });
            }else{
                var $list = $tab.find('.T-action-plan-list .hct-plan-ask'), isAlert = 0;
                $list.each(function(index) {
                    var $that = $list.eq(index), id = $that.data('id');
                    if (!!id) {
                        isAlert = 1;
                    }
                });
                if (isAlert == 1) {
                    var tripPlanId = $tab.find('.T-tab').data('id');
                    showConfirmDialog($('#confirm-dialog-message'), '您将删除所有计划，是否继续？', function() {
                        $.ajax({
                            url: KingServices.build_url('tripPlan', 'deleteTripPlanRequireByBatch'),
                            type: 'post',
                            data: 'tripPlanId=' +  tripPlanId,
                        })
                        .done(function(data) {
                            if (showDialog(data)) {
                                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                                    $tab.find('.T-action-plan-list .hct-plan-ask').each(function(index) {
                                        var $that = $(this), id = $that.data('id');
                                        if (!!id) {
                                            $that.remove();
                                        }
                                    });
                                    checkBoxs.each(function(index) {
                                        if (checkBoxs.eq(index).is(':checked')) {
                                            checkBoxs.eq(index).trigger('click');
                                        }
                                    });
                                });
                            }
                        });
                    },function(){
                    });
                }else {
                    checkBoxs.each(function(index) {
                        if (checkBoxs.eq(index).is(':checked')) {
                            checkBoxs.eq(index).trigger('click');
                        }
                    });
                }
            }
        });
        $tab.find('.T-action-plan .T-add-action').on('change', 'input[type="checkbox"]', function(event){
            event.preventDefault();
            var $that = $(this), 
                $label = $that.closest('label.T-add-action'),
                type = $label.data('type');
                
            if($that.is(":checked")){
                tripPlan.addActionPlan($tab, $label.text(), type);
            }else{
                removeRequire();
            }
            function removeRequire() {
                var $require = $tab.find('.T-action-plan-list .hct-plan-ask');
                if($require.length > 0){
                    $require.each(function(index, el) {
                        var $obj = $(this),
                            thisType = $obj.data('type'),
                            title = $obj.find('.hct-plan-ask-title').text(),
                            id = $obj.data('id');
                        if(type === thisType){
                            if(!!id){
                                showConfirmDialog($('#confirm-dialog-message'), '您将删除'+ title +'，是否继续？', function() {
                                    $.ajax({
                                        url: KingServices.build_url('tripPlan', 'deleteTripPlanRequire'),
                                        type: 'post',
                                        data: {requireId: id},
                                    })
                                    .done(function(data) {
                                        if (showDialog(data)) {
                                            showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                                                $obj.remove();
                                            });
                                        }
                                    });
                                },function(){
                                    $label.html('<input type="checkbox" class="ace" checked="checked"><span class="lbl">'+$label.text()+'</span>')
                                });
                            }else{
                                $obj.remove();
                            }
                        }
                    });
                }
            }
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

                function removeDay() {
                    $that.closest('tr').remove();
                    var whichDay = $that.closest('tr').find('[name="dateDays"]').data('which-day'),
                        lenWhichDay = $tab.find('.T-days').data('length-whichDay');
                    // if(whichDay == lenWhichDay){
                    //     F.arrangeDate($tab);
                    // }
                }
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

            }else if($that.hasClass('T-scenicItem')){
                KingServices.chooseScenic($that);
            }
        });
        $tab.data('isEdited', false);
        // 取消
        $tab.find('.T-cancelPlan').on('click', function(event) {
            event.preventDefault();
            Tools.closeTab(Tools.getTabKey($tab.prop('id')));
        });
        return validate;
    };

    tripPlan.savePlanData = function($tab, validate, tabArgs){
        if(!validate.form())return;
        if (!F.judgmentTimeInterval($tab.find('[name=startTime]').val(), $tab.find('[name=endTime]').val(), $tab.find('[name=whichDayDate]'))) {
            return false;
        }
        
        var arge = $tab.find('.T-basic-info').serializeJson();
        var tripPlanId = $tab.find('.T-tab').data("id");

        if(tripPlanId){
            arge.tripPlanId = tripPlanId;
        }
        //团行程json包
        arge.tripPlanDayJson = tripPlan.getTripPlanDays($tab);
        
        //游客成员json包
        arge.touristGroupMemberJson = [];
        arge.tgRemark = $tab.find('textarea[name=touristGroupRemark]').val();
        if($tab.find('.T-tourists-list tr').length === 0){
            showMessageDialog($( "#confirm-dialog-message" ), "至少添加一个成员。");
            return ;
        }
        var isDateRepear = 0,
            dateArray = [],
            $dateTr = $tab.find('.T-days tr');
        $dateTr.each(function(index) {
            var $this = $(this);
            dateArray.push($this.find('[name=whichDayDate]').val())
        });
        var dateArray2 = dateArray.sort();
        for (var i = dateArray.length - 1; i >= 0; i--) {
            if (dateArray[i] == dateArray2[i+1]) {
                showMessageDialog($( "#confirm-dialog-message" ), "行程安排中日期重复");
                return;
            }
        }
        var isSetContact = 0, isMobileNumber = 1;
        $tab.find('.T-tourists-list tr').each(function(index) {
            var $that = $(this);
            
            if(!$that.find('[name="mobileNumber"]').val() && !$that.find('[name="idCardNumber"]').val()){
                isMobileNumber = 0;
            }
            if($that.find('[name="isContactUser"]').is(":checked")){
                isSetContact = 1;
            }
            arge.touristGroupMemberJson.push({
                id : $that.data("id") || "",
                idCardNumber : $that.find('[name="idCardNumber"]').val(),
                idCardType : $that.find('[name="idCardType"]').val(),
                isContactUser : $that.find('[name="isContactUser"]').is(":checked") ? 1 : 0,
                mobileNumber : $that.find('[name="mobileNumber"]').val(),
                name : $that.find('[name="name"]').val(),
            });
        });
        if(!isMobileNumber){
            showMessageDialog($( "#confirm-dialog-message" ), "手机号码和身份证号码必须选填一个！");
            return ;
        }
        if(!isSetContact){
            showMessageDialog($( "#confirm-dialog-message" ), "至少选择一个联系人。");
            return ;

        };
        //团计划要求json包
        arge.tripPlanRequireJson = tripPlan.getTripPlanRequest($tab);
        
        //费用项json包
        arge.touristGroupFeeJson = [];
        $tab.find('.T-fee-list tr').each(function(index) {
            var $that = $(this);
            arge.touristGroupFeeJson.push({
                count : $that.find('[name="count"]').val(),
                type: $that.find('[name="type"]').val(),
                id : $that.data("id") || "",
                price : $that.find('[name="price"]').val(),
                remark : $that.find('[name="feeRemark"]').val()
            });
        });
        if ($tab.find('.T-fee-list tr').length == 0) {
            showMessageDialog($( "#confirm-dialog-message" ), "至少添加一条费用项。");
            return ;
        }
        //购物&自费商家ID集
        arge.shopIds = tripPlan.jsonToString($tab.find('[name="shopNames"]').data("propover"));
        arge.selfPayItemIds = tripPlan.jsonToString($tab.find('[name="selfPayItemNames"]').data("propover"));
        //应收&预收款&计划现收
        arge.needPayAllMoney = $tab.find('[name="needPayAllMoney"]').val()-0 || 0;
        arge.preIncomeMoney = $tab.find('[name="preIncomeMoney"]').val()-0 || 0;
        arge.currentNeedPayMoney = $tab.find('[name="currentNeedPayMoney"]').val()-0 || 0;
        arge.outTransferIncome = 0;//$tab.find('[name="transitNeedPayMoney"]').val();
        //
        arge.touristGroupId = $tab.find('[name="partnerAgencyName"]').data("id") || "";
        arge.isContainSelfPay = $tab.find('[name="isContainSelfPay"]').is(":checked") ? 1 : 0;
        arge.buyInsurance = $tab.find('[name="buyInsurance"]').is(":checked") ? 1 : 0;
        arge.executeTimeType = 0; //$tab.find('.T-timed').is(":checked") ? 1 : 0;
        if(arge.executeTimeType === 1){
            arge.executeTime = $tab.find('[name="executeTime"]').val();
        }
        //转数据
        arge.tripPlanDayJson = JSON.stringify(arge.tripPlanDayJson);
        arge.touristGroupMemberJson = JSON.stringify(arge.touristGroupMemberJson);
        arge.tripPlanRequireJson = JSON.stringify(arge.tripPlanRequireJson);
        arge.touristGroupFeeJson = JSON.stringify(arge.touristGroupFeeJson);
        arge.touristGroupFeeDelJson = $tab.find('.T-fee-list').data('deleteIds');

        if (arge.needPayAllMoney < ( arge.preIncomeMoney +  arge.currentNeedPayMoney)) {
            showConfirmMsg($( "#confirm-dialog-message" ), "预收款和计划现收之和大于应收金额，是否继续?",function(){
                saveAjax();
            },function(){
            },'否','是')
        }else{
            saveAjax();
        }

        function saveAjax() {
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
                    scenicItemIds : tripPlan.jsonToString($that.find('[name="scenicItemNames"]').data("propover")),
                    scenicItemNames : $that.find('[name="scenicItemNames"]').val(),
                    whichDay : $that.find('[name="dateDays"]').data('which-day')
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
    tripPlan.jsonToString = function(jTs) {
        if (typeof jTs != 'string') {
            jTs = JSON.stringify(jTs);
        }
        return jTs;
    }

    tripPlan.initTeamSearch = function($tab){
        var html = '<div class="col-xs-12 form-inline" style="padding-top:10px;">'+
                        '<label class="pull-left control-label">收客单号</label>'+
                        '<input type="text" class="form-control pull-left mar-l-10 T-orderNumber" placeholder="请输入收客单号" name="orderNumber">'+
                        '<button class=" btn-sm T-btn-search search-btn "> <i class="ace-icon fa fa-search"></i> 搜索 </button>'+
                    '</div><div class="col-xs-12 T-team-search globalAdd" style="padding-top: 10px;"></div>';
        var searchTravelLinelayer = layer.open({
            type: 1,
            title: "收客单号",
            skin: 'layui-layer-rim', //加上边框
            area: '85%', //宽高
            zIndex:1029,
            content: html,
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
        var $layer = $("#layui-layer"+searchTravelLinelayer);
        $layer.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            var orderNumber = $layer.find('[name="orderNumber"]').val();
            tripPlan.getTouristGroupList(0, orderNumber);
        });
    };
    tripPlan.getTouristGroupList = function(page, orderNumber){
        $.ajax({
            url : KingServices.build_url('touristGroup', 'getTouristGroupListByT'),
            type : 'POST',
            data : {pageNo : page || 0, orderNumber : orderNumber || ""}
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
    tripPlan.getTouristsList = function($tab, id, feeList){
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
                data.isGuest = 1;
                data.isTrans = true;
                $tab.find('.T-tourists-list').html(T.touristsList(data));
                $tab.find('.T-fee-list').html(T.feeList(data));
                $tab.find('[name="partnerAgencyName"]').val(groupData.orderNumber).data("id", groupData.id);
                if(!!groupData.quote){
                    $tab.find('[name="quoteOrderName"]').val(groupData.quote.quoteNumber);
                    $tab.find('[name="quoteId"]').val(groupData.quote.id);
                    if (!!feeList == false || feeList.length == 0) { 
                        tripPlan.initNormalLineProduct($tab, groupData.lineProduct.id, groupData.quote.id, 1, 1);
                    }
                }else{
                    $tab.find('[name="quoteOrderName"]').val("");
                    $tab.find('[name="quoteId"]').val("");
                }
                if(!!groupData.lineProduct){
                    $tab.find('[name="lineProductName"]').val(groupData.lineProduct.name);
                    $tab.find('[name="lineProductId"]').val(groupData.lineProduct.id);
                    if(!groupData.quote){
                        tripPlan.initNormalLineProduct($tab, groupData.lineProduct.id);
                    }
                }else{
                    $tab.find('[name="lineProductName"]').val("");
                    $tab.find('[name="lineProductId"]').val("");
                }
                $tab.find('[name="accompanyGuideName"]').val(groupData.accompanyGuideName);
                $tab.find('[name="accompanyGuideMobile"]').val(groupData.accompanyGuideMobile);
                $tab.find('[name="adultCount"]').val(groupData.adultCount).attr('readonly', 'readonly');
                $tab.find('[name="childCount"]').val(groupData.childCount).attr('readonly', 'readonly');
                $tab.find('[name="startTime"]').val(groupData.startTime ? groupData.startTime.replace(/(\d+)(\s\d{2}:\d{2}:\d{2})/, '$1') : "");
                $tab.find('[name="endTime"]').val(groupData.endTime ? groupData.endTime.replace(/(\d+)(\s\d{2}:\d{2}:\d{2})/, '$1') : "");
                $tab.find('[name="travelAgencyName"]').val(groupData.partnerAgency ? groupData.partnerAgency.travelAgencyName : "");
                $tab.find('[name="fromPartnerAgencyId"]').val(groupData.partnerAgency ? groupData.partnerAgency.id : "");
                $tab.find('[name="contactRealname"]').val(groupData.partnerAgencyContact ? groupData.partnerAgencyContact.contactRealname : "")
                $tab.find('[name="fromPartnerAgencyContactId"]').val(groupData.partnerAgencyContact ? groupData.partnerAgencyContact.id : "");
                $tab.find('[name="getType"]').val(groupData.getType);
                $tab.find('[name="outOPUserName"]').val(groupData.outOPUser ? groupData.outOPUser.realName : $tab.find('[name="outOPUserName"]').val());
                /*$tab.find('[name="dutyOPUserId"]').val(groupData.outOPUser ? groupData.outOPUser.id : $tab.find('[name="dutyOPUserId"]').val());*/
                $tab.find('[name="otaOrderNumber"]').val(groupData.otaOrderNumber);
                $tab.find('[name="outOPUserId"]').val(groupData.outOPUserId);
                $tab.find('[name="memberType"]').val(groupData.memberType);
                $tab.find('[name="welcomeBoard"]').val(groupData.welcomeBoard);
                $tab.find('[name=sendPosition]').val(groupData.sendPosition);
                $tab.find('[name="preIncomeMoney"]').val(groupData.preIncomeMoney).attr('readonly', 'readonly');
                $tab.find('[name="currentNeedPayMoney"]').val(groupData.currentNeedPayMoney).attr('readonly', 'readonly');
                if(!!groupData.buyInsurance){
                    $tab.find('[name="buyInsurance"]').attr('checked', 'checked');
                }
                $tab.find('textarea[name="touristGroupRemark"]').val(groupData.remark)
                $tab.find('[name="needPayAllMoney"]').val(F.calcRece($tab));
                $tab.find('[name="travelAgencyName"]').attr('disabled','disabled').closest('div').find('.T-addPartner').hide();

                $tab.find('.T-add-fee').hide();
                var listTr = $tab.find('.T-fee-list tr');
                listTr.each(function(i) {
                    listTr.find('.T-delete').hide();
                })
            }
        });
    };
    tripPlan.daysUpdateDetail = function($that){
        var html = T.updateDetail({detail : $that.data('detail')});
        var daysLayer = layer.open({
            type: 1,
            title: '编辑行程详情',
            skin: 'layui-layer-rim',
            area: '900px',
            content: html,
            scrollbar: false,
        });
        init_editor('tripPlanUpdateDetail', {zIndex:99999999});
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
        var list = '<div class="col-xs-12 hct-plan-ask" data-type="'+type+'"><div class="pull-left hct-plan-ask-title">'+$.trim(title)+'计划要求</div><div class="pull-left hct-plan-ask-input"><input type="text" class="col-xs-12" name="requireContent"></div></div>';
        $tab.find('.T-action-plan-list').append(list);
    }
    tripPlan.viewTripPlan = function(id, planType){
        planType = 1;
        var html = T.viewTripPlanGroup, viewMenuKey = menuKey+"_group_view";
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
                    if (arrangeData.hotelArrangeList) {arrangeData.hotelArrangeList = JSON.parse(arrangeData.hotelArrangeList);}
                    if (arrangeData.otherArrangeList) {arrangeData.otherArrangeList = JSON.parse(arrangeData.otherArrangeList);}
                    if (arrangeData.restaurantArrangeList) {arrangeData.restaurantArrangeList = JSON.parse(arrangeData.restaurantArrangeList);}
                    if (arrangeData.scenicArrangeList) {arrangeData.scenicArrangeList = JSON.parse(arrangeData.scenicArrangeList);}
                    if (arrangeData.selfPayArrangeList) {arrangeData.selfPayArrangeList = JSON.parse(arrangeData.selfPayArrangeList);}
                    if (arrangeData.shopArrangeList) {arrangeData.shopArrangeList = JSON.parse(arrangeData.shopArrangeList);}
                    if (arrangeData.ticketArrangeList) {arrangeData.ticketArrangeList = JSON.parse(arrangeData.ticketArrangeList);}
                }
                data.busCompanyArrange = JSON.parse(data.busCompanyArrange);
                data.guideArrange = JSON.parse(data.guideArrange);
                data.insuranceArrange = JSON.parse(data.insuranceArrange);
                if (data.guideArrange.length) {
                    for (var i = data.guideArrange.length - 1; i >= 0; i--) {
                        data.guideArrange[i].taskJson = JSON.parse(data.guideArrange[i].taskJson);
                    }
                }
                if (planType == 1) {
                    data.touristGroup = JSON.parse(data.touristGroup);
                    data.touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
                    data.touristGroupMembers = JSON.parse(data.touristGroupMembers);
                } else {
                    data.touristGroupList = JSON.parse(data.touristGroupList);
                    
                }
                data.tripPlan = JSON.parse(data.tripPlan);
                if(Tools.addTab(viewMenuKey, "查看团队计划", html(data))){
                    $("#tab-"+viewMenuKey+"-content").find('.T-btn-close').on('click', function(event){
                        event.preventDefault();
                        Tools.closeTab(viewMenuKey);
                    });
                }
            }
        });
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
                        .nextAll('input[name="outOPUserId"]').val('')
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
                        if($target.attr("name") === "outOPUserName"){
                            $target.nextAll('input[name="outOPUserId"]').val(data.userId);
                        }
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
                    $obj.find('input[name=contactRealname]').val(contact.contactRealname + "-[" + contact.contactMobileNumber + "]").trigger('change');
                    $obj.find('input[name=fromPartnerAgencyContactId]').val(contact.id);
                }
            }
        });
    };

    tripPlan.confirmTripPlan = function(id,statusValue,billStatus, $that){
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
                                $that.closest('.tab-pane').find('.T-btn-tripPlan-search').trigger('click');
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
                                    $that.closest('.tab-pane').find('.T-btn-tripPlan-search').trigger('click');
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
                tripPlan.initEdit($("#tab-"+tab_id+"-content"));
            })
            // 监听保存，并切换tab
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                tripPlan.savePlanData($tab, validate, [tab_id, title, html]);
            })
            // 保存后关闭
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                $tab.data('isEdited', false);
                tripPlan.savePlanData($tab, validate);
            });
        }
    };

    /**
     * 初始化选择线路的对话框
     */
    tripPlan.initLineProductSearch = function($tab, type, isSingle) {
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
            tripPlan.getLineProductList($dialog, type, '',0 ,$tab, '');
        }else{
            tripPlan.getLineProductList($dialog, type, isSingle, '');
        }
        // 选择线路产品
        $dialog.find('.T-btn-submit').off('click').on('click', function(event) {
            event.preventDefault();
            var $tr = $dialog.find('input[name="choice-TravelLine"]:checked').closest('tr'),
                oldLinetId = $tab.find('input[name="lineProductId"]').val(),
                quoteId = "";

            if (!$tr.length) {
                showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品");
                return;
            }
            var lineId = $tr.data('id');

            if(type == 1){
                var feeJson = {
                    adultCount: $tr.data('adultcount'),
                    childCount: $tr.data('childcount'),
                    adultPrice: $tr.data('adultprice'),
                    childPrice: $tr.data('childprice')
                }

                var feeList = {};
                feeList.touristGroupFeeList = [{
                    type: 1,
                    count: feeJson.adultCount,
                    price: feeJson.adultPrice
                },{
                    type:2,
                    count: feeJson.childCount,
                    price: feeJson.childPrice
                }];

                quoteId = $tr.data('quote-id');
                $tab.find(".T-days").html("");
                $tab.find(".T-tourists-list").html("");
                $tab.find(".T-fee-list").html("");
                $tab.find('[name=travelAgencyName]').val($tr.find('[name=travelAgencyName]').val());
                $tab.find('[name=fromPartnerAgencyId]').val($tr.find('[name=travelAgencyId]').val());
                $tab.find('[name=contactRealname]').val($tr.find('[name=contactRealname]').val());
                $tab.find('[name=fromPartnerAgencyContactId]').val($tr.find('[name=contactId]').val());
                $tab.find('input[name="quoteId"]').val(quoteId);
                $tab.find('input[name="quoteOrderName"]').val($tr.find('[name="quoteNumber"]').text()).trigger('focusout');
                $tab.find('input[name="partnerAgencyName"]').val('').data('id', '');
                $tab.find('input[name="needPayAllMoney"]').val('');
                $tab.find('input[name="preIncomeMoney"]').val('').removeAttr('readonly');
                $tab.find('input[name="currentNeedPayMoney"]').val('').removeAttr('readonly');
                lineId = $tr.data('line-id');
                $tab.find('[name="travelAgencyName"]').attr('disabled','disabled').closest('div').find('.T-addPartner').hide();
            }else if(oldLinetId != lineId){
                $tab.find('input[name="quoteId"]').val("");
                $tab.find('input[name="quoteOrderName"]').val("");
                $tab.find('input[name="partnerAgencyName"]').val('').data('id', '');
                $tab.find('.T-tourists-list').html('');
                $tab.find('.T-fee-list').html('');
                $tab.find('input[name="needPayAllMoney"]').val('');
                $tab.find('input[name="preIncomeMoney"]').val('').removeAttr('readonly');
                $tab.find('input[name="currentNeedPayMoney"]').val('').removeAttr('readonly');
            }
            $tab.find('input[name="lineProductId"]').val(lineId);
            $tab.find('input[name="lineProductName"]').val($tr.find('[name="lineName"]').text()).trigger('focusout');
            tripPlan.initNormalLineProduct($tab, lineId, quoteId, type, '', feeList);
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
    tripPlan.getLineProductList = function($dialog, type, isSingle, page, $tab , name) {
        page = page || 0;
        var url = KingServices.build_url('lineProduct', 'findAll'),
            $tbody = $dialog.find('.T-normal-list'),
            args = {
                pageNo: page,
                customerType : 1,
                name : name 
            };
        if(isSingle){
            delete args.customerType;
        }
        if (type) {
            url = KingServices.build_url('lineProduct', 'listQuoteLinePorduct');
            $tbody = $dialog.find('.T-quote-list');
            delete args.customerType;
            args.partnerAgencyId = $tab.find('[name=fromPartnerAgencyId]').val();
            //args.fromPartnerAgencyContactId = $tab.find('[name=fromPartnerAgencyContactId]').val();
        }
        $.ajax({
            url: url,
            type: 'post',
            showLoading: false,
            data: args,
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

                $dialog.find('.T-btn-search').on('click', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    var $that=$(this),$searchLine=$that.closest('.form-inline');
                    var name=$searchLine.find('.T-name').val();
                    tripPlan.getLineProductList($dialog, type, isSingle, page, $tab, name);

                });

                // 绑定翻页组件
                laypage({
                    cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            tripPlan.getLineProductList($dialog, type, isSingle, obj.curr -1, $tab, name);
                        }
                    }
                }); 
 
                // 让对话框居中
                $(window).trigger('resize');
            }
        });         
    };

    tripPlan.initNormalLineProduct = function($tab, pId, quoteId, type, isGroup, feeList) {
        if (!!pId) {
            var args = {
                lineProductId : pId
            }
            if(type == 1){
                args.quoteId = quoteId;
            }
            $.ajax({
                url:KingServices.build_url("tripPlan","getLineProductDayList"),
                data:args,
                type:"POST",
                success: function(data) {
                    data.lineProductDayList = JSON.parse(data.lineProductDayList);
                    var result =showDialog(data);
                    if(result){
                        if(!!data.touristGroupId && !isGroup){
                            tripPlan.getTouristsList($tab, data.touristGroupId, feeList);

                            $tab.find('.T-add-fee').hide();
                            var listTr = $tab.find('.T-fee-list tr');
                            listTr.each(function(i) {
                                listTr.find('.T-delete').hide();
                            })
                        }else if(type == 1){
                            $tab.find('[name="preIncomeMoney"]').removeAttr('readonly');
                            $tab.find('[name="currentNeedPayMoney"]').removeAttr('readonly');
                            $tab.find('[name="adultCount"]').removeAttr('readonly');
                            $tab.find('[name="childCount"]').removeAttr('readonly');
                            /*if(!!result.isContainSelfPay){
                                $tab.find('[name="isContainSelfPay"]').attr('checked', 'checked');
                            }*/
                            if (!!feeList) {
                            $tab.find('.T-fee-list').html(T.feeList(feeList));
                            $tab.find('.T-calculate').trigger('blur');
                            }
                        }
                        
                        if(!$.isEmptyObject(data.quote)){
                            var quote = data.quote, dayList = data.lineProductDayList;
                            $tab.find('[name="shopNames"]').val(quote.shopNames).data('propover', quote.shopIds);
                            $tab.find('[name="selfPayItemNames"]').val(quote.selfPayItemNames).data('propover', quote.selfPayItemIds);
                            $tab.find('[name="isContainSelfPay"]').attr('checked', quote.isContainSelfPay == 1 ? true : false);
                            $tab.find('[name="adultCount"]').val(quote.adultCount).attr('readonly', 'readonly');
                            $tab.find('[name="childCount"]').val(quote.childCount).attr('readonly', 'readonly');
                            $tab.find('[name="startTime"]').val(quote.startTime);
                            $tab.find('[name="endTime"]').val(quote.endTime);
                            $tab.find('[name="lineProductName"]').data('entity-days', dayList.length);
                        }else if(!$.isEmptyObject(data.lineProduct)){
                            var line = data.lineProduct,
                                dayList = data.lineProductDayList;
                            $tab.find('[name="shopNames"]').val(line.shopNames).data('propover', line.shopIds);
                            $tab.find('[name="selfPayItemNames"]').val(line.selfPayItemNames).data('propover', line.selfPayItemIds);
                            $tab.find('[name="lineProductName"]').data('entity-days', dayList.length);
                        }
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
                        $tab.find('input[name="lineProductName"]').trigger('change');
                        //KingServices.viewOptionalScenic($tab.find('.T-days .T-scenicItem'));
                        F.arrangeDate($tab, 1);
                        F.calcWhicDay($tab)
                        Tools.setDatePicker($tab.find('.datepicker'), true);
                        $tab.find('.T-action-plan .T-add-action [type=checkbox]').each(function(index) {
                            if ($(this).is(':checked')) {
                                $(this).trigger('click');
                            }
                        });
                        if(!!data.requireList && data.requireList.length > 0) {
                            for (var i = 0; i < data.requireList.length; i++) {
                                var $this = data.requireList[i], $label = $tab.find('.T-action-plan .T-add-action');
                                $label.each(function(index) {
                                    var type = $label.eq(index).data('type');
                                    if (type == $this) {
                                        if (!$label.eq(index).find('input[type=checkbox]').is(':checked')) {
                                            $label.eq(index).find('input[type=checkbox]').trigger('click');
                                        }
                                    }
                                });
                            }
                        }
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

    //导出发团计划
    tripPlan.exportTripPlan = function(id){
        checkLogin(function(){
            var url = KingServices.build_url("export","exportTripPlan") + "&tripPlanId="+id+"";
            exportXLS(url);
        });
    };

    //取消计划
    tripPlan.cancelTripPlan = function(id, $that){
        showConfirmMsg($( "#confirm-dialog-message" ), "你确定要取消该发团计划信息？",function(){
            $.ajax({
                url:KingServices.build_url("tripPlan","cancelTripPlan"),
                data:{ tripPlanId : id + "" },
                success: function(data) {
                    var result =showDialog(data);
                    var dataD = data;
                    if(result){
                        showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                            $that.closest('.tab-pane.active').find('.T-btn-tripPlan-search').trigger('click');
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
    tripPlan.MenberNumber = function($tab, isGroup){
        var $tr = $tab.find(".T-tourist-list tr");
        if(isGroup){
            $tr = $tab.find(".T-tourists-list tr");
        }
        $tr.each(function(i){
            $(this).children().eq(0).text(i+1);
        });
    };

    /**
     * 公用方法
     */
    var F = {
        //计算应收
        calcRece : function($tab){
            var countMoney = 0;
            $tab.find('.T-fee-list tr').each(function(index){
                var money = $(this).find('[name="money"]').val() * 1;
                countMoney += money;
            });
            return Tools.toFixed(countMoney);
        },
        //换算行程安排日期
        arrangeDate : function($tab, chooseLine){
            var $time = $tab.find('[name="startTime"]'),
                startTime = $time.val(),
                endTime = $tab.find('[name="endTime"]'),
                $tr = $tab.find('.T-days tr');
            
            var lengthWhichDay = 1;
            $tr.each(function(index){
                var $days = $(this).find('[name="dateDays"]'),
                    theWhichDay = $days.data('which-day'),
                    whichDate = Tools.addDay(startTime, theWhichDay - 1);

                if(startTime != "" &&  /^(\+|-)?\d+($|\.\d+$)/.test(theWhichDay)){
                    $days.find('[name="whichDayDate"]').val(whichDate);
                    if (chooseLine == 1) {
                        if(lengthWhichDay < theWhichDay){
                            lengthWhichDay = theWhichDay;
                        }
                       endTime.val(Tools.addDay(startTime, lengthWhichDay - 1));
                    }
                }
            });
        },
        //将行程安排中的日期换算成whichday 存
        calcWhicDay : function($tab) {
            var $time = $tab.find('[name="startTime"]'),
                startTime = $time.val(),
                $tr = $tab.find('.T-days tr');

            if (!!startTime) {
                $tr.each(function(index) {
                    var $this = $(this),
                        wichTime = $this.find('[name=whichDayDate]').val();
                    if (!!wichTime) {
                        $this.find('[name=dateDays]').data('which-day', Tools.getDateDiff(startTime, wichTime, 'noAbs')+1);
                        //console.log('whichDay:' + $this.find('[name=dateDays]').data('which-day'));
                    }
                })
            }
        },
        batchAddTourists : function($obj, fn){
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
                        F.saveVisitorMore($panelObj, addVisotorMoreLayer, $obj, fn);
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
        saveVisitorMore : function($panelObj, addVisotorMoreLayer, $obj, fn){
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
                    if(fn){
                        fn($obj);
                    }
                }
            }else{
                showMessageDialog($("#confirm-dialog-message"), "请输入要添加的数据");
            }
        },
        judgmentTimeInterval: function(startTime, endTime, $planObj) {
            var res = true, len = Tools.getDateDiff(startTime, endTime) + 1

            if (!startTime || !endTime || !$planObj.length) {
                showMessageDialog($( "#confirm-dialog-message" ), '请添加行程安排');
                return false;
            }
            /*if (len != $planObj.length) {
                res = false;
                showMessageDialog($( "#confirm-dialog-message" ), '行程安排天数不正确');
            }*/

            var days = [];
            $planObj.each(function(index, el) {
                days.push($(this).val());
            });

            /*for (var i = 0; i < len; i ++) {
                if (days.indexOf(Tools.addDay(startTime , i)) < 0) {
                    res = false;
                    showMessageDialog($( "#confirm-dialog-message" ), '行程安排不连续');
                    break;
                }
            }*/
            return res;
        }
    };

    exports.init = tripPlan.initModule;
    exports.addTripPlan = tripPlan.addTripPlan;
    exports.listTripPlanGroup = tripPlan.listTripPlanGroup;
    exports.viewTripPlan = tripPlan.viewTripPlan;

    exports.addVisotorMore = F.batchAddTourists;
});