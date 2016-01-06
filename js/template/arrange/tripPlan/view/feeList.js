/*TMODJS:{"debug":true,"version":8,"md5":"2866713e486052707bedadc49148b8d1"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/feeList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12" name="describeInfo" value="', 
                $line = 3, $out += $escape(rs.describeInfo), $out += '"></td> <td><input type="text" class="col-xs-12 T-calculate T-count" name="count" value="', 
                $line = 4, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-calculate T-price" name="price" value="', 
                $line = 5, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12" name="money" readonly value="', 
                $line = 6, rs.count && rs.price && ($line = 6, $out += $escape(rs.count * rs.price), 
                $line = 6), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 7, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete" title="删除">删除</a></td> </tr> ', 
                $line = 10;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupFeeList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><input type="text" class="col-xs-12" name="describeInfo" value="{{rs.describeInfo}}"></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-count" name="count" value="{{rs.count}}"></td>\r\n	<td><input type="text" class="col-xs-12 T-calculate T-price" name="price" value="{{rs.price}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="money" readonly value="{{if rs.count && rs.price}}{{rs.count * rs.price}}{{/if}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n	<td><a class="cursor T-action T-delete" title="删除">删除</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});