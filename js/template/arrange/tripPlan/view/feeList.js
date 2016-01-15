/*TMODJS:{"debug":true,"version":22,"md5":"24470ca52f84c0dfb88179906a238fc1"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/feeList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), isGuest = $data.isGuest, $out = "";
            return $line = 1, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><!-- <input type="text" class="col-xs-12" name="describeInfo" value="', 
                $line = 3, $out += $escape(rs.describeInfo), $out += '" ', $line = 3, 1 == isGuest && ($out += "readonly", 
                $line = 3), $out += '> --> <select class="col-xs-12 T-calculate" name="type" ', 
                $line = 4, 1 == isGuest && ($out += "disabled", $line = 4), $out += '> <option value="1">大人结算价</option> <option value="2">小孩结算价</option> <option value="3">中转结算价</option> <option value="4">车辆费用</option> <option value="5">餐饮费用</option> <option value="6">保险费用</option> <option value="7">导服费</option> <option value="8">酒店费用</option> <option value="9">景区费用</option> <option value="10">自费费用</option> <option value="11">票务费用</option> <option value="12">其它费用</option> </select> </td> <td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="', 
                $line = 19, $out += $escape(rs.count), $out += '" ', $line = 19, 1 == isGuest && ($out += "readonly", 
                $line = 19), $out += '></td> <td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="', 
                $line = 20, $out += $escape(rs.price), $out += '" ', $line = 20, 1 == isGuest && ($out += "readonly", 
                $line = 20), $out += '></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 21, rs.count && rs.price && ($line = 21, $out += $escape(rs.count * rs.price), 
                $line = 21), $out += '"></td> <td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="', 
                $line = 22, $out += $escape(rs.remark), $out += '" ', $line = 22, 1 == isGuest && ($out += "readonly", 
                $line = 22), $out += '></td> <td><a class="cursor T-action T-delete" title="删除">删除</a></td> </tr> ', 
                $line = 25;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupFeeList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><!-- <input type="text" class="col-xs-12" name="describeInfo" value="{{rs.describeInfo}}" {{if isGuest == 1}}readonly{{/if}}> -->\r\n	<select class="col-xs-12 T-calculate" name="type" {{if isGuest == 1}}disabled{{/if}}>\r\n			<option value="1">大人结算价</option>\r\n			<option value="2">小孩结算价</option>\r\n			<option value="3">中转结算价</option>\r\n			<option value="4">车辆费用</option>\r\n			<option value="5">餐饮费用</option>\r\n			<option value="6">保险费用</option>\r\n			<option value="7">导服费</option>\r\n			<option value="8">酒店费用</option>\r\n			<option value="9">景区费用</option>\r\n			<option value="10">自费费用</option>\r\n			<option value="11">票务费用</option>\r\n			<option value="12">其它费用</option>\r\n		</select>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="{{rs.count}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="{{rs.price}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{if rs.count && rs.price}}{{rs.count * rs.price}}{{/if}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="{{rs.remark}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><a class="cursor T-action T-delete" title="删除">删除</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});