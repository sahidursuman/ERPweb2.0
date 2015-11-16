/**
 * 中转安排验证  
 *
 */
define(function(require, exports) {	
	var rule = {};
		rule.setTranistCheckor=function($container) {
			this.$container = $container;
		var settings = this.getTranistSettings($container);
		return $container.formValidate(settings);
		};
		rule.getTranistSettings=function($container) {
			var	$bus = $container.find('.busListTable').find('tbody').children('tr'),
				$hotel = $container.find('.hotelListTable').find('tbody').children('tr'),
				$ticket = $container.find('.ticketListTable').find('tbody').children('tr'),
				$restaurant = $container.find('.restaurantListTable').find('tbody').children('tr'),
				$other = $container.find('.otherListTable').find('tbody').children('tr'),
				settings = [];

			$bus.each(function() {
				var $that = $(this);
					// 设置车牌
					settings.push({
						$ele: $that.find('input[name="busLicenseNumber"]'),
						$valObj: $that.find('input[name="busLicenseNumberId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '车牌不能为空'
							}
						]
					});

					// 设置司机
					settings.push({
						$ele: $that.find('input[name="driverName"]'),
						$valObj: $that.find('input[name="driverId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '司机不能为空'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="bususeTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '用车时间不能为空'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="boardLocation"]'),
						rules: [
							{
								type: 'null',
								errMsg: '上车地点不能为空'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="busFee"]'),
						rules: [
							{
								type: 'float',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="busReduceMoney"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数据格式不正确'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="busPayedMoney"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数据格式不正确'
							}	
						]
					});
			});

			$hotel.each(function() {
				var $that = $(this);
					// 设置酒店
					settings.push({
						$ele: $that.find('input[name="hotelName"]'),
						$valObj: $that.find('input[name="hotelId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '酒店不能为空'
							}
						]
					});

					// 房型司机
					settings.push({
						$ele: $that.find('input[name="hotelRoomType"]'),
						$valObj: $that.find('input[name="hotelRoomTypeId"]'),
						rules: [
							{
								type: 'null',
								errMsg: '房型不能为空'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="hotelPrice"]'),
						rules: [
							{
								type: 'int',
								errMsg: '单价格式不正确'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="hotelMemberCount"]'),
						rules: [
							{
								type: 'null',
								errMsg: '数量不能为空'
							},
							{
								type: 'positive-float',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="hotelReduceMoney"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数据格式不正确'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="hotelPayedMoney"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数据格式不正确'
							}	
						]
					});
			});

			$ticket.each(function() {
				var $that = $(this);
					/*settings.push({
						$ele: $that.find('input[name="ticketStartCity"]'),
						rules: [
							{
								type: 'null',
								errMsg: '出发城市不能为空'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketArriveCity"]'),
						rules: [
							{
								type: 'null',
								errMsg: '到达城市不能为空'
							}
						]
					});*/

					settings.push({
						$ele: $that.find('input[name="ticketStartTime"]'),
						rules: [
							{
								type: 'null',
								errMsg: '日期不能为空'
							}
						]
					});


					settings.push({
						$ele: $that.find('input[name="ticketShift"]'),
						rules: [
							{
								type: 'null',
								errMsg: '班次不能为空'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketSeatLevel"]'),
						rules: [
							{
								type: 'null',
								errMsg: '座位级别不能为空'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketPrice"]'),
						rules: [
							{
								type: 'float',
								errMsg: '票务单价不合法'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketMemberCount"]'),
						rules: [
							{
								type: 'null',
								errMsg: '数量不能为空'
							},
							{
								type: 'NoNumber',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketReduceMoney"]'),
						rules: [
							{
								type: 'NoNumber',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="ticketPayedMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '数据格式不正确'
							}
						]
					});
			});


			$restaurant.each(function() {
				var $that = $(this);
					settings.push({
						$ele: $that.find('input[name="reduceMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="payedMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '数据格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="memberCount"]'),
						rules: [
							{
								type: 'NoNumber',
								errMsg: '数据格式不正确'
							}
						]
					});
			});

			$other.each(function() {
				var $that = $(this);
					settings.push({
						$ele: $that.find('input[name="price"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数字格式不正确'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="memberCount"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数字格式不正确'
							}
						]
					});

					settings.push({
						$ele: $that.find('input[name="reduceMoney"]'),
						rules: [
							{
								type: 'float',
								errMsg: '数字格式不正确'
							}	
						]
					});

					settings.push({
						$ele: $that.find('input[name="payedMoney"]'),
						rules: [
							{
								type: 'int',
								errMsg: '数字格式不正确'
							}	
						]
					});
			});
			return settings;
		};

	rule.update = function(validator) {
		if (!!validator)  {
			validator.update(this.getTranistSettings(this.$container));
		}
		return validator;
	}
	return rule;
});