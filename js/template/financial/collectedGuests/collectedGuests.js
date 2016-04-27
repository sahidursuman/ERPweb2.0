/**
 * 财务管理--收客利润
 *
 * by 廖佳玲
 */
define(function(require, exports) {
	var menuKey = "financial_collectedGuests",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list");

    var ColGuest = {
    	searchData : false,
        $searchArea: false,
        lineProductList : false,
        partnerAgencyList : false
	};

    ColGuest.initModule = function(isTurn) {
        var dateJson = FinancialService.getInitDate();
        ColGuest.searchData = {
            pageNo : 0,
            startTime : dateJson.startDate,
            endTime : dateJson.endDate,
        };
        var data = {};
        data.searchParam = ColGuest.searchData;
        var html = listMainTemplate(data);
        Tools.addTab(menuKey,"收客利润",html);
        
        ColGuest.listMain("","","","","","",dateJson.startDate,dateJson.endDate,"","","","","");
    };

    ColGuest.listMain = function(lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime,outOPUserName,groupName,businessGroupName,businessGroupId,groupId){
        ColGuest.searchData = {
            pageNo : 0,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            fromPartnerAgencyName : fromPartnerAgencyName,
            fromPartnerAgencyId : fromPartnerAgencyId,
            customerType : customerType,
            orderNumber : orderNumber,
            startTime : startTime,
            endTime : endTime,
            outOPUserName : outOPUserName,
            groupName : groupName,
            groupId : groupId,
            businessGroupName : businessGroupName,
            businessGroupId : businessGroupId,
            sortType: 'auto'
        };
        var searchParam = JSON.stringify(ColGuest.searchData);

        $.ajax({
            url: KingServices.build_url('receiveProfit', 'getStatistics'),
            type: 'POST',
            data:{searchParam : JSON.stringify(ColGuest.searchData)},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var  $tab = $("#tab-" + menuKey + "-content");
                    ColGuest.$searchArea = $tab.find('.T-search-area');

                    var lineProductNameList = data.lineProductList,
                        partnerAgencyList = data.fromPartnerAgencyList;
                        businessGroupList = data.businessGroupList;

                    if(lineProductNameList !=null && lineProductNameList.length>0){
                        for(var i = 0;i<lineProductNameList.length;i++){
                            lineProductNameList[i].id = lineProductNameList[i].lineProductId;
                            lineProductNameList[i].value = lineProductNameList[i].lineProductName;
                        }
                    }

                    if(partnerAgencyList !=null && partnerAgencyList.length>0){
                        for(var i = 0;i<partnerAgencyList.length;i++){
                            partnerAgencyList[i].id = partnerAgencyList[i].fromPartnerAgencyId;
                            partnerAgencyList[i].value = partnerAgencyList[i].fromPartnerAgencyName;
                        }
                    }
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    lineProductNameList.unshift(all);
                    partnerAgencyList.unshift(all);

                    ColGuest.lineProductList = lineProductNameList;
                    ColGuest.partnerAgencyList = partnerAgencyList;

                    ColGuest.listGuest(0);
                    ColGuest.getSumData($tab,ColGuest.searchData);

                    Tools.setDatePicker($tab.find(".date-picker"),true);

                    ColGuest.getOPUserList(ColGuest.$searchArea.find("input[name=outOPUserName]"), data.outOPUserList);
                    ColGuest.getGroupMapList(ColGuest.$searchArea.find("input[name=groupName]"));
                    ColGuest.getBusinessList(ColGuest.$searchArea.find("input[name=businessName]"));
                    //搜索按钮事件
                    $tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();

                        ColGuest.listMain(
                            '',
                            ColGuest.$searchArea.find('input[name="lineProductName"]').val(),
                            ColGuest.$searchArea.find('input[name="lineProductId"]').val(),
                            ColGuest.$searchArea.find('input[name="fromPartnerAgencyName"]').val(),
                            ColGuest.$searchArea.find('input[name="fromPartnerAgencyId"]').val(),
                            ColGuest.$searchArea.find('select[name="customerType"]').val(),
                            ColGuest.$searchArea.find('input[name="orderNumber"]').val(),
                            ColGuest.$searchArea.find('input[name="startTime"]').val(),
                            ColGuest.$searchArea.find('input[name="endTime"]').val(),
                            ColGuest.$searchArea.find("input[name=outOPUserName]").val(),
                            ColGuest.$searchArea.find("input[name=groupName]").val(),
                            ColGuest.$searchArea.find("input[name=groupName]").data('id'),
                            ColGuest.$searchArea.find("input[name=businessName]").val(),
                            ColGuest.$searchArea.find("input[name=businessName]").data('id'));
                    });
                }
            }
        });
    };

    ColGuest.listGuest = function(pageNo,lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime, outOPUserName, groupName,groupId,businessGroupName,businessGroupId){
        if (ColGuest.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            lineProductName = ColGuest.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = ColGuest.$searchArea.find("input[name=lineProductId]").val(),
            fromPartnerAgencyName = ColGuest.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
            fromPartnerAgencyId = ColGuest.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
            customerType = ColGuest.$searchArea.find("select[name=customerType]").val(),
            orderNumber = ColGuest.$searchArea.find("input[name=orderNumber]").val(),
            startTime = ColGuest.$searchArea.find("input[name=startTime]").val(),
            endTime = ColGuest.$searchArea.find("input[name=endTime]").val();
            outOPUserName = ColGuest.$searchArea.find("input[name=outOPUserName]").val();
            groupName = ColGuest.$searchArea.find("input[name=groupName]").val();
            groupId = ColGuest.$searchArea.find("input[name=groupName]").data('id');
            businessGroupName = ColGuest.$searchArea.find("input[name=businessName]").val();
            businessGroupId = ColGuest.$searchArea.find("input[name=businessName]").data('id');
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        lineProductName = (lineProductName == "全部") ? "" : lineProductName;
        fromPartnerAgencyName = (fromPartnerAgencyName == "全部") ? "" : fromPartnerAgencyName;

        // 修正页码
        pageNo = pageNo || 0;
        ColGuest.searchData = {
            pageNo : pageNo,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            fromPartnerAgencyName : fromPartnerAgencyName,
            fromPartnerAgencyId : fromPartnerAgencyId,
            customerType : customerType,
            orderNumber : orderNumber,
            startTime : startTime,
            endTime : endTime,
            outOPUserName : outOPUserName,
            groupName : groupName,
            groupId:groupId,
            businessGroupName:businessGroupName,
            businessGroupId:businessGroupId,
            order : "desc",
            sortType: 'startTime'
        };
        $.ajax({
            url:KingServices.build_url("receiveProfit","findPager"),
            type: "POST",
            data: ColGuest.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    html = Tools.filterCount(html);
                    html = Tools.filterMoney(html);
                    html = Tools.filterUnPoint(html);
                    
                    $("#tab-" + menuKey + "-content").find(".T-guest-list").html(html);
                    var $tab = $("#tab-" + menuKey + "-content");
                    $tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

                    ColGuest.getQuery($tab);

                    $tab.find(".T-viewLine").off().on("click",function(){
                        KingServices.viewLineProduct($(this).data("lid"));
                    });

                    //绑定翻页组件
                    laypage({
                        cont: $tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                ColGuest.listGuest(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    ColGuest.getQuery = function($tab){
        var $lineProduct = $tab.find("input[name=lineProductName]"),
            $partner = $tab.find("input[name=fromPartnerAgencyName]");

        //线路产品
        $lineProduct.autocomplete({
            minLength: 0,
            source : ColGuest.lineProductList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=lineProductId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=lineProductId]').val(ui.item.id);
            }
        }).on("click",function(){
            $lineProduct.autocomplete('search', '');
        });  

        //导游
        $partner.autocomplete({
            minLength: 0,
            source : ColGuest.partnerAgencyList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=fromPartnerAgencyId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=fromPartnerAgencyId]').val(ui.item.id);
            }
        }).on("click",function(){
            $partner.autocomplete('search', '');
        });
    };

    ColGuest.getSumData = function($tab,args){
        $.ajax({
            url:KingServices.build_url("receiveProfit","findTotal"),
            type: "POST",
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.find(".T-touristCount").text(data.total.adultCount + " 大 " + data.total.childCount + " 小");
                $tab.find(".T-totalIncome").text(data.total.income);
                $tab.find(".T-totalTrip").text(data.total.cost);
                $tab.find(".T-totalProfit").text(data.total.profit);
                $tab.find(".T-AvgProfit").text(data.total.avgProfit);
            }  
        });
        
    };

    /**
     * 绑定责任计调的选择
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    ColGuest.getOPUserList = function($target, data){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.id);
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */

            if (!!data) {
                for (var i = 0, len = data.length;i < len; i++) {
                    data[i].value = data[i].outOPUserName;
                    data[i].id = data[i].outOPUserId;
                }

                $target.autocomplete('option', 'source', data).data('ajax', true);
                $target.autocomplete('search', '');
            }
        })
        .on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        })
    };

     /**
     * 绑定部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    ColGuest.getBusinessList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.businessGroupId);
                $target.nextAll('[name=groupName]').val('').data('id','');
            }
        }).off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url("group", "selectBusinessGroup"),
                type: "POST",
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var listObj = data.businessGroupList;
                    if (listObj != null && listObj.length > 0) {
                        for (var i = 0; i < listObj.length; i++) {
                            listObj[i].value = listObj[i].businessGroupName;
                        }
                    } else {
                        layer.tips('没有内容', $target, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $target.autocomplete('option', 'source', listObj);
                    $target.autocomplete('search', '');
                }
            })
        })
    };

    /**
     * 绑定子部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    ColGuest.getGroupMapList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.groupId);
            }
        }).off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url("group", "selectGroup"),
                type: "POST",
                data: "businessGroupId=" + $target.closest('div').find('[name=businessName]').data('id'),
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var listObj = data.groupMapList;
                    if (listObj != null && listObj.length > 0) {
                        for (var i = 0; i < listObj.length; i++) {
                            listObj[i].value = listObj[i].groupName;
                        }
                    } else {
                        layer.tips('没有内容', $target, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $target.autocomplete('option', 'source', listObj);
                    $target.autocomplete('search', '');
                }
            })
        })
    };

    exports.init = ColGuest.initModule;
});