/*TMODJS:{"debug":true,"version":79,"md5":"82adbb289b0eccc93257a614916760f9"}*/
define(function(require) {
    return require("../../../template")("system/user/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, user = $data.user, groupname = $data.groupname, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ"> <tr> <td class="style-myself">用户名</td> <td class="styleOne-self">', 
            $line = 7, $out += $escape(user.userName), $out += '</td> <td class="style-myself">姓名</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(user.realName), $out += '</td> </tr> <tr> <td class="style-myself">联系电话</td> <td class="styleOne-self" colspan="3">', 
            $line = 13, $out += $escape(user.mobileNumber), $out += '</td> <!-- <td class="style-myself">审核角色：</td> <td class="styleOne-self">', 
            $line = 15, 1 == user.roleType && ($out += "管理员", $line = 15), $out += " ", $line = 16, 
            2 == user.roleType && ($out += "财务", $line = 16), $out += " ", $line = 17, 3 == user.roleType && ($out += "计调", 
            $line = 17), $out += '</td> --> </tr> <tr> <td class="style-myself">部门</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(groupname), $out += '</td> <td class="style-myself">启用状态</td> <td class="styleOne-self">', 
            $line = 23, 1 == user.status ? ($out += " 已启用 ", $line = 25) : ($out += " 已停用 ", 
            $line = 27), $out += "</td> </tr> </table> </form> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n\r\n		<table class="whereQ">\r\n			<tr>\r\n				<td class="style-myself">用户名</td>\r\n				<td class="styleOne-self">{{user.userName}}</td>\r\n				<td class="style-myself">姓名</td>\r\n				<td class="styleOne-self">{{user.realName}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系电话</td>\r\n				<td class="styleOne-self" colspan="3">{{user.mobileNumber}}</td>\r\n				<!-- <td class="style-myself">审核角色：</td>\r\n				<td class="styleOne-self">{{if user.roleType == 1 }}管理员{{/if}}\r\n					{{if user.roleType == 2 }}财务{{/if}}\r\n					{{if user.roleType == 3 }}计调{{/if}}</td> -->\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">部门</td>\r\n				<td class="styleOne-self">{{groupname}}</td>\r\n				<td class="style-myself">启用状态</td>\r\n				<td class="styleOne-self">{{if user.status == 1}}\r\n					已启用\r\n					{{else user.status == 0}}\r\n					已停用\r\n					{{/if}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});