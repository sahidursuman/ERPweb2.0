/*TMODJS:{"debug":true,"version":234,"md5":"c4beed8e7227f7f2566b21ddc31ed717"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class=""> <table class="table table-striped table-bordered table-hover T-showHighLight"> <colgroup> <col style="width:20%;"></col> <col style="width:8%"></col> <col style="width:20%"></col> <col style="width:130px"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:50px;"></col> <col style="width:150px;"></col> <col style="width:20%;"></col> </colgroup> <thead> <tr class="bg-blur T-tr-fixed"> <th>团信息 </th> <th>出游日期</th> <th>客户</th> <th>团队人数</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th style="width:100px;">状态</th> <th style="min-width:230px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 42, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 43, $out += $escape(rs.id), $out += '" data-bill-status="', 
                $line = 43, $out += $escape(rs.billStatus), $out += '"> <td class="h-touristGroupInfo" style="vertical-align:middle"> <p class="h-orderNumber">团号：', 
                $line = 45, $out += $escape(rs.tripNumber), $out += '</p> <p class="h-lineName">&lt;', 
                $line = 46, $out += $escape(rs.lineProduct.name), $out += "&gt;</p> <p> ", $line = 48, 
                rs.guide && rs.guide.realname && ($out += '<span class="h-memberName">导游：', $line = 48, 
                $out += $escape(rs.guide.realname), $out += "</span>", $line = 48), $out += " ", 
                $line = 49, rs.dutyOPUser && rs.dutyOPUser.realName && ($out += '<span class="h-memberName">责任计调：', 
                $line = 49, $out += $escape(rs.dutyOPUser.realName), $out += "</span>", $line = 49), 
                $out += " </p> </td> <td>", $line = 52, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy.MM.dd")), 
                $out += " <br>-<br> ", $line = 52, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy.MM.dd")), 
                $out += '</td> <td style="vertical-align:middle">', $line = 53, rs.tripPlanTouristList[0] && rs.tripPlanTouristList[0].touristGroup && rs.tripPlanTouristList[0].touristGroup.partnerAgency && ($line = 53, 
                $out += $escape(rs.tripPlanTouristList[0].touristGroup.partnerAgency.travelAgencyName), 
                $line = 53), $out += "</td> <td>", $line = 54, $out += $escape(rs.touristAdultCount), 
                $out += "大", $line = 54, $out += $escape(rs.touristChildCount), $out += '小</td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa ', 
                $line = 55, $out += $escape($helpers.getArrangeIcon(rs.guideStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa ', 
                $line = 56, $out += $escape($helpers.getArrangeIcon(rs.busStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa ', 
                $line = 57, $out += $escape($helpers.getArrangeIcon(rs.insuranceStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa ', 
                $line = 58, $out += $escape($helpers.getArrangeIcon(rs.restaurantStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa ', 
                $line = 59, $out += $escape($helpers.getArrangeIcon(rs.hotelStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa ', 
                $line = 60, $out += $escape($helpers.getArrangeIcon(rs.scenicStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa ', 
                $line = 61, $out += $escape($helpers.getArrangeIcon(rs.ticketStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa ', 
                $line = 62, $out += $escape($helpers.getArrangeIcon(rs.shopStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa ', 
                $line = 63, $out += $escape($helpers.getArrangeIcon(rs.selfPayStatus)), $out += '"></i></td> <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa ', 
                $line = 64, $out += $escape($helpers.getArrangeIcon(rs.otherStatus)), $out += '"></i></td> <td style="vertical-align:middle"> ', 
                $line = 66, 0 == rs.status ? ($out += ' <span style="color: #ff9900;">待发团</span> ', 
                $line = 68) : 1 == rs.status ? ($out += ' <span style="color: #009900;">已发团</span> ', 
                $line = 70) : -1 == rs.status ? ($out += ' <span style="color: #333333;">已取消</span> ', 
                $line = 72) : 2 == rs.status && ($out += ' <span style="color: #333333;">已过期</span> ', 
                $line = 74), $out += ' </td> <td style="vertical-align:middle" style="min-width: 230px;"> <a class="cursor T-action ', 
                $line = 77, 0 == rs.status && ($out += "T-hair-regiment", $line = 77), $out += ' R-right" data-right="1140006" title="', 
                $line = 77, 0 == rs.status && ($out += "点击发团", $line = 77), $out += '" data-bill-status="', 
                $line = 77, $out += $escape(rs.billStatus), $out += '" data-status-value="', $line = 77, 
                $out += $escape(rs.status), $out += '" ', $line = 77, 0 != rs.status && ($out += 'style="color:#bbb;"', 
                $line = 77), $out += '> 发团 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a class="cursor ', 
                $line = 84, 1 == rs.isEdit || -1 == rs.status ? ($out += "gray", $line = 84) : ($out += "T-action T-update", 
                $line = 84), $out += ' R-right" title="', $line = 84, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 84) : ($out += "编辑", $line = 84), $out += '" data-right="1140003"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="cursor T-action T-export R-right" title="导出" data-right="1140005"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 92, $out += $escape(rs.billStatus), $out += '" class="cursor ', $line = 92, 
                1 == rs.isEdit || -1 == rs.status || 2 == rs.status ? ($out += "gray", $line = 92) : ($out += "T-action ", 
                $line = 92, -1 != rs.status && 2 != rs.status && ($out += "T-cancel", $line = 92), 
                $line = 92), $out += ' R-right" data-right="1140004" title="', $line = 92, 1 == rs.isEdit ? ($out += "财务审核后已设置不可修改数据，请联系财务", 
                $line = 92) : ($out += "取消", $line = 92), $out += '"> <label class="padding-right20">|</label> <span>取消</span> </a> </td> </tr> ', 
                $line = 98;
            }), $out += ' </tbody> </table> </div> <div class="pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 104, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <colgroup>\r\n            <col style="width:20%;"></col>\r\n            <col style="width:8%"></col>\r\n            <col style="width:20%"></col>\r\n            <col style="width:130px"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:50px;"></col>\r\n            <col style="width:150px;"></col>\r\n            <col style="width:20%;"></col>\r\n        </colgroup>\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>团信息 </th> \r\n                <th>出游日期</th>\r\n                <th>客户</th>\r\n                <th>团队人数</th>\r\n                <th>导</th>\r\n                <th>车</th>\r\n                <th>险</th>\r\n                <th>餐</th>\r\n                <th>房</th>\r\n                <th>景</th>\r\n                <th>票</th>\r\n                <th>购</th>\r\n                <th>娱</th>\r\n                <th>它</th>\r\n                <th style="width:100px;">状态</th>\r\n                <th style="min-width:230px;">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each result as rs}}\r\n            <tr data-id="{{rs.id}}" data-bill-status="{{rs.billStatus}}">\r\n                <td class="h-touristGroupInfo" style="vertical-align:middle">\r\n                    <p class="h-orderNumber">团号：{{rs.tripNumber}}</p>\r\n                    <p class="h-lineName">&lt;{{rs.lineProduct.name}}&gt;</p>\r\n                    <p>\r\n                        {{if !!rs.guide && rs.guide.realname}}<span class="h-memberName">导游：{{rs.guide.realname}}</span>{{/if}}\r\n                        {{if !!rs.dutyOPUser && rs.dutyOPUser.realName}}<span class="h-memberName">责任计调：{{rs.dutyOPUser.realName}}</span>{{/if}}\r\n                    </p>\r\n                </td>\r\n                <td>{{rs.startTime | dateFormat: \'yyyy.MM.dd\'}} <br>-<br> {{rs.endTime | dateFormat: \'yyyy.MM.dd\'}}</td>\r\n                <td style="vertical-align:middle">{{if !!rs.tripPlanTouristList[0]&&!!rs.tripPlanTouristList[0].touristGroup&&!!rs.tripPlanTouristList[0].touristGroup.partnerAgency}}{{rs.tripPlanTouristList[0].touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                <td>{{rs.touristAdultCount}}大{{rs.touristChildCount}}小</td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_guide"><i class="ace-icon fa {{rs.guideStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_bus"><i class="ace-icon fa {{rs.busStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_insurance"><i class="ace-icon fa {{rs.insuranceStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_restaurant"><i class="ace-icon fa {{rs.restaurantStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_hotel"><i class="ace-icon fa {{rs.hotelStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_scenic"><i class="ace-icon fa {{rs.scenicStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_ticket"><i class="ace-icon fa {{rs.ticketStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_shop"><i class="ace-icon fa {{rs.shopStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_selfPay"><i class="ace-icon fa {{rs.selfPayStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" data-target="#tripPlan_addPlan_other"><i class="ace-icon fa {{rs.otherStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle">\r\n                    {{if rs.status == 0}}\r\n                    <span style="color: #ff9900;">待发团</span>\r\n                    {{else if rs.status == 1}}\r\n                    <span style="color: #009900;">已发团</span>\r\n                    {{else if rs.status == -1}}\r\n                    <span style="color: #333333;">已取消</span>\r\n                    {{else if rs.status == 2}}\r\n                    <span style="color: #333333;">已过期</span>\r\n                    {{/if}}\r\n                </td>\r\n                <td style="vertical-align:middle" style="min-width: 230px;">\r\n                    <a class="cursor T-action {{if rs.status == 0}}T-hair-regiment{{/if}} R-right" data-right="1140006" title="{{if rs.status == 0}}点击发团{{/if}}" data-bill-status="{{rs.billStatus}}" data-status-value="{{rs.status}}" {{if rs.status != 0}}style="color:#bbb;"{{/if}}>\r\n                        发团\r\n                        <label style="padding-left:10px;">|</label>\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看">\r\n                        查看\r\n                    </a>\r\n                    <a class="cursor {{if rs.isEdit == 1 || rs.status == -1}}gray{{else}}T-action T-update{{/if}} R-right" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}编辑{{/if}}" data-right="1140003">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>编辑</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-export R-right" title="导出" data-right="1140005">\r\n                        <label class="padding-right20">|</label>\r\n                        导出\r\n                    </a>\r\n                    <a billStatus="{{rs.billStatus}}" class="cursor {{if rs.isEdit == 1 || rs.status == -1 || rs.status == 2}}gray{{else}}T-action {{if rs.status != -1 && rs.status != 2}}T-cancel{{/if}}{{/if}} R-right" data-right="1140004" title="{{if rs.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{else}}取消{{/if}}">\r\n                        <label class="padding-right20">|</label>\r\n                        <span>取消</span>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});