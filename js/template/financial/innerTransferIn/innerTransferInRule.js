define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//收款
	    	    	$ele: $obj.find('input[name=payMoney]'),
	    	    	rules: [
	    	    	        
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
	    	    	       
		    	        ]
	    	    },
                ]);
			return validator;
		}
	}
	return rule;
});