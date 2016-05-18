/*TMODJS:{"debug":true,"version":19,"md5":"04a20115b3078633b54254d7dc08942c"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/choose/chooseClientList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, travelAgencyList = $data.travelAgencyList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.cl, $data.index, "");
            return $line = 1, $each(travelAgencyList, function(rs) {
                $out += ' <tr class="cursor" data-id="', $line = 2, $out += $escape(rs.travelAgencyId), 
                $out += '" data-contact-id="', $line = 2, rs.contactList.length > 0 && ($line = 2, 
                $out += $escape(rs.contactList[0].fromPartnerAgencyContactId), $line = 2), $out += '" data-agency-name="', 
                $line = 2, $out += $escape(rs.travelAgencyName), $out += '"> <td name="travelAgencyName" rowspan="', 
                $line = 3, $out += $escape(rs.contactList.length), $out += '">', $line = 3, $out += $escape(rs.travelAgencyName), 
                $out += '</td> <td rowspan="', $line = 4, $out += $escape(rs.contactList.length), 
                $out += '">', $line = 4, $out += $escape($helpers.getTravelAgencyType(rs.type)), 
                $out += '</td> <td rowspan="', $line = 5, $out += $escape(rs.contactList.length), 
                $out += '">', $line = 5, $out += $escape($helpers.getTravelAgencyLevel(rs.level)), 
                $out += "</td> ", $line = 6, rs.contactList.length > 0 ? ($out += ' <td name="travelAgencyContactName">', 
                $line = 7, $out += $escape(rs.contactList[0].contactRealname), $out += "</td> <td>", 
                $line = 8, $out += $escape(rs.contactList[0].contactMobileNumber), $out += '</td> <td> <input type="radio" name="chooseClient" class="ace"> <label class="lbl"></label> </td> ', 
                $line = 13) : ($out += ' <td name="travelAgencyContactName"></td> <td></td> <td> <input type="radio" name="chooseClient" class="ace"> <label class="lbl"></label> </td> ', 
                $line = 20), $out += " </tr> ", $line = 22, rs.contactList.length > 0 && ($out += " ", 
                $line = 23, $each(rs.contactList, function(cl, index) {
                    $out += " ", $line = 24, index > 0 && ($out += ' <tr class="cursor" data-id="', 
                    $line = 25, $out += $escape(rs.travelAgencyId), $out += '" data-contact-id="', $line = 25, 
                    $out += $escape(cl.fromPartnerAgencyContactId), $out += '" data-agency-name="', 
                    $line = 25, $out += $escape(rs.travelAgencyName), $out += '"> <td name="travelAgencyContactName">', 
                    $line = 26, $out += $escape(cl.contactRealname), $out += "</td> <td>", $line = 27, 
                    $out += $escape(cl.contactMobileNumber), $out += '</td> <td> <input type="radio" name="chooseClient" class="ace"> <label class="lbl"></label> </td> </tr> ', 
                    $line = 33), $out += " ", $line = 34;
                }), $out += " ", $line = 35), $out += " ", $line = 36;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each travelAgencyList as rs}}\r\n<tr class="cursor" data-id="{{rs.travelAgencyId}}" data-contact-id="{{if rs.contactList.length > 0}}{{rs.contactList[0].fromPartnerAgencyContactId}}{{/if}}" data-agency-name="{{rs.travelAgencyName}}">\r\n	<td name="travelAgencyName" rowspan="{{rs.contactList.length}}">{{rs.travelAgencyName}}</td>\r\n	<td rowspan="{{rs.contactList.length}}">{{rs.type | getTravelAgencyType}}</td>\r\n	<td rowspan="{{rs.contactList.length}}">{{rs.level | getTravelAgencyLevel}}</td>\r\n    {{if rs.contactList.length > 0}}\r\n	<td name="travelAgencyContactName">{{rs.contactList[0].contactRealname}}</td>\r\n	<td>{{rs.contactList[0].contactMobileNumber}}</td>\r\n	<td>\r\n		<input type="radio" name="chooseClient" class="ace">\r\n		<label class="lbl"></label>\r\n	</td>\r\n    {{else}}\r\n    <td name="travelAgencyContactName"></td>\r\n    <td></td>\r\n    <td>\r\n        <input type="radio" name="chooseClient" class="ace">\r\n        <label class="lbl"></label>\r\n    </td>\r\n    {{/if}}\r\n</tr>\r\n    {{if rs.contactList.length > 0}}\r\n        {{each rs.contactList as cl index}}\r\n        {{if index > 0}}\r\n        <tr class="cursor" data-id="{{rs.travelAgencyId}}" data-contact-id="{{cl.fromPartnerAgencyContactId}}" data-agency-name="{{rs.travelAgencyName}}">\r\n            <td name="travelAgencyContactName">{{cl.contactRealname}}</td>\r\n            <td>{{cl.contactMobileNumber}}</td>\r\n            <td>\r\n                <input type="radio" name="chooseClient" class="ace">\r\n                <label class="lbl"></label>\r\n            </td>\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});