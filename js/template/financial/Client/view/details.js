/*TMODJS:{"debug":true,"version":10,"md5":"80acbffae669a8a2ea67189b44358bd7"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/details", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, customerAcountDetailList = $data.customerAcountDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>应收类别</th> <th>发生业务</th> <th>结算金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(customerAcountDetailList, function(item) {
                $out += " <tr> <td>", $line = 16, $out += $escape(item.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(item.businessType), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(item.settlementMoney), $out += "</span></td> <td>", 
                $line = 19, $out += $escape(item.remark), $out += "</td> <td>", $line = 20, $out += $escape(item.creatorName), 
                $out += "</td> <td>", $line = 21, $out += $escape(item.createTime), $out += "</td> </tr> ", 
                $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>应收类别</th>\r\n                <th>发生业务</th>\r\n                <th>结算金额</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each customerAcountDetailList as item}}\r\n            <tr>\r\n                <td>{{item.resourceType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td><span class="F-float F-money">{{item.settlementMoney}}</span></td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.creatorName}}</td>\r\n                <td>{{item.createTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});