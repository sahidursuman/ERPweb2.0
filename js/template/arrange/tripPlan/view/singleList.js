/*TMODJS:{"debug":true,"version":21,"md5":"2b471ea60099c99757400e17abaeea17"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/singleList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $data.tl, $data.index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row"> <table class="table table-striped table-bordered"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出游日期</th> <th>完团日期</th> <th>线路产品</th> <th>人数</th> <th>团队人数</th> <th>剩余座位</th> <th>导</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>责任计调</th> <th>责任部门</th> <th style="width:80px;">状态</th> <th style="width:230px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 29, $each(result, function(rs) {
                $out += " ", $line = 30, $each(rs.tripPlanTouristList, function(tl, index) {
                    $out += ' <tr data-id="rs.id"> ', $line = 32, 0 == index && ($out += ' <td style="vertical-align:middle" rowspan="', 
                    $line = 33, $out += $escape(rs.tripPlanTouristList.length), $out += '">', $line = 33, 
                    $out += $escape(rs.tripNumber), $out += "</td> ", $line = 34), $out += ' <td style="vertical-align:middle">', 
                    $line = 35, $out += $escape($helpers.dateFormat(tl.touristGroup.startTime, "yyyy-MM-dd")), 
                    $out += '</td> <td style="vertical-align:middle">', $line = 36, $out += $escape($helpers.dateFormat(tl.touristGroup.endTime, "yyyy-MM-dd")), 
                    $out += '</td> <td style="vertical-align:middle">', $line = 37, $out += $escape(tl.touristGroup.lineProduct.name), 
                    $out += '</td> <td style="vertical-align:middle">', $line = 38, $out += $escape(tl.touristGroup.adultCount + tl.touristGroup.childCount), 
                    $out += "</td> ", $line = 39, 0 == index && ($out += ' <td style="vertical-align:middle" rowspan="', 
                    $line = 40, $out += $escape(rs.tripPlanTouristList.length), $out += '">', $line = 40, 
                    $out += $escape(rs.touristAdultCount + rs.touristChildCount), $out += '</td> <td style="vertical-align:middle" rowspan="', 
                    $line = 41, $out += $escape(rs.tripPlanTouristList.length), $out += '">', $line = 41, 
                    $out += $escape(rs.surplusSeat), $out += '</td> <td style="vertical-align:middle" rowspan="', 
                    $line = 42, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 42, $out += $escape($helpers.getArrangeIcon(rs.guideStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 43, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 43, $out += $escape($helpers.getArrangeIcon(rs.busStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 44, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 44, $out += $escape($helpers.getArrangeIcon(rs.insuranceStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 45, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 45, $out += $escape($helpers.getArrangeIcon(rs.restaurantStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 46, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 46, $out += $escape($helpers.getArrangeIcon(rs.hotelStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 47, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 47, $out += $escape($helpers.getArrangeIcon(rs.scenicStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 48, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 48, $out += $escape($helpers.getArrangeIcon(rs.ticketStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 49, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 49, $out += $escape($helpers.getArrangeIcon(rs.shopStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 50, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 50, $out += $escape($helpers.getArrangeIcon(rs.selfPayStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 51, $out += $escape(rs.tripPlanTouristList.length), $out += '"><i class="ace-icon fa ', 
                    $line = 51, $out += $escape($helpers.getArrangeIcon(rs.otherStatus)), $out += '"></i></td> <td style="vertical-align:middle" rowspan="', 
                    $line = 52, $out += $escape(rs.tripPlanTouristList.length), $out += '">', $line = 52, 
                    rs.dutyOPUser && ($line = 52, $out += $escape(rs.dutyOPUser.realName), $line = 52), 
                    $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 53, $out += $escape(rs.tripPlanTouristList.length), 
                    $out += '">', $line = 53, rs.dutyOPUser && ($line = 53, $out += $escape(rs.dutyOPUser.businessGroup.name), 
                    $line = 53), $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 54, 
                    $out += $escape(rs.tripPlanTouristList.length), $out += '"> ', $line = 55, 0 == rs.status ? ($out += ' <span style="color: #ff9900;">待确认</span> ', 
                    $line = 57) : 1 == rs.status ? ($out += ' <span style="color: #009900;">已发团</span> ', 
                    $line = 59) : -1 == rs.status ? ($out += ' <span style="color: #333333;">已取消</span> ', 
                    $line = 61) : 2 == rs.status && ($out += ' <span style="color: #333333;">已过期</span> ', 
                    $line = 63), $out += ' </td> <td style="vertical-align:middle" rowspan="', $line = 65, 
                    $out += $escape(rs.tripPlanTouristList.length), $out += '"> <a class="cursor T-action ', 
                    $line = 66, -1 != rs.status && 2 != rs.status && ($out += "T-send", $line = 66), 
                    $out += ' R-right" data-right="1140010" title="通知" ', $line = 66, (-1 == rs.status || 2 == rs.status) && ($out += 'style="color:#bbb;"', 
                    $line = 66), $out += '> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a billStatus="', 
                    $line = 73, $out += $escape(rs.billStatus), $out += '" class="cursor T-action ', 
                    $line = 73, -1 != rs.status && 2 != rs.status && ($out += "T-plan", $line = 73), 
                    $out += ' R-right" data-right="1140007" title="安排" ', $line = 73, (-1 == rs.status || 2 == rs.status) && ($out += 'style="color:#bbb;"', 
                    $line = 73), $out += '> <label class="padding-right20">|</label> 安排 </a> </td> ', 
                    $line = 78), $out += " </tr> ", $line = 80;
                }), $out += " ", $line = 81;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 87, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <table class="table table-striped table-bordered">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>团号</th>\r\n                <th>出游日期</th>\r\n                <th>完团日期</th>\r\n                <th>线路产品</th>\r\n                <th>人数</th>\r\n                <th>团队人数</th>\r\n                <th>剩余座位</th>\r\n                <th>导</th>\r\n                <th>车</th>\r\n                <th>险</th>\r\n                <th>餐</th>\r\n                <th>房</th>\r\n                <th>景</th>\r\n                <th>票</th>\r\n                <th>购</th>\r\n                <th>娱</th>\r\n                <th>它</th>\r\n                <th>责任计调</th>\r\n                <th>责任部门</th>\r\n                <th style="width:80px;">状态</th>\r\n                <th style="width:230px;">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each result as rs}}\r\n            {{each rs.tripPlanTouristList as tl index}}\r\n            <tr data-id="rs.id">\r\n                {{if index == 0}}\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">{{rs.tripNumber}}</td>\r\n                {{/if}}\r\n                <td style="vertical-align:middle">{{tl.touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td style="vertical-align:middle">{{tl.touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td style="vertical-align:middle">{{tl.touristGroup.lineProduct.name}}</td>\r\n                <td style="vertical-align:middle">{{tl.touristGroup.adultCount + tl.touristGroup.childCount}}</td>\r\n                {{if index == 0}}\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">{{rs.touristAdultCount + rs.touristChildCount}}</td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">{{rs.surplusSeat}}</td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.guideStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.busStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.insuranceStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.restaurantStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.hotelStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.scenicStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.ticketStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.shopStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.selfPayStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}"><i class="ace-icon fa {{rs.otherStatus | getArrangeIcon }}"></i></td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.realName}}{{/if}}</td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">{{if !!rs.dutyOPUser}}{{rs.dutyOPUser.businessGroup.name}}{{/if}}</td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">\r\n                    {{if rs.status == 0}}\r\n                    <span style="color: #ff9900;">待确认</span>\r\n                    {{else if rs.status == 1}}\r\n                    <span style="color: #009900;">已发团</span>\r\n                    {{else if rs.status == -1}}\r\n                    <span style="color: #333333;">已取消</span>\r\n                    {{else if rs.status == 2}}\r\n                    <span style="color: #333333;">已过期</span>\r\n                    {{/if}}\r\n                </td>\r\n                <td style="vertical-align:middle" rowspan="{{rs.tripPlanTouristList.length}}">\r\n                    <a class="cursor T-action {{if rs.status != -1 && rs.status != 2}}T-send{{/if}} R-right" data-right="1140010" title="通知" {{if rs.status == -1 || rs.status == 2}}style="color:#bbb;"{{/if}}>\r\n                        通知\r\n                        <label style="padding-left:10px;">|</label>\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看">\r\n                        查看\r\n                    </a>\r\n                    <a billStatus="{{rs.billStatus}}" class="cursor T-action {{if rs.status != -1 && rs.status != 2}}T-plan{{/if}} R-right" data-right="1140007" title="安排" {{if rs.status == -1 || rs.status == 2}}style="color:#bbb;"{{/if}}>\r\n                        <label class="padding-right20">|</label>\r\n                        安排\r\n                    </a>\r\n                </td>\r\n                {{/if}}\r\n            </tr>\r\n            {{/each}}\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});