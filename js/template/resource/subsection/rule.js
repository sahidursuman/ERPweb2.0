/**
 * 中转分段  
 */
define(function(require, exports) {
    var rule = {
        //分段操作的基本信息的验证
        checkdSaveSubsection: function($checkdSaveSubsectionObj) {
            this.$container = $checkdSaveSubsectionObj;
            var settings = this.getSettings();

            return $checkdSaveSubsectionObj.formValidate(settings);
        },
        updateCheckdSaveSubsection: function(validator) {
            validator.update(this.getSettings());

            return validator;
        },
        getSettings: function() {
            var $container = this.$container,
                settings = [];

            $container.find('.T-subsectionOperationTbody').children('tr').each(function() {
                var $tr = $(this),
                    lineProductId = $tr.find("[name=lineProductId]").val();
                if (!!lineProductId) {
                    settings.push({ //新增分段操作出游日期
                        $ele: $tr.find('input[name="startTime"]'),
                        rules: [{
                            type: 'null',
                            errMsg: '分段出游日期不能为空'
                        }]
                    });
                }

            });

            return settings;
        }
    }
    return rule;
});
