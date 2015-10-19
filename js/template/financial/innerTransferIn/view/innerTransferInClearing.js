/*TMODJS:{"debug":true,"version":35,"md5":"de53fba14906591463111d4347382049"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), allPerson = ($data.month, $data.allPerson), sumNeedIncomeMoney = $data.sumNeedIncomeMoney, sumRealNeedIncomeMoney = $data.sumRealNeedIncomeMoney, sumRealIncomeMoney = $data.sumRealIncomeMoney, sumUnIncomedMoney = $data.sumUnIncomedMoney, sumRealUnIncomeMoney = $data.sumRealUnIncomeMoney, sumBackMoney = $data.sumBackMoney, financialInnerTransferInSettlementList = $data.financialInnerTransferInSettlementList, $out = ($data.InnerTransferInSettlement, 
            $data.$index, "");
            return $out += '<div class= "row transferCleaning globalAdd"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 部门：', 
            $line = 5, $out += $escape(searchParam.fromBusinessGroupName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" style="margin-left:20px" name="year"> ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year.value), $out += '" ', 
                $line = 10, searchParam.year == year.value && ($out += 'selected="selected"', $line = 10), 
                $out += ">", $line = 10, $out += $escape(year.value), $out += "</option> ", $line = 11;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" style="margin-left:20px" name="startMonth"> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.startMonth == month.value && ($out += 'selected="selected"', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += "月</option> ", 
                $line = 17;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 21, $each(monthList, function(month) {
                $out += ' <option value="', $line = 22, $out += $escape(month.value), $out += '" ', 
                $line = 22, searchParam.endMonth == month.value && ($out += 'selected="selected"', 
                $line = 22), $out += ">", $line = 22, $out += $escape(month.value), $out += "月</option> ", 
                $line = 23;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-blance-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group " style="padding-bottom: 0"> <label class=" control-label pull-left" style="margin-left: 15px">总人数:', 
            $line = 34, $out += $escape(allPerson), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面应收:', 
            $line = 35, $out += $escape(sumNeedIncomeMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际应收:', 
            $line = 36, $out += $escape(sumRealNeedIncomeMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际已收:', 
            $line = 37, $out += $escape(sumRealIncomeMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总账面未收:', 
            $line = 38, $out += $escape(sumUnIncomedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未收:', 
            $line = 39, $out += $escape(sumRealUnIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总返款:', 
            $line = 40, $out += $escape(sumBackMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success pull-left btn-transfer-record margin-top" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">账期</th> <th class="th-border">账面应收</th> <th class="th-border">实际应收</th> <th class="th-border">实际已收</th> <th class="th-border">账面未收</th> <th class="th-border">未收对账</th> <th class="th-border">返款</th> <th class="th-border">实际未收</th> <th class="th-border"> <span class="necessary">*</span>收款金额</th> <th class="th-border">收款方式</th> <th class="th-border">备注</th> <th class="th-border">对账进度</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 65, $each(financialInnerTransferInSettlementList, function(InnerTransferInSettlement) {
                $out += ' <tr data-entity-id="', $line = 66, $out += $escape(InnerTransferInSettlement.id), 
                $out += '" data-entity-year="', $line = 66, $out += $escape(InnerTransferInSettlement.year), 
                $out += '" data-entity-month="', $line = 66, $out += $escape(InnerTransferInSettlement.month), 
                $out += '"> <td >', $line = 67, $out += $escape(InnerTransferInSettlement.year), 
                $line = 67, $out += $escape("年"), $line = 67, $out += $escape(InnerTransferInSettlement.month), 
                $line = 67, $out += $escape("月"), $out += "</td> <td >", $line = 68, $out += $escape(InnerTransferInSettlement.needIncomeMoney), 
                $out += '</td> <td name="blancerealNeedPayMoney">', $line = 69, $out += $escape(InnerTransferInSettlement.realNeedIncomeMoney), 
                $out += '</td> <td name="blancerealrealPayedMoney">', $line = 70, $out += $escape(InnerTransferInSettlement.realIncomeMoney), 
                $out += '</td> <td name="blanceunPayedMoney">', $line = 71, $out += $escape(InnerTransferInSettlement.unIncomedMoney), 
                $out += '</td> <td name="blancerealrealUnPayedMoney">', $line = 72, $out += $escape(InnerTransferInSettlement.checkUnIncomeMoney), 
                $out += '</td> <td name="backMoney">', $line = 73, $out += $escape(InnerTransferInSettlement.backMoney), 
                $out += '</td> <td name="backMoney">', $line = 74, $out += $escape(InnerTransferInSettlement.realUnIncomeMoney), 
                $out += '</td> <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="9"></td> <td style="width:120px;"> <select style="text-align:center" name="blancePayType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="在线支收">在线支收</option> <option value="线下收款">线下收款</option> </select> </td> <td class="col-sm-1" ><input name="blancerealRemark" type="text" maxlenght="1000"></td> <td> ', 
                $line = 86, InnerTransferInSettlement.allCount != InnerTransferInSettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 87, $out += $escape(InnerTransferInSettlement.checkedCount), $line = 87, 
                $out += $escape("/"), $line = 87, $out += $escape(InnerTransferInSettlement.allCount), 
                $out += "</span> ", $line = 88), $out += " ", $line = 89, InnerTransferInSettlement.allCount == InnerTransferInSettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 90, $out += $escape(InnerTransferInSettlement.checkedCount), $line = 90, 
                $out += $escape("/"), $line = 90, $out += $escape(InnerTransferInSettlement.allCount), 
                $out += "</span> ", $line = 91), $out += ' </td> <td style="width:220px"> <a data-entity-id="', 
                $line = 94, $out += $escape(InnerTransferInSettlement.id), $out += '" data-entity-year="', 
                $line = 94, $out += $escape(InnerTransferInSettlement.year), $out += '" data-entity-month="', 
                $line = 94, $out += $escape(InnerTransferInSettlement.month), $out += '" class="cursor btn-transferBlance-save"> 保存 </a><a class="cursor" > |</a> <a data-entity-year="', 
                $line = 97, $out += $escape(InnerTransferInSettlement.year), $out += '" data-entity-month="', 
                $line = 97, $out += $escape(InnerTransferInSettlement.month), $out += '" class="cursor btn-restaurantBlance-checkDetail"> 对账明细 </a> </td> </tr> ', 
                $line = 102;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row transferCleaning globalAdd">\r\n  <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n          <div class="form-group"> <label style="margin-left: 15px" class=" control-label pull-left "> 部门：{{searchParam.fromBusinessGroupName}}</label>\r\n\r\n            <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n            <select class="col-sm-1" style="margin-left:20px" name="year">\r\n                        {{each yearList as year index}}\r\n              <option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n              {{/each}}\r\n                    </select>\r\n            <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n             <select class="col-sm-1" style="margin-left:20px" name="startMonth">\r\n                        {{each monthList as month index}}\r\n              <option value="{{month.value}}" {{if searchParam.startMonth == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n            {{/each}}\r\n                    </select>\r\n            <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n           <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n              <option value="{{month.value}}" {{if searchParam.endMonth == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n            {{/each}}\r\n           </select>\r\n            <button class="btn-height btn-sm search-btn btn-blance-search" >\r\n              <i class="ace-icon fa fa-search"></i>\r\n                                   搜索\r\n            </button>\r\n          </div>\r\n        </div>\r\n    </form>\r\n      <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group " style="padding-bottom: 0">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总人数:{{allPerson}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面应收:{{sumNeedIncomeMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应收:{{sumRealNeedIncomeMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已收:{{sumRealIncomeMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未收:{{sumUnIncomedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未收:{{sumRealUnIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总返款:{{sumBackMoney}}</label>\r\n            </div>\r\n        </form>\r\n  </div>\r\n  <button class="btn btn-sm btn-success pull-left btn-transfer-record margin-top" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n  <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n    <thead>\r\n    <tr>\r\n         <th class="th-border">账期</th>\r\n         <th class="th-border">账面应收</th>\r\n         <th class="th-border">实际应收</th>\r\n         <th class="th-border">实际已收</th>\r\n         <th class="th-border">账面未收</th>\r\n         <th class="th-border">未收对账</th>\r\n         <th class="th-border">返款</th>\r\n         <th class="th-border">实际未收</th>\r\n         <th class="th-border"> <span class="necessary">*</span>收款金额</th>\r\n         <th class="th-border">收款方式</th>\r\n         <th class="th-border">备注</th>\r\n         <th class="th-border">对账进度</th>\r\n         <th class="th-border">操作</th>\r\n     </tr>\r\n    </thead>\r\n    <tbody>\r\n     {{each financialInnerTransferInSettlementList as InnerTransferInSettlement}}\r\n     <tr data-entity-id="{{InnerTransferInSettlement.id}}" data-entity-year="{{InnerTransferInSettlement.year}}" data-entity-month="{{InnerTransferInSettlement.month}}">\r\n            <td >{{InnerTransferInSettlement.year}}{{"年"}}{{InnerTransferInSettlement.month}}{{"月"}}</td>\r\n            <td >{{InnerTransferInSettlement.needIncomeMoney}}</td>\r\n            <td  name="blancerealNeedPayMoney">{{InnerTransferInSettlement.realNeedIncomeMoney}}</td>\r\n            <td  name="blancerealrealPayedMoney">{{InnerTransferInSettlement.realIncomeMoney}}</td>\r\n            <td  name="blanceunPayedMoney">{{InnerTransferInSettlement.unIncomedMoney}}</td>\r\n            <td  name="blancerealrealUnPayedMoney">{{InnerTransferInSettlement.checkUnIncomeMoney}}</td>\r\n            <td  name="backMoney">{{InnerTransferInSettlement.backMoney}}</td>\r\n            <td  name="backMoney">{{InnerTransferInSettlement.realUnIncomeMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealIncomeMoney" type="text" maxlength="9"></td>\r\n            <td style="width:120px;">\r\n                    <select style="text-align:center" name="blancePayType">\r\n                        <option value="" selected="selected">请选择...</option>\r\n                        <option value="转账">转账</option>\r\n                        <option value="在线支收">在线支收</option>\r\n                        <option value="线下收款">线下收款</option>\r\n                    </select>\r\n              </td>\r\n            <td class="col-sm-1" ><input name="blancerealRemark" type="text"  maxlenght="1000"></td>\r\n            <td>\r\n               {{if InnerTransferInSettlement.allCount != InnerTransferInSettlement.checkedCount}}\r\n                  <span style="color:#ff9900"> {{InnerTransferInSettlement.checkedCount}}{{"/"}}{{InnerTransferInSettlement.allCount}}</span>\r\n             {{/if}}\r\n             {{if InnerTransferInSettlement.allCount == InnerTransferInSettlement.checkedCount}}\r\n                  <span style="color:green"> {{InnerTransferInSettlement.checkedCount}}{{"/"}}{{InnerTransferInSettlement.allCount}}</span>\r\n             {{/if}}\r\n            </td>\r\n            <td style="width:220px">\r\n               <a data-entity-id="{{InnerTransferInSettlement.id}}" data-entity-year="{{InnerTransferInSettlement.year}}"  data-entity-month="{{InnerTransferInSettlement.month}}" class="cursor btn-transferBlance-save">\r\n                      保存\r\n               </a><a class="cursor" > |</a>\r\n               <a data-entity-year="{{InnerTransferInSettlement.year}}" data-entity-month="{{InnerTransferInSettlement.month}}"  class="cursor btn-restaurantBlance-checkDetail">\r\n                      对账明细\r\n               </a>\r\n            </td>\r\n        </tr>\r\n    {{/each}} \r\n    </tbody>\r\n  </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});