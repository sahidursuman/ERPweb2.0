/*TMODJS:{"debug":true,"version":20,"md5":"80cb20ec13d15e49511a6b54b28f333f"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialTicketList = $data.financialTicketList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>票务商家：</label> <input type="text" class="form-control T-search-name" value="', 
            $line = 6, $out += $escape(searchParam.ticketName || "全部"), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">账面应付合计：</label> <label class="control-label F-float F-money T-sumNeedPay"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>票务商家</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额 </th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 53, $each(financialTicketList, function(rs) {
                $out += ' <tr data-id="', $line = 54, $out += $escape(rs.ticketId), $out += '" data-name="', 
                $line = 54, $out += $escape(rs.ticketName), $out += '"> <td>', $line = 55, $out += $escape(rs.ticketName), 
                $out += '</td> <td class="F-float F-money">', $line = 56, $out += $escape(rs.sumNeedPayMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 57, $out += $escape(rs.sumSettlementMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 58, $out += $escape(rs.sumPayedMoney), 
                $out += '</td> <td class="F-float F-money"><span ', $line = 59, 0 != rs.sumUnPayedMoney && ($out += 'style="color:#FF0000;"', 
                $line = 59), $out += ">", $line = 59, $out += $escape(rs.sumUnPayedMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 60, rs.checkedCount == rs.allCheckCount ? ($out += "00CC00", $line = 60) : ($out += "FF9900", 
                $line = 60), $out += ';">', $line = 60, $out += $escape(rs.checkedCount), $out += "/", 
                $line = 60, $out += $escape(rs.allCheckCount), $out += '</span></td> <td><span style="color:#', 
                $line = 61, rs.payedCount == rs.allPayCount ? ($out += "00CC00", $line = 61) : ($out += "FF9900", 
                $line = 61), $out += ';">', $line = 61, $out += $escape(rs.payedCount), $out += "/", 
                $line = 61, $out += $escape(rs.allPayCount), $out += '</span></td> <td> <a class="cursor T-action T-checking R-right" data-right="1210002">对账</a> <label class="cursor R-right" data-right="1210002|1210003"> <a> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1210003">付款</a> </td> </tr> ', 
                $line = 68;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 73, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>票务商家：</label>\r\n                <input type="text" class="form-control T-search-name" value="{{searchParam.ticketName || "全部"}}" style="width: 220px;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">账面应付合计：</label>\r\n            <label class="control-label F-float F-money T-sumNeedPay"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>票务商家</th>\r\n                <th>账面应付</th>\r\n                <th>结算金额</th>\r\n                <th>已付金额 </th>\r\n                <th>未付金额</th>\r\n                <th>对账进度</th>\r\n                <th>付款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each financialTicketList as rs}}\r\n            <tr data-id="{{rs.ticketId}}" data-name="{{rs.ticketName}}">\r\n                <td>{{rs.ticketName}}</td>\r\n                <td class="F-float F-money">{{rs.sumNeedPayMoney}}</td>\r\n                <td class="F-float F-money">{{rs.sumSettlementMoney}}</td>\r\n                <td class="F-float F-money">{{rs.sumPayedMoney}}</td>\r\n                <td class="F-float F-money"><span {{if rs.sumUnPayedMoney != 0}}style="color:#FF0000;"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkedCount == rs.allCheckCount}}00CC00{{else}}FF9900{{/if}};">{{rs.checkedCount}}/{{rs.allCheckCount}}</span></td>\r\n                <td><span style="color:#{{if rs.payedCount == rs.allPayCount}}00CC00{{else}}FF9900{{/if}};">{{rs.payedCount}}/{{rs.allPayCount}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1210002">对账</a>\r\n                    <label class="cursor R-right" data-right="1210002|1210003"> <a> |</a></label>\r\n                    <a class="cursor T-action T-balance R-right" data-right="1210003">付款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});