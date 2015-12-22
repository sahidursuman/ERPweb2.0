/*TMODJS:{"debug":true,"version":468,"md5":"5990febb951adc753faac0cc2f0fbd8f"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listBusCompany", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, busOrderList = $data.busOrderList, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-2">车队</th> <th class="col-sm-1">车座数</th> <th class="col-sm-1">车量品牌</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">预订人</th> <th class="col-sm-1">预订时间</th> <th class="col-sm-1">撤单人</th> <th class="col-sm-1">撤单时间</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 23, $each(busOrderList, function(busOrderList) {
                $out += ' <tr data-value="', $line = 24, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 25, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>发团</td> <td>", 
                $line = 27, null != busOrderList.tripPlan && ($line = 27, $out += $escape(busOrderList.tripPlan.tripNumber), 
                $line = 27), $out += "</td> <td>", $line = 28, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.busCompany && ($line = 28, 
                $out += $escape(busOrderList.busCompanyArrange.busCompany.companyName), $line = 28), 
                $out += "</td> <td>", $line = 29, null != busOrderList.busCompany && ($line = 29, 
                $out += $escape(busOrderList.busCompany.needSeatCount), $line = 29), $out += "</td> <td>", 
                $line = 30, null != busOrderList.busCompanyArrange && ($line = 30, $out += $escape(busOrderList.busCompanyArrange.brand), 
                $line = 30), $out += '</td> <td class="count">', $line = 31, $out += $escape(busOrderList.seatCount), 
                $out += '</td> <td class="price">', $line = 32, $out += $escape(busOrderList.price), 
                $out += '</td> <td class="totalMoney">', $line = 33, $out += $escape(busOrderList.price), 
                $out += "</td> <td>", $line = 34, null != busOrderList.user && ($line = 34, $out += $escape(busOrderList.user.realName), 
                $line = 34), $out += "</td> <td>预订时间</td> <td>撤单人</td> <td>撤单时间</td> <td>", $line = 38, 
                $out += $escape(busOrderList.remark), $out += "</td> <td> ", $line = 40, -1 == busOrderList.status ? ($out += " 已撤单 ", 
                $line = 42) : 0 == busOrderList.status ? ($out += " 已下单 ", $line = 44) : 1 == busOrderList.status ? ($out += " 已确认 ", 
                $line = 46) : 2 == busOrderList.status ? ($out += " 已完成 ", $line = 48) : 3 == busOrderList.status && ($out += " 进行中 ", 
                $line = 50), $out += " </td> </tr> ", $line = 53;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 61, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany">\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-2">车队</th>\r\n					<th class="col-sm-1">车座数</th>\r\n					<th class="col-sm-1">车量品牌</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">预订人</th>\r\n					<th class="col-sm-1">预订时间</th>\r\n					<th class="col-sm-1">撤单人</th>\r\n					<th class="col-sm-1">撤单时间</th>\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderList as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>发团</td>\r\n					<td>{{if busOrderList.tripPlan!=null}}{{busOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.busCompany!=null}}{{busOrderList.busCompanyArrange.busCompany.companyName}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompany!=null}}{{busOrderList.busCompany.needSeatCount}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null}}{{busOrderList.busCompanyArrange.brand}}{{/if}}</td>\r\n					<td class="count">{{busOrderList.seatCount}}</td>\r\n					<td class="price">{{busOrderList.price}}</td>\r\n					<td class="totalMoney">{{busOrderList.price}}</td>\r\n					<td>{{if busOrderList.user!=null}}{{busOrderList.user.realName}}{{/if}}</td>\r\n					<td>预订时间</td>\r\n					<td>撤单人</td>\r\n					<td>撤单时间</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>\r\n						{{if busOrderList.status==-1}}\r\n						  已撤单\r\n						  {{else if busOrderList.status==0}}\r\n						  已下单\r\n						  {{else if busOrderList.status==1}}\r\n						  已确认\r\n						  {{else if busOrderList.status==2}}\r\n						  已完成\r\n						  {{else if busOrderList.status==3}}\r\n						  进行中\r\n						{{/if}}\r\n					</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n\r\n \r\n	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});