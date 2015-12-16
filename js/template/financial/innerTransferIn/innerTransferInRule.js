define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//收款
	    	    	$ele: $obj.find('input[name=backMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '金额不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        },
	    	    	        {
	                            type: 'positive-float',
	                            errMsg: '请输入比0大的数'
                        	}
		    	        ]
	    	    },
                ]);
			return validator;
		},
		settlement:function($obj){
			var settlementValidator = $obj.formValidate([
	    	    {	//自动下账对账
	    	    	$ele: $obj.find('input[name=sumPayMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '金额不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        },
	    	    	        {
	                            type: 'positive-float',
	                            errMsg: '请输入比0大的数'
                        	}
		    	        ]
	    	    },
	    	    {	//收款
	    	    	$ele: $obj.find('input[name=backMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '金额不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        },
	    	    	        {
	                            type: 'positive-float',
	                            errMsg: '请输入比0大的数'
                        	}
		    	        ]
	    	    },
                ]);
			
			return settlementValidator;

		}
	}
	return rule;
});