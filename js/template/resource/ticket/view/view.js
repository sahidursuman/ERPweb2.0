/*TMODJS:{"debug":true,"version":87,"md5":"50cdaf924d7f647c44d520fdb0f4da93"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, ticket = $data.ticket, $out = "";
            return $out += ' <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">票务公司</td> <td class="styleOne-self">', 
            $line = 7, $out += $escape(ticket.name), $out += '</td> <td class="style-myself">是否启用</td> <td class="styleOne-self">', 
            $line = 9, 0 == ticket.status ? ($out += " 已停用 ", $line = 11) : ($out += " 已启用 ", 
            $line = 13), $out += '</td> </tr> <tr> <td class="style-myself">联系人</td> <td class="styleOne-self">', 
            $line = 17, $out += $escape(ticket.managerName), $out += '</td> <td class="style-myself">联系电话</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(ticket.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码</td> <td class="styleOne-self">', 
            $line = 23, $out += $escape(ticket.telNumber), $out += '</td> <td class="style-myself">传真号码</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(ticket.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself style-myselfOne">所在地区</td> <td class="styleOne-self" colspan="3">', 
            $line = 30, null != ticket.province && ($out += " ", $line = 31, $out += $escape(ticket.province.name), 
            $out += " ", $line = 32), $out += " ", $line = 33, null != ticket.city && ($out += " -", 
            $line = 34, $out += $escape(ticket.city.name), $out += " ", $line = 35), $out += " ", 
            $line = 36, null != ticket.district && ($out += " -", $line = 37, $out += $escape(ticket.district.name), 
            $out += " ", $line = 38), $out += '</td> </tr> <tr> <td class="style-myself">详细地址</td> <td class="styleOne-self" colspan="3">', 
            $line = 42, $out += $escape(ticket.street), $out += '</td> </tr> <tr> <td class="style-myself">公司简介</td> <td class="styleOne-self" colspan="3">', 
            $line = 46, $out += $escape(ticket.remark), $out += "</td> </tr> </table> </form> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n	<form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n\r\n			<tr>\r\n				<td class="style-myself">票务公司</td>\r\n				<td class="styleOne-self">{{ticket.name}}</td>\r\n				<td class="style-myself">是否启用</td>\r\n				<td class="styleOne-self">{{if ticket.status == 0}}\r\n					已停用\r\n					{{else}}\r\n					已启用\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系人</td>\r\n				<td class="styleOne-self">{{ticket.managerName}}</td>\r\n				<td class="style-myself">联系电话</td>\r\n				<td class="styleOne-self">{{ticket.mobileNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">座机号码</td>\r\n				<td class="styleOne-self">{{ticket.telNumber}}</td>\r\n				<td class="style-myself">传真号码</td>\r\n				<td class="styleOne-self">{{ticket.faxNumber}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself style-myselfOne">所在地区</td>\r\n				<td class="styleOne-self" colspan="3">{{if ticket.province != null}}\r\n					{{ticket.province.name}}\r\n					{{/if}}\r\n					{{if ticket.city != null}}\r\n					-{{ticket.city.name}}\r\n					{{/if}}\r\n					{{if ticket.district != null}}\r\n					-{{ticket.district.name}}\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">详细地址</td>\r\n				<td class="styleOne-self" colspan="3">{{ticket.street}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">公司简介</td>\r\n				<td class="styleOne-self" colspan="3">{{ticket.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});