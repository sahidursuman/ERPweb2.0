/*TMODJS:{"debug":true,"version":5,"md5":"bfca19fa28135b82aca0e02165ac2559"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/viewAccount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingAcountDetailList = $data.bookingAcountDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td class="th-border">应收类别</td> <td class="th-border">发生业务</td> <td class="th-border">金额</td> <td class="th-border">备注</td> <td class="th-border">操作人</td> <td class="th-border">操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(bookingAcountDetailList, function(rs) {
                $out += " <tr> <td>", $line = 16, $out += $escape(rs.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(rs.incomeDifferenceMoney), $out += "</td> <td>", $line = 19, $out += $escape(rs.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(rs.creatorName), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.createTime), $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td class="th-border">应收类别</td>\r\n                <td class="th-border">发生业务</td>\r\n                <td class="th-border">金额</td>\r\n                <td class="th-border">备注</td>\r\n                <td class="th-border">操作人</td>\r\n                <td class="th-border">操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each bookingAcountDetailList as rs}}\r\n            <tr>\r\n                <td>{{rs.resourceType}}</td>\r\n                <td>{{rs.businessType}}</td>\r\n                <td>{{rs.incomeDifferenceMoney}}</td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{rs.creatorName}}</td>\r\n                <td>{{rs.createTime}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});