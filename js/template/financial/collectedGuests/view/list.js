/*TMODJS:{"debug":true,"version":79,"md5":"e39b8a8c76f5fb5754a18b9783f0a33a"}*/
define(function(require) {
    return require("../../../template")("financial/collectedGuests/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += " <tr> <td>", $line = 3, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.orderNumber), $line = 3), $out += "</td> <td>", 
                $line = 4, null == rs.lineProductName || "" == rs.lineProductName ? ($out += "-", 
                $line = 4) : ($line = 4, $out += $escape(rs.lineProductName), $line = 4), $out += "</td> <td>", 
                $line = 5, $out += $escape(rs.customerType), $out += "</td> <td>", $line = 6, null == rs.startTime || "" == rs.startTime ? ($out += "-", 
                $line = 6) : ($line = 6, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $line = 6), $out += "</td> <td>", $line = 7, null == rs.memberName || "" == rs.memberName ? ($out += "-", 
                $line = 7) : ($line = 7, $out += $escape(rs.memberName), $line = 7), $out += "</td> <td>", 
                $line = 8, $out += $escape(rs.adultCount || 0), $out += " 大 ", $line = 8, $out += $escape(rs.childCount || 0), 
                $out += " 小</td> <td>", $line = 9, null == rs.fromPartnerAgencyName || "" == rs.fromPartnerAgencyName ? ($out += "-", 
                $line = 9) : ($line = 9, $out += $escape(rs.fromPartnerAgencyName), $line = 9), 
                $out += "</td> <td>", $line = 10, $out += $escape(rs.outOPUserName), $out += "</td> <td>", 
                $line = 11, $out += $escape(rs.businessGroupName), $out += "-", $line = 11, $out += $escape(rs.groupName), 
                $out += '</td> <td><span class="F-float F-money">', $line = 12, $out += $escape(rs.tripIncome), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 13, $out += $escape(rs.otherIncome), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 14, $out += $escape(rs.outCost), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 15, $out += $escape(rs.tripCost), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 16, $out += $escape(rs.transferCost), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 17, $out += $escape(rs.income), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 18, $out += $escape(rs.cost), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 19, $out += $escape(rs.profit), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 20, $out += $escape(rs.avgProfit), 
                $out += "</span></td> </tr> ", $line = 22;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr>\r\n	<td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n	<td>{{if rs.lineProductName == null || rs.lineProductName == ""}}-{{else}}{{rs.lineProductName}}{{/if}}</td>\r\n	<td>{{rs.customerType}}</td>\r\n	<td>{{if rs.startTime == null || rs.startTime == ""}}-{{else}}{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n	<td>{{if rs.memberName == null || rs.memberName == ""}}-{{else}}{{rs.memberName}}{{/if}}</td>\r\n	<td>{{rs.adultCount || 0}} 大 {{rs.childCount || 0}} 小</td>\r\n	<td>{{if rs.fromPartnerAgencyName == null || rs.fromPartnerAgencyName == ""}}-{{else}}{{rs.fromPartnerAgencyName}}{{/if}}</td>\r\n	<td>{{rs.outOPUserName}}</td>\r\n	<td>{{rs.businessGroupName}}-{{rs.groupName}}</td>\r\n	<td><span class="F-float F-money">{{rs.tripIncome}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.otherIncome}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outCost}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.tripCost}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.transferCost}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.income}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.cost}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.profit}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.avgProfit}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});