/*TMODJS:{"debug":true,"version":20,"md5":"6906b036c26235d166d2a6bfcb05fa6b"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/viewTrip/viewTrip", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, order = $data.order, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="T-updateOrder container-fulid col-xs-12"> <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid"> <label class="mar-r20">订单状态：<span class="orange">', 
            $line = 3, $out += $escape($helpers.getOrderStatusText(order.orderStatus)), $out += '</span></label> <label class="mar-r20">商家申请价：<span class="', 
            $line = 4, "1" == order.orderStatus || "3" == order.orderStatus ? ($out += "textd-line color-999", 
            $line = 4) : ($out += "orange", $line = 4), $out += '">￥', $line = 4, $out += $escape(order.needPayMoney), 
            $out += "</span></label> ", $line = 5, ("1" == order.orderStatus || "3" == order.orderStatus) && ($out += ' <label class="mar-r20">回复价：<span class="orange">￥', 
            $line = 6, $out += $escape(order.comfirmNeedPayMoney), $out += "</span></label> ", 
            $line = 7), $out += " <label>总现收：￥", $line = 8, $out += $escape(order.driverIncomeMoney), 
            $out += '</label> <div class="inline pull-right"> <label class="mar-r20">下单时间：<span>', 
            $line = 10, $out += $escape(order.createTime), $out += '</span></label> <label class="mar-r20">订单号：<span>', 
            $line = 11, $out += $escape(order.orderNumber), $out += '</span></label> <!-- <label class="mar-r20">商家：<span>', 
            $line = 12, $out += $escape(order.customerName), $out += '</span></label> --> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单信息</h5> <div> <label class="mar-r30">', 
            $line = 18, $out += $escape(order.tripType.name), $out += '</label> <label class="mar-r30">用车日期：', 
            $line = 19, $out += $escape(order.tripTime), $out += " 至 ", $line = 19, $out += $escape(order.tripEndTime), 
            $out += '</label> <label class="mar-r30">导游：', $line = 20, $out += $escape(order.guideName), 
            $out += '</label> <label class="mar-r30">导游电话：', $line = 21, $out += $escape(order.guideMobileNumber), 
            $out += '</label> <label class="mar-r30">集合地点：', $line = 22, $out += $escape(order.togetherPosition), 
            $out += '</label> <label class="mar-r30">集合时间：', $line = 23, $out += $escape(order.togetherHour), 
            $out += ":", $line = 23, $out += $escape(order.togetherMinute), $out += '</label> <label class="mar-r30"> 游客人数：', 
            $line = 25, $out += $escape(order.adultCount), $out += "大", $line = 25, $out += $escape(order.childCount), 
            $out += '小 <input type="hidden" name="adultCount" value="', $line = 26, $out += $escape(order.adultCount), 
            $out += '"> <input type="hidden" name="childCount" value="', $line = 27, $out += $escape(order.childCount), 
            $out += '"> </label> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单类型</h5> <label>', 
            $line = 34, "0" == order.priceType ? ($out += "包车", $line = 34) : ($out += "拼车", 
            $line = 34), $out += "</label> <label>", $line = 35, $out += $escape(order.price), 
            $out += "元", $line = 35, "1" == order.priceType && ($out += "/座", $line = 35), $out += '</label> <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" ', 
            $line = 36, "1" == order.priceType && ($out += "checked", $line = 36), $out += '> <input type="hidden" name="carpoolingPrice" value="', 
            $line = 37, $out += $escape(order.price), $out += '"> <input type="hidden" name="charterPrice" value="', 
            $line = 38, $out += $escape(order.price), $out += '"> <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" ', 
            $line = 39, 1 == order.isRoundTrip && ($out += "checked", $line = 39), $out += '> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">备注</h5> <label>', 
            $line = 43, $out += $escape(order.orderRemark), $out += '</label> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">其他费用</h5> ', 
            $line = 47, $each(order.otherFeeList, function(rs) {
                $out += ' <div> <label class="lineblock width150">金额：', $line = 49, $out += $escape(rs.fee), 
                $out += '<input class="T-clacFee" name="fee" type="hidden" value="', $line = 49, 
                $out += $escape(rs.fee), $out += '"></label> <label> 备注：', $line = 50, $out += $escape(rs.remark), 
                $out += "</label> </div> ", $line = 52;
            }), $out += ' </div> <div class="T-touristList"> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-updateOrder container-fulid col-xs-12">\r\n    <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid">\r\n        <label class="mar-r20">订单状态：<span class="orange">{{order.orderStatus | getOrderStatusText}}</span></label>\r\n        <label class="mar-r20">商家申请价：<span class="{{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}textd-line color-999{{else}}orange{{/if}}">￥{{order.needPayMoney}}</span></label>\r\n        {{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}\r\n        <label class="mar-r20">回复价：<span class="orange">￥{{order.comfirmNeedPayMoney}}</span></label>\r\n        {{/if}}\r\n        <label>总现收：￥{{order.driverIncomeMoney}}</label>\r\n        <div class="inline pull-right">\r\n            <label class="mar-r20">下单时间：<span>{{order.createTime}}</span></label>\r\n            <label class="mar-r20">订单号：<span>{{order.orderNumber}}</span></label>\r\n            <!-- <label class="mar-r20">商家：<span>{{order.customerName}}</span></label> -->\r\n        </div>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单信息</h5>\r\n        <div>\r\n            <label class="mar-r30">{{order.tripType.name}}</label>\r\n            <label class="mar-r30">用车日期：{{order.tripTime}} 至 {{order.tripEndTime}}</label>\r\n            <label class="mar-r30">导游：{{order.guideName}}</label>\r\n            <label class="mar-r30">导游电话：{{order.guideMobileNumber}}</label>\r\n            <label class="mar-r30">集合地点：{{order.togetherPosition}}</label>\r\n            <label class="mar-r30">集合时间：{{order.togetherHour}}:{{order.togetherMinute}}</label>\r\n            <label class="mar-r30">\r\n                游客人数：{{order.adultCount}}大{{order.childCount}}小\r\n                <input type="hidden" name="adultCount" value="{{order.adultCount}}">\r\n                <input type="hidden" name="childCount" value="{{order.childCount}}">\r\n            </label>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单类型</h5>\r\n        <label>{{if order.priceType == \'0\'}}包车{{else}}拼车{{/if}}</label>\r\n        <label>{{order.price}}元{{if order.priceType == \'1\'}}/座{{/if}}</label>\r\n        <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" {{if order.priceType == \'1\'}}checked{{/if}}>\r\n        <input type="hidden" name="carpoolingPrice" value="{{order.price}}">\r\n        <input type="hidden" name="charterPrice" value="{{order.price}}">\r\n        <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" {{if order.isRoundTrip == 1}}checked{{/if}}>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">备注</h5>\r\n        <label>{{order.orderRemark}}</label>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">其他费用</h5>\r\n        {{each order.otherFeeList as rs index}}\r\n        <div>\r\n            <label class="lineblock width150">金额：{{rs.fee}}<input class="T-clacFee" name="fee" type="hidden" value="{{rs.fee}}"></label>\r\n            <label> 备注：{{rs.remark}}</label>\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    <div class="T-touristList">\r\n        <div class="col-xs-12">\r\n            <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n            <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});