/*TMODJS:{"debug":true,"version":4,"md5":"f2fdf29473991f5bfc8a90b9b9ca1045"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/viewDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, needPayDetailList = $data.needPayDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td class="th-border">应付类别</td> <td class="th-border">发生业务</td> <td class="th-border">金额</td> <td class="th-border">备注</td> <td class="th-border">操作人</td> <td class="th-border">操作时间</td> </tr> </thead> <tbody> ', 
            $line = 14, $each(needPayDetailList, function(rs) {
                $out += " <tr> <td>", $line = 16, $out += $escape(rs.receivableType), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.businessType), $out += "</td> <td>", $line = 18, 
                $out += $escape(rs.payDifferenceMoney), $out += "</td> <td>", $line = 19, $out += $escape(rs.remark), 
                $out += "</td> <td>", $line = 20, $out += $escape(rs.checkRealname), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.checkTime), $out += "</td> </tr> ", $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <td class="th-border">应付类别</td>\r\n                <td class="th-border">发生业务</td>\r\n                <td class="th-border">金额</td>\r\n                <td class="th-border">备注</td>\r\n                <td class="th-border">操作人</td>\r\n                <td class="th-border">操作时间</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each needPayDetailList as rs}}\r\n            <tr>\r\n                <td>{{rs.receivableType}}</td>\r\n                <td>{{rs.businessType}}</td>\r\n                <td>{{rs.payDifferenceMoney}}</td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{rs.checkRealname}}</td>\r\n                <td>{{rs.checkTime}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});