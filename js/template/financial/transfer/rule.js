define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//返款金额
	    	    	$ele: $obj.find('input[name=punishMoney]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'float',
    	    	        	errMsg: '请输入数字'
    	    	        }
	    	        ]
	    	    },	    	    
	    	    {//付款金额
	    	    	$ele: $obj.find('input[name=payMoney]'),
	    	    	
	    	    	rules:[
    	    	        {
    	    	    	   type: 'float',
    	    	        	errMsg: '请输入数字'   
    	    	        }
	    	        ]
    	    	},
    	    	{//付款金额
	    	    	$ele: $obj.find('input[name=sumPayMoney]'),
	    	    	
	    	    	rules:[
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