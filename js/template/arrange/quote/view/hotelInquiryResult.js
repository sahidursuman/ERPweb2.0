/*TMODJS:{"debug":true,"version":68,"md5":"521a6e35d19555e74b975c74a89d36a9"}*/
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
                    $line = 31, $out += $escape(offer.roomTypeList.length), $out += '"> ', $line = 32, 
                    1 == offer.hotelLevel ? ($out += " 三星以下 ", $line = 34) : 2 == offer.hotelLevel ? ($out += " 三星 ", 
                    $line = 36) : 3 == offer.hotelLevel ? ($out += " 准四星 ", $line = 38) : 4 == offer.hotelLevel ? ($out += " 四星 ", 
                    $line = 40) : 5 == offer.hotelLevel ? ($out += " 准五星 ", $line = 42) : 6 == offer.hotelLevel ? ($out += " 五星 ", 
                    $line = 44) : 7 == offer.hotelLevel && ($out += " 五星以上 ", $line = 46), $out += " </td> ", 
                    $line = 48, offer.roomTypeList.length > 0 ? ($out += " ", $line = 49, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 50, 0 == index && ($out += ' <td class="T-hotelType-', $line = 51, 
                        $out += $escape(offer.id), $out += '">', $line = 51, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 52, $out += $escape(offer.id), 
                        $out += '">', $line = 52, $out += $escape(room.replyPrice), $out += "</td> ", $line = 53), 
                        $out += " ", $line = 54;
                    }), $out += " ", $line = 55) : ($out += ' <td class="T-hotelType-', $line = 56, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 57, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 58), $out += ' <td rowspan="', 
                    $line = 59, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 59, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 60, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 61, -1 == offer.reserveMinutes ? ($out += " 一直保留 ", $line = 63) : ($out += " ", 
                    $line = 64, offer.reserveMinutes / 60 > 0 && ($out += " ", $line = 65, $out += $escape(offer.reserveMinutes / 60), 
                    $out += "小时 ", $line = 66), $out += " ", $line = 67, $out += $escape(offer.reserveMinutes % 60), 
                    $out += "分钟 ", $line = 68), $out += ' </td> <td rowspan="', $line = 70, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 70, $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', 
                    $line = 71, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 71, 
                    $out += $escape(offer.status), $out += '</td> <td rowspan="', $line = 72, $out += $escape(offer.roomTypeList.length), 
                    $out += '" data-id="', $line = 72, $out += $escape(offer.id), $out += '"> ', $line = 73, 
                    "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 75) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 77), $out += ' <a class="T-hotel-delete">删除</a> </td> ', $line = 80), $out += " ", 
                    $line = 81;
                }), $out += " </tr> ", $line = 83, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 84, 0 == index && ($out += " ", $line = 85, offer.roomTypeList.length > 0 ? ($out += " ", 
                    $line = 86, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 87, index > 0 && ($out += ' <td class="T-hotelType-', $line = 88, 
                        $out += $escape(offer.id), $out += '">', $line = 88, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 89, $out += $escape(offer.id), 
                        $out += '">', $line = 89, $out += $escape(room.replyPrice), $out += "</td> ", $line = 90), 
                        $out += " ", $line = 91;
                    }), $out += " ", $line = 92) : ($out += ' <td class="T-hotelType-', $line = 93, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 94, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 95), $out += " ", $line = 96), 
                    $out += " ", $line = 97;
                }), $out += " ", $line = 98, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 99, index > 0 && ($out += ' <tr> <td rowspan="', $line = 101, 
                    $out += $escape(offer.roomTypeList.length), $out += '">', $line = 101, $out += $escape(offer.hotelName), 
                    $out += '</td> <td rowspan="', $line = 102, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 103, 1 == offer.hotelLevel ? ($out += " 三星以下 ", $line = 105) : 2 == offer.hotelLevel ? ($out += " 三星 ", 
                    $line = 107) : 3 == offer.hotelLevel ? ($out += " 准四星 ", $line = 109) : 4 == offer.hotelLevel ? ($out += " 四星 ", 
                    $line = 111) : 5 == offer.hotelLevel ? ($out += " 准五星 ", $line = 113) : 6 == offer.hotelLevel ? ($out += " 五星 ", 
                    $line = 115) : 7 == offer.hotelLevel && ($out += " 五星以上 ", $line = 117), $out += " </td> ", 
                    $line = 119, offer.roomTypeList.length > 0 ? ($out += " ", $line = 120, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 121, 0 == index && ($out += ' <td class="T-hotelType-', $line = 122, 
                        $out += $escape(offer.id), $out += '">', $line = 122, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 123, $out += $escape(offer.id), 
                        $out += '">', $line = 123, $out += $escape(room.replyPrice), $out += "</td> ", $line = 124), 
                        $out += " ", $line = 125;
                    }), $out += " ", $line = 126) : ($out += ' <td class="T-hotelType-', $line = 127, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 128, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 129), $out += ' <td rowspan="', 
                    $line = 130, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 130, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 131, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 131, $out += $escape(offer.reserveMinutes), $out += '</td> <td rowspan="', 
                    $line = 132, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 132, 
                    $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', $line = 133, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 133, $out += $escape(offer.status), $out += '</td> <td rowspan="', 
                    $line = 134, $out += $escape(offer.roomTypeList.length), $out += '" data-id="', 
                    $line = 134, $out += $escape(hotel.id), $out += '"> ', $line = 135, "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 137) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 139), $out += ' <a class="T-hotel-delete">删除</a> </td> </tr> ', $line = 143, 
                    offer.roomTypeList.length > 0 ? ($out += " ", $line = 144, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 145, index > 0 && ($out += ' <td class="T-hotelType-', $line = 146, 
                        $out += $escape(offer.id), $out += '">', $line = 146, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 147, $out += $escape(offer.id), 
                        $out += '">', $line = 147, $out += $escape(room.replyPrice), $out += "</td> ", $line = 148), 
                        $out += " ", $line = 149;
                    }), $out += " ", $line = 150) : ($out += ' <td class="T-hotelType-', $line = 151, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 152, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 153), $out += " ", $line = 154), 
                    $out += " ", $line = 155;
                }), $out += " ", $line = 156;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>入住日期</th>               \r\n				<th>需求内容</th>\r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>房型</th>\r\n				<th>房费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.condition}}</td>\r\n					{{each rs.hotelList as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.reserveMinutes == -1}}\r\n									一直保留\r\n								{{else}}\r\n									{{if (offer.reserveMinutes/60) > 0}}\r\n										{{offer.reserveMinutes/60}}小时\r\n									{{/if}}\r\n									{{offer.reserveMinutes%60}}分钟\r\n								{{/if}}\r\n							</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span> \r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index == 0}}\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.reserveMinutes}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{hotel.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});