define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//姓名
	    	    	$ele: $obj.find('input[name="realName"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null',
    	    	        	errMsg: '姓名不能为空'
    	    	        }
	    	        ]
	    	    },
				{	//联系电话
					$ele: $obj.find('input[name="mobileNumber"]'),
					rules: [
						{
							type: 'mobile-phone',
							errMsg: '联系电话格式不正确'
						},
						{
							type: 'null',
							errMsg: '联系电话不能为空'
						}

					]
				}

                ]);
			return validator;
		}
		};
	return rule;
});