/**
 * 发团计划验证 
 */
define(function(require, exports) {
    var rule = {
        checkedEditor : function($obj){
            var settings = [
            { 
                //线路产品
                $ele: $obj.find('input[name="lineProductName"]'),
                $valObj: $obj.find('input[name="lineProductId"]'),
                rules : [{
                    type: 'null',
                    errMsg: '线路产品不能为空'
                }]
            },
            { 
                //人数 - 大人
                $ele: $obj.find('input[name="adultCount"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '大人数量不能为空'
                    },
                    {
                        type: 'nonnegative-int',
                        errMsg: '小孩数必须正整数'
                    }
                ]
            },
            { 
                //人数 - 小孩
                $ele: $obj.find('input[name="childCount"]'),
                rules : [
                    {
                        type: 'nonnegative-int',
                        errMsg: '小孩数必须正整数'
                    }
                ]
            },
            { 
                //出游日期
                $ele: $obj.find('input[name="startTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '出游日期不能为空'
                    }
                ]
            },
            { 
                //计划人数
                $ele: $obj.find('input[name="planTouristCount"]'),
                rules : [
                    {
                        type: 'nonnegative-int',
                        errMsg: '计划人数只能为非负整数'
                    }
                ]
            },
            { 
                //完团日期
                $ele: $obj.find('input[name="endTime"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '完团日期不能为空'
                    }
                ]
            },
            { 
                //客户
                $ele: $obj.find('input[name="travelAgencyName"]'),
                $valObj: $obj.find('input[name="fromPartnerAgencyId"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '客户不能为空'
                    }
                ]
            },
            { 
                //客户联系人
                $ele: $obj.find('input[name="contactRealname"]'),
                $valObj: $obj.find('input[name="fromPartnerAgencyContactId"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '客户联系人不能为空'
                    }
                ]
            },
            { 
                //全陪电话
                $ele: $obj.find('input[name="accompanyGuideMobile"]'),
                rules : [
                    {
                        type: 'phone-num',
                        errMsg: '请输入正确的全陪电话'
                    }
                ]
            },
            { 
                //应收
                $ele: $obj.find('input[name="needPayAllMoney"]'),
                rules : [
                    {
                        type: 'null',
                        errMsg: '应收不能为空'
                    }
                ]
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
            },
            {
                $ele: $obj.find('input[name="title"]'),
                rules: [{
                    type: 'null',
                    errMsg: '简要行程不能为空'
                }]
            },
            {
                $ele: $obj.find('input[name="name"]'),
                rules: [{
                    type: 'null',
                    errMsg: '姓名不能为空'
                }]
            },
            {
                $ele: $obj.find('input[name="mobileNumber"]'),
                rules: [
                {
                    type: 'mobile-phone',
                    errMsg: '请输入正确的手机号码'
                }]
            },
            /*{
                $ele: $obj.find('input[name="requireContent"]'),
                rules: [{
                    type: 'null',
                    errMsg: '计划要求不能为空'
                }]
            },*/
            {
                $ele: $obj.find('input[name="describeInfo"]'),
                rules: [{
                    type: 'null',
                    errMsg: '费用项不能为空'
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
            },{
                $ele: $obj.find('input[name="planTouristCount"]'),
                rules: [{
                    type: 'positive-int',
                    errMsg: '计划人数必须为正整数'
                }]
            }];

            if ($obj.find('.T-timed').prop('checked')) {
                settings.push({ //定时发送时间不能为空
                    $ele: $obj.find('input[name="executeTime"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '定时发送时间不能为空'
                    }]
                });
            }

            $obj.find('.T-tourists-list').children('tr').each(function(index, el) {
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
        }
    };
    rule.checkPlan = function($container) {
        this.$container = $container;
        return $container.formValidate(this.checkedEditor($container));
    };
    rule.update = function(validator) {
        if (!!validator)  {
            validator.update(this.checkedEditor(this.$container));
        }

        return validator;
    }
    return rule;
});
