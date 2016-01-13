/*TMODJS:{"debug":true,"version":12,"md5":"4077513455661ba745924b0a3a970f5d"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/feeList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), isGuest = $data.isGuest, $out = "";
            return $line = 1, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12" name="describeInfo" value="', 
                $line = 3, $out += $escape(rs.describeInfo), $out += '" ', $line = 3, 1 == isGuest && ($out += "readonly", 
                $line = 3), $out += '></td> <td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="', 
                $line = 4, $out += $escape(rs.count), $out += '" ', $line = 4, 1 == isGuest && ($out += "readonly", 
                $line = 4), $out += '></td> <td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="', 
                $line = 5, $out += $escape(rs.price), $out += '" ', $line = 5, 1 == isGuest && ($out += "readonly", 
                $line = 5), $out += '></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 6, rs.count && rs.price && ($line = 6, $out += $escape(rs.count * rs.price), 
                $line = 6), $out += '"></td> <td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="', 
                $line = 7, $out += $escape(rs.remark), $out += '" ', $line = 7, 1 == isGuest && ($out += "readonly", 
                $line = 7), $out += '></td> <td><a class="cursor T-action T-delete" title="删除">删除</a></td> </tr> ', 
                $line = 10;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupFeeList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><input type="text" class="col-xs-12" name="describeInfo" value="{{rs.describeInfo}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="{{rs.count}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="{{rs.price}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{if rs.count && rs.price}}{{rs.count * rs.price}}{{/if}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="{{rs.remark}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><a class="cursor T-action T-delete" title="删除">删除</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});