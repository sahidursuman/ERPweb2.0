/*TMODJS:{"debug":true,"version":253,"md5":"2cfcea173dba7d9029a9af540fe8ecc7"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listBusCompany", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, busOrderList = $data.busOrderList, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-1">车座数</th> <th class="col-sm-1">车量品牌</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">操作人</th> <th class="col-sm-2">车队</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> <th class="col-sm-1">操作</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 21, $each(busOrderList, function(busOrderList) {
                $out += ' <tr data-value="', $line = 22, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 23, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>发团</td> <td>", 
                $line = 25, null != busOrderList.tripPlan && ($line = 25, $out += $escape(busOrderList.tripPlan.tripNumber), 
                $line = 25), $out += "</td> <td>", $line = 26, $out += $escape(busOrderList.seatCount), 
                $out += "</td> <td>", $line = 27, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.bus && ($line = 27, 
                $out += $escape(busOrderList.busCompanyArrange.bus.brand), $line = 27), $out += "</td> <td>1</td> <td>", 
                $line = 29, $out += $escape(busOrderList.price), $out += "</td> <td>", $line = 30, 
                $out += $escape(busOrderList.price), $out += "</td> <td>", $line = 31, null != busOrderList.user && ($line = 31, 
                $out += $escape(busOrderList.user.realName), $line = 31), $out += "</td> <td>", 
                $line = 32, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.busCompany && ($line = 32, 
                $out += $escape(busOrderList.busCompanyArrange.busCompany.companyName), $line = 32), 
                $out += "</td> <td>", $line = 33, $out += $escape(busOrderList.remark), $out += "</td> <td>", 
                $line = 34, $out += $escape(busOrderList.statusStr), $out += '</td> <td> <a class="cursor ', 
                $line = 37, 0 == busOrderList.status && ($out += "T-listBusCompany-refuse", $line = 37), 
                $out += ' R-right T-action" style="', $line = 37, (1 == busOrderList.status || -1 == busOrderList.status) && ($out += "color:#bbb", 
                $line = 37), $out += '"> 撤销 </a> </td> </tr> ', $line = 42;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-4"> <small>共计', 
            $line = 48, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div style="width:320px; float:right;"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany">\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-1">车座数</th>\r\n					<th class="col-sm-1">车量品牌</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">操作人</th>\r\n					<th class="col-sm-2">车队</th>\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n					<th class="col-sm-1">操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderList as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>发团</td>\r\n					<td>{{if busOrderList.tripPlan!=null}}{{busOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td>{{busOrderList.seatCount}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.bus!=null}}{{busOrderList.busCompanyArrange.bus.brand}}{{/if}}</td>\r\n					<td>1</td>\r\n					<td>{{busOrderList.price}}</td>\r\n					<td>{{busOrderList.price}}</td>\r\n					<td>{{if busOrderList.user!=null}}{{busOrderList.user.realName}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.busCompany!=null}}{{busOrderList.busCompanyArrange.busCompany.companyName}}{{/if}}</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>{{busOrderList.statusStr}}</td>\r\n					\r\n					<td>\r\n						<a class="cursor {{if busOrderList.status==0}}T-listBusCompany-refuse{{/if}} R-right T-action" style="{{if busOrderList.status==1 || busOrderList.status==-1}}color:#bbb{{/if}}">\r\n							撤销\r\n						</a>\r\n					</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n	<!--分页条数-->\r\n	<div class="row pageMode">\r\n		<div class="col-xs-4">\r\n			<small>共计{{searchParam.totalCount}}条记录</small>\r\n		</div>\r\n		<div style="width:320px; float:right;">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>  \r\n		</div>\r\n	</div>\r\n	<!--分页条数-->\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});