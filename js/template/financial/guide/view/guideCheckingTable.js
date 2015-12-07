/*TMODJS:{"debug":true,"version":30,"md5":"52a6c6b1bd5911ddc2c5d7d3ef8d3efc"}*/
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
                $out += "</td> <td>", $line = 15, guide.isConfirmAccount ? ($out += " ", $line = 15, 
                $out += $escape(guide.settlementMoney), $out += " ", $line = 15) : ($out += ' <input name="settlementMoney" type="text" class="T-settlementMoney" value="', 
                $line = 15, $out += $escape(guide.settlementMoney), $out += '"> ', $line = 15), 
                $out += '</td> <td class="T-payedDetail" data-money="', $line = 16, $out += $escape(guide.payedMoney), 
                $out += '">', $line = 16, guide.payedMoney > 0 ? ($out += '<a href="javascript:void(0);" class="T-action T-viewPayedMoney">', 
                $line = 16, $out += $escape(guide.payedMoney), $out += "</a>", $line = 16) : ($out += " ", 
                $line = 16, $out += $escape(guide.payedMoney), $out += " ", $line = 16), $out += '</td> <td name="unPayedMoney">', 
                $line = 17, $out += $escape(guide.unPayedMoney), $out += "</td> <td>", $line = 18, 
                guide.isConfirmAccount ? ($out += " ", $line = 18, $out += $escape(guide.checkRemark), 
                $out += " ", $line = 18) : ($out += ' <input type="text" class="T-checkRemark" name="checkRemark" value="', 
                $line = 18, $out += $escape(guide.checkRemark), $out += '"> ', $line = 18), $out += "</td> <td>", 
                $line = 19, $out += $escape(guide.checkTime), $out += "</td> <td>", $line = 20, 
                $out += $escape(guide.checkRealName), $out += '</td> <td> <label class="pos-rel R-right" data-right="1290002"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 23, guide.isConfirmAccount && ($out += ' checked="checked" ', $line = 23), 
                $out += '/> <span class="lbl"></span> </label> ', $line = 26, guide.isConfirmAccount && ($out += ' <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label> <a class="cursor T-action T-view R-right" data-right="1290003">查看</a> ', 
                $line = 29), $out += " </td> </tr> ", $line = 32;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}">\r\n    <td><a class="T-action T-gid" data-id="{{guide.tripPlanId}}">{{guide.tripNumber}}</a></td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td>{{guide.guideAllPreMoney}}</td>\r\n    <td>{{guide.guideAllNowIncomeMoney}}</td>\r\n    <td>{{guide.guideAllNowPayMoney}}</td>\r\n    <td>{{guide.price}}</td>\r\n    <td>{{guide.manageFee}}</td>\r\n    <td>{{guide.shoppingRebateMoney}}</td>\r\n    <td>{{guide.selfPayRebateMoney}}</td>\r\n    <td>{{guide.guideIncomeMoney}}</td>\r\n    <td>{{guide.zhangmiantuibu}}</td>\r\n    <td>{{if guide.isConfirmAccount}} {{guide.settlementMoney}} {{ else }} <input name="settlementMoney" type="text" class="T-settlementMoney" value="{{guide.settlementMoney}}"> {{/if}}</td>\r\n    <td class="T-payedDetail" data-money="{{guide.payedMoney}}">{{ if (guide.payedMoney > 0)}}<a href="javascript:void(0);" class="T-action T-viewPayedMoney">{{guide.payedMoney}}</a>{{else}} {{guide.payedMoney}} {{/if}}</td>\r\n    <td name="unPayedMoney">{{guide.unPayedMoney}}</td>\r\n    <td>{{if guide.isConfirmAccount}} {{guide.checkRemark}} {{ else }} <input type="text" class="T-checkRemark" name="checkRemark" value="{{guide.checkRemark}}"> {{/if}}</td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        <label class="pos-rel  R-right" data-right="1290002">\r\n            <input type="checkbox" class="ace T-checkbox" {{ if guide.isConfirmAccount }} checked="checked" {{/if}}/> \r\n            <span class="lbl"></span>\r\n        </label>\r\n        {{ if guide.isConfirmAccount }}\r\n        <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label>\r\n        <a class="cursor T-action T-view R-right" data-right="1290003">查看</a>\r\n        {{/if}}\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});