/*TMODJS:{"debug":true,"version":9,"md5":"16b73d894dea8a127e97de35fad04214"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/chooseClientList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, travelAgencyList = $data.travelAgencyList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(travelAgencyList, function(rs) {
                $out += ' <tr class="cursor"> <td name="travelAgencyName">', $line = 3, $out += $escape(rs.travelAgencyName), 
                $out += "</td> <td>", $line = 4, $out += $escape($helpers.getTravelAgencyType(rs.type)), 
                $out += "</td> <td>", $line = 5, $out += $escape($helpers.getTravelAgencyLevel(rs.level)), 
                $out += "</td> <td>", $line = 6, $out += $escape(rs.contactRealname), $out += "</td> <td>", 
                $line = 7, $out += $escape(rs.contactMobileNumber), $out += '</td> <td> <input type="radio" name="chooseClient" class="ace"> <label class="lbl"></label> </td> </tr> ', 
                $line = 13;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each travelAgencyList as rs}}\r\n<tr class="cursor">\r\n	<td name="travelAgencyName">{{rs.travelAgencyName}}</td>\r\n	<td>{{rs.type | getTravelAgencyType}}</td>\r\n	<td>{{rs.level | getTravelAgencyLevel}}</td>\r\n	<td>{{rs.contactRealname}}</td>\r\n	<td>{{rs.contactMobileNumber}}</td>\r\n	<td>\r\n		<input type="radio" name="chooseClient" class="ace">\r\n		<label class="lbl"></label>\r\n	</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});