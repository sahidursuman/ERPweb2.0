/*TMODJS:{"debug":true,"version":17,"md5":"ef6dc8a6c9f6641e6e7a56c7d3dd61cc"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/viewOrderDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, reconciliationDetailsList = $data.reconciliationDetailsList, $escape = ($data.order, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form" onsubmit="return false"> <table class="table table-striped table-bordered table-hover col-sm-11"> <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">结算金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 18, $each(reconciliationDetailsList, function(order) {
                $out += " <tr> <td>", $line = 20, $out += $escape(order.receivableType), $out += "</td> <td>", 
                $line = 21, $out += $escape(order.businessType), $out += "</td> <td>", $line = 22, 
                $out += $escape(order.price), $out += "</td> <td>", $line = 23, $out += $escape(order.count), 
                $out += "</td> <td>", $line = 24, $out += $escape(order.reduceMoney), $out += "</td> <td>", 
                $line = 25, $out += $escape(order.needPayMoney), $out += "</td> <td>", $line = 26, 
                $out += $escape(order.settlementMoney), $out += "</td> <td>", $line = 27, $out += $escape(order.remark), 
                $out += "</td> <td>", $line = 28, $out += $escape(order.checkRealname), $out += "</td> <td>", 
                $line = 29, $out += $escape(order.checkTime), $out += "</td> </tr> ", $line = 31;
            }), $out += " </tbody> </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal T-lookDetail col-sm-12 margin-top" role="form"  onsubmit="return false">\r\n<table class="table table-striped table-bordered table-hover col-sm-11">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border">应付类别</th>\r\n            <th class="th-border">发生业务</th>\r\n            <th class="th-border">单价</th>\r\n            <th class="th-border">数量</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">账面应付</th>\r\n            <th class="th-border">结算金额</th>\r\n            <th class="th-border">备注</th>\r\n            <th class="th-border">操作人</th>\r\n            <th class="th-border">操作时间</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        {{each reconciliationDetailsList as order}}\r\n        <tr>\r\n            <td>{{order.receivableType}}</td>\r\n            <td>{{order.businessType}}</td>\r\n            <td>{{order.price}}</td>\r\n            <td>{{order.count}}</td>\r\n            <td>{{order.reduceMoney}}</td>\r\n            <td>{{order.needPayMoney}}</td>\r\n            <td>{{order.settlementMoney}}</td>\r\n            <td>{{order.remark}}</td>\r\n            <td>{{order.checkRealname}}</td>\r\n            <td>{{order.checkTime}}</td> \r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});