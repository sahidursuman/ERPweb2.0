/**
 * 中转安排验证  
 *
 */
define(function(require, exports) {	
	var rule = {
		setTranistCheckor: function($container) {
			this.$container = $container;

			var settings = this.getTranistSettings();
			return $container.formValidate(settings);
		},

		updateTranistCheckor: function(validator) {
			validator.update(this.getTranistSettings());
			return validator;
		},
		getTranistSettings: function() {
			var $container = this.$container, 
				$bus = $container.find('.busListTable').find('tbody').children('tr'),
				$hotel = $container.find('.hotelListTable').find('tbody').children('tr'),
				$ticket = $container.find('.ticketListTable').find('tbody').children('tr'),
				settings = [];

			$bus.each(function() {
				var $that = $(this);

				if ($that.find('input[name="busCompanyId"]').val())  {
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

					/*settings.push({
						$ele: $that.find('input[name="busFee"]'),
						rules: [
							{
								type: 'null',
								errMsg: '数量不能为空'
							}
						]
					});*/

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
				}
			});

			$hotel.each(function() {
				var $that = $(this);

				if ($that.find('input[name="hotelCheckInTime"]').val())  {
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
				}
			});

			$ticket.each(function() {
				var $that = $(this);

				if ($that.find('input[name="tickeId"]').val())  {
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

					/*settings.push({
						$ele: $that.find('input[name="ticketPrice"]'),
						rules: [
							{
								type: 'null',
								errMsg: '单价不能为空'
							},
							{
								type: 'NoNumber',
								errMsg: '数据格式不正确'
							}
						]
					});*/

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

					/*settings.push({
						$ele: $that.find('input[name="ticketPayedMoney"]'),
						rules: [
							{
								type: 'null',
								errMsg: '已付款不能为空'
							},
							{
								type: 'NoNumber',
								errMsg: '数据格式不正确'
							}
						]
					});*/
				}
			});

			return settings;
		}
	};

	return rule;
});