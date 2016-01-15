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
        
        ColGuest.listMain("","","","","","",dateJson.startDate,dateJson.endDate);
    };

    ColGuest.listMain = function(lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime){
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
            sortType: 'auto'
        };
        var searchParam = JSON.stringify(ColGuest.searchData);

        $.ajax({
            url: KingServices.build_url('profitTransfer', 'searchParam'),
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var lineProductNameList = data.lineProductNameList,
                        partnerAgencyNameList = data.partnerAgencyNameList;

                    var lineProducts  = $("#tab-" + menuKey + "-content input[name=lineProductName]"),
                        groupCollective  = $("#tab-" + menuKey + "-content input[name=partnerAgencyName]");

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
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    lineProductNameList.unshift(all);
                    partnerAgencyNameList.unshift(all);
                    ColGuest.listGuest(0); 

                    ColGuest.lineProductList = lineProductNameList;
                    ColGuest.partnerAgencyList = partnerAgencyNameList;

                    var  $tab = $("#tab-" + menuKey + "-content");
                    Tools.setDatePicker($tab.find(".date-picker"),true);
                    //搜索按钮事件
                    $tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();
                        ColGuest.listGuest(0);
                    });
                }
            }
        });
    };

    ColGuest.listGuest = function(pageNo,lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime){
        if (ColGuest.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            lineProductName = ColGuest.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = ColGuest.$searchArea.find("input[name=lineProductId]").val(),
            fromPartnerAgencyName = ColGuest.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
            fromPartnerAgencyId = ColGuest.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
            customerType = ColGuest.$searchArea.find("select[name=customerType]").val(),
            orderNumber = ColGuest.$searchArea.find("input[name=orderNumber]").val(),
            startTime = ColGuest.$searchArea.find("input[name=startTime]").val(),
            endTime = ColGuest.$searchArea.find("input[name=endTime]").val()
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
            sortType: 'auto'
        };

        $.ajax({
            url:KingServices.build_url("receiveProfit","listReceiveProfit"),
            type: "POST",
            data: { searchParam : JSON.stringify(ColGuest.searchData)},
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    $("#tab-" + menuKey + "-content").find(".T-guest-list").html(html);
                    var $tab = $("#tab-" + menuKey + "-content");
                    $tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

                    ColGuest.getSumData(ColGuest.$tab);
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

    ColGuest.getSumData = function($tab){
        $.ajax({
            url: KingServices.build_url('receiveProfit', 'getStatistics'),
            type: 'POST',
            data: { searchParam : JSON.stringify(ColGuest.searchData)},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    $tab.find(".T-totalIncome").text(data.sumIncomeTrip);
                    $tab.find(".T-totalTrip").text(data.sumPayTrip);
                    $tab.find(".T-totalProfit").text(data.sumProfit);
                    $tab.find(".T-AvgProfit").text(data.sumAvgProfit);
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

    exports.init = ColGuest.initModule;
});