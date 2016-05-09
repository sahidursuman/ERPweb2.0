/*TMODJS:{"debug":true,"version":366,"md5":"142f3d943785e2293796c1734a0bd6b4"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialBusCompanyList = $data.financialBusCompanyList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row"> <div class="form-horizontal T-search-area"> <div class="form-group"> <label class="mar-l-10">车队 </label> <input type="text" class="T-chooseBusCompany mar-r-10" name="busCompanyName" value="', 
            $line = 5, $out += $escape(searchParam.busCompanyName), $out += '" placeholder="所有车队"/> <input type="hidden" name="busCompanyId" value="', 
            $line = 6, $out += $escape(searchParam.busCompanyId), $out += '" /> <label>账期 </label> <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <div class="btn-group T-finance-status mar-r-10"> <button data-value="', 
            $line = 12, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up block-up" aria-expanded="false"> <span> ', 
            $line = 14, 0 == searchParam.accountStatus ? ($out += " 全部 ", $line = 16) : 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 18) : ($out += " 未结清 ", $line = 20), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已结清</a> </li> <li> <a data-value="2" href="javascript:void(0)">未结清</a> </li> </ul> </div> <select name="orderBy" class="mar-r-10"> <option value="asc" ', 
            $line = 37, "asc" == searchParam.sortType && ($out += "selected", $line = 37), $out += '>升序</option> <option value="desc" ', 
            $line = 38, "desc" == searchParam.sortType && ($out += "selected", $line = 38), 
            $out += '>降序</option> </select> <button class="btn-sm T-search search-btn"> <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-inline T-sum-area"> <div class="form-group mar-r-20"> <label class="control-label">账面应付合计：</label> <label class="control-label F-float F-money T-sumNeedPay"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">签单金额合计：</label> <label class="control-label F-float F-money T-sumSignMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>车队</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 83, $each(financialBusCompanyList, function(rs) {
                $out += ' <tr data-id="', $line = 84, $out += $escape(rs.busCompanyId), $out += '" data-name="', 
                $line = 84, $out += $escape(rs.busCompanyName), $out += '"> <td>', $line = 85, $out += $escape(rs.busCompanyName), 
                $out += '</td> <td><span class="F-float F-money">', $line = 86, $out += $escape(rs.sumNeedPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 87, $out += $escape(rs.sumSettlementMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 88, $out += $escape(rs.sumPayedMoney), 
                $out += '</span></td> <td><span class="F-float F-money" ', $line = 89, 0 != rs.sumUnPayedMoney && ($out += 'style="color:red" ', 
                $line = 89), $out += ">", $line = 89, $out += $escape(rs.sumUnPayedMoney), $out += "</span></td> <td> ", 
                $line = 91, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 92, $out += $escape(rs.checkedCount), $line = 92, $out += $escape("/"), 
                $line = 92, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 92), 
                $out += " ", $line = 92, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 93, $out += $escape(rs.checkedCount), $line = 93, $out += $escape("/"), 
                $line = 93, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 93), 
                $out += " </td> <td> ", $line = 96, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 97, $out += $escape(rs.payedCount), $line = 97, $out += $escape("/"), $line = 97, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 97), $out += " ", $line = 97, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 98, 
                $out += $escape(rs.payedCount), $line = 98, $out += $escape("/"), $line = 98, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 98), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1230002|1230005">对账</a> <label class="cursor R-right" data-right=\'1230002\'><a class=\'R-right\' data-right=\'1230003\'> |</a></label> <a class="cursor T-option T-clear R-right" data-right="1230003">付款</a> </td> </tr> ', 
                $line = 106;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 111, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <div class="form-horizontal T-search-area">\r\n        <div class="form-group">\r\n            <label class="mar-l-10">车队 </label>\r\n            <input type="text" class="T-chooseBusCompany mar-r-10" name="busCompanyName" value="{{searchParam.busCompanyName}}" placeholder="所有车队"/>\r\n            <input type="hidden" name="busCompanyId" value="{{searchParam.busCompanyId}}" />\r\n            <label>账期 </label>\r\n            <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />\r\n            <div class="btn-group T-finance-status mar-r-10">\r\n                <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up block-up" aria-expanded="false">\r\n                    <span>\r\n                    {{if searchParam.accountStatus == 0}}\r\n                        全部\r\n                    {{else if searchParam.accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li>\r\n                        <a data-value="0" href="javascript:void(0)">全部</a>\r\n                    </li>\r\n                    <li>\r\n                        <a data-value="1" href="javascript:void(0)">已结清</a>\r\n                    </li>\r\n                    <li>\r\n                        <a data-value="2" href="javascript:void(0)">未结清</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <select name="orderBy" class="mar-r-10">\r\n                <option value="asc" {{if searchParam.sortType==\'asc\'}}selected{{/if}}>升序</option> \r\n                <option value="desc" {{if searchParam.sortType==\'desc\'}}selected{{/if}}>降序</option> \r\n            </select>\r\n            <button class="btn-sm  T-search search-btn">\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">账面应付合计：</label>\r\n            <label class="control-label F-float F-money T-sumNeedPay"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">签单金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumSignMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">已付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label">未付金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <div class="row busCompanyList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                    <tr class="bg-blur T-tr-fixed">\r\n                        <th>车队</th>\r\n                        <th>账面应付</th>\r\n                        <th>结算金额</th>\r\n                        <th>已付金额</th>\r\n                        <th>未付金额</th>\r\n                        <th>对账进度</th>\r\n                        <th>付款进度</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each financialBusCompanyList as rs}}\r\n                    <tr data-id="{{rs.busCompanyId}}" data-name="{{rs.busCompanyName}}">\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td><span class="F-float F-money">{{rs.sumNeedPayMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.sumSettlementMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.sumPayedMoney}}</span></td>\r\n                        <td><span class="F-float F-money" {{if rs.sumUnPayedMoney !=0 }}style="color:red" {{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                        <td>\r\n                            {{if rs.allCheckCount != rs.checkedCount}}\r\n                            <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span> {{/if}} {{if rs.allCheckCount == rs.checkedCount}}\r\n                            <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span> {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            {{if rs.allPayCount != rs.payedCount}}\r\n                            <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span> {{/if}} {{if rs.allPayCount == rs.payedCount}}\r\n                            <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span> {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-option T-check R-right" data-right="1230002|1230005">对账</a>\r\n                            <label class="cursor R-right" data-right=\'1230002\'><a class=\'R-right\' data-right=\'1230003\'> |</a></label>\r\n                            <a class="cursor T-option T-clear R-right" data-right="1230003">付款</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});