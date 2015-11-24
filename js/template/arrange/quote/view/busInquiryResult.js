/*TMODJS:{"debug":true,"version":64,"md5":"402a7349891247fc7af468ac8b919cfa"}*/
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
                    $line = 28, $out += $escape(offer.remark), $out += "</td> <td>", $line = 29, -1 == offer.reserveMinutes ? ($out += " 一直保留 ", 
                    $line = 31) : 0 == offer.reserveMinutes ? ($out += " - ", $line = 33) : ($out += " ", 
                    $line = 34, $out += $escape(offer.reserveTime), $out += " ", $line = 35), $out += " </td> <td>", 
                    $line = 37, $out += $escape(offer.expiryTime), $out += '</td> <td class="T-status">', 
                    $line = 38, $out += $escape(offer.status), $out += '</td> <td data-id="', $line = 39, 
                    $out += $escape(offer.id), $out += '"> ', $line = 40, "等待确认" == offer.status ? ($out += ' <a class="T-bus-refresh">刷新</a><span> | </span> ', 
                    $line = 42) : "已同意" == offer.status && ($out += ' <a class="T-bus-add">加入</a><span> | </span> ', 
                    $line = 44), $out += ' <a class="T-bus-delete">删除</a> </td> ', $line = 47), $out += " ", 
                    $line = 48;
                }), $out += " </tr> ", $line = 50, $each(rs.busCompanyOfferList, function(offer, index) {
                    $out += " ", $line = 51, index > 0 && ($out += " <tr> <td>", $line = 53, $out += $escape(offer.busCompanyName), 
                    $out += '</td> <td class="T-price">', $line = 54, "已同意" == offer.status ? ($line = 54, 
                    $out += $escape(offer.replyPrice), $line = 54) : ($out += "-", $line = 54), $out += "</td> <td>", 
                    $line = 55, $out += $escape(offer.remark), $out += "</td> <td>", $line = 56, -1 == offer.reserveMinutes ? ($out += " 一直保留 ", 
                    $line = 58) : 0 == offer.reserveMinutes ? ($out += " - ", $line = 60) : ($out += " ", 
                    $line = 61, $out += $escape(offer.reserveTime), $out += " ", $line = 62), $out += " </td> <td>", 
                    $line = 64, $out += $escape(offer.expiryTime), $out += '</td> <td class="T-status">', 
                    $line = 65, $out += $escape(offer.status), $out += '</td> <td data-id="', $line = 66, 
                    $out += $escape(offer.id), $out += '"> ', $line = 67, "等待确认" == offer.status ? ($out += ' <a class="T-bus-refresh">刷新</a><span> | </span> ', 
                    $line = 69) : "已同意" == offer.status && ($out += ' <a class="T-bus-add">加入</a><span> | </span> ', 
                    $line = 71), $out += ' <a class="T-bus-delete">删除</a> </td> </tr> ', $line = 75), 
                    $out += " ", $line = 76;
                }), $out += " ", $line = 77;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>需求内容</th>               \r\n				<th>车队</th>\r\n				<th>车费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.condition}}</td>\r\n					{{each rs.busCompanyOfferList as offer index}}\r\n						{{if index == 0}}\r\n							<td>{{offer.busCompanyName}}</td>\r\n							<td class="T-price">{{if offer.status == \'已同意\'}}{{offer.replyPrice}}{{else}}-{{/if}}</td>\r\n							<td>{{offer.remark}}</td>\r\n							<td>{{if offer.reserveMinutes == -1}}\r\n									一直保留\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td>{{offer.expiryTime}}</td>\r\n							<td class="T-status">{{offer.status}}</td>\r\n							<td data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-bus-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-bus-add">加入</a><span> | </span>\r\n								{{/if}}\r\n									<a class="T-bus-delete">删除</a>\r\n							</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.busCompanyOfferList as offer index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td>{{offer.busCompanyName}}</td>\r\n							<td class="T-price">{{if offer.status == \'已同意\'}}{{offer.replyPrice}}{{else}}-{{/if}}</td>\r\n							<td>{{offer.remark}}</td>\r\n							<td>{{if offer.reserveMinutes == -1}}\r\n									一直保留\r\n								{{else if offer.reserveMinutes == 0}}\r\n									-\r\n								{{else}}\r\n									{{offer.reserveTime}}\r\n								{{/if}}\r\n							</td>\r\n							<td>{{offer.expiryTime}}</td>\r\n							<td class="T-status">{{offer.status}}</td>\r\n							<td data-id="{{offer.id}}">\r\n								{{if offer.status == "等待确认"}}\r\n									<a class="T-bus-refresh">刷新</a><span> | </span>\r\n								{{else if offer.status == "已同意"}}\r\n									<a class="T-bus-add">加入</a><span> | </span>\r\n								{{/if}}\r\n									<a class="T-bus-delete">删除</a>\r\n							</td>\r\n						</tr>\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});