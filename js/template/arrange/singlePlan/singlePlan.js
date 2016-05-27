define(function(require, exports) {
    var rule=require("./rule"),
        menuKey = "arrange_singleplan",
        listMainTemplate = require("./view/listMain"),
        singleListTemplate = require("./view/list"),
        // 散客计划模板
        addSingleTripPlanTemplate=require("./view/add"),
        updateSingleTripPlanTemplate=require("./view/update"),
        searchTemplate = require("./view/searchListMain"),
        lineproductSearchList = require("./view/lineproductSearchList"),
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
        viewTripPlanSingle : require('./view/view'),
    }
    var singlePlan = {
        searchData : false,
        $tab : false,
        $searchArea : false,
        autocompleteDate : {}
    };

    singlePlan.initModule = function() {
        singlePlan.listMainTripPlan();
    };  

    singlePlan.listMainTripPlan = function(){
        Tools.addTab(menuKey, "散客计划", listMainTemplate(FinancialService.getInitDate()));
        singlePlan.$tab = $('#tab-'+menuKey+'-content');
        singlePlan.init_eventMain(singlePlan.$tab);
        singlePlan.getAutocompleteData(0);
    };

    singlePlan.getAutocompleteData = function(type){
        $.ajax({
            url: KingServices.build_url('tripController','findSelectValue'),
            type : "POST",
            data : {tripPlanType : type}
        }).done(function(data){
            if(showDialog(data)){
                //查询条件 autocomplete
                var $searchArea = singlePlan.$tab.find('.T-search-tripPlan-single');

                singlePlan.autocompleteSearch($searchArea.find('input[name="lineProductName"]'), data.lineProducts, 'name');
                singlePlan.autocompleteSearch($searchArea.find('input[name="partnerAgencyName"]'), data.partnerAgencies, 'travelAgencyName');
                singlePlan.autocompleteSearch($searchArea.find('input[name="outOPUserName"]'), data.outOPUsers, 'realName');
                //singlePlan.autocompleteSearch($searchArea.find('input[name="dutyOPUserName"]'), data.dutyOPUsers, 'realName');//责任计调
                singlePlan.autocompleteSearch($searchArea.find('input[name="businessGroupName"]'), data.businessGroups, 'name');
                singlePlan.autocompleteSearch($searchArea.find('input[name="realname"]'), data.guides, 'realname');
                singlePlan.autocompleteSearch($searchArea.find('input[name="brand"]'), data.busCompanyArranges, 'licenseNumber');
                singlePlan.listTripPlanSingle(0, singlePlan.$tab);
                
            }
        })
    }

    //list页面事件绑定-
    singlePlan.init_eventMain = function($tab){
        // 绑定日期
        Tools.setDatePicker($tab.find('.datepicker'), true);
        //搜索按钮事件绑定
        $tab.find('.T-btn-tripPlan-search').on('click', function() {
            singlePlan.listTripPlanSingle(0, $tab);
        })

        //导出游客名单
        $tab.find('.T-singlePlan-export').on('click', function(event) {
            event.preventDefault();
            singlePlan.listTripPlanSingle(-1, $tab);
        });
        
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
            singlePlan.addTripPlan($(this).data('type'));
        });
        
        //获取责任计调
        singlePlan.getDutyOPUserList(singlePlan.$tab.find('[name=dutyOPUserName]'));

        // 散客
        $tab.find(".T-tripPlan-singleList").on('click', '.T-action', function(event){
            event.preventDefault();
            var $that = $(this), id = $that.closest('tr').data('id');
            if($that.hasClass('T-view')){
                singlePlan.viewTripPlan(id, 0);
            } else if($that.hasClass('T-hair-regiment')){
                // 发团
                var statusValue = $that.data("status-value"),
                    billStatus = $that.data("bill-status");
                    
                singlePlan.confirmTripPlan(id,statusValue,billStatus, $that);
            } else if($that.hasClass('T-update')){
                // 编辑
                singlePlan.updateSingleTripPlan(id);
            } else if($that.hasClass('T-export')){
                // 导出
                singlePlan.exportTripPlan(id);
            } else if($that.hasClass('T-cancel')){
                // 取消
                singlePlan.cancelTripPlan(id, $that);
            }else if($that.hasClass('T-showLineInfo')){
                var $tr = $that.closest('tr');
                    $nextTr = $tr.nextAll('tr'),
                    $icon = $that.find('i.fa'),
                    isHide = 1,
                    count = 0;
                if($icon.hasClass('fa-plus')){
                    $icon.removeClass('fa-plus').addClass('fa-minus');
                    isHide = 0;
                }else{
                    $icon.removeClass('fa-minus').addClass('fa-plus');
                    isHide = 1;
                }
                for(var i=0; i<$nextTr.length; i++){
                    if(!!$nextTr.eq(i).data('id')){
                        break;
                    }else{
                        if(isHide === 1){
                            $nextTr.eq(i).addClass('hidden');
                        }else{
                            $nextTr.eq(i).removeClass('hidden');
                        }
                    }
                    count++;
                }
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

    //list数据请求-
    singlePlan.listTripPlanSingle = function(page, $tab){
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
                // busId : $searchArea.find('[name="licenseNumber"]').data('id'),
                // busId : $searchArea.find('[name="licenseNumber"]').data('id'),
            };

        if (page == -1) {
            exportXLS( APP_ROOT + 'back/export.do?method=exportSinglePlanBuyInsuranceMember&token='+ $.cookie("token") + '&tripPlanType=0' + $.param(idData)+'&' +$.param(formData));
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

                var singleHrml = filterUnAuth(singleListTemplate(data));
                $tab.find('.T-tripPlan-singleList').html(singleHrml);
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-tripPlan-singleList').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.searchParam.totalPage, //总页数
                    curr: (page + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            singlePlan.listTripPlanSingle(obj.curr -1, $tab);
                        };
                    }
                });
            }
        });
    };
    
    //autocomplete事件绑定-
    singlePlan.autocompleteSearch = function(chooseObj,jsonList,valueName) {
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

    //新增计划-
    singlePlan.addTripPlan = function(planType, args, groupIds, isInnerSinglePlan){
        var tabKey = menuKey + "_single_add";
        if(!args){
            args = {}
        }else{
            args.endTime = Tools.addDay(args.startTime, args.days);
        }
        args.groupIds = JSON.stringify(groupIds);
        args.args = JSON.stringify(args);

        if (Tools.addTab(tabKey, "新增散客计划", addSingleTripPlanTemplate(args))) {
            var $tab = $("#tab-" + tabKey + "-content");
            singlePlan.initSigleEvent($tab, isInnerSinglePlan) 
        }
    };

    /**
     * 散客计划的事件绑定-
     * @param  {object} $tab 顶层父元素
     * @return {object}      返回表单对象
     */
    singlePlan.bindCommonEvent = function($tab, type) {
        //购物商家
        $tab.find(".T-shopNames").on('click', function(){
            KingServices.shopMultiselect($(this));
        });
        //自费商家
        $tab.find(".T-selfPayItemNames").on('click', function(){
            KingServices.selfPayMultiselect($(this));
        });
        // 责任计调
        singlePlan.getOPUserList($tab.find('input[name="dutyOPUserName"]')).trigger('click');

        //绑定时间
        Tools.setDatePicker($tab.find('.datepicker'), true);
        singlePlan.setExecuteTimer($tab);
        $tab.find('[name="startTime"]').off('changeDate').on('changeDate', function(){
            if(!$(this).data("clicked") && $(this).data('add')){
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
        singlePlan.init_edit_event($tab, validate, type);
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

        $tab.find('.T-tripNumberChange').on('change', function() {
            var $this = $(this),
                tripNumber = $this.val(),
                tripPlanId = $tab.find('input[name=id]').val();
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

        //行程安排
        $tab.find('.T-add-days').on('click', function(event){
            event.preventDefault();
            var $days = $tab.find('.T-days'),
                lenWhichDay = $days.data('length-whichDay');
            $days.append(travelArrange({lineProductDayList:[{whichDay: ''}]}));
            // F.arrangeDate($tab);
            Tools.setDatePicker($tab.find('.datepicker'), true);
            F.calcWhicDay($tab);
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
                    var tripPlanId = $tab.find('input[name=id]').val();
                    showConfirmDialog('您将删除所有计划，是否继续？', function() {
                        $.ajax({
                            url: KingServices.build_url('tripPlan', 'deleteTripPlanRequireByBatch'),
                            type: 'post',
                            data: 'tripPlanId=' +  tripPlanId,
                        })
                        .done(function(data) {
                            if (showDialog(data)) {
                                showMessageDialog(data.message, function() {
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
                }else{
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
                singlePlan.addActionPlan($tab, $label.text(), type);
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
                                showConfirmDialog('您将删除'+ title +'，是否继续？', function() {
                                    $.ajax({
                                        url: KingServices.build_url('tripPlan', 'deleteTripPlanRequire'),
                                        type: 'post',
                                        data: {requireId: id},
                                    })
                                    .done(function(data) {
                                        if (showDialog(data)) {
                                            showMessageDialog(data.message, function() {
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
                showConfirmDialog('您将删除'+ title +'，是否继续？', function() {
                    $.ajax({
                        url: KingServices.build_url('tripPlan', 'deleteTripPlanRequire'),
                        type: 'post',
                        data: {requireId: id},
                    })
                    .done(function(data) {
                        if (showDialog(data)) {
                            showMessageDialog(data.message, function() {
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
                singlePlan.daysUpdateDetail($that);
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
                    showConfirmDialog('您将删除一天的行程，是否继续？', function() {
                        $.ajax({
                            url: KingServices.build_url('tripController', 'deletePlanDay'),
                            type: 'post',
                            data: {planDayId: id},
                        })
                        .done(function(data) {
                            if (showDialog(data)) {
                                showMessageDialog(data.message, function() {
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

    /**
     * 获取散客计划，进入编辑页面-
     * @param  {int} id 计划ID
     * @return {[type]}    [description]
     */
    singlePlan.updateSingleTripPlan = function(id, groupIds, isInnerSinglePlan) {
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
                    if(data.touristGroupList){
                        data.touristGroupList = JSON.parse(data.touristGroupList);
                    }
                    data.tripPlan = JSON.parse(data.tripPlan);
                    data.tripPlanDay = JSON.parse(data.tripPlanDay);

                    data.hasData = singlePlan.hasTripPlan(data.require);
                    singlePlan.processRepastDetail(data.tripPlanDay);
                    
                    if (Tools.addTab(tabKey, '编辑散客计划', updateSingleTripPlanTemplate(data))) {
                        var $tab = $("#tab-" + tabKey + "-content");
                        singlePlan.initSigleEvent($tab, isInnerSinglePlan) 
                        if(!$.isEmptyObject(groupIds)) {
                            singlePlan.getTouristGroup({mergeTouristGroupIdJson:groupIds}, $tab);
                        }
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

    singlePlan.hasTripPlan = function(require) {
        var res = {};

        if (!!require) {
            for (var i = 0, len = require.length; i < len; i ++) {
                require[i].requireText = requireText[require[i].requireType];

                res[require[i].requireType] = true;
            }
        }

        return res;
    };

    singlePlan.processRepastDetail = function(detail) {
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

    //新增编辑散客计划事件-
    singlePlan.initSigleEvent = function($tab,isInnerSinglePlan) {
        var validate = singlePlan.bindCommonEvent($tab, 0);
        //搜索线路
        $tab.find(".T-search-line").on('click', function(){
            singlePlan.initLineProductSearch($tab, 0, 1);
        });

        //绑定添加游客小组事件
        $tab.find('.T-add-touristGroup').on('click', function(event){
            event.preventDefault();
            var lineProductId = $tab.find("input[name=lineProductId]").val();
            var startTime = $tab.find("input[name=startTime]").val();
            singlePlan.addTouristGroup(lineProductId,startTime,$tab);
        });
        $tab.find(".T-touristGroup-list").on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this)
                id = $that.closest('tr').data('id');

            if ($that.hasClass('T-groupView')) {
                //查看旅游小组成员
                singlePlan.viewTouristGroup(id);
            } else if ($that.hasClass('T-groupDelete')) {
                //删除小组
                singlePlan.deleteTouristGroup($that, id, $tab.find("input[name=id]").val(), $tab);
            }
        });

        // 保存
        $tab.find('.T-savePlan').on('click', function(event) {
            event.preventDefault();
            singlePlan.saveSinglePlan($tab, validate, isInnerSinglePlan);
        });

        var args = $tab.find('[name=args]').data('val'),
            groupIds = $tab.find('[name=groupIds]').data('val');

        if(!$.isEmptyObject(args)) {
            args.mergeTouristGroupIdJson = groupIds;
            singlePlan.initNormalLineProduct($tab, args.id);
            singlePlan.getTouristGroup(args, $tab);
        }
    };
    singlePlan.jsonToString = function(jTs) {
        if (typeof jTs != 'string') {
            jTs = JSON.stringify(jTs);
        }
        return jTs;
    }
    /**
     * 保存散客计划
     * @param  {object} $tab 父容器
     * @return {[type]}      [description]
     */
    singlePlan.saveSinglePlan = function($tab, validate, tabArgs,isInnerSinglePlan) {
        if(!validate.form())return;
        var args = $tab.find('.T-basic-info').serializeJson();
        args.isContainSelfPay = $tab.find('[name="isContainSelfPay"]').is(":checked") ? 1 : 0;
        args.shopIds = $tab.find('[name="shopNames"]').data("propover") || "";
        args.selfPayItemIds = $tab.find('[name="selfPayItemNames"]').data("propover") || "";
        // 处理定时发送
        args.executeTimeType = 0;//$tab.find('.T-timed').is(':checked')?1:0;
        if (args.executeTimeType && (args.startTime + ' 06:00:00') < args.executeTime) {
            showMessageDialog("通知时间不能在出团日期6点之后");
            return;
        } else if(args.executeTimeType == 0) {
            delete(args.executeTime);
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
                showMessageDialog("行程安排中日期重复");
                return;
            }
        }

        //团行程json包
        args.planDayJson =  JSON.stringify(singlePlan.getTripPlanDays($tab));
        //团计划要求json包
        args.requireJson =  JSON.stringify(singlePlan.getTripPlanRequest($tab));

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
        if(args.touristGroupIdJson.length === 0){
            showMessageDialog("至少添加一个游客名单。");
            return;
        }
        args.touristGroupIdJson =  JSON.stringify(args.touristGroupIdJson);
        /*args.touristAdultCount = adultcount;
        args.touristChildCount = childcount;*/
        
        $.ajax({
            url: KingServices.build_url('tripController', 'saveRetailClient'),
            type: 'post',
            data: {tripPlan: JSON.stringify(args)},
        })
        .done(function(data) {
            if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    if(!!tabArgs){
                        if(Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2])){
                            singlePlan.initSigleEvent($("#tab-"+tabArgs[0]+"-content"));
                        };
                    }else{
                        Tools.closeTab(Tools.getTabKey($tab.prop('id')));
                        if(!!singlePlan.$tab){
                            singlePlan.$tab.find('.T-search-tripPlan-single .T-btn-tripPlan-search').trigger('click');
                        }
                    }

                    //散客拼团
                    if(!isInnerSinglePlan){
                        $('#tab-arrange_individual-content').find('.T-search').trigger('click');
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
    singlePlan.getTripPlanDays = function($tab) {
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
                    scenicItemIds : singlePlan.jsonToString($that.find('[name="scenicItemNames"]').data("propover")),
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
    singlePlan.getTripPlanRequest = function($tab) {
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

    singlePlan.daysUpdateDetail = function($that){
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
    singlePlan.addActionPlan = function($tab, title, type){
        var list = '<div class="col-xs-12 hct-plan-ask" data-type="'+type+'"><div class="pull-left hct-plan-ask-title">'+$.trim(title)+'计划要求</div><div class="pull-left hct-plan-ask-input"><input type="text" class="col-xs-12" name="requireContent"></div></div>';
        $tab.find('.T-action-plan-list').append(list);
    }
    singlePlan.viewTripPlan = function(id, planType){
        planType = 0;
        var html = T.viewTripPlanSingle, viewMenuKey = menuKey+"_single_view";
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
                if(Tools.addTab(viewMenuKey, "查看散客计划", html(data))){
                    $("#tab-"+viewMenuKey+"-content").find('.T-orderNumber').on('click', function() {
                        var $this = $(this),
                            dept = $this.data('dept'),
                            id = $this.data('id');
                        if (!!dept) {
                            dept = 'inner';
                        }
                        KingServices.viewTouristGroup(id, dept);
                    })
                    $("#tab-"+viewMenuKey+"-content").find('.T-btn-close').on('click', function(event){
                        event.preventDefault();
                        Tools.closeTab(viewMenuKey);
                    });
                }
            }
        });
    };

    //发团定时   
    singlePlan.setExecuteTimer = function($tab){
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
    singlePlan.getOPUserList = function($target){
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

    //添加游客小组-
    singlePlan.addTouristGroup = function(lineProductId,startTime,$tab){
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
                            showMessageDialog("没有出游的游客小组，请在游客管理中添加！");
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
                                    singlePlan.viewTouristGroup($(this).closest("tr").data("id"));
                                })
                                //提交按钮事件绑定
                                $container.find(".T-saveGroup").click(function(){
                                    var addGroupIdJson = [],
                                        html = "<td>"+
                                            "<div class=\"btn-group\">"+
                                            "<a class=\"cursor T-action T-groupView\">"+
                                                "查看"+
                                            "</a>"+"<a class='cursor'> </a>"+
                                            "<a class=\"cursor T-action T-groupDelete\">"+
                                                "删除"+
                                            "</a>"+
                                            "</div>"+
                                            "</td>";
                                    $container.find(".T-group-list tr").find("input:checked").each(function(i){
                                        var $tr = $(this).closest('tr').clone().removeClass('success');
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
            showMessageDialog("请先选择线路名称和出团日期！");
        }
    };

    //新增计划带出游客小组
    singlePlan.getTouristGroup = function(args, $tab){
        $.ajax({
            //url:KingServices.build_url("tripPlan","findTouristGroupInfo"),
            url:KingServices.build_url("touristGroup","getTouristGroupByIdsForTransit"),
            type:"POST",
            data:{
                ids : JSON.stringify(args.mergeTouristGroupIdJson)
            }
        }).done(function(data){
            if(showDialog(data)){
                var group = JSON.parse(data.touristGroupJson),
                    hotelLevel = ['三星以下', '三星', '准四星', '四星', '准五星', '五星', '五星以上'];

                var html = "";
                for(var i=0; i<group.length; i++){
                    console.log(group[i].sendPosition)
                    console.log(typeof group[i].sendPosition)
                    html += '<tr data-id="'+group[i].id+'"><td>'+
                    (!!group[i].orderNumber?group[i].orderNumber:"")+'</td><td>'+
                    (group[i].outOPUser ? group[i].outOPUser.realName : "")+'</td><td>'+
                    group[i].lineProduct.name+'</td><td>'+
                    group[i].partnerAgency.travelAgencyName+'</td><td>'+
                    group[i].contactMember.name+'</td><td>'+
                    group[i].contactMember.mobileNumber+'</td><td>'+  
                    group[i].areaData+'</td><td>'+
                    group[i].ageData+'</td><td>'+
                    group[i].adultCount+'大'+group[i].childCount+'小</td><td>'+
                    group[i].currentNeedPayMoney+'</td><td>'+
                    (!!group[i].accompanyGuideName?group[i].accompanyGuideName:"")+'</td><td>'+
                    (!!group[i].accompanyGuideMobile?group[i].accompanyGuideMobile:"")+'</td><td>'+
                    (!!group[i].welcomeBoard?group[i].welcomeBoard:"")+'</td><td>'+
                    (!!group[i].sendPosition?group[i].sendPosition:"")+'</td><td>'+
                    (!!group[i].remark?group[i].remark:"")+'</td><td>'+
                    '<div class="btn-group">'+
                    '<a class="cursor T-action T-groupView">查看</a>'+
                    '<a class="cursor"> </a><a class="cursor T-action T-groupDelete">删除</a></div></td></tr>';
                }
                $tab.find('.T-touristGroup-list').append(html);
            }
        });
    };
    //删除小组成员-
    singlePlan.deleteTouristGroup = function(obj,id,tripPlanId,$tab){
        showConfirmMsg("你确定要移除该小组吗？",function(){
            if(!!id && !!tripPlanId){
                $.ajax({
                    url:KingServices.build_url("touristGroup","removeTouristGroup"),
                    data:{ 
                        tripPlanId : tripPlanId + "",
                        touristGroupId : id
                    },
                    success: function(data) {
                        var result =showDialog(data);
                        if(result){
                            showMessageDialog(data.message,function(){
                                obj.closest('tr').remove();
                                singlePlan.MenberNumber($tab);
                            });
                        }
                    }
                });
            } else{
                obj.closest('tr').remove();
                singlePlan.MenberNumber($tab);
            }
        },function(){},"取消","确定");
    };

    //发团-
    singlePlan.confirmTripPlan = function(id,statusValue,billStatus, $that){
        if(billStatus != -1){
            showMessageDialog("该团已审核，无法确认");
        }else{
            if(statusValue==0){
                $.ajax({
                    url:KingServices.build_url("tripPlan","confirmTripPlan"),
                    data:{ tripPlanId : id + "" },
                    success: function(data) {
                        var result =showDialog(data);
                        var dataD = data;
                        if(result){
                            showMessageDialog(data.message, function(){
                                $that.closest('.tab-pane').find('.T-btn-tripPlan-search').trigger('click');
                            });
                        }
                    }
                });
            }else{
                showConfirmMsg("是否给导游发送短信？",function(){
                    $.ajax({
                        url:KingServices.build_url("tripPlan","noticeGuideTripPlanAfterConfirmTripPlanAgain"),
                        data:{ id : id + "" },
                        success: function(data) {
                            var result =showDialog(data);
                            var dataD = data;
                            if(result){
                                showMessageDialog(data.message,function(){
                                    $that.closest('.tab-pane').find('.T-btn-tripPlan-search').trigger('click');
                                });
                            }
                        }
                    });
                },function(){},"取消","确定");
            }
        }
    };

    //监听-
    singlePlan.init_edit_event = function($tab, validate, type) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.on('change', function(event) {
                event.preventDefault();
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                singlePlan.initSigleEvent($("#tab-"+tab_id+"-content"));
            })
            // 监听保存，并切换tab
            .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
                event.preventDefault();
                $tab.data('isEdited', false);
                singlePlan.saveSinglePlan($tab, validate, [tab_id, title, html]);
            })
            // 保存后关闭
            .on(CLOSE_TAB_SAVE, function(event) {
                event.preventDefault();
                $tab.data('isEdited', false);
                singlePlan.saveSinglePlan($tab, validate);                
            });
        }
    };
    
    /**
     * 初始化选择线路的对话框-
     */
    singlePlan.initLineProductSearch = function($tab, type, isSingle) {
        var html = searchTemplate({}),
            title = '选择线路产品';
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
        singlePlan.getLineProductList($dialog, type, isSingle, '');
        // 选择线路产品
        $dialog.find('.T-btn-submit').off('click').on('click', function(event) {
            event.preventDefault();
            var $tr = $dialog.find('input[name="choice-TravelLine"]:checked').closest('tr'),
                oldLinetId = $tab.find('input[name="lineProductId"]').val(),
                quoteId = "";

            if (!$tr.length) {
                showMessageDialog("请选择线路产品");
                return;
            }
            var lineId = $tr.data('id');

            if(oldLinetId != lineId){
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
            singlePlan.initNormalLineProduct($tab, lineId, quoteId, type, '');
            layer.close(searchTravelLinelayer);
        }); 
    };

    /**
     * 获取线路产品数据，并填入选择线路产品的对话框-
     * @param  {object} $dialog dialog的Jquery对象
     * @param  {int} type    0：新增 1：更新
     * @param  {int} page    页码
     * @param  {string} name    搜索关键字
     * @return {[type]}         [description]
     */
    singlePlan.getLineProductList = function($dialog, type, isSingle, page, $tab, name) {
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
                $tbody.html(listHtml);
                $tbody.closest('.tab-pane').find('.T-total').text(data.recordSize);

                //搜索线路产品
                $dialog.find('.T-btn-search').on('click', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    var $that=$(this),$searchLine=$that.closest('.form-inline');
                    var name=$searchLine.find('.T-name').val();
                    singlePlan.getLineProductList($dialog, type, isSingle, page, $tab,name);

                });

                // 绑定翻页组件
                laypage({
                    cont: $tbody.closest('.tab-pane').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            singlePlan.getLineProductList($dialog, type, isSingle, obj.curr -1, $tab, name);
                        }
                    }
                }); 
 
                // 让对话框居中
                $(window).trigger('resize');
            }
        });         
    };

    singlePlan.initNormalLineProduct = function($tab, pId, quoteId, type, isGroup, feeList) {
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
                        if(!$.isEmptyObject(data.quote)){
                            var quote = data.quote;
                            $tab.find('[name="shopNames"]').val(quote.shopNames).data('propover', quote.shopIds);
                            $tab.find('[name="selfPayItemNames"]').val(quote.selfPayItemNames).data('propover', quote.selfPayItemIds);
                            $tab.find('[name="isContainSelfPay"]').attr('checked', quote.isContainSelfPay == 1 ? true : false);
                            $tab.find('[name="adultCount"]').val(quote.adultCount).attr('readonly', 'readonly');
                            $tab.find('[name="childCount"]').val(quote.childCount).attr('readonly', 'readonly');
                            $tab.find('[name="startTime"]').val(quote.startTime);
                            $tab.find('[name="endTime"]').val(quote.endTime);
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
                        if(data.requireList.length > 0) {
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

    //查看旅游小组成员-
    singlePlan.viewTouristGroup = function(id){
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

    //导出发团计划-
    singlePlan.exportTripPlan = function(id){
        checkLogin(function(){
            var url = KingServices.build_url("export","exportTripPlan") + "&tripPlanId="+id+"";
            exportXLS(url);
        });
    };

    //取消计划-
    singlePlan.cancelTripPlan = function(id, $that){
        showConfirmMsg("你确定要取消该发团计划信息？",function(){
            $.ajax({
                url:KingServices.build_url("tripPlan","cancelTripPlan"),
                data:{ tripPlanId : id + "" },
                success: function(data) {
                    var result =showDialog(data);
                    var dataD = data;
                    if(result){
                        showMessageDialog(data.message,function(){
                            $that.closest('.tab-pane.active').find('.T-btn-tripPlan-search').trigger('click');
                        });
                    }
                }
            });
        },function(){},"取消","确定");
    };

    //游客名单成员添加自动序号函数  singlePlan.MenberNumber(oClass);-
    singlePlan.MenberNumber = function($tab, isGroup){
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
        }
    };

    singlePlan.getDutyOPUserList = function($chooseObj) {
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

    exports.init = singlePlan.initModule;
    //散客发团计划编辑
    exports.updateSingleTripPlan = singlePlan.updateSingleTripPlan;
    exports.addTripPlan = singlePlan.addTripPlan;
    exports.viewTripPlan = singlePlan.viewTripPlan;
    exports.listTripPlanSingle = singlePlan.listTripPlanSingle;
});