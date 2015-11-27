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

		var  Insure = {

		};
		Insure.initModule = function() {
	        Insure.listInsure(0,"",2015,"");
	        
	   	};
	  	Insure.listInsure = function(pageNo,insuranceId,year,month){
	  		
	  		// data传数据
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
        
        // 报表内的操作
        Insure.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),id = $that.closest('tr').data('id');

            if ($that.hasClass('T-check')) {
                // 对账
                Insure.GetChecking(0,id,"","","");
            } else if ($that.hasClass('T-clear')) {
                // 结算
                Insure.getClearing(id,"","","","","");
            }
        });
    };
	  	// 保险对账
	  	Insure.GetChecking = function(page,insuranceId,insuranceCompanyName,year,month){
	  		Insure.checkSearchData = {
	  			pageNo : page,
	  			id : insuranceId,
	  			year : year,
	  			month : month,
	  			insuranceCompanyName:"",
	  			sortType : 'auto'
	  		}
			$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","accountChecking"),
				type:"POST",
				data:Insure.checkSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
						var html = insuranceChecking(data);
		  				Tools.addTab("-checking","客户对账",html);
		  				 Insure.initList();

		  				 //给全选按钮绑定事件
				        $(".T-Checking").find(".T-checkAll").click(function(){
				        	alert(index())
				            var checkboxList = $checktab.find(".T-checkList tr input[type=checkbox]");
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
				        	$(".T-Checking").find(".T-closeTab").click(function(){
					            closeTab(checkTabId);
					            alert(checkTabId);
					        });
						}
				}
		  		
		  		
		  	});

	  	}
	  	// 结算
	  	Insure.getClearing = function(page,insuranceId,insuranceCompanyName,year,startMonth,endMonth){
	  		Insure.ClearSearchData = {
	  			page : page,
	  			insuranceId : insuranceId,
	  			insuranceCompanyName : insuranceCompanyName,
	  			year : year,
	  			startMonth:"",
	  			endMonth : "",
	  			sortType : 'auto'
	  		}
	  		$.ajax({
		       url:KingServices.build_url("financial/financialInsurance","saveFcInsuranceSettlement"),
				type:"POST",
				data:Insure.ClearSearchData,
				success : function(data){
					console.log(data);
					var result = showDialog(data);
					if(result){
						var html = insuranceChecking(data);
		  				Tools.addTab("-Clearing","客户结算",html);
		  				Insure.initList();
					}
				}
		  		
		  		
		  	});
	  		
	  	}



	exports.init = Insure.initModule;
});
