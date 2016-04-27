/*TMODJS:{"debug":true,"version":20,"md5":"fe0de79c9d1ca892516ecf49855d0768"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, checkRecordList = $data.checkRecordList, $escape = ($data.record, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(checkRecordList, function(record) {
                $out += " <tr> <td>", $line = 16, $out += $escape(record.receivableType), $out += "</td> <td>", 
                $line = 17, $out += $escape(record.businessType), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(record.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 19, $out += $escape(record.remark), $out += "</td> <td>", $line = 20, $out += $escape(record.checkRealname), 
                $out += "</td> <td>", $line = 21, $out += $escape($helpers.dateFormat(record.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">应付类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each checkRecordList as record}}\r\n			<tr>\r\n				<td>{{record.receivableType}}</td>\r\n				<td>{{record.businessType}}</td>\r\n				<td><span class="F-float F-money">{{record.payDifferenceMoney}}</span></td>\r\n				<td>{{record.remark}}</td>\r\n				<td>{{record.checkRealname}}</td>\r\n				<td>{{record.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div> \r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});