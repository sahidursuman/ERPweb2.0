/*TMODJS:{"debug":true,"version":163,"md5":"61f0157994f227a8de133ff5a6dd0bb2"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/guideAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, guideArrange = $data.guideArrange, $escape = ($data.arrange, 
            $data.index, $utils.$escape), editStatus = ($data.rs, $data.$index, $data.editStatus), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>开始日期</th> <th>结束日期</th> <th>任务</th> <th>导游</th> <th>导服费</th> <th>管理费</th> <th>结算扣款</th> <th>导游预支金额</th> <th>备注</th> <th>对账状态</th> </tr> </thead> <tbody class="T-count-guide"> ', 
            $line = 17, $each(guideArrange.listMap, function(arrange) {
                $out += ' <tr arrangeid = "', $line = 18, $out += $escape(arrange.id), $out += '" isAccountGuide = "', 
                $line = 18, $out += $escape(arrange.isAccountGuide), $out += '"> <td> ', $line = 20, 
                $each(arrange.taskJson, function(rs) {
                    $out += ' <div class="mar-t-5"> ', $line = 22, $out += $escape($helpers.dateFormat(rs.sTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 24;
                }), $out += " </td> <td> ", $line = 27, $each(arrange.taskJson, function(rs) {
                    $out += ' <div class="mar-t-5"> ', $line = 29, $out += $escape($helpers.dateFormat(rs.eTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 31;
                }), $out += " </td> <td> ", $line = 34, $each(arrange.taskJson, function(rs) {
                    $out += ' <div class="mar-t-5"> ', $line = 36, 0 == rs.tType ? ($out += " 全程 ", 
                    $line = 38) : 1 == rs.tType ? ($out += " 接机 ", $line = 40) : 2 == rs.tType ? ($out += " 送机 ", 
                    $line = 42) : 3 == rs.tType ? ($out += " 前段 ", $line = 44) : 4 == rs.tType ? ($out += " 中段 ", 
                    $line = 46) : 5 == rs.tType && ($out += " 后段 ", $line = 48), $out += " </div> ", 
                    $line = 50;
                }), $out += " </td> <td>", $line = 52, $out += $escape(arrange.guideName), $out += "</td> <td> ", 
                $line = 54, 2 == editStatus ? ($out += ' <span class="F-float F-money">', $line = 55, 
                $out += $escape(arrange.price), $out += '</span> <input name="price" value="', $line = 56, 
                $out += $escape(arrange.price), $out += '" type="hidden"> ', $line = 57) : ($out += ' <input name="price" class="F-float F-money w-80" value="', 
                $line = 58, $out += $escape(arrange.price), $out += '" type="text" ', $line = 59, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 59), $out += "> ", 
                $line = 60), $out += " </td> <td> ", $line = 65, 2 == editStatus ? ($out += ' <span class="F-float F-money">', 
                $line = 66, $out += $escape(arrange.manageFee), $out += '</span> <input name="manageFee" value="', 
                $line = 67, $out += $escape(arrange.manageFee), $out += '" type="hidden"> ', $line = 68) : ($out += ' <input name="manageFee" class="F-float F-money w-80" value="', 
                $line = 69, $out += $escape(arrange.manageFee), $out += '" type="text" ', $line = 70, 
                1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 70), $out += "> ", 
                $line = 71), $out += ' </td> <td> <span class="F-float F-money guidePunishMoney">', 
                $line = 75, $out += $escape(arrange.guidePunishMoney), $out += '</span> </td> <td><span class="F-float F-money">', 
                $line = 77, $out += $escape(arrange.guidePreMoney), $out += "</span></td> <td> ", 
                $line = 79, 2 == editStatus ? ($out += " <span>", $line = 80, $out += $escape(arrange.remark), 
                $out += "</span> ", $line = 81) : ($out += ' <input type="text" name="remark" value="', 
                $line = 82, $out += $escape(arrange.remark), $out += '" ', $line = 82, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 82), $out += "/> ", $line = 83), $out += " </td> <td>", $line = 85, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                $line = 85) : ($out += "已对账", $line = 85), $out += "</td> </tr> ", $line = 87;
            }), $out += " </tbody> </table> ", $line = 91, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div arrangeType="guide"> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 95, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 95), $out += ' type="text" style="width:30%;" value="', $line = 95, remarkArrangeList.guideRemark.length > 0 && ($line = 95, 
            $out += $escape(remarkArrangeList.guideRemark[0].opCheckRemark), $line = 95), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 98, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 98), $out += ' type="text" style="width:30%;" value="', $line = 98, remarkArrangeList.guideRemark.length > 0 && ($line = 98, 
            $out += $escape(remarkArrangeList.guideRemark[0].financeCheckRemark), $line = 98), 
            $out += '" /> </div> </div> ', $line = 101), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr class="bg-blur">\r\n        <th>开始日期</th>\r\n        <th>结束日期</th>\r\n        <th>任务</th>\r\n        <th>导游</th>\r\n        <th>导服费</th>\r\n        <th>管理费</th>\r\n        <th>结算扣款</th>\r\n        <th>导游预支金额</th>\r\n        <th>备注</th>\r\n        <th>对账状态</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-guide">\r\n    {{each guideArrange.listMap as arrange index}}\r\n        <tr arrangeid = "{{arrange.id}}" isAccountGuide = "{{arrange.isAccountGuide}}">\r\n            <td>\r\n                {{each arrange.taskJson as rs}}\r\n                    <div class="mar-t-5">\r\n                        {{rs.sTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                    </div>\r\n                {{/each}}\r\n            </td>\r\n            <td>\r\n                {{each arrange.taskJson as rs}}\r\n                    <div class="mar-t-5">\r\n                        {{rs.eTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                    </div>\r\n                {{/each}}\r\n            </td>\r\n            <td>\r\n                {{each arrange.taskJson as rs}}\r\n                    <div class="mar-t-5">\r\n                        {{if rs.tType == 0}}\r\n                            全程\r\n                        {{else if rs.tType == 1}}\r\n                            接机\r\n                        {{else if rs.tType == 2}}\r\n                            送机\r\n                        {{else if rs.tType == 3}}\r\n                            前段\r\n                        {{else if rs.tType == 4}}\r\n                            中段\r\n                        {{else if rs.tType == 5}}\r\n                            后段\r\n                        {{/if}}\r\n                    </div>\r\n                {{/each}}\r\n            </td>\r\n            <td>{{arrange.guideName}}</td>\r\n            <td>\r\n                {{if editStatus == 2}}\r\n                    <span class="F-float F-money">{{arrange.price}}</span>\r\n                    <input name="price"  value="{{arrange.price}}" type="hidden">\r\n                {{else}}\r\n                    <input name="price" class="F-float F-money w-80" value="{{arrange.price}}" type="text" \r\n                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}>\r\n                {{/if}}\r\n                \r\n            </td>\r\n            \r\n            <td>\r\n                {{if editStatus == 2}}\r\n                    <span class="F-float F-money">{{arrange.manageFee}}</span>\r\n                    <input name="manageFee"  value="{{arrange.manageFee}}" type="hidden">\r\n                {{else}}\r\n                    <input name="manageFee" class="F-float F-money w-80" value="{{arrange.manageFee}}" type="text" \r\n                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}>\r\n                {{/if}}\r\n                \r\n            </td>\r\n            <td>\r\n                <span class="F-float F-money guidePunishMoney">{{arrange.guidePunishMoney}}</span>\r\n            </td>\r\n            <td><span class="F-float F-money">{{arrange.guidePreMoney}}</span></td>\r\n            <td>\r\n                {{if editStatus == 2}}\r\n                    <span>{{arrange.remark}}</span>\r\n                {{else}}\r\n                    <input type="text" name="remark" value="{{arrange.remark}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{/if}}\r\n            </td>\r\n            <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div arrangeType="guide"> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});