/**
 * 游客管理验证
 *
 */
define(function(require, exports) {
	var rule = {

		//游客管理验证 
		checkAddBooking:function($obj){
			var validator = $obj.formValidate([
				{	//同行客户验证 
					$ele: $obj.find('input[name="partnerAgencyName"]'),
					rules: [
						{
							type: 'null',
							errMsg: '同行不能为空'
						}
					]
				},{	//联系人
					$ele: $obj.find('input[name="contactRealname"]'),
					rules: [
						{
							type: 'null',
							errMsg: '联系人不能为空'
						}
					]
				},{	//联系电话
					$ele: $obj.find('input[name="contactMobileNumber"]'),
					rules: [
						{
							type: 'null',
							errMsg: '联系电话不能为空'
						},{
							type: 'phone-num',
							errMsg: '联系电话格式不正确'
						}
					]
				},
				{	//游客电话
					$ele: $obj.find('input[name="touristMobileNumber"]'),
					rules: [
						{
							type: 'mobile-phone',
							errMsg: '游客电话格式不正确'
						}
					]
				},{	//已收
					$ele: $obj.find('input[name="getedMoney"]'),
					rules: [
						{
							type: 'float',
							errMsg: '已收数字不合法'
						}
					]
				},{	//已付
					$ele: $obj.find('input[name="payedMoney"]'),
					rules: [
						{
							type: 'float',
							errMsg: '已付数字不合法'
						}
					]
				}
			]);
			return validator;
		},


		//酒店代订验证	
		checkBookingHotel:function($checkBookingHoteObj){
			var validatorHotel=$checkBookingHoteObj.formValidate([
				{//入住日期
					$ele:$checkBookingHoteObj.find('input[name="enterTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '日期不能为空'
						}
					]
				},{//离开日期
					$ele: $checkBookingHoteObj.find('input[name="leaveTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '离开日期不能为空'
						}
					]
				},{//酒店
					$ele: $checkBookingHoteObj.find('input[name="hotelName"]'),
					$valObj: $checkBookingHoteObj.find('input[name="hotelId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
						{
							type:'null',
							errMsg: '酒店不能为空'
						}
					]

				},{//房型

					$ele: $checkBookingHoteObj.find('input[name="hotelRoom"]'),
					$valObj: $checkBookingHoteObj.find('input[name="hotelRoomId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
						{
							type:'null',
							errMsg: '房型不能为空'
						}
					]
				},{//数量
					$ele: $checkBookingHoteObj.find('input[name="roomCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '数量不能为空'
						},{
							type: 'float',
							errMsg: '数量输入格式不正确'
						}
					]
				},
				{//天数
					$ele: $checkBookingHoteObj.find('input[name="days"]'),
					rules: [
						{
							type: 'float',
							errMsg: '天数输入不合法'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingHoteObj.find('input[name="costPrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingHoteObj.find('input[name="salePrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				}
			]);
			return validatorHotel;
		},


		//景区项目贷订订验证
		checkBookingScenic:function($checkBookingScenicObj){
			var validatorScenic=$checkBookingScenicObj.formValidate([
				{//日期
					$ele:$checkBookingScenicObj.find('input[name="startTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '日期不能为空'
						}
					]
				},{//景区
					$ele: $checkBookingScenicObj.find('input[name="scenicName"]'),
					$valObj: $checkBookingScenicObj.find('input[name="scenicId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
						{
							type:'null',
							errMsg: '景区不能为空'
						}
					]

				},{//收费项

					$ele: $checkBookingScenicObj.find('input[name="scenicItemName"]'),
					$valObj: $checkBookingScenicObj.find('input[name="scenicItemId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
						{
							type:'null',
							errMsg: '收费金额不能为空'
						}
					]},{//房型数量
					$ele: $checkBookingScenicObj.find('input[name="roomCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '数量不能为空'
						},{
							type: 'float',
							errMsg: '数量输入格式不正确'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingScenicObj.find('input[name="costPrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingScenicObj.find('input[name="salePrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				}

			]);
			return validatorScenic;
		},


		//票务贷订订验证
		checkBookingTicket:function($checkBookingTicketObj){
			var validatorTicket=$checkBookingTicketObj.formValidate([
				{//票务公司
					$ele:$checkBookingTicketObj.find('input[name="ticketName"]'),
					$valObj:$checkBookingTicketObj.find('input[name="ticketId"]'),  // 默认是undefined，用于autocomplete之类的插件
					rules: [
						{
							type: 'null',
							errMsg: '票务公司不能为空'
						}
					]
				},{//班次
					$ele: $checkBookingTicketObj.find('input[name="shift"]'),
					rules: [
						{
							type: 'null',
							errMsg: '班次不能为空'
						}
					]
				},{//时间
					$ele:$checkBookingTicketObj.find('input[name="startTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '时间不能为空'
						}
					]
				},{//数量
					$ele: $checkBookingTicketObj.find('input[name="roomCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '数量不能为空'
						}, {
							type: 'float',
							errMsg: '数量输入格式不正确'
						}
					]
				},{//座位级别
					$ele: $checkBookingTicketObj.find('input[name="seatLevel"]'),
					rules: [
						{
							type: 'null',
							errMsg: '座位级别不能为空'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingTicketObj.find('input[name="costPrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingTicketObj.find('input[name="salePrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				}

			]);
			return validatorTicket;
		},




		//旅游车贷订订验证
		checkBookingBus:function($checkBookingBusObj){
			var validatorBus=$checkBookingBusObj.formValidate([
				{//开始日期
					$ele:$checkBookingBusObj.find('input[name="startTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '开始日期不能为空'
						}
					]
				},{//结束日期
					$ele: $checkBookingBusObj.find('input[name="endTime"]'),
					rules: [
						{
							type: 'null',
							errMsg: '结束日期不能为空'
						}
					]
				},{//车座数
					$ele: $checkBookingBusObj.find('input[name="needSeatCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '车座数不能为空'
						},
						{
							type: 'int',
							errMsg: '请输入数字'
						}
					]
				},{//所属车队
					$ele: $checkBookingBusObj.find('input[name="busCompany"]'),
					$valObj: $checkBookingBusObj.find('input[name="busCompanyId"]'),
					rules: [
						{
							type: 'null',
							errMsg: '所属车队不能为空'
						}
					]
				},{//数量
					$ele: $checkBookingBusObj.find('input[name="roomCount"]'),
					rules: [
						{
							type: 'null',
							errMsg: '数量不能为空'
						}, {
							type: 'int',
							errMsg: '数量输入格式不正确'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingBusObj.find('input[name="costPrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				},
				{//成本单价
					$ele: $checkBookingBusObj.find('input[name="salePrice"]'),
					rules: [
						{
							type: 'float',
							errMsg: '请输入数字'
						}
					]
				}

			]);
			return validatorBus;
		},
		//新增同行客户联系人验证
		checkdPartnerManager:function($checkdPartnerManagerObj){
			var validatorManager=$checkdPartnerManagerObj.formValidate([
				{//联系人姓名
					$ele: $checkdPartnerManagerObj.find('input[name="managerName"]'),
					rules: [
						{
							type: 'null',
							errMsg: '联系人姓名不能为空'
						}
					]
				},{//联系人电话
					$ele: $checkdPartnerManagerObj.find('input[name="managerMobile"]'),
					rules: [
						{
							type: 'null',
							errMsg: '联系人电话不能为空'
						}, {
							type: 'mobile-phone',
							errMsg: '联系人电话格式不正确'
						}
					]
				}/*,{//所属部门
					$ele: $checkdPartnerManagerObj.find('input[name="departmentName"]'),
					rules: [
						{
							type: 'null',
							errMsg: '所属部门不能为空'
						}
					]
				},{//所属职位
					$ele: $checkdPartnerManagerObj.find('input[name="dutyName"]'),
					rules: [
						{
							type: 'null',
							errMsg: '所属职位不能为空'
						}
					]
				}*/

			]);
			return validatorManager;
		}
	}
	return rule;
});
