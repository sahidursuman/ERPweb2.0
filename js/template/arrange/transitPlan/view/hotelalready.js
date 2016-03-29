/*TMODJS:{"debug":true,"version":43,"md5":"d4842fec5abc69c8fe1feb79c209a2e1"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/hotelalready", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outHotelRemarkList = $data.outHotelRemarkList, $escape = ($data.hotel, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>入住时间</th> <th>星级</th> <th>间数</th> <th>要求</th> <th>安排结果</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-hotel-list"> ', 
            $line = 18, $each(outHotelRemarkList, function(hotel) {
                $out += ' <tr data-id="', $line = 19, $out += $escape(hotel.outRemarkId), $out += '"> <td class="h-touristGroupInfo"> <p>中转单号：', 
                $line = 21, $out += $escape(hotel.orderNumber), $out += "</p> <p><span>&lt;", $line = 22, 
                $out += $escape(hotel.lineProductName), $out += "&gt;</span></p> <p><span>", $line = 23, 
                $out += $escape(hotel.startTime), $out += "</span><span>", $line = 23, $out += $escape(hotel.partnerAgencyName), 
                $out += "</span><span>外链销售：", $line = 23, $out += $escape(hotel.outOPUserName), 
                $out += "</span></p> <p>收客单号：", $line = 24, $out += $escape(hotel.tgOrderNumber), 
                $out += "</p> </td> <td> <span >", $line = 27, 1 == hotel.shuttleType ? ($out += " 接团 ", 
                $line = 27) : 2 == hotel.shuttleType && ($out += " 送团", $line = 27), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 28, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 28) : 2 == hotel.shuttleType && ($out += " 2", 
                $line = 28), $out += '" > </td> <td> <p>', $line = 31, $out += $escape(hotel.contactMemberName), 
                $out += "</p> <p>", $line = 32, $out += $escape(hotel.adultCount), $out += "大", 
                $line = 32, $out += $escape(hotel.childCount), $out += "小</p> </td> <td> <p>", $line = 35, 
                $out += $escape(hotel.checkInTime), $out += "</p> </td> <td>", $line = 37, $out += $escape(hotel.hotelLevel), 
                $out += "</td> <td> ", $line = 39, $out += $escape(hotel.roomCount), $out += " </td> <td>", 
                $line = 41, $out += $escape(hotel.require), $out += "</td> <td> <a>", $line = 43, 
                $out += $escape(hotel.hotelName), $out += "</a> </td> <td> ", $line = 46, 1 == hotel.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成 ', 
                $line = 48) : 0 == hotel.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未完成 ', 
                $line = 50), $out += ' </td> <td> <a class="cursor T-inform T-action"> 通知</a> <a class="cursor T-plan-hotel T-action"> <label class="padding-right20">|</label> 安排</a> <a class="cursor T-viewhotel-plan T-action"> <label class="padding-right20">|</label>查看 </td> </tr> ', 
                $line = 61;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 66, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>星级</th>\r\n            <th>间数</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotel-list">\r\n    {{each outHotelRemarkList as hotel}}\r\n    <tr data-id="{{hotel.outRemarkId}}">\r\n        <td class="h-touristGroupInfo">\r\n            <p>中转单号：{{hotel.orderNumber}}</p>\r\n            <p><span>&lt;{{hotel.lineProductName}}&gt;</span></p>\r\n            <p><span>{{hotel.startTime}}</span><span>{{hotel.partnerAgencyName}}</span><span>外链销售：{{hotel.outOPUserName}}</span></p>\r\n            <p>收客单号：{{hotel.tgOrderNumber}}</p>\r\n        </td>\r\n        <td>\r\n         <span >{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团{{/if}}</span>\r\n         <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}" >\r\n        </td>\r\n        <td>\r\n            <p>{{hotel.contactMemberName}}</p>\r\n            <p>{{hotel.adultCount}}大{{hotel.childCount}}小</p>\r\n        </td>\r\n        <td>\r\n            <p>{{hotel.checkInTime}}</p>\r\n        </td>\r\n        <td>{{hotel.hotelLevel}}</td>\r\n        <td>\r\n            {{hotel.roomCount}}\r\n        </td>\r\n        <td>{{hotel.require}}</td>\r\n        <td>\r\n            <a>{{hotel.hotelName}}</a>\r\n        </td>\r\n        <td>\r\n            {{if hotel.status == 1}}\r\n                <i class="ace-icon fa fa-check green bigger-130"></i> 已完成\r\n            {{else if hotel.status == 0}}\r\n                <i class="ace-icon fa fa-times red bigger-125"></i> 未完成\r\n            {{/if}}\r\n        </td>\r\n        <td>\r\n            <a class="cursor T-inform T-action">\r\n                通知</a>\r\n            <a class="cursor T-plan-hotel T-action">\r\n                <label class="padding-right20">|</label> 安排</a>\r\n            <a class="cursor T-viewhotel-plan T-action">\r\n                <label class="padding-right20">|</label>查看\r\n        </td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});