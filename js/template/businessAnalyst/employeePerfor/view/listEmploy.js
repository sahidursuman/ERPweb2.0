/*TMODJS:{"debug":true,"version":30,"md5":"e2ae46373c0ef5fc2eb7f103d66c2516"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listEmploy", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, resultList = $data.resultList, $escape = ($data.empL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">员工</th> <th class="col-sm-2">收客量</th> <th class="col-sm-1">发团量</th> <th class="col-sm-1">发客量</th> <th class="col-sm-1">外转客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-2">代订单量</th> </tr> </thead> <tbody> ', 
            $line = 23, $each(resultList, function(empL) {
                $out += " <tr> <td>", $line = 25, $out += $escape(empL.name), $out += "</td> <td>", 
                $line = 26, $out += $escape(empL.getCount), $out += "</td> <td>", $line = 27, $out += $escape(empL.tripPlanCount), 
                $out += "</td> <td>", $line = 28, $out += $escape(empL.tripPlanMemberCount), $out += "</td> <td>", 
                $line = 29, $out += $escape(empL.transCount), $out += "</td> <td>", $line = 30, 
                $out += $escape(empL.innerCount), $out += "</td> <td>", $line = 31, $out += $escape(empL.orderCount), 
                $out += "</td> </tr> ", $line = 33;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 38, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<colgroup>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:20%;"></col>\r\n		<col style="width:20%;"></col>\r\n		<col style="width:15%;"></col>\r\n		<col style="width:15%;"></col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="col-sm-1">员工</th>\r\n			<th class="col-sm-2">收客量</th>\r\n			<th class="col-sm-1">发团量</th>\r\n			<th class="col-sm-1">发客量</th>\r\n			<th class="col-sm-1">外转客量</th>\r\n			<th class="col-sm-1">内转客量</th>\r\n			<th class="col-sm-2">代订单量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each resultList as empL}}\r\n		   <tr>\r\n	   		    <td>{{empL.name}}</td>\r\n	   			<td>{{empL.getCount}}</td>\r\n	   			<td>{{empL.tripPlanCount}}</td>\r\n	   			<td>{{empL.tripPlanMemberCount}}</td>\r\n	   			<td>{{empL.transCount}}</td>\r\n	   			<td>{{empL.innerCount}}</td>\r\n	   			<td>{{empL.orderCount}}</td>		\r\n		   	</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});