/*TMODJS:{"debug":true,"version":63,"md5":"cb2178547c612eace667bcf00dbb1886"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/visitorGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupMemberDetail = $data.touristGroupMemberDetail, $escape = ($data.touristGroup, 
            $data.index, $utils.$escape), $out = "";
            return $out += ' <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo margin-top15" style="width:97%"> <tr> <td class="style-myself">序号</td> <td class="style-myself">姓名</td> <td class="style-myself">手机号码</td> <td class="style-myself">证件类型</td> <td class="style-myself">证件号</td> <td class="style-myself">是否为联系人</td> </tr> ', 
            $line = 12, $each(touristGroupMemberDetail.touristGroupMemberList, function(touristGroup, index) {
                $out += ' <tr data-entity-id="touristGroup.id"> <td>', $line = 14, $out += $escape(index + 1), 
                $out += '</td> <td class="">', $line = 15, $out += $escape(touristGroup.name), $out += "</td> <td> ", 
                $line = 17, $out += $escape(touristGroup.mobileNumber), $out += " </td> <td> ", 
                $line = 20, 0 == touristGroup.idCardType ? ($out += "身份证 ", $line = 21) : 1 == touristGroup.idCardType ? ($out += "护照 ", 
                $line = 22) : ($out += "其它 ", $line = 23), $out += " </td> <td> ", $line = 26, $out += $escape(touristGroup.idCardNumber), 
                $out += " </td> <td> ", $line = 29, 0 == touristGroup.isContactUser ? ($out += " 否 ", 
                $line = 31) : ($out += " 是 ", $line = 33), $out += " </td> </tr> ", $line = 36;
            }), $out += " </table> </form>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--<div class="col-xs-12">-->\r\n<form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereTwo margin-top15" style="width:97%">\r\n		<tr>\r\n			<td class="style-myself">序号</td>\r\n			<td class="style-myself">姓名</td>\r\n			<td class="style-myself">手机号码</td>\r\n			<td class="style-myself">证件类型</td>\r\n			<td class="style-myself">证件号</td>\r\n			<td class="style-myself">是否为联系人</td>\r\n		</tr>\r\n		{{each touristGroupMemberDetail.touristGroupMemberList as touristGroup index}}\r\n		<tr  data-entity-id="touristGroup.id">\r\n			<td>{{index+1}}</td>\r\n			<td class="">{{touristGroup.name}}</td>\r\n			<td>\r\n				{{touristGroup.mobileNumber}}\r\n			</td>\r\n			<td>\r\n				{{if touristGroup.idCardType == 0}}身份证\r\n				{{else if touristGroup.idCardType == 1}}护照\r\n				{{else}}其它\r\n				{{/if}}\r\n			</td>\r\n			<td>\r\n				{{touristGroup.idCardNumber}}\r\n			</td>\r\n			<td>\r\n				{{if touristGroup.isContactUser==0}}\r\n				否\r\n				{{else}}\r\n				是\r\n				{{/if}}\r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});