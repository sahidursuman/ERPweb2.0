/*TMODJS:{"debug":true,"version":10,"md5":"830a1f1777164787c9a74779d6c8002a"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/innerTransferIn/view/innerTransferInCome", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, receivedDetailsList = $data.receivedDetailsList, $escape = ($data.income, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">收款类别</th> <th class="th-border">发生业务</th> <th class="th-border">收款方</th> <th class="th-border">金额</th> <th class="th-border">收款方式</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 16, $each(receivedDetailsList, function(income) {
                $out += " <tr> <td>", $line = 18, $out += $escape(income.receivableType), $out += "</td> <td>", 
                $line = 19, $out += $escape(income.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(income.incomeOrPayParty), $out += "</td> <td>", $line = 21, $out += $escape(income.incomeDifferenceMoney), 
                $out += "</td> <td>", $line = 22, $out += $escape(income.payType), $out += "</td> <td>", 
                $line = 23, $out += $escape(income.remark), $out += "</td> <td>", $line = 24, $out += $escape(income.checkRealname), 
                $out += "</td> <td>", $line = 25, $out += $escape($helpers.dateFormat(income.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 27;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">收款类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">收款方</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">收款方式</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each receivedDetailsList as income}}\r\n			<tr>\r\n				<td>{{income.receivableType}}</td>\r\n				<td>{{income.businessType}}</td>\r\n				<td>{{income.incomeOrPayParty}}</td>\r\n				<td>{{income.incomeDifferenceMoney}}</td>\r\n				<td>{{income.payType}}</td>\r\n				<td>{{income.remark}}</td>\r\n				<td>{{income.checkRealname}}</td>\r\n				<td>{{income.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});