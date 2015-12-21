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
            start : dateJson.startDate,
            end : dateJson.endDate,
            billStatus : "",
            sortType: 'auto'
        };
        var data = {};
        data.searchParam = plan.searchData;
        var html = listMainTemplate(data);
        Tools.addTab(menuKey,"发团利润",html);
        
        plan.listMain("","","","","",dateJson.startDate,dateJson.endDate,"");
    };

    plan.listMain = function(tripNumber,lineProductName,lineProductId,guideName,guideId,startTime,endTime,billStatus){
        plan.searchData = {
            pageNo : 0,
            tripNumber : tripNumber,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            guideName : guideName,
            guideId : guideId,
            start : startTime,
            end : endTime,
            billStatus : billStatus,
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

    plan.listPlan = function(page,tripNumber,lineProductName,lineProductId,guideName,guideId,startTime,endTime,billStatus){
        if (plan.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            tripNumber = plan.$searchArea.find("input[name=tripNumber]").val(),
            lineProductName = plan.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = plan.$searchArea.find("input[name=lineProductId]").val(),
            guideName = plan.$searchArea.find("input[name=guideName]").val(),
            guideId = plan.$searchArea.find("input[name=guideId]").val(),
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
            start : startTime,
            end : endTime,
            billStatus : billStatus,
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
                	var html = listTemplate(data);
			    	$("#tab-" + menuKey + "-content").find(".T-planProfit-list").html(html);
                    plan.$tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

			    	plan.getSumData();
                    plan.getQuery();

                    plan.$tab.find(".T-tripDetail").on("click",function(){
                        var id = $(this).closest('tr').data("id");
                        KingServices.tripDetail(id);
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

    plan.getSumData = function(){
        var searchParam = JSON.stringify(plan.searchData);
        $.ajax({
            url: KingServices.build_url('financialTrip', 'findTotal'),
            type: 'POST',
            data: { searchParam : searchParam},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    var total = data.total;
                    plan.$tab.find(".T-totalIncome").text(total.totalIncome);
                    plan.$tab.find(".T-totalTrip").text(total.totalTrip);
                    plan.$tab.find(".T-totalOut").text(total.totalOut);
                    plan.$tab.find(".T-profit").text(total.profit);
                    plan.$tab.find(".T-perCapitaProfit").text(total.perCapitaProfit);
                    plan.$tab.find(".T-personCount").text(total.adultCount + " 大 " + total.childCount + " 小");
                    plan.$tab.find(".T-tripCount").text(total.tripCount);
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