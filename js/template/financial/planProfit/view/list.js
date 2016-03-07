/*TMODJS:{"debug":true,"version":533,"md5":"5fdad7bb39d6217a8489027b5b28dfef"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, isTurn = $data.isTurn, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), subtotal = ($data.list, $data.index, $data.subtotal), $out = "";
            return $out += '<thead> <tr class="bg-blur"> <th rowspan="2">团信息</th> <th rowspan="2">状态</th> <th rowspan="2" style="width:60px;">收/付</th> <th colspan="5">发团收入</th> <th colspan="12">发团成本</th> ', 
            $line = 8, 1 == isTurn && ($out += ' <th colspan="5">中转成本</th> ', $line = 10), $out += ' <th rowspan="2">导游退补小计</th> <th rowspan="2">收入小计</th> <th rowspan="2">发团成本小计</th> ', 
            $line = 14, 1 == isTurn && ($out += ' <th rowspan="2">中转成本小计</th> ', $line = 16), 
            $out += ' <th rowspan="2">毛利</th> <th width="80" rowspan="2">人均毛利</th> </tr> <tr class="bg-blur"> <th>团款</th> <th>购物佣金</th> <th>自费收入</th> <th>其它收入</th> <th>导游管理费</th> <th>保险</th> <th>车费</th> <th>餐费</th> <th>房费</th> <th>景区</th> <th>票务</th> <th>自费</th> <th>其它支出</th> <th>导服费</th> <th>购物导佣</th> <th>自费导佣</th> <th>导游结算扣款</th> ', 
            $line = 38, isTurn && ($out += " <th>车费</th> <th>餐费</th> <th>房费</th> <th>票务</th> <th>其他</th> ", 
            $line = 44), $out += " </tr> </thead> <tbody> ", $line = 48, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 49, $out += $escape(rs.financialId), $out += '"> <td rowspan="3"> ', 
                $line = 51, $out += $escape(rs.tripNumber), $out += '<span style="padding-left:10px;">', 
                $line = 51, 1 == rs.tripPlanType ? ($out += "团队", $line = 51) : 0 == rs.tripPlanType && ($out += "散客", 
                $line = 51), $out += "</span><br /> ", $line = 52, $out += $escape(rs.lineProductName), 
                $out += "<br /> ", $line = 53, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += ' <span class="F-float F-count" style="padding-left: 10px;">', $line = 53, 
                $out += $escape(rs.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 53, $out += $escape(rs.childCount), $out += "</span>小<br /> 导游：", $line = 54, 
                $out += $escape(rs.guideName), $out += '<span style="padding-left:10px;">责任计调：', 
                $line = 54, $out += $escape(rs.creatorName), $out += '</span> </td> <td rowspan="3"> ', 
                $line = 57, -1 == rs.billStatus ? ($out += " 待报账 ", $line = 59) : 0 == rs.billStatus ? ($out += " 待审核 ", 
                $line = 61) : 1 == rs.billStatus ? ($out += " 计调已审 ", $line = 63) : 2 == rs.billStatus && ($out += " 财务已审 ", 
                $line = 65), $out += " </td> ", $line = 67, $each(rs.list, function(list, index) {
                    $out += " ", $line = 68, 0 == index && ($out += ' <td>应收/付</td> <td><span class="F-float F-money">', 
                    $line = 70, $out += $escape(list.needPayAllMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 71, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 72, $out += $escape(list.selfIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 73, $out += $escape(list.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 74, $out += $escape(list.guideMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 75, $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 76, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 77, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 78, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 79, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 80, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 81, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 82, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 83, $out += $escape(list.guideTip), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 84, $out += $escape(list.shopCostMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 85, $out += $escape(list.selfMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 86, $out += $escape(list.guideDeductions), $out += "</span></td> ", $line = 87, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 88, $out += $escape(list.outBusMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 89, $out += $escape(list.outRestaurantMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 90, $out += $escape(list.outHotelMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 91, $out += $escape(list.outTicketMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 92, $out += $escape(list.outOtherMoney), 
                    $out += "</span></td> ", $line = 93), $out += ' <td><span class="F-float F-money">', 
                    $line = 94, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 95, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 96, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 97, 
                    1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 98, $out += $escape(list.totalOut), 
                    $out += "</span></td> ", $line = 99), $out += " ", $line = 100), $out += " ", $line = 101;
                }), $out += ' <td rowspan="3"><span class="F-float F-money">', $line = 102, $out += $escape(rs.profit), 
                $out += '</span></td> <td rowspan="3"><span class="F-float F-money">', $line = 103, 
                $out += $escape(rs.perCapitaProfit), $out += "</span></td> </tr> ", $line = 105, 
                $each(rs.list, function(list, index) {
                    $out += " ", $line = 106, index > 0 && ($out += " <tr><td>", $line = 107, 1 == index ? ($out += "已", 
                    $line = 107) : 2 == index && ($out += "未", $line = 107), $out += "收/付</td> <td>", 
                    $line = 108, 1 != isTurn ? ($out += "-", $line = 108) : ($out += '<span class="F-float F-money">', 
                    $line = 108, $out += $escape(list.needPayAllMoney), $out += "</span>", $line = 108), 
                    $out += '</td> <td><span class="F-float F-money">', $line = 109, $out += $escape(list.shopMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 110, $out += $escape(list.selfIncome), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 111, $out += $escape(list.incomeMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 112, list.guideMoney ? ($line = 112, 
                    $out += $escape(list.guideMoney), $line = 112) : ($out += "-", $line = 112), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 113, $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 114, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 115, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 116, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 117, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 118, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 119, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 120, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 121, list.guideTip ? ($line = 121, $out += $escape(list.guideTip), $line = 121) : ($out += "-", 
                    $line = 121), $out += '</span></td> <td><span class="F-float F-money">', $line = 122, 
                    list.shopCostMoney ? ($line = 122, $out += $escape(list.shopCostMoney), $line = 122) : ($out += "-", 
                    $line = 122), $out += '</span></td> <td><span class="F-float F-money">', $line = 123, 
                    list.selfMoney ? ($line = 123, $out += $escape(list.selfMoney), $line = 123) : ($out += "-", 
                    $line = 123), $out += '</span></td> <td><span class="F-float F-money">', $line = 124, 
                    list.guideDeductions ? ($line = 124, $out += $escape(list.guideDeductions), $line = 124) : ($out += "-", 
                    $line = 124), $out += "</span></td> ", $line = 125, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                    $line = 126, $out += $escape(list.outBusMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 127, $out += $escape(list.outRestaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 128, $out += $escape(list.outHotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 129, $out += $escape(list.outTicketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 130, $out += $escape(list.outOtherMoney), $out += "</span></td> ", $line = 131), 
                    $out += ' <td><span class="F-float F-money">', $line = 132, $out += $escape(list.guideBackPaySMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 133, $out += $escape(list.totalIncome), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 134, $out += $escape(list.totalTrip), 
                    $out += "</span></td> ", $line = 135, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                    $line = 136, $out += $escape(list.totalOut), $out += "</span></td> ", $line = 137), 
                    $out += " </tr> ", $line = 139), $out += " ", $line = 140;
                }), $out += " ", $line = 141;
            }), $out += " ", $line = 142, result.length > 0 && ($out += ' <tr style="background: #fcf8e4;"> <td rowspan="3">小计</td> <td rowspan="3"></td> ', 
            $line = 146, $each(subtotal.list, function(list, index) {
                $out += " ", $line = 147, 0 == index && ($out += ' <td>应收/付</td> <td><span class="F-float F-money">', 
                $line = 149, $out += $escape(list.needPayAllMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 150, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 151, $out += $escape(list.selfIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 152, $out += $escape(list.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 153, $out += $escape(list.guideMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 154, $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 155, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 156, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 157, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 158, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 159, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 160, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 161, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 162, $out += $escape(list.guideTip), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 163, $out += $escape(list.shopCostMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 164, $out += $escape(list.selfMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 165, $out += $escape(list.guideDeductions), $out += "</span></td> ", $line = 166, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 167, $out += $escape(list.outBusMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 168, $out += $escape(list.outRestaurantMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 169, $out += $escape(list.outHotelMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 170, $out += $escape(list.outTicketMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 171, $out += $escape(list.outOtherMoney), 
                $out += "</span></td> ", $line = 172), $out += ' <td><span class="F-float F-money">', 
                $line = 173, $out += $escape(list.guideBackPaySMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 174, $out += $escape(list.totalIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 175, $out += $escape(list.totalTrip), $out += "</span></td> ", $line = 176, 
                1 == isTurn && ($out += ' <td><span class="F-float F-money">', $line = 177, $out += $escape(list.totalOut), 
                $out += "</span></td> ", $line = 178), $out += " ", $line = 179), $out += " ", $line = 180;
            }), $out += ' <td rowspan="3"><span class="F-float F-money">', $line = 181, $out += $escape(subtotal.profit), 
            $out += '</span></td> <td rowspan="3"><span class="F-float F-money">', $line = 182, 
            $out += $escape(subtotal.perCapitaProfit), $out += "</span></td> </tr> ", $line = 184, 
            $each(subtotal.list, function(list, index) {
                $out += " ", $line = 185, index > 0 && ($out += ' <tr style="background: #fcf8e4;"> <td>', 
                $line = 187, 1 == index ? ($out += "已", $line = 187) : 2 == index && ($out += "未", 
                $line = 187), $out += "收/付</td> <td>", $line = 188, 1 != isTurn ? ($out += "-", 
                $line = 188) : ($out += '<span class="F-float F-money">', $line = 188, $out += $escape(list.needPayAllMoney), 
                $out += "</span>", $line = 188), $out += '</td> <td><span class="F-float F-money">', 
                $line = 189, $out += $escape(list.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 190, $out += $escape(list.selfIncome), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 191, $out += $escape(list.incomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 192, list.guideMoney ? ($line = 192, $out += $escape(list.guideMoney), $line = 192) : ($out += "-", 
                $line = 192), $out += '</span></td> <td><span class="F-float F-money">', $line = 193, 
                $out += $escape(list.insuranceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 194, $out += $escape(list.busMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 195, $out += $escape(list.restaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 196, $out += $escape(list.hotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 197, $out += $escape(list.scenicMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 198, $out += $escape(list.ticketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 199, $out += $escape(list.selfPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 200, $out += $escape(list.otherMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 201, list.guideTip ? ($line = 201, $out += $escape(list.guideTip), $line = 201) : ($out += "-", 
                $line = 201), $out += '</span></td> <td><span class="F-float F-money">', $line = 202, 
                list.shopCostMoney ? ($line = 202, $out += $escape(list.shopCostMoney), $line = 202) : ($out += "-", 
                $line = 202), $out += '</span></td> <td><span class="F-float F-money">', $line = 203, 
                list.selfMoney ? ($line = 203, $out += $escape(list.selfMoney), $line = 203) : ($out += "-", 
                $line = 203), $out += '</span></td> <td><span class="F-float F-money">', $line = 204, 
                list.guideDeductions ? ($line = 204, $out += $escape(list.guideDeductions), $line = 204) : ($out += "-", 
                $line = 204), $out += "</span></td> ", $line = 205, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                $line = 206, $out += $escape(list.outBusMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 207, $out += $escape(list.outRestaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 208, $out += $escape(list.outHotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 209, $out += $escape(list.outTicketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 210, $out += $escape(list.outOtherMoney), $out += "</span></td> ", $line = 211), 
                $out += ' <td><span class="F-float F-money">', $line = 212, $out += $escape(list.guideBackPaySMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 213, $out += $escape(list.totalIncome), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 214, $out += $escape(list.totalTrip), 
                $out += "</span></td> ", $line = 215, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                $line = 216, $out += $escape(list.totalOut), $out += "</span></td> ", $line = 217), 
                $out += " </tr> ", $line = 219), $out += " ", $line = 220;
            }), $out += " ", $line = 221), $out += " </tbody>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<thead>\r\n	<tr class="bg-blur">\r\n		<th rowspan="2">团信息</th>\r\n		<th rowspan="2">状态</th>\r\n		<th rowspan="2" style="width:60px;">收/付</th>\r\n		<th colspan="5">发团收入</th>\r\n		<th colspan="12">发团成本</th>\r\n		{{if isTurn == 1}}\r\n		<th colspan="5">中转成本</th>\r\n		{{/if}}\r\n		<th rowspan="2">导游退补小计</th>\r\n		<th rowspan="2">收入小计</th>\r\n		<th rowspan="2">发团成本小计</th>\r\n		{{if isTurn == 1}}\r\n		<th rowspan="2">中转成本小计</th>\r\n		{{/if}}\r\n		<th rowspan="2">毛利</th>\r\n		<th width="80" rowspan="2">人均毛利</th>\r\n	</tr>\r\n	<tr class="bg-blur">\r\n		<th>团款</th>\r\n		<th>购物佣金</th>\r\n		<th>自费收入</th>\r\n		<th>其它收入</th>\r\n		<th>导游管理费</th>\r\n		<th>保险</th>\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>景区</th>\r\n		<th>票务</th>\r\n		<th>自费</th>\r\n		<th>其它支出</th>\r\n		<th>导服费</th>\r\n		<th>购物导佣</th>\r\n		<th>自费导佣</th>\r\n		<th>导游结算扣款</th>\r\n		{{if isTurn}}\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>票务</th>\r\n		<th>其他</th>\r\n		{{/if}}\r\n	</tr>\r\n</thead>\r\n<tbody>\r\n	{{each result as rs}}\r\n	<tr data-id="{{rs.financialId}}">\r\n		<td rowspan="3">\r\n			{{rs.tripNumber}}<span style="padding-left:10px;">{{if rs.tripPlanType == 1}}团队{{else if rs.tripPlanType == 0}}散客{{/if}}</span><br />\r\n			{{rs.lineProductName}}<br />\r\n			{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}} <span class="F-float F-count" style="padding-left: 10px;">{{rs.adultCount}}</span>大<span class="F-float F-count">{{rs.childCount}}</span>小<br />\r\n			导游：{{rs.guideName}}<span style="padding-left:10px;">责任计调：{{rs.creatorName}}</span>\r\n		</td>\r\n		<td rowspan="3">\r\n			{{if rs.billStatus == -1}}\r\n				待报账\r\n			{{else if rs.billStatus == 0}}\r\n				待审核\r\n			{{else if rs.billStatus == 1}}\r\n				计调已审\r\n			{{else if rs.billStatus == 2}}\r\n				财务已审\r\n			{{/if}}\r\n		</td>\r\n		{{each rs.list as list index}}\r\n		{{if index == 0}}\r\n		<td>应收/付</td>\r\n		<td><span class="F-float F-money">{{list.needPayAllMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideTip}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopCostMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideDeductions}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n		{{/if}}\r\n		{{/if}}\r\n		{{/each}}\r\n		<td rowspan="3"><span class="F-float F-money">{{rs.profit}}</span></td>\r\n		<td rowspan="3"><span class="F-float F-money">{{rs.perCapitaProfit}}</span></td>\r\n	</tr>\r\n	{{each rs.list as list index}}\r\n		{{if index > 0}}\r\n		<tr><td>{{if index == 1}}已{{else if index == 2}}未{{/if}}收/付</td>\r\n			<td>{{if isTurn != 1}}-{{else}}<span class="F-float F-money">{{list.needPayAllMoney}}</span>{{/if}}</td>\r\n			<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n			<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideMoney}}{{list.guideMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideTip}}{{list.guideTip}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.shopCostMoney}}{{list.shopCostMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.selfMoney}}{{list.selfMoney}}{{else}}-{{/if}}</span></td>\r\n			<td><span class="F-float F-money">{{if !!list.guideDeductions}}{{list.guideDeductions}}{{else}}-{{/if}}</span></td>\r\n			{{if isTurn == 1}}\r\n			<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n			{{/if}}\r\n			<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n			<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n			<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n			{{if isTurn == 1}}\r\n			<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n			{{/if}}\r\n		</tr>\r\n		{{/if}}\r\n	{{/each}}\r\n	{{/each}}\r\n	{{if result.length > 0}}\r\n	<tr style="background: #fcf8e4;">\r\n		<td rowspan="3">小计</td>\r\n		<td rowspan="3"></td>\r\n		{{each subtotal.list as list index}}\r\n		{{if index == 0}}\r\n		<td>应收/付</td>\r\n		<td><span class="F-float F-money">{{list.needPayAllMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideTip}}</span></td>\r\n		<td><span class="F-float F-money">{{list.shopCostMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.selfMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.guideDeductions}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n		{{/if}}\r\n		{{/if}}\r\n		{{/each}}\r\n		<td rowspan="3"><span class="F-float F-money">{{subtotal.profit}}</span></td>\r\n		<td rowspan="3"><span class="F-float F-money">{{subtotal.perCapitaProfit}}</span></td>\r\n	</tr>\r\n	{{each subtotal.list as list index}}\r\n		{{if index > 0}}\r\n			<tr style="background: #fcf8e4;">\r\n				<td>{{if index == 1}}已{{else if index == 2}}未{{/if}}收/付</td>\r\n				<td>{{if isTurn != 1}}-{{else}}<span class="F-float F-money">{{list.needPayAllMoney}}</span>{{/if}}</td>\r\n				<td><span class="F-float F-money">{{list.shopMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.selfIncome}}</span></td>\r\n				<td><span class="F-float F-money">{{list.incomeMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideMoney}}{{list.guideMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{list.insuranceMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.busMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.restaurantMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.hotelMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.scenicMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.ticketMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.selfPayMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.otherMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideTip}}{{list.guideTip}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.shopCostMoney}}{{list.shopCostMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.selfMoney}}{{list.selfMoney}}{{else}}-{{/if}}</span></td>\r\n				<td><span class="F-float F-money">{{if !!list.guideDeductions}}{{list.guideDeductions}}{{else}}-{{/if}}</span></td>\r\n				{{if isTurn == 1}}\r\n				<td><span class="F-float F-money">{{list.outBusMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outRestaurantMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outHotelMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outTicketMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.outOtherMoney}}</span></td>\r\n				{{/if}}\r\n				<td><span class="F-float F-money">{{list.guideBackPaySMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{list.totalIncome}}</span></td>\r\n				<td><span class="F-float F-money">{{list.totalTrip}}</span></td>\r\n				{{if isTurn == 1}}\r\n				<td><span class="F-float F-money">{{list.totalOut}}</span></td>\r\n				{{/if}}\r\n			</tr>\r\n		{{/if}}\r\n	{{/each}}\r\n	{{/if}}\r\n</tbody>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});