define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//姓名
	    	    	$ele: $obj.find('input[name="realname"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '姓名不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 电话
	    	    	$ele: $obj.find('input[name="mobileNumber"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '电话不能为空'
							},
	    	    	        {
	    	    	        	type: 'mobile-phone',
	    	    	        	errMsg: '电话格式不正确'
	    	    	        }
	    	        ]
	    	    },
	    	    {	// 导游证
	    	    	$ele: $obj.find('input[name="guideCardNumber"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '导游证编号不能为空'
							},
	    	    	        {
	    	    	        	type: 'guide-id',
	    	    	        	errMsg: '导游证编号格式不正确'
	    	    	        }
	    	        ]
	    	    },
	    	   {
	    	    	//身份证
	    	    	$ele: $obj.find('input[name="idCardNumber"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'id', 
    	    	        	errMsg: '输入格式不正确'
    	    	        }
	    	        ]	
	    	    }
	    	    
	    	    
                ]);
			return validator;
		}
	}
	return rule;
});