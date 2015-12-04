define(function(require, exports) {
	var rule = {
		check:function($obj){

			var validator = $obj.formValidate([
	    	    {	//未收对账
	    	    	$ele: $obj.find('input[name=unIncomeMoney]'),
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
	    	    
	    	    {
	    	    	//返款
	    	    	$ele: $obj.find('input[name="T-refund"]'),
	    	    	rules:[
	    	    	       {
	    	    	    	   type:'null',
	    	    	    	   errMsg:'返款不能为空'
	    	    	       },
	    	    	       {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
	    	    	       ]	
	    	    },
	    	    
	    	    
	    	    
	    	    {//付款金额
	    	    	$ele: $obj.find('input[name=ClientClear_payMoney]'),
	    	    	
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