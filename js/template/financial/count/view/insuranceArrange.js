/*TMODJS:{"debug":true,"version":120,"md5":"5a4984a73fa8135a15632280f100bf87"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/insuranceArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, insuranceArrange = $data.insuranceArrange, $escape = ($data.arrange, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>保险公司</th> <th>险种</th> <th>单价</th> <th>数量</th> <th>应付</th> <th>社付</th> <th>对账状态</th> </tr> </thead> <tbody class="T-count-insurance"> ', 
            $line = 14, $each(insuranceArrange, function(arrange) {
                $out += ' <tr data-id="', $line = 15, $out += $escape(arrange.insuranceId), $out += '" data-name="', 
                $line = 15, $out += $escape(arrange.name), $out += '" data-type="insurance" data-start="', 
                $line = 15, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
                $out += '" data-end="', $line = 15, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                $out += '"> <input name="sumIpt" type="hidden"> <td>', $line = 17, $out += $escape(arrange.name), 
                $out += "</td> <td>", $line = 18, $out += $escape(arrange.type), $out += '</td> <td><span class="F-float F-money">', 
                $line = 19, $out += $escape(arrange.realPrice), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 20, $out += $escape(arrange.realCount), $out += '</span></td> <td> <span class="F-float F-money realNeedPayMoney">', 
                $line = 22, $out += $escape(arrange.realNeedPayMoney), $out += '</span> <input name="realNeedPayMoney" value="', 
                $line = 23, $out += $escape(arrange.realNeedPayMoney), $out += '" type="hidden" /> </td> <td><span class="F-float F-money">', 
                $line = 25, $out += $escape(arrange.payedMoney), $out += "</span></td> <td> ", $line = 27, 
                0 == arrange.isConfirmAccount ? ($out += ' <a class="R-right ', $line = 28, 1 == editStatus ? ($out += "T-toAccount T-check", 
                $line = 28) : ($out += "black", $line = 28), $out += '" data-right="1270002">未对账</a> ', 
                $line = 29) : ($out += ' <a class="R-right ', $line = 30, 1 == editStatus ? ($out += "T-toAccount T-clear", 
                $line = 30) : ($out += "black", $line = 30), $out += '" data-right="1270005|1270003">已对账</a> ', 
                $line = 31), $out += " </td> </tr> ", $line = 34;
            }), $out += " </tbody> </table> ", $line = 38, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div arrangeType="insure"> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 42, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 42), $out += ' type="text" style="width:30%;" value="', $line = 42, remarkArrangeList.insuranceRemark.length > 0 && ($line = 42, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].opCheckRemark), $line = 42), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 44, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 44), $out += ' type="text" style="width:30%;" value="', $line = 44, remarkArrangeList.insuranceRemark.length > 0 && ($line = 44, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark), $line = 44), 
            $out += '" /> </div> </div> ', $line = 47), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>保险公司</th>\r\n            <th>险种</th>\r\n            <th>单价</th>\r\n            <th>数量</th>\r\n            <th>应付</th>\r\n            <th>社付</th>\r\n            <th>对账状态</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-count-insurance">\r\n        {{each insuranceArrange as arrange}}\r\n            <tr data-id="{{arrange.insuranceId}}" data-name="{{arrange.name}}" data-type="insurance" data-start="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" data-end="{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                <input name="sumIpt" type="hidden">\r\n                <td>{{arrange.name}}</td>\r\n                <td>{{arrange.type}}</td>\r\n                <td><span class="F-float F-money">{{arrange.realPrice}}</span></td>\r\n                <td><span class="F-float F-count">{{arrange.realCount}}</span></td>\r\n                <td>\r\n                    <span class="F-float F-money realNeedPayMoney">{{arrange.realNeedPayMoney}}</span>\r\n                    <input name="realNeedPayMoney" value="{{arrange.realNeedPayMoney}}" type="hidden" />\r\n                </td>\r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                <td>\r\n                    {{if arrange.isConfirmAccount == 0}}\r\n                        <a class="R-right {{if editStatus == 1}}T-toAccount T-check{{else}}black{{/if}}" data-right="1270002">未对账</a>\r\n                    {{else}}\r\n                        <a class="R-right {{if editStatus == 1}}T-toAccount T-clear{{else}}black{{/if}}" data-right="1270005|1270003">已对账</a>\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div arrangeType="insure"> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});