define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//服务标准
	    	    	$ele: $obj.find('input[name="serviceName"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '服务标准不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 服务内容
	    	    	$ele: $obj.find('textarea[name="serviceContent"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '服务内容不能为空'
							}
	    	        ]
	    	    },
	    	    {	// 服务要求
	    	    	$ele: $obj.find('textarea[name="serviceRequire"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '服务要求不能为空'
							}
	    	        ]
	    	    }
                ]);
			return validator;
		}
	}
	return rule;
});