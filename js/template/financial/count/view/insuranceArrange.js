/*TMODJS:{"debug":true,"version":75,"md5":"de66219e90e61c3452371ed8a4d75c4f"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/insuranceArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, insuranceArrange = $data.insuranceArrange, $escape = ($data.arrange, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> <th class="th-border">对账状态</th> </tr> </thead> <tbody class="T-count-insurance"> ', 
            $line = 15, $each(insuranceArrange, function(arrange) {
                $out += " <tr> <td>", $line = 17, $out += $escape(arrange.name), $out += "</td> <td>", 
                $line = 18, $out += $escape(arrange.type), $out += '</td> <td><span class="F-float F-money">', 
                $line = 19, $out += $escape(arrange.realPrice), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 20, $out += $escape(arrange.realCount), $out += '</span></td> <td> <span class="F-float F-money realNeedPayMoney">', 
                $line = 22, $out += $escape(arrange.realNeedPayMoney), $out += '</span> <input name="realNeedPayMoney" value="', 
                $line = 23, $out += $escape(arrange.realNeedPayMoney), $out += '" type="hidden" /> </td> <td><span class="F-float F-money">', 
                $line = 25, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 26, 
                $out += $escape(arrange.payedMoney), $out += "</td> <td> ", $line = 28, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", 
                $line = 30) : ($out += " 已对账 ", $line = 32), $out += " </td> </tr> ", $line = 35;
            }), $out += " </tbody> </table> ", $line = 39, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 43, isFinance || ($out += 'readonly="readonly"', $line = 43), $out += ' type="text" style="width:30%;" value="', 
            $line = 43, remarkArrangeList.insuranceRemark.length > 0 && ($line = 43, $out += $escape(remarkArrangeList.insuranceRemark[0].opCheckRemark), 
            $line = 43), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 46, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 46), $out += ' type="text" style="width:30%;" value="', $line = 46, remarkArrangeList.insuranceRemark.length > 0 && ($line = 46, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark), $line = 46), 
            $out += '" /> </div> </div> ', $line = 49), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border">保险公司</th>\r\n            <th class="th-border">险种</th>\r\n            <th class="th-border">单价</th>\r\n            <th class="th-border">数量</th>\r\n            <th class="th-border">应付</th>\r\n            <th class="th-border">已付</th>\r\n            <th class="th-border">导游报账备注</th>\r\n            <th class="th-border">对账状态</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-count-insurance">\r\n        {{each insuranceArrange as arrange}}\r\n            <tr>\r\n                <td>{{arrange.name}}</td>\r\n                <td>{{arrange.type}}</td>\r\n                <td><span class="F-float F-money">{{arrange.realPrice}}</span></td>\r\n                <td><span class="F-float F-count">{{arrange.realCount}}</span></td>\r\n                <td>\r\n                    <span class="F-float F-money realNeedPayMoney">{{arrange.realNeedPayMoney}}</span>\r\n                    <input name="realNeedPayMoney" value="{{arrange.realNeedPayMoney}}" type="hidden" />\r\n                </td>\r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                <td>{{arrange.payedMoney}}</td>\r\n                <td>\r\n                    {{if arrange.isConfirmAccount == 0}}\r\n                        未对账\r\n                    {{else}}\r\n                        已对账\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if  !isFinance}}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});