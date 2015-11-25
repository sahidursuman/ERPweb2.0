/*TMODJS:{"debug":true,"version":88,"md5":"7288311e7bacc1dc7b26da6969a3edaf"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/hotelInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, data = $data.data, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.offer, $data.index, $data.room, "");
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>入住日期</th> <th>需求内容</th> <th>酒店</th> <th>星级</th> <th>房型</th> <th>房费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(data, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 24, $out += $escape(rs.trLen), $out += '">', 
                $line = 24, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 25, $out += $escape(rs.trLen), $out += '">', $line = 25, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 26, $out += $escape(rs.trLen), $out += '">', 
                $line = 26, $out += $escape($helpers.dateFormat(rs.arriveTime, "yyyy-MM-dd")), $out += '</td> <td rowspan="', 
                $line = 27, $out += $escape(rs.trLen), $out += '">', $line = 27, $out += $escape(rs.condition), 
                $out += "</td> ", $line = 28, $each(rs.hotelList, function(offer, index) {
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
                        $out += '"> ', $line = 53, 1 == room.isContractPrice ? ($out += " ", $line = 54, 
                        $out += $escape(room.price), $out += " ", $line = 55) : ($out += " ", $line = 56, 
                        "已同意" == offer.status ? ($out += " ", $line = 57, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 58) : ($out += " - ", $line = 60), $out += " ", $line = 61), 
                        $out += " </td> ", $line = 63), $out += " ", $line = 64;
                    }), $out += " ", $line = 65) : ($out += ' <td class="T-hotelType-', $line = 66, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 67, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 68), $out += ' <td rowspan="', 
                    $line = 69, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 69, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 70, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 71, -1 == offer.reserveMinutes ? ($out += " ", $line = 72, 
                    "已拒绝" == offer.status ? ($out += " - ", $line = 74) : ($out += " 一直保留 ", $line = 76), 
                    $out += " ", $line = 77) : 0 == offer.reserveMinutes ? ($out += " - ", $line = 79) : ($out += " ", 
                    $line = 80, $out += $escape(offer.reserveTime), $out += " ", $line = 81), $out += ' </td> <td rowspan="', 
                    $line = 83, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 83, 
                    $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', $line = 84, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 84, $out += $escape(offer.status), $out += '</td> <td rowspan="', 
                    $line = 85, $out += $escape(offer.roomTypeList.length), $out += '" data-id="', $line = 85, 
                    $out += $escape(offer.id), $out += '"> ', $line = 86, "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 88) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 90), $out += ' <a class="T-hotel-delete">删除</a> </td> ', $line = 93), $out += " ", 
                    $line = 94;
                }), $out += " </tr> ", $line = 96, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 97, 0 == index && ($out += " ", $line = 98, offer.roomTypeList.length > 0 ? ($out += " ", 
                    $line = 99, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 100, index > 0 && ($out += ' <td class="T-hotelType-', $line = 101, 
                        $out += $escape(offer.id), $out += '">', $line = 101, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 102, $out += $escape(offer.id), 
                        $out += '"> ', $line = 103, 1 == room.isContractPrice ? ($out += " ", $line = 104, 
                        $out += $escape(room.price), $out += " ", $line = 105) : ($out += " ", $line = 106, 
                        "已同意" == offer.status ? ($out += " ", $line = 107, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 108) : ($out += " - ", $line = 110), $out += " ", $line = 111), 
                        $out += " </td> ", $line = 113), $out += " ", $line = 114;
                    }), $out += " ", $line = 115) : ($out += ' <td class="T-hotelType-', $line = 116, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 117, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 118), $out += " ", $line = 119), 
                    $out += " ", $line = 120;
                }), $out += " ", $line = 121, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 122, index > 0 && ($out += ' <tr> <td rowspan="', $line = 124, 
                    $out += $escape(offer.roomTypeList.length), $out += '">', $line = 124, $out += $escape(offer.hotelName), 
                    $out += '</td> <td rowspan="', $line = 125, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 126, 1 == offer.hotelLevel ? ($out += " 三星以下 ", $line = 128) : 2 == offer.hotelLevel ? ($out += " 三星 ", 
                    $line = 130) : 3 == offer.hotelLevel ? ($out += " 准四星 ", $line = 132) : 4 == offer.hotelLevel ? ($out += " 四星 ", 
                    $line = 134) : 5 == offer.hotelLevel ? ($out += " 准五星 ", $line = 136) : 6 == offer.hotelLevel ? ($out += " 五星 ", 
                    $line = 138) : 7 == offer.hotelLevel && ($out += " 五星以上 ", $line = 140), $out += " </td> ", 
                    $line = 142, offer.roomTypeList.length > 0 ? ($out += " ", $line = 143, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 144, 0 == index && ($out += ' <td class="T-hotelType-', $line = 145, 
                        $out += $escape(offer.id), $out += '">', $line = 145, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 146, $out += $escape(offer.id), 
                        $out += '"> ', $line = 147, 1 == room.isContractPrice ? ($out += " ", $line = 148, 
                        $out += $escape(room.price), $out += " ", $line = 149) : ($out += " ", $line = 150, 
                        "已同意" == offer.status ? ($out += " ", $line = 151, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 152) : ($out += " - ", $line = 154), $out += " ", $line = 155), 
                        $out += " </td> ", $line = 157), $out += " ", $line = 158;
                    }), $out += " ", $line = 159) : ($out += ' <td class="T-hotelType-', $line = 160, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 161, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 162), $out += ' <td rowspan="', 
                    $line = 163, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 163, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 164, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 165, -1 == offer.reserveMinutes ? ($out += " ", $line = 166, 
                    "已拒绝" == offer.status ? ($out += " - ", $line = 168) : ($out += " 一直保留 ", $line = 170), 
                    $out += " ", $line = 171) : 0 == offer.reserveMinutes ? ($out += " - ", $line = 173) : ($out += " ", 
                    $line = 174, $out += $escape(offer.reserveTime), $out += " ", $line = 175), $out += ' </td> <td rowspan="', 
                    $line = 177, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 177, 
                    $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', $line = 178, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 178, $out += $escape(offer.status), $out += '</td> <td rowspan="', 
                    $line = 179, $out += $escape(offer.roomTypeList.length), $out += '" data-id="', 
                    $line = 179, $out += $escape(offer.id), $out += '"> ', $line = 180, "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 182) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 184), $out += ' <a class="T-hotel-delete">删除</a> </td> </tr> ', $line = 188, 
                    offer.roomTypeList.length > 0 ? ($out += " ", $line = 189, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 190, index > 0 && ($out += ' <td class="T-hotelType-', $line = 191, 
                        $out += $escape(offer.id), $out += '">', $line = 191, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 192, $out += $escape(offer.id), 
                        $out += '"> ', $line = 193, 1 == room.isContractPrice ? ($out += " ", $line = 194, 
                        $out += $escape(room.price), $out += " ", $line = 195) : ($out += " ", $line = 196, 
                        "已同意" == offer.status ? ($out += " ", $line = 197, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 198) : ($out += " - ", $line = 200), $out += " ", $line = 201), 
                        $out += " </td> ", $line = 203), $out += " ", $line = 204;
                    }), $out += " ", $line = 205) : ($out += ' <td class="T-hotelType-', $line = 206, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 207, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 208), $out += " ", $line = 209), 
                    $out += " ", $line = 210;
                }), $out += " ", $line = 211;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>入住日期</th>               \r\n				<th>需求内容</th>\r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>房型</th>\r\n				<th>房费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.trLen}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.condition}}</td>\r\n					{{each rs.hotelList as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">\r\n										{{if room.isContractPrice == 1}}\r\n											{{room.price}}\r\n										{{else}}\r\n											{{if offer.status == \'已同意\'}}\r\n												{{room.replyPrice}}\r\n											{{else}}\r\n												-\r\n											{{/if}}\r\n										{{/if}}\r\n										</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.reserveMinutes == -1}}\r\n									{{if offer.status == "已拒绝"}}\r\n									-\r\n									{{else}}\r\n									一直保留\r\n									{{/if}}\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span> \r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index == 0}}\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">\r\n									{{if room.isContractPrice == 1}}\r\n										{{room.price}}\r\n									{{else}}\r\n										{{if offer.status == \'已同意\'}}\r\n											{{room.replyPrice}}\r\n										{{else}}\r\n											-\r\n										{{/if}}\r\n									{{/if}}\r\n									</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">\r\n										{{if room.isContractPrice == 1}}\r\n											{{room.price}}\r\n										{{else}}\r\n											{{if offer.status == \'已同意\'}}\r\n												{{room.replyPrice}}\r\n											{{else}}\r\n												-\r\n											{{/if}}\r\n										{{/if}}\r\n										</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.reserveMinutes == -1}}\r\n									{{if offer.status == "已拒绝"}}\r\n									-\r\n									{{else}}\r\n									一直保留\r\n									{{/if}}\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">\r\n									{{if room.isContractPrice == 1}}\r\n										{{room.price}}\r\n									{{else}}\r\n										{{if offer.status == \'已同意\'}}\r\n											{{room.replyPrice}}\r\n										{{else}}\r\n											-\r\n										{{/if}}\r\n									{{/if}}\r\n									</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});