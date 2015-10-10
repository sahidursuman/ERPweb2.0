define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//保险公司名称
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '保险公司名称不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 联系电话
	    	    	$ele: $obj.find('input[name="companyPhoneNumber"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '联系电话格式不正确'
	    	    	        }
	    	        ]
	    	    },
	    	    {	// 联系人电话
	    	    	$ele: $obj.find('input[name="mobileNumber"]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'mobile-phone',
	    	    	        	errMsg: '联系人电话格式不正确'
	    	    	        }
	    	        ]
	    	    },
	    	    
	    	    {	// 固定电话
	    	    	$ele: $obj.find('input[name="telNumber"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '座机号码格式不正确'
	    	    	        }
	    	        ]
	    	    } ,
	    	    {	// 传真
	    	    	$ele: $obj.find('input[name="faxNumber"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '传真号码格式不正确'
	    	    	        }
	    	        ]
	    	    } 
                ]);
			return validator;
		}
	}
	return rule;
});