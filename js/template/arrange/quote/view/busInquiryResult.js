/*TMODJS:{"debug":true,"version":66,"md5":"50920f3b4896a86495b5f288a8f16df8"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/busInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, data = $data.data, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.offer, $data.index, "");
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>需求内容</th> <th>车队</th> <th>车费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(data, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 21, $out += $escape(rs.busCompanyOfferList.length), 
                $out += '">', $line = 21, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 22, $out += $escape(rs.busCompanyOfferList.length), $out += '">', $line = 22, 
                $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += '</td> <td rowspan="', 
                $line = 23, $out += $escape(rs.busCompanyOfferList.length), $out += '">', $line = 23, 
                $out += $escape(rs.condition), $out += "</td> ", $line = 24, $each(rs.busCompanyOfferList, function(offer, index) {
                    $out += " ", $line = 25, 0 == index && ($out += " <td>", $line = 26, $out += $escape(offer.busCompanyName), 
                    $out += '</td> <td class="T-price">', $line = 27, "已同意" == offer.status ? ($line = 27, 
                    $out += $escape(offer.replyPrice), $line = 27) : ($out += "-", $line = 27), $out += "</td> <td>", 
                    $line = 28, $out += $escape(offer.remark), $out += "</td> <td>", $line = 29, -1 == offer.reserveMinutes ? ($out += " ", 
                    $line = 30, "已拒绝" == offer.status ? ($out += " - ", $line = 32) : ($out += " 一直保留 ", 
                    $line = 34), $out += " ", $line = 35) : 0 == offer.reserveMinutes ? ($out += " - ", 
                    $line = 37) : ($out += " ", $line = 38, $out += $escape(offer.reserveTime), $out += " ", 
                    $line = 39), $out += " </td> <td>", $line = 41, $out += $escape(offer.expiryTime), 
                    $out += '</td> <td class="T-status">', $line = 42, $out += $escape(offer.status), 
                    $out += '</td> <td data-id="', $line = 43, $out += $escape(offer.id), $out += '"> ', 
                    $line = 44, "等待确认" == offer.status ? ($out += ' <a class="T-bus-refresh">刷新</a><span> | </span> ', 
                    $line = 46) : "已同意" == offer.status && ($out += ' <a class="T-bus-add">加入</a><span> | </span> ', 
                    $line = 48), $out += ' <a class="T-bus-delete">删除</a> </td> ', $line = 51), $out += " ", 
                    $line = 52;
                }), $out += " </tr> ", $line = 54, $each(rs.busCompanyOfferList, function(offer, index) {
                    $out += " ", $line = 55, index > 0 && ($out += " <tr> <td>", $line = 57, $out += $escape(offer.busCompanyName), 
                    $out += '</td> <td class="T-price">', $line = 58, "已同意" == offer.status ? ($line = 58, 
                    $out += $escape(offer.replyPrice), $line = 58) : ($out += "-", $line = 58), $out += "</td> <td>", 
                    $line = 59, $out += $escape(offer.remark), $out += "</td> <td>", $line = 60, -1 == offer.reserveMinutes ? ($out += " ", 
                    $line = 61, "已拒绝" == offer.status ? ($out += " - ", $line = 63) : ($out += " 一直保留 ", 
                    $line = 65), $out += " ", $line = 66) : 0 == offer.reserveMinutes ? ($out += " - ", 
                    $line = 68) : ($out += " ", $line = 69, $out += $escape(offer.reserveTime), $out += " ", 
                    $line = 70), $out += " </td> <td>", $line = 72, $out += $escape(offer.expiryTime), 
                    $out += '</td> <td class="T-status">', $line = 73, $out += $escape(offer.status), 
                    $out += '</td> <td data-id="', $line = 74, $out += $escape(offer.id), $out += '"> ', 
                    $line = 75, "等待确认" == offer.status ? ($out += ' <a class="T-bus-refresh">刷新</a><span> | </span> ', 
                    $line = 77) : "已同意" == offer.status && ($out += ' <a class="T-bus-add">加入</a><span> | </span> ', 
                    $line = 79), $out += ' <a class="T-bus-delete">删除</a> </td> </tr> ', $line = 83), 
                    $out += " ", $line = 84;
                }), $out += " ", $line = 85;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>需求内容</th>               \r\n				<th>车队</th>\r\n				<th>车费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.condition}}</td>\r\n					{{each rs.busCompanyOfferList as offer index}}\r\n						{{if index == 0}}\r\n							<td>{{offer.busCompanyName}}</td>\r\n							<td class="T-price">{{if offer.status == \'已同意\'}}{{offer.replyPrice}}{{else}}-{{/if}}</td>\r\n							<td>{{offer.remark}}</td>\r\n							<td>{{if offer.reserveMinutes == -1}}\r\n									{{if offer.status == "已拒绝"}}\r\n									-\r\n									{{else}}\r\n									一直保留\r\n									{{/if}}\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td>{{offer.expiryTime}}</td>\r\n							<td class="T-status">{{offer.status}}</td>\r\n							<td data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-bus-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-bus-add">加入</a><span> | </span>\r\n								{{/if}}\r\n									<a class="T-bus-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.busCompanyOfferList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td>{{offer.busCompanyName}}</td>\r\n							<td class="T-price">{{if offer.status == \'已同意\'}}{{offer.replyPrice}}{{else}}-{{/if}}</td>\r\n							<td>{{offer.remark}}</td>\r\n							<td>{{if offer.reserveMinutes == -1}}\r\n									{{if offer.status == "已拒绝"}}\r\n									-\r\n									{{else}}\r\n									一直保留\r\n									{{/if}}\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td>{{offer.expiryTime}}</td>\r\n							<td class="T-status">{{offer.status}}</td>\r\n							<td data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-bus-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-bus-add">加入</a><span> | </span>\r\n								{{/if}}\r\n									<a class="T-bus-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});