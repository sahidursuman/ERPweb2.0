define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//自费公司名称
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '自费公司名称不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 联系电话
	    	    	$ele: $obj.find('input[name="companyPhoneNumber"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '联系电话不能为空'
							},
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '联系电话格式不正确'
	    	    	        }
	    	        ]
	    	    },
	    	    {	// 联系人
	    	    	$ele: $obj.find('input[name="managerName"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '联系人不能为空'
							}
	    	        ]
	    	    },
	    	    {	// 联系人电话
	    	    	$ele: $obj.find('input[name="mobileNumber"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '联系人电话不能为空'
							},
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
	    	    },{	// 传真
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
		},
		//对项目价格列表进行验证
		checkItems:function($obj){
			var itemValidator = $obj.formValidate([

				//对项目列表进行验证
				{	// 收费项目
					$ele: $obj.find('input[name="name"]'),
					rules: [
							{
								type: 'null', 
								errMsg: '项目不能为空'
							}
				    ]
				},
				{	//时间范围-开始时间
					$ele: $obj.find('input[name=startTime]'),
					rules: [
				        {
				        	type: 'null', 
				        	errMsg: '开始时间不能为空'
				        }
				    ]
				},
				{	//时间范围-结束时间
					$ele: $obj.find('input[name="endTime"]'),
					rules: [
				        {
				        	type: 'null', 
				        	errMsg: '结束时间不能为空'
				        }
				    ]
				},
				{	//内部价
					$ele: $obj.find('input[name="contractPrice"]'),
					rules: [
						{
							type: 'null', 
							errMsg: '内部价不能为空'
						},
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				},
				{	//市场价
					$ele: $obj.find('input[name="marketPrice"]'),
					rules: [
						{
							type: 'null', 
							errMsg: '市场价不能为空'
						},
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				} ,
				{	//导游返佣
					$ele: $obj.find('input[name="guideRate"]'),
					rules: [
						{
							type: 'null', 
							errMsg: '导游返佣不能为空'
						},
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				}
                ]);
			return itemValidator
		}
	}
	return rule;
});