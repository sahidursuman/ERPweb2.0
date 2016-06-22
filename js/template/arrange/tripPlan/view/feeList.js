/*TMODJS:{"debug":true,"version":56,"md5":"689b7e07fd01e8d63aea240dbe835507"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/feeList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), isGuest = $data.isGuest, $string = $utils.$string, isTrans = $data.isTrans, $out = "";
            return $line = 1, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><!-- <input type="text" class="col-xs-12" name="describeInfo" value="', 
                $line = 3, $out += $escape(rs.describeInfo), $out += '" ', $line = 3, 1 == isGuest && ($out += "readonly", 
                $line = 3), $out += '> --> <select class="col-xs-12 T-calculate" name="type" ', 
                $line = 4, 1 == isGuest && ($out += "disabled", $line = 4), $out += "> ", $line = 5, 
                $out += $string($helpers.getFeeItemType(rs.type, isTrans)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="', 
                $line = 8, $out += $escape(rs.count), $out += '" ', $line = 8, 1 == isGuest && ($out += "readonly", 
                $line = 8), $out += '></td> <td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="', 
                $line = 9, $out += $escape(rs.price), $out += '" ', $line = 9, 1 == isGuest && ($out += "readonly", 
                $line = 9), $out += '></td> <td><input type="text" class="col-xs-12 T-calculate T-days" name="days" value="', 
                $line = 10, $out += $escape(rs.days || 1), $out += '" ', $line = 10, 1 == isGuest && ($out += "readonly", 
                $line = 10), $out += '></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 11, rs.count && rs.price && ($line = 11, $out += $escape(rs.count * rs.price * (rs.days || 1)), 
                $line = 11), $out += '"></td> <td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="', 
                $line = 12, $out += $escape(rs.remark), $out += '" ', $line = 12, 1 == isGuest && ($out += "readonly", 
                $line = 12), $out += '></td> <td><a class="cursor T-action T-delete" title="删除">', 
                $line = 13, $out += $escape(isTrans), $out += "删除</a></td> </tr> ", $line = 15;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupFeeList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><!-- <input type="text" class="col-xs-12" name="describeInfo" value="{{rs.describeInfo}}" {{if isGuest == 1}}readonly{{/if}}> -->\r\n	<select class="col-xs-12 T-calculate" name="type" {{if isGuest == 1}}disabled{{/if}}>\r\n		{{#rs.type | getFeeItemType:isTrans}}\r\n	</select>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12 T-calculate F-float F-count T-count" name="count" value="{{rs.count}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-price F-float F-money" name="price" value="{{rs.price}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-days" name="days" value="{{rs.days || 1}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{if rs.count && rs.price}}{{rs.count * rs.price * (rs.days || 1)}}{{/if}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="feeRemark" maxlength="100" value="{{rs.remark}}" {{if isGuest == 1}}readonly{{/if}}></td>\r\n	<td><a class="cursor T-action T-delete" title="删除">{{isTrans}}删除</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});