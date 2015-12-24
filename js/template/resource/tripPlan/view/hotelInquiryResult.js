/*TMODJS:{"debug":true,"version":63,"md5":"c3063f72d36c1eea3519e570d7dd5a14"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/hotelInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, mapList = $data.mapList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.offer, $data.index, $data.room, "");
            return $out += '<div class="col-xs-12" style="padding: 20px 0"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">入住日期</th> <th class="th-border">需求内容</th> <th class="th-border">酒店</th> <th class="th-border">星级</th> <th class="th-border">房型</th> <th class="th-border">房费报价</th> <th class="th-border">反馈内容</th> <th class="th-border">资源保留期</th> <th class="th-border">询价截止期</th> <th class="th-border">询价状态</th> </tr> </thead> <tbody> ', 
            $line = 21, $each(mapList, function(rs) {
                $out += " <tr> <td>", $line = 23, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 24, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 25, $out += $escape(rs.arriveTime), 
                $out += "</td> <td>", $line = 26, $out += $escape(rs.queryJson), $out += "</td> ", 
                $line = 27, $each(rs.hotelOffers, function(offer, index) {
                    $out += " ", $line = 28, 0 == index && ($out += ' <td rowspan="', $line = 29, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 29, $out += $escape(offer.name), $out += '</td> <td rowspan="', 
                    $line = 30, $out += $escape(offer.roomOffers.length), $out += '"> ', $line = 31, 
                    1 == offer.level ? ($out += " 三星以下 ", $line = 33) : 2 == offer.level ? ($out += " 三星 ", 
                    $line = 35) : 3 == offer.level ? ($out += " 准四星 ", $line = 37) : 4 == offer.level ? ($out += " 四星 ", 
                    $line = 39) : 5 == offer.level ? ($out += " 准五星 ", $line = 41) : 6 == offer.level ? ($out += " 五星 ", 
                    $line = 43) : 7 == offer.level && ($out += " 五星以上 ", $line = 45), $out += " </td> ", 
                    $line = 47, $each(offer.roomOffers, function(room) {
                        $out += ' <td class="T-hotelType-', $line = 48, $out += $escape(offer.id), $out += '">', 
                        $line = 48, $out += $escape(room.type), $out += '</td> <td class="T-hotelPrice-', 
                        $line = 49, $out += $escape(offer.id), $out += '"> ', $line = 50, $out += $escape(room.price), 
                        $out += " </td> ", $line = 52;
                    }), $out += ' <td rowspan="', $line = 53, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 53, $out += $escape(offer.remark), $out += '</td> <td rowspan="', 
                    $line = 54, $out += $escape(offer.roomOffers.length), $out += '">', $line = 54, 
                    "已过期" != offer.status && "已拒绝" != offer.status && ($line = 54, $out += $escape(offer.reserveMinutes), 
                    $line = 54), $out += '</td> <td rowspan="', $line = 55, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 55, $out += $escape($helpers.dateFormat(offer.expiryTime, "yyyy-MM-dd hh:mm:ss")), 
                    $out += '</td> <td rowspan="', $line = 56, $out += $escape(offer.roomOffers.length), 
                    $out += '">', $line = 56, $out += $escape(offer.status), $out += "</td> ", $line = 57), 
                    $out += " ", $line = 58;
                }), $out += " </tr> ", $line = 60;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" style="padding: 20px 0">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr>  \r\n				<th class="th-border">线路产品</th>\r\n				<th class="th-border">出游日期</th>\r\n				<th class="th-border">入住日期</th>               \r\n				<th class="th-border">需求内容</th>\r\n				<th class="th-border">酒店</th>\r\n				<th class="th-border">星级</th>\r\n				<th class="th-border">房型</th>\r\n				<th class="th-border">房费报价</th>\r\n				<th class="th-border">反馈内容</th>\r\n				<th class="th-border">资源保留期</th>\r\n				<th class="th-border">询价截止期</th>\r\n				<th class="th-border">询价状态</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each mapList as rs}}\r\n				<tr>\r\n					<td>{{rs.name}}</td>\r\n					<td>{{rs.startTime}}</td>\r\n					<td>{{rs.arriveTime}}</td>\r\n					<td>{{rs.queryJson}}</td>\r\n					{{each rs.hotelOffers as offer index}}\r\n						{{if index == 0}}\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.name}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">\r\n								{{if offer.level == 1 }}\r\n							    	三星以下\r\n							   	{{else if offer.level == 2 }}\r\n							   		三星\r\n							   	{{else if offer.level == 3 }}\r\n							   		准四星\r\n							   	{{else if offer.level == 4 }}\r\n							   		四星\r\n							   	{{else if offer.level == 5 }}\r\n							   		准五星\r\n							   	{{else if offer.level == 6 }}\r\n							   		五星\r\n							   	{{else if offer.level == 7 }}\r\n							   		五星以上\r\n							   	{{/if}}\r\n							</td>\r\n							{{each offer.roomOffers as room index}}\r\n									<td class="T-hotelType-{{offer.id}}">{{room.type}}</td>\r\n									<td class="T-hotelPrice-{{offer.id}}">\r\n										{{room.price}}\r\n									</td>\r\n							{{/each}}\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.remark}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{if offer.status != \'已过期\' && offer.status != \'已拒绝\'}}{{offer.reserveMinutes}}{{/if}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.expiryTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n							<td rowspan="{{offer.roomOffers.length}}">{{offer.status}}</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});