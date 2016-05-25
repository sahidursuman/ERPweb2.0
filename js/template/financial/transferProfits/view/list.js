/*TMODJS:{"debug":true,"version":123,"md5":"32e28612dd77b803443bca6ba4b771e2"}*/
define(function(require) {
    return require("../../../template")("financial/transferProfits/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-lid="', 
                $line = 2, $out += $escape(rs.lineProductId), $out += '"> <td>', $line = 3, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.orderNumber), $line = 3), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 5, 
                $out += $escape(rs.customerType), $out += "</td> <td>", $line = 6, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 7, null == rs.memberName || "" == rs.memberName ? ($out += "-", 
                $line = 7) : ($line = 7, $out += $escape(rs.memberName), $line = 7), $out += '</td> <td><a class="cursor T-option T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 9, $out += $escape(rs.adultCount), $out += '</span> 大 <span class="F-float F-count">', 
                $line = 10, $out += $escape(rs.childCount), $out += "</span> 小 </a> </td> <td>", 
                $line = 13, $out += $escape(rs.fromPartnerAgencyName), $out += '</td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.needIncomeMoney), $out += '</span></td> <td><a class="cursor T-option T-costDetail" title="查看明细"> <span class="F-float F-money">', 
                $line = 16, $out += $escape(rs.needPayedMoney), $out += '</span> </a> </td> <td><span class="F-float F-money">', 
                $line = 19, $out += $escape(rs.grossProfitMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 20, $out += $escape(rs.perGrossProfitMoney), $out += "</span></td> </tr> ", 
                $line = 22;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr data-id="{{rs.id}}" data-lid="{{rs.lineProductId}}">\r\n	<td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n	<td>{{rs.lineProductName}}</td>\r\n	<td>{{rs.customerType}}</td>\r\n	<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n	<td>{{if rs.memberName == null || rs.memberName == ""}}-{{else}}{{rs.memberName}}{{/if}}</td>\r\n	<td><a class="cursor T-option T-viewGroup" title="查看小组">\r\n			<span class="F-float F-count">{{rs.adultCount}}</span> 大\r\n			<span class="F-float F-count">{{rs.childCount}}</span> 小\r\n		</a>\r\n	</td> \r\n	<td>{{rs.fromPartnerAgencyName}}</td>\r\n	<td><span class="F-float F-money">{{rs.needIncomeMoney}}</span></td>\r\n	<td><a class="cursor T-option T-costDetail" title="查看明细">\r\n			<span class="F-float F-money">{{rs.needPayedMoney}}</span>\r\n		</a>\r\n	</td>\r\n	<td><span class="F-float F-money">{{rs.grossProfitMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.perGrossProfitMoney}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});