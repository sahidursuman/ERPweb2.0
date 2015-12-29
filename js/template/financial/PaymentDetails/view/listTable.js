/*TMODJS:{"debug":true,"version":20,"md5":"a04b1683f4d43a2b8597f4852f9a096a"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr><td>记账日期</td> <td>业务类别</td> <td>", $line = 4, $out += $escape(rs.resourceName), 
                $out += "</td> <td>主营业务收付类别</td> <td>会计科目</td> <td>凭证编号</td> <td>", $line = 8, 0 == rs.payType ? ($out += "现金", 
                $line = 8) : 1 == rs.payType ? ($out += "银行转账", $line = 8) : 2 == rs.payType ? ($out += "网上支付", 
                $line = 8) : 3 == rs.payType ? ($out += "支票", $line = 8) : 4 == rs.payType && ($out += "其它", 
                $line = 8), $out += "</td> ", $line = 9, 0 == rs.moneyType ? ($out += " <td>", $line = 10, 
                $out += $escape(rs.incomeDifferenceMoney), $out += "</td> <td>-</td> ", $line = 12) : ($out += " <td>-</td> <td>", 
                $line = 14, $out += $escape(rs.payDifferenceMoney), $out += "</td> ", $line = 15), 
                $out += " <td>银行账号</td> <td>", $line = 17, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 18, $out += $escape(rs.user.realName), $out += "</td> <td>", $line = 19, 
                $out += $escape(rs.createTime), $out += "</td> </tr> ", $line = 21;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each result as rs}}\r\n    <tr><td>记账日期</td>\r\n        <td>业务类别</td>\r\n        <td>{{rs.resourceName}}</td>\r\n        <td>主营业务收付类别</td>\r\n        <td>会计科目</td>\r\n        <td>凭证编号</td>\r\n        <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{/if}}</td>\r\n        {{if rs.moneyType == 0}}\r\n        <td>{{rs.incomeDifferenceMoney}}</td>\r\n        <td>-</td>\r\n        {{else}}\r\n        <td>-</td>\r\n        <td>{{rs.payDifferenceMoney}}</td>\r\n        {{/if}}\r\n        <td>银行账号</td>\r\n        <td>{{rs.remark}}</td>\r\n        <td>{{rs.user.realName}}</td>\r\n        <td>{{rs.createTime}}</td>\r\n    </tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});