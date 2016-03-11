/*TMODJS:{"debug":true,"version":188,"md5":"4c54c5f2edaa89041181556c96954530"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/singleList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = ($data.tripPlanTourist, $data.index, 
            $data.searchParam), $out = "";
            return $out += '<div class=""> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>团信息</th> <th>出游日期</th> <th>团队人数</th> <th>剩余座位</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th style="width:80px;">状态</th> <th style="min-width:230px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 24, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 25, $out += $escape(rs.id), $out += '" data-bill-status="', 
                $line = 25, $out += $escape(rs.billStatus), $out += '"> <td class="h-touristGroupInfo"> <p class="h-orderNumber">团号：', 
                $line = 27, $out += $escape(rs.tripNumber), $out += '</p> <p class="h-lineName"><', 
                $line = 28, rs.lineProduct && ($line = 28, $out += $escape(rs.lineProduct.name), 
                $line = 28), $out += "> ", $line = 29, rs.tripPlanTouristList.length > 1 && ($out += ' <label class="T-action T-showLineInfo hct-button-right"> <button class="btn btn-success btn-sm btn-white show" index="0"> <i class="fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                $line = 35), $out += "</p> <p> ", $line = 37, rs.guideNames && ($out += '<span class="h-memberName">导游：', 
                $line = 37, $out += $escape(rs.guideNames), $out += "</span>", $line = 37), $out += " ", 
                $line = 38, rs.dutyOPUser && rs.dutyOPUser.realName && ($out += '<span class="h-memberName">责任计调：', 
                $line = 38, $out += $escape(rs.dutyOPUser.realName), $line = 38), $out += ' </p> </td> <td class=""><span>', 
                $line = 41, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy.MM.dd")), $out += "</span><br> - <br><span>", 
                $line = 41, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy.MM.dd")), $out += '</span></td> <td style="vertical-align:middle">', 
                $line = 42, $out += $escape(rs.touristAdultCount), $out += "大", $line = 42, $out += $escape(rs.touristChildCount), 
                $out += '小</td> <td style="vertical-align:middle">', $line = 43, rs.surplusSeat ? ($line = 43, 
                $out += $escape(rs.surplusSeat), $line = 43) : ($out += "-", $line = 43), $out += '</td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa ', 
                $line = 44, $out += $escape($helpers.getArrangeIcon(rs.guideStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa ', 
                $line = 45, $out += $escape($helpers.getArrangeIcon(rs.busStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 46, $out += $escape($helpers.getArrangeIcon(rs.insuranceStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa ', 
                $line = 47, $out += $escape($helpers.getArrangeIcon(rs.restaurantStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa ', 
                $line = 48, $out += $escape($helpers.getArrangeIcon(rs.hotelStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 49, $out += $escape($helpers.getArrangeIcon(rs.scenicStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 50, $out += $escape($helpers.getArrangeIcon(rs.ticketStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa ', 
                $line = 51, $out += $escape($helpers.getArrangeIcon(rs.shopStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa ', 
                $line = 52, $out += $escape($helpers.getArrangeIcon(rs.selfPayStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 53, $out += $escape($helpers.getArrangeIcon(rs.otherStatus)), $out += '"></i></td> <td style="vertical-align:middle"> ', 
                $line = 55, 0 == rs.status ? ($out += ' <span style="color: #ff9900;">待发团</span> ', 
                $line = 57) : 1 == rs.status ? ($out += ' <span style="color: #009900;">已发团</span> ', 
                $line = 59) : -1 == rs.status ? ($out += ' <span style="color: #333333;">已取消</span> ', 
                $line = 61) : 2 == rs.status && ($out += ' <span style="color: #333333;">已过期</span> ', 
                $line = 63), $out += ' </td> <td style="vertical-align:middle" style="min-width: 230px;"> <a class="cursor T-action ', 
                $line = 66, 0 == rs.status && ($out += "T-hair-regiment", $line = 66), $out += ' R-right" data-right="1460006" title="', 
                $line = 66, 0 == rs.status && ($out += "点击发团", $line = 66), $out += '" data-bill-status="', 
                $line = 66, $out += $escape(rs.billStatus), $out += '" data-status-value="', $line = 66, 
                $out += $escape(rs.status), $out += '" ', $line = 66, 0 != rs.status && ($out += 'style="color:#bbb;"', 
                $line = 66), $out += '> 发团 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a class="cursor ', 
                $line = 73, 1 == rs.isEdit || -1 == rs.status ? ($out += "gray", $line = 73) : ($out += "T-action T-update", 
                $line = 73), $out += ' R-right" title="', $line = 73, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 73) : ($out += "编辑", $line = 73), $out += '" data-right="1460003"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="cursor T-action T-export R-right" title="导出" data-right="1460005"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 81, $out += $escape(rs.billStatus), $out += '" class="cursor ', $line = 81, 
                1 == rs.isEdit || -1 == rs.status || 2 == rs.status ? ($out += "gray", $line = 81) : ($out += "T-action ", 
                $line = 81, -1 != rs.status && 2 != rs.status && ($out += "T-cancel", $line = 81), 
                $line = 81), $out += ' R-right" data-right="1460004" title="', $line = 81, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 81) : ($out += "取消", $line = 81), $out += '"> <label class="padding-right20">|</label> <span>取消</span> </a> </td> </tr> ', 
                $line = 87, 0 != rs.tripPlanTouristList.length && ($out += " ", $line = 88, $each(rs.tripPlanTouristList, function(tripPlanTourist, index) {
                    $out += ' <tr class="hidden"> ', $line = 90, tripPlanTourist.touristGroup && ($out += ' <td class="h-touristGroupInfo"> <p> ', 
                    $line = 93, tripPlanTourist.touristGroup && ($line = 93, $out += $escape(tripPlanTourist.touristGroup.lineProduct.name), 
                    $line = 93), $out += " </p> </td> <td><span>", $line = 96, $out += $escape($helpers.dateFormat(tripPlanTourist.touristGroup.startTime, "yyyy.MM.dd")), 
                    $out += "</span><br> - <br><span>", $line = 96, $out += $escape($helpers.dateFormat(tripPlanTourist.touristGroup.endTime, "yyyy.MM.dd")), 
                    $out += "</span></td> <td>", $line = 97, $out += $escape(tripPlanTourist.touristGroup.adultCount), 
                    $out += "大", $line = 97, $out += $escape(tripPlanTourist.touristGroup.childCount), 
                    $out += "小</td> ", $line = 98, 0 == index && ($out += ' <td rowspan="', $line = 99, 
                    $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 100, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 101, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 102, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 103, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 104, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 105, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 106, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 107, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 108, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 109, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 110, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 111, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> ', 
                    $line = 112), $out += " ", $line = 113), $out += " </tr> ", $line = 115;
                }), $out += " ", $line = 116), $out += " ", $line = 117;
            }), $out += ' </tbody> </table> </div> <div class="pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 123, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>团信息</th>\r\n                <th>出游日期</th>\r\n                <th>团队人数</th>\r\n                <th>剩余座位</th>\r\n                <th>导</th>\r\n                <th>车</th>\r\n                <th>险</th>\r\n                <th>餐</th>\r\n                <th>房</th>\r\n                <th>景</th>\r\n                <th>票</th>\r\n                <th>购</th>\r\n                <th>娱</th>\r\n                <th>它</th>\r\n                <th style="width:80px;">状态</th>\r\n                <th style="min-width:230px;">操作</th>\r\n            </tr>  \r\n        </thead>\r\n        <tbody> \r\n            {{each result as rs}}\r\n            <tr data-id="{{rs.id}}" data-bill-status="{{rs.billStatus}}">\r\n                <td class="h-touristGroupInfo">\r\n                    <p class="h-orderNumber">团号：{{rs.tripNumber}}</p>\r\n                    <p class="h-lineName"><{{if rs.lineProduct}}{{rs.lineProduct.name }}{{/if}}>\r\n                    {{if rs.tripPlanTouristList.length > 1}}\r\n                    <label class="T-action T-showLineInfo hct-button-right">\r\n                        <button class="btn btn-success btn-sm btn-white show" index="0">\r\n                            <i class="fa fa-plus bigger-110 icon-only"></i>\r\n                        </button>\r\n                    </label>\r\n                    {{/if}}</p>\r\n                    <p>\r\n                        {{if !!rs.guideNames}}<span class="h-memberName">导游：{{rs.guideNames}}</span>{{/if}}\r\n                        {{if !!rs.dutyOPUser && rs.dutyOPUser.realName}}<span class="h-memberName">责任计调：{{rs.dutyOPUser.realName}}{{/if}}\r\n                    </p>\r\n                </td>\r\n                <td class=""><span>{{rs.startTime | dateFormat: \'yyyy.MM.dd\'}}</span><br> - <br><span>{{rs.endTime | dateFormat: \'yyyy.MM.dd\'}}</span></td>\r\n                <td style="vertical-align:middle">{{rs.touristAdultCount}}大{{rs.touristChildCount }}小</td>\r\n                <td style="vertical-align:middle">{{if !!rs.surplusSeat}}{{rs.surplusSeat}}{{else}}-{{/if}}</td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa {{rs.guideStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa {{rs.busStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{rs.insuranceStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa {{rs.restaurantStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa {{rs.hotelStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{rs.scenicStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{rs.ticketStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa {{rs.shopStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa {{rs.selfPayStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{rs.otherStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle">\r\n                    {{if rs.status == 0}}\r\n                    <span style="color: #ff9900;">待发团</span>\r\n                    {{else if rs.status == 1}}\r\n                    <span style="color: #009900;">已发团</span>\r\n                    {{else if rs.status == -1}}\r\n                    <span style="color: #333333;">已取消</span>\r\n                    {{else if rs.status == 2}} \r\n                    <span style="color: #333333;">已过期</span>\r\n                    {{/if}} \r\n                </td>\r\n                <td style="vertical-align:middle" style="min-width: 230px;">\r\n                    <a class="cursor T-action {{if rs.status == 0}}T-hair-regiment{{/if}} R-right" data-right="1460006" title="{{if rs.status == 0}}点击发团{{/if}}" data-bill-status="{{rs.billStatus}}" data-status-value="{{rs.status}}" {{if rs.status != 0}}style="color:#bbb;"{{/if}}>\r\n                        发团\r\n                        <label style="padding-left:10px;">|</label>\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看">\r\n                        查看\r\n                    </a>\r\n                    <a class="cursor {{if rs.isEdit == 1||rs.status == -1}}gray{{else}}T-action T-update{{/if}} R-right" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}编辑{{/if}}" data-right="1460003">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>编辑</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-export R-right" title="导出" data-right="1460005">\r\n                        <label class="padding-right20">|</label>\r\n                        导出\r\n                    </a>\r\n                    <a billStatus="{{rs.billStatus}}" class="cursor {{if rs.isEdit == 1 || rs.status == -1 || rs.status == 2}}gray{{else}}T-action {{if rs.status != -1 && rs.status != 2}}T-cancel{{/if}}{{/if}} R-right" data-right="1460004" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}取消{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>取消</span>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.tripPlanTouristList.length!=0}}\r\n                {{each rs.tripPlanTouristList as tripPlanTourist index}}\r\n                <tr class="hidden">\r\n                    {{if !!tripPlanTourist.touristGroup}}\r\n                    <td class="h-touristGroupInfo">\r\n                        <p>\r\n                            {{if tripPlanTourist.touristGroup}}{{tripPlanTourist.touristGroup.lineProduct.name }}{{/if}}\r\n                        </p>\r\n                    </td>\r\n                    <td><span>{{tripPlanTourist.touristGroup.startTime | dateFormat: \'yyyy.MM.dd\'}}</span><br> - <br><span>{{tripPlanTourist.touristGroup.endTime | dateFormat: \'yyyy.MM.dd\'}}</span></td>\r\n                    <td>{{tripPlanTourist.touristGroup.adultCount}}大{{tripPlanTourist.touristGroup.childCount}}小</td>\r\n                    {{if index == 0}}\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    {{/if}}\r\n                    {{/if}}\r\n                </tr>                                \r\n                {{/each}}\r\n            {{/if}}\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});