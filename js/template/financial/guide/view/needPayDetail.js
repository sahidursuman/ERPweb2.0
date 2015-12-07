/*TMODJS:{"debug":true,"version":3,"md5":"71701a53e148a79e86bf0ac3a3750829"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/needPayDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, checkRecordList = $data.checkRecordList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>应付类别</td> <td>发生业务</td> <td>金额</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(checkRecordList, function(item) {
                $out += " <tr> <td>", $line = 16, $out += $escape(item.receivableType), $out += "</td> <td>", 
                $line = 17, $out += $escape(item.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(item.payDifferenceMoney), $out += "</td> <td>", $line = 19, $out += $escape(item.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(item.checkRealname), $out += "</td> <td>", 
                $line = 21, $out += $escape(item.checkTime), $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td>应付类别</td>\r\n                <td>发生业务</td>\r\n                <td>金额</td>\r\n                <td>备注</td>\r\n                <td>操作人</td>\r\n                <td>操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each checkRecordList as item}}\r\n            <tr>\r\n                <td>{{item.receivableType}}</td>\r\n                <td>{{item.businessType}}</td>\r\n                <td>{{item.payDifferenceMoney}}</td>\r\n                <td>{{item.remark}}</td>\r\n                <td>{{item.checkRealname}}</td>\r\n                <td>{{item.checkTime}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});