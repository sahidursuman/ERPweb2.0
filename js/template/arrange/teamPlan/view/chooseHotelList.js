/*TMODJS:{"debug":true,"version":1,"md5":"c20ae1c1dc251e3cacf44a9d91fc5409"}*/
define(function(require) {
    return require("/js/template/template")("arrange/teamPlan/view/chooseHotelList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelList = $data.hotelList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(hotelList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"', $line = 2, 
                rs.ischeck && ($out += ' class="success"', $line = 2), $out += '> <td name="hotelName">', 
                $line = 3, $out += $escape(rs.name), $out += '</td> <td> <input type="checkbox"', 
                $line = 5, rs.ischeck && ($out += " checked", $line = 5), $out += ' name="isSelectHotel" class="ace T-select T-cheked"> <label class="lbl"></label> </td> </tr> ', 
                $line = 9;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each hotelList as rs}}\r\n<tr data-id="{{rs.id}}"{{if !!rs.ischeck}} class="success"{{/if}}>\r\n    <td name="hotelName">{{rs.name}}</td>\r\n    <td>\r\n        <input type="checkbox"{{if !!rs.ischeck}} checked{{/if}} name="isSelectHotel" class="ace T-select T-cheked">\r\n        <label class="lbl"></label>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});