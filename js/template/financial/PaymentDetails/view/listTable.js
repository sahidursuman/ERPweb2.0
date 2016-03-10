/*TMODJS:{"debug":true,"version":122,"md5":"572adedc655d95707c321a6de5845a54"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 4, 0 == rs.moneyType ? ($out += "收入", 
                $line = 4) : 1 == rs.moneyType ? ($out += "支出", $line = 4) : 2 == rs.moneyType && ($out += "转账", 
                $line = 4), $out += "</td> <td>", $line = 5, null == rs.resourceName || "" == rs.resourceName ? ($out += "-", 
                $line = 5) : ($line = 5, $out += $escape(rs.resourceName), $line = 5), $out += "</td> <td>", 
                $line = 6, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 6) : ($line = 6, $out += $escape(rs.receivableType.name), $line = 6), $out += "</td> <td>", 
                $line = 7, null == rs.subjectName || "" == rs.subjectName ? ($out += "-", $line = 7) : ($line = 7, 
                $out += $escape(rs.subjectName), $line = 7), $out += "</td> <td>", $line = 8, null == rs.voucher || "" == rs.voucher ? ($out += "-", 
                $line = 8) : ($line = 8, $out += $escape(rs.voucher), $line = 8), $out += "</td> <td>", 
                $line = 9, 0 == rs.payType ? ($out += "现金", $line = 9) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 9) : 2 == rs.payType ? ($out += "网上支付", $line = 9) : 3 == rs.payType ? ($out += "支票", 
                $line = 9) : 4 == rs.payType ? ($out += "其它", $line = 9) : 5 == rs.payType && ($out += "网付", 
                $line = 9), $out += "</td> ", $line = 10, 0 == rs.moneyType ? ($out += " <td><a ", 
                $line = 11, "主营业务收入" == rs.subjectName || "主营业务支出" == rs.subjectName ? ($out += 'class="T-viewDetails"', 
                $line = 11) : ($out += 'style="color:#000;"', $line = 11), $out += '><span class="F-float F-money">', 
                $line = 11, $out += $escape(rs.incomeDifferenceMoney), $out += "</span></a></td> <td>-</td> ", 
                $line = 13) : 1 == rs.moneyType ? ($out += " <td>-</td> <td><a ", $line = 15, "主营业务收入" == rs.subjectName || "主营业务支出" == rs.subjectName ? ($out += 'class="T-viewDetails"', 
                $line = 15) : ($out += 'style="color:#000;"', $line = 15), $out += '><span class="F-float F-money">', 
                $line = 15, $out += $escape(rs.payDifferenceMoney), $out += "</span></a></td> ", 
                $line = 16) : 2 == rs.moneyType && ($out += " <td>", $line = 17, 0 == rs.incomeDifferenceMoney ? ($out += "- ", 
                $line = 18) : ($out += '<span class="F-float F-money">', $line = 18, $out += $escape(rs.incomeDifferenceMoney), 
                $out += "</span></td> ", $line = 19), $out += " <td>", $line = 20, 0 == rs.payDifferenceMoney ? ($out += "- ", 
                $line = 21) : ($out += '<span class="F-float F-money">', $line = 21, $out += $escape(rs.payDifferenceMoney), 
                $out += "</span></td> ", $line = 22), $out += " ", $line = 23), $out += " <td> ", 
                $line = 25, null != rs.bankAccount ? ($out += " ", $line = 26, null == rs.bankAccount.bankAccountNumber || "" == rs.bankAccount.bankAccountNumber ? ($out += " - ", 
                $line = 28) : ($out += " ", $line = 29, $out += $escape(rs.bankAccount.bankAccountNumber), 
                $out += " ", $line = 30), $out += " ", $line = 31) : ($out += " - ", $line = 33), 
                $out += " </td> <td>", $line = 35, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 36, $out += $escape(rs.user.realName), $out += "</td> <td>", $line = 37, 
                $out += $escape(rs.createTime), $out += '</td> <td><a class="', $line = 38, 1 == rs.deleteStatus ? ($out += "cursor T-delete", 
                $line = 38) : ($out += "gray", $line = 38), $out += '"><span>删除</span></a></td> </tr> ', 
                $line = 40;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{rs.accountTime}}</td>\r\n        <td>{{if rs.moneyType == 0}}收入{{else if rs.moneyType == 1}}支出{{else if rs.moneyType == 2}}转账{{/if}}</td>\r\n        <td>{{if rs.resourceName == null || rs.resourceName == ""}}-{{else}}{{rs.resourceName}}{{/if}}</td>\r\n        <td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType.name}}{{/if}}</td>\r\n        <td>{{if rs.subjectName == null || rs.subjectName == ""}}-{{else}}{{rs.subjectName}}{{/if}}</td>\r\n        <td>{{if rs.voucher == null || rs.voucher == ""}}-{{else}}{{rs.voucher}}{{/if}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{else if rs.payType == 5}}网付{{/if}}</td>\r\n        {{if rs.moneyType == 0}}\r\n        <td><a {{if rs.subjectName == \'主营业务收入\' || rs.subjectName == \'主营业务支出\'}}class="T-viewDetails"{{else}}style="color:#000;"{{/if}}><span class="F-float F-money">{{rs.incomeDifferenceMoney}}</span></a></td>\r\n        <td>-</td>\r\n        {{else if rs.moneyType == 1}}\r\n        <td>-</td>\r\n        <td><a {{if rs.subjectName == \'主营业务收入\' || rs.subjectName == \'主营业务支出\'}}class="T-viewDetails"{{else}}style="color:#000;"{{/if}}><span class="F-float F-money">{{rs.payDifferenceMoney}}</span></a></td>\r\n        {{else if rs.moneyType == 2}}\r\n        <td>{{if rs.incomeDifferenceMoney == 0}}-\r\n            {{else}}<span class="F-float F-money">{{rs.incomeDifferenceMoney}}</span></td>\r\n            {{/if}}\r\n        <td>{{if rs.payDifferenceMoney == 0}}-\r\n            {{else}}<span class="F-float F-money">{{rs.payDifferenceMoney}}</span></td>\r\n            {{/if}}\r\n        {{/if}}\r\n        <td>\r\n            {{if rs.bankAccount != null}}\r\n                {{if rs.bankAccount.bankAccountNumber == null || rs.bankAccount.bankAccountNumber == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.bankAccount.bankAccountNumber}}\r\n                {{/if}}\r\n            {{else}}\r\n                -\r\n            {{/if}}\r\n        </td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.user.realName}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n        <td><a class="{{if rs.deleteStatus == 1}}cursor T-delete{{else}}gray{{/if}}"><span>删除</span></a></td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});