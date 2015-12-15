/*TMODJS:{"debug":true,"version":4,"md5":"2878d9d9796ada10b46d0cbb4afe5ce7"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/totalProfit/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, null == rs.tripNumber || "" == rs.tripNumber ? ($out += "-", $line = 3) : ($line = 3, 
                $out += $escape(rs.tripNumber), $line = 3), $out += "</td> <td>", $line = 4, null == rs.lineProductName || "" == rs.lineProductName ? ($out += "-", 
                $line = 4) : ($out += '<a class="T-option T-transfer" data-id="', $line = 4, $out += $escape(rs.lineProductId), 
                $out += '">', $line = 4, $out += $escape(rs.lineProductName), $out += "</a>", $line = 4), 
                $out += "</td> <td>", $line = 5, null == rs.startTime || "" == rs.startTime ? ($out += "-", 
                $line = 5) : ($line = 5, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $line = 5), $out += "</td> <td>", $line = 6, null != rs.adultCount && "" != rs.adultCount || null != rs.childCount && "" != rs.childCount ? ($out += " ", 
                $line = 9, (null != rs.adultCount || "" != rs.adultCount) && ($out += " ", $line = 10, 
                $out += $escape(rs.adultCount), $out += " 大 ", $line = 11), $out += " ", $line = 12, 
                (null != rs.childCount || "" != rs.childCount) && ($out += " ", $line = 13, $out += $escape(rs.childCount), 
                $out += " 小 ", $line = 14), $out += " ", $line = 15) : ($out += " - ", $line = 8), 
                $out += " </td> <td>", $line = 17, null == rs.totalIncome || "" == rs.totalIncome ? ($out += "-", 
                $line = 17) : ($line = 17, $out += $escape(rs.totalIncome), $line = 17), $out += "</td> <td>", 
                $line = 18, null == rs.totalOtherIncome || "" == rs.totalOtherIncome ? ($out += "-", 
                $line = 18) : ($line = 18, $out += $escape(rs.totalOtherIncome), $line = 18), $out += "</td> <td>", 
                $line = 19, null == rs.orderIncome || "" == rs.orderIncome ? ($out += "-", $line = 19) : ($line = 19, 
                $out += $escape(rs.orderIncome), $line = 19), $out += "</td> <td>", $line = 20, 
                null == rs.totalOut || "" == rs.totalOut ? ($out += "-", $line = 20) : ($line = 20, 
                $out += $escape(rs.totalOut), $line = 20), $out += "</td> <td>", $line = 21, null == rs.totalTrip || "" == rs.totalTrip ? ($out += "-", 
                $line = 21) : ($line = 21, $out += $escape(rs.totalTrip), $line = 21), $out += "</td> <td>", 
                $line = 22, null == rs.innerPay || "" == rs.innerPay ? ($out += "-", $line = 22) : ($line = 22, 
                $out += $escape(rs.innerPay), $line = 22), $out += "</td> <td>", $line = 23, null == rs.transferPay || "" == rs.transferPay ? ($out += "-", 
                $line = 23) : ($line = 23, $out += $escape(rs.transferPay), $line = 23), $out += "</td> <td>", 
                $line = 24, null == rs.orderPay || "" == rs.orderPay ? ($out += "-", $line = 24) : ($line = 24, 
                $out += $escape(rs.orderPay), $line = 24), $out += "</td> <td>", $line = 25, null == rs.incomeTrip || "" == rs.incomeTrip ? ($out += "-", 
                $line = 25) : ($line = 25, $out += $escape(rs.incomeTrip), $line = 25), $out += "</td> <td>", 
                $line = 26, null == rs.payTrip || "" == rs.payTrip ? ($out += "-", $line = 26) : ($line = 26, 
                $out += $escape(rs.payTrip), $line = 26), $out += "</td> <td>", $line = 27, null == rs.profit || "" == rs.profit ? ($out += "-", 
                $line = 27) : ($line = 27, $out += $escape(rs.profit), $line = 27), $out += "</td> </tr> ", 
                $line = 29;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{if rs.tripNumber == null || rs.tripNumber == ""}}-{{else}}{{rs.tripNumber}}{{/if}}</td>\r\n        <td>{{if rs.lineProductName == null || rs.lineProductName == ""}}-{{else}}<a class="T-option T-transfer" data-id="{{rs.lineProductId}}">{{rs.lineProductName}}</a>{{/if}}</td>\r\n        <td>{{if rs.startTime == null || rs.startTime == ""}}-{{else}}{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n        <td>{{if (rs.adultCount == null || rs.adultCount == "") && (rs.childCount == null || rs.childCount == "")}}\r\n                -\r\n            {{else}}\r\n                {{if (rs.adultCount != null || rs.adultCount != "")}}\r\n                    {{rs.adultCount}} 大 \r\n                {{/if}}\r\n                {{if (rs.childCount != null || rs.childCount != "")}}\r\n                    {{rs.childCount}} 小 \r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td>{{if rs.totalIncome == null || rs.totalIncome == ""}}-{{else}}{{rs.totalIncome}}{{/if}}</td>\r\n        <td>{{if rs.totalOtherIncome == null || rs.totalOtherIncome == ""}}-{{else}}{{rs.totalOtherIncome}}{{/if}}</td>\r\n        <td>{{if rs.orderIncome == null || rs.orderIncome == ""}}-{{else}}{{rs.orderIncome}}{{/if}}</td>\r\n        <td>{{if rs.totalOut == null || rs.totalOut == ""}}-{{else}}{{rs.totalOut}}{{/if}}</td>\r\n        <td>{{if rs.totalTrip == null || rs.totalTrip == ""}}-{{else}}{{rs.totalTrip}}{{/if}}</td>\r\n        <td>{{if rs.innerPay == null || rs.innerPay == ""}}-{{else}}{{rs.innerPay}}{{/if}}</td>\r\n        <td>{{if rs.transferPay == null || rs.transferPay == ""}}-{{else}}{{rs.transferPay}}{{/if}}</td>\r\n        <td>{{if rs.orderPay == null || rs.orderPay == ""}}-{{else}}{{rs.orderPay}}{{/if}}</td>\r\n        <td>{{if rs.incomeTrip == null || rs.incomeTrip == ""}}-{{else}}{{rs.incomeTrip}}{{/if}}</td>\r\n        <td>{{if rs.payTrip == null || rs.payTrip == ""}}-{{else}}{{rs.payTrip}}{{/if}}</td>\r\n        <td>{{if rs.profit == null || rs.profit == ""}}-{{else}}{{rs.profit}}{{/if}}</td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});