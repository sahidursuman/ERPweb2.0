/*TMODJS:{"debug":true,"version":443,"md5":"8de836eb541f0070257314df6314dc19"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.tripPlan, 
            $data.$index, $utils.$escape), recordSize = ($data.tripPlanDetails, $data.index, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出游日期</th> <th>完团日期</th> <th>线路产品</th> <th>团队人数</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>责任计调</th> <th>责任部门</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 26, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-entity-id="', $line = 27, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle">', 
                $line = 28, $out += $escape(tripPlan.tripNumber), $out += '</td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 32, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 33, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 34, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td></tr> ", $line = 36;
                }), $out += " ", $line = 37) : ($out += " ", $line = 38, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
                $out += " ", $line = 39), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 45, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 46, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 47, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td></tr> ", $line = 48;
                }), $out += " ", $line = 49) : ($out += " ", $line = 50, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                $out += " ", $line = 51), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 58, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 59, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 60, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td></tr> ", $line = 61;
                }), $out += " ", $line = 62) : ($out += " ", $line = 63, tripPlan.lineProduct && ($out += " ", 
                $line = 64, $out += $escape(tripPlan.lineProduct.name), $out += " ", $line = 65), 
                $out += " ", $line = 66), $out += ' </table> </td> <td style="vertical-align:middle">', 
                $line = 69, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa ', 
                $line = 72, $out += $escape($helpers.getArrangeIcon(tripPlan.guideStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa ', 
                $line = 74, $out += $escape($helpers.getArrangeIcon(tripPlan.busStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 76, $out += $escape($helpers.getArrangeIcon(tripPlan.insuranceStatus)), 
                $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa ', 
                $line = 78, $out += $escape($helpers.getArrangeIcon(tripPlan.restaurantStatus)), 
                $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa ', 
                $line = 80, $out += $escape($helpers.getArrangeIcon(tripPlan.hotelStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 82, $out += $escape($helpers.getArrangeIcon(tripPlan.scenicStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 84, $out += $escape($helpers.getArrangeIcon(tripPlan.ticketStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa ', 
                $line = 86, $out += $escape($helpers.getArrangeIcon(tripPlan.shopStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa ', 
                $line = 88, $out += $escape($helpers.getArrangeIcon(tripPlan.selfPayStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 90, $out += $escape($helpers.getArrangeIcon(tripPlan.otherStatus)), $out += '"></i></td> <td>', 
                $line = 92, tripPlan.dutyOPUser && ($line = 92, $out += $escape(tripPlan.dutyOPUser.realName), 
                $line = 92), $out += "</td> <td>", $line = 93, tripPlan.businessGroup && ($line = 93, 
                $out += $escape(tripPlan.businessGroup.name), $line = 93), $out += "</td> ", $line = 94, 
                0 == tripPlan.status ? ($out += ' <td class="warning-text">待确认</td> ', $line = 96) : 1 == tripPlan.status ? ($out += ' <td class="success-text">已发团</td> ', 
                $line = 98) : -1 == tripPlan.status ? ($out += " <td>已取消</td> ", $line = 100) : 2 == tripPlan.status && ($out += ' <td class="error-text">已过期</td> ', 
                $line = 102), $out += ' <td style="vertical-align:middle;width:200px"> <a class="cursor T-action ', 
                $line = 104, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-send", 
                $line = 104), $out += ' R-right" data-right="1140010" title="通知" ', $line = 104, 
                (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += 'style="color:#bbb;"', 
                $line = 104), $out += '> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a billStatus="', 
                $line = 111, $out += $escape(tripPlan.billStatus), $out += '" class="cursor T-action ', 
                $line = 111, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-plan", 
                $line = 111), $out += ' R-right" data-right="1140007" title="安排" ', $line = 111, 
                (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += 'style="color:#bbb;"', 
                $line = 111), $out += '> <label class="padding-right20">|</label> 安排 </a> </td> </tr> ', 
                $line = 118;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 124, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>团号</th>\r\n			<th>出游日期</th>\r\n			<th>完团日期</th>\r\n			<th>线路产品</th>\r\n			<th>团队人数</th>\r\n			<th>导</th>\r\n			<th>车</th>\r\n			<th>险</th>\r\n			<th>餐</th>\r\n			<th>房</th>\r\n			<th>景</th>\r\n			<th>票</th>\r\n			<th>购</th>\r\n			<th>娱</th>\r\n			<th>它</th>\r\n			<th>责任计调</th>\r\n			<th>责任部门</th>\r\n			<th>状态</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each tripPlanList as tripPlan}}\r\n		<tr data-entity-id="{{tripPlan.id}}">\r\n			<td style="vertical-align:middle">{{tripPlan.tripNumber}}</td>\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n								<tr><td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td></tr>\r\n							\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{/if}}\r\n				</table>	\r\n			</td>\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							<tr><td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td></tr>\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{/if}}\r\n				</table>\r\n			</td>\r\n\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							<tr><td>{{tripPlanDetails.lineProductName}}</td></tr>\r\n						{{/each}}\r\n						{{else}}\r\n						{{if !!tripPlan.lineProduct}}\r\n						 {{tripPlan.lineProduct.name}}\r\n						{{/if}}\r\n					{{/if}}\r\n				</table>	\r\n			</td>\r\n			<td style="vertical-align:middle">{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n\r\n			<!-- 导 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa {{tripPlan.guideStatus | getArrangeIcon }}"></i></td> \r\n			<!-- 车 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa {{tripPlan.busStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 险 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{tripPlan.insuranceStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 餐 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa {{tripPlan.restaurantStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 房 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa {{tripPlan.hotelStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 景 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{tripPlan.scenicStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 票 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{tripPlan.ticketStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 购 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa {{tripPlan.shopStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 娱 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa {{tripPlan.selfPayStatus | getArrangeIcon }}"></i></td>\r\n			<!-- 它 -->\r\n			<td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{tripPlan.otherStatus | getArrangeIcon }}"></i></td>\r\n			\r\n			<td>{{if tripPlan.dutyOPUser}}{{tripPlan.dutyOPUser.realName}}{{/if}}</td>\r\n			<td>{{if tripPlan.businessGroup}}{{tripPlan.businessGroup.name}}{{/if}}</td>\r\n			{{if tripPlan.status == 0}}\r\n			<td class="warning-text">待确认</td>\r\n			{{else if tripPlan.status == 1}}\r\n			<td class="success-text">已发团</td>\r\n			{{else if tripPlan.status == -1}}\r\n			<td>已取消</td>\r\n			{{else if tripPlan.status == 2}}\r\n			<td class="error-text">已过期</td>\r\n			{{/if}}\r\n			<td style="vertical-align:middle;width:200px">\r\n				<a class="cursor T-action {{if tripPlan.status != -1 && tripPlan.status != 2}}T-send{{/if}} R-right" data-right="1140010" title="通知" {{if tripPlan.status == -1 || tripPlan.status == 2}}style="color:#bbb;"{{/if}}>\r\n					通知\r\n					<label style="padding-left:10px;">|</label>\r\n				</a>\r\n				<a class="cursor T-action T-view" title="查看">\r\n					查看\r\n				</a>\r\n				<a billStatus="{{tripPlan.billStatus}}" class="cursor T-action {{if tripPlan.status != -1 && tripPlan.status != 2}}T-plan{{/if}} R-right" data-right="1140007" title="安排" {{if tripPlan.status == -1 || tripPlan.status == 2}}style="color:#bbb;"{{/if}}>\r\n					<label class="padding-right20">|</label>\r\n					安排\r\n				</a>\r\n			</td>\r\n		</tr>\r\n		\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n		\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});