/*TMODJS:{"debug":true,"version":19,"md5":"9e3049edf883e13ee976dcc57ca5d7cf"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutPayed", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, payedRecordList = $data.payedRecordList, $escape = ($data.payedRecord, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">账户名称</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 17, $each(payedRecordList, function(payedRecord) {
                $out += " <tr> <td>", $line = 19, $out += $escape(payedRecord.receivableType), $out += "</td> <td>", 
                $line = 20, $out += $escape(payedRecord.businessType), $out += "</td> <td>", $line = 21, 
                $out += $escape(payedRecord.payParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 22, $out += $escape(payedRecord.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 23, 0 == payedRecord.payType ? ($out += " 现金 ", $line = 25) : 1 == payedRecord.payType ? ($out += " 银行转账 ", 
                $line = 27) : 2 == payedRecord.payType ? ($out += " 网上支付 ", $line = 29) : 3 == payedRecord.payType ? ($out += " 支票 ", 
                $line = 31) : 4 == payedRecord.payType && ($out += " 其他 ", $line = 33), $out += "</td> <td>", 
                $line = 34, null == payedRecord.accountName || "" == payedRecord.accountName ? ($out += "-", 
                $line = 34) : ($line = 34, $out += $escape(payedRecord.accountName), $line = 34), 
                $out += "</td> <td>", $line = 35, $out += $escape(payedRecord.remark), $out += "</td> <td>", 
                $line = 36, $out += $escape(payedRecord.checkRealname), $out += "</td> <td>", $line = 37, 
                $out += $escape($helpers.dateFormat(payedRecord.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 39;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">付款类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">付款方</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">付款方式</th>\r\n				<th class="th-border">账户名称</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each payedRecordList as payedRecord}}\r\n			<tr>\r\n				<td>{{payedRecord.receivableType}}</td>\r\n				<td>{{payedRecord.businessType}}</td>\r\n				<td>{{payedRecord.payParty}}</td>\r\n				<td><span class="F-float F-money">{{payedRecord.payDifferenceMoney}}</span></td>\r\n				<td>{{if payedRecord.payType == 0}}\r\n					现金\r\n				{{else if payedRecord.payType == 1}}\r\n					银行转账\r\n				{{else if payedRecord.payType == 2}}\r\n					网上支付\r\n				{{else if payedRecord.payType == 3}}\r\n					支票\r\n				{{else if payedRecord.payType == 4}}\r\n					其他\r\n				{{/if}}</td>\r\n				<td>{{if payedRecord.accountName == null || payedRecord.accountName == ""}}-{{else}}{{payedRecord.accountName}}{{/if}}</td>\r\n				<td>{{payedRecord.remark}}</td>\r\n				<td>{{payedRecord.checkRealname}}</td>\r\n				<td>{{payedRecord.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}} \r\n		</tbody> \r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});