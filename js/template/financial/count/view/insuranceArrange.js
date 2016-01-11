/*TMODJS:{"debug":true,"version":25,"md5":"deef0463536e476126ffdee9244740d6"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/insuranceArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, insuranceArrangeList = $data.insuranceArrangeList, $escape = ($data.insuranceArrange, 
            $data.$index, $utils.$escape), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ', 
            $line = 11, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 11), $out += ' </tr> </thead> <tbody class="T-count-insurance"> ', $line = 15, 
            $each(insuranceArrangeList, function(insuranceArrange) {
                $out += " <tr> <td>", $line = 17, $out += $escape(insuranceArrange.insurance.name), 
                $out += "</td> <td>", $line = 18, null == insuranceArrange.type ? ($line = 18, $out += $escape(insuranceArrange.insurance.name), 
                $line = 18) : ($line = 18, $out += $escape(insuranceArrange.type), $line = 18), 
                $out += '</td> <td><span class="F-float F-money">', $line = 19, $out += $escape(insuranceArrange.price), 
                $out += '</span></td> <td><span class="F-float F-count">', $line = 20, $out += $escape(insuranceArrange.memberCount), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 21, $out += $escape(insuranceArrange.needPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 22, $out += $escape(insuranceArrange.payedMoney), 
                $out += "</span></td> <td></td> </tr> ", $line = 25;
            }), $out += " </tbody> </table> ", $line = 29, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 33, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 33), $out += ' type="text" style="width:30%;" value="', $line = 33, $out += $escape(remarkArrangeList.insuranceRemark[0].opCheckRemark), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 36, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 36), $out += ' type="text" style="width:30%;" value="', $line = 36, $out += $escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark), 
            $out += '" /> </div> </div> ', $line = 39), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border">保险公司</th>\r\n        <th class="th-border">险种</th>\r\n        <th class="th-border">单价</th>\r\n        <th class="th-border">数量</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导游报账备注</th>\r\n        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-insurance">\r\n    {{each insuranceArrangeList as insuranceArrange}}\r\n    <tr>\r\n    <td>{{insuranceArrange.insurance.name}}</td>\r\n    <td>{{if insuranceArrange.type == null}}{{insuranceArrange.insurance.name}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.price}}</span></td>\r\n    <td><span class="F-float F-count">{{insuranceArrange.memberCount}}</span></td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.needPayMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.payedMoney}}</span></td>\r\n    <td></td>\r\n    </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});