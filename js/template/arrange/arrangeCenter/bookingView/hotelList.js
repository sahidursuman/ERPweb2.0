/*TMODJS:{"debug":true,"version":22,"md5":"20e847bba64325c8b0eb798b08251bc3"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/hotelList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $string = $utils.$string, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>代订单号</th> <th>客户名称</th> <th width="85">入住日期</th> <th width="85">离店日期</th> <th width="70">星级</th> <th width="60">间数</th> <th>要求</th> <th>安排结果</th> <th width="100">外联销售</th> <th width="80">状态</th> <th width="150">操作</th> </tr> </thead> <tbody class="T-hotel-list"> ', 
            $line = 18, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 19, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 20, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 21, $out += $escape(rs.partnerAgencyName), 
                $out += "</td> <td>", $line = 22, $out += $escape($helpers.dateFormat(rs.checkInTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 23, $out += $escape($helpers.dateFormat(rs.checkOutTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 24, $out += $escape($helpers.getHotelLevelDesc(rs.hotelLevel)), 
                $out += "</td> <td>", $line = 25, $out += $escape(rs.roomCount), $out += "</td> <td>", 
                $line = 26, $out += $escape(rs.required), $out += "</td> <td>", $line = 27, $out += $string(rs.arrangeResult || "-"), 
                $out += "</td> <td>", $line = 28, $out += $escape(rs.outOPUserName), $out += "</td> <td> ", 
                $line = 30, 1 == rs.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i>已完成 ', 
                $line = 32) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未完成 ', 
                $line = 34), $out += ' </td> <td> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480007" title="安排"> 安排 </a> <a class="cursor T-action T-view" title="查看"> <label class="padding-right20">|</label> 查看 </a> </td> </tr> ', 
                $line = 44;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 50, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>代订单号</th>\r\n            <th>客户名称</th>\r\n            <th width="85">入住日期</th>\r\n            <th width="85">离店日期</th>\r\n            <th width="70">星级</th>\r\n            <th width="60">间数</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th width="100">外联销售</th>\r\n            <th width="80">状态</th>\r\n            <th width="150">操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-hotel-list">\r\n    {{each bookingOrderList as rs}}\r\n        <tr data-id="{{rs.id}}">\r\n            <td>{{rs.orderNumber}}</td>\r\n            <td>{{rs.partnerAgencyName}}</td>\r\n            <td>{{rs.checkInTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.checkOutTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.hotelLevel | getHotelLevelDesc}}</td>\r\n            <td>{{rs.roomCount}}</td>\r\n            <td>{{rs.required}}</td>\r\n            <td>{{#rs.arrangeResult || "-"}}</td>\r\n            <td>{{rs.outOPUserName}}</td>\r\n            <td>\r\n                {{if rs.status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i>已完成\r\n                {{else}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i>未完成\r\n                {{/if}}\r\n            </td>\r\n            <td> \r\n                <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1480007" title="安排">\r\n                    安排\r\n                </a>\r\n                <a class="cursor T-action T-view" title="查看"> <label class="padding-right20">|</label>  查看 </a>\r\n            </td>\r\n\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});