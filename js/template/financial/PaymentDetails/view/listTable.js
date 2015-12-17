/*TMODJS:{"debug":true,"version":4,"md5":"eed348541a888fc3ce17e3d7dd690e0c"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr> <td>", $line = 3, $out += $escape(rs.resourceName), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.receivableType.name), $out += "</td> <td>", $line = 5, 
                $out += $escape(rs.incomeOrPayType.name), $out += "</td> <td>", $line = 6, $out += $escape(rs.costType.name), 
                $out += "</td> <td>", $line = 7, $out += $escape(rs.businessType.name), $out += "</td> <td>", 
                $line = 8, 0 == rs.payType ? ($out += "现金", $line = 8) : 1 == rs.payType ? ($out += "银行转账", 
                $line = 8) : 2 == rs.payType ? ($out += "网上支付", $line = 8) : 3 == rs.payType ? ($out += "支票", 
                $line = 8) : 4 == rs.payType && ($out += "其它", $line = 8), $out += "</td> <td>", 
                $line = 9, 0 == rs.incomeDifferenceMoney ? ($out += "-", $line = 9) : ($line = 9, 
                $out += $escape(rs.incomeDifferenceMoney), $line = 9), $out += "</td> <td>", $line = 10, 
                $out += $escape(rs.payDifferenceMoney), $out += "</td> <td>", $line = 11, $out += $escape(rs.remark), 
                $out += "</td> <td>", $line = 12, $out += $escape(rs.createTime), $out += "</td> </tr> ", 
                $line = 14;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each result as rs}}\r\n    <tr>\r\n        <td>{{rs.resourceName}}</td>\r\n        <td>{{rs.receivableType.name}}</td>\r\n        <td>{{rs.incomeOrPayType.name}}</td>\r\n        <td>{{rs.costType.name}}</td>\r\n        <td>{{rs.businessType.name}}</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        <td>{{if rs.incomeDifferenceMoney == 0}}-{{else}}{{rs.incomeDifferenceMoney}}{{/if}}</td>\r\n        <td>{{rs.payDifferenceMoney}}</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});