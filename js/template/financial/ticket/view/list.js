/*TMODJS:{"debug":true,"version":40,"md5":"6f074346f6456716b2e2dcb2afa7a2dc"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialTicketList = $data.financialTicketList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>票务商家 </label> <input type="text" class="form-control T-search-name" value="', 
            $line = 6, $out += $escape(searchParam.ticketName), $out += '" style="width: 220px;" placeholder="所有票务商家"> </div> <div class="form-group mar-r-10"> <label>账期 </label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group T-finance-status btn-group mar-r-10"> <button data-value="', 
            $line = 16, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 18, 0 == searchParam.accountStatus ? ($out += " 全部 ", $line = 20) : 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 22) : ($out += " 未结清 ", $line = 24), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="0" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已结清</a></li> <li><a data-value="2" href="javascript:void(0)">未结清</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline T-sum-area"> <div class="form-group mar-r-10"> <label class="control-label">账面应付合计：</label> <label class="control-label F-float F-money T-sumNeedPay"></label> </div> <div class="form-group mar-r-10"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group mar-r-10"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>票务商家</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额 </th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 73, $each(financialTicketList, function(rs) {
                $out += ' <tr data-id="', $line = 74, $out += $escape(rs.ticketId), $out += '" data-name="', 
                $line = 74, $out += $escape(rs.ticketName), $out += '"> <td>', $line = 75, $out += $escape(rs.ticketName), 
                $out += '</td> <td class="F-float F-money">', $line = 76, $out += $escape(rs.sumNeedPayMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 77, $out += $escape(rs.sumSettlementMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 78, $out += $escape(rs.sumPayedMoney), 
                $out += '</td> <td class="F-float F-money"><span ', $line = 79, 0 != rs.sumUnPayedMoney && ($out += 'style="color:#FF0000;" ', 
                $line = 79), $out += ">", $line = 79, $out += $escape(rs.sumUnPayedMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 80, rs.checkedCount == rs.allCheckCount ? ($out += "00CC00", $line = 80) : ($out += "FF9900", 
                $line = 80), $out += ';">', $line = 80, $out += $escape(rs.checkedCount), $out += "/", 
                $line = 80, $out += $escape(rs.allCheckCount), $out += '</span></td> <td><span style="color:#', 
                $line = 81, rs.payedCount == rs.allPayCount ? ($out += "00CC00", $line = 81) : ($out += "FF9900", 
                $line = 81), $out += ';">', $line = 81, $out += $escape(rs.payedCount), $out += "/", 
                $line = 81, $out += $escape(rs.allPayCount), $out += '</span></td> <td> <a class="cursor T-action T-checking R-right" data-right="1210002">对账</a> <label class="cursor R-right" data-right="1210002|1210003"> <a> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1210003">付款</a> </td> </tr> ', 
                $line = 88;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 93, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-10">\r\n                <label>票务商家 </label>\r\n                <input type="text" class="form-control T-search-name" value="{{searchParam.ticketName}}" style="width: 220px;"\r\n                placeholder="所有票务商家">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>账期 </label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group T-finance-status btn-group mar-r-10">\r\n                <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                    {{if searchParam.accountStatus == 0}}\r\n                        全部\r\n                    {{else if searchParam.accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li><a data-value="0" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">已结清</a></li>\r\n                    <li><a data-value="2" href="javascript:void(0)">未结清</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group  mar-r-10">\r\n            <label class="control-label">账面应付合计：</label>\r\n            <label class="control-label F-float F-money T-sumNeedPay"></label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">已付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label">未付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>票务商家</th>\r\n                <th>账面应付</th>\r\n                <th>结算金额</th>\r\n                <th>已付金额 </th>\r\n                <th>未付金额</th>\r\n                <th>对账进度</th>\r\n                <th>付款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each financialTicketList as rs}}\r\n            <tr data-id="{{rs.ticketId}}" data-name="{{rs.ticketName}}">\r\n                <td>{{rs.ticketName}}</td>\r\n                <td class="F-float F-money">{{rs.sumNeedPayMoney}}</td>\r\n                <td class="F-float F-money">{{rs.sumSettlementMoney}}</td>\r\n                <td class="F-float F-money">{{rs.sumPayedMoney}}</td>\r\n                <td class="F-float F-money"><span {{if rs.sumUnPayedMoney !=0 }}style="color:#FF0000;" {{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkedCount == rs.allCheckCount}}00CC00{{else}}FF9900{{/if}};">{{rs.checkedCount}}/{{rs.allCheckCount}}</span></td>\r\n                <td><span style="color:#{{if rs.payedCount == rs.allPayCount}}00CC00{{else}}FF9900{{/if}};">{{rs.payedCount}}/{{rs.allPayCount}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1210002">对账</a>\r\n                    <label class="cursor R-right" data-right="1210002|1210003"> <a> |</a></label>\r\n                    <a class="cursor T-action T-balance R-right" data-right="1210003">付款</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});