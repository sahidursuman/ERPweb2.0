/*TMODJS:{"debug":true,"version":193,"md5":"44bbcfb5743759d66db1534860f9e65f"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, financialTransferList = $data.financialTransferList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row"> <div class="form-horizontal search-area"> <div class="form-group T-search-area"> <label style="margin-left: 15px">同行地接：</label> <input type="text" class="T-choosePartnerAgency" name="partnerAgencyName" value="', 
            $line = 5, "" == searchParam.partnerAgencyName ? ($out += "全部", $line = 5) : ($line = 5, 
            $out += $escape(searchParam.partnerAgencyName), $line = 5), $out += '" /> <input type="hidden" name="partnerAgencyId" value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyId), $out += '" /> <label class="control-label marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <button class="btn-sm T-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row transferList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>同行地接</th> <th>总人数</th> <th>外转金额</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 35, $each(financialTransferList, function(rs) {
                $out += ' <tr data-id="', $line = 36, $out += $escape(rs.partnerAgencyId), $out += '" data-name="', 
                $line = 36, $out += $escape(rs.partnerAgencyName), $out += '"> <td>', $line = 37, 
                $out += $escape(rs.partnerAgencyName), $out += "</td> <td>", $line = 38, $out += $escape(rs.adultCount), 
                $out += " 大 ", $line = 38, $out += $escape(rs.childCount), $out += " 小</td> <td>", 
                $line = 39, $out += $escape(rs.sumNeedPayMoney), $out += "</td> <td>", $line = 40, 
                $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", $line = 41, $out += $escape(rs.sumPayedMoney), 
                $out += "</td> <td><span ", $line = 42, 0 != rs.sumUnPayedMoney && ($out += 'style="color:red"', 
                $line = 42), $out += ">", $line = 42, $out += $escape(rs.sumUnPayedMoney), $out += "</span></td> <td>", 
                $line = 43, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 44, $out += $escape(rs.checkedCount), $line = 44, $out += $escape("/"), 
                $line = 44, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 45), 
                $out += " ", $line = 46, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 47, $out += $escape(rs.checkedCount), $line = 47, $out += $escape("/"), 
                $line = 47, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 48), 
                $out += " </td> <td>", $line = 50, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 51, $out += $escape(rs.payedCount), $line = 51, $out += $escape("/"), $line = 51, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 52), $out += " ", $line = 53, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 54, 
                $out += $escape(rs.payedCount), $line = 54, $out += $escape("/"), $line = 54, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 55), $out += ' </td> <td><a class="cursor T-option T-check R-right" data-right="1300002|1300005">对账</a> <label class="cursor R-right" data-right="1300002"><a class="R-right" data-right="1300003"> |</a></label> <a class="cursor R-right T-option T-clear" data-right="1300003">付款</a> </td> </tr> ', 
                $line = 62;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 67, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group T-search-area">      \r\n            <label style="margin-left: 15px">同行地接：</label>\r\n			<input type="text" class="T-choosePartnerAgency" name="partnerAgencyName" value="{{if searchParam.partnerAgencyName == ""}}全部{{else}}{{searchParam.partnerAgencyName}}{{/if}}" />\r\n            <input type="hidden" name="partnerAgencyId" value="{{searchParam.partnerAgencyId}}" />  \r\n\r\n            <label class="control-label marginLeft-30">账期：</label>\r\n            <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />\r\n\r\n            <button class="btn-sm T-search search-btn marginLeft-30">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row transferList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                    <tr class="bg-blur">\r\n                        <th>同行地接</th>\r\n                        <th>总人数</th>\r\n                        <th>外转金额</th>\r\n                        <th>结算金额</th>\r\n                        <th>已付金额</th>\r\n                        <th>未付金额</th>\r\n                        <th>对账进度</th>\r\n                        <th>付款进度</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each financialTransferList as rs}}\r\n                    <tr data-id="{{rs.partnerAgencyId}}" data-name="{{rs.partnerAgencyName}}">\r\n                        <td>{{rs.partnerAgencyName}}</td>\r\n                        <td>{{rs.adultCount}} 大 {{rs.childCount}} 小</td>\r\n                        <td>{{rs.sumNeedPayMoney}}</td>\r\n                        <td>{{rs.sumSettlementMoney}}</td>\r\n                        <td>{{rs.sumPayedMoney}}</td>\r\n                        <td><span {{if rs.sumUnPayedMoney != 0}}style="color:red"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                        <td>{{if rs.allCheckCount != rs.checkedCount}}\r\n                                <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allCheckCount == rs.checkedCount}}\r\n                                <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{if rs.allPayCount != rs.payedCount}}\r\n                                <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allPayCount == rs.payedCount}}\r\n                                <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><a class="cursor T-option T-check R-right" data-right="1300002|1300005">对账</a>\r\n                            <label class="cursor R-right" data-right="1300002"><a class="R-right" data-right="1300003"> |</a></label>\r\n                            <a class="cursor R-right T-option T-clear" data-right="1300003">付款</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});