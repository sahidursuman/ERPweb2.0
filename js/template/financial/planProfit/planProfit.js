/**
 * 财务管理--单团利润
 *
 * by 廖佳玲
 */
define(function(require, exports) {
	var menuKey = "financial_planProfit",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list");

    var plan = {
    	searchData : false,
		$tab : false,
        $searchArea: false,
        lineProductList : false,
        guideList : false
	};

    plan.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        plan.searchData = {
            pageNo : 0,
            tripNumber : "",
            lineProductName : "",
            lineProductId : "",
            guideName : "",
            guideId : "",
            tripPlanType : "",
            start : dateJson.startDate,
            end : dateJson.endDate,
            billStatus : "",
            operateCalculteOut : 1,
            sortType: 'auto'
        };
        var data = {};
        data.searchParam = plan.searchData;
        var html = listMainTemplate(data);
        Tools.addTab(menuKey,"单团利润",html);
        
        plan.listMain("","","","","","",dateJson.startDate,dateJson.endDate,"",plan.searchData.operateCalculteOut);
    };

    plan.listMain = function(tripNumber,lineProductName,lineProductId,guideName,guideId,tripPlanType,startTime,endTime,billStatus,operateCalculteOut){
        plan.searchData = {
            pageNo : 0,
            tripNumber : tripNumber,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            guideName : guideName,
            guideId : guideId,
            tripPlanType : tripPlanType,
            start : startTime,
            end : endTime,
            billStatus : billStatus,
            operateCalculteOut : operateCalculteOut,
            sortType: 'auto'
        };
        var searchParam = JSON.stringify(plan.searchData);

        $.ajax({
            url: KingServices.build_url('financialTrip', 'findSelectValue'),
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    plan.$tab = $("#tab-" + menuKey + "-content"),
                    plan.$searchArea = plan.$tab.find('.T-search-area');

                    plan.listPlan(0);

                    var lineProductList = JSON.parse(data.lineProducts),
                        guideList = JSON.parse(data.guides);

                    if(lineProductList != null && lineProductList.length > 0){
                        for(var i=0;i<lineProductList.length;i++){
                            lineProductList[i].value = lineProductList[i].name;
                        }
                    }
                    if(guideList != null && guideList.length > 0){
                        for(var i=0;i<guideList.length;i++){
                            guideList[i].value = guideList[i].realname;
                        }
                    }
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    lineProductList.unshift(all);
                    guideList.unshift(all);

                    plan.lineProductList = lineProductList;
                    plan.guideList = guideList;

                    Tools.setDatePicker(plan.$tab.find(".date-picker"),true);
                    plan.$tab.find('.T-status').off().on('click', 'a', function(event) {
                        event.preventDefault();
                        var $that = $(this);
                        $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
                        plan.listPlan(0);
                    });
                    //搜索按钮事件
                    plan.$tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();
                        plan.listPlan(0);
                    });
                }
            }
        });
    };

    plan.listPlan = function(page,tripNumber,lineProductName,lineProductId,guideName,guideId,tripPlanType,startTime,endTime,billStatus,operateCalculteOut){
        if (plan.$searchArea && arguments.length === 1) {
            operateCalculteOut = 1;
            if(!plan.$tab.find(".T-checkTurn").is(":checked")){
                operateCalculteOut = 0;
            }
            // 初始化页面后，可以获取页面的参数
            tripNumber = plan.$searchArea.find("input[name=tripNumber]").val(),
            lineProductName = plan.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = plan.$searchArea.find("input[name=lineProductId]").val(),
            guideName = plan.$searchArea.find("input[name=guideName]").val(),
            guideId = plan.$searchArea.find("input[name=guideId]").val(),
            tripPlanType = plan.$searchArea.find("select[name=tripPlanType]").val(),
            startTime = plan.$searchArea.find("input[name=startTime]").val(),
            endTime = plan.$searchArea.find("input[name=endTime]").val(),
            billStatus = plan.$searchArea.find(".T-status button").data("value")
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        tripNumber = (tripNumber == "全部") ? "" : tripNumber;
        lineProductName = (lineProductName == "全部") ? "" : lineProductName;
        guideName = (guideName == "全部") ? "" : guideName;

        // 修正页码
        page = page || 0;
        plan.searchData = {
            pageNo : page,
            tripNumber : tripNumber,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            guideName : guideName,
            guideId : guideId,
            tripPlanType : tripPlanType,
            start : startTime,
            end : endTime,
            billStatus : billStatus,
            operateCalculteOut : operateCalculteOut,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(plan.searchData);
        $.ajax({
            url:KingServices.build_url("financialTrip","findPager"),
            type: "POST",
            data: { searchParam : searchParam},
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    data.isTurn = operateCalculteOut;
                	var html = listTemplate(data);
			    	$("#tab-" + menuKey + "-content").find(".T-planProfit-list").html(html);
                    if(operateCalculteOut == 0){
                        plan.$tab.find(".T-turn").hide();
                    } else{
                        plan.$tab.find(".T-turn").show();
                    }
                    plan.$tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

			    	plan.getSumData(plan.$tab,operateCalculteOut);
                    plan.getQuery();

                    // plan.$tab.find(".T-tripDetail").on("click",function(){
                    //     var id = $(this).closest('tr').data("id");
                    //     KingServices.tripDetail(id);
                    // });

                    //核算中转
                    plan.$tab.find(".T-checkTurn").off().on("click",function(){
                        plan.listPlan(0); 
                    });

			    	// 绑定翻页组件
                    laypage({
                        cont: plan.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                plan.listPlan(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    plan.getSumData = function($tab,operateCalculteOut){
        var searchParam = JSON.stringify(plan.searchData);
        $.ajax({
            url: KingServices.build_url('financialTrip', 'findTotal'),
            type: 'POST',
            data: { searchParam : searchParam},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var total = data.total;
                    var totalDataHtml = "<tr style='background: #effef4;'><td>合计</td><td></td><td></td><td></td><td>" + total.adultCount + " 大 " + total.childCount + " 小" + "</td><td></td><td></td><td></td><td>" + total.needPayAllMoney + "</td><td>" +
                                        total.shopMoney + "</td><td>" + total.selfIncome + "</td><td>" + total.incomeMoney + "</td><td>" + total.guideMoney + "</td><td>" + total.guideTip + "</td><td>" + total.insuranceMoney + "</td><td>" +
                                        total.busMoney + "</td><td>" + total.restaurantMoney + "</td><td>" + total.hotelMoney + "</td><td>" + total.scenicMoney + "</td><td>" + total.ticketMoney + "</td><td>" + total.selfPayMoney + "</td><td>" +
                                        total.otherMoney + "</td><td>" + total.shopCostMoney + "</td><td>" + total.selfMoney + "</td><td>" + total.guideDeductions + "</td>";
                    if(operateCalculteOut){
                        totalDataHtml += "<td>" + total.outBusMoney + "</td><td>" + total.outRestaurantMoney + "</td><td>" + total.outHotelMoney + 
                                         "</td><td>" + total.outTicketMoney + "</td><td>" + total.outOtherMoney + "</td>";
                    }
                    totalDataHtml += "<td>" + total.totalIncome + "</td><td>" + total.totalTrip + "</td>";
                    if(operateCalculteOut){
                        totalDataHtml += "<td>" + total.totalOut + "</td>";
                    }
                    totalDataHtml += "<td>" + total.profit + "</td><td>" + total.perCapitaProfit + "</td></tr>";
                    $tab.find(".T-planProfit-list").append(totalDataHtml);
                }
            }
        });
    };

    plan.getQuery = function(){
		var $lineProduct = $("#tab-" + menuKey + "-content").find("input[name=lineProductName]"),
			$guide = $("#tab-" + menuKey + "-content").find("input[name=guideName]");

        //线路产品
        $lineProduct.autocomplete({
            minLength: 0,
            source : plan.lineProductList,
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
        $guide.autocomplete({
            minLength: 0,
            source : plan.guideList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=guideId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=guideId]').val(ui.item.id);
            }
        }).on("click",function(){
            $guide.autocomplete('search', '');
        });
    };

    exports.init = plan.initModule;
});