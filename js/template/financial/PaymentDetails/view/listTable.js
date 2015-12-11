/*TMODJS:{"debug":true,"version":1,"md5":"0f996c6436e7d4f39babdfbe2feb7453"}*/
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
                $line = 8, $out += $escape(rs.payType), $out += "</td> <td>", $line = 9, $out += $escape(rs.incomeMoney), 
                $out += "</td> <td>", $line = 10, $out += $escape(rs.payMoney), $out += "</td> <td>", 
                $line = 11, $out += $escape(rs.remark), $out += "</td> <td>", $line = 12, $out += $escape(rs.createTime), 
                $out += "</td> </tr> ", $line = 14;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each result as rs}}\r\n    <tr>\r\n        <td>{{rs.resourceName}}</td>\r\n        <td>{{rs.receivableType.name}}</td>\r\n        <td>{{rs.incomeOrPayType.name}}</td>\r\n        <td>{{rs.costType.name}}</td>\r\n        <td>{{rs.businessType.name}}</td>\r\n        <td>{{rs.payType}}</td>\r\n        <td>{{rs.incomeMoney}}</td>\r\n        <td>{{rs.payMoney}}</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});