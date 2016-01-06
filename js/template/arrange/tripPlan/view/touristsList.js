/*TMODJS:{"debug":true,"version":9,"md5":"19e6b04aadf31d347bae620941df43c3"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/touristsList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupMemberList = $data.touristGroupMemberList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $string = $utils.$string, $out = "";
            return $line = 1, $each(touristGroupMemberList, function(rs, index) {
                $out += ' <tr data-index="', $line = 2, $out += $escape(index + 1), $out += '"> <!-- <td>', 
                $line = 3, $out += $escape(index + 1), $out += '</td> --> <td><input type="text" class="col-xs-12" value="', 
                $line = 4, $out += $escape(rs.name), $out += '"></td> <td><input type="text" class="col-xs-12" value="', 
                $line = 5, $out += $escape(rs.mobileNumber), $out += '"></td> <td> <select class="col-xs-12"> ', 
                $line = 8, $out += $string($helpers.getCardOption(rs.idCardType)), $out += ' </select> </td> <td><input type="text" class="col-xs-12" value="', 
                $line = 11, $out += $escape(rs.idCardNumber), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" class="ace" ', 
                $line = 14, 1 == rs.isContactUser && ($out += "checked", $line = 14), $out += '> <span class="lbl"></span> </label> </td> <td> <a class="cursor T-action T-delete" title="删除">删除</a> </td> </tr> ', 
                $line = 22;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupMemberList as rs index}}\r\n<tr data-index="{{index + 1}}">\r\n	<!-- <td>{{index + 1}}</td> -->\r\n	<td><input type="text" class="col-xs-12" value="{{rs.name}}"></td>\r\n	<td><input type="text" class="col-xs-12" value="{{rs.mobileNumber}}"></td>\r\n	<td>\r\n		<select class="col-xs-12">\r\n			{{#rs.idCardType | getCardOption}}\r\n		</select>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12" value="{{rs.idCardNumber}}"></td>\r\n	<td>\r\n		<label class="control-label">\r\n			<input type="checkbox" class="ace" {{if rs.isContactUser == 1}}checked{{/if}}>\r\n			<span class="lbl"></span>\r\n		</label>\r\n	</td>\r\n	<td>\r\n        <a class="cursor T-action T-delete" title="删除">删除</a>\r\n	</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});