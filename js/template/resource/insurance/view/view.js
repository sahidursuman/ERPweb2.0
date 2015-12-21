/*TMODJS:{"debug":true,"version":107,"md5":"3d92c3e4da269e3104baca8a1493fc41"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, insurance = $data.insurance, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">公司名称：</td> <td class="styleOne-self">', 
            $line = 5, $out += $escape(insurance.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self">', 
            $line = 7, 0 == insurance.status ? ($out += " 已停用 ", $line = 9) : ($out += " 已启用 ", 
            $line = 11), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 16, $out += $escape(insurance.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 18, $out += $escape(insurance.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 22, $out += $escape(insurance.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 24, $out += $escape(insurance.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself style-myselfOne">公司所在省市：</td> <td class="styleOne-self" colspan="3"> ', 
            $line = 29, null != insurance.province && ($out += " ", $line = 30, $out += $escape(insurance.province.name), 
            $out += " ", $line = 31), $out += " ", $line = 32, null != insurance.city && ($out += " -", 
            $line = 33, $out += $escape(insurance.city.name), $out += " ", $line = 34), $out += " ", 
            $line = 35, null != insurance.district && ($out += " -", $line = 36, $out += $escape(insurance.district.name), 
            $out += " ", $line = 37), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 41, $out += $escape(insurance.street), $out += '</td> </tr> <tr> <td class="style-myself">公司简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 45, $out += $escape(insurance.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo" style="width: 96%"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">保险列表</td> </tr> <tr> <td class="style-myself">险种</td> <td class="style-myself">单价</td> <td class="style-myself">适用天数</td> <td class="style-myself">适用人群</td> <td>备注</td> </tr> ', 
            $line = 61, $each(insurance.insuranceItemList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 62, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 63, $out += $escape(rs.name), $out += "</td> <td>", $line = 64, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 65, $out += $escape(rs.days), $out += "天</td> <td>", 
                $line = 66, $out += $escape(rs.type), $out += "</td> <td>", $line = 67, $out += $escape(rs.remark), 
                $out += "</td> </tr> ", $line = 69;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ" style="width: 96%">\r\n		<tr>\r\n			<td class="style-myself">公司名称：</td>\r\n			<td class="styleOne-self">{{insurance.name}}</td>\r\n			<td class="style-myself">是否启用：</td>\r\n			<td class="styleOne-self">{{if insurance.status == 0}}\r\n				已停用\r\n				{{else}}\r\n				已启用\r\n				{{/if}}</td>\r\n		</tr>\r\n	\r\n		<tr>\r\n			<td class="style-myself">联系人：</td>\r\n			<td class="styleOne-self">{{insurance.managerName}}</td>\r\n			<td class="style-myself">联系电话：</td>\r\n			<td class="styleOne-self">{{insurance.mobileNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">座机号码：</td>\r\n			<td class="styleOne-self">{{insurance.telNumber}}</td>\r\n			<td class="style-myself">传真号码：</td>\r\n			<td class="styleOne-self">{{insurance.faxNumber}}</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td class="style-myself style-myselfOne">公司所在省市：</td>\r\n			<td class="styleOne-self" colspan="3">	{{if insurance.province != null}}\r\n				{{insurance.province.name}}\r\n				{{/if}}\r\n				{{if insurance.city != null}}\r\n				-{{insurance.city.name}}\r\n				{{/if}}\r\n				{{if insurance.district != null}}\r\n				-{{insurance.district.name}}\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">详细地址：</td>\r\n			<td class="styleOne-self" colspan="3">{{insurance.street}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">公司简介：</td> \r\n			<td class="styleOne-self" colspan="3">{{insurance.remark}}</td>\r\n		</tr>\r\n	</table>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereTwo" style="width: 96%">\r\n		<tr>\r\n			<td colspan="8" class="HeadManage" style="text-align: left">保险列表</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">险种</td>\r\n			<td class="style-myself">单价</td>\r\n			<td class="style-myself">适用天数</td>\r\n			<td class="style-myself">适用人群</td>\r\n			<td>备注</td>\r\n		</tr>\r\n		{{each insurance.insuranceItemList as rs}}\r\n			<tr data-entity-id="{{rs.id}}">\r\n				<td>{{rs.name}}</td>\r\n				<td>{{rs.price}}</td>\r\n				<td>{{rs.days}}天</td>\r\n				<td>{{rs.type}}</td>\r\n				<td>{{rs.remark}}</td>\r\n			</tr>\r\n		{{/each}}\r\n	</table> \r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});