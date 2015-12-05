/*TMODJS:{"debug":true,"version":5,"md5":"341d6b0ef9be87bf375073cf6f780138"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guidePayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.guide, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(list, function(guide) {
                $out += ' <tr class="T-checkTr" data-confirm="', $line = 2, $out += $escape(guide.isConfirmAccount), 
                $out += '" data-id="', $line = 2, $out += $escape(guide.id), $out += '"> <td><a class="T-gid" data-id="', 
                $line = 3, $out += $escape(guide.tripPlanId), $out += '">', $line = 3, $out += $escape(guide.tripNumber), 
                $out += "</a></td> <td>", $line = 4, $out += $escape(guide.lineProductName), $out += "</td> <td>", 
                $line = 5, $out += $escape(guide.accountTime), $out += "</td> <td>", $line = 6, 
                $out += $escape(guide.guideAllPreMoney), $out += "</td> <td>", $line = 7, $out += $escape(guide.guideAllNowIncomeMoney), 
                $out += "</td> <td>", $line = 8, $out += $escape(guide.guideAllNowPayMoney), $out += "</td> <td>", 
                $line = 9, $out += $escape(guide.price), $out += "</td> <td>", $line = 10, $out += $escape(guide.manageFee), 
                $out += "</td> <td>", $line = 11, $out += $escape(guide.shoppingRebateMoney), $out += "</td> <td>", 
                $line = 12, $out += $escape(guide.selfPayRebateMoney), $out += "</td> <td>", $line = 13, 
                $out += $escape(guide.guideIncomeMoney), $out += "</td> <td>", $line = 14, $out += $escape(guide.zhangmiantuibu), 
                $out += "</td> <td>", $line = 15, $out += $escape(guide.settlementMoney), $out += "</td> <td>", 
                $line = 16, $out += $escape(guide.payedMoney), $out += "</td> <td>", $line = 17, 
                $out += $escape(guide.unPayedMoney), $out += '</td> <td><input type="text" name="payMoney" class=""></td> <td> <select class="T-payType"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其它</option> </select> </td> <td><input type="text" name="payRemark" class=""></td> <td>', 
                $line = 29, $out += $escape(guide.checkTime), $out += "</td> <td>", $line = 30, 
                $out += $escape(guide.checkRealName), $out += "</td> <td> ", $line = 32, guide.isConfirmAccount ? ($out += " 已对账 ", 
                $line = 32) : ($out += " 未对账 ", $line = 32), $out += " ", $line = 33, guide.isConfirmAccount && ($out += ' <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label> <a class="cursor T-action T-view R-right" data-right="1290003">查看</a> ', 
                $line = 36), $out += " </td> </tr> ", $line = 39;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}">\r\n    <td><a class="T-gid" data-id="{{guide.tripPlanId}}">{{guide.tripNumber}}</a></td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td>{{guide.guideAllPreMoney}}</td>\r\n    <td>{{guide.guideAllNowIncomeMoney}}</td>\r\n    <td>{{guide.guideAllNowPayMoney}}</td>\r\n    <td>{{guide.price}}</td>\r\n    <td>{{guide.manageFee}}</td>\r\n    <td>{{guide.shoppingRebateMoney}}</td>\r\n    <td>{{guide.selfPayRebateMoney}}</td>\r\n    <td>{{guide.guideIncomeMoney}}</td>\r\n    <td>{{guide.zhangmiantuibu}}</td>\r\n    <td>{{guide.settlementMoney}}</td>\r\n    <td>{{guide.payedMoney}}</td>\r\n    <td>{{guide.unPayedMoney}}</td>\r\n    <td><input type="text" name="payMoney" class=""></td>\r\n    <td>\r\n        <select class="T-payType">\r\n            <option value="0">现金</option>\r\n            <option value="1">银行转账</option>\r\n            <option value="2">网上支付</option>\r\n            <option value="3">支票</option>\r\n            <option value="4">其它</option>\r\n        </select>\r\n    </td>\r\n    <td><input type="text" name="payRemark" class=""></td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        {{ if guide.isConfirmAccount }} 已对账 {{else}} 未对账 {{/if}}\r\n        {{ if guide.isConfirmAccount }}\r\n        <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label>\r\n        <a class="cursor T-action T-view R-right" data-right="1290003">查看</a>\r\n        {{/if}}\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});