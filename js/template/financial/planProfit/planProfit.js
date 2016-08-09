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
        FinancialService.clearCache(plan.$tab);
        var dateJson = FinancialService.getInitDate(),
            args = {
                start : dateJson.startDate,
                end : dateJson.endDate,
                billStatus : ""
            };
        var data = {};
        data.searchParam = args;
        Tools.addTab(menuKey,"单团利润",listMainTemplate(data));
        
        plan.listMain(args);
    };

    plan.listMain = function(args){
        $.ajax({
            url: KingServices.build_url('financialTrip', 'findSelectValue'),
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    plan.$tab = $("#tab-" + menuKey + "-content"),
                    plan.$searchArea = plan.$tab.find('.T-search-area');

                    plan.listPlan(0,args);

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
                    plan.getQuery();

                    Tools.setDatePicker(plan.$tab.find(".date-picker"),true);
                    //监听搜索区修改
                    plan.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
                        event.preventDefault();
                        plan.$tab.data('searchEdit', true);
                    });

                    plan.$tab.find('.T-status').off().on('click', 'a', function(event) {
                        event.preventDefault();
                        var $that = $(this);
                        $that.closest('ul').prevAll('button').data('value', $that.data('value')).children('span').text($that.text());
                        plan.$tab.data('searchEdit', true);
                        plan.listPlan(0);
                    });
                    //搜索按钮事件
                    plan.$tab.find('.T-search').off().on('click', function(event) {
                        event.preventDefault();
                        plan.listPlan(0);
                    });

                    //导出报表事件 btn-hotelExport
                    plan.$tab.find(".T-btn-export").click(function(){
                        var argsData = plan.getArgs();
                        if(!argsData.start || !argsData.end){
                            showMessageDialog("请选择时间区间");
                            return false;
                        }
                        FinancialService.exportReport(argsData,"exportPlanProfit");
                    });
                }
            }
        });
    };

    plan.getArgs = function(page,args){
        var args = args || {};
        if(plan.$tab){
            args = {
                pageNo : page || 0,
                tripNumber : plan.$searchArea.find("input[name=tripNumber]").val(),
                lineProductName : plan.$searchArea.find("input[name=lineProductName]").val(),
                lineProductId : plan.$searchArea.find("input[name=lineProductId]").val(),
                guideName : plan.$searchArea.find("input[name=guideName]").val(),
                guideId : plan.$searchArea.find("input[name=guideId]").val(),
                tripPlanType : plan.$searchArea.find("select[name=tripPlanType]").val(),
                start : plan.$searchArea.find("input[name=startTime]").val(),
                end : plan.$searchArea.find("input[name=endTime]").val(),
                billStatus : plan.$searchArea.find(".T-status button").data("value")
            }
        }
        args.tripNumber = (args.tripNumber == "全部") ? "" : args.tripNumber;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;
        args.guideName = (args.guideName == "全部") ? "" : args.guideName;

        args.sortType = "auto";
        if(plan.$tab && plan.$tab.data("searchEdit")){
            args.pageNo = 0;
            plan.$tab.data("searchEdit",false);
            plan.$tab.data("total",false);
        }
        //导出报表参数
        if(arguments.length === 0){
            delete args.pageNo;
        }
        return args;
    };

    plan.listPlan = function(page,args){
        args = plan.getArgs(page,args);

        $.ajax({
            url:KingServices.build_url("financialTrip","findPager"),
            type: "POST",
            data: { searchParam : JSON.stringify(args)},
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                	var html = listTemplate(data);
                    html = Tools.filterCount(html);
                    html = Tools.filterMoney(html);
                    html = Tools.filterUnPoint(html);
			    	$("#tab-" + menuKey + "-content").find(".T-planProfit-list").html(html);
                    plan.$tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

                    if(!plan.$tab.data('searchEdit') && plan.$tab.data('total')){
                        plan.loadSumData(plan.$tab);
                    } else {
                        plan.getSumData(plan.$tab,args);
                    }
                    plan.getQuery();                    

                    plan.$tab.find('.T-toTripAccount').off().on('click',function(){
                        var id = $(this).closest('tr').data('id');
                        var pluginKey = 'plugin_print';
                        Tools.loadPluginScript(pluginKey);
                        KingServices.viewTripAccount(id);
                    });
                    
			    	// 绑定翻页组件
                    laypage({
                        cont: plan.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                plan.listPlan(obj.curr - 1,args);
                            }
                        }
                    });
                }
            }
        });
    };

    plan.getArgs = function(page,args){
        args = args || [];
        if(plan.$tab && (plan.$tab.data("searchEdit") || args.length == 0)){
            args = {
                tripNumber : plan.$tab.find("input[name=tripNumber]").val(),
                lineProductName : plan.$tab.find("input[name=lineProductName]").val(),
                lineProductId : plan.$tab.find("input[name=lineProductId]").val(),
                guideName : plan.$tab.find("input[name=guideName]").val(),
                guideId : plan.$tab.find("input[name=guideId]").val(),
                tripPlanType : plan.$tab.find("select[name=tripPlanType]").val(),
                start : plan.$tab.find("input[name=startTime]").val(),
                end : plan.$tab.find("input[name=endTime]").val(),
                billStatus : plan.$tab.find(".T-status button").data("value")
            }
        }

        args.pageNo = page || 0;
        args.tripNumber = (args.tripNumber == "全部") ? "" : args.tripNumber;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;
        args.guideName = (args.guideName == "全部") ? "" : args.guideName;
        args.sortType = "auto";

        if(plan.$tab.data("searchEdit")){
            args.pageNo = 0;
            plan.$tab.data("searchEdit",false);
            plan.$tab.data('total', false);
        }

        return args;
    };

    plan.getSumData = function($tab,args){
        $.ajax({
            url: KingServices.build_url('financialTrip', 'findTotal'),
            type: 'POST',
            data: { searchParam : JSON.stringify(args)},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    $tab.data("total",data.total);
                    plan.loadSumData($tab);
                }
            }
        });
    };

    //加载统计数据
    plan.loadSumData = function($tab){
        var total = $tab.data("total"),
            head = total.head ? total.head : {
                adultCount: 0,
                childCount: 0,
                tripPlanTotal: 0,
                totalIncome: 0,
                tripPlanPaySMoney: 0,
                grossProfit: 0,
                perCapitaProfit: 0,
                tripPlanProfit: 0
            },
            moneys = total.list ? total.list[0] : false;
        //头部
        $tab.find('.T-totalCount').text(head.adultCount +'大'+ head.childCount +'小');
        $tab.find('.T-totalTrip').text(head.tripPlanTotal);
        $tab.find('.T-totalInCome').text(head.totalIncome);
        $tab.find('.T-totalPay').text(head.tripPlanPaySMoney);
        $tab.find('.T-groProfit').text(head.grossProfit);
        $tab.find('.T-perProssPro').text(head.perCapitaProfit);
        $tab.find('.T-tripProfit').text(head.tripPlanProfit);

        //列表“合计”行
        if(moneys){
            var totalDataHtml = "<tr style='background: #e0effd;'><td rowspan='3'>合计</td><td rowspan='3'></td><td>应收/付</td><td><span class='F-float F-money'>" + moneys.needPayAllMoney + "</span></td><td><span class='F-float F-money'>" +
                            moneys.shopMoney + "</span></td><td><span class='F-float F-money'>" + moneys.selfIncome + "</span></td><td><span class='F-float F-money'>" + moneys.incomeMoney + "</span></td><td><span class='F-float F-money'>" + moneys.guideMoney + "</span></td><td><span class='F-float F-money'>" + moneys.insuranceMoney + "</span></td><td><span class='F-float F-money'>" +
                            moneys.busMoney + "</span></td><td><span class='F-float F-money'>" + moneys.restaurantMoney + "</span></td><td><span class='F-float F-money'>" + moneys.hotelMoney + "</span></td><td><span class='F-float F-money'>" + moneys.scenicMoney + "</span></td><td><span class='F-float F-money'>" + moneys.ticketMoney + "</span></td><td><span class='F-float F-money'>" + moneys.selfPayMoney + "</span></td><td><span class='F-float F-money'>" +
                            moneys.otherMoney + "</span></td><td><span class='F-float F-money'>" + moneys.guideTip + "</span></td><td><span class='F-float F-money'>" + moneys.shopCostMoney + "</span></td><td><span class='F-float F-money'>" + (moneys.shopQuanpeiRebateMoney || "-") + "</span></td><td><span class='F-float F-money'>" + moneys.selfMoney + "</span></td><td><span class='F-float F-money'>" + (moneys.selfPayQuanpeiRebateMoney || "-") + "</span></td><td><span class='F-float F-money'>" + moneys.guideDeductions + "</span></td>";
            totalDataHtml += "<td><span class='F-float F-money'>" + moneys.guideBackPaySMoney + "</span></td><td><span class='F-float F-money'>" + moneys.totalIncome + "</span></td><td><span class='F-float F-money'>" + moneys.totalTrip + "</span></td>";
            totalDataHtml += "<td rowspan='3'><span class='F-float F-money'>" + total.profit + "</span></td><td rowspan='3'><span class='F-float F-money'>" + total.perCapitaProfit + "</span></td></tr>";

            for(var i = 1; i <= 2; i++){
                moneys = total.list[i]
                totalDataHtml += "<tr style='background: #e0effd;'><td>";
                totalDataHtml += (i == 1) ? "已" : "未";
                totalDataHtml += "收/付</td><td>-";
                totalDataHtml += "</td><td><span class='F-float F-money'>" + moneys.shopMoney + "</span></td><td><span class='F-float F-money'>" + ((i == 2) ? "-" : moneys.selfIncome) + "</span></td><td><span class='F-float F-money'>" + ((i == 2) ? "-" : moneys.incomeMoney) + "</span></td><td><span class='F-float F-money'>" + (moneys.guideMoney || "-") + "</span></td><td><span class='F-float F-money'>" + moneys.insuranceMoney + "</span></td><td><span class='F-float F-money'>" +
                                moneys.busMoney + "</span></td><td><span class='F-float F-money'>" + moneys.restaurantMoney + "</span></td><td><span class='F-float F-money'>" + moneys.hotelMoney + "</span></td><td><span class='F-float F-money'>" + moneys.scenicMoney + "</span></td><td><span class='F-float F-money'>" + moneys.ticketMoney + "</span></td><td><span class='F-float F-money'>" + moneys.selfPayMoney + "</span></td><td><span class='F-float F-money'>" +
                                moneys.otherMoney + "</span></td><td><span class='F-float F-money'>" + (moneys.guideTip || "-") + "</span></td><td><span class='F-float F-money'>" + (moneys.shopCostMoney || "-") + "</span></td><td><span class='F-float F-money'>" + (moneys.shopQuanpeiRebateMoney || "-") + "</span></td><td><span class='F-float F-money'>" + (moneys.selfMoney || "-") + "</span></td><td><span class='F-float F-money'>" + (moneys.selfPayQuanpeiRebateMoney || "-") + "</span></td><td><span class='F-float F-money'>" + (moneys.guideDeductions || "-") + "</span></td>";
                totalDataHtml += "<td><span class='F-float F-money'>" + moneys.guideBackPaySMoney + "</span></td><td><span class='F-float F-money'>" + moneys.totalIncome + "</span></td><td><span class='F-float F-money'>" + moneys.totalTrip + "</span></td>";
            }
            totalDataHtml = Tools.filterCount(totalDataHtml);
            totalDataHtml = Tools.filterMoney(totalDataHtml);
            totalDataHtml = Tools.filterUnPoint(totalDataHtml);
            $tab.find(".T-planProfit-list").append(totalDataHtml);
        }
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
                $(this).trigger('change');
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
                $(this).trigger('change');
                $(this).blur().nextAll('input[name=guideId]').val(ui.item.id);
            }
        }).on("click",function(){
            $guide.autocomplete('search', '');
        });
    };

    exports.init = plan.initModule;
});