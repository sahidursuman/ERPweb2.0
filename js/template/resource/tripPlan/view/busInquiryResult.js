/*TMODJS:{"debug":true,"version":40,"md5":"d1380f17b4f603bcad77452c6137cbe0"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/busInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, mapList = $data.mapList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = ($data.offer, "");
            return $out += '<div class="col-xs-12" style="padding: 20px 0 0 0"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>需求内容</th> <th>车队</th> <th>车费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> </tr> </thead> <tbody> ', 
            $line = 18, $each(mapList, function(rs) {
                $out += " <tr> <td>", $line = 20, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 21, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 22, $out += $escape(rs.queryJson), $out += "</td> ", $line = 23, $each(rs.busOffers, function(offer) {
                    $out += " <td>", $line = 24, $out += $escape(offer.companyName), $out += '</td> <td class="T-price">', 
                    $line = 25, $out += $escape(offer.price), $out += "</td> <td>", $line = 26, $out += $escape(offer.remark), 
                    $out += "</td> <td>", $line = 27, $out += $escape(offer.reserveMinutes), $out += "</td> <td>", 
                    $line = 28, $out += $escape($helpers.dateFormat(offer.expiryTime, "yyyy-MM-dd")), 
                    $out += '</td> <td class="T-status">', $line = 29, $out += $escape(offer.status), 
                    $out += "</td> ", $line = 30;
                }), $out += " </tr> ", $line = 32;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" style="padding: 20px 0 0 0">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>需求内容</th>               \r\n				<th>车队</th>\r\n				<th>车费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each mapList as rs}}\r\n				<tr>\r\n					<td>{{rs.name}}</td>\r\n					<td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td>{{rs.queryJson}}</td>\r\n					{{each rs.busOffers as offer}}\r\n							<td>{{offer.companyName}}</td>\r\n							<td class="T-price">{{offer.price}}</td>\r\n							<td>{{offer.remark}}</td>\r\n							<td>{{offer.reserveMinutes}}</td>\r\n							<td>{{offer.expiryTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td class="T-status">{{offer.status}}</td>\r\n					{{/each}}\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});