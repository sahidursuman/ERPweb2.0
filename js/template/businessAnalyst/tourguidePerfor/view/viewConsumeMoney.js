/*TMODJS:{"debug":true,"version":1,"md5":"41336a40d65932d38c39a2cddf2c5459"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/tourguidePerfor/view/viewConsumeMoney", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), sumPlayList = $data.sumPlayList, $each = $utils.$each, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>商品</th> <th>打单金额</th> </tr> </thead> <tbody> ', 
            $line = 10, sumPlayList.length > 0 ? ($out += " ", $line = 11, $each(sumPlayList, function(rs) {
                $out += " <tr> <td>", $line = 13, $out += $escape(rs.name), $out += '</td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.consumeMoney), $out += "</span></td> </tr> ", $line = 16;
            }), $out += " ", $line = 17) : ($out += ' <tr><td colspan="5">暂无记录！</td></tr> ', 
            $line = 19), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th>商品</th>\r\n                <th>打单金额</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        	{{if sumPlayList.length > 0}}\r\n        		{{each sumPlayList as rs}}\r\n        			<tr>\r\n                        <td>{{rs.name}}</td>\r\n		                <td><span class="F-float F-money">{{rs.consumeMoney}}</span></td>\r\n		            </tr>\r\n        		{{/each}}\r\n        	{{else}}\r\n        		<tr><td colspan="5">暂无记录！</td></tr>\r\n        	{{/if}}\r\n       	</tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});