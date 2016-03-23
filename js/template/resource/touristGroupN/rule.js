define(function(require, exports) {
	return {
		checkedEditor : function($obj) {
			var settings = [
			{
				//客户
				$ele: $obj.find('[name="fromPartnerAgency"]'),
				rules : [{
                    type: 'null',
                    errMsg: '客户不能为空'
                }]
			},
			{
				//线路产品
				$ele: $obj.find('[name="lineProductName"]'),
				rules : [{
                    type: 'null',
                    errMsg: '线路产品不能为空'
                }]
			},
			{
				//接团日期不能为空
				$ele: $obj.find('[name="startTime"]'),
				rules : [{
                    type: 'null',
                    errMsg: '接团日期不能为空'
                }]
			},
			{
				//送团日期不能为空
				$ele: $obj.find('[name="endTime"]'),
				rules : [{
                    type: 'null',
                    errMsg: '送团日期不能为空'
                }]
			},
			{
				//应收不能为空
				$ele: $obj.find('[name="needPayAllMoney"]'),
				rules : [{
                    type: 'null',
                    errMsg: '应收不能为空'
                }]
			},
			{
				//客人信息为空
				$ele: $obj.find('[name="guestDetails"]'),
				rules : [{
                    type: 'null',
                    errMsg: '客人信息为空'
                }]
			}]
		}
	};
});