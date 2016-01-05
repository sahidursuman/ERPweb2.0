/*TMODJS:{"debug":true,"version":6,"md5":"94061c232e8589e7d9db8cdd9314f752"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/details", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, customerAcountDetailList = $data.customerAcountDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>应收类别</td> <td>发生业务</td> <td>结算金额</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(customerAcountDetailList, function(item) {
                $out += " <tr> <td>", $line = 16, $out += $escape(item.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(item.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(item.settlementMoney), $out += "</td> <td>", $line = 19, $out += $escape(item.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(item.creatorName), $out += "</td> <td>", 
                $line = 21, $out += $escape(item.createTime), $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td>应收类别</td>\r\n                <td>发生业务</td>\r\n                <td>结算金额</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each customerAcountDetailList as item}}\r\n            <tr>\r\n                <td>{{item.resourceType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.settlementMoney}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.creatorName}}</td>\r\n                <td>{{item.createTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});