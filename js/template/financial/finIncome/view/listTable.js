/*TMODJS:{"debug":true,"version":3,"md5":"97085f0a7d5c985a30663dd33e69e474"}*/
define(function(require) {
    return require("../../../template")("financial/finIncome/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(list, function(rs) {
                $out += " <tr data-id='", $line = 2, $out += $escape(rs.id), $out += "'> <td>", 
                $line = 3, $out += $escape(rs.orgName), $out += "</td> <td>", $line = 4, $out += $escape(rs.needPayMoney), 
                $out += "</td> <td>", $line = 5, $out += $escape(rs.payedMoney), $out += "</td> <td>", 
                $line = 6, $out += $escape(rs.unPayedMoney), $out += '</td> <td> <a class="cursor T-action T-income-task R-right" data-right="1290002">收款</a> </td> </tr> ', 
                $line = 11;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as rs}}\r\n    <tr data-id=\'{{rs.id}}\'>\r\n        <td>{{rs.orgName}}</td>\r\n        <td>{{rs.needPayMoney}}</td>\r\n        <td>{{rs.payedMoney}}</td>\r\n        <td>{{rs.unPayedMoney}}</td>\r\n        <td>\r\n            <a class="cursor T-action T-income-task R-right" data-right="1290002">收款</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});