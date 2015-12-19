/*TMODJS:{"debug":true,"version":12,"md5":"2cdf57eed38340e3338dbb037912b97c"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr> <td>", $line = 3, $out += $escape(rs.resourceName), $out += "</td> <td>", 
                $line = 4, rs.receivableType && ($line = 4, $out += $escape(rs.receivableType.name), 
                $line = 4), $out += "</td> <td>", $line = 5, rs.businessType && ($line = 5, $out += $escape(rs.businessType.name), 
                $line = 5), $out += "</td> <td>", $line = 6, 0 == rs.payType ? ($out += "现金", $line = 6) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 6) : 2 == rs.payType ? ($out += "网上支付", $line = 6) : 3 == rs.payType ? ($out += "支票", 
                $line = 6) : 4 == rs.payType && ($out += "其它", $line = 6), $out += "</td> ", $line = 7, 
                rs.moneyType ? ($out += " <td>", $line = 8, $out += $escape(rs.incomeDifferenceMoney), 
                $out += "</td> <td>-</td> ", $line = 10) : ($out += " <td>-</td> <td>", $line = 12, 
                $out += $escape(rs.payDifferenceMoney), $out += "</td> ", $line = 13), $out += " <td>", 
                $line = 14, $out += $escape(rs.remark), $out += "</td> <td>", $line = 15, $out += $escape(rs.user.realName), 
                $out += "</td> <td>", $line = 16, $out += $escape(rs.createTime), $out += "</td> </tr> ", 
                $line = 18;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each result as rs}}\r\n    <tr>\r\n        <td>{{rs.resourceName}}</td>\r\n        <td>{{if rs.receivableType}}{{rs.receivableType.name}}{{/if}}</td>\r\n        <td>{{if rs.businessType}}{{rs.businessType.name}}{{/if}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        {{if !!rs.moneyType}}\r\n        <td>{{rs.incomeDifferenceMoney}}</td>\r\n        <td>-</td>\r\n        {{else}}\r\n        <td>-</td>\r\n        <td>{{rs.payDifferenceMoney}}</td>\r\n        {{/if}}\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.user.realName}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});