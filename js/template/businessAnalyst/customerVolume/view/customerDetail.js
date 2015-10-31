/*TMODJS:{"debug":true,"version":26,"md5":"5bf72f31ff6ab301d0d5b82b532a8775"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/customerVolume/view/customerDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, resultList = $data.resultList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += ' <table class="table table-striped table-bordered table-hover table-fixed" width="80%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%" colspan="2">线路客量</th> </tr> </thead> <tbody> ', 
            $line = 13, $each(resultList, function(rs) {
                $out += " <tr> <td>", $line = 15, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 16, $out += $escape(rs.sumMember), $out += "</td> </tr> ", $line = 18;
            }), $out += " </tbody> </table> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<table class="table table-striped table-bordered table-hover table-fixed" width="80%">\r\n	<colgroup>\r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:10%;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th width="22.5%" colspan="2">线路客量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n	{{each resultList as rs}}\r\n		<tr>\r\n			<td>{{rs.name}}</td>\r\n			<td>{{rs.sumMember}}</td>\r\n		</tr>\r\n	{{/each}}			\r\n	</tbody>\r\n</table>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});