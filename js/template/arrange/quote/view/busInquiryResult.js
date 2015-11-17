/*TMODJS:{"debug":true,"version":14,"md5":"f91b76bf86c59047f2a29a954768f894"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/busInquiryResult", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busCompanyOfferList = $data.busCompanyOfferList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>出游日期</th> <th>需求内容</th> <th>车队</th> <th>车费报价</th> <th>反馈内容</th> <th>资源保留期</th> <th>询价截止期</th> <th>询价状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(busCompanyOfferList, function(rs) {
                $out += " <tr> <td>", $line = 21, $out += $escape(rs.lineProductName), $out += "</td> <td>", 
                $line = 22, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 23, $out += $escape(rs.condition), $out += "</td> <td>", $line = 24, $out += $escape(rs.busCompanyOfferList.busCompanyName), 
                $out += "</td> <td>", $line = 25, $out += $escape(rs.busCompanyOfferList.replyPrice), 
                $out += "</td> <td>", $line = 26, $out += $escape(rs.busCompanyOfferList.remark), 
                $out += "</td> <td>", $line = 27, $out += $escape(rs.busCompanyOfferList.reserveMinutes), 
                $out += "</td> <td>", $line = 28, $out += $escape($helpers.dateFormat(rs.busCompanyOfferList.expiryTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 29, $out += $escape(rs.busCompanyOfferList.status), 
                $out += "</td> <td></td> </tr> ", $line = 32;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>线路产品</th>\r\n				<th>出游日期</th>\r\n				<th>需求内容</th>               \r\n				<th>车队</th>\r\n				<th>车费报价</th>\r\n				<th>反馈内容</th>\r\n				<th>资源保留期</th>\r\n				<th>询价截止期</th>\r\n				<th>询价状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>\r\n			{{each busCompanyOfferList as rs}}\r\n				<tr>\r\n					<td>{{rs.lineProductName}}</td>\r\n					<td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td>{{rs.condition}}</td>\r\n					<td>{{rs.busCompanyOfferList.busCompanyName}}</td>\r\n					<td>{{rs.busCompanyOfferList.replyPrice}}</td>\r\n					<td>{{rs.busCompanyOfferList.remark}}</td>\r\n					<td>{{rs.busCompanyOfferList.reserveMinutes}}</td>\r\n					<td>{{rs.busCompanyOfferList.expiryTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td>{{rs.busCompanyOfferList.status}}</td>\r\n					<td></td>\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});