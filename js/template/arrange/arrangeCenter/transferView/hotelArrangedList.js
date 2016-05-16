/*TMODJS:{"debug":true,"version":53,"md5":"d4e65dc0d407c3d858f5f762bea370f4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/hotelArrangedList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, unifyList = $data.unifyList, $escape = ($data.hotel, 
            $data.$index, $data.seat, $data.index, $utils.$escape), recordSize = ($data.itme, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>酒店信息</th> <th>类型</th> <th>中转信息</th> <th>客人信息</th> <th>入住时间</th> <th>要求</th> <th>安排人</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-hotelarranged-list"> ', 
            $line = 16, $each(unifyList, function(hotel) {
                $out += " ", $line = 17, $each(hotel.outRemarkList, function(seat, index) {
                    $out += " ", $line = 18, 0 == index && ($out += ' <tr data-id="', $line = 19, $out += $escape(hotel.unifyId), 
                    $out += '"> <td class="h-touristGroupInfo" rowspan="', $line = 20, $out += $escape(hotel.outRemarkList.length), 
                    $out += '"> ', $line = 21, $each(hotel.hotelList, function(itme) {
                        $out += " <p>", $line = 22, $out += $escape(itme.hotelName), $out += "</p> <p>", 
                        $line = 23, $out += $escape(itme.hotelRoom), $out += "</p> <p>", $line = 24, $out += $escape(itme.memberCount), 
                        $out += "</p> ", $line = 25;
                    }), $out += " </td> ", $line = 27), $out += " ", $line = 28, 0 == index && ($out += ' <td rowspan="', 
                    $line = 29, $out += $escape(hotel.outRemarkList.length), $out += '"> <span >', $line = 30, 
                    1 == hotel.shuttleType ? ($out += " 接团 ", $line = 30) : 2 == hotel.shuttleType ? ($out += " 送团 ", 
                    $line = 30) : 3 == hotel.shuttleType && ($out += "返程住宿", $line = 30), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                    $line = 31, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 31) : 2 == hotel.shuttleType && ($out += " 2", 
                    $line = 31), $out += '" > </td> ', $line = 33), $out += ' <td class="h-touristGroupInfo"> <p>中转单号：', 
                    $line = 35, $out += $escape(seat.orderNumber), $out += "</p> <p><span>&lt;", $line = 36, 
                    $out += $escape(seat.lineProductName), $out += "&gt;</span></p> <p><span>", $line = 37, 
                    $out += $escape(seat.startTime), $out += "</span><span>", $line = 37, $out += $escape(seat.partnerAgencyName), 
                    $out += "</span><span>外联销售：", $line = 37, $out += $escape(seat.outOPUserName), $out += "</span></p> <p>收客单号：", 
                    $line = 38, $out += $escape(seat.tgOrderNumber), $out += "</p> </td> <td> <p>", 
                    $line = 41, $out += $escape(seat.contactMemberName), $out += "</p> <p>", $line = 42, 
                    $out += $escape(seat.adultCount), $out += " 大 ", $line = 42, $out += $escape(seat.childCount), 
                    $out += " 小</p> </td> <td>", $line = 44, $out += $escape(seat.checkInTime), $out += "</td> <td> ", 
                    $line = 46, $out += $escape(seat.require), $out += " </td> ", $line = 48, 0 == index && ($out += ' <td rowspan="', 
                    $line = 49, $out += $escape(hotel.outRemarkList.length), $out += '"> ', $line = 50, 
                    $out += $escape(hotel.arrangeUserName), $out += "</td> ", $line = 51, 0 == index && ($out += ' <td rowspan="', 
                    $line = 52, $out += $escape(hotel.outRemarkList.length), $out += '"> ', $line = 53), 
                    $out += " ", $line = 54, 3 == hotel.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已完成 ', 
                    $line = 56) : ($out += '<i class="ace-icon fa fa-times red bigger-125"></i>未完成 ', 
                    $line = 57), $out += " </td> ", $line = 59), $out += " ", $line = 60, 0 == index && ($out += ' <td rowspan="', 
                    $line = 61, $out += $escape(hotel.outRemarkList.length), $out += '"> <a class="cursor T-arrange-item T-action">安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </a> ', 
                    $line = 66, 1 == hotel.isConfirmAccount ? ($out += ' <a class="cursor" style="color:#bbb;" data-catename="hotel" title="取消"><label class="padding-right20">|</label>取消</a> ', 
                    $line = 67) : ($out += ' <a class="cursor T-action T-hotel-cancel" data-catename="hotel" title="取消"><label class="padding-right20">|</label>取消</a> ', 
                    $line = 69), $out += " </td> ", $line = 71), $out += " </tr> ", $line = 73;
                }), $out += " ", $line = 74;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 79, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>酒店信息</th>\r\n            <th>类型</th>\r\n            <th>中转信息</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>要求</th>\r\n            <th>安排人</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotelarranged-list">\r\n        {{each unifyList as hotel}}\r\n        {{each hotel.outRemarkList as seat index}}\r\n        {{if index == 0}}\r\n        <tr data-id="{{hotel.unifyId}}">\r\n            <td class="h-touristGroupInfo" rowspan="{{hotel.outRemarkList.length}}">\r\n            {{each hotel.hotelList as itme}}\r\n                <p>{{itme.hotelName}}</p>\r\n                <p>{{itme.hotelRoom}}</p>\r\n                <p>{{itme.memberCount}}</p>\r\n            {{/each}}\r\n            </td>\r\n        {{/if}} \r\n            {{if index == 0}}\r\n            <td rowspan="{{hotel.outRemarkList.length}}">\r\n             <span >{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团 {{else if hotel.shuttleType == 3}}返程住宿{{/if}}</span>\r\n             <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}" >\r\n            </td>\r\n            {{/if}}  \r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：{{seat.orderNumber}}</p>\r\n                <p><span>&lt;{{seat.lineProductName}}&gt;</span></p>\r\n                <p><span>{{seat.startTime}}</span><span>{{seat.partnerAgencyName}}</span><span>外联销售：{{seat.outOPUserName}}</span></p>\r\n                <p>收客单号：{{seat.tgOrderNumber}}</p>\r\n            </td>\r\n            <td>\r\n                <p>{{seat.contactMemberName}}</p>\r\n                <p>{{seat.adultCount}} 大 {{seat.childCount}} 小</p>\r\n            </td>\r\n            <td>{{seat.checkInTime}}</td>\r\n            <td>\r\n                {{seat.require}}\r\n            </td>\r\n            {{if index == 0}}\r\n            <td rowspan="{{hotel.outRemarkList.length}}">\r\n            {{hotel.arrangeUserName}}</td>\r\n            {{if index == 0}}\r\n            <td rowspan="{{hotel.outRemarkList.length}}">\r\n            {{/if}}\r\n            {{if hotel.status == 3}}\r\n            <i class="ace-icon fa fa-check green bigger-130"></i>已完成\r\n            {{else}}<i class="ace-icon fa fa-times red bigger-125"></i>未完成\r\n            {{/if}}\r\n            </td>\r\n            {{/if}}\r\n            {{if index == 0}}\r\n            <td rowspan="{{hotel.outRemarkList.length}}">\r\n                <a class="cursor T-arrange-item T-action">安排</a>\r\n                <a class="cursor T-view T-action">\r\n                    <label class="padding-right20">|</label>查看\r\n                </a>\r\n                 {{ if hotel.isConfirmAccount == 1 }}\r\n                    <a class="cursor" style="color:#bbb;" data-catename="hotel" title="取消"><label class="padding-right20">|</label>取消</a> {{else}}\r\n                    <a class="cursor T-action T-hotel-cancel" data-catename="hotel" title="取消"><label class="padding-right20">|</label>取消</a>\r\n                {{/if}}\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});