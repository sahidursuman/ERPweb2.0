/*TMODJS:{"debug":true,"version":180,"md5":"a58cceee3eb25e4ed91bdfbc3bdefda8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/hotelList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, isFrame = $data.isFrame, $each = $utils.$each, outHotelRemarkList = $data.outHotelRemarkList, $escape = ($data.hotel, 
            $data.$index, $utils.$escape), canMergeArrange = ($data.itme, $data.canMergeArrange), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>入住时间</th> <th>星级</th> <th>间数</th> <th>要求</th> ', 
            $line = 12, isFrame || ($out += " <th>操作</th> ", $line = 14), $out += ' </tr> </thead> <tbody class="T-hotel-list"> ', 
            $line = 18, $each(outHotelRemarkList, function(hotel) {
                $out += ' <tr data-id="', $line = 19, $out += $escape(hotel.outRemarkId), $out += '" shuttleType = "', 
                $line = 19, $out += $escape(hotel.shuttleType), $out += '" data-touristGroupId="', 
                $line = 19, $out += $escape(hotel.touristGroupId), $out += '" ', $line = 20, hotel.checked && ($out += ' class="success" ', 
                $line = 20), $out += '> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-cheked" ', 
                $line = 23, hotel.checked && ($out += ' checked="checked" ', $line = 23), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：<span class="orderNumber">', 
                $line = 27, $out += $escape(hotel.orderNumber), $out += '</span></p> <p><span class="lineProductName">', 
                $line = 28, $out += $escape(hotel.lineProductName), $out += '</span></p> <p><span class="startTime">', 
                $line = 29, $out += $escape(hotel.startTime), $out += '</span><span class="partnerAgencyName">', 
                $line = 29, $out += $escape(hotel.partnerAgencyName), $out += '</span><span>外联销售：<span class="outOPUserName">', 
                $line = 29, $out += $escape(hotel.outOPUserName), $out += "</span></span> </p> <p>收客单号：", 
                $line = 31, $out += $escape(hotel.tgOrderNumber), $out += "</p> </td> <td> <span>", 
                $line = 34, 1 == hotel.shuttleType ? ($out += " 接团 ", $line = 34) : 2 == hotel.shuttleType ? ($out += " 送团", 
                $line = 34) : 3 == hotel.shuttleType && ($out += "返程住宿", $line = 34), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 35, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 35) : 2 == hotel.shuttleType && ($out += " 2", 
                $line = 35), $out += '"> </td> <td> <p> <span class="adultCount">', $line = 39, 
                $out += $escape(hotel.adultCount), $out += '</span>大 <span class="childCount">', 
                $line = 40, $out += $escape(hotel.childCount), $out += "</span>小 </p> ", $line = 42, 
                $each(hotel.contactMemberList, function(itme) {
                    $out += ' <p><span class="contactMemberName">', $line = 43, $out += $escape(itme.contactMemberName), 
                    $out += '</span> <span class="contactMemberPhoneNumber">(', $line = 44, $out += $escape(itme.contactMemberPhoneNumber), 
                    $out += ")</span></p> ", $line = 45;
                }), $out += ' </td> <td><span class="checkInTime">', $line = 47, $out += $escape(hotel.checkInTime), 
                $out += '</span></td> <td> <span class="hotelLevel">', $line = 49, $out += $escape($helpers.getHotelLevelDesc(hotel.hotelLevel)), 
                $out += '</span> </td> <td> <span class="roomCount">', $line = 52, $out += $escape(hotel.roomCount), 
                $out += '</span> </td> <td><span class="require">', $line = 54, $out += $escape(hotel.require), 
                $out += "</span></td> ", $line = 55, isFrame || ($out += ' <td>  <a class="cursor T-arrange-item T-action R-right" data-right=\'1480003\'> 安排 </a> <a class="cursor T-view T-action"><label class="padding-right20">|</label> 查看</a> </td> ', 
                $line = 64), $out += " </tr> ", $line = 66;
            }), $out += ' </tbody> </table> <div class="text-center"> ', $line = 70, isFrame || ($out += ' <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 71, canMergeArrange || ($out += ' disabled="disabled" ', $line = 71), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> ', 
            $line = 74), $out += ' </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 78, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>星级</th>\r\n            <th>间数</th>\r\n            <th>要求</th>\r\n            {{if !isFrame}}\r\n            <th>操作</th>\r\n            {{/if}}\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotel-list">\r\n        {{each outHotelRemarkList as hotel}}\r\n        <tr data-id="{{hotel.outRemarkId}}" shuttleType = "{{hotel.shuttleType}}" data-touristGroupId="{{hotel.touristGroupId}}" \r\n        {{if hotel.checked}} class="success" {{/if}}>\r\n            <td>\r\n                <label class="pos-rel">\r\n                    <input type="checkbox" class="ace T-cheked" {{if hotel.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n                </label>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：<span class="orderNumber">{{hotel.orderNumber}}</span></p>\r\n                <p><span class="lineProductName">{{hotel.lineProductName}}</span></p>\r\n                <p><span class="startTime">{{hotel.startTime}}</span><span class="partnerAgencyName">{{hotel.partnerAgencyName}}</span><span>外联销售：<span class="outOPUserName">{{hotel.outOPUserName}}</span></span>\r\n                </p>\r\n                <p>收客单号：{{hotel.tgOrderNumber}}</p>\r\n            </td>\r\n            <td>\r\n                <span>{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团{{else if hotel.shuttleType == 3}}返程住宿{{/if}}</span>\r\n                <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}">\r\n            </td>\r\n            <td>\r\n                <p>\r\n                    <span class="adultCount">{{hotel.adultCount}}</span>大\r\n                    <span class="childCount">{{hotel.childCount}}</span>小\r\n                </p>\r\n                {{each hotel.contactMemberList as itme}}\r\n                <p><span class="contactMemberName">{{itme.contactMemberName}}</span>\r\n                <span class="contactMemberPhoneNumber">({{itme.contactMemberPhoneNumber}})</span></p>\r\n                {{/each}}\r\n            </td>\r\n            <td><span class="checkInTime">{{hotel.checkInTime}}</span></td>\r\n            <td>\r\n                <span class="hotelLevel">{{hotel.hotelLevel  | getHotelLevelDesc}}</span>\r\n            </td>\r\n            <td>\r\n                <span class="roomCount">{{hotel.roomCount}}</span>\r\n            </td>\r\n            <td><span class="require">{{hotel.require}}</span></td>\r\n            {{if !isFrame}}\r\n            <td>\r\n                <!-- <a class="cursor T-inform T-action">\r\n                通知</a> -->\r\n                <a class="cursor T-arrange-item T-action R-right" data-right=\'1480003\'>\r\n                    安排\r\n                </a>\r\n                <a class="cursor T-view T-action"><label class="padding-right20">|</label> 查看</a>\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="text-center">\r\n    {{if !isFrame}}\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n    {{/if}}\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});