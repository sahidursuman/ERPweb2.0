/**
 * 转客管理--表单验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**    
	 * 绑定同行管理的表单验证
	 * @param  {object} $container 表单的顶级元素
	 * @return {object}            表单验证对象
	 */
	rule.transferCheckor = function($container) {
		this.$container = $container;
		var settings = this.getTransferSettings($container);

		return $container.formValidate(settings);
	};


	/**
	 * 表单验证设置		
	 * @param  {object} $container 表单的顶级元素
	 * @return {object}            表单验证的设置
	 */
	rule.getTransferSettings = function($container) {
		var settings = [  // 固定验证的初始化
			   {	//已付
	    	    	$ele: $container.find('input[name="transPayedMoney"]'),
	    	    	rules: [{
	    	    	        	type: 'float', 
	    	    	        	errMsg: '已付数据输入不合法'
	    	    	        }]
	    	    },{//转客大人单价
	    	    	$ele: $container.find('input[name="transAdultPrice"]'),
	    	    	rules:[
	    	    	       {
	    	    	    	   type:'float',
	    	    	    	   errMsg:'大人内转单价输入不合法'            
	    	    	       },{   
	    	    	    	   type:'null',   
	    	    	    	   errMsg:'大人内转单价单价不能为空'           
	    	    	       }  
	    	    	      ]
	    	    },{//转客小孩单价
                     $ele: $container.find('input[name="transChildPrice"]'),	    	    	
    	    	     rules:[{
    	    	    	   type:'float',
    	    	    	   errMsg:'小孩内转单价输入不合法'       
    	    	       },{  
    	    	    	   type:'null',   
    	    	    	   errMsg:'小孩内转单价不能为空'       
    	    	       }]   
    	    	
	    	    }
		];

		$container.find('.addTransferCost').find('tr').each(function() {
			    var $that = $(this);
				settings.push(
					{//其他费用
						$ele: $that.find('input[name="discribe"]'),
						rules: [
							{
								type: 'null',
								errMsg: '其他内转说明不能为空'
							}
						]
					},
					{//数量
						$ele: $that.find('input[name="count"]'),
						rules: [
							{
								type: 'float',
								errMsg: '内转的数量不合法'
							}
						]
					},
					{//转客单价
						$ele: $that.find('input[name="price"]'),
						rules: [
							{
								type: 'float',
								errMsg: '其他内转转客单价不合法'
							}
						]
					}
				);
		});  

		return settings;
	};

	rule.update = function(validator) {
		if (!!validator)  {
			validator.update(this.getTransferSettings(this.$container));
		}
		return validator;
	}
	return rule;
});