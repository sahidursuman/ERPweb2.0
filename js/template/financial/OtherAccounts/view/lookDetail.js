/*TMODJS:{"debug":true,"version":60,"md5":"87cbaca6a6e8e6a0affad1dc29a457fe"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/lookDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, paymentDetailsList = $data.paymentDetailsList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 16, $each(paymentDetailsList, function(item) {
                $out += " <tr> <td>", $line = 18, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 19, $out += $escape(item.businessType), $out += '</td> <td class="F-float F-money">', 
                $line = 20, $out += $escape(item.payParty), $out += '</td> <td class="F-float F-money">', 
                $line = 21, $out += $escape(item.payDifferenceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 22, $out += $escape($helpers.getPayTypeText(item.payType)), $out += "</td> <td>", 
                $line = 23, $out += $escape(item.remark), $out += "</td> <td>", $line = 24, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 25, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 27;
            }), $out += " </tbody> </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">付款类别</th>\r\n			<th class="th-border">发生业务</th>\r\n			<th class="th-border">付款方</th>\r\n			<th class="th-border">金额</th>\r\n			<th class="th-border">付款方式</th>\r\n			<th class="th-border">备注</th>\r\n			<th class="th-border">操作人</th>\r\n			<th class="th-border">操作时间</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each paymentDetailsList as item}}\r\n		<tr>\r\n			<td>{{item.receivableType}}</td>\r\n			<td>{{item.businessType}}</td>\r\n			<td class="F-float F-money">{{item.payParty}}</td>\r\n			<td class="F-float F-money">{{item.payDifferenceMoney}}</td>\r\n			<td class="F-float F-money">{{item.payType | getPayTypeText}}</td>\r\n			<td>{{item.remark}}</td> \r\n			<td>{{item.checkRealname}}</td>\r\n			<td>{{item.checkTime}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});