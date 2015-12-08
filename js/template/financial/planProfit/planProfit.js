define(function(require, exports) {
	var menuKey = "financial_planProfit",
        listTemplate = require("./view/list");

    var plan = {
    	searchData : false,
		$tab : false,
        $searchArea: false,
        sumData : false
	};

    plan.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
    	plan.getSumData();
        plan.listPlan(0,"","","","","",dateJson.startDate,dateJson.endDate,"");
    };

    plan.listPlan = function(page,tripNumber,lineProductName,lineProductId,guideName,guideId,startTime,endTime,status){
    	if (plan.$searchArea && arguments.length === 1) {
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
        // 修正页码
        page = page || 0;

        plan.searchData = {
        	page : page,
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
            url:KingServices.build_url("financialTrip","findPager"),
            type: "POST",
            data: plan.searchData,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                	data.sumData = plan.sumData;
                	var html = listTemplate(data);
			    	Tools.addTab(menuKey,"发团利润",html);

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
    	plan.$tab = $("#tab-" + menuKey + "-content"),
    	plan.$searchArea = plan.$tab.find('.T-search-area');

    	plan.getQuery();

    	plan.$searchArea.find('.date-picker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});

    	plan.$tab.find('.T-status').on('click', 'a', function(event) {
			event.preventDefault();
			var $that = $(this);
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			plan.listPlan(0);
		});
		//搜索按钮事件
        plan.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            plan.getSumData();
            plan.listPlan(0);
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
            data: {},
            showLoading:false,
            success: function(data) {
				var result = showDialog(data);
				if(result){
					var $tripNumber = plan.$tab.find("input[name=tripNumber]"),
						$lineProduct = plan.$tab.find("input[name=lineProductName]"),
						$guide = plan.$tab.find("input[name=guideName]"),
						lineProductList = data.lineProducts,
						tripNumbers = data.tripNumbers,
						guideList = data.guides;
			        if(lineProductList != null && lineProductList.length > 0){
			            for(var i=0;i<lineProductList.length;i++){
			                lineProductList[i].value = lineProductList[i].name;
			            }
			        }
			        if(tripNumbers != null && tripNumbers.length > 0){
			            for(var i=0;i<tripNumbers.length;i++){
			                tripNumbers[i].value = tripNumbers[i].tripNumber;
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
			        tripNumbers.unshift(all);
			        guideList.unshift(all);

			        //团号
			        $tripNumber.autocomplete({
			            minLength: 0,
			            source : tripNumbers,
			            change: function(event, ui) {
			                if (!ui.item)  {
			                    $(this).nextAll('input[name=tripNumber]').val('');
			                }
			            },
			            select: function(event, ui) {
			                $(this).blur().nextAll('input[name=tripNumber]').val(ui.item.id);
			            }
			        }).on("click",function(){
			            $tripNumber.autocomplete('search', '');
			        });  

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

    plan.getSumData = function(){
    	$.ajax({
            url: KingServices.build_url('financialTrip', 'findTotal'),
            type: 'POST',
            data: {},
            showLoading:false,
            success: function(data) {
				var result = showDialog(data);
				if(result){
					plan.sumData = data.total;
				}
			}
    	});
    };

    exports.init = plan.initModule;
});