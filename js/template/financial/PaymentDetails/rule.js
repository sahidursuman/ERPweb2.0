define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//记账金额
	    	    	$ele: $obj.find('input[name="incomeMoney"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '记账金额不能为空'
    	    	        },
    	    	        {
    	    	        	type: 'float', 
    	    	        	errMsg: '请输入数字'
    	    	        }
	    	        ]
	    	    },
	    	    {	//记账日期
	    	    	$ele: $obj.find('input[name="billTime"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '记账日期不能为空'
    	    	        }
	    	        ]
	    	    }
            ]);
			return validator;
		}
	}
	return rule;
});