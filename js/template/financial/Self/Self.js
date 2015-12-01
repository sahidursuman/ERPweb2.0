define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_self",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		SelfChecking = require("./view/SelfChecking"),
		SelfClearing = require("./view/SelfClearing"),
		blanceRecords = require("./view/selfPayRecords"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = [];
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    }
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }
	    var Self = {
	    	$searchArea: false
	    };
	    Self.initModule = function() {
        	Self.listSelf(0,"",2015,"");
    	};
	    Self.listSelf = function(page,selfPayId,year,month){
    		Self.searchData={
				pageNo : page,
				selfPayId : selfPayId,
				year : year,
				month : month,
				sortType : 'auto'
			};
		$.ajax({
			url:KingServices.build_url("financial/financialSelfPay","listSumFcSelfPay"),
			type:"POST",
			data:Self.searchData,
			dataType:"json",
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					data.selfPayNameListNew = JSON.parse(data.selfPayNameListNew);
					data.yearList=yearList;
					data.monthList=monthList;
					data.searchParam=Self.searchData;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"自费账务",html);
					Self.initList();
					
				}
			}
		});
	}
	Self.initList = function(){
		        // 初始化jQuery 对象
		        Self.$tab = $('#' + tabId);
		        Self.$searchArea = Self.$tab.find('.T-search-area');
		       
                

		        //搜索按钮事件
		        Self.$tab.find('.T-search').on('click', function(event) {
		            event.preventDefault();
		            Self.listSelf(0);
		        });

		        // 报表内的操作
		        Self.$tab.find('.T-list').on('click', '.T-option', function(event) {
		            event.preventDefault();
		            var $that = $(this),
		            yearList = Self.$searchArea.find("select[name=year]").val(),
	                monthList = Self.$searchArea.find("select[name=month]").val(),
	                selfPayId = $that.attr("data-entity-id");
	                selfPayName = $that.attr("data-entity-selfPayName");
	                startMonth = $that.attr("data-entity-startMonth");
	                endMonth = $that.attr("data-entity-endMonth");
	                endMonth = $that.attr("data-entity-id");
					console.log(selfPayId);
		            if ($that.hasClass('T-check')) {
		                // 对账
		               Self.Getcheck(0,selfPayId,selfPayName,yearList,monthList);
		            } else if ($that.hasClass('T-clear')) {
		                // 结算
		                Self.GetChecking(0,selfPayId,selfPayName,yearList,startMonth,endMonth);
		            }
		        });

    		};
    Self.Getcheck = function(page,selfPayId,selfPayName,year,month){
		    	Self.CheckData = {
		    		pageNo : page,
		    		selfPayId:selfPayId,
		    		selfPayName :selfPayName,
		    		year : year,
		    		month  : month,
		    		sortType : "auto"
		    	}
		    	$.ajax({
		    		 url:KingServices.build_url("financial/financialSelfPay","listFcSelfPay"),
		             type:"POST",
		             data:Self.CheckData,
		             dataType:"json",
		             success:function(data){
		                var result = showDialog(data);
		             	if(result){
		             	data.yearList=yearList;
						data.monthList=monthList;
						data.searchParam=Self.searchData;
		             	data.financialSelfPayList = JSON.parse(data.financialSelfPayList);
		             	var html = SelfChecking(data);
		    			Tools.addTab(checkTabId,"自费对账",html);
		    			         //给全选按钮绑定事件
				        $(".T-cking").find(".T-checkAll").click(function(){
				            var checkboxList = $(".T-cking").find(".T-checkList tr input[type=checkbox]");
				            if($(this).is(":checked")){
				                checkboxList.each(function(i){
				                    $(this).prop("checked",true);
				                });
				            } else{
				                checkboxList.each(function(i){
				                	if(!$(this).prop("disabled")){
				                		$(this).prop("checked",false);
				                	}                                
				                });
				            } 
				        });
				        //关闭页面事件
				        $(".T-cking").find(".T-closeTab").click(function(){
				            closeTab(checkTabId);
				        });
		             }

		            }
		         })

    }
    // 结算
    Self.GetChecking = function(page,selfPayId,selfPayName,year,startMonth,endMonth){
    	Self.CheckData = {
    		pageNo : page,
    		selfPayId:selfPayId,
    		selfPayName : selfPayName,
    		year : year,
    		monthStart :startMonth,
    		monthEnd : endMonth,
    		sortType : "auto"

    	}
    	$.ajax({
    		url:KingServices.build_url("financial/financialSelfPay","listFcSelfPaySettlement"),
             type:"POST",
             data:Self.CheckData,
             dataType:"json",
             success:function(data){
             	console.log(data);
             	var result = showDialog(data);
             	if(result){
             		data.yearList=yearList;
					data.monthList=monthList;
             		var html = SelfClearing(data);
    				Tools.addTab(blanceTabId,"自费结算",html);
    				$(".T-Clear").find('.T-Records').click(function(id) {
    					alert();
    					Self.lookDetail(37);
    				});
             	}

             }
    	})
    }
    Self.lookDetail = function(selfPayId){
    	Self.ClearData = {
    		selfPayId:selfPayId
    	}
    	$.ajax({
    		url:KingServices.build_url("financial/financialSelfPay","listFcSelfPaySettlementRecord"),
			type:"POST",
			data:Self.ClearData,
			dataType:"json",
			success : function(data){
				var result = showDialog(data);
				if(result){
					var html = blanceRecords(data);
				var lookDetailLayer = layer.open({
				    type: 1,
				    title:"已付金额明细",
				    skin: 'layui-layer-rim', //加上边框
				    area: '55%', //宽高
				    zIndex:1028,
				    content: html,
				    scrollbar: false,

				    });
				}
			}
    	})

				
		}

	exports.init = Self.initModule;
});
