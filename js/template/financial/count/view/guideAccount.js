/*TMODJS:{"debug":true,"version":38,"md5":"2a30a473d10487a99749ec61453bdeba"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/guideAccount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, $escape = $utils.$escape, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border"><span class="necessary">*</span>管理费</th> <th class="th-border"><span class="necessary">*</span>导游预支金额</th> <th class="th-border"><span class="necessary">*</span>备注</th> ', 
            $line = 13, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 13), $out += ' </tr> </thead> <tbody class="T-count-guide"> <tr > <td><input type="radio" name="" /></td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> </tr> <tr > <td><input type="radio" name="" /></td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> <td>11</td> </tr> </tbody> </table> ', 
            $line = 44, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 48, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 48), $out += ' type="text" style="width:30%;" value="', $line = 48, null != remarkArrangeList[8] && ($line = 48, 
            $out += $escape(remarkArrangeList[8].opCheckRemark), $line = 48), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 51, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 51), $out += ' type="text" style="width:30%;" value="', $line = 51, null != remarkArrangeList[8] && ($line = 51, 
            $out += $escape(remarkArrangeList[8].financeCheckRemark), $line = 51), $out += '" /> </div> </div> ', 
            $line = 54), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n        <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n        <th class="th-border">任务</th>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">导服费</th>\r\n        <th class="th-border"><span class="necessary">*</span>管理费</th>\r\n        <th class="th-border"><span class="necessary">*</span>导游预支金额</th>\r\n        <th class="th-border"><span class="necessary">*</span>备注</th>\r\n        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-guide">\r\n    <tr >\r\n        <td><input type="radio" name="" /></td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n    </tr>\r\n    <tr >\r\n        <td><input type="radio" name="" /></td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n        <td>11</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});