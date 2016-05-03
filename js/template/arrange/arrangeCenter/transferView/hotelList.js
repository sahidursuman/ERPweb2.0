/*TMODJS:{"debug":true,"version":151,"md5":"e8f82e64a90d1a9d2636feea6a89051b"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/hotelList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, isFrame = $data.isFrame, $each = $utils.$each, outHotelRemarkList = $data.outHotelRemarkList, $escape = ($data.hotel, 
            $data.$index, $utils.$escape), canMergeArrange = $data.canMergeArrange, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>入住时间</th> <th>星级</th> <th>间数</th> <th>要求</th> ', 
            $line = 12, isFrame || ($out += " <th>操作</th> ", $line = 14), $out += ' </tr> </thead> <tbody class="T-hotel-list"> ', 
            $line = 18, $each(outHotelRemarkList, function(hotel) {
                $out += ' <tr data-id="', $line = 19, $out += $escape(hotel.outRemarkId), $out += '" shuttleType = "', 
                $line = 19, $out += $escape(hotel.shuttleType), $out += '" ', $line = 19, hotel.checked && ($out += ' class="success" ', 
                $line = 19), $out += '> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-cheked" ', 
                $line = 22, hotel.checked && ($out += ' checked="checked" ', $line = 22), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：<span class="orderNumber">', 
                $line = 26, $out += $escape(hotel.orderNumber), $out += '</span></p> <p><span class="lineProductName">&lt;', 
                $line = 27, $out += $escape(hotel.lineProductName), $out += '&gt;</span></p> <p><span class="startTime">', 
                $line = 28, $out += $escape(hotel.startTime), $out += '</span><span class="partnerAgencyName">', 
                $line = 28, $out += $escape(hotel.partnerAgencyName), $out += '</span><span>外联销售：<span class="outOPUserName">', 
                $line = 28, $out += $escape(hotel.outOPUserName), $out += "</span></span> </p> <p>收客单号：", 
                $line = 30, $out += $escape(hotel.tgOrderNumber), $out += "</p> </td> <td> <span>", 
                $line = 33, 1 == hotel.shuttleType ? ($out += " 接团 ", $line = 33) : 2 == hotel.shuttleType ? ($out += " 送团", 
                $line = 33) : 3 == hotel.shuttleType && ($out += "返程住宿", $line = 33), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 34, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 34) : 2 == hotel.shuttleType && ($out += " 2", 
                $line = 34), $out += '"> </td> <td> <p>', $line = 37, $out += $escape(hotel.contactMemberName), 
                $out += '</p> <p> <span class="adultCount">', $line = 39, $out += $escape(hotel.adultCount), 
                $out += '</span>大 <span class="childCount">', $line = 40, $out += $escape(hotel.childCount), 
                $out += '</span>小 </p> <p><span class="contactMemberPhoneNumber">', $line = 42, 
                $out += $escape(hotel.contactMemberPhoneNumber), $out += '</span></p> </td> <td><span class="checkInTime">', 
                $line = 44, $out += $escape(hotel.checkInTime), $out += '</span></td> <td> <span class="hotelLevel">', 
                $line = 46, $out += $escape($helpers.getHotelLevelDesc(hotel.hotelLevel)), $out += '</span> </td> <td> <span class="roomCount">', 
                $line = 49, $out += $escape(hotel.roomCount), $out += '</span> </td> <td><span class="require">', 
                $line = 51, $out += $escape(hotel.require), $out += "</span></td> ", $line = 52, 
                isFrame || ($out += ' <td>  <a class="cursor T-arrange-item T-action R-right" data-right=\'1480003\'>  安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </td> ', 
                $line = 62), $out += " </tr> ", $line = 64;
            }), $out += ' </tbody> </table> <div class="text-center"> ', $line = 68, isFrame || ($out += ' <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 69, canMergeArrange || ($out += ' disabled="disabled" ', $line = 69), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> ', 
            $line = 72), $out += ' </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 76, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>星级</th>\r\n            <th>间数</th>\r\n            <th>要求</th>\r\n            {{if !isFrame}}\r\n            <th>操作</th>\r\n            {{/if}}\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotel-list">\r\n        {{each outHotelRemarkList as hotel}}\r\n        <tr data-id="{{hotel.outRemarkId}}" shuttleType = "{{hotel.shuttleType}}" {{if hotel.checked}} class="success" {{/if}}>\r\n            <td>\r\n                <label class="pos-rel">\r\n                    <input type="checkbox" class="ace T-cheked" {{if hotel.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n                </label>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：<span class="orderNumber">{{hotel.orderNumber}}</span></p>\r\n                <p><span class="lineProductName">&lt;{{hotel.lineProductName}}&gt;</span></p>\r\n                <p><span class="startTime">{{hotel.startTime}}</span><span class="partnerAgencyName">{{hotel.partnerAgencyName}}</span><span>外联销售：<span class="outOPUserName">{{hotel.outOPUserName}}</span></span>\r\n                </p>\r\n                <p>收客单号：{{hotel.tgOrderNumber}}</p>\r\n            </td>\r\n            <td>\r\n                <span>{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团{{else if hotel.shuttleType == 3}}返程住宿{{/if}}</span>\r\n                <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}">\r\n            </td>\r\n            <td>\r\n                <p>{{hotel.contactMemberName}}</p>\r\n                <p>\r\n                    <span class="adultCount">{{hotel.adultCount}}</span>大\r\n                    <span class="childCount">{{hotel.childCount}}</span>小\r\n                </p>\r\n                <p><span class="contactMemberPhoneNumber">{{hotel.contactMemberPhoneNumber}}</span></p>\r\n            </td>\r\n            <td><span class="checkInTime">{{hotel.checkInTime}}</span></td>\r\n            <td>\r\n                <span class="hotelLevel">{{hotel.hotelLevel  | getHotelLevelDesc}}</span>\r\n            </td>\r\n            <td>\r\n                <span class="roomCount">{{hotel.roomCount}}</span>\r\n            </td>\r\n            <td><span class="require">{{hotel.require}}</span></td>\r\n            {{if !isFrame}}\r\n            <td>\r\n                <!-- <a class="cursor T-inform T-action">\r\n                通知</a> -->\r\n                <a class="cursor T-arrange-item T-action R-right" data-right=\'1480003\'>\r\n                    <!-- <label class="padding-right20">|</label>  -->\r\n                    安排</a>\r\n                <a class="cursor T-view T-action">\r\n                    <label class="padding-right20">|</label>查看\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="text-center">\r\n    {{if !isFrame}}\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n    {{/if}}\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});