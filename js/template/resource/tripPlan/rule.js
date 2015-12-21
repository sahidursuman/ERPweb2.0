/**
 * 发团安排 
 */
/**
 * 发团管理--同行管理：表单验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**
	 * 绑定发团安排的表单验证
	 * @param  {object} $container 同行表单的顶级元素
	 * @return {object}            同行表单验证对象
	 */
	rule.listTripPlanCheckor = function($container) {
		this.$container = $container;

		var settings = this.getListTripPlanCheckorSettings($container);

		return $container.formValidate(settings);
	};


	/**
	 * 组织车队表单验证设置		
	 * @param  {object} $container 车队表单的顶级元素
	 * @return {object}            表单验证的设置
	 */
	rule.getListTripPlanCheckorSettings = function($container) {
		var settings = [  // 固定验证的初始化  
		                  
	                {//导游预支付金额 
	  	    	    	$ele: $container.find('input[name="guideAllPreMoney"]'),
	  	    	    	rules: [
	  	    	        {
	  	    	        	type:'NoNumber', 
	  	    	        	errMsg:'导游预支金额不能是非法数字'     
	  	    	        }
	  	    	        ]
	  			    },{//导服费
	  	    	    	$ele: $container.find('input[name="guideFee"]'),
	  	    	    	rules: [
	  	    	        {
	  	    	        	type:'float', 
	  	    	        	errMsg:'导服费不能是非法数字'     
	  	    	        }
	  	    	        ]
	  			    },{//管理费 
	  	    	    	$ele: $container.find('input[name="manageFee"]'),
	  	    	    	rules: [
	  	    	        {
	  	    	        	type:'float', 
	  	    	        	errMsg:'管理费不能是非法数字'       
	  	    	        }
	  	    	        ]    
	  			    },{//其它项目校验
	  			    	$ele: $container.find('input.T-other-name'),
	  	    	    	rules: [
	  	    	        {
	  	    	        	type:'null', 
	  	    	        	errMsg:'其他项目不能为空'       
	  	    	        }
	  	    	        ]    
	  			    }
		];

		$container.find('.tab-content').find('tr').each(function() {
			    var $that = $(this);
				settings.push(
					{//单价
						$ele: $that.find('input[name="price"]'),   
						rules: [
							{
								type: 'float',
								errMsg: '不能为非法字符'
							}
						]
					},{//数量
						$ele: $that.find('input[name="memberCount"]'),
						rules: [
							{
								type: 'positive-float',
								errMsg: '必须为正数'
							}
						]
					},{//已付  
						$ele: $that.find('input[name="payedMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '不能是非法字符'
							}
						]
					},{//优惠
						$ele: $that.find('input[name="reduceMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '不能是非法字符'
							} 
						]
					},{//单价
						$ele: $that.find('input[name="fee"]'),
						rules: [
							{
								type: 'float',
								errMsg: '不能是非法字符'
							}
						]
					}
				);
		});  

		return settings;   
	};

	rule.update = function(validator) {
		if (!!validator)  {
			validator.update(this.getListTripPlanCheckorSettings(this.$container));
		}

		return validator;
	}
	return rule;
});

