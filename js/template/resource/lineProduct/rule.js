/**
 * 【更新线路数据表单】的验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**
	 * 新增线路产品时的表单验证
	 * @param  {object} $container 线路产品表单的父容器
	 * @return {object}            表单验证对象
	 */
	rule.lineProductCheckor = function($container)  {
		this.$lineProductContainer = $container;

		var settings = this.getLineProductSettings(this.$lineProductContainer);

		return $container.formValidate(settings);
	};

	/**
	 * 设置产品线路表单的配置
	 * @param  {[type]} $container [description]
	 * @return {[type]}            [description]
	 */
	rule.getLineProductSettings = function($container)  {
		var $mainForm = $container.find('.lineProductMainForm'),
		settings = [
			{
				$ele: $mainForm.find('input[name="name"]'),
				rules: [
					{
						type: 'null',
						errMsg: '线路产品名称不能为空'
					}
				]
			},
			{
				$ele: $mainForm.find('input[name="type"]'),
				rules: [
					{
						type: 'null',
						errMsg: '线路类型不能为空'
					}
				]
			},
			{
				$ele: $mainForm.find('input[name="adultCount"]'),
				rules : [{
                    type: 'null',
                    errMsg: '大人数不能为空'
                },
                {
                    type: 'nonnegative-int',
                    errMsg: '大人数为正整数'
                }]
			},
			{
				$ele: $mainForm.find('input[name="childCount"]'),
				rules : [{
                    type: 'null',
                    errMsg: '小孩数不能为空'
                },
                {
                    type: 'nonnegative-int',
                    errMsg: '小孩数为正整数'
                }]
			}
		];

		// 导游安排
		$container.find('.updateGuideList').find('tbody').find('tr').each(function() {
			var $that = $(this);

			if ($that.find('input[name="guideNameId"]').val())  {
				settings.push({
					$ele: $that.find('input[name="guideFee"]'),
					rules: [
						{
							type: 'null',
							errMsg: '导游服务费不能为空'
						},
						{
							type: 'float',
							errMsg: '导游服务费格式不正确'
						}
					]
				});
			}
		});

		// 保险安排	
		$container.find('.updateInsuranceList').find('tbody').find('tr').each(function() {
			var $that = $(this);

			if ($that.find('input[name="insuranceId"]').val())  {
				settings.push(
					{
						$ele: $that.find('input[name="type"]'),
						rules: [
							{
								type: 'null',
								errMsg: '保险类型不能为空'
							}
						]
					},
					{
						$ele: $that.find('input[name="price"]'),
						rules: [
							{
								type: 'null',
								errMsg: '保险价格不能为空'
							},
							{
								type: 'float',
								errMsg: '保险价格格式不正确'
							}
						]
					}
				);
			}
		});

		// 车队安排
		$container.find('.updateBusCompanyList').find('tbody').find('tr').each(function() {
			var $that = $(this);

			settings.push({
				$ele: $that.find('input[name="needSeatCount"]'),
				rules: [ 
					{
						type: 'int',
						errMsg: '需求座位数格式不正确'
					}
				]
			});

			if ($that.find('input[name="busCompanyId"]').val())  {
				settings.push(
					{
						$ele: $that.find('input[name="licenseNumber"]'),
						rules: [
							{
								type: 'null',
								errMsg: '车辆牌照不能为空'
							}
						]
					}
				);
			}
		});

		// 行程安排
		var $schedule = $container.find('.updateLineProductDaysListContainer');
		{
			// 餐饮
			$schedule.find('.scheduleList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="restaurantId"]').val())  {
					// 选择了餐厅
					settings.push(
						{
							$ele: $that.find('input[name="typeName"]'),
							rules: [
								{
									type: 'null',
									errMsg: '餐标名称不能为空'
								}
							]
						}
					);
				}
			});

			// 酒店
			$schedule.find('.resourceHotelList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="hotelId"]').val())  {
					// 选择了酒店
					settings.push(
						{
							$ele: $that.find('input[name="hotelRoom"]'),
							rules: [
								{
									type: 'null',
									errMsg: '房型不能为空'
								}
							]
						}
					);
				}
			});

			// 景区
			$schedule.find('.resourceScenicList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="scenicId"]').val())  {
					// 选择了景区
					settings.push(
						{
							$ele: $that.find('input[name="chargingProjects"]'),
							rules: [
								{
									type: 'null',
									errMsg: '收费项目不能为空'
								}
							]
						}
					);
				}
			});

			// 购物
			$schedule.find('.resourceSelfPayList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="shopId"]').val())  {
					// 选择了购物
					settings.push(
						{
							$ele: $that.find('input[name="goodsPolicy"]'),
							rules: [
								{
									type: 'null',
									errMsg: '商品政策不能为空'
								}
							]
						}
					);
				}
			});

			// 自费
			$schedule.find('.resourceSelfPayList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="companyId"]').val())  {
					// 选择了餐厅
					settings.push(
						{
							$ele: $that.find('.chooseItemName'),
							rules: [
								{
									type: 'null',
									errMsg: '项目名称不能为空'
								}
							]
						}
					);
				}
			});

			// 交通
			$schedule.find('.resourceTicketList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('.chooseTicketName').val())  {
					// 选择了餐厅
					settings.push(
						{
							$ele: $that.find('input[name="price"]'),
							rules: [
								{
									type: 'null',
									errMsg: '价格不能为空'
								},
								{
									type: 'float',
									errMsg: '价格格式不正确'
								},
							]
						}
					);
				}
			});
		}
		
		return settings;
	}

	/**
	 * 更新产品线路的配置
	 * @param  {[type]} validator [description]
	 * @return {[type]}           [description]
	 */
	rule.lineProductUpdate = function(validator)  {
		if (!!validator && this.$lineProductContainer)  {
			validator.update(this.getLineProductSettings(this.$lineProductContainer));
		}

		return validator;
	}

	return rule;
});