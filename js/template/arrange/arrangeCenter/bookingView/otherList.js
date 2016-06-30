/*TMODJS:{"debug":true,"version":10,"md5":"76a5f59db4a5ad1a99b385a58c069f6d"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/otherList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>代订单号</th> <th>客户名称</th> <th>销售时间</th> <th>要求</th> <th>安排结果</th> <th>外联销售</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-its-list"> ', 
            $line = 15, $each(bookingOrderList, function(item) {
                $out += ' <tr data-id="', $line = 16, $out += $escape(item.id), $out += '"> <td>', 
                $line = 17, $out += $escape(item.orderNumber), $out += "</td> <td>", $line = 18, 
                $out += $escape(item.partnerAgencyName), $out += "</td> <td>", $line = 19, $out += $escape($helpers.dateFormat(item.date, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 20, $out += $escape(item.required), $out += "</td> <td>", 
                $line = 21, $out += $string(item.arrangeResult || "-"), $out += "</td> <td>", $line = 22, 
                $out += $escape(item.outOPUserName), $out += "</td> <td> ", $line = 24, 1 == item.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已完成 ', 
                $line = 26) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未完成 ', 
                $line = 28), $out += ' </td> <td> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480007" title="安排"> 安排 </a> <a class="cursor T-action T-view" title="查看"> <label class="padding-right20">|</label> 查看 </a> </td> </tr> ', 
                $line = 37;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 42, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover  T-showHighLight">\r\n    <thead> \r\n        <tr class="bg-blur">\r\n            <th>代订单号</th>\r\n            <th>客户名称</th>\r\n            <th>销售时间</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>外联销售</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-its-list">\r\n        {{each bookingOrderList as item}}\r\n            <tr data-id="{{item.id}}">\r\n                <td>{{item.orderNumber}}</td>\r\n                <td>{{item.partnerAgencyName}}</td>\r\n                <td>{{item.date | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n                <td>{{item.required}}</td>\r\n                 <td>{{#item.arrangeResult || "-"}}</td>\r\n                <td>{{item.outOPUserName}}</td>\r\n                <td>\r\n                    {{if item.status == 1}}\r\n                        <i class="ace-icon fa fa-check green bigger-130"></i>已完成\r\n                    {{else}}\r\n                        <i class="ace-icon fa fa-times red bigger-125"></i>未完成\r\n                    {{/if}}\r\n                </td>\r\n                <td> \r\n                    <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480007" title="安排">\r\n                        安排\r\n                    </a>\r\n                    <a class="cursor T-action T-view" title="查看"> <label class="padding-right20">|</label>  查看 </a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});