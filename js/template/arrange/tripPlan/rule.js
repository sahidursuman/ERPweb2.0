/**
 * 发团计划验证 
 */
define(function(require, exports) {
    var rule = {
        //生成计划的基本信息的验证
        checkdCreateTripPlan: function($checkdCreateTripPlanObj) {
            var settings = [{ //出团日期
                    $ele: $checkdCreateTripPlanObj.find('input[name="startTime"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '出团日期不能为空'
                    }]
                }, { //计划人数
                    $ele: $checkdCreateTripPlanObj.find('input[name="planTouristCount"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '计划人数不能为空'
                    }, {
                        type: 'int',
                        errMsg: '请输入数字'
                    }]
                },

                { //全陪电话
                    $ele: $checkdCreateTripPlanObj.find('input[name="accompanyGuideMobile"]'),
                    rules: [{
                        type: 'mobile-phone',
                        errMsg: '全陪电话格式不正确'
                    }]
                }
            ];

            if ($checkdCreateTripPlanObj.find('.T-execTime').prop('checked')) {
                settings.push({ //全陪电话
                    $ele: $checkdCreateTripPlanObj.find('input[name="executeTime"]'),
                    rules: [{
                        type: 'null',
                        errMsg: '定时发送时间不能为空'
                    }]
                })
            }
            var validatorCreateTripPlan = $checkdCreateTripPlanObj.formValidate(settings);
            return validatorCreateTripPlan;
        }
    }
    return rule;
});
