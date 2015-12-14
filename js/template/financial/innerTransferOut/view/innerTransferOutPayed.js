/*TMODJS:{"debug":true,"version":5,"md5":"973eef8cd7526ea090cb38bda314b8b1"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutPayed", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, payedRecordList = $data.payedRecordList, $escape = ($data.payedRecord, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">备注</th> <th class="th-border">操作者</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 16, $each(payedRecordList, function(payedRecord) {
                $out += " <tr> <td>", $line = 18, $out += $escape(payedRecord.receivableType), $out += "</td> <td>", 
                $line = 19, $out += $escape(payedRecord.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(payedRecord.payParty), $out += "</td> <td>", $line = 21, $out += $escape(payedRecord.payDifferenceMoney), 
                $out += "</td> <td>", $line = 22, $out += $escape(payedRecord.payType), $out += "</td> <td>", 
                $line = 23, $out += $escape(payedRecord.remark), $out += "</td> <td>", $line = 24, 
                $out += $escape(payedRecord.checkRealname), $out += "</td> <td>", $line = 25, $out += $escape($helpers.dateFormat(payedRecord.checkTime, "yyyy-MM-dd")), 
                $out += "</td> </tr> ", $line = 27;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">付款类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">付款方</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">付款方式</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作者</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each payedRecordList as payedRecord}}\r\n			<tr>\r\n				<td>{{payedRecord.receivableType}}</td>\r\n				<td>{{payedRecord.businessType}}</td>\r\n				<td>{{payedRecord.payParty}}</td>\r\n				<td>{{payedRecord.payDifferenceMoney}}</td>\r\n				<td>{{payedRecord.payType}}</td>\r\n				<td>{{payedRecord.remark}}</td>\r\n				<td>{{payedRecord.checkRealname}}</td>\r\n				<td>{{payedRecord.checkTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n			</tr>\r\n		{{/each}} \r\n		</tbody> \r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});