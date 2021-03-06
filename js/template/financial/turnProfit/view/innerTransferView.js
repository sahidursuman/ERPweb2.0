/*TMODJS:{"debug":true,"version":17,"md5":"8c2e4c8b9d67dd28bf916c32cd9e6877"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/innerTransferView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, financial = $data.financial, $escape = ($data.detail, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">金额</th> <th class="th-border">备注</th> <th class="th-border">操作者</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(financial, function(detail) {
                $out += " <tr> <td>", $line = 16, detail.receivableType && ($line = 16, $out += $escape(detail.receivableType.name), 
                $line = 16), $out += "</td> <td>", $line = 17, detail.businessType && ($line = 17, 
                $out += $escape(detail.businessType.name), $line = 17), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(detail.payMoney), $out += "</span></td> <td>", $line = 19, 
                $out += $escape(detail.remark), $out += "</td> <td>", $line = 20, $out += $escape(detail.user.realName), 
                $out += "</td> <td>", $line = 21, $out += $escape($helpers.dateFormat(detail.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n			<tr>\r\n				<th class="th-border">应付类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作者</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each financial as detail}}\r\n			<tr>\r\n				<td>{{if detail.receivableType}}{{detail.receivableType.name}}{{/if}}</td>\r\n				<td>{{if detail.businessType}}{{detail.businessType.name}}{{/if}}</td>\r\n				<td><span class="F-float F-money">{{detail.payMoney}}</span></td>\r\n				<td>{{detail.remark}}</td>\r\n				<td>{{detail.user.realName}}</td>\r\n				<td>{{detail.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});