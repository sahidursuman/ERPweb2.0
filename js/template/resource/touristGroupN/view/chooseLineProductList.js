/*TMODJS:{"debug":true,"version":6,"md5":"bb583f66027cb4d0fd386943490a9260"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/chooseLineProductList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td name="lineProductName">', 
                $line = 3, $out += $escape(rs.name), $out += "</td> <td>", $line = 4, $out += $escape(rs.type), 
                $out += "</td> <td>", $line = 5, $out += $escape($helpers.getCustomerType(rs.customerType, !0)), 
                $out += '</td> <td name="days">', $line = 6, $out += $escape(rs.days), $out += '</td> <td> <input type="radio" name="chooseLineProduct" class="ace"> <label class="lbl"></label> </td> </tr> ', 
                $line = 12;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td name="lineProductName">{{rs.name}}</td>\r\n	<td>{{rs.type}}</td>\r\n	<td>{{rs.customerType | getCustomerType:true}}</td>\r\n	<td name="days">{{rs.days}}</td>\r\n	<td>\r\n		<input type="radio" name="chooseLineProduct" class="ace">\r\n		<label class="lbl"></label>\r\n	</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});