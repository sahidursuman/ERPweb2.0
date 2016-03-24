/*TMODJS:{"debug":true,"version":23,"md5":"813fc9a6f51133544c62bfbca84212f2"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/borrowing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += ' <div class="T-borrowing-bank" > <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>交易单号</th> <th>借款申请单号</th> <th>申请借款金额</th> <th>批准金额</th> <th>拨款金额</th> <th>拨款时间</th> <th>状态</th> </tr> </thead> <tbody class="T-accObjList"> ', 
            $line = 16, $each(result, function(result) {
                $out += " <tr> <td>", $line = 18, $out += $escape(result.approvedNumber), $out += "</td> <td>", 
                $line = 19, $out += $escape(result.applyNumber), $out += "</td> <td>", $line = 20, 
                $out += $escape(result.applyMoney), $out += "</td> <td>", $line = 21, $out += $escape(result.approvedMoney), 
                $out += "</td> <td>", $line = 22, $out += $escape(result.appropriationMoney), $out += "</td> <td>", 
                $line = 23, $out += $escape(result.appropriationDate), $out += "</td> <td> ", $line = 25, 
                0 == result.appropriationStatus ? ($out += " 待拨款 ", $line = 27) : 1 == result.appropriationStatus && ($out += " 已拨款 ", 
                $line = 29), $out += " </td> </tr> ", $line = 32;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <span class="recordSize">共计 ', 
            $line = 38, $out += $escape(searchParam.totalCount), $out += ' 条记录</span> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--银行账户设置start-->\r\n<div class="T-borrowing-bank" >\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">\r\n				<th>交易单号</th>\r\n				<th>借款申请单号</th>\r\n				<th>申请借款金额</th>\r\n				<th>批准金额</th>\r\n				<th>拨款金额</th>\r\n				<th>拨款时间</th>\r\n				<th>状态</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody class="T-accObjList">\r\n		{{each result as result}}\r\n		<tr> \r\n		<td>{{result.approvedNumber}}</td>\r\n		<td>{{result.applyNumber}}</td>\r\n		<td>{{result.applyMoney}}</td>\r\n		<td>{{result.approvedMoney}}</td>\r\n		<td>{{result.appropriationMoney}}</td>\r\n		<td>{{result.appropriationDate}}</td>\r\n		<td>\r\n			{{ if result.appropriationStatus==0 }}\r\n			待拨款\r\n			{{else if result.appropriationStatus==1 }}\r\n			已拨款\r\n			{{/if}}\r\n		</td>\r\n		</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<span class="recordSize">共计 {{searchParam.totalCount}} 条记录</span>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n			</div>\r\n		</div>\r\n</div>\r\n		<!--银行账户设置end-->'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});