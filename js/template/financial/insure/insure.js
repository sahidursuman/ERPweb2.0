define(function(require, exports) {
	var rule = require("./rule");
		menuKey = "financial_insure",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    blanceRecords = require("./view/insuranceRecords"),
	    insuranceChecking = require("./view/insureChecking"),
	    insureClearing = require("./view/insureClearing"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = [];
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    };
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }

		var  Insure = {
			$searchArea : false
		}
		Insure.initModule = function() {
	        Insure.listInsure(0,"",2015,"");
	        
	   	};
	  	Insure.listInsure = function(pageNo,insuranceId,year,month){
	  		if (Insure.$searchArea && arguments.length === 1) {
	            // 初始化页面后，可以获取页面的参数
	            insuranceId = Insure.$searchArea.find("select[name=insuranceId]").val(),
	            year = Insure.$searchArea.find("select[name=year]").val(),
	            month = Insure.$searchArea.find("select[name=month]").val()
        	}
	  		Insure.searchData={
	  			pageNo:pageNo,
	  			insuranceId:insuranceId,
	  			year:year,
	  			month:month,
	  			sortType: 'auto'
	  		};
	  	$.ajax({
	       url:KingServices.build_url("financial/financialInsurance","listSumFcInsurance"),
			type:"POST",
			data:Insure.searchData,
	        success: function(data){
	            var result = showDialog(data);
	            if (result) {
	            	data.insuranceCompanyNameListNew = JSON.parse(data.insuranceCompanyNameListNew);
	            	data.yearList = yearList
	            	data.monthList = monthList
	                var html = listTemplate(data);
	                Tools.addTab(menuKey,"保险账务",html);
	                Insure.initList();
	            }
	        	}
	    	});

	  	}
	  	Insure.initList = function(){
        // 初始化jQuery 对象
        
        Insure.$tab = $('#' + tabId);
        Insure.$searchArea=Insure.$tab.find('.T-search-area');
 		//搜索按钮事件
        Insure.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            Insure.listInsure(0);
        });
        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
                yearList = Insure.$searchArea.find("select[name=year]").val(),
                monthList = Insure.$searchArea.find("select[name=month]").val();
                console.log(id);

            if ($that.hasClass('T-check')) {
                // 对账
                Insure.GetChecking(0,id,yearList,monthList);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.getClearing(0,id,2015,1,12);
            }
        });
    };
	  	// 保险对账
		Insure.GetChecking = function(page,id,year,month){
	  		Insure.checkSearchData = {
	  			pageNo : page,
	  			id:id,
                year : year,
                month : month,
	  		};
			$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","listFcInsurance"),
				type:"POST",
				data:Insure.checkSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
					data.yearList = yearList
	            	data.monthList = monthList
						var html = insuranceChecking(data);
		  				Tools.addTab(checkTabId,"保险对账",html);
		  				 Insure.initList();


						//关闭页面事件
			        	$(".T-Checking").find(".T-closeTab").click(function(){
				            Tools.closeTab(checkTabId);
				        });
					    //给全选按钮绑定事件
							$(".T-Checking").find(".T-selectAll").click(function(event) {
								var checkboxList = $(".T-Checking").find(".T-checkListNum tr input[type=checkbox]");
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
		  				
						}
				}
		});

		}
	  	// 结算
	  	Insure.getClearing = function(page,insuranceId,year,startMonth,endMonth){
	  		Insure.ClearSearchData = {
	  			pageNo:page,
	  			insuranceId : insuranceId,
	  			year : year,
	  			monthStart:startMonth,
	  			monthEnd : endMonth ,
	  			sortType : 'auto'
	  		}
	  		$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","listFcInsuranceSettlement"),
				type:"POST",
				data:Insure.ClearSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
						data.yearList = yearList
	            		data.monthList = monthList
						var html = insureClearing(data);
		  				Tools.addTab("-Clearing","客户结算",html);
		  				Insure.initList();
		  				$(".T-insureClearing").find('.T-Records').click(function(event) {
		  					alert();
		  					event.preventDefault();
		  					Insure.lookRecord();
		  				});
					}
				}
		  	});	
	  	}
	  	// 查看操作记录
	  	Insure.lookRecord = function(){
	  		var html = blanceRecords();
	  		var RecordsLayer =layer.open({
    			type: 1,
			    title:"操作记录",
			    skin: 'layui-layer-rim', //加上边框
			    area: '60%', //宽高
			    zIndex:1030,
			    content: html,
			    scrollbar: false, // 推荐禁用浏览器外部滚动条
			    success: function(){}
        	})

	  	}
	exports.init = Insure.initModule;
});
