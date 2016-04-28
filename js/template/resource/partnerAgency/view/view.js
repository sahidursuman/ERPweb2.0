/*TMODJS:{"debug":true,"version":101,"md5":"3864da820ff61b5bb06a38c138926b1a"}*/
define(function(require) {
    return require("../../../template")("resource/partnerAgency/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgency = $data.partnerAgency, $each = $utils.$each, $out = ($data.contact, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal PartnerAgencyDetailForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 98%"> <tr> <td colspan="4" class="HeadManage" style="text-align: left">基本信息</td> </tr> <tr> <td class="style-myself">客户名称</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 10, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself">类型</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 12, 0 == partnerAgency.type ? ($out += "地接社 ", $line = 13) : 1 == partnerAgency.type ? ($out += "组团社 ", 
            $line = 14) : ($out += "组团社 地接社 ", $line = 15), $out += '</td> </tr> <tr> <td class="style-myself">座机号码</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 19, $out += $escape(partnerAgency.telNumber), $out += '</td> <td class="style-myself">传真号码</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 21, $out += $escape(partnerAgency.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself">等级</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 26, 1 == partnerAgency.level ? ($out += "金牌 ", $line = 27) : 2 == partnerAgency.level ? ($out += "银牌 ", 
            $line = 28) : ($out += "铜牌 ", $line = 29), $out += '</td> <td class="style-myself">总社</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 31, null != partnerAgency.partnerHeaderAgency ? ($out += " ", $line = 32, 
            $out += $escape(partnerAgency.partnerHeaderAgency.name), $out += " ", $line = 33) : ($out += " ", 
            $line = 34), $out += '</td> </tr> <tr> <td class="style-myself">所在地区</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 38, null != partnerAgency.province && ($out += " ", $line = 39, $out += $escape(partnerAgency.province.name), 
            $out += " ", $line = 40), $out += " ", $line = 41, null != partnerAgency.city && ($out += " -", 
            $line = 42, $out += $escape(partnerAgency.city.name), $out += " ", $line = 43), 
            $out += " ", $line = 44, null != partnerAgency.district && ($out += " -", $line = 45, 
            $out += $escape(partnerAgency.district.name), $out += " ", $line = 46), $out += '</td> <td class="style-myself">是否启用</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 48, 0 == partnerAgency.status ? ($out += " 已停用 ", $line = 50) : ($out += " 已启用 ", 
            $line = 52), $out += '</td> </tr> <tr> <td class="style-myself">详细地址</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 56, $out += $escape(partnerAgency.street), $out += '</td> </tr> <tr> <td class="style-myself">简介</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 60, $out += $escape(partnerAgency.remark), $out += '</td> </tr> </table> <div class="space-10"></div> <table class="whereQ whereTwo" style="width: 98%"> <tr> <td colspan="4" class="HeadManage" style="text-align: left">联系人列表</td> </tr> <tr> <td class="style-myself">联系人姓名</td> <td class="styleOne-self">联系人电话</td> <td class="style-myself">所属部门</td> <td class="styleOne-self">所属职位</td> </tr> ', 
            $line = 76, $each(partnerAgency.partnerAgencyContactList, function(contact) {
                $out += " <tr> <td>", $line = 78, $out += $escape(contact.contactRealname), $out += "</td> <td>", 
                $line = 79, $out += $escape(contact.contactMobileNumber), $out += "</td> <td>", 
                $line = 80, $out += $escape(contact.departmentName), $out += "</td> <td>", $line = 81, 
                $out += $escape(contact.dutyName), $out += "</td> </tr> ", $line = 83;
            }), $out += " </table> </form> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal PartnerAgencyDetailForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n\r\n		<table class="whereQ" style="width: 98%">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage" style="text-align: left">基本信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">客户名称</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{partnerAgency.travelAgencyName}}</td>\r\n				<td class="style-myself">类型</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{if partnerAgency.type == 0}}地接社\r\n					{{else if partnerAgency.type == 1}}组团社\r\n					{{else}}组团社 地接社\r\n					{{/if}}</td> \r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">座机号码</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{partnerAgency.telNumber}}</td>\r\n				<td class="style-myself">传真号码</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{partnerAgency.faxNumber}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">等级</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{if partnerAgency.level == 1}}金牌\r\n					{{else if partnerAgency.level == 2}}银牌\r\n					{{else}}铜牌\r\n					{{/if}}</td>\r\n				<td class="style-myself">总社</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{if partnerAgency.partnerHeaderAgency != null}}\r\n					{{partnerAgency.partnerHeaderAgency.name}}\r\n					{{else}}\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">所在地区</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{if partnerAgency.province != null}}\r\n					{{partnerAgency.province.name}}\r\n					{{/if}}\r\n					{{if partnerAgency.city != null}}\r\n					-{{partnerAgency.city.name}}\r\n					{{/if}}\r\n					{{if partnerAgency.district != null}}\r\n					-{{partnerAgency.district.name}}\r\n					{{/if}}</td>\r\n				<td class="style-myself">是否启用</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{if partnerAgency.status == 0}}\r\n					已停用\r\n					{{else}}\r\n					已启用\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">详细地址</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{partnerAgency.street}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">简介</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{partnerAgency.remark}}</td>\r\n\r\n			</tr>\r\n		</table>\r\n\r\n	 	<div class="space-10"></div>\r\n		<table class="whereQ whereTwo"  style="width: 98%">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage" style="text-align: left">联系人列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系人姓名</td>\r\n				<td class="styleOne-self">联系人电话</td>\r\n				<td class="style-myself">所属部门</td>\r\n				<td class="styleOne-self">所属职位</td>\r\n			</tr>\r\n			{{each partnerAgency.partnerAgencyContactList as contact}}\r\n			<tr>\r\n				<td>{{contact.contactRealname}}</td>\r\n				<td>{{contact.contactMobileNumber}}</td>\r\n				<td>{{contact.departmentName}}</td>\r\n				<td>{{contact.dutyName}}</td>\r\n			</tr>\r\n			{{/each}}\r\n		</table>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});