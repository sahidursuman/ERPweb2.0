/*TMODJS:{"debug":true,"version":10,"md5":"46b5e16647da30f2c0f15c3bdf3f0f59"}*/
define(function(require) {
    return require("../../../template")("arrange/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $string = $utils.$string, thStr = $data.thStr, tdStr = $data.tdStr, $escape = $utils.$escape, total = $data.total, $out = "";
            return $out += '<table class="table table-bordered"> <thead> <tr class="bg-blur T-tr-fixed"> <th class="T-name-header">姓名</th> ', 
            $line = 5, $out += $string(thStr), $out += ' </tr> </thead> <tbody class="T-list"> ', 
            $line = 9, $out += $string(tdStr), $out += ' </tbody> </table> <div class="row"> <div class="col-md-5">共计 ', 
            $line = 14, $out += $escape(total), $out += ' 条记录</div> <div class="col-md-7"> <div class="T-pagenation"></div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-bordered">\r\n	<thead>\r\n		<tr class="bg-blur T-tr-fixed">\r\n			<th class="T-name-header">姓名</th>\r\n			{{#thStr}}\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-list">\r\n		{{#tdStr}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row">\r\n	<div class="col-md-5">共计 {{total}} 条记录</div>\r\n	<div class="col-md-7">\r\n		<div class="T-pagenation"></div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});