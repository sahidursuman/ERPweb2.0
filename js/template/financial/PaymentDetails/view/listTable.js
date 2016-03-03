/*TMODJS:{"debug":true,"version":63,"md5":"74f37b702f335c188cf0cef3e06d2811"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 4, 0 == rs.moneyType ? ($out += "收入", 
                $line = 4) : 1 == rs.moneyType && ($out += "支出", $line = 4), $out += "</td> <td>", 
                $line = 5, null == rs.resourceName || "" == rs.resourceName ? ($out += "-", $line = 5) : ($line = 5, 
                $out += $escape(rs.resourceName), $line = 5), $out += "</td> <td>", $line = 6, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 6) : ($line = 6, $out += $escape(rs.receivableType.name), $line = 6), $out += "</td> <td>", 
                $line = 7, null == rs.subjectName || "" == rs.subjectName ? ($out += "-", $line = 7) : ($line = 7, 
                $out += $escape(rs.subjectName), $line = 7), $out += "</td> <td>", $line = 8, null == rs.voucher || "" == rs.voucher ? ($out += "-", 
                $line = 8) : ($line = 8, $out += $escape(rs.voucher), $line = 8), $out += "</td> <td>", 
                $line = 9, 0 == rs.payType ? ($out += "现金", $line = 9) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 9) : 2 == rs.payType ? ($out += "网上支付", $line = 9) : 3 == rs.payType ? ($out += "支票", 
                $line = 9) : 4 == rs.payType && ($out += "其它", $line = 9), $out += "</td> ", $line = 10, 
                0 == rs.moneyType ? ($out += " <td><a ", $line = 11, "主营业务收入" == rs.subjectName || "主营业务支出" == rs.subjectName ? ($out += 'class="T-viewDetails"', 
                $line = 11) : ($out += 'style="color:#000;"', $line = 11), $out += '}><span class="F-float F-money">', 
                $line = 11, $out += $escape(rs.incomeDifferenceMoney), $out += "</span></a></td> <td>-</td> ", 
                $line = 13) : ($out += " <td>-</td> <td><a ", $line = 15, "主营业务收入" == rs.subjectName || "主营业务支出" == rs.subjectName ? ($out += 'class="T-viewDetails"', 
                $line = 15) : ($out += 'style="color:#000;"', $line = 15), $out += '}><span class="F-float F-money">', 
                $line = 15, $out += $escape(rs.payDifferenceMoney), $out += "</span></a></td> ", 
                $line = 16), $out += " <td>", $line = 17, null == rs.bankName || "" == rs.bankName ? ($out += "-", 
                $line = 17) : ($line = 17, $out += $escape(rs.bankName), $line = 17), $out += "</td> <td>", 
                $line = 18, $out += $escape(rs.remark), $out += "</td> <td>", $line = 19, $out += $escape(rs.user.realName), 
                $out += "</td> <td>", $line = 20, $out += $escape(rs.createTime), $out += "</td> </tr> ", 
                $line = 22;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{rs.accountTime}}</td>\r\n        <td>{{if rs.moneyType == 0}}收入{{else if rs.moneyType == 1}}支出{{/if}}</td>\r\n        <td>{{if rs.resourceName == null || rs.resourceName == ""}}-{{else}}{{rs.resourceName}}{{/if}}</td>\r\n        <td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType.name}}{{/if}}</td>\r\n        <td>{{if rs.subjectName == null || rs.subjectName == ""}}-{{else}}{{rs.subjectName}}{{/if}}</td>\r\n        <td>{{if rs.voucher == null || rs.voucher == ""}}-{{else}}{{rs.voucher}}{{/if}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        {{if rs.moneyType == 0}}\r\n        <td><a {{if rs.subjectName == \'主营业务收入\' || rs.subjectName == \'主营业务支出\'}}class="T-viewDetails"{{else}}style="color:#000;"{{/if}}}><span class="F-float F-money">{{rs.incomeDifferenceMoney}}</span></a></td>\r\n        <td>-</td>\r\n        {{else}}\r\n        <td>-</td>\r\n        <td><a {{if rs.subjectName == \'主营业务收入\' || rs.subjectName == \'主营业务支出\'}}class="T-viewDetails"{{else}}style="color:#000;"{{/if}}}><span class="F-float F-money">{{rs.payDifferenceMoney}}</span></a></td>\r\n        {{/if}}\r\n        <td>{{if rs.bankName == null || rs.bankName == ""}}-{{else}}{{rs.bankName}}{{/if}}</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.user.realName}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});