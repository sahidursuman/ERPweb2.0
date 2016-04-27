/*TMODJS:{"debug":true,"version":176,"md5":"70d916d8e61e6b666eb55a6c574564b5"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/hotelInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, mapList = $data.mapList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.offer, $data.index, $data.room, "");
            return $out += '<div class="col-xs-12" style="padding: 20px 0"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">入住日期</th> <th class="th-border">需求内容</th> <th class="th-border">酒店</th> <th class="th-border">星级</th> <th class="th-border">房型</th> <th class="th-border">房费报价</th> <th class="th-border">反馈内容</th> <th class="th-border">资源保留期</th> <th class="th-border">询价截止期</th> <th class="th-border">询价状态</th> </tr> </thead> <tbody> ', 
            $line = 21, $each(mapList, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 23, $out += $escape(rs.trLen), $out += '">', 
                $line = 23, $out += $escape(rs.name), $out += '</td> <td rowspan="', $line = 24, 
                $out += $escape(rs.trLen), $out += '">', $line = 24, $out += $escape(rs.startTime), 
                $out += '</td> <td rowspan="', $line = 25, $out += $escape(rs.trLen), $out += '">', 
                $line = 25, $out += $escape(rs.arriveTime), $out += '</td> <td rowspan="', $line = 26, 
                $out += $escape(rs.trLen), $out += '">', $line = 26, $out += $escape(rs.queryJson), 
                $out += "</td> ", $line = 27, $each(rs.hotelOffers, function(offer, index) {
                    $out += " ", $line = 28, 0 == index && ($out += ' <td rowspan="', $line = 29, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 29, $out += $escape(offer.name), $out += '</td> <td rowspan="', 
                    $line = 30, $out += $escape(offer.roomOffers.length), $out += '"> ', $line = 31, 
                    1 == offer.level ? ($out += " 三星以下 ", $line = 33) : 2 == offer.level ? ($out += " 三星 ", 
                    $line = 35) : 3 == offer.level ? ($out += " 准四星 ", $line = 37) : 4 == offer.level ? ($out += " 四星 ", 
                    $line = 39) : 5 == offer.level ? ($out += " 准五星 ", $line = 41) : 6 == offer.level ? ($out += " 五星 ", 
                    $line = 43) : 7 == offer.level && ($out += " 五星以上 ", $line = 45), $out += " </td> ", 
                    $line = 47, offer.roomOffers.length > 0 ? ($out += " ", $line = 48, $each(offer.roomOffers, function(room, index) {
                        $out += " ", $line = 49, 0 == index && ($out += ' <td class="T-hotelType-', $line = 50, 
                        $out += $escape(offer.id), $out += '">', $line = 50, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 51, $out += $escape(offer.id), 
                        $out += ' F-float F-money"> ', $line = 52, $out += $escape(room.price), $out += " </td> ", 
                        $line = 54), $out += " ", $line = 55;
                    }), $out += " ", $line = 56) : ($out += ' <td class="T-hotelType-', $line = 57, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 58, 
                    $out += $escape(offer.id), $out += ' F-float F-money"></td> ', $line = 59), $out += ' <td rowspan="', 
                    $line = 60, $out += $escape(offer.roomOffers.length), $out += '">', $line = 60, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 61, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 61, "已过期" != offer.status && "已拒绝" != offer.status && ($line = 61, 
                    $out += $escape(offer.reserveMinutes), $line = 61), $out += '</td> <td rowspan="', 
                    $line = 62, $out += $escape(offer.roomOffers.length), $out += '">', $line = 62, 
                    $out += $escape($helpers.dateFormat(offer.expiryTime, "yyyy-MM-dd hh:mm:ss")), $out += '</td> <td rowspan="', 
                    $line = 63, $out += $escape(offer.roomOffers.length), $out += '">', $line = 63, 
                    $out += $escape(offer.status), $out += "</td> ", $line = 64), $out += " ", $line = 65;
                }), $out += " </tr> ", $line = 67, $each(rs.hotelOffers, function(offer, index) {
                    $out += " ", $line = 68, 0 == index && ($out += " ", $line = 69, offer.roomOffers.length > 0 && ($out += " ", 
                    $line = 70, $each(offer.roomOffers, function(room, index) {
                        $out += " ", $line = 71, index > 0 && ($out += ' <tr><td class="T-hotelType-', $line = 72, 
                        $out += $escape(offer.id), $out += '">', $line = 72, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 73, $out += $escape(offer.id), 
                        $out += ' F-float F-money"> ', $line = 74, $out += $escape(room.price), $out += " </td></tr> ", 
                        $line = 76), $out += " ", $line = 77;
                    }), $out += " ", $line = 78), $out += " ", $line = 79), $out += " ", $line = 80;
                }), $out += " ", $line = 81, $each(rs.hotelOffers, function(offer, index) {
                    $out += " ", $line = 82, index > 0 && ($out += ' <tr> <td rowspan="', $line = 84, 
                    $out += $escape(offer.roomOffers.length), $out += '">', $line = 84, $out += $escape(offer.name), 
                    $out += '</td> <td rowspan="', $line = 85, $out += $escape(offer.roomOffers.length), 
                    $out += '"> ', $line = 86, 1 == offer.level ? ($out += " 三星以下 ", $line = 88) : 2 == offer.level ? ($out += " 三星 ", 
                    $line = 90) : 3 == offer.level ? ($out += " 准四星 ", $line = 92) : 4 == offer.level ? ($out += " 四星 ", 
                    $line = 94) : 5 == offer.level ? ($out += " 准五星 ", $line = 96) : 6 == offer.level ? ($out += " 五星 ", 
                    $line = 98) : 7 == offer.level && ($out += " 五星以上 ", $line = 100), $out += " </td> ", 
                    $line = 102, offer.roomOffers.length > 0 ? ($out += " ", $line = 103, $each(offer.roomOffers, function(room, index) {
                        $out += " ", $line = 104, 0 == index && ($out += ' <td class="T-hotelType-', $line = 105, 
                        $out += $escape(offer.id), $out += '">', $line = 105, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 106, $out += $escape(offer.id), 
                        $out += ' F-float F-money"> ', $line = 107, $out += $escape(room.price), $out += " </td> ", 
                        $line = 109), $out += " ", $line = 110;
                    }), $out += " ", $line = 111) : ($out += ' <td class="T-hotelType-', $line = 112, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 113, 
                    $out += $escape(offer.id), $out += ' F-float F-money"></td> ', $line = 114), $out += ' <td rowspan="', 
                    $line = 115, $out += $escape(offer.roomOffers.length), $out += '">', $line = 115, 
                    $out += $escape(offer.remark), $out += '</td> <td rowspan="', $line = 116, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 116, "已过期" != offer.status && "已拒绝" != offer.status && ($line = 116, 
                    $out += $escape(offer.reserveMinutes), $line = 116), $out += '</td> <td rowspan="', 
                    $line = 117, $out += $escape(offer.roomOffers.length), $out += '">', $line = 117, 
                    $out += $escape($helpers.dateFormat(offer.expiryTime, "yyyy-MM-dd hh:mm:ss")), $out += '</td> <td rowspan="', 
                    $line = 118, $out += $escape(offer.roomOffers.length), $out += '">', $line = 118, 
                    $out += $escape(offer.status), $out += "</td> </tr> ", $line = 120, offer.roomOffers.length > 0 ? ($out += " ", 
                    $line = 121, $each(offer.roomOffers, function(room, index) {
                        $out += " ", $line = 122, index > 0 && ($out += ' <tr><td class="T-hotelType-', 
                        $line = 123, $out += $escape(offer.id), $out += '">', $line = 123, $out += $escape(room.type), 
                        $out += '</td> <td class="T-hotelPrice-', $line = 124, $out += $escape(offer.id), 
                        $out += ' F-float F-money"> ', $line = 125, $out += $escape(room.price), $out += " </td></tr> ", 
                        $line = 127), $out += " ", $line = 128;
                    }), $out += " ", $line = 129) : ($out += ' <tr><td class="T-hotelType-', $line = 130, 
                    $out += $escape(offer.id), $out += '"></td> <td class="T-hotelPrice-', $line = 131, 
                    $out += $escape(offer.id), $out += ' F-float F-money"></td></tr> ', $line = 132), 
                    $out += " ", $line = 133), $out += " ", $line = 134;
                }), $out += " ", $line = 135;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" style="padding: 20px 0">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr>  \r\n				<th class="th-border">线路产品</th>\r\n				<th class="th-border">出游日期</th>\r\n				<th class="th-border">入住日期</th>               \r\n				<th class="th-border">需求内容</th>\r\n				<th class="th-border">酒店</th>\r\n				<th class="th-border">星级</th>\r\n				<th class="th-border">房型</th>\r\n				<th class="th-border">房费报价</th>\r\n				<th class="th-border">反馈内容</th>\r\n				<th class="th-border">资源保留期</th>\r\n				<th class="th-border">询价截止期</th>\r\n				<th class="th-border">询价状态</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each mapList as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.trLen}}">{{rs.name}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.startTime}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.arriveTime}}</td>\r\n					<td rowspan="{{rs.trLen}}">{{rs.queryJson}}</td>\r\n					{{each rs.hotelOffers as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.name}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">\r\n								{{if offer.level == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.level == 2 }}\r\n							   		三星\r\n							   	{{else if offer.level == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.level == 4 }}\r\n							   		四星\r\n							   	{{else if offer.level == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.level == 6 }}\r\n							   		五星\r\n							   	{{else if offer.level == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomOffers.length > 0}}\r\n								{{each offer.roomOffers as room index}}\r\n									{{if index == 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}} F-float F-money">\r\n										{{room.price}}\r\n									</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}} F-float F-money"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{if offer.status != \'已过期\' && offer.status != \'已拒绝\'}}{{offer.reserveMinutes}}{{/if}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.expiryTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.status}}</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.hotelOffers as offer index}}\r\n					{{if index == 0}}\r\n						{{if offer.roomOffers.length > 0}}\r\n							{{each offer.roomOffers as room index}}\r\n								{{if index > 0}}\r\n									<tr><td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}} F-float F-money">\r\n										{{room.price}}\r\n									</td></tr>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n				{{each rs.hotelOffers as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.name}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">\r\n								{{if offer.level == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.level == 2 }}\r\n							   		三星\r\n							   	{{else if offer.level == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.level == 4 }}\r\n							   		四星\r\n							   	{{else if offer.level == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.level == 6 }}\r\n							   		五星\r\n							   	{{else if offer.level == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{if offer.roomOffers.length > 0}}\r\n								{{each offer.roomOffers as room index}}\r\n									{{if index == 0}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}} F-float F-money">\r\n										{{room.price}}\r\n									</td>\r\n									{{/if}}\r\n								{{/each}}\r\n							{{else}}\r\n								<td class="T-hotelType-{{offer.id}}"></td>\r\n								<td class="T-hotelPrice-{{offer.id}} F-float F-money"></td>\r\n							{{/if}}\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{if offer.status != \'已过期\' && offer.status != \'已拒绝\'}}{{offer.reserveMinutes}}{{/if}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.expiryTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.status}}</td>\r\n						</tr>\r\n						{{if offer.roomOffers.length > 0}}\r\n							{{each offer.roomOffers as room index}}\r\n								{{if index > 0}}\r\n								<tr><td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n								<td class="T-hotelPrice-{{offer.id}} F-float F-money">\r\n									{{room.price}}\r\n								</td></tr>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{else}}\r\n							<tr><td class="T-hotelType-{{offer.id}}"></td>\r\n							<td class="T-hotelPrice-{{offer.id}} F-float F-money"></td></tr>\r\n						{{/if}}\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});