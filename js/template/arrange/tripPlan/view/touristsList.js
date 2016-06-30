/*TMODJS:{"debug":true,"version":13,"md5":"f97e823c17a9d9a549d60404a2c949b0"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/touristsList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupMemberList = $data.touristGroupMemberList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $string = $utils.$string, $out = "";
            return $line = 1, $each(touristGroupMemberList, function(rs, index) {
                $out += ' <tr data-index="', $line = 2, $out += $escape(index + 1), $out += '" data-id="', 
                $line = 2, $out += $escape(rs.id), $out += '"> <td>', $line = 3, $out += $escape(index + 1), 
                $out += '</td> <td><input type="text" class="col-xs-12" name="name" value="', $line = 4, 
                $out += $escape(rs.name), $out += '"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" value="', 
                $line = 5, $out += $escape(rs.mobileNumber), $out += '"></td> <td> <select class="col-xs-12" name="idCardType"> ', 
                $line = 8, $out += $string($helpers.getCardOption(rs.idCardType)), $out += ' </select> </td> <td><input type="text" class="col-xs-12" name="idCardNumber" value="', 
                $line = 11, $out += $escape(rs.idCardNumber), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" name="isContactUser" class="ace" ', 
                $line = 14, 1 == rs.isContactUser && ($out += "checked", $line = 14), $out += '> <span class="lbl"></span> </label> </td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 18, $out += $escape(rs.remark), $out += '"></td> <td> <a class="cursor T-action T-delete" title="删除">删除</a> </td> </tr> ', 
                $line = 23;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupMemberList as rs index}}\r\n<tr data-index="{{index + 1}}" data-id="{{rs.id}}">\r\n	<td>{{index + 1}}</td>\r\n	<td><input type="text" class="col-xs-12" name="name" value="{{rs.name}}"></td>\r\n	<td><input type="text" class="col-xs-12" name="mobileNumber" value="{{rs.mobileNumber}}"></td>\r\n	<td>\r\n		<select class="col-xs-12" name="idCardType">\r\n			{{#rs.idCardType | getCardOption}}\r\n		</select>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12" name="idCardNumber" value="{{rs.idCardNumber}}"></td>\r\n	<td>\r\n		<label class="control-label">\r\n			<input type="checkbox" name="isContactUser" class="ace" {{if rs.isContactUser == 1}}checked{{/if}}>\r\n			<span class="lbl"></span>\r\n		</label>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n	<td>\r\n        <a class="cursor T-action T-delete" title="删除">删除</a>\r\n	</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});