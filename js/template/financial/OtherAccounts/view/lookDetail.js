/*TMODJS:{"debug":true,"version":52,"md5":"0711f868d5632c44582a631c5649dd1f"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/lookDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, paymentDetailsList = $data.paymentDetailsList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>付款类别</th> <th>发生业务</th> <th>付款方</th> <th>金额</th> <th>付款方式</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 13, $each(paymentDetailsList, function(item) {
                $out += " <tr> <td>", $line = 15, $out += $escape(item.receivableType), $out += "}</td> <td>", 
                $line = 16, $out += $escape(item.businessType), $out += "}</td> <td>", $line = 17, 
                $out += $escape(item.payParty), $out += "}</td> <td>", $line = 18, $out += $escape(item.payDifferenceMoney), 
                $out += "}</td> <td>", $line = 19, $out += $escape(item.payType), $out += "}</td> <td>", 
                $line = 20, $out += $escape(item.remark), $out += "}</td> <td>", $line = 21, $out += $escape(item.checkRealname), 
                $out += "}</td> <td>", $line = 22, $out += $escape(item.checkTime), $out += "}</td> </tr> ", 
                $line = 24;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n	<tr>\r\n		<th>付款类别</th>\r\n		<th>发生业务</th>\r\n		<th>付款方</th>\r\n		<th>金额</th>\r\n		<th>付款方式</th>\r\n		<th>备注</th>\r\n		<th>操作人</th>\r\n		<th>操作时间</th>\r\n	</tr>\r\n	{{each paymentDetailsList as item}}\r\n	<tr>\r\n		<td>{{item.receivableType}}}</td>\r\n		<td>{{item.businessType}}}</td>\r\n		<td>{{item.payParty}}}</td>\r\n		<td>{{item.payDifferenceMoney}}}</td>\r\n		<td>{{item.payType}}}</td>\r\n		<td>{{item.remark}}}</td> \r\n		<td>{{item.checkRealname}}}</td>\r\n		<td>{{item.checkTime}}}</td>\r\n	</tr>\r\n	{{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});