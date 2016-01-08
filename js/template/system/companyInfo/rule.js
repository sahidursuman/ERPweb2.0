define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {
					$ele: $obj.find('input[name="contactNumber"]'),
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
				{
					$ele: $obj.find('input[name="telephoneNumber"]'),
					rules: [
						{
							type: 'landline',
							errMsg: '座机电话格式不正确'
						}
					]
				},
				{
					$ele: $obj.find('input[name="faxNumber"]'),
					rules: [
						{
							type: 'landline',
							errMsg: '传真电话格式不正确'
						}
					]
				}
            ]);
			return validator;
		}
	}
	return rule;
});