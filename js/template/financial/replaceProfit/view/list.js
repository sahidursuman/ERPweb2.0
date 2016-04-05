/*TMODJS:{"debug":true,"version":243,"md5":"3d27a143ac34fccef939633825131fb6"}*/
define(function(require) {
    return require("../../../template")("financial/replaceProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><a class="T-option T-replaceDetail">', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</a></td> <td>", $line = 4, 
                null != rs.partnerAgency && ($line = 4, $out += $escape(rs.partnerAgency.travelAgencyName), 
                $line = 4), $out += "</td> <td>", $line = 5, $out += $escape(rs.outOPUser), $out += "</td> <td>", 
                $line = 6, rs.businessGroup && ($line = 6, $out += $escape(rs.businessGroup.name), 
                $line = 6), $out += "-", $line = 6, rs.group && ($line = 6, $out += $escape(rs.group.name), 
                $line = 6), $out += "</td> <td> ", $line = 8, "" == rs.financialHotel ? ($out += " - ", 
                $line = 10) : ($out += " ", $line = 11, $out += $escape(rs.financialHotel), $out += " ", 
                $line = 12), $out += " </td> <td> ", $line = 15, "" == rs.financialTicket ? ($out += " - ", 
                $line = 17) : ($out += " ", $line = 18, $out += $escape(rs.financialTicket), $out += " ", 
                $line = 19), $out += " </td> <td> ", $line = 22, "" == rs.financialScenic ? ($out += " - ", 
                $line = 24) : ($out += " ", $line = 25, $out += $escape(rs.financialScenic), $out += " ", 
                $line = 26), $out += " </td> <td> ", $line = 29, "" == rs.financialBus ? ($out += " - ", 
                $line = 31) : ($out += " ", $line = 32, $out += $escape(rs.financialBus), $out += " ", 
                $line = 33), $out += ' </td> <td><a class="T-option T-needPayDetail F-float F-money">', 
                $line = 35, $out += $escape(rs.sumNeedGetMoney), $out += '</a></td> <td><a class="T-option T-costDetail F-float F-money">', 
                $line = 36, $out += $escape(rs.sumCostMoney), $out += '</a></td> <td><span class="F-float F-money">', 
                $line = 37, $out += $escape(rs.financialGrossProfit), $out += "</span></td> </tr> ", 
                $line = 39;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookingOrderList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><a class="T-option T-replaceDetail">{{rs.orderNumber}}</a></td>\r\n	<td>{{if rs.partnerAgency != null}}{{rs.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n	<td>{{rs.outOPUser}}</td>\r\n	<td>{{if !!rs.businessGroup}}{{rs.businessGroup.name}}{{/if}}-{{if rs.group}}{{rs.group.name}}{{/if}}</td>\r\n	<td>\r\n		{{if rs.financialHotel == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialHotel}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialTicket == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialTicket}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialScenic == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialScenic}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialBus == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialBus}}\r\n		{{/if}}\r\n	</td>\r\n	<td><a class="T-option T-needPayDetail F-float F-money">{{rs.sumNeedGetMoney}}</a></td>\r\n	<td><a class="T-option T-costDetail F-float F-money">{{rs.sumCostMoney}}</a></td>\r\n	<td><span class="F-float F-money">{{rs.financialGrossProfit}}</span></td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});