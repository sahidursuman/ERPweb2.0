/*TMODJS:{"debug":true,"version":57,"md5":"e3645e8792aba9796b1c5efbfdbd7c9d"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/viewBankAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bankAccount = $data.bankAccount, $out = "";
            return $out += ' <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">银行账号&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 6, $out += $escape(bankAccount.bankAccountNumber), $out += '</td> <td class="style-myself">是否启用&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 8, 1 == bankAccount.status ? ($out += "启用", $line = 8) : ($out += "停用", 
            $line = 8), $out += '</td> </tr> <tr> <td class="style-myself">开户银行&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 12, $out += $escape(bankAccount.openingBank), $out += '</td> <td class="style-myself">期初余额&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 14, $out += $escape(bankAccount.beginningBalance), $out += '</td> </tr> <tr> <td class="style-myself">开户户名&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 18, $out += $escape(bankAccount.accountName), $out += '</td> <td class="style-myself">期初日期&nbsp;&nbsp;</td> <td class="styleOne-self">', 
            $line = 20, $out += $escape($helpers.dateFormat(bankAccount.beginningTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself">备注&nbsp;&nbsp;</td> <td class="styleOne-self" colspan="3">', 
            $line = 25, $out += $escape(bankAccount.remark), $out += "</td> </tr> </table> </form>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '	<form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n\r\n			<tr>\r\n				<td class="style-myself">银行账号&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.bankAccountNumber}}</td>\r\n				<td class="style-myself">是否启用&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{if bankAccount.status == 1}}启用{{else}}停用{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">开户银行&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.openingBank}}</td>\r\n				<td class="style-myself">期初余额&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.beginningBalance}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">开户户名&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.accountName}}</td>\r\n				<td class="style-myself">期初日期&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self">{{bankAccount.beginningTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">备注&nbsp;&nbsp;</td>\r\n				<td class="styleOne-self" colspan="3">{{bankAccount.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});