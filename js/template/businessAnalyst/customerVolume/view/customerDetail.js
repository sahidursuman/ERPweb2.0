/*TMODJS:{"debug":true,"version":44,"md5":"31b67a8e67b09b9d7402db7902564061"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/customerVolume/view/customerDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelAgencyName = $data.travelAgencyName, $each = $utils.$each, resultList = $data.resultList, $out = ($data.rs, 
            $data.$index, "");
            return $out += ' <table class="table table-striped table-bordered table-hover table-fixed" width="80%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%" colspan="2">线路客量--', 
            $line = 9, $out += $escape(travelAgencyName), $out += "</th> </tr> </thead> <tbody> ", 
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
                source: '\r\n<table class="table table-striped table-bordered table-hover table-fixed" width="80%">\r\n	<colgroup>\r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:10%;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th width="22.5%" colspan="2">线路客量--{{travelAgencyName}}</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n	{{each resultList as rs}}\r\n		<tr>\r\n			<td>{{rs.name}}</td>\r\n			<td>{{rs.sumMember}}</td>\r\n		</tr>\r\n	{{/each}}			\r\n	</tbody>\r\n</table>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});