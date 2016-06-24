/*TMODJS:{"debug":true,"version":76,"md5":"c15ed98fcd567131e03d078617e123e6"}*/
define(function(require) {
    return require("../../../template")("financial/payRequest/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(result, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 2, rs.change && ($out += "success", $line = 2), 
                $out += '" data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-type="', 
                $line = 2, $out += $escape(rs.type), $out += '" data-confirm="', $line = 2, $out += $escape(rs.isConfirmAccount), 
                $out += '"> <td>', $line = 3, $out += $escape(rs.type), $out += "</td> <td>", $line = 4, 
                $out += $escape(rs.accountType), $out += "</td> <td>", $line = 5, $out += $escape(rs.accountTime), 
                $out += "</td> <td>", $line = 6, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 7, $out += $escape(rs.unitName), $out += "</td> <td>", $line = 8, $out += $escape(rs.resourceName), 
                $out += '</td> <td><span class="F-float F-money">', $line = 9, $out += $escape(rs.needPay), 
                $out += '</span></td> <td><span class="F-float F-money T-payedDetail" data-money="', 
                $line = 10, $out += $escape(rs.payed), $out += '">', $line = 10, $out += $escape(rs.payed), 
                $out += '</span></td> <td class="F-float F-money" name="unPayedMoney">', $line = 11, 
                rs.change ? ($line = 11, $out += $escape(rs.unPayedMoney), $line = 11) : ($line = 11, 
                $out += $escape(rs.unpay), $line = 11), $out += "</td> ", $line = 12, rs.isConfirmAccount ? ($out += ' <td><span class="F-float F-money">', 
                $line = 13, $out += $escape(rs.realNeedPay), $out += "</span></td> <td>", $line = 14, 
                $out += $escape(rs.checkRemark), $out += "</td> <td>", $line = 15, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> <td>", $line = 16, $out += $escape(rs.checkUserName), $out += "</td> ", 
                $line = 17) : ($out += ' <td><input type="text" class="F-float F-money" name="settlementMoney" value="', 
                $line = 18, rs.change ? ($line = 18, $out += $escape(rs.settlementMoney), $line = 18) : ($line = 18, 
                $out += $escape(rs.needPay), $line = 18), $out += '" /></td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 19, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>-</td> <td>-</td> ", 
                $line = 22), $out += ' <td><label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 24, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 24), $out += ' /> <span class="lbl"></span> 对账 </label> <a class="cursor"> |</a> <a class="cursor ', 
                $line = 28, rs.isConfirmAccount ? ($out += "T-pay", $line = 28) : ($out += "gray", 
                $line = 28), $out += '">付款</a> </td> </tr> ', $line = 31;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each result as rs}}\r\n<tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-type="{{rs.type}}" data-confirm="{{rs.isConfirmAccount}}">\r\n    <td>{{rs.type}}</td>\r\n    <td>{{rs.accountType}}</td>\r\n    <td>{{rs.accountTime}}</td>\r\n    <td>{{rs.count}}</td>\r\n    <td>{{rs.unitName}}</td>\r\n    <td>{{rs.resourceName}}</td>\r\n    <td><span class="F-float F-money">{{rs.needPay}}</span></td>\r\n    <td><span class="F-float F-money T-payedDetail" data-money="{{rs.payed}}">{{rs.payed}}</span></td>\r\n    <td class="F-float F-money" name="unPayedMoney">{{if rs.change}}{{rs.unPayedMoney}}{{else}}{{rs.unpay}}{{/if}}</td>\r\n    {{if rs.isConfirmAccount}}\r\n    <td><span class="F-float F-money">{{rs.realNeedPay}}</span></td>\r\n    <td>{{rs.checkRemark}}</td>\r\n    <td>{{rs.checkTime | dateFormat:"yyyy-MM-dd hh:mm:ss"}}</td>\r\n    <td>{{rs.checkUserName}}</td>\r\n    {{else}}\r\n    <td><input type="text" class="F-float F-money" name="settlementMoney" value="{{if rs.change}}{{rs.settlementMoney}}{{else}}{{rs.needPay}}{{/if}}" /></td>\r\n    <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea></td>\r\n    <td>-</td>\r\n    <td>-</td>\r\n    {{/if}}\r\n    <td><label class="pos-rel">\r\n            <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} />\r\n            <span class="lbl"></span> 对账\r\n        </label>\r\n        <a class="cursor"> |</a>\r\n        <a class="cursor {{if rs.isConfirmAccount}}T-pay{{else}}gray{{/if}}">付款</a>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});