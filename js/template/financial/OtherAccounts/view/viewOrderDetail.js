/*TMODJS:{"debug":true,"version":14,"md5":"00adb776c5ce9b1e7134e26a7bd5813b"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/viewOrderDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, reconciliationDetailsList = $data.reconciliationDetailsList, $escape = ($data.order, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <tr> <th>应付类别</th> <th>发生业务</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>结算金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> ', 
            $line = 15, $each(reconciliationDetailsList, function(order) {
                $out += " <tr> <td>", $line = 17, $out += $escape(order.receivableType), $out += "</td> <td>", 
                $line = 18, $out += $escape(order.businessType), $out += "</td> <td>", $line = 19, 
                $out += $escape(order.price), $out += "</td> <td>", $line = 20, $out += $escape(order.count), 
                $out += "</td> <td>", $line = 21, $out += $escape(order.reduceMoney), $out += "</td> <td>", 
                $line = 22, $out += $escape(order.needPayMoney), $out += "</td> <td>", $line = 23, 
                $out += $escape(order.settlementMoney), $out += "</td> <td>", $line = 24, $out += $escape(order.remark), 
                $out += "</td> <td>", $line = 25, $out += $escape(order.checkRealname), $out += "</td> <td>", 
                $line = 26, $out += $escape(order.checkTime), $out += "</td> </tr> ", $line = 28;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n    <tr>\r\n        <th>应付类别</th>\r\n        <th>发生业务</th>\r\n        <th>单价</th>\r\n        <th>数量</th>\r\n        <th>优惠</th>\r\n        <th>账面应付</th>\r\n        <th>结算金额</th>\r\n        <th>备注</th>\r\n        <th>操作人</th>\r\n        <th>操作时间</th>\r\n    </tr>\r\n    {{each reconciliationDetailsList as order}}\r\n    <tr>\r\n        <td>{{order.receivableType}}</td>\r\n        <td>{{order.businessType}}</td>\r\n        <td>{{order.price}}</td>\r\n        <td>{{order.count}}</td>\r\n        <td>{{order.reduceMoney}}</td>\r\n        <td>{{order.needPayMoney}}</td>\r\n        <td>{{order.settlementMoney}}</td>\r\n        <td>{{order.remark}}</td>\r\n        <td>{{order.checkRealname}}</td>\r\n        <td>{{order.checkTime}}</td> \r\n    </tr>\r\n    {{/each}}\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});