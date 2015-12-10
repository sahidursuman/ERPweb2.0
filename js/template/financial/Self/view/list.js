/*TMODJS:{"debug":true,"version":194,"md5":"5c04c3f6de168ce39c2388d72349b33a"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row" > <div class="form-horizontal T-search-area"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="margin-left:0px;"> <label>自费商家：</label> <input type="text" class="T-chooseSelfPay" name="selfPayName" value="', 
            $line = 6, "" == searchParam.selfPayName ? ($out += "全部", $line = 6) : ($line = 6, 
            $out += $escape(searchParam.selfPayName), $line = 6), $out += '" /> <input type="hidden" name="selfPayId" value="', 
            $line = 7, $out += $escape(searchParam.selfPayId), $out += '" /> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 10, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <button class=" btn-sm search-btn marginLeft-30 T-search "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row selfPayList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>自费商家</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 34, $each(list, function(rs) {
                $out += ' <tr data-id="', $line = 35, $out += $escape(rs.id), $out += '" data-name="', 
                $line = 35, $out += $escape(rs.selfPayName), $out += '"> <td>', $line = 36, $out += $escape(rs.selfPayName), 
                $out += "</td> <td>", $line = 37, $out += $escape(rs.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 38, $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", $line = 39, 
                $out += $escape(rs.sumPayedMoney), $out += "</td> <td><span ", $line = 40, 0 != rs.sumUnPayedMoney && ($out += 'style="color:red"', 
                $line = 40), $out += ">", $line = 40, $out += $escape(rs.sumUnPayedMoney), $out += "</span></td> <td>", 
                $line = 41, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 42, $out += $escape(rs.checkedCount), $line = 42, $out += $escape("/"), 
                $line = 42, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 43), 
                $out += " ", $line = 44, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 45, $out += $escape(rs.checkedCount), $line = 45, $out += $escape("/"), 
                $line = 45, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 46), 
                $out += " </td> <td>", $line = 48, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 49, $out += $escape(rs.payedCount), $line = 49, $out += $escape("/"), $line = 49, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 50), $out += " ", $line = 51, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 52, 
                $out += $escape(rs.payedCount), $line = 52, $out += $escape("/"), $line = 52, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 53), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1260002">对账</a> <label class="cursor R-right" data-right="1260002"><a class="R-right" data-right="1260003"> |</a></label> <a class="cursor T-option T-clear R-right" data-right="1260003">付款</a> </td> </tr> ', 
                $line = 61;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 66, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" >\r\n    <div class="form-horizontal T-search-area"> \r\n        <form class="form-horizontal" role="form" onsubmit="return false">   \r\n            <div class="form-group" style="margin-left:0px;">       \r\n                <label>自费商家：</label>\r\n                <input type="text" class="T-chooseSelfPay" name="selfPayName" value="{{if searchParam.selfPayName == ""}}全部{{else}}{{searchParam.selfPayName}}{{/if}}" />\r\n                <input type="hidden" name="selfPayId" value="{{searchParam.selfPayId}}" /> \r\n\r\n                <label class="marginLeft-30">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n\r\n                <button class=" btn-sm search-btn marginLeft-30 T-search "> <i class="ace-icon fa fa-search"></i> 搜索 </button> \r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="row selfPayList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>自费商家</th>\r\n                    <th>账面应付</th>\r\n                    <th>结算金额</th>\r\n                    <th>已付金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>付款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each list as rs}}\r\n                    <tr data-id="{{rs.id}}" data-name="{{rs.selfPayName}}">\r\n                        <td>{{rs.selfPayName}}</td>\r\n                        <td>{{rs.sumNeedPayMoney}}</td>\r\n                        <td>{{rs.sumSettlementMoney}}</td>\r\n                        <td>{{rs.sumPayedMoney}}</td>\r\n                        <td><span {{if rs.sumUnPayedMoney != 0}}style="color:red"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                        <td>{{if rs.allCheckCount != rs.checkedCount}}\r\n                                <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allCheckCount == rs.checkedCount}}\r\n                                <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{if rs.allPayCount != rs.payedCount}}\r\n                                <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allPayCount == rs.payedCount}}\r\n                                <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-option T-check R-right" data-right="1260002">对账</a>\r\n                            <label class="cursor R-right" data-right="1260002"><a class="R-right" data-right="1260003"> |</a></label>\r\n                            <a class="cursor T-option T-clear R-right" data-right="1260003">付款</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});