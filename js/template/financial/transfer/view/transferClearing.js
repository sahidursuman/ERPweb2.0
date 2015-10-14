/*TMODJS:{"debug":true,"version":31,"md5":"f98f2f75ef1d08625428a4a702548912"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/transferClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, fcTransferSettlementList = ($data.month, 
            $data.fcTransferSettlementList), $out = ($data.transferSettlement, $data.$index, 
            "");
            return $out += '<div class= "row transferCleaning"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 同行地接：', 
            $line = 6, $out += $escape(partnerAgencyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" style="margin-left:20px" name="year"> ', 
            $line = 10, $each(yearList, function(year) {
                $out += ' <option value="', $line = 11, $out += $escape(year.value), $out += '" ', 
                $line = 11, searchParam.year == year.value && ($out += 'selected="selected"', $line = 11), 
                $out += ">", $line = 11, $out += $escape(year.value), $out += "</option> ", $line = 12;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" style="margin-left:20px" name="startMonth"> ', 
            $line = 18, $each(monthList, function(month) {
                $out += ' <option value="', $line = 19, $out += $escape(month.value), $out += '" ', 
                $line = 19, searchParam.monthStart == month.value && ($out += 'selected="selected"', 
                $line = 19), $out += ">", $line = 19, $out += $escape(month.value), $out += "月</option> ", 
                $line = 20;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 24, $each(monthList, function(month) {
                $out += ' <option value="', $line = 25, $out += $escape(month.value), $out += '" ', 
                $line = 25, searchParam.monthEnd == month.value && ($out += 'selected="selected"', 
                $line = 25), $out += ">", $line = 25, $out += $escape(month.value), $out += "月</option> ", 
                $line = 26;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-blance-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group " style="padding-bottom: 0"> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:', 
            $line = 40, $out += $escape(searchParam.sumNeedPayMoney), $out += '元 </label> <label class=" control-label " style="margin-left:30px;">总实际应付:', 
            $line = 41, $out += $escape(searchParam.sumRealNeedPayMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际已付:', 
            $line = 42, $out += $escape(searchParam.sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付:', 
            $line = 43, $out += $escape(searchParam.sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付:', 
            $line = 44, $out += $escape(searchParam.sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success pull-right btn-transfer-record" style="margin-top: 10px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th>账期</th> <th>账面应付</th> <th>实际应付</th> <th>实际已付</th> <th>账面未付</th> <th>实际未付</th> <th> <span class="necessary">*</span>付款金额</th> <th>付款方式</th> <th>备注</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 79, $each(fcTransferSettlementList, function(transferSettlement) {
                $out += ' <tr data-entity-id="', $line = 80, $out += $escape(transferSettlement.id), 
                $out += '" data-entity-year="', $line = 80, $out += $escape(transferSettlement.year), 
                $out += '" data-entity-month="', $line = 80, $out += $escape(transferSettlement.month), 
                $out += '"> <td style="width:100px;">', $line = 81, $out += $escape(transferSettlement.year), 
                $line = 81, $out += $escape("年"), $line = 81, $out += $escape(transferSettlement.month), 
                $line = 81, $out += $escape("月"), $out += '</td> <td style="width:100px;">', $line = 82, 
                $out += $escape(transferSettlement.needPayMoney), $out += '</td> <td style="width:100px;" name="blancerealNeedPayMoney">', 
                $line = 83, $out += $escape(transferSettlement.realNeedPayMoney), $out += '</td> <td style="width:100px;" name="blancerealrealPayedMoney">', 
                $line = 84, $out += $escape(transferSettlement.realPayedMoney), $out += '</td> <td style="width:100px;" name="blanceunPayedMoney">', 
                $line = 85, $out += $escape(transferSettlement.unPayedMoney), $out += '</td> <td style="width:100px;" name="blancerealrealUnPayedMoney">', 
                $line = 86, $out += $escape(transferSettlement.realUnPayedMoney), $out += '</td> <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" maxlength="9"></td> <td style="width:120px;"> <select style="text-align:center" name="blancePayType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="在线支付">在线支付</option> <option value="线下付款">线下付款</option> </select> </td> <td class="col-sm-1" style="width:400px;"><input name="blancerealRemark" type="text" style="width:370px;" maxlenght="1000"></td> <td> ', 
                $line = 98, transferSettlement.allCount != transferSettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 99, $out += $escape(transferSettlement.checkedCount), $line = 99, $out += $escape("/"), 
                $line = 99, $out += $escape(transferSettlement.allCount), $out += "</span> ", $line = 100), 
                $out += " ", $line = 101, transferSettlement.allCount == transferSettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 102, $out += $escape(transferSettlement.checkedCount), $line = 102, $out += $escape("/"), 
                $line = 102, $out += $escape(transferSettlement.allCount), $out += "</span> ", $line = 103), 
                $out += ' </td> <td style="width:220px"> <button data-entity-id="', $line = 106, 
                $out += $escape(transferSettlement.id), $out += '" data-entity-year="', $line = 106, 
                $out += $escape(transferSettlement.year), $out += '" style="border:none" data-entity-month="', 
                $line = 106, $out += $escape(transferSettlement.month), $out += '" class="btn btn-primary btn-transferBlance-save"> 保存 </button> <button data-entity-year="', 
                $line = 109, $out += $escape(transferSettlement.year), $out += '" data-entity-month="', 
                $line = 109, $out += $escape(transferSettlement.month), $out += '" style="border:none" class="btn btn-primary btn-restaurantBlance-checkDetail"> 对账明细 </button> </td> </tr> ', 
                $line = 114;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row transferCleaning">\r\n\r\n  <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n          <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 同行地接：{{partnerAgencyName}}</label>\r\n\r\n            <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n            <select class="col-sm-1" style="margin-left:20px" name="year">\r\n                        {{each yearList as year index}}\r\n							<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					    {{/each}}\r\n                    </select>\r\n\r\n\r\n            <label class="col-sm-1 control-label no-padding-right">起始月：</label> \r\n             <select class="col-sm-1" style="margin-left:20px" name="startMonth">\r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthStart == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n						{{/each}}\r\n                    </select>\r\n            <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n           <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthEnd == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n						{{/each}}\r\n						\r\n           </select>\r\n            <button class="btn-height btn-sm search-btn btn-blance-search" >\r\n              <i class="ace-icon fa fa-search"></i>\r\n                                   搜索\r\n            </button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n    </form>\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group " style="padding-bottom: 0">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:{{searchParam.sumNeedPayMoney}}元 </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应付:{{searchParam.sumRealNeedPayMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已付:{{searchParam.sumRealPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未付:{{searchParam.sumUnPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未付:{{searchParam.sumRealUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n\r\n  </div>\r\n  <button class="btn btn-sm btn-success pull-right btn-transfer-record" style="margin-top: 10px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n  <table class="table table-striped table-bordered table-hover all">\r\n    <thead>\r\n    <tr>\r\n\r\n     <th>账期</th>\r\n\r\n     <th>账面应付</th>\r\n\r\n     <th>实际应付</th>\r\n\r\n     <th>实际已付</th>\r\n\r\n     <th>账面未付</th>\r\n\r\n     <th>实际未付</th>\r\n\r\n     <th> <span class="necessary">*</span>付款金额</th>\r\n\r\n     <th>付款方式</th>\r\n\r\n     <th>备注</th>\r\n\r\n     <th>对账进度</th>\r\n\r\n     <th>操作</th>\r\n     </tr>\r\n    </thead>\r\n    <tbody>\r\n    \r\n     {{each fcTransferSettlementList as transferSettlement}}  \r\n     <tr data-entity-id="{{transferSettlement.id}}" data-entity-year="{{transferSettlement.year}}" data-entity-month="{{transferSettlement.month}}">\r\n            <td style="width:100px;">{{transferSettlement.year}}{{"年"}}{{transferSettlement.month}}{{"月"}}</td>\r\n            <td style="width:100px;">{{transferSettlement.needPayMoney}}</td>\r\n            <td style="width:100px;" name="blancerealNeedPayMoney">{{transferSettlement.realNeedPayMoney}}</td>\r\n            <td style="width:100px;" name="blancerealrealPayedMoney">{{transferSettlement.realPayedMoney}}</td>\r\n            <td style="width:100px;" name="blanceunPayedMoney">{{transferSettlement.unPayedMoney}}</td>\r\n            <td style="width:100px;" name="blancerealrealUnPayedMoney">{{transferSettlement.realUnPayedMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" maxlength="9"></td>\r\n            <td style="width:120px;">\r\n                    <select style="text-align:center" name="blancePayType">\r\n                        <option value="" selected="selected">请选择...</option>\r\n                        <option value="转账">转账</option>\r\n                        <option value="在线支付">在线支付</option>\r\n                        <option value="线下付款">线下付款</option>\r\n                    </select>\r\n              </td>\r\n            <td class="col-sm-1" style="width:400px;"><input name="blancerealRemark" type="text" style="width:370px;" maxlenght="1000"></td>\r\n            <td>\r\n               {{if transferSettlement.allCount != transferSettlement.checkedCount}}\r\n	                <span style="color:#ff9900"> {{transferSettlement.checkedCount}}{{"/"}}{{transferSettlement.allCount}}</span>\r\n	           {{/if}}\r\n	           {{if transferSettlement.allCount == transferSettlement.checkedCount}}\r\n	                <span style="color:green"> {{transferSettlement.checkedCount}}{{"/"}}{{transferSettlement.allCount}}</span>\r\n	           {{/if}}\r\n            </td>\r\n            <td style="width:220px">\r\n               <button data-entity-id="{{transferSettlement.id}}" data-entity-year="{{transferSettlement.year}}" style="border:none" data-entity-month="{{transferSettlement.month}}" class="btn btn-primary btn-transferBlance-save">\r\n                    	保存\r\n               </button>\r\n               <button data-entity-year="{{transferSettlement.year}}" data-entity-month="{{transferSettlement.month}}" style="border:none" class="btn btn-primary btn-restaurantBlance-checkDetail">\r\n                    	对账明细\r\n               </button>\r\n            </td>\r\n        </tr>\r\n    {{/each}} \r\n    </tbody>\r\n  </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});