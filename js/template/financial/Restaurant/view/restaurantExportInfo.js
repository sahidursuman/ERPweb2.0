/*TMODJS:{"debug":true,"version":9,"md5":"d1287b602ef3bd5d7d54f709b1065aed"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantExportInfo", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, restaurantName = $data.restaurantName, year = $data.year, month = $data.month, $out = "";
            return $out += '<div class="widget-main"> <ul class="list-unstyled spaced2"> <li><i class="ace-icon fa fa-check green"></i>餐厅：', 
            $line = 3, $out += $escape(restaurantName), $out += '</li> <li><i class="ace-icon fa fa-check green"></i>账期：', 
            $line = 4, $out += $escape(year), $out += "年", $line = 4, $out += $escape(month), 
            $out += '</li> </ul> <hr> <div class="price"> $5 <small>/month</small> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="widget-main">\r\n	<ul class="list-unstyled spaced2">\r\n		<li><i class="ace-icon fa fa-check green"></i>餐厅：{{restaurantName}}</li>\r\n		<li><i class="ace-icon fa fa-check green"></i>账期：{{year}}年{{month}}</li>\r\n	</ul>\r\n	<hr>\r\n	<div class="price">\r\n		$5 <small>/month</small>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});