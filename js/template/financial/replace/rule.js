define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//实际未收
	    	    	$ele: $obj.find('input[name=FinancialBookingRealUnPayedMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '金额不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
		    	        ]
	    	    },
	    	    
	    	   
	    	    
	    	    
	    	    
	    	    {//付款金额
	    	    	$ele: $obj.find('input[name=blancerealIncomeMoney]'),
	    	    	
	    	    	rules:[
	    	    	       
	    	    	       {
	    	    	    	   type:'null',
	    	    	    	   errMsg:'金额不能为空'   
	    	    	       },
	    	    	       
	    	    	       {
	    	    	    	   type: 'float',
	    	    	        	errMsg: '请输入数字'   
	    	    	       }
	    	    	       
	    	    	       ]
	    	    }
	    	    
                ]);
			
			return validator;
		}
	}
	return rule;
});