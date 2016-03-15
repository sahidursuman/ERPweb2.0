/*TMODJS:{"debug":true,"version":20,"md5":"85289801507d613dec0d0da754d6c318"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/viewDetails", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, needPayDetailList = $data.needPayDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">结算金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 18, $each(needPayDetailList, function(rs) {
                $out += " <tr> <td>", $line = 20, $out += $escape(rs.receivableType), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.businessType), $out += '</td> <td class="F-float F-money">', 
                $line = 22, $out += $escape(rs.price), $out += '</td> <td class="F-float F-count">', 
                $line = 23, $out += $escape(rs.count), $out += '</td> <td class="F-float F-money">', 
                $line = 24, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 25, $out += $escape(rs.needPayMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 26, $out += $escape(rs.settlementMoney), $out += "</td> <td>", $line = 27, 
                $out += $escape(rs.remark), $out += "</td> <td>", $line = 28, $out += $escape(rs.checkRealname), 
                $out += "</td> <td>", $line = 29, $out += $escape(rs.checkTime), $out += "</td> </tr> ", 
                $line = 31;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">应付类别</th>\r\n                <th class="th-border">发生业务</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each needPayDetailList as rs}}\r\n            <tr>\r\n                <td>{{rs.receivableType}}</td>\r\n                <td>{{rs.businessType}}</td>\r\n                <td class="F-float F-money">{{rs.price}}</td>\r\n                <td class="F-float F-count">{{rs.count}}</td>\r\n                <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{rs.checkRealname}}</td>\r\n                <td>{{rs.checkTime}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});