define(function(require, exports) {
    var menuKey = "arrange_tourist",
        tabId = "tab-" + menuKey + "-content",
        tabIdInner = "tab-" + menuKey + "-innerTransfer-content",
        tabIdOut = "tab-" + menuKey + "-outTransfer-content",
        rule = require("./rule"),
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        listTransferTemplate = require("./view/listTransfer"),
        viewTouristGroupTemplate = require("./view/viewTouristGroup"),
        inTransferTemplate = require("./view/inTransfer"),
        innerEditFeeTemplate = require("./view/innerEditFee"),
        outEditFeeTemplate = require("./view/outEditFee"),
        outTransferTemplate = require("./view/outTransfer"),
        chooseMergeTemplate = require("./view/chooseMerge"),
        chosenTripPlanTemplate = require("./view/chooseTriPlan"),
        chosenMergenTripPlanTemplate = require("./view/chosenMergenTripPlan");

    var arrangeTourist = {
        editFeeLayer: "",
        addGroupTemplateLayer: "",
        chosenMergenTripPlanlayer: "",
        touristGroupMergeData: {
            touristGroupMergeList: []
        },
        touristGroupId: [],
        transferId: [],
        visFromBusinessList: [],
        visFromPartnerList: [],
        vislineProductList: [],

        groupFromBusinessList: [],
        groupFromPartnerList: [],
        grouplineProductList: [],

        transferFromBusinessList: [],
        transferFromPartnerList: [],
        transferProductList: []

    };

    var getFeeItemPayTypeOptions =  {
            payType : 1
    };

    /**
     * [initModule description]
     * @return {[type]} [description]
     */
    arrangeTourist.initModule = function() {

        //请求搜索数据
        arrangeTourist.caCheAutocomData(0);
        arrangeTourist.caCheAutocomData(2);

        var html = listMainTemplate();
        Tools.addTab(menuKey, "并团转客", html);
        //初始化时间控件
        arrangeTourist.initDatePicker($("#" + tabId));

        //初始化散拼、团体、转客时间
        arrangeTourist.init_event();
    };


    /**
     * init_event散客 团体 转客 初始化绑定事件
     * @return {[type]} [description]
     */
    arrangeTourist.init_event = function() {
        var $visitorObj = $('#T-Visitor-list'),
            $TransferObj = $('#T-Transfer-list');
        //散拼
        $visitorObj.find('.T-visitorTourist-search').off().on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $searchArgumentsForm = $visitorObj.find('form'),
                customerType = 0,
                divId = "T-Visitor-list";
            //console.info(searchArguments);
            //选择组团社与业务部
            var $selectObj = $visitorObj.find(".T-choosePart-chooseFromB");
            $selectObj.on('change', function() {
                var $that = $(this);
                arrangeTourist.chosenPartAgenOrBussiness($that);
            });
            arrangeTourist.touristGroupId = [];
            arrangeTourist.touristGroupMergeData.touristGroupMergeList = [];
            arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);

        });
        //转客
        $TransferObj.find('.T-Transfer-search').off().on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $searchArgumentsForm = $TransferObj.find('form'),
                customerType = 2,
                divId = "T-Transfer-list";
            //组团社与业务部选择
            var $selectObj = $TransferObj.find(".T-choosePart-chooseFromB");
            $selectObj.on('change', function() {
                var $that = $(this);
                arrangeTourist.chosenPartAgenOrBussiness($that);
            });
            //转客清空操作
            arrangeTourist.transferId = [];
            arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
        });


        //线路产品的AutocomPlate数据
        var $visitorLinPro = $visitorObj.find('.T-Choose-linProList'),
            $transferLinPro = $TransferObj.find('.T-Choose-linProList');

        arrangeTourist.chooseLineProduct($visitorLinPro, 0);
        arrangeTourist.chooseLineProduct($transferLinPro, 2);

        //业务部AutocomPlate数据
        var $visitorfromBus = $visitorObj.find('.T-fromBussinessGroup'),
            $transferfromBus = $TransferObj.find('.T-fromBussinessGroup');

        arrangeTourist.chooseBusinessGroup($visitorfromBus, 0);
        arrangeTourist.chooseBusinessGroup($transferfromBus, 2);

        //组团社AutocomPlate数据
        var $visitorPart = $visitorObj.find('.T-fromPartnerAgency'),
            $transferPart = $TransferObj.find('.T-fromPartnerAgency');

        arrangeTourist.choosePartnerAgency($visitorPart, 0);
        arrangeTourist.choosePartnerAgency($transferPart, 2);

        //模拟Click事件
        $visitorObj.find('.T-visitorTourist-search').trigger('click');
        $TransferObj.find('.T-Transfer-search').trigger('click');

    };



    /**
     * [listArrangeTourist description]
     * @param  {[type]} customerType 0--散拼   1--团体   ""--转客
     * @param  {[type]} divId        [description]
     * @return {[type]}              [description]
     */
    arrangeTourist.listArrangeTourist = function(page, $searchArgumentsForm, customerType, divId) {
        var formData = $searchArgumentsForm.serializeJson();
        formData.customerType = customerType;
        formData.pageNo = page;
        var $divIdObj = $('#' + divId);
        $.ajax({
            url: KingServices.build_url("touristGroup", "getTouristGroupForTripPlan"),
            type: "POST",
            data: formData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.searchParam = data.searchParam;
                    data.touristGroupList = JSON.parse(data.touristGroupList);
                    if (customerType == 0) { //散拼
                        var html = listTemplate(data);
                        html = filterUnAuth(html);
                        $divIdObj.find('.T-touristVisitor-list').html(html);
                        //初始化页面事件
                        arrangeTourist.init_visitorEvent();
                        //散拼分页选中效果
                        arrangeTourist.pagerChecked(customerType, divId);
                    } else if (customerType == 2) { //转客
                        var html = listTransferTemplate(data);
                        html = filterUnAuth(html);
                        $divIdObj.find('.T-Transfer-list').html(html);
                        //初始化页面事件
                        arrangeTourist.init_transferEvent();

                        //转客分页选中效果
                        arrangeTourist.pagerTransferChecked(customerType, divId);
                    };
                    // 绑定共用翻页组件
                    laypage({
                        cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeTourist.listArrangeTourist(obj.curr - 1, $searchArgumentsForm, customerType, divId);
                            }
                        }
                    });

                }
            }
        })
    };

    /**
     * [pagerChecked 分页选中效果
     * @return {[type]} [description]
     */
    arrangeTourist.pagerChecked = function(customerType, divId) {
        //分页--勾选游客小组Id
        if (customerType == '0' && arrangeTourist.touristGroupId.length > 0) {
            for (var i = 0; i < arrangeTourist.touristGroupId.length; i++) {
                var touristGroupId = arrangeTourist.touristGroupId[i].touristGroupId,
                    $vistorTr = $('#' + divId).find('tr');
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
     * [pagerTransferChecked 转客分页选中效果
     * @return {[type]} [description]
     */
    arrangeTourist.pagerTransferChecked = function(customerType, divId) {
        //分页--勾选游客小组Id
        if (customerType == '2' && arrangeTourist.transferId.length > 0) {
            for (var i = 0; i < arrangeTourist.transferId.length; i++) {
                var transferId = arrangeTourist.transferId[i].id,
                    $transferTr = $('#' + divId).find('tr');
                $transferTr.each(function(index) {
                    var id = $transferTr.eq(index).data('value');
                    if (!!id && !!transferId && id == transferId) {
                        $transferTr.eq(index).find('.T-cheked').prop('checked', true);
                    };
                });
            }
        };

    };


    /**
     * init_visitorEvent 散拼报表绑定事件
     * @return {[type]} [description]
     */
    arrangeTourist.init_visitorEvent = function() {
        var $visitorObj = $('#T-Visitor-list');
        //重置计算
        arrangeTourist.choosenAdultAndChildCount($visitorObj);

        //查看游客小组
        $visitorObj.find('.T-arrageVisitor-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value');
            arrangeTourist.viewTouristGroup(id);
        });

        Tools.descToolTip($visitorObj.find(".T-ctrl-tip"), 1);

        //散拼checkbox绑定事件
        $visitorObj.find(".T-touristGroupMergeCheckBox").off().click(arrangeTourist.addTouristGroupMerge);


        $visitorObj.find('.T-start-touristGroup-merge').off().on('click', function(event) {
            event.preventDefault();
            var list = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
            if (!!list && list.length > 0) {
                /* Act on the event */
                arrangeTourist.initChosenMergenTripPlan();
            } else {
                showMessageDialog($("#confirm-dialog-message"), "你还没有勾选任何并团小组");
            };

        });

    };

    /**
     * [initChosenTripMergen 初始化选择--生成计划
     * @return {[type]} [description]
     */
    arrangeTourist.initChosenMergenTripPlan = function() {
        var html = chosenMergenTripPlanTemplate();
        arrangeTourist.chosenMergenTripPlanlayer = layer.open({
            type: 1,
            title: "选择生成计划",
            skin: 'layui-layer-rim', //加上边框
            area: '85%', //宽高
            zIndex: 1029,
            content: html,
            scrollbar: false,
            success: function() {
                arrangeTourist.chosenTripPlan(0, "");
                arrangeTourist.mergenTripPlan();
            }
        });

    };

    /**
     * chosenTripPlan 选择计划
     * @return {[type]} [description]
     */
    arrangeTourist.chosenTripPlan = function(page, searchKey) {
        var $chooseTipPlan = $("#chooseTipPlan");
        $.ajax({
            url: "" + APP_ROOT + "back/tripPlan.do?method=findNoStartTripPlanList&token=" + $.cookie("token") + "&menuKey=" + menuKey + "&operation=view",
            showLoading: false,
            data: "searchKey=" + searchKey + "&pageNo=" + page,
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.tripPlanList = JSON.parse(data.tripPlanList);
                    var html = chosenTripPlanTemplate(data);
                    $chooseTipPlan.find('.T-chooseTipPlan-Content').html(html);
                    // 再调整对话框的高度
                    $(window).trigger('resize');
                    arrangeTourist.initchooseTipP_Event($chooseTipPlan);
                    // 绑定共用翻页组件
                    laypage({
                        cont: $chooseTipPlan.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeTourist.chosenTripPlan(obj.curr - 1, searchKey);
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
    arrangeTourist.mergenTripPlan = function() {
        var $mergenTripPlan = $("#mergenTripPlan"),
            $data = arrangeTourist.touristGroupMergeData;
        if (!!$data.touristGroupMergeList && $data.touristGroupMergeList.length > 0) {
            var html = chooseMergeTemplate($data);
            $mergenTripPlan.find('.T-mergenTripPlan-Content').html(html);
            arrangeTourist.mergTripP_Event($mergenTripPlan);
        }

    };


    /**
     * initchooseTipP_Event 选择计划绑定事件
     * @return {[type]} [description]
     */
    arrangeTourist.initchooseTipP_Event = function($chooseTipPlan) {
        var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
        mergeDataJson = JSON.stringify(mergeDataJson);
        var tripPlanId = "";
        var mergeDataList = arrangeTourist.touristGroupMergeData.touristGroupMergeList,
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
            arrangeTourist.chosenTripPlan(0, searchKey);
        });

        //确认
        $chooseTipPlan.find('.T-savechooseTipPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $chooseMergeTr = $chooseTipPlan.find(".T-chosenTrip-list").children('tr');
            $chooseMergeTr.each(function(i) {
                if ($chooseMergeTr.eq(i).find(".ridioCheck").is(":checked") == true) {
                    tripPlanId = $chooseMergeTr.eq(i).data("value");
                }
            });
            if (!!tripPlanId && tripPlanId != null) {
                //关闭layer层
                layer.close(arrangeTourist.chosenMergenTripPlanlayer);
                KingServices.updateSingleTripPlan(tripPlanId,mergeTouristGroupIdJson);
                //清空游客小组Id
                arrangeTourist.touristGroupId = [];
                //数据刷新
                var divId = "T-Visitor-list",
                    $VisitorObj = $('#' + divId),
                    $searchArgumentsForm = $VisitorObj.find('form'),
                    customerType = 0;
                    arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
            } else {
                showMessageDialog($("#confirm-dialog-message"), "请选择计划");
            };
        });

        //取消操作
        $chooseTipPlan.find('.T-cancelChooseTipPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(arrangeTourist.chosenMergenTripPlanlayer);
        });

    };

    /**
     * mergTripP_Event 生成计划事件的绑定
     * @return {[type]} [description]
     */
    arrangeTourist.mergTripP_Event = function($mergenTripPlan) {

        //取消
        $mergenTripPlan.find('.T-cancelMergenTripPlan').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            layer.close(arrangeTourist.chosenMergenTripPlanlayer);
        });

        //保存
        $mergenTripPlan.find('.T-saveMergenTripPlan').on('click', function(event) {
            /* Act on the event */
            event.preventDefault();
            var mergeDataList = arrangeTourist.touristGroupMergeData.touristGroupMergeList,
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
                layer.close(arrangeTourist.chosenMergenTripPlanlayer);
                KingServices.addTripPlan(args={id : id,lineProName : lineProName,startTime : startTime,days : days},mergeTouristGroupIdJson);
                //清空游客小组Id
                arrangeTourist.touristGroupId = [];
                //在数组中移除选中生成计划记录
                arrangeTourist.touristGroupMergeData.touristGroupMergeList.splice(0,arrangeTourist.touristGroupMergeData.touristGroupMergeList.length);
                //数据刷新
                var divId = "T-Visitor-list",
                    $VisitorObj = $('#' + divId),
                    $searchArgumentsForm = $VisitorObj.find('form'),
                    customerType = 0;
                    arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
            } else {
                showMessageDialog($("#confirm-dialog-message"), "请选择线路产品");
            };
        });
    };


    /**
     * canCelChecked 保存后的取消选中操作
     * @return {[type]} [description]
     */
    arrangeTourist.canCelChecked = function($visitorObj) {
        var $trList = $visitorObj.find('tr');
        $trList.each(function(index) {
            $trList.eq(index).find('.T-cheked').prop("checked", false)
        });
    };

    /**
     * addTouristGroupMerge 散拼信息
     */
    arrangeTourist.addTouristGroupMerge = function() {
        var $visitorObj = $('#T-Visitor-list'),
            $merge = $visitorObj.find('.T-arrangeTouristMergeList .list'),
            $that = $(this),
            $parents = $that.closest('tr'),
            memberCount = $parents.attr("data-entity-memberCount");
        //计算已选人数
        arrangeTourist.choosenAdultAndChildCount($visitorObj);

        if (memberCount == 0) {
            $(this).prop("checked", false);
            showMessageDialog($("#confirm-dialog-message"), "未分团人数为0，不能加入并团选择");
            return;
        }
        var lineProductId = $parents.attr("data-entity-id"),
            startTime = $parents.attr("data-entity-startTime"),
            days = $parents.attr("data-entity-days"),
            lineProductName = $parents.attr("data-entity-name"),
            lineProductType = $parents.attr("data-entity-type");
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
            arrangeTourist.touristGroupMergeData.touristGroupMergeList.push(touristGroupMerge);
            console.log(arrangeTourist.touristGroupMergeData.touristGroupMergeList);
            arrangeTourist.touristGroupId.push(touristGroupIds);

        } else {
            //若取消选中状态---用于生成计划查询数组
            arrangeTourist.removeTouristGroupMergeData(lineProductId, startTime);
            //移除取消分页选中效果
            arrangeTourist.removeTouristGroupId(touristGroupId);

        }

    };

    /**
     * removeTouristGroupMergeData 删除散拼
     * @param  {[type]} $merge        [description]
     * @param  {[type]} lineProductId [description]
     * @param  {[type]} startTime     [description]
     * @return {[type]}               [description]
     */
    arrangeTourist.removeTouristGroupMergeData = function(lineProductId, startTime) {
        var touristGroupMergeList = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
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
    arrangeTourist.removeTouristGroupId = function(touristGroupId) {
        for (var i = 0; i < arrangeTourist.touristGroupId.length; i++) {
            if (arrangeTourist.touristGroupId[i].touristGroupId == touristGroupId) {
                arrangeTourist.touristGroupId.splice(i, 1);
                break;
            }
        }
    };

    /**
     * init_transferEvent 转客报表绑定事件
     * @return {[type]} [description]
     */
    arrangeTourist.init_transferEvent = function() {
        var $transferObj = $('#T-Transfer-list'),
            divId = " T-Transfer-list ",
            $searchArgumentsForm = $transferObj.find('form'),
            customerType = 2;
        //重置计算
        arrangeTourist.choosenAdultAndChildCount($transferObj);

        //查看小组信息
        $transferObj.find('.T-arrageTransfer-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value');
            arrangeTourist.viewTouristGroup(id);
        });

        Tools.descToolTip($transferObj.find(".T-ctrl-tip"), 1);


        //内转
        $transferObj.find('.T-arrageTransfer-inner').on('click', function(event) {
            event.preventDefault();
            var type = 1,action = 'innerTransfer';
            /* Act on the event */
            arrangeTourist.inOutTransferTourist($transferObj, type,action);

        });

        //外转
        $transferObj.find('.T-arrageTransfer-out').on('click', function(event) {
            event.preventDefault();
            var type = 2,action ='outTransfer';   
            /* Act on the event */
            arrangeTourist.inOutTransferTourist($transferObj, type ,action);

        });


        //计算转客已选人数
        $transferObj.find('.T-transferCheckBox').on('click', function(event) {
            var $that = $(this);
            arrangeTourist.chekedTransfer($that);
            arrangeTourist.choosenAdultAndChildCount($transferObj);
        });

    };


    //转客Id缓存用于分页选中记录
    arrangeTourist.chekedTransfer = function($that) {
        var id = $that.closest('tr').data('value');
        if ($that.is(":checked")) {
            var transferIds = {
                id: id
            };
            arrangeTourist.transferId.push(transferIds);
        } else {
            for (var i = 0; i < arrangeTourist.transferId.length; i++) {
                console.info(arrangeTourist.transferId[i].transferIds);
                if (arrangeTourist.transferId[i].id == id) {
                    arrangeTourist.transferId.splice(i, 1);
                    break;
                }
            }
        };
    };



    /**
     * choosenAdultAndChildCount 已选人数的计算
     * @return {[type]} [description]
     */
    arrangeTourist.choosenAdultAndChildCount = function($tab) {
        var sumAdultCount = 0,
            sumChildCount = 0,
            $trList = $tab.find("tbody").children('tr');
        $trList.each(function() {
            var $that = $(this);
            if ($that.find(".T-cheked").is(":checked")) {
                sumAdultCount += parseInt($(this).attr("data-entity-adultcount"));
                sumChildCount += parseInt($(this).attr("data-entity-childcount"));
            }
        });
        $tab.find(".T-chosenAdultAndChildCount").text("大人" + sumAdultCount + "小孩" + sumChildCount + "");
    };

    /**
     * viewTouristGroup 查看游客小组
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    arrangeTourist.viewTouristGroup = function(id) {
        $.ajax({
            url: KingServices.build_url("tripPlan", "getMemberList"),
            data: "touristGroupId=" + id + "",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var memberList = JSON.parse(data.memberList);
                    data.memberList = memberList;
                    //var  memberList=data.memberList; 
                    var html = viewTouristGroupTemplate(data);
                    var viewGroupTemplateLayer = layer.open({
                        type: 1,
                        title: "查看小组信息",
                        skin: 'layui-layer-rim', //加上边框
                        area: '60%', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                        success: function() {

                        }
                    })
                }
            }
        })
    };


    /**
     * inOutTransferTourist 内转/外转报表操作
     * @param  {[type]} $transferObj 内转转客Dom对象
     * @return {[type]}              内外转标识
     */
    arrangeTourist.inOutTransferTourist = function($transferObj, type ,action) {
        if (!!arrangeTourist.transferId && arrangeTourist.transferId.length > 0) {
            var ids = JSON.stringify(arrangeTourist.transferId);
            $.ajax({
                url: KingServices.build_url("touristGroup", "getTouristGroupByIdsForTransit"),
                type: "POST",
                data: "ids=" + encodeURIComponent(ids)+ "&action=" + action,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        data.touristGroupJson = JSON.parse(data.touristGroupJson);
                        if (type == 1) { //内转
                            var html = inTransferTemplate(data);
                            Tools.addTab(menuKey + "-innerTransfer", "内转操作", html);
                            //初始化时内转页面事件
                            arrangeTourist.init_innerTransfer_Event();

                        } else { //外转 
                            var html = outTransferTemplate(data);
                            Tools.addTab(menuKey + "-outTransfer", "外转操作", html);
                            //初始化时内转页面事件
                            arrangeTourist.init_outTransfer_Event();

                        };
                    }
                }
            })

        } else {
            showMessageDialog($("#confirm-dialog-message"), "请选择游客小组", function() {

            });
        };
    };

    /**
     * init_innerTransfer_Event 初始化内转报表操作
     * @return {[type]} [description]
     */
    arrangeTourist.init_innerTransfer_Event = function() {
        var $innerTransfer = $("#" + tabIdInner);
        //查看内转小组信息
        $innerTransfer.find('.T-viewTouristGroup').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $that = $(this), id = $that.closest('tr').data('value');
            arrangeTourist.viewTouristGroup(id);
        });

        //填写费用
        $innerTransfer.find('.T-editFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value'),
                type = 1;

            arrangeTourist.innerOutEditFee(id, type);
        });


        var $businessObj = $innerTransfer.find(".T-Chosen-businessGroup"),
            $opUserObj = $innerTransfer.find(".T-Chosen-opUser");

        //获取内转对应的部门Autocomplate
        arrangeTourist.getBusinessGroup($businessObj);

        //获取责任计调Autocomplate
        arrangeTourist.getopUserList($opUserObj);


        //内转保存操作
        $innerTransfer.find(".T-saveTransfer").on('click', function(event) {
            event.preventDefault();
            //内转保存操作
            arrangeTourist.saveInTransfer($innerTransfer);
        });


        //绑定是否全选
        $innerTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
            /* Act on the event */
            var $that = $(this);
            arrangeTourist.checkTransferAll($innerTransfer, $that, "tbody");

        });

    };



    /**
     * init_outTransfer_Event 外转操作绑定事件
     * @return {[type]} [description]
     */
    arrangeTourist.init_outTransfer_Event = function() {
        var $outTransfer = $("#" + tabIdOut);
        //查看外转小组信息
        $outTransfer.find('.T-viewTouristGroup').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $that = $(this), id = $that.closest('tr').data('value');
            arrangeTourist.viewTouristGroup(id);
        });

        //填写费用--外转
        $outTransfer.find('.T-editFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value');
            type = 2;
            arrangeTourist.innerOutEditFee(id, type);
        });

        var $partnerObj = $outTransfer.find(".T-Chosen-partnerAgency");

        //获取外转对应的部门Autocomplate    partnerAgencyList
        arrangeTourist.getPartnerAgencyList($partnerObj);

        //外转保存操作
        $outTransfer.find('.T-saveOutTransfer').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.saveOutTransfer($outTransfer);
        });

        //外转取消
        $outTransfer.find('.T-cancelOutTransfer').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            closeTab(menuKey + "-outTransfer");
        });

        //绑定是否全选
        $outTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
            /* Act on the event */
            var $that = $(this);
            arrangeTourist.checkTransferAll($outTransfer, $that, "tbody");

        });
    };

    /** 
     * saveOutTransfer 外转保存
     * @return {[type]} [description]
     */
    arrangeTourist.saveOutTransfer = function($outTransfer) {
        var touristGroupId = [];
        $outTransfer.find(".T-transferTouristGroup").children('tr').each(function() {
            var $that = $(this);
            if ($that.find(".T-TransferCheckBox").is(":checked")) {
                var id = $that.data("value");
                var ids = {
                    id: id
                };
                touristGroupId.push(ids);
            }
        });
        var partnerAgencyId = arrangeTourist.getVal($outTransfer, "partnerAgencyId") || 0;
        if (touristGroupId.length == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请勾选小组")
        } else if (partnerAgencyId == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请选择同行地接")
        } else {
            $.ajax({
                url: KingServices.build_url("transTourist", "saveTransfer"),
                type: "POST",
                data: {
                    touristGroupId: JSON.stringify(touristGroupId),
                    partnerAgencyId: partnerAgencyId
                },
                success: function(data) {
                    if (showDialog(data)) {
                        showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                            Tools.closeTab(menuKey + "-outTransfer");
                            arrangeTourist.transferId = [];
                            var customerType = 2,
                                divId = "T-Transfer-list",
                                $TransferObj = $("#" + divId);
                            var $searchArgumentsForm = $TransferObj.find('form');
                            arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
                            exportXLS(KingServices.build_url('transTourist', 'exportTransfer') + "&idJson=" + JSON.stringify(touristGroupId));
                        });
                    }
                }
            })
        }

    };

    /**
     * checkTransferAll 全选组件
     * @param  {[type]} $tab  TabId--唯一标识
     * @param  {[type]} $that 当前点击对象
     * @param  {[type]} tbody 
     * @return {[type]}
     */
    arrangeTourist.checkTransferAll = function($tab, $that, tbody) {
        var $trList = $tab.find("" + tbody).children('tr'),
            $is_Checked = $that.is(':checked');
        if ($is_Checked) { //选中
            $trList.each(function(i) {
                $trList.eq(i).find('.T-TransferCheckBox').prop("checked", true);
            });
        } else {
            $trList.each(function(i) {
                $trList.eq(i).find('.T-TransferCheckBox').prop("checked", false);
            });
        };
    };
    /**
     * innerEditFee innerEditFee 内转费用填写
     * @param  {[type]} id 游客小组Id
     * @return {[type]}    1---内转 ---2--  外转
     */
    arrangeTourist.innerOutEditFee = function(id, type) {
        if (type == 1) {
            $.ajax({
                url: KingServices.build_url("innerTransferOperation", "getInTransferFeeDetails"),
                type: "POST",
                data: "id=" + id + "",
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var data = {
                            cashFlag : data.cashFlag,
                            subsection : data.subsection,
                            touristGroup : JSON.parse(data.touristGroup),
                            touristGroupFeeList : JSON.parse(data.touristGroupFeeList),
                            innerTransferFeeList : JSON.parse(data.innerTransferFeeList),
                            getPayType : getFeeItemPayTypeOptions.payType
                        };
                        var html = innerEditFeeTemplate(data);
                        arrangeTourist.editFeeLayer = layer.open({
                            type: 1,
                            title: "编辑内转费用信息",
                            skin: 'layui-layer-rim', //加上边框
                            area: '60%', //宽高
                            zIndex: 1028,
                            content: html,
                            scrollbar: false,
                            success: function() {
                                //初始化编辑费用事件
                                arrangeTourist.innerEditFee_Event(type);
                            }
                        })
                    }
                }
            });

        } else {
            $.ajax({
                url: KingServices.build_url("transTourist", "getTransfer"),
                type: "POST",
                data: "id=" + id + "",
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var data = {  
                             cashFlag : data.cashFlag,
                             subsection : data.subsection,
                             touristGroup : JSON.parse(data.touristGroup),
                             touristGroupFeeList : JSON.parse(data.touristGroupFeeList),
                             getPayType : getFeeItemPayTypeOptions.payType
                        };
                        var html = outEditFeeTemplate(data);
                        arrangeTourist.editFeeLayer = layer.open({
                            type: 1,
                            title: "编辑外转费用信息",
                            skin: 'layui-layer-rim', //加上边框
                            area: '60%', //宽高
                            zIndex: 1028,
                            content: html,
                            scrollbar: false,
                            success: function() {
                                //初始化编辑费用事件
                                arrangeTourist.outEditFee_Event(type);
                            }
                        })
                    }
                }
            });

        };
    };

    /**
     * innerEditFee_Event 编辑费用事件
     * @return {[type]} [description]
     */
    arrangeTourist.innerEditFee_Event = function(type) {
        var $editFeeObj = $("#T-innerEditFeeMain"),

            //精度限制
            $price = $editFeeObj.find('.T-price'),
            $count = $editFeeObj.find('.T-count');
        Tools.inputCtrolFloat($price);
        Tools.inputCtrolFloat($count);

        $editFeeObj.find(".T-newEditFee").on('click', function(event) {
            //新增内外转编辑费用
            arrangeTourist.newAddFee($editFeeObj, type);
        });
        //计算应付款
        arrangeTourist.PayMoneyF($editFeeObj);

        $editFeeObj.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($editFeeObj);
        });

        $editFeeObj.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($editFeeObj);
        });

        //根据费用单价、数量计算金额
        arrangeTourist.calcPayMoney($editFeeObj);
        $editFeeObj.find(".T-calc").trigger('change');

        //提交编辑转客费用信息
        $editFeeObj.find('.T-updateFee').on('click', function(event) {
            event.preventDefault();
            var type=1;
            /* Act on the event */
            arrangeTourist.saveTransFee($editFeeObj, type);
        });

        //绑定删除
        $editFeeObj.find(".T-delete").off().on("click", function() {
            var $that = $(this),
                $tr = $that.closest('tr');
            var id = $tr.attr("data-entity-id");
            arrangeTourist.delTransferData(id, $tr, $editFeeObj);
        });

    };


    /**
     * outEditFee_Event  外转 
     * @return {[type]} [description]
     */
    arrangeTourist.outEditFee_Event = function(type) {

        var $outFeeObj = $("#T-outEditFeeMain"),

            //精度限制
            $price = $outFeeObj.find('.T-price'),
            $count = $outFeeObj.find('.T-count');
        Tools.inputCtrolFloat($count);
        Tools.inputCtrolFloat($price);

        $outFeeObj.find(".T-newEditFee").on('click', function(event) {
            //新增内外转编辑费用
            arrangeTourist.newAddFee($outFeeObj, type);
        });

        //绑定删除分团转客信息
        $outFeeObj.find(".T-delete").off().on("click", function() {
            var $that = $(this),
                $tr = $that.closest('tr');
            var id = $tr.attr("data-entity-id");
            arrangeTourist.delOutTransfer(id, $tr, $outFeeObj);
        });

        //计算应付款
        arrangeTourist.PayMoneyF($outFeeObj);

        $outFeeObj.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($outFeeObj);
        });

        $outFeeObj.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($outFeeObj);
        });

        //根据费用单价、数量计算金额
        arrangeTourist.calcPayMoney($outFeeObj);
        $outFeeObj.find(".T-calc").trigger('change');

        //提交编辑转客费用信息
        $outFeeObj.find('.T-updateFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var type=2;
            arrangeTourist.saveTransFee($outFeeObj, type);
        });
    };


    /**
     * calcPayMoney 根据费用【单价、数量】项目计算金额
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.calcPayMoney = function($tab) {
        $tab.find('.T-innerOutEditFeeTbody').on('change', '.T-calc', function(event) {
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
                };

            } else if ($that.hasClass('T-price')) { //若价格改变
                var count = $tr.find('.T-count').val(),
                    price = $tr.find('.T-price').val(),
                    payMoney;
                if (!isNaN(price) && !isNaN(count)) {
                    payMoney = parseFloat(price * count);
                    $tr.find('.T-payMoney').val(payMoney);
                };
            };
        });
    };



    /**
     * [newAddFee 给新增费用绑定事件]
     * @param  {[type]} $tab      [description]
     * @return {[type]}           [description]
     */
    arrangeTourist.newAddFee = function($tab, type) {
        var html='';
            html += "<tr><td><select name=\"type\" class=\"col-sm-10 col-sm-offset-1\"><option value=\"1\">大人结算价</option><option value=\"2\">小孩结算价</option>";
            if (type==2) {
                 html+="<option value=\"3\">中转结算价</option>";
            };
            html+="<option value=\"4\">车辆费用</option><option value=\"5\">餐厅费用</option><option value=\"6\">保险费用</option>"+
            "<option value=\"7\">导服费</option><option value=\"8\">酒店费用</option><option value=\"9\">景区费用</option>"+
            "<option value=\"10\">自费费用</option><option value=\"11\">票务费用</option><option value=\"12\">其他费用</option></select></td>" +
            "<td><input  name=\"count\" type=\"text\" class=\"col-sm-12  no-padding-right count T-count T-calc F-float F-count\" /></td>" +
            "<td><input  name=\"price\" type=\"text\" class=\"col-sm-12  no-padding-right price T-price T-calc F-float F-money\" /></td>" +
            "<td><input  name=\"payMoney\" type=\"text\" class=\"col-sm-12  no-padding-right T-payMoney F-float F-money\" readonly=\"readonly\" /></td>" +
            "<td><input  name=\"remark\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>" +
            "<td><a class=\"cursor T-delete\">删除</a></td></tr>";
        var $tbody = $tab.find(".T-innerOutEditFeeTbody");
        $tbody.append(html);
        //精度限制
        var $price = $tbody.find('.T-price'),
            $count = $tbody.find('.T-count');
        Tools.inputCtrolFloat($price);
        Tools.inputCtrolFloat($count);
        // 更新表单验证的事件绑定
        //rule.update(validator);   
        //绑定删除分团转客信息
        if (type == '1') {
            $tab.find(".T-delete").off().on("click", function() {
                var $that = $(this),
                    $tr = $that.closest('tr');
                var id = $tr.attr("data-entity-id");
                arrangeTourist.delTransferData(id, $tr, $tab);
            });

        } else {
            $tab.find(".T-delete").off().on("click", function() {
                var $that = $(this),
                    $tr = $that.closest('tr');
                var id = $tr.attr("data-entity-id");
                arrangeTourist.delOutTransfer(id, $tr, $tab);
            });
        };


        $tab.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($tab);
        });

        $tab.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeTourist.PayMoneyF($tab);
        });

        //重新计算
        arrangeTourist.PayMoneyF($tab);

    };



    /**
     * 逻辑删除&&及时删除
     * @param  {[type]} id  费用Id
     * @param  {[type]} $tr f行对象
     * @return {[type]}     [description]
     */
    arrangeTourist.delTransferData = function(id, $tr, $tab) {
        if (id != null && id != "") {
            $.ajax({
                url: KingServices.build_url("innerTransferOperation", "deleteInTransferFee"),
                type: "POST",
                data: "id=" + id,
                success: function(data) {
                    $tr.remove();
                    arrangeTourist.PayMoneyF($tab);
                }
            });
        } else {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.remove();
                arrangeTourist.PayMoneyF($tab);
            });
        }
    };

    /**
     * delOutTransfer        外转删除
     * @param  {[type]} id   [description]
     * @param  {[type]} $tr  [description]
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.delOutTransfer = function(id, $tr, $tab) {
        if (!!id && 　id != null) {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.addClass('deleted');
                $tr.hide();
                arrangeTourist.PayMoneyF($tab);
            });
        } else {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.remove();
                arrangeTourist.PayMoneyF($tab);
            });
        };
    };

    /**
     * [PayMoneyF 付款账务--应付/现付/已付的计算]
     */
    arrangeTourist.PayMoneyF = function($tab) {
        var needPayMoney = 0, //transNeedPayAllMoney   transPayedMoney
            transNeedPayAllMoney = $tab.find("input[name=transNeedPayAllMoney]"), //应付
            transPayedMoney = $tab.find("input[name=transPayedMoney]"), //已付
            transCurrentPM = $tab.find("input[name=transCurrentPayedMoney]"), //现付
            trList = $tab.find("tbody.T-innerOutEditFeeTbody").find("tr");

        for (i = 0; i < trList.length; i++) {
            var a = parseFloat(trList.eq(i).find(".count").val());
            var b = parseFloat(trList.eq(i).find(".price").val());
            if (isNaN(a)) {
                a = 0;
            }
            if (isNaN(b)) {
                b = 0;
            }
            needPayMoney += a * b;
        }
        //应付
        var transNeedPayAllM = transNeedPayAllMoney.val(needPayMoney.toFixed(2));
        //已付
        var payedMN = parseFloat(transPayedMoney.val());
        if (isNaN(payedMN)) {
            payedMN = 0;
        }
        //现付=应付-已付
        var transCurrent = transNeedPayAllM.val() - payedMN;

        if (isNaN(transCurrent)) {
            transCurrent = 0;
        }
        transCurrentPM.val(transCurrent);
    };

    /**
     * saveTransFee 提交转客费用信息
     * @return {[type]} [description]
     */
    arrangeTourist.saveTransFee = function($editFeeObj, type) {
        var transferFeeStatus = arrangeTourist.getVal($editFeeObj, "transferFeeStatus"),
            $innerForm = $editFeeObj.find('form'),
            id = arrangeTourist.getVal($editFeeObj, "touristGroupId"),
            cashFlag = arrangeTourist.getVal($editFeeObj, "isCurrent");
        var touristGroup = {
                "id": id,
                "transRemark": arrangeTourist.getVal($editFeeObj, "remark") || "无",
                "transPayedMoney": arrangeTourist.getVal($editFeeObj, "transPayedMoney") || 0,
                "transNeedPayAllMoney": arrangeTourist.getVal($editFeeObj, "transNeedPayAllMoney") || 0,
                "cashFlag": arrangeTourist.getVal($editFeeObj, "isCurrent") || 0
            },
            otherFeeList = [],
            inTransferFee = {
                innerTransferFeeList: []
            }
        var $tbodyFee = $editFeeObj.find(".T-innerOutEditFeeTbody"),
            $trNotDelete = $tbodyFee.find('tr:not(.deleted)'),
            otherFeeListLength = $trNotDelete.length;
        $trNotDelete.each(function(i) {
            var $that = $(this),
                FeeJson = {
                    type: arrangeTourist.getVal($that, "type"),
                    price: arrangeTourist.getVal($that, "price"),
                    count: arrangeTourist.getVal($that, "count"),
                    remark: arrangeTourist.getVal($that, "remark")
                };

            if (transferFeeStatus == 1) {
                FeeJson.id = $that.attr("data-entity-id");
            };

            otherFeeList.push(FeeJson);
            inTransferFee.innerTransferFeeList.push(FeeJson);
        });


        var otherFeeListDel = [];
        if (transferFeeStatus == 1) {
            $tbodyFee.find(" tr.deleted").each(function(i) {
                var otherFeeDel = {
                    "id": $(this).attr("data-entity-id")
                };
                otherFeeListDel.push(otherFeeDel);
            })
        };
        var formInData = $innerForm.serialize();
        var touristGroup = JSON.stringify(touristGroup),
            inTransferFee = JSON.stringify(inTransferFee),
            otherFeeList = JSON.stringify(otherFeeList),
            otherFeeListDel = JSON.stringify(otherFeeListDel);


        if (type == 1) {
            $.ajax({
                url: KingServices.build_url("innerTransferOperation", "saveInTransferFee"),
                data: formInData + "&inTransferFee=" + inTransferFee + "",
                type: "POST",
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                            layer.close(arrangeTourist.editFeeLayer);
                            if (data.success == 1) {
                                var inTransferTr = $(".T-transferTouristGroup-list").find("tr");
                                inTransferTr.each(function(i) {
                                    var id = inTransferTr.eq(i).data("value");
                                    if (id == data.touristGroupId) {
                                        inTransferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
                                        inTransferTr.eq(i).find(".T-needPay").html(data.transNeedPayAllMoney);
                                       
                                    }
                                })

                            }
                        })
                    }
                }
            })
        } else {
            $.ajax({
                url: KingServices.build_url("transTourist", "saveTransFee"),
                data: "touristGroup=" + encodeURIComponent(touristGroup) + "&otherFeeList=" + encodeURIComponent(otherFeeList) + "&otherFeeListDel=" + encodeURIComponent(otherFeeListDel) + "&cashFlag=" + cashFlag,
                type: "POST",
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                            layer.close(arrangeTourist.editFeeLayer);
                            if (data.success == 1) {
                                var transferTr = $(".T-transferTouristGroup").find("tr");
                                transferTr.each(function(i) {
                                    var id = transferTr.eq(i).data("value");
                                    if (id == data.id) {
                                        transferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
                                        transferTr.eq(i).find(".T-needPay").html(data.transNeedPayAllMoney);
                                       


                                    }
                                })

                            }
                        })
                    }
                }
            })
        }
    };


    /**
     * saveInTransfer 内转保存操作
     * @return {[type]} [description]
     */
    arrangeTourist.saveInTransfer = function($innerTransfer) {
        var touristGroupIds = [];
        $innerTransfer.find(".T-transferTouristGroup-list").children('tr').each(function() {
            var $that = $(this);
            if ($that.find(".T-TransferCheckBox").is(":checked")) {
                var id = $that.data("value");
                touristGroupIds.push(id);
            }
        });
        var businessGroupId = arrangeTourist.getVal($innerTransfer, "businessGroupId") || 0,
            opUserId = arrangeTourist.getVal($innerTransfer, "opUserId") || 0;
        if (touristGroupIds.length == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请勾选小组");
        } else if (businessGroupId == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请选择部门");
        } else if (opUserId == 0) {
            showMessageDialog($("#confirm-dialog-message"), "请选择责任计调");
        } else {
            $.ajax({
                url: KingServices.build_url("innerTransferOperation", "saveInTransfer"),
                type: "POST",
                data: "touristGroupIds=" + touristGroupIds + "&businessGroupId=" + businessGroupId + "&opUserId=" + opUserId,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                            Tools.closeTab(menuKey + "-innerTransfer");
                            arrangeTourist.transferId = [];
                            var customerType = 2,
                                divId = "T-Transfer-list",
                                $TransferObj = $("#" + divId);
                            var $searchArgumentsForm = $TransferObj.find('form');
                            arrangeTourist.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
                        });
                    }
                }
            })
        }
    };


    /**
     * getBusinessGroup 获取内转对应部门数据Autocomplate
     * @param  {[type]} $businessObj [description]
     * @return {[type]}              [description]
     */
    arrangeTourist.getBusinessGroup = function($businessObj) {
        $.ajax({
            url: KingServices.build_url("innerTransferOperation", "getBusinessGroupList"),
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var businessGroupList;
                    data.businessGroupList = JSON.parse(data.businessGroupList);
                    businessGroupList = data.businessGroupList;
                    if (!!businessGroupList && businessGroupList.length > 0) {
                        for (var i = 0; i < businessGroupList.length; i++) {
                            businessGroupList[i].value = businessGroupList[i].name;
                        };
                    }
                    $businessObj.autocomplete({
                        minLength: 0,
                        change: function(event, ui) {
                            if (ui.item == null) {
                                var parents = $(this).parent();
                                parents.find("input[name=businessGroupId]").val("");
                            }
                        },
                        select: function(event, ui) {
                            var _this = this,
                                parents = $(_this).parent();
                            parents.find("input[name=businessGroupId]").val(ui.item.id).trigger('change');
                        },
                        source: businessGroupList
                    }).unbind("click").click(function() {
                        var obj = this,
                            $obj = $(obj);
                        if (!!businessGroupList && businessGroupList.length) {
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



    /**
     * getPartnerAgencyList 获取外转同行地接
     * @param  {[type]} $partnerObj [description]
     * @return {[type]}             [description]
     */
    arrangeTourist.getPartnerAgencyList = function($partnerObj) {
        $.ajax({
            url: KingServices.build_url("partnerAgency", "findPartnerAgencyByOtherTravelAgency"),
            type: "POST",
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var partnerAgencyList;
                    data.partnerAgencyList = JSON.parse(data.partnerAgencyList);
                    partnerAgencyList = data.partnerAgencyList;
                    if (!!partnerAgencyList && partnerAgencyList.length > 0) {
                        for (var i = 0; i < partnerAgencyList.length; i++) {
                            partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
                        };
                    }
                    $partnerObj.autocomplete({
                        minLength: 0,
                        change: function(event, ui) {
                            if (ui.item == null) {
                                var parents = $(this).parent();
                                parents.find("input[name=partnerAgencyId]").val("");
                            }
                        },
                        select: function(event, ui) {
                            var _this = this,
                                parents = $(_this).parent();
                            parents.find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
                        },
                        source: partnerAgencyList
                    }).unbind("click").click(function() {
                        var obj = this,
                            $obj = $(obj);
                        if (!!partnerAgencyList && partnerAgencyList.length) {
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



    /**
     * 组团社与业务部选项
     * @param  {[type]} $obj 选择对象
     * @return {[type]}
     */
    arrangeTourist.chosenPartAgenOrBussiness = function($that) {
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



    /**
     * [cacheAutocomData 缓存Autocomplate数据
     * @param  {[type]} customerType 散客、团体、转客标识
     * @return {[type]}              [description]
     */
    arrangeTourist.caCheAutocomData = function(customerType) {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryForTripOperation"),
            type: 'POST',
            dataType: 'json',
            data: "customerType=" + customerType,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    if (customerType == 0) { //散客
                        arrangeTourist.visFromBusinessList = data.fromBusinessGroupList;
                        arrangeTourist.visFromPartnerList = data.fromPartnerAgencyList;
                        arrangeTourist.vislineProductList = data.lineProductList;
                    }else if (customerType == 2) { //转客
                        arrangeTourist.transferFromBusinessList = data.fromBusinessGroupList;
                        arrangeTourist.transferFromPartnerList = data.fromPartnerAgencyList;
                        arrangeTourist.transferProductList = data.lineProductList;
                    }
                }
            }
        })
    };




    /**
     * 线路产品Autocomplete
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.chooseLineProduct = function($obj, customerType) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var parents = $(this).parent();
                    parents.find("input[name=lineProductId]").val("");
                }
            },
            select: function(event, ui) {
                var _this = this,
                    parents = $(_this).parent();
                parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
            }
        }).unbind("click").click(function() {
            var $obj = $(this),
                list;
            if (customerType == 0) {
                list = arrangeTourist.vislineProductList;
            }else if (customerType == 2) {
                list = arrangeTourist.transferProductList;
            }
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].name;
                };
            } else {
                layer.tips('没有内容', obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            };
            $obj.autocomplete('option', 'source', list);
            $obj.autocomplete('search', '');
        })
    };






    /**
     * 业务部----Autocomplete
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.chooseBusinessGroup = function($obj, customerType) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var parents = $(this).parent();
                    parents.find("input[name=fromBussinessGroupId]").val("");
                }
            },
            select: function(event, ui) {
                var _this = this,
                    parents = $(_this).parent();
                parents.find("input[name=fromBussinessGroupId]").val(ui.item.id).trigger('change');
            }
        }).unbind("click").click(function() {
            var $obj = $(this),
                list;
            if (customerType == 0) {
                list = arrangeTourist.visFromBusinessList;
            }else if (customerType == 2) {
                list = arrangeTourist.transferFromBusinessList;
            }
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].businessGroupName;
                };
            } else {
                layer.tips('没有内容', obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            };
            $obj.autocomplete('option', 'source', list);
            $obj.autocomplete('search', '');
        })
    };

    /**
     * 组团社----Autocomplete
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.choosePartnerAgency = function($obj, customerType) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var parents = $(this).parent();
                    parents.find("input[name=fromPartnerAgencyId]").val("");
                }
            },
            select: function(event, ui) {
                var _this = this,
                    parents = $(_this).parent();
                parents.find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
            }
        }).unbind("click").click(function() {
            var $obj = $(this),
                list;
            if (customerType == 0) {
                list = arrangeTourist.visFromPartnerList;
            }else if (customerType == 2) {
                list = arrangeTourist.transferFromPartnerList;
            }
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].travelAgencyName;
                };
            } else {
                layer.tips('没有内容', obj, {
                    tips: [1, '#3595CC'],
                    time: 2000
                });
            };
            $obj.autocomplete('option', 'source', list);
            $obj.autocomplete('search', '');
        })
    };


    /**
     * getopUserList 获取责任计Autocomplate
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeTourist.getopUserList = function($obj) {
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (ui.item == null) {
                    var $that=$(this);
                        $that.closest('div').find("input[name=opUserId]").val("");
                }
            },
            select: function(event, ui) {
                var $that=$(this);$that.blur();
                    $that.closest('div').find("input[name=opUserId]").val(ui.item.id).trigger('change');
            }
        }).on('click', function() {
            var businessGroupId = $obj.closest('div').find('input[name=businessGroupId]').val();
            $.ajax({
                url: KingServices.build_url("innerTransferOperation", "getDutyOPUserList"),
                type: "POST",
                data: "businessGroupId=" + businessGroupId,
                success: function(data) {
                    var result = showDialog(data);
                    if (result) {
                        var listObj = data.opUserList;
                        if (listObj != null && listObj.length > 0) {
                            for (var i = 0; i < listObj.length; i++) {
                                listObj[i].value = listObj[i].realName;
                            }
                        } else {
                            layer.tips('没有内容', $obj, {
                                tips: [1, '#3595CC'],
                                time: 2000
                            });
                        }
                        $obj.autocomplete('option', 'source', listObj);
                        $obj.autocomplete('search', '');
                    }
                }
            });
        })
    };


    //获取value值
    arrangeTourist.getVal = function(obj, name) {
        return obj.find("[name=" + name + "]").val();
    };

    /**
     * 时间控件是初始化
     * @param  {[type]} $tabId 在外层ID
     * @return {[type]}
     */
    arrangeTourist.initDatePicker = function($tabId) {
        $tabId.find('.datepicker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        })

        var startTime = $tabId.find('[name="startTime"]').val();

        // 集合时间
        $tabId.find('input[name="setPlaceTime"]').datetimepicker({
            autoclose: true,
            todayHighlight: true,
            maxDate: new Date(startTime + ' 23:59:59'),
            format: 'L',
            language: 'zh-CN'
        });
        // 定时发送时间
        $tabId.find('input[name="executeTime"]').datetimepicker({
            autoclose: true,
            todayHighlight: true,
            maxDate: new Date(startTime + ' 06:00:00'),
            format: 'L',
            language: 'zh-CN'
        });
    };

    exports.init = arrangeTourist.initModule;
});
