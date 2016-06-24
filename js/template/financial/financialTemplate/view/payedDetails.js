/*TMODJS:{"debug":true,"version":11,"md5":"4ad8e81e22d930c1ab14877b65ff7370"}*/
define(function(require) {
    return require("../../../template")("financial/financialTemplate/view/payedDetails", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += ' <div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">收款类别</th> <th class="th-border">发生业务</th> <th class="th-border">收款方</th> <th class="th-border">金额</th> <th class="th-border">收款方式</th> <th class="th-border">账户名称</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 18, $each(result, function(rs) {
                $out += " <tr><td>", $line = 19, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 19) : ($line = 19, $out += $escape(rs.receivableType), $line = 19), $out += "</td> <td>", 
                $line = 20, null == rs.businessType || "" == rs.businessType ? ($out += "-", $line = 20) : ($line = 20, 
                $out += $escape(rs.businessType), $line = 20), $out += "</td> <td>", $line = 21, 
                null == rs.payParty || "" == rs.payParty ? ($out += "-", $line = 21) : ($line = 21, 
                $out += $escape(rs.payParty), $line = 21), $out += '</td> <td><span class="F-float F-money">', 
                $line = 22, $out += $escape(rs.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 23, "社付" == rs.payParty ? ($line = 23, $out += $escape($helpers.getPayTypeText(rs.payType)), 
                $line = 23) : ($line = 23, $out += $escape($helpers.getPlanPayTypeText(rs.payType)), 
                $line = 23), $out += "</td> <td>", $line = 24, null == rs.accountName || "" == rs.accountName ? ($out += "-", 
                $line = 24) : ($line = 24, $out += $escape(rs.accountName), $line = 24), $out += "</td> <td>", 
                $line = 25, $out += $escape(rs.remark), $out += "</td> <td>", $line = 26, null == rs.checkRealname || "" == rs.checkRealname ? ($out += "-", 
                $line = 26) : ($line = 26, $out += $escape(rs.checkRealname), $line = 26), $out += "</td> <td>", 
                $line = 27, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 27) : ($line = 27, 
                $out += $escape($helpers.dateTimeFormat(rs.checkTime)), $line = 27), $out += "</td> </tr> ", 
                $line = 29;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!-- 已付明细 -->\r\n<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">收款类别</th>\r\n                <th class="th-border">发生业务</th>\r\n                <th class="th-border">收款方</th>\r\n                <th class="th-border">金额</th>\r\n                <th class="th-border">收款方式</th>\r\n                <th class="th-border">账户名称</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each result as rs}}\r\n            <tr><td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType}}{{/if}}</td>\r\n                <td>{{if rs.businessType == null || rs.businessType == ""}}-{{else}}{{rs.businessType}}{{/if}}</td>\r\n                <td>{{if rs.payParty == null || rs.payParty == ""}}-{{else}}{{rs.payParty}}{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.payDifferenceMoney}}</span></td>\r\n                <td>{{if rs.payParty == \'社付\'}}{{rs.payType | getPayTypeText}}{{else}}{{rs.payType | getPlanPayTypeText}}{{/if}}</td>\r\n                <td>{{if rs.accountName == null || rs.accountName == ""}}-{{else}}{{rs.accountName}}{{/if}}</td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{if rs.checkRealname == null || rs.checkRealname == ""}}-{{else}}{{rs.checkRealname}}{{/if}}</td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateTimeFormat}}{{/if}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});