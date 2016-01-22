/*TMODJS:{"debug":true,"version":32,"md5":"1131a557a802974e96d7671c48db5047"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guidePayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.guide, 
            $data.$index, $utils.$escape), isOuter = $data.isOuter, $out = "";
            return $line = 1, $each(list, function(guide) {
                $out += ' <tr class="T-checkTr" data-confirm="', $line = 2, $out += $escape(guide.isConfirmAccount), 
                $out += '" data-id="', $line = 2, $out += $escape(guide.id), $out += '" ', $line = 2, 
                guide.payMoney && ($out += " data-change='true' ", $line = 2), $out += '> <td><a class="T-action T-gid" data-id="', 
                $line = 3, $out += $escape(guide.tripPlanId), $out += '">', $line = 3, $out += $escape(guide.tripNumber), 
                $out += "</a></td> <td>", $line = 4, $out += $escape(guide.lineProductName), $out += "</td> <td>", 
                $line = 5, $out += $escape(guide.accountTime), $out += '</td> <td><span class="F-float F-money">', 
                $line = 6, $out += $escape(guide.guideAllPreMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 7, $out += $escape(guide.guideAllNowIncomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 8, $out += $escape(guide.guideAllNowPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 9, $out += $escape(guide.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 10, $out += $escape(guide.manageFee), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 11, $out += $escape(guide.shoppingRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 12, $out += $escape(guide.selfPayRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 13, $out += $escape(guide.guideIncomeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(guide.zhangmiantuibu), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 15, $out += $escape(guide.settlementMoney), $out += '</span></td> <td><a href="javascript:void(0);" class="T-action T-viewPayedMoney F-float F-money">', 
                $line = 16, $out += $escape(guide.payedMoney), $out += '</a></td> <td><span class="F-float F-money">', 
                $line = 17, $out += $escape(guide.unPayedMoney), $out += '</span></td> <td><input type="text" name="payMoney" class="F-float F-money money" ', 
                $line = 18, isOuter || ($out += ' data-le="', $line = 18, $out += $escape(guide.unPayedMoney), 
                $out += '" ', $line = 18, guide.unPayedMoney <= 0 && ($out += " disabled ", $line = 18), 
                $line = 18), $out += ' value="', $line = 18, $out += $escape(guide.payMoney), $out += '" ></td> <td><input type="text" name="payRemark" ', 
                $line = 19, !isOuter && guide.unPayedMoney <= 0 && ($out += " disabled ", $line = 19), 
                $out += ' value="', $line = 19, $out += $escape(guide.payRemark), $out += '"></td> <td>', 
                $line = 20, $out += $escape(guide.checkTime), $out += "</td> <td>", $line = 21, 
                $out += $escape(guide.checkRealName), $out += "</td> <td> ", $line = 23, guide.isConfirmAccount ? ($out += " 已对账 ", 
                $line = 23) : ($out += " 未对账 ", $line = 23), $out += ' &nbsp; <a class="cursor T-action T-view R-right" data-right="1290003">查看</a> </td> </tr> ', 
                $line = 27;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}" {{ if (!!guide.payMoney) }} data-change=\'true\' {{/if}}>\r\n    <td><a class="T-action T-gid" data-id="{{guide.tripPlanId}}">{{guide.tripNumber}}</a></td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td><span class="F-float F-money">{{guide.guideAllPreMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowIncomeMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowPayMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.price}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.manageFee}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.shoppingRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.selfPayRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideIncomeMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.zhangmiantuibu}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.settlementMoney}}</span></td>\r\n    <td><a href="javascript:void(0);" class="T-action T-viewPayedMoney F-float F-money">{{guide.payedMoney}}</a></td>\r\n    <td><span class="F-float F-money">{{guide.unPayedMoney}}</span></td>\r\n    <td><input type="text" name="payMoney" class="F-float F-money money" {{if !isOuter}} data-le="{{guide.unPayedMoney}}" {{if guide.unPayedMoney <= 0}} disabled {{/if}}{{/if}} value="{{guide.payMoney}}" ></td>\r\n    <td><input type="text" name="payRemark" {{if !isOuter && guide.unPayedMoney <= 0}} disabled {{/if}} value="{{guide.payRemark}}"></td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        {{ if guide.isConfirmAccount }} 已对账 {{else}} 未对账 {{/if}} &nbsp;\r\n        <a class="cursor T-action T-view R-right" data-right="1290003">查看</a>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});