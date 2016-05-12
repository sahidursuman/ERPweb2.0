/*TMODJS:{"debug":true,"version":27,"md5":"b72ca05eaed2fa6d9a5448c9a8483725"}*/
define(function(require) {
    return require("../../../template")("financial/salesProfit/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '" lineId="', 
                $line = 2, $out += $escape(rs.lineProductId), $out += '"> <td>', $line = 3, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 3) : ($line = 3, $out += $escape(rs.orderNumber), $line = 3), $out += "</td> <td>", 
                $line = 4, null == rs.lineProductName || "" == rs.lineProductName ? ($out += "-", 
                $line = 4) : ($out += '<a class="T-option T-line" data-id="', $line = 4, $out += $escape(rs.lineProductId), 
                $out += '">', $line = 4, $out += $escape(rs.lineProductName), $out += "</a>", $line = 4), 
                $out += "</td> <td>", $line = 5, null == rs.startTime || "" == rs.startTime ? ($out += "-", 
                $line = 5) : ($line = 5, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $line = 5), $out += "</td> <td>", $line = 6, null == rs.memberName || "" == rs.memberName ? ($out += "-", 
                $line = 6) : ($line = 6, $out += $escape(rs.memberName), $line = 6), $out += "</td> <td>", 
                $line = 7, null != rs.adultCount && "" != rs.adultCount || null != rs.childCount && "" != rs.childCount ? ($out += " ", 
                $line = 10, (null != rs.adultCount || "" != rs.adultCount) && ($out += ' <span class="F-float F-count">', 
                $line = 11, $out += $escape(rs.adultCount), $out += "</span> 大 ", $line = 12), $out += " ", 
                $line = 13, (null != rs.childCount || "" != rs.childCount) && ($out += ' <span class="F-float F-count">', 
                $line = 14, $out += $escape(rs.childCount), $out += "</span> 小 ", $line = 15), $out += " ", 
                $line = 16) : ($out += " - ", $line = 9), $out += " </td> <td>", $line = 18, rs.partnerAgencyName ? ($line = 18, 
                $out += $escape(rs.partnerAgencyName), $line = 18) : ($out += "-", $line = 18), 
                $out += "</td> <td>", $line = 19, $out += $escape(rs.outOPUserName), $out += "</td> <td>", 
                $line = 20, $out += $escape(rs.businessName), $out += "-", $line = 20, $out += $escape(rs.groupName), 
                $out += "</td> <td>", $line = 21, rs.tripIncome ? ($out += '<span class="F-float F-money">', 
                $line = 21, $out += $escape(rs.tripIncome), $out += "</span>", $line = 21) : ($out += "-", 
                $line = 21), $out += "</td> <td>", $line = 22, rs.orderIncome ? ($out += '<span class="F-float F-money">', 
                $line = 22, $out += $escape(rs.orderIncome), $out += "</span>", $line = 22) : ($out += "-", 
                $line = 22), $out += "</td> <td>", $line = 23, rs.outCost ? ($out += '<span class="F-float F-money">', 
                $line = 23, $out += $escape(rs.outCost), $out += "</span>", $line = 23) : ($out += "-", 
                $line = 23), $out += "</td> <td>", $line = 24, rs.tripCost ? ($out += '<span class="F-float F-money">', 
                $line = 24, $out += $escape(rs.tripCost), $out += "</span>", $line = 24) : ($out += "-", 
                $line = 24), $out += "</td> <td>", $line = 25, rs.transferCost ? ($out += '<span class="F-float F-money">', 
                $line = 25, $out += $escape(rs.transferCost), $out += "</span>", $line = 25) : ($out += "-", 
                $line = 25), $out += "</td> <td>", $line = 26, rs.innerCost ? ($out += '<span class="F-float F-money">', 
                $line = 26, $out += $escape(rs.innerCost), $out += "</span>", $line = 26) : ($out += "-", 
                $line = 26), $out += "</td> <td>", $line = 27, rs.orderCost ? ($out += '<span class="F-float F-money">', 
                $line = 27, $out += $escape(rs.orderCost), $out += "</span>", $line = 27) : ($out += "-", 
                $line = 27), $out += "</td> <td>", $line = 28, rs.income ? ($out += '<span class="F-float F-money">', 
                $line = 28, $out += $escape(rs.income), $out += "</span>", $line = 28) : ($out += "-", 
                $line = 28), $out += "</td> <td>", $line = 29, rs.cost ? ($out += '<span class="F-float F-money">', 
                $line = 29, $out += $escape(rs.cost), $out += "</span>", $line = 29) : ($out += "-", 
                $line = 29), $out += "</td> <td>", $line = 30, rs.profit ? ($out += '<span class="F-float F-money">', 
                $line = 30, $out += $escape(rs.profit), $out += "</span>", $line = 30) : ($out += "-", 
                $line = 30), $out += "</td> <td>", $line = 31, rs.avgProfit ? ($out += '<span class="F-float F-money">', 
                $line = 31, $out += $escape(rs.avgProfit), $out += "</span>", $line = 31) : ($out += "-", 
                $line = 31), $out += "</td> </tr> ", $line = 33;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n    <tr data-id="{{rs.id}}"  lineId="{{rs.lineProductId}}">\r\n        <td>{{if rs.orderNumber  == null || rs.orderNumber  == ""}}-{{else}}{{rs.orderNumber }}{{/if}}</td>\r\n        <td>{{if rs.lineProductName == null || rs.lineProductName == ""}}-{{else}}<a class="T-option T-line" data-id="{{rs.lineProductId}}">{{rs.lineProductName}}</a>{{/if}}</td>\r\n        <td>{{if rs.startTime == null || rs.startTime == ""}}-{{else}}{{rs.startTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n        <td>{{if rs.memberName == null || rs.memberName == ""}}-{{else}}{{rs.memberName}}{{/if}}</td>\r\n        <td>{{if (rs.adultCount == null || rs.adultCount == "") && (rs.childCount == null || rs.childCount == "")}}\r\n                -\r\n            {{else}}\r\n                {{if (rs.adultCount != null || rs.adultCount != "")}}\r\n                    <span class="F-float F-count">{{rs.adultCount}}</span> 大 \r\n                {{/if}}\r\n                {{if (rs.childCount != null || rs.childCount != "")}}\r\n                    <span class="F-float F-count">{{rs.childCount}}</span> 小 \r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td>{{if !rs.partnerAgencyName}}-{{else}}{{rs.partnerAgencyName}}{{/if}}</td>\r\n        <td>{{rs.outOPUserName}}</td>\r\n        <td>{{rs.businessName}}-{{rs.groupName}}</td>\r\n        <td>{{if !rs.tripIncome}}-{{else}}<span class="F-float F-money">{{rs.tripIncome}}</span>{{/if}}</td>\r\n        <td>{{if !rs.orderIncome}}-{{else}}<span class="F-float F-money">{{rs.orderIncome}}</span>{{/if}}</td>\r\n        <td>{{if !rs.outCost}}-{{else}}<span class="F-float F-money">{{rs.outCost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.tripCost}}-{{else}}<span class="F-float F-money">{{rs.tripCost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.transferCost}}-{{else}}<span class="F-float F-money">{{rs.transferCost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.innerCost}}-{{else}}<span class="F-float F-money">{{rs.innerCost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.orderCost}}-{{else}}<span class="F-float F-money">{{rs.orderCost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.income}}-{{else}}<span class="F-float F-money">{{rs.income}}</span>{{/if}}</td>\r\n        <td>{{if !rs.cost}}-{{else}}<span class="F-float F-money">{{rs.cost}}</span>{{/if}}</td>\r\n        <td>{{if !rs.profit}}-{{else}}<span class="F-float F-money">{{rs.profit}}</span>{{/if}}</td>\r\n        <td>{{if !rs.avgProfit}}-{{else}}<span class="F-float F-money">{{rs.avgProfit}}</span>{{/if}}</td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});