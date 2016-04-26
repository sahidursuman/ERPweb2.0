/**
 * 单项操作验证 
 */
define(function(require, exports) {
    var rule = {
        //车安排校验
        busEditor : function($obj) {
            var settings = [
            {
                //开始日期
                $ele: $obj.find('[name="startTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '开始日期不能为空'
                }]
            },
            {
                //结束日期
                $ele: $obj.find('[name="endTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '结束日期不能为空'
                }]
            },
            {
                //车座数不能为空
                $ele: $obj.find('[name="needSeatCount"]'),
                rules : [{
                    type: 'null',
                    errMsg: '车座数不能为空'
                }]
            },
            {
                //所属车队不能为空
                $ele: $obj.find('[name="busCompany"]'),
                rules : [{
                    type: 'null',
                    errMsg: '所属车队不能为空'
                }]
            },
            {
                //车费
                $ele: $obj.find('[name="fee"]'),
                rules : [{
                    type: 'float',
                    errMsg: '车费必须为数字'
                }]
            },
            {
                //优惠
                $ele: $obj.find('[name="reduceMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '优惠必须为数字'
                }]
            },
            {
                //预付款
                $ele: $obj.find('[name="prePayMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '预付款必须为数字'
                }]
            }];
            return settings;
        },
        busCheck : function($container){
            this.$busContainer = $container;
            return $container.formValidate(this.busEditor($container));
        },
        busUpdate : function(validator) {
            if (!!validator)  {
                validator.update(this.busEditor(this.$busContainer));
            }

            return validator;
        },

        //房安排校验
        hotelEditor : function($obj){
            var settings = [{
                //入住日期
                $ele: $obj.find('[name="enterTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '入住日期不能为空'
                }]
            },
            {
                //离店日期
                $ele: $obj.find('[name="leaveTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '离店日期不能为空'
                }]
            },
            {
                //酒店
                $ele: $obj.find('[name="hotelName"]'),
                rules : [{
                    type: 'null',
                    errMsg: '酒店不能为空'
                }]
            },
            {
                //房型
                $ele: $obj.find('[name="hotelRoomType"]'),
                rules : [{
                    type: 'null',
                    errMsg: '房型不能为空'
                }]
            },
            {
                //单价
                $ele: $obj.find('[name="costPrice"]'),
                rules : [{
                    type: 'float',
                    errMsg: '单价必须为数字'
                }]
            },
            {
                //数量
                $ele: $obj.find('[name="roomCount"]'),
                rules : [{
                    type: 'NoNumber',
                    errMsg: '数量必须为正整数'
                }]
            },
            {
                //优惠
                $ele: $obj.find('[name="reduceMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '优惠必须为数字'
                }]
            },
            {
                //预付款
                $ele: $obj.find('[name="prePayMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '预付款必须为数字'
                }]
            }];
            return settings;
        },
        hotelCheck : function($container){
            this.$hotelContainer = $container;
            return $container.formValidate(this.hotelEditor($container));
        },
        hotelUpdate : function(validator) {
            if (!!validator)  {
                validator.update(this.hotelEditor(this.$hotelContainer));
            }

            return validator;
        },

        //景区安排校验
        scenicEditor : function($obj){
            var settings = [{
                //日期
                $ele: $obj.find('[name="startTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '日期不能为空'
                }]
            },
            {
                //景区
                $ele: $obj.find('[name="scenicName"]'),
                rules : [{
                    type: 'null',
                    errMsg: '景区不能为空'
                }]
            },
            {
                //收费项目
                $ele: $obj.find('[name="scenicItemName"]'),
                rules : [{
                    type: 'null',
                    errMsg: '收费项目不能为空'
                }]
            },
            {
                //时长
                $ele: $obj.find('[name="tourDuration"]'),
                rules : [{
                    type: 'float',
                    errMsg: '时长必须为数字'
                }]
            },
            {
                //单价
                $ele: $obj.find('[name="costPrice"]'),
                rules : [{
                    type: 'float',
                    errMsg: '单价必须为数字'
                }]
            },
            {
                //数量
                $ele: $obj.find('[name="roomCount"]'),
                rules : [{
                    type: 'NoNumber',
                    errMsg: '数量必须为正整数'
                }]
            },
            {
                //优惠
                $ele: $obj.find('[name="reduceMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '优惠必须为数字'
                }]
            },
            {
                //预付款
                $ele: $obj.find('[name="prePayMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '预付款必须为数字'
                }]
            }];
            return settings;
        },
        scenicCheck : function($container){
            this.$scenicContainer = $container;
            return $container.formValidate(this.scenicEditor($container));
        },
        scenicUpdate : function(validator) {
            if (!!validator)  {
                validator.update(this.scenicEditor(this.$scenicContainer));
            }

            return validator;
        },

        //景区安排校验
        ticketEditor : function($obj){
            var settings = [{
                //票务公司
                $ele: $obj.find('[name="ticketName"]'),
                rules : [{
                    type: 'null',
                    errMsg: '票务公司不能为空'
                }]
            },
            {
                //景区
                $ele: $obj.find('[name="scenicName"]'),
                rules : [{
                    type: 'null',
                    errMsg: '景区不能为空'
                }]
            },
            {
                //出发城市
                $ele: $obj.find('[name="startCity"]'),
                rules : [{
                    type: 'null',
                    errMsg: '出发城市不能为空'
                }]
            },
            {
                //到达城市
                $ele: $obj.find('[name="arriveCity"]'),
                rules : [{
                    type: 'null',
                    errMsg: '到达城市不能为空'
                }]
            },
            {
                //班次
                $ele: $obj.find('[name="shift"]'),
                rules : [{
                    type: 'null',
                    errMsg: '班次不能为空'
                }]
            },
            {
                //时间
                $ele: $obj.find('[name="startTime"]'),
                rules : [{
                    type: 'null',
                    errMsg: '时间不能为空'
                }]
            },
            {
                //座位级别
                $ele: $obj.find('[name="seatLevel"]'),
                rules : [{
                    type: 'null',
                    errMsg: '座位级别不能为空'
                }]
            },
            {
                //单价
                $ele: $obj.find('[name="costPrice"]'),
                rules : [{
                    type: 'float',
                    errMsg: '单价必须为数字'
                }]
            },
            {
                //数量
                $ele: $obj.find('[name="roomCount"]'),
                rules : [{
                    type: 'NoNumber',
                    errMsg: '数量必须为正整数'
                }]
            },
            {
                //优惠
                $ele: $obj.find('[name="reduceMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '优惠必须为数字'
                }]
            },
            {
                //预付款
                $ele: $obj.find('[name="prePayMoney"]'),
                rules : [{
                    type: 'float',
                    errMsg: '预付款必须为数字'
                }]
            }];
            return settings;
        },
        ticketCheck : function($container){
            this.$scenicContainer = $container;
            return $container.formValidate(this.ticketEditor($container));
        },
        ticketUpdate : function(validator) {
            if (!!validator)  {
                validator.update(this.ticketEditor(this.$scenicContainer));
            }

            return validator;
        }
    };
    return rule;
});