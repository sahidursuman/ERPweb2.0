/*TMODJS:{"debug":true,"version":23,"md5":"b10e67592319e9ad30b3aaeecd0fc29c"}*/
define(function(require) {
    return require("../../../template")("financial/collectedGuests/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, resultList = $data.resultList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(resultList, function(rs) {
                $out += " <tr> <td>", $line = 3, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.orderNumber), $line = 3), $out += "</td> <td>", 
                $line = 4, null == rs.lineProductName || "" == rs.lineProductName ? ($out += "- ", 
                $line = 5) : ($out += ' <a class="cursor T-viewLine" data-lid="', $line = 6, $out += $escape(rs.lineProductId), 
                $out += '">', $line = 6, $out += $escape(rs.lineProductName), $out += "</a> ", $line = 7), 
                $out += " </td> <td>", $line = 9, 0 == rs.customerType ? ($out += "散客", $line = 9) : 1 == rs.customerType && ($out += "团队", 
                $line = 9), $out += "</td> <td>", $line = 10, null == rs.startTime || "" == rs.startTime ? ($out += "-", 
                $line = 10) : ($line = 10, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $line = 10), $out += "</td> <td>", $line = 11, $out += $escape(rs.adultCount || 0), 
                $out += " 大 ", $line = 11, $out += $escape(rs.childCount || 0), $out += ' 小</td> <td><span class="F-float F-money">', 
                $line = 12, $out += $escape(rs.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 13, $out += $escape(rs.totalOtherIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.totalOut), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 15, $out += $escape(rs.totalTrip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 16, $out += $escape(rs.totalTransfer), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 17, $out += $escape(rs.incomeTrip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(rs.payTrip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 19, $out += $escape(rs.profit), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 20, $out += $escape(rs.avgProfit), $out += "</span></td> </tr> ", $line = 22;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each resultList as rs}}\r\n<tr>\r\n	<td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n	<td>{{if rs.lineProductName == null || rs.lineProductName == ""}}-\r\n		{{else}}\r\n			<a class="cursor T-viewLine" data-lid="{{rs.lineProductId}}">{{rs.lineProductName}}</a>\r\n		{{/if}} \r\n	</td>\r\n	<td>{{if rs.customerType == 0}}散客{{else if rs.customerType == 1}}团队{{/if}}</td>\r\n	<td>{{if rs.startTime == null || rs.startTime == ""}}-{{else}}{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n	<td>{{rs.adultCount || 0}} 大 {{rs.childCount || 0}} 小</td>\r\n	<td><span class="F-float F-money">{{rs.totalIncome}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalOtherIncome}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalOut}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalTrip}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalTransfer}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.incomeTrip}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.payTrip}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.profit}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.avgProfit}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});