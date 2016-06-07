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
        var dateJson = FinancialService.getInitDate(),
            args = {
                startTime : dateJson.startDate,
                endTime : dateJson.endDate
            };

        innerProfit.listInnerProfit(0,args);
    };

    innerProfit.listInnerProfit = function(page,args) {
        args = innerProfit.getArgs(page,args);
        $.ajax({
            url:innerProfit.url("profitInnerTransfer","listProfitInnerTransfer"),
            type: "POST",
            data: args,
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

        if(innerProfit.$tab.data("searchData")){
            innerProfit.loadSearchList();
        } else {
            innerProfit.searchAreaList();
        }
        
        //监听搜索区修改
        innerProfit.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
            event.preventDefault();
            innerProfit.$tab.data('searchEdit', true);
        });
        //搜索按钮事件
        innerProfit.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            innerProfit.listInnerProfit(0);
        });

        // 报表内的操作
        innerProfit.$tab.find('.T-option').on('click', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                transferId = $that.closest('tr').attr('tgTransferId');
                lineProductId = $that.closest('tr').attr('lineProductId');
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
            } else if($that.hasClass('T-lineProductDetail')){
                //查看线路产品
                KingServices.viewInnerInfo(transferId,1)
            }
        });
    };

    innerProfit.getArgs = function(page,args){
        var args = args || {};
        if(innerProfit.$tab){
            args = {
                pageNo : page || 0,
                lineProductId : innerProfit.$searchArea.find("input[name=lineProductId]").val(),
                lineProductName : innerProfit.$searchArea.find("input[name=lineProductName]").val(),
                partnerAgencyId : innerProfit.$searchArea.find("input[name=partnerAgencyId]").val(),
                partnerAgencyName : innerProfit.$searchArea.find("input[name=partnerAgencyName]").val(),
                toBusinessGroupId : innerProfit.$searchArea.find("input[name=toBusinessGroupId]").val(),
                toBusinessGroupName : innerProfit.$searchArea.find("input[name=toBusinessGroupName]").val(),
                indexOrderNumber : innerProfit.$searchArea.find("input[name=indexOrderNumber]").val(),
                startTime : innerProfit.$searchArea.find("input[name=startTime]").val(),
                endTime : innerProfit.$searchArea.find("input[name=endTime]").val(),
            }
        }
        args.sortType = 'auto';

        if(innerProfit.$tab && innerProfit.$tab.data("searchEdit")){
            args.pageNo = 0;
            innerProfit.$tab.data("searchEdit",false);
        }
        return args;
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
                    var lineProductNameList = data.lineProductNameList,
                        partnerAgencyNameList = data.partnerAgencyNameList,
                        toBusinessGroupNameList  = data.toBusinessGroupNameList;

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

                    innerProfit.lineProductNameList = lineProductNameList,
                    innerProfit.partnerAgencyNameList = partnerAgencyNameList,
                    innerProfit.toBusinessGroupNameList  = toBusinessGroupNameList;
                    innerProfit.$tab.data("searchData",true);
                    innerProfit.loadSearchList();
                }
            }
        });   
    };   

    innerProfit.loadSearchList = function(){
        var $tabId = $("#"+tabId),
            lineProductNameList = innerProfit.lineProductNameList,
            partnerAgencyNameList = innerProfit.partnerAgencyNameList,
            toBusinessGroupNameList  = innerProfit.toBusinessGroupNameList;
            lineProducts  = $tabId.find("input[name=lineProductName]"),
            partnerAgencyName  = $tabId.find("input[name=partnerAgencyName]"),
            toBusinessGroupName = $tabId.find("input[name=toBusinessGroupName]");

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
    };
    
    innerProfit.url = function(path,method){
        var url = ''+APP_ROOT+'back/'+path +'.do?method='+method+'&token='+$.cookie('token')+'';
        return url;
    };

    exports.init = innerProfit.initModule;
});
