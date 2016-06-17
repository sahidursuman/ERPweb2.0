define(function(require, exports) {
	var rule = {
		check:function($obj){
			var validator = $obj.formValidate([
	    	    {	//姓名
	    	    	$ele: $obj.find('input[name="name"]'),
	    	    	rules: [
    	    	        {
    	    	        	type: 'null', 
    	    	        	errMsg: '业务部名称不能为空'
    	    	        }
	    	        ]
	    	    },
				{	//姓名
					$ele: $obj.find('.R-childGroupName'),
					rules: [
						{
							type: 'null',
							errMsg: '子部门名称不能为空'
						}
					]
				}
                ]);
			return validator;
		}
		};
	return rule;
});