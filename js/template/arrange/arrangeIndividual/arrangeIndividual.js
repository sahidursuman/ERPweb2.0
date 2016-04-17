/**
 * [description]  散客拼团模块
 * @param  {[type]} require  
 * @param  {String} exports) 
 * @return {[type]}
 * @author ZhangJiangFeng          
 */
define(function(require, exports) {
    var menuKey = "arrange_individual",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        viewTouristGroupTemplate = require("./view/viewTouristGroup"),
        chooseMergeTemplate = require("./view/chooseMerge"),
        chosenTripPlanTemplate = require("./view/chooseTriPlan"),
        chosenMergenTripPlanTemplate = require("./view/chosenMergenTripPlan");

    var arrangeIndividual = {
        $tab:false,
        $searchArea:"",
        editFeeLayer: "",
        addGroupTemplateLayer: "",
        chosenMergenTripPlanlayer: "",
        touristGroupMergeData: {
            touristGroupMergeList: []
        },
        touristGroupId: [],
        transferId: []
    };

    /**
     * [initModule description]
     * @return {[type]} [description]
     */
    arrangeIndividual.initModule = function() {
        Tools.addTab(menuKey, "散客拼团", listMainTemplate());
        arrangeIndividual.$tab=$("#tab-"+menuKey+"-content");
        //请求搜索数据
        arrangeIndividual.autocompleteSearch(0,arrangeIndividual.$tab);
        //初始化散拼、团体、转客时间
        arrangeIndividual.init_event(arrangeIndividual.$tab);
        arrangeIndividual.listArrangeTourist(0);
    };

     /**
     * [autocompleteSearch description]
     * @param  {[type]} customerType 查询标识
     * @param  {[type]} $tab         顶层对象
     * @return {[type]}
     */
    arrangeIndividual.autocompleteSearch = function(customerType, $tab) {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryForTripOperation"),
            type: 'POST',
            dataType: 'json',
            data: "customerType=" + customerType,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var $searArea=$tab.find('.T-search-area');
                    arrangeIndividual.getAutoSearchList($searArea.find('[name=lineProductName]'),data.lineProductList,"name","lineProductId");
                    arrangeIndividual.getAutoSearchList($searArea.find('[name=fromBussinessGroupName]'),data.fromBusinessGroupList,"businessGroupName","fromBussinessGroupId");
                    arrangeIndividual.getAutoSearchList($searArea.find('[name=fromPartnerAgencyName]'),data.fromPartnerAgencyList,"travelAgencyName","fromPartnerAgencyId");
                }
            }
        })
    };
    /**
     * 搜索区域autocomplete
     * @param  {[obj]} chooseObj   [选择的input对象]
     * @param  {[array]} jsonList    [数据列表]
     * @param  {[string]} valueName   [数据中需要展示的对象属性]
     * @param  {[string]} inputIdName [隐藏的input Id 的name值]
     * @return {[type]}             [description]
     */
    arrangeIndividual.getAutoSearchList = function(chooseObj,jsonList,valueName,inputIdName) {
        chooseObj.autocomplete({
            minLength: 0,
            change :function(event, ui){
                if(ui.item == null){
                    var $this = $(this),parents = $(this).closest('div');
                    parents.find("input[name="+inputIdName+"]").val("");
                    $this.next('[name='+inputIdName+']').val("");
                }
            },
            select :function(event, ui){
                var $this = $(this),parents = $(this).closest('div');
                parents.find("input[name="+inputIdName+"]").val(ui.item.id).trigger('change');
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
    };

    /**
     * 散客拼团初始化事件
     * @return {[type]} [description]
     */
    arrangeIndividual.init_event = function($tab) {
        //设置时间控件
        Tools.setDatePicker($tab.find('.datepicker'), false);
        arrangeIndividual.$searchArea = $tab.find('.T-search-area');
        //散拼
        $tab.find('.T-search').off().on('click', function(event) {
            arrangeIndividual.touristGroupId = [];
            arrangeIndividual.touristGroupMergeData.touristGroupMergeList = [];
            arrangeIndividual.listArrangeTourist(0);
        });
        $tab.find('#order_by').off().on('change', function(event) {
            event.preventDefault();
            arrangeIndividual.listArrangeTourist(0);
        });
        $tab.find('[name=type]').on('change', function() {
            arrangeIndividual.chosenPartAgenOrBussiness($(this));
        });

    };

    /**
     * [listArrangeTourist description]
     * @param  {[type]} customerType 0--散拼
     * @param  {[type]} divId        [description]
     * @return {[type]}              [description]
     */
    arrangeIndividual.listArrangeTourist = function(page) {
        if (arrangeIndividual.$searchArea && arguments.length==1) {
            var formData=arrangeIndividual.$searchArea.find('form').serializeJson();
            formData.customerType = arrangeIndividual.$searchArea.find('.T-search').attr('data-customerType');
            formData.pageNo = page;
        }
        $.ajax({
            url: KingServices.build_url("touristGroup", "getToursitSKPT"),
            type: "POST",
            data: formData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.searchParam = data.searchParam;
                    data.touristGroupList = data.touristGroupList;
                    if (formData.customerType == 0) { //散拼
                        var html = listTemplate(data);
                        html = filterUnAuth(html);
                        arrangeIndividual.$tab.find('.T-touristVisitor-list').html(html);
                        //初始化页面事件
                        arrangeIndividual.initVisitorEvent();
                        //散拼分页选中效果
                        arrangeIndividual.pagerChecked(formData.customerType);
                    }
                    // 绑定共用翻页组件
                    laypage({
                        cont: arrangeIndividual.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeIndividual.listArrangeTourist(obj.curr - 1);
                            }
                        }
                    });

                }
            }
        })
    };
    /**
     * init_visitorEvent 散拼报表绑定事件
     * @return {[type]} [description]
     */
    arrangeIndividual.initVisitorEvent = function() {
        var $visitorObj = arrangeIndividual.$tab.find('.T-touristVisitor-list');
        //重置计算
        arrangeIndividual.choosenAdultAndChildCount($visitorObj);
        
        //散拼分页选中效果
        arrangeIndividual.pagerChecked();
        Tools.descToolTip($visitorObj.find('.T-ctrl-tip'),1);
        //查看游客小组
        arrangeIndividual.$tab.find('.T-arrageVisitor-view').on('click',function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),id = $that.closest('tr').data('value');
            arrangeIndividual.viewTouristGroup(id);
        });
        //散拼checkbox绑定事件
        $visitorObj.find('.T-cheked').off('change').on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that=$(this);
            arrangeIndividual.addTouristGroupMerge($that);
        });
        $visitorObj.find('.T-start-touristGroup-merge').off().on('click', function(event) {
            event.preventDefault();
            var list = arrangeIndividual.touristGroupMergeData.touristGroupMergeList;
            if (!!list && list.length > 0) {
                /* Act on the event */
                arrangeIndividual.initChosenMergenTripPlan();
            } else {
                showMessageDialog($("#confirm-dialog-message"), "你还没有勾选任何并团小组");
            };
        });
        //全选功能
        $visitorObj.find('.T-checkedAll').off('change').on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that=$(this),$trList=arrangeIndividual.$tab.find('tbody').children('tr');
            if ($that.is(':checked')) {
                // statement
                $trList.each(function(i) {
                    $trList.eq(i).find('.T-cheked').prop("checked", true); 
                    arrangeIndividual.addTouristGroupMerge($trList.eq(i).find('.T-cheked'));
                });
            } else {
                $trList.each(function(i) {
                    $trList.eq(i).find('.T-cheked').prop("checked", false);
                    arrangeIndividual.addTouristGroupMerge($trList.eq(i).find('.T-cheked'));
                });
            }
        });
    };

    /**
     * [pagerChecked 分页选中效果
     * @return {[type]} [description]
     */
    arrangeIndividual.pagerChecked = function() {
        //分页--勾选游客小组Id
        if (arrangeIndividual.touristGroupId.length > 0) {
            for (var i = 0; i < arrangeIndividual.touristGroupId.length; i++) {
                var touristGroupId = arrangeIndividual.touristGroupId[i].touristGroupId,
                    $vistorTr =arrangeIndividual.$tab.find('tr');
                $vistorTr.each(function(index) {
                    var id = $vistorTr.eq(index).data('value');
                    if (!!id && !!touristGroupId && id == touristGroupId) {
                        $vistorTr.eq(index).find('.T-cheked').prop('checked', true);
                    };

                });
            }
        };
    };

    /**
     * [initChosenTripMergen 初始化选择--生成计划
     * @return {[type]} [description]
     */
    arrangeIndividual.initChosenMergenTripPlan = function() {
        var html = chosenMergenTripPlanTemplate();
        arrangeIndividual.chosenMergenTripPlanlayer = layer.open({
            type: 1,
            title: "选择生成计划",
            skin: 'layui-layer-rim', //加上边框
            area: '85%', //宽高
            zIndex: 1029,
            content: html,
            scrollbar: false,
            success: function() {
                arrangeIndividual.chosenTripPlan(0, "");
                arrangeIndividual.mergenTripPlan();
            }
        });

    };

    /**
     * chosenTripPlan 选择计划
     * @return {[type]} [description]
     */
    arrangeIndividual.chosenTripPlan = function(page, searchKey) {
        var $chooseTipPlan = $("#chooseTipPlan");
        $.ajax({
            url: "" + APP_ROOT + "back/tripPlan.do?method=findNoStartTripPlanList&token=" + $.cookie("token") + "&menuKey=" + menuKey + "&operation=view",
            showLoading: false,
            data: "searchKey=" + searchKey + "&pageNo=" + page,
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = chosenTripPlanTemplate(data);
                    $chooseTipPlan.find('.T-chooseTipPlan-Content').html(html);
                    // 再调整对话框的高度
                    $(window).trigger('resize');
                    arrangeIndividual.initchooseTipP_Event($chooseTipPlan);
                    // 绑定共用翻页组件
                    laypage({
                        cont: $chooseTipPlan.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeIndividual.chosenTripPlan(obj.curr - 1, searchKey);
                            }
                        }
                    });
                }
            }
        })
    };

    /**
     * mergenTripPlan 生成计划
     * @return {[type]} [description]
     */
    arrangeIndividual.mergenTripPlan = function() {
        var $mergenTripPlan = $("#mergenTripPlan"),
            $data={
                touristGroupMergeList:[]
            };
        //散客拼团,选择多个相同线路产品的游客小组，进行拼团时，若【线路产品】、【类别】、【天数】、【出游日期】均相同则只显示一条
        function uniqueArrJson(arr){
            var res = [arr[0]];
            for(var i = 1; i < arr.length; i++){
              var repeat = false;
                  for(var j = 0; j < res.length; j++){
                       if(arr[i].lineProductName===arr[j].lineProductName && arr[i].lineProductType===arr[j].lineProductType  
                        && arr[i].days===arr[j].days && arr[i].startTime===arr[j].startTime){
                            repeat = true;
                            break;
                       }
                  }
                  if(!repeat){
                   res.push(arr[i]);
                  }
            }
            return res;
        }
        $data.touristGroupMergeList = uniqueArrJson(arrangeIndividual.touristGroupMergeData.touristGroupMergeList);
        if (!!$data.touristGroupMergeList && $data.touristGroupMergeList.length > 0) {
            var html = chooseMergeTemplate($data);
            $mergenTripPlan.find('.T-mergenTripPlan-Content').html(html);
            arrangeIndividual.mergTripP_Event($mergenTripPlan);
        }
    };


    /**
     * initchooseTipP_Event 选择计划绑定事件
     * @return {[type]} [description]
     */
    arrangeIndividual.initchooseTipP_Event = function($chooseTipPlan) {
        var mergeDataJson = arrangeIndividual.touristGroupMergeData.touristGroupMergeList;
        mergeDataJson = JSON.stringify(mergeDataJson);
        var tripPlanId = "";
        var mergeDataList = arrangeIndividual.touristGroupMergeData.touristGroupMergeList,
            mergeTouristGroupIdJson = [];
        //组装游客小组Id
        if (mergeDataList.length > 0) {
            for (var i = 0; i < mergeDataList.length; i++) {
                var touristGroupId = mergeDataList[i].touristGroupId,
                    ids = {
                        id: touristGroupId
                    };
                mergeTouristGroupIdJson.push(ids);
            };
        };

        //选择计划查询
        $chooseTipPlan.find('.T-lineProduct-search').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var searchKey = $chooseTipPlan.find('input[name=searchKey]').val();
            arrangeIndividual.chosenTripPlan(0, searchKey);
        });

        //确认
        $chooseTipPlan.find('.T-savechooseTipPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $chooseMergeTr = $chooseTipPlan.find(".T-chosenTrip-list").children('tr');
            arrangeIndividual.choosenAdultAndChildCount(arrangeIndividual.$tab,1);
            $chooseMergeTr.each(function(i) {
                if ($chooseMergeTr.eq(i).find(".ridioCheck").is(":checked") == true) {
                    tripPlanId = $chooseMergeTr.eq(i).data("value");
                }
            });
            if (!!tripPlanId && tripPlanId != null) {
                //关闭layer层
                layer.close(arrangeIndividual.chosenMergenTripPlanlayer);
                KingServices.updateSingleTripPlan(tripPlanId,mergeTouristGroupIdJson);
                //清空游客小组Id
                arrangeIndividual.touristGroupId = [];
                //数据刷新
                arrangeIndividual.listArrangeTourist(0);
            } else {
                showMessageDialog($("#confirm-dialog-message"), "请选择计划");
            };
        });

        //取消操作
        $chooseTipPlan.find('.T-cancelChooseTipPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(arrangeIndividual.chosenMergenTripPlanlayer);
        });

    };

    /**
     * mergTripP_Event 生成计划事件的绑定
     * @return {[type]} [description]
     */
    arrangeIndividual.mergTripP_Event = function($mergenTripPlan) {

        //取消
        $mergenTripPlan.find('.T-cancelMergenTripPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(arrangeIndividual.chosenMergenTripPlanlayer);
        });

        //保存
        $mergenTripPlan.find('.T-saveMergenTripPlan').on('click', function(event) {
            /* Act on the event */
            event.preventDefault();
            var mergeDataList = arrangeIndividual.touristGroupMergeData.touristGroupMergeList,
                mergeTouristGroupIdJson = [];
            arrangeIndividual.choosenAdultAndChildCount(arrangeIndividual.$tab,1);
            //组装游客小组Id
            if (mergeDataList.length > 0) {
                for (var i = 0; i < mergeDataList.length; i++) {
                    var touristGroupId = mergeDataList[i].touristGroupId,
                        ids = {
                            id: touristGroupId
                        };
                    mergeTouristGroupIdJson.push(ids);
                };
            };

            //选中游客小组
            var $mergenTrList = $mergenTripPlan.find('.chooseMergeTbody').find('tr'),
                id = "",lineProName = "",startTime="",days="";
            $mergenTrList.each(function(i) {
                if ($mergenTrList.eq(i).find(".ridioCheck").is(":checked") == true) {
                    id = $mergenTrList.eq(i).attr("data-entity-id");
                    lineProName = $mergenTrList.eq(i).attr("data-linePro-name");
                    startTime = $mergenTrList.eq(i).attr("data-entity-startTime");
                    days = $mergenTrList.eq(i).attr("data-days");
                }
            })

            if (!!id && mergeTouristGroupIdJson.length > 0) {
                 //关闭层
                layer.close(arrangeIndividual.chosenMergenTripPlanlayer);
                KingServices.addTripPlan(args={id : id,lineProName : lineProName,startTime : startTime,days : days},mergeTouristGroupIdJson);
                //清空游客小组Id
                arrangeIndividual.touristGroupId = [];
                //在数组中移除选中生成计划记录
                arrangeIndividual.touristGroupMergeData.touristGroupMergeList.splice(0,arrangeIndividual.touristGroupMergeData.touristGroupMergeList.length);
                //数据刷新
                arrangeIndividual.listArrangeTourist(0);
            } else {
                showMessageDialog($("#confirm-dialog-message"), "请选择线路产品");
            };
        });
    };


    /**
     * canCelChecked 保存后的取消选中操作
     * @return {[type]} [description]
     */
    arrangeIndividual.canCelChecked = function($tab) {
        var $trList = $tab.find('tr');
        $trList.each(function(index) {
            $trList.eq(index).find('.T-cheked').prop("checked", false)
        });
    };

     /**
     * addTouristGroupMerge 散拼信息
     */
    arrangeIndividual.addTouristGroupMerge = function($that) {
        var $visitorObj = arrangeIndividual.$tab.find('.T-touristVisitor-list'),
            $merge = $visitorObj.find('.T-arrangeTouristMergeList .list'),
            //$that = $(this),
            $parents = $that.closest('tr'),
            memberCount = $parents.attr("data-entity-memberCount");
        //计算已选人数
        arrangeIndividual.choosenAdultAndChildCount(arrangeIndividual.$tab);

        if (memberCount == 0) {
            $(this).prop("checked", false);
            showMessageDialog($("#confirm-dialog-message"), "未分团人数为0，不能加入并团选择");
            return;
        }
        var lineProductId = $parents.attr("data-id"),
            startTime = $parents.attr("data-startTime"),
            days = $parents.attr("data-days"),
            lineProductName = $parents.attr("data-name"),
            lineProductType = $parents.attr("data-type"),
            touristGroupId = $parents.data('value');
        if ($that.is(":checked")) {
            var touristGroupIds = {
                    touristGroupId: touristGroupId
                },
                touristGroupMerge = {
                    touristGroupId: touristGroupId,
                    lineProductId: lineProductId,
                    startTime: startTime,
                    days: days,
                    lineProductName: lineProductName,
                    lineProductType: lineProductType
                };
            arrangeIndividual.touristGroupMergeData.touristGroupMergeList.push(touristGroupMerge);
            arrangeIndividual.touristGroupId.push(touristGroupIds);

        } else {
            //若取消选中状态---用于生成计划查询数组
            arrangeIndividual.removeTouristGroupMergeData(lineProductId, startTime);
            //移除取消分页选中效果
            arrangeIndividual.removeTouristGroupId(touristGroupId);
        }
    };

      /**
     * removeTouristGroupMergeData 删除散拼
     * @param  {[type]} $merge        [description]
     * @param  {[type]} lineProductId [description]
     * @param  {[type]} startTime     [description]
     * @return {[type]}               [description]
     */
    arrangeIndividual.removeTouristGroupMergeData = function(lineProductId, startTime) {
        var touristGroupMergeList = arrangeIndividual.touristGroupMergeData.touristGroupMergeList;
        if (touristGroupMergeList.length > 0) {
            for (var i = 0; i < touristGroupMergeList.length; i++) {
                if (touristGroupMergeList[i].lineProductId == lineProductId && touristGroupMergeList[i].startTime == startTime) {
                    touristGroupMergeList.splice(i, 1);
                    break;
                }
            }
        }
    };

    /**
     * removeTouristGroupId 移除选中的小组Id
     * @param  {[type]} touristGroupId 
     * @return {[type]}
     */
    arrangeIndividual.removeTouristGroupId = function(touristGroupId) {
        for (var i = 0; i < arrangeIndividual.touristGroupId.length; i++) {
            if (arrangeIndividual.touristGroupId[i].touristGroupId == touristGroupId) {
                arrangeIndividual.touristGroupId.splice(i, 1);
                break;
            }
        }
    };

    /**
     * choosenAdultAndChildCount 已选人数的计算
     * @return {[type]} [description]
     */
    arrangeIndividual.choosenAdultAndChildCount = function($tab, merge) {
        var sumAdultCount = 0,
            sumChildCount = 0,
            $trList = $tab.find("tbody").children('tr');
        $trList.each(function() {
            var $that = $(this);
            if ($that.find(".T-cheked").is(":checked")) {
                sumAdultCount += parseInt($(this).attr("data-adultCount"));
                sumChildCount += parseInt($(this).attr("data-childCount"));
            }
        });
        $tab.find(".T-chosenAdultAndChildCount").text("大人" + sumAdultCount + "小孩" + sumChildCount + "");
        //生成、选择计划清零操作
        if (!!merge && merge==1) {
            $tab.find(".T-chosenAdultAndChildCount").text("大人" + 0 + "小孩" + 0 + "");
        };
    };

    /**
     * viewTouristGroup 查看游客小组
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    arrangeIndividual.viewTouristGroup = function(id) {
        $.ajax({
            url: KingServices.build_url("tripPlan", "getMemberList"),
            data: "touristGroupId=" + id + "",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.memberList = JSON.parse(data.memberList);
                    var viewGroupTemplateLayer = layer.open({
                        type: 1,
                        title: "查看小组信息",
                        skin: 'layui-layer-rim', //加上边框
                        area: '60%', //宽高
                        zIndex: 1028,
                        content: viewTouristGroupTemplate(data),
                        scrollbar: false,
                        success: function() {
                        }
                    })
                }
            }
        })
    };

    /**
     * 组团社与业务部选项
     * @param  {[type]} $obj 选择对象
     * @return {[type]}
     */
    arrangeIndividual.chosenPartAgenOrBussiness = function($that) {
        var $parents = $that.closest('div'),
            $val = $that.val();
        if ($val == 1) { //组团社
            $parents.find('.T-chosenPB').hide();
            $parents.find('.T-fromBussinessGroup').hide();
            $parents.find('.T-fromPartnerAgency').show();
        } else if ($val == 2) { //业务部
            $parents.find('.T-chosenPB').hide();
            $parents.find('.T-fromPartnerAgency').hide();
            $parents.find('.T-fromBussinessGroup').show();
        } else if ($val == '') {
            $parents.find('.T-chosenPB').show();
            $parents.find('.T-fromPartnerAgency').hide();
            $parents.find('.T-fromBussinessGroup').hide();
        }
        $parents.find('.T-fromPartnerAgency').val("");
        $parents.find('.T-fromBussinessGroup').val("");
        $parents.find('[name=fromPartnerAgencyId]').val("");
        $parents.find('[name=fromBussinessGroupId]').val("");
    };

    //获取value值
    arrangeIndividual.getVal = function(obj, name) {
        return obj.find("[name=" + name + "]").val();
    };
    exports.init = arrangeIndividual.initModule;
});
