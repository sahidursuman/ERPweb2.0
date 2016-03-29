/*TMODJS:{"debug":true,"version":1,"md5":"ccf3df15d17972994a7526ef7596a5e5"}*/
define(function(require) {
    return require("../../../template")("arrange/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <th class="T-name-header">姓名</th> </thead> <tbody class="T-list"></tbody> </table> <div class="row"> <div class="col-md-5">共计 ', 
            $line = 10, $out += $escape(searchParam.totalPage), $out += ' 条记录</div> <div class="col-md-7"> <div class="T-pagenation"></div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n	<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n		<thead>\r\n			<th class="T-name-header">姓名</th>\r\n		</thead>\r\n		<tbody class="T-list"></tbody>\r\n	</table>\r\n\r\n	<div class="row">\r\n		<div class="col-md-5">共计 {{searchParam.totalPage}} 条记录</div>\r\n		<div class="col-md-7">\r\n			<div class="T-pagenation"></div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});