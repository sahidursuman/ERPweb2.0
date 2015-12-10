/*TMODJS:{"debug":true,"version":25,"md5":"fc18d03ec73ab026d85cfc526ae5de28"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, guideName = $data.guideName, startDate = $data.startDate, endDate = $data.endDate, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>导游：</label> <input type="text" class="form-control T-search-name" style="width: 220px;" value="', 
            $line = 5, $out += $escape(guideName), $out += '" maxlength="100"> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="', 
            $line = 9, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="', 
            $line = 11, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>导游</th> <th>账面退补</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 35, $each(list, function(rs) {
                $out += " <tr data-id='", $line = 36, $out += $escape(rs.guideId), $out += "'> <td>", 
                $line = 37, $out += $escape(rs.realname), $out += "</td> <td>", $line = 38, $out += $escape(rs.sumZhangmiantuibu), 
                $out += "</td> <td>", $line = 39, $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", 
                $line = 40, $out += $escape(rs.sumPayedMoney), $out += "</td> <td>", $line = 41, 
                0 != rs.sumUnPayedMoney ? ($out += '<span style="color:#FF0000;">', $line = 41, 
                $out += $escape(rs.sumUnPayedMoney), $out += "</span>", $line = 41) : ($line = 41, 
                $out += $escape(rs.sumUnPayedMoney), $line = 41), $out += "</td> <td>", $line = 42, 
                rs.checkFCount == rs.sumFCount ? ($out += '<span style="color:#00CC00;">', $line = 42, 
                $out += $escape(rs.checkFCount), $out += "/", $line = 42, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 42) : ($out += '<span style="color:#FF9900;">', $line = 42, 
                $out += $escape(rs.checkFCount), $out += "/", $line = 42, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 42), $out += "</td> <td>", $line = 43, rs.payFCount == rs.sumFCount ? ($out += '<span style="color:#00CC00;">', 
                $line = 43, $out += $escape(rs.payFCount), $out += "/", $line = 43, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 43) : ($out += '<span style="color:#FF9900;">', $line = 43, 
                $out += $escape(rs.payFCount), $out += "/", $line = 43, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 43), $out += '</td> <td> <a class="cursor T-action T-check R-right" data-right="1200002|1200005">对账</a> <label class="cursor R-right" data-right="1200002|1200005"> <a class="R-right" data-right="1200003"> |</a></label> <a class="cursor T-action T-pay R-right" data-right="1200003">付款</a> </td> </tr> ', 
                $line = 50;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 55, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>导游：</label>\r\n            <input type="text" class="form-control T-search-name" style="width: 220px;" value="{{guideName}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group input-daterange marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="{{startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="{{endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>导游</th>\r\n                <th>账面退补</th>\r\n                <th>结算金额</th>\r\n                <th>已付金额</th>\r\n                <th>未付金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each list as rs}}\r\n            <tr data-id=\'{{rs.guideId}}\'>\r\n                <td>{{rs.realname}}</td>\r\n                <td>{{rs.sumZhangmiantuibu}}</td>\r\n                <td>{{rs.sumSettlementMoney}}</td>\r\n                <td>{{rs.sumPayedMoney}}</td>\r\n                <td>{{if rs.sumUnPayedMoney != 0}}<span style="color:#FF0000;">{{rs.sumUnPayedMoney}}</span>{{else}}{{rs.sumUnPayedMoney}}{{/if}}</td>\r\n                <td>{{if rs.checkFCount == rs.sumFCount}}<span style="color:#00CC00;">{{rs.checkFCount}}/{{rs.sumFCount}}</span>{{else}}<span style="color:#FF9900;">{{rs.checkFCount}}/{{rs.sumFCount}}</span>{{/if}}</td>\r\n                <td>{{if rs.payFCount == rs.sumFCount}}<span style="color:#00CC00;">{{rs.payFCount}}/{{rs.sumFCount}}</span>{{else}}<span style="color:#FF9900;">{{rs.payFCount}}/{{rs.sumFCount}}</span>{{/if}}</td>\r\n                <td>\r\n                    <a class="cursor T-action T-check R-right" data-right="1200002|1200005">对账</a>\r\n                    <label class="cursor R-right" data-right="1200002|1200005"> <a class="R-right" data-right="1200003"> |</a></label>\r\n                    <a class="cursor T-action T-pay R-right" data-right="1200003">付款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});