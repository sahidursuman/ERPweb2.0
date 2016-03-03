/*TMODJS:{"debug":true,"version":37,"md5":"0cbf3f86f1d1ea449e1d5b0b39b1df19"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, guideName = $data.guideName, startDate = $data.startDate, endDate = $data.endDate, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>导游：</label> <input type="text" class="form-control T-search-name" style="width: 220px;" value="', 
            $line = 5, $out += $escape(guideName), $out += '" maxlength="100"> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="', 
            $line = 9, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="', 
            $line = 11, $out += $escape(endDate), $out += '"> </div> <div class="form-group btn-status btn-group marginLeft-30"> <button data-value="" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 已结清 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-guide-state"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">已结清</a></li> <li><a data-value="0" href="javascript:void(0)">未结清</a></li> </ul> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline T-sum-area" style="margin-left:-10px;"> <div class="form-group"> <label class="control-label">账面退补合计：</label> <label class="control-label F-float F-money T-carryingOutSum"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>导游</th> <th>账面退补</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 66, $each(list, function(rs) {
                $out += " <tr data-id='", $line = 67, $out += $escape(rs.guideId), $out += "'> <td>", 
                $line = 68, $out += $escape(rs.realname), $out += '</td> <td><span class="F-float F-money">', 
                $line = 69, $out += $escape(rs.sumZhangmiantuibu), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 70, $out += $escape(rs.sumSettlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 71, $out += $escape(rs.sumPayedMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 72, 0 != rs.sumUnPayedMoney ? ($out += '<span style="color:#FF0000;">', 
                $line = 72, $out += $escape(rs.sumUnPayedMoney), $out += "</span>", $line = 72) : ($line = 72, 
                $out += $escape(rs.sumUnPayedMoney), $line = 72), $out += "</span> </td> <td>", 
                $line = 74, rs.checkFCount == rs.sumFCount ? ($out += '<span style="color:#00CC00;">', 
                $line = 74, $out += $escape(rs.checkFCount), $out += "/", $line = 74, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 74) : ($out += '<span style="color:#FF9900;">', $line = 74, 
                $out += $escape(rs.checkFCount), $out += "/", $line = 74, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 74), $out += "</td> <td>", $line = 75, rs.payFCount == rs.sumFCount ? ($out += '<span style="color:#00CC00;">', 
                $line = 75, $out += $escape(rs.payFCount), $out += "/", $line = 75, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 75) : ($out += '<span style="color:#FF9900;">', $line = 75, 
                $out += $escape(rs.payFCount), $out += "/", $line = 75, $out += $escape(rs.sumFCount), 
                $out += "</span>", $line = 75), $out += '</td> <td> <a class="cursor T-action T-check R-right" data-right="1200002|1200005">对账</a> <label class="cursor R-right" data-right="1200002|1200005"> <a class="R-right" data-right="1200003"> |</a></label> <a class="cursor T-action T-pay R-right" data-right="1200003">付款</a> </td> </tr> ', 
                $line = 82;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 87, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>导游：</label>\r\n            <input type="text" class="form-control T-search-name" style="width: 220px;" value="{{guideName}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group input-daterange marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="{{startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="{{endDate}}">\r\n        </div>\r\n        <div class="form-group btn-status btn-group marginLeft-30">\r\n            <button data-value="" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                        已结清        \r\n                    </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu T-guide-state">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="-1" href="javascript:void(0)">已结清</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未结清</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="form-inline T-sum-area" style="margin-left:-10px;">\r\n    <div class="form-group">\r\n        <label class="control-label">账面退补合计：</label>\r\n        <label class="control-label F-float F-money T-carryingOutSum"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">结算金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumStMoney"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">已付金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">未付金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>导游</th>\r\n                <th>账面退补</th>\r\n                <th>结算金额</th>\r\n                <th>已付金额</th>\r\n                <th>未付金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each list as rs}}\r\n            <tr data-id=\'{{rs.guideId}}\'>\r\n                <td>{{rs.realname}}</td>\r\n                <td><span class="F-float F-money">{{rs.sumZhangmiantuibu}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.sumSettlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.sumPayedMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{if rs.sumUnPayedMoney != 0}}<span style="color:#FF0000;">{{rs.sumUnPayedMoney}}</span>{{else}}{{rs.sumUnPayedMoney}}{{/if}}</span>\r\n                </td>\r\n                <td>{{if rs.checkFCount == rs.sumFCount}}<span style="color:#00CC00;">{{rs.checkFCount}}/{{rs.sumFCount}}</span>{{else}}<span style="color:#FF9900;">{{rs.checkFCount}}/{{rs.sumFCount}}</span>{{/if}}</td>\r\n                <td>{{if rs.payFCount == rs.sumFCount}}<span style="color:#00CC00;">{{rs.payFCount}}/{{rs.sumFCount}}</span>{{else}}<span style="color:#FF9900;">{{rs.payFCount}}/{{rs.sumFCount}}</span>{{/if}}</td>\r\n                <td>\r\n                    <a class="cursor T-action T-check R-right" data-right="1200002|1200005">对账</a>\r\n                    <label class="cursor R-right" data-right="1200002|1200005"> <a class="R-right" data-right="1200003"> |</a></label>\r\n                    <a class="cursor T-action T-pay R-right" data-right="1200003">付款</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});