/*TMODJS:{"debug":true,"version":11,"md5":"914f9e5346603eb2fd5ffd6dac495cbf"}*/
define(function(require) {
    return require("../../../template")("financial/finPay/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, sumNeedPayMoney = $data.sumNeedPayMoney, sumPaiedMoney = $data.sumPaiedMoney, sumUnPaiedMoney = $data.sumUnPaiedMoney, $out = "";
            return $out += '<div class="form-group mar-r-20"> <label class="control-label">应付金额合计：</label> <label class="control-label F-float F-money T-sumStMoney">', 
            $line = 3, $out += $escape(sumNeedPayMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney">', 
            $line = 7, $out += $escape(sumPaiedMoney), $out += '</label> </div> <div class="form-group "> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney">', 
            $line = 11, $out += $escape(sumUnPaiedMoney), $out += "</label> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="form-group mar-r-20">\r\n    <label class="control-label">应付金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumStMoney">{{sumNeedPayMoney}}</label>\r\n</div>\r\n<div class="form-group mar-r-20">\r\n    <label class="control-label">已付金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumPaiedMoney">{{sumPaiedMoney}}</label>\r\n</div>\r\n<div class="form-group ">\r\n    <label class="control-label">未付金额合计：</label>\r\n    <label class="control-label F-float F-money T-sumUnPaiedMoney">{{sumUnPaiedMoney}}</label>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});