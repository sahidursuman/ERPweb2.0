define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//付款金额
	    	    	$ele: $obj.find('input[name=sumPayMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'positive-float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
		    	        ]
	    	    },
	    	    
	    	    
	    	    {  //结账金额
	    	    	$ele: $obj.find('input[name=payMoney]'),	
	    	    	rules:[
	    	    	       {
	    	    	        	type: 'positive-float',
	    	    	        	errMsg: '请输入正数'
	    	    	        }
	    	    	       ]
	    	    	
	    	    }
	    	    
                ]);
			
			return validator;
		}
	}
	return rule;
});