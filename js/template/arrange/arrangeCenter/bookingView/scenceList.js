/*TMODJS:{"debug":true,"version":15,"md5":"a82f9fcfd4df12fa7f2d2b35234aab28"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/scenceList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += ' <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>代订单号</th> <th>出游日期</th> <th>景区</th> <th>门票数量</th> <th>要求</th> <th>安排结果</th> <th>外联销售</th> <th>状态</th> <th width="150">操作</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 17, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 18, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 19, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 20, $out += $escape($helpers.dateFormat(rs.startDate, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 21, $out += $escape(rs.scenicName), $out += "</td> <td>", 
                $line = 22, $out += $escape(rs.memberCount), $out += "</td> <td>", $line = 23, $out += $escape(rs.required), 
                $out += "</td> <td>", $line = 24, $out += $string(rs.arrangeResult || "-"), $out += "</td> <td>", 
                $line = 25, $out += $escape(rs.outOPUserName), $out += "</td> <td> ", $line = 27, 
                1 == rs.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已安排 ', 
                $line = 29) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未安排 ', 
                $line = 31), $out += ' </td> <td> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480008" title="安排"> 安排 <label class="padding-right20">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> </td> </tr> ', 
                $line = 41;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 47, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!-- 景区代订 -->\r\n<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>代订单号</th>\r\n            <th>出游日期</th>\r\n            <th>景区</th>\r\n            <th>门票数量</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>外联销售</th>\r\n            <th>状态</th>\r\n            <th width="150">操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-scenic-list">\r\n    {{each bookingOrderList as rs}}\r\n        <tr data-id="{{rs.id}}">\r\n            <td>{{rs.orderNumber}}</td>\r\n            <td>{{rs.startDate | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.scenicName}}</td>\r\n            <td>{{rs.memberCount}}</td>\r\n            <td>{{rs.required}}</td>\r\n            <td>{{#rs.arrangeResult || "-"}}</td>\r\n            <td>{{rs.outOPUserName}}</td>\r\n            <td>\r\n                {{if rs.status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i>已安排\r\n                {{else}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i>未安排\r\n                {{/if}}\r\n            </td>\r\n            <td> \r\n                <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480008" title="安排">\r\n                    安排 <label class="padding-right20">|</label> \r\n                </a>\r\n                <a class="cursor T-action T-view" title="查看"> 查看 </a>\r\n            </td>\r\n\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});