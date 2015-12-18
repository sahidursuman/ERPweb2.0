/*TMODJS:{"debug":true,"version":90,"md5":"9e2c1879187a0492c55139dbe7b224a6"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, insurance = $data.insurance, $out = "";
            return $out += ' <form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">公司名称：</td> <td class="styleOne-self">', 
            $line = 6, $out += $escape(insurance.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self">', 
            $line = 8, 0 == insurance.status ? ($out += " 已停用 ", $line = 10) : ($out += " 已启用 ", 
            $line = 12), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 17, $out += $escape(insurance.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(insurance.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 23, $out += $escape(insurance.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(insurance.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself style-myselfOne">所在地区：</td> <td class="styleOne-self" colspan="3"> ', 
            $line = 30, null != insurance.province && ($out += " ", $line = 31, $out += $escape(insurance.province.name), 
            $out += " ", $line = 32), $out += " ", $line = 33, null != insurance.city && ($out += " -", 
            $line = 34, $out += $escape(insurance.city.name), $out += " ", $line = 35), $out += " ", 
            $line = 36, null != insurance.district && ($out += " -", $line = 37, $out += $escape(insurance.district.name), 
            $out += " ", $line = 38), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 42, $out += $escape(insurance.street), $out += '</td> </tr> <tr> <td class="style-myself">公司简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 46, $out += $escape(insurance.remark), $out += "</td> </tr> </table> </form> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n		<form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<table class="whereQ" style="width: 96%">\r\n				<tr>\r\n					<td class="style-myself">公司名称：</td>\r\n					<td class="styleOne-self">{{insurance.name}}</td>\r\n					<td class="style-myself">是否启用：</td>\r\n					<td class="styleOne-self">{{if insurance.status == 0}}\r\n						已停用\r\n						{{else}}\r\n						已启用\r\n						{{/if}}</td>\r\n				</tr>\r\n			\r\n				<tr>\r\n					<td class="style-myself">联系人：</td>\r\n					<td class="styleOne-self">{{insurance.managerName}}</td>\r\n					<td class="style-myself">联系电话：</td>\r\n					<td class="styleOne-self">{{insurance.mobileNumber}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself">座机号码：</td>\r\n					<td class="styleOne-self">{{insurance.telNumber}}</td>\r\n					<td class="style-myself">传真号码：</td>\r\n					<td class="styleOne-self">{{insurance.faxNumber}}</td>\r\n				</tr>\r\n\r\n				<tr>\r\n					<td class="style-myself style-myselfOne">所在地区：</td>\r\n					<td class="styleOne-self" colspan="3">	{{if insurance.province != null}}\r\n						{{insurance.province.name}}\r\n						{{/if}}\r\n						{{if insurance.city != null}}\r\n						-{{insurance.city.name}}\r\n						{{/if}}\r\n						{{if insurance.district != null}}\r\n						-{{insurance.district.name}}\r\n						{{/if}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself">详细地址：</td>\r\n					<td class="styleOne-self" colspan="3">{{insurance.street}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself">公司简介：</td> \r\n					<td class="styleOne-self" colspan="3">{{insurance.remark}}</td>\r\n				</tr>\r\n			</table>\r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});