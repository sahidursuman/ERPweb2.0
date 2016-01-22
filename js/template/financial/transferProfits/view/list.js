/*TMODJS:{"debug":true,"version":108,"md5":"06bb178dc7fa716b09cecad92d2c3a7a"}*/
define(function(require) {
    return require("../../../template")("financial/transferProfits/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, results = $data.results, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(results, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-lid="', 
                $line = 2, $out += $escape(rs.lineProductId), $out += '"> <td>', $line = 3, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.orderNumber), $line = 3), $out += '</td> <td><a class="cursor T-option T-viewLineproduct" title="查看线路产品">', 
                $line = 4, $out += $escape(rs.lineProductName), $out += "</a></td> <td>", $line = 5, 
                $out += $escape(rs.customerType), $out += "</td> <td>", $line = 6, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 7, null == rs.realName || "" == rs.realName ? ($out += "-", 
                $line = 7) : ($line = 7, $out += $escape(rs.realName), $line = 7), $out += '</td> <td><a class="cursor T-option T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 9, $out += $escape(rs.adultCount), $out += '</span> 大 <span class="F-float F-count">', 
                $line = 10, $out += $escape(rs.childCount), $out += "</span> 小 </a> </td> <td>", 
                $line = 13, $out += $escape(rs.fromPartnerAgencyName), $out += '</td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.needIncomeMoney), $out += "</span></td> <td>", $line = 15, 
                1 == rs.isNeedArriveService && ($out += "接团 ", $line = 16, (1 == rs.isNeedLeaveService || 1 == rs.isNeedBus) && ($out += "、", 
                $line = 16), $out += " ", $line = 17), $out += " ", $line = 18, 1 == rs.isNeedLeaveService && ($out += "送团 ", 
                $line = 19, 1 == rs.isNeedBus && ($out += "、", $line = 19), $out += " ", $line = 20), 
                $out += " ", $line = 21, 1 == rs.isNeedBus && ($out += "小车", $line = 21), $out += ' </td> <td><a class="cursor T-option T-costDetail" title="查看明细"> <span class="F-float F-money">', 
                $line = 24, $out += $escape(rs.needPayedMoney), $out += '</span> </a> </td> <td><span class="F-float F-money">', 
                $line = 27, $out += $escape(rs.grossProfitMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 28, $out += $escape(rs.perGrossProfitMoney), $out += "</span></td> </tr> ", 
                $line = 30;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each results as rs}}\r\n<tr data-id="{{rs.id}}" data-lid="{{rs.lineProductId}}">\r\n	<td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n	<td><a class="cursor T-option T-viewLineproduct" title="查看线路产品">{{rs.lineProductName}}</a></td>\r\n	<td>{{rs.customerType}}</td>\r\n	<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n	<td>{{if rs.realName == null || rs.realName == ""}}-{{else}}{{rs.realName}}{{/if}}</td>\r\n	<td><a class="cursor T-option T-viewGroup" title="查看小组">\r\n			<span class="F-float F-count">{{rs.adultCount}}</span> 大\r\n			<span class="F-float F-count">{{rs.childCount}}</span> 小\r\n		</a>\r\n	</td> \r\n	<td>{{rs.fromPartnerAgencyName}}</td>\r\n	<td><span class="F-float F-money">{{rs.needIncomeMoney}}</span></td>\r\n	<td>{{if rs.isNeedArriveService == 1}}接团\r\n			{{if rs.isNeedLeaveService == 1 || rs.isNeedBus == 1}}、{{/if}}\r\n		{{/if}}\r\n		{{if rs.isNeedLeaveService == 1}}送团\r\n			{{if rs.isNeedBus == 1}}、{{/if}}\r\n		{{/if}}\r\n		{{if rs.isNeedBus == 1}}小车{{/if}}\r\n	</td>\r\n	<td><a class="cursor T-option T-costDetail" title="查看明细">\r\n			<span class="F-float F-money">{{rs.needPayedMoney}}</span>\r\n		</a>\r\n	</td>\r\n	<td><span class="F-float F-money">{{rs.grossProfitMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.perGrossProfitMoney}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});