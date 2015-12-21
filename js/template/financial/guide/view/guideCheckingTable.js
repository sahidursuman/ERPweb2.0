/*TMODJS:{"debug":true,"version":40,"md5":"f3222bd791bc20f074a4c1c5992feb79"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideCheckingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.guide, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(list, function(guide) {
                $out += ' <tr class="T-checkTr" data-confirm="', $line = 2, $out += $escape(guide.isConfirmAccount), 
                $out += '" data-id="', $line = 2, $out += $escape(guide.id), $out += '"> <td><a class="T-action T-gid" data-id="', 
                $line = 3, $out += $escape(guide.tripPlanId), $out += '">', $line = 3, $out += $escape(guide.tripNumber), 
                $out += "</a></td> <td>", $line = 4, $out += $escape(guide.lineProductName), $out += "</td> <td>", 
                $line = 5, $out += $escape(guide.accountTime), $out += "</td> <td>", $line = 6, 
                $out += $escape(guide.guideAllPreMoney), $out += "</td> <td>", $line = 7, $out += $escape(guide.guideAllNowIncomeMoney), 
                $out += "</td> <td>", $line = 8, $out += $escape(guide.guideAllNowPayMoney), $out += "</td> <td>", 
                $line = 9, $out += $escape(guide.price), $out += "</td> <td>", $line = 10, $out += $escape(guide.manageFee), 
                $out += "</td> <td>", $line = 11, $out += $escape(guide.shoppingRebateMoney), $out += "</td> <td>", 
                $line = 12, $out += $escape(guide.selfPayRebateMoney), $out += "</td> <td>", $line = 13, 
                $out += $escape(guide.guideIncomeMoney), $out += "</td> <td>", $line = 14, $out += $escape(guide.zhangmiantuibu), 
                $out += '</td> <td><input name="settlementMoney" type="text" class="T-settlementMoney" value="', 
                $line = 15, $out += $escape(guide.settlementMoney), $out += '" ', $line = 15, guide.isConfirmAccount && ($out += ' disabled="disabled"', 
                $line = 15), $out += '> </td> <td class="T-payedDetail" data-money="', $line = 16, 
                $out += $escape(guide.payedMoney), $out += '">', $line = 16, guide.payedMoney > 0 ? ($out += '<a href="javascript:void(0);" class="T-action T-viewPayedMoney">', 
                $line = 16, $out += $escape(guide.payedMoney), $out += "</a>", $line = 16) : ($out += " ", 
                $line = 16, $out += $escape(guide.payedMoney), $out += " ", $line = 16), $out += '</td> <td name="unPayedMoney">', 
                $line = 17, $out += $escape(guide.unPayedMoney), $out += '</td> <td><input type="text" class="T-checkRemark" name="checkRemark" value="', 
                $line = 18, $out += $escape(guide.checkRemark), $out += '" ', $line = 18, guide.isConfirmAccount && ($out += ' disabled="disabled"', 
                $line = 18), $out += "></td> <td>", $line = 19, $out += $escape(guide.checkTime), 
                $out += "</td> <td>", $line = 20, $out += $escape(guide.checkRealName), $out += '</td> <td> <label class="pos-rel R-right" ', 
                $line = 22, guide.isConfirmAccount ? ($out += ' data-right="1200005" ', $line = 22) : ($out += ' data-right="1200002" ', 
                $line = 22), $out += '> <input type="checkbox" class="ace T-checkbox" ', $line = 23, 
                guide.isConfirmAccount && ($out += ' checked="checked" ', $line = 23), $out += '/> <span class="lbl">对账</span> </label> <label class="cursor" ', 
                $line = 26, guide.isConfirmAccount ? ($out += ' data-right="1200005" ', $line = 26) : ($out += ' data-right="1200002" ', 
                $line = 26), $out += '> <a data-right="1200003"> |</a></label> <a class="cursor T-action T-view" data-right="1200003">查看</a> </td> </tr> ', 
                $line = 30;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}">\r\n    <td><a class="T-action T-gid" data-id="{{guide.tripPlanId}}">{{guide.tripNumber}}</a></td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td>{{guide.guideAllPreMoney}}</td>\r\n    <td>{{guide.guideAllNowIncomeMoney}}</td>\r\n    <td>{{guide.guideAllNowPayMoney}}</td>\r\n    <td>{{guide.price}}</td>\r\n    <td>{{guide.manageFee}}</td>\r\n    <td>{{guide.shoppingRebateMoney}}</td>\r\n    <td>{{guide.selfPayRebateMoney}}</td>\r\n    <td>{{guide.guideIncomeMoney}}</td>\r\n    <td>{{guide.zhangmiantuibu}}</td>\r\n    <td><input name="settlementMoney" type="text" class="T-settlementMoney" value="{{guide.settlementMoney}}" {{if guide.isConfirmAccount}} disabled="disabled"{{/if}}> </td>\r\n    <td class="T-payedDetail" data-money="{{guide.payedMoney}}">{{ if (guide.payedMoney > 0)}}<a href="javascript:void(0);" class="T-action T-viewPayedMoney">{{guide.payedMoney}}</a>{{else}} {{guide.payedMoney}} {{/if}}</td>\r\n    <td name="unPayedMoney">{{guide.unPayedMoney}}</td>\r\n    <td><input type="text" class="T-checkRemark" name="checkRemark" value="{{guide.checkRemark}}"  {{if guide.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        <label class="pos-rel  R-right" {{ if guide.isConfirmAccount }} data-right="1200005" {{else}} data-right="1200002" {{/if}}>\r\n            <input type="checkbox" class="ace T-checkbox" {{ if guide.isConfirmAccount }} checked="checked" {{/if}}/> \r\n            <span class="lbl">对账</span>\r\n        </label>\r\n        <label class="cursor"  {{ if guide.isConfirmAccount }} data-right="1200005" {{else}} data-right="1200002" {{/if}}> <a data-right="1200003"> |</a></label>\r\n        <a class="cursor T-action T-view" data-right="1200003">查看</a>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});