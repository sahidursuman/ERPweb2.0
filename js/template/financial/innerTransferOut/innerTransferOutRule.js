define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//未收对账
	    	    	$ele: $obj.find('input[name=payMoney]'),
	    	    	rules: [
	    	    	        
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
		    	        ]
	    	    },
	    	    {	//返款
	    	    	$ele: $obj.find('input[name=backMoney]'),
	    	    	rules: [
	    	    	        
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