/*TMODJS:{"debug":true,"version":726,"md5":"65d3d6ff54290bb4dd1773b4a217e83a"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listBusCompany", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busOrderList = $data.busOrderList, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class=" listBusCompany"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <colgroup> <col style="width:175px;"> <col style="width:80px;"> <col style="width:175px;"> <col style=""> <col style="width:70px;"> <col style="width:150px;"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px;"> <col style="width:110px;"> <col style=""> <col style="width:100px;"> </colgroup> <thead> <tr class="bg-blur"> <th>订单号</th> <th>类型</th> <th>类型编号</th> <th>车队</th> <th>车座数</th> <th>车量品牌</th> <th>单价</th> <th>金额</th> <th>操作人</th> <th>操作时间</th> <th>备注</th> <th>状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 34, $each(busOrderList, function(busOrderList) {
                $out += ' <tr data-value="', $line = 35, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 36, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>发团</td> <td>", 
                $line = 38, null != busOrderList.tripPlan && ($line = 38, $out += $escape(busOrderList.tripPlan.tripNumber), 
                $line = 38), $out += "</td> <td>", $line = 39, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.busCompany && ($line = 39, 
                $out += $escape(busOrderList.busCompanyArrange.busCompany.companyName), $line = 39), 
                $out += '</td> <td class="F-float F-count">', $line = 40, busOrderList.busCompanyArrange && ($line = 40, 
                $out += $escape(busOrderList.busCompanyArrange.needSeatCount), $line = 40), $out += "</td> <td>", 
                $line = 41, null != busOrderList.busCompanyArrange && ($line = 41, $out += $escape(busOrderList.busCompanyArrange.brand), 
                $line = 41), $out += '</td> <td class="F-float F-money">', $line = 42, $out += $escape(busOrderList.price), 
                $out += '</td> <td class="F-float F-money">', $line = 43, $out += $escape(busOrderList.seatCount * busOrderList.price), 
                $out += "</td> <td>", $line = 44, null != busOrderList.user && ($line = 44, $out += $escape(busOrderList.user.realName), 
                $line = 44), $out += "</td> <td>", $line = 45, null != busOrderList.createTime && ($line = 45, 
                $out += $escape($helpers.dateFormat(busOrderList.createTime, "yyyy-MM-dd")), $line = 45), 
                $out += "</td> <td>", $line = 46, $out += $escape(busOrderList.remark), $out += "</td> <td> ", 
                $line = 48, -1 == busOrderList.status ? ($out += " 已撤单 ", $line = 50) : 0 == busOrderList.status ? ($out += " 预定中 ", 
                $line = 52) : 1 == busOrderList.status && -1 == busOrderList.result ? ($out += " 已拒绝 ", 
                $line = 54) : 1 == busOrderList.status && 1 == busOrderList.result && ($out += " 已预订 ", 
                $line = 56), $out += " </td> </tr> ", $line = 59;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 65, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class=" listBusCompany">\r\n	<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n			<colgroup>\r\n				<col style="width:175px;">\r\n				<col style="width:80px;">\r\n				<col style="width:175px;">\r\n				<col style="">\r\n				<col style="width:70px;">\r\n				<col style="width:150px;">\r\n				<col style="width:80px">\r\n				<col style="width:80px">\r\n				<col style="width:80px;">\r\n				<col style="width:110px;">\r\n				<col style="">\r\n				<col style="width:100px;">\r\n			</colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>订单号</th>\r\n					<th>类型</th>\r\n					<th>类型编号</th>\r\n					<th>车队</th>\r\n					<th>车座数</th>\r\n					<th>车量品牌</th>\r\n					<th>单价</th>\r\n					<th>金额</th>\r\n					<th>操作人</th>\r\n					<th>操作时间</th>\r\n					<th>备注</th>\r\n					<th>状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderList as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>发团</td>\r\n					<td>{{if busOrderList.tripPlan!=null}}{{busOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.busCompany!=null}}{{busOrderList.busCompanyArrange.busCompany.companyName}}{{/if}}</td>\r\n					<td class="F-float F-count">{{if !!busOrderList.busCompanyArrange}}{{busOrderList.busCompanyArrange.needSeatCount}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null}}{{busOrderList.busCompanyArrange.brand}}{{/if}}</td>\r\n					<td class="F-float F-money">{{busOrderList.price}}</td>\r\n					<td class="F-float F-money">{{busOrderList.seatCount*busOrderList.price}}</td>\r\n					<td>{{if busOrderList.user!=null}}{{busOrderList.user.realName}}{{/if}}</td>\r\n					<td>{{if busOrderList.createTime!=null}}{{busOrderList.createTime  | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>\r\n						{{if busOrderList.status==-1}}\r\n						  已撤单\r\n						  {{else if busOrderList.status==0}}\r\n						  预定中\r\n						  {{else if busOrderList.status==1 && busOrderList.result==-1}}\r\n						  已拒绝\r\n						  {{else if busOrderList.status==1  && busOrderList.result==1}}\r\n						  已预订\r\n						{{/if}}\r\n					</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-5">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-7">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});