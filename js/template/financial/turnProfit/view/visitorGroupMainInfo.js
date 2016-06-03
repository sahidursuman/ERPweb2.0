/*TMODJS:{"debug":true,"version":158,"md5":"4b2e48a3bb80022b468cb220d86e27fc"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/visitorGroupMainInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, income = $data.income, $escape = ($data.detail, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">金额</th> <th class="th-border">备注</th> <th class="th-border">操作者</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(income, function(detail) {
                $out += " <tr> <td>", $line = 16, $out += $escape(detail.receivableType.name), $out += "</td> <td>", 
                $line = 17, $out += $escape(detail.businessType.name), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(detail.incomeMoney), $out += "</span></td> <td>", $line = 19, 
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
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n			<tr>\r\n				<th class="th-border">应付类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作者</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each income as detail}}\r\n			<tr>\r\n				<td>{{detail.receivableType.name}}</td>\r\n				<td>{{detail.businessType.name}}</td>\r\n				<td><span class="F-float F-money">{{detail.incomeMoney}}</span></td>\r\n				<td>{{detail.remark}}</td>\r\n				<td>{{detail.user.realName}}</td>\r\n				<td>{{detail.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});