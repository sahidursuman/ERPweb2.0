/*TMODJS:{"debug":true,"version":16,"md5":"c46b8e1562d69cd3b29e254c4370fa8b"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/viewReceived", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, shopAccountDetailList = $data.shopAccountDetailList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>收款类别</th> <th>发生业务</th> <th>收款方</th> <th>金额</th> <th>收款方式</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody> ', 
            $line = 16, $each(shopAccountDetailList, function(item) {
                $out += " <tr> <td>", $line = 18, $out += $escape(item.resourceType), $out += "</td> <td>", 
                $line = 19, $out += $escape(item.businessType), $out += "</td> <td>", $line = 20, 
                $out += $escape(item.incomeOrPayParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 21, $out += $escape(item.incomeMoney), $out += "</span></td> <td>", $line = 22, 
                $out += $escape($helpers.getPayTypeText(item.payType)), $out += "</td> <td>", $line = 23, 
                $out += $escape(item.remark), $out += "</td> <td>", $line = 24, $out += $escape(item.creatorName), 
                $out += "</td> <td>", $line = 25, $out += $escape(item.createTime), $out += "</td> </tr> ", 
                $line = 27;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>收款类别</th>\r\n                <th>发生业务</th>\r\n                <th>收款方</th>\r\n                <th>金额</th>\r\n                <th>收款方式</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each shopAccountDetailList as item}}\r\n            <tr>\r\n                <td>{{item.resourceType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.incomeOrPayParty}}</td>\r\n                <td><span class="F-float F-money">{{item.incomeMoney}}</span></td>\r\n                <td>{{item.payType | getPayTypeText}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.creatorName}}</td>\r\n                <td>{{item.createTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});