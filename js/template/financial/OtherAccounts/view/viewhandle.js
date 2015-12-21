/*TMODJS:{"debug":true,"version":21,"md5":"571b542f087b5bea67d49444a29fd075"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/viewhandle", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, reconciliationDetailsList = $data.reconciliationDetailsList, $escape = ($data.handle, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>应付类别</th> <th>发生业务</th> <th>金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 11, $each(reconciliationDetailsList, function(handle) {
                $out += " <tr> <td>", $line = 13, $out += $escape(handle.receivableType), $out += "</td> <td>", 
                $line = 14, $out += $escape(handle.businessType), $out += "</td> <td>", $line = 15, 
                $out += $escape(handle.payDifferenceMoney), $out += "</td> <td>", $line = 16, $out += $escape(handle.remark), 
                $out += "</td> <td>", $line = 17, $out += $escape(handle.checkRealname), $out += "</td> <td>", 
                $line = 18, $out += $escape(handle.checkTime), $out += "</td> </tr> ", $line = 20;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n    <tr>\r\n        <th>应付类别</th>\r\n        <th>发生业务</th>\r\n        <th>金额</th>\r\n        <th>备注</th>\r\n        <th>操作人</th>\r\n        <th>操作时间</th>\r\n    </tr>\r\n    {{each reconciliationDetailsList as handle}}\r\n    <tr>\r\n        <td>{{handle.receivableType}}</td>\r\n        <td>{{handle.businessType}}</td>\r\n        <td>{{handle.payDifferenceMoney}}</td>\r\n        <td>{{handle.remark}}</td>\r\n        <td>{{handle.checkRealname}}</td>\r\n        <td>{{handle.checkTime}}</td> \r\n    </tr>\r\n    {{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});