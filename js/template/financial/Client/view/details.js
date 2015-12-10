/*TMODJS:{"debug":true,"version":2,"md5":"0dedd24f4f93cade2c5d8987c67dc951"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/details", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, customerAcountDetailList = $data.customerAcountDetailList, $out = ($data.item, 
            $data.$index, "");
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>应收类别</td> <td>发生业务</td> <td>金额</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(customerAcountDetailList, function() {
                $out += " <tr> <td>item.resourceType</td> <td>item.businessType</td> <td>item.incomeMoney</td> <td>item.remark</td> <td>item.creatorName</td> <td>item.createTime</td> </tr> ", 
                $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td>应收类别</td>\r\n                <td>发生业务</td>\r\n                <td>金额</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each customerAcountDetailList as item}}\r\n            <tr>\r\n                <td>item.resourceType</td>\r\n                <td>item.businessType</td>\r\n                <td>item.incomeMoney</td>\r\n                <td>item.remark</td>\r\n                <td>item.creatorName</td>\r\n                <td>item.createTime</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});