/*TMODJS:{"debug":true,"version":39,"md5":"17e967e396b563d6a2865bb136ceb990"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/operationDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, type = $data.type, $each = $utils.$each, payedRecordList = $data.payedRecordList, $escape = ($data.item, 
            $data.$index, $utils.$escape), guidePreRecordList = $data.guidePreRecordList, checkRecordList = $data.checkRecordList, $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> ', 
            $line = 5, 1 == type || 2 == type ? ($out += " <th>付款类别</th> <th>发生业务</th> <th>付款方</th> <th>金额</th> <th>付款方式</th> <th>账户名称</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> ", 
            $line = 15) : ($out += " <th>应付类别</th> <th>发生业务</th> <th>金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> ", 
            $line = 22), $out += " </tr> </thead> <tbody> ", $line = 26, 1 == type ? ($out += " ", 
            $line = 27, $each(payedRecordList, function(item) {
                $out += " <tr> <td>", $line = 29, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 30, $out += $escape(item.businessType), $out += "</td> <td>", $line = 31, 
                $out += $escape(item.payParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 32, $out += $escape(item.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 33, $out += $escape($helpers.getPayTypeText(item.payType)), $out += "</td> <td>", 
                $line = 34, null == item.accountName || "" == item.accountName ? ($out += "-", $line = 34) : ($line = 34, 
                $out += $escape(item.accountName), $line = 34), $out += "</td> <td>", $line = 35, 
                $out += $escape(item.remark), $out += "</td> <td>", $line = 36, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 37, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 39;
            }), $out += " ", $line = 40) : 2 == type ? ($out += " ", $line = 41, $each(guidePreRecordList, function(item) {
                $out += " <tr> <td>", $line = 43, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 44, $out += $escape(item.businessType), $out += "</td> <td>", $line = 45, 
                $out += $escape(item.payParty), $out += '</td> <td><span class="F-float F-money">', 
                $line = 46, $out += $escape(item.payDifferenceMoney), $out += "</span></td> <td>", 
                $line = 47, $out += $escape($helpers.getPayTypeText(item.payType)), $out += "</td> <td>", 
                $line = 48, null == item.accountName || "" == item.accountName ? ($out += "-", $line = 48) : ($line = 48, 
                $out += $escape(item.accountName), $line = 48), $out += "</td> <td>", $line = 49, 
                $out += $escape(item.remark), $out += "</td> <td>", $line = 50, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 51, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 53;
            }), $out += " ", $line = 54) : ($out += " ", $line = 55, $each(checkRecordList, function(item) {
                $out += " <tr> <td>", $line = 57, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 58, $out += $escape(item.businessType), $out += '</td> <td><span class="F-float F-money">', 
                $line = 59, $out += $escape(item.settlementMoney), $out += "</span></td> <td>", 
                $line = 60, $out += $escape(item.remark), $out += "</td> <td>", $line = 61, $out += $escape(item.checkRealname), 
                $out += "</td> <td>", $line = 62, $out += $escape(item.checkTime), $out += "</td> </tr> ", 
                $line = 64;
            }), $out += " ", $line = 65), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                {{if type == 1 || type == 2}}\r\n                <th>付款类别</th>\r\n                <th>发生业务</th>\r\n                <th>付款方</th>\r\n                <th>金额</th>\r\n                <th>付款方式</th>\r\n                <th>账户名称</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n                {{else}}\r\n                <th>应付类别</th>\r\n                <th>发生业务</th>\r\n                <th>金额</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n                {{/if}}\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{if (type == 1)}}\r\n                {{each payedRecordList as item}}\r\n                <tr>\r\n                    <td>{{item.receivableType}}</td>\r\n                    <td>{{item.businessType}}</td>\r\n                    <td>{{item.payParty}}</td>\r\n                    <td><span class="F-float F-money">{{item.payDifferenceMoney}}</span></td>\r\n                    <td>{{item.payType | getPayTypeText}}</td>\r\n                    <td>{{if item.accountName == null || item.accountName == ""}}-{{else}}{{item.accountName}}{{/if}}</td>\r\n                    <td>{{item.remark}}</td>\r\n                    <td>{{item.checkRealname}}</td>\r\n                    <td>{{item.checkTime}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{else if (type == 2)}}\r\n                {{each guidePreRecordList as item}}\r\n                <tr>\r\n                    <td>{{item.receivableType}}</td>\r\n                    <td>{{item.businessType}}</td>\r\n                    <td>{{item.payParty}}</td>\r\n                    <td><span class="F-float F-money">{{item.payDifferenceMoney}}</span></td>\r\n                    <td>{{item.payType | getPayTypeText}}</td>\r\n                    <td>{{if item.accountName == null || item.accountName == ""}}-{{else}}{{item.accountName}}{{/if}}</td>\r\n                    <td>{{item.remark}}</td>\r\n                    <td>{{item.checkRealname}}</td>\r\n                    <td>{{item.checkTime}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{else}}\r\n                {{each checkRecordList as item}}\r\n                <tr>\r\n                    <td>{{item.receivableType}}</td>\r\n                    <td>{{item.businessType}}</td>\r\n                    <td><span class="F-float F-money">{{item.settlementMoney}}</span></td>\r\n                    <td>{{item.remark}}</td>\r\n                    <td>{{item.checkRealname}}</td>\r\n                    <td>{{item.checkTime}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});