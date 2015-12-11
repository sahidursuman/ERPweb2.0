define(function(require, exports) {
	var menuKey = "financial_planProfit",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list");

    var plan = {
    	searchData : false,
		$tab : false,
        $searchArea: false
	};

    plan.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        plan.listMain("","","","","",dateJson.startDate,dateJson.endDate,"");
    };

    plan.listMain = function(tripNumber,lineProductName,lineProductId,guideName,guideId,startTime,endTime,status){
        if (plan.$searchArea && arguments.length === 0) {
            // 初始化页面后，可以获取页面的参数
            tripNumber = plan.$searchArea.find("input[name=tripNumber]").val(),
            lineProductName = plan.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = plan.$searchArea.find("input[name=lineProductId]").val(),
            guideName = plan.$searchArea.find("input[name=guideName]").val(),
            guideId = plan.$searchArea.find("input[name=guideId]").val(),
            startTime = plan.$searchArea.find("input[name=startTime]").val(),
            endTime = plan.$searchArea.find("input[name=endTime]").val(),
            status = plan.$searchArea.find(".T-status button").data("value")
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        tripNumber = (tripNumber == "全部") ? "" : tripNumber;
        lineProductName = (lineProductName == "全部") ? "" : lineProductName;
        guideName = (guideName == "全部") ? "" : guideName;

        plan.searchData = {
            page : 0,
            tripNumber : tripNumber,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            guideName : guideName,
            guideId : guideId,
            start : startTime,
            end : endTime,
            status : status,
            sortType: 'auto'
        };
        var searchParam = JSON.stringify(plan.searchData);

        $.ajax({
            url: KingServices.build_url('financialTrip', 'findTotal'),
            type: 'POST',
            data: { searchParam : searchParam},
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    data.searchParam = plan.searchData;
                    var html = listMainTemplate(data);
                    Tools.addTab(menuKey,"发团利润",html);
                    plan.$tab = $("#tab-" + menuKey + "-content"),
                    plan.$searchArea = plan.$tab.find('.T-search-area');
                    plan.getQuery();
                    plan.listPlan(0);
                }
            }
        });
    };

    plan.listPlan = function(page){
        // 修正页码
        page = page || 0;
        plan.searchData.page = page;

        var searchParam = JSON.stringify(plan.searchData);
        $.ajax({
            url:KingServices.build_url("financialTrip","findPager"),
            type: "POST",
            async: false,
            data: { searchParam : searchParam},
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                	var html = listTemplate(data);
			    	$("#tab-" + menuKey + "-content").find(".T-listHtml").html(html);

			    	plan.initList();

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

    plan.initList = function(){
    	FinancialService.initDate(plan.$tab);

    	plan.$tab.find('.T-status').on('click', 'a', function(event) {
			event.preventDefault();
			var $that = $(this);
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			plan.listPlan(0);
		});
		//搜索按钮事件
        plan.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            plan.listMain();
        });

    	plan.$tab.find(".T-tripDetail").on("click",function(){
    		var id = $(this).closest('tr').data("id");
    		KingServices.tripDetail(id);
    	});
    };

    plan.getQuery = function(){
    	$.ajax({
            url: KingServices.build_url('financialTrip', 'findSelectValue'),
            type: 'POST',
            success: function(data) {
				var result = showDialog(data);
				if(result){
					var $lineProduct = $("#tab-" + menuKey + "-content").find("input[name=lineProductName]"),
						$guide = $("#tab-" + menuKey + "-content").find("input[name=guideName]"),
						lineProductList = data.lineProducts,
						guideList = data.guides;
			        if(lineProductList != null && lineProductList.length > 0){
			            for(var i=0;i<lineProductList.length;i++){
			                lineProductList[i].value = lineProductList[i].name;
			            }
			        }
			        if(guideList != null && guideList.length > 0){
			            for(var i=0;i<guideList.length;i++){
			                guideList[i].value = guideList[i].realName;
			            }
			        }
			        var all = {
			            id : "",
			            value : "全部"
			        };
			        lineProductList.unshift(all);
			        guideList.unshift(all); 

			        //线路产品
			        $lineProduct.autocomplete({
			            minLength: 0,
			            source : lineProductList,
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
			            source : guideList,
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
				}
			}
		});
    };

    exports.init = plan.initModule;
});