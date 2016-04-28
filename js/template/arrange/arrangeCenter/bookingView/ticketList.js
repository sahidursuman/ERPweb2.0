/*TMODJS:{"debug":true,"version":7,"md5":"fa008114b5c00b0366b342e032f64e7a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/ticketList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += ' <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>代订单号</th> <th>类型</th> <th>出发时间</th> <th>路程</th> <th>座位级别</th> <th>数量</th> <th>要求</th> <th>安排结果</th> <th>外联销售</th> <th>状态</th> <th width="150">操作</th> </tr> </thead> <tbody class="T-ticket-list"> ', 
            $line = 19, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 20, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 21, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 22, $out += $escape($helpers.getTicketText(rs.type)), 
                $out += "</td> <td>", $line = 23, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd hh:mm")), 
                $out += "</td> <td>", $line = 24, $out += $escape(rs.startingCity), $out += " - ", 
                $line = 24, $out += $escape(rs.arriveCity), $out += "</td> <td>", $line = 25, $out += $escape(rs.seatLevel), 
                $out += "</td> <td>", $line = 26, $out += $escape(rs.memberCount), $out += "</td> <td>", 
                $line = 27, $out += $escape(rs.required), $out += "</td> <td>", $line = 28, $out += $string(rs.arrangeResult || "-"), 
                $out += "</td> <td>", $line = 29, $out += $escape(rs.outOPUserName), $out += "</td> <td> ", 
                $line = 31, 1 == rs.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已安排 ', 
                $line = 33) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未安排 ', 
                $line = 35), $out += ' </td> <td> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1140007" title="安排"> 安排 <label class="padding-right20">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> </td> </tr> ', 
                $line = 45;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 51, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!-- 票务代订 -->\r\n<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>代订单号</th>\r\n            <th>类型</th>\r\n            <th>出发时间</th>\r\n            <th>路程</th>\r\n            <th>座位级别</th>\r\n            <th>数量</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>外联销售</th>\r\n            <th>状态</th>\r\n            <th width="150">操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-ticket-list">\r\n    {{each bookingOrderList as rs}}\r\n        <tr data-id="{{rs.id}}">\r\n            <td>{{rs.orderNumber}}</td>\r\n            <td>{{rs.type | getTicketText}}</td>\r\n            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}</td>\r\n            <td>{{rs.startingCity}} - {{rs.arriveCity}}</td>\r\n            <td>{{rs.seatLevel}}</td>\r\n            <td>{{rs.memberCount}}</td>\r\n            <td>{{rs.required}}</td>\r\n            <td>{{#rs.arrangeResult || "-"}}</td>\r\n            <td>{{rs.outOPUserName}}</td>\r\n            <td>\r\n                {{if rs.status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i>已安排\r\n                {{else}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i>未安排\r\n                {{/if}}\r\n            </td>\r\n            <td>\r\n                <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1140007" title="安排">\r\n                    安排 <label class="padding-right20">|</label> \r\n                </a>\r\n                <a class="cursor T-action T-view" title="查看"> 查看 </a>\r\n            </td>\r\n\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});