/*TMODJS:{"debug":true,"version":8,"md5":"1fdbc428989c5b159f6c9cc0d0f6c35a"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/viewReceived", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingAcountDetailList = $data.bookingAcountDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td class="th-border">收款类别</td> <td class="th-border">发生业务</td> <td class="th-border">收款方</td> <td class="th-border">金额</td> <td class="th-border">收款方式</td> <td class="th-border">备注</td> <td class="th-border">操作人</td> <td class="th-border">操作时间</td> </tr> </thead> <tbody> ', 
            $line = 16, $each(bookingAcountDetailList, function(item) {
                $out += " <tr> <td>", $line = 18, $out += $escape(item.resourceType), $out += "</td> <td>", 
                $line = 19, $out += $escape(item.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(item.incomeOrPayParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 21, $out += $escape(item.incomeMoney), $out += "</span></td> <td>", $line = 22, 
                0 == item.payType ? ($out += "现金", $line = 22) : 1 == item.payType ? ($out += "银行转账", 
                $line = 22) : 2 == item.payType ? ($out += "网上支付", $line = 22) : 3 == item.payType ? ($out += "支票", 
                $line = 22) : ($out += "其它", $line = 22), $out += "</td> <td>", $line = 23, $out += $escape(item.remark), 
                $out += "</td> <td>", $line = 24, $out += $escape(item.creatorName), $out += "</td> <td>", 
                $line = 25, $out += $escape(item.createTime), $out += "</td> </tr> ", $line = 27;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td class="th-border">收款类别</td>\r\n                <td class="th-border">发生业务</td>\r\n                <td class="th-border">收款方</td>\r\n                <td class="th-border">金额</td>\r\n                <td class="th-border">收款方式</td>\r\n                <td class="th-border">备注</td>\r\n                <td class="th-border">操作人</td>\r\n                <td class="th-border">操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each bookingAcountDetailList as item}}\r\n            <tr>\r\n                <td>{{item.resourceType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.incomeOrPayParty}}</td>\r\n                <td><span class="F-float F-money">{{item.incomeMoney}}</span></td>\r\n                <td>{{if item.payType == 0}}现金{{else if item.payType == 1}}银行转账{{else if item.payType == 2}}网上支付{{else if item.payType == 3}}支票{{else}}其它{{/if}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.creatorName}}</td>\r\n                <td>{{item.createTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});