/*TMODJS:{"debug":true,"version":242,"md5":"633654b60e5050f85a8d97ae1ec594d2"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/innerTransferOut/view/innerTransferOutCheckTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), $out = ($data.otherFee, $data.$index, $data.visitor, 
            "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(checking.id), 
                $out += '" data-entity-createTime="', $line = 2, $out += $escape(checking.createTime), 
                $out += '" data-confirm="', $line = 2, $out += $escape(checking.isConfirmAccount), 
                $out += '" data-entity-realUnPayedMoney="', $line = 2, $out += $escape(checking.realUnPayedMoney), 
                $out += '" data-entity-remark="', $line = 2, $out += $escape(checking.checkRemark), 
                $out += '"> <td>', $line = 3, $out += $escape(checking.lineProductName), $out += "</td> <td>", 
                $line = 4, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>111</td><!-- ", $line = 5, $out += $escape(checking.contactUserName), 
                $out += " --> <td>", $line = 6, $out += $escape(checking.adultCount), $out += "大", 
                $line = 6, $out += $escape(checking.childCount), $out += '小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 7, $out += $escape(checking.operateTransRealname), $out += "</td> <td>", 
                $line = 8, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="transNeedPayMoney">', $line = 9, $out += $escape(checking.transNeedPayMoney), 
                $out += "</span></td> <td> 大人:", $line = 11, $out += $escape(checking.transAdultPrice), 
                $out += "(元)*", $line = 11, $out += $escape(checking.transAdultCount), $out += "=", 
                $line = 11, $out += $escape(checking.transAdultPrice * checking.transAdultCount), 
                $out += "<br> 小孩:", $line = 12, $out += $escape(checking.transChildPrice), $out += "(元)*", 
                $line = 12, $out += $escape(checking.transChildCount), $out += "=", $line = 12, 
                $out += $escape(checking.transChildPrice * checking.transChildCount), $out += "<br> ", 
                $line = 13, 0 != checking.innerTransferFeeList.length ? ($out += " ", $line = 14, 
                $each(checking.innerTransferFeeList, function(otherFee) {
                    $out += " ", $line = 15, $out += $escape(otherFee.discribe), $out += ":", $line = 15, 
                    $out += $escape(otherFee.price), $out += "(元)*", $line = 15, $out += $escape(otherFee.count), 
                    $out += "=", $line = 15, $out += $escape(otherFee.price * otherFee.count), $out += "<br> ", 
                    $line = 16;
                }), $out += " ", $line = 17) : ($out += " - ", $line = 19), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney">', 
                $line = 21, $out += $escape(checking.payedMoney), $out += '</span><br>导游现收：<span class="currentNeedPayMoney">', 
                $line = 21, $out += $escape(checking.currentNeedPayMoney), $out += "</span></a></td> <td>", 
                $line = 22, 1 == checking.isConfirmAccount ? ($out += '<span><input class="money" type="text" readonly="readonly" value="', 
                $line = 22, $out += $escape(checking.punishMoney), $out += '"/></span>', $line = 22) : ($out += '<input type="text" class="money" name="settlementMoney" value="', 
                $line = 22, $out += $escape(checking.punishMoney), $out += '" />', $line = 22), 
                $out += '</td> <td><span class="settlementMoney">', $line = 23, $out += $escape(checking.settlementMoney), 
                $out += '</span></td> <td><span class="unPayedMoney">', $line = 24, $out += $escape(checking.unPayedMoney), 
                $out += "</span></td> <td>", $line = 25, 1 == checking.isConfirmAccount ? ($out += '<span><input type="text" maxlength="9" readonly="readonly" name="checkRemark" value="', 
                $line = 25, $out += $escape(checking.checkRemark), $out += '">', $line = 25) : ($out += '<input type="text" name="checkRemark" value="', 
                $line = 25, $out += $escape(checking.checkRemark), $out += '">', $line = 25), $out += "</td> <td>", 
                $line = 26, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", $line = 26) : ($line = 26, 
                null == checking.checkTime || "" == checking.checkTime ? ($out += "-", $line = 26) : ($line = 26, 
                $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 26), $line = 26), $out += "</td> <td>", $line = 27, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 27) : ($line = 27, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 27) : ($line = 27, $out += $escape(checking.checkRealname), $line = 27), 
                $line = 27), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" checkStatus="', 
                $line = 30, $out += $escape(checking.isConfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 31, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 31), 
                $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 55, $each(checking.touristGroupMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 57, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 58, $out += $escape(visitor.name), $out += "</td> <td>", $line = 59, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 60, 0 == visitor.idCardType && ($out += "身份证", $line = 60), 
                    $line = 60, 1 == visitor.idCardType && ($out += "护照", $line = 60), $line = 60, 2 == visitor.idCardType && ($out += "其他", 
                    $line = 60), $out += "</td> <td>", $line = 61, $out += $escape(visitor.idCardNumber), 
                    $out += "</td> <td>", $line = 62, 1 == visitor.isContactUser && ($out += "是", $line = 62), 
                    $out += "</td> </tr> ", $line = 64;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 69;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr class="T-checkTr" data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td>{{checking.lineProductName}}</td>\r\n        <td>{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>111</td><!-- {{checking.contactUserName}} -->\r\n        <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td>\r\n        <td>{{checking.operateTransRealname}}</td>\r\n        <td>{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="transNeedPayMoney">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>\r\n            大人:{{checking.transAdultPrice}}(元)*{{checking.transAdultCount}}={{checking.transAdultPrice*checking.transAdultCount}}<br>\r\n            小孩:{{checking.transChildPrice}}(元)*{{checking.transChildCount}}={{checking.transChildPrice*checking.transChildCount}}<br>\r\n            {{if checking.innerTransferFeeList.length != 0}}\r\n                {{each checking.innerTransferFeeList as otherFee}}\r\n                    {{otherFee.discribe}}:{{otherFee.price}}(元)*{{otherFee.count}}={{otherFee.price*otherFee.count}}<br>\r\n                {{/each}}\r\n                {{else}}\r\n                -\r\n            {{/if}}\r\n        </td>\r\n        <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney">{{checking.payedMoney}}</span><br>导游现收：<span class="currentNeedPayMoney">{{checking.currentNeedPayMoney}}</span></a></td>\r\n        <td>{{if checking.isConfirmAccount == 1}}<span><input class="money" type="text" readonly="readonly" value="{{checking.punishMoney}}"/></span>{{else}}<input type="text" class="money" name="settlementMoney" value="{{checking.punishMoney}}"  />{{/if}}</td>\r\n        <td><span class="settlementMoney">{{checking.settlementMoney}}</span></td>\r\n        <td><span class="unPayedMoney">{{checking.unPayedMoney}}</span></td>\r\n        <td>{{if checking.isConfirmAccount == 1}}<span><input type="text" maxlength="9" readonly="readonly" name="checkRemark" value="{{checking.checkRemark}}">{{else}}<input type="text"  name="checkRemark" value="{{checking.checkRemark}}">{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <input type="checkbox" checkStatus="{{checking.isConfirmAccount}}" class="ace innerTransferFinancial" \r\n                {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                <span class="lbl">对账</span>\r\n\r\n            </label>\r\n                <label>|</label>\r\n                <label>\r\n                    <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n                </label>\r\n        </td>\r\n    </tr>\r\n    <tr class="hide">\r\n        <td colspan="17">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">序号</th>\r\n                            <th class="th-border">姓名</th>\r\n                            <th class="th-border">联系电话</th>\r\n                            <th class="th-border">证件类型</th>\r\n                            <th class="th-border">证件号</th>\r\n                            <th class="th-border">是否联系人</th>\r\n                        </tr>\r\n                    </thead>  \r\n                    <tbody>\r\n                       {{each checking.touristGroupMemberList as visitor index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{visitor.name}}</td>\r\n                            <td>{{visitor.mobileNumber}}</td>\r\n                            <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                            <td>{{visitor.idCardNumber}}</td>\r\n                            <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                        </tr>\r\n                      {{/each}} \r\n                    </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});