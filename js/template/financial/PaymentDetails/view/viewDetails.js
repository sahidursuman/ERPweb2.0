/*TMODJS:{"debug":true,"version":16,"md5":"6ecc044a69840613ec0d241327e75374"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/viewDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, detailList = $data.detailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" id="T-tripNumber-layer" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>团号/收客单号</th> <th>金额</th> <th>备注</th> </tr> </thead> <tbody> ', 
            $line = 11, $each(detailList, function(rs) {
                $out += ' <tr> <td class="T-number">', $line = 13, $out += $escape(rs.number), $out += "</td> <td>", 
                $line = 14, $out += $escape(rs.money), $out += "</td> <td>", $line = 15, $out += $escape(rs.remark), 
                $out += "</td> </tr> ", $line = 17;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" id="T-tripNumber-layer" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>团号/收客单号</th>\r\n                <th>金额</th>\r\n                <th>备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each detailList as rs}}\r\n            <tr>\r\n                <td class="T-number">{{rs.number}}</td>\r\n                <td>{{rs.money}}</td>\r\n                <td>{{rs.remark}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});