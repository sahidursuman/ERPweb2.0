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
			       },{//及时发送
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="executeTime"]'),  
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '定时发送的时间不能为空'
	  	    	        }
		    	        ]
			      }
			      ]);
			return validatorCreateTripPlan;
		}	
    } 
	return rule;
});
