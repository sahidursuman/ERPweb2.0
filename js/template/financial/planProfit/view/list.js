/*TMODJS:{"debug":true,"version":223,"md5":"36501be46585f1b95d93ce09c80220d8"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.financialId), $out += '"> <td><a class="T-tripDetail">', 
                $line = 3, $out += $escape(rs.tripNumber), $out += "</a></td> <td>", $line = 4, 
                $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 5, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-count">', $line = 6, $out += $escape(rs.adultCount), 
                $out += '</span> 大 <span class="F-float F-count">', $line = 6, $out += $escape(rs.childCount), 
                $out += "</span> 小</td> <td>", $line = 7, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 8, $out += $escape(rs.creatorName), $out += "</td> <td>", $line = 9, -1 == rs.billStatus ? ($out += " 待报账 ", 
                $line = 11) : 0 == rs.billStatus ? ($out += " 待审核 ", $line = 13) : 1 == rs.billStatus ? ($out += " 计调已审 ", 
                $line = 15) : 2 == rs.billStatus && ($out += " 财务已审 ", $line = 17), $out += ' </td> <td><span class="F-float F-money">', 
                $line = 19, $out += $escape(rs.needPayAllMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 20, $out += $escape(rs.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 21, $out += $escape(rs.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 22, $out += $escape(rs.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 23, $out += $escape(rs.guideMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 24, $out += $escape(rs.guideTip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 25, $out += $escape(rs.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 26, $out += $escape(rs.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 27, $out += $escape(rs.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 28, $out += $escape(rs.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 29, $out += $escape(rs.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 30, $out += $escape(rs.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 31, $out += $escape(rs.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 32, $out += $escape(rs.shopCostMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 33, $out += $escape(rs.selfMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 34, $out += $escape(rs.outBusMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 35, $out += $escape(rs.outRestaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 36, $out += $escape(rs.outHotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 37, $out += $escape(rs.outTicketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 38, $out += $escape(rs.outOtherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 39, $out += $escape(rs.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 40, $out += $escape(rs.totalTrip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 41, $out += $escape(rs.totalOut), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 42, $out += $escape(rs.profit), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 43, $out += $escape(rs.perCapitaProfit), $out += "</span></td> </tr> ", 
                $line = 45;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr data-id="{{rs.financialId}}">\r\n	<td><a class="T-tripDetail">{{rs.tripNumber}}</a></td>\r\n	<td>{{rs.lineProductName}}</td>\r\n	<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n	<td><span class="F-float F-count">{{rs.adultCount}}</span> 大 <span class="F-float F-count">{{rs.childCount}}</span> 小</td>\r\n	<td>{{rs.guideName}}</td>\r\n	<td>{{rs.creatorName}}</td>\r\n	<td>{{if rs.billStatus == -1}}\r\n			待报账\r\n		{{else if rs.billStatus == 0}}\r\n			待审核\r\n		{{else if rs.billStatus == 1}}\r\n			计调已审\r\n		{{else if rs.billStatus == 2}}\r\n			财务已审\r\n		{{/if}}\r\n	</td>\r\n	<td><span class="F-float F-money">{{rs.needPayAllMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.shopMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.selfPayMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.incomeMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.guideMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.guideTip}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.insuranceMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.busMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.restaurantMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.hotelMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.scenicMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.ticketMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.otherMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.shopCostMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.selfMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outBusMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outRestaurantMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outHotelMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outTicketMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.outOtherMoney}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalIncome}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalTrip}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.totalOut}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.profit}}</span></td>\r\n	<td><span class="F-float F-money">{{rs.perCapitaProfit}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});