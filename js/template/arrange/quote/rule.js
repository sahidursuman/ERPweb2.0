/**
 * 【报价管理】的验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**
	 * 操作报价管理时的表单验证
	 * @param  {object} $container 线路产品表单的父容器
	 * @return {object}            表单验证对象
	 */
	rule.quoteCheckor = function($container)  {
		this.$quoteContainer = $container;
		var settings = this.getQuoteSettings(this.$quoteContainer);

		return $container.formValidate(settings);
	};

	/**
	 * 设置报价管理表单的配置
	 * @param  {[type]} $container [description]
	 * @return {[type]}            [description]
	 */
	rule.getQuoteSettings = function($container)  {
		var settings = [
			{
				$ele: $container.find('.T-quoteInfo input[name="startTime"]'),
				rules: [
					{
						type: 'null',
						errMsg: '出游日期不能为空'
					}
				]
			},
			{
				$ele: $container.find('.T-quoteInfo input[name="adultCount"]'),
				rules: [
					{
						type: 'null',
						errMsg: '大人数量不能为空'
					},
					{
						type: 'nonnegative-int',
						errMsg: '大人数量只能是非负整数'
					}
				]
			},
			{
				$ele: $container.find('.T-quoteInfo input[name="childCount"]'),
				rules: [
					{
						type: 'nonnegative-int',
						errMsg: '小孩数量只能是非负整数'
					}
				]
			},
			{
				$ele: $container.find('.T-quoteInfo input[name="partnerAgencyName"]'),
				rules: [
					{
						type: 'null',
						errMsg: '客户不能为空'
					}
				]
			},
			{
				$ele: $container.find('.T-quoteInfo input[name="managerName"]'),
				rules: [
					{
						type: 'null',
						errMsg: '联系人不能为空'
					}
				]
			}
		];
		//车询价
		$container.find('.T-busInquiry').each(function() {
			var $this = $(this);
			settings.push(
				{
					$ele: $this.find('input[name="seatCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '车座数不能为空'
						},
						{
							type: 'int',
							errMsg: '车座数格式不正确'
						}
					]
				},
				{
					$ele: $this.find('input[name="expiryTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '询价截止时间不能为空'
						}
					]
				}
			)
		});
		//酒店询价
		$container.find('.T-hotelInquiry').each(function() {
			var $this = $(this);
			settings.push(
				{
					$ele: $this.find('input[name="roomType"]'),
					rules: [
						{
							type: 'null',
							errMsg: '房型不能为空'
						}
					]
				},
				{
					$ele: $this.find('input[name="expiryTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '询价截止时间不能为空'
						}
					]
				},
				{
					$ele: $this.find('input[name="roomCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '数量不能为空'
						},
						{
							type: 'float',
							errMsg: '数量格式不正确'
						}
					]
				}
			)
		});
		// 保险安排	
		$container.find('.T-arrangeInsuranceList').find('tbody').find('tr').each(function() {
			var $that = $(this);
			if ($that.find('input[name="insuranceId"]').val())  {
				settings.push(
					{
						$ele: $that.find('input[name="type"]'),
						rules: [
							{
								type: 'null',
								errMsg: '险种不能为空'
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
		$container.find('.T-arrangeBusCompanyList').find('tbody').find('tr').each(function() {
			var $that = $(this);

			if ($that.find('input[name="busCompanyId"]').val())  {
				settings.push(
					{
						$ele: $that.find('input[name="seatcountPrice"]'),
						rules: [
							{
								type: 'null',
								errMsg: '座位价不能为空'
							}
						]
					}
				);
			}
		});

		// 行程安排
		var $schedule = $container.find('.T-timeline-detail-container');
		{
			// 餐饮
			$schedule.find('.T-RestaurantList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="restaurantId"]').val())  {
					// 选择了餐厅
					settings.push(
						{
							$ele: $that.find('input[name="price"]'),
							rules: [
								{
									type: 'null',
									errMsg: '餐标不能为空'
								}
							]
						}
					);
				}
			});

			// 酒店
			$schedule.find('.T-resourceHotelList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="hotelId"]').val()) {
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
						},
						{
							$ele: $that.find('input[name="count"]'),
							rules: [
								{
									type: 'null',
									errMsg: '数量不能为空'
								},
								{
									type: 'positive-float2',
									errMsg: '数量格式不正确'
								},
							]
						}
					);
				}
			});

			// 景区
			$schedule.find('.T-resourceScenicList').find('tbody').find('tr').each(function() {
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
			$schedule.find('.T-resourceShoppingList').find('tbody').find('tr').each(function() {
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
			$schedule.find('.T-resourceSelfPayList').find('tbody').find('tr').each(function() {
				var $that = $(this);

				if ($that.find('input[name="companyId"]').val())  {
					// 选择了餐厅
					settings.push(
						{
							$ele: $that.find('input[name=selfPayItemName]'),
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
			$schedule.find('.T-resourceTicketList').find('tbody').find('tr').each(function() {
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
						},
						{
							$ele: $that.find('input[name="count"]'),
							rules: [
								{
									type: 'null',
									errMsg: '数量不能为空'
								},
								{
									type: 'float',
									errMsg: '数量格式不正确'
								},
							]
						},
						{
							$ele: $that.find('input[name="time"]'),
							rules: [
								{
									type: 'null',
									errMsg: '日期不能为空'
								}
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
	rule.quoteUpdate = function(validator)  {
		if (!!validator && this.$quoteContainer)  {
			validator.update(this.getQuoteSettings(this.$quoteContainer));
		}

		return validator;
	}

	return rule;
});