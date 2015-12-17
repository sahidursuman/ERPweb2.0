/*TMODJS:{"debug":true,"version":7,"md5":"07cf624355b3ec8c075e02cb63bc8a08"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr> <td>", $line = 3, $out += $escape(rs.resourceName), $out += "</td> <td>", 
                $line = 4, rs.receivableType && ($line = 4, $out += $escape(rs.receivableType.name), 
                $line = 4), $out += "</td> <td>", $line = 5, rs.incomeOrPayType && ($line = 5, $out += $escape(rs.incomeOrPayType.name), 
                $line = 5), $out += "</td> <td>", $line = 6, rs.costType && ($line = 6, $out += $escape(rs.costType.name), 
                $line = 6), $out += "</td> <td>", $line = 7, rs.businessType && ($line = 7, $out += $escape(rs.businessType.name), 
                $line = 7), $out += "</td> <td>", $line = 8, 0 == rs.payType ? ($out += "现金", $line = 8) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 8) : 2 == rs.payType ? ($out += "网上支付", $line = 8) : 3 == rs.payType ? ($out += "支票", 
                $line = 8) : 4 == rs.payType && ($out += "其它", $line = 8), $out += "</td> <td>", 
                $line = 9, 0 == rs.incomeDifferenceMoney ? ($out += "-", $line = 9) : ($line = 9, 
                $out += $escape(rs.incomeDifferenceMoney), $line = 9), $out += "</td> <td>", $line = 10, 
                0 == rs.payDifferenceMoney ? ($out += "-", $line = 10) : ($line = 10, $out += $escape(rs.payDifferenceMoney), 
                $line = 10), $out += "</td> <td>", $line = 11, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 12, $out += $escape(rs.createTime), $out += "</td> </tr> ", $line = 14;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each result as rs}}\r\n    <tr>\r\n        <td>{{rs.resourceName}}</td>\r\n        <td>{{if rs.receivableType}}{{rs.receivableType.name}}{{/if}}</td>\r\n        <td>{{if rs.incomeOrPayType}}{{rs.incomeOrPayType.name}}{{/if}}</td>\r\n        <td>{{if rs.costType}}{{rs.costType.name}}{{/if}}</td>\r\n        <td>{{if rs.businessType}}{{rs.businessType.name}}{{/if}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        <td>{{if rs.incomeDifferenceMoney == 0}}-{{else}}{{rs.incomeDifferenceMoney}}{{/if}}</td>\r\n        <td>{{if rs.payDifferenceMoney == 0}}-{{else}}{{rs.payDifferenceMoney}}{{/if}}</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});