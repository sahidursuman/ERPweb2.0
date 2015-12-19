/*TMODJS:{"debug":true,"version":19,"md5":"a6f162405d6bbc83727f052cdc399f68"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInCheckDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, incomeDetailsList = $data.incomeDetailsList, $escape = ($data.detail, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div style="form-group"> <table class="table table-striped table-bordered table-hover" > <thead> <tr> <th class="th-border">应收类别</th> <th class="th-border">发生业务</th> <th class="th-border">金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(incomeDetailsList, function(detail) {
                $out += " <tr> <td>", $line = 16, $out += $escape(detail.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(detail.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(detail.incomeMoney), $out += "</td> <td>", $line = 19, $out += $escape(detail.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(detail.creatorName), $out += "</td> <td>", 
                $line = 21, $out += $escape($helpers.dateFormat(detail.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="form-group">\r\n	<table class="table table-striped table-bordered table-hover" >\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">应收类别</th>\r\n				<th class="th-border">发生业务</th>\r\n				<th class="th-border">金额</th>\r\n				<th class="th-border">备注</th>\r\n				<th class="th-border">操作人</th>\r\n				<th class="th-border">操作时间</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each incomeDetailsList as detail}}\r\n			<tr>\r\n				<td>{{detail.resourceType}}</td>\r\n				<td>{{detail.businessType}}</td>\r\n				<td>{{detail.incomeMoney}}</td>\r\n				<td>{{detail.remark}}</td>\r\n				<td>{{detail.creatorName}}</td>\r\n				<td>{{detail.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n			</tr>\r\n		{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});