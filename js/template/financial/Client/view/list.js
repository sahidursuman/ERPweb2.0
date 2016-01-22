/*TMODJS:{"debug":true,"version":39,"md5":"4b4d8fa5d1031f1b9b6a838664d83375"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, customerAccountList = $data.customerAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>总社：</label> <input type="text" class="form-control T-search-head-office" style="width: 110px;" value="', 
            $line = 5, $out += $escape(searchParam.headerAgencyName || "全部"), $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <label>客户：</label> <input type="text" class="form-control T-search-customer" style="width: 110px;" value="', 
            $line = 9, $out += $escape(searchParam.fromPartnerAgencyName || "全部"), $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 13, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 15, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>总社</th> <th>客户</th> <th>总人数</th> <th>合同金额</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 41, $each(customerAccountList, function(rs) {
                $out += " <tr data-id='", $line = 42, $out += $escape(rs.fromPartnerAgencyId), $out += "'> <td>", 
                $line = 43, $out += $escape(rs.headerAgencyName), $out += "</td> <td>", $line = 44, 
                $out += $escape(rs.fromPartnerAgencyName), $out += '</td> <td><span class="F-float F-count">', 
                $line = 45, $out += $escape(rs.sumAdultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 46, $out += $escape(rs.sumChildCount), $out += '</span>小 </td> <td><span class="F-float F-money">', 
                $line = 48, $out += $escape(rs.contractMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 49, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 50, $out += $escape(rs.receiveMoney), $out += "</span></td> <td>", $line = 51, 
                0 != rs.unReceivedMoney ? ($out += '<span class="F-float F-money" style="color:#FF0000;">', 
                $line = 51, $out += $escape(rs.unReceivedMoney), $out += "</span>", $line = 51) : ($line = 51, 
                $out += $escape(rs.unReceivedMoney), $line = 51), $out += "</td> <td>", $line = 52, 
                rs.checkStep == rs.allRecord ? ($out += '<span style="color:#00CC00;">', $line = 52, 
                $out += $escape(rs.checkStep), $out += "/", $line = 52, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 52) : ($out += '<span style="color:#FF9900;">', $line = 52, 
                $out += $escape(rs.checkStep), $out += "/", $line = 52, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 52), $out += "</td> <td>", $line = 53, rs.reciveStep == rs.allRecord ? ($out += '<span style="color:#00CC00;">', 
                $line = 53, $out += $escape(rs.reciveStep), $out += "/", $line = 53, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 53) : ($out += '<span style="color:#FF9900;">', $line = 53, 
                $out += $escape(rs.reciveStep), $out += "/", $line = 53, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 53), $out += '</td> <td> <a class="cursor T-action T-checking R-right" data-right="1280002|1280005">对账</a> <label class="cursor R-right" data-right="1280002|1280005"> <a class="R-right" data-right="1280003"> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1280003">收款</a> </td> </tr> ', 
                $line = 60;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 65, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>总社：</label>\r\n            <input type="text" class="form-control T-search-head-office" style="width: 110px;" value="{{searchParam.headerAgencyName || \'全部\'}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>客户：</label>\r\n            <input type="text" class="form-control T-search-customer" style="width: 110px;" value="{{searchParam.fromPartnerAgencyName || \'全部\'}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>总社</th>\r\n                <th>客户</th>\r\n                <th>总人数</th>\r\n                <th>合同金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each customerAccountList as rs}}\r\n            <tr data-id=\'{{rs.fromPartnerAgencyId}}\'>\r\n                <td>{{rs.headerAgencyName}}</td>\r\n                <td>{{rs.fromPartnerAgencyName}}</td>\r\n                <td><span class="F-float F-count">{{rs.sumAdultCount}}</span>大\r\n                    <span class="F-float F-count">{{rs.sumChildCount}}</span>小\r\n                </td>\r\n                <td><span class="F-float F-money">{{rs.contractMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.receiveMoney}}</span></td>\r\n                <td>{{if rs.unReceivedMoney != 0}}<span class="F-float F-money" style="color:#FF0000;">{{rs.unReceivedMoney}}</span>{{else}}{{rs.unReceivedMoney}}{{/if}}</td>\r\n                <td>{{if rs.checkStep == rs.allRecord}}<span style="color:#00CC00;">{{rs.checkStep}}/{{rs.allRecord}}</span>{{else}}<span style="color:#FF9900;">{{rs.checkStep}}/{{rs.allRecord}}</span>{{/if}}</td>\r\n                <td>{{if rs.reciveStep == rs.allRecord}}<span style="color:#00CC00;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{else}}<span style="color:#FF9900;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{/if}}</td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1280002|1280005">对账</a>\r\n                    <label class="cursor R-right" data-right="1280002|1280005"> <a class="R-right" data-right="1280003"> |</a></label>\r\n                    <a class="cursor T-action T-balance R-right" data-right="1280003">收款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});