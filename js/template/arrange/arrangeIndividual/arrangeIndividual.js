/**
 * [description]  散客拼团模块
 * @param  {[type]} require  
 * @param  {String} exports) 
 * @return {[type]}
 * @author ZhangJiangFeng          
 */
define(function(require, exports) {
    var menuKey = "arrange_individual",
        tabId = "tab-" + menuKey + "-content",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        viewTouristGroupTemplate = require("./view/viewTouristGroup"),
        chooseMergeTemplate = require("./view/chooseMerge"),
        chosenTripPlanTemplate = require("./view/chooseTriPlan"),
        chosenMergenTripPlanTemplate = require("./view/chosenMergenTripPlan");

    var arrangeIndividual = {
        $tab:false,
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
        vislineProductList: []
    };

    /**
     * [initModule description]
     * @return {[type]} [description]
     */
    arrangeIndividual.initModule = function() {
        //请求搜索数据
        arrangeIndividual.caCheAutocomData(0);
        var html = listMainTemplate();
        Tools.addTab(menuKey, "散客拼团", html);
        //初始化时间控件
        arrangeIndividual.initDatePicker($("#" + tabId));

        //初始化散拼、团体、转客时间
        arrangeIndividual.init_event();
    };


   
    /**
     * 散客拼团初始化事件
     * @return {[type]} [description]
     */
    arrangeIndividual.init_event = function() {
        arrangeIndividual.$tab = $("#"+tabId);
        var $visitorObj = arrangeIndividual.$tab.find('.T-search-area');
        var $searchArgumentsForm = $visitorObj.find('form'),customerType = 0;
        //散拼
        $visitorObj.find('.T-visitorTourist-search').off().on('click', function(event) {
            /* Act on the event */
            
            //选择组团社与业务部
            var $selectObj = $visitorObj.find(".T-choosePart-chooseFromB");
            $selectObj.on('change', function() {
                var $that = $(this);
                arrangeIndividual.chosenPartAgenOrBussiness($that);
            });
            arrangeIndividual.touristGroupId = [];
            arrangeIndividual.touristGroupMergeData.touristGroupMergeList = [];
            arrangeIndividual.listArrangeTourist(0, $searchArgumentsForm, customerType);
        });

        $visitorObj.find('#order_by').off().on('change', function(event) {
            event.preventDefault();
            arrangeIndividual.listArrangeTourist(0, $searchArgumentsForm, customerType);
        });

        //线路产品的AutocomPlate数据
        var $visitorLinPro = $visitorObj.find('.T-Choose-linProList');
        arrangeIndividual.chooseLineProduct($visitorLinPro, 0);
        //业务部AutocomPlate数据
        var $visitorfromBus = $visitorObj.find('.T-fromBussinessGroup');
        arrangeIndividual.chooseBusinessGroup($visitorfromBus, 0);
        //组团社AutocomPlate数据
        var $visitorPart = $visitorObj.find('.T-fromPartnerAgency');

        arrangeIndividual.choosePartnerAgency($visitorPart, 0);

        //模拟Click事件
        $visitorObj.find('.T-visitorTourist-search').trigger('click');

    };



    /**
     * [listArrangeTourist description]
     * @param  {[type]} customerType 0--散拼
     * @param  {[type]} divId        [description]
     * @return {[type]}              [description]
     */
    arrangeIndividual.listArrangeTourist = function(page, $searchArgumentsForm, customerType) {
        var formData = $searchArgumentsForm.serializeJson();
        formData.customerType = customerType;
        formData.pageNo = page;
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
                        arrangeIndividual.$tab.find('.T-touristVisitor-list').html(html);
                        //初始化页面事件
                        arrangeIndividual.init_visitorEvent();
                        //散拼分页选中效果
                        arrangeIndividual.pagerChecked(customerType);
                    }
                    // 绑定共用翻页组件
                    laypage({
                        cont: arrangeIndividual.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeIndividual.listArrangeTourist(obj.curr - 1, $searchArgumentsForm, customerType);
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
    arrangeIndividual.pagerChecked = function(customerType) {
        //分页--勾选游客小组Id
        if (customerType == '0' && arrangeIndividual.touristGroupId.length > 0) {
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
     * init_visitorEvent 散拼报表绑定事件
     * @return {[type]} [description]
     */
    arrangeIndividual.init_visitorEvent = function() {
        var $visitorObj = arrangeIndividual.$tab.find('.T-touristVisitor-list');
        //重置计算
        arrangeIndividual.choosenAdultAndChildCount($visitorObj);
        Tools.descToolTip($visitorObj.find('.T-ctrl-tip'),1);

        //查看游客小组
        arrangeIndividual.$tab.find('.T-arrageVisitor-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value');
            arrangeIndividual.viewTouristGroup(id);
        });

        Tools.descToolTip($visitorObj.find(".T-ctrl-tip"), 1);

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
                var divId = "T-Visitor-list",
                    $VisitorObj = $('#' + divId),
                    $searchArgumentsForm = $VisitorObj.find('form'),
                    customerType = 0;
                    arrangeIndividual.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
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
                var divId = "T-Visitor-list",
                    $VisitorObj = $('#' + divId),
                    $searchArgumentsForm = $VisitorObj.find('form'),
                    customerType = 0;
                    arrangeIndividual.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
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
            arrangeIndividual.touristGroupMergeData.touristGroupMergeList.push(touristGroupMerge);
            arrangeIndividual.touristGroupId.push(touristGroupIds);

        } else {
            console.log(arrangeIndividual.touristGroupMergeData.touristGroupMergeList);
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
                sumAdultCount += parseInt($(this).attr("data-entity-adultcount"));
                sumChildCount += parseInt($(this).attr("data-entity-childcount"));
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
     * checkTransferAll 全选组件
     * @param  {[type]} $tab  TabId--唯一标识
     * @param  {[type]} $that 当前点击对象
     * @param  {[type]} tbody 
     * @return {[type]}
     */
    arrangeIndividual.checkTransferAll = function($tab, $that, tbody) {
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



    /**
     * [cacheAutocomData 缓存Autocomplate数据
     * @param  {[type]} customerType 散客、团体、转客标识
     * @return {[type]}              [description]
     */
    arrangeIndividual.caCheAutocomData = function(customerType) {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryForTripOperation"),
            type: 'POST',
            dataType: 'json',
            data: "customerType=" + customerType,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    if (customerType == 0) { //散客
                        arrangeIndividual.visFromBusinessList = data.fromBusinessGroupList;
                        arrangeIndividual.visFromPartnerList = data.fromPartnerAgencyList;
                        arrangeIndividual.vislineProductList = data.lineProductList;
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
    arrangeIndividual.chooseLineProduct = function($obj, customerType) {
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
                list = arrangeIndividual.vislineProductList;
            }
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].name;
                };
            } else {
                layer.tips('没有内容', $obj, {
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
    arrangeIndividual.chooseBusinessGroup = function($obj, customerType) {
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
                list = arrangeIndividual.visFromBusinessList;
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
    arrangeIndividual.choosePartnerAgency = function($obj, customerType) {
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
                list = arrangeIndividual.visFromPartnerList;
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


    //获取value值
    arrangeIndividual.getVal = function(obj, name) {
        return obj.find("[name=" + name + "]").val();
    };

    /**
     * 时间控件是初始化
     * @param  {[type]} $tabId 在外层ID
     * @return {[type]}
     */
    arrangeIndividual.initDatePicker = function($tabId) {
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

    exports.init = arrangeIndividual.initModule;
});
