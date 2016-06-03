/*TMODJS:{"debug":true,"version":3,"md5":"bce6faadea438915d46802176bf8c711"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/tourists/listPartGroup", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, subOrderInfoList = $data.subOrderInfoList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(subOrderInfoList, function(rs) {
                $out += " <tr> <td>", $line = 3, $out += $escape(rs.lineProductName), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 5, $out += $escape(rs.endTime), 
                $out += "</td> <td>", $line = 6, $out += $escape($helpers.getPartGroupStatusText(rs.status)), 
                $out += "</td> </tr> ", $line = 8;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each subOrderInfoList as rs}}\r\n<tr>\r\n    <td>{{rs.lineProductName}}</td>\r\n    <td>{{rs.startTime}}</td>\r\n    <td>{{rs.endTime}}</td>\r\n    <td>{{rs.status | getPartGroupStatusText}}</td>\r\n</tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});