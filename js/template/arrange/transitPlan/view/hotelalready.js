/*TMODJS:{"debug":true,"version":120,"md5":"e968b1f0e433524f25c74c182b1bded8"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/hotelalready", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, unifyList = $data.unifyList, $escape = ($data.hotel, 
            $data.$index, $data.itme, $data.seat, $data.index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>酒店信息</th> <th>类型</th> <th>中转信息</th> <th>客人信息</th> <th>入住时间</th> <th>要求</th> <th>操作</th> </tr> </thead> <tbody class="T-hotelarranged-list"> ', 
            $line = 14, $each(unifyList, function(hotel) {
                $out += " ", $line = 15, $each(hotel.hotelList, function(itme) {
                    $out += " ", $line = 16, $each(hotel.outRemarkList, function(seat, index) {
                        $out += " ", $line = 17, 0 == index && ($out += ' <tr data-id="', $line = 18, $out += $escape(hotel.unifyId), 
                        $out += '"> <td class="h-touristGroupInfo" rowspan="', $line = 19, $out += $escape(hotel.outRemarkList.length), 
                        $out += '"> <p>', $line = 20, $out += $escape(itme.hotelName), $out += "</p> <p>", 
                        $line = 21, $out += $escape(itme.hotelRoom), $out += "</p> <p>", $line = 22, $out += $escape(itme.memberCount), 
                        $out += "</p> </td> ", $line = 24), $out += " <td> <span >", $line = 26, 1 == hotel.shuttleType ? ($out += " 接团 ", 
                        $line = 26) : 2 == hotel.shuttleType && ($out += " 送团", $line = 26), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                        $line = 27, 1 == hotel.shuttleType ? ($out += " 1 ", $line = 27) : 2 == hotel.shuttleType && ($out += " 2", 
                        $line = 27), $out += '" > </td> <td class="h-touristGroupInfo"> <p>中转单号：', $line = 31, 
                        $out += $escape(seat.orderNumber), $out += "</p> <p><span>&lt;", $line = 32, $out += $escape(seat.lineProductName), 
                        $out += "&gt;</span></p> <p><span>", $line = 33, $out += $escape(seat.startTime), 
                        $out += "</span><span>", $line = 33, $out += $escape(seat.partnerAgencyName), $out += "</span><span>外链销售：", 
                        $line = 33, $out += $escape(seat.outOPUserName), $out += "</span></p> <p>收客单号：", 
                        $line = 34, $out += $escape(seat.tgOrderNumber), $out += "</p> </td> <td> <p>", 
                        $line = 37, $out += $escape(seat.contactMemberName), $out += "</p> <p>", $line = 38, 
                        $out += $escape(seat.adultCount), $out += " 大 ", $line = 38, $out += $escape(seat.childCount), 
                        $out += " 小</p> </td> <td>", $line = 40, $out += $escape(seat.checkInTime), $out += "</td> <td> ", 
                        $line = 42, $out += $escape(hotel.require), $out += " </td> ", $line = 44, 0 == index && ($out += ' <td rowspan="', 
                        $line = 45, $out += $escape(hotel.outRemarkList.length), $out += '"> <a class="cursor T-plan-hotel T-action">安排</a> <a class="cursor T-viewhotel-plan T-action"> <label class="padding-right20">|</label>查看 </td> ', 
                        $line = 50), $out += " </tr> ", $line = 52;
                    }), $out += " ", $line = 53;
                }), $out += " ", $line = 54;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 59, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>酒店信息</th>\r\n            <th>类型</th>\r\n            <th>中转信息</th>\r\n            <th>客人信息</th>\r\n            <th>入住时间</th>\r\n            <th>要求</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotelarranged-list">\r\n	    {{each unifyList as hotel}}\r\n	    {{each hotel.hotelList as itme}}\r\n	    {{each hotel.outRemarkList as seat index}}\r\n	    {{if index == 0}}\r\n	    <tr data-id="{{hotel.unifyId}}">\r\n	    	<td class="h-touristGroupInfo" rowspan="{{hotel.outRemarkList.length}}">\r\n	    		<p>{{itme.hotelName}}</p>\r\n	    		<p>{{itme.hotelRoom}}</p>\r\n	    		<p>{{itme.memberCount}}</p>\r\n	    	</td>\r\n	    {{/if}}	\r\n	        <td>\r\n	         <span >{{if hotel.shuttleType == 1}} 接团 {{else if hotel.shuttleType == 2}} 送团{{/if}}</span>\r\n	         <input type="hidden" name="shuttleType" value="{{if hotel.shuttleType == 1}} 1 {{else if hotel.shuttleType == 2}} 2{{/if}}" >\r\n	        </td>\r\n	        \r\n	        <td class="h-touristGroupInfo">\r\n	            <p>中转单号：{{seat.orderNumber}}</p>\r\n	            <p><span>&lt;{{seat.lineProductName}}&gt;</span></p>\r\n	            <p><span>{{seat.startTime}}</span><span>{{seat.partnerAgencyName}}</span><span>外链销售：{{seat.outOPUserName}}</span></p>\r\n	            <p>收客单号：{{seat.tgOrderNumber}}</p>\r\n	        </td>\r\n	        <td>\r\n	            <p>{{seat.contactMemberName}}</p>\r\n	            <p>{{seat.adultCount}} 大 {{seat.childCount}} 小</p>\r\n	        </td>\r\n	        <td>{{seat.checkInTime}}</td>\r\n	        <td>\r\n	            {{hotel.require}}\r\n	        </td>\r\n	        {{if index == 0}}\r\n	        <td rowspan="{{hotel.outRemarkList.length}}">\r\n	            <a class="cursor T-plan-hotel T-action">安排</a>\r\n	            <a class="cursor T-viewhotel-plan T-action">\r\n	                <label class="padding-right20">|</label>查看\r\n	        </td>\r\n	        {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n        {{/each}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation-hotel">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});