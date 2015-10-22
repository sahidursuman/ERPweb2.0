/*TMODJS:{"debug":true,"version":79,"md5":"ab47f7d29d937e6db26dedcbd452b28e"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelAgencyName = $data.travelAgencyName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, fcBookingOrderSettlementList = ($data.month, 
            $data.fcBookingOrderSettlementList), $out = ($data.SettlementList, "");
            return $out += '<div class= "row bookingClearing globalAdd"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label class=" control-label pull-left " style="margin-left:30px"> 客户：', 
            $line = 5, $out += $escape(travelAgencyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year.value), $out += '" ', 
                $line = 9, searchParam.year == year.value && ($out += ' selected="selected" ', $line = 9), 
                $out += ">", $line = 9, $out += $escape(year.value), $out += " 年</option> ", $line = 10;
            }), $out += '  </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" name="startMonth"> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.monthStart == month.value && ($out += ' selected="selected" ', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += " 月</option> ", 
                $line = 17;
            }), $out += '  </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 22, $each(monthList, function(month) {
                $out += ' <option value="', $line = 23, $out += $escape(month.value), $out += '" ', 
                $line = 23, searchParam.monthEnd == month.value && ($out += ' selected="selected" ', 
                $line = 23), $out += ">", $line = 23, $out += $escape(month.value), $out += " 月</option> ", 
                $line = 24;
            }), $out += '  </select> <button class="btn-height btn-sm search-btn btn-blance-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12" > <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：', 
            $line = 36, $out += $escape(searchParam.SumNeedIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际应收：', 
            $line = 37, $out += $escape(searchParam.SumRealNeedIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已收：', 
            $line = 38, $out += $escape(searchParam.SumRealIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未收：', 
            $line = 39, $out += $escape(searchParam.SumUnIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未收：', 
            $line = 40, $out += $escape(searchParam.SumRealUnIncomeMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-guide-add pull-right btn-bookingBlance-Records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border"> 账期</th> <th class="th-border"> 账面应收</th> <th class="th-border"> 实际应收</th> <th class="th-border"> 实际已收</th> <th class="th-border"> 账面未收</th> <th class="th-border"> 实际未收</th> <th class="th-border"> 收款金额</th> <th class="th-border"> 收款方式</th> <th class="th-border"> 备注</th> <th class="th-border"> 对账进度</th> <th class="th-border"> 操作</th> </tr> </thead> <tbody> ', 
            $line = 63, $each(fcBookingOrderSettlementList, function(SettlementList) {
                $out += ' <tr data-entity-id="', $line = 64, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 64, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 64, $out += $escape(SettlementList.month), 
                $out += '"> <td >', $line = 65, $out += $escape(SettlementList.year), $line = 65, 
                $out += $escape("年"), $line = 65, $out += $escape(SettlementList.month), $line = 65, 
                $out += $escape("月"), $out += "</td> <td >", $line = 66, $out += $escape(SettlementList.needIncomeMoney), 
                $out += '</td> <td name="blancerealNeedIncomeMoney">', $line = 67, $out += $escape(SettlementList.realNeedIncomeMoney), 
                $out += '</td> <td name="blancerealIncomeMoney">', $line = 68, $out += $escape(SettlementList.realIncomeMoney), 
                $out += '</td> <td name="blanceununIncomeMoney">', $line = 69, $out += $escape(SettlementList.unIncomeMoney), 
                $out += '</td> <td name="blancerealrealUnIncomeMoney">', $line = 70, $out += $escape(SettlementList.realUnIncomeMoney), 
                $out += '</td> <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="10"></td> <td style="width:120px;"> <select style="text-align:center" name="blanceIncomeType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="现金">现金</option> <option value="在线支付">在线支付</option> <option value="线下付款">线下付款</option> </select> </td> <td class="col-sm-1" ><input name="blancerealRemark" type="text" maxlength="1000"></td> <td> ', 
                $line = 83, SettlementList.allCount != SettlementList.checkedCount ? ($out += ' <span style="color:#ff9900"> ', 
                $line = 84, $out += $escape(SettlementList.checkedCount), $line = 84, $out += $escape("/"), 
                $line = 84, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 85) : SettlementList.allCount == SettlementList.checkedCount && ($out += ' <span style="color:green">', 
                $line = 86, $out += $escape(SettlementList.checkedCount), $line = 86, $out += $escape("/"), 
                $line = 86, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 87), 
                $out += ' </td> <td> <a data-entity-id="', $line = 90, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 90, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 91, $out += $escape(SettlementList.month), 
                $out += '" data-entity-startTime="" class="cursor btn-bookingBlance-save"> 保存 </a><a class="cursor"> |</a> <a data-entity-year="', 
                $line = 94, $out += $escape(SettlementList.year), $out += '" data-entity-month="', 
                $line = 94, $out += $escape(SettlementList.month), $out += '" class="cursor btn-sm btn-bookingBlance-checkDetail"> 对账明细 </a> </td> </tr> ', 
                $line = 99;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row bookingClearing globalAdd">\r\n    <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label class=" control-label pull-left " style="margin-left:30px"> 客户：{{travelAgencyName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select class="col-sm-1" name="year">\r\n                        {{each yearList as year index}}\r\n                        <option value="{{year.value}}" {{if searchParam.year == year.value}} selected="selected" {{/if}}>{{year.value}} 年</option>\r\n                        {{/each}}\r\n                        <!--<option>2014</option>-->\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n                    <select class="col-sm-1" name="startMonth">\r\n                        {{each monthList as month index}}\r\n                        <option value="{{month.value}}" {{if searchParam.monthStart == month.value}} selected="selected" {{/if}}>{{month.value}} 月</option>\r\n                        {{/each}}\r\n                        <!--<option>2014</option>-->\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n                    <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n                        <option value="{{month.value}}" {{if searchParam.monthEnd == month.value}} selected="selected" {{/if}}>{{month.value}} 月</option>\r\n                        {{/each}}\r\n                        <!--<option>4月</option>-->\r\n                    </select>\r\n                    <button class="btn-height btn-sm search-btn btn-blance-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                       		 搜索 \r\n                    </button> \r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12" >\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：{{searchParam.SumNeedIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应收：{{searchParam.SumRealNeedIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已收：{{searchParam.SumRealIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未收：{{searchParam.SumUnIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未收：{{searchParam.SumRealUnIncomeMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <button class="btn btn-sm btn-success btn-guide-add pull-right btn-bookingBlance-Records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n        <tr>\r\n          <th class="th-border"> 账期</th>\r\n          <th class="th-border"> 账面应收</th>\r\n          <th class="th-border"> 实际应收</th>\r\n          <th class="th-border"> 实际已收</th>\r\n          <th class="th-border"> 账面未收</th>\r\n          <th class="th-border"> 实际未收</th>\r\n          <th class="th-border"> 收款金额</th>\r\n          <th class="th-border"> 收款方式</th>\r\n          <th class="th-border"> 备注</th>\r\n          <th class="th-border"> 对账进度</th>\r\n          <th class="th-border"> 操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each fcBookingOrderSettlementList as SettlementList index}}\r\n        <tr data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}" data-entity-month="{{SettlementList.month}}">\r\n            <td >{{SettlementList.year}}{{"年"}}{{SettlementList.month}}{{"月"}}</td>\r\n            <td >{{SettlementList.needIncomeMoney}}</td>\r\n            <td  name="blancerealNeedIncomeMoney">{{SettlementList.realNeedIncomeMoney}}</td>\r\n            <td  name="blancerealIncomeMoney">{{SettlementList.realIncomeMoney}}</td>\r\n            <td  name="blanceununIncomeMoney">{{SettlementList.unIncomeMoney}}</td>\r\n            <td  name="blancerealrealUnIncomeMoney">{{SettlementList.realUnIncomeMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="10"></td>\r\n            <td style="width:120px;">\r\n                <select style="text-align:center" name="blanceIncomeType">\r\n                    <option value="" selected="selected">请选择...</option>\r\n                    <option value="转账">转账</option>\r\n                    <option value="现金">现金</option>\r\n                    <option value="在线支付">在线支付</option>\r\n                    <option value="线下付款">线下付款</option>\r\n                </select>\r\n            </td>\r\n            <td class="col-sm-1" ><input name="blancerealRemark" type="text"  maxlength="1000"></td>\r\n            <td>\r\n                {{if SettlementList.allCount != SettlementList.checkedCount}}\r\n                <span style="color:#ff9900"> {{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n                {{else if SettlementList.allCount == SettlementList.checkedCount}}\r\n                <span style="color:green">{{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n                {{/if}}\r\n            </td>\r\n            <td>\r\n                <a data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}"\r\n                        data-entity-month="{{SettlementList.month}}"  data-entity-startTime=""  class="cursor btn-bookingBlance-save">\r\n                    	保存\r\n                </a><a class="cursor"> |</a>\r\n                <a data-entity-year="{{SettlementList.year}}"  data-entity-month="{{SettlementList.month}}" class="cursor btn-sm btn-bookingBlance-checkDetail">\r\n                对账明细\r\n                </a>\r\n            </td>\r\n        </tr>\r\n         {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});