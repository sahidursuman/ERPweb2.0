/*TMODJS:{"debug":true,"version":1,"md5":"9ef90083a4c5cc2ffe934f2edd9bbca5"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/view/viewOperationRecord", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, busOrderLogList = $data.busOrderLogList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="T-viewOperationRecordContent container-fulid col-xs-12 mar-t20"> <table class="table table-striped table-bordered table-hover table-text-center"> <tr> <th style="width: 145px;max-width: 145px;">处理时间</th> <th style="width: 110px;max-width: 110px;">操作人</th> <th>处理信息</th> </tr> ', 
            $line = 8, $each(busOrderLogList, function(rs) {
                $out += " <tr> <td>", $line = 10, $out += $escape(rs.createTime), $out += "</td> <td>", 
                $line = 11, $out += $escape(rs.operateRealName), $out += '</td> <td style="text-align: left;">', 
                $line = 12, $out += $escape(rs.operateInfo), $out += "</td> </tr> ", $line = 14;
            }), $out += " </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-viewOperationRecordContent container-fulid col-xs-12 mar-t20">\r\n    <table class="table table-striped table-bordered table-hover table-text-center">\r\n        <tr>\r\n            <th style="width: 145px;max-width: 145px;">处理时间</th>\r\n            <th style="width: 110px;max-width: 110px;">操作人</th>\r\n            <th>处理信息</th>\r\n        </tr>\r\n        {{each busOrderLogList as rs}}\r\n        <tr>\r\n            <td>{{rs.createTime}}</td>\r\n            <td>{{rs.operateRealName}}</td>\r\n            <td style="text-align: left;">{{rs.operateInfo}}</td>\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});