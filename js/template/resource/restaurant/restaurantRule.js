define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//餐厅名称
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '餐厅名称不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 餐厅负责人
	    	    	$ele: $obj.find('input[name="managerName"]'),
	    	    	rules: [
							{
								type: 'null', 
								errMsg: '联系人不能为空'
									
							}
	    	        ]
	    	    },
	    	    {	// 负责人电话
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
	    	    } ,
	    	    {	// 座机号码
	    	    	$ele: $obj.find('input[name="telNumber"]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '座机号码格式不正确'
	    	    	        }
	    	        ]
	    	    },{	// 传真电话  
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
		//对餐标列表进行验证
		checkMeal:function($obj){
			var mealValidator = $obj.formValidate([

				
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
				{	//市场价
					$ele: $obj.find('input[name="contractPrice"]'),
					rules: [
				        {
				        	type:'null',
				        	errMsg:'每位价格不能为空'
				        },
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				}, 
				{	//餐标
					$ele: $obj.find('input[name="typeName"]'),
					rules: [
				        {
				        	type:'null',
				        	errMsg:'餐标不能为空'
				        }
				    ]
				}
                ]);
			return mealValidator
		}
	}
	return rule;
});