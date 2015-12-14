/*TMODJS:{"debug":true,"version":8,"md5":"8f6c1a402b31d480e0c7390c1f7427da"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/viewOrderDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, reconciliationDetailsList = $data.reconciliationDetailsList, $escape = ($data.order, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>应付类别</th> <th>发生业务</th> <th>金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 11, $each(reconciliationDetailsList, function(order) {
                $out += " <tr> <td>", $line = 13, $out += $escape(order.receivableType), $out += "}</td> <td>", 
                $line = 14, $out += $escape(order.businessType), $out += "}</td> <td>", $line = 15, 
                $out += $escape(order.payDifferenceMoney), $out += "}</td> <td>", $line = 16, $out += $escape(order.remark), 
                $out += "}</td> <td>", $line = 17, $out += $escape(order.checkRealname), $out += "}</td> <td>", 
                $line = 18, $out += $escape(order.checkTime), $out += "}</td> </tr> ", $line = 20;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n    <tr>\r\n        <th>应付类别</th>\r\n        <th>发生业务</th>\r\n        <th>金额</th>\r\n        <th>备注</th>\r\n        <th>操作人</th>\r\n        <th>操作时间</th>\r\n    </tr>\r\n    {{each reconciliationDetailsList as order}}\r\n    <tr>\r\n        <td>{{order.receivableType}}}</td>\r\n        <td>{{order.businessType}}}</td>\r\n        <td>{{order.payDifferenceMoney}}}</td>\r\n        <td>{{order.remark}}}</td>\r\n        <td>{{order.checkRealname}}}</td>\r\n        <td>{{order.checkTime}}}</td> \r\n    </tr>\r\n    {{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});