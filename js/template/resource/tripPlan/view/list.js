/*TMODJS:{"debug":true,"version":555,"md5":"041e6f4bb6510800541ed84f41cf9107"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, travelAgencyName = $data.travelAgencyName, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.tripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList"> <colgroup > <col width="300px"></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> </colgroup> <thead> <tr class="bg-blur T-tr-fixed"> <th>团信息</th> <th>出游日期</th> <th>团队人数</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>责任部门</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> <input type="hidden" name="travelAgencyName" value="', 
            $line = 41, $out += $escape(travelAgencyName), $out += '"> ', $line = 41, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-entity-id="', $line = 42, $out += $escape(tripPlan.id), $out += '"> <td class="h-touristGroupInfo"> <p class="h-orderNumber">团号：', 
                $line = 44, $out += $escape(tripPlan.tripNumber), $out += '</p> <p class="hct-absolute-group h-lineName"> <span class="hct-span-left"> <', 
                $line = 47, 0 != tripPlan.tripPlanDetails.length ? ($line = 47, $out += $escape(tripPlan.tripPlanDetails[0].lineProductName), 
                $line = 47) : ($line = 47, tripPlan.lineProduct && ($line = 47, $out += $escape(tripPlan.lineProduct.name), 
                $line = 47), $line = 47), $out += "> </span> ", $line = 48, tripPlan.tripPlanDetails.length > 1 && ($out += ' <label class="T-action T-showLineInfo hct-button-right"> <button class="btn btn-success btn-sm btn-white show" index="0"> <i class="fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                $line = 54), $out += ' </p> <p class="h-memberName">导游：', $line = 56, tripPlan.guide && ($line = 56, 
                $out += $escape(tripPlan.guide.realname), $line = 56), $out += " &nbsp;责任计调：", $line = 56, 
                tripPlan.dutyOPUser && ($line = 56, $out += $escape(tripPlan.dutyOPUser.realName), 
                $line = 56), $out += '</p> </td> <td class="h-touristGroupInfo"> <p class="center">', 
                $line = 59, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy.MM.dd")), 
                $out += '</p> <p class="center">-</p> <p class="center">', $line = 61, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy.MM.dd")), 
                $out += "</p> </td> <td>", $line = 63, $out += $escape(tripPlan.touristAdultCount), 
                $out += "大", $line = 63, $out += $escape(tripPlan.touristChildCount), $out += '小</td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide" class="guideStatus" data-status="', 
                $line = 65, $out += $escape(tripPlan.guideStatus), $out += '"><i class="ace-icon fa ', 
                $line = 65, $out += $escape($helpers.getArrangeIcon(tripPlan.guideStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus" class="busStatus" data-status="', 
                $line = 67, $out += $escape(tripPlan.busStatus), $out += '"><i class="ace-icon fa ', 
                $line = 67, $out += $escape($helpers.getArrangeIcon(tripPlan.busStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 69, $out += $escape($helpers.getArrangeIcon(tripPlan.insuranceStatus)), 
                $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant" class="restaurantStatus" data-status="', 
                $line = 71, $out += $escape(tripPlan.restaurantStatus), $out += '"><i class="ace-icon fa ', 
                $line = 71, $out += $escape($helpers.getArrangeIcon(tripPlan.restaurantStatus)), 
                $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel" class="hotelStatus" data-status="', 
                $line = 73, $out += $escape(tripPlan.hotelStatus), $out += '"><i class="ace-icon fa ', 
                $line = 73, $out += $escape($helpers.getArrangeIcon(tripPlan.hotelStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 75, $out += $escape($helpers.getArrangeIcon(tripPlan.scenicStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 77, $out += $escape($helpers.getArrangeIcon(tripPlan.ticketStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop" class="shopStatus" data-status="', 
                $line = 79, $out += $escape(tripPlan.shopStatus), $out += '"><i class="ace-icon fa ', 
                $line = 79, $out += $escape($helpers.getArrangeIcon(tripPlan.shopStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay" class="selfPayStatus" data-status="', 
                $line = 81, $out += $escape(tripPlan.selfPayStatus), $out += '"><i class="ace-icon fa ', 
                $line = 81, $out += $escape($helpers.getArrangeIcon(tripPlan.selfPayStatus)), $out += '"></i></td>  <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 83, $out += $escape($helpers.getArrangeIcon(tripPlan.otherStatus)), $out += '"></i></td> <td>', 
                $line = 84, tripPlan.businessGroup && ($line = 84, $out += $escape(tripPlan.businessGroup.name), 
                $line = 84), $out += "</td> ", $line = 85, 0 == tripPlan.status ? ($out += ' <td class="warning-text">待发团</td> ', 
                $line = 87) : 1 == tripPlan.status ? ($out += ' <td class="success-text">已发团</td> ', 
                $line = 89) : -1 == tripPlan.status ? ($out += " <td>已取消</td> ", $line = 91) : 2 == tripPlan.status && ($out += ' <td class="error-text">已过期</td> ', 
                $line = 93), $out += ' <td style="vertical-align:middle;width:200px"> <a class="cursor T-action ', 
                $line = 95, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-send", 
                $line = 95), $out += ' R-right" data-right="1140010" title="通知" ', $line = 95, (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += 'style="color:#bbb;" ', 
                $line = 95), $out += '> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a billStatus="', 
                $line = 102, $out += $escape(tripPlan.billStatus), $out += '" class="cursor T-action ', 
                $line = 102, 2 != tripPlan.status && ($out += "T-plan", $line = 102), $out += ' R-right" data-right="1140007" title="安排" ', 
                $line = 102, 2 == tripPlan.status && ($out += 'style="color:#bbb;" ', $line = 102), 
                $out += '> <label class="padding-right20">|</label> 安排 </a> </td> </tr> ', $line = 108, 
                0 != tripPlan.tripPlanDetails.length && ($out += " ", $line = 108, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 108, index >= 1 && ($out += ' <tr class="hidden"> <td class="h-touristGroupInfo"> <p>', 
                    $line = 111, $out += $escape(tripPlanDetails.lineProductName), $out += "</p> <p>", 
                    $line = 112, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += " - ", $line = 112, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</p> </td> ", $line = 115, 1 == index && ($out += ' <td rowspan="', $line = 116, 
                    $out += $escape(tripPlan.tripPlanDetails.length - 1), $out += '"></td>', $line = 116), 
                    $out += " <td>", $line = 117, $out += $escape(tripPlanDetails.touristAdultCount), 
                    $out += "大", $line = 117, $out += $escape(tripPlanDetails.touristChildCount), $out += "小</td> ", 
                    $line = 118, 1 == index && ($out += ' <td rowspan="', $line = 119, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 120, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 121, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 122, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 123, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 124, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 125, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 126, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 127, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 128, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 129, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 130, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> <td rowspan="', $line = 131, $out += $escape(tripPlan.tripPlanDetails.length - 1), 
                    $out += '"></td> ', $line = 132), $out += " </tr> ", $line = 134), $out += " ", 
                    $line = 134;
                }), $out += " ", $line = 134), $out += " ", $line = 134;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 139, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight tripPlanViewList">\r\n<colgroup >\r\n    <col width="300px"></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n    <col></col>\r\n</colgroup>\r\n   <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>团信息</th>\r\n            <th>出游日期</th>\r\n            <th>团队人数</th>\r\n            <th>导</th>\r\n            <th>车</th>\r\n            <th>险</th>\r\n            <th>餐</th>\r\n            <th>房</th>\r\n            <th>景</th>\r\n            <th>票</th>\r\n            <th>购</th>\r\n            <th>娱</th>\r\n            <th>它</th>\r\n            <th>责任部门</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <input type="hidden" name="travelAgencyName" value="{{travelAgencyName}}"> {{each tripPlanList as tripPlan}}\r\n        <tr data-entity-id="{{tripPlan.id}}">\r\n            <td class="h-touristGroupInfo">\r\n                <p class="h-orderNumber">团号：{{tripPlan.tripNumber}}</p>\r\n                <p class="hct-absolute-group h-lineName">\r\n                    <span class="hct-span-left">\r\n				<{{if tripPlan.tripPlanDetails.length!=0}}{{tripPlan.tripPlanDetails[0].lineProductName}}{{else}}{{if tripPlan.lineProduct}}{{tripPlan.lineProduct.name}}{{/if}}{{/if}}>\r\n				</span> {{if tripPlan.tripPlanDetails.length > 1}}\r\n                    <label class="T-action T-showLineInfo hct-button-right">\r\n                        <button class="btn btn-success btn-sm btn-white show" index="0">\r\n                            <i class="fa fa-plus bigger-110 icon-only"></i>\r\n                        </button>\r\n                    </label>\r\n                    {{/if}}\r\n                </p>\r\n                <p class="h-memberName">导游：{{if tripPlan.guide}}{{tripPlan.guide.realname}}{{/if}} &nbsp;责任计调：{{if tripPlan.dutyOPUser}}{{tripPlan.dutyOPUser.realName}}{{/if}}</p>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p class="center">{{tripPlan.startTime | dateFormat: \'yyyy.MM.dd\'}}</p>\r\n                <p class="center">-</p>\r\n                <p class="center">{{tripPlan.endTime | dateFormat: \'yyyy.MM.dd\'}}</p>\r\n            </td>\r\n            <td>{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</td>\r\n            <!-- 导 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide" class="guideStatus" data-status="{{tripPlan.guideStatus}}"><i class="ace-icon fa {{tripPlan.guideStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 车 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus" class="busStatus" data-status="{{tripPlan.busStatus}}"><i class="ace-icon fa {{tripPlan.busStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 险 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{tripPlan.insuranceStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 餐 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant" class="restaurantStatus" data-status="{{tripPlan.restaurantStatus}}"><i class="ace-icon fa {{tripPlan.restaurantStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 房 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel" class="hotelStatus" data-status="{{tripPlan.hotelStatus}}"><i class="ace-icon fa {{tripPlan.hotelStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 景 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{tripPlan.scenicStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 票 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{tripPlan.ticketStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 购 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop" class="shopStatus" data-status="{{tripPlan.shopStatus}}"><i class="ace-icon fa {{tripPlan.shopStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 娱 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay" class="selfPayStatus" data-status="{{tripPlan.selfPayStatus}}"><i class="ace-icon fa {{tripPlan.selfPayStatus | getArrangeIcon }}"></i></td>\r\n            <!-- 它 -->\r\n            <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{tripPlan.otherStatus | getArrangeIcon }}"></i></td>\r\n            <td>{{if tripPlan.businessGroup}}{{tripPlan.businessGroup.name}}{{/if}}</td>\r\n            {{if tripPlan.status == 0}}\r\n            <td class="warning-text">待发团</td>\r\n            {{else if tripPlan.status == 1}}\r\n            <td class="success-text">已发团</td>\r\n            {{else if tripPlan.status == -1}}\r\n            <td>已取消</td>\r\n            {{else if tripPlan.status == 2}}\r\n            <td class="error-text">已过期</td>\r\n            {{/if}}\r\n            <td style="vertical-align:middle;width:200px">\r\n                <a class="cursor T-action {{if tripPlan.status != -1 && tripPlan.status != 2}}T-send{{/if}} R-right" data-right="1140010" title="通知" {{if tripPlan.status==- 1 || tripPlan.status==2 }}style="color:#bbb;" {{/if}}>\r\n					通知\r\n					<label style="padding-left:10px;">|</label>\r\n				</a>\r\n                <a class="cursor T-action T-view" title="查看">\r\n					查看\r\n				</a>\r\n                <a billStatus="{{tripPlan.billStatus}}" class="cursor T-action {{if tripPlan.status != 2}}T-plan{{/if}} R-right" data-right="1140007" title="安排" {{if tripPlan.status==2 }}style="color:#bbb;" {{/if}}>\r\n                    <label class="padding-right20">|</label>\r\n                    安排\r\n                </a>\r\n            </td>\r\n        </tr>\r\n        {{if tripPlan.tripPlanDetails.length!=0}} {{each tripPlan.tripPlanDetails as tripPlanDetails index}} {{if index >= 1}}\r\n        <tr class="hidden">\r\n            <td class="h-touristGroupInfo">\r\n                <p>{{tripPlanDetails.lineProductName}}</p>\r\n                <p>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}} - {{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</p>\r\n\r\n            </td>\r\n            {{if index == 1}}\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>{{/if}}\r\n            <td>{{tripPlanDetails.touristAdultCount}}大{{tripPlanDetails.touristChildCount}}小</td>\r\n            {{if index == 1}}\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            <td rowspan="{{tripPlan.tripPlanDetails.length - 1}}"></td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/if}} {{/each}} {{/if}} {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});