define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//实际退补款
	    	    	$ele: $obj.find('input[name=realBackGuideMoney]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'null', 
	    	    	        	errMsg: '不能为空'
	    	    	        },
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
		    	        ]
	    	    },
	    	    
	    	    
	    	    {  //结账金额
	    	    	$ele: $obj.find('input[name=payMoney]'),	
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