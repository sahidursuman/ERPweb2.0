define(function(require, exports) {
	var rule = {
		check : function($obj) {
			var validator = $obj.formValidate([ { //商家名称
				$ele : $obj.find('input[name="name"]'),
				rules : [ {
					type : 'null',
					errMsg : '商家名称不能为空'
				} ]
			}, { // 联系电话
				$ele : $obj.find('input[name="companyPhoneNumber"]'),
				rules : [ {
					type : 'null',
					errMsg : '联系电话不能为空'
				}, {
					type : 'landline',
					errMsg : '联系电话格式不正确'
				} ]
			}, { // 联系人
				$ele : $obj.find('input[name="managerName"]'),
				rules : [ {
					type : 'null',
					errMsg : '联系人不能为空'
				} ]
			}, { // 联系人电话
				$ele : $obj.find('input[name="mobileNumber"]'),
				rules : [ {
					type : 'null',
					errMsg : '联系电话不能为空'
				}, {
					type : 'mobile-phone',
					errMsg : '联系电话格式不正确'
				} ]
			},

			{ // 固定电话
				$ele : $obj.find('input[name="telNumber"]'),
				rules : [

				{
					type : 'landline',
					errMsg : '座机号码格式不正确'
				} ]
			} ]);
			return validator;
		},
		//对政策列表进行验证
		checkItems : function($obj) {
			var itemValidator = $obj.formValidate([

			//对项目列表进行验证
			{ // 收费项目
				$ele : $obj.find('input[name="name"]'),
				rules : [ {
					type : 'null',
					errMsg : '商品名称不能为空'
				} ]
			}]);
			return itemValidator
		},
		//对购物政策进行验证
		checkShopItem : function($obj) {
			var shopItemValidator = $obj.formValidate([
			   { //时间范围-开始时间
				$ele : $obj.find('input[name=startTime]'),
				rules : [ {
					type : 'null',
					errMsg : '开始时间不能为空'
				} ]
			}, { //时间范围-结束时间
				$ele : $obj.find('input[name="endTime"]'),
				rules : [ {
					type : 'null',
					errMsg : '结束时间不能为空'
				} ]
			}, { //内部价
				$ele : $obj.find('input[name="costMoneyStart"]'),
				rules : [ {
					type : 'float',
					errMsg : '请输入数字'
				} ]
			}, { //市场价
				$ele : $obj.find('input[name="costMoneyEnd"]'),
				rules : [ {
					type : 'float',
					errMsg : '请输入数字'
				} ]
			}, { //导游返佣
				$ele : $obj.find('input[name="guideRate"]'),
				rules : [ {
					type : 'float',
					errMsg : '请输入数字'
				} ]
			}, { //旅行社返佣
				$ele : $obj.find('input[name="travelAgencyRate"]'),
				rules : [ {
					type : 'float',
					errMsg : '请输入数字'
				} ]
			} ]);
			return shopItemValidator
		}
	}
	return rule;
});