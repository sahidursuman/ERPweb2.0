/*TMODJS:{"debug":true,"version":9,"md5":"35f123c5e58f76553d3dd5ee703ad4bb"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, bookingAccountList = $data.bookingAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>客户：</label> <input type="text" class="form-control T-search-customer" value="', 
            $line = 5, $out += $escape(searchParam.travelAgencyName || "全部"), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>客户</th> <th>代订金额</th> <th>结算金额</th> <th>已收金额 </th> <th>未收金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 35, $each(bookingAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 36, $out += $escape(rs.partnerAgencyId), $out += '" data-name="', 
                $line = 36, $out += $escape(rs.fromPartnerAgencyName), $out += '"> <td>', $line = 37, 
                $out += $escape(rs.fromPartnerAgencyName), $out += "</td> <td>", $line = 38, $out += $escape(rs.bookingMoney), 
                $out += "</td> <td>", $line = 39, $out += $escape(rs.settlementMoney), $out += "</td> <td>", 
                $line = 40, $out += $escape(rs.receiveMoney), $out += "</td> <td><span ", $line = 41, 
                0 != rs.unReceiveMoney && ($out += 'style="color:#FF0000;"', $line = 41), $out += ">", 
                $line = 41, $out += $escape(rs.unReceiveMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 42, rs.checkStep == rs.allRecord ? ($out += "00CC00", $line = 42) : ($out += "FF9900", 
                $line = 42), $out += ';">', $line = 42, $out += $escape(rs.checkStep), $out += "/", 
                $line = 42, $out += $escape(rs.allRecord), $out += '</span></td> <td><span style="color:#', 
                $line = 43, rs.reciveStep == rs.allRecord ? ($out += "00CC00", $line = 43) : ($out += "FF9900", 
                $line = 43), $out += ';">', $line = 43, $out += $escape(rs.reciveStep), $out += "/", 
                $line = 43, $out += $escape(rs.allRecord), $out += '</span></td> <td> <a class="cursor T-action T-checking">对账</a> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-balance">收款</a> </td> </tr> ', 
                $line = 50;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 55, $out += $escape(searchParam.recordSize || 0), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>客户：</label>\r\n            <input type="text" class="form-control T-search-customer" value="{{searchParam.travelAgencyName || "全部"}}" style="width: 220px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startTime}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endTime}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>客户</th>\r\n                <th>代订金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额 </th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>付款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each bookingAccountList as rs}}\r\n            <tr data-id="{{rs.partnerAgencyId}}" data-name="{{rs.fromPartnerAgencyName}}">\r\n                <td>{{rs.fromPartnerAgencyName}}</td>\r\n                <td>{{rs.bookingMoney}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.receiveMoney}}</td>\r\n                <td><span {{if rs.unReceiveMoney != 0}}style="color:#FF0000;"{{/if}}>{{rs.unReceiveMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.checkStep}}/{{rs.allRecord}}</span></td>\r\n                <td><span style="color:#{{if rs.reciveStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.reciveStep}}/{{rs.allRecord}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking">对账</a>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-balance">收款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize || 0}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});