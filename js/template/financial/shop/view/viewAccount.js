/*TMODJS:{"debug":true,"version":7,"md5":"cdf02dd256bc4baf7f1e6c75f1a1cac4"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/viewAccount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopAccountDetailList = $data.shopAccountDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>应收类别</td> <td>发生业务</td> <td>金额</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(shopAccountDetailList, function(rs) {
                $out += " <tr> <td>", $line = 16, $out += $escape(rs.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(rs.incomeMoney), $out += "</td> <td>", $line = 19, $out += $escape(rs.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(rs.checkRealname), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.checkTime), $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td>应收类别</td>\r\n                <td>发生业务</td>\r\n                <td>金额</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each shopAccountDetailList as rs}}\r\n            <tr>\r\n                <td>{{rs.resourceType}}</td>\r\n                <td>{{rs.businessType}}</td>\r\n                <td>{{rs.incomeMoney}}</td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{rs.checkRealname}}</td>\r\n                <td>{{rs.checkTime}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});