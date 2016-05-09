/*TMODJS:{"debug":true,"version":36,"md5":"8490b7fad5bf8cc7a0efcbdd0c60d7f6"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, isTurn = $data.isTurn, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), subtotal = ($data.list, $data.index, $data.subtotal), $out = "";
            return $out += '<thead> <tr class="bg-blur T-tr-fixed"> <th rowspan="2" style="min-width: 180px">团信息</th> <th rowspan="2">状态</th> <th rowspan="2" style="width:60px;">收/付</th> <th colspan="5">发团收入</th> <th colspan="14">发团成本</th> ', 
            $line = 8, 1 == isTurn && ($out += ' <th colspan="5">中转成本</th> ', $line = 10), $out += ' <th rowspan="2">导游退补小计</th> <th rowspan="2">收入小计</th> <th rowspan="2">发团成本小计</th> ', 
            $line = 14, 1 == isTurn && ($out += ' <th rowspan="2">中转成本小计</th> ', $line = 16), 
            $out += ' <th rowspan="2">毛利</th> <th width="80" rowspan="2">人均毛利</th> </tr> <tr class="bg-blur T-tr-fixed"> <th>团款</th> <th>购物佣金</th> <th>自费收入</th> <th>其它收入</th> <th>导游管理费</th> <th>保险</th> <th>车费</th> <th>餐费</th> <th>房费</th> <th>景区</th> <th>票务</th> <th>自费</th> <th>其它支出</th> <th>导服费</th> <th>购物导佣</th> <th>购物全陪</th> <th>自费导佣</th> <th>自费全陪</th> <th>导游结算扣款</th> ', 
            $line = 40, isTurn && ($out += " <th>车费</th> <th>餐费</th> <th>房费</th> <th>票务</th> <th>其他</th> ", 
            $line = 46), $out += " </tr> </thead> <tbody> ", $line = 50, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 51, $out += $escape(rs.financialId), $out += '"> <td rowspan="3"> ', 
                $line = 53, -1 != rs.billStatus && ($out += ' <a href="javascript:void(0)" class="T-toTripAccount h-touristGroupInfo"> ', 
                $line = 55), $out += " <p>", $line = 56, $out += $escape(rs.tripNumber), $out += '<span style="padding-left:10px;">', 
                $line = 56, 1 == rs.tripPlanType ? ($out += "团队", $line = 56) : 0 == rs.tripPlanType && ($out += "散客", 
                $line = 56), $out += "</span></p> <p>", $line = 57, $out += $escape(rs.lineProductName), 
                $out += "</p> <p>", $line = 58, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += ' <span class="F-float F-count" style="padding-left: 10px;">', $line = 58, 
                $out += $escape(rs.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 58, $out += $escape(rs.childCount), $out += "</span>小</p> <p>导游：", $line = 59, 
                $out += $escape(rs.guideName), $out += '<span style="padding-left:10px;">责任计调：', 
                $line = 59, $out += $escape(rs.creatorName), $out += "</span></p> ", $line = 60, 
                -1 != rs.billStatus && ($out += " </a> ", $line = 62), $out += ' </td> <td rowspan="3"> ', 
                $line = 65, -1 == rs.billStatus ? ($out += " 待报账 ", $line = 67) : 0 == rs.billStatus ? ($out += " 待审核 ", 
                $line = 69) : 1 == rs.billStatus ? ($out += " 计调已审 ", $line = 71) : 2 == rs.billStatus && ($out += " 财务已审 ", 
                $line = 73), $out += " </td> ", $line = 75, $each(rs.list, function(list, index) {
                    $out += " ", $line = 76, 0 == index && ($out += ' <td>应收/付</td> <td><span class="F-float F-money">', 
                    $line = 78, $out += $escape(list.needPayAllMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 79, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 80, $out += $escape(list.selfIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 81, $out += $escape(list.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 82, $out += $escape(list.guideMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 83, $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 84, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 85, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 86, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 87, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 88, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 89, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 90, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 91, $out += $escape(list.guideTip), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 92, $out += $escape(list.shopCostMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 93, $out += $escape(list.shopQuanpeiRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 94, $out += $escape(list.selfMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 95, $out += $escape(list.selfPayQuanpeiRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 96, $out += $escape(list.guideDeductions), $out += "</span></td> ", $line = 97, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 98, $out += $escape(list.outBusMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 99, $out += $escape(list.outRestaurantMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 100, $out += $escape(list.outHotelMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 101, $out += $escape(list.outTicketMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 102, $out += $escape(list.outOtherMoney), 
                    $out += "</span></td> ", $line = 103), $out += ' <td><span class="F-float F-money">', 
                    $line = 104, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 105, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 106, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 107, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 108, $out += $escape(list.totalOut), 
                    $out += "</span></td> ", $line = 109), $out += " ", $line = 110), $out += " ", $line = 111;
                }), $out += ' <td rowspan="3"><span class="F-float F-money">', $line = 112, $out += $escape(rs.profit), 
                $out += '</span></td> <td rowspan="3"><span class="F-float F-money">', $line = 113, 
                $out += $escape(rs.perCapitaProfit), $out += "</span></td> </tr> ", $line = 115, 
                $each(rs.list, function(list, index) {
                    $out += " ", $line = 116, index > 0 && ($out += " <tr><td>", $line = 117, 1 == index ? ($out += "已", 
                    $line = 117) : 2 == index && ($out += "未", $line = 117), $out += "收/付</td> <td>", 
                    $line = 118, 1 != isTurn ? ($out += "-", $line = 118) : ($out += '<span class="F-float F-money">', 
                    $line = 118, $out += $escape(list.needPayAllMoney), $out += "</span>", $line = 118), 
                    $out += '</td> <td><span class="F-float F-money">', $line = 119, $out += $escape(list.shopMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 120, 2 == index ? ($out += "-", 
                    $line = 120) : ($line = 120, $out += $escape(list.selfIncome), $line = 120), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 121, 2 == index ? ($out += "-", $line = 121) : ($line = 121, $out += $escape(list.incomeMoney), 
                    $line = 121), $out += '</span></td> <td><span class="F-float F-money">', $line = 122, 
                    list.guideMoney ? ($line = 122, $out += $escape(list.guideMoney), $line = 122) : ($out += "-", 
                    $line = 122), $out += '</span></td> <td><span class="F-float F-money">', $line = 123, 
                    $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 124, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 125, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 126, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 127, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 128, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 129, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 130, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 131, list.guideTip ? ($line = 131, $out += $escape(list.guideTip), $line = 131) : ($out += "-", 
                    $line = 131), $out += '</span></td> <td><span class="F-float F-money">', $line = 132, 
                    list.shopCostMoney ? ($line = 132, $out += $escape(list.shopCostMoney), $line = 132) : ($out += "-", 
                    $line = 132), $out += '</span></td> <td><span class="F-float F-money">', $line = 133, 
                    list.shopQuanpeiRebateMoney ? ($line = 133, $out += $escape(list.shopQuanpeiRebateMoney), 
                    $line = 133) : ($out += "-", $line = 133), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 134, list.selfMoney ? ($line = 134, $out += $escape(list.selfMoney), $line = 134) : ($out += "-", 
                    $line = 134), $out += '</span></td> <td><span class="F-float F-money">', $line = 135, 
                    list.selfPayQuanpeiRebateMoney ? ($line = 135, $out += $escape(list.selfPayQuanpeiRebateMoney), 
                    $line = 135) : ($out += "-", $line = 135), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 136, list.guideDeductions ? ($line = 136, $out += $escape(list.guideDeductions), 
                    $line = 136) : ($out += "-", $line = 136), $out += "</span></td> ", $line = 137, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 138, $out += $escape(list.outBusMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 139, $out += $escape(list.outRestaurantMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 140, $out += $escape(list.outHotelMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 141, $out += $escape(list.outTicketMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 142, $out += $escape(list.outOtherMoney), 
                    $out += "</span></td> ", $line = 143), $out += ' <td><span class="F-float F-money">', 
                    $line = 144, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 145, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 146, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 147, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 148, $out += $escape(list.totalOut), 
                    $out += "</span></td> ", $line = 149), $out += " </tr> ", $line = 151), $out += " ", 
                    $line = 152;
                }), $out += " ", $line = 153;
            }), $out += " ", $line = 154, result.length > 0 && ($out += ' <tr style="background: #fcf8e4;"> <td rowspan="3">小计</td> <td rowspan="3"></td> ', 
            $line = 158, $each(subtotal.list, function(list, index) {
                $out += " ", $line = 159, 0 == index && ($out += ' <td>应收/付</td> <td><span class="F-float F-money">', 
                $line = 161, $out += $escape(list.needPayAllMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 162, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 163, $out += $escape(list.selfIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 164, $out += $escape(list.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 165, $out += $escape(list.guideMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 166, $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 167, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 168, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 169, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 170, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 171, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 172, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 173, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 174, $out += $escape(list.guideTip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 175, $out += $escape(list.shopCostMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 176, $out += $escape(list.shopQuanpeiRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 177, $out += $escape(list.selfMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 178, $out += $escape(list.selfPayQuanpeiRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 179, $out += $escape(list.guideDeductions), $out += "</span></td> ", $line = 180, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 181, $out += $escape(list.outBusMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 182, $out += $escape(list.outRestaurantMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 183, $out += $escape(list.outHotelMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 184, $out += $escape(list.outTicketMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 185, $out += $escape(list.outOtherMoney), 
                $out += "</span></td> ", $line = 186), $out += ' <td><span class="F-float F-money">', 
                $line = 187, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 188, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 189, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 190, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 191, $out += $escape(list.totalOut), 
                $out += "</span></td> ", $line = 192), $out += " ", $line = 193), $out += " ", $line = 194;
            }), $out += ' <td rowspan="3"><span class="F-float F-money">', $line = 195, $out += $escape(subtotal.profit), 
            $out += '</span></td> <td rowspan="3"><span class="F-float F-money">', $line = 196, 
            $out += $escape(subtotal.perCapitaProfit), $out += "</span></td> </tr> ", $line = 198, 
            $each(subtotal.list, function(list, index) {
                $out += " ", $line = 199, index > 0 && ($out += ' <tr style="background: #fcf8e4;"> <td>', 
                $line = 201, 1 == index ? ($out += "已", $line = 201) : 2 == index && ($out += "未", 
                $line = 201), $out += "收/付</td> <td>", $line = 202, 1 != isTurn ? ($out += "-", 
                $line = 202) : ($out += '<span class="F-float F-money">', $line = 202, $out += $escape(list.needPayAllMoney), 
                $out += "</span>", $line = 202), $out += '</td> <td><span class="F-float F-money">', 
                $line = 203, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 204, 2 == index ? ($out += "-", $line = 204) : ($line = 204, $out += $escape(list.selfIncome), 
                $line = 204), $out += '</span></td> <td><span class="F-float F-money">', $line = 205, 
                2 == index ? ($out += "-", $line = 205) : ($line = 205, $out += $escape(list.incomeMoney), 
                $line = 205), $out += '</span></td> <td><span class="F-float F-money">', $line = 206, 
                list.guideMoney ? ($line = 206, $out += $escape(list.guideMoney), $line = 206) : ($out += "-", 
                $line = 206), $out += '</span></td> <td><span class="F-float F-money">', $line = 207, 
                $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 208, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 209, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 210, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 211, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 212, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 213, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 214, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 215, list.guideTip ? ($line = 215, $out += $escape(list.guideTip), $line = 215) : ($out += "-", 
                $line = 215), $out += '</span></td> <td><span class="F-float F-money">', $line = 216, 
                list.shopCostMoney ? ($line = 216, $out += $escape(list.shopCostMoney), $line = 216) : ($out += "-", 
                $line = 216), $out += '</span></td> <td><span class="F-float F-money">', $line = 217, 
                list.shopQuanpeiRebateMoney ? ($line = 217, $out += $escape(list.shopQuanpeiRebateMoney), 
                $line = 217) : ($out += "-", $line = 217), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 218, list.selfMoney ? ($line = 218, $out += $escape(list.selfMoney), $line = 218) : ($out += "-", 
                $line = 218), $out += '</span></td> <td><span class="F-float F-money">', $line = 219, 
                list.selfPayQuanpeiRebateMoney ? ($line = 219, $out += $escape(list.selfPayQuanpeiRebateMoney), 
                $line = 219) : ($out += "-", $line = 219), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 220, list.guideDeductions ? ($line = 220, $out += $escape(list.guideDeductions), 
                $line = 220) : ($out += "-", $line = 220), $out += "</span></td> ", $line = 221, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 222, $out += $escape(list.outBusMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 223, $out += $escape(list.outRestaurantMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 224, $out += $escape(list.outHotelMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 225, $out += $escape(list.outTicketMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 226, $out += $escape(list.outOtherMoney), 
                $out += "</span></td> ", $line = 227), $out += ' <td><span class="F-float F-money">', 
                $line = 228, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 229, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 230, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 231, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 232, $out += $escape(list.totalOut), 
                $out += "</span></td> ", $line = 233), $out += " </tr> ", $line = 235), $out += " ", 
                $line = 236;
            }), $out += " ", $line = 237), $out += " </tbody>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<thead>\r\n	<tr class="bg-blur T-tr-fixed">\r\n		<th rowspan="2" style="min-width: 180px">团信息</th>\r\n		<th rowspan="2">状态</th>\r\n		<th rowspan="2" style="width:60px;">收/付</th>\r\n		<th colspan="5">发团收入</th>\r\n		<th colspan="14">发团成本</th>\r\n		{{if isTurn == 1}}\r\n		<th colspan="5">中转成本</th>\r\n		{{/if}}\r\n		<th rowspan="2">导游退补小计</th>\r\n		<th rowspan="2">收入小计</th>\r\n		<th rowspan="2">发团成本小计</th>\r\n		{{if isTurn == 1}}\r\n		<th rowspan="2">中转成本小计</th>\r\n		{{/if}}\r\n		<th rowspan="2">毛利</th>\r\n		<th width="80" rowspan="2">人均毛利</th>\r\n	</tr>\r\n	<tr class="bg-blur T-tr-fixed">\r\n		<th>团款</th>\r\n		<th>购物佣金</th>\r\n		<th>自费收入</th>\r\n		<th>其它收入</th>\r\n		<th>导游管理费</th>\r\n		<th>保险</th>\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>景区</th>\r\n		<th>票务</th>\r\n		<th>自费</th>\r\n		<th>其它支出</th>\r\n		<th>导服费</th>\r\n		<th>购物导佣</th>\r\n		<th>购物全陪</th>\r\n		<th>自费导佣</th>\r\n		<th>自费全陪</th>\r\n		<th>导游结算扣款</th>\r\n		{{if isTurn}}\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>票务</th>\r\n		<th>其他</th>\r\n		{{/if}}\r\n	</tr>\r\n</thead>\r\n<tbody>\r\n	{{each result as rs}}\r\n	<tr data-id="{{rs.financialId}}">\r\n		<td rowspan="3">\r\n			{{if rs.billStatus != -1}}\r\n				<a href="javascript:void(0)" class="T-toTripAccount h-touristGroupInfo">\r\n			{{/if}}\r\n				<p>{{rs.tripNumber}}<span style="padding-left:10px;">{{if rs.tripPlanType == 1}}团队{{else if rs.tripPlanType == 0}}散客{{/if}}</span></p>\r\n				<p>{{rs.lineProductName}}</p>\r\n				<p>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}} <span class="F-float F-count" style="padding-left: 10px;">{{rs.adultCount}}</span>大<span class="F-float F-count">{{rs.childCount}}</span>小</p>\r\n				<p>导游：{{rs.guideName}}<span style="padding-left:10px;">责任计调：{{rs.creatorName}}</span></p>\r\n			{{if rs.billStatus != -1}}\r\n				</a>\r\n			{{/if}}\r\n		</td>\r\n		<td rowspan="3">\r\n			{{if rs.billStatus == -1}}\r\n				待报账\r\n			{{else if rs.billStatus == 0}}\r\n				待审核\r\n			{{else if rs.billStatus == 1}}\r\n				计调已审\r\n			{{else if rs.billStatus == 2}}\r\n				财务已审\r\n			{{/if}}\r\n		</td>\r\n		{{each rs.list as list index}}\r\n		{{if index == 0}}\r\n		<td>应收/付</td>\r\n		<td><span class="F-float F-money">{{list.needPayAllMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideTip}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopCostMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopQuanpeiRebateMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayQuanpeiRebateMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideDeductions}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n		{{/if}}\r\n		{{/if}}\r\n		{{/each}}\r\n		<td rowspan="3"><span class="F-float F-money">{{rs.profit}}</span></td>\r\n		<td rowspan="3"><span class="F-float F-money">{{rs.perCapitaProfit}}</span></td>\r\n	</tr>\r\n	{{each rs.list as list index}}\r\n		{{if index > 0}}\r\n		<tr><td>{{if index == 1}}已{{else if index == 2}}未{{/if}}收/付</td>\r\n			<td>{{if isTurn != 1}}-{{else}}<span class="F-float F-money">{{list.needPayAllMoney}}</span>{{/if}}</td>\r\n			<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{if index == 2}}-{{else}}{{list.selfIncome}}{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if index == 2}}-{{else}}{{list.incomeMoney}}{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideMoney}}{{list.guideMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideTip}}{{list.guideTip}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.shopCostMoney}}{{list.shopCostMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.shopQuanpeiRebateMoney}}{{list.shopQuanpeiRebateMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.selfMoney}}{{list.selfMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.selfPayQuanpeiRebateMoney}}{{list.selfPayQuanpeiRebateMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideDeductions}}{{list.guideDeductions}}{{else}}-{{/if}}</span></td>\r\n			{{if isTurn == 1}}\r\n			<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n			{{/if}}\r\n			<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n			<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n			{{if isTurn == 1}}\r\n			<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n			{{/if}}\r\n		</tr>\r\n		{{/if}}\r\n	{{/each}}\r\n	{{/each}}\r\n	{{if result.length > 0}}\r\n	<tr style="background: #fcf8e4;">\r\n		<td rowspan="3">小计</td>\r\n		<td rowspan="3"></td>\r\n		{{each subtotal.list as list index}}\r\n		{{if index == 0}}\r\n		<td>应收/付</td>\r\n		<td><span class="F-float F-money">{{list.needPayAllMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideTip}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopCostMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopQuanpeiRebateMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayQuanpeiRebateMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideDeductions}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n		{{/if}}\r\n		{{/if}}\r\n		{{/each}}\r\n		<td rowspan="3"><span class="F-float F-money">{{subtotal.profit}}</span></td>\r\n		<td rowspan="3"><span class="F-float F-money">{{subtotal.perCapitaProfit}}</span></td>\r\n	</tr>\r\n	{{each subtotal.list as list index}}\r\n		{{if index > 0}}\r\n			<tr style="background: #fcf8e4;">\r\n				<td>{{if index == 1}}已{{else if index == 2}}未{{/if}}收/付</td>\r\n				<td>{{if isTurn != 1}}-{{else}}<span class="F-float F-money">{{list.needPayAllMoney}}</span>{{/if}}</td>\r\n				<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{if index == 2}}-{{else}}{{list.selfIncome}}{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if index == 2}}-{{else}}{{list.incomeMoney}}{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideMoney}}{{list.guideMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideTip}}{{list.guideTip}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.shopCostMoney}}{{list.shopCostMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.shopQuanpeiRebateMoney}}{{list.shopQuanpeiRebateMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.selfMoney}}{{list.selfMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.selfPayQuanpeiRebateMoney}}{{list.selfPayQuanpeiRebateMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideDeductions}}{{list.guideDeductions}}{{else}}-{{/if}}</span></td>\r\n				{{if isTurn == 1}}\r\n				<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n				{{/if}}\r\n				<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n				<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n				{{if isTurn == 1}}\r\n				<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n				{{/if}}\r\n			</tr>\r\n		{{/if}}\r\n	{{/each}}\r\n	{{/if}}\r\n</tbody>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});