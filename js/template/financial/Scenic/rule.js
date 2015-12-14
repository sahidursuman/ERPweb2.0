define(function(require, exports) {
	var rule = {
		check:function($obj){
			var $inputs = $obj.find('[name="settlementMoney"]'),
				rules = [];

			if (!$inputs.length) {
    	    	$inputs = $obj.find('[name="payMoney"]');
    	    }

			// 财务收款可以输入负数    	    	       
	       	if ($obj.data('isOuter')) {
	       		rules.push({
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        });
	       	} else {
   		   		rules.push({
   			    	        	type: 'nonnegative-float',
   			    	        	errMsg: '请输入非负数'
   			    	        });
	       	}


			return $obj.formValidate([
	    	    {
	    	    	$ele: $inputs,
	    	    	rules:rules	
	    	    }]);
		},
		autoFillCheck: function($obj) {
			return $obj.formValidate([
		    	    {	//付款金额
		    	    	$ele: $obj.find('[name="sumPayMoney"]'),
		    	    	rules: [
		    	    	        {
		    	    	        	type: 'null', 
		    	    	        	errMsg: '不能为空'
		    	    	        },
		    	    	        {
		    	    	        	type: 'positive-float',
		    	    	        	errMsg: '请输入正数'
		    	    	        }
			    	        ]
		    	    }
				]);
		}
	}
	return rule;
});