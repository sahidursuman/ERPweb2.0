define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//酒店名称
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '酒店名称不能为空'
    	    	        }
	    	        ]
	    	    },
	    	    {	// 联系人电话
	    	    	$ele: $obj.find('input[name="mobileNumber"]'),
	    	    	rules: [
	    	    	        {
	    	    	        	type: 'mobile-phone',
	    	    	        	errMsg: '联系电话格式不正确'
	    	    	        }
	    	        ]
	    	    } ,{	// 座机电话
	    	    	$ele: $obj.find('input[name="telNumber"]'),
	    	    	rules: [
							
	    	    	        {
	    	    	        	type: 'landline',
	    	    	        	errMsg: '座机号码格式不正确'
	    	    	        }
	    	        ]
	    	    },{	//传真  
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
		//对房间列表进行验证
		checkRoom:function($obj){
			var roomValidator = $obj.formValidate([

				//对房间列表进行验证
				{	// 房型
					$ele: $obj.find('input[name="type"]'),
					rules: [
							{
								type: 'null', 
								errMsg: '房型不能为空'
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
				},
				{	//旅行社价
					$ele: $obj.find('input[name="contractPrice"]'),
					rules: [
						{
							type: 'null', 
							errMsg: '旅行社价不能为空'
						},
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				},
				// {	//市场价
				// 	$ele: $obj.find('input[name="normalMarketPrice"]'),
				// 	rules: [
				// 		{
				// 			type: 'null', 
				// 			errMsg: '市场价不能为空'
				// 		},
				//         {
				//         	type: 'float', 
				//         	errMsg: '请输入数字'
				//         }
				//     ]
				// },
				// {	//旅行社价
				// 	$ele: $obj.find('input[name="normalInnerPrice"]'),
				// 	rules: [
				// 		{
				// 			type: 'null', 
				// 			errMsg: '旅行社价不能为空'
				// 		},
				//         {
				//         	type: 'float', 
				//         	errMsg: '请输入数字'
				//         }
				//     ]
				// },
				{	//建筑面积
					$ele: $obj.find('input[name="areaSize"]'),
					rules: [
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				},
				{	//入住人数
					$ele: $obj.find('input[name="guestNumber"]'),
					rules: [
				        { 
				        	type: 'int', 
				        	errMsg: '请输入数字'
				        }
				    ]
				}     
			                               
                ]);
			return roomValidator
		},
		//对新增的时间范围和市场价格进行验证
		checkTimeArea:function($obj){
			var timeValidator = $obj.formValidate([
				{	//时间范围-开始时间
					$ele: $obj.find('input[name="startTime"]'),
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
				},
				{	//旅行社价
					$ele: $obj.find('input[name="contractPrice"]'),
					rules: [
						{
							type: 'null', 
							errMsg: '旅行社价不能为空'
						},
				        {
				        	type: 'float', 
				        	errMsg: '请输入数字'
				        }
				    ]
				}    
                ]);
			return timeValidator
		}
		
	}
	return rule;
});