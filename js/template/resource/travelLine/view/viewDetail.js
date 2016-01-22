/*TMODJS:{"debug":true,"version":128,"md5":"163e030923a876f743f462f0543d1f5c"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/viewDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $string = $utils.$string, detail = $data.detail, $out = "";
            return $out += '<div class="col-xs-12"> ', $line = 2, $out += $string(detail), $out += " </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	{{#detail}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});