/*TMODJS:{"debug":true,"version":47,"md5":"e7ccc671ff2ae92ac778336da6bef35d"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/insuranceArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, insuranceArrangeList = $data.insuranceArrangeList, $escape = ($data.insuranceArrange, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> </tr> </thead> <tbody class="T-count-insurance"> ', 
            $line = 14, $each(insuranceArrangeList, function(insuranceArrange) {
                $out += " <tr> <td>", $line = 16, $out += $escape(insuranceArrange.insurance.name), 
                $out += "</td> <td>", $line = 17, null == insuranceArrange.type ? ($line = 17, null != insuranceArrange.insuranceItem && ($line = 17, 
                $out += $escape(insuranceArrange.insuranceItem.name), $line = 17), $line = 17) : ($line = 17, 
                $out += $escape(insuranceArrange.type), $line = 17), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(insuranceArrange.price), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 19, $out += $escape(insuranceArrange.memberCount), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 20, $out += $escape(insuranceArrange.needPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 21, $out += $escape(insuranceArrange.payedMoney), $out += "</span></td> <td></td> </tr> ", 
                $line = 24;
            }), $out += " </tbody> </table> ", $line = 28, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 32, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 32), $out += ' type="text" style="width:30%;" value="', $line = 32, remarkArrangeList.insuranceRemark.length > 0 && ($line = 32, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].opCheckRemark), $line = 32), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 35, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 35), $out += ' type="text" style="width:30%;" value="', $line = 35, remarkArrangeList.insuranceRemark.length > 0 && ($line = 35, 
            $out += $escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark), $line = 35), 
            $out += '" /> </div> </div> ', $line = 38), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border">保险公司</th>\r\n        <th class="th-border">险种</th>\r\n        <th class="th-border">单价</th>\r\n        <th class="th-border">数量</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导游报账备注</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-insurance">\r\n    {{each insuranceArrangeList as insuranceArrange}}\r\n    <tr>\r\n    <td>{{insuranceArrange.insurance.name}}</td>\r\n    <td>{{if insuranceArrange.type == null}}{{if insuranceArrange.insuranceItem != null}}{{insuranceArrange.insuranceItem.name}}{{/if}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.price}}</span></td>\r\n    <td><span class="F-float F-count">{{insuranceArrange.memberCount}}</span></td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.needPayMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{insuranceArrange.payedMoney}}</span></td>\r\n    <td></td>\r\n    </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});