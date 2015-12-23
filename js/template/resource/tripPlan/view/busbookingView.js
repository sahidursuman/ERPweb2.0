/*TMODJS:{"debug":true,"version":10,"md5":"d43673c4171f1e689e1d43eb234ce496"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/busbookingView", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, busOrderJson = $data.busOrderJson, $escape = ($data.busOrderList, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany" style="padding: 20px 0 0 20px"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-2">车队</th> <th class="col-sm-1">车座数</th> <th class="col-sm-1">车量品牌</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">预订人</th> <th class="col-sm-1">预订时间</th> <th class="col-sm-1">撤单人</th> <th class="col-sm-1">撤单时间</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 23, $each(busOrderJson, function(busOrderList) {
                $out += ' <tr data-value="', $line = 24, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 25, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>", $line = 26, 
                $out += $escape(busOrderList.orderType), $out += "</td> <td>", $line = 27, $out += $escape(busOrderList.tripNumber), 
                $out += "</td> <td>", $line = 28, $out += $escape(busOrderList.companyName), $out += "</td> <td>", 
                $line = 29, $out += $escape(busOrderList.seatCount), $out += "</td> <td>", $line = 30, 
                $out += $escape(busOrderList.brand), $out += '</td> <td class="count">', $line = 31, 
                $out += $escape(busOrderList.seatCount), $out += '</td> <td class="price">', $line = 32, 
                $out += $escape(busOrderList.price), $out += '</td> <td class="totalMoney">', $line = 33, 
                $out += $escape(busOrderList.price * busOrderList.seatCount), $out += "</td> <td>", 
                $line = 34, $out += $escape(busOrderList.creator), $out += "</td> <td>", $line = 35, 
                $out += $escape(busOrderList.createTime), $out += "</td> <td>撤单人</td> <td>撤单时间</td> <td>", 
                $line = 38, $out += $escape(busOrderList.remark), $out += "</td> <td>", $line = 39, 
                $out += $escape(busOrderList.status), $out += "</td> </tr> ", $line = 41;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany" style="padding: 20px 0 0 20px">\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-2">车队</th>\r\n					<th class="col-sm-1">车座数</th>\r\n					<th class="col-sm-1">车量品牌</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">预订人</th>\r\n					<th class="col-sm-1">预订时间</th>\r\n					<th class="col-sm-1">撤单人</th>\r\n					<th class="col-sm-1">撤单时间</th>\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderJson as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>{{busOrderList.orderType}}</td>\r\n					<td>{{busOrderList.tripNumber}}</td>\r\n					<td>{{busOrderList.companyName}}</td>\r\n					<td>{{busOrderList.seatCount}}</td>\r\n					<td>{{busOrderList.brand}}</td>\r\n					<td class="count">{{busOrderList.seatCount}}</td>\r\n					<td class="price">{{busOrderList.price}}</td>\r\n					<td class="totalMoney">{{busOrderList.price * busOrderList.seatCount}}</td>\r\n					<td>{{busOrderList.creator}}</td>\r\n					<td>{{busOrderList.createTime}}</td>\r\n					<td>撤单人</td>\r\n					<td>撤单时间</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>{{busOrderList.status}}</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});