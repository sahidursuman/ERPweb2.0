/*TMODJS:{"debug":true,"version":21,"md5":"7303a5bef8fa22dda19f1105e24fac68"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, customerAccountList = $data.customerAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>总社：</label> <input type="text" class="form-control T-search-head-office" style="width: 220px;" value="', 
            $line = 5, $out += $escape(searchParam.headerAgencyName || "全部"), $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <label>客户：</label> <input type="text" class="form-control T-search-customer" style="width: 220px;" value="', 
            $line = 9, $out += $escape(searchParam.fromPartnerAgencyName || "全部"), $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 13, $out += $escape(searchParam.startTime), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 15, $out += $escape(searchParam.endTime), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>总社</th> <th>客户</th> <th>总人数</th> <th>合同金额</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 41, $each(customerAccountList, function(rs) {
                $out += " <tr data-id='", $line = 42, $out += $escape(rs.partnerAgencyId), $out += "'> <td>", 
                $line = 43, $out += $escape(rs.headerAgencyName), $out += "</td> <td>", $line = 44, 
                $out += $escape(rs.fromPartnerAgencyName), $out += "</td> <td>", $line = 45, $out += $escape(rs.sumAdultCount), 
                $out += "大", $line = 45, $out += $escape(rs.sumChildCount), $out += "小</td> <td>", 
                $line = 46, $out += $escape(rs.contractMoney), $out += "</td> <td>", $line = 47, 
                $out += $escape(rs.settlementMoney), $out += "</td> <td>", $line = 48, $out += $escape(rs.receiveMoney), 
                $out += "</td> <td>", $line = 49, 0 != rs.unReceivedMoney ? ($out += '<span style="color:#FF0000;">', 
                $line = 49, $out += $escape(rs.unReceivedMoney), $out += "</span>", $line = 49) : ($line = 49, 
                $out += $escape(rs.unReceivedMoney), $line = 49), $out += "</td> <td>", $line = 50, 
                rs.checkStep == rs.allRecord ? ($out += '<span style="color:#00CC00;">', $line = 50, 
                $out += $escape(rs.checkStep), $out += "/", $line = 50, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 50) : ($out += '<span style="color:#FF9900;">', $line = 50, 
                $out += $escape(rs.checkStep), $out += "/", $line = 50, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 50), $out += "</td> <td>", $line = 51, rs.reciveStep == rs.allRecord ? ($out += '<span style="color:#00CC00;">', 
                $line = 51, $out += $escape(rs.reciveStep), $out += "/", $line = 51, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 51) : ($out += '<span style="color:#FF9900;">', $line = 51, 
                $out += $escape(rs.reciveStep), $out += "/", $line = 51, $out += $escape(rs.allRecord), 
                $out += "</span>", $line = 51), $out += '</td> <td> <a class="cursor T-action T-checking R-right" data-right="1290002">对账</a> <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1290003">收款</a> </td> </tr> ', 
                $line = 58;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 63, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>总社：</label>\r\n            <input type="text" class="form-control T-search-head-office" style="width: 220px;" value="{{searchParam.headerAgencyName || \'全部\'}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>客户：</label>\r\n            <input type="text" class="form-control T-search-customer" style="width: 220px;" value="{{searchParam.fromPartnerAgencyName || \'全部\'}}" maxlength="100">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startTime}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endTime}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>总社</th>\r\n                <th>客户</th>\r\n                <th>总人数</th>\r\n                <th>合同金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each customerAccountList as rs}}\r\n            <tr data-id=\'{{rs.partnerAgencyId}}\'>\r\n                <td>{{rs.headerAgencyName}}</td>\r\n                <td>{{rs.fromPartnerAgencyName}}</td>\r\n                <td>{{rs.sumAdultCount}}大{{rs.sumChildCount}}小</td>\r\n                <td>{{rs.contractMoney}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.receiveMoney}}</td>\r\n                <td>{{if rs.unReceivedMoney != 0}}<span style="color:#FF0000;">{{rs.unReceivedMoney}}</span>{{else}}{{rs.unReceivedMoney}}{{/if}}</td>\r\n                <td>{{if rs.checkStep == rs.allRecord}}<span style="color:#00CC00;">{{rs.checkStep}}/{{rs.allRecord}}</span>{{else}}<span style="color:#FF9900;">{{rs.checkStep}}/{{rs.allRecord}}</span>{{/if}}</td>\r\n                <td>{{if rs.reciveStep == rs.allRecord}}<span style="color:#00CC00;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{else}}<span style="color:#FF9900;">{{rs.reciveStep}}/{{rs.allRecord}}</span>{{/if}}</td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1290002">对账</a>\r\n                    <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label>\r\n                    <a class="cursor T-action T-balance R-right" data-right="1290003">收款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});