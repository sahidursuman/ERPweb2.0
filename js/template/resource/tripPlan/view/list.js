/*TMODJS:{"debug":true,"version":419,"md5":"5332be74e87eeac1ca1948513e90d699"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.tripPlan, 
            $data.$index, $utils.$escape), recordSize = ($data.tripPlanDetails, $data.index, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th>线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>购</th> <th>娱</th> <th>票</th> <th>状态</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody> ', 
            $line = 24, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-entity-id="', $line = 25, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle">', 
                $line = 26, $out += $escape(tripPlan.tripNumber), $out += '</td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 30, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 31, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 32, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td><tr> ", $line = 34;
                }), $out += " ", $line = 35) : ($out += " ", $line = 36, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
                $out += " ", $line = 37), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 43, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 44, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 45, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td><tr> ", $line = 46;
                }), $out += " ", $line = 47) : ($out += " ", $line = 48, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                $out += " ", $line = 49), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 56, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 57, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 58, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td><tr> ", $line = 59;
                }), $out += " ", $line = 60) : ($out += " ", $line = 61, $out += $escape(tripPlan.lineProduct.name), 
                $out += " ", $line = 62), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"> <table class="table-special"> ', 
                $line = 68, 0 != tripPlan.tripPlanDetails.length ? ($out += " ", $line = 69, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 70, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td><tr> ", $line = 72;
                }), $out += " ", $line = 73) : ($out += " ", $line = 74, $out += $escape(tripPlan.planTouristCount), 
                $out += " ", $line = 75), $out += ' </table> </td> <td style="vertical-align:middle">', 
                $line = 79, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle">', $line = 80, null != tripPlan.guide && ($line = 80, 
                $out += $escape(tripPlan.guide.realname), $line = 80), $out += '</td> <td style="vertical-align:middle">', 
                $line = 81, null != tripPlan.bus && ($out += " ", $line = 81, $out += $escape(tripPlan.bus.licenseNumber), 
                $out += " ", $line = 81), $out += '</td> <td style="vertical-align:middle">', $line = 82, 
                0 == tripPlan.insuranceStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 84) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 86), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 88, 0 == tripPlan.restaurantStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 90) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 92), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 94, 0 == tripPlan.hotelStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 96) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 98), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 100, 0 == tripPlan.scenicStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 102) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 104), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 106, 0 == tripPlan.shopStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 108) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 110), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 112, 0 == tripPlan.selfPayStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 114) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 116), 
                $out += ' </td> <td style="vertical-align:middle">', $line = 118, 0 == tripPlan.ticketStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 120) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 122), 
                $out += ' </td> <td style="vertical-align:middle;width:80px;"> ', $line = 125, 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130"></i> 待确认 ', 
                $line = 128) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 131) : -1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 134) : 2 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-clock-o red bigger-125"></i> 已过期 ', 
                $line = 137), $out += ' </td> <td style="vertical-align:middle;width:200px"> <!-- <a data-entity-qouteId="', 
                $line = 141, $out += $escape(tripPlan.qouteId), $out += '" class="cursor T-action ', 
                $line = 141, null != tripPlan.qouteId && ($out += "T-sendOrder", $line = 141), $out += ' R-right" data-right="1450001" title="下单" style="', 
                $line = 141, null == tripPlan.qouteId && ($out += "color:#bbb;", $line = 141), $out += '"> 下单 <label style="padding-left:10px;">|</label> </a> --> <a class="cursor T-action ', 
                $line = 147, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-send", 
                $line = 147), $out += ' R-right" data-right="1140010" title="通知" ', $line = 147, 
                (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += 'style="color:#bbb;"', 
                $line = 147), $out += '> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a billStatus="', 
                $line = 154, $out += $escape(tripPlan.billStatus), $out += '" class="cursor T-action ', 
                $line = 154, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-plan", 
                $line = 154), $out += ' R-right" data-right="1140007" title="安排" ', $line = 154, 
                (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += 'style="color:#bbb;"', 
                $line = 154), $out += '> <label class="padding-right20">|</label> 安排 </a> <a title="导出安排" class="cursor T-action T-export R-right" data-right="1140008"> <label class="padding-right20">|</label> 导出 </a> </td> </tr> ', 
                $line = 165;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 171, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>团号</th>\r\n			<th>出团日期</th>\r\n			<th>完团日期</th>\r\n			<th>线路产品</th>\r\n			<th>人数</th>\r\n			<th>团队人数</th>\r\n			<th>导游</th>\r\n			<th>车牌号</th>\r\n			<th>险</th>\r\n			<th>餐</th>\r\n			<th>房</th>\r\n			<th>景</th>\r\n			<th>购</th>\r\n			<th>娱</th>\r\n			<th>票</th>\r\n			<th>状态</th>\r\n			<th class="col-sm-2">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each tripPlanList as tripPlan}}\r\n		<tr data-entity-id="{{tripPlan.id}}">\r\n			<td style="vertical-align:middle">{{tripPlan.tripNumber}}</td>\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n								<tr><td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td><tr>\r\n							\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{/if}}\r\n				</table>	\r\n			</td>\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							<tr><td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td><tr>\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{/if}}\r\n				</table>\r\n			</td>\r\n\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							<tr><td>{{tripPlanDetails.lineProductName}}</td><tr>\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.lineProduct.name}}\r\n					{{/if}}\r\n				</table>	\r\n			</td>\r\n\r\n			<td style="padding-left:0;padding-right:0">\r\n				<table class="table-special">\r\n				    {{if tripPlan.tripPlanDetails.length!=0}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n								<tr><td>{{tripPlanDetails.sumMemberCount}}</td><tr>\r\n							\r\n						{{/each}}\r\n						{{else}}\r\n						 {{tripPlan.planTouristCount}}\r\n					{{/if}}\r\n				</table>	\r\n			</td>\r\n\r\n			<td style="vertical-align:middle">{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.bus != null}} {{tripPlan.bus.licenseNumber}} {{/if}}</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.insuranceStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.restaurantStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.hotelStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.scenicStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.shopStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.selfPayStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle">{{if tripPlan.ticketStatus == 0}}\r\n			        <i class="ace-icon fa fa-times red"></i>\r\n			    {{else}}\r\n			        <i class="ace-icon fa fa-check green"></i>\r\n			    {{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle;width:80px;">\r\n				{{if tripPlan.status == 0}}\r\n				<i class="ace-icon fa fa-question yellow bigger-130"></i>\r\n				待确认\r\n				{{else if tripPlan.status == 1}}\r\n				<i class="ace-icon fa fa-check green bigger-130"></i>\r\n				已发团\r\n				{{else if tripPlan.status == -1}}\r\n				<i class="ace-icon fa fa-times red bigger-125"></i>\r\n				已取消\r\n				{{else if tripPlan.status == 2}}\r\n				<i class="ace-icon fa fa-clock-o red bigger-125"></i>\r\n				已过期\r\n				{{/if}}\r\n			</td>\r\n			<td style="vertical-align:middle;width:200px">\r\n\r\n				<!-- <a data-entity-qouteId="{{tripPlan.qouteId}}" class="cursor T-action {{if tripPlan.qouteId!=null}}T-sendOrder{{/if}}  R-right"  data-right="1450001" title="下单" style="{{if tripPlan.qouteId==null}}color:#bbb;{{/if}}">\r\n					下单\r\n					<label style="padding-left:10px;">|</label>\r\n				</a> -->\r\n\r\n\r\n				<a class="cursor T-action {{if tripPlan.status != -1 && tripPlan.status != 2}}T-send{{/if}} R-right" data-right="1140010" title="通知" {{if tripPlan.status == -1 || tripPlan.status == 2}}style="color:#bbb;"{{/if}}>\r\n					通知\r\n					<label style="padding-left:10px;">|</label>\r\n				</a>\r\n				<a class="cursor T-action T-view" title="查看">\r\n					查看\r\n				</a>\r\n				<a billStatus="{{tripPlan.billStatus}}" class="cursor T-action {{if tripPlan.status != -1 && tripPlan.status != 2}}T-plan{{/if}} R-right" data-right="1140007" title="安排" {{if tripPlan.status == -1 || tripPlan.status == 2}}style="color:#bbb;"{{/if}}>\r\n					<label class="padding-right20">|</label>\r\n					安排\r\n				</a>\r\n                <a title="导出安排" class="cursor T-action T-export R-right" data-right="1140008">\r\n					<label class="padding-right20">|</label>\r\n					导出\r\n				</a>\r\n			</td>\r\n		</tr>\r\n		\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n		\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});