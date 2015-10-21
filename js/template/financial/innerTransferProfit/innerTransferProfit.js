define(function(require, exports) {
    var menuKey = "financial_innerTransfer_profit",
        listTurnProfit = require("./view/list"),
        tabId = "tab-"+menuKey+"-content";
        checkTabId = menuKey+"-checking",
        viewTemplate = require("./view/visitorGroup"),
        visitorGroupMainInfo = require("./view/visitorGroupMainInfo"),
        transitViewTemplate = require("../../arrange/transit/view/view"),
        innerTransferInfoTemplate = require("./view/innerTransferInfo"),
        blanceTabId = menuKey+"-blance";
    var InnerTransferProfit  = {
        searchData :{
            lineProductId : "",
            lineProductName : "",
            partnerAgencyId : "",
            partnerAgencyName : "",
            toBusinessGroupId : "",
            toBusinessGroupName : "",
            startTime : "",
            endTime : "",
        },
        clickFlag : 0,
        searchParam : function(){
            //获取搜索框数据
            $.ajax({
                url:""+APP_ROOT+" /back/profitInnerTransfer.do?method=getConditionList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
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
                                lineProductNameList[i].value = lineProductNameList[i].lineProductName
                            }
                        }

                        if(partnerAgencyNameList !=null && partnerAgencyNameList.length>0){
                            for(var i = 0;i<partnerAgencyNameList.length;i++){
                                partnerAgencyNameList[i].value = partnerAgencyNameList[i].partnerAgencyName
                            }
                        }

                        if(toBusinessGroupNameList !=null && toBusinessGroupNameList.length>0){
                            for(var i = 0;i<toBusinessGroupNameList.length;i++){
                                toBusinessGroupNameList[i].value = toBusinessGroupNameList[i].toBusinessGroupName
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
                                $(this).next().val(ui.item.lineProductId);
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
                                console.log(ui);
                                $(this).blur();
                                $(this).next().val(ui.item.partnerAgencyId);
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
                                $(this).next().val(ui.item.toBusinessGroupId);
                            }
                        }).off("click").on("click",function(){
                            var Obj = toBusinessGroupName;
                            $(Obj).autocomplete("option","source",toBusinessGroupNameList);
                            $(Obj).autocomplete('search','');
                        });
                    }
                }
            });
        },
        listInnerTransferProfit:function(page,lineProductId,lineProductName,partnerAgencyId,PartnerAgencyName,toBusinessGroupId,ToBusinessGroupName,startTime,endTime){
            var name = PartnerAgencyName;
            $.ajax({//            back/profitInnerTransfer.do
                url:""+APP_ROOT+"back/profitInnerTransfer.do?method=listProfitInnerTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"GET",
                data:"pageNo="+page+"&lineProductId="+lineProductId+"&partnerAgencyId="+partnerAgencyId+"&toBusinessGroupId="+toBusinessGroupId+"&startTime="+startTime+"&endTime="+endTime+"&sortType=auto",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        InnerTransferProfit.searchParam();
                        InnerTransferProfit.searchData = {
                            lineProductId:lineProductId,
                            lineProductName:lineProductName,
                            partnerAgencyId:partnerAgencyId,
                            partnerAgencyName:PartnerAgencyName,
                            toBusinessGroupId:toBusinessGroupId,
                            toBusinessGroupName:ToBusinessGroupName,
                            startTime:startTime,
                            endTime:endTime
                        }
                      
                        data.searchParam = InnerTransferProfit.searchData;
                        var $tabId = $("#"+tabId);
                        var html = listTurnProfit(data);
                        addTab(menuKey,"内转利润",html);
                        $("#" + tabId + " .date-picker").datepicker({
                            autoclose: true,
                            todayHighlight: true,
                            format: 'yyyy-mm-dd',
                            language: 'zh-CN'
                        });
                        //搜索按钮事件
                        $("#"+tabId).find(".btn-arrangeTourist-search").click(function(){
                            InnerTransferProfit.searchData = {
                                lineProductId : $("#"+tabId).find("input[name=lineProductId]").val(),
                                lineProductName : $("#"+tabId).find("input[name=lineProductName]").val(),
                                partnerAgencyId : $("#"+tabId).find("input[name=partnerAgencyId]").val(),
                                partnerAgencyName : $("#"+tabId).find("input[name=partnerAgencyName]").val(),
                                toBusinessGroupId : $("#"+tabId).find("input[name=toBusinessGroupId]").val(),
                                toBusinessGroupName : $("#"+tabId).find("input[name=toBusinessGroupName]").val(),
                                startTime : $("#"+tabId).find("input[name=startTime]").val(),
                                endTime : $("#"+tabId).find("input[name=endTime]").val(),
                            };
                            
                            InnerTransferProfit.listInnerTransferProfit(0,InnerTransferProfit.searchData.lineProductId,InnerTransferProfit.searchData.lineProductName,InnerTransferProfit.searchData.partnerAgencyId,InnerTransferProfit.searchData.partnerAgencyName,InnerTransferProfit.searchData.toBusinessGroupId,InnerTransferProfit.searchData.toBusinessGroupName,InnerTransferProfit.searchData.startTime,InnerTransferProfit.searchData.endTime)
                        });
                    
                        //分页--首页按钮事件
                        $tabId.find(".first").click(function(){

                            InnerTransferProfit.listInnerTransferProfit(0,InnerTransferProfit.searchData.lineProductId,InnerTransferProfit.searchData.lineProductName,InnerTransferProfit.searchData.partnerAgencyId,InnerTransferProfit.searchData.partnerAgencyName,InnerTransferProfit.searchData.toBusinessGroupId,InnerTransferProfit.searchData.toBusinessGroupName,InnerTransferProfit.searchData.startTime,InnerTransferProfit.searchData.endTime)

                        });
                        //分页--上一页事件
                        $tabId.find(".previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            InnerTransferProfit.listInnerTransferProfit(previous,InnerTransferProfit.searchData.lineProductId,InnerTransferProfit.searchData.lineProductName,InnerTransferProfit.searchData.partnerAgencyId,InnerTransferProfit.searchData.partnerAgencyName,InnerTransferProfit.searchData.toBusinessGroupId,InnerTransferProfit.searchData.toBusinessGroupName,InnerTransferProfit.searchData.startTime,InnerTransferProfit.searchData.endTime)

                        });
                        //分页--下一页事件
                        $tabId.find(".next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            InnerTransferProfit.listInnerTransferProfit(next,InnerTransferProfit.searchData.lineProductId,InnerTransferProfit.searchData.lineProductName,InnerTransferProfit.searchData.partnerAgencyId,InnerTransferProfit.searchData.partnerAgencyName,InnerTransferProfit.searchData.toBusinessGroupId,InnerTransferProfit.searchData.toBusinessGroupName,InnerTransferProfit.searchData.startTime,InnerTransferProfit.searchData.endTime)
                        });
                        //分页--尾页事件
                        $tabId.find(".last").click(function(){
                            InnerTransferProfit.listInnerTransferProfit(data.totalPage == 0 ? data.totalPage : data.totalPage-1,InnerTransferProfit.searchData.lineProductId,InnerTransferProfit.searchData.lineProductName,InnerTransferProfit.searchData.partnerAgencyId,InnerTransferProfit.searchData.partnerAgencyName,InnerTransferProfit.searchData.toBusinessGroupId,InnerTransferProfit.searchData.toBusinessGroupName,InnerTransferProfit.searchData.startTime,InnerTransferProfit.searchData.endTime)

                        });
                        //查看遊客人數事件
                        $tabId.find(".showPerson").click(function(){
                            var visitorGroupId = $(this).attr("data-entity-id")
                            InnerTransferProfit.clickFlag = 1;
                            InnerTransferProfit.viewTouristGroup(visitorGroupId);
                        });
                        //查看收客團款明細事件
                        $tabId.find(".showIncomeDetail").click(function(){

                            var visitorGroupId = $(this).attr("data-entity-id")
                            InnerTransferProfit.clickFlag = 2
                            InnerTransferProfit.viewTouristGroup(visitorGroupId);
                        });
                        //查看中轉m 事件
                        $tabId.find(".showChangeNeedPayDetail").click(function(){
                            var visitorGroupId = $(this).attr("data-entity-id")
                            InnerTransferProfit.viewTransit(visitorGroupId);
                        });
                        //查看内转明细事件
                        $tabId.find(".showTransNeedPayDeatil").click(function(){
                            var visitorGroupId = $(this).attr("data-entity-id")
                            InnerTransferProfit.viewTransfer(visitorGroupId);
                        });
                    }
                }
            });
        },
        //查看遊客小組的信息
        viewTouristGroup:function(id){
            $.ajax({
                url:""+APP_ROOT+"back/touristGroup.do?method=viewTouristGroupDetails&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"id="+id+"",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        var touristGroupInfo = JSON.parse(data.touristGroupDetail);
                        data.touristGroupDetail = touristGroupInfo;
                        console.log(data);
                        if(InnerTransferProfit.clickFlag == 1){
                            var html = viewTemplate(data);
                            //addTab(menuKey+"-view","查看小组",html);
                            layer.open({
                                type : 1,
                                title : "查看小组",
                                skin : 'layui-layer-rim', // 加上边框
                                area : [ "60%", '50%' ], // 宽高
                                zIndex : 1028,
                                content : html,
                                success : function() {
                                    var tab = "tab-resource_touristGroup-view-content";
                                    $(".btn-submit-addTouristGroup").click(function(){
                                        layer.close(viewTouristGroup);
                                    })
                                    function MenberNumber(){
                                        $(".addTouristList tr").each(function(i){
                                            if(i>0){
                                                $(this).children().eq(0).text(i);
                                            }
                                        })
                                        //接送安排显示隐藏
                                        var that1 = $("#"+tab+" .touristGroupMainForm input[name=touristReception]");
                                        var that2 = $("#"+tab+" .touristGroupMainForm input[name=touristSend]");
                                        if($("#"+tab+" .touristGroupMainForm input[name=touristReception]").is(":checked") == true){
                                            that1.parent().parent().parent().find(".reception-div").removeClass("hide");
                                        }
                                        else{
                                            that1.parent().parent().parent().find(".reception-div").addClass("hide");
                                        }
                                        if($("#"+tab+" .touristGroupMainForm input[name=touristSend]").is(":checked") == true){
                                            that2.parent().parent().parent().find(".send-div").removeClass("hide");
                                        }
                                        else{
                                            that2.parent().parent().parent().find(".send-div").addClass("hide");
                                        }
                                    }
                                    MenberNumber();
                                }
                            });
                        };
                        if(InnerTransferProfit.clickFlag == 2){
                            //visitorGroupMainInfo
                            var html = visitorGroupMainInfo(data);
                            //addTab(menuKey+"-view","查看小组",html);
                            layer.open({
                                type : 1,
                                title : "收客团款明細",
                                skin : 'layui-layer-rim', // 加上边框
                                area : [ "65%", '57%' ], // 宽高
                                zIndex : 1028,
                                content : html
                            });
                        }
                    }
                }
            });
        },
        viewTransit :function(id){
            $.ajax({
                url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupArrangeById&token="+$.cookie("token")+"&menuKey=resource_touristGroup"+"&operation=view",
                type:"POST",
                dataType:"json",
                data:"id="+id,
                beforeSend:function(){
                    //打开一个遮罩层
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        data.bus = JSON.parse(data.bus);
                        data.receiveGroup.outBusList = JSON.parse(data.receiveGroup.outBusList);
                        data.receiveGroup.outHotelList = JSON.parse(data.receiveGroup.outHotelList);
                        data.receiveGroup.outTicketList = JSON.parse(data.receiveGroup.outTicketList);
                        data.sendGroup.outBusList = JSON.parse(data.sendGroup.outBusList);
                        data.sendGroup.outHotelList = JSON.parse(data.sendGroup.outHotelList);
                        data.sendGroup.outTicketList = JSON.parse(data.sendGroup.outTicketList);
                        data.touristGroup = JSON.parse(data.touristGroup);
                        var html =transitViewTemplate(data);
                        layer.open({
                            type : 1,
                            title : "中转明细",
                            skin : 'layui-layer-rim', // 加上边框
                            area : [ "90%", '80%' ], // 宽高
                            zIndex : 1028,
                            content : html
                        })
                    }
                }
            })
        },
        //查看我社转出分团转客信息
        viewTransfer:function(id){
            //var id = $(this).attr("data-entity-id");
            $.ajax({
                url:""+APP_ROOT+"back/innerTransfer.do?method=edit&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:"id="+id+"",
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = layer.open({
                        type:3
                    });
                },
                success:function(data){

                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        data.innerTransfer = JSON.parse(data.innerTransfer);
                        //var html = viewTemplate(data);
                        var html = innerTransferInfoTemplate(data);
                        //addTab(menuKey+"-viewTransfer","查看我社转出",html);
                        layer.open({
                            type : 1,
                            title : "内转明细",
                            skin : 'layui-layer-rim', // 加上边框
                            area : [ "60%", '50%' ], // 宽高
                            zIndex : 1028,
                            content : html
                        });
                    }
                }
            });
        }
    }
    exports.listInnerTransferProfit = InnerTransferProfit.listInnerTransferProfit;
});
