/*TMODJS:{"debug":true,"version":63,"md5":"d3d2a52b937f5cc13f213bbbe030897b"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transferView/hotelList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isFrame = $data.isFrame, $each = $utils.$each, outHotelRemarkList = $data.outHotelRemarkList, $escape = ($data.hotel, 
            $data.$index, $utils.$escape), canMergeArrange = $data.canMergeArrange, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>入住时间</th> <th>星级</th> <th>间数</th> <th>要求</th> <th>状态</th> ', 
            $line = 13, isFrame || ($out += " <th>操作</th> ", $line = 15), $out += ' </tr> </thead> <tbody class="T-hotel-list"> ', 
            $line = 19, $each(outHotelRemarkList, function(hotel) {
                $out += ' <tr data-id="', $line = 20, $out += $escape(hotel.outRemarkId), $out += '" ', 
                $line = 20, hotel.checked && ($out += ' class="success"', $line = 20), $out += '> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-hotelcheked" ', 
                $line = 23, hotel.checked && ($out += ' checked="checked" ', $line = 23), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：<span class="orderNumber">', 
                $line = 27, $out += $escape(hotel.orderNumber), $out += '</span></p> <p><span class="lineProductName">&lt;', 
                $line = 28, $out += $escape(hotel.lineProductName), $out += '&gt;</span></p> <p><span class="startTime">', 
                $line = 29, $out += $escape(hotel.startTime), $out += '</span><span class="partnerAgencyName">', 
                $line = 29, $out += $escape(hotel.partnerAgencyName), $out += '</span><span>外联销售：<span class="outOPUserName">', 
                $line = 29, $out += $escape(hotel.outOPUserName), $out += "</span></span></p> <p>收客单号：", 
                $line = 30, $out += $escape(hotel.tgOrderNumber), $out += "</p> </td> <td> <span >", 
                $line = 33, 1 == hotel.shuttleType ? ($out += " 接团 ", $line = 33) : 2 == hotel.shuttleType && ($out += " 送团", 
                $line = 33), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 34, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 34) : 2 == hotel.shuttleType && ($out += " 2", 
                $line = 34), $out += '" > </td> <td> <p>', $line = 37, $out += $escape(hotel.contactMemberName), 
                $out += '</p> <p><span class="adultCount">', $line = 38, $out += $escape(hotel.adultCount), 
                $out += '</span>大<span class="childCount">', $line = 38, $out += $escape(hotel.childCount), 
                $out += "</span>小</p> </td> <td> <p>", $line = 41, $out += $escape(hotel.checkInTime), 
                $out += "</p> </td> <td>", $line = 43, $out += $escape(hotel.hotelLevel), $out += "</td> <td> ", 
                $line = 45, $out += $escape(hotel.roomCount), $out += ' </td> <td><span class="require">', 
                $line = 47, $out += $escape(hotel.require), $out += "</span></td> <td> ", $line = 49, 
                1 == hotel.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成 ', 
                $line = 51) : 0 == hotel.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未完成 ', 
                $line = 53), $out += " </td> ", $line = 55, isFrame || ($out += ' <td> <a class="cursor T-inform T-action"> 通知</a> <a class="cursor T-arrange-item T-action"> <label class="padding-right20">|</label> 安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </td> ', 
                $line = 64), $out += " </tr> ", $line = 66;
            }), $out += ' </tbody> </table> <div class="text-center"> ', $line = 70, isFrame || ($out += ' <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 71, canMergeArrange || ($out += ' disabled="disabled" ', $line = 71), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> ', 
            $line = 74), $out += ' </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 79, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>星级</th>\r\n            <th>间数</th>\r\n            <th>要求</th>\r\n            <th>状态</th>\r\n            {{if !isFrame}}\r\n            <th>操作</th>\r\n            {{/if}}\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotel-list">\r\n    {{each outHotelRemarkList as hotel}}\r\n    <tr data-id="{{hotel.outRemarkId}}" {{if hotel.checked}} class="success"{{/if}}>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-hotelcheked" {{if hotel.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n            </label>\r\n        </td>\r\n        <td class="h-touristGroupInfo">\r\n            <p>中转单号：<span class="orderNumber">{{hotel.orderNumber}}</span></p>\r\n            <p><span class="lineProductName">&lt;{{hotel.lineProductName}}&gt;</span></p>\r\n            <p><span class="startTime">{{hotel.startTime}}</span><span class="partnerAgencyName">{{hotel.partnerAgencyName}}</span><span>外联销售：<span class="outOPUserName">{{hotel.outOPUserName}}</span></span></p>\r\n            <p>收客单号：{{hotel.tgOrderNumber}}</p>\r\n        </td>\r\n        <td>\r\n         <span >{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团{{/if}}</span>\r\n         <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}" >\r\n        </td>\r\n        <td>\r\n            <p>{{hotel.contactMemberName}}</p>\r\n            <p><span class="adultCount">{{hotel.adultCount}}</span>大<span class="childCount">{{hotel.childCount}}</span>小</p>\r\n        </td>\r\n        <td>\r\n            <p>{{hotel.checkInTime}}</p>\r\n        </td>\r\n        <td>{{hotel.hotelLevel}}</td>\r\n        <td>\r\n            {{hotel.roomCount}}\r\n        </td>\r\n        <td><span class="require">{{hotel.require}}</span></td>\r\n        <td>\r\n            {{if hotel.status == 1}}\r\n                <i class="ace-icon fa fa-check green bigger-130"></i> 已完成\r\n            {{else if hotel.status == 0}}\r\n                <i class="ace-icon fa fa-times red bigger-125"></i> 未完成\r\n            {{/if}}\r\n        </td>\r\n        {{if !isFrame}}\r\n        <td>\r\n            <a class="cursor T-inform T-action">\r\n                通知</a>\r\n            <a class="cursor T-arrange-item T-action">\r\n                <label class="padding-right20">|</label> 安排</a>\r\n            <a class="cursor T-view T-action">\r\n                <label class="padding-right20">|</label>查看\r\n        </td>\r\n        {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="text-center">\r\n   {{if !isFrame}}\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n    {{/if}}\r\n</div>\r\n  \r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});