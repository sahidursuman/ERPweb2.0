/*TMODJS:{"debug":true,"version":11,"md5":"da931444cd7d3aa71e8c8d8562a6b851"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/payDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, payedMoneyDetailList = $data.payedMoneyDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">账户名称</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 17, $each(payedMoneyDetailList, function(item) {
                $out += " <tr> <td>", $line = 19, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 20, $out += $escape(item.businessType), $out += "</td> <td>", $line = 21, 
                $out += $escape(item.payParty), $out += '</td> <td class="F-float F-money">', $line = 22, 
                $out += $escape(item.payDifferenceMoney), $out += "</td> <td>", $line = 23, 0 == item.payType ? ($out += "现金", 
                $line = 23) : 1 == item.payType ? ($out += "银行转账", $line = 23) : 2 == item.payType ? ($out += "网上支付", 
                $line = 23) : 3 == item.payType ? ($out += "支票", $line = 23) : ($out += "其它", $line = 23), 
                $out += "</td> <td>", $line = 24, null == item.accountName || "" == item.accountName ? ($out += "-", 
                $line = 24) : ($line = 24, $out += $escape(item.accountName), $line = 24), $out += "</td> <td>", 
                $line = 25, $out += $escape(item.remark), $out += "</td> <td>", $line = 26, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 27, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 29;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">付款类别</th>\r\n                <th class="th-border">发生业务</th>\r\n                <th class="th-border">付款方</th>\r\n                <th class="th-border">金额</th>\r\n                <th class="th-border">付款方式</th>\r\n                <th class="th-border">账户名称</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each payedMoneyDetailList as item}}\r\n            <tr>\r\n                <td>{{item.receivableType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.payParty}}</td>\r\n                <td class="F-float F-money">{{item.payDifferenceMoney}}</td>\r\n                <td>{{if item.payType == 0}}现金{{else if item.payType == 1}}银行转账{{else if item.payType == 2}}网上支付{{else if item.payType == 3}}支票{{else}}其它{{/if}}</td>\r\n                <td>{{if item.accountName == null || item.accountName == ""}}-{{else}}{{item.accountName}}{{/if}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.checkRealname}}</td>\r\n                <td>{{item.checkTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});