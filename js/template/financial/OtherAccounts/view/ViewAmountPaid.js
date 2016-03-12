/*TMODJS:{"debug":true,"version":18,"md5":"2af426f912f3e4fce99c7ec762b2e4c4"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/ViewAmountPaid", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, paymentDetailsList = $data.paymentDetailsList, $escape = ($data.paid, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>付款类别</th> <th>发生业务</th> <th>付款方</th> <th>金额</th> <th>付款方式</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 13, $each(paymentDetailsList, function(paid) {
                $out += " <tr> <td>", $line = 15, $out += $escape(paid.receivableType), $out += "</td> <td>", 
                $line = 16, $out += $escape(paid.businessType), $out += '</td> <td class="F-float F-money">', 
                $line = 17, $out += $escape(paid.payParty), $out += '</td> <td class="F-float F-money">', 
                $line = 18, $out += $escape(paid.payDifferenceMoney), $out += "</td> <td>", $line = 19, 
                "社付" == paid.payParty ? ($line = 19, $out += $escape($helpers.getPayTypeText(paid.payType)), 
                $line = 19) : ($line = 19, $out += $escape($helpers.getPlanPayTypeText(paid.payType)), 
                $line = 19), $out += "</td> <td>", $line = 20, $out += $escape(paid.remark), $out += "</td> <td>", 
                $line = 21, $out += $escape(paid.checkRealname), $out += "</td> <td>", $line = 22, 
                $out += $escape(paid.checkTime), $out += "</td> </tr> ", $line = 24;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n	<tr>\r\n		<th>付款类别</th>\r\n		<th>发生业务</th>\r\n		<th>付款方</th>\r\n		<th>金额</th>\r\n		<th>付款方式</th>\r\n		<th>备注</th>\r\n		<th>操作人</th>\r\n		<th>操作时间</th>\r\n	</tr>\r\n	{{each paymentDetailsList as paid}}\r\n	<tr>\r\n		<td>{{paid.receivableType}}</td>\r\n		<td>{{paid.businessType}}</td>\r\n		<td class="F-float F-money">{{paid.payParty}}</td>\r\n		<td class="F-float F-money">{{paid.payDifferenceMoney}}</td>\r\n        <td>{{if paid.payParty == \'社付\'}}{{paid.payType | getPayTypeText}}{{else}}{{paid.payType | getPlanPayTypeText}}{{/if}}</td>\r\n		<td>{{paid.remark}}</td> \r\n		<td>{{paid.checkRealname}}</td>\r\n		<td>{{paid.checkTime}}</td>\r\n	</tr>\r\n	{{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});