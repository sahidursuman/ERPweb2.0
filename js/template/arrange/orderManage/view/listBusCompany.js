/*TMODJS:{"debug":true,"version":659,"md5":"712b73843098cb4b59dcf53403b4934d"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listBusCompany", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busOrderList = $data.busOrderList, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row col-xs-12 listBusCompany"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:30%;"></col> <col style="width:10%;"></col> <col style="width:25%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:95px"></col> <col style="width:95px"></col> <col style="width:80px;"></col> <col style="width:10%;"></col> <col style="width:100px;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>订单号</th> <th>类型</th> <th>类型编号</th> <th>车队</th> <th>车座数</th> <th>车量品牌</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>操作人</th> <th>操作时间</th> <th>备注</th> <th>状态</th> </tr> </thead> <tbody class="T-Bus-list"> ', 
            $line = 36, $each(busOrderList, function(busOrderList) {
                $out += ' <tr data-value="', $line = 37, $out += $escape(busOrderList.id), $out += '"> <td>', 
                $line = 38, $out += $escape(busOrderList.orderNumber), $out += "</td> <td>发团</td> <td>", 
                $line = 40, null != busOrderList.tripPlan && ($line = 40, $out += $escape(busOrderList.tripPlan.tripNumber), 
                $line = 40), $out += "</td> <td>", $line = 41, null != busOrderList.busCompanyArrange && null != busOrderList.busCompanyArrange.busCompany && ($line = 41, 
                $out += $escape(busOrderList.busCompanyArrange.busCompany.companyName), $line = 41), 
                $out += "</td> <td>", $line = 42, busOrderList.busCompanyArrange && ($line = 42, 
                $out += $escape(busOrderList.busCompanyArrange.needSeatCount), $line = 42), $out += "</td> <td>", 
                $line = 43, null != busOrderList.busCompanyArrange && ($line = 43, $out += $escape(busOrderList.busCompanyArrange.brand), 
                $line = 43), $out += "</td> <td>", $line = 44, $out += $escape(busOrderList.seatCount), 
                $out += "</td> <td>", $line = 45, $out += $escape(busOrderList.price), $out += "</td> <td>", 
                $line = 46, $out += $escape(busOrderList.seatCount * busOrderList.price), $out += "</td> <td>", 
                $line = 47, null != busOrderList.user && ($line = 47, $out += $escape(busOrderList.user.realName), 
                $line = 47), $out += "</td> <td>", $line = 48, null != busOrderList.createTime && ($line = 48, 
                $out += $escape($helpers.dateFormat(busOrderList.createTime, "yyyy-MM-dd")), $line = 48), 
                $out += "</td> <td>", $line = 49, $out += $escape(busOrderList.remark), $out += "</td> <td> ", 
                $line = 51, -1 == busOrderList.status ? ($out += " 已撤单 ", $line = 53) : 0 == busOrderList.status ? ($out += " 已下单 ", 
                $line = 55) : 1 == busOrderList.status ? ($out += " 已确认 ", $line = 57) : 2 == busOrderList.status ? ($out += " 已完成 ", 
                $line = 59) : 3 == busOrderList.status && ($out += " 进行中 ", $line = 61), $out += " </td> </tr> ", 
                $line = 64;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 72, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 listBusCompany">\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n		    	<col style="width:30%;"></col>\r\n		    	<col style="width:10%;"></col>\r\n		    	<col style="width:25%;"></col>\r\n		    	<col style="width:15%;"></col>\r\n		    	<col style="width:10%;"></col>\r\n			 	<col style="width:15%;"></col>\r\n 				<col style="width:95px"></col>\r\n		    	<col style="width:95px"></col>\r\n		    	<col style="width:80px;"></col>\r\n		 	 	<col style="width:10%;"></col>\r\n		 	 	<col style="width:100px;"></col>\r\n		 	 	<col style="width:25%;"></col>\r\n		 	 	<col style="width:100px;"></col>\r\n		    </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>订单号</th>\r\n					<th>类型</th>\r\n					<th>类型编号</th>\r\n					<th>车队</th>\r\n					<th>车座数</th>\r\n					<th>车量品牌</th>\r\n					<th>数量</th>\r\n					<th>单价</th>\r\n					<th>金额</th>\r\n					<th>操作人</th>\r\n					<th>操作时间</th>\r\n					<th>备注</th>\r\n					<th>状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Bus-list">\r\n			{{each busOrderList as busOrderList}}\r\n				<tr data-value="{{busOrderList.id}}">\r\n				    <td>{{busOrderList.orderNumber}}</td>\r\n				    <td>发团</td>\r\n					<td>{{if busOrderList.tripPlan!=null}}{{busOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null && busOrderList.busCompanyArrange.busCompany!=null}}{{busOrderList.busCompanyArrange.busCompany.companyName}}{{/if}}</td>\r\n					<td>{{if !!busOrderList.busCompanyArrange}}{{busOrderList.busCompanyArrange.needSeatCount}}{{/if}}</td>\r\n					<td>{{if busOrderList.busCompanyArrange!=null}}{{busOrderList.busCompanyArrange.brand}}{{/if}}</td>\r\n					<td>{{busOrderList.seatCount}}</td>\r\n					<td>{{busOrderList.price}}</td>\r\n					<td>{{busOrderList.seatCount*busOrderList.price}}</td>\r\n					<td>{{if busOrderList.user!=null}}{{busOrderList.user.realName}}{{/if}}</td>\r\n					<td>{{if busOrderList.createTime!=null}}{{busOrderList.createTime  | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n					<td>{{busOrderList.remark}}</td>\r\n					<td>\r\n						{{if busOrderList.status==-1}}\r\n						  已撤单\r\n						  {{else if busOrderList.status==0}}\r\n						  已下单\r\n						  {{else if busOrderList.status==1}}\r\n						  已确认\r\n						  {{else if busOrderList.status==2}}\r\n						  已完成\r\n						  {{else if busOrderList.status==3}}\r\n						  进行中\r\n						{{/if}}\r\n					</td>\r\n				</tr>\r\n			{{/each}}									\r\n			</tbody>\r\n	</table>\r\n\r\n \r\n	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});