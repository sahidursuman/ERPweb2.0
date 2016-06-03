/*TMODJS:{"debug":true,"version":2,"md5":"69c945a7dc23b9ce1fdd00c13766a318"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/booking/listCount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, adultCount = $data.adultCount, childCount = $data.childCount, sumNeedGetMoney = $data.sumNeedGetMoney, $out = "";
            return $out += '<label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">', 
            $line = 1, $out += $escape(adultCount || 0), $out += '</span>大<span class="F-float F-count">', 
            $line = 1, $out += $escape(childCount || 0), $out += '</span>小</span></label> <label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">', 
            $line = 2, $out += $escape(sumNeedGetMoney || 0), $out += "</span>元</span></label>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">{{adultCount || 0}}</span>大<span class="F-float F-count">{{childCount || 0}}</span>小</span></label>\r\n<label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">{{sumNeedGetMoney || 0}}</span>元</span></label>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});