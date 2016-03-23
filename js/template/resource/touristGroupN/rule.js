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
                    errMsg: '客人信息不能为空'
                }]
			},
			{
				//联系电话
				$ele: $obj.find('[name="mobileNumber"]'),
				rules : [{
                    type: 'null',
                    errMsg: '联系电话不能为空'
                },
                {
                    type: 'phone-num',
                    errMsg: '请输入正确的联系电话'
                }]
			},
			{
				//外联销售
				$ele: $obj.find('[name="outOPUserName"]'),
				rules : [{
                    type: 'null',
                    errMsg: '外联销售不能为空'
                }]
			},
			{
				//抵达时间
				$ele: $obj.find('[name="arriveTime"]'),
				rules : [{
                    type: 'null',
                    errMsg: '抵达时间不能为空'
                }]
			},
			{
				//班次
				$ele: $obj.find('[name="arriveShift"]'),
				rules : [{
                    type: 'null',
                    errMsg: '班次不能为空'
                }]
			},
			{
				//全陪电话
				$ele: $obj.find('[name="accompanyGuideMobile"]'),
				rules : [{
                    type: 'phone-num',
                    errMsg: '请输入正确的全陪电话'
                }]
			},
			{
				//本段现收团款
				$ele: $obj.find('[name="operateCurrentNeedPayMoney"]'),
				rules : [{
                    type: 'float',
                    errMsg: '本段现收团款必须为数字'
                }]
			}]
		}
	};
});