/**
 * 财务管理--代订利润
 *
 * by 廖佳玲
 */
define(function(require, exports) {
    var menuKey = "financial_replaceProfit",
        listMain = require("./view/listMain"),
        listTemplate = require("./view/list"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail"),
        costDetailTempLate = require("./view/viewCostDetail"),
        tabId = "tab-"+menuKey+"-content";

    var replace = {
        searchData : false,
        $tab : false,
        $searchArea: false,
        sumData : false,
        partnerAgencyList : false,
        hotelList : false,
        scenicList : false,
        seatCountList : false,
        businessGroupList : false
    };

    replace.initModule = function() {
        var dateJson = FinancialService.getInitDate(),
            args = {
                startTime : dateJson.startDate,
                endTime : dateJson.endDate,
            };
        var data = {};
        data.searchParam = args;
        Tools.addTab(menuKey,"代订利润",listMain(data));

        replace.listMain(0,args);
    };

    replace.listMain = function(page,args){
        args = replace.getArgs(page,args);
        
        $.ajax({
            url : KingServices.build_url("profitBooking","getQueryTerms"),
            type  :"POST",
            data : args,
            success:function(data){
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if(result){
                    replace.$tab = $("#tab-" + menuKey + "-content"),
                    replace.$searchArea = replace.$tab.find('.T-search-area');
                    replace.listReplace(0,args);
                    var conditions = JSON.parse(data.conditions);
                        partnerAgencyList = conditions.agencies,
                        hotelList = conditions.hotels,
                        scenicList = conditions.scenics,
                        seatCountList = [];
                    replace.outOPUserList = conditions.users;
                    replace.groupList = conditions.groupList;
                    replace.businessGroupList = conditions.businessGroupList;
                    if(partnerAgencyList != null && partnerAgencyList.length > 0){
                        for(var i=0;i<partnerAgencyList.length;i++){
                            partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
                        }
                    }
                    if(hotelList != null && hotelList.length > 0){
                        for(var i=0;i<hotelList.length;i++){
                            hotelList[i].value = hotelList[i].name;
                        }
                    }
                    if(scenicList != null && scenicList.length > 0){
                        for(var i=0;i<scenicList.length;i++){
                            scenicList[i].value = scenicList[i].name;
                        }
                    }
                    if(conditions.needSeatCounts != null && conditions.needSeatCounts.length > 0){
                        for(var i = 0;i<conditions.needSeatCounts.length;i++){
                            var busSeat = {"count":conditions.needSeatCounts[i]};
                            seatCountList.push(busSeat);
                        }
                        for(var j = 0;j<seatCountList.length;j++){
                            seatCountList[j].value = seatCountList[j].count
                        }
                    }
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    partnerAgencyList.unshift(all);
                    hotelList.unshift(all);
                    scenicList.unshift(all);
                    seatCountList.unshift(all);

                    replace.partnerAgencyList = partnerAgencyList;
                    replace.hotelList = hotelList;
                    replace.scenicList = scenicList;
                    replace.seatCountList = seatCountList;
                    replace.getQuery();

                    //监听搜索区修改
                    replace.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
                        event.preventDefault();
                        replace.$tab.data('searchEdit', true);
                    });
                }
            }
        });
    };

    replace.getArgs = function(page,args){
        var args = args || {};
        if(replace.$tab){
            args = {
                pageNo : page || 0,
                partnerAgencyName : replace.$searchArea.find("input[name=partnerAgencyName]").val(),
                partnerAgencyId : replace.$searchArea.find("input[name=partnerAgencyId]").val(),
                hotelName : replace.$searchArea.find("input[name=hotelName]").val(),
                hotelId : replace.$searchArea.find("input[name=hotelId]").val(),
                scenicName : replace.$searchArea.find("input[name=scenicName]").val(),
                scenicId : replace.$searchArea.find("input[name=scenicId]").val(),
                ticketType : replace.$searchArea.find("select[name=ticketType]").val(),
                seatCount : replace.$searchArea.find("input[name=seatCount]").val(),
                startDate : replace.$searchArea.find("input[name=startDate]").val(),
                endDate : replace.$searchArea.find("input[name=endDate]").val(),
                outOPUserName : replace.$searchArea.find("input[name=outOPUserName]").val(),
                groupName : replace.$searchArea.find("input[name=groupName]").val(),
                groupId : replace.$searchArea.find("input[name=groupName]").data('id'),
                businessGroupName : replace.$searchArea.find("input[name=businessName]").val(),
                businessGroupId : replace.$searchArea.find("input[name=businessGroupName]").data('id'),
                orderNumber : replace.$searchArea.find("input[name=orderNumber]").val()
            }
        }

        args.partnerAgencyName = (args.partnerAgencyName == "全部") ? "" : args.partnerAgencyName;
        args.hotelName = (args.hotelName == "全部") ? "" : args.hotelName;
        args.scenicName = (args.scenicName == "全部") ? "" : args.scenicName;
        args.seatCount = (args.seatCount == "全部") ? "" : args.seatCount;
        args.sortType = "auto";

        if(replace.$tab && replace.$tab.data("searchEdit")){
            args.pageNo = 0;
            replace.$tab.data("searchEdit",false);
            replace.$tab.data("total",false);
        }
        return args;
    };

    replace.listReplace = function(page,args){
        args = replace.getArgs(page,args);

        if (args.pageNo == -1) {
            if (!args.startTime || !args.endTime) {
                showMessageDialog("请选择时间区间"); 
                return false;
            }
            exportXLS( APP_ROOT + 'back/export.do?method=exportBookingOrderProfit&token='+ $.cookie("token") +'&'+ $.param(args));
            return;
        }
        $.ajax({
            url : KingServices.build_url("profitBooking","listFinancialBookingOrder"),
            type  :"POST",
            data : args,
            success:function(data){
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if(result){
                    data.bookingOrderList = JSON.parse(data.bookingOrderList);
                    var html = listTemplate(data);
                    html = Tools.filterCount(html);
                    html = Tools.filterMoney(html);
                    html = Tools.filterUnPoint(html);
                    
                    replace.$tab.find('.T-list').html(html);
                    replace.$tab.find(".T-totalSize").text("共计 " + data.recordSize + " 条记录");

                    if(!replace.$tab.data("searchEdit") && replace.$tab.data("total")){
                        replace.loadSumData();
                    } else {
                        replace.getSumData(args);
                    }
                    
                    Tools.setDatePicker(replace.$searchArea.find('.date-picker'),true);
                    //搜索按钮事件
                    replace.$tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();
                        replace.listReplace(0);
                    });
                    //导出 
                     replace.$tab.find('.T-export').off().on('click', function(event) {
                        event.preventDefault();
                        replace.listReplace(-1);
                    });
                    replace.getOPUserList(replace.$tab.find('[name="outOPUserName"]'), replace.outOPUserList);
                    replace.getGroupMapList(replace.$tab.find('[name="groupName"]'));
                    replace.getBusinessList(replace.$tab.find('[name="businessName"]'));

                    replace.$tab.find('.T-list').off().on('click','.T-option',function(event) {
                        event.preventDefault();
                        var $that = $(this),
                            id = $that.closest('tr').data('id');
                        if ($that.hasClass('T-replaceDetail')) {
                            // 查看代订明细
                            KingServices.replaceDetail(id);
                        } else if ($that.hasClass('T-needPayDetail')) {
                            // 应收明细
                            replace.viewNeedPayDetail(id);
                        } else if ($that.hasClass('T-costDetail')) {
                            // 成本明细
                            replace.viewCostDetail(id);
                        }
                    });

                    // 绑定翻页组件
                    laypage({
                        cont: replace.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                replace.listReplace(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };
    //应收金额明细
    replace.viewNeedPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("profitBooking","getNeedIncomeDetails"),
            type:"POST",
            data:{
                id : id + ""
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = needPayDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "代订应收明细",
                        skin : 'layui-layer-rim',
                        area : '1000px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

    //成本明细
    replace.viewCostDetail = function(id){
        $.ajax({
            url:KingServices.build_url("profitBooking","getNeedPayDetails"),
            type:"POST",
            data:{
                id : id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = costDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "代订成本明细",
                        skin : 'layui-layer-rim',
                        area : '800px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

    replace.getSumData = function(args){
        $.ajax({
            url: KingServices.build_url('profitBooking', 'getStatistics'),
            type: 'POST',
            data: args,
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    replace.$tab.data("total", data);
                    replace.loadSumData();
                }
            }
        });
    };
    replace.loadSumData = function(){
        var total = replace.$tab.data("total");
        replace.$tab.find(".T-sumCostMoney").text(total.sumCostMoney);
        replace.$tab.find(".T-sumNeedGetMoney").text(total.sumNeedGetMoney);
        replace.$tab.find(".T-sumGrossProfit").text(total.sumGrossProfit);
    };

    replace.getQuery = function(){
        var $partner = replace.$tab.find("input[name=partnerAgencyName]"),
            $hotel = replace.$tab.find("input[name=hotelName]"),
            $scenic = replace.$tab.find("input[name=scenicName]"),
            $seat = replace.$tab.find("input[name=seatCount]");
        //客户
        $partner.autocomplete({
            minLength: 0,
            source : replace.partnerAgencyList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=partnerAgencyId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=partnerAgencyId]').val(ui.item.id).trigger('change');
            }
        }).on("click",function(){
            $partner.autocomplete('search', '');
        });  

        //酒店
        $hotel.autocomplete({
            minLength: 0,
            source : replace.hotelList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=hotelId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=hotelId]').val(ui.item.id).trigger('change');
            }
        }).on("click",function(){
            $hotel.autocomplete('search', '');
        });  

        //景区
        $scenic.autocomplete({
            minLength: 0,
            source : replace.scenicList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=scenicId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=scenicId]').val(ui.item.id).trigger('change');
            }
        }).on("click",function(){
            $scenic.autocomplete('search', '');
        });

        //车坐数
        $seat.autocomplete({
            minLength: 0,
            source : replace.seatCountList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=seatCount]').val('');
                }
            },
            select: function(event, ui) {
                $(this).trigger('change');
                $(this).blur().nextAll('input[name=seatCount]').val(ui.item.value);
            }
        }).on("click",function(){
            $seat.autocomplete('search', '');
        }); 
    };

    /**
     * 绑定责任计调的选择
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    replace.getOPUserList = function($target, data){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.id).trigger('change');
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */

            if (!!data) {
                for (var i = 0, len = data.length;i < len; i++) {
                    data[i].value = data[i].realName;
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
     * 绑定子部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    replace.getGroupMapList = function($target, data){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.groupId).trigger('change');
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


    /**
     * 绑定部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    replace.getBusinessList = function($target, data){
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
                $target.nextAll('[name=groupName]').val('').data('id','').trigger('change');

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

    exports.init = replace.initModule;
});