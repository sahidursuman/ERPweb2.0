/**
 * 游客管理验证  
 *
 */
define(function(require, exports) {
    var rule = {

        //游客管理验证 
        checktouristGroup: function($obj) {
            this.$touristGroupContainer = $obj;
            var validator = $obj.formValidate(this.gettTouristGroupSettings());
            return validator;
        },
        updateTouristGroupCheckor: function(validator) {
            validator.update(this.gettTouristGroupSettings());

            return validator;
        },

        gettTouristGroupSettings: function() {
            var $obj = this.$touristGroupContainer,

                settings = [{ //出游日期   
                        $ele: $obj.find('input[name="startTime"]'),
                        rules: [{
                            type: 'null',
                            errMsg: '出游日期不能为空'
                        }]
                    },{ //出游日期   
                        $ele: $obj.find('input[name="endTime"]'),
                        rules: [{
                            type: 'null',
                            errMsg: '完团日期不能为空'
                        }]
                    }, {
                        $ele: $obj.find('input[name="fromPartnerAgency"]'),
                        $valObj: $obj.find('input[name="fromPartnerAgencyId"]'),
                        rules: [{
                            type: 'null',
                            errMsg: '客户来源不能为空'
                        }]
                    }, {
                        $ele: $obj.find('input[name="preIncomeMoney"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '预收款不合法'
                        }]
                    },{ //已收  

                        $ele: $obj.find('input[name="payedMoney"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '已收数字不合法'
                        }]
                    }, { //已收  

                        $ele: $obj.find('input[name="count"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '费用项数量不合法'
                        }]
                    }, { //已收  

                        $ele: $obj.find('input[name="price"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '费用项单价不合法'
                        }]
                    },{ //现收
                        $ele: $obj.find('input[name="currentNeedPayMoney"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '现收数字不合法'
                        }]
                    }, { //大人--//新增费用项目验证
                        $ele: $obj.find('input[name="adultCount"]'),
                        rules: [{
                            type: 'int',
                            errMsg: '大人数量必须为正数'
                        }, {
                            type: 'null',
                            errMsg: '大人数量不能为空'
                        }]
                    }, { //大人--//新增费用项目验证
                        $ele: $obj.find('input[name="adultPrice"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '大人单价不合法'
                        }, {
                            type: 'null',
                            errMsg: '大人单价不能为空'
                        }]
                    }, { //小孩
                        $ele: $obj.find('input[name="childCount"]'),
                        rules: [{
                            type: 'int',
                            errMsg: '小孩数量必须为正数'
                        }]
                    }, { //小孩
                        $ele: $obj.find('input[name="childPrice"]'),
                        rules: [{
                            type: 'float',
                            errMsg: '小孩单价不合法'
                        }]
                    }, { //姓名
                        $ele: $obj.find('input[name="name"]'),
                        rules: [{
                            type: 'null',
                            errMsg: '添加成员姓名不能为空'
                        }]
                    }, { //手机号   
                        $ele: $obj.find('input[name="mobileNumber"]'),
                        rules: [{
                            type: 'mobile-phone',
                            errMsg: '手机号码格式不正确'
                        }]
                    }, { //手机号   
                        $ele: $obj.find('input[name="accompanyGuideMobile"]'),
                        rules: [{
                            type: 'mobile-phone',
                            errMsg: '全陪电话号码格式不正确'
                        }]
                    }
                ];

            $obj.find('.addTouristTbody').children().each(function() {
                var $that = $(this);

                if ($that.find('select[name="idCardType"]').val() === '0') {
                    settings.push({ //证件号
                        $ele: $that.find('input[name="idCardNumber"]'),
                        rules: [{
                            type: 'id',
                            errMsg: '证件号码格式不正确'
                        }]
                    });
                }
            });

            return settings;
        },
        //新增同行客户联系人验证
        checkdPartnerManager: function($checkdPartnerManagerObj) {
            var validatorManager = $checkdPartnerManagerObj.formValidate([{ //联系人姓名
                    $ele: $checkdPartnerManagerObj.find('input[name="managerName"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '联系人姓名不能为空'
                    }]
                }, { //联系人电话
                    $ele: $checkdPartnerManagerObj.find('input[name="managerMobile"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '座机电话或联系人电话格式不能为空'
                    }, {
                        type: 'phone-num',
                        errMsg: '座机电话或联系人电话格式不正确'
                    }]
                }

            ]);
            return validatorManager;
        },
        //中转验证

        checkInnerTransfer: function($obj) {
            var checkInnerValidator = $obj.formValidate([{ //接待日期
                    $ele: $obj.find('input[name="arriveTime"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '接团时间不能为空'
                    }]
                }, { //地点
                    $ele: $obj.find('input[name="leaveTime"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '送团时间不能为空'
                    }]
                }, { //送离日期
                    $ele: $obj.find('input[name="arrivePosition"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '接团地点不能为空'
                    }]
                }, { //地点
                    $ele: $obj.find('input[name="leavePosition"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '送团地点不能为空'
                    }]
                }


            ]);
            return checkInnerValidator;
        }
    }
    return rule;
});
