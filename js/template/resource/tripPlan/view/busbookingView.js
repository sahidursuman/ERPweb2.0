/*TMODJS:{"debug":true,"version":21,"md5":"7ef27f5dce487fa1c4c8d7a0ba9e681f"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/busbookingView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busOrderJson = $data.busOrderJson, $escape = ($data.busOrderList, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany" style="padding: 20px 0 0 20px"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">订单号</th> <th class="th-border">类型</th> <th class="th-border">类型编号</th> <th class="th-border">车队</th> <th class="th-border">车座数</th> <th class="th-border">车量品牌</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">备注</th> <th class="th-border">状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 20, $each(busOrderJson, function(busOrderList) {
                $out += ' <tr data-value="', $line = 21, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 22, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>", $line = 23, 
                $out += $escape(busOrderList.orderType), $out += "</td> <td>", $line = 24, $out += $escape(busOrderList.tripNumber), 
                $out += "</td> <td>", $line = 25, $out += $escape(busOrderList.companyName), $out += '</td> <td class="F-float F-count">', 
                $line = 26, $out += $escape(busOrderList.seatCount), $out += "</td> <td>", $line = 27, 
                $out += $escape(busOrderList.brand), $out += '</td> <td class="price F-float F-money">', 
                $line = 28, $out += $escape(busOrderList.price), $out += '</td> <td class="totalMoney F-float F-money">', 
                $line = 29, $out += $escape(busOrderList.price * busOrderList.seatCount), $out += "</td> <td>", 
                $line = 30, $out += $escape(busOrderList.creator), $out += "</td> <td>", $line = 31, 
                $out += $escape($helpers.dateFormat(busOrderList.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> <td>", $line = 32, $out += $escape(busOrderList.remark), $out += "</td> <td>", 
                $line = 33, $out += $escape(busOrderList.status), $out += "</td> </tr> ", $line = 35;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany" style="padding: 20px 0 0 20px">\r\n	<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr>\r\n					<th class="th-border">订单号</th>\r\n					<th class="th-border">类型</th>\r\n					<th class="th-border">类型编号</th>\r\n					<th class="th-border">车队</th>\r\n					<th class="th-border">车座数</th>\r\n					<th class="th-border">车量品牌</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">金额</th>\r\n					<th class="th-border">操作人</th>\r\n					<th class="th-border">操作时间</th>\r\n					<th class="th-border">备注</th>\r\n					<th class="th-border">状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderJson as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>{{busOrderList.orderType}}</td>\r\n					<td>{{busOrderList.tripNumber}}</td>\r\n					<td>{{busOrderList.companyName}}</td>\r\n					<td class="F-float F-count">{{busOrderList.seatCount}}</td>\r\n					<td>{{busOrderList.brand}}</td>\r\n					<td class="price F-float F-money">{{busOrderList.price}}</td>\r\n					<td class="totalMoney F-float F-money">{{busOrderList.price * busOrderList.seatCount}}</td>\r\n					<td>{{busOrderList.creator}}</td>\r\n					<td>{{busOrderList.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>{{busOrderList.status}}</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});