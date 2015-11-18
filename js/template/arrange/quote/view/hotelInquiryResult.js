/*TMODJS:{"debug":true,"version":61,"md5":"6ac1f93aa2b2442f2e61c3752acdeb51"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/hotelInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, data = $data.data, $escape = ($data.rs, 
            $data.$index, $utils.$escape), hotel = ($data.offer, $data.index, $data.room, $data.hotel), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>入住日期</th> <th>需求内容</th> <th>酒店</th> <th>星级</th> <th>房型</th> <th>房费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(data, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 24, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 24, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 25, $out += $escape(rs.hotelList.length), $out += '">', $line = 25, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 26, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 26, $out += $escape($helpers.dateFormat(rs.arriveTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 27, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 27, $out += $escape(rs.condition), $out += "</td> ", $line = 28, 
                $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 29, 0 == index && ($out += ' <td rowspan="', $line = 30, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 30, $out += $escape(offer.hotelName), $out += '</td> <td rowspan="', 
                    $line = 31, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 31, 
                    $out += $escape(offer.hotelLevel), $out += "</td> ", $line = 32, offer.roomTypeList.length > 0 ? ($out += " ", 
                    $line = 33, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 34, 0 == index && ($out += ' <td class="T-hotelType-', $line = 35, 
                        $out += $escape(offer.id), $out += '">', $line = 35, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 36, $out += $escape(offer.id), 
                        $out += '">', $line = 36, $out += $escape(room.replyPrice), $out += "</td> ", $line = 37), 
                        $out += " ", $line = 38;
                    }), $out += " ", $line = 39) : ($out += ' <td class="T-hotelType-', $line = 40, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 41, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 42), $out += ' <td rowspan="', 
                    $line = 43, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 43, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 44, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 44, $out += $escape(offer.reserveMinutes), $out += '</td> <td rowspan="', 
                    $line = 45, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 45, 
                    $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', $line = 46, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 46, $out += $escape(offer.status), $out += '</td> <td rowspan="', 
                    $line = 47, $out += $escape(offer.roomTypeList.length), $out += '" data-id="', $line = 47, 
                    $out += $escape(offer.id), $out += '"> ', $line = 48, "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 50) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 52), $out += ' <a class="T-hotel-delete">删除</a> </td> ', $line = 55), $out += " ", 
                    $line = 56;
                }), $out += " </tr> ", $line = 58, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 59, 0 == index && ($out += " ", $line = 60, offer.roomTypeList.length > 0 ? ($out += " ", 
                    $line = 61, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 62, index > 0 && ($out += ' <td class="T-hotelType-', $line = 63, 
                        $out += $escape(offer.id), $out += '">', $line = 63, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 64, $out += $escape(offer.id), 
                        $out += '">', $line = 64, $out += $escape(room.replyPrice), $out += "</td> ", $line = 65), 
                        $out += " ", $line = 66;
                    }), $out += " ", $line = 67) : ($out += ' <td class="T-hotelType-', $line = 68, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 69, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 70), $out += " ", $line = 71), 
                    $out += " ", $line = 72;
                }), $out += " ", $line = 73, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 74, index > 0 && ($out += ' <tr> <td rowspan="', $line = 76, 
                    $out += $escape(offer.roomTypeList.length), $out += '">', $line = 76, $out += $escape(offer.hotelName), 
                    $out += '</td> <td rowspan="', $line = 77, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 77, $out += $escape(offer.hotelLevel), $out += "</td> ", $line = 78, 
                    offer.roomTypeList.length > 0 ? ($out += " ", $line = 79, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 80, 0 == index && ($out += ' <td class="T-hotelType-', $line = 81, 
                        $out += $escape(offer.id), $out += '">', $line = 81, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 82, $out += $escape(offer.id), 
                        $out += '">', $line = 82, $out += $escape(room.replyPrice), $out += "</td> ", $line = 83), 
                        $out += " ", $line = 84;
                    }), $out += " ", $line = 85) : ($out += ' <td class="T-hotelType-', $line = 86, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 87, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 88), $out += ' <td rowspan="', 
                    $line = 89, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 89, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 90, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 90, $out += $escape(offer.reserveMinutes), $out += '</td> <td rowspan="', 
                    $line = 91, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 91, 
                    $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', $line = 92, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 92, $out += $escape(offer.status), $out += '</td> <td rowspan="', 
                    $line = 93, $out += $escape(offer.roomTypeList.length), $out += '" data-id="', $line = 93, 
                    $out += $escape(hotel.id), $out += '"> ', $line = 94, "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 96) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 98), $out += ' <a class="T-hotel-delete">删除</a> </td> </tr> ', $line = 102, 
                    offer.roomTypeList.length > 0 ? ($out += " ", $line = 103, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 104, index > 0 && ($out += ' <td class="T-hotelType-', $line = 105, 
                        $out += $escape(offer.id), $out += '">', $line = 105, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 106, $out += $escape(offer.id), 
                        $out += '">', $line = 106, $out += $escape(room.replyPrice), $out += "</td> ", $line = 107), 
                        $out += " ", $line = 108;
                    }), $out += " ", $line = 109) : ($out += ' <td class="T-hotelType-', $line = 110, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 111, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 112), $out += " ", $line = 113), 
                    $out += " ", $line = 114;
                }), $out += " ", $line = 115;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>入住日期</th>               \r\n				<th>需求内容</th>\r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>房型</th>\r\n				<th>房费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.condition}}</td>\r\n					{{each rs.hotelList as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelLevel}}</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.reserveMinutes}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span> \r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index == 0}}\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelLevel}}</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.reserveMinutes}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{hotel.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});