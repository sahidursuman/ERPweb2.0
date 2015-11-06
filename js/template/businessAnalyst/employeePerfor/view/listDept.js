/*TMODJS:{"debug":true,"version":46,"md5":"893762ca0eb72afc949bae7bb722a772"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listDept", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.deptL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">部门</th> <th class="col-sm-2">收客量</th> <th class="col-sm-1">发团量</th> <th class="col-sm-1">发客量</th> <th class="col-sm-1">外转客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-2">代订单量</th> </tr> </thead> <tbody> ', 
            $line = 23, $each(result, function(deptL) {
                $out += " <tr> <td>", $line = 25, $out += $escape(deptL.name), $out += "</td> <td>", 
                $line = 26, $out += $escape(deptL.getCount), $out += "</td> <td>", $line = 27, $out += $escape(deptL.tripPlanCount), 
                $out += "</td> <td>", $line = 28, $out += $escape(deptL.tripPlanMemberCount), $out += "</td> <td>", 
                $line = 29, $out += $escape(deptL.transCount), $out += "</td> <td>", $line = 30, 
                $out += $escape(deptL.innerCount), $out += "</td> <td>", $line = 31, $out += $escape(deptL.orderCount), 
                $out += "</td> </tr> ", $line = 33;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 38, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-listDept-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover table-fixed">\r\n	<colgroup>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:20%;"></col>\r\n		<col style="width:20%;"></col>\r\n		<col style="width:15%;"></col>\r\n		<col style="width:15%;"></col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="col-sm-1">部门</th>\r\n			<th class="col-sm-2">收客量</th>\r\n			<th class="col-sm-1">发团量</th>\r\n			<th class="col-sm-1">发客量</th>\r\n			<th class="col-sm-1">外转客量</th>\r\n			<th class="col-sm-1">内转客量</th>\r\n			<th class="col-sm-2">代订单量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as deptL}}\r\n		   <tr>\r\n	   		    <td>{{deptL.name}}</td>\r\n	   			<td>{{deptL.getCount}}</td>\r\n	   			<td>{{deptL.tripPlanCount}}</td>\r\n	   			<td>{{deptL.tripPlanMemberCount}}</td>\r\n	   			<td>{{deptL.transCount}}</td>\r\n	   			<td>{{deptL.innerCount}}</td>\r\n	   			<td>{{deptL.orderCount}}</td>		\r\n		   	</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-listDept-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});