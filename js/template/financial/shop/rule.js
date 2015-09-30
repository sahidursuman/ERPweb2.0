define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//账面返佣
	    	    	$ele: $obj.find('input[name=realRebateMoney]'),
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
	    	    
	    	    
	    	    {	//实际返佣
	    	    	$ele: $obj.find('input[name=realRebateMoney]'),
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
	    	    
	    	    {//付款金额
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