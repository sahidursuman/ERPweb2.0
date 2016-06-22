/**
 * 客户订单验证 
 */
define(function(require, exports) {
	var rule = {
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
                //抵达时间
                $ele: $obj.find('[name="tripStartTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '出团日期不能为空'
                }]
            },
            {
                //抵达时间
                $ele: $obj.find('[name="tripEndTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '完团日期不能为空'
                }]
            },
            {
				//送离时间
				$ele: $obj.find('[name="leaveTime"]'),
				rules : [{
                    type: 'null',
                    errMsg: '送离时间不能为空'
                }]
			},
			/*{
				//班次
				$ele: $obj.find('[name="arriveShift"]'),
				rules : [{
                    type: 'null',
                    errMsg: '班次不能为空'
                }]
			},
			{
				//班次
				$ele: $obj.find('[name="leaveShift"]'),
				rules : [{
                    type: 'null',
                    errMsg: '班次不能为空'
                }]
			},*/
            {
                //班次
                $ele: $obj.find('[name="lineNeedPayMoney"]'),
                rules : [{
                    type: 'null',
                    errMsg: '线路应付不能为空'
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
                //本段团款
                $ele: $obj.find('[name="subNeedPayMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '本段团款必须为数字'
                }]
            },
			{
				//本段代收团款
				$ele: $obj.find('[name="currentNeedPayMoney"]'),
				rules : [{
                    type: 'float',
                    errMsg: '本段现收团款必须为数字'
                }]
			}];
			return settings;
		},
		checktTourist : function($container){
	        this.$container = $container;
	        return $container.formValidate(this.checkedEditor($container));
		},
		update : function(validator) {
	        if (!!validator)  {
	            validator.update(this.checkedEditor(this.$container));
	        }

	        return validator;
	    },
	    //客人信息
	    guestEditor : function($obj){
	    	var settings = [{
	    		//大人数
				$ele: $obj.find('[name="adultCount"]'),
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
	    		//小孩数
				$ele: $obj.find('[name="childCount"]'),
				rules : [{
                    type: 'nonnegative-int',
                    errMsg: '小孩数为正整数'
                }]
	    	},
	    	{
	    		//姓名
				$ele: $obj.find('[name="name"]'),
				rules : [{
                    type: 'null',
                    errMsg: '姓名不能为空'
                }]
	    	},
	    	{
	    		//手机号码
				$ele: $obj.find('[name="mobileNumber"]'),
				rules : [/*{
                    type: 'null',
                    errMsg: '手机号码不能为空'
                },*/
                {
                    type: 'mobile-phone',
                    errMsg: '请输入正确的手机号码'
                }]
	    	}];
	    	$obj.find('.T-addTouristTbody').children('tr').each(function(index, el) {
                var $that = $(this);
                if($that.find('[name="idCardType"]').val() == 0){
                    settings.push({//校验身份证号码
                        $ele: $that.find('input[name="idCardNumber"]'),
                        rules: [
                        {
                            type: 'id',
                            errMsg: '请输入正确的身份证号码'
                        }]
                    });
                }
            });
	        return settings;
	    },
		checkGuest : function($container){
	        this.$guestContainer = $container;
	        return $container.formValidate(this.guestEditor($container));
		},
		guestUpdate : function(validator) {
	        if (!!validator)  {
	            validator.update(this.guestEditor(this.$guestContainer));
	        }

	        return validator;
	    },
	    //应收&线路应付&...
	    needEditor : function($obj){
	    	var settings = [
            { 
                //入住时间
                $ele: $obj.find('input[name="intakeTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '入住时间不能为空'
                    }
                ]
            },
            { 
                //入住日期
                $ele: $obj.find('input[name="checkInTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '入住日期不能为空'
                    }
                ]
            },
            { 
                //离店日期
                $ele: $obj.find('input[name="checkOutTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '离店日期不能为空'
                    }
                ]
            },
            { 
                //消费日期
                $ele: $obj.find('input[name="consumeTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '消费日期不能为空'
                    }
                ]
            },
            { 
                //间数
                $ele: $obj.find('input[name="roomCount"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '房间数不能为空'
                    },
                    {
                        type: 'nonnegative-float',
                        errMsg: '房间数必须为正整数'
                    }
                ]
            },
            { 
                //出发时间
                $ele: $obj.find('input[name="startTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '出发时间不能为空'
                    }
                ]
            },
            { 
                //出发城市
                $ele: $obj.find('input[name="startingCity"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '出发城市不能为空'
                    }
                ]
            },
            { 
                //到达城市
                $ele: $obj.find('input[name="arriveCity"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '到达城市不能为空'
                    }
                ]
            },
            { 
                //出游日期
                $ele: $obj.find('input[name="startDate"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '出游日期不能为空'
                    }
                ]
            },
            { 
                //景区
                $ele: $obj.find('input[name="scenic"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '景区不能为空'
                    }
                ]
            },
            { 
                //门票数量
                $ele: $obj.find('input[name="memberCount"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '门票数量不能为空'
                    }
                ]
            },
            { 
                //开始用车时间
                $ele: $obj.find('input[name="startUseTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '开始用车时间不能为空'
                    }
                ]
            },
            { 
                //结束用车时间
                $ele: $obj.find('input[name="endUseTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '结束用车时间不能为空'
                    }
                ]
            },
            {
	    		//应收
				$ele: $obj.find('[name="needPayAllMoney"]'),
				rules : [{
                    type: 'null',
                    errMsg: '应收不能为空'
                }]
	    	},
            {
                $ele: $obj.find('input[name="count"]'),
                rules: [
                {
                    type: 'null',
                    errMsg: '数量不能为空'
                },
                {
                    type: 'NoNumber',
                    errMsg: '数量必须为正整数'
                }]
            },
            {
                $ele: $obj.find('input[name="days"]'),
                rules: [
                {
                    type: 'null',
                    errMsg: '天数不能为空'
                },
                {
                    type: 'positive-int',
                    errMsg: '天数必须为正整数'
                }]
            },
            {
                $ele: $obj.find('input[name="price"]'),
                rules: [
                {
                    type: 'null',
                    errMsg: '单价不能为空'
                },
                {
                    type: 'float',
                    errMsg: '单价必须为数字'
                }]
            },
            {
            	//预收款
                $ele: $obj.find('input[name="preIncomeMoney"]'),
                rules : [
                    {
                        type: 'float',
                        errMsg: '预收款必须为数字'
                    }
                ]
            },
            { 
                //计划现收
                $ele: $obj.find('input[name="currentNeedPayMoney"]'),
                rules : [
                    {
                        type: 'float',
                        errMsg: '计划现收必须为数字'
                    }
                ]
            }];

            if($obj.find('.T-abversion').val() == "1"){
                settings.push({
                    //责任部门
                    $ele: $obj.find('input[name="dutyDepartmentName"]'),
                    rules : [
                        {
                            type: 'null',
                            errMsg: '责任部门不能为空'
                        }
                    ]
                });
                settings.push({
                    //部门
                    $ele: $obj.find('input[name="businessName"]'),
                    rules : [
                        {
                            type: 'null',
                            errMsg: '部门不能为空'
                        }
                    ]
                });
                settings.push({
                    //子部门
                    $ele: $obj.find('input[name="groupName"]'),
                    rules : [
                        {
                            type: 'null',
                            errMsg: '子部门不能为空'
                        }
                    ]
                });
            }
            if($obj.find('.T-abversion').val() == "2"){
                settings.push({
                    //计划现收
                    $ele: $obj.find('input[name="transferPartnerAgency"]'),
                    rules : [
                        {
                            type: 'null',
                            errMsg: '同行不能为空'
                        }
                    ]
                });
            }
            

	        return settings;
	    },
	    checkNeed : function($container){
	        this.$needContainer = $container;
	        return $container.formValidate(this.needEditor($container));
		},
		needUpdate : function(validator) {
	        if (!!validator)  {
	            validator.update(this.needEditor(this.$needContainer));
	        }

	        return validator;
	    },
        bookingEditor : function($obj){
            var settings = [{ 
                //客户
                $ele: $obj.find('input[name="fromPartnerAgency"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '客户不能为空'
                    }
                ]
            },
            {
                //代订日期
                $ele: $obj.find('[name="bookDate"]'),
                rules : [{
                    type: 'null',
                    errMsg: '代订日期不能为空'
                }]
            },
            { 
                //客人信息
                $ele: $obj.find('input[name="guestDetails"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '客人信息不能为空'
                    }
                ]
            }];
            return settings;
        },
        bookingCheck : function($container){
            this.$bookingCheckContainer = $container;
            return $container.formValidate(this.bookingEditor($container));
        },
        payMoneyEditor : function ($obj) {
            return [{
                //本段团款
                $ele: $obj.find('[name="subNeedPayMoney"]'),
                rules : [
                {
                    type: 'float',
                    errMsg: '本段团款必须为数字'
                }]
            }]
        },
        checkPayMoney : function ($container) {
            return $container.formValidate(this.payMoneyEditor($container));
        }
	};
	return rule;
});