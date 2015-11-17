/*TMODJS:{"debug":true,"version":40,"md5":"552473b8e0ee756e0450c67a6c2c2bd9"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/hotelInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, data = $data.data, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.hotel, $data.index, $data.room, "");
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>入住日期</th> <th>需求内容</th> <th>酒店</th> <th>星级</th> <th>房型</th> <th>房费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(data, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 24, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 24, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 25, $out += $escape(rs.hotelList.length), $out += '">', $line = 25, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 26, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 26, $out += $escape($helpers.dateFormat(rs.arriveTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 27, $out += $escape(rs.hotelList.length), 
                $out += '">', $line = 27, $out += $escape(rs.condition), $out += "</td> ", $line = 28, 
                $each(rs.hotelList, function(hotel, index) {
                    $out += " ", $line = 29, 0 == index && ($out += ' <td rowspan="', $line = 30, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 30, $out += $escape(hotel.hotelName), $out += '</td> <td rowspan="', 
                    $line = 31, $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 31, 
                    $out += $escape(hotel.hotelLevel), $out += "</td> ", $line = 32, $each(hotel.roomTypeList, function(room, index) {
                        $out += " ", $line = 33, 0 == index && ($out += " <td>", $line = 34, $out += $escape(room.type), 
                        $out += "</td> <td>", $line = 35, $out += $escape(room.replyPrice), $out += "</td> ", 
                        $line = 36), $out += " ", $line = 37;
                    }), $out += ' <td rowspan="', $line = 38, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 38, $out += $escape(hotel.remark), $out += '</td> <td rowspan="', 
                    $line = 39, $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 39, 
                    $out += $escape(hotel.reserveMinutes), $out += '</td> <td rowspan="', $line = 40, 
                    $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 40, $out += $escape(hotel.expiryTime), 
                    $out += '</td> <td rowspan="', $line = 41, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 41, $out += $escape(hotel.status), $out += '</td> <td rowspan="', 
                    $line = 42, $out += $escape(hotel.roomTypeList.length), $out += '" data-id="', $line = 42, 
                    $out += $escape(hotel.id), $out += '"><a class="T-hotel-add">加入</a> | <a class="T-hotel-delete">删除</a></td> ', 
                    $line = 43), $out += " ", $line = 44;
                }), $out += " </tr> ", $line = 46, $each(rs.hotelList, function(hotel, index) {
                    $out += " ", $line = 47, 0 == index && ($out += " ", $line = 48, $each(hotel.roomTypeList, function(room, index) {
                        $out += " ", $line = 49, index > 0 && ($out += " <tr> <td>", $line = 51, $out += $escape(room.type), 
                        $out += "</td> <td>", $line = 52, $out += $escape(room.replyPrice), $out += "</td> </tr> ", 
                        $line = 54), $out += " ", $line = 55;
                    }), $out += " ", $line = 56), $out += " ", $line = 57;
                }), $out += " ", $line = 58, $each(rs.hotelList, function(hotel, index) {
                    $out += " ", $line = 59, index > 0 && ($out += ' <tr> <td rowspan="', $line = 61, 
                    $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 61, $out += $escape(hotel.hotelName), 
                    $out += '</td> <td rowspan="', $line = 62, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 62, $out += $escape(hotel.hotelLevel), $out += "</td> ", $line = 63, 
                    $each(hotel.roomTypeList, function(room, index) {
                        $out += " ", $line = 64, 0 == index && ($out += " <td>", $line = 65, $out += $escape(room.type), 
                        $out += "</td> <td>", $line = 66, $out += $escape(room.replyPrice), $out += "</td> ", 
                        $line = 67), $out += " ", $line = 68;
                    }), $out += ' <td rowspan="', $line = 69, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 69, $out += $escape(hotel.remark), $out += '</td> <td rowspan="', 
                    $line = 70, $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 70, 
                    $out += $escape(hotel.reserveMinutes), $out += '</td> <td rowspan="', $line = 71, 
                    $out += $escape(hotel.roomTypeList.length), $out += '">', $line = 71, $out += $escape(hotel.expiryTime), 
                    $out += '</td> <td rowspan="', $line = 72, $out += $escape(hotel.roomTypeList.length), 
                    $out += '">', $line = 72, $out += $escape(hotel.status), $out += '</td> <td rowspan="', 
                    $line = 73, $out += $escape(hotel.roomTypeList.length), $out += '" data-id="', $line = 73, 
                    $out += $escape(hotel.id), $out += '"><a class="T-hotel-add">加入</a> | <a class="T-hotel-delete">删除</a></td> </tr> ', 
                    $line = 75, $each(hotel.roomTypeList, function(room, index) {
                        $out += " ", $line = 76, index > 0 && ($out += " <tr> <td>", $line = 78, $out += $escape(room.type), 
                        $out += "</td> <td>", $line = 79, $out += $escape(room.replyPrice), $out += "</td> </tr> ", 
                        $line = 81), $out += " ", $line = 82;
                    }), $out += " ", $line = 83), $out += " ", $line = 84;
                }), $out += " ", $line = 85;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>入住日期</th>               \r\n				<th>需求内容</th>\r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>房型</th>\r\n				<th>房费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.hotelList.length}}">{{rs.condition}}</td>\r\n					{{each rs.hotelList as hotel index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.hotelName}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.hotelLevel}}</td>\r\n							{{each hotel.roomTypeList as room index}}\r\n								{{if index == 0}}\r\n									<td>{{room.type}}</td>\r\n									<td>{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.remark}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.reserveMinutes}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.expiryTime}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.status}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}" data-id="{{hotel.id}}"><a class="T-hotel-add">加入</a> | <a class="T-hotel-delete">删除</a></td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelList as hotel index}}\r\n					{{if index == 0}}\r\n						{{each hotel.roomTypeList as room index}}\r\n							{{if index > 0}}\r\n								<tr>\r\n									<td>{{room.type}}</td>\r\n									<td>{{room.replyPrice}}</td>\r\n								</tr>\r\n							{{/if}}\r\n						{{/each}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelList as hotel index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.hotelName}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.hotelLevel}}</td>\r\n							{{each hotel.roomTypeList as room index}}\r\n								{{if index == 0}}\r\n									<td>{{room.type}}</td>\r\n									<td>{{room.replyPrice}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.remark}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.reserveMinutes}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.expiryTime}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}">{{hotel.status}}</td>\r\n							<td rowspan="{{hotel.roomTypeList.length}}" data-id="{{hotel.id}}"><a class="T-hotel-add">加入</a> | <a class="T-hotel-delete">删除</a></td>\r\n						</tr>\r\n						{{each hotel.roomTypeList as room index}}\r\n							{{if index > 0}}\r\n								<tr>\r\n									<td>{{room.type}}</td>\r\n									<td>{{room.replyPrice}}</td>\r\n								</tr>\r\n							{{/if}}\r\n						{{/each}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});