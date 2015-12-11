/*TMODJS:{"debug":true,"version":196,"md5":"c8dacf45ac60c1904055a28719eab273"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.financialId), $out += '"> <td><a class="T-tripDetail">', 
                $line = 3, $out += $escape(rs.tripNumber), $out += "</a></td> <td>", $line = 4, 
                $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 5, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 6, $out += $escape(rs.adultCount), $out += " 大 ", 
                $line = 6, $out += $escape(rs.childCount), $out += " 小</td> <td>", $line = 7, $out += $escape(rs.guideName), 
                $out += "</td> <td>", $line = 8, $out += $escape(rs.creatorName), $out += "</td> <td>", 
                $line = 9, 0 == rs.status ? ($out += " 待确认 ", $line = 11) : 1 == rs.status ? ($out += " 已发团 ", 
                $line = 13) : -1 == rs.status && ($out += " 已取消 ", $line = 15), $out += " </td> <td>", 
                $line = 17, $out += $escape(rs.needPayAllMoney), $out += "</td> <td>", $line = 18, 
                $out += $escape(rs.shopMoney), $out += "</td> <td>", $line = 19, $out += $escape(rs.selfPayMoney), 
                $out += "</td> <td>", $line = 20, $out += $escape(rs.incomeMoney), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.guideMoney), $out += "</td> <td>", $line = 22, $out += $escape(rs.guideTip), 
                $out += "</td> <td>", $line = 23, $out += $escape(rs.insuranceMoney), $out += "</td> <td>", 
                $line = 24, $out += $escape(rs.busMoney), $out += "</td> <td>", $line = 25, $out += $escape(rs.restaurantMoney), 
                $out += "</td> <td>", $line = 26, $out += $escape(rs.hotelMoney), $out += "</td> <td>", 
                $line = 27, $out += $escape(rs.scenicMoney), $out += "</td> <td>", $line = 28, $out += $escape(rs.ticketMoney), 
                $out += "</td> <td>", $line = 29, $out += $escape(rs.otherMoney), $out += "</td> <td>", 
                $line = 30, $out += $escape(rs.shopCostMoney), $out += "</td> <td>", $line = 31, 
                $out += $escape(rs.selfMoney), $out += "</td> <td>", $line = 32, $out += $escape(rs.outBusMoney), 
                $out += "</td> <td>", $line = 33, $out += $escape(rs.outRestaurantMoney), $out += "</td> <td>", 
                $line = 34, $out += $escape(rs.outHotelMoney), $out += "</td> <td>", $line = 35, 
                $out += $escape(rs.outTicketMoney), $out += "</td> <td>", $line = 36, $out += $escape(rs.outOtherMoney), 
                $out += "</td> <td>", $line = 37, $out += $escape(rs.totalIncome), $out += "</td> <td>", 
                $line = 38, $out += $escape(rs.totalTrip), $out += "</td> <td>", $line = 39, $out += $escape(rs.totalOut), 
                $out += "</td> <td>", $line = 40, $out += $escape(rs.profit), $out += "</td> <td>", 
                $line = 41, $out += $escape(rs.perCapitaProfit), $out += "</td> </tr> ", $line = 43;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr data-id="{{rs.financialId}}">\r\n	<td><a class="T-tripDetail">{{rs.tripNumber}}</a></td>\r\n	<td>{{rs.lineProductName}}</td>\r\n	<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n	<td>{{rs.adultCount}} 大 {{rs.childCount}} 小</td>\r\n	<td>{{rs.guideName}}</td>\r\n	<td>{{rs.creatorName}}</td>\r\n	<td>{{if rs.status == 0}}\r\n			待确认\r\n		{{else if rs.status == 1}}\r\n			已发团\r\n		{{else if rs.status == -1}}\r\n			已取消\r\n		{{/if}}\r\n	</td>\r\n	<td>{{rs.needPayAllMoney}}</td>\r\n	<td>{{rs.shopMoney}}</td>\r\n	<td>{{rs.selfPayMoney}}</td>\r\n	<td>{{rs.incomeMoney}}</td>\r\n	<td>{{rs.guideMoney}}</td>\r\n	<td>{{rs.guideTip}}</td>\r\n	<td>{{rs.insuranceMoney}}</td>\r\n	<td>{{rs.busMoney}}</td>\r\n	<td>{{rs.restaurantMoney}}</td>\r\n	<td>{{rs.hotelMoney}}</td>\r\n	<td>{{rs.scenicMoney}}</td>\r\n	<td>{{rs.ticketMoney}}</td>\r\n	<td>{{rs.otherMoney}}</td>\r\n	<td>{{rs.shopCostMoney}}</td>\r\n	<td>{{rs.selfMoney}}</td>\r\n	<td>{{rs.outBusMoney}}</td>\r\n	<td>{{rs.outRestaurantMoney}}</td>\r\n	<td>{{rs.outHotelMoney}}</td>\r\n	<td>{{rs.outTicketMoney}}</td>\r\n	<td>{{rs.outOtherMoney}}</td>\r\n	<td>{{rs.totalIncome}}</td>\r\n	<td>{{rs.totalTrip}}</td>\r\n	<td>{{rs.totalOut}}</td>\r\n	<td>{{rs.profit}}</td>\r\n	<td>{{rs.perCapitaProfit}}</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});