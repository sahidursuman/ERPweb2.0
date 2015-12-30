/*TMODJS:{"debug":true,"version":23,"md5":"6d29bd09340250c00be37234ea928a88"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/viewhandle", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, reconciliationDetailsList = $data.reconciliationDetailsList, $escape = ($data.handle, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>应付类别</th> <th>发生业务</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>结算金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 15, $each(reconciliationDetailsList, function(handle) {
                $out += " <tr> <td>", $line = 17, $out += $escape(handle.receivableType), $out += "</td> <td>", 
                $line = 18, $out += $escape(handle.businessType), $out += "</td> <td>", $line = 19, 
                $out += $escape(handle.price), $out += "</td> <td>", $line = 20, $out += $escape(handle.count), 
                $out += "</td> <td>", $line = 21, $out += $escape(handle.reduceMoney), $out += "</td> <td>", 
                $line = 22, $out += $escape(handle.needPayMoney), $out += "</td> <td>", $line = 23, 
                $out += $escape(handle.settlementMoney), $out += "</td> <td>", $line = 24, $out += $escape(handle.remark), 
                $out += "</td> <td>", $line = 25, $out += $escape(handle.checkRealname), $out += "</td> <td>", 
                $line = 26, $out += $escape(handle.checkTime), $out += "</td> </tr> ", $line = 28;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n    <tr>\r\n        <th>应付类别</th>\r\n        <th>发生业务</th>\r\n        <th>单价</th>\r\n        <th>数量</th>\r\n        <th>优惠</th>\r\n        <th>账面应付</th>\r\n        <th>结算金额</th>\r\n        <th>备注</th>\r\n        <th>操作人</th>\r\n        <th>操作时间</th>\r\n    </tr>\r\n    {{each reconciliationDetailsList as handle}}\r\n    <tr>\r\n        <td>{{handle.receivableType}}</td>\r\n        <td>{{handle.businessType}}</td>\r\n        <td>{{handle.price}}</td>\r\n        <td>{{handle.count}}</td>\r\n        <td>{{handle.reduceMoney}}</td>\r\n        <td>{{handle.needPayMoney}}</td>\r\n        <td>{{handle.settlementMoney}}</td>\r\n        <td>{{handle.remark}}</td>\r\n        <td>{{handle.checkRealname}}</td>\r\n        <td>{{handle.checkTime}}</td> \r\n    </tr>\r\n    {{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});