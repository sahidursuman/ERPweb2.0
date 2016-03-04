/*TMODJS:{"debug":true,"version":44,"md5":"f3a9a11f29de230c9d86e9c1c9028f7a"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, bookingAccountList = $data.bookingAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>客户：</label> <input type="text" class="form-control T-search-customer" value="', 
            $line = 5, $out += $escape(searchParam.travelAgencyName || " 全部 "), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group T-finance-status btn-group marginLeft-30"> <button data-value="', 
            $line = 14, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 16, 0 == searchParam.accountStatus ? ($out += " 全部 ", $line = 18) : 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 20) : ($out += " 未结清 ", $line = 22), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="0" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已结清</a></li> <li><a data-value="2" href="javascript:void(0)">未结清</a></li> </ul> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline T-sum-area" style="margin-left:-10px"> <div class="form-group"> <label class="control-label">代订金额合计：</label> <label class="control-label F-float F-money T-sumMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money T-sumUnReceivedMoney"></label> </div> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>客户</th> <th>代订金额</th> <th>结算金额</th> <th>已收金额 </th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 72, $each(bookingAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 73, $out += $escape(rs.partnerAgencyId), $out += '" data-name="', 
                $line = 73, $out += $escape(rs.fromPartnerAgencyName), $out += '" data-accountStatus = "', 
                $line = 73, $out += $escape(searchParam.accountStatus), $out += '"> <td>', $line = 74, 
                $out += $escape(rs.fromPartnerAgencyName), $out += '</td> <td><span class="F-float F-money">', 
                $line = 75, $out += $escape(rs.bookingMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 76, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 77, $out += $escape(rs.receiveMoney), $out += '</span></td> <td><span class="F-float F-money" ', 
                $line = 78, 0 != rs.unReceivedMoney && ($out += 'style="color:#FF0000;" ', $line = 78), 
                $out += ">", $line = 78, $out += $escape(rs.unReceivedMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 79, rs.checkStep == rs.allRecord ? ($out += "00CC00", $line = 79) : ($out += "FF9900", 
                $line = 79), $out += ';">', $line = 79, $out += $escape(rs.checkStep), $out += "/", 
                $line = 79, $out += $escape(rs.allRecord), $out += '</span></td> <td><span style="color:#', 
                $line = 80, rs.reciveStep == rs.allRecord ? ($out += "00CC00", $line = 80) : ($out += "FF9900", 
                $line = 80), $out += ';">', $line = 80, $out += $escape(rs.reciveStep), $out += "/", 
                $line = 80, $out += $escape(rs.allRecord), $out += '</span></td> <td> <a class="cursor T-action T-checking R-right" data-right="1290002">对账</a> <label class="cursor R-right" data-right="1290002|1290003"> <a> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1290003">收款</a> </td> </tr> ', 
                $line = 87;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 92, $out += $escape(searchParam.recordSize || 0), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>客户：</label>\r\n            <input type="text" class="form-control T-search-customer" value="{{searchParam.travelAgencyName || " 全部 "}}" style="width: 220px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group T-finance-status btn-group marginLeft-30">\r\n            <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if searchParam.accountStatus == 0}}\r\n                        全部\r\n                    {{else if searchParam.accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="0" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已结清</a></li>\r\n                <li><a data-value="2" href="javascript:void(0)">未结清</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="form-inline T-sum-area" style="margin-left:-10px">\r\n    <div class="form-group">\r\n        <label class="control-label">代订金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumMoney"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">结算金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumStMoney"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">已收金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumReceiveMoney"></label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="control-label">未收金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumUnReceivedMoney"></label>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>客户</th>\r\n                <th>代订金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额 </th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each bookingAccountList as rs}}\r\n            <tr data-id="{{rs.partnerAgencyId}}" data-name="{{rs.fromPartnerAgencyName}}" data-accountStatus = "{{searchParam.accountStatus}}">\r\n                <td>{{rs.fromPartnerAgencyName}}</td>\r\n                <td><span class="F-float F-money">{{rs.bookingMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.receiveMoney}}</span></td>\r\n                <td><span class="F-float F-money" {{if rs.unReceivedMoney !=0 }}style="color:#FF0000;" {{/if}}>{{rs.unReceivedMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.checkStep}}/{{rs.allRecord}}</span></td>\r\n                <td><span style="color:#{{if rs.reciveStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.reciveStep}}/{{rs.allRecord}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1290002">对账</a>\r\n                    <label class="cursor R-right" data-right="1290002|1290003"> <a> |</a></label>\r\n                    <a class="cursor T-action T-balance R-right" data-right="1290003">收款</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize || 0}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});