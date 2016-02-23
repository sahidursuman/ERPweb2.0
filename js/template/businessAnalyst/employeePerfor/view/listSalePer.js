/*TMODJS:{"debug":true,"version":22,"md5":"3140a698b6dbc5772fee3e9e855d1cd1"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listSalePer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.salePerL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:50%;"></col> <col style="width:50%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">员工</th> <th class="col-sm-2">收客量</th> </tr> </thead> <tbody> ', 
            $line = 13, $each(result, function(salePerL) {
                $out += " <tr> <td>", $line = 15, $out += $escape(salePerL.name), $out += "</td> <td>", 
                $line = 16, $out += $escape(salePerL.getAdultCount), $out += "大", $line = 16, $out += $escape(salePerL.getChildCount), 
                $out += "小</td> </tr> ", $line = 18;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 23, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-listSalePer-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<colgroup>\r\n		<col style="width:50%;"></col>\r\n		<col style="width:50%;"></col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="col-sm-1">员工</th>\r\n			<th class="col-sm-2">收客量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as salePerL}}\r\n		   <tr>\r\n	   		    <td>{{salePerL.name}}</td>\r\n	   			<td>{{salePerL.getAdultCount}}大{{salePerL.getChildCount}}小</td>\r\n	   		</tr>\r\n	   	{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}}  条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-listSalePer-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});