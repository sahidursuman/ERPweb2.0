/*TMODJS:{"debug":true,"version":198,"md5":"bd8867bd59dcf43a13cc55a5186d97a3"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutClearTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), $out = ($data.otherFee, $data.$index, "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 2, $out += $escape(checking.createTime), $out += '" isComfirmStatus="', 
                $line = 2, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 2, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 2, $out += $escape(checking.checkRemark), $out += '"> <td rowspan="', $line = 3, 
                $out += $escape(checking.rowLen), $out += '">', $line = 3, $out += $escape(checking.orderNumber), 
                $out += '</td> <td rowspan="', $line = 4, $out += $escape(checking.rowLen), $out += '">', 
                $line = 4, $out += $escape(checking.lineProductName), $out += '</td> <td rowspan="', 
                $line = 5, $out += $escape(checking.rowLen), $out += '">', $line = 5, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 6, $out += $escape(checking.rowLen), $out += '">', 
                $line = 6, $out += $escape(checking.contactUserName), $out += '</td> <td rowspan="', 
                $line = 7, $out += $escape(checking.rowLen), $out += '"><a href="#" class="T-seeGroup" data-list="', 
                $line = 7, $out += $escape(checking.touristGroupMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 8, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 9, $out += $escape(checking.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 12, $out += $escape(checking.rowLen), $out += '">', $line = 12, $out += $escape(checking.operateTransRealname), 
                $out += '</td> <td rowspan="', $line = 13, $out += $escape(checking.rowLen), $out += '">', 
                $line = 13, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 14, $out += $escape(checking.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 14, $out += $escape(checking.transNeedPayMoney), $out += '</span></td> <td style="text-align:left">', 
                $line = 15, checking.innerTransferFeeList.length > 0 ? ($out += " ", $line = 16, 
                $each(checking.innerTransferFeeList, function(otherFee) {
                    $out += " ", $line = 17, $out += $escape(otherFee.name), $out += ': <span class="F-float F-money">', 
                    $line = 18, $out += $escape(otherFee.price), $out += '</span> X <span class="F-float F-count">', 
                    $line = 19, $out += $escape(otherFee.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 20, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                    $line = 21;
                }), $out += " ", $line = 22) : ($out += "- ", $line = 23), $out += ' </td> <td rowspan="', 
                $line = 25, $out += $escape(checking.rowLen), $out += '"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">', 
                $line = 25, $out += $escape(checking.payedMoney), $out += '</span><br></a></td> <td><span class="F-float F-money">', 
                $line = 26, $out += $escape(checking.punishMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 27, $out += $escape(checking.settlementMoney), $out += '</span></td> <td rowspan="', 
                $line = 28, $out += $escape(checking.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 28, $out += $escape(checking.unPayedMoney), $out += '</span></td> <td rowspan="', 
                $line = 29, $out += $escape(checking.rowLen), $out += '"><input name="payMoney" type="text" class="money F-float F-money" value="', 
                $line = 29, $out += $escape(checking.payMoney), $out += '" /></td> <td rowspan="', 
                $line = 30, $out += $escape(checking.rowLen), $out += '"><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">', 
                $line = 30, $out += $escape(checking.payRemark), $out += '</textarea></td> <td rowspan="', 
                $line = 31, $out += $escape(checking.rowLen), $out += '">', $line = 31, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 31) : ($line = 31, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 31) : ($line = 31, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 31), $line = 31), $out += '</td> <td rowspan="', $line = 32, $out += $escape(checking.rowLen), 
                $out += '">', $line = 32, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 32) : ($line = 32, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 32) : ($line = 32, $out += $escape(checking.checkRealname), $line = 32), 
                $line = 32), $out += '</td> <td rowspan="', $line = 33, $out += $escape(checking.rowLen), 
                $out += '"> <label class="pos-rel"> ', $line = 35, 1 == checking.isConfirmAccount ? ($out += "<span>已对账</span>", 
                $line = 35) : ($out += "<span>未对账</span>", $line = 35), $out += ' </label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 42;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" isComfirmStatus="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td rowspan="{{checking.rowLen}}">{{checking.orderNumber}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.lineProductName}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.contactUserName}}</td>\r\n        <td rowspan="{{checking.rowLen}}"><a href="#" class="T-seeGroup" data-list="{{checking.touristGroupMemberList}}" title="查看小组">\r\n                <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            </a>\r\n        </td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransRealname}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}"><span class="F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td style="text-align:left">{{if checking.innerTransferFeeList.length > 0}}\r\n                {{each checking.innerTransferFeeList as otherFee}}\r\n                    {{otherFee.name}}:\r\n                    <span class="F-float F-money">{{otherFee.price}}</span> X\r\n                    <span class="F-float F-count">{{otherFee.count}}</span> =\r\n                    <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                {{/each}}\r\n            {{else}}-\r\n            {{/if}}\r\n        </td>\r\n        <td rowspan="{{checking.rowLen}}"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">{{checking.payedMoney}}</span><br></a></td>\r\n        <td><span class="F-float F-money">{{checking.punishMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{checking.settlementMoney}}</span></td>\r\n        <td rowspan="{{checking.rowLen}}"><span class="F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td rowspan="{{checking.rowLen}}"><input name="payMoney" type="text" class="money F-float F-money" value="{{checking.payMoney}}" /></td>\r\n        <td rowspan="{{checking.rowLen}}"><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">{{checking.payRemark}}</textarea></td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">\r\n            <label class="pos-rel">\r\n            {{if checking.isConfirmAccount == 1}}<span>已对账</span>{{else}}<span>未对账</span>{{/if}}\r\n            </label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});