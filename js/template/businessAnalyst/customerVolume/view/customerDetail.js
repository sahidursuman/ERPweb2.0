/*TMODJS:{"debug":true,"version":96,"md5":"394bc29f1252037ac55e3a0a0f2d0140"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/customerVolume/view/customerDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelAgencyName = $data.travelAgencyName, $each = $utils.$each, resultList = $data.resultList, searchParam = ($data.rs, 
            $data.$index, $data.searchParam), $out = "";
            return $out += ' <table class="table table-striped table-bordered table-hover table-fixed" width="80%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%" colspan="2">', 
            $line = 10, $out += $escape(travelAgencyName), $out += "--线路客量</th> </tr> </thead> <tbody> ", 
            $line = 14, $each(resultList, function(rs) {
                $out += " <tr> <td>", $line = 16, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.sumMember), $out += "</td> </tr> ", $line = 19;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 25, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div style="width:320px; float:right;"> <div class="dataTables_paginate paging_simple_numbers T-Detail-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n\r\n<table class="table table-striped table-bordered table-hover table-fixed" width="80%">\r\n	<colgroup>\r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:10%;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th width="22.5%" colspan="2">{{travelAgencyName}}--线路客量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n	{{each resultList as rs}}\r\n		<tr>\r\n			<td>{{rs.name}}</td>\r\n			<td>{{rs.sumMember}}</td>\r\n		</tr>\r\n	{{/each}}			\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-4">\r\n		<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n	</div>\r\n	<div style="width:320px; float:right;">\r\n		<div class="dataTables_paginate paging_simple_numbers T-Detail-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});