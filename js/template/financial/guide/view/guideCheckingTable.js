/*TMODJS:{"debug":true,"version":91,"md5":"efaeb43a9d13385c0ed9b1a58d7c5e76"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideCheckingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, list = $data.list, $escape = ($data.guide, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(list, function(guide) {
                $out += ' <tr class="T-checkTr ', $line = 2, guide.change && ($out += "success", 
                $line = 2), $out += '" data-confirm="', $line = 2, $out += $escape(guide.isConfirmAccount), 
                $out += '" data-id="', $line = 2, $out += $escape(guide.id), $out += '" ', $line = 2, 
                guide.change && ($out += 'change="true"', $line = 2), $out += "> <td> <p> ", $line = 5, 
                guide.billStatus ? ($out += ' <a class="T-action T-gid" data-id="', $line = 6, $out += $escape(guide.tripPlanId), 
                $out += '" data-guidearrangeid = "', $line = 6, $out += $escape(guide.guideArrangeId), 
                $out += '">', $line = 6, $out += $escape(guide.tripNumber), $out += "</a> ", $line = 7) : ($out += " ", 
                $line = 8, $out += $escape(guide.tripNumber), $out += " ", $line = 9), $out += " </p> </td> <td>", 
                $line = 12, $out += $escape(guide.lineProductName), $out += "</td> <td>", $line = 13, 
                $out += $escape(guide.accountTime), $out += "</td> <td>", $line = 14, 0 == guide.guideAllPreMoney ? ($out += ' <span class="F-float F-money T-preMoney">', 
                $line = 15, $out += $escape(guide.guideAllPreMoney), $out += "</span> ", $line = 16) : ($out += ' <a class="cursor T-action T-borrow-detail"> <span class="F-float F-money T-preMoney">', 
                $line = 18, $out += $escape(guide.guideAllPreMoney), $out += "</span> </a> ", $line = 20), 
                $out += ' </td> <td><span class="F-float F-money">', $line = 22, $out += $escape(guide.guideAllNowIncomeMoney), 
                $out += '</span></span></td> <td><span class="F-float F-money">', $line = 23, $out += $escape(guide.guideAllNowPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 24, $out += $escape(guide.price), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 25, $out += $escape(guide.manageFee), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 26, $out += $escape(guide.shoppingRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 27, $out += $escape(guide.selfPayRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 28, $out += $escape(guide.guideIncomeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 29, $out += $escape(guide.zhangmiantuibu), 
                $out += "</span></td> <td>", $line = 30, guide.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 30, $out += $escape(guide.settlementMoney), $out += "</span> ", $line = 31) : ($out += '<input name="settlementMoney" type="text" class="money T-settlementMoney F-float F-money" value="', 
                $line = 31, $out += $escape(guide.settlementMoney), $out += '" /> ', $line = 32), 
                $out += ' </td> <td class="T-payedDetail F-float F-money" data-money="', $line = 34, 
                $out += $escape(guide.payedMoney), $out += '"><a href="javascript:void(0);" class="T-action T-viewPayedMoney">', 
                $line = 34, $out += $escape(guide.payedMoney), $out += '</a></td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 35, $out += $escape(guide.unPayedMoney), $out += "</span></td> <td>", $line = 36, 
                guide.isConfirmAccount ? ($line = 36, $out += $escape(guide.checkRemark), $out += " ", 
                $line = 37) : ($out += '<textarea class="col-sm-12 hct-textarea T-checkRemark" name="checkRemark" maxlength="1000">', 
                $line = 37, $out += $escape(guide.checkRemark), $out += "</textarea> ", $line = 38), 
                $out += " </td> <td>", $line = 40, $out += $escape(guide.checkTime), $out += "</td> <td>", 
                $line = 41, $out += $escape(guide.checkRealName), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 44, (guide.change && 1 == guide.isChecked || !guide.change && 1 == guide.isConfirmAccount) && ($out += ' checked="checked" ', 
                $line = 44), $out += '/> <span class="lbl">对账</span> </label> <label class="cursor"> |</a></label> <a class="cursor T-action T-view" data-right="1200003">查看</a> </td> </tr> ', 
                $line = 51;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as guide}}\r\n<tr class="T-checkTr {{if guide.change}}success{{/if}}" data-confirm="{{guide.isConfirmAccount}}" data-id="{{guide.id}}" {{if guide.change}}change="true"{{/if}}> \r\n    <td>\r\n        <p>\r\n            {{if guide.billStatus}}\r\n                <a class="T-action T-gid" data-id="{{guide.tripPlanId}}" data-guidearrangeid = "{{guide.guideArrangeId}}">{{guide.tripNumber}}</a>\r\n            {{else}}\r\n                {{guide.tripNumber}}\r\n            {{/if}}\r\n        </p>\r\n    </td>\r\n    <td>{{guide.lineProductName}}</td>\r\n    <td>{{guide.accountTime}}</td>\r\n    <td>{{if guide.guideAllPreMoney == 0}}\r\n        <span class="F-float F-money T-preMoney">{{guide.guideAllPreMoney}}</span>\r\n        {{else}}\r\n        <a class="cursor T-action T-borrow-detail">\r\n            <span class="F-float F-money T-preMoney">{{guide.guideAllPreMoney}}</span>\r\n        </a>\r\n        {{/if}}\r\n    </td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowIncomeMoney}}</span></span></td>\r\n    <td><span class="F-float F-money">{{guide.guideAllNowPayMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.price}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.manageFee}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.shoppingRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.selfPayRebateMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.guideIncomeMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{guide.zhangmiantuibu}}</span></td>\r\n    <td>{{if guide.isConfirmAccount}}<span class="F-float F-money">{{guide.settlementMoney}}</span>\r\n        {{else}}<input name="settlementMoney" type="text" class="money T-settlementMoney F-float F-money" value="{{guide.settlementMoney}}" /> \r\n        {{/if}}\r\n    </td>\r\n    <td class="T-payedDetail F-float F-money" data-money="{{guide.payedMoney}}"><a href="javascript:void(0);" class="T-action T-viewPayedMoney">{{guide.payedMoney}}</a></td>\r\n    <td name="unPayedMoney"><span class="F-float F-money">{{guide.unPayedMoney}}</span></td>\r\n    <td>{{if guide.isConfirmAccount}}{{guide.checkRemark}}\r\n        {{else}}<textarea class="col-sm-12 hct-textarea T-checkRemark" name="checkRemark" maxlength="1000">{{guide.checkRemark}}</textarea>\r\n        {{/if}}\r\n    </td>\r\n    <td>{{guide.checkTime}}</td>\r\n    <td>{{guide.checkRealName}}</td>\r\n    <td>\r\n        <label class="pos-rel">\r\n            <input type="checkbox" class="ace T-checkbox" {{ if (guide.change && guide.isChecked == 1) || (!guide.change && guide.isConfirmAccount == 1) }} checked="checked" {{/if}}/> \r\n            <span class="lbl">对账</span>\r\n        </label>\r\n        <label class="cursor"> |</a></label>\r\n        <a class="cursor T-action T-view" data-right="1200003">查看</a>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});