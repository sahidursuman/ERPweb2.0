define(function(require, exports) {
    var menuKey = "financial_innerTransfer_profit",
        listTurnProfit = require("./view/list"),
        tabId = "tab-"+menuKey+"-content";
        checkTabId = menuKey+"-checking",
        viewTemplate = require("./view/visitorGroup"),
        visitorGroupMainInfo = require("./view/visitorGroupMainInfo"),
        transitViewTemplate = require("./view/innerTransferView"),
        innerTransferInfoTemplate = require("./view/innerTransferInfo"),
        blanceTabId = menuKey+"-blance";

    var innerProfit = {
        searchData: false,
        $tab: false,
        $searchArea: false,
        clickFlag : 0
    };

    innerProfit.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        innerProfit.listInnerProfit(0,"","","","","","","",dateJson.startDate,dateJson.endDate,1);
    };

    innerProfit.listInnerProfit = function(page,lineProductId,lineProductName,partnerAgencyId,partnerAgencyName,toBusinessGroupId,toBusinessGroupName,indexOrderNumber,startTime,endTime,isSelectTransfer) {
        if (innerProfit.$searchArea && arguments.length === 1) {
            isSelectTransfer = 1;
            if(!innerProfit.$tab.find(".T-checkTurn").is(":checked")){
                isSelectTransfer = 0;
            }
            // 初始化页面后，可以获取页面的参数
            lineProductId = innerProfit.$searchArea.find("input[name=lineProductId]").val(),
            lineProductName = innerProfit.$searchArea.find("input[name=lineProductName]").val(),
            partnerAgencyId = innerProfit.$searchArea.find("input[name=partnerAgencyId]").val(),
            partnerAgencyName = innerProfit.$searchArea.find("input[name=partnerAgencyName]").val(),
            toBusinessGroupId = innerProfit.$searchArea.find("input[name=toBusinessGroupId]").val(),
            toBusinessGroupName = innerProfit.$searchArea.find("input[name=toBusinessGroupName]").val(),
            indexOrderNumber = innerProfit.$searchArea.find("input[name=indexOrderNumber]").val(),
            startTime = innerProfit.$searchArea.find("input[name=startTime]").val(),
            endTime = innerProfit.$searchArea.find("input[name=endTime]").val()
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:innerProfit.url("profitInnerTransfer","listProfitInnerTransfer"),
            type: "POST",
            data: {
                pageNo: page,
                lineProductId: lineProductId,
                lineProductName : lineProductName,
                fromPartnerAgencyId: partnerAgencyId,
                partnerAgencyName : partnerAgencyName,
                toBusinessGroupId : toBusinessGroupId,
                toBusinessGroupName : toBusinessGroupName,
                indexOrderNumber : indexOrderNumber,
                startTime : startTime,
                endTime : endTime,
                isSelectTransfer : isSelectTransfer,
                sortType: 'auto'
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    innerProfit.searchData = {
                        pageNo: page
                    };
                    var html = listTurnProfit(data);
                    Tools.addTab(menuKey,"内转利润",html);
                    innerProfit.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: innerProfit.$tab.find('.T-pagenation'),
                        pages: data.totalPage, 
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                innerProfit.listInnerProfit(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    innerProfit.initList = function(){
        // 初始化jQuery 对象
        innerProfit.$tab = $('#' + tabId);
        innerProfit.$searchArea = innerProfit.$tab.find('.T-search-area');
        Tools.setDatePicker(innerProfit.$searchArea.find('.datepicker'), true);
        innerProfit.searchAreaList();
        //搜索按钮事件
        innerProfit.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            innerProfit.listInnerProfit(0);
        });

        //核算中转
        innerProfit.$tab.find(".T-checkTurn").on("click",function(){
            innerProfit.listInnerProfit(0);
        });

        // 报表内的操作
        innerProfit.$tab.find('.T-option').on('click', function(event) {
            event.preventDefault();
            var $that = $(this),
                $tr = $that.closest('tr'),
                id = $tr.data('id'),
                transferId = $tr.attr('tgTransferId');
                lineProductId = $tr.attr('lineProductId');
            if ($that.hasClass('T-showTourist')) {
                // 查看游客小组
                innerProfit.clickFlag = 1;
                innerProfit.viewTouristGroup(id);
            } else if ($that.hasClass('T-showIncomeDetail')) {
                // 查看收客团款
                innerProfit.clickFlag = 2;
                innerProfit.viewTouristGroup(transferId);
            } else if ($that.hasClass('T-showChangePay')) {
                // 查看中转明细
                innerProfit.viewTransit(transferId);
            } else if ($that.hasClass('T-showTransPay')) {
                // 查看内转明细
                innerProfit.viewTransfer(this);
            } else if($that.hasClass('T-viewParentTouristGroup')){
                //查看内转小组的父小组的明细
                KingServices.viewTouristGroup($tr.data('pid'),1);
            }
        });
    };
    //查看游客小组、收客团款明细
    innerProfit.viewTouristGroup = function(id){
        var $path = innerProfit.clickFlag == 2?'profitInnerTransfer':'touristGroup';
        var $method = innerProfit.clickFlag == 2?'findIncome':'viewTransferTouristGroupDetails';
        var $title = innerProfit.clickFlag == 2?'收客团款明細':'查看小组';
        $.ajax({
            url:innerProfit.url($path,$method),
            type:"POST",
            data:{
                id : id + ""
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    if(innerProfit.clickFlag == 2){
                        data.income = JSON.parse(data.income);
                        var html = visitorGroupMainInfo(data);
                        layer.open({
                            type : 1,
                            title : $title,
                            skin : 'layui-layer-rim', 
                            area : "65%", 
                            zIndex : 1028,
                            content : html,
                            scrollbar: false // 推荐禁用浏览器外部滚动条
                        });
                    }else{
                        var memberList = JSON.parse(data.touristGroupMemberDetail.touristGroupMemberList);
                        var otherCost = JSON.parse(data.needIncomeMoneyDetail.touristGroupFeeList);
                        data.touristGroupMemberDetail.touristGroupMemberList = memberList;
                        data.needIncomeMoneyDetail.touristGroupFeeList = otherCost;
                        if(innerProfit.clickFlag == 1){
                            var html = viewTemplate(data);
                            layer.open({
                                type : 1,
                                title :$title,
                                skin : 'layui-layer-rim',
                                area : "60%", 
                                zIndex : 1028,
                                content : html,
                                scrollbar: false // 推荐禁用浏览器外部滚动条
                            });
                        };
                    }
                }
            }
        });
    };

    //查看中转明细
    innerProfit.viewTransit = function(id){
        $.ajax({
            url:innerProfit.url("profitInnerTransfer","findOut"),
            type:"POST",
            data:{
                id : id + ""
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.financial = JSON.parse(data.financial);
                    var html =transitViewTemplate(data);
                    layer.open({
                        type : 1,
                        title : "内转中转成本",
                        skin : 'layui-layer-rim', // 加上边框
                        area : "70%", // 宽高
                        zIndex : 1028,
                        content : html,
                        scrollbar: false // 推荐禁用浏览器外部滚动条
                    });
                }
            }
        })
    };
    //查看我社转出分团转客信息
    innerProfit.viewTransfer = function(obj){
        var id = $(obj).data("inner-id");
        $.ajax({
            url:innerProfit.url("profitInnerTransfer","findPay"),
            type:"POST",
            data:{
                id : id + ""
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.financial = JSON.parse(data.income);
                    var html = innerTransferInfoTemplate(data);
                    layer.open({
                        type : 1,
                        title : "内转成本",
                        skin : 'layui-layer-rim',
                        area : "60%", 
                        zIndex : 1028,
                        content : html,
                        scrollbar: false // 推荐禁用浏览器外部滚动条
                    });
                }
            }
        });
    };

    innerProfit.searchAreaList = function(){
        $.ajax({
            url:innerProfit.url("profitInnerTransfer","getConditionList"),
            type:"POST",
            data:"",
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var $tabId = $("#"+tabId);
                    var lineProductNameList = data.lineProductNameList,
                        partnerAgencyNameList = data.partnerAgencyNameList,
                        toBusinessGroupNameList  = data.toBusinessGroupNameList;
                    var lineProducts  = $tabId.find("input[name=lineProductName]"),
                        partnerAgencyName  = $tabId.find("input[name=partnerAgencyName]"),
                        toBusinessGroupName = $tabId.find("input[name=toBusinessGroupName]");

                    if(lineProductNameList !=null && lineProductNameList.length>0){
                        for(var i = 0;i<lineProductNameList.length;i++){
                            lineProductNameList[i].value = lineProductNameList[i].name
                        }
                    }

                    if(partnerAgencyNameList !=null && partnerAgencyNameList.length>0){
                        for(var i = 0;i<partnerAgencyNameList.length;i++){
                            partnerAgencyNameList[i].value = partnerAgencyNameList[i].name
                        }
                    }

                    if(toBusinessGroupNameList !=null && toBusinessGroupNameList.length>0){
                        for(var i = 0;i<toBusinessGroupNameList.length;i++){
                            toBusinessGroupNameList[i].value = toBusinessGroupNameList[i].name
                        }
                    }

                    //线路产品
                    lineProducts.autocomplete({
                        minLength:0,
                        change:function(event,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(event,ui){
                            $(this).blur();
                            $(this).next().val(ui.item.id);
                        }
                    }).off("click").on("click", function(){
                        var Obj = lineProducts;
                        $(Obj).autocomplete('option','source',lineProductNameList);
                        $(Obj).autocomplete('search', '');
                    });

                    //组团社
                    partnerAgencyName.autocomplete({
                        minLength:0,
                        change:function(even,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(evevt,ui){
                            $(this).blur();
                            $(this).next().val(ui.item.id);
                        }
                    }).off("click").on("click",function(){
                        var Obj = partnerAgencyName;
                        $(Obj).autocomplete("option","source",partnerAgencyNameList);
                        $(Obj).autocomplete('search','');
                    });

                    //部门
                    toBusinessGroupName.autocomplete({
                        minLength:0,
                        change:function(even,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(evevt,ui){
                            $(this).blur();
                            $(this).next().val(ui.item.id);
                        }
                    }).off("click").on("click",function(){
                        var Obj = toBusinessGroupName;
                        $(Obj).autocomplete("option","source",toBusinessGroupNameList);
                        $(Obj).autocomplete('search','');
                    });
                }
            }
        });   
    };   
    
    innerProfit.url = function(path,method){
        var url = ''+APP_ROOT+'back/'+path +'.do?method='+method+'&token='+$.cookie('token')+'';
        return url;
    };

    exports.init = innerProfit.initModule;
});
