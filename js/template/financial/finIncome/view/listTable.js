/*TMODJS:{"debug":true,"version":17,"md5":"8ae13b2d35e10cb6c6d9bd11698ee4fb"}*/
define(function(require) {
    return require("../../../template")("financial/finIncome/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $line = 1, $each(list, function(rs) {
                $out += " <tr data-id='", $line = 2, $out += $escape(rs.id), $out += "' data-accountStatus = '", 
                $line = 2, $out += $escape(searchParam.accountStatus), $out += "'> <td>", $line = 3, 
                $out += $escape(rs.orgName), $out += '</td> <td class="F-float F-money">', $line = 4, 
                $out += $escape(rs.needPayMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 5, $out += $escape(rs.payedMoney), $out += '</td> <td><span class="F-float F-money" ', 
                $line = 6, rs.needPayMoney != rs.payedMoney && ($out += ' style="color: #f00;"', 
                $line = 6), $out += ">", $line = 6, $out += $escape(rs.unPayedMoney), $out += '</span></td> <td> <a class="cursor T-action T-income-task R-right" data-right="1290002">收款</a> </td> </tr> ', 
                $line = 11;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as rs}}\r\n    <tr data-id=\'{{rs.id}}\' data-accountStatus = \'{{searchParam.accountStatus}}\'> \r\n        <td>{{rs.orgName}}</td>\r\n        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n        <td class="F-float F-money">{{rs.payedMoney}}</td>\r\n        <td><span class="F-float F-money" {{if rs.needPayMoney != rs.payedMoney}} style="color: #f00;"{{/if}}>{{rs.unPayedMoney}}</span></td>\r\n        <td>\r\n            <a class="cursor T-action T-income-task R-right" data-right="1290002">收款</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});