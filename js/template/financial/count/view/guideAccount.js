/*TMODJS:{"debug":true,"version":55,"md5":"6727a29e81813abb5a59d8590350d2f2"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/guideAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, guideArranges = $data.guideArranges, $escape = ($data.rs, 
            $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">导游预支金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-count-guide"> ', 
            $line = 16, $each(guideArranges, function(rs) {
                $out += ' <tr guideid = "', $line = 17, $out += $escape(rs.guide.id), $out += '" isAccountGuide = "', 
                $line = 17, $out += $escape(rs.isAccountGuide), $out += '"> <td><input disabled="disabled" type="radio" name="" ', 
                $line = 18, 1 == rs.isAccountGuide && ($out += 'checked="checked"', $line = 18), 
                $out += "/></td> <td>", $line = 19, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 20, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td> ", $line = 22, 0 == rs.taskType ? ($out += " 全程 ", $line = 24) : 1 == rs.taskType ? ($out += " 接机 ", 
                $line = 26) : 2 == rs.taskType ? ($out += " 送机 ", $line = 28) : 3 == rs.taskType ? ($out += " 前段 ", 
                $line = 30) : 4 == rs.taskType ? ($out += " 中段 ", $line = 32) : 5 == rs.taskType && ($out += " 后段 ", 
                $line = 34), $out += " </td> <td>", $line = 36, $out += $escape(rs.guide.realname), 
                $out += "</td> <td>", $line = 37, 1 == rs.isAccountGuide ? ($out += '<input name="price" value="', 
                $line = 37, $out += $escape(rs.price), $out += '" type="text">', $line = 37) : ($line = 37, 
                $out += $escape(rs.price), $line = 37), $out += "</td> <td>", $line = 38, 1 == rs.isAccountGuide ? ($out += '<input name="manageFee" value="', 
                $line = 38, $out += $escape(rs.manageFee), $out += '" type="text">', $line = 38) : ($line = 38, 
                $out += $escape(rs.manageFee), $line = 38), $out += "</td> <td>", $line = 39, $out += $escape(rs.guideAllPreMoney), 
                $out += "</td> <td>", $line = 40, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 42;
            }), $out += " </tbody> </table> ", $line = 46, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 50, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 50), $out += ' type="text" style="width:30%;" value="', $line = 50, null != remarkArrangeList[8] && ($line = 50, 
            $out += $escape(remarkArrangeList[8].opCheckRemark), $line = 50), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 53, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 53), $out += ' type="text" style="width:30%;" value="', $line = 53, null != remarkArrangeList[8] && ($line = 53, 
            $out += $escape(remarkArrangeList[8].financeCheckRemark), $line = 53), $out += '" /> </div> </div> ', 
            $line = 56), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n        <th class="th-border">结束日期</th>\r\n        <th class="th-border">任务</th>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">导服费</th>\r\n        <th class="th-border">管理费</th>\r\n        <th class="th-border">导游预支金额</th>\r\n        <th class="th-border">备注</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-guide">\r\n    {{each guideArranges as rs index}}\r\n        <tr guideid = "{{rs.guide.id}}" isAccountGuide = "{{rs.isAccountGuide}}">\r\n            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>\r\n                {{if rs.taskType == 0}}\r\n                    全程\r\n                {{else if rs.taskType == 1}}\r\n                    接机\r\n                {{else if rs.taskType == 2}}\r\n                    送机\r\n                {{else if rs.taskType == 3}}\r\n                    前段\r\n                {{else if rs.taskType == 4}}\r\n                    中段\r\n                {{else if rs.taskType == 5}}\r\n                    后段\r\n                {{/if}}\r\n            </td>\r\n            <td>{{rs.guide.realname}}</td>\r\n            <td>{{if rs.isAccountGuide == 1}}<input name="price" value="{{rs.price}}" type="text">{{else}}{{rs.price}}{{/if}}</td>\r\n            <td>{{if rs.isAccountGuide == 1}}<input name="manageFee" value="{{rs.manageFee}}" type="text">{{else}}{{rs.manageFee}}{{/if}}</td>\r\n            <td>{{rs.guideAllPreMoney}}</td>\r\n            <td>{{rs.remark}}</td>\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});