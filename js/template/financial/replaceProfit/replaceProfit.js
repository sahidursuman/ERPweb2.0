define(function(require, exports) {
    var menuKey = "financial_replaceProfit",
        listTemplate = require("./view/list"),
        tabId = "tab-"+menuKey+"-content";

    var replace = {
        searchData : false,
        $tab : false,
        $searchArea: false
    };

    replace.initModule = function() {
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate();
        var startTime = year + "-" + month + "-1",
            endTime = year + "-" + month + "-" + day;

        replace.listReplace(0,"","","","","","","","",startTime,endTime);
    };

    replace.listReplace = function(page,partnerAgencyName,partnerAgencyId,hotelName,hotelId,scenicName,scenicId,ticketType,seatCount,startTime,endTime){
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
            startTime = replace.$searchArea.find("input[name=startTime]").val(),
            endTime = replace.$searchArea.find("input[name=endTime]").val()
        }
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
            type : ticketType,
            needSeatCount : seatCount,
            startTime : startTime,
            endTime : endTime,
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
                    data.searchParam = replace.searchData;
                    var html = listTemplate(data);
                    addTab(menuKey,"代订利润",html);
                    replace.initList();

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

    replace.initList = function(){
        replace.$tab = $("#tab-" + menuKey + "-content"),
        replace.$searchArea = replace.$tab.find('.T-search-area');

        replace.getQuery();

        replace.$searchArea.find('.date-picker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
        //搜索按钮事件
        replace.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            replace.listReplace(0);
        });

        replace.$tab.find(".T-replaceDetail").on("click",function(){
            var id = $(this).closest('tr').data("id");
            KingServices.replaceDetail(id);
        });
    };

    replace.getQuery = function(){
        $.ajax({
            url: KingServices.build_url('profitBooking', 'getFinancialConditions'),
            type: 'POST',
            data: "",
            showLoading:false,
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var $partner = replace.$tab.find("input[name=partnerAgencyName]"),
                        $hotel = replace.$tab.find("input[name=hotelName]"),
                        $scenic = replace.$tab.find("input[name=scenicName]"),
                        $seat = replace.$tab.find("input[name=seatCount]"),
                        conditions = JSON.parse(data.conditions);
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

                    //客户
                    $partner.autocomplete({
                        minLength: 0,
                        source : partnerAgencyList,
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
                        source : hotelList,
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
                        source : scenicList,
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
                        source : seatCountList,
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
                }
            }
        });
    };

    exports.init = replace.initModule;
});