/*TMODJS:{"debug":true,"version":107,"md5":"f9393882318e34429276c8e45e63de16"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listSalePer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.salePerL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:50%;"></col> <col style="width:50%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">员工</th> <th class="col-sm-2">收客量</th> </tr> </thead> <tbody> ', 
            $line = 13, $each(result, function(salePerL) {
                $out += " <tr> <td>", $line = 15, $out += $escape(salePerL.name), $out += "</td> <td>", 
                $line = 16, $out += $escape(salePerL.adultCount), $out += "大", $line = 16, $out += $escape(salePerL.childCount), 
                $out += "小</td> </tr> ", $line = 18;
            }), $out += ' <tr style="background-color:#effef4"> <td class="text-bold">合计</td> <td class="T-totalCount"></td> </tr> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 29, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<colgroup>\r\n		<col style="width:50%;"></col>\r\n		<col style="width:50%;"></col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="col-sm-1">员工</th>\r\n			<th class="col-sm-2">收客量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as salePerL}}\r\n		   <tr>\r\n	   		    <td>{{salePerL.name}}</td>\r\n	   			<td>{{salePerL.adultCount}}大{{salePerL.childCount}}小</td>\r\n	   		</tr>\r\n	   	{{/each}}\r\n\r\n	   	<tr style="background-color:#effef4">\r\n	   		<td class="text-bold">合计</td>\r\n	   		<td class="T-totalCount"></td>\r\n	   	</tr>\r\n\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-5">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-7">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});