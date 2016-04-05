/*TMODJS:{"debug":true,"version":31,"md5":"56ccd27d640f6cd4dc8a82343b490d66"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/feeDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), transitFeeList = $data.transitFeeList, $each = $utils.$each, $escape = ($data.rs, 
            $data.$index, $utils.$escape), otherFee = $data.otherFee, $out = ($data.of, "");
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody> ', 
            $line = 13, transitFeeList.length > 0 && ($out += " ", $line = 14, $each(transitFeeList, function(rs) {
                $out += " <tr><td>", $line = 15, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 16, $out += $escape(rs.count), $out += '</td> <td><span class="F-float F-money">', 
                $line = 17, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(rs.count * rs.price), $out += "</span></td> <td>", $line = 19, 
                $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 21;
            }), $out += " ", $line = 22), $out += " ", $line = 23, otherFee.length > 0 && ($out += " ", 
            $line = 24, $each(otherFee, function(of) {
                $out += " ", $line = 25, $each(of.otherFeeList, function(rs) {
                    $out += " <tr><td>", $line = 26, $out += $escape(rs.name), $out += "</td> <td>", 
                    $line = 27, $out += $escape(rs.count), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 28, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 29, $out += $escape(rs.count * rs.price), $out += "</span></td> <td>", $line = 30, 
                    $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 32;
                }), $out += " ", $line = 33;
            }), $out += " ", $line = 34), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>费用项</th>\r\n                <th>数量</th>\r\n                <th>单价</th>\r\n                <th>金额</th>\r\n                <th>说明</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{if transitFeeList.length > 0}}\r\n                {{each transitFeeList as rs}}\r\n                <tr><td>{{rs.name}}</td>\r\n                    <td>{{rs.count}}</td>\r\n                    <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.count * rs.price}}</span></td>\r\n                    <td>{{rs.remark}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            {{/if}}\r\n            {{if otherFee.length > 0}}\r\n                {{each otherFee as of}}\r\n                    {{each of.otherFeeList as rs}}\r\n                    <tr><td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.count * rs.price}}</span></td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{/each}}\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div> '.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});