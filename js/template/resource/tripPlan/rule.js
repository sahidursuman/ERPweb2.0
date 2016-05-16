/**
 * 发团安排 
 */
/**
 * 发团管理--客户管理：表单验证规则
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

		return $container.formValidate(settings)
			.validateHidden(true, 
				function($obj) {
					$obj.closest('.tabbable').find('[href="#'+ $obj.closest('.tab-pane').prop('id') +'"]').trigger('click')
				}
			);
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
	  	    	        	errMsg:'其它项目不能为空'       
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
								type: 'nonnegative-float',
								errMsg: '请输入非负数'
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
					},{//房型
						$ele: $that.find('input[name="hotelRoom"]'),
						$valObj: $that.find('input[name="hotelRoomId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '房型不能为空'
							}
						]
					},{
						$ele: $that.find('input[name="startTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '开始日期不能为空'
							}
						]
					},{
						$ele: $that.find('input[name="endTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '结束日期不能为空'
							}
						]
					},{
						$ele: $that.find('input[name="guideName"]'),
						rules: [
							{
								type: 'null',
								errMsg: '导游不能为空'
							}
						]
					}
				);
		});  		

		// 景区校验
		$container.find('#tripPlan_addPlan_scenic').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			settings.push(
					{//景区
						$ele: $tr.find('input[name="name"]'),
						$valObj: $tr.find('input[name="scenicId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '景区不能为空'
							}
						]
					},{//收费项目
						$ele: $tr.find('input[name="chargingProjects"]'),
						$valObj: $tr.find('input[name="chargingId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '收费项目不能为空'
							}
						]
					}
				);
		});

		//餐饮校验
		$container.find('#tripPlan_addPlan_restaurant').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			if(!$tr.attr('data-entity-arrangeid')){
				settings.push(
					{//餐厅
						$ele: $tr.find('input[name="restaurantName"]'),
						$valObj: $tr.find('input[name="restaurantId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '餐厅不能为空'
							}
						]
					}
				);
			}
		});

		//购物校验
		$container.find('#tripPlan_addPlan_shop').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			if(!$tr.attr('data-entity-arrangeid')){
				settings.push(
					{//购物店
						$ele: $tr.find('input[name="name"]'),
						$valObj: $tr.find('input[name="shopId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '购物店不能为空'
							}
						]
					}
				);
			}
		});

		//自费校验
		$container.find('#tripPlan_addPlan_selfPay').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			if(!$tr.attr('data-entity-arrangeid')){
				settings.push(
					{//自费商家
						$ele: $tr.find('input[name="name"]'),
						$valObj: $tr.find('input[name="selfPayId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '自费商家不能为空'
							}
						]
					}
				);
			}
		});

		//票务校验
		$container.find('#tripPlan_addPlan_ticket').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			if(!$tr.attr('data-entity-arrangeid')){
				settings.push(
					{//自费商家
						$ele: $tr.find('input[name="name"]'),
						$valObj: $tr.find('input[name="ticketId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '票务公司不能为空'
							}
						]
					}
				);
			}
		});

		//保险校验
		$container.find('#tripPlan_addPlan_insurance').find('tbody').children('tr').each(function() {
			var $tr = $(this);
			if(!$tr.attr('data-entity-arrangeid')){
				settings.push(
					{//保险公司
						$ele: $tr.find('input[name="insuranceName"]'),
						$valObj: $tr.find('input[name="insuranceId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '保险公司不能为空'
							}
						]
					}
				);
			}
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

