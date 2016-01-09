/*TMODJS:{"debug":true,"version":28,"md5":"c9a98ea2870e40a6443c7ab6281f0db3"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr><td>", $line = 2, $out += $escape(rs.accountTime), $out += "</td> <td>", 
                $line = 3, 0 == rs.moneyType ? ($out += "收入", $line = 3) : 1 == rs.moneyType && ($out += "支出", 
                $line = 3), $out += "</td> <td>", $line = 4, null == rs.resourceName || "" == rs.resourceName ? ($out += "-", 
                $line = 4) : ($line = 4, $out += $escape(rs.resourceName), $line = 4), $out += "</td> <td>", 
                $line = 5, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 5) : ($line = 5, $out += $escape(rs.receivableType.name), $line = 5), $out += "</td> <td>", 
                $line = 6, null == rs.subjectName || "" == rs.subjectName ? ($out += "-", $line = 6) : ($line = 6, 
                $out += $escape(rs.subjectName), $line = 6), $out += "</td> <td>", $line = 7, null == rs.voucher || "" == rs.voucher ? ($out += "-", 
                $line = 7) : ($line = 7, $out += $escape(rs.voucher), $line = 7), $out += "</td> <td>", 
                $line = 8, 0 == rs.payType ? ($out += "现金", $line = 8) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 8) : 2 == rs.payType ? ($out += "网上支付", $line = 8) : 3 == rs.payType ? ($out += "支票", 
                $line = 8) : 4 == rs.payType && ($out += "其它", $line = 8), $out += "</td> ", $line = 9, 
                0 == rs.moneyType ? ($out += " <td>", $line = 10, $out += $escape(rs.incomeDifferenceMoney), 
                $out += "</td> <td>-</td> ", $line = 12) : ($out += " <td>-</td> <td>", $line = 14, 
                $out += $escape(rs.payDifferenceMoney), $out += "</td> ", $line = 15), $out += " <td>", 
                $line = 16, null == rs.bankName || "" == rs.bankName ? ($out += "-", $line = 16) : ($line = 16, 
                $out += $escape(rs.bankName), $line = 16), $out += "</td> <td>", $line = 17, $out += $escape(rs.remark), 
                $out += "</td> <td>", $line = 18, $out += $escape(rs.user.realName), $out += "</td> <td>", 
                $line = 19, $out += $escape(rs.createTime), $out += "</td> </tr> ", $line = 21;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr><td>{{rs.accountTime}}</td>\r\n        <td>{{if rs.moneyType == 0}}收入{{else if rs.moneyType == 1}}支出{{/if}}</td>\r\n        <td>{{if rs.resourceName == null || rs.resourceName == ""}}-{{else}}{{rs.resourceName}}{{/if}}</td>\r\n        <td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType.name}}{{/if}}</td>\r\n        <td>{{if rs.subjectName == null || rs.subjectName == ""}}-{{else}}{{rs.subjectName}}{{/if}}</td>\r\n        <td>{{if rs.voucher == null || rs.voucher == ""}}-{{else}}{{rs.voucher}}{{/if}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        {{if rs.moneyType == 0}}\r\n        <td>{{rs.incomeDifferenceMoney}}</td>\r\n        <td>-</td>\r\n        {{else}}\r\n        <td>-</td>\r\n        <td>{{rs.payDifferenceMoney}}</td>\r\n        {{/if}}\r\n        <td>{{if rs.bankName == null || rs.bankName == ""}}-{{else}}{{rs.bankName}}{{/if}}</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.user.realName}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});