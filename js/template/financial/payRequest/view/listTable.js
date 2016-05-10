/*TMODJS:{"debug":true,"version":5,"md5":"d389a498f410419daeea2792f7aab8d3"}*/
define(function(require) {
    return require("../../../template")("financial/payRequest/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-type="', 
                $line = 2, $out += $escape(rs.type), $out += '"> <td>', $line = 3, $out += $escape(rs.type), 
                $out += "</td> <td>", $line = 4, $out += $escape(rs.accountType), $out += "</td> <td>", 
                $line = 5, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 6, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 7, $out += $escape(rs.unitName), $out += "</td> <td>", 
                $line = 8, $out += $escape(rs.resourceName), $out += '</td> <td><span class="F-float F-money">', 
                $line = 9, $out += $escape(rs.needPay), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 10, $out += $escape(rs.payed), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 11, $out += $escape(rs.unpay), $out += '</span></td> <td><a class="cursor T-pay">付款</a></td> </tr> ', 
                $line = 14;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr data-id="{{rs.id}}" data-type="{{rs.type}}">\r\n    <td>{{rs.type}}</td>\r\n    <td>{{rs.accountType}}</td>\r\n    <td>{{rs.accountTime}}</td>\r\n    <td>{{rs.count}}</td>\r\n    <td>{{rs.unitName}}</td>\r\n    <td>{{rs.resourceName}}</td>\r\n    <td><span class="F-float F-money">{{rs.needPay}}</span></td>\r\n    <td><span class="F-float F-money">{{rs.payed}}</span></td>\r\n    <td><span class="F-float F-money">{{rs.unpay}}</span></td>\r\n    <td><a class="cursor T-pay">付款</a></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});