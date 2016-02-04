/*TMODJS:{"debug":true,"version":12,"md5":"188f555a7d6c8b998854564b5da3537c"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/viewAccount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopAccountDetailList = $data.shopAccountDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>应收类别</th> <th>发生业务</th> <th>金额</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(shopAccountDetailList, function(rs) {
                $out += " <tr> <td>", $line = 16, $out += $escape(rs.resourceType), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.businessType), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(rs.incomeMoney), $out += "</span></td> <td>", $line = 19, 
                $out += $escape(rs.remark), $out += "</td> <td>", $line = 20, $out += $escape(rs.creatorName), 
                $out += "</td> <td>", $line = 21, $out += $escape(rs.createTime), $out += "</td> </tr> ", 
                $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>应收类别</th>\r\n                <th>发生业务</th>\r\n                <th>金额</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each shopAccountDetailList as rs}}\r\n            <tr>\r\n                <td>{{rs.resourceType}}</td>\r\n                <td>{{rs.businessType}}</td>\r\n                <td><span class="F-float F-money">{{rs.incomeMoney}}</span></td>\r\n                <td>{{rs.remark}}</td>\r\n                <td>{{rs.creatorName}}</td>\r\n                <td>{{rs.createTime}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});