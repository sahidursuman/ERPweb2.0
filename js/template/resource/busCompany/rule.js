/**
 * 资源管理-车队管理：表单验证规则
 */

define(function(require, exports) {
	var rule = {};
	
	/**
	 * 绑定车队信息的表单验证
	 * @param  {object} $container 车队表单的顶级元素
	 * @return {object}            车队表单验证对象
	 */
	rule.busComCheckor = function($container) {
		this.$container = $container;

		var settings = this.getBusComSettings($container);

		return $container.formValidate(settings);
	};

	/**
	 * 组织车队表单验证设置		
	 * @param  {object} $container 车队表单的顶级元素
	 * @return {object}            表单验证的设置
	 */
	rule.getBusComSettings = function($container) {
		var settings = [  // 固定验证的初始化
			{
				$ele: $container.find('input[name="companyName"]'),
				rules: [
					{
						type: 'null',
						errMsg: '车队名称不能为空'
					}
				]
			},
			{
				$ele: $container.find('input[name="managerName"]'),
				rules: [
					{
						type: 'null',
						errMsg: '联系人不能为空'
					}
				]
			},			
			{
				$ele: $container.find('input[name="mobileNumber"]'),
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
				$ele: $container.find('input[name="telNumber"]'),
				rules: [
					{
						type: 'landline',
						errMsg: '座机号码格式不正确'
					}
				]
			},
			{
				$ele: $container.find('input[name="faxNumber"]'),
				rules: [
					{
						type: 'landline',
						errMsg: '传真号码格式不正确'
					}
				]
			},
			{
				$ele: $container.find('input[name="licenseNumber"]'),
				rules: [
					{
						type: 'null',
						errMsg: '车牌号不能为空'
					},
					{
						type: 'plate-num',
						errMsg: '车牌号格式不正确'
					}
				]
			},
			{
				$ele: $container.find('input[name="brand"]'),
				rules: [
					{
						type: 'null',
						errMsg: '车辆品牌不能为空'
					}
				]
			},
			{
				$ele: $container.find('input[name="seatCount"]'),
				rules: [
					{
						type: 'null',
						errMsg: '座位数不能为空'
					},
					{
						type: 'int',
						errMsg: '座位数格式不正确'
					}
				]
			},
			{
				$ele: $container.find('input[name="driverName"]'),
				rules: [
					{
						type: 'null',
						errMsg: '司机姓名不能为空'
					}
				]
			},
			{
				$ele: $container.find('.driverList').find('input[name="mobileNumber"]'),
				rules: [
					{
						type: 'null',
						errMsg: '司机电话不能为空'
					},
					{
						type: 'mobile-phone',
						errMsg: '司机电话格式不正确'
					}
				]
			},
			{
				$ele: $container.find('input[name="driveYears"]'),
				rules: [
					{
						type: 'null',
						errMsg: '司机驾龄不能为空'
					},
					{
						type: 'int',
						errMsg: '司机驾龄格式不正确'
					}
				]
			}
		];

		$container.find('.T-busList').find('tr').each(function() {
			var $that = $(this);

			if ($that.find('select[name="isChartered"]').val() === '1')  {
				// 协议包车
				settings.push(
					{
						$ele: $that.find('input[name="startTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '开始日期不能为空'
							}
						]
					},
					{
						$ele: $that.find('input[name="endTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '截止日期不能为空'
							}
						]
					},
					{
						$ele: $that.find('input[name="contractPrice"]'),
						rules: [
							{
								type: 'null',
								errMsg: '包车价格不能为空'
							},
							{
								type: 'float',
								errMsg: '包车价格格式不正确'
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
			validator.update(this.getBusComSettings(this.$container));
		}

		return validator;
	}
	return rule;
});