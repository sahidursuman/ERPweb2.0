/*TMODJS:{"debug":true,"version":80,"md5":"338965a295e0703b187f234306665d87"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/guideAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, guideArranges = $data.guideArranges, $escape = ($data.rs, 
            $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">导游预支金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-count-guide"> ', 
            $line = 16, $each(guideArranges, function(rs) {
                $out += ' <tr arrangeid = "', $line = 17, $out += $escape(rs.id), $out += '" isAccountGuide = "', 
                $line = 17, $out += $escape(rs.isAccountGuide), $out += '"> <td><input disabled="disabled" type="radio" name="" ', 
                $line = 18, 1 == rs.isAccountGuide && ($out += 'checked="checked"', $line = 18), 
                $out += "/></td> <td>", $line = 19, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 20, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td> ", $line = 22, 0 == rs.taskType ? ($out += " 全程 ", $line = 24) : 1 == rs.taskType ? ($out += " 接机 ", 
                $line = 26) : 2 == rs.taskType ? ($out += " 送机 ", $line = 28) : 3 == rs.taskType ? ($out += " 前段 ", 
                $line = 30) : 4 == rs.taskType ? ($out += " 中段 ", $line = 32) : 5 == rs.taskType && ($out += " 后段 ", 
                $line = 34), $out += " </td> <td>", $line = 36, $out += $escape(rs.guide.realname), 
                $out += "</td> <td>", $line = 37, 1 == rs.isAccountGuide ? ($out += '<input name="price" class="F-float F-money" value="', 
                $line = 37, $out += $escape(rs.price), $out += '" type="text">', $line = 37) : ($out += ' <span class="F-float F-money">', 
                $line = 38, $out += $escape(rs.price), $out += "</span>", $line = 38), $out += "</td> <td>", 
                $line = 39, 1 == rs.isAccountGuide ? ($out += '<input name="manageFee" class="F-float F-money" value="', 
                $line = 39, $out += $escape(rs.manageFee), $out += '" type="text" >', $line = 39) : ($out += '<span class="F-float F-money">', 
                $line = 39, $out += $escape(rs.manageFee), $out += "</span>", $line = 39), $out += '</td> <td><span class="F-float F-money">', 
                $line = 40, $out += $escape(rs.guideAllPreMoney), $out += "</span></td> <td>", $line = 41, 
                $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 43;
            }), $out += " </tbody> </table> ", $line = 47, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 51, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 51), $out += ' type="text" style="width:30%;" value="', $line = 51, remarkArrangeList.guideRemark.length > 0 && ($line = 51, 
            $out += $escape(remarkArrangeList.guideRemark[0].opCheckRemark), $line = 51), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 54, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 54), $out += ' type="text" style="width:30%;" value="', $line = 54, remarkArrangeList.guideRemark.length > 0 && ($line = 54, 
            $out += $escape(remarkArrangeList.guideRemark[0].financeCheckRemark), $line = 54), 
            $out += '" /> </div> </div> ', $line = 57), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n        <th class="th-border">结束日期</th>\r\n        <th class="th-border">任务</th>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">导服费</th>\r\n        <th class="th-border">管理费</th>\r\n        <th class="th-border">导游预支金额</th>\r\n        <th class="th-border">备注</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-guide">\r\n    {{each guideArranges as rs index}}\r\n        <tr arrangeid = "{{rs.id}}" isAccountGuide = "{{rs.isAccountGuide}}">\r\n            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>\r\n                {{if rs.taskType == 0}}\r\n                    全程\r\n                {{else if rs.taskType == 1}}\r\n                    接机\r\n                {{else if rs.taskType == 2}}\r\n                    送机\r\n                {{else if rs.taskType == 3}}\r\n                    前段\r\n                {{else if rs.taskType == 4}}\r\n                    中段\r\n                {{else if rs.taskType == 5}}\r\n                    后段\r\n                {{/if}}\r\n            </td>\r\n            <td>{{rs.guide.realname}}</td>\r\n            <td>{{if rs.isAccountGuide == 1}}<input name="price" class="F-float F-money" value="{{rs.price}}" type="text">{{else}}\r\n            <span class="F-float F-money">{{rs.price}}</span>{{/if}}</td>\r\n            <td>{{if rs.isAccountGuide == 1}}<input name="manageFee" class="F-float F-money" value="{{rs.manageFee}}" type="text" >{{else}}<span class="F-float F-money">{{rs.manageFee}}</span>{{/if}}</td>\r\n            <td><span class="F-float F-money">{{rs.guideAllPreMoney}}</span></td>\r\n            <td>{{rs.remark}}</td>\r\n        </tr>\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});