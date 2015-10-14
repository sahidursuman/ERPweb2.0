/**
 * 发团计划验证 
 */
define(function(require, exports) {	
var rule = {
	//生成计划的基本信息的验证
	checkdCreateTripPlan:function($checkdCreateTripPlanObj){
		var validatorCreateTripPlan=$checkdCreateTripPlanObj.formValidate([                                                                                                                             
             {//出团日期
    	    	$ele: $checkdCreateTripPlanObj.find('input[name="startTime"]'),
    	    	rules: [
    	        {
    	        	type: 'null', 
    	        	errMsg: '出团日期不能为空'
    	        }
    	        ]
		    },
	    	  {//计划人数
		    	    	$ele: $checkdCreateTripPlanObj.find('input[name="planTouristCount"]'),
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '计划人数不能为空'       
	  	    	        }
		    	        ]
		       },{//车队
		    	    $ele: $checkdCreateTripPlanObj.find('input[name="BusCompanyName"]'), 
			  		$valObj: $checkdCreateTripPlanObj.find('input[name="busCompanyId"]'),   
			  		rules: [  
			  			{
	    		  			type:'null',
	    		  			errMsg: '车队不能为空'
			  			}
			 		]
		      },{//车牌号
		    	    	$ele: $checkdCreateTripPlanObj.find('input[name="LicenseNumber"]'),  
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="busLicenseNumberId"]'),

		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '车牌号不能为空'
	  	    	        }
		    	        ]
		      },{//导游driverId
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="AddTPchooseGuide"]'),  
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="AddTPchooseGuideId"]'),  

		    	    	rules: [  
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '导游不能为空'
	  	    	        }
		    	        ]
		      },{//司机
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="driverName"]'),  
		    	    	$valObj: $checkdCreateTripPlanObj.find('input[name="driverId"]'),  
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '司机不能为空'
	  	    	        }
		    	        ]
		         },{//司机
		    	       	$ele: $checkdCreateTripPlanObj.find('input[name="accompanyGuideMobile"]'),  
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'mobile-phone',
	  	    	        	errMsg: '全陪电话格式不正确'
	  	    	        }
		    	        ]
			      }
	    	  ]);
		return validatorCreateTripPlan;
		}	
    } 
	return rule;
});
