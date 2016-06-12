define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
				{	//银行账号
	    	    	$ele: $obj.find('input[name="subjectName"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '科目名称不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	//银行账号
	    	    	$ele: $obj.find('input[name="bankNumber"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '银行账号不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 开户银行
	    	    	$ele: $obj.find('input[name="bankName"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'null',
	    	    	        	errMsg: '开户银行不能为空'
	    	    	        }
	    	        ]
	    	    },
	    	    {	//开户户名
	    	    	$ele: $obj.find('input[name="accountName"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '开户户名不能为空'
							}
	    	        ]
	    	    },
	    	    {	// 期初余额
	    	    	$ele: $obj.find('input[name="balanceMoney"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '期初余额不能为空'
							},
	    	    	        {
	    	    	        	type: 'float',
	    	    	        	errMsg: '请输入数字'
	    	    	        }
	    	        ]
	    	    },
	    	    
	    	    {	// 期初日期
	    	    	$ele: $obj.find('input[name="startTime"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'null',
	    	    	        	errMsg: '期初日期不能为空'
	    	    	        }
	    	        ]
	    	    },{	// 期初日期
	    	    	$ele: $obj.find('input[name="aliasName"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'null',
	    	    	        	errMsg: '账户名称不能为空'
	    	    	        }
	    	        ]
	    	    }    
                ]);
			return validator;
		}
	}
	return rule;
});