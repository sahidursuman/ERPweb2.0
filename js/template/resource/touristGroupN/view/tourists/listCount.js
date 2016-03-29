/*TMODJS:{"debug":true,"version":3,"md5":"8895bc74227fcbbf8c73d79b42c3245d"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/listCount", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, statistics = $data.statistics, $out = "";
            return $out += '<label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">', 
            $line = 1, $out += $escape(statistics.adultCount || 0), $out += '</span>大<span class="F-float F-count">', 
            $line = 1, $out += $escape(statistics.childCount || 0), $out += '</span>小</span></label> <label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">', 
            $line = 2, $out += $escape(statistics.needPay || 0), $out += '</span>元</span></label> <label class="control-label mar-r-20" name="statistics-payed">已收款合计：<span class="payedMoney"><span class="F-float F-money">', 
            $line = 3, $out += $escape(statistics.payedMoney || 0), $out += '</span>元</span></label> <label class="control-label mar-r-20" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay"><span class="F-float F-money">', 
            $line = 4, $out += $escape(statistics.currentNeedPay || 0), $out += '</span>元</span></label> <label class="control-label mar-r-20" name="statistics-unIncome">未收款合计：<span class="unIncome"><span class="F-float F-money">', 
            $line = 5, $out += $escape(statistics.unIncomeMoney || 0), $out += "</span>元</span></label>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">{{statistics.adultCount || 0}}</span>大<span class="F-float F-count">{{statistics.childCount || 0}}</span>小</span></label>\r\n<label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">{{statistics.needPay || 0}}</span>元</span></label>\r\n<label class="control-label mar-r-20" name="statistics-payed">已收款合计：<span class="payedMoney"><span class="F-float F-money">{{statistics.payedMoney || 0}}</span>元</span></label>\r\n<label class="control-label mar-r-20" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay"><span class="F-float F-money">{{statistics.currentNeedPay || 0}}</span>元</span></label>\r\n<label class="control-label mar-r-20" name="statistics-unIncome">未收款合计：<span class="unIncome"><span class="F-float F-money">{{statistics.unIncomeMoney || 0}}</span>元</span></label>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});