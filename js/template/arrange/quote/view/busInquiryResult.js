/*TMODJS:{"debug":true,"version":33,"md5":"64e32c8e130982b600fa4dbd96d572fe"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/busInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, data = $data.data, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.bus, $data.index, "");
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>需求内容</th> <th>车队</th> <th>车费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(data, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 21, $out += $escape(rs.busCompanyOfferList.length), 
                $out += '">', $line = 21, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 22, $out += $escape(rs.busCompanyOfferList.length), $out += '">', $line = 22, 
                $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += '</td> <td rowspan="', 
                $line = 23, $out += $escape(rs.busCompanyOfferList.length), $out += '">', $line = 23, 
                $out += $escape(rs.condition), $out += "</td> ", $line = 24, $each(rs.busCompanyOfferList, function(bus, index) {
                    $out += " ", $line = 25, 0 == index && ($out += " <td>", $line = 26, $out += $escape(bus.busCompanyName), 
                    $out += "</td> <td>", $line = 27, $out += $escape(bus.replyPrice), $out += "</td> <td>", 
                    $line = 28, $out += $escape(bus.remark), $out += "</td> <td>", $line = 29, $out += $escape(bus.reserveMinutes), 
                    $out += "</td> <td>", $line = 30, $out += $escape(bus.expiryTime), $out += "</td> <td>", 
                    $line = 31, $out += $escape(bus.status), $out += '</td> <td data-id="', $line = 32, 
                    $out += $escape(bus.id), $out += '"><a class="T-bus-add">加入</a> | <a class="T-bus-delete">删除</a></td> ', 
                    $line = 33), $out += " ", $line = 34;
                }), $out += " </tr> ", $line = 36, $each(rs.busCompanyOfferList, function(bus, index) {
                    $out += " ", $line = 37, index > 0 && ($out += " <tr> <td>", $line = 39, $out += $escape(bus.busCompanyName), 
                    $out += "</td> <td>", $line = 40, $out += $escape(bus.replyPrice), $out += "</td> <td>", 
                    $line = 41, $out += $escape(bus.remark), $out += "</td> <td>", $line = 42, $out += $escape(bus.reserveMinutes), 
                    $out += "</td> <td>", $line = 43, $out += $escape(bus.expiryTime), $out += "</td> <td>", 
                    $line = 44, $out += $escape(bus.status), $out += '</td> <td data-id="', $line = 45, 
                    $out += $escape(bus.id), $out += '"><a class="T-bus-add">加入</a> | <a class="T-bus-delete">删除</a></td> </tr> ', 
                    $line = 47), $out += " ", $line = 48;
                }), $out += " ", $line = 49;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>需求内容</th>               \r\n				<th>车队</th>\r\n				<th>车费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each data as rs}}\r\n				<tr>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.lineProductName}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td rowspan="{{rs.busCompanyOfferList.length}}">{{rs.condition}}</td>\r\n					{{each rs.busCompanyOfferList as bus index}}\r\n						{{if index == 0}}\r\n							<td>{{bus.busCompanyName}}</td>\r\n							<td>{{bus.replyPrice}}</td>\r\n							<td>{{bus.remark}}</td>\r\n							<td>{{bus.reserveMinutes}}</td>\r\n							<td>{{bus.expiryTime}}</td>\r\n							<td>{{bus.status}}</td>\r\n							<td data-id="{{bus.id}}"><a class="T-bus-add">加入</a> | <a class="T-bus-delete">删除</a></td>\r\n						{{/if}}\r\n					{{/each}}\r\n				</tr>\r\n				{{each rs.busCompanyOfferList as bus index}}\r\n					{{if index > 0}}\r\n						<tr>\r\n							<td>{{bus.busCompanyName}}</td>\r\n							<td>{{bus.replyPrice}}</td>\r\n							<td>{{bus.remark}}</td>\r\n							<td>{{bus.reserveMinutes}}</td>\r\n							<td>{{bus.expiryTime}}</td>\r\n							<td>{{bus.status}}</td>\r\n							<td data-id="{{bus.id}}"><a class="T-bus-add">加入</a> | <a class="T-bus-delete">删除</a></td>\r\n						</tr>\r\n					{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});