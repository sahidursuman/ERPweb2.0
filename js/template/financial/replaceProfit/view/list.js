/*TMODJS:{"debug":true,"version":231,"md5":"dbf5982e8afab6944a3d57f537fa2313"}*/
define(function(require) {
    return require("../../../template")("financial/replaceProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td><a class="T-option T-replaceDetail">', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</a></td> <td>", $line = 4, 
                null != rs.partnerAgency && ($line = 4, $out += $escape(rs.partnerAgency.travelAgencyName), 
                $line = 4), $out += "</td> <td> ", $line = 6, "" == rs.financialHotel ? ($out += " - ", 
                $line = 8) : ($out += " ", $line = 9, $out += $escape(rs.financialHotel), $out += " ", 
                $line = 10), $out += " </td> <td> ", $line = 13, "" == rs.financialTicket ? ($out += " - ", 
                $line = 15) : ($out += " ", $line = 16, $out += $escape(rs.financialTicket), $out += " ", 
                $line = 17), $out += " </td> <td> ", $line = 20, "" == rs.financialScenic ? ($out += " - ", 
                $line = 22) : ($out += " ", $line = 23, $out += $escape(rs.financialScenic), $out += " ", 
                $line = 24), $out += " </td> <td> ", $line = 27, "" == rs.financialBus ? ($out += " - ", 
                $line = 29) : ($out += " ", $line = 30, $out += $escape(rs.financialBus), $out += " ", 
                $line = 31), $out += ' </td> <td><a class="T-option T-needPayDetail">', $line = 33, 
                $out += $escape(rs.sumNeedGetMoney), $out += '</a></td> <td><a class="T-option T-costDetail">', 
                $line = 34, $out += $escape(rs.sumCostMoney), $out += "</a></td> <td>", $line = 35, 
                $out += $escape(rs.financialGrossProfit), $out += "</td> </tr> ", $line = 37;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookingOrderList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n	<td><a class="T-option T-replaceDetail">{{rs.orderNumber}}</a></td>\r\n	<td>{{if rs.partnerAgency != null}}{{rs.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n	<td>\r\n		{{if rs.financialHotel == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialHotel}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialTicket == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialTicket}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialScenic == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialScenic}}\r\n		{{/if}}\r\n	</td>\r\n	<td>\r\n		{{if rs.financialBus == ""}}\r\n			-\r\n		{{else}}\r\n			{{rs.financialBus}}\r\n		{{/if}}\r\n	</td>\r\n	<td><a class="T-option T-needPayDetail">{{rs.sumNeedGetMoney}}</a></td>\r\n	<td><a class="T-option T-costDetail">{{rs.sumCostMoney}}</a></td>\r\n	<td>{{rs.financialGrossProfit}}</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});