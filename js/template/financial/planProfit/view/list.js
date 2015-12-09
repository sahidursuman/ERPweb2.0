/*TMODJS:{"debug":true,"version":193,"md5":"b95f8a44411fe4e4f0569776d2e618be"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th rowspan="2">团号</th> <th rowspan="2">线路产品</th> <th rowspan="2">出游日期</th> <th rowspan="2">人数</th> <th rowspan="2">导游</th> <th rowspan="2">责任计调</th> <th rowspan="2">状态</th> <th colspan="5">收入</th> <th colspan="10">发团成本</th> <th colspan="5">中转成本</th> <th rowspan="2">收入小计</th> <th rowspan="2">发团成本小计</th> <th rowspan="2">中转成本小计</th> <th rowspan="2">毛利</th> <th rowspan="2">人均毛利</th> </tr> <tr class="bg-blur"> <th>团款</th> <th>购物佣金</th> <th>自费</th> <th>其他收入</th> <th>导游管理费</th> <th>导服费</th> <th>保险</th> <th>车费</th> <th>餐费</th> <th>房费</th> <th>景区</th> <th>票务</th> <th>其他支出</th> <th>购物导佣</th> <th>自费导佣</th> <th>车费</th> <th>餐费</th> <th>房费</th> <th>票务</th> <th>其他</th> </tr> </thead> <tbody class="T-planProfit-list"> ', 
            $line = 44, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 45, $out += $escape(rs.financialId), $out += '"> <td><a class="T-tripDetail">', 
                $line = 46, $out += $escape(rs.tripNumber), $out += "</a></td> <td>", $line = 47, 
                $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 48, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 49, $out += $escape(rs.adultCount), $out += " 大 ", 
                $line = 49, $out += $escape(rs.childCount), $out += " 小</td> <td>", $line = 50, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 51, $out += $escape(rs.creatorName), 
                $out += "</td> <td>", $line = 52, 0 == rs.status ? ($out += " 待确认 ", $line = 54) : 1 == rs.status ? ($out += " 已发团 ", 
                $line = 56) : -1 == rs.status && ($out += " 已取消 ", $line = 58), $out += " </td> <td>", 
                $line = 60, $out += $escape(rs.needPayAllMoney), $out += "</td> <td>", $line = 61, 
                $out += $escape(rs.shopMoney), $out += "</td> <td>", $line = 62, $out += $escape(rs.selfPayMoney), 
                $out += "</td> <td>", $line = 63, $out += $escape(rs.incomeMoney), $out += "</td> <td>", 
                $line = 64, $out += $escape(rs.guideMoney), $out += "</td> <td>", $line = 65, $out += $escape(rs.guideTip), 
                $out += "</td> <td>", $line = 66, $out += $escape(rs.insuranceMoney), $out += "</td> <td>", 
                $line = 67, $out += $escape(rs.busMoney), $out += "</td> <td>", $line = 68, $out += $escape(rs.restaurantMoney), 
                $out += "</td> <td>", $line = 69, $out += $escape(rs.hotelMoney), $out += "</td> <td>", 
                $line = 70, $out += $escape(rs.scenicMoney), $out += "</td> <td>", $line = 71, $out += $escape(rs.ticketMoney), 
                $out += "</td> <td>", $line = 72, $out += $escape(rs.otherMoney), $out += "</td> <td>", 
                $line = 73, $out += $escape(rs.shopCostMoney), $out += "</td> <td>", $line = 74, 
                $out += $escape(rs.selfMoney), $out += "</td> <td>", $line = 75, $out += $escape(rs.outBusMoney), 
                $out += "</td> <td>", $line = 76, $out += $escape(rs.outRestaurantMoney), $out += "</td> <td>", 
                $line = 77, $out += $escape(rs.outHotelMoney), $out += "</td> <td>", $line = 78, 
                $out += $escape(rs.outTicketMoney), $out += "</td> <td>", $line = 79, $out += $escape(rs.outOtherMoney), 
                $out += "</td> <td>", $line = 80, $out += $escape(rs.totalIncome), $out += "</td> <td>", 
                $line = 81, $out += $escape(rs.totalTrip), $out += "</td> <td>", $line = 82, $out += $escape(rs.totalOut), 
                $out += "</td> <td>", $line = 83, $out += $escape(rs.profit), $out += "</td> <td>", 
                $line = 84, $out += $escape(rs.perCapitaProfit), $out += "</td> </tr> ", $line = 86;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 91, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th rowspan="2">团号</th>\r\n			<th rowspan="2">线路产品</th>\r\n			<th rowspan="2">出游日期</th>\r\n			<th rowspan="2">人数</th>\r\n			<th rowspan="2">导游</th>\r\n			<th rowspan="2">责任计调</th>\r\n			<th rowspan="2">状态</th>\r\n			<th colspan="5">收入</th>\r\n			<th colspan="10">发团成本</th>\r\n			<th colspan="5">中转成本</th>\r\n			<th rowspan="2">收入小计</th>\r\n			<th rowspan="2">发团成本小计</th>\r\n			<th rowspan="2">中转成本小计</th>\r\n			<th rowspan="2">毛利</th>\r\n			<th rowspan="2">人均毛利</th>\r\n		</tr>\r\n		<tr class="bg-blur">\r\n			<th>团款</th>\r\n			<th>购物佣金</th>\r\n			<th>自费</th>\r\n			<th>其他收入</th>\r\n			<th>导游管理费</th>\r\n			<th>导服费</th>\r\n			<th>保险</th>\r\n			<th>车费</th>\r\n			<th>餐费</th>\r\n			<th>房费</th>\r\n			<th>景区</th>\r\n			<th>票务</th>\r\n			<th>其他支出</th>\r\n			<th>购物导佣</th>\r\n			<th>自费导佣</th>\r\n			<th>车费</th>\r\n			<th>餐费</th>\r\n			<th>房费</th>\r\n			<th>票务</th>\r\n			<th>其他</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-planProfit-list">\r\n		{{each result as rs}}\r\n		<tr data-id="{{rs.financialId}}">\r\n			<td><a class="T-tripDetail">{{rs.tripNumber}}</a></td>\r\n			<td>{{rs.lineProductName}}</td>\r\n			<td>{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n			<td>{{rs.adultCount}} 大 {{rs.childCount}} 小</td>\r\n			<td>{{rs.guideName}}</td>\r\n			<td>{{rs.creatorName}}</td>\r\n			<td>{{if rs.status == 0}}\r\n					待确认\r\n				{{else if rs.status == 1}}\r\n					已发团\r\n				{{else if rs.status == -1}}\r\n					已取消\r\n				{{/if}}\r\n			</td>\r\n			<td>{{rs.needPayAllMoney}}</td>\r\n			<td>{{rs.shopMoney}}</td>\r\n			<td>{{rs.selfPayMoney}}</td>\r\n			<td>{{rs.incomeMoney}}</td>\r\n			<td>{{rs.guideMoney}}</td>\r\n			<td>{{rs.guideTip}}</td>\r\n			<td>{{rs.insuranceMoney}}</td>\r\n			<td>{{rs.busMoney}}</td>\r\n			<td>{{rs.restaurantMoney}}</td>\r\n			<td>{{rs.hotelMoney}}</td>\r\n			<td>{{rs.scenicMoney}}</td>\r\n			<td>{{rs.ticketMoney}}</td>\r\n			<td>{{rs.otherMoney}}</td>\r\n			<td>{{rs.shopCostMoney}}</td>\r\n			<td>{{rs.selfMoney}}</td>\r\n			<td>{{rs.outBusMoney}}</td>\r\n			<td>{{rs.outRestaurantMoney}}</td>\r\n			<td>{{rs.outHotelMoney}}</td>\r\n			<td>{{rs.outTicketMoney}}</td>\r\n			<td>{{rs.outOtherMoney}}</td>\r\n			<td>{{rs.totalIncome}}</td>\r\n			<td>{{rs.totalTrip}}</td>\r\n			<td>{{rs.totalOut}}</td>\r\n			<td>{{rs.profit}}</td>\r\n			<td>{{rs.perCapitaProfit}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});