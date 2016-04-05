define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//姓名
	    	    	$ele: $obj.find('input[name="name"]'),
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
				},
				{	//婚姻状况
					$ele: $obj.find('input[name="maritalStatus"]'),
					rules: [
						{
							type: 'null',
							errMsg: '不能为空'
						}
					]
				},{	//身份证号
					$ele: $obj.find('input[name="idCard"]'),
					rules: [
						{
							type: 'null',
							errMsg: '不能为空'
						},
						{
							type: 'id',
      						errMsg: '请输入正确的身份证号码'
						}
					]
				},{	//营业执照
					$ele: $obj.find('input[name="businessNumber"]'),
					rules: [
						{
							type: 'null',
							errMsg: '营业执照不能为空'
						}
					]
				},{	//机构代码
					$ele: $obj.find('input[name="code"]'),
					rules: [
						{
							type: 'null',
							errMsg: '机构代码不能为空'
						}
					]
				},{	//金额
					$ele: $obj.find('input[name="applyMoney"]'),
					rules: [
						{
							type: 'null',
							errMsg: '金额不能为空'
						},{
							type: 'positive-float',
							errMsg: '请输入大于0的数字'
						}
					]
				}

                ]);
			return validator;
		}
		};
	return rule;
});