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
			   {//转客大人单价
	    	    	$ele: $container.find('[name="count"]'),
	    	    	rules:[
	    	    	       {
	    	    	    	   type:'float',
	    	    	    	   errMsg:'数量输入不合法'            
	    	    	       },{   
	    	    	    	   type:'null',   
	    	    	    	   errMsg:'数量不能为空'       
	    	    	       }  
	    	    	      ]
	    	    },{//转客小孩单价
                     $ele: $container.find('[name="price"]'),	    	    	
    	    	     rules:[{
    	    	    	   type:'float',
    	    	    	   errMsg:'单价输入不合法'       
    	    	       },{   
		    	    	   type:'null',   
		    	    	   errMsg:'单价不能为空'
		    	    	}]  
    	    	
	    	    }
		];

		$container.find('tbody').children('tr').each(function() {
			    var $that = $(this);
				settings.push(
					 {//转客大人单价
	    	    	$ele: $container.find('[name="count"]'),
	    	    	rules:[{
		    	    	       type:'float',
		    	    	       errMsg:'数量输入不合法'            
		    	    	    },{   
		    	    	    	type:'null',   
		    	    	    	errMsg:'数量不能为空'           
		    	    	    }]
		    	    },{//转客小孩单价
	                     $ele: $container.find('[name="price"]'),	    	    	
	    	    	     rules:[{
	    	    	    	   type:'float',
	    	    	    	   errMsg:'单价输入不合法'       
	    	    	     },{   
		    	    	    	type:'null',   
		    	    	    	errMsg:'单价不能为空'
		    	    	}]  
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