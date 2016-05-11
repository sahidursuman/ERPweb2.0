/*TMODJS:{"debug":true,"version":13,"md5":"e4e2f452b56236b8f316a466b94c09f9"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/busList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>代订单号</th> <th>用车时间</th> <th>要求</th> <th>安排结果</th> <th>外联销售</th> <th>状态</th> <th width="150">操作</th> </tr> </thead> <tbody class="T-bus-list"> ', 
            $line = 14, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 15, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 16, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 17, $out += $escape($helpers.dateFormat(rs.startUseTime, "yyyy-MM-dd")), 
                $out += " - ", $line = 17, $out += $escape($helpers.dateFormat(rs.endUseTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 18, $out += $escape(rs.required), $out += "</td> <td>", 
                $line = 19, $out += $string(rs.arrangeResult || "-"), $out += "</td> <td>", $line = 20, 
                $out += $escape(rs.outOPUserName), $out += "</td> <td> ", $line = 22, 1 == rs.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已完成 ', 
                $line = 24) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未完成 ', 
                $line = 26), $out += ' </td> <td> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480006" title="安排"> 安排 <label class="padding-right20">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> </td> </tr> ', 
                $line = 36;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 42, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>代订单号</th>\r\n            <th>用车时间</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>外联销售</th>\r\n            <th>状态</th>\r\n            <th width="150">操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-bus-list">\r\n    {{each bookingOrderList as rs}}\r\n        <tr data-id="{{rs.id}}">\r\n            <td>{{rs.orderNumber}}</td>\r\n            <td>{{rs.startUseTime | dateFormat: \'yyyy-MM-dd\'}} - {{rs.endUseTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.required}}</td>\r\n            <td>{{#rs.arrangeResult || "-"}}</td>\r\n            <td>{{rs.outOPUserName}}</td>\r\n            <td>\r\n                {{if rs.status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i>已完成\r\n                {{else}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i>未完成\r\n                {{/if}}\r\n            </td>\r\n            <td> \r\n                <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480006" title="安排">\r\n                    安排 <label class="padding-right20">|</label> \r\n                </a>\r\n                <a class="cursor T-action T-view" title="查看"> 查看 </a>\r\n            </td>\r\n\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});