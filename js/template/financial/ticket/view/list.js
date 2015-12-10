/*TMODJS:{"debug":true,"version":7,"md5":"bdc7a713f9c8729238e3ec6176b08d3f"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialTicketList = $data.financialTicketList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>票务商家：</label> <input type="text" class="form-control T-search-name" value="', 
            $line = 6, $out += $escape(searchParam.ticketName || "全部"), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>票务商家</th> <th>账面应付</th> <th>结算金额</th> <th>已收金额 </th> <th>未收金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 36, $each(financialTicketList, function(rs) {
                $out += ' <tr data-id="', $line = 37, $out += $escape(rs.ticketId), $out += '"> <td>', 
                $line = 38, $out += $escape(rs.ticketName), $out += "</td> <td>", $line = 39, $out += $escape(rs.sumNeedPayMoney), 
                $out += "</td> <td>", $line = 40, $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", 
                $line = 41, $out += $escape(rs.sumPayedMoney), $out += "</td> <td><span ", $line = 42, 
                0 != rs.sumUnPayedMoney && ($out += 'style="color:#FF0000;"', $line = 42), $out += ">", 
                $line = 42, $out += $escape(rs.sumUnPayedMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 43, rs.checkedCount == rs.allCheckCount ? ($out += "00CC00", $line = 43) : ($out += "FF9900", 
                $line = 43), $out += ';">', $line = 43, $out += $escape(rs.checkedCount), $out += "/", 
                $line = 43, $out += $escape(rs.allCheckCount), $out += '</span></td> <td><span style="color:#', 
                $line = 44, rs.sumPayedMoney == rs.allPayCount ? ($out += "00CC00", $line = 44) : ($out += "FF9900", 
                $line = 44), $out += ';">', $line = 44, $out += $escape(rs.sumPayedMoney), $out += "/", 
                $line = 44, $out += $escape(rs.allPayCount), $out += '</span></td> <td> <a class="cursor T-action T-checking">对账</a> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-balance">收款</a> </td> </tr> ', 
                $line = 51;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 56, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>票务商家：</label>\r\n                <input type="text" class="form-control T-search-name" value="{{searchParam.ticketName || "全部"}}" style="width: 220px;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>票务商家</th>\r\n                <th>账面应付</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额 </th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>付款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each financialTicketList as rs}}\r\n            <tr data-id="{{rs.ticketId}}">\r\n                <td>{{rs.ticketName}}</td>\r\n                <td>{{rs.sumNeedPayMoney}}</td>\r\n                <td>{{rs.sumSettlementMoney}}</td>\r\n                <td>{{rs.sumPayedMoney}}</td>\r\n                <td><span {{if rs.sumUnPayedMoney != 0}}style="color:#FF0000;"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkedCount == rs.allCheckCount}}00CC00{{else}}FF9900{{/if}};">{{rs.checkedCount}}/{{rs.allCheckCount}}</span></td>\r\n                <td><span style="color:#{{if rs.sumPayedMoney == rs.allPayCount}}00CC00{{else}}FF9900{{/if}};">{{rs.sumPayedMoney}}/{{rs.allPayCount}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking">对账</a>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-balance">收款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});