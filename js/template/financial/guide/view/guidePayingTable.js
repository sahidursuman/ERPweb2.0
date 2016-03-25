/*TMODJS:{"debug":true,"version":90,"md5":"1620e37b23a88887352b70eae847eef6"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guidePayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.guide, 
            $data.$index, $utils.$escape), isPayMoney = $data.isPayMoney, $out = "";
            return $line = 1, $each(list, function(guide) {
                $out += ' <tr class="T-checkTr" data-confirm="', $line = 2, $out += $escape(guide.isConfirmAccount), 
                $out += '" data-id="', $line = 2, $out += $escape(guide.id), $out += '" ', $line = 2, 
                guide.payMoney && isPayMoney && ($out += " data-change='true' ", $line = 2), $out += '> <td><a class="T-action T-gid" data-id="', 
                $line = 3, $out += $escape(guide.tripPlanId), $out += '">', $line = 3, $out += $escape(guide.tripNumber), 
                $out += "</a></td> <td>", $line = 4, $out += $escape(guide.lineProductName), $out += "</td> <td>", 
                $line = 5, $out += $escape(guide.accountTime), $out += "</td> <td>", $line = 6, 
                0 == guide.guideAllPreMoney ? ($out += ' <span class="F-float F-money T-preMoney">', 
                $line = 7, $out += $escape(guide.guideAllPreMoney), $out += "</span> ", $line = 8) : ($out += ' <a class="cursor T-action T-borrow-detail"> <span class="F-float F-money T-preMoney">', 
                $line = 10, $out += $escape(guide.guideAllPreMoney), $out += "</span> </a> ", $line = 12), 
                $out += ' </td> <td><span class="F-float F-money">', $line = 14, $out += $escape(guide.guideAllNowIncomeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 15, $out += $escape(guide.guideAllNowPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 16, $out += $escape(guide.price), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 17, $out += $escape(guide.manageFee), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 18, $out += $escape(guide.shoppingRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 19, $out += $escape(guide.selfPayRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 20, $out += $escape(guide.guideIncomeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 21, $out += $escape(guide.zhangmiantuibu), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 22, $out += $escape(guide.settlementMoney), 
                $out += '</span></td> <td><a href="javascript:void(0);" class="T-action T-viewPayedMoney F-float F-money">', 
                $line = 23, $out += $escape(guide.payedMoney), $out += '</a></td> <td><span class="F-float F-money">', 
                $line = 24, $out += $escape(guide.unPayedMoney), $out += '</span></td> <td><input type="text" name="payMoney" class="F-float F-money money" value="', 
                $line = 25, guide.payMoney2 ? ($line = 25, $out += $escape(guide.payMoney2), $line = 25) : isPayMoney && 0 != guide.payMoney && ($line = 25, 
                $out += $escape(guide.payMoney), $line = 25), $out += '" ></td> <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">', 
                $line = 26, $out += $escape(guide.payRemark), $out += "</textarea></td> <td>", $line = 27, 
                $out += $escape(guide.checkTime), $out += "</td> <td>", $line = 28, $out += $escape(guide.checkRealName), 
                $out += "</td> <td> ", $line = 30, guide.isConfirmAccount ? ($out += " 已对账 ", $line = 30) : ($out += " 未对账 ", 
                $line = 30), $out += ' &nbsp; <a class="cursor T-action T-view R-right" data-right="1290003">查看</a> </td> </tr> ', 
                $line = 34;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}" {{ if (!!guide.payMoney) && isPayMoney }} data-change=\'true\' {{/if}}>\r\n    <td><a class="T-action T-gid" data-id="{{guide.tripPlanId}}">{{guide.tripNumber}}</a></td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td>{{if guide.guideAllPreMoney == 0}}\r\n        <span class="F-float F-money T-preMoney">{{guide.guideAllPreMoney}}</span>\r\n        {{else}}\r\n        <a class="cursor T-action T-borrow-detail">\r\n            <span class="F-float F-money T-preMoney">{{guide.guideAllPreMoney}}</span>\r\n        </a>\r\n        {{/if}}\r\n    </td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowIncomeMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowPayMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.price}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.manageFee}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.shoppingRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.selfPayRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideIncomeMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.zhangmiantuibu}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.settlementMoney}}</span></td>\r\n    <td><a href="javascript:void(0);" class="T-action T-viewPayedMoney F-float F-money">{{guide.payedMoney}}</a></td>\r\n    <td><span class="F-float F-money">{{guide.unPayedMoney}}</span></td>\r\n    <td><input type="text" name="payMoney" class="F-float F-money money" value="{{if guide.payMoney2}}{{guide.payMoney2}}{{else if isPayMoney && guide.payMoney != 0}}{{guide.payMoney}}{{/if}}" ></td>\r\n    <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">{{guide.payRemark}}</textarea></td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        {{ if guide.isConfirmAccount }} 已对账 {{else}} 未对账 {{/if}} &nbsp;\r\n        <a class="cursor T-action T-view R-right" data-right="1290003">查看</a>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});