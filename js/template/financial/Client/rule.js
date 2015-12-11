define(function(require, exports) {
	var rule = {
		check:function($obj){
			var rule = [{
    	    	    	   type:'null',
    	    	    	   errMsg:'返款不能为空'
    	    	       }];

			// 财务收款可以输入负数    	    	       
	       	if ($obj.find('.T-btn-save').data('type')) {
	       		rule.push({
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        });
	       	} else {
   		   		rule.push({
   			    	        	type: 'nonnegative-float',
   			    	        	errMsg: '请输入非负数'
   			    	        });
	       	}


			return $obj.formValidate([
	    	    {
	    	    	$ele: $obj.find('.money'),
	    	    	rules:rule	
	    	    }]);
		},
		autoFillCheck: function($obj) {
			return $obj.formValidate([
		    	    {	//付款金额
		    	    	$ele: $obj.find('.T-sumReciveMoney'),
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