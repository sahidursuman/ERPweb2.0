/*TMODJS:{"debug":true,"version":37,"md5":"3d561235cef653c788c834ed83c7aa51"}*/
define(function(require) {
    return require("../../../template")("financial/offsetByDetail/view/blanceDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, resourceId = $data.resourceId, resourceType = $data.resourceType, payStatus = $data.payStatus, $each = $utils.$each, result = $data.result, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group input-daterange mar-r-10"> <label>记账日期</label> <input type="text" class="form-control datepicker w100" name="startDate" value="', 
            $line = 5, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker w100" name="endDate" value="', 
            $line = 7, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label>凭证编号</label> <input type="text" class="form-control w100" name="voucher" value="', 
            $line = 11, $out += $escape(searchParam.voucher), $out += '"> </div> <div class="form-group"> <button class="btn-sm search-btn T-blance-search" data-payStatus="4"><i class="ace-icon fa fa-search"></i> 搜索</button> </div> <input type="hidden" class="form-control w100" name="resourceId" value="', 
            $line = 16, $out += $escape(resourceId), $out += '"> <input type="hidden" class="form-control w100" name="resourceType" value="', 
            $line = 17, $out += $escape(resourceType), $out += '"> <input type="hidden" class="form-control w100" name="payStatus" value="', 
            $line = 18, $out += $escape(payStatus), $out += '"> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>记账日期</th> <th>业务类别</th> <th>对方单位</th> <th>主营业务收付类别</th> <th>会计科目</th> <th>凭证编号</th> <th>支付方式</th> <th>金额</th> <th>银行账号</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 41, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 42, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 43, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 44, 0 == rs.moneyType ? ($out += "收入", 
                $line = 44) : 1 == rs.moneyType ? ($out += "支出", $line = 44) : 2 == rs.moneyType && ($out += "转账", 
                $line = 44), $out += "</td> <td>", $line = 45, null == rs.resourceName || "" == rs.resourceName ? ($out += "-", 
                $line = 45) : ($line = 45, $out += $escape(rs.resourceName), $line = 45), $out += "</td> <td>", 
                $line = 46, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 46) : ($line = 46, $out += $escape(rs.receivableType.name), $line = 46), 
                $out += "</td> <td>", $line = 47, null == rs.subjectName || "" == rs.subjectName ? ($out += "-", 
                $line = 47) : ($line = 47, $out += $escape(rs.subjectName), $line = 47), $out += "</td> <td>", 
                $line = 48, null == rs.voucher || "" == rs.voucher ? ($out += "-", $line = 48) : ($line = 48, 
                $out += $escape(rs.voucher), $line = 48), $out += "</td> <td>", $line = 49, 0 == rs.payType ? ($out += "现金", 
                $line = 49) : 1 == rs.payType ? ($out += "银行转账", $line = 49) : 2 == rs.payType ? ($out += "网上支付", 
                $line = 49) : 3 == rs.payType ? ($out += "支票", $line = 49) : 4 == rs.payType ? ($out += "其它", 
                $line = 49) : 5 == rs.payType ? ($out += "网付", $line = 49) : 6 == rs.payType && ($out += "冲抵", 
                $line = 49), $out += "</td> <td> ", $line = 51, 0 == rs.incomeMoney ? ($line = 51, 
                $out += $escape(rs.payMoney), $line = 51) : ($line = 51, $out += $escape(rs.incomeMoney), 
                $line = 51), $out += " </td> <td> ", $line = 54, null != rs.bankAccount ? ($out += " ", 
                $line = 55, null == rs.bankAccount.bankAccountNumber || "" == rs.bankAccount.bankAccountNumber ? ($out += " - ", 
                $line = 57) : ($out += " ", $line = 58, $out += $escape(rs.bankAccount.bankAccountNumber), 
                $out += " ", $line = 59), $out += " ", $line = 60) : ($out += " - ", $line = 62), 
                $out += " </td> <td>", $line = 64, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 65, rs.user && ($line = 65, $out += $escape(rs.user.realName), $line = 65), 
                $out += "</td> <td>", $line = 66, $out += $escape(rs.createTime), $out += "</td> </tr> ", 
                $line = 68;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 73, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group input-daterange mar-r-10">\r\n            <label>记账日期</label>\r\n            <input type="text" class="form-control datepicker w100" name="startDate" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker w100" name="endDate" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>凭证编号</label>\r\n            <input type="text" class="form-control w100" name="voucher" value="{{searchParam.voucher}}">\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-blance-search" data-payStatus="4"><i class="ace-icon fa fa-search"></i> 搜索</button>\r\n        </div>\r\n        <input type="hidden" class="form-control w100" name="resourceId" value="{{resourceId}}">\r\n        <input type="hidden" class="form-control w100" name="resourceType" value="{{resourceType}}">\r\n        <input  type="hidden"  class="form-control w100" name="payStatus" value="{{payStatus}}">\r\n    </form>\r\n</div>\r\n\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>记账日期</th>\r\n                <th>业务类别</th>\r\n                <th>对方单位</th>\r\n                <th>主营业务收付类别</th>\r\n                <th>会计科目</th>\r\n                <th>凭证编号</th>\r\n                <th>支付方式</th>\r\n                <th>金额</th>\r\n                <th>银行账号</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each result as rs}}\r\n                <tr data-id="{{rs.id}}">\r\n                    <td>{{rs.accountTime}}</td>\r\n                    <td>{{if rs.moneyType == 0}}收入{{else if rs.moneyType == 1}}支出{{else if rs.moneyType == 2}}转账{{/if}}</td>\r\n                    <td>{{if rs.resourceName == null || rs.resourceName == ""}}-{{else}}{{rs.resourceName}}{{/if}}</td>\r\n                    <td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType.name}}{{/if}}</td>\r\n                    <td>{{if rs.subjectName == null || rs.subjectName == ""}}-{{else}}{{rs.subjectName}}{{/if}}</td>\r\n                    <td>{{if rs.voucher == null || rs.voucher == ""}}-{{else}}{{rs.voucher}}{{/if}}</td>\r\n                    <td>{{if rs.payType == 0}}现金{{else if rs.payType == 1}}银行转账{{else if rs.payType == 2}}网上支付{{else if rs.payType == 3}}支票{{else if rs.payType == 4}}其它{{else if rs.payType == 5}}网付{{else if rs.payType == 6}}冲抵{{/if}}</td>\r\n                    <td>\r\n                        {{if rs.incomeMoney==0}}{{rs.payMoney}}{{else}}{{rs.incomeMoney}}{{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if rs.bankAccount != null}}\r\n                            {{if rs.bankAccount.bankAccountNumber == null || rs.bankAccount.bankAccountNumber == ""}}\r\n                                    -\r\n                                {{else}}\r\n                                    {{rs.bankAccount.bankAccountNumber}}\r\n                            {{/if}}\r\n                        {{else}}\r\n                            -\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>{{rs.remark}}</td>\r\n                    <td>{{if !!rs.user}}{{rs.user.realName}}{{/if}}</td>\r\n                    <td>{{rs.createTime}}</td>\r\n                </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});