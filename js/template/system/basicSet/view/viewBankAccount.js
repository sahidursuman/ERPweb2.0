/*TMODJS:{"debug":true,"version":69,"md5":"a87ade9d2fa3f43e17849bdaed05d726"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/viewBankAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, bankAccount = $data.bankAccount, $escape = $utils.$escape, $out = "";
            return $out += ' <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">账户类型&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 5, 0 == bankAccount.type ? ($out += "现金账户", $line = 5) : ($out += "银行账户", 
            $line = 5), $out += '</td> <td class="style-myself">是否启用&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 7, 1 == bankAccount.status ? ($out += "已启用", $line = 7) : ($out += "已停用", 
            $line = 7), $out += '</td> </tr> <tr> <td class="style-myself">账户名称&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 11, $out += $escape(bankAccount.aliasName), $out += '</td> <td class="style-myself">银行账号&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 13, $out += $escape(bankAccount.bankAccountNumber), $out += '</td> </tr> <tr> <td class="style-myself">期初余额&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 17, $out += $escape(bankAccount.beginningBalance), $out += '</td> <td class="style-myself">开户银行&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(bankAccount.openingBank), $out += '</td> </tr> <tr> <td class="style-myself">期初日期&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 23, $out += $escape($helpers.dateFormat(bankAccount.beginningTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="style-myself">开户户名&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(bankAccount.accountName), $out += '</td> </tr> <tr> <td class="style-myself">备注&nbsp;&nbsp;</td> <td class="styleOne-self" colspan="3">', 
            $line = 30, $out += $escape(bankAccount.remark), $out += "</td> </tr> </table> </form>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '	<form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n			<tr>\r\n				<td class="style-myself">账户类型&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{if bankAccount.type == 0}}现金账户{{else bankAccount.type == 1}}银行账户{{/if}}</td>\r\n				<td class="style-myself">是否启用&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{if bankAccount.status == 1}}已启用{{else}}已停用{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">账户名称&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.aliasName}}</td>\r\n				<td class="style-myself">银行账号&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.bankAccountNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">期初余额&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.beginningBalance}}</td>\r\n				<td class="style-myself">开户银行&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.openingBank}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">期初日期&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.beginningTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td class="style-myself">开户户名&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.accountName}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">备注&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self" colspan="3">{{bankAccount.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});