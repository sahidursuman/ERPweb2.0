/*TMODJS:{"debug":true,"version":33,"md5":"222e5f0bac206e7374e0034f5bb89a75"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInCome", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, receivedDetailsList = $data.receivedDetailsList, $escape = ($data.income, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">收款类别</th> <th class="th-border">发生业务</th> <th class="th-border">收款方</th> <th class="th-border">金额</th> <th class="th-border">收款方式</th> <th class="th-border">账户名称</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 17, $each(receivedDetailsList, function(income) {
                $out += " <tr> <td>", $line = 19, $out += $escape(income.resourceType), $out += "</td> <td>", 
                $line = 20, $out += $escape(income.businessType), $out += "</td> <td>", $line = 21, 
                $out += $escape(income.incomeOrPayParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 22, $out += $escape(income.incomeMoney), $out += "</span></td> <td> ", $line = 24, 
                0 == income.payType ? ($out += " 现金 ", $line = 26) : 1 == income.payType ? ($out += " 银行转账 ", 
                $line = 28) : 2 == income.payType ? ($out += " 网上支付 ", $line = 30) : 3 == income.payType ? ($out += " 支票 ", 
                $line = 32) : 4 == income.payType && ($out += " 其他 ", $line = 34), $out += "</td> <td>", 
                $line = 35, null == income.accountName || "" == income.accountName ? ($out += "-", 
                $line = 35) : ($line = 35, $out += $escape(income.accountName), $line = 35), $out += "</td> <td>", 
                $line = 36, $out += $escape(income.remark), $out += "</td> <td>", $line = 37, $out += $escape(income.creatorName), 
                $out += "</td> <td>", $line = 38, $out += $escape($helpers.dateFormat(income.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 40;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n			<tr>\r\n				<th class="th-border">收款类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">收款方</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">收款方式</th>\r\n				<th class="th-border">账户名称</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each receivedDetailsList as income}}\r\n			<tr>\r\n				<td>{{income.resourceType}}</td>\r\n				<td>{{income.businessType}}</td>\r\n				<td>{{income.incomeOrPayParty}}</td>\r\n				<td><span class="F-float F-money">{{income.incomeMoney}}</span></td>\r\n				<td>\r\n				{{if income.payType == 0}}\r\n					现金\r\n				{{else if income.payType == 1}}\r\n					银行转账\r\n				{{else if income.payType == 2}}\r\n					网上支付\r\n				{{else if income.payType == 3}}\r\n					支票\r\n				{{else if income.payType == 4}}\r\n					其他\r\n				{{/if}}</td>\r\n				<td>{{if income.accountName == null || income.accountName == ""}}-{{else}}{{income.accountName}}{{/if}}</td>\r\n                <td>{{income.remark}}</td>\r\n				<td>{{income.creatorName}}</td>\r\n				<td>{{income.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});