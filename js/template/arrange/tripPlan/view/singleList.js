/*TMODJS:{"debug":true,"version":109,"md5":"2b0e03a37a5de03ab712d4e3056edb9f"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/singleList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = ($data.tripPlanTourist, $data.index, 
            $data.searchParam), $out = "";
            return $out += '<div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出游日期</th> <th>完团日期</th> <th>线路产品</th> <th>人数</th> <th>团队人数</th> <th>剩余座位</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>责任计调</th> <th>责任部门</th> <th style="width:80px;">状态</th> <th style="min-width:230px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 29, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 30, $out += $escape(rs.id), $out += '"> <td style="vertical-align:middle">', 
                $line = 31, $out += $escape(rs.tripNumber), $out += "</td> <td>", $line = 32, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 33, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += '</td> <td class="hct-absolute-group"> <span class="hct-span-left"> ', $line = 36, 
                rs.lineProduct && ($line = 36, $out += $escape(rs.lineProduct.name), $line = 36), 
                $out += " </span> ", $line = 38, 0 != rs.tripPlanTouristList.length && ($out += ' <label class="T-action T-showLineInfo hct-button-right"> <button class="btn btn-success btn-sm btn-white show" index="0"> <i class="fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                $line = 44), $out += " </td> <td>", $line = 46, $out += $escape(rs.touristAdultCount + rs.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle">', $line = 47, $out += $escape(rs.touristAdultCount + rs.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle">', $line = 48, $out += $escape(rs.surplusSeat), 
                $out += '</td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa ', 
                $line = 49, $out += $escape($helpers.getArrangeIcon(rs.guideStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa ', 
                $line = 50, $out += $escape($helpers.getArrangeIcon(rs.busStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 51, $out += $escape($helpers.getArrangeIcon(rs.insuranceStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa ', 
                $line = 52, $out += $escape($helpers.getArrangeIcon(rs.restaurantStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa ', 
                $line = 53, $out += $escape($helpers.getArrangeIcon(rs.hotelStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 54, $out += $escape($helpers.getArrangeIcon(rs.scenicStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 55, $out += $escape($helpers.getArrangeIcon(rs.ticketStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa ', 
                $line = 56, $out += $escape($helpers.getArrangeIcon(rs.shopStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa ', 
                $line = 57, $out += $escape($helpers.getArrangeIcon(rs.selfPayStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 58, $out += $escape($helpers.getArrangeIcon(rs.otherStatus)), $out += '"></i></td> <td style="vertical-align:middle">', 
                $line = 59, rs.dutyOPUser && ($line = 59, $out += $escape(rs.dutyOPUser.realName), 
                $line = 59), $out += '</td> <td style="vertical-align:middle">', $line = 60, rs.dutyOPUser && ($line = 60, 
                $out += $escape(rs.dutyOPUser.businessGroup.name), $line = 60), $out += '</td> <td style="vertical-align:middle"> ', 
                $line = 62, 0 == rs.status ? ($out += ' <span style="color: #ff9900;">待确认</span> ', 
                $line = 64) : 1 == rs.status ? ($out += ' <span style="color: #009900;">已发团</span> ', 
                $line = 66) : -1 == rs.status ? ($out += ' <span style="color: #333333;">已取消</span> ', 
                $line = 68) : 2 == rs.status && ($out += ' <span style="color: #333333;">已过期</span> ', 
                $line = 70), $out += ' </td> <td style="vertical-align:middle" style="min-width: 230px;"> <a class="cursor T-action ', 
                $line = 73, 0 == rs.status && ($out += "T-hair-regiment", $line = 73), $out += ' R-right" data-right="1140010" title="', 
                $line = 73, 0 == rs.status && ($out += "点击发团", $line = 73), $out += '" data-bill-status="', 
                $line = 73, $out += $escape(rs.billStatus), $out += '" data-status-value="', $line = 73, 
                $out += $escape(rs.status), $out += '" ', $line = 73, 0 != rs.status && ($out += 'style="color:#bbb;"', 
                $line = 73), $out += '> 发团 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a class="cursor ', 
                $line = 80, 1 == rs.isEdit ? ($out += "gray", $line = 80) : ($out += "T-action T-update", 
                $line = 80), $out += '" title="', $line = 80, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 80) : ($out += "编辑", $line = 80), $out += '"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="cursor T-action T-export" title="导出"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 88, $out += $escape(rs.billStatus), $out += '" class="cursor ', $line = 88, 
                1 == rs.isEdit || -1 == rs.status || 2 == rs.status ? ($out += "gray", $line = 88) : ($out += "T-action ", 
                $line = 88, -1 != rs.status && 2 != rs.status && ($out += "T-cancel", $line = 88), 
                $line = 88), $out += ' R-right" data-right="1140007" title="', $line = 88, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 88) : ($out += "取消", $line = 88), $out += '"> <label class="padding-right20">|</label> <span>取消</span> </a> </td> </tr> ', 
                $line = 94, 0 != rs.tripPlanTouristList.length && ($out += " ", $line = 95, $each(rs.tripPlanTouristList, function(tripPlanTourist, index) {
                    $out += ' <tr class="hidden"> ', $line = 97, 0 == index && ($out += ' <td rowspan="', 
                    $line = 98, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> ', 
                    $line = 99), $out += " ", $line = 100, tripPlanTourist.touristGroup ? ($out += " <td>", 
                    $line = 101, $out += $escape($helpers.dateFormat(tripPlanTourist.touristGroup.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 102, $out += $escape($helpers.dateFormat(tripPlanTourist.touristGroup.endTime, "yyyy-MM-dd")), 
                    $out += '</td> <td class="hct-absolute-group"> <span class="hct-span-left"> ', $line = 105, 
                    tripPlanTourist.touristGroup && ($line = 105, $out += $escape(tripPlanTourist.touristGroup.lineProduct.name), 
                    $line = 105), $out += " </span> </td> <td>", $line = 108, $out += $escape(tripPlanTourist.touristGroup.adultCount + tripPlanTourist.touristGroup.childCount), 
                    $out += "</td> ", $line = 109) : ($out += " <td></td> <td></td> <td></td> <td></td> ", 
                    $line = 114), $out += " ", $line = 115, 0 == index && ($out += ' <td rowspan="', 
                    $line = 116, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 117, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 118, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 119, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 120, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 121, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 122, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 123, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 124, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 125, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 126, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 127, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 128, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 129, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 130, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> <td rowspan="', 
                    $line = 131, $out += $escape(rs.tripPlanTouristList.length), $out += '"></td> ', 
                    $line = 132), $out += " </tr> ", $line = 134;
                }), $out += " ", $line = 135), $out += " ", $line = 136;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 142, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>团号</th>\r\n                <th>出游日期</th>\r\n                <th>完团日期</th>\r\n                <th>线路产品</th>\r\n                <th>人数</th>\r\n                <th>团队人数</th>\r\n                <th>剩余座位</th>\r\n                <th>导</th>\r\n                <th>车</th>\r\n                <th>险</th>\r\n                <th>餐</th>\r\n                <th>房</th>\r\n                <th>景</th>\r\n                <th>票</th>\r\n                <th>购</th>\r\n                <th>娱</th>\r\n                <th>它</th>\r\n                <th>责任计调</th>\r\n                <th>责任部门</th>\r\n                <th style="width:80px;">状态</th>\r\n                <th style="min-width:230px;">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each result as rs}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td style="vertical-align:middle">{{rs.tripNumber}}</td>\r\n                <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td class="hct-absolute-group">\r\n                    <span class="hct-span-left">\r\n                        {{if rs.lineProduct}}{{rs.lineProduct.name }}{{/if}}\r\n                    </span>\r\n                    {{if rs.tripPlanTouristList.length != 0}}\r\n                    <label class="T-action T-showLineInfo hct-button-right"> \r\n                        <button class="btn btn-success btn-sm btn-white show" index="0"> \r\n                            <i class="fa fa-plus bigger-110 icon-only"></i>\r\n                        </button> \r\n                    </label>\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{rs.touristAdultCount  + rs.touristChildCount }}</td>\r\n                <td style="vertical-align:middle">{{rs.touristAdultCount + rs.touristChildCount}}</td>\r\n                <td style="vertical-align:middle">{{rs.surplusSeat}}</td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa {{rs.guideStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa {{rs.busStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{rs.insuranceStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa {{rs.restaurantStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa {{rs.hotelStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{rs.scenicStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{rs.ticketStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa {{rs.shopStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa {{rs.selfPayStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{rs.otherStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.realName}}{{/if}}</td>\r\n                <td style="vertical-align:middle">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.businessGroup.name}}{{/if}}</td>\r\n                <td style="vertical-align:middle">\r\n                    {{if rs.status == 0}}\r\n                    <span style="color: #ff9900;">待确认</span>\r\n                    {{else if rs.status == 1}}\r\n                    <span style="color: #009900;">已发团</span>\r\n                    {{else if rs.status == -1}}\r\n                    <span style="color: #333333;">已取消</span>\r\n                    {{else if rs.status == 2}}\r\n                    <span style="color: #333333;">已过期</span>\r\n                    {{/if}}\r\n                </td>\r\n                <td style="vertical-align:middle" style="min-width: 230px;">\r\n                    <a class="cursor T-action {{if rs.status == 0}}T-hair-regiment{{/if}} R-right" data-right="1140010" title="{{if rs.status == 0}}点击发团{{/if}}" data-bill-status="{{rs.billStatus}}" data-status-value="{{rs.status}}" {{if rs.status != 0}}style="color:#bbb;"{{/if}}>\r\n                        发团\r\n                        <label style="padding-left:10px;">|</label>\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看">\r\n                        查看\r\n                    </a>\r\n                    <a class="cursor {{if rs.isEdit == 1}}gray{{else}}T-action T-update{{/if}}" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}编辑{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>编辑</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-export" title="导出">\r\n                        <label class="padding-right20">|</label>\r\n                        导出\r\n                    </a>\r\n                    <a billStatus="{{rs.billStatus}}" class="cursor {{if rs.isEdit == 1 || rs.status == -1 || rs.status == 2}}gray{{else}}T-action {{if rs.status != -1 && rs.status != 2}}T-cancel{{/if}}{{/if}} R-right" data-right="1140007" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}取消{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>取消</span>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.tripPlanTouristList.length!=0}}\r\n                {{each rs.tripPlanTouristList as tripPlanTourist index}}\r\n                <tr class="hidden">\r\n                    {{if index == 0}}\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    {{/if}}\r\n                    {{if !!tripPlanTourist.touristGroup}}\r\n                    <td>{{tripPlanTourist.touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td>{{tripPlanTourist.touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td class="hct-absolute-group">\r\n                        <span class="hct-span-left">\r\n                            {{if tripPlanTourist.touristGroup}}{{tripPlanTourist.touristGroup.lineProduct.name }}{{/if}}\r\n                        </span>\r\n                    </td>\r\n                    <td>{{tripPlanTourist.touristGroup.adultCount + tripPlanTourist.touristGroup.childCount}}</td>\r\n                    {{else}}\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    {{/if}}\r\n                    {{if index == 0}}\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    <td rowspan="{{rs.tripPlanTouristList.length}}"></td>\r\n                    {{/if}}\r\n                </tr>                                \r\n                {{/each}}\r\n            {{/if}}\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});