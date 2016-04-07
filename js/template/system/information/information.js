define(function(require, exports) {
	var menuKey = "system_information";
	var listTemplate = require("./view/list");

	var information = {};

	information.initModule = function() {
		information.listInfo();
	};
	
	information.listInfo = function(){  
        $.ajax({
			url:""+APP_ROOT+"/travelAgency.do?method=findEntity&token="+$.cookie("token")+"",
			data:"",
			success:function(data){

				data.travelAgency = JSON.parse(data.travelAgency);
				var html = listTemplate(data);
				
				//未使用操作号上限计算
				var maxUserCount=data.travelAgency.maxUserCount,
				unUserCount=maxUserCount-data.userCount;
				
				//未使用导游号上限计算
				maxGuideCount=data.travelAgency.maxGuideCount,
				unGuideCount=maxGuideCount-data.guideCount;  

				Tools.addTab(menuKey,"系统信息",html);
				
				//未使用操作号上限
				$(".T-unUserCount").text(unUserCount);  
				//未使用导游号上限
				$(".T-unGuideCount").text(unGuideCount);  
			}		
		});	
	};

	exports.init = information.initModule;
});
