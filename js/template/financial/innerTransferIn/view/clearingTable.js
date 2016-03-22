/*TMODJS:{"debug":true,"version":21,"md5":"0e7e0c269132cb3e7b70cbe89f4f19f5"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/clearingTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, innerTransferIncomeDetailsList = $data.innerTransferIncomeDetailsList, $escape = ($data.checking, 
            $data.$index, $utils.$escape), btnShowStatus = ($data.tf, $data.btnShowStatus), $out = "";
            return $line = 1, $each(innerTransferIncomeDetailsList, function(checking) {
                $out += " <tr data-id=", $line = 2, $out += $escape(checking.id), $out += ' data-entity-id="', 
                $line = 2, $out += $escape(checking.id), $out += '" data-entity-createTime="', $line = 2, 
                $out += $escape(checking.createTime), $out += '" data-entity-isComfirmAccount="', 
                $line = 2, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-UnIncomeMoney="', 
                $line = 2, $out += $escape(checking.checkUnIncomeMoney), $out += '" data-entity-backMoney="', 
                $line = 2, $out += $escape(checking.backMoney), $out += '" data-entity-remark="', 
                $line = 2, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 3, 
                $out += $escape(checking.orderNumber), $out += "</td> <td>", $line = 4, $out += $escape(checking.lineProductName), 
                $out += '</td> <td name="startTime">', $line = 5, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 6, $out += $escape(checking.contactUserName), $out += '</td> <td><a href="#" class="T-action T-seeGroup" title="查看小组" data-list="', 
                $line = 7, $out += $escape(checking.tgMemberList), $out += '"> <span class="F-float F-count">', 
                $line = 8, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 9, $out += $escape(checking.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 12, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 13, 
                null != checking.receiveTime ? ($line = 13, $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), 
                $line = 13) : ($out += "-", $line = 13), $out += '</td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(checking.transInMoney), $out += "</span></td> <td>", 
                $line = 15, checking.transferFeeList.length > 0 && ($out += " ", $line = 16, $each(checking.transferFeeList, function(tf) {
                    $out += " ", $line = 17, $out += $escape(tf.discribe), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 18, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 18, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 19, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 20, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 21;
                }), $out += " ", $line = 22), $out += ' </td> <td><a href="javascript:void(0)" class="T-action T-payedDetail"><span>社收:<span class="F-float F-money">', 
                $line = 24, $out += $escape(checking.transGetedMoney), $out += '</span>,导游现收:<span class="F-float F-money">', 
                $line = 24, $out += $escape(checking.currentNeedPayMoney), $out += '</span></span></a></td> <td><span class="F-float F-money">', 
                $line = 25, $out += $escape(checking.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 26, $out += $escape(checking.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 27, $out += $escape(checking.unIncomeMoney), $out += '</span></td> <td><input type="text" maxlength="9" class="money F-float F-money" value="', 
                $line = 28, $out += $escape(checking.payMoney), $out += '" data-le="', $line = 28, 
                $out += $escape(checking.unIncomeMoney), $out += '" name="payMoney" value="', $line = 28, 
                $out += $escape(checking.payMoney), $out += '" style="text-align:center" ', $line = 29, 
                !btnShowStatus && checking.unIncomeMoney <= 0 && ($out += " disabled ", $line = 29), 
                $out += '></td> <td><textarea class="col-sm-12 hct-textarea T-remark" maxlength="1000" name="payRemark" ', 
                $line = 30, !btnShowStatus && checking.unIncomeMoney <= 0 && ($out += " disabled ", 
                $line = 30), $out += ">", $line = 30, $out += $escape(checking.incomeRemark), $out += "</textarea></td> <td>", 
                $line = 31, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 31) : ($line = 31, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 31), $out += "</td> <td>", $line = 32, null == checking.checkUserName || "" == checking.checkUserName ? ($out += "-", 
                $line = 32) : ($line = 32, $out += $escape(checking.checkUserName), $line = 32), 
                $out += '</td> <td><label class="pos-rel"> ', $line = 34, 1 == checking.isConfirmAccount ? ($out += " 已对账 ", 
                $line = 36) : ($out += " 未对账 ", $line = 38), $out += ' </label> <label> <a href="#" class="T-action T-needPayDetail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 45;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each innerTransferIncomeDetailsList as checking}}\r\n<tr data-id={{checking.id}} data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-entity-isComfirmAccount="{{checking.isConfirmAccount}}" data-entity-UnIncomeMoney="{{checking.checkUnIncomeMoney}}" data-entity-backMoney="{{checking.backMoney}}" data-entity-remark="{{checking.checkRemark}}">\r\n    <td>{{checking.orderNumber}}</td>\r\n    <td>{{checking.lineProductName}}</td>\r\n    <td name="startTime">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n    <td>{{checking.contactUserName}}</td>\r\n    <td><a href="#" class="T-action T-seeGroup" title="查看小组" data-list="{{checking.tgMemberList}}">\r\n            <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n            <span class="F-float F-count">{{checking.childCount}}</span>小\r\n        </a>\r\n    </td>\r\n    <td>{{checking.receiveUserName}}</td>\r\n    <td>{{if checking.receiveTime != null}}{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n    <td><span class="F-float F-money">{{checking.transInMoney}}</span></td>\r\n    <td>{{if checking.transferFeeList.length > 0}}\r\n            {{each checking.transferFeeList as tf}}\r\n                {{tf.discribe}}：\r\n                <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                <span class="F-float F-count">{{tf.count}}</span> =\r\n                <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n            {{/each}}\r\n        {{/if}}\r\n    </td>\r\n    <td><a href="javascript:void(0)" class="T-action T-payedDetail"><span>社收:<span class="F-float F-money">{{checking.transGetedMoney}}</span>,导游现收:<span class="F-float F-money">{{checking.currentNeedPayMoney}}</span></span></a></td>\r\n    <td><span class="F-float F-money">{{checking.backMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{checking.settlementMoney}}</span></td>\r\n    <td><span class="F-float F-money">{{checking.unIncomeMoney}}</span></td>\r\n    <td><input type="text" maxlength="9"  class="money F-float F-money" value="{{checking.payMoney}}" data-le="{{checking.unIncomeMoney}}" name="payMoney" value="{{checking.payMoney}}" style="text-align:center" \r\n    {{if !btnShowStatus && checking.unIncomeMoney <= 0}} disabled {{/if}}></td>\r\n    <td><textarea class="col-sm-12 hct-textarea T-remark" maxlength="1000" name="payRemark" {{if !btnShowStatus && checking.unIncomeMoney <= 0}} disabled {{/if}}>{{checking.incomeRemark}}</textarea></td>\r\n    <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n    <td>{{if checking.checkUserName == null || checking.checkUserName == ""}}-{{else}}{{checking.checkUserName}}{{/if}}</td>\r\n    <td><label class="pos-rel">\r\n            {{if checking.isConfirmAccount == 1}}\r\n              已对账\r\n              {{else}}\r\n              未对账\r\n            {{/if}}\r\n        </label>\r\n        <label>\r\n            <a href="#" class="T-action T-needPayDetail" style="margin-left:5px">查看</a>\r\n        </label>\r\n    </td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});