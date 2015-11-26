/*TMODJS:{"debug":true,"version":171,"md5":"58b4d22dbccd5a8e52b2c8d4fecf5b6d"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/Clearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, companyName = $data.companyName, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), fcBusCompanySettlementList = ($data.month, $data.fcBusCompanySettlementList), $out = ($data.busCompanySettlement, 
            $data.$index, "");
            return $out += ' <div class="col-sm-12 globalAdd T-data-id" data-id="', $line = 1, 
            $out += $escape(searchParam.busCompanyId), $out += '" style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 车队：', 
            $line = 4, $out += $escape(companyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" style="margin-left:20px" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year.value), $out += '" ', 
                $line = 9, searchParam.year == year.value && ($out += 'selected="selected"', $line = 9), 
                $out += ">", $line = 9, $out += $escape(year.value), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" style="margin-left:20px" name="startMonth"> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.monthStart == month.value && ($out += 'selected="selected"', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += "月</option> ", 
                $line = 17;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 21, $each(monthList, function(month) {
                $out += ' <option value="', $line = 22, $out += $escape(month.value), $out += '" ', 
                $line = 22, searchParam.monthEnd == month.value && ($out += 'selected="selected"', 
                $line = 22), $out += ">", $line = 22, $out += $escape(month.value), $out += "月</option> ", 
                $line = 23;
            }), $out += ' </select> <button class="btn-sm T-search search-btn btn-height" style="margin-left: 20px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group " style="padding-bottom: 0"> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:', 
            $line = 36, $out += $escape(searchParam.sumNeedPayMoney), $out += '元 </label> <label class=" control-label " style="margin-left:30px;">总实际应付:', 
            $line = 37, $out += $escape(searchParam.sumRealNeedPayMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际已付:', 
            $line = 38, $out += $escape(searchParam.sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付:', 
            $line = 39, $out += $escape(searchParam.sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付:', 
            $line = 40, $out += $escape(searchParam.sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success pull-left T-clear-records margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">账期</th> <th class="th-border">账面应付</th> <th class="th-border">实际应付</th> <th class="th-border">实际已付</th> <th class="th-border">账面未付</th> <th class="th-border">实际未付</th> <th class="th-border" style="width: 100px"><span class="necessary">*</span>付款金额</th> <th class="th-border">付款方式</th> <th class="th-border" style="width: 100px!important;">备注</th> <th class="th-border">对账进度</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 65, $each(fcBusCompanySettlementList, function(busCompanySettlement) {
                $out += ' <tr data-id="', $line = 66, $out += $escape(busCompanySettlement.id), 
                $out += '" data-year="', $line = 66, $out += $escape(busCompanySettlement.year), 
                $out += '" data-month="', $line = 66, $out += $escape(busCompanySettlement.month), 
                $out += '"> <td >', $line = 67, $out += $escape(busCompanySettlement.year), $line = 67, 
                $out += $escape("年"), $line = 67, $out += $escape(busCompanySettlement.month), $line = 67, 
                $out += $escape("月"), $out += "</td> <td >", $line = 68, $out += $escape(busCompanySettlement.needPayMoney), 
                $out += '</td> <td name="blancerealNeedPayMoney">', $line = 69, $out += $escape(busCompanySettlement.realNeedPayMoney), 
                $out += '</td> <td name="blancerealrealPayedMoney">', $line = 70, $out += $escape(busCompanySettlement.realPayedMoney), 
                $out += '</td> <td name="blanceunPayedMoney">', $line = 71, $out += $escape(busCompanySettlement.unPayedMoney), 
                $out += '</td> <td name="blancerealrealUnPayedMoney">', $line = 72, $out += $escape(busCompanySettlement.realUnPayedMoney), 
                $out += '</td> <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" ></td> <td style="width:120px;"> <select style="text-align:center" name="blancePayType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="在线支付">在线支付</option> <option value="线下付款">线下付款</option> </select> </td> <td class="col-sm-1" style="width:200px;"><input name="blancerealRemark" type="text" ></td> <td> ', 
                $line = 84, busCompanySettlement.allCount != busCompanySettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 85, $out += $escape(busCompanySettlement.checkedCount), $line = 85, $out += $escape("/"), 
                $line = 85, $out += $escape(busCompanySettlement.allCount), $out += "</span> ", 
                $line = 86), $out += " ", $line = 87, busCompanySettlement.allCount == busCompanySettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 88, $out += $escape(busCompanySettlement.checkedCount), $line = 88, $out += $escape("/"), 
                $line = 88, $out += $escape(busCompanySettlement.allCount), $out += "</span> ", 
                $line = 89), $out += ' </td> <td style="width:220px"> <a style="border:none" class="cursor T-saveClear buttonHeight"> 保存 </a><a class="cursor"> |</a> <a class="cursor T-detail buttonHeight" style="border:none"> 对账明细 </a> </td> </tr> ', 
                $line = 100;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '  <div class="col-sm-12 globalAdd T-data-id" data-id="{{searchParam.busCompanyId}}" style="border: 1px solid #ccc">\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="T-search-area editable editable-click" style="margin-top: 10px">\r\n          <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 车队：{{companyName}}</label>\r\n\r\n            <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n            <select class="col-sm-1" style="margin-left:20px" name="year">\r\n                        {{each yearList as year index}}\r\n							<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					    {{/each}}\r\n                    </select>\r\n\r\n            <label class="col-sm-1 control-label no-padding-right">起始月：</label> \r\n             <select class="col-sm-1" style="margin-left:20px" name="startMonth">\r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthStart == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n						{{/each}}\r\n                    </select>\r\n            <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n           <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthEnd == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>  \r\n						{{/each}}\r\n           </select>\r\n            <button class="btn-sm  T-search search-btn btn-height" style="margin-left: 20px">\r\n              <i class="ace-icon fa fa-search"></i>\r\n                                   搜索\r\n            </button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n    </form>\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group " style="padding-bottom: 0">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:{{searchParam.sumNeedPayMoney}}元 </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应付:{{searchParam.sumRealNeedPayMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已付:{{searchParam.sumRealPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未付:{{searchParam.sumUnPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未付:{{searchParam.sumRealUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n\r\n  </div>\r\n  <button class="btn btn-sm btn-success pull-left T-clear-records margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n  <div style="clear: both"></div>\r\n  <table class="table table-striped table-bordered table-hover all margin-top">\r\n    <thead>\r\n    <tr>\r\n     <th class="th-border">账期</th>\r\n     <th class="th-border">账面应付</th>\r\n     <th class="th-border">实际应付</th>\r\n     <th class="th-border">实际已付</th>\r\n     <th class="th-border">账面未付</th>\r\n     <th class="th-border">实际未付</th>\r\n     <th class="th-border" style="width: 100px"><span class="necessary">*</span>付款金额</th>\r\n     <th class="th-border">付款方式</th>\r\n     <th class="th-border" style="width: 100px!important;">备注</th>\r\n     <th class="th-border">对账进度</th>\r\n     <th class="th-border">操作</th>\r\n     </tr>\r\n    </thead>\r\n    <tbody class="T-clearList">\r\n    \r\n     {{each fcBusCompanySettlementList as busCompanySettlement}}  \r\n     <tr data-id="{{busCompanySettlement.id}}" data-year="{{busCompanySettlement.year}}" data-month="{{busCompanySettlement.month}}">\r\n            <td >{{busCompanySettlement.year}}{{"年"}}{{busCompanySettlement.month}}{{"月"}}</td>\r\n            <td >{{busCompanySettlement.needPayMoney}}</td>\r\n            <td  name="blancerealNeedPayMoney">{{busCompanySettlement.realNeedPayMoney}}</td>\r\n            <td  name="blancerealrealPayedMoney">{{busCompanySettlement.realPayedMoney}}</td>\r\n            <td  name="blanceunPayedMoney">{{busCompanySettlement.unPayedMoney}}</td>\r\n            <td  name="blancerealrealUnPayedMoney">{{busCompanySettlement.realUnPayedMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" ></td>\r\n            <td style="width:120px;">\r\n                    <select style="text-align:center" name="blancePayType">\r\n                        <option value="" selected="selected">请选择...</option>\r\n                        <option value="转账">转账</option>\r\n                        <option value="在线支付">在线支付</option>\r\n                        <option value="线下付款">线下付款</option>\r\n                    </select>\r\n              </td>\r\n            <td class="col-sm-1" style="width:200px;"><input name="blancerealRemark" type="text"  ></td>\r\n            <td>\r\n               {{if busCompanySettlement.allCount != busCompanySettlement.checkedCount}}\r\n	                <span style="color:#ff9900"> {{busCompanySettlement.checkedCount}}{{"/"}}{{busCompanySettlement.allCount}}</span>\r\n	           {{/if}}\r\n	           {{if busCompanySettlement.allCount == busCompanySettlement.checkedCount}}\r\n	                <span style="color:green"> {{busCompanySettlement.checkedCount}}{{"/"}}{{busCompanySettlement.allCount}}</span>\r\n	           {{/if}}\r\n            </td>\r\n            <td style="width:220px">\r\n               <a style="border:none" class="cursor T-saveClear buttonHeight">\r\n                    	保存\r\n               </a><a class="cursor"> |</a>\r\n               <a class="cursor T-detail buttonHeight" style="border:none">\r\n                    	对账明细\r\n               </a>\r\n            </td>\r\n        </tr>\r\n    {{/each}} \r\n    </tbody>\r\n  </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});