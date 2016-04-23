/*TMODJS:{"debug":true,"version":33,"md5":"30f165ff2aca8ae44582ec23f1c9a9db"}*/
define(function(require) {
    return require("../../../template")("financial/transferProfits/view/viewCostDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, financialNeedPays = $data.financialNeedPays, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>应付类别</th> <th>发生业务</th> <th>金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(financialNeedPays, function(rs) {
                $out += " <tr> <td>", $line = 16, null != rs.receivableType && rs.receivableType ? ($line = 16, 
                $out += $escape(rs.receivableType.name), $line = 16) : ($out += "-", $line = 16), 
                $out += "</td> <td>", $line = 17, null != rs.businessType && rs.businessType ? ($line = 17, 
                $out += $escape(rs.businessType.name), $line = 17) : ($out += "-", $line = 17), 
                $out += '</td> <td><span class="F-float F-money">', $line = 18, $out += $escape(rs.payDifferenceMoney), 
                $out += "</span></td> <td>", $line = 19, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 20, rs.user ? ($line = 20, $out += $escape(rs.user.realName), $line = 20) : ($out += "-", 
                $line = 20), $out += "</td> <td>", $line = 21, $out += $escape($helpers.dateTimeFormat(rs.createTime)), 
                $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>应付类别</th>\r\n                <th>发生业务</th>\r\n                <th>金额</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each financialNeedPays as rs}}\r\n			<tr>\r\n			    <td>{{if rs.receivableType == null || !rs.receivableType}}-{{else}}{{rs.receivableType.name}}{{/if}}</td>\r\n			    <td>{{if rs.businessType == null || !rs.businessType}}-{{else}}{{rs.businessType.name}}{{/if}}</td>\r\n			    <td><span class="F-float F-money">{{rs.payDifferenceMoney}}</span></td>\r\n			    <td>{{rs.remark}}</td>\r\n			    <td>{{if !rs.user}}-{{else}}{{rs.user.realName}}{{/if}}</td>\r\n			    <td>{{rs.createTime | dateTimeFormat}}</td>\r\n			</tr>\r\n			{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});