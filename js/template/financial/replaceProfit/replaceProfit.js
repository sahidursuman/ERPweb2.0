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
        seatCountList : false
    };

    replace.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        replace.searchData = {
            partnerAgencyName : "",
            partnerAgencyId : "",
            hotelName : "",
            hotelId : "",
            scenicName : "",
            scenicId :"",
            ticketType : "",
            needSeatCount : "",
            startTime : dateJson.startDate,
            endTime : dateJson.endDate,
            sortType: 'auto'
        };
        var data = {};
        data.searchParam = replace.searchData;
        var html = listMain(data);
        addTab(menuKey,"代订利润",html);

        replace.listMain("","","","","","","","",dateJson.startDate,dateJson.endDate);
    };

    replace.listMain = function(partnerAgencyName,partnerAgencyId,hotelName,hotelId,scenicName,scenicId,ticketType,seatCount,startDate,endDate){
        replace.searchData = {
            partnerAgencyName : partnerAgencyName,
            partnerAgencyId : partnerAgencyId,
            hotelName : hotelName,
            hotelId : hotelId,
            scenicName : scenicName,
            scenicId :scenicId,
            ticketType : ticketType,
            needSeatCount : seatCount,
            startTime : startDate,
            endTime : endDate,
            sortType: 'auto'
        };
        $.ajax({
            url : KingServices.build_url("profitBooking","getQueryTerms"),
            type  :"POST",
            data : replace.searchData,
            success:function(data){
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if(result){
                    replace.$tab = $("#tab-" + menuKey + "-content"),
                    replace.$searchArea = replace.$tab.find('.T-search-area');
                    replace.listReplace(0);
                    var conditions = JSON.parse(data.conditions);
                        partnerAgencyList = conditions.agencies,
                        hotelList = conditions.hotels,
                        scenicList = conditions.scenics,
                        seatCountList = [];
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
                }
            }
        });
    };

    replace.listReplace = function(page,partnerAgencyName,partnerAgencyId,hotelName,hotelId,scenicName,scenicId,ticketType,seatCount,startDate,endDate){
        if (replace.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            partnerAgencyName = replace.$searchArea.find("input[name=partnerAgencyName]").val(),
            partnerAgencyId = replace.$searchArea.find("input[name=partnerAgencyId]").val(),
            hotelName = replace.$searchArea.find("input[name=hotelName]").val(),
            hotelId = replace.$searchArea.find("input[name=hotelId]").val(),
            scenicName = replace.$searchArea.find("input[name=scenicName]").val(),
            scenicId = replace.$searchArea.find("input[name=scenicId]").val(),
            ticketType = replace.$searchArea.find("select[name=ticketType]").val(),
            seatCount = replace.$searchArea.find("input[name=seatCount]").val(),
            startDate = replace.$searchArea.find("input[name=startDate]").val(),
            endDate = replace.$searchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        partnerAgencyName = (partnerAgencyName == "全部") ? "" : partnerAgencyName;
        hotelName = (hotelName == "全部") ? "" : hotelName;
        scenicName = (scenicName == "全部") ? "" : scenicName;
        seatCount = (seatCount == "全部") ? "" : seatCount;
        // 修正页码
        page = page || 0;
        replace.searchData = {
            pageNo : page,
            partnerAgencyName : partnerAgencyName,
            partnerAgencyId : partnerAgencyId,
            hotelName : hotelName,
            hotelId : hotelId,
            scenicName : scenicName,
            scenicId :scenicId,
            ticketType : ticketType,
            needSeatCount : seatCount,
            startTime : startDate,
            endTime : endDate,
            sortType: 'auto'
        };

        $.ajax({
            url : KingServices.build_url("profitBooking","listFinancialBookingOrder"),
            type  :"POST",
            data : replace.searchData,
            success:function(data){
                layer.close(globalLoadingLayer);
                var result = showDialog(data);
                if(result){
                    data.bookingOrderList = JSON.parse(data.bookingOrderList);
                    var html = listTemplate(data);
                    replace.$tab.find('.T-list').html(html);
                    replace.$tab.find(".T-totalSize").text("共计 " + data.recordSize + " 条记录");

                    replace.getSumData();
                    replace.getQuery();
                    Tools.setDatePicker(replace.$searchArea.find('.date-picker'),true);
                    //搜索按钮事件
                    replace.$tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();
                        replace.listReplace(0);
                    });

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
                        curr: (page + 1),
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

    replace.getSumData = function(){
        $.ajax({
            url: KingServices.build_url('profitBooking', 'getStatistics'),
            type: 'POST',
            data: replace.searchData,
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    replace.$tab.find(".T-sumCostMoney").text(data.sumCostMoney);
                    replace.$tab.find(".T-sumNeedGetMoney").text(data.sumNeedGetMoney);
                    replace.$tab.find(".T-sumGrossProfit").text(data.sumGrossProfit);
                }
            }
        });
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
                $(this).blur().nextAll('input[name=partnerAgencyId]').val(ui.item.id);
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
                $(this).blur().nextAll('input[name=hotelId]').val(ui.item.id);
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
                $(this).blur().nextAll('input[name=scenicId]').val(ui.item.id);
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
                $(this).blur().nextAll('input[name=seatCount]').val(ui.item.value);
            }
        }).on("click",function(){
            $seat.autocomplete('search', '');
        }); 
    };

    exports.init = replace.initModule;
});