/**
 * 发团管理--客户管理：表单验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**
	 * 绑定客户管理的表单验证
	 * @param  {object} $container 同行表单的顶级元素
	 * @return {object}            同行表单验证对象
	 */
	rule.partnerAgencyCheckor = function($container) {  
		this.$container = $container;

		var settings = this.getPartnerAgenSettings($container);

		return $container.formValidate(settings);
	};


	/**
	 * 组织车队表单验证设置		
	 * @param  {object} $container 车队表单的顶级元素
	 * @return {object}            表单验证的设置
	 */
	rule.getPartnerAgenSettings = function($container) {
		var settings = [  // 固定验证的初始化
			   {	//同行旅行社名称
	    	    	$ele: $container.find('input[name=travelAgencyName]'),
	    	    	rules: [{
	    	    	        	type: 'null', 
	    	    	        	errMsg: '同行名称不能为空'
	    	    	        }]
	    	    },{//联系人姓名
	    	    	$ele: $container.find('.widget-body input[name=contactRealname]'),
	    	    	rules:[
	    	    	       {
	    	    	    	   type:'null',
	    	    	    	   errMsg:'联系人姓名不能为空'                    
	    	    	       }
	    	    	      ]
	    	    },{//联系人电话
                    $ele: $container.find('.widget-body input[name=contactMobileNumber]'),	      	    	
	    	    	rules:[{
	    	    	    	   type:'null',
	    	    	    	   errMsg:'座机电话或联系人电话不能为空'    
	    	    	       },
	    	    	       {
	    	    	    	   type: 'phone-num',
	    	    	        	errMsg: '座机电话或联系人电话格式不正确'                                                   
	    	    	       }]
	    	    	
	    	    },{//总社名称                                    
		    	       	$ele: $container.find('input[name="headerAgencyName"]'),  
		    	    	rules: [
	  	    	        {
	  	    	        	type: 'null', 
	  	    	        	errMsg: '总社名称不能为空'
	  	    	        }]
						},{//座机号码                                   

		    	       	$ele: $container.find('input[name="telNumber"]'),  
 
		    	    	rules: [
 
	  	    	        {
	 
	  	    	        	type: 'phone-num', 
	 
	  	    	        	errMsg: '座机号码格式不正确'
	 
	  	    	        }]
	 
			},{//传真号码                                   
	 
		    	       	$ele: $container.find('input[name="faxNumber"]'),  
	 
		    	    	rules: [
	 
	  	    	        {
	 
	  	    	        	type: 'phone-num', 
	 
	  	    	        	errMsg: '传真号码格式不正确'
	 
	  	    	        }]
	 
			}
			
		];

		$container.find('.partnerList').find('tr').each(function() {
			    var $that = $(this);
				settings.push(
					{//联系人姓名
						$ele: $that.find('input[name="contactRealname"]'),
						rules: [
							{
								type: 'null',
								errMsg: '联系人姓名不能为空'  
							}
						]
					},{//联系人电话
						$ele: $that.find('input[name="contactMobileNumber"]'),
						rules: [
							{
								type: 'null',
								errMsg: '座机电话或联系人电话不能为空'
							},
							{
								type: 'phone-num',                           
								errMsg: '座机电话或联系人电话格式不正确'
							}
						]
					}  

				);
		});

                      

		return settings;
	};

	rule.update = function(validator) {
		if (!!validator)  {
			validator.update(this.getPartnerAgenSettings(this.$container));
		}

		return validator;
	}
	return rule;
});