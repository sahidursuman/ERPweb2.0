/*TMODJS:{"debug":true,"version":201,"md5":"b26d7a7e006d42d233892bf69946d93c"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class=""> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出游日期</th> <th>完团日期</th> <th>线路产品</th> <th>团队人数</th> <th>客户</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>外联销售</th> <th>责任计调</th> <th>责任部门</th> <th style="width:80px;">状态</th> <th style="min-width:230px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 29, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 30, $out += $escape(rs.id), $out += '" data-bill-status="', 
                $line = 30, $out += $escape(rs.billStatus), $out += '"> <td style="vertical-align:middle">', 
                $line = 31, $out += $escape(rs.tripNumber), $out += '</td> <td style="vertical-align:middle">', 
                $line = 32, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += '</td> <td style="vertical-align:middle">', 
                $line = 33, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += '</td> <td style="vertical-align:middle">', 
                $line = 34, $out += $escape(rs.lineProduct.name), $out += '</td> <td style="vertical-align:middle">', 
                $line = 35, $out += $escape(rs.touristAdultCount), $out += "大", $line = 35, $out += $escape(rs.touristChildCount), 
                $out += '小</td> <td style="vertical-align:middle">', $line = 36, rs.tripPlanTouristList[0] && rs.tripPlanTouristList[0].touristGroup && rs.tripPlanTouristList[0].touristGroup.partnerAgency && ($line = 36, 
                $out += $escape(rs.tripPlanTouristList[0].touristGroup.partnerAgency.travelAgencyName), 
                $line = 36), $out += '</td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa ', 
                $line = 37, $out += $escape($helpers.getArrangeIcon(rs.guideStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa ', 
                $line = 38, $out += $escape($helpers.getArrangeIcon(rs.busStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 39, $out += $escape($helpers.getArrangeIcon(rs.insuranceStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa ', 
                $line = 40, $out += $escape($helpers.getArrangeIcon(rs.restaurantStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa ', 
                $line = 41, $out += $escape($helpers.getArrangeIcon(rs.hotelStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 42, $out += $escape($helpers.getArrangeIcon(rs.scenicStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 43, $out += $escape($helpers.getArrangeIcon(rs.ticketStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa ', 
                $line = 44, $out += $escape($helpers.getArrangeIcon(rs.shopStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa ', 
                $line = 45, $out += $escape($helpers.getArrangeIcon(rs.selfPayStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 46, $out += $escape($helpers.getArrangeIcon(rs.otherStatus)), $out += '"></i></td> <td style="vertical-align:middle">', 
                $line = 47, rs.tripPlanTouristList[0] && rs.tripPlanTouristList[0].touristGroup && rs.tripPlanTouristList[0].touristGroup.outOPUser && ($line = 47, 
                $out += $escape(rs.tripPlanTouristList[0].touristGroup.outOPUser.realName), $line = 47), 
                $out += '</td> <td style="vertical-align:middle">', $line = 48, rs.dutyOPUser && ($line = 48, 
                $out += $escape(rs.dutyOPUser.realName), $line = 48), $out += '</td> <td style="vertical-align:middle">', 
                $line = 49, rs.dutyOPUser && ($line = 49, $out += $escape(rs.dutyOPUser.businessGroup.name), 
                $line = 49), $out += '</td> <td style="vertical-align:middle"> ', $line = 51, 0 == rs.status ? ($out += ' <span style="color: #ff9900;">待确认</span> ', 
                $line = 53) : 1 == rs.status ? ($out += ' <span style="color: #009900;">已发团</span> ', 
                $line = 55) : -1 == rs.status ? ($out += ' <span style="color: #333333;">已取消</span> ', 
                $line = 57) : 2 == rs.status && ($out += ' <span style="color: #333333;">已过期</span> ', 
                $line = 59), $out += ' </td> <td style="vertical-align:middle" style="min-width: 230px;"> <a class="cursor T-action ', 
                $line = 62, 0 == rs.status && ($out += "T-hair-regiment", $line = 62), $out += ' R-right" data-right="1140010" title="', 
                $line = 62, 0 == rs.status && ($out += "点击发团", $line = 62), $out += '" data-bill-status="', 
                $line = 62, $out += $escape(rs.billStatus), $out += '" data-status-value="', $line = 62, 
                $out += $escape(rs.status), $out += '" ', $line = 62, 0 != rs.status && ($out += 'style="color:#bbb;"', 
                $line = 62), $out += '> 发团 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a class="cursor ', 
                $line = 69, 1 == rs.isEdit ? ($out += "gray", $line = 69) : ($out += "T-action T-update", 
                $line = 69), $out += '" title="', $line = 69, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 69) : ($out += "编辑", $line = 69), $out += '"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="cursor T-action T-export" title="导出"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 77, $out += $escape(rs.billStatus), $out += '" class="cursor ', $line = 77, 
                1 == rs.isEdit || -1 == rs.status || 2 == rs.status ? ($out += "gray", $line = 77) : ($out += "T-action ", 
                $line = 77, -1 != rs.status && 2 != rs.status && ($out += "T-cancel", $line = 77), 
                $line = 77), $out += ' R-right" data-right="1140007" title="', $line = 77, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 77) : ($out += "取消", $line = 77), $out += '"> <label class="padding-right20">|</label> <span>取消</span> </a> </td> </tr> ', 
                $line = 83;
            }), $out += ' </tbody> </table> </div> <div class="pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 89, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>团号</th>\r\n                <th>出游日期</th>\r\n                <th>完团日期</th>\r\n                <th>线路产品</th>\r\n                <th>团队人数</th>\r\n                <th>客户</th>\r\n                <th>导</th>\r\n                <th>车</th>\r\n                <th>险</th>\r\n                <th>餐</th>\r\n                <th>房</th>\r\n                <th>景</th>\r\n                <th>票</th>\r\n                <th>购</th>\r\n                <th>娱</th>\r\n                <th>它</th>\r\n                <th>外联销售</th>\r\n                <th>责任计调</th>\r\n                <th>责任部门</th>\r\n                <th style="width:80px;">状态</th>\r\n                <th style="min-width:230px;">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each result as rs}}\r\n            <tr data-id="{{rs.id}}" data-bill-status="{{rs.billStatus}}">\r\n                <td style="vertical-align:middle">{{rs.tripNumber}}</td>\r\n                <td style="vertical-align:middle">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td style="vertical-align:middle">{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td style="vertical-align:middle">{{rs.lineProduct.name}}</td>\r\n                <td style="vertical-align:middle">{{rs.touristAdultCount}}大{{rs.touristChildCount}}小</td>\r\n                <td style="vertical-align:middle">{{if !!rs.tripPlanTouristList[0]&&!!rs.tripPlanTouristList[0].touristGroup&&!!rs.tripPlanTouristList[0].touristGroup.partnerAgency}}{{rs.tripPlanTouristList[0].touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa {{rs.guideStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa {{rs.busStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{rs.insuranceStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa {{rs.restaurantStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa {{rs.hotelStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{rs.scenicStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{rs.ticketStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa {{rs.shopStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa {{rs.selfPayStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{rs.otherStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle">{{if !!rs.tripPlanTouristList[0]&&!!rs.tripPlanTouristList[0].touristGroup&&!!rs.tripPlanTouristList[0].touristGroup.outOPUser}}{{rs.tripPlanTouristList[0].touristGroup.outOPUser.realName}}{{/if}}</td>\r\n                <td style="vertical-align:middle">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.realName}}{{/if}}</td>\r\n                <td style="vertical-align:middle">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.businessGroup.name}}{{/if}}</td>\r\n                <td style="vertical-align:middle">\r\n                    {{if rs.status == 0}}\r\n                    <span style="color: #ff9900;">待确认</span>\r\n                    {{else if rs.status == 1}}\r\n                    <span style="color: #009900;">已发团</span>\r\n                    {{else if rs.status == -1}}\r\n                    <span style="color: #333333;">已取消</span>\r\n                    {{else if rs.status == 2}}\r\n                    <span style="color: #333333;">已过期</span>\r\n                    {{/if}}\r\n                </td>\r\n                <td style="vertical-align:middle" style="min-width: 230px;">\r\n                    <a class="cursor T-action {{if rs.status == 0}}T-hair-regiment{{/if}} R-right" data-right="1140010" title="{{if rs.status == 0}}点击发团{{/if}}" data-bill-status="{{rs.billStatus}}" data-status-value="{{rs.status}}" {{if rs.status != 0}}style="color:#bbb;"{{/if}}>\r\n                        发团\r\n                        <label style="padding-left:10px;">|</label>\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看">\r\n                        查看\r\n                    </a>\r\n                    <a class="cursor {{if rs.isEdit == 1}}gray{{else}}T-action T-update{{/if}}" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}编辑{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>编辑</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-export" title="导出">\r\n                        <label class="padding-right20">|</label>\r\n                        导出\r\n                    </a>\r\n                    <a billStatus="{{rs.billStatus}}" class="cursor {{if rs.isEdit == 1 || rs.status == -1 || rs.status == 2}}gray{{else}}T-action {{if rs.status != -1 && rs.status != 2}}T-cancel{{/if}}{{/if}} R-right" data-right="1140007" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}取消{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>取消</span>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});