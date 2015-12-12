define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	
	    	    	//结算金额
	    	    	$ele: $obj.find('input[name=settlementMoney]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'positive-float',
    	    	        	errMsg: '请输入数字'
    	    	        }
	    	        ]
	    	    },
	    	    {
	    	    	//本次收款金额合计
	    	    	$ele: $obj.find('input.T-sumReciveMoney'),
	    	    	rules:[
    	    	       {
    	    	    	   type:'null',
    	    	    	   errMsg:'金额不能为空'   
    	    	       },
    	    	       {
    	    	    	   type: 'positive-float',
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