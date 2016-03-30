/*TMODJS:{"debug":true,"version":80,"md5":"5d4895176b140d3a91f0a16b90388e90"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listDept", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.deptL, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <thead> <tr class="bg-blur"> <th>部门</th> <th>收客量</th> <th>内转收客量</th> <th>发团量</th> <th>发客量</th> <th>外转客量</th> <th>内转客量</th> <th>代订单量</th> </tr> </thead> <tbody> ', 
            $line = 15, $each(result, function(deptL) {
                $out += " <tr> <td>", $line = 17, $out += $escape(deptL.name), $out += "</td> <td>", 
                $line = 18, $out += $escape(deptL.getAdultCount), $out += "大", $line = 18, $out += $escape(deptL.getChildCount), 
                $out += "小</td> <td>", $line = 19, $out += $escape(deptL.getNotDirectAdultCount), 
                $out += "大", $line = 19, $out += $escape(deptL.getNotDirectChildCount), $out += "小</td> <td>", 
                $line = 20, $out += $escape(deptL.tripCount), $out += "</td> <td>", $line = 21, 
                $out += $escape(deptL.adultCount), $out += "大", $line = 21, $out += $escape(deptL.childCount), 
                $out += "小</td> <td>", $line = 22, $out += $escape(deptL.transAdultCount), $out += "大", 
                $line = 22, $out += $escape(deptL.transChildCount), $out += "小</td> <td>", $line = 23, 
                $out += $escape(deptL.innerAdultCount), $out += "大", $line = 23, $out += $escape(deptL.innerChildCount), 
                $out += "小</td> <td>", $line = 24, $out += $escape(deptL.orderCount), $out += "</td> </tr> ", 
                $line = 26;
            }), $out += ' <tr style="background-color:#effef4"> <td style="font-weight: bold;">合计</td> <td class="T-sumAdultCount">0</td> <td class="T-tripNotDirectAdChildCount">0</td> <td class="T-tripTotalCount">0</td> <td class="T-tripAdChildCount">0</td> <td class="T-transAdChilTotalCount">0</td> <td class="T-innerAdChilTotalCount">0</td> <td class="T-orderTotalCount">0</td> </tr> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 42, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>部门</th>\r\n			<th>收客量</th>\r\n			<th>内转收客量</th>\r\n			<th>发团量</th>\r\n			<th>发客量</th>\r\n			<th>外转客量</th>\r\n			<th>内转客量</th>\r\n			<th>代订单量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as deptL}}\r\n		   <tr>\r\n	   		    <td>{{deptL.name}}</td>\r\n	   			<td>{{deptL.getAdultCount}}大{{deptL.getChildCount}}小</td>\r\n	   			<td>{{deptL.getNotDirectAdultCount}}大{{deptL.getNotDirectChildCount}}小</td>\r\n	   			<td>{{deptL.tripCount}}</td>\r\n	   			<td>{{deptL.adultCount}}大{{deptL.childCount}}小</td>\r\n	   			<td>{{deptL.transAdultCount}}大{{deptL.transChildCount}}小</td>\r\n	   			<td>{{deptL.innerAdultCount}}大{{deptL.innerChildCount}}小</td>\r\n	   			<td>{{deptL.orderCount}}</td>\r\n		   	</tr>\r\n		{{/each}}\r\n\r\n		<tr style="background-color:#effef4">\r\n			<td style="font-weight: bold;">合计</td>\r\n			<td class="T-sumAdultCount">0</td>\r\n			<td class="T-tripNotDirectAdChildCount">0</td>\r\n			<td class="T-tripTotalCount">0</td>\r\n			<td class="T-tripAdChildCount">0</td>\r\n			<td class="T-transAdChilTotalCount">0</td>\r\n			<td class="T-innerAdChilTotalCount">0</td>\r\n			<td class="T-orderTotalCount">0</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});