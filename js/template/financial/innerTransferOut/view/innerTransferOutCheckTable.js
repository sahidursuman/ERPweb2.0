/*TMODJS:{"debug":true,"version":418,"md5":"d00b919b4429d355668e07973f5baccd"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutCheckTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), $out = ($data.otherFee, $data.$index, "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr class="T-checkTr ', $line = 2, checking.change && ($out += "success", 
                $line = 2), $out += '" data-id="', $line = 2, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 2, $out += $escape(checking.createTime), $out += '" data-confirm="', $line = 2, 
                $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 2, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 2, $out += $escape(checking.checkRemark), $out += '" ', $line = 2, checking.change && ($out += 'data-change="true"', 
                $line = 2), $out += "> <td>", $line = 3, $out += $escape(checking.orderNumber), 
                $out += "</td> <td>", $line = 4, $out += $escape(checking.lineProductName), $out += "</td> <td>", 
                $line = 5, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 6, $out += $escape(checking.contactUserName), $out += '</td> <td><a href="#" class="T-seeGroup" data-list="', 
                $line = 7, $out += $escape(checking.touristGroupMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 8, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 9, $out += $escape(checking.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 12, $out += $escape(checking.operateTransRealname), $out += "</td> <td>", 
                $line = 13, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="transNeedPayMoney F-float F-money">', $line = 14, 
                $out += $escape(checking.transNeedPayMoney), $out += '</span></td> <td style="text-align:left">', 
                $line = 15, checking.innerTransferFeeList.length > 0 ? ($out += " ", $line = 16, 
                $each(checking.innerTransferFeeList, function(otherFee) {
                    $out += " ", $line = 17, $out += $escape(otherFee.name), $out += ': <span class="F-float F-money">', 
                    $line = 18, $out += $escape(otherFee.price), $out += '</span> X <span class="F-float F-count">', 
                    $line = 19, $out += $escape(otherFee.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 20, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                    $line = 21;
                }), $out += " ", $line = 22) : ($out += "- ", $line = 23), $out += ' </td> <td class="align-left"><a href="javascript:void(0)" class="T-viewDetail in-block">社付：<span class="travelPayedMoney F-float F-money">', 
                $line = 25, $out += $escape(checking.payedMoney), $out += '</span></a></td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 26, checking.backMoney ? ($line = 26, $out += $escape(checking.backMoney), 
                $line = 26) : ($line = 26, $out += $escape(checking.punishMoney), $line = 26), $out += '" name="settlementMoney" ', 
                $line = 26, 1 == checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 26), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 27, $out += $escape(checking.settlementMoney), 
                $out += '</td> <td class="T-unReceivedMoney F-float F-money" name="unPayedMoney">', 
                $line = 28, $out += $escape(checking.unPayedMoney), $out += '</td> <td><span><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" ', 
                $line = 29, 1 == checking.isConfirmAccount && ($out += "disabled", $line = 29), 
                $out += ">", $line = 29, $out += $escape(checking.checkRemark), $out += "</textarea></td> <td>", 
                $line = 30, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", $line = 30) : ($line = 30, 
                null == checking.checkTime || "" == checking.checkTime ? ($out += "-", $line = 30) : ($line = 30, 
                $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 30), $line = 30), $out += "</td> <td>", $line = 31, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 31) : ($line = 31, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 31) : ($line = 31, $out += $escape(checking.checkRealname), $line = 31), 
                $line = 31), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" checkStatus="', 
                $line = 34, $out += $escape(checking.isConfirmAccount), $out += '" class="ace T-checkbox" ', 
                $line = 35, (checking.change && 1 == checking.isChecked || !checking.change && 1 == checking.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 35), $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 45;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr class="T-checkTr {{if checking.change}}success{{/if}}" data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}" {{if checking.change}}data-change="true"{{/if}}>\r\n        <td>{{checking.orderNumber}}</td>\r\n        <td>{{checking.lineProductName}}</td>\r\n        <td>{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>{{checking.contactUserName}}</td>\r\n        <td><a href="#" class="T-seeGroup" data-list="{{checking.touristGroupMemberList}}" title="查看小组">\r\n                <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            </a>\r\n        </td> \r\n        <td>{{checking.operateTransRealname}}</td>\r\n        <td>{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="transNeedPayMoney F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td style="text-align:left">{{if checking.innerTransferFeeList.length > 0}}\r\n                {{each checking.innerTransferFeeList as otherFee}}\r\n                    {{otherFee.name}}:\r\n                    <span class="F-float F-money">{{otherFee.price}}</span> X\r\n                    <span class="F-float F-count">{{otherFee.count}}</span> =\r\n                    <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                {{/each}}\r\n            {{else}}-\r\n            {{/if}}\r\n        </td>\r\n        <td class="align-left"><a href="javascript:void(0)" class="T-viewDetail in-block">社付：<span class="travelPayedMoney F-float F-money">{{checking.payedMoney}}</span></a></td>\r\n        <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{if checking.backMoney}}{{checking.backMoney}}{{else}}{{checking.punishMoney}}{{/if}}" name="settlementMoney" {{if checking.isConfirmAccount == 1}} disabled="disabled"{{/if}}></td>\r\n        <td class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</td>\r\n        <td class="T-unReceivedMoney F-float F-money" name="unPayedMoney">{{checking.unPayedMoney}}</td>\r\n        <td><span><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" {{if checking.isConfirmAccount == 1}}disabled{{/if}}>{{checking.checkRemark}}</textarea></td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <input type="checkbox" checkStatus="{{checking.isConfirmAccount}}" class="ace T-checkbox" \r\n                {{if (checking.change && checking.isChecked == 1) || (!checking.change && checking.isConfirmAccount == 1)}}checked="checked"{{/if}}/>\r\n                <span class="lbl">对账</span>\r\n\r\n            </label>\r\n            <label>|</label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});