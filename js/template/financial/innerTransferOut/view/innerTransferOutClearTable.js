/*TMODJS:{"debug":true,"version":102,"md5":"025da5fc19a6174a98320855fc64ee1b"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutClearTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), showBtnFlag = ($data.otherFee, $data.$index, $data.showBtnFlag), $out = ($data.visitor, 
            "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 2, $out += $escape(checking.createTime), $out += '" isComfirmStatus="', 
                $line = 2, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 2, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 2, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 3, 
                $out += $escape(checking.lineProductName), $out += "</td> <td>", $line = 4, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>111</td><!-- ", $line = 5, $out += $escape(checking.contactUserName), 
                $out += ' --> <td><span class="F-float F-count">', $line = 6, $out += $escape(checking.adultCount), 
                $out += '</span>大 <span class="F-float F-count">', $line = 7, $out += $escape(checking.childCount), 
                $out += '</span>小 <a href="#" class="T-seeGroup" style="margin-left:5px">展开</a> </td> <td>', 
                $line = 10, $out += $escape(checking.operateTransRealname), $out += "</td> <td>", 
                $line = 11, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-money">', $line = 12, $out += $escape(checking.transNeedPayMoney), 
                $out += '</span></td> <td> 大人:<span class="F-float F-money">', $line = 14, $out += $escape(checking.transAdultPrice), 
                $out += '</span>(元)* <span class="F-float F-count">', $line = 15, $out += $escape(checking.transAdultCount), 
                $out += '</span>= <span class="F-float F-money">', $line = 16, $out += $escape(checking.transAdultPrice * checking.transAdultCount), 
                $out += '</span><br> 小孩:<span class="F-float F-money">', $line = 17, $out += $escape(checking.transChildPrice), 
                $out += '</span>(元)* <span class="F-float F-count">', $line = 18, $out += $escape(checking.transChildCount), 
                $out += '</span>= <span class="F-float F-money">', $line = 19, $out += $escape(checking.transChildPrice * checking.transChildCount), 
                $out += "</span><br> ", $line = 20, 0 != checking.innerTransferFeeList.length && ($out += " ", 
                $line = 21, $each(checking.innerTransferFeeList, function(otherFee) {
                    $out += " ", $line = 22, $out += $escape(otherFee.discribe), $out += ': <span class="F-float F-money">', 
                    $line = 23, $out += $escape(otherFee.price), $out += '</span>(元)* <span class="F-float F-count">', 
                    $line = 24, $out += $escape(otherFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 25, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                    $line = 26;
                }), $out += " ", $line = 27), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">', 
                $line = 29, $out += $escape(checking.payedMoney), $out += '</span><br></a></td> <td><span class="F-float F-money">', 
                $line = 30, $out += $escape(checking.punishMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 31, $out += $escape(checking.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 32, $out += $escape(checking.unPayedMoney), $out += '</span></td> <td><input name="payMoney" type="text" class="money F-float F-money" value="', 
                $line = 33, $out += $escape(checking.payMoney), $out += '" data-le="', $line = 33, 
                $out += $escape(checking.unPayedMoney), $out += '" ', $line = 34, !showBtnFlag && checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 34), $out += '/></td> <td><input type="text" maxlength="9" name="payRemark" value="', 
                $line = 35, $out += $escape(checking.payRemark), $out += '" ', $line = 36, !showBtnFlag && checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 36), $out += " /></td> <td>", $line = 37, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 37) : ($line = 37, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 37) : ($line = 37, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 37), $line = 37), $out += "</td> <td>", $line = 38, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 38) : ($line = 38, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 38) : ($line = 38, $out += $escape(checking.checkRealname), $line = 38), 
                $line = 38), $out += '</td> <td> <label class="pos-rel"> ', $line = 41, 1 == checking.isConfirmAccount ? ($out += "<span>已对账</span>", 
                $line = 41) : ($out += "<span>未对账</span>", $line = 41), $out += ' </label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 62, $each(checking.touristGroupMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 64, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 65, $out += $escape(visitor.name), $out += "</td> <td>", $line = 66, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 67, 0 == visitor.idCardType && ($out += "身份证", $line = 67), 
                    $line = 67, 1 == visitor.idCardType && ($out += "护照", $line = 67), $line = 67, 2 == visitor.idCardType && ($out += "其他", 
                    $line = 67), $out += "</td> <td>", $line = 68, $out += $escape(visitor.idCardNumber), 
                    $out += "</td> <td>", $line = 69, 1 == visitor.isContactUser && ($out += "是", $line = 69), 
                    $out += "</td> </tr> ", $line = 71;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 76;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" isComfirmStatus="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td>{{checking.lineProductName}}</td>\r\n        <td>{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>111</td><!-- {{checking.contactUserName}} -->\r\n        <td><span class="F-float F-count">{{checking.adultCount}}</span>大\r\n            <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            <a href="#" class="T-seeGroup" style="margin-left:5px">展开</a>\r\n        </td>\r\n        <td>{{checking.operateTransRealname}}</td>\r\n        <td>{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>\r\n            大人:<span class="F-float F-money">{{checking.transAdultPrice}}</span>(元)*\r\n                 <span class="F-float F-count">{{checking.transAdultCount}}</span>=\r\n                 <span class="F-float F-money">{{checking.transAdultPrice*checking.transAdultCount}}</span><br>\r\n            小孩:<span class="F-float F-money">{{checking.transChildPrice}}</span>(元)*\r\n                 <span class="F-float F-count">{{checking.transChildCount}}</span>=\r\n                 <span class="F-float F-money">{{checking.transChildPrice*checking.transChildCount}}</span><br>\r\n            {{if checking.innerTransferFeeList.length != 0}}\r\n                {{each checking.innerTransferFeeList as otherFee}}\r\n                    {{otherFee.discribe}}:\r\n                    <span class="F-float F-money">{{otherFee.price}}</span>(元)*\r\n                    <span class="F-float F-count">{{otherFee.count}}</span>=\r\n                    <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                {{/each}}\r\n            {{/if}}\r\n        </td>\r\n        <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">{{checking.payedMoney}}</span><br></a></td>\r\n        <td><span class="F-float F-money">{{checking.punishMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{checking.settlementMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td><input name="payMoney" type="text" class="money F-float F-money" value="{{checking.payMoney}}" data-le="{{checking.unPayedMoney}}" \r\n        {{if !showBtnFlag && checking.unPayedMoney<= 0}} disabled {{/if}}/></td>\r\n        <td><input type="text" maxlength="9" name="payRemark" value="{{checking.payRemark}}"\r\n        {{if !showBtnFlag && checking.unPayedMoney<= 0}} disabled {{/if}} /></td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n            {{if checking.isConfirmAccount == 1}}<span>已对账</span>{{else}}<span>未对账</span>{{/if}}\r\n            </label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n    <tr class="hide">\r\n        <td colspan="17">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">序号</th>\r\n                            <th class="th-border">姓名</th>\r\n                            <th class="th-border">联系电话</th>\r\n                            <th class="th-border">证件类型</th>\r\n                            <th class="th-border">证件号</th>\r\n                            <th class="th-border">是否联系人</th>\r\n                        </tr>\r\n                    </thead>  \r\n                    <tbody>\r\n                       {{each checking.touristGroupMemberList as visitor index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{visitor.name}}</td>\r\n                            <td>{{visitor.mobileNumber}}</td>\r\n                            <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                            <td>{{visitor.idCardNumber}}</td>\r\n                            <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                        </tr>\r\n                      {{/each}} \r\n                    </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});