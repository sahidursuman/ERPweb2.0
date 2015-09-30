define(function(require, exports) {
	var menuKey = "system_information";
	var listTemplate = require("./view/list");
	var information = {
		listInformation:function(){  
            $.ajax({
				url:""+APP_ROOT+"/travelAgency.do?method=findEntity&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"",
				dataType:'json',
				type:"POST",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
				  
					layer.close(globalLoadingLayer);
					data.travelAgency = JSON.parse(data.travelAgency);
					var html = listTemplate(data);
					
					//未使用操作号上限计算
					
					var maxUserCount=data.travelAgency.maxUserCount,
					unUserCount=maxUserCount-data.userCount;
					
					//未使用导游号上限计算
					maxGuideCount=data.travelAgency.maxGuideCount,
					unGuideCount=maxGuideCount-data.guideCount;  

					addTab(menuKey,"系统信息",html);
					
					//未使用操作号上限
					$("span.unUserCount").text(unUserCount);  
					//未使用导游号上限
					$("span.unGuideCount").text(unGuideCount);  
					
			
				}		
			});	

	
		}
	}
	exports.listInformation = information.listInformation;
});
