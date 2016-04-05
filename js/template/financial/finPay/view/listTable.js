/*TMODJS:{"debug":true,"version":32,"md5":"9c6c934b1fcaa85f149ce83e3a925108"}*/
define(function(require) {
    return require("../../../template")("financial/finPay/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.rs, 
            $data.$index, $utils.$escape), currentType = $data.currentType, $out = "";
            return $line = 1, $each(list, function(rs) {
                $out += " <tr data-id='", $line = 2, $out += $escape(rs.id), $out += "'> <td>", 
                $line = 3, $out += $escape(rs.orgName), $out += '</td> <td class="F-float F-money">', 
                $line = 4, $out += $escape(rs.needPayMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 5, $out += $escape(rs.payedMoney), $out += '</td> <td><span class="F-float F-money" ', 
                $line = 6, rs.needPayMoney != rs.payedMoney && ($out += ' style="color: #f00;"', 
                $line = 6), $out += ">", $line = 6, $out += $escape(rs.unPayedMoney), $out += "</span></td> <td>", 
                $line = 7, 10 == currentType && ($out += ' <a class="cursor T-action T-pay-borrow">借款 <label style="padding-left:5px;">|</label> </a> ', 
                $line = 11), $out += ' <a class="cursor T-action T-pay-task R-right" data-right="1290002">付款</a> </td> </tr> ', 
                $line = 15;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as rs}}\r\n    <tr data-id=\'{{rs.id}}\'>\r\n        <td>{{rs.orgName}}</td>\r\n        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n        <td class="F-float F-money">{{rs.payedMoney}}</td>\r\n        <td><span class="F-float F-money" {{if rs.needPayMoney != rs.payedMoney}} style="color: #f00;"{{/if}}>{{rs.unPayedMoney}}</span></td>\r\n        <td>{{if currentType == 10 }}\r\n        		<a class="cursor T-action T-pay-borrow">借款\r\n        			<label style="padding-left:5px;">|</label>\r\n        		</a>\r\n        	{{/if}}\r\n            <a class="cursor T-action T-pay-task R-right" data-right="1290002">付款</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});