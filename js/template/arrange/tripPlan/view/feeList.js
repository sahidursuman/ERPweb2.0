/*TMODJS:{"debug":true,"version":4,"md5":"8a6beb0da517e27d5cfd6dd5ec80f822"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/feeList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(touristGroupFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><input type="text" class="col-xs-12" value="', 
                $line = 3, $out += $escape(rs.describeInfo), $out += '"></td> <td><input type="text" class="col-xs-12" value="', 
                $line = 4, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" value="', 
                $line = 5, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12" readonly value="', 
                $line = 6, $out += $escape(rs.count * rs.price), $out += '"></td> <td><input type="text" class="col-xs-12" value="', 
                $line = 7, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete" title="删除">删除</a></td> </tr> ', 
                $line = 10;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupFeeList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><input type="text" class="col-xs-12" value="{{rs.describeInfo}}"></td>\r\n	<td><input type="text" class="col-xs-12" value="{{rs.count}}"></td>\r\n	<td><input type="text" class="col-xs-12" value="{{rs.price}}"></td>\r\n	<td><input type="text" class="col-xs-12" readonly value="{{rs.count * rs.price}}"></td>\r\n	<td><input type="text" class="col-xs-12" value="{{rs.remark}}"></td>\r\n	<td><a class="cursor T-action T-delete" title="删除">删除</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});