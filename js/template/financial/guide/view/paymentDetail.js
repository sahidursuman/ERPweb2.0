/*TMODJS:{"debug":true,"version":14,"md5":"7a3edf2be94f61bf10831e6d8d964fd3"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/paymentDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, payItemList = $data.payItemList, $each = $utils.$each, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>团号</th> <th>线路</th> <th>完团日期(账期)</th> <th>付款金额</th> <th>备注</th> </tr> </thead> <tbody> ', 
            $line = 13, payItemList.length > 0 ? ($out += " ", $line = 14, $each(payItemList, function(rs) {
                $out += " <tr><td>", $line = 15, $out += $escape(rs.tripNumber), $out += "</td> <td>", 
                $line = 16, $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 17, 
                $out += $escape($helpers.dateFormat(rs.time, "yyyy-MM-dd hh:mm:ss")), $out += '</td> <td><span class="F-float F-money">', 
                $line = 18, $out += $escape(rs.payMoney), $out += "</span></td> <td>", $line = 19, 
                $out += $escape(rs.payRemark), $out += "</td> </tr> ", $line = 21;
            }), $out += " ", $line = 22) : ($out += ' <tr><td colspan="5">暂无记录！</td></tr> ', 
            $line = 24), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>团号</th>\r\n                <th>线路</th>\r\n                <th>完团日期(账期)</th>\r\n                <th>付款金额</th>\r\n                <th>备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        	{{if payItemList.length > 0}}\r\n        		{{each payItemList as rs}}\r\n        			<tr><td>{{rs.tripNumber}}</td>\r\n		                <td>{{rs.lineProductName}}</td>\r\n		                <td>{{rs.time | dateFormat:"yyyy-MM-dd hh:mm:ss"}}</td>\r\n		                <td><span class="F-float F-money">{{rs.payMoney}}</span></td>\r\n		                <td>{{rs.payRemark}}</td>\r\n		            </tr>\r\n        		{{/each}}\r\n        	{{else}}\r\n        		<tr><td colspan="5">暂无记录！</td></tr>\r\n        	{{/if}}\r\n       	</tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});