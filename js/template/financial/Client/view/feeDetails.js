/*TMODJS:{"debug":true,"version":42,"md5":"42e55cf1287b3b67796d1ac8f07507b2"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/feeDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, otherFee = $data.otherFee, $escape = ($data.of, 
            $data.$index, $data.rs, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>单位</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(otherFee, function(of) {
                $out += " ", $line = 15, $each(of.otherFeeList, function(rs) {
                    $out += " <tr><td>", $line = 16, $out += $escape(rs.name), $out += "</td> <td>", 
                    $line = 17, $out += $escape(rs.count), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 18, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-count">', 
                    $line = 19, $out += $escape(rs.days), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 20, $out += $escape(rs.count * rs.price * rs.days), $out += "</span></td> <td>", 
                    $line = 21, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 23;
                }), $out += " ", $line = 24;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>费用项</th>\r\n                <th>数量</th>\r\n                <th>单价</th>\r\n                <th>单位</th>\r\n                <th>金额</th>\r\n                <th>说明</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each otherFee as of}}\r\n                {{each of.otherFeeList as rs}}\r\n                <tr><td>{{rs.name}}</td>\r\n                    <td>{{rs.count}}</td>\r\n                    <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                    <td><span class="F-float F-count">{{rs.days}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.count * rs.price*rs.days}}</span></td>\r\n                    <td>{{rs.remark}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div> '.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});