/**
 * 分团转客生成计划  
 */
define(function(require, exports) {	
var rule = {
		//生成计划的基本信息的验证
		checkdCreateTripPlan:function($checkdCreateTripPlanObj){
			var validatorCreateTripPlan=$checkdCreateTripPlanObj.formValidate([  
	    	       {//计划人数
		    	    	$ele: $checkdCreateTripPlanObj.find('input[name="planTouristCount"]'),
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '计划人数不能为空'
	  	    	        }
		    	        ]
			       },{//车队
			    	    $ele: $checkdCreateTripPlanObj.find('input[name="busCompanyName"]'), 
				  		$valObj: $checkdCreateTripPlanObj.find('input[name="busCompanyId"]'),  // 默认是undefined，用于autocomplete之类的插件
				  		rules: [
				  			{
		    		  			type:'null',
		    		  			errMsg: '车队不能为空'
				  			}
				 		]   
			      },{//车牌号
		    	    	$ele: $checkdCreateTripPlanObj.find('input[name="LicenseNumber"]'),  
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="busLicenseNumberId"]'),  // 默认是undefined，用于autocomplete之类的插件

		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '车牌号不能为空'
	  	    	        }
		    	        ]
			      },{//导游driverId  
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="AddTPchooseGuide"]'),    
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="AddTPchooseGuideId"]'),  // 默认是undefined，用于autocomplete之类的插件       
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '导游不能为空'
	  	    	        }
		    	        ]
			      },{//司机
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="driverName"]'),  
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="driverId"]'),  // 默认是undefined，用于autocomplete之类的插件

		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '司机不能为空'
	  	    	        }
		    	        ]
			      }
			      ]);
			return validatorCreateTripPlan;
		}	
    } 
	return rule;
});
