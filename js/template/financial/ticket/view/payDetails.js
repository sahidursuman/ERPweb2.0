/*TMODJS:{"debug":true,"version":3,"md5":"be5752fac870dd65d4cecfe53e024cb7"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/payDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, payedMoneyDetailList = $data.payedMoneyDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>付款类别</td> <td>发生业务</td> <td>付款方</td> <td>金额</td> <td>付款方式</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> </thead> <tbody> ', 
            $line = 16, $each(payedMoneyDetailList, function(item) {
                $out += " <tr> <td>", $line = 18, $out += $escape(item.businessType), $out += "</td> <td>", 
                $line = 19, $out += $escape(item.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(item.incomePart), $out += "</td> <td>", $line = 21, $out += $escape(item.incomeMoney), 
                $out += "</td> <td>", $line = 22, $out += $escape(item.payType), $out += "</td> <td>", 
                $line = 23, $out += $escape(item.remark), $out += "</td> <td>", $line = 24, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 25, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 27;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td>付款类别</td>\r\n                <td>发生业务</td>\r\n                <td>付款方</td>\r\n                <td>金额</td>\r\n                <td>付款方式</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each payedMoneyDetailList as item}}\r\n            <tr>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.incomePart}}</td>\r\n                <td>{{item.incomeMoney}}</td>\r\n                <td>{{item.payType}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.checkRealname}}</td>\r\n                <td>{{item.checkTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});