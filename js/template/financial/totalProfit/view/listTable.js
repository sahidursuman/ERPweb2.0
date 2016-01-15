/*TMODJS:{"debug":true,"version":30,"md5":"12beeface67f53fc1bbd8fc4d936f1e9"}*/
define(function(require) {
    return require("../../../template")("financial/totalProfit/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '" lineProductId="', 
                $line = 2, $out += $escape(rs.lineProductId), $out += '"> <td>', $line = 3, null == rs.tripNumber || "" == rs.tripNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.tripNumber), $line = 3), $out += "</td> <td>", 
                $line = 4, null == rs.lineProductName || "" == rs.lineProductName ? ($out += "-", 
                $line = 4) : ($out += '<a class="T-option T-transfer" data-id="', $line = 4, $out += $escape(rs.lineProductId), 
                $out += '">', $line = 4, $out += $escape(rs.lineProductName), $out += "</a>", $line = 4), 
                $out += "</td> <td>", $line = 5, null == rs.startTime || "" == rs.startTime ? ($out += "-", 
                $line = 5) : ($line = 5, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $line = 5), $out += "</td> <td>", $line = 6, null != rs.adultCount && "" != rs.adultCount || null != rs.childCount && "" != rs.childCount ? ($out += " ", 
                $line = 9, (null != rs.adultCount || "" != rs.adultCount) && ($out += ' <span class="F-float F-count">', 
                $line = 10, $out += $escape(rs.adultCount), $out += "</span> 大 ", $line = 11), $out += " ", 
                $line = 12, (null != rs.childCount || "" != rs.childCount) && ($out += ' <span class="F-float F-count">', 
                $line = 13, $out += $escape(rs.childCount), $out += "</span> 小 ", $line = 14), $out += " ", 
                $line = 15) : ($out += " - ", $line = 8), $out += " </td> <td>", $line = 17, null == rs.totalIncome || "" == rs.totalIncome ? ($out += "-", 
                $line = 17) : ($out += '<span class="F-float F-money">', $line = 17, $out += $escape(rs.totalIncome), 
                $out += "</span>", $line = 17), $out += "</td> <td>", $line = 18, null == rs.totalOtherIncome || "" == rs.totalOtherIncome ? ($out += "-", 
                $line = 18) : ($out += '<span class="F-float F-money">', $line = 18, $out += $escape(rs.totalOtherIncome), 
                $out += "</span>", $line = 18), $out += "</td> <td>", $line = 19, null == rs.orderIncome || "" == rs.orderIncome ? ($out += "-", 
                $line = 19) : ($out += '<span class="F-float F-money">', $line = 19, $out += $escape(rs.orderIncome), 
                $out += "</span>", $line = 19), $out += "</td> <td>", $line = 20, null == rs.totalOut || "" == rs.totalOut ? ($out += "-", 
                $line = 20) : ($out += '<span class="F-float F-money">', $line = 20, $out += $escape(rs.totalOut), 
                $out += "</span>", $line = 20), $out += "</td> <td>", $line = 21, null == rs.totalTrip || "" == rs.totalTrip ? ($out += "-", 
                $line = 21) : ($out += '<span class="F-float F-money">', $line = 21, $out += $escape(rs.totalTrip), 
                $out += "</span>", $line = 21), $out += "</td> <td>", $line = 22, null == rs.transferPay || "" == rs.transferPay ? ($out += "-", 
                $line = 22) : ($out += '<span class="F-float F-money">', $line = 22, $out += $escape(rs.transferPay), 
                $out += "</span>", $line = 22), $out += "</td> <td>", $line = 23, null == rs.orderPay || "" == rs.orderPay ? ($out += "-", 
                $line = 23) : ($out += '<span class="F-float F-money">', $line = 23, $out += $escape(rs.orderPay), 
                $out += "</span>", $line = 23), $out += "</td> <td>", $line = 24, null == rs.incomeTrip || "" == rs.incomeTrip ? ($out += "-", 
                $line = 24) : ($out += '<span class="F-float F-money">', $line = 24, $out += $escape(rs.incomeTrip), 
                $out += "</span>", $line = 24), $out += "</td> <td>", $line = 25, null == rs.payTrip || "" == rs.payTrip ? ($out += "-", 
                $line = 25) : ($out += '<span class="F-float F-money">', $line = 25, $out += $escape(rs.payTrip), 
                $out += "</span>", $line = 25), $out += "</td> <td>", $line = 26, null == rs.profit || "" == rs.profit ? ($out += "-", 
                $line = 26) : ($out += '<span class="F-float F-money">', $line = 26, $out += $escape(rs.profit), 
                $out += "</span>", $line = 26), $out += "</td> </tr> ", $line = 28;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr data-id="{{rs.id}}" lineProductId="{{rs.lineProductId}}">\r\n        <td>{{if rs.tripNumber == null || rs.tripNumber == ""}}-{{else}}{{rs.tripNumber}}{{/if}}</td>\r\n        <td>{{if rs.lineProductName == null || rs.lineProductName == ""}}-{{else}}<a class="T-option T-transfer" data-id="{{rs.lineProductId}}">{{rs.lineProductName}}</a>{{/if}}</td>\r\n        <td>{{if rs.startTime == null || rs.startTime == ""}}-{{else}}{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n        <td>{{if (rs.adultCount == null || rs.adultCount == "") && (rs.childCount == null || rs.childCount == "")}}\r\n                -\r\n            {{else}}\r\n                {{if (rs.adultCount != null || rs.adultCount != "")}}\r\n                    <span class="F-float F-count">{{rs.adultCount}}</span> 大 \r\n                {{/if}}\r\n                {{if (rs.childCount != null || rs.childCount != "")}}\r\n                    <span class="F-float F-count">{{rs.childCount}}</span> 小 \r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td>{{if rs.totalIncome == null || rs.totalIncome == ""}}-{{else}}<span class="F-float F-money">{{rs.totalIncome}}</span>{{/if}}</td>\r\n        <td>{{if rs.totalOtherIncome == null || rs.totalOtherIncome == ""}}-{{else}}<span class="F-float F-money">{{rs.totalOtherIncome}}</span>{{/if}}</td>\r\n        <td>{{if rs.orderIncome == null || rs.orderIncome == ""}}-{{else}}<span class="F-float F-money">{{rs.orderIncome}}</span>{{/if}}</td>\r\n        <td>{{if rs.totalOut == null || rs.totalOut == ""}}-{{else}}<span class="F-float F-money">{{rs.totalOut}}</span>{{/if}}</td>\r\n        <td>{{if rs.totalTrip == null || rs.totalTrip == ""}}-{{else}}<span class="F-float F-money">{{rs.totalTrip}}</span>{{/if}}</td>\r\n        <td>{{if rs.transferPay == null || rs.transferPay == ""}}-{{else}}<span class="F-float F-money">{{rs.transferPay}}</span>{{/if}}</td>\r\n        <td>{{if rs.orderPay == null || rs.orderPay == ""}}-{{else}}<span class="F-float F-money">{{rs.orderPay}}</span>{{/if}}</td>\r\n        <td>{{if rs.incomeTrip == null || rs.incomeTrip == ""}}-{{else}}<span class="F-float F-money">{{rs.incomeTrip}}</span>{{/if}}</td>\r\n        <td>{{if rs.payTrip == null || rs.payTrip == ""}}-{{else}}<span class="F-float F-money">{{rs.payTrip}}</span>{{/if}}</td>\r\n        <td>{{if rs.profit == null || rs.profit == ""}}-{{else}}<span class="F-float F-money">{{rs.profit}}</span>{{/if}}</td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});