/*TMODJS:{"debug":true,"version":83,"md5":"4c25429285512994be0e409754584824"}*/
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
                    $out += '"> ', $line = 71, -1 == offer.reserveMinutes ? ($out += " 一直保留 ", $line = 73) : 0 == offer.reserveMinutes ? ($out += " - ", 
                    $line = 75) : ($out += " ", $line = 76, $out += $escape(offer.reserveTime), $out += " ", 
                    $line = 77), $out += ' </td> <td rowspan="', $line = 79, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 79, $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', 
                    $line = 80, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 80, 
                    $out += $escape(offer.status), $out += '</td> <td rowspan="', $line = 81, $out += $escape(offer.roomTypeList.length), 
                    $out += '" data-id="', $line = 81, $out += $escape(offer.id), $out += '"> ', $line = 82, 
                    "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 84) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 86), $out += ' <a class="T-hotel-delete">删除</a> </td> ', $line = 89), $out += " ", 
                    $line = 90;
                }), $out += " </tr> ", $line = 92, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 93, 0 == index && ($out += " ", $line = 94, offer.roomTypeList.length > 0 ? ($out += " ", 
                    $line = 95, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 96, index > 0 && ($out += ' <td class="T-hotelType-', $line = 97, 
                        $out += $escape(offer.id), $out += '">', $line = 97, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 98, $out += $escape(offer.id), 
                        $out += '"> ', $line = 99, 1 == room.isContractPrice ? ($out += " ", $line = 100, 
                        $out += $escape(room.price), $out += " ", $line = 101) : ($out += " ", $line = 102, 
                        "已同意" == offer.status ? ($out += " ", $line = 103, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 104) : ($out += " - ", $line = 106), $out += " ", $line = 107), 
                        $out += " </td> ", $line = 109), $out += " ", $line = 110;
                    }), $out += " ", $line = 111) : ($out += ' <td class="T-hotelType-', $line = 112, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 113, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 114), $out += " ", $line = 115), 
                    $out += " ", $line = 116;
                }), $out += " ", $line = 117, $each(rs.hotelList, function(offer, index) {
                    $out += " ", $line = 118, index > 0 && ($out += ' <tr> <td rowspan="', $line = 120, 
                    $out += $escape(offer.roomTypeList.length), $out += '">', $line = 120, $out += $escape(offer.hotelName), 
                    $out += '</td> <td rowspan="', $line = 121, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 122, 1 == offer.hotelLevel ? ($out += " 三星以下 ", $line = 124) : 2 == offer.hotelLevel ? ($out += " 三星 ", 
                    $line = 126) : 3 == offer.hotelLevel ? ($out += " 准四星 ", $line = 128) : 4 == offer.hotelLevel ? ($out += " 四星 ", 
                    $line = 130) : 5 == offer.hotelLevel ? ($out += " 准五星 ", $line = 132) : 6 == offer.hotelLevel ? ($out += " 五星 ", 
                    $line = 134) : 7 == offer.hotelLevel && ($out += " 五星以上 ", $line = 136), $out += " </td> ", 
                    $line = 138, offer.roomTypeList.length > 0 ? ($out += " ", $line = 139, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 140, 0 == index && ($out += ' <td class="T-hotelType-', $line = 141, 
                        $out += $escape(offer.id), $out += '">', $line = 141, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 142, $out += $escape(offer.id), 
                        $out += '"> ', $line = 143, 1 == room.isContractPrice ? ($out += " ", $line = 144, 
                        $out += $escape(room.price), $out += " ", $line = 145) : ($out += " ", $line = 146, 
                        "已同意" == offer.status ? ($out += " ", $line = 147, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 148) : ($out += " - ", $line = 150), $out += " ", $line = 151), 
                        $out += " </td> ", $line = 153), $out += " ", $line = 154;
                    }), $out += " ", $line = 155) : ($out += ' <td class="T-hotelType-', $line = 156, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 157, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 158), $out += ' <td rowspan="', 
                    $line = 159, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 159, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 160, $out += $escape(offer.roomTypeList.length), 
                    $out += '"> ', $line = 161, -1 == offer.reserveMinutes ? ($out += " 一直保留 ", $line = 163) : 0 == offer.reserveMinutes ? ($out += " - ", 
                    $line = 165) : ($out += " ", $line = 166, $out += $escape(offer.reserveTime), $out += " ", 
                    $line = 167), $out += ' </td> <td rowspan="', $line = 169, $out += $escape(offer.roomTypeList.length), 
                    $out += '">', $line = 169, $out += $escape(offer.expiryTime), $out += '</td> <td rowspan="', 
                    $line = 170, $out += $escape(offer.roomTypeList.length), $out += '">', $line = 170, 
                    $out += $escape(offer.status), $out += '</td> <td rowspan="', $line = 171, $out += $escape(offer.roomTypeList.length), 
                    $out += '" data-id="', $line = 171, $out += $escape(offer.id), $out += '"> ', $line = 172, 
                    "等待确认" == offer.status ? ($out += ' <a class="T-hotel-refresh">刷新</a><span> | </span> ', 
                    $line = 174) : "已同意" == offer.status && ($out += ' <a class="T-hotel-add">加入</a><span> | </span> ', 
                    $line = 176), $out += ' <a class="T-hotel-delete">删除</a> </td> </tr> ', $line = 180, 
                    offer.roomTypeList.length > 0 ? ($out += " ", $line = 181, $each(offer.roomTypeList, function(room, index) {
                        $out += " ", $line = 182, index > 0 && ($out += ' <td class="T-hotelType-', $line = 183, 
                        $out += $escape(offer.id), $out += '">', $line = 183, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 184, $out += $escape(offer.id), 
                        $out += '"> ', $line = 185, 1 == room.isContractPrice ? ($out += " ", $line = 186, 
                        $out += $escape(room.price), $out += " ", $line = 187) : ($out += " ", $line = 188, 
                        "已同意" == offer.status ? ($out += " ", $line = 189, $out += $escape(room.replyPrice), 
                        $out += " ", $line = 190) : ($out += " - ", $line = 192), $out += " ", $line = 193), 
                        $out += " </td> ", $line = 195), $out += " ", $line = 196;
                    }), $out += " ", $line = 197) : ($out += ' <td class="T-hotelType-', $line = 198, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 199, 
                    $out += $escape(offer.id), $out += '"></td> ', $line = 200), $out += " ", $line = 201), 
                    $out += " ", $line = 202;
                }), $out += " ", $line = 203;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>入住日期</th>               \r\n				<th>需求内容</th>\r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>房型</th>\r\n				<th>房费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.trLen}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.arriveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.condition}}</td>\r\n					{{each rs.hotelList as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">\r\n										{{if room.isContractPrice == 1}}\r\n											{{room.price}}\r\n										{{else}}\r\n											{{if offer.status == \'已同意\'}}\r\n												{{room.replyPrice}}\r\n											{{else}}\r\n												-\r\n											{{/if}}\r\n										{{/if}}\r\n										</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.reserveMinutes == -1}}\r\n									一直保留\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span> \r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index == 0}}\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">\r\n									{{if room.isContractPrice == 1}}\r\n										{{room.price}}\r\n									{{else}}\r\n										{{if offer.status == \'已同意\'}}\r\n											{{room.replyPrice}}\r\n										{{else}}\r\n											-\r\n										{{/if}}\r\n									{{/if}}\r\n									</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.hotelName}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.hotelLevel == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.hotelLevel == 2 }}\r\n							   		三星\r\n							   	{{else if offer.hotelLevel == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.hotelLevel == 4 }}\r\n							   		四星\r\n							   	{{else if offer.hotelLevel == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.hotelLevel == 6 }}\r\n							   		五星\r\n							   	{{else if offer.hotelLevel == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomTypeList.length > 0}}\r\n								{{each offer.roomTypeList as room index}}\r\n									{{if index == 0}}\r\n										<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n										<td class="T-hotelPrice-{{offer.id}}">\r\n										{{if room.isContractPrice == 1}}\r\n											{{room.price}}\r\n										{{else}}\r\n											{{if offer.status == \'已同意\'}}\r\n												{{room.replyPrice}}\r\n											{{else}}\r\n												-\r\n											{{/if}}\r\n										{{/if}}\r\n										</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}}"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">\r\n								{{if offer.reserveMinutes == -1}}\r\n									一直保留\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.expiryTime}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}">{{offer.status}}</td>\r\n							<td rowspan="{{offer.roomTypeList.length}}" data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-hotel-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-hotel-add">加入</a><span> | </span>\r\n								{{/if}}\r\n								<a class="T-hotel-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n						{{if offer.roomTypeList.length > 0}}\r\n							{{each offer.roomTypeList as room index}}\r\n								{{if index > 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">\r\n									{{if room.isContractPrice == 1}}\r\n										{{room.price}}\r\n									{{else}}\r\n										{{if offer.status == \'已同意\'}}\r\n											{{room.replyPrice}}\r\n										{{else}}\r\n											-\r\n										{{/if}}\r\n									{{/if}}\r\n									</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}}"></td>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});