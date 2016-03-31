/*TMODJS:{"debug":true,"version":76,"md5":"4373914cc7fbc83049d52dd0c37cbbe7"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listEmploy", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.empL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">员工</th> <th class="col-sm-1">发团量</th> <th class="col-sm-2">发客量</th> <th class="col-sm-1">外转客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-2">代订单量</th> </tr> </thead> <tbody> ', 
            $line = 21, $each(result, function(empL) {
                $out += " <tr> <td>", $line = 23, $out += $escape(empL.name), $out += "</td> <td>", 
                $line = 24, $out += $escape(empL.tripCount), $out += "</td> <td>", $line = 25, $out += $escape(empL.adultCount), 
                $out += "大", $line = 25, $out += $escape(empL.childCount), $out += "小</td> <td>", 
                $line = 26, $out += $escape(empL.transAdultCount), $out += "大", $line = 26, $out += $escape(empL.transChildCount), 
                $out += "小</td> <td>", $line = 27, $out += $escape(empL.innerAdultCount), $out += "大", 
                $line = 27, $out += $escape(empL.innerChildCount), $out += "小</td> <td>", $line = 28, 
                $out += $escape(empL.orderCount), $out += "</td> </tr> ", $line = 30;
            }), $out += ' <tr style="background-color:#effef4"> <td class="text-bold">合计</td> <td class="T-tripTotalCount">0</td> <td class="T-adChilTotalCount">0</td> <td class="T-transAdChilTotalCount">0</td> <td class="T-innerAdChilTotalCount">0</td> <td class="T-orderTotalCount">0</td> </tr> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 44, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<colgroup>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:10%;"></col>\r\n		<col style="width:20%;"></col>\r\n		<col style="width:15%;"></col>\r\n		<col style="width:15%;"></col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="col-sm-1">员工</th>\r\n			<th class="col-sm-1">发团量</th>\r\n			<th class="col-sm-2">发客量</th>\r\n			<th class="col-sm-1">外转客量</th>\r\n			<th class="col-sm-1">内转客量</th>\r\n			<th class="col-sm-2">代订单量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as empL}}\r\n		   <tr>\r\n	   		    <td>{{empL.name}}</td>\r\n	   		    <td>{{empL.tripCount}}</td>\r\n	   			<td>{{empL.adultCount}}大{{empL.childCount}}小</td>\r\n	   			<td>{{empL.transAdultCount}}大{{empL.transChildCount}}小</td>\r\n	   		    <td>{{empL.innerAdultCount}}大{{empL.innerChildCount}}小</td>\r\n	   			<td>{{empL.orderCount}}</td>	\r\n		   	</tr>\r\n		{{/each}}\r\n\r\n		<tr style="background-color:#effef4">\r\n			<td class="text-bold">合计</td>\r\n			<td class="T-tripTotalCount">0</td>\r\n			<td class="T-adChilTotalCount">0</td>\r\n			<td class="T-transAdChilTotalCount">0</td>\r\n			<td class="T-innerAdChilTotalCount">0</td>\r\n			<td class="T-orderTotalCount">0</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-5">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-7">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});