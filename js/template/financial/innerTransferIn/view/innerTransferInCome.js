/*TMODJS:{"debug":true,"version":19,"md5":"839ed1feac594ddd0ecaca72d3000269"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/innerTransferIn/view/innerTransferInCome", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, receivedDetailsList = $data.receivedDetailsList, $escape = ($data.income, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">收款类别</th> <th class="th-border">发生业务</th> <th class="th-border">收款方</th> <th class="th-border">金额</th> <th class="th-border">收款方式</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 16, $each(receivedDetailsList, function(income) {
                $out += " <tr> <td>", $line = 18, $out += $escape(income.resourceType), $out += "</td> <td>", 
                $line = 19, $out += $escape(income.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(income.incomeOrPayParty), $out += "</td> <td>", $line = 21, $out += $escape(income.incomeMoney), 
                $out += "</td> <td> ", $line = 23, 0 == income.payType ? ($out += " 现金 ", $line = 25) : 1 == income.payType ? ($out += " 银行转账 ", 
                $line = 27) : 2 == income.payType ? ($out += " 网上支付 ", $line = 29) : 3 == income.payType ? ($out += " 支票 ", 
                $line = 31) : 4 == income.payType && ($out += " 其他 ", $line = 33), $out += "</td> <td>", 
                $line = 34, $out += $escape(income.remark), $out += "</td> <td>", $line = 35, $out += $escape(income.creatorName), 
                $out += "</td> <td>", $line = 36, $out += $escape($helpers.dateFormat(income.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 38;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">收款类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">收款方</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">收款方式</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each receivedDetailsList as income}}\r\n			<tr>\r\n				<td>{{income.resourceType}}</td>\r\n				<td>{{income.businessType}}</td>\r\n				<td>{{income.incomeOrPayParty}}</td>\r\n				<td>{{income.incomeMoney}}</td>\r\n				<td>\r\n				{{if income.payType == 0}}\r\n					现金\r\n				{{else if income.payType == 1}}\r\n					银行转账\r\n				{{else if income.payType == 2}}\r\n					网上支付\r\n				{{else if income.payType == 3}}\r\n					支票\r\n				{{else if income.payType == 4}}\r\n					其他\r\n				{{/if}}</td>\r\n				<td>{{income.remark}}</td>\r\n				<td>{{income.creatorName}}</td>\r\n				<td>{{income.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});