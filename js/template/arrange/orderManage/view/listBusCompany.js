/*TMODJS:{"debug":true,"version":408,"md5":"82824a0e2c47b8538d3afdaeba7bbec8"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listBusCompany", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, busOrderList = $data.busOrderList, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-2">车队</th> <th class="col-sm-1">车座数</th> <th class="col-sm-1">车量品牌</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">预订人</th> <th class="col-sm-1">预订时间</th> <th class="col-sm-1">撤单人</th> <th class="col-sm-1">撤单时间</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 25, $each(busOrderList, function(busOrderList) {
                $out += ' <tr data-value="', $line = 26, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 27, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>发团</td> <td>", 
                $line = 29, null != busOrderList.tripPlan && ($line = 29, $out += $escape(busOrderList.tripPlan.tripNumber), 
                $line = 29), $out += "</td> <td>", $line = 30, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.busCompany && ($line = 30, 
                $out += $escape(busOrderList.busCompanyArrange.busCompany.companyName), $line = 30), 
                $out += "</td> <td>", $line = 31, $out += $escape(busOrderList.seatCount), $out += "</td> <td>", 
                $line = 32, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.bus && ($line = 32, 
                $out += $escape(busOrderList.busCompanyArrange.bus.brand), $line = 32), $out += "</td> <td>1</td> <td>", 
                $line = 34, $out += $escape(busOrderList.price), $out += "</td> <td>", $line = 35, 
                $out += $escape(busOrderList.price), $out += "</td> <td>", $line = 36, null != busOrderList.user && ($line = 36, 
                $out += $escape(busOrderList.user.realName), $line = 36), $out += "</td> <td>预订时间</td> <td>撤单人</td> <td>撤单时间</td> <td>", 
                $line = 40, $out += $escape(busOrderList.remark), $out += "</td> <td> ", $line = 42, 
                -1 == busOrderList.statusStr ? ($out += " 已撤单 ", $line = 44) : 0 == busOrderList.statusStr ? ($out += " 已下单 ", 
                $line = 46) : 1 == busOrderList.statusStr ? ($out += " 已确认 ", $line = 48) : 2 == busOrderList.statusStr ? ($out += " 已完成 ", 
                $line = 50) : 3 == busOrderList.statusStr && ($out += " 进行中 ", $line = 52), $out += " </td> </tr> ", 
                $line = 55;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 63, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany">\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-2">车队</th>\r\n					<th class="col-sm-1">车座数</th>\r\n					<th class="col-sm-1">车量品牌</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">预订人</th>\r\n					<th class="col-sm-1">预订时间</th>\r\n					<th class="col-sm-1">撤单人</th>\r\n					<th class="col-sm-1">撤单时间</th>\r\n\r\n					\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderList as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>发团</td>\r\n					<td>{{if busOrderList.tripPlan!=null}}{{busOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.busCompany!=null}}{{busOrderList.busCompanyArrange.busCompany.companyName}}{{/if}}</td>\r\n					<td>{{busOrderList.seatCount}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.bus!=null}}{{busOrderList.busCompanyArrange.bus.brand}}{{/if}}</td>\r\n					<td>1</td>\r\n					<td>{{busOrderList.price}}</td>\r\n					<td>{{busOrderList.price}}</td>\r\n					<td>{{if busOrderList.user!=null}}{{busOrderList.user.realName}}{{/if}}</td>\r\n					<td>预订时间</td>\r\n					<td>撤单人</td>\r\n					<td>撤单时间</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>\r\n						{{if busOrderList.statusStr==-1}}\r\n						  已撤单\r\n						  {{else if busOrderList.statusStr==0}}\r\n						  已下单\r\n						  {{else if busOrderList.statusStr==1}}\r\n						  已确认\r\n						  {{else if busOrderList.statusStr==2}}\r\n						  已完成\r\n						  {{else if busOrderList.statusStr==3}}\r\n						  进行中\r\n						{{/if}}\r\n					</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n\r\n \r\n	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});