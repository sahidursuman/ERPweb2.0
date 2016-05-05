/*TMODJS:{"debug":true,"version":83,"md5":"69162e88a674fd74c167360c4d525c5c"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/insuranceArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, insuranceArrange = $data.insuranceArrange, $escape = ($data.arrange, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>保险公司</th> <th>险种</th> <th>单价</th> <th>数量</th> <th>应付</th> <th>社付</th> <th>对账状态</th> </tr> </thead> <tbody class="T-count-insurance"> ', 
            $line = 14, $each(insuranceArrange, function(arrange) {
                $out += " <tr> <td>", $line = 16, $out += $escape(arrange.name), $out += "</td> <td>", 
                $line = 17, $out += $escape(arrange.type), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(arrange.realPrice), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 19, $out += $escape(arrange.realCount), $out += '</span></td> <td> <span class="F-float F-money realNeedPayMoney">', 
                $line = 21, $out += $escape(arrange.realNeedPayMoney), $out += '</span> <input name="realNeedPayMoney" value="', 
                $line = 22, $out += $escape(arrange.realNeedPayMoney), $out += '" type="hidden" /> </td> <td><span class="F-float F-money">', 
                $line = 24, $out += $escape(arrange.payedMoney), $out += "</span></td> <td> ", $line = 26, 
                0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 28) : ($out += " 已对账 ", 
                $line = 30), $out += " </td> </tr> ", $line = 33;
            }), $out += " </tbody> </table> ", $line = 37, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div arrangeType="insure"> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 41, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 41), $out += ' type="text" style="width:30%;" value="', $line = 41, remarkArrangeList.insuranceRemark.length > 0 && ($line = 41, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].opCheckRemark), $line = 41), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 43, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 43), $out += ' type="text" style="width:30%;" value="', $line = 43, remarkArrangeList.insuranceRemark.length > 0 && ($line = 43, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark), $line = 43), 
            $out += '" /> </div> </div> ', $line = 46), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>保险公司</th>\r\n            <th>险种</th>\r\n            <th>单价</th>\r\n            <th>数量</th>\r\n            <th>应付</th>\r\n            <th>社付</th>\r\n            <th>对账状态</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-count-insurance">\r\n        {{each insuranceArrange as arrange}}\r\n            <tr>\r\n                <td>{{arrange.name}}</td>\r\n                <td>{{arrange.type}}</td>\r\n                <td><span class="F-float F-money">{{arrange.realPrice}}</span></td>\r\n                <td><span class="F-float F-count">{{arrange.realCount}}</span></td>\r\n                <td>\r\n                    <span class="F-float F-money realNeedPayMoney">{{arrange.realNeedPayMoney}}</span>\r\n                    <input name="realNeedPayMoney" value="{{arrange.realNeedPayMoney}}" type="hidden" />\r\n                </td>\r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                <td>\r\n                    {{if arrange.isConfirmAccount == 0}}\r\n                        未对账\r\n                    {{else}}\r\n                        已对账\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div arrangeType="insure"> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});