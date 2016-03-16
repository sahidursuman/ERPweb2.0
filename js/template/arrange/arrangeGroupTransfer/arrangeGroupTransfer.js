/**
 * [description]  散客拼团模块
 * @param  {[type]} require  
 * @param  {String} exports) 
 * @return {[type]}
 * @author ZhangJiangFeng          
 */
define(function(require, exports) {
    var menuKey = "arrange_groupTransfer",
        tabId = "tab-" + menuKey + "-content",
        tabIdInner = "tab-" + menuKey + "-innerTransfer-content",
        tabIdOut = "tab-" + menuKey + "-outTransfer-content",
        listMainTemplate = require("./view/listMain"),
        listTransferTemplate = require("./view/listTransfer"),
        viewTouristGroupTemplate = require("./view/viewTouristGroup"),
        inTransferTemplate = require("./view/inTransfer"),
        innerEditFeeTemplate = require("./view/innerEditFee"),
        outEditFeeTemplate = require("./view/outEditFee"),
        outTransferTemplate = require("./view/outTransfer");

    var arrangeGroupTransfer = {
        $tab:false,
        outEditFeeLayer: "",
        innerEditFeeLayer: "",
        addGroupTemplateLayer: "",
        chosenMergenTripPlanlayer: "",
        touristGroupMergeData: {
            touristGroupMergeList: []
        },
        touristGroupId: [],
        transferId: []
    };

    var getFeeItemPayTypeOptions =  {
        payType : 1
    };

    /**
     * [initModule description]
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.initModule = function() {
        Tools.addTab(menuKey, "团散转客", listMainTemplate());
        arrangeGroupTransfer.$tab=$("#tab-"+menuKey+"-content");
        //请求搜索数据
        arrangeGroupTransfer.autocompleteSearch(2,arrangeGroupTransfer.$tab);
        //初始化时间控件
        arrangeGroupTransfer.initDatePicker(arrangeGroupTransfer.$tab);
        //初始化散拼、团体、转客时间
        arrangeGroupTransfer.init_event();
    };


    /**
     * init_event 团散转客页面初始化
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.init_event = function() {
        arrangeGroupTransfer.$tab=$("#" + tabId);
        var $TransferObj = arrangeGroupTransfer.$tab.find('.T-search-area');
        var $searchArgumentsForm = $TransferObj.find('form'),
                customerType = 2;
        //转客
        $TransferObj.find('.T-Transfer-search').off().on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            
            //组团社与业务部选择
            var $selectObj = $TransferObj.find(".T-choosePart-chooseFromB");
            $selectObj.on('change', function() {
                var $that = $(this);
                arrangeGroupTransfer.chosenPartAgenOrBussiness($that);
            });
            //转客清空操作
            arrangeGroupTransfer.transferId = [];
            arrangeGroupTransfer.listArrangeTourist(0, $searchArgumentsForm, customerType);
        });

        $TransferObj.find('#order_by').on('change', function(event) {
            event.preventDefault();
            arrangeGroupTransfer.listArrangeTourist(0, $searchArgumentsForm, customerType);
        });

        //模拟Click事件
        $TransferObj.find('.T-Transfer-search').trigger('click');

    };



    /**
     * [listArrangeTourist description]
     * @param  {[type]} customerType 0--散拼   1--团体   ""--转客
     * @param  {[type]} divId        [description]
     * @return {[type]}              [description]
     */
    arrangeGroupTransfer.listArrangeTourist = function(page, $searchArgumentsForm, customerType) {
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
                    if (customerType == 2) { //转客
                        var html = listTransferTemplate(data);
                        html = filterUnAuth(html);
                        arrangeGroupTransfer.$tab.find('.T-groupTransfer-list').html(html);
                        //初始化页面事件
                        arrangeGroupTransfer.init_transferEvent();

                        //转客分页选中效果
                        arrangeGroupTransfer.pagerTransferChecked(customerType);
                    };
                    // 绑定共用翻页组件
                    laypage({
                        cont: arrangeGroupTransfer.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                        pages: data.totalPage, //总页数
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { // 避免死循环，第一次进入，不调用页面方法
                                arrangeGroupTransfer.listArrangeTourist(obj.curr - 1, $searchArgumentsForm, customerType);
                            }
                        }
                    });

                }
            }
        })
    };


    /**
     * [pagerTransferChecked 转客分页选中效果
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.pagerTransferChecked = function(customerType) {
        //分页--勾选游客小组Id
        if (customerType == '2' && arrangeGroupTransfer.transferId.length > 0) {
            for (var i = 0; i < arrangeGroupTransfer.transferId.length; i++) {
                var transferId = arrangeGroupTransfer.transferId[i].id,
                    $transferTr = arrangeGroupTransfer.$tab.find('tr');
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
     * canCelChecked 保存后的取消选中操作
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.canCelChecked = function($visitorObj) {
        var $trList = $visitorObj.find('tr');
        $trList.each(function(index) {
            $trList.eq(index).find('.T-cheked').prop("checked", false)
        });
    };

    /**
     * init_transferEvent 转客报表绑定事件
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.init_transferEvent = function() {
        var $transferObj = arrangeGroupTransfer.$tab.find('.T-Transfer-list'),
            $searchArgumentsForm = $transferObj.find('form'),
            customerType = 2;
        //重置计算
        arrangeGroupTransfer.choosenAdultAndChildCount($transferObj);

        //查看小组信息
        $transferObj.find('.T-arrageTransfer-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),
                id = $that.closest('tr').data('value');
            arrangeGroupTransfer.viewTouristGroup(id);
        });

        Tools.descToolTip($transferObj.find(".T-ctrl-tip"), 1);
        //内转
        $transferObj.find('.T-arrageTransfer-inner').on('click', function(event) {
            event.preventDefault();
            var type = 1,action = 'innerTransfer';
            /* Act on the event */
            arrangeGroupTransfer.inOutTransferTourist($transferObj, type,action);

        });

        //外转
        $transferObj.find('.T-arrageTransfer-out').on('click', function(event) {
            event.preventDefault();
            var type = 2,action ='outTransfer';   
            /* Act on the event */
            arrangeGroupTransfer.inOutTransferTourist($transferObj, type ,action);

        });


        //计算转客已选人数
        $transferObj.find('.T-transferCheckBox').on('click', function(event) {
            var $that = $(this);
            arrangeGroupTransfer.chekedTransfer($that);
            arrangeGroupTransfer.choosenAdultAndChildCount($transferObj);
        });

    };


    //转客Id缓存用于分页选中记录
    arrangeGroupTransfer.chekedTransfer = function($that) {
        var id = $that.closest('tr').data('value');
        if ($that.is(":checked")) {
            var transferIds = {
                id: id
            };
            arrangeGroupTransfer.transferId.push(transferIds);
        } else {
            for (var i = 0; i < arrangeGroupTransfer.transferId.length; i++) {
                if (arrangeGroupTransfer.transferId[i].id == id) {
                    arrangeGroupTransfer.transferId.splice(i, 1);
                    break;
                }
            }
        };
    };



    /**
     * choosenAdultAndChildCount 已选人数的计算
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.choosenAdultAndChildCount = function($tab) {
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
    arrangeGroupTransfer.viewTouristGroup = function(id) {
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
    arrangeGroupTransfer.inOutTransferTourist = function($transferObj, type ,action) {
        if (!!arrangeGroupTransfer.transferId && arrangeGroupTransfer.transferId.length > 0) {
            var ids = JSON.stringify(arrangeGroupTransfer.transferId);
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
                            arrangeGroupTransfer.init_innerTransfer_Event();

                        } else { //外转 
                            var html = outTransferTemplate(data);
                            Tools.addTab(menuKey + "-outTransfer", "外转操作", html);
                            //初始化时内转页面事件
                            arrangeGroupTransfer.init_outTransfer_Event();

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
    arrangeGroupTransfer.init_innerTransfer_Event = function() {
        var $innerTransfer = $("#" + tabIdInner);
        //查看内转小组信息
        $innerTransfer.find('.T-viewTouristGroup').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $that = $(this), id = $that.closest('tr').data('value');
            arrangeGroupTransfer.viewTouristGroup(id);
        });

        //填写费用
        $innerTransfer.find('.T-editFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),$tr=$that.closest('tr');
                id = $tr.data('value'),
                type = 1;
            var linProJson=arrangeGroupTransfer.getLinProInfo($tr);
            arrangeGroupTransfer.innerEditFee(id, type, linProJson);
        });


        var $businessObj = $innerTransfer.find(".T-Chosen-businessGroup"),
            $opUserObj = $innerTransfer.find(".T-Chosen-opUser");

        //获取内转对应的部门Autocomplate
        arrangeGroupTransfer.getBusinessGroup($businessObj);

        //获取责任计调Autocomplate
        arrangeGroupTransfer.getopUserList($opUserObj);


        //内转保存操作
        $innerTransfer.find(".T-saveTransfer").on('click', function(event) {
            event.preventDefault();
            //内转保存操作
            arrangeGroupTransfer.saveInTransfer($innerTransfer);
        });


        //内转取消操作
        $innerTransfer.find(".T-cancelTransfer").on('click', function(event) {
            event.preventDefault();
            //内转保存操作
            Tools.closeTab(menuKey + "-innerTransfer");
        });


        //绑定是否全选
        $innerTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
            /* Act on the event */
            var $that = $(this);
            arrangeGroupTransfer.checkTransferAll($innerTransfer, $that, "tbody");

        });

    };



    /**
     * init_outTransfer_Event 外转操作绑定事件
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.init_outTransfer_Event = function() {
        var $outTransfer = $("#" + tabIdOut);
        //查看外转小组信息
        $outTransfer.find('.T-viewTouristGroup').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $that = $(this), id = $that.closest('tr').data('value');
            arrangeGroupTransfer.viewTouristGroup(id);
        });

        //填写费用--外转
        $outTransfer.find('.T-editFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            var $that = $(this),$tr=$that.closest('tr');
                id = $tr.data('value');type = 2;
            var linProJson=arrangeGroupTransfer.getLinProInfo($tr);
            arrangeGroupTransfer.outEditFee(id, type, linProJson);
        });

        var $partnerObj = $outTransfer.find(".T-Chosen-partnerAgency");

        //获取外转对应的部门Autocomplate    partnerAgencyList
        arrangeGroupTransfer.getPartnerAgencyList($partnerObj);

        //外转保存操作
        $outTransfer.find('.T-saveOutTransfer').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.saveOutTransfer($outTransfer);
        });

        //外转取消
        $outTransfer.find('.T-cancelOutTransfer').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            Tools.closeTab(menuKey + "-outTransfer");
        });

        //绑定是否全选
        $outTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
            /* Act on the event */
            var $that = $(this);
            arrangeGroupTransfer.checkTransferAll($outTransfer, $that, "tbody");

        });
    };

    /**
     * [getLinProInfo 封装线路产品信息json
     * @param  {[type]} $tr 当前点击行
     * @return {[type]}
     */
    arrangeGroupTransfer.getLinProInfo=function($tr){
        var getLinProJson={
              name:$tr.find('.T-lineName').text(),
              startTime:$tr.find('.T-startTime').text(),
              customer:$tr.attr('data-partnerAgency'),
              contactName:$tr.find('.T-contactMember').text(),
              mobileNumber:$tr.find('.T-mobileNumber').text(),
              getType:$tr.attr('data-getType')
        };
        return getLinProJson;
    };

    /** 
     * saveOutTransfer 外转保存
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.saveOutTransfer = function($outTransfer) {
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
        var partnerAgencyId = arrangeGroupTransfer.getVal($outTransfer, "partnerAgencyId") || 0;
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
                            arrangeGroupTransfer.transferId = [];
                            var customerType = 2,
                                divId = "T-Transfer-list",
                                $TransferObj = $("#" + divId);
                            var $searchArgumentsForm = $TransferObj.find('form');
                            arrangeGroupTransfer.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
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
    arrangeGroupTransfer.checkTransferAll = function($tab, $that, tbody) {
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
     * outEditFee innerEditFee 编辑外转费用
     * @param  {[type]} id 游客小组Id
     * @return {[type]}    1---内转 ---2--  外转
     */
    arrangeGroupTransfer.outEditFee = function(id, type, linProJson) {
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
                         getPayType : getFeeItemPayTypeOptions.payType,
                         linProJson:linProJson
                    };
                    var html = outEditFeeTemplate(data);
                    arrangeGroupTransfer.outEditFeeLayer = layer.open({
                        type: 1,
                        title: "编辑外转费用信息",
                        skin: 'layui-layer-rim', //加上边框
                        area: '60%', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                        success: function() {
                            //初始化编辑费用事件
                            arrangeGroupTransfer.outEditFee_Event(type);
                        }
                    })
                }
            }
        });
    };

    /**
     * innerEditFee 编辑内转费用项
     * @param  {[type]} id   [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    arrangeGroupTransfer.innerEditFee=function(id, type, linProJson){
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
                        getPayType : getFeeItemPayTypeOptions.payType,
                        linProJson:linProJson
                    };
                    var html = innerEditFeeTemplate(data);
                    arrangeGroupTransfer.innerEditFeeLayer = layer.open({
                        type: 1,
                        title: "编辑内转费用信息",
                        skin: 'layui-layer-rim', //加上边框
                        area: '60%', //宽高
                        zIndex: 1028,
                        content: html,
                        scrollbar: false,
                        success: function() {
                            //初始化编辑费用事件
                            arrangeGroupTransfer.innerEditFee_Event(type);
                        }
                    })
                }
            }
        });
    };

    /**
     * innerEditFee_Event 编辑费用事件
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.innerEditFee_Event = function(type) {
        var $editFeeObj = $("#T-innerEditFeeMain"),
        //精度限制
        $count = $editFeeObj.find('.T-count'),
        $price = $editFeeObj.find('.T-price');
        Tools.inputCtrolFloat($count);
        Tools.inputCtrolFloat($price);

        $editFeeObj.find(".T-newEditFee").on('click', function(event) {
            //新增内外转编辑费用
            arrangeGroupTransfer.newAddFee($editFeeObj, type);
        });
        //计算应付款
        arrangeGroupTransfer.PayMoneyF($editFeeObj);

        $editFeeObj.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($editFeeObj);
        });

        $editFeeObj.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($editFeeObj);
        });

        //根据费用单价、数量计算金额
        arrangeGroupTransfer.calcPayMoney($editFeeObj);
        $editFeeObj.find(".T-calc").trigger('change');

        //提交编辑转客费用信息
        $editFeeObj.find('.T-updateFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.saveInTransFee($editFeeObj);
        });

        //绑定删除
        $editFeeObj.find(".T-delete").off().on("click", function() {
            var $that = $(this),
                $tr = $that.closest('tr');
            var id = $tr.attr("data-entity-id");
            arrangeGroupTransfer.delTransferData(id, $tr, $editFeeObj);
        });

    };


    /**
     * outEditFee_Event  外转 
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.outEditFee_Event = function(type) {
        var $outFeeObj = $("#T-outEditFeeMain"),
            //精度限制
            $count = $outFeeObj.find('.T-count');
        Tools.inputCtrolFloat($count);

        $outFeeObj.find(".T-newEditFee").on('click', function(event) {
            //新增内外转编辑费用
            arrangeGroupTransfer.newAddFee($outFeeObj, type);
        });

        //绑定删除分团转客信息
        $outFeeObj.find(".T-delete").off().on("click", function() {
            var $that = $(this),
                $tr = $that.closest('tr');
            var id = $tr.attr("data-entity-id");
            arrangeGroupTransfer.delOutTransfer(id, $tr, $outFeeObj);
        });

        //计算应付款
        arrangeGroupTransfer.PayMoneyF($outFeeObj);

        $outFeeObj.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($outFeeObj);
        });

        $outFeeObj.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($outFeeObj);
        });

        //根据费用单价、数量计算金额
        arrangeGroupTransfer.calcPayMoney($outFeeObj);
        $outFeeObj.find(".T-calc").trigger('change');

        //提交编辑转客费用信息
        $outFeeObj.find('.T-updateFee').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.saveTransFee($outFeeObj, type);
        });
    };


    /**
     * calcPayMoney 根据费用【单价、数量】项目计算金额
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    arrangeGroupTransfer.calcPayMoney = function($tab) {
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
    arrangeGroupTransfer.newAddFee = function($tab, type) {
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
        if (!!type && type==1) {
           Tools.inputCtrolFloat($price);
        };
        Tools.inputCtrolFloat($count);
        // 更新表单验证的事件绑定
        //rule.update(validator);   
        //绑定删除分团转客信息
        if (type == '1') {
            $tab.find(".T-delete").off().on("click", function() {
                var $that = $(this),
                    $tr = $that.closest('tr');
                var id = $tr.attr("data-entity-id");
                arrangeGroupTransfer.delTransferData(id, $tr, $tab);
            });

        } else {
            $tab.find(".T-delete").off().on("click", function() {
                var $that = $(this),
                    $tr = $that.closest('tr');
                var id = $tr.attr("data-entity-id");
                arrangeGroupTransfer.delOutTransfer(id, $tr, $tab);
            });
        };


        $tab.find(".count").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($tab);
        });

        $tab.find(".price").on('change', function(event) {
            event.preventDefault();
            /* Act on the event */
            arrangeGroupTransfer.PayMoneyF($tab);
        });

        //重新计算
        arrangeGroupTransfer.PayMoneyF($tab);

    };



    /**
     * 逻辑删除&&及时删除
     * @param  {[type]} id  费用Id
     * @param  {[type]} $tr f行对象
     * @return {[type]}     [description]
     */
    arrangeGroupTransfer.delTransferData = function(id, $tr, $tab) {
        if (id != null && id != "") {
            $tr.fadeOut(function() {
                $tr.addClass('deleted');
                $tr.hide();
                arrangeGroupTransfer.PayMoneyF($tab);
            });
        } else {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.remove();
                arrangeGroupTransfer.PayMoneyF($tab);
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
    arrangeGroupTransfer.delOutTransfer = function(id, $tr, $tab) {
        if (!!id && id!= null) {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.addClass('deleted');
                $tr.hide();
                arrangeGroupTransfer.PayMoneyF($tab);
            });
        } else {
            //移除空的其他费用
            $tr.fadeOut(function() {
                $tr.remove();
                arrangeGroupTransfer.PayMoneyF($tab);
            });
        };
    };

    /**
     * [PayMoneyF 付款账务--应付/现付/已付的计算]
     */
    arrangeGroupTransfer.PayMoneyF = function($tab) {
        var needPayMoney = 0, //transNeedPayAllMoney   transPayedMoney
            transNeedPayAllMoney = $tab.find("input[name=transNeedPayAllMoney]"), //应付
            transPayedMoney = $tab.find("input[name=transPayedMoney]"), //已付
            transCurrentPM = $tab.find("input[name=transCurrentPayedMoney]"), //现付
            trList = $tab.find("tbody.T-innerOutEditFeeTbody").find("tr:not(.deleted)");

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
     * saveInTransFee 保存内转费用项
     * @param  {[type]} $editFeeObj 编辑内转费用项obj
     * @return {[type]}
     */
    arrangeGroupTransfer.saveInTransFee=function($editFeeObj){
        var innerTransferFeeStatus = 0,
            formInData={},
            $innerForm = $editFeeObj.find('form'),
            inTransferFee = {
                innerTransferFeeList: []
            },
            otherFeeListDel = [];
        var $tbodyFee = $editFeeObj.find(".T-innerOutEditFeeTbody"),
            $trNotDelete = $tbodyFee.find('tr:not(.deleted)'),
            otherFeeListLength = $trNotDelete.length;
            innerTransferFeeStatus=arrangeGroupTransfer.getVal($editFeeObj, "innerTransferFeeStatus");
        $trNotDelete.each(function(i) {
            var $that = $(this),
                FeeJson = {
                    type: arrangeGroupTransfer.getVal($that, "type"),
                    price: arrangeGroupTransfer.getVal($that, "price"),
                    count: arrangeGroupTransfer.getVal($that, "count"),
                    remark: arrangeGroupTransfer.getVal($that, "remark")
                };
            if (innerTransferFeeStatus == 1) {
                FeeJson.id = $that.attr("data-entity-id");
            };
            inTransferFee.innerTransferFeeList.push(FeeJson);
        });
        if (innerTransferFeeStatus==1) {
            $tbodyFee.find("tr.deleted").each(function(i) {
                var otherFeeDel = {
                    "id": $(this).attr("data-entity-id")
                };
                otherFeeListDel.push(otherFeeDel);
            })
        };
        formInData = $innerForm.serialize();
        otherFeeListDel = JSON.stringify(otherFeeListDel);
        inTransferFee = JSON.stringify(inTransferFee);
        $.ajax({
            url: KingServices.build_url("innerTransferOperation", "saveInTransferFee"),
            data: formInData + "&inTransferFee=" +encodeURIComponent(inTransferFee) + "&otherinnerFeeDel=" + encodeURIComponent(otherFeeListDel),
            type: "POST",
        })
        .done(function(data) {
            if (showDialog(data)) {
                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                    layer.close(arrangeGroupTransfer.innerEditFeeLayer);
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
        })
    };

    /**
     * saveTransFee 提交转客费用信息
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.saveTransFee = function($editFeeObj, type) {
        var transferFeeStatus = arrangeGroupTransfer.getVal($editFeeObj, "transferFeeStatus"),
            id = arrangeGroupTransfer.getVal($editFeeObj, "touristGroupId"),
            cashFlag = arrangeGroupTransfer.getVal($editFeeObj, "isCurrent");
        var touristGroup = {
                "id": id,
                "transRemark": arrangeGroupTransfer.getVal($editFeeObj, "remark") || "无",
                "transPayedMoney": arrangeGroupTransfer.getVal($editFeeObj, "transPayedMoney") || 0,
                "transNeedPayAllMoney": arrangeGroupTransfer.getVal($editFeeObj, "transNeedPayAllMoney") || 0,
                "cashFlag": arrangeGroupTransfer.getVal($editFeeObj, "isCurrent") || 0
            },
            otherFeeList = [],
            inTransferFee = {
                innerTransferFeeList: []
            },
            otherFeeListDel = [];
        var $tbodyFee = $editFeeObj.find(".T-innerOutEditFeeTbody"),
            $trNotDelete = $tbodyFee.find('tr:not(.deleted)'),
            otherFeeListLength = $trNotDelete.length;
        $trNotDelete.each(function(i) {
            var $that = $(this),
            FeeJson = {
                type: arrangeGroupTransfer.getVal($that, "type"),
                price: arrangeGroupTransfer.getVal($that, "price"),
                count: arrangeGroupTransfer.getVal($that, "count"),
                remark: arrangeGroupTransfer.getVal($that, "remark")
            };
            if (transferFeeStatus == 1) {
                FeeJson.id = $that.attr("data-entity-id");
            };
            otherFeeList.push(FeeJson);
        });
        if (transferFeeStatus == 1) {
            $tbodyFee.find("tr.deleted").each(function(i) {
                var otherFeeDel = {
                    "id": $(this).attr("data-entity-id")
                };
                otherFeeListDel.push(otherFeeDel);
            })
        };
        touristGroup = JSON.stringify(touristGroup),
        otherFeeList = JSON.stringify(otherFeeList),
        otherFeeListDel = JSON.stringify(otherFeeListDel);
        $.ajax({
            url: KingServices.build_url("transTourist", "saveTransFee"),
            data: "touristGroup=" + encodeURIComponent(touristGroup) + "&otherFeeList=" + encodeURIComponent(otherFeeList) + "&otherFeeListDel=" + encodeURIComponent(otherFeeListDel) + "&cashFlag=" + cashFlag,
            type: "POST",
        })
        .done(function(data) {
            if (showDialog(data)) {
                showMessageDialog($("#confirm-dialog-message"), data.message, function() {
                    layer.close(arrangeGroupTransfer.outEditFeeLayer);
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
        })
    };

    /**
     * saveInTransfer 内转保存操作
     * @return {[type]} [description]
     */
    arrangeGroupTransfer.saveInTransfer = function($innerTransfer) {
        var touristGroupIds = [];
        $innerTransfer.find(".T-transferTouristGroup-list").children('tr').each(function() {
            var $that = $(this);
            if ($that.find(".T-TransferCheckBox").is(":checked")) {
                var id = $that.data("value");
                touristGroupIds.push(id);
            }
        });
        var businessGroupId = arrangeGroupTransfer.getVal($innerTransfer, "businessGroupId") || 0,
            opUserId = arrangeGroupTransfer.getVal($innerTransfer, "opUserId") || 0;
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
                            arrangeGroupTransfer.transferId = [];
                            var customerType = 2,
                                divId = "T-Transfer-list",
                                $TransferObj = $("#" + divId);
                            var $searchArgumentsForm = $TransferObj.find('form');
                            arrangeGroupTransfer.listArrangeTourist(0, $searchArgumentsForm, customerType, divId);
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
    arrangeGroupTransfer.getBusinessGroup = function($businessObj) {
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
    arrangeGroupTransfer.getPartnerAgencyList = function($partnerObj) {
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
    arrangeGroupTransfer.chosenPartAgenOrBussiness = function($that) {
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
    arrangeGroupTransfer.autocompleteSearch = function(customerType,$tab) {
        $.ajax({
            url: KingServices.build_url("touristGroup", "getQueryForTripOperation"),
            type: 'POST',
            dataType: 'json',
            data: "customerType=" + customerType,
        })
        .done(function(data) {
            if (showDialog(data)) {
                var $searArea=$tab.find('.T-search-area');
                arrangeGroupTransfer.chooseLineProduct($searArea.find('[name=lineProductName]'), data.lineProductList);
                arrangeGroupTransfer.chooseBusinessGroup($searArea.find('[name=fromBussinessGroupName]'), data.fromBusinessGroupList);
                arrangeGroupTransfer.choosePartnerAgency($searArea.find('[name=fromPartnerAgencyName]'), data.fromPartnerAgencyList);
            };
        })

    };
    /**
     * 线路产品Autocomplete
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeGroupTransfer.chooseLineProduct = function($obj, lineProList) {
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
            var $obj = $(this),list=lineProList;
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
    arrangeGroupTransfer.chooseBusinessGroup = function($obj, fromBusiGroupList) {
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
            var $obj = $(this),list=fromBusiGroupList;
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].businessGroupName;
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
     * 组团社----Autocomplete
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeGroupTransfer.choosePartnerAgency = function($obj, fromParAgencyList) {
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
            var $obj = $(this),list = fromParAgencyList;
            if (!!list && list.length > 0) {
                for (var i = 0; i < list.length; i++) {
                    list[i].value = list[i].travelAgencyName;
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
     * getopUserList 获取责任计Autocomplate
     * @param  {[type]} $obj [description]
     * @return {[type]}      [description]
     */
    arrangeGroupTransfer.getopUserList = function($obj) {
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
    arrangeGroupTransfer.getVal = function(obj, name) {
        return obj.find("[name=" + name + "]").val();
    };

    /**
     * 时间控件是初始化
     * @param  {[type]} $tabId 在外层ID
     * @return {[type]}
     */
    arrangeGroupTransfer.initDatePicker = function($tabId) {
        $tabId.find('.datepicker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        })
    };

    exports.init = arrangeGroupTransfer.initModule;
});
