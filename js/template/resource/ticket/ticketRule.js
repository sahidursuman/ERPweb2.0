define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//票务公司名称
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '票务公司名称不能为空'
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
	    	    {	//负责人
	    	    	$ele: $obj.find('input[name="managerName"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '负责人不能为空'
							}
	    	        ]
	    	    },
	    	    {	// 联系电话
	    	    	$ele: $obj.find('input[name="mobileNumber"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '联系电话不能为空'
							},
	    	    	        {
	    	    	        	type: 'mobile-phone',
	    	    	        	errMsg: '联系电话格式不正确'
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
	    	    } ,{	// 传真
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