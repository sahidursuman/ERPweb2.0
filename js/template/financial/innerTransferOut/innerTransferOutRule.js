define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//未收对账
	    	    	$ele: $obj.find('input[name=realUnPayedMoney]'),
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
	    	    {	//返款
	    	    	$ele: $obj.find('input[name=payedMoney]'),
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
	    	    }
                ]);
			
			return validator;
		}
	}
	return rule;
});