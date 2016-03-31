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
	    	    },
	    	    {	//现金账号
	    	    	$ele: $obj.find('input[name="cash-number"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '现金账号不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	//银行账号
	    	    	$ele: $obj.find('input[name="card-number"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '银行账号不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	//转出账户
	    	    	$ele: $obj.find('input[name="out-number"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '转出账户不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	//转入账户
	    	    	$ele: $obj.find('input[name="in-number"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '转入账户不能为空'
    	    	        }
	    	        ]
	    	    }
            ]);
			return validator;
		}
	}
	return rule;
});