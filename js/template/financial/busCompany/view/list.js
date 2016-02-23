/*TMODJS:{"debug":true,"version":304,"md5":"a33eb5445c313555e01268dfefa56a5f"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, financialBusCompanyList = $data.financialBusCompanyList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row" > <div class="form-horizontal T-search-area"> <div class="form-group" > <label style="margin-left:15px;">车队：</label> <input type="text" class="T-chooseBusCompany" name="busCompanyName" value="', 
            $line = 5, "" == searchParam.busCompanyName ? ($out += "全部", $line = 5) : ($line = 5, 
            $out += $escape(searchParam.busCompanyName), $line = 5), $out += '" /> <input type="hidden" name="busCompanyId" value="', 
            $line = 6, $out += $escape(searchParam.busCompanyId), $out += '" /> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <button class="btn-sm T-search search-btn marginLeft-30" > <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">账面应付合计：</label> <label class="control-label F-float F-money T-sumNeedPay"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>车队</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 53, $each(financialBusCompanyList, function(rs) {
                $out += ' <tr data-id="', $line = 54, $out += $escape(rs.busCompanyId), $out += '" data-name="', 
                $line = 54, $out += $escape(rs.busCompanyName), $out += '"> <td>', $line = 55, $out += $escape(rs.busCompanyName), 
                $out += '</td> <td><span class="F-float F-money">', $line = 56, $out += $escape(rs.sumNeedPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 57, $out += $escape(rs.sumSettlementMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 58, $out += $escape(rs.sumPayedMoney), 
                $out += '</span></td> <td><span class="F-float F-money" ', $line = 59, 0 != rs.sumUnPayedMoney && ($out += 'style="color:red"', 
                $line = 59), $out += ">", $line = 59, $out += $escape(rs.sumUnPayedMoney), $out += "</span></td> <td > ", 
                $line = 61, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 62, $out += $escape(rs.checkedCount), $line = 62, $out += $escape("/"), 
                $line = 62, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 63), 
                $out += " ", $line = 64, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 65, $out += $escape(rs.checkedCount), $line = 65, $out += $escape("/"), 
                $line = 65, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 66), 
                $out += " </td> <td > ", $line = 69, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 70, $out += $escape(rs.payedCount), $line = 70, $out += $escape("/"), $line = 70, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 71), $out += " ", $line = 72, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 73, 
                $out += $escape(rs.payedCount), $line = 73, $out += $escape("/"), $line = 73, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 74), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1230002|1230005">对账</a> <label class="cursor R-right" data-right=\'1230002\'><a class=\'R-right\' data-right=\'1230003\'> |</a></label> <a class="cursor T-option T-clear R-right" data-right="1230003">付款</a> </td> </tr> ', 
                $line = 82;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 87, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" >\r\n    <div class="form-horizontal T-search-area">    \r\n        <div class="form-group" >      \r\n            <label style="margin-left:15px;">车队：</label>\r\n            <input type="text" class="T-chooseBusCompany" name="busCompanyName" value="{{if searchParam.busCompanyName == ""}}全部{{else}}{{searchParam.busCompanyName}}{{/if}}" />\r\n            <input type="hidden" name="busCompanyId" value="{{searchParam.busCompanyId}}" />  \r\n\r\n            <label class="marginLeft-30">账期：</label>\r\n            <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n            <button class="btn-sm  T-search search-btn marginLeft-30" >\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">账面应付合计：</label>\r\n            <label class="control-label F-float F-money T-sumNeedPay"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <div class="row busCompanyList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                    <tr class="bg-blur">\r\n                        <th>车队</th>\r\n                        <th>账面应付</th>\r\n                        <th>结算金额</th>\r\n                        <th>已付金额</th>\r\n                        <th>未付金额</th>\r\n                        <th>对账进度</th>\r\n                        <th>付款进度</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each financialBusCompanyList as rs}}\r\n                    <tr data-id="{{rs.busCompanyId}}" data-name="{{rs.busCompanyName}}">\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td><span class="F-float F-money">{{rs.sumNeedPayMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.sumSettlementMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.sumPayedMoney}}</span></td>\r\n                        <td><span class="F-float F-money" {{if rs.sumUnPayedMoney != 0}}style="color:red"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                        <td >\r\n    	                    {{if rs.allCheckCount != rs.checkedCount}}\r\n    	                      <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n    	                    {{/if}}\r\n    	                    {{if rs.allCheckCount == rs.checkedCount}}\r\n    	                      <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n    	                    {{/if}}\r\n                        </td>\r\n                        <td >\r\n                            {{if rs.allPayCount != rs.payedCount}}\r\n                              <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allPayCount == rs.payedCount}}\r\n                              <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-option T-check R-right" data-right="1230002|1230005">对账</a>\r\n                            <label class="cursor R-right" data-right=\'1230002\'><a class=\'R-right\' data-right=\'1230003\'> |</a></label>\r\n                            <a class="cursor T-option T-clear R-right" data-right="1230003">付款</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});