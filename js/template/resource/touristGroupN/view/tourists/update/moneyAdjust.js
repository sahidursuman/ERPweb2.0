/*TMODJS:{"debug":true,"version":5,"md5":"cec32039cb6718c9a42d9879d996ff32"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/update/moneyAdjust", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, id = $data.id, subNeedPayMoney = $data.subNeedPayMoney, $out = "";
            return $out += '<div class="container-fluid mar-t-20" data-id="', $line = 1, $out += $escape(id), 
            $out += '"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-2 text-right no-padding-right control-label">本段团款</div> <div class="col-xs-10"> <input type="text" class="col-xs-12" name="subNeedPayMoney" value="', 
            $line = 6, $out += $escape(subNeedPayMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20" data-id="{{id}}">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div class="col-xs-2 text-right no-padding-right control-label">本段团款</div>\r\n            <div class="col-xs-10">\r\n                <input type="text" class="col-xs-12" name="subNeedPayMoney" value="{{subNeedPayMoney}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});