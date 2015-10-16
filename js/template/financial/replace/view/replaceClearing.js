/*TMODJS:{"debug":true,"version":68,"md5":"a03f26766a1038291af1758dfa4c99f6"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, fcBookingOrderSettlementList = ($data.month, 
            $data.fcBookingOrderSettlementList), $out = ($data.SettlementList, "");
            return $out += '<div class= "row bookingClearing globalAdd"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label class=" control-label pull-left " style="margin-left:30px"> 客户：', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="year"> ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year.value), $out += '" ', 
                $line = 10, searchParam.year == year.value && ($out += ' selected="selected" ', 
                $line = 10), $out += ">", $line = 10, $out += $escape(year.value), $out += " 年</option> ", 
                $line = 11;
            }), $out += '  </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" name="startMonth"> ', 
            $line = 18, $each(monthList, function(month) {
                $out += ' <option value="', $line = 19, $out += $escape(month.value), $out += '" ', 
                $line = 19, searchParam.monthStart == month.value && ($out += ' selected="selected" ', 
                $line = 19), $out += ">", $line = 19, $out += $escape(month.value), $out += " 月</option> ", 
                $line = 20;
            }), $out += '  </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 25, $each(monthList, function(month) {
                $out += ' <option value="', $line = 26, $out += $escape(month.value), $out += '" ', 
                $line = 26, searchParam.monthEnd == month.value && ($out += ' selected="selected" ', 
                $line = 26), $out += ">", $line = 26, $out += $escape(month.value), $out += " 月</option> ", 
                $line = 27;
            }), $out += '  </select> <button class="btn-height btn-sm search-btn btn-blance-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12" > <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：', 
            $line = 39, $out += $escape(searchParam.SumNeedIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际应收：', 
            $line = 40, $out += $escape(searchParam.SumRealNeedIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已收：', 
            $line = 41, $out += $escape(searchParam.SumRealIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未收：', 
            $line = 42, $out += $escape(searchParam.SumUnIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未收：', 
            $line = 43, $out += $escape(searchParam.SumRealUnIncomeMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-guide-add pull-right btn-bookingBlance-Records" style="margin-top: 10px;padding-top: 0px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th> 账期</th> <th> 账面应收</th> <th> 实际应收</th> <th> 实际已收</th> <th> 账面未收</th> <th> 实际未收</th> <th> 收款金额</th> <th> 收款方式</th> <th> 备注</th> <th> 对账进度</th> <th> 操作</th> </tr> </thead> <tbody> ', 
            $line = 65, $each(fcBookingOrderSettlementList, function(SettlementList) {
                $out += ' <tr data-entity-id="', $line = 66, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 66, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 66, $out += $escape(SettlementList.month), 
                $out += '"> <td style="width:100px;">', $line = 67, $out += $escape(SettlementList.year), 
                $line = 67, $out += $escape("年"), $line = 67, $out += $escape(SettlementList.month), 
                $line = 67, $out += $escape("月"), $out += '</td> <td style="width:100px;">', $line = 68, 
                $out += $escape(SettlementList.needIncomeMoney), $out += '</td> <td style="width:100px;" name="blancerealNeedIncomeMoney">', 
                $line = 69, $out += $escape(SettlementList.realNeedIncomeMoney), $out += '</td> <td style="width:100px;" name="blancerealIncomeMoney">', 
                $line = 70, $out += $escape(SettlementList.realIncomeMoney), $out += '</td> <td style="width:100px;" name="blanceununIncomeMoney">', 
                $line = 71, $out += $escape(SettlementList.unIncomeMoney), $out += '</td> <td style="width:100px;" name="blancerealrealUnIncomeMoney">', 
                $line = 72, $out += $escape(SettlementList.realUnIncomeMoney), $out += '</td> <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="10"></td> <td style="width:120px;"> <select style="text-align:center" name="blanceIncomeType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="现金">现金</option> <option value="在线支付">在线支付</option> <option value="线下付款">线下付款</option> </select> </td> <td class="col-sm-1" style="width:400px;"><input name="blancerealRemark" type="text" style="width:370px;" maxlength="1000"></td> <td> ', 
                $line = 85, SettlementList.allCount != SettlementList.checkedCount ? ($out += ' <span style="color:#ff9900"> ', 
                $line = 86, $out += $escape(SettlementList.checkedCount), $line = 86, $out += $escape("/"), 
                $line = 86, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 87) : SettlementList.allCount == SettlementList.checkedCount && ($out += ' <span style="color:green">', 
                $line = 88, $out += $escape(SettlementList.checkedCount), $line = 88, $out += $escape("/"), 
                $line = 88, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 89), 
                $out += ' </td> <td> <button data-entity-id="', $line = 93, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 93, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 94, $out += $escape(SettlementList.month), 
                $out += '" data-entity-startTime="" style="border:none" class="btn btn-primary btn-sm btn-bookingBlance-save buttonHeight"> 保存 </button> <button data-entity-year="', 
                $line = 97, $out += $escape(SettlementList.year), $out += '" style="border:none" data-entity-month="', 
                $line = 97, $out += $escape(SettlementList.month), $out += '" class="btn btn-primary btn-sm btn-bookingBlance-checkDetail buttonHeight"> 对账明细 </button> </td> </tr> ', 
                $line = 103;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row bookingClearing globalAdd">\r\n    <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label class=" control-label pull-left " style="margin-left:30px"> 客户：{{partnerAgencyName}}</label>\r\n\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select class="col-sm-1" name="year">\r\n                        {{each yearList as year index}}\r\n                        <option value="{{year.value}}" {{if searchParam.year == year.value}} selected="selected" {{/if}}>{{year.value}} 年</option>\r\n                        {{/each}}\r\n                        <!--<option>2014</option>-->\r\n                    </select>\r\n\r\n\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n                    <select class="col-sm-1" name="startMonth">\r\n                        {{each monthList as month index}}\r\n                        <option value="{{month.value}}" {{if searchParam.monthStart == month.value}} selected="selected" {{/if}}>{{month.value}} 月</option>\r\n                        {{/each}}\r\n                        <!--<option>2014</option>-->\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n                    <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n                        <option value="{{month.value}}" {{if searchParam.monthEnd == month.value}} selected="selected" {{/if}}>{{month.value}} 月</option>\r\n                        {{/each}}\r\n                        <!--<option>4月</option>-->\r\n                    </select>\r\n                    <button class="btn-height btn-sm search-btn btn-blance-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                       		 搜索 \r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12" >\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：{{searchParam.SumNeedIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应收：{{searchParam.SumRealNeedIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已收：{{searchParam.SumRealIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未收：{{searchParam.SumUnIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未收：{{searchParam.SumRealUnIncomeMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <button class="btn btn-sm btn-success btn-guide-add pull-right btn-bookingBlance-Records" style="margin-top: 10px;padding-top: 0px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n        <tr>\r\n          <th> 账期</th>\r\n          <th> 账面应收</th>\r\n          <th> 实际应收</th>\r\n          <th> 实际已收</th>\r\n          <th> 账面未收</th>\r\n          <th> 实际未收</th>\r\n          <th> 收款金额</th>\r\n          <th> 收款方式</th>\r\n          <th> 备注</th>\r\n          <th> 对账进度</th>\r\n          <th> 操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each fcBookingOrderSettlementList as SettlementList index}}\r\n        <tr data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}" data-entity-month="{{SettlementList.month}}">\r\n            <td style="width:100px;">{{SettlementList.year}}{{"年"}}{{SettlementList.month}}{{"月"}}</td>\r\n            <td style="width:100px;">{{SettlementList.needIncomeMoney}}</td>\r\n            <td style="width:100px;" name="blancerealNeedIncomeMoney">{{SettlementList.realNeedIncomeMoney}}</td>\r\n            <td style="width:100px;" name="blancerealIncomeMoney">{{SettlementList.realIncomeMoney}}</td>\r\n            <td style="width:100px;" name="blanceununIncomeMoney">{{SettlementList.unIncomeMoney}}</td>\r\n            <td style="width:100px;" name="blancerealrealUnIncomeMoney">{{SettlementList.realUnIncomeMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="10"></td>\r\n            <td style="width:120px;">\r\n                <select style="text-align:center" name="blanceIncomeType">\r\n                    <option value="" selected="selected">请选择...</option>\r\n                    <option value="转账">转账</option>\r\n                    <option value="现金">现金</option>\r\n                    <option value="在线支付">在线支付</option>\r\n                    <option value="线下付款">线下付款</option>\r\n                </select>\r\n            </td>\r\n            <td class="col-sm-1" style="width:400px;"><input name="blancerealRemark" type="text" style="width:370px;" maxlength="1000"></td>\r\n            <td>\r\n                {{if SettlementList.allCount != SettlementList.checkedCount}}\r\n                <span style="color:#ff9900"> {{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n                {{else if SettlementList.allCount == SettlementList.checkedCount}}\r\n                <span style="color:green">{{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n                {{/if}}\r\n            </td>\r\n\r\n            <td>\r\n                <button data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}"\r\n                        data-entity-month="{{SettlementList.month}}"  data-entity-startTime="" style="border:none" class="btn btn-primary btn-sm btn-bookingBlance-save buttonHeight">\r\n                    	保存\r\n                </button>\r\n                <button data-entity-year="{{SettlementList.year}}" style="border:none" data-entity-month="{{SettlementList.month}}"\r\n                         class="btn btn-primary btn-sm btn-bookingBlance-checkDetail buttonHeight">\r\n                    	对账明细\r\n                </button>\r\n            </td>\r\n        </tr>\r\n         {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});