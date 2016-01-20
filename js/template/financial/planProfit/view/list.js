/*TMODJS:{"debug":true,"version":262,"md5":"318c0ab918ea0b12a2fa9f93067a15a0"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, isTurn = $data.isTurn, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<thead> <tr class="bg-blur"> <th rowspan="2">团号</th> <th rowspan="2" style="width:150px;">线路产品</th> <th rowspan="2">针对客源</th> <th rowspan="2">出游日期</th> <th rowspan="2">人数</th> <th rowspan="2">导游</th> <th rowspan="2">责任计调</th> <th rowspan="2">状态</th> <th colspan="5">收入</th> <th colspan="11">发团成本</th> ', 
            $line = 13, 1 == isTurn && ($out += ' <th colspan="5">中转成本</th> ', $line = 15), 
            $out += ' <th rowspan="2">收入小计</th> <th rowspan="2">发团成本小计</th> ', $line = 18, 1 == isTurn && ($out += ' <th rowspan="2">中转成本小计</th> ', 
            $line = 20), $out += ' <th rowspan="2">毛利</th> <th rowspan="2">人均毛利</th> </tr> <tr class="bg-blur"> <th>团款</th> <th>购物佣金</th> <th>自费</th> <th>其它收入</th> <th>导游管理费</th> <th>导服费</th> <th>保险</th> <th>车费</th> <th>餐费</th> <th>房费</th> <th>景区</th> <th>票务</th> <th>其它支出</th> <th>购物导佣</th> <th>自费导佣</th> <th>导游结算扣款</th> ', 
            $line = 41, isTurn && ($out += " <th>车费</th> <th>餐费</th> <th>房费</th> <th>票务</th> <th>其他</th> ", 
            $line = 47), $out += ' </tr> </thead> <tbody class="T-planProfit-list"> ', $line = 51, 
            $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 52, $out += $escape(rs.financialId), $out += '"> <td><a class="T-tripDetail">', 
                $line = 53, $out += $escape(rs.tripNumber), $out += "</a></td> <td>", $line = 54, 
                $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 55, 1 == rs.tripPlanType ? ($out += "团队", 
                $line = 55) : 0 == rs.tripPlanType && ($out += "散客", $line = 55), $out += "</td> <td>", 
                $line = 56, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += '</td> <td><span class="F-float F-count">', 
                $line = 57, $out += $escape(rs.adultCount), $out += '</span> 大 <span class="F-float F-count">', 
                $line = 57, $out += $escape(rs.childCount), $out += "</span> 小</td> <td>", $line = 58, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 59, $out += $escape(rs.creatorName), 
                $out += "</td> <td>", $line = 60, -1 == rs.billStatus ? ($out += " 待报账 ", $line = 62) : 0 == rs.billStatus ? ($out += " 待审核 ", 
                $line = 64) : 1 == rs.billStatus ? ($out += " 计调已审 ", $line = 66) : 2 == rs.billStatus && ($out += " 财务已审 ", 
                $line = 68), $out += ' </td> <td><span class="F-float F-money">', $line = 70, $out += $escape(rs.needPayAllMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 71, $out += $escape(rs.shopMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 72, $out += $escape(rs.selfPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 73, $out += $escape(rs.incomeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 74, $out += $escape(rs.guideMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 75, $out += $escape(rs.guideTip), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 76, $out += $escape(rs.insuranceMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 77, $out += $escape(rs.busMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 78, $out += $escape(rs.restaurantMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 79, $out += $escape(rs.hotelMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 80, $out += $escape(rs.scenicMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 81, $out += $escape(rs.ticketMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 82, $out += $escape(rs.otherMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 83, $out += $escape(rs.shopCostMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 84, $out += $escape(rs.selfMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 85, $out += $escape(rs.guideDeductions), 
                $out += "</span></td> ", $line = 86, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                $line = 87, $out += $escape(rs.outBusMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 88, $out += $escape(rs.outRestaurantMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 89, $out += $escape(rs.outHotelMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 90, $out += $escape(rs.outTicketMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 91, $out += $escape(rs.outOtherMoney), $out += "</span></td> ", $line = 92), 
                $out += ' <td><span class="F-float F-money">', $line = 93, $out += $escape(rs.totalIncome), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 94, $out += $escape(rs.totalTrip), 
                $out += "</span></td> ", $line = 95, 1 == isTurn && ($out += ' <td><span class="F-float F-money">', 
                $line = 96, $out += $escape(rs.totalOut), $out += "</span></td> ", $line = 97), 
                $out += ' <td><span class="F-float F-money">', $line = 98, $out += $escape(rs.profit), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 99, $out += $escape(rs.perCapitaProfit), 
                $out += "</span></td> </tr> ", $line = 101;
            }), $out += " </tbody>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<thead>\r\n	<tr class="bg-blur">\r\n		<th rowspan="2">团号</th>\r\n		<th rowspan="2" style="width:150px;">线路产品</th>\r\n		<th rowspan="2">针对客源</th>\r\n		<th rowspan="2">出游日期</th>\r\n		<th rowspan="2">人数</th>\r\n		<th rowspan="2">导游</th>\r\n		<th rowspan="2">责任计调</th>\r\n		<th rowspan="2">状态</th>\r\n		<th colspan="5">收入</th>\r\n		<th colspan="11">发团成本</th>\r\n		{{if isTurn == 1}}\r\n		<th colspan="5">中转成本</th>\r\n		{{/if}}\r\n		<th rowspan="2">收入小计</th>\r\n		<th rowspan="2">发团成本小计</th>\r\n		{{if isTurn == 1}}\r\n		<th rowspan="2">中转成本小计</th>\r\n		{{/if}}\r\n		<th rowspan="2">毛利</th>\r\n		<th rowspan="2">人均毛利</th>\r\n	</tr>\r\n	<tr class="bg-blur">\r\n		<th>团款</th>\r\n		<th>购物佣金</th>\r\n		<th>自费</th>\r\n		<th>其它收入</th>\r\n		<th>导游管理费</th>\r\n		<th>导服费</th>\r\n		<th>保险</th>\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>景区</th>\r\n		<th>票务</th>\r\n		<th>其它支出</th>\r\n		<th>购物导佣</th>\r\n		<th>自费导佣</th>\r\n		<th>导游结算扣款</th>\r\n		{{if isTurn}}\r\n		<th>车费</th>\r\n		<th>餐费</th>\r\n		<th>房费</th>\r\n		<th>票务</th>\r\n		<th>其他</th>\r\n		{{/if}}\r\n	</tr>\r\n</thead>\r\n<tbody class="T-planProfit-list">\r\n	{{each result as rs}}\r\n	<tr data-id="{{rs.financialId}}">\r\n		<td><a class="T-tripDetail">{{rs.tripNumber}}</a></td>\r\n		<td>{{rs.lineProductName}}</td>\r\n		<td>{{if rs.tripPlanType == 1}}团队{{else if rs.tripPlanType == 0}}散客{{/if}}</td>\r\n		<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n		<td><span class="F-float F-count">{{rs.adultCount}}</span> 大 <span class="F-float F-count">{{rs.childCount}}</span> 小</td>\r\n		<td>{{rs.guideName}}</td>\r\n		<td>{{rs.creatorName}}</td>\r\n		<td>{{if rs.billStatus == -1}}\r\n				待报账\r\n			{{else if rs.billStatus == 0}}\r\n				待审核\r\n			{{else if rs.billStatus == 1}}\r\n				计调已审\r\n			{{else if rs.billStatus == 2}}\r\n				财务已审\r\n			{{/if}}\r\n		</td>\r\n		<td><span class="F-float F-money">{{rs.needPayAllMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.shopMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.selfPayMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.incomeMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.guideMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.guideTip}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.insuranceMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.busMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.restaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.hotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.scenicMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.ticketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.otherMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.shopCostMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.selfMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.guideDeductions}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{rs.outBusMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.outRestaurantMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.outHotelMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.outTicketMoney}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.outOtherMoney}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{rs.totalIncome}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.totalTrip}}</span></td>\r\n		{{if isTurn == 1}}\r\n		<td><span class="F-float F-money">{{rs.totalOut}}</span></td>\r\n		{{/if}}\r\n		<td><span class="F-float F-money">{{rs.profit}}</span></td>\r\n		<td><span class="F-float F-money">{{rs.perCapitaProfit}}</span></td>\r\n	</tr>\r\n	{{/each}}\r\n</tbody>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});