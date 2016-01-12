/*TMODJS:{"debug":true,"version":20,"md5":"5e8d77ef085c6b82200a52a4fc6e7c1b"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/operationDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, type = $data.type, $each = $utils.$each, payedRecordList = $data.payedRecordList, $escape = ($data.item, 
            $data.$index, $utils.$escape), checkRecordList = $data.checkRecordList, $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> ', 
            $line = 5, type ? ($out += " <td>付款类别</td> <td>发生业务</td> <td>付款方</td> <td>金额</td> <td>付款方式</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> ", 
            $line = 14) : ($out += " <td>应付类别</td> <td>发生业务</td> <td>金额</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> ", 
            $line = 21), $out += " </tr> </thead> <tbody> ", $line = 25, type ? ($out += " ", 
            $line = 26, $each(payedRecordList, function(item) {
                $out += " <tr> <td>", $line = 28, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 29, $out += $escape(item.businessType), $out += "</td> <td>", $line = 30, 
                $out += $escape(item.payParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 31, $out += $escape(item.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 32, $out += $escape($helpers.getPayTypeText(item.payType)), $out += "</td> <td>", 
                $line = 33, $out += $escape(item.remark), $out += "</td> <td>", $line = 34, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 35, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 37;
            }), $out += " ", $line = 38) : ($out += " ", $line = 39, $each(checkRecordList, function(item) {
                $out += " <tr> <td>", $line = 41, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 42, $out += $escape(item.businessType), $out += '</td> <td><span class="F-float F-money">', 
                $line = 43, $out += $escape(item.settlementMoney), $out += "</span></td> <td>", 
                $line = 44, $out += $escape(item.remark), $out += "</td> <td>", $line = 45, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 46, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 48;
            }), $out += " ", $line = 49), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                {{if type}}\r\n                <td>付款类别</td>\r\n                <td>发生业务</td>\r\n                <td>付款方</td>\r\n                <td>金额</td>\r\n                <td>付款方式</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n                {{else}}\r\n                <td>应付类别</td>\r\n                <td>发生业务</td>\r\n                <td>金额</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n                {{/if}}\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{if (type)}}\r\n                {{each payedRecordList as item}}\r\n                <tr>\r\n                    <td>{{item.receivableType}}</td>\r\n                    <td>{{item.businessType}}</td>\r\n                    <td>{{item.payParty}}</td>\r\n                    <td><span class="F-float F-money">{{item.payDifferenceMoney}}</span></td>\r\n                    <td>{{item.payType | getPayTypeText}}</td>\r\n                    <td>{{item.remark}}</td>\r\n                    <td>{{item.checkRealname}}</td>\r\n                    <td>{{item.checkTime}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{else}}\r\n                {{each checkRecordList as item}}\r\n                <tr>\r\n                    <td>{{item.receivableType}}</td>\r\n                    <td>{{item.businessType}}</td>\r\n                    <td><span class="F-float F-money">{{item.settlementMoney}}</span></td>\r\n                    <td>{{item.remark}}</td>\r\n                    <td>{{item.checkRealname}}</td>\r\n                    <td>{{item.checkTime}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});